/*
 * IPv4 subnet math + VLSM planner (pure functions, no DOM).
 * Addresses are handled as unsigned 32-bit integers (x >>> 0).
 */
(function (global) {
  'use strict';

  /** "192.168.1.10" -> 3232235786, or null if invalid. */
  function parseIp(text) {
    const parts = String(text).trim().split('.');
    if (parts.length !== 4) return null;
    let n = 0;
    for (const p of parts) {
      if (!/^\d{1,3}$/.test(p) || Number(p) > 255) return null;
      n = n * 256 + Number(p);
    }
    return n >>> 0;
  }

  const ipToString = (n) => [24, 16, 8, 0].map((s) => (n >>> s) & 255).join('.');
  const prefixToMask = (p) => (p === 0 ? 0 : (0xffffffff << (32 - p)) >>> 0);
  const toBinary = (n) => [24, 16, 8, 0].map((s) => ((n >>> s) & 255).toString(2).padStart(8, '0')).join('.');

  /** Mask "255.255.255.0" -> 24, or null if the mask is not contiguous. */
  function maskToPrefix(text) {
    const m = parseIp(text);
    if (m === null) return null;
    for (let p = 0; p <= 32; p++) if (prefixToMask(p) === m) return p;
    return null;
  }

  /** Accepts "10.0.0.5/24", "10.0.0.5 255.255.255.0", "10.0.0.5/255.255.255.0" or a bare IP (/32). */
  function parseCidr(input) {
    const m = String(input).trim().match(/^([\d.]+)(?:\s*[\/\s]\s*([\d.]+))?$/);
    if (!m) return { error: 'Use a format like 192.168.10.0/24 or 192.168.10.5 255.255.255.0' };
    const ip = parseIp(m[1]);
    if (ip === null) return { error: `"${m[1]}" is not a valid IPv4 address` };
    let prefix = 32;
    if (m[2] !== undefined) {
      if (/^\d{1,2}$/.test(m[2]) && Number(m[2]) <= 32) prefix = Number(m[2]);
      else {
        prefix = maskToPrefix(m[2]);
        if (prefix === null) return { error: `"${m[2]}" is not a valid prefix length or subnet mask` };
      }
    }
    return { ip, prefix };
  }

  /** Describe the special-purpose range an address falls in (RFC 6890 and friends). */
  function addressType(ip) {
    const inRange = (cidr) => { const { ip: net, prefix } = parseCidr(cidr); return ((ip & prefixToMask(prefix)) >>> 0) === net; };
    const ranges = [
      ['10.0.0.0/8', 'Private (RFC 1918)'], ['172.16.0.0/12', 'Private (RFC 1918)'], ['192.168.0.0/16', 'Private (RFC 1918)'],
      ['100.64.0.0/10', 'Carrier-grade NAT (RFC 6598)'], ['127.0.0.0/8', 'Loopback'], ['169.254.0.0/16', 'Link-local / APIPA'],
      ['192.0.2.0/24', 'Documentation (RFC 5737)'], ['198.51.100.0/24', 'Documentation (RFC 5737)'], ['203.0.113.0/24', 'Documentation (RFC 5737)'],
      ['224.0.0.0/4', 'Multicast'], ['240.0.0.0/4', 'Reserved'], ['0.0.0.0/8', '"This network"'],
    ];
    for (const [cidr, label] of ranges) if (inRange(cidr)) return label;
    return 'Public';
  }

  /** Full details for one subnet. */
  function subnetInfo(ip, prefix) {
    const mask = prefixToMask(prefix);
    const network = (ip & mask) >>> 0;
    const broadcast = (network | ~mask) >>> 0;
    const total = 2 ** (32 - prefix);
    let first, last, usable;
    if (prefix === 32) { first = last = network; usable = 1; }
    else if (prefix === 31) { first = network; last = broadcast; usable = 2; } // point-to-point, RFC 3021
    else { first = network + 1; last = broadcast - 1; usable = total - 2; }
    const firstOctet = network >>> 24;
    const cls = firstOctet < 128 ? 'A' : firstOctet < 192 ? 'B' : firstOctet < 224 ? 'C' : firstOctet < 240 ? 'D (multicast)' : 'E (reserved)';
    return {
      ip, prefix, mask, network, broadcast, first, last, usable, total,
      wildcard: (~mask) >>> 0, cls, type: addressType(ip),
      cidr: `${ipToString(network)}/${prefix}`,
    };
  }

  /** Smallest prefix whose subnet has at least `hosts` usable addresses. */
  function prefixForHosts(hosts) {
    for (let p = 30; p >= 1; p--) if (2 ** (32 - p) - 2 >= hosts) return p;
    return null;
  }

  /**
   * VLSM: allocate subnets for each request inside `base` (largest first, so
   * every block stays aligned). requests: [{ name, vlan, hosts }]
   */
  function planVlsm(baseIp, basePrefix, requests) {
    const base = subnetInfo(baseIp, basePrefix);
    const sorted = requests
      .map((r, i) => ({ ...r, index: i, prefix: prefixForHosts(r.hosts) }))
      .sort((a, b) => a.prefix - b.prefix || a.index - b.index);
    const end = base.broadcast;
    let cursor = base.network;
    const allocations = [];
    for (const r of sorted) {
      if (r.prefix === null || r.prefix < basePrefix) return { error: `${r.name}: ${r.hosts} hosts will not fit in ${base.cidr}` };
      const size = 2 ** (32 - r.prefix);
      cursor = Math.ceil(cursor / size) * size; // align (already aligned when sorted, kept for safety)
      if (cursor + size - 1 > end) {
        return { error: `Out of space: ${base.cidr} cannot fit ${r.name} (/${r.prefix}, ${size} addresses) after the larger subnets. Use a bigger block.` };
      }
      const info = subnetInfo(cursor, r.prefix);
      allocations.push({ ...r, ...info, spare: info.usable - r.hosts });
      cursor += size;
    }
    const used = allocations.reduce((s, a) => s + a.total, 0);
    return { base, allocations, used, free: base.total - used, nextFree: cursor <= end ? ipToString(cursor) : null };
  }

  global.Subnet = { parseIp, ipToString, prefixToMask, maskToPrefix, toBinary, parseCidr, subnetInfo, addressType, prefixForHosts, planVlsm };
})(typeof window !== 'undefined' ? window : globalThis);
