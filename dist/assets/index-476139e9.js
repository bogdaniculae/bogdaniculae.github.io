(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const go="150",Wc=0,Oo=1,qc=2,ql=1,jl=2,ds=3,Ln=0,Bt=1,un=2,Vn=0,Ii=1,Uo=2,ko=3,Go=4,jc=5,Li=100,Xc=101,Yc=102,Vo=103,Ho=104,Kc=200,$c=201,Zc=202,Jc=203,Xl=204,Yl=205,Qc=206,eh=207,th=208,nh=209,ih=210,sh=0,rh=1,oh=2,no=3,ah=4,lh=5,ch=6,hh=7,Kl=0,uh=1,dh=2,Cn=0,fh=1,ph=2,mh=3,gh=4,_h=5,$l=300,Bi=301,Oi=302,io=303,so=304,rr=306,ri=1e3,Vt=1001,tr=1002,ut=1003,ro=1004,Qs=1005,It=1006,Zl=1007,oi=1008,ai=1009,xh=1010,vh=1011,Jl=1012,yh=1013,ni=1014,kn=1015,_s=1016,bh=1017,Mh=1018,Di=1020,wh=1021,Ht=1023,Sh=1024,Th=1025,si=1026,Ui=1027,Eh=1028,Ah=1029,Ch=1030,Lh=1031,Rh=1033,pr=33776,mr=33777,gr=33778,_r=33779,Wo=35840,qo=35841,jo=35842,Xo=35843,Ph=36196,Yo=37492,Ko=37496,$o=37808,Zo=37809,Jo=37810,Qo=37811,ea=37812,ta=37813,na=37814,ia=37815,sa=37816,ra=37817,oa=37818,aa=37819,la=37820,ca=37821,xr=36492,Ih=36283,ha=36284,ua=36285,da=36286,xs=2300,ki=2301,vr=2302,fa=2400,pa=2401,ma=2402,Dh=2500,Nh=0,Ql=1,oo=2,li=3e3,ke=3001,Fh=3200,zh=3201,ec=0,Bh=1,Tt="srgb",Gi="srgb-linear",tc="display-p3",yr=7680,Oh=519,ao=35044,ga="300 es",lo=1035;class Wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}const gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _a=1234567;const ps=Math.PI/180,vs=180/Math.PI;function tn(){const c=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gt[c&255]+gt[c>>8&255]+gt[c>>16&255]+gt[c>>24&255]+"-"+gt[e&255]+gt[e>>8&255]+"-"+gt[e>>16&15|64]+gt[e>>24&255]+"-"+gt[t&63|128]+gt[t>>8&255]+"-"+gt[t>>16&255]+gt[t>>24&255]+gt[n&255]+gt[n>>8&255]+gt[n>>16&255]+gt[n>>24&255]).toLowerCase()}function Et(c,e,t){return Math.max(e,Math.min(t,c))}function _o(c,e){return(c%e+e)%e}function Uh(c,e,t,n,i){return n+(c-e)*(i-n)/(t-e)}function kh(c,e,t){return c!==e?(t-c)/(e-c):0}function ms(c,e,t){return(1-t)*c+t*e}function Gh(c,e,t,n){return ms(c,e,1-Math.exp(-t*n))}function Vh(c,e=1){return e-Math.abs(_o(c,e*2)-e)}function Hh(c,e,t){return c<=e?0:c>=t?1:(c=(c-e)/(t-e),c*c*(3-2*c))}function Wh(c,e,t){return c<=e?0:c>=t?1:(c=(c-e)/(t-e),c*c*c*(c*(c*6-15)+10))}function qh(c,e){return c+Math.floor(Math.random()*(e-c+1))}function jh(c,e){return c+Math.random()*(e-c)}function Xh(c){return c*(.5-Math.random())}function Yh(c){c!==void 0&&(_a=c);let e=_a+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Kh(c){return c*ps}function $h(c){return c*vs}function co(c){return(c&c-1)===0&&c!==0}function nc(c){return Math.pow(2,Math.ceil(Math.log(c)/Math.LN2))}function ic(c){return Math.pow(2,Math.floor(Math.log(c)/Math.LN2))}function Zh(c,e,t,n,i){const s=Math.cos,r=Math.sin,o=s(t/2),a=r(t/2),l=s((e+n)/2),h=r((e+n)/2),d=s((e-n)/2),u=r((e-n)/2),f=s((n-e)/2),g=r((n-e)/2);switch(i){case"XYX":c.set(o*h,a*d,a*u,o*l);break;case"YZY":c.set(a*u,o*h,a*d,o*l);break;case"ZXZ":c.set(a*d,a*u,o*h,o*l);break;case"XZX":c.set(o*h,a*g,a*f,o*l);break;case"YXY":c.set(a*f,o*h,a*g,o*l);break;case"ZYZ":c.set(a*g,a*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function An(c,e){switch(e.constructor){case Float32Array:return c;case Uint16Array:return c/65535;case Uint8Array:return c/255;case Int16Array:return Math.max(c/32767,-1);case Int8Array:return Math.max(c/127,-1);default:throw new Error("Invalid component type.")}}function He(c,e){switch(e.constructor){case Float32Array:return c;case Uint16Array:return Math.round(c*65535);case Uint8Array:return Math.round(c*255);case Int16Array:return Math.round(c*32767);case Int8Array:return Math.round(c*127);default:throw new Error("Invalid component type.")}}const Zt={DEG2RAD:ps,RAD2DEG:vs,generateUUID:tn,clamp:Et,euclideanModulo:_o,mapLinear:Uh,inverseLerp:kh,lerp:ms,damp:Gh,pingpong:Vh,smoothstep:Hh,smootherstep:Wh,randInt:qh,randFloat:jh,randFloatSpread:Xh,seededRandom:Yh,degToRad:Kh,radToDeg:$h,isPowerOfTwo:co,ceilPowerOfTwo:nc,floorPowerOfTwo:ic,setQuaternionFromProperEuler:Zh,normalize:He,denormalize:An};class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ct{constructor(){Ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,r,o,a,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=a,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[3],a=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],m=i[0],p=i[3],_=i[6],x=i[1],v=i[4],b=i[7],w=i[2],E=i[5],I=i[8];return s[0]=r*m+o*x+a*w,s[3]=r*p+o*v+a*E,s[6]=r*_+o*b+a*I,s[1]=l*m+h*x+d*w,s[4]=l*p+h*v+d*E,s[7]=l*_+h*b+d*I,s[2]=u*m+f*x+g*w,s[5]=u*p+f*v+g*E,s[8]=u*_+f*b+g*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],a=e[6],l=e[7],h=e[8];return t*r*h-t*o*l-n*s*h+n*o*a+i*s*l-i*r*a}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],a=e[6],l=e[7],h=e[8],d=h*r-o*l,u=o*a-h*s,f=l*s-r*a,g=t*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=d*m,e[1]=(i*l-h*n)*m,e[2]=(o*n-i*r)*m,e[3]=u*m,e[4]=(h*t-i*a)*m,e[5]=(i*s-o*t)*m,e[6]=f*m,e[7]=(n*a-l*t)*m,e[8]=(r*t-n*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,o){const a=Math.cos(s),l=Math.sin(s);return this.set(n*a,n*l,-n*(a*r+l*o)+r+e,-i*l,i*a,-i*(-l*r+a*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(br.makeScale(e,t)),this}rotate(e){return this.premultiply(br.makeRotation(-e)),this}translate(e,t){return this.premultiply(br.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const br=new Ct;function sc(c){for(let e=c.length-1;e>=0;--e)if(c[e]>=65535)return!0;return!1}function ys(c){return document.createElementNS("http://www.w3.org/1999/xhtml",c)}let Rn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,o){let a=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const u=s[r+0],f=s[r+1],g=s[r+2],m=s[r+3];if(o===0){e[t+0]=a,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=m;return}if(d!==m||a!==u||l!==f||h!==g){let p=1-o;const _=a*u+l*f+h*g+d*m,x=_>=0?1:-1,v=1-_*_;if(v>Number.EPSILON){const w=Math.sqrt(v),E=Math.atan2(w,_*x);p=Math.sin(p*E)/w,o=Math.sin(o*E)/w}const b=o*x;if(a=a*p+u*b,l=l*p+f*b,h=h*p+g*b,d=d*p+m*b,p===1-o){const w=1/Math.sqrt(a*a+l*l+h*h+d*d);a*=w,l*=w,h*=w,d*=w}}e[t]=a,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,r){const o=n[i],a=n[i+1],l=n[i+2],h=n[i+3],d=s[r],u=s[r+1],f=s[r+2],g=s[r+3];return e[t]=o*g+h*d+a*f-l*u,e[t+1]=a*g+h*u+l*d-o*f,e[t+2]=l*g+h*f+o*u-a*d,e[t+3]=h*g-o*d-a*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,r=e._order,o=Math.cos,a=Math.sin,l=o(n/2),h=o(i/2),d=o(s/2),u=a(n/2),f=a(i/2),g=a(s/2);switch(r){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-a)*f,this._y=(s-l)*f,this._z=(r-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-a)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+l)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(s-l)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(a+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(r-i)/f,this._x=(s+l)/f,this._y=(a+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,o=t._x,a=t._y,l=t._z,h=t._w;return this._x=n*h+r*o+i*l-s*a,this._y=i*h+r*a+s*o-n*l,this._z=s*h+r*l+n*a-i*o,this._w=r*h-n*o-i*a-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,r=this._w;let o=r*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const a=1-o*o;if(a<=Number.EPSILON){const f=1-t;return this._w=f*r+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(a),h=Math.atan2(l,o),d=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=r*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z,a=e.w,l=a*t+r*i-o*n,h=a*n+o*t-s*i,d=a*i+s*n-r*t,u=-s*t-r*n-o*i;return this.x=l*a+u*-s+h*-o-d*-r,this.y=h*a+u*-r+d*-s-l*-o,this.z=d*a+u*-o+l*-r-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,o=t.y,a=t.z;return this.x=i*a-s*o,this.y=s*r-n*a,this.z=n*o-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Mr.copy(this).projectOnVector(e),this.sub(Mr)}reflect(e){return this.sub(Mr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mr=new z,xa=new Rn;function Ni(c){return c<.04045?c*.0773993808:Math.pow(c*.9478672986+.0521327014,2.4)}function wr(c){return c<.0031308?c*12.92:1.055*Math.pow(c,.41666)-.055}const Jh=new Ct().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Qh=new Ct().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Gn=new z;function eu(c){return c.convertSRGBToLinear(),Gn.set(c.r,c.g,c.b).applyMatrix3(Qh),c.setRGB(Gn.x,Gn.y,Gn.z)}function tu(c){return Gn.set(c.r,c.g,c.b).applyMatrix3(Jh),c.setRGB(Gn.x,Gn.y,Gn.z).convertLinearToSRGB()}const nu={[Gi]:c=>c,[Tt]:c=>c.convertSRGBToLinear(),[tc]:eu},iu={[Gi]:c=>c,[Tt]:c=>c.convertLinearToSRGB(),[tc]:tu},Mt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(c){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!c},get workingColorSpace(){return Gi},set workingColorSpace(c){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(c,e,t){if(this.enabled===!1||e===t||!e||!t)return c;const n=nu[e],i=iu[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(c))},fromWorkingColorSpace:function(c,e){return this.convert(c,this.workingColorSpace,e)},toWorkingColorSpace:function(c,e){return this.convert(c,e,this.workingColorSpace)}};let pi;class rc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{pi===void 0&&(pi=ys("canvas")),pi.width=e.width,pi.height=e.height;const n=pi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=pi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ys("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Ni(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ni(t[n]/255)*255):t[n]=Ni(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class oc{constructor(e=null){this.isSource=!0,this.uuid=tn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(Sr(i[r].image)):s.push(Sr(i[r]))}else s=Sr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Sr(c){return typeof HTMLImageElement<"u"&&c instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&c instanceof ImageBitmap?rc.getDataURL(c):c.data?{data:Array.from(c.data),width:c.width,height:c.height,type:c.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let su=0;class pt extends Wi{constructor(e=pt.DEFAULT_IMAGE,t=pt.DEFAULT_MAPPING,n=Vt,i=Vt,s=It,r=oi,o=Ht,a=ai,l=pt.DEFAULT_ANISOTROPY,h=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=tn(),this.name="",this.source=new oc(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=a,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$l)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ri:e.x=e.x-Math.floor(e.x);break;case Vt:e.x=e.x<0?0:1;break;case tr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ri:e.y=e.y-Math.floor(e.y);break;case Vt:e.y=e.y<0?0:1;break;case tr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}pt.DEFAULT_IMAGE=null;pt.DEFAULT_MAPPING=$l;pt.DEFAULT_ANISOTROPY=1;class We{constructor(e=0,t=0,n=0,i=1){We.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const a=e.elements,l=a[0],h=a[4],d=a[8],u=a[1],f=a[5],g=a[9],m=a[2],p=a[6],_=a[10];if(Math.abs(h-u)<.01&&Math.abs(d-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+m)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,b=(f+1)/2,w=(_+1)/2,E=(h+u)/4,I=(d+m)/4,y=(g+p)/4;return v>b&&v>w?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=E/n,s=I/n):b>w?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=E/i,s=y/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=I/s,i=y/s),this.set(n,i,s,t),this}let x=Math.sqrt((p-g)*(p-g)+(d-m)*(d-m)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(d-m)/x,this.z=(u-h)/x,this.w=Math.acos((l+f+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ci extends Wi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new We(0,0,e,t),this.scissorTest=!1,this.viewport=new We(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new pt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:It,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new oc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ac extends pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ut,this.minFilter=ut,this.wrapR=Vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ru extends pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ut,this.minFilter=ut,this.wrapR=Vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hn{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(let a=0,l=e.length;a<l;a+=3){const h=e[a],d=e[a+1],u=e[a+2];h<t&&(t=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>r&&(r=d),u>o&&(o=u)}return this.min.set(t,n,i),this.max.set(s,r,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(let a=0,l=e.count;a<l;a++){const h=e.getX(a),d=e.getY(a),u=e.getZ(a);h<t&&(t=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>r&&(r=d),u>o&&(o=u)}return this.min.set(t,n,i),this.max.set(s,r,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let r=0,o=s.count;r<o;r++)Yn.fromBufferAttribute(s,r).applyMatrix4(e.matrixWorld),this.expandByPoint(Yn)}else n.boundingBox===null&&n.computeBoundingBox(),Tr.copy(n.boundingBox),Tr.applyMatrix4(e.matrixWorld),this.union(Tr);const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zi),Ts.subVectors(this.max,Zi),mi.subVectors(e.a,Zi),gi.subVectors(e.b,Zi),_i.subVectors(e.c,Zi),Pn.subVectors(gi,mi),In.subVectors(_i,gi),Kn.subVectors(mi,_i);let t=[0,-Pn.z,Pn.y,0,-In.z,In.y,0,-Kn.z,Kn.y,Pn.z,0,-Pn.x,In.z,0,-In.x,Kn.z,0,-Kn.x,-Pn.y,Pn.x,0,-In.y,In.x,0,-Kn.y,Kn.x,0];return!Er(t,mi,gi,_i,Ts)||(t=[1,0,0,0,1,0,0,0,1],!Er(t,mi,gi,_i,Ts))?!1:(Es.crossVectors(Pn,In),t=[Es.x,Es.y,Es.z],Er(t,mi,gi,_i,Ts))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mn=[new z,new z,new z,new z,new z,new z,new z,new z],Yn=new z,Tr=new Hn,mi=new z,gi=new z,_i=new z,Pn=new z,In=new z,Kn=new z,Zi=new z,Ts=new z,Es=new z,$n=new z;function Er(c,e,t,n,i){for(let s=0,r=c.length-3;s<=r;s+=3){$n.fromArray(c,s);const o=i.x*Math.abs($n.x)+i.y*Math.abs($n.y)+i.z*Math.abs($n.z),a=e.dot($n),l=t.dot($n),h=n.dot($n);if(Math.max(-Math.max(a,l,h),Math.min(a,l,h))>o)return!1}return!0}const ou=new Hn,Ji=new z,Ar=new z;let qi=class{constructor(e=new z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ou.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ji.subVectors(e,this.center);const t=Ji.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ji,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ar.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ji.copy(e.center).add(Ar)),this.expandByPoint(Ji.copy(e.center).sub(Ar))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};const gn=new z,Cr=new z,As=new z,Dn=new z,Lr=new z,Cs=new z,Rr=new z;let xo=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gn.copy(this.origin).addScaledVector(this.direction,t),gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Cr.copy(e).add(t).multiplyScalar(.5),As.copy(t).sub(e).normalize(),Dn.copy(this.origin).sub(Cr);const s=e.distanceTo(t)*.5,r=-this.direction.dot(As),o=Dn.dot(this.direction),a=-Dn.dot(As),l=Dn.lengthSq(),h=Math.abs(1-r*r);let d,u,f,g;if(h>0)if(d=r*a-o,u=r*o-a,g=s*h,d>=0)if(u>=-g)if(u<=g){const m=1/h;d*=m,u*=m,f=d*(d+r*u+2*o)+u*(r*d+u+2*a)+l}else u=s,d=Math.max(0,-(r*u+o)),f=-d*d+u*(u+2*a)+l;else u=-s,d=Math.max(0,-(r*u+o)),f=-d*d+u*(u+2*a)+l;else u<=-g?(d=Math.max(0,-(-r*s+o)),u=d>0?-s:Math.min(Math.max(-s,-a),s),f=-d*d+u*(u+2*a)+l):u<=g?(d=0,u=Math.min(Math.max(-s,-a),s),f=u*(u+2*a)+l):(d=Math.max(0,-(r*s+o)),u=d>0?s:Math.min(Math.max(-s,-a),s),f=-d*d+u*(u+2*a)+l);else u=r>0?-s:s,d=Math.max(0,-(r*u+o)),f=-d*d+u*(u+2*a)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Cr).addScaledVector(As,u),f}intersectSphere(e,t){gn.subVectors(e.center,this.origin);const n=gn.dot(this.direction),i=gn.dot(gn)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),o=n-r,a=n+r;return a<0?null:o<0?this.at(a,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,o,a;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),h>=0?(s=(e.min.y-u.y)*h,r=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,r=(e.min.y-u.y)*h),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),d>=0?(o=(e.min.z-u.z)*d,a=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,a=(e.min.z-u.z)*d),n>a||o>i)||((o>n||n!==n)&&(n=o),(a<i||i!==i)&&(i=a),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,gn)!==null}intersectTriangle(e,t,n,i,s){Lr.subVectors(t,e),Cs.subVectors(n,e),Rr.crossVectors(Lr,Cs);let r=this.direction.dot(Rr),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Dn.subVectors(this.origin,e);const a=o*this.direction.dot(Cs.crossVectors(Dn,Cs));if(a<0)return null;const l=o*this.direction.dot(Lr.cross(Dn));if(l<0||a+l>r)return null;const h=-o*Dn.dot(Rr);return h<0?null:this.at(h/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Le{constructor(){Le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,r,o,a,l,h,d,u,f,g,m,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=r,_[9]=o,_[13]=a,_[2]=l,_[6]=h,_[10]=d,_[14]=u,_[3]=f,_[7]=g,_[11]=m,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Le().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/xi.setFromMatrixColumn(e,0).length(),s=1/xi.setFromMatrixColumn(e,1).length(),r=1/xi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),a=Math.cos(i),l=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=r*h,f=r*d,g=o*h,m=o*d;t[0]=a*h,t[4]=-a*d,t[8]=l,t[1]=f+g*l,t[5]=u-m*l,t[9]=-o*a,t[2]=m-u*l,t[6]=g+f*l,t[10]=r*a}else if(e.order==="YXZ"){const u=a*h,f=a*d,g=l*h,m=l*d;t[0]=u+m*o,t[4]=g*o-f,t[8]=r*l,t[1]=r*d,t[5]=r*h,t[9]=-o,t[2]=f*o-g,t[6]=m+u*o,t[10]=r*a}else if(e.order==="ZXY"){const u=a*h,f=a*d,g=l*h,m=l*d;t[0]=u-m*o,t[4]=-r*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=r*h,t[9]=m-u*o,t[2]=-r*l,t[6]=o,t[10]=r*a}else if(e.order==="ZYX"){const u=r*h,f=r*d,g=o*h,m=o*d;t[0]=a*h,t[4]=g*l-f,t[8]=u*l+m,t[1]=a*d,t[5]=m*l+u,t[9]=f*l-g,t[2]=-l,t[6]=o*a,t[10]=r*a}else if(e.order==="YZX"){const u=r*a,f=r*l,g=o*a,m=o*l;t[0]=a*h,t[4]=m-u*d,t[8]=g*d+f,t[1]=d,t[5]=r*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*d+g,t[10]=u-m*d}else if(e.order==="XZY"){const u=r*a,f=r*l,g=o*a,m=o*l;t[0]=a*h,t[4]=-d,t[8]=l*h,t[1]=u*d+m,t[5]=r*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=m*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(au,e,lu)}lookAt(e,t,n){const i=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),Nn.crossVectors(n,Ft),Nn.lengthSq()===0&&(Math.abs(n.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),Nn.crossVectors(n,Ft)),Nn.normalize(),Ls.crossVectors(Ft,Nn),i[0]=Nn.x,i[4]=Ls.x,i[8]=Ft.x,i[1]=Nn.y,i[5]=Ls.y,i[9]=Ft.y,i[2]=Nn.z,i[6]=Ls.z,i[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[4],a=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],m=n[6],p=n[10],_=n[14],x=n[3],v=n[7],b=n[11],w=n[15],E=i[0],I=i[4],y=i[8],S=i[12],P=i[1],U=i[5],F=i[9],A=i[13],L=i[2],D=i[6],N=i[10],W=i[14],G=i[3],j=i[7],Z=i[11],re=i[15];return s[0]=r*E+o*P+a*L+l*G,s[4]=r*I+o*U+a*D+l*j,s[8]=r*y+o*F+a*N+l*Z,s[12]=r*S+o*A+a*W+l*re,s[1]=h*E+d*P+u*L+f*G,s[5]=h*I+d*U+u*D+f*j,s[9]=h*y+d*F+u*N+f*Z,s[13]=h*S+d*A+u*W+f*re,s[2]=g*E+m*P+p*L+_*G,s[6]=g*I+m*U+p*D+_*j,s[10]=g*y+m*F+p*N+_*Z,s[14]=g*S+m*A+p*W+_*re,s[3]=x*E+v*P+b*L+w*G,s[7]=x*I+v*U+b*D+w*j,s[11]=x*y+v*F+b*N+w*Z,s[15]=x*S+v*A+b*W+w*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],o=e[5],a=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],m=e[7],p=e[11],_=e[15];return g*(+s*a*d-i*l*d-s*o*u+n*l*u+i*o*f-n*a*f)+m*(+t*a*f-t*l*u+s*r*u-i*r*f+i*l*h-s*a*h)+p*(+t*l*d-t*o*f-s*r*d+n*r*f+s*o*h-n*l*h)+_*(-i*o*h-t*a*d+t*o*u+i*r*d-n*r*u+n*a*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],a=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],m=e[13],p=e[14],_=e[15],x=d*p*l-m*u*l+m*a*f-o*p*f-d*a*_+o*u*_,v=g*u*l-h*p*l-g*a*f+r*p*f+h*a*_-r*u*_,b=h*m*l-g*d*l+g*o*f-r*m*f-h*o*_+r*d*_,w=g*d*a-h*m*a-g*o*u+r*m*u+h*o*p-r*d*p,E=t*x+n*v+i*b+s*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/E;return e[0]=x*I,e[1]=(m*u*s-d*p*s-m*i*f+n*p*f+d*i*_-n*u*_)*I,e[2]=(o*p*s-m*a*s+m*i*l-n*p*l-o*i*_+n*a*_)*I,e[3]=(d*a*s-o*u*s-d*i*l+n*u*l+o*i*f-n*a*f)*I,e[4]=v*I,e[5]=(h*p*s-g*u*s+g*i*f-t*p*f-h*i*_+t*u*_)*I,e[6]=(g*a*s-r*p*s-g*i*l+t*p*l+r*i*_-t*a*_)*I,e[7]=(r*u*s-h*a*s+h*i*l-t*u*l-r*i*f+t*a*f)*I,e[8]=b*I,e[9]=(g*d*s-h*m*s-g*n*f+t*m*f+h*n*_-t*d*_)*I,e[10]=(r*m*s-g*o*s+g*n*l-t*m*l-r*n*_+t*o*_)*I,e[11]=(h*o*s-r*d*s-h*n*l+t*d*l+r*n*f-t*o*f)*I,e[12]=w*I,e[13]=(h*m*i-g*d*i+g*n*u-t*m*u-h*n*p+t*d*p)*I,e[14]=(g*o*i-r*m*i-g*n*a+t*m*a+r*n*p-t*o*p)*I,e[15]=(r*d*i-h*o*i+h*n*a-t*d*a-r*n*u+t*o*u)*I,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,o=e.y,a=e.z,l=s*r,h=s*o;return this.set(l*r+n,l*o-i*a,l*a+i*o,0,l*o+i*a,h*o+n,h*a-i*r,0,l*a-i*o,h*a+i*r,s*a*a+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,r=t._y,o=t._z,a=t._w,l=s+s,h=r+r,d=o+o,u=s*l,f=s*h,g=s*d,m=r*h,p=r*d,_=o*d,x=a*l,v=a*h,b=a*d,w=n.x,E=n.y,I=n.z;return i[0]=(1-(m+_))*w,i[1]=(f+b)*w,i[2]=(g-v)*w,i[3]=0,i[4]=(f-b)*E,i[5]=(1-(u+_))*E,i[6]=(p+x)*E,i[7]=0,i[8]=(g+v)*I,i[9]=(p-x)*I,i[10]=(1-(u+m))*I,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=xi.set(i[0],i[1],i[2]).length();const r=xi.set(i[4],i[5],i[6]).length(),o=xi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],jt.copy(this);const l=1/s,h=1/r,d=1/o;return jt.elements[0]*=l,jt.elements[1]*=l,jt.elements[2]*=l,jt.elements[4]*=h,jt.elements[5]*=h,jt.elements[6]*=h,jt.elements[8]*=d,jt.elements[9]*=d,jt.elements[10]*=d,t.setFromRotationMatrix(jt),n.x=s,n.y=r,n.z=o,this}makePerspective(e,t,n,i,s,r){const o=this.elements,a=2*s/(t-e),l=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i),u=-(r+s)/(r-s),f=-2*r*s/(r-s);return o[0]=a,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=l,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=u,o[14]=f,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,r){const o=this.elements,a=1/(t-e),l=1/(n-i),h=1/(r-s),d=(t+e)*a,u=(n+i)*l,f=(r+s)*h;return o[0]=2*a,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-u,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-f,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const xi=new z,jt=new Le,au=new z(0,0,0),lu=new z(1,1,1),Nn=new z,Ls=new z,Ft=new z,va=new Le,ya=new Rn;class or{constructor(e=0,t=0,n=0,i=or.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],o=i[8],a=i[1],l=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(a,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(a,s));break;case"ZYX":this._y=Math.asin(-Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(a,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Et(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return va.makeRotationFromQuaternion(e),this.setFromRotationMatrix(va,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ya.setFromEuler(this),this.setFromQuaternion(ya,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}or.DEFAULT_ORDER="XYZ";class lc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cu=0;const ba=new z,vi=new Rn,_n=new Le,Rs=new z,Qi=new z,hu=new z,uu=new Rn,Ma=new z(1,0,0),wa=new z(0,1,0),Sa=new z(0,0,1),du={type:"added"},Ta={type:"removed"};class $e extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=tn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$e.DEFAULT_UP.clone();const e=new z,t=new or,n=new Rn,i=new z(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Le},normalMatrix:{value:new Ct}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=$e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new lc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.multiply(vi),this}rotateOnWorldAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.premultiply(vi),this}rotateX(e){return this.rotateOnAxis(Ma,e)}rotateY(e){return this.rotateOnAxis(wa,e)}rotateZ(e){return this.rotateOnAxis(Sa,e)}translateOnAxis(e,t){return ba.copy(e).applyQuaternion(this.quaternion),this.position.add(ba.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ma,e)}translateY(e){return this.translateOnAxis(wa,e)}translateZ(e){return this.translateOnAxis(Sa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Rs.copy(e):Rs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(Qi,Rs,this.up):_n.lookAt(Rs,Qi,this.up),this.quaternion.setFromRotationMatrix(_n),i&&(_n.extractRotation(i.matrixWorld),vi.setFromRotationMatrix(_n),this.quaternion.premultiply(vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(du)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ta)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ta)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectsByProperty(e,t);r.length>0&&(n=n.concat(r))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,e,hu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,uu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(e)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const a=o.shapes;if(Array.isArray(a))for(let l=0,h=a.length;l<h;l++){const d=a[l];s(e.shapes,d)}else s(e.shapes,a)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let a=0,l=this.material.length;a<l;a++)o.push(s(e.materials,this.material[a]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const a=this.animations[o];i.animations.push(s(e.animations,a))}}if(t){const o=r(e.geometries),a=r(e.materials),l=r(e.textures),h=r(e.images),d=r(e.shapes),u=r(e.skeletons),f=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),a.length>0&&(n.materials=a),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const a=[];for(const l in o){const h=o[l];delete h.metadata,a.push(h)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}$e.DEFAULT_UP=new z(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xt=new z,xn=new z,Pr=new z,vn=new z,yi=new z,bi=new z,Ea=new z,Ir=new z,Dr=new z,Nr=new z;class En{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Xt.subVectors(e,t),i.cross(Xt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Xt.subVectors(i,t),xn.subVectors(n,t),Pr.subVectors(e,t);const r=Xt.dot(Xt),o=Xt.dot(xn),a=Xt.dot(Pr),l=xn.dot(xn),h=xn.dot(Pr),d=r*l-o*o;if(d===0)return s.set(-2,-1,-1);const u=1/d,f=(l*a-o*h)*u,g=(r*h-o*a)*u;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,vn),vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getUV(e,t,n,i,s,r,o,a){return this.getBarycoord(e,t,n,i,vn),a.set(0,0),a.addScaledVector(s,vn.x),a.addScaledVector(r,vn.y),a.addScaledVector(o,vn.z),a}static isFrontFacing(e,t,n,i){return Xt.subVectors(n,t),xn.subVectors(e,t),Xt.cross(xn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xt.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),Xt.cross(xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return En.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return En.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return En.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return En.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return En.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let r,o;yi.subVectors(i,n),bi.subVectors(s,n),Ir.subVectors(e,n);const a=yi.dot(Ir),l=bi.dot(Ir);if(a<=0&&l<=0)return t.copy(n);Dr.subVectors(e,i);const h=yi.dot(Dr),d=bi.dot(Dr);if(h>=0&&d<=h)return t.copy(i);const u=a*d-h*l;if(u<=0&&a>=0&&h<=0)return r=a/(a-h),t.copy(n).addScaledVector(yi,r);Nr.subVectors(e,s);const f=yi.dot(Nr),g=bi.dot(Nr);if(g>=0&&f<=g)return t.copy(s);const m=f*l-a*g;if(m<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(bi,o);const p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return Ea.subVectors(s,i),o=(d-h)/(d-h+(f-g)),t.copy(i).addScaledVector(Ea,o);const _=1/(p+m+u);return r=m*_,o=u*_,t.copy(n).addScaledVector(yi,r).addScaledVector(bi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let fu=0,dn=class extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=tn(),this.name="",this.type="Material",this.blending=Ii,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Xl,this.blendDst=Yl,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yr,this.stencilZFail=yr,this.stencilZPass=yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const o in s){const a=s[o];delete a.metadata,r.push(a)}return r}if(t){const s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};const cc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yt={h:0,s:0,l:0},Ps={h:0,s:0,l:0};function Fr(c,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?c+(e-c)*6*t:t<1/2?e:t<2/3?c+(e-c)*6*(2/3-t):c}class Se{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Mt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Mt.workingColorSpace){if(e=_o(e,1),t=Et(t,0,1),n=Et(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=Fr(r,s,e+1/3),this.g=Fr(r,s,e),this.b=Fr(r,s,e-1/3)}return Mt.toWorkingColorSpace(this,i),this}setStyle(e,t=Tt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Mt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Mt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const a=parseFloat(s[1])/360,l=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(a,l,h,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],r=s.length;if(r===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Mt.toWorkingColorSpace(this,t),this;if(r===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Mt.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){const n=cc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return Mt.fromWorkingColorSpace(_t.copy(this),e),Et(_t.r*255,0,255)<<16^Et(_t.g*255,0,255)<<8^Et(_t.b*255,0,255)<<0}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.fromWorkingColorSpace(_t.copy(this),t);const n=_t.r,i=_t.g,s=_t.b,r=Math.max(n,i,s),o=Math.min(n,i,s);let a,l;const h=(o+r)/2;if(o===r)a=0,l=0;else{const d=r-o;switch(l=h<=.5?d/(r+o):d/(2-r-o),r){case n:a=(i-s)/d+(i<s?6:0);break;case i:a=(s-n)/d+2;break;case s:a=(n-i)/d+4;break}a/=6}return e.h=a,e.s=l,e.l=h,e}getRGB(e,t=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(_t.copy(this),t),e.r=_t.r,e.g=_t.g,e.b=_t.b,e}getStyle(e=Tt){Mt.fromWorkingColorSpace(_t.copy(this),e);const t=_t.r,n=_t.g,i=_t.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(Yt),Yt.h+=e,Yt.s+=t,Yt.l+=n,this.setHSL(Yt.h,Yt.s,Yt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yt),e.getHSL(Ps);const n=ms(Yt.h,Ps.h,t),i=ms(Yt.s,Ps.s,t),s=ms(Yt.l,Ps.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _t=new Se;Se.NAMES=cc;class Qt extends dn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nt=new z,Is=new Fe;class dt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ao,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Is.fromBufferAttribute(this,t),Is.applyMatrix3(e),this.setXY(t,Is.x,Is.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix3(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix4(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyNormalMatrix(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.transformDirection(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=An(t,this.array)),t}setX(e,t){return this.normalized&&(t=He(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=An(t,this.array)),t}setY(e,t){return this.normalized&&(t=He(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=An(t,this.array)),t}setZ(e,t){return this.normalized&&(t=He(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=An(t,this.array)),t}setW(e,t){return this.normalized&&(t=He(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=He(t,this.array),n=He(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=He(t,this.array),n=He(n,this.array),i=He(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=He(t,this.array),n=He(n,this.array),i=He(i,this.array),s=He(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ao&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class hc extends dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class uc extends dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ft extends dt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let pu=0;const kt=new Le,zr=new $e,Mi=new z,zt=new Hn,es=new Hn,ht=new z;class mt extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=tn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sc(e)?uc:hc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ct().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kt.makeRotationFromQuaternion(e),this.applyMatrix4(kt),this}rotateX(e){return kt.makeRotationX(e),this.applyMatrix4(kt),this}rotateY(e){return kt.makeRotationY(e),this.applyMatrix4(kt),this}rotateZ(e){return kt.makeRotationZ(e),this.applyMatrix4(kt),this}translate(e,t,n){return kt.makeTranslation(e,t,n),this.applyMatrix4(kt),this}scale(e,t,n){return kt.makeScale(e,t,n),this.applyMatrix4(kt),this}lookAt(e){return zr.lookAt(e),zr.updateMatrix(),this.applyMatrix4(zr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mi).negate(),this.translate(Mi.x,Mi.y,Mi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ft(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];zt.setFromBufferAttribute(s),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,zt.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,zt.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(zt.min),this.boundingBox.expandByPoint(zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(zt.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];es.setFromBufferAttribute(o),this.morphTargetsRelative?(ht.addVectors(zt.min,es.min),zt.expandByPoint(ht),ht.addVectors(zt.max,es.max),zt.expandByPoint(ht)):(zt.expandByPoint(es.min),zt.expandByPoint(es.max))}zt.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)ht.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ht));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],a=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)ht.fromBufferAttribute(o,l),a&&(Mi.fromBufferAttribute(e,l),ht.add(Mi)),i=Math.max(i,n.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,r=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dt(new Float32Array(4*o),4));const a=this.getAttribute("tangent").array,l=[],h=[];for(let P=0;P<o;P++)l[P]=new z,h[P]=new z;const d=new z,u=new z,f=new z,g=new Fe,m=new Fe,p=new Fe,_=new z,x=new z;function v(P,U,F){d.fromArray(i,P*3),u.fromArray(i,U*3),f.fromArray(i,F*3),g.fromArray(r,P*2),m.fromArray(r,U*2),p.fromArray(r,F*2),u.sub(d),f.sub(d),m.sub(g),p.sub(g);const A=1/(m.x*p.y-p.x*m.y);isFinite(A)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(f,-m.y).multiplyScalar(A),x.copy(f).multiplyScalar(m.x).addScaledVector(u,-p.x).multiplyScalar(A),l[P].add(_),l[U].add(_),l[F].add(_),h[P].add(x),h[U].add(x),h[F].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let P=0,U=b.length;P<U;++P){const F=b[P],A=F.start,L=F.count;for(let D=A,N=A+L;D<N;D+=3)v(n[D+0],n[D+1],n[D+2])}const w=new z,E=new z,I=new z,y=new z;function S(P){I.fromArray(s,P*3),y.copy(I);const U=l[P];w.copy(U),w.sub(I.multiplyScalar(I.dot(U))).normalize(),E.crossVectors(y,U);const A=E.dot(h[P])<0?-1:1;a[P*4]=w.x,a[P*4+1]=w.y,a[P*4+2]=w.z,a[P*4+3]=A}for(let P=0,U=b.length;P<U;++P){const F=b[P],A=F.start,L=F.count;for(let D=A,N=A+L;D<N;D+=3)S(n[D+0]),S(n[D+1]),S(n[D+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new z,s=new z,r=new z,o=new z,a=new z,l=new z,h=new z,d=new z;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),m=e.getX(u+1),p=e.getX(u+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,p),h.subVectors(r,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,g),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,p),o.add(h),a.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),r.fromBufferAttribute(t,u+2),h.subVectors(r,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ht.fromBufferAttribute(e,t),ht.normalize(),e.setXYZ(t,ht.x,ht.y,ht.z)}toNonIndexed(){function e(o,a){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(a.length*h);let f=0,g=0;for(let m=0,p=a.length;m<p;m++){o.isInterleavedBufferAttribute?f=a[m]*o.data.stride+o.offset:f=a[m]*h;for(let _=0;_<h;_++)u[g++]=l[f++]}return new dt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mt,n=this.index.array,i=this.attributes;for(const o in i){const a=i[o],l=e(a,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const a=[],l=s[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=e(u,n);a.push(f)}t.morphAttributes[o]=a}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,a=r.length;o<a;o++){const l=r[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const l in a)a[l]!==void 0&&(e[l]=a[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const a in n){const l=n[a];e.data.attributes[a]=l.toJSON(e.data)}const i={};let s=!1;for(const a in this.morphAttributes){const l=this.morphAttributes[a],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(i[a]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],d=s[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let l=0,h=r.length;l<h;l++){const d=r[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Aa=new Le,on=new xo,Ds=new qi,Ca=new z,ts=new z,ns=new z,is=new z,Br=new z,Ns=new z,Fs=new Fe,zs=new Fe,Bs=new Fe,Or=new z,Os=new z;class Xe extends $e{constructor(e=new mt,t=new Qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Ns.set(0,0,0);for(let a=0,l=s.length;a<l;a++){const h=o[a],d=s[a];h!==0&&(Br.fromBufferAttribute(d,e),r?Ns.addScaledVector(Br,h):Ns.addScaledVector(Br.sub(t),h))}t.add(Ns)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(s),on.copy(e.ray).recast(e.near),Ds.containsPoint(on.origin)===!1&&(on.intersectSphere(Ds,Ca)===null||on.origin.distanceToSquared(Ca)>(e.far-e.near)**2))||(Aa.copy(s).invert(),on.copy(e.ray).applyMatrix4(Aa),n.boundingBox!==null&&on.intersectsBox(n.boundingBox)===!1))return;let r;const o=n.index,a=n.attributes.position,l=n.attributes.uv,h=n.attributes.uv2,d=n.groups,u=n.drawRange;if(o!==null)if(Array.isArray(i))for(let f=0,g=d.length;f<g;f++){const m=d[f],p=i[m.materialIndex],_=Math.max(m.start,u.start),x=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let v=_,b=x;v<b;v+=3){const w=o.getX(v),E=o.getX(v+1),I=o.getX(v+2);r=Us(this,p,e,on,l,h,w,E,I),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const f=Math.max(0,u.start),g=Math.min(o.count,u.start+u.count);for(let m=f,p=g;m<p;m+=3){const _=o.getX(m),x=o.getX(m+1),v=o.getX(m+2);r=Us(this,i,e,on,l,h,_,x,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(a!==void 0)if(Array.isArray(i))for(let f=0,g=d.length;f<g;f++){const m=d[f],p=i[m.materialIndex],_=Math.max(m.start,u.start),x=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let v=_,b=x;v<b;v+=3){const w=v,E=v+1,I=v+2;r=Us(this,p,e,on,l,h,w,E,I),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const f=Math.max(0,u.start),g=Math.min(a.count,u.start+u.count);for(let m=f,p=g;m<p;m+=3){const _=m,x=m+1,v=m+2;r=Us(this,i,e,on,l,h,_,x,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function mu(c,e,t,n,i,s,r,o){let a;if(e.side===Bt?a=n.intersectTriangle(r,s,i,!0,o):a=n.intersectTriangle(i,s,r,e.side===Ln,o),a===null)return null;Os.copy(o),Os.applyMatrix4(c.matrixWorld);const l=t.ray.origin.distanceTo(Os);return l<t.near||l>t.far?null:{distance:l,point:Os.clone(),object:c}}function Us(c,e,t,n,i,s,r,o,a){c.getVertexPosition(r,ts),c.getVertexPosition(o,ns),c.getVertexPosition(a,is);const l=mu(c,e,t,n,ts,ns,is,Or);if(l){i&&(Fs.fromBufferAttribute(i,r),zs.fromBufferAttribute(i,o),Bs.fromBufferAttribute(i,a),l.uv=En.getUV(Or,ts,ns,is,Fs,zs,Bs,new Fe)),s&&(Fs.fromBufferAttribute(s,r),zs.fromBufferAttribute(s,o),Bs.fromBufferAttribute(s,a),l.uv2=En.getUV(Or,ts,ns,is,Fs,zs,Bs,new Fe));const h={a:r,b:o,c:a,normal:new z,materialIndex:0};En.getNormal(ts,ns,is,h.normal),l.face=h}return l}class Wn extends mt{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const a=[],l=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,r,s,0),g("z","y","x",1,-1,n,t,-e,r,s,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(a),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(d,2));function g(m,p,_,x,v,b,w,E,I,y,S){const P=b/I,U=w/y,F=b/2,A=w/2,L=E/2,D=I+1,N=y+1;let W=0,G=0;const j=new z;for(let Z=0;Z<N;Z++){const re=Z*U-A;for(let B=0;B<D;B++){const J=B*P-F;j[m]=J*x,j[p]=re*v,j[_]=L,l.push(j.x,j.y,j.z),j[m]=0,j[p]=0,j[_]=E>0?1:-1,h.push(j.x,j.y,j.z),d.push(B/I),d.push(1-Z/y),W+=1}}for(let Z=0;Z<y;Z++)for(let re=0;re<I;re++){const B=u+re+D*Z,J=u+re+D*(Z+1),ne=u+(re+1)+D*(Z+1),V=u+(re+1)+D*Z;a.push(B,J,V),a.push(J,ne,V),G+=6}o.addGroup(f,G,S),f+=G,u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vi(c){const e={};for(const t in c){e[t]={};for(const n in c[t]){const i=c[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function St(c){const e={};for(let t=0;t<c.length;t++){const n=Vi(c[t]);for(const i in n)e[i]=n[i]}return e}function gu(c){const e=[];for(let t=0;t<c.length;t++)e.push(c[t].clone());return e}function dc(c){return c.getRenderTarget()===null&&c.outputEncoding===ke?Tt:Gi}const _u={clone:Vi,merge:St};var xu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends dn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xu,this.fragmentShader=vu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vi(e.uniforms),this.uniformsGroups=gu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class fc extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class At extends fc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ps*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const a=r.fullWidth,l=r.fullHeight;s+=r.offsetX*i/a,t-=r.offsetY*n/l,i*=r.width/a,n*=r.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const wi=-90,Si=1;class yu extends $e{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new At(wi,Si,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new At(wi,Si,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const r=new At(wi,Si,e,t);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(0,1,0),this.add(r);const o=new At(wi,Si,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const a=new At(wi,Si,e,t);a.layers=this.layers,a.up.set(0,1,0),a.lookAt(0,0,1),this.add(a);const l=new At(wi,Si,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,r,o,a,l]=this.children,h=e.getRenderTarget(),d=e.toneMapping,u=e.xr.enabled;e.toneMapping=Cn,e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,r),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,a),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(h),e.toneMapping=d,e.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class pc extends pt{constructor(e,t,n,i,s,r,o,a,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Bi,super(e,t,n,i,s,r,o,a,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bu extends ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new pc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:It}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Wn(5,5,5),s=new hi({name:"CubemapFromEquirect",uniforms:Vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bt,blending:Vn});s.uniforms.tEquirect.value=t;const r=new Xe(i,s),o=t.minFilter;return t.minFilter===oi&&(t.minFilter=It),new yu(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}const Ur=new z,Mu=new z,wu=new Ct;let Jn=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ur.subVectors(n,t).cross(Mu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ur),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||wu.getNormalMatrix(e),i=this.coplanarPoint(Ur).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Ti=new qi,ks=new z;class vo{constructor(e=new Jn,t=new Jn,n=new Jn,i=new Jn,s=new Jn,r=new Jn){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],r=n[2],o=n[3],a=n[4],l=n[5],h=n[6],d=n[7],u=n[8],f=n[9],g=n[10],m=n[11],p=n[12],_=n[13],x=n[14],v=n[15];return t[0].setComponents(o-i,d-a,m-u,v-p).normalize(),t[1].setComponents(o+i,d+a,m+u,v+p).normalize(),t[2].setComponents(o+s,d+l,m+f,v+_).normalize(),t[3].setComponents(o-s,d-l,m-f,v-_).normalize(),t[4].setComponents(o-r,d-h,m-g,v-x).normalize(),t[5].setComponents(o+r,d+h,m+g,v+x).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSprite(e){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ks.x=i.normal.x>0?e.max.x:e.min.x,ks.y=i.normal.y>0?e.max.y:e.min.y,ks.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ks)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mc(){let c=null,e=!1,t=null,n=null;function i(s,r){t(s,r),n=c.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=c.requestAnimationFrame(i),e=!0)},stop:function(){c.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){c=s}}}function Su(c,e){const t=e.isWebGL2,n=new WeakMap;function i(l,h){const d=l.array,u=l.usage,f=c.createBuffer();c.bindBuffer(h,f),c.bufferData(h,d,u),l.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:f,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,d){const u=h.array,f=h.updateRange;c.bindBuffer(d,l),f.count===-1?c.bufferSubData(d,0,u):(t?c.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):c.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(c.deleteBuffer(h.buffer),n.delete(l))}function a(l,h){if(l.isGLBufferAttribute){const u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);d===void 0?n.set(l,i(l,h)):d.version<l.version&&(s(d.buffer,l,h),d.version=l.version)}return{get:r,remove:o,update:a}}class ui extends mt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,r=t/2,o=Math.floor(n),a=Math.floor(i),l=o+1,h=a+1,d=e/o,u=t/a,f=[],g=[],m=[],p=[];for(let _=0;_<h;_++){const x=_*u-r;for(let v=0;v<l;v++){const b=v*d-s;g.push(b,-x,0),m.push(0,0,1),p.push(v/o),p.push(1-_/a)}}for(let _=0;_<a;_++)for(let x=0;x<o;x++){const v=x+l*_,b=x+l*(_+1),w=x+1+l*(_+1),E=x+1+l*_;f.push(v,b,E),f.push(b,w,E)}this.setIndex(f),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(m,3)),this.setAttribute("uv",new ft(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ui(e.width,e.height,e.widthSegments,e.heightSegments)}}var Tu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Eu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Au=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Cu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ru=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pu="vec3 transformed = vec3( position );",Iu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Du=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,Nu=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Fu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ou=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ku=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Hu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Wu=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
}`,qu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,ju=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Ku=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$u=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ju=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qu=`#ifdef USE_ENVMAP
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
#endif`,ed=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,td=`#ifdef USE_ENVMAP
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
#endif`,nd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,id=`#ifdef USE_ENVMAP
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
#endif`,sd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,od=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ad=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ld=`#ifdef USE_GRADIENTMAP
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
}`,cd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,hd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ud=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,pd=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,md=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_d=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,yd=`struct PhysicalMaterial {
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,bd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Md=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Sd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Td=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ed=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ad=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Cd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ld=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Pd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Id=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fd=`#ifdef USE_MORPHNORMALS
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
#endif`,zd=`#ifdef USE_MORPHTARGETS
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
#endif`,Bd=`#ifdef USE_MORPHTARGETS
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
#endif`,Od=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Ud=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Wd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,qd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,jd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Xd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,$d=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ef=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,of=`float getShadowMask() {
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
}`,af=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,cf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hf=`#ifdef USE_SKINNING
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
#endif`,uf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,df=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ff=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,gf=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
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
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
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
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,_f=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,xf=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,vf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,yf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,bf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Mf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,wf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tf=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,Ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Af=`#ifdef ENVMAP_TYPE_CUBE
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
	#include <encodings_fragment>
}`,Cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Rf=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
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
}`,Pf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,If=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
}`,Df=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ff=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
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
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Of=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Uf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Gf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
}`,Hf=`#define MATCAP
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
}`,jf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Xf=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Kf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$f=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Zf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
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
}`,Qf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ep=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
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
}`,tp=`uniform vec3 color;
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,np=`uniform float rotation;
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
}`,ip=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Te={alphamap_fragment:Tu,alphamap_pars_fragment:Eu,alphatest_fragment:Au,alphatest_pars_fragment:Cu,aomap_fragment:Lu,aomap_pars_fragment:Ru,begin_vertex:Pu,beginnormal_vertex:Iu,bsdfs:Du,iridescence_fragment:Nu,bumpmap_pars_fragment:Fu,clipping_planes_fragment:zu,clipping_planes_pars_fragment:Bu,clipping_planes_pars_vertex:Ou,clipping_planes_vertex:Uu,color_fragment:ku,color_pars_fragment:Gu,color_pars_vertex:Vu,color_vertex:Hu,common:Wu,cube_uv_reflection_fragment:qu,defaultnormal_vertex:ju,displacementmap_pars_vertex:Xu,displacementmap_vertex:Yu,emissivemap_fragment:Ku,emissivemap_pars_fragment:$u,encodings_fragment:Zu,encodings_pars_fragment:Ju,envmap_fragment:Qu,envmap_common_pars_fragment:ed,envmap_pars_fragment:td,envmap_pars_vertex:nd,envmap_physical_pars_fragment:pd,envmap_vertex:id,fog_vertex:sd,fog_pars_vertex:rd,fog_fragment:od,fog_pars_fragment:ad,gradientmap_pars_fragment:ld,lightmap_fragment:cd,lightmap_pars_fragment:hd,lights_lambert_fragment:ud,lights_lambert_pars_fragment:dd,lights_pars_begin:fd,lights_toon_fragment:md,lights_toon_pars_fragment:gd,lights_phong_fragment:_d,lights_phong_pars_fragment:xd,lights_physical_fragment:vd,lights_physical_pars_fragment:yd,lights_fragment_begin:bd,lights_fragment_maps:Md,lights_fragment_end:wd,logdepthbuf_fragment:Sd,logdepthbuf_pars_fragment:Td,logdepthbuf_pars_vertex:Ed,logdepthbuf_vertex:Ad,map_fragment:Cd,map_pars_fragment:Ld,map_particle_fragment:Rd,map_particle_pars_fragment:Pd,metalnessmap_fragment:Id,metalnessmap_pars_fragment:Dd,morphcolor_vertex:Nd,morphnormal_vertex:Fd,morphtarget_pars_vertex:zd,morphtarget_vertex:Bd,normal_fragment_begin:Od,normal_fragment_maps:Ud,normal_pars_fragment:kd,normal_pars_vertex:Gd,normal_vertex:Vd,normalmap_pars_fragment:Hd,clearcoat_normal_fragment_begin:Wd,clearcoat_normal_fragment_maps:qd,clearcoat_pars_fragment:jd,iridescence_pars_fragment:Xd,output_fragment:Yd,packing:Kd,premultiplied_alpha_fragment:$d,project_vertex:Zd,dithering_fragment:Jd,dithering_pars_fragment:Qd,roughnessmap_fragment:ef,roughnessmap_pars_fragment:tf,shadowmap_pars_fragment:nf,shadowmap_pars_vertex:sf,shadowmap_vertex:rf,shadowmask_pars_fragment:of,skinbase_vertex:af,skinning_pars_vertex:lf,skinning_vertex:cf,skinnormal_vertex:hf,specularmap_fragment:uf,specularmap_pars_fragment:df,tonemapping_fragment:ff,tonemapping_pars_fragment:pf,transmission_fragment:mf,transmission_pars_fragment:gf,uv_pars_fragment:_f,uv_pars_vertex:xf,uv_vertex:vf,uv2_pars_fragment:yf,uv2_pars_vertex:bf,uv2_vertex:Mf,worldpos_vertex:wf,background_vert:Sf,background_frag:Tf,backgroundCube_vert:Ef,backgroundCube_frag:Af,cube_vert:Cf,cube_frag:Lf,depth_vert:Rf,depth_frag:Pf,distanceRGBA_vert:If,distanceRGBA_frag:Df,equirect_vert:Nf,equirect_frag:Ff,linedashed_vert:zf,linedashed_frag:Bf,meshbasic_vert:Of,meshbasic_frag:Uf,meshlambert_vert:kf,meshlambert_frag:Gf,meshmatcap_vert:Vf,meshmatcap_frag:Hf,meshnormal_vert:Wf,meshnormal_frag:qf,meshphong_vert:jf,meshphong_frag:Xf,meshphysical_vert:Yf,meshphysical_frag:Kf,meshtoon_vert:$f,meshtoon_frag:Zf,points_vert:Jf,points_frag:Qf,shadow_vert:ep,shadow_frag:tp,sprite_vert:np,sprite_frag:ip},ie={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ct},uv2Transform:{value:new Ct},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ct}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ct}}},hn={basic:{uniforms:St([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:St([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Se(0)}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:St([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:St([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:St([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Se(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:St([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:St([ie.points,ie.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:St([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:St([ie.common,ie.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:St([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:St([ie.sprite,ie.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new Ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Te.backgroundCube_vert,fragmentShader:Te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distanceRGBA:{uniforms:St([ie.common,ie.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distanceRGBA_vert,fragmentShader:Te.distanceRGBA_frag},shadow:{uniforms:St([ie.lights,ie.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};hn.physical={uniforms:St([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};const Gs={r:0,b:0,g:0};function sp(c,e,t,n,i,s,r){const o=new Se(0);let a=s===!0?0:1,l,h,d=null,u=0,f=null;function g(p,_){let x=!1,v=_.isScene===!0?_.background:null;v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v));const b=c.xr,w=b.getSession&&b.getSession();w&&w.environmentBlendMode==="additive"&&(v=null),v===null?m(o,a):v&&v.isColor&&(m(v,1),x=!0),(c.autoClear||x)&&c.clear(c.autoClearColor,c.autoClearDepth,c.autoClearStencil),v&&(v.isCubeTexture||v.mapping===rr)?(h===void 0&&(h=new Xe(new Wn(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:Vi(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,I,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=v.encoding!==ke,(d!==v||u!==v.version||f!==c.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,f=c.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Xe(new ui(2,2),new hi({name:"BackgroundMaterial",uniforms:Vi(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=v.encoding!==ke,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||f!==c.toneMapping)&&(l.material.needsUpdate=!0,d=v,u=v.version,f=c.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function m(p,_){p.getRGB(Gs,dc(c)),n.buffers.color.setClear(Gs.r,Gs.g,Gs.b,_,r)}return{getClearColor:function(){return o},setClearColor:function(p,_=1){o.set(p),a=_,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,m(o,a)},render:g}}function rp(c,e,t,n){const i=c.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,o={},a=p(null);let l=a,h=!1;function d(L,D,N,W,G){let j=!1;if(r){const Z=m(W,N,D);l!==Z&&(l=Z,f(l.object)),j=_(L,W,N,G),j&&x(L,W,N,G)}else{const Z=D.wireframe===!0;(l.geometry!==W.id||l.program!==N.id||l.wireframe!==Z)&&(l.geometry=W.id,l.program=N.id,l.wireframe=Z,j=!0)}G!==null&&t.update(G,34963),(j||h)&&(h=!1,y(L,D,N,W),G!==null&&c.bindBuffer(34963,t.get(G).buffer))}function u(){return n.isWebGL2?c.createVertexArray():s.createVertexArrayOES()}function f(L){return n.isWebGL2?c.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?c.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function m(L,D,N){const W=N.wireframe===!0;let G=o[L.id];G===void 0&&(G={},o[L.id]=G);let j=G[D.id];j===void 0&&(j={},G[D.id]=j);let Z=j[W];return Z===void 0&&(Z=p(u()),j[W]=Z),Z}function p(L){const D=[],N=[],W=[];for(let G=0;G<i;G++)D[G]=0,N[G]=0,W[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:W,object:L,attributes:{},index:null}}function _(L,D,N,W){const G=l.attributes,j=D.attributes;let Z=0;const re=N.getAttributes();for(const B in re)if(re[B].location>=0){const ne=G[B];let V=j[B];if(V===void 0&&(B==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),B==="instanceColor"&&L.instanceColor&&(V=L.instanceColor)),ne===void 0||ne.attribute!==V||V&&ne.data!==V.data)return!0;Z++}return l.attributesNum!==Z||l.index!==W}function x(L,D,N,W){const G={},j=D.attributes;let Z=0;const re=N.getAttributes();for(const B in re)if(re[B].location>=0){let ne=j[B];ne===void 0&&(B==="instanceMatrix"&&L.instanceMatrix&&(ne=L.instanceMatrix),B==="instanceColor"&&L.instanceColor&&(ne=L.instanceColor));const V={};V.attribute=ne,ne&&ne.data&&(V.data=ne.data),G[B]=V,Z++}l.attributes=G,l.attributesNum=Z,l.index=W}function v(){const L=l.newAttributes;for(let D=0,N=L.length;D<N;D++)L[D]=0}function b(L){w(L,0)}function w(L,D){const N=l.newAttributes,W=l.enabledAttributes,G=l.attributeDivisors;N[L]=1,W[L]===0&&(c.enableVertexAttribArray(L),W[L]=1),G[L]!==D&&((n.isWebGL2?c:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,D),G[L]=D)}function E(){const L=l.newAttributes,D=l.enabledAttributes;for(let N=0,W=D.length;N<W;N++)D[N]!==L[N]&&(c.disableVertexAttribArray(N),D[N]=0)}function I(L,D,N,W,G,j){n.isWebGL2===!0&&(N===5124||N===5125)?c.vertexAttribIPointer(L,D,N,G,j):c.vertexAttribPointer(L,D,N,W,G,j)}function y(L,D,N,W){if(n.isWebGL2===!1&&(L.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const G=W.attributes,j=N.getAttributes(),Z=D.defaultAttributeValues;for(const re in j){const B=j[re];if(B.location>=0){let J=G[re];if(J===void 0&&(re==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),re==="instanceColor"&&L.instanceColor&&(J=L.instanceColor)),J!==void 0){const ne=J.normalized,V=J.itemSize,he=t.get(J);if(he===void 0)continue;const ue=he.buffer,fe=he.type,pe=he.bytesPerElement;if(J.isInterleavedBufferAttribute){const ye=J.data,Ae=ye.stride,Re=J.offset;if(ye.isInstancedInterleavedBuffer){for(let Oe=0;Oe<B.locationSize;Oe++)w(B.location+Oe,ye.meshPerAttribute);L.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Oe=0;Oe<B.locationSize;Oe++)b(B.location+Oe);c.bindBuffer(34962,ue);for(let Oe=0;Oe<B.locationSize;Oe++)I(B.location+Oe,V/B.locationSize,fe,ne,Ae*pe,(Re+V/B.locationSize*Oe)*pe)}else{if(J.isInstancedBufferAttribute){for(let ye=0;ye<B.locationSize;ye++)w(B.location+ye,J.meshPerAttribute);L.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ye=0;ye<B.locationSize;ye++)b(B.location+ye);c.bindBuffer(34962,ue);for(let ye=0;ye<B.locationSize;ye++)I(B.location+ye,V/B.locationSize,fe,ne,V*pe,V/B.locationSize*ye*pe)}}else if(Z!==void 0){const ne=Z[re];if(ne!==void 0)switch(ne.length){case 2:c.vertexAttrib2fv(B.location,ne);break;case 3:c.vertexAttrib3fv(B.location,ne);break;case 4:c.vertexAttrib4fv(B.location,ne);break;default:c.vertexAttrib1fv(B.location,ne)}}}}E()}function S(){F();for(const L in o){const D=o[L];for(const N in D){const W=D[N];for(const G in W)g(W[G].object),delete W[G];delete D[N]}delete o[L]}}function P(L){if(o[L.id]===void 0)return;const D=o[L.id];for(const N in D){const W=D[N];for(const G in W)g(W[G].object),delete W[G];delete D[N]}delete o[L.id]}function U(L){for(const D in o){const N=o[D];if(N[L.id]===void 0)continue;const W=N[L.id];for(const G in W)g(W[G].object),delete W[G];delete N[L.id]}}function F(){A(),h=!0,l!==a&&(l=a,f(l.object))}function A(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:F,resetDefaultState:A,dispose:S,releaseStatesOfGeometry:P,releaseStatesOfProgram:U,initAttributes:v,enableAttribute:b,disableUnusedAttributes:E}}function op(c,e,t,n){const i=n.isWebGL2;let s;function r(l){s=l}function o(l,h){c.drawArrays(s,l,h),t.update(h,s,1)}function a(l,h,d){if(d===0)return;let u,f;if(i)u=c,f="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[f](s,l,h,d),t.update(h,s,d)}this.setMode=r,this.render=o,this.renderInstances=a}function ap(c,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");n=c.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(I){if(I==="highp"){if(c.getShaderPrecisionFormat(35633,36338).precision>0&&c.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";I="mediump"}return I==="mediump"&&c.getShaderPrecisionFormat(35633,36337).precision>0&&c.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&c instanceof WebGL2RenderingContext;let o=t.precision!==void 0?t.precision:"highp";const a=s(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const l=r||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=c.getParameter(34930),u=c.getParameter(35660),f=c.getParameter(3379),g=c.getParameter(34076),m=c.getParameter(34921),p=c.getParameter(36347),_=c.getParameter(36348),x=c.getParameter(36349),v=u>0,b=r||e.has("OES_texture_float"),w=v&&b,E=r?c.getParameter(36183):0;return{isWebGL2:r,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:b,floatVertexTextures:w,maxSamples:E}}function lp(c){const e=this;let t=null,n=0,i=!1,s=!1;const r=new Jn,o=new Ct,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,m=d.clipIntersection,p=d.clipShadows,_=c.get(d);if(!i||g===null||g.length===0||s&&!p)s?h(null):l();else{const x=s?0:n,v=x*4;let b=_.clippingState||null;a.value=b,b=h(g,u,v,f);for(let w=0;w!==v;++w)b[w]=t[w];_.clippingState=b,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}};function l(){a.value!==t&&(a.value=t,a.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){const m=d!==null?d.length:0;let p=null;if(m!==0){if(p=a.value,g!==!0||p===null){const _=f+m*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(p===null||p.length<_)&&(p=new Float32Array(_));for(let v=0,b=f;v!==m;++v,b+=4)r.copy(d[v]).applyMatrix4(x,o),r.normal.toArray(p,b),p[b+3]=r.constant}a.value=p,a.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function cp(c){let e=new WeakMap;function t(r,o){return o===io?r.mapping=Bi:o===so&&(r.mapping=Oi),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const o=r.mapping;if(o===io||o===so)if(e.has(r)){const a=e.get(r).texture;return t(a,r.mapping)}else{const a=r.image;if(a&&a.height>0){const l=new bu(a.height/2);return l.fromEquirectangularTexture(c,r),e.set(r,l),r.addEventListener("dispose",i),t(l.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const a=e.get(o);a!==void 0&&(e.delete(o),a.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class yo extends fc{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,r=n+e,o=i+t,a=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,o-=h*this.view.offsetY,a=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,a,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ri=4,La=[.125,.215,.35,.446,.526,.582],ei=20,kr=new yo,Ra=new Se;let Gr=null;const Qn=(1+Math.sqrt(5))/2,Ei=1/Qn,Pa=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,Qn,Ei),new z(0,Qn,-Ei),new z(Ei,0,Qn),new z(-Ei,0,Qn),new z(Qn,Ei,0),new z(-Qn,Ei,0)];class Ia{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Gr=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Na(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gr),e.scissorTest=!1,Vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bi||e.mapping===Oi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:It,minFilter:It,generateMipmaps:!1,type:_s,format:Ht,encoding:li,depthBuffer:!1},i=Da(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Da(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hp(s)),this._blurMaterial=up(s,e,t)}return i}_compileMaterial(e){const t=new Xe(this._lodPlanes[0],e);this._renderer.compile(t,kr)}_sceneToCubeUV(e,t,n,i){const o=new At(90,1,t,n),a=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Ra),h.toneMapping=Cn,h.autoClear=!1;const f=new Qt({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),g=new Xe(new Wn,f);let m=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,m=!0):(f.color.copy(Ra),m=!0);for(let _=0;_<6;_++){const x=_%3;x===0?(o.up.set(0,a[_],0),o.lookAt(l[_],0,0)):x===1?(o.up.set(0,0,a[_]),o.lookAt(0,l[_],0)):(o.up.set(0,a[_],0),o.lookAt(0,0,l[_]));const v=this._cubeSize;Vs(i,x*v,_>2?v:0,v,v),h.setRenderTarget(i),m&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Bi||e.mapping===Oi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Na());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new Xe(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const a=this._cubeSize;Vs(t,0,0,3*a,2*a),n.setRenderTarget(t),n.render(r,kr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=Pa[(i-1)%Pa.length];this._blur(e,i-1,i,s,r)}t.autoClear=n}_blur(e,t,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,o){const a=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Xe(this._lodPlanes[i],l),u=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*ei-1),m=s/g,p=isFinite(s)?1+Math.floor(h*m):ei;p>ei&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ei}`);const _=[];let x=0;for(let I=0;I<ei;++I){const y=I/m,S=Math.exp(-y*y/2);_.push(S),I===0?x+=S:I<p&&(x+=2*S)}for(let I=0;I<_.length;I++)_[I]=_[I]/x;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=_,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-n;const b=this._sizeLods[i],w=3*b*(i>v-Ri?i-v+Ri:0),E=4*(this._cubeSize-b);Vs(t,w,E,3*b,2*b),a.setRenderTarget(t),a.render(d,kr)}}function hp(c){const e=[],t=[],n=[];let i=c;const s=c-Ri+1+La.length;for(let r=0;r<s;r++){const o=Math.pow(2,i);t.push(o);let a=1/o;r>c-Ri?a=La[r-c+Ri-1]:r===0&&(a=0),n.push(a);const l=1/(o-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,m=3,p=2,_=1,x=new Float32Array(m*g*f),v=new Float32Array(p*g*f),b=new Float32Array(_*g*f);for(let E=0;E<f;E++){const I=E%3*2/3-1,y=E>2?0:-1,S=[I,y,0,I+2/3,y,0,I+2/3,y+1,0,I,y,0,I+2/3,y+1,0,I,y+1,0];x.set(S,m*g*E),v.set(u,p*g*E);const P=[E,E,E,E,E,E];b.set(P,_*g*E)}const w=new mt;w.setAttribute("position",new dt(x,m)),w.setAttribute("uv",new dt(v,p)),w.setAttribute("faceIndex",new dt(b,_)),e.push(w),i>Ri&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Da(c,e,t){const n=new ci(c,e,t);return n.texture.mapping=rr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vs(c,e,t,n,i){c.viewport.set(e,t,n,i),c.scissor.set(e,t,n,i)}function up(c,e,t){const n=new Float32Array(ei),i=new z(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${c}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:bo(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Na(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bo(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Fa(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function bo(){return`

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
	`}function dp(c){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const a=o.mapping,l=a===io||a===so,h=a===Bi||a===Oi;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new Ia(c)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(l&&d&&d.height>0||h&&d&&i(d)){t===null&&(t=new Ia(c));const u=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",s),u.texture}else return null}}}return o}function i(o){let a=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&a++;return a===l}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function fp(c){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=c.getExtension("WEBGL_depth_texture")||c.getExtension("MOZ_WEBGL_depth_texture")||c.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=c.getExtension("EXT_texture_filter_anisotropic")||c.getExtension("MOZ_EXT_texture_filter_anisotropic")||c.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=c.getExtension("WEBGL_compressed_texture_s3tc")||c.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||c.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=c.getExtension("WEBGL_compressed_texture_pvrtc")||c.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=c.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function pp(c,e,t,n){const i={},s=new WeakMap;function r(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",r),delete i[u.id];const f=s.get(u);f&&(e.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",r),i[u.id]=!0,t.memory.geometries++),u}function a(d){const u=d.attributes;for(const g in u)e.update(u[g],34962);const f=d.morphAttributes;for(const g in f){const m=f[g];for(let p=0,_=m.length;p<_;p++)e.update(m[p],34962)}}function l(d){const u=[],f=d.index,g=d.attributes.position;let m=0;if(f!==null){const x=f.array;m=f.version;for(let v=0,b=x.length;v<b;v+=3){const w=x[v+0],E=x[v+1],I=x[v+2];u.push(w,E,E,I,I,w)}}else{const x=g.array;m=g.version;for(let v=0,b=x.length/3-1;v<b;v+=3){const w=v+0,E=v+1,I=v+2;u.push(w,E,E,I,I,w)}}const p=new(sc(u)?uc:hc)(u,1);p.version=m;const _=s.get(d);_&&e.remove(_),s.set(d,p)}function h(d){const u=s.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:a,getWireframeAttribute:h}}function mp(c,e,t,n){const i=n.isWebGL2;let s;function r(u){s=u}let o,a;function l(u){o=u.type,a=u.bytesPerElement}function h(u,f){c.drawElements(s,f,o,u*a),t.update(f,s,1)}function d(u,f,g){if(g===0)return;let m,p;if(i)m=c,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,f,o,u*a,g),t.update(f,s,g)}this.setMode=r,this.setIndex=l,this.render=h,this.renderInstances=d}function gp(c){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(t.calls++,r){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function _p(c,e){return c[0]-e[0]}function xp(c,e){return Math.abs(e[1])-Math.abs(c[1])}function vp(c,e,t){const n={},i=new Float32Array(8),s=new WeakMap,r=new We,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function a(l,h,d){const u=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=g!==void 0?g.length:0;let p=s.get(h);if(p===void 0||p.count!==m){let D=function(){A.dispose(),s.delete(h),h.removeEventListener("dispose",D)};var f=D;p!==void 0&&p.texture.dispose();const v=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],y=h.morphAttributes.color||[];let S=0;v===!0&&(S=1),b===!0&&(S=2),w===!0&&(S=3);let P=h.attributes.position.count*S,U=1;P>e.maxTextureSize&&(U=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const F=new Float32Array(P*U*4*m),A=new ac(F,P,U,m);A.type=kn,A.needsUpdate=!0;const L=S*4;for(let N=0;N<m;N++){const W=E[N],G=I[N],j=y[N],Z=P*U*4*N;for(let re=0;re<W.count;re++){const B=re*L;v===!0&&(r.fromBufferAttribute(W,re),F[Z+B+0]=r.x,F[Z+B+1]=r.y,F[Z+B+2]=r.z,F[Z+B+3]=0),b===!0&&(r.fromBufferAttribute(G,re),F[Z+B+4]=r.x,F[Z+B+5]=r.y,F[Z+B+6]=r.z,F[Z+B+7]=0),w===!0&&(r.fromBufferAttribute(j,re),F[Z+B+8]=r.x,F[Z+B+9]=r.y,F[Z+B+10]=r.z,F[Z+B+11]=j.itemSize===4?r.w:1)}}p={count:m,texture:A,size:new Fe(P,U)},s.set(h,p),h.addEventListener("dispose",D)}let _=0;for(let v=0;v<u.length;v++)_+=u[v];const x=h.morphTargetsRelative?1:1-_;d.getUniforms().setValue(c,"morphTargetBaseInfluence",x),d.getUniforms().setValue(c,"morphTargetInfluences",u),d.getUniforms().setValue(c,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(c,"morphTargetsTextureSize",p.size)}else{const g=u===void 0?0:u.length;let m=n[h.id];if(m===void 0||m.length!==g){m=[];for(let b=0;b<g;b++)m[b]=[b,0];n[h.id]=m}for(let b=0;b<g;b++){const w=m[b];w[0]=b,w[1]=u[b]}m.sort(xp);for(let b=0;b<8;b++)b<g&&m[b][1]?(o[b][0]=m[b][0],o[b][1]=m[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(_p);const p=h.morphAttributes.position,_=h.morphAttributes.normal;let x=0;for(let b=0;b<8;b++){const w=o[b],E=w[0],I=w[1];E!==Number.MAX_SAFE_INTEGER&&I?(p&&h.getAttribute("morphTarget"+b)!==p[E]&&h.setAttribute("morphTarget"+b,p[E]),_&&h.getAttribute("morphNormal"+b)!==_[E]&&h.setAttribute("morphNormal"+b,_[E]),i[b]=I,x+=I):(p&&h.hasAttribute("morphTarget"+b)===!0&&h.deleteAttribute("morphTarget"+b),_&&h.hasAttribute("morphNormal"+b)===!0&&h.deleteAttribute("morphNormal"+b),i[b]=0)}const v=h.morphTargetsRelative?1:1-x;d.getUniforms().setValue(c,"morphTargetBaseInfluence",v),d.getUniforms().setValue(c,"morphTargetInfluences",i)}}return{update:a}}function yp(c,e,t,n){let i=new WeakMap;function s(a){const l=n.render.frame,h=a.geometry,d=e.get(a,h);return i.get(d)!==l&&(e.update(d),i.set(d,l)),a.isInstancedMesh&&(a.hasEventListener("dispose",o)===!1&&a.addEventListener("dispose",o),t.update(a.instanceMatrix,34962),a.instanceColor!==null&&t.update(a.instanceColor,34962)),d}function r(){i=new WeakMap}function o(a){const l=a.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:r}}const gc=new pt,_c=new ac,xc=new ru,vc=new pc,za=[],Ba=[],Oa=new Float32Array(16),Ua=new Float32Array(9),ka=new Float32Array(4);function ji(c,e,t){const n=c[0];if(n<=0||n>0)return c;const i=e*t;let s=za[i];if(s===void 0&&(s=new Float32Array(i),za[i]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,c[r].toArray(s,o)}return s}function rt(c,e){if(c.length!==e.length)return!1;for(let t=0,n=c.length;t<n;t++)if(c[t]!==e[t])return!1;return!0}function ot(c,e){for(let t=0,n=e.length;t<n;t++)c[t]=e[t]}function ar(c,e){let t=Ba[e];t===void 0&&(t=new Int32Array(e),Ba[e]=t);for(let n=0;n!==e;++n)t[n]=c.allocateTextureUnit();return t}function bp(c,e){const t=this.cache;t[0]!==e&&(c.uniform1f(this.addr,e),t[0]=e)}function Mp(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(c.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rt(t,e))return;c.uniform2fv(this.addr,e),ot(t,e)}}function wp(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(c.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(c.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rt(t,e))return;c.uniform3fv(this.addr,e),ot(t,e)}}function Sp(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(c.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rt(t,e))return;c.uniform4fv(this.addr,e),ot(t,e)}}function Tp(c,e){const t=this.cache,n=e.elements;if(n===void 0){if(rt(t,e))return;c.uniformMatrix2fv(this.addr,!1,e),ot(t,e)}else{if(rt(t,n))return;ka.set(n),c.uniformMatrix2fv(this.addr,!1,ka),ot(t,n)}}function Ep(c,e){const t=this.cache,n=e.elements;if(n===void 0){if(rt(t,e))return;c.uniformMatrix3fv(this.addr,!1,e),ot(t,e)}else{if(rt(t,n))return;Ua.set(n),c.uniformMatrix3fv(this.addr,!1,Ua),ot(t,n)}}function Ap(c,e){const t=this.cache,n=e.elements;if(n===void 0){if(rt(t,e))return;c.uniformMatrix4fv(this.addr,!1,e),ot(t,e)}else{if(rt(t,n))return;Oa.set(n),c.uniformMatrix4fv(this.addr,!1,Oa),ot(t,n)}}function Cp(c,e){const t=this.cache;t[0]!==e&&(c.uniform1i(this.addr,e),t[0]=e)}function Lp(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(c.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rt(t,e))return;c.uniform2iv(this.addr,e),ot(t,e)}}function Rp(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(c.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rt(t,e))return;c.uniform3iv(this.addr,e),ot(t,e)}}function Pp(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(c.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rt(t,e))return;c.uniform4iv(this.addr,e),ot(t,e)}}function Ip(c,e){const t=this.cache;t[0]!==e&&(c.uniform1ui(this.addr,e),t[0]=e)}function Dp(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(c.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rt(t,e))return;c.uniform2uiv(this.addr,e),ot(t,e)}}function Np(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(c.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rt(t,e))return;c.uniform3uiv(this.addr,e),ot(t,e)}}function Fp(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(c.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rt(t,e))return;c.uniform4uiv(this.addr,e),ot(t,e)}}function zp(c,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(c.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||gc,i)}function Bp(c,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(c.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||xc,i)}function Op(c,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(c.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||vc,i)}function Up(c,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(c.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||_c,i)}function kp(c){switch(c){case 5126:return bp;case 35664:return Mp;case 35665:return wp;case 35666:return Sp;case 35674:return Tp;case 35675:return Ep;case 35676:return Ap;case 5124:case 35670:return Cp;case 35667:case 35671:return Lp;case 35668:case 35672:return Rp;case 35669:case 35673:return Pp;case 5125:return Ip;case 36294:return Dp;case 36295:return Np;case 36296:return Fp;case 35678:case 36198:case 36298:case 36306:case 35682:return zp;case 35679:case 36299:case 36307:return Bp;case 35680:case 36300:case 36308:case 36293:return Op;case 36289:case 36303:case 36311:case 36292:return Up}}function Gp(c,e){c.uniform1fv(this.addr,e)}function Vp(c,e){const t=ji(e,this.size,2);c.uniform2fv(this.addr,t)}function Hp(c,e){const t=ji(e,this.size,3);c.uniform3fv(this.addr,t)}function Wp(c,e){const t=ji(e,this.size,4);c.uniform4fv(this.addr,t)}function qp(c,e){const t=ji(e,this.size,4);c.uniformMatrix2fv(this.addr,!1,t)}function jp(c,e){const t=ji(e,this.size,9);c.uniformMatrix3fv(this.addr,!1,t)}function Xp(c,e){const t=ji(e,this.size,16);c.uniformMatrix4fv(this.addr,!1,t)}function Yp(c,e){c.uniform1iv(this.addr,e)}function Kp(c,e){c.uniform2iv(this.addr,e)}function $p(c,e){c.uniform3iv(this.addr,e)}function Zp(c,e){c.uniform4iv(this.addr,e)}function Jp(c,e){c.uniform1uiv(this.addr,e)}function Qp(c,e){c.uniform2uiv(this.addr,e)}function em(c,e){c.uniform3uiv(this.addr,e)}function tm(c,e){c.uniform4uiv(this.addr,e)}function nm(c,e,t){const n=this.cache,i=e.length,s=ar(t,i);rt(n,s)||(c.uniform1iv(this.addr,s),ot(n,s));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||gc,s[r])}function im(c,e,t){const n=this.cache,i=e.length,s=ar(t,i);rt(n,s)||(c.uniform1iv(this.addr,s),ot(n,s));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||xc,s[r])}function sm(c,e,t){const n=this.cache,i=e.length,s=ar(t,i);rt(n,s)||(c.uniform1iv(this.addr,s),ot(n,s));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||vc,s[r])}function rm(c,e,t){const n=this.cache,i=e.length,s=ar(t,i);rt(n,s)||(c.uniform1iv(this.addr,s),ot(n,s));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||_c,s[r])}function om(c){switch(c){case 5126:return Gp;case 35664:return Vp;case 35665:return Hp;case 35666:return Wp;case 35674:return qp;case 35675:return jp;case 35676:return Xp;case 5124:case 35670:return Yp;case 35667:case 35671:return Kp;case 35668:case 35672:return $p;case 35669:case 35673:return Zp;case 5125:return Jp;case 36294:return Qp;case 36295:return em;case 36296:return tm;case 35678:case 36198:case 36298:case 36306:case 35682:return nm;case 35679:case 36299:case 36307:return im;case 35680:case 36300:case 36308:case 36293:return sm;case 36289:case 36303:case 36311:case 36292:return rm}}class am{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=kp(t.type)}}class lm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=om(t.type)}}class cm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Vr=/(\w+)(\])?(\[|\.)?/g;function Ga(c,e){c.seq.push(e),c.map[e.id]=e}function hm(c,e,t){const n=c.name,i=n.length;for(Vr.lastIndex=0;;){const s=Vr.exec(n),r=Vr.lastIndex;let o=s[1];const a=s[2]==="]",l=s[3];if(a&&(o=o|0),l===void 0||l==="["&&r+2===i){Ga(t,l===void 0?new am(o,c,e):new lm(o,c,e));break}else{let d=t.map[o];d===void 0&&(d=new cm(o),Ga(t,d)),t=d}}}class er{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),r=e.getUniformLocation(t,s.name);hm(s,r,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){const o=t[s],a=n[o.id];a.needsUpdate!==!1&&o.setValue(e,a.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function Va(c,e,t){const n=c.createShader(e);return c.shaderSource(n,t),c.compileShader(n),n}let um=0;function dm(c,e){const t=c.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}function fm(c){switch(c){case li:return["Linear","( value )"];case ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",c),["Linear","( value )"]}}function Ha(c,e,t){const n=c.getShaderParameter(e,35713),i=c.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+dm(c.getShaderSource(e),r)}else return i}function pm(c,e){const t=fm(e);return"vec4 "+c+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function mm(c,e){let t;switch(e){case fh:t="Linear";break;case ph:t="Reinhard";break;case mh:t="OptimizedCineon";break;case gh:t="ACESFilmic";break;case _h:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+c+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function gm(c){return[c.extensionDerivatives||c.envMapCubeUVHeight||c.bumpMap||c.tangentSpaceNormalMap||c.clearcoatNormalMap||c.flatShading||c.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(c.extensionFragDepth||c.logarithmicDepthBuffer)&&c.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",c.extensionDrawBuffers&&c.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(c.extensionShaderTextureLOD||c.envMap||c.transmission)&&c.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(fs).join(`
`)}function _m(c){const e=[];for(const t in c){const n=c[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function xm(c,e){const t={},n=c.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=c.getActiveAttrib(e,i),r=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[r]={type:s.type,location:c.getAttribLocation(e,r),locationSize:o}}return t}function fs(c){return c!==""}function Wa(c,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return c.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qa(c,e){return c.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ho(c){return c.replace(vm,ym)}function ym(c,e){const t=Te[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ho(t)}const bm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ja(c){return c.replace(bm,Mm)}function Mm(c,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Xa(c){let e="precision "+c.precision+` float;
precision `+c.precision+" int;";return c.precision==="highp"?e+=`
#define HIGH_PRECISION`:c.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:c.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wm(c){let e="SHADOWMAP_TYPE_BASIC";return c.shadowMapType===ql?e="SHADOWMAP_TYPE_PCF":c.shadowMapType===jl?e="SHADOWMAP_TYPE_PCF_SOFT":c.shadowMapType===ds&&(e="SHADOWMAP_TYPE_VSM"),e}function Sm(c){let e="ENVMAP_TYPE_CUBE";if(c.envMap)switch(c.envMapMode){case Bi:case Oi:e="ENVMAP_TYPE_CUBE";break;case rr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Tm(c){let e="ENVMAP_MODE_REFLECTION";if(c.envMap)switch(c.envMapMode){case Oi:e="ENVMAP_MODE_REFRACTION";break}return e}function Em(c){let e="ENVMAP_BLENDING_NONE";if(c.envMap)switch(c.combine){case Kl:e="ENVMAP_BLENDING_MULTIPLY";break;case uh:e="ENVMAP_BLENDING_MIX";break;case dh:e="ENVMAP_BLENDING_ADD";break}return e}function Am(c){const e=c.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Cm(c,e,t,n){const i=c.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const a=wm(t),l=Sm(t),h=Tm(t),d=Em(t),u=Am(t),f=t.isWebGL2?"":gm(t),g=_m(s),m=i.createProgram();let p,_,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(fs).join(`
`),p.length>0&&(p+=`
`),_=[f,g].filter(fs).join(`
`),_.length>0&&(_+=`
`)):(p=[Xa(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fs).join(`
`),_=[f,Xa(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cn?"#define TONE_MAPPING":"",t.toneMapping!==Cn?Te.tonemapping_pars_fragment:"",t.toneMapping!==Cn?mm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Te.encodings_pars_fragment,pm("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fs).join(`
`)),r=ho(r),r=Wa(r,t),r=qa(r,t),o=ho(o),o=Wa(o,t),o=qa(o,t),r=ja(r),o=ja(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===ga?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ga?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const v=x+p+r,b=x+_+o,w=Va(i,35633,v),E=Va(i,35632,b);if(i.attachShader(m,w),i.attachShader(m,E),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),c.debug.checkShaderErrors){const S=i.getProgramInfoLog(m).trim(),P=i.getShaderInfoLog(w).trim(),U=i.getShaderInfoLog(E).trim();let F=!0,A=!0;if(i.getProgramParameter(m,35714)===!1){F=!1;const L=Ha(i,w,"vertex"),D=Ha(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+S+`
`+L+`
`+D)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(P===""||U==="")&&(A=!1);A&&(this.diagnostics={runnable:F,programLog:S,vertexShader:{log:P,prefix:p},fragmentShader:{log:U,prefix:_}})}i.deleteShader(w),i.deleteShader(E);let I;this.getUniforms=function(){return I===void 0&&(I=new er(i,m)),I};let y;return this.getAttributes=function(){return y===void 0&&(y=xm(i,m)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=um++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=E,this}let Lm=0;class Rm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Pm(e),t.set(e,n)),n}}class Pm{constructor(e){this.id=Lm++,this.code=e,this.usedTimes=0}}function Im(c,e,t,n,i,s,r){const o=new lc,a=new Rm,l=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y,S,P,U,F){const A=U.fog,L=F.geometry,D=y.isMeshStandardMaterial?U.environment:null,N=(y.isMeshStandardMaterial?t:e).get(y.envMap||D),W=N&&N.mapping===rr?N.image.height:null,G=g[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const j=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Z=j!==void 0?j.length:0;let re=0;L.morphAttributes.position!==void 0&&(re=1),L.morphAttributes.normal!==void 0&&(re=2),L.morphAttributes.color!==void 0&&(re=3);let B,J,ne,V;if(G){const Ae=hn[G];B=Ae.vertexShader,J=Ae.fragmentShader}else B=y.vertexShader,J=y.fragmentShader,a.update(y),ne=a.getVertexShaderID(y),V=a.getFragmentShaderID(y);const he=c.getRenderTarget(),ue=y.alphaTest>0,fe=y.clearcoat>0,pe=y.iridescence>0;return{isWebGL2:h,shaderID:G,shaderName:y.type,vertexShader:B,fragmentShader:J,defines:y.defines,customVertexShaderID:ne,customFragmentShaderID:V,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,instancing:F.isInstancedMesh===!0,instancingColor:F.isInstancedMesh===!0&&F.instanceColor!==null,supportsVertexTextures:u,outputEncoding:he===null?c.outputEncoding:he.isXRRenderTarget===!0?he.texture.encoding:li,map:!!y.map,matcap:!!y.matcap,envMap:!!N,envMapMode:N&&N.mapping,envMapCubeUVHeight:W,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===Bh,tangentSpaceNormalMap:y.normalMapType===ec,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===ke,clearcoat:fe,clearcoatMap:fe&&!!y.clearcoatMap,clearcoatRoughnessMap:fe&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:fe&&!!y.clearcoatNormalMap,iridescence:pe,iridescenceMap:pe&&!!y.iridescenceMap,iridescenceThicknessMap:pe&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===Ii,alphaMap:!!y.alphaMap,alphaTest:ue,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!L.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.iridescenceMap||y.iridescenceThicknessMap||y.transmission>0||y.transmissionMap||y.thicknessMap||y.specularIntensityMap||y.specularColorMap||y.sheen>0||y.sheenColorMap||y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!A,useFog:y.fog===!0,fogExp2:A&&A.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:d,skinning:F.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:re,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:c.shadowMap.enabled&&P.length>0,shadowMapType:c.shadowMap.type,toneMapping:y.toneMapped?c.toneMapping:Cn,useLegacyLights:c.useLegacyLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===un,flipSided:y.side===Bt,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)S.push(P),S.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(_(S,y),x(S,y),S.push(c.outputEncoding)),S.push(y.customProgramCacheKey),S.join()}function _(y,S){y.push(S.precision),y.push(S.outputEncoding),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.combine),y.push(S.vertexUvs),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function x(y,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.map&&o.enable(4),S.matcap&&o.enable(5),S.envMap&&o.enable(6),S.lightMap&&o.enable(7),S.aoMap&&o.enable(8),S.emissiveMap&&o.enable(9),S.bumpMap&&o.enable(10),S.normalMap&&o.enable(11),S.objectSpaceNormalMap&&o.enable(12),S.tangentSpaceNormalMap&&o.enable(13),S.clearcoat&&o.enable(14),S.clearcoatMap&&o.enable(15),S.clearcoatRoughnessMap&&o.enable(16),S.clearcoatNormalMap&&o.enable(17),S.iridescence&&o.enable(18),S.iridescenceMap&&o.enable(19),S.iridescenceThicknessMap&&o.enable(20),S.displacementMap&&o.enable(21),S.specularMap&&o.enable(22),S.roughnessMap&&o.enable(23),S.metalnessMap&&o.enable(24),S.gradientMap&&o.enable(25),S.alphaMap&&o.enable(26),S.alphaTest&&o.enable(27),S.vertexColors&&o.enable(28),S.vertexAlphas&&o.enable(29),S.vertexUvs&&o.enable(30),S.vertexTangents&&o.enable(31),S.uvsVertexOnly&&o.enable(32),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.specularIntensityMap&&o.enable(15),S.specularColorMap&&o.enable(16),S.transmission&&o.enable(17),S.transmissionMap&&o.enable(18),S.thicknessMap&&o.enable(19),S.sheen&&o.enable(20),S.sheenColorMap&&o.enable(21),S.sheenRoughnessMap&&o.enable(22),S.decodeVideoTexture&&o.enable(23),S.opaque&&o.enable(24),y.push(o.mask)}function v(y){const S=g[y.type];let P;if(S){const U=hn[S];P=_u.clone(U.uniforms)}else P=y.uniforms;return P}function b(y,S){let P;for(let U=0,F=l.length;U<F;U++){const A=l[U];if(A.cacheKey===S){P=A,++P.usedTimes;break}}return P===void 0&&(P=new Cm(c,S,y,s),l.push(P)),P}function w(y){if(--y.usedTimes===0){const S=l.indexOf(y);l[S]=l[l.length-1],l.pop(),y.destroy()}}function E(y){a.remove(y)}function I(){a.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:b,releaseProgram:w,releaseShaderCache:E,programs:l,dispose:I}}function Dm(){let c=new WeakMap;function e(s){let r=c.get(s);return r===void 0&&(r={},c.set(s,r)),r}function t(s){c.delete(s)}function n(s,r,o){c.get(s)[r]=o}function i(){c=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Nm(c,e){return c.groupOrder!==e.groupOrder?c.groupOrder-e.groupOrder:c.renderOrder!==e.renderOrder?c.renderOrder-e.renderOrder:c.material.id!==e.material.id?c.material.id-e.material.id:c.z!==e.z?c.z-e.z:c.id-e.id}function Ya(c,e){return c.groupOrder!==e.groupOrder?c.groupOrder-e.groupOrder:c.renderOrder!==e.renderOrder?c.renderOrder-e.renderOrder:c.z!==e.z?e.z-c.z:c.id-e.id}function Ka(){const c=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(d,u,f,g,m,p){let _=c[e];return _===void 0?(_={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:m,group:p},c[e]=_):(_.id=d.id,_.object=d,_.geometry=u,_.material=f,_.groupOrder=g,_.renderOrder=d.renderOrder,_.z=m,_.group=p),e++,_}function o(d,u,f,g,m,p){const _=r(d,u,f,g,m,p);f.transmission>0?n.push(_):f.transparent===!0?i.push(_):t.push(_)}function a(d,u,f,g,m,p){const _=r(d,u,f,g,m,p);f.transmission>0?n.unshift(_):f.transparent===!0?i.unshift(_):t.unshift(_)}function l(d,u){t.length>1&&t.sort(d||Nm),n.length>1&&n.sort(u||Ya),i.length>1&&i.sort(u||Ya)}function h(){for(let d=e,u=c.length;d<u;d++){const f=c[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:a,finish:h,sort:l}}function Fm(){let c=new WeakMap;function e(n,i){const s=c.get(n);let r;return s===void 0?(r=new Ka,c.set(n,[r])):i>=s.length?(r=new Ka,s.push(r)):r=s[i],r}function t(){c=new WeakMap}return{get:e,dispose:t}}function zm(){const c={};return{get:function(e){if(c[e.id]!==void 0)return c[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Se};break;case"SpotLight":t={position:new z,direction:new z,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new z,halfWidth:new z,halfHeight:new z};break}return c[e.id]=t,t}}}function Bm(){const c={};return{get:function(e){if(c[e.id]!==void 0)return c[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return c[e.id]=t,t}}}let Om=0;function Um(c,e){return(e.castShadow?2:0)-(c.castShadow?2:0)+(e.map?1:0)-(c.map?1:0)}function km(c,e){const t=new zm,n=Bm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new z);const s=new z,r=new Le,o=new Le;function a(h,d){let u=0,f=0,g=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let m=0,p=0,_=0,x=0,v=0,b=0,w=0,E=0,I=0,y=0;h.sort(Um);const S=d===!0?Math.PI:1;for(let U=0,F=h.length;U<F;U++){const A=h[U],L=A.color,D=A.intensity,N=A.distance,W=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=L.r*D*S,f+=L.g*D*S,g+=L.b*D*S;else if(A.isLightProbe)for(let G=0;G<9;G++)i.probe[G].addScaledVector(A.sh.coefficients[G],D);else if(A.isDirectionalLight){const G=t.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity*S),A.castShadow){const j=A.shadow,Z=n.get(A);Z.shadowBias=j.bias,Z.shadowNormalBias=j.normalBias,Z.shadowRadius=j.radius,Z.shadowMapSize=j.mapSize,i.directionalShadow[m]=Z,i.directionalShadowMap[m]=W,i.directionalShadowMatrix[m]=A.shadow.matrix,b++}i.directional[m]=G,m++}else if(A.isSpotLight){const G=t.get(A);G.position.setFromMatrixPosition(A.matrixWorld),G.color.copy(L).multiplyScalar(D*S),G.distance=N,G.coneCos=Math.cos(A.angle),G.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),G.decay=A.decay,i.spot[_]=G;const j=A.shadow;if(A.map&&(i.spotLightMap[I]=A.map,I++,j.updateMatrices(A),A.castShadow&&y++),i.spotLightMatrix[_]=j.matrix,A.castShadow){const Z=n.get(A);Z.shadowBias=j.bias,Z.shadowNormalBias=j.normalBias,Z.shadowRadius=j.radius,Z.shadowMapSize=j.mapSize,i.spotShadow[_]=Z,i.spotShadowMap[_]=W,E++}_++}else if(A.isRectAreaLight){const G=t.get(A);G.color.copy(L).multiplyScalar(D),G.halfWidth.set(A.width*.5,0,0),G.halfHeight.set(0,A.height*.5,0),i.rectArea[x]=G,x++}else if(A.isPointLight){const G=t.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity*S),G.distance=A.distance,G.decay=A.decay,A.castShadow){const j=A.shadow,Z=n.get(A);Z.shadowBias=j.bias,Z.shadowNormalBias=j.normalBias,Z.shadowRadius=j.radius,Z.shadowMapSize=j.mapSize,Z.shadowCameraNear=j.camera.near,Z.shadowCameraFar=j.camera.far,i.pointShadow[p]=Z,i.pointShadowMap[p]=W,i.pointShadowMatrix[p]=A.shadow.matrix,w++}i.point[p]=G,p++}else if(A.isHemisphereLight){const G=t.get(A);G.skyColor.copy(A.color).multiplyScalar(D*S),G.groundColor.copy(A.groundColor).multiplyScalar(D*S),i.hemi[v]=G,v++}}x>0&&(e.isWebGL2||c.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):c.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=g;const P=i.hash;(P.directionalLength!==m||P.pointLength!==p||P.spotLength!==_||P.rectAreaLength!==x||P.hemiLength!==v||P.numDirectionalShadows!==b||P.numPointShadows!==w||P.numSpotShadows!==E||P.numSpotMaps!==I)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=x,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=E+I-y,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=y,P.directionalLength=m,P.pointLength=p,P.spotLength=_,P.rectAreaLength=x,P.hemiLength=v,P.numDirectionalShadows=b,P.numPointShadows=w,P.numSpotShadows=E,P.numSpotMaps=I,i.version=Om++)}function l(h,d){let u=0,f=0,g=0,m=0,p=0;const _=d.matrixWorldInverse;for(let x=0,v=h.length;x<v;x++){const b=h[x];if(b.isDirectionalLight){const w=i.directional[u];w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),u++}else if(b.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(_),w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),g++}else if(b.isRectAreaLight){const w=i.rectArea[m];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(_),o.identity(),r.copy(b.matrixWorld),r.premultiply(_),o.extractRotation(r),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),m++}else if(b.isPointLight){const w=i.point[f];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(_),f++}else if(b.isHemisphereLight){const w=i.hemi[p];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(_),p++}}}return{setup:a,setupView:l,state:i}}function $a(c,e){const t=new km(c,e),n=[],i=[];function s(){n.length=0,i.length=0}function r(d){n.push(d)}function o(d){i.push(d)}function a(d){t.setup(n,d)}function l(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Gm(c,e){let t=new WeakMap;function n(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new $a(c,e),t.set(s,[a])):r>=o.length?(a=new $a(c,e),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:n,dispose:i}}class Vm extends dn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hm extends dn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new z,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qm=`uniform sampler2D shadow_pass;
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
}`;function jm(c,e,t){let n=new vo;const i=new Fe,s=new Fe,r=new We,o=new Vm({depthPacking:zh}),a=new Hm,l={},h=t.maxTextureSize,d={[Ln]:Bt,[Bt]:Ln,[un]:un},u=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:Wm,fragmentShader:qm}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new mt;g.setAttribute("position",new dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Xe(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ql,this.render=function(b,w,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const I=c.getRenderTarget(),y=c.getActiveCubeFace(),S=c.getActiveMipmapLevel(),P=c.state;P.setBlending(Vn),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let U=0,F=b.length;U<F;U++){const A=b[U],L=A.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",A,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;i.copy(L.mapSize);const D=L.getFrameExtents();if(i.multiply(D),s.copy(L.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/D.x),i.x=s.x*D.x,L.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/D.y),i.y=s.y*D.y,L.mapSize.y=s.y)),L.map===null){const W=this.type!==ds?{minFilter:ut,magFilter:ut}:{};L.map=new ci(i.x,i.y,W),L.map.texture.name=A.name+".shadowMap",L.camera.updateProjectionMatrix()}c.setRenderTarget(L.map),c.clear();const N=L.getViewportCount();for(let W=0;W<N;W++){const G=L.getViewport(W);r.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),P.viewport(r),L.updateMatrices(A,W),n=L.getFrustum(),v(w,E,L.camera,A,this.type)}L.isPointLightShadow!==!0&&this.type===ds&&_(L,E),L.needsUpdate=!1}p.needsUpdate=!1,c.setRenderTarget(I,y,S)};function _(b,w){const E=e.update(m);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ci(i.x,i.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,c.setRenderTarget(b.mapPass),c.clear(),c.renderBufferDirect(w,null,E,u,m,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,c.setRenderTarget(b.map),c.clear(),c.renderBufferDirect(w,null,E,f,m,null)}function x(b,w,E,I,y,S){let P=null;const U=E.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(U!==void 0)P=U;else if(P=E.isPointLight===!0?a:o,c.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const F=P.uuid,A=w.uuid;let L=l[F];L===void 0&&(L={},l[F]=L);let D=L[A];D===void 0&&(D=P.clone(),L[A]=D),P=D}return P.visible=w.visible,P.wireframe=w.wireframe,S===ds?P.side=w.shadowSide!==null?w.shadowSide:w.side:P.side=w.shadowSide!==null?w.shadowSide:d[w.side],P.alphaMap=w.alphaMap,P.alphaTest=w.alphaTest,P.map=w.map,P.clipShadows=w.clipShadows,P.clippingPlanes=w.clippingPlanes,P.clipIntersection=w.clipIntersection,P.displacementMap=w.displacementMap,P.displacementScale=w.displacementScale,P.displacementBias=w.displacementBias,P.wireframeLinewidth=w.wireframeLinewidth,P.linewidth=w.linewidth,E.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(E.matrixWorld),P.nearDistance=I,P.farDistance=y),P}function v(b,w,E,I,y){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===ds)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,b.matrixWorld);const U=e.update(b),F=b.material;if(Array.isArray(F)){const A=U.groups;for(let L=0,D=A.length;L<D;L++){const N=A[L],W=F[N.materialIndex];if(W&&W.visible){const G=x(b,W,I,E.near,E.far,y);c.renderBufferDirect(E,null,U,G,b,N)}}}else if(F.visible){const A=x(b,F,I,E.near,E.far,y);c.renderBufferDirect(E,null,U,A,b,null)}}const P=b.children;for(let U=0,F=P.length;U<F;U++)v(P[U],w,E,I,y)}}function Xm(c,e,t){const n=t.isWebGL2;function i(){let O=!1;const X=new We;let Q=null;const le=new We(0,0,0,0);return{setMask:function(de){Q!==de&&!O&&(c.colorMask(de,de,de,de),Q=de)},setLocked:function(de){O=de},setClear:function(de,qe,lt,yt,sn){sn===!0&&(de*=yt,qe*=yt,lt*=yt),X.set(de,qe,lt,yt),le.equals(X)===!1&&(c.clearColor(de,qe,lt,yt),le.copy(X))},reset:function(){O=!1,Q=null,le.set(-1,0,0,0)}}}function s(){let O=!1,X=null,Q=null,le=null;return{setTest:function(de){de?ue(2929):fe(2929)},setMask:function(de){X!==de&&!O&&(c.depthMask(de),X=de)},setFunc:function(de){if(Q!==de){switch(de){case sh:c.depthFunc(512);break;case rh:c.depthFunc(519);break;case oh:c.depthFunc(513);break;case no:c.depthFunc(515);break;case ah:c.depthFunc(514);break;case lh:c.depthFunc(518);break;case ch:c.depthFunc(516);break;case hh:c.depthFunc(517);break;default:c.depthFunc(515)}Q=de}},setLocked:function(de){O=de},setClear:function(de){le!==de&&(c.clearDepth(de),le=de)},reset:function(){O=!1,X=null,Q=null,le=null}}}function r(){let O=!1,X=null,Q=null,le=null,de=null,qe=null,lt=null,yt=null,sn=null;return{setTest:function(Je){O||(Je?ue(2960):fe(2960))},setMask:function(Je){X!==Je&&!O&&(c.stencilMask(Je),X=Je)},setFunc:function(Je,Ut,rn){(Q!==Je||le!==Ut||de!==rn)&&(c.stencilFunc(Je,Ut,rn),Q=Je,le=Ut,de=rn)},setOp:function(Je,Ut,rn){(qe!==Je||lt!==Ut||yt!==rn)&&(c.stencilOp(Je,Ut,rn),qe=Je,lt=Ut,yt=rn)},setLocked:function(Je){O=Je},setClear:function(Je){sn!==Je&&(c.clearStencil(Je),sn=Je)},reset:function(){O=!1,X=null,Q=null,le=null,de=null,qe=null,lt=null,yt=null,sn=null}}}const o=new i,a=new s,l=new r,h=new WeakMap,d=new WeakMap;let u={},f={},g=new WeakMap,m=[],p=null,_=!1,x=null,v=null,b=null,w=null,E=null,I=null,y=null,S=!1,P=null,U=null,F=null,A=null,L=null;const D=c.getParameter(35661);let N=!1,W=0;const G=c.getParameter(7938);G.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(G)[1]),N=W>=1):G.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),N=W>=2);let j=null,Z={};const re=c.getParameter(3088),B=c.getParameter(2978),J=new We().fromArray(re),ne=new We().fromArray(B);function V(O,X,Q){const le=new Uint8Array(4),de=c.createTexture();c.bindTexture(O,de),c.texParameteri(O,10241,9728),c.texParameteri(O,10240,9728);for(let qe=0;qe<Q;qe++)c.texImage2D(X+qe,0,6408,1,1,0,6408,5121,le);return de}const he={};he[3553]=V(3553,3553,1),he[34067]=V(34067,34069,6),o.setClear(0,0,0,1),a.setClear(1),l.setClear(0),ue(2929),a.setFunc(no),Lt(!1),vt(Oo),ue(2884),xt(Vn);function ue(O){u[O]!==!0&&(c.enable(O),u[O]=!0)}function fe(O){u[O]!==!1&&(c.disable(O),u[O]=!1)}function pe(O,X){return f[O]!==X?(c.bindFramebuffer(O,X),f[O]=X,n&&(O===36009&&(f[36160]=X),O===36160&&(f[36009]=X)),!0):!1}function ye(O,X){let Q=m,le=!1;if(O)if(Q=g.get(X),Q===void 0&&(Q=[],g.set(X,Q)),O.isWebGLMultipleRenderTargets){const de=O.texture;if(Q.length!==de.length||Q[0]!==36064){for(let qe=0,lt=de.length;qe<lt;qe++)Q[qe]=36064+qe;Q.length=de.length,le=!0}}else Q[0]!==36064&&(Q[0]=36064,le=!0);else Q[0]!==1029&&(Q[0]=1029,le=!0);le&&(t.isWebGL2?c.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function Ae(O){return p!==O?(c.useProgram(O),p=O,!0):!1}const Re={[Li]:32774,[Xc]:32778,[Yc]:32779};if(n)Re[Vo]=32775,Re[Ho]=32776;else{const O=e.get("EXT_blend_minmax");O!==null&&(Re[Vo]=O.MIN_EXT,Re[Ho]=O.MAX_EXT)}const Oe={[Kc]:0,[$c]:1,[Zc]:768,[Xl]:770,[ih]:776,[th]:774,[Qc]:772,[Jc]:769,[Yl]:771,[nh]:775,[eh]:773};function xt(O,X,Q,le,de,qe,lt,yt){if(O===Vn){_===!0&&(fe(3042),_=!1);return}if(_===!1&&(ue(3042),_=!0),O!==jc){if(O!==x||yt!==S){if((v!==Li||E!==Li)&&(c.blendEquation(32774),v=Li,E=Li),yt)switch(O){case Ii:c.blendFuncSeparate(1,771,1,771);break;case Uo:c.blendFunc(1,1);break;case ko:c.blendFuncSeparate(0,769,0,1);break;case Go:c.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ii:c.blendFuncSeparate(770,771,1,771);break;case Uo:c.blendFunc(770,1);break;case ko:c.blendFuncSeparate(0,769,0,1);break;case Go:c.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}b=null,w=null,I=null,y=null,x=O,S=yt}return}de=de||X,qe=qe||Q,lt=lt||le,(X!==v||de!==E)&&(c.blendEquationSeparate(Re[X],Re[de]),v=X,E=de),(Q!==b||le!==w||qe!==I||lt!==y)&&(c.blendFuncSeparate(Oe[Q],Oe[le],Oe[qe],Oe[lt]),b=Q,w=le,I=qe,y=lt),x=O,S=!1}function Wt(O,X){O.side===un?fe(2884):ue(2884);let Q=O.side===Bt;X&&(Q=!Q),Lt(Q),O.blending===Ii&&O.transparent===!1?xt(Vn):xt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),o.setMask(O.colorWrite);const le=O.stencilWrite;l.setTest(le),le&&(l.setMask(O.stencilWriteMask),l.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),l.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ye(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ue(32926):fe(32926)}function Lt(O){P!==O&&(O?c.frontFace(2304):c.frontFace(2305),P=O)}function vt(O){O!==Wc?(ue(2884),O!==U&&(O===Oo?c.cullFace(1029):O===qc?c.cullFace(1028):c.cullFace(1032))):fe(2884),U=O}function Ze(O){O!==F&&(N&&c.lineWidth(O),F=O)}function Ye(O,X,Q){O?(ue(32823),(A!==X||L!==Q)&&(c.polygonOffset(X,Q),A=X,L=Q)):fe(32823)}function nn(O){O?ue(3089):fe(3089)}function qt(O){O===void 0&&(O=33984+D-1),j!==O&&(c.activeTexture(O),j=O)}function R(O,X,Q){Q===void 0&&(j===null?Q=33984+D-1:Q=j);let le=Z[Q];le===void 0&&(le={type:void 0,texture:void 0},Z[Q]=le),(le.type!==O||le.texture!==X)&&(j!==Q&&(c.activeTexture(Q),j=Q),c.bindTexture(O,X||he[O]),le.type=O,le.texture=X)}function T(){const O=Z[j];O!==void 0&&O.type!==void 0&&(c.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Y(){try{c.compressedTexImage2D.apply(c,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ee(){try{c.compressedTexImage3D.apply(c,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function te(){try{c.texSubImage2D.apply(c,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function oe(){try{c.texSubImage3D.apply(c,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{c.compressedTexSubImage2D.apply(c,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{c.compressedTexSubImage3D.apply(c,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $(){try{c.texStorage2D.apply(c,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function be(){try{c.texStorage3D.apply(c,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function me(){try{c.texImage2D.apply(c,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(){try{c.texImage3D.apply(c,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ve(O){J.equals(O)===!1&&(c.scissor(O.x,O.y,O.z,O.w),J.copy(O))}function ge(O){ne.equals(O)===!1&&(c.viewport(O.x,O.y,O.z,O.w),ne.copy(O))}function ze(O,X){let Q=d.get(X);Q===void 0&&(Q=new WeakMap,d.set(X,Q));let le=Q.get(O);le===void 0&&(le=c.getUniformBlockIndex(X,O.name),Q.set(O,le))}function Ke(O,X){const le=d.get(X).get(O);h.get(X)!==le&&(c.uniformBlockBinding(X,le,O.__bindingPointIndex),h.set(X,le))}function at(){c.disable(3042),c.disable(2884),c.disable(2929),c.disable(32823),c.disable(3089),c.disable(2960),c.disable(32926),c.blendEquation(32774),c.blendFunc(1,0),c.blendFuncSeparate(1,0,1,0),c.colorMask(!0,!0,!0,!0),c.clearColor(0,0,0,0),c.depthMask(!0),c.depthFunc(513),c.clearDepth(1),c.stencilMask(4294967295),c.stencilFunc(519,0,4294967295),c.stencilOp(7680,7680,7680),c.clearStencil(0),c.cullFace(1029),c.frontFace(2305),c.polygonOffset(0,0),c.activeTexture(33984),c.bindFramebuffer(36160,null),n===!0&&(c.bindFramebuffer(36009,null),c.bindFramebuffer(36008,null)),c.useProgram(null),c.lineWidth(1),c.scissor(0,0,c.canvas.width,c.canvas.height),c.viewport(0,0,c.canvas.width,c.canvas.height),u={},j=null,Z={},f={},g=new WeakMap,m=[],p=null,_=!1,x=null,v=null,b=null,w=null,E=null,I=null,y=null,S=!1,P=null,U=null,F=null,A=null,L=null,J.set(0,0,c.canvas.width,c.canvas.height),ne.set(0,0,c.canvas.width,c.canvas.height),o.reset(),a.reset(),l.reset()}return{buffers:{color:o,depth:a,stencil:l},enable:ue,disable:fe,bindFramebuffer:pe,drawBuffers:ye,useProgram:Ae,setBlending:xt,setMaterial:Wt,setFlipSided:Lt,setCullFace:vt,setLineWidth:Ze,setPolygonOffset:Ye,setScissorTest:nn,activeTexture:qt,bindTexture:R,unbindTexture:T,compressedTexImage2D:Y,compressedTexImage3D:ee,texImage2D:me,texImage3D:Me,updateUBOMapping:ze,uniformBlockBinding:Ke,texStorage2D:$,texStorage3D:be,texSubImage2D:te,texSubImage3D:oe,compressedTexSubImage2D:_e,compressedTexSubImage3D:ce,scissor:ve,viewport:ge,reset:at}}function Ym(c,e,t,n,i,s,r){const o=i.isWebGL2,a=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,T){return _?new OffscreenCanvas(R,T):ys("canvas")}function v(R,T,Y,ee){let te=1;if((R.width>ee||R.height>ee)&&(te=ee/Math.max(R.width,R.height)),te<1||T===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const oe=T?ic:Math.floor,_e=oe(te*R.width),ce=oe(te*R.height);m===void 0&&(m=x(_e,ce));const $=Y?x(_e,ce):m;return $.width=_e,$.height=ce,$.getContext("2d").drawImage(R,0,0,_e,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+_e+"x"+ce+")."),$}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function b(R){return co(R.width)&&co(R.height)}function w(R){return o?!1:R.wrapS!==Vt||R.wrapT!==Vt||R.minFilter!==ut&&R.minFilter!==It}function E(R,T){return R.generateMipmaps&&T&&R.minFilter!==ut&&R.minFilter!==It}function I(R){c.generateMipmap(R)}function y(R,T,Y,ee,te=!1){if(o===!1)return T;if(R!==null){if(c[R]!==void 0)return c[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let oe=T;return T===6403&&(Y===5126&&(oe=33326),Y===5131&&(oe=33325),Y===5121&&(oe=33321)),T===33319&&(Y===5126&&(oe=33328),Y===5131&&(oe=33327),Y===5121&&(oe=33323)),T===6408&&(Y===5126&&(oe=34836),Y===5131&&(oe=34842),Y===5121&&(oe=ee===ke&&te===!1?35907:32856),Y===32819&&(oe=32854),Y===32820&&(oe=32855)),(oe===33325||oe===33326||oe===33327||oe===33328||oe===34842||oe===34836)&&e.get("EXT_color_buffer_float"),oe}function S(R,T,Y){return E(R,Y)===!0||R.isFramebufferTexture&&R.minFilter!==ut&&R.minFilter!==It?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function P(R){return R===ut||R===ro||R===Qs?9728:9729}function U(R){const T=R.target;T.removeEventListener("dispose",U),A(T),T.isVideoTexture&&g.delete(T)}function F(R){const T=R.target;T.removeEventListener("dispose",F),D(T)}function A(R){const T=n.get(R);if(T.__webglInit===void 0)return;const Y=R.source,ee=p.get(Y);if(ee){const te=ee[T.__cacheKey];te.usedTimes--,te.usedTimes===0&&L(R),Object.keys(ee).length===0&&p.delete(Y)}n.remove(R)}function L(R){const T=n.get(R);c.deleteTexture(T.__webglTexture);const Y=R.source,ee=p.get(Y);delete ee[T.__cacheKey],r.memory.textures--}function D(R){const T=R.texture,Y=n.get(R),ee=n.get(T);if(ee.__webglTexture!==void 0&&(c.deleteTexture(ee.__webglTexture),r.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)c.deleteFramebuffer(Y.__webglFramebuffer[te]),Y.__webglDepthbuffer&&c.deleteRenderbuffer(Y.__webglDepthbuffer[te]);else{if(c.deleteFramebuffer(Y.__webglFramebuffer),Y.__webglDepthbuffer&&c.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&c.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let te=0;te<Y.__webglColorRenderbuffer.length;te++)Y.__webglColorRenderbuffer[te]&&c.deleteRenderbuffer(Y.__webglColorRenderbuffer[te]);Y.__webglDepthRenderbuffer&&c.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let te=0,oe=T.length;te<oe;te++){const _e=n.get(T[te]);_e.__webglTexture&&(c.deleteTexture(_e.__webglTexture),r.memory.textures--),n.remove(T[te])}n.remove(T),n.remove(R)}let N=0;function W(){N=0}function G(){const R=N;return R>=a&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+a),N+=1,R}function j(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.encoding),T.join()}function Z(R,T){const Y=n.get(R);if(R.isVideoTexture&&nn(R),R.isRenderTargetTexture===!1&&R.version>0&&Y.__version!==R.version){const ee=R.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(Y,R,T);return}}t.bindTexture(3553,Y.__webglTexture,33984+T)}function re(R,T){const Y=n.get(R);if(R.version>0&&Y.__version!==R.version){fe(Y,R,T);return}t.bindTexture(35866,Y.__webglTexture,33984+T)}function B(R,T){const Y=n.get(R);if(R.version>0&&Y.__version!==R.version){fe(Y,R,T);return}t.bindTexture(32879,Y.__webglTexture,33984+T)}function J(R,T){const Y=n.get(R);if(R.version>0&&Y.__version!==R.version){pe(Y,R,T);return}t.bindTexture(34067,Y.__webglTexture,33984+T)}const ne={[ri]:10497,[Vt]:33071,[tr]:33648},V={[ut]:9728,[ro]:9984,[Qs]:9986,[It]:9729,[Zl]:9985,[oi]:9987};function he(R,T,Y){if(Y?(c.texParameteri(R,10242,ne[T.wrapS]),c.texParameteri(R,10243,ne[T.wrapT]),(R===32879||R===35866)&&c.texParameteri(R,32882,ne[T.wrapR]),c.texParameteri(R,10240,V[T.magFilter]),c.texParameteri(R,10241,V[T.minFilter])):(c.texParameteri(R,10242,33071),c.texParameteri(R,10243,33071),(R===32879||R===35866)&&c.texParameteri(R,32882,33071),(T.wrapS!==Vt||T.wrapT!==Vt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),c.texParameteri(R,10240,P(T.magFilter)),c.texParameteri(R,10241,P(T.minFilter)),T.minFilter!==ut&&T.minFilter!==It&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===ut||T.minFilter!==Qs&&T.minFilter!==oi||T.type===kn&&e.has("OES_texture_float_linear")===!1||o===!1&&T.type===_s&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(c.texParameterf(R,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function ue(R,T){let Y=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",U));const ee=T.source;let te=p.get(ee);te===void 0&&(te={},p.set(ee,te));const oe=j(T);if(oe!==R.__cacheKey){te[oe]===void 0&&(te[oe]={texture:c.createTexture(),usedTimes:0},r.memory.textures++,Y=!0),te[oe].usedTimes++;const _e=te[R.__cacheKey];_e!==void 0&&(te[R.__cacheKey].usedTimes--,_e.usedTimes===0&&L(T)),R.__cacheKey=oe,R.__webglTexture=te[oe].texture}return Y}function fe(R,T,Y){let ee=3553;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ee=35866),T.isData3DTexture&&(ee=32879);const te=ue(R,T),oe=T.source;t.bindTexture(ee,R.__webglTexture,33984+Y);const _e=n.get(oe);if(oe.version!==_e.__version||te===!0){t.activeTexture(33984+Y),c.pixelStorei(37440,T.flipY),c.pixelStorei(37441,T.premultiplyAlpha),c.pixelStorei(3317,T.unpackAlignment),c.pixelStorei(37443,0);const ce=w(T)&&b(T.image)===!1;let $=v(T.image,ce,!1,h);$=qt(T,$);const be=b($)||o,me=s.convert(T.format,T.encoding);let Me=s.convert(T.type),ve=y(T.internalFormat,me,Me,T.encoding,T.isVideoTexture);he(ee,T,be);let ge;const ze=T.mipmaps,Ke=o&&T.isVideoTexture!==!0,at=_e.__version===void 0||te===!0,O=S(T,$,be);if(T.isDepthTexture)ve=6402,o?T.type===kn?ve=36012:T.type===ni?ve=33190:T.type===Di?ve=35056:ve=33189:T.type===kn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===si&&ve===6402&&T.type!==Jl&&T.type!==ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=ni,Me=s.convert(T.type)),T.format===Ui&&ve===6402&&(ve=34041,T.type!==Di&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Di,Me=s.convert(T.type))),at&&(Ke?t.texStorage2D(3553,1,ve,$.width,$.height):t.texImage2D(3553,0,ve,$.width,$.height,0,me,Me,null));else if(T.isDataTexture)if(ze.length>0&&be){Ke&&at&&t.texStorage2D(3553,O,ve,ze[0].width,ze[0].height);for(let X=0,Q=ze.length;X<Q;X++)ge=ze[X],Ke?t.texSubImage2D(3553,X,0,0,ge.width,ge.height,me,Me,ge.data):t.texImage2D(3553,X,ve,ge.width,ge.height,0,me,Me,ge.data);T.generateMipmaps=!1}else Ke?(at&&t.texStorage2D(3553,O,ve,$.width,$.height),t.texSubImage2D(3553,0,0,0,$.width,$.height,me,Me,$.data)):t.texImage2D(3553,0,ve,$.width,$.height,0,me,Me,$.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ke&&at&&t.texStorage3D(35866,O,ve,ze[0].width,ze[0].height,$.depth);for(let X=0,Q=ze.length;X<Q;X++)ge=ze[X],T.format!==Ht?me!==null?Ke?t.compressedTexSubImage3D(35866,X,0,0,0,ge.width,ge.height,$.depth,me,ge.data,0,0):t.compressedTexImage3D(35866,X,ve,ge.width,ge.height,$.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage3D(35866,X,0,0,0,ge.width,ge.height,$.depth,me,Me,ge.data):t.texImage3D(35866,X,ve,ge.width,ge.height,$.depth,0,me,Me,ge.data)}else{Ke&&at&&t.texStorage2D(3553,O,ve,ze[0].width,ze[0].height);for(let X=0,Q=ze.length;X<Q;X++)ge=ze[X],T.format!==Ht?me!==null?Ke?t.compressedTexSubImage2D(3553,X,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(3553,X,ve,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage2D(3553,X,0,0,ge.width,ge.height,me,Me,ge.data):t.texImage2D(3553,X,ve,ge.width,ge.height,0,me,Me,ge.data)}else if(T.isDataArrayTexture)Ke?(at&&t.texStorage3D(35866,O,ve,$.width,$.height,$.depth),t.texSubImage3D(35866,0,0,0,0,$.width,$.height,$.depth,me,Me,$.data)):t.texImage3D(35866,0,ve,$.width,$.height,$.depth,0,me,Me,$.data);else if(T.isData3DTexture)Ke?(at&&t.texStorage3D(32879,O,ve,$.width,$.height,$.depth),t.texSubImage3D(32879,0,0,0,0,$.width,$.height,$.depth,me,Me,$.data)):t.texImage3D(32879,0,ve,$.width,$.height,$.depth,0,me,Me,$.data);else if(T.isFramebufferTexture){if(at)if(Ke)t.texStorage2D(3553,O,ve,$.width,$.height);else{let X=$.width,Q=$.height;for(let le=0;le<O;le++)t.texImage2D(3553,le,ve,X,Q,0,me,Me,null),X>>=1,Q>>=1}}else if(ze.length>0&&be){Ke&&at&&t.texStorage2D(3553,O,ve,ze[0].width,ze[0].height);for(let X=0,Q=ze.length;X<Q;X++)ge=ze[X],Ke?t.texSubImage2D(3553,X,0,0,me,Me,ge):t.texImage2D(3553,X,ve,me,Me,ge);T.generateMipmaps=!1}else Ke?(at&&t.texStorage2D(3553,O,ve,$.width,$.height),t.texSubImage2D(3553,0,0,0,me,Me,$)):t.texImage2D(3553,0,ve,me,Me,$);E(T,be)&&I(ee),_e.__version=oe.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function pe(R,T,Y){if(T.image.length!==6)return;const ee=ue(R,T),te=T.source;t.bindTexture(34067,R.__webglTexture,33984+Y);const oe=n.get(te);if(te.version!==oe.__version||ee===!0){t.activeTexture(33984+Y),c.pixelStorei(37440,T.flipY),c.pixelStorei(37441,T.premultiplyAlpha),c.pixelStorei(3317,T.unpackAlignment),c.pixelStorei(37443,0);const _e=T.isCompressedTexture||T.image[0].isCompressedTexture,ce=T.image[0]&&T.image[0].isDataTexture,$=[];for(let X=0;X<6;X++)!_e&&!ce?$[X]=v(T.image[X],!1,!0,l):$[X]=ce?T.image[X].image:T.image[X],$[X]=qt(T,$[X]);const be=$[0],me=b(be)||o,Me=s.convert(T.format,T.encoding),ve=s.convert(T.type),ge=y(T.internalFormat,Me,ve,T.encoding),ze=o&&T.isVideoTexture!==!0,Ke=oe.__version===void 0||ee===!0;let at=S(T,be,me);he(34067,T,me);let O;if(_e){ze&&Ke&&t.texStorage2D(34067,at,ge,be.width,be.height);for(let X=0;X<6;X++){O=$[X].mipmaps;for(let Q=0;Q<O.length;Q++){const le=O[Q];T.format!==Ht?Me!==null?ze?t.compressedTexSubImage2D(34069+X,Q,0,0,le.width,le.height,Me,le.data):t.compressedTexImage2D(34069+X,Q,ge,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?t.texSubImage2D(34069+X,Q,0,0,le.width,le.height,Me,ve,le.data):t.texImage2D(34069+X,Q,ge,le.width,le.height,0,Me,ve,le.data)}}}else{O=T.mipmaps,ze&&Ke&&(O.length>0&&at++,t.texStorage2D(34067,at,ge,$[0].width,$[0].height));for(let X=0;X<6;X++)if(ce){ze?t.texSubImage2D(34069+X,0,0,0,$[X].width,$[X].height,Me,ve,$[X].data):t.texImage2D(34069+X,0,ge,$[X].width,$[X].height,0,Me,ve,$[X].data);for(let Q=0;Q<O.length;Q++){const de=O[Q].image[X].image;ze?t.texSubImage2D(34069+X,Q+1,0,0,de.width,de.height,Me,ve,de.data):t.texImage2D(34069+X,Q+1,ge,de.width,de.height,0,Me,ve,de.data)}}else{ze?t.texSubImage2D(34069+X,0,0,0,Me,ve,$[X]):t.texImage2D(34069+X,0,ge,Me,ve,$[X]);for(let Q=0;Q<O.length;Q++){const le=O[Q];ze?t.texSubImage2D(34069+X,Q+1,0,0,Me,ve,le.image[X]):t.texImage2D(34069+X,Q+1,ge,Me,ve,le.image[X])}}}E(T,me)&&I(34067),oe.__version=te.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function ye(R,T,Y,ee,te){const oe=s.convert(Y.format,Y.encoding),_e=s.convert(Y.type),ce=y(Y.internalFormat,oe,_e,Y.encoding);n.get(T).__hasExternalTextures||(te===32879||te===35866?t.texImage3D(te,0,ce,T.width,T.height,T.depth,0,oe,_e,null):t.texImage2D(te,0,ce,T.width,T.height,0,oe,_e,null)),t.bindFramebuffer(36160,R),Ye(T)?u.framebufferTexture2DMultisampleEXT(36160,ee,te,n.get(Y).__webglTexture,0,Ze(T)):(te===3553||te>=34069&&te<=34074)&&c.framebufferTexture2D(36160,ee,te,n.get(Y).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ae(R,T,Y){if(c.bindRenderbuffer(36161,R),T.depthBuffer&&!T.stencilBuffer){let ee=33189;if(Y||Ye(T)){const te=T.depthTexture;te&&te.isDepthTexture&&(te.type===kn?ee=36012:te.type===ni&&(ee=33190));const oe=Ze(T);Ye(T)?u.renderbufferStorageMultisampleEXT(36161,oe,ee,T.width,T.height):c.renderbufferStorageMultisample(36161,oe,ee,T.width,T.height)}else c.renderbufferStorage(36161,ee,T.width,T.height);c.framebufferRenderbuffer(36160,36096,36161,R)}else if(T.depthBuffer&&T.stencilBuffer){const ee=Ze(T);Y&&Ye(T)===!1?c.renderbufferStorageMultisample(36161,ee,35056,T.width,T.height):Ye(T)?u.renderbufferStorageMultisampleEXT(36161,ee,35056,T.width,T.height):c.renderbufferStorage(36161,34041,T.width,T.height),c.framebufferRenderbuffer(36160,33306,36161,R)}else{const ee=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let te=0;te<ee.length;te++){const oe=ee[te],_e=s.convert(oe.format,oe.encoding),ce=s.convert(oe.type),$=y(oe.internalFormat,_e,ce,oe.encoding),be=Ze(T);Y&&Ye(T)===!1?c.renderbufferStorageMultisample(36161,be,$,T.width,T.height):Ye(T)?u.renderbufferStorageMultisampleEXT(36161,be,$,T.width,T.height):c.renderbufferStorage(36161,$,T.width,T.height)}}c.bindRenderbuffer(36161,null)}function Re(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Z(T.depthTexture,0);const ee=n.get(T.depthTexture).__webglTexture,te=Ze(T);if(T.depthTexture.format===si)Ye(T)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,te):c.framebufferTexture2D(36160,36096,3553,ee,0);else if(T.depthTexture.format===Ui)Ye(T)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,te):c.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function Oe(R){const T=n.get(R),Y=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Re(T.__webglFramebuffer,R)}else if(Y){T.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,T.__webglFramebuffer[ee]),T.__webglDepthbuffer[ee]=c.createRenderbuffer(),Ae(T.__webglDepthbuffer[ee],R,!1)}else t.bindFramebuffer(36160,T.__webglFramebuffer),T.__webglDepthbuffer=c.createRenderbuffer(),Ae(T.__webglDepthbuffer,R,!1);t.bindFramebuffer(36160,null)}function xt(R,T,Y){const ee=n.get(R);T!==void 0&&ye(ee.__webglFramebuffer,R,R.texture,36064,3553),Y!==void 0&&Oe(R)}function Wt(R){const T=R.texture,Y=n.get(R),ee=n.get(T);R.addEventListener("dispose",F),R.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=c.createTexture()),ee.__version=T.version,r.memory.textures++);const te=R.isWebGLCubeRenderTarget===!0,oe=R.isWebGLMultipleRenderTargets===!0,_e=b(R)||o;if(te){Y.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)Y.__webglFramebuffer[ce]=c.createFramebuffer()}else{if(Y.__webglFramebuffer=c.createFramebuffer(),oe)if(i.drawBuffers){const ce=R.texture;for(let $=0,be=ce.length;$<be;$++){const me=n.get(ce[$]);me.__webglTexture===void 0&&(me.__webglTexture=c.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&Ye(R)===!1){const ce=oe?T:[T];Y.__webglMultisampledFramebuffer=c.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,Y.__webglMultisampledFramebuffer);for(let $=0;$<ce.length;$++){const be=ce[$];Y.__webglColorRenderbuffer[$]=c.createRenderbuffer(),c.bindRenderbuffer(36161,Y.__webglColorRenderbuffer[$]);const me=s.convert(be.format,be.encoding),Me=s.convert(be.type),ve=y(be.internalFormat,me,Me,be.encoding,R.isXRRenderTarget===!0),ge=Ze(R);c.renderbufferStorageMultisample(36161,ge,ve,R.width,R.height),c.framebufferRenderbuffer(36160,36064+$,36161,Y.__webglColorRenderbuffer[$])}c.bindRenderbuffer(36161,null),R.depthBuffer&&(Y.__webglDepthRenderbuffer=c.createRenderbuffer(),Ae(Y.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(36160,null)}}if(te){t.bindTexture(34067,ee.__webglTexture),he(34067,T,_e);for(let ce=0;ce<6;ce++)ye(Y.__webglFramebuffer[ce],R,T,36064,34069+ce);E(T,_e)&&I(34067),t.unbindTexture()}else if(oe){const ce=R.texture;for(let $=0,be=ce.length;$<be;$++){const me=ce[$],Me=n.get(me);t.bindTexture(3553,Me.__webglTexture),he(3553,me,_e),ye(Y.__webglFramebuffer,R,me,36064+$,3553),E(me,_e)&&I(3553)}t.unbindTexture()}else{let ce=3553;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?ce=R.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,ee.__webglTexture),he(ce,T,_e),ye(Y.__webglFramebuffer,R,T,36064,ce),E(T,_e)&&I(ce),t.unbindTexture()}R.depthBuffer&&Oe(R)}function Lt(R){const T=b(R)||o,Y=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ee=0,te=Y.length;ee<te;ee++){const oe=Y[ee];if(E(oe,T)){const _e=R.isWebGLCubeRenderTarget?34067:3553,ce=n.get(oe).__webglTexture;t.bindTexture(_e,ce),I(_e),t.unbindTexture()}}}function vt(R){if(o&&R.samples>0&&Ye(R)===!1){const T=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],Y=R.width,ee=R.height;let te=16384;const oe=[],_e=R.stencilBuffer?33306:36096,ce=n.get(R),$=R.isWebGLMultipleRenderTargets===!0;if($)for(let be=0;be<T.length;be++)t.bindFramebuffer(36160,ce.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(36160,36064+be,36161,null),t.bindFramebuffer(36160,ce.__webglFramebuffer),c.framebufferTexture2D(36009,36064+be,3553,null,0);t.bindFramebuffer(36008,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ce.__webglFramebuffer);for(let be=0;be<T.length;be++){oe.push(36064+be),R.depthBuffer&&oe.push(_e);const me=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(me===!1&&(R.depthBuffer&&(te|=256),R.stencilBuffer&&(te|=1024)),$&&c.framebufferRenderbuffer(36008,36064,36161,ce.__webglColorRenderbuffer[be]),me===!0&&(c.invalidateFramebuffer(36008,[_e]),c.invalidateFramebuffer(36009,[_e])),$){const Me=n.get(T[be]).__webglTexture;c.framebufferTexture2D(36009,36064,3553,Me,0)}c.blitFramebuffer(0,0,Y,ee,0,0,Y,ee,te,9728),f&&c.invalidateFramebuffer(36008,oe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),$)for(let be=0;be<T.length;be++){t.bindFramebuffer(36160,ce.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(36160,36064+be,36161,ce.__webglColorRenderbuffer[be]);const me=n.get(T[be]).__webglTexture;t.bindFramebuffer(36160,ce.__webglFramebuffer),c.framebufferTexture2D(36009,36064+be,3553,me,0)}t.bindFramebuffer(36009,ce.__webglMultisampledFramebuffer)}}function Ze(R){return Math.min(d,R.samples)}function Ye(R){const T=n.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function nn(R){const T=r.render.frame;g.get(R)!==T&&(g.set(R,T),R.update())}function qt(R,T){const Y=R.encoding,ee=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===lo||Y!==li&&(Y===ke?o===!1?e.has("EXT_sRGB")===!0&&ee===Ht?(R.format=lo,R.minFilter=It,R.generateMipmaps=!1):T=rc.sRGBToLinear(T):(ee!==Ht||te!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",Y)),T}this.allocateTextureUnit=G,this.resetTextureUnits=W,this.setTexture2D=Z,this.setTexture2DArray=re,this.setTexture3D=B,this.setTextureCube=J,this.rebindTextures=xt,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Ye}function Km(c,e,t){const n=t.isWebGL2;function i(s,r=null){let o;if(s===ai)return 5121;if(s===bh)return 32819;if(s===Mh)return 32820;if(s===xh)return 5120;if(s===vh)return 5122;if(s===Jl)return 5123;if(s===yh)return 5124;if(s===ni)return 5125;if(s===kn)return 5126;if(s===_s)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===wh)return 6406;if(s===Ht)return 6408;if(s===Sh)return 6409;if(s===Th)return 6410;if(s===si)return 6402;if(s===Ui)return 34041;if(s===lo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Eh)return 6403;if(s===Ah)return 36244;if(s===Ch)return 33319;if(s===Lh)return 33320;if(s===Rh)return 36249;if(s===pr||s===mr||s===gr||s===_r)if(r===ke)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===pr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===mr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===gr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===_r)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===pr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===mr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===gr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===_r)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Wo||s===qo||s===jo||s===Xo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Wo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===qo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===jo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Xo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ph)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Yo||s===Ko)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Yo)return r===ke?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Ko)return r===ke?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===$o||s===Zo||s===Jo||s===Qo||s===ea||s===ta||s===na||s===ia||s===sa||s===ra||s===oa||s===aa||s===la||s===ca)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===$o)return r===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Zo)return r===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Jo)return r===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Qo)return r===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ea)return r===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ta)return r===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===na)return r===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ia)return r===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===sa)return r===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ra)return r===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===oa)return r===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===aa)return r===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===la)return r===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ca)return r===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===xr)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===xr)return r===ke?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Ih||s===ha||s===ua||s===da)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===xr)return o.COMPRESSED_RED_RGTC1_EXT;if(s===ha)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ua)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===da)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Di?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):c[s]!==void 0?c[s]:null}return{convert:i}}class $m extends At{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ii extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zm={type:"move"};class Hr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null;const o=this._targetRay,a=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const m of e.hand.values()){const p=t.getJointPose(m,n),_=this._getHandJoint(l,m);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else a!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zm)))}return o!==null&&(o.visible=i!==null),a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ii;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Jm extends pt{constructor(e,t,n,i,s,r,o,a,l,h){if(h=h!==void 0?h:si,h!==si&&h!==Ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===si&&(n=ni),n===void 0&&h===Ui&&(n=Di),super(null,i,s,r,o,a,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ut,this.minFilter=a!==void 0?a:ut,this.flipY=!1,this.generateMipmaps=!1}}class Qm extends Wi{constructor(e,t){super();const n=this;let i=null,s=1,r=null,o="local-floor",a=1,l=null,h=null,d=null,u=null,f=null,g=null;const m=t.getContextAttributes();let p=null,_=null;const x=[],v=[],b=new Set,w=new Map,E=new At;E.layers.enable(1),E.viewport=new We;const I=new At;I.layers.enable(2),I.viewport=new We;const y=[E,I],S=new $m;S.layers.enable(1),S.layers.enable(2);let P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let J=x[B];return J===void 0&&(J=new Hr,x[B]=J),J.getTargetRaySpace()},this.getControllerGrip=function(B){let J=x[B];return J===void 0&&(J=new Hr,x[B]=J),J.getGripSpace()},this.getHand=function(B){let J=x[B];return J===void 0&&(J=new Hr,x[B]=J),J.getHandSpace()};function F(B){const J=v.indexOf(B.inputSource);if(J===-1)return;const ne=x[J];ne!==void 0&&ne.dispatchEvent({type:B.type,data:B.inputSource})}function A(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",A),i.removeEventListener("inputsourceschange",L);for(let B=0;B<x.length;B++){const J=v[B];J!==null&&(v[B]=null,x[B].disconnect(J))}P=null,U=null,e.setRenderTarget(p),f=null,u=null,d=null,i=null,_=null,re.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",A),i.addEventListener("inputsourceschange",L),m.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:i.renderState.layers===void 0?m.antialias:!0,alpha:m.alpha,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,J),i.updateRenderState({baseLayer:f}),_=new ci(f.framebufferWidth,f.framebufferHeight,{format:Ht,type:ai,encoding:e.outputEncoding,stencilBuffer:m.stencil})}else{let J=null,ne=null,V=null;m.depth&&(V=m.stencil?35056:33190,J=m.stencil?Ui:si,ne=m.stencil?Di:ni);const he={colorFormat:32856,depthFormat:V,scaleFactor:s};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(he),i.updateRenderState({layers:[u]}),_=new ci(u.textureWidth,u.textureHeight,{format:Ht,type:ai,depthTexture:new Jm(u.textureWidth,u.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,encoding:e.outputEncoding,samples:m.antialias?4:0});const ue=e.properties.get(_);ue.__ignoreDepthValues=u.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(a),l=null,r=await i.requestReferenceSpace(o),re.setContext(i),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function L(B){for(let J=0;J<B.removed.length;J++){const ne=B.removed[J],V=v.indexOf(ne);V>=0&&(v[V]=null,x[V].disconnect(ne))}for(let J=0;J<B.added.length;J++){const ne=B.added[J];let V=v.indexOf(ne);if(V===-1){for(let ue=0;ue<x.length;ue++)if(ue>=v.length){v.push(ne),V=ue;break}else if(v[ue]===null){v[ue]=ne,V=ue;break}if(V===-1)break}const he=x[V];he&&he.connect(ne)}}const D=new z,N=new z;function W(B,J,ne){D.setFromMatrixPosition(J.matrixWorld),N.setFromMatrixPosition(ne.matrixWorld);const V=D.distanceTo(N),he=J.projectionMatrix.elements,ue=ne.projectionMatrix.elements,fe=he[14]/(he[10]-1),pe=he[14]/(he[10]+1),ye=(he[9]+1)/he[5],Ae=(he[9]-1)/he[5],Re=(he[8]-1)/he[0],Oe=(ue[8]+1)/ue[0],xt=fe*Re,Wt=fe*Oe,Lt=V/(-Re+Oe),vt=Lt*-Re;J.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(vt),B.translateZ(Lt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const Ze=fe+Lt,Ye=pe+Lt,nn=xt-vt,qt=Wt+(V-vt),R=ye*pe/Ye*Ze,T=Ae*pe/Ye*Ze;B.projectionMatrix.makePerspective(nn,qt,R,T,Ze,Ye)}function G(B,J){J===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(J.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;S.near=I.near=E.near=B.near,S.far=I.far=E.far=B.far,(P!==S.near||U!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,U=S.far);const J=B.parent,ne=S.cameras;G(S,J);for(let he=0;he<ne.length;he++)G(ne[he],J);S.matrixWorld.decompose(S.position,S.quaternion,S.scale),B.matrix.copy(S.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale);const V=B.children;for(let he=0,ue=V.length;he<ue;he++)V[he].updateMatrixWorld(!0);ne.length===2?W(S,E,I):S.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&f===null))return a},this.setFoveation=function(B){a=B,u!==null&&(u.fixedFoveation=B),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=B)},this.getPlanes=function(){return b};let j=null;function Z(B,J){if(h=J.getViewerPose(l||r),g=J,h!==null){const ne=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let V=!1;ne.length!==S.cameras.length&&(S.cameras.length=0,V=!0);for(let he=0;he<ne.length;he++){const ue=ne[he];let fe=null;if(f!==null)fe=f.getViewport(ue);else{const ye=d.getViewSubImage(u,ue);fe=ye.viewport,he===0&&(e.setRenderTargetTextures(_,ye.colorTexture,u.ignoreDepthValues?void 0:ye.depthStencilTexture),e.setRenderTarget(_))}let pe=y[he];pe===void 0&&(pe=new At,pe.layers.enable(he),pe.viewport=new We,y[he]=pe),pe.matrix.fromArray(ue.transform.matrix),pe.projectionMatrix.fromArray(ue.projectionMatrix),pe.viewport.set(fe.x,fe.y,fe.width,fe.height),he===0&&S.matrix.copy(pe.matrix),V===!0&&S.cameras.push(pe)}}for(let ne=0;ne<x.length;ne++){const V=v[ne],he=x[ne];V!==null&&he!==void 0&&he.update(V,J,l||r)}if(j&&j(B,J),J.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:J.detectedPlanes});let ne=null;for(const V of b)J.detectedPlanes.has(V)||(ne===null&&(ne=[]),ne.push(V));if(ne!==null)for(const V of ne)b.delete(V),w.delete(V),n.dispatchEvent({type:"planeremoved",data:V});for(const V of J.detectedPlanes)if(!b.has(V))b.add(V),w.set(V,J.lastChangedTime),n.dispatchEvent({type:"planeadded",data:V});else{const he=w.get(V);V.lastChangedTime>he&&(w.set(V,V.lastChangedTime),n.dispatchEvent({type:"planechanged",data:V}))}}g=null}const re=new mc;re.setAnimationLoop(Z),this.setAnimationLoop=function(B){j=B},this.dispose=function(){}}}function eg(c,e){function t(m,p){p.color.getRGB(m.fogColor.value,dc(c)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,_,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(m,p):p.isMeshToonMaterial?(i(m,p),h(m,p)):p.isMeshPhongMaterial?(i(m,p),l(m,p)):p.isMeshStandardMaterial?(i(m,p),d(m,p),p.isMeshPhysicalMaterial&&u(m,p,v)):p.isMeshMatcapMaterial?(i(m,p),f(m,p)):p.isMeshDepthMaterial?i(m,p):p.isMeshDistanceMaterial?(i(m,p),g(m,p)):p.isMeshNormalMaterial?i(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&r(m,p)):p.isPointsMaterial?o(m,p,_,x):p.isSpriteMaterial?a(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===Bt&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===Bt&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const b=c.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*b}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let x;p.map?x=p.map:p.specularMap?x=p.specularMap:p.displacementMap?x=p.displacementMap:p.normalMap?x=p.normalMap:p.bumpMap?x=p.bumpMap:p.roughnessMap?x=p.roughnessMap:p.metalnessMap?x=p.metalnessMap:p.alphaMap?x=p.alphaMap:p.emissiveMap?x=p.emissiveMap:p.clearcoatMap?x=p.clearcoatMap:p.clearcoatNormalMap?x=p.clearcoatNormalMap:p.clearcoatRoughnessMap?x=p.clearcoatRoughnessMap:p.iridescenceMap?x=p.iridescenceMap:p.iridescenceThicknessMap?x=p.iridescenceThicknessMap:p.specularIntensityMap?x=p.specularIntensityMap:p.specularColorMap?x=p.specularColorMap:p.transmissionMap?x=p.transmissionMap:p.thicknessMap?x=p.thicknessMap:p.sheenColorMap?x=p.sheenColorMap:p.sheenRoughnessMap&&(x=p.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix));let v;p.aoMap?v=p.aoMap:p.lightMap&&(v=p.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uv2Transform.value.copy(v.matrix))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function r(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function o(m,p,_,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=x*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function l(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Bt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function f(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function tg(c,e,t,n){let i={},s={},r=[];const o=t.isWebGL2?c.getParameter(35375):0;function a(x,v){const b=v.program;n.uniformBlockBinding(x,b)}function l(x,v){let b=i[x.id];b===void 0&&(g(x),b=h(x),i[x.id]=b,x.addEventListener("dispose",p));const w=v.program;n.updateUBOMapping(x,w);const E=e.render.frame;s[x.id]!==E&&(u(x),s[x.id]=E)}function h(x){const v=d();x.__bindingPointIndex=v;const b=c.createBuffer(),w=x.__size,E=x.usage;return c.bindBuffer(35345,b),c.bufferData(35345,w,E),c.bindBuffer(35345,null),c.bindBufferBase(35345,v,b),b}function d(){for(let x=0;x<o;x++)if(r.indexOf(x)===-1)return r.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const v=i[x.id],b=x.uniforms,w=x.__cache;c.bindBuffer(35345,v);for(let E=0,I=b.length;E<I;E++){const y=b[E];if(f(y,E,w)===!0){const S=y.__offset,P=Array.isArray(y.value)?y.value:[y.value];let U=0;for(let F=0;F<P.length;F++){const A=P[F],L=m(A);typeof A=="number"?(y.__data[0]=A,c.bufferSubData(35345,S+U,y.__data)):A.isMatrix3?(y.__data[0]=A.elements[0],y.__data[1]=A.elements[1],y.__data[2]=A.elements[2],y.__data[3]=A.elements[0],y.__data[4]=A.elements[3],y.__data[5]=A.elements[4],y.__data[6]=A.elements[5],y.__data[7]=A.elements[0],y.__data[8]=A.elements[6],y.__data[9]=A.elements[7],y.__data[10]=A.elements[8],y.__data[11]=A.elements[0]):(A.toArray(y.__data,U),U+=L.storage/Float32Array.BYTES_PER_ELEMENT)}c.bufferSubData(35345,S,y.__data)}}c.bindBuffer(35345,null)}function f(x,v,b){const w=x.value;if(b[v]===void 0){if(typeof w=="number")b[v]=w;else{const E=Array.isArray(w)?w:[w],I=[];for(let y=0;y<E.length;y++)I.push(E[y].clone());b[v]=I}return!0}else if(typeof w=="number"){if(b[v]!==w)return b[v]=w,!0}else{const E=Array.isArray(b[v])?b[v]:[b[v]],I=Array.isArray(w)?w:[w];for(let y=0;y<E.length;y++){const S=E[y];if(S.equals(I[y])===!1)return S.copy(I[y]),!0}}return!1}function g(x){const v=x.uniforms;let b=0;const w=16;let E=0;for(let I=0,y=v.length;I<y;I++){const S=v[I],P={boundary:0,storage:0},U=Array.isArray(S.value)?S.value:[S.value];for(let F=0,A=U.length;F<A;F++){const L=U[F],D=m(L);P.boundary+=D.boundary,P.storage+=D.storage}if(S.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=b,I>0){E=b%w;const F=w-E;E!==0&&F-P.boundary<0&&(b+=w-E,S.__offset=b)}b+=P.storage}return E=b%w,E>0&&(b+=w-E),x.__size=b,x.__cache={},this}function m(x){const v={boundary:0,storage:0};return typeof x=="number"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function p(x){const v=x.target;v.removeEventListener("dispose",p);const b=r.indexOf(v.__bindingPointIndex);r.splice(b,1),c.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function _(){for(const x in i)c.deleteBuffer(i[x]);r=[],i={},s={}}return{bind:a,update:l,dispose:_}}function ng(){const c=ys("canvas");return c.style.display="block",c}function Mo(c={}){this.isWebGLRenderer=!0;const e=c.canvas!==void 0?c.canvas:ng(),t=c.context!==void 0?c.context:null,n=c.depth!==void 0?c.depth:!0,i=c.stencil!==void 0?c.stencil:!0,s=c.antialias!==void 0?c.antialias:!1,r=c.premultipliedAlpha!==void 0?c.premultipliedAlpha:!0,o=c.preserveDrawingBuffer!==void 0?c.preserveDrawingBuffer:!1,a=c.powerPreference!==void 0?c.powerPreference:"default",l=c.failIfMajorPerformanceCaveat!==void 0?c.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=c.alpha!==void 0?c.alpha:!1;let d=null,u=null;const f=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=li,this.useLegacyLights=!0,this.toneMapping=Cn,this.toneMappingExposure=1;const m=this;let p=!1,_=0,x=0,v=null,b=-1,w=null;const E=new We,I=new We;let y=null,S=e.width,P=e.height,U=1,F=null,A=null;const L=new We(0,0,S,P),D=new We(0,0,S,P);let N=!1;const W=new vo;let G=!1,j=!1,Z=null;const re=new Le,B=new z,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ne(){return v===null?U:1}let V=t;function he(C,H){for(let q=0;q<C.length;q++){const k=C[q],K=e.getContext(k,H);if(K!==null)return K}return null}try{const C={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:r,preserveDrawingBuffer:o,powerPreference:a,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${go}`),e.addEventListener("webglcontextlost",Me,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",ge,!1),V===null){const H=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&H.shift(),V=he(H,C),V===null)throw he(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ue,fe,pe,ye,Ae,Re,Oe,xt,Wt,Lt,vt,Ze,Ye,nn,qt,R,T,Y,ee,te,oe,_e,ce,$;function be(){ue=new fp(V),fe=new ap(V,ue,c),ue.init(fe),_e=new Km(V,ue,fe),pe=new Xm(V,ue,fe),ye=new gp,Ae=new Dm,Re=new Ym(V,ue,pe,Ae,fe,_e,ye),Oe=new cp(m),xt=new dp(m),Wt=new Su(V,fe),ce=new rp(V,ue,Wt,fe),Lt=new pp(V,Wt,ye,ce),vt=new yp(V,Lt,Wt,ye),ee=new vp(V,fe,Re),R=new lp(Ae),Ze=new Im(m,Oe,xt,ue,fe,ce,R),Ye=new eg(m,Ae),nn=new Fm,qt=new Gm(ue,fe),Y=new sp(m,Oe,xt,pe,vt,h,r),T=new jm(m,vt,fe),$=new tg(V,ye,fe,pe),te=new op(V,ue,ye,fe),oe=new mp(V,ue,ye,fe),ye.programs=Ze.programs,m.capabilities=fe,m.extensions=ue,m.properties=Ae,m.renderLists=nn,m.shadowMap=T,m.state=pe,m.info=ye}be();const me=new Qm(m,V);this.xr=me,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const C=ue.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ue.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(C){C!==void 0&&(U=C,this.setSize(S,P,!1))},this.getSize=function(C){return C.set(S,P)},this.setSize=function(C,H,q=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}S=C,P=H,e.width=Math.floor(C*U),e.height=Math.floor(H*U),q===!0&&(e.style.width=C+"px",e.style.height=H+"px"),this.setViewport(0,0,C,H)},this.getDrawingBufferSize=function(C){return C.set(S*U,P*U).floor()},this.setDrawingBufferSize=function(C,H,q){S=C,P=H,U=q,e.width=Math.floor(C*q),e.height=Math.floor(H*q),this.setViewport(0,0,C,H)},this.getCurrentViewport=function(C){return C.copy(E)},this.getViewport=function(C){return C.copy(L)},this.setViewport=function(C,H,q,k){C.isVector4?L.set(C.x,C.y,C.z,C.w):L.set(C,H,q,k),pe.viewport(E.copy(L).multiplyScalar(U).floor())},this.getScissor=function(C){return C.copy(D)},this.setScissor=function(C,H,q,k){C.isVector4?D.set(C.x,C.y,C.z,C.w):D.set(C,H,q,k),pe.scissor(I.copy(D).multiplyScalar(U).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(C){pe.setScissorTest(N=C)},this.setOpaqueSort=function(C){F=C},this.setTransparentSort=function(C){A=C},this.getClearColor=function(C){return C.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor.apply(Y,arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha.apply(Y,arguments)},this.clear=function(C=!0,H=!0,q=!0){let k=0;C&&(k|=16384),H&&(k|=256),q&&(k|=1024),V.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Me,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",ge,!1),nn.dispose(),qt.dispose(),Ae.dispose(),Oe.dispose(),xt.dispose(),vt.dispose(),ce.dispose(),$.dispose(),Ze.dispose(),me.dispose(),me.removeEventListener("sessionstart",Q),me.removeEventListener("sessionend",le),Z&&(Z.dispose(),Z=null),de.stop()};function Me(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const C=ye.autoReset,H=T.enabled,q=T.autoUpdate,k=T.needsUpdate,K=T.type;be(),ye.autoReset=C,T.enabled=H,T.autoUpdate=q,T.needsUpdate=k,T.type=K}function ge(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ze(C){const H=C.target;H.removeEventListener("dispose",ze),Ke(H)}function Ke(C){at(C),Ae.remove(C)}function at(C){const H=Ae.get(C).programs;H!==void 0&&(H.forEach(function(q){Ze.releaseProgram(q)}),C.isShaderMaterial&&Ze.releaseShaderCache(C))}this.renderBufferDirect=function(C,H,q,k,K,xe){H===null&&(H=J);const we=K.isMesh&&K.matrixWorld.determinant()<0,Ee=kc(C,H,q,k,K);pe.setMaterial(k,we);let Ce=q.index,Be=1;k.wireframe===!0&&(Ce=Lt.getWireframeAttribute(q),Be=2);const Pe=q.drawRange,Ie=q.attributes.position;let et=Pe.start*Be,Dt=(Pe.start+Pe.count)*Be;xe!==null&&(et=Math.max(et,xe.start*Be),Dt=Math.min(Dt,(xe.start+xe.count)*Be)),Ce!==null?(et=Math.max(et,0),Dt=Math.min(Dt,Ce.count)):Ie!=null&&(et=Math.max(et,0),Dt=Math.min(Dt,Ie.count));const pn=Dt-et;if(pn<0||pn===1/0)return;ce.setup(K,k,Ee,q,Ce);let qn,tt=te;if(Ce!==null&&(qn=Wt.get(Ce),tt=oe,tt.setIndex(qn)),K.isMesh)k.wireframe===!0?(pe.setLineWidth(k.wireframeLinewidth*ne()),tt.setMode(1)):tt.setMode(4);else if(K.isLine){let De=k.linewidth;De===void 0&&(De=1),pe.setLineWidth(De*ne()),K.isLineSegments?tt.setMode(1):K.isLineLoop?tt.setMode(2):tt.setMode(3)}else K.isPoints?tt.setMode(0):K.isSprite&&tt.setMode(4);if(K.isInstancedMesh)tt.renderInstances(et,pn,K.count);else if(q.isInstancedBufferGeometry){const De=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,hr=Math.min(q.instanceCount,De);tt.renderInstances(et,pn,hr)}else tt.render(et,pn)},this.compile=function(C,H){function q(k,K,xe){k.transparent===!0&&k.side===un&&k.forceSinglePass===!1?(k.side=Bt,k.needsUpdate=!0,Ut(k,K,xe),k.side=Ln,k.needsUpdate=!0,Ut(k,K,xe),k.side=un):Ut(k,K,xe)}u=qt.get(C),u.init(),g.push(u),C.traverseVisible(function(k){k.isLight&&k.layers.test(H.layers)&&(u.pushLight(k),k.castShadow&&u.pushShadow(k))}),u.setupLights(m.useLegacyLights),C.traverse(function(k){const K=k.material;if(K)if(Array.isArray(K))for(let xe=0;xe<K.length;xe++){const we=K[xe];q(we,C,k)}else q(K,C,k)}),g.pop(),u=null};let O=null;function X(C){O&&O(C)}function Q(){de.stop()}function le(){de.start()}const de=new mc;de.setAnimationLoop(X),typeof self<"u"&&de.setContext(self),this.setAnimationLoop=function(C){O=C,me.setAnimationLoop(C),C===null?de.stop():de.start()},me.addEventListener("sessionstart",Q),me.addEventListener("sessionend",le),this.render=function(C,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(H),H=me.getCamera()),C.isScene===!0&&C.onBeforeRender(m,C,H,v),u=qt.get(C,g.length),u.init(),g.push(u),re.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),W.setFromProjectionMatrix(re),j=this.localClippingEnabled,G=R.init(this.clippingPlanes,j),d=nn.get(C,f.length),d.init(),f.push(d),qe(C,H,0,m.sortObjects),d.finish(),m.sortObjects===!0&&d.sort(F,A),G===!0&&R.beginShadows();const q=u.state.shadowsArray;if(T.render(q,C,H),G===!0&&R.endShadows(),this.info.autoReset===!0&&this.info.reset(),Y.render(d,C),u.setupLights(m.useLegacyLights),H.isArrayCamera){const k=H.cameras;for(let K=0,xe=k.length;K<xe;K++){const we=k[K];lt(d,C,we,we.viewport)}}else lt(d,C,H);v!==null&&(Re.updateMultisampleRenderTarget(v),Re.updateRenderTargetMipmap(v)),C.isScene===!0&&C.onAfterRender(m,C,H),ce.resetDefaultState(),b=-1,w=null,g.pop(),g.length>0?u=g[g.length-1]:u=null,f.pop(),f.length>0?d=f[f.length-1]:d=null};function qe(C,H,q,k){if(C.visible===!1)return;if(C.layers.test(H.layers)){if(C.isGroup)q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(H);else if(C.isLight)u.pushLight(C),C.castShadow&&u.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||W.intersectsSprite(C)){k&&B.setFromMatrixPosition(C.matrixWorld).applyMatrix4(re);const we=vt.update(C),Ee=C.material;Ee.visible&&d.push(C,we,Ee,q,B.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==ye.render.frame&&(C.skeleton.update(),C.skeleton.frame=ye.render.frame),!C.frustumCulled||W.intersectsObject(C))){k&&B.setFromMatrixPosition(C.matrixWorld).applyMatrix4(re);const we=vt.update(C),Ee=C.material;if(Array.isArray(Ee)){const Ce=we.groups;for(let Be=0,Pe=Ce.length;Be<Pe;Be++){const Ie=Ce[Be],et=Ee[Ie.materialIndex];et&&et.visible&&d.push(C,we,et,q,B.z,Ie)}}else Ee.visible&&d.push(C,we,Ee,q,B.z,null)}}const xe=C.children;for(let we=0,Ee=xe.length;we<Ee;we++)qe(xe[we],H,q,k)}function lt(C,H,q,k){const K=C.opaque,xe=C.transmissive,we=C.transparent;u.setupLightsView(q),G===!0&&R.setGlobalState(m.clippingPlanes,q),xe.length>0&&yt(K,H,q),k&&pe.viewport(E.copy(k)),K.length>0&&sn(K,H,q),xe.length>0&&sn(xe,H,q),we.length>0&&sn(we,H,q),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function yt(C,H,q){const k=fe.isWebGL2;Z===null&&(Z=new ci(1024,1024,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")?_s:ai,minFilter:oi,samples:k&&s===!0?4:0}));const K=m.getRenderTarget();m.setRenderTarget(Z),m.clear();const xe=m.toneMapping;m.toneMapping=Cn,sn(C,H,q),m.toneMapping=xe,Re.updateMultisampleRenderTarget(Z),Re.updateRenderTargetMipmap(Z),m.setRenderTarget(K)}function sn(C,H,q){const k=H.isScene===!0?H.overrideMaterial:null;for(let K=0,xe=C.length;K<xe;K++){const we=C[K],Ee=we.object,Ce=we.geometry,Be=k===null?we.material:k,Pe=we.group;Ee.layers.test(q.layers)&&Je(Ee,H,q,Ce,Be,Pe)}}function Je(C,H,q,k,K,xe){C.onBeforeRender(m,H,q,k,K,xe),C.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),K.onBeforeRender(m,H,q,k,C,xe),K.transparent===!0&&K.side===un&&K.forceSinglePass===!1?(K.side=Bt,K.needsUpdate=!0,m.renderBufferDirect(q,H,k,K,C,xe),K.side=Ln,K.needsUpdate=!0,m.renderBufferDirect(q,H,k,K,C,xe),K.side=un):m.renderBufferDirect(q,H,k,K,C,xe),C.onAfterRender(m,H,q,k,K,xe)}function Ut(C,H,q){H.isScene!==!0&&(H=J);const k=Ae.get(C),K=u.state.lights,xe=u.state.shadowsArray,we=K.state.version,Ee=Ze.getParameters(C,K.state,xe,H,q),Ce=Ze.getProgramCacheKey(Ee);let Be=k.programs;k.environment=C.isMeshStandardMaterial?H.environment:null,k.fog=H.fog,k.envMap=(C.isMeshStandardMaterial?xt:Oe).get(C.envMap||k.environment),Be===void 0&&(C.addEventListener("dispose",ze),Be=new Map,k.programs=Be);let Pe=Be.get(Ce);if(Pe!==void 0){if(k.currentProgram===Pe&&k.lightsStateVersion===we)return rn(C,Ee),Pe}else Ee.uniforms=Ze.getUniforms(C),C.onBuild(q,Ee,m),C.onBeforeCompile(Ee,m),Pe=Ze.acquireProgram(Ee,Ce),Be.set(Ce,Pe),k.uniforms=Ee.uniforms;const Ie=k.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ie.clippingPlanes=R.uniform),rn(C,Ee),k.needsLights=Vc(C),k.lightsStateVersion=we,k.needsLights&&(Ie.ambientLightColor.value=K.state.ambient,Ie.lightProbe.value=K.state.probe,Ie.directionalLights.value=K.state.directional,Ie.directionalLightShadows.value=K.state.directionalShadow,Ie.spotLights.value=K.state.spot,Ie.spotLightShadows.value=K.state.spotShadow,Ie.rectAreaLights.value=K.state.rectArea,Ie.ltc_1.value=K.state.rectAreaLTC1,Ie.ltc_2.value=K.state.rectAreaLTC2,Ie.pointLights.value=K.state.point,Ie.pointLightShadows.value=K.state.pointShadow,Ie.hemisphereLights.value=K.state.hemi,Ie.directionalShadowMap.value=K.state.directionalShadowMap,Ie.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ie.spotShadowMap.value=K.state.spotShadowMap,Ie.spotLightMatrix.value=K.state.spotLightMatrix,Ie.spotLightMap.value=K.state.spotLightMap,Ie.pointShadowMap.value=K.state.pointShadowMap,Ie.pointShadowMatrix.value=K.state.pointShadowMatrix);const et=Pe.getUniforms(),Dt=er.seqWithValue(et.seq,Ie);return k.currentProgram=Pe,k.uniformsList=Dt,Pe}function rn(C,H){const q=Ae.get(C);q.outputEncoding=H.outputEncoding,q.instancing=H.instancing,q.skinning=H.skinning,q.morphTargets=H.morphTargets,q.morphNormals=H.morphNormals,q.morphColors=H.morphColors,q.morphTargetsCount=H.morphTargetsCount,q.numClippingPlanes=H.numClippingPlanes,q.numIntersection=H.numClipIntersection,q.vertexAlphas=H.vertexAlphas,q.vertexTangents=H.vertexTangents,q.toneMapping=H.toneMapping}function kc(C,H,q,k,K){H.isScene!==!0&&(H=J),Re.resetTextureUnits();const xe=H.fog,we=k.isMeshStandardMaterial?H.environment:null,Ee=v===null?m.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:li,Ce=(k.isMeshStandardMaterial?xt:Oe).get(k.envMap||we),Be=k.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Pe=!!k.normalMap&&!!q.attributes.tangent,Ie=!!q.morphAttributes.position,et=!!q.morphAttributes.normal,Dt=!!q.morphAttributes.color,pn=k.toneMapped?m.toneMapping:Cn,qn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,tt=qn!==void 0?qn.length:0,De=Ae.get(k),hr=u.state.lights;if(G===!0&&(j===!0||C!==w)){const Nt=C===w&&k.id===b;R.setState(k,C,Nt)}let ct=!1;k.version===De.__version?(De.needsLights&&De.lightsStateVersion!==hr.state.version||De.outputEncoding!==Ee||K.isInstancedMesh&&De.instancing===!1||!K.isInstancedMesh&&De.instancing===!0||K.isSkinnedMesh&&De.skinning===!1||!K.isSkinnedMesh&&De.skinning===!0||De.envMap!==Ce||k.fog===!0&&De.fog!==xe||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==R.numPlanes||De.numIntersection!==R.numIntersection)||De.vertexAlphas!==Be||De.vertexTangents!==Pe||De.morphTargets!==Ie||De.morphNormals!==et||De.morphColors!==Dt||De.toneMapping!==pn||fe.isWebGL2===!0&&De.morphTargetsCount!==tt)&&(ct=!0):(ct=!0,De.__version=k.version);let jn=De.currentProgram;ct===!0&&(jn=Ut(k,H,K));let zo=!1,$i=!1,ur=!1;const bt=jn.getUniforms(),Xn=De.uniforms;if(pe.useProgram(jn.program)&&(zo=!0,$i=!0,ur=!0),k.id!==b&&(b=k.id,$i=!0),zo||w!==C){if(bt.setValue(V,"projectionMatrix",C.projectionMatrix),fe.logarithmicDepthBuffer&&bt.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),w!==C&&(w=C,$i=!0,ur=!0),k.isShaderMaterial||k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshStandardMaterial||k.envMap){const Nt=bt.map.cameraPosition;Nt!==void 0&&Nt.setValue(V,B.setFromMatrixPosition(C.matrixWorld))}(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&bt.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial||k.isShadowMaterial||K.isSkinnedMesh)&&bt.setValue(V,"viewMatrix",C.matrixWorldInverse)}if(K.isSkinnedMesh){bt.setOptional(V,K,"bindMatrix"),bt.setOptional(V,K,"bindMatrixInverse");const Nt=K.skeleton;Nt&&(fe.floatVertexTextures?(Nt.boneTexture===null&&Nt.computeBoneTexture(),bt.setValue(V,"boneTexture",Nt.boneTexture,Re),bt.setValue(V,"boneTextureSize",Nt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const dr=q.morphAttributes;if((dr.position!==void 0||dr.normal!==void 0||dr.color!==void 0&&fe.isWebGL2===!0)&&ee.update(K,q,jn),($i||De.receiveShadow!==K.receiveShadow)&&(De.receiveShadow=K.receiveShadow,bt.setValue(V,"receiveShadow",K.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Xn.envMap.value=Ce,Xn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),$i&&(bt.setValue(V,"toneMappingExposure",m.toneMappingExposure),De.needsLights&&Gc(Xn,ur),xe&&k.fog===!0&&Ye.refreshFogUniforms(Xn,xe),Ye.refreshMaterialUniforms(Xn,k,U,P,Z),er.upload(V,De.uniformsList,Xn,Re)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(er.upload(V,De.uniformsList,Xn,Re),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&bt.setValue(V,"center",K.center),bt.setValue(V,"modelViewMatrix",K.modelViewMatrix),bt.setValue(V,"normalMatrix",K.normalMatrix),bt.setValue(V,"modelMatrix",K.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Nt=k.uniformsGroups;for(let fr=0,Hc=Nt.length;fr<Hc;fr++)if(fe.isWebGL2){const Bo=Nt[fr];$.update(Bo,jn),$.bind(Bo,jn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return jn}function Gc(C,H){C.ambientLightColor.needsUpdate=H,C.lightProbe.needsUpdate=H,C.directionalLights.needsUpdate=H,C.directionalLightShadows.needsUpdate=H,C.pointLights.needsUpdate=H,C.pointLightShadows.needsUpdate=H,C.spotLights.needsUpdate=H,C.spotLightShadows.needsUpdate=H,C.rectAreaLights.needsUpdate=H,C.hemisphereLights.needsUpdate=H}function Vc(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(C,H,q){Ae.get(C.texture).__webglTexture=H,Ae.get(C.depthTexture).__webglTexture=q;const k=Ae.get(C);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=q===void 0,k.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,H){const q=Ae.get(C);q.__webglFramebuffer=H,q.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(C,H=0,q=0){v=C,_=H,x=q;let k=!0,K=null,xe=!1,we=!1;if(C){const Ce=Ae.get(C);Ce.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(36160,null),k=!1):Ce.__webglFramebuffer===void 0?Re.setupRenderTarget(C):Ce.__hasExternalTextures&&Re.rebindTextures(C,Ae.get(C.texture).__webglTexture,Ae.get(C.depthTexture).__webglTexture);const Be=C.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(we=!0);const Pe=Ae.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(K=Pe[H],xe=!0):fe.isWebGL2&&C.samples>0&&Re.useMultisampledRTT(C)===!1?K=Ae.get(C).__webglMultisampledFramebuffer:K=Pe,E.copy(C.viewport),I.copy(C.scissor),y=C.scissorTest}else E.copy(L).multiplyScalar(U).floor(),I.copy(D).multiplyScalar(U).floor(),y=N;if(pe.bindFramebuffer(36160,K)&&fe.drawBuffers&&k&&pe.drawBuffers(C,K),pe.viewport(E),pe.scissor(I),pe.setScissorTest(y),xe){const Ce=Ae.get(C.texture);V.framebufferTexture2D(36160,36064,34069+H,Ce.__webglTexture,q)}else if(we){const Ce=Ae.get(C.texture),Be=H||0;V.framebufferTextureLayer(36160,36064,Ce.__webglTexture,q||0,Be)}b=-1},this.readRenderTargetPixels=function(C,H,q,k,K,xe,we){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Ae.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&we!==void 0&&(Ee=Ee[we]),Ee){pe.bindFramebuffer(36160,Ee);try{const Ce=C.texture,Be=Ce.format,Pe=Ce.type;if(Be!==Ht&&_e.convert(Be)!==V.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=Pe===_s&&(ue.has("EXT_color_buffer_half_float")||fe.isWebGL2&&ue.has("EXT_color_buffer_float"));if(Pe!==ai&&_e.convert(Pe)!==V.getParameter(35738)&&!(Pe===kn&&(fe.isWebGL2||ue.has("OES_texture_float")||ue.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=C.width-k&&q>=0&&q<=C.height-K&&V.readPixels(H,q,k,K,_e.convert(Be),_e.convert(Pe),xe)}finally{const Ce=v!==null?Ae.get(v).__webglFramebuffer:null;pe.bindFramebuffer(36160,Ce)}}},this.copyFramebufferToTexture=function(C,H,q=0){const k=Math.pow(2,-q),K=Math.floor(H.image.width*k),xe=Math.floor(H.image.height*k);Re.setTexture2D(H,0),V.copyTexSubImage2D(3553,q,0,0,C.x,C.y,K,xe),pe.unbindTexture()},this.copyTextureToTexture=function(C,H,q,k=0){const K=H.image.width,xe=H.image.height,we=_e.convert(q.format),Ee=_e.convert(q.type);Re.setTexture2D(q,0),V.pixelStorei(37440,q.flipY),V.pixelStorei(37441,q.premultiplyAlpha),V.pixelStorei(3317,q.unpackAlignment),H.isDataTexture?V.texSubImage2D(3553,k,C.x,C.y,K,xe,we,Ee,H.image.data):H.isCompressedTexture?V.compressedTexSubImage2D(3553,k,C.x,C.y,H.mipmaps[0].width,H.mipmaps[0].height,we,H.mipmaps[0].data):V.texSubImage2D(3553,k,C.x,C.y,we,Ee,H.image),k===0&&q.generateMipmaps&&V.generateMipmap(3553),pe.unbindTexture()},this.copyTextureToTexture3D=function(C,H,q,k,K=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=C.max.x-C.min.x+1,we=C.max.y-C.min.y+1,Ee=C.max.z-C.min.z+1,Ce=_e.convert(k.format),Be=_e.convert(k.type);let Pe;if(k.isData3DTexture)Re.setTexture3D(k,0),Pe=32879;else if(k.isDataArrayTexture)Re.setTexture2DArray(k,0),Pe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(37440,k.flipY),V.pixelStorei(37441,k.premultiplyAlpha),V.pixelStorei(3317,k.unpackAlignment);const Ie=V.getParameter(3314),et=V.getParameter(32878),Dt=V.getParameter(3316),pn=V.getParameter(3315),qn=V.getParameter(32877),tt=q.isCompressedTexture?q.mipmaps[0]:q.image;V.pixelStorei(3314,tt.width),V.pixelStorei(32878,tt.height),V.pixelStorei(3316,C.min.x),V.pixelStorei(3315,C.min.y),V.pixelStorei(32877,C.min.z),q.isDataTexture||q.isData3DTexture?V.texSubImage3D(Pe,K,H.x,H.y,H.z,xe,we,Ee,Ce,Be,tt.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Pe,K,H.x,H.y,H.z,xe,we,Ee,Ce,tt.data)):V.texSubImage3D(Pe,K,H.x,H.y,H.z,xe,we,Ee,Ce,Be,tt),V.pixelStorei(3314,Ie),V.pixelStorei(32878,et),V.pixelStorei(3316,Dt),V.pixelStorei(3315,pn),V.pixelStorei(32877,qn),K===0&&k.generateMipmaps&&V.generateMipmap(Pe),pe.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?Re.setTextureCube(C,0):C.isData3DTexture?Re.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Re.setTexture2DArray(C,0):Re.setTexture2D(C,0),pe.unbindTexture()},this.resetState=function(){_=0,x=0,v=null,pe.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(Mo.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(c){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!c}}});class ig extends Mo{}ig.prototype.isWebGL1Renderer=!0;class sg extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class rg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ao,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=tn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const wt=new z;class wo{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}setX(e,t){return this.normalized&&(t=He(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=He(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=He(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=He(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=An(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=An(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=An(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=An(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=He(t,this.array),n=He(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=He(t,this.array),n=He(n,this.array),i=He(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=He(t,this.array),n=He(n,this.array),i=He(i,this.array),s=He(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new wo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Za=new z,Ja=new We,Qa=new We,og=new z,el=new Le;class ag extends Xe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Le,this.bindMatrixInverse=new Le}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new We,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;Ja.fromBufferAttribute(i.attributes.skinIndex,e),Qa.fromBufferAttribute(i.attributes.skinWeight,e),Za.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const r=Qa.getComponent(s);if(r!==0){const o=Ja.getComponent(s);el.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(og.copy(Za).applyMatrix4(el),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class yc extends $e{constructor(){super(),this.isBone=!0,this.type="Bone"}}class lg extends pt{constructor(e=null,t=1,n=1,i,s,r,o,a,l=ut,h=ut,d,u){super(null,r,o,a,l,h,i,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const tl=new Le,cg=new Le;class So{constructor(e=[],t=[]){this.uuid=tn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Le)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Le;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const o=e[s]?e[s].matrixWorld:cg;tl.multiplyMatrices(o,t[s]),tl.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new So(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=nc(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new lg(t,e,e,Ht,kn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let r=t[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new yc),this.bones.push(r),this.boneInverses.push(new Le().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const r=t[i];e.bones.push(r.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class nl extends dt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const il=new Le,sl=new Le,Hs=[],hg=new Le,ss=new Xe;class ug extends Xe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new nl(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,hg)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ss.geometry=this.geometry,ss.material=this.material,ss.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,il),sl.multiplyMatrices(n,il),ss.matrixWorld=sl,ss.raycast(e,Hs);for(let r=0,o=Hs.length;r<o;r++){const a=Hs[r];a.instanceId=s,a.object=this,t.push(a)}Hs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new nl(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class bc extends dn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const rl=new z,ol=new z,al=new Le,Wr=new xo,Ws=new qi;class To extends $e{constructor(e=new mt,t=new bc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)rl.fromBufferAttribute(t,i-1),ol.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=rl.distanceTo(ol);e.setAttribute("lineDistance",new ft(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(i),Ws.radius+=s,e.ray.intersectsSphere(Ws)===!1)return;al.copy(i).invert(),Wr.copy(e.ray).applyMatrix4(al);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,l=new z,h=new z,d=new z,u=new z,f=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const _=Math.max(0,r.start),x=Math.min(g.count,r.start+r.count);for(let v=_,b=x-1;v<b;v+=f){const w=g.getX(v),E=g.getX(v+1);if(l.fromBufferAttribute(p,w),h.fromBufferAttribute(p,E),Wr.distanceSqToSegment(l,h,u,d)>a)continue;u.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(u);y<e.near||y>e.far||t.push({distance:y,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,r.start),x=Math.min(p.count,r.start+r.count);for(let v=_,b=x-1;v<b;v+=f){if(l.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),Wr.distanceSqToSegment(l,h,u,d)>a)continue;u.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(u);E<e.near||E>e.far||t.push({distance:E,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const ll=new z,cl=new z;class dg extends To{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)ll.fromBufferAttribute(t,i),cl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ll.distanceTo(cl);e.setAttribute("lineDistance",new ft(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class fg extends To{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Mc extends dn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const hl=new Le,uo=new xo,qs=new qi,js=new z;class pg extends $e{constructor(e=new mt,t=new Mc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere),qs.applyMatrix4(i),qs.radius+=s,e.ray.intersectsSphere(qs)===!1)return;hl.copy(i).invert(),uo.copy(e.ray).applyMatrix4(hl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,l=n.index,d=n.attributes.position;if(l!==null){const u=Math.max(0,r.start),f=Math.min(l.count,r.start+r.count);for(let g=u,m=f;g<m;g++){const p=l.getX(g);js.fromBufferAttribute(d,p),ul(js,p,a,i,e,t,this)}}else{const u=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let g=u,m=f;g<m;g++)js.fromBufferAttribute(d,g),ul(js,g,a,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ul(c,e,t,n,i,s,r){const o=uo.distanceSqToPoint(c);if(o<t){const a=new z;uo.closestPointToPoint(c,a),a.applyMatrix4(n);const l=i.ray.origin.distanceTo(a);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:a,index:e,face:null,object:r})}}class Eo extends mt{constructor(e=1,t=1,n=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],d=[],u=[],f=[];let g=0;const m=[],p=n/2;let _=0;x(),r===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ft(d,3)),this.setAttribute("normal",new ft(u,3)),this.setAttribute("uv",new ft(f,2));function x(){const b=new z,w=new z;let E=0;const I=(t-e)/n;for(let y=0;y<=s;y++){const S=[],P=y/s,U=P*(t-e)+e;for(let F=0;F<=i;F++){const A=F/i,L=A*a+o,D=Math.sin(L),N=Math.cos(L);w.x=U*D,w.y=-P*n+p,w.z=U*N,d.push(w.x,w.y,w.z),b.set(D,I,N).normalize(),u.push(b.x,b.y,b.z),f.push(A,1-P),S.push(g++)}m.push(S)}for(let y=0;y<i;y++)for(let S=0;S<s;S++){const P=m[S][y],U=m[S+1][y],F=m[S+1][y+1],A=m[S][y+1];h.push(P,U,A),h.push(U,F,A),E+=6}l.addGroup(_,E,0),_+=E}function v(b){const w=g,E=new Fe,I=new z;let y=0;const S=b===!0?e:t,P=b===!0?1:-1;for(let F=1;F<=i;F++)d.push(0,p*P,0),u.push(0,P,0),f.push(.5,.5),g++;const U=g;for(let F=0;F<=i;F++){const L=F/i*a+o,D=Math.cos(L),N=Math.sin(L);I.x=S*N,I.y=p*P,I.z=S*D,d.push(I.x,I.y,I.z),u.push(0,P,0),E.x=D*.5+.5,E.y=N*.5*P+.5,f.push(E.x,E.y),g++}for(let F=0;F<i;F++){const A=w+F,L=U+F;b===!0?h.push(L,L+1,A):h.push(L+1,L,A),y+=3}l.addGroup(_,y,b===!0?1:2),_+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class nr extends mt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const a=Math.min(r+o,Math.PI);let l=0;const h=[],d=new z,u=new z,f=[],g=[],m=[],p=[];for(let _=0;_<=n;_++){const x=[],v=_/n;let b=0;_==0&&r==0?b=.5/t:_==n&&a==Math.PI&&(b=-.5/t);for(let w=0;w<=t;w++){const E=w/t;d.x=-e*Math.cos(i+E*s)*Math.sin(r+v*o),d.y=e*Math.cos(r+v*o),d.z=e*Math.sin(i+E*s)*Math.sin(r+v*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),m.push(u.x,u.y,u.z),p.push(E+b,1-v),x.push(l++)}h.push(x)}for(let _=0;_<n;_++)for(let x=0;x<t;x++){const v=h[_][x+1],b=h[_][x],w=h[_+1][x],E=h[_+1][x+1];(_!==0||r>0)&&f.push(v,b,E),(_!==n-1||a<Math.PI)&&f.push(b,w,E)}this.setIndex(f),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(m,3)),this.setAttribute("uv",new ft(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Jt extends dn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ec,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fi extends Jt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Fn(c,e,t){return wc(c)?new c.constructor(c.subarray(e,t!==void 0?t:c.length)):c.slice(e,t)}function Xs(c,e,t){return!c||!t&&c.constructor===e?c:typeof e.BYTES_PER_ELEMENT=="number"?new e(c):Array.prototype.slice.call(c)}function wc(c){return ArrayBuffer.isView(c)&&!(c instanceof DataView)}function mg(c){function e(i,s){return c[i]-c[s]}const t=c.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function dl(c,e,t){const n=c.length,i=new c.constructor(n);for(let s=0,r=0;r!==n;++s){const o=t[s]*e;for(let a=0;a!==e;++a)i[r++]=c[o+a]}return i}function Sc(c,e,t,n){let i=1,s=c[0];for(;s!==void 0&&s[n]===void 0;)s=c[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push.apply(t,r)),s=c[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=c[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=c[i++];while(s!==void 0)}class ws{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let r;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}r=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let a=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(i=s,s=t[--n-1],e>=s)break e}r=n,n=0;break t}break n}for(;n<r;){const o=n+r>>>1;e<t[o]?r=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class gg extends ws{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fa,endingEnd:fa}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,r=e+1,o=i[s],a=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case pa:s=e,o=2*t-n;break;case ma:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(a===void 0)switch(this.getSettings_().endingEnd){case pa:r=e,a=2*n-t;break;case ma:r=1,a=n+i[1]-i[0];break;default:r=e-1,a=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(a-n),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),m=g*g,p=m*g,_=-u*p+2*u*m-u*g,x=(1+u)*p+(-1.5-2*u)*m+(-.5+u)*g+1,v=(-1-f)*p+(1.5+f)*m+.5*g,b=f*p-f*m;for(let w=0;w!==o;++w)s[w]=_*r[h+w]+x*r[l+w]+v*r[a+w]+b*r[d+w];return s}}class _g extends ws{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==o;++u)s[u]=r[l+u]*d+r[a+u]*h;return s}}class xg extends ws{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class fn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xs(t,this.TimeBufferType),this.values=Xs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Xs(e.times,Array),values:Xs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new xg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _g(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new gg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case xs:t=this.InterpolantFactoryMethodDiscrete;break;case ki:t=this.InterpolantFactoryMethodLinear;break;case vr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xs;case this.InterpolantFactoryMethodLinear:return ki;case this.InterpolantFactoryMethodSmooth:return vr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const o=this.getValueSize();this.times=Fn(n,s,r),this.values=Fn(this.values,s*o,r*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){const a=n[o];if(typeof a=="number"&&isNaN(a)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,a),e=!1;break}if(r!==null&&r>a){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,a,r),e=!1;break}r=a}if(i!==void 0&&wc(i))for(let o=0,a=i.length;o!==a;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=Fn(this.times),t=Fn(this.values),n=this.getValueSize(),i=this.getInterpolation()===vr,s=e.length-1;let r=1;for(let o=1;o<s;++o){let a=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)a=!0;else{const d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){const m=t[d+g];if(m!==t[u+g]||m!==t[f+g]){a=!0;break}}}if(a){if(o!==r){e[r]=e[o];const d=o*n,u=r*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++r}}if(s>0){e[r]=e[s];for(let o=s*n,a=r*n,l=0;l!==n;++l)t[a+l]=t[o+l];++r}return r!==e.length?(this.times=Fn(e,0,r),this.values=Fn(t,0,r*n)):(this.times=e,this.values=t),this}clone(){const e=Fn(this.times,0),t=Fn(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=ki;class Xi extends fn{}Xi.prototype.ValueTypeName="bool";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=xs;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;class Tc extends fn{}Tc.prototype.ValueTypeName="color";class bs extends fn{}bs.prototype.ValueTypeName="number";class vg extends ws{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=(n-t)/(i-t);let l=e*o;for(let h=l+o;l!==h;l+=4)Rn.slerpFlat(s,0,r,l-o,r,l,a);return s}}class di extends fn{InterpolantFactoryMethodLinear(e){return new vg(this.times,this.values,this.getValueSize(),e)}}di.prototype.ValueTypeName="quaternion";di.prototype.DefaultInterpolation=ki;di.prototype.InterpolantFactoryMethodSmooth=void 0;class Yi extends fn{}Yi.prototype.ValueTypeName="string";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=xs;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ms extends fn{}Ms.prototype.ValueTypeName="vector";class yg{constructor(e,t=-1,n,i=Dh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=tn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(Mg(n[r]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=n.length;s!==r;++s)t.push(fn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,r=[];for(let o=0;o<s;o++){let a=[],l=[];a.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const h=mg(a);a=dl(a,1,h),l=dl(l,1,h),!i&&a[0]===0&&(a.push(s),l.push(l[0])),r.push(new bs(".morphTargetInfluences["+t[o].name+"]",a,l).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,a=e.length;o<a;o++){const l=e[o],h=l.name.match(s);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(l)}}const r=[];for(const o in i)r.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,u,f,g,m){if(f.length!==0){const p=[],_=[];Sc(f,p,_,g),p.length!==0&&m.push(new d(u,p,_))}},i=[],s=e.name||"default",r=e.fps||30,o=e.blendMode;let a=e.length||-1;const l=e.hierarchy||[];for(let d=0;d<l.length;d++){const u=l[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let m=0;m<u[g].morphTargets.length;m++)f[u[g].morphTargets[m]]=-1;for(const m in f){const p=[],_=[];for(let x=0;x!==u[g].morphTargets.length;++x){const v=u[g];p.push(v.time),_.push(v.morphTarget===m?1:0)}i.push(new bs(".morphTargetInfluence["+m+"]",p,_))}a=f.length*r}else{const f=".bones["+t[d].name+"]";n(Ms,f+".position",u,"pos",i),n(di,f+".quaternion",u,"rot",i),n(Ms,f+".scale",u,"scl",i)}}return i.length===0?null:new this(s,a,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function bg(c){switch(c.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return bs;case"vector":case"vector2":case"vector3":case"vector4":return Ms;case"color":return Tc;case"quaternion":return di;case"bool":case"boolean":return Xi;case"string":return Yi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+c)}function Mg(c){if(c.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=bg(c.type);if(c.times===void 0){const t=[],n=[];Sc(c.keys,t,n,"value"),c.times=t,c.values=n}return e.parse!==void 0?e.parse(c):new e(c.name,c.times,c.values,c.interpolation)}const Hi={enabled:!1,files:{},add:function(c,e){this.enabled!==!1&&(this.files[c]=e)},get:function(c){if(this.enabled!==!1)return this.files[c]},remove:function(c){delete this.files[c]},clear:function(){this.files={}}};class wg{constructor(e,t,n){const i=this;let s=!1,r=0,o=0,a;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,r,o),s=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,o),r===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return a?a(h):h},this.setURLModifier=function(h){return a=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){const f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const Sg=new wg;class Ki{constructor(e){this.manager=e!==void 0?e:Sg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const yn={};class Tg extends Error{constructor(e,t){super(e),this.response=t}}class ir extends Ki{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Hi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(yn[e]!==void 0){yn[e].push({onLoad:t,onProgress:n,onError:i});return}yn[e]=[],yn[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,a=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=yn[e],d=l.body.getReader(),u=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=u?parseInt(u):0,g=f!==0;let m=0;const p=new ReadableStream({start(_){x();function x(){d.read().then(({done:v,value:b})=>{if(v)_.close();else{m+=b.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:f});for(let E=0,I=h.length;E<I;E++){const y=h[E];y.onProgress&&y.onProgress(w)}_.enqueue(b),x()}})}}});return new Response(p)}else throw new Tg(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(a){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Hi.add(e,l);const h=yn[e];delete yn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=yn[e];if(h===void 0)throw this.manager.itemError(e),l;delete yn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Eg extends Ki{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Hi.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const o=ys("img");function a(){h(),Hi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(d){h(),i&&i(d),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",a,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",a,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class On extends Ki{constructor(e){super(e)}load(e,t,n,i){const s=new pt,r=new Eg(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Ao extends $e{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const qr=new Le,fl=new z,pl=new z;class Co{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vo,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;fl.setFromMatrixPosition(e.matrixWorld),t.position.copy(fl),pl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pl),t.updateMatrixWorld(),qr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ag extends Co{constructor(){super(new At(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=vs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Cg extends Ao{constructor(e,t,n=0,i=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new Ag}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ml=new Le,rs=new z,jr=new z;class Lg extends Co{constructor(){super(new At(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Fe(4,2),this._viewportCount=6,this._viewports=[new We(2,1,1,1),new We(0,1,1,1),new We(3,1,1,1),new We(1,1,1,1),new We(3,0,1,1),new We(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),rs.setFromMatrixPosition(e.matrixWorld),n.position.copy(rs),jr.copy(n.position),jr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(jr),n.updateMatrixWorld(),i.makeTranslation(-rs.x,-rs.y,-rs.z),ml.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ml)}}class Ec extends Ao{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Lg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Rg extends Co{constructor(){super(new yo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pg extends Ao{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.shadow=new Rg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class fo{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Ig extends Ki{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Hi.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(a){return a.blob()}).then(function(a){return createImageBitmap(a,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(a){Hi.add(e,a),t&&t(a),s.manager.itemEnd(e)}).catch(function(a){i&&i(a),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}class Dg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=gl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=gl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function gl(){return(typeof performance>"u"?Date:performance).now()}const Lo="\\[\\]\\.:\\/",Ng=new RegExp("["+Lo+"]","g"),Ro="[^"+Lo+"]",Fg="[^"+Lo.replace("\\.","")+"]",zg=/((?:WC+[\/:])*)/.source.replace("WC",Ro),Bg=/(WCOD+)?/.source.replace("WCOD",Fg),Og=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ro),Ug=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ro),kg=new RegExp("^"+zg+Bg+Og+Ug+"$"),Gg=["material","materials","bones","map"];class Vg{constructor(e,t,n){const i=n||Ge.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ge{constructor(e,t,n){this.path=t,this.parsedPath=n||Ge.parseTrackName(t),this.node=Ge.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ge.Composite(e,t,n):new Ge(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ng,"")}static parseTrackName(e){const t=kg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Gg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let r=0;r<s.length;r++){const o=s[r];if(o.name===t||o.uuid===t)return o;const a=n(o.children);if(a)return a}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Ge.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const r=e[i];if(r===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}a=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(a=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ge.Composite=Vg;Ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ge.prototype.GetterByBindingType=[Ge.prototype._getValue_direct,Ge.prototype._getValue_array,Ge.prototype._getValue_arrayElement,Ge.prototype._getValue_toArray];Ge.prototype.SetterByBindingTypeAndVersioning=[[Ge.prototype._setValue_direct,Ge.prototype._setValue_direct_setNeedsUpdate,Ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_array,Ge.prototype._setValue_array_setNeedsUpdate,Ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_arrayElement,Ge.prototype._setValue_arrayElement_setNeedsUpdate,Ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_fromArray,Ge.prototype._setValue_fromArray_setNeedsUpdate,Ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:go}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=go);function Hg(c,e=!1){const t=c[0].index!==null,n=new Set(Object.keys(c[0].attributes)),i=new Set(Object.keys(c[0].morphAttributes)),s={},r={},o=c[0].morphTargetsRelative,a=new mt;let l=0;for(let h=0;h<c.length;++h){const d=c[h];let u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;a.addGroup(l,f,h),l+=f}}if(t){let h=0;const d=[];for(let u=0;u<c.length;++u){const f=c[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=c[u].attributes.position.count}a.setIndex(d)}for(const h in s){const d=_l(s[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+h+" attribute."),null;a.setAttribute(h,d)}for(const h in r){const d=r[h][0].length;if(d===0)break;a.morphAttributes=a.morphAttributes||{},a.morphAttributes[h]=[];for(let u=0;u<d;++u){const f=[];for(let m=0;m<r[h].length;++m)f.push(r[h][m][u]);const g=_l(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+h+" morphAttribute."),null;a.morphAttributes[h].push(g)}}return a}function _l(c){let e,t,n,i=0;for(let o=0;o<c.length;++o){const a=c[o];if(a.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=a.array.constructor),e!==a.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=a.itemSize),t!==a.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=a.normalized),n!==a.normalized)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;i+=a.array.length}const s=new e(i);let r=0;for(let o=0;o<c.length;++o)s.set(c[o].array,r),r+=c[o].array.length;return new dt(s,t,n)}function xl(c,e){if(e===Nh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),c;if(e===oo||e===Ql){let t=c.getIndex();if(t===null){const r=[],o=c.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);c.setIndex(r),t=c.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),c}const n=t.count-2,i=[];if(e===oo)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=c.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),c}class Wg extends Ki{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Kg(t)}),this.register(function(t){return new n0(t)}),this.register(function(t){return new i0(t)}),this.register(function(t){return new s0(t)}),this.register(function(t){return new Zg(t)}),this.register(function(t){return new Jg(t)}),this.register(function(t){return new Qg(t)}),this.register(function(t){return new e0(t)}),this.register(function(t){return new Yg(t)}),this.register(function(t){return new t0(t)}),this.register(function(t){return new $g(t)}),this.register(function(t){return new jg(t)}),this.register(function(t){return new r0(t)}),this.register(function(t){return new o0(t)})}load(e,t,n,i){const s=this;let r;this.resourcePath!==""?r=this.resourcePath:this.path!==""?r=this.path:r=fo.extractUrlBase(e),this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},a=new ir(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{s.parse(l,r,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const r={},o={},a=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(a.decode(new Uint8Array(e,0,4))===Ac){try{r[Ne.KHR_BINARY_GLTF]=new a0(e)}catch(d){i&&i(d);return}s=JSON.parse(r[Ne.KHR_BINARY_GLTF].content)}else s=JSON.parse(a.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new y0(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](l);o[d.name]=d,r[d.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const d=s.extensionsUsed[h],u=s.extensionsRequired||[];switch(d){case Ne.KHR_MATERIALS_UNLIT:r[d]=new Xg;break;case Ne.KHR_DRACO_MESH_COMPRESSION:r[d]=new l0(s,this.dracoLoader);break;case Ne.KHR_TEXTURE_TRANSFORM:r[d]=new c0;break;case Ne.KHR_MESH_QUANTIZATION:r[d]=new h0;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(r),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function qg(){let c={};return{get:function(e){return c[e]},add:function(e,t){c[e]=t},remove:function(e){delete c[e]},removeAll:function(){c={}}}}const Ne={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class jg{constructor(e){this.parser=e,this.name=Ne.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,a=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const h=new Se(16777215);a.color!==void 0&&h.fromArray(a.color);const d=a.range!==void 0?a.range:0;switch(a.type){case"directional":l=new Pg(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ec(h),l.distance=d;break;case"spot":l=new Cg(h),l.distance=d,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle!==void 0?a.spot.innerConeAngle:0,a.spot.outerConeAngle=a.spot.outerConeAngle!==void 0?a.spot.outerConeAngle:Math.PI/4,l.angle=a.spot.outerConeAngle,l.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+a.type)}return l.position.set(0,0,0),l.decay=2,Un(l,a),a.intensity!==void 0&&(l.intensity=a.intensity),l.name=t.createUniqueName(a.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(a){return n._getNodeRef(t.cache,o,a)})}}class Xg{constructor(){this.name=Ne.KHR_MATERIALS_UNLIT}getMaterialType(){return Qt}extendParams(e,t,n){const i=[];e.color=new Se(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.fromArray(r),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,ke))}return Promise.all(i)}}class Yg{constructor(e){this.parser=e,this.name=Ne.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Kg{constructor(e){this.parser=e,this.name=Ne.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const o=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Fe(o,o)}return Promise.all(s)}}class $g{constructor(e){this.parser=e,this.name=Ne.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}}class Zg{constructor(e){this.parser=e,this.name=Ne.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Se(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=i.extensions[this.name];return r.sheenColorFactor!==void 0&&t.sheenColor.fromArray(r.sheenColorFactor),r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,ke)),r.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class Jg{constructor(e){this.parser=e,this.name=Ne.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class Qg{constructor(e){this.parser=e,this.name=Ne.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const o=r.attenuationColor||[1,1,1];return t.attenuationColor=new Se(o[0],o[1],o[2]),Promise.all(s)}}class e0{constructor(e){this.parser=e,this.name=Ne.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class t0{constructor(e){this.parser=e,this.name=Ne.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const o=r.specularColorFactor||[1,1,1];return t.specularColor=new Se(o[0],o[1],o[2]),r.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,ke)),Promise.all(s)}}class n0{constructor(e){this.parser=e,this.name=Ne.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}}class i0{constructor(e){this.parser=e,this.name=Ne.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],o=i.images[r.source];let a=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(a=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,r.source,a);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class s0{constructor(e){this.parser=e,this.name=Ne.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],o=i.images[r.source];let a=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(a=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,r.source,a);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class r0{constructor(e){this.name=Ne.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const a=i.byteOffset||0,l=i.byteLength||0,h=i.count,d=i.byteStride,u=new Uint8Array(o,a,l);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,d,u,i.mode,i.filter).then(function(f){return f.buffer}):r.ready.then(function(){const f=new ArrayBuffer(h*d);return r.decodeGltfBuffer(new Uint8Array(f),h,d,u,i.mode,i.filter),f})})}else return null}}class o0{constructor(e){this.name=Ne.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Gt.TRIANGLES&&l.mode!==Gt.TRIANGLE_STRIP&&l.mode!==Gt.TRIANGLE_FAN&&l.mode!==void 0)return null;const r=n.extensions[this.name].attributes,o=[],a={};for(const l in r)o.push(this.parser.getDependency("accessor",r[l]).then(h=>(a[l]=h,a[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const h=l.pop(),d=h.isGroup?h.children:[h],u=l[0].count,f=[];for(const g of d){const m=new Le,p=new z,_=new Rn,x=new z(1,1,1),v=new ug(g.geometry,g.material,u);for(let b=0;b<u;b++)a.TRANSLATION&&p.fromBufferAttribute(a.TRANSLATION,b),a.ROTATION&&_.fromBufferAttribute(a.ROTATION,b),a.SCALE&&x.fromBufferAttribute(a.SCALE,b),v.setMatrixAt(b,m.compose(p,_,x));for(const b in a)b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,a[b]);$e.prototype.copy.call(v,g),v.frustumCulled=!1,this.parser.assignFinalMaterial(v),f.push(v)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Ac="glTF",os=12,vl={JSON:1313821514,BIN:5130562};class a0{constructor(e){this.name=Ne.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,os),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ac)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-os,s=new DataView(e,os);let r=0;for(;r<i;){const o=s.getUint32(r,!0);r+=4;const a=s.getUint32(r,!0);if(r+=4,a===vl.JSON){const l=new Uint8Array(e,os+r,o);this.content=n.decode(l)}else if(a===vl.BIN){const l=os+r;this.body=e.slice(l,l+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class l0{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ne.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},a={},l={};for(const h in r){const d=po[h]||h.toLowerCase();o[d]=r[h]}for(const h in e.attributes){const d=po[h]||h.toLowerCase();if(r[h]!==void 0){const u=n.accessors[e.attributes[h]],f=Fi[u.componentType];l[d]=f.name,a[d]=u.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(d){i.decodeDracoFile(h,function(u){for(const f in u.attributes){const g=u.attributes[f],m=a[f];m!==void 0&&(g.normalized=m)}d(u)},o,l)})})}}class c0{constructor(){this.name=Ne.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class h0{constructor(){this.name=Ne.KHR_MESH_QUANTIZATION}}class Cc extends ws{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[s+r];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=o*2,l=o*3,h=i-t,d=(n-t)/h,u=d*d,f=u*d,g=e*l,m=g-l,p=-2*f+3*u,_=f-u,x=1-p,v=_-u+d;for(let b=0;b!==o;b++){const w=r[m+b+o],E=r[m+b+a]*h,I=r[g+b+o],y=r[g+b]*h;s[b]=x*w+v*E+p*I+_*y}return s}}const u0=new Rn;class d0 extends Cc{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return u0.fromArray(s).normalize().toArray(s),s}}const Gt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Fi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},yl={9728:ut,9729:It,9984:ro,9985:Zl,9986:Qs,9987:oi},bl={33071:Vt,33648:tr,10497:ri},Xr={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},po={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},zn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},f0={CUBICSPLINE:void 0,LINEAR:ki,STEP:xs},Yr={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function p0(c){return c.DefaultMaterial===void 0&&(c.DefaultMaterial=new Jt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ln})),c.DefaultMaterial}function as(c,e,t){for(const n in t.extensions)c[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Un(c,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(c.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function m0(c,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){const d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(c);const r=[],o=[],a=[];for(let l=0,h=e.length;l<h;l++){const d=e[l];if(n){const u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):c.attributes.position;r.push(u)}if(i){const u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):c.attributes.normal;o.push(u)}if(s){const u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):c.attributes.color;a.push(u)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(a)]).then(function(l){const h=l[0],d=l[1],u=l[2];return n&&(c.morphAttributes.position=h),i&&(c.morphAttributes.normal=d),s&&(c.morphAttributes.color=u),c.morphTargetsRelative=!0,c})}function g0(c,e){if(c.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)c.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(c.morphTargetInfluences.length===t.length){c.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)c.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function _0(c){const e=c.extensions&&c.extensions[Ne.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Ml(e.attributes):t=c.indices+":"+Ml(c.attributes)+":"+c.mode,t}function Ml(c){let e="";const t=Object.keys(c).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+c[t[n]]+";";return e}function mo(c){switch(c){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function x0(c){return c.search(/\.jpe?g($|\?)/i)>0||c.search(/^data\:image\/jpeg/)===0?"image/jpeg":c.search(/\.webp($|\?)/i)>0||c.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const v0=new Le;class y0{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new qg,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new On(this.options.manager):this.textureLoader=new Ig(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ir(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const o={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};as(s,o,i),Un(o,i),Promise.all(n._invokeAll(function(a){return a.afterRoot&&a.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i].joints;for(let o=0,a=r.length;o<a;o++)e[r[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(r,o)=>{const a=this.associations.get(r);a!=null&&this.associations.set(o,a);for(const[l,h]of r.children.entries())s(h,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ne.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load(fo.resolveURL(t.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const r=Xr[i.type],o=Fi[i.componentType],a=i.normalized===!0,l=new o(i.count*r);return Promise.resolve(new dt(l,r,a))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const o=r[0],a=Xr[i.type],l=Fi[i.componentType],h=l.BYTES_PER_ELEMENT,d=h*a,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let m,p;if(f&&f!==d){const _=Math.floor(u/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+_+":"+i.count;let v=t.cache.get(x);v||(m=new l(o,_*f,i.count*f/h),v=new rg(m,f/h),t.cache.add(x,v)),p=new wo(v,a,u%f/h,g)}else o===null?m=new l(i.count*a):m=new l(o,u,i.count*a),p=new dt(m,a,g);if(i.sparse!==void 0){const _=Xr.SCALAR,x=Fi[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,w=new x(r[1],v,i.sparse.count*_),E=new l(r[2],b,i.sparse.count*a);o!==null&&(p=new dt(p.array.slice(),p.itemSize,p.normalized));for(let I=0,y=w.length;I<y;I++){const S=w[I];if(p.setX(S,E[I*a]),a>=2&&p.setY(S,E[I*a+1]),a>=3&&p.setZ(S,E[I*a+2]),a>=4&&p.setW(S,E[I*a+3]),a>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,r=t.images[s];let o=this.textureLoader;if(r.uri){const a=n.manager.getHandler(r.uri);a!==null&&(o=a)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,r=s.textures[e],o=s.images[t],a=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[a])return this.textureCache[a];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=r.name||o.name||"";const u=(s.samplers||{})[r.sampler]||{};return h.magFilter=yl[u.magFilter]||It,h.minFilter=yl[u.minFilter]||oi,h.wrapS=bl[u.wrapS]||ri,h.wrapT=bl[u.wrapT]||ri,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[a]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const r=i.images[e],o=self.URL||self.webkitURL;let a=r.uri||"",l=!1;if(r.bufferView!==void 0)a=n.getDependency("bufferView",r.bufferView).then(function(d){l=!0;const u=new Blob([d],{type:r.mimeType});return a=o.createObjectURL(u),a});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(a).then(function(d){return new Promise(function(u,f){let g=u;t.isImageBitmapLoader===!0&&(g=function(m){const p=new pt(m);p.needsUpdate=!0,u(p)}),t.load(fo.resolveURL(d,s.path),g,void 0,f)})}).then(function(d){return l===!0&&o.revokeObjectURL(a),d.userData.mimeType=r.mimeType||x0(r.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",a),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),s.extensions[Ne.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ne.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const a=s.associations.get(r);r=s.extensions[Ne.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),s.associations.set(r,a)}}return i!==void 0&&(r.encoding=i),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let a=this.cache.get(o);a||(a=new Mc,dn.prototype.copy.call(a,n),a.color.copy(n.color),a.map=n.map,a.sizeAttenuation=!1,this.cache.add(o,a)),n=a}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let a=this.cache.get(o);a||(a=new bc,dn.prototype.copy.call(a,n),a.color.copy(n.color),this.cache.add(o,a)),n=a}if(i||s||r){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let a=this.cache.get(o);a||(a=n.clone(),s&&(a.vertexColors=!0),r&&(a.flatShading=!0),i&&(a.normalScale&&(a.normalScale.y*=-1),a.clearcoatNormalScale&&(a.clearcoatNormalScale.y*=-1)),this.cache.add(o,a),this.associations.set(a,this.associations.get(n))),n=a}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return Jt}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let r;const o={},a=s.extensions||{},l=[];if(a[Ne.KHR_MATERIALS_UNLIT]){const d=i[Ne.KHR_MATERIALS_UNLIT];r=d.getMaterialType(),l.push(d.extendParams(o,s,t))}else{const d=s.pbrMetallicRoughness||{};if(o.color=new Se(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const u=d.baseColorFactor;o.color.fromArray(u),o.opacity=u[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",d.baseColorTexture,ke)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),r=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=un);const h=s.alphaMode||Yr.OPAQUE;if(h===Yr.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Yr.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==Qt&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Fe(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;o.normalScale.set(d,d)}return s.occlusionTexture!==void 0&&r!==Qt&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==Qt&&(o.emissive=new Se().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&r!==Qt&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,ke)),Promise.all(l).then(function(){const d=new r(o);return s.name&&(d.name=s.name),Un(d,s),t.associations.set(d,{materials:e}),s.extensions&&as(i,d,s),d})}createUniqueName(e){const t=Ge.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Ne.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(a){return wl(a,o,t)})}const r=[];for(let o=0,a=e.length;o<a;o++){const l=e[o],h=_0(l),d=i[h];if(d)r.push(d.promise);else{let u;l.extensions&&l.extensions[Ne.KHR_DRACO_MESH_COMPRESSION]?u=s(l):u=wl(new mt,l,t),i[h]={primitive:l,promise:u},r.push(u)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],r=s.primitives,o=[];for(let a=0,l=r.length;a<l;a++){const h=r[a].material===void 0?p0(this.cache):this.getDependency("material",r[a].material);o.push(h)}return o.push(t.loadGeometries(r)),Promise.all(o).then(function(a){const l=a.slice(0,a.length-1),h=a[a.length-1],d=[];for(let f=0,g=h.length;f<g;f++){const m=h[f],p=r[f];let _;const x=l[f];if(p.mode===Gt.TRIANGLES||p.mode===Gt.TRIANGLE_STRIP||p.mode===Gt.TRIANGLE_FAN||p.mode===void 0)_=s.isSkinnedMesh===!0?new ag(m,x):new Xe(m,x),_.isSkinnedMesh===!0&&_.normalizeSkinWeights(),p.mode===Gt.TRIANGLE_STRIP?_.geometry=xl(_.geometry,Ql):p.mode===Gt.TRIANGLE_FAN&&(_.geometry=xl(_.geometry,oo));else if(p.mode===Gt.LINES)_=new dg(m,x);else if(p.mode===Gt.LINE_STRIP)_=new To(m,x);else if(p.mode===Gt.LINE_LOOP)_=new fg(m,x);else if(p.mode===Gt.POINTS)_=new pg(m,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(_.geometry.morphAttributes).length>0&&g0(_,s),_.name=t.createUniqueName(s.name||"mesh_"+e),Un(_,s),p.extensions&&as(i,_,p),t.assignFinalMaterial(_),d.push(_)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return d[0];const u=new ii;t.associations.set(u,{meshes:e});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new At(Zt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new yo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Un(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),r=i,o=[],a=[];for(let l=0,h=r.length;l<h;l++){const d=r[l];if(d){o.push(d);const u=new Le;s!==null&&u.fromArray(s.array,l*16),a.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new So(o,a)})}loadAnimation(e){const n=this.json.animations[e],i=[],s=[],r=[],o=[],a=[];for(let l=0,h=n.channels.length;l<h;l++){const d=n.channels[l],u=n.samplers[d.sampler],f=d.target,g=f.node,m=n.parameters!==void 0?n.parameters[u.input]:u.input,p=n.parameters!==void 0?n.parameters[u.output]:u.output;i.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",m)),r.push(this.getDependency("accessor",p)),o.push(u),a.push(f)}return Promise.all([Promise.all(i),Promise.all(s),Promise.all(r),Promise.all(o),Promise.all(a)]).then(function(l){const h=l[0],d=l[1],u=l[2],f=l[3],g=l[4],m=[];for(let _=0,x=h.length;_<x;_++){const v=h[_],b=d[_],w=u[_],E=f[_],I=g[_];if(v===void 0)continue;v.updateMatrix();let y;switch(zn[I.path]){case zn.weights:y=bs;break;case zn.rotation:y=di;break;case zn.position:case zn.scale:default:y=Ms;break}const S=v.name?v.name:v.uuid,P=E.interpolation!==void 0?f0[E.interpolation]:ki,U=[];zn[I.path]===zn.weights?v.traverse(function(A){A.morphTargetInfluences&&U.push(A.name?A.name:A.uuid)}):U.push(S);let F=w.array;if(w.normalized){const A=mo(F.constructor),L=new Float32Array(F.length);for(let D=0,N=F.length;D<N;D++)L[D]=F[D]*A;F=L}for(let A=0,L=U.length;A<L;A++){const D=new y(U[A]+"."+zn[I.path],b.array,F,P);E.interpolation==="CUBICSPLINE"&&(D.createInterpolant=function(W){const G=this instanceof di?d0:Cc;return new G(this.times,this.values,this.getValueSize()/3,W)},D.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(D)}}const p=n.name?n.name:"animation_"+e;return new yg(p,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let a=0,l=i.weights.length;a<l;a++)o.morphTargetInfluences[a]=i.weights[a]}),r})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),r=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)r.push(n.getDependency("node",o[l]));const a=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(r),a]).then(function(l){const h=l[0],d=l[1],u=l[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,v0)});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"",o=[],a=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return a&&o.push(a),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(s.isBone===!0?h=new yc:l.length>1?h=new ii:l.length===1?h=l[0]:h=new $e,h!==l[0])for(let d=0,u=l.length;d<u;d++)h.add(l[d]);if(s.name&&(h.userData.name=s.name,h.name=r),Un(h,s),s.extensions&&as(n,h,s),s.matrix!==void 0){const d=new Le;d.fromArray(s.matrix),h.applyMatrix4(d)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new ii;n.name&&(s.name=i.createUniqueName(n.name)),Un(s,n),n.extensions&&as(t,s,n);const r=n.nodes||[],o=[];for(let a=0,l=r.length;a<l;a++)o.push(i.getDependency("node",r[a]));return Promise.all(o).then(function(a){for(let h=0,d=a.length;h<d;h++)s.add(a[h]);const l=h=>{const d=new Map;for(const[u,f]of i.associations)(u instanceof dn||u instanceof pt)&&d.set(u,f);return h.traverse(u=>{const f=i.associations.get(u);f!=null&&d.set(u,f)}),d};return i.associations=l(s),s})}}function b0(c,e,t){const n=e.attributes,i=new Hn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],a=o.min,l=o.max;if(a!==void 0&&l!==void 0){if(i.set(new z(a[0],a[1],a[2]),new z(l[0],l[1],l[2])),o.normalized){const h=mo(Fi[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new z,a=new z;for(let l=0,h=s.length;l<h;l++){const d=s[l];if(d.POSITION!==void 0){const u=t.json.accessors[d.POSITION],f=u.min,g=u.max;if(f!==void 0&&g!==void 0){if(a.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),a.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),a.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),u.normalized){const m=mo(Fi[u.componentType]);a.multiplyScalar(m)}o.max(a)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}c.boundingBox=i;const r=new qi;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,c.boundingSphere=r}function wl(c,e,t){const n=e.attributes,i=[];function s(r,o){return t.getDependency("accessor",r).then(function(a){c.setAttribute(o,a)})}for(const r in n){const o=po[r]||r.toLowerCase();o in c.attributes||i.push(s(n[r],o))}if(e.indices!==void 0&&!c.index){const r=t.getDependency("accessor",e.indices).then(function(o){c.setIndex(o)});i.push(r)}return Un(c,e),b0(c,e,t),Promise.all(i).then(function(){return e.targets!==void 0?m0(c,e.targets,t):c})}const Kr=new WeakMap;class M0 extends Ki{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new ir(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,r=>{this.parse(r,t,i)},n,i)}parse(e,t,n){this.decodeDracoFile(e,t,null,null,Tt).catch(n)}decodeDracoFile(e,t,n,i,s=Gi){const r={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,r).then(t)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Kr.has(e)){const a=Kr.get(e);if(a.key===n)return a.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,r=e.byteLength,o=this._getWorker(s,r).then(a=>(i=a,new Promise((l,h)=>{i._callbacks[s]={resolve:l,reject:h},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(a=>this._createGeometry(a.geometry));return o.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),Kr.set(e,{key:n,promise:o}),o}_createGeometry(e){const t=new mt;e.index&&t.setIndex(new dt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],s=i.name,r=i.array,o=i.itemSize,a=new dt(r,o);s==="color"&&this._assignVertexColorSpace(a,i.vertexColorSpace),t.setAttribute(s,a)}return t}_assignVertexColorSpace(e,t){if(t!==Tt)return;const n=new Se;for(let i=0,s=e.count;i<s;i++)n.fromBufferAttribute(e,i).convertSRGBToLinear(),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new ir(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=w0.toString(),r=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([r]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const r=s.data;switch(r.type){case"decode":i._callbacks[r.id].resolve(r);break;case"error":i._callbacks[r.id].reject(r);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+r.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function w0(){let c,e;onmessage=function(r){const o=r.data;switch(o.type){case"init":c=o.decoderConfig,e=new Promise(function(h){c.onModuleLoaded=function(d){h({draco:d})},DracoDecoderModule(c)});break;case"decode":const a=o.buffer,l=o.taskConfig;e.then(h=>{const d=h.draco,u=new d.Decoder;try{const f=t(d,u,new Int8Array(a),l),g=f.attributes.map(m=>m.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:o.id,error:f.message})}finally{d.destroy(u)}});break}};function t(r,o,a,l){const h=l.attributeIDs,d=l.attributeTypes;let u,f;const g=o.GetEncodedGeometryType(a);if(g===r.TRIANGULAR_MESH)u=new r.Mesh,f=o.DecodeArrayToMesh(a,a.byteLength,u);else if(g===r.POINT_CLOUD)u=new r.PointCloud,f=o.DecodeArrayToPointCloud(a,a.byteLength,u);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||u.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const m={index:null,attributes:[]};for(const p in h){const _=self[d[p]];let x,v;if(l.useUniqueIDs)v=h[p],x=o.GetAttributeByUniqueId(u,v);else{if(v=o.GetAttributeId(u,r[h[p]]),v===-1)continue;x=o.GetAttribute(u,v)}const b=i(r,o,u,p,_,x);p==="color"&&(b.vertexColorSpace=l.vertexColorSpace),m.attributes.push(b)}return g===r.TRIANGULAR_MESH&&(m.index=n(r,o,u)),r.destroy(u),m}function n(r,o,a){const h=a.num_faces()*3,d=h*4,u=r._malloc(d);o.GetTrianglesUInt32Array(a,d,u);const f=new Uint32Array(r.HEAPF32.buffer,u,h).slice();return r._free(u),{array:f,itemSize:1}}function i(r,o,a,l,h,d){const u=d.num_components(),g=a.num_points()*u,m=g*h.BYTES_PER_ELEMENT,p=s(r,h),_=r._malloc(m);o.GetAttributeDataArrayForAllPoints(a,d,p,m,_);const x=new h(r.HEAPF32.buffer,_,g).slice();return r._free(_),{name:l,array:x,itemSize:u}}function s(r,o){switch(o){case Float32Array:return r.DT_FLOAT32;case Int8Array:return r.DT_INT8;case Int16Array:return r.DT_INT16;case Int32Array:return r.DT_INT32;case Uint8Array:return r.DT_UINT8;case Uint16Array:return r.DT_UINT16;case Uint32Array:return r.DT_UINT32}}}class en{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new M);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new M);const n=this.elements,i=e.x,s=e.y,r=e.z;return t.x=n[0]*i+n[1]*s+n[2]*r,t.y=n[3]*i+n[4]*s+n[5]*r,t.z=n[6]*i+n[7]*s+n[8]*r,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new en);const n=this.elements,i=e.elements,s=t.elements,r=n[0],o=n[1],a=n[2],l=n[3],h=n[4],d=n[5],u=n[6],f=n[7],g=n[8],m=i[0],p=i[1],_=i[2],x=i[3],v=i[4],b=i[5],w=i[6],E=i[7],I=i[8];return s[0]=r*m+o*x+a*w,s[1]=r*p+o*v+a*E,s[2]=r*_+o*b+a*I,s[3]=l*m+h*x+d*w,s[4]=l*p+h*v+d*E,s[5]=l*_+h*b+d*I,s[6]=u*m+f*x+g*w,s[7]=u*p+f*v+g*E,s[8]=u*_+f*b+g*I,t}scale(e,t){t===void 0&&(t=new en);const n=this.elements,i=t.elements;for(let s=0;s!==3;s++)i[3*s+0]=e.x*n[3*s+0],i[3*s+1]=e.y*n[3*s+1],i[3*s+2]=e.z*n[3*s+2];return t}solve(e,t){t===void 0&&(t=new M);const n=3,i=4,s=[];let r,o;for(r=0;r<n*i;r++)s.push(0);for(r=0;r<3;r++)for(o=0;o<3;o++)s[r+i*o]=this.elements[r+3*o];s[3+4*0]=e.x,s[3+4*1]=e.y,s[3+4*2]=e.z;let a=3;const l=a;let h;const d=4;let u;do{if(r=l-a,s[r+i*r]===0){for(o=r+1;o<l;o++)if(s[r+i*o]!==0){h=d;do u=d-h,s[u+i*r]+=s[u+i*o];while(--h);break}}if(s[r+i*r]!==0)for(o=r+1;o<l;o++){const f=s[r+i*o]/s[r+i*r];h=d;do u=d-h,s[u+i*o]=u<=r?0:s[u+i*o]-s[u+i*r]*f;while(--h)}}while(--a);if(t.z=s[2*i+3]/s[2*i+2],t.y=(s[1*i+3]-s[1*i+2]*t.z)/s[1*i+1],t.x=(s[0*i+3]-s[0*i+2]*t.z-s[0*i+1]*t.y)/s[0*i+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";const t=",";for(let n=0;n<9;n++)e+=this.elements[n]+t;return e}reverse(e){e===void 0&&(e=new en);const t=3,n=6,i=S0;let s,r;for(s=0;s<3;s++)for(r=0;r<3;r++)i[s+n*r]=this.elements[s+3*r];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let o=3;const a=o;let l;const h=n;let d;do{if(s=a-o,i[s+n*s]===0){for(r=s+1;r<a;r++)if(i[s+n*r]!==0){l=h;do d=h-l,i[d+n*s]+=i[d+n*r];while(--l);break}}if(i[s+n*s]!==0)for(r=s+1;r<a;r++){const u=i[s+n*r]/i[s+n*s];l=h;do d=h-l,i[d+n*r]=d<=s?0:i[d+n*r]-i[d+n*s]*u;while(--l)}}while(--o);s=2;do{r=s-1;do{const u=i[s+n*r]/i[s+n*s];l=n;do d=n-l,i[d+n*r]=i[d+n*r]-i[d+n*s]*u;while(--l)}while(r--)}while(--s);s=2;do{const u=1/i[s+n*s];l=n;do d=n-l,i[d+n*s]=i[d+n*s]*u;while(--l)}while(s--);s=2;do{r=2;do{if(d=i[t+r+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(s,r,d)}while(r--)}while(s--);return e}setRotationFromQuaternion(e){const t=e.x,n=e.y,i=e.z,s=e.w,r=t+t,o=n+n,a=i+i,l=t*r,h=t*o,d=t*a,u=n*o,f=n*a,g=i*a,m=s*r,p=s*o,_=s*a,x=this.elements;return x[3*0+0]=1-(u+g),x[3*0+1]=h-_,x[3*0+2]=d+p,x[3*1+0]=h+_,x[3*1+1]=1-(l+g),x[3*1+2]=f-m,x[3*2+0]=d-p,x[3*2+1]=f+m,x[3*2+2]=1-(l+u),this}transpose(e){e===void 0&&(e=new en);const t=this.elements,n=e.elements;let i;return n[0]=t[0],n[4]=t[4],n[8]=t[8],i=t[1],n[1]=t[3],n[3]=i,i=t[2],n[2]=t[6],n[6]=i,i=t[5],n[5]=t[7],n[7]=i,e}}const S0=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class M{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new M);const n=e.x,i=e.y,s=e.z,r=this.x,o=this.y,a=this.z;return t.x=o*s-a*i,t.y=a*n-r*s,t.z=r*i-o*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new M(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new M(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new en([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,n=this.z,i=Math.sqrt(e*e+t*t+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(e){e===void 0&&(e=new M);const t=this.x,n=this.y,i=this.z;let s=Math.sqrt(t*t+n*n+i*i);return s>0?(s=1/s,e.x=t*s,e.y=n*s,e.z=i*s):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z;return Math.sqrt((s-t)*(s-t)+(r-n)*(r-n)+(o-i)*(o-i))}distanceSquared(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z;return(s-t)*(s-t)+(r-n)*(r-n)+(o-i)*(o-i)}scale(e,t){t===void 0&&(t=new M);const n=this.x,i=this.y,s=this.z;return t.x=e*n,t.y=e*i,t.z=e*s,t}vmul(e,t){return t===void 0&&(t=new M),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new M),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new M),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const n=this.length();if(n>0){const i=T0,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const r=E0;Math.abs(i.x)<.9?(r.set(1,0,0),i.cross(r,e)):(r.set(0,1,0),i.cross(r,e)),i.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){const i=this.x,s=this.y,r=this.z;n.x=i+(e.x-i)*t,n.y=s+(e.y-s)*t,n.z=r+(e.z-r)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(Sl),Sl.almostEquals(e,t)}clone(){return new M(this.x,this.y,this.z)}}M.ZERO=new M(0,0,0);M.UNIT_X=new M(1,0,0);M.UNIT_Y=new M(0,1,0);M.UNIT_Z=new M(0,0,1);const T0=new M,E0=new M,Sl=new M;class Ot{constructor(e){e===void 0&&(e={}),this.lowerBound=new M,this.upperBound=new M,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,i){const s=this.lowerBound,r=this.upperBound,o=n;s.copy(e[0]),o&&o.vmult(s,s),r.copy(s);for(let a=1;a<e.length;a++){let l=e[a];o&&(o.vmult(l,Tl),l=Tl),l.x>r.x&&(r.x=l.x),l.x<s.x&&(s.x=l.x),l.y>r.y&&(r.y=l.y),l.y<s.y&&(s.y=l.y),l.z>r.z&&(r.z=l.z),l.z<s.z&&(s.z=l.z)}return t&&(t.vadd(s,s),t.vadd(r,r)),i&&(s.x-=i,s.y-=i,s.z-=i,r.x+=i,r.y+=i,r.z+=i),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new Ot().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound,r=i.x<=n.x&&n.x<=s.x||t.x<=s.x&&s.x<=n.x,o=i.y<=n.y&&n.y<=s.y||t.y<=s.y&&s.y<=n.y,a=i.z<=n.z&&n.z<=s.z||t.z<=s.z&&s.z<=n.z;return r&&o&&a}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound;return t.x<=i.x&&n.x>=s.x&&t.y<=i.y&&n.y>=s.y&&t.z<=i.z&&n.z>=s.z}getCorners(e,t,n,i,s,r,o,a){const l=this.lowerBound,h=this.upperBound;e.copy(l),t.set(h.x,l.y,l.z),n.set(h.x,h.y,l.z),i.set(l.x,h.y,h.z),s.set(h.x,l.y,h.z),r.set(l.x,h.y,l.z),o.set(l.x,l.y,h.z),a.copy(h)}toLocalFrame(e,t){const n=El,i=n[0],s=n[1],r=n[2],o=n[3],a=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,s,r,o,a,l,h,d);for(let u=0;u!==8;u++){const f=n[u];e.pointToLocal(f,f)}return t.setFromPoints(n)}toWorldFrame(e,t){const n=El,i=n[0],s=n[1],r=n[2],o=n[3],a=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,s,r,o,a,l,h,d);for(let u=0;u!==8;u++){const f=n[u];e.pointToWorld(f,f)}return t.setFromPoints(n)}overlapsRay(e){const{direction:t,from:n}=e,i=1/t.x,s=1/t.y,r=1/t.z,o=(this.lowerBound.x-n.x)*i,a=(this.upperBound.x-n.x)*i,l=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*r,u=(this.upperBound.z-n.z)*r,f=Math.max(Math.max(Math.min(o,a),Math.min(l,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(o,a),Math.max(l,h)),Math.max(d,u));return!(g<0||f>g)}}const Tl=new M,El=[new M,new M,new M,new M,new M,new M,new M,new M];class Al{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:i}=t;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(e,t,n){let{index:i}=e,{index:s}=t;if(s>i){const r=s;s=i,i=r}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class Lc{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const n=this._listeners;if(n[e]===void 0)return this;const i=n[e].indexOf(t);return i!==-1&&n[e].splice(i,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,e)}return this}}class Qe{constructor(e,t,n,i){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new M),this.normalize();const t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const n=A0,i=C0;e.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new Qe);const n=this.x,i=this.y,s=this.z,r=this.w,o=e.x,a=e.y,l=e.z,h=e.w;return t.x=n*h+r*o+i*l-s*a,t.y=i*h+r*a+s*o-n*l,t.z=s*h+r*l+n*a-i*o,t.w=r*h-n*o-i*a-s*l,t}inverse(e){e===void 0&&(e=new Qe);const t=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(e);const r=1/(t*t+n*n+i*i+s*s);return e.x*=r,e.y*=r,e.z*=r,e.w*=r,e}conjugate(e){return e===void 0&&(e=new Qe),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new M);const n=e.x,i=e.y,s=e.z,r=this.x,o=this.y,a=this.z,l=this.w,h=l*n+o*s-a*i,d=l*i+a*n-r*s,u=l*s+r*i-o*n,f=-r*n-o*i-a*s;return t.x=h*l+f*-r+d*-a-u*-o,t.y=d*l+f*-o+u*-r-h*-a,t.z=u*l+f*-a+h*-o-d*-r,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,i,s;const r=this.x,o=this.y,a=this.z,l=this.w;switch(t){case"YZX":const h=r*o+a*l;if(h>.499&&(n=2*Math.atan2(r,l),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(r,l),i=-Math.PI/2,s=0),n===void 0){const d=r*r,u=o*o,f=a*a;n=Math.atan2(2*o*l-2*r*a,1-2*u-2*f),i=Math.asin(2*h),s=Math.atan2(2*r*l-2*o*a,1-2*d-2*f)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=i,e.x=s}setFromEuler(e,t,n,i){i===void 0&&(i="XYZ");const s=Math.cos(e/2),r=Math.cos(t/2),o=Math.cos(n/2),a=Math.sin(e/2),l=Math.sin(t/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=a*r*o+s*l*h,this.y=s*l*o-a*r*h,this.z=s*r*h+a*l*o,this.w=s*r*o-a*l*h):i==="YXZ"?(this.x=a*r*o+s*l*h,this.y=s*l*o-a*r*h,this.z=s*r*h-a*l*o,this.w=s*r*o+a*l*h):i==="ZXY"?(this.x=a*r*o-s*l*h,this.y=s*l*o+a*r*h,this.z=s*r*h+a*l*o,this.w=s*r*o-a*l*h):i==="ZYX"?(this.x=a*r*o-s*l*h,this.y=s*l*o+a*r*h,this.z=s*r*h-a*l*o,this.w=s*r*o+a*l*h):i==="YZX"?(this.x=a*r*o+s*l*h,this.y=s*l*o+a*r*h,this.z=s*r*h-a*l*o,this.w=s*r*o-a*l*h):i==="XZY"&&(this.x=a*r*o-s*l*h,this.y=s*l*o-a*r*h,this.z=s*r*h+a*l*o,this.w=s*r*o+a*l*h),this}clone(){return new Qe(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new Qe);const i=this.x,s=this.y,r=this.z,o=this.w;let a=e.x,l=e.y,h=e.z,d=e.w,u,f,g,m,p;return f=i*a+s*l+r*h+o*d,f<0&&(f=-f,a=-a,l=-l,h=-h,d=-d),1-f>1e-6?(u=Math.acos(f),g=Math.sin(u),m=Math.sin((1-t)*u)/g,p=Math.sin(t*u)/g):(m=1-t,p=t),n.x=m*i+p*a,n.y=m*s+p*l,n.z=m*r+p*h,n.w=m*o+p*d,n}integrate(e,t,n,i){i===void 0&&(i=new Qe);const s=e.x*n.x,r=e.y*n.y,o=e.z*n.z,a=this.x,l=this.y,h=this.z,d=this.w,u=t*.5;return i.x+=u*(s*d+r*h-o*l),i.y+=u*(r*d+o*a-s*h),i.z+=u*(o*d+s*l-r*a),i.w+=u*(-s*a-r*l-o*h),i}}const A0=new M,C0=new M,L0={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class se{constructor(e){e===void 0&&(e={}),this.id=se.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}se.idCounter=0;se.types=L0;class Ue{constructor(e){e===void 0&&(e={}),this.position=new M,this.quaternion=new Qe,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return Ue.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return Ue.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,i){return i===void 0&&(i=new M),n.vsub(e,i),t.conjugate(Cl),Cl.vmult(i,i),i}static pointToWorldFrame(e,t,n,i){return i===void 0&&(i=new M),t.vmult(n,i),i.vadd(e,i),i}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new M),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,i){return i===void 0&&(i=new M),t.w*=-1,t.vmult(n,i),t.w*=-1,i}}const Cl=new Qe;class gs extends se{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:r}=e;super({type:se.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),r?this.boundingSphereRadius=r:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;const i=new M;for(let s=0;s!==e.length;s++){const r=e[s],o=r.length;for(let a=0;a!==o;a++){const l=(a+1)%o;t[r[a]].vsub(t[r[l]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let i=0;i<this.faces[e].length;i++)if(!this.vertices[this.faces[e][i]])throw new Error(`Vertex ${this.faces[e][i]} not found!`);const t=this.faceNormals[e]||new M;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[e].length;i++)console.warn(`.vertices[${this.faces[e][i]}] = Vec3(${this.vertices[this.faces[e][i]].toString()})`)}}}getFaceNormal(e,t){const n=this.faces[e],i=this.vertices[n[0]],s=this.vertices[n[1]],r=this.vertices[n[2]];gs.computeNormal(i,s,r,t)}static computeNormal(e,t,n,i){const s=new M,r=new M;t.vsub(e,r),n.vsub(t,s),s.cross(r,i),i.isZero()||i.normalize()}clipAgainstHull(e,t,n,i,s,r,o,a,l){const h=new M;let d=-1,u=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),s.vmult(h,h);const m=h.dot(r);m>u&&(u=m,d=g)}const f=[];for(let g=0;g<n.faces[d].length;g++){const m=n.vertices[n.faces[d][g]],p=new M;p.copy(m),s.vmult(p,p),i.vadd(p,p),f.push(p)}d>=0&&this.clipFaceAgainstHull(r,e,t,f,o,a,l)}findSeparatingAxis(e,t,n,i,s,r,o,a){const l=new M,h=new M,d=new M,u=new M,f=new M,g=new M;let m=Number.MAX_VALUE;const p=this;if(p.uniqueAxes)for(let _=0;_!==p.uniqueAxes.length;_++){n.vmult(p.uniqueAxes[_],l);const x=p.testSepAxis(l,e,t,n,i,s);if(x===!1)return!1;x<m&&(m=x,r.copy(l))}else{const _=o?o.length:p.faces.length;for(let x=0;x<_;x++){const v=o?o[x]:x;l.copy(p.faceNormals[v]),n.vmult(l,l);const b=p.testSepAxis(l,e,t,n,i,s);if(b===!1)return!1;b<m&&(m=b,r.copy(l))}}if(e.uniqueAxes)for(let _=0;_!==e.uniqueAxes.length;_++){s.vmult(e.uniqueAxes[_],h);const x=p.testSepAxis(h,e,t,n,i,s);if(x===!1)return!1;x<m&&(m=x,r.copy(h))}else{const _=a?a.length:e.faces.length;for(let x=0;x<_;x++){const v=a?a[x]:x;h.copy(e.faceNormals[v]),s.vmult(h,h);const b=p.testSepAxis(h,e,t,n,i,s);if(b===!1)return!1;b<m&&(m=b,r.copy(h))}}for(let _=0;_!==p.uniqueEdges.length;_++){n.vmult(p.uniqueEdges[_],u);for(let x=0;x!==e.uniqueEdges.length;x++)if(s.vmult(e.uniqueEdges[x],f),u.cross(f,g),!g.almostZero()){g.normalize();const v=p.testSepAxis(g,e,t,n,i,s);if(v===!1)return!1;v<m&&(m=v,r.copy(g))}}return i.vsub(t,d),d.dot(r)>0&&r.negate(r),!0}testSepAxis(e,t,n,i,s,r){const o=this;gs.project(o,e,n,i,$r),gs.project(t,e,s,r,Zr);const a=$r[0],l=$r[1],h=Zr[0],d=Zr[1];if(a<d||h<l)return!1;const u=a-d,f=h-l;return u<f?u:f}calculateLocalInertia(e,t){const n=new M,i=new M;this.computeLocalAABB(i,n);const s=n.x-i.x,r=n.y-i.y,o=n.z-i.z;t.x=1/12*e*(2*r*2*r+2*o*2*o),t.y=1/12*e*(2*s*2*s+2*o*2*o),t.z=1/12*e*(2*r*2*r+2*s*2*s)}getPlaneConstantOfFace(e){const t=this.faces[e],n=this.faceNormals[e],i=this.vertices[t[0]];return-n.dot(i)}clipFaceAgainstHull(e,t,n,i,s,r,o){const a=new M,l=new M,h=new M,d=new M,u=new M,f=new M,g=new M,m=new M,p=this,_=[],x=i,v=_;let b=-1,w=Number.MAX_VALUE;for(let P=0;P<p.faces.length;P++){a.copy(p.faceNormals[P]),n.vmult(a,a);const U=a.dot(e);U<w&&(w=U,b=P)}if(b<0)return;const E=p.faces[b];E.connectedFaces=[];for(let P=0;P<p.faces.length;P++)for(let U=0;U<p.faces[P].length;U++)E.indexOf(p.faces[P][U])!==-1&&P!==b&&E.connectedFaces.indexOf(P)===-1&&E.connectedFaces.push(P);const I=E.length;for(let P=0;P<I;P++){const U=p.vertices[E[P]],F=p.vertices[E[(P+1)%I]];U.vsub(F,l),h.copy(l),n.vmult(h,h),t.vadd(h,h),d.copy(this.faceNormals[b]),n.vmult(d,d),t.vadd(d,d),h.cross(d,u),u.negate(u),f.copy(U),n.vmult(f,f),t.vadd(f,f);const A=E.connectedFaces[P];g.copy(this.faceNormals[A]);const L=this.getPlaneConstantOfFace(A);m.copy(g),n.vmult(m,m);const D=L-m.dot(t);for(this.clipFaceAgainstPlane(x,v,m,D);x.length;)x.shift();for(;v.length;)x.push(v.shift())}g.copy(this.faceNormals[b]);const y=this.getPlaneConstantOfFace(b);m.copy(g),n.vmult(m,m);const S=y-m.dot(t);for(let P=0;P<x.length;P++){let U=m.dot(x[P])+S;if(U<=s&&(console.log(`clamped: depth=${U} to minDist=${s}`),U=s),U<=r){const F=x[P];if(U<=1e-6){const A={point:F,normal:m,depth:U};o.push(A)}}}}clipFaceAgainstPlane(e,t,n,i){let s,r;const o=e.length;if(o<2)return t;let a=e[e.length-1],l=e[0];s=n.dot(a)+i;for(let h=0;h<o;h++){if(l=e[h],r=n.dot(l)+i,s<0)if(r<0){const d=new M;d.copy(l),t.push(d)}else{const d=new M;a.lerp(l,s/(s-r),d),t.push(d)}else if(r<0){const d=new M;a.lerp(l,s/(s-r),d),t.push(d),t.push(l)}a=l,s=r}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new M);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)t.vmult(n[s],i[s]),e.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<e.x?e.x=s.x:s.x>t.x&&(t.x=s.x),s.y<e.y?e.y=s.y:s.y>t.y&&(t.y=s.y),s.z<e.z?e.z=s.z:s.z>t.z&&(t.z=s.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new M);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==t;s++)e.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let n=0;n!==t.length;n++){const i=t[n].lengthSquared();i>e&&(e=i)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const s=this.vertices;let r,o,a,l,h,d,u=new M;for(let f=0;f<s.length;f++){u.copy(s[f]),t.vmult(u,u),e.vadd(u,u);const g=u;(r===void 0||g.x<r)&&(r=g.x),(l===void 0||g.x>l)&&(l=g.x),(o===void 0||g.y<o)&&(o=g.y),(h===void 0||g.y>h)&&(h=g.y),(a===void 0||g.z<a)&&(a=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(r,o,a),i.set(l,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new M);const t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const n=this.vertices.length,i=this.vertices;if(t){for(let s=0;s<n;s++){const r=i[s];t.vmult(r,r)}for(let s=0;s<this.faceNormals.length;s++){const r=this.faceNormals[s];t.vmult(r,r)}}if(e)for(let s=0;s<n;s++){const r=i[s];r.vadd(e,r)}}pointIsInside(e){const t=this.vertices,n=this.faces,i=this.faceNormals,s=null,r=new M;this.getAveragePointLocal(r);for(let o=0;o<this.faces.length;o++){let a=i[o];const l=t[n[o][0]],h=new M;e.vsub(l,h);const d=a.dot(h),u=new M;r.vsub(l,u);const f=a.dot(u);if(d<0&&f>0||d>0&&f<0)return!1}return s?1:-1}static project(e,t,n,i,s){const r=e.vertices.length,o=R0;let a=0,l=0;const h=P0,d=e.vertices;h.setZero(),Ue.vectorToLocalFrame(n,i,t,o),Ue.pointToLocalFrame(n,i,h,h);const u=h.dot(o);l=a=d[0].dot(o);for(let f=1;f<r;f++){const g=d[f].dot(o);g>a&&(a=g),g<l&&(l=g)}if(l-=u,a-=u,l>a){const f=l;l=a,a=f}s[0]=a,s[1]=l}}const $r=[],Zr=[];new M;const R0=new M,P0=new M;class zi extends se{constructor(e){super({type:se.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,i=M,s=[new i(-e,-t,-n),new i(e,-t,-n),new i(e,t,-n),new i(-e,t,-n),new i(-e,-t,n),new i(e,-t,n),new i(e,t,n),new i(-e,t,n)],r=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],o=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],a=new gs({vertices:s,faces:r,axes:o});this.convexPolyhedronRepresentation=a,a.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new M),zi.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){const i=e;n.x=1/12*t*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*t*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*t*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(e,t){const n=e,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),t!==void 0)for(let s=0;s!==n.length;s++)t.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let r=0;r<s.length;r++)Bn.set(s[r][0],s[r][1],s[r][2]),t.vmult(Bn,Bn),e.vadd(Bn,Bn),n(Bn.x,Bn.y,Bn.z)}calculateWorldAABB(e,t,n,i){const s=this.halfExtents;an[0].set(s.x,s.y,s.z),an[1].set(-s.x,s.y,s.z),an[2].set(-s.x,-s.y,s.z),an[3].set(-s.x,-s.y,-s.z),an[4].set(s.x,-s.y,-s.z),an[5].set(s.x,s.y,-s.z),an[6].set(-s.x,s.y,-s.z),an[7].set(s.x,-s.y,s.z);const r=an[0];t.vmult(r,r),e.vadd(r,r),i.copy(r),n.copy(r);for(let o=1;o<8;o++){const a=an[o];t.vmult(a,a),e.vadd(a,a);const l=a.x,h=a.y,d=a.z;l>i.x&&(i.x=l),h>i.y&&(i.y=h),d>i.z&&(i.z=d),l<n.x&&(n.x=l),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const Bn=new M,an=[new M,new M,new M,new M,new M,new M,new M,new M],Po={DYNAMIC:1,STATIC:2,KINEMATIC:4},Io={AWAKE:0,SLEEPY:1,SLEEPING:2};class ae extends Lc{constructor(e){e===void 0&&(e={}),super(),this.id=ae.idCounter++,this.index=-1,this.world=null,this.vlambda=new M,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new M,this.previousPosition=new M,this.interpolatedPosition=new M,this.initPosition=new M,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new M,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new M,this.force=new M;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?ae.STATIC:ae.DYNAMIC,typeof e.type==typeof ae.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=ae.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new M,this.quaternion=new Qe,this.initQuaternion=new Qe,this.previousQuaternion=new Qe,this.interpolatedQuaternion=new Qe,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new M,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new M,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new M,this.invInertia=new M,this.invInertiaWorld=new en,this.invMassSolve=0,this.invInertiaSolve=new M,this.invInertiaWorldSolve=new en,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new M(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new M(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new Ot,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new M,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=ae.AWAKE,this.wakeUpAfterNarrowphase=!1,e===ae.SLEEPING&&this.dispatchEvent(ae.wakeupEvent)}sleep(){this.sleepState=ae.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;t===ae.AWAKE&&n<i?(this.sleepState=ae.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(ae.sleepyEvent)):t===ae.SLEEPY&&n>i?this.wakeUp():t===ae.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(ae.sleepEvent))}}updateSolveMassProperties(){this.sleepState===ae.SLEEPING||this.type===ae.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new M),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new M),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t}addShape(e,t,n){const i=new M,s=new Qe;return t&&i.copy(t),n&&s.copy(n),this.shapes.push(e),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,n=e.length;let i=0;for(let s=0;s!==n;s++){const r=e[s];r.updateBoundingSphereRadius();const o=t[s].length(),a=r.boundingSphereRadius;o+a>i&&(i=o+a)}this.boundingRadius=i}updateAABB(){const e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,i=e.length,s=I0,r=D0,o=this.quaternion,a=this.aabb,l=N0;for(let h=0;h!==i;h++){const d=e[h];o.vmult(t[h],s),s.vadd(this.position,s),o.mult(n[h],r),d.calculateWorldAABB(s,r,l.lowerBound,l.upperBound),h===0?a.copy(l):a.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const n=F0,i=z0;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(t,n),n.mmult(i,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new M),this.type!==ae.DYNAMIC)return;this.sleepState===ae.SLEEPING&&this.wakeUp();const n=O0;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new M),this.type!==ae.DYNAMIC)return;const n=U0,i=k0;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyForce(n,i)}applyTorque(e){this.type===ae.DYNAMIC&&(this.sleepState===ae.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new M),this.type!==ae.DYNAMIC)return;this.sleepState===ae.SLEEPING&&this.wakeUp();const n=t,i=G0;i.copy(e),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=V0;n.cross(e,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new M),this.type!==ae.DYNAMIC)return;const n=H0,i=W0;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyImpulse(n,i)}updateMassProperties(){const e=q0;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),zi.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const n=new M;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===ae.DYNAMIC||this.type===ae.KINEMATIC)||this.sleepState===ae.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,r=this.position,o=this.force,a=this.torque,l=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,f=h*e;i.x+=o.x*f*u.x,i.y+=o.y*f*u.y,i.z+=o.z*f*u.z;const g=d.elements,m=this.angularFactor,p=a.x*m.x,_=a.y*m.y,x=a.z*m.z;s.x+=e*(g[0]*p+g[1]*_+g[2]*x),s.y+=e*(g[3]*p+g[4]*_+g[5]*x),s.z+=e*(g[6]*p+g[7]*_+g[8]*x),r.x+=i.x*e,r.y+=i.y*e,r.z+=i.z*e,l.integrate(this.angularVelocity,e,this.angularFactor,l),t&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}ae.idCounter=0;ae.COLLIDE_EVENT_NAME="collide";ae.DYNAMIC=Po.DYNAMIC;ae.STATIC=Po.STATIC;ae.KINEMATIC=Po.KINEMATIC;ae.AWAKE=Io.AWAKE;ae.SLEEPY=Io.SLEEPY;ae.SLEEPING=Io.SLEEPING;ae.wakeupEvent={type:"wakeup"};ae.sleepyEvent={type:"sleepy"};ae.sleepEvent={type:"sleep"};const I0=new M,D0=new Qe,N0=new Ot,F0=new en,z0=new en,B0=new en,O0=new M,U0=new M,k0=new M,G0=new M,V0=new M,H0=new M,W0=new M,q0=new M;class Rc{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!(!(e.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&e.collisionFilterMask)||(e.type&ae.STATIC||e.sleepState===ae.SLEEPING)&&(t.type&ae.STATIC||t.sleepState===ae.SLEEPING))}intersectionTest(e,t,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,i):this.doBoundingSphereBroadphase(e,t,n,i)}doBoundingSphereBroadphase(e,t,n,i){const s=j0;t.position.vsub(e.position,s);const r=(e.boundingRadius+t.boundingRadius)**2;s.lengthSquared()<r&&(n.push(e),i.push(t))}doBoundingBoxBroadphase(e,t,n,i){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),i.push(t))}makePairsUnique(e,t){const n=X0,i=Y0,s=K0,r=e.length;for(let o=0;o!==r;o++)i[o]=e[o],s[o]=t[o];e.length=0,t.length=0;for(let o=0;o!==r;o++){const a=i[o].id,l=s[o].id,h=a<l?`${a},${l}`:`${l},${a}`;n[h]=o,n.keys.push(h)}for(let o=0;o!==n.keys.length;o++){const a=n.keys.pop(),l=n[a];e.push(i[l]),t.push(s[l]),delete n[a]}}setWorld(e){}static boundingSphereCheck(e,t){const n=new M;e.position.vsub(t.position,n);const i=e.shapes[0],s=t.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const j0=new M;new M;new Qe;new M;const X0={keys:[]},Y0=[],K0=[];new M;new M;new M;class $0 extends Rc{constructor(){super()}collisionPairs(e,t,n){const i=e.bodies,s=i.length;let r,o;for(let a=0;a!==s;a++)for(let l=0;l!==a;l++)r=i[a],o=i[l],this.needBroadphaseCollision(r,o)&&this.intersectionTest(r,o,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let i=0;i<e.bodies.length;i++){const s=e.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(t)&&n.push(s)}return n}}class sr{constructor(){this.rayFromWorld=new M,this.rayToWorld=new M,this.hitNormalWorld=new M,this.hitPointWorld=new M,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,i,s,r,o){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=r,this.distance=o}}let Pc,Ic,Dc,Nc,Fc,zc,Bc;const Do={CLOSEST:1,ANY:2,ALL:4};Pc=se.types.SPHERE;Ic=se.types.PLANE;Dc=se.types.BOX;Nc=se.types.CYLINDER;Fc=se.types.CONVEXPOLYHEDRON;zc=se.types.HEIGHTFIELD;Bc=se.types.TRIMESH;class it{get[Pc](){return this._intersectSphere}get[Ic](){return this._intersectPlane}get[Dc](){return this._intersectBox}get[Nc](){return this._intersectConvex}get[Fc](){return this._intersectConvex}get[zc](){return this._intersectHeightfield}get[Bc](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new M),t===void 0&&(t=new M),this.from=e.clone(),this.to=t.clone(),this.direction=new M,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=it.ANY,this.result=new sr,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||it.ANY,this.result=t.result||new sr,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Ll),Jr.length=0,e.broadphase.aabbQuery(e,Ll,Jr),this.intersectBodies(Jr),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!e.collisionResponse||!(this.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&this.collisionFilterMask))return;const i=Z0,s=J0;for(let r=0,o=e.shapes.length;r<o;r++){const a=e.shapes[r];if(!(n&&!a.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[r],s),e.quaternion.vmult(e.shapeOffsets[r],i),i.vadd(e.position,i),this.intersectShape(a,s,i,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,i=e.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,i){const s=this.from;if(d_(s,this.direction,n)>e.boundingSphereRadius)return;const o=this[e.type];o&&o.call(this,e,t,n,i,e)}_intersectBox(e,t,n,i,s){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,i,s)}_intersectPlane(e,t,n,i,s){const r=this.from,o=this.to,a=this.direction,l=new M(0,0,1);t.vmult(l,l);const h=new M;r.vsub(n,h);const d=h.dot(l);o.vsub(n,h);const u=h.dot(l);if(d*u>0||r.distanceTo(o)<d)return;const f=l.dot(a);if(Math.abs(f)<this.precision)return;const g=new M,m=new M,p=new M;r.vsub(n,g);const _=-l.dot(g)/f;a.scale(_,m),r.vadd(m,p),this.reportIntersection(l,p,s,i,-1)}getAABB(e){const{lowerBound:t,upperBound:n}=e,i=this.to,s=this.from;t.x=Math.min(i.x,s.x),t.y=Math.min(i.y,s.y),t.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(e,t,n,i,s){e.data,e.elementSize;const r=Q0;r.from.copy(this.from),r.to.copy(this.to),Ue.pointToLocalFrame(n,t,r.from,r.from),Ue.pointToLocalFrame(n,t,r.to,r.to),r.updateDirection();const o=e_;let a,l,h,d;a=l=0,h=d=e.data.length-1;const u=new Ot;r.getAABB(u),e.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,o,!0),a=Math.max(a,o[0]),l=Math.max(l,o[1]),e.getIndexOfPosition(u.upperBound.x,u.upperBound.y,o,!0),h=Math.min(h,o[0]+1),d=Math.min(d,o[1]+1);for(let f=a;f<h;f++)for(let g=l;g<d;g++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(f,g,u),!!u.overlapsRay(r)){if(e.getConvexTrianglePillar(f,g,!1),Ue.pointToWorldFrame(n,t,e.pillarOffset,Ys),this._intersectConvex(e.pillarConvex,t,Ys,i,s,Rl),this.result.shouldStop)return;e.getConvexTrianglePillar(f,g,!0),Ue.pointToWorldFrame(n,t,e.pillarOffset,Ys),this._intersectConvex(e.pillarConvex,t,Ys,i,s,Rl)}}}_intersectSphere(e,t,n,i,s){const r=this.from,o=this.to,a=e.radius,l=(o.x-r.x)**2+(o.y-r.y)**2+(o.z-r.z)**2,h=2*((o.x-r.x)*(r.x-n.x)+(o.y-r.y)*(r.y-n.y)+(o.z-r.z)*(r.z-n.z)),d=(r.x-n.x)**2+(r.y-n.y)**2+(r.z-n.z)**2-a**2,u=h**2-4*l*d,f=t_,g=n_;if(!(u<0))if(u===0)r.lerp(o,u,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1);else{const m=(-h-Math.sqrt(u))/(2*l),p=(-h+Math.sqrt(u))/(2*l);if(m>=0&&m<=1&&(r.lerp(o,m,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1)),this.result.shouldStop)return;p>=0&&p<=1&&(r.lerp(o,p,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1))}}_intersectConvex(e,t,n,i,s,r){const o=i_,a=Pl,l=r&&r.faceList||null,h=e.faces,d=e.vertices,u=e.faceNormals,f=this.direction,g=this.from,m=this.to,p=g.distanceTo(m),_=l?l.length:h.length,x=this.result;for(let v=0;!x.shouldStop&&v<_;v++){const b=l?l[v]:v,w=h[b],E=u[b],I=t,y=n;a.copy(d[w[0]]),I.vmult(a,a),a.vadd(y,a),a.vsub(g,a),I.vmult(E,o);const S=f.dot(o);if(Math.abs(S)<this.precision)continue;const P=o.dot(a)/S;if(!(P<0)){f.scale(P,Rt),Rt.vadd(g,Rt),Kt.copy(d[w[0]]),I.vmult(Kt,Kt),y.vadd(Kt,Kt);for(let U=1;!x.shouldStop&&U<w.length-1;U++){ln.copy(d[w[U]]),cn.copy(d[w[U+1]]),I.vmult(ln,ln),I.vmult(cn,cn),y.vadd(ln,ln),y.vadd(cn,cn);const F=Rt.distanceTo(g);!(it.pointInTriangle(Rt,Kt,ln,cn)||it.pointInTriangle(Rt,ln,Kt,cn))||F>p||this.reportIntersection(o,Rt,s,i,b)}}}}_intersectTrimesh(e,t,n,i,s,r){const o=s_,a=h_,l=u_,h=Pl,d=r_,u=o_,f=a_,g=c_,m=l_,p=e.indices;e.vertices;const _=this.from,x=this.to,v=this.direction;l.position.copy(n),l.quaternion.copy(t),Ue.vectorToLocalFrame(n,t,v,d),Ue.pointToLocalFrame(n,t,_,u),Ue.pointToLocalFrame(n,t,x,f),f.x*=e.scale.x,f.y*=e.scale.y,f.z*=e.scale.z,u.x*=e.scale.x,u.y*=e.scale.y,u.z*=e.scale.z,f.vsub(u,d),d.normalize();const b=u.distanceSquared(f);e.tree.rayQuery(this,l,a);for(let w=0,E=a.length;!this.result.shouldStop&&w!==E;w++){const I=a[w];e.getNormal(I,o),e.getVertex(p[I*3],Kt),Kt.vsub(u,h);const y=d.dot(o),S=o.dot(h)/y;if(S<0)continue;d.scale(S,Rt),Rt.vadd(u,Rt),e.getVertex(p[I*3+1],ln),e.getVertex(p[I*3+2],cn);const P=Rt.distanceSquared(u);!(it.pointInTriangle(Rt,ln,Kt,cn)||it.pointInTriangle(Rt,Kt,ln,cn))||P>b||(Ue.vectorToWorldFrame(t,o,m),Ue.pointToWorldFrame(n,t,Rt,g),this.reportIntersection(m,g,s,i,I))}a.length=0}reportIntersection(e,t,n,i,s){const r=this.from,o=this.to,a=r.distanceTo(t),l=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(l.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case it.ALL:this.hasHit=!0,l.set(r,o,e,t,n,i,a),l.hasHit=!0,this.callback(l);break;case it.CLOSEST:(a<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(r,o,e,t,n,i,a));break;case it.ANY:this.hasHit=!0,l.hasHit=!0,l.set(r,o,e,t,n,i,a),l.shouldStop=!0;break}}static pointInTriangle(e,t,n,i){i.vsub(t,ti),n.vsub(t,ls),e.vsub(t,Qr);const s=ti.dot(ti),r=ti.dot(ls),o=ti.dot(Qr),a=ls.dot(ls),l=ls.dot(Qr);let h,d;return(h=a*o-r*l)>=0&&(d=s*l-r*o)>=0&&h+d<s*a-r*r}}it.CLOSEST=Do.CLOSEST;it.ANY=Do.ANY;it.ALL=Do.ALL;const Ll=new Ot,Jr=[],ls=new M,Qr=new M,Z0=new M,J0=new Qe,Rt=new M,Kt=new M,ln=new M,cn=new M;new M;new sr;const Rl={faceList:[0]},Ys=new M,Q0=new it,e_=[],t_=new M,n_=new M,i_=new M;new M;new M;const Pl=new M,s_=new M,r_=new M,o_=new M,a_=new M,l_=new M,c_=new M;new Ot;const h_=[],u_=new Ue,ti=new M,Ks=new M;function d_(c,e,t){t.vsub(c,ti);const n=ti.dot(e);return e.scale(n,Ks),Ks.vadd(c,Ks),t.distanceTo(Ks)}class Pi extends Rc{static checkBounds(e,t,n){let i,s;n===0?(i=e.position.x,s=t.position.x):n===1?(i=e.position.y,s=t.position.y):n===2&&(i=e.position.z,s=t.position.z);const r=e.boundingRadius,o=t.boundingRadius,a=i+r;return s-o<a}static insertionSortX(e){for(let t=1,n=e.length;t<n;t++){const i=e[t];let s;for(s=t-1;s>=0&&!(e[s].aabb.lowerBound.x<=i.aabb.lowerBound.x);s--)e[s+1]=e[s];e[s+1]=i}return e}static insertionSortY(e){for(let t=1,n=e.length;t<n;t++){const i=e[t];let s;for(s=t-1;s>=0&&!(e[s].aabb.lowerBound.y<=i.aabb.lowerBound.y);s--)e[s+1]=e[s];e[s+1]=i}return e}static insertionSortZ(e){for(let t=1,n=e.length;t<n;t++){const i=e[t];let s;for(s=t-1;s>=0&&!(e[s].aabb.lowerBound.z<=i.aabb.lowerBound.z);s--)e[s+1]=e[s];e[s+1]=i}return e}constructor(e){super(),this.axisList=[],this.world=null,this.axisIndex=0;const t=this.axisList;this._addBodyHandler=n=>{t.push(n.body)},this._removeBodyHandler=n=>{const i=t.indexOf(n.body);i!==-1&&t.splice(i,1)},e&&this.setWorld(e)}setWorld(e){this.axisList.length=0;for(let t=0;t<e.bodies.length;t++)this.axisList.push(e.bodies[t]);e.removeEventListener("addBody",this._addBodyHandler),e.removeEventListener("removeBody",this._removeBodyHandler),e.addEventListener("addBody",this._addBodyHandler),e.addEventListener("removeBody",this._removeBodyHandler),this.world=e,this.dirty=!0}collisionPairs(e,t,n){const i=this.axisList,s=i.length,r=this.axisIndex;let o,a;for(this.dirty&&(this.sortList(),this.dirty=!1),o=0;o!==s;o++){const l=i[o];for(a=o+1;a<s;a++){const h=i[a];if(this.needBroadphaseCollision(l,h)){if(!Pi.checkBounds(l,h,r))break;this.intersectionTest(l,h,t,n)}}}}sortList(){const e=this.axisList,t=this.axisIndex,n=e.length;for(let i=0;i!==n;i++){const s=e[i];s.aabbNeedsUpdate&&s.updateAABB()}t===0?Pi.insertionSortX(e):t===1?Pi.insertionSortY(e):t===2&&Pi.insertionSortZ(e)}autoDetectAxis(){let e=0,t=0,n=0,i=0,s=0,r=0;const o=this.axisList,a=o.length,l=1/a;for(let f=0;f!==a;f++){const g=o[f],m=g.position.x;e+=m,t+=m*m;const p=g.position.y;n+=p,i+=p*p;const _=g.position.z;s+=_,r+=_*_}const h=t-e*e*l,d=i-n*n*l,u=r-s*s*l;h>d?h>u?this.axisIndex=0:this.axisIndex=2:d>u?this.axisIndex=1:this.axisIndex=2}aabbQuery(e,t,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);const i=this.axisIndex;let s="x";i===1&&(s="y"),i===2&&(s="z");const r=this.axisList;t.lowerBound[s],t.upperBound[s];for(let o=0;o<r.length;o++){const a=r[o];a.aabbNeedsUpdate&&a.updateAABB(),a.aabb.overlaps(t)&&n.push(a)}return n}}class f_{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}}class Il{constructor(){this.spatial=new M,this.rotational=new M}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class Ss{constructor(e,t,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Ss.idCounter++,this.minForce=n,this.maxForce=i,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Il,this.jacobianElementB=new Il,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){const i=t,s=e,r=n;this.a=4/(r*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(r*r*s*(1+4*i))}computeB(e,t,n){const i=this.computeGW(),s=this.computeGq(),r=this.computeGiMf();return-s*e-i*t-r*n}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,r=i.position;return e.spatial.dot(s)+t.spatial.dot(r)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,r=i.velocity,o=n.angularVelocity,a=i.angularVelocity;return e.multiplyVectors(s,o)+t.multiplyVectors(r,a)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,r=i.vlambda,o=n.wlambda,a=i.wlambda;return e.multiplyVectors(s,o)+t.multiplyVectors(r,a)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,r=n.torque,o=i.force,a=i.torque,l=n.invMassSolve,h=i.invMassSolve;return s.scale(l,Dl),o.scale(h,Nl),n.invInertiaWorldSolve.vmult(r,Fl),i.invInertiaWorldSolve.vmult(a,zl),e.multiplyVectors(Dl,Fl)+t.multiplyVectors(Nl,zl)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,r=i.invMassSolve,o=n.invInertiaWorldSolve,a=i.invInertiaWorldSolve;let l=s+r;return o.vmult(e.rotational,$s),l+=$s.dot(e.rotational),a.vmult(t.rotational,$s),l+=$s.dot(t.rotational),l}addToWlambda(e){const t=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,r=p_;i.vlambda.addScaledVector(i.invMassSolve*e,t.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*e,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(t.rotational,r),i.wlambda.addScaledVector(e,r,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,r),s.wlambda.addScaledVector(e,r,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Ss.idCounter=0;const Dl=new M,Nl=new M,Fl=new M,zl=new M,$s=new M,p_=new M;class m_ extends Ss{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new M,this.rj=new M,this.ni=new M}computeB(e){const t=this.a,n=this.b,i=this.bi,s=this.bj,r=this.ri,o=this.rj,a=g_,l=__,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=s.velocity,f=s.angularVelocity;s.force,s.torque;const g=x_,m=this.jacobianElementA,p=this.jacobianElementB,_=this.ni;r.cross(_,a),o.cross(_,l),_.negate(m.spatial),a.negate(m.rotational),p.spatial.copy(_),p.rotational.copy(l),g.copy(s.position),g.vadd(o,g),g.vsub(i.position,g),g.vsub(r,g);const x=_.dot(g),v=this.restitution+1,b=v*u.dot(_)-v*h.dot(_)+f.dot(l)-d.dot(a),w=this.computeGiMf();return-x*t-b*n-e*w}getImpactVelocityAlongNormal(){const e=v_,t=y_,n=b_,i=M_,s=w_;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(i,t),e.vsub(t,s),this.ni.dot(s)}}const g_=new M,__=new M,x_=new M,v_=new M,y_=new M,b_=new M,M_=new M,w_=new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class Bl extends Ss{constructor(e,t,n){super(e,t,-n,n),this.ri=new M,this.rj=new M,this.t=new M}computeB(e){this.a;const t=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=S_,r=T_,o=this.t;n.cross(o,s),i.cross(o,r);const a=this.jacobianElementA,l=this.jacobianElementB;o.negate(a.spatial),s.negate(a.rotational),l.spatial.copy(o),l.rotational.copy(r);const h=this.computeGW(),d=this.computeGiMf();return-h*t-e*d}}const S_=new M,T_=new M;class lr{constructor(e,t,n){n=f_.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=lr.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}lr.idCounter=0;class cr{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=cr.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}cr.idCounter=0;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new it;new M;new M;new M;new M(1,0,0),new M(0,1,0),new M(0,0,1);new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class E_ extends se{constructor(e){if(super({type:se.types.SPHERE}),this.radius=e!==void 0?e:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(e,t){t===void 0&&(t=new M);const n=2*e*this.radius*this.radius/5;return t.x=n,t.y=n,t.z=n,t}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(e,t,n,i){const s=this.radius,r=["x","y","z"];for(let o=0;o<r.length;o++){const a=r[o];n[a]=e[a]-s,i[a]=e[a]+s}}}new M;new M;new M;new M;new M;new M;new M;new M;new M;class A_ extends se{constructor(){super({type:se.types.PLANE}),this.worldNormal=new M,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(e){const t=this.worldNormal;t.set(0,0,1),e.vmult(t,t),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(e,t){return t===void 0&&(t=new M),t}volume(){return Number.MAX_VALUE}calculateWorldAABB(e,t,n,i){bn.set(0,0,1),t.vmult(bn,bn);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),bn.x===1?i.x=e.x:bn.x===-1&&(n.x=e.x),bn.y===1?i.y=e.y:bn.y===-1&&(n.y=e.y),bn.z===1?i.z=e.z:bn.z===-1&&(n.z=e.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const bn=new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new Ot;new M;new Ot;new M;new M;new M;new M;new M;new M;new M;new Ot;new M;new Ue;new Ot;class C_{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}}class L_ extends C_{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,r=this.equations,o=r.length,a=t.bodies,l=a.length,h=e;let d,u,f,g,m,p;if(o!==0)for(let b=0;b!==l;b++)a[b].updateSolveMassProperties();const _=P_,x=I_,v=R_;_.length=o,x.length=o,v.length=o;for(let b=0;b!==o;b++){const w=r[b];v[b]=0,x[b]=w.computeB(h),_[b]=1/w.computeC()}if(o!==0){for(let E=0;E!==l;E++){const I=a[E],y=I.vlambda,S=I.wlambda;y.set(0,0,0),S.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let E=0;E!==o;E++){const I=r[E];d=x[E],u=_[E],p=v[E],m=I.computeGWlambda(),f=u*(d-m-I.eps*p),p+f<I.minForce?f=I.minForce-p:p+f>I.maxForce&&(f=I.maxForce-p),v[E]+=f,g+=f>0?f:-f,I.addToWlambda(f)}if(g*g<s)break}for(let E=0;E!==l;E++){const I=a[E],y=I.velocity,S=I.angularVelocity;I.vlambda.vmul(I.linearFactor,I.vlambda),y.vadd(I.vlambda,y),I.wlambda.vmul(I.angularFactor,I.wlambda),S.vadd(I.wlambda,S)}let b=r.length;const w=1/h;for(;b--;)r[b].multiplier=v[b]*w}return n}}const R_=[],P_=[],I_=[];ae.STATIC;class D_{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class N_ extends D_{constructor(){super(...arguments),this.type=M}constructObject(){return new M}}const je={sphereSphere:se.types.SPHERE,spherePlane:se.types.SPHERE|se.types.PLANE,boxBox:se.types.BOX|se.types.BOX,sphereBox:se.types.SPHERE|se.types.BOX,planeBox:se.types.PLANE|se.types.BOX,convexConvex:se.types.CONVEXPOLYHEDRON,sphereConvex:se.types.SPHERE|se.types.CONVEXPOLYHEDRON,planeConvex:se.types.PLANE|se.types.CONVEXPOLYHEDRON,boxConvex:se.types.BOX|se.types.CONVEXPOLYHEDRON,sphereHeightfield:se.types.SPHERE|se.types.HEIGHTFIELD,boxHeightfield:se.types.BOX|se.types.HEIGHTFIELD,convexHeightfield:se.types.CONVEXPOLYHEDRON|se.types.HEIGHTFIELD,sphereParticle:se.types.PARTICLE|se.types.SPHERE,planeParticle:se.types.PLANE|se.types.PARTICLE,boxParticle:se.types.BOX|se.types.PARTICLE,convexParticle:se.types.PARTICLE|se.types.CONVEXPOLYHEDRON,cylinderCylinder:se.types.CYLINDER,sphereCylinder:se.types.SPHERE|se.types.CYLINDER,planeCylinder:se.types.PLANE|se.types.CYLINDER,boxCylinder:se.types.BOX|se.types.CYLINDER,convexCylinder:se.types.CONVEXPOLYHEDRON|se.types.CYLINDER,heightfieldCylinder:se.types.HEIGHTFIELD|se.types.CYLINDER,particleCylinder:se.types.PARTICLE|se.types.CYLINDER,sphereTrimesh:se.types.SPHERE|se.types.TRIMESH,planeTrimesh:se.types.PLANE|se.types.TRIMESH};class F_{get[je.sphereSphere](){return this.sphereSphere}get[je.spherePlane](){return this.spherePlane}get[je.boxBox](){return this.boxBox}get[je.sphereBox](){return this.sphereBox}get[je.planeBox](){return this.planeBox}get[je.convexConvex](){return this.convexConvex}get[je.sphereConvex](){return this.sphereConvex}get[je.planeConvex](){return this.planeConvex}get[je.boxConvex](){return this.boxConvex}get[je.sphereHeightfield](){return this.sphereHeightfield}get[je.boxHeightfield](){return this.boxHeightfield}get[je.convexHeightfield](){return this.convexHeightfield}get[je.sphereParticle](){return this.sphereParticle}get[je.planeParticle](){return this.planeParticle}get[je.boxParticle](){return this.boxParticle}get[je.convexParticle](){return this.convexParticle}get[je.cylinderCylinder](){return this.convexConvex}get[je.sphereCylinder](){return this.sphereConvex}get[je.planeCylinder](){return this.planeConvex}get[je.boxCylinder](){return this.boxConvex}get[je.convexCylinder](){return this.convexConvex}get[je.heightfieldCylinder](){return this.heightfieldCylinder}get[je.particleCylinder](){return this.particleCylinder}get[je.sphereTrimesh](){return this.sphereTrimesh}get[je.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new N_,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,i,s,r){let o;this.contactPointPool.length?(o=this.contactPointPool.pop(),o.bi=e,o.bj=t):o=new m_(e,t),o.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&i.collisionResponse;const a=this.currentContactMaterial;o.restitution=a.restitution,o.setSpookParams(a.contactEquationStiffness,a.contactEquationRelaxation,this.world.dt);const l=n.material||e.material,h=i.material||t.material;return l&&h&&l.restitution>=0&&h.restitution>=0&&(o.restitution=l.restitution*h.restitution),o.si=s||n,o.sj=r||i,o}createFrictionEquationsFromContact(e,t){const n=e.bi,i=e.bj,s=e.si,r=e.sj,o=this.world,a=this.currentContactMaterial;let l=a.friction;const h=s.material||n.material,d=r.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(l=h.friction*d.friction),l>0){const u=l*(o.frictionGravity||o.gravity).length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const g=this.frictionEquationPool,m=g.length?g.pop():new Bl(n,i,u*f),p=g.length?g.pop():new Bl(n,i,u*f);return m.bi=p.bi=n,m.bj=p.bj=i,m.minForce=p.minForce=-u*f,m.maxForce=p.maxForce=u*f,m.ri.copy(e.ri),m.rj.copy(e.rj),p.ri.copy(e.ri),p.rj.copy(e.rj),e.ni.tangents(m.t,p.t),m.setSpookParams(a.frictionEquationStiffness,a.frictionEquationRelaxation,o.dt),p.setSpookParams(a.frictionEquationStiffness,a.frictionEquationRelaxation,o.dt),m.enabled=p.enabled=e.enabled,t.push(m,p),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Zn.setZero(),Ai.setZero(),Ci.setZero();const s=t.bi;t.bj;for(let o=0;o!==e;o++)t=this.result[this.result.length-1-o],t.bi!==s?(Zn.vadd(t.ni,Zn),Ai.vadd(t.ri,Ai),Ci.vadd(t.rj,Ci)):(Zn.vsub(t.ni,Zn),Ai.vadd(t.rj,Ai),Ci.vadd(t.ri,Ci));const r=1/e;Ai.scale(r,n.ri),Ci.scale(r,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Zn.normalize(),Zn.tangents(n.t,i.t)}getContacts(e,t,n,i,s,r,o){this.contactPointPool=s,this.frictionEquationPool=o,this.result=i,this.frictionResult=r;const a=O_,l=U_,h=z_,d=B_;for(let u=0,f=e.length;u!==f;u++){const g=e[u],m=t[u];let p=null;g.material&&m.material&&(p=n.getContactMaterial(g.material,m.material)||null);const _=g.type&ae.KINEMATIC&&m.type&ae.STATIC||g.type&ae.STATIC&&m.type&ae.KINEMATIC||g.type&ae.KINEMATIC&&m.type&ae.KINEMATIC;for(let x=0;x<g.shapes.length;x++){g.quaternion.mult(g.shapeOrientations[x],a),g.quaternion.vmult(g.shapeOffsets[x],h),h.vadd(g.position,h);const v=g.shapes[x];for(let b=0;b<m.shapes.length;b++){m.quaternion.mult(m.shapeOrientations[b],l),m.quaternion.vmult(m.shapeOffsets[b],d),d.vadd(m.position,d);const w=m.shapes[b];if(!(v.collisionFilterMask&w.collisionFilterGroup&&w.collisionFilterMask&v.collisionFilterGroup)||h.distanceTo(d)>v.boundingSphereRadius+w.boundingSphereRadius)continue;let E=null;v.material&&w.material&&(E=n.getContactMaterial(v.material,w.material)||null),this.currentContactMaterial=E||p||n.defaultContactMaterial;const I=v.type|w.type,y=this[I];if(y){let S=!1;v.type<w.type?S=y.call(this,v,w,h,d,a,l,g,m,v,w,_):S=y.call(this,w,v,d,h,l,a,m,g,v,w,_),S&&_&&(n.shapeOverlapKeeper.set(v.id,w.id),n.bodyOverlapKeeper.set(g.id,m.id))}}}}}sphereSphere(e,t,n,i,s,r,o,a,l,h,d){if(d)return n.distanceSquared(i)<(e.radius+t.radius)**2;const u=this.createContactEquation(o,a,e,t,l,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(e.radius,u.ri),u.rj.scale(-t.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(o.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(a.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(e,t,n,i,s,r,o,a,l,h,d){const u=this.createContactEquation(o,a,e,t,l,h);if(u.ni.set(0,0,1),r.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(e.radius,u.ri),n.vsub(i,Zs),u.ni.scale(u.ni.dot(Zs),Ol),Zs.vsub(Ol,u.rj),-Zs.dot(u.ni)<=e.radius){if(d)return!0;const f=u.ri,g=u.rj;f.vadd(n,f),f.vsub(o.position,f),g.vadd(i,g),g.vsub(a.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(e,t,n,i,s,r,o,a,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,i,s,r,o,a,e,t,d)}sphereBox(e,t,n,i,s,r,o,a,l,h,d){const u=this.v3pool,f=ux;n.vsub(i,Js),t.getSideNormals(f,r);const g=e.radius;let m=!1;const p=fx,_=px,x=mx;let v=null,b=0,w=0,E=0,I=null;for(let N=0,W=f.length;N!==W&&m===!1;N++){const G=lx;G.copy(f[N]);const j=G.length();G.normalize();const Z=Js.dot(G);if(Z<j+g&&Z>0){const re=cx,B=hx;re.copy(f[(N+1)%3]),B.copy(f[(N+2)%3]);const J=re.length(),ne=B.length();re.normalize(),B.normalize();const V=Js.dot(re),he=Js.dot(B);if(V<J&&V>-J&&he<ne&&he>-ne){const ue=Math.abs(Z-j-g);if((I===null||ue<I)&&(I=ue,w=V,E=he,v=j,p.copy(G),_.copy(re),x.copy(B),b++,d))return!0}}}if(b){m=!0;const N=this.createContactEquation(o,a,e,t,l,h);p.scale(-g,N.ri),N.ni.copy(p),N.ni.negate(N.ni),p.scale(v,p),_.scale(w,_),p.vadd(_,p),x.scale(E,x),p.vadd(x,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(o.position,N.ri),N.rj.vadd(i,N.rj),N.rj.vsub(a.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}let y=u.get();const S=dx;for(let N=0;N!==2&&!m;N++)for(let W=0;W!==2&&!m;W++)for(let G=0;G!==2&&!m;G++)if(y.set(0,0,0),N?y.vadd(f[0],y):y.vsub(f[0],y),W?y.vadd(f[1],y):y.vsub(f[1],y),G?y.vadd(f[2],y):y.vsub(f[2],y),i.vadd(y,S),S.vsub(n,S),S.lengthSquared()<g*g){if(d)return!0;m=!0;const j=this.createContactEquation(o,a,e,t,l,h);j.ri.copy(S),j.ri.normalize(),j.ni.copy(j.ri),j.ri.scale(g,j.ri),j.rj.copy(y),j.ri.vadd(n,j.ri),j.ri.vsub(o.position,j.ri),j.rj.vadd(i,j.rj),j.rj.vsub(a.position,j.rj),this.result.push(j),this.createFrictionEquationsFromContact(j,this.frictionResult)}u.release(y),y=null;const P=u.get(),U=u.get(),F=u.get(),A=u.get(),L=u.get(),D=f.length;for(let N=0;N!==D&&!m;N++)for(let W=0;W!==D&&!m;W++)if(N%3!==W%3){f[W].cross(f[N],P),P.normalize(),f[N].vadd(f[W],U),F.copy(n),F.vsub(U,F),F.vsub(i,F);const G=F.dot(P);P.scale(G,A);let j=0;for(;j===N%3||j===W%3;)j++;L.copy(n),L.vsub(A,L),L.vsub(U,L),L.vsub(i,L);const Z=Math.abs(G),re=L.length();if(Z<f[j].length()&&re<g){if(d)return!0;m=!0;const B=this.createContactEquation(o,a,e,t,l,h);U.vadd(A,B.rj),B.rj.copy(B.rj),L.negate(B.ni),B.ni.normalize(),B.ri.copy(B.rj),B.ri.vadd(i,B.ri),B.ri.vsub(n,B.ri),B.ri.normalize(),B.ri.scale(g,B.ri),B.ri.vadd(n,B.ri),B.ri.vsub(o.position,B.ri),B.rj.vadd(i,B.rj),B.rj.vsub(a.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}}u.release(P,U,F,A,L)}planeBox(e,t,n,i,s,r,o,a,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,i,s,r,o,a,e,t,d)}convexConvex(e,t,n,i,s,r,o,a,l,h,d,u,f){const g=Rx;if(!(n.distanceTo(i)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,s,i,r,g,u,f)){const m=[],p=Px;e.clipAgainstHull(n,s,t,i,r,g,-100,100,m);let _=0;for(let x=0;x!==m.length;x++){if(d)return!0;const v=this.createContactEquation(o,a,e,t,l,h),b=v.ri,w=v.rj;g.negate(v.ni),m[x].normal.negate(p),p.scale(m[x].depth,p),m[x].point.vadd(p,b),w.copy(m[x].point),b.vsub(n,b),w.vsub(i,w),b.vadd(n,b),b.vsub(o.position,b),w.vadd(i,w),w.vsub(a.position,w),this.result.push(v),_++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&_&&this.createFrictionFromAverage(_)}}sphereConvex(e,t,n,i,s,r,o,a,l,h,d){const u=this.v3pool;n.vsub(i,gx);const f=t.faceNormals,g=t.faces,m=t.vertices,p=e.radius;let _=!1;for(let x=0;x!==m.length;x++){const v=m[x],b=yx;r.vmult(v,b),i.vadd(b,b);const w=vx;if(b.vsub(n,w),w.lengthSquared()<p*p){if(d)return!0;_=!0;const E=this.createContactEquation(o,a,e,t,l,h);E.ri.copy(w),E.ri.normalize(),E.ni.copy(E.ri),E.ri.scale(p,E.ri),b.vsub(i,E.rj),E.ri.vadd(n,E.ri),E.ri.vsub(o.position,E.ri),E.rj.vadd(i,E.rj),E.rj.vsub(a.position,E.rj),this.result.push(E),this.createFrictionEquationsFromContact(E,this.frictionResult);return}}for(let x=0,v=g.length;x!==v&&_===!1;x++){const b=f[x],w=g[x],E=bx;r.vmult(b,E);const I=Mx;r.vmult(m[w[0]],I),I.vadd(i,I);const y=wx;E.scale(-p,y),n.vadd(y,y);const S=Sx;y.vsub(I,S);const P=S.dot(E),U=Tx;if(n.vsub(I,U),P<0&&U.dot(E)>0){const F=[];for(let A=0,L=w.length;A!==L;A++){const D=u.get();r.vmult(m[w[A]],D),i.vadd(D,D),F.push(D)}if(ax(F,E,n)){if(d)return!0;_=!0;const A=this.createContactEquation(o,a,e,t,l,h);E.scale(-p,A.ri),E.negate(A.ni);const L=u.get();E.scale(-P,L);const D=u.get();E.scale(-p,D),n.vsub(i,A.rj),A.rj.vadd(D,A.rj),A.rj.vadd(L,A.rj),A.rj.vadd(i,A.rj),A.rj.vsub(a.position,A.rj),A.ri.vadd(n,A.ri),A.ri.vsub(o.position,A.ri),u.release(L),u.release(D),this.result.push(A),this.createFrictionEquationsFromContact(A,this.frictionResult);for(let N=0,W=F.length;N!==W;N++)u.release(F[N]);return}else for(let A=0;A!==w.length;A++){const L=u.get(),D=u.get();r.vmult(m[w[(A+1)%w.length]],L),r.vmult(m[w[(A+2)%w.length]],D),i.vadd(L,L),i.vadd(D,D);const N=_x;D.vsub(L,N);const W=xx;N.unit(W);const G=u.get(),j=u.get();n.vsub(L,j);const Z=j.dot(W);W.scale(Z,G),G.vadd(L,G);const re=u.get();if(G.vsub(n,re),Z>0&&Z*Z<N.lengthSquared()&&re.lengthSquared()<p*p){if(d)return!0;const B=this.createContactEquation(o,a,e,t,l,h);G.vsub(i,B.rj),G.vsub(n,B.ni),B.ni.normalize(),B.ni.scale(p,B.ri),B.rj.vadd(i,B.rj),B.rj.vsub(a.position,B.rj),B.ri.vadd(n,B.ri),B.ri.vsub(o.position,B.ri),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult);for(let J=0,ne=F.length;J!==ne;J++)u.release(F[J]);u.release(L),u.release(D),u.release(G),u.release(re),u.release(j);return}u.release(L),u.release(D),u.release(G),u.release(re),u.release(j)}for(let A=0,L=F.length;A!==L;A++)u.release(F[A])}}}planeConvex(e,t,n,i,s,r,o,a,l,h,d){const u=Ex,f=Ax;f.set(0,0,1),s.vmult(f,f);let g=0;const m=Cx;for(let p=0;p!==t.vertices.length;p++)if(u.copy(t.vertices[p]),r.vmult(u,u),i.vadd(u,u),u.vsub(n,m),f.dot(m)<=0){if(d)return!0;const x=this.createContactEquation(o,a,e,t,l,h),v=Lx;f.scale(f.dot(m),v),u.vsub(v,v),v.vsub(n,x.ri),x.ni.copy(f),u.vsub(i,x.rj),x.ri.vadd(n,x.ri),x.ri.vsub(o.position,x.ri),x.rj.vadd(i,x.rj),x.rj.vsub(a.position,x.rj),this.result.push(x),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(e,t,n,i,s,r,o,a,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,i,s,r,o,a,e,t,d)}sphereHeightfield(e,t,n,i,s,r,o,a,l,h,d){const u=t.data,f=e.radius,g=t.elementSize,m=Hx,p=Vx;Ue.pointToLocalFrame(i,r,n,p);let _=Math.floor((p.x-f)/g)-1,x=Math.ceil((p.x+f)/g)+1,v=Math.floor((p.y-f)/g)-1,b=Math.ceil((p.y+f)/g)+1;if(x<0||b<0||_>u.length||v>u[0].length)return;_<0&&(_=0),x<0&&(x=0),v<0&&(v=0),b<0&&(b=0),_>=u.length&&(_=u.length-1),x>=u.length&&(x=u.length-1),b>=u[0].length&&(b=u[0].length-1),v>=u[0].length&&(v=u[0].length-1);const w=[];t.getRectMinMax(_,v,x,b,w);const E=w[0],I=w[1];if(p.z-f>I||p.z+f<E)return;const y=this.result;for(let S=_;S<x;S++)for(let P=v;P<b;P++){const U=y.length;let F=!1;if(t.getConvexTrianglePillar(S,P,!1),Ue.pointToWorldFrame(i,r,t.pillarOffset,m),n.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(F=this.sphereConvex(e,t.pillarConvex,n,m,s,r,o,a,e,t,d)),d&&F||(t.getConvexTrianglePillar(S,P,!0),Ue.pointToWorldFrame(i,r,t.pillarOffset,m),n.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(F=this.sphereConvex(e,t.pillarConvex,n,m,s,r,o,a,e,t,d)),d&&F))return!0;if(y.length-U>2)return}}boxHeightfield(e,t,n,i,s,r,o,a,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,i,s,r,o,a,e,t,d)}convexHeightfield(e,t,n,i,s,r,o,a,l,h,d){const u=t.data,f=t.elementSize,g=e.boundingSphereRadius,m=kx,p=Gx,_=Ux;Ue.pointToLocalFrame(i,r,n,_);let x=Math.floor((_.x-g)/f)-1,v=Math.ceil((_.x+g)/f)+1,b=Math.floor((_.y-g)/f)-1,w=Math.ceil((_.y+g)/f)+1;if(v<0||w<0||x>u.length||b>u[0].length)return;x<0&&(x=0),v<0&&(v=0),b<0&&(b=0),w<0&&(w=0),x>=u.length&&(x=u.length-1),v>=u.length&&(v=u.length-1),w>=u[0].length&&(w=u[0].length-1),b>=u[0].length&&(b=u[0].length-1);const E=[];t.getRectMinMax(x,b,v,w,E);const I=E[0],y=E[1];if(!(_.z-g>y||_.z+g<I))for(let S=x;S<v;S++)for(let P=b;P<w;P++){let U=!1;if(t.getConvexTrianglePillar(S,P,!1),Ue.pointToWorldFrame(i,r,t.pillarOffset,m),n.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(U=this.convexConvex(e,t.pillarConvex,n,m,s,r,o,a,null,null,d,p,null)),d&&U||(t.getConvexTrianglePillar(S,P,!0),Ue.pointToWorldFrame(i,r,t.pillarOffset,m),n.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(U=this.convexConvex(e,t.pillarConvex,n,m,s,r,o,a,null,null,d,p,null)),d&&U))return!0}}sphereParticle(e,t,n,i,s,r,o,a,l,h,d){const u=Fx;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=e.radius*e.radius){if(d)return!0;const g=this.createContactEquation(a,o,t,e,l,h);u.normalize(),g.rj.copy(u),g.rj.scale(e.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(e,t,n,i,s,r,o,a,l,h,d){const u=Ix;u.set(0,0,1),o.quaternion.vmult(u,u);const f=Dx;if(i.vsub(o.position,f),u.dot(f)<=0){if(d)return!0;const m=this.createContactEquation(a,o,t,e,l,h);m.ni.copy(u),m.ni.negate(m.ni),m.ri.set(0,0,0);const p=Nx;u.scale(u.dot(i),p),i.vsub(p,p),m.rj.copy(p),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}}boxParticle(e,t,n,i,s,r,o,a,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,i,s,r,o,a,e,t,d)}convexParticle(e,t,n,i,s,r,o,a,l,h,d){let u=-1;const f=Bx,g=Ox;let m=null;const p=zx;if(p.copy(i),p.vsub(n,p),s.conjugate(Ul),Ul.vmult(p,p),e.pointIsInside(p)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,s),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(s);for(let _=0,x=e.faces.length;_!==x;_++){const v=[e.worldVertices[e.faces[_][0]]],b=e.worldFaceNormals[_];i.vsub(v[0],kl);const w=-b.dot(kl);if(m===null||Math.abs(w)<Math.abs(m)){if(d)return!0;m=w,u=_,f.copy(b)}}if(u!==-1){const _=this.createContactEquation(a,o,t,e,l,h);f.scale(m,g),g.vadd(i,g),g.vsub(n,g),_.rj.copy(g),f.negate(_.ni),_.ri.set(0,0,0);const x=_.ri,v=_.rj;x.vadd(i,x),x.vsub(a.position,x),v.vadd(n,v),v.vsub(o.position,v),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,i,s,r,o,a,l,h,d){return this.convexHeightfield(t,e,i,n,r,s,a,o,l,h,d)}particleCylinder(e,t,n,i,s,r,o,a,l,h,d){return this.convexParticle(t,e,i,n,r,s,a,o,l,h,d)}sphereTrimesh(e,t,n,i,s,r,o,a,l,h,d){const u=X_,f=Y_,g=K_,m=$_,p=Z_,_=J_,x=nx,v=j_,b=W_,w=ix;Ue.pointToLocalFrame(i,r,n,p);const E=e.radius;x.lowerBound.set(p.x-E,p.y-E,p.z-E),x.upperBound.set(p.x+E,p.y+E,p.z+E),t.getTrianglesInAABB(x,w);const I=q_,y=e.radius*e.radius;for(let A=0;A<w.length;A++)for(let L=0;L<3;L++)if(t.getVertex(t.indices[w[A]*3+L],I),I.vsub(p,b),b.lengthSquared()<=y){if(v.copy(I),Ue.pointToWorldFrame(i,r,v,I),I.vsub(n,b),d)return!0;let D=this.createContactEquation(o,a,e,t,l,h);D.ni.copy(b),D.ni.normalize(),D.ri.copy(D.ni),D.ri.scale(e.radius,D.ri),D.ri.vadd(n,D.ri),D.ri.vsub(o.position,D.ri),D.rj.copy(I),D.rj.vsub(a.position,D.rj),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}for(let A=0;A<w.length;A++)for(let L=0;L<3;L++){t.getVertex(t.indices[w[A]*3+L],u),t.getVertex(t.indices[w[A]*3+(L+1)%3],f),f.vsub(u,g),p.vsub(f,_);const D=_.dot(g);p.vsub(u,_);let N=_.dot(g);if(N>0&&D<0&&(p.vsub(u,_),m.copy(g),m.normalize(),N=_.dot(m),m.scale(N,_),_.vadd(u,_),_.distanceTo(p)<e.radius)){if(d)return!0;const G=this.createContactEquation(o,a,e,t,l,h);_.vsub(p,G.ni),G.ni.normalize(),G.ni.scale(e.radius,G.ri),G.ri.vadd(n,G.ri),G.ri.vsub(o.position,G.ri),Ue.pointToWorldFrame(i,r,_,_),_.vsub(a.position,G.rj),Ue.vectorToWorldFrame(r,G.ni,G.ni),Ue.vectorToWorldFrame(r,G.ri,G.ri),this.result.push(G),this.createFrictionEquationsFromContact(G,this.frictionResult)}}const S=Q_,P=ex,U=tx,F=H_;for(let A=0,L=w.length;A!==L;A++){t.getTriangleVertices(w[A],S,P,U),t.getNormal(w[A],F),p.vsub(S,_);let D=_.dot(F);if(F.scale(D,_),p.vsub(_,_),D=_.distanceTo(p),it.pointInTriangle(_,S,P,U)&&D<e.radius){if(d)return!0;let N=this.createContactEquation(o,a,e,t,l,h);_.vsub(p,N.ni),N.ni.normalize(),N.ni.scale(e.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(o.position,N.ri),Ue.pointToWorldFrame(i,r,_,_),_.vsub(a.position,N.rj),Ue.vectorToWorldFrame(r,N.ni,N.ni),Ue.vectorToWorldFrame(r,N.ri,N.ri),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}}w.length=0}planeTrimesh(e,t,n,i,s,r,o,a,l,h,d){const u=new M,f=k_;f.set(0,0,1),s.vmult(f,f);for(let g=0;g<t.vertices.length/3;g++){t.getVertex(g,u);const m=new M;m.copy(u),Ue.pointToWorldFrame(i,r,m,u);const p=G_;if(u.vsub(n,p),f.dot(p)<=0){if(d)return!0;const x=this.createContactEquation(o,a,e,t,l,h);x.ni.copy(f);const v=V_;f.scale(p.dot(f),v),u.vsub(v,v),x.ri.copy(v),x.ri.vsub(o.position,x.ri),x.rj.copy(u),x.rj.vsub(a.position,x.rj),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}}}const Zn=new M,Ai=new M,Ci=new M,z_=new M,B_=new M,O_=new Qe,U_=new Qe,k_=new M,G_=new M,V_=new M,H_=new M,W_=new M;new M;const q_=new M,j_=new M,X_=new M,Y_=new M,K_=new M,$_=new M,Z_=new M,J_=new M,Q_=new M,ex=new M,tx=new M,nx=new Ot,ix=[],Zs=new M,Ol=new M,sx=new M,rx=new M,ox=new M;function ax(c,e,t){let n=null;const i=c.length;for(let s=0;s!==i;s++){const r=c[s],o=sx;c[(s+1)%i].vsub(r,o);const a=rx;o.cross(e,a);const l=ox;t.vsub(r,l);const h=a.dot(l);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const Js=new M,lx=new M,cx=new M,hx=new M,ux=[new M,new M,new M,new M,new M,new M],dx=new M,fx=new M,px=new M,mx=new M,gx=new M,_x=new M,xx=new M,vx=new M,yx=new M,bx=new M,Mx=new M,wx=new M,Sx=new M,Tx=new M;new M;new M;const Ex=new M,Ax=new M,Cx=new M,Lx=new M,Rx=new M,Px=new M,Ix=new M,Dx=new M,Nx=new M,Fx=new M,Ul=new Qe,zx=new M;new M;const Bx=new M,kl=new M,Ox=new M,Ux=new M,kx=new M,Gx=[0],Vx=new M,Hx=new M;class Gl{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const n=t;t=e,e=n}return e<<16|t}set(e,t){const n=this.getKey(e,t),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let r=i.length-1;r>=s;r--)i[r+1]=i[r];i[s]=n}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const n=this.current,i=this.previous,s=n.length,r=i.length;let o=0;for(let a=0;a<s;a++){let l=!1;const h=n[a];for(;h>i[o];)o++;l=h===i[o],l||Vl(e,h)}o=0;for(let a=0;a<r;a++){let l=!1;const h=i[a];for(;h>n[o];)o++;l=n[o]===h,l||Vl(t,h)}}}function Vl(c,e){c.push((e&4294901760)>>16,e&65535)}const eo=(c,e)=>c<e?`${c}-${e}`:`${e}-${c}`;class Wx{constructor(){this.data={keys:[]}}get(e,t){const n=eo(e,t);return this.data[n]}set(e,t,n){const i=eo(e,t);this.get(e,t)||this.data.keys.push(i),this.data[i]=n}delete(e,t){const n=eo(e,t),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const n=t.pop();delete e[n]}}}class qx extends Lc{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new M,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new M,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new $0,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new L_,this.constraints=[],this.narrowphase=new F_(this),this.collisionMatrix=new Al,this.collisionMatrixPrevious=new Al,this.bodyOverlapKeeper=new Gl,this.shapeOverlapKeeper=new Gl,this.contactmaterials=[],this.contactMaterialTable=new Wx,this.defaultMaterial=new cr("default"),this.defaultContactMaterial=new lr(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof sr?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,i){return n===void 0&&(n={}),n.mode=it.ALL,n.from=e,n.to=t,n.callback=i,to.intersectWorld(this,n)}raycastAny(e,t,n,i){return n===void 0&&(n={}),n.mode=it.ANY,n.from=e,n.to=t,n.result=i,to.intersectWorld(this,n)}raycastClosest(e,t,n,i){return n===void 0&&(n={}),n.mode=it.CLOSEST,n.from=e,n.to=t,n.result=i,to.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof ae&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,n=this.bodies,i=n.indexOf(e);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let n=0;n<t.length;n++){const i=t[n].shapes;for(let s=0;s<i.length;s++){const r=i[s];if(r.id===e)return r}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const n=st.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const i=n-this.lastCallTime;this.step(e,i,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const i=st.now();let s=0;for(;this.accumulator>=e&&s<n&&(this.internalStep(e),this.accumulator-=e,s++,!(st.now()-i>e*1e3)););this.accumulator=this.accumulator%e;const r=this.accumulator/e;for(let o=0;o!==this.bodies.length;o++){const a=this.bodies[o];a.previousPosition.lerp(a.position,r,a.interpolatedPosition),a.previousQuaternion.slerp(a.quaternion,r,a.interpolatedQuaternion),a.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,n=$x,i=Zx,s=this.bodies.length,r=this.bodies,o=this.solver,a=this.gravity,l=this.doProfiling,h=this.profile,d=ae.DYNAMIC;let u=-1/0;const f=this.constraints,g=Kx;a.length();const m=a.x,p=a.y,_=a.z;let x=0;for(l&&(u=st.now()),x=0;x!==s;x++){const A=r[x];if(A.type===d){const L=A.force,D=A.mass;L.x+=D*m,L.y+=D*p,L.z+=D*_}}for(let A=0,L=this.subsystems.length;A!==L;A++)this.subsystems[A].update();l&&(u=st.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),l&&(h.broadphase=st.now()-u);let v=f.length;for(x=0;x!==v;x++){const A=f[x];if(!A.collideConnected)for(let L=n.length-1;L>=0;L-=1)(A.bodyA===n[L]&&A.bodyB===i[L]||A.bodyB===n[L]&&A.bodyA===i[L])&&(n.splice(L,1),i.splice(L,1))}this.collisionMatrixTick(),l&&(u=st.now());const b=Yx,w=t.length;for(x=0;x!==w;x++)b.push(t[x]);t.length=0;const E=this.frictionEquations.length;for(x=0;x!==E;x++)g.push(this.frictionEquations[x]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,t,b,this.frictionEquations,g),l&&(h.narrowphase=st.now()-u),l&&(u=st.now()),x=0;x<this.frictionEquations.length;x++)o.addEquation(this.frictionEquations[x]);const I=t.length;for(let A=0;A!==I;A++){const L=t[A],D=L.bi,N=L.bj,W=L.si,G=L.sj;let j;if(D.material&&N.material?j=this.getContactMaterial(D.material,N.material)||this.defaultContactMaterial:j=this.defaultContactMaterial,j.friction,D.material&&N.material&&(D.material.friction>=0&&N.material.friction>=0&&D.material.friction*N.material.friction,D.material.restitution>=0&&N.material.restitution>=0&&(L.restitution=D.material.restitution*N.material.restitution)),o.addEquation(L),D.allowSleep&&D.type===ae.DYNAMIC&&D.sleepState===ae.SLEEPING&&N.sleepState===ae.AWAKE&&N.type!==ae.STATIC){const Z=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),re=N.sleepSpeedLimit**2;Z>=re*2&&(D.wakeUpAfterNarrowphase=!0)}if(N.allowSleep&&N.type===ae.DYNAMIC&&N.sleepState===ae.SLEEPING&&D.sleepState===ae.AWAKE&&D.type!==ae.STATIC){const Z=D.velocity.lengthSquared()+D.angularVelocity.lengthSquared(),re=D.sleepSpeedLimit**2;Z>=re*2&&(N.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(D,N,!0),this.collisionMatrixPrevious.get(D,N)||(cs.body=N,cs.contact=L,D.dispatchEvent(cs),cs.body=D,N.dispatchEvent(cs)),this.bodyOverlapKeeper.set(D.id,N.id),this.shapeOverlapKeeper.set(W.id,G.id)}for(this.emitContactEvents(),l&&(h.makeContactConstraints=st.now()-u,u=st.now()),x=0;x!==s;x++){const A=r[x];A.wakeUpAfterNarrowphase&&(A.wakeUp(),A.wakeUpAfterNarrowphase=!1)}for(v=f.length,x=0;x!==v;x++){const A=f[x];A.update();for(let L=0,D=A.equations.length;L!==D;L++){const N=A.equations[L];o.addEquation(N)}}o.solve(e,this),l&&(h.solve=st.now()-u),o.removeAllEquations();const y=Math.pow;for(x=0;x!==s;x++){const A=r[x];if(A.type&d){const L=y(1-A.linearDamping,e),D=A.velocity;D.scale(L,D);const N=A.angularVelocity;if(N){const W=y(1-A.angularDamping,e);N.scale(W,N)}}}this.dispatchEvent(Xx),l&&(u=st.now());const P=this.stepnumber%(this.quatNormalizeSkip+1)===0,U=this.quatNormalizeFast;for(x=0;x!==s;x++)r[x].integrate(e,P,U);this.clearForces(),this.broadphase.dirty=!0,l&&(h.integrate=st.now()-u),this.stepnumber+=1,this.dispatchEvent(jx);let F=!0;if(this.allowSleep)for(F=!1,x=0;x!==s;x++){const A=r[x];A.sleepTick(this.time),A.sleepState!==ae.SLEEPING&&(F=!0)}this.hasActiveBodies=F}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(Mn,wn),e){for(let s=0,r=Mn.length;s<r;s+=2)hs.bodyA=this.getBodyById(Mn[s]),hs.bodyB=this.getBodyById(Mn[s+1]),this.dispatchEvent(hs);hs.bodyA=hs.bodyB=null}if(t){for(let s=0,r=wn.length;s<r;s+=2)us.bodyA=this.getBodyById(wn[s]),us.bodyB=this.getBodyById(wn[s+1]),this.dispatchEvent(us);us.bodyA=us.bodyB=null}Mn.length=wn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(Mn,wn),n){for(let s=0,r=Mn.length;s<r;s+=2){const o=this.getShapeById(Mn[s]),a=this.getShapeById(Mn[s+1]);Sn.shapeA=o,Sn.shapeB=a,o&&(Sn.bodyA=o.body),a&&(Sn.bodyB=a.body),this.dispatchEvent(Sn)}Sn.bodyA=Sn.bodyB=Sn.shapeA=Sn.shapeB=null}if(i){for(let s=0,r=wn.length;s<r;s+=2){const o=this.getShapeById(wn[s]),a=this.getShapeById(wn[s+1]);Tn.shapeA=o,Tn.shapeB=a,o&&(Tn.bodyA=o.body),a&&(Tn.bodyB=a.body),this.dispatchEvent(Tn)}Tn.bodyA=Tn.bodyB=Tn.shapeA=Tn.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let n=0;n!==t;n++){const i=e[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new Ot;const to=new it,st=globalThis.performance||{};if(!st.now){let c=Date.now();st.timing&&st.timing.navigationStart&&(c=st.timing.navigationStart),st.now=()=>Date.now()-c}new M;const jx={type:"postStep"},Xx={type:"preStep"},cs={type:ae.COLLIDE_EVENT_NAME,body:null,contact:null},Yx=[],Kx=[],$x=[],Zx=[],Mn=[],wn=[],hs={type:"beginContact",bodyA:null,bodyB:null},us={type:"endContact",bodyA:null,bodyB:null},Sn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Tn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};function Jx(c,e,t){let{color:n=65280,scale:i=1,onInit:s,onUpdate:r}=t===void 0?{}:t;const o=[],a=new Qt({color:n??65280,wireframe:!0}),l=new M,h=new M,d=new M,u=new Qe,f=new nr(1),g=new Wn(1,1,1),m=new ui(10,10,10,10);m.translate(0,0,1e-4);function p(y){const S=new mt,P=[];for(let F=0;F<y.vertices.length;F++){const A=y.vertices[F];P.push(A.x,A.y,A.z)}S.setAttribute("position",new ft(P,3));const U=[];for(let F=0;F<y.faces.length;F++){const A=y.faces[F],L=A[0];for(let D=1;D<A.length-1;D++){const N=A[D],W=A[D+1];U.push(L,N,W)}}return S.setIndex(U),S.computeBoundingSphere(),S.computeVertexNormals(),S}function _(y){const S=new mt,P=[],U=l,F=h,A=d;for(let L=0;L<y.indices.length/3;L++)y.getTriangleVertices(L,U,F,A),P.push(U.x,U.y,U.z),P.push(F.x,F.y,F.z),P.push(A.x,A.y,A.z);return S.setAttribute("position",new ft(P,3)),S.computeBoundingSphere(),S.computeVertexNormals(),S}function x(y){const S=new mt,P=y.elementSize||1,U=y.data.flatMap((A,L)=>A.flatMap((D,N)=>[L*P,N*P,D])),F=[];for(let A=0;A<y.data.length-1;A++)for(let L=0;L<y.data[A].length-1;L++){const D=y.data[A].length,N=A*D+L;F.push(N+1,N+D,N+D+1),F.push(N+D,N+1,N)}return S.setIndex(F),S.setAttribute("position",new ft(U,3)),S.computeBoundingSphere(),S.computeVertexNormals(),S}function v(y){let S=new Xe;const{SPHERE:P,BOX:U,PLANE:F,CYLINDER:A,CONVEXPOLYHEDRON:L,TRIMESH:D,HEIGHTFIELD:N}=se.types;switch(y.type){case P:{S=new Xe(f,a);break}case U:{S=new Xe(g,a);break}case F:{S=new Xe(m,a);break}case A:{const W=new Eo(y.radiusTop,y.radiusBottom,y.height,y.numSegments);S=new Xe(W,a),y.geometryId=W.id;break}case L:{const W=p(y);S=new Xe(W,a),y.geometryId=W.id;break}case D:{const W=_(y);S=new Xe(W,a),y.geometryId=W.id;break}case N:{const W=x(y);S=new Xe(W,a),y.geometryId=W.id;break}}return c.add(S),S}function b(y,S){const{SPHERE:P,BOX:U,PLANE:F,CYLINDER:A,CONVEXPOLYHEDRON:L,TRIMESH:D,HEIGHTFIELD:N}=se.types;switch(S.type){case P:{const{radius:W}=S;y.scale.set(W*i,W*i,W*i);break}case U:{y.scale.copy(S.halfExtents),y.scale.multiplyScalar(2*i);break}case F:break;case A:{y.scale.set(1*i,1*i,1*i);break}case L:{y.scale.set(1*i,1*i,1*i);break}case D:{y.scale.copy(S.scale).multiplyScalar(i);break}case N:{y.scale.set(1*i,1*i,1*i);break}}}function w(y,S){if(!y)return!1;const{geometry:P}=y;return P instanceof nr&&S.type===se.types.SPHERE||P instanceof Wn&&S.type===se.types.BOX||P instanceof ui&&S.type===se.types.PLANE||P.id===S.geometryId&&S.type===se.types.CYLINDER||P.id===S.geometryId&&S.type===se.types.CONVEXPOLYHEDRON||P.id===S.geometryId&&S.type===se.types.TRIMESH||P.id===S.geometryId&&S.type===se.types.HEIGHTFIELD}function E(y,S){let P=o[y],U=!1;return w(P,S)||(P&&c.remove(P),o[y]=P=v(S),U=!0),b(P,S),U}function I(){const y=o,S=l,P=u;let U=0;for(const F of e.bodies)for(let A=0;A!==F.shapes.length;A++){const L=F.shapes[A],D=E(U,L),N=y[U];N&&(F.quaternion.vmult(F.shapeOffsets[A],S),F.position.vadd(S,S),F.quaternion.mult(F.shapeOrientations[A],P),N.position.copy(S),N.quaternion.copy(P),D&&s instanceof Function&&s(F,N,L),!D&&r instanceof Function&&r(F,N,L)),U++}for(let F=U;F<y.length;F++){const A=y[F];A&&c.remove(A)}y.length=U}return{update:I}}const No=new M0;No.setDecoderPath("./draco/");No.preload();const Oc=new Wg;Oc.setDRACOLoader(No);let $t=new Rn;const Qx=new Dg;let Pt=null;class ev{constructor(){Pt=this,Pt.sizes={width:window.innerWidth,height:window.innerHeight,pixelRatio:Math.min(window.devicePixelRatio,2)}}toggleGame(){this.initSettings(),this.initHtml(),this.setEventListeners()}initSettings(){this.options={gameState:"initialize",gameLevel:0,gameLevels:5,mainGameEnded:!1},this.player={localVelocity:new M,moveDistance:10},this.maze={entrancePosition:[],exitPosition:[],wallSize:.5}}addInstructions(){const e=new On().load("instructions.png"),t=new Qt({map:e,side:un,transparent:!0}),n=new ui(.3,.5),i=new Xe(n,t);i.rotation.x=-Math.PI/2,i.position.x=this.maze.entrancePosition[0]-.75,i.position.y=.1,i.position.z=this.maze.entrancePosition[1],this.scene.add(i)}setEventListeners(){document.querySelector("#new-level").addEventListener("click",()=>{Pt.options.gameState="initialize",Pt.newLevel()})}initHtml(){const e=tv(`
        <section class="game maze-game">
            <div class="container">
                <div class="game-rounds">Level ${this.options.gameLevel+1}</div>

                <div class="game-popup">
                    <div class="buttons">
                        <button id="new-level" class="btn default next pulsate">Next round</button>
                    </div>
                </div>

                <div class="game-labels">
                    <span id="start-label"></span>
                    <span id="exit-label"></span>
                </div>
            </div>
            <div class="overlay"></div>
            <div id="maze-canvas" class="game-canvas"></div>
        </section>`);document.body.append(e),document.querySelector(".game-popup").style.display="none"}initScene(){this.scene=new sg,this.addCamera(),this.addLight(),this.addRenderer(),this.addFloor(),this.addMaze(this.options.gameLevel,this.maze.wallSize),this.addPlayer(),this.addBox(),this.options.gameLevel==0&&this.addInstructions()}initCannon(){this.cannon=new qx,this.cannon.broadphase=new Pi(this.cannon),this.cannon.gravity=new M(0,-9.82,0)}initCannonDebugger(){this.cannonDebugger=new Jx(this.scene,this.cannon,{})}addCamera(){this.camera=new At(75,this.sizes.width/this.sizes.height,.1,100),this.camera.position.set(1,1.5,1),this.camera.lookAt(new z(1,0,1))}addLight(){this.light=new Ec("#fff"),this.light.position.set(0,.65,0),this.scene.add(this.light)}addFloor(){const e=new On().load("TexturesCom_OutdoorFloor4_512_albedo.png");e.colorSpace=Tt,e.wrapS=e.wrapT=ri,e.repeat.set(50,50);const t=new ui(50,50),n=new Jt({map:e});this.groundMesh=new Xe(t,n),this.groundMesh.rotation.x=-Math.PI*.5,this.groundMesh.receiveShadow=!0,this.scene.add(this.groundMesh),this.groundBody=new ae({mass:0,shape:new A_}),this.groundBody.quaternion.setFromEuler(-Math.PI*.5,0,0),this.cannon.addBody(this.groundBody)}async addPlayer(){const e=new On().load("glitch_v02.jpg");e.flipY=!1,e.colorSpace=Tt;const t=new Qt({map:e}),n=await Wl("GLITCH_LowPoly_v05.gltf");this.playerMesh=n.scene,this.playerMesh.traverse(o=>{o.material=t}),this.playerMesh.position.x=this.maze.entrancePosition[0],this.playerMesh.position.y=this.maze.wallSize,this.playerMesh.position.z=this.maze.entrancePosition[1],this.playerMesh.rotation.x=-Math.PI/4,this.scene.add(this.playerMesh);const s=new Hn().setFromObject(this.playerMesh).getSize(new z),r=new E_(s.x/2);this.playerBody=new ae({mass:1,shape:r,linearDamping:.25,angularDamping:1}),this.playerBody.position.copy(this.playerMesh.position),this.cannon.addBody(this.playerBody)}async addBox(){const e=new On().load("BoxTexture_Baked_V01.png");e.flipY=!1,e.colorSpace=Tt;const t=new Qt({map:e}),n=await Wl("Box_v03.gltf");this.boxMesh=n.scene,this.boxMesh.traverse(o=>{o.material=t}),this.boxMesh.position.x=this.maze.exitPosition[0],this.boxMesh.position.y=.15,this.boxMesh.position.z=this.maze.exitPosition[1],this.scene.add(this.boxMesh);const s=new Hn().setFromObject(this.boxMesh).getSize(new z),r=new zi(new M(s.x/2,s.y/2,s.z/2));this.boxBody=new ae({mass:0,shape:r,isTrigger:!0}),this.boxBody.position.copy(this.boxMesh.position),this.cannon.addBody(this.boxBody)}addMaze(e,t){const n=new On().load("cubeMap/c_side.png"),i=new On().load("cubeMap/c_top.png"),s=[new Jt({map:n}),new Jt({map:n}),new Jt({map:i}),new Jt({map:n}),new Jt({map:n}),new Jt({map:n})],r=[];this.mazeBody=new ae({mass:0}),Hl[e].forEach((h,d)=>{h.forEach((u,f)=>{if(u==1){const g=new Wn(t,t,t);g.translate(f*t,t*.5,d*t),r.push(g);const m=new zi(new M(t*.5,t*.5,t*.5));this.mazeBody.addShape(m,new M(f*t,t*.5,d*t))}if(u==2){const g=new zi(new M(t*.5,t*.5,t*.5));f==0&&this.mazeBody.addShape(g,new M(f*t-t,t*.5,d*t)),d==0&&this.mazeBody.addShape(g,new M(f*t,t*.5,d*t-t)),d==h.length-1&&this.mazeBody.addShape(g,new M(f*t,t*.5,d*t+t)),f==h.length-1&&this.mazeBody.addShape(g,new M(f*t+t,t*.5,d*t)),this.maze.entrancePosition=[f*t,d*t]}u==3&&(this.maze.exitPosition=[f*t,d*t])})});const o=new On().load("cubeMap/c_side.png"),a=new Jt({map:o}),l=Hg(r,!0);l.groups.forEach((h,d)=>{h.materialIndex=Math.floor(d%s.length)}),this.mazeMesh=new Xe(l,a),this.mazeMesh.castShadow=!0,this.scene.add(this.mazeMesh),this.mazeBody.position.copy(this.mazeMesh.position),this.cannon.addBody(this.mazeBody)}addRenderer(){this.renderer=new Mo({antialias:!0}),this.renderer.setPixelRatio(this.sizes.pixelRatio),this.renderer.setSize(this.sizes.width,this.sizes.height),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=jl,document.querySelector("#maze-canvas").appendChild(this.renderer.domElement),this.renderer.domElement.classList.add("maze-webgl")}resize(){Pt.sizes={width:window.innerWidth,height:window.innerHeight,pixelRatio:Math.min(window.devicePixelRatio,2)},Pt.camera.aspect=Pt.sizes.width/Pt.sizes.height,Pt.camera.updateProjectionMatrix(),Pt.renderer.setSize(Pt.sizes.width,Pt.sizes.height),Pt.renderer.setPixelRatio(Pt.sizes.pixelRatio)}destroy(){var e;(e=document.querySelector(".game"))==null||e.remove()}newLevel(){var e;this.scene.traverse(t=>{if(t instanceof Xe){t.geometry.dispose();for(const n in t.material){const i=t.material[n];i&&typeof i.dispose=="function"&&i.dispose()}}}),this.renderer.dispose(),(e=document.querySelector(".maze-webgl"))==null||e.remove()}updateWorld(){this.cannon.fixedStep();const e=Qx.getElapsedTime();this.playerMesh.position.copy(this.playerBody.position),this.boxMesh.position.copy(this.boxBody.position),this.boxMesh.rotation.y=e,this.player.localVelocity.set(this.player.moveDistance*.2,0,this.player.moveDistance*.2);const t=this.playerBody.quaternion.vmult(this.player.localVelocity);this.options.gameState==="fade out"?$t.setFromAxisAngle(new z(1,0,0).normalize(),Zt.degToRad(-75)):$t.setFromAxisAngle(new z(1,0,0).normalize(),Zt.degToRad(-35)),(Ve.arrowleft||Ve.a)&&(this.playerBody.velocity.x=-t.x,$t.setFromAxisAngle(new z(0,1,0).normalize(),Zt.degToRad(-90))),(Ve.arrowright||Ve.d)&&(this.playerBody.velocity.x=t.x,$t.setFromAxisAngle(new z(0,1,0).normalize(),Zt.degToRad(90))),(Ve.arrowup||Ve.w)&&(this.playerBody.velocity.z=-t.z,$t.setFromAxisAngle(new z(0,1,0).normalize(),Zt.degToRad(180))),(Ve.arrowdown||Ve.s)&&(this.playerBody.velocity.z=t.z,$t.setFromAxisAngle(new z(0,1,0).normalize(),Zt.degToRad(0))),(Ve.arrowleft&&Ve.arrowup||Ve.a&&Ve.w)&&$t.setFromAxisAngle(new z(0,1,0).normalize(),Zt.degToRad(225)),(Ve.arrowright&&Ve.arrowup||Ve.d&&Ve.w)&&$t.setFromAxisAngle(new z(0,1,0).normalize(),Zt.degToRad(135)),(Ve.arrowleft&&Ve.arrowdown||Ve.a&&Ve.s)&&$t.setFromAxisAngle(new z(0,1,0).normalize(),Zt.degToRad(-45)),(Ve.arrowright&&Ve.arrowdown||Ve.d&&Ve.s)&&$t.setFromAxisAngle(new z(0,1,0).normalize(),Zt.degToRad(45)),this.playerMesh.quaternion.slerp($t,.2),this.camera.position.x=this.playerMesh.position.x,this.camera.position.z=this.playerMesh.position.z,this.light.position.x=this.playerMesh.position.x,this.light.position.z=this.playerMesh.position.z}update(){var e,t;switch(this.options.gameState){case"initialize":this.initCannon(),this.initScene(),this.initCannonDebugger(),this.playerMesh&&(this.playerMesh.visible=!1),this.light.intensity=0,document.querySelector(".maze-game").classList.remove("popup-visible"),document.querySelector(".game-popup").style.display="none",this.options.gameLevel==this.options.gameLevels&&(this.options.mainGameEnded=!0),this.options.mainGameEnded?document.querySelector(".game-rounds").style.display="none":document.querySelector(".game-rounds").innerHTML=`Level ${this.options.gameLevel+1}`,this.options.gameLevel<Hl.length-1?this.options.gameLevel++:this.options.gameLevel=1,this.options.gameState="fade in";break;case"fade in":this.playerMesh&&(this.updateWorld(),this.playerMesh.visible=!0,this.light.intensity+=.1*(1-this.light.intensity),Math.abs(this.light.intensity-1)<.05&&(this.light.intensity=1,this.options.gameState="play")),this.renderer.render(this.scene,this.camera);break;case"play":this.updateWorld(),this.boxBody.addEventListener("collide",n=>{n.body===this.playerBody&&(this.mazeMesh.visible=!1,this.boxMesh.visible=!1,this.options.gameState="fade out")},!1),this.renderer.render(this.scene,this.camera);break;case"fade out":this.updateWorld(),this.light.intensity+=.1*(0-this.light.intensity),Math.abs(this.light.intensity-0)<.1&&(this.light.intensity=.2,this.options.gameLevel<this.options.gameLevels?this.options.gameState="congrats":this.options.gameState="end game"),this.renderer.render(this.scene,this.camera);break;case"congrats":(e=document.querySelector(".maze-game"))==null||e.classList.add("popup-visible"),document.querySelector(".game-popup")&&(document.querySelector(".game-popup").style.display="block");break;case"end game":(t=document.querySelector(".maze-game"))==null||t.classList.add("popup-visible"),document.querySelector(".game-popup")&&(document.querySelector(".game-popup").style.display="block"),document.querySelector(".cta").style.display="flex";break}}}const Hl=[[[1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,1,0,0,0,0,0,0,0,0,0,1],[1,0,1,0,1,1,1,0,1,1,1,1,1],[1,0,1,0,0,0,1,0,1,0,0,0,1],[1,0,1,0,1,1,1,0,1,0,1,0,1],[1,0,0,0,1,0,0,0,0,0,1,0,3],[1,1,1,0,1,1,1,1,1,0,1,0,1],[2,0,0,0,0,0,1,0,1,0,1,0,1],[1,1,1,0,1,0,1,0,1,1,1,0,1],[1,0,0,0,1,0,0,0,0,0,1,0,1],[1,0,1,1,1,0,1,1,1,1,1,0,1],[1,0,0,0,1,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1]],[[1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,1,0,0,0,0,0,1],[1,0,1,0,1,1,1,0,1,0,1,1,1],[1,0,1,0,1,0,0,0,1,0,0,0,1],[1,0,1,1,1,0,1,1,1,1,1,0,1],[1,0,1,0,0,0,0,0,1,0,1,0,3],[1,0,1,1,1,0,1,0,1,0,1,1,1],[2,0,1,0,1,0,1,0,1,0,1,0,1],[1,0,1,0,1,1,1,0,1,0,1,0,1],[1,0,0,0,1,0,0,0,0,0,1,0,1],[1,0,1,1,1,0,1,0,1,1,1,0,1],[1,0,0,0,0,0,1,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1]],[[1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,1,0,0,0,0,0,1,0,0,0,1],[1,0,1,0,1,1,1,1,1,0,1,0,1],[1,0,0,0,0,0,0,0,1,0,1,0,1],[1,0,1,1,1,1,1,0,1,0,1,1,1],[1,0,1,0,1,0,0,0,0,0,0,1,1],[1,0,1,0,1,1,1,1,1,1,1,0,3],[2,0,0,0,0,0,1,0,0,0,1,0,1],[1,0,1,1,1,0,1,0,1,0,1,0,1],[1,0,1,0,0,0,1,0,1,0,0,0,1],[1,0,1,0,1,0,1,0,1,0,1,1,1],[1,0,1,0,1,0,0,0,1,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1]],[[1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,1,1,1,1,1,1,1,1,1,0,1],[1,0,0,0,0,0,1,0,1,0,0,0,1],[1,1,1,1,1,0,1,0,1,1,1,1,1],[1,0,1,0,1,0,0,0,1,0,0,0,3],[1,0,1,0,1,0,1,0,1,0,1,1,1],[2,0,1,0,1,0,1,0,1,0,1,0,1],[1,0,1,0,1,0,1,1,1,0,1,0,1],[1,0,0,0,0,0,1,0,0,0,0,0,1],[1,0,1,0,1,1,1,0,1,1,1,0,1],[1,0,1,0,0,0,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1]],[[1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,1,0,1,0,0,0,1],[1,0,1,1,1,0,1,0,1,0,1,0,1],[1,0,0,0,1,0,1,0,0,0,1,0,1],[1,0,1,0,1,1,1,0,1,0,1,1,1],[1,0,1,0,0,0,0,0,1,0,1,1,1],[1,0,1,1,1,0,1,1,1,0,1,0,1],[2,0,0,0,1,0,0,0,1,0,1,0,1],[1,0,1,0,1,1,1,0,1,1,1,0,1],[1,0,1,0,0,0,1,0,0,0,0,0,1],[1,1,1,0,1,0,1,1,1,0,1,1,1],[1,0,0,0,1,0,0,0,1,0,0,0,3],[1,1,1,1,1,1,1,1,1,1,1,1,1]],[[1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,1,0,0,0,0,0,0,0,0,0,1],[1,0,1,1,1,0,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,0,1,0,1,1,1,1,1,0,1],[1,0,1,0,1,0,0,0,0,0,1,0,3],[1,0,1,1,1,0,1,0,1,1,1,1,1],[2,0,1,0,1,0,1,0,0,0,1,0,1],[1,0,1,0,1,0,1,1,1,0,1,0,1],[1,0,1,0,0,0,1,0,1,0,0,0,1],[1,0,1,0,1,1,1,0,1,0,1,1,1],[1,0,0,0,0,0,1,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1]],[[1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,1,0,1,0,0,0,0,0,0,0,1],[1,0,1,0,1,0,1,1,1,1,1,0,1],[1,0,0,0,0,0,0,0,0,0,1,0,1],[1,0,1,0,1,0,1,1,1,0,1,1,1],[1,0,1,0,1,0,1,0,1,0,1,0,3],[1,0,1,1,1,0,1,0,1,1,1,0,1],[2,0,1,0,0,0,0,0,0,0,0,0,1],[1,0,1,1,1,1,1,1,1,1,1,1,1],[1,0,1,0,0,0,0,0,0,0,1,0,1],[1,0,1,0,1,0,1,0,1,0,1,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1]],[[1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,1,0,0,0,1,0,1,0,1],[1,0,1,1,1,0,1,1,1,0,1,0,1],[1,0,0,0,1,0,0,0,1,0,0,0,1],[1,0,1,1,1,0,1,0,1,0,1,1,1],[1,0,0,0,0,0,1,0,0,0,1,0,3],[1,1,1,0,1,1,1,1,1,0,1,0,1],[2,0,1,0,0,0,1,0,0,0,1,0,1],[1,0,1,0,1,0,1,0,1,1,1,0,1],[1,0,0,0,1,0,1,0,0,0,0,0,1],[1,0,1,0,1,1,1,1,1,0,1,1,1],[1,0,1,0,0,0,0,0,1,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1]],[[1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,1,0,0,0,0,0,0,0,1],[1,0,1,1,1,0,1,1,1,1,1,0,1],[1,0,0,0,0,0,1,0,0,0,1,0,3],[1,0,1,0,1,0,1,1,1,0,1,0,1],[2,0,1,0,1,0,1,0,0,0,0,0,1],[1,0,1,1,1,1,1,1,1,1,1,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,1,1,1,0,1,0,1,0,1,0,1],[1,0,1,0,0,0,1,0,1,0,1,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1]],[[1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,1,0,1],[1,1,1,1,1,0,1,1,1,1,1,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,0,1,1,1,1,1,1,1,1,1],[1,0,1,0,0,0,0,0,0,0,1,0,3],[1,0,1,0,1,1,1,1,1,0,1,0,1],[2,0,0,0,0,0,0,0,1,0,0,0,1],[1,0,1,1,1,0,1,1,1,1,1,1,1],[1,0,0,0,1,0,0,0,0,0,0,0,1],[1,0,1,1,1,0,1,1,1,0,1,0,1],[1,0,1,0,0,0,0,0,1,0,1,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1]],[[1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,1,0,0,0,1,0,0,0,1],[1,1,1,0,1,0,1,0,1,0,1,0,1],[1,0,0,0,0,0,1,0,0,0,1,0,3],[1,0,1,1,1,1,1,1,1,0,1,1,1],[2,0,0,0,0,0,0,0,1,0,1,0,1],[1,0,1,0,1,1,1,1,1,1,1,0,1],[1,0,1,0,0,0,0,0,0,0,0,0,1],[1,0,1,1,1,0,1,1,1,1,1,0,1],[1,0,0,0,1,0,1,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1]],[[1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,1,0,0,0,0,0,0,0,1],[1,0,1,1,1,0,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,0,1,1,1,1,1,1,1,0,1],[1,0,1,0,1,0,0,0,0,0,1,0,3],[1,0,1,0,1,0,1,1,1,0,1,1,1],[2,0,0,0,1,0,1,0,0,0,1,0,1],[1,1,1,0,1,1,1,0,1,1,1,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,1,0,1,0,1,1,1,0,1,1,1],[1,0,1,0,1,0,0,0,1,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1]],[[1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,1,0,0,0,1],[1,0,1,1,1,1,1,0,1,0,1,0,1],[1,0,0,0,1,0,0,0,1,0,1,0,1],[1,0,1,0,1,0,1,1,1,0,1,0,1],[1,0,1,0,1,0,1,0,0,0,1,0,3],[1,1,1,1,1,0,1,0,1,1,1,1,1],[2,0,0,0,0,0,0,0,1,0,0,0,1],[1,1,1,1,1,0,1,1,1,0,1,1,1],[1,0,0,0,0,0,1,0,0,0,1,0,1],[1,0,1,0,1,1,1,0,1,1,1,0,1],[1,0,1,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1]],[[1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,1,0,0,0,0,0,0,0,1],[1,0,1,1,1,0,1,0,1,0,1,1,1],[1,0,1,0,1,0,1,0,1,0,0,0,1],[1,0,1,0,1,0,1,1,1,1,1,0,1],[1,0,1,0,0,0,0,0,0,0,1,0,3],[1,0,1,1,1,1,1,0,1,0,1,1,1],[2,0,1,0,0,0,0,0,1,0,1,0,1],[1,0,1,0,1,0,1,1,1,1,1,0,1],[1,0,1,0,1,0,0,0,0,0,0,0,1],[1,0,1,1,1,0,1,1,1,1,1,0,1],[1,0,0,0,0,0,1,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1]],[[1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,1,0,0,0,1,0,1,0,0,0,1],[1,0,1,1,1,0,1,0,1,0,1,0,1],[1,0,1,0,0,0,0,0,0,0,1,0,1],[1,0,1,1,1,1,1,1,1,0,1,1,1],[1,0,1,0,0,0,1,0,0,0,1,0,3],[1,0,1,1,1,0,1,0,1,1,1,0,1],[2,0,0,0,1,0,0,0,1,0,1,0,1],[1,1,1,0,1,0,1,0,1,0,1,0,1],[1,0,0,0,0,0,1,0,0,0,1,0,1],[1,0,1,1,1,0,1,1,1,0,1,0,1],[1,0,1,0,0,0,0,0,1,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1]]];let Ve={arrowleft:!1,arrowdown:!1,arrowright:!1,arrowup:!1,a:!1,s:!1,d:!1,w:!1};document.body.addEventListener("keydown",c=>{const e=c.code.replace("Key","").toLowerCase();Ve[e]!==void 0&&(Ve[e]=!0)});document.body.addEventListener("keyup",c=>{const e=c.code.replace("Key","").toLowerCase();Ve[e]!==void 0&&(Ve[e]=!1)});let tv=c=>{const e=document.createElement("template");return e.innerHTML=c.trim(),e.content.firstElementChild};function Wl(c){return new Promise((e,t)=>{Oc.load(c,n=>e(n),null,t)})}const Fo=new ev;Fo.toggleGame();function Uc(){requestAnimationFrame(Uc),Fo.update()}window.addEventListener("resize",Fo.resize);Uc();
//# sourceMappingURL=index-476139e9.js.map
