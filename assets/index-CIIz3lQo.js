(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xl="169",Pu=0,Yl=1,Lu=2,bh=1,Eh=2,Zn=3,_i=0,cn=1,Dn=2,Qn=0,gs=1,nr=2,$l=3,Kl=4,Iu=5,Pi=100,Du=101,Uu=102,Nu=103,Fu=104,zu=200,Ou=201,Bu=202,ku=203,wa=204,Ta=205,Hu=206,Gu=207,Vu=208,Wu=209,Xu=210,qu=211,Yu=212,$u=213,Ku=214,Aa=0,Ca=1,Ra=2,ys=3,Pa=4,La=5,Ia=6,Da=7,wh=0,ju=1,Zu=2,gi=0,Th=1,Ah=2,Ch=3,Rh=4,Ju=5,Ph=6,vl=7,Lh=300,Ss=301,bs=302,Ua=303,Na=304,Po=306,Fa=1e3,Ii=1001,za=1002,dn=1003,Qu=1004,mr=1005,Un=1006,Fo=1007,Di=1008,ni=1009,Ih=1010,Dh=1011,ir=1012,Ml=1013,Ui=1014,Hn=1015,Gn=1016,yl=1017,Sl=1018,Es=1020,Uh=35902,Nh=1021,Fh=1022,Fn=1023,zh=1024,Oh=1025,_s=1026,ws=1027,bl=1028,El=1029,Bh=1030,wl=1031,Tl=1033,ro=33776,oo=33777,ao=33778,lo=33779,Oa=35840,Ba=35841,ka=35842,Ha=35843,Ga=36196,Va=37492,Wa=37496,Xa=37808,qa=37809,Ya=37810,$a=37811,Ka=37812,ja=37813,Za=37814,Ja=37815,Qa=37816,tl=37817,el=37818,nl=37819,il=37820,sl=37821,co=36492,rl=36494,ol=36495,kh=36283,al=36284,ll=36285,cl=36286,tf=3200,ef=3201,Hh=0,nf=1,hi="",En="srgb",xi="srgb-linear",Al="display-p3",Lo="display-p3-linear",Mo="linear",Ae="srgb",yo="rec709",So="p3",Gi=7680,jl=519,sf=512,rf=513,of=514,Gh=515,af=516,lf=517,cf=518,hf=519,hl=35044,Zl="300 es",Jn=2e3,bo=2001;class Rs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ho=Math.PI/180,Eo=180/Math.PI;function ti(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function Qe(i,t,e){return Math.max(t,Math.min(e,i))}function uf(i,t){return(i%t+t)%t}function zo(i,t,e){return(1-e)*i+e*t}function kn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function be(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ut{constructor(t=0,e=0){ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(t,e,n,s,r,o,a,l,h){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,h)}set(t,e,n,s,r,o,a,l,h){const c=this.elements;return c[0]=t,c[1]=s,c[2]=a,c[3]=e,c[4]=r,c[5]=l,c[6]=n,c[7]=o,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],h=n[1],c=n[4],u=n[7],f=n[2],m=n[5],g=n[8],x=s[0],d=s[3],p=s[6],E=s[1],M=s[4],S=s[7],N=s[2],I=s[5],R=s[8];return r[0]=o*x+a*E+l*N,r[3]=o*d+a*M+l*I,r[6]=o*p+a*S+l*R,r[1]=h*x+c*E+u*N,r[4]=h*d+c*M+u*I,r[7]=h*p+c*S+u*R,r[2]=f*x+m*E+g*N,r[5]=f*d+m*M+g*I,r[8]=f*p+m*S+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8];return e*o*c-e*a*h-n*r*c+n*a*l+s*r*h-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],u=c*o-a*h,f=a*l-c*r,m=h*r-o*l,g=e*u+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(s*h-c*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(c*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=m*x,t[7]=(n*l-h*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*o+h*a)+o+t,-s*h,s*l,-s*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Oo.makeScale(t,e)),this}rotate(t){return this.premultiply(Oo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Oo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Oo=new le;function Vh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function wo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ff(){const i=wo("canvas");return i.style.display="block",i}const Jl={};function uo(i){i in Jl||(Jl[i]=!0,console.warn(i))}function df(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function pf(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function mf(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ql=new le().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),tc=new le().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Os={[xi]:{transfer:Mo,primaries:yo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[En]:{transfer:Ae,primaries:yo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Lo]:{transfer:Mo,primaries:So,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(tc),fromReference:i=>i.applyMatrix3(Ql)},[Al]:{transfer:Ae,primaries:So,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(tc),fromReference:i=>i.applyMatrix3(Ql).convertLinearToSRGB()}},gf=new Set([xi,Lo]),xe={enabled:!0,_workingColorSpace:xi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!gf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Os[t].toReference,s=Os[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Os[i].primaries},getTransfer:function(i){return i===hi?Mo:Os[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Os[t].luminanceCoefficients)}};function xs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Vi;class _f{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Vi===void 0&&(Vi=wo("canvas")),Vi.width=t.width,Vi.height=t.height;const n=Vi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Vi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=wo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=xs(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(xs(e[n]/255)*255):e[n]=xs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let xf=0;class Wh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=ti(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ko(s[o].image)):r.push(ko(s[o]))}else r=ko(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ko(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_f.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vf=0;class en extends Rs{constructor(t=en.DEFAULT_IMAGE,e=en.DEFAULT_MAPPING,n=Ii,s=Ii,r=Un,o=Di,a=Fn,l=ni,h=en.DEFAULT_ANISOTROPY,c=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=ti(),this.name="",this.source=new Wh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fa:t.x=t.x-Math.floor(t.x);break;case Ii:t.x=t.x<0?0:1;break;case za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fa:t.y=t.y-Math.floor(t.y);break;case Ii:t.y=t.y<0?0:1;break;case za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Lh;en.DEFAULT_ANISOTROPY=1;class Be{constructor(t=0,e=0,n=0,s=1){Be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,h=l[0],c=l[4],u=l[8],f=l[1],m=l[5],g=l[9],x=l[2],d=l[6],p=l[10];if(Math.abs(c-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-d)<.01){if(Math.abs(c+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+d)<.1&&Math.abs(h+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(h+1)/2,S=(m+1)/2,N=(p+1)/2,I=(c+f)/4,R=(u+x)/4,T=(g+d)/4;return M>S&&M>N?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=I/n,r=R/n):S>N?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=I/s,r=T/s):N<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),n=R/r,s=T/r),this.set(n,s,r,e),this}let E=Math.sqrt((d-g)*(d-g)+(u-x)*(u-x)+(f-c)*(f-c));return Math.abs(E)<.001&&(E=1),this.x=(d-g)/E,this.y=(u-x)/E,this.z=(f-c)/E,this.w=Math.acos((h+m+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mf extends Rs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Be(0,0,t,e),this.scissorTest=!1,this.viewport=new Be(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new en(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Wh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wn extends Mf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Xh extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yf extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ps{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],h=n[s+1],c=n[s+2],u=n[s+3];const f=r[o+0],m=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==f||h!==m||c!==g){let d=1-a;const p=l*f+h*m+c*g+u*x,E=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const N=Math.sqrt(M),I=Math.atan2(N,p*E);d=Math.sin(d*I)/N,a=Math.sin(a*I)/N}const S=a*E;if(l=l*d+f*S,h=h*d+m*S,c=c*d+g*S,u=u*d+x*S,d===1-a){const N=1/Math.sqrt(l*l+h*h+c*c+u*u);l*=N,h*=N,c*=N,u*=N}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],h=n[s+2],c=n[s+3],u=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+c*u+l*m-h*f,t[e+1]=l*g+c*f+h*u-a*m,t[e+2]=h*g+c*m+a*f-l*u,t[e+3]=c*g-a*u-l*f-h*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(n/2),c=a(s/2),u=a(r/2),f=l(n/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*c*u+h*m*g,this._y=h*m*u-f*c*g,this._z=h*c*g+f*m*u,this._w=h*c*u-f*m*g;break;case"YXZ":this._x=f*c*u+h*m*g,this._y=h*m*u-f*c*g,this._z=h*c*g-f*m*u,this._w=h*c*u+f*m*g;break;case"ZXY":this._x=f*c*u-h*m*g,this._y=h*m*u+f*c*g,this._z=h*c*g+f*m*u,this._w=h*c*u-f*m*g;break;case"ZYX":this._x=f*c*u-h*m*g,this._y=h*m*u+f*c*g,this._z=h*c*g-f*m*u,this._w=h*c*u+f*m*g;break;case"YZX":this._x=f*c*u+h*m*g,this._y=h*m*u+f*c*g,this._z=h*c*g-f*m*u,this._w=h*c*u-f*m*g;break;case"XZY":this._x=f*c*u-h*m*g,this._y=h*m*u-f*c*g,this._z=h*c*g+f*m*u,this._w=h*c*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],h=e[2],c=e[6],u=e[10],f=n+a+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(c-l)*m,this._y=(r-h)*m,this._z=(o-s)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(c-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+h)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(r-h)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-s)/m,this._x=(r+h)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,h=e._z,c=e._w;return this._x=n*c+o*a+s*h-r*l,this._y=s*c+o*l+r*a-n*h,this._z=r*c+o*h+n*l-s*a,this._w=o*c-n*a-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const h=Math.sqrt(l),c=Math.atan2(h,a),u=Math.sin((1-e)*c)/h,f=Math.sin(e*c)/h;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ec.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ec.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*s-a*n),c=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*h+o*u-a*c,this.y=n+l*c+a*h-r*u,this.z=s+l*u+r*c-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ho.copy(this).projectOnVector(t),this.sub(Ho)}reflect(t){return this.sub(Ho.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ho=new D,ec=new Ps;class Fi{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gr.copy(n.boundingBox)),gr.applyMatrix4(t.matrixWorld),this.union(gr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bs),_r.subVectors(this.max,Bs),Wi.subVectors(t.a,Bs),Xi.subVectors(t.b,Bs),qi.subVectors(t.c,Bs),si.subVectors(Xi,Wi),ri.subVectors(qi,Xi),Si.subVectors(Wi,qi);let e=[0,-si.z,si.y,0,-ri.z,ri.y,0,-Si.z,Si.y,si.z,0,-si.x,ri.z,0,-ri.x,Si.z,0,-Si.x,-si.y,si.x,0,-ri.y,ri.x,0,-Si.y,Si.x,0];return!Go(e,Wi,Xi,qi,_r)||(e=[1,0,0,0,1,0,0,0,1],!Go(e,Wi,Xi,qi,_r))?!1:(xr.crossVectors(si,ri),e=[xr.x,xr.y,xr.z],Go(e,Wi,Xi,qi,_r))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Xn=[new D,new D,new D,new D,new D,new D,new D,new D],Rn=new D,gr=new Fi,Wi=new D,Xi=new D,qi=new D,si=new D,ri=new D,Si=new D,Bs=new D,_r=new D,xr=new D,bi=new D;function Go(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){bi.fromArray(i,r);const a=s.x*Math.abs(bi.x)+s.y*Math.abs(bi.y)+s.z*Math.abs(bi.z),l=t.dot(bi),h=e.dot(bi),c=n.dot(bi);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>a)return!1}return!0}const Sf=new Fi,ks=new D,Vo=new D;class zi{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Sf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ks.subVectors(t,this.center);const e=ks.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ks,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ks.copy(t.center).add(Vo)),this.expandByPoint(ks.copy(t.center).sub(Vo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new D,Wo=new D,vr=new D,oi=new D,Xo=new D,Mr=new D,qo=new D;class Cl{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qn.copy(this.origin).addScaledVector(this.direction,e),qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Wo.copy(t).add(e).multiplyScalar(.5),vr.copy(e).sub(t).normalize(),oi.copy(this.origin).sub(Wo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(vr),a=oi.dot(this.direction),l=-oi.dot(vr),h=oi.lengthSq(),c=Math.abs(1-o*o);let u,f,m,g;if(c>0)if(u=o*l-a,f=o*a-l,g=r*c,u>=0)if(f>=-g)if(f<=g){const x=1/c;u*=x,f*=x,m=u*(u+o*f+2*a)+f*(o*u+f+2*l)+h}else f=r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+h;else f=-r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+h;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+h):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+h):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+h);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Wo).addScaledVector(vr,f),m}intersectSphere(t,e){qn.subVectors(t.center,this.origin);const n=qn.dot(this.direction),s=qn.dot(qn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,f=this.origin;return h>=0?(n=(t.min.x-f.x)*h,s=(t.max.x-f.x)*h):(n=(t.max.x-f.x)*h,s=(t.min.x-f.x)*h),c>=0?(r=(t.min.y-f.y)*c,o=(t.max.y-f.y)*c):(r=(t.max.y-f.y)*c,o=(t.min.y-f.y)*c),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,qn)!==null}intersectTriangle(t,e,n,s,r){Xo.subVectors(e,t),Mr.subVectors(n,t),qo.crossVectors(Xo,Mr);let o=this.direction.dot(qo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,t);const l=a*this.direction.dot(Mr.crossVectors(oi,Mr));if(l<0)return null;const h=a*this.direction.dot(Xo.cross(oi));if(h<0||l+h>o)return null;const c=-a*oi.dot(qo);return c<0?null:this.at(c/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Me{constructor(t,e,n,s,r,o,a,l,h,c,u,f,m,g,x,d){Me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,h,c,u,f,m,g,x,d)}set(t,e,n,s,r,o,a,l,h,c,u,f,m,g,x,d){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=h,p[6]=c,p[10]=u,p[14]=f,p[3]=m,p[7]=g,p[11]=x,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Yi.setFromMatrixColumn(t,0).length(),r=1/Yi.setFromMatrixColumn(t,1).length(),o=1/Yi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),h=Math.sin(s),c=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*c,m=o*u,g=a*c,x=a*u;e[0]=l*c,e[4]=-l*u,e[8]=h,e[1]=m+g*h,e[5]=f-x*h,e[9]=-a*l,e[2]=x-f*h,e[6]=g+m*h,e[10]=o*l}else if(t.order==="YXZ"){const f=l*c,m=l*u,g=h*c,x=h*u;e[0]=f+x*a,e[4]=g*a-m,e[8]=o*h,e[1]=o*u,e[5]=o*c,e[9]=-a,e[2]=m*a-g,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*c,m=l*u,g=h*c,x=h*u;e[0]=f-x*a,e[4]=-o*u,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*c,e[9]=x-f*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*c,m=o*u,g=a*c,x=a*u;e[0]=l*c,e[4]=g*h-m,e[8]=f*h+x,e[1]=l*u,e[5]=x*h+f,e[9]=m*h-g,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,m=o*h,g=a*l,x=a*h;e[0]=l*c,e[4]=x-f*u,e[8]=g*u+m,e[1]=u,e[5]=o*c,e[9]=-a*c,e[2]=-h*c,e[6]=m*u+g,e[10]=f-x*u}else if(t.order==="XZY"){const f=o*l,m=o*h,g=a*l,x=a*h;e[0]=l*c,e[4]=-u,e[8]=h*c,e[1]=f*u+x,e[5]=o*c,e[9]=m*u-g,e[2]=g*u-m,e[6]=a*c,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bf,t,Ef)}lookAt(t,e,n){const s=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),ai.crossVectors(n,mn),ai.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),ai.crossVectors(n,mn)),ai.normalize(),yr.crossVectors(mn,ai),s[0]=ai.x,s[4]=yr.x,s[8]=mn.x,s[1]=ai.y,s[5]=yr.y,s[9]=mn.y,s[2]=ai.z,s[6]=yr.z,s[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],h=n[12],c=n[1],u=n[5],f=n[9],m=n[13],g=n[2],x=n[6],d=n[10],p=n[14],E=n[3],M=n[7],S=n[11],N=n[15],I=s[0],R=s[4],T=s[8],H=s[12],_=s[1],v=s[5],k=s[9],y=s[13],L=s[2],F=s[6],B=s[10],U=s[14],z=s[3],J=s[7],Q=s[11],gt=s[15];return r[0]=o*I+a*_+l*L+h*z,r[4]=o*R+a*v+l*F+h*J,r[8]=o*T+a*k+l*B+h*Q,r[12]=o*H+a*y+l*U+h*gt,r[1]=c*I+u*_+f*L+m*z,r[5]=c*R+u*v+f*F+m*J,r[9]=c*T+u*k+f*B+m*Q,r[13]=c*H+u*y+f*U+m*gt,r[2]=g*I+x*_+d*L+p*z,r[6]=g*R+x*v+d*F+p*J,r[10]=g*T+x*k+d*B+p*Q,r[14]=g*H+x*y+d*U+p*gt,r[3]=E*I+M*_+S*L+N*z,r[7]=E*R+M*v+S*F+N*J,r[11]=E*T+M*k+S*B+N*Q,r[15]=E*H+M*y+S*U+N*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],h=t[13],c=t[2],u=t[6],f=t[10],m=t[14],g=t[3],x=t[7],d=t[11],p=t[15];return g*(+r*l*u-s*h*u-r*a*f+n*h*f+s*a*m-n*l*m)+x*(+e*l*m-e*h*f+r*o*f-s*o*m+s*h*c-r*l*c)+d*(+e*h*u-e*a*m-r*o*u+n*o*m+r*a*c-n*h*c)+p*(-s*a*c-e*l*u+e*a*f+s*o*u-n*o*f+n*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],u=t[9],f=t[10],m=t[11],g=t[12],x=t[13],d=t[14],p=t[15],E=u*d*h-x*f*h+x*l*m-a*d*m-u*l*p+a*f*p,M=g*f*h-c*d*h-g*l*m+o*d*m+c*l*p-o*f*p,S=c*x*h-g*u*h+g*a*m-o*x*m-c*a*p+o*u*p,N=g*u*l-c*x*l-g*a*f+o*x*f+c*a*d-o*u*d,I=e*E+n*M+s*S+r*N;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/I;return t[0]=E*R,t[1]=(x*f*r-u*d*r-x*s*m+n*d*m+u*s*p-n*f*p)*R,t[2]=(a*d*r-x*l*r+x*s*h-n*d*h-a*s*p+n*l*p)*R,t[3]=(u*l*r-a*f*r-u*s*h+n*f*h+a*s*m-n*l*m)*R,t[4]=M*R,t[5]=(c*d*r-g*f*r+g*s*m-e*d*m-c*s*p+e*f*p)*R,t[6]=(g*l*r-o*d*r-g*s*h+e*d*h+o*s*p-e*l*p)*R,t[7]=(o*f*r-c*l*r+c*s*h-e*f*h-o*s*m+e*l*m)*R,t[8]=S*R,t[9]=(g*u*r-c*x*r-g*n*m+e*x*m+c*n*p-e*u*p)*R,t[10]=(o*x*r-g*a*r+g*n*h-e*x*h-o*n*p+e*a*p)*R,t[11]=(c*a*r-o*u*r-c*n*h+e*u*h+o*n*m-e*a*m)*R,t[12]=N*R,t[13]=(c*x*s-g*u*s+g*n*f-e*x*f-c*n*d+e*u*d)*R,t[14]=(g*a*s-o*x*s-g*n*l+e*x*l+o*n*d-e*a*d)*R,t[15]=(o*u*s-c*a*s+c*n*l-e*u*l-o*n*f+e*a*f)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,h=r*o,c=r*a;return this.set(h*o+n,h*a-s*l,h*l+s*a,0,h*a+s*l,c*a+n,c*l-s*o,0,h*l-s*a,c*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,h=r+r,c=o+o,u=a+a,f=r*h,m=r*c,g=r*u,x=o*c,d=o*u,p=a*u,E=l*h,M=l*c,S=l*u,N=n.x,I=n.y,R=n.z;return s[0]=(1-(x+p))*N,s[1]=(m+S)*N,s[2]=(g-M)*N,s[3]=0,s[4]=(m-S)*I,s[5]=(1-(f+p))*I,s[6]=(d+E)*I,s[7]=0,s[8]=(g+M)*R,s[9]=(d-E)*R,s[10]=(1-(f+x))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Yi.set(s[0],s[1],s[2]).length();const o=Yi.set(s[4],s[5],s[6]).length(),a=Yi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Pn.copy(this);const h=1/r,c=1/o,u=1/a;return Pn.elements[0]*=h,Pn.elements[1]*=h,Pn.elements[2]*=h,Pn.elements[4]*=c,Pn.elements[5]*=c,Pn.elements[6]*=c,Pn.elements[8]*=u,Pn.elements[9]*=u,Pn.elements[10]*=u,e.setFromRotationMatrix(Pn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Jn){const l=this.elements,h=2*r/(e-t),c=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let m,g;if(a===Jn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===bo)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Jn){const l=this.elements,h=1/(e-t),c=1/(n-s),u=1/(o-r),f=(e+t)*h,m=(n+s)*c;let g,x;if(a===Jn)g=(o+r)*u,x=-2*u;else if(a===bo)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Yi=new D,Pn=new Me,bf=new D(0,0,0),Ef=new D(1,1,1),ai=new D,yr=new D,mn=new D,nc=new Me,ic=new Ps;class zn{constructor(t=0,e=0,n=0,s=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],h=s[5],c=s[9],u=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return nc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ic.setFromEuler(this),this.setFromQuaternion(ic,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class qh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let wf=0;const sc=new D,$i=new Ps,Yn=new Me,Sr=new D,Hs=new D,Tf=new D,Af=new Ps,rc=new D(1,0,0),oc=new D(0,1,0),ac=new D(0,0,1),lc={type:"added"},Cf={type:"removed"},Ki={type:"childadded",child:null},Yo={type:"childremoved",child:null};class Ie extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new D,e=new zn,n=new Ps,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Me},normalMatrix:{value:new le}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.multiply($i),this}rotateOnWorldAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.premultiply($i),this}rotateX(t){return this.rotateOnAxis(rc,t)}rotateY(t){return this.rotateOnAxis(oc,t)}rotateZ(t){return this.rotateOnAxis(ac,t)}translateOnAxis(t,e){return sc.copy(t).applyQuaternion(this.quaternion),this.position.add(sc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(rc,t)}translateY(t){return this.translateOnAxis(oc,t)}translateZ(t){return this.translateOnAxis(ac,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Sr.copy(t):Sr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Hs,Sr,this.up):Yn.lookAt(Sr,Hs,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),$i.setFromRotationMatrix(Yn),this.quaternion.premultiply($i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lc),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Cf),Yo.child=t,this.dispatchEvent(Yo),Yo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lc),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,t,Tf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,Af,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){const u=l[h];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),h=o(t.textures),c=o(t.images),u=o(t.shapes),f=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),c.length>0&&(n.images=c),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const h in a){const c=a[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ie.DEFAULT_UP=new D(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new D,$n=new D,$o=new D,Kn=new D,ji=new D,Zi=new D,cc=new D,Ko=new D,jo=new D,Zo=new D,Jo=new Be,Qo=new Be,ta=new Be;class xn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ln.subVectors(t,e),s.cross(Ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ln.subVectors(s,e),$n.subVectors(n,e),$o.subVectors(t,e);const o=Ln.dot(Ln),a=Ln.dot($n),l=Ln.dot($o),h=$n.dot($n),c=$n.dot($o),u=o*h-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,m=(h*l-a*c)*f,g=(o*c-a*l)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Kn.x),l.addScaledVector(o,Kn.y),l.addScaledVector(a,Kn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Jo.setScalar(0),Qo.setScalar(0),ta.setScalar(0),Jo.fromBufferAttribute(t,e),Qo.fromBufferAttribute(t,n),ta.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Jo,r.x),o.addScaledVector(Qo,r.y),o.addScaledVector(ta,r.z),o}static isFrontFacing(t,e,n,s){return Ln.subVectors(n,e),$n.subVectors(t,e),Ln.cross($n).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),Ln.cross($n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return xn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return xn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return xn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;ji.subVectors(s,n),Zi.subVectors(r,n),Ko.subVectors(t,n);const l=ji.dot(Ko),h=Zi.dot(Ko);if(l<=0&&h<=0)return e.copy(n);jo.subVectors(t,s);const c=ji.dot(jo),u=Zi.dot(jo);if(c>=0&&u<=c)return e.copy(s);const f=l*u-c*h;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),e.copy(n).addScaledVector(ji,o);Zo.subVectors(t,r);const m=ji.dot(Zo),g=Zi.dot(Zo);if(g>=0&&m<=g)return e.copy(r);const x=m*h-l*g;if(x<=0&&h>=0&&g<=0)return a=h/(h-g),e.copy(n).addScaledVector(Zi,a);const d=c*g-m*u;if(d<=0&&u-c>=0&&m-g>=0)return cc.subVectors(r,s),a=(u-c)/(u-c+(m-g)),e.copy(s).addScaledVector(cc,a);const p=1/(d+x+f);return o=x*p,a=f*p,e.copy(n).addScaledVector(ji,o).addScaledVector(Zi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},br={h:0,s:0,l:0};function ea(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ft{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=En){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=xe.workingColorSpace){return this.r=t,this.g=e,this.b=n,xe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=xe.workingColorSpace){if(t=uf(t,1),e=Qe(e,0,1),n=Qe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ea(o,r,t+1/3),this.g=ea(o,r,t),this.b=ea(o,r,t-1/3)}return xe.toWorkingColorSpace(this,s),this}setStyle(t,e=En){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=En){const n=Yh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xs(t.r),this.g=xs(t.g),this.b=xs(t.b),this}copyLinearToSRGB(t){return this.r=Bo(t.r),this.g=Bo(t.g),this.b=Bo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=En){return xe.fromWorkingColorSpace(Je.copy(this),t),Math.round(Qe(Je.r*255,0,255))*65536+Math.round(Qe(Je.g*255,0,255))*256+Math.round(Qe(Je.b*255,0,255))}getHexString(t=En){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.fromWorkingColorSpace(Je.copy(this),e);const n=Je.r,s=Je.g,r=Je.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,h;const c=(a+o)/2;if(a===o)l=0,h=0;else{const u=o-a;switch(h=c<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=xe.workingColorSpace){return xe.fromWorkingColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=En){xe.fromWorkingColorSpace(Je.copy(this),t);const e=Je.r,n=Je.g,s=Je.b;return t!==En?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(li),this.setHSL(li.h+t,li.s+e,li.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(li),t.getHSL(br);const n=zo(li.h,br.h,e),s=zo(li.s,br.s,e),r=zo(li.l,br.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Je=new Ft;Ft.NAMES=Yh;let Rf=0;class vi extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=gs,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wa,this.blendDst=Ta,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ta&&(n.blendDst=this.blendDst),this.blendEquation!==Pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Le extends vi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ke=new D,Er=new ut;class nn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=hl,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Er.fromBufferAttribute(this,e),Er.applyMatrix3(t),this.setXY(e,Er.x,Er.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=kn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=kn(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=kn(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=kn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=kn(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array),r=be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==hl&&(t.usage=this.usage),t}}class $h extends nn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Kh extends nn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class me extends nn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Pf=0;const yn=new Me,na=new Ie,Ji=new D,gn=new Fi,Gs=new Fi,qe=new D;class Fe extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vh(t)?Kh:$h)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new le().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,e,n){return yn.makeTranslation(t,e,n),this.applyMatrix4(yn),this}scale(t,e,n){return yn.makeScale(t,e,n),this.applyMatrix4(yn),this}lookAt(t){return na.lookAt(t),na.updateMatrix(),this.applyMatrix4(na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new me(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Gs.setFromBufferAttribute(a),this.morphTargetsRelative?(qe.addVectors(gn.min,Gs.min),gn.expandByPoint(qe),qe.addVectors(gn.max,Gs.max),gn.expandByPoint(qe)):(gn.expandByPoint(Gs.min),gn.expandByPoint(Gs.max))}gn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)qe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(qe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let h=0,c=a.count;h<c;h++)qe.fromBufferAttribute(a,h),l&&(Ji.fromBufferAttribute(t,h),qe.add(Ji)),s=Math.max(s,n.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let T=0;T<n.count;T++)a[T]=new D,l[T]=new D;const h=new D,c=new D,u=new D,f=new ut,m=new ut,g=new ut,x=new D,d=new D;function p(T,H,_){h.fromBufferAttribute(n,T),c.fromBufferAttribute(n,H),u.fromBufferAttribute(n,_),f.fromBufferAttribute(r,T),m.fromBufferAttribute(r,H),g.fromBufferAttribute(r,_),c.sub(h),u.sub(h),m.sub(f),g.sub(f);const v=1/(m.x*g.y-g.x*m.y);isFinite(v)&&(x.copy(c).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(v),d.copy(u).multiplyScalar(m.x).addScaledVector(c,-g.x).multiplyScalar(v),a[T].add(x),a[H].add(x),a[_].add(x),l[T].add(d),l[H].add(d),l[_].add(d))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let T=0,H=E.length;T<H;++T){const _=E[T],v=_.start,k=_.count;for(let y=v,L=v+k;y<L;y+=3)p(t.getX(y+0),t.getX(y+1),t.getX(y+2))}const M=new D,S=new D,N=new D,I=new D;function R(T){N.fromBufferAttribute(s,T),I.copy(N);const H=a[T];M.copy(H),M.sub(N.multiplyScalar(N.dot(H))).normalize(),S.crossVectors(I,H);const v=S.dot(l[T])<0?-1:1;o.setXYZW(T,M.x,M.y,M.z,v)}for(let T=0,H=E.length;T<H;++T){const _=E[T],v=_.start,k=_.count;for(let y=v,L=v+k;y<L;y+=3)R(t.getX(y+0)),R(t.getX(y+1)),R(t.getX(y+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,h=new D,c=new D,u=new D;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),x=t.getX(f+1),d=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,d),c.subVectors(o,r),u.subVectors(s,r),c.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,d),a.add(c),l.add(c),h.add(c),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(d,h.x,h.y,h.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),c.subVectors(o,r),u.subVectors(s,r),c.cross(u),n.setXYZ(f+0,c.x,c.y,c.z),n.setXYZ(f+1,c.x,c.y,c.z),n.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)qe.fromBufferAttribute(t,e),qe.normalize(),t.setXYZ(e,qe.x,qe.y,qe.z)}toNonIndexed(){function t(a,l){const h=a.array,c=a.itemSize,u=a.normalized,f=new h.constructor(l.length*c);let m=0,g=0;for(let x=0,d=l.length;x<d;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*c;for(let p=0;p<c;p++)f[g++]=h[m++]}return new nn(f,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Fe,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],h=t(l,n);e.setAttribute(a,h)}const r=this.morphAttributes;for(const a in r){const l=[],h=r[a];for(let c=0,u=h.length;c<u;c++){const f=h[c],m=t(f,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const h=n[l];t.data.attributes[l]=h.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],c=[];for(let u=0,f=h.length;u<f;u++){const m=h[u];c.push(m.toJSON(t.data))}c.length>0&&(s[l]=c,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const h in s){const c=s[h];this.setAttribute(h,c.clone(e))}const r=t.morphAttributes;for(const h in r){const c=[],u=r[h];for(let f=0,m=u.length;f<m;f++)c.push(u[f].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let h=0,c=o.length;h<c;h++){const u=o[h];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hc=new Me,Ei=new Cl,wr=new zi,uc=new D,Tr=new D,Ar=new D,Cr=new D,ia=new D,Rr=new D,fc=new D,Pr=new D;class Ce extends Ie{constructor(t=new Fe,e=new Le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Rr.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const c=a[l],u=r[l];c!==0&&(ia.fromBufferAttribute(u,t),o?Rr.addScaledVector(ia,c):Rr.addScaledVector(ia.sub(e),c))}e.add(Rr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(r),Ei.copy(t.ray).recast(t.near),!(wr.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(wr,uc)===null||Ei.origin.distanceToSquared(uc)>(t.far-t.near)**2))&&(hc.copy(r).invert(),Ei.copy(t.ray).applyMatrix4(hc),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ei)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const d=f[g],p=o[d.materialIndex],E=Math.max(d.start,m.start),M=Math.min(a.count,Math.min(d.start+d.count,m.start+m.count));for(let S=E,N=M;S<N;S+=3){const I=a.getX(S),R=a.getX(S+1),T=a.getX(S+2);s=Lr(this,p,t,n,h,c,u,I,R,T),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let d=g,p=x;d<p;d+=3){const E=a.getX(d),M=a.getX(d+1),S=a.getX(d+2);s=Lr(this,o,t,n,h,c,u,E,M,S),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const d=f[g],p=o[d.materialIndex],E=Math.max(d.start,m.start),M=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let S=E,N=M;S<N;S+=3){const I=S,R=S+1,T=S+2;s=Lr(this,p,t,n,h,c,u,I,R,T),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let d=g,p=x;d<p;d+=3){const E=d,M=d+1,S=d+2;s=Lr(this,o,t,n,h,c,u,E,M,S),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}}function Lf(i,t,e,n,s,r,o,a){let l;if(t.side===cn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===_i,a),l===null)return null;Pr.copy(a),Pr.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(Pr);return h<e.near||h>e.far?null:{distance:h,point:Pr.clone(),object:i}}function Lr(i,t,e,n,s,r,o,a,l,h){i.getVertexPosition(a,Tr),i.getVertexPosition(l,Ar),i.getVertexPosition(h,Cr);const c=Lf(i,t,e,n,Tr,Ar,Cr,fc);if(c){const u=new D;xn.getBarycoord(fc,Tr,Ar,Cr,u),s&&(c.uv=xn.getInterpolatedAttribute(s,a,l,h,u,new ut)),r&&(c.uv1=xn.getInterpolatedAttribute(r,a,l,h,u,new ut)),o&&(c.normal=xn.getInterpolatedAttribute(o,a,l,h,u,new D),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:h,normal:new D,materialIndex:0};xn.getNormal(Tr,Ar,Cr,f.normal),c.face=f,c.barycoord=u}return c}class Jt extends Fe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],h=[],c=[],u=[];let f=0,m=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new me(h,3)),this.setAttribute("normal",new me(c,3)),this.setAttribute("uv",new me(u,2));function g(x,d,p,E,M,S,N,I,R,T,H){const _=S/R,v=N/T,k=S/2,y=N/2,L=I/2,F=R+1,B=T+1;let U=0,z=0;const J=new D;for(let Q=0;Q<B;Q++){const gt=Q*v-y;for(let qt=0;qt<F;qt++){const te=qt*_-k;J[x]=te*E,J[d]=gt*M,J[p]=L,h.push(J.x,J.y,J.z),J[x]=0,J[d]=0,J[p]=I>0?1:-1,c.push(J.x,J.y,J.z),u.push(qt/R),u.push(1-Q/T),U+=1}}for(let Q=0;Q<T;Q++)for(let gt=0;gt<R;gt++){const qt=f+gt+F*Q,te=f+gt+F*(Q+1),Z=f+(gt+1)+F*(Q+1),ht=f+(gt+1)+F*Q;l.push(qt,te,ht),l.push(te,Z,ht),z+=6}a.addGroup(m,z,H),m+=z,f+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ts(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ln(i){const t={};for(let e=0;e<i.length;e++){const n=Ts(i[e]);for(const s in n)t[s]=n[s]}return t}function If(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function jh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xe.workingColorSpace}const As={clone:Ts,merge:ln};var Df=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ve extends vi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Df,this.fragmentShader=Uf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ts(t.uniforms),this.uniformsGroups=If(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Zh extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=Jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ci=new D,dc=new ut,pc=new ut;class _n extends Zh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Eo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ho*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Eo*2*Math.atan(Math.tan(ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ci.x,ci.y).multiplyScalar(-t/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-t/ci.z)}getViewSize(t,e){return this.getViewBounds(t,dc,pc),e.subVectors(pc,dc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ho*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/h,s*=o.width/l,n*=o.height/h}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Qi=-90,ts=1;class Nf extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new _n(Qi,ts,t,e);s.layers=this.layers,this.add(s);const r=new _n(Qi,ts,t,e);r.layers=this.layers,this.add(r);const o=new _n(Qi,ts,t,e);o.layers=this.layers,this.add(o);const a=new _n(Qi,ts,t,e);a.layers=this.layers,this.add(a);const l=new _n(Qi,ts,t,e);l.layers=this.layers,this.add(l);const h=new _n(Qi,ts,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const h of e)this.remove(h);if(t===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===bo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,h,c]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,c),t.setRenderTarget(u,f,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Jh extends en{constructor(t,e,n,s,r,o,a,l,h,c){t=t!==void 0?t:[],e=e!==void 0?e:Ss,super(t,e,n,s,r,o,a,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ff extends wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Jh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Jt(5,5,5),r=new Ve({name:"CubemapFromEquirect",uniforms:Ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:Qn});r.uniforms.tEquirect.value=e;const o=new Ce(s,r),a=e.minFilter;return e.minFilter===Di&&(e.minFilter=Un),new Nf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const sa=new D,zf=new D,Of=new le;class Ci{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=sa.subVectors(n,e).cross(zf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(sa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Of.getNormalMatrix(t),s=this.coplanarPoint(sa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wi=new zi,Ir=new D;class Rl{constructor(t=new Ci,e=new Ci,n=new Ci,s=new Ci,r=new Ci,o=new Ci){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Jn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],h=s[4],c=s[5],u=s[6],f=s[7],m=s[8],g=s[9],x=s[10],d=s[11],p=s[12],E=s[13],M=s[14],S=s[15];if(n[0].setComponents(l-r,f-h,d-m,S-p).normalize(),n[1].setComponents(l+r,f+h,d+m,S+p).normalize(),n[2].setComponents(l+o,f+c,d+g,S+E).normalize(),n[3].setComponents(l-o,f-c,d-g,S-E).normalize(),n[4].setComponents(l-a,f-u,d-x,S-M).normalize(),e===Jn)n[5].setComponents(l+a,f+u,d+x,S+M).normalize();else if(e===bo)n[5].setComponents(a,u,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(t){return wi.center.set(0,0,0),wi.radius=.7071067811865476,wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ir.x=s.normal.x>0?t.max.x:t.min.x,Ir.y=s.normal.y>0?t.max.y:t.min.y,Ir.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ir)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Bf(i){const t=new WeakMap;function e(a,l){const h=a.array,c=a.usage,u=h.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,h,c),a.onUploadCallback();let m;if(h instanceof Float32Array)m=i.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)m=i.SHORT;else if(h instanceof Uint32Array)m=i.UNSIGNED_INT;else if(h instanceof Int32Array)m=i.INT;else if(h instanceof Int8Array)m=i.BYTE;else if(h instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,h){const c=l.array,u=l.updateRanges;if(i.bindBuffer(h,a),u.length===0)i.bufferSubData(h,0,c);else{u.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<u.length;m++){const g=u[f],x=u[m];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let m=0,g=u.length;m<g;m++){const x=u[m];i.bufferSubData(h,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,l),h.version=a.version}}return{get:s,remove:r,update:o}}class fn extends Fe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),h=a+1,c=l+1,u=t/a,f=e/l,m=[],g=[],x=[],d=[];for(let p=0;p<c;p++){const E=p*f-o;for(let M=0;M<h;M++){const S=M*u-r;g.push(S,-E,0),x.push(0,0,1),d.push(M/a),d.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){const M=E+h*p,S=E+h*(p+1),N=E+1+h*(p+1),I=E+1+h*p;m.push(M,S,I),m.push(S,N,I)}this.setIndex(m),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(x,3)),this.setAttribute("uv",new me(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fn(t.width,t.height,t.widthSegments,t.heightSegments)}}var kf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$f=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Kf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Qf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,td=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,nd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,od=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ad=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ld=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,cd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ud=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,md=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gd="gl_FragColor = linearToOutputTexel( gl_FragColor );",_d=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Md=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ed=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Td=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ad=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ld=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Id=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Dd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ud=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Od=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$d=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Kd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ep=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,np=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ip=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ap=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,up=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,mp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_p=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Sp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ep=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ap=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ip=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Up=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Op=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Yp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$p=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,em=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,im=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,om=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,am=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,um=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_m=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ae={alphahash_fragment:kf,alphahash_pars_fragment:Hf,alphamap_fragment:Gf,alphamap_pars_fragment:Vf,alphatest_fragment:Wf,alphatest_pars_fragment:Xf,aomap_fragment:qf,aomap_pars_fragment:Yf,batching_pars_vertex:$f,batching_vertex:Kf,begin_vertex:jf,beginnormal_vertex:Zf,bsdfs:Jf,iridescence_fragment:Qf,bumpmap_pars_fragment:td,clipping_planes_fragment:ed,clipping_planes_pars_fragment:nd,clipping_planes_pars_vertex:id,clipping_planes_vertex:sd,color_fragment:rd,color_pars_fragment:od,color_pars_vertex:ad,color_vertex:ld,common:cd,cube_uv_reflection_fragment:hd,defaultnormal_vertex:ud,displacementmap_pars_vertex:fd,displacementmap_vertex:dd,emissivemap_fragment:pd,emissivemap_pars_fragment:md,colorspace_fragment:gd,colorspace_pars_fragment:_d,envmap_fragment:xd,envmap_common_pars_fragment:vd,envmap_pars_fragment:Md,envmap_pars_vertex:yd,envmap_physical_pars_fragment:Id,envmap_vertex:Sd,fog_vertex:bd,fog_pars_vertex:Ed,fog_fragment:wd,fog_pars_fragment:Td,gradientmap_pars_fragment:Ad,lightmap_pars_fragment:Cd,lights_lambert_fragment:Rd,lights_lambert_pars_fragment:Pd,lights_pars_begin:Ld,lights_toon_fragment:Dd,lights_toon_pars_fragment:Ud,lights_phong_fragment:Nd,lights_phong_pars_fragment:Fd,lights_physical_fragment:zd,lights_physical_pars_fragment:Od,lights_fragment_begin:Bd,lights_fragment_maps:kd,lights_fragment_end:Hd,logdepthbuf_fragment:Gd,logdepthbuf_pars_fragment:Vd,logdepthbuf_pars_vertex:Wd,logdepthbuf_vertex:Xd,map_fragment:qd,map_pars_fragment:Yd,map_particle_fragment:$d,map_particle_pars_fragment:Kd,metalnessmap_fragment:jd,metalnessmap_pars_fragment:Zd,morphinstance_vertex:Jd,morphcolor_vertex:Qd,morphnormal_vertex:tp,morphtarget_pars_vertex:ep,morphtarget_vertex:np,normal_fragment_begin:ip,normal_fragment_maps:sp,normal_pars_fragment:rp,normal_pars_vertex:op,normal_vertex:ap,normalmap_pars_fragment:lp,clearcoat_normal_fragment_begin:cp,clearcoat_normal_fragment_maps:hp,clearcoat_pars_fragment:up,iridescence_pars_fragment:fp,opaque_fragment:dp,packing:pp,premultiplied_alpha_fragment:mp,project_vertex:gp,dithering_fragment:_p,dithering_pars_fragment:xp,roughnessmap_fragment:vp,roughnessmap_pars_fragment:Mp,shadowmap_pars_fragment:yp,shadowmap_pars_vertex:Sp,shadowmap_vertex:bp,shadowmask_pars_fragment:Ep,skinbase_vertex:wp,skinning_pars_vertex:Tp,skinning_vertex:Ap,skinnormal_vertex:Cp,specularmap_fragment:Rp,specularmap_pars_fragment:Pp,tonemapping_fragment:Lp,tonemapping_pars_fragment:Ip,transmission_fragment:Dp,transmission_pars_fragment:Up,uv_pars_fragment:Np,uv_pars_vertex:Fp,uv_vertex:zp,worldpos_vertex:Op,background_vert:Bp,background_frag:kp,backgroundCube_vert:Hp,backgroundCube_frag:Gp,cube_vert:Vp,cube_frag:Wp,depth_vert:Xp,depth_frag:qp,distanceRGBA_vert:Yp,distanceRGBA_frag:$p,equirect_vert:Kp,equirect_frag:jp,linedashed_vert:Zp,linedashed_frag:Jp,meshbasic_vert:Qp,meshbasic_frag:tm,meshlambert_vert:em,meshlambert_frag:nm,meshmatcap_vert:im,meshmatcap_frag:sm,meshnormal_vert:rm,meshnormal_frag:om,meshphong_vert:am,meshphong_frag:lm,meshphysical_vert:cm,meshphysical_frag:hm,meshtoon_vert:um,meshtoon_frag:fm,points_vert:dm,points_frag:pm,shadow_vert:mm,shadow_frag:gm,sprite_vert:_m,sprite_frag:xm},Ct={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Bn={basic:{uniforms:ln([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:ln([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Ft(0)}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:ln([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:ln([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:ln([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new Ft(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:ln([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:ln([Ct.points,Ct.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:ln([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:ln([Ct.common,Ct.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:ln([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:ln([Ct.sprite,Ct.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distanceRGBA:{uniforms:ln([Ct.common,Ct.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distanceRGBA_vert,fragmentShader:ae.distanceRGBA_frag},shadow:{uniforms:ln([Ct.lights,Ct.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};Bn.physical={uniforms:ln([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};const Dr={r:0,b:0,g:0},Ti=new zn,vm=new Me;function Mm(i,t,e,n,s,r,o){const a=new Ft(0);let l=r===!0?0:1,h,c,u=null,f=0,m=null;function g(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?e:t).get(M)),M}function x(E){let M=!1;const S=g(E);S===null?p(a,l):S&&S.isColor&&(p(S,1),M=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(E,M){const S=g(M);S&&(S.isCubeTexture||S.mapping===Po)?(c===void 0&&(c=new Ce(new Jt(1,1,1),new Ve({name:"BackgroundCubeMaterial",uniforms:Ts(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(N,I,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),Ti.copy(M.backgroundRotation),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(vm.makeRotationFromEuler(Ti)),c.material.toneMapped=xe.getTransfer(S.colorSpace)!==Ae,(u!==S||f!==S.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,m=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(h===void 0&&(h=new Ce(new fn(2,2),new Ve({name:"BackgroundMaterial",uniforms:Ts(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=S,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.toneMapped=xe.getTransfer(S.colorSpace)!==Ae,S.matrixAutoUpdate===!0&&S.updateMatrix(),h.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=S,f=S.version,m=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null))}function p(E,M){E.getRGB(Dr,jh(i)),n.buffers.color.setClear(Dr.r,Dr.g,Dr.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(E,M=1){a.set(E),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:x,addToRenderList:d}}function ym(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(_,v,k,y,L){let F=!1;const B=u(y,k,v);r!==B&&(r=B,h(r.object)),F=m(_,y,k,L),F&&g(_,y,k,L),L!==null&&t.update(L,i.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,S(_,v,k,y),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function l(){return i.createVertexArray()}function h(_){return i.bindVertexArray(_)}function c(_){return i.deleteVertexArray(_)}function u(_,v,k){const y=k.wireframe===!0;let L=n[_.id];L===void 0&&(L={},n[_.id]=L);let F=L[v.id];F===void 0&&(F={},L[v.id]=F);let B=F[y];return B===void 0&&(B=f(l()),F[y]=B),B}function f(_){const v=[],k=[],y=[];for(let L=0;L<e;L++)v[L]=0,k[L]=0,y[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:k,attributeDivisors:y,object:_,attributes:{},index:null}}function m(_,v,k,y){const L=r.attributes,F=v.attributes;let B=0;const U=k.getAttributes();for(const z in U)if(U[z].location>=0){const Q=L[z];let gt=F[z];if(gt===void 0&&(z==="instanceMatrix"&&_.instanceMatrix&&(gt=_.instanceMatrix),z==="instanceColor"&&_.instanceColor&&(gt=_.instanceColor)),Q===void 0||Q.attribute!==gt||gt&&Q.data!==gt.data)return!0;B++}return r.attributesNum!==B||r.index!==y}function g(_,v,k,y){const L={},F=v.attributes;let B=0;const U=k.getAttributes();for(const z in U)if(U[z].location>=0){let Q=F[z];Q===void 0&&(z==="instanceMatrix"&&_.instanceMatrix&&(Q=_.instanceMatrix),z==="instanceColor"&&_.instanceColor&&(Q=_.instanceColor));const gt={};gt.attribute=Q,Q&&Q.data&&(gt.data=Q.data),L[z]=gt,B++}r.attributes=L,r.attributesNum=B,r.index=y}function x(){const _=r.newAttributes;for(let v=0,k=_.length;v<k;v++)_[v]=0}function d(_){p(_,0)}function p(_,v){const k=r.newAttributes,y=r.enabledAttributes,L=r.attributeDivisors;k[_]=1,y[_]===0&&(i.enableVertexAttribArray(_),y[_]=1),L[_]!==v&&(i.vertexAttribDivisor(_,v),L[_]=v)}function E(){const _=r.newAttributes,v=r.enabledAttributes;for(let k=0,y=v.length;k<y;k++)v[k]!==_[k]&&(i.disableVertexAttribArray(k),v[k]=0)}function M(_,v,k,y,L,F,B){B===!0?i.vertexAttribIPointer(_,v,k,L,F):i.vertexAttribPointer(_,v,k,y,L,F)}function S(_,v,k,y){x();const L=y.attributes,F=k.getAttributes(),B=v.defaultAttributeValues;for(const U in F){const z=F[U];if(z.location>=0){let J=L[U];if(J===void 0&&(U==="instanceMatrix"&&_.instanceMatrix&&(J=_.instanceMatrix),U==="instanceColor"&&_.instanceColor&&(J=_.instanceColor)),J!==void 0){const Q=J.normalized,gt=J.itemSize,qt=t.get(J);if(qt===void 0)continue;const te=qt.buffer,Z=qt.type,ht=qt.bytesPerElement,nt=Z===i.INT||Z===i.UNSIGNED_INT||J.gpuType===Ml;if(J.isInterleavedBufferAttribute){const ot=J.data,Et=ot.stride,wt=J.offset;if(ot.isInstancedInterleavedBuffer){for(let kt=0;kt<z.locationSize;kt++)p(z.location+kt,ot.meshPerAttribute);_.isInstancedMesh!==!0&&y._maxInstanceCount===void 0&&(y._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let kt=0;kt<z.locationSize;kt++)d(z.location+kt);i.bindBuffer(i.ARRAY_BUFFER,te);for(let kt=0;kt<z.locationSize;kt++)M(z.location+kt,gt/z.locationSize,Z,Q,Et*ht,(wt+gt/z.locationSize*kt)*ht,nt)}else{if(J.isInstancedBufferAttribute){for(let ot=0;ot<z.locationSize;ot++)p(z.location+ot,J.meshPerAttribute);_.isInstancedMesh!==!0&&y._maxInstanceCount===void 0&&(y._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ot=0;ot<z.locationSize;ot++)d(z.location+ot);i.bindBuffer(i.ARRAY_BUFFER,te);for(let ot=0;ot<z.locationSize;ot++)M(z.location+ot,gt/z.locationSize,Z,Q,gt*ht,gt/z.locationSize*ot*ht,nt)}}else if(B!==void 0){const Q=B[U];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(z.location,Q);break;case 3:i.vertexAttrib3fv(z.location,Q);break;case 4:i.vertexAttrib4fv(z.location,Q);break;default:i.vertexAttrib1fv(z.location,Q)}}}}E()}function N(){T();for(const _ in n){const v=n[_];for(const k in v){const y=v[k];for(const L in y)c(y[L].object),delete y[L];delete v[k]}delete n[_]}}function I(_){if(n[_.id]===void 0)return;const v=n[_.id];for(const k in v){const y=v[k];for(const L in y)c(y[L].object),delete y[L];delete v[k]}delete n[_.id]}function R(_){for(const v in n){const k=n[v];if(k[_.id]===void 0)continue;const y=k[_.id];for(const L in y)c(y[L].object),delete y[L];delete k[_.id]}}function T(){H(),o=!0,r!==s&&(r=s,h(r.object))}function H(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:H,dispose:N,releaseStatesOfGeometry:I,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:d,disableUnusedAttributes:E}}function Sm(i,t,e){let n;function s(h){n=h}function r(h,c){i.drawArrays(n,h,c),e.update(c,n,1)}function o(h,c,u){u!==0&&(i.drawArraysInstanced(n,h,c,u),e.update(c,n,u))}function a(h,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,c,0,u);let m=0;for(let g=0;g<u;g++)m+=c[g];e.update(m,n,1)}function l(h,c,u,f){if(u===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h.length;g++)o(h[g],c[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,h,0,c,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=c[x];for(let x=0;x<f.length;x++)e.update(g,n,f[x])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function bm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Fn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const T=R===Gn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ni&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Hn&&!T)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const c=l(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){const R=t.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:S,vertexTextures:N,maxSamples:I}}function Em(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Ci,a=new le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||s;return s=f,n=u.length,m},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=c(u,f,0)},this.setState=function(u,f,m){const g=u.clippingPlanes,x=u.clipIntersection,d=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!d)r?c(null):h();else{const E=r?0:n,M=E*4;let S=p.clippingState||null;l.value=S,S=c(g,f,M,m);for(let N=0;N!==M;++N)S[N]=e[N];p.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(u,f,m,g){const x=u!==null?u.length:0;let d=null;if(x!==0){if(d=l.value,g!==!0||d===null){const p=m+x*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(d===null||d.length<p)&&(d=new Float32Array(p));for(let M=0,S=m;M!==x;++M,S+=4)o.copy(u[M]).applyMatrix4(E,a),o.normal.toArray(d,S),d[S+3]=o.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,d}}function wm(i){let t=new WeakMap;function e(o,a){return a===Ua?o.mapping=Ss:a===Na&&(o.mapping=bs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ua||a===Na)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const h=new Ff(l.height);return h.fromEquirectangularTexture(i,o),t.set(o,h),o.addEventListener("dispose",s),e(h.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Pl extends Zh{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const fs=4,mc=[.125,.215,.35,.446,.526,.582],Li=20,ra=new Pl,gc=new Ft;let oa=null,aa=0,la=0,ca=!1;const Ri=(1+Math.sqrt(5))/2,es=1/Ri,_c=[new D(-Ri,es,0),new D(Ri,es,0),new D(-es,0,Ri),new D(es,0,Ri),new D(0,Ri,-es),new D(0,Ri,es),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class xc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){oa=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(oa,aa,la),this._renderer.xr.enabled=ca,t.scissorTest=!1,Ur(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ss||t.mapping===bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),oa=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Gn,format:Fn,colorSpace:xi,depthBuffer:!1},s=vc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tm(r)),this._blurMaterial=Am(r,t,e)}return s}_compileMaterial(t){const e=new Ce(this._lodPlanes[0],t);this._renderer.compile(e,ra)}_sceneToCubeUV(t,e,n,s){const a=new _n(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,f=c.toneMapping;c.getClearColor(gc),c.toneMapping=gi,c.autoClear=!1;const m=new Le({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),g=new Ce(new Jt,m);let x=!1;const d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,x=!0):(m.color.copy(gc),x=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(a.up.set(0,l[p],0),a.lookAt(h[p],0,0)):E===1?(a.up.set(0,0,l[p]),a.lookAt(0,h[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,h[p]));const M=this._cubeSize;Ur(s,E*M,p>2?M:0,M,M),c.setRenderTarget(s),x&&c.render(g,a),c.render(t,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=f,c.autoClear=u,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ss||t.mapping===bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ce(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ur(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ra)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=_c[(s-r-1)%_c.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new Ce(this._lodPlanes[s],h),f=h.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Li-1),x=r/g,d=isFinite(r)?1+Math.floor(c*x):Li;d>Li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Li}`);const p=[];let E=0;for(let R=0;R<Li;++R){const T=R/x,H=Math.exp(-T*T/2);p.push(H),R===0?E+=H:R<d&&(E+=2*H)}for(let R=0;R<p.length;R++)p[R]=p[R]/E;f.envMap.value=t.texture,f.samples.value=d,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;const S=this._sizeLods[s],N=3*S*(s>M-fs?s-M+fs:0),I=4*(this._cubeSize-S);Ur(e,N,I,3*S,2*S),l.setRenderTarget(e),l.render(u,ra)}}function Tm(i){const t=[],e=[],n=[];let s=i;const r=i-fs+1+mc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-fs?l=mc[o-i+fs-1]:o===0&&(l=0),n.push(l);const h=1/(a-2),c=-h,u=1+h,f=[c,c,u,c,u,u,c,c,u,u,c,u],m=6,g=6,x=3,d=2,p=1,E=new Float32Array(x*g*m),M=new Float32Array(d*g*m),S=new Float32Array(p*g*m);for(let I=0;I<m;I++){const R=I%3*2/3-1,T=I>2?0:-1,H=[R,T,0,R+2/3,T,0,R+2/3,T+1,0,R,T,0,R+2/3,T+1,0,R,T+1,0];E.set(H,x*g*I),M.set(f,d*g*I);const _=[I,I,I,I,I,I];S.set(_,p*g*I)}const N=new Fe;N.setAttribute("position",new nn(E,x)),N.setAttribute("uv",new nn(M,d)),N.setAttribute("faceIndex",new nn(S,p)),t.push(N),s>fs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function vc(i,t,e){const n=new wn(i,t,e);return n.texture.mapping=Po,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ur(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Am(i,t,e){const n=new Float32Array(Li),s=new D(0,1,0);return new Ve({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Mc(){return new Ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function yc(){return new Ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Ll(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Cm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,h=l===Ua||l===Na,c=l===Ss||l===bs;if(h||c){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new xc(i)),u=h?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const m=a.image;return h&&m&&m.height>0||c&&m&&s(m)?(e===null&&(e=new xc(i)),u=h?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const h=6;for(let c=0;c<h;c++)a[c]!==void 0&&l++;return l===h}function r(a){const l=a.target;l.removeEventListener("dispose",r);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Rm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&uo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Pm(i,t,e,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const x=f.morphAttributes[g];for(let d=0,p=x.length;d<p;d++)t.remove(x[d])}f.removeEventListener("dispose",o),delete s[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const x=m[g];for(let d=0,p=x.length;d<p;d++)t.update(x[d],i.ARRAY_BUFFER)}}function h(u){const f=[],m=u.index,g=u.attributes.position;let x=0;if(m!==null){const E=m.array;x=m.version;for(let M=0,S=E.length;M<S;M+=3){const N=E[M+0],I=E[M+1],R=E[M+2];f.push(N,I,I,R,R,N)}}else if(g!==void 0){const E=g.array;x=g.version;for(let M=0,S=E.length/3-1;M<S;M+=3){const N=M+0,I=M+1,R=M+2;f.push(N,I,I,R,R,N)}}else return;const d=new(Vh(f)?Kh:$h)(f,1);d.version=x;const p=r.get(u);p&&t.remove(p),r.set(u,d)}function c(u){const f=r.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&h(u)}else h(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:c}}function Lm(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,m){i.drawElements(n,m,r,f*o),e.update(m,n,1)}function h(f,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,f*o,g),e.update(m,n,g))}function c(f,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,g);let d=0;for(let p=0;p<g;p++)d+=m[p];e.update(d,n,1)}function u(f,m,g,x){if(g===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<f.length;p++)h(f[p]/o,m[p],x[p]);else{d.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,x,0,g);let p=0;for(let E=0;E<g;E++)p+=m[E];for(let E=0;E<x.length;E++)e.update(p,n,x[E])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function Im(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Dm(i,t,e){const n=new WeakMap,s=new Be;function r(o,a,l){const h=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=c!==void 0?c.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let _=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",_)};var m=_;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,d=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),x===!0&&(S=2),d===!0&&(S=3);let N=a.attributes.position.count*S,I=1;N>t.maxTextureSize&&(I=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const R=new Float32Array(N*I*4*u),T=new Xh(R,N,I,u);T.type=Hn,T.needsUpdate=!0;const H=S*4;for(let v=0;v<u;v++){const k=p[v],y=E[v],L=M[v],F=N*I*4*v;for(let B=0;B<k.count;B++){const U=B*H;g===!0&&(s.fromBufferAttribute(k,B),R[F+U+0]=s.x,R[F+U+1]=s.y,R[F+U+2]=s.z,R[F+U+3]=0),x===!0&&(s.fromBufferAttribute(y,B),R[F+U+4]=s.x,R[F+U+5]=s.y,R[F+U+6]=s.z,R[F+U+7]=0),d===!0&&(s.fromBufferAttribute(L,B),R[F+U+8]=s.x,R[F+U+9]=s.y,R[F+U+10]=s.z,R[F+U+11]=L.itemSize===4?s.w:1)}}f={count:u,texture:T,size:new ut(N,I)},n.set(a,f),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let d=0;d<h.length;d++)g+=h[d];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",h)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Um(i,t,e,n){let s=new WeakMap;function r(l){const h=n.render.frame,c=l.geometry,u=t.get(l,c);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function o(){s=new WeakMap}function a(l){const h=l.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}class tu extends en{constructor(t,e,n,s,r,o,a,l,h,c=_s){if(c!==_s&&c!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===_s&&(n=Ui),n===void 0&&c===ws&&(n=Es),super(null,s,r,o,a,l,c,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:dn,this.minFilter=l!==void 0?l:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const eu=new en,Sc=new tu(1,1),nu=new Xh,iu=new yf,su=new Jh,bc=[],Ec=[],wc=new Float32Array(16),Tc=new Float32Array(9),Ac=new Float32Array(4);function Ls(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=bc[s];if(r===void 0&&(r=new Float32Array(s),bc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function We(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Io(i,t){let e=Ec[t];e===void 0&&(e=new Int32Array(t),Ec[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Nm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2fv(this.addr,t),Xe(e,t)}}function zm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;i.uniform3fv(this.addr,t),Xe(e,t)}}function Om(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4fv(this.addr,t),Xe(e,t)}}function Bm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Ac.set(n),i.uniformMatrix2fv(this.addr,!1,Ac),Xe(e,n)}}function km(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Tc.set(n),i.uniformMatrix3fv(this.addr,!1,Tc),Xe(e,n)}}function Hm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;wc.set(n),i.uniformMatrix4fv(this.addr,!1,wc),Xe(e,n)}}function Gm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2iv(this.addr,t),Xe(e,t)}}function Wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3iv(this.addr,t),Xe(e,t)}}function Xm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4iv(this.addr,t),Xe(e,t)}}function qm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ym(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2uiv(this.addr,t),Xe(e,t)}}function $m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3uiv(this.addr,t),Xe(e,t)}}function Km(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4uiv(this.addr,t),Xe(e,t)}}function jm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Sc.compareFunction=Gh,r=Sc):r=eu,e.setTexture2D(t||r,s)}function Zm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||iu,s)}function Jm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||su,s)}function Qm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||nu,s)}function t0(i){switch(i){case 5126:return Nm;case 35664:return Fm;case 35665:return zm;case 35666:return Om;case 35674:return Bm;case 35675:return km;case 35676:return Hm;case 5124:case 35670:return Gm;case 35667:case 35671:return Vm;case 35668:case 35672:return Wm;case 35669:case 35673:return Xm;case 5125:return qm;case 36294:return Ym;case 36295:return $m;case 36296:return Km;case 35678:case 36198:case 36298:case 36306:case 35682:return jm;case 35679:case 36299:case 36307:return Zm;case 35680:case 36300:case 36308:case 36293:return Jm;case 36289:case 36303:case 36311:case 36292:return Qm}}function e0(i,t){i.uniform1fv(this.addr,t)}function n0(i,t){const e=Ls(t,this.size,2);i.uniform2fv(this.addr,e)}function i0(i,t){const e=Ls(t,this.size,3);i.uniform3fv(this.addr,e)}function s0(i,t){const e=Ls(t,this.size,4);i.uniform4fv(this.addr,e)}function r0(i,t){const e=Ls(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function o0(i,t){const e=Ls(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function a0(i,t){const e=Ls(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function l0(i,t){i.uniform1iv(this.addr,t)}function c0(i,t){i.uniform2iv(this.addr,t)}function h0(i,t){i.uniform3iv(this.addr,t)}function u0(i,t){i.uniform4iv(this.addr,t)}function f0(i,t){i.uniform1uiv(this.addr,t)}function d0(i,t){i.uniform2uiv(this.addr,t)}function p0(i,t){i.uniform3uiv(this.addr,t)}function m0(i,t){i.uniform4uiv(this.addr,t)}function g0(i,t,e){const n=this.cache,s=t.length,r=Io(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||eu,r[o])}function _0(i,t,e){const n=this.cache,s=t.length,r=Io(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||iu,r[o])}function x0(i,t,e){const n=this.cache,s=t.length,r=Io(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||su,r[o])}function v0(i,t,e){const n=this.cache,s=t.length,r=Io(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||nu,r[o])}function M0(i){switch(i){case 5126:return e0;case 35664:return n0;case 35665:return i0;case 35666:return s0;case 35674:return r0;case 35675:return o0;case 35676:return a0;case 5124:case 35670:return l0;case 35667:case 35671:return c0;case 35668:case 35672:return h0;case 35669:case 35673:return u0;case 5125:return f0;case 36294:return d0;case 36295:return p0;case 36296:return m0;case 35678:case 36198:case 36298:case 36306:case 35682:return g0;case 35679:case 36299:case 36307:return _0;case 35680:case 36300:case 36308:case 36293:return x0;case 36289:case 36303:case 36311:case 36292:return v0}}class y0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=t0(e.type)}}class S0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=M0(e.type)}}class b0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const ha=/(\w+)(\])?(\[|\.)?/g;function Cc(i,t){i.seq.push(t),i.map[t.id]=t}function E0(i,t,e){const n=i.name,s=n.length;for(ha.lastIndex=0;;){const r=ha.exec(n),o=ha.lastIndex;let a=r[1];const l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===s){Cc(e,h===void 0?new y0(a,i,t):new S0(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new b0(a),Cc(e,u)),e=u}}}class fo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);E0(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Rc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const w0=37297;let T0=0;function A0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function C0(i){const t=xe.getPrimaries(xe.workingColorSpace),e=xe.getPrimaries(i);let n;switch(t===e?n="":t===So&&e===yo?n="LinearDisplayP3ToLinearSRGB":t===yo&&e===So&&(n="LinearSRGBToLinearDisplayP3"),i){case xi:case Lo:return[n,"LinearTransferOETF"];case En:case Al:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Pc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+A0(i.getShaderSource(t),o)}else return s}function R0(i,t){const e=C0(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function P0(i,t){let e;switch(t){case Th:e="Linear";break;case Ah:e="Reinhard";break;case Ch:e="Cineon";break;case Rh:e="ACESFilmic";break;case Ph:e="AgX";break;case vl:e="Neutral";break;case Ju:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Nr=new D;function L0(){xe.getLuminanceCoefficients(Nr);const i=Nr.x.toFixed(4),t=Nr.y.toFixed(4),e=Nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function I0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function D0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function U0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Qs(i){return i!==""}function Lc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ic(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const N0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ul(i){return i.replace(N0,z0)}const F0=new Map;function z0(i,t){let e=ae[t];if(e===void 0){const n=F0.get(t);if(n!==void 0)e=ae[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ul(e)}const O0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dc(i){return i.replace(O0,B0)}function B0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function k0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===bh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Eh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zn&&(t="SHADOWMAP_TYPE_VSM"),t}function H0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ss:case bs:t="ENVMAP_TYPE_CUBE";break;case Po:t="ENVMAP_TYPE_CUBE_UV";break}return t}function G0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case bs:t="ENVMAP_MODE_REFRACTION";break}return t}function V0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case wh:t="ENVMAP_BLENDING_MULTIPLY";break;case ju:t="ENVMAP_BLENDING_MIX";break;case Zu:t="ENVMAP_BLENDING_ADD";break}return t}function W0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function X0(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=k0(e),h=H0(e),c=G0(e),u=V0(e),f=W0(e),m=I0(e),g=D0(r),x=s.createProgram();let d,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qs).join(`
`),d.length>0&&(d+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qs).join(`
`),p.length>0&&(p+=`
`)):(d=[Uc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),p=[Uc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gi?"#define TONE_MAPPING":"",e.toneMapping!==gi?ae.tonemapping_pars_fragment:"",e.toneMapping!==gi?P0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,R0("linearToOutputTexel",e.outputColorSpace),L0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qs).join(`
`)),o=ul(o),o=Lc(o,e),o=Ic(o,e),a=ul(a),a=Lc(a,e),a=Ic(a,e),o=Dc(o),a=Dc(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,p=["#define varying in",e.glslVersion===Zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=E+d+o,S=E+p+a,N=Rc(s,s.VERTEX_SHADER,M),I=Rc(s,s.FRAGMENT_SHADER,S);s.attachShader(x,N),s.attachShader(x,I),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(v){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(x).trim(),y=s.getShaderInfoLog(N).trim(),L=s.getShaderInfoLog(I).trim();let F=!0,B=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,N,I);else{const U=Pc(s,N,"vertex"),z=Pc(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+v.name+`
Material Type: `+v.type+`

Program Info Log: `+k+`
`+U+`
`+z)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(y===""||L==="")&&(B=!1);B&&(v.diagnostics={runnable:F,programLog:k,vertexShader:{log:y,prefix:d},fragmentShader:{log:L,prefix:p}})}s.deleteShader(N),s.deleteShader(I),T=new fo(s,x),H=U0(s,x)}let T;this.getUniforms=function(){return T===void 0&&R(this),T};let H;this.getAttributes=function(){return H===void 0&&R(this),H};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,w0)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=T0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=N,this.fragmentShader=I,this}let q0=0;class Y0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new $0(t),e.set(t,n)),n}}class $0{constructor(t){this.id=q0++,this.code=t,this.usedTimes=0}}function K0(i,t,e,n,s,r,o){const a=new qh,l=new Y0,h=new Set,c=[],u=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,m=s.vertexTextures;let g=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return h.add(_),_===0?"uv":`uv${_}`}function p(_,v,k,y,L){const F=y.fog,B=L.geometry,U=_.isMeshStandardMaterial?y.environment:null,z=(_.isMeshStandardMaterial?e:t).get(_.envMap||U),J=z&&z.mapping===Po?z.image.height:null,Q=x[_.type];_.precision!==null&&(g=s.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const gt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,qt=gt!==void 0?gt.length:0;let te=0;B.morphAttributes.position!==void 0&&(te=1),B.morphAttributes.normal!==void 0&&(te=2),B.morphAttributes.color!==void 0&&(te=3);let Z,ht,nt,ot;if(Q){const je=Bn[Q];Z=je.vertexShader,ht=je.fragmentShader}else Z=_.vertexShader,ht=_.fragmentShader,l.update(_),nt=l.getVertexShaderID(_),ot=l.getFragmentShaderID(_);const Et=i.getRenderTarget(),wt=L.isInstancedMesh===!0,kt=L.isBatchedMesh===!0,jt=!!_.map,at=!!_.matcap,C=!!z,Mt=!!_.aoMap,yt=!!_.lightMap,mt=!!_.bumpMap,bt=!!_.normalMap,Xt=!!_.displacementMap,Dt=!!_.emissiveMap,P=!!_.metalnessMap,b=!!_.roughnessMap,Y=_.anisotropy>0,rt=_.clearcoat>0,lt=_.dispersion>0,st=_.iridescence>0,Bt=_.sheen>0,Tt=_.transmission>0,Nt=Y&&!!_.anisotropyMap,ce=rt&&!!_.clearcoatMap,ft=rt&&!!_.clearcoatNormalMap,St=rt&&!!_.clearcoatRoughnessMap,ee=st&&!!_.iridescenceMap,ne=st&&!!_.iridescenceThicknessMap,zt=Bt&&!!_.sheenColorMap,ue=Bt&&!!_.sheenRoughnessMap,se=!!_.specularMap,ye=!!_.specularColorMap,G=!!_.specularIntensityMap,Rt=Tt&&!!_.transmissionMap,tt=Tt&&!!_.thicknessMap,ct=!!_.gradientMap,It=!!_.alphaMap,Ut=_.alphaTest>0,fe=!!_.alphaHash,j=!!_.extensions;let ve=gi;_.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(ve=i.toneMapping);const de={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:Z,fragmentShader:ht,defines:_.defines,customVertexShaderID:nt,customFragmentShaderID:ot,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:kt,batchingColor:kt&&L._colorsTexture!==null,instancing:wt,instancingColor:wt&&L.instanceColor!==null,instancingMorph:wt&&L.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Et===null?i.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:xi,alphaToCoverage:!!_.alphaToCoverage,map:jt,matcap:at,envMap:C,envMapMode:C&&z.mapping,envMapCubeUVHeight:J,aoMap:Mt,lightMap:yt,bumpMap:mt,normalMap:bt,displacementMap:m&&Xt,emissiveMap:Dt,normalMapObjectSpace:bt&&_.normalMapType===nf,normalMapTangentSpace:bt&&_.normalMapType===Hh,metalnessMap:P,roughnessMap:b,anisotropy:Y,anisotropyMap:Nt,clearcoat:rt,clearcoatMap:ce,clearcoatNormalMap:ft,clearcoatRoughnessMap:St,dispersion:lt,iridescence:st,iridescenceMap:ee,iridescenceThicknessMap:ne,sheen:Bt,sheenColorMap:zt,sheenRoughnessMap:ue,specularMap:se,specularColorMap:ye,specularIntensityMap:G,transmission:Tt,transmissionMap:Rt,thicknessMap:tt,gradientMap:ct,opaque:_.transparent===!1&&_.blending===gs&&_.alphaToCoverage===!1,alphaMap:It,alphaTest:Ut,alphaHash:fe,combine:_.combine,mapUv:jt&&d(_.map.channel),aoMapUv:Mt&&d(_.aoMap.channel),lightMapUv:yt&&d(_.lightMap.channel),bumpMapUv:mt&&d(_.bumpMap.channel),normalMapUv:bt&&d(_.normalMap.channel),displacementMapUv:Xt&&d(_.displacementMap.channel),emissiveMapUv:Dt&&d(_.emissiveMap.channel),metalnessMapUv:P&&d(_.metalnessMap.channel),roughnessMapUv:b&&d(_.roughnessMap.channel),anisotropyMapUv:Nt&&d(_.anisotropyMap.channel),clearcoatMapUv:ce&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:ft&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&d(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:ue&&d(_.sheenRoughnessMap.channel),specularMapUv:se&&d(_.specularMap.channel),specularColorMapUv:ye&&d(_.specularColorMap.channel),specularIntensityMapUv:G&&d(_.specularIntensityMap.channel),transmissionMapUv:Rt&&d(_.transmissionMap.channel),thicknessMapUv:tt&&d(_.thicknessMap.channel),alphaMapUv:It&&d(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(bt||Y),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!B.attributes.uv&&(jt||It),fog:!!F,useFog:_.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:L.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:qt,morphTextureStride:te,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:ve,decodeVideoTexture:jt&&_.map.isVideoTexture===!0&&xe.getTransfer(_.map.colorSpace)===Ae,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Dn,flipSided:_.side===cn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:j&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(j&&_.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return de.vertexUv1s=h.has(1),de.vertexUv2s=h.has(2),de.vertexUv3s=h.has(3),h.clear(),de}function E(_){const v=[];if(_.shaderID?v.push(_.shaderID):(v.push(_.customVertexShaderID),v.push(_.customFragmentShaderID)),_.defines!==void 0)for(const k in _.defines)v.push(k),v.push(_.defines[k]);return _.isRawShaderMaterial===!1&&(M(v,_),S(v,_),v.push(i.outputColorSpace)),v.push(_.customProgramCacheKey),v.join()}function M(_,v){_.push(v.precision),_.push(v.outputColorSpace),_.push(v.envMapMode),_.push(v.envMapCubeUVHeight),_.push(v.mapUv),_.push(v.alphaMapUv),_.push(v.lightMapUv),_.push(v.aoMapUv),_.push(v.bumpMapUv),_.push(v.normalMapUv),_.push(v.displacementMapUv),_.push(v.emissiveMapUv),_.push(v.metalnessMapUv),_.push(v.roughnessMapUv),_.push(v.anisotropyMapUv),_.push(v.clearcoatMapUv),_.push(v.clearcoatNormalMapUv),_.push(v.clearcoatRoughnessMapUv),_.push(v.iridescenceMapUv),_.push(v.iridescenceThicknessMapUv),_.push(v.sheenColorMapUv),_.push(v.sheenRoughnessMapUv),_.push(v.specularMapUv),_.push(v.specularColorMapUv),_.push(v.specularIntensityMapUv),_.push(v.transmissionMapUv),_.push(v.thicknessMapUv),_.push(v.combine),_.push(v.fogExp2),_.push(v.sizeAttenuation),_.push(v.morphTargetsCount),_.push(v.morphAttributeCount),_.push(v.numDirLights),_.push(v.numPointLights),_.push(v.numSpotLights),_.push(v.numSpotLightMaps),_.push(v.numHemiLights),_.push(v.numRectAreaLights),_.push(v.numDirLightShadows),_.push(v.numPointLightShadows),_.push(v.numSpotLightShadows),_.push(v.numSpotLightShadowsWithMaps),_.push(v.numLightProbes),_.push(v.shadowMapType),_.push(v.toneMapping),_.push(v.numClippingPlanes),_.push(v.numClipIntersection),_.push(v.depthPacking)}function S(_,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.alphaToCoverage&&a.enable(20),_.push(a.mask)}function N(_){const v=x[_.type];let k;if(v){const y=Bn[v];k=As.clone(y.uniforms)}else k=_.uniforms;return k}function I(_,v){let k;for(let y=0,L=c.length;y<L;y++){const F=c[y];if(F.cacheKey===v){k=F,++k.usedTimes;break}}return k===void 0&&(k=new X0(i,v,_,r),c.push(k)),k}function R(_){if(--_.usedTimes===0){const v=c.indexOf(_);c[v]=c[c.length-1],c.pop(),_.destroy()}}function T(_){l.remove(_)}function H(){l.dispose()}return{getParameters:p,getProgramCacheKey:E,getUniforms:N,acquireProgram:I,releaseProgram:R,releaseShaderCache:T,programs:c,dispose:H}}function j0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Z0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Nc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Fc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,m,g,x,d){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:x,group:d},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=m,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=d),t++,p}function a(u,f,m,g,x,d){const p=o(u,f,m,g,x,d);m.transmission>0?n.push(p):m.transparent===!0?s.push(p):e.push(p)}function l(u,f,m,g,x,d){const p=o(u,f,m,g,x,d);m.transmission>0?n.unshift(p):m.transparent===!0?s.unshift(p):e.unshift(p)}function h(u,f){e.length>1&&e.sort(u||Z0),n.length>1&&n.sort(f||Nc),s.length>1&&s.sort(f||Nc)}function c(){for(let u=t,f=i.length;u<f;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:c,sort:h}}function J0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Fc,i.set(n,[o])):s>=r.length?(o=new Fc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Q0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Ft};break;case"SpotLight":e={position:new D,direction:new D,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function tg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let eg=0;function ng(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ig(i){const t=new Q0,e=tg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new D);const s=new D,r=new Me,o=new Me;function a(h){let c=0,u=0,f=0;for(let H=0;H<9;H++)n.probe[H].set(0,0,0);let m=0,g=0,x=0,d=0,p=0,E=0,M=0,S=0,N=0,I=0,R=0;h.sort(ng);for(let H=0,_=h.length;H<_;H++){const v=h[H],k=v.color,y=v.intensity,L=v.distance,F=v.shadow&&v.shadow.map?v.shadow.map.texture:null;if(v.isAmbientLight)c+=k.r*y,u+=k.g*y,f+=k.b*y;else if(v.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(v.sh.coefficients[B],y);R++}else if(v.isDirectionalLight){const B=t.get(v);if(B.color.copy(v.color).multiplyScalar(v.intensity),v.castShadow){const U=v.shadow,z=e.get(v);z.shadowIntensity=U.intensity,z.shadowBias=U.bias,z.shadowNormalBias=U.normalBias,z.shadowRadius=U.radius,z.shadowMapSize=U.mapSize,n.directionalShadow[m]=z,n.directionalShadowMap[m]=F,n.directionalShadowMatrix[m]=v.shadow.matrix,E++}n.directional[m]=B,m++}else if(v.isSpotLight){const B=t.get(v);B.position.setFromMatrixPosition(v.matrixWorld),B.color.copy(k).multiplyScalar(y),B.distance=L,B.coneCos=Math.cos(v.angle),B.penumbraCos=Math.cos(v.angle*(1-v.penumbra)),B.decay=v.decay,n.spot[x]=B;const U=v.shadow;if(v.map&&(n.spotLightMap[N]=v.map,N++,U.updateMatrices(v),v.castShadow&&I++),n.spotLightMatrix[x]=U.matrix,v.castShadow){const z=e.get(v);z.shadowIntensity=U.intensity,z.shadowBias=U.bias,z.shadowNormalBias=U.normalBias,z.shadowRadius=U.radius,z.shadowMapSize=U.mapSize,n.spotShadow[x]=z,n.spotShadowMap[x]=F,S++}x++}else if(v.isRectAreaLight){const B=t.get(v);B.color.copy(k).multiplyScalar(y),B.halfWidth.set(v.width*.5,0,0),B.halfHeight.set(0,v.height*.5,0),n.rectArea[d]=B,d++}else if(v.isPointLight){const B=t.get(v);if(B.color.copy(v.color).multiplyScalar(v.intensity),B.distance=v.distance,B.decay=v.decay,v.castShadow){const U=v.shadow,z=e.get(v);z.shadowIntensity=U.intensity,z.shadowBias=U.bias,z.shadowNormalBias=U.normalBias,z.shadowRadius=U.radius,z.shadowMapSize=U.mapSize,z.shadowCameraNear=U.camera.near,z.shadowCameraFar=U.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=v.shadow.matrix,M++}n.point[g]=B,g++}else if(v.isHemisphereLight){const B=t.get(v);B.skyColor.copy(v.color).multiplyScalar(y),B.groundColor.copy(v.groundColor).multiplyScalar(y),n.hemi[p]=B,p++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=u,n.ambient[2]=f;const T=n.hash;(T.directionalLength!==m||T.pointLength!==g||T.spotLength!==x||T.rectAreaLength!==d||T.hemiLength!==p||T.numDirectionalShadows!==E||T.numPointShadows!==M||T.numSpotShadows!==S||T.numSpotMaps!==N||T.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=d,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=S+N-I,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=R,T.directionalLength=m,T.pointLength=g,T.spotLength=x,T.rectAreaLength=d,T.hemiLength=p,T.numDirectionalShadows=E,T.numPointShadows=M,T.numSpotShadows=S,T.numSpotMaps=N,T.numLightProbes=R,n.version=eg++)}function l(h,c){let u=0,f=0,m=0,g=0,x=0;const d=c.matrixWorldInverse;for(let p=0,E=h.length;p<E;p++){const M=h[p];if(M.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),u++}else if(M.isSpotLight){const S=n.spot[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(d),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),m++}else if(M.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(d),o.identity(),r.copy(M.matrixWorld),r.premultiply(d),o.extractRotation(r),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(d),f++}else if(M.isHemisphereLight){const S=n.hemi[x];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(d),x++}}}return{setup:a,setupView:l,state:n}}function zc(i){const t=new ig(i),e=[],n=[];function s(c){h.camera=c,e.length=0,n.length=0}function r(c){e.push(c)}function o(c){n.push(c)}function a(){t.setup(e)}function l(c){t.setupView(e,c)}const h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function sg(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new zc(i),t.set(s,[a])):r>=o.length?(a=new zc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class rg extends vi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class og extends vi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ag=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cg(i,t,e){let n=new Rl;const s=new ut,r=new ut,o=new Be,a=new rg({depthPacking:ef}),l=new og,h={},c=e.maxTextureSize,u={[_i]:cn,[cn]:_i,[Dn]:Dn},f=new Ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:ag,fragmentShader:lg}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Fe;g.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ce(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bh;let p=this.type;this.render=function(I,R,T){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||I.length===0)return;const H=i.getRenderTarget(),_=i.getActiveCubeFace(),v=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Qn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const y=p!==Zn&&this.type===Zn,L=p===Zn&&this.type!==Zn;for(let F=0,B=I.length;F<B;F++){const U=I[F],z=U.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const J=z.getFrameExtents();if(s.multiply(J),r.copy(z.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/J.x),s.x=r.x*J.x,z.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/J.y),s.y=r.y*J.y,z.mapSize.y=r.y)),z.map===null||y===!0||L===!0){const gt=this.type!==Zn?{minFilter:dn,magFilter:dn}:{};z.map!==null&&z.map.dispose(),z.map=new wn(s.x,s.y,gt),z.map.texture.name=U.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const Q=z.getViewportCount();for(let gt=0;gt<Q;gt++){const qt=z.getViewport(gt);o.set(r.x*qt.x,r.y*qt.y,r.x*qt.z,r.y*qt.w),k.viewport(o),z.updateMatrices(U,gt),n=z.getFrustum(),S(R,T,z.camera,U,this.type)}z.isPointLightShadow!==!0&&this.type===Zn&&E(z,T),z.needsUpdate=!1}p=this.type,d.needsUpdate=!1,i.setRenderTarget(H,_,v)};function E(I,R){const T=t.update(x);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,m.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new wn(s.x,s.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(R,null,T,f,x,null),m.uniforms.shadow_pass.value=I.mapPass.texture,m.uniforms.resolution.value=I.mapSize,m.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(R,null,T,m,x,null)}function M(I,R,T,H){let _=null;const v=T.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(v!==void 0)_=v;else if(_=T.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const k=_.uuid,y=R.uuid;let L=h[k];L===void 0&&(L={},h[k]=L);let F=L[y];F===void 0&&(F=_.clone(),L[y]=F,R.addEventListener("dispose",N)),_=F}if(_.visible=R.visible,_.wireframe=R.wireframe,H===Zn?_.side=R.shadowSide!==null?R.shadowSide:R.side:_.side=R.shadowSide!==null?R.shadowSide:u[R.side],_.alphaMap=R.alphaMap,_.alphaTest=R.alphaTest,_.map=R.map,_.clipShadows=R.clipShadows,_.clippingPlanes=R.clippingPlanes,_.clipIntersection=R.clipIntersection,_.displacementMap=R.displacementMap,_.displacementScale=R.displacementScale,_.displacementBias=R.displacementBias,_.wireframeLinewidth=R.wireframeLinewidth,_.linewidth=R.linewidth,T.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const k=i.properties.get(_);k.light=T}return _}function S(I,R,T,H,_){if(I.visible===!1)return;if(I.layers.test(R.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&_===Zn)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,I.matrixWorld);const y=t.update(I),L=I.material;if(Array.isArray(L)){const F=y.groups;for(let B=0,U=F.length;B<U;B++){const z=F[B],J=L[z.materialIndex];if(J&&J.visible){const Q=M(I,J,H,_);I.onBeforeShadow(i,I,R,T,y,Q,z),i.renderBufferDirect(T,null,y,Q,I,z),I.onAfterShadow(i,I,R,T,y,Q,z)}}}else if(L.visible){const F=M(I,L,H,_);I.onBeforeShadow(i,I,R,T,y,F,null),i.renderBufferDirect(T,null,y,F,I,null),I.onAfterShadow(i,I,R,T,y,F,null)}}const k=I.children;for(let y=0,L=k.length;y<L;y++)S(k[y],R,T,H,_)}function N(I){I.target.removeEventListener("dispose",N);for(const T in h){const H=h[T],_=I.target.uuid;_ in H&&(H[_].dispose(),delete H[_])}}}const hg={[Aa]:Ca,[Ra]:Ia,[Pa]:Da,[ys]:La,[Ca]:Aa,[Ia]:Ra,[Da]:Pa,[La]:ys};function ug(i){function t(){let G=!1;const Rt=new Be;let tt=null;const ct=new Be(0,0,0,0);return{setMask:function(It){tt!==It&&!G&&(i.colorMask(It,It,It,It),tt=It)},setLocked:function(It){G=It},setClear:function(It,Ut,fe,j,ve){ve===!0&&(It*=j,Ut*=j,fe*=j),Rt.set(It,Ut,fe,j),ct.equals(Rt)===!1&&(i.clearColor(It,Ut,fe,j),ct.copy(Rt))},reset:function(){G=!1,tt=null,ct.set(-1,0,0,0)}}}function e(){let G=!1,Rt=!1,tt=null,ct=null,It=null;return{setReversed:function(Ut){Rt=Ut},setTest:function(Ut){Ut?nt(i.DEPTH_TEST):ot(i.DEPTH_TEST)},setMask:function(Ut){tt!==Ut&&!G&&(i.depthMask(Ut),tt=Ut)},setFunc:function(Ut){if(Rt&&(Ut=hg[Ut]),ct!==Ut){switch(Ut){case Aa:i.depthFunc(i.NEVER);break;case Ca:i.depthFunc(i.ALWAYS);break;case Ra:i.depthFunc(i.LESS);break;case ys:i.depthFunc(i.LEQUAL);break;case Pa:i.depthFunc(i.EQUAL);break;case La:i.depthFunc(i.GEQUAL);break;case Ia:i.depthFunc(i.GREATER);break;case Da:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ct=Ut}},setLocked:function(Ut){G=Ut},setClear:function(Ut){It!==Ut&&(i.clearDepth(Ut),It=Ut)},reset:function(){G=!1,tt=null,ct=null,It=null}}}function n(){let G=!1,Rt=null,tt=null,ct=null,It=null,Ut=null,fe=null,j=null,ve=null;return{setTest:function(de){G||(de?nt(i.STENCIL_TEST):ot(i.STENCIL_TEST))},setMask:function(de){Rt!==de&&!G&&(i.stencilMask(de),Rt=de)},setFunc:function(de,je,Tn){(tt!==de||ct!==je||It!==Tn)&&(i.stencilFunc(de,je,Tn),tt=de,ct=je,It=Tn)},setOp:function(de,je,Tn){(Ut!==de||fe!==je||j!==Tn)&&(i.stencilOp(de,je,Tn),Ut=de,fe=je,j=Tn)},setLocked:function(de){G=de},setClear:function(de){ve!==de&&(i.clearStencil(de),ve=de)},reset:function(){G=!1,Rt=null,tt=null,ct=null,It=null,Ut=null,fe=null,j=null,ve=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap;let h={},c={},u=new WeakMap,f=[],m=null,g=!1,x=null,d=null,p=null,E=null,M=null,S=null,N=null,I=new Ft(0,0,0),R=0,T=!1,H=null,_=null,v=null,k=null,y=null;const L=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,B=0;const U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(U)[1]),F=B>=1):U.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),F=B>=2);let z=null,J={};const Q=i.getParameter(i.SCISSOR_BOX),gt=i.getParameter(i.VIEWPORT),qt=new Be().fromArray(Q),te=new Be().fromArray(gt);function Z(G,Rt,tt,ct){const It=new Uint8Array(4),Ut=i.createTexture();i.bindTexture(G,Ut),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let fe=0;fe<tt;fe++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(Rt,0,i.RGBA,1,1,ct,0,i.RGBA,i.UNSIGNED_BYTE,It):i.texImage2D(Rt+fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,It);return Ut}const ht={};ht[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),ht[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ht[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),nt(i.DEPTH_TEST),r.setFunc(ys),yt(!1),mt(Yl),nt(i.CULL_FACE),C(Qn);function nt(G){h[G]!==!0&&(i.enable(G),h[G]=!0)}function ot(G){h[G]!==!1&&(i.disable(G),h[G]=!1)}function Et(G,Rt){return c[G]!==Rt?(i.bindFramebuffer(G,Rt),c[G]=Rt,G===i.DRAW_FRAMEBUFFER&&(c[i.FRAMEBUFFER]=Rt),G===i.FRAMEBUFFER&&(c[i.DRAW_FRAMEBUFFER]=Rt),!0):!1}function wt(G,Rt){let tt=f,ct=!1;if(G){tt=u.get(Rt),tt===void 0&&(tt=[],u.set(Rt,tt));const It=G.textures;if(tt.length!==It.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let Ut=0,fe=It.length;Ut<fe;Ut++)tt[Ut]=i.COLOR_ATTACHMENT0+Ut;tt.length=It.length,ct=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,ct=!0);ct&&i.drawBuffers(tt)}function kt(G){return m!==G?(i.useProgram(G),m=G,!0):!1}const jt={[Pi]:i.FUNC_ADD,[Du]:i.FUNC_SUBTRACT,[Uu]:i.FUNC_REVERSE_SUBTRACT};jt[Nu]=i.MIN,jt[Fu]=i.MAX;const at={[zu]:i.ZERO,[Ou]:i.ONE,[Bu]:i.SRC_COLOR,[wa]:i.SRC_ALPHA,[Xu]:i.SRC_ALPHA_SATURATE,[Vu]:i.DST_COLOR,[Hu]:i.DST_ALPHA,[ku]:i.ONE_MINUS_SRC_COLOR,[Ta]:i.ONE_MINUS_SRC_ALPHA,[Wu]:i.ONE_MINUS_DST_COLOR,[Gu]:i.ONE_MINUS_DST_ALPHA,[qu]:i.CONSTANT_COLOR,[Yu]:i.ONE_MINUS_CONSTANT_COLOR,[$u]:i.CONSTANT_ALPHA,[Ku]:i.ONE_MINUS_CONSTANT_ALPHA};function C(G,Rt,tt,ct,It,Ut,fe,j,ve,de){if(G===Qn){g===!0&&(ot(i.BLEND),g=!1);return}if(g===!1&&(nt(i.BLEND),g=!0),G!==Iu){if(G!==x||de!==T){if((d!==Pi||M!==Pi)&&(i.blendEquation(i.FUNC_ADD),d=Pi,M=Pi),de)switch(G){case gs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nr:i.blendFunc(i.ONE,i.ONE);break;case $l:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case gs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case $l:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}p=null,E=null,S=null,N=null,I.set(0,0,0),R=0,x=G,T=de}return}It=It||Rt,Ut=Ut||tt,fe=fe||ct,(Rt!==d||It!==M)&&(i.blendEquationSeparate(jt[Rt],jt[It]),d=Rt,M=It),(tt!==p||ct!==E||Ut!==S||fe!==N)&&(i.blendFuncSeparate(at[tt],at[ct],at[Ut],at[fe]),p=tt,E=ct,S=Ut,N=fe),(j.equals(I)===!1||ve!==R)&&(i.blendColor(j.r,j.g,j.b,ve),I.copy(j),R=ve),x=G,T=!1}function Mt(G,Rt){G.side===Dn?ot(i.CULL_FACE):nt(i.CULL_FACE);let tt=G.side===cn;Rt&&(tt=!tt),yt(tt),G.blending===gs&&G.transparent===!1?C(Qn):C(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),r.setFunc(G.depthFunc),r.setTest(G.depthTest),r.setMask(G.depthWrite),s.setMask(G.colorWrite);const ct=G.stencilWrite;o.setTest(ct),ct&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Xt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function yt(G){H!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),H=G)}function mt(G){G!==Pu?(nt(i.CULL_FACE),G!==_&&(G===Yl?i.cullFace(i.BACK):G===Lu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ot(i.CULL_FACE),_=G}function bt(G){G!==v&&(F&&i.lineWidth(G),v=G)}function Xt(G,Rt,tt){G?(nt(i.POLYGON_OFFSET_FILL),(k!==Rt||y!==tt)&&(i.polygonOffset(Rt,tt),k=Rt,y=tt)):ot(i.POLYGON_OFFSET_FILL)}function Dt(G){G?nt(i.SCISSOR_TEST):ot(i.SCISSOR_TEST)}function P(G){G===void 0&&(G=i.TEXTURE0+L-1),z!==G&&(i.activeTexture(G),z=G)}function b(G,Rt,tt){tt===void 0&&(z===null?tt=i.TEXTURE0+L-1:tt=z);let ct=J[tt];ct===void 0&&(ct={type:void 0,texture:void 0},J[tt]=ct),(ct.type!==G||ct.texture!==Rt)&&(z!==tt&&(i.activeTexture(tt),z=tt),i.bindTexture(G,Rt||ht[G]),ct.type=G,ct.texture=Rt)}function Y(){const G=J[z];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function rt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function lt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function st(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Bt(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Tt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Nt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ce(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ft(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function St(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ee(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ne(G){qt.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),qt.copy(G))}function zt(G){te.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),te.copy(G))}function ue(G,Rt){let tt=l.get(Rt);tt===void 0&&(tt=new WeakMap,l.set(Rt,tt));let ct=tt.get(G);ct===void 0&&(ct=i.getUniformBlockIndex(Rt,G.name),tt.set(G,ct))}function se(G,Rt){const ct=l.get(Rt).get(G);a.get(Rt)!==ct&&(i.uniformBlockBinding(Rt,ct,G.__bindingPointIndex),a.set(Rt,ct))}function ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},z=null,J={},c={},u=new WeakMap,f=[],m=null,g=!1,x=null,d=null,p=null,E=null,M=null,S=null,N=null,I=new Ft(0,0,0),R=0,T=!1,H=null,_=null,v=null,k=null,y=null,qt.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:nt,disable:ot,bindFramebuffer:Et,drawBuffers:wt,useProgram:kt,setBlending:C,setMaterial:Mt,setFlipSided:yt,setCullFace:mt,setLineWidth:bt,setPolygonOffset:Xt,setScissorTest:Dt,activeTexture:P,bindTexture:b,unbindTexture:Y,compressedTexImage2D:rt,compressedTexImage3D:lt,texImage2D:St,texImage3D:ee,updateUBOMapping:ue,uniformBlockBinding:se,texStorage2D:ce,texStorage3D:ft,texSubImage2D:st,texSubImage3D:Bt,compressedTexSubImage2D:Tt,compressedTexSubImage3D:Nt,scissor:ne,viewport:zt,reset:ye}}function Oc(i,t,e,n){const s=fg(n);switch(e){case Nh:return i*t;case zh:return i*t;case Oh:return i*t*2;case bl:return i*t/s.components*s.byteLength;case El:return i*t/s.components*s.byteLength;case Bh:return i*t*2/s.components*s.byteLength;case wl:return i*t*2/s.components*s.byteLength;case Fh:return i*t*3/s.components*s.byteLength;case Fn:return i*t*4/s.components*s.byteLength;case Tl:return i*t*4/s.components*s.byteLength;case ro:case oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ao:case lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ba:case Ha:return Math.max(i,16)*Math.max(t,8)/4;case Oa:case ka:return Math.max(i,8)*Math.max(t,8)/2;case Ga:case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case $a:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ja:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case tl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case el:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case nl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case il:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case sl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case co:case rl:case ol:return Math.ceil(i/4)*Math.ceil(t/4)*16;case kh:case al:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ll:case cl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function fg(i){switch(i){case ni:case Ih:return{byteLength:1,components:1};case ir:case Dh:case Gn:return{byteLength:2,components:1};case yl:case Sl:return{byteLength:2,components:4};case Ui:case Ml:case Hn:return{byteLength:4,components:1};case Uh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function dg(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ut,c=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,b){return m?new OffscreenCanvas(P,b):wo("canvas")}function x(P,b,Y){let rt=1;const lt=Dt(P);if((lt.width>Y||lt.height>Y)&&(rt=Y/Math.max(lt.width,lt.height)),rt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const st=Math.floor(rt*lt.width),Bt=Math.floor(rt*lt.height);u===void 0&&(u=g(st,Bt));const Tt=b?g(st,Bt):u;return Tt.width=st,Tt.height=Bt,Tt.getContext("2d").drawImage(P,0,0,st,Bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+st+"x"+Bt+")."),Tt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),P;return P}function d(P){return P.generateMipmaps&&P.minFilter!==dn&&P.minFilter!==Un}function p(P){i.generateMipmap(P)}function E(P,b,Y,rt,lt=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let st=b;if(b===i.RED&&(Y===i.FLOAT&&(st=i.R32F),Y===i.HALF_FLOAT&&(st=i.R16F),Y===i.UNSIGNED_BYTE&&(st=i.R8)),b===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(st=i.R8UI),Y===i.UNSIGNED_SHORT&&(st=i.R16UI),Y===i.UNSIGNED_INT&&(st=i.R32UI),Y===i.BYTE&&(st=i.R8I),Y===i.SHORT&&(st=i.R16I),Y===i.INT&&(st=i.R32I)),b===i.RG&&(Y===i.FLOAT&&(st=i.RG32F),Y===i.HALF_FLOAT&&(st=i.RG16F),Y===i.UNSIGNED_BYTE&&(st=i.RG8)),b===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(st=i.RG8UI),Y===i.UNSIGNED_SHORT&&(st=i.RG16UI),Y===i.UNSIGNED_INT&&(st=i.RG32UI),Y===i.BYTE&&(st=i.RG8I),Y===i.SHORT&&(st=i.RG16I),Y===i.INT&&(st=i.RG32I)),b===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(st=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(st=i.RGB16UI),Y===i.UNSIGNED_INT&&(st=i.RGB32UI),Y===i.BYTE&&(st=i.RGB8I),Y===i.SHORT&&(st=i.RGB16I),Y===i.INT&&(st=i.RGB32I)),b===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(st=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(st=i.RGBA16UI),Y===i.UNSIGNED_INT&&(st=i.RGBA32UI),Y===i.BYTE&&(st=i.RGBA8I),Y===i.SHORT&&(st=i.RGBA16I),Y===i.INT&&(st=i.RGBA32I)),b===i.RGB&&Y===i.UNSIGNED_INT_5_9_9_9_REV&&(st=i.RGB9_E5),b===i.RGBA){const Bt=lt?Mo:xe.getTransfer(rt);Y===i.FLOAT&&(st=i.RGBA32F),Y===i.HALF_FLOAT&&(st=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(st=Bt===Ae?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function M(P,b){let Y;return P?b===null||b===Ui||b===Es?Y=i.DEPTH24_STENCIL8:b===Hn?Y=i.DEPTH32F_STENCIL8:b===ir&&(Y=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ui||b===Es?Y=i.DEPTH_COMPONENT24:b===Hn?Y=i.DEPTH_COMPONENT32F:b===ir&&(Y=i.DEPTH_COMPONENT16),Y}function S(P,b){return d(P)===!0||P.isFramebufferTexture&&P.minFilter!==dn&&P.minFilter!==Un?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function N(P){const b=P.target;b.removeEventListener("dispose",N),R(b),b.isVideoTexture&&c.delete(b)}function I(P){const b=P.target;b.removeEventListener("dispose",I),H(b)}function R(P){const b=n.get(P);if(b.__webglInit===void 0)return;const Y=P.source,rt=f.get(Y);if(rt){const lt=rt[b.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&T(P),Object.keys(rt).length===0&&f.delete(Y)}n.remove(P)}function T(P){const b=n.get(P);i.deleteTexture(b.__webglTexture);const Y=P.source,rt=f.get(Y);delete rt[b.__cacheKey],o.memory.textures--}function H(P){const b=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(b.__webglFramebuffer[rt]))for(let lt=0;lt<b.__webglFramebuffer[rt].length;lt++)i.deleteFramebuffer(b.__webglFramebuffer[rt][lt]);else i.deleteFramebuffer(b.__webglFramebuffer[rt]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[rt])}else{if(Array.isArray(b.__webglFramebuffer))for(let rt=0;rt<b.__webglFramebuffer.length;rt++)i.deleteFramebuffer(b.__webglFramebuffer[rt]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let rt=0;rt<b.__webglColorRenderbuffer.length;rt++)b.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[rt]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Y=P.textures;for(let rt=0,lt=Y.length;rt<lt;rt++){const st=n.get(Y[rt]);st.__webglTexture&&(i.deleteTexture(st.__webglTexture),o.memory.textures--),n.remove(Y[rt])}n.remove(P)}let _=0;function v(){_=0}function k(){const P=_;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),_+=1,P}function y(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function L(P,b){const Y=n.get(P);if(P.isVideoTexture&&bt(P),P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){const rt=P.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(Y,P,b);return}}e.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+b)}function F(P,b){const Y=n.get(P);if(P.version>0&&Y.__version!==P.version){te(Y,P,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+b)}function B(P,b){const Y=n.get(P);if(P.version>0&&Y.__version!==P.version){te(Y,P,b);return}e.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+b)}function U(P,b){const Y=n.get(P);if(P.version>0&&Y.__version!==P.version){Z(Y,P,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+b)}const z={[Fa]:i.REPEAT,[Ii]:i.CLAMP_TO_EDGE,[za]:i.MIRRORED_REPEAT},J={[dn]:i.NEAREST,[Qu]:i.NEAREST_MIPMAP_NEAREST,[mr]:i.NEAREST_MIPMAP_LINEAR,[Un]:i.LINEAR,[Fo]:i.LINEAR_MIPMAP_NEAREST,[Di]:i.LINEAR_MIPMAP_LINEAR},Q={[sf]:i.NEVER,[hf]:i.ALWAYS,[rf]:i.LESS,[Gh]:i.LEQUAL,[of]:i.EQUAL,[cf]:i.GEQUAL,[af]:i.GREATER,[lf]:i.NOTEQUAL};function gt(P,b){if(b.type===Hn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Un||b.magFilter===Fo||b.magFilter===mr||b.magFilter===Di||b.minFilter===Un||b.minFilter===Fo||b.minFilter===mr||b.minFilter===Di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,z[b.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,z[b.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,z[b.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,J[b.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,J[b.minFilter]),b.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Q[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===dn||b.minFilter!==mr&&b.minFilter!==Di||b.type===Hn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function qt(P,b){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",N));const rt=b.source;let lt=f.get(rt);lt===void 0&&(lt={},f.set(rt,lt));const st=y(b);if(st!==P.__cacheKey){lt[st]===void 0&&(lt[st]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),lt[st].usedTimes++;const Bt=lt[P.__cacheKey];Bt!==void 0&&(lt[P.__cacheKey].usedTimes--,Bt.usedTimes===0&&T(b)),P.__cacheKey=st,P.__webglTexture=lt[st].texture}return Y}function te(P,b,Y){let rt=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(rt=i.TEXTURE_3D);const lt=qt(P,b),st=b.source;e.bindTexture(rt,P.__webglTexture,i.TEXTURE0+Y);const Bt=n.get(st);if(st.version!==Bt.__version||lt===!0){e.activeTexture(i.TEXTURE0+Y);const Tt=xe.getPrimaries(xe.workingColorSpace),Nt=b.colorSpace===hi?null:xe.getPrimaries(b.colorSpace),ce=b.colorSpace===hi||Tt===Nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let ft=x(b.image,!1,s.maxTextureSize);ft=Xt(b,ft);const St=r.convert(b.format,b.colorSpace),ee=r.convert(b.type);let ne=E(b.internalFormat,St,ee,b.colorSpace,b.isVideoTexture);gt(rt,b);let zt;const ue=b.mipmaps,se=b.isVideoTexture!==!0,ye=Bt.__version===void 0||lt===!0,G=st.dataReady,Rt=S(b,ft);if(b.isDepthTexture)ne=M(b.format===ws,b.type),ye&&(se?e.texStorage2D(i.TEXTURE_2D,1,ne,ft.width,ft.height):e.texImage2D(i.TEXTURE_2D,0,ne,ft.width,ft.height,0,St,ee,null));else if(b.isDataTexture)if(ue.length>0){se&&ye&&e.texStorage2D(i.TEXTURE_2D,Rt,ne,ue[0].width,ue[0].height);for(let tt=0,ct=ue.length;tt<ct;tt++)zt=ue[tt],se?G&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,zt.width,zt.height,St,ee,zt.data):e.texImage2D(i.TEXTURE_2D,tt,ne,zt.width,zt.height,0,St,ee,zt.data);b.generateMipmaps=!1}else se?(ye&&e.texStorage2D(i.TEXTURE_2D,Rt,ne,ft.width,ft.height),G&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft.width,ft.height,St,ee,ft.data)):e.texImage2D(i.TEXTURE_2D,0,ne,ft.width,ft.height,0,St,ee,ft.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){se&&ye&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Rt,ne,ue[0].width,ue[0].height,ft.depth);for(let tt=0,ct=ue.length;tt<ct;tt++)if(zt=ue[tt],b.format!==Fn)if(St!==null)if(se){if(G)if(b.layerUpdates.size>0){const It=Oc(zt.width,zt.height,b.format,b.type);for(const Ut of b.layerUpdates){const fe=zt.data.subarray(Ut*It/zt.data.BYTES_PER_ELEMENT,(Ut+1)*It/zt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,Ut,zt.width,zt.height,1,St,fe,0,0)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,zt.width,zt.height,ft.depth,St,zt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,ne,zt.width,zt.height,ft.depth,0,zt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?G&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,zt.width,zt.height,ft.depth,St,ee,zt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,ne,zt.width,zt.height,ft.depth,0,St,ee,zt.data)}else{se&&ye&&e.texStorage2D(i.TEXTURE_2D,Rt,ne,ue[0].width,ue[0].height);for(let tt=0,ct=ue.length;tt<ct;tt++)zt=ue[tt],b.format!==Fn?St!==null?se?G&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,zt.width,zt.height,St,zt.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,ne,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?G&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,zt.width,zt.height,St,ee,zt.data):e.texImage2D(i.TEXTURE_2D,tt,ne,zt.width,zt.height,0,St,ee,zt.data)}else if(b.isDataArrayTexture)if(se){if(ye&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Rt,ne,ft.width,ft.height,ft.depth),G)if(b.layerUpdates.size>0){const tt=Oc(ft.width,ft.height,b.format,b.type);for(const ct of b.layerUpdates){const It=ft.data.subarray(ct*tt/ft.data.BYTES_PER_ELEMENT,(ct+1)*tt/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ct,ft.width,ft.height,1,St,ee,It)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,St,ee,ft.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ne,ft.width,ft.height,ft.depth,0,St,ee,ft.data);else if(b.isData3DTexture)se?(ye&&e.texStorage3D(i.TEXTURE_3D,Rt,ne,ft.width,ft.height,ft.depth),G&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,St,ee,ft.data)):e.texImage3D(i.TEXTURE_3D,0,ne,ft.width,ft.height,ft.depth,0,St,ee,ft.data);else if(b.isFramebufferTexture){if(ye)if(se)e.texStorage2D(i.TEXTURE_2D,Rt,ne,ft.width,ft.height);else{let tt=ft.width,ct=ft.height;for(let It=0;It<Rt;It++)e.texImage2D(i.TEXTURE_2D,It,ne,tt,ct,0,St,ee,null),tt>>=1,ct>>=1}}else if(ue.length>0){if(se&&ye){const tt=Dt(ue[0]);e.texStorage2D(i.TEXTURE_2D,Rt,ne,tt.width,tt.height)}for(let tt=0,ct=ue.length;tt<ct;tt++)zt=ue[tt],se?G&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,St,ee,zt):e.texImage2D(i.TEXTURE_2D,tt,ne,St,ee,zt);b.generateMipmaps=!1}else if(se){if(ye){const tt=Dt(ft);e.texStorage2D(i.TEXTURE_2D,Rt,ne,tt.width,tt.height)}G&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,ee,ft)}else e.texImage2D(i.TEXTURE_2D,0,ne,St,ee,ft);d(b)&&p(rt),Bt.__version=st.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Z(P,b,Y){if(b.image.length!==6)return;const rt=qt(P,b),lt=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+Y);const st=n.get(lt);if(lt.version!==st.__version||rt===!0){e.activeTexture(i.TEXTURE0+Y);const Bt=xe.getPrimaries(xe.workingColorSpace),Tt=b.colorSpace===hi?null:xe.getPrimaries(b.colorSpace),Nt=b.colorSpace===hi||Bt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);const ce=b.isCompressedTexture||b.image[0].isCompressedTexture,ft=b.image[0]&&b.image[0].isDataTexture,St=[];for(let ct=0;ct<6;ct++)!ce&&!ft?St[ct]=x(b.image[ct],!0,s.maxCubemapSize):St[ct]=ft?b.image[ct].image:b.image[ct],St[ct]=Xt(b,St[ct]);const ee=St[0],ne=r.convert(b.format,b.colorSpace),zt=r.convert(b.type),ue=E(b.internalFormat,ne,zt,b.colorSpace),se=b.isVideoTexture!==!0,ye=st.__version===void 0||rt===!0,G=lt.dataReady;let Rt=S(b,ee);gt(i.TEXTURE_CUBE_MAP,b);let tt;if(ce){se&&ye&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,ue,ee.width,ee.height);for(let ct=0;ct<6;ct++){tt=St[ct].mipmaps;for(let It=0;It<tt.length;It++){const Ut=tt[It];b.format!==Fn?ne!==null?se?G&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,It,0,0,Ut.width,Ut.height,ne,Ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,It,ue,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):se?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,It,0,0,Ut.width,Ut.height,ne,zt,Ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,It,ue,Ut.width,Ut.height,0,ne,zt,Ut.data)}}}else{if(tt=b.mipmaps,se&&ye){tt.length>0&&Rt++;const ct=Dt(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,ue,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(ft){se?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,St[ct].width,St[ct].height,ne,zt,St[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ue,St[ct].width,St[ct].height,0,ne,zt,St[ct].data);for(let It=0;It<tt.length;It++){const fe=tt[It].image[ct].image;se?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,It+1,0,0,fe.width,fe.height,ne,zt,fe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,It+1,ue,fe.width,fe.height,0,ne,zt,fe.data)}}else{se?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,ne,zt,St[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ue,ne,zt,St[ct]);for(let It=0;It<tt.length;It++){const Ut=tt[It];se?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,It+1,0,0,ne,zt,Ut.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,It+1,ue,ne,zt,Ut.image[ct])}}}d(b)&&p(i.TEXTURE_CUBE_MAP),st.__version=lt.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function ht(P,b,Y,rt,lt,st){const Bt=r.convert(Y.format,Y.colorSpace),Tt=r.convert(Y.type),Nt=E(Y.internalFormat,Bt,Tt,Y.colorSpace);if(!n.get(b).__hasExternalTextures){const ft=Math.max(1,b.width>>st),St=Math.max(1,b.height>>st);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,st,Nt,ft,St,b.depth,0,Bt,Tt,null):e.texImage2D(lt,st,Nt,ft,St,0,Bt,Tt,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),mt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,lt,n.get(Y).__webglTexture,0,yt(b)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,lt,n.get(Y).__webglTexture,st),e.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(P,b,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,P),b.depthBuffer){const rt=b.depthTexture,lt=rt&&rt.isDepthTexture?rt.type:null,st=M(b.stencilBuffer,lt),Bt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=yt(b);mt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt,st,b.width,b.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,st,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,st,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Bt,i.RENDERBUFFER,P)}else{const rt=b.textures;for(let lt=0;lt<rt.length;lt++){const st=rt[lt],Bt=r.convert(st.format,st.colorSpace),Tt=r.convert(st.type),Nt=E(st.internalFormat,Bt,Tt,st.colorSpace),ce=yt(b);Y&&mt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,Nt,b.width,b.height):mt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,Nt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Nt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ot(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),L(b.depthTexture,0);const rt=n.get(b.depthTexture).__webglTexture,lt=yt(b);if(b.depthTexture.format===_s)mt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0);else if(b.depthTexture.format===ws)mt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function Et(P){const b=n.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const rt=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),rt){const lt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,rt.removeEventListener("dispose",lt)};rt.addEventListener("dispose",lt),b.__depthDisposeCallback=lt}b.__boundDepthTexture=rt}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");ot(b.__webglFramebuffer,P)}else if(Y){b.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[rt]),b.__webglDepthbuffer[rt]===void 0)b.__webglDepthbuffer[rt]=i.createRenderbuffer(),nt(b.__webglDepthbuffer[rt],P,!1);else{const lt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=b.__webglDepthbuffer[rt];i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,st)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),nt(b.__webglDepthbuffer,P,!1);else{const rt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,lt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function wt(P,b,Y){const rt=n.get(P);b!==void 0&&ht(rt.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&Et(P)}function kt(P){const b=P.texture,Y=n.get(P),rt=n.get(b);P.addEventListener("dispose",I);const lt=P.textures,st=P.isWebGLCubeRenderTarget===!0,Bt=lt.length>1;if(Bt||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=b.version,o.memory.textures++),st){Y.__webglFramebuffer=[];for(let Tt=0;Tt<6;Tt++)if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer[Tt]=[];for(let Nt=0;Nt<b.mipmaps.length;Nt++)Y.__webglFramebuffer[Tt][Nt]=i.createFramebuffer()}else Y.__webglFramebuffer[Tt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Tt=0;Tt<b.mipmaps.length;Tt++)Y.__webglFramebuffer[Tt]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Bt)for(let Tt=0,Nt=lt.length;Tt<Nt;Tt++){const ce=n.get(lt[Tt]);ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&mt(P)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Tt=0;Tt<lt.length;Tt++){const Nt=lt[Tt];Y.__webglColorRenderbuffer[Tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[Tt]);const ce=r.convert(Nt.format,Nt.colorSpace),ft=r.convert(Nt.type),St=E(Nt.internalFormat,ce,ft,Nt.colorSpace,P.isXRRenderTarget===!0),ee=yt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,St,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,Y.__webglColorRenderbuffer[Tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),nt(Y.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(st){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),gt(i.TEXTURE_CUBE_MAP,b);for(let Tt=0;Tt<6;Tt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Nt=0;Nt<b.mipmaps.length;Nt++)ht(Y.__webglFramebuffer[Tt][Nt],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Nt);else ht(Y.__webglFramebuffer[Tt],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0);d(b)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Bt){for(let Tt=0,Nt=lt.length;Tt<Nt;Tt++){const ce=lt[Tt],ft=n.get(ce);e.bindTexture(i.TEXTURE_2D,ft.__webglTexture),gt(i.TEXTURE_2D,ce),ht(Y.__webglFramebuffer,P,ce,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,0),d(ce)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let Tt=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Tt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Tt,rt.__webglTexture),gt(Tt,b),b.mipmaps&&b.mipmaps.length>0)for(let Nt=0;Nt<b.mipmaps.length;Nt++)ht(Y.__webglFramebuffer[Nt],P,b,i.COLOR_ATTACHMENT0,Tt,Nt);else ht(Y.__webglFramebuffer,P,b,i.COLOR_ATTACHMENT0,Tt,0);d(b)&&p(Tt),e.unbindTexture()}P.depthBuffer&&Et(P)}function jt(P){const b=P.textures;for(let Y=0,rt=b.length;Y<rt;Y++){const lt=b[Y];if(d(lt)){const st=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Bt=n.get(lt).__webglTexture;e.bindTexture(st,Bt),p(st),e.unbindTexture()}}}const at=[],C=[];function Mt(P){if(P.samples>0){if(mt(P)===!1){const b=P.textures,Y=P.width,rt=P.height;let lt=i.COLOR_BUFFER_BIT;const st=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Bt=n.get(P),Tt=b.length>1;if(Tt)for(let Nt=0;Nt<b.length;Nt++)e.bindFramebuffer(i.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let Nt=0;Nt<b.length;Nt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),Tt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Bt.__webglColorRenderbuffer[Nt]);const ce=n.get(b[Nt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ce,0)}i.blitFramebuffer(0,0,Y,rt,0,0,Y,rt,lt,i.NEAREST),l===!0&&(at.length=0,C.length=0,at.push(i.COLOR_ATTACHMENT0+Nt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(at.push(st),C.push(st),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,at))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Tt)for(let Nt=0;Nt<b.length;Nt++){e.bindFramebuffer(i.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,Bt.__webglColorRenderbuffer[Nt]);const ce=n.get(b[Nt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,ce,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const b=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function yt(P){return Math.min(s.maxSamples,P.samples)}function mt(P){const b=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function bt(P){const b=o.render.frame;c.get(P)!==b&&(c.set(P,b),P.update())}function Xt(P,b){const Y=P.colorSpace,rt=P.format,lt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Y!==xi&&Y!==hi&&(xe.getTransfer(Y)===Ae?(rt!==Fn||lt!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),b}function Dt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=k,this.resetTextureUnits=v,this.setTexture2D=L,this.setTexture2DArray=F,this.setTexture3D=B,this.setTextureCube=U,this.rebindTextures=wt,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=mt}function pg(i,t){function e(n,s=hi){let r;const o=xe.getTransfer(s);if(n===ni)return i.UNSIGNED_BYTE;if(n===yl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Sl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Uh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ih)return i.BYTE;if(n===Dh)return i.SHORT;if(n===ir)return i.UNSIGNED_SHORT;if(n===Ml)return i.INT;if(n===Ui)return i.UNSIGNED_INT;if(n===Hn)return i.FLOAT;if(n===Gn)return i.HALF_FLOAT;if(n===Nh)return i.ALPHA;if(n===Fh)return i.RGB;if(n===Fn)return i.RGBA;if(n===zh)return i.LUMINANCE;if(n===Oh)return i.LUMINANCE_ALPHA;if(n===_s)return i.DEPTH_COMPONENT;if(n===ws)return i.DEPTH_STENCIL;if(n===bl)return i.RED;if(n===El)return i.RED_INTEGER;if(n===Bh)return i.RG;if(n===wl)return i.RG_INTEGER;if(n===Tl)return i.RGBA_INTEGER;if(n===ro||n===oo||n===ao||n===lo)if(o===Ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ro)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ro)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ao)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===lo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oa||n===Ba||n===ka||n===Ha)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Oa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ha)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ga||n===Va||n===Wa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ga||n===Va)return o===Ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wa)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Xa||n===qa||n===Ya||n===$a||n===Ka||n===ja||n===Za||n===Ja||n===Qa||n===tl||n===el||n===nl||n===il||n===sl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xa)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qa)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ya)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$a)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ka)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ja)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Za)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ja)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qa)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===el)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===il)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===co||n===rl||n===ol)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===co)return o===Ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ol)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kh||n===al||n===ll||n===cl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===co)return r.COMPRESSED_RED_RGTC1_EXT;if(n===al)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ll)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class mg extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class $t extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gg={type:"move"};class ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(const x of t.hand.values()){const d=e.getJointPose(x,n),p=this._getHandJoint(h,x);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}const c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],f=c.position.distanceTo(u.position),m=.02,g=.005;h.inputState.pinching&&f>m+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=m-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new $t;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const _g=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class vg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new en,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ve({vertexShader:_g,fragmentShader:xg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ce(new fn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Mg extends Rs{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,h=null,c=null,u=null,f=null,m=null,g=null;const x=new vg,d=e.getContextAttributes();let p=null,E=null;const M=[],S=[],N=new ut;let I=null;const R=new _n;R.layers.enable(1),R.viewport=new Be;const T=new _n;T.layers.enable(2),T.viewport=new Be;const H=[R,T],_=new mg;_.layers.enable(1),_.layers.enable(2);let v=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ht=M[Z];return ht===void 0&&(ht=new ua,M[Z]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(Z){let ht=M[Z];return ht===void 0&&(ht=new ua,M[Z]=ht),ht.getGripSpace()},this.getHand=function(Z){let ht=M[Z];return ht===void 0&&(ht=new ua,M[Z]=ht),ht.getHandSpace()};function y(Z){const ht=S.indexOf(Z.inputSource);if(ht===-1)return;const nt=M[ht];nt!==void 0&&(nt.update(Z.inputSource,Z.frame,h||o),nt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function L(){s.removeEventListener("select",y),s.removeEventListener("selectstart",y),s.removeEventListener("selectend",y),s.removeEventListener("squeeze",y),s.removeEventListener("squeezestart",y),s.removeEventListener("squeezeend",y),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",F);for(let Z=0;Z<M.length;Z++){const ht=S[Z];ht!==null&&(S[Z]=null,M[Z].disconnect(ht))}v=null,k=null,x.reset(),t.setRenderTarget(p),m=null,f=null,u=null,s=null,E=null,te.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(Z){h=Z},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",y),s.addEventListener("selectstart",y),s.addEventListener("selectend",y),s.addEventListener("squeeze",y),s.addEventListener("squeezestart",y),s.addEventListener("squeezeend",y),s.addEventListener("end",L),s.addEventListener("inputsourceschange",F),d.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(N),s.renderState.layers===void 0){const ht={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,ht),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new wn(m.framebufferWidth,m.framebufferHeight,{format:Fn,type:ni,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let ht=null,nt=null,ot=null;d.depth&&(ot=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=d.stencil?ws:_s,nt=d.stencil?Es:Ui);const Et={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Et),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new wn(f.textureWidth,f.textureHeight,{format:Fn,type:ni,depthTexture:new tu(f.textureWidth,f.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(a),te.setContext(s),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function F(Z){for(let ht=0;ht<Z.removed.length;ht++){const nt=Z.removed[ht],ot=S.indexOf(nt);ot>=0&&(S[ot]=null,M[ot].disconnect(nt))}for(let ht=0;ht<Z.added.length;ht++){const nt=Z.added[ht];let ot=S.indexOf(nt);if(ot===-1){for(let wt=0;wt<M.length;wt++)if(wt>=S.length){S.push(nt),ot=wt;break}else if(S[wt]===null){S[wt]=nt,ot=wt;break}if(ot===-1)break}const Et=M[ot];Et&&Et.connect(nt)}}const B=new D,U=new D;function z(Z,ht,nt){B.setFromMatrixPosition(ht.matrixWorld),U.setFromMatrixPosition(nt.matrixWorld);const ot=B.distanceTo(U),Et=ht.projectionMatrix.elements,wt=nt.projectionMatrix.elements,kt=Et[14]/(Et[10]-1),jt=Et[14]/(Et[10]+1),at=(Et[9]+1)/Et[5],C=(Et[9]-1)/Et[5],Mt=(Et[8]-1)/Et[0],yt=(wt[8]+1)/wt[0],mt=kt*Mt,bt=kt*yt,Xt=ot/(-Mt+yt),Dt=Xt*-Mt;if(ht.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Dt),Z.translateZ(Xt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Et[10]===-1)Z.projectionMatrix.copy(ht.projectionMatrix),Z.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const P=kt+Xt,b=jt+Xt,Y=mt-Dt,rt=bt+(ot-Dt),lt=at*jt/b*P,st=C*jt/b*P;Z.projectionMatrix.makePerspective(Y,rt,lt,st,P,b),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function J(Z,ht){ht===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ht.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let ht=Z.near,nt=Z.far;x.texture!==null&&(x.depthNear>0&&(ht=x.depthNear),x.depthFar>0&&(nt=x.depthFar)),_.near=T.near=R.near=ht,_.far=T.far=R.far=nt,(v!==_.near||k!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),v=_.near,k=_.far);const ot=Z.parent,Et=_.cameras;J(_,ot);for(let wt=0;wt<Et.length;wt++)J(Et[wt],ot);Et.length===2?z(_,R,T):_.projectionMatrix.copy(R.projectionMatrix),Q(Z,_,ot)};function Q(Z,ht,nt){nt===null?Z.matrix.copy(ht.matrixWorld):(Z.matrix.copy(nt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ht.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ht.projectionMatrix),Z.projectionMatrixInverse.copy(ht.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Eo*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let gt=null;function qt(Z,ht){if(c=ht.getViewerPose(h||o),g=ht,c!==null){const nt=c.views;m!==null&&(t.setRenderTargetFramebuffer(E,m.framebuffer),t.setRenderTarget(E));let ot=!1;nt.length!==_.cameras.length&&(_.cameras.length=0,ot=!0);for(let wt=0;wt<nt.length;wt++){const kt=nt[wt];let jt=null;if(m!==null)jt=m.getViewport(kt);else{const C=u.getViewSubImage(f,kt);jt=C.viewport,wt===0&&(t.setRenderTargetTextures(E,C.colorTexture,f.ignoreDepthValues?void 0:C.depthStencilTexture),t.setRenderTarget(E))}let at=H[wt];at===void 0&&(at=new _n,at.layers.enable(wt),at.viewport=new Be,H[wt]=at),at.matrix.fromArray(kt.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(kt.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(jt.x,jt.y,jt.width,jt.height),wt===0&&(_.matrix.copy(at.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ot===!0&&_.cameras.push(at)}const Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")){const wt=u.getDepthInformation(nt[0]);wt&&wt.isValid&&wt.texture&&x.init(t,wt,s.renderState)}}for(let nt=0;nt<M.length;nt++){const ot=S[nt],Et=M[nt];ot!==null&&Et!==void 0&&Et.update(ot,ht,h||o)}gt&&gt(Z,ht),ht.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ht}),g=null}const te=new Qh;te.setAnimationLoop(qt),this.setAnimationLoop=function(Z){gt=Z},this.dispose=function(){}}}const Ai=new zn,yg=new Me;function Sg(i,t){function e(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function n(d,p){p.color.getRGB(d.fogColor.value,jh(i)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function s(d,p,E,M,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(d,p):p.isMeshToonMaterial?(r(d,p),u(d,p)):p.isMeshPhongMaterial?(r(d,p),c(d,p)):p.isMeshStandardMaterial?(r(d,p),f(d,p),p.isMeshPhysicalMaterial&&m(d,p,S)):p.isMeshMatcapMaterial?(r(d,p),g(d,p)):p.isMeshDepthMaterial?r(d,p):p.isMeshDistanceMaterial?(r(d,p),x(d,p)):p.isMeshNormalMaterial?r(d,p):p.isLineBasicMaterial?(o(d,p),p.isLineDashedMaterial&&a(d,p)):p.isPointsMaterial?l(d,p,E,M):p.isSpriteMaterial?h(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,e(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===cn&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,e(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===cn&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,e(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,e(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const E=t.get(p),M=E.envMap,S=E.envMapRotation;M&&(d.envMap.value=M,Ai.copy(S),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),d.envMapRotation.value.setFromMatrix4(yg.makeRotationFromEuler(Ai)),d.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap&&(d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,d.lightMapTransform)),p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,d.aoMapTransform))}function o(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform))}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function l(d,p,E,M){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*E,d.scale.value=M*.5,p.map&&(d.map.value=p.map,e(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function h(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function c(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,d.roughnessMapTransform)),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function m(d,p,E){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===cn&&d.clearcoatNormalScale.value.negate())),p.dispersion>0&&(d.dispersion.value=p.dispersion),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=E.texture,d.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,p){p.matcap&&(d.matcap.value=p.matcap)}function x(d,p){const E=t.get(p).light;d.referencePosition.value.setFromMatrixPosition(E.matrixWorld),d.nearDistance.value=E.shadow.camera.near,d.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function bg(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,M){const S=M.program;n.uniformBlockBinding(E,S)}function h(E,M){let S=s[E.id];S===void 0&&(g(E),S=c(E),s[E.id]=S,E.addEventListener("dispose",d));const N=M.program;n.updateUBOMapping(E,N);const I=t.render.frame;r[E.id]!==I&&(f(E),r[E.id]=I)}function c(E){const M=u();E.__bindingPointIndex=M;const S=i.createBuffer(),N=E.__size,I=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,N,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,S),S}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const M=s[E.id],S=E.uniforms,N=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let I=0,R=S.length;I<R;I++){const T=Array.isArray(S[I])?S[I]:[S[I]];for(let H=0,_=T.length;H<_;H++){const v=T[H];if(m(v,I,H,N)===!0){const k=v.__offset,y=Array.isArray(v.value)?v.value:[v.value];let L=0;for(let F=0;F<y.length;F++){const B=y[F],U=x(B);typeof B=="number"||typeof B=="boolean"?(v.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,k+L,v.__data)):B.isMatrix3?(v.__data[0]=B.elements[0],v.__data[1]=B.elements[1],v.__data[2]=B.elements[2],v.__data[3]=0,v.__data[4]=B.elements[3],v.__data[5]=B.elements[4],v.__data[6]=B.elements[5],v.__data[7]=0,v.__data[8]=B.elements[6],v.__data[9]=B.elements[7],v.__data[10]=B.elements[8],v.__data[11]=0):(B.toArray(v.__data,L),L+=U.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,v.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,M,S,N){const I=E.value,R=M+"_"+S;if(N[R]===void 0)return typeof I=="number"||typeof I=="boolean"?N[R]=I:N[R]=I.clone(),!0;{const T=N[R];if(typeof I=="number"||typeof I=="boolean"){if(T!==I)return N[R]=I,!0}else if(T.equals(I)===!1)return T.copy(I),!0}return!1}function g(E){const M=E.uniforms;let S=0;const N=16;for(let R=0,T=M.length;R<T;R++){const H=Array.isArray(M[R])?M[R]:[M[R]];for(let _=0,v=H.length;_<v;_++){const k=H[_],y=Array.isArray(k.value)?k.value:[k.value];for(let L=0,F=y.length;L<F;L++){const B=y[L],U=x(B),z=S%N,J=z%U.boundary,Q=z+J;S+=J,Q!==0&&N-Q<U.storage&&(S+=N-Q),k.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=U.storage}}}const I=S%N;return I>0&&(S+=N-I),E.__size=S,E.__cache={},this}function x(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function d(E){const M=E.target;M.removeEventListener("dispose",d);const S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:h,dispose:p}}class Eg{constructor(t={}){const{canvas:e=ff(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),g=new Int32Array(4);let x=null,d=null;const p=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=En,this.toneMapping=gi,this.toneMappingExposure=1;const M=this;let S=!1,N=0,I=0,R=null,T=-1,H=null;const _=new Be,v=new Be;let k=null;const y=new Ft(0);let L=0,F=e.width,B=e.height,U=1,z=null,J=null;const Q=new Be(0,0,F,B),gt=new Be(0,0,F,B);let qt=!1;const te=new Rl;let Z=!1,ht=!1;const nt=new Me,ot=new Me,Et=new D,wt=new Be,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let jt=!1;function at(){return R===null?U:1}let C=n;function Mt(w,V){return e.getContext(w,V)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${xl}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",It,!1),e.addEventListener("webglcontextcreationerror",Ut,!1),C===null){const V="webgl2";if(C=Mt(V,w),C===null)throw Mt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let yt,mt,bt,Xt,Dt,P,b,Y,rt,lt,st,Bt,Tt,Nt,ce,ft,St,ee,ne,zt,ue,se,ye,G;function Rt(){yt=new Rm(C),yt.init(),se=new pg(C,yt),mt=new bm(C,yt,t,se),bt=new ug(C),mt.reverseDepthBuffer&&bt.buffers.depth.setReversed(!0),Xt=new Im(C),Dt=new j0,P=new dg(C,yt,bt,Dt,mt,se,Xt),b=new wm(M),Y=new Cm(M),rt=new Bf(C),ye=new ym(C,rt),lt=new Pm(C,rt,Xt,ye),st=new Um(C,lt,rt,Xt),ne=new Dm(C,mt,P),ft=new Em(Dt),Bt=new K0(M,b,Y,yt,mt,ye,ft),Tt=new Sg(M,Dt),Nt=new J0,ce=new sg(yt),ee=new Mm(M,b,Y,bt,st,f,l),St=new cg(M,st,mt),G=new bg(C,Xt,mt,bt),zt=new Sm(C,yt,Xt),ue=new Lm(C,yt,Xt),Xt.programs=Bt.programs,M.capabilities=mt,M.extensions=yt,M.properties=Dt,M.renderLists=Nt,M.shadowMap=St,M.state=bt,M.info=Xt}Rt();const tt=new Mg(M,C);this.xr=tt,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const w=yt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=yt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(w){w!==void 0&&(U=w,this.setSize(F,B,!1))},this.getSize=function(w){return w.set(F,B)},this.setSize=function(w,V,$=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=w,B=V,e.width=Math.floor(w*U),e.height=Math.floor(V*U),$===!0&&(e.style.width=w+"px",e.style.height=V+"px"),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(F*U,B*U).floor()},this.setDrawingBufferSize=function(w,V,$){F=w,B=V,U=$,e.width=Math.floor(w*$),e.height=Math.floor(V*$),this.setViewport(0,0,w,V)},this.getCurrentViewport=function(w){return w.copy(_)},this.getViewport=function(w){return w.copy(Q)},this.setViewport=function(w,V,$,K){w.isVector4?Q.set(w.x,w.y,w.z,w.w):Q.set(w,V,$,K),bt.viewport(_.copy(Q).multiplyScalar(U).round())},this.getScissor=function(w){return w.copy(gt)},this.setScissor=function(w,V,$,K){w.isVector4?gt.set(w.x,w.y,w.z,w.w):gt.set(w,V,$,K),bt.scissor(v.copy(gt).multiplyScalar(U).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(w){bt.setScissorTest(qt=w)},this.setOpaqueSort=function(w){z=w},this.setTransparentSort=function(w){J=w},this.getClearColor=function(w){return w.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(w=!0,V=!0,$=!0){let K=0;if(w){let W=!1;if(R!==null){const vt=R.texture.format;W=vt===Tl||vt===wl||vt===El}if(W){const vt=R.texture.type,Pt=vt===ni||vt===Ui||vt===ir||vt===Es||vt===yl||vt===Sl,Ht=ee.getClearColor(),Gt=ee.getClearAlpha(),Wt=Ht.r,Kt=Ht.g,Vt=Ht.b;Pt?(m[0]=Wt,m[1]=Kt,m[2]=Vt,m[3]=Gt,C.clearBufferuiv(C.COLOR,0,m)):(g[0]=Wt,g[1]=Kt,g[2]=Vt,g[3]=Gt,C.clearBufferiv(C.COLOR,0,g))}else K|=C.COLOR_BUFFER_BIT}V&&(K|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),$&&(K|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",It,!1),e.removeEventListener("webglcontextcreationerror",Ut,!1),Nt.dispose(),ce.dispose(),Dt.dispose(),b.dispose(),Y.dispose(),st.dispose(),ye.dispose(),G.dispose(),Bt.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",Us),tt.removeEventListener("sessionend",$e),vn.stop()};function ct(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=Xt.autoReset,V=St.enabled,$=St.autoUpdate,K=St.needsUpdate,W=St.type;Rt(),Xt.autoReset=w,St.enabled=V,St.autoUpdate=$,St.needsUpdate=K,St.type=W}function Ut(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function fe(w){const V=w.target;V.removeEventListener("dispose",fe),j(V)}function j(w){ve(w),Dt.remove(w)}function ve(w){const V=Dt.get(w).programs;V!==void 0&&(V.forEach(function($){Bt.releaseProgram($)}),w.isShaderMaterial&&Bt.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,$,K,W,vt){V===null&&(V=kt);const Pt=W.isMesh&&W.matrixWorld.determinant()<0,Ht=ki(w,V,$,K,W);bt.setMaterial(K,Pt);let Gt=$.index,Wt=1;if(K.wireframe===!0){if(Gt=lt.getWireframeAttribute($),Gt===void 0)return;Wt=2}const Kt=$.drawRange,Vt=$.attributes.position;let _e=Kt.start*Wt,pe=(Kt.start+Kt.count)*Wt;vt!==null&&(_e=Math.max(_e,vt.start*Wt),pe=Math.min(pe,(vt.start+vt.count)*Wt)),Gt!==null?(_e=Math.max(_e,0),pe=Math.min(pe,Gt.count)):Vt!=null&&(_e=Math.max(_e,0),pe=Math.min(pe,Vt.count));const Re=pe-_e;if(Re<0||Re===1/0)return;ye.setup(W,K,Ht,$,Gt);let ze,ge=zt;if(Gt!==null&&(ze=rt.get(Gt),ge=ue,ge.setIndex(ze)),W.isMesh)K.wireframe===!0?(bt.setLineWidth(K.wireframeLinewidth*at()),ge.setMode(C.LINES)):ge.setMode(C.TRIANGLES);else if(W.isLine){let Yt=K.linewidth;Yt===void 0&&(Yt=1),bt.setLineWidth(Yt*at()),W.isLineSegments?ge.setMode(C.LINES):W.isLineLoop?ge.setMode(C.LINE_LOOP):ge.setMode(C.LINE_STRIP)}else W.isPoints?ge.setMode(C.POINTS):W.isSprite&&ge.setMode(C.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)ge.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(yt.get("WEBGL_multi_draw"))ge.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Yt=W._multiDrawStarts,Oe=W._multiDrawCounts,he=W._multiDrawCount,rn=Gt?rt.get(Gt).bytesPerElement:1,An=Dt.get(K).currentProgram.getUniforms();for(let on=0;on<he;on++)An.setValue(C,"_gl_DrawID",on),ge.render(Yt[on]/rn,Oe[on])}else if(W.isInstancedMesh)ge.renderInstances(_e,Re,W.count);else if($.isInstancedBufferGeometry){const Yt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Oe=Math.min($.instanceCount,Yt);ge.renderInstances(_e,Re,Oe)}else ge.render(_e,Re)};function de(w,V,$){w.transparent===!0&&w.side===Dn&&w.forceSinglePass===!1?(w.side=cn,w.needsUpdate=!0,Bi(w,V,$),w.side=_i,w.needsUpdate=!0,Bi(w,V,$),w.side=Dn):Bi(w,V,$)}this.compile=function(w,V,$=null){$===null&&($=w),d=ce.get($),d.init(V),E.push(d),$.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(d.pushLight(W),W.castShadow&&d.pushShadow(W))}),w!==$&&w.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(d.pushLight(W),W.castShadow&&d.pushShadow(W))}),d.setupLights();const K=new Set;return w.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const vt=W.material;if(vt)if(Array.isArray(vt))for(let Pt=0;Pt<vt.length;Pt++){const Ht=vt[Pt];de(Ht,$,W),K.add(Ht)}else de(vt,$,W),K.add(vt)}),E.pop(),d=null,K},this.compileAsync=function(w,V,$=null){const K=this.compile(w,V,$);return new Promise(W=>{function vt(){if(K.forEach(function(Pt){Dt.get(Pt).currentProgram.isReady()&&K.delete(Pt)}),K.size===0){W(w);return}setTimeout(vt,10)}yt.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let je=null;function Tn(w){je&&je(w)}function Us(){vn.stop()}function $e(){vn.start()}const vn=new Qh;vn.setAnimationLoop(Tn),typeof self<"u"&&vn.setContext(self),this.setAnimationLoop=function(w){je=w,tt.setAnimationLoop(w),w===null?vn.stop():vn.start()},tt.addEventListener("sessionstart",Us),tt.addEventListener("sessionend",$e),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(V),V=tt.getCamera()),w.isScene===!0&&w.onBeforeRender(M,w,V,R),d=ce.get(w,E.length),d.init(V),E.push(d),ot.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),te.setFromProjectionMatrix(ot),ht=this.localClippingEnabled,Z=ft.init(this.clippingPlanes,ht),x=Nt.get(w,p.length),x.init(),p.push(x),tt.enabled===!0&&tt.isPresenting===!0){const vt=M.xr.getDepthSensingMesh();vt!==null&&Oi(vt,V,-1/0,M.sortObjects)}Oi(w,V,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(z,J),jt=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,jt&&ee.addToRenderList(x,w),this.info.render.frame++,Z===!0&&ft.beginShadows();const $=d.state.shadowsArray;St.render($,w,V),Z===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=x.opaque,W=x.transmissive;if(d.setupLights(),V.isArrayCamera){const vt=V.cameras;if(W.length>0)for(let Pt=0,Ht=vt.length;Pt<Ht;Pt++){const Gt=vt[Pt];cr(K,W,w,Gt)}jt&&ee.render(w);for(let Pt=0,Ht=vt.length;Pt<Ht;Pt++){const Gt=vt[Pt];Mi(x,w,Gt,Gt.viewport)}}else W.length>0&&cr(K,W,w,V),jt&&ee.render(w),Mi(x,w,V);R!==null&&(P.updateMultisampleRenderTarget(R),P.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(M,w,V),ye.resetDefaultState(),T=-1,H=null,E.pop(),E.length>0?(d=E[E.length-1],Z===!0&&ft.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Oi(w,V,$,K){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||te.intersectsSprite(w)){K&&wt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ot);const Pt=st.update(w),Ht=w.material;Ht.visible&&x.push(w,Pt,Ht,$,wt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||te.intersectsObject(w))){const Pt=st.update(w),Ht=w.material;if(K&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),wt.copy(w.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),wt.copy(Pt.boundingSphere.center)),wt.applyMatrix4(w.matrixWorld).applyMatrix4(ot)),Array.isArray(Ht)){const Gt=Pt.groups;for(let Wt=0,Kt=Gt.length;Wt<Kt;Wt++){const Vt=Gt[Wt],_e=Ht[Vt.materialIndex];_e&&_e.visible&&x.push(w,Pt,_e,$,wt.z,Vt)}}else Ht.visible&&x.push(w,Pt,Ht,$,wt.z,null)}}const vt=w.children;for(let Pt=0,Ht=vt.length;Pt<Ht;Pt++)Oi(vt[Pt],V,$,K)}function Mi(w,V,$,K){const W=w.opaque,vt=w.transmissive,Pt=w.transparent;d.setupLightsView($),Z===!0&&ft.setGlobalState(M.clippingPlanes,$),K&&bt.viewport(_.copy(K)),W.length>0&&yi(W,V,$),vt.length>0&&yi(vt,V,$),Pt.length>0&&yi(Pt,V,$),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function cr(w,V,$,K){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[K.id]===void 0&&(d.state.transmissionRenderTarget[K.id]=new wn(1,1,{generateMipmaps:!0,type:yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float")?Gn:ni,minFilter:Di,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xe.workingColorSpace}));const vt=d.state.transmissionRenderTarget[K.id],Pt=K.viewport||_;vt.setSize(Pt.z,Pt.w);const Ht=M.getRenderTarget();M.setRenderTarget(vt),M.getClearColor(y),L=M.getClearAlpha(),L<1&&M.setClearColor(16777215,.5),M.clear(),jt&&ee.render($);const Gt=M.toneMapping;M.toneMapping=gi;const Wt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),d.setupLightsView(K),Z===!0&&ft.setGlobalState(M.clippingPlanes,K),yi(w,$,K),P.updateMultisampleRenderTarget(vt),P.updateRenderTargetMipmap(vt),yt.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Vt=0,_e=V.length;Vt<_e;Vt++){const pe=V[Vt],Re=pe.object,ze=pe.geometry,ge=pe.material,Yt=pe.group;if(ge.side===Dn&&Re.layers.test(K.layers)){const Oe=ge.side;ge.side=cn,ge.needsUpdate=!0,Ns(Re,$,K,ze,ge,Yt),ge.side=Oe,ge.needsUpdate=!0,Kt=!0}}Kt===!0&&(P.updateMultisampleRenderTarget(vt),P.updateRenderTargetMipmap(vt))}M.setRenderTarget(Ht),M.setClearColor(y,L),Wt!==void 0&&(K.viewport=Wt),M.toneMapping=Gt}function yi(w,V,$){const K=V.isScene===!0?V.overrideMaterial:null;for(let W=0,vt=w.length;W<vt;W++){const Pt=w[W],Ht=Pt.object,Gt=Pt.geometry,Wt=K===null?Pt.material:K,Kt=Pt.group;Ht.layers.test($.layers)&&Ns(Ht,V,$,Gt,Wt,Kt)}}function Ns(w,V,$,K,W,vt){w.onBeforeRender(M,V,$,K,W,vt),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(M,V,$,K,w,vt),W.transparent===!0&&W.side===Dn&&W.forceSinglePass===!1?(W.side=cn,W.needsUpdate=!0,M.renderBufferDirect($,V,K,W,w,vt),W.side=_i,W.needsUpdate=!0,M.renderBufferDirect($,V,K,W,w,vt),W.side=Dn):M.renderBufferDirect($,V,K,W,w,vt),w.onAfterRender(M,V,$,K,W,vt)}function Bi(w,V,$){V.isScene!==!0&&(V=kt);const K=Dt.get(w),W=d.state.lights,vt=d.state.shadowsArray,Pt=W.state.version,Ht=Bt.getParameters(w,W.state,vt,V,$),Gt=Bt.getProgramCacheKey(Ht);let Wt=K.programs;K.environment=w.isMeshStandardMaterial?V.environment:null,K.fog=V.fog,K.envMap=(w.isMeshStandardMaterial?Y:b).get(w.envMap||K.environment),K.envMapRotation=K.environment!==null&&w.envMap===null?V.environmentRotation:w.envMapRotation,Wt===void 0&&(w.addEventListener("dispose",fe),Wt=new Map,K.programs=Wt);let Kt=Wt.get(Gt);if(Kt!==void 0){if(K.currentProgram===Kt&&K.lightsStateVersion===Pt)return ur(w,Ht),Kt}else Ht.uniforms=Bt.getUniforms(w),w.onBeforeCompile(Ht,M),Kt=Bt.acquireProgram(Ht,Gt),Wt.set(Gt,Kt),K.uniforms=Ht.uniforms;const Vt=K.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Vt.clippingPlanes=ft.uniform),ur(w,Ht),K.needsLights=sn(w),K.lightsStateVersion=Pt,K.needsLights&&(Vt.ambientLightColor.value=W.state.ambient,Vt.lightProbe.value=W.state.probe,Vt.directionalLights.value=W.state.directional,Vt.directionalLightShadows.value=W.state.directionalShadow,Vt.spotLights.value=W.state.spot,Vt.spotLightShadows.value=W.state.spotShadow,Vt.rectAreaLights.value=W.state.rectArea,Vt.ltc_1.value=W.state.rectAreaLTC1,Vt.ltc_2.value=W.state.rectAreaLTC2,Vt.pointLights.value=W.state.point,Vt.pointLightShadows.value=W.state.pointShadow,Vt.hemisphereLights.value=W.state.hemi,Vt.directionalShadowMap.value=W.state.directionalShadowMap,Vt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Vt.spotShadowMap.value=W.state.spotShadowMap,Vt.spotLightMatrix.value=W.state.spotLightMatrix,Vt.spotLightMap.value=W.state.spotLightMap,Vt.pointShadowMap.value=W.state.pointShadowMap,Vt.pointShadowMatrix.value=W.state.pointShadowMatrix),K.currentProgram=Kt,K.uniformsList=null,Kt}function hr(w){if(w.uniformsList===null){const V=w.currentProgram.getUniforms();w.uniformsList=fo.seqWithValue(V.seq,w.uniforms)}return w.uniformsList}function ur(w,V){const $=Dt.get(w);$.outputColorSpace=V.outputColorSpace,$.batching=V.batching,$.batchingColor=V.batchingColor,$.instancing=V.instancing,$.instancingColor=V.instancingColor,$.instancingMorph=V.instancingMorph,$.skinning=V.skinning,$.morphTargets=V.morphTargets,$.morphNormals=V.morphNormals,$.morphColors=V.morphColors,$.morphTargetsCount=V.morphTargetsCount,$.numClippingPlanes=V.numClippingPlanes,$.numIntersection=V.numClipIntersection,$.vertexAlphas=V.vertexAlphas,$.vertexTangents=V.vertexTangents,$.toneMapping=V.toneMapping}function ki(w,V,$,K,W){V.isScene!==!0&&(V=kt),P.resetTextureUnits();const vt=V.fog,Pt=K.isMeshStandardMaterial?V.environment:null,Ht=R===null?M.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:xi,Gt=(K.isMeshStandardMaterial?Y:b).get(K.envMap||Pt),Wt=K.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Kt=!!$.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Vt=!!$.morphAttributes.position,_e=!!$.morphAttributes.normal,pe=!!$.morphAttributes.color;let Re=gi;K.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Re=M.toneMapping);const ze=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ge=ze!==void 0?ze.length:0,Yt=Dt.get(K),Oe=d.state.lights;if(Z===!0&&(ht===!0||w!==H)){const hn=w===H&&K.id===T;ft.setState(K,w,hn)}let he=!1;K.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==Oe.state.version||Yt.outputColorSpace!==Ht||W.isBatchedMesh&&Yt.batching===!1||!W.isBatchedMesh&&Yt.batching===!0||W.isBatchedMesh&&Yt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Yt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Yt.instancing===!1||!W.isInstancedMesh&&Yt.instancing===!0||W.isSkinnedMesh&&Yt.skinning===!1||!W.isSkinnedMesh&&Yt.skinning===!0||W.isInstancedMesh&&Yt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Yt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Yt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Yt.instancingMorph===!1&&W.morphTexture!==null||Yt.envMap!==Gt||K.fog===!0&&Yt.fog!==vt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==ft.numPlanes||Yt.numIntersection!==ft.numIntersection)||Yt.vertexAlphas!==Wt||Yt.vertexTangents!==Kt||Yt.morphTargets!==Vt||Yt.morphNormals!==_e||Yt.morphColors!==pe||Yt.toneMapping!==Re||Yt.morphTargetsCount!==ge)&&(he=!0):(he=!0,Yt.__version=K.version);let rn=Yt.currentProgram;he===!0&&(rn=Bi(K,V,W));let An=!1,on=!1,ii=!1;const Pe=rn.getUniforms(),Cn=Yt.uniforms;if(bt.useProgram(rn.program)&&(An=!0,on=!0,ii=!0),K.id!==T&&(T=K.id,on=!0),An||H!==w){mt.reverseDepthBuffer?(nt.copy(w.projectionMatrix),pf(nt),mf(nt),Pe.setValue(C,"projectionMatrix",nt)):Pe.setValue(C,"projectionMatrix",w.projectionMatrix),Pe.setValue(C,"viewMatrix",w.matrixWorldInverse);const hn=Pe.map.cameraPosition;hn!==void 0&&hn.setValue(C,Et.setFromMatrixPosition(w.matrixWorld)),mt.logarithmicDepthBuffer&&Pe.setValue(C,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Pe.setValue(C,"isOrthographic",w.isOrthographicCamera===!0),H!==w&&(H=w,on=!0,ii=!0)}if(W.isSkinnedMesh){Pe.setOptional(C,W,"bindMatrix"),Pe.setOptional(C,W,"bindMatrixInverse");const hn=W.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Pe.setValue(C,"boneTexture",hn.boneTexture,P))}W.isBatchedMesh&&(Pe.setOptional(C,W,"batchingTexture"),Pe.setValue(C,"batchingTexture",W._matricesTexture,P),Pe.setOptional(C,W,"batchingIdTexture"),Pe.setValue(C,"batchingIdTexture",W._indirectTexture,P),Pe.setOptional(C,W,"batchingColorTexture"),W._colorsTexture!==null&&Pe.setValue(C,"batchingColorTexture",W._colorsTexture,P));const De=$.morphAttributes;if((De.position!==void 0||De.normal!==void 0||De.color!==void 0)&&ne.update(W,$,rn),(on||Yt.receiveShadow!==W.receiveShadow)&&(Yt.receiveShadow=W.receiveShadow,Pe.setValue(C,"receiveShadow",W.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Cn.envMap.value=Gt,Cn.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&V.environment!==null&&(Cn.envMapIntensity.value=V.environmentIntensity),on&&(Pe.setValue(C,"toneMappingExposure",M.toneMappingExposure),Yt.needsLights&&Wn(Cn,ii),vt&&K.fog===!0&&Tt.refreshFogUniforms(Cn,vt),Tt.refreshMaterialUniforms(Cn,K,U,B,d.state.transmissionRenderTarget[w.id]),fo.upload(C,hr(Yt),Cn,P)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(fo.upload(C,hr(Yt),Cn,P),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Pe.setValue(C,"center",W.center),Pe.setValue(C,"modelViewMatrix",W.modelViewMatrix),Pe.setValue(C,"normalMatrix",W.normalMatrix),Pe.setValue(C,"modelMatrix",W.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const hn=K.uniformsGroups;for(let Hi=0,No=hn.length;Hi<No;Hi++){const fr=hn[Hi];G.update(fr,rn),G.bind(fr,rn)}}return rn}function Wn(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function sn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,V,$){Dt.get(w.texture).__webglTexture=V,Dt.get(w.depthTexture).__webglTexture=$;const K=Dt.get(w);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=$===void 0,K.__autoAllocateDepthBuffer||yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,V){const $=Dt.get(w);$.__webglFramebuffer=V,$.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(w,V=0,$=0){R=w,N=V,I=$;let K=!0,W=null,vt=!1,Pt=!1;if(w){const Gt=Dt.get(w);if(Gt.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(C.FRAMEBUFFER,null),K=!1;else if(Gt.__webglFramebuffer===void 0)P.setupRenderTarget(w);else if(Gt.__hasExternalTextures)P.rebindTextures(w,Dt.get(w.texture).__webglTexture,Dt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Vt=w.depthTexture;if(Gt.__boundDepthTexture!==Vt){if(Vt!==null&&Dt.has(Vt)&&(w.width!==Vt.image.width||w.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(w)}}const Wt=w.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Pt=!0);const Kt=Dt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Kt[V])?W=Kt[V][$]:W=Kt[V],vt=!0):w.samples>0&&P.useMultisampledRTT(w)===!1?W=Dt.get(w).__webglMultisampledFramebuffer:Array.isArray(Kt)?W=Kt[$]:W=Kt,_.copy(w.viewport),v.copy(w.scissor),k=w.scissorTest}else _.copy(Q).multiplyScalar(U).floor(),v.copy(gt).multiplyScalar(U).floor(),k=qt;if(bt.bindFramebuffer(C.FRAMEBUFFER,W)&&K&&bt.drawBuffers(w,W),bt.viewport(_),bt.scissor(v),bt.setScissorTest(k),vt){const Gt=Dt.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+V,Gt.__webglTexture,$)}else if(Pt){const Gt=Dt.get(w.texture),Wt=V||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Gt.__webglTexture,$||0,Wt)}T=-1},this.readRenderTargetPixels=function(w,V,$,K,W,vt,Pt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=Dt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ht=Ht[Pt]),Ht){bt.bindFramebuffer(C.FRAMEBUFFER,Ht);try{const Gt=w.texture,Wt=Gt.format,Kt=Gt.type;if(!mt.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mt.textureTypeReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-K&&$>=0&&$<=w.height-W&&C.readPixels(V,$,K,W,se.convert(Wt),se.convert(Kt),vt)}finally{const Gt=R!==null?Dt.get(R).__webglFramebuffer:null;bt.bindFramebuffer(C.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(w,V,$,K,W,vt,Pt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=Dt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ht=Ht[Pt]),Ht){const Gt=w.texture,Wt=Gt.format,Kt=Gt.type;if(!mt.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!mt.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=w.width-K&&$>=0&&$<=w.height-W){bt.bindFramebuffer(C.FRAMEBUFFER,Ht);const Vt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Vt),C.bufferData(C.PIXEL_PACK_BUFFER,vt.byteLength,C.STREAM_READ),C.readPixels(V,$,K,W,se.convert(Wt),se.convert(Kt),0);const _e=R!==null?Dt.get(R).__webglFramebuffer:null;bt.bindFramebuffer(C.FRAMEBUFFER,_e);const pe=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await df(C,pe,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Vt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,vt),C.deleteBuffer(Vt),C.deleteSync(pe),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,V=null,$=0){w.isTexture!==!0&&(uo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1]);const K=Math.pow(2,-$),W=Math.floor(w.image.width*K),vt=Math.floor(w.image.height*K),Pt=V!==null?V.x:0,Ht=V!==null?V.y:0;P.setTexture2D(w,0),C.copyTexSubImage2D(C.TEXTURE_2D,$,0,0,Pt,Ht,W,vt),bt.unbindTexture()},this.copyTextureToTexture=function(w,V,$=null,K=null,W=0){w.isTexture!==!0&&(uo("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,w=arguments[1],V=arguments[2],W=arguments[3]||0,$=null);let vt,Pt,Ht,Gt,Wt,Kt;$!==null?(vt=$.max.x-$.min.x,Pt=$.max.y-$.min.y,Ht=$.min.x,Gt=$.min.y):(vt=w.image.width,Pt=w.image.height,Ht=0,Gt=0),K!==null?(Wt=K.x,Kt=K.y):(Wt=0,Kt=0);const Vt=se.convert(V.format),_e=se.convert(V.type);P.setTexture2D(V,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,V.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,V.unpackAlignment);const pe=C.getParameter(C.UNPACK_ROW_LENGTH),Re=C.getParameter(C.UNPACK_IMAGE_HEIGHT),ze=C.getParameter(C.UNPACK_SKIP_PIXELS),ge=C.getParameter(C.UNPACK_SKIP_ROWS),Yt=C.getParameter(C.UNPACK_SKIP_IMAGES),Oe=w.isCompressedTexture?w.mipmaps[W]:w.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,Oe.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Oe.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ht),C.pixelStorei(C.UNPACK_SKIP_ROWS,Gt),w.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,W,Wt,Kt,vt,Pt,Vt,_e,Oe.data):w.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,W,Wt,Kt,Oe.width,Oe.height,Vt,Oe.data):C.texSubImage2D(C.TEXTURE_2D,W,Wt,Kt,vt,Pt,Vt,_e,Oe),C.pixelStorei(C.UNPACK_ROW_LENGTH,pe),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Re),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ze),C.pixelStorei(C.UNPACK_SKIP_ROWS,ge),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Yt),W===0&&V.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),bt.unbindTexture()},this.copyTextureToTexture3D=function(w,V,$=null,K=null,W=0){w.isTexture!==!0&&(uo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,K=arguments[1]||null,w=arguments[2],V=arguments[3],W=arguments[4]||0);let vt,Pt,Ht,Gt,Wt,Kt,Vt,_e,pe;const Re=w.isCompressedTexture?w.mipmaps[W]:w.image;$!==null?(vt=$.max.x-$.min.x,Pt=$.max.y-$.min.y,Ht=$.max.z-$.min.z,Gt=$.min.x,Wt=$.min.y,Kt=$.min.z):(vt=Re.width,Pt=Re.height,Ht=Re.depth,Gt=0,Wt=0,Kt=0),K!==null?(Vt=K.x,_e=K.y,pe=K.z):(Vt=0,_e=0,pe=0);const ze=se.convert(V.format),ge=se.convert(V.type);let Yt;if(V.isData3DTexture)P.setTexture3D(V,0),Yt=C.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)P.setTexture2DArray(V,0),Yt=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,V.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,V.unpackAlignment);const Oe=C.getParameter(C.UNPACK_ROW_LENGTH),he=C.getParameter(C.UNPACK_IMAGE_HEIGHT),rn=C.getParameter(C.UNPACK_SKIP_PIXELS),An=C.getParameter(C.UNPACK_SKIP_ROWS),on=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Re.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Re.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Gt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Wt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Kt),w.isDataTexture||w.isData3DTexture?C.texSubImage3D(Yt,W,Vt,_e,pe,vt,Pt,Ht,ze,ge,Re.data):V.isCompressedArrayTexture?C.compressedTexSubImage3D(Yt,W,Vt,_e,pe,vt,Pt,Ht,ze,Re.data):C.texSubImage3D(Yt,W,Vt,_e,pe,vt,Pt,Ht,ze,ge,Re),C.pixelStorei(C.UNPACK_ROW_LENGTH,Oe),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,he),C.pixelStorei(C.UNPACK_SKIP_PIXELS,rn),C.pixelStorei(C.UNPACK_SKIP_ROWS,An),C.pixelStorei(C.UNPACK_SKIP_IMAGES,on),W===0&&V.generateMipmaps&&C.generateMipmap(Yt),bt.unbindTexture()},this.initRenderTarget=function(w){Dt.get(w).__webglFramebuffer===void 0&&P.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?P.setTextureCube(w,0):w.isData3DTexture?P.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?P.setTexture2DArray(w,0):P.setTexture2D(w,0),bt.unbindTexture()},this.resetState=function(){N=0,I=0,R=null,bt.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Al?"display-p3":"srgb",e.unpackColorSpace=xe.workingColorSpace===Lo?"display-p3":"srgb"}}class Il{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ft(t),this.near=e,this.far=n}clone(){return new Il(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class wg extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Tg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=hl,this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const an=new D;class To{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyMatrix4(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyNormalMatrix(t),this.setXYZ(e,an.x,an.y,an.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.transformDirection(t),this.setXYZ(e,an.x,an.y,an.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=kn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=kn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=kn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=kn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=kn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array),r=be(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new nn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new To(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ru extends vi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ns;const Vs=new D,is=new D,ss=new D,rs=new ut,Ws=new ut,ou=new Me,Fr=new D,Xs=new D,zr=new D,Bc=new ut,fa=new ut,kc=new ut;class Ag extends Ie{constructor(t=new ru){if(super(),this.isSprite=!0,this.type="Sprite",ns===void 0){ns=new Fe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Tg(e,5);ns.setIndex([0,1,2,0,2,3]),ns.setAttribute("position",new To(n,3,0,!1)),ns.setAttribute("uv",new To(n,2,3,!1))}this.geometry=ns,this.material=t,this.center=new ut(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),is.setFromMatrixScale(this.matrixWorld),ou.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ss.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&is.multiplyScalar(-ss.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Or(Fr.set(-.5,-.5,0),ss,o,is,s,r),Or(Xs.set(.5,-.5,0),ss,o,is,s,r),Or(zr.set(.5,.5,0),ss,o,is,s,r),Bc.set(0,0),fa.set(1,0),kc.set(1,1);let a=t.ray.intersectTriangle(Fr,Xs,zr,!1,Vs);if(a===null&&(Or(Xs.set(-.5,.5,0),ss,o,is,s,r),fa.set(0,1),a=t.ray.intersectTriangle(Fr,zr,Xs,!1,Vs),a===null))return;const l=t.ray.origin.distanceTo(Vs);l<t.near||l>t.far||e.push({distance:l,point:Vs.clone(),uv:xn.getInterpolation(Vs,Fr,Xs,zr,Bc,fa,kc,new ut),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Or(i,t,e,n,s,r){rs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ws.x=r*rs.x-s*rs.y,Ws.y=s*rs.x+r*rs.y):Ws.copy(rs),i.copy(t),i.x+=Ws.x,i.y+=Ws.y,i.applyMatrix4(ou)}class Cg extends en{constructor(t=null,e=1,n=1,s,r,o,a,l,h=dn,c=dn,u,f){super(null,o,a,l,h,c,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hc extends nn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const os=new Me,Gc=new Me,Br=[],Vc=new Fi,Rg=new Me,qs=new Ce,Ys=new zi;class ds extends Ce{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Hc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Rg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Fi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,os),Vc.copy(t.boundingBox).applyMatrix4(os),this.boundingBox.union(Vc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new zi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,os),Ys.copy(t.boundingSphere).applyMatrix4(os),this.boundingSphere.union(Ys)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(qs.geometry=this.geometry,qs.material=this.material,qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ys.copy(this.boundingSphere),Ys.applyMatrix4(n),t.ray.intersectsSphere(Ys)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,os),Gc.multiplyMatrices(n,os),qs.matrixWorld=Gc,qs.raycast(t,Br);for(let o=0,a=Br.length;o<a;o++){const l=Br[o];l.instanceId=r,l.object=this,e.push(l)}Br.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Hc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Cg(new Float32Array(s*this.count),s,this.count,bl,Hn));const r=this.morphTexture.source.data.data;let o=0;for(let h=0;h<n.length;h++)o+=n[h];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class po extends vi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ao=new D,Co=new D,Wc=new Me,$s=new Cl,kr=new zi,da=new D,Xc=new D;class Pg extends Ie{constructor(t=new Fe,e=new po){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ao.fromBufferAttribute(e,s-1),Co.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ao.distanceTo(Co);t.setAttribute("lineDistance",new me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(s),kr.radius+=r,t.ray.intersectsSphere(kr)===!1)return;Wc.copy(s).invert(),$s.copy(t.ray).applyMatrix4(Wc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=this.isLineSegments?2:1,c=n.index,f=n.attributes.position;if(c!==null){const m=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let x=m,d=g-1;x<d;x+=h){const p=c.getX(x),E=c.getX(x+1),M=Hr(this,t,$s,l,p,E);M&&e.push(M)}if(this.isLineLoop){const x=c.getX(g-1),d=c.getX(m),p=Hr(this,t,$s,l,x,d);p&&e.push(p)}}else{const m=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=m,d=g-1;x<d;x+=h){const p=Hr(this,t,$s,l,x,x+1);p&&e.push(p)}if(this.isLineLoop){const x=Hr(this,t,$s,l,g-1,m);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Hr(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(Ao.fromBufferAttribute(o,s),Co.fromBufferAttribute(o,r),e.distanceSqToSegment(Ao,Co,da,Xc)>n)return;da.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(da);if(!(l<t.near||l>t.far))return{distance:l,point:Xc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const qc=new D,Yc=new D;class pa extends Pg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)qc.fromBufferAttribute(e,s),Yc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+qc.distanceTo(Yc);t.setAttribute("lineDistance",new me(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Lg extends vi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const $c=new Me,fl=new Cl,Gr=new zi,Vr=new D;class Ig extends Ie{constructor(t=new Fe,e=new Lg){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(s),Gr.radius+=r,t.ray.intersectsSphere(Gr)===!1)return;$c.copy(s).invert(),fl.copy(t.ray).applyMatrix4($c);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let g=f,x=m;g<x;g++){const d=h.getX(g);Vr.fromBufferAttribute(u,d),Kc(Vr,d,l,s,t,e,this)}}else{const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=f,x=m;g<x;g++)Vr.fromBufferAttribute(u,g),Kc(Vr,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Kc(i,t,e,n,s,r,o){const a=fl.distanceSqToPoint(i);if(a<e){const l=new D;fl.closestPointToPoint(i,l),l.applyMatrix4(n);const h=s.ray.origin.distanceTo(l);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class jc extends en{constructor(t,e,n,s,r,o,a,l,h){super(t,e,n,s,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,h;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),h=n[s]-o,h<0)a=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const c=n[s],f=n[s+1]-c,m=(o-c)/f;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ut:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,s=[],r=[],o=[],a=new D,l=new Me;for(let m=0;m<=t;m++){const g=m/t;s[m]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let h=Number.MAX_VALUE;const c=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);c<=h&&(h=c,n.set(1,0,0)),u<=h&&(h=u,n.set(0,1,0)),f<=h&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Qe(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(Qe(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Dl extends Vn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ut){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,m=h-this.aY;l=f*c-m*u+this.aX,h=f*u+m*c+this.aY}return n.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Dg extends Dl{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ul(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){s(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,c,u){let f=(o-r)/h-(a-r)/(h+c)+(a-o)/c,m=(a-o)/c-(l-o)/(c+u)+(l-a)/u;f*=c,m*=c,s(o,a,f,m)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Wr=new D,ma=new Ul,ga=new Ul,_a=new Ul;class Ug extends Vn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,c;this.closed||a>0?h=s[(a-1)%r]:(Wr.subVectors(s[0],s[1]).add(s[0]),h=Wr);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?c=s[(a+2)%r]:(Wr.subVectors(s[r-1],s[r-2]).add(s[r-1]),c=Wr),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(h.distanceToSquared(u),m),x=Math.pow(u.distanceToSquared(f),m),d=Math.pow(f.distanceToSquared(c),m);x<1e-4&&(x=1),g<1e-4&&(g=x),d<1e-4&&(d=x),ma.initNonuniformCatmullRom(h.x,u.x,f.x,c.x,g,x,d),ga.initNonuniformCatmullRom(h.y,u.y,f.y,c.y,g,x,d),_a.initNonuniformCatmullRom(h.z,u.z,f.z,c.z,g,x,d)}else this.curveType==="catmullrom"&&(ma.initCatmullRom(h.x,u.x,f.x,c.x,this.tension),ga.initCatmullRom(h.y,u.y,f.y,c.y,this.tension),_a.initCatmullRom(h.z,u.z,f.z,c.z,this.tension));return n.set(ma.calc(l),ga.calc(l),_a.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Zc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Ng(i,t){const e=1-i;return e*e*t}function Fg(i,t){return 2*(1-i)*i*t}function zg(i,t){return i*i*t}function tr(i,t,e,n){return Ng(i,t)+Fg(i,e)+zg(i,n)}function Og(i,t){const e=1-i;return e*e*e*t}function Bg(i,t){const e=1-i;return 3*e*e*i*t}function kg(i,t){return 3*(1-i)*i*i*t}function Hg(i,t){return i*i*i*t}function er(i,t,e,n,s){return Og(i,t)+Bg(i,e)+kg(i,n)+Hg(i,s)}class au extends Vn{constructor(t=new ut,e=new ut,n=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ut){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(er(t,s.x,r.x,o.x,a.x),er(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Gg extends Vn{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(er(t,s.x,r.x,o.x,a.x),er(t,s.y,r.y,o.y,a.y),er(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class lu extends Vn{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Vg extends Vn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cu extends Vn{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(tr(t,s.x,r.x,o.x),tr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wg extends Vn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(tr(t,s.x,r.x,o.x),tr(t,s.y,r.y,o.y),tr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hu extends Vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],h=s[o],c=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Zc(a,l.x,h.x,c.x,u.x),Zc(a,l.y,h.y,c.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ut().fromArray(s))}return this}}var dl=Object.freeze({__proto__:null,ArcCurve:Dg,CatmullRomCurve3:Ug,CubicBezierCurve:au,CubicBezierCurve3:Gg,EllipseCurve:Dl,LineCurve:lu,LineCurve3:Vg,QuadraticBezierCurve:cu,QuadraticBezierCurve3:Wg,SplineCurve:hu});class Xg extends Vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new dl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let h=0;h<l.length;h++){const c=l[h];n&&n.equals(c)||(e.push(c),n=c)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new dl[s.type]().fromJSON(s))}return this}}class pl extends Xg{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new lu(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new cu(this.currentPoint.clone(),new ut(t,e),new ut(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new au(this.currentPoint.clone(),new ut(t,e),new ut(n,s),new ut(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new hu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const h=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+h,e+c,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const h=new Dl(t,e,n,s,r,o,a,l);if(this.curves.length>0){const u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);const c=h.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class vs extends Fe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],h=new D,c=new ut;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const m=n+u/e*s;h.x=t*Math.cos(m),h.y=t*Math.sin(m),o.push(h.x,h.y,h.z),a.push(0,0,1),c.x=(o[f]/t+1)/2,c.y=(o[f+1]/t+1)/2,l.push(c.x,c.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new me(o,3)),this.setAttribute("normal",new me(a,3)),this.setAttribute("uv",new me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class we extends Fe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const h=this;s=Math.floor(s),r=Math.floor(r);const c=[],u=[],f=[],m=[];let g=0;const x=[],d=n/2;let p=0;E(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(c),this.setAttribute("position",new me(u,3)),this.setAttribute("normal",new me(f,3)),this.setAttribute("uv",new me(m,2));function E(){const S=new D,N=new D;let I=0;const R=(e-t)/n;for(let T=0;T<=r;T++){const H=[],_=T/r,v=_*(e-t)+t;for(let k=0;k<=s;k++){const y=k/s,L=y*l+a,F=Math.sin(L),B=Math.cos(L);N.x=v*F,N.y=-_*n+d,N.z=v*B,u.push(N.x,N.y,N.z),S.set(F,R,B).normalize(),f.push(S.x,S.y,S.z),m.push(y,1-_),H.push(g++)}x.push(H)}for(let T=0;T<s;T++)for(let H=0;H<r;H++){const _=x[H][T],v=x[H+1][T],k=x[H+1][T+1],y=x[H][T+1];t>0&&(c.push(_,v,y),I+=3),e>0&&(c.push(v,k,y),I+=3)}h.addGroup(p,I,0),p+=I}function M(S){const N=g,I=new ut,R=new D;let T=0;const H=S===!0?t:e,_=S===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,d*_,0),f.push(0,_,0),m.push(.5,.5),g++;const v=g;for(let k=0;k<=s;k++){const L=k/s*l+a,F=Math.cos(L),B=Math.sin(L);R.x=H*B,R.y=d*_,R.z=H*F,u.push(R.x,R.y,R.z),f.push(0,_,0),I.x=F*.5+.5,I.y=B*.5*_+.5,m.push(I.x,I.y),g++}for(let k=0;k<s;k++){const y=N+k,L=v+k;S===!0?c.push(L,L+1,y):c.push(L+1,L,y),T+=3}h.addGroup(p,T,S===!0?1:2),p+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new we(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ui extends we{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ui(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class lr extends Fe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),h(n),c(),this.setAttribute("position",new me(r,3)),this.setAttribute("normal",new me(r.slice(),3)),this.setAttribute("uv",new me(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const M=new D,S=new D,N=new D;for(let I=0;I<e.length;I+=3)m(e[I+0],M),m(e[I+1],S),m(e[I+2],N),l(M,S,N,E)}function l(E,M,S,N){const I=N+1,R=[];for(let T=0;T<=I;T++){R[T]=[];const H=E.clone().lerp(S,T/I),_=M.clone().lerp(S,T/I),v=I-T;for(let k=0;k<=v;k++)k===0&&T===I?R[T][k]=H:R[T][k]=H.clone().lerp(_,k/v)}for(let T=0;T<I;T++)for(let H=0;H<2*(I-T)-1;H++){const _=Math.floor(H/2);H%2===0?(f(R[T][_+1]),f(R[T+1][_]),f(R[T][_])):(f(R[T][_+1]),f(R[T+1][_+1]),f(R[T+1][_]))}}function h(E){const M=new D;for(let S=0;S<r.length;S+=3)M.x=r[S+0],M.y=r[S+1],M.z=r[S+2],M.normalize().multiplyScalar(E),r[S+0]=M.x,r[S+1]=M.y,r[S+2]=M.z}function c(){const E=new D;for(let M=0;M<r.length;M+=3){E.x=r[M+0],E.y=r[M+1],E.z=r[M+2];const S=d(E)/2/Math.PI+.5,N=p(E)/Math.PI+.5;o.push(S,1-N)}g(),u()}function u(){for(let E=0;E<o.length;E+=6){const M=o[E+0],S=o[E+2],N=o[E+4],I=Math.max(M,S,N),R=Math.min(M,S,N);I>.9&&R<.1&&(M<.2&&(o[E+0]+=1),S<.2&&(o[E+2]+=1),N<.2&&(o[E+4]+=1))}}function f(E){r.push(E.x,E.y,E.z)}function m(E,M){const S=E*3;M.x=t[S+0],M.y=t[S+1],M.z=t[S+2]}function g(){const E=new D,M=new D,S=new D,N=new D,I=new ut,R=new ut,T=new ut;for(let H=0,_=0;H<r.length;H+=9,_+=6){E.set(r[H+0],r[H+1],r[H+2]),M.set(r[H+3],r[H+4],r[H+5]),S.set(r[H+6],r[H+7],r[H+8]),I.set(o[_+0],o[_+1]),R.set(o[_+2],o[_+3]),T.set(o[_+4],o[_+5]),N.copy(E).add(M).add(S).divideScalar(3);const v=d(N);x(I,_+0,E,v),x(R,_+2,M,v),x(T,_+4,S,v)}}function x(E,M,S,N){N<0&&E.x===1&&(o[M]=E.x-1),S.x===0&&S.z===0&&(o[M]=N/2/Math.PI+.5)}function d(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lr(t.vertices,t.indices,t.radius,t.details)}}class Nl extends lr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Nl(t.radius,t.detail)}}const Xr=new D,qr=new D,xa=new D,Yr=new xn;class Jc extends Fe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(ho*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,h=[0,0,0],c=["a","b","c"],u=new Array(3),f={},m=[];for(let g=0;g<l;g+=3){o?(h[0]=o.getX(g),h[1]=o.getX(g+1),h[2]=o.getX(g+2)):(h[0]=g,h[1]=g+1,h[2]=g+2);const{a:x,b:d,c:p}=Yr;if(x.fromBufferAttribute(a,h[0]),d.fromBufferAttribute(a,h[1]),p.fromBufferAttribute(a,h[2]),Yr.getNormal(xa),u[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,u[1]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,u[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let E=0;E<3;E++){const M=(E+1)%3,S=u[E],N=u[M],I=Yr[c[E]],R=Yr[c[M]],T=`${S}_${N}`,H=`${N}_${S}`;H in f&&f[H]?(xa.dot(f[H].normal)<=r&&(m.push(I.x,I.y,I.z),m.push(R.x,R.y,R.z)),f[H]=null):T in f||(f[T]={index0:h[E],index1:h[M],normal:xa.clone()})}}for(const g in f)if(f[g]){const{index0:x,index1:d}=f[g];Xr.fromBufferAttribute(a,x),qr.fromBufferAttribute(a,d),m.push(Xr.x,Xr.y,Xr.z),m.push(qr.x,qr.y,qr.z)}this.setAttribute("position",new me(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Nn extends pl{constructor(t){super(t),this.uuid=ti(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new pl().fromJSON(s))}return this}}const qg={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=uu(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,h,c,u,f,m;if(n&&(r=Zg(i,t,r,e)),i.length>80*e){a=h=i[0],l=c=i[1];for(let g=e;g<s;g+=e)u=i[g],f=i[g+1],u<a&&(a=u),f<l&&(l=f),u>h&&(h=u),f>c&&(c=f);m=Math.max(h-a,c-l),m=m!==0?32767/m:0}return sr(r,o,e,a,l,m,0),o}};function uu(i,t,e,n,s){let r,o;if(s===l_(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Qc(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Qc(r,i[r],i[r+1],o);return o&&Do(o,o.next)&&(or(o),o=o.next),o}function Ni(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Do(e,e.next)||Ne(e.prev,e,e.next)===0)){if(or(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function sr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&n_(i,n,s,r);let a=i,l,h;for(;i.prev!==i.next;){if(l=i.prev,h=i.next,r?$g(i,n,s,r):Yg(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(h.i/e|0),or(i),i=h.next,a=h.next;continue}if(i=h,i===a){o?o===1?(i=Kg(Ni(i),t,e),sr(i,t,e,n,s,r,2)):o===2&&jg(i,t,e,n,s,r):sr(Ni(i),t,e,n,s,r,1);break}}}function Yg(i){const t=i.prev,e=i,n=i.next;if(Ne(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,h=n.y,c=s<r?s<o?s:o:r<o?r:o,u=a<l?a<h?a:h:l<h?l:h,f=s>r?s>o?s:o:r>o?r:o,m=a>l?a>h?a:h:l>h?l:h;let g=n.next;for(;g!==t;){if(g.x>=c&&g.x<=f&&g.y>=u&&g.y<=m&&ps(s,a,r,l,o,h,g.x,g.y)&&Ne(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function $g(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Ne(s,r,o)>=0)return!1;const a=s.x,l=r.x,h=o.x,c=s.y,u=r.y,f=o.y,m=a<l?a<h?a:h:l<h?l:h,g=c<u?c<f?c:f:u<f?u:f,x=a>l?a>h?a:h:l>h?l:h,d=c>u?c>f?c:f:u>f?u:f,p=ml(m,g,t,e,n),E=ml(x,d,t,e,n);let M=i.prevZ,S=i.nextZ;for(;M&&M.z>=p&&S&&S.z<=E;){if(M.x>=m&&M.x<=x&&M.y>=g&&M.y<=d&&M!==s&&M!==o&&ps(a,c,l,u,h,f,M.x,M.y)&&Ne(M.prev,M,M.next)>=0||(M=M.prevZ,S.x>=m&&S.x<=x&&S.y>=g&&S.y<=d&&S!==s&&S!==o&&ps(a,c,l,u,h,f,S.x,S.y)&&Ne(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;M&&M.z>=p;){if(M.x>=m&&M.x<=x&&M.y>=g&&M.y<=d&&M!==s&&M!==o&&ps(a,c,l,u,h,f,M.x,M.y)&&Ne(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;S&&S.z<=E;){if(S.x>=m&&S.x<=x&&S.y>=g&&S.y<=d&&S!==s&&S!==o&&ps(a,c,l,u,h,f,S.x,S.y)&&Ne(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Kg(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Do(s,r)&&fu(s,n,n.next,r)&&rr(s,r)&&rr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),or(n),or(n.next),n=i=r),n=n.next}while(n!==i);return Ni(n)}function jg(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&r_(o,a)){let l=du(o,a);o=Ni(o,o.next),l=Ni(l,l.next),sr(o,t,e,n,s,r,0),sr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Zg(i,t,e,n){const s=[];let r,o,a,l,h;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,h=uu(i,a,l,n,!1),h===h.next&&(h.steiner=!0),s.push(s_(h));for(s.sort(Jg),r=0;r<s.length;r++)e=Qg(s[r],e);return e}function Jg(i,t){return i.x-t.x}function Qg(i,t){const e=t_(i,t);if(!e)return t;const n=du(e,i);return Ni(n,n.next),Ni(e,e.next)}function t_(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,h=s.y;let c=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&ps(o<h?r:n,o,l,h,o<h?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),rr(e,i)&&(u<c||u===c&&(e.x>s.x||e.x===s.x&&e_(s,e)))&&(s=e,c=u)),e=e.next;while(e!==a);return s}function e_(i,t){return Ne(i.prev,i,t.prev)<0&&Ne(t.next,i,i.next)<0}function n_(i,t,e,n){let s=i;do s.z===0&&(s.z=ml(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,i_(s)}function i_(i){let t,e,n,s,r,o,a,l,h=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<h&&(a++,n=n.nextZ,!!n);t++);for(l=h;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,h*=2}while(o>1);return i}function ml(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function s_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ps(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function r_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!o_(i,t)&&(rr(i,t)&&rr(t,i)&&a_(i,t)&&(Ne(i.prev,i,t.prev)||Ne(i,t.prev,t))||Do(i,t)&&Ne(i.prev,i,i.next)>0&&Ne(t.prev,t,t.next)>0)}function Ne(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Do(i,t){return i.x===t.x&&i.y===t.y}function fu(i,t,e,n){const s=Kr(Ne(i,t,e)),r=Kr(Ne(i,t,n)),o=Kr(Ne(e,n,i)),a=Kr(Ne(e,n,t));return!!(s!==r&&o!==a||s===0&&$r(i,e,t)||r===0&&$r(i,n,t)||o===0&&$r(e,i,n)||a===0&&$r(e,t,n))}function $r(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Kr(i){return i>0?1:i<0?-1:0}function o_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&fu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function rr(i,t){return Ne(i.prev,i,i.next)<0?Ne(i,t,i.next)>=0&&Ne(i,i.prev,t)>=0:Ne(i,t,i.prev)<0||Ne(i,i.next,t)<0}function a_(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function du(i,t){const e=new gl(i.i,i.x,i.y),n=new gl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Qc(i,t,e,n){const s=new gl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function or(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function gl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function l_(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class ei{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return ei.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];th(t),eh(n,t);let o=t.length;e.forEach(th);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,eh(n,e[l]);const a=qg.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function th(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function eh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class pi extends Fe{constructor(t=new Nn([new ut(.5,.5),new ut(-.5,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const h=t[a];o(h)}this.setAttribute("position",new me(s,3)),this.setAttribute("uv",new me(r,2)),this.computeVertexNormals();function o(a){const l=[],h=e.curveSegments!==void 0?e.curveSegments:12,c=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,d=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:c_;let M,S=!1,N,I,R,T;p&&(M=p.getSpacedPoints(c),S=!0,f=!1,N=p.computeFrenetFrames(c,!1),I=new D,R=new D,T=new D),f||(d=0,m=0,g=0,x=0);const H=a.extractPoints(h);let _=H.shape;const v=H.holes;if(!ei.isClockWise(_)){_=_.reverse();for(let at=0,C=v.length;at<C;at++){const Mt=v[at];ei.isClockWise(Mt)&&(v[at]=Mt.reverse())}}const y=ei.triangulateShape(_,v),L=_;for(let at=0,C=v.length;at<C;at++){const Mt=v[at];_=_.concat(Mt)}function F(at,C,Mt){return C||console.error("THREE.ExtrudeGeometry: vec does not exist"),at.clone().addScaledVector(C,Mt)}const B=_.length,U=y.length;function z(at,C,Mt){let yt,mt,bt;const Xt=at.x-C.x,Dt=at.y-C.y,P=Mt.x-at.x,b=Mt.y-at.y,Y=Xt*Xt+Dt*Dt,rt=Xt*b-Dt*P;if(Math.abs(rt)>Number.EPSILON){const lt=Math.sqrt(Y),st=Math.sqrt(P*P+b*b),Bt=C.x-Dt/lt,Tt=C.y+Xt/lt,Nt=Mt.x-b/st,ce=Mt.y+P/st,ft=((Nt-Bt)*b-(ce-Tt)*P)/(Xt*b-Dt*P);yt=Bt+Xt*ft-at.x,mt=Tt+Dt*ft-at.y;const St=yt*yt+mt*mt;if(St<=2)return new ut(yt,mt);bt=Math.sqrt(St/2)}else{let lt=!1;Xt>Number.EPSILON?P>Number.EPSILON&&(lt=!0):Xt<-Number.EPSILON?P<-Number.EPSILON&&(lt=!0):Math.sign(Dt)===Math.sign(b)&&(lt=!0),lt?(yt=-Dt,mt=Xt,bt=Math.sqrt(Y)):(yt=Xt,mt=Dt,bt=Math.sqrt(Y/2))}return new ut(yt/bt,mt/bt)}const J=[];for(let at=0,C=L.length,Mt=C-1,yt=at+1;at<C;at++,Mt++,yt++)Mt===C&&(Mt=0),yt===C&&(yt=0),J[at]=z(L[at],L[Mt],L[yt]);const Q=[];let gt,qt=J.concat();for(let at=0,C=v.length;at<C;at++){const Mt=v[at];gt=[];for(let yt=0,mt=Mt.length,bt=mt-1,Xt=yt+1;yt<mt;yt++,bt++,Xt++)bt===mt&&(bt=0),Xt===mt&&(Xt=0),gt[yt]=z(Mt[yt],Mt[bt],Mt[Xt]);Q.push(gt),qt=qt.concat(gt)}for(let at=0;at<d;at++){const C=at/d,Mt=m*Math.cos(C*Math.PI/2),yt=g*Math.sin(C*Math.PI/2)+x;for(let mt=0,bt=L.length;mt<bt;mt++){const Xt=F(L[mt],J[mt],yt);ot(Xt.x,Xt.y,-Mt)}for(let mt=0,bt=v.length;mt<bt;mt++){const Xt=v[mt];gt=Q[mt];for(let Dt=0,P=Xt.length;Dt<P;Dt++){const b=F(Xt[Dt],gt[Dt],yt);ot(b.x,b.y,-Mt)}}}const te=g+x;for(let at=0;at<B;at++){const C=f?F(_[at],qt[at],te):_[at];S?(R.copy(N.normals[0]).multiplyScalar(C.x),I.copy(N.binormals[0]).multiplyScalar(C.y),T.copy(M[0]).add(R).add(I),ot(T.x,T.y,T.z)):ot(C.x,C.y,0)}for(let at=1;at<=c;at++)for(let C=0;C<B;C++){const Mt=f?F(_[C],qt[C],te):_[C];S?(R.copy(N.normals[at]).multiplyScalar(Mt.x),I.copy(N.binormals[at]).multiplyScalar(Mt.y),T.copy(M[at]).add(R).add(I),ot(T.x,T.y,T.z)):ot(Mt.x,Mt.y,u/c*at)}for(let at=d-1;at>=0;at--){const C=at/d,Mt=m*Math.cos(C*Math.PI/2),yt=g*Math.sin(C*Math.PI/2)+x;for(let mt=0,bt=L.length;mt<bt;mt++){const Xt=F(L[mt],J[mt],yt);ot(Xt.x,Xt.y,u+Mt)}for(let mt=0,bt=v.length;mt<bt;mt++){const Xt=v[mt];gt=Q[mt];for(let Dt=0,P=Xt.length;Dt<P;Dt++){const b=F(Xt[Dt],gt[Dt],yt);S?ot(b.x,b.y+M[c-1].y,M[c-1].x+Mt):ot(b.x,b.y,u+Mt)}}}Z(),ht();function Z(){const at=s.length/3;if(f){let C=0,Mt=B*C;for(let yt=0;yt<U;yt++){const mt=y[yt];Et(mt[2]+Mt,mt[1]+Mt,mt[0]+Mt)}C=c+d*2,Mt=B*C;for(let yt=0;yt<U;yt++){const mt=y[yt];Et(mt[0]+Mt,mt[1]+Mt,mt[2]+Mt)}}else{for(let C=0;C<U;C++){const Mt=y[C];Et(Mt[2],Mt[1],Mt[0])}for(let C=0;C<U;C++){const Mt=y[C];Et(Mt[0]+B*c,Mt[1]+B*c,Mt[2]+B*c)}}n.addGroup(at,s.length/3-at,0)}function ht(){const at=s.length/3;let C=0;nt(L,C),C+=L.length;for(let Mt=0,yt=v.length;Mt<yt;Mt++){const mt=v[Mt];nt(mt,C),C+=mt.length}n.addGroup(at,s.length/3-at,1)}function nt(at,C){let Mt=at.length;for(;--Mt>=0;){const yt=Mt;let mt=Mt-1;mt<0&&(mt=at.length-1);for(let bt=0,Xt=c+d*2;bt<Xt;bt++){const Dt=B*bt,P=B*(bt+1),b=C+yt+Dt,Y=C+mt+Dt,rt=C+mt+P,lt=C+yt+P;wt(b,Y,rt,lt)}}}function ot(at,C,Mt){l.push(at),l.push(C),l.push(Mt)}function Et(at,C,Mt){kt(at),kt(C),kt(Mt);const yt=s.length/3,mt=E.generateTopUV(n,s,yt-3,yt-2,yt-1);jt(mt[0]),jt(mt[1]),jt(mt[2])}function wt(at,C,Mt,yt){kt(at),kt(C),kt(yt),kt(C),kt(Mt),kt(yt);const mt=s.length/3,bt=E.generateSideWallUV(n,s,mt-6,mt-3,mt-2,mt-1);jt(bt[0]),jt(bt[1]),jt(bt[3]),jt(bt[1]),jt(bt[2]),jt(bt[3])}function kt(at){s.push(l[at*3+0]),s.push(l[at*3+1]),s.push(l[at*3+2])}function jt(at){r.push(at.x),r.push(at.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return h_(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new dl[s.type]().fromJSON(s)),new pi(n,t.options)}}const c_={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],h=t[s*3],c=t[s*3+1];return[new ut(r,o),new ut(a,l),new ut(h,c)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],h=t[n*3],c=t[n*3+1],u=t[n*3+2],f=t[s*3],m=t[s*3+1],g=t[s*3+2],x=t[r*3],d=t[r*3+1],p=t[r*3+2];return Math.abs(a-c)<Math.abs(o-h)?[new ut(o,1-l),new ut(h,1-u),new ut(f,1-g),new ut(x,1-p)]:[new ut(a,1-l),new ut(c,1-u),new ut(m,1-g),new ut(d,1-p)]}};function h_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class In extends lr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new In(t.radius,t.detail)}}class Fl extends lr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Fl(t.radius,t.detail)}}class ar extends Fe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],h=[],c=[];let u=t;const f=(e-t)/s,m=new D,g=new ut;for(let x=0;x<=s;x++){for(let d=0;d<=n;d++){const p=r+d/n*o;m.x=u*Math.cos(p),m.y=u*Math.sin(p),l.push(m.x,m.y,m.z),h.push(0,0,1),g.x=(m.x/e+1)/2,g.y=(m.y/e+1)/2,c.push(g.x,g.y)}u+=f}for(let x=0;x<s;x++){const d=x*(n+1);for(let p=0;p<n;p++){const E=p+d,M=E,S=E+n+1,N=E+n+2,I=E+1;a.push(M,S,I),a.push(S,N,I)}}this.setIndex(a),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ar(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class zl extends Fe{constructor(t=new Nn([new ut(0,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let c=0;c<t.length;c++)h(t[c]),this.addGroup(a,l,c),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new me(s,3)),this.setAttribute("normal",new me(r,3)),this.setAttribute("uv",new me(o,2));function h(c){const u=s.length/3,f=c.extractPoints(e);let m=f.shape;const g=f.holes;ei.isClockWise(m)===!1&&(m=m.reverse());for(let d=0,p=g.length;d<p;d++){const E=g[d];ei.isClockWise(E)===!0&&(g[d]=E.reverse())}const x=ei.triangulateShape(m,g);for(let d=0,p=g.length;d<p;d++){const E=g[d];m=m.concat(E)}for(let d=0,p=m.length;d<p;d++){const E=m[d];s.push(E.x,E.y,0),r.push(0,0,1),o.push(E.x,E.y)}for(let d=0,p=x.length;d<p;d++){const E=x[d],M=E[0]+u,S=E[1]+u,N=E[2]+u;n.push(M,S,N),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return u_(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new zl(n,t.curveSegments)}}function u_(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class fi extends Fe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let h=0;const c=[],u=new D,f=new D,m=[],g=[],x=[],d=[];for(let p=0;p<=n;p++){const E=[],M=p/n;let S=0;p===0&&o===0?S=.5/e:p===n&&l===Math.PI&&(S=-.5/e);for(let N=0;N<=e;N++){const I=N/e;u.x=-t*Math.cos(s+I*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(s+I*r)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),d.push(I+S,1-M),E.push(h++)}c.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){const M=c[p][E+1],S=c[p][E],N=c[p+1][E],I=c[p+1][E+1];(p!==0||o>0)&&m.push(M,S,I),(p!==n-1||l<Math.PI)&&m.push(S,N,I)}this.setIndex(m),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(x,3)),this.setAttribute("uv",new me(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class mi extends Fe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],h=[],c=new D,u=new D,f=new D;for(let m=0;m<=n;m++)for(let g=0;g<=s;g++){const x=g/s*r,d=m/n*Math.PI*2;u.x=(t+e*Math.cos(d))*Math.cos(x),u.y=(t+e*Math.cos(d))*Math.sin(x),u.z=e*Math.sin(d),a.push(u.x,u.y,u.z),c.x=t*Math.cos(x),c.y=t*Math.sin(x),f.subVectors(u,c).normalize(),l.push(f.x,f.y,f.z),h.push(g/s),h.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=s;g++){const x=(s+1)*m+g-1,d=(s+1)*(m-1)+g-1,p=(s+1)*(m-1)+g,E=(s+1)*m+g;o.push(x,d,E),o.push(d,p,E)}this.setIndex(o),this.setAttribute("position",new me(a,3)),this.setAttribute("normal",new me(l,3)),this.setAttribute("uv",new me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class f_ extends Ve{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class di extends vi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hh,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const nh={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class d_{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(c){a++,r===!1&&s.onStart!==void 0&&s.onStart(c,o,a),r=!0},this.itemEnd=function(c){o++,s.onProgress!==void 0&&s.onProgress(c,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,u){return h.push(c,u),this},this.removeHandler=function(c){const u=h.indexOf(c);return u!==-1&&h.splice(u,2),this},this.getHandler=function(c){for(let u=0,f=h.length;u<f;u+=2){const m=h[u],g=h[u+1];if(m.global&&(m.lastIndex=0),m.test(c))return g}return null}}}const p_=new d_;class Ol{constructor(t){this.manager=t!==void 0?t:p_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ol.DEFAULT_MATERIAL_NAME="__DEFAULT";const jn={};class m_ extends Error{constructor(t,e){super(t),this.response=e}}class g_ extends Ol{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=nh.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(jn[t]!==void 0){jn[t].push({onLoad:e,onProgress:n,onError:s});return}jn[t]=[],jn[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const c=jn[t],u=h.body.getReader(),f=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),m=f?parseInt(f):0,g=m!==0;let x=0;const d=new ReadableStream({start(p){E();function E(){u.read().then(({done:M,value:S})=>{if(M)p.close();else{x+=S.byteLength;const N=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:m});for(let I=0,R=c.length;I<R;I++){const T=c[I];T.onProgress&&T.onProgress(N)}p.enqueue(S),E()}},M=>{p.error(M)})}}});return new Response(d)}else throw new m_(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(l){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(c=>new DOMParser().parseFromString(c,a));case"json":return h.json();default:if(a===void 0)return h.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(f);return h.arrayBuffer().then(g=>m.decode(g))}}}).then(h=>{nh.add(t,h);const c=jn[t];delete jn[t];for(let u=0,f=c.length;u<f;u++){const m=c[u];m.onLoad&&m.onLoad(h)}}).catch(h=>{const c=jn[t];if(c===void 0)throw this.manager.itemError(t),h;delete jn[t];for(let u=0,f=c.length;u<f;u++){const m=c[u];m.onError&&m.onError(h)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Bl extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class __ extends Bl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const va=new Me,ih=new D,sh=new D;class pu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rl,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new Be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ih.setFromMatrixPosition(t.matrixWorld),e.position.copy(ih),sh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(sh),e.updateMatrixWorld(),va.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(va),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(va)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class x_ extends pu{constructor(){super(new _n(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Eo*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class v_ extends Bl{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new x_}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class M_ extends pu{constructor(){super(new Pl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rh extends Bl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new M_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class mu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=oh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=oh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function oh(){return performance.now()}class y_{constructor(){this.type="ShapePath",this.color=new Ft,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new pl,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,s){return this.currentPath.quadraticCurveTo(t,e,n,s),this}bezierCurveTo(t,e,n,s,r,o){return this.currentPath.bezierCurveTo(t,e,n,s,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(p){const E=[];for(let M=0,S=p.length;M<S;M++){const N=p[M],I=new Nn;I.curves=N.curves,E.push(I)}return E}function n(p,E){const M=E.length;let S=!1;for(let N=M-1,I=0;I<M;N=I++){let R=E[N],T=E[I],H=T.x-R.x,_=T.y-R.y;if(Math.abs(_)>Number.EPSILON){if(_<0&&(R=E[I],H=-H,T=E[N],_=-_),p.y<R.y||p.y>T.y)continue;if(p.y===R.y){if(p.x===R.x)return!0}else{const v=_*(p.x-R.x)-H*(p.y-R.y);if(v===0)return!0;if(v<0)continue;S=!S}}else{if(p.y!==R.y)continue;if(T.x<=p.x&&p.x<=R.x||R.x<=p.x&&p.x<=T.x)return!0}}return S}const s=ei.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const h=[];if(r.length===1)return a=r[0],l=new Nn,l.curves=a.curves,h.push(l),h;let c=!s(r[0].getPoints());c=t?!c:c;const u=[],f=[];let m=[],g=0,x;f[g]=void 0,m[g]=[];for(let p=0,E=r.length;p<E;p++)a=r[p],x=a.getPoints(),o=s(x),o=t?!o:o,o?(!c&&f[g]&&g++,f[g]={s:new Nn,p:x},f[g].s.curves=a.curves,c&&g++,m[g]=[]):m[g].push({h:a,p:x[0]});if(!f[0])return e(r);if(f.length>1){let p=!1,E=0;for(let M=0,S=f.length;M<S;M++)u[M]=[];for(let M=0,S=f.length;M<S;M++){const N=m[M];for(let I=0;I<N.length;I++){const R=N[I];let T=!0;for(let H=0;H<f.length;H++)n(R.p,f[H].p)&&(M!==H&&E++,T?(T=!1,u[H].push(R)):p=!0);T&&u[M].push(R)}}E>0&&p===!1&&(m=u)}let d;for(let p=0,E=f.length;p<E;p++){l=f[p].s,h.push(l),d=m[p];for(let M=0,S=d.length;M<S;M++)l.holes.push(d[M].h)}return h}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xl);class S_ extends Ol{constructor(t){super(t)}load(t,e,n,s){const r=this,o=new g_(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){const l=r.parse(JSON.parse(a));e&&e(l)},n,s)}parse(t){return new b_(t)}}class b_{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const n=[],s=E_(t,e,this.data);for(let r=0,o=s.length;r<o;r++)n.push(...s[r].toShapes());return n}}function E_(i,t,e){const n=Array.from(i),s=t/e.resolution,r=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*s,o=[];let a=0,l=0;for(let h=0;h<n.length;h++){const c=n[h];if(c===`
`)a=0,l-=r;else{const u=w_(c,s,a,l,e);a+=u.offsetX,o.push(u.path)}}return o}function w_(i,t,e,n,s){const r=s.glyphs[i]||s.glyphs["?"];if(!r){console.error('THREE.Font: character "'+i+'" does not exists in font family '+s.familyName+".");return}const o=new y_;let a,l,h,c,u,f,m,g;if(r.o){const x=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let d=0,p=x.length;d<p;)switch(x[d++]){case"m":a=x[d++]*t+e,l=x[d++]*t+n,o.moveTo(a,l);break;case"l":a=x[d++]*t+e,l=x[d++]*t+n,o.lineTo(a,l);break;case"q":h=x[d++]*t+e,c=x[d++]*t+n,u=x[d++]*t+e,f=x[d++]*t+n,o.quadraticCurveTo(u,f,h,c);break;case"b":h=x[d++]*t+e,c=x[d++]*t+n,u=x[d++]*t+e,f=x[d++]*t+n,m=x[d++]*t+e,g=x[d++]*t+n,o.bezierCurveTo(u,f,m,g,h,c);break}}return{offsetX:r.ha*t,path:o}}class T_ extends pi{constructor(t,e={}){const n=e.font;if(n===void 0)super();else{const s=n.generateShapes(t,e.size);e.depth===void 0&&e.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),e.depth=e.depth!==void 0?e.depth:e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(s,e)}this.type="TextGeometry"}}const gu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Is{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const A_=new Pl(-1,1,1,-1,0,1);class C_ extends Fe{constructor(){super(),this.setAttribute("position",new me([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new me([0,2,0,0,2,0],2))}}const R_=new C_;class kl{constructor(t){this._mesh=new Ce(R_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,A_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class _u extends Is{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ve?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=As.clone(t.uniforms),this.material=new Ve({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new kl(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class ah extends Is{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class P_ extends Is{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class L_{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new ut);this._width=n.width,this._height=n.height,e=new wn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Gn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new _u(gu),this.copyPass.material.blending=Qn,this.clock=new mu}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ah!==void 0&&(o instanceof ah?n=!0:o instanceof P_&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new ut);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class I_ extends Is{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ft}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const D_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ft(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Cs extends Is{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new ut(t.x,t.y):new ut(256,256),this.clearColor=new Ft(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new wn(r,o,{type:Gn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new wn(r,o,{type:Gn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const m=new wn(r,o,{type:Gn});m.texture.name="UnrealBloomPass.v"+u,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}const a=D_;this.highPassUniforms=As.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ve({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ut(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const c=gu;this.copyUniforms=As.clone(c.uniforms),this.blendMaterial=new Ve({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:nr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ft,this.oldClearAlpha=1,this.basic=new Le,this.fsQuad=new kl(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ut(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Cs.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Cs.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ve({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ut(.5,.5)},direction:{value:new ut(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Ve({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Cs.BlurDirectionX=new ut(1,0);Cs.BlurDirectionY=new ut(0,1);const U_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class N_ extends Is{constructor(){super();const t=U_;this.uniforms=As.clone(t.uniforms),this.material=new f_({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new kl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},xe.getTransfer(this._outputColorSpace)===Ae&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Th?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ah?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ch?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Rh?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ph?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===vl&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const He={name:"Alex Smith",headline:"Cybersecurity | SOC Analyst (Tier 1) | IT Security | Identity and Access Management",location:"Howell, MI (Remote)",email:"alexsmith308@yahoo.com",linkedin:"https://www.linkedin.com/in/alex-smith-aa963b199",linkedinLabel:"linkedin.com/in/alex-smith-aa963b199",pdf:"Alex_Smith_Resume_Security.pdf",website:"https://callmemrvirtuoso.github.io/",websiteLabel:"CallMeMrVirtuoso.github.io"},xu="IT professional with about 5 years of help desk and IT asset control experience, plus earlier office support in healthcare, seeking an entry-level SOC Analyst, IT Security, or IAM role. Handles about 30 tickets per day spanning user provisioning, Active Directory and Microsoft 365 access control, chain-of-custody for sensitive equipment, and incident troubleshooting and escalation. Background in patch management, firewall and VPN troubleshooting, compliance support, and protecting sensitive patient data. Grounded in core security principles (CIA Triad, least privilege, defense-in-depth, risk management). B.S. in Information Technology from Wayne State University.",F_=[{title:"Asset Control",org:"Data System Services",dates:"01/2023 – Present",bullets:["Handle about 30 tickets per day (roughly 600 per month) while keeping hardware and software asset records accurate and audit-ready.","Manage the secure lifecycle of corporate IT hardware, ensuring accurate tracking, handling, and disposal.","Maintain chain-of-custody for sensitive equipment while coordinating third-party vendor repairs.","Support software asset management (SAM) processes to maintain compliance and reduce audit risk."]},{title:"Help Desk Technician",org:"Data System Services",dates:"08/2021 – 01/2023",bullets:["Triaged roughly 30 tickets daily (about 600 per month) as first-line support for technical, access-related, and security-adjacent incidents, escalating issues when needed.","Provisioned user accounts, reset passwords, and configured permissions in Active Directory and Microsoft 365 to support identity and access management (IAM).","Applied and maintained Group Policy settings and supported Windows Server and Windows 10/11 systems following security best practices.","Troubleshot network connectivity issues, including firewall, VPN, TCP/IP, DNS, and DHCP problems, escalating complex issues when needed.","Supported Windows and macOS end users, troubleshooting hardware, software, and account access issues.","Documented incidents and resolutions to support trend analysis and continuous improvement."]},{title:"Office Support Specialist",org:"Visiting Physician Association",dates:"06/2013 – 07/2021",bullets:["Installed patches and software updates to mitigate vulnerabilities and protect sensitive patient data.","Supported desktop and laptop migrations with close attention to data security and system integrity."]}],vu=[["Security Concepts",["CIA Triad","Least privilege","Defense-in-depth","Risk management"]],["Identity and Access Management",["Active Directory","Group Policy","Microsoft 365 administration","User provisioning","Permissions and access control"]],["Incident Support",["Incident troubleshooting","Escalation","Documentation","Reporting","Remote support tools"]],["Vulnerability Mitigation",["Patch management","System hardening"]],["Compliance and Asset Security",["Chain-of-custody","Software asset management (SAM)","Audit readiness","Compliance support"]],["Networking",["TCP/IP","DNS","DHCP","Firewall and VPN troubleshooting"]],["Programming and Scripting",["Python","JavaScript","SQL","VBA"]],["Systems and Tools",["Windows Server","Windows 10/11","macOS end-user support","Advanced Excel"]]],jr={degree:"B.S. in Information Technology",minor:"Minor in Business Administration",school:"Wayne State University",dates:"2020 – 2025"},Mu=[{slug:"password-checker",icon:"🔐",title:"Password Strength & Breach-Pattern Checker",desc:"Estimates how quickly a password falls to real cracking techniques (wordlists, leetspeak, Season+Year, keyboard walks) and generates strong random passwords. Runs entirely in the browser, and the page's Content-Security-Policy blocks outgoing connections.",tech:["JavaScript","Content-Security-Policy","Password policy"],demo:"projects/password-checker/",code:"projects/code.html?f=password-checker/analyzer.js"},{slug:"log-analyzer",icon:"🪵",title:"Windows Security Log Analyzer",desc:"Analyzes Windows logon events (4625/4624/4740) and flags brute force, password spraying, account enumeration, lockouts and successful logons after a burst of failures, mapped to MITRE ATT&CK. Ships with a PowerShell exporter and synthetic sample data.",tech:["JavaScript","Windows Event Logs","PowerShell","MITRE ATT&CK"],demo:"projects/log-analyzer/",code:"projects/code.html?f=log-analyzer/analyzer.js"},{slug:"ad-hygiene-audit",icon:"🧹",title:"AD Account Hygiene Audit (PowerShell)",desc:"Read-only script that finds stale, never-used, non-expiring, password-not-required and disabled-but-still-grouped Active Directory accounts, with CSV output and a mock-data test.",tech:["PowerShell","Active Directory","IAM"],demo:"projects/ad-hygiene-audit/",demoLabel:"Script & example",code:"projects/code.html?f=ad-hygiene-audit/Invoke-ADHygieneAudit.ps1"},{slug:"subnet-calculator",icon:"🌐",title:"Subnet & VLAN Planner",desc:"IPv4 subnet calculator plus a VLSM planner that splits an address block into right-sized subnets per VLAN and outputs a Cisco IOS-style config to review.",tech:["JavaScript","TCP/IP","VLANs"],demo:"projects/subnet-calculator/",code:"projects/code.html?f=subnet-calculator/subnet.js"}],Ee=i=>i.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),z_=()=>`
  <ul class="contact-list">
    <li><span class="k">Email</span> <a href="mailto:${He.email}">${He.email}</a></li>
    <li><span class="k">LinkedIn</span> <a href="${He.linkedin}" target="_blank" rel="noopener">${He.linkedinLabel}</a></li>
    <li><span class="k">Website</span> <a href="${He.website}" target="_blank" rel="noopener">${He.websiteLabel}</a></li>
    <li><span class="k">Location</span> ${Ee(He.location)}</li>
    <li><span class="k">Resume</span> <a href="${He.pdf}" download>Download PDF</a></li>
  </ul>`,yu=(i="h3")=>F_.map(t=>`<article class="job">
      <${i}>${Ee(t.title)} <span class="org">· ${Ee(t.org)}</span></${i}>
      <p class="dates">${Ee(t.dates)}</p>
      <ul>${t.bullets.map(e=>`<li>${Ee(e)}</li>`).join("")}</ul>
    </article>`).join(""),O_=()=>`<div class="skill-groups">${vu.map(([i,t])=>`<div class="skill-group"><h4>${Ee(i)}</h4><ul class="chips">${t.map(e=>`<li>${Ee(e)}</li>`).join("")}</ul></div>`).join("")}</div>`,Su=()=>`<p class="edu"><strong>${Ee(jr.degree)}</strong><br>${Ee(jr.minor)}<br>${Ee(jr.school)} · ${Ee(jr.dates)}</p>`,B_=(i="h3")=>`<div class="project-cards">${Mu.map(t=>`<article class="project-card">
      <${i}>${t.icon} ${Ee(t.title)}</${i}>
      <p>${Ee(t.desc)}</p>
      <ul class="chips">${t.tech.map(e=>`<li>${Ee(e)}</li>`).join("")}</ul>
      <p class="project-links"><a class="btn btn-primary" href="${t.demo}" target="_blank" rel="noopener">${t.demoLabel?"📄 "+Ee(t.demoLabel):"▶ Live demo"}</a>
      <a class="btn btn-ghost" href="${t.code}" target="_blank" rel="noopener">&lt;/&gt; View code</a></p>
    </article>`).join("")}</div>`,k_={about:{title:"About",icon:"🛡️",html:`<p class="lead">${Ee(He.headline)}</p><p>${Ee(xu)}</p><p class="muted">📍 ${Ee(He.location)}</p>`},experience:{title:"Experience",icon:"🗄️",html:yu("h3")},education:{title:"Education",icon:"🎓",html:Su()},skills:{title:"Skills",icon:"🔐",html:O_()},projects:{title:"Projects",icon:"🧪",html:`<p>Small, working tools built around IT support and security work. Each one runs in the browser or as a read-only script, with the full source viewable.</p>${B_("h3")}<p><a href="projects/" target="_blank" rel="noopener">Browse all projects →</a></p>`},contact:{title:"Contact",icon:"📡",html:`<p>Open to SOC Analyst, IT Security, IAM, and systems roles.</p>${z_()}`}};function H_(){return`
  <header class="sr-header">
    <h1>${Ee(He.name)}</h1>
    <p class="sr-headline">${Ee(He.headline)}</p>
    <p class="sr-contact">${Ee(He.location)} · <a href="mailto:${He.email}">${He.email}</a> · <a href="${He.linkedin}" target="_blank" rel="noopener">${He.linkedinLabel}</a> · <a href="${He.website}">${He.websiteLabel}</a></p>
    <p><a class="btn btn-primary" href="${He.pdf}" download>⬇ Download PDF resume</a></p>
  </header>
  <section aria-labelledby="sr-summary"><h2 id="sr-summary">Summary</h2><p>${Ee(xu)}</p></section>
  <section aria-labelledby="sr-exp"><h2 id="sr-exp">Experience</h2>${yu("h3")}</section>
  <section aria-labelledby="sr-projects"><h2 id="sr-projects">Projects</h2>${Mu.map(i=>`<article class="job"><h3>${Ee(i.title)}</h3><p>${Ee(i.desc)}</p><p class="sr-tech"><strong>Tech:</strong> ${i.tech.map(Ee).join(", ")} · <a href="${i.demo}">${i.demoLabel?Ee(i.demoLabel):"Live demo"}</a> · <a href="${i.code}">View code</a></p></article>`).join("")}<p><a href="projects/">All projects</a></p></section>
  <section aria-labelledby="sr-skills"><h2 id="sr-skills">Skills</h2>
    <dl class="sr-skills">${vu.map(([i,t])=>`<dt>${Ee(i)}</dt><dd>${t.map(Ee).join(", ")}</dd>`).join("")}</dl>
  </section>
  <section aria-labelledby="sr-edu"><h2 id="sr-edu">Education</h2>${Su()}</section>`}const bu="alex-site-muted",G_=80,Zr=60/G_/4,V_=.15,W_=30,lh=[[45,57,60,64,67],[41,57,60,64,65],[48,55,59,60,64],[43,55,59,62,67]],ch=[0,-1,2,1,3,-1,2,-1,1,-1,3,2,-1,1,0,-1],hh={0:.5,6:.18,10:.32},X_=new Set([0,7,8]),q_=new Set([4,12]),Ks=i=>440*Math.pow(2,(i-69)/12);function Y_(){try{return localStorage.getItem(bu)==="1"}catch{return!1}}function $_(i){try{localStorage.setItem(bu,i?"1":"0")}catch{}}function K_(){let i=null,t,e,n,s,r,o,a,l,h,c=null,u=0,f=0,m=0,g=Y_(),x=!0;const d=new Set,p=()=>d.forEach(y=>y(g));function E(){const y=window.AudioContext||window.webkitAudioContext;if(!y)return!1;i=new y;const L=i.createDynamicsCompressor();L.threshold.value=-18,L.ratio.value=3,L.attack.value=.01,L.release.value=.25,t=i.createGain(),t.gain.value=0,L.connect(t).connect(i.destination),e=i.createGain(),e.gain.value=1,n=i.createGain(),n.gain.value=.8;const F=i.createBiquadFilter();F.type="lowpass",F.frequency.value=7e3,e.connect(F).connect(L),n.connect(L),s=i.createGain(),s.gain.value=.35;const B=i.createDelay(1);B.delayTime.value=Zr*3;const U=i.createGain();U.gain.value=.38;const z=i.createBiquadFilter();z.type="lowpass",z.frequency.value=2200,s.connect(B).connect(z).connect(U).connect(B),z.connect(e),r=i.createBuffer(1,i.sampleRate,i.sampleRate);const J=r.getChannelData(0);for(let gt=0;gt<J.length;gt++)J[gt]=Math.random()*2-1;h=i.createBiquadFilter(),h.type="lowpass",h.frequency.value=400,h.Q.value=2,l=i.createGain(),l.gain.value=0,o=i.createOscillator(),o.type="sawtooth",o.frequency.value=50,a=i.createOscillator(),a.type="square",a.frequency.value=25.3;const Q=i.createGain();return Q.gain.value=.5,o.connect(h),a.connect(Q).connect(h),h.connect(l).connect(n),o.start(),a.start(),!0}function M(y,L,F,B,U,z=1e-4){y.gain.setValueAtTime(1e-4,L),y.gain.exponentialRampToValueAtTime(B,L+F),y.gain.exponentialRampToValueAtTime(z,L+F+U)}function S(y,L,F){const B=i.createGain(),U=i.createBiquadFilter();U.type="lowpass",U.frequency.setValueAtTime(600,L),U.frequency.linearRampToValueAtTime(1100,L+F*.5),U.frequency.linearRampToValueAtTime(700,L+F),B.gain.setValueAtTime(1e-4,L),B.gain.exponentialRampToValueAtTime(.05,L+.9),B.gain.setValueAtTime(.05,L+F-.4),B.gain.exponentialRampToValueAtTime(1e-4,L+F+.6),U.connect(B).connect(e);for(const z of y)for(const J of[-7,7]){const Q=i.createOscillator();Q.type="sawtooth",Q.frequency.value=Ks(z),Q.detune.value=J,Q.connect(U),Q.start(L),Q.stop(L+F+.7)}}function N(y,L,F){const B=i.createOscillator();B.type="triangle",B.frequency.value=Ks(y-12);const U=i.createOscillator();U.type="sine",U.frequency.value=Ks(y-12);const z=i.createGain();M(z,L,.015,.22,F),B.connect(z),U.connect(z),z.connect(e),B.start(L),U.start(L),B.stop(L+F+.1),U.stop(L+F+.1)}function I(y,L){const F=i.createOscillator();F.type="square",F.frequency.value=Ks(y);const B=i.createBiquadFilter();B.type="lowpass",B.Q.value=4,B.frequency.setValueAtTime(3200,L),B.frequency.exponentialRampToValueAtTime(500,L+.25);const U=i.createGain();M(U,L,.005,.05,.35),F.connect(B).connect(U),U.connect(e),U.connect(s),F.start(L),F.stop(L+.45)}function R(y){const L=i.createOscillator();L.type="sine",L.frequency.setValueAtTime(130,y),L.frequency.exponentialRampToValueAtTime(42,y+.18);const F=i.createGain();M(F,y,.004,.5,.32),L.connect(F).connect(e),L.start(y),L.stop(y+.4)}function T(y,{freq:L,type:F,q:B=1,peak:U,dur:z}){const J=i.createBufferSource();J.buffer=r;const Q=i.createBiquadFilter();Q.type=F,Q.frequency.value=L,Q.Q.value=B;const gt=i.createGain();M(gt,y,.002,U,z),J.connect(Q).connect(gt).connect(e),J.start(y,Math.random()*.5,z+.05)}function H(y,L){const F=lh[m%lh.length];y===0&&S(F.slice(1),L,Zr*16),hh[y]&&N(F[0],L,hh[y]),ch[y]>=0&&I(F[1+ch[y]]+12,L),X_.has(y)&&!(y===7&&m%2===0)&&R(L),q_.has(y)&&T(L,{freq:1500,type:"bandpass",q:.8,peak:.08,dur:.16}),y%2===0&&T(L+(y%4===2?Zr*.12:0),{freq:8e3,type:"highpass",peak:y%4===2?.035:.018,dur:.05})}function _(){if(!(!i||i.state!=="running"))for(u<i.currentTime&&(u=i.currentTime+.05);u<i.currentTime+V_;)H(f,u),u+=Zr,f=(f+1)%16,f===0&&m++}function v(){if(!i)return;const y=!g&&x,L=i.currentTime;t.gain.cancelScheduledValues(L),t.gain.setTargetAtTime(y?.18:0,L,y?.6:.08),y?(i.state!=="running"&&i.resume().catch(()=>{}),c||(c=setInterval(_,W_))):(clearInterval(c),c=null,setTimeout(()=>{(g||!x)&&i.state==="running"&&i.suspend().catch(()=>{})},400))}const k={start(){if(!i){if(!E())return;f=0,u=i.currentTime+.1}v()},get started(){return!!i},get muted(){return g},setMuted(y){g=!!y,$_(g),v(),p()},toggle(){return k.setMuted(!g),g},setActive(y){x!==!!y&&(x=!!y,v())},onChange(y){d.add(y),y(g)},engine(y,L){if(!i||i.state!=="running")return;const F=i.currentTime;o.frequency.setTargetAtTime(48+y*75+(L?6:0),F,.08),a.frequency.setTargetAtTime(24.3+y*37,F,.08),h.frequency.setTargetAtTime(260+y*700,F,.1),l.gain.setTargetAtTime(y>.02?.025+y*.045:0,F,.15)},chime(y=!1){if(!i||i.state!=="running")return;const L=i.currentTime+.01;(y?[72,76,79,84]:[79,84]).forEach((B,U)=>{const z=i.createOscillator();z.type="triangle",z.frequency.value=Ks(B);const J=i.createGain();M(J,L+U*.08,.005,.12,.4),z.connect(J).connect(n),z.start(L+U*.08),z.stop(L+U*.08+.5)})},blip(){if(!i||i.state!=="running")return;const y=i.currentTime+.01,L=i.createOscillator();L.type="sine",L.frequency.setValueAtTime(520,y),L.frequency.exponentialRampToValueAtTime(880,y+.12);const F=i.createGain();M(F,y,.01,.07,.22),L.connect(F).connect(n),L.start(y),L.stop(y+.3)},thud(y=1){if(!i||i.state!=="running")return;const L=i.currentTime+.005,F=i.createOscillator();F.type="sine",F.frequency.setValueAtTime(90,L),F.frequency.exponentialRampToValueAtTime(35,L+.2);const B=i.createGain();M(B,L,.004,.18*Math.min(1,y),.25),F.connect(B).connect(n),F.start(L),F.stop(L+.3)},woof(){!i||i.state!=="running"||[0,.18].forEach(y=>{const L=i.currentTime+.01+y,F=i.createOscillator();F.type="sawtooth",F.frequency.setValueAtTime(230,L),F.frequency.exponentialRampToValueAtTime(140,L+.12);const B=i.createBiquadFilter();B.type="lowpass",B.frequency.value=900,B.Q.value=2;const U=i.createGain();M(U,L,.01,.12,.14),F.connect(B).connect(U).connect(n),F.start(L),F.stop(L+.2)})},bleat(){if(!i||i.state!=="running")return;const y=i.currentTime+.01,L=i.createOscillator();L.type="triangle",L.frequency.setValueAtTime(520,y),L.frequency.linearRampToValueAtTime(470,y+.45);const F=i.createOscillator();F.frequency.value=18;const B=i.createGain();B.gain.value=22,F.connect(B).connect(L.frequency);const U=i.createGain();M(U,y,.04,.05,.45),L.connect(U).connect(n),L.start(y),F.start(y),L.stop(y+.55),F.stop(y+.55)},debug(){return{started:!!i,state:i?i.state:"none",muted:g,active:x,bar:m,gain:t?t.gain.value:0}}};return k}function j_(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Fe;let h=0;for(let c=0;c<i.length;++c){const u=i[c];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in u.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(u.attributes[m]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in u.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;o[m]===void 0&&(o[m]=[]),o[m].push(u.morphAttributes[m])}if(t){let m;if(e)m=u.index.count;else if(u.attributes.position!==void 0)m=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,m,c),h+=m}}if(e){let c=0;const u=[];for(let f=0;f<i.length;++f){const m=i[f].index;for(let g=0;g<m.count;++g)u.push(m.getX(g)+c);c+=i[f].attributes.position.count}l.setIndex(u)}for(const c in r){const u=uh(r[c]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,u)}for(const c in o){const u=o[c][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let f=0;f<u;++f){const m=[];for(let x=0;x<o[c].length;++x)m.push(o[c][x][f]);const g=uh(m);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function uh(i){let t,e,n,s=-1,r=0;for(let h=0;h<i.length;++h){const c=i[h];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=c.itemSize),e!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=c.normalized),n!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=c.gpuType),s!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=c.count*e}const o=new t(r),a=new nn(o,e,n);let l=0;for(let h=0;h<i.length;++h){const c=i[h];if(c.isInterleavedBufferAttribute){const u=l/e;for(let f=0,m=c.count;f<m;f++)for(let g=0;g<e;g++){const x=c.getComponent(f,g);a.setComponent(f+u,g,x)}}else o.set(c.array,l);l+=c.count*e}return s!==void 0&&(a.gpuType=s),a}const q={box:new Jt(1,1,1),ico:new In(1,0),cone:new ui(1,1,6),cyl:new we(1,1,1,8),cyl6:new we(1,1,1,6)},Z_=new di({vertexColors:!0,flatShading:!0,roughness:.88}),J_=new Me,Q_=new Ps,tx=new zn,ex=new D,nx=new D;function X(i,t,e=0,n=0,s=0,r=1,o=r,a=r,l=0,h=0,c=0){const u=i.index?i.toNonIndexed():i.clone();u.deleteAttribute("uv"),u.applyMatrix4(J_.compose(ex.set(e,n,s),Q_.setFromEuler(tx.set(l,h,c)),nx.set(r,o,a)));const f=new Ft(t),m=u.attributes.position.count,g=new Float32Array(m*3);for(let x=0;x<m;x++)g[x*3]=f.r,g[x*3+1]=f.g,g[x*3+2]=f.b;return u.setAttribute("color",new nn(g,3)),u}function Ue(i,t=Z_){const e=new Ce(j_(i),t);return e.castShadow=!0,e.receiveShadow=!0,i.forEach(n=>n.dispose()),e}const fh="#c98b5a",js="#a86d43",Jr="#a7a9be",dh="#8a8ca3",Zs="#d1495b",Sn="#fffaf2",ix="#7a4b2a",sx="#00a6b5",rx="#2b2950";function ox(i,t){const e=new $t;e.position.set(i.x,0,i.z),e.rotation.y=i.rot;const n=6.4,s=4.8,r=3,o=.5,a=[X(q.box,Jr,0,o/2,0,n+.6,o,s+.6),X(q.box,fh,0,o+r/2,0,n,r,s)];for(let U=0;U<5;U++){const z=o+.3+U*.6;[-1,1].forEach(J=>{a.push(X(q.cyl6,js,0,z,J*(s/2+.05),.17,n+.5,.17,0,0,Math.PI/2)),a.push(X(q.cyl6,js,J*(n/2+.05),z,0,.17,s+.5,.17,Math.PI/2,0,0))})}const l=new Nn;l.moveTo(-n/2,0),l.lineTo(n/2,0),l.lineTo(0,1.8),l.lineTo(-n/2,0);const h=new pi(l,{depth:.2,bevelEnabled:!1});[-1,1].forEach(U=>a.push(X(h,fh,0,o+r,U*(s/2)-.1))),a.push(X(q.cyl,Sn,0,o+r+.7,s/2+.1,.42,.06,.42,Math.PI/2)),a.push(X(q.box,Sn,1.4,o+1.05,s/2+.22,1.3,2.2,.08)),a.push(X(q.box,ix,1.4,o+1,s/2+.28,1.05,2,.08)),a.push(X(q.ico,"#ffc93c",1.75,o+1,s/2+.35,.07)),a.push(X(q.box,js,1.4,.35,s/2+.9,2.4,.2,1.2)),a.push(X(q.box,Jr,1.4,.12,s/2+1.75,1.6,.24,.6)),[.35,2.45].forEach(U=>a.push(X(q.box,js,U,o+1.15,s/2+1.4,.16,2.3,.16))),a.push(X(q.box,Zs,1.4,o+2.4,s/2+.85,2.7,.14,1.5,.25,0,0));const c=[[-1.6,s/2,0],[-1.6,-s/2,Math.PI],[n/2,0,Math.PI/2],[-n/2,.4,-Math.PI/2]];c.forEach(([U,z,J])=>{const Q=Math.sin(J),gt=Math.cos(J),qt=Math.cos(J),te=-Math.sin(J),Z=(ot,Et)=>[U+qt*ot+Q*Et,z+te*ot+gt*Et];let[ht,nt]=Z(0,.24);a.push(X(q.box,Sn,ht,o+1.65,nt,1.45,1.2,.1,0,J,0)),[ht,nt]=Z(0,.31),a.push(X(q.box,Sn,ht,o+1.65,nt,.08,1,.06,0,J,0)),a.push(X(q.box,Sn,ht,o+1.65,nt,1.25,.08,.06,0,J,0)),a.push(X(q.box,Sn,ht,o+1,nt,1.6,.12,.12,0,J,0)),[-1,1].forEach(ot=>{const[Et,wt]=Z(ot*.95,.25);a.push(X(q.box,sx,Et,o+1.65,wt,.42,1.15,.08,0,J,0))})}),a.push(X(q.box,Jr,-2,o+r+1.3,-.9,.95,3.4,.95)),a.push(X(q.box,dh,-2,o+r+3.05,-.9,1.15,.2,1.15));for(let U=0;U<3;U++)for(let z=0;z<4-U;z++)a.push(X(q.cyl6,z%2?"#b07446":"#9a6841",n/2+.55,.22+U*.38,-1.4+z*.4+U*.2,.19,1.1,.19,Math.PI/2,0,0));const u=Ue(a);e.add(u);const f=s/2+.45,m=1.8,g=Math.hypot(f,m),x=Math.atan2(m,f),d=Ue([X(q.box,Zs,0,o+r+m/2+.12,f/2,n+.9,.24,g,x,0,0),X(q.box,Zs,0,o+r+m/2+.12,-f/2,n+.9,.24,g,-x,0,0),X(q.box,"#b23a4b",0,o+r+m+.2,0,n+1,.22,.32)]);e.add(d);const p=new Le({color:new Ft("#ffb347").multiplyScalar(2.1)});c.forEach(([U,z,J])=>{const Q=new Ce(new fn(1.25,1),p);Q.position.set(U+Math.sin(J)*.295,o+1.65,z+Math.cos(J)*.295),Q.rotation.y=J,e.add(Q)});const E=new Ce(new vs(.34,12),p);E.position.set(0,o+r+.7,s/2+.14),e.add(E);const M=new Ce(new Jt(.22,.3,.22),new Le({color:new Ft("#ffd27a").multiplyScalar(2.6)}));M.position.set(2.35,o+2,s/2+.36),e.add(M);const S={x:-1.9,z:s/2+3.4,w:3.8,d:2.8},N=[X(q.box,"#7a5236",S.x,.06,S.z,S.w-.3,.12,S.d-.3)];for(let U=0;U<3;U++)for(let z=0;z<4;z++){const J=S.x-1.25+z*.83,Q=S.z-.85+U*.85;U===1?(N.push(X(q.ico,"#ff8c2e",J,.3,Q,.28,.22,.28)),N.push(X(q.box,"#3fa968",J,.55,Q,.05,.14,.05))):(N.push(X(q.cone,U?"#56c271":"#7bcf6b",J,.38,Q,.22,.5,.22)),N.push(X(q.cone,"#3fa968",J+.12,.3,Q+.08,.15,.36,.15)))}["#ff5a8a","#ffc93c","#9b8fe0","#ff8a5b","#ffffff","#ff5a8a"].forEach((U,z)=>{const J=-n/2+.6+z*.5;N.push(X(q.box,"#3fa968",J,.22,s/2+.6,.05,.44,.05)),N.push(X(q.ico,U,J,.48,s/2+.6,.13))});const I=(U,z)=>{N.push(X(q.box,Sn,U,.42,z,.12,.84,.12)),N.push(X(q.cone,Sn,U,.9,z,.09,.14,.09))},R=S.x-S.w/2,T=S.x+S.w/2,H=S.z-S.d/2,_=S.z+S.d/2;for(let U=R;U<=T+.01;U+=S.w/6)I(U,H),I(U,_);for(let U=H+S.d/4;U<_-.01;U+=S.d/4)I(R,U),U<_-S.d/2&&I(T,U);[.3,.65].forEach(U=>{N.push(X(q.box,Sn,S.x,U,_,S.w,.07,.05)),N.push(X(q.box,Sn,S.x,U,H,S.w,.07,.05)),N.push(X(q.box,Sn,R,U,S.z,.05,.07,S.d)),N.push(X(q.box,Sn,T,U,H+S.d/4,.05,.07,S.d/2))});for(let U=0;U<5;U++)N.push(X(q.cyl6,U%2?Jr:dh,1.4+Math.sin(U*1.7)*.25,.04,s/2+2.6+U*1,.45,.08,.38));const v={x:3.6,z:s/2+5.2};N.push(X(q.box,js,v.x,.6,v.z,.14,1.2,.14)),N.push(X(q.box,"#00a6b5",v.x,1.32,v.z,.42,.34,.72)),N.push(X(q.cyl,"#00a6b5",v.x,1.49,v.z,.21,.72,.21,Math.PI/2,0,0)),N.push(X(q.box,"#ff5a5f",v.x+.24,1.55,v.z-.1,.04,.4,.1)),N.push(X(q.box,"#ff5a5f",v.x+.24,1.7,v.z+.02,.04,.12,.26));const k={x:4.6,z:-.4};N.push(X(q.box,"#ffc93c",k.x,.55,k.z,1.3,1.1,1.5)),N.push(X(q.box,Zs,k.x-.38,1.35,k.z,.95,.12,1.75,0,0,.75)),N.push(X(q.box,Zs,k.x+.38,1.35,k.z,.95,.12,1.75,0,0,-.75)),N.push(X(q.box,rx,k.x,.42,k.z+.76,.6,.7,.02)),N.push(X(q.cyl,"#ff5a5f",k.x+.9,.08,k.z+1.3,.25,.16,.25)),e.add(Ue(N));const y=[],L=new In(.45,0);for(let U=0;U<6;U++){const z=new Ce(L,new di({color:"#e9e4f2",flatShading:!0,transparent:!0,opacity:0,depthWrite:!1}));z.position.set(-2,o+r+3.3,-.9),e.add(z),y.push(z)}let F=y.length;e.updateMatrixWorld();const B=(U,z)=>e.localToWorld(new D(U,0,z));return[[-2.2,0,2.7],[0,0,2.7],[2.2,0,2.7],[n/2+.55,-1,.9]].forEach(([U,z,J])=>{const Q=B(U,z);t(Q.x,Q.z,J)}),[[S.x-.95,S.z,1.5],[S.x+.95,S.z,1.5],[v.x,v.z,.45],[k.x,k.z,1]].forEach(([U,z,J])=>{const Q=B(U,z);t(Q.x,Q.z,J)}),{group:e,dogHome:B(3.2,s/2+3.2),localToWorld:U=>e.localToWorld(U),setSmoke(U){F=U,y.forEach((z,J)=>z.visible=J<U)},update(U){for(let z=0;z<F;z++){const J=(U*.22+z/F)%1,Q=y[z];Q.position.set(-2+J*1.6+Math.sin(U+z)*.15,o+r+3.3+J*4.2,-.9-J*.6),Q.scale.setScalar(.5+J*1.4),Q.rotation.set(z,U*.3+z,0),Q.material.opacity=Math.min(1,J*6)*(1-J)*.6}}}}const as="#f6f2ea",Qr="#3b3340",to="#d9a066",mo="#f6e3c6",tn="#1d1b3a",ls="#b5774a",ph="#ffffff",mh="#c9cde0",Hl="#ff9a3c";function ax(i){const t=new $t;t.add(Ue([X(q.ico,as,0,1,0,.78,.66,.95),X(q.ico,as,0,1.38,.2,.45,.4,.45),X(q.ico,as,.25,1.3,-.35,.42,.38,.42),X(q.ico,as,-.28,1.25,-.1,.4,.36,.4),X(q.ico,as,0,1.05,-.88,.25),...[[.3,.42],[-.3,.42],[.3,-.45],[-.3,-.45]].map(([n,s])=>X(q.box,Qr,n,.3,s,.17,.62,.17))]));const e=new $t;return e.position.set(0,1.15,.72),e.add(Ue([X(q.box,Qr,0,.05,.28,.42,.5,.5),X(q.ico,as,0,.34,.2,.26,.2,.26),X(q.box,Qr,.3,.16,.2,.26,.08,.14,0,0,-.3),X(q.box,Qr,-.3,.16,.2,.26,.08,.14,0,0,.3),X(q.box,"#ffffff",.12,.13,.535,.1,.1,.02),X(q.box,"#ffffff",-.12,.13,.535,.1,.1,.02),X(q.box,tn,.12,.12,.545,.05,.06,.02),X(q.box,tn,-.12,.12,.545,.05,.06,.02)])),t.add(e),t.scale.setScalar(i),{root:t,head:e}}function lx(){const i=new $t;i.add(Ue([X(q.box,to,0,.62,0,.5,.42,.95),X(q.box,mo,0,.47,.05,.4,.14,.7),...[[.17,.32],[-.17,.32],[.17,-.32],[-.17,-.32]].flatMap(([n,s])=>[X(q.box,to,n,.25,s,.14,.44,.14),X(q.box,mo,n,.05,s+.02,.15,.1,.18)]),X(q.box,"#ff5a5f",0,.84,.43,.46,.1,.14),X(q.ico,"#ffc93c",0,.76,.52,.06)]));const t=new $t;t.position.set(0,.95,.5),t.add(Ue([X(q.box,to,0,.08,.12,.44,.4,.42),X(q.box,mo,0,-.03,.42,.24,.2,.26),X(q.box,tn,0,.05,.56,.1,.08,.05),X(q.box,"#8a5a35",.22,.2,.05,.1,.3,.17,0,0,-.35),X(q.box,"#8a5a35",-.22,.2,.05,.1,.3,.17,0,0,.35),X(q.box,tn,.11,.16,.335,.07,.08,.02),X(q.box,tn,-.11,.16,.335,.07,.08,.02),X(q.box,"#ff8fa3",0,-.15,.48,.1,.03,.12)])),i.add(t);const e=new $t;return e.position.set(0,.76,-.46),e.add(Ue([X(q.box,to,0,.17,-.06,.09,.38,.09,-.5,0,0)])),i.add(e),i.scale.setScalar(1.3),{root:i,head:t,tail:e}}function cx(i){const t=new $t,e=[X(q.box,ls,0,1.45,0,.62,.62,1.45),X(q.box,mo,0,1.2,.05,.5,.16,1.1),X(q.box,"#ffffff",0,1.62,-.76,.18,.26,.08,.4,0,0),X(q.box,ls,0,1.95,.62,.28,.85,.3,.45,0,0),...[[.2,.52],[-.2,.52],[.2,-.55],[-.2,-.55]].flatMap(([r,o])=>[X(q.box,ls,r,.62,o,.13,1.25,.13),X(q.box,tn,r,.05,o,.14,.1,.15)])];[[.25,1.6,.2],[-.2,1.65,-.3],[.18,1.55,-.45],[-.22,1.5,.35]].forEach(([r,o,a])=>e.push(X(q.box,"#fff4e6",Math.sign(r)*.315,o,a,.02,.09,.09))),t.add(Ue(e));const n=new $t;n.position.set(0,2.3,.82);const s=[X(q.box,ls,0,.05,.2,.32,.32,.55),X(q.box,tn,0,.02,.48,.12,.1,.05),X(q.box,ls,.22,.22,0,.08,.32,.18,0,0,-.7),X(q.box,ls,-.22,.22,0,.08,.32,.18,0,0,.7),X(q.box,tn,.165,.12,.28,.02,.07,.07),X(q.box,tn,-.165,.12,.28,.02,.07,.07)];return i&&[-1,1].forEach(r=>{s.push(X(q.cyl6,"#e8d8b8",r*.17,.5,.02,.04,.6,.04,0,0,-r*.35)),s.push(X(q.cyl6,"#e8d8b8",r*.3,.62,.12,.03,.3,.03,.6,0,-r*.2)),s.push(X(q.cyl6,"#e8d8b8",r*.3,.84,-.02,.03,.28,.03,-.3,0,-r*.6))}),n.add(Ue(s)),t.add(n),t.scale.setScalar(i?1.05:.95),{root:t,head:n}}function hx(){const i=new $t;i.add(Ue([X(q.ico,ph,0,0,0,.28,.24,.62),X(q.ico,ph,0,.12,.5,.2),X(q.cone,Hl,0,.1,.76,.06,.22,.06,Math.PI/2),X(q.box,mh,0,.02,-.62,.3,.04,.28),X(q.box,tn,.13,.17,.6,.02,.05,.05),X(q.box,tn,-.13,.17,.6,.02,.05,.05)]));const t=[-1,1].map(e=>{const n=new $t;return n.position.set(e*.15,.08,.02),n.add(Ue([X(q.box,mh,e*.55,0,0,1.1,.04,.4),X(q.box,tn,e*1.12,0,-.03,.25,.045,.32)])),i.add(n),n});return i.scale.setScalar(1.25),{root:i,wings:t}}function eo(i,t){const e=new $t;return e.add(Ue([X(q.ico,i,0,.2,0,.4,.3,.55),X(q.ico,i,0,.55,.32,.22),X(q.box,Hl,0,.5,.56,.18,.06,.2),X(q.cone,i,0,.34,-.5,.15,.3,.15,-1),X(q.box,tn,.15,.6,.42,.03,.06,.06),X(q.box,tn,-.15,.6,.42,.03,.06,.06)])),e.scale.setScalar(t),{root:e}}function ux(){const i=new $t;return i.add(Ue([X(q.ico,Hl,0,0,0,.15,.22,.45),X(q.cone,"#ff6b3c",0,0,-.5,.2,.3,.07,Math.PI/2),X(q.box,tn,.1,.06,.25,.02,.05,.05),X(q.box,tn,-.1,.06,.25,.02,.05,.05)])),i.scale.setScalar(1.2),{root:i}}const no=Math.PI*2,go=(i,t)=>Math.atan2(Math.sin(t-i),Math.cos(t-i));function cs(i,t,e,n,s,r=6){const o=t-i.x,a=e-i.z,l=Math.hypot(o,a);if(l<.05)return l;i.heading+=go(i.heading,Math.atan2(o,a))*Math.min(1,s*r);const h=Math.min(l,n*s);return i.x+=Math.sin(i.heading)*h,i.z+=Math.cos(i.heading)*h,l-h}function fx(i){const{scene:t,colliders:e,islandRadius:n,rand:s,sound:r}=i,o=n-5,a=(T,H)=>{for(const v of e){const k=T.x-v.x,y=T.z-v.z,L=Math.hypot(k,y),F=v.r+H;L<F&&L>1e-4&&(T.x=v.x+k/L*F,T.z=v.z+y/L*F)}const _=Math.hypot(T.x,T.z);_>o&&(T.x*=o/_,T.z*=o/_)},l=(T,H,_)=>{const v=s()*no,k=Math.sqrt(s())*_;return[T+Math.cos(v)*k,H+Math.sin(v)*k]},c={...lx(),x:i.dogHome.x,z:i.dogHome.z,heading:0,mode:"home",timer:2,cooldown:0,tx:i.dogHome.x,tz:i.dogHome.z,gait:0};t.add(c.root);const u=[];for(let T=0;T<5;T++){const H=ax(.85+s()*.25),[_,v]=l(i.meadow.x,i.meadow.z,5),k={...H,kind:"sheep",x:_,z:v,heading:s()*no,mode:"graze",timer:s()*4,tx:_,tz:v,flee:0,hop:0,gait:s()*10};t.add(k.root),u.push(k)}const f=[!0,!1].map((T,H)=>{const _=cx(T),[v,k]=l(i.forest.x,i.forest.z,3),y={..._,kind:"deer",x:v,z:k,heading:s()*no,mode:"graze",timer:1+H*2,tx:v,tz:k,flee:0,gait:0,hop:0};return t.add(y.root),y}),m=[0,1,2,3].map(T=>{const _={...hx(),kind:"gull",radius:7+T*1.6,height:i.lighthouse.top+3+T%2*2.2,speed:(.32+T*.05)*(T%2?-1:1),phase:T*1.7};return t.add(_.root),_}),g=[eo("#fffaf0",1.6),eo("#ffd23f",.9),eo("#ffd23f",.9),eo("#ffd23f",.85)].map((T,H)=>{const _={...T,kind:"duck",lag:H*.32};return t.add(_.root),_}),x={...ux(),kind:"fish",t:-2,x:0,z:0,dir:0,on:!0};x.root.visible=!1,t.add(x.root);const d=new Le({color:"#ffffff",transparent:!0,opacity:0,depthWrite:!1}),p=new Ce(new ar(.25,.42,16),d);p.rotation.x=-Math.PI/2,t.add(p);let E=0,M=null;function S(T){M=T}let N="high";function I(T){N=T;const H=T==="low";u.forEach((_,v)=>_.root.visible=!H||v<3),f[1].root.visible=!H,m.forEach((_,v)=>_.root.visible=!H||v<2),g.forEach((_,v)=>_.root.visible=!H||v<2),x.on=!H,H&&(x.root.visible=!1,d.opacity=0)}function R(T,H,_){E-=H;const v=Math.abs(_.speed)>3;{const y=c,L=Math.hypot(_.x-y.x,_.z-y.z),F=Math.hypot(y.x-i.dogHome.x,y.z-i.dogHome.z);y.cooldown-=H,y.timer-=H;let B=0;if(y.mode==="home")L<9&&y.cooldown<=0&&_.y<.5?(y.mode="follow",y.timer=7,r.woof()):M&&Math.hypot(M.x-i.dogHome.x,M.z-i.dogHome.z)<20?(y.tx=M.x-1,y.tz=M.z+.9,y.timer=1):y.timer<=0&&([y.tx,y.tz]=l(i.dogHome.x,i.dogHome.z,3.5),y.timer=2.5+s()*3),Math.hypot(y.tx-y.x,y.tz-y.z)>.3?(B=M?4:2.2,cs(y,y.tx,y.tz,B,H)):M&&(y.heading+=go(y.heading,Math.atan2(M.x-y.x,M.z-y.z))*Math.min(1,H*4));else if(y.mode==="follow"){const z=Math.sin(_.heading),J=Math.cos(_.heading),Q=_.x-z*3.4+J*1.8,gt=_.z-J*3.4-z*1.8,qt=Math.hypot(Q-y.x,gt-y.z);B=Math.min(12,qt*3),qt>.4?cs(y,Q,gt,B,H,8):(y.heading+=go(y.heading,_.heading)*Math.min(1,H*4),B=0),(y.timer<=0||F>26)&&(y.mode="return",y.cooldown=12)}else B=6,cs(y,i.dogHome.x,i.dogHome.z,B,H)<.5&&(y.mode="home",y.timer=1);a(y,.7),y.gait+=H*(4+B*1.6);const U=B>.3;y.root.position.set(y.x,U?Math.abs(Math.sin(y.gait))*Math.min(.25,B*.03):0,y.z),y.root.rotation.set(U?Math.sin(y.gait*2)*.04:0,y.heading,0),y.tail.rotation.z=Math.sin(T*(y.mode==="follow"?22:9))*.6,y.head.rotation.x=U?0:M&&y.mode==="home"?.55+Math.sin(T*6)*.1:Math.sin(T*1.3)*.12-.05,y.head.rotation.y=U?0:Math.sin(T*.7)*.35}const k=(y,L,F,B,U,z)=>{if(!y.root.visible)return;const J=y.x-_.x,Q=y.z-_.z,gt=Math.hypot(J,Q);y.timer-=H;let qt=0;gt<U&&(v||gt<U*.5)&&_.y<1.5&&(y.mode!=="flee"&&(y.hop=0,y.kind==="sheep"&&E<=0&&(r.bleat(),E=3)),y.mode="flee",y.flee=y.kind==="deer"?2.2:1.4,y.tx=y.x+J/(gt||1)*8,y.tz=y.z+Q/(gt||1)*8);const te=M&&y.kind==="sheep"&&y.mode!=="flee"?Math.hypot(M.x-y.x,M.z-y.z):99;if(te<20){const ht=u.indexOf(y),nt=ht*1.26+.4,ot=M.x+Math.cos(nt)*1.3,Et=M.z+Math.sin(nt)*1.3;Math.hypot(ot-y.x,Et-y.z)>.25?(y.mode="walk",qt=2.4,cs(y,ot,Et,qt,H,5)):(y.mode="graze",y.timer=2,y.heading+=go(y.heading,Math.atan2(M.x-y.x,M.z-y.z))*Math.min(1,H*4)),y.eating=!0}else y.mode==="flee"?(y.flee-=H,qt=B,cs(y,y.tx,y.tz,qt,H,10),y.flee<=0&&(y.mode="walk",[y.tx,y.tz]=l(L.x,L.z,F))):y.mode==="walk"?(qt=1.3,cs(y,y.tx,y.tz,qt,H,3)<.2&&(y.mode="graze",y.timer=3+s()*5)):y.timer<=0&&(y.mode="walk",[y.tx,y.tz]=l(L.x,L.z,F));y.eating&&te>=20&&(y.eating=!1,y.mode="walk",[y.tx,y.tz]=l(L.x,L.z,F)),a(y,z),y.gait+=H*(2+qt*2.2);const Z=y.mode==="flee"?Math.abs(Math.sin(y.gait))*(y.kind==="deer"?.9:.45):qt?Math.abs(Math.sin(y.gait))*.06:0;y.root.position.set(y.x,Z,y.z),y.root.rotation.set(y.mode==="flee"?-Math.cos(y.gait)*.15:0,y.heading,qt?Math.sin(y.gait)*.05:0),y.head.rotation.x=y.mode==="graze"?.75+Math.sin(T*3+y.x)*.08:y.mode==="flee"?-.1:.15};if(u.forEach(y=>k(y,i.meadow,6,6.5,7,.9)),f.forEach(y=>k(y,i.forest,4,10,11,1)),m.forEach(y=>{if(!y.root.visible)return;const L=T*y.speed+y.phase,F=y.radius+Math.sin(T*.4+y.phase)*1.5,B=i.lighthouse.x+Math.cos(L)*F,U=i.lighthouse.z+Math.sin(L)*F,z=Math.sign(y.speed);y.root.position.set(B,y.height+Math.sin(T*.9+y.phase)*.6,U),y.root.rotation.set(0,Math.atan2(-Math.sin(L)*z,Math.cos(L)*z),z*.35,"YXZ");const Q=Math.sin(T*.6+y.phase)>-.2?Math.sin(T*9+y.phase)*.55:.08;y.wings[0].rotation.z=-Q,y.wings[1].rotation.z=Q}),g.forEach(y=>{if(!y.root.visible)return;const L=T*.25-y.lag,F=i.pond.x+Math.cos(L)*3.2,B=i.pond.z+Math.sin(L)*2.2;y.root.position.set(F,-1.2+i.waveY(F,B,T)*.22-.05,B),y.root.rotation.set(Math.sin(T*2+y.lag)*.06,Math.atan2(-Math.sin(L)*3.2,Math.cos(L)*2.2),Math.sin(T*1.6+y.lag)*.08)}),x.on){x.t+=H;const y=.9;if(x.t>3.5+x.x%1*3){const[F,B]=l(i.pond.x,i.pond.z,4);Object.assign(x,{t:0,x:F,z:B,dir:s()*no})}if(x.t>=0&&x.t<=y){const F=x.t/y,B=Math.sin(x.dir)*(F-.5)*2.4,U=Math.cos(x.dir)*(F-.5)*2.4;x.root.visible=!0,x.root.position.set(x.x+B,-1.35+Math.sin(F*Math.PI)*1.9,x.z+U),x.root.rotation.set(-Math.cos(F*Math.PI)*1,x.dir,0,"YXZ")}else x.root.visible=!1;const L=x.t<.5?x.t/.5:x.t>y&&x.t<y+.5?(x.t-y)/.5:-1;if(L>=0){const F=x.t<.5?-.5:.5;p.position.set(x.x+Math.sin(x.dir)*F*2.4,-1.05,x.z+Math.cos(x.dir)*F*2.4),p.scale.setScalar(1+L*2.5),d.opacity=(1-L)*.7}else d.opacity=0}}return{update:R,setQuality:I,setFeed:S,debug:()=>({feed:M,level:N,dog:{mode:c.mode,x:c.x,z:c.z,cooldown:c.cooldown},sheep:u.map(T=>({mode:T.mode,x:T.x,z:T.z,visible:T.root.visible})),deer:f.map(T=>({mode:T.mode,x:T.x,z:T.z,visible:T.root.visible})),gulls:m.filter(T=>T.root.visible).length,ducks:g.filter(T=>T.root.visible).length,fish:x.on})}}const hs="#f6d3b8",us="#6b3f22",gh="#57321a",io="#7d1f2e",_h="#fff6ee",Ma="#c99a62",xh="#1d1b3a",vh="#ffd166",ya="#3fb6a8",Mh="#c48a4a";function dx(){const i=new $t,t=new we(.27,.5,.78,8),e=[X(t,io,0,.98,0),X(q.box,io,0,1.5,0,.5,.38,.28),X(q.box,io,.16,1.73,0,.06,.1,.2),X(q.box,io,-.16,1.73,0,.06,.1,.2),X(q.box,hs,0,1.73,0,.26,.1,.2),X(q.cyl6,hs,0,1.84,0,.08,.16,.08),X(new mi(.11,.012,4,12),vh,0,1.75,.07,1,1,1,Math.PI/2-.35),X(q.ico,vh,0,1.66,.155,.03),X(q.box,"#a33447",0,1.3,0,.52,.06,.3)];for(let h=0;h<22;h++){const c=h*2.39996,f=.64+h*.618%1*.66,m=.5-(f-.59)/.78*.23+.005;e.push(X(q.ico,_h,Math.sin(c)*m,f,Math.cos(c)*m,.025))}[[-.14,1.55],[.12,1.42],[0,1.6],[-.06,1.38],[.18,1.6]].forEach(([h,c])=>e.push(X(q.ico,_h,h,c,.145,.022))),i.add(Ue(e));const n=[-1,1].map(h=>{const c=new $t;return c.position.set(h*.11,.7,0),c.add(Ue([X(q.box,hs,0,-.33,0,.11,.62,.11),X(q.box,Ma,0,-.67,.04,.13,.05,.24),X(q.box,Ma,0,-.62,.07,.135,.04,.04),X(q.box,Ma,0,-.57,-.03,.135,.03,.12,.6)])),i.add(c),c}),s=[-1,1].map(h=>{const c=new $t;return c.position.set(h*.31,1.66,0),c.add(Ue([X(q.box,hs,h*.02,-.3,0,.1,.58,.1,0,0,h*.08),X(q.ico,hs,h*.04,-.62,0,.07)])),i.add(c),c}),r=new $t;r.position.set(.04,-.66,.02),r.add(Ue([X(q.cyl,ya,0,-.18,0,.14,.26,.14),X(q.box,ya,0,0,-.02,.04,.04,.26),X(q.cyl6,ya,0,-.08,.24,.025,.4,.025,1),X(q.cyl6,"#2a9488",0,.06,.4,.05,.06,.05,1)])),s[1].add(r);const o=new $t;o.position.set(-.04,-.68,.06),o.add(Ue([X(q.cyl,Mh,0,-.1,0,.17,.15,.14),X(q.cyl,"#ffd23f",0,-.02,0,.14,.03,.11),X(new mi(.15,.015,4,10,Math.PI),Mh,0,-.04,0)])),s[0].add(o);const a=new $t;a.position.set(0,1.92,0),a.add(Ue([X(q.ico,hs,0,.15,0,.22,.24,.21),X(q.box,xh,.075,.17,.195,.04,.05,.02),X(q.box,xh,-.075,.17,.195,.04,.05,.02),X(q.box,"#ff9eaa",.12,.08,.17,.05,.03,.02),X(q.box,"#ff9eaa",-.12,.08,.17,.05,.03,.02),X(q.box,"#b23a48",0,.045,.205,.06,.018,.02),X(q.box,"#b23a48",.042,.055,.2,.035,.018,.02,0,0,.5),X(q.box,"#b23a48",-.042,.055,.2,.035,.018,.02,0,0,-.5),X(q.ico,us,0,.22,-.03,.235,.22,.23),X(q.box,us,0,.3,.12,.4,.1,.12,-.3),X(q.box,us,.2,.12,-.02,.07,.28,.3),X(q.box,us,-.2,.12,-.02,.07,.28,.3),X(q.ico,"#ff5a5f",0,.26,-.24,.05),X(q.box,"#111122",.075,.42,.06,.12,.04,.09,-.35),X(q.box,"#111122",-.075,.42,.06,.12,.04,.09,-.35),X(q.box,"#111122",0,.42,.08,.05,.02,.02),X(q.box,"#111122",.2,.33,-.02,.015,.02,.2,-.4),X(q.box,"#111122",-.2,.33,-.02,.015,.02,.2,-.4)]));const l=new $t;return l.position.set(0,.26,-.24),l.add(Ue([X(q.ico,us,0,-.1,-.04,.09,.14,.08),X(q.ico,gh,0,-.3,-.06,.08,.14,.07),X(q.ico,us,0,-.5,-.05,.065,.13,.06),X(q.cone,gh,0,-.66,-.04,.05,.14,.05,Math.PI)])),a.add(l),i.add(a),i.scale.setScalar(1.05),{root:i,legs:n,arms:s,head:a,tail:l,can:r}}function px(i,t){const e=new $t;e.position.set(t.x,0,t.z),i.add(e),e.add(Ue([X(q.box,"#7a4b2a",0,.12,0,2.6,.24,1.1),X(q.box,"#5b3a22",0,.25,0,2.4,.04,.9)]));const n=["#ff5a5f","#ffd23f","#ff8fd1","#9b8cff","#ffffff","#ff9a3c"],s=[];for(let r=0;r<6;r++){const o=new $t;o.position.set(-1+r*.4,.26,r%2*.32-.16),o.add(Ue([X(q.cyl6,"#3fa968",0,.3,0,.03,.6,.03),X(q.box,"#56c271",.08,.22,0,.14,.02,.07,0,0,.4),...[0,1,2,3,4].map(a=>X(q.ico,n[r],Math.sin(a*1.257)*.09,.62,Math.cos(a*1.257)*.09,.07,.04,.07)),X(q.ico,"#ffc93c",0,.64,0,.05)])),o.rotation.y=r,e.add(o),s.push({f:o,perk:.15,droopAxis:r%2?1:-1})}return s}const Sa=(i,t)=>Math.atan2(Math.sin(t-i),Math.cos(t-i));function mx(i){const{scene:t,house:e,animals:n}=i,s=(v,k)=>e.localToWorld(new D(v,0,k)),r=v=>e.group.worldToLocal(new D(v.x,0,v.z)),o=px(e.group,{x:-5.7,z:5.9});{const v=s(-5.7,5.9);i.addCollider(v.x,v.z,1.3)}const a=dx();t.add(a.root);const l=r(i.feedSpot),h=[{p:[1.4,3.7],act:"idle",dur:3,face:[1.4,12]},{p:[.8,9]},{p:[l.x+.9,l.z+.6],act:"feed",dur:8,face:[l.x-1,l.z-.5]},{p:[-5.7,7.5],act:"water",target:"bed",dur:6,face:[-5.7,5.9]},{p:[-1.9,7.9],act:"water",target:"garden",dur:5,face:[-1.9,5.8]},{p:[.8,9]}].map(v=>({...v,w:s(...v.p),f:v.face?s(...v.face):null})),c={x:h[0].w.x,z:h[0].w.z,heading:0,i:0,mode:"walk",timer:0,gait:0,yield:0,act:null},u={x:c.x,z:c.z,r:.55};i.colliders.push(u);const f=18,m=12,g=new ds(new Jt(.09,.05,.09),new di({color:"#ffd23f",roughness:.8}),f),x=new Le({color:new Ft("#7fd8ff").multiplyScalar(1.15),transparent:!0,opacity:.85}),d=new ds(new In(.045,0),x,m);g.count=0,d.count=0,t.add(g,d);const p=Array.from({length:f},()=>({t:-1,sx:0,sz:0,ex:0,ez:0}));let E=f,M=m,S=0;const N=new Ie,I=new D;function R(v){E=v==="low"?10:f,M=v==="low"?6:m}function T(v){c.mode="act",c.act=v.act,c.timer=v.dur,c.target=v.target,c.throwT=0,v.act==="feed"&&(p.forEach(k=>k.t=-1),c.thrown=0)}function H(){c.i=(c.i+1)%h.length,c.mode="walk",c.act=null}function _(v,k,y){const L=h[c.i],F=Math.hypot(y.x-c.x,y.z-c.z),B=F<4.8&&y.y<1.5;let U=0;if(B){if(c.yield=1.2,c.heading+=Sa(c.heading,Math.atan2(y.x-c.x,y.z-c.z))*Math.min(1,k*6),F<3.4){const nt=Math.sin(y.heading);let Et=Math.cos(y.heading),wt=-nt;(c.x-y.x)*Et+(c.z-y.z)*wt<0&&(Et=-Et,wt=-wt),c.x+=Et*1.6*k,c.z+=wt*1.6*k,U=1.6}}else if(c.yield>0)c.yield-=k;else if(c.mode==="walk"){const nt=L.w.x-c.x,ot=L.w.z-c.z,Et=Math.hypot(nt,ot);if(Et<.12)L.act?T(L):H();else{U=1.5,c.heading+=Sa(c.heading,Math.atan2(nt,ot))*Math.min(1,k*7);const wt=Math.min(Et,U*k);c.x+=Math.sin(c.heading)*wt,c.z+=Math.cos(c.heading)*wt}}else{if(L.f&&(c.heading+=Sa(c.heading,Math.atan2(L.f.x-c.x,L.f.z-c.z))*Math.min(1,k*5)),c.timer-=k,c.act==="feed"&&(c.throwT-=k,c.throwT<=0&&c.thrown<4)){c.throwT=.55,c.thrown++,a.arms[0].updateWorldMatrix(!0,!1);const nt=a.arms[0].localToWorld(I.set(0,-.6,.1)),ot=Math.ceil(E/4);for(let Et=0;Et<ot;Et++){const wt=p[(c.thrown-1)*ot+Et];if(!wt)break;const kt=c.heading+(Math.random()-.5)*1.4,jt=1.6+Math.random()*1.6;Object.assign(wt,{t:0,sx:nt.x,sy:nt.y,sz:nt.z,ex:c.x+Math.sin(kt)*jt,ez:c.z+Math.cos(kt)*jt})}S=16,n.setFeed({x:c.x+Math.sin(c.heading)*2.4,z:c.z+Math.cos(c.heading)*2.4})}c.act==="water"&&(c.target==="bed"?o:[]).forEach(ot=>ot.perk=Math.min(1,ot.perk+k*.45)),c.timer<=0&&H()}for(const nt of i.colliders){if(nt===u)continue;const ot=c.x-nt.x,Et=c.z-nt.z,wt=Math.hypot(ot,Et),kt=nt.r+.35;wt<kt&&wt>1e-4&&nt.r<3&&(c.x=nt.x+ot/wt*kt,c.z=nt.z+Et/wt*kt)}u.x=c.x,u.z=c.z;const z=a;c.gait+=k*U*5.5;const J=U>.1?Math.sin(c.gait)*.55:0;z.root.position.set(c.x,U>.1?Math.abs(Math.cos(c.gait))*.05:0,c.z),z.root.rotation.set(0,c.heading,0),z.legs[0].rotation.x=J,z.legs[1].rotation.x=-J,z.tail.rotation.x=.15+(U>.1?Math.abs(Math.sin(c.gait))*.2:Math.sin(v*1.5)*.05),z.tail.rotation.z=U>.1?Math.sin(c.gait)*.25:0,z.head.rotation.set(0,0,Math.sin(v*.8)*.04);let Q=-J*.8,gt=J*.8,qt=0,te=0,Z=0;c.yield>0&&U<.1?(gt=-2.6,qt=-.3+Math.sin(v*10)*.35,z.head.rotation.z=.12):c.act==="feed"&&c.mode==="act"?(Q=-.6-Math.max(0,Math.sin(c.throwT/.55*Math.PI))*.9,te=.2,z.head.rotation.x=.25):c.act==="water"&&c.mode==="act"&&(gt=-.95,Z=.75,z.head.rotation.x=.35),z.arms[0].rotation.set(Q,0,te),z.arms[1].rotation.set(gt,0,qt),z.can.rotation.x=Z?.6-gt:-gt,S-=k,S<=0&&n.setFeed(null);let ht=0;for(const nt of p){if(nt.t<0)continue;nt.t+=k;const ot=Math.min(1,nt.t/.45),Et=nt.sx+(nt.ex-nt.sx)*ot,wt=nt.sz+(nt.ez-nt.sz)*ot,kt=nt.sy*(1-ot)+Math.sin(ot*Math.PI)*.6+.03,jt=S>3?1:Math.max(0,S/3);if(jt<=0){nt.t=-1;continue}N.position.set(Et,kt,wt),N.rotation.set(nt.t*6,nt.ex,0),N.scale.setScalar(jt),N.updateMatrix(),g.setMatrixAt(ht++,N.matrix)}if(g.count=ht,g.instanceMatrix.needsUpdate=!0,c.act==="water"&&c.mode==="act"&&c.yield<=0){z.can.updateWorldMatrix(!0,!1);const nt=z.can.localToWorld(I.set(0,.06,.42)),ot=Math.sin(c.heading),Et=Math.cos(c.heading);for(let wt=0;wt<M;wt++){const kt=(v*1.6+wt/M)%1;N.position.set(nt.x+ot*kt*.7+Math.sin(wt*7.1)*.06,nt.y-kt*kt*nt.y,nt.z+Et*kt*.7+Math.cos(wt*3.3)*.06),N.scale.setScalar(1-kt*.4),N.rotation.set(0,0,0),N.updateMatrix(),d.setMatrixAt(wt,N.matrix)}d.count=M,d.instanceMatrix.needsUpdate=!0}else d.count=0;o.forEach((nt,ot)=>{nt.perk=Math.max(.15,nt.perk-k*.012);const Et=(1-nt.perk)*.9;nt.f.rotation.set(Et*nt.droopAxis*.4+Et,ot,Math.sin(v*1.4+ot)*.04),nt.f.scale.setScalar(.85+nt.perk*.25)})}return{update:_,setQuality:R,goto(v){c.i=v,c.x=h[v].w.x,c.z=h[v].w.z,c.yield=0,h[v].act?T(h[v]):c.mode="walk"},debug:()=>({x:c.x,z:c.z,heading:c.heading,stop:c.i,mode:c.mode,act:c.act,yielding:c.yield>0,perk:o.map(v=>+v.perk.toFixed(2)),grains:g.count,drops:d.count})}}const Uo=`
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
`;function gx(){return{uTop:{value:new Ft("#3c4fb4")},uMid:{value:new Ft("#9b8fe0")},uHorizon:{value:new Ft("#ffc59a")},uSunDir:{value:new D(-.35,.1,-1).normalize()},uSunColor:{value:new Ft("#ffd39a")}}}const Eu=`
  uniform vec3 uTop, uMid, uHorizon, uSunDir, uSunColor;
  vec3 skyColor(vec3 dir) {
    float h = dir.y;
    vec3 c = mix(uHorizon, uMid, smoothstep(0.0, 0.28, h));
    c = mix(c, uTop, smoothstep(0.25, 0.95, h));
    c = mix(c, uHorizon * 0.8, smoothstep(0.0, -0.35, h));
    float s = max(dot(dir, uSunDir), 0.0);
    c += uSunColor * (pow(s, 900.0) * 4.0 + pow(s, 14.0) * 0.45);
    return c;
  }
`;function _x(i){const t=new Ve({uniforms:i,side:cn,depthWrite:!1,fog:!1,vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      ${Eu}
      varying vec3 vDir;
      void main() {
        gl_FragColor = vec4(skyColor(normalize(vDir)), 1.0);
        ${Uo}
      }`}),e=new Ce(new fi(280,32,16),t);return e.frustumCulled=!1,e.renderOrder=-10,e}function xx({islandRadius:i,skyUniforms:t,size:e=420,segments:n=140}){const s=new fn(e,e,n,n);s.rotateX(-Math.PI/2);const r=As.merge([Ct.fog,{uTime:{value:0},uR:{value:i},uDeep:{value:new Ft("#1b5fae")},uShallow:{value:new Ft("#38c6d9")},uFoam:{value:new Ft("#f4fbff")}}]);Object.assign(r,t);const o=new Ve({uniforms:r,fog:!0,vertexShader:`
      uniform float uTime;
      varying vec3 vWorld;
      varying float vWave;
      #include <fog_pars_vertex>
      float wave(vec2 p, float t) {
        return sin(p.x * 0.18 + t * 1.1) * 0.5
             + sin(p.y * 0.23 - t * 0.9) * 0.35
             + sin((p.x + p.y) * 0.37 + t * 1.7) * 0.18;
      }
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        float amp = 0.22;
        float h = wave(wp.xz, uTime);
        wp.y += h * amp;
        vWave = h;
        vWorld = wp.xyz;
        vec4 mvPosition = viewMatrix * wp;
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,fragmentShader:`
      ${Eu}
      uniform float uTime, uR;
      uniform vec3 uDeep, uShallow, uFoam;
      varying vec3 vWorld;
      varying float vWave;
      #include <fog_pars_fragment>
      void main() {
        // flat, low-poly facet normal from screen-space derivatives
        vec3 n = normalize(cross(dFdx(vWorld), dFdy(vWorld)));
        if (n.y < 0.0) n = -n;
        float d = length(vWorld.xz);
        vec3 V = normalize(cameraPosition - vWorld);
        float fres = pow(1.0 - max(dot(n, V), 0.0), 3.0);
        vec3 refl = reflect(-V, n);
        refl.y = abs(refl.y);
        vec3 col = mix(uShallow, uDeep, smoothstep(uR + 5.0, uR + 45.0, d));
        col = mix(col, skyColor(refl), clamp(fres * 0.8 + 0.1, 0.0, 1.0));

        // shoreline foam: a wobbly band plus ripples travelling outward
        float edge = d - (uR + 4.4);
        float ang = atan(vWorld.z, vWorld.x);
        float wob = sin(ang * 23.0 + uTime * 0.7) * 0.5 + sin(ang * 41.0 - uTime * 1.3) * 0.3;
        float band = 1.0 - smoothstep(0.0, 1.8 + wob * 0.6, edge);
        float ripple = smoothstep(0.6, 0.92, sin(edge * 2.2 - uTime * 2.0 + wob * 2.0) * 0.5 + 0.5)
                     * (1.0 - smoothstep(0.5, 7.0, edge));
        float crest = smoothstep(0.75, 1.0, vWave) * 0.35 * (1.0 - smoothstep(25.0, 90.0, edge));
        float foam = clamp(max(band, ripple * 0.75) + crest, 0.0, 1.0);
        col = mix(col, uFoam, foam);

        // sun glints (bright enough to catch the bloom pass)
        float spec = pow(max(dot(refl, uSunDir), 0.0), 160.0);
        col += uSunColor * spec * 2.5;
        gl_FragColor = vec4(col, 1.0);
        ${Uo}
        #include <fog_fragment>
      }`}),a=new Ce(s,o);return a.position.y=-1.2,a.receiveShadow=!1,{mesh:a,update:l=>r.uTime.value=l}}function vx({max:i,radius:t,rand:e,avoid:n}){const s=new Float32Array(i*3),r=new Float32Array(i);for(let c=0;c<i;c++){let u=0,f=0;for(let m=0;m<20;m++){const g=e()*Math.PI*2,x=6+Math.sqrt(e())*(t-10);if(u=Math.cos(g)*x,f=Math.sin(g)*x,!n(u,f))break}s.set([u,.7+e()*3.8,f],c*3),r[c]=e()}const o=new Fe;o.setAttribute("position",new nn(s,3)),o.setAttribute("aPhase",new nn(r,1));const a={uTime:{value:0},uPixelRatio:{value:1},uColor:{value:new Ft("#ffdf6e")}},l=new Ve({uniforms:a,transparent:!0,depthWrite:!1,blending:nr,vertexShader:`
      uniform float uTime, uPixelRatio;
      attribute float aPhase;
      varying float vA;
      void main() {
        vec3 p = position;
        p.x += sin(uTime * 0.45 + aPhase * 6.28) * 1.3;
        p.z += cos(uTime * 0.38 + aPhase * 4.1) * 1.3;
        p.y += sin(uTime * 1.1 + aPhase * 9.0) * 0.45;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = 7.0 * uPixelRatio * (36.0 / -mv.z);
        vA = 0.25 + 0.75 * pow(0.5 + 0.5 * sin(uTime * 2.1 + aPhase * 40.0), 3.0);
      }`,fragmentShader:`
      uniform vec3 uColor;
      varying float vA;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        float a = smoothstep(0.5, 0.0, d);
        gl_FragColor = vec4(uColor * (0.8 + 2.4 * vA), a * vA);
        ${Uo}
      }`}),h=new Ig(o,l);return h.frustumCulled=!1,{points:h,setCount:c=>o.setDrawRange(0,Math.min(i,c)),setPixelRatio:c=>a.uPixelRatio.value=c,update:c=>a.uTime.value=c}}function yh(i="#fff1b8"){return new Ve({uniforms:{uColor:{value:new Ft(i)}},transparent:!0,depthWrite:!1,side:Dn,blending:nr,vertexShader:`
      varying float vT;
      varying float vFacing;
      void main() {
        vT = uv.y; // 1 at the lamp, 0 at the far end
        vec3 nView = normalize(normalMatrix * normal);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vFacing = abs(dot(nView, normalize(-mv.xyz)));
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform vec3 uColor;
      varying float vT;
      varying float vFacing;
      void main() {
        float a = pow(vT, 1.6) * 0.32 * smoothstep(0.0, 0.6, vFacing);
        gl_FragColor = vec4(uColor * 1.6, a);
        ${Uo}
      }`})}const Mx={uniforms:{tDiffuse:{value:null},uStrength:{value:.32}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uStrength;
    varying vec2 vUv;
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      float v = smoothstep(0.85, 0.3, length((vUv - 0.5) * vec2(1.0, 0.85)));
      c.rgb *= mix(1.0 - uStrength, 1.0, v);
      gl_FragColor = c;
    }`},Ge=i=>document.querySelector(i),Ro=Ge("#loader"),Gl=Ge("#hud"),bn=Ge("#panel"),ba=Ge("#simple-resume"),_l=Ge("#touch"),so=Ge("#start-btn");Ge("#sr-content").innerHTML=H_();const Js=new URLSearchParams(location.search),yx=matchMedia("(prefers-reduced-motion: reduce)").matches,Ye=K_(),ms=Ge("#mute-btn");Ye.onChange(i=>{ms.textContent=i?"🔇":"🔊",ms.setAttribute("aria-pressed",String(i)),ms.setAttribute("aria-label",i?"Unmute music and sound":"Mute music and sound"),ms.title=`${i?"Unmute":"Mute"} (M)`});function wu(){Ye.toggle(),!Ye.started&&!Ye.muted&&Ye.start()}ms.addEventListener("click",()=>{wu(),ms.blur()});document.addEventListener("visibilitychange",()=>Ye.setActive(!document.hidden&&On==="world"));const Ms=document.createElement("div");Ms.className="toast";Ms.setAttribute("role","status");Gl.appendChild(Ms);let Sh;function Ea(i,t=2200){Ms.textContent=i,Ms.classList.add("show"),clearTimeout(Sh),Sh=setTimeout(()=>Ms.classList.remove("show"),t)}let Tu=()=>{},Au=()=>{},On="loading",Vl=!1;function Ds(i,t=!0){if(i)On="simple",Ye.setActive(!1),document.body.classList.add("simple"),ba.hidden=!1,Gl.hidden=!0,_l.hidden=!0,Ro.classList.add("done"),Ro.hidden=!0,xo(),location.hash!=="#resume"&&history.replaceState(null,"","#resume"),t&&ba.focus(),window.scrollTo(0,0);else{if(document.body.classList.remove("simple"),ba.hidden=!0,location.hash&&history.replaceState(null,"",location.pathname+location.search),!Vl)return Ds(!0);vo()}}document.querySelectorAll(".js-simple").forEach(i=>i.addEventListener("click",()=>Ds(!0)));document.querySelectorAll(".js-3d").forEach(i=>i.addEventListener("click",()=>{Vl&&Ye.start(),Ds(!1)}));Ge("#skip-link").addEventListener("click",i=>{i.preventDefault(),Ds(!0)});const _o=Ge("#scene");let un;try{un=new Eg({canvas:_o,antialias:!0,powerPreference:"high-performance"})}catch(i){console.warn("WebGL unavailable, showing simple resume",i)}un?Sx():Ds(!0,!1);function Sx(){un.setPixelRatio(Math.min(window.devicePixelRatio,2)),un.setSize(innerWidth,innerHeight),un.shadowMap.enabled=!0,un.shadowMap.type=Eh,un.toneMapping=vl,un.toneMappingExposure=1.05;const i=new wg,t=gx(),e=new Ft("#f2c3a8");i.background=e,i.fog=new Il(e,95,210);const n=_x(t);i.add(n);const s=new _n(40,innerWidth/innerHeight,.5,420);i.add(new __("#fff0e0","#4f6e58",1.2));const r=new rh("#ffe2bf",2.35);r.castShadow=!0,r.shadow.mapSize.set(2048,2048),Object.assign(r.shadow.camera,{left:-42,right:42,top:42,bottom:-42,near:1,far:130}),r.shadow.bias=-4e-4,r.shadow.normalBias=.03,i.add(r,r.target);const o=new rh("#a9bcff",.45);o.position.set(-30,18,-25),i.add(o);const a=(A,O={})=>new di({color:A,flatShading:!0,roughness:.85,...O}),l=(A,O,{x:et=0,y:it=0,z:dt=0,cast:At=!0,receive:_t=!1}={})=>{const Ot=new Ce(A,O);return Ot.position.set(et,it,dt),Ot.castShadow=At,Ot.receiveShadow=_t,Ot},h=58,c=[],u=(A,O,et)=>c.push({x:A,z:O,r:et}),f=xx({islandRadius:h,skyUniforms:t});i.add(f.mesh);const m=l(new we(h+3,h+6,2,56),a("#f3d9a4"),{y:-1.25,cast:!1,receive:!0}),g=new we(h,h+2,2,56,1),x=l(g,a("#7fd47a"),{y:-1,cast:!1,receive:!0});i.add(m,x);const d={about:{x:-30,z:6,color:"#ff8a5b",label:"About"},experience:{x:30,z:-14,color:"#7b5cff",label:"Experience"},education:{x:-34,z:-20,color:"#ffc93c",label:"Education"},skills:{x:26,z:24,color:"#00c2d1",label:"Skills"},contact:{x:-2,z:38,color:"#ff5a8a",label:"Contact"},projects:{x:-22,z:30,color:"#3ddc84",label:"Projects"}},p={x:0,z:6},E=7,M=a("#f1e0b8"),S=[];for(const A of Object.values(d)){const O=A.x-p.x,et=A.z-p.z,it=Math.hypot(O,et),dt=l(new fn(4,it),M,{x:p.x+O/2,y:.02,z:p.z+et/2,cast:!1,receive:!0});dt.rotation.set(-Math.PI/2,0,0),dt.rotateOnWorldAxis(new D(0,1,0),Math.atan2(O,et)),i.add(dt),S.push([p.x,p.z,A.x,A.z])}const N=l(new vs(6,32),M,{x:p.x,y:.03,z:p.z,cast:!1,receive:!0});N.rotation.x=-Math.PI/2,i.add(N);const I=[];for(const[A,O]of Object.entries(d)){const et=l(new vs(E,40),a(new Ft(O.color).lerp(new Ft("#ffffff"),.55),{roughness:1}),{x:O.x,y:.05,z:O.z,cast:!1,receive:!0});et.rotation.x=-Math.PI/2;const it=l(new ar(E-.5,E,48),new Le({color:new Ft(O.color).multiplyScalar(1.9),transparent:!0}),{x:O.x,y:.08,z:O.z,cast:!1});it.rotation.x=-Math.PI/2,I.push(it),i.add(et,it);const dt=R(O.label,O.color);dt.position.set(O.x,9.5,O.z),i.add(dt),O.key=A}function R(A,O){const et=document.createElement("canvas");et.width=512,et.height=128;const it=et.getContext("2d");it.fillStyle="#1d1b3a",T(it,8,8,496,112,56),it.fill(),it.fillStyle=O,T(it,16,16,480,96,48),it.fill(),it.fillStyle="#fff",it.font="900 60px system-ui, sans-serif",it.textAlign="center",it.textBaseline="middle",it.fillText(A.toUpperCase(),256,68);const dt=new jc(et);dt.colorSpace=En;const At=new Ag(new ru({map:dt,depthWrite:!1,toneMapped:!1}));return At.scale.set(8,2,1),At}function T(A,O,et,it,dt,At){A.beginPath(),A.moveTo(O+At,et),A.arcTo(O+it,et,O+it,et+dt,At),A.arcTo(O+it,et+dt,O,et+dt,At),A.arcTo(O,et+dt,O,et,At),A.arcTo(O,et,O+it,et,At),A.closePath()}function H(A,O,et){const it=document.createElement("canvas");it.width=A,it.height=O,et(it.getContext("2d"),A,O);const dt=new jc(it);return dt.colorSpace=En,dt}const _=(A,O=9.5)=>{const et=A.x-p.x,it=A.z-p.z,dt=Math.hypot(et,it);return{x:A.x+et/dt*O,z:A.z+it/dt*O,rot:Math.atan2(-et,-it)}};for(const A of Object.values(d))A.anchor=_(A);const v=[];{const A=_(d.about),O=new $t;O.position.set(A.x,0,A.z),O.rotation.y=A.rot,O.add(l(new Jt(1.2,3,1.2),a("#3a3760"),{y:1.5})),O.add(l(new Jt(7,4.6,.6),a("#1d1b3a"),{y:5}));const et=H(512,320,(ie,re,Zt)=>{ie.fillStyle="#0b1022",ie.fillRect(0,0,re,Zt),ie.fillStyle="#7ee081",ie.font="bold 34px ui-monospace, monospace",["> whoami","alex_smith","> role --target","SOC | IT Sec | IAM","> status","access granted_"].forEach((oe,Te)=>ie.fillText(oe,24,50+Te*46))}),it=l(new fn(6.4,4),new Le({map:et}),{y:5,z:.31,cast:!1});O.add(it);const dt=new Nn;dt.moveTo(0,2.2),dt.quadraticCurveTo(1.2,1.9,1.9,2),dt.quadraticCurveTo(2,-.6,0,-2.2),dt.quadraticCurveTo(-2,-.6,-1.9,2),dt.quadraticCurveTo(-1.2,1.9,0,2.2);const At=l(new pi(dt,{depth:.6,bevelEnabled:!0,bevelSize:.15,bevelThickness:.15,bevelSegments:1}),a("#ff8a5b"),{x:6,y:3.2}),_t=new Nn;_t.moveTo(-.9,.1),_t.lineTo(-.3,-.6),_t.lineTo(1,.9),_t.lineTo(.7,1.1),_t.lineTo(-.3,-.05),_t.lineTo(-.6,.35);const Ot=l(new pi(_t,{depth:.3,bevelEnabled:!1}),a("#ffffff"),{z:.7});At.add(Ot),O.add(At),v.push(ie=>{At.rotation.y=Math.sin(ie*1.2)*.5,At.position.y=3.2+Math.sin(ie*2)*.25}),i.add(O),u(A.x,A.z,4.2);const Lt=O.localToWorld(new D(6,0,0));u(Lt.x,Lt.z,1.8)}{const A=_(d.experience),O=new $t;O.position.set(A.x,0,A.z),O.rotation.y=A.rot;const et=a("#2e2b4f"),it=a("#45417a"),dt=new Jt(.22,.12,.05),At=new ds(dt,new Le({color:"#ffffff"}),3*12*3),_t=new Ie;let Ot=0;for(let xt=0;xt<3;xt++){const Qt=(xt-1)*2.6;O.add(l(new Jt(2.2,5.4,1.8),et,{x:Qt,y:2.7}));for(let pt=0;pt<12;pt++){O.add(l(new Jt(1.9,.32,.06),it,{x:Qt,y:.6+pt*.4,z:.92,cast:!1}));for(let Se=0;Se<3;Se++)_t.position.set(Qt-.6+Se*.3,.6+pt*.4,.97),_t.updateMatrix(),At.setMatrixAt(Ot++,_t.matrix)}}const Lt=["#7ee081","#00e5ff","#ffc93c","#1b1a33"].map(xt=>new Ft(xt));for(let xt=0;xt<Ot;xt++)At.setColorAt(xt,Lt[xt%4]);O.add(At);let ie=0;v.push((xt,Qt)=>{if(ie+=Qt,!(ie<.08)){ie=0;for(let pt=0;pt<8;pt++)At.setColorAt(Math.random()*Ot|0,Lt[Math.random()*4|0]);At.instanceColor.needsUpdate=!0}});const re=new $t;re.position.set(-7.5,0,1.5),re.rotation.y=.5;const Zt=a("#d9643a"),oe=a("#c4502b");for(let xt=0;xt<4;xt++)for(let Qt=0;Qt<4;Qt++)re.add(l(new Jt(1.1,.55,.8),(xt+Qt)%2?Zt:oe,{x:(Qt-1.5)*1.15+xt%2*.3,y:.3+xt*.6}));const Te=[];for(let xt=0;xt<4;xt++){const Qt=l(new ui(.4,1.2,5),new Le({color:xt%2?"#ffb02e":"#ff5a1f"}),{x:(xt-1.5)*1.15,y:3,cast:!1});Te.push(Qt),re.add(Qt)}v.push(xt=>Te.forEach((Qt,pt)=>{Qt.scale.y=.8+Math.sin(xt*9+pt*2)*.35,Qt.position.y=2.9+Qt.scale.y*.4})),O.add(re),i.add(O);for(let xt=-1;xt<=1;xt++){const Qt=O.localToWorld(new D(xt*2.6,0,0));u(Qt.x,Qt.z,1.7)}for(let xt=-1.5;xt<=1.5;xt++){const Qt=re.localToWorld(new D(xt*1.15,0,0));O.updateMatrixWorld(),u(Qt.x,Qt.z,.8)}}{const A=_(d.education),O=new $t;O.position.set(A.x,0,A.z),O.rotation.y=A.rot,O.add(l(new we(2.2,2.6,1.2,8),a("#e8e2d0"),{y:.6})),["#ff5a5f","#00c2d1","#7b5cff"].forEach((_t,Ot)=>{const Lt=l(new Jt(3-Ot*.3,.6,2.2-Ot*.2),a(_t),{y:1.5+Ot*.6});Lt.rotation.y=Ot*.25,O.add(Lt)});const it=new $t;it.position.y=4.4,it.add(l(new we(1.1,1.3,.9,8),a("#1d1b3a")));const dt=l(new Jt(3.6,.2,3.6),a("#1d1b3a"),{y:.5});dt.rotation.y=Math.PI/4,it.add(dt),it.add(l(new fi(.18,6,4),a("#ffc93c"),{y:.68}));const At=l(new we(.06,.06,1.4,4),a("#ffc93c"),{x:1.4,y:-.1});it.add(At),it.add(l(new ui(.22,.5,6),a("#ffc93c"),{x:1.4,y:-.9})),O.add(it),v.push(_t=>{it.rotation.y=_t*.6,it.position.y=4.6+Math.sin(_t*1.6)*.3}),i.add(O),u(A.x,A.z,2.8)}{const A=_(d.skills),O=new $t;O.position.set(A.x,0,A.z),O.rotation.y=A.rot;const et=new $t;et.position.y=2.2,et.add(l(new Jt(3.6,3,1.4),a("#ffc93c",{metalness:.3,roughness:.5})));const it=l(new mi(1.2,.32,6,16,Math.PI),a("#b9bdd6",{metalness:.5,roughness:.4}),{y:1.5});et.add(it),et.add(l(new we(.35,.35,.2,10),a("#1d1b3a"),{y:.25,z:.72}).rotateX(Math.PI/2)),et.add(l(new Jt(.25,.8,.2),a("#1d1b3a"),{y:-.25,z:.72})),O.add(et),v.push(Lt=>{it.position.y=1.5+Math.max(0,Math.sin(Lt*1.3))*.5});const dt=new $t;dt.position.set(0,7.5,0);const At=[],_t=a("#00c2d1",{emissive:"#00c2d1",emissiveIntensity:.4});for(let Lt=0;Lt<9;Lt++){const ie=Lt/9*Math.PI*2,re=2.5+Lt%3*1.1,Zt=new D(Math.cos(ie)*re,Math.sin(Lt*1.7)*1.4,Math.sin(ie)*re);At.push(Zt),dt.add(l(new In(.42,0),Lt%3?_t:a("#ff5a8a"),{x:Zt.x,y:Zt.y,z:Zt.z}))}At.push(new D),dt.add(l(new In(.75,0),a("#7b5cff")));const Ot=[];At.forEach((Lt,ie)=>{Ot.push(Lt,At[At.length-1]),ie<8&&Ot.push(Lt,At[ie+1])}),dt.add(new pa(new Fe().setFromPoints(Ot),new po({color:"#1d1b3a"}))),O.add(dt),v.push(Lt=>{dt.rotation.y=Lt*.35}),i.add(O),u(A.x,A.z,2.6)}{const A=_(d.contact),O=new $t;O.position.set(A.x,0,A.z),O.rotation.y=A.rot;const et=new $t;et.position.x=-3,et.add(l(new Jt(.4,2.4,.4),a("#8b5a3c"),{y:1.2})),et.add(l(new Jt(1.4,1.1,2.4),a("#ff5a8a"),{y:2.9}));const it=l(new we(.7,.7,2.4,10,1,!1,0,Math.PI),a("#ff5a8a"),{y:3.45});it.rotation.set(Math.PI/2,0,Math.PI/2),et.add(it);const dt=l(new Jt(.08,1.2,.4),a("#ffc93c"),{x:.75,y:3.6,z:-.6});et.add(dt);const At=l(new Jt(1.2,.05,.8),a("#ffffff"),{y:3,z:1.3});At.rotation.x=-.3,et.add(At),v.push(Zt=>{dt.rotation.x=Math.sin(Zt*2)*.5}),O.add(et);const _t=new $t;_t.position.x=3;const Ot=a("#b9bdd6");for(let Zt=0;Zt<4;Zt++){const oe=Zt/4*Math.PI*2+Math.PI/4,Te=l(new we(.08,.14,8.2,4),Ot,{x:Math.cos(oe)*.7,y:4,z:Math.sin(oe)*.7});Te.rotation.set(Math.sin(oe)*.09,0,-Math.cos(oe)*.09),_t.add(Te)}_t.add(l(new fi(.4,8,6),a("#ff5a5f",{emissive:"#ff5a5f",emissiveIntensity:.8}),{y:8.4}));const Lt=[];for(let Zt=0;Zt<3;Zt++){const oe=l(new mi(1,.06,4,24),new Le({color:"#ff5a8a",transparent:!0}),{y:8.4,cast:!1});oe.rotation.x=Math.PI/2,Lt.push(oe),_t.add(oe)}v.push(Zt=>Lt.forEach((oe,Te)=>{const xt=(Zt*.5+Te/3)%1;oe.scale.setScalar(.5+xt*4),oe.material.opacity=1-xt})),O.add(_t),i.add(O),O.updateMatrixWorld();const ie=O.localToWorld(new D(-3,0,0)),re=O.localToWorld(new D(3,0,0));u(ie.x,ie.z,1.4),u(re.x,re.z,1.2)}{const A={x:-33,z:27,rot:.35};d.projects.anchor=A;const O=new $t;O.position.set(A.x,0,A.z),O.rotation.y=A.rot;const et=a("#2b2950"),it=a("#1d1b3a");O.add(l(new Jt(7.4,.25,2.4),a("#e8e2d0"),{y:1.6})),[[-3.4,-.9],[3.4,-.9],[-3.4,.9],[3.4,.9]].forEach(([xt,Qt])=>O.add(l(new Jt(.2,1.6,.2),et,{x:xt,y:.8,z:Qt}))),[["PASSWORD CHECK",["> analyze","Summer2024!","","pattern:"," season+year","rating: WEAK"],"#ff5a5f"],["LOG ANALYZER",["> 4625 4624 4740","","","","","ALERT: brute force"],"#ffc93c"],["AD HYGIENE",["PS> Invoke-","  ADHygieneAudit","stale accounts","pwd never expires","disabled in groups","mode: read-only"],"#00c2d1"]].forEach(([xt,Qt,pt],Se)=>{const Ke=(Se-1)*2.35,pn=new $t;pn.position.set(Ke,1.73,-.2),pn.rotation.y=-(Se-1)*.22,pn.add(l(new Jt(.25,.6,.25),it,{y:.3})),pn.add(l(new Jt(2.2,1.45,.15),it,{y:1.25}));const Fs=H(512,320,(Mn,ql,Ru)=>{Mn.fillStyle="#0b1022",Mn.fillRect(0,0,ql,Ru),Mn.fillStyle=pt,Mn.fillRect(0,0,ql,52),Mn.fillStyle="#0b1022",Mn.font="800 30px ui-monospace, monospace",Mn.fillText(xt,18,37),Mn.font="600 30px ui-monospace, monospace",Qt.forEach((zs,pr)=>{Mn.fillStyle=pr===Qt.length-1?pt:"#7ee081",Mn.fillText(zs,18,96+pr*40)}),Se===1&&[5,9,3,14,6,4,11,2,7].forEach((zs,pr)=>{Mn.fillStyle=zs>10?"#ff5a5f":"#3ddc84",Mn.fillRect(24+pr*50,250-zs*9,34,zs*9)})});pn.add(l(new fn(2,1.25),new Le({map:Fs,toneMapped:!1}),{y:1.25,z:.08,cast:!1})),O.add(pn)});const At=new $t;At.position.set(4.6,0,-.1),At.add(l(new Jt(1.3,2.8,1.6),et,{y:1.4}));const _t=H(256,128,(xt,Qt,pt)=>{xt.fillStyle="#0b1022",xt.fillRect(0,0,Qt,pt),xt.fillStyle="#3ddc84",xt.font="700 30px ui-monospace, monospace",xt.fillText("10.20.0.0",14,50),xt.fillText("     /22",14,96)});At.add(l(new fn(1,.5),new Le({map:_t,toneMapped:!1}),{y:2.3,z:.81,cast:!1}));const Ot=[];for(let xt=0;xt<5;xt++){const Qt=l(new Jt(.8,.07,.04),new Le({color:new Ft("#3ddc84").multiplyScalar(2.2)}),{y:.5+xt*.28,z:.81,cast:!1});Ot.push(Qt),At.add(Qt)}O.add(At);const Lt=new $t;Lt.position.set(-4.9,0,.2),Lt.add(l(new we(.9,1.1,.5,16),et,{y:.25})),Lt.add(l(new we(.7,.7,.06,24),new Le({color:new Ft("#3ddc84").multiplyScalar(2.5)}),{y:.53,cast:!1}));const ie=new $t;ie.position.y=3,ie.add(new pa(new Jc(new In(1.15,1)),new po({color:new Ft("#5dffa8").multiplyScalar(2.4)}))),ie.add(l(new In(.75,0),new di({color:"#3ddc84",emissive:"#3ddc84",emissiveIntensity:.9,flatShading:!0,transparent:!0,opacity:.85}),{cast:!1})),Lt.add(ie);const re=new we(.7,1.2,2.5,20,1,!0);re.translate(0,1.8,0);const Zt=new Ce(re,yh("#5dffa8"));Lt.add(Zt),O.add(Lt);const oe=H(1024,160,(xt,Qt,pt)=>{xt.fillStyle="#1d1b3a",T(xt,0,0,Qt,pt,40),xt.fill(),xt.fillStyle="#3ddc84",xt.font="900 92px system-ui, sans-serif",xt.textAlign="center",xt.textBaseline="middle",xt.fillText("PROJECT LAB",Qt/2,pt/2+4)}),Te=l(new fn(6.4,1),new Le({map:oe,transparent:!0,toneMapped:!1}),{y:4.75,z:-.3,cast:!1});O.add(Te),[-2.9,2.9].forEach(xt=>O.add(l(new Jt(.12,3.1,.12),it,{x:xt,y:3.2,z:-.4}))),v.push(xt=>{ie.rotation.set(xt*.4,xt*.7,0),ie.position.y=3+Math.sin(xt*1.5)*.2,Ot.forEach((Qt,pt)=>Qt.visible=Math.sin(xt*5+pt*1.7)>-.4)}),i.add(O),O.updateMatrixWorld(),[[-2.4,0,1.5],[0,0,1.5],[2.4,0,1.5],[4.6,0,1.1],[-4.9,0,1.2]].forEach(([xt,Qt,pt])=>{const Se=O.localToWorld(new D(xt,0,Qt));u(Se.x,Se.z,pt)})}const k={x:-8,z:-46};{const A=new $t;A.position.set(k.x,0,k.z),A.add(l(new we(3.2,3.6,.8,10),a("#a7a9be"),{y:.4,receive:!0}));const O=a("#fffaf2"),et=a("#ff5a5f"),it=4,dt=2.5;for(let Zt=0;Zt<it;Zt++){const oe=2-Zt*.17,Te=2-(Zt+1)*.17;A.add(l(new we(Te,oe,dt,14),Zt%2?et:O,{y:.8+dt*Zt+dt/2}))}const At=.8+dt*it;A.add(l(new we(1.9,1.7,.3,14),a("#1d1b3a"),{y:At+.15}));const _t=l(new mi(1.8,.06,4,24),a("#1d1b3a"),{y:At+.75,cast:!1});_t.rotation.x=Math.PI/2,A.add(_t);const Ot=l(new we(1,1,1.5,12),new di({color:"#fff3c4",emissive:"#ffe08a",emissiveIntensity:3.2}),{y:At+1.05,cast:!1});A.add(Ot),A.add(l(new ui(1.45,1.4,12),et,{y:At+2.5})),A.add(l(new fi(.22,8,6),a("#1d1b3a"),{y:At+3.3})),A.add(l(new Jt(.9,1.5,.2),a("#1d1b3a"),{y:1.55,z:1.95}));const Lt=new $t;Lt.position.y=At+1.05;const ie=new ui(4.2,34,24,1,!0);ie.translate(0,-17,0),ie.rotateX(-Math.PI/2);const re=yh("#fff1b8");[0,Math.PI].forEach(Zt=>{const oe=new Ce(ie,re);oe.rotation.set(.06,Zt,0),oe.renderOrder=2,Lt.add(oe)}),A.add(Lt),v.push(Zt=>{Lt.rotation.y=Zt*.7}),i.add(A),u(k.x,k.z,3.4)}const y={angle:Math.atan2(29,50)},L=(A,O,et)=>Math.sin(A*.18+et*1.1)*.5+Math.sin(O*.23-et*.9)*.35+Math.sin((A+O)*.37+et*1.7)*.18;{const A=Math.sin(y.angle),O=Math.cos(y.angle),et=59,it=new $t;it.position.set(A*et,0,O*et),it.rotation.y=y.angle;const dt=a("#b07a4f"),At=a("#9a6841"),_t=a("#6e4a31");for(let xt=0;xt<12;xt++)it.add(l(new Jt(3.2,.2,1.35),xt%2?dt:At,{y:-.04,z:-8.25+xt*1.5,receive:!0}));for(let xt=0;xt<5;xt++)[-1.5,1.5].forEach(Qt=>it.add(l(new we(.18,.2,2.6,6),_t,{x:Qt,y:-1.1,z:-3+xt*2.75})));[-1.5,1.5].forEach(xt=>it.add(l(new we(.22,.22,.6,8),_t,{x:xt,y:.3,z:8.4}))),i.add(it);const Ot=new $t,Lt=new Nn;Lt.moveTo(0,3),Lt.quadraticCurveTo(1,1.6,.95,-.5),Lt.lineTo(.8,-2.1),Lt.lineTo(-.8,-2.1),Lt.lineTo(-.95,-.5),Lt.quadraticCurveTo(-1,1.6,0,3);const ie=new pi(Lt,{depth:.9,bevelEnabled:!0,bevelSize:.08,bevelThickness:.08,bevelSegments:1});ie.rotateX(-Math.PI/2),Ot.add(l(ie,a("#fffaf2"))),Ot.add(l(new Jt(1.95,.18,3.2),a("#00c2d1"),{y:.45,z:.1})),Ot.add(l(new Jt(1.2,.6,1.2),a("#e8e2d0"),{y:1.2,z:.9})),Ot.add(l(new we(.07,.09,4.6,6),a("#6e4a31"),{y:3.2,z:-.4}));const re=new Nn;re.moveTo(0,0),re.lineTo(0,3.6),re.lineTo(1.9,.1),re.lineTo(0,0);const Zt=l(new zl(re),a("#fffaf2",{side:Dn}),{y:1.4,z:-.3});Zt.rotation.y=Math.PI/2+.3,Ot.add(Zt);const oe=l(new Jt(.05,.3,.6),a("#ff5a5f"),{y:5.4,z:-.7,cast:!1});Ot.add(oe),it.updateMatrixWorld();const Te=new D(3.4,0,4.5);it.localToWorld(Te),Ot.position.copy(Te),Ot.rotation.y=y.angle+Math.PI+.12,i.add(Ot),v.push(xt=>{const Qt=L(Te.x,Te.z,xt)*.22;Ot.position.y=-1.45+Qt,Ot.rotation.z=Math.sin(xt*1.2)*.05,Ot.rotation.x=Math.sin(xt*.9+1)*.035,oe.rotation.y=Math.sin(xt*3)*.4})}const F={x:10,z:26,halfLen:4,halfWid:2.6,height:2.2},B=(A,O)=>{const et=A-F.x,it=O-F.z;return Math.abs(et)>F.halfLen||Math.abs(it)>F.halfWid?0:F.height*(et+F.halfLen)/(2*F.halfLen)};{const A=new $t;A.position.set(F.x,0,F.z);const O=new Nn;O.moveTo(-4,0),O.lineTo(F.halfLen,0),O.lineTo(F.halfLen,F.height),O.lineTo(-4,0);const et=new pi(O,{depth:F.halfWid*2,bevelEnabled:!1});et.translate(0,0,-2.6),A.add(l(et,a("#ffb02e"),{receive:!0}));const it=Math.atan2(F.height,F.halfLen*2),dt=Math.hypot(F.height,F.halfLen*2),At=new $t;At.position.set(0,F.height/2,0),At.rotation.z=it;const _t=H(512,256,(Lt,ie,re)=>{Lt.fillStyle="#1d1b3a",Lt.fillRect(0,0,ie,re),Lt.fillStyle="#ffc93c";for(let Zt=0;Zt<4;Zt++){Lt.beginPath();const oe=40+Zt*115;Lt.moveTo(oe,40),Lt.lineTo(oe+70,re/2),Lt.lineTo(oe,re-40),Lt.lineTo(oe+30,re/2),Lt.closePath(),Lt.fill()}}),Ot=l(new fn(dt,F.halfWid*2-.6),new di({map:_t,roughness:.8}),{y:.02,cast:!1,receive:!0});Ot.rotation.x=-Math.PI/2,At.add(Ot),A.add(At),[-1,1].forEach(Lt=>A.add(l(new Jt(F.halfLen*2,.35,.25),a("#ff5a5f"),{y:.18,z:Lt*(F.halfWid+.1)}))),i.add(A)}const U=[[18.5,26,3.2],[27.1,46.7],[-14,-12],[12,-26],[40,4],[-46,0],[-20,46],[38,-36],[-46,24],[-28,-40],[0,-30],[8,44]],z=[];{const A=new Fl(.55,0),O=new di({color:"#7df9ff",emissive:"#00e5ff",emissiveIntensity:2.2,flatShading:!0}),et=new Jc(new Jt(1.1,1.1,1.1)),it=new po({color:new Ft("#b8fbff").multiplyScalar(1.6)}),dt=new Le({color:new Ft("#00e5ff").multiplyScalar(1.4),transparent:!0,opacity:.55,depthWrite:!1}),At=new ar(.9,1.15,24);U.forEach(([_t,Ot,Lt=1.15],ie)=>{const re=new $t;re.position.set(_t,Lt,Ot);const Zt=new Ce(A,O);Zt.castShadow=!0,re.add(Zt,new pa(et,it)),i.add(re);const oe=new Ce(At,dt);oe.rotation.x=-Math.PI/2,oe.position.set(_t,.09,Ot),i.add(oe),z.push({g:re,ring:oe,x:_t,z:Ot,y:Lt,taken:!1,pop:0,phase:ie*.7})})}let J=7;const Q=()=>(J=J*16807%2147483647)/2147483647,gt=(A,O,[et,it,dt,At])=>{const _t=dt-et,Ot=At-it,Lt=Math.max(0,Math.min(1,((A-et)*_t+(O-it)*Ot)/(_t*_t+Ot*Ot)));return Math.hypot(A-et-Lt*_t,O-it-Lt*Ot)},qt=A=>{for(let O=0;O<50;O++){const et=Q()*Math.PI*2,it=Math.sqrt(Q())*(h-4),dt=Math.cos(et)*it,At=Math.sin(et)*it;if(!(Math.hypot(dt-p.x,At+2)<16)&&!Object.values(d).some(_t=>Math.hypot(dt-_t.x,At-_t.z)<16)&&!S.some(_t=>gt(dt,At,_t)<4.5)&&!c.some(_t=>Math.hypot(dt-_t.x,At-_t.z)<_t.r+A))return{x:dt,z:At}}return null},te={x:12.8,z:5.2,rot:-.12,scale:.7},Z={x:22,z:-40,rot:-.45},ht={x:6,z:-40},nt={x:12.5,z:-36.5},ot=[{x:te.x,z:te.z,r:6},{x:k.x,z:k.z,r:7},{x:Math.sin(y.angle)*52,z:Math.cos(y.angle)*52,r:6},{x:F.x,z:F.z,r:7},{x:19,z:26,r:5},...U.map(([A,O])=>({x:A,z:O,r:2.6})),{x:Z.x,z:Z.z,r:7.5},{x:Z.x+Math.sin(Z.rot)*5,z:Z.z+Math.cos(Z.rot)*5,r:5.5},{x:ht.x,z:ht.z,r:7},{x:nt.x,z:nt.z,r:3.5},...[[-5.7,6.4,2.6],[-4,9,2.5]].map(([A,O,et])=>({x:Z.x+A*Math.cos(Z.rot)+O*Math.sin(Z.rot),z:Z.z-A*Math.sin(Z.rot)+O*Math.cos(Z.rot),r:et}))],Et=A=>ot.some(O=>Math.hypot(A.x-O.x,A.z-O.z)<O.r),wt=70,kt=new ds(new we(.25,.35,1.6,5),a("#8b5a3c"),wt),jt=new ds(new ui(1.5,3.4,6),a("#ffffff"),wt);kt.castShadow=jt.castShadow=!0;const at=["#3fa968","#56c271","#2f9461","#7bcf6b"].map(A=>new Ft(A)),C=new Ie;let Mt=0;for(let A=0;A<wt;A++){const O=qt(2);if(!O)continue;const et=.7+Q()*.8,it=Q()*6;Et(O)||(C.position.set(O.x,.8*et,O.z),C.scale.setScalar(et),C.rotation.set(0,it,0),C.updateMatrix(),kt.setMatrixAt(Mt,C.matrix),C.position.y=(1.6+1.5)*et,C.updateMatrix(),jt.setMatrixAt(Mt,C.matrix),jt.setColorAt(Mt,at[Mt%4]),u(O.x,O.z,.6*et+.2),Mt++)}kt.count=jt.count=Mt,i.add(kt,jt);const yt={value:0};jt.material.onBeforeCompile=A=>{A.uniforms.uWind=yt,A.vertexShader=`uniform float uWind;
`+A.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      float bend = max(0.0, position.y + 1.7) / 3.4;
      bend *= bend;
      vec2 ip = vec2(instanceMatrix[3].x, instanceMatrix[3].z);
      transformed.x += sin(uWind * 1.7 + ip.x * 0.35 + ip.y * 0.2) * 0.24 * bend;
      transformed.z += cos(uWind * 1.3 + ip.y * 0.3) * 0.15 * bend;`)};const mt=26,bt=new ds(new Nl(1,0),a("#a7a9be"),mt);bt.castShadow=!0;let Xt=0;for(let A=0;A<mt;A++){const O=qt(1.5);if(!O)continue;const et=.4+Q()*.9,it=Q(),dt=Q()*6,At=Q();Et(O)||(C.position.set(O.x,et*.4,O.z),C.scale.set(et*1.2,et*.8,et),C.rotation.set(it,dt,At),C.updateMatrix(),bt.setMatrixAt(Xt++,C.matrix),u(O.x,O.z,et*1.1))}bt.count=Xt,i.add(bt);{const A=new $t;A.position.set(te.x,0,te.z),A.rotation.y=te.rot,A.scale.setScalar(te.scale);const O=a("#8b5a3c");[-4.2,4.2].forEach(_t=>A.add(l(new Jt(.45,3.4,.45),O,{x:_t,y:1.7}))),A.add(l(new Jt(10.4,3,.5),a("#1d1b3a"),{y:4.6})),A.add(l(new Jt(10.8,.25,.7),a("#00c2d1"),{y:6.2})),A.add(l(new Jt(10.8,.25,.7),a("#00c2d1"),{y:3}));const et=H(1024,288,(_t,Ot,Lt)=>{_t.fillStyle="#0b1022",_t.fillRect(0,0,Ot,Lt),_t.fillStyle="#7ee081",_t.font="600 34px ui-monospace, Menlo, monospace",_t.textAlign="left",_t.fillText("> visit --secure",40,62),_t.fillStyle="#ffffff",_t.font="800 66px ui-monospace, Menlo, monospace",_t.textAlign="center",_t.fillText("CallMeMrVirtuoso",Ot/2,160),_t.fillStyle="#00e5ff",_t.font="700 50px ui-monospace, Menlo, monospace",_t.fillText(".github.io",Ot/2,232)}),it=l(new fn(9.9,2.6),new Le({map:et}),{y:4.6,z:.26,cast:!1});A.add(it);const dt=l(new fi(.22,8,6),new Le({color:"#7ee081"}),{x:4.6,y:6.6,cast:!1});A.add(dt);const At=new $t;At.position.set(-4.4,6.9,0),At.add(l(new Jt(.9,.75,.4),a("#ffc93c"))),At.add(l(new mi(.3,.09,4,10,Math.PI),a("#b9bdd6"),{y:.37})),A.add(At),v.push(_t=>{dt.visible=Math.sin(_t*4)>-.3,At.rotation.y=Math.sin(_t*1.5)*.4}),i.add(A),A.updateMatrixWorld(),[-4.2,-1.4,1.4,4.2].forEach(_t=>{const Ot=A.localToWorld(new D(_t,0,0));u(Ot.x,Ot.z,.65)}),window.__sign={...te,nColliders:c.length}}const Dt=[],P=a("#fff3ea",{roughness:1});for(let A=0;A<9;A++){const O=new $t;for(let dt=0;dt<4;dt++)O.add(l(new In(1.5+Q()*1.5,0),P,{x:dt*2-3,y:Q()*1.2,z:Q()*2,cast:!1}));const et=Q()*Math.PI*2,it=68+Q()*45;O.position.set(Math.cos(et)*it,9+Q()*6,Math.sin(et)*it),Dt.push(O),i.add(O)}const b=ox(Z,u);i.add(b.group),v.push((A,O)=>b.update(A,O));let Y=99;const rt=()=>(Y=Y*16807%2147483647)/2147483647,lt=(()=>{const A=y.angle,O=Math.sin(A)*59,et=Math.cos(A)*59,it=-4.5,dt=3;return{x:O+it*Math.cos(A)+dt*Math.sin(A),z:et-it*Math.sin(A)+dt*Math.cos(A)}})(),st=fx({scene:i,colliders:c,islandRadius:h,rand:rt,waveY:L,dogHome:b.dogHome,meadow:ht,forest:{x:-46,z:-12},lighthouse:{x:k.x,z:k.z,top:10.8},pond:lt,sound:{woof:()=>Ye.woof(),bleat:()=>Ye.bleat()}});v.push((A,O)=>st.update(A,O,j));const Bt=mx({scene:i,house:b,animals:st,feedSpot:nt,colliders:c,addCollider:u});v.push((A,O)=>Bt.update(A,O,j));let Tt=4242;const ce=vx({max:220,radius:h,rand:()=>(Tt=Tt*16807%2147483647)/2147483647,avoid:(A,O)=>Math.hypot(A-p.x,O-p.z)<7});i.add(ce.points);{const A=H(1400,192,(et,it,dt)=>{et.fillStyle="#1d1b3a",et.font="800 54px system-ui, sans-serif",et.textAlign="center",et.fillText("CYBERSECURITY · SOC · IT SECURITY · IAM",it/2,70),et.font="600 40px system-ui, sans-serif",et.fillStyle="#3b3870",et.fillText("drive into a glowing zone to explore",it/2,150)}),O=l(new fn(28,3.85),new Le({map:A,transparent:!0}),{x:0,y:.06,z:-3.2,cast:!1});O.rotation.x=-Math.PI/2,i.add(O)}const ft=new $t,St=new $t;ft.add(St),St.add(l(new Jt(2,.75,3.4),a("#ff5a5f"),{y:.8})),St.add(l(new Jt(1.7,.75,1.7),a("#fffaf2"),{y:1.5,z:-.3})),St.add(l(new Jt(1.74,.45,1.2),a("#1d1b3a",{roughness:.3}),{y:1.55,z:-.25})),St.add(l(new Jt(1.4,.45,1.74),a("#1d1b3a",{roughness:.3}),{y:1.55,z:-.3})),St.add(l(new Jt(2.1,.25,.3),a("#fffaf2"),{y:.6,z:1.75})),St.add(l(new Jt(2.1,.25,.3),a("#fffaf2"),{y:.6,z:-1.75}));const ee=new Le({color:new Ft("#fff4a8").multiplyScalar(2.4)}),ne=new Le({color:new Ft("#ff2340").multiplyScalar(1.6)}),zt=[];[-.65,.65].forEach(A=>{St.add(l(new Jt(.4,.25,.1),ee,{x:A,y:.95,z:1.72,cast:!1})),St.add(l(new Jt(.4,.2,.1),ne,{x:A,y:.95,z:-1.72,cast:!1}));const O=new v_("#fff1c9",45,28,.48,.6,1.5);O.position.set(A,.95,1.8),O.target.position.set(A*2,0,12),St.add(O,O.target),zt.push(O)}),St.add(l(new we(.03,.03,1.4,4),a("#1d1b3a"),{x:.7,y:2.3,z:-1.2}));const ue=l(new fi(.16,8,6),a("#00c2d1",{emissive:"#00c2d1",emissiveIntensity:.6}),{x:.7,y:3,z:-1.2});St.add(ue);const se=[],ye=new we(.5,.5,.45,12);ye.rotateZ(Math.PI/2);const G=new Jt(.5,.3,.3);[[-1.05,1.15],[1.05,1.15],[-1.05,-1.15],[1.05,-1.15]].forEach(([A,O],et)=>{const it=new $t;it.position.set(A,.5,O);const dt=l(ye,a("#25233f"));dt.add(l(G,a("#e8e2d0"),{cast:!1})),it.add(dt),ft.add(it),se.push({pivot:it,w:dt,front:et<2})}),ft.rotation.order="YXZ",i.add(ft);const Rt=l(new vs(1.9,20),new Le({color:"#000",transparent:!0,opacity:.18,depthWrite:!1}),{y:.07,cast:!1});Rt.rotation.x=-Math.PI/2,i.add(Rt);const tt=[],ct=new Le({color:"#f3e6c8",transparent:!0}),It=new In(.25,0);for(let A=0;A<30;A++){const O=new Ce(It,ct.clone());O.visible=!1,i.add(O),tt.push({m:O,life:0})}let Ut=0,fe=0;const j={x:p.x,z:p.z,y:0,vy:0,grounded:!0,pitch:0,heading:-Math.PI/2,speed:0,steer:0},ve={forward:!1,backward:!1,left:!1,right:!1},de={KeyW:"forward",ArrowUp:"forward",KeyS:"backward",ArrowDown:"backward",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right"};addEventListener("keydown",A=>{if(On!=="world"){On==="loading"&&A.key==="Enter"&&!so.disabled&&(Ye.start(),vo());return}de[A.code]&&(ve[de[A.code]]=!0,A.code.startsWith("Arrow")&&A.preventDefault()),A.code==="KeyR"&&Tn(),A.code==="Escape"&&xo(!0),A.code==="KeyM"&&!A.repeat&&wu(),A.code==="KeyQ"&&!A.repeat&&Cn(),A.code==="KeyC"&&!A.repeat&&(Wn=Wn==="top"?"chase":"top",Kt=Wn==="top",sn=null)}),addEventListener("keyup",A=>{de[A.code]&&(ve[de[A.code]]=!1)}),addEventListener("blur",()=>Object.keys(ve).forEach(A=>ve[A]=!1));const je=matchMedia("(pointer: coarse)").matches;_l.querySelectorAll("button").forEach(A=>{const O=A.dataset.key,et=dt=>{dt.preventDefault(),ve[O]=!0,A.classList.add("on")},it=dt=>{dt.preventDefault(),ve[O]=!1,A.classList.remove("on")};A.addEventListener("pointerdown",et),A.addEventListener("pointerup",it),A.addEventListener("pointercancel",it),A.addEventListener("pointerleave",it),A.addEventListener("contextmenu",dt=>dt.preventDefault())});function Tn(){Object.assign(j,{x:p.x,z:p.z,y:0,vy:0,grounded:!0,heading:-Math.PI/2,speed:0})}function Us(A){const O=d[A],et=O.x-p.x,it=O.z-p.z,dt=Math.hypot(et,it);Object.assign(j,{x:O.x-et/dt*3,z:O.z-it/dt*3,y:0,vy:0,grounded:!0,heading:Math.atan2(et,it),speed:0}),vn=null,Kt=!0,sn=null,Wn="top"}document.querySelectorAll(".zone-nav button").forEach(A=>A.addEventListener("click",()=>{Us(A.dataset.zone),A.blur()}));let $e=null,vn=null;function Oi(A){const O=k_[A];Ge("#panel-title").textContent=`${O.icon} ${O.title}`,Ge("#panel-body").innerHTML=O.html,bn.style.borderColor=d[A].color,bn.classList.add("open"),bn.setAttribute("aria-hidden","false"),bn.scrollTop=0,document.querySelectorAll(".zone-nav button").forEach(et=>et.classList.toggle("active",et.dataset.zone===A))}Ge("#panel-close").addEventListener("click",()=>xo(!0)),Tu=A=>{A&&$e&&(vn=$e)};const Mi=20,cr=-9,yi=22,Ns=34,Bi=7,hr=1.5,ur=30;let ki=null,Wn="top",sn=null;const w=new D(20,6.5,66),V=new D(-2,4,-12),$=new D,K=new D;let W=0;const vt=Ge("#packet-count"),Pt=Ge("#packets");Ge("#packet-total").textContent=String(z.length);function Ht(A){A.taken=!0,A.ring.visible=!1,W++,vt.textContent=String(W);const O=W===z.length;Pt.classList.add("bump"),setTimeout(()=>Pt.classList.remove("bump"),220),O&&Pt.classList.add("all"),Ye.chime(O),Ea(O?`🛡️ All ${z.length} data packets secured. Nice driving!`:`📦 Data packet secured (${W}/${z.length})`)}const Gt=new D,Wt=new D(p.x,0,p.z);let Kt=!0;const Vt=new mu;function _e(A,O){if(ve.forward)j.speed+=(j.speed<0?Ns:yi)*A;else if(ve.backward)j.speed-=(j.speed>0?Ns:yi*.7)*A;else{const pt=Math.sign(j.speed);j.speed-=pt*Bi*A,Math.sign(j.speed)!==pt&&(j.speed=0)}j.speed=Math.max(cr,Math.min(Mi,j.speed));const et=(ve.left?1:0)-(ve.right?1:0);j.steer+=(et-j.steer)*Math.min(1,A*10);const it=j.steer*2.4*Math.min(1,Math.abs(j.speed)/6)*Math.sign(j.speed||1);j.heading+=it*A;const dt=j.x,At=j.z;j.x+=Math.sin(j.heading)*j.speed*A,j.z+=Math.cos(j.heading)*j.speed*A,j.grounded&&B(j.x,j.z)-j.y>.6&&(j.x=dt,j.z=At,j.speed*=-.3);const _t=B(j.x,j.z);j.grounded&&(_t>=j.y-.05?(j.vy=A>0?(_t-j.y)/A:0,j.y=_t):j.grounded=!1),j.grounded||(j.vy-=ur*A,j.y+=j.vy*A,j.y<=_t&&(j.vy<-6&&Ye.thud(-j.vy/16),j.y=_t,j.vy=0,j.grounded=!0));for(const pt of c){if(j.y>1.6)break;const Se=j.x-pt.x,Ke=j.z-pt.z,pn=Math.hypot(Se,Ke),Fs=pt.r+hr;pn<Fs&&pn>1e-4&&(j.x=pt.x+Se/pn*Fs,j.z=pt.z+Ke/pn*Fs,j.speed*=-.25)}const Ot=Math.hypot(j.x,j.z),Lt=h-2;Ot>Lt&&(j.x*=Lt/Ot,j.z*=Lt/Ot,j.speed*=.5),ft.position.set(j.x,j.y,j.z);const ie=Math.max(-.6,Math.min(.6,-Math.atan2(j.vy,Math.max(3,Math.abs(j.speed)))*Math.sign(j.speed||1)));if(j.pitch+=(ie-j.pitch)*Math.min(1,A*10),ft.rotation.set(j.pitch,j.heading,0),St.rotation.z=-j.steer*Math.abs(j.speed)/Mi*.12,St.rotation.x=(ve.forward?-.04:ve.backward?.05:0)*Math.min(1,Math.abs(j.speed)/4),St.position.y=Math.abs(Math.sin(O*18))*.05*(Math.abs(j.speed)/Mi),ue.position.z=-1.2-j.speed*.01,se.forEach(({pivot:pt,w:Se,front:Ke})=>{Se.rotation.x+=j.speed*A/.5,Ke&&(pt.rotation.y=j.steer*.45)}),Rt.position.set(j.x,.07,j.z),Rt.visible=_t===0,Rt.scale.setScalar(1/(1+j.y*.35)),Ye.engine(On==="world"?Math.abs(j.speed)/Mi:0,ve.forward||ve.backward),fe+=A,Math.abs(j.speed)>8&&fe>.05&&j.grounded&&_t===0){fe=0;const pt=tt[Ut++%tt.length],Se=-Math.sign(j.speed)*1.6,Ke=(Math.random()-.5)*1.8;pt.m.position.set(j.x+Math.sin(j.heading)*Se+Math.cos(j.heading)*Ke,.3,j.z+Math.cos(j.heading)*Se-Math.sin(j.heading)*Ke),pt.life=1,pt.m.visible=!0}for(const pt of tt)pt.life>0&&(pt.life-=A*1.6,pt.m.position.y+=A*.8,pt.m.scale.setScalar(1+(1-pt.life)*1.5),pt.m.material.opacity=Math.max(0,pt.life)*.7,pt.life<=0&&(pt.m.visible=!1));let re=null;for(const pt of Object.values(d))Math.hypot(j.x-pt.x,j.z-pt.z)<E+.5&&(re=pt.key);re!==$e&&($e=re,re&&Ye.blip(),re||(vn=null,xo(),document.querySelectorAll(".zone-nav button").forEach(pt=>pt.classList.remove("active")))),$e&&vn!==$e&&!bn.classList.contains("open")&&Oi($e),$e&&bn.dataset.zone!==$e&&bn.classList.contains("open")&&Oi($e),bn.dataset.zone=bn.classList.contains("open")&&$e||"";for(const pt of z){if(pt.taken){pt.pop<1&&(pt.pop=Math.min(1,pt.pop+A*4),pt.g.scale.setScalar((1-pt.pop)*(1+pt.pop*1.5)),pt.g.visible=pt.pop<1);continue}pt.g.rotation.y=O*1.6+pt.phase,pt.g.position.y=pt.y+Math.sin(O*2+pt.phase)*.18,pt.ring.scale.setScalar(1+Math.sin(O*3+pt.phase)*.08),On==="world"&&Math.hypot(j.x-pt.x,j.z-pt.z)<2.1&&Math.abs(j.y+.9-pt.y)<1.5&&Ht(pt)}v.forEach(pt=>pt(O,A)),f.update(O),ce.update(O),yt.value=O,I.forEach((pt,Se)=>{const Ke=1+Math.sin(O*3+Se)*.04;pt.scale.set(Ke,Ke,1)}),Dt.forEach((pt,Se)=>{pt.position.x+=A*(.6+Se*.05),pt.position.x>130&&(pt.position.x=-130),pt.visible=Math.hypot(pt.position.x,pt.position.z)>h+8});const Zt=innerHeight>innerWidth;Gt.set(0,Zt?34:24,Zt?30:22);const oe=new D(Math.sin(j.heading),0,Math.cos(j.heading)).multiplyScalar(j.speed*.25),Te=new D(j.x,0,j.z).add(oe);if(bn.classList.contains("open")&&$e){const pt=d[$e].anchor;Te.lerp(new D(pt.x,0,pt.z),.45),innerWidth<=700?Te.z+=Zt?8:5:Te.x+=Math.min(10,2+innerWidth/200),Gt.multiplyScalar(1.12)}if(Kt?(Wt.copy(Te),Kt=!1):Wt.lerp(Te,Math.min(1,A*3)),Wt.y+=(j.y*.4-Wt.y)*Math.min(1,A*4),Wn==="chase"){const pt=Math.sin(j.heading),Se=Math.cos(j.heading),Ke=new D(j.x-pt*11,4.6+j.y*.6,j.z-Se*11);$.lengthSq()===0&&$.copy(Ke),$.lerp(Ke,Math.min(1,A*4)),K.set(j.x+pt*8,1.6+j.y*.5,j.z+Se*8),s.position.copy($),s.lookAt(K)}else $.set(0,0,0),s.position.copy(Wt).add(Gt),s.lookAt(Wt.x,1+Wt.y,Wt.z);if(sn){sn.hold||(sn.t+=A);const pt=Math.min(1,sn.t/sn.dur),Se=pt*pt*(3-2*pt),Ke=s.position.clone(),pn=new D(Wt.x,1,Wt.z);s.position.lerpVectors(w,Ke,Se),s.lookAt(new D().lerpVectors(V,pn,Se)),pt>=1&&(sn=null)}ki&&(s.position.set(...ki.from),s.lookAt(...ki.to)),n.position.copy(s.position);const Qt=Wn==="chase"?new D(j.x+Math.sin(j.heading)*14,0,j.z+Math.cos(j.heading)*14):Wt;r.position.set(Qt.x+20,40,Qt.z+12),r.target.position.set(Qt.x,0,Qt.z)}const pe=new L_(un,new wn(1,1,{type:Gn,samples:4}));pe.addPass(new I_(i,s));const Re=new Cs(new ut(innerWidth,innerHeight),.6,.5,1.12);pe.addPass(Re),pe.addPass(new _u(Mx)),pe.addPass(new N_);const ze=["low","medium","high"],ge={low:{pr:1.25,post:!1,shadow:0,fireflies:80,headlights:!1},medium:{pr:1.5,post:!0,samples:0,bloom:.5,shadow:1024,fireflies:140,headlights:!0},high:{pr:2,post:!0,samples:4,bloom:.6,shadow:2048,fireflies:220,headlights:!0}},Yt=matchMedia("(pointer: coarse)").matches||Math.min(screen.width,screen.height)<600;let Oe=null;try{Oe=localStorage.getItem("alex-site-quality")}catch{}let he=ze.includes(Js.get("quality"))?Js.get("quality"):ze.includes(Oe)?Oe:Yt?"low":"high",rn=ze.includes(Js.get("quality"))||ze.includes(Oe),An=!1;const on=Ge("#quality-label"),ii=Ge("#quality-btn");function Pe(A){he=A;const O=ge[A],et=Math.min(devicePixelRatio||1,O.pr);un.setPixelRatio(et),un.setSize(innerWidth,innerHeight),An=O.post,An&&([pe.renderTarget1,pe.renderTarget2].forEach(it=>{it.samples!==O.samples&&(it.samples=O.samples,it.dispose())}),Re.strength=O.bloom,pe.setPixelRatio(et),pe.setSize(innerWidth,innerHeight)),r.castShadow=O.shadow>0,O.shadow&&r.shadow.mapSize.x!==O.shadow&&(r.shadow.mapSize.set(O.shadow,O.shadow),r.shadow.map&&(r.shadow.map.dispose(),r.shadow.map=null)),ce.setCount(O.fireflies),b.setSmoke(A==="low"?3:6),st.setQuality(A),Bt.setQuality(A),ce.setPixelRatio(et),zt.forEach(it=>it.visible=O.headlights),document.body.classList.toggle("q-low",A==="low"),on.textContent=A[0].toUpperCase()+A.slice(1),ii.title=`Graphics quality: ${A} (Q to change)`,ii.setAttribute("aria-label",`Graphics quality: ${A}. Click to change.`)}function Cn(){const A=ze[(ze.indexOf(he)+2)%3];rn=!0;try{localStorage.setItem("alex-site-quality",A)}catch{}Pe(A),Ea(`Graphics: ${A}`,1400)}ii.addEventListener("click",()=>{Cn(),ii.blur()}),Pe(he);const De={frames:0,time:0,lowFor:0,fps:60,warmup:2,drops:0};function hn(A){if(On==="world"){if(De.warmup>0){De.warmup-=A;return}De.frames++,De.time+=A,!(De.time<.5)&&(De.fps=De.frames/De.time,De.lowFor=De.fps<30?De.lowFor+De.time:0,De.frames=0,De.time=0,De.lowFor>=4&&!rn&&he!=="low"&&(De.lowFor=0,De.warmup=1.5,De.drops++,Pe(ze[ze.indexOf(he)-1]),Ea(`Graphics lowered to ${he} for smoother driving (Q to change)`,3e3)))}}function Hi(){requestAnimationFrame(Hi);const A=Vt.getDelta(),O=Math.min(A,.05);On==="simple"||document.hidden||(_e(On==="world"?O:0,Vt.elapsedTime),An?pe.render(O):un.render(i,s),hn(Math.min(A,.5)))}addEventListener("resize",()=>{s.aspect=innerWidth/innerHeight,s.updateProjectionMatrix(),un.setSize(innerWidth,innerHeight),An&&pe.setSize(innerWidth,innerHeight)});const No=Ge("#bar-fill"),fr=Ge("#loader-status"),dr=(A,O)=>{No.style.width=`${Math.round(A*100)}%`,fr.textContent=`${O} ${Math.round(A*100)}%`};dr(.3,"Hardening island…"),new S_().load("helvetiker_bold.typeface.json",A=>{dr(.8,"Rendering name…"),Cu(A),un.compile(i,s),dr(1,"Access granted."),Wl()},A=>{A.total&&dr(.3+A.loaded/A.total*.5,"Fetching assets…")},A=>{console.warn("Font failed to load; continuing without 3D name",A),Wl()});function Cu(A){const et="ALEX SMITH",it=3/A.data.resolution,dt=["#ff5a5f","#ffc93c","#7ee081","#00c2d1","#7b5cff"],At=new $t;let _t=0;const Ot=[];[...et].forEach((ie,re)=>{const Zt=A.data.glyphs[ie],oe=(Zt?Zt.ha:300)*it;if(ie!==" "){const Te=new T_(ie,{font:A,size:3,depth:1.1,curveSegments:3,bevelEnabled:!0,bevelThickness:.12,bevelSize:.08,bevelSegments:1}),xt=l(Te,a(dt[re%dt.length]),{x:_t});At.add(xt),Ot.push({m:xt,cx:_t+oe/2})}_t+=oe+.25});const Lt=_t-.25;At.position.set(-Lt/2,0,-7.5),i.add(At),Ot.forEach(({m:ie,cx:re},Zt)=>{u(re-Lt/2,-7,1.2),v.push(oe=>{ie.position.y=Math.max(0,Math.sin(oe*2.2-Zt*.5))*.25})})}function Wl(){Vl=!0,so.disabled=!1,so.focus({preventScroll:!0}),Hi(),location.hash==="#resume"?Ds(!0):Js.has("autostart")&&vo()}so.addEventListener("click",()=>{Ye.start(),vo()}),Au=()=>{var A;On="world",Ro.classList.add("done"),setTimeout(()=>Ro.hidden=!0,650),Gl.hidden=!1,_l.hidden=!je,(A=_o.focus)==null||A.call(_o),Vt.getDelta(),De.warmup=2,Ye.setActive(!document.hidden),!yx&&Js.get("intro")!=="0"&&!sn&&!Xl&&(sn={t:0,dur:3.2},Xl=!0)};let Xl=!1;window.__app={state:j,keys:ve,teleport:Us,colliders:c,packets:z,audio:Ye,house:b,get animals(){return st.debug()},get gardener(){return Bt.debug()},gardenerGoto:A=>Bt.goto(A),get activeZone(){return $e},get quality(){return he},get qualityLocked(){return rn},get perf(){return De},get packetCount(){return W},get intro(){return sn},setCamMode:A=>{Wn=A,Kt=!0},photo:(A,O)=>{ki=A?{from:A,to:O}:null},holdIntro:A=>{sn={t:A*3.2,dur:3.2,hold:!0}},endIntro:()=>{sn=null}}}function xo(i=!1){Tu(i),bn.classList.remove("open"),bn.setAttribute("aria-hidden","true")}function vo(){Au()}
