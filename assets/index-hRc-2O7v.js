(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Su="169",Am=0,xd=1,Cm=2,Ep=1,Tp=2,fs=3,Hs=0,Yn=1,zn=2,vs=0,mr=1,Bs=2,vd=3,yd=4,Rm=5,cr=100,Pm=101,Lm=102,zm=103,Im=104,Dm=200,Nm=201,Um=202,Fm=203,Ah=204,Ch=205,Om=206,Bm=207,km=208,Gm=209,Hm=210,Vm=211,Wm=212,qm=213,Xm=214,Rh=0,Ph=1,Lh=2,ho=3,zh=4,Ih=5,Dh=6,Nh=7,Ap=0,Ym=1,jm=2,ks=0,Cp=1,Rp=2,Pp=3,Lp=4,$m=5,zp=6,bu=7,Ip=300,uo=301,fo=302,Uh=303,Fh=304,oc=306,Wl=1e3,dr=1001,Oh=1002,Qn=1003,Km=1004,Ia=1005,ai=1006,Ac=1007,fr=1008,ji=1009,Dp=1010,Np=1011,aa=1012,Eu=1013,gr=1014,qi=1015,Yi=1016,Tu=1017,Au=1018,po=1020,Up=35902,Fp=1021,Op=1022,Ri=1023,Bp=1024,kp=1025,so=1026,mo=1027,ac=1028,Cu=1029,Gp=1030,Ru=1031,Pu=1033,Il=33776,Dl=33777,Nl=33778,Ul=33779,Bh=35840,kh=35841,Gh=35842,Hh=35843,Vh=36196,Wh=37492,qh=37496,Xh=37808,Yh=37809,jh=37810,$h=37811,Kh=37812,Zh=37813,Jh=37814,Qh=37815,tu=37816,eu=37817,nu=37818,iu=37819,su=37820,ru=37821,Fl=36492,ou=36494,au=36495,Hp=36283,lu=36284,cu=36285,hu=36286,Zm=3200,Jm=3201,Vp=0,Qm=1,Us="",Zn="srgb",Vs="srgb-linear",Lu="display-p3",lc="display-p3-linear",ql="linear",en="srgb",Xl="rec709",Yl="p3",Cr=7680,_d=519,tg=512,eg=513,ng=514,Wp=515,ig=516,sg=517,rg=518,og=519,uu=35044,Md="300 es",xs=2e3,jl=2001;class yo{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ol=Math.PI/180,$l=180/Math.PI;function ys(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[e&63|128]+Un[e>>8&255]+"-"+Un[e>>16&255]+Un[e>>24&255]+Un[n&255]+Un[n>>8&255]+Un[n>>16&255]+Un[n>>24&255]).toLowerCase()}function Ln(s,t,e){return Math.max(t,Math.min(e,s))}function ag(s,t){return(s%t+t)%t}function Cc(s,t,e){return(1-e)*s+e*t}function Vi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ke(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class bt{constructor(t=0,e=0){bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ln(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Re{constructor(t,e,n,i,r,o,a,l,c){Re.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],x=i[0],p=i[3],g=i[6],_=i[1],v=i[4],M=i[7],P=i[2],T=i[5],C=i[8];return r[0]=o*x+a*_+l*P,r[3]=o*p+a*v+l*T,r[6]=o*g+a*M+l*C,r[1]=c*x+h*_+d*P,r[4]=c*p+h*v+d*T,r[7]=c*g+h*M+d*C,r[2]=u*x+f*_+m*P,r[5]=u*p+f*v+m*T,r[8]=u*g+f*M+m*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,m=e*d+n*u+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return t[0]=d*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=u*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Rc.makeScale(t,e)),this}rotate(t){return this.premultiply(Rc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Rc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Rc=new Re;function qp(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Kl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function lg(){const s=Kl("canvas");return s.style.display="block",s}const wd={};function Bl(s){s in wd||(wd[s]=!0,console.warn(s))}function cg(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function hg(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ug(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Sd=new Re().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),bd=new Re().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Do={[Vs]:{transfer:ql,primaries:Xl,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[Zn]:{transfer:en,primaries:Xl,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[lc]:{transfer:ql,primaries:Yl,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(bd),fromReference:s=>s.applyMatrix3(Sd)},[Lu]:{transfer:en,primaries:Yl,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(bd),fromReference:s=>s.applyMatrix3(Sd).convertLinearToSRGB()}},dg=new Set([Vs,lc]),Ve={enabled:!0,_workingColorSpace:Vs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!dg.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Do[t].toReference,i=Do[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Do[s].primaries},getTransfer:function(s){return s===Us?ql:Do[s].transfer},getLuminanceCoefficients:function(s,t=this._workingColorSpace){return s.fromArray(Do[t].luminanceCoefficients)}};function ro(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Pc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Rr;class fg{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Rr===void 0&&(Rr=Kl("canvas")),Rr.width=t.width,Rr.height=t.height;const n=Rr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Rr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Kl("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ro(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ro(e[n]/255)*255):e[n]=ro(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let pg=0;class Xp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pg++}),this.uuid=ys(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Lc(i[o].image)):r.push(Lc(i[o]))}else r=Lc(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Lc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?fg.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mg=0;class Gn extends yo{constructor(t=Gn.DEFAULT_IMAGE,e=Gn.DEFAULT_MAPPING,n=dr,i=dr,r=ai,o=fr,a=Ri,l=ji,c=Gn.DEFAULT_ANISOTROPY,h=Us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mg++}),this.uuid=ys(),this.name="",this.source=new Xp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ip)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wl:t.x=t.x-Math.floor(t.x);break;case dr:t.x=t.x<0?0:1;break;case Oh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wl:t.y=t.y-Math.floor(t.y);break;case dr:t.y=t.y<0?0:1;break;case Oh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=Ip;Gn.DEFAULT_ANISOTROPY=1;class Je{constructor(t=0,e=0,n=0,i=1){Je.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],x=l[2],p=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,M=(f+1)/2,P=(g+1)/2,T=(h+u)/4,C=(d+x)/4,O=(m+p)/4;return v>M&&v>P?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=T/n,r=C/n):M>P?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=T/i,r=O/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=C/r,i=O/r),this.set(n,i,r,e),this}let _=Math.sqrt((p-m)*(p-m)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(p-m)/_,this.y=(d-x)/_,this.z=(u-h)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gg extends yo{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Je(0,0,t,e),this.scissorTest=!1,this.viewport=new Je(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Gn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Xp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mi extends gg{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Yp extends Gn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class xg extends Gn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let $i=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=m,t[e+3]=x;return}if(d!==x||l!==u||c!==f||h!==m){let p=1-a;const g=l*u+c*f+h*m+d*x,_=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){const P=Math.sqrt(v),T=Math.atan2(P,g*_);p=Math.sin(p*T)/P,a=Math.sin(a*T)/P}const M=a*_;if(l=l*p+u*M,c=c*p+f*M,h=h*p+m*M,d=d*p+x*M,p===1-a){const P=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=P,c*=P,h*=P,d*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],u=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-a*f,t[e+2]=c*m+h*f+a*u-l*d,t[e+3]=h*m-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),u=l(n/2),f=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ln(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class B{constructor(t=0,e=0,n=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ed.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ed.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return zc.copy(this).projectOnVector(t),this.sub(zc)}reflect(t){return this.sub(zc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ln(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zc=new B,Ed=new $i;class vr{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(wi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(wi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=wi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,wi):wi.fromBufferAttribute(r,o),wi.applyMatrix4(t.matrixWorld),this.expandByPoint(wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Da.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Da.copy(n.boundingBox)),Da.applyMatrix4(t.matrixWorld),this.union(Da)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wi),wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(No),Na.subVectors(this.max,No),Pr.subVectors(t.a,No),Lr.subVectors(t.b,No),zr.subVectors(t.c,No),Ss.subVectors(Lr,Pr),bs.subVectors(zr,Lr),Qs.subVectors(Pr,zr);let e=[0,-Ss.z,Ss.y,0,-bs.z,bs.y,0,-Qs.z,Qs.y,Ss.z,0,-Ss.x,bs.z,0,-bs.x,Qs.z,0,-Qs.x,-Ss.y,Ss.x,0,-bs.y,bs.x,0,-Qs.y,Qs.x,0];return!Ic(e,Pr,Lr,zr,Na)||(e=[1,0,0,0,1,0,0,0,1],!Ic(e,Pr,Lr,zr,Na))?!1:(Ua.crossVectors(Ss,bs),e=[Ua.x,Ua.y,Ua.z],Ic(e,Pr,Lr,zr,Na))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(es[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),es[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),es[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),es[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),es[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),es[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),es[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),es[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(es),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const es=[new B,new B,new B,new B,new B,new B,new B,new B],wi=new B,Da=new vr,Pr=new B,Lr=new B,zr=new B,Ss=new B,bs=new B,Qs=new B,No=new B,Na=new B,Ua=new B,tr=new B;function Ic(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){tr.fromArray(s,r);const a=i.x*Math.abs(tr.x)+i.y*Math.abs(tr.y)+i.z*Math.abs(tr.z),l=t.dot(tr),c=e.dot(tr),h=n.dot(tr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const vg=new vr,Uo=new B,Dc=new B;let yr=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):vg.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Uo.subVectors(t,this.center);const e=Uo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Uo,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Dc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Uo.copy(t.center).add(Dc)),this.expandByPoint(Uo.copy(t.center).sub(Dc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const ns=new B,Nc=new B,Fa=new B,Es=new B,Uc=new B,Oa=new B,Fc=new B;let cc=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ns)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ns.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ns.copy(this.origin).addScaledVector(this.direction,e),ns.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Nc.copy(t).add(e).multiplyScalar(.5),Fa.copy(e).sub(t).normalize(),Es.copy(this.origin).sub(Nc);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Fa),a=Es.dot(this.direction),l=-Es.dot(Fa),c=Es.lengthSq(),h=Math.abs(1-o*o);let d,u,f,m;if(h>0)if(d=o*l-a,u=o*a-l,m=r*h,d>=0)if(u>=-m)if(u<=m){const x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Nc).addScaledVector(Fa,u),f}intersectSphere(t,e){ns.subVectors(t.center,this.origin);const n=ns.dot(this.direction),i=ns.dot(ns)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ns)!==null}intersectTriangle(t,e,n,i,r){Uc.subVectors(e,t),Oa.subVectors(n,t),Fc.crossVectors(Uc,Oa);let o=this.direction.dot(Fc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Es.subVectors(this.origin,t);const l=a*this.direction.dot(Oa.crossVectors(Es,Oa));if(l<0)return null;const c=a*this.direction.dot(Uc.cross(Es));if(c<0||l+c>o)return null;const h=-a*Es.dot(Fc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Ge{constructor(t,e,n,i,r,o,a,l,c,h,d,u,f,m,x,p){Ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,u,f,m,x,p)}set(t,e,n,i,r,o,a,l,c,h,d,u,f,m,x,p){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ge().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ir.setFromMatrixColumn(t,0).length(),r=1/Ir.setFromMatrixColumn(t,1).length(),o=1/Ir.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*h,f=o*d,m=a*h,x=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,m=c*h,x=c*d;e[0]=u+x*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,m=c*h,x=c*d;e[0]=u-x*a,e[4]=-o*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,f=o*d,m=a*h,x=a*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,f=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=x-u*d,e[8]=m*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-x*d}else if(t.order==="XZY"){const u=o*l,f=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=o*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yg,t,_g)}lookAt(t,e,n){const i=this.elements;return ni.subVectors(t,e),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Ts.crossVectors(n,ni),Ts.lengthSq()===0&&(Math.abs(n.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Ts.crossVectors(n,ni)),Ts.normalize(),Ba.crossVectors(ni,Ts),i[0]=Ts.x,i[4]=Ba.x,i[8]=ni.x,i[1]=Ts.y,i[5]=Ba.y,i[9]=ni.y,i[2]=Ts.z,i[6]=Ba.z,i[10]=ni.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],x=n[6],p=n[10],g=n[14],_=n[3],v=n[7],M=n[11],P=n[15],T=i[0],C=i[4],O=i[8],q=i[12],b=i[1],S=i[5],V=i[9],A=i[13],R=i[2],I=i[6],y=i[10],U=i[14],F=i[3],Z=i[7],st=i[11],mt=i[15];return r[0]=o*T+a*b+l*R+c*F,r[4]=o*C+a*S+l*I+c*Z,r[8]=o*O+a*V+l*y+c*st,r[12]=o*q+a*A+l*U+c*mt,r[1]=h*T+d*b+u*R+f*F,r[5]=h*C+d*S+u*I+f*Z,r[9]=h*O+d*V+u*y+f*st,r[13]=h*q+d*A+u*U+f*mt,r[2]=m*T+x*b+p*R+g*F,r[6]=m*C+x*S+p*I+g*Z,r[10]=m*O+x*V+p*y+g*st,r[14]=m*q+x*A+p*U+g*mt,r[3]=_*T+v*b+M*R+P*F,r[7]=_*C+v*S+M*I+P*Z,r[11]=_*O+v*V+M*y+P*st,r[15]=_*q+v*A+M*U+P*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],x=t[7],p=t[11],g=t[15];return m*(+r*l*d-i*c*d-r*a*u+n*c*u+i*a*f-n*l*f)+x*(+e*l*f-e*c*u+r*o*u-i*o*f+i*c*h-r*l*h)+p*(+e*c*d-e*a*f-r*o*d+n*o*f+r*a*h-n*c*h)+g*(-i*a*h-e*l*d+e*a*u+i*o*d-n*o*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],x=t[13],p=t[14],g=t[15],_=d*p*c-x*u*c+x*l*f-a*p*f-d*l*g+a*u*g,v=m*u*c-h*p*c-m*l*f+o*p*f+h*l*g-o*u*g,M=h*x*c-m*d*c+m*a*f-o*x*f-h*a*g+o*d*g,P=m*d*l-h*x*l-m*a*u+o*x*u+h*a*p-o*d*p,T=e*_+n*v+i*M+r*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return t[0]=_*C,t[1]=(x*u*r-d*p*r-x*i*f+n*p*f+d*i*g-n*u*g)*C,t[2]=(a*p*r-x*l*r+x*i*c-n*p*c-a*i*g+n*l*g)*C,t[3]=(d*l*r-a*u*r-d*i*c+n*u*c+a*i*f-n*l*f)*C,t[4]=v*C,t[5]=(h*p*r-m*u*r+m*i*f-e*p*f-h*i*g+e*u*g)*C,t[6]=(m*l*r-o*p*r-m*i*c+e*p*c+o*i*g-e*l*g)*C,t[7]=(o*u*r-h*l*r+h*i*c-e*u*c-o*i*f+e*l*f)*C,t[8]=M*C,t[9]=(m*d*r-h*x*r-m*n*f+e*x*f+h*n*g-e*d*g)*C,t[10]=(o*x*r-m*a*r+m*n*c-e*x*c-o*n*g+e*a*g)*C,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*f-e*a*f)*C,t[12]=P*C,t[13]=(h*x*i-m*d*i+m*n*u-e*x*u-h*n*p+e*d*p)*C,t[14]=(m*a*i-o*x*i-m*n*l+e*x*l+o*n*p-e*a*p)*C,t[15]=(o*d*i-h*a*i+h*n*l-e*d*l-o*n*u+e*a*u)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,m=r*d,x=o*h,p=o*d,g=a*d,_=l*c,v=l*h,M=l*d,P=n.x,T=n.y,C=n.z;return i[0]=(1-(x+g))*P,i[1]=(f+M)*P,i[2]=(m-v)*P,i[3]=0,i[4]=(f-M)*T,i[5]=(1-(u+g))*T,i[6]=(p+_)*T,i[7]=0,i[8]=(m+v)*C,i[9]=(p-_)*C,i[10]=(1-(u+x))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Ir.set(i[0],i[1],i[2]).length();const o=Ir.set(i[4],i[5],i[6]).length(),a=Ir.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Si.copy(this);const c=1/r,h=1/o,d=1/a;return Si.elements[0]*=c,Si.elements[1]*=c,Si.elements[2]*=c,Si.elements[4]*=h,Si.elements[5]*=h,Si.elements[6]*=h,Si.elements[8]*=d,Si.elements[9]*=d,Si.elements[10]*=d,e.setFromRotationMatrix(Si),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=xs){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let f,m;if(a===xs)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===jl)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=xs){const l=this.elements,c=1/(e-t),h=1/(n-i),d=1/(o-r),u=(e+t)*c,f=(n+i)*h;let m,x;if(a===xs)m=(o+r)*d,x=-2*d;else if(a===jl)m=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ir=new B,Si=new Ge,yg=new B(0,0,0),_g=new B(1,1,1),Ts=new B,Ba=new B,ni=new B,Td=new Ge,Ad=new $i;class gi{constructor(t=0,e=0,n=0,i=gi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ln(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ln(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ln(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ln(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ln(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ln(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Td.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Td,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ad.setFromEuler(this),this.setFromQuaternion(Ad,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gi.DEFAULT_ORDER="XYZ";class zu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Mg=0;const Cd=new B,Dr=new $i,is=new Ge,ka=new B,Fo=new B,wg=new B,Sg=new $i,Rd=new B(1,0,0),Pd=new B(0,1,0),Ld=new B(0,0,1),zd={type:"added"},bg={type:"removed"},Nr={type:"childadded",child:null},Oc={type:"childremoved",child:null};class rn extends yo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mg++}),this.uuid=ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const t=new B,e=new gi,n=new $i,i=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ge},normalMatrix:{value:new Re}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Dr.setFromAxisAngle(t,e),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(t,e){return Dr.setFromAxisAngle(t,e),this.quaternion.premultiply(Dr),this}rotateX(t){return this.rotateOnAxis(Rd,t)}rotateY(t){return this.rotateOnAxis(Pd,t)}rotateZ(t){return this.rotateOnAxis(Ld,t)}translateOnAxis(t,e){return Cd.copy(t).applyQuaternion(this.quaternion),this.position.add(Cd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Rd,t)}translateY(t){return this.translateOnAxis(Pd,t)}translateZ(t){return this.translateOnAxis(Ld,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(is.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ka.copy(t):ka.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?is.lookAt(Fo,ka,this.up):is.lookAt(ka,Fo,this.up),this.quaternion.setFromRotationMatrix(is),i&&(is.extractRotation(i.matrixWorld),Dr.setFromRotationMatrix(is),this.quaternion.premultiply(Dr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zd),Nr.child=t,this.dispatchEvent(Nr),Nr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bg),Oc.child=t,this.dispatchEvent(Oc),Oc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),is.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),is.multiply(t.parent.matrixWorld)),t.applyMatrix4(is),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zd),Nr.child=t,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,t,wg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,Sg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}rn.DEFAULT_UP=new B(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bi=new B,ss=new B,Bc=new B,rs=new B,Ur=new B,Fr=new B,Id=new B,kc=new B,Gc=new B,Hc=new B,Vc=new Je,Wc=new Je,qc=new Je;class li{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),bi.subVectors(t,e),i.cross(bi);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){bi.subVectors(i,e),ss.subVectors(n,e),Bc.subVectors(t,e);const o=bi.dot(bi),a=bi.dot(ss),l=bi.dot(Bc),c=ss.dot(ss),h=ss.dot(Bc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,m=(o*h-a*l)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,rs)===null?!1:rs.x>=0&&rs.y>=0&&rs.x+rs.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,rs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,rs.x),l.addScaledVector(o,rs.y),l.addScaledVector(a,rs.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Vc.setScalar(0),Wc.setScalar(0),qc.setScalar(0),Vc.fromBufferAttribute(t,e),Wc.fromBufferAttribute(t,n),qc.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Vc,r.x),o.addScaledVector(Wc,r.y),o.addScaledVector(qc,r.z),o}static isFrontFacing(t,e,n,i){return bi.subVectors(n,e),ss.subVectors(t,e),bi.cross(ss).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bi.subVectors(this.c,this.b),ss.subVectors(this.a,this.b),bi.cross(ss).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return li.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return li.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return li.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return li.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return li.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Ur.subVectors(i,n),Fr.subVectors(r,n),kc.subVectors(t,n);const l=Ur.dot(kc),c=Fr.dot(kc);if(l<=0&&c<=0)return e.copy(n);Gc.subVectors(t,i);const h=Ur.dot(Gc),d=Fr.dot(Gc);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ur,o);Hc.subVectors(t,r);const f=Ur.dot(Hc),m=Fr.dot(Hc);if(m>=0&&f<=m)return e.copy(r);const x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Fr,a);const p=h*m-f*d;if(p<=0&&d-h>=0&&f-m>=0)return Id.subVectors(r,i),a=(d-h)/(d-h+(f-m)),e.copy(i).addScaledVector(Id,a);const g=1/(p+x+u);return o=x*g,a=u*g,e.copy(n).addScaledVector(Ur,o).addScaledVector(Fr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const jp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},As={h:0,s:0,l:0},Ga={h:0,s:0,l:0};function Xc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Zn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ve.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Ve.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ve.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Ve.workingColorSpace){if(t=ag(t,1),e=Ln(e,0,1),n=Ln(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Xc(o,r,t+1/3),this.g=Xc(o,r,t),this.b=Xc(o,r,t-1/3)}return Ve.toWorkingColorSpace(this,i),this}setStyle(t,e=Zn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Zn){const n=jp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ro(t.r),this.g=ro(t.g),this.b=ro(t.b),this}copyLinearToSRGB(t){return this.r=Pc(t.r),this.g=Pc(t.g),this.b=Pc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Zn){return Ve.fromWorkingColorSpace(Fn.copy(this),t),Math.round(Ln(Fn.r*255,0,255))*65536+Math.round(Ln(Fn.g*255,0,255))*256+Math.round(Ln(Fn.b*255,0,255))}getHexString(t=Zn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ve.workingColorSpace){Ve.fromWorkingColorSpace(Fn.copy(this),e);const n=Fn.r,i=Fn.g,r=Fn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ve.workingColorSpace){return Ve.fromWorkingColorSpace(Fn.copy(this),e),t.r=Fn.r,t.g=Fn.g,t.b=Fn.b,t}getStyle(t=Zn){Ve.fromWorkingColorSpace(Fn.copy(this),t);const e=Fn.r,n=Fn.g,i=Fn.b;return t!==Zn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(As),this.setHSL(As.h+t,As.s+e,As.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(As),t.getHSL(Ga);const n=Cc(As.h,Ga.h,e),i=Cc(As.s,Ga.s,e),r=Cc(As.l,Ga.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new Vt;Vt.NAMES=jp;let Eg=0,Ws=class extends yo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=ys(),this.name="",this.type="Material",this.blending=mr,this.side=Hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ah,this.blendDst=Ch,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_d,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cr,this.stencilZFail=Cr,this.stencilZPass=Cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mr&&(n.blending=this.blending),this.side!==Hs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ah&&(n.blendSrc=this.blendSrc),this.blendDst!==Ch&&(n.blendDst=this.blendDst),this.blendEquation!==cr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ho&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_d&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Cr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Cr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}};class De extends Ws{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=Ap,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xn=new B,Ha=new bt;class un{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=uu,this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ha.fromBufferAttribute(this,e),Ha.applyMatrix3(t),this.setXY(e,Ha.x,Ha.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.applyMatrix3(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.applyMatrix4(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.applyNormalMatrix(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.transformDirection(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Vi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ke(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array),i=Ke(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array),i=Ke(i,this.array),r=Ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==uu&&(t.usage=this.usage),t}}class $p extends un{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Kp extends un{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Le extends un{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Tg=0;const di=new Ge,Yc=new rn,Or=new B,ii=new vr,Oo=new vr,Pn=new B;class Qe extends yo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=ys(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qp(t)?Kp:$p)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Re().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,e,n){return di.makeTranslation(t,e,n),this.applyMatrix4(di),this}scale(t,e,n){return di.makeScale(t,e,n),this.applyMatrix4(di),this}lookAt(t){return Yc.lookAt(t),Yc.updateMatrix(),this.applyMatrix4(Yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Le(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];ii.setFromBufferAttribute(r),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const n=this.boundingSphere.center;if(ii.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Oo.setFromBufferAttribute(a),this.morphTargetsRelative?(Pn.addVectors(ii.min,Oo.min),ii.expandByPoint(Pn),Pn.addVectors(ii.max,Oo.max),ii.expandByPoint(Pn)):(ii.expandByPoint(Oo.min),ii.expandByPoint(Oo.max))}ii.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Pn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Pn));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Pn.fromBufferAttribute(a,c),l&&(Or.fromBufferAttribute(t,c),Pn.add(Or)),i=Math.max(i,n.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<n.count;O++)a[O]=new B,l[O]=new B;const c=new B,h=new B,d=new B,u=new bt,f=new bt,m=new bt,x=new B,p=new B;function g(O,q,b){c.fromBufferAttribute(n,O),h.fromBufferAttribute(n,q),d.fromBufferAttribute(n,b),u.fromBufferAttribute(r,O),f.fromBufferAttribute(r,q),m.fromBufferAttribute(r,b),h.sub(c),d.sub(c),f.sub(u),m.sub(u);const S=1/(f.x*m.y-m.x*f.y);isFinite(S)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(S),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(S),a[O].add(x),a[q].add(x),a[b].add(x),l[O].add(p),l[q].add(p),l[b].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let O=0,q=_.length;O<q;++O){const b=_[O],S=b.start,V=b.count;for(let A=S,R=S+V;A<R;A+=3)g(t.getX(A+0),t.getX(A+1),t.getX(A+2))}const v=new B,M=new B,P=new B,T=new B;function C(O){P.fromBufferAttribute(i,O),T.copy(P);const q=a[O];v.copy(q),v.sub(P.multiplyScalar(P.dot(q))).normalize(),M.crossVectors(T,q);const S=M.dot(l[O])<0?-1:1;o.setXYZW(O,v.x,v.y,v.z,S)}for(let O=0,q=_.length;O<q;++O){const b=_[O],S=b.start,V=b.count;for(let A=S,R=S+V;A<R;A+=3)C(t.getX(A+0)),C(t.getX(A+1)),C(t.getX(A+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new un(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new B,r=new B,o=new B,a=new B,l=new B,c=new B,h=new B,d=new B;if(t)for(let u=0,f=t.count;u<f;u+=3){const m=t.getX(u+0),x=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pn.fromBufferAttribute(t,e),Pn.normalize(),t.setXYZ(e,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,m=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let g=0;g<h;g++)u[m++]=c[f++]}return new un(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Qe,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dd=new Ge,er=new cc,Va=new yr,Nd=new B,Wa=new B,qa=new B,Xa=new B,jc=new B,Ya=new B,Ud=new B,ja=new B;class ye extends rn{constructor(t=new Qe,e=new De){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Ya.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(jc.fromBufferAttribute(d,t),o?Ya.addScaledVector(jc,h):Ya.addScaledVector(jc.sub(e),h))}e.add(Ya)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Va.copy(n.boundingSphere),Va.applyMatrix4(r),er.copy(t.ray).recast(t.near),!(Va.containsPoint(er.origin)===!1&&(er.intersectSphere(Va,Nd)===null||er.origin.distanceToSquared(Nd)>(t.far-t.near)**2))&&(Dd.copy(r).invert(),er.copy(t.ray).applyMatrix4(Dd),!(n.boundingBox!==null&&er.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,er)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){const p=u[m],g=o[p.materialIndex],_=Math.max(p.start,f.start),v=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let M=_,P=v;M<P;M+=3){const T=a.getX(M),C=a.getX(M+1),O=a.getX(M+2);i=$a(this,g,t,n,c,h,d,T,C,O),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=m,g=x;p<g;p+=3){const _=a.getX(p),v=a.getX(p+1),M=a.getX(p+2);i=$a(this,o,t,n,c,h,d,_,v,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){const p=u[m],g=o[p.materialIndex],_=Math.max(p.start,f.start),v=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let M=_,P=v;M<P;M+=3){const T=M,C=M+1,O=M+2;i=$a(this,g,t,n,c,h,d,T,C,O),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=m,g=x;p<g;p+=3){const _=p,v=p+1,M=p+2;i=$a(this,o,t,n,c,h,d,_,v,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Ag(s,t,e,n,i,r,o,a){let l;if(t.side===Yn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Hs,a),l===null)return null;ja.copy(a),ja.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ja);return c<e.near||c>e.far?null:{distance:c,point:ja.clone(),object:s}}function $a(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Wa),s.getVertexPosition(l,qa),s.getVertexPosition(c,Xa);const h=Ag(s,t,e,n,Wa,qa,Xa,Ud);if(h){const d=new B;li.getBarycoord(Ud,Wa,qa,Xa,d),i&&(h.uv=li.getInterpolatedAttribute(i,a,l,c,d,new bt)),r&&(h.uv1=li.getInterpolatedAttribute(r,a,l,c,d,new bt)),o&&(h.normal=li.getInterpolatedAttribute(o,a,l,c,d,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new B,materialIndex:0};li.getNormal(Wa,qa,Xa,u.normal),h.face=u,h.barycoord=d}return h}class ge extends Qe{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Le(c,3)),this.setAttribute("normal",new Le(h,3)),this.setAttribute("uv",new Le(d,2));function m(x,p,g,_,v,M,P,T,C,O,q){const b=M/C,S=P/O,V=M/2,A=P/2,R=T/2,I=C+1,y=O+1;let U=0,F=0;const Z=new B;for(let st=0;st<y;st++){const mt=st*S-A;for(let Mt=0;Mt<I;Mt++){const Yt=Mt*b-V;Z[x]=Yt*_,Z[p]=mt*v,Z[g]=R,c.push(Z.x,Z.y,Z.z),Z[x]=0,Z[p]=0,Z[g]=T>0?1:-1,h.push(Z.x,Z.y,Z.z),d.push(Mt/C),d.push(1-st/O),U+=1}}for(let st=0;st<O;st++)for(let mt=0;mt<C;mt++){const Mt=u+mt+I*st,Yt=u+mt+I*(st+1),ct=u+(mt+1)+I*(st+1),dt=u+(mt+1)+I*st;l.push(Mt,Yt,dt),l.push(Yt,ct,dt),F+=6}a.addGroup(f,F,q),f+=F,u+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ge(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function go(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Wn(s){const t={};for(let e=0;e<s.length;e++){const n=go(s[e]);for(const i in n)t[i]=n[i]}return t}function Cg(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Zp(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ve.workingColorSpace}const xo={clone:go,merge:Wn};var Rg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends Ws{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rg,this.fragmentShader=Pg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=go(t.uniforms),this.uniformsGroups=Cg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Jp extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=xs}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Cs=new B,Fd=new bt,Od=new bt;class Jn extends Jp{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=$l*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ol*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $l*2*Math.atan(Math.tan(Ol*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Cs.x,Cs.y).multiplyScalar(-t/Cs.z),Cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cs.x,Cs.y).multiplyScalar(-t/Cs.z)}getViewSize(t,e){return this.getViewBounds(t,Fd,Od),e.subVectors(Od,Fd)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ol*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Br=-90,kr=1;class Lg extends rn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Jn(Br,kr,t,e);i.layers=this.layers,this.add(i);const r=new Jn(Br,kr,t,e);r.layers=this.layers,this.add(r);const o=new Jn(Br,kr,t,e);o.layers=this.layers,this.add(o);const a=new Jn(Br,kr,t,e);a.layers=this.layers,this.add(a);const l=new Jn(Br,kr,t,e);l.layers=this.layers,this.add(l);const c=new Jn(Br,kr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===xs)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===jl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Qp extends Gn{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:uo,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class zg extends mi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Qp(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ai}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ge(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:go(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yn,blending:vs});r.uniforms.tEquirect.value=e;const o=new ye(i,r),a=e.minFilter;return e.minFilter===fr&&(e.minFilter=ai),new Lg(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const $c=new B,Ig=new B,Dg=new Re;let Ns=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=$c.subVectors(n,e).cross(Ig.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta($c),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Dg.getNormalMatrix(t),i=this.coplanarPoint($c).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const nr=new yr,Ka=new B;class Iu{constructor(t=new Ns,e=new Ns,n=new Ns,i=new Ns,r=new Ns,o=new Ns){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=xs){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],f=i[8],m=i[9],x=i[10],p=i[11],g=i[12],_=i[13],v=i[14],M=i[15];if(n[0].setComponents(l-r,u-c,p-f,M-g).normalize(),n[1].setComponents(l+r,u+c,p+f,M+g).normalize(),n[2].setComponents(l+o,u+h,p+m,M+_).normalize(),n[3].setComponents(l-o,u-h,p-m,M-_).normalize(),n[4].setComponents(l-a,u-d,p-x,M-v).normalize(),e===xs)n[5].setComponents(l+a,u+d,p+x,M+v).normalize();else if(e===jl)n[5].setComponents(a,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),nr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),nr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(nr)}intersectsSprite(t){return nr.center.set(0,0,0),nr.radius=.7071067811865476,nr.applyMatrix4(t.matrixWorld),this.intersectsSphere(nr)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ka.x=i.normal.x>0?t.max.x:t.min.x,Ka.y=i.normal.y>0?t.max.y:t.min.y,Ka.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ka)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function t0(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Ng(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){const m=d[u],x=d[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){const x=d[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class hn extends Qe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],m=[],x=[],p=[];for(let g=0;g<h;g++){const _=g*u-o;for(let v=0;v<c;v++){const M=v*d-r;m.push(M,-_,0),x.push(0,0,1),p.push(v/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){const v=_+c*g,M=_+c*(g+1),P=_+1+c*(g+1),T=_+1+c*g;f.push(v,M,T),f.push(M,P,T)}this.setIndex(f),this.setAttribute("position",new Le(m,3)),this.setAttribute("normal",new Le(x,3)),this.setAttribute("uv",new Le(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ug=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fg=`#ifdef USE_ALPHAHASH
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
#endif`,Og=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hg=`#ifdef USE_AOMAP
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
#endif`,Vg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wg=`#ifdef USE_BATCHING
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
#endif`,qg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$g=`#ifdef USE_IRIDESCENCE
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
#endif`,Kg=`#ifdef USE_BUMPMAP
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
#endif`,Zg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ex=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ix=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,rx=`#define PI 3.141592653589793
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
} // validated`,ox=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ax=`vec3 transformedNormal = objectNormal;
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
#endif`,lx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ux=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dx="gl_FragColor = linearToOutputTexel( gl_FragColor );",fx=`
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
}`,px=`#ifdef USE_ENVMAP
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
#endif`,mx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gx=`#ifdef USE_ENVMAP
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
#endif`,xx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vx=`#ifdef USE_ENVMAP
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
#endif`,yx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_x=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sx=`#ifdef USE_GRADIENTMAP
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
}`,bx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ex=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ax=`uniform bool receiveShadow;
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
#endif`,Cx=`#ifdef USE_ENVMAP
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
#endif`,Rx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Px=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ix=`PhysicalMaterial material;
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
#endif`,Dx=`struct PhysicalMaterial {
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
}`,Nx=`
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
#endif`,Ux=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ox=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qx=`#if defined( USE_POINTS_UV )
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
#endif`,Xx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$x=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zx=`#ifdef USE_MORPHTARGETS
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
#endif`,Jx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ev=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sv=`#ifdef USE_NORMALMAP
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
#endif`,rv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ov=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,av=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_v=`float getShadowMask() {
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
}`,Mv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wv=`#ifdef USE_SKINNING
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
#endif`,Sv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bv=`#ifdef USE_SKINNING
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
#endif`,Ev=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Av=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rv=`#ifdef USE_TRANSMISSION
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
#endif`,Pv=`#ifdef USE_TRANSMISSION
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
#endif`,Lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Nv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Uv=`uniform sampler2D t2D;
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
}`,Fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ov=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gv=`#include <common>
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
}`,Hv=`#if DEPTH_PACKING == 3200
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
}`,Vv=`#define DISTANCE
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
}`,Wv=`#define DISTANCE
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
}`,qv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yv=`uniform float scale;
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
}`,jv=`uniform vec3 diffuse;
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
}`,$v=`#include <common>
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
}`,Kv=`uniform vec3 diffuse;
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
}`,Zv=`#define LAMBERT
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
}`,Jv=`#define LAMBERT
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
}`,Qv=`#define MATCAP
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
}`,ty=`#define MATCAP
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
}`,ey=`#define NORMAL
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
}`,ny=`#define NORMAL
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
}`,iy=`#define PHONG
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
}`,sy=`#define PHONG
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
}`,ry=`#define STANDARD
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
}`,oy=`#define STANDARD
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
}`,ay=`#define TOON
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
}`,ly=`#define TOON
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
}`,cy=`uniform float size;
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
}`,hy=`uniform vec3 diffuse;
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
}`,uy=`#include <common>
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
}`,dy=`uniform vec3 color;
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
}`,fy=`uniform float rotation;
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
}`,py=`uniform vec3 diffuse;
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
}`,Ce={alphahash_fragment:Ug,alphahash_pars_fragment:Fg,alphamap_fragment:Og,alphamap_pars_fragment:Bg,alphatest_fragment:kg,alphatest_pars_fragment:Gg,aomap_fragment:Hg,aomap_pars_fragment:Vg,batching_pars_vertex:Wg,batching_vertex:qg,begin_vertex:Xg,beginnormal_vertex:Yg,bsdfs:jg,iridescence_fragment:$g,bumpmap_pars_fragment:Kg,clipping_planes_fragment:Zg,clipping_planes_pars_fragment:Jg,clipping_planes_pars_vertex:Qg,clipping_planes_vertex:tx,color_fragment:ex,color_pars_fragment:nx,color_pars_vertex:ix,color_vertex:sx,common:rx,cube_uv_reflection_fragment:ox,defaultnormal_vertex:ax,displacementmap_pars_vertex:lx,displacementmap_vertex:cx,emissivemap_fragment:hx,emissivemap_pars_fragment:ux,colorspace_fragment:dx,colorspace_pars_fragment:fx,envmap_fragment:px,envmap_common_pars_fragment:mx,envmap_pars_fragment:gx,envmap_pars_vertex:xx,envmap_physical_pars_fragment:Cx,envmap_vertex:vx,fog_vertex:yx,fog_pars_vertex:_x,fog_fragment:Mx,fog_pars_fragment:wx,gradientmap_pars_fragment:Sx,lightmap_pars_fragment:bx,lights_lambert_fragment:Ex,lights_lambert_pars_fragment:Tx,lights_pars_begin:Ax,lights_toon_fragment:Rx,lights_toon_pars_fragment:Px,lights_phong_fragment:Lx,lights_phong_pars_fragment:zx,lights_physical_fragment:Ix,lights_physical_pars_fragment:Dx,lights_fragment_begin:Nx,lights_fragment_maps:Ux,lights_fragment_end:Fx,logdepthbuf_fragment:Ox,logdepthbuf_pars_fragment:Bx,logdepthbuf_pars_vertex:kx,logdepthbuf_vertex:Gx,map_fragment:Hx,map_pars_fragment:Vx,map_particle_fragment:Wx,map_particle_pars_fragment:qx,metalnessmap_fragment:Xx,metalnessmap_pars_fragment:Yx,morphinstance_vertex:jx,morphcolor_vertex:$x,morphnormal_vertex:Kx,morphtarget_pars_vertex:Zx,morphtarget_vertex:Jx,normal_fragment_begin:Qx,normal_fragment_maps:tv,normal_pars_fragment:ev,normal_pars_vertex:nv,normal_vertex:iv,normalmap_pars_fragment:sv,clearcoat_normal_fragment_begin:rv,clearcoat_normal_fragment_maps:ov,clearcoat_pars_fragment:av,iridescence_pars_fragment:lv,opaque_fragment:cv,packing:hv,premultiplied_alpha_fragment:uv,project_vertex:dv,dithering_fragment:fv,dithering_pars_fragment:pv,roughnessmap_fragment:mv,roughnessmap_pars_fragment:gv,shadowmap_pars_fragment:xv,shadowmap_pars_vertex:vv,shadowmap_vertex:yv,shadowmask_pars_fragment:_v,skinbase_vertex:Mv,skinning_pars_vertex:wv,skinning_vertex:Sv,skinnormal_vertex:bv,specularmap_fragment:Ev,specularmap_pars_fragment:Tv,tonemapping_fragment:Av,tonemapping_pars_fragment:Cv,transmission_fragment:Rv,transmission_pars_fragment:Pv,uv_pars_fragment:Lv,uv_pars_vertex:zv,uv_vertex:Iv,worldpos_vertex:Dv,background_vert:Nv,background_frag:Uv,backgroundCube_vert:Fv,backgroundCube_frag:Ov,cube_vert:Bv,cube_frag:kv,depth_vert:Gv,depth_frag:Hv,distanceRGBA_vert:Vv,distanceRGBA_frag:Wv,equirect_vert:qv,equirect_frag:Xv,linedashed_vert:Yv,linedashed_frag:jv,meshbasic_vert:$v,meshbasic_frag:Kv,meshlambert_vert:Zv,meshlambert_frag:Jv,meshmatcap_vert:Qv,meshmatcap_frag:ty,meshnormal_vert:ey,meshnormal_frag:ny,meshphong_vert:iy,meshphong_frag:sy,meshphysical_vert:ry,meshphysical_frag:oy,meshtoon_vert:ay,meshtoon_frag:ly,points_vert:cy,points_frag:hy,shadow_vert:uy,shadow_frag:dy,sprite_vert:fy,sprite_frag:py},Ht={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Re}},envmap:{envMap:{value:null},envMapRotation:{value:new Re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Re},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0},uvTransform:{value:new Re}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}}},Hi={basic:{uniforms:Wn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:Wn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:Wn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:Wn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:Wn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:Wn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:Wn([Ht.points,Ht.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:Wn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:Wn([Ht.common,Ht.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:Wn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:Wn([Ht.sprite,Ht.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new Re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Re}},vertexShader:Ce.backgroundCube_vert,fragmentShader:Ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distanceRGBA:{uniforms:Wn([Ht.common,Ht.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distanceRGBA_vert,fragmentShader:Ce.distanceRGBA_frag},shadow:{uniforms:Wn([Ht.lights,Ht.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};Hi.physical={uniforms:Wn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Re},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Re},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Re},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Re},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Re},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Re}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};const Za={r:0,b:0,g:0},ir=new gi,my=new Ge;function gy(s,t,e,n,i,r,o){const a=new Vt(0);let l=r===!0?0:1,c,h,d=null,u=0,f=null;function m(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?e:t).get(v)),v}function x(_){let v=!1;const M=m(_);M===null?g(a,l):M&&M.isColor&&(g(M,1),v=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(_,v){const M=m(v);M&&(M.isCubeTexture||M.mapping===oc)?(h===void 0&&(h=new ye(new ge(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:go(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ir.copy(v.backgroundRotation),ir.x*=-1,ir.y*=-1,ir.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ir.y*=-1,ir.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(my.makeRotationFromEuler(ir)),h.material.toneMapped=Ve.getTransfer(M.colorSpace)!==en,(d!==M||u!==M.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=M,u=M.version,f=s.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new ye(new hn(2,2),new bn({name:"BackgroundMaterial",uniforms:go(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:Hs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Ve.getTransfer(M.colorSpace)!==en,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||u!==M.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,d=M,u=M.version,f=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function g(_,v){_.getRGB(Za,Zp(s)),n.buffers.color.setClear(Za.r,Za.g,Za.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),l=v,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,g(a,l)},render:x,addToRenderList:p}}function xy(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,o=!1;function a(b,S,V,A,R){let I=!1;const y=d(A,V,S);r!==y&&(r=y,c(r.object)),I=f(b,A,V,R),I&&m(b,A,V,R),R!==null&&t.update(R,s.ELEMENT_ARRAY_BUFFER),(I||o)&&(o=!1,M(b,S,V,A),R!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(R).buffer))}function l(){return s.createVertexArray()}function c(b){return s.bindVertexArray(b)}function h(b){return s.deleteVertexArray(b)}function d(b,S,V){const A=V.wireframe===!0;let R=n[b.id];R===void 0&&(R={},n[b.id]=R);let I=R[S.id];I===void 0&&(I={},R[S.id]=I);let y=I[A];return y===void 0&&(y=u(l()),I[A]=y),y}function u(b){const S=[],V=[],A=[];for(let R=0;R<e;R++)S[R]=0,V[R]=0,A[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:V,attributeDivisors:A,object:b,attributes:{},index:null}}function f(b,S,V,A){const R=r.attributes,I=S.attributes;let y=0;const U=V.getAttributes();for(const F in U)if(U[F].location>=0){const st=R[F];let mt=I[F];if(mt===void 0&&(F==="instanceMatrix"&&b.instanceMatrix&&(mt=b.instanceMatrix),F==="instanceColor"&&b.instanceColor&&(mt=b.instanceColor)),st===void 0||st.attribute!==mt||mt&&st.data!==mt.data)return!0;y++}return r.attributesNum!==y||r.index!==A}function m(b,S,V,A){const R={},I=S.attributes;let y=0;const U=V.getAttributes();for(const F in U)if(U[F].location>=0){let st=I[F];st===void 0&&(F==="instanceMatrix"&&b.instanceMatrix&&(st=b.instanceMatrix),F==="instanceColor"&&b.instanceColor&&(st=b.instanceColor));const mt={};mt.attribute=st,st&&st.data&&(mt.data=st.data),R[F]=mt,y++}r.attributes=R,r.attributesNum=y,r.index=A}function x(){const b=r.newAttributes;for(let S=0,V=b.length;S<V;S++)b[S]=0}function p(b){g(b,0)}function g(b,S){const V=r.newAttributes,A=r.enabledAttributes,R=r.attributeDivisors;V[b]=1,A[b]===0&&(s.enableVertexAttribArray(b),A[b]=1),R[b]!==S&&(s.vertexAttribDivisor(b,S),R[b]=S)}function _(){const b=r.newAttributes,S=r.enabledAttributes;for(let V=0,A=S.length;V<A;V++)S[V]!==b[V]&&(s.disableVertexAttribArray(V),S[V]=0)}function v(b,S,V,A,R,I,y){y===!0?s.vertexAttribIPointer(b,S,V,R,I):s.vertexAttribPointer(b,S,V,A,R,I)}function M(b,S,V,A){x();const R=A.attributes,I=V.getAttributes(),y=S.defaultAttributeValues;for(const U in I){const F=I[U];if(F.location>=0){let Z=R[U];if(Z===void 0&&(U==="instanceMatrix"&&b.instanceMatrix&&(Z=b.instanceMatrix),U==="instanceColor"&&b.instanceColor&&(Z=b.instanceColor)),Z!==void 0){const st=Z.normalized,mt=Z.itemSize,Mt=t.get(Z);if(Mt===void 0)continue;const Yt=Mt.buffer,ct=Mt.type,dt=Mt.bytesPerElement,Pt=ct===s.INT||ct===s.UNSIGNED_INT||Z.gpuType===Eu;if(Z.isInterleavedBufferAttribute){const Tt=Z.data,Qt=Tt.stride,Et=Z.offset;if(Tt.isInstancedInterleavedBuffer){for(let zt=0;zt<F.locationSize;zt++)g(F.location+zt,Tt.meshPerAttribute);b.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let zt=0;zt<F.locationSize;zt++)p(F.location+zt);s.bindBuffer(s.ARRAY_BUFFER,Yt);for(let zt=0;zt<F.locationSize;zt++)v(F.location+zt,mt/F.locationSize,ct,st,Qt*dt,(Et+mt/F.locationSize*zt)*dt,Pt)}else{if(Z.isInstancedBufferAttribute){for(let Tt=0;Tt<F.locationSize;Tt++)g(F.location+Tt,Z.meshPerAttribute);b.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Tt=0;Tt<F.locationSize;Tt++)p(F.location+Tt);s.bindBuffer(s.ARRAY_BUFFER,Yt);for(let Tt=0;Tt<F.locationSize;Tt++)v(F.location+Tt,mt/F.locationSize,ct,st,mt*dt,mt/F.locationSize*Tt*dt,Pt)}}else if(y!==void 0){const st=y[U];if(st!==void 0)switch(st.length){case 2:s.vertexAttrib2fv(F.location,st);break;case 3:s.vertexAttrib3fv(F.location,st);break;case 4:s.vertexAttrib4fv(F.location,st);break;default:s.vertexAttrib1fv(F.location,st)}}}}_()}function P(){O();for(const b in n){const S=n[b];for(const V in S){const A=S[V];for(const R in A)h(A[R].object),delete A[R];delete S[V]}delete n[b]}}function T(b){if(n[b.id]===void 0)return;const S=n[b.id];for(const V in S){const A=S[V];for(const R in A)h(A[R].object),delete A[R];delete S[V]}delete n[b.id]}function C(b){for(const S in n){const V=n[S];if(V[b.id]===void 0)continue;const A=V[b.id];for(const R in A)h(A[R].object),delete A[R];delete V[b.id]}}function O(){q(),o=!0,r!==i&&(r=i,c(r.object))}function q(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:O,resetDefaultState:q,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:p,disableUnusedAttributes:_}}function vy(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let m=0;m<d;m++)f+=h[m];e.update(f,n,1)}function l(c,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],h[m],u[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let m=0;for(let x=0;x<d;x++)m+=h[x];for(let x=0;x<u.length;x++)e.update(m,n,u[x])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function yy(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==Ri&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const O=C===Yi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==ji&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==qi&&!O)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){const C=t.get("EXT_clip_control");C.clipControlEXT(C.LOWER_LEFT_EXT,C.ZERO_TO_ONE_EXT)}const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=m>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:M,vertexTextures:P,maxSamples:T}}function _y(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Ns,a=new Re,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const m=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,g=s.get(d);if(!i||m===null||m.length===0||r&&!p)r?h(null):c();else{const _=r?0:n,v=_*4;let M=g.clippingState||null;l.value=M,M=h(m,u,v,f);for(let P=0;P!==v;++P)M[P]=e[P];g.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=l.value,m!==!0||p===null){const g=f+x*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<g)&&(p=new Float32Array(g));for(let v=0,M=f;v!==x;++v,M+=4)o.copy(d[v]).applyMatrix4(_,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function My(s){let t=new WeakMap;function e(o,a){return a===Uh?o.mapping=uo:a===Fh&&(o.mapping=fo),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Uh||a===Fh)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new zg(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Du extends Jp{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Qr=4,Bd=[.125,.215,.35,.446,.526,.582],hr=20,Kc=new Du,kd=new Vt;let Zc=null,Jc=0,Qc=0,th=!1;const lr=(1+Math.sqrt(5))/2,Gr=1/lr,Gd=[new B(-lr,Gr,0),new B(lr,Gr,0),new B(-Gr,0,lr),new B(Gr,0,lr),new B(0,lr,-Gr),new B(0,lr,Gr),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class Hd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Zc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Zc,Jc,Qc),this._renderer.xr.enabled=th,t.scissorTest=!1,Ja(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===uo||t.mapping===fo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:Yi,format:Ri,colorSpace:Vs,depthBuffer:!1},i=Vd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vd(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wy(r)),this._blurMaterial=Sy(r,t,e)}return i}_compileMaterial(t){const e=new ye(this._lodPlanes[0],t);this._renderer.compile(e,Kc)}_sceneToCubeUV(t,e,n,i){const a=new Jn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(kd),h.toneMapping=ks,h.autoClear=!1;const f=new De({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1}),m=new ye(new ge,f);let x=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,x=!0):(f.color.copy(kd),x=!0);for(let g=0;g<6;g++){const _=g%3;_===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):_===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const v=this._cubeSize;Ja(i,_*v,g>2?v:0,v,v),h.setRenderTarget(i),x&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===uo||t.mapping===fo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=qd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wd());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new ye(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ja(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Kc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Gd[(i-r-1)%Gd.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new ye(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*hr-1),x=r/m,p=isFinite(r)?1+Math.floor(h*x):hr;p>hr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${hr}`);const g=[];let _=0;for(let C=0;C<hr;++C){const O=C/x,q=Math.exp(-O*O/2);g.push(q),C===0?_+=q:C<p&&(_+=2*q)}for(let C=0;C<g.length;C++)g[C]=g[C]/_;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=g,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:v}=this;u.dTheta.value=m,u.mipInt.value=v-n;const M=this._sizeLods[i],P=3*M*(i>v-Qr?i-v+Qr:0),T=4*(this._cubeSize-M);Ja(e,P,T,3*M,2*M),l.setRenderTarget(e),l.render(d,Kc)}}function wy(s){const t=[],e=[],n=[];let i=s;const r=s-Qr+1+Bd.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Qr?l=Bd[o-s+Qr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,m=6,x=3,p=2,g=1,_=new Float32Array(x*m*f),v=new Float32Array(p*m*f),M=new Float32Array(g*m*f);for(let T=0;T<f;T++){const C=T%3*2/3-1,O=T>2?0:-1,q=[C,O,0,C+2/3,O,0,C+2/3,O+1,0,C,O,0,C+2/3,O+1,0,C,O+1,0];_.set(q,x*m*T),v.set(u,p*m*T);const b=[T,T,T,T,T,T];M.set(b,g*m*T)}const P=new Qe;P.setAttribute("position",new un(_,x)),P.setAttribute("uv",new un(v,p)),P.setAttribute("faceIndex",new un(M,g)),t.push(P),i>Qr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Vd(s,t,e){const n=new mi(s,t,e);return n.texture.mapping=oc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ja(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Sy(s,t,e){const n=new Float32Array(hr),i=new B(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Nu(),fragmentShader:`

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
		`,blending:vs,depthTest:!1,depthWrite:!1})}function Wd(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nu(),fragmentShader:`

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
		`,blending:vs,depthTest:!1,depthWrite:!1})}function qd(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vs,depthTest:!1,depthWrite:!1})}function Nu(){return`

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
	`}function by(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Uh||l===Fh,h=l===uo||l===fo;if(c||h){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Hd(s)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new Hd(s)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Ey(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Bl("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ty(s,t,e,n){const i={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const m in u.attributes)t.remove(u.attributes[m]);for(const m in u.morphAttributes){const x=u.morphAttributes[m];for(let p=0,g=x.length;p<g;p++)t.remove(x[p])}u.removeEventListener("dispose",o),delete i[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const m in u)t.update(u[m],s.ARRAY_BUFFER);const f=d.morphAttributes;for(const m in f){const x=f[m];for(let p=0,g=x.length;p<g;p++)t.update(x[p],s.ARRAY_BUFFER)}}function c(d){const u=[],f=d.index,m=d.attributes.position;let x=0;if(f!==null){const _=f.array;x=f.version;for(let v=0,M=_.length;v<M;v+=3){const P=_[v+0],T=_[v+1],C=_[v+2];u.push(P,T,T,C,C,P)}}else if(m!==void 0){const _=m.array;x=m.version;for(let v=0,M=_.length/3-1;v<M;v+=3){const P=v+0,T=v+1,C=v+2;u.push(P,T,T,C,C,P)}}else return;const p=new(qp(u)?Kp:$p)(u,1);p.version=x;const g=r.get(d);g&&t.remove(g),r.set(d,p)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Ay(s,t,e){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){s.drawElements(n,f,r,u*o),e.update(f,n,1)}function c(u,f,m){m!==0&&(s.drawElementsInstanced(n,f,r,u*o,m),e.update(f,n,m))}function h(u,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,m);let p=0;for(let g=0;g<m;g++)p+=f[g];e.update(p,n,1)}function d(u,f,m,x){if(m===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)c(u[g]/o,f[g],x[g]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,x,0,m);let g=0;for(let _=0;_<m;_++)g+=f[_];for(let _=0;_<x.length;_++)e.update(g,n,x[_])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Cy(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ry(s,t,e){const n=new WeakMap,i=new Je;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let b=function(){O.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var f=b;u!==void 0&&u.texture.dispose();const m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let M=0;m===!0&&(M=1),x===!0&&(M=2),p===!0&&(M=3);let P=a.attributes.position.count*M,T=1;P>t.maxTextureSize&&(T=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const C=new Float32Array(P*T*4*d),O=new Yp(C,P,T,d);O.type=qi,O.needsUpdate=!0;const q=M*4;for(let S=0;S<d;S++){const V=g[S],A=_[S],R=v[S],I=P*T*4*S;for(let y=0;y<V.count;y++){const U=y*q;m===!0&&(i.fromBufferAttribute(V,y),C[I+U+0]=i.x,C[I+U+1]=i.y,C[I+U+2]=i.z,C[I+U+3]=0),x===!0&&(i.fromBufferAttribute(A,y),C[I+U+4]=i.x,C[I+U+5]=i.y,C[I+U+6]=i.z,C[I+U+7]=0),p===!0&&(i.fromBufferAttribute(R,y),C[I+U+8]=i.x,C[I+U+9]=i.y,C[I+U+10]=i.z,C[I+U+11]=R.itemSize===4?i.w:1)}}u={count:d,texture:O,size:new bt(P,T)},n.set(a,u),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let m=0;for(let p=0;p<c.length;p++)m+=c[p];const x=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Py(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class e0 extends Gn{constructor(t,e,n,i,r,o,a,l,c,h=so){if(h!==so&&h!==mo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===so&&(n=gr),n===void 0&&h===mo&&(n=po),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Qn,this.minFilter=l!==void 0?l:Qn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const n0=new Gn,Xd=new e0(1,1),i0=new Yp,s0=new xg,r0=new Qp,Yd=[],jd=[],$d=new Float32Array(16),Kd=new Float32Array(9),Zd=new Float32Array(4);function _o(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Yd[i];if(r===void 0&&(r=new Float32Array(i),Yd[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function En(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Tn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function hc(s,t){let e=jd[t];e===void 0&&(e=new Int32Array(t),jd[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Ly(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function zy(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(En(e,t))return;s.uniform2fv(this.addr,t),Tn(e,t)}}function Iy(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(En(e,t))return;s.uniform3fv(this.addr,t),Tn(e,t)}}function Dy(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(En(e,t))return;s.uniform4fv(this.addr,t),Tn(e,t)}}function Ny(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(En(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Tn(e,t)}else{if(En(e,n))return;Zd.set(n),s.uniformMatrix2fv(this.addr,!1,Zd),Tn(e,n)}}function Uy(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(En(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Tn(e,t)}else{if(En(e,n))return;Kd.set(n),s.uniformMatrix3fv(this.addr,!1,Kd),Tn(e,n)}}function Fy(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(En(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Tn(e,t)}else{if(En(e,n))return;$d.set(n),s.uniformMatrix4fv(this.addr,!1,$d),Tn(e,n)}}function Oy(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function By(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(En(e,t))return;s.uniform2iv(this.addr,t),Tn(e,t)}}function ky(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(En(e,t))return;s.uniform3iv(this.addr,t),Tn(e,t)}}function Gy(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(En(e,t))return;s.uniform4iv(this.addr,t),Tn(e,t)}}function Hy(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Vy(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(En(e,t))return;s.uniform2uiv(this.addr,t),Tn(e,t)}}function Wy(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(En(e,t))return;s.uniform3uiv(this.addr,t),Tn(e,t)}}function qy(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(En(e,t))return;s.uniform4uiv(this.addr,t),Tn(e,t)}}function Xy(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Xd.compareFunction=Wp,r=Xd):r=n0,e.setTexture2D(t||r,i)}function Yy(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||s0,i)}function jy(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||r0,i)}function $y(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||i0,i)}function Ky(s){switch(s){case 5126:return Ly;case 35664:return zy;case 35665:return Iy;case 35666:return Dy;case 35674:return Ny;case 35675:return Uy;case 35676:return Fy;case 5124:case 35670:return Oy;case 35667:case 35671:return By;case 35668:case 35672:return ky;case 35669:case 35673:return Gy;case 5125:return Hy;case 36294:return Vy;case 36295:return Wy;case 36296:return qy;case 35678:case 36198:case 36298:case 36306:case 35682:return Xy;case 35679:case 36299:case 36307:return Yy;case 35680:case 36300:case 36308:case 36293:return jy;case 36289:case 36303:case 36311:case 36292:return $y}}function Zy(s,t){s.uniform1fv(this.addr,t)}function Jy(s,t){const e=_o(t,this.size,2);s.uniform2fv(this.addr,e)}function Qy(s,t){const e=_o(t,this.size,3);s.uniform3fv(this.addr,e)}function t_(s,t){const e=_o(t,this.size,4);s.uniform4fv(this.addr,e)}function e_(s,t){const e=_o(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function n_(s,t){const e=_o(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function i_(s,t){const e=_o(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function s_(s,t){s.uniform1iv(this.addr,t)}function r_(s,t){s.uniform2iv(this.addr,t)}function o_(s,t){s.uniform3iv(this.addr,t)}function a_(s,t){s.uniform4iv(this.addr,t)}function l_(s,t){s.uniform1uiv(this.addr,t)}function c_(s,t){s.uniform2uiv(this.addr,t)}function h_(s,t){s.uniform3uiv(this.addr,t)}function u_(s,t){s.uniform4uiv(this.addr,t)}function d_(s,t,e){const n=this.cache,i=t.length,r=hc(e,i);En(n,r)||(s.uniform1iv(this.addr,r),Tn(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||n0,r[o])}function f_(s,t,e){const n=this.cache,i=t.length,r=hc(e,i);En(n,r)||(s.uniform1iv(this.addr,r),Tn(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||s0,r[o])}function p_(s,t,e){const n=this.cache,i=t.length,r=hc(e,i);En(n,r)||(s.uniform1iv(this.addr,r),Tn(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||r0,r[o])}function m_(s,t,e){const n=this.cache,i=t.length,r=hc(e,i);En(n,r)||(s.uniform1iv(this.addr,r),Tn(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||i0,r[o])}function g_(s){switch(s){case 5126:return Zy;case 35664:return Jy;case 35665:return Qy;case 35666:return t_;case 35674:return e_;case 35675:return n_;case 35676:return i_;case 5124:case 35670:return s_;case 35667:case 35671:return r_;case 35668:case 35672:return o_;case 35669:case 35673:return a_;case 5125:return l_;case 36294:return c_;case 36295:return h_;case 36296:return u_;case 35678:case 36198:case 36298:case 36306:case 35682:return d_;case 35679:case 36299:case 36307:return f_;case 35680:case 36300:case 36308:case 36293:return p_;case 36289:case 36303:case 36311:case 36292:return m_}}class x_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ky(e.type)}}class v_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=g_(e.type)}}class y_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const eh=/(\w+)(\])?(\[|\.)?/g;function Jd(s,t){s.seq.push(t),s.map[t.id]=t}function __(s,t,e){const n=s.name,i=n.length;for(eh.lastIndex=0;;){const r=eh.exec(n),o=eh.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Jd(e,c===void 0?new x_(a,s,t):new v_(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new y_(a),Jd(e,d)),e=d}}}class kl{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);__(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Qd(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const M_=37297;let w_=0;function S_(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function b_(s){const t=Ve.getPrimaries(Ve.workingColorSpace),e=Ve.getPrimaries(s);let n;switch(t===e?n="":t===Yl&&e===Xl?n="LinearDisplayP3ToLinearSRGB":t===Xl&&e===Yl&&(n="LinearSRGBToLinearDisplayP3"),s){case Vs:case lc:return[n,"LinearTransferOETF"];case Zn:case Lu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function tf(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+S_(s.getShaderSource(t),o)}else return i}function E_(s,t){const e=b_(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function T_(s,t){let e;switch(t){case Cp:e="Linear";break;case Rp:e="Reinhard";break;case Pp:e="Cineon";break;case Lp:e="ACESFilmic";break;case zp:e="AgX";break;case bu:e="Neutral";break;case $m:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Qa=new B;function A_(){Ve.getLuminanceCoefficients(Qa);const s=Qa.x.toFixed(4),t=Qa.y.toFixed(4),e=Qa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function C_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ea).join(`
`)}function R_(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function P_(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ea(s){return s!==""}function ef(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nf(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const L_=/^[ \t]*#include +<([\w\d./]+)>/gm;function du(s){return s.replace(L_,I_)}const z_=new Map;function I_(s,t){let e=Ce[t];if(e===void 0){const n=z_.get(t);if(n!==void 0)e=Ce[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return du(e)}const D_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sf(s){return s.replace(D_,N_)}function N_(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function rf(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function U_(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ep?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Tp?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===fs&&(t="SHADOWMAP_TYPE_VSM"),t}function F_(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case uo:case fo:t="ENVMAP_TYPE_CUBE";break;case oc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function O_(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case fo:t="ENVMAP_MODE_REFRACTION";break}return t}function B_(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ap:t="ENVMAP_BLENDING_MULTIPLY";break;case Ym:t="ENVMAP_BLENDING_MIX";break;case jm:t="ENVMAP_BLENDING_ADD";break}return t}function k_(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function G_(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=U_(e),c=F_(e),h=O_(e),d=B_(e),u=k_(e),f=C_(e),m=R_(r),x=i.createProgram();let p,g,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ea).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ea).join(`
`),g.length>0&&(g+=`
`)):(p=[rf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),g=[rf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ks?"#define TONE_MAPPING":"",e.toneMapping!==ks?Ce.tonemapping_pars_fragment:"",e.toneMapping!==ks?T_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ce.colorspace_pars_fragment,E_("linearToOutputTexel",e.outputColorSpace),A_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ea).join(`
`)),o=du(o),o=ef(o,e),o=nf(o,e),a=du(a),a=ef(a,e),a=nf(a,e),o=sf(o),a=sf(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===Md?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Md?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const v=_+p+o,M=_+g+a,P=Qd(i,i.VERTEX_SHADER,v),T=Qd(i,i.FRAGMENT_SHADER,M);i.attachShader(x,P),i.attachShader(x,T),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function C(S){if(s.debug.checkShaderErrors){const V=i.getProgramInfoLog(x).trim(),A=i.getShaderInfoLog(P).trim(),R=i.getShaderInfoLog(T).trim();let I=!0,y=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(I=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,P,T);else{const U=tf(i,P,"vertex"),F=tf(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+V+`
`+U+`
`+F)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(A===""||R==="")&&(y=!1);y&&(S.diagnostics={runnable:I,programLog:V,vertexShader:{log:A,prefix:p},fragmentShader:{log:R,prefix:g}})}i.deleteShader(P),i.deleteShader(T),O=new kl(i,x),q=P_(i,x)}let O;this.getUniforms=function(){return O===void 0&&C(this),O};let q;this.getAttributes=function(){return q===void 0&&C(this),q};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(x,M_)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=w_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=T,this}let H_=0;class V_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new W_(t),e.set(t,n)),n}}class W_{constructor(t){this.id=H_++,this.code=t,this.usedTimes=0}}function q_(s,t,e,n,i,r,o){const a=new zu,l=new V_,c=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.reverseDepthBuffer,f=i.vertexTextures;let m=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,S,V,A,R){const I=A.fog,y=R.geometry,U=b.isMeshStandardMaterial?A.environment:null,F=(b.isMeshStandardMaterial?e:t).get(b.envMap||U),Z=F&&F.mapping===oc?F.image.height:null,st=x[b.type];b.precision!==null&&(m=i.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const mt=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,Mt=mt!==void 0?mt.length:0;let Yt=0;y.morphAttributes.position!==void 0&&(Yt=1),y.morphAttributes.normal!==void 0&&(Yt=2),y.morphAttributes.color!==void 0&&(Yt=3);let ct,dt,Pt,Tt;if(st){const We=Hi[st];ct=We.vertexShader,dt=We.fragmentShader}else ct=b.vertexShader,dt=b.fragmentShader,l.update(b),Pt=l.getVertexShaderID(b),Tt=l.getFragmentShaderID(b);const Qt=s.getRenderTarget(),Et=R.isInstancedMesh===!0,zt=R.isBatchedMesh===!0,Jt=!!b.map,ht=!!b.matcap,k=!!F,Lt=!!b.aoMap,Ft=!!b.lightMap,At=!!b.bumpMap,Ot=!!b.normalMap,ne=!!b.displacementMap,jt=!!b.emissiveMap,G=!!b.metalnessMap,z=!!b.roughnessMap,it=b.anisotropy>0,Y=b.clearcoat>0,j=b.dispersion>0,Q=b.iridescence>0,_t=b.sheen>0,St=b.transmission>0,Bt=it&&!!b.anisotropyMap,pe=Y&&!!b.clearcoatMap,wt=Y&&!!b.clearcoatNormalMap,Dt=Y&&!!b.clearcoatRoughnessMap,fe=Q&&!!b.iridescenceMap,he=Q&&!!b.iridescenceThicknessMap,Kt=_t&&!!b.sheenColorMap,le=_t&&!!b.sheenRoughnessMap,ue=!!b.specularMap,Ee=!!b.specularColorMap,$=!!b.specularIntensityMap,It=St&&!!b.transmissionMap,ut=St&&!!b.thicknessMap,gt=!!b.gradientMap,Ct=!!b.alphaMap,Ut=b.alphaTest>0,we=!!b.alphaHash,tn=!!b.extensions;let dn=ks;b.toneMapped&&(Qt===null||Qt.isXRRenderTarget===!0)&&(dn=s.toneMapping);const Se={shaderID:st,shaderType:b.type,shaderName:b.name,vertexShader:ct,fragmentShader:dt,defines:b.defines,customVertexShaderID:Pt,customFragmentShaderID:Tt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:zt,batchingColor:zt&&R._colorsTexture!==null,instancing:Et,instancingColor:Et&&R.instanceColor!==null,instancingMorph:Et&&R.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Qt===null?s.outputColorSpace:Qt.isXRRenderTarget===!0?Qt.texture.colorSpace:Vs,alphaToCoverage:!!b.alphaToCoverage,map:Jt,matcap:ht,envMap:k,envMapMode:k&&F.mapping,envMapCubeUVHeight:Z,aoMap:Lt,lightMap:Ft,bumpMap:At,normalMap:Ot,displacementMap:f&&ne,emissiveMap:jt,normalMapObjectSpace:Ot&&b.normalMapType===Qm,normalMapTangentSpace:Ot&&b.normalMapType===Vp,metalnessMap:G,roughnessMap:z,anisotropy:it,anisotropyMap:Bt,clearcoat:Y,clearcoatMap:pe,clearcoatNormalMap:wt,clearcoatRoughnessMap:Dt,dispersion:j,iridescence:Q,iridescenceMap:fe,iridescenceThicknessMap:he,sheen:_t,sheenColorMap:Kt,sheenRoughnessMap:le,specularMap:ue,specularColorMap:Ee,specularIntensityMap:$,transmission:St,transmissionMap:It,thicknessMap:ut,gradientMap:gt,opaque:b.transparent===!1&&b.blending===mr&&b.alphaToCoverage===!1,alphaMap:Ct,alphaTest:Ut,alphaHash:we,combine:b.combine,mapUv:Jt&&p(b.map.channel),aoMapUv:Lt&&p(b.aoMap.channel),lightMapUv:Ft&&p(b.lightMap.channel),bumpMapUv:At&&p(b.bumpMap.channel),normalMapUv:Ot&&p(b.normalMap.channel),displacementMapUv:ne&&p(b.displacementMap.channel),emissiveMapUv:jt&&p(b.emissiveMap.channel),metalnessMapUv:G&&p(b.metalnessMap.channel),roughnessMapUv:z&&p(b.roughnessMap.channel),anisotropyMapUv:Bt&&p(b.anisotropyMap.channel),clearcoatMapUv:pe&&p(b.clearcoatMap.channel),clearcoatNormalMapUv:wt&&p(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Dt&&p(b.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&p(b.iridescenceMap.channel),iridescenceThicknessMapUv:he&&p(b.iridescenceThicknessMap.channel),sheenColorMapUv:Kt&&p(b.sheenColorMap.channel),sheenRoughnessMapUv:le&&p(b.sheenRoughnessMap.channel),specularMapUv:ue&&p(b.specularMap.channel),specularColorMapUv:Ee&&p(b.specularColorMap.channel),specularIntensityMapUv:$&&p(b.specularIntensityMap.channel),transmissionMapUv:It&&p(b.transmissionMap.channel),thicknessMapUv:ut&&p(b.thicknessMap.channel),alphaMapUv:Ct&&p(b.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(Ot||it),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!y.attributes.uv&&(Jt||Ct),fog:!!I,useFog:b.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:u,skinning:R.isSkinnedMesh===!0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Yt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:dn,decodeVideoTexture:Jt&&b.map.isVideoTexture===!0&&Ve.getTransfer(b.map.colorSpace)===en,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===zn,flipSided:b.side===Yn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:tn&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tn&&b.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Se.vertexUv1s=c.has(1),Se.vertexUv2s=c.has(2),Se.vertexUv3s=c.has(3),c.clear(),Se}function _(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const V in b.defines)S.push(V),S.push(b.defines[V]);return b.isRawShaderMaterial===!1&&(v(S,b),M(S,b),S.push(s.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function v(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function M(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),b.push(a.mask)}function P(b){const S=x[b.type];let V;if(S){const A=Hi[S];V=xo.clone(A.uniforms)}else V=b.uniforms;return V}function T(b,S){let V;for(let A=0,R=h.length;A<R;A++){const I=h[A];if(I.cacheKey===S){V=I,++V.usedTimes;break}}return V===void 0&&(V=new G_(s,S,b,r),h.push(V)),V}function C(b){if(--b.usedTimes===0){const S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function O(b){l.remove(b)}function q(){l.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:P,acquireProgram:T,releaseProgram:C,releaseShaderCache:O,programs:h,dispose:q}}function X_(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Y_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function of(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function af(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,f,m,x,p){let g=s[t];return g===void 0?(g={id:d.id,object:d,geometry:u,material:f,groupOrder:m,renderOrder:d.renderOrder,z:x,group:p},s[t]=g):(g.id=d.id,g.object=d,g.geometry=u,g.material=f,g.groupOrder=m,g.renderOrder=d.renderOrder,g.z=x,g.group=p),t++,g}function a(d,u,f,m,x,p){const g=o(d,u,f,m,x,p);f.transmission>0?n.push(g):f.transparent===!0?i.push(g):e.push(g)}function l(d,u,f,m,x,p){const g=o(d,u,f,m,x,p);f.transmission>0?n.unshift(g):f.transparent===!0?i.unshift(g):e.unshift(g)}function c(d,u){e.length>1&&e.sort(d||Y_),n.length>1&&n.sort(u||of),i.length>1&&i.sort(u||of)}function h(){for(let d=t,u=s.length;d<u;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function j_(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new af,s.set(n,[o])):i>=r.length?(o=new af,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function $_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new Vt};break;case"SpotLight":e={position:new B,direction:new B,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new B,halfWidth:new B,halfHeight:new B};break}return s[t.id]=e,e}}}function K_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Z_=0;function J_(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Q_(s){const t=new $_,e=K_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const i=new B,r=new Ge,o=new Ge;function a(c){let h=0,d=0,u=0;for(let q=0;q<9;q++)n.probe[q].set(0,0,0);let f=0,m=0,x=0,p=0,g=0,_=0,v=0,M=0,P=0,T=0,C=0;c.sort(J_);for(let q=0,b=c.length;q<b;q++){const S=c[q],V=S.color,A=S.intensity,R=S.distance,I=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=V.r*A,d+=V.g*A,u+=V.b*A;else if(S.isLightProbe){for(let y=0;y<9;y++)n.probe[y].addScaledVector(S.sh.coefficients[y],A);C++}else if(S.isDirectionalLight){const y=t.get(S);if(y.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const U=S.shadow,F=e.get(S);F.shadowIntensity=U.intensity,F.shadowBias=U.bias,F.shadowNormalBias=U.normalBias,F.shadowRadius=U.radius,F.shadowMapSize=U.mapSize,n.directionalShadow[f]=F,n.directionalShadowMap[f]=I,n.directionalShadowMatrix[f]=S.shadow.matrix,_++}n.directional[f]=y,f++}else if(S.isSpotLight){const y=t.get(S);y.position.setFromMatrixPosition(S.matrixWorld),y.color.copy(V).multiplyScalar(A),y.distance=R,y.coneCos=Math.cos(S.angle),y.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),y.decay=S.decay,n.spot[x]=y;const U=S.shadow;if(S.map&&(n.spotLightMap[P]=S.map,P++,U.updateMatrices(S),S.castShadow&&T++),n.spotLightMatrix[x]=U.matrix,S.castShadow){const F=e.get(S);F.shadowIntensity=U.intensity,F.shadowBias=U.bias,F.shadowNormalBias=U.normalBias,F.shadowRadius=U.radius,F.shadowMapSize=U.mapSize,n.spotShadow[x]=F,n.spotShadowMap[x]=I,M++}x++}else if(S.isRectAreaLight){const y=t.get(S);y.color.copy(V).multiplyScalar(A),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),n.rectArea[p]=y,p++}else if(S.isPointLight){const y=t.get(S);if(y.color.copy(S.color).multiplyScalar(S.intensity),y.distance=S.distance,y.decay=S.decay,S.castShadow){const U=S.shadow,F=e.get(S);F.shadowIntensity=U.intensity,F.shadowBias=U.bias,F.shadowNormalBias=U.normalBias,F.shadowRadius=U.radius,F.shadowMapSize=U.mapSize,F.shadowCameraNear=U.camera.near,F.shadowCameraFar=U.camera.far,n.pointShadow[m]=F,n.pointShadowMap[m]=I,n.pointShadowMatrix[m]=S.shadow.matrix,v++}n.point[m]=y,m++}else if(S.isHemisphereLight){const y=t.get(S);y.skyColor.copy(S.color).multiplyScalar(A),y.groundColor.copy(S.groundColor).multiplyScalar(A),n.hemi[g]=y,g++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ht.LTC_FLOAT_1,n.rectAreaLTC2=Ht.LTC_FLOAT_2):(n.rectAreaLTC1=Ht.LTC_HALF_1,n.rectAreaLTC2=Ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const O=n.hash;(O.directionalLength!==f||O.pointLength!==m||O.spotLength!==x||O.rectAreaLength!==p||O.hemiLength!==g||O.numDirectionalShadows!==_||O.numPointShadows!==v||O.numSpotShadows!==M||O.numSpotMaps!==P||O.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=M+P-T,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,O.directionalLength=f,O.pointLength=m,O.spotLength=x,O.rectAreaLength=p,O.hemiLength=g,O.numDirectionalShadows=_,O.numPointShadows=v,O.numSpotShadows=M,O.numSpotMaps=P,O.numLightProbes=C,n.version=Z_++)}function l(c,h){let d=0,u=0,f=0,m=0,x=0;const p=h.matrixWorldInverse;for(let g=0,_=c.length;g<_;g++){const v=c[g];if(v.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),d++}else if(v.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),f++}else if(v.isRectAreaLight){const M=n.rectArea[m];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),m++}else if(v.isPointLight){const M=n.point[u];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),u++}else if(v.isHemisphereLight){const M=n.hemi[x];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:n}}function lf(s){const t=new Q_(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function t1(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new lf(s),t.set(i,[a])):r>=o.length?(a=new lf(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class e1 extends Ws{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class n1 extends Ws{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const i1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s1=`uniform sampler2D shadow_pass;
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
}`;function r1(s,t,e){let n=new Iu;const i=new bt,r=new bt,o=new Je,a=new e1({depthPacking:Jm}),l=new n1,c={},h=e.maxTextureSize,d={[Hs]:Yn,[Yn]:Hs,[zn]:zn},u=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:i1,fragmentShader:s1}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const m=new Qe;m.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ye(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ep;let g=this.type;this.render=function(T,C,O){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const q=s.getRenderTarget(),b=s.getActiveCubeFace(),S=s.getActiveMipmapLevel(),V=s.state;V.setBlending(vs),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const A=g!==fs&&this.type===fs,R=g===fs&&this.type!==fs;for(let I=0,y=T.length;I<y;I++){const U=T[I],F=U.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);const Z=F.getFrameExtents();if(i.multiply(Z),r.copy(F.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Z.x),i.x=r.x*Z.x,F.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Z.y),i.y=r.y*Z.y,F.mapSize.y=r.y)),F.map===null||A===!0||R===!0){const mt=this.type!==fs?{minFilter:Qn,magFilter:Qn}:{};F.map!==null&&F.map.dispose(),F.map=new mi(i.x,i.y,mt),F.map.texture.name=U.name+".shadowMap",F.camera.updateProjectionMatrix()}s.setRenderTarget(F.map),s.clear();const st=F.getViewportCount();for(let mt=0;mt<st;mt++){const Mt=F.getViewport(mt);o.set(r.x*Mt.x,r.y*Mt.y,r.x*Mt.z,r.y*Mt.w),V.viewport(o),F.updateMatrices(U,mt),n=F.getFrustum(),M(C,O,F.camera,U,this.type)}F.isPointLightShadow!==!0&&this.type===fs&&_(F,O),F.needsUpdate=!1}g=this.type,p.needsUpdate=!1,s.setRenderTarget(q,b,S)};function _(T,C){const O=t.update(x);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new mi(i.x,i.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(C,null,O,u,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(C,null,O,f,x,null)}function v(T,C,O,q){let b=null;const S=O.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(S!==void 0)b=S;else if(b=O.isPointLight===!0?l:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const V=b.uuid,A=C.uuid;let R=c[V];R===void 0&&(R={},c[V]=R);let I=R[A];I===void 0&&(I=b.clone(),R[A]=I,C.addEventListener("dispose",P)),b=I}if(b.visible=C.visible,b.wireframe=C.wireframe,q===fs?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:d[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,O.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const V=s.properties.get(b);V.light=O}return b}function M(T,C,O,q,b){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===fs)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,T.matrixWorld);const A=t.update(T),R=T.material;if(Array.isArray(R)){const I=A.groups;for(let y=0,U=I.length;y<U;y++){const F=I[y],Z=R[F.materialIndex];if(Z&&Z.visible){const st=v(T,Z,q,b);T.onBeforeShadow(s,T,C,O,A,st,F),s.renderBufferDirect(O,null,A,st,T,F),T.onAfterShadow(s,T,C,O,A,st,F)}}}else if(R.visible){const I=v(T,R,q,b);T.onBeforeShadow(s,T,C,O,A,I,null),s.renderBufferDirect(O,null,A,I,T,null),T.onAfterShadow(s,T,C,O,A,I,null)}}const V=T.children;for(let A=0,R=V.length;A<R;A++)M(V[A],C,O,q,b)}function P(T){T.target.removeEventListener("dispose",P);for(const O in c){const q=c[O],b=T.target.uuid;b in q&&(q[b].dispose(),delete q[b])}}}const o1={[Rh]:Ph,[Lh]:Dh,[zh]:Nh,[ho]:Ih,[Ph]:Rh,[Dh]:Lh,[Nh]:zh,[Ih]:ho};function a1(s){function t(){let $=!1;const It=new Je;let ut=null;const gt=new Je(0,0,0,0);return{setMask:function(Ct){ut!==Ct&&!$&&(s.colorMask(Ct,Ct,Ct,Ct),ut=Ct)},setLocked:function(Ct){$=Ct},setClear:function(Ct,Ut,we,tn,dn){dn===!0&&(Ct*=tn,Ut*=tn,we*=tn),It.set(Ct,Ut,we,tn),gt.equals(It)===!1&&(s.clearColor(Ct,Ut,we,tn),gt.copy(It))},reset:function(){$=!1,ut=null,gt.set(-1,0,0,0)}}}function e(){let $=!1,It=!1,ut=null,gt=null,Ct=null;return{setReversed:function(Ut){It=Ut},setTest:function(Ut){Ut?Pt(s.DEPTH_TEST):Tt(s.DEPTH_TEST)},setMask:function(Ut){ut!==Ut&&!$&&(s.depthMask(Ut),ut=Ut)},setFunc:function(Ut){if(It&&(Ut=o1[Ut]),gt!==Ut){switch(Ut){case Rh:s.depthFunc(s.NEVER);break;case Ph:s.depthFunc(s.ALWAYS);break;case Lh:s.depthFunc(s.LESS);break;case ho:s.depthFunc(s.LEQUAL);break;case zh:s.depthFunc(s.EQUAL);break;case Ih:s.depthFunc(s.GEQUAL);break;case Dh:s.depthFunc(s.GREATER);break;case Nh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}gt=Ut}},setLocked:function(Ut){$=Ut},setClear:function(Ut){Ct!==Ut&&(s.clearDepth(Ut),Ct=Ut)},reset:function(){$=!1,ut=null,gt=null,Ct=null}}}function n(){let $=!1,It=null,ut=null,gt=null,Ct=null,Ut=null,we=null,tn=null,dn=null;return{setTest:function(Se){$||(Se?Pt(s.STENCIL_TEST):Tt(s.STENCIL_TEST))},setMask:function(Se){It!==Se&&!$&&(s.stencilMask(Se),It=Se)},setFunc:function(Se,We,xi){(ut!==Se||gt!==We||Ct!==xi)&&(s.stencilFunc(Se,We,xi),ut=Se,gt=We,Ct=xi)},setOp:function(Se,We,xi){(Ut!==Se||we!==We||tn!==xi)&&(s.stencilOp(Se,We,xi),Ut=Se,we=We,tn=xi)},setLocked:function(Se){$=Se},setClear:function(Se){dn!==Se&&(s.clearStencil(Se),dn=Se)},reset:function(){$=!1,It=null,ut=null,gt=null,Ct=null,Ut=null,we=null,tn=null,dn=null}}}const i=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},d=new WeakMap,u=[],f=null,m=!1,x=null,p=null,g=null,_=null,v=null,M=null,P=null,T=new Vt(0,0,0),C=0,O=!1,q=null,b=null,S=null,V=null,A=null;const R=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,y=0;const U=s.getParameter(s.VERSION);U.indexOf("WebGL")!==-1?(y=parseFloat(/^WebGL (\d)/.exec(U)[1]),I=y>=1):U.indexOf("OpenGL ES")!==-1&&(y=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),I=y>=2);let F=null,Z={};const st=s.getParameter(s.SCISSOR_BOX),mt=s.getParameter(s.VIEWPORT),Mt=new Je().fromArray(st),Yt=new Je().fromArray(mt);function ct($,It,ut,gt){const Ct=new Uint8Array(4),Ut=s.createTexture();s.bindTexture($,Ut),s.texParameteri($,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri($,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let we=0;we<ut;we++)$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?s.texImage3D(It,0,s.RGBA,1,1,gt,0,s.RGBA,s.UNSIGNED_BYTE,Ct):s.texImage2D(It+we,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ct);return Ut}const dt={};dt[s.TEXTURE_2D]=ct(s.TEXTURE_2D,s.TEXTURE_2D,1),dt[s.TEXTURE_CUBE_MAP]=ct(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[s.TEXTURE_2D_ARRAY]=ct(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),dt[s.TEXTURE_3D]=ct(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Pt(s.DEPTH_TEST),r.setFunc(ho),Ft(!1),At(xd),Pt(s.CULL_FACE),k(vs);function Pt($){c[$]!==!0&&(s.enable($),c[$]=!0)}function Tt($){c[$]!==!1&&(s.disable($),c[$]=!1)}function Qt($,It){return h[$]!==It?(s.bindFramebuffer($,It),h[$]=It,$===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=It),$===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=It),!0):!1}function Et($,It){let ut=u,gt=!1;if($){ut=d.get(It),ut===void 0&&(ut=[],d.set(It,ut));const Ct=$.textures;if(ut.length!==Ct.length||ut[0]!==s.COLOR_ATTACHMENT0){for(let Ut=0,we=Ct.length;Ut<we;Ut++)ut[Ut]=s.COLOR_ATTACHMENT0+Ut;ut.length=Ct.length,gt=!0}}else ut[0]!==s.BACK&&(ut[0]=s.BACK,gt=!0);gt&&s.drawBuffers(ut)}function zt($){return f!==$?(s.useProgram($),f=$,!0):!1}const Jt={[cr]:s.FUNC_ADD,[Pm]:s.FUNC_SUBTRACT,[Lm]:s.FUNC_REVERSE_SUBTRACT};Jt[zm]=s.MIN,Jt[Im]=s.MAX;const ht={[Dm]:s.ZERO,[Nm]:s.ONE,[Um]:s.SRC_COLOR,[Ah]:s.SRC_ALPHA,[Hm]:s.SRC_ALPHA_SATURATE,[km]:s.DST_COLOR,[Om]:s.DST_ALPHA,[Fm]:s.ONE_MINUS_SRC_COLOR,[Ch]:s.ONE_MINUS_SRC_ALPHA,[Gm]:s.ONE_MINUS_DST_COLOR,[Bm]:s.ONE_MINUS_DST_ALPHA,[Vm]:s.CONSTANT_COLOR,[Wm]:s.ONE_MINUS_CONSTANT_COLOR,[qm]:s.CONSTANT_ALPHA,[Xm]:s.ONE_MINUS_CONSTANT_ALPHA};function k($,It,ut,gt,Ct,Ut,we,tn,dn,Se){if($===vs){m===!0&&(Tt(s.BLEND),m=!1);return}if(m===!1&&(Pt(s.BLEND),m=!0),$!==Rm){if($!==x||Se!==O){if((p!==cr||v!==cr)&&(s.blendEquation(s.FUNC_ADD),p=cr,v=cr),Se)switch($){case mr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bs:s.blendFunc(s.ONE,s.ONE);break;case vd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case yd:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case mr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bs:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case vd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case yd:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}g=null,_=null,M=null,P=null,T.set(0,0,0),C=0,x=$,O=Se}return}Ct=Ct||It,Ut=Ut||ut,we=we||gt,(It!==p||Ct!==v)&&(s.blendEquationSeparate(Jt[It],Jt[Ct]),p=It,v=Ct),(ut!==g||gt!==_||Ut!==M||we!==P)&&(s.blendFuncSeparate(ht[ut],ht[gt],ht[Ut],ht[we]),g=ut,_=gt,M=Ut,P=we),(tn.equals(T)===!1||dn!==C)&&(s.blendColor(tn.r,tn.g,tn.b,dn),T.copy(tn),C=dn),x=$,O=!1}function Lt($,It){$.side===zn?Tt(s.CULL_FACE):Pt(s.CULL_FACE);let ut=$.side===Yn;It&&(ut=!ut),Ft(ut),$.blending===mr&&$.transparent===!1?k(vs):k($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),r.setFunc($.depthFunc),r.setTest($.depthTest),r.setMask($.depthWrite),i.setMask($.colorWrite);const gt=$.stencilWrite;o.setTest(gt),gt&&(o.setMask($.stencilWriteMask),o.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),o.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),ne($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?Pt(s.SAMPLE_ALPHA_TO_COVERAGE):Tt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ft($){q!==$&&($?s.frontFace(s.CW):s.frontFace(s.CCW),q=$)}function At($){$!==Am?(Pt(s.CULL_FACE),$!==b&&($===xd?s.cullFace(s.BACK):$===Cm?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Tt(s.CULL_FACE),b=$}function Ot($){$!==S&&(I&&s.lineWidth($),S=$)}function ne($,It,ut){$?(Pt(s.POLYGON_OFFSET_FILL),(V!==It||A!==ut)&&(s.polygonOffset(It,ut),V=It,A=ut)):Tt(s.POLYGON_OFFSET_FILL)}function jt($){$?Pt(s.SCISSOR_TEST):Tt(s.SCISSOR_TEST)}function G($){$===void 0&&($=s.TEXTURE0+R-1),F!==$&&(s.activeTexture($),F=$)}function z($,It,ut){ut===void 0&&(F===null?ut=s.TEXTURE0+R-1:ut=F);let gt=Z[ut];gt===void 0&&(gt={type:void 0,texture:void 0},Z[ut]=gt),(gt.type!==$||gt.texture!==It)&&(F!==ut&&(s.activeTexture(ut),F=ut),s.bindTexture($,It||dt[$]),gt.type=$,gt.texture=It)}function it(){const $=Z[F];$!==void 0&&$.type!==void 0&&(s.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function Y(){try{s.compressedTexImage2D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function j(){try{s.compressedTexImage3D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Q(){try{s.texSubImage2D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function _t(){try{s.texSubImage3D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function St(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Bt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function pe(){try{s.texStorage2D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function wt(){try{s.texStorage3D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Dt(){try{s.texImage2D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function fe(){try{s.texImage3D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function he($){Mt.equals($)===!1&&(s.scissor($.x,$.y,$.z,$.w),Mt.copy($))}function Kt($){Yt.equals($)===!1&&(s.viewport($.x,$.y,$.z,$.w),Yt.copy($))}function le($,It){let ut=l.get(It);ut===void 0&&(ut=new WeakMap,l.set(It,ut));let gt=ut.get($);gt===void 0&&(gt=s.getUniformBlockIndex(It,$.name),ut.set($,gt))}function ue($,It){const gt=l.get(It).get($);a.get(It)!==gt&&(s.uniformBlockBinding(It,gt,$.__bindingPointIndex),a.set(It,gt))}function Ee(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},F=null,Z={},h={},d=new WeakMap,u=[],f=null,m=!1,x=null,p=null,g=null,_=null,v=null,M=null,P=null,T=new Vt(0,0,0),C=0,O=!1,q=null,b=null,S=null,V=null,A=null,Mt.set(0,0,s.canvas.width,s.canvas.height),Yt.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:Pt,disable:Tt,bindFramebuffer:Qt,drawBuffers:Et,useProgram:zt,setBlending:k,setMaterial:Lt,setFlipSided:Ft,setCullFace:At,setLineWidth:Ot,setPolygonOffset:ne,setScissorTest:jt,activeTexture:G,bindTexture:z,unbindTexture:it,compressedTexImage2D:Y,compressedTexImage3D:j,texImage2D:Dt,texImage3D:fe,updateUBOMapping:le,uniformBlockBinding:ue,texStorage2D:pe,texStorage3D:wt,texSubImage2D:Q,texSubImage3D:_t,compressedTexSubImage2D:St,compressedTexSubImage3D:Bt,scissor:he,viewport:Kt,reset:Ee}}function cf(s,t,e,n){const i=l1(n);switch(e){case Fp:return s*t;case Bp:return s*t;case kp:return s*t*2;case ac:return s*t/i.components*i.byteLength;case Cu:return s*t/i.components*i.byteLength;case Gp:return s*t*2/i.components*i.byteLength;case Ru:return s*t*2/i.components*i.byteLength;case Op:return s*t*3/i.components*i.byteLength;case Ri:return s*t*4/i.components*i.byteLength;case Pu:return s*t*4/i.components*i.byteLength;case Il:case Dl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Nl:case Ul:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case kh:case Hh:return Math.max(s,16)*Math.max(t,8)/4;case Bh:case Gh:return Math.max(s,8)*Math.max(t,8)/2;case Vh:case Wh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case qh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Xh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Yh:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case jh:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case $h:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Kh:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Zh:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Jh:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Qh:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case tu:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case eu:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case nu:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case iu:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case su:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ru:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Fl:case ou:case au:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Hp:case lu:return Math.ceil(s/4)*Math.ceil(t/4)*8;case cu:case hu:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function l1(s){switch(s){case ji:case Dp:return{byteLength:1,components:1};case aa:case Np:case Yi:return{byteLength:2,components:1};case Tu:case Au:return{byteLength:2,components:4};case gr:case Eu:case qi:return{byteLength:4,components:1};case Up:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function c1(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new bt,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(G,z){return f?new OffscreenCanvas(G,z):Kl("canvas")}function x(G,z,it){let Y=1;const j=jt(G);if((j.width>it||j.height>it)&&(Y=it/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&G instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&G instanceof ImageBitmap||typeof VideoFrame<"u"&&G instanceof VideoFrame){const Q=Math.floor(Y*j.width),_t=Math.floor(Y*j.height);d===void 0&&(d=m(Q,_t));const St=z?m(Q,_t):d;return St.width=Q,St.height=_t,St.getContext("2d").drawImage(G,0,0,Q,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Q+"x"+_t+")."),St}else return"data"in G&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),G;return G}function p(G){return G.generateMipmaps&&G.minFilter!==Qn&&G.minFilter!==ai}function g(G){s.generateMipmap(G)}function _(G,z,it,Y,j=!1){if(G!==null){if(s[G]!==void 0)return s[G];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+G+"'")}let Q=z;if(z===s.RED&&(it===s.FLOAT&&(Q=s.R32F),it===s.HALF_FLOAT&&(Q=s.R16F),it===s.UNSIGNED_BYTE&&(Q=s.R8)),z===s.RED_INTEGER&&(it===s.UNSIGNED_BYTE&&(Q=s.R8UI),it===s.UNSIGNED_SHORT&&(Q=s.R16UI),it===s.UNSIGNED_INT&&(Q=s.R32UI),it===s.BYTE&&(Q=s.R8I),it===s.SHORT&&(Q=s.R16I),it===s.INT&&(Q=s.R32I)),z===s.RG&&(it===s.FLOAT&&(Q=s.RG32F),it===s.HALF_FLOAT&&(Q=s.RG16F),it===s.UNSIGNED_BYTE&&(Q=s.RG8)),z===s.RG_INTEGER&&(it===s.UNSIGNED_BYTE&&(Q=s.RG8UI),it===s.UNSIGNED_SHORT&&(Q=s.RG16UI),it===s.UNSIGNED_INT&&(Q=s.RG32UI),it===s.BYTE&&(Q=s.RG8I),it===s.SHORT&&(Q=s.RG16I),it===s.INT&&(Q=s.RG32I)),z===s.RGB_INTEGER&&(it===s.UNSIGNED_BYTE&&(Q=s.RGB8UI),it===s.UNSIGNED_SHORT&&(Q=s.RGB16UI),it===s.UNSIGNED_INT&&(Q=s.RGB32UI),it===s.BYTE&&(Q=s.RGB8I),it===s.SHORT&&(Q=s.RGB16I),it===s.INT&&(Q=s.RGB32I)),z===s.RGBA_INTEGER&&(it===s.UNSIGNED_BYTE&&(Q=s.RGBA8UI),it===s.UNSIGNED_SHORT&&(Q=s.RGBA16UI),it===s.UNSIGNED_INT&&(Q=s.RGBA32UI),it===s.BYTE&&(Q=s.RGBA8I),it===s.SHORT&&(Q=s.RGBA16I),it===s.INT&&(Q=s.RGBA32I)),z===s.RGB&&it===s.UNSIGNED_INT_5_9_9_9_REV&&(Q=s.RGB9_E5),z===s.RGBA){const _t=j?ql:Ve.getTransfer(Y);it===s.FLOAT&&(Q=s.RGBA32F),it===s.HALF_FLOAT&&(Q=s.RGBA16F),it===s.UNSIGNED_BYTE&&(Q=_t===en?s.SRGB8_ALPHA8:s.RGBA8),it===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),it===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function v(G,z){let it;return G?z===null||z===gr||z===po?it=s.DEPTH24_STENCIL8:z===qi?it=s.DEPTH32F_STENCIL8:z===aa&&(it=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):z===null||z===gr||z===po?it=s.DEPTH_COMPONENT24:z===qi?it=s.DEPTH_COMPONENT32F:z===aa&&(it=s.DEPTH_COMPONENT16),it}function M(G,z){return p(G)===!0||G.isFramebufferTexture&&G.minFilter!==Qn&&G.minFilter!==ai?Math.log2(Math.max(z.width,z.height))+1:G.mipmaps!==void 0&&G.mipmaps.length>0?G.mipmaps.length:G.isCompressedTexture&&Array.isArray(G.image)?z.mipmaps.length:1}function P(G){const z=G.target;z.removeEventListener("dispose",P),C(z),z.isVideoTexture&&h.delete(z)}function T(G){const z=G.target;z.removeEventListener("dispose",T),q(z)}function C(G){const z=n.get(G);if(z.__webglInit===void 0)return;const it=G.source,Y=u.get(it);if(Y){const j=Y[z.__cacheKey];j.usedTimes--,j.usedTimes===0&&O(G),Object.keys(Y).length===0&&u.delete(it)}n.remove(G)}function O(G){const z=n.get(G);s.deleteTexture(z.__webglTexture);const it=G.source,Y=u.get(it);delete Y[z.__cacheKey],o.memory.textures--}function q(G){const z=n.get(G);if(G.depthTexture&&G.depthTexture.dispose(),G.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(z.__webglFramebuffer[Y]))for(let j=0;j<z.__webglFramebuffer[Y].length;j++)s.deleteFramebuffer(z.__webglFramebuffer[Y][j]);else s.deleteFramebuffer(z.__webglFramebuffer[Y]);z.__webglDepthbuffer&&s.deleteRenderbuffer(z.__webglDepthbuffer[Y])}else{if(Array.isArray(z.__webglFramebuffer))for(let Y=0;Y<z.__webglFramebuffer.length;Y++)s.deleteFramebuffer(z.__webglFramebuffer[Y]);else s.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&s.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&s.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let Y=0;Y<z.__webglColorRenderbuffer.length;Y++)z.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(z.__webglColorRenderbuffer[Y]);z.__webglDepthRenderbuffer&&s.deleteRenderbuffer(z.__webglDepthRenderbuffer)}const it=G.textures;for(let Y=0,j=it.length;Y<j;Y++){const Q=n.get(it[Y]);Q.__webglTexture&&(s.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(it[Y])}n.remove(G)}let b=0;function S(){b=0}function V(){const G=b;return G>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+G+" texture units while this GPU supports only "+i.maxTextures),b+=1,G}function A(G){const z=[];return z.push(G.wrapS),z.push(G.wrapT),z.push(G.wrapR||0),z.push(G.magFilter),z.push(G.minFilter),z.push(G.anisotropy),z.push(G.internalFormat),z.push(G.format),z.push(G.type),z.push(G.generateMipmaps),z.push(G.premultiplyAlpha),z.push(G.flipY),z.push(G.unpackAlignment),z.push(G.colorSpace),z.join()}function R(G,z){const it=n.get(G);if(G.isVideoTexture&&Ot(G),G.isRenderTargetTexture===!1&&G.version>0&&it.__version!==G.version){const Y=G.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Yt(it,G,z);return}}e.bindTexture(s.TEXTURE_2D,it.__webglTexture,s.TEXTURE0+z)}function I(G,z){const it=n.get(G);if(G.version>0&&it.__version!==G.version){Yt(it,G,z);return}e.bindTexture(s.TEXTURE_2D_ARRAY,it.__webglTexture,s.TEXTURE0+z)}function y(G,z){const it=n.get(G);if(G.version>0&&it.__version!==G.version){Yt(it,G,z);return}e.bindTexture(s.TEXTURE_3D,it.__webglTexture,s.TEXTURE0+z)}function U(G,z){const it=n.get(G);if(G.version>0&&it.__version!==G.version){ct(it,G,z);return}e.bindTexture(s.TEXTURE_CUBE_MAP,it.__webglTexture,s.TEXTURE0+z)}const F={[Wl]:s.REPEAT,[dr]:s.CLAMP_TO_EDGE,[Oh]:s.MIRRORED_REPEAT},Z={[Qn]:s.NEAREST,[Km]:s.NEAREST_MIPMAP_NEAREST,[Ia]:s.NEAREST_MIPMAP_LINEAR,[ai]:s.LINEAR,[Ac]:s.LINEAR_MIPMAP_NEAREST,[fr]:s.LINEAR_MIPMAP_LINEAR},st={[tg]:s.NEVER,[og]:s.ALWAYS,[eg]:s.LESS,[Wp]:s.LEQUAL,[ng]:s.EQUAL,[rg]:s.GEQUAL,[ig]:s.GREATER,[sg]:s.NOTEQUAL};function mt(G,z){if(z.type===qi&&t.has("OES_texture_float_linear")===!1&&(z.magFilter===ai||z.magFilter===Ac||z.magFilter===Ia||z.magFilter===fr||z.minFilter===ai||z.minFilter===Ac||z.minFilter===Ia||z.minFilter===fr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(G,s.TEXTURE_WRAP_S,F[z.wrapS]),s.texParameteri(G,s.TEXTURE_WRAP_T,F[z.wrapT]),(G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY)&&s.texParameteri(G,s.TEXTURE_WRAP_R,F[z.wrapR]),s.texParameteri(G,s.TEXTURE_MAG_FILTER,Z[z.magFilter]),s.texParameteri(G,s.TEXTURE_MIN_FILTER,Z[z.minFilter]),z.compareFunction&&(s.texParameteri(G,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(G,s.TEXTURE_COMPARE_FUNC,st[z.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(z.magFilter===Qn||z.minFilter!==Ia&&z.minFilter!==fr||z.type===qi&&t.has("OES_texture_float_linear")===!1)return;if(z.anisotropy>1||n.get(z).__currentAnisotropy){const it=t.get("EXT_texture_filter_anisotropic");s.texParameterf(G,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(z.anisotropy,i.getMaxAnisotropy())),n.get(z).__currentAnisotropy=z.anisotropy}}}function Mt(G,z){let it=!1;G.__webglInit===void 0&&(G.__webglInit=!0,z.addEventListener("dispose",P));const Y=z.source;let j=u.get(Y);j===void 0&&(j={},u.set(Y,j));const Q=A(z);if(Q!==G.__cacheKey){j[Q]===void 0&&(j[Q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,it=!0),j[Q].usedTimes++;const _t=j[G.__cacheKey];_t!==void 0&&(j[G.__cacheKey].usedTimes--,_t.usedTimes===0&&O(z)),G.__cacheKey=Q,G.__webglTexture=j[Q].texture}return it}function Yt(G,z,it){let Y=s.TEXTURE_2D;(z.isDataArrayTexture||z.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),z.isData3DTexture&&(Y=s.TEXTURE_3D);const j=Mt(G,z),Q=z.source;e.bindTexture(Y,G.__webglTexture,s.TEXTURE0+it);const _t=n.get(Q);if(Q.version!==_t.__version||j===!0){e.activeTexture(s.TEXTURE0+it);const St=Ve.getPrimaries(Ve.workingColorSpace),Bt=z.colorSpace===Us?null:Ve.getPrimaries(z.colorSpace),pe=z.colorSpace===Us||St===Bt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,z.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,z.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let wt=x(z.image,!1,i.maxTextureSize);wt=ne(z,wt);const Dt=r.convert(z.format,z.colorSpace),fe=r.convert(z.type);let he=_(z.internalFormat,Dt,fe,z.colorSpace,z.isVideoTexture);mt(Y,z);let Kt;const le=z.mipmaps,ue=z.isVideoTexture!==!0,Ee=_t.__version===void 0||j===!0,$=Q.dataReady,It=M(z,wt);if(z.isDepthTexture)he=v(z.format===mo,z.type),Ee&&(ue?e.texStorage2D(s.TEXTURE_2D,1,he,wt.width,wt.height):e.texImage2D(s.TEXTURE_2D,0,he,wt.width,wt.height,0,Dt,fe,null));else if(z.isDataTexture)if(le.length>0){ue&&Ee&&e.texStorage2D(s.TEXTURE_2D,It,he,le[0].width,le[0].height);for(let ut=0,gt=le.length;ut<gt;ut++)Kt=le[ut],ue?$&&e.texSubImage2D(s.TEXTURE_2D,ut,0,0,Kt.width,Kt.height,Dt,fe,Kt.data):e.texImage2D(s.TEXTURE_2D,ut,he,Kt.width,Kt.height,0,Dt,fe,Kt.data);z.generateMipmaps=!1}else ue?(Ee&&e.texStorage2D(s.TEXTURE_2D,It,he,wt.width,wt.height),$&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,wt.width,wt.height,Dt,fe,wt.data)):e.texImage2D(s.TEXTURE_2D,0,he,wt.width,wt.height,0,Dt,fe,wt.data);else if(z.isCompressedTexture)if(z.isCompressedArrayTexture){ue&&Ee&&e.texStorage3D(s.TEXTURE_2D_ARRAY,It,he,le[0].width,le[0].height,wt.depth);for(let ut=0,gt=le.length;ut<gt;ut++)if(Kt=le[ut],z.format!==Ri)if(Dt!==null)if(ue){if($)if(z.layerUpdates.size>0){const Ct=cf(Kt.width,Kt.height,z.format,z.type);for(const Ut of z.layerUpdates){const we=Kt.data.subarray(Ut*Ct/Kt.data.BYTES_PER_ELEMENT,(Ut+1)*Ct/Kt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,Ut,Kt.width,Kt.height,1,Dt,we,0,0)}z.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,Kt.width,Kt.height,wt.depth,Dt,Kt.data,0,0)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ut,he,Kt.width,Kt.height,wt.depth,0,Kt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ue?$&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,Kt.width,Kt.height,wt.depth,Dt,fe,Kt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ut,he,Kt.width,Kt.height,wt.depth,0,Dt,fe,Kt.data)}else{ue&&Ee&&e.texStorage2D(s.TEXTURE_2D,It,he,le[0].width,le[0].height);for(let ut=0,gt=le.length;ut<gt;ut++)Kt=le[ut],z.format!==Ri?Dt!==null?ue?$&&e.compressedTexSubImage2D(s.TEXTURE_2D,ut,0,0,Kt.width,Kt.height,Dt,Kt.data):e.compressedTexImage2D(s.TEXTURE_2D,ut,he,Kt.width,Kt.height,0,Kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?$&&e.texSubImage2D(s.TEXTURE_2D,ut,0,0,Kt.width,Kt.height,Dt,fe,Kt.data):e.texImage2D(s.TEXTURE_2D,ut,he,Kt.width,Kt.height,0,Dt,fe,Kt.data)}else if(z.isDataArrayTexture)if(ue){if(Ee&&e.texStorage3D(s.TEXTURE_2D_ARRAY,It,he,wt.width,wt.height,wt.depth),$)if(z.layerUpdates.size>0){const ut=cf(wt.width,wt.height,z.format,z.type);for(const gt of z.layerUpdates){const Ct=wt.data.subarray(gt*ut/wt.data.BYTES_PER_ELEMENT,(gt+1)*ut/wt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,gt,wt.width,wt.height,1,Dt,fe,Ct)}z.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,wt.width,wt.height,wt.depth,Dt,fe,wt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,he,wt.width,wt.height,wt.depth,0,Dt,fe,wt.data);else if(z.isData3DTexture)ue?(Ee&&e.texStorage3D(s.TEXTURE_3D,It,he,wt.width,wt.height,wt.depth),$&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,wt.width,wt.height,wt.depth,Dt,fe,wt.data)):e.texImage3D(s.TEXTURE_3D,0,he,wt.width,wt.height,wt.depth,0,Dt,fe,wt.data);else if(z.isFramebufferTexture){if(Ee)if(ue)e.texStorage2D(s.TEXTURE_2D,It,he,wt.width,wt.height);else{let ut=wt.width,gt=wt.height;for(let Ct=0;Ct<It;Ct++)e.texImage2D(s.TEXTURE_2D,Ct,he,ut,gt,0,Dt,fe,null),ut>>=1,gt>>=1}}else if(le.length>0){if(ue&&Ee){const ut=jt(le[0]);e.texStorage2D(s.TEXTURE_2D,It,he,ut.width,ut.height)}for(let ut=0,gt=le.length;ut<gt;ut++)Kt=le[ut],ue?$&&e.texSubImage2D(s.TEXTURE_2D,ut,0,0,Dt,fe,Kt):e.texImage2D(s.TEXTURE_2D,ut,he,Dt,fe,Kt);z.generateMipmaps=!1}else if(ue){if(Ee){const ut=jt(wt);e.texStorage2D(s.TEXTURE_2D,It,he,ut.width,ut.height)}$&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Dt,fe,wt)}else e.texImage2D(s.TEXTURE_2D,0,he,Dt,fe,wt);p(z)&&g(Y),_t.__version=Q.version,z.onUpdate&&z.onUpdate(z)}G.__version=z.version}function ct(G,z,it){if(z.image.length!==6)return;const Y=Mt(G,z),j=z.source;e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+it);const Q=n.get(j);if(j.version!==Q.__version||Y===!0){e.activeTexture(s.TEXTURE0+it);const _t=Ve.getPrimaries(Ve.workingColorSpace),St=z.colorSpace===Us?null:Ve.getPrimaries(z.colorSpace),Bt=z.colorSpace===Us||_t===St?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,z.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,z.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);const pe=z.isCompressedTexture||z.image[0].isCompressedTexture,wt=z.image[0]&&z.image[0].isDataTexture,Dt=[];for(let gt=0;gt<6;gt++)!pe&&!wt?Dt[gt]=x(z.image[gt],!0,i.maxCubemapSize):Dt[gt]=wt?z.image[gt].image:z.image[gt],Dt[gt]=ne(z,Dt[gt]);const fe=Dt[0],he=r.convert(z.format,z.colorSpace),Kt=r.convert(z.type),le=_(z.internalFormat,he,Kt,z.colorSpace),ue=z.isVideoTexture!==!0,Ee=Q.__version===void 0||Y===!0,$=j.dataReady;let It=M(z,fe);mt(s.TEXTURE_CUBE_MAP,z);let ut;if(pe){ue&&Ee&&e.texStorage2D(s.TEXTURE_CUBE_MAP,It,le,fe.width,fe.height);for(let gt=0;gt<6;gt++){ut=Dt[gt].mipmaps;for(let Ct=0;Ct<ut.length;Ct++){const Ut=ut[Ct];z.format!==Ri?he!==null?ue?$&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct,0,0,Ut.width,Ut.height,he,Ut.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct,le,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ue?$&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct,0,0,Ut.width,Ut.height,he,Kt,Ut.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct,le,Ut.width,Ut.height,0,he,Kt,Ut.data)}}}else{if(ut=z.mipmaps,ue&&Ee){ut.length>0&&It++;const gt=jt(Dt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,It,le,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(wt){ue?$&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Dt[gt].width,Dt[gt].height,he,Kt,Dt[gt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,le,Dt[gt].width,Dt[gt].height,0,he,Kt,Dt[gt].data);for(let Ct=0;Ct<ut.length;Ct++){const we=ut[Ct].image[gt].image;ue?$&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct+1,0,0,we.width,we.height,he,Kt,we.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct+1,le,we.width,we.height,0,he,Kt,we.data)}}else{ue?$&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,he,Kt,Dt[gt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,le,he,Kt,Dt[gt]);for(let Ct=0;Ct<ut.length;Ct++){const Ut=ut[Ct];ue?$&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct+1,0,0,he,Kt,Ut.image[gt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct+1,le,he,Kt,Ut.image[gt])}}}p(z)&&g(s.TEXTURE_CUBE_MAP),Q.__version=j.version,z.onUpdate&&z.onUpdate(z)}G.__version=z.version}function dt(G,z,it,Y,j,Q){const _t=r.convert(it.format,it.colorSpace),St=r.convert(it.type),Bt=_(it.internalFormat,_t,St,it.colorSpace);if(!n.get(z).__hasExternalTextures){const wt=Math.max(1,z.width>>Q),Dt=Math.max(1,z.height>>Q);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?e.texImage3D(j,Q,Bt,wt,Dt,z.depth,0,_t,St,null):e.texImage2D(j,Q,Bt,wt,Dt,0,_t,St,null)}e.bindFramebuffer(s.FRAMEBUFFER,G),At(z)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,j,n.get(it).__webglTexture,0,Ft(z)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,j,n.get(it).__webglTexture,Q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Pt(G,z,it){if(s.bindRenderbuffer(s.RENDERBUFFER,G),z.depthBuffer){const Y=z.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,Q=v(z.stencilBuffer,j),_t=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=Ft(z);At(z)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,St,Q,z.width,z.height):it?s.renderbufferStorageMultisample(s.RENDERBUFFER,St,Q,z.width,z.height):s.renderbufferStorage(s.RENDERBUFFER,Q,z.width,z.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,_t,s.RENDERBUFFER,G)}else{const Y=z.textures;for(let j=0;j<Y.length;j++){const Q=Y[j],_t=r.convert(Q.format,Q.colorSpace),St=r.convert(Q.type),Bt=_(Q.internalFormat,_t,St,Q.colorSpace),pe=Ft(z);it&&At(z)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,pe,Bt,z.width,z.height):At(z)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pe,Bt,z.width,z.height):s.renderbufferStorage(s.RENDERBUFFER,Bt,z.width,z.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Tt(G,z){if(z&&z.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,G),!(z.depthTexture&&z.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(z.depthTexture).__webglTexture||z.depthTexture.image.width!==z.width||z.depthTexture.image.height!==z.height)&&(z.depthTexture.image.width=z.width,z.depthTexture.image.height=z.height,z.depthTexture.needsUpdate=!0),R(z.depthTexture,0);const Y=n.get(z.depthTexture).__webglTexture,j=Ft(z);if(z.depthTexture.format===so)At(z)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Y,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Y,0);else if(z.depthTexture.format===mo)At(z)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Y,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Qt(G){const z=n.get(G),it=G.isWebGLCubeRenderTarget===!0;if(z.__boundDepthTexture!==G.depthTexture){const Y=G.depthTexture;if(z.__depthDisposeCallback&&z.__depthDisposeCallback(),Y){const j=()=>{delete z.__boundDepthTexture,delete z.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),z.__depthDisposeCallback=j}z.__boundDepthTexture=Y}if(G.depthTexture&&!z.__autoAllocateDepthBuffer){if(it)throw new Error("target.depthTexture not supported in Cube render targets");Tt(z.__webglFramebuffer,G)}else if(it){z.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(s.FRAMEBUFFER,z.__webglFramebuffer[Y]),z.__webglDepthbuffer[Y]===void 0)z.__webglDepthbuffer[Y]=s.createRenderbuffer(),Pt(z.__webglDepthbuffer[Y],G,!1);else{const j=G.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=z.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,z.__webglFramebuffer),z.__webglDepthbuffer===void 0)z.__webglDepthbuffer=s.createRenderbuffer(),Pt(z.__webglDepthbuffer,G,!1);else{const Y=G.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=z.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,j)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Et(G,z,it){const Y=n.get(G);z!==void 0&&dt(Y.__webglFramebuffer,G,G.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),it!==void 0&&Qt(G)}function zt(G){const z=G.texture,it=n.get(G),Y=n.get(z);G.addEventListener("dispose",T);const j=G.textures,Q=G.isWebGLCubeRenderTarget===!0,_t=j.length>1;if(_t||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=z.version,o.memory.textures++),Q){it.__webglFramebuffer=[];for(let St=0;St<6;St++)if(z.mipmaps&&z.mipmaps.length>0){it.__webglFramebuffer[St]=[];for(let Bt=0;Bt<z.mipmaps.length;Bt++)it.__webglFramebuffer[St][Bt]=s.createFramebuffer()}else it.__webglFramebuffer[St]=s.createFramebuffer()}else{if(z.mipmaps&&z.mipmaps.length>0){it.__webglFramebuffer=[];for(let St=0;St<z.mipmaps.length;St++)it.__webglFramebuffer[St]=s.createFramebuffer()}else it.__webglFramebuffer=s.createFramebuffer();if(_t)for(let St=0,Bt=j.length;St<Bt;St++){const pe=n.get(j[St]);pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture(),o.memory.textures++)}if(G.samples>0&&At(G)===!1){it.__webglMultisampledFramebuffer=s.createFramebuffer(),it.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let St=0;St<j.length;St++){const Bt=j[St];it.__webglColorRenderbuffer[St]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,it.__webglColorRenderbuffer[St]);const pe=r.convert(Bt.format,Bt.colorSpace),wt=r.convert(Bt.type),Dt=_(Bt.internalFormat,pe,wt,Bt.colorSpace,G.isXRRenderTarget===!0),fe=Ft(G);s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,Dt,G.width,G.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,it.__webglColorRenderbuffer[St])}s.bindRenderbuffer(s.RENDERBUFFER,null),G.depthBuffer&&(it.__webglDepthRenderbuffer=s.createRenderbuffer(),Pt(it.__webglDepthRenderbuffer,G,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),mt(s.TEXTURE_CUBE_MAP,z);for(let St=0;St<6;St++)if(z.mipmaps&&z.mipmaps.length>0)for(let Bt=0;Bt<z.mipmaps.length;Bt++)dt(it.__webglFramebuffer[St][Bt],G,z,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Bt);else dt(it.__webglFramebuffer[St],G,z,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+St,0);p(z)&&g(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let St=0,Bt=j.length;St<Bt;St++){const pe=j[St],wt=n.get(pe);e.bindTexture(s.TEXTURE_2D,wt.__webglTexture),mt(s.TEXTURE_2D,pe),dt(it.__webglFramebuffer,G,pe,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,0),p(pe)&&g(s.TEXTURE_2D)}e.unbindTexture()}else{let St=s.TEXTURE_2D;if((G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(St=G.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(St,Y.__webglTexture),mt(St,z),z.mipmaps&&z.mipmaps.length>0)for(let Bt=0;Bt<z.mipmaps.length;Bt++)dt(it.__webglFramebuffer[Bt],G,z,s.COLOR_ATTACHMENT0,St,Bt);else dt(it.__webglFramebuffer,G,z,s.COLOR_ATTACHMENT0,St,0);p(z)&&g(St),e.unbindTexture()}G.depthBuffer&&Qt(G)}function Jt(G){const z=G.textures;for(let it=0,Y=z.length;it<Y;it++){const j=z[it];if(p(j)){const Q=G.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,_t=n.get(j).__webglTexture;e.bindTexture(Q,_t),g(Q),e.unbindTexture()}}}const ht=[],k=[];function Lt(G){if(G.samples>0){if(At(G)===!1){const z=G.textures,it=G.width,Y=G.height;let j=s.COLOR_BUFFER_BIT;const Q=G.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_t=n.get(G),St=z.length>1;if(St)for(let Bt=0;Bt<z.length;Bt++)e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Bt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Bt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let Bt=0;Bt<z.length;Bt++){if(G.resolveDepthBuffer&&(G.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),G.stencilBuffer&&G.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),St){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,_t.__webglColorRenderbuffer[Bt]);const pe=n.get(z[Bt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,pe,0)}s.blitFramebuffer(0,0,it,Y,0,0,it,Y,j,s.NEAREST),l===!0&&(ht.length=0,k.length=0,ht.push(s.COLOR_ATTACHMENT0+Bt),G.depthBuffer&&G.resolveDepthBuffer===!1&&(ht.push(Q),k.push(Q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,k)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ht))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),St)for(let Bt=0;Bt<z.length;Bt++){e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Bt,s.RENDERBUFFER,_t.__webglColorRenderbuffer[Bt]);const pe=n.get(z[Bt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Bt,s.TEXTURE_2D,pe,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(G.depthBuffer&&G.resolveDepthBuffer===!1&&l){const z=G.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[z])}}}function Ft(G){return Math.min(i.maxSamples,G.samples)}function At(G){const z=n.get(G);return G.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&z.__useRenderToTexture!==!1}function Ot(G){const z=o.render.frame;h.get(G)!==z&&(h.set(G,z),G.update())}function ne(G,z){const it=G.colorSpace,Y=G.format,j=G.type;return G.isCompressedTexture===!0||G.isVideoTexture===!0||it!==Vs&&it!==Us&&(Ve.getTransfer(it)===en?(Y!==Ri||j!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",it)),z}function jt(G){return typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement?(c.width=G.naturalWidth||G.width,c.height=G.naturalHeight||G.height):typeof VideoFrame<"u"&&G instanceof VideoFrame?(c.width=G.displayWidth,c.height=G.displayHeight):(c.width=G.width,c.height=G.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=S,this.setTexture2D=R,this.setTexture2DArray=I,this.setTexture3D=y,this.setTextureCube=U,this.rebindTextures=Et,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Qt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=At}function h1(s,t){function e(n,i=Us){let r;const o=Ve.getTransfer(i);if(n===ji)return s.UNSIGNED_BYTE;if(n===Tu)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Au)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Up)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Dp)return s.BYTE;if(n===Np)return s.SHORT;if(n===aa)return s.UNSIGNED_SHORT;if(n===Eu)return s.INT;if(n===gr)return s.UNSIGNED_INT;if(n===qi)return s.FLOAT;if(n===Yi)return s.HALF_FLOAT;if(n===Fp)return s.ALPHA;if(n===Op)return s.RGB;if(n===Ri)return s.RGBA;if(n===Bp)return s.LUMINANCE;if(n===kp)return s.LUMINANCE_ALPHA;if(n===so)return s.DEPTH_COMPONENT;if(n===mo)return s.DEPTH_STENCIL;if(n===ac)return s.RED;if(n===Cu)return s.RED_INTEGER;if(n===Gp)return s.RG;if(n===Ru)return s.RG_INTEGER;if(n===Pu)return s.RGBA_INTEGER;if(n===Il||n===Dl||n===Nl||n===Ul)if(o===en)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Il)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Dl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Nl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ul)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Il)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Dl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Nl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ul)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Bh||n===kh||n===Gh||n===Hh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Bh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===kh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vh||n===Wh||n===qh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Vh||n===Wh)return o===en?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===qh)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Xh||n===Yh||n===jh||n===$h||n===Kh||n===Zh||n===Jh||n===Qh||n===tu||n===eu||n===nu||n===iu||n===su||n===ru)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xh)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yh)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===jh)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$h)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Kh)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zh)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jh)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qh)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===tu)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===eu)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===nu)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===iu)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===su)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ru)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fl||n===ou||n===au)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Fl)return o===en?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ou)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===au)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hp||n===lu||n===cu||n===hu)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===lu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===cu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===po?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class u1 extends Jn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class qt extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const d1={type:"move"};class nh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,n),g=this._getHandJoint(c,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(d1)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new qt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const f1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p1=`
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

}`;class m1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Gn,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new bn({vertexShader:f1,fragmentShader:p1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ye(new hn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class g1 extends yo{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null;const x=new m1,p=e.getContextAttributes();let g=null,_=null;const v=[],M=[],P=new bt;let T=null;const C=new Jn;C.layers.enable(1),C.viewport=new Je;const O=new Jn;O.layers.enable(2),O.viewport=new Je;const q=[C,O],b=new u1;b.layers.enable(1),b.layers.enable(2);let S=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ct){let dt=v[ct];return dt===void 0&&(dt=new nh,v[ct]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(ct){let dt=v[ct];return dt===void 0&&(dt=new nh,v[ct]=dt),dt.getGripSpace()},this.getHand=function(ct){let dt=v[ct];return dt===void 0&&(dt=new nh,v[ct]=dt),dt.getHandSpace()};function A(ct){const dt=M.indexOf(ct.inputSource);if(dt===-1)return;const Pt=v[dt];Pt!==void 0&&(Pt.update(ct.inputSource,ct.frame,c||o),Pt.dispatchEvent({type:ct.type,data:ct.inputSource}))}function R(){i.removeEventListener("select",A),i.removeEventListener("selectstart",A),i.removeEventListener("selectend",A),i.removeEventListener("squeeze",A),i.removeEventListener("squeezestart",A),i.removeEventListener("squeezeend",A),i.removeEventListener("end",R),i.removeEventListener("inputsourceschange",I);for(let ct=0;ct<v.length;ct++){const dt=M[ct];dt!==null&&(M[ct]=null,v[ct].disconnect(dt))}S=null,V=null,x.reset(),t.setRenderTarget(g),f=null,u=null,d=null,i=null,_=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ct){r=ct,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ct){a=ct,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ct){c=ct},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(ct){if(i=ct,i!==null){if(g=t.getRenderTarget(),i.addEventListener("select",A),i.addEventListener("selectstart",A),i.addEventListener("selectend",A),i.addEventListener("squeeze",A),i.addEventListener("squeezestart",A),i.addEventListener("squeezeend",A),i.addEventListener("end",R),i.addEventListener("inputsourceschange",I),p.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(P),i.renderState.layers===void 0){const dt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,dt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new mi(f.framebufferWidth,f.framebufferHeight,{format:Ri,type:ji,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let dt=null,Pt=null,Tt=null;p.depth&&(Tt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=p.stencil?mo:so,Pt=p.stencil?po:gr);const Qt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(Qt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new mi(u.textureWidth,u.textureHeight,{format:Ri,type:ji,depthTexture:new e0(u.textureWidth,u.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Yt.setContext(i),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function I(ct){for(let dt=0;dt<ct.removed.length;dt++){const Pt=ct.removed[dt],Tt=M.indexOf(Pt);Tt>=0&&(M[Tt]=null,v[Tt].disconnect(Pt))}for(let dt=0;dt<ct.added.length;dt++){const Pt=ct.added[dt];let Tt=M.indexOf(Pt);if(Tt===-1){for(let Et=0;Et<v.length;Et++)if(Et>=M.length){M.push(Pt),Tt=Et;break}else if(M[Et]===null){M[Et]=Pt,Tt=Et;break}if(Tt===-1)break}const Qt=v[Tt];Qt&&Qt.connect(Pt)}}const y=new B,U=new B;function F(ct,dt,Pt){y.setFromMatrixPosition(dt.matrixWorld),U.setFromMatrixPosition(Pt.matrixWorld);const Tt=y.distanceTo(U),Qt=dt.projectionMatrix.elements,Et=Pt.projectionMatrix.elements,zt=Qt[14]/(Qt[10]-1),Jt=Qt[14]/(Qt[10]+1),ht=(Qt[9]+1)/Qt[5],k=(Qt[9]-1)/Qt[5],Lt=(Qt[8]-1)/Qt[0],Ft=(Et[8]+1)/Et[0],At=zt*Lt,Ot=zt*Ft,ne=Tt/(-Lt+Ft),jt=ne*-Lt;if(dt.matrixWorld.decompose(ct.position,ct.quaternion,ct.scale),ct.translateX(jt),ct.translateZ(ne),ct.matrixWorld.compose(ct.position,ct.quaternion,ct.scale),ct.matrixWorldInverse.copy(ct.matrixWorld).invert(),Qt[10]===-1)ct.projectionMatrix.copy(dt.projectionMatrix),ct.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const G=zt+ne,z=Jt+ne,it=At-jt,Y=Ot+(Tt-jt),j=ht*Jt/z*G,Q=k*Jt/z*G;ct.projectionMatrix.makePerspective(it,Y,j,Q,G,z),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert()}}function Z(ct,dt){dt===null?ct.matrixWorld.copy(ct.matrix):ct.matrixWorld.multiplyMatrices(dt.matrixWorld,ct.matrix),ct.matrixWorldInverse.copy(ct.matrixWorld).invert()}this.updateCamera=function(ct){if(i===null)return;let dt=ct.near,Pt=ct.far;x.texture!==null&&(x.depthNear>0&&(dt=x.depthNear),x.depthFar>0&&(Pt=x.depthFar)),b.near=O.near=C.near=dt,b.far=O.far=C.far=Pt,(S!==b.near||V!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),S=b.near,V=b.far);const Tt=ct.parent,Qt=b.cameras;Z(b,Tt);for(let Et=0;Et<Qt.length;Et++)Z(Qt[Et],Tt);Qt.length===2?F(b,C,O):b.projectionMatrix.copy(C.projectionMatrix),st(ct,b,Tt)};function st(ct,dt,Pt){Pt===null?ct.matrix.copy(dt.matrixWorld):(ct.matrix.copy(Pt.matrixWorld),ct.matrix.invert(),ct.matrix.multiply(dt.matrixWorld)),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.updateMatrixWorld(!0),ct.projectionMatrix.copy(dt.projectionMatrix),ct.projectionMatrixInverse.copy(dt.projectionMatrixInverse),ct.isPerspectiveCamera&&(ct.fov=$l*2*Math.atan(1/ct.projectionMatrix.elements[5]),ct.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(ct){l=ct,u!==null&&(u.fixedFoveation=ct),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ct)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let mt=null;function Mt(ct,dt){if(h=dt.getViewerPose(c||o),m=dt,h!==null){const Pt=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let Tt=!1;Pt.length!==b.cameras.length&&(b.cameras.length=0,Tt=!0);for(let Et=0;Et<Pt.length;Et++){const zt=Pt[Et];let Jt=null;if(f!==null)Jt=f.getViewport(zt);else{const k=d.getViewSubImage(u,zt);Jt=k.viewport,Et===0&&(t.setRenderTargetTextures(_,k.colorTexture,u.ignoreDepthValues?void 0:k.depthStencilTexture),t.setRenderTarget(_))}let ht=q[Et];ht===void 0&&(ht=new Jn,ht.layers.enable(Et),ht.viewport=new Je,q[Et]=ht),ht.matrix.fromArray(zt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(zt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),Et===0&&(b.matrix.copy(ht.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Tt===!0&&b.cameras.push(ht)}const Qt=i.enabledFeatures;if(Qt&&Qt.includes("depth-sensing")){const Et=d.getDepthInformation(Pt[0]);Et&&Et.isValid&&Et.texture&&x.init(t,Et,i.renderState)}}for(let Pt=0;Pt<v.length;Pt++){const Tt=M[Pt],Qt=v[Pt];Tt!==null&&Qt!==void 0&&Qt.update(Tt,dt,c||o)}mt&&mt(ct,dt),dt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:dt}),m=null}const Yt=new t0;Yt.setAnimationLoop(Mt),this.setAnimationLoop=function(ct){mt=ct},this.dispose=function(){}}}const sr=new gi,x1=new Ge;function v1(s,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Zp(s)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,_,v,M){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(p,g):g.isMeshToonMaterial?(r(p,g),d(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g)):g.isMeshStandardMaterial?(r(p,g),u(p,g),g.isMeshPhysicalMaterial&&f(p,g,M)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),x(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,_,v):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Yn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Yn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const _=t.get(g),v=_.envMap,M=_.envMapRotation;v&&(p.envMap.value=v,sr.copy(M),sr.x*=-1,sr.y*=-1,sr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),p.envMapRotation.value.setFromMatrix4(x1.makeRotationFromEuler(sr)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,_,v){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*_,p.scale.value=v*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,_){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Yn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){const _=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function y1(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){const M=v.program;n.uniformBlockBinding(_,M)}function c(_,v){let M=i[_.id];M===void 0&&(m(_),M=h(_),i[_.id]=M,_.addEventListener("dispose",p));const P=v.program;n.updateUBOMapping(_,P);const T=t.render.frame;r[_.id]!==T&&(u(_),r[_.id]=T)}function h(_){const v=d();_.__bindingPointIndex=v;const M=s.createBuffer(),P=_.__size,T=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,P,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,M),M}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const v=i[_.id],M=_.uniforms,P=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let T=0,C=M.length;T<C;T++){const O=Array.isArray(M[T])?M[T]:[M[T]];for(let q=0,b=O.length;q<b;q++){const S=O[q];if(f(S,T,q,P)===!0){const V=S.__offset,A=Array.isArray(S.value)?S.value:[S.value];let R=0;for(let I=0;I<A.length;I++){const y=A[I],U=x(y);typeof y=="number"||typeof y=="boolean"?(S.__data[0]=y,s.bufferSubData(s.UNIFORM_BUFFER,V+R,S.__data)):y.isMatrix3?(S.__data[0]=y.elements[0],S.__data[1]=y.elements[1],S.__data[2]=y.elements[2],S.__data[3]=0,S.__data[4]=y.elements[3],S.__data[5]=y.elements[4],S.__data[6]=y.elements[5],S.__data[7]=0,S.__data[8]=y.elements[6],S.__data[9]=y.elements[7],S.__data[10]=y.elements[8],S.__data[11]=0):(y.toArray(S.__data,R),R+=U.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,V,S.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(_,v,M,P){const T=_.value,C=v+"_"+M;if(P[C]===void 0)return typeof T=="number"||typeof T=="boolean"?P[C]=T:P[C]=T.clone(),!0;{const O=P[C];if(typeof T=="number"||typeof T=="boolean"){if(O!==T)return P[C]=T,!0}else if(O.equals(T)===!1)return O.copy(T),!0}return!1}function m(_){const v=_.uniforms;let M=0;const P=16;for(let C=0,O=v.length;C<O;C++){const q=Array.isArray(v[C])?v[C]:[v[C]];for(let b=0,S=q.length;b<S;b++){const V=q[b],A=Array.isArray(V.value)?V.value:[V.value];for(let R=0,I=A.length;R<I;R++){const y=A[R],U=x(y),F=M%P,Z=F%U.boundary,st=F+Z;M+=Z,st!==0&&P-st<U.storage&&(M+=P-st),V.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=M,M+=U.storage}}}const T=M%P;return T>0&&(M+=P-T),_.__size=M,_.__cache={},this}function x(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function p(_){const v=_.target;v.removeEventListener("dispose",p);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function g(){for(const _ in i)s.deleteBuffer(i[_]);o=[],i={},r={}}return{bind:l,update:c,dispose:g}}class _1{constructor(t={}){const{canvas:e=lg(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;const f=new Uint32Array(4),m=new Int32Array(4);let x=null,p=null;const g=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zn,this.toneMapping=ks,this.toneMappingExposure=1;const v=this;let M=!1,P=0,T=0,C=null,O=-1,q=null;const b=new Je,S=new Je;let V=null;const A=new Vt(0);let R=0,I=e.width,y=e.height,U=1,F=null,Z=null;const st=new Je(0,0,I,y),mt=new Je(0,0,I,y);let Mt=!1;const Yt=new Iu;let ct=!1,dt=!1;const Pt=new Ge,Tt=new Ge,Qt=new B,Et=new Je,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Jt=!1;function ht(){return C===null?U:1}let k=n;function Lt(N,nt){return e.getContext(N,nt)}try{const N={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Su}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",Ct,!1),e.addEventListener("webglcontextcreationerror",Ut,!1),k===null){const nt="webgl2";if(k=Lt(nt,N),k===null)throw Lt(nt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let Ft,At,Ot,ne,jt,G,z,it,Y,j,Q,_t,St,Bt,pe,wt,Dt,fe,he,Kt,le,ue,Ee,$;function It(){Ft=new Ey(k),Ft.init(),ue=new h1(k,Ft),At=new yy(k,Ft,t,ue),Ot=new a1(k),At.reverseDepthBuffer&&Ot.buffers.depth.setReversed(!0),ne=new Cy(k),jt=new X_,G=new c1(k,Ft,Ot,jt,At,ue,ne),z=new My(v),it=new by(v),Y=new Ng(k),Ee=new xy(k,Y),j=new Ty(k,Y,ne,Ee),Q=new Py(k,j,Y,ne),he=new Ry(k,At,G),wt=new _y(jt),_t=new q_(v,z,it,Ft,At,Ee,wt),St=new v1(v,jt),Bt=new j_,pe=new t1(Ft),fe=new gy(v,z,it,Ot,Q,u,l),Dt=new r1(v,Q,At),$=new y1(k,ne,At,Ot),Kt=new vy(k,Ft,ne),le=new Ay(k,Ft,ne),ne.programs=_t.programs,v.capabilities=At,v.extensions=Ft,v.properties=jt,v.renderLists=Bt,v.shadowMap=Dt,v.state=Ot,v.info=ne}It();const ut=new g1(v,k);this.xr=ut,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const N=Ft.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Ft.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(N){N!==void 0&&(U=N,this.setSize(I,y,!1))},this.getSize=function(N){return N.set(I,y)},this.setSize=function(N,nt,at=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=N,y=nt,e.width=Math.floor(N*U),e.height=Math.floor(nt*U),at===!0&&(e.style.width=N+"px",e.style.height=nt+"px"),this.setViewport(0,0,N,nt)},this.getDrawingBufferSize=function(N){return N.set(I*U,y*U).floor()},this.setDrawingBufferSize=function(N,nt,at){I=N,y=nt,U=at,e.width=Math.floor(N*at),e.height=Math.floor(nt*at),this.setViewport(0,0,N,nt)},this.getCurrentViewport=function(N){return N.copy(b)},this.getViewport=function(N){return N.copy(st)},this.setViewport=function(N,nt,at,lt){N.isVector4?st.set(N.x,N.y,N.z,N.w):st.set(N,nt,at,lt),Ot.viewport(b.copy(st).multiplyScalar(U).round())},this.getScissor=function(N){return N.copy(mt)},this.setScissor=function(N,nt,at,lt){N.isVector4?mt.set(N.x,N.y,N.z,N.w):mt.set(N,nt,at,lt),Ot.scissor(S.copy(mt).multiplyScalar(U).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(N){Ot.setScissorTest(Mt=N)},this.setOpaqueSort=function(N){F=N},this.setTransparentSort=function(N){Z=N},this.getClearColor=function(N){return N.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor.apply(fe,arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha.apply(fe,arguments)},this.clear=function(N=!0,nt=!0,at=!0){let lt=0;if(N){let et=!1;if(C!==null){const Nt=C.texture.format;et=Nt===Pu||Nt===Ru||Nt===Cu}if(et){const Nt=C.texture.type,Wt=Nt===ji||Nt===gr||Nt===aa||Nt===po||Nt===Tu||Nt===Au,$t=fe.getClearColor(),ie=fe.getClearAlpha(),xe=$t.r,ve=$t.g,ce=$t.b;Wt?(f[0]=xe,f[1]=ve,f[2]=ce,f[3]=ie,k.clearBufferuiv(k.COLOR,0,f)):(m[0]=xe,m[1]=ve,m[2]=ce,m[3]=ie,k.clearBufferiv(k.COLOR,0,m))}else lt|=k.COLOR_BUFFER_BIT}nt&&(lt|=k.DEPTH_BUFFER_BIT,k.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),at&&(lt|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",Ct,!1),e.removeEventListener("webglcontextcreationerror",Ut,!1),Bt.dispose(),pe.dispose(),jt.dispose(),z.dispose(),it.dispose(),Q.dispose(),Ee.dispose(),$.dispose(),_t.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",pa),ut.removeEventListener("sessionend",_r),zi.stop()};function gt(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const N=ne.autoReset,nt=Dt.enabled,at=Dt.autoUpdate,lt=Dt.needsUpdate,et=Dt.type;It(),ne.autoReset=N,Dt.enabled=nt,Dt.autoUpdate=at,Dt.needsUpdate=lt,Dt.type=et}function Ut(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function we(N){const nt=N.target;nt.removeEventListener("dispose",we),tn(nt)}function tn(N){dn(N),jt.remove(N)}function dn(N){const nt=jt.get(N).programs;nt!==void 0&&(nt.forEach(function(at){_t.releaseProgram(at)}),N.isShaderMaterial&&_t.releaseShaderCache(N))}this.renderBufferDirect=function(N,nt,at,lt,et,Nt){nt===null&&(nt=zt);const Wt=et.isMesh&&et.matrixWorld.determinant()<0,$t=vi(N,nt,at,lt,et);Ot.setMaterial(lt,Wt);let ie=at.index,xe=1;if(lt.wireframe===!0){if(ie=j.getWireframeAttribute(at),ie===void 0)return;xe=2}const ve=at.drawRange,ce=at.attributes.position;let Fe=ve.start*xe,je=(ve.start+ve.count)*xe;Nt!==null&&(Fe=Math.max(Fe,Nt.start*xe),je=Math.min(je,(Nt.start+Nt.count)*xe)),ie!==null?(Fe=Math.max(Fe,0),je=Math.min(je,ie.count)):ce!=null&&(Fe=Math.max(Fe,0),je=Math.min(je,ce.count));const Ue=je-Fe;if(Ue<0||Ue===1/0)return;Ee.setup(et,lt,$t,at,ie);let An,Me=Kt;if(ie!==null&&(An=Y.get(ie),Me=le,Me.setIndex(An)),et.isMesh)lt.wireframe===!0?(Ot.setLineWidth(lt.wireframeLinewidth*ht()),Me.setMode(k.LINES)):Me.setMode(k.TRIANGLES);else if(et.isLine){let ae=lt.linewidth;ae===void 0&&(ae=1),Ot.setLineWidth(ae*ht()),et.isLineSegments?Me.setMode(k.LINES):et.isLineLoop?Me.setMode(k.LINE_LOOP):Me.setMode(k.LINE_STRIP)}else et.isPoints?Me.setMode(k.POINTS):et.isSprite&&Me.setMode(k.TRIANGLES);if(et.isBatchedMesh)if(et._multiDrawInstances!==null)Me.renderMultiDrawInstances(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount,et._multiDrawInstances);else if(Ft.get("WEBGL_multi_draw"))Me.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{const ae=et._multiDrawStarts,$e=et._multiDrawCounts,ze=et._multiDrawCount,on=ie?Y.get(ie).bytesPerElement:1,ti=jt.get(lt).currentProgram.getUniforms();for(let ln=0;ln<ze;ln++)ti.setValue(k,"_gl_DrawID",ln),Me.render(ae[ln]/on,$e[ln])}else if(et.isInstancedMesh)Me.renderInstances(Fe,Ue,et.count);else if(at.isInstancedBufferGeometry){const ae=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,$e=Math.min(at.instanceCount,ae);Me.renderInstances(Fe,Ue,$e)}else Me.render(Fe,Ue)};function Se(N,nt,at){N.transparent===!0&&N.side===zn&&N.forceSinglePass===!1?(N.side=Yn,N.needsUpdate=!0,_e(N,nt,at),N.side=Hs,N.needsUpdate=!0,_e(N,nt,at),N.side=zn):_e(N,nt,at)}this.compile=function(N,nt,at=null){at===null&&(at=N),p=pe.get(at),p.init(nt),_.push(p),at.traverseVisible(function(et){et.isLight&&et.layers.test(nt.layers)&&(p.pushLight(et),et.castShadow&&p.pushShadow(et))}),N!==at&&N.traverseVisible(function(et){et.isLight&&et.layers.test(nt.layers)&&(p.pushLight(et),et.castShadow&&p.pushShadow(et))}),p.setupLights();const lt=new Set;return N.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;const Nt=et.material;if(Nt)if(Array.isArray(Nt))for(let Wt=0;Wt<Nt.length;Wt++){const $t=Nt[Wt];Se($t,at,et),lt.add($t)}else Se(Nt,at,et),lt.add(Nt)}),_.pop(),p=null,lt},this.compileAsync=function(N,nt,at=null){const lt=this.compile(N,nt,at);return new Promise(et=>{function Nt(){if(lt.forEach(function(Wt){jt.get(Wt).currentProgram.isReady()&&lt.delete(Wt)}),lt.size===0){et(N);return}setTimeout(Nt,10)}Ft.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let We=null;function xi(N){We&&We(N)}function pa(){zi.stop()}function _r(){zi.start()}const zi=new t0;zi.setAnimationLoop(xi),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(N){We=N,ut.setAnimationLoop(N),N===null?zi.stop():zi.start()},ut.addEventListener("sessionstart",pa),ut.addEventListener("sessionend",_r),this.render=function(N,nt){if(nt!==void 0&&nt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),nt.parent===null&&nt.matrixWorldAutoUpdate===!0&&nt.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(nt),nt=ut.getCamera()),N.isScene===!0&&N.onBeforeRender(v,N,nt,C),p=pe.get(N,_.length),p.init(nt),_.push(p),Tt.multiplyMatrices(nt.projectionMatrix,nt.matrixWorldInverse),Yt.setFromProjectionMatrix(Tt),dt=this.localClippingEnabled,ct=wt.init(this.clippingPlanes,dt),x=Bt.get(N,g.length),x.init(),g.push(x),ut.enabled===!0&&ut.isPresenting===!0){const Nt=v.xr.getDepthSensingMesh();Nt!==null&&Mr(Nt,nt,-1/0,v.sortObjects)}Mr(N,nt,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(F,Z),Jt=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,Jt&&fe.addToRenderList(x,N),this.info.render.frame++,ct===!0&&wt.beginShadows();const at=p.state.shadowsArray;Dt.render(at,N,nt),ct===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=x.opaque,et=x.transmissive;if(p.setupLights(),nt.isArrayCamera){const Nt=nt.cameras;if(et.length>0)for(let Wt=0,$t=Nt.length;Wt<$t;Wt++){const ie=Nt[Wt];ma(lt,et,N,ie)}Jt&&fe.render(N);for(let Wt=0,$t=Nt.length;Wt<$t;Wt++){const ie=Nt[Wt];So(x,N,ie,ie.viewport)}}else et.length>0&&ma(lt,et,N,nt),Jt&&fe.render(N),So(x,N,nt);C!==null&&(G.updateMultisampleRenderTarget(C),G.updateRenderTargetMipmap(C)),N.isScene===!0&&N.onAfterRender(v,N,nt),Ee.resetDefaultState(),O=-1,q=null,_.pop(),_.length>0?(p=_[_.length-1],ct===!0&&wt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,g.pop(),g.length>0?x=g[g.length-1]:x=null};function Mr(N,nt,at,lt){if(N.visible===!1)return;if(N.layers.test(nt.layers)){if(N.isGroup)at=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(nt);else if(N.isLight)p.pushLight(N),N.castShadow&&p.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||Yt.intersectsSprite(N)){lt&&Et.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Tt);const Wt=Q.update(N),$t=N.material;$t.visible&&x.push(N,Wt,$t,at,Et.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||Yt.intersectsObject(N))){const Wt=Q.update(N),$t=N.material;if(lt&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Et.copy(N.boundingSphere.center)):(Wt.boundingSphere===null&&Wt.computeBoundingSphere(),Et.copy(Wt.boundingSphere.center)),Et.applyMatrix4(N.matrixWorld).applyMatrix4(Tt)),Array.isArray($t)){const ie=Wt.groups;for(let xe=0,ve=ie.length;xe<ve;xe++){const ce=ie[xe],Fe=$t[ce.materialIndex];Fe&&Fe.visible&&x.push(N,Wt,Fe,at,Et.z,ce)}}else $t.visible&&x.push(N,Wt,$t,at,Et.z,null)}}const Nt=N.children;for(let Wt=0,$t=Nt.length;Wt<$t;Wt++)Mr(Nt[Wt],nt,at,lt)}function So(N,nt,at,lt){const et=N.opaque,Nt=N.transmissive,Wt=N.transparent;p.setupLightsView(at),ct===!0&&wt.setGlobalState(v.clippingPlanes,at),lt&&Ot.viewport(b.copy(lt)),et.length>0&&Zi(et,nt,at),Nt.length>0&&Zi(Nt,nt,at),Wt.length>0&&Zi(Wt,nt,at),Ot.buffers.depth.setTest(!0),Ot.buffers.depth.setMask(!0),Ot.buffers.color.setMask(!0),Ot.setPolygonOffset(!1)}function ma(N,nt,at,lt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[lt.id]===void 0&&(p.state.transmissionRenderTarget[lt.id]=new mi(1,1,{generateMipmaps:!0,type:Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float")?Yi:ji,minFilter:fr,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace}));const Nt=p.state.transmissionRenderTarget[lt.id],Wt=lt.viewport||b;Nt.setSize(Wt.z,Wt.w);const $t=v.getRenderTarget();v.setRenderTarget(Nt),v.getClearColor(A),R=v.getClearAlpha(),R<1&&v.setClearColor(16777215,.5),v.clear(),Jt&&fe.render(at);const ie=v.toneMapping;v.toneMapping=ks;const xe=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),p.setupLightsView(lt),ct===!0&&wt.setGlobalState(v.clippingPlanes,lt),Zi(N,at,lt),G.updateMultisampleRenderTarget(Nt),G.updateRenderTargetMipmap(Nt),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let ve=!1;for(let ce=0,Fe=nt.length;ce<Fe;ce++){const je=nt[ce],Ue=je.object,An=je.geometry,Me=je.material,ae=je.group;if(Me.side===zn&&Ue.layers.test(lt.layers)){const $e=Me.side;Me.side=Yn,Me.needsUpdate=!0,Ms(Ue,at,lt,An,Me,ae),Me.side=$e,Me.needsUpdate=!0,ve=!0}}ve===!0&&(G.updateMultisampleRenderTarget(Nt),G.updateRenderTargetMipmap(Nt))}v.setRenderTarget($t),v.setClearColor(A,R),xe!==void 0&&(lt.viewport=xe),v.toneMapping=ie}function Zi(N,nt,at){const lt=nt.isScene===!0?nt.overrideMaterial:null;for(let et=0,Nt=N.length;et<Nt;et++){const Wt=N[et],$t=Wt.object,ie=Wt.geometry,xe=lt===null?Wt.material:lt,ve=Wt.group;$t.layers.test(at.layers)&&Ms($t,nt,at,ie,xe,ve)}}function Ms(N,nt,at,lt,et,Nt){N.onBeforeRender(v,nt,at,lt,et,Nt),N.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),et.onBeforeRender(v,nt,at,lt,N,Nt),et.transparent===!0&&et.side===zn&&et.forceSinglePass===!1?(et.side=Yn,et.needsUpdate=!0,v.renderBufferDirect(at,nt,lt,et,N,Nt),et.side=Hs,et.needsUpdate=!0,v.renderBufferDirect(at,nt,lt,et,N,Nt),et.side=zn):v.renderBufferDirect(at,nt,lt,et,N,Nt),N.onAfterRender(v,nt,at,lt,et,Nt)}function _e(N,nt,at){nt.isScene!==!0&&(nt=zt);const lt=jt.get(N),et=p.state.lights,Nt=p.state.shadowsArray,Wt=et.state.version,$t=_t.getParameters(N,et.state,Nt,nt,at),ie=_t.getProgramCacheKey($t);let xe=lt.programs;lt.environment=N.isMeshStandardMaterial?nt.environment:null,lt.fog=nt.fog,lt.envMap=(N.isMeshStandardMaterial?it:z).get(N.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&N.envMap===null?nt.environmentRotation:N.envMapRotation,xe===void 0&&(N.addEventListener("dispose",we),xe=new Map,lt.programs=xe);let ve=xe.get(ie);if(ve!==void 0){if(lt.currentProgram===ve&&lt.lightsStateVersion===Wt)return qe(N,$t),ve}else $t.uniforms=_t.getUniforms(N),N.onBeforeCompile($t,v),ve=_t.acquireProgram($t,ie),xe.set(ie,ve),lt.uniforms=$t.uniforms;const ce=lt.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(ce.clippingPlanes=wt.uniform),qe(N,$t),lt.needsLights=bo(N),lt.lightsStateVersion=Wt,lt.needsLights&&(ce.ambientLightColor.value=et.state.ambient,ce.lightProbe.value=et.state.probe,ce.directionalLights.value=et.state.directional,ce.directionalLightShadows.value=et.state.directionalShadow,ce.spotLights.value=et.state.spot,ce.spotLightShadows.value=et.state.spotShadow,ce.rectAreaLights.value=et.state.rectArea,ce.ltc_1.value=et.state.rectAreaLTC1,ce.ltc_2.value=et.state.rectAreaLTC2,ce.pointLights.value=et.state.point,ce.pointLightShadows.value=et.state.pointShadow,ce.hemisphereLights.value=et.state.hemi,ce.directionalShadowMap.value=et.state.directionalShadowMap,ce.directionalShadowMatrix.value=et.state.directionalShadowMatrix,ce.spotShadowMap.value=et.state.spotShadowMap,ce.spotLightMatrix.value=et.state.spotLightMatrix,ce.spotLightMap.value=et.state.spotLightMap,ce.pointShadowMap.value=et.state.pointShadowMap,ce.pointShadowMatrix.value=et.state.pointShadowMatrix),lt.currentProgram=ve,lt.uniformsList=null,ve}function Ii(N){if(N.uniformsList===null){const nt=N.currentProgram.getUniforms();N.uniformsList=kl.seqWithValue(nt.seq,N.uniforms)}return N.uniformsList}function qe(N,nt){const at=jt.get(N);at.outputColorSpace=nt.outputColorSpace,at.batching=nt.batching,at.batchingColor=nt.batchingColor,at.instancing=nt.instancing,at.instancingColor=nt.instancingColor,at.instancingMorph=nt.instancingMorph,at.skinning=nt.skinning,at.morphTargets=nt.morphTargets,at.morphNormals=nt.morphNormals,at.morphColors=nt.morphColors,at.morphTargetsCount=nt.morphTargetsCount,at.numClippingPlanes=nt.numClippingPlanes,at.numIntersection=nt.numClipIntersection,at.vertexAlphas=nt.vertexAlphas,at.vertexTangents=nt.vertexTangents,at.toneMapping=nt.toneMapping}function vi(N,nt,at,lt,et){nt.isScene!==!0&&(nt=zt),G.resetTextureUnits();const Nt=nt.fog,Wt=lt.isMeshStandardMaterial?nt.environment:null,$t=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Vs,ie=(lt.isMeshStandardMaterial?it:z).get(lt.envMap||Wt),xe=lt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,ve=!!at.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),ce=!!at.morphAttributes.position,Fe=!!at.morphAttributes.normal,je=!!at.morphAttributes.color;let Ue=ks;lt.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ue=v.toneMapping);const An=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Me=An!==void 0?An.length:0,ae=jt.get(lt),$e=p.state.lights;if(ct===!0&&(dt===!0||N!==q)){const jn=N===q&&lt.id===O;wt.setState(lt,N,jn)}let ze=!1;lt.version===ae.__version?(ae.needsLights&&ae.lightsStateVersion!==$e.state.version||ae.outputColorSpace!==$t||et.isBatchedMesh&&ae.batching===!1||!et.isBatchedMesh&&ae.batching===!0||et.isBatchedMesh&&ae.batchingColor===!0&&et.colorTexture===null||et.isBatchedMesh&&ae.batchingColor===!1&&et.colorTexture!==null||et.isInstancedMesh&&ae.instancing===!1||!et.isInstancedMesh&&ae.instancing===!0||et.isSkinnedMesh&&ae.skinning===!1||!et.isSkinnedMesh&&ae.skinning===!0||et.isInstancedMesh&&ae.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&ae.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&ae.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&ae.instancingMorph===!1&&et.morphTexture!==null||ae.envMap!==ie||lt.fog===!0&&ae.fog!==Nt||ae.numClippingPlanes!==void 0&&(ae.numClippingPlanes!==wt.numPlanes||ae.numIntersection!==wt.numIntersection)||ae.vertexAlphas!==xe||ae.vertexTangents!==ve||ae.morphTargets!==ce||ae.morphNormals!==Fe||ae.morphColors!==je||ae.toneMapping!==Ue||ae.morphTargetsCount!==Me)&&(ze=!0):(ze=!0,ae.__version=lt.version);let on=ae.currentProgram;ze===!0&&(on=_e(lt,nt,et));let ti=!1,ln=!1,Eo=!1;const Xe=on.getUniforms(),yi=ae.uniforms;if(Ot.useProgram(on.program)&&(ti=!0,ln=!0,Eo=!0),lt.id!==O&&(O=lt.id,ln=!0),ti||q!==N){At.reverseDepthBuffer?(Pt.copy(N.projectionMatrix),hg(Pt),ug(Pt),Xe.setValue(k,"projectionMatrix",Pt)):Xe.setValue(k,"projectionMatrix",N.projectionMatrix),Xe.setValue(k,"viewMatrix",N.matrixWorldInverse);const jn=Xe.map.cameraPosition;jn!==void 0&&jn.setValue(k,Qt.setFromMatrixPosition(N.matrixWorld)),At.logarithmicDepthBuffer&&Xe.setValue(k,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&Xe.setValue(k,"isOrthographic",N.isOrthographicCamera===!0),q!==N&&(q=N,ln=!0,Eo=!0)}if(et.isSkinnedMesh){Xe.setOptional(k,et,"bindMatrix"),Xe.setOptional(k,et,"bindMatrixInverse");const jn=et.skeleton;jn&&(jn.boneTexture===null&&jn.computeBoneTexture(),Xe.setValue(k,"boneTexture",jn.boneTexture,G))}et.isBatchedMesh&&(Xe.setOptional(k,et,"batchingTexture"),Xe.setValue(k,"batchingTexture",et._matricesTexture,G),Xe.setOptional(k,et,"batchingIdTexture"),Xe.setValue(k,"batchingIdTexture",et._indirectTexture,G),Xe.setOptional(k,et,"batchingColorTexture"),et._colorsTexture!==null&&Xe.setValue(k,"batchingColorTexture",et._colorsTexture,G));const Ji=at.morphAttributes;if((Ji.position!==void 0||Ji.normal!==void 0||Ji.color!==void 0)&&he.update(et,at,on),(ln||ae.receiveShadow!==et.receiveShadow)&&(ae.receiveShadow=et.receiveShadow,Xe.setValue(k,"receiveShadow",et.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(yi.envMap.value=ie,yi.flipEnvMap.value=ie.isCubeTexture&&ie.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&nt.environment!==null&&(yi.envMapIntensity.value=nt.environmentIntensity),ln&&(Xe.setValue(k,"toneMappingExposure",v.toneMappingExposure),ae.needsLights&&W(yi,Eo),Nt&&lt.fog===!0&&St.refreshFogUniforms(yi,Nt),St.refreshMaterialUniforms(yi,lt,U,y,p.state.transmissionRenderTarget[N.id]),kl.upload(k,Ii(ae),yi,G)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(kl.upload(k,Ii(ae),yi,G),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&Xe.setValue(k,"center",et.center),Xe.setValue(k,"modelViewMatrix",et.modelViewMatrix),Xe.setValue(k,"normalMatrix",et.normalMatrix),Xe.setValue(k,"modelMatrix",et.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const jn=lt.uniformsGroups;for(let Di=0,Ju=jn.length;Di<Ju;Di++){const Ni=jn[Di];$.update(Ni,on),$.bind(Ni,on)}}return on}function W(N,nt){N.ambientLightColor.needsUpdate=nt,N.lightProbe.needsUpdate=nt,N.directionalLights.needsUpdate=nt,N.directionalLightShadows.needsUpdate=nt,N.pointLights.needsUpdate=nt,N.pointLightShadows.needsUpdate=nt,N.spotLights.needsUpdate=nt,N.spotLightShadows.needsUpdate=nt,N.rectAreaLights.needsUpdate=nt,N.hemisphereLights.needsUpdate=nt}function bo(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(N,nt,at){jt.get(N.texture).__webglTexture=nt,jt.get(N.depthTexture).__webglTexture=at;const lt=jt.get(N);lt.__hasExternalTextures=!0,lt.__autoAllocateDepthBuffer=at===void 0,lt.__autoAllocateDepthBuffer||Ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),lt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,nt){const at=jt.get(N);at.__webglFramebuffer=nt,at.__useDefaultFramebuffer=nt===void 0},this.setRenderTarget=function(N,nt=0,at=0){C=N,P=nt,T=at;let lt=!0,et=null,Nt=!1,Wt=!1;if(N){const ie=jt.get(N);if(ie.__useDefaultFramebuffer!==void 0)Ot.bindFramebuffer(k.FRAMEBUFFER,null),lt=!1;else if(ie.__webglFramebuffer===void 0)G.setupRenderTarget(N);else if(ie.__hasExternalTextures)G.rebindTextures(N,jt.get(N.texture).__webglTexture,jt.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const ce=N.depthTexture;if(ie.__boundDepthTexture!==ce){if(ce!==null&&jt.has(ce)&&(N.width!==ce.image.width||N.height!==ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(N)}}const xe=N.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(Wt=!0);const ve=jt.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(ve[nt])?et=ve[nt][at]:et=ve[nt],Nt=!0):N.samples>0&&G.useMultisampledRTT(N)===!1?et=jt.get(N).__webglMultisampledFramebuffer:Array.isArray(ve)?et=ve[at]:et=ve,b.copy(N.viewport),S.copy(N.scissor),V=N.scissorTest}else b.copy(st).multiplyScalar(U).floor(),S.copy(mt).multiplyScalar(U).floor(),V=Mt;if(Ot.bindFramebuffer(k.FRAMEBUFFER,et)&&lt&&Ot.drawBuffers(N,et),Ot.viewport(b),Ot.scissor(S),Ot.setScissorTest(V),Nt){const ie=jt.get(N.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ie.__webglTexture,at)}else if(Wt){const ie=jt.get(N.texture),xe=nt||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,ie.__webglTexture,at||0,xe)}O=-1},this.readRenderTargetPixels=function(N,nt,at,lt,et,Nt,Wt){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $t=jt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Wt!==void 0&&($t=$t[Wt]),$t){Ot.bindFramebuffer(k.FRAMEBUFFER,$t);try{const ie=N.texture,xe=ie.format,ve=ie.type;if(!At.textureFormatReadable(xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable(ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}nt>=0&&nt<=N.width-lt&&at>=0&&at<=N.height-et&&k.readPixels(nt,at,lt,et,ue.convert(xe),ue.convert(ve),Nt)}finally{const ie=C!==null?jt.get(C).__webglFramebuffer:null;Ot.bindFramebuffer(k.FRAMEBUFFER,ie)}}},this.readRenderTargetPixelsAsync=async function(N,nt,at,lt,et,Nt,Wt){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $t=jt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Wt!==void 0&&($t=$t[Wt]),$t){const ie=N.texture,xe=ie.format,ve=ie.type;if(!At.textureFormatReadable(xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable(ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(nt>=0&&nt<=N.width-lt&&at>=0&&at<=N.height-et){Ot.bindFramebuffer(k.FRAMEBUFFER,$t);const ce=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ce),k.bufferData(k.PIXEL_PACK_BUFFER,Nt.byteLength,k.STREAM_READ),k.readPixels(nt,at,lt,et,ue.convert(xe),ue.convert(ve),0);const Fe=C!==null?jt.get(C).__webglFramebuffer:null;Ot.bindFramebuffer(k.FRAMEBUFFER,Fe);const je=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await cg(k,je,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ce),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Nt),k.deleteBuffer(ce),k.deleteSync(je),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(N,nt=null,at=0){N.isTexture!==!0&&(Bl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),nt=arguments[0]||null,N=arguments[1]);const lt=Math.pow(2,-at),et=Math.floor(N.image.width*lt),Nt=Math.floor(N.image.height*lt),Wt=nt!==null?nt.x:0,$t=nt!==null?nt.y:0;G.setTexture2D(N,0),k.copyTexSubImage2D(k.TEXTURE_2D,at,0,0,Wt,$t,et,Nt),Ot.unbindTexture()},this.copyTextureToTexture=function(N,nt,at=null,lt=null,et=0){N.isTexture!==!0&&(Bl("WebGLRenderer: copyTextureToTexture function signature has changed."),lt=arguments[0]||null,N=arguments[1],nt=arguments[2],et=arguments[3]||0,at=null);let Nt,Wt,$t,ie,xe,ve;at!==null?(Nt=at.max.x-at.min.x,Wt=at.max.y-at.min.y,$t=at.min.x,ie=at.min.y):(Nt=N.image.width,Wt=N.image.height,$t=0,ie=0),lt!==null?(xe=lt.x,ve=lt.y):(xe=0,ve=0);const ce=ue.convert(nt.format),Fe=ue.convert(nt.type);G.setTexture2D(nt,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,nt.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,nt.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,nt.unpackAlignment);const je=k.getParameter(k.UNPACK_ROW_LENGTH),Ue=k.getParameter(k.UNPACK_IMAGE_HEIGHT),An=k.getParameter(k.UNPACK_SKIP_PIXELS),Me=k.getParameter(k.UNPACK_SKIP_ROWS),ae=k.getParameter(k.UNPACK_SKIP_IMAGES),$e=N.isCompressedTexture?N.mipmaps[et]:N.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,$e.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,$e.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,$t),k.pixelStorei(k.UNPACK_SKIP_ROWS,ie),N.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,et,xe,ve,Nt,Wt,ce,Fe,$e.data):N.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,et,xe,ve,$e.width,$e.height,ce,$e.data):k.texSubImage2D(k.TEXTURE_2D,et,xe,ve,Nt,Wt,ce,Fe,$e),k.pixelStorei(k.UNPACK_ROW_LENGTH,je),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ue),k.pixelStorei(k.UNPACK_SKIP_PIXELS,An),k.pixelStorei(k.UNPACK_SKIP_ROWS,Me),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ae),et===0&&nt.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),Ot.unbindTexture()},this.copyTextureToTexture3D=function(N,nt,at=null,lt=null,et=0){N.isTexture!==!0&&(Bl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),at=arguments[0]||null,lt=arguments[1]||null,N=arguments[2],nt=arguments[3],et=arguments[4]||0);let Nt,Wt,$t,ie,xe,ve,ce,Fe,je;const Ue=N.isCompressedTexture?N.mipmaps[et]:N.image;at!==null?(Nt=at.max.x-at.min.x,Wt=at.max.y-at.min.y,$t=at.max.z-at.min.z,ie=at.min.x,xe=at.min.y,ve=at.min.z):(Nt=Ue.width,Wt=Ue.height,$t=Ue.depth,ie=0,xe=0,ve=0),lt!==null?(ce=lt.x,Fe=lt.y,je=lt.z):(ce=0,Fe=0,je=0);const An=ue.convert(nt.format),Me=ue.convert(nt.type);let ae;if(nt.isData3DTexture)G.setTexture3D(nt,0),ae=k.TEXTURE_3D;else if(nt.isDataArrayTexture||nt.isCompressedArrayTexture)G.setTexture2DArray(nt,0),ae=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,nt.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,nt.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,nt.unpackAlignment);const $e=k.getParameter(k.UNPACK_ROW_LENGTH),ze=k.getParameter(k.UNPACK_IMAGE_HEIGHT),on=k.getParameter(k.UNPACK_SKIP_PIXELS),ti=k.getParameter(k.UNPACK_SKIP_ROWS),ln=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Ue.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ue.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ie),k.pixelStorei(k.UNPACK_SKIP_ROWS,xe),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ve),N.isDataTexture||N.isData3DTexture?k.texSubImage3D(ae,et,ce,Fe,je,Nt,Wt,$t,An,Me,Ue.data):nt.isCompressedArrayTexture?k.compressedTexSubImage3D(ae,et,ce,Fe,je,Nt,Wt,$t,An,Ue.data):k.texSubImage3D(ae,et,ce,Fe,je,Nt,Wt,$t,An,Me,Ue),k.pixelStorei(k.UNPACK_ROW_LENGTH,$e),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ze),k.pixelStorei(k.UNPACK_SKIP_PIXELS,on),k.pixelStorei(k.UNPACK_SKIP_ROWS,ti),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ln),et===0&&nt.generateMipmaps&&k.generateMipmap(ae),Ot.unbindTexture()},this.initRenderTarget=function(N){jt.get(N).__webglFramebuffer===void 0&&G.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?G.setTextureCube(N,0):N.isData3DTexture?G.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?G.setTexture2DArray(N,0):G.setTexture2D(N,0),Ot.unbindTexture()},this.resetState=function(){P=0,T=0,C=null,Ot.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Lu?"display-p3":"srgb",e.unpackColorSpace=Ve.workingColorSpace===lc?"display-p3":"srgb"}}class Uu{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Vt(t),this.near=e,this.far=n}clone(){return new Uu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class M1 extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class w1{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=uu,this.updateRanges=[],this.version=0,this.uuid=ys()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ys()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ys()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Vn=new B;class Zl{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Vn.fromBufferAttribute(this,e),Vn.applyMatrix4(t),this.setXYZ(e,Vn.x,Vn.y,Vn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Vn.fromBufferAttribute(this,e),Vn.applyNormalMatrix(t),this.setXYZ(e,Vn.x,Vn.y,Vn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Vn.fromBufferAttribute(this,e),Vn.transformDirection(t),this.setXYZ(e,Vn.x,Vn.y,Vn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Vi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ke(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ke(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Vi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Vi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Vi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Vi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array),i=Ke(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array),i=Ke(i,this.array),r=Ke(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new un(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Zl(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class fu extends Ws{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Hr;const Bo=new B,Vr=new B,Wr=new B,qr=new bt,ko=new bt,o0=new Ge,tl=new B,Go=new B,el=new B,hf=new bt,ih=new bt,uf=new bt;class df extends rn{constructor(t=new fu){if(super(),this.isSprite=!0,this.type="Sprite",Hr===void 0){Hr=new Qe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new w1(e,5);Hr.setIndex([0,1,2,0,2,3]),Hr.setAttribute("position",new Zl(n,3,0,!1)),Hr.setAttribute("uv",new Zl(n,2,3,!1))}this.geometry=Hr,this.material=t,this.center=new bt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vr.setFromMatrixScale(this.matrixWorld),o0.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Wr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vr.multiplyScalar(-Wr.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;nl(tl.set(-.5,-.5,0),Wr,o,Vr,i,r),nl(Go.set(.5,-.5,0),Wr,o,Vr,i,r),nl(el.set(.5,.5,0),Wr,o,Vr,i,r),hf.set(0,0),ih.set(1,0),uf.set(1,1);let a=t.ray.intersectTriangle(tl,Go,el,!1,Bo);if(a===null&&(nl(Go.set(-.5,.5,0),Wr,o,Vr,i,r),ih.set(0,1),a=t.ray.intersectTriangle(tl,el,Go,!1,Bo),a===null))return;const l=t.ray.origin.distanceTo(Bo);l<t.near||l>t.far||e.push({distance:l,point:Bo.clone(),uv:li.getInterpolation(Bo,tl,Go,el,hf,ih,uf,new bt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function nl(s,t,e,n,i,r){qr.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(ko.x=r*qr.x-i*qr.y,ko.y=i*qr.x+r*qr.y):ko.copy(qr),s.copy(t),s.x+=ko.x,s.y+=ko.y,s.applyMatrix4(o0)}class a0 extends Gn{constructor(t=null,e=1,n=1,i,r,o,a,l,c=Qn,h=Qn,d,u){super(null,o,a,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pu extends un{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Xr=new Ge,ff=new Ge,il=[],pf=new vr,S1=new Ge,Ho=new ye,Vo=new yr;class ms extends ye{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new pu(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,S1)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new vr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xr),pf.copy(t.boundingBox).applyMatrix4(Xr),this.boundingBox.union(pf)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new yr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xr),Vo.copy(t.boundingSphere).applyMatrix4(Xr),this.boundingSphere.union(Vo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Ho.geometry=this.geometry,Ho.material=this.material,Ho.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vo.copy(this.boundingSphere),Vo.applyMatrix4(n),t.ray.intersectsSphere(Vo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Xr),ff.multiplyMatrices(n,Xr),Ho.matrixWorld=ff,Ho.raycast(t,il);for(let o=0,a=il.length;o<a;o++){const l=il[o];l.instanceId=r,l.object=this,e.push(l)}il.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new pu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new a0(new Float32Array(i*this.count),i,this.count,ac,qi));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class na extends Ws{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Jl=new B,Ql=new B,mf=new Ge,Wo=new cc,sl=new yr,sh=new B,gf=new B;class l0 extends rn{constructor(t=new Qe,e=new na){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Jl.fromBufferAttribute(e,i-1),Ql.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Jl.distanceTo(Ql);t.setAttribute("lineDistance",new Le(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sl.copy(n.boundingSphere),sl.applyMatrix4(i),sl.radius+=r,t.ray.intersectsSphere(sl)===!1)return;mf.copy(i).invert(),Wo.copy(t.ray).applyMatrix4(mf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=f,p=m-1;x<p;x+=c){const g=h.getX(x),_=h.getX(x+1),v=rl(this,t,Wo,l,g,_);v&&e.push(v)}if(this.isLineLoop){const x=h.getX(m-1),p=h.getX(f),g=rl(this,t,Wo,l,x,p);g&&e.push(g)}}else{const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=f,p=m-1;x<p;x+=c){const g=rl(this,t,Wo,l,x,x+1);g&&e.push(g)}if(this.isLineLoop){const x=rl(this,t,Wo,l,m-1,f);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function rl(s,t,e,n,i,r){const o=s.geometry.attributes.position;if(Jl.fromBufferAttribute(o,i),Ql.fromBufferAttribute(o,r),e.distanceSqToSegment(Jl,Ql,sh,gf)>n)return;sh.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(sh);if(!(l<t.near||l>t.far))return{distance:l,point:gf.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const xf=new B,vf=new B;class rh extends l0{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)xf.fromBufferAttribute(e,i),vf.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+xf.distanceTo(vf);t.setAttribute("lineDistance",new Le(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class c0 extends Ws{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const yf=new Ge,mu=new cc,ol=new yr,al=new B;class h0 extends rn{constructor(t=new Qe,e=new c0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ol.copy(n.boundingSphere),ol.applyMatrix4(i),ol.radius+=r,t.ray.intersectsSphere(ol)===!1)return;yf.copy(i).invert(),mu.copy(t.ray).applyMatrix4(yf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=u,x=f;m<x;m++){const p=c.getX(m);al.fromBufferAttribute(d,p),_f(al,p,l,i,t,e,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let m=u,x=f;m<x;m++)al.fromBufferAttribute(d,m),_f(al,m,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function _f(s,t,e,n,i,r,o){const a=mu.distanceSqToPoint(s);if(a<e){const l=new B;mu.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Gl extends Gn{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ki{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],u=n[i+1]-h,f=(o-h)/u;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new bt:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new B,i=[],r=[],o=[],a=new B,l=new Ge;for(let f=0;f<=t;f++){const m=f/t;i[f]=this.getTangentAt(m,new B)}r[0]=new B,o[0]=new B;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Ln(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Ln(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Fu extends Ki{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new bt){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class b1 extends Fu{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ou(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,i(o,a,u,f)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const ll=new B,oh=new Ou,ah=new Ou,lh=new Ou;class E1 extends Ki{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new B){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(ll.subVectors(i[0],i[1]).add(i[0]),c=ll);const d=i[a%r],u=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(ll.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=ll),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),p<1e-4&&(p=x),oh.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,m,x,p),ah.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,m,x,p),lh.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,m,x,p)}else this.curveType==="catmullrom"&&(oh.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),ah.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),lh.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(oh.calc(l),ah.calc(l),lh.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new B().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Mf(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function T1(s,t){const e=1-s;return e*e*t}function A1(s,t){return 2*(1-s)*s*t}function C1(s,t){return s*s*t}function ra(s,t,e,n){return T1(s,t)+A1(s,e)+C1(s,n)}function R1(s,t){const e=1-s;return e*e*e*t}function P1(s,t){const e=1-s;return 3*e*e*s*t}function L1(s,t){return 3*(1-s)*s*s*t}function z1(s,t){return s*s*s*t}function oa(s,t,e,n,i){return R1(s,t)+P1(s,e)+L1(s,n)+z1(s,i)}class u0 extends Ki{constructor(t=new bt,e=new bt,n=new bt,i=new bt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new bt){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(oa(t,i.x,r.x,o.x,a.x),oa(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class I1 extends Ki{constructor(t=new B,e=new B,n=new B,i=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new B){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(oa(t,i.x,r.x,o.x,a.x),oa(t,i.y,r.y,o.y,a.y),oa(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class d0 extends Ki{constructor(t=new bt,e=new bt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new bt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new bt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class D1 extends Ki{constructor(t=new B,e=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new B){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new B){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class f0 extends Ki{constructor(t=new bt,e=new bt,n=new bt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new bt){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(ra(t,i.x,r.x,o.x),ra(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class N1 extends Ki{constructor(t=new B,e=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new B){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(ra(t,i.x,r.x,o.x),ra(t,i.y,r.y,o.y),ra(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class p0 extends Ki{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new bt){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(Mf(a,l.x,c.x,h.x,d.x),Mf(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new bt().fromArray(i))}return this}}var gu=Object.freeze({__proto__:null,ArcCurve:b1,CatmullRomCurve3:E1,CubicBezierCurve:u0,CubicBezierCurve3:I1,EllipseCurve:Fu,LineCurve:d0,LineCurve3:D1,QuadraticBezierCurve:f0,QuadraticBezierCurve3:N1,SplineCurve:p0});class U1 extends Ki{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gu[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new gu[i.type]().fromJSON(i))}return this}}class xu extends U1{constructor(t){super(),this.type="Path",this.currentPoint=new bt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new d0(this.currentPoint.clone(),new bt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new f0(this.currentPoint.clone(),new bt(t,e),new bt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new u0(this.currentPoint.clone(),new bt(t,e),new bt(n,i),new bt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new p0(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){const c=new Fu(t,e,n,i,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Bu extends Qe{constructor(t=[new bt(0,-.5),new bt(.5,0),new bt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Ln(i,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,d=new B,u=new bt,f=new B,m=new B,x=new B;let p=0,g=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:p=t[_+1].x-t[_].x,g=t[_+1].y-t[_].y,f.x=g*1,f.y=-p,f.z=g*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:p=t[_+1].x-t[_].x,g=t[_+1].y-t[_].y,f.x=g*1,f.y=-p,f.z=g*0,m.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(m)}for(let _=0;_<=e;_++){const v=n+_*h*i,M=Math.sin(v),P=Math.cos(v);for(let T=0;T<=t.length-1;T++){d.x=t[T].x*M,d.y=t[T].y,d.z=t[T].x*P,o.push(d.x,d.y,d.z),u.x=_/e,u.y=T/(t.length-1),a.push(u.x,u.y);const C=l[3*T+0]*M,O=l[3*T+1],q=l[3*T+0]*P;c.push(C,O,q)}}for(let _=0;_<e;_++)for(let v=0;v<t.length-1;v++){const M=v+_*t.length,P=M,T=M+t.length,C=M+t.length+1,O=M+1;r.push(P,T,O),r.push(C,O,T)}this.setIndex(r),this.setAttribute("position",new Le(o,3)),this.setAttribute("uv",new Le(a,2)),this.setAttribute("normal",new Le(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bu(t.points,t.segments,t.phiStart,t.phiLength)}}class Wi extends Qe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new B,h=new bt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=n+d/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Le(o,3)),this.setAttribute("normal",new Le(a,3)),this.setAttribute("uv",new Le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wi(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Te extends Qe{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],f=[];let m=0;const x=[],p=n/2;let g=0;_(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Le(d,3)),this.setAttribute("normal",new Le(u,3)),this.setAttribute("uv",new Le(f,2));function _(){const M=new B,P=new B;let T=0;const C=(e-t)/n;for(let O=0;O<=r;O++){const q=[],b=O/r,S=b*(e-t)+t;for(let V=0;V<=i;V++){const A=V/i,R=A*l+a,I=Math.sin(R),y=Math.cos(R);P.x=S*I,P.y=-b*n+p,P.z=S*y,d.push(P.x,P.y,P.z),M.set(I,C,y).normalize(),u.push(M.x,M.y,M.z),f.push(A,1-b),q.push(m++)}x.push(q)}for(let O=0;O<i;O++)for(let q=0;q<r;q++){const b=x[q][O],S=x[q+1][O],V=x[q+1][O+1],A=x[q][O+1];t>0&&(h.push(b,S,A),T+=3),e>0&&(h.push(S,V,A),T+=3)}c.addGroup(g,T,0),g+=T}function v(M){const P=m,T=new bt,C=new B;let O=0;const q=M===!0?t:e,b=M===!0?1:-1;for(let V=1;V<=i;V++)d.push(0,p*b,0),u.push(0,b,0),f.push(.5,.5),m++;const S=m;for(let V=0;V<=i;V++){const R=V/i*l+a,I=Math.cos(R),y=Math.sin(R);C.x=q*y,C.y=p*b,C.z=q*I,d.push(C.x,C.y,C.z),u.push(0,b,0),T.x=I*.5+.5,T.y=y*.5*b+.5,f.push(T.x,T.y),m++}for(let V=0;V<i;V++){const A=P+V,R=S+V;M===!0?h.push(R,R+1,A):h.push(R+1,R,A),O+=3}c.addGroup(g,O,M===!0?1:2),g+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Te(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class pi extends Te{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new pi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class da extends Qe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Le(r,3)),this.setAttribute("normal",new Le(r.slice(),3)),this.setAttribute("uv",new Le(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const v=new B,M=new B,P=new B;for(let T=0;T<e.length;T+=3)f(e[T+0],v),f(e[T+1],M),f(e[T+2],P),l(v,M,P,_)}function l(_,v,M,P){const T=P+1,C=[];for(let O=0;O<=T;O++){C[O]=[];const q=_.clone().lerp(M,O/T),b=v.clone().lerp(M,O/T),S=T-O;for(let V=0;V<=S;V++)V===0&&O===T?C[O][V]=q:C[O][V]=q.clone().lerp(b,V/S)}for(let O=0;O<T;O++)for(let q=0;q<2*(T-O)-1;q++){const b=Math.floor(q/2);q%2===0?(u(C[O][b+1]),u(C[O+1][b]),u(C[O][b])):(u(C[O][b+1]),u(C[O+1][b+1]),u(C[O+1][b]))}}function c(_){const v=new B;for(let M=0;M<r.length;M+=3)v.x=r[M+0],v.y=r[M+1],v.z=r[M+2],v.normalize().multiplyScalar(_),r[M+0]=v.x,r[M+1]=v.y,r[M+2]=v.z}function h(){const _=new B;for(let v=0;v<r.length;v+=3){_.x=r[v+0],_.y=r[v+1],_.z=r[v+2];const M=p(_)/2/Math.PI+.5,P=g(_)/Math.PI+.5;o.push(M,1-P)}m(),d()}function d(){for(let _=0;_<o.length;_+=6){const v=o[_+0],M=o[_+2],P=o[_+4],T=Math.max(v,M,P),C=Math.min(v,M,P);T>.9&&C<.1&&(v<.2&&(o[_+0]+=1),M<.2&&(o[_+2]+=1),P<.2&&(o[_+4]+=1))}}function u(_){r.push(_.x,_.y,_.z)}function f(_,v){const M=_*3;v.x=t[M+0],v.y=t[M+1],v.z=t[M+2]}function m(){const _=new B,v=new B,M=new B,P=new B,T=new bt,C=new bt,O=new bt;for(let q=0,b=0;q<r.length;q+=9,b+=6){_.set(r[q+0],r[q+1],r[q+2]),v.set(r[q+3],r[q+4],r[q+5]),M.set(r[q+6],r[q+7],r[q+8]),T.set(o[b+0],o[b+1]),C.set(o[b+2],o[b+3]),O.set(o[b+4],o[b+5]),P.copy(_).add(v).add(M).divideScalar(3);const S=p(P);x(T,b+0,_,S),x(C,b+2,v,S),x(O,b+4,M,S)}}function x(_,v,M,P){P<0&&_.x===1&&(o[v]=_.x-1),M.x===0&&M.z===0&&(o[v]=P/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new da(t.vertices,t.indices,t.radius,t.details)}}class tc extends da{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new tc(t.radius,t.detail)}}const cl=new B,hl=new B,ch=new B,ul=new li;class wf extends Qe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),r=Math.cos(Ol*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);const{a:x,b:p,c:g}=ul;if(x.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),g.fromBufferAttribute(a,c[2]),ul.getNormal(ch),d[0]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,d[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,d[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let _=0;_<3;_++){const v=(_+1)%3,M=d[_],P=d[v],T=ul[h[_]],C=ul[h[v]],O=`${M}_${P}`,q=`${P}_${M}`;q in u&&u[q]?(ch.dot(u[q].normal)<=r&&(f.push(T.x,T.y,T.z),f.push(C.x,C.y,C.z)),u[q]=null):O in u||(u[O]={index0:c[_],index1:c[v],normal:ch.clone()})}}for(const m in u)if(u[m]){const{index0:x,index1:p}=u[m];cl.fromBufferAttribute(a,x),hl.fromBufferAttribute(a,p),f.push(cl.x,cl.y,cl.z),f.push(hl.x,hl.y,hl.z)}this.setAttribute("position",new Le(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}let Ti=class extends xu{constructor(t){super(t),this.uuid=ys(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new xu().fromJSON(i))}return this}};const F1={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=m0(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,d,u,f;if(n&&(r=H1(s,t,r,e)),s.length>80*e){a=c=s[0],l=h=s[1];for(let m=e;m<i;m+=e)d=s[m],u=s[m+1],d<a&&(a=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return la(r,o,e,a,l,f,0),o}};function m0(s,t,e,n,i){let r,o;if(i===Q1(s,t,e,n)>0)for(r=t;r<e;r+=n)o=Sf(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=Sf(r,s[r],s[r+1],o);return o&&uc(o,o.next)&&(ha(o),o=o.next),o}function xr(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(uc(e,e.next)||cn(e.prev,e,e.next)===0)){if(ha(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function la(s,t,e,n,i,r,o){if(!s)return;!o&&r&&Y1(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?B1(s,n,i,r):O1(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),ha(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=k1(xr(s),t,e),la(s,t,e,n,i,r,2)):o===2&&G1(s,t,e,n,i,r):la(xr(s),t,e,n,i,r,1);break}}}function O1(s){const t=s.prev,e=s,n=s.next;if(cn(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<r?i<o?i:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,u=i>r?i>o?i:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c;let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=f&&to(i,a,r,l,o,c,m.x,m.y)&&cn(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function B1(s,t,e,n){const i=s.prev,r=s,o=s.next;if(cn(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,d=r.y,u=o.y,f=a<l?a<c?a:c:l<c?l:c,m=h<d?h<u?h:u:d<u?d:u,x=a>l?a>c?a:c:l>c?l:c,p=h>d?h>u?h:u:d>u?d:u,g=vu(f,m,t,e,n),_=vu(x,p,t,e,n);let v=s.prevZ,M=s.nextZ;for(;v&&v.z>=g&&M&&M.z<=_;){if(v.x>=f&&v.x<=x&&v.y>=m&&v.y<=p&&v!==i&&v!==o&&to(a,h,l,d,c,u,v.x,v.y)&&cn(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=f&&M.x<=x&&M.y>=m&&M.y<=p&&M!==i&&M!==o&&to(a,h,l,d,c,u,M.x,M.y)&&cn(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=g;){if(v.x>=f&&v.x<=x&&v.y>=m&&v.y<=p&&v!==i&&v!==o&&to(a,h,l,d,c,u,v.x,v.y)&&cn(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=_;){if(M.x>=f&&M.x<=x&&M.y>=m&&M.y<=p&&M!==i&&M!==o&&to(a,h,l,d,c,u,M.x,M.y)&&cn(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function k1(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!uc(i,r)&&g0(i,n,n.next,r)&&ca(i,r)&&ca(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),ha(n),ha(n.next),n=s=r),n=n.next}while(n!==s);return xr(n)}function G1(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&K1(o,a)){let l=x0(o,a);o=xr(o,o.next),l=xr(l,l.next),la(o,t,e,n,i,r,0),la(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function H1(s,t,e,n){const i=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=m0(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push($1(c));for(i.sort(V1),r=0;r<i.length;r++)e=W1(i[r],e);return e}function V1(s,t){return s.x-t.x}function W1(s,t){const e=q1(s,t);if(!e)return t;const n=x0(e,s);return xr(n,n.next),xr(e,e.next)}function q1(s,t){let e=t,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>n&&(n=u,i=e.x<e.next.x?e:e.next,u===r))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,d;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&to(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),ca(e,s)&&(d<h||d===h&&(e.x>i.x||e.x===i.x&&X1(i,e)))&&(i=e,h=d)),e=e.next;while(e!==a);return i}function X1(s,t){return cn(s.prev,s,t.prev)<0&&cn(t.next,s,s.next)<0}function Y1(s,t,e,n){let i=s;do i.z===0&&(i.z=vu(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,j1(i)}function j1(s){let t,e,n,i,r,o,a,l,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(o>1);return s}function vu(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function $1(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function to(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function K1(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Z1(s,t)&&(ca(s,t)&&ca(t,s)&&J1(s,t)&&(cn(s.prev,s,t.prev)||cn(s,t.prev,t))||uc(s,t)&&cn(s.prev,s,s.next)>0&&cn(t.prev,t,t.next)>0)}function cn(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function uc(s,t){return s.x===t.x&&s.y===t.y}function g0(s,t,e,n){const i=fl(cn(s,t,e)),r=fl(cn(s,t,n)),o=fl(cn(e,n,s)),a=fl(cn(e,n,t));return!!(i!==r&&o!==a||i===0&&dl(s,e,t)||r===0&&dl(s,n,t)||o===0&&dl(e,s,n)||a===0&&dl(e,t,n))}function dl(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function fl(s){return s>0?1:s<0?-1:0}function Z1(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&g0(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function ca(s,t){return cn(s.prev,s,s.next)<0?cn(s,t,s.next)>=0&&cn(s,s.prev,t)>=0:cn(s,t,s.prev)<0||cn(s,s.next,t)<0}function J1(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function x0(s,t){const e=new yu(s.i,s.x,s.y),n=new yu(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Sf(s,t,e,n){const i=new yu(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ha(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function yu(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Q1(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class _s{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return _s.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];bf(t),Ef(n,t);let o=t.length;e.forEach(bf);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Ef(n,e[l]);const a=F1.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function bf(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Ef(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Fs extends Qe{constructor(t=new Ti([new bt(.5,.5),new bt(-.5,.5),new bt(-.5,-.5),new bt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Le(i,3)),this.setAttribute("uv",new Le(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:tM;let v,M=!1,P,T,C,O;g&&(v=g.getSpacedPoints(h),M=!0,u=!1,P=g.computeFrenetFrames(h,!1),T=new B,C=new B,O=new B),u||(p=0,f=0,m=0,x=0);const q=a.extractPoints(c);let b=q.shape;const S=q.holes;if(!_s.isClockWise(b)){b=b.reverse();for(let ht=0,k=S.length;ht<k;ht++){const Lt=S[ht];_s.isClockWise(Lt)&&(S[ht]=Lt.reverse())}}const A=_s.triangulateShape(b,S),R=b;for(let ht=0,k=S.length;ht<k;ht++){const Lt=S[ht];b=b.concat(Lt)}function I(ht,k,Lt){return k||console.error("THREE.ExtrudeGeometry: vec does not exist"),ht.clone().addScaledVector(k,Lt)}const y=b.length,U=A.length;function F(ht,k,Lt){let Ft,At,Ot;const ne=ht.x-k.x,jt=ht.y-k.y,G=Lt.x-ht.x,z=Lt.y-ht.y,it=ne*ne+jt*jt,Y=ne*z-jt*G;if(Math.abs(Y)>Number.EPSILON){const j=Math.sqrt(it),Q=Math.sqrt(G*G+z*z),_t=k.x-jt/j,St=k.y+ne/j,Bt=Lt.x-z/Q,pe=Lt.y+G/Q,wt=((Bt-_t)*z-(pe-St)*G)/(ne*z-jt*G);Ft=_t+ne*wt-ht.x,At=St+jt*wt-ht.y;const Dt=Ft*Ft+At*At;if(Dt<=2)return new bt(Ft,At);Ot=Math.sqrt(Dt/2)}else{let j=!1;ne>Number.EPSILON?G>Number.EPSILON&&(j=!0):ne<-Number.EPSILON?G<-Number.EPSILON&&(j=!0):Math.sign(jt)===Math.sign(z)&&(j=!0),j?(Ft=-jt,At=ne,Ot=Math.sqrt(it)):(Ft=ne,At=jt,Ot=Math.sqrt(it/2))}return new bt(Ft/Ot,At/Ot)}const Z=[];for(let ht=0,k=R.length,Lt=k-1,Ft=ht+1;ht<k;ht++,Lt++,Ft++)Lt===k&&(Lt=0),Ft===k&&(Ft=0),Z[ht]=F(R[ht],R[Lt],R[Ft]);const st=[];let mt,Mt=Z.concat();for(let ht=0,k=S.length;ht<k;ht++){const Lt=S[ht];mt=[];for(let Ft=0,At=Lt.length,Ot=At-1,ne=Ft+1;Ft<At;Ft++,Ot++,ne++)Ot===At&&(Ot=0),ne===At&&(ne=0),mt[Ft]=F(Lt[Ft],Lt[Ot],Lt[ne]);st.push(mt),Mt=Mt.concat(mt)}for(let ht=0;ht<p;ht++){const k=ht/p,Lt=f*Math.cos(k*Math.PI/2),Ft=m*Math.sin(k*Math.PI/2)+x;for(let At=0,Ot=R.length;At<Ot;At++){const ne=I(R[At],Z[At],Ft);Tt(ne.x,ne.y,-Lt)}for(let At=0,Ot=S.length;At<Ot;At++){const ne=S[At];mt=st[At];for(let jt=0,G=ne.length;jt<G;jt++){const z=I(ne[jt],mt[jt],Ft);Tt(z.x,z.y,-Lt)}}}const Yt=m+x;for(let ht=0;ht<y;ht++){const k=u?I(b[ht],Mt[ht],Yt):b[ht];M?(C.copy(P.normals[0]).multiplyScalar(k.x),T.copy(P.binormals[0]).multiplyScalar(k.y),O.copy(v[0]).add(C).add(T),Tt(O.x,O.y,O.z)):Tt(k.x,k.y,0)}for(let ht=1;ht<=h;ht++)for(let k=0;k<y;k++){const Lt=u?I(b[k],Mt[k],Yt):b[k];M?(C.copy(P.normals[ht]).multiplyScalar(Lt.x),T.copy(P.binormals[ht]).multiplyScalar(Lt.y),O.copy(v[ht]).add(C).add(T),Tt(O.x,O.y,O.z)):Tt(Lt.x,Lt.y,d/h*ht)}for(let ht=p-1;ht>=0;ht--){const k=ht/p,Lt=f*Math.cos(k*Math.PI/2),Ft=m*Math.sin(k*Math.PI/2)+x;for(let At=0,Ot=R.length;At<Ot;At++){const ne=I(R[At],Z[At],Ft);Tt(ne.x,ne.y,d+Lt)}for(let At=0,Ot=S.length;At<Ot;At++){const ne=S[At];mt=st[At];for(let jt=0,G=ne.length;jt<G;jt++){const z=I(ne[jt],mt[jt],Ft);M?Tt(z.x,z.y+v[h-1].y,v[h-1].x+Lt):Tt(z.x,z.y,d+Lt)}}}ct(),dt();function ct(){const ht=i.length/3;if(u){let k=0,Lt=y*k;for(let Ft=0;Ft<U;Ft++){const At=A[Ft];Qt(At[2]+Lt,At[1]+Lt,At[0]+Lt)}k=h+p*2,Lt=y*k;for(let Ft=0;Ft<U;Ft++){const At=A[Ft];Qt(At[0]+Lt,At[1]+Lt,At[2]+Lt)}}else{for(let k=0;k<U;k++){const Lt=A[k];Qt(Lt[2],Lt[1],Lt[0])}for(let k=0;k<U;k++){const Lt=A[k];Qt(Lt[0]+y*h,Lt[1]+y*h,Lt[2]+y*h)}}n.addGroup(ht,i.length/3-ht,0)}function dt(){const ht=i.length/3;let k=0;Pt(R,k),k+=R.length;for(let Lt=0,Ft=S.length;Lt<Ft;Lt++){const At=S[Lt];Pt(At,k),k+=At.length}n.addGroup(ht,i.length/3-ht,1)}function Pt(ht,k){let Lt=ht.length;for(;--Lt>=0;){const Ft=Lt;let At=Lt-1;At<0&&(At=ht.length-1);for(let Ot=0,ne=h+p*2;Ot<ne;Ot++){const jt=y*Ot,G=y*(Ot+1),z=k+Ft+jt,it=k+At+jt,Y=k+At+G,j=k+Ft+G;Et(z,it,Y,j)}}}function Tt(ht,k,Lt){l.push(ht),l.push(k),l.push(Lt)}function Qt(ht,k,Lt){zt(ht),zt(k),zt(Lt);const Ft=i.length/3,At=_.generateTopUV(n,i,Ft-3,Ft-2,Ft-1);Jt(At[0]),Jt(At[1]),Jt(At[2])}function Et(ht,k,Lt,Ft){zt(ht),zt(k),zt(Ft),zt(k),zt(Lt),zt(Ft);const At=i.length/3,Ot=_.generateSideWallUV(n,i,At-6,At-3,At-2,At-1);Jt(Ot[0]),Jt(Ot[1]),Jt(Ot[3]),Jt(Ot[1]),Jt(Ot[2]),Jt(Ot[3])}function zt(ht){i.push(l[ht*3+0]),i.push(l[ht*3+1]),i.push(l[ht*3+2])}function Jt(ht){r.push(ht.x),r.push(ht.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return eM(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new gu[i.type]().fromJSON(i)),new Fs(n,t.options)}}const tM={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new bt(r,o),new bt(a,l),new bt(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[i*3],f=t[i*3+1],m=t[i*3+2],x=t[r*3],p=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new bt(o,1-l),new bt(c,1-d),new bt(u,1-m),new bt(x,1-g)]:[new bt(a,1-l),new bt(h,1-d),new bt(f,1-m),new bt(p,1-g)]}};function eM(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Xn extends da{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Xn(t.radius,t.detail)}}class ku extends da{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ku(t.radius,t.detail)}}class Gs extends Qe{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let d=t;const u=(e-t)/i,f=new B,m=new bt;for(let x=0;x<=i;x++){for(let p=0;p<=n;p++){const g=r+p/n*o;f.x=d*Math.cos(g),f.y=d*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}d+=u}for(let x=0;x<i;x++){const p=x*(n+1);for(let g=0;g<n;g++){const _=g+p,v=_,M=_+n+1,P=_+n+2,T=_+1;a.push(v,M,T),a.push(M,P,T)}}this.setIndex(a),this.setAttribute("position",new Le(l,3)),this.setAttribute("normal",new Le(c,3)),this.setAttribute("uv",new Le(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gs(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Gu extends Qe{constructor(t=new Ti([new bt(0,.5),new bt(-.5,-.5),new bt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Le(i,3)),this.setAttribute("normal",new Le(r,3)),this.setAttribute("uv",new Le(o,2));function c(h){const d=i.length/3,u=h.extractPoints(e);let f=u.shape;const m=u.holes;_s.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,g=m.length;p<g;p++){const _=m[p];_s.isClockWise(_)===!0&&(m[p]=_.reverse())}const x=_s.triangulateShape(f,m);for(let p=0,g=m.length;p<g;p++){const _=m[p];f=f.concat(_)}for(let p=0,g=f.length;p<g;p++){const _=f[p];i.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let p=0,g=x.length;p<g;p++){const _=x[p],v=_[0]+d,M=_[1]+d,P=_[2]+d;n.push(v,M,P),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return nM(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const o=e[t.shapes[i]];n.push(o)}return new Gu(n,t.curveSegments)}}function nM(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class ri extends Qe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new B,u=new B,f=[],m=[],x=[],p=[];for(let g=0;g<=n;g++){const _=[],v=g/n;let M=0;g===0&&o===0?M=.5/e:g===n&&l===Math.PI&&(M=-.5/e);for(let P=0;P<=e;P++){const T=P/e;d.x=-t*Math.cos(i+T*r)*Math.sin(o+v*a),d.y=t*Math.cos(o+v*a),d.z=t*Math.sin(i+T*r)*Math.sin(o+v*a),m.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),p.push(T+M,1-v),_.push(c++)}h.push(_)}for(let g=0;g<n;g++)for(let _=0;_<e;_++){const v=h[g][_+1],M=h[g][_],P=h[g+1][_],T=h[g+1][_+1];(g!==0||o>0)&&f.push(v,M,T),(g!==n-1||l<Math.PI)&&f.push(M,P,T)}this.setIndex(f),this.setAttribute("position",new Le(m,3)),this.setAttribute("normal",new Le(x,3)),this.setAttribute("uv",new Le(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ri(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Pi extends Qe{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new B,d=new B,u=new B;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){const x=m/i*r,p=f/n*Math.PI*2;d.x=(t+e*Math.cos(p))*Math.cos(x),d.y=(t+e*Math.cos(p))*Math.sin(x),d.z=e*Math.sin(p),a.push(d.x,d.y,d.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(m/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){const x=(i+1)*f+m-1,p=(i+1)*(f-1)+m-1,g=(i+1)*(f-1)+m,_=(i+1)*f+m;o.push(x,p,_),o.push(p,g,_)}this.setIndex(o),this.setAttribute("position",new Le(a,3)),this.setAttribute("normal",new Le(l,3)),this.setAttribute("uv",new Le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class iM extends bn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Bn extends Ws{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vp,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Tf={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class sM{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const rM=new sM;class Hu{constructor(t){this.manager=t!==void 0?t:rM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Hu.DEFAULT_MATERIAL_NAME="__DEFAULT";const os={};class oM extends Error{constructor(t,e){super(t),this.response=e}}class aM extends Hu{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Tf.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(os[t]!==void 0){os[t].push({onLoad:e,onProgress:n,onError:i});return}os[t]=[],os[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=os[t],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,m=f!==0;let x=0;const p=new ReadableStream({start(g){_();function _(){d.read().then(({done:v,value:M})=>{if(v)g.close();else{x+=M.byteLength;const P=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:f});for(let T=0,C=h.length;T<C;T++){const O=h[T];O.onProgress&&O.onProgress(P)}g.enqueue(M),_()}},v=>{g.error(v)})}}});return new Response(p)}else throw new oM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{Tf.add(t,c);const h=os[t];delete os[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=os[t];if(h===void 0)throw this.manager.itemError(t),c;delete os[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class dc extends rn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class lM extends dc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const hh=new Ge,Af=new B,Cf=new B;class Vu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Iu,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Af.setFromMatrixPosition(t.matrixWorld),e.position.copy(Af),Cf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Cf),e.updateMatrixWorld(),hh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class cM extends Vu{constructor(){super(new Jn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=$l*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class hM extends dc{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new cM}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Rf=new Ge,qo=new B,uh=new B;class uM extends Vu{constructor(){super(new Jn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new bt(4,2),this._viewportCount=6,this._viewports=[new Je(2,1,1,1),new Je(0,1,1,1),new Je(3,1,1,1),new Je(1,1,1,1),new Je(3,0,1,1),new Je(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),qo.setFromMatrixPosition(t.matrixWorld),n.position.copy(qo),uh.copy(n.position),uh.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(uh),n.updateMatrixWorld(),i.makeTranslation(-qo.x,-qo.y,-qo.z),Rf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rf)}}class dM extends dc{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new uM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class fM extends Vu{constructor(){super(new Du(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pf extends dc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new fM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class v0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Lf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Lf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Lf(){return performance.now()}const zf=new Ge;class pM{constructor(t,e,n=0,i=1/0){this.ray=new cc(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new zu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return zf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zf),this}intersectObject(t,e=!0,n=[]){return _u(t,this,n,e),n.sort(If),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)_u(t[i],this,n,e);return n.sort(If),n}}function If(s,t){return s.distance-t.distance}function _u(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)_u(r[o],t,e,!0)}}class mM{constructor(){this.type="ShapePath",this.color=new Vt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new xu,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,o){return this.currentPath.bezierCurveTo(t,e,n,i,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(g){const _=[];for(let v=0,M=g.length;v<M;v++){const P=g[v],T=new Ti;T.curves=P.curves,_.push(T)}return _}function n(g,_){const v=_.length;let M=!1;for(let P=v-1,T=0;T<v;P=T++){let C=_[P],O=_[T],q=O.x-C.x,b=O.y-C.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(C=_[T],q=-q,O=_[P],b=-b),g.y<C.y||g.y>O.y)continue;if(g.y===C.y){if(g.x===C.x)return!0}else{const S=b*(g.x-C.x)-q*(g.y-C.y);if(S===0)return!0;if(S<0)continue;M=!M}}else{if(g.y!==C.y)continue;if(O.x<=g.x&&g.x<=C.x||C.x<=g.x&&g.x<=O.x)return!0}}return M}const i=_s.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new Ti,l.curves=a.curves,c.push(l),c;let h=!i(r[0].getPoints());h=t?!h:h;const d=[],u=[];let f=[],m=0,x;u[m]=void 0,f[m]=[];for(let g=0,_=r.length;g<_;g++)a=r[g],x=a.getPoints(),o=i(x),o=t?!o:o,o?(!h&&u[m]&&m++,u[m]={s:new Ti,p:x},u[m].s.curves=a.curves,h&&m++,f[m]=[]):f[m].push({h:a,p:x[0]});if(!u[0])return e(r);if(u.length>1){let g=!1,_=0;for(let v=0,M=u.length;v<M;v++)d[v]=[];for(let v=0,M=u.length;v<M;v++){const P=f[v];for(let T=0;T<P.length;T++){const C=P[T];let O=!0;for(let q=0;q<u.length;q++)n(C.p,u[q].p)&&(v!==q&&_++,O?(O=!1,d[q].push(C)):g=!0);O&&d[v].push(C)}}_>0&&g===!1&&(f=d)}let p;for(let g=0,_=u.length;g<_;g++){l=u[g].s,c.push(l),p=f[g];for(let v=0,M=p.length;v<M;v++)l.holes.push(p[v].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Su}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Su);class gM extends Hu{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new aM(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){const l=r.parse(JSON.parse(a));e&&e(l)},n,i)}parse(t){return new xM(t)}}class xM{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const n=[],i=vM(t,e,this.data);for(let r=0,o=i.length;r<o;r++)n.push(...i[r].toShapes());return n}}function vM(s,t,e){const n=Array.from(s),i=t/e.resolution,r=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*i,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const h=n[c];if(h===`
`)a=0,l-=r;else{const d=yM(h,i,a,l,e);a+=d.offsetX,o.push(d.path)}}return o}function yM(s,t,e,n,i){const r=i.glyphs[s]||i.glyphs["?"];if(!r){console.error('THREE.Font: character "'+s+'" does not exists in font family '+i.familyName+".");return}const o=new mM;let a,l,c,h,d,u,f,m;if(r.o){const x=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let p=0,g=x.length;p<g;)switch(x[p++]){case"m":a=x[p++]*t+e,l=x[p++]*t+n,o.moveTo(a,l);break;case"l":a=x[p++]*t+e,l=x[p++]*t+n,o.lineTo(a,l);break;case"q":c=x[p++]*t+e,h=x[p++]*t+n,d=x[p++]*t+e,u=x[p++]*t+n,o.quadraticCurveTo(d,u,c,h);break;case"b":c=x[p++]*t+e,h=x[p++]*t+n,d=x[p++]*t+e,u=x[p++]*t+n,f=x[p++]*t+e,m=x[p++]*t+n,o.bezierCurveTo(d,u,f,m,c,h);break}}return{offsetX:r.ha*t,path:o}}class Mu extends Fs{constructor(t,e={}){const n=e.font;if(n===void 0)super();else{const i=n.generateShapes(t,e.size);e.depth===void 0&&e.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),e.depth=e.depth!==void 0?e.depth:e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(i,e)}this.type="TextGeometry"}}const y0={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Mo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const _M=new Du(-1,1,1,-1,0,1);class MM extends Qe{constructor(){super(),this.setAttribute("position",new Le([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Le([0,2,0,0,2,0],2))}}const wM=new MM;class Wu{constructor(t){this._mesh=new ye(wM,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,_M)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class _0 extends Mo{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof bn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=xo.clone(t.uniforms),this.material=new bn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Wu(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Df extends Mo{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class SM extends Mo{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class bM{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new bt);this._width=n.width,this._height=n.height,e=new mi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Yi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new _0(y0),this.copyPass.material.blending=vs,this.clock=new v0}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Df!==void 0&&(o instanceof Df?n=!0:o instanceof SM&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new bt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class EM extends Mo{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Vt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const TM={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Vt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class vo extends Mo{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new bt(t.x,t.y):new bt(256,256),this.clearColor=new Vt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new mi(r,o,{type:Yi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const u=new mi(r,o,{type:Yi});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new mi(r,o,{type:Yi});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=TM;this.highPassUniforms=xo.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new bn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new bt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=y0;this.copyUniforms=xo.clone(h.uniforms),this.blendMaterial=new bn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Bs,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Vt,this.oldClearAlpha=1,this.basic=new De,this.fsQuad=new Wu(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new bt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=vo.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=vo.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new bn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new bt(.5,.5)},direction:{value:new bt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new bn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}vo.BlurDirectionX=new bt(1,0);vo.BlurDirectionY=new bt(0,1);const AM={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class CM extends Mo{constructor(){super();const t=AM;this.uniforms=xo.clone(t.uniforms),this.material=new iM({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Wu(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Ve.getTransfer(this._outputColorSpace)===en&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Cp?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Rp?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Pp?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Lp?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===zp?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===bu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const yn={name:"Alex Smith",headline:"Cybersecurity | SOC Analyst (Tier 1) | IT Security | Identity and Access Management",location:"Howell, MI (Remote)",email:"alexsmith308@yahoo.com",linkedin:"https://www.linkedin.com/in/alex-smith-aa963b199",linkedinLabel:"linkedin.com/in/alex-smith-aa963b199",pdf:"Alex_Smith_Resume_Security.pdf",website:"https://callmemrvirtuoso.github.io/",websiteLabel:"CallMeMrVirtuoso.github.io"},M0="IT professional with about 5 years of help desk and IT asset control experience, plus earlier office support in healthcare, seeking an entry-level SOC Analyst, IT Security, or IAM role. Handles about 30 tickets per day spanning user provisioning, Active Directory and Microsoft 365 access control, chain-of-custody for sensitive equipment, and incident troubleshooting and escalation. Background in patch management, firewall and VPN troubleshooting, compliance support, and protecting sensitive patient data. Grounded in core security principles (CIA Triad, least privilege, defense-in-depth, risk management). B.S. in Information Technology from Wayne State University.",wu=[{title:"Asset Control",org:"Data System Services",dates:"01/2023 – Present",bullets:["Handle about 30 tickets per day (roughly 600 per month) while keeping hardware and software asset records accurate and audit-ready.","Manage the secure lifecycle of corporate IT hardware, ensuring accurate tracking, handling, and disposal.","Maintain chain-of-custody for sensitive equipment while coordinating third-party vendor repairs.","Support software asset management (SAM) processes to maintain compliance and reduce audit risk."]},{title:"Help Desk Technician",org:"Data System Services",dates:"08/2021 – 01/2023",bullets:["Triaged roughly 30 tickets daily (about 600 per month) as first-line support for technical, access-related, and security-adjacent incidents, escalating issues when needed.","Provisioned user accounts, reset passwords, and configured permissions in Active Directory and Microsoft 365 to support identity and access management (IAM).","Applied and maintained Group Policy settings and supported Windows Server and Windows 10/11 systems following security best practices.","Troubleshot network connectivity issues, including firewall, VPN, TCP/IP, DNS, and DHCP problems, escalating complex issues when needed.","Supported Windows and macOS end users, troubleshooting hardware, software, and account access issues.","Documented incidents and resolutions to support trend analysis and continuous improvement."]},{title:"Office Support Specialist",org:"Visiting Physician Association",dates:"06/2013 – 07/2021",bullets:["Installed patches and software updates to mitigate vulnerabilities and protect sensitive patient data.","Supported desktop and laptop migrations with close attention to data security and system integrity."]}],w0=[["Security Concepts",["CIA Triad","Least privilege","Defense-in-depth","Risk management"]],["Identity and Access Management",["Active Directory","Group Policy","Microsoft 365 administration","User provisioning","Permissions and access control"]],["Incident Support",["Incident troubleshooting","Escalation","Documentation","Reporting","Remote support tools"]],["Vulnerability Mitigation",["Patch management","System hardening"]],["Compliance and Asset Security",["Chain-of-custody","Software asset management (SAM)","Audit readiness","Compliance support"]],["Networking",["TCP/IP","DNS","DHCP","Firewall and VPN troubleshooting"]],["Programming and Scripting",["Python","JavaScript","SQL","VBA"]],["Systems and Tools",["Windows Server","Windows 10/11","macOS end-user support","Advanced Excel"]]],eo={degree:"B.S. in Information Technology",minor:"Minor in Business Administration",school:"Wayne State University",dates:"2020 – 2025"},S0=[{slug:"password-checker",icon:"🔐",title:"Password Strength & Breach-Pattern Checker",desc:"Estimates how quickly a password falls to real cracking techniques (wordlists, leetspeak, Season+Year, keyboard walks) and generates strong random passwords. Runs entirely in the browser, and the page's Content-Security-Policy blocks outgoing connections.",tech:["JavaScript","Content-Security-Policy","Password policy"],demo:"projects/password-checker/",code:"projects/code.html?f=password-checker/analyzer.js"},{slug:"log-analyzer",icon:"🪵",title:"Windows Security Log Analyzer",desc:"Analyzes Windows logon events (4625/4624/4740) and flags brute force, password spraying, account enumeration, lockouts and successful logons after a burst of failures, mapped to MITRE ATT&CK. Ships with a PowerShell exporter and synthetic sample data.",tech:["JavaScript","Windows Event Logs","PowerShell","MITRE ATT&CK"],demo:"projects/log-analyzer/",code:"projects/code.html?f=log-analyzer/analyzer.js"},{slug:"ad-hygiene-audit",icon:"🧹",title:"AD Account Hygiene Audit (PowerShell)",desc:"Read-only script that finds stale, never-used, non-expiring, password-not-required and disabled-but-still-grouped Active Directory accounts, with CSV output and a mock-data test.",tech:["PowerShell","Active Directory","IAM"],demo:"projects/ad-hygiene-audit/",demoLabel:"Script & example",code:"projects/code.html?f=ad-hygiene-audit/Invoke-ADHygieneAudit.ps1"},{slug:"subnet-calculator",icon:"🌐",title:"Subnet & VLAN Planner",desc:"IPv4 subnet calculator plus a VLSM planner that splits an address block into right-sized subnets per VLAN and outputs a Cisco IOS-style config to review.",tech:["JavaScript","TCP/IP","VLANs"],demo:"projects/subnet-calculator/",code:"projects/code.html?f=subnet-calculator/subnet.js"}],Ze=s=>s.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),RM=()=>`
  <ul class="contact-list">
    <li><span class="k">Email</span> <a href="mailto:${yn.email}">${yn.email}</a></li>
    <li><span class="k">LinkedIn</span> <a href="${yn.linkedin}" target="_blank" rel="noopener">${yn.linkedinLabel}</a></li>
    <li><span class="k">Website</span> <a href="${yn.website}" target="_blank" rel="noopener">${yn.websiteLabel}</a></li>
    <li><span class="k">Location</span> ${Ze(yn.location)}</li>
    <li><span class="k">Resume</span> <a href="${yn.pdf}" download>Download PDF</a></li>
  </ul>`,b0=(s="h3")=>wu.map(t=>`<article class="job">
      <${s}>${Ze(t.title)} <span class="org">· ${Ze(t.org)}</span></${s}>
      <p class="dates">${Ze(t.dates)}</p>
      <ul>${t.bullets.map(e=>`<li>${Ze(e)}</li>`).join("")}</ul>
    </article>`).join(""),PM=()=>`<div class="skill-groups">${w0.map(([s,t])=>`<div class="skill-group"><h4>${Ze(s)}</h4><ul class="chips">${t.map(e=>`<li>${Ze(e)}</li>`).join("")}</ul></div>`).join("")}</div>`,E0=()=>`<p class="edu"><strong>${Ze(eo.degree)}</strong><br>${Ze(eo.minor)}<br>${Ze(eo.school)} · ${Ze(eo.dates)}</p>`,LM=(s="h3")=>`<div class="project-cards">${S0.map(t=>`<article class="project-card">
      <${s}>${t.icon} ${Ze(t.title)}</${s}>
      <p>${Ze(t.desc)}</p>
      <ul class="chips">${t.tech.map(e=>`<li>${Ze(e)}</li>`).join("")}</ul>
      <p class="project-links"><a class="btn btn-primary" href="${t.demo}" target="_blank" rel="noopener">${t.demoLabel?"📄 "+Ze(t.demoLabel):"▶ Live demo"}</a>
      <a class="btn btn-ghost" href="${t.code}" target="_blank" rel="noopener">&lt;/&gt; View code</a></p>
    </article>`).join("")}</div>`,Rs={about:{title:"About",icon:"🛡️",html:`<p class="lead">${Ze(yn.headline)}</p><p>${Ze(M0)}</p><p class="muted">📍 ${Ze(yn.location)}</p>`},experience:{title:"Experience",icon:"🗄️",html:b0("h3")},education:{title:"Education",icon:"🎓",html:E0()},skills:{title:"Skills",icon:"🔐",html:PM()},projects:{title:"Projects",icon:"🧪",html:`<p>Small, working tools built around IT support and security work. Each one runs in the browser or as a read-only script, with the full source viewable.</p>${LM("h3")}<p><a href="projects/" target="_blank" rel="noopener">Browse all projects →</a></p>`},contact:{title:"Contact",icon:"📡",html:`<p>Open to SOC Analyst, IT Security, IAM, and systems roles.</p>${RM()}`}};function zM(){return`
  <header class="sr-header">
    <h1>${Ze(yn.name)}</h1>
    <p class="sr-headline">${Ze(yn.headline)}</p>
    <p class="sr-contact">${Ze(yn.location)} · <a href="mailto:${yn.email}">${yn.email}</a> · <a href="${yn.linkedin}" target="_blank" rel="noopener">${yn.linkedinLabel}</a> · <a href="${yn.website}">${yn.websiteLabel}</a></p>
    <p><a class="btn btn-primary" href="${yn.pdf}" download>⬇ Download PDF resume</a></p>
  </header>
  <section aria-labelledby="sr-summary"><h2 id="sr-summary">Summary</h2><p>${Ze(M0)}</p></section>
  <section aria-labelledby="sr-exp"><h2 id="sr-exp">Experience</h2>${b0("h3")}</section>
  <section aria-labelledby="sr-projects"><h2 id="sr-projects">Projects</h2>${S0.map(s=>`<article class="job"><h3>${Ze(s.title)}</h3><p>${Ze(s.desc)}</p><p class="sr-tech"><strong>Tech:</strong> ${s.tech.map(Ze).join(", ")} · <a href="${s.demo}">${s.demoLabel?Ze(s.demoLabel):"Live demo"}</a> · <a href="${s.code}">View code</a></p></article>`).join("")}<p><a href="projects/">All projects</a></p></section>
  <section aria-labelledby="sr-skills"><h2 id="sr-skills">Skills</h2>
    <dl class="sr-skills">${w0.map(([s,t])=>`<dt>${Ze(s)}</dt><dd>${t.map(Ze).join(", ")}</dd>`).join("")}</dl>
  </section>
  <section aria-labelledby="sr-edu"><h2 id="sr-edu">Education</h2>${E0()}</section>`}const T0="alex-site-muted",IM=80,pl=60/IM/4,DM=.15,NM=30,Nf=[[45,57,60,64,67],[41,57,60,64,65],[48,55,59,60,64],[43,55,59,62,67]],Uf=[0,-1,2,1,3,-1,2,-1,1,-1,3,2,-1,1,0,-1],Ff={0:.5,6:.18,10:.32},UM=new Set([0,7,8]),FM=new Set([4,12]),Ps=s=>440*Math.pow(2,(s-69)/12);function OM(){try{return localStorage.getItem(T0)==="1"}catch{return!1}}function BM(s){try{localStorage.setItem(T0,s?"1":"0")}catch{}}function kM(){let s=null,t,e,n,i,r,o,a,l,c,h=null,d=0,u=0,f=0,m=OM(),x=!0;const p=new Set,g=()=>p.forEach(A=>A(m));function _(){const A=window.AudioContext||window.webkitAudioContext;if(!A)return!1;s=new A;const R=s.createDynamicsCompressor();R.threshold.value=-18,R.ratio.value=3,R.attack.value=.01,R.release.value=.25,t=s.createGain(),t.gain.value=0,R.connect(t).connect(s.destination),e=s.createGain(),e.gain.value=1,n=s.createGain(),n.gain.value=.8;const I=s.createBiquadFilter();I.type="lowpass",I.frequency.value=7e3,e.connect(I).connect(R),n.connect(R),i=s.createGain(),i.gain.value=.35;const y=s.createDelay(1);y.delayTime.value=pl*3;const U=s.createGain();U.gain.value=.38;const F=s.createBiquadFilter();F.type="lowpass",F.frequency.value=2200,i.connect(y).connect(F).connect(U).connect(y),F.connect(e),r=s.createBuffer(1,s.sampleRate,s.sampleRate);const Z=r.getChannelData(0);for(let mt=0;mt<Z.length;mt++)Z[mt]=Math.random()*2-1;c=s.createBiquadFilter(),c.type="lowpass",c.frequency.value=400,c.Q.value=2,l=s.createGain(),l.gain.value=0,o=s.createOscillator(),o.type="sawtooth",o.frequency.value=50,a=s.createOscillator(),a.type="square",a.frequency.value=25.3;const st=s.createGain();return st.gain.value=.5,o.connect(c),a.connect(st).connect(c),c.connect(l).connect(n),o.start(),a.start(),!0}function v(A,R,I,y,U,F=1e-4){A.gain.setValueAtTime(1e-4,R),A.gain.exponentialRampToValueAtTime(y,R+I),A.gain.exponentialRampToValueAtTime(F,R+I+U)}function M(A,R,I){const y=s.createGain(),U=s.createBiquadFilter();U.type="lowpass",U.frequency.setValueAtTime(600,R),U.frequency.linearRampToValueAtTime(1100,R+I*.5),U.frequency.linearRampToValueAtTime(700,R+I),y.gain.setValueAtTime(1e-4,R),y.gain.exponentialRampToValueAtTime(.05,R+.9),y.gain.setValueAtTime(.05,R+I-.4),y.gain.exponentialRampToValueAtTime(1e-4,R+I+.6),U.connect(y).connect(e);for(const F of A)for(const Z of[-7,7]){const st=s.createOscillator();st.type="sawtooth",st.frequency.value=Ps(F),st.detune.value=Z,st.connect(U),st.start(R),st.stop(R+I+.7)}}function P(A,R,I){const y=s.createOscillator();y.type="triangle",y.frequency.value=Ps(A-12);const U=s.createOscillator();U.type="sine",U.frequency.value=Ps(A-12);const F=s.createGain();v(F,R,.015,.22,I),y.connect(F),U.connect(F),F.connect(e),y.start(R),U.start(R),y.stop(R+I+.1),U.stop(R+I+.1)}function T(A,R){const I=s.createOscillator();I.type="square",I.frequency.value=Ps(A);const y=s.createBiquadFilter();y.type="lowpass",y.Q.value=4,y.frequency.setValueAtTime(3200,R),y.frequency.exponentialRampToValueAtTime(500,R+.25);const U=s.createGain();v(U,R,.005,.05,.35),I.connect(y).connect(U),U.connect(e),U.connect(i),I.start(R),I.stop(R+.45)}function C(A){const R=s.createOscillator();R.type="sine",R.frequency.setValueAtTime(130,A),R.frequency.exponentialRampToValueAtTime(42,A+.18);const I=s.createGain();v(I,A,.004,.5,.32),R.connect(I).connect(e),R.start(A),R.stop(A+.4)}function O(A,{freq:R,type:I,q:y=1,peak:U,dur:F}){const Z=s.createBufferSource();Z.buffer=r;const st=s.createBiquadFilter();st.type=I,st.frequency.value=R,st.Q.value=y;const mt=s.createGain();v(mt,A,.002,U,F),Z.connect(st).connect(mt).connect(e),Z.start(A,Math.random()*.5,F+.05)}function q(A,R){const I=Nf[f%Nf.length];A===0&&M(I.slice(1),R,pl*16),Ff[A]&&P(I[0],R,Ff[A]),Uf[A]>=0&&T(I[1+Uf[A]]+12,R),UM.has(A)&&!(A===7&&f%2===0)&&C(R),FM.has(A)&&O(R,{freq:1500,type:"bandpass",q:.8,peak:.08,dur:.16}),A%2===0&&O(R+(A%4===2?pl*.12:0),{freq:8e3,type:"highpass",peak:A%4===2?.035:.018,dur:.05})}function b(){if(!(!s||s.state!=="running"))for(d<s.currentTime&&(d=s.currentTime+.05);d<s.currentTime+DM;)q(u,d),d+=pl,u=(u+1)%16,u===0&&f++}function S(){if(!s)return;const A=!m&&x,R=s.currentTime;t.gain.cancelScheduledValues(R),t.gain.setTargetAtTime(A?.18:0,R,A?.6:.08),A?(s.state!=="running"&&s.resume().catch(()=>{}),h||(h=setInterval(b,NM))):(clearInterval(h),h=null,setTimeout(()=>{(m||!x)&&s.state==="running"&&s.suspend().catch(()=>{})},400))}const V={start(){if(!s){if(!_())return;u=0,d=s.currentTime+.1}S()},get started(){return!!s},get muted(){return m},setMuted(A){m=!!A,BM(m),S(),g()},toggle(){return V.setMuted(!m),m},setActive(A){x!==!!A&&(x=!!A,S())},onChange(A){p.add(A),A(m)},engine(A,R){if(!s||s.state!=="running")return;const I=s.currentTime;o.frequency.setTargetAtTime(48+A*75+(R?6:0),I,.08),a.frequency.setTargetAtTime(24.3+A*37,I,.08),c.frequency.setTargetAtTime(260+A*700,I,.1),l.gain.setTargetAtTime(A>.02?.025+A*.045:0,I,.15)},chime(A=!1){if(!s||s.state!=="running")return;const R=s.currentTime+.01;(A?[72,76,79,84]:[79,84]).forEach((y,U)=>{const F=s.createOscillator();F.type="triangle",F.frequency.value=Ps(y);const Z=s.createGain();v(Z,R+U*.08,.005,.12,.4),F.connect(Z).connect(n),F.start(R+U*.08),F.stop(R+U*.08+.5)})},blip(){if(!s||s.state!=="running")return;const A=s.currentTime+.01,R=s.createOscillator();R.type="sine",R.frequency.setValueAtTime(520,A),R.frequency.exponentialRampToValueAtTime(880,A+.12);const I=s.createGain();v(I,A,.01,.07,.22),R.connect(I).connect(n),R.start(A),R.stop(A+.3)},thud(A=1){if(!s||s.state!=="running")return;const R=s.currentTime+.005,I=s.createOscillator();I.type="sine",I.frequency.setValueAtTime(90,R),I.frequency.exponentialRampToValueAtTime(35,R+.2);const y=s.createGain();v(y,R,.004,.18*Math.min(1,A),.25),I.connect(y).connect(n),I.start(R),I.stop(R+.3)},woof(){!s||s.state!=="running"||[0,.18].forEach(A=>{const R=s.currentTime+.01+A,I=s.createOscillator();I.type="sawtooth",I.frequency.setValueAtTime(230,R),I.frequency.exponentialRampToValueAtTime(140,R+.12);const y=s.createBiquadFilter();y.type="lowpass",y.frequency.value=900,y.Q.value=2;const U=s.createGain();v(U,R,.01,.12,.14),I.connect(y).connect(U).connect(n),I.start(R),I.stop(R+.2)})},bleat(){if(!s||s.state!=="running")return;const A=s.currentTime+.01,R=s.createOscillator();R.type="triangle",R.frequency.setValueAtTime(520,A),R.frequency.linearRampToValueAtTime(470,A+.45);const I=s.createOscillator();I.frequency.value=18;const y=s.createGain();y.gain.value=22,I.connect(y).connect(R.frequency);const U=s.createGain();v(U,A,.04,.05,.45),R.connect(U).connect(n),R.start(A),I.start(A),R.stop(A+.55),I.stop(A+.55)},step(A=!1,R="grass"){if(V.lastSurface=R,!s||s.state!=="running")return;const I=s.currentTime+.005,y=A?1.5:1;if(R==="wood"){const mt=s.createOscillator();mt.type="triangle",mt.frequency.setValueAtTime(A?230:200,I),mt.frequency.exponentialRampToValueAtTime(110,I+.07);const Mt=s.createGain();v(Mt,I,.002,.05*y,.1),mt.connect(Mt).connect(n),mt.start(I),mt.stop(I+.14)}const U=s.createBufferSource();U.buffer=r,U.playbackRate.value=.8+Math.random()*.4;const F=s.createBiquadFilter(),Z={grass:["lowpass",900,.03,.07],sand:["bandpass",2600,.022,.11],wood:["bandpass",1300,.012,.04],stone:["highpass",1800,.016,.04]}[R]||["lowpass",900,.03,.07];F.type=Z[0],F.frequency.value=Z[1]*(.9+Math.random()*.2),F.Q.value=Z[0]==="bandpass"?1.2:.7;const st=s.createGain();v(st,I,.004,Z[2]*y,Z[3]),U.connect(F).connect(st).connect(n),U.start(I,Math.random()*.8,.2)},splash(A=1){if(!s||s.state!=="running")return;const R=s.currentTime+.005,I=s.createBufferSource();I.buffer=r;const y=s.createBiquadFilter();y.type="bandpass",y.Q.value=1.5,y.frequency.setValueAtTime(1800,R),y.frequency.exponentialRampToValueAtTime(400,R+.25);const U=s.createGain();v(U,R,.005,.09*Math.min(1.5,A),.3),I.connect(y).connect(U).connect(n),I.start(R,Math.random()*.5,.4);const F=s.createOscillator();F.type="sine",F.frequency.setValueAtTime(600,R),F.frequency.exponentialRampToValueAtTime(180,R+.12);const Z=s.createGain();v(Z,R,.003,.05,.12),F.connect(Z).connect(n),F.start(R),F.stop(R+.16)},whoosh(){if(!s||s.state!=="running")return;const A=s.currentTime+.005,R=s.createBufferSource();R.buffer=r;const I=s.createBiquadFilter();I.type="bandpass",I.Q.value=3,I.frequency.setValueAtTime(500,A),I.frequency.exponentialRampToValueAtTime(2500,A+.25);const y=s.createGain();v(y,A,.08,.05,.2),R.connect(I).connect(y).connect(n),R.start(A,0,.4)},caught(){if(!s||s.state!=="running")return;const A=s.currentTime+.01;[72,79,84,88].forEach((R,I)=>{const y=s.createOscillator();y.type="square",y.frequency.value=Ps(R);const U=s.createBiquadFilter();U.type="lowpass",U.frequency.value=2200;const F=s.createGain();v(F,A+I*.06,.004,.05,.22),y.connect(U).connect(F).connect(n),y.start(A+I*.06),y.stop(A+I*.06+.3)})},miss(){if(!s||s.state!=="running")return;const A=s.currentTime+.01;[67,62].forEach((R,I)=>{const y=s.createOscillator();y.type="triangle",y.frequency.value=Ps(R);const U=s.createGain();v(U,A+I*.16,.01,.07,.25),y.connect(U).connect(n),y.start(A+I*.16),y.stop(A+I*.16+.35)})},goal(){if(!s||s.state!=="running")return;const A=s.currentTime+.01,R=s.createBufferSource();R.buffer=r;const I=s.createBiquadFilter();I.type="bandpass",I.frequency.value=1100,I.Q.value=.6;const y=s.createGain();y.gain.setValueAtTime(1e-4,A),y.gain.exponentialRampToValueAtTime(.07,A+.15),y.gain.exponentialRampToValueAtTime(1e-4,A+1.2),R.connect(I).connect(y).connect(n),R.start(A,0,1.3),[0,.22].forEach(U=>{const F=s.createOscillator();F.type="sine",F.frequency.value=2900;const Z=s.createOscillator();Z.frequency.value=30;const st=s.createGain();st.gain.value=120,Z.connect(st).connect(F.frequency);const mt=s.createGain();v(mt,A+U,.01,.035,.16),F.connect(mt).connect(n),F.start(A+U),Z.start(A+U),F.stop(A+U+.2),Z.stop(A+U+.2)}),V.strike()},crackle(A=1){if(!s||s.state!=="running")return;const R=s.currentTime+.005,I=s.createBufferSource();I.buffer=r;const y=s.createBiquadFilter();y.type="highpass",y.frequency.value=1500+Math.random()*2e3;const U=s.createGain();v(U,R,.001,.05*Math.min(1,A),.03+Math.random()*.04),I.connect(y).connect(U).connect(n),I.start(R,Math.random()*.9,.1)},yip(){if(!s||s.state!=="running")return;const A=s.currentTime+.01,R=s.createOscillator();R.type="sawtooth",R.frequency.setValueAtTime(500,A),R.frequency.exponentialRampToValueAtTime(900,A+.14),R.frequency.exponentialRampToValueAtTime(650,A+.25);const I=s.createBiquadFilter();I.type="lowpass",I.frequency.value=1400,I.Q.value=3;const y=s.createGain();v(y,A,.02,.06,.24),R.connect(I).connect(y).connect(n),R.start(A),R.stop(A+.3)},hit(A=1,R="plastic"){if(!s||s.state!=="running")return;const I=s.currentTime+.005,y=Math.min(1,A),U={wood:240,plastic:420,rubber:110,pin:900}[R]||300,F=s.createOscillator();F.type=R==="pin"?"square":"triangle",F.frequency.setValueAtTime(U*(.9+Math.random()*.2),I),F.frequency.exponentialRampToValueAtTime(U*.45,I+.12);const Z=s.createBiquadFilter();Z.type="lowpass",Z.frequency.value=R==="pin"?2400:1400;const st=s.createGain();v(st,I,.002,.03+.09*y,R==="rubber"?.2:.13),F.connect(Z).connect(st).connect(n),F.start(I),F.stop(I+.25)},strike(){if(!s||s.state!=="running")return;const A=s.currentTime+.02;[67,71,74,79,83].forEach((R,I)=>{const y=s.createOscillator();y.type="triangle",y.frequency.value=Ps(R);const U=s.createGain();v(U,A+I*.07,.005,.1,.35),y.connect(U).connect(n),y.start(A+I*.07),y.stop(A+I*.07+.45)})},door(){if(!s||s.state!=="running")return;const A=s.currentTime+.005,R=s.createOscillator();R.type="square",R.frequency.setValueAtTime(130,A),R.frequency.exponentialRampToValueAtTime(60,A+.08);const I=s.createBiquadFilter();I.type="lowpass",I.frequency.value=600;const y=s.createGain();v(y,A,.002,.08,.12),R.connect(I).connect(y).connect(n),R.start(A),R.stop(A+.15)},debug(){return{started:!!s,state:s?s.state:"none",muted:m,active:x,bar:f,gain:t?t.gain.value:0}}};return V}function GM(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Qe;let c=0;for(let h=0;h<s.length;++h){const d=s[h];let u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const d=[];for(let u=0;u<s.length;++u){const f=s[u].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+h);h+=s[u].attributes.position.count}l.setIndex(d)}for(const h in r){const d=Of(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){const f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][u]);const m=Of(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function Of(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new un(o,e,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const d=l/e;for(let u=0,f=h.count;u<f;u++)for(let m=0;m<e;m++){const x=h.getComponent(u,m);a.setComponent(u+d,m,x)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}const K={box:new ge(1,1,1),ico:new Xn(1,0),cone:new pi(1,1,6),cyl:new Te(1,1,1,8),cyl6:new Te(1,1,1,6)},HM=new Bn({vertexColors:!0,flatShading:!0,roughness:.88}),VM=new Ge,WM=new $i,qM=new gi,XM=new B,YM=new B;function X(s,t,e=0,n=0,i=0,r=1,o=r,a=r,l=0,c=0,h=0){const d=s.index?s.toNonIndexed():s.clone();d.deleteAttribute("uv"),d.applyMatrix4(VM.compose(XM.set(e,n,i),WM.setFromEuler(qM.set(l,c,h)),YM.set(r,o,a)));const u=new Vt(t),f=d.attributes.position.count,m=new Float32Array(f*3);for(let x=0;x<f;x++)m[x*3]=u.r,m[x*3+1]=u.g,m[x*3+2]=u.b;return d.setAttribute("color",new un(m,3)),d}function Ne(s,t=HM){const e=new ye(GM(s),t);return e.castShadow=!0,e.receiveShadow=!0,s.forEach(n=>n.dispose()),e}const Bf="#c98b5a",Xo="#a86d43",ml="#a7a9be",kf="#8a8ca3",Yo="#d1495b",fi="#fffaf2",jM="#7a4b2a",$M="#00a6b5",KM="#2b2950";function ZM(s,t){const e=new qt;e.position.set(s.x,0,s.z),e.rotation.y=s.rot;const n=6.4,i=4.8,r=3,o=.5,a=[X(K.box,ml,0,o/2,0,n+.6,o,i+.6),X(K.box,Bf,0,o+r/2,0,n,r,i)];for(let U=0;U<5;U++){const F=o+.3+U*.6;[-1,1].forEach(Z=>{a.push(X(K.cyl6,Xo,0,F,Z*(i/2+.05),.17,n+.5,.17,0,0,Math.PI/2)),a.push(X(K.cyl6,Xo,Z*(n/2+.05),F,0,.17,i+.5,.17,Math.PI/2,0,0))})}const l=new Ti;l.moveTo(-n/2,0),l.lineTo(n/2,0),l.lineTo(0,1.8),l.lineTo(-n/2,0);const c=new Fs(l,{depth:.2,bevelEnabled:!1});[-1,1].forEach(U=>a.push(X(c,Bf,0,o+r,U*(i/2)-.1))),a.push(X(K.cyl,fi,0,o+r+.7,i/2+.1,.42,.06,.42,Math.PI/2)),a.push(X(K.box,fi,1.4,o+1.05,i/2+.22,1.3,2.2,.08)),a.push(X(K.box,jM,1.4,o+1,i/2+.28,1.05,2,.08)),a.push(X(K.ico,"#ffc93c",1.75,o+1,i/2+.35,.07)),a.push(X(K.box,Xo,1.4,.35,i/2+.9,2.4,.2,1.2)),a.push(X(K.box,ml,1.4,.12,i/2+1.75,1.6,.24,.6)),[.35,2.45].forEach(U=>a.push(X(K.box,Xo,U,o+1.15,i/2+1.4,.16,2.3,.16))),a.push(X(K.box,Yo,1.4,o+2.4,i/2+.85,2.7,.14,1.5,.25,0,0));const h=[[-1.6,i/2,0],[-1.6,-i/2,Math.PI],[n/2,0,Math.PI/2],[-n/2,.4,-Math.PI/2]];h.forEach(([U,F,Z])=>{const st=Math.sin(Z),mt=Math.cos(Z),Mt=Math.cos(Z),Yt=-Math.sin(Z),ct=(Tt,Qt)=>[U+Mt*Tt+st*Qt,F+Yt*Tt+mt*Qt];let[dt,Pt]=ct(0,.24);a.push(X(K.box,fi,dt,o+1.65,Pt,1.45,1.2,.1,0,Z,0)),[dt,Pt]=ct(0,.31),a.push(X(K.box,fi,dt,o+1.65,Pt,.08,1,.06,0,Z,0)),a.push(X(K.box,fi,dt,o+1.65,Pt,1.25,.08,.06,0,Z,0)),a.push(X(K.box,fi,dt,o+1,Pt,1.6,.12,.12,0,Z,0)),[-1,1].forEach(Tt=>{const[Qt,Et]=ct(Tt*.95,.25);a.push(X(K.box,$M,Qt,o+1.65,Et,.42,1.15,.08,0,Z,0))})}),a.push(X(K.box,ml,-2,o+r+1.3,-.9,.95,3.4,.95)),a.push(X(K.box,kf,-2,o+r+3.05,-.9,1.15,.2,1.15));for(let U=0;U<3;U++)for(let F=0;F<4-U;F++)a.push(X(K.cyl6,F%2?"#b07446":"#9a6841",n/2+.55,.22+U*.38,-1.4+F*.4+U*.2,.19,1.1,.19,Math.PI/2,0,0));const d=Ne(a);e.add(d);const u=i/2+.45,f=1.8,m=Math.hypot(u,f),x=Math.atan2(f,u),p=Ne([X(K.box,Yo,0,o+r+f/2+.12,u/2,n+.9,.24,m,x,0,0),X(K.box,Yo,0,o+r+f/2+.12,-u/2,n+.9,.24,m,-x,0,0),X(K.box,"#b23a4b",0,o+r+f+.2,0,n+1,.22,.32)]);e.add(p);const g=new De({color:new Vt("#ffb347").multiplyScalar(2.1)});h.forEach(([U,F,Z])=>{const st=new ye(new hn(1.25,1),g);st.position.set(U+Math.sin(Z)*.295,o+1.65,F+Math.cos(Z)*.295),st.rotation.y=Z,e.add(st)});const _=new ye(new Wi(.34,12),g);_.position.set(0,o+r+.7,i/2+.14),e.add(_);const v=new ye(new ge(.22,.3,.22),new De({color:new Vt("#ffd27a").multiplyScalar(2.6)}));v.position.set(2.35,o+2,i/2+.36),e.add(v);const M={x:-1.9,z:i/2+3.4,w:3.8,d:2.8},P=[X(K.box,"#7a5236",M.x,.06,M.z,M.w-.3,.12,M.d-.3)];for(let U=0;U<3;U++)for(let F=0;F<4;F++){const Z=M.x-1.25+F*.83,st=M.z-.85+U*.85;U===1?(P.push(X(K.ico,"#ff8c2e",Z,.3,st,.28,.22,.28)),P.push(X(K.box,"#3fa968",Z,.55,st,.05,.14,.05))):(P.push(X(K.cone,U?"#56c271":"#7bcf6b",Z,.38,st,.22,.5,.22)),P.push(X(K.cone,"#3fa968",Z+.12,.3,st+.08,.15,.36,.15)))}["#ff5a8a","#ffc93c","#9b8fe0","#ff8a5b","#ffffff","#ff5a8a"].forEach((U,F)=>{const Z=-n/2+.6+F*.5;P.push(X(K.box,"#3fa968",Z,.22,i/2+.6,.05,.44,.05)),P.push(X(K.ico,U,Z,.48,i/2+.6,.13))});const T=(U,F)=>{P.push(X(K.box,fi,U,.42,F,.12,.84,.12)),P.push(X(K.cone,fi,U,.9,F,.09,.14,.09))},C=M.x-M.w/2,O=M.x+M.w/2,q=M.z-M.d/2,b=M.z+M.d/2;for(let U=C;U<=O+.01;U+=M.w/6)T(U,q),T(U,b);for(let U=q+M.d/4;U<b-.01;U+=M.d/4)T(C,U),U<b-M.d/2&&T(O,U);[.3,.65].forEach(U=>{P.push(X(K.box,fi,M.x,U,b,M.w,.07,.05)),P.push(X(K.box,fi,M.x,U,q,M.w,.07,.05)),P.push(X(K.box,fi,C,U,M.z,.05,.07,M.d)),P.push(X(K.box,fi,O,U,q+M.d/4,.05,.07,M.d/2))});for(let U=0;U<5;U++)P.push(X(K.cyl6,U%2?ml:kf,1.4+Math.sin(U*1.7)*.25,.04,i/2+2.6+U*1,.45,.08,.38));const S={x:3.6,z:i/2+5.2};P.push(X(K.box,Xo,S.x,.6,S.z,.14,1.2,.14)),P.push(X(K.box,"#00a6b5",S.x,1.32,S.z,.42,.34,.72)),P.push(X(K.cyl,"#00a6b5",S.x,1.49,S.z,.21,.72,.21,Math.PI/2,0,0)),P.push(X(K.box,"#ff5a5f",S.x+.24,1.55,S.z-.1,.04,.4,.1)),P.push(X(K.box,"#ff5a5f",S.x+.24,1.7,S.z+.02,.04,.12,.26));const V={x:4.6,z:-.4};P.push(X(K.box,"#ffc93c",V.x,.55,V.z,1.3,1.1,1.5)),P.push(X(K.box,Yo,V.x-.38,1.35,V.z,.95,.12,1.75,0,0,.75)),P.push(X(K.box,Yo,V.x+.38,1.35,V.z,.95,.12,1.75,0,0,-.75)),P.push(X(K.box,KM,V.x,.42,V.z+.76,.6,.7,.02)),P.push(X(K.cyl,"#ff5a5f",V.x+.9,.08,V.z+1.3,.25,.16,.25)),e.add(Ne(P));const A=[],R=new Xn(.45,0);for(let U=0;U<6;U++){const F=new ye(R,new Bn({color:"#e9e4f2",flatShading:!0,transparent:!0,opacity:0,depthWrite:!1}));F.position.set(-2,o+r+3.3,-.9),e.add(F),A.push(F)}let I=A.length;e.updateMatrixWorld();const y=(U,F)=>e.localToWorld(new B(U,0,F));return[[-2.2,0,2.7],[0,0,2.7],[2.2,0,2.7],[n/2+.55,-1,.9]].forEach(([U,F,Z])=>{const st=y(U,F);t(st.x,st.z,Z)}),[[M.x-.95,M.z,1.5],[M.x+.95,M.z,1.5],[S.x,S.z,.45],[V.x,V.z,1]].forEach(([U,F,Z])=>{const st=y(U,F);t(st.x,st.z,Z)}),{group:e,dogHome:y(3.2,i/2+3.2),localToWorld:U=>e.localToWorld(U),setSmoke(U){I=U,A.forEach((F,Z)=>F.visible=Z<U)},update(U){for(let F=0;F<I;F++){const Z=(U*.22+F/I)%1,st=A[F];st.position.set(-2+Z*1.6+Math.sin(U+F)*.15,o+r+3.3+Z*4.2,-.9-Z*.6),st.scale.setScalar(.5+Z*1.4),st.rotation.set(F,U*.3+F,0),st.material.opacity=Math.min(1,Z*6)*(1-Z)*.6}}}}const Yr="#f6f2ea",gl="#3b3340",xl="#d9a066",Hl="#f6e3c6",kn="#1d1b3a",jr="#b5774a",Gf="#ffffff",Hf="#c9cde0",qu="#ff9a3c";function JM(s){const t=new qt;t.add(Ne([X(K.ico,Yr,0,1,0,.78,.66,.95),X(K.ico,Yr,0,1.38,.2,.45,.4,.45),X(K.ico,Yr,.25,1.3,-.35,.42,.38,.42),X(K.ico,Yr,-.28,1.25,-.1,.4,.36,.4),X(K.ico,Yr,0,1.05,-.88,.25),...[[.3,.42],[-.3,.42],[.3,-.45],[-.3,-.45]].map(([n,i])=>X(K.box,gl,n,.3,i,.17,.62,.17))]));const e=new qt;return e.position.set(0,1.15,.72),e.add(Ne([X(K.box,gl,0,.05,.28,.42,.5,.5),X(K.ico,Yr,0,.34,.2,.26,.2,.26),X(K.box,gl,.3,.16,.2,.26,.08,.14,0,0,-.3),X(K.box,gl,-.3,.16,.2,.26,.08,.14,0,0,.3),X(K.box,"#ffffff",.12,.13,.535,.1,.1,.02),X(K.box,"#ffffff",-.12,.13,.535,.1,.1,.02),X(K.box,kn,.12,.12,.545,.05,.06,.02),X(K.box,kn,-.12,.12,.545,.05,.06,.02)])),t.add(e),t.scale.setScalar(s),{root:t,head:e}}function QM(){const s=new qt;s.add(Ne([X(K.box,xl,0,.62,0,.5,.42,.95),X(K.box,Hl,0,.47,.05,.4,.14,.7),...[[.17,.32],[-.17,.32],[.17,-.32],[-.17,-.32]].flatMap(([n,i])=>[X(K.box,xl,n,.25,i,.14,.44,.14),X(K.box,Hl,n,.05,i+.02,.15,.1,.18)]),X(K.box,"#ff5a5f",0,.84,.43,.46,.1,.14),X(K.ico,"#ffc93c",0,.76,.52,.06)]));const t=new qt;t.position.set(0,.95,.5),t.add(Ne([X(K.box,xl,0,.08,.12,.44,.4,.42),X(K.box,Hl,0,-.03,.42,.24,.2,.26),X(K.box,kn,0,.05,.56,.1,.08,.05),X(K.box,"#8a5a35",.22,.2,.05,.1,.3,.17,0,0,-.35),X(K.box,"#8a5a35",-.22,.2,.05,.1,.3,.17,0,0,.35),X(K.box,kn,.11,.16,.335,.07,.08,.02),X(K.box,kn,-.11,.16,.335,.07,.08,.02),X(K.box,"#ff8fa3",0,-.15,.48,.1,.03,.12)])),s.add(t);const e=new qt;return e.position.set(0,.76,-.46),e.add(Ne([X(K.box,xl,0,.17,-.06,.09,.38,.09,-.5,0,0)])),s.add(e),s.scale.setScalar(1.3),{root:s,head:t,tail:e}}function tw(s){const t=new qt,e=[X(K.box,jr,0,1.45,0,.62,.62,1.45),X(K.box,Hl,0,1.2,.05,.5,.16,1.1),X(K.box,"#ffffff",0,1.62,-.76,.18,.26,.08,.4,0,0),X(K.box,jr,0,1.95,.62,.28,.85,.3,.45,0,0),...[[.2,.52],[-.2,.52],[.2,-.55],[-.2,-.55]].flatMap(([r,o])=>[X(K.box,jr,r,.62,o,.13,1.25,.13),X(K.box,kn,r,.05,o,.14,.1,.15)])];[[.25,1.6,.2],[-.2,1.65,-.3],[.18,1.55,-.45],[-.22,1.5,.35]].forEach(([r,o,a])=>e.push(X(K.box,"#fff4e6",Math.sign(r)*.315,o,a,.02,.09,.09))),t.add(Ne(e));const n=new qt;n.position.set(0,2.3,.82);const i=[X(K.box,jr,0,.05,.2,.32,.32,.55),X(K.box,kn,0,.02,.48,.12,.1,.05),X(K.box,jr,.22,.22,0,.08,.32,.18,0,0,-.7),X(K.box,jr,-.22,.22,0,.08,.32,.18,0,0,.7),X(K.box,kn,.165,.12,.28,.02,.07,.07),X(K.box,kn,-.165,.12,.28,.02,.07,.07)];return s&&[-1,1].forEach(r=>{i.push(X(K.cyl6,"#e8d8b8",r*.17,.5,.02,.04,.6,.04,0,0,-r*.35)),i.push(X(K.cyl6,"#e8d8b8",r*.3,.62,.12,.03,.3,.03,.6,0,-r*.2)),i.push(X(K.cyl6,"#e8d8b8",r*.3,.84,-.02,.03,.28,.03,-.3,0,-r*.6))}),n.add(Ne(i)),t.add(n),t.scale.setScalar(s?1.05:.95),{root:t,head:n}}function ew(){const s=new qt;s.add(Ne([X(K.ico,Gf,0,0,0,.28,.24,.62),X(K.ico,Gf,0,.12,.5,.2),X(K.cone,qu,0,.1,.76,.06,.22,.06,Math.PI/2),X(K.box,Hf,0,.02,-.62,.3,.04,.28),X(K.box,kn,.13,.17,.6,.02,.05,.05),X(K.box,kn,-.13,.17,.6,.02,.05,.05)]));const t=[-1,1].map(e=>{const n=new qt;return n.position.set(e*.15,.08,.02),n.add(Ne([X(K.box,Hf,e*.55,0,0,1.1,.04,.4),X(K.box,kn,e*1.12,0,-.03,.25,.045,.32)])),s.add(n),n});return s.scale.setScalar(1.25),{root:s,wings:t}}function vl(s,t){const e=new qt;return e.add(Ne([X(K.ico,s,0,.2,0,.4,.3,.55),X(K.ico,s,0,.55,.32,.22),X(K.box,qu,0,.5,.56,.18,.06,.2),X(K.cone,s,0,.34,-.5,.15,.3,.15,-1),X(K.box,kn,.15,.6,.42,.03,.06,.06),X(K.box,kn,-.15,.6,.42,.03,.06,.06)])),e.scale.setScalar(t),{root:e}}function nw(){const s=new qt;return s.add(Ne([X(K.ico,qu,0,0,0,.15,.22,.45),X(K.cone,"#ff6b3c",0,0,-.5,.2,.3,.07,Math.PI/2),X(K.box,kn,.1,.06,.25,.02,.05,.05),X(K.box,kn,-.1,.06,.25,.02,.05,.05)])),s.scale.setScalar(1.2),{root:s}}const yl=Math.PI*2,ia=(s,t)=>Math.atan2(Math.sin(t-s),Math.cos(t-s));function rr(s,t,e,n,i,r=6){const o=t-s.x,a=e-s.z,l=Math.hypot(o,a);if(l<.05)return l;s.heading+=ia(s.heading,Math.atan2(o,a))*Math.min(1,i*r);const c=Math.min(l,n*i);return s.x+=Math.sin(s.heading)*c,s.z+=Math.cos(s.heading)*c,l-c}function iw(s){const{scene:t,colliders:e,islandRadius:n,rand:i,sound:r}=s,o=(n||60)-5,a=(S,V)=>{for(const A of e){const R=S.x-A.x,I=S.z-A.z,y=Math.hypot(R,I),U=A.r+V;y<U&&y>1e-4&&(S.x=A.x+R/y*U,S.z=A.z+I/y*U)}if(s.land)for(let A=0;A<4;A++){const R=s.land(S.x,S.z);if(R>=4)break;const I=s.land(S.x+.5,S.z)-s.land(S.x-.5,S.z),y=s.land(S.x,S.z+.5)-s.land(S.x,S.z-.5),U=Math.hypot(I,y)||1,F=Math.min(1.5,4-R);S.x+=I/U*F,S.z+=y/U*F}else{const A=Math.hypot(S.x,S.z);A>o&&(S.x*=o/A,S.z*=o/A)}},l=(S,V,A)=>{const R=i()*yl,I=Math.sqrt(i())*A;return[S+Math.cos(R)*I,V+Math.sin(R)*I]},h={...QM(),kind:"dog",x:s.dogHome.x,z:s.dogHome.z,heading:0,mode:"home",timer:2,cooldown:0,tx:s.dogHome.x,tz:s.dogHome.z,gait:0};h.root.rotation.order="YXZ",h.happy=0,h.pets=0,t.add(h.root);const d=[];for(let S=0;S<5;S++){const V=JM(.85+i()*.25),[A,R]=l(s.meadow.x,s.meadow.z,5),I={...V,kind:"sheep",x:A,z:R,heading:i()*yl,mode:"graze",timer:i()*4,tx:A,tz:R,flee:0,hop:0,gait:i()*10};t.add(I.root),d.push(I)}const u=[!0,!1].map((S,V)=>{const A=tw(S),[R,I]=l(s.forest.x,s.forest.z,3),y={...A,kind:"deer",x:R,z:I,heading:i()*yl,mode:"graze",timer:1+V*2,tx:R,tz:I,flee:0,gait:0,hop:0};return t.add(y.root),y}),f=[0,1,2,3].map(S=>{const A={...ew(),kind:"gull",radius:7+S*1.6,height:s.lighthouse.top+3+S%2*2.2,speed:(.32+S*.05)*(S%2?-1:1),phase:S*1.7};return t.add(A.root),A}),m=[vl("#fffaf0",1.6),vl("#ffd23f",.9),vl("#ffd23f",.9),vl("#ffd23f",.85)].map((S,V)=>{const A={...S,kind:"duck",lag:V*.32};return t.add(A.root),A}),x={...nw(),kind:"fish",t:-2,x:0,z:0,dir:0,on:!0};x.root.visible=!1,t.add(x.root);const p=new De({color:"#ffffff",transparent:!0,opacity:0,depthWrite:!1}),g=new ye(new Gs(.25,.42,16),p);g.rotation.x=-Math.PI/2,t.add(g);let _=0,v=null;function M(S){v=S}let P="high";function T(S){P=S;const V=S==="low";d.forEach((A,R)=>A.root.visible=!V||R<3),u[1].root.visible=!V,f.forEach((A,R)=>A.root.visible=!V||R<2),m.forEach((A,R)=>A.root.visible=!V||R<2),x.on=!V,V&&(x.root.visible=!1,p.opacity=0)}function C(S,V,A){_-=V;const R=Math.abs(A.speed)>5;{const y=h,U=Math.hypot(A.x-y.x,A.z-y.z),F=Math.hypot(y.x-s.dogHome.x,y.z-s.dogHome.z);y.cooldown-=V,y.timer-=V;let Z=0,st=0;if(y.mode==="pet"){const Yt=Math.hypot(y.tx-y.x,y.tz-y.z);!y.arrived&&Yt>.25&&y.timer>y.petDur-2?(Z=Math.min(6,2+Yt*2),rr(y,y.tx,y.tz,Z,V,9)):(y.arrived||(y.arrived=!0,r.yip&&r.yip()),y.heading+=ia(y.heading,Math.atan2(y.fx-y.x,y.fz-y.z))*Math.min(1,V*8),y.happy=Math.min(1,y.happy+V*3),st=1),y.timer<=0&&(y.mode="home",y.cooldown=10,y.timer=2,y.arrived=!1)}else if(y.mode==="home")U<9&&y.cooldown<=0&&A.y<.5?(y.mode="follow",y.timer=7,r.woof()):v&&Math.hypot(v.x-s.dogHome.x,v.z-s.dogHome.z)<20?(y.tx=v.x-1,y.tz=v.z+.9,y.timer=1):y.timer<=0&&([y.tx,y.tz]=l(s.dogHome.x,s.dogHome.z,3.5),y.timer=2.5+i()*3),Math.hypot(y.tx-y.x,y.tz-y.z)>.3?(Z=v?4:2.2,rr(y,y.tx,y.tz,Z,V)):v&&(y.heading+=ia(y.heading,Math.atan2(v.x-y.x,v.z-y.z))*Math.min(1,V*4));else if(y.mode==="follow"){const Yt=Math.sin(A.heading),ct=Math.cos(A.heading),dt=A.x-Yt*3.4+ct*1.8,Pt=A.z-ct*3.4-Yt*1.8,Tt=Math.hypot(dt-y.x,Pt-y.z);Z=Math.min(12,Tt*3),Tt>.4?rr(y,dt,Pt,Z,V,8):(y.heading+=ia(y.heading,A.heading)*Math.min(1,V*4),Z=0),(y.timer<=0||F>26)&&(y.mode="return",y.cooldown=12)}else Z=6,rr(y,s.dogHome.x,s.dogHome.z,Z,V)<.5&&(y.mode="home",y.timer=1);y.mode!=="pet"&&(y.happy=Math.max(0,y.happy-V)),a(y,.7),y.gait+=V*(4+Z*1.6);const mt=Z>.3;y.sitK=(y.sitK||0)+(st-(y.sitK||0))*Math.min(1,V*8),y.root.position.set(y.x,(mt?Math.abs(Math.sin(y.gait))*Math.min(.25,Z*.03):0)-y.sitK*.12+y.happy*Math.abs(Math.sin(S*9))*.05,y.z),y.root.rotation.set((mt?Math.sin(y.gait*2)*.04:0)-y.sitK*.38,y.heading,y.happy*Math.sin(S*14)*.06);const Mt=y.happy>.1?30:y.mode==="follow"?22:9;y.tail.rotation.z=Math.sin(S*Mt)*(.6+y.happy*.45),y.head.rotation.x=mt?0:y.mode==="pet"?-.25+Math.sin(S*5)*.08:v&&y.mode==="home"?.55+Math.sin(S*6)*.1:Math.sin(S*1.3)*.12-.05,y.head.rotation.y=mt||y.mode==="pet"?0:Math.sin(S*.7)*.35,y.head.rotation.z=y.happy*Math.sin(S*3)*.25}const I=(y,U,F,Z,st,mt)=>{if(!y.root.visible)return;const Mt=y.x-A.x,Yt=y.z-A.z,ct=Math.hypot(Mt,Yt);y.timer-=V;let dt=0;ct<st&&(R||ct<st*.5)&&A.y<1.5&&(y.mode!=="flee"&&(y.hop=0,y.kind==="sheep"&&_<=0&&(r.bleat(),_=3)),y.mode="flee",y.flee=y.kind==="deer"?2.2:1.4,y.tx=y.x+Mt/(ct||1)*8,y.tz=y.z+Yt/(ct||1)*8);const Pt=v&&y.kind==="sheep"&&y.mode!=="flee"?Math.hypot(v.x-y.x,v.z-y.z):99;if(Pt<20){const Qt=d.indexOf(y),Et=Qt*1.26+.4,zt=v.x+Math.cos(Et)*1.3,Jt=v.z+Math.sin(Et)*1.3;Math.hypot(zt-y.x,Jt-y.z)>.25?(y.mode="walk",dt=2.4,rr(y,zt,Jt,dt,V,5)):(y.mode="graze",y.timer=2,y.heading+=ia(y.heading,Math.atan2(v.x-y.x,v.z-y.z))*Math.min(1,V*4)),y.eating=!0}else y.mode==="flee"?(y.flee-=V,dt=Z,rr(y,y.tx,y.tz,dt,V,10),y.flee<=0&&(y.mode="walk",[y.tx,y.tz]=l(U.x,U.z,F))):y.mode==="walk"?(dt=1.3,rr(y,y.tx,y.tz,dt,V,3)<.2&&(y.mode="graze",y.timer=3+i()*5)):y.timer<=0&&(y.mode="walk",[y.tx,y.tz]=l(U.x,U.z,F));y.eating&&Pt>=20&&(y.eating=!1,y.mode="walk",[y.tx,y.tz]=l(U.x,U.z,F)),a(y,mt),y.gait+=V*(2+dt*2.2);const Tt=y.mode==="flee"?Math.abs(Math.sin(y.gait))*(y.kind==="deer"?.9:.45):dt?Math.abs(Math.sin(y.gait))*.06:0;y.root.position.set(y.x,Tt,y.z),y.root.rotation.set(y.mode==="flee"?-Math.cos(y.gait)*.15:0,y.heading,dt?Math.sin(y.gait)*.05:0),y.head.rotation.x=y.mode==="graze"?.75+Math.sin(S*3+y.x)*.08:y.mode==="flee"?-.1:.15};if(d.forEach(y=>I(y,s.meadow,6,6.5,7,.9)),u.forEach(y=>I(y,s.forest,4,10,11,1)),f.forEach(y=>{if(!y.root.visible)return;const U=S*y.speed+y.phase,F=y.radius+Math.sin(S*.4+y.phase)*1.5,Z=s.lighthouse.x+Math.cos(U)*F,st=s.lighthouse.z+Math.sin(U)*F,mt=Math.sign(y.speed);y.root.position.set(Z,y.height+Math.sin(S*.9+y.phase)*.6,st),y.root.rotation.set(0,Math.atan2(-Math.sin(U)*mt,Math.cos(U)*mt),mt*.35,"YXZ");const Yt=Math.sin(S*.6+y.phase)>-.2?Math.sin(S*9+y.phase)*.55:.08;y.wings[0].rotation.z=-Yt,y.wings[1].rotation.z=Yt}),m.forEach(y=>{if(!y.root.visible)return;const U=S*.25-y.lag,F=s.pond.x+Math.cos(U)*3.2,Z=s.pond.z+Math.sin(U)*2.2;y.root.position.set(F,-1.2+s.waveY(F,Z,S)*.22-.05,Z),y.root.rotation.set(Math.sin(S*2+y.lag)*.06,Math.atan2(-Math.sin(U)*3.2,Math.cos(U)*2.2),Math.sin(S*1.6+y.lag)*.08)}),x.on){x.t+=V;const y=.9;if(x.t>3.5+x.x%1*3){const[F,Z]=l(s.pond.x,s.pond.z,4);Object.assign(x,{t:0,x:F,z:Z,dir:i()*yl})}if(x.t>=0&&x.t<=y){const F=x.t/y,Z=Math.sin(x.dir)*(F-.5)*2.4,st=Math.cos(x.dir)*(F-.5)*2.4;x.root.visible=!0,x.root.position.set(x.x+Z,-1.35+Math.sin(F*Math.PI)*1.9,x.z+st),x.root.rotation.set(-Math.cos(F*Math.PI)*1,x.dir,0,"YXZ")}else x.root.visible=!1;const U=x.t<.5?x.t/.5:x.t>y&&x.t<y+.5?(x.t-y)/.5:-1;if(U>=0){const F=x.t<.5?-.5:.5;g.position.set(x.x+Math.sin(x.dir)*F*2.4,-1.05,x.z+Math.cos(x.dir)*F*2.4),g.scale.setScalar(1+U*2.5),p.opacity=(1-U)*.7}else p.opacity=0}}function O(S,V,A,R,I=4.5){Object.assign(h,{mode:"pet",tx:S,tz:V,fx:A,fz:R,timer:I,petDur:I,arrived:!1}),h.pets++}function q(S=2.5){return h.mode!=="pet"?!1:(h.timer=Math.min(h.timer+S,9),h.petDur=Math.max(h.petDur,h.timer+2),h.happy=1,h.pets++,r.yip&&r.yip(),!0)}function b(){h.mode==="pet"&&(h.mode="home",h.cooldown=10,h.timer=2,h.arrived=!1)}return{update:C,setQuality:T,setFeed:M,petDog:O,petMore:q,stopPet:b,dog:{get x(){return h.x},get z(){return h.z},get mode(){return h.mode},get arrived(){return!!h.arrived},get happy(){return h.happy}},debug:()=>({feed:v,level:P,dog:{mode:h.mode,x:h.x,z:h.z,cooldown:h.cooldown,arrived:!!h.arrived,happy:h.happy,pets:h.pets,wag:h.tail.rotation.z},sheep:d.map(S=>({mode:S.mode,x:S.x,z:S.z,visible:S.root.visible})),deer:u.map(S=>({mode:S.mode,x:S.x,z:S.z,visible:S.root.visible})),gulls:f.filter(S=>S.root.visible).length,ducks:m.filter(S=>S.root.visible).length,fish:x.on})}}const $r="#f6d3b8",Kr="#6b3f22",Vf="#57321a",_l="#7d1f2e",Wf="#fff6ee",dh="#c99a62",qf="#1d1b3a",Xf="#ffd166",fh="#3fb6a8",Yf="#c48a4a";function sw(){const s=new qt,t=new Te(.27,.5,.78,8),e=[X(t,_l,0,.98,0),X(K.box,_l,0,1.5,0,.5,.38,.28),X(K.box,_l,.16,1.73,0,.06,.1,.2),X(K.box,_l,-.16,1.73,0,.06,.1,.2),X(K.box,$r,0,1.73,0,.26,.1,.2),X(K.cyl6,$r,0,1.84,0,.08,.16,.08),X(new Pi(.11,.012,4,12),Xf,0,1.75,.07,1,1,1,Math.PI/2-.35),X(K.ico,Xf,0,1.66,.155,.03),X(K.box,"#a33447",0,1.3,0,.52,.06,.3)];for(let c=0;c<22;c++){const h=c*2.39996,u=.64+c*.618%1*.66,f=.5-(u-.59)/.78*.23+.005;e.push(X(K.ico,Wf,Math.sin(h)*f,u,Math.cos(h)*f,.025))}[[-.14,1.55],[.12,1.42],[0,1.6],[-.06,1.38],[.18,1.6]].forEach(([c,h])=>e.push(X(K.ico,Wf,c,h,.145,.022))),s.add(Ne(e));const n=[-1,1].map(c=>{const h=new qt;return h.position.set(c*.11,.7,0),h.add(Ne([X(K.box,$r,0,-.33,0,.11,.62,.11),X(K.box,dh,0,-.67,.04,.13,.05,.24),X(K.box,dh,0,-.62,.07,.135,.04,.04),X(K.box,dh,0,-.57,-.03,.135,.03,.12,.6)])),s.add(h),h}),i=[-1,1].map(c=>{const h=new qt;return h.position.set(c*.31,1.66,0),h.add(Ne([X(K.box,$r,c*.02,-.3,0,.1,.58,.1,0,0,c*.08),X(K.ico,$r,c*.04,-.62,0,.07)])),s.add(h),h}),r=new qt;r.position.set(.04,-.66,.02),r.add(Ne([X(K.cyl,fh,0,-.18,0,.14,.26,.14),X(K.box,fh,0,0,-.02,.04,.04,.26),X(K.cyl6,fh,0,-.08,.24,.025,.4,.025,1),X(K.cyl6,"#2a9488",0,.06,.4,.05,.06,.05,1)])),i[1].add(r);const o=new qt;o.position.set(-.04,-.68,.06),o.add(Ne([X(K.cyl,Yf,0,-.1,0,.17,.15,.14),X(K.cyl,"#ffd23f",0,-.02,0,.14,.03,.11),X(new Pi(.15,.015,4,10,Math.PI),Yf,0,-.04,0)])),i[0].add(o);const a=new qt;a.position.set(0,1.92,0),a.add(Ne([X(K.ico,$r,0,.15,0,.22,.24,.21),X(K.box,qf,.075,.17,.195,.04,.05,.02),X(K.box,qf,-.075,.17,.195,.04,.05,.02),X(K.box,"#ff9eaa",.12,.08,.17,.05,.03,.02),X(K.box,"#ff9eaa",-.12,.08,.17,.05,.03,.02),X(K.box,"#b23a48",0,.045,.205,.06,.018,.02),X(K.box,"#b23a48",.042,.055,.2,.035,.018,.02,0,0,.5),X(K.box,"#b23a48",-.042,.055,.2,.035,.018,.02,0,0,-.5),X(K.ico,Kr,0,.22,-.03,.235,.22,.23),X(K.box,Kr,0,.3,.12,.4,.1,.12,-.3),X(K.box,Kr,.2,.12,-.02,.07,.28,.3),X(K.box,Kr,-.2,.12,-.02,.07,.28,.3),X(K.ico,"#ff5a5f",0,.26,-.24,.05),X(K.box,"#111122",.075,.42,.06,.12,.04,.09,-.35),X(K.box,"#111122",-.075,.42,.06,.12,.04,.09,-.35),X(K.box,"#111122",0,.42,.08,.05,.02,.02),X(K.box,"#111122",.2,.33,-.02,.015,.02,.2,-.4),X(K.box,"#111122",-.2,.33,-.02,.015,.02,.2,-.4)]));const l=new qt;return l.position.set(0,.26,-.24),l.add(Ne([X(K.ico,Kr,0,-.1,-.04,.09,.14,.08),X(K.ico,Vf,0,-.3,-.06,.08,.14,.07),X(K.ico,Kr,0,-.5,-.05,.065,.13,.06),X(K.cone,Vf,0,-.66,-.04,.05,.14,.05,Math.PI)])),a.add(l),s.add(a),s.scale.setScalar(1.05),{root:s,legs:n,arms:i,head:a,tail:l,can:r}}function rw(s,t){const e=new qt;e.position.set(t.x,0,t.z),s.add(e),e.add(Ne([X(K.box,"#7a4b2a",0,.12,0,2.6,.24,1.1),X(K.box,"#5b3a22",0,.25,0,2.4,.04,.9)]));const n=["#ff5a5f","#ffd23f","#ff8fd1","#9b8cff","#ffffff","#ff9a3c"],i=[];for(let r=0;r<6;r++){const o=new qt;o.position.set(-1+r*.4,.26,r%2*.32-.16),o.add(Ne([X(K.cyl6,"#3fa968",0,.3,0,.03,.6,.03),X(K.box,"#56c271",.08,.22,0,.14,.02,.07,0,0,.4),...[0,1,2,3,4].map(a=>X(K.ico,n[r],Math.sin(a*1.257)*.09,.62,Math.cos(a*1.257)*.09,.07,.04,.07)),X(K.ico,"#ffc93c",0,.64,0,.05)])),o.rotation.y=r,e.add(o),i.push({f:o,perk:.15,droopAxis:r%2?1:-1})}return i}const Ml=(s,t)=>Math.atan2(Math.sin(t-s),Math.cos(t-s));function ow(s){const{scene:t,house:e,animals:n}=s,i=(R,I)=>e.localToWorld(new B(R,0,I)),r=R=>e.group.worldToLocal(new B(R.x,0,R.z)),o=rw(e.group,{x:-5.7,z:5.9});{const R=i(-5.7,5.9);s.addCollider(R.x,R.z,1.3)}const a=sw();t.add(a.root);const l=r(s.feedSpot),c=[{p:[1.4,3.7],act:"idle",dur:3,face:[1.4,12]},{p:[.8,9]},{p:[l.x+.9,l.z+.6],act:"feed",dur:8,face:[l.x-1,l.z-.5]},{p:[-5.7,7.5],act:"water",target:"bed",dur:6,face:[-5.7,5.9]},{p:[-1.9,7.9],act:"water",target:"garden",dur:5,face:[-1.9,5.8]},{p:[.8,9]}].map(R=>({...R,w:i(...R.p),f:R.face?i(...R.face):null})),h={x:c[0].w.x,z:c[0].w.z,heading:0,i:0,mode:"walk",timer:0,gait:0,yield:0,act:null,talk:0,talkT:0},d={x:h.x,z:h.z,r:.55};s.colliders.push(d);const u=18,f=12,m=new ms(new ge(.09,.05,.09),new Bn({color:"#ffd23f",roughness:.8}),u),x=new De({color:new Vt("#7fd8ff").multiplyScalar(1.15),transparent:!0,opacity:.85}),p=new ms(new Xn(.045,0),x,f);m.count=0,p.count=0,t.add(m,p);const g=Array.from({length:u},()=>({t:-1,sx:0,sz:0,ex:0,ez:0}));let _=u,v=f,M=0;const P=new rn,T=new B;function C(R){_=R==="low"?10:u,v=R==="low"?6:f}function O(R){h.mode="act",h.act=R.act,h.timer=R.dur,h.target=R.target,h.throwT=0,R.act==="feed"&&(g.forEach(I=>I.t=-1),h.thrown=0)}function q(){h.i=(h.i+1)%c.length,h.mode="walk",h.act=null}function b(R,I,y){const U=c[h.i],F=Math.hypot(y.x-h.x,y.z-h.z),Z=F<4.8&&y.y<1.5;let st=0;if(h.talk>0)h.talk-=I,h.talkT+=I,F>7&&(h.talk=Math.min(h.talk,.5)),h.yield=Math.max(h.yield,.6),h.heading+=Ml(h.heading,Math.atan2(y.x-h.x,y.z-h.z))*Math.min(1,I*6);else if(Z){if(h.yield=1.2,h.heading+=Ml(h.heading,Math.atan2(y.x-h.x,y.z-h.z))*Math.min(1,I*6),F<3.4&&Math.abs(y.speed||0)>.6){const Et=Math.sin(y.heading);let Jt=Math.cos(y.heading),ht=-Et;(h.x-y.x)*Jt+(h.z-y.z)*ht<0&&(Jt=-Jt,ht=-ht),h.x+=Jt*1.6*I,h.z+=ht*1.6*I,st=1.6}}else if(h.yield>0)h.yield-=I;else if(h.mode==="walk"){const Et=U.w.x-h.x,zt=U.w.z-h.z,Jt=Math.hypot(Et,zt);if(Jt<.12)U.act?O(U):q();else{st=1.5,h.heading+=Ml(h.heading,Math.atan2(Et,zt))*Math.min(1,I*7);const ht=Math.min(Jt,st*I);h.x+=Math.sin(h.heading)*ht,h.z+=Math.cos(h.heading)*ht}}else{if(U.f&&(h.heading+=Ml(h.heading,Math.atan2(U.f.x-h.x,U.f.z-h.z))*Math.min(1,I*5)),h.timer-=I,h.act==="feed"&&(h.throwT-=I,h.throwT<=0&&h.thrown<4)){h.throwT=.55,h.thrown++,a.arms[0].updateWorldMatrix(!0,!1);const Et=a.arms[0].localToWorld(T.set(0,-.6,.1)),zt=Math.ceil(_/4);for(let Jt=0;Jt<zt;Jt++){const ht=g[(h.thrown-1)*zt+Jt];if(!ht)break;const k=h.heading+(Math.random()-.5)*1.4,Lt=1.6+Math.random()*1.6;Object.assign(ht,{t:0,sx:Et.x,sy:Et.y,sz:Et.z,ex:h.x+Math.sin(k)*Lt,ez:h.z+Math.cos(k)*Lt})}M=16,n.setFeed({x:h.x+Math.sin(h.heading)*2.4,z:h.z+Math.cos(h.heading)*2.4})}h.act==="water"&&(h.target==="bed"?o:[]).forEach(zt=>zt.perk=Math.min(1,zt.perk+I*.45)),h.timer<=0&&q()}for(const Et of s.colliders){if(Et===d)continue;const zt=h.x-Et.x,Jt=h.z-Et.z,ht=Math.hypot(zt,Jt),k=Et.r+.35;ht<k&&ht>1e-4&&Et.r<3&&(h.x=Et.x+zt/ht*k,h.z=Et.z+Jt/ht*k)}d.x=h.x,d.z=h.z;const mt=a;h.gait+=I*st*5.5;const Mt=st>.1?Math.sin(h.gait)*.55:0;mt.root.position.set(h.x,st>.1?Math.abs(Math.cos(h.gait))*.05:0,h.z),mt.root.rotation.set(0,h.heading,0),mt.legs[0].rotation.x=Mt,mt.legs[1].rotation.x=-Mt,mt.tail.rotation.x=.15+(st>.1?Math.abs(Math.sin(h.gait))*.2:Math.sin(R*1.5)*.05),mt.tail.rotation.z=st>.1?Math.sin(h.gait)*.25:0,mt.head.rotation.set(0,0,Math.sin(R*.8)*.04);let Yt=-Mt*.8,ct=Mt*.8,dt=0,Pt=0,Tt=0;h.yield>0&&st<.1&&!(h.talk>0&&h.talkT>1.6)?(ct=-2.6,dt=-.3+Math.sin(R*10)*.35,mt.head.rotation.z=.12):h.act==="feed"&&h.mode==="act"?(Yt=-.6-Math.max(0,Math.sin(h.throwT/.55*Math.PI))*.9,Pt=.2,mt.head.rotation.x=.25):h.act==="water"&&h.mode==="act"&&(ct=-.95,Tt=.75,mt.head.rotation.x=.35),mt.arms[0].rotation.set(Yt,0,Pt),mt.arms[1].rotation.set(ct,0,dt),mt.can.rotation.x=Tt?.6-ct:-ct,M-=I,M<=0&&n.setFeed(null);let Qt=0;for(const Et of g){if(Et.t<0)continue;Et.t+=I;const zt=Math.min(1,Et.t/.45),Jt=Et.sx+(Et.ex-Et.sx)*zt,ht=Et.sz+(Et.ez-Et.sz)*zt,k=Et.sy*(1-zt)+Math.sin(zt*Math.PI)*.6+.03,Lt=M>3?1:Math.max(0,M/3);if(Lt<=0){Et.t=-1;continue}P.position.set(Jt,k,ht),P.rotation.set(Et.t*6,Et.ex,0),P.scale.setScalar(Lt),P.updateMatrix(),m.setMatrixAt(Qt++,P.matrix)}if(m.count=Qt,m.instanceMatrix.needsUpdate=!0,h.act==="water"&&h.mode==="act"&&h.yield<=0){mt.can.updateWorldMatrix(!0,!1);const Et=mt.can.localToWorld(T.set(0,.06,.42)),zt=Math.sin(h.heading),Jt=Math.cos(h.heading);for(let ht=0;ht<v;ht++){const k=(R*1.6+ht/v)%1;P.position.set(Et.x+zt*k*.7+Math.sin(ht*7.1)*.06,Et.y-k*k*Et.y,Et.z+Jt*k*.7+Math.cos(ht*3.3)*.06),P.scale.setScalar(1-k*.4),P.rotation.set(0,0,0),P.updateMatrix(),p.setMatrixAt(ht,P.matrix)}p.count=v,p.instanceMatrix.needsUpdate=!0}else p.count=0;o.forEach((Et,zt)=>{Et.perk=Math.max(.15,Et.perk-I*.012);const Jt=(1-Et.perk)*.9;Et.f.rotation.set(Jt*Et.droopAxis*.4+Jt,zt,Math.sin(R*1.4+zt)*.04),Et.f.scale.setScalar(.85+Et.perk*.25)})}const S=["Oh, hello! Lovely evening for a walk, isn't it?","I'm bringing in the garden before the first frost. The pumpkins did well this year.","Follow the stepping stones east of the Experience sign. That's the career timeline.","The sheep and the deer get shy if you run at them. Walk slowly and they'll stay put.","There's a bowling lane out west. Kick the ball hard and straight!","Every glowing circle has a sign. Stand on it and press E to read it."];let V=0;function A(){h.talk=7,h.talkT=0;const R=S[V%S.length];return V++,R}return{update:b,setQuality:C,talk:A,collider:d,get talking(){return h.talk>0},get x(){return h.x},get z(){return h.z},goto(R){h.i=R,h.x=c[R].w.x,h.z=c[R].w.z,h.yield=0,c[R].act?O(c[R]):h.mode="walk"},debug:()=>({talking:h.talk>0,x:h.x,z:h.z,heading:h.heading,stop:h.i,mode:h.mode,act:h.act,yielding:h.yield>0,perk:o.map(R=>+R.perk.toFixed(2)),grains:m.count,drops:p.count})}}const fc=`
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
`;function aw(){return{uTop:{value:new Vt("#3b2466")},uMid:{value:new Vt("#b8507a")},uHorizon:{value:new Vt("#ffa463")},uSunDir:{value:new B(-.45,.07,-1).normalize()},uSunColor:{value:new Vt("#ffc27a")}}}const A0=`
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
`;function lw(s){const t=new bn({uniforms:s,side:Yn,depthWrite:!1,fog:!1,vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      ${A0}
      varying vec3 vDir;
      void main() {
        gl_FragColor = vec4(skyColor(normalize(vDir)), 1.0);
        ${fc}
      }`}),e=new ye(new ri(280,32,16),t);return e.frustumCulled=!1,e.renderOrder=-10,e}function cw({skyUniforms:s,distTex:t,distSize:e,distMin:n,distMax:i,size:r=640,segments:o=150}){const a=new hn(r,r,o,o);a.rotateX(-Math.PI/2);const l=xo.merge([Ht.fog,{uTime:{value:0},uDeep:{value:new Vt("#14606f")},uShallow:{value:new Vt("#2fb3a6")},uFoam:{value:new Vt("#fff8ee")},uDistSize:{value:e},uDistRange:{value:new bt(n,i)}}]);l.uDist={value:t},Object.assign(l,s);const c=new bn({uniforms:l,fog:!0,vertexShader:`
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
        float h = wave(wp.xz, uTime);
        wp.y += h * 0.22;
        vWave = h;
        vWorld = wp.xyz;
        vec4 mvPosition = viewMatrix * wp;
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,fragmentShader:`
      ${A0}
      uniform float uTime, uDistSize;
      uniform vec2 uDistRange;
      uniform sampler2D uDist;
      uniform vec3 uDeep, uShallow, uFoam;
      varying vec3 vWorld;
      varying float vWave;
      #include <fog_pars_fragment>
      void main() {
        vec3 n = normalize(cross(dFdx(vWorld), dFdy(vWorld)));
        if (n.y < 0.0) n = -n;
        vec2 uv = vWorld.xz / uDistSize + 0.5;
        float inside = step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0);
        float sd = mix(uDistRange.x, uDistRange.y, texture2D(uDist, clamp(uv, 0.0, 1.0)).r);
        float far = length(vWorld.xz) * 0.35;
        float sea = mix(far, -sd, inside); // metres out from the coast
        sea = min(sea, far + 40.0);
        vec3 V = normalize(cameraPosition - vWorld);
        float fres = pow(1.0 - max(dot(n, V), 0.0), 3.0);
        vec3 refl = reflect(-V, n);
        refl.y = abs(refl.y);
        vec3 col = mix(uShallow, uDeep, smoothstep(0.0, 26.0, sea));
        col = mix(col, skyColor(refl), clamp(fres * 0.7 + 0.06, 0.0, 1.0));

        // wobble so the lines feel hand-drawn
        float wob = sin(vWorld.x * 0.21 + uTime * 0.6) * 0.45 + sin(vWorld.z * 0.17 - uTime * 0.5) * 0.45
                  + sin((vWorld.x - vWorld.z) * 0.5 + uTime) * 0.18;
        // foam hugging the shore
        float band = 1.0 - smoothstep(0.2, 1.1 + wob * 0.35, sea);
        // white contour lines travelling outward from the coast, fading with distance
        float s2 = sea + wob * 0.8;
        float k = fract(s2 / 3.6 - uTime * 0.16);
        float line = smoothstep(0.0, 0.05, k) * (1.0 - smoothstep(0.1, 0.17, k));
        line *= smoothstep(0.6, 2.4, sea) * (1.0 - smoothstep(10.0, 24.0, sea));
        // faint long swell lines far out
        float k2 = fract(s2 / 9.0 - uTime * 0.05);
        float swell = smoothstep(0.0, 0.03, k2) * (1.0 - smoothstep(0.05, 0.09, k2)) * smoothstep(20.0, 30.0, sea) * (1.0 - smoothstep(55.0, 90.0, sea)) * 0.35;
        float foam = clamp(max(band, max(line * 0.9, swell)), 0.0, 1.0);
        col = mix(col, uFoam, foam);

        float spec = pow(max(dot(refl, uSunDir), 0.0), 160.0);
        col += uSunColor * spec * 2.2;
        gl_FragColor = vec4(col, 1.0);
        ${fc}
        #include <fog_fragment>
      }`}),h=new ye(a,c);return h.position.y=-1.2,{mesh:h,update:d=>l.uTime.value=d}}function hw({max:s,pick:t,rand:e}){const n=new Float32Array(s*3),i=new Float32Array(s);for(let c=0;c<s;c++){const[h,d]=t();n.set([h,.7+e()*3.8,d],c*3),i[c]=e()}const r=new Qe;r.setAttribute("position",new un(n,3)),r.setAttribute("aPhase",new un(i,1));const o={uTime:{value:0},uPixelRatio:{value:1},uColor:{value:new Vt("#ffd27a")}},a=new bn({uniforms:o,transparent:!0,depthWrite:!1,blending:Bs,vertexShader:`
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
        ${fc}
      }`}),l=new h0(r,a);return l.frustumCulled=!1,{points:l,setCount:c=>r.setDrawRange(0,Math.min(s,c)),setPixelRatio:c=>o.uPixelRatio.value=c,update:c=>o.uTime.value=c}}function jf(s="#fff1b8"){return new bn({uniforms:{uColor:{value:new Vt(s)}},transparent:!0,depthWrite:!1,side:zn,blending:Bs,vertexShader:`
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
        ${fc}
      }`})}const uw={uniforms:{tDiffuse:{value:null},uStrength:{value:.32}},vertexShader:`
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
    }`},Ai=-1.2,wl=(s,t)=>{const e=Math.sin(s*127.1+t*311.7)*43758.5453;return e-Math.floor(e)},$f=s=>s*s*(3-2*s);function ph(s,t){const e=Math.floor(s),n=Math.floor(t),i=s-e,r=t-n,o=wl(e,n),a=wl(e+1,n),l=wl(e,n+1),c=wl(e+1,n+1),h=$f(i),d=$f(r);return o+(a-o)*h+(l-o)*d+(o-a-l+c)*h*d}function oo(s,t){return ph(s,t)*.55+ph(s*2.1+5.2,t*2.1+1.3)*.3+ph(s*4.3+9.1,t*4.3+7.7)*.15}const pc=s=>Math.max(0,Math.min(1,s)),pr=(s,t,e)=>{const n=pc((e-s)/(t-s));return n*n*(3-2*n)},Is=(s,t,e)=>{const n=pc(.5+.5*(s-t)/e);return t+(s-t)*n+e*n*(1-n)},mh=(s,t,e)=>-Is(-s,-t,e),Ls=(s,t,e,n,i)=>i-Math.hypot(s-e,t-n);function Kf(s,t,e,n,i,r,o){const a=i-e,l=r-n,c=pc(((s-e)*a+(t-n)*l)/(a*a+l*l));return o-Math.hypot(s-e-c*a,t-n-c*l)}const Xi={x:-26,z:-70},Kn={x:66,z:50};function oi(s,t){let e=Ls(s,t,2,2,34);e=Is(e,Ls(s,t,34,-10,30),14),e=Is(e,Ls(s,t,-32,6,27),12),e=Is(e,Ls(s,t,14,-42,21),10),e=Is(e,Ls(s,t,-6,36,22),10),e=Is(e,Ls(s,t,34,26,15),9),e=Is(e,Kf(s,t,-14,-26,Xi.x,Xi.z+4,9.5),8),e=Is(e,Ls(s,t,Xi.x,Xi.z,11),6),e=mh(e,Math.hypot(s+50,t+26)-15,7),e=mh(e,Math.hypot(s-18,t-58)-13,6),e=mh(e,Math.hypot(s-58,t+40)-16,8),e+=(oo(s*.045+3.1,t*.045-1.7)-.5)*9+(oo(s*.16,t*.16)-.5)*2.2;const n=Ls(s,t,Kn.x,Kn.z,9)+(oo(s*.2,t*.2)-.5)*2,i=Math.min(2.2,Kf(s,t,44,34,Kn.x-4,Kn.z-3,3.4));return Math.max(e,n,i)}function C0(s,t){const e=pr(-34,-50,s)*pr(26,8,t),n=pr(-34,-50,t)*pr(4,-8,s),i=oo(s*.05+11,t*.05+4);return pc(Math.max(e,n)*1.3+(i-.5)*.5)}function dw(s,t){const e=Math.hypot(s-Xi.x,t-Xi.z);return 3.2*(1-pr(4,17,e))}function vn(s,t,e=oi(s,t)){const n=C0(s,t),i=e>=6?0:e>=-8?Ai+e/6*-Ai*(e>0?1:1.6):Ai-2.6,r=e>=1.2?0:e>=-.6?-4.2*pr(1.2,-.6,e):-4.2-(-.6-e)*.2;let o=i+(r-i)*n;return e>-2&&(o+=dw(s,t)*pr(-2,3,e)),o}const fw=Ai-.28;function Zf(s,t){return vn(s,t)>=fw}const Ci=s=>new Vt(s),gh=[Ci("#c98a42"),Ci("#b9772f"),Ci("#d69a4c"),Ci("#ad8338"),Ci("#c2683a")],pw=Ci("#efcb8e"),xh=Ci("#f1d197"),Jf=Ci("#d4a873"),mw=Ci("#8c5b47"),gw=Ci("#6f4639"),xw=Ci("#bf9a66"),vw=(s,t,e,n,i,r)=>{const o=i-e,a=r-n,l=o*o+a*a||1,c=Math.max(0,Math.min(1,((s-e)*o+(t-n)*a)/l));return Math.hypot(s-e-c*o,t-n-c*a)};function yw(s,t,e){let n=1/0;for(let i=0;i<e.length-1;i++)n=Math.min(n,vw(s,t,e[i][0],e[i][1],e[i+1][0],e[i+1][1]));return n}function _w({paths:s=[],pads:t=[]}){const a=Math.round(129.6)+1,l=Math.round(170/1.25)+1,c=new Float32Array(a*l*3),h=new Float32Array(a*l*3),d=new Float32Array(a*l),u=new Float32Array(a*l);for(let _=0;_<l;_++)for(let v=0;v<a;v++){const M=-76+v*1.25,P=-96+_*1.25,T=oi(M,P),C=_*a+v;u[C]=T,d[C]=vn(M,P,T)}const f=new Vt;for(let _=0;_<l;_++)for(let v=0;v<a;v++){const M=_*a+v,P=-76+v*1.25,T=-96+_*1.25,C=u[M];let O=d[M];const q=d[_*a+Math.max(0,v-1)],b=d[_*a+Math.min(a-1,v+1)],S=d[Math.max(0,_-1)*a+v],V=d[Math.min(l-1,_+1)*a+v],A=Math.max(Math.abs(b-q),Math.abs(V-S))/(2*1.25),R=oo(P*.09+3,T*.09-2),I=oo(P*.35,T*.35);if(O<Ai-.25)f.copy(xw).lerp(Jf,.3*I);else if(A>.75||C0(P,T)>.55&&C<1.6&&C>-1)f.copy(I>.5?mw:gw);else if(O<-.02&&C<6)f.copy(O<Ai+.25?Jf:xh).lerp(xh,I*.4);else{f.copy(gh[Math.floor(R*4.99)]).lerp(gh[Math.floor(I*4.99)],.35),C<7.5&&f.lerp(xh,(7.5-C)/3*.5);let y=1/0;for(const U of s)y=Math.min(y,yw(P,T,U.pts)-U.w/2);for(const U of t)y=Math.min(y,Math.hypot(P-U.x,T-U.z)-U.r);y<.4&&f.copy(pw).lerp(gh[2],y>-.4?.35:I*.12)}O>-.02&&O<.02&&(O+=(I-.5)*.06),c[M*3]=P,c[M*3+1]=O,c[M*3+2]=T,h[M*3]=f.r,h[M*3+1]=f.g,h[M*3+2]=f.b}const m=[];for(let _=0;_<l-1;_++)for(let v=0;v<a-1;v++){const M=_*a+v,P=M+1,T=M+a,C=T+1;Math.max(u[M],u[P],u[T],u[C])<-14||((v+_)%2?m.push(M,T,P,P,T,C):m.push(M,T,C,M,C,P))}const x=new Qe;x.setAttribute("position",new un(c,3)),x.setAttribute("color",new un(h,3)),x.setIndex(m);const p=x.toNonIndexed();p.computeVertexNormals();const g=new ye(p,new Bn({vertexColors:!0,flatShading:!0,roughness:.95}));return g.receiveShadow=!0,{mesh:g}}function Mw(s=280,t=256,e=-60,n=20){const i=new Uint8Array(t*t);for(let o=0;o<t;o++)for(let a=0;a<t;a++){const l=(a/(t-1)-.5)*s,c=(o/(t-1)-.5)*s,h=Math.max(e,Math.min(n,oi(l,c)));i[o*t+a]=Math.round((h-e)/(n-e)*255)}const r=new a0(i,t,t,ac,ji);return r.magFilter=ai,r.minFilter=ai,r.needsUpdate=!0,{tex:r,size:s,min:e,max:n}}const Qf="#353a52",Sl="#272b3e",tp="#ff9a3c",ww="#3f5f95",Sw="#324c78",jo="#e3a77c",vh="#3a2418",bw="#f4f1ea",Ew="#c9c3b8",ep="#1d1a2a";function Tw(){const s=new qt,t=new qt;s.add(t);const e=new qt;e.position.y=.92,t.add(e);const n=new qt;e.add(n),n.add(Ne([X(K.box,Qf,0,.36,0,.66,.74,.4),X(K.box,Sl,0,.02,0,.68,.12,.42),X(K.box,Sl,0,.2,.205,.42,.2,.04),X(K.box,Sl,0,.72,-.12,.5,.22,.24),X(K.box,"#e8e4dc",-.08,.6,.205,.025,.2,.02),X(K.box,"#e8e4dc",.08,.6,.205,.025,.2,.02),X(K.box,tp,0,.5,.204,.6,.04,.02),X(K.box,"#1d2030",.17,.5,.215,.012,.3,.01),X(K.box,"#f6f3ea",.17,.33,.22,.12,.15,.02),X(K.box,"#2fb3a6",.17,.36,.232,.08,.04,.01)]));const i=new qt;i.position.y=.78,n.add(i),i.add(Ne([X(K.box,jo,0,.06,0,.16,.12,.16),X(K.box,jo,0,.34,.01,.5,.5,.46),X(K.box,vh,0,.6,-.02,.54,.14,.52),X(K.box,vh,0,.42,-.23,.54,.36,.1),X(K.box,vh,.07,.56,.22,.4,.08,.1,0,0,-.12),X(K.box,ep,-.11,.36,.24,.07,.09,.02),X(K.box,ep,.11,.36,.24,.07,.09,.02),X(K.box,"#c98a64",0,.27,.25,.08,.06,.04),X(K.box,"#9b4a3c",0,.18,.24,.14,.025,.02),X(K.box,jo,-.27,.34,0,.05,.12,.09),X(K.box,jo,.27,.34,0,.05,.12,.09)]));const r=T=>{const C=new qt;return C.position.set(T*.41,.64,0),n.add(C),C.add(Ne([X(K.box,Qf,0,-.26,0,.19,.56,.2),X(K.box,Sl,0,-.53,0,.2,.08,.21),X(K.box,jo,0,-.64,.01,.15,.15,.15)])),C},o=r(-1),a=r(1),l=T=>{const C=new qt;return C.position.set(T*.17,0,0),e.add(C),C.add(Ne([X(K.box,ww,0,-.38,0,.25,.76,.26),X(K.box,Sw,0,-.73,0,.27,.06,.28),X(K.box,bw,0,-.84,.06,.26,.15,.4),X(K.box,Ew,0,-.9,.06,.27,.04,.41),X(K.box,tp,T*.135,-.84,.02,.01,.06,.2)])),C},c=l(-1),h=l(1);s.traverse(T=>{T.isMesh&&(T.castShadow=!0,T.receiveShadow=!1)});let d=0,u=0,f=0,m=0,x=0,p=0,g=null,_=0,v=null;const M={sit:T=>({y:-.46,hipsX:-.08,legL:-1.42,legR:-1.36,armLX:-.75,armRX:-.7,armLZ:-.12,armRZ:.12,headX:.05+Math.sin(T*.6)*.04,torsoY:0}),dock:T=>({y:-.86,hipsX:.06,legL:-.45+Math.sin(T*1.7)*.18,legR:-.4-Math.sin(T*1.7)*.18,armLX:-1.05,armRX:-1.15,armLZ:.32,armRZ:.05,headX:.12,torsoY:0}),crouch:T=>({y:-.38,hipsX:.42,legL:-1.25,legR:.35,armLX:-.2,armRX:-1.25+Math.sin(T*6)*.25,armLZ:-.15,armRZ:.25,headX:.2,torsoY:-.15}),cheer:T=>({y:Math.abs(Math.sin(T*8))*.22,hipsX:-.1,legL:-Math.abs(Math.sin(T*8))*.3,legR:-Math.abs(Math.sin(T*8))*.3,armLX:-.3,armRX:-.3,armLZ:-2.6+Math.sin(T*16)*.2,armRZ:2.6-Math.sin(T*16)*.2,headX:-.25,torsoY:Math.sin(T*8)*.15}),cast:T=>({y:-.86,hipsX:-.05,legL:-.45,legR:-.4,armLX:-1,armRX:-2.6,armLZ:.3,armRZ:.05,headX:0,torsoY:.2})},P={group:s,onStep:null,wave(){m=1.6},setPose(T){g=T&&M[T]?T:null,g&&(v=g)},get pose(){return g},get poseK(){return _},hand:a,update(T,C){f+=T;const O=C.speed;p+=(Math.min(1,O/7.5)-p)*Math.min(1,T*8),x+=((C.air?1:0)-x)*Math.min(1,T*12);const q=p>.62;d+=T*(O>.15?4.2+O*.95:0);const b=Math.sin(d),S=Math.min(1,O/1.2);S>.3&&!C.air&&Math.sign(b)!==Math.sign(u)&&P.onStep&&P.onStep(b>0?1:-1,q),u=b;const V=(.55+p*.5)*S*(1-x);c.rotation.x=b*V-x*.7,h.rotation.x=-b*V+x*.3;const A=(.45+p*.75)*S*(1-x);o.rotation.x=-b*A,a.rotation.x=b*A,o.rotation.z=-.08-p*.12-x*1.1,a.rotation.z=.08+p*.12+x*1.1;const R=Math.abs(Math.cos(d))*(.04+p*.1)*S*(1-x),I=(1-S)*Math.sin(f*2.2)*.012;if(t.position.y=R+I,e.rotation.x=p*.32*S-x*.1,n.rotation.y=b*.12*S,e.rotation.y=-b*.06*S,i.rotation.x=-e.rotation.x*.6,i.rotation.y=(1-S)*Math.sin(f*.5)*.35,n.scale.set(1,1+I*2,1),_+=((g?1:0)-_)*Math.min(1,T*(g?7:9)),_>.002&&v){const y=M[v](f),U=_,F=(Z,st)=>Z+(st-Z)*U;t.position.y=F(t.position.y,y.y),e.rotation.x=F(e.rotation.x,y.hipsX),e.rotation.y=F(e.rotation.y,0),c.rotation.x=F(c.rotation.x,y.legL),h.rotation.x=F(h.rotation.x,y.legR),o.rotation.x=F(o.rotation.x,y.armLX),a.rotation.x=F(a.rotation.x,y.armRX),o.rotation.z=F(o.rotation.z,y.armLZ),a.rotation.z=F(a.rotation.z,y.armRZ),i.rotation.x=F(i.rotation.x,y.headX),n.rotation.y=F(n.rotation.y,y.torsoY)}m>0&&(m-=T,a.rotation.x=-.2,a.rotation.z=2.5+Math.sin(f*14)*.35)}};return P}class Li{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new L);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new L);const n=this.elements,i=t.x,r=t.y,o=t.z;return e.x=n[0]*i+n[1]*r+n[2]*o,e.y=n[3]*i+n[4]*r+n[5]*o,e.z=n[6]*i+n[7]*r+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new Li);const n=this.elements,i=t.elements,r=e.elements,o=n[0],a=n[1],l=n[2],c=n[3],h=n[4],d=n[5],u=n[6],f=n[7],m=n[8],x=i[0],p=i[1],g=i[2],_=i[3],v=i[4],M=i[5],P=i[6],T=i[7],C=i[8];return r[0]=o*x+a*_+l*P,r[1]=o*p+a*v+l*T,r[2]=o*g+a*M+l*C,r[3]=c*x+h*_+d*P,r[4]=c*p+h*v+d*T,r[5]=c*g+h*M+d*C,r[6]=u*x+f*_+m*P,r[7]=u*p+f*v+m*T,r[8]=u*g+f*M+m*C,e}scale(t,e){e===void 0&&(e=new Li);const n=this.elements,i=e.elements;for(let r=0;r!==3;r++)i[3*r+0]=t.x*n[3*r+0],i[3*r+1]=t.y*n[3*r+1],i[3*r+2]=t.z*n[3*r+2];return e}solve(t,e){e===void 0&&(e=new L);const n=3,i=4,r=[];let o,a;for(o=0;o<n*i;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+i*a]=this.elements[o+3*a];r[3+4*0]=t.x,r[3+4*1]=t.y,r[3+4*2]=t.z;let l=3;const c=l;let h;const d=4;let u;do{if(o=c-l,r[o+i*o]===0){for(a=o+1;a<c;a++)if(r[o+i*a]!==0){h=d;do u=d-h,r[u+i*o]+=r[u+i*a];while(--h);break}}if(r[o+i*o]!==0)for(a=o+1;a<c;a++){const f=r[o+i*a]/r[o+i*o];h=d;do u=d-h,r[u+i*a]=u<=o?0:r[u+i*a]-r[u+i*o]*f;while(--h)}}while(--l);if(e.z=r[2*i+3]/r[2*i+2],e.y=(r[1*i+3]-r[1*i+2]*e.z)/r[1*i+1],e.x=(r[0*i+3]-r[0*i+2]*e.z-r[0*i+1]*e.y)/r[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new Li);const e=3,n=6,i=Aw;let r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)i[r+n*o]=this.elements[r+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const l=a;let c;const h=n;let d;do{if(r=l-a,i[r+n*r]===0){for(o=r+1;o<l;o++)if(i[r+n*o]!==0){c=h;do d=h-c,i[d+n*r]+=i[d+n*o];while(--c);break}}if(i[r+n*r]!==0)for(o=r+1;o<l;o++){const u=i[r+n*o]/i[r+n*r];c=h;do d=h-c,i[d+n*o]=d<=r?0:i[d+n*o]-i[d+n*r]*u;while(--c)}}while(--a);r=2;do{o=r-1;do{const u=i[r+n*o]/i[r+n*r];c=n;do d=n-c,i[d+n*o]=i[d+n*o]-i[d+n*r]*u;while(--c)}while(o--)}while(--r);r=2;do{const u=1/i[r+n*r];c=n;do d=n-c,i[d+n*r]=i[d+n*r]*u;while(--c)}while(r--);r=2;do{o=2;do{if(d=i[e+o+n*r],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(r,o,d)}while(o--)}while(r--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,r=t.w,o=e+e,a=n+n,l=i+i,c=e*o,h=e*a,d=e*l,u=n*a,f=n*l,m=i*l,x=r*o,p=r*a,g=r*l,_=this.elements;return _[3*0+0]=1-(u+m),_[3*0+1]=h-g,_[3*0+2]=d+p,_[3*1+0]=h+g,_[3*1+1]=1-(c+m),_[3*1+2]=f-x,_[3*2+0]=d-p,_[3*2+1]=f+x,_[3*2+2]=1-(c+u),this}transpose(t){t===void 0&&(t=new Li);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const Aw=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class L{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new L);const n=t.x,i=t.y,r=t.z,o=this.x,a=this.y,l=this.z;return e.x=a*r-l*i,e.y=l*n-o*r,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new L(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new L(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Li([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const r=1/i;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new L);const e=this.x,n=this.y,i=this.z;let r=Math.sqrt(e*e+n*n+i*i);return r>0?(r=1/r,t.x=e*r,t.y=n*r,t.z=i*r):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z;return Math.sqrt((r-e)*(r-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z;return(r-e)*(r-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new L);const n=this.x,i=this.y,r=this.z;return e.x=t*n,e.y=t*i,e.z=t*r,e}vmul(t,e){return e===void 0&&(e=new L),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new L),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new L),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=Cw,r=1/n;i.set(this.x*r,this.y*r,this.z*r);const o=Rw;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,r=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=r+(t.y-r)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(np),np.almostEquals(t,e)}clone(){return new L(this.x,this.y,this.z)}}L.ZERO=new L(0,0,0);L.UNIT_X=new L(1,0,0);L.UNIT_Y=new L(0,1,0);L.UNIT_Z=new L(0,0,1);const Cw=new L,Rw=new L,np=new L;class ci{constructor(t){t===void 0&&(t={}),this.lowerBound=new L,this.upperBound=new L,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const r=this.lowerBound,o=this.upperBound,a=n;r.copy(t[0]),a&&a.vmult(r,r),o.copy(r);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,ip),c=ip),c.x>o.x&&(o.x=c.x),c.x<r.x&&(r.x=c.x),c.y>o.y&&(o.y=c.y),c.y<r.y&&(r.y=c.y),c.z>o.z&&(o.z=c.z),c.z<r.z&&(r.z=c.z)}return e&&(e.vadd(r,r),e.vadd(o,o)),i&&(r.x-=i,r.y-=i,r.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new ci().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,r=t.upperBound,o=i.x<=n.x&&n.x<=r.x||e.x<=r.x&&r.x<=n.x,a=i.y<=n.y&&n.y<=r.y||e.y<=r.y&&r.y<=n.y,l=i.z<=n.z&&n.z<=r.z||e.z<=r.z&&r.z<=n.z;return o&&a&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,r=t.upperBound;return e.x<=i.x&&n.x>=r.x&&e.y<=i.y&&n.y>=r.y&&e.z<=i.z&&n.z>=r.z}getCorners(t,e,n,i,r,o,a,l){const c=this.lowerBound,h=this.upperBound;t.copy(c),e.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),r.set(h.x,c.y,h.z),o.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(t,e){const n=sp,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,r,o,a,l,c,h,d);for(let u=0;u!==8;u++){const f=n[u];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=sp,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,r,o,a,l,c,h,d);for(let u=0;u!==8;u++){const f=n[u];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,r=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*r,h=(this.upperBound.y-n.y)*r,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(d,u)),m=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(d,u));return!(m<0||f>m)}}const ip=new L,sp=[new L,new L,new L,new L,new L,new L,new L,new L];class rp{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const r=i;i=n,n=r}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:r}=e;if(r>i){const o=r;r=i,i=o}this.matrix[(i*(i+1)>>1)+r-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class R0{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,r=n.length;i<r;i++)n[i].call(this,t)}return this}}class Mn{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new L),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=Pw,i=Lw;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new Mn);const n=this.x,i=this.y,r=this.z,o=this.w,a=t.x,l=t.y,c=t.z,h=t.w;return e.x=n*h+o*a+i*c-r*l,e.y=i*h+o*l+r*a-n*c,e.z=r*h+o*c+n*l-i*a,e.w=o*h-n*a-i*l-r*c,e}inverse(t){t===void 0&&(t=new Mn);const e=this.x,n=this.y,i=this.z,r=this.w;this.conjugate(t);const o=1/(e*e+n*n+i*i+r*r);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new Mn),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new L);const n=t.x,i=t.y,r=t.z,o=this.x,a=this.y,l=this.z,c=this.w,h=c*n+a*r-l*i,d=c*i+l*n-o*r,u=c*r+o*i-a*n,f=-o*n-a*i-l*r;return e.x=h*c+f*-o+d*-l-u*-a,e.y=d*c+f*-a+u*-o-h*-l,e.z=u*c+f*-l+h*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,r;const o=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":const h=o*a+l*c;if(h>.499&&(n=2*Math.atan2(o,c),i=Math.PI/2,r=0),h<-.499&&(n=-2*Math.atan2(o,c),i=-Math.PI/2,r=0),n===void 0){const d=o*o,u=a*a,f=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*u-2*f),i=Math.asin(2*h),r=Math.atan2(2*o*c-2*a*l,1-2*d-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=r}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const r=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*a+r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a-l*c*h):i==="YXZ"?(this.x=l*o*a+r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a+l*c*h):i==="ZXY"?(this.x=l*o*a-r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a-l*c*h):i==="ZYX"?(this.x=l*o*a-r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a+l*c*h):i==="YZX"?(this.x=l*o*a+r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a-l*c*h):i==="XZY"&&(this.x=l*o*a-r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a+l*c*h),this}clone(){return new Mn(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new Mn);const i=this.x,r=this.y,o=this.z,a=this.w;let l=t.x,c=t.y,h=t.z,d=t.w,u,f,m,x,p;return f=i*l+r*c+o*h+a*d,f<0&&(f=-f,l=-l,c=-c,h=-h,d=-d),1-f>1e-6?(u=Math.acos(f),m=Math.sin(u),x=Math.sin((1-e)*u)/m,p=Math.sin(e*u)/m):(x=1-e,p=e),n.x=x*i+p*l,n.y=x*r+p*c,n.z=x*o+p*h,n.w=x*a+p*d,n}integrate(t,e,n,i){i===void 0&&(i=new Mn);const r=t.x*n.x,o=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,h=this.z,d=this.w,u=e*.5;return i.x+=u*(r*d+o*h-a*c),i.y+=u*(o*d+a*l-r*h),i.z+=u*(a*d+r*c-o*l),i.w+=u*(-r*l-o*c-a*h),i}}const Pw=new L,Lw=new L,zw={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class te{constructor(t){t===void 0&&(t={}),this.id=te.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}te.idCounter=0;te.types=zw;class He{constructor(t){t===void 0&&(t={}),this.position=new L,this.quaternion=new Mn,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return He.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return He.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new L),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new L),n.vsub(t,i),e.conjugate(op),op.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new L),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new L),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new L),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const op=new Mn;class ao extends te{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:r,boundingSphereRadius:o}=t;super({type:te.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new L;for(let r=0;r!==t.length;r++){const o=t[r],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;e[o[l]].vsub(e[o[c]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new L;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];ao.computeNormal(i,r,o,e)}static computeNormal(t,e,n,i){const r=new L,o=new L;e.vsub(t,o),n.vsub(e,r),r.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,r,o,a,l,c){const h=new L;let d=-1,u=-Number.MAX_VALUE;for(let m=0;m<n.faces.length;m++){h.copy(n.faceNormals[m]),r.vmult(h,h);const x=h.dot(o);x>u&&(u=x,d=m)}const f=[];for(let m=0;m<n.faces[d].length;m++){const x=n.vertices[n.faces[d][m]],p=new L;p.copy(x),r.vmult(p,p),i.vadd(p,p),f.push(p)}d>=0&&this.clipFaceAgainstHull(o,t,e,f,a,l,c)}findSeparatingAxis(t,e,n,i,r,o,a,l){const c=new L,h=new L,d=new L,u=new L,f=new L,m=new L;let x=Number.MAX_VALUE;const p=this;if(p.uniqueAxes)for(let g=0;g!==p.uniqueAxes.length;g++){n.vmult(p.uniqueAxes[g],c);const _=p.testSepAxis(c,t,e,n,i,r);if(_===!1)return!1;_<x&&(x=_,o.copy(c))}else{const g=a?a.length:p.faces.length;for(let _=0;_<g;_++){const v=a?a[_]:_;c.copy(p.faceNormals[v]),n.vmult(c,c);const M=p.testSepAxis(c,t,e,n,i,r);if(M===!1)return!1;M<x&&(x=M,o.copy(c))}}if(t.uniqueAxes)for(let g=0;g!==t.uniqueAxes.length;g++){r.vmult(t.uniqueAxes[g],h);const _=p.testSepAxis(h,t,e,n,i,r);if(_===!1)return!1;_<x&&(x=_,o.copy(h))}else{const g=l?l.length:t.faces.length;for(let _=0;_<g;_++){const v=l?l[_]:_;h.copy(t.faceNormals[v]),r.vmult(h,h);const M=p.testSepAxis(h,t,e,n,i,r);if(M===!1)return!1;M<x&&(x=M,o.copy(h))}}for(let g=0;g!==p.uniqueEdges.length;g++){n.vmult(p.uniqueEdges[g],u);for(let _=0;_!==t.uniqueEdges.length;_++)if(r.vmult(t.uniqueEdges[_],f),u.cross(f,m),!m.almostZero()){m.normalize();const v=p.testSepAxis(m,t,e,n,i,r);if(v===!1)return!1;v<x&&(x=v,o.copy(m))}}return i.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,r,o){const a=this;ao.project(a,t,n,i,yh),ao.project(e,t,r,o,_h);const l=yh[0],c=yh[1],h=_h[0],d=_h[1];if(l<d||h<c)return!1;const u=l-d,f=h-c;return u<f?u:f}calculateLocalInertia(t,e){const n=new L,i=new L;this.computeLocalAABB(i,n);const r=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*r*2*r+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,r,o,a){const l=new L,c=new L,h=new L,d=new L,u=new L,f=new L,m=new L,x=new L,p=this,g=[],_=i,v=g;let M=-1,P=Number.MAX_VALUE;for(let b=0;b<p.faces.length;b++){l.copy(p.faceNormals[b]),n.vmult(l,l);const S=l.dot(t);S<P&&(P=S,M=b)}if(M<0)return;const T=p.faces[M];T.connectedFaces=[];for(let b=0;b<p.faces.length;b++)for(let S=0;S<p.faces[b].length;S++)T.indexOf(p.faces[b][S])!==-1&&b!==M&&T.connectedFaces.indexOf(b)===-1&&T.connectedFaces.push(b);const C=T.length;for(let b=0;b<C;b++){const S=p.vertices[T[b]],V=p.vertices[T[(b+1)%C]];S.vsub(V,c),h.copy(c),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[M]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),f.copy(S),n.vmult(f,f),e.vadd(f,f);const A=T.connectedFaces[b];m.copy(this.faceNormals[A]);const R=this.getPlaneConstantOfFace(A);x.copy(m),n.vmult(x,x);const I=R-x.dot(e);for(this.clipFaceAgainstPlane(_,v,x,I);_.length;)_.shift();for(;v.length;)_.push(v.shift())}m.copy(this.faceNormals[M]);const O=this.getPlaneConstantOfFace(M);x.copy(m),n.vmult(x,x);const q=O-x.dot(e);for(let b=0;b<_.length;b++){let S=x.dot(_[b])+q;if(S<=r&&(console.log(`clamped: depth=${S} to minDist=${r}`),S=r),S<=o){const V=_[b];if(S<=1e-6){const A={point:V,normal:x,depth:S};a.push(A)}}}}clipFaceAgainstPlane(t,e,n,i){let r,o;const a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];r=n.dot(l)+i;for(let h=0;h<a;h++){if(c=t[h],o=n.dot(c)+i,r<0)if(o<0){const d=new L;d.copy(c),e.push(d)}else{const d=new L;l.lerp(c,r/(r-o),d),e.push(d)}else if(o<0){const d=new L;l.lerp(c,r/(r-o),d),e.push(d),e.push(c)}l=c,r=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new L);const n=this.vertices,i=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)e.vmult(n[r],i[r]),t.vadd(i[r],i[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const r=n[i];r.x<t.x?t.x=r.x:r.x>e.x&&(e.x=r.x),r.y<t.y?t.y=r.y:r.y>e.y&&(e.y=r.y),r.z<t.z?t.z=r.z:r.z>e.z&&(e.z=r.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new L);const n=this.faceNormals,i=this.worldFaceNormals;for(let r=0;r!==e;r++)t.vmult(n[r],i[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const r=this.vertices;let o,a,l,c,h,d,u=new L;for(let f=0;f<r.length;f++){u.copy(r[f]),e.vmult(u,u),t.vadd(u,u);const m=u;(o===void 0||m.x<o)&&(o=m.x),(c===void 0||m.x>c)&&(c=m.x),(a===void 0||m.y<a)&&(a=m.y),(h===void 0||m.y>h)&&(h=m.y),(l===void 0||m.z<l)&&(l=m.z),(d===void 0||m.z>d)&&(d=m.z)}n.set(o,a,l),i.set(c,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new L);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let r=0;r<n;r++){const o=i[r];e.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){const o=this.faceNormals[r];e.vmult(o,o)}}if(t)for(let r=0;r<n;r++){const o=i[r];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,r=new L;this.getAveragePointLocal(r);for(let o=0;o<this.faces.length;o++){let a=i[o];const l=e[n[o][0]],c=new L;t.vsub(l,c);const h=a.dot(c),d=new L;r.vsub(l,d);const u=a.dot(d);if(h<0&&u>0||h>0&&u<0)return!1}return-1}static project(t,e,n,i,r){const o=t.vertices.length,a=Iw;let l=0,c=0;const h=Dw,d=t.vertices;h.setZero(),He.vectorToLocalFrame(n,i,e,a),He.pointToLocalFrame(n,i,h,h);const u=h.dot(a);c=l=d[0].dot(a);for(let f=1;f<o;f++){const m=d[f].dot(a);m>l&&(l=m),m<c&&(c=m)}if(c-=u,l-=u,c>l){const f=c;c=l,l=f}r[0]=l,r[1]=c}}const yh=[],_h=[];new L;const Iw=new L,Dw=new L;class lo extends te{constructor(t){super({type:te.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=L,r=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new ao({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new L),lo.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let r=0;r!==n.length;r++)e.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,r=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<r.length;o++)zs.set(r[o][0],r[o][1],r[o][2]),e.vmult(zs,zs),t.vadd(zs,zs),n(zs.x,zs.y,zs.z)}calculateWorldAABB(t,e,n,i){const r=this.halfExtents;Bi[0].set(r.x,r.y,r.z),Bi[1].set(-r.x,r.y,r.z),Bi[2].set(-r.x,-r.y,r.z),Bi[3].set(-r.x,-r.y,-r.z),Bi[4].set(r.x,-r.y,-r.z),Bi[5].set(r.x,r.y,-r.z),Bi[6].set(-r.x,r.y,-r.z),Bi[7].set(r.x,-r.y,r.z);const o=Bi[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=Bi[a];e.vmult(l,l),t.vadd(l,l);const c=l.x,h=l.y,d=l.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),d>i.z&&(i.z=d),c<n.x&&(n.x=c),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const zs=new L,Bi=[new L,new L,new L,new L,new L,new L,new L,new L],Xu={DYNAMIC:1,STATIC:2,KINEMATIC:4},Yu={AWAKE:0,SLEEPY:1,SLEEPING:2};class Xt extends R0{constructor(t){t===void 0&&(t={}),super(),this.id=Xt.idCounter++,this.index=-1,this.world=null,this.vlambda=new L,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new L,this.previousPosition=new L,this.interpolatedPosition=new L,this.initPosition=new L,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new L,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new L,this.force=new L;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?Xt.STATIC:Xt.DYNAMIC,typeof t.type==typeof Xt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=Xt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new L,this.quaternion=new Mn,this.initQuaternion=new Mn,this.previousQuaternion=new Mn,this.interpolatedQuaternion=new Mn,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new L,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new L,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new L,this.invInertia=new L,this.invInertiaWorld=new Li,this.invMassSolve=0,this.invInertiaSolve=new L,this.invInertiaWorldSolve=new Li,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new L(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new L(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new ci,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new L,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=Xt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===Xt.SLEEPING&&this.dispatchEvent(Xt.wakeupEvent)}sleep(){this.sleepState=Xt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===Xt.AWAKE&&n<i?(this.sleepState=Xt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(Xt.sleepyEvent)):e===Xt.SLEEPY&&n>i?this.wakeUp():e===Xt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(Xt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===Xt.SLEEPING||this.type===Xt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new L),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new L),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new L),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new L),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new L,r=new Mn;return e&&i.copy(e),n&&r.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let r=0;r!==n;r++){const o=t[r];o.updateBoundingSphereRadius();const a=e[r].length(),l=o.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,r=Nw,o=Uw,a=this.quaternion,l=this.aabb,c=Fw;for(let h=0;h!==i;h++){const d=t[h];a.vmult(e[h],r),r.vadd(this.position,r),a.mult(n[h],o),d.calculateWorldAABB(r,o,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=Ow,i=Bw;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new L),this.type!==Xt.DYNAMIC)return;this.sleepState===Xt.SLEEPING&&this.wakeUp();const n=kw;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new L),this.type!==Xt.DYNAMIC)return;const n=Gw,i=Hw;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===Xt.DYNAMIC&&(this.sleepState===Xt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new L),this.type!==Xt.DYNAMIC)return;this.sleepState===Xt.SLEEPING&&this.wakeUp();const n=e,i=Vw;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const r=Ww;n.cross(t,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new L),this.type!==Xt.DYNAMIC)return;const n=qw,i=Xw;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=Yw;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),lo.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new L;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===Xt.DYNAMIC||this.type===Xt.KINEMATIC)||this.sleepState===Xt.SLEEPING)return;const i=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,f=h*t;i.x+=a.x*f*u.x,i.y+=a.y*f*u.y,i.z+=a.z*f*u.z;const m=d.elements,x=this.angularFactor,p=l.x*x.x,g=l.y*x.y,_=l.z*x.z;r.x+=t*(m[0]*p+m[1]*g+m[2]*_),r.y+=t*(m[3]*p+m[4]*g+m[5]*_),r.z+=t*(m[6]*p+m[7]*g+m[8]*_),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}Xt.idCounter=0;Xt.COLLIDE_EVENT_NAME="collide";Xt.DYNAMIC=Xu.DYNAMIC;Xt.STATIC=Xu.STATIC;Xt.KINEMATIC=Xu.KINEMATIC;Xt.AWAKE=Yu.AWAKE;Xt.SLEEPY=Yu.SLEEPY;Xt.SLEEPING=Yu.SLEEPING;Xt.wakeupEvent={type:"wakeup"};Xt.sleepyEvent={type:"sleepy"};Xt.sleepEvent={type:"sleep"};const Nw=new L,Uw=new Mn,Fw=new ci,Ow=new Li,Bw=new Li;new Li;const kw=new L,Gw=new L,Hw=new L,Vw=new L,Ww=new L,qw=new L,Xw=new L,Yw=new L;class P0{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&Xt.STATIC||t.sleepState===Xt.SLEEPING)&&(e.type&Xt.STATIC||e.sleepState===Xt.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const r=jw;e.position.vsub(t.position,r);const o=(t.boundingRadius+e.boundingRadius)**2;r.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=$w,i=Kw,r=Zw,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],r[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const l=i[a].id,c=r[a].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];t.push(i[c]),e.push(r[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new L;t.position.vsub(e.position,n);const i=t.shapes[0],r=e.shapes[0];return Math.pow(i.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const jw=new L;new L;new Mn;new L;const $w={keys:[]},Kw=[],Zw=[];new L;new L;new L;class Jw extends P0{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,r=i.length;let o,a;for(let l=0;l!==r;l++)for(let c=0;c!==l;c++)o=i[l],a=i[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const r=t.bodies[i];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(e)&&n.push(r)}return n}}class ec{constructor(){this.rayFromWorld=new L,this.rayToWorld=new L,this.hitNormalWorld=new L,this.hitPointWorld=new L,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,r,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=r,this.body=o,this.distance=a}}let L0,z0,I0,D0,N0,U0,F0;const ju={CLOSEST:1,ANY:2,ALL:4};L0=te.types.SPHERE;z0=te.types.PLANE;I0=te.types.BOX;D0=te.types.CYLINDER;N0=te.types.CONVEXPOLYHEDRON;U0=te.types.HEIGHTFIELD;F0=te.types.TRIMESH;class _n{get[L0](){return this._intersectSphere}get[z0](){return this._intersectPlane}get[I0](){return this._intersectBox}get[D0](){return this._intersectConvex}get[N0](){return this._intersectConvex}get[U0](){return this._intersectHeightfield}get[F0](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new L),e===void 0&&(e=new L),this.from=t.clone(),this.to=e.clone(),this.direction=new L,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=_n.ANY,this.result=new ec,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||_n.ANY,this.result=e.result||new ec,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(ap),Mh.length=0,t.broadphase.aabbQuery(t,ap,Mh),this.intersectBodies(Mh),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const i=Qw,r=tS;for(let o=0,a=t.shapes.length;o<a;o++){const l=t.shapes[o];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],r),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(l,r,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const r=this.from;if(pS(r,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,r){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,r)}_intersectPlane(t,e,n,i,r){const o=this.from,a=this.to,l=this.direction,c=new L(0,0,1);e.vmult(c,c);const h=new L;o.vsub(n,h);const d=h.dot(c);a.vsub(n,h);const u=h.dot(c);if(d*u>0||o.distanceTo(a)<d)return;const f=c.dot(l);if(Math.abs(f)<this.precision)return;const m=new L,x=new L,p=new L;o.vsub(n,m);const g=-c.dot(m)/f;l.scale(g,x),o.vadd(x,p),this.reportIntersection(c,p,r,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,r=this.from;e.x=Math.min(i.x,r.x),e.y=Math.min(i.y,r.y),e.z=Math.min(i.z,r.z),n.x=Math.max(i.x,r.x),n.y=Math.max(i.y,r.y),n.z=Math.max(i.z,r.z)}_intersectHeightfield(t,e,n,i,r){t.data,t.elementSize;const o=eS;o.from.copy(this.from),o.to.copy(this.to),He.pointToLocalFrame(n,e,o.from,o.from),He.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=nS;let l,c,h,d;l=c=0,h=d=t.data.length-1;const u=new ci;o.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let f=l;f<h;f++)for(let m=c;m<d;m++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,m,u),!!u.overlapsRay(o)){if(t.getConvexTrianglePillar(f,m,!1),He.pointToWorldFrame(n,e,t.pillarOffset,bl),this._intersectConvex(t.pillarConvex,e,bl,i,r,lp),this.result.shouldStop)return;t.getConvexTrianglePillar(f,m,!0),He.pointToWorldFrame(n,e,t.pillarOffset,bl),this._intersectConvex(t.pillarConvex,e,bl,i,r,lp)}}}_intersectSphere(t,e,n,i,r){const o=this.from,a=this.to,l=t.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,u=h**2-4*c*d,f=iS,m=sS;if(!(u<0))if(u===0)o.lerp(a,u,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,r,i,-1);else{const x=(-h-Math.sqrt(u))/(2*c),p=(-h+Math.sqrt(u))/(2*c);if(x>=0&&x<=1&&(o.lerp(a,x,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,r,i,-1)),this.result.shouldStop)return;p>=0&&p<=1&&(o.lerp(a,p,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,r,i,-1))}}_intersectConvex(t,e,n,i,r,o){const a=rS,l=cp,c=o&&o.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,f=this.direction,m=this.from,x=this.to,p=m.distanceTo(x),g=c?c.length:h.length,_=this.result;for(let v=0;!_.shouldStop&&v<g;v++){const M=c?c[v]:v,P=h[M],T=u[M],C=e,O=n;l.copy(d[P[0]]),C.vmult(l,l),l.vadd(O,l),l.vsub(m,l),C.vmult(T,a);const q=f.dot(a);if(Math.abs(q)<this.precision)continue;const b=a.dot(l)/q;if(!(b<0)){f.scale(b,$n),$n.vadd(m,$n),Ei.copy(d[P[0]]),C.vmult(Ei,Ei),O.vadd(Ei,Ei);for(let S=1;!_.shouldStop&&S<P.length-1;S++){ki.copy(d[P[S]]),Gi.copy(d[P[S+1]]),C.vmult(ki,ki),C.vmult(Gi,Gi),O.vadd(ki,ki),O.vadd(Gi,Gi);const V=$n.distanceTo(m);!(_n.pointInTriangle($n,Ei,ki,Gi)||_n.pointInTriangle($n,ki,Ei,Gi))||V>p||this.reportIntersection(a,$n,r,i,M)}}}}_intersectTrimesh(t,e,n,i,r,o){const a=oS,l=dS,c=fS,h=cp,d=aS,u=lS,f=cS,m=uS,x=hS,p=t.indices;t.vertices;const g=this.from,_=this.to,v=this.direction;c.position.copy(n),c.quaternion.copy(e),He.vectorToLocalFrame(n,e,v,d),He.pointToLocalFrame(n,e,g,u),He.pointToLocalFrame(n,e,_,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,f.vsub(u,d),d.normalize();const M=u.distanceSquared(f);t.tree.rayQuery(this,c,l);for(let P=0,T=l.length;!this.result.shouldStop&&P!==T;P++){const C=l[P];t.getNormal(C,a),t.getVertex(p[C*3],Ei),Ei.vsub(u,h);const O=d.dot(a),q=a.dot(h)/O;if(q<0)continue;d.scale(q,$n),$n.vadd(u,$n),t.getVertex(p[C*3+1],ki),t.getVertex(p[C*3+2],Gi);const b=$n.distanceSquared(u);!(_n.pointInTriangle($n,ki,Ei,Gi)||_n.pointInTriangle($n,Ei,ki,Gi))||b>M||(He.vectorToWorldFrame(e,a,x),He.pointToWorldFrame(n,e,$n,m),this.reportIntersection(x,m,r,i,C))}l.length=0}reportIntersection(t,e,n,i,r){const o=this.from,a=this.to,l=o.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case _n.ALL:this.hasHit=!0,c.set(o,a,t,e,n,i,l),c.hasHit=!0,this.callback(c);break;case _n.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l));break;case _n.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,ur),n.vsub(e,$o),t.vsub(e,wh);const r=ur.dot(ur),o=ur.dot($o),a=ur.dot(wh),l=$o.dot($o),c=$o.dot(wh);let h,d;return(h=l*a-o*c)>=0&&(d=r*c-o*a)>=0&&h+d<r*l-o*o}}_n.CLOSEST=ju.CLOSEST;_n.ANY=ju.ANY;_n.ALL=ju.ALL;const ap=new ci,Mh=[],$o=new L,wh=new L,Qw=new L,tS=new Mn,$n=new L,Ei=new L,ki=new L,Gi=new L;new L;new ec;const lp={faceList:[0]},bl=new L,eS=new _n,nS=[],iS=new L,sS=new L,rS=new L;new L;new L;const cp=new L,oS=new L,aS=new L,lS=new L,cS=new L,hS=new L,uS=new L;new ci;const dS=[],fS=new He,ur=new L,El=new L;function pS(s,t,e){e.vsub(s,ur);const n=ur.dot(t);return t.scale(n,El),El.vadd(s,El),e.distanceTo(El)}class no extends P0{static checkBounds(t,e,n){let i,r;n===0?(i=t.position.x,r=e.position.x):n===1?(i=t.position.y,r=e.position.y):n===2&&(i=t.position.z,r=e.position.z);const o=t.boundingRadius,a=e.boundingRadius,l=i+o;return r-a<l}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.x<=i.aabb.lowerBound.x);r--)t[r+1]=t[r];t[r+1]=i}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.y<=i.aabb.lowerBound.y);r--)t[r+1]=t[r];t[r+1]=i}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.z<=i.aabb.lowerBound.z);r--)t[r+1]=t[r];t[r+1]=i}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;const e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{const i=e.indexOf(n.body);i!==-1&&e.splice(i,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){const i=this.axisList,r=i.length,o=this.axisIndex;let a,l;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==r;a++){const c=i[a];for(l=a+1;l<r;l++){const h=i[l];if(this.needBroadphaseCollision(c,h)){if(!no.checkBounds(c,h,o))break;this.intersectionTest(c,h,e,n)}}}}sortList(){const t=this.axisList,e=this.axisIndex,n=t.length;for(let i=0;i!==n;i++){const r=t[i];r.aabbNeedsUpdate&&r.updateAABB()}e===0?no.insertionSortX(t):e===1?no.insertionSortY(t):e===2&&no.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,i=0,r=0,o=0;const a=this.axisList,l=a.length,c=1/l;for(let f=0;f!==l;f++){const m=a[f],x=m.position.x;t+=x,e+=x*x;const p=m.position.y;n+=p,i+=p*p;const g=m.position.z;r+=g,o+=g*g}const h=e-t*t*c,d=i-n*n*c,u=o-r*r*c;h>d?h>u?this.axisIndex=0:this.axisIndex=2:d>u?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);const i=this.axisIndex;let r="x";i===1&&(r="y"),i===2&&(r="z");const o=this.axisList;e.lowerBound[r],e.upperBound[r];for(let a=0;a<o.length;a++){const l=o[a];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(e)&&n.push(l)}return n}}class mS{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class hp{constructor(){this.spatial=new L,this.rotational=new L}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class fa{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=fa.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new hp,this.jacobianElementB=new hp,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,r=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*r*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*t-i*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.position,o=i.position;return t.spatial.dot(r)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.velocity,o=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.vlambda,o=i.vlambda,a=n.wlambda,l=i.wlambda;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.force,o=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,h=i.invMassSolve;return r.scale(c,up),a.scale(h,dp),n.invInertiaWorldSolve.vmult(o,fp),i.invInertiaWorldSolve.vmult(l,pp),t.multiplyVectors(up,fp)+e.multiplyVectors(dp,pp)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=r+o;return a.vmult(t.rotational,Tl),c+=Tl.dot(t.rotational),l.vmult(e.rotational,Tl),c+=Tl.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,r=this.bj,o=gS;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),r.vlambda.addScaledVector(r.invMassSolve*t,n.spatial,r.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(t,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}fa.idCounter=0;const up=new L,dp=new L,fp=new L,pp=new L,Tl=new L,gS=new L;class xS extends fa{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new L,this.rj=new L,this.ni=new L}computeB(t){const e=this.a,n=this.b,i=this.bi,r=this.bj,o=this.ri,a=this.rj,l=vS,c=yS,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=r.velocity,f=r.angularVelocity;r.force,r.torque;const m=_S,x=this.jacobianElementA,p=this.jacobianElementB,g=this.ni;o.cross(g,l),a.cross(g,c),g.negate(x.spatial),l.negate(x.rotational),p.spatial.copy(g),p.rotational.copy(c),m.copy(r.position),m.vadd(a,m),m.vsub(i.position,m),m.vsub(o,m);const _=g.dot(m),v=this.restitution+1,M=v*u.dot(g)-v*h.dot(g)+f.dot(c)-d.dot(l),P=this.computeGiMf();return-_*e-M*n-t*P}getImpactVelocityAlongNormal(){const t=MS,e=wS,n=SS,i=bS,r=ES;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,r),this.ni.dot(r)}}const vS=new L,yS=new L,_S=new L,MS=new L,wS=new L,SS=new L,bS=new L,ES=new L;new L;new L;new L;new L;new L;new L;new L;new L;new L;new L;class mp extends fa{constructor(t,e,n){super(t,e,-n,n),this.ri=new L,this.rj=new L,this.t=new L}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,r=TS,o=AS,a=this.t;n.cross(a,r),i.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),r.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}}const TS=new L,AS=new L;class gs{constructor(t,e,n){n=mS.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=gs.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}gs.idCounter=0;class Os{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=Os.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}Os.idCounter=0;new L;new L;new L;new L;new L;new L;new L;new L;new L;new L;new L;new L;new L;new L;new L;new L;new L;new L;new L;new _n;new L;new L;new L;new L(1,0,0),new L(0,1,0),new L(0,0,1);new L;new L;new L;new L;new L;new L;new L;new L;new L;new L;new L;class Al extends te{constructor(t){if(super({type:te.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new L);const n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,i){const r=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){const l=o[a];n[l]=t[l]-r,i[l]=t[l]+r}}}new L;new L;new L;new L;new L;new L;new L;new L;new L;class Cl extends ao{constructor(t,e,n,i){if(t===void 0&&(t=1),e===void 0&&(e=1),n===void 0&&(n=1),i===void 0&&(i=8),t<0)throw new Error("The cylinder radiusTop cannot be negative.");if(e<0)throw new Error("The cylinder radiusBottom cannot be negative.");const r=i,o=[],a=[],l=[],c=[],h=[],d=Math.cos,u=Math.sin;o.push(new L(-e*u(0),-n*.5,e*d(0))),c.push(0),o.push(new L(-t*u(0),n*.5,t*d(0))),h.push(1);for(let m=0;m<r;m++){const x=2*Math.PI/r*(m+1),p=2*Math.PI/r*(m+.5);m<r-1?(o.push(new L(-e*u(x),-n*.5,e*d(x))),c.push(2*m+2),o.push(new L(-t*u(x),n*.5,t*d(x))),h.push(2*m+3),l.push([2*m,2*m+1,2*m+3,2*m+2])):l.push([2*m,2*m+1,1,0]),(r%2===1||m<r/2)&&a.push(new L(-u(p),0,d(p)))}l.push(c),a.push(new L(0,1,0));const f=[];for(let m=0;m<h.length;m++)f.push(h[h.length-m-1]);l.push(f),super({vertices:o,faces:l,axes:a}),this.type=te.types.CYLINDER,this.radiusTop=t,this.radiusBottom=e,this.height=n,this.numSegments=i}}class CS extends te{constructor(){super({type:te.types.PLANE}),this.worldNormal=new L,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new L),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,i){as.set(0,0,1),e.vmult(as,as);const r=Number.MAX_VALUE;n.set(-r,-r,-r),i.set(r,r,r),as.x===1?i.x=t.x:as.x===-1&&(n.x=t.x),as.y===1?i.y=t.y:as.y===-1&&(n.y=t.y),as.z===1?i.z=t.z:as.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const as=new L;new L;new L;new L;new L;new L;new L;new L;new L;new L;new L;new ci;new L;new ci;new L;new L;new L;new L;new L;new L;new L;new ci;new L;new He;new ci;class RS{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class PS extends RS{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=e.bodies,c=l.length,h=t;let d,u,f,m,x,p;if(a!==0)for(let M=0;M!==c;M++)l[M].updateSolveMassProperties();const g=zS,_=IS,v=LS;g.length=a,_.length=a,v.length=a;for(let M=0;M!==a;M++){const P=o[M];v[M]=0,_[M]=P.computeB(h),g[M]=1/P.computeC()}if(a!==0){for(let T=0;T!==c;T++){const C=l[T],O=C.vlambda,q=C.wlambda;O.set(0,0,0),q.set(0,0,0)}for(n=0;n!==i;n++){m=0;for(let T=0;T!==a;T++){const C=o[T];d=_[T],u=g[T],p=v[T],x=C.computeGWlambda(),f=u*(d-x-C.eps*p),p+f<C.minForce?f=C.minForce-p:p+f>C.maxForce&&(f=C.maxForce-p),v[T]+=f,m+=f>0?f:-f,C.addToWlambda(f)}if(m*m<r)break}for(let T=0;T!==c;T++){const C=l[T],O=C.velocity,q=C.angularVelocity;C.vlambda.vmul(C.linearFactor,C.vlambda),O.vadd(C.vlambda,O),C.wlambda.vmul(C.angularFactor,C.wlambda),q.vadd(C.wlambda,q)}let M=o.length;const P=1/h;for(;M--;)o[M].multiplier=v[M]*P}return n}}const LS=[],zS=[],IS=[];class DS{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class NS extends DS{constructor(){super(...arguments),this.type=L}constructObject(){return new L}}const sn={sphereSphere:te.types.SPHERE,spherePlane:te.types.SPHERE|te.types.PLANE,boxBox:te.types.BOX|te.types.BOX,sphereBox:te.types.SPHERE|te.types.BOX,planeBox:te.types.PLANE|te.types.BOX,convexConvex:te.types.CONVEXPOLYHEDRON,sphereConvex:te.types.SPHERE|te.types.CONVEXPOLYHEDRON,planeConvex:te.types.PLANE|te.types.CONVEXPOLYHEDRON,boxConvex:te.types.BOX|te.types.CONVEXPOLYHEDRON,sphereHeightfield:te.types.SPHERE|te.types.HEIGHTFIELD,boxHeightfield:te.types.BOX|te.types.HEIGHTFIELD,convexHeightfield:te.types.CONVEXPOLYHEDRON|te.types.HEIGHTFIELD,sphereParticle:te.types.PARTICLE|te.types.SPHERE,planeParticle:te.types.PLANE|te.types.PARTICLE,boxParticle:te.types.BOX|te.types.PARTICLE,convexParticle:te.types.PARTICLE|te.types.CONVEXPOLYHEDRON,cylinderCylinder:te.types.CYLINDER,sphereCylinder:te.types.SPHERE|te.types.CYLINDER,planeCylinder:te.types.PLANE|te.types.CYLINDER,boxCylinder:te.types.BOX|te.types.CYLINDER,convexCylinder:te.types.CONVEXPOLYHEDRON|te.types.CYLINDER,heightfieldCylinder:te.types.HEIGHTFIELD|te.types.CYLINDER,particleCylinder:te.types.PARTICLE|te.types.CYLINDER,sphereTrimesh:te.types.SPHERE|te.types.TRIMESH,planeTrimesh:te.types.PLANE|te.types.TRIMESH};class US{get[sn.sphereSphere](){return this.sphereSphere}get[sn.spherePlane](){return this.spherePlane}get[sn.boxBox](){return this.boxBox}get[sn.sphereBox](){return this.sphereBox}get[sn.planeBox](){return this.planeBox}get[sn.convexConvex](){return this.convexConvex}get[sn.sphereConvex](){return this.sphereConvex}get[sn.planeConvex](){return this.planeConvex}get[sn.boxConvex](){return this.boxConvex}get[sn.sphereHeightfield](){return this.sphereHeightfield}get[sn.boxHeightfield](){return this.boxHeightfield}get[sn.convexHeightfield](){return this.convexHeightfield}get[sn.sphereParticle](){return this.sphereParticle}get[sn.planeParticle](){return this.planeParticle}get[sn.boxParticle](){return this.boxParticle}get[sn.convexParticle](){return this.convexParticle}get[sn.cylinderCylinder](){return this.convexConvex}get[sn.sphereCylinder](){return this.sphereConvex}get[sn.planeCylinder](){return this.planeConvex}get[sn.boxCylinder](){return this.boxConvex}get[sn.convexCylinder](){return this.convexConvex}get[sn.heightfieldCylinder](){return this.heightfieldCylinder}get[sn.particleCylinder](){return this.particleCylinder}get[sn.sphereTrimesh](){return this.sphereTrimesh}get[sn.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new NS,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new xS(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,h=i.material||e.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=r||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,r=t.si,o=t.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const h=r.material||n.material,d=o.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(c=h.friction*d.friction),c>0){const u=c*(a.frictionGravity||a.gravity).length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const m=this.frictionEquationPool,x=m.length?m.pop():new mp(n,i,u*f),p=m.length?m.pop():new mp(n,i,u*f);return x.bi=p.bi=n,x.bj=p.bj=i,x.minForce=p.minForce=-u*f,x.maxForce=p.maxForce=u*f,x.ri.copy(t.ri),x.rj.copy(t.rj),p.ri.copy(t.ri),p.rj.copy(t.rj),t.ni.tangents(x.t,p.t),x.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),p.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),x.enabled=p.enabled=t.enabled,e.push(x,p),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];or.setZero(),Zr.setZero(),Jr.setZero();const r=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==r?(or.vadd(e.ni,or),Zr.vadd(e.ri,Zr),Jr.vadd(e.rj,Jr)):(or.vsub(e.ni,or),Zr.vadd(e.rj,Zr),Jr.vadd(e.ri,Jr));const o=1/t;Zr.scale(o,n.ri),Jr.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),or.normalize(),or.tangents(n.t,i.t)}getContacts(t,e,n,i,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const l=BS,c=kS,h=FS,d=OS;for(let u=0,f=t.length;u!==f;u++){const m=t[u],x=e[u];let p=null;m.material&&x.material&&(p=n.getContactMaterial(m.material,x.material)||null);const g=m.type&Xt.KINEMATIC&&x.type&Xt.STATIC||m.type&Xt.STATIC&&x.type&Xt.KINEMATIC||m.type&Xt.KINEMATIC&&x.type&Xt.KINEMATIC;for(let _=0;_<m.shapes.length;_++){m.quaternion.mult(m.shapeOrientations[_],l),m.quaternion.vmult(m.shapeOffsets[_],h),h.vadd(m.position,h);const v=m.shapes[_];for(let M=0;M<x.shapes.length;M++){x.quaternion.mult(x.shapeOrientations[M],c),x.quaternion.vmult(x.shapeOffsets[M],d),d.vadd(x.position,d);const P=x.shapes[M];if(!(v.collisionFilterMask&P.collisionFilterGroup&&P.collisionFilterMask&v.collisionFilterGroup)||h.distanceTo(d)>v.boundingSphereRadius+P.boundingSphereRadius)continue;let T=null;v.material&&P.material&&(T=n.getContactMaterial(v.material,P.material)||null),this.currentContactMaterial=T||p||n.defaultContactMaterial;const C=v.type|P.type,O=this[C];if(O){let q=!1;v.type<P.type?q=O.call(this,v,P,h,d,l,c,m,x,v,P,g):q=O.call(this,P,v,d,h,c,l,x,m,v,P,g),q&&g&&(n.shapeOverlapKeeper.set(v.id,P.id),n.bodyOverlapKeeper.set(m.id,x.id))}}}}}sphereSphere(t,e,n,i,r,o,a,l,c,h,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const u=this.createContactEquation(a,l,t,e,c,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,i,r,o,a,l,c,h,d){const u=this.createContactEquation(a,l,t,e,c,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(i,Rl),u.ni.scale(u.ni.dot(Rl),gp),Rl.vsub(gp,u.rj),-Rl.dot(u.ni)<=t.radius){if(d)return!0;const f=u.ri,m=u.rj;f.vadd(n,f),f.vsub(a.position,f),m.vadd(i,m),m.vsub(l.position,m),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,i,r,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,r,o,a,l,t,e,d)}sphereBox(t,e,n,i,r,o,a,l,c,h,d){const u=this.v3pool,f=db;n.vsub(i,Pl),e.getSideNormals(f,o);const m=t.radius;let x=!1;const p=pb,g=mb,_=gb;let v=null,M=0,P=0,T=0,C=null;for(let y=0,U=f.length;y!==U&&x===!1;y++){const F=cb;F.copy(f[y]);const Z=F.length();F.normalize();const st=Pl.dot(F);if(st<Z+m&&st>0){const mt=hb,Mt=ub;mt.copy(f[(y+1)%3]),Mt.copy(f[(y+2)%3]);const Yt=mt.length(),ct=Mt.length();mt.normalize(),Mt.normalize();const dt=Pl.dot(mt),Pt=Pl.dot(Mt);if(dt<Yt&&dt>-Yt&&Pt<ct&&Pt>-ct){const Tt=Math.abs(st-Z-m);if((C===null||Tt<C)&&(C=Tt,P=dt,T=Pt,v=Z,p.copy(F),g.copy(mt),_.copy(Mt),M++,d))return!0}}}if(M){x=!0;const y=this.createContactEquation(a,l,t,e,c,h);p.scale(-m,y.ri),y.ni.copy(p),y.ni.negate(y.ni),p.scale(v,p),g.scale(P,g),p.vadd(g,p),_.scale(T,_),p.vadd(_,y.rj),y.ri.vadd(n,y.ri),y.ri.vsub(a.position,y.ri),y.rj.vadd(i,y.rj),y.rj.vsub(l.position,y.rj),this.result.push(y),this.createFrictionEquationsFromContact(y,this.frictionResult)}let O=u.get();const q=fb;for(let y=0;y!==2&&!x;y++)for(let U=0;U!==2&&!x;U++)for(let F=0;F!==2&&!x;F++)if(O.set(0,0,0),y?O.vadd(f[0],O):O.vsub(f[0],O),U?O.vadd(f[1],O):O.vsub(f[1],O),F?O.vadd(f[2],O):O.vsub(f[2],O),i.vadd(O,q),q.vsub(n,q),q.lengthSquared()<m*m){if(d)return!0;x=!0;const Z=this.createContactEquation(a,l,t,e,c,h);Z.ri.copy(q),Z.ri.normalize(),Z.ni.copy(Z.ri),Z.ri.scale(m,Z.ri),Z.rj.copy(O),Z.ri.vadd(n,Z.ri),Z.ri.vsub(a.position,Z.ri),Z.rj.vadd(i,Z.rj),Z.rj.vsub(l.position,Z.rj),this.result.push(Z),this.createFrictionEquationsFromContact(Z,this.frictionResult)}u.release(O),O=null;const b=u.get(),S=u.get(),V=u.get(),A=u.get(),R=u.get(),I=f.length;for(let y=0;y!==I&&!x;y++)for(let U=0;U!==I&&!x;U++)if(y%3!==U%3){f[U].cross(f[y],b),b.normalize(),f[y].vadd(f[U],S),V.copy(n),V.vsub(S,V),V.vsub(i,V);const F=V.dot(b);b.scale(F,A);let Z=0;for(;Z===y%3||Z===U%3;)Z++;R.copy(n),R.vsub(A,R),R.vsub(S,R),R.vsub(i,R);const st=Math.abs(F),mt=R.length();if(st<f[Z].length()&&mt<m){if(d)return!0;x=!0;const Mt=this.createContactEquation(a,l,t,e,c,h);S.vadd(A,Mt.rj),Mt.rj.copy(Mt.rj),R.negate(Mt.ni),Mt.ni.normalize(),Mt.ri.copy(Mt.rj),Mt.ri.vadd(i,Mt.ri),Mt.ri.vsub(n,Mt.ri),Mt.ri.normalize(),Mt.ri.scale(m,Mt.ri),Mt.ri.vadd(n,Mt.ri),Mt.ri.vsub(a.position,Mt.ri),Mt.rj.vadd(i,Mt.rj),Mt.rj.vsub(l.position,Mt.rj),this.result.push(Mt),this.createFrictionEquationsFromContact(Mt,this.frictionResult)}}u.release(b,S,V,A,R)}planeBox(t,e,n,i,r,o,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,r,o,a,l,t,e,d)}convexConvex(t,e,n,i,r,o,a,l,c,h,d,u,f){const m=Lb;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,r,i,o,m,u,f)){const x=[],p=zb;t.clipAgainstHull(n,r,e,i,o,m,-100,100,x);let g=0;for(let _=0;_!==x.length;_++){if(d)return!0;const v=this.createContactEquation(a,l,t,e,c,h),M=v.ri,P=v.rj;m.negate(v.ni),x[_].normal.negate(p),p.scale(x[_].depth,p),x[_].point.vadd(p,M),P.copy(x[_].point),M.vsub(n,M),P.vsub(i,P),M.vadd(n,M),M.vsub(a.position,M),P.vadd(i,P),P.vsub(l.position,P),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}}sphereConvex(t,e,n,i,r,o,a,l,c,h,d){const u=this.v3pool;n.vsub(i,xb);const f=e.faceNormals,m=e.faces,x=e.vertices,p=t.radius;let g=!1;for(let _=0;_!==x.length;_++){const v=x[_],M=Mb;o.vmult(v,M),i.vadd(M,M);const P=_b;if(M.vsub(n,P),P.lengthSquared()<p*p){if(d)return!0;g=!0;const T=this.createContactEquation(a,l,t,e,c,h);T.ri.copy(P),T.ri.normalize(),T.ni.copy(T.ri),T.ri.scale(p,T.ri),M.vsub(i,T.rj),T.ri.vadd(n,T.ri),T.ri.vsub(a.position,T.ri),T.rj.vadd(i,T.rj),T.rj.vsub(l.position,T.rj),this.result.push(T),this.createFrictionEquationsFromContact(T,this.frictionResult);return}}for(let _=0,v=m.length;_!==v&&g===!1;_++){const M=f[_],P=m[_],T=wb;o.vmult(M,T);const C=Sb;o.vmult(x[P[0]],C),C.vadd(i,C);const O=bb;T.scale(-p,O),n.vadd(O,O);const q=Eb;O.vsub(C,q);const b=q.dot(T),S=Tb;if(n.vsub(C,S),b<0&&S.dot(T)>0){const V=[];for(let A=0,R=P.length;A!==R;A++){const I=u.get();o.vmult(x[P[A]],I),i.vadd(I,I),V.push(I)}if(lb(V,T,n)){if(d)return!0;g=!0;const A=this.createContactEquation(a,l,t,e,c,h);T.scale(-p,A.ri),T.negate(A.ni);const R=u.get();T.scale(-b,R);const I=u.get();T.scale(-p,I),n.vsub(i,A.rj),A.rj.vadd(I,A.rj),A.rj.vadd(R,A.rj),A.rj.vadd(i,A.rj),A.rj.vsub(l.position,A.rj),A.ri.vadd(n,A.ri),A.ri.vsub(a.position,A.ri),u.release(R),u.release(I),this.result.push(A),this.createFrictionEquationsFromContact(A,this.frictionResult);for(let y=0,U=V.length;y!==U;y++)u.release(V[y]);return}else for(let A=0;A!==P.length;A++){const R=u.get(),I=u.get();o.vmult(x[P[(A+1)%P.length]],R),o.vmult(x[P[(A+2)%P.length]],I),i.vadd(R,R),i.vadd(I,I);const y=vb;I.vsub(R,y);const U=yb;y.unit(U);const F=u.get(),Z=u.get();n.vsub(R,Z);const st=Z.dot(U);U.scale(st,F),F.vadd(R,F);const mt=u.get();if(F.vsub(n,mt),st>0&&st*st<y.lengthSquared()&&mt.lengthSquared()<p*p){if(d)return!0;const Mt=this.createContactEquation(a,l,t,e,c,h);F.vsub(i,Mt.rj),F.vsub(n,Mt.ni),Mt.ni.normalize(),Mt.ni.scale(p,Mt.ri),Mt.rj.vadd(i,Mt.rj),Mt.rj.vsub(l.position,Mt.rj),Mt.ri.vadd(n,Mt.ri),Mt.ri.vsub(a.position,Mt.ri),this.result.push(Mt),this.createFrictionEquationsFromContact(Mt,this.frictionResult);for(let Yt=0,ct=V.length;Yt!==ct;Yt++)u.release(V[Yt]);u.release(R),u.release(I),u.release(F),u.release(mt),u.release(Z);return}u.release(R),u.release(I),u.release(F),u.release(mt),u.release(Z)}for(let A=0,R=V.length;A!==R;A++)u.release(V[A])}}}planeConvex(t,e,n,i,r,o,a,l,c,h,d){const u=Ab,f=Cb;f.set(0,0,1),r.vmult(f,f);let m=0;const x=Rb;for(let p=0;p!==e.vertices.length;p++)if(u.copy(e.vertices[p]),o.vmult(u,u),i.vadd(u,u),u.vsub(n,x),f.dot(x)<=0){if(d)return!0;const _=this.createContactEquation(a,l,t,e,c,h),v=Pb;f.scale(f.dot(x),v),u.vsub(v,v),v.vsub(n,_.ri),_.ni.copy(f),u.vsub(i,_.rj),_.ri.vadd(n,_.ri),_.ri.vsub(a.position,_.ri),_.rj.vadd(i,_.rj),_.rj.vsub(l.position,_.rj),this.result.push(_),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}boxConvex(t,e,n,i,r,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,r,o,a,l,t,e,d)}sphereHeightfield(t,e,n,i,r,o,a,l,c,h,d){const u=e.data,f=t.radius,m=e.elementSize,x=Wb,p=Vb;He.pointToLocalFrame(i,o,n,p);let g=Math.floor((p.x-f)/m)-1,_=Math.ceil((p.x+f)/m)+1,v=Math.floor((p.y-f)/m)-1,M=Math.ceil((p.y+f)/m)+1;if(_<0||M<0||g>u.length||v>u[0].length)return;g<0&&(g=0),_<0&&(_=0),v<0&&(v=0),M<0&&(M=0),g>=u.length&&(g=u.length-1),_>=u.length&&(_=u.length-1),M>=u[0].length&&(M=u[0].length-1),v>=u[0].length&&(v=u[0].length-1);const P=[];e.getRectMinMax(g,v,_,M,P);const T=P[0],C=P[1];if(p.z-f>C||p.z+f<T)return;const O=this.result;for(let q=g;q<_;q++)for(let b=v;b<M;b++){const S=O.length;let V=!1;if(e.getConvexTrianglePillar(q,b,!1),He.pointToWorldFrame(i,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(V=this.sphereConvex(t,e.pillarConvex,n,x,r,o,a,l,t,e,d)),d&&V||(e.getConvexTrianglePillar(q,b,!0),He.pointToWorldFrame(i,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(V=this.sphereConvex(t,e.pillarConvex,n,x,r,o,a,l,t,e,d)),d&&V))return!0;if(O.length-S>2)return}}boxHeightfield(t,e,n,i,r,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,r,o,a,l,t,e,d)}convexHeightfield(t,e,n,i,r,o,a,l,c,h,d){const u=e.data,f=e.elementSize,m=t.boundingSphereRadius,x=Gb,p=Hb,g=kb;He.pointToLocalFrame(i,o,n,g);let _=Math.floor((g.x-m)/f)-1,v=Math.ceil((g.x+m)/f)+1,M=Math.floor((g.y-m)/f)-1,P=Math.ceil((g.y+m)/f)+1;if(v<0||P<0||_>u.length||M>u[0].length)return;_<0&&(_=0),v<0&&(v=0),M<0&&(M=0),P<0&&(P=0),_>=u.length&&(_=u.length-1),v>=u.length&&(v=u.length-1),P>=u[0].length&&(P=u[0].length-1),M>=u[0].length&&(M=u[0].length-1);const T=[];e.getRectMinMax(_,M,v,P,T);const C=T[0],O=T[1];if(!(g.z-m>O||g.z+m<C))for(let q=_;q<v;q++)for(let b=M;b<P;b++){let S=!1;if(e.getConvexTrianglePillar(q,b,!1),He.pointToWorldFrame(i,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(S=this.convexConvex(t,e.pillarConvex,n,x,r,o,a,l,null,null,d,p,null)),d&&S||(e.getConvexTrianglePillar(q,b,!0),He.pointToWorldFrame(i,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(S=this.convexConvex(t,e.pillarConvex,n,x,r,o,a,l,null,null,d,p,null)),d&&S))return!0}}sphereParticle(t,e,n,i,r,o,a,l,c,h,d){const u=Ub;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;const m=this.createContactEquation(l,a,e,t,c,h);u.normalize(),m.rj.copy(u),m.rj.scale(t.radius,m.rj),m.ni.copy(u),m.ni.negate(m.ni),m.ri.set(0,0,0),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}}planeParticle(t,e,n,i,r,o,a,l,c,h,d){const u=Ib;u.set(0,0,1),a.quaternion.vmult(u,u);const f=Db;if(i.vsub(a.position,f),u.dot(f)<=0){if(d)return!0;const x=this.createContactEquation(l,a,e,t,c,h);x.ni.copy(u),x.ni.negate(x.ni),x.ri.set(0,0,0);const p=Nb;u.scale(u.dot(i),p),i.vsub(p,p),x.rj.copy(p),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}boxParticle(t,e,n,i,r,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,r,o,a,l,t,e,d)}convexParticle(t,e,n,i,r,o,a,l,c,h,d){let u=-1;const f=Ob,m=Bb;let x=null;const p=Fb;if(p.copy(i),p.vsub(n,p),r.conjugate(xp),xp.vmult(p,p),t.pointIsInside(p)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,r),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(r);for(let g=0,_=t.faces.length;g!==_;g++){const v=[t.worldVertices[t.faces[g][0]]],M=t.worldFaceNormals[g];i.vsub(v[0],vp);const P=-M.dot(vp);if(x===null||Math.abs(P)<Math.abs(x)){if(d)return!0;x=P,u=g,f.copy(M)}}if(u!==-1){const g=this.createContactEquation(l,a,e,t,c,h);f.scale(x,m),m.vadd(i,m),m.vsub(n,m),g.rj.copy(m),f.negate(g.ni),g.ri.set(0,0,0);const _=g.ri,v=g.rj;_.vadd(i,_),_.vsub(l.position,_),v.vadd(n,v),v.vsub(a.position,v),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,r,o,a,l,c,h,d){return this.convexHeightfield(e,t,i,n,o,r,l,a,c,h,d)}particleCylinder(t,e,n,i,r,o,a,l,c,h,d){return this.convexParticle(e,t,i,n,o,r,l,a,c,h,d)}sphereTrimesh(t,e,n,i,r,o,a,l,c,h,d){const u=jS,f=$S,m=KS,x=ZS,p=JS,g=QS,_=ib,v=YS,M=qS,P=sb;He.pointToLocalFrame(i,o,n,p);const T=t.radius;_.lowerBound.set(p.x-T,p.y-T,p.z-T),_.upperBound.set(p.x+T,p.y+T,p.z+T),e.getTrianglesInAABB(_,P);const C=XS,O=t.radius*t.radius;for(let A=0;A<P.length;A++)for(let R=0;R<3;R++)if(e.getVertex(e.indices[P[A]*3+R],C),C.vsub(p,M),M.lengthSquared()<=O){if(v.copy(C),He.pointToWorldFrame(i,o,v,C),C.vsub(n,M),d)return!0;let I=this.createContactEquation(a,l,t,e,c,h);I.ni.copy(M),I.ni.normalize(),I.ri.copy(I.ni),I.ri.scale(t.radius,I.ri),I.ri.vadd(n,I.ri),I.ri.vsub(a.position,I.ri),I.rj.copy(C),I.rj.vsub(l.position,I.rj),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}for(let A=0;A<P.length;A++)for(let R=0;R<3;R++){e.getVertex(e.indices[P[A]*3+R],u),e.getVertex(e.indices[P[A]*3+(R+1)%3],f),f.vsub(u,m),p.vsub(f,g);const I=g.dot(m);p.vsub(u,g);let y=g.dot(m);if(y>0&&I<0&&(p.vsub(u,g),x.copy(m),x.normalize(),y=g.dot(x),x.scale(y,g),g.vadd(u,g),g.distanceTo(p)<t.radius)){if(d)return!0;const F=this.createContactEquation(a,l,t,e,c,h);g.vsub(p,F.ni),F.ni.normalize(),F.ni.scale(t.radius,F.ri),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),He.pointToWorldFrame(i,o,g,g),g.vsub(l.position,F.rj),He.vectorToWorldFrame(o,F.ni,F.ni),He.vectorToWorldFrame(o,F.ri,F.ri),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}}const q=tb,b=eb,S=nb,V=WS;for(let A=0,R=P.length;A!==R;A++){e.getTriangleVertices(P[A],q,b,S),e.getNormal(P[A],V),p.vsub(q,g);let I=g.dot(V);if(V.scale(I,g),p.vsub(g,g),I=g.distanceTo(p),_n.pointInTriangle(g,q,b,S)&&I<t.radius){if(d)return!0;let y=this.createContactEquation(a,l,t,e,c,h);g.vsub(p,y.ni),y.ni.normalize(),y.ni.scale(t.radius,y.ri),y.ri.vadd(n,y.ri),y.ri.vsub(a.position,y.ri),He.pointToWorldFrame(i,o,g,g),g.vsub(l.position,y.rj),He.vectorToWorldFrame(o,y.ni,y.ni),He.vectorToWorldFrame(o,y.ri,y.ri),this.result.push(y),this.createFrictionEquationsFromContact(y,this.frictionResult)}}P.length=0}planeTrimesh(t,e,n,i,r,o,a,l,c,h,d){const u=new L,f=GS;f.set(0,0,1),r.vmult(f,f);for(let m=0;m<e.vertices.length/3;m++){e.getVertex(m,u);const x=new L;x.copy(u),He.pointToWorldFrame(i,o,x,u);const p=HS;if(u.vsub(n,p),f.dot(p)<=0){if(d)return!0;const _=this.createContactEquation(a,l,t,e,c,h);_.ni.copy(f);const v=VS;f.scale(p.dot(f),v),u.vsub(v,v),_.ri.copy(v),_.ri.vsub(a.position,_.ri),_.rj.copy(u),_.rj.vsub(l.position,_.rj),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}}}const or=new L,Zr=new L,Jr=new L,FS=new L,OS=new L,BS=new Mn,kS=new Mn,GS=new L,HS=new L,VS=new L,WS=new L,qS=new L;new L;const XS=new L,YS=new L,jS=new L,$S=new L,KS=new L,ZS=new L,JS=new L,QS=new L,tb=new L,eb=new L,nb=new L,ib=new ci,sb=[],Rl=new L,gp=new L,rb=new L,ob=new L,ab=new L;function lb(s,t,e){let n=null;const i=s.length;for(let r=0;r!==i;r++){const o=s[r],a=rb;s[(r+1)%i].vsub(o,a);const l=ob;a.cross(t,l);const c=ab;e.vsub(o,c);const h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const Pl=new L,cb=new L,hb=new L,ub=new L,db=[new L,new L,new L,new L,new L,new L],fb=new L,pb=new L,mb=new L,gb=new L,xb=new L,vb=new L,yb=new L,_b=new L,Mb=new L,wb=new L,Sb=new L,bb=new L,Eb=new L,Tb=new L;new L;new L;const Ab=new L,Cb=new L,Rb=new L,Pb=new L,Lb=new L,zb=new L,Ib=new L,Db=new L,Nb=new L,Ub=new L,xp=new Mn,Fb=new L;new L;const Ob=new L,vp=new L,Bb=new L,kb=new L,Gb=new L,Hb=[0],Vb=new L,Wb=new L;class yp{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let r=0;for(;n>i[r];)r++;if(n!==i[r]){for(let o=i.length-1;o>=r;o--)i[o+1]=i[o];i[r]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,r=n.length,o=i.length;let a=0;for(let l=0;l<r;l++){let c=!1;const h=n[l];for(;h>i[a];)a++;c=h===i[a],c||_p(t,h)}a=0;for(let l=0;l<o;l++){let c=!1;const h=i[l];for(;h>n[a];)a++;c=n[a]===h,c||_p(e,h)}}}function _p(s,t){s.push((t&4294901760)>>16,t&65535)}const Sh=(s,t)=>s<t?`${s}-${t}`:`${t}-${s}`;class qb{constructor(){this.data={keys:[]}}get(t,e){const n=Sh(t,e);return this.data[n]}set(t,e,n){const i=Sh(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=Sh(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class Xb extends R0{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new L,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new L,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new Jw,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new PS,this.constraints=[],this.narrowphase=new US(this),this.collisionMatrix=new rp,this.collisionMatrixPrevious=new rp,this.bodyOverlapKeeper=new yp,this.shapeOverlapKeeper=new yp,this.contactmaterials=[],this.contactMaterialTable=new qb,this.defaultMaterial=new Os("default"),this.defaultContactMaterial=new gs(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof ec?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=_n.ALL,n.from=t,n.to=e,n.callback=i,bh.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=_n.ANY,n.from=t,n.to=e,n.result=i,bh.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=_n.CLOSEST,n.from=t,n.to=e,n.result=i,bh.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof Xt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let r=0;r<i.length;r++){const o=i[r];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=Sn.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=Sn.now();let r=0;for(;this.accumulator>=t&&r<n&&(this.internalStep(t),this.accumulator-=t,r++,!(Sn.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=Zb,i=Jb,r=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,d=Xt.DYNAMIC;let u=-1/0;const f=this.constraints,m=Kb;l.length();const x=l.x,p=l.y,g=l.z;let _=0;for(c&&(u=Sn.now()),_=0;_!==r;_++){const A=o[_];if(A.type===d){const R=A.force,I=A.mass;R.x+=I*x,R.y+=I*p,R.z+=I*g}}for(let A=0,R=this.subsystems.length;A!==R;A++)this.subsystems[A].update();c&&(u=Sn.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=Sn.now()-u);let v=f.length;for(_=0;_!==v;_++){const A=f[_];if(!A.collideConnected)for(let R=n.length-1;R>=0;R-=1)(A.bodyA===n[R]&&A.bodyB===i[R]||A.bodyB===n[R]&&A.bodyA===i[R])&&(n.splice(R,1),i.splice(R,1))}this.collisionMatrixTick(),c&&(u=Sn.now());const M=$b,P=e.length;for(_=0;_!==P;_++)M.push(e[_]);e.length=0;const T=this.frictionEquations.length;for(_=0;_!==T;_++)m.push(this.frictionEquations[_]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,M,this.frictionEquations,m),c&&(h.narrowphase=Sn.now()-u),c&&(u=Sn.now()),_=0;_<this.frictionEquations.length;_++)a.addEquation(this.frictionEquations[_]);const C=e.length;for(let A=0;A!==C;A++){const R=e[A],I=R.bi,y=R.bj,U=R.si,F=R.sj;let Z;if(I.material&&y.material?Z=this.getContactMaterial(I.material,y.material)||this.defaultContactMaterial:Z=this.defaultContactMaterial,Z.friction,I.material&&y.material&&(I.material.friction>=0&&y.material.friction>=0&&I.material.friction*y.material.friction,I.material.restitution>=0&&y.material.restitution>=0&&(R.restitution=I.material.restitution*y.material.restitution)),a.addEquation(R),I.allowSleep&&I.type===Xt.DYNAMIC&&I.sleepState===Xt.SLEEPING&&y.sleepState===Xt.AWAKE&&y.type!==Xt.STATIC){const st=y.velocity.lengthSquared()+y.angularVelocity.lengthSquared(),mt=y.sleepSpeedLimit**2;st>=mt*2&&(I.wakeUpAfterNarrowphase=!0)}if(y.allowSleep&&y.type===Xt.DYNAMIC&&y.sleepState===Xt.SLEEPING&&I.sleepState===Xt.AWAKE&&I.type!==Xt.STATIC){const st=I.velocity.lengthSquared()+I.angularVelocity.lengthSquared(),mt=I.sleepSpeedLimit**2;st>=mt*2&&(y.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(I,y,!0),this.collisionMatrixPrevious.get(I,y)||(Ko.body=y,Ko.contact=R,I.dispatchEvent(Ko),Ko.body=I,y.dispatchEvent(Ko)),this.bodyOverlapKeeper.set(I.id,y.id),this.shapeOverlapKeeper.set(U.id,F.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=Sn.now()-u,u=Sn.now()),_=0;_!==r;_++){const A=o[_];A.wakeUpAfterNarrowphase&&(A.wakeUp(),A.wakeUpAfterNarrowphase=!1)}for(v=f.length,_=0;_!==v;_++){const A=f[_];A.update();for(let R=0,I=A.equations.length;R!==I;R++){const y=A.equations[R];a.addEquation(y)}}a.solve(t,this),c&&(h.solve=Sn.now()-u),a.removeAllEquations();const O=Math.pow;for(_=0;_!==r;_++){const A=o[_];if(A.type&d){const R=O(1-A.linearDamping,t),I=A.velocity;I.scale(R,I);const y=A.angularVelocity;if(y){const U=O(1-A.angularDamping,t);y.scale(U,y)}}}this.dispatchEvent(jb),c&&(u=Sn.now());const b=this.stepnumber%(this.quatNormalizeSkip+1)===0,S=this.quatNormalizeFast;for(_=0;_!==r;_++)o[_].integrate(t,b,S);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=Sn.now()-u),this.stepnumber+=1,this.dispatchEvent(Yb);let V=!0;if(this.allowSleep)for(V=!1,_=0;_!==r;_++){const A=o[_];A.sleepTick(this.time),A.sleepState!==Xt.SLEEPING&&(V=!0)}this.hasActiveBodies=V}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(ls,cs),t){for(let r=0,o=ls.length;r<o;r+=2)Zo.bodyA=this.getBodyById(ls[r]),Zo.bodyB=this.getBodyById(ls[r+1]),this.dispatchEvent(Zo);Zo.bodyA=Zo.bodyB=null}if(e){for(let r=0,o=cs.length;r<o;r+=2)Jo.bodyA=this.getBodyById(cs[r]),Jo.bodyB=this.getBodyById(cs[r+1]),this.dispatchEvent(Jo);Jo.bodyA=Jo.bodyB=null}ls.length=cs.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(ls,cs),n){for(let r=0,o=ls.length;r<o;r+=2){const a=this.getShapeById(ls[r]),l=this.getShapeById(ls[r+1]);hs.shapeA=a,hs.shapeB=l,a&&(hs.bodyA=a.body),l&&(hs.bodyB=l.body),this.dispatchEvent(hs)}hs.bodyA=hs.bodyB=hs.shapeA=hs.shapeB=null}if(i){for(let r=0,o=cs.length;r<o;r+=2){const a=this.getShapeById(cs[r]),l=this.getShapeById(cs[r+1]);us.shapeA=a,us.shapeB=l,a&&(us.bodyA=a.body),l&&(us.bodyB=l.body),this.dispatchEvent(us)}us.bodyA=us.bodyB=us.shapeA=us.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new ci;const bh=new _n,Sn=globalThis.performance||{};if(!Sn.now){let s=Date.now();Sn.timing&&Sn.timing.navigationStart&&(s=Sn.timing.navigationStart),Sn.now=()=>Date.now()-s}new L;const Yb={type:"postStep"},jb={type:"preStep"},Ko={type:Xt.COLLIDE_EVENT_NAME,body:null,contact:null},$b=[],Kb=[],Zb=[],Jb=[],ls=[],cs=[],Zo={type:"beginContact",bodyA:null,bodyB:null},Jo={type:"endContact",bodyA:null,bodyB:null},hs={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},us={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Eh=1,ds=2,Ll=4,Qo=8;function Qb({scene:s,land:t,audio:e,layout:n,makeLabelTexture:i}){const r=new Xb({gravity:new L(0,-22,0)});r.broadphase=new no(r),r.allowSleep=!0,r.solver.iterations=8,r.defaultContactMaterial.friction=.4,r.defaultContactMaterial.restitution=.15;const o=new Os("ground"),a=new Os("ball"),l=new Os("prop");r.addContactMaterial(new gs(o,a,{friction:.04,restitution:.1})),r.addContactMaterial(new gs(o,l,{friction:.45,restitution:.1})),r.addContactMaterial(new gs(a,l,{friction:.1,restitution:.3}));const c=new Xt({type:Xt.STATIC,material:o,collisionFilterGroup:Eh,collisionFilterMask:ds});c.addShape(new CS),c.quaternion.setFromEuler(-Math.PI/2,0,0),r.addBody(c);function h(Y,j,Q,_t=3){const St=new Xt({type:Xt.STATIC,collisionFilterGroup:Qo,collisionFilterMask:ds});return St.addShape(new Cl(Q,Q,_t,8)),St.position.set(Y,_t/2,j),r.addBody(St),St}function d(Y,j,Q,_t,St,Bt,pe=0){const wt=new Xt({type:Xt.STATIC,collisionFilterGroup:Qo,collisionFilterMask:ds});return wt.addShape(new lo(new L(_t,St,Bt))),wt.position.set(Y,j,Q),wt.quaternion.setFromEuler(0,pe,0),r.addBody(wt),wt}const u=()=>({type:Xt.KINEMATIC,collisionFilterGroup:Ll,collisionFilterMask:ds,allowSleep:!1}),f=new Xt(u());f.addShape(new Al(.42),new L(0,.45,0)),f.addShape(new Al(.4),new L(0,1.15,0)),r.addBody(f);const m=new Xt(u());m.addShape(new lo(new L(1.05,.55,2)),new L(0,.75,0)),r.addBody(m);const x={player:new B,car:new B},p=[],g=new $i;function _({mesh:Y,shape:j,offset:Q,mass:_t,x:St,y:Bt,z:pe,rotY:wt=0,kind:Dt,material:fe=l,linearDamping:he=.05,angularDamping:Kt=.1}){const le=new Xt({mass:_t,material:fe,collisionFilterGroup:ds,collisionFilterMask:Eh|ds|Ll|Qo,linearDamping:he,angularDamping:Kt});le.addShape(j,Q),le.position.set(St,Bt,pe),le.quaternion.setFromEuler(0,wt,0),le.allowSleep=!0,le.sleepSpeedLimit=.18,le.sleepTimeLimit=.6,r.addBody(le),Y.castShadow=!0,Y.receiveShadow=!0,s.add(Y);const ue={body:le,mesh:Y,kind:Dt,home:{p:le.position.clone(),q:le.quaternion.clone()},lastHit:0,sunk:!1};return le.addEventListener("collide",Ee=>{const $=Math.abs(Ee.contact.getImpactVelocityAlongNormal()),It=performance.now();$>1.2&&It-ue.lastHit>120&&(ue.lastHit=It,e&&e.hit($/8,Dt==="tire"?"rubber":Dt==="crate"?"wood":Dt==="pin"?"pin":Dt==="soccer"?"rubber":"plastic"));const ut=Ee.body===m;if((Ee.body===f||ut)&&It-(ue.lastKick||0)>250){ue.lastKick=It;const gt=ut?x.car:x.player,Ct=Math.hypot(gt.x,gt.z);if(Ct>.5)if(ut){const Ut=.5*le.mass*Math.min(20,Ct),we=Math.sign((le.position.x-m.position.x)*gt.z-(le.position.z-m.position.z)*gt.x)||(Math.random()<.5?-1:1),tn=gt.z/Ct*we,dn=-gt.x/Ct*we,Se=.35+Math.random()*.35;le.applyImpulse(new L((gt.x/Ct+tn*Se)*Ut,(.45+Math.random()*.25)*Ut,(gt.z/Ct+dn*Se)*Ut)),le.angularVelocity.set((Math.random()-.5)*12,(Math.random()-.5)*12,(Math.random()-.5)*12)}else{const Ut=Dt==="ball"||Dt==="soccer",we=(Ut?.9:.35)*le.mass*Math.min(8,Ct);le.applyImpulse(new L(gt.x/Ct*we,(Dt==="soccer"?.22:Ut?.05:.35)*we,gt.z/Ct*we))}}}),p.push(ue),v(ue),ue}function v(Y){Y.mesh.position.copy(Y.body.position),Y.mesh.quaternion.copy(g.set(Y.body.quaternion.x,Y.body.quaternion.y,Y.body.quaternion.z,Y.body.quaternion.w))}function M(Y){const j=Y.body;j.position.copy(Y.home.p),j.quaternion.copy(Y.home.q),j.velocity.setZero(),j.angularVelocity.setZero(),j.collisionFilterMask=Eh|ds|Ll|Qo,Y.sunk=!1,j.sleep(),v(Y)}const P=(()=>{const Y=Ne([X(K.box,"#2b2734",0,.03,0,.62,.06,.62),X(new pi(.28,.78,10),"#ff6a2b",0,.45,0),X(new Te(.15,.19,.12,10),"#fff6e8",0,.48,0)]).geometry;return Y.translate(0,-.42,0),Y})(),T=(()=>{const Y=new Pi(.4,.17,6,14);return Y.rotateX(Math.PI/2),Ne([X(Y,"#2a2630")]).geometry})(),C=Ne([X(new Pi(.4,.17,6,14),"#d8452f",0,0,0,1,1,1,Math.PI/2)]).geometry,O=Ne([X(new Pi(.4,.17,6,14),"#f2ece2",0,0,0,1,1,1,Math.PI/2)]).geometry,q=(()=>{const Q=[X(K.box,"#c8894e",0,0,0,.9,.9,.9)];return[-1,1].forEach(_t=>[-1,1].forEach(St=>{Q.push(X(K.box,"#8f5a32",_t*(.9/2-.1/2),0,St*(.9/2-.1/2),.1*1.05,.9*1.02,.1*1.05)),Q.push(X(K.box,"#8f5a32",0,_t*(.9/2-.1/2),St*(.9/2-.1/2),.9*1.02,.1*1.05,.1*1.05)),Q.push(X(K.box,"#8f5a32",_t*(.9/2-.1/2),St*(.9/2-.1/2),0,.1*1.05,.1*1.05,.9*1.02))})),Q.push(X(K.box,"#a8703f",0,0,.9/2+.005,.9*1.1,.1,.02,0,0,Math.PI/4)),Ne(Q).geometry})(),b=(()=>{const Y=[[0,0],[.12,0],[.15,.12],[.16,.26],[.12,.46],[.07,.58],[.085,.7],[.08,.8],[.04,.86],[0,.87]].map(([_t,St])=>new bt(_t,St)),j=new Bu(Y,10),Q=Ne([X(j,"#fbf7f0"),X(new Te(.075,.073,.035,10),"#d8452f",0,.62,0),X(new Te(.071,.075,.035,10),"#d8452f",0,.67,0)]).geometry;return Q.translate(0,-.42,0),Q})(),S=new Bn({vertexColors:!0,flatShading:!0,roughness:.7});n.cones.forEach(([Y,j])=>_({kind:"cone",mesh:new ye(P,S),shape:new Cl(.08,.3,.84,8),mass:1,x:Y,y:.42,z:j}));const V=n.tireWall;for(let Y=0;Y<V.cols;Y++)for(let j=0;j<V.rows;j++){const Q=V.x+(Y-(V.cols-1)/2)*1.16,_t=.17+j*.345,St=V.z,Bt=j===V.rows-1?Y%2?O:C:T;_({kind:"tire",mesh:new ye(Bt,S),shape:new Cl(.57,.57,.34,10),mass:2.2,x:Q,y:_t,z:St,angularDamping:.3})}const A=(()=>{const j=[X(K.box,"#c9c2b6",0,.12,0,.7,.24,3.2),X(K.box,"#d8d1c5",0,.42,0,.42,.4,3.2),X(K.box,"#e2dbcf",0,.78,0,.26,.34,3.2)];for(let Q=0;Q<4;Q++)j.push(X(K.box,Q%2?"#f2ece2":"#d8452f",0,.8,-3.2/2+.4+Q*.8,.28,.2,.8));return Ne(j).geometry})(),R=[];n.barriers.forEach(([Y,j,Q])=>{const _t=new ye(A,S);_t.position.set(Y,0,j),_t.rotation.y=Q,_t.castShadow=_t.receiveShadow=!0,s.add(_t),d(Y,.5,j,.36,.5,1.6,Q),R.push({x:Y,z:j,ry:Q,hx:.38,hz:1.62})});const I=n.crates;for(let Y=0;Y<3;Y++)for(let j=0;j<3-Y;j++)for(let Q=0;Q<(Y===2?1:2);Q++)_({kind:"crate",mesh:new ye(q,S),shape:new lo(new L(.45,.45,.45)),mass:1.6,x:I.x+(j-(2-Y)/2)*.94,y:.45+Y*.9,z:I.z+(Y===2?0:(Q-.5)*.94)});const y=n.bowling,U=new qt;s.add(U);const F=y.zBall-y.zPins+6,Z=(y.zBall+y.zPins)/2+.5,st=[X(K.box,"#e7b878",y.x,.02,Z,2.4,.04,F)];for(let Y=0;Y<6;Y++)st.push(X(K.box,"#d9a865",y.x-1+Y*.4,.045,Z,.02,.01,F));[-1,1].forEach(Y=>st.push(X(K.box,"#3a2f45",y.x+Y*1.45,.03,Z,.5,.06,F))),[-1,0,1].forEach(Y=>st.push(X(K.cone,"#d8452f",y.x+Y*.5,.05,y.zPins+6,.12,.02,.3,Math.PI/2,0,0))),st.push(X(K.box,"#2d2540",y.x,.6,y.zPins-2.3,4.2,1.2,.4)),[-1,1].forEach(Y=>st.push(X(K.box,"#2d2540",y.x+Y*2.05,.5,y.zPins-.8,.3,1,3.4))),st.push(X(K.box,"#2d2540",y.x-1.7,2,y.zPins-2.6,.2,4,.2),X(K.box,"#2d2540",y.x+1.7,2,y.zPins-2.6,.2,4,.2)),st.push(X(K.box,"#1c1630",y.x,3.3,y.zPins-2.65,3.6,1.6,.16));const mt=Ne(st);mt.castShadow=!1,U.add(mt),d(y.x,.6,y.zPins-2.3,2.1,.6,.2),[-1,1].forEach(Y=>d(y.x+Y*2.05,.5,y.zPins-.8,.15,.5,1.7));const Mt=document.createElement("canvas");Mt.width=512,Mt.height=224;const Yt=new Gl(Mt);Yt.colorSpace=Zn;const ct=new De({map:Yt,toneMapped:!1});ct.color.setScalar(1.35);const dt=new ye(new hn(3.3,1.44),ct);dt.position.set(y.x,3.3,y.zPins-2.56),U.add(dt);const Pt=[];for(let Y=0;Y<4;Y++)for(let j=0;j<=Y;j++)Pt.push([y.x+(j-Y/2)*.56,y.zPins+1.5-Y*.5]);const Tt=Pt.map(([Y,j])=>_({kind:"pin",mesh:new ye(b,S),shape:new Cl(.1,.15,.84,8),mass:.7,x:Y,y:.42,z:j,angularDamping:.2})),Qt=(()=>{const Y=new Xn(.36,2);return Ne([X(Y,"#5b2a86"),X(K.cyl,"#1c1630",.1,.3,.16,.05,.05,.05,.5),X(K.cyl,"#1c1630",-.06,.32,.17,.05,.05,.05,.5),X(K.cyl,"#1c1630",.02,.24,.27,.06,.05,.06,.9)]).geometry})(),Et=new Bn({vertexColors:!0,roughness:.25,metalness:.1}),zt=_({kind:"ball",mesh:new ye(Qt,Et),shape:new Al(.36),mass:6,x:y.x,y:.36,z:y.zBall,material:a,linearDamping:.08,angularDamping:.15});let Jt=null;if(n.soccer){const Y=n.soccer,j=Y.goal,Q=new Os("soccer");r.addContactMaterial(new gs(o,Q,{friction:.3,restitution:.55})),r.addContactMaterial(new gs(Q,l,{friction:.2,restitution:.5}));const _t=new Xn(.4,2).toNonIndexed(),St=[],Bt=new Xn(1,0),pe=Bt.attributes.position;for(let $=0;$<pe.count;$++){const It=new B().fromBufferAttribute(pe,$).normalize();St.some(ut=>ut.distanceTo(It)<.001)||St.push(It)}const wt=_t.attributes.position,Dt=wt.count/3,fe=[],he=new B,Kt=new B;for(let $=0;$<Dt;$++){he.set(0,0,0);for(let It=0;It<3;It++)he.add(Kt.fromBufferAttribute(wt,$*3+It));he.normalize(),fe.push([Math.max(...St.map(It=>It.dot(he))),$])}fe.sort(($,It)=>It[0]-$[0]);const le=new Set(fe.slice(0,60).map($=>$[1])),ue=new Float32Array(wt.count*3);for(let $=0;$<Dt;$++){const It=le.has($)?.07:.95;for(let ut=0;ut<3;ut++)ue.set([It,It,It*(le.has($)?1:.97)],($*3+ut)*3)}_t.setAttribute("color",new un(ue,3));const Ee=_({kind:"soccer",mesh:new ye(_t,S),shape:new Al(.4),mass:.45,x:Y.x,y:.4,z:Y.z,material:Q,linearDamping:.32,angularDamping:.4});[-1,1].forEach($=>d(j.x,j.h/2,j.z+$*j.w/2,.09,j.h/2,.09)),d(j.x,j.h,j.z,.09,.09,j.w/2),d(j.x+j.d,j.h/2,j.z,.06,j.h/2,j.w/2),[-1,1].forEach($=>d(j.x+j.d/2,j.h/2,j.z+$*j.w/2,j.d/2,j.h/2,.06)),d(j.x+j.d/2,j.h+.04,j.z,j.d/2,.06,j.w/2),Jt={ball:Ee,goal:j,spot:{x:Y.x,z:Y.z},reset(){M(Ee)},inGoal(){const $=Ee.body.position;return $.x>j.x+.45&&$.x<j.x+j.d&&Math.abs($.z-j.z)<j.w/2-.1&&$.y<j.h}}}let ht=0,k=0,Lt=0,Ft=0,At=0;function Ot(Y=!1){const j=Mt.getContext("2d");j.fillStyle="#120c22",j.fillRect(0,0,512,224),j.strokeStyle="#ff9a3c",j.lineWidth=6,j.strokeRect(8,8,496,208),j.textAlign="center",j.fillStyle="#ffcf7a",j.font='bold 34px "Trebuchet MS", sans-serif',j.fillText(Y?"STRIKE!":"BYTE BOWL",256,54),j.fillStyle=Y?"#ffef9a":"#7ff0d8",j.font='bold 92px "Trebuchet MS", sans-serif',j.fillText(`${ht} / 10`,256,150),j.fillStyle="#ff9a3c",j.font='bold 26px "Trebuchet MS", sans-serif',j.fillText(`BEST ${k}   ·   STRIKES ${At}`,256,196),Yt.needsUpdate=!0}Ot();function ne(){Tt.forEach(M),M(zt),ht=0,Lt=0,Ot()}const jt=new L,G=new L(0,1,0);function z(){let Y=0;return Tt.forEach((j,Q)=>{j.body.quaternion.vmult(G,jt);const _t=Math.hypot(j.body.position.x-Pt[Q][0],j.body.position.z-Pt[Q][1]);(jt.y<.7||_t>.5||j.sunk)&&Y++}),Y}const it={world:r,props:p,barriers:R,playerBody:f,carBody:m,addStaticCircle:h,addStaticBox:d,bowling:{get knocked(){return ht},get best(){return k},get strikes(){return At},reset:ne,ball:zt,pins:Tt,x:y.x,zBall:y.zBall,zPins:y.zPins},soccer:Jt,setActor(Y,j,Q,_t,St,Bt,pe,wt=!0){const Dt=Y==="car"?m:f;Dt.collisionFilterMask=wt?ds:0,Dt.position.set(j,wt?Q:-50,_t),Dt.quaternion.setFromEuler(0,St,0),Dt.velocity.set(wt?Bt:0,0,wt?pe:0),x[Y].set(Bt,0,pe)},update(Y){r.step(1/60,Math.min(Y,.1),3);let j=0;for(const Q of p){const _t=Q.body;_t.sleepState!==Xt.SLEEPING&&(j++,!Q.sunk&&t(_t.position.x,_t.position.z)<-.4&&(Q.sunk=!0,_t.collisionFilterMask=ds|Ll|Qo),(_t.position.y<-3.5||_t.position.y>60||Math.abs(_t.position.x)>200)&&(Q.kind==="pin"||Q.kind==="ball"?(Q.body.position.y=-40,_t.velocity.setZero(),_t.sleep()):M(Q)),v(Q))}if(it.awake=j,++Ft%6===0){const Q=z();Q!==ht&&(Q>ht&&Q===10&&(At++,e&&e.strike()),ht=Q,k=Math.max(k,Q),Ot(Q===10),!Lt&&Q>0&&(Lt=performance.now()+7e3)),Lt&&performance.now()>Lt&&(zt.body.velocity.length()<.6||performance.now()>Lt+6e3)&&ne();const _t=zt.body.position;!Lt&&zt.body.sleepState===Xt.SLEEPING&&(Math.abs(_t.x-y.x)>30||Math.abs(_t.z-y.zBall)>40||_t.y<-3)&&M(zt)}},debug(){return{awake:it.awake||0,props:p.length,knocked:ht,best:k,strikes:At,cones:p.filter(Y=>Y.kind==="cone").map(Y=>[Y.body.position.x,Y.body.position.z]),moved:p.map(Y=>Math.hypot(Y.body.position.x-Y.home.p.x,Y.body.position.z-Y.home.p.z))}},movedBy(Y){return p.filter(j=>j.kind===Y).map(j=>Math.hypot(j.body.position.x-j.home.p.x,j.body.position.z-j.home.p.z,j.body.position.y-j.home.p.y))},resetAll(){p.forEach(M),ne()}};return p.forEach(Y=>Y.body.sleep()),it}const Mp=["#e8742c","#d2452b","#f2a33a","#b8562d","#9c3b2a","#f4c25a"].map(s=>new Vt(s));function t2(s,t=220){const e=new Qe;e.setAttribute("position",new Le([0,0,-.16,.1,0,0,0,0,.16,0,0,-.16,0,0,.16,-.1,0,0],3)),e.computeVertexNormals();const n=new Bn({side:zn,roughness:.8}),i=new ms(e,n,t);i.frustumCulled=!1,s.add(i);const r=[],o=Math.random;for(let f=0;f<t;f++)r.push({x:(o()-.5)*60,y:o()*14,z:(o()-.5)*50,vy:.5+o()*.7,sw:o()*6.28,sp:.6+o(),rx:o()*6,ry:o()*6,rest:0}),i.setColorAt(f,Mp[f%Mp.length]);const a=new Ge,l=new $i,c=new gi,h=new B,d=new B(1,1,1);let u=t;return{mesh:i,setCount(f){u=Math.min(t,f),i.count=u},update(f,m,x,p,g){for(let _=0;_<u;_++){const v=r[_];if(v.rest>0)v.rest-=m,v.rest<=0&&(v.y=10+o()*5,v.x=x+(o()-.5)*60,v.z=p+(o()-.5)*50);else{v.y-=v.vy*m,v.x+=(Math.sin(f*v.sp+v.sw)*.9+.5)*m,v.z+=Math.cos(f*v.sp*.7+v.sw)*.6*m,v.rx+=m*2.4*v.sp,v.ry+=m*1.3;const M=g(v.x,v.z);v.y<=M+.02&&(v.y=M+.02,v.rest=2+o()*4,v.rx=0)}v.x-x>32?v.x-=64:x-v.x>32&&(v.x+=64),v.z-p>27?v.z-=54:p-v.z>27&&(v.z+=54),c.set(v.rest>0?0:Math.sin(v.rx)*1.2,v.ry,v.rest>0?0:Math.cos(v.rx)*.8),a.compose(h.set(v.x,v.y,v.z),l.setFromEuler(c),d),i.setMatrixAt(_,a)}i.instanceMatrix.needsUpdate=!0}}}function e2(s,t=80){const e=new Wi(.13,7);e.rotateX(-Math.PI/2),e.scale(1,1,1.7);const n=new pu(new Float32Array(t),1);e.setAttribute("aAlpha",n);const i=new De({color:"#6b3a22",transparent:!0,opacity:.38,depthWrite:!1});i.onBeforeCompile=f=>{f.vertexShader=f.vertexShader.replace("#include <common>",`attribute float aAlpha;
varying float vAlpha;
#include <common>`).replace("#include <begin_vertex>",`#include <begin_vertex>
vAlpha = aAlpha;`),f.fragmentShader=f.fragmentShader.replace("#include <common>",`varying float vAlpha;
#include <common>`).replace("#include <opaque_fragment>",`#include <opaque_fragment>
gl_FragColor.a *= vAlpha;`)};const r=new ms(e,i,t);r.frustumCulled=!1,r.renderOrder=1,s.add(r);const o=new Float32Array(t),a=new Ge,l=new $i,c=new B,h=new B(1,1,1),d=new B(0,1,0);for(let f=0;f<t;f++)a.makeTranslation(0,-99,0),r.setMatrixAt(f,a);let u=0;return{mesh:r,add(f,m,x,p){const g=u;u=(u+1)%t,o[g]=1,a.compose(c.set(f,m+.03,x),l.setFromAxisAngle(d,p),h),r.setMatrixAt(g,a),r.instanceMatrix.needsUpdate=!0},update(f){for(let m=0;m<t;m++)o[m]>0&&(o[m]=Math.max(0,o[m]-f/6)),n.array[m]=o[m];n.needsUpdate=!0}}}function n2(s,t=36){const e=new Xn(.22,0),n=[];for(let r=0;r<t;r++){const o=new ye(e,new Bn({color:"#f0d2a6",transparent:!0,opacity:0,flatShading:!0,depthWrite:!1}));o.visible=!1,s.add(o),n.push({m:o,life:0,vx:0,vy:0,vz:0})}let i=0;return{emit(r,o,a,l=0,c=0,h=1,d=1){for(let u=0;u<h;u++){const f=n[i];i=(i+1)%t,f.life=1,f.size=d*(.7+Math.random()*.6),f.m.position.set(r+(Math.random()-.5)*.3,o+.15,a+(Math.random()-.5)*.3),f.vx=l+(Math.random()-.5)*.8,f.vy=.5+Math.random()*.6,f.vz=c+(Math.random()-.5)*.8,f.m.visible=!0}},update(r){for(const o of n)if(!(o.life<=0)){if(o.life-=r*1.4,o.life<=0){o.m.visible=!1;continue}o.m.position.x+=o.vx*r,o.m.position.y+=o.vy*r,o.m.position.z+=o.vz*r,o.vx*=.92,o.vz*=.92,o.m.scale.setScalar(o.size*(1.6-o.life)),o.m.material.opacity=o.life*.55}}}}function wp(s,t,e){const n=s.map(i=>({kind:"job",year:i.dates.match(/\d{4}/)[0],title:i.title,sub:`${i.org}  ·  ${i.dates.replace("–","-")}`}));return n.push({kind:"edu",year:t.dates.match(/\d{4}/)[0],title:t.degree.replace("B.S. in ","B.S. "),sub:`${t.school}  ·  ${t.dates.replace("–","-")}`}),n.sort((i,r)=>i.year-r.year||(i.kind==="edu"?-1:1)),n.push({kind:"now",year:"NOW",title:"Next: SOC / IT Security / IAM",sub:"Open to entry-level security roles"}),n.map((i,r)=>({...i,x:e[r][0],z:e[r][1]}))}const i2={job:"#ff8a3c",edu:"#a865d8",now:"#2fd1bd"};function Sp({scene:s,font:t,entries:e,makeLabel:n,addCollider:i}){const r=new qt;s.add(r);const o=[],a=(c,h=.25)=>new Bn({color:c,emissive:c,emissiveIntensity:h,roughness:.5,flatShading:!0}),l=[];for(let c=0;c<e.length-1;c++){const h=e[c],d=e[c+1],u=Math.hypot(d.x-h.x,d.z-h.z),f=Math.floor(u/1.6);for(let m=1;m<f;m++){const x=m/f;l.push(X(K.cyl6,m%2?"#f6e3c0":"#e9cfa2",h.x+(d.x-h.x)*x,.05,h.z+(d.z-h.z)*x,.45,.1,.45,0,m*.7,0))}}if(l.length){const c=Ne(l);c.castShadow=!1,r.add(c)}return e.forEach((c,h)=>{const d=i2[c.kind],u=Ne([X(K.cyl6,"#5a3a4a",c.x,.2,c.z,1.7,.4,1.7),X(K.cyl6,d,c.x,.45,c.z,1.45,.12,1.45),X(K.cyl6,"#fff3df",c.x,.53,c.z,.9,.05,.9)]);r.add(u);const f=new ye(new Te(.5,.5,.06,6),new De({color:new Vt(d).multiplyScalar(1.6),toneMapped:!1}));if(f.position.set(c.x,.58,c.z),r.add(f),i&&i(c.x,c.z,1.2),t){const m=new Mu(String(c.year),{font:t,size:1.05,depth:.32,curveSegments:3,bevelEnabled:!0,bevelThickness:.04,bevelSize:.03,bevelSegments:1});m.computeBoundingBox();const x=m.boundingBox;m.translate(-(x.max.x+x.min.x)/2,0,0);const p=new ye(m,a(d,.18));p.position.set(c.x,.02,c.z+2.6),p.rotation.x=-.32,p.castShadow=!0,r.add(p);const g=new Mu(c.title,{font:t,size:.42,depth:.12,curveSegments:3,bevelEnabled:!1});g.computeBoundingBox();const _=g.boundingBox;g.translate(-(_.max.x+_.min.x)/2,0,0);const v=new ye(g,a("#fff4e2",.35));v.castShadow=!0;const M=new qt;M.position.set(c.x,3.1+h%2*.9,c.z),M.rotation.x=-.35,M.add(v);const P=n([c.sub],{w:640,h:72,font:30,scale:6.4,bg:"rgba(43,22,48,0.78)",color:"#ffe3c2"});P.position.set(0,-.55,.05),M.add(P),r.add(M),o.push({o:M,y0:M.position.y,ph:h*1.3})}}),{group:r,update(c){o.forEach(h=>{h.o.position.y=h.y0+Math.sin(c*1.4+h.ph)*.18,h.o.rotation.y=Math.sin(c*.6+h.ph)*.08})}}}const ar=3;function s2({dom:s,camera:t,scene:e,getCenter:n,onTap:i}){const r={active:!1,x:0,z:0,mag:0,run:!1,id:null,sx:0,sy:0,t0:0,moved:!1,cx:0,cy:0,touches:0},o=new pM,a=new bt,l=new Ns(new B(0,1,0),0),c=new B,h=new qt;h.visible=!1,e.add(h);const d=new De({color:"#ffffff",transparent:!0,opacity:.85,depthWrite:!1,toneMapped:!1}),u=new ye(new Gs(ar-.12,ar,48),d);u.rotation.x=-Math.PI/2,h.add(u);const f=new ye(new Gs(ar*.85-.04,ar*.85,48),new De({color:"#ffffff",transparent:!0,opacity:.25,depthWrite:!1}));f.rotation.x=-Math.PI/2,h.add(f);const m=new De({color:"#ffffff",transparent:!0,opacity:.55,depthWrite:!1,side:zn,toneMapped:!1}),x=new Wi(1,20,-.35,.7),p=new ye(x,m);p.rotation.x=-Math.PI/2;const g=new qt;g.add(p),h.add(g),h.renderOrder=5,u.renderOrder=5,p.renderOrder=5;function _(T,C){const O=s.getBoundingClientRect();a.set((T-O.left)/O.width*2-1,-((C-O.top)/O.height)*2+1),o.setFromCamera(a,t);const q=n();if(l.constant=-q.y,!o.ray.intersectPlane(l,c))return;const b=c.x-q.x,S=c.z-q.z,V=Math.hypot(b,S);if(V<.25){r.mag=0;return}r.x=b/V,r.z=S/V,r.mag=Math.min(1.25,V/ar),r.run=V>ar*.85}const v=T=>{const C=performance.now(),O=T.timeStamp;return O>0&&Math.abs(C-O)<2e3?O:C},M=T=>{for(const C of T)if(C.identifier===r.id)return C;return null};s.addEventListener("touchstart",T=>{if(r.touches=T.touches.length,r.id!==null)return;const C=T.changedTouches[0];r.id=C.identifier,r.active=!0,r.sim=!1,r.sx=C.clientX,r.sy=C.clientY,r.cx=C.clientX,r.cy=C.clientY,r.t0=v(T),r.moved=!1,_(C.clientX,C.clientY),T.preventDefault()},{passive:!1}),s.addEventListener("touchmove",T=>{const C=M(T.changedTouches);C&&(r.cx=C.clientX,r.cy=C.clientY,Math.hypot(C.clientX-r.sx,C.clientY-r.sy)>12&&(r.moved=!0),_(C.clientX,C.clientY),T.preventDefault())},{passive:!1});const P=T=>{r.touches=T.touches.length;const C=M(T.changedTouches);if(!C)return;const O=v(T)-r.t0<260&&!r.moved;r.id=null,r.active=!1,r.mag=0,r.run=!1,O&&i&&i(C.clientX,C.clientY)};return s.addEventListener("touchend",P),s.addEventListener("touchcancel",P),{state:r,update(){r.active&&!r.sim&&_(r.cx,r.cy);const T=n();if(h.visible=r.active,!r.active)return;h.position.set(T.x,T.y+.06,T.z);const C=Math.max(.6,Math.min(1.25,r.mag)*ar);p.scale.set(C,C,1),g.rotation.y=Math.atan2(-r.z,r.x),d.opacity=r.run?1:.8,m.opacity=r.run?.75:.5},simulate(T,C,O){r.sim=O>0;const q=Math.hypot(T,C)||1;r.active=O>0,r.x=T/q,r.z=C/q,r.mag=O,r.run=O>.85}}}const be=s=>document.querySelector(s),nc=be("#loader"),$u=be("#hud"),ps=be("#panel"),Th=be("#simple-resume"),O0=be("#touch"),zl=be("#start-btn");be("#sr-content").innerHTML=zM();const ta=new URLSearchParams(location.search),r2=matchMedia("(prefers-reduced-motion: reduce)").matches,Pe=kM(),io=be("#mute-btn");Pe.onChange(s=>{io.textContent=s?"🔇":"🔊",io.setAttribute("aria-pressed",String(s)),io.setAttribute("aria-label",s?"Unmute music and sound":"Mute music and sound"),io.title=`${s?"Unmute":"Mute"} (M)`});function B0(){Pe.toggle(),!Pe.started&&!Pe.muted&&Pe.start()}io.addEventListener("click",()=>{B0(),io.blur()});document.addEventListener("visibilitychange",()=>Pe.setActive(!document.hidden&&si==="world"));const co=document.createElement("div");co.className="toast";co.setAttribute("role","status");$u.appendChild(co);let bp;function On(s,t=2200){co.textContent=s,co.classList.add("show"),clearTimeout(bp),bp=setTimeout(()=>co.classList.remove("show"),t)}let k0=()=>{},G0=()=>{},si="loading",Ku=!1;function wo(s,t=!0){if(s)si="simple",Pe.setActive(!1),document.body.classList.add("simple"),Th.hidden=!1,$u.hidden=!0,O0.hidden=!0,nc.classList.add("done"),nc.hidden=!0,Ds(),ua(),location.hash!=="#resume"&&history.replaceState(null,"","#resume"),t&&Th.focus(),window.scrollTo(0,0);else{if(document.body.classList.remove("simple"),Th.hidden=!0,location.hash&&history.replaceState(null,"",location.pathname+location.search),!Ku)return wo(!0);Vl()}}document.querySelectorAll(".js-simple").forEach(s=>s.addEventListener("click",()=>wo(!0)));document.querySelectorAll(".js-3d").forEach(s=>s.addEventListener("click",()=>{Ku&&Pe.start(),wo(!1)}));be("#skip-link").addEventListener("click",s=>{s.preventDefault(),wo(!0)});const ic=be("#map-btn"),sc=be("#menu-btn"),rc=be("#map"),Zu=be("#menu");function ua(){rc.hidden=!0,Zu.hidden=!0,ic.setAttribute("aria-expanded","false"),sc.setAttribute("aria-expanded","false")}function H0(s){const t=s==="map"?rc:Zu,e=s==="map"?ic:sc,n=t.hidden;ua(),n&&(t.hidden=!1,e.setAttribute("aria-expanded","true"),V0(s))}let V0=()=>{};ic.addEventListener("click",()=>{H0("map"),ic.blur()});sc.addEventListener("click",()=>{H0("menu"),sc.blur()});document.querySelectorAll(".overlay-close").forEach(s=>s.addEventListener("click",ua));const sa=be("#scene");let qn;try{qn=new _1({canvas:sa,antialias:!0,powerPreference:"high-performance"})}catch(s){console.warn("WebGL unavailable, showing simple resume",s)}qn?o2():wo(!0,!1);function o2(){qn.setPixelRatio(Math.min(window.devicePixelRatio,2)),qn.setSize(innerWidth,innerHeight),qn.shadowMap.enabled=!0,qn.shadowMap.type=Tp,qn.toneMapping=bu,qn.toneMappingExposure=1.05;const s=new M1,t=aw(),e=new Vt("#e9926a");s.background=e,s.fog=new Uu(e,90,230);const n=lw(t);s.add(n);const i=new Jn(40,innerWidth/innerHeight,.5,460);s.add(new lM("#ffd9bf","#6a3d4a",1.15));const r=new Pf("#ffc58a",2.6),o=new B(-22,30,-34);r.castShadow=!0,r.shadow.mapSize.set(2048,2048),Object.assign(r.shadow.camera,{left:-38,right:38,top:38,bottom:-38,near:1,far:140}),r.shadow.bias=-4e-4,r.shadow.normalBias=.03,r.shadow.radius=3,s.add(r,r.target);const a=new Pf("#9b86ff",.5);a.position.set(30,16,30),s.add(a);const l=(w,E={})=>new Bn({color:w,flatShading:!0,roughness:.85,...E}),c=(w,E,{x:H=0,y:D=0,z:J=0,cast:tt=!0,receive:rt=!1}={})=>{const ft=new ye(w,E);return ft.position.set(H,D,J),ft.castShadow=tt,ft.receiveShadow=rt,ft},h=[],d=(w,E,H)=>{const D={x:w,z:E,r:H};return h.push(D),D},u={x:0,z:8},f=4.5,m=(w,E,H,D,J,tt)=>({x:w,z:E,color:J,label:tt,anchor:{x:H,z:D,rot:Math.atan2(w-H,E-D)}}),x={about:m(-22,4,-29,3,"#ff7a45","About"),experience:m(8,-14,10,-21,"#a865d8","Experience"),education:m(-24,-8,-29,-12.5,"#f2b33a","Education"),skills:m(30,24,35,28,"#2fb3a6","Skills"),contact:m(-2,42,-2,48,"#e8536a","Contact"),projects:{x:-12,z:32,color:"#7fc45a",label:"Projects",anchor:{x:-18,z:25.5,rot:.35}}};Object.entries(x).forEach(([w,E])=>E.key=w);const p=[[17,-12],[26,-16],[35,-12],[44,-17],[53,-14]],g={x:-10,z:1,rot:.35,scale:.62},_={x:8,z:12,heading:-.6},v={x:4,z:30,halfLen:4,halfWid:2.6,height:2.2},M={cones:[[-1,16],[1.5,17.5],[4,16],[6.5,17.5],[9,16],[0,21],[3,22],[6,21],[8.8,22.2]],tireWall:{x:16,z:19,cols:6,rows:4},barriers:[[12,20.5,0],[20,20.5,0],[16,22.6,Math.PI/2]],crates:{x:-6,z:19},bowling:{x:-40,zPins:0,zBall:18},soccer:{x:44.5,z:2,goal:{x:52,z:2,w:4.4,h:1.9,d:1.5}}},P={x:12,z:-48,rot:.2},T={x:28,z:-34},C={x:20,z:-40},O={x:-16,z:-38},q={x:-22,z:37},b={x:Xi.x,z:Xi.z,y:vn(Xi.x,Xi.z)},S=(()=>{const J=Math.hypot(4,22),tt=4/J,rt=22/J;let ft=0;for(;oi(14+tt*ft,36+rt*ft)>0&&ft<30;)ft+=.25;return{angle:Math.atan2(tt,rt),x:14+tt*(ft+1.5),z:36+rt*(ft+1.5),ux:tt,uz:rt}})(),V=[[v.x+9.5,v.z,3.2],[Kn.x-1,Kn.z+2],[-14,-12],[2,-24],[40,2],[-46,8],[-20,46],[40,-30],[-34,22],[-22,-50],[b.x+5,b.z+6,1.15+vn(b.x+5,b.z+6)],[S.x+S.ux*6.5,S.z+S.uz*6.5,1.3]],A=[{pts:[[u.x,u.z],[-10,5],[x.about.x,x.about.z],[x.education.x,x.education.z]],w:1.6},{pts:[[u.x,u.z],[4,-2],[x.experience.x,x.experience.z],...p],w:1.5},{pts:[[u.x,u.z],[2,26],[x.contact.x,x.contact.z]],w:1.5},{pts:[[2,26],[x.projects.x,x.projects.z]],w:1.4},{pts:[[u.x,u.z],[18,12],[x.skills.x,x.skills.z]],w:1.4},{pts:[[x.about.x,x.about.z],[-36,12],[M.bowling.x,M.bowling.zBall+2]],w:1.2},{pts:[[x.experience.x,x.experience.z],[6,-30],[P.x,P.z+5]],w:1.2},{pts:[[x.education.x,x.education.z],[-16,-30],[-20,-48],[b.x,b.z+4]],w:1.2},{pts:[[x.contact.x,x.contact.z],[S.x-S.ux*8,S.z-S.uz*8]],w:1.1}],R=[{x:u.x,z:u.z,r:4.5},...Object.values(x).map(w=>({x:w.x,z:w.z,r:f+.6}))],I=_w({paths:A,pads:R});s.add(I.mesh);const y=Mw(),U=cw({skyUniforms:t,distTex:y.tex,distSize:y.size,distMin:y.min,distMax:y.max});s.add(U.mesh);const F=(w,E,H)=>Math.sin(w*.18+H*1.1)*.5+Math.sin(E*.23-H*.9)*.35+Math.sin((w+E)*.37+H*1.7)*.18,Z=[];for(const w of Object.values(x)){const E=c(new Wi(f,40),l(new Vt(w.color).lerp(new Vt("#fff0dc"),.5),{roughness:1}),{x:w.x,y:.05,z:w.z,cast:!1,receive:!0});E.rotation.x=-Math.PI/2;const H=c(new Gs(f-.4,f,48),new De({color:new Vt(w.color).multiplyScalar(1.9),transparent:!0}),{x:w.x,y:.08,z:w.z,cast:!1});H.rotation.x=-Math.PI/2,Z.push(H),s.add(E,H);const D=st(w.label,w.color);D.position.set(w.x,7.5,w.z),s.add(D)}function st(w,E){const H=document.createElement("canvas");H.width=512,H.height=128;const D=H.getContext("2d");D.fillStyle="#2b1630",Mt(D,8,8,496,112,56),D.fill(),D.fillStyle=E,Mt(D,16,16,480,96,48),D.fill(),D.fillStyle="#fff",D.font="900 60px system-ui, sans-serif",D.textAlign="center",D.textBaseline="middle",D.fillText(w.toUpperCase(),256,68);const J=new Gl(H);J.colorSpace=Zn;const tt=new df(new fu({map:J,depthWrite:!1,toneMapped:!1}));return tt.scale.set(6.4,1.6,1),tt}function mt(w,{w:E=640,h:H=72,font:D=30,scale:J=6.4,bg:tt="rgba(0,0,0,.6)",color:rt="#fff"}={}){const ft=Yt(E,H*w.length,(vt,Gt,yt)=>{vt.fillStyle=tt,Mt(vt,2,2,Gt-4,yt-4,Math.min(28,H/2)),vt.fill(),vt.fillStyle=rt,vt.textAlign="center",vt.textBaseline="middle",w.forEach((Rt,oe)=>{let ot=D;do vt.font=`700 ${ot}px system-ui, sans-serif`;while(vt.measureText(Rt).width>Gt-44&&--ot>12);vt.fillText(Rt,Gt/2,H*oe+H/2+2)})});return new ye(new hn(J,J*H*w.length/E),new De({map:ft,transparent:!0,depthWrite:!1}))}function Mt(w,E,H,D,J,tt){w.beginPath(),w.moveTo(E+tt,H),w.arcTo(E+D,H,E+D,H+J,tt),w.arcTo(E+D,H+J,E,H+J,tt),w.arcTo(E,H+J,E,H,tt),w.arcTo(E,H,E+D,H,tt),w.closePath()}function Yt(w,E,H){const D=document.createElement("canvas");D.width=w,D.height=E,H(D.getContext("2d"),w,E);const J=new Gl(D);return J.colorSpace=Zn,J}const ct=w=>w.anchor,dt=[];{const w=ct(x.about),E=new qt;E.position.set(w.x,0,w.z),E.rotation.y=w.rot,E.add(c(new ge(1.2,3,1.2),l("#3a3760"),{y:1.5})),E.add(c(new ge(7,4.6,.6),l("#1d1b3a"),{y:5}));const H=Yt(512,320,(vt,Gt,yt)=>{vt.fillStyle="#0b1022",vt.fillRect(0,0,Gt,yt),vt.fillStyle="#7ee081",vt.font="bold 34px ui-monospace, monospace",["> whoami","alex_smith","> role --target","SOC | IT Sec | IAM","> status","access granted_"].forEach((Rt,oe)=>vt.fillText(Rt,24,50+oe*46))}),D=c(new hn(6.4,4),new De({map:H}),{y:5,z:.31,cast:!1});E.add(D);const J=new Ti;J.moveTo(0,2.2),J.quadraticCurveTo(1.2,1.9,1.9,2),J.quadraticCurveTo(2,-.6,0,-2.2),J.quadraticCurveTo(-2,-.6,-1.9,2),J.quadraticCurveTo(-1.2,1.9,0,2.2);const tt=c(new Fs(J,{depth:.6,bevelEnabled:!0,bevelSize:.15,bevelThickness:.15,bevelSegments:1}),l("#ff8a5b"),{x:6,y:3.2}),rt=new Ti;rt.moveTo(-.9,.1),rt.lineTo(-.3,-.6),rt.lineTo(1,.9),rt.lineTo(.7,1.1),rt.lineTo(-.3,-.05),rt.lineTo(-.6,.35);const ft=c(new Fs(rt,{depth:.3,bevelEnabled:!1}),l("#ffffff"),{z:.7});tt.add(ft),E.add(tt),dt.push(vt=>{tt.rotation.y=Math.sin(vt*1.2)*.5,tt.position.y=3.2+Math.sin(vt*2)*.25}),s.add(E),d(w.x,w.z,4.2);const pt=E.localToWorld(new B(6,0,0));d(pt.x,pt.z,1.8)}{const w=ct(x.experience),E=new qt;E.position.set(w.x,0,w.z),E.rotation.y=w.rot;const H=l("#2e2b4f"),D=l("#45417a"),J=new ge(.22,.12,.05),tt=new ms(J,new De({color:"#ffffff"}),3*12*3),rt=new rn;let ft=0;for(let ot=0;ot<3;ot++){const xt=(ot-1)*2.6;E.add(c(new ge(2.2,5.4,1.8),H,{x:xt,y:2.7}));for(let Zt=0;Zt<12;Zt++){E.add(c(new ge(1.9,.32,.06),D,{x:xt,y:.6+Zt*.4,z:.92,cast:!1}));for(let ee=0;ee<3;ee++)rt.position.set(xt-.6+ee*.3,.6+Zt*.4,.97),rt.updateMatrix(),tt.setMatrixAt(ft++,rt.matrix)}}const pt=["#7ee081","#00e5ff","#ffc93c","#1b1a33"].map(ot=>new Vt(ot));for(let ot=0;ot<ft;ot++)tt.setColorAt(ot,pt[ot%4]);E.add(tt);let vt=0;dt.push((ot,xt)=>{if(vt+=xt,!(vt<.08)){vt=0;for(let Zt=0;Zt<8;Zt++)tt.setColorAt(Math.random()*ft|0,pt[Math.random()*4|0]);tt.instanceColor.needsUpdate=!0}});const Gt=new qt;Gt.position.set(-7.5,0,1.5),Gt.rotation.y=.5;const yt=l("#d9643a"),Rt=l("#c4502b");for(let ot=0;ot<4;ot++)for(let xt=0;xt<4;xt++)Gt.add(c(new ge(1.1,.55,.8),(ot+xt)%2?yt:Rt,{x:(xt-1.5)*1.15+ot%2*.3,y:.3+ot*.6}));const oe=[];for(let ot=0;ot<4;ot++){const xt=c(new pi(.4,1.2,5),new De({color:ot%2?"#ffb02e":"#ff5a1f"}),{x:(ot-1.5)*1.15,y:3,cast:!1});oe.push(xt),Gt.add(xt)}dt.push(ot=>oe.forEach((xt,Zt)=>{xt.scale.y=.8+Math.sin(ot*9+Zt*2)*.35,xt.position.y=2.9+xt.scale.y*.4})),E.add(Gt),s.add(E);for(let ot=-1;ot<=1;ot++){const xt=E.localToWorld(new B(ot*2.6,0,0));d(xt.x,xt.z,1.7)}for(let ot=-1.5;ot<=1.5;ot++){const xt=Gt.localToWorld(new B(ot*1.15,0,0));E.updateMatrixWorld(),d(xt.x,xt.z,.8)}}{const w=ct(x.education),E=new qt;E.position.set(w.x,0,w.z),E.rotation.y=w.rot,E.add(c(new Te(2.2,2.6,1.2,8),l("#e8e2d0"),{y:.6})),["#ff5a5f","#00c2d1","#7b5cff"].forEach((rt,ft)=>{const pt=c(new ge(3-ft*.3,.6,2.2-ft*.2),l(rt),{y:1.5+ft*.6});pt.rotation.y=ft*.25,E.add(pt)});const D=new qt;D.position.y=4.4,D.add(c(new Te(1.1,1.3,.9,8),l("#1d1b3a")));const J=c(new ge(3.6,.2,3.6),l("#1d1b3a"),{y:.5});J.rotation.y=Math.PI/4,D.add(J),D.add(c(new ri(.18,6,4),l("#ffc93c"),{y:.68}));const tt=c(new Te(.06,.06,1.4,4),l("#ffc93c"),{x:1.4,y:-.1});D.add(tt),D.add(c(new pi(.22,.5,6),l("#ffc93c"),{x:1.4,y:-.9})),E.add(D),dt.push(rt=>{D.rotation.y=rt*.6,D.position.y=4.6+Math.sin(rt*1.6)*.3}),s.add(E),d(w.x,w.z,2.8)}{const w=ct(x.skills),E=new qt;E.position.set(w.x,0,w.z),E.rotation.y=w.rot;const H=new qt;H.position.y=2.2,H.add(c(new ge(3.6,3,1.4),l("#ffc93c",{metalness:.3,roughness:.5})));const D=c(new Pi(1.2,.32,6,16,Math.PI),l("#b9bdd6",{metalness:.5,roughness:.4}),{y:1.5});H.add(D),H.add(c(new Te(.35,.35,.2,10),l("#1d1b3a"),{y:.25,z:.72}).rotateX(Math.PI/2)),H.add(c(new ge(.25,.8,.2),l("#1d1b3a"),{y:-.25,z:.72})),E.add(H),dt.push(pt=>{D.position.y=1.5+Math.max(0,Math.sin(pt*1.3))*.5});const J=new qt;J.position.set(0,7.5,0);const tt=[],rt=l("#00c2d1",{emissive:"#00c2d1",emissiveIntensity:.4});for(let pt=0;pt<9;pt++){const vt=pt/9*Math.PI*2,Gt=2.5+pt%3*1.1,yt=new B(Math.cos(vt)*Gt,Math.sin(pt*1.7)*1.4,Math.sin(vt)*Gt);tt.push(yt),J.add(c(new Xn(.42,0),pt%3?rt:l("#ff5a8a"),{x:yt.x,y:yt.y,z:yt.z}))}tt.push(new B),J.add(c(new Xn(.75,0),l("#7b5cff")));const ft=[];tt.forEach((pt,vt)=>{ft.push(pt,tt[tt.length-1]),vt<8&&ft.push(pt,tt[vt+1])}),J.add(new rh(new Qe().setFromPoints(ft),new na({color:"#1d1b3a"}))),E.add(J),dt.push(pt=>{J.rotation.y=pt*.35}),s.add(E),d(w.x,w.z,2.6)}{const w=ct(x.contact),E=new qt;E.position.set(w.x,0,w.z),E.rotation.y=w.rot;const H=new qt;H.position.x=-3,H.add(c(new ge(.4,2.4,.4),l("#8b5a3c"),{y:1.2})),H.add(c(new ge(1.4,1.1,2.4),l("#ff5a8a"),{y:2.9}));const D=c(new Te(.7,.7,2.4,10,1,!1,0,Math.PI),l("#ff5a8a"),{y:3.45});D.rotation.set(Math.PI/2,0,Math.PI/2),H.add(D);const J=c(new ge(.08,1.2,.4),l("#ffc93c"),{x:.75,y:3.6,z:-.6});H.add(J);const tt=c(new ge(1.2,.05,.8),l("#ffffff"),{y:3,z:1.3});tt.rotation.x=-.3,H.add(tt),dt.push(yt=>{J.rotation.x=Math.sin(yt*2)*.5}),E.add(H);const rt=new qt;rt.position.x=3;const ft=l("#b9bdd6");for(let yt=0;yt<4;yt++){const Rt=yt/4*Math.PI*2+Math.PI/4,oe=c(new Te(.08,.14,8.2,4),ft,{x:Math.cos(Rt)*.7,y:4,z:Math.sin(Rt)*.7});oe.rotation.set(Math.sin(Rt)*.09,0,-Math.cos(Rt)*.09),rt.add(oe)}rt.add(c(new ri(.4,8,6),l("#ff5a5f",{emissive:"#ff5a5f",emissiveIntensity:.8}),{y:8.4}));const pt=[];for(let yt=0;yt<3;yt++){const Rt=c(new Pi(1,.06,4,24),new De({color:"#ff5a8a",transparent:!0}),{y:8.4,cast:!1});Rt.rotation.x=Math.PI/2,pt.push(Rt),rt.add(Rt)}dt.push(yt=>pt.forEach((Rt,oe)=>{const ot=(yt*.5+oe/3)%1;Rt.scale.setScalar(.5+ot*4),Rt.material.opacity=1-ot})),E.add(rt),s.add(E),E.updateMatrixWorld();const vt=E.localToWorld(new B(-3,0,0)),Gt=E.localToWorld(new B(3,0,0));d(vt.x,vt.z,1.4),d(Gt.x,Gt.z,1.2)}{const w=x.projects.anchor,E=new qt;E.position.set(w.x,0,w.z),E.rotation.y=w.rot;const H=l("#2b2950"),D=l("#1d1b3a");E.add(c(new ge(7.4,.25,2.4),l("#e8e2d0"),{y:1.6})),[[-3.4,-.9],[3.4,-.9],[-3.4,.9],[3.4,.9]].forEach(([ot,xt])=>E.add(c(new ge(.2,1.6,.2),H,{x:ot,y:.8,z:xt}))),[["PASSWORD CHECK",["> analyze","Summer2024!","","pattern:"," season+year","rating: WEAK"],"#ff5a5f"],["LOG ANALYZER",["> 4625 4624 4740","","","","","ALERT: brute force"],"#ffc93c"],["AD HYGIENE",["PS> Invoke-","  ADHygieneAudit","stale accounts","pwd never expires","disabled in groups","mode: read-only"],"#00c2d1"]].forEach(([ot,xt,Zt],ee)=>{const me=(ee-1)*2.35,ke=new qt;ke.position.set(me,1.73,-.2),ke.rotation.y=-(ee-1)*.22,ke.add(c(new ge(.25,.6,.25),D,{y:.3})),ke.add(c(new ge(2.2,1.45,.15),D,{y:1.25}));const Cn=Yt(512,320,(nn,kt,de)=>{nn.fillStyle="#0b1022",nn.fillRect(0,0,kt,de),nn.fillStyle=Zt,nn.fillRect(0,0,kt,52),nn.fillStyle="#0b1022",nn.font="800 30px ui-monospace, monospace",nn.fillText(ot,18,37),nn.font="600 30px ui-monospace, monospace",xt.forEach((Oe,Ae)=>{nn.fillStyle=Ae===xt.length-1?Zt:"#7ee081",nn.fillText(Oe,18,96+Ae*40)}),ee===1&&[5,9,3,14,6,4,11,2,7].forEach((Oe,Ae)=>{nn.fillStyle=Oe>10?"#ff5a5f":"#3ddc84",nn.fillRect(24+Ae*50,250-Oe*9,34,Oe*9)})});ke.add(c(new hn(2,1.25),new De({map:Cn,toneMapped:!1}),{y:1.25,z:.08,cast:!1})),E.add(ke)});const tt=new qt;tt.position.set(4.6,0,-.1),tt.add(c(new ge(1.3,2.8,1.6),H,{y:1.4}));const rt=Yt(256,128,(ot,xt,Zt)=>{ot.fillStyle="#0b1022",ot.fillRect(0,0,xt,Zt),ot.fillStyle="#3ddc84",ot.font="700 30px ui-monospace, monospace",ot.fillText("10.20.0.0",14,50),ot.fillText("     /22",14,96)});tt.add(c(new hn(1,.5),new De({map:rt,toneMapped:!1}),{y:2.3,z:.81,cast:!1}));const ft=[];for(let ot=0;ot<5;ot++){const xt=c(new ge(.8,.07,.04),new De({color:new Vt("#3ddc84").multiplyScalar(2.2)}),{y:.5+ot*.28,z:.81,cast:!1});ft.push(xt),tt.add(xt)}E.add(tt);const pt=new qt;pt.position.set(-4.9,0,.2),pt.add(c(new Te(.9,1.1,.5,16),H,{y:.25})),pt.add(c(new Te(.7,.7,.06,24),new De({color:new Vt("#3ddc84").multiplyScalar(2.5)}),{y:.53,cast:!1}));const vt=new qt;vt.position.y=3,vt.add(new rh(new wf(new Xn(1.15,1)),new na({color:new Vt("#5dffa8").multiplyScalar(2.4)}))),vt.add(c(new Xn(.75,0),new Bn({color:"#3ddc84",emissive:"#3ddc84",emissiveIntensity:.9,flatShading:!0,transparent:!0,opacity:.85}),{cast:!1})),pt.add(vt);const Gt=new Te(.7,1.2,2.5,20,1,!0);Gt.translate(0,1.8,0);const yt=new ye(Gt,jf("#5dffa8"));pt.add(yt),E.add(pt);const Rt=Yt(1024,160,(ot,xt,Zt)=>{ot.fillStyle="#1d1b3a",Mt(ot,0,0,xt,Zt,40),ot.fill(),ot.fillStyle="#3ddc84",ot.font="900 92px system-ui, sans-serif",ot.textAlign="center",ot.textBaseline="middle",ot.fillText("PROJECT LAB",xt/2,Zt/2+4)}),oe=c(new hn(6.4,1),new De({map:Rt,transparent:!0,toneMapped:!1}),{y:4.75,z:-.3,cast:!1});E.add(oe),[-2.9,2.9].forEach(ot=>E.add(c(new ge(.12,3.1,.12),D,{x:ot,y:3.2,z:-.4}))),dt.push(ot=>{vt.rotation.set(ot*.4,ot*.7,0),vt.position.y=3+Math.sin(ot*1.5)*.2,ft.forEach((xt,Zt)=>xt.visible=Math.sin(ot*5+Zt*1.7)>-.4)}),s.add(E),E.updateMatrixWorld(),[[-2.4,0,1.5],[0,0,1.5],[2.4,0,1.5],[4.6,0,1.1],[-4.9,0,1.2]].forEach(([ot,xt,Zt])=>{const ee=E.localToWorld(new B(ot,0,xt));d(ee.x,ee.z,Zt)})}{const w=new qt;w.position.set(b.x,b.y-.05,b.z),w.add(c(new Te(3.2,3.6,.8,10),l("#a7a9be"),{y:.4,receive:!0}));const E=l("#fffaf2"),H=l("#ff5a5f"),D=4,J=2.5;for(let yt=0;yt<D;yt++){const Rt=2-yt*.17,oe=2-(yt+1)*.17;w.add(c(new Te(oe,Rt,J,14),yt%2?H:E,{y:.8+J*yt+J/2}))}const tt=.8+J*D;w.add(c(new Te(1.9,1.7,.3,14),l("#1d1b3a"),{y:tt+.15}));const rt=c(new Pi(1.8,.06,4,24),l("#1d1b3a"),{y:tt+.75,cast:!1});rt.rotation.x=Math.PI/2,w.add(rt);const ft=c(new Te(1,1,1.5,12),new Bn({color:"#fff3c4",emissive:"#ffe08a",emissiveIntensity:3.2}),{y:tt+1.05,cast:!1});w.add(ft),w.add(c(new pi(1.45,1.4,12),H,{y:tt+2.5})),w.add(c(new ri(.22,8,6),l("#1d1b3a"),{y:tt+3.3})),w.add(c(new ge(.9,1.5,.2),l("#1d1b3a"),{y:1.55,z:1.95}));const pt=new qt;pt.position.y=tt+1.05;const vt=new pi(4.2,34,24,1,!0);vt.translate(0,-17,0),vt.rotateX(-Math.PI/2);const Gt=jf("#fff1b8");[0,Math.PI].forEach(yt=>{const Rt=new ye(vt,Gt);Rt.rotation.set(.06,yt,0),Rt.renderOrder=2,pt.add(Rt)}),w.add(pt),dt.push(yt=>{pt.rotation.y=yt*.7,pt.visible=!(Ie&&Ie.id==="lighthouse")}),s.add(w),d(b.x,b.z,3.4)}{const w=new qt;w.position.set(S.x,0,S.z),w.rotation.y=S.angle;const E=l("#b07a4f"),H=l("#9a6841"),D=l("#6e4a31");for(let yt=0;yt<12;yt++)w.add(c(new ge(3.2,.2,1.35),yt%2?E:H,{y:-.04,z:-8.25+yt*1.5,receive:!0}));for(let yt=0;yt<6;yt++)[-1.5,1.5].forEach(Rt=>w.add(c(new Te(.18,.2,3.2,6),D,{x:Rt,y:-1.4,z:-5.5+yt*2.75})));[-1.5,1.5].forEach(yt=>w.add(c(new Te(.22,.22,.6,8),D,{x:yt,y:.3,z:8.4}))),s.add(w);const J=new qt,tt=new Ti;tt.moveTo(0,3),tt.quadraticCurveTo(1,1.6,.95,-.5),tt.lineTo(.8,-2.1),tt.lineTo(-.8,-2.1),tt.lineTo(-.95,-.5),tt.quadraticCurveTo(-1,1.6,0,3);const rt=new Fs(tt,{depth:.9,bevelEnabled:!0,bevelSize:.08,bevelThickness:.08,bevelSegments:1});rt.rotateX(-Math.PI/2),J.add(c(rt,l("#fffaf2"))),J.add(c(new ge(1.95,.18,3.2),l("#00c2d1"),{y:.45,z:.1})),J.add(c(new ge(1.2,.6,1.2),l("#e8e2d0"),{y:1.2,z:.9})),J.add(c(new Te(.07,.09,4.6,6),l("#6e4a31"),{y:3.2,z:-.4}));const ft=new Ti;ft.moveTo(0,0),ft.lineTo(0,3.6),ft.lineTo(1.9,.1),ft.lineTo(0,0);const pt=c(new Gu(ft),l("#fffaf2",{side:zn}),{y:1.4,z:-.3});pt.rotation.y=Math.PI/2+.3,J.add(pt);const vt=c(new ge(.05,.3,.6),l("#ff5a5f"),{y:5.4,z:-.7,cast:!1});J.add(vt),w.updateMatrixWorld();const Gt=new B(3.4,0,4.5);w.localToWorld(Gt),J.position.copy(Gt),J.rotation.y=S.angle+Math.PI+.12,s.add(J),dt.push(yt=>{const Rt=F(Gt.x,Gt.z,yt)*.22;J.position.y=-1.45+Rt,J.rotation.z=Math.sin(yt*1.2)*.05,J.rotation.x=Math.sin(yt*.9+1)*.035,vt.rotation.y=Math.sin(yt*3)*.4})}const Pt=(w,E)=>{const H=w-S.x,D=E-S.z,J=H*S.ux+D*S.uz,tt=H*S.uz-D*S.ux;return Math.abs(tt)<1.45&&J>-9&&J<8.9},Tt=(w,E)=>{const H=w-v.x,D=E-v.z;return Math.abs(H)>v.halfLen||Math.abs(D)>v.halfWid?0:v.height*(H+v.halfLen)/(2*v.halfLen)};{const w=new qt;w.position.set(v.x,0,v.z);const E=new Ti;E.moveTo(-4,0),E.lineTo(v.halfLen,0),E.lineTo(v.halfLen,v.height),E.lineTo(-4,0);const H=new Fs(E,{depth:v.halfWid*2,bevelEnabled:!1});H.translate(0,0,-2.6),w.add(c(H,l("#ffb02e"),{receive:!0}));const D=Math.atan2(v.height,v.halfLen*2),J=Math.hypot(v.height,v.halfLen*2),tt=new qt;tt.position.set(0,v.height/2,0),tt.rotation.z=D;const rt=Yt(512,256,(pt,vt,Gt)=>{pt.fillStyle="#1d1b3a",pt.fillRect(0,0,vt,Gt),pt.fillStyle="#ffc93c";for(let yt=0;yt<4;yt++){pt.beginPath();const Rt=40+yt*115;pt.moveTo(Rt,40),pt.lineTo(Rt+70,Gt/2),pt.lineTo(Rt,Gt-40),pt.lineTo(Rt+30,Gt/2),pt.closePath(),pt.fill()}}),ft=c(new hn(J,v.halfWid*2-.6),new Bn({map:rt,roughness:.8}),{y:.02,cast:!1,receive:!0});ft.rotation.x=-Math.PI/2,tt.add(ft),w.add(tt),[-1,1].forEach(pt=>w.add(c(new ge(v.halfLen*2,.35,.25),l("#ff5a5f"),{y:.18,z:pt*(v.halfWid+.1)}))),s.add(w)}const Qt=[];{const w=new ku(.45,0),E=new Bn({color:"#7df9ff",emissive:"#00e5ff",emissiveIntensity:2.2,flatShading:!0}),H=new wf(new ge(.9,.9,.9)),D=new na({color:new Vt("#b8fbff").multiplyScalar(1.6)}),J=new De({color:new Vt("#00e5ff").multiplyScalar(1.4),transparent:!0,opacity:.55,depthWrite:!1}),tt=new Gs(.75,.95,24);V.forEach(([rt,ft,pt],vt)=>{const Gt=Math.max(0,vn(rt,ft));pt===void 0&&(pt=Gt+1.15);const yt=new qt;yt.position.set(rt,pt,ft);const Rt=new ye(w,E);Rt.castShadow=!0,yt.add(Rt,new rh(H,D)),s.add(yt);const oe=new ye(tt,J);oe.rotation.x=-Math.PI/2,oe.position.set(rt,Gt+.09,ft),s.add(oe),Qt.push({g:yt,ring:oe,x:rt,z:ft,y:pt,taken:!1,pop:0,phase:vt*.7})})}let Et=7;const zt=()=>(Et=Et*16807%2147483647)/2147483647,Jt=(w,E,[H,D],[J,tt])=>{const rt=J-H,ft=tt-D,pt=Math.max(0,Math.min(1,((w-H)*rt+(E-D)*ft)/(rt*rt+ft*ft)));return Math.hypot(w-H-pt*rt,E-D-pt*ft)},ht=(w,E,H)=>A.some(D=>D.pts.some((J,tt)=>tt>0&&Jt(w,E,D.pts[tt-1],J)<D.w+H)),k=[{x:u.x,z:u.z-4,r:15},...Object.values(x).flatMap(w=>[{x:w.x,z:w.z,r:f+3},{x:w.anchor.x,z:w.anchor.z,r:7}]),...p.map(([w,E])=>({x:w,z:E,r:7.5})),...p.slice(1).map(([w,E],H)=>({x:(w+p[H][0])/2,z:(E+p[H][1])/2+1,r:6})),{x:g.x,z:g.z,r:5},{x:_.x,z:_.z,r:5},{x:b.x,z:b.z,r:7},{x:S.x-S.ux*8,z:S.z-S.uz*8,r:5},{x:v.x,z:v.z,r:7},{x:v.x+10,z:v.z,r:6},{x:7,z:19,r:7},{x:M.tireWall.x,z:M.tireWall.z,r:8},{x:M.tireWall.x,z:M.tireWall.z-9,r:6.5},{x:12,z:6,r:5},{x:M.crates.x,z:M.crates.z,r:4},{x:q.x,z:q.z,r:7},{x:47,z:2,r:9.5},{x:M.soccer.goal.x+1,z:M.soccer.goal.z,r:5},{x:M.bowling.x,z:9,r:4},{x:M.bowling.x,z:0,r:6},{x:M.bowling.x,z:18,r:6},...[-4,4,12].map(w=>({x:M.bowling.x,z:w,r:4})),...V.map(([w,E])=>({x:w,z:E,r:2.6})),{x:P.x,z:P.z,r:8},{x:P.x+Math.sin(P.rot)*5,z:P.z+Math.cos(P.rot)*5,r:6},{x:T.x,z:T.z,r:8},{x:C.x,z:C.z,r:4},...[[-5.7,6.4,2.8],[-4,9,2.7]].map(([w,E,H])=>({x:P.x+w*Math.cos(P.rot)+E*Math.sin(P.rot),z:P.z-w*Math.sin(P.rot)+E*Math.cos(P.rot),r:H}))],Lt=(w,E)=>k.some(H=>Math.hypot(w-H.x,E-H.z)<H.r),Ft=(w,E=7)=>{for(let H=0;H<80;H++){const D=-60+zt()*125,J=-82+zt()*140;if(!(oi(D,J)<E)&&!(Math.hypot(D-Kn.x,J-Kn.z)<12)&&!(Lt(D,J)||ht(D,J,1.5))&&!h.some(tt=>Math.hypot(D-tt.x,J-tt.z)<tt.r+w))return{x:D,z:J}}return null},At=95,Ot=new Te(.25,.35,1.6,5),ne=new ms(Ot,l("#6b4030"),At+1),jt=new Xn(1.45,0);jt.scale(1,1.15,1);const G=new ms(jt,l("#ffffff"),At+1),z=new pi(1.35,3.4,6),it=new ms(z,l("#ffffff"),40);ne.castShadow=G.castShadow=it.castShadow=!0;const Y=["#e0772f","#c9472c","#f0a63a","#b3542a","#d9902f","#9c3a2e"].map(w=>new Vt(w)),j=["#5f6b34","#4f5d2e","#6e7a3a"].map(w=>new Vt(w)),Q=new rn;let _t=0,St=0;const Bt=[];for(let w=0;w<9;w++){const E=w*2.4,H=5+w%3*2.2;Bt.push({x:O.x+Math.cos(E)*H,z:O.z+Math.sin(E)*H})}for(let w=0;w<At-9;w++){const E=Ft(2);E&&Bt.push(E)}Bt.forEach((w,E)=>{if(oi(w.x,w.z)<2.5||Lt(w.x,w.z)&&E>=9)return;const H=.75+zt()*.7,D=zt()*6,J=zt()<.28&&St<40;Q.position.set(w.x,.8*H,w.z),Q.scale.setScalar(H),Q.rotation.set(0,D,0),Q.updateMatrix(),ne.setMatrixAt(_t,Q.matrix),Q.position.y=(J?1.6+1.5:1.6+1.1)*H,Q.updateMatrix(),J?(it.setMatrixAt(St,Q.matrix),it.setColorAt(St,j[St%3]),St++):(G.setMatrixAt(_t,Q.matrix),G.setColorAt(_t,Y[_t%Y.length])),J&&(Q.scale.setScalar(0),Q.updateMatrix(),G.setMatrixAt(_t,Q.matrix),G.setColorAt(_t,Y[0])),d(w.x,w.z,.45*H+.2),_t++});const pe=new qt;{const w=l("#9a6a45");for(let H=0;H<6;H++)pe.add(c(new Te(.22-H*.015,.26-H*.015,.75,6),w,{x:H*H*.04,y:.37+H*.72}));const E=l("#6f8f3a",{side:zn});for(let H=0;H<7;H++){const D=new pi(.5,3.2,4);D.translate(0,1.6,0),D.scale(1,1,.25);const J=c(D,E);J.rotation.z=-1.95+H%2*.25;const tt=new qt;tt.position.set(1,4.35,0),tt.rotation.y=H/7*Math.PI*2,tt.add(J),pe.add(tt)}[[.85,4.1,.25],[1.15,4.05,-.25]].forEach(([H,D,J])=>pe.add(c(new ri(.22,6,5),l("#5a3a22"),{x:H,y:D,z:J}))),pe.position.set(Kn.x+1.5,Math.max(0,vn(Kn.x+1.5,Kn.z-1)),Kn.z-1),s.add(pe),d(pe.position.x,pe.position.z,.5),dt.push(H=>{pe.rotation.z=Math.sin(H*.9)*.025})}ne.count=G.count=_t,it.count=St,s.add(ne,G,it);const wt={value:0},Dt=w=>w.material.onBeforeCompile=E=>{E.uniforms.uWind=wt,E.vertexShader=`uniform float uWind;
`+E.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      float bend = max(0.0, position.y + 1.7) / 3.4;
      bend *= bend;
      vec2 ip = vec2(instanceMatrix[3].x, instanceMatrix[3].z);
      transformed.x += sin(uWind * 1.7 + ip.x * 0.35 + ip.y * 0.2) * 0.24 * bend;
      transformed.z += cos(uWind * 1.3 + ip.y * 0.3) * 0.15 * bend;`)};Dt(G),Dt(it);const fe=34,he=new ms(new tc(1,0),l("#8f7f86"),fe);he.castShadow=!0,he.receiveShadow=!0;let Kt=0;for(let w=0;w<fe;w++){const E=w%3===0,H=Ft(1.5,E?.5:6);if(!H||E&&oi(H.x,H.z)>5)continue;const D=.4+zt()*.9,J=zt(),tt=zt()*6,rt=zt(),ft=vn(H.x,H.z);Q.position.set(H.x,ft+D*.3,H.z),Q.scale.set(D*1.2,D*.8,D),Q.rotation.set(J,tt,rt),Q.updateMatrix(),he.setMatrixAt(Kt++,Q.matrix),d(H.x,H.z,D*1.05)}he.count=Kt,s.add(he);{const w=new qt;w.position.set(g.x,0,g.z),w.rotation.y=g.rot,w.scale.setScalar(g.scale);const E=l("#8b5a3c");[-4.2,4.2].forEach(rt=>w.add(c(new ge(.45,3.4,.45),E,{x:rt,y:1.7}))),w.add(c(new ge(10.4,3,.5),l("#1d1b3a"),{y:4.6})),w.add(c(new ge(10.8,.25,.7),l("#00c2d1"),{y:6.2})),w.add(c(new ge(10.8,.25,.7),l("#00c2d1"),{y:3}));const H=Yt(1024,288,(rt,ft,pt)=>{rt.fillStyle="#0b1022",rt.fillRect(0,0,ft,pt),rt.fillStyle="#7ee081",rt.font="600 34px ui-monospace, Menlo, monospace",rt.textAlign="left",rt.fillText("> visit --secure",40,62),rt.fillStyle="#ffffff",rt.font="800 66px ui-monospace, Menlo, monospace",rt.textAlign="center",rt.fillText("CallMeMrVirtuoso",ft/2,160),rt.fillStyle="#00e5ff",rt.font="700 50px ui-monospace, Menlo, monospace",rt.fillText(".github.io",ft/2,232)}),D=c(new hn(9.9,2.6),new De({map:H}),{y:4.6,z:.26,cast:!1});w.add(D);const J=c(new ri(.22,8,6),new De({color:"#7ee081"}),{x:4.6,y:6.6,cast:!1});w.add(J);const tt=new qt;tt.position.set(-4.4,6.9,0),tt.add(c(new ge(.9,.75,.4),l("#ffc93c"))),tt.add(c(new Pi(.3,.09,4,10,Math.PI),l("#b9bdd6"),{y:.37})),w.add(tt),dt.push(rt=>{J.visible=Math.sin(rt*4)>-.3,tt.rotation.y=Math.sin(rt*1.5)*.4}),s.add(w),w.updateMatrixWorld(),[-4.2,-1.4,1.4,4.2].forEach(rt=>{const ft=w.localToWorld(new B(rt,0,0));d(ft.x,ft.z,.65)}),window.__sign={...g,nColliders:h.length}}const le=[],ue=l("#ffd9c4",{roughness:1});for(let w=0;w<9;w++){const E=new qt;for(let J=0;J<4;J++)E.add(c(new Xn(1.5+zt()*1.5,0),ue,{x:J*2-3,y:zt()*1.2,z:zt()*2,cast:!1}));const H=zt()*Math.PI*2,D=95+zt()*45;E.position.set(Math.cos(H)*D,14+zt()*8,Math.sin(H)*D-10),le.push(E),s.add(E)}const Ee=ZM(P,d);s.add(Ee.group),dt.push((w,E)=>Ee.update(w,E));let $=99;const It=()=>($=$*16807%2147483647)/2147483647,ut={x:S.x+S.uz*5.5+S.ux*2,z:S.z-S.ux*5.5+S.uz*2},gt={x:u.x,z:u.z,y:0,speed:0,heading:0},Ct=iw({scene:s,colliders:h,land:oi,rand:It,waveY:F,dogHome:Ee.dogHome,meadow:T,forest:O,lighthouse:{x:b.x,z:b.z,top:b.y+10.8},pond:ut,sound:{woof:()=>Pe.woof(),bleat:()=>Pe.bleat(),yip:()=>Pe.yip()}});dt.push((w,E)=>Ct.update(w,E,gt));const Ut=ow({scene:s,house:Ee,animals:Ct,feedSpot:C,colliders:h,addCollider:d});dt.push((w,E)=>Ut.update(w,E,gt));let we=4242;const tn=()=>(we=we*16807%2147483647)/2147483647,dn=hw({max:220,rand:tn,pick:()=>{for(let w=0;w<40;w++){const E=-55+tn()*115,H=-75+tn()*125;if(oi(E,H)>3&&Math.hypot(E-u.x,H-u.z)>7)return[E,H]}return[20,-30]}});s.add(dn.points);{const w=Yt(1400,192,(H,D,J)=>{H.fillStyle="#3a1d34",H.font="800 54px system-ui, sans-serif",H.textAlign="center",H.fillText("CYBERSECURITY · SOC · IT SECURITY · IAM",D/2,70),H.font="600 40px system-ui, sans-serif",H.fillStyle="#6b3550",H.fillText("walk to a glowing zone and press E to explore",D/2,150)}),E=c(new hn(26,3.57),new De({map:w,transparent:!0,depthWrite:!1}),{x:0,y:.06,z:-3,cast:!1});E.rotation.x=-Math.PI/2,s.add(E)}const Se=new qt,We=new qt;Se.add(We),We.add(c(new ge(2,.75,3.4),l("#ff5a5f"),{y:.8})),We.add(c(new ge(1.7,.75,1.7),l("#fffaf2"),{y:1.5,z:-.3})),We.add(c(new ge(1.74,.45,1.2),l("#1d1b3a",{roughness:.3}),{y:1.55,z:-.25})),We.add(c(new ge(1.4,.45,1.74),l("#1d1b3a",{roughness:.3}),{y:1.55,z:-.3})),We.add(c(new ge(2.1,.25,.3),l("#fffaf2"),{y:.6,z:1.75})),We.add(c(new ge(2.1,.25,.3),l("#fffaf2"),{y:.6,z:-1.75}));const xi=new De({color:new Vt("#fff4a8").multiplyScalar(2.4)}),pa=new De({color:new Vt("#ff2340").multiplyScalar(1.6)}),_r=[];[-.65,.65].forEach(w=>{We.add(c(new ge(.4,.25,.1),xi,{x:w,y:.95,z:1.72,cast:!1})),We.add(c(new ge(.4,.2,.1),pa,{x:w,y:.95,z:-1.72,cast:!1}));const E=new hM("#fff1c9",45,28,.48,.6,1.5);E.position.set(w,.95,1.8),E.target.position.set(w*2,0,12),We.add(E,E.target),_r.push(E)}),We.add(c(new Te(.03,.03,1.4,4),l("#1d1b3a"),{x:.7,y:2.3,z:-1.2}));const zi=c(new ri(.16,8,6),l("#00c2d1",{emissive:"#00c2d1",emissiveIntensity:.6}),{x:.7,y:3,z:-1.2});We.add(zi);const Mr=[],So=new Te(.5,.5,.45,12);So.rotateZ(Math.PI/2);const ma=new ge(.5,.3,.3);[[-1.05,1.15],[1.05,1.15],[-1.05,-1.15],[1.05,-1.15]].forEach(([w,E],H)=>{const D=new qt;D.position.set(w,.5,E);const J=c(So,l("#25233f"));J.add(c(ma,l("#e8e2d0"),{cast:!1})),D.add(J),Se.add(D),Mr.push({pivot:D,w:J,front:H<2})}),Se.rotation.order="YXZ",s.add(Se);const Zi=c(new Wi(1.9,20),new De({color:"#000",transparent:!0,opacity:.18,depthWrite:!1}),{y:.07,cast:!1});Zi.rotation.x=-Math.PI/2,s.add(Zi),Se.position.set(_.x,0,_.z),Se.rotation.y=_.heading;const Ms=(w,E)=>Math.atan2(Math.sin(E-w),Math.cos(E-w)),_e={x:_.x,z:_.z,y:0,vy:0,grounded:!0,pitch:0,heading:_.heading,speed:0,steer:0},Ii=d(_e.x,_e.z,1.75),qe=Tw();s.add(qe.group);const vi=c(new Wi(.55,16),new De({color:"#2a0f18",transparent:!0,opacity:.22,depthWrite:!1}),{y:.06,cast:!1});vi.rotation.x=-Math.PI/2,s.add(vi);const W={x:u.x,z:u.z,y:0,vx:0,vz:0,vy:0,heading:0,grounded:!0,inCar:!1,speed:0,run:!1,airT:0},bo=3.6,N=7.5,nt=8.5,at=26,lt=.45,et=Qb({scene:s,land:oi,audio:Pe,layout:M}),Nt=new Set([Ii,Ut.collider]);h.forEach(w=>{Nt.has(w)||et.addStaticCircle(w.x,w.z,w.r)});const Wt=(w,E,H)=>{const D=d(w,E,H);return et.addStaticCircle(w,E,H),D},$t=M.bowling,ie=[...et.barriers,{x:$t.x,z:$t.zPins-2.3,ry:0,hx:2.15,hz:.25},{x:$t.x-2.05,z:$t.zPins-.8,ry:0,hx:.2,hz:1.75},{x:$t.x+2.05,z:$t.zPins-.8,ry:0,hx:.2,hz:1.75}];function xe(w,E){let H=!1;for(const D of ie){const J=Math.cos(D.ry),tt=Math.sin(D.ry),rt=w.x-D.x,ft=w.z-D.z,pt=rt*J-ft*tt,vt=rt*tt+ft*J,Gt=Math.max(-D.hx,Math.min(D.hx,pt)),yt=Math.max(-D.hz,Math.min(D.hz,vt));let Rt=pt-Gt,oe=vt-yt,ot=Math.hypot(Rt,oe);if(ot>=E)continue;if(H=!0,ot<1e-4){const ee=D.hx-Math.abs(pt),me=D.hz-Math.abs(vt);ee<me?(Rt=Math.sign(pt)||1,oe=0,ot=0):(Rt=0,oe=Math.sign(vt)||1,ot=0);const ke=ee<me?Math.sign(Rt)*(D.hx+E):pt,Cn=ee<me?vt:Math.sign(oe)*(D.hz+E);w.x=D.x+ke*J+Cn*tt,w.z=D.z-ke*tt+Cn*J;continue}const xt=Gt+Rt/ot*E,Zt=yt+oe/ot*E;w.x=D.x+xt*J+Zt*tt,w.z=D.z-xt*tt+Zt*J}return H}const ve=t2(s,260),ce=e2(s,90),Fe=n2(s,48);qe.onStep=(w,E)=>{if(W.inCar)return;const H=Math.cos(W.heading)*.16*w,D=-Math.sin(W.heading)*.16*w,J=Ie&&Ie.id==="lighthouse",tt=J?W.y:Ue(W.x,W.z);!J&&tt>Ai-.05&&ce.add(W.x+H,tt+.03,W.z+D,W.heading),Pe.step(E,je(W.x,W.z)),E&&Fe.emit(W.x,tt+.12,W.z,-W.vx*.15,-W.vz*.15,2,.7)};const je=(w,E)=>Ie&&Ie.id==="lighthouse"?"stone":Pt(w,E)||Tt(w,E)>.05?"wood":vn(w,E)<-.04||oi(w,E)<2.5?"sand":"grass",Ue=(w,E)=>Pt(w,E)?.08:Math.max(vn(w,E),Tt(w,E)),An=(w,E)=>Zf(w,E)||Pt(w,E),Me={forward:!1,backward:!1,left:!1,right:!1,run:!1},ae={KeyW:"forward",ArrowUp:"forward",KeyS:"backward",ArrowDown:"backward",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",ShiftLeft:"run",ShiftRight:"run"};let $e=!1;addEventListener("keydown",w=>{if(si!=="world"){si==="loading"&&w.key==="Enter"&&!zl.disabled&&(Pe.start(),Vl());return}if(!(w.target&&/INPUT|TEXTAREA/.test(w.target.tagName))){if(ae[w.code]&&(Me[ae[w.code]]=!0,w.code.startsWith("Arrow")&&w.preventDefault()),w.code==="Space"&&(w.preventDefault(),w.repeat||($e=!0)),(w.code==="KeyE"||w.code==="Enter")&&!w.repeat){if(w.code==="Enter"&&document.activeElement&&document.activeElement.tagName==="BUTTON")return;w.preventDefault(),ga()}w.code==="KeyR"&&!w.repeat&&j0(),w.code==="Escape"&&(!rc.hidden||!Zu.hidden?ua():Ie?ts():(Ds(!0),Di())),w.code==="KeyM"&&!w.repeat&&B0(),w.code==="KeyQ"&&!w.repeat&&fd(),w.code==="KeyC"&&!w.repeat&&(qs=qs==="top"?"chase":"top",Xs=qs==="top",ei=null)}}),addEventListener("keyup",w=>{ae[w.code]&&(Me[ae[w.code]]=!1)}),addEventListener("blur",()=>Object.keys(Me).forEach(w=>Me[w]=!1));const ze=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,on=s2({dom:sa,camera:i,scene:s,getCenter:()=>W.inCar?{x:_e.x,y:_e.y,z:_e.z}:{x:W.x,y:W.y,z:W.z},onTap:()=>{Qu++,Qi&&ga()}}),ti=be("#jump-btn");ti.addEventListener("touchstart",w=>{w.preventDefault(),$e=!0,ti.classList.add("on")},{passive:!1}),ti.addEventListener("touchend",()=>ti.classList.remove("on")),ti.addEventListener("click",()=>{$e=!0,ti.blur()});let ln=null;function Eo(w){const E=Rs[w];be("#panel-title").textContent=`${E.icon} ${E.title}`,be("#panel-body").innerHTML=E.html,ps.style.borderColor=x[w].color,ps.classList.add("open"),ps.setAttribute("aria-hidden","false"),ps.scrollTop=0,ps.dataset.zone=w,ln=w,Pe.blip()}be("#panel-close").addEventListener("click",()=>Ds(!0)),k0=()=>{ln=null,ps.dataset.zone=""};const Xe=be("#dialog"),yi=be("#dialog-text");let Ji=0;function jn(w){yi.textContent=w,Xe.hidden=!1,Xe.classList.remove("pop"),Xe.offsetWidth,Xe.classList.add("pop"),Ji=7}function Di(){Xe.hidden=!0,Ji=0}be("#dialog-close").addEventListener("click",Di);const Ni=[...Object.values(x).map(w=>({id:w.key,get x(){return w.x},get z(){return w.z},r:f+.4,label:`Read: ${w.label}`,icon:Rs[w.key].icon,act:()=>ln===w.key?Ds(!0):Eo(w.key)})),{id:"car",get x(){return _e.x},get z(){return _e.z},r:3.4,label:"Drive the car",icon:"🚗",act:()=>td()},{id:"gardener",get x(){return Ut.x},get z(){return Ut.z},r:4.5,label:"Talk to the gardener",icon:"💬",act:()=>{jn(Ut.talk()),Pe.blip()}},{id:"bowling",x:$t.x,z:$t.zBall+2.6,r:2.6,label:"Reset the pins",icon:"🎳",act:()=>{et.bowling.reset(),On("🎳 Pins reset. Kick the ball!")}}],Ui=be("#interact"),W0=be("#interact-label"),q0=be("#interact-icon");let Qi=null;const X0={id:"exit",label:"Get out of the car",icon:"🚶",act:()=>To()};let Qu=0;function Y0(){if(W.inCar)return Math.abs(_e.speed)<6?X0:null;if(Ie)return Ie.prompt?Ie.prompt():null;let w=null,E=1/0;if(!Xe.hidden){const H=Ni.find(D=>D.id==="gardener");if(H&&Math.hypot(W.x-H.x,W.z-H.z)<H.r)return H}for(const H of Ni){if(H.when&&!H.when())continue;const D=Math.hypot(W.x-H.x,W.z-H.z);D<H.r&&D<E&&W.y<2.6+Math.max(0,vn(H.x,H.z))&&(w=H,E=D)}return w}function ga(){return si!=="world"||!Qi?!1:(Ui.classList.remove("press"),Ui.offsetWidth,Ui.classList.add("press"),Qi.act(),!0)}Ui.addEventListener("click",()=>{ga(),Ui.blur()});function td(){W.inCar=!0,W.vx=W.vz=0,qe.group.visible=!1,vi.visible=!1,Ds(),Di(),Pe.door(),_e.speed=0,On("🚗 W/↑ to drive · E to get out",2200)}function To(){const w=_e.heading,E=Math.cos(w),H=-Math.sin(w),D=Math.sin(w),J=Math.cos(w);let rt=[[-E*2.4,-H*2.4],[E*2.4,H*2.4],[-D*3.2,-J*3.2],[D*3.2,J*3.2]].map(([ft,pt])=>({x:_e.x+ft,z:_e.z+pt})).find(ft=>An(ft.x,ft.z)&&!h.some(pt=>pt!==Ii&&Math.hypot(ft.x-pt.x,ft.z-pt.z)<pt.r+lt));rt||(rt={x:_e.x-E*2.4,z:_e.z-H*2.4}),Object.assign(W,{x:rt.x,z:rt.z,y:Ue(rt.x,rt.z),vy:0,vx:0,vz:0,grounded:!0,inCar:!1,heading:w}),_e.speed=0,_e.steer=0,qe.group.visible=!0,vi.visible=!0,Pe.door(),Pe.engine(0,!1)}const wr=(w,E=3)=>{const H=w.x-u.x,D=w.z-u.z,J=Math.hypot(H,D)||1;return{x:w.x-H/J*E,z:w.z-D/J*E,heading:Math.atan2(H,D)}},ed={x:P.x+Math.sin(P.rot)*11,z:P.z+Math.cos(P.rot)*11},Sr={spawn:{label:"Start",icon:"🏁",x:u.x,z:u.z,heading:0},about:{label:"About",icon:Rs.about.icon,...wr(x.about)},experience:{label:"Experience",icon:Rs.experience.icon,...wr(x.experience)},timeline:{label:"Timeline",icon:"🗓️",x:p[0][0]-1,z:p[0][1]+4.5,heading:Math.PI/2},education:{label:"Education",icon:Rs.education.icon,...wr(x.education)},skills:{label:"Skills",icon:Rs.skills.icon,...wr(x.skills)},projects:{label:"Projects",icon:Rs.projects.icon,...wr(x.projects)},contact:{label:"Contact",icon:Rs.contact.icon,...wr(x.contact)},cabin:{label:"Cabin & garden",icon:"🏡",x:ed.x,z:ed.z,heading:P.rot+Math.PI},lighthouse:{label:"Lighthouse",icon:"🗼",x:b.x+4,z:b.z+7,heading:Math.PI},bowling:{label:"Bowling lane",icon:"🎳",x:$t.x+1.6,z:$t.zBall+3,heading:Math.PI},playground:{label:"Tire wall & cones",icon:"🚧",x:6,z:12.5,heading:.6},car:{label:"Car",icon:"🚗",get x(){return _e.x-Math.cos(_e.heading)*2.6},get z(){return _e.z+Math.sin(_e.heading)*2.6},get heading(){return _e.heading}},dock:{label:"Dock",icon:"⛵",x:S.x-S.ux*9,z:S.z-S.uz*9,heading:S.angle},soccer:{label:"Soccer pitch",icon:"⚽",x:M.soccer.x-4,z:M.soccer.z+1.5,heading:Math.PI/2},campfire:{label:"Campfire",icon:"🔥",x:q.x+1.5,z:q.z-5.5,heading:0},islet:{label:"Palm islet",icon:"🌴",x:Kn.x-3,z:Kn.z-4,heading:0}};function xa(w){const E=Sr[w]||x[w]&&Sr[w];return E?(W.inCar&&To(),Ie&&ts(!0),Ds(),Di(),ua(),Object.assign(W,{x:E.x,z:E.z,y:Ue(E.x,E.z),vx:0,vz:0,vy:0,grounded:!0,heading:E.heading||0}),Xs=!0,ei=null,qs="top",On(`${E.icon} ${E.label}`,1200),!0):!1}function j0(){W.inCar&&(Object.assign(_e,{x:_.x,z:_.z,y:0,vy:0,grounded:!0,heading:_.heading,speed:0}),To()),xa("spawn")}const hi={x0:-80,x1:90,z0:-95,z1:75},mc=be("#map-canvas"),va=be("#map-markers"),gc=be("#map-player");let nd=!1;const xc=(w,E)=>[(w-hi.x0)/(hi.x1-hi.x0)*100,(E-hi.z0)/(hi.z1-hi.z0)*100];function $0(){const w=mc.width,E=mc.height,H=mc.getContext("2d"),D=H.createImageData(w,E);for(let J=0;J<E;J++)for(let tt=0;tt<w;tt++){const rt=hi.x0+(tt+.5)/w*(hi.x1-hi.x0),ft=hi.z0+(J+.5)/E*(hi.z1-hi.z0),pt=oi(rt,ft),vt=vn(rt,ft,pt),Gt=(J*w+tt)*4;let yt;pt<-6?yt=[36,120,128]:pt<0?yt=[70,170,165]:vt<-.2||pt<2.5?yt=[240,205,150]:vt>1.2?yt=[170,110,70]:yt=[214,140-Math.min(40,pt)*.6,70],D.data[Gt]=yt[0],D.data[Gt+1]=yt[1],D.data[Gt+2]=yt[2],D.data[Gt+3]=pt<-14?0:255}H.putImageData(D,0,0),H.strokeStyle="rgba(255,240,215,0.75)",H.lineWidth=2,H.setLineDash([4,4]),A.forEach(J=>{H.beginPath(),J.pts.forEach(([tt,rt],ft)=>{const[pt,vt]=xc(tt,rt);ft?H.lineTo(pt*w/100,vt*E/100):H.moveTo(pt*w/100,vt*E/100)}),H.stroke()}),nd=!0}Object.entries(Sr).forEach(([w,E])=>{if(w==="spawn")return;const H=document.createElement("button");H.className="map-marker",H.type="button",H.dataset.place=w,H.innerHTML=`<span>${E.icon}</span><em>${E.label}</em>`,H.setAttribute("aria-label",`Go to ${E.label}`),H.addEventListener("click",()=>xa(w)),va.appendChild(H)});function K0(){va.querySelectorAll(".map-marker").forEach(D=>{const J=Sr[D.dataset.place],[tt,rt]=xc(J.x,J.z);D.style.left=`${tt}%`,D.style.top=`${rt}%`});const w=[],E=2,H=[...va.querySelectorAll(".map-marker")].map(D=>D.getBoundingClientRect());va.querySelectorAll(".map-marker").forEach((D,J)=>{D.classList.remove("nolabel");const tt=D.querySelector("em").getBoundingClientRect(),rt=ft=>tt.left<ft.right+E&&tt.right>ft.left-E&&tt.top<ft.bottom+E&&tt.bottom>ft.top-E;w.some(rt)||H.some((ft,pt)=>pt!==J&&rt(ft))?D.classList.add("nolabel"):w.push(tt)})}const Z0=be("#menu-places");["spawn","about","experience","timeline","education","skills","projects","contact","cabin","lighthouse","bowling","soccer","campfire","playground","car","dock","islet"].forEach(w=>{const E=Sr[w],H=document.createElement("button");H.type="button",H.className="menu-place",H.dataset.place=w,H.innerHTML=`<span>${E.icon}</span> ${E.label}`,H.addEventListener("click",()=>xa(w)),Z0.appendChild(H)}),V0=w=>{w==="map"&&(nd||$0(),K0())};let Ie=null;const In={k:0,pos:new B,look:new B},ya=be("#act-stats"),br=be("#fade"),J0=new B,vc=new B,fn=(w,E)=>w+Math.random()*(E-w);let _a="high";function id(w,E){ya.hidden=!1,be(`#${w}-stat`).hidden=!1,be(`#${w}-count`).textContent=String(E),ya.classList.remove("bump"),ya.offsetWidth,ya.classList.add("bump")}function Ma(w){Ie&&ts(!0),Ds(),Di(),Object.assign(W,{vx:0,vz:0,vy:0,speed:0,run:!1,grounded:!0}),$e=!1,w.t=0,Ie=w}function ts(w=!1){const E=Ie;E&&(Ie=null,qe.setPose(null),E.end&&E.end(w),W.y=Ue(W.x,W.z),W.vy=0,W.grounded=!0)}function Q0(w,E,H){const D=Ie;D.t+=w;const J=!E.joy||on.state.sim||on.state.moved||performance.now()-on.state.t0>320;if(D.leaveOnMove!==!1&&D.t>.35&&(E.mag>.35&&J||$e)){$e=!1,ts(),wc(w,E);return}if($e=!1,D.update(w,E,H),Ie!==D){wc(w,{x:0,z:0,mag:0,run:!1});return}const tt=D.floorY!=null?D.floorY:Ue(W.x,W.z);qe.group.position.set(W.x,W.y,W.z),qe.group.rotation.y=W.heading,qe.update(w,{speed:W.speed,air:!1,vy:0}),vi.position.set(W.x,tt+.05,W.z),vi.scale.setScalar(1),et.setActor("player",W.x,W.y,W.z,W.heading,0,0,D.solid===!0)}const tm=Yt(32,32,w=>{const E=w.createRadialGradient(16,16,0,16,16,16);E.addColorStop(0,"#fff"),E.addColorStop(.35,"rgba(255,255,255,.9)"),E.addColorStop(1,"rgba(255,255,255,0)"),w.fillStyle=E,w.fillRect(0,0,32,32)});function sd(w,{size:E,gravity:H=0,drag:D=0,additive:J=!1,square:tt=!1}){const rt=new Float32Array(w*3).fill(-999),ft=new Float32Array(w*3).fill(1),pt=new Float32Array(w*3),vt=new Float32Array(w),Gt=new Float32Array(w).fill(1),yt=new Qe;yt.setAttribute("position",new un(rt,3)),yt.setAttribute("color",new un(ft,3));const Rt=new c0({size:E,vertexColors:!0,map:tt?null:tm,transparent:!0,depthWrite:!1,blending:J?Bs:mr,toneMapped:!J,sizeAttenuation:!0}),oe=new h0(yt,Rt);oe.frustumCulled=!1,s.add(oe);let ot=0,xt=0,Zt=w;return{points:oe,setLimit(ee){Zt=Math.max(1,Math.min(w,ee))},emit(ee,me,ke,Cn,nn,kt,de,Oe){const Ae=ot;ot=(ot+1)%Zt,rt[Ae*3]=ee,rt[Ae*3+1]=me,rt[Ae*3+2]=ke,pt[Ae*3]=Cn,pt[Ae*3+1]=nn,pt[Ae*3+2]=kt,vt[Ae]=Gt[Ae]=de,Oe&&(ft[Ae*3]=Oe.r,ft[Ae*3+1]=Oe.g,ft[Ae*3+2]=Oe.b),xt++},update(ee){if(xt){xt=0;for(let me=0;me<w;me++){if(vt[me]<=0)continue;if(vt[me]-=ee,vt[me]<=0){rt[me*3+1]=-999;continue}xt++,pt[me*3+1]-=H*ee;const ke=1-Math.min(1,D*ee);pt[me*3]*=ke,pt[me*3+2]*=ke,rt[me*3]+=pt[me*3]*ee,rt[me*3+1]+=pt[me*3+1]*ee,rt[me*3+2]+=pt[me*3+2]*ee}yt.attributes.position.needsUpdate=!0,yt.attributes.color.needsUpdate=!0}},get alive(){return xt}}}const Ao=(()=>{const w=Yt(64,64,J=>{J.fillStyle="#ff4f7b",J.strokeStyle="#fff",J.lineWidth=5,J.beginPath(),J.moveTo(32,56),J.bezierCurveTo(4,36,4,12,20,10),J.bezierCurveTo(28,9,32,16,32,20),J.bezierCurveTo(32,16,36,9,44,10),J.bezierCurveTo(60,12,60,36,32,56),J.closePath(),J.stroke(),J.fill()}),E=[];for(let J=0;J<10;J++){const tt=new df(new fu({map:w,transparent:!0,depthWrite:!1}));tt.visible=!1,tt.scale.setScalar(.55),s.add(tt),E.push({s:tt,life:0,x:0,y:0,z:0,ph:0})}let H=0,D=0;return{emit(J,tt,rt){const ft=E[H];H=(H+1)%E.length,Object.assign(ft,{life:1.3,x:J+fn(-.3,.3),y:tt,z:rt+fn(-.3,.3),ph:fn(0,6)}),ft.s.visible=!0,D++},update(J){for(const tt of E){if(tt.life<=0)continue;if(tt.life-=J,tt.life<=0){tt.s.visible=!1;continue}const rt=1-tt.life/1.3;tt.s.position.set(tt.x+Math.sin(rt*6+tt.ph)*.15,tt.y+rt*1.4,tt.z),tt.s.scale.setScalar(.35+Math.min(1,rt*4)*.3),tt.s.material.opacity=Math.min(1,tt.life*2)}},get emitted(){return D},get visible(){return E.filter(J=>J.life>0).length}}})(),yc=(()=>{const w=S.ux,E=S.uz,H={x:S.x+w*8.7,z:S.z+E*8.7},D=new qt;D.visible=!1,s.add(D);const J=2.5,tt=c(new Te(.014,.03,J,6),l("#2d2540"),{y:J/2-.3,cast:!1});D.add(tt),D.add(c(new Te(.045,.045,.38,8),l("#c8894e"),{y:-.12,cast:!1})),D.add(c(new Te(.07,.07,.06,10),l("#d8452f"),{y:.12,z:.06,cast:!1}));const rt=12,ft=new Qe;ft.setAttribute("position",new un(new Float32Array(rt*3),3));const pt=new l0(ft,new na({color:"#fffaf2",transparent:!0,opacity:.85}));pt.frustumCulled=!1,pt.visible=!1,s.add(pt);const vt=new qt;vt.visible=!1,s.add(vt),vt.add(c(new ri(.15,10,6,0,Math.PI*2,0,Math.PI/2),new Bn({color:"#ff3b3b",emissive:"#ff2020",emissiveIntensity:.4}),{cast:!1})),vt.add(c(new ri(.15,10,6,0,Math.PI*2,Math.PI/2,Math.PI/2),l("#fffaf2"),{cast:!1})),vt.add(c(new Te(.02,.02,.2,5),l("#1d1b3a"),{y:.2,cast:!1}));const Gt=c(new Gs(.2,.32,20),new De({color:"#ffffff",transparent:!0,opacity:0,depthWrite:!1}),{cast:!1});Gt.rotation.x=-Math.PI/2,s.add(Gt);let yt=9;const Rt=new qt;Rt.visible=!1,s.add(Rt);const oe=l("#f2a33a",{emissive:"#7a3a00",emissiveIntensity:.25}),ot=c(new ri(.3,10,7),oe);ot.scale.set(1,.55,.32),Rt.add(ot);const xt=c(new pi(.18,.3,4),oe,{x:-.36});xt.rotation.z=Math.PI/2,Rt.add(xt),Rt.add(c(new ri(.035,6,4),l("#1d1b3a"),{x:.2,y:.05,z:.09}));const Zt=["a speckled trout","a sunny bluegill","a grumpy catfish","a shiny perch","a rainbow trout","a tiny minnow","a walleye","a smallmouth bass","a golden carp"],ee=["#c8b46a","#5aa3d8","#7a6a58","#e8b33a","#e8708a","#c8c8d8","#b8a050","#6a8a4a","#f2a33a"],me=be("#fish-meter"),ke=be("#fm-zone"),Cn=be("#fm-needle"),nn=be("#fm-title");nn.textContent=ze?"Fish on! Tap when the needle is in the green":"Fish on! Press E when the needle is in the green";let kt="off",de=0,Oe=0,Ae=0,pn=0,Nn=.5,wn=.5,Oi=.22,$s=0,re=.55;const se=new B,Ye=new B,Be=new B,Rn=new B,an=new B,Po=new B(0,1,0),Ks=new B,Zs=new $i;let La="";const Js=new B(H.x-w*6+E*2.8,4.6,H.z-E*6-w*2.8),Lo=new B(H.x+w*3.5,-.2,H.z+E*3.5),zo={id:"fish-cast",label:"Cast the line",icon:"🎣",act:()=>Mm()},ym={id:"fish-wait",label:"Waiting for a bite… (reel in)",icon:"⏳",act:()=>{On("Too early, nothing on the line yet.",1600),Mi("reel")}},_m={id:"fish-reel",label:"Reel in!",icon:"🐟",act:()=>wm()};function Mi(Hn){kt=Hn,de=0,me.hidden=Hn!=="bite"}function Mm(){if(kt!=="idle")return;Mi("cast"),Pe.whoosh();const Hn=fn(-1.6,1.6),ui=fn(4.5,6.5);se.set(H.x+w*ui+E*Hn,Ai,H.z+E*ui-w*Hn)}function wm(){if(kt!=="bite")return;if(Math.abs(Nn-wn)<=Oi/2+.02){Ae++;const ui=Math.floor(Math.random()*Zt.length);La=Zt[ui],oe.color.set(ee[ui]),Pe.caught(),Mi("catch"),Ye.copy(an),Rt.visible=!0,vt.visible=!1,za(an.x,an.z)}else pn++,Pe.miss(),On("🐟 It got away! Wait for the needle to hit the green.",2e3),Mi("reel")}function za(Hn,ui){Gt.position.set(Hn,Ai+F(Hn,ui,performance.now()/1e3)*.22+.04,ui),yt=0,Pe.splash(.8)}function Sm(){Ma({id:"fish",floorY:.08,update:bm,cam:()=>({pos:Js,look:Lo}),prompt:()=>kt==="idle"?zo:kt==="wait"?ym:kt==="bite"?_m:null,end(){Mi("off"),D.visible=pt.visible=vt.visible=Rt.visible=!1,W.x-=w*.7,W.z-=E*.7}}),Object.assign(W,{x:H.x,z:H.z,y:.08,heading:S.angle}),qe.setPose("dock"),D.visible=!0,pt.visible=!0,vt.visible=!0,Mi("idle"),re=.55,On(ze?"🎣 Tap to cast · drag to stand up":"🎣 E to cast · move to stand up",2600)}function bm(Hn,ui,Io){de+=Hn;let Tr=.6;kt==="cast"?Tr=de<.32?2:.25:kt==="wait"?Tr=.5:kt==="bite"?Tr=.35+Math.sin(Io*30)*.06:kt==="catch"?Tr=1.3:kt==="reel"&&(Tr=.9),re+=(Tr-re)*Math.min(1,Hn*(kt==="cast"?14:6)),qe.setPose(kt==="cast"&&de<.4?"cast":"dock"),qe.group.position.set(W.x,W.y,W.z),qe.group.rotation.y=W.heading,qe.group.updateMatrixWorld(!0),qe.hand.localToWorld(Rn.set(0,-.62,.05)),Ks.set(w*Math.cos(re),Math.sin(re),E*Math.cos(re)).normalize(),D.position.copy(Rn),D.quaternion.copy(Zs.setFromUnitVectors(Po,Ks)),Be.copy(Rn).addScaledVector(Ks,J-.3);const Ec=(mn,Ar)=>Ai+F(mn,Ar,Io)*.22;if(kt==="idle")an.copy(Be).y-=.55;else if(kt==="cast")if(de<.38)an.copy(Be).y-=.4;else{const mn=Math.min(1,(de-.38)/.7);(mn===0||!Ye.lengthSq())&&Ye.copy(Be),an.lerpVectors(Be,se,mn),an.y=Be.y+(Ec(se.x,se.z)-Be.y)*mn+Math.sin(mn*Math.PI)*2.2,mn>=1&&(za(se.x,se.z),Mi("wait"),Oe=fn(1.6,3.8))}else if(kt==="wait")an.set(se.x,Ec(se.x,se.z)+Math.sin(Io*2.4)*.03,se.z),de>Oe&&(Mi("bite"),wn=fn(.22,.78),Oi=.22,$s=fn(0,6),Pe.splash(.5),za(se.x,se.z),On(ze?"🐟 Bite! Tap in the green!":"🐟 Bite! Press E in the green!",1500));else if(kt==="bite")an.set(se.x+Math.sin(Io*17)*.06,Ec(se.x,se.z)-.12-Math.abs(Math.sin(Io*9))*.12,se.z),Nn=.5+.5*Math.sin(de*4.4+$s),Cn.style.left=`${Nn*100}%`,ke.style.left=`${(wn-Oi/2)*100}%`,ke.style.width=`${Oi*100}%`,de>4&&(pn++,Pe.miss(),On("🐟 Too slow, it got away!",1800),Mi("reel")),Math.random()<Hn*3&&za(an.x,an.z);else if(kt==="catch"){const mn=Math.min(1,de/.9);Rt.position.lerpVectors(Ye,J0.set(W.x+w*.5,W.y+1.6,W.z+E*.5),mn),Rt.position.y+=Math.sin(mn*Math.PI)*2.2,Rt.rotation.set(0,W.heading+Math.PI/2,Math.sin(de*30)*.5),an.copy(Be).y-=.4,mn>=1&&(Rt.visible=!1,vt.visible=!0,id("fish",Ae),On(`🐟 You caught ${La}! (${Ae} caught)`,2600),Mi("idle"))}else if(kt==="reel"){const mn=Math.min(1,de/.5);vc.copy(Be),vc.y-=.55,an.lerp(vc,mn),mn>=1&&Mi("idle")}vt.position.copy(an);const Tc=ft.attributes.position.array,Tm=kt==="wait"||kt==="bite"?.6:.08;for(let mn=0;mn<rt;mn++){const Ar=mn/(rt-1);Tc[mn*3]=Be.x+(an.x-Be.x)*Ar,Tc[mn*3+1]=Be.y+(an.y+.2-Be.y)*Ar-Math.sin(Ar*Math.PI)*Tm,Tc[mn*3+2]=Be.z+(an.z-Be.z)*Ar}ft.attributes.position.needsUpdate=!0}function Em(Hn){if(yt<.8){yt+=Hn;const ui=yt/.8;Gt.scale.setScalar(1+ui*3),Gt.material.opacity=(1-ui)*.8}}return Ni.push({id:"fish",x:H.x-w*1.8,z:H.z-E*1.8,r:2.4,label:"Go fishing",icon:"🎣",act:Sm}),{seat:H,tick:Em,debug:()=>({state:kt,needle:Nn,zone:[wn,Oi],count:Ae,misses:pn,rod:D.visible,bobberY:an.y,pose:qe.pose})}})();(()=>{let w=0,E=!1,H=0;const D={id:"pet-more",label:"More pets!",icon:"💕",act:()=>{if(Ct.petMore(2.5))for(let tt=0;tt<3;tt++)Ao.emit(Ct.dog.x,Ue(Ct.dog.x,Ct.dog.z)+.9,Ct.dog.z)}};function J(){const tt=Ct.dog;W.heading=Math.atan2(tt.x-W.x,tt.z-W.z);const rt=W.x+Math.sin(W.heading)*1.15,ft=W.z+Math.cos(W.heading)*1.15;Ct.petDog(rt,ft,W.x,W.z,4.5),E=!1,w=0,H++,Ma({id:"pet",solid:!0,update(pt){const vt=Ct.dog;W.heading+=Ms(W.heading,Math.atan2(vt.x-W.x,vt.z-W.z))*Math.min(1,pt*6),vt.arrived&&(qe.setPose("crouch"),E||(E=!0,On("🐶 Who’s a good dog? Yes you are!",2e3)),w-=pt,w<=0&&(w=_a==="low"?.4:.26,Ao.emit(vt.x,Ue(vt.x,vt.z)+.9,vt.z))),(vt.mode!=="pet"||Ie.t>12)&&ts()},prompt:()=>Ct.dog.arrived?D:null,end(){Ct.stopPet()}})}return Ni.push({id:"dog",get x(){return Ct.dog.x},get z(){return Ct.dog.z},r:3.2,label:"Pet the dog",icon:"🐶",when:()=>Ct.dog.mode!=="pet",act:J}),{get sessions(){return H}}})();const _c=(()=>{const w=et.soccer,E=w.goal;let H=0,D=0,J=0,tt=0,rt=0;const ft=new qt;s.add(ft);const pt=l("#fffaf2",{roughness:.5}),vt=Math.max(0,vn(E.x,E.z));[-1,1].forEach(re=>ft.add(c(new Te(.08,.08,E.h,8),pt,{x:E.x,y:vt+E.h/2,z:E.z+re*E.w/2})));const Gt=c(new Te(.08,.08,E.w+.16,8),pt,{x:E.x,y:vt+E.h,z:E.z});Gt.rotation.x=Math.PI/2,ft.add(Gt),[-1,1].forEach(re=>{const se=c(new Te(.04,.04,E.d,6),pt,{x:E.x+E.d/2,y:vt+.04,z:E.z+re*E.w/2});se.rotation.z=Math.PI/2,ft.add(se)});const yt=c(new Te(.04,.04,E.w,6),pt,{x:E.x+E.d,y:vt+.04,z:E.z});yt.rotation.x=Math.PI/2,ft.add(yt);const Rt=Yt(64,64,re=>{re.clearRect(0,0,64,64),re.strokeStyle="#ffffff",re.lineWidth=3;for(let se=0;se<=64;se+=16)re.beginPath(),re.moveTo(se,0),re.lineTo(se,64),re.stroke(),re.beginPath(),re.moveTo(0,se),re.lineTo(64,se),re.stroke()});Rt.wrapS=Rt.wrapT=Wl;const oe=(re,se)=>{const Ye=Rt.clone();return Ye.repeat.set(re,se),Ye.needsUpdate=!0,new De({map:Ye,transparent:!0,alphaTest:.3,side:zn,color:"#e8e4f0"})},ot=new ye(new hn(E.w,E.h),oe(E.w*2.5,E.h*2.5));ot.position.set(E.x+E.d,vt+E.h/2,E.z),ot.rotation.y=Math.PI/2,ft.add(ot),[-1,1].forEach(re=>{const se=new ye(new hn(E.d,E.h),oe(E.d*2.5,E.h*2.5));se.position.set(E.x+E.d/2,vt+E.h/2,E.z+re*E.w/2),ft.add(se)});const xt=new ye(new hn(E.d,E.w),oe(E.d*2.5,E.w*2.5));xt.position.set(E.x+E.d/2,vt+E.h,E.z),xt.rotation.set(-Math.PI/2,0,Math.PI/2),ft.add(xt);const Zt=new De({color:"#fff6e8",transparent:!0,opacity:.8,depthWrite:!1}),ee=(re,se,Ye,Be)=>{const Rn=c(new hn(Ye,Be),Zt,{x:re,y:Math.max(0,vn(re,se))+.04,z:se,cast:!1});Rn.rotation.x=-Math.PI/2,Rn.renderOrder=1,ft.add(Rn)},me=5.2;ee(E.x,E.z,.12,12),ee(E.x-me,E.z,.12,9),ee(E.x-me/2,E.z-4.5,me,.12),ee(E.x-me/2,E.z+4.5,me,.12);const ke=c(new Wi(.2,12),Zt,{x:w.spot.x,y:.04,z:w.spot.z,cast:!1});ke.rotation.x=-Math.PI/2,ft.add(ke),[-1,1].forEach(re=>{const se=E.x,Ye=E.z+re*6;ft.add(c(new Te(.03,.03,1.3,5),pt,{x:se,y:.65,z:Ye}));const Be=c(new hn(.45,.3),new Bn({color:"#ff4f5a",side:zn}),{x:se-.23,y:1.15,z:Ye,cast:!1});ft.add(Be),dt.push(Rn=>{Be.rotation.y=Math.sin(Rn*3+re)*.35})});const Cn=document.createElement("canvas");Cn.width=256,Cn.height=96;const nn=new Gl(Cn);nn.colorSpace=Zn;const kt=new De({map:nn,toneMapped:!1});kt.color.setScalar(1.25);const de=new ye(new hn(2.4,.9),kt);de.position.set(E.x+.1,vt+E.h+.75,E.z),de.rotation.y=-Math.PI/2,ft.add(de),ft.add(c(new ge(.12,.6,.08),l("#2d2540"),{x:E.x+.26,y:vt+E.h+.25,z:E.z}));function Oe(re){const se=Cn.getContext("2d");se.fillStyle=re?"#3ddc84":"#120c22",se.fillRect(0,0,256,96),se.strokeStyle="#ffcf7a",se.lineWidth=5,se.strokeRect(4,4,248,88),se.textAlign="center",se.fillStyle=re?"#0b2a17":"#ffcf7a",se.font='bold 30px "Trebuchet MS", sans-serif',se.fillText(re?"GOAL!":"GOALS",128,40),se.fillStyle=re?"#0b2a17":"#7ff0d8",se.font='bold 40px "Trebuchet MS", sans-serif',se.fillText(String(H),128,82),nn.needsUpdate=!0}Oe(!1),[-1,1].forEach(re=>d(E.x,E.z+re*E.w/2,.18)),ie.push({x:E.x+E.d,z:E.z,ry:0,hx:.08,hz:E.w/2+.1}),[-1,1].forEach(re=>ie.push({x:E.x+E.d/2,z:E.z+re*E.w/2,ry:0,hx:E.d/2,hz:.08}));const Ae=sd(110,{size:.16,gravity:6,drag:1.2,square:!0}),pn=["#ff4f5a","#ffcf3a","#3ddc84","#4fb8ff","#b06cff","#ffffff"].map(re=>new Vt(re));function Nn(re){for(let se=0;se<re;se++){const Ye=fn(0,Math.PI*2),Be=fn(2,6);Ae.emit(E.x+.3,vt+E.h+.3,E.z+fn(-E.w/2,E.w/2),-Math.abs(Math.cos(Ye))*Be,fn(4,9),Math.sin(Ye)*Be,fn(1.4,2.4),pn[se%pn.length])}}function wn(){const re=w.ball.body,se=re.position.x,Ye=re.position.z;let Be=se-W.x,Rn=Ye-W.z;const an=Math.hypot(Be,Rn)||1;Be/=an,Rn/=an;const Po=E.x+.8-se,Ks=E.z+fn(-1.3,1.3)-Ye,Zs=Math.hypot(Po,Ks),La=(Be*Po+Rn*Ks)/Zs;let Js=9.5,Lo=Be,zo=Rn;La>.8&&Zs<16&&(Lo=Po/Zs,zo=Ks/Zs,Js=Math.min(13,6+Zs*.75)),re.wakeUp(),re.velocity.set(Lo*Js,2.6+Math.random()*1.2,zo*Js),re.angularVelocity.set(zo*Js*1.5,0,-Lo*Js*1.5),tt++,W.heading=Math.atan2(Be,Rn),Pe.hit(.9,"rubber")}function Oi(){H++,rt=1.8,D=2.4,id("goal",H),Oe(!0),Pe.goal(),Nn(_a==="low"?45:100),On(`⚽ GOOOAL! That's ${H} ${H===1?"goal":"goals"}.`,2400),!W.inCar&&!Ie&&Math.hypot(W.x-E.x,W.z-E.z)<30&&(qe.setPose("cheer"),J=1.9)}function $s(re){Ae.update(re),D>0?(D-=re,D<=0&&w.reset()):w.inGoal()&&Oi(),rt>0&&(rt-=re,rt<=0&&Oe(!1)),J>0&&(J-=re,J<=0&&!Ie&&qe.pose==="cheer"&&qe.setPose(null));const se=w.ball.body;D<=0&&se.sleepState===2&&Math.hypot(se.position.x-w.spot.x,se.position.z-w.spot.z)>24&&w.reset()}return Ni.push({id:"soccer",get x(){return w.ball.body.position.x},get z(){return w.ball.body.position.z},r:2.3,label:"Kick the ball",icon:"⚽",when:()=>w.ball.body.position.y<1.4&&w.ball.body.velocity.length()<4&&D<=0,act:wn}),{tick:$s,confetti:Ae,kick:wn,debug:()=>{const re=w.ball.body.position;return{goals:H,kicks:tt,ball:[re.x,re.y,re.z],inGoal:w.inGoal(),resetT:D,confetti:Ae.alive,cheer:qe.pose==="cheer"}}}})(),rd=(()=>{const w=b,E=w.y+11.05,H=1.42,D={x:w.x,z:w.z+4.1},J={x:6,z:-12};let tt=w.x-J.x,rt=w.z-J.z;const ft=Math.hypot(tt,rt);tt/=ft,rt/=ft;const pt=-rt,vt=tt,Gt=new B(w.x+tt*9+pt*6,E+3.6,w.z+rt*9+vt*6),yt=new B(J.x,0,J.z);let Rt=0,oe=0;const ot={id:"lighthouse-down",label:"Climb down",icon:"🪜",act:()=>{Ie&&Ie.phase==="top"&&(Ie.phase="down",Ie.pt=0,br.classList.add("on"),Pe.whoosh())}},xt=()=>{W.x=w.x+Math.sin(Rt)*H,W.z=w.z+Math.cos(Rt)*H,W.y=E};function Zt(){oe++;const ee={id:"lighthouse",phase:"up",pt:0,leaveOnMove:!1,floorY:null,update(me,ke){if(ee.pt+=me,ee.phase==="up")W.speed=0,ee.pt>.45&&(Rt=Math.atan2(pt-tt*.25,vt-rt*.25),xt(),W.heading=Math.atan2(-tt,-rt),ee.floorY=E,ee.phase="top",ee.pt=0,br.classList.remove("on"),On(ze?"🗼 Drag to walk the gallery · tap Climb down":"🗼 Walk around the gallery · E to climb down",2800));else if(ee.phase==="top"){const Cn=Math.cos(Rt),nn=-Math.sin(Rt),kt=(ke.x*Cn+ke.z*nn)*ke.mag,de=Math.abs(kt)>.15?kt*bo*.8:0;Rt+=de*me/H,xt();const Oe=de?Math.atan2(Cn*Math.sign(de),nn*Math.sign(de)):W.heading;W.heading+=Ms(W.heading,Oe)*Math.min(1,me*10),W.speed=Math.abs(de)}else ee.phase==="down"&&(W.speed=0,ee.pt>.45&&(ts(),br.classList.remove("on")))},prompt:()=>ee.phase==="top"?ot:null,cam:()=>ee.phase==="top"||ee.phase==="down"?{pos:Gt,look:yt}:null,end(){br.classList.remove("on"),Object.assign(W,{x:D.x,z:D.z+.3,heading:0}),W.y=Ue(W.x,W.z),Xs=!0,In.k=0}};Ma(ee),W.heading=Math.PI,br.classList.add("on"),Pe.whoosh()}return Ni.push({id:"lighthouse",x:D.x,z:D.z,r:2.6,label:"Climb the lighthouse",icon:"🗼",act:Zt}),{floor:E,door:D,get climbs(){return oe}}})(),wa=(()=>{const w=Math.max(0,vn(q.x,q.z)),E=new qt;E.position.set(q.x,w,q.z),s.add(E);const H=l("#8a8494");for(let kt=0;kt<10;kt++){const de=kt/10*Math.PI*2,Oe=c(new tc(.2+kt%3*.03,0),H,{x:Math.sin(de)*.85,y:.1,z:Math.cos(de)*.85});Oe.rotation.set(kt,kt*2,0),E.add(Oe)}const D=l("#4a2e22");for(let kt=0;kt<4;kt++){const de=c(new Te(.07,.08,1.2,6),D,{y:.32});de.rotation.set(.75,kt/4*Math.PI*2,0,"YXZ"),de.position.x=Math.sin(kt/4*Math.PI*2)*.22,de.position.z=Math.cos(kt/4*Math.PI*2)*.22,E.add(de)}const J=[["#ff4a10",.32,.95],["#ff9a20",.22,.7],["#ffe080",.11,.42]].map(([kt,de,Oe],Ae)=>{const pn=new ye(new pi(de,Oe,7,1,!0),new De({color:kt,transparent:!0,opacity:.85,depthWrite:!1,toneMapped:!1,blending:Bs,side:zn}));return pn.material.color.multiplyScalar(1.3),pn.position.y=.2+Oe/2,pn.renderOrder=3,E.add(pn),{m:pn,h:Oe}}),tt=Yt(64,64,kt=>{const de=kt.createRadialGradient(32,32,0,32,32,32);de.addColorStop(0,"rgba(255,170,80,.9)"),de.addColorStop(1,"rgba(255,120,40,0)"),kt.fillStyle=de,kt.fillRect(0,0,64,64)}),rt=new ye(new hn(6,6),new De({map:tt,transparent:!0,depthWrite:!1,blending:Bs,toneMapped:!1}));rt.rotation.x=-Math.PI/2,rt.position.y=.05,rt.renderOrder=2,E.add(rt);const ft=new dM("#ff8a3d",16,13,1.7);ft.position.y=1.2,E.add(ft);const pt=l("#8a5632"),vt=l("#e0b07a"),Gt=2.55,yt=[];[.35,.35+Math.PI*2/3,.35+Math.PI*4/3].forEach(kt=>{const de=Math.sin(kt)*Gt,Oe=Math.cos(kt)*Gt,Ae=new qt;Ae.position.set(de,.27,Oe),Ae.rotation.y=kt+Math.PI/2,E.add(Ae);const pn=c(new Te(.27,.29,2,9),pt);pn.rotation.z=Math.PI/2,Ae.add(pn),[-1,1].forEach(Nn=>{const wn=c(new Wi(.26,9),vt,{x:Nn*1.005,cast:!1});wn.rotation.y=Nn*Math.PI/2,Ae.add(wn)}),yt.push({x:q.x+de,z:q.z+Oe,a:kt}),Wt(q.x+de,q.z+Oe,.6)}),Wt(q.x,q.z,.9);const Rt=sd(48,{size:.12,gravity:-.6,drag:.8,additive:!0}),oe=[new Vt("#ffb347"),new Vt("#ffd27a"),new Vt("#ff7a2e")];let ot=0,xt=1,Zt=0;const ee=new B,me=new B,ke={id:"campfire-stand",label:"Stand up",icon:"🧍",act:()=>ts()};function Cn(){let kt=yt[0],de=1/0;yt.forEach(Ye=>{const Be=Math.hypot(W.x-Ye.x,W.z-Ye.z);Be<de&&(de=Be,kt=Ye)}),Zt++,Ma({id:"campfire",seat:kt,update(Ye){W.speed=0},prompt:()=>ke,cam:()=>ee.lengthSq()?{pos:ee,look:me}:null,end(){const Ye=kt,Be=Ye.x-q.x,Rn=Ye.z-q.z,an=Math.hypot(Be,Rn);W.x=Ye.x+Be/an*1.15,W.z=Ye.z+Rn/an*1.15}}),Object.assign(W,{x:kt.x,z:kt.z,y:Ue(kt.x,kt.z),heading:Math.atan2(q.x-kt.x,q.z-kt.z)}),qe.setPose("sit");const Oe=q.x-kt.x,Ae=q.z-kt.z,pn=Math.hypot(Oe,Ae),Nn=Oe/pn,wn=Ae/pn,Oi=Math.cos(.7),$s=Math.sin(.7),re=Nn*Oi-wn*$s,se=Nn*$s+wn*Oi;ee.set(q.x+re*5.2,w+3.3,q.z+se*5.2),me.set(kt.x+Nn*.6,w+.85,kt.z+wn*.6),On(ze?"🔥 Cozy. Drag or tap Stand up to leave":"🔥 Cozy. Move or press E to stand up",2600)}function nn(kt,de){const Oe=Math.hypot(i.position.x-q.x,i.position.z-q.z)<70;E.visible=!0;const Ae=.75+Math.sin(de*13.1)*.1+Math.sin(de*23.7)*.07+Math.sin(de*5.3)*.08;if(ft.intensity=16*Ae,rt.material.opacity=.55+Ae*.35,!Oe)return;for(J.forEach(({m:Nn},wn)=>{Nn.scale.set(1+Math.sin(de*11+wn)*.08,Ae+Math.sin(de*17+wn*2)*.12,1+Math.cos(de*9+wn)*.08),Nn.rotation.y=de*(.8+wn*.5)}),ot+=kt*(_a==="low"?6:15);ot>1;)ot--,Rt.emit(q.x+fn(-.25,.25),w+.7,q.z+fn(-.25,.25),fn(-.4,.4),fn(1.6,3.2),fn(-.4,.4),fn(.8,1.7),oe[Math.floor(Math.random()*3)]);Rt.update(kt);const pn=Math.hypot(W.x-q.x,W.z-q.z);xt-=kt,pn<11&&xt<=0&&(xt=fn(.25,.9),Pe.crackle(Math.max(.15,1-pn/11)))}return Ni.push({id:"campfire",x:q.x,z:q.z,r:4.4,label:"Sit by the fire",icon:"🔥",act:Cn}),{tick:nn,seats:yt,light:ft,sparks:Rt,setLimit:kt=>Rt.setLimit(kt),debug:()=>({sits:Zt,light:ft.intensity,lightOn:ft.visible,sparks:Rt.alive,seated:Ie&&Ie.id==="campfire",pose:qe.pose})}})();function em(w,E){yc.tick(w),Ao.update(w),_c.tick(w),wa.tick(w,E)}function nm(w){_a=w,wa.light.visible=w!=="low",wa.setLimit(w==="low"?18:w==="medium"?32:48),_c.confetti.setLimit(w==="low"?50:110)}const Sa=20,im=-9,od=22,ad=34,ld=7,sm=1.5,rm=30;let ba=null,qs="top",ei=null;const om=new B(26,7,62),am=new B(-4,4,-14),Co=new B,cd=new B,Ea=new B,Dn=new B(u.x,0,u.z),_i=new B;let Xs=!0;const Ta=new v0;let Ro=0,hd=0;const lm=be("#packet-count"),Mc=be("#packets");be("#packet-total").textContent=String(Qt.length);function cm(w){w.taken=!0,w.ring.visible=!1,Ro++,lm.textContent=String(Ro);const E=Ro===Qt.length;Mc.classList.add("bump"),setTimeout(()=>Mc.classList.remove("bump"),220),E&&Mc.classList.add("all"),Pe.chime(E),On(E?`🛡️ All ${Qt.length} data packets secured. Nice work!`:`📦 Data packet secured (${Ro}/${Qt.length})`)}const Ys={blocked:0,maxStuck:0,stuckT:0};function hm(){i.getWorldDirection(_i),_i.y=0,_i.lengthSq()<1e-6&&_i.set(0,0,-1),_i.normalize();const w=-_i.z,E=_i.x,H=(Me.right?1:0)-(Me.left?1:0),D=(Me.forward?1:0)-(Me.backward?1:0);if(on.state.active&&on.state.mag>.1)return{x:on.state.x,z:on.state.z,mag:Math.min(1,on.state.mag/.85),run:on.state.run,joy:!0};if(!H&&!D)return{x:0,z:0,mag:0,run:!1,kx:H,ky:D};let J=w*H+_i.x*D,tt=E*H+_i.z*D;const rt=Math.hypot(J,tt);return{x:J/rt,z:tt/rt,mag:1,run:Me.run,kx:H,ky:D}}function wc(w,E){const H=Ue(W.x,W.z),D=!Pt(W.x,W.z)&&H<Ai+.2,J=E.mag*(E.run?N:bo)*(D?.55:1),tt=Math.min(1,w*(W.grounded?9:2.5));W.vx+=(E.x*J-W.vx)*tt,W.vz+=(E.z*J-W.vz)*tt;const rt=Math.hypot(W.vx,W.vz);E.mag>.05&&(W.heading+=Ms(W.heading,Math.atan2(E.x,E.z))*Math.min(1,w*11)),$e&&($e=!1,W.grounded&&(W.vy=nt,W.grounded=!1,Pe.step(!0),Fe.emit(W.x,W.y+.1,W.z,0,0,3,.6)));const ft=W.x,pt=W.z,vt=(xt,Zt)=>An(xt,Zt)&&!(W.grounded&&Tt(xt,Zt)-W.y>.55),Gt=W.x+W.vx*w,yt=W.z+W.vz*w;vt(Gt,yt)?(W.x=Gt,W.z=yt):vt(Gt,W.z)?(W.x=Gt,W.vz*=.3):vt(W.x,yt)?(W.z=yt,W.vx*=.3):(W.vx*=-.1,W.vz*=-.1,Ys.blocked++);const Rt={x:W.x,z:W.z};for(const xt of h){if(xt===Ii&&W.inCar||W.y>1.7+Math.max(0,vn(xt.x,xt.z))&&xt!==Ii)continue;const Zt=Rt.x-xt.x,ee=Rt.z-xt.z,me=Math.hypot(Zt,ee),ke=xt.r+lt;me<ke&&me>1e-4&&(Rt.x=xt.x+Zt/me*ke,Rt.z=xt.z+ee/me*ke)}W.y<1.2&&xe(Rt,lt),An(Rt.x,Rt.z)?(W.x=Rt.x,W.z=Rt.z):(W.x=ft,W.z=pt);const oe=Ue(W.x,W.z);W.grounded&&(oe<W.y-.35?(W.grounded=!1,W.vy=0):W.y+=(oe-W.y)*Math.min(1,w*20)),W.grounded||(W.vy-=at*w,W.y+=W.vy*w,W.airT+=w,W.y<=oe&&(W.vy<-9&&(Pe.thud(-W.vy/22),Fe.emit(W.x,oe+.1,W.z,0,0,5,.8)),W.y=oe,W.vy=0,W.grounded=!0,W.airT=0)),W.speed=rt,W.run=rt>bo+.8;const ot=Math.hypot(W.x-ft,W.z-pt);E.mag>.5&&ot<w*.3?Ys.stuckT+=w:Ys.stuckT=0,Ys.maxStuck=Math.max(Ys.maxStuck,Ys.stuckT),W.run&&W.grounded&&Math.random()<w*14&&Fe.emit(W.x-Math.sin(W.heading)*.4,oe+.1,W.z-Math.cos(W.heading)*.4,-W.vx*.1,-W.vz*.1,1,.55),qe.group.position.set(W.x,W.y,W.z),qe.group.rotation.y=W.heading,qe.update(w,{speed:W.grounded?rt:rt*.5,air:!W.grounded,vy:W.vy}),vi.position.set(W.x,oe+.05,W.z),vi.scale.setScalar(1/(1+(W.y-oe)*.4)),et.setActor("player",W.x,W.y,W.z,W.heading,W.vx,W.vz,!W.inCar)}function um(w,E,H){const D=_e,J=W.inCar;let tt=!1,rt=!1,ft=0;if(J)if(H.joy){const xt=Math.atan2(H.x,H.z),Zt=Ms(D.heading,xt);Math.abs(Zt)<2.3?(tt=H.mag>.2,ft=Math.max(-1,Math.min(1,Zt*1.8))):(rt=H.mag>.2,ft=Math.max(-1,Math.min(1,-Ms(D.heading+Math.PI,xt)*1.8)))}else tt=Me.forward,rt=Me.backward,ft=(Me.left?1:0)-(Me.right?1:0);if(tt)D.speed+=(D.speed<0?ad:od)*w;else if(rt)D.speed-=(D.speed>0?ad:od*.7)*w;else{const xt=Math.sign(D.speed);D.speed-=xt*(J?ld:ld*3)*w,Math.sign(D.speed)!==xt&&(D.speed=0)}D.speed=Math.max(im,Math.min(Sa,D.speed)),D.steer+=(ft-D.steer)*Math.min(1,w*10),D.heading+=D.steer*2.4*Math.min(1,Math.abs(D.speed)/6)*Math.sign(D.speed||1)*w;const pt=D.x,vt=D.z;D.x+=Math.sin(D.heading)*D.speed*w,D.z+=Math.cos(D.heading)*D.speed*w,D.grounded&&Tt(D.x,D.z)-D.y>.6&&(D.x=pt,D.z=vt,D.speed*=-.3);const Gt=(xt,Zt)=>vn(xt,Zt)>-.45||Pt(xt,Zt)&&!1;Gt(D.x,D.z)||(Gt(D.x,vt)?D.z=vt:Gt(pt,D.z)?D.x=pt:(D.x=pt,D.z=vt),D.speed*=.4);const yt=Math.max(0,Tt(D.x,D.z),vn(D.x,D.z));if(D.grounded&&(yt>=D.y-.05?(D.vy=w>0?(yt-D.y)/w:0,D.y=yt):D.grounded=!1),D.grounded||(D.vy-=rm*w,D.y+=D.vy*w,D.y<=yt&&(D.vy<-6&&Pe.thud(-D.vy/16),D.y=yt,D.vy=0,D.grounded=!0)),D.y<1.6){for(const xt of h){if(xt===Ii)continue;const Zt=D.x-xt.x,ee=D.z-xt.z,me=Math.hypot(Zt,ee),ke=xt.r+sm;me<ke&&me>1e-4&&(D.x=xt.x+Zt/me*ke,D.z=xt.z+ee/me*ke,D.speed*=-.25)}if(xe(D,1.3)&&(D.speed*=-.25),!J){const xt=D.x-W.x,Zt=D.z-W.z,ee=Math.hypot(xt,Zt);ee<1.9&&ee>1e-4&&Math.abs(D.speed)>0&&(D.speed*=.5)}}Gt(D.x,D.z)||(D.x=pt,D.z=vt),Ii.x=D.x,Ii.z=D.z,Se.position.set(D.x,D.y,D.z);const Rt=Math.max(-.6,Math.min(.6,-Math.atan2(D.vy,Math.max(3,Math.abs(D.speed)))*Math.sign(D.speed||1)));if(D.pitch+=(Rt-D.pitch)*Math.min(1,w*10),Se.rotation.set(D.pitch,D.heading,0),We.rotation.z=-D.steer*Math.abs(D.speed)/Sa*.12,We.rotation.x=(tt?-.04:rt?.05:0)*Math.min(1,Math.abs(D.speed)/4),We.position.y=Math.abs(Math.sin(E*18))*.05*(Math.abs(D.speed)/Sa),zi.position.z=-1.2-D.speed*.01,Mr.forEach(({pivot:xt,w:Zt,front:ee})=>{Zt.rotation.x+=D.speed*w/.5,ee&&(xt.rotation.y=D.steer*.45)}),Zi.position.set(D.x,yt+.07,D.z),Zi.scale.setScalar(1/(1+(D.y-yt)*.35)),_r.forEach(xt=>xt.intensity=J?45:0),Pe.engine(si==="world"&&J?Math.abs(D.speed)/Sa:0,tt||rt),Math.abs(D.speed)>8&&D.grounded&&Math.random()<w*20){const xt=-Math.sign(D.speed)*1.6,Zt=(Math.random()-.5)*1.8;Fe.emit(D.x+Math.sin(D.heading)*xt+Math.cos(D.heading)*Zt,yt+.25,D.z+Math.cos(D.heading)*xt-Math.sin(D.heading)*Zt,0,0,1,1.2)}const oe=Math.sin(D.heading)*D.speed,ot=Math.cos(D.heading)*D.speed;et.setActor("car",D.x,D.y,D.z,D.heading,oe,ot,!0)}function ud(w,E){const H=si==="world"?hm():{x:0,z:0,mag:0,run:!1};W.inCar?(W.x=_e.x,W.z=_e.z,W.y=_e.y,et.setActor("player",W.x,W.y,W.z,0,0,0,!1)):Ie?Q0(w,H,E):wc(w,H),um(w,E,W.inCar?H:{x:0,z:0,mag:0}),w>0&&et.update(w),on.update();const D=W.inCar?{x:_e.x,z:_e.z,y:_e.y,speed:_e.speed,heading:_e.heading}:{x:W.x,z:W.z,y:Math.max(0,W.y-Math.max(0,vn(W.x,W.z))),speed:W.speed,heading:W.heading};Object.assign(gt,D);const J=si==="world"?Y0():null;if(J!==Qi&&(Qi=J,J?(W0.textContent=J.label,q0.textContent=J.icon,Ui.hidden=!1,Ui.classList.remove("pop"),Ui.offsetWidth,Ui.classList.add("pop")):Ui.hidden=!0),ln){const ot=x[ln];Math.hypot(gt.x-ot.x,gt.z-ot.z)>f+3&&Ds()}Ji>0&&(Ji-=w,(Ji<=0||Math.hypot(W.x-Ut.x,W.z-Ut.z)>8)&&Di());for(const ot of Qt){if(ot.taken){ot.pop<1&&(ot.pop=Math.min(1,ot.pop+w*4),ot.g.scale.setScalar((1-ot.pop)*(1+ot.pop*1.5)),ot.g.visible=ot.pop<1);continue}ot.g.rotation.y=E*1.6+ot.phase,ot.g.position.y=ot.y+Math.sin(E*2+ot.phase)*.18,ot.ring.scale.setScalar(1+Math.sin(E*3+ot.phase)*.08);const xt=W.inCar?_e.y+.9:W.y+1,Zt=W.inCar?2.2:1.5;si==="world"&&Math.hypot(gt.x-ot.x,gt.z-ot.z)<Zt&&Math.abs(xt-ot.y)<1.4&&cm(ot)}if(dt.forEach(ot=>ot(E,w)),em(w,E),U.update(E),dn.update(E),wt.value=E,ve.update(E,w,Dn.x,Dn.z,(ot,xt)=>Math.max(0,vn(ot,xt))),ce.update(w),Fe.update(w),Er&&Er.update(E),Z.forEach((ot,xt)=>{const Zt=1+Math.sin(E*3+xt)*.04;ot.scale.set(Zt,Zt,1),ot.material.opacity=Qi&&Qi.id===Object.keys(x)[xt]?1:.75}),le.forEach((ot,xt)=>{ot.position.x+=w*(.6+xt*.05),ot.position.x>140&&(ot.position.x=-140)}),!rc.hidden){const[ot,xt]=xc(gt.x,gt.z);gc.style.left=`${ot}%`,gc.style.top=`${xt}%`,gc.style.transform=`translate(-50%,-50%) rotate(${-(W.inCar?_e.heading:W.heading)+Math.PI}rad)`}const tt=innerHeight>innerWidth;W.inCar?Ea.set(0,tt?30:22,tt?28:20):Ea.set(0,tt?21:14.5,tt?20:14);const rt=W.inCar?Math.sin(_e.heading)*_e.speed*.25:W.vx*.35,ft=W.inCar?Math.cos(_e.heading)*_e.speed*.25:W.vz*.35,pt=new B(gt.x+rt,0,gt.z+ft);if(ps.classList.contains("open")&&ln){const ot=x[ln].anchor;pt.lerp(new B(ot.x,0,ot.z),.45),innerWidth<=700?pt.z+=tt?7:4:pt.x+=Math.min(9,2+innerWidth/220),Ea.multiplyScalar(1.15)}Xs?(Dn.copy(pt),Xs=!1):Dn.lerp(pt,Math.min(1,w*3.2));const Gt=W.inCar?_e.y*.4:Math.max(0,Ie&&Ie.id==="lighthouse"?Ue(W.x,W.z):W.y)*.7;if(Dn.y+=(Gt-Dn.y)*Math.min(1,w*4),qs==="chase"){const ot=W.inCar?_e.heading:W.heading,xt=Math.sin(ot),Zt=Math.cos(ot),ee=W.inCar?11:7,me=new B(gt.x-xt*ee,(W.inCar?4.6:3.4)+Dn.y,gt.z-Zt*ee);Co.lengthSq()===0&&Co.copy(me),Co.lerp(me,Math.min(1,w*3)),cd.set(gt.x+xt*6,1.4+Dn.y,gt.z+Zt*6),i.position.copy(Co),i.lookAt(cd)}else Co.set(0,0,0),i.position.copy(Dn).add(Ea),i.lookAt(Dn.x,1+Dn.y,Dn.z);const yt=Ie&&Ie.cam?Ie.cam():null;yt&&(In.pos.copy(yt.pos),In.look.copy(yt.look));const Rt=yt?1:0;if(In.k+=(Rt-In.k)*Math.min(1,w*(yt?1.8:2.4)),Math.abs(In.k-Rt)<.002&&(In.k=Rt),In.k>0){const ot=In.k*In.k*(3-2*In.k);i.getWorldDirection(_i);const xt=i.position.clone().addScaledVector(_i,In.pos.distanceTo(In.look)||10);i.position.lerp(In.pos,ot),i.lookAt(xt.lerp(In.look,ot))}if(ei){ei.hold||(ei.t+=w);const ot=Math.min(1,ei.t/ei.dur),xt=ot*ot*(3-2*ot),Zt=i.position.clone(),ee=new B(Dn.x,1+Dn.y,Dn.z);i.position.lerpVectors(om,Zt,xt),i.lookAt(new B().lerpVectors(am,ee,xt)),ot>=1&&(ei=null)}ba&&(i.position.set(...ba.from),i.lookAt(...ba.to)),n.position.copy(i.position);const oe=qs==="chase"?new B(gt.x+Math.sin(W.heading)*10,0,gt.z+Math.cos(W.heading)*10):Dn;r.position.set(oe.x+o.x,o.y,oe.z+o.z),r.target.position.set(oe.x,0,oe.z)}const Fi=new bM(qn,new mi(1,1,{type:Yi,samples:4}));Fi.addPass(new EM(s,i));const dd=new vo(new bt(innerWidth,innerHeight),.6,.5,1.12);Fi.addPass(dd),Fi.addPass(new _0(uw)),Fi.addPass(new CM);const ws=["low","medium","high"],dm={low:{pr:1.25,post:!1,shadow:0,fireflies:80,headlights:!1,leaves:70},medium:{pr:1.5,post:!0,samples:0,bloom:.5,shadow:1024,fireflies:140,headlights:!0,leaves:150},high:{pr:2,post:!0,samples:4,bloom:.6,shadow:2048,fireflies:220,headlights:!0,leaves:260}},fm=matchMedia("(pointer: coarse)").matches||Math.min(screen.width,screen.height)<600;let Aa=null;try{Aa=localStorage.getItem("alex-site-quality")}catch{}let js=ws.includes(ta.get("quality"))?ta.get("quality"):ws.includes(Aa)?Aa:fm?"low":"high",Sc=ws.includes(ta.get("quality"))||ws.includes(Aa),Ca=!1;const pm=be("#quality-label"),Ra=be("#quality-btn");function bc(w){js=w;const E=dm[w],H=Math.min(devicePixelRatio||1,E.pr);qn.setPixelRatio(H),qn.setSize(innerWidth,innerHeight),Ca=E.post,Ca&&([Fi.renderTarget1,Fi.renderTarget2].forEach(D=>{D.samples!==E.samples&&(D.samples=E.samples,D.dispose())}),dd.strength=E.bloom,Fi.setPixelRatio(H),Fi.setSize(innerWidth,innerHeight)),r.castShadow=E.shadow>0,E.shadow&&r.shadow.mapSize.x!==E.shadow&&(r.shadow.mapSize.set(E.shadow,E.shadow),r.shadow.map&&(r.shadow.map.dispose(),r.shadow.map=null)),dn.setCount(E.fireflies),ve.setCount(E.leaves),Ee.setSmoke(w==="low"?3:6),Ct.setQuality(w),Ut.setQuality(w),nm(w),dn.setPixelRatio(H),_r.forEach(D=>D.visible=E.headlights),vi.material.opacity=E.shadow?.14:.26,document.body.classList.toggle("q-low",w==="low"),pm.textContent=w[0].toUpperCase()+w.slice(1),Ra.title=`Graphics quality: ${w} (Q to change)`,Ra.setAttribute("aria-label",`Graphics quality: ${w}. Click to change.`)}function fd(){const w=ws[(ws.indexOf(js)+2)%3];Sc=!0;try{localStorage.setItem("alex-site-quality",w)}catch{}bc(w),On(`Graphics: ${w}`,1400)}Ra.addEventListener("click",()=>{fd(),Ra.blur()}),bc(js);const gn={frames:0,time:0,lowFor:0,fps:60,warmup:2,drops:0};function mm(w){if(si==="world"){if(gn.warmup>0){gn.warmup-=w;return}gn.frames++,gn.time+=w,!(gn.time<.5)&&(gn.fps=gn.frames/gn.time,gn.lowFor=gn.fps<30?gn.lowFor+gn.time:0,gn.frames=0,gn.time=0,gn.lowFor>=4&&!Sc&&js!=="low"&&(gn.lowFor=0,gn.warmup=1.5,gn.drops++,bc(ws[ws.indexOf(js)-1]),On(`Graphics lowered to ${js} for a smoother walk (Q to change)`,3e3)))}}function pd(){requestAnimationFrame(pd);const w=Ta.getDelta(),E=Math.min(w,.05);si==="simple"||document.hidden||(ud(si==="world"?E:0,Ta.elapsedTime),Ca?Fi.render(E):qn.render(s,i),mm(Math.min(w,.5)))}addEventListener("resize",()=>{i.aspect=innerWidth/innerHeight,i.updateProjectionMatrix(),qn.setSize(innerWidth,innerHeight),Ca&&Fi.setSize(innerWidth,innerHeight)});let Er=null;const gm=be("#bar-fill"),xm=be("#loader-status"),Pa=(w,E)=>{gm.style.width=`${Math.round(w*100)}%`,xm.textContent=`${E} ${Math.round(w*100)}%`};Pa(.3,"Hardening island…"),new gM().load("helvetiker_bold.typeface.json",w=>{Pa(.8,"Rendering name…"),vm(w),Er=Sp({scene:s,font:w,entries:wp(wu,eo,p),makeLabel:mt,addCollider:Wt}),qn.compile(s,i),Pa(1,"Access granted."),md()},w=>{w.total&&Pa(.3+w.loaded/w.total*.5,"Fetching assets…")},w=>{console.warn("Font failed to load; continuing without 3D text",w),Er=Sp({scene:s,font:null,entries:wp(wu,eo,p),makeLabel:mt,addCollider:Wt}),md()});function vm(w){const H="ALEX SMITH",D=3/w.data.resolution,J=["#ff7a45","#f2b33a","#e8536a","#a865d8","#2fb3a6"],tt=new qt;let rt=0;const ft=[];[...H].forEach((vt,Gt)=>{const yt=w.data.glyphs[vt],Rt=(yt?yt.ha:300)*D;if(vt!==" "){const oe=new Mu(vt,{font:w,size:3,depth:1.1,curveSegments:3,bevelEnabled:!0,bevelThickness:.12,bevelSize:.08,bevelSegments:1}),ot=c(oe,l(J[Gt%J.length]),{x:rt});tt.add(ot),ft.push({m:ot,cx:rt+Rt/2})}rt+=Rt+.25});const pt=rt-.25;tt.position.set(-pt/2,0,-7.5),s.add(tt),ft.forEach(({m:vt,cx:Gt},yt)=>{Wt(Gt-pt/2,-7,1.2),dt.push(Rt=>{vt.position.y=Math.max(0,Math.sin(Rt*2.2-yt*.5))*.25})})}function md(){Ku=!0,zl.disabled=!1,zl.focus({preventScroll:!0}),pd(),location.hash==="#resume"?wo(!0):ta.has("autostart")&&Vl()}zl.addEventListener("click",()=>{Pe.start(),Vl()});let gd=!1;G0=()=>{var w;si="world",nc.classList.add("done"),setTimeout(()=>nc.hidden=!0,650),$u.hidden=!1,O0.hidden=!ze,document.body.classList.toggle("touch",ze),(w=sa.focus)==null||w.call(sa),Ta.getDelta(),gn.warmup=2,Pe.setActive(!document.hidden),!r2&&ta.get("intro")!=="0"&&!ei&&!gd&&(ei={t:0,dur:3.2},gd=!0)},window.__app={get joyState(){return{...on.state,taps:Qu}},get camPos(){return i.position.toArray().map(w=>+w.toFixed(2))},screenOf(w,E,H){i.updateMatrixWorld();const D=new B(w,E,H).project(i),J=qn.domElement.getBoundingClientRect();return{x:J.left+(D.x+1)/2*J.width,y:J.top+(1-D.y)/2*J.height}},ringPx(){const w=this.screenOf(W.x,W.y,W.z),E=this.screenOf(W.x+3,W.y,W.z);return Math.hypot(w.x-E.x,w.y-E.y)},P:W,carS:_e,state:_e,keys:Me,teleport:xa,colliders:h,packets:Qt,audio:Pe,house:Ee,physics:et,joy:on,PLACES:Sr,ZONE_DEF:x,LAYOUT:M,BOXES:ie,stats:Ys,DOCK:S,get animals(){return Ct.debug()},get gardener(){return Ut.debug()},gardenerGoto:w=>Ut.goto(w),get prompt(){return Qi?Qi.id:null},interact:ga,enterCar:td,exitCar:To,jump:()=>{$e=!0},get openZone(){return ln},get activeZone(){return ln},get dialog(){return Xe.hidden?null:yi.textContent},get quality(){return js},get qualityLocked(){return Sc},get perf(){return gn},get packetCount(){return Ro},get intro(){return ei},get bowling(){return{knocked:et.bowling.knocked,best:et.bowling.best,strikes:et.bowling.strikes}},get timeline(){return!!Er},setCamMode:w=>{qs=w,Xs=!0},photo:(w,E)=>{ba=w?{from:w,to:E}:null},holdIntro:w=>{ei={t:w*3.2,dur:3.2,hold:!0}},endIntro:()=>{ei=null},place:(w,E,H=0)=>{W.inCar&&To(),Ie&&ts(!0),Object.assign(W,{x:w,z:E,y:Ue(w,E),vx:0,vz:0,vy:0,grounded:!0,heading:H}),Xs=!0},placeCar:(w,E,H=0)=>{Object.assign(_e,{x:w,z:E,heading:H,speed:0,y:0,vy:0,grounded:!0})},canWalk:An,walkable:Zf,land:oi,height:vn,groundAt:Ue,onDock:Pt,step:(w=60,E=1/60)=>{for(let H=0;H<w;H++)hd+=E,ud(E,Ta.elapsedTime+hd);return{x:W.x,z:W.z,y:W.y,speed:W.speed,inCar:W.inCar}},get timelineObj(){return Er},get activity(){return Ie?Ie.id:null},get fishing(){return yc.debug()},get soccer(){return _c.debug()},get campfire(){return wa.debug()},get lighthouseTop(){return Ie&&Ie.id==="lighthouse"?{y:W.y,phase:Ie.phase,x:W.x,z:W.z}:null},get dog(){return Ct.debug().dog},get lastSurface(){return Pe.lastSurface},surfaceAt:je,endActivity:()=>ts(),get camK(){return In.k},LIGHTHOUSE:b,CAMP:q,fishSeat:yc.seat,lhFloor:rd.floor,lhDoor:rd.door,get hearts(){return{visible:Ao.visible,emitted:Ao.emitted}},get pose(){return qe.pose},get fadeOn(){return br.classList.contains("on")}}}function Ds(s=!1){k0(s),ps.classList.remove("open"),ps.setAttribute("aria-hidden","true")}function Vl(){G0()}
