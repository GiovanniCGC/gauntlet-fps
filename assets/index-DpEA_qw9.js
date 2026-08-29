(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tr="160",xl=0,Kr=1,yl=2,To=1,bo=2,ln=3,Tn=0,Pe=1,Ke=2,Mn=0,ci=1,$r=2,Jr=3,jr=4,Ml=5,Un=100,Sl=101,El=102,Zr=103,Qr=104,wl=200,Tl=201,bl=202,Al=203,gr=204,_r=205,Rl=206,Cl=207,Pl=208,Ll=209,Dl=210,Il=211,Ul=212,Nl=213,Fl=214,Ol=0,zl=1,Bl=2,gs=3,Hl=4,Gl=5,kl=6,Vl=7,Ao=0,Wl=1,Xl=2,Sn=0,ql=1,Yl=2,Kl=3,Ro=4,$l=5,Jl=6,Co=300,ui=301,di=302,vr=303,xr=304,Es=306,dn=1e3,$e=1001,yr=1002,Ce=1003,ta=1004,Is=1005,ke=1006,jl=1007,Fi=1008,En=1009,Zl=1010,Ql=1011,br=1012,Po=1013,xn=1014,yn=1015,Oi=1016,Lo=1017,Do=1018,On=1020,tc=1021,Je=1023,ec=1024,nc=1025,zn=1026,fi=1027,ic=1028,Io=1029,sc=1030,Uo=1031,No=1033,Us=33776,Ns=33777,Fs=33778,Os=33779,ea=35840,na=35841,ia=35842,sa=35843,Fo=36196,ra=37492,aa=37496,oa=37808,la=37809,ca=37810,ha=37811,ua=37812,da=37813,fa=37814,pa=37815,ma=37816,ga=37817,_a=37818,va=37819,xa=37820,ya=37821,zs=36492,Ma=36494,Sa=36495,rc=36283,Ea=36284,wa=36285,Ta=36286,Oo=3e3,Bn=3001,ac=3200,oc=3201,zo=0,lc=1,Ve="",ne="srgb",fn="srgb-linear",Ar="display-p3",ws="display-p3-linear",_s="linear",ee="srgb",vs="rec709",xs="p3",Vn=7680,ba=519,cc=512,hc=513,uc=514,Bo=515,dc=516,fc=517,pc=518,mc=519,Aa=35044,Ra="300 es",Mr=1035,hn=2e3,ys=2001;class _i{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ca=1234567;const Pi=Math.PI/180,zi=180/Math.PI;function vi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Se[s&255]+Se[s>>8&255]+Se[s>>16&255]+Se[s>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]).toLowerCase()}function xe(s,t,e){return Math.max(t,Math.min(e,s))}function Rr(s,t){return(s%t+t)%t}function gc(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function _c(s,t,e){return s!==t?(e-s)/(t-s):0}function Li(s,t,e){return(1-e)*s+e*t}function vc(s,t,e,n){return Li(s,t,1-Math.exp(-e*n))}function xc(s,t=1){return t-Math.abs(Rr(s,t*2)-t)}function yc(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Mc(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Sc(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Ec(s,t){return s+Math.random()*(t-s)}function wc(s){return s*(.5-Math.random())}function Tc(s){s!==void 0&&(Ca=s);let t=Ca+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function bc(s){return s*Pi}function Ac(s){return s*zi}function Sr(s){return(s&s-1)===0&&s!==0}function Rc(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ms(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Cc(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),f=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*u,l*f,o*c);break;case"YZY":s.set(l*f,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*f,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*p,o*c);break;case"YXY":s.set(l*p,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ri(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function be(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ho={DEG2RAD:Pi,RAD2DEG:zi,generateUUID:vi,clamp:xe,euclideanModulo:Rr,mapLinear:gc,inverseLerp:_c,lerp:Li,damp:vc,pingpong:xc,smoothstep:yc,smootherstep:Mc,randInt:Sc,randFloat:Ec,randFloatSpread:wc,seededRandom:Tc,degToRad:bc,radToDeg:Ac,isPowerOfTwo:Sr,ceilPowerOfTwo:Rc,floorPowerOfTwo:Ms,setQuaternionFromProperEuler:Cc,normalize:be,denormalize:ri};class ft{constructor(t=0,e=0){ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,n,i,r,a,o,l,c){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],_=i[0],m=i[3],d=i[6],M=i[1],x=i[4],T=i[7],P=i[2],A=i[5],R=i[8];return r[0]=a*_+o*M+l*P,r[3]=a*m+o*x+l*A,r[6]=a*d+o*T+l*R,r[1]=c*_+h*M+u*P,r[4]=c*m+h*x+u*A,r[7]=c*d+h*T+u*R,r[2]=f*_+p*M+g*P,r[5]=f*m+p*x+g*A,r[8]=f*d+p*T+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,p=c*r-a*l,g=e*u+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=f*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-o*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Bs.makeScale(t,e)),this}rotate(t){return this.premultiply(Bs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Bs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Bs=new Wt;function Go(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ss(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Pc(){const s=Ss("canvas");return s.style.display="block",s}const Pa={};function Di(s){s in Pa||(Pa[s]=!0,console.warn(s))}const La=new Wt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Da=new Wt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wi={[fn]:{transfer:_s,primaries:vs,toReference:s=>s,fromReference:s=>s},[ne]:{transfer:ee,primaries:vs,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[ws]:{transfer:_s,primaries:xs,toReference:s=>s.applyMatrix3(Da),fromReference:s=>s.applyMatrix3(La)},[Ar]:{transfer:ee,primaries:xs,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Da),fromReference:s=>s.applyMatrix3(La).convertLinearToSRGB()}},Lc=new Set([fn,ws]),$t={enabled:!0,_workingColorSpace:fn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Lc.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Wi[t].toReference,i=Wi[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Wi[s].primaries},getTransfer:function(s){return s===Ve?_s:Wi[s].transfer}};function hi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Hs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Wn;class ko{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Wn===void 0&&(Wn=Ss("canvas")),Wn.width=t.width,Wn.height=t.height;const n=Wn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Wn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ss("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=hi(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(hi(e[n]/255)*255):e[n]=hi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Dc=0;class Vo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dc++}),this.uuid=vi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Gs(i[a].image)):r.push(Gs(i[a]))}else r=Gs(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Gs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ko.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ic=0;class Le extends _i{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,n=$e,i=$e,r=ke,a=Fi,o=Je,l=En,c=Le.DEFAULT_ANISOTROPY,h=Ve){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ic++}),this.uuid=vi(),this.name="",this.source=new Vo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Di("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Bn?ne:Ve),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Co)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dn:t.x=t.x-Math.floor(t.x);break;case $e:t.x=t.x<0?0:1;break;case yr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dn:t.y=t.y-Math.floor(t.y);break;case $e:t.y=t.y<0?0:1;break;case yr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Di("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ne?Bn:Oo}set encoding(t){Di("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Bn?ne:Ve}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=Co;Le.DEFAULT_ANISOTROPY=1;class ie{constructor(t=0,e=0,n=0,i=1){ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,T=(p+1)/2,P=(d+1)/2,A=(h+f)/4,R=(u+_)/4,X=(g+m)/4;return x>T&&x>P?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=A/n,r=R/n):T>P?T<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(T),n=A/i,r=X/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=R/r,i=X/r),this.set(n,i,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-_)/M,this.z=(f-h)/M,this.w=Math.acos((c+p+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Uc extends _i{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Di("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Bn?ne:Ve),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ke,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Le(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Vo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gn extends Uc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Wo extends Le{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=$e,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nc extends Le{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=$e,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==p||h!==g){let m=1-o;const d=l*f+c*p+h*g+u*_,M=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const P=Math.sqrt(x),A=Math.atan2(P,d*M);m=Math.sin(m*A)/P,o=Math.sin(o*A)/P}const T=o*M;if(l=l*m+f*T,c=c*m+p*T,h=h*m+g*T,u=u*m+_*T,m===1-o){const P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*f,t[e+1]=l*g+h*f+c*u-o*p,t[e+2]=c*g+h*p+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),f=l(n/2),p=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(t=0,e=0,n=0){E.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ia.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ia.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ks.copy(this).projectOnVector(t),this.sub(ks)}reflect(t){return this.sub(ks.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ks=new E,Ia=new Bi;class Re{constructor(t=new E(1/0,1/0,1/0),e=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(We.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(We.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=We.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,We):We.fromBufferAttribute(r,a),We.applyMatrix4(t.matrixWorld),this.expandByPoint(We);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xi.copy(n.boundingBox)),Xi.applyMatrix4(t.matrixWorld),this.union(Xi)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,We),We.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wi),qi.subVectors(this.max,wi),Xn.subVectors(t.a,wi),qn.subVectors(t.b,wi),Yn.subVectors(t.c,wi),pn.subVectors(qn,Xn),mn.subVectors(Yn,qn),Rn.subVectors(Xn,Yn);let e=[0,-pn.z,pn.y,0,-mn.z,mn.y,0,-Rn.z,Rn.y,pn.z,0,-pn.x,mn.z,0,-mn.x,Rn.z,0,-Rn.x,-pn.y,pn.x,0,-mn.y,mn.x,0,-Rn.y,Rn.x,0];return!Vs(e,Xn,qn,Yn,qi)||(e=[1,0,0,0,1,0,0,0,1],!Vs(e,Xn,qn,Yn,qi))?!1:(Yi.crossVectors(pn,mn),e=[Yi.x,Yi.y,Yi.z],Vs(e,Xn,qn,Yn,qi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,We).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(We).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const nn=[new E,new E,new E,new E,new E,new E,new E,new E],We=new E,Xi=new Re,Xn=new E,qn=new E,Yn=new E,pn=new E,mn=new E,Rn=new E,wi=new E,qi=new E,Yi=new E,Cn=new E;function Vs(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Cn.fromArray(s,r);const o=i.x*Math.abs(Cn.x)+i.y*Math.abs(Cn.y)+i.z*Math.abs(Cn.z),l=t.dot(Cn),c=e.dot(Cn),h=n.dot(Cn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Fc=new Re,Ti=new E,Ws=new E;class Ts{constructor(t=new E,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Fc.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ti.subVectors(t,this.center);const e=Ti.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ti,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ws.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ti.copy(t.center).add(Ws)),this.expandByPoint(Ti.copy(t.center).sub(Ws))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sn=new E,Xs=new E,Ki=new E,gn=new E,qs=new E,$i=new E,Ys=new E;class xi{constructor(t=new E,e=new E(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(sn.copy(this.origin).addScaledVector(this.direction,e),sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Xs.copy(t).add(e).multiplyScalar(.5),Ki.copy(e).sub(t).normalize(),gn.copy(this.origin).sub(Xs);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ki),o=gn.dot(this.direction),l=-gn.dot(Ki),c=gn.lengthSq(),h=Math.abs(1-a*a);let u,f,p,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Xs).addScaledVector(Ki,f),p}intersectSphere(t,e){sn.subVectors(t.center,this.origin);const n=sn.dot(this.direction),i=sn.dot(sn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,sn)!==null}intersectTriangle(t,e,n,i,r){qs.subVectors(e,t),$i.subVectors(n,t),Ys.crossVectors(qs,$i);let a=this.direction.dot(Ys),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;gn.subVectors(this.origin,t);const l=o*this.direction.dot($i.crossVectors(gn,$i));if(l<0)return null;const c=o*this.direction.dot(qs.cross(gn));if(c<0||l+c>a)return null;const h=-o*gn.dot(Ys);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,n,i,r,a,o,l,c,h,u,f,p,g,_,m){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,f,p,g,_,m)}set(t,e,n,i,r,a,o,l,c,h,u,f,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Kn.setFromMatrixColumn(t,0).length(),r=1/Kn.setFromMatrixColumn(t,1).length(),a=1/Kn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,p=l*u,g=c*h,_=c*u;e[0]=f+_*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,p=l*u,g=c*h,_=c*u;e[0]=f-_*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Oc,t,zc)}lookAt(t,e,n){const i=this.elements;return Ue.subVectors(t,e),Ue.lengthSq()===0&&(Ue.z=1),Ue.normalize(),_n.crossVectors(n,Ue),_n.lengthSq()===0&&(Math.abs(n.z)===1?Ue.x+=1e-4:Ue.z+=1e-4,Ue.normalize(),_n.crossVectors(n,Ue)),_n.normalize(),Ji.crossVectors(Ue,_n),i[0]=_n.x,i[4]=Ji.x,i[8]=Ue.x,i[1]=_n.y,i[5]=Ji.y,i[9]=Ue.y,i[2]=_n.z,i[6]=Ji.z,i[10]=Ue.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],M=n[3],x=n[7],T=n[11],P=n[15],A=i[0],R=i[4],X=i[8],y=i[12],b=i[1],V=i[5],H=i[9],K=i[13],L=i[2],N=i[6],k=i[10],J=i[14],q=i[3],Y=i[7],$=i[11],st=i[15];return r[0]=a*A+o*b+l*L+c*q,r[4]=a*R+o*V+l*N+c*Y,r[8]=a*X+o*H+l*k+c*$,r[12]=a*y+o*K+l*J+c*st,r[1]=h*A+u*b+f*L+p*q,r[5]=h*R+u*V+f*N+p*Y,r[9]=h*X+u*H+f*k+p*$,r[13]=h*y+u*K+f*J+p*st,r[2]=g*A+_*b+m*L+d*q,r[6]=g*R+_*V+m*N+d*Y,r[10]=g*X+_*H+m*k+d*$,r[14]=g*y+_*K+m*J+d*st,r[3]=M*A+x*b+T*L+P*q,r[7]=M*R+x*V+T*N+P*Y,r[11]=M*X+x*H+T*k+P*$,r[15]=M*y+x*K+T*J+P*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+r*l*u-i*c*u-r*o*f+n*c*f+i*o*p-n*l*p)+_*(+e*l*p-e*c*f+r*a*f-i*a*p+i*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+d*(-i*o*h-e*l*u+e*o*f+i*a*u-n*a*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],M=u*m*c-_*f*c+_*l*p-o*m*p-u*l*d+o*f*d,x=g*f*c-h*m*c-g*l*p+a*m*p+h*l*d-a*f*d,T=h*_*c-g*u*c+g*o*p-a*_*p-h*o*d+a*u*d,P=g*u*l-h*_*l-g*o*f+a*_*f+h*o*m-a*u*m,A=e*M+n*x+i*T+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=M*R,t[1]=(_*f*r-u*m*r-_*i*p+n*m*p+u*i*d-n*f*d)*R,t[2]=(o*m*r-_*l*r+_*i*c-n*m*c-o*i*d+n*l*d)*R,t[3]=(u*l*r-o*f*r-u*i*c+n*f*c+o*i*p-n*l*p)*R,t[4]=x*R,t[5]=(h*m*r-g*f*r+g*i*p-e*m*p-h*i*d+e*f*d)*R,t[6]=(g*l*r-a*m*r-g*i*c+e*m*c+a*i*d-e*l*d)*R,t[7]=(a*f*r-h*l*r+h*i*c-e*f*c-a*i*p+e*l*p)*R,t[8]=T*R,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*d-e*u*d)*R,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*d+e*o*d)*R,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*R,t[12]=P*R,t[13]=(h*_*i-g*u*i+g*n*f-e*_*f-h*n*m+e*u*m)*R,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*m-e*o*m)*R,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*f+e*o*f)*R,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,p=r*h,g=r*u,_=a*h,m=a*u,d=o*u,M=l*c,x=l*h,T=l*u,P=n.x,A=n.y,R=n.z;return i[0]=(1-(_+d))*P,i[1]=(p+T)*P,i[2]=(g-x)*P,i[3]=0,i[4]=(p-T)*A,i[5]=(1-(f+d))*A,i[6]=(m+M)*A,i[7]=0,i[8]=(g+x)*R,i[9]=(m-M)*R,i[10]=(1-(f+_))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Kn.set(i[0],i[1],i[2]).length();const a=Kn.set(i[4],i[5],i[6]).length(),o=Kn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Xe.copy(this);const c=1/r,h=1/a,u=1/o;return Xe.elements[0]*=c,Xe.elements[1]*=c,Xe.elements[2]*=c,Xe.elements[4]*=h,Xe.elements[5]*=h,Xe.elements[6]*=h,Xe.elements[8]*=u,Xe.elements[9]*=u,Xe.elements[10]*=u,e.setFromRotationMatrix(Xe),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=hn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let p,g;if(o===hn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ys)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=hn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-r),f=(e+t)*c,p=(n+i)*h;let g,_;if(o===hn)g=(a+r)*u,_=-2*u;else if(o===ys)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Kn=new E,Xe=new ce,Oc=new E(0,0,0),zc=new E(1,1,1),_n=new E,Ji=new E,Ue=new E,Ua=new ce,Na=new Bi;class Hi{constructor(t=0,e=0,n=0,i=Hi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(xe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ua.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ua,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Na.setFromEuler(this),this.setFromQuaternion(Na,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hi.DEFAULT_ORDER="XYZ";class Cr{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Bc=0;const Fa=new E,$n=new Bi,rn=new ce,ji=new E,bi=new E,Hc=new E,Gc=new Bi,Oa=new E(1,0,0),za=new E(0,1,0),Ba=new E(0,0,1),kc={type:"added"},Vc={type:"removed"};class ye extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bc++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new E,e=new Hi,n=new Bi,i=new E(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ce},normalMatrix:{value:new Wt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $n.setFromAxisAngle(t,e),this.quaternion.multiply($n),this}rotateOnWorldAxis(t,e){return $n.setFromAxisAngle(t,e),this.quaternion.premultiply($n),this}rotateX(t){return this.rotateOnAxis(Oa,t)}rotateY(t){return this.rotateOnAxis(za,t)}rotateZ(t){return this.rotateOnAxis(Ba,t)}translateOnAxis(t,e){return Fa.copy(t).applyQuaternion(this.quaternion),this.position.add(Fa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Oa,t)}translateY(t){return this.translateOnAxis(za,t)}translateZ(t){return this.translateOnAxis(Ba,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ji.copy(t):ji.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(bi,ji,this.up):rn.lookAt(ji,bi,this.up),this.quaternion.setFromRotationMatrix(rn),i&&(rn.extractRotation(i.matrixWorld),$n.setFromRotationMatrix(rn),this.quaternion.premultiply($n.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(kc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vc)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(rn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,t,Hc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,Gc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ye.DEFAULT_UP=new E(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qe=new E,an=new E,Ks=new E,on=new E,Jn=new E,jn=new E,Ha=new E,$s=new E,Js=new E,js=new E;let Zi=!1;class Ye{constructor(t=new E,e=new E,n=new E){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),qe.subVectors(t,e),i.cross(qe);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){qe.subVectors(i,e),an.subVectors(n,e),Ks.subVectors(t,e);const a=qe.dot(qe),o=qe.dot(an),l=qe.dot(Ks),c=an.dot(an),h=an.dot(Ks),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,on)===null?!1:on.x>=0&&on.y>=0&&on.x+on.y<=1}static getUV(t,e,n,i,r,a,o,l){return Zi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zi=!0),this.getInterpolation(t,e,n,i,r,a,o,l)}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,on)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,on.x),l.addScaledVector(a,on.y),l.addScaledVector(o,on.z),l)}static isFrontFacing(t,e,n,i){return qe.subVectors(n,e),an.subVectors(t,e),qe.cross(an).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qe.subVectors(this.c,this.b),an.subVectors(this.a,this.b),qe.cross(an).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ye.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ye.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return Zi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zi=!0),Ye.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return Ye.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Ye.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ye.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;Jn.subVectors(i,n),jn.subVectors(r,n),$s.subVectors(t,n);const l=Jn.dot($s),c=jn.dot($s);if(l<=0&&c<=0)return e.copy(n);Js.subVectors(t,i);const h=Jn.dot(Js),u=jn.dot(Js);if(h>=0&&u<=h)return e.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Jn,a);js.subVectors(t,r);const p=Jn.dot(js),g=jn.dot(js);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(jn,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Ha.subVectors(r,i),o=(u-h)/(u-h+(p-g)),e.copy(i).addScaledVector(Ha,o);const d=1/(m+_+f);return a=_*d,o=f*d,e.copy(n).addScaledVector(Jn,a).addScaledVector(jn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Xo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vn={h:0,s:0,l:0},Qi={h:0,s:0,l:0};function Zs(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=$t.workingColorSpace){if(t=Rr(t,1),e=xe(e,0,1),n=xe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Zs(a,r,t+1/3),this.g=Zs(a,r,t),this.b=Zs(a,r,t-1/3)}return $t.toWorkingColorSpace(this,i),this}setStyle(t,e=ne){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ne){const n=Xo[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hi(t.r),this.g=hi(t.g),this.b=hi(t.b),this}copyLinearToSRGB(t){return this.r=Hs(t.r),this.g=Hs(t.g),this.b=Hs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ne){return $t.fromWorkingColorSpace(Ee.copy(this),t),Math.round(xe(Ee.r*255,0,255))*65536+Math.round(xe(Ee.g*255,0,255))*256+Math.round(xe(Ee.b*255,0,255))}getHexString(t=ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(Ee.copy(this),e);const n=Ee.r,i=Ee.g,r=Ee.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(Ee.copy(this),e),t.r=Ee.r,t.g=Ee.g,t.b=Ee.b,t}getStyle(t=ne){$t.fromWorkingColorSpace(Ee.copy(this),t);const e=Ee.r,n=Ee.g,i=Ee.b;return t!==ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(vn),this.setHSL(vn.h+t,vn.s+e,vn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(vn),t.getHSL(Qi);const n=Li(vn.h,Qi.h,e),i=Li(vn.s,Qi.s,e),r=Li(vn.l,Qi.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ee=new qt;qt.NAMES=Xo;let Wc=0;class yi extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wc++}),this.uuid=vi(),this.name="",this.type="Material",this.blending=ci,this.side=Tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gr,this.blendDst=_r,this.blendEquation=Un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ba,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vn,this.stencilZFail=Vn,this.stencilZPass=Vn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ci&&(n.blending=this.blending),this.side!==Tn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==gr&&(n.blendSrc=this.blendSrc),this.blendDst!==_r&&(n.blendDst=this.blendDst),this.blendEquation!==Un&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ba&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class un extends yi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ue=new E,ts=new ft;class je{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Aa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ts.fromBufferAttribute(this,e),ts.applyMatrix3(t),this.setXY(e,ts.x,ts.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix3(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix4(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyNormalMatrix(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.transformDirection(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ri(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ri(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ri(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ri(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ri(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),i=be(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),i=be(i,this.array),r=be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Aa&&(t.usage=this.usage),t}}class qo extends je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Yo extends je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ae extends je{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Xc=0;const Ge=new ce,Qs=new ye,Zn=new E,Ne=new Re,Ai=new Re,_e=new E;class De extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xc++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Go(t)?Yo:qo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ge.makeRotationFromQuaternion(t),this.applyMatrix4(Ge),this}rotateX(t){return Ge.makeRotationX(t),this.applyMatrix4(Ge),this}rotateY(t){return Ge.makeRotationY(t),this.applyMatrix4(Ge),this}rotateZ(t){return Ge.makeRotationZ(t),this.applyMatrix4(Ge),this}translate(t,e,n){return Ge.makeTranslation(t,e,n),this.applyMatrix4(Ge),this}scale(t,e,n){return Ge.makeScale(t,e,n),this.applyMatrix4(Ge),this}lookAt(t){return Qs.lookAt(t),Qs.updateMatrix(),this.applyMatrix4(Qs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zn).negate(),this.translate(Zn.x,Zn.y,Zn.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ae(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Re);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ne.setFromBufferAttribute(r),this.morphTargetsRelative?(_e.addVectors(this.boundingBox.min,Ne.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,Ne.max),this.boundingBox.expandByPoint(_e)):(this.boundingBox.expandByPoint(Ne.min),this.boundingBox.expandByPoint(Ne.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ts);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new E,1/0);return}if(t){const n=this.boundingSphere.center;if(Ne.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ai.setFromBufferAttribute(o),this.morphTargetsRelative?(_e.addVectors(Ne.min,Ai.min),Ne.expandByPoint(_e),_e.addVectors(Ne.max,Ai.max),Ne.expandByPoint(_e)):(Ne.expandByPoint(Ai.min),Ne.expandByPoint(Ai.max))}Ne.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)_e.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(_e));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)_e.fromBufferAttribute(o,c),l&&(Zn.fromBufferAttribute(t,c),_e.add(Zn)),i=Math.max(i,n.distanceToSquared(_e))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new je(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let b=0;b<o;b++)c[b]=new E,h[b]=new E;const u=new E,f=new E,p=new E,g=new ft,_=new ft,m=new ft,d=new E,M=new E;function x(b,V,H){u.fromArray(i,b*3),f.fromArray(i,V*3),p.fromArray(i,H*3),g.fromArray(a,b*2),_.fromArray(a,V*2),m.fromArray(a,H*2),f.sub(u),p.sub(u),_.sub(g),m.sub(g);const K=1/(_.x*m.y-m.x*_.y);isFinite(K)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(K),M.copy(p).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(K),c[b].add(d),c[V].add(d),c[H].add(d),h[b].add(M),h[V].add(M),h[H].add(M))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let b=0,V=T.length;b<V;++b){const H=T[b],K=H.start,L=H.count;for(let N=K,k=K+L;N<k;N+=3)x(n[N+0],n[N+1],n[N+2])}const P=new E,A=new E,R=new E,X=new E;function y(b){R.fromArray(r,b*3),X.copy(R);const V=c[b];P.copy(V),P.sub(R.multiplyScalar(R.dot(V))).normalize(),A.crossVectors(X,V);const K=A.dot(h[b])<0?-1:1;l[b*4]=P.x,l[b*4+1]=P.y,l[b*4+2]=P.z,l[b*4+3]=K}for(let b=0,V=T.length;b<V;++b){const H=T[b],K=H.start,L=H.count;for(let N=K,k=K+L;N<k;N+=3)y(n[N+0]),y(n[N+1]),y(n[N+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new E,r=new E,a=new E,o=new E,l=new E,c=new E,h=new E,u=new E;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_e.fromBufferAttribute(t,e),_e.normalize(),t.setXYZ(e,_e.x,_e.y,_e.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new je(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new De,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ga=new ce,Pn=new xi,es=new Ts,ka=new E,Qn=new E,ti=new E,ei=new E,tr=new E,ns=new E,is=new ft,ss=new ft,rs=new ft,Va=new E,Wa=new E,Xa=new E,as=new E,os=new E;class lt extends ye{constructor(t=new De,e=new un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){ns.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(tr.fromBufferAttribute(u,t),a?ns.addScaledVector(tr,h):ns.addScaledVector(tr.sub(e),h))}e.add(ns)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),es.copy(n.boundingSphere),es.applyMatrix4(r),Pn.copy(t.ray).recast(t.near),!(es.containsPoint(Pn.origin)===!1&&(Pn.intersectSphere(es,ka)===null||Pn.origin.distanceToSquared(ka)>(t.far-t.near)**2))&&(Ga.copy(r).invert(),Pn.copy(t.ray).applyMatrix4(Ga),!(n.boundingBox!==null&&Pn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Pn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],M=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let T=M,P=x;T<P;T+=3){const A=o.getX(T),R=o.getX(T+1),X=o.getX(T+2);i=ls(this,d,t,n,c,h,u,A,R,X),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const M=o.getX(m),x=o.getX(m+1),T=o.getX(m+2);i=ls(this,a,t,n,c,h,u,M,x,T),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],M=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let T=M,P=x;T<P;T+=3){const A=T,R=T+1,X=T+2;i=ls(this,d,t,n,c,h,u,A,R,X),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const M=m,x=m+1,T=m+2;i=ls(this,a,t,n,c,h,u,M,x,T),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function qc(s,t,e,n,i,r,a,o){let l;if(t.side===Pe?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Tn,o),l===null)return null;os.copy(o),os.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(os);return c<e.near||c>e.far?null:{distance:c,point:os.clone(),object:s}}function ls(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Qn),s.getVertexPosition(l,ti),s.getVertexPosition(c,ei);const h=qc(s,t,e,n,Qn,ti,ei,as);if(h){i&&(is.fromBufferAttribute(i,o),ss.fromBufferAttribute(i,l),rs.fromBufferAttribute(i,c),h.uv=Ye.getInterpolation(as,Qn,ti,ei,is,ss,rs,new ft)),r&&(is.fromBufferAttribute(r,o),ss.fromBufferAttribute(r,l),rs.fromBufferAttribute(r,c),h.uv1=Ye.getInterpolation(as,Qn,ti,ei,is,ss,rs,new ft),h.uv2=h.uv1),a&&(Va.fromBufferAttribute(a,o),Wa.fromBufferAttribute(a,l),Xa.fromBufferAttribute(a,c),h.normal=Ye.getInterpolation(as,Qn,ti,ei,Va,Wa,Xa,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new E,materialIndex:0};Ye.getNormal(Qn,ti,ei,u.normal),h.face=u}return h}class Ft extends De{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(u,2));function g(_,m,d,M,x,T,P,A,R,X,y){const b=T/R,V=P/X,H=T/2,K=P/2,L=A/2,N=R+1,k=X+1;let J=0,q=0;const Y=new E;for(let $=0;$<k;$++){const st=$*V-K;for(let it=0;it<N;it++){const W=it*b-H;Y[_]=W*M,Y[m]=st*x,Y[d]=L,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[d]=A>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(it/R),u.push(1-$/X),J+=1}}for(let $=0;$<X;$++)for(let st=0;st<R;st++){const it=f+st+N*$,W=f+st+N*($+1),D=f+(st+1)+N*($+1),B=f+(st+1)+N*$;l.push(it,W,B),l.push(W,D,B),q+=6}o.addGroup(p,q,y),p+=q,f+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ft(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function pi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ae(s){const t={};for(let e=0;e<s.length;e++){const n=pi(s[e]);for(const i in n)t[i]=n[i]}return t}function Yc(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Ko(s){return s.getRenderTarget()===null?s.outputColorSpace:$t.workingColorSpace}const Kc={clone:pi,merge:Ae};var $c=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends yi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$c,this.fragmentShader=Jc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=pi(t.uniforms),this.uniformsGroups=Yc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class $o extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=hn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Oe extends $o{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=zi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Pi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zi*2*Math.atan(Math.tan(Pi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Pi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ni=-90,ii=1;class jc extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Oe(ni,ii,t,e);i.layers=this.layers,this.add(i);const r=new Oe(ni,ii,t,e);r.layers=this.layers,this.add(r);const a=new Oe(ni,ii,t,e);a.layers=this.layers,this.add(a);const o=new Oe(ni,ii,t,e);o.layers=this.layers,this.add(o);const l=new Oe(ni,ii,t,e);l.layers=this.layers,this.add(l);const c=new Oe(ni,ii,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===hn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Jo extends Le{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ui,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Zc extends Gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Di("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Bn?ne:Ve),this.texture=new Jo(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ft(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pe,blending:Mn});r.uniforms.tEquirect.value=e;const a=new lt(i,r),o=e.minFilter;return e.minFilter===Fi&&(e.minFilter=ke),new jc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const er=new E,Qc=new E,th=new Wt;class Dn{constructor(t=new E(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=er.subVectors(n,e).cross(Qc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(er),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||th.getNormalMatrix(t),i=this.coplanarPoint(er).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ln=new Ts,cs=new E;class Pr{constructor(t=new Dn,e=new Dn,n=new Dn,i=new Dn,r=new Dn,a=new Dn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=hn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],p=i[8],g=i[9],_=i[10],m=i[11],d=i[12],M=i[13],x=i[14],T=i[15];if(n[0].setComponents(l-r,f-c,m-p,T-d).normalize(),n[1].setComponents(l+r,f+c,m+p,T+d).normalize(),n[2].setComponents(l+a,f+h,m+g,T+M).normalize(),n[3].setComponents(l-a,f-h,m-g,T-M).normalize(),n[4].setComponents(l-o,f-u,m-_,T-x).normalize(),e===hn)n[5].setComponents(l+o,f+u,m+_,T+x).normalize();else if(e===ys)n[5].setComponents(o,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ln.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ln.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ln)}intersectsSprite(t){return Ln.center.set(0,0,0),Ln.radius=.7071067811865476,Ln.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ln)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(cs.x=i.normal.x>0?t.max.x:t.min.x,cs.y=i.normal.y>0?t.max.y:t.min.y,cs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(cs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jo(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function eh(s,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,f=c.usage,p=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,f),c.onUploadCallback();let _;if(u instanceof Float32Array)_=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=s.SHORT;else if(u instanceof Uint32Array)_=s.UNSIGNED_INT;else if(u instanceof Int32Array)_=s.INT;else if(u instanceof Int8Array)_=s.BYTE;else if(u instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,u){const f=h.array,p=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,c),p.count===-1&&g.length===0&&s.bufferSubData(u,0,f),g.length!==0){for(let _=0,m=g.length;_<m;_++){const d=g[_];e?s.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):s.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}p.count!==-1&&(e?s.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):s.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}class cn extends De{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,f=e/l,p=[],g=[],_=[],m=[];for(let d=0;d<h;d++){const M=d*f-a;for(let x=0;x<c;x++){const T=x*u-r;g.push(T,-M,0),_.push(0,0,1),m.push(x/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<o;M++){const x=M+c*d,T=M+c*(d+1),P=M+1+c*(d+1),A=M+1+c*d;p.push(x,T,A),p.push(T,P,A)}this.setIndex(p),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(_,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cn(t.width,t.height,t.widthSegments,t.heightSegments)}}var nh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ih=`#ifdef USE_ALPHAHASH
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
#endif`,sh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ah=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,oh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lh=`#ifdef USE_AOMAP
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
#endif`,ch=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,uh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,dh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ph=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mh=`#ifdef USE_IRIDESCENCE
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
#endif`,gh=`#ifdef USE_BUMPMAP
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
#endif`,_h=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,vh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Eh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,wh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Th=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,bh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ah=`vec3 transformedNormal = objectNormal;
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
#endif`,Rh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ch=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ph=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ih=`
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
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Uh=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Nh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fh=`#ifdef USE_ENVMAP
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
#endif`,Oh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zh=`#ifdef USE_ENVMAP
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
#endif`,Bh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vh=`#ifdef USE_GRADIENTMAP
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
}`,Wh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Xh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kh=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,$h=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,Jh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tu=`PhysicalMaterial material;
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
#endif`,eu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,nu=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,iu=`#if defined( RE_IndirectDiffuse )
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
#endif`,su=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ru=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,au=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ou=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,lu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,cu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,du=`#if defined( USE_POINTS_UV )
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
#endif`,fu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,_u=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,vu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,xu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Su=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wu=`#ifdef USE_NORMALMAP
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
#endif`,Tu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Au=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ru=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Lu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Du=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Iu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Uu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ou=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,zu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ku=`#ifdef USE_SKINNING
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
#endif`,Vu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wu=`#ifdef USE_SKINNING
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
#endif`,Xu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ku=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$u=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ju=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ju=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,td=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ed=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nd=`uniform sampler2D t2D;
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
}`,id=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ad=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,od=`#include <common>
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
}`,ld=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,cd=`#define DISTANCE
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
}`,hd=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ud=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fd=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pd=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,md=`#include <common>
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
}`,gd=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,_d=`#define LAMBERT
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
}`,vd=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,xd=`#define MATCAP
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
}`,yd=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Md=`#define NORMAL
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
}`,Sd=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ed=`#define PHONG
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
}`,wd=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Td=`#define STANDARD
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
}`,bd=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ad=`#define TOON
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
}`,Rd=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Cd=`uniform float size;
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
}`,Pd=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ld=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,Dd=`uniform vec3 color;
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
}`,Id=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Ud=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,zt={alphahash_fragment:nh,alphahash_pars_fragment:ih,alphamap_fragment:sh,alphamap_pars_fragment:rh,alphatest_fragment:ah,alphatest_pars_fragment:oh,aomap_fragment:lh,aomap_pars_fragment:ch,batching_pars_vertex:hh,batching_vertex:uh,begin_vertex:dh,beginnormal_vertex:fh,bsdfs:ph,iridescence_fragment:mh,bumpmap_pars_fragment:gh,clipping_planes_fragment:_h,clipping_planes_pars_fragment:vh,clipping_planes_pars_vertex:xh,clipping_planes_vertex:yh,color_fragment:Mh,color_pars_fragment:Sh,color_pars_vertex:Eh,color_vertex:wh,common:Th,cube_uv_reflection_fragment:bh,defaultnormal_vertex:Ah,displacementmap_pars_vertex:Rh,displacementmap_vertex:Ch,emissivemap_fragment:Ph,emissivemap_pars_fragment:Lh,colorspace_fragment:Dh,colorspace_pars_fragment:Ih,envmap_fragment:Uh,envmap_common_pars_fragment:Nh,envmap_pars_fragment:Fh,envmap_pars_vertex:Oh,envmap_physical_pars_fragment:$h,envmap_vertex:zh,fog_vertex:Bh,fog_pars_vertex:Hh,fog_fragment:Gh,fog_pars_fragment:kh,gradientmap_pars_fragment:Vh,lightmap_fragment:Wh,lightmap_pars_fragment:Xh,lights_lambert_fragment:qh,lights_lambert_pars_fragment:Yh,lights_pars_begin:Kh,lights_toon_fragment:Jh,lights_toon_pars_fragment:jh,lights_phong_fragment:Zh,lights_phong_pars_fragment:Qh,lights_physical_fragment:tu,lights_physical_pars_fragment:eu,lights_fragment_begin:nu,lights_fragment_maps:iu,lights_fragment_end:su,logdepthbuf_fragment:ru,logdepthbuf_pars_fragment:au,logdepthbuf_pars_vertex:ou,logdepthbuf_vertex:lu,map_fragment:cu,map_pars_fragment:hu,map_particle_fragment:uu,map_particle_pars_fragment:du,metalnessmap_fragment:fu,metalnessmap_pars_fragment:pu,morphcolor_vertex:mu,morphnormal_vertex:gu,morphtarget_pars_vertex:_u,morphtarget_vertex:vu,normal_fragment_begin:xu,normal_fragment_maps:yu,normal_pars_fragment:Mu,normal_pars_vertex:Su,normal_vertex:Eu,normalmap_pars_fragment:wu,clearcoat_normal_fragment_begin:Tu,clearcoat_normal_fragment_maps:bu,clearcoat_pars_fragment:Au,iridescence_pars_fragment:Ru,opaque_fragment:Cu,packing:Pu,premultiplied_alpha_fragment:Lu,project_vertex:Du,dithering_fragment:Iu,dithering_pars_fragment:Uu,roughnessmap_fragment:Nu,roughnessmap_pars_fragment:Fu,shadowmap_pars_fragment:Ou,shadowmap_pars_vertex:zu,shadowmap_vertex:Bu,shadowmask_pars_fragment:Hu,skinbase_vertex:Gu,skinning_pars_vertex:ku,skinning_vertex:Vu,skinnormal_vertex:Wu,specularmap_fragment:Xu,specularmap_pars_fragment:qu,tonemapping_fragment:Yu,tonemapping_pars_fragment:Ku,transmission_fragment:$u,transmission_pars_fragment:Ju,uv_pars_fragment:ju,uv_pars_vertex:Zu,uv_vertex:Qu,worldpos_vertex:td,background_vert:ed,background_frag:nd,backgroundCube_vert:id,backgroundCube_frag:sd,cube_vert:rd,cube_frag:ad,depth_vert:od,depth_frag:ld,distanceRGBA_vert:cd,distanceRGBA_frag:hd,equirect_vert:ud,equirect_frag:dd,linedashed_vert:fd,linedashed_frag:pd,meshbasic_vert:md,meshbasic_frag:gd,meshlambert_vert:_d,meshlambert_frag:vd,meshmatcap_vert:xd,meshmatcap_frag:yd,meshnormal_vert:Md,meshnormal_frag:Sd,meshphong_vert:Ed,meshphong_frag:wd,meshphysical_vert:Td,meshphysical_frag:bd,meshtoon_vert:Ad,meshtoon_frag:Rd,points_vert:Cd,points_frag:Pd,shadow_vert:Ld,shadow_frag:Dd,sprite_vert:Id,sprite_frag:Ud},ot={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Qe={basic:{uniforms:Ae([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Ae([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new qt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Ae([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Ae([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Ae([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new qt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Ae([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Ae([ot.points,ot.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Ae([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Ae([ot.common,ot.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Ae([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Ae([ot.sprite,ot.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Ae([ot.common,ot.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Ae([ot.lights,ot.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};Qe.physical={uniforms:Ae([Qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const hs={r:0,b:0,g:0};function Nd(s,t,e,n,i,r,a){const o=new qt(0);let l=r===!0?0:1,c,h,u=null,f=0,p=null;function g(m,d){let M=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?e:t).get(x)),x===null?_(o,l):x&&x.isColor&&(_(x,1),M=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||M)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Es)?(h===void 0&&(h=new lt(new Ft(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:pi(Qe.backgroundCube.uniforms),vertexShader:Qe.backgroundCube.vertexShader,fragmentShader:Qe.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=$t.getTransfer(x.colorSpace)!==ee,(u!==x||f!==x.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,p=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new lt(new cn(2,2),new kn({name:"BackgroundMaterial",uniforms:pi(Qe.background.uniforms),vertexShader:Qe.background.vertexShader,fragmentShader:Qe.background.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=$t.getTransfer(x.colorSpace)!==ee,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,p=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,d){m.getRGB(hs,Ko(s)),n.buffers.color.setClear(hs.r,hs.g,hs.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),l=d,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:g}}function Fd(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null);let c=l,h=!1;function u(L,N,k,J,q){let Y=!1;if(a){const $=_(J,k,N);c!==$&&(c=$,p(c.object)),Y=d(L,J,k,q),Y&&M(L,J,k,q)}else{const $=N.wireframe===!0;(c.geometry!==J.id||c.program!==k.id||c.wireframe!==$)&&(c.geometry=J.id,c.program=k.id,c.wireframe=$,Y=!0)}q!==null&&e.update(q,s.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,X(L,N,k,J),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(L){return n.isWebGL2?s.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?s.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function _(L,N,k){const J=k.wireframe===!0;let q=o[L.id];q===void 0&&(q={},o[L.id]=q);let Y=q[N.id];Y===void 0&&(Y={},q[N.id]=Y);let $=Y[J];return $===void 0&&($=m(f()),Y[J]=$),$}function m(L){const N=[],k=[],J=[];for(let q=0;q<i;q++)N[q]=0,k[q]=0,J[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:k,attributeDivisors:J,object:L,attributes:{},index:null}}function d(L,N,k,J){const q=c.attributes,Y=N.attributes;let $=0;const st=k.getAttributes();for(const it in st)if(st[it].location>=0){const D=q[it];let B=Y[it];if(B===void 0&&(it==="instanceMatrix"&&L.instanceMatrix&&(B=L.instanceMatrix),it==="instanceColor"&&L.instanceColor&&(B=L.instanceColor)),D===void 0||D.attribute!==B||B&&D.data!==B.data)return!0;$++}return c.attributesNum!==$||c.index!==J}function M(L,N,k,J){const q={},Y=N.attributes;let $=0;const st=k.getAttributes();for(const it in st)if(st[it].location>=0){let D=Y[it];D===void 0&&(it==="instanceMatrix"&&L.instanceMatrix&&(D=L.instanceMatrix),it==="instanceColor"&&L.instanceColor&&(D=L.instanceColor));const B={};B.attribute=D,D&&D.data&&(B.data=D.data),q[it]=B,$++}c.attributes=q,c.attributesNum=$,c.index=J}function x(){const L=c.newAttributes;for(let N=0,k=L.length;N<k;N++)L[N]=0}function T(L){P(L,0)}function P(L,N){const k=c.newAttributes,J=c.enabledAttributes,q=c.attributeDivisors;k[L]=1,J[L]===0&&(s.enableVertexAttribArray(L),J[L]=1),q[L]!==N&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,N),q[L]=N)}function A(){const L=c.newAttributes,N=c.enabledAttributes;for(let k=0,J=N.length;k<J;k++)N[k]!==L[k]&&(s.disableVertexAttribArray(k),N[k]=0)}function R(L,N,k,J,q,Y,$){$===!0?s.vertexAttribIPointer(L,N,k,q,Y):s.vertexAttribPointer(L,N,k,J,q,Y)}function X(L,N,k,J){if(n.isWebGL2===!1&&(L.isInstancedMesh||J.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const q=J.attributes,Y=k.getAttributes(),$=N.defaultAttributeValues;for(const st in Y){const it=Y[st];if(it.location>=0){let W=q[st];if(W===void 0&&(st==="instanceMatrix"&&L.instanceMatrix&&(W=L.instanceMatrix),st==="instanceColor"&&L.instanceColor&&(W=L.instanceColor)),W!==void 0){const D=W.normalized,B=W.itemSize,j=e.get(W);if(j===void 0)continue;const Z=j.buffer,mt=j.type,gt=j.bytesPerElement,Mt=n.isWebGL2===!0&&(mt===s.INT||mt===s.UNSIGNED_INT||W.gpuType===Po);if(W.isInterleavedBufferAttribute){const Rt=W.data,U=Rt.stride,Jt=W.offset;if(Rt.isInstancedInterleavedBuffer){for(let xt=0;xt<it.locationSize;xt++)P(it.location+xt,Rt.meshPerAttribute);L.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let xt=0;xt<it.locationSize;xt++)T(it.location+xt);s.bindBuffer(s.ARRAY_BUFFER,Z);for(let xt=0;xt<it.locationSize;xt++)R(it.location+xt,B/it.locationSize,mt,D,U*gt,(Jt+B/it.locationSize*xt)*gt,Mt)}else{if(W.isInstancedBufferAttribute){for(let Rt=0;Rt<it.locationSize;Rt++)P(it.location+Rt,W.meshPerAttribute);L.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Rt=0;Rt<it.locationSize;Rt++)T(it.location+Rt);s.bindBuffer(s.ARRAY_BUFFER,Z);for(let Rt=0;Rt<it.locationSize;Rt++)R(it.location+Rt,B/it.locationSize,mt,D,B*gt,B/it.locationSize*Rt*gt,Mt)}}else if($!==void 0){const D=$[st];if(D!==void 0)switch(D.length){case 2:s.vertexAttrib2fv(it.location,D);break;case 3:s.vertexAttrib3fv(it.location,D);break;case 4:s.vertexAttrib4fv(it.location,D);break;default:s.vertexAttrib1fv(it.location,D)}}}}A()}function y(){H();for(const L in o){const N=o[L];for(const k in N){const J=N[k];for(const q in J)g(J[q].object),delete J[q];delete N[k]}delete o[L]}}function b(L){if(o[L.id]===void 0)return;const N=o[L.id];for(const k in N){const J=N[k];for(const q in J)g(J[q].object),delete J[q];delete N[k]}delete o[L.id]}function V(L){for(const N in o){const k=o[N];if(k[L.id]===void 0)continue;const J=k[L.id];for(const q in J)g(J[q].object),delete J[q];delete k[L.id]}}function H(){K(),h=!0,c!==l&&(c=l,p(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:H,resetDefaultState:K,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfProgram:V,initAttributes:x,enableAttribute:T,disableUnusedAttributes:A}}function Od(s,t,e,n){const i=n.isWebGL2;let r;function a(h){r=h}function o(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,f){if(f===0)return;let p,g;if(i)p=s,g="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,f),e.update(u,r,f)}function c(h,u,f){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function zd(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),d=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,T=a||t.has("OES_texture_float"),P=x&&T,A=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:M,vertexTextures:x,floatFragmentTextures:T,floatVertexTextures:P,maxSamples:A}}function Bd(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new Dn,o=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||i;return i=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const M=r?0:n,x=M*4;let T=d.clippingState||null;l.value=T,T=h(g,f,x,p);for(let P=0;P!==x;++P)T[P]=e[P];d.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,T=p;x!==_;++x,T+=4)a.copy(u[x]).applyMatrix4(M,o),a.normal.toArray(m,T),m[T+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Hd(s){let t=new WeakMap;function e(a,o){return o===vr?a.mapping=ui:o===xr&&(a.mapping=di),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===vr||o===xr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Zc(l.height/2);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Zo extends $o{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const oi=4,qa=[.125,.215,.35,.446,.526,.582],Nn=20,nr=new Zo,Ya=new qt;let ir=null,sr=0,rr=0;const In=(1+Math.sqrt(5))/2,si=1/In,Ka=[new E(1,1,1),new E(-1,1,1),new E(1,1,-1),new E(-1,1,-1),new E(0,In,si),new E(0,In,-si),new E(si,0,In),new E(-si,0,In),new E(In,si,0),new E(-In,si,0)];class $a{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ir=this._renderer.getRenderTarget(),sr=this._renderer.getActiveCubeFace(),rr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Za(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ja(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ir,sr,rr),t.scissorTest=!1,us(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ui||t.mapping===di?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ir=this._renderer.getRenderTarget(),sr=this._renderer.getActiveCubeFace(),rr=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:Oi,format:Je,colorSpace:fn,depthBuffer:!1},i=Ja(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ja(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gd(r)),this._blurMaterial=kd(r,t,e)}return i}_compileMaterial(t){const e=new lt(this._lodPlanes[0],t);this._renderer.compile(e,nr)}_sceneToCubeUV(t,e,n,i){const o=new Oe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Ya),h.toneMapping=Sn,h.autoClear=!1;const p=new un({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),g=new lt(new Ft,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Ya),_=!0);for(let d=0;d<6;d++){const M=d%3;M===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):M===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const x=this._cubeSize;us(i,M*x,d>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ui||t.mapping===di;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Za()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ja());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new lt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;us(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,nr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Ka[(i-1)%Ka.length];this._blur(t,i-1,i,r,a)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new lt(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Nn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Nn;m>Nn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Nn}`);const d=[];let M=0;for(let R=0;R<Nn;++R){const X=R/_,y=Math.exp(-X*X/2);d.push(y),R===0?M+=y:R<m&&(M+=2*y)}for(let R=0;R<d.length;R++)d[R]=d[R]/M;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const T=this._sizeLods[i],P=3*T*(i>x-oi?i-x+oi:0),A=4*(this._cubeSize-T);us(e,P,A,3*T,2*T),l.setRenderTarget(e),l.render(u,nr)}}function Gd(s){const t=[],e=[],n=[];let i=s;const r=s-oi+1+qa.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-oi?l=qa[a-s+oi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,d=1,M=new Float32Array(_*g*p),x=new Float32Array(m*g*p),T=new Float32Array(d*g*p);for(let A=0;A<p;A++){const R=A%3*2/3-1,X=A>2?0:-1,y=[R,X,0,R+2/3,X,0,R+2/3,X+1,0,R,X,0,R+2/3,X+1,0,R,X+1,0];M.set(y,_*g*A),x.set(f,m*g*A);const b=[A,A,A,A,A,A];T.set(b,d*g*A)}const P=new De;P.setAttribute("position",new je(M,_)),P.setAttribute("uv",new je(x,m)),P.setAttribute("faceIndex",new je(T,d)),t.push(P),i>oi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ja(s,t,e){const n=new Gn(s,t,e);return n.texture.mapping=Es,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function us(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function kd(s,t,e){const n=new Float32Array(Nn),i=new E(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:Nn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Lr(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function ja(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lr(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Za(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Lr(){return`

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
	`}function Vd(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===vr||l===xr,h=l===ui||l===di;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new $a(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new $a(s));const f=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Wd(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Xd(s,t,e,n){const i={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}f.removeEventListener("dispose",a),delete i[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],s.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],s.ARRAY_BUFFER)}}function c(u){const f=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const M=p.array;_=p.version;for(let x=0,T=M.length;x<T;x+=3){const P=M[x+0],A=M[x+1],R=M[x+2];f.push(P,A,A,R,R,P)}}else if(g!==void 0){const M=g.array;_=g.version;for(let x=0,T=M.length/3-1;x<T;x+=3){const P=x+0,A=x+1,R=x+2;f.push(P,A,A,R,R,P)}}else return;const m=new(Go(f)?Yo:qo)(f,1);m.version=_;const d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function qd(s,t,e,n){const i=n.isWebGL2;let r;function a(p){r=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function h(p,g){s.drawElements(r,g,o,p*l),e.update(g,r,1)}function u(p,g,_){if(_===0)return;let m,d;if(i)m=s,d="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,g,o,p*l,_),e.update(g,r,_)}function f(p,g,_){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<_;d++)this.render(p[d]/l,g[d]);else{m.multiDrawElementsWEBGL(r,g,0,o,p,0,_);let d=0;for(let M=0;M<_;M++)d+=g[M];e.update(d,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function Yd(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Kd(s,t){return s[0]-t[0]}function $d(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Jd(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,a=new ie,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let m=r.get(h);if(m===void 0||m.count!==_){let N=function(){K.dispose(),r.delete(h),h.removeEventListener("dispose",N)};var p=N;m!==void 0&&m.texture.dispose();const x=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,P=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],X=h.morphAttributes.color||[];let y=0;x===!0&&(y=1),T===!0&&(y=2),P===!0&&(y=3);let b=h.attributes.position.count*y,V=1;b>t.maxTextureSize&&(V=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const H=new Float32Array(b*V*4*_),K=new Wo(H,b,V,_);K.type=yn,K.needsUpdate=!0;const L=y*4;for(let k=0;k<_;k++){const J=A[k],q=R[k],Y=X[k],$=b*V*4*k;for(let st=0;st<J.count;st++){const it=st*L;x===!0&&(a.fromBufferAttribute(J,st),H[$+it+0]=a.x,H[$+it+1]=a.y,H[$+it+2]=a.z,H[$+it+3]=0),T===!0&&(a.fromBufferAttribute(q,st),H[$+it+4]=a.x,H[$+it+5]=a.y,H[$+it+6]=a.z,H[$+it+7]=0),P===!0&&(a.fromBufferAttribute(Y,st),H[$+it+8]=a.x,H[$+it+9]=a.y,H[$+it+10]=a.z,H[$+it+11]=Y.itemSize===4?a.w:1)}}m={count:_,texture:K,size:new ft(b,V)},r.set(h,m),h.addEventListener("dispose",N)}let d=0;for(let x=0;x<f.length;x++)d+=f[x];const M=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(s,"morphTargetBaseInfluence",M),u.getUniforms().setValue(s,"morphTargetInfluences",f),u.getUniforms().setValue(s,"morphTargetsTexture",m.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let T=0;T<g;T++)_[T]=[T,0];n[h.id]=_}for(let T=0;T<g;T++){const P=_[T];P[0]=T,P[1]=f[T]}_.sort($d);for(let T=0;T<8;T++)T<g&&_[T][1]?(o[T][0]=_[T][0],o[T][1]=_[T][1]):(o[T][0]=Number.MAX_SAFE_INTEGER,o[T][1]=0);o.sort(Kd);const m=h.morphAttributes.position,d=h.morphAttributes.normal;let M=0;for(let T=0;T<8;T++){const P=o[T],A=P[0],R=P[1];A!==Number.MAX_SAFE_INTEGER&&R?(m&&h.getAttribute("morphTarget"+T)!==m[A]&&h.setAttribute("morphTarget"+T,m[A]),d&&h.getAttribute("morphNormal"+T)!==d[A]&&h.setAttribute("morphNormal"+T,d[A]),i[T]=R,M+=R):(m&&h.hasAttribute("morphTarget"+T)===!0&&h.deleteAttribute("morphTarget"+T),d&&h.hasAttribute("morphNormal"+T)===!0&&h.deleteAttribute("morphNormal"+T),i[T]=0)}const x=h.morphTargetsRelative?1:1-M;u.getUniforms().setValue(s,"morphTargetBaseInfluence",x),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function jd(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Qo extends Le{constructor(t,e,n,i,r,a,o,l,c,h){if(h=h!==void 0?h:zn,h!==zn&&h!==fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zn&&(n=xn),n===void 0&&h===fi&&(n=On),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ce,this.minFilter=l!==void 0?l:Ce,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const tl=new Le,el=new Qo(1,1);el.compareFunction=Bo;const nl=new Wo,il=new Nc,sl=new Jo,Qa=[],to=[],eo=new Float32Array(16),no=new Float32Array(9),io=new Float32Array(4);function Mi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Qa[i];if(r===void 0&&(r=new Float32Array(i),Qa[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function fe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function pe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function bs(s,t){let e=to[t];e===void 0&&(e=new Int32Array(t),to[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Zd(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Qd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;s.uniform2fv(this.addr,t),pe(e,t)}}function tf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fe(e,t))return;s.uniform3fv(this.addr,t),pe(e,t)}}function ef(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;s.uniform4fv(this.addr,t),pe(e,t)}}function nf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;io.set(n),s.uniformMatrix2fv(this.addr,!1,io),pe(e,n)}}function sf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;no.set(n),s.uniformMatrix3fv(this.addr,!1,no),pe(e,n)}}function rf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;eo.set(n),s.uniformMatrix4fv(this.addr,!1,eo),pe(e,n)}}function af(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function of(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;s.uniform2iv(this.addr,t),pe(e,t)}}function lf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;s.uniform3iv(this.addr,t),pe(e,t)}}function cf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;s.uniform4iv(this.addr,t),pe(e,t)}}function hf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function uf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;s.uniform2uiv(this.addr,t),pe(e,t)}}function df(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;s.uniform3uiv(this.addr,t),pe(e,t)}}function ff(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;s.uniform4uiv(this.addr,t),pe(e,t)}}function pf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?el:tl;e.setTexture2D(t||r,i)}function mf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||il,i)}function gf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||sl,i)}function _f(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||nl,i)}function vf(s){switch(s){case 5126:return Zd;case 35664:return Qd;case 35665:return tf;case 35666:return ef;case 35674:return nf;case 35675:return sf;case 35676:return rf;case 5124:case 35670:return af;case 35667:case 35671:return of;case 35668:case 35672:return lf;case 35669:case 35673:return cf;case 5125:return hf;case 36294:return uf;case 36295:return df;case 36296:return ff;case 35678:case 36198:case 36298:case 36306:case 35682:return pf;case 35679:case 36299:case 36307:return mf;case 35680:case 36300:case 36308:case 36293:return gf;case 36289:case 36303:case 36311:case 36292:return _f}}function xf(s,t){s.uniform1fv(this.addr,t)}function yf(s,t){const e=Mi(t,this.size,2);s.uniform2fv(this.addr,e)}function Mf(s,t){const e=Mi(t,this.size,3);s.uniform3fv(this.addr,e)}function Sf(s,t){const e=Mi(t,this.size,4);s.uniform4fv(this.addr,e)}function Ef(s,t){const e=Mi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function wf(s,t){const e=Mi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Tf(s,t){const e=Mi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function bf(s,t){s.uniform1iv(this.addr,t)}function Af(s,t){s.uniform2iv(this.addr,t)}function Rf(s,t){s.uniform3iv(this.addr,t)}function Cf(s,t){s.uniform4iv(this.addr,t)}function Pf(s,t){s.uniform1uiv(this.addr,t)}function Lf(s,t){s.uniform2uiv(this.addr,t)}function Df(s,t){s.uniform3uiv(this.addr,t)}function If(s,t){s.uniform4uiv(this.addr,t)}function Uf(s,t,e){const n=this.cache,i=t.length,r=bs(e,i);fe(n,r)||(s.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||tl,r[a])}function Nf(s,t,e){const n=this.cache,i=t.length,r=bs(e,i);fe(n,r)||(s.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||il,r[a])}function Ff(s,t,e){const n=this.cache,i=t.length,r=bs(e,i);fe(n,r)||(s.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||sl,r[a])}function Of(s,t,e){const n=this.cache,i=t.length,r=bs(e,i);fe(n,r)||(s.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||nl,r[a])}function zf(s){switch(s){case 5126:return xf;case 35664:return yf;case 35665:return Mf;case 35666:return Sf;case 35674:return Ef;case 35675:return wf;case 35676:return Tf;case 5124:case 35670:return bf;case 35667:case 35671:return Af;case 35668:case 35672:return Rf;case 35669:case 35673:return Cf;case 5125:return Pf;case 36294:return Lf;case 36295:return Df;case 36296:return If;case 35678:case 36198:case 36298:case 36306:case 35682:return Uf;case 35679:case 36299:case 36307:return Nf;case 35680:case 36300:case 36308:case 36293:return Ff;case 36289:case 36303:case 36311:case 36292:return Of}}class Bf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=vf(e.type)}}class Hf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=zf(e.type)}}class Gf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const ar=/(\w+)(\])?(\[|\.)?/g;function so(s,t){s.seq.push(t),s.map[t.id]=t}function kf(s,t,e){const n=s.name,i=n.length;for(ar.lastIndex=0;;){const r=ar.exec(n),a=ar.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){so(e,c===void 0?new Bf(o,s,t):new Hf(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Gf(o),so(e,u)),e=u}}}class ps{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);kf(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function ro(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Vf=37297;let Wf=0;function Xf(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function qf(s){const t=$t.getPrimaries($t.workingColorSpace),e=$t.getPrimaries(s);let n;switch(t===e?n="":t===xs&&e===vs?n="LinearDisplayP3ToLinearSRGB":t===vs&&e===xs&&(n="LinearSRGBToLinearDisplayP3"),s){case fn:case ws:return[n,"LinearTransferOETF"];case ne:case Ar:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function ao(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Xf(s.getShaderSource(t),a)}else return i}function Yf(s,t){const e=qf(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Kf(s,t){let e;switch(t){case ql:e="Linear";break;case Yl:e="Reinhard";break;case Kl:e="OptimizedCineon";break;case Ro:e="ACESFilmic";break;case Jl:e="AgX";break;case $l:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function $f(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(li).join(`
`)}function Jf(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(li).join(`
`)}function jf(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Zf(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function li(s){return s!==""}function oo(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lo(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Qf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Er(s){return s.replace(Qf,ep)}const tp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ep(s,t){let e=zt[t];if(e===void 0){const n=tp.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Er(e)}const np=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function co(s){return s.replace(np,ip)}function ip(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ho(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function sp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===To?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===bo?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ln&&(t="SHADOWMAP_TYPE_VSM"),t}function rp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ui:case di:t="ENVMAP_TYPE_CUBE";break;case Es:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ap(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case di:t="ENVMAP_MODE_REFRACTION";break}return t}function op(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ao:t="ENVMAP_BLENDING_MULTIPLY";break;case Wl:t="ENVMAP_BLENDING_MIX";break;case Xl:t="ENVMAP_BLENDING_ADD";break}return t}function lp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function cp(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=sp(e),c=rp(e),h=ap(e),u=op(e),f=lp(e),p=e.isWebGL2?"":$f(e),g=Jf(e),_=jf(r),m=i.createProgram();let d,M,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(li).join(`
`),d.length>0&&(d+=`
`),M=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(li).join(`
`),M.length>0&&(M+=`
`)):(d=[ho(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(li).join(`
`),M=[p,ho(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Sn?"#define TONE_MAPPING":"",e.toneMapping!==Sn?zt.tonemapping_pars_fragment:"",e.toneMapping!==Sn?Kf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,Yf("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(li).join(`
`)),a=Er(a),a=oo(a,e),a=lo(a,e),o=Er(o),o=oo(o,e),o=lo(o,e),a=co(a),o=co(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,M=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Ra?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ra?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const T=x+d+a,P=x+M+o,A=ro(i,i.VERTEX_SHADER,T),R=ro(i,i.FRAGMENT_SHADER,P);i.attachShader(m,A),i.attachShader(m,R),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function X(H){if(s.debug.checkShaderErrors){const K=i.getProgramInfoLog(m).trim(),L=i.getShaderInfoLog(A).trim(),N=i.getShaderInfoLog(R).trim();let k=!0,J=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(k=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,A,R);else{const q=ao(i,A,"vertex"),Y=ao(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+q+`
`+Y)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(L===""||N==="")&&(J=!1);J&&(H.diagnostics={runnable:k,programLog:K,vertexShader:{log:L,prefix:d},fragmentShader:{log:N,prefix:M}})}i.deleteShader(A),i.deleteShader(R),y=new ps(i,m),b=Zf(i,m)}let y;this.getUniforms=function(){return y===void 0&&X(this),y};let b;this.getAttributes=function(){return b===void 0&&X(this),b};let V=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=i.getProgramParameter(m,Vf)),V},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Wf++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=R,this}let hp=0;class up{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new dp(t),e.set(t,n)),n}}class dp{constructor(t){this.id=hp++,this.code=t,this.usedTimes=0}}function fp(s,t,e,n,i,r,a){const o=new Cr,l=new up,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function m(y,b,V,H,K){const L=H.fog,N=K.geometry,k=y.isMeshStandardMaterial?H.environment:null,J=(y.isMeshStandardMaterial?e:t).get(y.envMap||k),q=J&&J.mapping===Es?J.image.height:null,Y=g[y.type];y.precision!==null&&(p=i.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const $=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,st=$!==void 0?$.length:0;let it=0;N.morphAttributes.position!==void 0&&(it=1),N.morphAttributes.normal!==void 0&&(it=2),N.morphAttributes.color!==void 0&&(it=3);let W,D,B,j;if(Y){const we=Qe[Y];W=we.vertexShader,D=we.fragmentShader}else W=y.vertexShader,D=y.fragmentShader,l.update(y),B=l.getVertexShaderID(y),j=l.getFragmentShaderID(y);const Z=s.getRenderTarget(),mt=K.isInstancedMesh===!0,gt=K.isBatchedMesh===!0,Mt=!!y.map,Rt=!!y.matcap,U=!!J,Jt=!!y.aoMap,xt=!!y.lightMap,yt=!!y.bumpMap,pt=!!y.normalMap,jt=!!y.displacementMap,Bt=!!y.emissiveMap,w=!!y.metalnessMap,v=!!y.roughnessMap,O=y.anisotropy>0,et=y.clearcoat>0,tt=y.iridescence>0,nt=y.sheen>0,St=y.transmission>0,ut=O&&!!y.anisotropyMap,_t=et&&!!y.clearcoatMap,Ct=et&&!!y.clearcoatNormalMap,Ht=et&&!!y.clearcoatRoughnessMap,Q=tt&&!!y.iridescenceMap,Kt=tt&&!!y.iridescenceThicknessMap,Xt=nt&&!!y.sheenColorMap,It=nt&&!!y.sheenRoughnessMap,wt=!!y.specularMap,vt=!!y.specularColorMap,Ot=!!y.specularIntensityMap,Yt=St&&!!y.transmissionMap,oe=St&&!!y.thicknessMap,kt=!!y.gradientMap,at=!!y.alphaMap,C=y.alphaTest>0,ct=!!y.alphaHash,ht=!!y.extensions,Pt=!!N.attributes.uv1,Tt=!!N.attributes.uv2,Zt=!!N.attributes.uv3;let Qt=Sn;return y.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Qt=s.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:y.type,shaderName:y.name,vertexShader:W,fragmentShader:D,defines:y.defines,customVertexShaderID:B,customFragmentShaderID:j,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:gt,instancing:mt,instancingColor:mt&&K.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Z===null?s.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:fn,map:Mt,matcap:Rt,envMap:U,envMapMode:U&&J.mapping,envMapCubeUVHeight:q,aoMap:Jt,lightMap:xt,bumpMap:yt,normalMap:pt,displacementMap:f&&jt,emissiveMap:Bt,normalMapObjectSpace:pt&&y.normalMapType===lc,normalMapTangentSpace:pt&&y.normalMapType===zo,metalnessMap:w,roughnessMap:v,anisotropy:O,anisotropyMap:ut,clearcoat:et,clearcoatMap:_t,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Ht,iridescence:tt,iridescenceMap:Q,iridescenceThicknessMap:Kt,sheen:nt,sheenColorMap:Xt,sheenRoughnessMap:It,specularMap:wt,specularColorMap:vt,specularIntensityMap:Ot,transmission:St,transmissionMap:Yt,thicknessMap:oe,gradientMap:kt,opaque:y.transparent===!1&&y.blending===ci,alphaMap:at,alphaTest:C,alphaHash:ct,combine:y.combine,mapUv:Mt&&_(y.map.channel),aoMapUv:Jt&&_(y.aoMap.channel),lightMapUv:xt&&_(y.lightMap.channel),bumpMapUv:yt&&_(y.bumpMap.channel),normalMapUv:pt&&_(y.normalMap.channel),displacementMapUv:jt&&_(y.displacementMap.channel),emissiveMapUv:Bt&&_(y.emissiveMap.channel),metalnessMapUv:w&&_(y.metalnessMap.channel),roughnessMapUv:v&&_(y.roughnessMap.channel),anisotropyMapUv:ut&&_(y.anisotropyMap.channel),clearcoatMapUv:_t&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ht&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:It&&_(y.sheenRoughnessMap.channel),specularMapUv:wt&&_(y.specularMap.channel),specularColorMapUv:vt&&_(y.specularColorMap.channel),specularIntensityMapUv:Ot&&_(y.specularIntensityMap.channel),transmissionMapUv:Yt&&_(y.transmissionMap.channel),thicknessMapUv:oe&&_(y.thicknessMap.channel),alphaMapUv:at&&_(y.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(pt||O),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Pt,vertexUv2s:Tt,vertexUv3s:Zt,pointsUvs:K.isPoints===!0&&!!N.attributes.uv&&(Mt||at),fog:!!L,useFog:y.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:K.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:it,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:Qt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Mt&&y.map.isVideoTexture===!0&&$t.getTransfer(y.map.colorSpace)===ee,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ke,flipSided:y.side===Pe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ht&&y.extensions.derivatives===!0,extensionFragDepth:ht&&y.extensions.fragDepth===!0,extensionDrawBuffers:ht&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ht&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ht&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function d(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const V in y.defines)b.push(V),b.push(y.defines[V]);return y.isRawShaderMaterial===!1&&(M(b,y),x(b,y),b.push(s.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function M(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function x(y,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),y.push(o.mask)}function T(y){const b=g[y.type];let V;if(b){const H=Qe[b];V=Kc.clone(H.uniforms)}else V=y.uniforms;return V}function P(y,b){let V;for(let H=0,K=c.length;H<K;H++){const L=c[H];if(L.cacheKey===b){V=L,++V.usedTimes;break}}return V===void 0&&(V=new cp(s,b,y,r),c.push(V)),V}function A(y){if(--y.usedTimes===0){const b=c.indexOf(y);c[b]=c[c.length-1],c.pop(),y.destroy()}}function R(y){l.remove(y)}function X(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:T,acquireProgram:P,releaseProgram:A,releaseShaderCache:R,programs:c,dispose:X}}function pp(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function mp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function uo(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function fo(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,f,p,g,_,m){let d=s[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=m),t++,d}function o(u,f,p,g,_,m){const d=a(u,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):e.push(d)}function l(u,f,p,g,_,m){const d=a(u,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||mp),n.length>1&&n.sort(f||uo),i.length>1&&i.sort(f||uo)}function h(){for(let u=t,f=s.length;u<f;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function gp(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new fo,s.set(n,[a])):i>=r.length?(a=new fo,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function _p(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new E,color:new qt};break;case"SpotLight":e={position:new E,direction:new E,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new E,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new E,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new E,halfWidth:new E,halfHeight:new E};break}return s[t.id]=e,e}}}function vp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let xp=0;function yp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Mp(s,t){const e=new _p,n=vp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new E);const r=new E,a=new ce,o=new ce;function l(h,u){let f=0,p=0,g=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let _=0,m=0,d=0,M=0,x=0,T=0,P=0,A=0,R=0,X=0,y=0;h.sort(yp);const b=u===!0?Math.PI:1;for(let H=0,K=h.length;H<K;H++){const L=h[H],N=L.color,k=L.intensity,J=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=N.r*k*b,p+=N.g*k*b,g+=N.b*k*b;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(L.sh.coefficients[Y],k);y++}else if(L.isDirectionalLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*b),L.castShadow){const $=L.shadow,st=n.get(L);st.shadowBias=$.bias,st.shadowNormalBias=$.normalBias,st.shadowRadius=$.radius,st.shadowMapSize=$.mapSize,i.directionalShadow[_]=st,i.directionalShadowMap[_]=q,i.directionalShadowMatrix[_]=L.shadow.matrix,T++}i.directional[_]=Y,_++}else if(L.isSpotLight){const Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(N).multiplyScalar(k*b),Y.distance=J,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,i.spot[d]=Y;const $=L.shadow;if(L.map&&(i.spotLightMap[R]=L.map,R++,$.updateMatrices(L),L.castShadow&&X++),i.spotLightMatrix[d]=$.matrix,L.castShadow){const st=n.get(L);st.shadowBias=$.bias,st.shadowNormalBias=$.normalBias,st.shadowRadius=$.radius,st.shadowMapSize=$.mapSize,i.spotShadow[d]=st,i.spotShadowMap[d]=q,A++}d++}else if(L.isRectAreaLight){const Y=e.get(L);Y.color.copy(N).multiplyScalar(k),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),i.rectArea[M]=Y,M++}else if(L.isPointLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*b),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const $=L.shadow,st=n.get(L);st.shadowBias=$.bias,st.shadowNormalBias=$.normalBias,st.shadowRadius=$.radius,st.shadowMapSize=$.mapSize,st.shadowCameraNear=$.camera.near,st.shadowCameraFar=$.camera.far,i.pointShadow[m]=st,i.pointShadowMap[m]=q,i.pointShadowMatrix[m]=L.shadow.matrix,P++}i.point[m]=Y,m++}else if(L.isHemisphereLight){const Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar(k*b),Y.groundColor.copy(L.groundColor).multiplyScalar(k*b),i.hemi[x]=Y,x++}}M>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=g;const V=i.hash;(V.directionalLength!==_||V.pointLength!==m||V.spotLength!==d||V.rectAreaLength!==M||V.hemiLength!==x||V.numDirectionalShadows!==T||V.numPointShadows!==P||V.numSpotShadows!==A||V.numSpotMaps!==R||V.numLightProbes!==y)&&(i.directional.length=_,i.spot.length=d,i.rectArea.length=M,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=A+R-X,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=X,i.numLightProbes=y,V.directionalLength=_,V.pointLength=m,V.spotLength=d,V.rectAreaLength=M,V.hemiLength=x,V.numDirectionalShadows=T,V.numPointShadows=P,V.numSpotShadows=A,V.numSpotMaps=R,V.numLightProbes=y,i.version=xp++)}function c(h,u){let f=0,p=0,g=0,_=0,m=0;const d=u.matrixWorldInverse;for(let M=0,x=h.length;M<x;M++){const T=h[M];if(T.isDirectionalLight){const P=i.directional[f];P.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(d),f++}else if(T.isSpotLight){const P=i.spot[g];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(d),P.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(d),g++}else if(T.isRectAreaLight){const P=i.rectArea[_];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(d),o.identity(),a.copy(T.matrixWorld),a.premultiply(d),o.extractRotation(a),P.halfWidth.set(T.width*.5,0,0),P.halfHeight.set(0,T.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),_++}else if(T.isPointLight){const P=i.point[p];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(d),p++}else if(T.isHemisphereLight){const P=i.hemi[m];P.direction.setFromMatrixPosition(T.matrixWorld),P.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:i}}function po(s,t){const e=new Mp(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Sp(s,t){let e=new WeakMap;function n(r,a=0){const o=e.get(r);let l;return o===void 0?(l=new po(s,t),e.set(r,[l])):a>=o.length?(l=new po(s,t),o.push(l)):l=o[a],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class Ep extends yi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ac,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class wp extends yi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Tp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bp=`uniform sampler2D shadow_pass;
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
}`;function Ap(s,t,e){let n=new Pr;const i=new ft,r=new ft,a=new ie,o=new Ep({depthPacking:oc}),l=new wp,c={},h=e.maxTextureSize,u={[Tn]:Pe,[Pe]:Tn,[Ke]:Ke},f=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:Tp,fragmentShader:bp}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new De;g.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new lt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=To;let d=this.type;this.render=function(A,R,X){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const y=s.getRenderTarget(),b=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),H=s.state;H.setBlending(Mn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const K=d!==ln&&this.type===ln,L=d===ln&&this.type!==ln;for(let N=0,k=A.length;N<k;N++){const J=A[N],q=J.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const Y=q.getFrameExtents();if(i.multiply(Y),r.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Y.x),i.x=r.x*Y.x,q.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Y.y),i.y=r.y*Y.y,q.mapSize.y=r.y)),q.map===null||K===!0||L===!0){const st=this.type!==ln?{minFilter:Ce,magFilter:Ce}:{};q.map!==null&&q.map.dispose(),q.map=new Gn(i.x,i.y,st),q.map.texture.name=J.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();const $=q.getViewportCount();for(let st=0;st<$;st++){const it=q.getViewport(st);a.set(r.x*it.x,r.y*it.y,r.x*it.z,r.y*it.w),H.viewport(a),q.updateMatrices(J,st),n=q.getFrustum(),T(R,X,q.camera,J,this.type)}q.isPointLightShadow!==!0&&this.type===ln&&M(q,X),q.needsUpdate=!1}d=this.type,m.needsUpdate=!1,s.setRenderTarget(y,b,V)};function M(A,R){const X=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Gn(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(R,null,X,f,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(R,null,X,p,_,null)}function x(A,R,X,y){let b=null;const V=X.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(V!==void 0)b=V;else if(b=X.isPointLight===!0?l:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const H=b.uuid,K=R.uuid;let L=c[H];L===void 0&&(L={},c[H]=L);let N=L[K];N===void 0&&(N=b.clone(),L[K]=N,R.addEventListener("dispose",P)),b=N}if(b.visible=R.visible,b.wireframe=R.wireframe,y===ln?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:u[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,X.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const H=s.properties.get(b);H.light=X}return b}function T(A,R,X,y,b){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===ln)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld);const K=t.update(A),L=A.material;if(Array.isArray(L)){const N=K.groups;for(let k=0,J=N.length;k<J;k++){const q=N[k],Y=L[q.materialIndex];if(Y&&Y.visible){const $=x(A,Y,y,b);A.onBeforeShadow(s,A,R,X,K,$,q),s.renderBufferDirect(X,null,K,$,A,q),A.onAfterShadow(s,A,R,X,K,$,q)}}}else if(L.visible){const N=x(A,L,y,b);A.onBeforeShadow(s,A,R,X,K,N,null),s.renderBufferDirect(X,null,K,N,A,null),A.onAfterShadow(s,A,R,X,K,N,null)}}const H=A.children;for(let K=0,L=H.length;K<L;K++)T(H[K],R,X,y,b)}function P(A){A.target.removeEventListener("dispose",P);for(const X in c){const y=c[X],b=A.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}function Rp(s,t,e){const n=e.isWebGL2;function i(){let C=!1;const ct=new ie;let ht=null;const Pt=new ie(0,0,0,0);return{setMask:function(Tt){ht!==Tt&&!C&&(s.colorMask(Tt,Tt,Tt,Tt),ht=Tt)},setLocked:function(Tt){C=Tt},setClear:function(Tt,Zt,Qt,me,we){we===!0&&(Tt*=me,Zt*=me,Qt*=me),ct.set(Tt,Zt,Qt,me),Pt.equals(ct)===!1&&(s.clearColor(Tt,Zt,Qt,me),Pt.copy(ct))},reset:function(){C=!1,ht=null,Pt.set(-1,0,0,0)}}}function r(){let C=!1,ct=null,ht=null,Pt=null;return{setTest:function(Tt){Tt?gt(s.DEPTH_TEST):Mt(s.DEPTH_TEST)},setMask:function(Tt){ct!==Tt&&!C&&(s.depthMask(Tt),ct=Tt)},setFunc:function(Tt){if(ht!==Tt){switch(Tt){case Ol:s.depthFunc(s.NEVER);break;case zl:s.depthFunc(s.ALWAYS);break;case Bl:s.depthFunc(s.LESS);break;case gs:s.depthFunc(s.LEQUAL);break;case Hl:s.depthFunc(s.EQUAL);break;case Gl:s.depthFunc(s.GEQUAL);break;case kl:s.depthFunc(s.GREATER);break;case Vl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ht=Tt}},setLocked:function(Tt){C=Tt},setClear:function(Tt){Pt!==Tt&&(s.clearDepth(Tt),Pt=Tt)},reset:function(){C=!1,ct=null,ht=null,Pt=null}}}function a(){let C=!1,ct=null,ht=null,Pt=null,Tt=null,Zt=null,Qt=null,me=null,we=null;return{setTest:function(te){C||(te?gt(s.STENCIL_TEST):Mt(s.STENCIL_TEST))},setMask:function(te){ct!==te&&!C&&(s.stencilMask(te),ct=te)},setFunc:function(te,Te,Ze){(ht!==te||Pt!==Te||Tt!==Ze)&&(s.stencilFunc(te,Te,Ze),ht=te,Pt=Te,Tt=Ze)},setOp:function(te,Te,Ze){(Zt!==te||Qt!==Te||me!==Ze)&&(s.stencilOp(te,Te,Ze),Zt=te,Qt=Te,me=Ze)},setLocked:function(te){C=te},setClear:function(te){we!==te&&(s.clearStencil(te),we=te)},reset:function(){C=!1,ct=null,ht=null,Pt=null,Tt=null,Zt=null,Qt=null,me=null,we=null}}}const o=new i,l=new r,c=new a,h=new WeakMap,u=new WeakMap;let f={},p={},g=new WeakMap,_=[],m=null,d=!1,M=null,x=null,T=null,P=null,A=null,R=null,X=null,y=new qt(0,0,0),b=0,V=!1,H=null,K=null,L=null,N=null,k=null;const J=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Y=0;const $=s.getParameter(s.VERSION);$.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec($)[1]),q=Y>=1):$.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),q=Y>=2);let st=null,it={};const W=s.getParameter(s.SCISSOR_BOX),D=s.getParameter(s.VIEWPORT),B=new ie().fromArray(W),j=new ie().fromArray(D);function Z(C,ct,ht,Pt){const Tt=new Uint8Array(4),Zt=s.createTexture();s.bindTexture(C,Zt),s.texParameteri(C,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(C,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Qt=0;Qt<ht;Qt++)n&&(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)?s.texImage3D(ct,0,s.RGBA,1,1,Pt,0,s.RGBA,s.UNSIGNED_BYTE,Tt):s.texImage2D(ct+Qt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Tt);return Zt}const mt={};mt[s.TEXTURE_2D]=Z(s.TEXTURE_2D,s.TEXTURE_2D,1),mt[s.TEXTURE_CUBE_MAP]=Z(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(mt[s.TEXTURE_2D_ARRAY]=Z(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),mt[s.TEXTURE_3D]=Z(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),gt(s.DEPTH_TEST),l.setFunc(gs),Bt(!1),w(Kr),gt(s.CULL_FACE),pt(Mn);function gt(C){f[C]!==!0&&(s.enable(C),f[C]=!0)}function Mt(C){f[C]!==!1&&(s.disable(C),f[C]=!1)}function Rt(C,ct){return p[C]!==ct?(s.bindFramebuffer(C,ct),p[C]=ct,n&&(C===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=ct),C===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=ct)),!0):!1}function U(C,ct){let ht=_,Pt=!1;if(C)if(ht=g.get(ct),ht===void 0&&(ht=[],g.set(ct,ht)),C.isWebGLMultipleRenderTargets){const Tt=C.texture;if(ht.length!==Tt.length||ht[0]!==s.COLOR_ATTACHMENT0){for(let Zt=0,Qt=Tt.length;Zt<Qt;Zt++)ht[Zt]=s.COLOR_ATTACHMENT0+Zt;ht.length=Tt.length,Pt=!0}}else ht[0]!==s.COLOR_ATTACHMENT0&&(ht[0]=s.COLOR_ATTACHMENT0,Pt=!0);else ht[0]!==s.BACK&&(ht[0]=s.BACK,Pt=!0);Pt&&(e.isWebGL2?s.drawBuffers(ht):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ht))}function Jt(C){return m!==C?(s.useProgram(C),m=C,!0):!1}const xt={[Un]:s.FUNC_ADD,[Sl]:s.FUNC_SUBTRACT,[El]:s.FUNC_REVERSE_SUBTRACT};if(n)xt[Zr]=s.MIN,xt[Qr]=s.MAX;else{const C=t.get("EXT_blend_minmax");C!==null&&(xt[Zr]=C.MIN_EXT,xt[Qr]=C.MAX_EXT)}const yt={[wl]:s.ZERO,[Tl]:s.ONE,[bl]:s.SRC_COLOR,[gr]:s.SRC_ALPHA,[Dl]:s.SRC_ALPHA_SATURATE,[Pl]:s.DST_COLOR,[Rl]:s.DST_ALPHA,[Al]:s.ONE_MINUS_SRC_COLOR,[_r]:s.ONE_MINUS_SRC_ALPHA,[Ll]:s.ONE_MINUS_DST_COLOR,[Cl]:s.ONE_MINUS_DST_ALPHA,[Il]:s.CONSTANT_COLOR,[Ul]:s.ONE_MINUS_CONSTANT_COLOR,[Nl]:s.CONSTANT_ALPHA,[Fl]:s.ONE_MINUS_CONSTANT_ALPHA};function pt(C,ct,ht,Pt,Tt,Zt,Qt,me,we,te){if(C===Mn){d===!0&&(Mt(s.BLEND),d=!1);return}if(d===!1&&(gt(s.BLEND),d=!0),C!==Ml){if(C!==M||te!==V){if((x!==Un||A!==Un)&&(s.blendEquation(s.FUNC_ADD),x=Un,A=Un),te)switch(C){case ci:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $r:s.blendFunc(s.ONE,s.ONE);break;case Jr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jr:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case ci:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $r:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Jr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jr:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}T=null,P=null,R=null,X=null,y.set(0,0,0),b=0,M=C,V=te}return}Tt=Tt||ct,Zt=Zt||ht,Qt=Qt||Pt,(ct!==x||Tt!==A)&&(s.blendEquationSeparate(xt[ct],xt[Tt]),x=ct,A=Tt),(ht!==T||Pt!==P||Zt!==R||Qt!==X)&&(s.blendFuncSeparate(yt[ht],yt[Pt],yt[Zt],yt[Qt]),T=ht,P=Pt,R=Zt,X=Qt),(me.equals(y)===!1||we!==b)&&(s.blendColor(me.r,me.g,me.b,we),y.copy(me),b=we),M=C,V=!1}function jt(C,ct){C.side===Ke?Mt(s.CULL_FACE):gt(s.CULL_FACE);let ht=C.side===Pe;ct&&(ht=!ht),Bt(ht),C.blending===ci&&C.transparent===!1?pt(Mn):pt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),o.setMask(C.colorWrite);const Pt=C.stencilWrite;c.setTest(Pt),Pt&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),O(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?gt(s.SAMPLE_ALPHA_TO_COVERAGE):Mt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(C){H!==C&&(C?s.frontFace(s.CW):s.frontFace(s.CCW),H=C)}function w(C){C!==xl?(gt(s.CULL_FACE),C!==K&&(C===Kr?s.cullFace(s.BACK):C===yl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Mt(s.CULL_FACE),K=C}function v(C){C!==L&&(q&&s.lineWidth(C),L=C)}function O(C,ct,ht){C?(gt(s.POLYGON_OFFSET_FILL),(N!==ct||k!==ht)&&(s.polygonOffset(ct,ht),N=ct,k=ht)):Mt(s.POLYGON_OFFSET_FILL)}function et(C){C?gt(s.SCISSOR_TEST):Mt(s.SCISSOR_TEST)}function tt(C){C===void 0&&(C=s.TEXTURE0+J-1),st!==C&&(s.activeTexture(C),st=C)}function nt(C,ct,ht){ht===void 0&&(st===null?ht=s.TEXTURE0+J-1:ht=st);let Pt=it[ht];Pt===void 0&&(Pt={type:void 0,texture:void 0},it[ht]=Pt),(Pt.type!==C||Pt.texture!==ct)&&(st!==ht&&(s.activeTexture(ht),st=ht),s.bindTexture(C,ct||mt[C]),Pt.type=C,Pt.texture=ct)}function St(){const C=it[st];C!==void 0&&C.type!==void 0&&(s.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function ut(){try{s.compressedTexImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _t(){try{s.compressedTexImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ct(){try{s.texSubImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ht(){try{s.texSubImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Q(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Kt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Xt(){try{s.texStorage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function It(){try{s.texStorage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function wt(){try{s.texImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function vt(){try{s.texImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ot(C){B.equals(C)===!1&&(s.scissor(C.x,C.y,C.z,C.w),B.copy(C))}function Yt(C){j.equals(C)===!1&&(s.viewport(C.x,C.y,C.z,C.w),j.copy(C))}function oe(C,ct){let ht=u.get(ct);ht===void 0&&(ht=new WeakMap,u.set(ct,ht));let Pt=ht.get(C);Pt===void 0&&(Pt=s.getUniformBlockIndex(ct,C.name),ht.set(C,Pt))}function kt(C,ct){const Pt=u.get(ct).get(C);h.get(ct)!==Pt&&(s.uniformBlockBinding(ct,Pt,C.__bindingPointIndex),h.set(ct,Pt))}function at(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},st=null,it={},p={},g=new WeakMap,_=[],m=null,d=!1,M=null,x=null,T=null,P=null,A=null,R=null,X=null,y=new qt(0,0,0),b=0,V=!1,H=null,K=null,L=null,N=null,k=null,B.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:gt,disable:Mt,bindFramebuffer:Rt,drawBuffers:U,useProgram:Jt,setBlending:pt,setMaterial:jt,setFlipSided:Bt,setCullFace:w,setLineWidth:v,setPolygonOffset:O,setScissorTest:et,activeTexture:tt,bindTexture:nt,unbindTexture:St,compressedTexImage2D:ut,compressedTexImage3D:_t,texImage2D:wt,texImage3D:vt,updateUBOMapping:oe,uniformBlockBinding:kt,texStorage2D:Xt,texStorage3D:It,texSubImage2D:Ct,texSubImage3D:Ht,compressedTexSubImage2D:Q,compressedTexSubImage3D:Kt,scissor:Ot,viewport:Yt,reset:at}}function Cp(s,t,e,n,i,r,a){const o=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,v){return p?new OffscreenCanvas(w,v):Ss("canvas")}function _(w,v,O,et){let tt=1;if((w.width>et||w.height>et)&&(tt=et/Math.max(w.width,w.height)),tt<1||v===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const nt=v?Ms:Math.floor,St=nt(tt*w.width),ut=nt(tt*w.height);u===void 0&&(u=g(St,ut));const _t=O?g(St,ut):u;return _t.width=St,_t.height=ut,_t.getContext("2d").drawImage(w,0,0,St,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+St+"x"+ut+")."),_t}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function m(w){return Sr(w.width)&&Sr(w.height)}function d(w){return o?!1:w.wrapS!==$e||w.wrapT!==$e||w.minFilter!==Ce&&w.minFilter!==ke}function M(w,v){return w.generateMipmaps&&v&&w.minFilter!==Ce&&w.minFilter!==ke}function x(w){s.generateMipmap(w)}function T(w,v,O,et,tt=!1){if(o===!1)return v;if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let nt=v;if(v===s.RED&&(O===s.FLOAT&&(nt=s.R32F),O===s.HALF_FLOAT&&(nt=s.R16F),O===s.UNSIGNED_BYTE&&(nt=s.R8)),v===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(nt=s.R8UI),O===s.UNSIGNED_SHORT&&(nt=s.R16UI),O===s.UNSIGNED_INT&&(nt=s.R32UI),O===s.BYTE&&(nt=s.R8I),O===s.SHORT&&(nt=s.R16I),O===s.INT&&(nt=s.R32I)),v===s.RG&&(O===s.FLOAT&&(nt=s.RG32F),O===s.HALF_FLOAT&&(nt=s.RG16F),O===s.UNSIGNED_BYTE&&(nt=s.RG8)),v===s.RGBA){const St=tt?_s:$t.getTransfer(et);O===s.FLOAT&&(nt=s.RGBA32F),O===s.HALF_FLOAT&&(nt=s.RGBA16F),O===s.UNSIGNED_BYTE&&(nt=St===ee?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(nt=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(nt=s.RGB5_A1)}return(nt===s.R16F||nt===s.R32F||nt===s.RG16F||nt===s.RG32F||nt===s.RGBA16F||nt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function P(w,v,O){return M(w,O)===!0||w.isFramebufferTexture&&w.minFilter!==Ce&&w.minFilter!==ke?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function A(w){return w===Ce||w===ta||w===Is?s.NEAREST:s.LINEAR}function R(w){const v=w.target;v.removeEventListener("dispose",R),y(v),v.isVideoTexture&&h.delete(v)}function X(w){const v=w.target;v.removeEventListener("dispose",X),V(v)}function y(w){const v=n.get(w);if(v.__webglInit===void 0)return;const O=w.source,et=f.get(O);if(et){const tt=et[v.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&b(w),Object.keys(et).length===0&&f.delete(O)}n.remove(w)}function b(w){const v=n.get(w);s.deleteTexture(v.__webglTexture);const O=w.source,et=f.get(O);delete et[v.__cacheKey],a.memory.textures--}function V(w){const v=w.texture,O=n.get(w),et=n.get(v);if(et.__webglTexture!==void 0&&(s.deleteTexture(et.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(O.__webglFramebuffer[tt]))for(let nt=0;nt<O.__webglFramebuffer[tt].length;nt++)s.deleteFramebuffer(O.__webglFramebuffer[tt][nt]);else s.deleteFramebuffer(O.__webglFramebuffer[tt]);O.__webglDepthbuffer&&s.deleteRenderbuffer(O.__webglDepthbuffer[tt])}else{if(Array.isArray(O.__webglFramebuffer))for(let tt=0;tt<O.__webglFramebuffer.length;tt++)s.deleteFramebuffer(O.__webglFramebuffer[tt]);else s.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&s.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&s.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let tt=0;tt<O.__webglColorRenderbuffer.length;tt++)O.__webglColorRenderbuffer[tt]&&s.deleteRenderbuffer(O.__webglColorRenderbuffer[tt]);O.__webglDepthRenderbuffer&&s.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let tt=0,nt=v.length;tt<nt;tt++){const St=n.get(v[tt]);St.__webglTexture&&(s.deleteTexture(St.__webglTexture),a.memory.textures--),n.remove(v[tt])}n.remove(v),n.remove(w)}let H=0;function K(){H=0}function L(){const w=H;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),H+=1,w}function N(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function k(w,v){const O=n.get(w);if(w.isVideoTexture&&jt(w),w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){const et=w.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{B(O,w,v);return}}e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+v)}function J(w,v){const O=n.get(w);if(w.version>0&&O.__version!==w.version){B(O,w,v);return}e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+v)}function q(w,v){const O=n.get(w);if(w.version>0&&O.__version!==w.version){B(O,w,v);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+v)}function Y(w,v){const O=n.get(w);if(w.version>0&&O.__version!==w.version){j(O,w,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+v)}const $={[dn]:s.REPEAT,[$e]:s.CLAMP_TO_EDGE,[yr]:s.MIRRORED_REPEAT},st={[Ce]:s.NEAREST,[ta]:s.NEAREST_MIPMAP_NEAREST,[Is]:s.NEAREST_MIPMAP_LINEAR,[ke]:s.LINEAR,[jl]:s.LINEAR_MIPMAP_NEAREST,[Fi]:s.LINEAR_MIPMAP_LINEAR},it={[cc]:s.NEVER,[mc]:s.ALWAYS,[hc]:s.LESS,[Bo]:s.LEQUAL,[uc]:s.EQUAL,[pc]:s.GEQUAL,[dc]:s.GREATER,[fc]:s.NOTEQUAL};function W(w,v,O){if(O?(s.texParameteri(w,s.TEXTURE_WRAP_S,$[v.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,$[v.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,$[v.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,st[v.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,st[v.minFilter])):(s.texParameteri(w,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(w,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(v.wrapS!==$e||v.wrapT!==$e)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(w,s.TEXTURE_MAG_FILTER,A(v.magFilter)),s.texParameteri(w,s.TEXTURE_MIN_FILTER,A(v.minFilter)),v.minFilter!==Ce&&v.minFilter!==ke&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,it[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const et=t.get("EXT_texture_filter_anisotropic");if(v.magFilter===Ce||v.minFilter!==Is&&v.minFilter!==Fi||v.type===yn&&t.has("OES_texture_float_linear")===!1||o===!1&&v.type===Oi&&t.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(s.texParameterf(w,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function D(w,v){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",R));const et=v.source;let tt=f.get(et);tt===void 0&&(tt={},f.set(et,tt));const nt=N(v);if(nt!==w.__cacheKey){tt[nt]===void 0&&(tt[nt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),tt[nt].usedTimes++;const St=tt[w.__cacheKey];St!==void 0&&(tt[w.__cacheKey].usedTimes--,St.usedTimes===0&&b(v)),w.__cacheKey=nt,w.__webglTexture=tt[nt].texture}return O}function B(w,v,O){let et=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(et=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(et=s.TEXTURE_3D);const tt=D(w,v),nt=v.source;e.bindTexture(et,w.__webglTexture,s.TEXTURE0+O);const St=n.get(nt);if(nt.version!==St.__version||tt===!0){e.activeTexture(s.TEXTURE0+O);const ut=$t.getPrimaries($t.workingColorSpace),_t=v.colorSpace===Ve?null:$t.getPrimaries(v.colorSpace),Ct=v.colorSpace===Ve||ut===_t?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);const Ht=d(v)&&m(v.image)===!1;let Q=_(v.image,Ht,!1,i.maxTextureSize);Q=Bt(v,Q);const Kt=m(Q)||o,Xt=r.convert(v.format,v.colorSpace);let It=r.convert(v.type),wt=T(v.internalFormat,Xt,It,v.colorSpace,v.isVideoTexture);W(et,v,Kt);let vt;const Ot=v.mipmaps,Yt=o&&v.isVideoTexture!==!0&&wt!==Fo,oe=St.__version===void 0||tt===!0,kt=P(v,Q,Kt);if(v.isDepthTexture)wt=s.DEPTH_COMPONENT,o?v.type===yn?wt=s.DEPTH_COMPONENT32F:v.type===xn?wt=s.DEPTH_COMPONENT24:v.type===On?wt=s.DEPTH24_STENCIL8:wt=s.DEPTH_COMPONENT16:v.type===yn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===zn&&wt===s.DEPTH_COMPONENT&&v.type!==br&&v.type!==xn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=xn,It=r.convert(v.type)),v.format===fi&&wt===s.DEPTH_COMPONENT&&(wt=s.DEPTH_STENCIL,v.type!==On&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=On,It=r.convert(v.type))),oe&&(Yt?e.texStorage2D(s.TEXTURE_2D,1,wt,Q.width,Q.height):e.texImage2D(s.TEXTURE_2D,0,wt,Q.width,Q.height,0,Xt,It,null));else if(v.isDataTexture)if(Ot.length>0&&Kt){Yt&&oe&&e.texStorage2D(s.TEXTURE_2D,kt,wt,Ot[0].width,Ot[0].height);for(let at=0,C=Ot.length;at<C;at++)vt=Ot[at],Yt?e.texSubImage2D(s.TEXTURE_2D,at,0,0,vt.width,vt.height,Xt,It,vt.data):e.texImage2D(s.TEXTURE_2D,at,wt,vt.width,vt.height,0,Xt,It,vt.data);v.generateMipmaps=!1}else Yt?(oe&&e.texStorage2D(s.TEXTURE_2D,kt,wt,Q.width,Q.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Q.width,Q.height,Xt,It,Q.data)):e.texImage2D(s.TEXTURE_2D,0,wt,Q.width,Q.height,0,Xt,It,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Yt&&oe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,kt,wt,Ot[0].width,Ot[0].height,Q.depth);for(let at=0,C=Ot.length;at<C;at++)vt=Ot[at],v.format!==Je?Xt!==null?Yt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,at,0,0,0,vt.width,vt.height,Q.depth,Xt,vt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,at,wt,vt.width,vt.height,Q.depth,0,vt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,at,0,0,0,vt.width,vt.height,Q.depth,Xt,It,vt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,at,wt,vt.width,vt.height,Q.depth,0,Xt,It,vt.data)}else{Yt&&oe&&e.texStorage2D(s.TEXTURE_2D,kt,wt,Ot[0].width,Ot[0].height);for(let at=0,C=Ot.length;at<C;at++)vt=Ot[at],v.format!==Je?Xt!==null?Yt?e.compressedTexSubImage2D(s.TEXTURE_2D,at,0,0,vt.width,vt.height,Xt,vt.data):e.compressedTexImage2D(s.TEXTURE_2D,at,wt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?e.texSubImage2D(s.TEXTURE_2D,at,0,0,vt.width,vt.height,Xt,It,vt.data):e.texImage2D(s.TEXTURE_2D,at,wt,vt.width,vt.height,0,Xt,It,vt.data)}else if(v.isDataArrayTexture)Yt?(oe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,kt,wt,Q.width,Q.height,Q.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Xt,It,Q.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,wt,Q.width,Q.height,Q.depth,0,Xt,It,Q.data);else if(v.isData3DTexture)Yt?(oe&&e.texStorage3D(s.TEXTURE_3D,kt,wt,Q.width,Q.height,Q.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Xt,It,Q.data)):e.texImage3D(s.TEXTURE_3D,0,wt,Q.width,Q.height,Q.depth,0,Xt,It,Q.data);else if(v.isFramebufferTexture){if(oe)if(Yt)e.texStorage2D(s.TEXTURE_2D,kt,wt,Q.width,Q.height);else{let at=Q.width,C=Q.height;for(let ct=0;ct<kt;ct++)e.texImage2D(s.TEXTURE_2D,ct,wt,at,C,0,Xt,It,null),at>>=1,C>>=1}}else if(Ot.length>0&&Kt){Yt&&oe&&e.texStorage2D(s.TEXTURE_2D,kt,wt,Ot[0].width,Ot[0].height);for(let at=0,C=Ot.length;at<C;at++)vt=Ot[at],Yt?e.texSubImage2D(s.TEXTURE_2D,at,0,0,Xt,It,vt):e.texImage2D(s.TEXTURE_2D,at,wt,Xt,It,vt);v.generateMipmaps=!1}else Yt?(oe&&e.texStorage2D(s.TEXTURE_2D,kt,wt,Q.width,Q.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Xt,It,Q)):e.texImage2D(s.TEXTURE_2D,0,wt,Xt,It,Q);M(v,Kt)&&x(et),St.__version=nt.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function j(w,v,O){if(v.image.length!==6)return;const et=D(w,v),tt=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+O);const nt=n.get(tt);if(tt.version!==nt.__version||et===!0){e.activeTexture(s.TEXTURE0+O);const St=$t.getPrimaries($t.workingColorSpace),ut=v.colorSpace===Ve?null:$t.getPrimaries(v.colorSpace),_t=v.colorSpace===Ve||St===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Ct=v.isCompressedTexture||v.image[0].isCompressedTexture,Ht=v.image[0]&&v.image[0].isDataTexture,Q=[];for(let at=0;at<6;at++)!Ct&&!Ht?Q[at]=_(v.image[at],!1,!0,i.maxCubemapSize):Q[at]=Ht?v.image[at].image:v.image[at],Q[at]=Bt(v,Q[at]);const Kt=Q[0],Xt=m(Kt)||o,It=r.convert(v.format,v.colorSpace),wt=r.convert(v.type),vt=T(v.internalFormat,It,wt,v.colorSpace),Ot=o&&v.isVideoTexture!==!0,Yt=nt.__version===void 0||et===!0;let oe=P(v,Kt,Xt);W(s.TEXTURE_CUBE_MAP,v,Xt);let kt;if(Ct){Ot&&Yt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,oe,vt,Kt.width,Kt.height);for(let at=0;at<6;at++){kt=Q[at].mipmaps;for(let C=0;C<kt.length;C++){const ct=kt[C];v.format!==Je?It!==null?Ot?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,C,0,0,ct.width,ct.height,It,ct.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,C,vt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,C,0,0,ct.width,ct.height,It,wt,ct.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,C,vt,ct.width,ct.height,0,It,wt,ct.data)}}}else{kt=v.mipmaps,Ot&&Yt&&(kt.length>0&&oe++,e.texStorage2D(s.TEXTURE_CUBE_MAP,oe,vt,Q[0].width,Q[0].height));for(let at=0;at<6;at++)if(Ht){Ot?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Q[at].width,Q[at].height,It,wt,Q[at].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,vt,Q[at].width,Q[at].height,0,It,wt,Q[at].data);for(let C=0;C<kt.length;C++){const ht=kt[C].image[at].image;Ot?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,C+1,0,0,ht.width,ht.height,It,wt,ht.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,C+1,vt,ht.width,ht.height,0,It,wt,ht.data)}}else{Ot?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,It,wt,Q[at]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,vt,It,wt,Q[at]);for(let C=0;C<kt.length;C++){const ct=kt[C];Ot?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,C+1,0,0,It,wt,ct.image[at]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,C+1,vt,It,wt,ct.image[at])}}}M(v,Xt)&&x(s.TEXTURE_CUBE_MAP),nt.__version=tt.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Z(w,v,O,et,tt,nt){const St=r.convert(O.format,O.colorSpace),ut=r.convert(O.type),_t=T(O.internalFormat,St,ut,O.colorSpace);if(!n.get(v).__hasExternalTextures){const Ht=Math.max(1,v.width>>nt),Q=Math.max(1,v.height>>nt);tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?e.texImage3D(tt,nt,_t,Ht,Q,v.depth,0,St,ut,null):e.texImage2D(tt,nt,_t,Ht,Q,0,St,ut,null)}e.bindFramebuffer(s.FRAMEBUFFER,w),pt(v)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,et,tt,n.get(O).__webglTexture,0,yt(v)):(tt===s.TEXTURE_2D||tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,et,tt,n.get(O).__webglTexture,nt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function mt(w,v,O){if(s.bindRenderbuffer(s.RENDERBUFFER,w),v.depthBuffer&&!v.stencilBuffer){let et=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(O||pt(v)){const tt=v.depthTexture;tt&&tt.isDepthTexture&&(tt.type===yn?et=s.DEPTH_COMPONENT32F:tt.type===xn&&(et=s.DEPTH_COMPONENT24));const nt=yt(v);pt(v)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,nt,et,v.width,v.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,nt,et,v.width,v.height)}else s.renderbufferStorage(s.RENDERBUFFER,et,v.width,v.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,w)}else if(v.depthBuffer&&v.stencilBuffer){const et=yt(v);O&&pt(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,et,s.DEPTH24_STENCIL8,v.width,v.height):pt(v)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,et,s.DEPTH24_STENCIL8,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,w)}else{const et=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let tt=0;tt<et.length;tt++){const nt=et[tt],St=r.convert(nt.format,nt.colorSpace),ut=r.convert(nt.type),_t=T(nt.internalFormat,St,ut,nt.colorSpace),Ct=yt(v);O&&pt(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct,_t,v.width,v.height):pt(v)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct,_t,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,_t,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function gt(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),k(v.depthTexture,0);const et=n.get(v.depthTexture).__webglTexture,tt=yt(v);if(v.depthTexture.format===zn)pt(v)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0);else if(v.depthTexture.format===fi)pt(v)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Mt(w){const v=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");gt(v.__webglFramebuffer,w)}else if(O){v.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[et]),v.__webglDepthbuffer[et]=s.createRenderbuffer(),mt(v.__webglDepthbuffer[et],w,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=s.createRenderbuffer(),mt(v.__webglDepthbuffer,w,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Rt(w,v,O){const et=n.get(w);v!==void 0&&Z(et.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Mt(w)}function U(w){const v=w.texture,O=n.get(w),et=n.get(v);w.addEventListener("dispose",X),w.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=s.createTexture()),et.__version=v.version,a.memory.textures++);const tt=w.isWebGLCubeRenderTarget===!0,nt=w.isWebGLMultipleRenderTargets===!0,St=m(w)||o;if(tt){O.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(o&&v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[ut]=[];for(let _t=0;_t<v.mipmaps.length;_t++)O.__webglFramebuffer[ut][_t]=s.createFramebuffer()}else O.__webglFramebuffer[ut]=s.createFramebuffer()}else{if(o&&v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let ut=0;ut<v.mipmaps.length;ut++)O.__webglFramebuffer[ut]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(nt)if(i.drawBuffers){const ut=w.texture;for(let _t=0,Ct=ut.length;_t<Ct;_t++){const Ht=n.get(ut[_t]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&pt(w)===!1){const ut=nt?v:[v];O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let _t=0;_t<ut.length;_t++){const Ct=ut[_t];O.__webglColorRenderbuffer[_t]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[_t]);const Ht=r.convert(Ct.format,Ct.colorSpace),Q=r.convert(Ct.type),Kt=T(Ct.internalFormat,Ht,Q,Ct.colorSpace,w.isXRRenderTarget===!0),Xt=yt(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt,Kt,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,O.__webglColorRenderbuffer[_t])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),mt(O.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(tt){e.bindTexture(s.TEXTURE_CUBE_MAP,et.__webglTexture),W(s.TEXTURE_CUBE_MAP,v,St);for(let ut=0;ut<6;ut++)if(o&&v.mipmaps&&v.mipmaps.length>0)for(let _t=0;_t<v.mipmaps.length;_t++)Z(O.__webglFramebuffer[ut][_t],w,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,_t);else Z(O.__webglFramebuffer[ut],w,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);M(v,St)&&x(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(nt){const ut=w.texture;for(let _t=0,Ct=ut.length;_t<Ct;_t++){const Ht=ut[_t],Q=n.get(Ht);e.bindTexture(s.TEXTURE_2D,Q.__webglTexture),W(s.TEXTURE_2D,Ht,St),Z(O.__webglFramebuffer,w,Ht,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,0),M(Ht,St)&&x(s.TEXTURE_2D)}e.unbindTexture()}else{let ut=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?ut=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ut,et.__webglTexture),W(ut,v,St),o&&v.mipmaps&&v.mipmaps.length>0)for(let _t=0;_t<v.mipmaps.length;_t++)Z(O.__webglFramebuffer[_t],w,v,s.COLOR_ATTACHMENT0,ut,_t);else Z(O.__webglFramebuffer,w,v,s.COLOR_ATTACHMENT0,ut,0);M(v,St)&&x(ut),e.unbindTexture()}w.depthBuffer&&Mt(w)}function Jt(w){const v=m(w)||o,O=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let et=0,tt=O.length;et<tt;et++){const nt=O[et];if(M(nt,v)){const St=w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ut=n.get(nt).__webglTexture;e.bindTexture(St,ut),x(St),e.unbindTexture()}}}function xt(w){if(o&&w.samples>0&&pt(w)===!1){const v=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],O=w.width,et=w.height;let tt=s.COLOR_BUFFER_BIT;const nt=[],St=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=n.get(w),_t=w.isWebGLMultipleRenderTargets===!0;if(_t)for(let Ct=0;Ct<v.length;Ct++)e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let Ct=0;Ct<v.length;Ct++){nt.push(s.COLOR_ATTACHMENT0+Ct),w.depthBuffer&&nt.push(St);const Ht=ut.__ignoreDepthValues!==void 0?ut.__ignoreDepthValues:!1;if(Ht===!1&&(w.depthBuffer&&(tt|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&(tt|=s.STENCIL_BUFFER_BIT)),_t&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ut.__webglColorRenderbuffer[Ct]),Ht===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[St]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[St])),_t){const Q=n.get(v[Ct]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Q,0)}s.blitFramebuffer(0,0,O,et,0,0,O,et,tt,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,nt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),_t)for(let Ct=0;Ct<v.length;Ct++){e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.RENDERBUFFER,ut.__webglColorRenderbuffer[Ct]);const Ht=n.get(v[Ct]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.TEXTURE_2D,Ht,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}}function yt(w){return Math.min(i.maxSamples,w.samples)}function pt(w){const v=n.get(w);return o&&w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function jt(w){const v=a.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function Bt(w,v){const O=w.colorSpace,et=w.format,tt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Mr||O!==fn&&O!==Ve&&($t.getTransfer(O)===ee?o===!1?t.has("EXT_sRGB")===!0&&et===Je?(w.format=Mr,w.minFilter=ke,w.generateMipmaps=!1):v=ko.sRGBToLinear(v):(et!==Je||tt!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}this.allocateTextureUnit=L,this.resetTextureUnits=K,this.setTexture2D=k,this.setTexture2DArray=J,this.setTexture3D=q,this.setTextureCube=Y,this.rebindTextures=Rt,this.setupRenderTarget=U,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=pt}function Pp(s,t,e){const n=e.isWebGL2;function i(r,a=Ve){let o;const l=$t.getTransfer(a);if(r===En)return s.UNSIGNED_BYTE;if(r===Lo)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Do)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Zl)return s.BYTE;if(r===Ql)return s.SHORT;if(r===br)return s.UNSIGNED_SHORT;if(r===Po)return s.INT;if(r===xn)return s.UNSIGNED_INT;if(r===yn)return s.FLOAT;if(r===Oi)return n?s.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===tc)return s.ALPHA;if(r===Je)return s.RGBA;if(r===ec)return s.LUMINANCE;if(r===nc)return s.LUMINANCE_ALPHA;if(r===zn)return s.DEPTH_COMPONENT;if(r===fi)return s.DEPTH_STENCIL;if(r===Mr)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===ic)return s.RED;if(r===Io)return s.RED_INTEGER;if(r===sc)return s.RG;if(r===Uo)return s.RG_INTEGER;if(r===No)return s.RGBA_INTEGER;if(r===Us||r===Ns||r===Fs||r===Os)if(l===ee)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Us)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ns)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Os)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Us)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ns)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Os)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ea||r===na||r===ia||r===sa)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===ea)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===na)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ia)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===sa)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Fo)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ra||r===aa)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===ra)return l===ee?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===aa)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===oa||r===la||r===ca||r===ha||r===ua||r===da||r===fa||r===pa||r===ma||r===ga||r===_a||r===va||r===xa||r===ya)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===oa)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===la)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ca)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ha)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ua)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===da)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===fa)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===pa)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ma)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ga)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===_a)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===va)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===xa)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ya)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===zs||r===Ma||r===Sa)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===zs)return l===ee?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ma)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Sa)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===rc||r===Ea||r===wa||r===Ta)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===zs)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Ea)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===wa)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ta)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===On?n?s.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Lp extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ze extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dp={type:"move"};class or{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dp)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ze;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Ip extends _i{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null;const _=e.getContextAttributes();let m=null,d=null;const M=[],x=[],T=new ft;let P=null;const A=new Oe;A.layers.enable(1),A.viewport=new ie;const R=new Oe;R.layers.enable(2),R.viewport=new ie;const X=[A,R],y=new Lp;y.layers.enable(1),y.layers.enable(2);let b=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let D=M[W];return D===void 0&&(D=new or,M[W]=D),D.getTargetRaySpace()},this.getControllerGrip=function(W){let D=M[W];return D===void 0&&(D=new or,M[W]=D),D.getGripSpace()},this.getHand=function(W){let D=M[W];return D===void 0&&(D=new or,M[W]=D),D.getHandSpace()};function H(W){const D=x.indexOf(W.inputSource);if(D===-1)return;const B=M[D];B!==void 0&&(B.update(W.inputSource,W.frame,c||a),B.dispatchEvent({type:W.type,data:W.inputSource}))}function K(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",L);for(let W=0;W<M.length;W++){const D=x[W];D!==null&&(x[W]=null,M[W].disconnect(D))}b=null,V=null,t.setRenderTarget(m),p=null,f=null,u=null,i=null,d=null,it.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",K),i.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(T),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const D={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,D),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new Gn(p.framebufferWidth,p.framebufferHeight,{format:Je,type:En,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let D=null,B=null,j=null;_.depth&&(j=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,D=_.stencil?fi:zn,B=_.stencil?On:xn);const Z={colorFormat:e.RGBA8,depthFormat:j,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(Z),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),d=new Gn(f.textureWidth,f.textureHeight,{format:Je,type:En,depthTexture:new Qo(f.textureWidth,f.textureHeight,B,void 0,void 0,void 0,void 0,void 0,void 0,D),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const mt=t.properties.get(d);mt.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),it.setContext(i),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(W){for(let D=0;D<W.removed.length;D++){const B=W.removed[D],j=x.indexOf(B);j>=0&&(x[j]=null,M[j].disconnect(B))}for(let D=0;D<W.added.length;D++){const B=W.added[D];let j=x.indexOf(B);if(j===-1){for(let mt=0;mt<M.length;mt++)if(mt>=x.length){x.push(B),j=mt;break}else if(x[mt]===null){x[mt]=B,j=mt;break}if(j===-1)break}const Z=M[j];Z&&Z.connect(B)}}const N=new E,k=new E;function J(W,D,B){N.setFromMatrixPosition(D.matrixWorld),k.setFromMatrixPosition(B.matrixWorld);const j=N.distanceTo(k),Z=D.projectionMatrix.elements,mt=B.projectionMatrix.elements,gt=Z[14]/(Z[10]-1),Mt=Z[14]/(Z[10]+1),Rt=(Z[9]+1)/Z[5],U=(Z[9]-1)/Z[5],Jt=(Z[8]-1)/Z[0],xt=(mt[8]+1)/mt[0],yt=gt*Jt,pt=gt*xt,jt=j/(-Jt+xt),Bt=jt*-Jt;D.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Bt),W.translateZ(jt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const w=gt+jt,v=Mt+jt,O=yt-Bt,et=pt+(j-Bt),tt=Rt*Mt/v*w,nt=U*Mt/v*w;W.projectionMatrix.makePerspective(O,et,tt,nt,w,v),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function q(W,D){D===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(D.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;y.near=R.near=A.near=W.near,y.far=R.far=A.far=W.far,(b!==y.near||V!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),b=y.near,V=y.far);const D=W.parent,B=y.cameras;q(y,D);for(let j=0;j<B.length;j++)q(B[j],D);B.length===2?J(y,A,R):y.projectionMatrix.copy(A.projectionMatrix),Y(W,y,D)};function Y(W,D,B){B===null?W.matrix.copy(D.matrixWorld):(W.matrix.copy(B.matrixWorld),W.matrix.invert(),W.matrix.multiply(D.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(D.projectionMatrix),W.projectionMatrixInverse.copy(D.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=zi*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)};let $=null;function st(W,D){if(h=D.getViewerPose(c||a),g=D,h!==null){const B=h.views;p!==null&&(t.setRenderTargetFramebuffer(d,p.framebuffer),t.setRenderTarget(d));let j=!1;B.length!==y.cameras.length&&(y.cameras.length=0,j=!0);for(let Z=0;Z<B.length;Z++){const mt=B[Z];let gt=null;if(p!==null)gt=p.getViewport(mt);else{const Rt=u.getViewSubImage(f,mt);gt=Rt.viewport,Z===0&&(t.setRenderTargetTextures(d,Rt.colorTexture,f.ignoreDepthValues?void 0:Rt.depthStencilTexture),t.setRenderTarget(d))}let Mt=X[Z];Mt===void 0&&(Mt=new Oe,Mt.layers.enable(Z),Mt.viewport=new ie,X[Z]=Mt),Mt.matrix.fromArray(mt.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(mt.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set(gt.x,gt.y,gt.width,gt.height),Z===0&&(y.matrix.copy(Mt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),j===!0&&y.cameras.push(Mt)}}for(let B=0;B<M.length;B++){const j=x[B],Z=M[B];j!==null&&Z!==void 0&&Z.update(j,D,c||a)}$&&$(W,D),D.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:D}),g=null}const it=new jo;it.setAnimationLoop(st),this.setAnimationLoop=function(W){$=W},this.dispose=function(){}}}function Up(s,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Ko(s)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,M,x,T){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,T)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,M,x):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Pe&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Pe&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const M=t.get(d).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const x=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*x,e(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,M,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=x*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),t.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Pe&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const M=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Np(s,t,e,n){let i={},r={},a=[];const o=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,x){const T=x.program;n.uniformBlockBinding(M,T)}function c(M,x){let T=i[M.id];T===void 0&&(g(M),T=h(M),i[M.id]=T,M.addEventListener("dispose",m));const P=x.program;n.updateUBOMapping(M,P);const A=t.render.frame;r[M.id]!==A&&(f(M),r[M.id]=A)}function h(M){const x=u();M.__bindingPointIndex=x;const T=s.createBuffer(),P=M.__size,A=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,P,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,T),T}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const x=i[M.id],T=M.uniforms,P=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let A=0,R=T.length;A<R;A++){const X=Array.isArray(T[A])?T[A]:[T[A]];for(let y=0,b=X.length;y<b;y++){const V=X[y];if(p(V,A,y,P)===!0){const H=V.__offset,K=Array.isArray(V.value)?V.value:[V.value];let L=0;for(let N=0;N<K.length;N++){const k=K[N],J=_(k);typeof k=="number"||typeof k=="boolean"?(V.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,H+L,V.__data)):k.isMatrix3?(V.__data[0]=k.elements[0],V.__data[1]=k.elements[1],V.__data[2]=k.elements[2],V.__data[3]=0,V.__data[4]=k.elements[3],V.__data[5]=k.elements[4],V.__data[6]=k.elements[5],V.__data[7]=0,V.__data[8]=k.elements[6],V.__data[9]=k.elements[7],V.__data[10]=k.elements[8],V.__data[11]=0):(k.toArray(V.__data,L),L+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,H,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(M,x,T,P){const A=M.value,R=x+"_"+T;if(P[R]===void 0)return typeof A=="number"||typeof A=="boolean"?P[R]=A:P[R]=A.clone(),!0;{const X=P[R];if(typeof A=="number"||typeof A=="boolean"){if(X!==A)return P[R]=A,!0}else if(X.equals(A)===!1)return X.copy(A),!0}return!1}function g(M){const x=M.uniforms;let T=0;const P=16;for(let R=0,X=x.length;R<X;R++){const y=Array.isArray(x[R])?x[R]:[x[R]];for(let b=0,V=y.length;b<V;b++){const H=y[b],K=Array.isArray(H.value)?H.value:[H.value];for(let L=0,N=K.length;L<N;L++){const k=K[L],J=_(k),q=T%P;q!==0&&P-q<J.boundary&&(T+=P-q),H.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=T,T+=J.storage}}}const A=T%P;return A>0&&(T+=P-A),M.__size=T,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const T=a.indexOf(x.__bindingPointIndex);a.splice(T,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function d(){for(const M in i)s.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:l,update:c,dispose:d}}class rl{constructor(t={}){const{canvas:e=Pc(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const d=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ne,this._useLegacyLights=!1,this.toneMapping=Sn,this.toneMappingExposure=1;const x=this;let T=!1,P=0,A=0,R=null,X=-1,y=null;const b=new ie,V=new ie;let H=null;const K=new qt(0);let L=0,N=e.width,k=e.height,J=1,q=null,Y=null;const $=new ie(0,0,N,k),st=new ie(0,0,N,k);let it=!1;const W=new Pr;let D=!1,B=!1,j=null;const Z=new ce,mt=new ft,gt=new E,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Rt(){return R===null?J:1}let U=n;function Jt(S,I){for(let z=0;z<S.length;z++){const G=S[z],F=e.getContext(G,I);if(F!==null)return F}return null}try{const S={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Tr}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",C,!1),e.addEventListener("webglcontextcreationerror",ct,!1),U===null){const I=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&I.shift(),U=Jt(I,S),U===null)throw Jt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let xt,yt,pt,jt,Bt,w,v,O,et,tt,nt,St,ut,_t,Ct,Ht,Q,Kt,Xt,It,wt,vt,Ot,Yt;function oe(){xt=new Wd(U),yt=new zd(U,xt,t),xt.init(yt),vt=new Pp(U,xt,yt),pt=new Rp(U,xt,yt),jt=new Yd(U),Bt=new pp,w=new Cp(U,xt,pt,Bt,yt,vt,jt),v=new Hd(x),O=new Vd(x),et=new eh(U,yt),Ot=new Fd(U,xt,et,yt),tt=new Xd(U,et,jt,Ot),nt=new jd(U,tt,et,jt),Xt=new Jd(U,yt,w),Ht=new Bd(Bt),St=new fp(x,v,O,xt,yt,Ot,Ht),ut=new Up(x,Bt),_t=new gp,Ct=new Sp(xt,yt),Kt=new Nd(x,v,O,pt,nt,f,l),Q=new Ap(x,nt,yt),Yt=new Np(U,jt,yt,pt),It=new Od(U,xt,jt,yt),wt=new qd(U,xt,jt,yt),jt.programs=St.programs,x.capabilities=yt,x.extensions=xt,x.properties=Bt,x.renderLists=_t,x.shadowMap=Q,x.state=pt,x.info=jt}oe();const kt=new Ip(x,U);this.xr=kt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const S=xt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=xt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(S){S!==void 0&&(J=S,this.setSize(N,k,!1))},this.getSize=function(S){return S.set(N,k)},this.setSize=function(S,I,z=!0){if(kt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=S,k=I,e.width=Math.floor(S*J),e.height=Math.floor(I*J),z===!0&&(e.style.width=S+"px",e.style.height=I+"px"),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(N*J,k*J).floor()},this.setDrawingBufferSize=function(S,I,z){N=S,k=I,J=z,e.width=Math.floor(S*z),e.height=Math.floor(I*z),this.setViewport(0,0,S,I)},this.getCurrentViewport=function(S){return S.copy(b)},this.getViewport=function(S){return S.copy($)},this.setViewport=function(S,I,z,G){S.isVector4?$.set(S.x,S.y,S.z,S.w):$.set(S,I,z,G),pt.viewport(b.copy($).multiplyScalar(J).floor())},this.getScissor=function(S){return S.copy(st)},this.setScissor=function(S,I,z,G){S.isVector4?st.set(S.x,S.y,S.z,S.w):st.set(S,I,z,G),pt.scissor(V.copy(st).multiplyScalar(J).floor())},this.getScissorTest=function(){return it},this.setScissorTest=function(S){pt.setScissorTest(it=S)},this.setOpaqueSort=function(S){q=S},this.setTransparentSort=function(S){Y=S},this.getClearColor=function(S){return S.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor.apply(Kt,arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha.apply(Kt,arguments)},this.clear=function(S=!0,I=!0,z=!0){let G=0;if(S){let F=!1;if(R!==null){const dt=R.texture.format;F=dt===No||dt===Uo||dt===Io}if(F){const dt=R.texture.type,Et=dt===En||dt===xn||dt===br||dt===On||dt===Lo||dt===Do,At=Kt.getClearColor(),Lt=Kt.getClearAlpha(),Gt=At.r,Ut=At.g,Nt=At.b;Et?(p[0]=Gt,p[1]=Ut,p[2]=Nt,p[3]=Lt,U.clearBufferuiv(U.COLOR,0,p)):(g[0]=Gt,g[1]=Ut,g[2]=Nt,g[3]=Lt,U.clearBufferiv(U.COLOR,0,g))}else G|=U.COLOR_BUFFER_BIT}I&&(G|=U.DEPTH_BUFFER_BIT),z&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",C,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),_t.dispose(),Ct.dispose(),Bt.dispose(),v.dispose(),O.dispose(),nt.dispose(),Ot.dispose(),Yt.dispose(),St.dispose(),kt.dispose(),kt.removeEventListener("sessionstart",we),kt.removeEventListener("sessionend",te),j&&(j.dispose(),j=null),Te.stop()};function at(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const S=jt.autoReset,I=Q.enabled,z=Q.autoUpdate,G=Q.needsUpdate,F=Q.type;oe(),jt.autoReset=S,Q.enabled=I,Q.autoUpdate=z,Q.needsUpdate=G,Q.type=F}function ct(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ht(S){const I=S.target;I.removeEventListener("dispose",ht),Pt(I)}function Pt(S){Tt(S),Bt.remove(S)}function Tt(S){const I=Bt.get(S).programs;I!==void 0&&(I.forEach(function(z){St.releaseProgram(z)}),S.isShaderMaterial&&St.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,z,G,F,dt){I===null&&(I=Mt);const Et=F.isMesh&&F.matrixWorld.determinant()<0,At=ml(S,I,z,G,F);pt.setMaterial(G,Et);let Lt=z.index,Gt=1;if(G.wireframe===!0){if(Lt=tt.getWireframeAttribute(z),Lt===void 0)return;Gt=2}const Ut=z.drawRange,Nt=z.attributes.position;let he=Ut.start*Gt,Ie=(Ut.start+Ut.count)*Gt;dt!==null&&(he=Math.max(he,dt.start*Gt),Ie=Math.min(Ie,(dt.start+dt.count)*Gt)),Lt!==null?(he=Math.max(he,0),Ie=Math.min(Ie,Lt.count)):Nt!=null&&(he=Math.max(he,0),Ie=Math.min(Ie,Nt.count));const ge=Ie-he;if(ge<0||ge===1/0)return;Ot.setup(F,G,At,z,Lt);let en,se=It;if(Lt!==null&&(en=et.get(Lt),se=wt,se.setIndex(en)),F.isMesh)G.wireframe===!0?(pt.setLineWidth(G.wireframeLinewidth*Rt()),se.setMode(U.LINES)):se.setMode(U.TRIANGLES);else if(F.isLine){let Vt=G.linewidth;Vt===void 0&&(Vt=1),pt.setLineWidth(Vt*Rt()),F.isLineSegments?se.setMode(U.LINES):F.isLineLoop?se.setMode(U.LINE_LOOP):se.setMode(U.LINE_STRIP)}else F.isPoints?se.setMode(U.POINTS):F.isSprite&&se.setMode(U.TRIANGLES);if(F.isBatchedMesh)se.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)se.renderInstances(he,ge,F.count);else if(z.isInstancedBufferGeometry){const Vt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Cs=Math.min(z.instanceCount,Vt);se.renderInstances(he,ge,Cs)}else se.render(he,ge)};function Zt(S,I,z){S.transparent===!0&&S.side===Ke&&S.forceSinglePass===!1?(S.side=Pe,S.needsUpdate=!0,Vi(S,I,z),S.side=Tn,S.needsUpdate=!0,Vi(S,I,z),S.side=Ke):Vi(S,I,z)}this.compile=function(S,I,z=null){z===null&&(z=S),m=Ct.get(z),m.init(),M.push(m),z.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),S!==z&&S.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights(x._useLegacyLights);const G=new Set;return S.traverse(function(F){const dt=F.material;if(dt)if(Array.isArray(dt))for(let Et=0;Et<dt.length;Et++){const At=dt[Et];Zt(At,z,F),G.add(At)}else Zt(dt,z,F),G.add(dt)}),M.pop(),m=null,G},this.compileAsync=function(S,I,z=null){const G=this.compile(S,I,z);return new Promise(F=>{function dt(){if(G.forEach(function(Et){Bt.get(Et).currentProgram.isReady()&&G.delete(Et)}),G.size===0){F(S);return}setTimeout(dt,10)}xt.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Qt=null;function me(S){Qt&&Qt(S)}function we(){Te.stop()}function te(){Te.start()}const Te=new jo;Te.setAnimationLoop(me),typeof self<"u"&&Te.setContext(self),this.setAnimationLoop=function(S){Qt=S,kt.setAnimationLoop(S),S===null?Te.stop():Te.start()},kt.addEventListener("sessionstart",we),kt.addEventListener("sessionend",te),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),kt.enabled===!0&&kt.isPresenting===!0&&(kt.cameraAutoUpdate===!0&&kt.updateCamera(I),I=kt.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,I,R),m=Ct.get(S,M.length),m.init(),M.push(m),Z.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),W.setFromProjectionMatrix(Z),B=this.localClippingEnabled,D=Ht.init(this.clippingPlanes,B),_=_t.get(S,d.length),_.init(),d.push(_),Ze(S,I,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(q,Y),this.info.render.frame++,D===!0&&Ht.beginShadows();const z=m.state.shadowsArray;if(Q.render(z,S,I),D===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),Kt.render(_,S),m.setupLights(x._useLegacyLights),I.isArrayCamera){const G=I.cameras;for(let F=0,dt=G.length;F<dt;F++){const Et=G[F];kr(_,S,Et,Et.viewport)}}else kr(_,S,I);R!==null&&(w.updateMultisampleRenderTarget(R),w.updateRenderTargetMipmap(R)),S.isScene===!0&&S.onAfterRender(x,S,I),Ot.resetDefaultState(),X=-1,y=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function Ze(S,I,z,G){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||W.intersectsSprite(S)){G&&gt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Z);const Et=nt.update(S),At=S.material;At.visible&&_.push(S,Et,At,z,gt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||W.intersectsObject(S))){const Et=nt.update(S),At=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),gt.copy(S.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),gt.copy(Et.boundingSphere.center)),gt.applyMatrix4(S.matrixWorld).applyMatrix4(Z)),Array.isArray(At)){const Lt=Et.groups;for(let Gt=0,Ut=Lt.length;Gt<Ut;Gt++){const Nt=Lt[Gt],he=At[Nt.materialIndex];he&&he.visible&&_.push(S,Et,he,z,gt.z,Nt)}}else At.visible&&_.push(S,Et,At,z,gt.z,null)}}const dt=S.children;for(let Et=0,At=dt.length;Et<At;Et++)Ze(dt[Et],I,z,G)}function kr(S,I,z,G){const F=S.opaque,dt=S.transmissive,Et=S.transparent;m.setupLightsView(z),D===!0&&Ht.setGlobalState(x.clippingPlanes,z),dt.length>0&&pl(F,dt,I,z),G&&pt.viewport(b.copy(G)),F.length>0&&ki(F,I,z),dt.length>0&&ki(dt,I,z),Et.length>0&&ki(Et,I,z),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function pl(S,I,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;const dt=yt.isWebGL2;j===null&&(j=new Gn(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")?Oi:En,minFilter:Fi,samples:dt?4:0})),x.getDrawingBufferSize(mt),dt?j.setSize(mt.x,mt.y):j.setSize(Ms(mt.x),Ms(mt.y));const Et=x.getRenderTarget();x.setRenderTarget(j),x.getClearColor(K),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const At=x.toneMapping;x.toneMapping=Sn,ki(S,z,G),w.updateMultisampleRenderTarget(j),w.updateRenderTargetMipmap(j);let Lt=!1;for(let Gt=0,Ut=I.length;Gt<Ut;Gt++){const Nt=I[Gt],he=Nt.object,Ie=Nt.geometry,ge=Nt.material,en=Nt.group;if(ge.side===Ke&&he.layers.test(G.layers)){const se=ge.side;ge.side=Pe,ge.needsUpdate=!0,Vr(he,z,G,Ie,ge,en),ge.side=se,ge.needsUpdate=!0,Lt=!0}}Lt===!0&&(w.updateMultisampleRenderTarget(j),w.updateRenderTargetMipmap(j)),x.setRenderTarget(Et),x.setClearColor(K,L),x.toneMapping=At}function ki(S,I,z){const G=I.isScene===!0?I.overrideMaterial:null;for(let F=0,dt=S.length;F<dt;F++){const Et=S[F],At=Et.object,Lt=Et.geometry,Gt=G===null?Et.material:G,Ut=Et.group;At.layers.test(z.layers)&&Vr(At,I,z,Lt,Gt,Ut)}}function Vr(S,I,z,G,F,dt){S.onBeforeRender(x,I,z,G,F,dt),S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(x,I,z,G,S,dt),F.transparent===!0&&F.side===Ke&&F.forceSinglePass===!1?(F.side=Pe,F.needsUpdate=!0,x.renderBufferDirect(z,I,G,F,S,dt),F.side=Tn,F.needsUpdate=!0,x.renderBufferDirect(z,I,G,F,S,dt),F.side=Ke):x.renderBufferDirect(z,I,G,F,S,dt),S.onAfterRender(x,I,z,G,F,dt)}function Vi(S,I,z){I.isScene!==!0&&(I=Mt);const G=Bt.get(S),F=m.state.lights,dt=m.state.shadowsArray,Et=F.state.version,At=St.getParameters(S,F.state,dt,I,z),Lt=St.getProgramCacheKey(At);let Gt=G.programs;G.environment=S.isMeshStandardMaterial?I.environment:null,G.fog=I.fog,G.envMap=(S.isMeshStandardMaterial?O:v).get(S.envMap||G.environment),Gt===void 0&&(S.addEventListener("dispose",ht),Gt=new Map,G.programs=Gt);let Ut=Gt.get(Lt);if(Ut!==void 0){if(G.currentProgram===Ut&&G.lightsStateVersion===Et)return Xr(S,At),Ut}else At.uniforms=St.getUniforms(S),S.onBuild(z,At,x),S.onBeforeCompile(At,x),Ut=St.acquireProgram(At,Lt),Gt.set(Lt,Ut),G.uniforms=At.uniforms;const Nt=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Nt.clippingPlanes=Ht.uniform),Xr(S,At),G.needsLights=_l(S),G.lightsStateVersion=Et,G.needsLights&&(Nt.ambientLightColor.value=F.state.ambient,Nt.lightProbe.value=F.state.probe,Nt.directionalLights.value=F.state.directional,Nt.directionalLightShadows.value=F.state.directionalShadow,Nt.spotLights.value=F.state.spot,Nt.spotLightShadows.value=F.state.spotShadow,Nt.rectAreaLights.value=F.state.rectArea,Nt.ltc_1.value=F.state.rectAreaLTC1,Nt.ltc_2.value=F.state.rectAreaLTC2,Nt.pointLights.value=F.state.point,Nt.pointLightShadows.value=F.state.pointShadow,Nt.hemisphereLights.value=F.state.hemi,Nt.directionalShadowMap.value=F.state.directionalShadowMap,Nt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Nt.spotShadowMap.value=F.state.spotShadowMap,Nt.spotLightMatrix.value=F.state.spotLightMatrix,Nt.spotLightMap.value=F.state.spotLightMap,Nt.pointShadowMap.value=F.state.pointShadowMap,Nt.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Ut,G.uniformsList=null,Ut}function Wr(S){if(S.uniformsList===null){const I=S.currentProgram.getUniforms();S.uniformsList=ps.seqWithValue(I.seq,S.uniforms)}return S.uniformsList}function Xr(S,I){const z=Bt.get(S);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function ml(S,I,z,G,F){I.isScene!==!0&&(I=Mt),w.resetTextureUnits();const dt=I.fog,Et=G.isMeshStandardMaterial?I.environment:null,At=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:fn,Lt=(G.isMeshStandardMaterial?O:v).get(G.envMap||Et),Gt=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ut=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Nt=!!z.morphAttributes.position,he=!!z.morphAttributes.normal,Ie=!!z.morphAttributes.color;let ge=Sn;G.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ge=x.toneMapping);const en=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,se=en!==void 0?en.length:0,Vt=Bt.get(G),Cs=m.state.lights;if(D===!0&&(B===!0||S!==y)){const He=S===y&&G.id===X;Ht.setState(G,S,He)}let le=!1;G.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Cs.state.version||Vt.outputColorSpace!==At||F.isBatchedMesh&&Vt.batching===!1||!F.isBatchedMesh&&Vt.batching===!0||F.isInstancedMesh&&Vt.instancing===!1||!F.isInstancedMesh&&Vt.instancing===!0||F.isSkinnedMesh&&Vt.skinning===!1||!F.isSkinnedMesh&&Vt.skinning===!0||F.isInstancedMesh&&Vt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Vt.instancingColor===!1&&F.instanceColor!==null||Vt.envMap!==Lt||G.fog===!0&&Vt.fog!==dt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Ht.numPlanes||Vt.numIntersection!==Ht.numIntersection)||Vt.vertexAlphas!==Gt||Vt.vertexTangents!==Ut||Vt.morphTargets!==Nt||Vt.morphNormals!==he||Vt.morphColors!==Ie||Vt.toneMapping!==ge||yt.isWebGL2===!0&&Vt.morphTargetsCount!==se)&&(le=!0):(le=!0,Vt.__version=G.version);let bn=Vt.currentProgram;le===!0&&(bn=Vi(G,I,F));let qr=!1,Ei=!1,Ps=!1;const Me=bn.getUniforms(),An=Vt.uniforms;if(pt.useProgram(bn.program)&&(qr=!0,Ei=!0,Ps=!0),G.id!==X&&(X=G.id,Ei=!0),qr||y!==S){Me.setValue(U,"projectionMatrix",S.projectionMatrix),Me.setValue(U,"viewMatrix",S.matrixWorldInverse);const He=Me.map.cameraPosition;He!==void 0&&He.setValue(U,gt.setFromMatrixPosition(S.matrixWorld)),yt.logarithmicDepthBuffer&&Me.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Me.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,Ei=!0,Ps=!0)}if(F.isSkinnedMesh){Me.setOptional(U,F,"bindMatrix"),Me.setOptional(U,F,"bindMatrixInverse");const He=F.skeleton;He&&(yt.floatVertexTextures?(He.boneTexture===null&&He.computeBoneTexture(),Me.setValue(U,"boneTexture",He.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(Me.setOptional(U,F,"batchingTexture"),Me.setValue(U,"batchingTexture",F._matricesTexture,w));const Ls=z.morphAttributes;if((Ls.position!==void 0||Ls.normal!==void 0||Ls.color!==void 0&&yt.isWebGL2===!0)&&Xt.update(F,z,bn),(Ei||Vt.receiveShadow!==F.receiveShadow)&&(Vt.receiveShadow=F.receiveShadow,Me.setValue(U,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(An.envMap.value=Lt,An.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),Ei&&(Me.setValue(U,"toneMappingExposure",x.toneMappingExposure),Vt.needsLights&&gl(An,Ps),dt&&G.fog===!0&&ut.refreshFogUniforms(An,dt),ut.refreshMaterialUniforms(An,G,J,k,j),ps.upload(U,Wr(Vt),An,w)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ps.upload(U,Wr(Vt),An,w),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Me.setValue(U,"center",F.center),Me.setValue(U,"modelViewMatrix",F.modelViewMatrix),Me.setValue(U,"normalMatrix",F.normalMatrix),Me.setValue(U,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const He=G.uniformsGroups;for(let Ds=0,vl=He.length;Ds<vl;Ds++)if(yt.isWebGL2){const Yr=He[Ds];Yt.update(Yr,bn),Yt.bind(Yr,bn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return bn}function gl(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function _l(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(S,I,z){Bt.get(S.texture).__webglTexture=I,Bt.get(S.depthTexture).__webglTexture=z;const G=Bt.get(S);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=z===void 0,G.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,I){const z=Bt.get(S);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(S,I=0,z=0){R=S,P=I,A=z;let G=!0,F=null,dt=!1,Et=!1;if(S){const Lt=Bt.get(S);Lt.__useDefaultFramebuffer!==void 0?(pt.bindFramebuffer(U.FRAMEBUFFER,null),G=!1):Lt.__webglFramebuffer===void 0?w.setupRenderTarget(S):Lt.__hasExternalTextures&&w.rebindTextures(S,Bt.get(S.texture).__webglTexture,Bt.get(S.depthTexture).__webglTexture);const Gt=S.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Et=!0);const Ut=Bt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ut[I])?F=Ut[I][z]:F=Ut[I],dt=!0):yt.isWebGL2&&S.samples>0&&w.useMultisampledRTT(S)===!1?F=Bt.get(S).__webglMultisampledFramebuffer:Array.isArray(Ut)?F=Ut[z]:F=Ut,b.copy(S.viewport),V.copy(S.scissor),H=S.scissorTest}else b.copy($).multiplyScalar(J).floor(),V.copy(st).multiplyScalar(J).floor(),H=it;if(pt.bindFramebuffer(U.FRAMEBUFFER,F)&&yt.drawBuffers&&G&&pt.drawBuffers(S,F),pt.viewport(b),pt.scissor(V),pt.setScissorTest(H),dt){const Lt=Bt.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+I,Lt.__webglTexture,z)}else if(Et){const Lt=Bt.get(S.texture),Gt=I||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Lt.__webglTexture,z||0,Gt)}X=-1},this.readRenderTargetPixels=function(S,I,z,G,F,dt,Et){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=Bt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Et!==void 0&&(At=At[Et]),At){pt.bindFramebuffer(U.FRAMEBUFFER,At);try{const Lt=S.texture,Gt=Lt.format,Ut=Lt.type;if(Gt!==Je&&vt.convert(Gt)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Nt=Ut===Oi&&(xt.has("EXT_color_buffer_half_float")||yt.isWebGL2&&xt.has("EXT_color_buffer_float"));if(Ut!==En&&vt.convert(Ut)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ut===yn&&(yt.isWebGL2||xt.has("OES_texture_float")||xt.has("WEBGL_color_buffer_float")))&&!Nt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-G&&z>=0&&z<=S.height-F&&U.readPixels(I,z,G,F,vt.convert(Gt),vt.convert(Ut),dt)}finally{const Lt=R!==null?Bt.get(R).__webglFramebuffer:null;pt.bindFramebuffer(U.FRAMEBUFFER,Lt)}}},this.copyFramebufferToTexture=function(S,I,z=0){const G=Math.pow(2,-z),F=Math.floor(I.image.width*G),dt=Math.floor(I.image.height*G);w.setTexture2D(I,0),U.copyTexSubImage2D(U.TEXTURE_2D,z,0,0,S.x,S.y,F,dt),pt.unbindTexture()},this.copyTextureToTexture=function(S,I,z,G=0){const F=I.image.width,dt=I.image.height,Et=vt.convert(z.format),At=vt.convert(z.type);w.setTexture2D(z,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment),I.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,G,S.x,S.y,F,dt,Et,At,I.image.data):I.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,G,S.x,S.y,I.mipmaps[0].width,I.mipmaps[0].height,Et,I.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,G,S.x,S.y,Et,At,I.image),G===0&&z.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),pt.unbindTexture()},this.copyTextureToTexture3D=function(S,I,z,G,F=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const dt=S.max.x-S.min.x+1,Et=S.max.y-S.min.y+1,At=S.max.z-S.min.z+1,Lt=vt.convert(G.format),Gt=vt.convert(G.type);let Ut;if(G.isData3DTexture)w.setTexture3D(G,0),Ut=U.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)w.setTexture2DArray(G,0),Ut=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,G.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,G.unpackAlignment);const Nt=U.getParameter(U.UNPACK_ROW_LENGTH),he=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ie=U.getParameter(U.UNPACK_SKIP_PIXELS),ge=U.getParameter(U.UNPACK_SKIP_ROWS),en=U.getParameter(U.UNPACK_SKIP_IMAGES),se=z.isCompressedTexture?z.mipmaps[F]:z.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,se.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,se.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,S.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,S.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,S.min.z),z.isDataTexture||z.isData3DTexture?U.texSubImage3D(Ut,F,I.x,I.y,I.z,dt,Et,At,Lt,Gt,se.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Ut,F,I.x,I.y,I.z,dt,Et,At,Lt,se.data)):U.texSubImage3D(Ut,F,I.x,I.y,I.z,dt,Et,At,Lt,Gt,se),U.pixelStorei(U.UNPACK_ROW_LENGTH,Nt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,he),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ie),U.pixelStorei(U.UNPACK_SKIP_ROWS,ge),U.pixelStorei(U.UNPACK_SKIP_IMAGES,en),F===0&&G.generateMipmaps&&U.generateMipmap(Ut),pt.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?w.setTextureCube(S,0):S.isData3DTexture?w.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?w.setTexture2DArray(S,0):w.setTexture2D(S,0),pt.unbindTexture()},this.resetState=function(){P=0,A=0,R=null,pt.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ar?"display-p3":"srgb",e.unpackColorSpace=$t.workingColorSpace===ws?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ne?Bn:Oo}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Bn?ne:fn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Fp extends rl{}Fp.prototype.isWebGL1Renderer=!0;class Dr{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new qt(t),this.density=e}clone(){return new Dr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ir{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new qt(t),this.near=e,this.far=n}clone(){return new Ir(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Op extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class al extends yi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const mo=new E,go=new E,_o=new ce,lr=new xi,ds=new Ts;class zp extends ye{constructor(t=new De,e=new al){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)mo.fromBufferAttribute(e,i-1),go.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=mo.distanceTo(go);t.setAttribute("lineDistance",new ae(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ds.copy(n.boundingSphere),ds.applyMatrix4(i),ds.radius+=r,t.ray.intersectsSphere(ds)===!1)return;_o.copy(i).invert(),lr.copy(t.ray).applyMatrix4(_o);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new E,h=new E,u=new E,f=new E,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const d=Math.max(0,a.start),M=Math.min(g.count,a.start+a.count);for(let x=d,T=M-1;x<T;x+=p){const P=g.getX(x),A=g.getX(x+1);if(c.fromBufferAttribute(m,P),h.fromBufferAttribute(m,A),lr.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const X=t.ray.origin.distanceTo(f);X<t.near||X>t.far||e.push({distance:X,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,a.start),M=Math.min(m.count,a.start+a.count);for(let x=d,T=M-1;x<T;x+=p){if(c.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),lr.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const A=t.ray.origin.distanceTo(f);A<t.near||A>t.far||e.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}class Si extends Le{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class tn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],f=n[i+1]-h,p=(a-h)/f;return(i+p)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new ft:new E);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new E,i=[],r=[],a=[],o=new E,l=new ce;for(let p=0;p<=t;p++){const g=p/t;i[p]=this.getTangentAt(g,new E)}r[0]=new E,a[0]=new E;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(xe(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(i[p],r[p])}if(e===!0){let p=Math.acos(xe(r[0].dot(r[t]),-1,1));p/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ur extends tn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){const n=e||new ft,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Bp extends Ur{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Nr(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,p*=h,i(a,o,f,p)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const fs=new E,cr=new Nr,hr=new Nr,ur=new Nr;class Hp extends tn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new E){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(fs.subVectors(i[0],i[1]).add(i[0]),c=fs);const u=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(fs.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=fs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),cr.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,m),hr.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,m),ur.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(cr.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),hr.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),ur.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(cr.calc(l),hr.calc(l),ur.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new E().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function vo(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function Gp(s,t){const e=1-s;return e*e*t}function kp(s,t){return 2*(1-s)*s*t}function Vp(s,t){return s*s*t}function Ii(s,t,e,n){return Gp(s,t)+kp(s,e)+Vp(s,n)}function Wp(s,t){const e=1-s;return e*e*e*t}function Xp(s,t){const e=1-s;return 3*e*e*s*t}function qp(s,t){return 3*(1-s)*s*s*t}function Yp(s,t){return s*s*s*t}function Ui(s,t,e,n,i){return Wp(s,t)+Xp(s,e)+qp(s,n)+Yp(s,i)}class ol extends tn{constructor(t=new ft,e=new ft,n=new ft,i=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ft){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ui(t,i.x,r.x,a.x,o.x),Ui(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Kp extends tn{constructor(t=new E,e=new E,n=new E,i=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new E){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ui(t,i.x,r.x,a.x,o.x),Ui(t,i.y,r.y,a.y,o.y),Ui(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ll extends tn{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $p extends tn{constructor(t=new E,e=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new E){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new E){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cl extends tn{constructor(t=new ft,e=new ft,n=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ft){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Ii(t,i.x,r.x,a.x),Ii(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jp extends tn{constructor(t=new E,e=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new E){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Ii(t,i.x,r.x,a.x),Ii(t,i.y,r.y,a.y),Ii(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hl extends tn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(vo(o,l.x,c.x,h.x,u.x),vo(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ft().fromArray(i))}return this}}var xo=Object.freeze({__proto__:null,ArcCurve:Bp,CatmullRomCurve3:Hp,CubicBezierCurve:ol,CubicBezierCurve3:Kp,EllipseCurve:Ur,LineCurve:ll,LineCurve3:$p,QuadraticBezierCurve:cl,QuadraticBezierCurve3:Jp,SplineCurve:hl});class jp extends tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new xo[i.type]().fromJSON(i))}return this}}class Zp extends jp{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ll(this.currentPoint.clone(),new ft(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new cl(this.currentPoint.clone(),new ft(t,e),new ft(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new ol(this.currentPoint.clone(),new ft(t,e),new ft(n,i),new ft(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new hl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){const c=new Ur(t,e,n,i,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Fr extends De{constructor(t=[new ft(0,-.5),new ft(.5,0),new ft(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=xe(i,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/e,u=new E,f=new ft,p=new E,g=new E,_=new E;let m=0,d=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,d=t[M+1].y-t[M].y,p.x=d*1,p.y=-m,p.z=d*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[M+1].x-t[M].x,d=t[M+1].y-t[M].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let M=0;M<=e;M++){const x=n+M*h*i,T=Math.sin(x),P=Math.cos(x);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*T,u.y=t[A].y,u.z=t[A].x*P,a.push(u.x,u.y,u.z),f.x=M/e,f.y=A/(t.length-1),o.push(f.x,f.y);const R=l[3*A+0]*T,X=l[3*A+1],y=l[3*A+0]*P;c.push(R,X,y)}}for(let M=0;M<e;M++)for(let x=0;x<t.length-1;x++){const T=x+M*t.length,P=T,A=T+t.length,R=T+t.length+1,X=T+1;r.push(P,A,X),r.push(R,X,A)}this.setIndex(r),this.setAttribute("position",new ae(a,3)),this.setAttribute("uv",new ae(o,2)),this.setAttribute("normal",new ae(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fr(t.points,t.segments,t.phiStart,t.phiLength)}}class mi extends Fr{constructor(t=1,e=1,n=4,i=8){const r=new Zp;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new mi(t.radius,t.length,t.capSegments,t.radialSegments)}}class Or extends De{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new E,h=new ft;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const p=n+u/e*i;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ae(a,3)),this.setAttribute("normal",new ae(o,3)),this.setAttribute("uv",new ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Or(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ve extends De{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],p=[];let g=0;const _=[],m=n/2;let d=0;M(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ae(u,3)),this.setAttribute("normal",new ae(f,3)),this.setAttribute("uv",new ae(p,2));function M(){const T=new E,P=new E;let A=0;const R=(e-t)/n;for(let X=0;X<=r;X++){const y=[],b=X/r,V=b*(e-t)+t;for(let H=0;H<=i;H++){const K=H/i,L=K*l+o,N=Math.sin(L),k=Math.cos(L);P.x=V*N,P.y=-b*n+m,P.z=V*k,u.push(P.x,P.y,P.z),T.set(N,R,k).normalize(),f.push(T.x,T.y,T.z),p.push(K,1-b),y.push(g++)}_.push(y)}for(let X=0;X<i;X++)for(let y=0;y<r;y++){const b=_[y][X],V=_[y+1][X],H=_[y+1][X+1],K=_[y][X+1];h.push(b,V,K),h.push(V,H,K),A+=6}c.addGroup(d,A,0),d+=A}function x(T){const P=g,A=new ft,R=new E;let X=0;const y=T===!0?t:e,b=T===!0?1:-1;for(let H=1;H<=i;H++)u.push(0,m*b,0),f.push(0,b,0),p.push(.5,.5),g++;const V=g;for(let H=0;H<=i;H++){const L=H/i*l+o,N=Math.cos(L),k=Math.sin(L);R.x=y*k,R.y=m*b,R.z=y*N,u.push(R.x,R.y,R.z),f.push(0,b,0),A.x=N*.5+.5,A.y=k*.5*b+.5,p.push(A.x,A.y),g++}for(let H=0;H<i;H++){const K=P+H,L=V+H;T===!0?h.push(L,L+1,K):h.push(L+1,L,K),X+=3}c.addGroup(d,X,T===!0?1:2),d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ve(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ni extends ve{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Ni(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class zr extends De{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=t;const f=(e-t)/i,p=new E,g=new ft;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const d=r+m/n*a;p.x=u*Math.cos(d),p.y=u*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<i;_++){const m=_*(n+1);for(let d=0;d<n;d++){const M=d+m,x=M,T=M+n+1,P=M+n+2,A=M+1;o.push(x,T,A),o.push(T,P,A)}}this.setIndex(o),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(c,3)),this.setAttribute("uv",new ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Fn extends De{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new E,f=new E,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){const M=[],x=d/n;let T=0;d===0&&a===0?T=.5/e:d===n&&l===Math.PI&&(T=-.5/e);for(let P=0;P<=e;P++){const A=P/e;u.x=-t*Math.cos(i+A*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(i+A*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(A+T,1-x),M.push(c++)}h.push(M)}for(let d=0;d<n;d++)for(let M=0;M<e;M++){const x=h[d][M+1],T=h[d][M],P=h[d+1][M],A=h[d+1][M+1];(d!==0||a>0)&&p.push(x,T,A),(d!==n-1||l<Math.PI)&&p.push(T,P,A)}this.setIndex(p),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(_,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class bt extends yi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zo,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Br extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Qp extends Br{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const dr=new ce,yo=new E,Mo=new E;class ul{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pr,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;yo.setFromMatrixPosition(t.matrixWorld),e.position.copy(yo),Mo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Mo),e.updateMatrixWorld(),dr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(dr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const So=new ce,Ri=new E,fr=new E;class tm extends ul{constructor(){super(new Oe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ft(4,2),this._viewportCount=6,this._viewports=[new ie(2,1,1,1),new ie(0,1,1,1),new ie(3,1,1,1),new ie(1,1,1,1),new ie(3,0,1,1),new ie(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ri.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ri),fr.copy(n.position),fr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(fr),n.updateMatrixWorld(),i.makeTranslation(-Ri.x,-Ri.y,-Ri.z),So.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(So)}}class ms extends Br{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new tm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class em extends ul{constructor(){super(new Zo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pr extends Br{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new em}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class nm{constructor(t,e,n=0,i=1/0){this.ray=new xi(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Cr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return wr(t,this,n,e),n.sort(Eo),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)wr(t[i],this,n,e);return n.sort(Eo),n}}function Eo(s,t){return s.distance-t.distance}function wr(s,t,e,n){if(s.layers.test(t.layers)&&s.raycast(t,e),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)wr(i[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tr);const rt={movement:{walkSpeed:3.2,sprintSpeed:5.4,crouchSpeed:1.7,adsSpeedMult:.55,sprintFovBonus:4,baseFov:85,adsFov:62,jumpForce:4.8,gravity:18.5,airControlFactor:.58,acceleration:68,deceleration:64,groundFriction:14,wasdWorldRelative:!1,stepHeight:.35,slopeLimit:46,crouchHeight:1.05,standHeight:1.75,crouchTransitionSpeed:8.5,collisionRadius:.32,noclipThreshold:.04},camera:{sensitivity:1,mouseSensitivity:.0022,leanAngle:14,leanOffset:.42,leanSpeed:9.5,bobAmplitudeWalk:.025,bobFrequencyWalk:9,bobAmplitudeSprint:.045,swayAmount:.012,inertiaSpeed:6.5,recoilRecovery:8,landingKick:.09},weapons:{adsTransitionSpeed:11,recoilRecoveryBase:7.5,switchTime:.32},enemies:{detectionRange:28,fov:110,hearingRange:12,attackRange:24,reactionTime:.35,searchDuration:6,patrolSpeed:1.6,chaseSpeed:3.1},ballistics:{headMult:2.6,bodyMult:1,limbMult:.72,falloffStart:22,falloffEnd:55,penetrationEnabled:!1},health:{playerMax:100,enemyMax:80},input:{moveForward:"KeyW",moveBack:"KeyS",moveLeft:"KeyA",moveRight:"KeyD",sprint:"ShiftLeft",crouch:"ControlLeft",crouchAlt:"KeyC",jump:"Space",leanLeft:"KeyQ",leanRight:"KeyE",fire:0,ads:2,reload:"KeyR",interact:"KeyF",weap1:"Digit1",weap2:"Digit2",pause:"Escape"}};class im{constructor({scene:t,camera:e,renderer:n}){this.scene=t,this.camera=e,this.renderer=n,this.state="menu",this.time=0,this.deltaTime=0,this.player=null,this.weapons=null,this.enemies=null,this.world=null,this.interactions=null,this.hud=null,this.audio=null,this.input=null,this._pausedTimeScale=0}setRefs(t){Object.assign(this,t)}start(){this.state="playing",this.hideOverlay(),this.input?.requestPointerLock(),this.player?.reset(),this.enemies?.reset(),this.weapons?.reset(),this.hud?.show()}pause(){this.state==="playing"&&(this.state="paused",document.getElementById("overlay")?.classList.remove("hidden"),document.getElementById("pause-screen")?.classList.remove("hidden"),document.getElementById("start-screen")?.classList.add("hidden"),document.getElementById("death-screen")?.classList.add("hidden"),this.input?.clearAllKeys(),setTimeout(()=>this.input?.exitPointerLock(),30))}resume(){this.state==="paused"&&(this.state="playing",this.hideOverlay(),this.input?.clearAllKeys(),setTimeout(()=>this.input?.requestPointerLock(),80))}togglePause(){this.state==="playing"?this.pause():this.state==="paused"?this.resume():this.state==="menu"&&this.start()}hideOverlay(){document.getElementById("overlay")?.classList.add("hidden"),document.getElementById("start-screen")?.classList.add("hidden"),document.getElementById("pause-screen")?.classList.add("hidden"),document.getElementById("death-screen")?.classList.add("hidden")}die(t){if(this.state==="dead")return;this.state="dead",document.getElementById("overlay")?.classList.remove("hidden"),document.getElementById("death-screen")?.classList.remove("hidden"),document.getElementById("pause-screen")?.classList.add("hidden"),document.getElementById("start-screen")?.classList.add("hidden");const e=document.getElementById("death-stats");e&&t&&(e.textContent=`Eliminated • Time survived: ${t.time.toFixed(1)}s • Kills: ${t.kills}`),this.input?.exitPointerLock()}restart(){this.hideOverlay(),this.start()}onPointerLockChange(t){if(this.state==="playing"&&!t&&document.visibilityState==="visible"&&!document.hidden){const e=performance.now();(!this._lastPause||e-this._lastPause>600)&&(this._lastPause=e,this.pause())}}update(t){this.state==="playing"&&(this.time+=t,this.deltaTime=t)}canADS(){return!(!this.player||this.player.isSprinting&&this.player.sprintBlockAds||this.weapons?.isReloading||this.weapons?.isSwitching||this.state==="dead")}canFire(){return!(this.state!=="playing"||this.weapons?.isReloading&&!this.weapons?.current?.allowFireDuringReload||this.weapons?.isSwitching||this.player?.isDead)}}class sm{constructor(t){this.game=t,this.keys=new Set,this.mouseDown=[!1,!1,!1],this.mouseDelta={x:0,y:0},this.wheelDelta=0,this.pointerLocked=!1,this._sensitivity=parseFloat(localStorage.getItem("gauntlet_sens")||rt.camera.sensitivity),this._fov=parseFloat(localStorage.getItem("gauntlet_fov")||rt.movement.baseFov),this._invertY=localStorage.getItem("gauntlet_invertY")==="1",this._azerty=localStorage.getItem("gauntlet_azerty")==="1",localStorage.setItem("gauntlet_wasdWorld","0"),this._wasdWorld=!1,rt.movement.wasdWorldRelative=!1,rt.movement.baseFov=this._fov,this._lastMouseTime=performance.now(),this._onKeyDown=this._onKeyDown.bind(this),this._onKeyUp=this._onKeyUp.bind(this),this._onMouseDown=this._onMouseDown.bind(this),this._onMouseUp=this._onMouseUp.bind(this),this._onMouseMove=this._onMouseMove.bind(this),this._onWheel=this._onWheel.bind(this),this._onPointerLockChange=this._onPointerLockChange.bind(this),this._onBlur=this._onBlur.bind(this),this._onFocus=this._onFocus.bind(this),this._onVisibility=this._onVisibility.bind(this),this._onContextMenu=e=>e.preventDefault(),window.addEventListener("keydown",this._onKeyDown,{passive:!1}),window.addEventListener("keyup",this._onKeyUp),window.addEventListener("mousedown",this._onMouseDown),window.addEventListener("mouseup",this._onMouseUp),window.addEventListener("mousemove",this._onMouseMove),window.addEventListener("wheel",this._onWheel,{passive:!0}),window.addEventListener("blur",this._onBlur),window.addEventListener("focus",this._onFocus),document.addEventListener("visibilitychange",this._onVisibility),document.addEventListener("pointerlockchange",this._onPointerLockChange),document.addEventListener("contextmenu",this._onContextMenu)}get sensitivity(){return this._sensitivity}set sensitivity(t){this._sensitivity=Math.max(.1,Math.min(3,t)),localStorage.setItem("gauntlet_sens",String(this._sensitivity))}get fov(){return this._fov}set fov(t){this._fov=Math.max(70,Math.min(100,t)),rt.movement.baseFov=this._fov,localStorage.setItem("gauntlet_fov",String(this._fov))}get invertY(){return this._invertY}set invertY(t){this._invertY=!!t,localStorage.setItem("gauntlet_invertY",this._invertY?"1":"0")}get azerty(){return this._azerty}set azerty(t){this._azerty=!!t,localStorage.setItem("gauntlet_azerty",this._azerty?"1":"0")}get wasdWorld(){return this._wasdWorld}set wasdWorld(t){this._wasdWorld=!!t,rt.movement.wasdWorldRelative=this._wasdWorld,localStorage.setItem("gauntlet_wasdWorld",this._wasdWorld?"1":"0")}isDown(t){return this.keys.has(t)}isMoveForward(){return this._azerty?this.isDown("KeyZ")||this.isDown("ArrowUp"):this.isDown(rt.input.moveForward)||this.isDown("ArrowUp")}isMoveBack(){return this.isDown(rt.input.moveBack)||this.isDown("ArrowDown")}isMoveLeft(){return this._azerty?this.isDown("KeyQ")||this.isDown("ArrowLeft"):this.isDown(rt.input.moveLeft)||this.isDown("ArrowLeft")}isMoveRight(){return this.isDown(rt.input.moveRight)||this.isDown("ArrowRight")}isLeanLeft(){return this._azerty?this.isDown("KeyA"):this.isDown(rt.input.leanLeft)}isLeanRight(){return this.isDown(rt.input.leanRight)}isSprint(){return this.isDown(rt.input.sprint)}isCrouch(){return this.isDown(rt.input.crouch)||this.isDown(rt.input.crouchAlt)}isJump(){return this.isDown(rt.input.jump)}consumeMouseDelta(){const t=(r,a)=>Math.max(-a,Math.min(a,r)),e=t(this.mouseDelta.x,90),n=t(this.mouseDelta.y,90);return this.mouseDelta.x=0,this.mouseDelta.y=0,performance.now()-this._lastMouseTime>250?{x:0,y:0}:{x:e,y:n}}clearAllKeys(){this.keys.clear(),this.mouseDown=[!1,!1,!1],this.mouseDelta.x=0,this.mouseDelta.y=0}requestPointerLock(){if(this.game.state!=="playing")return;const t=this.game.renderer.domElement;t.requestPointerLock&&!this.pointerLocked&&t.requestPointerLock().catch(()=>{})}exitPointerLock(){document.pointerLockElement&&document.exitPointerLock().catch(()=>{})}_onKeyDown(t){if((t.code==="KeyI"||t.code==="Tab")&&(this.game.state==="playing"||this.game.state==="paused")){t.preventDefault(),this.game.weapons?.inventory?.toggle(),this.game.weapons.inventory.isOpen?this.exitPointerLock():this.game.state==="playing"&&this.requestPointerLock();return}if(t.code==="Digit3"){t.preventDefault(),this.game.state==="playing"&&this.game.weapons?.switchTo(2);return}if(t.code==="Digit4"){t.preventDefault(),this.game.state==="playing"&&this.game.weapons?.switchTo(3);return}if(t.code===rt.input.pause){if(t.preventDefault(),this.game.weapons?.inventory?.isOpen){this.game.weapons.inventory.close();return}this.game.state!=="dead"&&this.game.togglePause();return}this.game.state==="playing"&&(["F5","F12"].includes(t.code)||t.repeat&&[rt.input.reload,rt.input.interact,rt.input.weap1,rt.input.weap2,"Digit3","Digit4"].includes(t.code)||(this.keys.add(t.code),t.code===rt.input.weap1&&this.game.weapons?.switchTo(0),t.code===rt.input.weap2&&this.game.weapons?.switchTo(1),t.code===rt.input.reload&&this.game.weapons?.tryReload(),t.code===rt.input.interact&&this.game.interactions?.tryInteract()))}_onKeyUp(t){this.keys.delete(t.code)}_onBlur(){this.clearAllKeys(),this.game.state==="playing"&&this.game.pause()}_onFocus(){this.clearAllKeys()}_onVisibility(){document.hidden&&(this.clearAllKeys(),this.game.state==="playing"&&this.game.pause())}_onMouseDown(t){this.game.state==="menu"&&t.button===0||(this.mouseDown[t.button]=!0,this.game.state==="playing"&&!this.pointerLocked&&document.getElementById("overlay")?.classList.contains("hidden")&&this.requestPointerLock())}_onMouseUp(t){this.mouseDown[t.button]=!1}_onMouseMove(t){if(!this.pointerLocked)return;const e=t.movementX||0,n=t.movementY||0;Math.abs(e)<.2&&Math.abs(n)<.2||(this.mouseDelta.x+=e,this.mouseDelta.y+=n,this._lastMouseTime=performance.now())}_onWheel(t){this.wheelDelta+=t.deltaY}_onPointerLockChange(){const t=!!document.pointerLockElement;this.pointerLocked=t,t||(this.mouseDelta.x=0,this.mouseDelta.y=0),this.game.onPointerLockChange(t)}dispose(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),window.removeEventListener("mousedown",this._onMouseDown),window.removeEventListener("mouseup",this._onMouseUp),window.removeEventListener("mousemove",this._onMouseMove),window.removeEventListener("wheel",this._onWheel),window.removeEventListener("blur",this._onBlur),window.removeEventListener("focus",this._onFocus),document.removeEventListener("visibilitychange",this._onVisibility),document.removeEventListener("pointerlockchange",this._onPointerLockChange),document.removeEventListener("contextmenu",this._onContextMenu)}}const Dt={clamp(s,t,e){return Math.max(t,Math.min(e,s))},lerp(s,t,e){return s+(t-s)*e},damp(s,t,e,n){return Ho.damp(s,t,e,n)},toRad(s){return s*Math.PI/180},toDeg(s){return s*180/Math.PI},smoothstep(s){return s*s*(3-2*s)},seededRandom(s){const t=Math.sin(s*127.1)*43758.5453;return t-Math.floor(t)},intersectsRayBox(s,t,e){const n=new xi(s,t.clone().normalize()),i=new E;return n.intersectBox(e,i)!==null}};function mr(s,t,e,n,i){const r=new Ft(s,t,e),a=new bt({color:n,roughness:.85,metalness:.05}),o=new lt(r,a);return o.position.copy(i),o.castShadow=!0,o.receiveShadow=!0,o.userData.aabb=new Re().setFromCenterAndSize(i,new E(s,t,e)),o}class rm{constructor(t){this.game=t,this.position=new E(0,2,8),this.velocity=new E(0,0,0),this.yaw=0,this.pitch=0,this.pitchLimits={min:Dt.toRad(-88),max:Dt.toRad(88)},this.isGrounded=!1,this.isCrouching=!1,this.isSprinting=!1,this.isADSing=!1,this.isDead=!1,this.isJumping=!1,this.health=rt.health.playerMax,this.maxHealth=rt.health.playerMax,this._targetHeight=rt.movement.standHeight,this._currentHeight=rt.movement.standHeight,this._cameraHeightOffset=this._currentHeight-.15,this.lean=0,this.targetLean=0,this.leanCollisionScale=1,this._baseFov=rt.movement.baseFov,this.moveInput=new ft(0,0),this.wasGrounded=!0,this.fallStartY=0,this.radius=rt.movement.collisionRadius,this._tempBox=new Re,this._tempVec=new E,this.cameraRig=new ze,this.cameraRig.position.copy(this.position),this.sprintBlockAds=!0,this.kills=0,this.timeAlive=0}reset(){this.position.set(0,2,8),this.velocity.set(0,0,0),this.yaw=0,this.pitch=0,this.health=this.maxHealth,this.isDead=!1,this.isCrouching=!1,this.isSprinting=!1,this.isADSing=!1,this.lean=0,this.targetLean=0,this._targetHeight=rt.movement.standHeight,this._currentHeight=rt.movement.standHeight,this.timeAlive=0,this.kills=0,this.updateCameraRig(.016,!0),this.game.hud?.updateHealth(this.health,this.maxHealth)}update(t){if(this.isDead)return;if(this.game.weapons?.inventory?.isOpen){this.moveInput.set(0,0);return}this.timeAlive+=t;const e=this.game.input;if(!e)return;if(e.pointerLocked&&this.game.state==="playing"){const u=e.consumeMouseDelta();if(!(u.x===0&&u.y===0)){const f=rt.camera.mouseSensitivity*(e.sensitivity??1),p=e.invertY?1:-1;this.yaw-=u.x*f,this.pitch+=u.y*f*p,this.pitch=Dt.clamp(this.pitch,this.pitchLimits.min,this.pitchLimits.max)}}const n=e.isMoveForward()?1:0,i=e.isMoveBack()?1:0,r=e.isMoveLeft()?1:0,a=e.isMoveRight()?1:0;this.moveInput.set(a-r,n-i),this.moveInput.lengthSq()>1&&this.moveInput.normalize();const o=e.isCrouch();this.isCrouching=o,this._targetHeight=this.isCrouching?rt.movement.crouchHeight:rt.movement.standHeight;const c=this.moveInput.lengthSq()>.01&&!this.isCrouching&&!this.isADSing&&this.isGrounded&&!this.game.weapons?.isReloading;this.isSprinting=c&&e.isSprint(),this.isSprinting&&(this.targetLean=0),this._sprintPenalty=this.isSprinting&&Math.abs(this.moveInput.x)>.3?.88:1,e.isJump()&&this.isGrounded&&!this.isCrouching&&(this.velocity.y=rt.movement.jumpForce,this.isGrounded=!1,this.isJumping=!0,this.game.audio?.play("jump",this.position)),!this.isSprinting&&this.isGrounded&&!this.isJumping?(e.isLeanLeft()&&!e.isLeanRight()?this.targetLean=-1:e.isLeanRight()&&!e.isLeanLeft()?this.targetLean=1:this.targetLean=0,this.isADSing&&(this.targetLean*=.85),this.isCrouching&&(this.targetLean*=.92)):this.targetLean=0;const h=rt.camera.leanSpeed;this.lean=Dt.damp(this.lean,this.targetLean,h,t),Math.abs(this.lean)<.01&&this.targetLean===0&&(this.lean=0),this._currentHeight=Dt.damp(this._currentHeight,this._targetHeight,rt.movement.crouchTransitionSpeed,t),this._updatePhysics(t),this.updateCameraRig(t,!1),!this.wasGrounded&&this.isGrounded&&this.fallStartY-this.position.y>.5&&this.game.audio?.play("land",this.position),!this.isGrounded&&this.wasGrounded&&(this.fallStartY=this.position.y),this.wasGrounded=this.isGrounded}_updatePhysics(t){const e=rt.movement;this.isGrounded?this.velocity.y<0&&(this.velocity.y=-.5):this.velocity.y-=e.gravity*t;const n=new E;if(e.wasdWorldRelative)n.set(this.moveInput.x,0,-this.moveInput.y);else{const u=new E(Math.sin(this.yaw),0,-Math.cos(this.yaw)),f=new E(Math.cos(this.yaw),0,Math.sin(this.yaw));n.addScaledVector(f,this.moveInput.x),n.addScaledVector(u,this.moveInput.y)}n.lengthSq()>.001&&n.normalize();let i=e.walkSpeed;this.isSprinting?i=e.sprintSpeed*(this._sprintPenalty??1):this.isCrouching&&(i=e.crouchSpeed),this.isADSing&&(i*=e.adsSpeedMult);const r=this.game.weapons?.current?.movementPenalty??1;if(i*=r>.94?1:r,this.isGrounded)this.velocity.x=n.x*i,this.velocity.z=n.z*i;else{let u=e.acceleration*e.airControlFactor;const f=new ft(this.velocity.x,this.velocity.z),g=new ft(n.x*i,n.z*i).clone().sub(f),_=u*t,m=g.length();m>.001&&(g.normalize().multiplyScalar(Math.min(m,_)),f.add(g)),this.velocity.x=f.x,this.velocity.z=f.y}const a=this.game.world,o=a?a.getColliders():[],l=new E(this.velocity.x*t,0,this.velocity.z*t);this.position.add(this._collideAndSlide(l,o,e.collisionRadius,e.stepHeight));const c=new E(0,this.velocity.y*t,0),h=this._moveVertical(c,o);this.position.add(h.delta),this.isGrounded=h.grounded,h.hitCeiling&&this.velocity.y>0&&(this.velocity.y=0),this.isGrounded&&(this.velocity.y=Math.max(this.velocity.y,-.5),this.isJumping=!1),this.position.x=Dt.clamp(this.position.x,-48,48),this.position.z=Dt.clamp(this.position.z,-48,48),this.position.y<-20&&this.takeDamage(999,null)}_collideAndSlide(t,e,n,i){if(t.lengthSq()<1e-8)return t.clone();const r=f=>{const p=this.position.clone().add(f);return this._isColliding(p,e,n)?null:f},a=r(t);if(a)return a;const o=new E(t.x,0,0),l=new E(0,0,t.z);let c=new E(0,0,0);const h=r(o);if(h)c.add(h);else{const f=this._tryStep(new E(o.x,0,0),e,n,i);f&&c.add(f)}const u=r(l);if(u)c.add(u);else{const f=this._tryStep(new E(0,0,l.z),e,n,i);f&&c.add(f)}if(c.lengthSq()<1e-6){const f=this._tryStep(t,e,n,i);if(f)return f}return c}_tryStep(t,e,n,i){if(t.lengthSq()<1e-8)return null;const r=this.position.clone(),a=r.clone();if(a.y+=i+.02,this._isColliding(a,e,n))return null;const o=a.clone().add(t);if(this._isColliding(o,e,n))return null;const l=this._findGround(o,e,i+.4);if(l){const c=l.y;return new E(t.x,c-r.y,t.z)}return t.clone()}_findGround(t,e,n){const i=t.clone();i.y+=.1,new E(0,-1,0);let r=null;for(const a of e)t.x+.3<a.min.x||t.x-.3>a.max.x||t.z+.3<a.min.z||t.z-.3>a.max.z||a.max.y>t.y+.5||a.max.y<t.y-n||t.y>=a.max.y&&(r===null||a.max.y>r)&&(r=a.max.y);return r!==null?new E(t.x,r,t.z):null}_moveVertical(t,e){const n=this.position.clone(),i=n.clone().add(t);let r=!1,a=!1,o=t.clone();if(t.y<0){let l=-1/0;for(const c of e)i.x+this.radius<c.min.x||i.x-this.radius>c.max.x||i.z+this.radius<c.min.z||i.z-this.radius>c.max.z||(i.y,n.y>=c.max.y&&i.y<=c.max.y+.12&&c.max.y>l&&(l=c.max.y));if(l>-1/0)o.y=l-n.y+.02,r=!0;else for(const h of e)if(!(n.x+this.radius<h.min.x||n.x-this.radius>h.max.x)&&!(n.z+this.radius<h.min.z||n.z-this.radius>h.max.z)&&Math.abs(n.y-h.max.y)<.15&&t.y<=.01){r=!0,o.y=0;break}}else if(t.y>0)for(const l of e){if(i.x+this.radius<l.min.x||i.x-this.radius>l.max.x||i.z+this.radius<l.min.z||i.z-this.radius>l.max.z)continue;if(i.y+this._currentHeight>l.min.y&&n.y+this._currentHeight<l.min.y){o.y=l.min.y-(n.y+this._currentHeight)-.02,a=!0;break}}if(!r&&Math.abs(t.y)<.001){for(const c of e)if(!(n.x+this.radius<c.min.x||n.x-this.radius>c.max.x)&&!(n.z+this.radius<c.min.z||n.z-this.radius>c.max.z)&&Math.abs(n.y-c.max.y)<.18){r=!0;break}}return{delta:o,grounded:r,hitCeiling:a}}_isColliding(t,e,n){const i=[.15,this._currentHeight*.5,this._currentHeight-.15];for(const r of e)for(const a of i){const o=t.y+a;if(o<r.min.y||o>r.max.y)continue;const l=Dt.clamp(t.x,r.min.x,r.max.x),c=Dt.clamp(t.z,r.min.z,r.max.z),h=t.x-l,u=t.z-c;if(h*h+u*u<n*n-1e-6)return!0}return!1}updateCameraRig(t,e){const n=this.position.clone();n.y+=this._currentHeight-.05,e?this.cameraRig.position.copy(n):this.cameraRig.position.lerp(n,Dt.clamp(t*20,0,1));let i=rt.camera.leanOffset*this.lean,r=Dt.toRad(rt.camera.leanAngle*this.lean);if(Math.abs(this.lean)>.05&&this.game.world){const l=Math.sign(this.lean),c=this.cameraRig.position.clone(),h=new E(Math.cos(this.yaw)*l,0,Math.sin(this.yaw)*l).normalize(),u=this.game.world.getColliders();let f=1/0;for(const g of u){const _=new xi(c,h),m=new E;if(_.intersectBox(g,m)){const d=m.distanceTo(c);d<f&&(f=d)}}const p=.38;if(f<.7){const g=Dt.clamp((f-p)/.32,0,1);this.leanCollisionScale=Dt.damp(this.leanCollisionScale,g,12,t),i*=this.leanCollisionScale,r*=this.leanCollisionScale}else this.leanCollisionScale=Dt.damp(this.leanCollisionScale,1,12,t)}this.cameraRig.rotation.order="YZX",this.cameraRig.rotation.y=this.yaw,this.cameraRig.rotation.x=this.pitch,this.cameraRig.rotation.z=r;const a=i,o=new E(Math.cos(this.yaw),0,Math.sin(this.yaw));if(this.cameraRig.position.addScaledVector(o,a*.55),this.cameraRig.position.y-=Math.abs(this.lean)*.03,this.game.camera){this.game.camera.position.copy(this.cameraRig.position),this.game.camera.rotation.copy(this.cameraRig.rotation),this.game.camera.rotation.order="YZX";let l=rt.movement.baseFov;this.isSprinting&&(l+=rt.movement.sprintFovBonus),this.isADSing&&(l=this.game.weapons?.current?.adsFov??rt.movement.adsFov),this.game.camera.fov=Dt.damp(this.game.camera.fov,l,9,t),this.game.camera.updateProjectionMatrix()}}takeDamage(t,e){this.isDead||(this.health-=t,this.health=Math.max(0,this.health),this.game.hud?.updateHealth(this.health,this.maxHealth),this.game.audio?.play("hit",this.position),this.game.hud?.flashDamage(e),this.health<=0&&(this.isDead=!0,this.game.die({time:this.timeAlive,kills:this.kills})))}heal(t){this.health=Dt.clamp(this.health+t,0,this.maxHealth),this.game.hud?.updateHealth(this.health,this.maxHealth)}getEyePosition(){return this.cameraRig.position.clone()}getForward(){const t=new E(0,0,-1);return t.applyEuler(new Hi(this.pitch,this.yaw,0,"YXZ")),t.normalize()}getHitBoxes(){const t=this.position.clone(),e=this._currentHeight;return[{part:"head",center:t.clone().add(new E(0,e-.22,0)),radius:.22,mult:rt.ballistics.headMult},{part:"body",center:t.clone().add(new E(0,e*.55,0)),radius:.32,mult:rt.ballistics.bodyMult},{part:"limb",center:t.clone().add(new E(0,.35,0)),radius:.28,mult:rt.ballistics.limbMult}]}}class Ci{constructor(t){Object.assign(this,t),this.ammo=t.magSize,this.reserve=t.reserve,this.isReloading=!1,this.reloadProgress=0,this.reloadTotal=0,this.chambered=!0,this.fireCooldown=0,this.shotsFired=0,this.recoilAccum=0}canFire(){return!(this.isReloading&&!this.allowFireDuringReload||this.ammo<=0||this.fireCooldown>0)}getFireInterval(){return 60/this.fireRate}consumeAmmo(){return this.ammo>0?(this.ammo--,this.ammo===0&&(this.chambered=!1),!0):!1}startReload(t){if(this.isReloading||this.reserve<=0||this.ammo===this.magSize)return!1;this.isReloading=!0,this.reloadProgress=0;const e=this.magSize-this.ammo,n=Math.min(e,this.reserve);return n<=0?(this.isReloading=!1,!1):(this.reloadTotal=t||!this.chambered?this.emptyReloadTime:this.reloadTime,this.type==="shotgun"&&(this.reloadTotal=this.reloadTime,this._shotgunShellsToLoad=n,this._shotgunLoaded=0),!0)}updateReload(t){if(!this.isReloading)return!1;if(this.reloadProgress+=t,this.reloadProgress>=this.reloadTotal){if(this.type==="shotgun")return this.ammo=Math.min(this.magSize,this.ammo+1),this.reserve=Math.max(0,this.reserve-1),this._shotgunLoaded++,this.chambered=!0,this._shotgunLoaded>=this._shotgunShellsToLoad||this.ammo>=this.magSize||this.reserve<=0?(this.isReloading=!1,!0):(this.reloadProgress=0,!1);{const e=this.magSize-this.ammo,n=Math.min(e,this.reserve);return this.ammo+=n,this.reserve-=n,this.chambered=!0,this.isReloading=!1,!0}}return!1}cancelReload(){this.isReloading&&(this.isReloading=!1,this.reloadProgress=0)}addReserve(t){this.reserve+=t}}const ai={m4a1:{id:"m4a1",name:"M4A1",type:"rifle",fireMode:"auto",fireRate:780,magSize:30,reserve:90,reloadTime:1.85,emptyReloadTime:2.35,adsTime:.22,adsFov:62,damage:34,headMult:1,bodyMult:1,spread:{hip:1.8,ads:.42,movePenalty:1.6,crouchBonus:.78},recoil:{vertical:1.45,horizontal:.55,verticalVar:.35,horizVar:.6,recovery:7.2,pattern:[1,1.1,.9,1.25,1.15,.85,1,.95]},movementPenalty:.96,allowFireDuringReload:!1,canADS:!0},glock:{id:"glock",name:"G19",type:"pistol",fireMode:"semi",fireRate:420,magSize:17,reserve:51,reloadTime:1.35,emptyReloadTime:1.65,adsTime:.16,adsFov:68,damage:26,spread:{hip:1.45,ads:.32,movePenalty:1.35,crouchBonus:.82},recoil:{vertical:1.15,horizontal:.42,verticalVar:.28,horizVar:.45,recovery:9,pattern:[1,.95,1.05]},movementPenalty:.99,allowFireDuringReload:!1,canADS:!0},shotgun:{id:"shotgun",name:"M1014",type:"shotgun",fireMode:"semi",fireRate:180,magSize:8,reserve:24,reloadTime:.55,emptyReloadTime:.55,adsTime:.26,adsFov:60,damage:11,pellets:8,spread:{hip:4.2,ads:2.1,movePenalty:1.4,crouchBonus:.85},recoil:{vertical:3.2,horizontal:1.1,verticalVar:.5,horizVar:.9,recovery:5.5,pattern:[1]},movementPenalty:.92,allowFireDuringReload:!1,canADS:!0}};class am{constructor(t,e=4){this.game=t,this.maxSlots=e,this.slots=new Array(e).fill(null),this.activeIndex=0,this.isOpen=!1}addWeapon(t){const e=this.slots.findIndex(r=>r&&r.id===t.id);if(e!==-1)return this.slots[e].reserve+=t.reserve||30,this.game.hud?.addKill(`<b>AMMO</b> + ${t.reserve||30} voor ${t.name}`),e;const n=this.slots.findIndex(r=>r===null);if(n===-1)return this.game.hud?.addKill("<b>INVENTORY VOL</b> — druk [I] om te beheren"),-1;const i=new Ci(t);return this.slots[n]=i,this.getCurrent()||(this.activeIndex=n),this.game.hud?.addKill(`<b>PICKUP</b> ${t.name} → SLOT ${n+1}`),this.updateHUD(),this.render(),n}removeWeapon(t){if(t<0||t>=this.maxSlots)return null;const e=this.slots[t];if(this.slots[t]=null,this.activeIndex===t){const n=this.slots.findIndex(i=>i!==null);this.activeIndex=n!==-1?n:0}return this.updateHUD(),this.render(),e}switchTo(t){if(t<0||t>=this.maxSlots)return!1;if(!this.slots[t])return this.game.audio?.play("dryfire",this.game.player?.position),!1;if(t===this.activeIndex)return!1;const e=this.getCurrent();return e?.isReloading&&e.cancelReload(),this.activeIndex=t,this.game.weapons?.onSwitch(t),this.updateHUD(),this.render(),this.game.audio?.play("equip",this.game.player?.position),!0}getCurrent(){return this.slots[this.activeIndex]||null}getAll(){return this.slots}toggle(){this.isOpen=!this.isOpen;const t=document.getElementById("inventory");return t&&t.classList.toggle("hidden",!this.isOpen),this.isOpen&&(this.render(),document.getElementById("inventory")?.classList.remove("hidden")),this.isOpen}close(){this.isOpen=!1,document.getElementById("inventory")?.classList.add("hidden")}updateHUD(){this.game.weapons&&(this.game.weapons.current=this.getCurrent()||this.game.weapons.weapons[0]||null,this.game.weapons.currentIndex=this.activeIndex)}render(){const t=document.getElementById("inv-grid");if(!t)return;t.innerHTML="",this.slots.forEach((i,r)=>{const a=document.createElement("div");if(a.className=`inv-slot ${r===this.activeIndex?"active":""} ${i?"filled":"empty"}`,a.dataset.index=r,i){const o=Math.round(i.ammo/i.magSize*100);a.innerHTML=`
          <div class="inv-num">${r+1}</div>
          <div class="inv-name">${i.name}</div>
          <div class="inv-ammo">${i.ammo}/${i.reserve}</div>
          <div class="inv-bar"><div style="width:${o}%"></div></div>
          <div class="inv-type">${i.type}</div>
        `}else a.innerHTML=`<div class="inv-num">${r+1}</div><div class="inv-empty">— EMPTY —</div><div class="inv-hint">press F on pickup</div>`;a.addEventListener("click",()=>this.switchTo(r)),t.appendChild(a)});const e=this.getCurrent(),n=document.getElementById("inv-detail");n&&(e?n.innerHTML=`<b>${e.name}</b> — ${e.fireMode.toUpperCase()} • ${e.damage} DMG • ${e.fireRate} RPM<br><span>${e.magSize} mag / ${e.reserve} reserve</span>`:n.textContent="No weapon equipped")}}class om{constructor(t){this.game=t,this.inventory=new am(t,4),this.inventory.slots[0]=new Ci(ai.m4a1),this.inventory.slots[1]=new Ci(ai.glock),this.inventory.activeIndex=0,this.weapons=this.inventory.slots,this.currentIndex=this.inventory.activeIndex,this.current=this.inventory.getCurrent(),this.adsProgress=0,this.targetADS=0,this.isADS=!1,this.isReloading=!1,this.isSwitching=!1,this.switchProgress=0,this.switchTarget=0,this.fireHeld=!1,this.lastFireTime=-999,this.recoilPitch=0,this.recoilYaw=0,this.recoilRecovery=0,this.shotCount=0,this.weaponModelOffset=new E,this.weaponSway=new ft(0,0),this.weaponGroup=new ze,this.weaponMesh=null,this.muzzleFlashUntil=0,this.tracerMeshes=[],this._createWeaponMesh()}_createWeaponMesh(){this.weaponMeshes={},this.muzzleFlashes={},this.muzzleLights={};const t=new bt({color:13084298,roughness:.68,metalness:.02}),e=new bt({color:1450030,roughness:.88}),n=new bt({color:1777959,roughness:.58,metalness:.28}),i=new bt({color:856598,roughness:.62,metalness:.22}),r=new bt({color:1711651,roughness:.42,metalness:.58}),a=q=>{const Y=new ze,$=q?-1:1,st=new ve(.028,.031,.2,12);st.rotateZ(Math.PI/2.5*$);const it=new lt(st,e);it.position.set($*.065,-.14,q?-.32:-.14),Y.add(it);const W=new lt(new Ft(.041,.036,.055),t);W.position.set($*.015,-.105,q?-.36:-.22),Y.add(W);const D=new lt(new Ft(.043,.038,.045),new bt({color:922652,roughness:.92}));if(D.position.set($*.015,-.105,q?-.34:-.2),Y.add(D),q){const B=new mi(.011,.028,4,8);for(let j=0;j<3;j++){const Z=new lt(B,t);Z.rotation.z=Math.PI/2,Z.position.set($*.01,-.12,-.36+j*.012),Y.add(Z)}}else{const B=new mi(.011,.03,4,8);for(let j=0;j<3;j++){const Z=new lt(B,t);Z.rotation.x=Math.PI/2,Z.position.set(.008+j*.012,-.098,-.26),Y.add(Z)}}return Y},o=new ze,l=new lt(new Ft(.072,.058,.3),n);l.position.set(0,-.078,-.2),o.add(l);const c=new lt(new Ft(.056,.038,.18),i);c.position.set(0,-.072,-.36),o.add(c);const h=new lt(new ve(.011,.011,.3,10).rotateX(Math.PI/2),r);h.position.set(0,-.068,-.44),o.add(h);const u=new lt(new ve(.016,.013,.045,8).rotateX(Math.PI/2),r);u.position.set(0,-.068,-.6),o.add(u);const f=new lt(new Ft(.052,.08,.16),i);f.position.set(0,-.065,-.02),o.add(f),this.magMesh=new lt(new Ft(.038,.11,.068),new bt({color:988185,roughness:.85})),this.magMesh.position.set(0,-.14,-.18),o.add(this.magMesh);const p=new lt(new Ft(.038,.015,.09),i);p.position.set(0,-.042,-.21),o.add(p);const g=new lt(new ve(.011,.011,.035,12).rotateX(Math.PI/2),new bt({color:2775674,roughness:.2,metalness:.6,transparent:!0,opacity:.85}));g.position.set(0,-.032,-.21),o.add(g);const _=new lt(new Ni(.042,.095,8).rotateX(Math.PI/2),new un({color:16769146,transparent:!0,opacity:0}));_.position.set(0,-.068,-.62),o.add(_);const m=new ms(16764006,0,3.2,2);m.position.set(0,-.068,-.62),o.add(m),o.add(a(!1)),o.add(a(!0)),o.position.set(.28,-.22,-.38),this.weaponMeshes.m4a1=o,this.muzzleFlashes.m4a1=_,this.muzzleLights.m4a1=m,this.weaponGroup.add(o);const d=new ze,M=new lt(new Ft(.042,.052,.14),n);M.position.set(0,-.082,-.2),d.add(M);const x=new lt(new Ft(.036,.028,.16),r);x.position.set(0,-.065,-.22),d.add(x);const T=new lt(new ve(.009,.009,.12,8).rotateX(Math.PI/2),r);T.position.set(0,-.065,-.3),d.add(T);const P=new lt(new Ft(.028,.08,.045),i);P.position.set(0,-.13,-.16),P.rotation.x=Math.PI/10,d.add(P);const A=new lt(new Ni(.028,.06,6).rotateX(Math.PI/2),new un({color:16769146,transparent:!0,opacity:0}));A.position.set(0,-.065,-.37),d.add(A);const R=new ms(16764006,0,2.2,2);R.position.set(0,-.065,-.37),d.add(R);const X=a(!1);X.position.set(-.04,.02,.04),d.add(X),d.position.set(.22,-.24,-.32),d.visible=!1,this.weaponMeshes.glock=d,this.muzzleFlashes.glock=A,this.muzzleLights.glock=R,this.weaponGroup.add(d);const y=new ze,b=new lt(new Ft(.078,.065,.32),new bt({color:1975080,roughness:.6}));b.position.set(0,-.078,-.2),y.add(b);const V=new lt(new ve(.018,.018,.34,10).rotateX(Math.PI/2),r);V.position.set(0,-.068,-.44),y.add(V);const H=new lt(new ve(.022,.022,.18,10).rotateX(Math.PI/2),new bt({color:2239024,roughness:.7}));H.position.set(0,-.092,-.3),y.add(H);const K=new lt(new Ft(.058,.07,.18),new bt({color:4860434,roughness:.85}));K.position.set(0,-.065,-.04),y.add(K);const L=new lt(new Ft(.062,.045,.2),new bt({color:3877394,roughness:.9}));L.position.set(0,-.072,-.34),y.add(L);const N=new lt(new Ni(.05,.11,8).rotateX(Math.PI/2),new un({color:16769146,transparent:!0,opacity:0}));N.position.set(0,-.068,-.64),y.add(N);const k=new ms(16764006,0,3.6,2);k.position.set(0,-.068,-.64),y.add(k),y.add(a(!1));const J=a(!0);J.position.set(-.02,0,-.02),y.add(J),y.position.set(.3,-.22,-.4),y.visible=!1,this.weaponMeshes.shotgun=y,this.muzzleFlashes.shotgun=N,this.muzzleLights.shotgun=k,this.weaponGroup.add(y),this.weaponMesh=o,this.muzzleFlash=_,this.muzzleLight=m,this.armGroup=o.getObjectByProperty("isGroup",!0)}onSwitch(t){this.isSwitching=!0,this.switchProgress=0,this.switchTarget=t,this.targetADS=0}reset(){this.inventory.slots[0]=new Ci(ai.m4a1),this.inventory.slots[1]=new Ci(ai.glock),this.inventory.slots[2]=null,this.inventory.slots[3]=null,this.inventory.activeIndex=0,this.weapons=this.inventory.slots,this.weapons.forEach(t=>{if(!t)return;const e=ai[t.id];t.ammo=e.magSize,t.reserve=e.reserve,t.isReloading=!1,t.fireCooldown=0}),this.currentIndex=0,this.current=this.inventory.getCurrent(),this.isADS=!1,this.targetADS=0,this.adsProgress=0,this.isReloading=!1,this.isSwitching=!1,this.recoilPitch=0,this.recoilYaw=0,this.shotCount=0,this.inventory.render(),this.updateHUD(),this._updateViewmodelForWeapon()}_updateViewmodelForWeapon(){if(!this.weaponMeshes)return;const t=this.current?.id||"m4a1";Object.entries(this.weaponMeshes).forEach(([e,n])=>{n.visible=e===t,n.traverse(i=>{i.isMesh&&(i.visible=e===t)}),e===t&&(n.visible=!0)}),this.weaponMesh=this.weaponMeshes[t]||this.weaponMeshes.m4a1,this.muzzleFlash=this.muzzleFlashes[t]||this.muzzleFlashes.m4a1,this.muzzleLight=this.muzzleLights[t]||this.muzzleLights.m4a1,Object.values(this.weaponMeshes).forEach(e=>e.visible=e===this.weaponMesh)}update(t){const e=this.game.input;if(!e)return;const n=e.mouseDown[2]&&this.game.canADS()&&this.current?.canADS!==!1;if(this.game.player?.isSprinting?(this.targetADS=0,this.isADS=!1):this.targetADS=n?1:0,1/(this.current?.adsTime??rt.weapons.adsTransitionSpeed)*1.2,this.current?t/this.current.adsTime*2.2:t*8,this.adsProgress=Dt.damp(this.adsProgress,this.targetADS,11,t),Math.abs(this.adsProgress-this.targetADS)<.01&&(this.adsProgress=this.targetADS),this.isADS=this.adsProgress>.5,this.game.player.isADSing=this.isADS,this.current.fireCooldown>0&&(this.current.fireCooldown-=t),this.current.isReloading){const l=this.current.updateReload(t);this.isReloading=this.current.isReloading,this.updateHUD(),l&&(this.isReloading=!1,this.game.audio?.play("reload_end",this.game.player.position)),this.current.type==="shotgun"&&this.game.player.isSprinting&&(this.current.cancelReload(),this.isReloading=!1)}else this.isReloading=!1;if(this.current=this.inventory.getCurrent()||this.current,this.currentIndex=this.inventory.activeIndex,this.weapons=this.inventory.slots,this.isSwitching){this.switchProgress+=t;const l=rt.weapons.switchTime;this.switchProgress>=l&&(this.isSwitching=!1,this.currentIndex=this.switchTarget,this.inventory.activeIndex=this.switchTarget,this.current=this.inventory.getCurrent(),this._updateViewmodelForWeapon(),this.updateHUD())}const i=e.mouseDown[0],r=this.game.canFire()&&this.current.canFire();i&&r&&this.game.state==="playing"&&!this.game.player.isDead&&(this.current.fireMode==="semi"?this.fireHeld||(this._fire(),this.fireHeld=!0):this.current.fireMode==="auto"&&this._fire()),i||(this.fireHeld=!1),i&&!this.isReloading&&!this.isSwitching&&this.current.ammo<=0&&this.current.fireCooldown<=0&&(!this.fireHeld||this.current.fireMode==="auto")&&(this.game.time-this.lastFireTime>.22&&(this.game.audio?.play("dryfire",this.game.player.position),this.lastFireTime=this.game.time),this.current.fireCooldown=.22,this.fireHeld=!0),i||(this.fireHeld=!1);const a=this.current.recoil.recovery??rt.weapons.recoilRecoveryBase;let o=1;this.isADS&&(o*=1.25),this.game.player.isCrouching&&(o*=1.15),this.game.player.isSprinting&&(o*=.7),this.recoilPitch=Dt.damp(this.recoilPitch,0,a*o,t),this.recoilYaw=Dt.damp(this.recoilYaw,0,a*o*.9,t),Math.abs(this.recoilPitch)>.001,this._updateWeaponVisuals(t)}_fire(){if(!this.current.consumeAmmo()){this.game.audio?.play("dryfire",this.game.player.position),this.current.fireCooldown=.3;return}const t=this.game.time;this.lastFireTime=t,this.shotCount++,this.current.fireCooldown=this.current.getFireInterval(),this.current.shotsFired++,this.game.audio?.play("fire_"+this.current.id,this.game.player.position),this.muzzleFlashUntil=t+.05,this.muzzleFlash&&(this.muzzleFlash.material.opacity=.95,this.muzzleFlash.visible=!0),this._applyRecoil(),this._doBallistics();try{const e=this.getMuzzlePos(),n=this.game.player.getEyePosition().clone().addScaledVector(this.game.player.getForward(),.12);n.y-=.12,this.game.world?.spawnShell(n,this.game.player.getForward())}catch{}this.game.audio?.play("shell",this.game.player.position),this.muzzleLight&&(this.muzzleLight.intensity=2.8,setTimeout(()=>{this.muzzleLight&&(this.muzzleLight.intensity=0)},45)),this.updateHUD()}_applyRecoil(){const t=this.current.recoil,e=(this.shotCount-1)%(t.pattern?.length||1),n=t.pattern?t.pattern[e]:1,i=this.isADS,r=this.game.player.isCrouching,a=this.game.player.moveInput.lengthSq()>.1;let o=t.vertical*n*(.85+Math.random()*t.verticalVar),l=(Math.random()-.5)*2*t.horizontal*(.7+Math.random()*t.horizVar);i&&(o*=.72,l*=.62),r&&(o*=.88,l*=.85),a&&(o*=1.12,l*=1.18),this.game.player.isSprinting&&(o*=1.3,l*=1.4);const c=Math.min(this.shotCount*.03,.35);o*=1+c,this.recoilPitch+=Dt.toRad(o*.42),this.recoilYaw+=Dt.toRad(l*.38),this.game.player.pitch+=Dt.toRad(o*.28),this.game.player.pitch=Dt.clamp(this.game.player.pitch,this.game.player.pitchLimits.min,this.game.player.pitchLimits.max),this.game.player.yaw+=Dt.toRad(l*.12)}_doBallistics(){const t=this.current.pellets||1,e=this.game.player,n=e.getEyePosition(),i=e.getForward(),r=this.current.spread;let a=this.isADS?r.ads:r.hip;e.isSprinting?a*=1.8:e.moveInput.lengthSq()>.01&&(a*=r.movePenalty),e.isCrouching&&(a*=r.crouchBonus),e.isGrounded||(a*=1.45);for(let o=0;o<t;o++){const l=Dt.toRad(a),c=Math.random()*Math.PI*2,h=Math.random()*l,u=new E().crossVectors(i,new E(0,1,0)).normalize(),f=new E().crossVectors(u,i).normalize();let p=i.clone();p.addScaledVector(u,Math.cos(c)*h),p.addScaledVector(f,Math.sin(c)*h),p.normalize();const g=this._raycastHit(n,p,100);if(g){if(g.type==="enemy"){const _=n.distanceTo(g.point);let m=this.current.damage;const d=rt.ballistics.falloffStart,M=rt.ballistics.falloffEnd;if(_>d){const T=Dt.clamp((_-d)/(M-d),0,1);m*=Dt.lerp(1,.62,T)}const x=g.part==="head"?rt.ballistics.headMult:g.part==="body"?rt.ballistics.bodyMult:rt.ballistics.limbMult;m*=x,m*=this.current.headMult??1,g.enemy.takeDamage(m,g.point,p,g.part),this.game.enemies?.onEnemyHit(g.enemy,m),this.game.world?.spawnImpact(g.point,g.normal,"flesh")}else g.type==="world"&&this.game.world?.spawnImpact(g.point,g.normal,g.material||"concrete");this._spawnTracer(n,g.point)}else{const _=n.clone().addScaledVector(p,60);this._spawnTracer(n,_)}}}_raycastHit(t,e,n){const i=this.game.world?.raycast(t,e,n);let r=i?i.distance:1/0,a=null,o=r,l=null,c=null,h=null;for(const u of this.game.enemies?.list||[]){if(u.isDead)continue;const f=u.getHitBoxes();for(const p of f){const g=t.clone().sub(p.center),_=e.dot(g),m=g.lengthSq()-p.radius*p.radius,d=_*_-m;if(d<0)continue;const M=-_-Math.sqrt(d);M<0||M>o||M>n||(o=M,a=u,l=t.clone().addScaledVector(e,M),c=l.clone().sub(p.center).normalize(),h=p.part)}}return a?{type:"enemy",enemy:a,point:l,normal:c,part:h,distance:o}:i?{type:"world",point:i.point,normal:i.normal,distance:i.distance,material:i.material}:null}_spawnTracer(t,e){this.game.world?.spawnTracer(t,e)}_updateWeaponVisuals(t){if(!this.weaponMesh)return;const e=this.game.player,n=this.adsProgress,i=e.lean,r=new E(.28,-.22,-.38),a=new E(0,-.14,-.28);this.current.id==="glock"&&(r.set(.22,-.24,-.32),a.set(0,-.16,-.24));const o=new E().lerpVectors(r,a,n);e.isSprinting&&(o.y-=.1,o.z+=.08,o.x+=.06),e.isCrouching&&(o.y-=.015);const l=this.recoilPitch*4,c=this.recoilPitch*.6;o.z+=l,o.y+=c,o.x+=this.recoilYaw*1.2,o.x+=i*.05;const h=this.game.time*10;let u=0,f=0;if(!this.isADS||n<.6){const m=e.velocity.length()/5,d=e.isSprinting?.025:.012;u=Math.sin(h*.7)*d*(m+.3),f=Math.cos(h*.9)*d*.6*(m+.3),e.isGrounded||(u*=1.3,f*=1.3),e.moveInput;const M=Math.sin(this.game.time*1.2)*.004*(1-n*.7);f+=M}this.weaponModelOffset.lerp(o,Dt.clamp(t*14,0,1)),this.weaponMesh.position.copy(this.weaponModelOffset),this.weaponMesh.position.x+=u,this.weaponMesh.position.y+=f;const p=f*2+this.recoilPitch*.7,g=u*1.5+this.recoilYaw*.5,_=i*Dt.toRad(4)+u*.8;this.weaponMesh.rotation.x=Dt.damp(this.weaponMesh.rotation.x,p,10,t),this.weaponMesh.rotation.y=Dt.damp(this.weaponMesh.rotation.y,g,10,t),this.weaponMesh.rotation.z=Dt.damp(this.weaponMesh.rotation.z,_,10,t),this.muzzleFlashUntil&&this.game.time>this.muzzleFlashUntil&&(this.muzzleFlash&&(this.muzzleFlash.material.opacity=Dt.damp(this.muzzleFlash.material.opacity,0,18,t)),this.muzzleFlash.material.opacity<.01&&(this.muzzleFlash.visible=!1)),this.weaponGroup.visible=!e.isDead,this.weaponGroup.parent!==this.game.camera&&this.game.camera.add(this.weaponGroup)}tryReload(){if(this.isReloading||this.isSwitching||this.current.ammo===this.current.magSize||this.current.reserve<=0)return;const t=this.current.ammo===0;this.current.startReload(t)&&(this.isReloading=!0,this.game.audio?.play(t?"reload_empty":"reload",this.game.player.position),this.targetADS=0)}switchTo(t){if(this.inventory.slots[t]===null){this.game.audio?.play("dryfire",this.game.player?.position);return}t!==this.inventory.activeIndex&&(this.isSwitching||(this.current?.isReloading&&this.current.cancelReload(),this.inventory.switchTo(t),this.isSwitching=!0,this.switchProgress=0,this.switchTarget=t,this.isReloading=!1,this.targetADS=0))}updateHUD(){this.game.hud&&(this.game.hud.updateAmmo(this.current.ammo,this.current.reserve,this.current.magSize),this.game.hud.updateWeapon(this.current.name,this.current.fireMode.toUpperCase()),this.game.hud.updateReload(this.isReloading||this.current.isReloading))}getMuzzlePos(){if(!this.weaponMesh)return this.game.player.getEyePosition();const t=this.muzzleFlash;if(!t)return this.game.player.getEyePosition();const e=new E;return t.getWorldPosition(e),e}}function lm(){const s=document.createElement("canvas");s.width=512,s.height=512;const t=s.getContext("2d"),e=t.createLinearGradient(0,0,512,512);e.addColorStop(0,"#1e2a36"),e.addColorStop(.5,"#1a242f"),e.addColorStop(1,"#1d2b39"),t.fillStyle=e,t.fillRect(0,0,512,512);for(let i=0;i<22;i++){const r=Math.random()*512,a=Math.random()*512,o=30+Math.random()*90,l=18+Math.random()*45;t.fillStyle=`rgba(${12+Math.random()*10},${18+Math.random()*10},${24+Math.random()*10},${.09+Math.random()*.12})`,t.beginPath(),t.ellipse(r,a,o,l,Math.random()*Math.PI,0,Math.PI*2),t.fill()}for(let i=0;i<9e3;i++){const r=Math.random()*512,a=Math.random()*512,o=Math.random()*2.2+.6,l=18+Math.random()*28;t.fillStyle=`rgba(${l+14},${l+20},${l+26},${.18+Math.random()*.22})`,t.beginPath(),t.arc(r,a,o,0,Math.PI*2),t.fill()}t.strokeStyle="rgba(0,0,0,0.18)",t.lineWidth=1;for(let i=0;i<18;i++){let r=Math.random()*512,a=Math.random()*512;t.beginPath(),t.moveTo(r,a);for(let o=0;o<6+Math.random()*8;o++)r+=(Math.random()-.5)*42,a+=(Math.random()-.5)*42,t.lineTo(r,a);t.stroke()}t.strokeStyle="rgba(255,255,255,0.035)",t.lineWidth=1;for(let i=0;i<512;i+=64)t.beginPath(),t.moveTo(i,0),t.lineTo(i,512),t.stroke();for(let i=0;i<512;i+=64)t.beginPath(),t.moveTo(0,i),t.lineTo(512,i),t.stroke();t.strokeStyle="rgba(0,0,0,0.14)",t.lineWidth=2,t.strokeRect(1,1,510,510);const n=new Si(s);return n.wrapS=n.wrapT=dn,n.repeat.set(9,9),n.anisotropy=8,n.colorSpace=ne,n}function cm(){const s=document.createElement("canvas");s.width=512,s.height=512;const t=s.getContext("2d");t.fillStyle="#2c3d4f",t.fillRect(0,0,512,512);for(let i=0;i<1400;i++){const r=Math.random()*512,a=Math.random()*512,o=Math.random()*120+18,l=Math.random()*3+.8;t.fillStyle=`rgba(255,255,255,${.035+Math.random()*.05})`,t.fillRect(r,a,o,l)}for(let i=0;i<6e3;i++){const r=Math.random()*512,a=Math.random()*512,o=Math.random()*1.4;t.fillStyle=`rgba(${200+Math.random()*30},${210+Math.random()*30},${220+Math.random()*20},0.08)`,t.beginPath(),t.arc(r,a,o,0,Math.PI*2),t.fill()}t.strokeStyle="rgba(0,0,0,0.07)",t.lineWidth=1;for(let i=64;i<512;i+=128)t.beginPath(),t.moveTo(i,0),t.lineTo(i,512),t.stroke();const e=t.createLinearGradient(0,0,0,32);e.addColorStop(0,"rgba(255,255,255,0.06)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,512,32);const n=new Si(s);return n.wrapS=n.wrapT=dn,n.repeat.set(1.2,1),n.anisotropy=8,n.colorSpace=ne,n}function hm(){const s=document.createElement("canvas");s.width=512,s.height=512;const t=s.getContext("2d");t.fillStyle="#3b2a22",t.fillRect(0,0,512,512);const e=32,n=64;for(let r=0;r<512;r+=e){const a=r/e%2*(n/2);for(let o=-n;o<512;o+=n){const l=o+a,c=r,h=Math.random()*.15+.85,u=Math.floor(58*h),f=Math.floor(36*h),p=Math.floor(30*h);t.fillStyle=`rgb(${u+10},${f+6},${p+4})`,t.fillRect(l+2,c+2,n-3,e-3),t.fillStyle="rgba(255,255,255,0.06)",t.fillRect(l+2,c+2,n-3,2)}}t.strokeStyle="rgba(0,0,0,0.32)",t.lineWidth=2;for(let r=0;r<512;r+=e)t.beginPath(),t.moveTo(0,r),t.lineTo(512,r),t.stroke();for(let r=0;r<512;r+=n)t.beginPath(),t.moveTo(r,0),t.lineTo(r,512),t.stroke();const i=new Si(s);return i.wrapS=i.wrapT=dn,i.repeat.set(1.8,1),i.anisotropy=8,i.colorSpace=ne,i}function um(){const s=document.createElement("canvas");s.width=256,s.height=256;const t=s.getContext("2d");t.fillStyle="#1e242c",t.fillRect(0,0,256,256);for(let n=0;n<256;n+=2){const i=Math.random()*.06+.02;t.fillStyle=`rgba(255,255,255,${i})`,t.fillRect(0,n,256,1)}t.fillStyle="#0c0f12";for(let n=16;n<256;n+=64)for(let i=16;i<256;i+=64)t.beginPath(),t.arc(i,n,3,0,Math.PI*2),t.fill(),t.fillStyle="rgba(255,255,255,0.08)",t.beginPath(),t.arc(i-1,n-1,1,0,Math.PI*2),t.fill(),t.fillStyle="#0c0f12";const e=new Si(s);return e.wrapS=e.wrapT=dn,e.repeat.set(2,1),e.anisotropy=8,e.colorSpace=ne,e}function dm(){const s=document.createElement("canvas");s.width=512,s.height=256;const t=s.getContext("2d");t.fillStyle="#5a3d1f",t.fillRect(0,0,512,256);for(let n=0;n<80;n++){const i=Math.random()*256,r=Math.random()*18;t.strokeStyle=`rgba(${30+Math.random()*20},${20+Math.random()*10},${10+Math.random()*10},${.18+Math.random()*.14})`,t.lineWidth=1.5+Math.random()*1.2,t.beginPath(),t.moveTo(0,i+r);for(let a=0;a<512;a+=24)t.lineTo(a,i+Math.sin(a*.02+n)*6+r);t.stroke()}const e=new Si(s);return e.wrapS=e.wrapT=dn,e.repeat.set(1,1),e.anisotropy=8,e.colorSpace=ne,e}function fm(){const s=document.createElement("canvas");s.width=512,s.height=512;const t=s.getContext("2d");t.fillStyle="#0f141b",t.fillRect(0,0,512,512);for(let n=0;n<11e3;n++){const i=Math.random()*512,r=Math.random()*512,a=Math.random()*1.8+.4,o=18+Math.random()*16;t.fillStyle=`rgba(${o},${o},${o+2},0.32)`,t.fillRect(i,r,a,a)}t.strokeStyle="rgba(255,255,255,0.88)",t.lineWidth=3,t.setLineDash([28,22]),t.beginPath(),t.moveTo(256,0),t.lineTo(256,512),t.stroke(),t.setLineDash([]),t.strokeStyle="rgba(255,255,255,0.75)",t.lineWidth=2,t.beginPath(),t.moveTo(0,256),t.lineTo(512,256),t.stroke();const e=new Si(s);return e.wrapS=e.wrapT=dn,e.repeat.set(1,3),e.anisotropy=8,e.colorSpace=ne,e}class pm{constructor(t){this.game=t,this.colliders=[],this.meshes=new ze,this.interactables=[],this.impactPool=[],this.tracerPool=[],this.shellPool=[],this._raycaster=new nm,this._pointLights=[]}_addCollider(t){this.colliders.push(t)}build(){const t=this.game.scene;t.background=new qt(395791);const e=new Qp(14214904,659992,1.08);e.position.set(0,40,0),t.add(e);const n=new pr(16773846,1.55);n.position.set(24,32,14),n.castShadow=!0,n.shadow.mapSize.set(2048,2048),n.shadow.camera.near=.5,n.shadow.camera.far=95,n.shadow.camera.left=-50,n.shadow.camera.right=50,n.shadow.camera.top=50,n.shadow.camera.bottom=-50,n.shadow.bias=-6e-4,t.add(n);const i=new pr(9417952,.42);i.position.set(-20,16,-24),t.add(i);const r=new pr(16751168,.18);r.position.set(10,4,22),t.add(r),t.fog=new Dr(726047,.017);const a=(D,B,j,Z,mt)=>{const gt=new ms(Z,mt,18,1.8);gt.position.set(D,B,j),t.add(gt),this._pointLights.push(gt)};a(-6,2.4,-12,16755285,1.8),a(14,2.2,-15,6728447,1.2),a(6,3.1,-38,16737860,1.6);const o=new Fn(85,32,16),l=new un({color:461844,side:Pe,fog:!1}),c=new lt(o,l);t.add(c);const h=lm(),u=cm(),f=hm(),p=um(),g=dm(),_=fm(),m=new bt({map:h,roughness:.82,metalness:.03,color:16777215}),d=new lt(new cn(128,128),m);d.rotation.x=-Math.PI/2,d.receiveShadow=!0,t.add(d),this._addCollider(new Re(new E(-60,-1,-60),new E(60,0,60)));const M=new bt({map:_,roughness:.92,metalness:.02}),x=new lt(new cn(8,128),M);x.rotation.x=-Math.PI/2,x.position.set(0,.015,0),x.receiveShadow=!0,t.add(x);const T=new lt(new cn(128,8),M);T.rotation.x=-Math.PI/2,T.position.set(0,.015,0),T.receiveShadow=!0,t.add(T);const P=new bt({map:h,roughness:.88,color:15263976}),A=new lt(new Ft(2,.15,128),P);A.position.set(-5,.075,0),t.add(A);const R=new lt(new Ft(2,.15,128),P);R.position.set(5,.075,0),t.add(R);const X=new lt(new Ft(128,.15,2),P);X.position.set(0,.075,5),t.add(X);const y=new lt(new Ft(128,.15,2),P);y.position.set(0,.075,-5),t.add(y);const b=new bt({color:1710622,roughness:.9});[[-4,0],[4,0],[0,4],[0,-4]].forEach(([D,B])=>{const j=D!==0,Z=new lt(new Ft(j?.2:128,.18,j?128:.2),b);Z.position.set(D,.09,B),t.add(Z)});const V=(D,B,j,Z)=>new bt({color:D,map:B,roughness:j,metalness:Z}),H=(D,B,j,Z,mt,gt,Mt,Rt,U)=>{const xt=V(Mt,U||u,Rt,.04),yt=mr(D,B,j,Mt,new E(Z,mt,gt));yt.material=xt,this.meshes.add(yt),t.add(yt);const pt=new Re().setFromCenterAndSize(new E(Z,mt,gt),new E(D,B,j));return this.colliders.push(pt),yt.userData.aabb=pt,yt},K=(D,B,j,Z,mt,gt,Mt,Rt,U)=>{const xt=V(Mt,U||u,Rt,.03),yt=mr(j,Z,mt,Mt,new E(D,Z/2,B));yt.material=xt,yt.rotation.y=gt,this.meshes.add(yt),t.add(yt);const pt=new Re().setFromCenterAndSize(new E(D,Z/2,B),new E(j,Z,mt));Math.abs(gt)>.01&&pt.expandByScalar(Math.max(j,mt)*.2),this.colliders.push(pt),yt.userData.aabb=pt;const jt=new lt(new Ft(j+.04,.06,mt+.04),new bt({color:791580,roughness:.95}));return jt.position.set(D,Z-.03,B),jt.rotation.y=gt,t.add(jt),yt};K(-22,-18,16,4.2,.6,0,3877410,.88,f),K(-22,-26,16,4.2,.6,0,3877410,.88,f),K(-29.5,-22,.6,4.2,8.6,0,3030608,.84,u),K(-14.5,-22,.6,4.2,8.6,0,3030608,.84,u),K(-18,-14,6,3.2,.6,0,2766920,.82,u),K(-22,-22,8,3.2,.4,0,1976886,.86,u),H(14,.35,8,-22,2.35,-22,2305852,.86,h),H(3,.3,2,-14,2.6,-18,2766920,.82,p),K(20,-16,18,4.8,.6,0,3030608,.78,p),K(20,-28,18,4.8,.6,0,3030608,.78,p),K(11.5,-22,.6,4.8,12.6,0,2831938,.8,p),K(28.5,-22,.6,4.8,12.6,0,2831938,.8,p);for(let D=0;D<2;D++){const B=new lt(new Ft(3.2,2.6,.12),new bt({color:791580,roughness:.9}));B.position.set(17+D*6,1.3,-16),t.add(B)}H(8,.3,4,20,2.4,-22,2305852,.86,p),H(8,7.2,8,6,3.6,-38,2305852,.84,f),K(6,-34,8,3.5,.6,0,2832970,.83,u),K(6,-42,8,3.5,.6,0,2832970,.83,u);for(let D=1.8;D<6;D+=1.8){const B=new lt(new cn(1.1,.9),new bt({color:7054294,transparent:!0,opacity:.18,roughness:.1,metalness:.9}));B.position.set(2.02,D,-38),B.rotation.y=Math.PI/2,t.add(B);const j=B.clone();j.position.set(9.98,D,-38),j.rotation.y=-Math.PI/2,t.add(j)}for(let D=0;D<7;D++)H(2.4,.28,.62,6,.16+D*.32,-31-D*.72,3688279,.8,p);K(-18,10,14,3.4,.6,0,3877410,.86,f),K(-18,18,14,3.4,.6,0,3877410,.86,f),K(-24.5,14,.6,3.4,8.6,0,3030608,.84,u),K(-11.5,14,.6,3.4,8.6,0,3030608,.84,u);for(let D=-22;D<=-14;D+=3){const B=new lt(new cn(1.8,1.6),new bt({color:9359359,transparent:!0,opacity:.22,emissive:1718874,emissiveIntensity:.3}));B.position.set(D,1.5,10.02),t.add(B)}for(let D=-46;D<50;D+=14){const B=new lt(new ve(.06,.06,4.2,8),new bt({color:1711910,roughness:.7,metalness:.4}));B.position.set(-3.6,2.1,D),t.add(B);const j=B.clone();j.position.set(3.6,2.1,D),t.add(j);const Z=new lt(new Fn(.22,10,8),new bt({color:16773792,emissive:16773792,emissiveIntensity:.9}));Z.position.set(-3.6,4.25,D),t.add(Z);const mt=Z.clone();mt.position.set(3.6,4.25,D),t.add(mt),a(-3.6,4.2,D,16773280,1.2),a(3.6,4.2,D,16773280,1.2)}[[-22,8],[18,-10],[-2,-10],[12,-28]].forEach(([D,B],j)=>{const Z=new ze,mt=new lt(new Ft(2.2,.9,4.6),new bt({color:j%2?1722990:7023146,roughness:.55,metalness:.35}));mt.position.y=.55,Z.add(mt);const gt=new lt(new Ft(1.6,.55,2.2),new bt({color:988188,roughness:.7}));gt.position.set(0,1.15,-.3),Z.add(gt);for(let Rt=0;Rt<4;Rt++){const U=new lt(new ve(.28,.28,.34,10),new bt({color:657930,roughness:.9}));U.rotation.z=Math.PI/2;const Jt=Rt<2?-.95:.95,xt=Rt%2?-1.2:1.2;U.position.set(Jt,.28,xt),Z.add(U)}Z.position.set(D,0,B),Z.rotation.y=j%2?0:Math.PI/2,Z.traverse(Rt=>{Rt.isMesh&&(Rt.castShadow=!0)}),t.add(Z);const Mt=new Re().setFromCenterAndSize(new E(D,.7,B),new E(2.4,1.4,4.8));this.colliders.push(Mt)});for(let D=0;D<6;D++){const B=new lt(new Ft(.12,1,2.2),new bt({color:16777200,roughness:.8}));B.position.set(-8+D*2.8,.55,2.8),B.rotation.y=.12,t.add(B);const j=new Re().setFromCenterAndSize(B.position.clone(),new E(.12,1,2.2));this.colliders.push(j)}for(let D=0;D<2;D++){const B=new lt(new Ft(1.4,1.1,.9),new bt({color:2837034,roughness:.85}));B.position.set(10+D*2.2,.55,-8),B.castShadow=!0,t.add(B);const j=new Re().setFromCenterAndSize(B.position.clone(),new E(1.4,1.1,.9));this.colliders.push(j)}[[-22,-22],[20,-22],[6,-38]].forEach(([D,B])=>{const j=new lt(new Ft(.9,.6,.9),new bt({color:3815994,roughness:.7,metalness:.3}));j.position.set(D,4.5,B),t.add(j);const Z=new lt(new ve(.28,.28,.04,12),new bt({color:1118481}));Z.rotation.x=Math.PI/2,Z.position.set(D,4.75,B),t.add(Z)});const N=new lt(new ve(.02,.02,3.5,6),new bt({color:1711910,metalness:.6}));N.position.set(6,7.9,-38),t.add(N);const k=(D,B,j,Z,mt,gt=0)=>{const Mt=new bt({color:922652,roughness:.88,metalness:.12}),Rt=new bt({color:7054294,roughness:.08,metalness:.85,transparent:!0,opacity:.22}),U=new lt(new Ft(Z+.14,mt+.14,.06),Mt);U.position.set(D,B,j),U.rotation.y=gt,t.add(U);const Jt=new lt(new cn(Z,mt),Rt);Jt.position.set(D,B,j),Jt.rotation.y=gt,gt===0?Jt.position.z+=.04:Jt.position.x+=gt>0?.04:-.04,t.add(Jt);const xt=new lt(new Ft(.02,mt,.02),Mt);xt.position.copy(Jt.position),xt.rotation.y=gt,t.add(xt);const yt=new lt(new Ft(Z,.02,.02),Mt);yt.position.copy(Jt.position),yt.rotation.y=gt,t.add(yt)};k(-29.5,1.7,-22,1.3,1.1,Math.PI/2),k(-14.5,1.7,-22,1.3,1.1,Math.PI/2),k(11.5,1.8,-22,1.2,1.1,Math.PI/2),k(28.5,1.8,-22,1.2,1.1,Math.PI/2),k(-18,1.6,10,1.6,1.2,0),k(-18,1.6,18,1.6,1.2,0);const J=new bt({color:2832970,roughness:.65,metalness:.42});for(let D=0;D<3;D++){const B=new lt(new ve(.04,.04,7.8,10),J);B.rotation.z=Math.PI/2,B.position.set(-22,.34+D*.58,-22.28),t.add(B)}const q=new lt(new ve(.035,.035,3.2,10),J);q.position.set(28.2,1.65,-22),t.add(q),H(2,1.12,1.2,-8,.58,-8,3885918,.78,u),H(1.5,1.45,1.5,8,.74,-8,3885918,.78,u),H(2.55,1.58,.72,-10,.79,-24,3359314,.82,u),H(.72,1.58,2.55,8,.79,-28,3359314,.82,u),H(1.6,1.2,.9,-2,.61,2,3359314,.82,u);for(let D=0;D<4;D++){const B=new lt(new ve(.38,.38,.9,14),new bt({color:9058858,roughness:.72,metalness:.15}));B.position.set(-28+D*1.8,.45,-30),B.castShadow=!0,t.add(B)}const Y=new mi(.22,1.2,4,8),$=new bt({color:1977890,roughness:.92});for(let D=0;D<6;D++){const B=new lt(Y,$);B.position.set(-30+D*4.2,.72,18),B.castShadow=!0,t.add(B)}this._createDoor(new E(-22,0,-18),0,"door_1"),this._createDoor(new E(20,0,-16),Math.PI/2,"door_2"),this._createDoor(new E(6,0,-34),0,"door_3"),this._createDoor(new E(-18,0,14),0,"door_4"),this._createPickup(new E(8,.45,-6),"shotgun"),this._createPickup(new E(-18,.45,-16),"ammo_m4"),this._createPickup(new E(20,.45,-26),"shotgun");for(let D=0;D<3;D++){const B=mr(.96,.66,.96,8018478,new E(-2+D*6,.33,12));B.material=new bt({map:g,color:10254930,roughness:.82}),B.castShadow=!0,t.add(B);const j=new lt(new Ft(1,.04,.04),new bt({color:1975340,roughness:.6,metalness:.55}));j.position.set(-2+D*6,.52,12),t.add(j)}const st=new bt({map:p,color:6978186,roughness:.58,metalness:.62}),it=new lt(new Ft(6.2,2.45,2.45),st);it.position.set(28,1.23,-30),it.castShadow=!0,it.receiveShadow=!0,t.add(it);const W=new Re().setFromCenterAndSize(it.position.clone(),new E(6.2,2.45,2.45));this.colliders.push(W);for(let D=0;D<5;D++){const B=new lt(new Ft(.04,2.45,2.46),new bt({color:4872814,roughness:.7,metalness:.5}));B.position.set(28-2.8+D*1.4,1.23,-30),t.add(B)}t.add(this.meshes)}_createDoor(t,e,n){const i=new Ft(1.9,2.35,.08),r=new bt({color:3811868,roughness:.78,metalness:.05}),a=new lt(i,r);a.position.set(t.x,1.18,t.z),a.rotation.y=e,a.castShadow=!0,a.receiveShadow=!0,a.userData.id=n,a.userData.isDoor=!0,a.userData.open=!1,a.userData.basePos=t.clone(),a.userData.baseRot=e;const o=new lt(new Ft(.04,1.8,.02),new bt({color:65416,emissive:65416,emissiveIntensity:.7}));o.position.set(.85,0,.05),a.add(o),this.game.scene.add(a);const l=new Re().setFromCenterAndSize(new E(t.x,1.18,t.z),new E(1.9,2.35,.25));Math.abs(e)>.01&&l.expandByScalar(.2),this.colliders.push(l),a.userData.collider=l,a.userData.colliderIndex=this.colliders.length-1,this.interactables.push(a)}_createPickup(t,e){const n={shotgun:9058874,ammo_m4:3836490},i=new Ft(.46,.26,.72),r=new bt({color:n[e]||11184810,emissive:n[e]||0,emissiveIntensity:.24,roughness:.6}),a=new lt(i,r);a.position.copy(t),a.position.y+=.18,a.castShadow=!0,a.userData.isPickup=!0,a.userData.pickupType=e,a.userData.baseY=t.y+.18;const o=new lt(new zr(.42,.5,18),new un({color:n[e]||16777215,transparent:!0,opacity:.22,side:Ke}));o.rotation.x=Math.PI/2,o.position.y=-.1,a.add(o),this.game.scene.add(a),this.interactables.push(a)}getColliders(){return this.colliders}update(t){const e=this.game.time;for(const n of this.interactables)if(n.userData.isPickup&&(n.rotation.y+=t*1.05,n.position.y=n.userData.baseY+Math.sin(e*1.9+n.position.x)*.08,n.material&&(n.material.emissiveIntensity=.22+Math.sin(e*3.2)*.08)),n.userData.isDoor){const i=n.userData.open?n.userData.baseRot+Math.PI/2:n.userData.baseRot;n.rotation.y=Ho.damp(n.rotation.y,i,7,t);const r=n.userData.colliderIndex;if(r!==void 0)if(n.userData.open)this.colliders[r].min.set(999,999,999),this.colliders[r].max.set(1e3,1e3,1e3);else{const a=n.userData.basePos;this.colliders[r].min.set(a.x-.95,0,a.z-.13),this.colliders[r].max.set(a.x+.95,2.35,a.z+.13),Math.abs(n.userData.baseRot)>.01&&this.colliders[r].expandByScalar(.2)}}this._pointLights.forEach((n,i)=>{n.intensity=1.4+Math.sin(e*(2.1+i*.7))*.18});for(let n=this.impactPool.length-1;n>=0;n--){const i=this.impactPool[n];if(i.life-=t,i.life<=0)this.game.scene.remove(i.mesh),this.impactPool.splice(n,1);else{const r=i.life/i.maxLife;i.mesh.traverse(a=>{a.material&&(a.material.opacity=a===i.mesh.children[0]?r:r*.92)}),i.mesh.scale.setScalar(1+(1-r)*.32)}}for(let n=this.tracerPool.length-1;n>=0;n--){const i=this.tracerPool[n];i.life-=t,i.life<=0?(this.game.scene.remove(i.mesh),this.tracerPool.splice(n,1)):i.mesh.material.opacity=i.life/i.maxLife*.72}for(let n=this.shellPool.length-1;n>=0;n--){const i=this.shellPool[n];i.life-=t,i.mesh.position.addScaledVector(i.vel,t),i.vel.y-=9.8*t,i.mesh.rotation.x+=t*14,i.mesh.rotation.z+=t*9,i.life<=0?(this.game.scene.remove(i.mesh),this.shellPool.splice(n,1)):i.mesh.material.opacity=i.life/i.maxLife}}raycast(t,e,n){const i=new xi(t.clone(),e.clone().normalize());let r=1/0,a=null,o=null,l="concrete";const c=new E;for(let u=0;u<this.colliders.length;u++){const f=this.colliders[u],p=i.intersectBox(f,c);if(p){const g=p.distanceTo(t);if(g<r&&g<=n&&g>.01){r=g,a=p.clone();const _=new E;f.getCenter(_);const m=new E;f.getSize(m);const d=p.clone().sub(_),M=m.clone().multiplyScalar(.5),x=Math.abs(d.x)/M.x,T=Math.abs(d.z)/M.z,P=Math.abs(d.y)/M.y;x>P&&x>T?o=new E(Math.sign(d.x),0,0):T>x&&T>P?o=new E(0,0,Math.sign(d.z)):o=new E(0,Math.sign(d.y),0)}}}this._raycaster.set(t,e),this._raycaster.far=Math.min(n,r);const h=this._raycaster.intersectObjects(this.game.scene.children,!0);for(const u of h)if(u.distance<r&&u.distance>.01){if(u.object.userData.isPickup||u.object.geometry?.type==="CapsuleGeometry"||u.object.parent?.userData?.isDoor)continue;r=u.distance,a=u.point.clone(),o=u.face?u.face.normal.clone().transformDirection(u.object.matrixWorld).normalize():new E(0,1,0)}return a?{point:a,normal:o,distance:r,material:l}:null}spawnImpact(t,e,n){const i=new Or(.075,8),r={concrete:10134445,flesh:7016464,metal:9411242},a=new bt({color:r[n]||13421772,roughness:.9,metalness:.02,transparent:!0,opacity:.96,side:Ke}),o=new lt(i,a);o.position.copy(t).addScaledVector(e,.018),o.quaternion.setFromUnitVectors(new E(0,0,1),e);const l=new lt(new Fn(.035,6,6),new un({color:16766566,transparent:!0,opacity:.92}));l.position.copy(t).addScaledVector(e,.06);const c=new lt(new Fn(.055,6,6),new un({color:4868682,transparent:!0,opacity:.28}));c.position.copy(t).addScaledVector(e,.1);const h=new ze;h.add(o),h.add(l),h.add(c);const u={mesh:h,life:3.8,maxLife:3.8};if(this.impactPool.push(u),this.game.scene.add(h),this.impactPool.length>46){const f=this.impactPool.shift();this.game.scene.remove(f.mesh)}setTimeout(()=>{l.parent&&(c.material.opacity=0)},220)}spawnTracer(t,e){const n=new De,i=new Float32Array([t.x,t.y,t.z,e.x,e.y,e.z]);n.setAttribute("position",new je(i,3));const r=new al({color:16771488,transparent:!0,opacity:.68}),a=new zp(n,r),o={mesh:a,life:.065,maxLife:.065};if(this.tracerPool.push(o),this.game.scene.add(a),this.tracerPool.length>28){const l=this.tracerPool.shift();this.game.scene.remove(l.mesh)}}spawnShell(t,e){const n=new ve(.015,.015,.04,8);n.rotateZ(Math.PI/2);const i=new bt({color:13214794,roughness:.45,metalness:.62,transparent:!0,opacity:1}),r=new lt(n,i);r.position.copy(t),r.castShadow=!1;const a=new E((Math.random()-.5)*1.8,2.2+Math.random()*1.1,(Math.random()-.5)*1.8),o=new E(Math.cos(this.game.player.yaw),0,Math.sin(this.game.player.yaw));a.addScaledVector(o,1.1);const l={mesh:r,vel:a,life:1.6,maxLife:1.6};if(this.shellPool.push(l),this.game.scene.add(r),this.shellPool.length>18){const c=this.shellPool.shift();this.game.scene.remove(c.mesh)}}findInteractable(t,e,n=2.3){let i=null,r=1/0;for(const a of this.interactables){const o=a.position.clone().sub(t),l=o.length();l>n||l<.2||o.normalize().dot(e)<.85||this.raycast(t,e,l-.15)||l<r&&(r=l,i=a)}return i}interact(t){if(!t)return!1;if(t.userData.isDoor)return t.userData.open=!t.userData.open,this.game.audio?.play(t.userData.open?"door_open":"door_close",t.position),!0;if(t.userData.isPickup){const e=t.userData.pickupType;if(e==="shotgun"){if(this.game.weapons.inventory.addWeapon(ai.shotgun)===-1){const i=this.game.weapons.inventory.slots.find(r=>r?.id==="shotgun");i&&(i.reserve+=12)}this.game.audio?.play("pickup",t.position)}else if(e==="ammo_m4"){const n=this.game.weapons.inventory.slots.find(i=>i?.id==="m4a1")||this.game.weapons.inventory.getCurrent();n&&(n.reserve+=60),this.game.audio?.play("pickup",t.position),this.game.weapons.inventory.render(),this.game.weapons.updateHUD()}return t.visible=!1,setTimeout(()=>{t.visible=!0},17e3),this.game.weapons.updateHUD(),!0}return!1}}class mm{constructor(t){this.game=t,this.currentTarget=null,this.promptEl=document.getElementById("interaction-prompt")}update(t){if(!this.game.player||this.game.state!=="playing"){this.setPrompt(null);return}const e=this.game.player.getEyePosition(),n=this.game.player.getForward(),i=this.game.world?.findInteractable(e,n,2.4);if(this.currentTarget=i||null,i){let r="Press [F] to interact";i.userData.isDoor&&(r=i.userData.open?"Press [F] to close door":"Press [F] to open door"),i.userData.isPickup&&(r=`Press [F] to ${{shotgun:"Pick up M1014 Shotgun (60)",ammo_m4:"Pick up 5.56 Ammo"}[i.userData.pickupType]||"interact"}`),this.setPrompt(r)}else this.setPrompt(null)}setPrompt(t){this.promptEl&&(t?(this.promptEl.textContent=t,this.promptEl.classList.remove("hidden")):this.promptEl.classList.add("hidden"))}tryInteract(){this.currentTarget&&this.game.world?.interact(this.currentTarget)}}class gm{constructor(t,e,n){this.game=t,this.position=e.clone(),this.startPos=e.clone(),this.patrolPoints=n||[],this.patrolIndex=0,this.velocity=new E,this.yaw=Math.random()*Math.PI*2,this.health=rt.health.enemyMax,this.maxHealth=rt.health.enemyMax,this.isDead=!1,this.state="patrol",this.stateTime=0,this.lastSeenPos=null,this.lastSeenTime=-999,this.shootCooldown=0,this.reloadTime=0,this.ammo=12,this.target=null;const i=new mi(.32,.95,4,12),r=new bt({color:7023917,roughness:.8});this.mesh=new lt(i,r),this.mesh.position.copy(this.position),this.mesh.position.y+=.85,this.mesh.castShadow=!0,this.mesh.receiveShadow=!0;const a=new Fn(.22,12,10),o=new bt({color:10373706});this.head=new lt(a,o),this.head.position.set(0,.68,0),this.mesh.add(this.head);const l=new Ft(.06,.05,.32),c=new bt({color:1118481});this.gun=new lt(l,c),this.gun.position.set(0,.18,.28),this.mesh.add(this.gun),this._hitFlash=0}getHitBoxes(){const t=this.mesh.position.clone(),e=t.clone();return[{part:"head",center:t.clone().add(new E(0,.68,0)),radius:.24,mult:1},{part:"body",center:e,radius:.36,mult:1},{part:"limb",center:t.clone().add(new E(0,-.3,0)),radius:.28,mult:1}]}update(t){if(this.isDead){this.mesh.position.y=Dt.damp(this.mesh.position.y,this.position.y+.15,2,t),this.mesh.rotation.z+=t*.2,this.mesh.rotation.x=Dt.damp(this.mesh.rotation.x,Math.PI/2.2,2,t),this._hitFlash>0&&(this._hitFlash-=t);return}if(this.stateTime+=t,this.shootCooldown>0&&(this.shootCooldown-=t),this._hitFlash>0){this._hitFlash-=t;const c=this._hitFlash;this.mesh.material.color.setHSL(0,.7,.5+Math.sin(c*18)*.15),c<=0&&this.mesh.material.color.set(7023917)}const e=this.game.player,n=this._getEye(),i=e.getEyePosition(),r=i.clone().sub(n),a=r.length(),o=this._canSeePlayer();switch(this.state){case"patrol":o&&a<rt.enemies.detectionRange?(this.state="alert",this.stateTime=0,this.lastSeenPos=i.clone(),this.lastSeenTime=this.game.time,this.game.audio?.play("alert",this.position)):this._patrol(t);break;case"alert":this._facePoint(i,t,3.5),this.stateTime>rt.enemies.reactionTime&&(this.state="pursuit",this.stateTime=0),o||(this.state="search",this.stateTime=0);break;case"pursuit":if(o){this.lastSeenPos=i.clone(),this.lastSeenTime=this.game.time,this._alertSquad(),this._facePoint(i,t,5.2);const c=this.health<this.maxHealth*.45,h=this._hitFlash>.05;if((c||h)&&this.stateTime%3<.08){const f=this._findCover(i);f&&this._moveToward(f,t,rt.enemies.chaseSpeed*.9)}if(Math.random()<.012){const f=new E().crossVectors(r,new E(0,1,0)).normalize().multiplyScalar((Math.random()<.5?1:-1)*3.5),p=this.position.clone().add(f);this._moveToward(p,t,rt.enemies.chaseSpeed*.75)}a<rt.enemies.attackRange&&this.stateTime>.22&&this.shootCooldown<=0&&this._shootAt(i),a>10?this._moveToward(this.lastSeenPos,t,rt.enemies.chaseSpeed):a<5.5?this._moveAway(i,t):this._strafe(t)}else this.game.time-this.lastSeenTime>1?(this.state="search",this.stateTime=0):this._moveToward(this.lastSeenPos,t,rt.enemies.chaseSpeed);break;case"search":o?(this.state="alert",this.stateTime=0):(this.lastSeenPos&&this._moveToward(this.lastSeenPos,t,rt.enemies.patrolSpeed*1.1),this.stateTime>rt.enemies.searchDuration&&(this.state="patrol",this.stateTime=0));break}this.velocity.y-=18*t,this.position.addScaledVector(this.velocity,t),this.position.y<0&&(this.position.y=0,this.velocity.y=0);const l=this.game.world?.getColliders()||[];for(const c of l){const h=Dt.clamp(this.position.x,c.min.x,c.max.x),u=Dt.clamp(this.position.z,c.min.z,c.max.z),f=this.position.x-h,p=this.position.z-u,g=f*f+p*p,_=.32;if(g<_*_&&this.position.y+.5>c.min.y&&this.position.y<c.max.y){const m=Math.sqrt(g)||.001,d=(_-m)*1.05;this.position.x+=f/m*d,this.position.z+=p/m*d}}this.mesh.position.lerp(new E(this.position.x,this.position.y+.85,this.position.z),Dt.clamp(t*12,0,1)),this.mesh.rotation.y=Dt.damp(this.mesh.rotation.y,this.yaw,6,t)}_getEye(){return new E(this.position.x,this.position.y+1.55,this.position.z)}_canSeePlayer(){const t=this.game.player;if(t.isDead)return!1;const e=this._getEye(),n=t.getEyePosition(),i=e.distanceTo(n);if(i>rt.enemies.detectionRange)return!1;const r=n.clone().sub(e).normalize(),o=new E(Math.sin(this.yaw),0,-Math.cos(this.yaw)).dot(r),l=Math.acos(Dt.clamp(o,-1,1));return!(Dt.toDeg(l)>rt.enemies.fov*.5||this.game.world?.raycast(e,r,i-.2))}_patrol(t){if(this.patrolPoints.length===0){this.stateTime%4<.05&&(this.yaw+=(Math.random()-.5)*1.2),this._moveToward(this.startPos,t,rt.enemies.patrolSpeed*.4);return}const e=this.patrolPoints[this.patrolIndex],n=e.clone().sub(this.position);n.y=0,n.length()<.6?this.patrolIndex=(this.patrolIndex+1)%this.patrolPoints.length:(this._moveToward(e,t,rt.enemies.patrolSpeed),this._facePoint(e,t,3))}_moveToward(t,e,n){const i=t.clone().sub(this.position);if(i.y=0,i.length()<.05)return;i.normalize().multiplyScalar(n*e);const a=this.position.clone().add(i);this.position.x=a.x,this.position.z=a.z,this.yaw=Math.atan2(i.x,-i.z)}_moveAway(t,e){const n=this.position.clone().sub(t);n.y=0,n.normalize().multiplyScalar(rt.enemies.chaseSpeed*.5*e),this.position.add(n)}_strafe(t){const e=this.game.time*.9+this.startPos.x,n=Math.sin(e)*.8*t,i=new E(Math.cos(this.yaw),0,Math.sin(this.yaw));this.position.addScaledVector(i,n)}_facePoint(t,e,n){const i=t.clone().sub(this.position);if(i.y=0,i.lengthSq()<.001)return;let a=Math.atan2(i.x,-i.z)-this.yaw;for(;a>Math.PI;)a-=Math.PI*2;for(;a<-Math.PI;)a+=Math.PI*2;this.yaw+=a*Dt.clamp(e*n,0,1)}_alertSquad(){for(const t of this.game.enemies?.list||[])t===this||t.isDead||t.position.distanceTo(this.position)<18&&(t.state==="patrol"||t.state==="search")&&(t.state="alert",t.stateTime=0,t.lastSeenPos=this.lastSeenPos?.clone())}_findCover(t){const e=this.game.world?.getColliders()||[];let n=null,i=-1/0;for(const r of e){if(r.max.y<.8)continue;const a=new E;if(r.getCenter(a),a.distanceTo(this.position)>14)continue;a.clone().sub(this.game.player.getEyePosition()).length();const o=a.clone().add(new E(0,.8,0)),l=this._getEye(),c=o.clone().sub(l).normalize(),f=(this.game.world?.raycast(l,c,l.distanceTo(o)+2)?1:0)*10-a.distanceTo(this.position)*.5+Math.random()*2;f>i&&(i=f,n=a.clone(),n.y=0)}return n}_shootAt(t){if(this.ammo<=0){this.reloadTime<=0&&(this.reloadTime=1.8),this.reloadTime-=.016,this.reloadTime<=0&&(this.ammo=14,this.reloadTime=0,this.game.audio?.play("reload",this.position));return}const e=this._getEye(),n=t.clone().sub(e).normalize(),i=e.distanceTo(t);let r=.018;r+=i*9e-4,this.state==="pursuit"&&i>12&&(r*=1.3);const a=Math.random()*Math.PI*2,o=Math.random()*r,l=new E().crossVectors(n,new E(0,1,0)).normalize(),c=new E().crossVectors(l,n).normalize(),h=n.clone().addScaledVector(l,Math.cos(a)*o).addScaledVector(c,Math.sin(a)*o).normalize(),u=this.game.player;let f=!1;const p=u.getHitBoxes();let g=1/0;for(const m of p){const d=e.clone().sub(m.center),M=h.dot(d),x=d.lengthSq()-m.radius*m.radius,T=M*M-x;if(T<0)continue;const P=-M-Math.sqrt(T);P>0&&P<g&&P<i+1&&(g=P,f=m)}const _=this.game.world?.raycast(e,h,g);if(_)this.game.world.spawnImpact(_.point,_.normal,"concrete"),this.game.world.spawnTracer(e,_.point);else if(f){const m=e.clone().addScaledVector(h,g),d=f.part;let M=14;if(d==="head"&&(M*=2.1),d==="limb"&&(M*=.7),i>rt.ballistics.falloffStart){const x=Dt.clamp((i-rt.ballistics.falloffStart)/(rt.ballistics.falloffEnd-rt.ballistics.falloffStart),0,1);M*=Dt.lerp(1,.65,x)}u.takeDamage(M,this.position),this.game.world.spawnImpact(m,h.clone().multiplyScalar(-1),"flesh"),this.game.world.spawnTracer(e,m)}else{const m=e.clone().addScaledVector(h,40);this.game.world.spawnTracer(e,m)}this.game.audio?.play("enemy_fire",e),this.ammo--,this.shootCooldown=.42+Math.random()*.35,this.gun.position.z=.24,setTimeout(()=>{this.gun&&(this.gun.position.z=.28)},60)}takeDamage(t,e,n,i){this.isDead||(this.health-=t,this._hitFlash=.18,n&&this.velocity.addScaledVector(n,.12),this.lastSeenPos=this.game.player.getEyePosition().clone(),this.state="pursuit",this.stateTime=0,this.health<=0&&(this.isDead=!0,this.state="dead",this.game.player.kills++,this.game.audio?.play("enemy_death",this.position),this.mesh.material.color.set(3806485)))}}class _m{constructor(t){this.game=t,this.list=[],this.spawnPoints=[]}reset(){for(const n of this.list)n.mesh.parent&&n.mesh.parent.remove(n.mesh);this.list=[];const t=[new E(12,0,-8),new E(-14,0,-18),new E(6,0,-28),new E(18,0,-22),new E(-8,0,4)],e=[[new E(12,0,-8),new E(14,0,-14),new E(8,0,-12)],[new E(-14,0,-18),new E(-10,0,-24)],[new E(6,0,-28),new E(10,0,-32),new E(2,0,-30)],[new E(18,0,-22),new E(22,0,-18)],[new E(-8,0,4),new E(-12,0,8)]];t.forEach((n,i)=>{const r=new gm(this.game,n,e[i]);this.list.push(r),this.game.scene.add(r.mesh)})}update(t){for(const e of this.list)e.update(t)}onEnemyHit(t,e){this.game.hud?.showHitmarker(t.isDead),t.isDead&&this.game.hud?.addKill(`<b>YOU</b> → HOSTILE <b>+1</b> [${t.position.x.toFixed(0)},${t.position.z.toFixed(0)}]`)}raycast(t,e,n){return null}}class vm{constructor(t){this.game=t,this.elMag=document.getElementById("ammo-mag"),this.elRes=document.getElementById("ammo-reserve"),this.elAmmo=document.getElementById("ammo-display"),this.elWeapon=document.getElementById("weapon-name"),this.elMode=document.getElementById("weapon-mode"),this.elCal=document.getElementById("weapon-cal"),this.elHealth=document.getElementById("health-text"),this.elHealthFill=document.getElementById("health-fill"),this.elCrosshair=document.getElementById("crosshair"),this.elAmmoType=document.getElementById("ammo-type"),this.elAmmoTotal=document.getElementById("ammo-total"),this.elReloadBar=document.getElementById("reload-bar"),this.elReloadFill=document.getElementById("reload-fill"),this.elCompassDeg=document.getElementById("compass-deg"),this.elVignette=document.getElementById("damage-vignette"),this.elHit=document.getElementById("hit-indicator"),this.elPauseKills=document.getElementById("pause-kills"),this.elPauseTime=document.getElementById("pause-time"),this.elPauseHp=document.getElementById("pause-hp"),this.elMinimap=document.getElementById("minimap"),this.elKillfeed=document.getElementById("killfeed"),this.elObjHostiles=document.getElementById("obj-hostiles"),this.elObjSector=document.getElementById("obj-sector"),this.minimapCtx=this.elMinimap?.getContext("2d")||null,this.indicators={crouch:document.getElementById("indicator-crouch"),sprint:document.getElementById("indicator-sprint"),ads:document.getElementById("indicator-ads"),lean:document.getElementById("indicator-lean")},this._hitmarkerTimer=0,this._damageFlash=0,this._killQueue=[]}show(){}updateAmmo(t,e,n){this.elMag&&(this.elMag.textContent=String(t)),this.elRes&&(this.elRes.textContent=String(e)),this.elAmmo&&this.elAmmo.classList.toggle("empty",t===0),this.elAmmoType&&(this.elAmmoType.textContent=`${n} RD MAG`),this.elAmmoTotal&&(this.elAmmoTotal.textContent=`${e} RES`)}updateWeapon(t,e){this.elWeapon&&(this.elWeapon.textContent=t),this.elMode&&(this.elMode.textContent=e);const n={M4A1:"5.56×45",G19:"9×19",M1014:"12GA",G19:"9×19"};this.elCal&&(this.elCal.textContent=n[t]||"")}updateReload(t){if(this.elAmmo&&this.elAmmo.classList.toggle("reload",t),this.elReloadBar&&this.elReloadBar.classList.toggle("hidden",!t),t&&this.game.weapons?.current){const e=this.game.weapons.current,n=Math.min(100,e.reloadProgress/e.reloadTotal*100);this.elReloadFill&&(this.elReloadFill.style.width=`${n}%`)}else this.elReloadFill&&(this.elReloadFill.style.width="0%")}updateHealth(t,e){this.elHealth&&(this.elHealth.textContent=String(Math.ceil(t))),this.elHealthFill&&this.elHealthFill.style.setProperty("--hp",`${t/e*100}%`),this.elHealth&&(this.elHealth.style.color=t<30?"#e63946":t<60?"#ffcc33":"#fff"),this.elPauseHp&&(this.elPauseHp.textContent=String(Math.ceil(t)))}showHitmarker(t){this._hitmarkerTimer=t?.45:.2,this.elCrosshair&&(this.elCrosshair.classList.add("hit"),setTimeout(()=>this.elCrosshair?.classList.remove("hit"),this._hitmarkerTimer*1e3)),this.elHit&&(this.elHit.classList.remove("hidden"),this.elHit.classList.add("active"),setTimeout(()=>{this.elHit?.classList.remove("active"),this.elHit?.classList.add("hidden")},180))}flashDamage(t){if(this._damageFlash=.55,this.elVignette&&(this.elVignette.classList.add("active"),setTimeout(()=>this.elVignette?.classList.remove("active"),420)),t&&this.game.player){const e=this.game.player.position,n=t.clone().sub(e);n.y=0;const i=Math.atan2(n.x,-n.z)-this.game.player.yaw;this._showHitDir(i)}}_showHitDir(t){const e=document.getElementById("hud");if(!e)return;const n=document.createElement("div");n.className="hit-dir";const i=document.createElement("div");i.className="hit-arrow",n.appendChild(i),n.style.left="50%",n.style.top="50%";const r=92;n.style.transform=`translate(-50%,-50%) rotate(${t}rad) translateY(-${r}px)`,e.appendChild(n),setTimeout(()=>n.remove(),900)}addKill(t){if(!this.elKillfeed)return;const e=document.createElement("div");e.className="kill-item",e.innerHTML=t,this.elKillfeed.appendChild(e),setTimeout(()=>{e.style.opacity="0",e.style.transform="translateX(8px)",setTimeout(()=>e.remove(),300)},3400),this.updateObjective()}updateObjective(){if(this.elObjHostiles){const t=(this.game.enemies?.list||[]).filter(n=>!n.isDead).length,e=(this.game.enemies?.list||[]).length||5;this.elObjHostiles.textContent=`${e-t}/${e}`,this.elObjHostiles.style.color=t===0?"var(--ok)":"var(--text)"}if(this.elObjSector&&this.game.player){this.game.player.position.x;const t=this.game.player.position.z;let e="A-01";t<-12&&(e=t<-26?"C-03":"B-02"),this.elObjSector.textContent=e}}_drawMinimap(){if(!this.minimapCtx||!this.game.player||!this.game.world)return;const t=this.minimapCtx,e=132,n=36;t.clearRect(0,0,e,e),t.fillStyle="#080d12",t.fillRect(0,0,e,e),t.strokeStyle="rgba(255,255,255,0.06)",t.lineWidth=1;for(let l=0;l<e;l+=16)t.beginPath(),t.moveTo(l,0),t.lineTo(l,e),t.stroke(),t.beginPath(),t.moveTo(0,l),t.lineTo(e,l),t.stroke();const i=this.game.player.position.x,r=this.game.player.position.z,a=this.game.player.yaw,o=(l,c)=>({x:e/2+(l-i)/n*e*.45,y:e/2+(c-r)/n*e*.45});t.fillStyle="rgba(90,108,128,0.55)";for(const l of this.game.world.getColliders()){if(l.max.y<.5||l.max.x-l.min.x>50)continue;const c=o(l.min.x,l.min.z),h=o(l.max.x,l.max.z),u=h.x-c.x,f=h.y-c.y;u<1||f<1||Math.abs(c.x-e/2)>e*.7||Math.abs(c.y-e/2)>e*.7||t.fillRect(c.x,c.y,u,f)}for(const l of this.game.enemies?.list||[]){const c=o(l.position.x,l.position.z);t.fillStyle=l.isDead?"rgba(120,120,120,0.7)":l.state==="pursuit"?"#e63946":"#e6a23c",t.beginPath(),t.arc(c.x,c.y,l.isDead?2.2:3.2,0,Math.PI*2),t.fill(),l.isDead||(t.fillStyle="rgba(255,255,255,0.9)",t.beginPath(),t.arc(c.x+Math.sin(l.yaw)*4,c.y+Math.cos(l.yaw)*4,1.2,0,Math.PI*2),t.fill())}t.fillStyle="#2dd4a8",t.beginPath(),t.arc(e/2,e/2,3.8,0,Math.PI*2),t.fill(),t.strokeStyle="rgba(45,212,168,0.9)",t.lineWidth=1,t.beginPath(),t.moveTo(e/2,e/2),t.lineTo(e/2+Math.sin(a)*10,e/2+Math.cos(a)*-10),t.stroke(),t.fillStyle="rgba(255,204,51,0.95)",t.font="8px JetBrains Mono",t.fillText("N",e/2-4,10)}update(t){const e=this.game.player,n=this.game.weapons;if(e&&this.elCrosshair){const i=n?.isADS||e.isADSing,r=e.isSprinting;this.elCrosshair.classList.toggle("aiming",i),this.elCrosshair.classList.toggle("sprinting",r);const a=n?.current?.spread;let o=0;if(a&&!i){let l=a.hip;e.isSprinting?l*=1.6:e.moveInput.lengthSq()>.05&&(l*=a.movePenalty),e.isCrouching&&(l*=a.crouchBonus),o=Math.min(6,(l-a.ads)*1.2)}this.elCrosshair.style.setProperty("--expand",`${o}px`),i||(this.elCrosshair.style.opacity=e.moveInput.lengthSq()>.05?"0.86":"0.96")}if(e&&this.elCompassDeg){const i=Math.round((e.yaw*180/Math.PI+360)%360);this.elCompassDeg.textContent=`${i}°`}if(e){this.indicators.crouch?.classList.toggle("active",e.isCrouching),this.indicators.sprint?.classList.toggle("active",e.isSprinting),this.indicators.ads?.classList.toggle("active",!!n?.isADS);const i=Math.abs(e.lean)>.12;this.indicators.lean?.classList.toggle("active",i),this.indicators.lean&&(this.indicators.lean.innerHTML=i?`<i></i>${e.lean<-.12?"LEAN ←":"LEAN →"}`:"<i></i>LEAN")}n?.current?.isReloading&&this.updateReload(!0),this._drawMinimap(),this.updateObjective(),this.game.state==="paused"&&e&&(this.elPauseKills&&(this.elPauseKills.textContent=String(e.kills)),this.elPauseTime&&(this.elPauseTime.textContent=`${e.timeAlive.toFixed(1)}s`)),this._hitmarkerTimer>0&&(this._hitmarkerTimer-=t,this._hitmarkerTimer<=0&&this.elCrosshair&&this.elCrosshair.classList.remove("hit")),this._damageFlash>0&&(this._damageFlash-=t)}}class xm{constructor(t){this.game=t,this.ctx=null,this.master=.52,this.hooks=new Map,this.lastPlay=new Map,this._noiseBuffer=null;try{const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e,this._noiseBuffer=this._makeNoiseBuffer(1.2))}catch{this.ctx=null}}_makeNoiseBuffer(t){if(!this.ctx)return null;const e=Math.floor(this.ctx.sampleRate*t),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let r=0;r<e;r++)i[r]=(Math.random()*2-1)*(1-r/e*.35);return n}_getListenerPos(){const t=this.game.camera?.position;return t?{x:t.x,y:t.y,z:t.z}:{x:0,y:0,z:0}}play(t,e){const n=this.game.time??performance.now()/1e3,i=this.lastPlay.get(t)||-999,r={fire_m4a1:.055,fire_glock:.09,fire_shotgun:.24,enemy_fire:.11}[t]??.045;if(n-i<r)return;if(this.lastPlay.set(t,n),this.hooks.has(t))try{this.hooks.get(t)(e)}catch{}if(!this.ctx)return;this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});const a=this.ctx.currentTime,o=this.ctx.createGain();o.gain.value=this.master;let l=null;if(e&&this.ctx.createPanner){l=this.ctx.createPanner(),l.panningModel="HRTF",l.distanceModel="inverse",l.refDistance=6,l.maxDistance=48,l.rolloffFactor=1.1,l.positionX.value=e.x,l.positionY.value=e.y,l.positionZ.value=e.z;const p=this._getListenerPos(),g=this.ctx.listener;g.positionX&&(g.positionX.value=p.x,g.positionY.value=p.y,g.positionZ.value=p.z),l.connect(o),o.connect(this.ctx.destination)}else o.connect(this.ctx.destination);const c=l||o,h=(p,g,_,m,d=0)=>{const M=this.ctx.createBufferSource();M.buffer=this._noiseBuffer;const x=this.ctx.createBiquadFilter();x.type="bandpass",x.frequency.value=g,x.Q.value=_;const T=this.ctx.createBiquadFilter();T.type="highpass",T.frequency.value=d||80;const P=this.ctx.createGain();P.gain.value=m;const A=this.ctx.createGain();A.gain.setValueAtTime(m,a),A.gain.exponentialRampToValueAtTime(8e-4,a+p),M.connect(x).connect(T).connect(A).connect(c),M.start(a),M.stop(a+p+.02)},u=(p,g,_,m="sine")=>{const d=this.ctx.createOscillator();d.type=m,d.frequency.setValueAtTime(p,a),d.frequency.exponentialRampToValueAtTime(p*.72,a+g*.6);const M=this.ctx.createGain();M.gain.setValueAtTime(_,a),M.gain.exponentialRampToValueAtTime(6e-4,a+g);const x=this.ctx.createBiquadFilter();x.type="lowpass",x.frequency.value=420,d.connect(x).connect(M).connect(c),d.start(a),d.stop(a+g+.02)},f=(p,g,_)=>{const m=this.ctx.createOscillator();m.type="square",m.frequency.value=p;const d=this.ctx.createGain();d.gain.setValueAtTime(g,a),d.gain.exponentialRampToValueAtTime(.001,a+_),m.connect(d).connect(c),m.start(a),m.stop(a+_)};switch(t){case"fire_m4a1":{h(.11,1850,.9,.42,90),h(.07,4200,1.6,.18,1200),u(78,.14,.32,"sine"),u(145,.06,.18,"square"),setTimeout(()=>{if(!this.ctx)return;const p=this.ctx.createOscillator();p.type="sine",p.frequency.value=38;const g=this.ctx.createGain();g.gain.setValueAtTime(.06,this.ctx.currentTime),g.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.22),p.connect(g).connect(c),p.start(),p.stop(this.ctx.currentTime+.24)},38);break}case"fire_glock":{h(.09,2200,1.1,.34,110),h(.05,5200,1.3,.14,1500),u(92,.11,.26,"sine"),u(170,.04,.13,"triangle");break}case"fire_shotgun":{h(.16,950,.7,.58,45),h(.11,2800,.9,.22,180),u(52,.22,.52,"sine"),u(110,.12,.24,"square"),u(190,.05,.14,"sawtooth");break}case"enemy_fire":{h(.09,1400,.8,.28,220),u(85,.12,.22,"sine");break}case"dryfire":{f(2100,.18,.04),setTimeout(()=>f(1600,.08,.03),22);break}case"reload":case"reload_empty":{f(4800,.09,.05),setTimeout(()=>h(.08,900,.6,.11,300),70),setTimeout(()=>f(3200,.11,.04),160),setTimeout(()=>u(120,.07,.09,"square"),210);break}case"reload_end":{f(2600,.12,.05),h(.06,1100,1,.07,400);break}case"equip":{h(.07,700,.8,.09,250),u(90,.09,.07,"sine");break}case"shell":{const p=this.ctx.createOscillator();p.type="sine",p.frequency.value=3200+Math.random()*900;const g=this.ctx.createGain();g.gain.setValueAtTime(.08,a),g.gain.exponentialRampToValueAtTime(.001,a+.18);const _=this.ctx.createBiquadFilter();_.type="bandpass",_.frequency.value=3400,_.Q.value=3.2,p.connect(_).connect(g).connect(c),p.start(a),p.stop(a+.2),setTimeout(()=>{const m=this.ctx.createOscillator();m.type="sine",m.frequency.value=1900;const d=this.ctx.createGain();d.gain.setValueAtTime(.04,this.ctx.currentTime),d.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.12),m.connect(d).connect(c),m.start(),m.stop(this.ctx.currentTime+.14)},48);break}case"hit":{u(72,.16,.22,"sawtooth"),h(.08,1800,1.2,.12,600);break}case"land":{u(58,.13,.2,"sine"),h(.09,320,.7,.14,90);break}case"jump":{h(.06,420,.9,.07,200),u(110,.06,.06,"sine");break}case"door_open":case"door_close":{h(.14,420,.6,.11,100),u(68,.16,.09,"sine");break}case"pickup":{const p=this.ctx.createOscillator();p.type="sine",p.frequency.setValueAtTime(660,a),p.frequency.linearRampToValueAtTime(980,a+.12);const g=this.ctx.createGain();g.gain.setValueAtTime(.14,a),g.gain.exponentialRampToValueAtTime(.001,a+.22),p.connect(g).connect(c),p.start(a),p.stop(a+.24),setTimeout(()=>{const _=this.ctx.createOscillator();_.type="sine",_.frequency.value=1320;const m=this.ctx.createGain();m.gain.setValueAtTime(.08,this.ctx.currentTime),m.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.16),_.connect(m).connect(c),_.start(),_.stop(this.ctx.currentTime+.18)},70);break}default:f(900,.09,.06)}}registerHook(t,e){this.hooks.set(t,e)}setMaster(t){this.master=Math.max(0,Math.min(1,t))}}const As=new Op;As.background=new qt(527634);As.fog=new Ir(725272,38,72);const Hn=new Oe(rt.movement.baseFov,window.innerWidth/window.innerHeight,.1,200);Hn.position.set(0,1.7,8);const Be=new rl({antialias:!0,powerPreference:"high-performance"});Be.setSize(window.innerWidth,window.innerHeight);Be.setPixelRatio(Math.min(window.devicePixelRatio,2));Be.shadowMap.enabled=!0;Be.shadowMap.type=bo;Be.outputColorSpace=ne;Be.toneMapping=Ro;Be.toneMappingExposure=1.05;document.getElementById("app").prepend(Be.domElement);const re=new im({scene:As,camera:Hn,renderer:Be});Be.domElement.tabIndex=0;const Hr=new pm(re),Fe=new rm(re),wn=new om(re),Gr=new _m(re),dl=new mm(re),gi=new vm(re),ym=new xm(re),de=new sm(re);re.setRefs({player:Fe,weapons:wn,world:Hr,interactions:dl,enemies:Gr,hud:gi,audio:ym,input:de});re.input=de;Hr.build();Gr.reset();Fe.reset();wn.reset();gi.updateHealth(Fe.health,Fe.maxHealth);gi.updateAmmo(wn.current.ammo,wn.current.reserve,wn.current.magSize);gi.updateWeapon(wn.current.name,wn.current.fireMode.toUpperCase());function Gi(){const s=de.sensitivity,t=de.fov,e=de.invertY,n=de.azerty;["sens-slider","sens-slider-p"].forEach(l=>{const c=document.getElementById(l);c&&(c.value=s)}),["fov-slider","fov-slider-p"].forEach(l=>{const c=document.getElementById(l);c&&(c.value=t)}),["invert-y","invert-y-p"].forEach(l=>{const c=document.getElementById(l);c&&(c.checked=e)}),["azerty","azerty-p"].forEach(l=>{const c=document.getElementById(l);c&&(c.checked=n)}),["wasd-world","wasd-world-p"].forEach(l=>{const c=document.getElementById(l);c&&(c.checked=de.wasdWorld)});const i=document.getElementById("sens-val");i&&(i.textContent=s.toFixed(2));const r=document.getElementById("sens-val-p");r&&(r.textContent=s.toFixed(2));const a=document.getElementById("fov-val");a&&(a.textContent=t+"°");const o=document.getElementById("fov-val-p");o&&(o.textContent=t+"°")}Gi();function Rs(s,t){const e=document.getElementById(s);e&&e.addEventListener("input",n=>{t(n.target.value),Gi()})}Rs("sens-slider",s=>de.sensitivity=parseFloat(s));Rs("sens-slider-p",s=>de.sensitivity=parseFloat(s));Rs("fov-slider",s=>de.fov=parseFloat(s));Rs("fov-slider-p",s=>de.fov=parseFloat(s));["invert-y","invert-y-p"].forEach(s=>{const t=document.getElementById(s);t&&t.addEventListener("change",e=>{de.invertY=e.target.checked,Gi()})});["azerty","azerty-p"].forEach(s=>{const t=document.getElementById(s);t&&t.addEventListener("change",e=>{de.azerty=e.target.checked,Gi()})});["wasd-world","wasd-world-p"].forEach(s=>{const t=document.getElementById(s);t&&t.addEventListener("change",e=>{de.wasdWorld=e.target.checked,Gi()})});const Mm=document.getElementById("btn-start"),Sm=document.getElementById("btn-resume"),Em=document.getElementById("btn-restart"),wm=document.getElementById("btn-retry");Mm?.addEventListener("click",()=>re.start());Sm?.addEventListener("click",()=>re.resume());Em?.addEventListener("click",()=>re.restart());wm?.addEventListener("click",()=>re.restart());Be.domElement.addEventListener("click",()=>{re.state==="playing"&&!de.pointerLocked&&document.getElementById("overlay")?.classList.contains("hidden")&&de.requestPointerLock(),re.state==="menu"&&re.start()});window.addEventListener("resize",()=>{Hn.aspect=window.innerWidth/window.innerHeight,Hn.updateProjectionMatrix(),Be.setSize(window.innerWidth,window.innerHeight)});let wo=performance.now()/1e3;function fl(){requestAnimationFrame(fl);const s=performance.now()/1e3;let t=s-wo;if(t=Math.min(t,.033),wo=s,re.state==="playing"){Fe.update(t),wn.update(t),Gr.update(t),Hr.update(t),dl.update(t),gi.update(t),re.update(t);const e=re.time*(Fe.isSprinting?rt.camera.bobFrequencyWalk*1.18:rt.camera.bobFrequencyWalk),n=Fe.isSprinting?rt.camera.bobAmplitudeSprint:rt.camera.bobAmplitudeWalk;let i=0,r=0;if(Fe.isGrounded&&Fe.moveInput.lengthSq()>.01&&!Fe.isADSing){const a=Math.min(1.6,Fe.velocity.length()/rt.movement.walkSpeed);i=Math.sin(e)*n*a,r=Math.cos(e*.5)*n*.45*a,Fe.isCrouching&&(i*=.5,r*=.5)}else Fe.isADSing||(i=Math.sin(re.time*1.02)*.0055,r=Math.cos(re.time*.68)*.0035);Hn.position.y+=i*.28,Hn.position.x+=r*.28}else gi.update(t);Be.render(As,Hn)}fl();window.__GAME__=re;window.__CONFIG__=rt;console.log("%cGAUNTLET%c v2 — locked controls, elaborate HUD","background:#e63946;color:white;padding:4px 8px","color:#8ea6bf;padding:4px");console.log("Input locked:",{sens:de.sensitivity,fov:de.fov,invert:de.invertY});
