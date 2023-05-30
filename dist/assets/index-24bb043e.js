(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tr="150",ll=0,Or=1,cl=2,Sa=1,hl=2,Fi=3,En=0,Lt=1,wn=2,Sn=0,ui=1,Ur=2,Gr=3,kr=4,ul=5,li=100,dl=101,fl=102,Vr=103,Wr=104,pl=200,ml=201,gl=202,_l=203,Ea=204,Ta=205,xl=206,vl=207,yl=208,Ml=209,wl=210,bl=0,Sl=1,El=2,yr=3,Tl=4,Al=5,Cl=6,Ll=7,Aa=0,Rl=1,Pl=2,pn=0,Dl=1,Il=2,zl=3,Fl=4,Nl=5,Ca=300,pi=301,mi=302,Mr=303,wr=304,Es=306,Oi=1e3,kt=1001,br=1002,gt=1003,Hr=1004,zs=1005,zt=1006,Bl=1007,Ui=1008,Vn=1009,Ol=1010,Ul=1011,La=1012,Gl=1013,Un=1014,Gn=1015,Gi=1016,kl=1017,Vl=1018,di=1020,Wl=1021,Vt=1023,Hl=1024,ql=1025,kn=1026,gi=1027,Xl=1028,jl=1029,Yl=1030,$l=1031,Zl=1033,Fs=33776,Ns=33777,Bs=33778,Os=33779,qr=35840,Xr=35841,jr=35842,Yr=35843,Kl=36196,$r=37492,Zr=37496,Kr=37808,Jr=37809,Qr=37810,eo=37811,to=37812,no=37813,io=37814,so=37815,ro=37816,oo=37817,ao=37818,lo=37819,co=37820,ho=37821,Us=36492,Jl=36283,uo=36284,fo=36285,po=36286,Wn=3e3,ke=3001,Ql=3200,ec=3201,Ra=0,tc=1,Qt="srgb",ki="srgb-linear",Pa="display-p3",Gs=7680,nc=519,mo=35044,go="300 es",Sr=1035;class vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const at=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ks=Math.PI/180,_o=180/Math.PI;function qi(){const c=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(at[c&255]+at[c>>8&255]+at[c>>16&255]+at[c>>24&255]+"-"+at[e&255]+at[e>>8&255]+"-"+at[e>>16&15|64]+at[e>>24&255]+"-"+at[t&63|128]+at[t>>8&255]+"-"+at[t>>16&255]+at[t>>24&255]+at[n&255]+at[n>>8&255]+at[n>>16&255]+at[n>>24&255]).toLowerCase()}function At(c,e,t){return Math.max(e,Math.min(t,c))}function ic(c,e){return(c%e+e)%e}function Vs(c,e,t){return(1-t)*c+t*e}function xo(c){return(c&c-1)===0&&c!==0}function sc(c){return Math.pow(2,Math.floor(Math.log(c)/Math.LN2))}function Zi(c,e){switch(e.constructor){case Float32Array:return c;case Uint16Array:return c/65535;case Uint8Array:return c/255;case Int16Array:return Math.max(c/32767,-1);case Int8Array:return Math.max(c/127,-1);default:throw new Error("Invalid component type.")}}function St(c,e){switch(e.constructor){case Float32Array:return c;case Uint16Array:return Math.round(c*65535);case Uint8Array:return Math.round(c*255);case Int16Array:return Math.round(c*32767);case Int8Array:return Math.round(c*127);default:throw new Error("Invalid component type.")}}class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _t{constructor(){_t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,r,a,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=r,h[3]=t,h[4]=s,h[5]=a,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],r=n[3],a=n[6],l=n[1],h=n[4],d=n[7],u=n[2],m=n[5],g=n[8],p=i[0],f=i[3],_=i[6],x=i[1],M=i[4],w=i[7],S=i[2],C=i[5],D=i[8];return s[0]=o*p+r*x+a*S,s[3]=o*f+r*M+a*C,s[6]=o*_+r*w+a*D,s[1]=l*p+h*x+d*S,s[4]=l*f+h*M+d*C,s[7]=l*_+h*w+d*D,s[2]=u*p+m*x+g*S,s[5]=u*f+m*M+g*C,s[8]=u*_+m*w+g*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],r=e[5],a=e[6],l=e[7],h=e[8];return t*o*h-t*r*l-n*s*h+n*r*a+i*s*l-i*o*a}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],r=e[5],a=e[6],l=e[7],h=e[8],d=h*o-r*l,u=r*a-h*s,m=l*s-o*a,g=t*d+n*u+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=d*p,e[1]=(i*l-h*n)*p,e[2]=(r*n-i*o)*p,e[3]=u*p,e[4]=(h*t-i*a)*p,e[5]=(i*s-r*t)*p,e[6]=m*p,e[7]=(n*a-l*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,r){const a=Math.cos(s),l=Math.sin(s);return this.set(n*a,n*l,-n*(a*o+l*r)+o+e,-i*l,i*a,-i*(-l*o+a*r)+r+t,0,0,1),this}scale(e,t){return this.premultiply(Ws.makeScale(e,t)),this}rotate(e){return this.premultiply(Ws.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ws.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ws=new _t;function Da(c){for(let e=c.length-1;e>=0;--e)if(c[e]>=65535)return!0;return!1}function Vi(c){return document.createElementNS("http://www.w3.org/1999/xhtml",c)}let Xi=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,r){let a=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const u=s[o+0],m=s[o+1],g=s[o+2],p=s[o+3];if(r===0){e[t+0]=a,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(r===1){e[t+0]=u,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(d!==p||a!==u||l!==m||h!==g){let f=1-r;const _=a*u+l*m+h*g+d*p,x=_>=0?1:-1,M=1-_*_;if(M>Number.EPSILON){const S=Math.sqrt(M),C=Math.atan2(S,_*x);f=Math.sin(f*C)/S,r=Math.sin(r*C)/S}const w=r*x;if(a=a*f+u*w,l=l*f+m*w,h=h*f+g*w,d=d*f+p*w,f===1-r){const S=1/Math.sqrt(a*a+l*l+h*h+d*d);a*=S,l*=S,h*=S,d*=S}}e[t]=a,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,o){const r=n[i],a=n[i+1],l=n[i+2],h=n[i+3],d=s[o],u=s[o+1],m=s[o+2],g=s[o+3];return e[t]=r*g+h*d+a*m-l*u,e[t+1]=a*g+h*u+l*d-r*m,e[t+2]=l*g+h*m+r*u-a*d,e[t+3]=h*g-r*d-a*u-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,r=Math.cos,a=Math.sin,l=r(n/2),h=r(i/2),d=r(s/2),u=a(n/2),m=a(i/2),g=a(s/2);switch(o){case"XYZ":this._x=u*h*d+l*m*g,this._y=l*m*d-u*h*g,this._z=l*h*g+u*m*d,this._w=l*h*d-u*m*g;break;case"YXZ":this._x=u*h*d+l*m*g,this._y=l*m*d-u*h*g,this._z=l*h*g-u*m*d,this._w=l*h*d+u*m*g;break;case"ZXY":this._x=u*h*d-l*m*g,this._y=l*m*d+u*h*g,this._z=l*h*g+u*m*d,this._w=l*h*d-u*m*g;break;case"ZYX":this._x=u*h*d-l*m*g,this._y=l*m*d+u*h*g,this._z=l*h*g-u*m*d,this._w=l*h*d+u*m*g;break;case"YZX":this._x=u*h*d+l*m*g,this._y=l*m*d+u*h*g,this._z=l*h*g-u*m*d,this._w=l*h*d-u*m*g;break;case"XZY":this._x=u*h*d-l*m*g,this._y=l*m*d-u*h*g,this._z=l*h*g+u*m*d,this._w=l*h*d+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],r=t[5],a=t[9],l=t[2],h=t[6],d=t[10],u=n+r+d;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-a)*m,this._y=(s-l)*m,this._z=(o-i)*m}else if(n>r&&n>d){const m=2*Math.sqrt(1+n-r-d);this._w=(h-a)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+l)/m}else if(r>d){const m=2*Math.sqrt(1+r-n-d);this._w=(s-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(a+h)/m}else{const m=2*Math.sqrt(1+d-n-r);this._w=(o-i)/m,this._x=(s+l)/m,this._y=(a+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,r=t._x,a=t._y,l=t._z,h=t._w;return this._x=n*h+o*r+i*l-s*a,this._y=i*h+o*a+s*r-n*l,this._z=s*h+o*l+n*a-i*r,this._w=o*h-n*r-i*a-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let r=o*e._w+n*e._x+i*e._y+s*e._z;if(r<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,r=-r):this.copy(e),r>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const a=1-r*r;if(a<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(a),h=Math.atan2(l,r),d=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class G{constructor(e=0,t=0,n=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,r=e.z,a=e.w,l=a*t+o*i-r*n,h=a*n+r*t-s*i,d=a*i+s*n-o*t,u=-s*t-o*n-r*i;return this.x=l*a+u*-s+h*-r-d*-o,this.y=h*a+u*-o+d*-s-l*-r,this.z=d*a+u*-r+l*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,r=t.y,a=t.z;return this.x=i*a-s*r,this.y=s*o-n*a,this.z=n*r-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Hs.copy(this).projectOnVector(e),this.sub(Hs)}reflect(e){return this.sub(Hs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hs=new G,vo=new Xi;function fi(c){return c<.04045?c*.0773993808:Math.pow(c*.9478672986+.0521327014,2.4)}function qs(c){return c<.0031308?c*12.92:1.055*Math.pow(c,.41666)-.055}const rc=new _t().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),oc=new _t().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),bn=new G;function ac(c){return c.convertSRGBToLinear(),bn.set(c.r,c.g,c.b).applyMatrix3(oc),c.setRGB(bn.x,bn.y,bn.z)}function lc(c){return bn.set(c.r,c.g,c.b).applyMatrix3(rc),c.setRGB(bn.x,bn.y,bn.z).convertLinearToSRGB()}const cc={[ki]:c=>c,[Qt]:c=>c.convertSRGBToLinear(),[Pa]:ac},hc={[ki]:c=>c,[Qt]:c=>c.convertLinearToSRGB(),[Pa]:lc},pt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(c){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!c},get workingColorSpace(){return ki},set workingColorSpace(c){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(c,e,t){if(this.enabled===!1||e===t||!e||!t)return c;const n=cc[e],i=hc[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(c))},fromWorkingColorSpace:function(c,e){return this.convert(c,this.workingColorSpace,e)},toWorkingColorSpace:function(c,e){return this.convert(c,e,this.workingColorSpace)}};let Xn;class Ia{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xn===void 0&&(Xn=Vi("canvas")),Xn.width=e.width,Xn.height=e.height;const n=Xn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Xn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Vi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=fi(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fi(t[n]/255)*255):t[n]=fi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class za{constructor(e=null){this.isSource=!0,this.uuid=qi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,r=i.length;o<r;o++)i[o].isDataTexture?s.push(Xs(i[o].image)):s.push(Xs(i[o]))}else s=Xs(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Xs(c){return typeof HTMLImageElement<"u"&&c instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&c instanceof ImageBitmap?Ia.getDataURL(c):c.data?{data:Array.from(c.data),width:c.width,height:c.height,type:c.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uc=0;class yt extends vi{constructor(e=yt.DEFAULT_IMAGE,t=yt.DEFAULT_MAPPING,n=kt,i=kt,s=zt,o=Ui,r=Vt,a=Vn,l=yt.DEFAULT_ANISOTROPY,h=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uc++}),this.uuid=qi(),this.name="",this.source=new za(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=r,this.internalFormat=null,this.type=a,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ca)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oi:e.x=e.x-Math.floor(e.x);break;case kt:e.x=e.x<0?0:1;break;case br:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Oi:e.y=e.y-Math.floor(e.y);break;case kt:e.y=e.y<0?0:1;break;case br:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}yt.DEFAULT_IMAGE=null;yt.DEFAULT_MAPPING=Ca;yt.DEFAULT_ANISOTROPY=1;class Ve{constructor(e=0,t=0,n=0,i=1){Ve.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const a=e.elements,l=a[0],h=a[4],d=a[8],u=a[1],m=a[5],g=a[9],p=a[2],f=a[6],_=a[10];if(Math.abs(h-u)<.01&&Math.abs(d-p)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+p)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,w=(m+1)/2,S=(_+1)/2,C=(h+u)/4,D=(d+p)/4,v=(g+f)/4;return M>w&&M>S?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=C/n,s=D/n):w>S?w<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(w),n=C/i,s=v/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=D/s,i=v/s),this.set(n,i,s,t),this}let x=Math.sqrt((f-g)*(f-g)+(d-p)*(d-p)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(f-g)/x,this.y=(d-p)/x,this.z=(u-h)/x,this.w=Math.acos((l+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hn extends vi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ve(0,0,e,t),this.scissorTest=!1,this.viewport=new Ve(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new yt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:zt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new za(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fa extends yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=gt,this.minFilter=gt,this.wrapR=kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dc extends yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=gt,this.minFilter=gt,this.wrapR=kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ji{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,r=-1/0;for(let a=0,l=e.length;a<l;a+=3){const h=e[a],d=e[a+1],u=e[a+2];h<t&&(t=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>o&&(o=d),u>r&&(r=u)}return this.min.set(t,n,i),this.max.set(s,o,r),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,r=-1/0;for(let a=0,l=e.count;a<l;a++){const h=e.getX(a),d=e.getY(a),u=e.getZ(a);h<t&&(t=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>o&&(o=d),u>r&&(r=u)}return this.min.set(t,n,i),this.max.set(s,o,r),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,r=s.count;o<r;o++)Ln.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Ln)}else n.boundingBox===null&&n.computeBoundingBox(),js.copy(n.boundingBox),js.applyMatrix4(e.matrixWorld),this.union(js);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wi),Ki.subVectors(this.max,wi),jn.subVectors(e.a,wi),Yn.subVectors(e.b,wi),$n.subVectors(e.c,wi),gn.subVectors(Yn,jn),_n.subVectors($n,Yn),Rn.subVectors(jn,$n);let t=[0,-gn.z,gn.y,0,-_n.z,_n.y,0,-Rn.z,Rn.y,gn.z,0,-gn.x,_n.z,0,-_n.x,Rn.z,0,-Rn.x,-gn.y,gn.x,0,-_n.y,_n.x,0,-Rn.y,Rn.x,0];return!Ys(t,jn,Yn,$n,Ki)||(t=[1,0,0,0,1,0,0,0,1],!Ys(t,jn,Yn,$n,Ki))?!1:(Ji.crossVectors(gn,_n),t=[Ji.x,Ji.y,Ji.z],Ys(t,jn,Yn,$n,Ki))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const nn=[new G,new G,new G,new G,new G,new G,new G,new G],Ln=new G,js=new ji,jn=new G,Yn=new G,$n=new G,gn=new G,_n=new G,Rn=new G,wi=new G,Ki=new G,Ji=new G,Pn=new G;function Ys(c,e,t,n,i){for(let s=0,o=c.length-3;s<=o;s+=3){Pn.fromArray(c,s);const r=i.x*Math.abs(Pn.x)+i.y*Math.abs(Pn.y)+i.z*Math.abs(Pn.z),a=e.dot(Pn),l=t.dot(Pn),h=n.dot(Pn);if(Math.max(-Math.max(a,l,h),Math.min(a,l,h))>r)return!1}return!0}const fc=new ji,bi=new G,$s=new G;let Ar=class{constructor(e=new G,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):fc.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bi.subVectors(e,this.center);const t=bi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(bi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($s.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bi.copy(e.center).add($s)),this.expandByPoint(bi.copy(e.center).sub($s))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};const sn=new G,Zs=new G,Qi=new G,xn=new G,Ks=new G,es=new G,Js=new G;let pc=class{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sn.copy(this.origin).addScaledVector(this.direction,t),sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Zs.copy(e).add(t).multiplyScalar(.5),Qi.copy(t).sub(e).normalize(),xn.copy(this.origin).sub(Zs);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Qi),r=xn.dot(this.direction),a=-xn.dot(Qi),l=xn.lengthSq(),h=Math.abs(1-o*o);let d,u,m,g;if(h>0)if(d=o*a-r,u=o*r-a,g=s*h,d>=0)if(u>=-g)if(u<=g){const p=1/h;d*=p,u*=p,m=d*(d+o*u+2*r)+u*(o*d+u+2*a)+l}else u=s,d=Math.max(0,-(o*u+r)),m=-d*d+u*(u+2*a)+l;else u=-s,d=Math.max(0,-(o*u+r)),m=-d*d+u*(u+2*a)+l;else u<=-g?(d=Math.max(0,-(-o*s+r)),u=d>0?-s:Math.min(Math.max(-s,-a),s),m=-d*d+u*(u+2*a)+l):u<=g?(d=0,u=Math.min(Math.max(-s,-a),s),m=u*(u+2*a)+l):(d=Math.max(0,-(o*s+r)),u=d>0?s:Math.min(Math.max(-s,-a),s),m=-d*d+u*(u+2*a)+l);else u=o>0?-s:s,d=Math.max(0,-(o*u+r)),m=-d*d+u*(u+2*a)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Zs).addScaledVector(Qi,u),m}intersectSphere(e,t){sn.subVectors(e.center,this.origin);const n=sn.dot(this.direction),i=sn.dot(sn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),r=n-o,a=n+o;return a<0?null:r<0?this.at(a,t):this.at(r,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,r,a;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),h>=0?(s=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(r=(e.min.z-u.z)*d,a=(e.max.z-u.z)*d):(r=(e.max.z-u.z)*d,a=(e.min.z-u.z)*d),n>a||r>i)||((r>n||n!==n)&&(n=r),(a<i||i!==i)&&(i=a),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,sn)!==null}intersectTriangle(e,t,n,i,s){Ks.subVectors(t,e),es.subVectors(n,e),Js.crossVectors(Ks,es);let o=this.direction.dot(Js),r;if(o>0){if(i)return null;r=1}else if(o<0)r=-1,o=-o;else return null;xn.subVectors(this.origin,e);const a=r*this.direction.dot(es.crossVectors(xn,es));if(a<0)return null;const l=r*this.direction.dot(Ks.cross(xn));if(l<0||a+l>o)return null;const h=-r*xn.dot(Js);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Qe{constructor(){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,r,a,l,h,d,u,m,g,p,f){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=o,_[9]=r,_[13]=a,_[2]=l,_[6]=h,_[10]=d,_[14]=u,_[3]=m,_[7]=g,_[11]=p,_[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Zn.setFromMatrixColumn(e,0).length(),s=1/Zn.setFromMatrixColumn(e,1).length(),o=1/Zn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),r=Math.sin(n),a=Math.cos(i),l=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=o*h,m=o*d,g=r*h,p=r*d;t[0]=a*h,t[4]=-a*d,t[8]=l,t[1]=m+g*l,t[5]=u-p*l,t[9]=-r*a,t[2]=p-u*l,t[6]=g+m*l,t[10]=o*a}else if(e.order==="YXZ"){const u=a*h,m=a*d,g=l*h,p=l*d;t[0]=u+p*r,t[4]=g*r-m,t[8]=o*l,t[1]=o*d,t[5]=o*h,t[9]=-r,t[2]=m*r-g,t[6]=p+u*r,t[10]=o*a}else if(e.order==="ZXY"){const u=a*h,m=a*d,g=l*h,p=l*d;t[0]=u-p*r,t[4]=-o*d,t[8]=g+m*r,t[1]=m+g*r,t[5]=o*h,t[9]=p-u*r,t[2]=-o*l,t[6]=r,t[10]=o*a}else if(e.order==="ZYX"){const u=o*h,m=o*d,g=r*h,p=r*d;t[0]=a*h,t[4]=g*l-m,t[8]=u*l+p,t[1]=a*d,t[5]=p*l+u,t[9]=m*l-g,t[2]=-l,t[6]=r*a,t[10]=o*a}else if(e.order==="YZX"){const u=o*a,m=o*l,g=r*a,p=r*l;t[0]=a*h,t[4]=p-u*d,t[8]=g*d+m,t[1]=d,t[5]=o*h,t[9]=-r*h,t[2]=-l*h,t[6]=m*d+g,t[10]=u-p*d}else if(e.order==="XZY"){const u=o*a,m=o*l,g=r*a,p=r*l;t[0]=a*h,t[4]=-d,t[8]=l*h,t[1]=u*d+p,t[5]=o*h,t[9]=m*d-g,t[2]=g*d-m,t[6]=r*h,t[10]=p*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mc,e,gc)}lookAt(e,t,n){const i=this.elements;return Et.subVectors(e,t),Et.lengthSq()===0&&(Et.z=1),Et.normalize(),vn.crossVectors(n,Et),vn.lengthSq()===0&&(Math.abs(n.z)===1?Et.x+=1e-4:Et.z+=1e-4,Et.normalize(),vn.crossVectors(n,Et)),vn.normalize(),ts.crossVectors(Et,vn),i[0]=vn.x,i[4]=ts.x,i[8]=Et.x,i[1]=vn.y,i[5]=ts.y,i[9]=Et.y,i[2]=vn.z,i[6]=ts.z,i[10]=Et.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],r=n[4],a=n[8],l=n[12],h=n[1],d=n[5],u=n[9],m=n[13],g=n[2],p=n[6],f=n[10],_=n[14],x=n[3],M=n[7],w=n[11],S=n[15],C=i[0],D=i[4],v=i[8],b=i[12],P=i[1],O=i[5],N=i[9],A=i[13],L=i[2],I=i[6],z=i[10],H=i[14],V=i[3],X=i[7],J=i[11],oe=i[15];return s[0]=o*C+r*P+a*L+l*V,s[4]=o*D+r*O+a*I+l*X,s[8]=o*v+r*N+a*z+l*J,s[12]=o*b+r*A+a*H+l*oe,s[1]=h*C+d*P+u*L+m*V,s[5]=h*D+d*O+u*I+m*X,s[9]=h*v+d*N+u*z+m*J,s[13]=h*b+d*A+u*H+m*oe,s[2]=g*C+p*P+f*L+_*V,s[6]=g*D+p*O+f*I+_*X,s[10]=g*v+p*N+f*z+_*J,s[14]=g*b+p*A+f*H+_*oe,s[3]=x*C+M*P+w*L+S*V,s[7]=x*D+M*O+w*I+S*X,s[11]=x*v+M*N+w*z+S*J,s[15]=x*b+M*A+w*H+S*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],r=e[5],a=e[9],l=e[13],h=e[2],d=e[6],u=e[10],m=e[14],g=e[3],p=e[7],f=e[11],_=e[15];return g*(+s*a*d-i*l*d-s*r*u+n*l*u+i*r*m-n*a*m)+p*(+t*a*m-t*l*u+s*o*u-i*o*m+i*l*h-s*a*h)+f*(+t*l*d-t*r*m-s*o*d+n*o*m+s*r*h-n*l*h)+_*(-i*r*h-t*a*d+t*r*u+i*o*d-n*o*u+n*a*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],r=e[5],a=e[6],l=e[7],h=e[8],d=e[9],u=e[10],m=e[11],g=e[12],p=e[13],f=e[14],_=e[15],x=d*f*l-p*u*l+p*a*m-r*f*m-d*a*_+r*u*_,M=g*u*l-h*f*l-g*a*m+o*f*m+h*a*_-o*u*_,w=h*p*l-g*d*l+g*r*m-o*p*m-h*r*_+o*d*_,S=g*d*a-h*p*a-g*r*u+o*p*u+h*r*f-o*d*f,C=t*x+n*M+i*w+s*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/C;return e[0]=x*D,e[1]=(p*u*s-d*f*s-p*i*m+n*f*m+d*i*_-n*u*_)*D,e[2]=(r*f*s-p*a*s+p*i*l-n*f*l-r*i*_+n*a*_)*D,e[3]=(d*a*s-r*u*s-d*i*l+n*u*l+r*i*m-n*a*m)*D,e[4]=M*D,e[5]=(h*f*s-g*u*s+g*i*m-t*f*m-h*i*_+t*u*_)*D,e[6]=(g*a*s-o*f*s-g*i*l+t*f*l+o*i*_-t*a*_)*D,e[7]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*m+t*a*m)*D,e[8]=w*D,e[9]=(g*d*s-h*p*s-g*n*m+t*p*m+h*n*_-t*d*_)*D,e[10]=(o*p*s-g*r*s+g*n*l-t*p*l-o*n*_+t*r*_)*D,e[11]=(h*r*s-o*d*s-h*n*l+t*d*l+o*n*m-t*r*m)*D,e[12]=S*D,e[13]=(h*p*i-g*d*i+g*n*u-t*p*u-h*n*f+t*d*f)*D,e[14]=(g*r*i-o*p*i-g*n*a+t*p*a+o*n*f-t*r*f)*D,e[15]=(o*d*i-h*r*i+h*n*a-t*d*a-o*n*u+t*r*u)*D,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,r=e.y,a=e.z,l=s*o,h=s*r;return this.set(l*o+n,l*r-i*a,l*a+i*r,0,l*r+i*a,h*r+n,h*a-i*o,0,l*a-i*r,h*a+i*o,s*a*a+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,r=t._z,a=t._w,l=s+s,h=o+o,d=r+r,u=s*l,m=s*h,g=s*d,p=o*h,f=o*d,_=r*d,x=a*l,M=a*h,w=a*d,S=n.x,C=n.y,D=n.z;return i[0]=(1-(p+_))*S,i[1]=(m+w)*S,i[2]=(g-M)*S,i[3]=0,i[4]=(m-w)*C,i[5]=(1-(u+_))*C,i[6]=(f+x)*C,i[7]=0,i[8]=(g+M)*D,i[9]=(f-x)*D,i[10]=(1-(u+p))*D,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Zn.set(i[0],i[1],i[2]).length();const o=Zn.set(i[4],i[5],i[6]).length(),r=Zn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Bt.copy(this);const l=1/s,h=1/o,d=1/r;return Bt.elements[0]*=l,Bt.elements[1]*=l,Bt.elements[2]*=l,Bt.elements[4]*=h,Bt.elements[5]*=h,Bt.elements[6]*=h,Bt.elements[8]*=d,Bt.elements[9]*=d,Bt.elements[10]*=d,t.setFromRotationMatrix(Bt),n.x=s,n.y=o,n.z=r,this}makePerspective(e,t,n,i,s,o){const r=this.elements,a=2*s/(t-e),l=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i),u=-(o+s)/(o-s),m=-2*o*s/(o-s);return r[0]=a,r[4]=0,r[8]=h,r[12]=0,r[1]=0,r[5]=l,r[9]=d,r[13]=0,r[2]=0,r[6]=0,r[10]=u,r[14]=m,r[3]=0,r[7]=0,r[11]=-1,r[15]=0,this}makeOrthographic(e,t,n,i,s,o){const r=this.elements,a=1/(t-e),l=1/(n-i),h=1/(o-s),d=(t+e)*a,u=(n+i)*l,m=(o+s)*h;return r[0]=2*a,r[4]=0,r[8]=0,r[12]=-d,r[1]=0,r[5]=2*l,r[9]=0,r[13]=-u,r[2]=0,r[6]=0,r[10]=-2*h,r[14]=-m,r[3]=0,r[7]=0,r[11]=0,r[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Zn=new G,Bt=new Qe,mc=new G(0,0,0),gc=new G(1,1,1),vn=new G,ts=new G,Et=new G,yo=new Qe,Mo=new Xi;class Ts{constructor(e=0,t=0,n=0,i=Ts.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],r=i[8],a=i[1],l=i[5],h=i[9],d=i[2],u=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(At(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-At(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,m),this._z=Math.atan2(a,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(At(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(a,s));break;case"ZYX":this._y=Math.asin(-At(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(a,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(r,m));break;case"XZY":this._z=Math.asin(-At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mo.setFromEuler(this),this.setFromQuaternion(Mo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ts.DEFAULT_ORDER="XYZ";class Na{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _c=0;const wo=new G,Kn=new Xi,rn=new Qe,ns=new G,Si=new G,xc=new G,vc=new Xi,bo=new G(1,0,0),So=new G(0,1,0),Eo=new G(0,0,1),yc={type:"added"},To={type:"removed"};class Mt extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_c++}),this.uuid=qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new G,t=new Ts,n=new Xi,i=new G(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Qe},normalMatrix:{value:new _t}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Na,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Kn.setFromAxisAngle(e,t),this.quaternion.multiply(Kn),this}rotateOnWorldAxis(e,t){return Kn.setFromAxisAngle(e,t),this.quaternion.premultiply(Kn),this}rotateX(e){return this.rotateOnAxis(bo,e)}rotateY(e){return this.rotateOnAxis(So,e)}rotateZ(e){return this.rotateOnAxis(Eo,e)}translateOnAxis(e,t){return wo.copy(e).applyQuaternion(this.quaternion),this.position.add(wo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bo,e)}translateY(e){return this.translateOnAxis(So,e)}translateZ(e){return this.translateOnAxis(Eo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ns.copy(e):ns.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Si.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(Si,ns,this.up):rn.lookAt(ns,Si,this.up),this.quaternion.setFromRotationMatrix(rn),i&&(rn.extractRotation(i.matrixWorld),Kn.setFromRotationMatrix(rn),this.quaternion.premultiply(Kn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(yc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(To)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(To)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(rn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Si,e,xc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Si,vc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const r=i[s];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(r,a){return r[a.uuid]===void 0&&(r[a.uuid]=a.toJSON(e)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const a=r.shapes;if(Array.isArray(a))for(let l=0,h=a.length;l<h;l++){const d=a[l];s(e.shapes,d)}else s(e.shapes,a)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let a=0,l=this.material.length;a<l;a++)r.push(s(e.materials,this.material[a]));i.material=r}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let r=0;r<this.children.length;r++)i.children.push(this.children[r].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let r=0;r<this.animations.length;r++){const a=this.animations[r];i.animations.push(s(e.animations,a))}}if(t){const r=o(e.geometries),a=o(e.materials),l=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),m=o(e.animations),g=o(e.nodes);r.length>0&&(n.geometries=r),a.length>0&&(n.materials=a),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(r){const a=[];for(const l in r){const h=r[l];delete h.metadata,a.push(h)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Mt.DEFAULT_UP=new G(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ot=new G,on=new G,Qs=new G,an=new G,Jn=new G,Qn=new G,Ao=new G,er=new G,tr=new G,nr=new G;class fn{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ot.subVectors(e,t),i.cross(Ot);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ot.subVectors(i,t),on.subVectors(n,t),Qs.subVectors(e,t);const o=Ot.dot(Ot),r=Ot.dot(on),a=Ot.dot(Qs),l=on.dot(on),h=on.dot(Qs),d=o*l-r*r;if(d===0)return s.set(-2,-1,-1);const u=1/d,m=(l*a-r*h)*u,g=(o*h-r*a)*u;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,an),an.x>=0&&an.y>=0&&an.x+an.y<=1}static getUV(e,t,n,i,s,o,r,a){return this.getBarycoord(e,t,n,i,an),a.set(0,0),a.addScaledVector(s,an.x),a.addScaledVector(o,an.y),a.addScaledVector(r,an.z),a}static isFrontFacing(e,t,n,i){return Ot.subVectors(n,t),on.subVectors(e,t),Ot.cross(on).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ot.subVectors(this.c,this.b),on.subVectors(this.a,this.b),Ot.cross(on).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return fn.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,r;Jn.subVectors(i,n),Qn.subVectors(s,n),er.subVectors(e,n);const a=Jn.dot(er),l=Qn.dot(er);if(a<=0&&l<=0)return t.copy(n);tr.subVectors(e,i);const h=Jn.dot(tr),d=Qn.dot(tr);if(h>=0&&d<=h)return t.copy(i);const u=a*d-h*l;if(u<=0&&a>=0&&h<=0)return o=a/(a-h),t.copy(n).addScaledVector(Jn,o);nr.subVectors(e,s);const m=Jn.dot(nr),g=Qn.dot(nr);if(g>=0&&m<=g)return t.copy(s);const p=m*l-a*g;if(p<=0&&l>=0&&g<=0)return r=l/(l-g),t.copy(n).addScaledVector(Qn,r);const f=h*g-m*d;if(f<=0&&d-h>=0&&m-g>=0)return Ao.subVectors(s,i),r=(d-h)/(d-h+(m-g)),t.copy(i).addScaledVector(Ao,r);const _=1/(f+p+u);return o=p*_,r=u*_,t.copy(n).addScaledVector(Jn,o).addScaledVector(Qn,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Mc=0,Yi=class extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mc++}),this.uuid=qi(),this.name="",this.type="Material",this.blending=ui,this.side=En,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ea,this.blendDst=Ta,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ui&&(n.blending=this.blending),this.side!==En&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const r in s){const a=s[r];delete a.metadata,o.push(a)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};const Ba={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ut={h:0,s:0,l:0},is={h:0,s:0,l:0};function ir(c,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?c+(e-c)*6*t:t<1/2?e:t<2/3?c+(e-c)*6*(2/3-t):c}class Oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=pt.workingColorSpace){if(e=ic(e,1),t=At(t,0,1),n=At(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ir(o,s,e+1/3),this.g=ir(o,s,e),this.b=ir(o,s,e-1/3)}return pt.toWorkingColorSpace(this,i),this}setStyle(e,t=Qt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],r=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,pt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,pt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)){const a=parseFloat(s[1])/360,l=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(a,l,h,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,pt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,pt.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const n=Ba[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return pt.fromWorkingColorSpace(lt.copy(this),e),At(lt.r*255,0,255)<<16^At(lt.g*255,0,255)<<8^At(lt.b*255,0,255)<<0}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(lt.copy(this),t);const n=lt.r,i=lt.g,s=lt.b,o=Math.max(n,i,s),r=Math.min(n,i,s);let a,l;const h=(r+o)/2;if(r===o)a=0,l=0;else{const d=o-r;switch(l=h<=.5?d/(o+r):d/(2-o-r),o){case n:a=(i-s)/d+(i<s?6:0);break;case i:a=(s-n)/d+2;break;case s:a=(n-i)/d+4;break}a/=6}return e.h=a,e.s=l,e.l=h,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(lt.copy(this),t),e.r=lt.r,e.g=lt.g,e.b=lt.b,e}getStyle(e=Qt){pt.fromWorkingColorSpace(lt.copy(this),e);const t=lt.r,n=lt.g,i=lt.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(Ut),Ut.h+=e,Ut.s+=t,Ut.l+=n,this.setHSL(Ut.h,Ut.s,Ut.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ut),e.getHSL(is);const n=Vs(Ut.h,is.h,t),i=Vs(Ut.s,is.s,t),s=Vs(Ut.l,is.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const lt=new Oe;Oe.NAMES=Ba;class Cr extends Yi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ze=new G,ss=new Be;class Ht{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=mo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ss.fromBufferAttribute(this,t),ss.applyMatrix3(e),this.setXY(t,ss.x,ss.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ze.fromBufferAttribute(this,t),Ze.applyMatrix3(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ze.fromBufferAttribute(this,t),Ze.applyMatrix4(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ze.fromBufferAttribute(this,t),Ze.applyNormalMatrix(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ze.fromBufferAttribute(this,t),Ze.transformDirection(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zi(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zi(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zi(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mo&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Oa extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ua extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ct extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}}let wc=0;const It=new Qe,sr=new Mt,ei=new G,Tt=new ji,Ei=new ji,ot=new G;class Rt extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wc++}),this.uuid=qi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Da(e)?Ua:Oa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new _t().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return It.makeRotationFromQuaternion(e),this.applyMatrix4(It),this}rotateX(e){return It.makeRotationX(e),this.applyMatrix4(It),this}rotateY(e){return It.makeRotationY(e),this.applyMatrix4(It),this}rotateZ(e){return It.makeRotationZ(e),this.applyMatrix4(It),this}translate(e,t,n){return It.makeTranslation(e,t,n),this.applyMatrix4(It),this}scale(e,t,n){return It.makeScale(e,t,n),this.applyMatrix4(It),this}lookAt(e){return sr.lookAt(e),sr.updateMatrix(),this.applyMatrix4(sr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ei).negate(),this.translate(ei.x,ei.y,ei.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ct(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Tt.setFromBufferAttribute(s),this.morphTargetsRelative?(ot.addVectors(this.boundingBox.min,Tt.min),this.boundingBox.expandByPoint(ot),ot.addVectors(this.boundingBox.max,Tt.max),this.boundingBox.expandByPoint(ot)):(this.boundingBox.expandByPoint(Tt.min),this.boundingBox.expandByPoint(Tt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ar);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(Tt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const r=t[s];Ei.setFromBufferAttribute(r),this.morphTargetsRelative?(ot.addVectors(Tt.min,Ei.min),Tt.expandByPoint(ot),ot.addVectors(Tt.max,Ei.max),Tt.expandByPoint(ot)):(Tt.expandByPoint(Ei.min),Tt.expandByPoint(Ei.max))}Tt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)ot.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ot));if(t)for(let s=0,o=t.length;s<o;s++){const r=t[s],a=this.morphTargetsRelative;for(let l=0,h=r.count;l<h;l++)ot.fromBufferAttribute(r,l),a&&(ei.fromBufferAttribute(e,l),ot.add(ei)),i=Math.max(i,n.distanceToSquared(ot))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,r=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*r),4));const a=this.getAttribute("tangent").array,l=[],h=[];for(let P=0;P<r;P++)l[P]=new G,h[P]=new G;const d=new G,u=new G,m=new G,g=new Be,p=new Be,f=new Be,_=new G,x=new G;function M(P,O,N){d.fromArray(i,P*3),u.fromArray(i,O*3),m.fromArray(i,N*3),g.fromArray(o,P*2),p.fromArray(o,O*2),f.fromArray(o,N*2),u.sub(d),m.sub(d),p.sub(g),f.sub(g);const A=1/(p.x*f.y-f.x*p.y);isFinite(A)&&(_.copy(u).multiplyScalar(f.y).addScaledVector(m,-p.y).multiplyScalar(A),x.copy(m).multiplyScalar(p.x).addScaledVector(u,-f.x).multiplyScalar(A),l[P].add(_),l[O].add(_),l[N].add(_),h[P].add(x),h[O].add(x),h[N].add(x))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let P=0,O=w.length;P<O;++P){const N=w[P],A=N.start,L=N.count;for(let I=A,z=A+L;I<z;I+=3)M(n[I+0],n[I+1],n[I+2])}const S=new G,C=new G,D=new G,v=new G;function b(P){D.fromArray(s,P*3),v.copy(D);const O=l[P];S.copy(O),S.sub(D.multiplyScalar(D.dot(O))).normalize(),C.crossVectors(v,O);const A=C.dot(h[P])<0?-1:1;a[P*4]=S.x,a[P*4+1]=S.y,a[P*4+2]=S.z,a[P*4+3]=A}for(let P=0,O=w.length;P<O;++P){const N=w[P],A=N.start,L=N.count;for(let I=A,z=A+L;I<z;I+=3)b(n[I+0]),b(n[I+1]),b(n[I+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const i=new G,s=new G,o=new G,r=new G,a=new G,l=new G,h=new G,d=new G;if(e)for(let u=0,m=e.count;u<m;u+=3){const g=e.getX(u+0),p=e.getX(u+1),f=e.getX(u+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,f),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),r.fromBufferAttribute(n,g),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,f),r.add(h),a.add(h),l.add(h),n.setXYZ(g,r.x,r.y,r.z),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let u=0,m=t.count;u<m;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ot.fromBufferAttribute(e,t),ot.normalize(),e.setXYZ(t,ot.x,ot.y,ot.z)}toNonIndexed(){function e(r,a){const l=r.array,h=r.itemSize,d=r.normalized,u=new l.constructor(a.length*h);let m=0,g=0;for(let p=0,f=a.length;p<f;p++){r.isInterleavedBufferAttribute?m=a[p]*r.data.stride+r.offset:m=a[p]*h;for(let _=0;_<h;_++)u[g++]=l[m++]}return new Ht(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rt,n=this.index.array,i=this.attributes;for(const r in i){const a=i[r],l=e(a,n);t.setAttribute(r,l)}const s=this.morphAttributes;for(const r in s){const a=[],l=s[r];for(let h=0,d=l.length;h<d;h++){const u=l[h],m=e(u,n);a.push(m)}t.morphAttributes[r]=a}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let r=0,a=o.length;r<a;r++){const l=o[r];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const l in a)a[l]!==void 0&&(e[l]=a[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const a in n){const l=n[a];e.data.attributes[a]=l.toJSON(e.data)}const i={};let s=!1;for(const a in this.morphAttributes){const l=this.morphAttributes[a],h=[];for(let d=0,u=l.length;d<u;d++){const m=l[d];h.push(m.toJSON(e.data))}h.length>0&&(i[a]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const r=this.boundingSphere;return r!==null&&(e.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],d=s[l];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const r=e.boundingBox;r!==null&&(this.boundingBox=r.clone());const a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Co=new Qe,Yt=new pc,rs=new Ar,Lo=new G,Ti=new G,Ai=new G,Ci=new G,rr=new G,os=new G,as=new Be,ls=new Be,cs=new Be,or=new G,hs=new G;class Je extends Mt{constructor(e=new Rt,t=new Cr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const r=this.morphTargetInfluences;if(s&&r){os.set(0,0,0);for(let a=0,l=s.length;a<l;a++){const h=r[a],d=s[a];h!==0&&(rr.fromBufferAttribute(d,e),o?os.addScaledVector(rr,h):os.addScaledVector(rr.sub(t),h))}t.add(os)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),rs.copy(n.boundingSphere),rs.applyMatrix4(s),Yt.copy(e.ray).recast(e.near),rs.containsPoint(Yt.origin)===!1&&(Yt.intersectSphere(rs,Lo)===null||Yt.origin.distanceToSquared(Lo)>(e.far-e.near)**2))||(Co.copy(s).invert(),Yt.copy(e.ray).applyMatrix4(Co),n.boundingBox!==null&&Yt.intersectsBox(n.boundingBox)===!1))return;let o;const r=n.index,a=n.attributes.position,l=n.attributes.uv,h=n.attributes.uv2,d=n.groups,u=n.drawRange;if(r!==null)if(Array.isArray(i))for(let m=0,g=d.length;m<g;m++){const p=d[m],f=i[p.materialIndex],_=Math.max(p.start,u.start),x=Math.min(r.count,Math.min(p.start+p.count,u.start+u.count));for(let M=_,w=x;M<w;M+=3){const S=r.getX(M),C=r.getX(M+1),D=r.getX(M+2);o=us(this,f,e,Yt,l,h,S,C,D),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,u.start),g=Math.min(r.count,u.start+u.count);for(let p=m,f=g;p<f;p+=3){const _=r.getX(p),x=r.getX(p+1),M=r.getX(p+2);o=us(this,i,e,Yt,l,h,_,x,M),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(a!==void 0)if(Array.isArray(i))for(let m=0,g=d.length;m<g;m++){const p=d[m],f=i[p.materialIndex],_=Math.max(p.start,u.start),x=Math.min(a.count,Math.min(p.start+p.count,u.start+u.count));for(let M=_,w=x;M<w;M+=3){const S=M,C=M+1,D=M+2;o=us(this,f,e,Yt,l,h,S,C,D),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,u.start),g=Math.min(a.count,u.start+u.count);for(let p=m,f=g;p<f;p+=3){const _=p,x=p+1,M=p+2;o=us(this,i,e,Yt,l,h,_,x,M),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}}function bc(c,e,t,n,i,s,o,r){let a;if(e.side===Lt?a=n.intersectTriangle(o,s,i,!0,r):a=n.intersectTriangle(i,s,o,e.side===En,r),a===null)return null;hs.copy(r),hs.applyMatrix4(c.matrixWorld);const l=t.ray.origin.distanceTo(hs);return l<t.near||l>t.far?null:{distance:l,point:hs.clone(),object:c}}function us(c,e,t,n,i,s,o,r,a){c.getVertexPosition(o,Ti),c.getVertexPosition(r,Ai),c.getVertexPosition(a,Ci);const l=bc(c,e,t,n,Ti,Ai,Ci,or);if(l){i&&(as.fromBufferAttribute(i,o),ls.fromBufferAttribute(i,r),cs.fromBufferAttribute(i,a),l.uv=fn.getUV(or,Ti,Ai,Ci,as,ls,cs,new Be)),s&&(as.fromBufferAttribute(s,o),ls.fromBufferAttribute(s,r),cs.fromBufferAttribute(s,a),l.uv2=fn.getUV(or,Ti,Ai,Ci,as,ls,cs,new Be));const h={a:o,b:r,c:a,normal:new G,materialIndex:0};fn.getNormal(Ti,Ai,Ci,h.normal),l.face=h}return l}class mn extends Rt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const r=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const a=[],l=[],h=[],d=[];let u=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(a),this.setAttribute("position",new ct(l,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(d,2));function g(p,f,_,x,M,w,S,C,D,v,b){const P=w/D,O=S/v,N=w/2,A=S/2,L=C/2,I=D+1,z=v+1;let H=0,V=0;const X=new G;for(let J=0;J<z;J++){const oe=J*O-A;for(let F=0;F<I;F++){const Q=F*P-N;X[p]=Q*x,X[f]=oe*M,X[_]=L,l.push(X.x,X.y,X.z),X[p]=0,X[f]=0,X[_]=C>0?1:-1,h.push(X.x,X.y,X.z),d.push(F/D),d.push(1-J/v),H+=1}}for(let J=0;J<v;J++)for(let oe=0;oe<D;oe++){const F=u+oe+I*J,Q=u+oe+I*(J+1),ie=u+(oe+1)+I*(J+1),k=u+(oe+1)+I*J;a.push(F,Q,k),a.push(Q,ie,k),V+=6}r.addGroup(m,V,b),m+=V,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _i(c){const e={};for(const t in c){e[t]={};for(const n in c[t]){const i=c[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function mt(c){const e={};for(let t=0;t<c.length;t++){const n=_i(c[t]);for(const i in n)e[i]=n[i]}return e}function Sc(c){const e=[];for(let t=0;t<c.length;t++)e.push(c[t].clone());return e}function Ga(c){return c.getRenderTarget()===null&&c.outputEncoding===ke?Qt:ki}const Ec={clone:_i,merge:mt};var Tc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ac=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends Yi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tc,this.fragmentShader=Ac,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_i(e.uniforms),this.uniformsGroups=Sc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ka extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ct extends ka{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_o*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ks*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _o*2*Math.atan(Math.tan(ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ks*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const a=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/a,t-=o.offsetY*n/l,i*=o.width/a,n*=o.height/l}const r=this.filmOffset;r!==0&&(s+=e*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ti=-90,ni=1;class Cc extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Ct(ti,ni,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Ct(ti,ni,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Ct(ti,ni,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const r=new Ct(ti,ni,e,t);r.layers=this.layers,r.up.set(0,0,1),r.lookAt(0,-1,0),this.add(r);const a=new Ct(ti,ni,e,t);a.layers=this.layers,a.up.set(0,1,0),a.lookAt(0,0,1),this.add(a);const l=new Ct(ti,ni,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,r,a,l]=this.children,h=e.getRenderTarget(),d=e.toneMapping,u=e.xr.enabled;e.toneMapping=pn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,r),e.setRenderTarget(n,4),e.render(t,a),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(h),e.toneMapping=d,e.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class Va extends yt{constructor(e,t,n,i,s,o,r,a,l,h){e=e!==void 0?e:[],t=t!==void 0?t:pi,super(e,t,n,i,s,o,r,a,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lc extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Va(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new mn(5,5,5),s=new qn({name:"CubemapFromEquirect",uniforms:_i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Lt,blending:Sn});s.uniforms.tEquirect.value=t;const o=new Je(i,s),r=t.minFilter;return t.minFilter===Ui&&(t.minFilter=zt),new Cc(1,10,this).update(e,o),t.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const ar=new G,Rc=new G,Pc=new _t;let Fn=class{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ar.subVectors(n,t).cross(Rc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ar),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Pc.getNormalMatrix(e),i=this.coplanarPoint(ar).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const ii=new Ar,ds=new G;class Lr{constructor(e=new Fn,t=new Fn,n=new Fn,i=new Fn,s=new Fn,o=new Fn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const r=this.planes;return r[0].copy(e),r[1].copy(t),r[2].copy(n),r[3].copy(i),r[4].copy(s),r[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],r=n[3],a=n[4],l=n[5],h=n[6],d=n[7],u=n[8],m=n[9],g=n[10],p=n[11],f=n[12],_=n[13],x=n[14],M=n[15];return t[0].setComponents(r-i,d-a,p-u,M-f).normalize(),t[1].setComponents(r+i,d+a,p+u,M+f).normalize(),t[2].setComponents(r+s,d+l,p+m,M+_).normalize(),t[3].setComponents(r-s,d-l,p-m,M-_).normalize(),t[4].setComponents(r-o,d-h,p-g,M-x).normalize(),t[5].setComponents(r+o,d+h,p+g,M+x).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ii)}intersectsSprite(e){return ii.center.set(0,0,0),ii.radius=.7071067811865476,ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ds.x=i.normal.x>0?e.max.x:e.min.x,ds.y=i.normal.y>0?e.max.y:e.min.y,ds.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ds)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wa(){let c=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=c.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=c.requestAnimationFrame(i),e=!0)},stop:function(){c.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){c=s}}}function Dc(c,e){const t=e.isWebGL2,n=new WeakMap;function i(l,h){const d=l.array,u=l.usage,m=c.createBuffer();c.bindBuffer(h,m),c.bufferData(h,d,u),l.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,d){const u=h.array,m=h.updateRange;c.bindBuffer(d,l),m.count===-1?c.bufferSubData(d,0,u):(t?c.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):c.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(c.deleteBuffer(h.buffer),n.delete(l))}function a(l,h){if(l.isGLBufferAttribute){const u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);d===void 0?n.set(l,i(l,h)):d.version<l.version&&(s(d.buffer,l,h),d.version=l.version)}return{get:o,remove:r,update:a}}class xi extends Rt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,r=Math.floor(n),a=Math.floor(i),l=r+1,h=a+1,d=e/r,u=t/a,m=[],g=[],p=[],f=[];for(let _=0;_<h;_++){const x=_*u-o;for(let M=0;M<l;M++){const w=M*d-s;g.push(w,-x,0),p.push(0,0,1),f.push(M/r),f.push(1-_/a)}}for(let _=0;_<a;_++)for(let x=0;x<r;x++){const M=x+l*_,w=x+l*(_+1),S=x+1+l*(_+1),C=x+1+l*_;m.push(M,w,C),m.push(w,S,C)}this.setIndex(m),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(p,3)),this.setAttribute("uv",new ct(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ic=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,zc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Nc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Oc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uc="vec3 transformed = vec3( position );",Gc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kc=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Vc=`#ifdef USE_IRIDESCENCE
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
#endif`,Wc=`#ifdef USE_BUMPMAP
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
#endif`,Hc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$c=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Kc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Jc=`#define PI 3.141592653589793
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
}`,Qc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,eh=`vec3 transformedNormal = objectNormal;
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
#endif`,th=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ih=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rh="gl_FragColor = linearToOutputTexel( gl_FragColor );",oh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ah=`#ifdef USE_ENVMAP
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
#endif`,lh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ch=`#ifdef USE_ENVMAP
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
#endif`,hh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uh=`#ifdef USE_ENVMAP
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
#endif`,dh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ph=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gh=`#ifdef USE_GRADIENTMAP
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
}`,_h=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,xh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mh=`uniform bool receiveShadow;
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
#endif`,wh=`#if defined( USE_ENVMAP )
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
#endif`,bh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Eh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Th=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ah=`PhysicalMaterial material;
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
#endif`,Ch=`struct PhysicalMaterial {
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
}`,Lh=`
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
#endif`,Rh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ph=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Dh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ih=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Fh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Nh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Oh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Uh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wh=`#ifdef USE_MORPHNORMALS
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
#endif`,Hh=`#ifdef USE_MORPHTARGETS
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
#endif`,qh=`#ifdef USE_MORPHTARGETS
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
#endif`,Xh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,jh=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Yh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$h=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kh=`#ifdef USE_NORMALMAP
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
#endif`,Jh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Qh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,eu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,tu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,su=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ru=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ou=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,au=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,du=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fu=`float getShadowMask() {
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
}`,pu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mu=`#ifdef USE_SKINNING
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
#endif`,gu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_u=`#ifdef USE_SKINNING
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
#endif`,xu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wu=`#ifdef USE_TRANSMISSION
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
#endif`,bu=`#ifdef USE_TRANSMISSION
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
#endif`,Su=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Eu=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Tu=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Au=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Cu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Lu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Ru=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Du=`uniform sampler2D t2D;
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
}`,Iu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Bu=`#include <common>
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
}`,Ou=`#if DEPTH_PACKING == 3200
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
}`,Uu=`#define DISTANCE
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
}`,Gu=`#define DISTANCE
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
}`,ku=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Wu=`uniform float scale;
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
}`,Hu=`uniform vec3 diffuse;
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
}`,qu=`#include <common>
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
}`,Xu=`uniform vec3 diffuse;
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
}`,ju=`#define LAMBERT
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
}`,Yu=`#define LAMBERT
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
}`,$u=`#define MATCAP
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
}`,Zu=`#define MATCAP
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
}`,Ku=`#define NORMAL
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
}`,Ju=`#define NORMAL
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
}`,Qu=`#define PHONG
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
}`,ed=`#define PHONG
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
}`,td=`#define STANDARD
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
}`,nd=`#define STANDARD
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
}`,id=`#define TOON
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
}`,sd=`#define TOON
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
}`,rd=`uniform float size;
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
}`,od=`uniform vec3 diffuse;
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
}`,ad=`#include <common>
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
}`,ld=`uniform vec3 color;
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
}`,cd=`uniform float rotation;
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
}`,hd=`uniform vec3 diffuse;
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
}`,Ee={alphamap_fragment:Ic,alphamap_pars_fragment:zc,alphatest_fragment:Fc,alphatest_pars_fragment:Nc,aomap_fragment:Bc,aomap_pars_fragment:Oc,begin_vertex:Uc,beginnormal_vertex:Gc,bsdfs:kc,iridescence_fragment:Vc,bumpmap_pars_fragment:Wc,clipping_planes_fragment:Hc,clipping_planes_pars_fragment:qc,clipping_planes_pars_vertex:Xc,clipping_planes_vertex:jc,color_fragment:Yc,color_pars_fragment:$c,color_pars_vertex:Zc,color_vertex:Kc,common:Jc,cube_uv_reflection_fragment:Qc,defaultnormal_vertex:eh,displacementmap_pars_vertex:th,displacementmap_vertex:nh,emissivemap_fragment:ih,emissivemap_pars_fragment:sh,encodings_fragment:rh,encodings_pars_fragment:oh,envmap_fragment:ah,envmap_common_pars_fragment:lh,envmap_pars_fragment:ch,envmap_pars_vertex:hh,envmap_physical_pars_fragment:wh,envmap_vertex:uh,fog_vertex:dh,fog_pars_vertex:fh,fog_fragment:ph,fog_pars_fragment:mh,gradientmap_pars_fragment:gh,lightmap_fragment:_h,lightmap_pars_fragment:xh,lights_lambert_fragment:vh,lights_lambert_pars_fragment:yh,lights_pars_begin:Mh,lights_toon_fragment:bh,lights_toon_pars_fragment:Sh,lights_phong_fragment:Eh,lights_phong_pars_fragment:Th,lights_physical_fragment:Ah,lights_physical_pars_fragment:Ch,lights_fragment_begin:Lh,lights_fragment_maps:Rh,lights_fragment_end:Ph,logdepthbuf_fragment:Dh,logdepthbuf_pars_fragment:Ih,logdepthbuf_pars_vertex:zh,logdepthbuf_vertex:Fh,map_fragment:Nh,map_pars_fragment:Bh,map_particle_fragment:Oh,map_particle_pars_fragment:Uh,metalnessmap_fragment:Gh,metalnessmap_pars_fragment:kh,morphcolor_vertex:Vh,morphnormal_vertex:Wh,morphtarget_pars_vertex:Hh,morphtarget_vertex:qh,normal_fragment_begin:Xh,normal_fragment_maps:jh,normal_pars_fragment:Yh,normal_pars_vertex:$h,normal_vertex:Zh,normalmap_pars_fragment:Kh,clearcoat_normal_fragment_begin:Jh,clearcoat_normal_fragment_maps:Qh,clearcoat_pars_fragment:eu,iridescence_pars_fragment:tu,output_fragment:nu,packing:iu,premultiplied_alpha_fragment:su,project_vertex:ru,dithering_fragment:ou,dithering_pars_fragment:au,roughnessmap_fragment:lu,roughnessmap_pars_fragment:cu,shadowmap_pars_fragment:hu,shadowmap_pars_vertex:uu,shadowmap_vertex:du,shadowmask_pars_fragment:fu,skinbase_vertex:pu,skinning_pars_vertex:mu,skinning_vertex:gu,skinnormal_vertex:_u,specularmap_fragment:xu,specularmap_pars_fragment:vu,tonemapping_fragment:yu,tonemapping_pars_fragment:Mu,transmission_fragment:wu,transmission_pars_fragment:bu,uv_pars_fragment:Su,uv_pars_vertex:Eu,uv_vertex:Tu,uv2_pars_fragment:Au,uv2_pars_vertex:Cu,uv2_vertex:Lu,worldpos_vertex:Ru,background_vert:Pu,background_frag:Du,backgroundCube_vert:Iu,backgroundCube_frag:zu,cube_vert:Fu,cube_frag:Nu,depth_vert:Bu,depth_frag:Ou,distanceRGBA_vert:Uu,distanceRGBA_frag:Gu,equirect_vert:ku,equirect_frag:Vu,linedashed_vert:Wu,linedashed_frag:Hu,meshbasic_vert:qu,meshbasic_frag:Xu,meshlambert_vert:ju,meshlambert_frag:Yu,meshmatcap_vert:$u,meshmatcap_frag:Zu,meshnormal_vert:Ku,meshnormal_frag:Ju,meshphong_vert:Qu,meshphong_frag:ed,meshphysical_vert:td,meshphysical_frag:nd,meshtoon_vert:id,meshtoon_frag:sd,points_vert:rd,points_frag:od,shadow_vert:ad,shadow_frag:ld,sprite_vert:cd,sprite_frag:hd},se={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new _t},uv2Transform:{value:new _t},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new _t}}},en={basic:{uniforms:mt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:mt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:mt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:mt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:mt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:mt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:mt([se.points,se.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:mt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:mt([se.common,se.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:mt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:mt([se.sprite,se.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ee.backgroundCube_vert,fragmentShader:Ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distanceRGBA:{uniforms:mt([se.common,se.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distanceRGBA_vert,fragmentShader:Ee.distanceRGBA_frag},shadow:{uniforms:mt([se.lights,se.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};en.physical={uniforms:mt([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Be(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};const fs={r:0,b:0,g:0};function ud(c,e,t,n,i,s,o){const r=new Oe(0);let a=s===!0?0:1,l,h,d=null,u=0,m=null;function g(f,_){let x=!1,M=_.isScene===!0?_.background:null;M&&M.isTexture&&(M=(_.backgroundBlurriness>0?t:e).get(M));const w=c.xr,S=w.getSession&&w.getSession();S&&S.environmentBlendMode==="additive"&&(M=null),M===null?p(r,a):M&&M.isColor&&(p(M,1),x=!0),(c.autoClear||x)&&c.clear(c.autoClearColor,c.autoClearDepth,c.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Es)?(h===void 0&&(h=new Je(new mn(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:_i(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,D,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=M.encoding!==ke,(d!==M||u!==M.version||m!==c.toneMapping)&&(h.material.needsUpdate=!0,d=M,u=M.version,m=c.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Je(new xi(2,2),new qn({name:"BackgroundMaterial",uniforms:_i(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=M.encoding!==ke,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||u!==M.version||m!==c.toneMapping)&&(l.material.needsUpdate=!0,d=M,u=M.version,m=c.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function p(f,_){f.getRGB(fs,Ga(c)),n.buffers.color.setClear(fs.r,fs.g,fs.b,_,o)}return{getClearColor:function(){return r},setClearColor:function(f,_=1){r.set(f),a=_,p(r,a)},getClearAlpha:function(){return a},setClearAlpha:function(f){a=f,p(r,a)},render:g}}function dd(c,e,t,n){const i=c.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,r={},a=f(null);let l=a,h=!1;function d(L,I,z,H,V){let X=!1;if(o){const J=p(H,z,I);l!==J&&(l=J,m(l.object)),X=_(L,H,z,V),X&&x(L,H,z,V)}else{const J=I.wireframe===!0;(l.geometry!==H.id||l.program!==z.id||l.wireframe!==J)&&(l.geometry=H.id,l.program=z.id,l.wireframe=J,X=!0)}V!==null&&t.update(V,34963),(X||h)&&(h=!1,v(L,I,z,H),V!==null&&c.bindBuffer(34963,t.get(V).buffer))}function u(){return n.isWebGL2?c.createVertexArray():s.createVertexArrayOES()}function m(L){return n.isWebGL2?c.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?c.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function p(L,I,z){const H=z.wireframe===!0;let V=r[L.id];V===void 0&&(V={},r[L.id]=V);let X=V[I.id];X===void 0&&(X={},V[I.id]=X);let J=X[H];return J===void 0&&(J=f(u()),X[H]=J),J}function f(L){const I=[],z=[],H=[];for(let V=0;V<i;V++)I[V]=0,z[V]=0,H[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:z,attributeDivisors:H,object:L,attributes:{},index:null}}function _(L,I,z,H){const V=l.attributes,X=I.attributes;let J=0;const oe=z.getAttributes();for(const F in oe)if(oe[F].location>=0){const ie=V[F];let k=X[F];if(k===void 0&&(F==="instanceMatrix"&&L.instanceMatrix&&(k=L.instanceMatrix),F==="instanceColor"&&L.instanceColor&&(k=L.instanceColor)),ie===void 0||ie.attribute!==k||k&&ie.data!==k.data)return!0;J++}return l.attributesNum!==J||l.index!==H}function x(L,I,z,H){const V={},X=I.attributes;let J=0;const oe=z.getAttributes();for(const F in oe)if(oe[F].location>=0){let ie=X[F];ie===void 0&&(F==="instanceMatrix"&&L.instanceMatrix&&(ie=L.instanceMatrix),F==="instanceColor"&&L.instanceColor&&(ie=L.instanceColor));const k={};k.attribute=ie,ie&&ie.data&&(k.data=ie.data),V[F]=k,J++}l.attributes=V,l.attributesNum=J,l.index=H}function M(){const L=l.newAttributes;for(let I=0,z=L.length;I<z;I++)L[I]=0}function w(L){S(L,0)}function S(L,I){const z=l.newAttributes,H=l.enabledAttributes,V=l.attributeDivisors;z[L]=1,H[L]===0&&(c.enableVertexAttribArray(L),H[L]=1),V[L]!==I&&((n.isWebGL2?c:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,I),V[L]=I)}function C(){const L=l.newAttributes,I=l.enabledAttributes;for(let z=0,H=I.length;z<H;z++)I[z]!==L[z]&&(c.disableVertexAttribArray(z),I[z]=0)}function D(L,I,z,H,V,X){n.isWebGL2===!0&&(z===5124||z===5125)?c.vertexAttribIPointer(L,I,z,V,X):c.vertexAttribPointer(L,I,z,H,V,X)}function v(L,I,z,H){if(n.isWebGL2===!1&&(L.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const V=H.attributes,X=z.getAttributes(),J=I.defaultAttributeValues;for(const oe in X){const F=X[oe];if(F.location>=0){let Q=V[oe];if(Q===void 0&&(oe==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),oe==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor)),Q!==void 0){const ie=Q.normalized,k=Q.itemSize,ue=t.get(Q);if(ue===void 0)continue;const de=ue.buffer,pe=ue.type,me=ue.bytesPerElement;if(Q.isInterleavedBufferAttribute){const Me=Q.data,Ae=Me.stride,Le=Q.offset;if(Me.isInstancedInterleavedBuffer){for(let Fe=0;Fe<F.locationSize;Fe++)S(F.location+Fe,Me.meshPerAttribute);L.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Fe=0;Fe<F.locationSize;Fe++)w(F.location+Fe);c.bindBuffer(34962,de);for(let Fe=0;Fe<F.locationSize;Fe++)D(F.location+Fe,k/F.locationSize,pe,ie,Ae*me,(Le+k/F.locationSize*Fe)*me)}else{if(Q.isInstancedBufferAttribute){for(let Me=0;Me<F.locationSize;Me++)S(F.location+Me,Q.meshPerAttribute);L.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Me=0;Me<F.locationSize;Me++)w(F.location+Me);c.bindBuffer(34962,de);for(let Me=0;Me<F.locationSize;Me++)D(F.location+Me,k/F.locationSize,pe,ie,k*me,k/F.locationSize*Me*me)}}else if(J!==void 0){const ie=J[oe];if(ie!==void 0)switch(ie.length){case 2:c.vertexAttrib2fv(F.location,ie);break;case 3:c.vertexAttrib3fv(F.location,ie);break;case 4:c.vertexAttrib4fv(F.location,ie);break;default:c.vertexAttrib1fv(F.location,ie)}}}}C()}function b(){N();for(const L in r){const I=r[L];for(const z in I){const H=I[z];for(const V in H)g(H[V].object),delete H[V];delete I[z]}delete r[L]}}function P(L){if(r[L.id]===void 0)return;const I=r[L.id];for(const z in I){const H=I[z];for(const V in H)g(H[V].object),delete H[V];delete I[z]}delete r[L.id]}function O(L){for(const I in r){const z=r[I];if(z[L.id]===void 0)continue;const H=z[L.id];for(const V in H)g(H[V].object),delete H[V];delete z[L.id]}}function N(){A(),h=!0,l!==a&&(l=a,m(l.object))}function A(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:N,resetDefaultState:A,dispose:b,releaseStatesOfGeometry:P,releaseStatesOfProgram:O,initAttributes:M,enableAttribute:w,disableUnusedAttributes:C}}function fd(c,e,t,n){const i=n.isWebGL2;let s;function o(l){s=l}function r(l,h){c.drawArrays(s,l,h),t.update(h,s,1)}function a(l,h,d){if(d===0)return;let u,m;if(i)u=c,m="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[m](s,l,h,d),t.update(h,s,d)}this.setMode=o,this.render=r,this.renderInstances=a}function pd(c,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");n=c.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(D){if(D==="highp"){if(c.getShaderPrecisionFormat(35633,36338).precision>0&&c.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";D="mediump"}return D==="mediump"&&c.getShaderPrecisionFormat(35633,36337).precision>0&&c.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&c instanceof WebGL2RenderingContext;let r=t.precision!==void 0?t.precision:"highp";const a=s(r);a!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",a,"instead."),r=a);const l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=c.getParameter(34930),u=c.getParameter(35660),m=c.getParameter(3379),g=c.getParameter(34076),p=c.getParameter(34921),f=c.getParameter(36347),_=c.getParameter(36348),x=c.getParameter(36349),M=u>0,w=o||e.has("OES_texture_float"),S=M&&w,C=o?c.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:r,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:f,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:M,floatFragmentTextures:w,floatVertexTextures:S,maxSamples:C}}function md(c){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Fn,r=new _t,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const m=d.length!==0||u||n!==0||i;return i=u,n=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,m){const g=d.clippingPlanes,p=d.clipIntersection,f=d.clipShadows,_=c.get(d);if(!i||g===null||g.length===0||s&&!f)s?h(null):l();else{const x=s?0:n,M=x*4;let w=_.clippingState||null;a.value=w,w=h(g,u,M,m);for(let S=0;S!==M;++S)w[S]=t[S];_.clippingState=w,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=x}};function l(){a.value!==t&&(a.value=t,a.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,m,g){const p=d!==null?d.length:0;let f=null;if(p!==0){if(f=a.value,g!==!0||f===null){const _=m+p*4,x=u.matrixWorldInverse;r.getNormalMatrix(x),(f===null||f.length<_)&&(f=new Float32Array(_));for(let M=0,w=m;M!==p;++M,w+=4)o.copy(d[M]).applyMatrix4(x,r),o.normal.toArray(f,w),f[w+3]=o.constant}a.value=f,a.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,f}}function gd(c){let e=new WeakMap;function t(o,r){return r===Mr?o.mapping=pi:r===wr&&(o.mapping=mi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const r=o.mapping;if(r===Mr||r===wr)if(e.has(o)){const a=e.get(o).texture;return t(a,o.mapping)}else{const a=o.image;if(a&&a.height>0){const l=new Lc(a.height/2);return l.fromEquirectangularTexture(c,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const r=o.target;r.removeEventListener("dispose",i);const a=e.get(r);a!==void 0&&(e.delete(r),a.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class _d extends ka{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,r=i+t,a=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,r-=h*this.view.offsetY,a=r-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,r,a,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ci=4,Ro=[.125,.215,.35,.446,.526,.582],Bn=20,lr=new _d,Po=new Oe;let cr=null;const Nn=(1+Math.sqrt(5))/2,si=1/Nn,Do=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,Nn,si),new G(0,Nn,-si),new G(si,0,Nn),new G(-si,0,Nn),new G(Nn,si,0),new G(-Nn,si,0)];class Io{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){cr=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=No(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cr),e.scissorTest=!1,ps(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pi||e.mapping===mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:Gi,format:Vt,encoding:Wn,depthBuffer:!1},i=zo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zo(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xd(s)),this._blurMaterial=vd(s,e,t)}return i}_compileMaterial(e){const t=new Je(this._lodPlanes[0],e);this._renderer.compile(t,lr)}_sceneToCubeUV(e,t,n,i){const r=new Ct(90,1,t,n),a=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Po),h.toneMapping=pn,h.autoClear=!1;const m=new Cr({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),g=new Je(new mn,m);let p=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,p=!0):(m.color.copy(Po),p=!0);for(let _=0;_<6;_++){const x=_%3;x===0?(r.up.set(0,a[_],0),r.lookAt(l[_],0,0)):x===1?(r.up.set(0,0,a[_]),r.lookAt(0,l[_],0)):(r.up.set(0,a[_],0),r.lookAt(0,0,l[_]));const M=this._cubeSize;ps(i,x*M,_>2?M:0,M,M),h.setRenderTarget(i),p&&h.render(g,r),h.render(e,r)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===pi||e.mapping===mi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=No()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fo());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Je(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=e;const a=this._cubeSize;ps(t,0,0,3*a,2*a),n.setRenderTarget(t),n.render(o,lr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Do[(i-1)%Do.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,r){const a=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Je(this._lodPlanes[i],l),u=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Bn-1),p=s/g,f=isFinite(s)?1+Math.floor(h*p):Bn;f>Bn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Bn}`);const _=[];let x=0;for(let D=0;D<Bn;++D){const v=D/p,b=Math.exp(-v*v/2);_.push(b),D===0?x+=b:D<f&&(x+=2*b)}for(let D=0;D<_.length;D++)_[D]=_[D]/x;u.envMap.value=e.texture,u.samples.value=f,u.weights.value=_,u.latitudinal.value=o==="latitudinal",r&&(u.poleAxis.value=r);const{_lodMax:M}=this;u.dTheta.value=g,u.mipInt.value=M-n;const w=this._sizeLods[i],S=3*w*(i>M-ci?i-M+ci:0),C=4*(this._cubeSize-w);ps(t,S,C,3*w,2*w),a.setRenderTarget(t),a.render(d,lr)}}function xd(c){const e=[],t=[],n=[];let i=c;const s=c-ci+1+Ro.length;for(let o=0;o<s;o++){const r=Math.pow(2,i);t.push(r);let a=1/r;o>c-ci?a=Ro[o-c+ci-1]:o===0&&(a=0),n.push(a);const l=1/(r-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,p=3,f=2,_=1,x=new Float32Array(p*g*m),M=new Float32Array(f*g*m),w=new Float32Array(_*g*m);for(let C=0;C<m;C++){const D=C%3*2/3-1,v=C>2?0:-1,b=[D,v,0,D+2/3,v,0,D+2/3,v+1,0,D,v,0,D+2/3,v+1,0,D,v+1,0];x.set(b,p*g*C),M.set(u,f*g*C);const P=[C,C,C,C,C,C];w.set(P,_*g*C)}const S=new Rt;S.setAttribute("position",new Ht(x,p)),S.setAttribute("uv",new Ht(M,f)),S.setAttribute("faceIndex",new Ht(w,_)),e.push(S),i>ci&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function zo(c,e,t){const n=new Hn(c,e,t);return n.texture.mapping=Es,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ps(c,e,t,n,i){c.viewport.set(e,t,n,i),c.scissor.set(e,t,n,i)}function vd(c,e,t){const n=new Float32Array(Bn),i=new G(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:Bn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${c}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Rr(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Fo(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rr(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function No(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Rr(){return`

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
	`}function yd(c){let e=new WeakMap,t=null;function n(r){if(r&&r.isTexture){const a=r.mapping,l=a===Mr||a===wr,h=a===pi||a===mi;if(l||h)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let d=e.get(r);return t===null&&(t=new Io(c)),d=l?t.fromEquirectangular(r,d):t.fromCubemap(r,d),e.set(r,d),d.texture}else{if(e.has(r))return e.get(r).texture;{const d=r.image;if(l&&d&&d.height>0||h&&d&&i(d)){t===null&&(t=new Io(c));const u=l?t.fromEquirectangular(r):t.fromCubemap(r);return e.set(r,u),r.addEventListener("dispose",s),u.texture}else return null}}}return r}function i(r){let a=0;const l=6;for(let h=0;h<l;h++)r[h]!==void 0&&a++;return a===l}function s(r){const a=r.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Md(c){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=c.getExtension("WEBGL_depth_texture")||c.getExtension("MOZ_WEBGL_depth_texture")||c.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=c.getExtension("EXT_texture_filter_anisotropic")||c.getExtension("MOZ_EXT_texture_filter_anisotropic")||c.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=c.getExtension("WEBGL_compressed_texture_s3tc")||c.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||c.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=c.getExtension("WEBGL_compressed_texture_pvrtc")||c.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=c.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function wd(c,e,t,n){const i={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete i[u.id];const m=s.get(u);m&&(e.remove(m),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function r(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,t.memory.geometries++),u}function a(d){const u=d.attributes;for(const g in u)e.update(u[g],34962);const m=d.morphAttributes;for(const g in m){const p=m[g];for(let f=0,_=p.length;f<_;f++)e.update(p[f],34962)}}function l(d){const u=[],m=d.index,g=d.attributes.position;let p=0;if(m!==null){const x=m.array;p=m.version;for(let M=0,w=x.length;M<w;M+=3){const S=x[M+0],C=x[M+1],D=x[M+2];u.push(S,C,C,D,D,S)}}else{const x=g.array;p=g.version;for(let M=0,w=x.length/3-1;M<w;M+=3){const S=M+0,C=M+1,D=M+2;u.push(S,C,C,D,D,S)}}const f=new(Da(u)?Ua:Oa)(u,1);f.version=p;const _=s.get(d);_&&e.remove(_),s.set(d,f)}function h(d){const u=s.get(d);if(u){const m=d.index;m!==null&&u.version<m.version&&l(d)}else l(d);return s.get(d)}return{get:r,update:a,getWireframeAttribute:h}}function bd(c,e,t,n){const i=n.isWebGL2;let s;function o(u){s=u}let r,a;function l(u){r=u.type,a=u.bytesPerElement}function h(u,m){c.drawElements(s,m,r,u*a),t.update(m,s,1)}function d(u,m,g){if(g===0)return;let p,f;if(i)p=c,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,m,r,u*a,g),t.update(m,s,g)}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=d}function Sd(c){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,r){switch(t.calls++,o){case 4:t.triangles+=r*(s/3);break;case 1:t.lines+=r*(s/2);break;case 3:t.lines+=r*(s-1);break;case 2:t.lines+=r*s;break;case 0:t.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ed(c,e){return c[0]-e[0]}function Td(c,e){return Math.abs(e[1])-Math.abs(c[1])}function Ad(c,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new Ve,r=[];for(let l=0;l<8;l++)r[l]=[l,0];function a(l,h,d){const u=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=g!==void 0?g.length:0;let f=s.get(h);if(f===void 0||f.count!==p){let I=function(){A.dispose(),s.delete(h),h.removeEventListener("dispose",I)};var m=I;f!==void 0&&f.texture.dispose();const M=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],v=h.morphAttributes.color||[];let b=0;M===!0&&(b=1),w===!0&&(b=2),S===!0&&(b=3);let P=h.attributes.position.count*b,O=1;P>e.maxTextureSize&&(O=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const N=new Float32Array(P*O*4*p),A=new Fa(N,P,O,p);A.type=Gn,A.needsUpdate=!0;const L=b*4;for(let z=0;z<p;z++){const H=C[z],V=D[z],X=v[z],J=P*O*4*z;for(let oe=0;oe<H.count;oe++){const F=oe*L;M===!0&&(o.fromBufferAttribute(H,oe),N[J+F+0]=o.x,N[J+F+1]=o.y,N[J+F+2]=o.z,N[J+F+3]=0),w===!0&&(o.fromBufferAttribute(V,oe),N[J+F+4]=o.x,N[J+F+5]=o.y,N[J+F+6]=o.z,N[J+F+7]=0),S===!0&&(o.fromBufferAttribute(X,oe),N[J+F+8]=o.x,N[J+F+9]=o.y,N[J+F+10]=o.z,N[J+F+11]=X.itemSize===4?o.w:1)}}f={count:p,texture:A,size:new Be(P,O)},s.set(h,f),h.addEventListener("dispose",I)}let _=0;for(let M=0;M<u.length;M++)_+=u[M];const x=h.morphTargetsRelative?1:1-_;d.getUniforms().setValue(c,"morphTargetBaseInfluence",x),d.getUniforms().setValue(c,"morphTargetInfluences",u),d.getUniforms().setValue(c,"morphTargetsTexture",f.texture,t),d.getUniforms().setValue(c,"morphTargetsTextureSize",f.size)}else{const g=u===void 0?0:u.length;let p=n[h.id];if(p===void 0||p.length!==g){p=[];for(let w=0;w<g;w++)p[w]=[w,0];n[h.id]=p}for(let w=0;w<g;w++){const S=p[w];S[0]=w,S[1]=u[w]}p.sort(Td);for(let w=0;w<8;w++)w<g&&p[w][1]?(r[w][0]=p[w][0],r[w][1]=p[w][1]):(r[w][0]=Number.MAX_SAFE_INTEGER,r[w][1]=0);r.sort(Ed);const f=h.morphAttributes.position,_=h.morphAttributes.normal;let x=0;for(let w=0;w<8;w++){const S=r[w],C=S[0],D=S[1];C!==Number.MAX_SAFE_INTEGER&&D?(f&&h.getAttribute("morphTarget"+w)!==f[C]&&h.setAttribute("morphTarget"+w,f[C]),_&&h.getAttribute("morphNormal"+w)!==_[C]&&h.setAttribute("morphNormal"+w,_[C]),i[w]=D,x+=D):(f&&h.hasAttribute("morphTarget"+w)===!0&&h.deleteAttribute("morphTarget"+w),_&&h.hasAttribute("morphNormal"+w)===!0&&h.deleteAttribute("morphNormal"+w),i[w]=0)}const M=h.morphTargetsRelative?1:1-x;d.getUniforms().setValue(c,"morphTargetBaseInfluence",M),d.getUniforms().setValue(c,"morphTargetInfluences",i)}}return{update:a}}function Cd(c,e,t,n){let i=new WeakMap;function s(a){const l=n.render.frame,h=a.geometry,d=e.get(a,h);return i.get(d)!==l&&(e.update(d),i.set(d,l)),a.isInstancedMesh&&(a.hasEventListener("dispose",r)===!1&&a.addEventListener("dispose",r),t.update(a.instanceMatrix,34962),a.instanceColor!==null&&t.update(a.instanceColor,34962)),d}function o(){i=new WeakMap}function r(a){const l=a.target;l.removeEventListener("dispose",r),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const Ha=new yt,qa=new Fa,Xa=new dc,ja=new Va,Bo=[],Oo=[],Uo=new Float32Array(16),Go=new Float32Array(9),ko=new Float32Array(4);function yi(c,e,t){const n=c[0];if(n<=0||n>0)return c;const i=e*t;let s=Bo[i];if(s===void 0&&(s=new Float32Array(i),Bo[i]=s),e!==0){n.toArray(s,0);for(let o=1,r=0;o!==e;++o)r+=t,c[o].toArray(s,r)}return s}function tt(c,e){if(c.length!==e.length)return!1;for(let t=0,n=c.length;t<n;t++)if(c[t]!==e[t])return!1;return!0}function nt(c,e){for(let t=0,n=e.length;t<n;t++)c[t]=e[t]}function As(c,e){let t=Oo[e];t===void 0&&(t=new Int32Array(e),Oo[e]=t);for(let n=0;n!==e;++n)t[n]=c.allocateTextureUnit();return t}function Ld(c,e){const t=this.cache;t[0]!==e&&(c.uniform1f(this.addr,e),t[0]=e)}function Rd(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(c.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tt(t,e))return;c.uniform2fv(this.addr,e),nt(t,e)}}function Pd(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(c.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(c.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tt(t,e))return;c.uniform3fv(this.addr,e),nt(t,e)}}function Dd(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(c.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tt(t,e))return;c.uniform4fv(this.addr,e),nt(t,e)}}function Id(c,e){const t=this.cache,n=e.elements;if(n===void 0){if(tt(t,e))return;c.uniformMatrix2fv(this.addr,!1,e),nt(t,e)}else{if(tt(t,n))return;ko.set(n),c.uniformMatrix2fv(this.addr,!1,ko),nt(t,n)}}function zd(c,e){const t=this.cache,n=e.elements;if(n===void 0){if(tt(t,e))return;c.uniformMatrix3fv(this.addr,!1,e),nt(t,e)}else{if(tt(t,n))return;Go.set(n),c.uniformMatrix3fv(this.addr,!1,Go),nt(t,n)}}function Fd(c,e){const t=this.cache,n=e.elements;if(n===void 0){if(tt(t,e))return;c.uniformMatrix4fv(this.addr,!1,e),nt(t,e)}else{if(tt(t,n))return;Uo.set(n),c.uniformMatrix4fv(this.addr,!1,Uo),nt(t,n)}}function Nd(c,e){const t=this.cache;t[0]!==e&&(c.uniform1i(this.addr,e),t[0]=e)}function Bd(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(c.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tt(t,e))return;c.uniform2iv(this.addr,e),nt(t,e)}}function Od(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(c.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tt(t,e))return;c.uniform3iv(this.addr,e),nt(t,e)}}function Ud(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(c.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tt(t,e))return;c.uniform4iv(this.addr,e),nt(t,e)}}function Gd(c,e){const t=this.cache;t[0]!==e&&(c.uniform1ui(this.addr,e),t[0]=e)}function kd(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(c.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tt(t,e))return;c.uniform2uiv(this.addr,e),nt(t,e)}}function Vd(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(c.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tt(t,e))return;c.uniform3uiv(this.addr,e),nt(t,e)}}function Wd(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(c.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tt(t,e))return;c.uniform4uiv(this.addr,e),nt(t,e)}}function Hd(c,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(c.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Ha,i)}function qd(c,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(c.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Xa,i)}function Xd(c,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(c.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ja,i)}function jd(c,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(c.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||qa,i)}function Yd(c){switch(c){case 5126:return Ld;case 35664:return Rd;case 35665:return Pd;case 35666:return Dd;case 35674:return Id;case 35675:return zd;case 35676:return Fd;case 5124:case 35670:return Nd;case 35667:case 35671:return Bd;case 35668:case 35672:return Od;case 35669:case 35673:return Ud;case 5125:return Gd;case 36294:return kd;case 36295:return Vd;case 36296:return Wd;case 35678:case 36198:case 36298:case 36306:case 35682:return Hd;case 35679:case 36299:case 36307:return qd;case 35680:case 36300:case 36308:case 36293:return Xd;case 36289:case 36303:case 36311:case 36292:return jd}}function $d(c,e){c.uniform1fv(this.addr,e)}function Zd(c,e){const t=yi(e,this.size,2);c.uniform2fv(this.addr,t)}function Kd(c,e){const t=yi(e,this.size,3);c.uniform3fv(this.addr,t)}function Jd(c,e){const t=yi(e,this.size,4);c.uniform4fv(this.addr,t)}function Qd(c,e){const t=yi(e,this.size,4);c.uniformMatrix2fv(this.addr,!1,t)}function ef(c,e){const t=yi(e,this.size,9);c.uniformMatrix3fv(this.addr,!1,t)}function tf(c,e){const t=yi(e,this.size,16);c.uniformMatrix4fv(this.addr,!1,t)}function nf(c,e){c.uniform1iv(this.addr,e)}function sf(c,e){c.uniform2iv(this.addr,e)}function rf(c,e){c.uniform3iv(this.addr,e)}function of(c,e){c.uniform4iv(this.addr,e)}function af(c,e){c.uniform1uiv(this.addr,e)}function lf(c,e){c.uniform2uiv(this.addr,e)}function cf(c,e){c.uniform3uiv(this.addr,e)}function hf(c,e){c.uniform4uiv(this.addr,e)}function uf(c,e,t){const n=this.cache,i=e.length,s=As(t,i);tt(n,s)||(c.uniform1iv(this.addr,s),nt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Ha,s[o])}function df(c,e,t){const n=this.cache,i=e.length,s=As(t,i);tt(n,s)||(c.uniform1iv(this.addr,s),nt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Xa,s[o])}function ff(c,e,t){const n=this.cache,i=e.length,s=As(t,i);tt(n,s)||(c.uniform1iv(this.addr,s),nt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||ja,s[o])}function pf(c,e,t){const n=this.cache,i=e.length,s=As(t,i);tt(n,s)||(c.uniform1iv(this.addr,s),nt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||qa,s[o])}function mf(c){switch(c){case 5126:return $d;case 35664:return Zd;case 35665:return Kd;case 35666:return Jd;case 35674:return Qd;case 35675:return ef;case 35676:return tf;case 5124:case 35670:return nf;case 35667:case 35671:return sf;case 35668:case 35672:return rf;case 35669:case 35673:return of;case 5125:return af;case 36294:return lf;case 36295:return cf;case 36296:return hf;case 35678:case 36198:case 36298:case 36306:case 35682:return uf;case 35679:case 36299:case 36307:return df;case 35680:case 36300:case 36308:case 36293:return ff;case 36289:case 36303:case 36311:case 36292:return pf}}class gf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Yd(t.type)}}class _f{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=mf(t.type)}}class xf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const r=i[s];r.setValue(e,t[r.id],n)}}}const hr=/(\w+)(\])?(\[|\.)?/g;function Vo(c,e){c.seq.push(e),c.map[e.id]=e}function vf(c,e,t){const n=c.name,i=n.length;for(hr.lastIndex=0;;){const s=hr.exec(n),o=hr.lastIndex;let r=s[1];const a=s[2]==="]",l=s[3];if(a&&(r=r|0),l===void 0||l==="["&&o+2===i){Vo(t,l===void 0?new gf(r,c,e):new _f(r,c,e));break}else{let d=t.map[r];d===void 0&&(d=new xf(r),Vo(t,d)),t=d}}}class bs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);vf(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const r=t[s],a=n[r.id];a.needsUpdate!==!1&&r.setValue(e,a.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Wo(c,e,t){const n=c.createShader(e);return c.shaderSource(n,t),c.compileShader(n),n}let yf=0;function Mf(c,e){const t=c.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const r=o+1;n.push(`${r===e?">":" "} ${r}: ${t[o]}`)}return n.join(`
`)}function wf(c){switch(c){case Wn:return["Linear","( value )"];case ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",c),["Linear","( value )"]}}function Ho(c,e,t){const n=c.getShaderParameter(e,35713),i=c.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Mf(c.getShaderSource(e),o)}else return i}function bf(c,e){const t=wf(e);return"vec4 "+c+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Sf(c,e){let t;switch(e){case Dl:t="Linear";break;case Il:t="Reinhard";break;case zl:t="OptimizedCineon";break;case Fl:t="ACESFilmic";break;case Nl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+c+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ef(c){return[c.extensionDerivatives||c.envMapCubeUVHeight||c.bumpMap||c.tangentSpaceNormalMap||c.clearcoatNormalMap||c.flatShading||c.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(c.extensionFragDepth||c.logarithmicDepthBuffer)&&c.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",c.extensionDrawBuffers&&c.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(c.extensionShaderTextureLOD||c.envMap||c.transmission)&&c.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ni).join(`
`)}function Tf(c){const e=[];for(const t in c){const n=c[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Af(c,e){const t={},n=c.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=c.getActiveAttrib(e,i),o=s.name;let r=1;s.type===35674&&(r=2),s.type===35675&&(r=3),s.type===35676&&(r=4),t[o]={type:s.type,location:c.getAttribLocation(e,o),locationSize:r}}return t}function Ni(c){return c!==""}function qo(c,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return c.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xo(c,e){return c.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Cf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Er(c){return c.replace(Cf,Lf)}function Lf(c,e){const t=Ee[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Er(t)}const Rf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jo(c){return c.replace(Rf,Pf)}function Pf(c,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Yo(c){let e="precision "+c.precision+` float;
precision `+c.precision+" int;";return c.precision==="highp"?e+=`
#define HIGH_PRECISION`:c.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:c.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Df(c){let e="SHADOWMAP_TYPE_BASIC";return c.shadowMapType===Sa?e="SHADOWMAP_TYPE_PCF":c.shadowMapType===hl?e="SHADOWMAP_TYPE_PCF_SOFT":c.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function If(c){let e="ENVMAP_TYPE_CUBE";if(c.envMap)switch(c.envMapMode){case pi:case mi:e="ENVMAP_TYPE_CUBE";break;case Es:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zf(c){let e="ENVMAP_MODE_REFLECTION";if(c.envMap)switch(c.envMapMode){case mi:e="ENVMAP_MODE_REFRACTION";break}return e}function Ff(c){let e="ENVMAP_BLENDING_NONE";if(c.envMap)switch(c.combine){case Aa:e="ENVMAP_BLENDING_MULTIPLY";break;case Rl:e="ENVMAP_BLENDING_MIX";break;case Pl:e="ENVMAP_BLENDING_ADD";break}return e}function Nf(c){const e=c.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Bf(c,e,t,n){const i=c.getContext(),s=t.defines;let o=t.vertexShader,r=t.fragmentShader;const a=Df(t),l=If(t),h=zf(t),d=Ff(t),u=Nf(t),m=t.isWebGL2?"":Ef(t),g=Tf(s),p=i.createProgram();let f,_,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[g].filter(Ni).join(`
`),f.length>0&&(f+=`
`),_=[m,g].filter(Ni).join(`
`),_.length>0&&(_+=`
`)):(f=[Yo(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ni).join(`
`),_=[m,Yo(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pn?"#define TONE_MAPPING":"",t.toneMapping!==pn?Ee.tonemapping_pars_fragment:"",t.toneMapping!==pn?Sf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ee.encodings_pars_fragment,bf("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ni).join(`
`)),o=Er(o),o=qo(o,t),o=Xo(o,t),r=Er(r),r=qo(r,t),r=Xo(r,t),o=jo(o),r=jo(r),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["#define varying in",t.glslVersion===go?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===go?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const M=x+f+o,w=x+_+r,S=Wo(i,35633,M),C=Wo(i,35632,w);if(i.attachShader(p,S),i.attachShader(p,C),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),c.debug.checkShaderErrors){const b=i.getProgramInfoLog(p).trim(),P=i.getShaderInfoLog(S).trim(),O=i.getShaderInfoLog(C).trim();let N=!0,A=!0;if(i.getProgramParameter(p,35714)===!1){N=!1;const L=Ho(i,S,"vertex"),I=Ho(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+b+`
`+L+`
`+I)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(P===""||O==="")&&(A=!1);A&&(this.diagnostics={runnable:N,programLog:b,vertexShader:{log:P,prefix:f},fragmentShader:{log:O,prefix:_}})}i.deleteShader(S),i.deleteShader(C);let D;this.getUniforms=function(){return D===void 0&&(D=new bs(i,p)),D};let v;return this.getAttributes=function(){return v===void 0&&(v=Af(i,p)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=yf++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=C,this}let Of=0;class Uf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Gf(e),t.set(e,n)),n}}class Gf{constructor(e){this.id=Of++,this.code=e,this.usedTimes=0}}function kf(c,e,t,n,i,s,o){const r=new Na,a=new Uf,l=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,b,P,O,N){const A=O.fog,L=N.geometry,I=v.isMeshStandardMaterial?O.environment:null,z=(v.isMeshStandardMaterial?t:e).get(v.envMap||I),H=z&&z.mapping===Es?z.image.height:null,V=g[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const X=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,J=X!==void 0?X.length:0;let oe=0;L.morphAttributes.position!==void 0&&(oe=1),L.morphAttributes.normal!==void 0&&(oe=2),L.morphAttributes.color!==void 0&&(oe=3);let F,Q,ie,k;if(V){const Ae=en[V];F=Ae.vertexShader,Q=Ae.fragmentShader}else F=v.vertexShader,Q=v.fragmentShader,a.update(v),ie=a.getVertexShaderID(v),k=a.getFragmentShaderID(v);const ue=c.getRenderTarget(),de=v.alphaTest>0,pe=v.clearcoat>0,me=v.iridescence>0;return{isWebGL2:h,shaderID:V,shaderName:v.type,vertexShader:F,fragmentShader:Q,defines:v.defines,customVertexShaderID:ie,customFragmentShaderID:k,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:N.isInstancedMesh===!0,instancingColor:N.isInstancedMesh===!0&&N.instanceColor!==null,supportsVertexTextures:u,outputEncoding:ue===null?c.outputEncoding:ue.isXRRenderTarget===!0?ue.texture.encoding:Wn,map:!!v.map,matcap:!!v.matcap,envMap:!!z,envMapMode:z&&z.mapping,envMapCubeUVHeight:H,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===tc,tangentSpaceNormalMap:v.normalMapType===Ra,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===ke,clearcoat:pe,clearcoatMap:pe&&!!v.clearcoatMap,clearcoatRoughnessMap:pe&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:pe&&!!v.clearcoatNormalMap,iridescence:me,iridescenceMap:me&&!!v.iridescenceMap,iridescenceThicknessMap:me&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===ui,alphaMap:!!v.alphaMap,alphaTest:de,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!L.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!A,useFog:v.fog===!0,fogExp2:A&&A.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:d,skinning:N.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:oe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:c.shadowMap.enabled&&P.length>0,shadowMapType:c.shadowMap.type,toneMapping:v.toneMapped?c.toneMapping:pn,useLegacyLights:c.useLegacyLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===wn,flipSided:v.side===Lt,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function f(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)b.push(P),b.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(_(b,v),x(b,v),b.push(c.outputEncoding)),b.push(v.customProgramCacheKey),b.join()}function _(v,b){v.push(b.precision),v.push(b.outputEncoding),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.combine),v.push(b.vertexUvs),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function x(v,b){r.disableAll(),b.isWebGL2&&r.enable(0),b.supportsVertexTextures&&r.enable(1),b.instancing&&r.enable(2),b.instancingColor&&r.enable(3),b.map&&r.enable(4),b.matcap&&r.enable(5),b.envMap&&r.enable(6),b.lightMap&&r.enable(7),b.aoMap&&r.enable(8),b.emissiveMap&&r.enable(9),b.bumpMap&&r.enable(10),b.normalMap&&r.enable(11),b.objectSpaceNormalMap&&r.enable(12),b.tangentSpaceNormalMap&&r.enable(13),b.clearcoat&&r.enable(14),b.clearcoatMap&&r.enable(15),b.clearcoatRoughnessMap&&r.enable(16),b.clearcoatNormalMap&&r.enable(17),b.iridescence&&r.enable(18),b.iridescenceMap&&r.enable(19),b.iridescenceThicknessMap&&r.enable(20),b.displacementMap&&r.enable(21),b.specularMap&&r.enable(22),b.roughnessMap&&r.enable(23),b.metalnessMap&&r.enable(24),b.gradientMap&&r.enable(25),b.alphaMap&&r.enable(26),b.alphaTest&&r.enable(27),b.vertexColors&&r.enable(28),b.vertexAlphas&&r.enable(29),b.vertexUvs&&r.enable(30),b.vertexTangents&&r.enable(31),b.uvsVertexOnly&&r.enable(32),v.push(r.mask),r.disableAll(),b.fog&&r.enable(0),b.useFog&&r.enable(1),b.flatShading&&r.enable(2),b.logarithmicDepthBuffer&&r.enable(3),b.skinning&&r.enable(4),b.morphTargets&&r.enable(5),b.morphNormals&&r.enable(6),b.morphColors&&r.enable(7),b.premultipliedAlpha&&r.enable(8),b.shadowMapEnabled&&r.enable(9),b.useLegacyLights&&r.enable(10),b.doubleSided&&r.enable(11),b.flipSided&&r.enable(12),b.useDepthPacking&&r.enable(13),b.dithering&&r.enable(14),b.specularIntensityMap&&r.enable(15),b.specularColorMap&&r.enable(16),b.transmission&&r.enable(17),b.transmissionMap&&r.enable(18),b.thicknessMap&&r.enable(19),b.sheen&&r.enable(20),b.sheenColorMap&&r.enable(21),b.sheenRoughnessMap&&r.enable(22),b.decodeVideoTexture&&r.enable(23),b.opaque&&r.enable(24),v.push(r.mask)}function M(v){const b=g[v.type];let P;if(b){const O=en[b];P=Ec.clone(O.uniforms)}else P=v.uniforms;return P}function w(v,b){let P;for(let O=0,N=l.length;O<N;O++){const A=l[O];if(A.cacheKey===b){P=A,++P.usedTimes;break}}return P===void 0&&(P=new Bf(c,b,v,s),l.push(P)),P}function S(v){if(--v.usedTimes===0){const b=l.indexOf(v);l[b]=l[l.length-1],l.pop(),v.destroy()}}function C(v){a.remove(v)}function D(){a.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:M,acquireProgram:w,releaseProgram:S,releaseShaderCache:C,programs:l,dispose:D}}function Vf(){let c=new WeakMap;function e(s){let o=c.get(s);return o===void 0&&(o={},c.set(s,o)),o}function t(s){c.delete(s)}function n(s,o,r){c.get(s)[o]=r}function i(){c=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Wf(c,e){return c.groupOrder!==e.groupOrder?c.groupOrder-e.groupOrder:c.renderOrder!==e.renderOrder?c.renderOrder-e.renderOrder:c.material.id!==e.material.id?c.material.id-e.material.id:c.z!==e.z?c.z-e.z:c.id-e.id}function $o(c,e){return c.groupOrder!==e.groupOrder?c.groupOrder-e.groupOrder:c.renderOrder!==e.renderOrder?c.renderOrder-e.renderOrder:c.z!==e.z?e.z-c.z:c.id-e.id}function Zo(){const c=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(d,u,m,g,p,f){let _=c[e];return _===void 0?(_={id:d.id,object:d,geometry:u,material:m,groupOrder:g,renderOrder:d.renderOrder,z:p,group:f},c[e]=_):(_.id=d.id,_.object=d,_.geometry=u,_.material=m,_.groupOrder=g,_.renderOrder=d.renderOrder,_.z=p,_.group=f),e++,_}function r(d,u,m,g,p,f){const _=o(d,u,m,g,p,f);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function a(d,u,m,g,p,f){const _=o(d,u,m,g,p,f);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function l(d,u){t.length>1&&t.sort(d||Wf),n.length>1&&n.sort(u||$o),i.length>1&&i.sort(u||$o)}function h(){for(let d=e,u=c.length;d<u;d++){const m=c[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:r,unshift:a,finish:h,sort:l}}function Hf(){let c=new WeakMap;function e(n,i){const s=c.get(n);let o;return s===void 0?(o=new Zo,c.set(n,[o])):i>=s.length?(o=new Zo,s.push(o)):o=s[i],o}function t(){c=new WeakMap}return{get:e,dispose:t}}function qf(){const c={};return{get:function(e){if(c[e.id]!==void 0)return c[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new Oe};break;case"SpotLight":t={position:new G,direction:new G,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new G,halfWidth:new G,halfHeight:new G};break}return c[e.id]=t,t}}}function Xf(){const c={};return{get:function(e){if(c[e.id]!==void 0)return c[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return c[e.id]=t,t}}}let jf=0;function Yf(c,e){return(e.castShadow?2:0)-(c.castShadow?2:0)+(e.map?1:0)-(c.map?1:0)}function $f(c,e){const t=new qf,n=Xf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new G);const s=new G,o=new Qe,r=new Qe;function a(h,d){let u=0,m=0,g=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let p=0,f=0,_=0,x=0,M=0,w=0,S=0,C=0,D=0,v=0;h.sort(Yf);const b=d===!0?Math.PI:1;for(let O=0,N=h.length;O<N;O++){const A=h[O],L=A.color,I=A.intensity,z=A.distance,H=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=L.r*I*b,m+=L.g*I*b,g+=L.b*I*b;else if(A.isLightProbe)for(let V=0;V<9;V++)i.probe[V].addScaledVector(A.sh.coefficients[V],I);else if(A.isDirectionalLight){const V=t.get(A);if(V.color.copy(A.color).multiplyScalar(A.intensity*b),A.castShadow){const X=A.shadow,J=n.get(A);J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize=X.mapSize,i.directionalShadow[p]=J,i.directionalShadowMap[p]=H,i.directionalShadowMatrix[p]=A.shadow.matrix,w++}i.directional[p]=V,p++}else if(A.isSpotLight){const V=t.get(A);V.position.setFromMatrixPosition(A.matrixWorld),V.color.copy(L).multiplyScalar(I*b),V.distance=z,V.coneCos=Math.cos(A.angle),V.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),V.decay=A.decay,i.spot[_]=V;const X=A.shadow;if(A.map&&(i.spotLightMap[D]=A.map,D++,X.updateMatrices(A),A.castShadow&&v++),i.spotLightMatrix[_]=X.matrix,A.castShadow){const J=n.get(A);J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize=X.mapSize,i.spotShadow[_]=J,i.spotShadowMap[_]=H,C++}_++}else if(A.isRectAreaLight){const V=t.get(A);V.color.copy(L).multiplyScalar(I),V.halfWidth.set(A.width*.5,0,0),V.halfHeight.set(0,A.height*.5,0),i.rectArea[x]=V,x++}else if(A.isPointLight){const V=t.get(A);if(V.color.copy(A.color).multiplyScalar(A.intensity*b),V.distance=A.distance,V.decay=A.decay,A.castShadow){const X=A.shadow,J=n.get(A);J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize=X.mapSize,J.shadowCameraNear=X.camera.near,J.shadowCameraFar=X.camera.far,i.pointShadow[f]=J,i.pointShadowMap[f]=H,i.pointShadowMatrix[f]=A.shadow.matrix,S++}i.point[f]=V,f++}else if(A.isHemisphereLight){const V=t.get(A);V.skyColor.copy(A.color).multiplyScalar(I*b),V.groundColor.copy(A.groundColor).multiplyScalar(I*b),i.hemi[M]=V,M++}}x>0&&(e.isWebGL2||c.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):c.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=m,i.ambient[2]=g;const P=i.hash;(P.directionalLength!==p||P.pointLength!==f||P.spotLength!==_||P.rectAreaLength!==x||P.hemiLength!==M||P.numDirectionalShadows!==w||P.numPointShadows!==S||P.numSpotShadows!==C||P.numSpotMaps!==D)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=x,i.point.length=f,i.hemi.length=M,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=C+D-v,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=v,P.directionalLength=p,P.pointLength=f,P.spotLength=_,P.rectAreaLength=x,P.hemiLength=M,P.numDirectionalShadows=w,P.numPointShadows=S,P.numSpotShadows=C,P.numSpotMaps=D,i.version=jf++)}function l(h,d){let u=0,m=0,g=0,p=0,f=0;const _=d.matrixWorldInverse;for(let x=0,M=h.length;x<M;x++){const w=h[x];if(w.isDirectionalLight){const S=i.directional[u];S.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(_),u++}else if(w.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(_),g++}else if(w.isRectAreaLight){const S=i.rectArea[p];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(_),r.identity(),o.copy(w.matrixWorld),o.premultiply(_),r.extractRotation(o),S.halfWidth.set(w.width*.5,0,0),S.halfHeight.set(0,w.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),p++}else if(w.isPointLight){const S=i.point[m];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(_),m++}else if(w.isHemisphereLight){const S=i.hemi[f];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(_),f++}}}return{setup:a,setupView:l,state:i}}function Ko(c,e){const t=new $f(c,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(d){n.push(d)}function r(d){i.push(d)}function a(d){t.setup(n,d)}function l(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function Zf(c,e){let t=new WeakMap;function n(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new Ko(c,e),t.set(s,[a])):o>=r.length?(a=new Ko(c,e),r.push(a)):a=r[o],a}function i(){t=new WeakMap}return{get:n,dispose:i}}class Kf extends Yi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ql,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jf extends Yi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new G,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Qf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ep=`uniform sampler2D shadow_pass;
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
}`;function tp(c,e,t){let n=new Lr;const i=new Be,s=new Be,o=new Ve,r=new Kf({depthPacking:ec}),a=new Jf,l={},h=t.maxTextureSize,d={[En]:Lt,[Lt]:En,[wn]:wn},u=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:Qf,fragmentShader:ep}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new Rt;g.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Je(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sa,this.render=function(w,S,C){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||w.length===0)return;const D=c.getRenderTarget(),v=c.getActiveCubeFace(),b=c.getActiveMipmapLevel(),P=c.state;P.setBlending(Sn),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let O=0,N=w.length;O<N;O++){const A=w[O],L=A.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",A,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;i.copy(L.mapSize);const I=L.getFrameExtents();if(i.multiply(I),s.copy(L.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/I.x),i.x=s.x*I.x,L.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/I.y),i.y=s.y*I.y,L.mapSize.y=s.y)),L.map===null){const H=this.type!==Fi?{minFilter:gt,magFilter:gt}:{};L.map=new Hn(i.x,i.y,H),L.map.texture.name=A.name+".shadowMap",L.camera.updateProjectionMatrix()}c.setRenderTarget(L.map),c.clear();const z=L.getViewportCount();for(let H=0;H<z;H++){const V=L.getViewport(H);o.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),P.viewport(o),L.updateMatrices(A,H),n=L.getFrustum(),M(S,C,L.camera,A,this.type)}L.isPointLightShadow!==!0&&this.type===Fi&&_(L,C),L.needsUpdate=!1}f.needsUpdate=!1,c.setRenderTarget(D,v,b)};function _(w,S){const C=e.update(p);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Hn(i.x,i.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,c.setRenderTarget(w.mapPass),c.clear(),c.renderBufferDirect(S,null,C,u,p,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,c.setRenderTarget(w.map),c.clear(),c.renderBufferDirect(S,null,C,m,p,null)}function x(w,S,C,D,v,b){let P=null;const O=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(O!==void 0)P=O;else if(P=C.isPointLight===!0?a:r,c.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const N=P.uuid,A=S.uuid;let L=l[N];L===void 0&&(L={},l[N]=L);let I=L[A];I===void 0&&(I=P.clone(),L[A]=I),P=I}return P.visible=S.visible,P.wireframe=S.wireframe,b===Fi?P.side=S.shadowSide!==null?S.shadowSide:S.side:P.side=S.shadowSide!==null?S.shadowSide:d[S.side],P.alphaMap=S.alphaMap,P.alphaTest=S.alphaTest,P.map=S.map,P.clipShadows=S.clipShadows,P.clippingPlanes=S.clippingPlanes,P.clipIntersection=S.clipIntersection,P.displacementMap=S.displacementMap,P.displacementScale=S.displacementScale,P.displacementBias=S.displacementBias,P.wireframeLinewidth=S.wireframeLinewidth,P.linewidth=S.linewidth,C.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(C.matrixWorld),P.nearDistance=D,P.farDistance=v),P}function M(w,S,C,D,v){if(w.visible===!1)return;if(w.layers.test(S.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===Fi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const O=e.update(w),N=w.material;if(Array.isArray(N)){const A=O.groups;for(let L=0,I=A.length;L<I;L++){const z=A[L],H=N[z.materialIndex];if(H&&H.visible){const V=x(w,H,D,C.near,C.far,v);c.renderBufferDirect(C,null,O,V,w,z)}}}else if(N.visible){const A=x(w,N,D,C.near,C.far,v);c.renderBufferDirect(C,null,O,A,w,null)}}const P=w.children;for(let O=0,N=P.length;O<N;O++)M(P[O],S,C,D,v)}}function np(c,e,t){const n=t.isWebGL2;function i(){let B=!1;const j=new Ve;let ee=null;const ce=new Ve(0,0,0,0);return{setMask:function(fe){ee!==fe&&!B&&(c.colorMask(fe,fe,fe,fe),ee=fe)},setLocked:function(fe){B=fe},setClear:function(fe,Ue,st,dt,Xt){Xt===!0&&(fe*=dt,Ue*=dt,st*=dt),j.set(fe,Ue,st,dt),ce.equals(j)===!1&&(c.clearColor(fe,Ue,st,dt),ce.copy(j))},reset:function(){B=!1,ee=null,ce.set(-1,0,0,0)}}}function s(){let B=!1,j=null,ee=null,ce=null;return{setTest:function(fe){fe?de(2929):pe(2929)},setMask:function(fe){j!==fe&&!B&&(c.depthMask(fe),j=fe)},setFunc:function(fe){if(ee!==fe){switch(fe){case bl:c.depthFunc(512);break;case Sl:c.depthFunc(519);break;case El:c.depthFunc(513);break;case yr:c.depthFunc(515);break;case Tl:c.depthFunc(514);break;case Al:c.depthFunc(518);break;case Cl:c.depthFunc(516);break;case Ll:c.depthFunc(517);break;default:c.depthFunc(515)}ee=fe}},setLocked:function(fe){B=fe},setClear:function(fe){ce!==fe&&(c.clearDepth(fe),ce=fe)},reset:function(){B=!1,j=null,ee=null,ce=null}}}function o(){let B=!1,j=null,ee=null,ce=null,fe=null,Ue=null,st=null,dt=null,Xt=null;return{setTest:function(Xe){B||(Xe?de(2960):pe(2960))},setMask:function(Xe){j!==Xe&&!B&&(c.stencilMask(Xe),j=Xe)},setFunc:function(Xe,Dt,jt){(ee!==Xe||ce!==Dt||fe!==jt)&&(c.stencilFunc(Xe,Dt,jt),ee=Xe,ce=Dt,fe=jt)},setOp:function(Xe,Dt,jt){(Ue!==Xe||st!==Dt||dt!==jt)&&(c.stencilOp(Xe,Dt,jt),Ue=Xe,st=Dt,dt=jt)},setLocked:function(Xe){B=Xe},setClear:function(Xe){Xt!==Xe&&(c.clearStencil(Xe),Xt=Xe)},reset:function(){B=!1,j=null,ee=null,ce=null,fe=null,Ue=null,st=null,dt=null,Xt=null}}}const r=new i,a=new s,l=new o,h=new WeakMap,d=new WeakMap;let u={},m={},g=new WeakMap,p=[],f=null,_=!1,x=null,M=null,w=null,S=null,C=null,D=null,v=null,b=!1,P=null,O=null,N=null,A=null,L=null;const I=c.getParameter(35661);let z=!1,H=0;const V=c.getParameter(7938);V.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(V)[1]),z=H>=1):V.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),z=H>=2);let X=null,J={};const oe=c.getParameter(3088),F=c.getParameter(2978),Q=new Ve().fromArray(oe),ie=new Ve().fromArray(F);function k(B,j,ee){const ce=new Uint8Array(4),fe=c.createTexture();c.bindTexture(B,fe),c.texParameteri(B,10241,9728),c.texParameteri(B,10240,9728);for(let Ue=0;Ue<ee;Ue++)c.texImage2D(j+Ue,0,6408,1,1,0,6408,5121,ce);return fe}const ue={};ue[3553]=k(3553,3553,1),ue[34067]=k(34067,34069,6),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),de(2929),a.setFunc(yr),xt(!1),ut(Or),de(2884),ht(Sn);function de(B){u[B]!==!0&&(c.enable(B),u[B]=!0)}function pe(B){u[B]!==!1&&(c.disable(B),u[B]=!1)}function me(B,j){return m[B]!==j?(c.bindFramebuffer(B,j),m[B]=j,n&&(B===36009&&(m[36160]=j),B===36160&&(m[36009]=j)),!0):!1}function Me(B,j){let ee=p,ce=!1;if(B)if(ee=g.get(j),ee===void 0&&(ee=[],g.set(j,ee)),B.isWebGLMultipleRenderTargets){const fe=B.texture;if(ee.length!==fe.length||ee[0]!==36064){for(let Ue=0,st=fe.length;Ue<st;Ue++)ee[Ue]=36064+Ue;ee.length=fe.length,ce=!0}}else ee[0]!==36064&&(ee[0]=36064,ce=!0);else ee[0]!==1029&&(ee[0]=1029,ce=!0);ce&&(t.isWebGL2?c.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function Ae(B){return f!==B?(c.useProgram(B),f=B,!0):!1}const Le={[li]:32774,[dl]:32778,[fl]:32779};if(n)Le[Vr]=32775,Le[Wr]=32776;else{const B=e.get("EXT_blend_minmax");B!==null&&(Le[Vr]=B.MIN_EXT,Le[Wr]=B.MAX_EXT)}const Fe={[pl]:0,[ml]:1,[gl]:768,[Ea]:770,[wl]:776,[yl]:774,[xl]:772,[_l]:769,[Ta]:771,[Ml]:775,[vl]:773};function ht(B,j,ee,ce,fe,Ue,st,dt){if(B===Sn){_===!0&&(pe(3042),_=!1);return}if(_===!1&&(de(3042),_=!0),B!==ul){if(B!==x||dt!==b){if((M!==li||C!==li)&&(c.blendEquation(32774),M=li,C=li),dt)switch(B){case ui:c.blendFuncSeparate(1,771,1,771);break;case Ur:c.blendFunc(1,1);break;case Gr:c.blendFuncSeparate(0,769,0,1);break;case kr:c.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case ui:c.blendFuncSeparate(770,771,1,771);break;case Ur:c.blendFunc(770,1);break;case Gr:c.blendFuncSeparate(0,769,0,1);break;case kr:c.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}w=null,S=null,D=null,v=null,x=B,b=dt}return}fe=fe||j,Ue=Ue||ee,st=st||ce,(j!==M||fe!==C)&&(c.blendEquationSeparate(Le[j],Le[fe]),M=j,C=fe),(ee!==w||ce!==S||Ue!==D||st!==v)&&(c.blendFuncSeparate(Fe[ee],Fe[ce],Fe[Ue],Fe[st]),w=ee,S=ce,D=Ue,v=st),x=B,b=!1}function Ft(B,j){B.side===wn?pe(2884):de(2884);let ee=B.side===Lt;j&&(ee=!ee),xt(ee),B.blending===ui&&B.transparent===!1?ht(Sn):ht(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);const ce=B.stencilWrite;l.setTest(ce),ce&&(l.setMask(B.stencilWriteMask),l.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),l.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),We(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?de(32926):pe(32926)}function xt(B){P!==B&&(B?c.frontFace(2304):c.frontFace(2305),P=B)}function ut(B){B!==ll?(de(2884),B!==O&&(B===Or?c.cullFace(1029):B===cl?c.cullFace(1028):c.cullFace(1032))):pe(2884),O=B}function qe(B){B!==N&&(z&&c.lineWidth(B),N=B)}function We(B,j,ee){B?(de(32823),(A!==j||L!==ee)&&(c.polygonOffset(j,ee),A=j,L=ee)):pe(32823)}function qt(B){B?de(3089):pe(3089)}function Nt(B){B===void 0&&(B=33984+I-1),X!==B&&(c.activeTexture(B),X=B)}function R(B,j,ee){ee===void 0&&(X===null?ee=33984+I-1:ee=X);let ce=J[ee];ce===void 0&&(ce={type:void 0,texture:void 0},J[ee]=ce),(ce.type!==B||ce.texture!==j)&&(X!==ee&&(c.activeTexture(ee),X=ee),c.bindTexture(B,j||ue[B]),ce.type=B,ce.texture=j)}function E(){const B=J[X];B!==void 0&&B.type!==void 0&&(c.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Y(){try{c.compressedTexImage2D.apply(c,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function te(){try{c.compressedTexImage3D.apply(c,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ne(){try{c.texSubImage2D.apply(c,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function le(){try{c.texSubImage3D.apply(c,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xe(){try{c.compressedTexSubImage2D.apply(c,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{c.compressedTexSubImage3D.apply(c,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function K(){try{c.texStorage2D.apply(c,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function we(){try{c.texStorage3D.apply(c,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ge(){try{c.texImage2D.apply(c,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function be(){try{c.texImage3D.apply(c,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ye(B){Q.equals(B)===!1&&(c.scissor(B.x,B.y,B.z,B.w),Q.copy(B))}function _e(B){ie.equals(B)===!1&&(c.viewport(B.x,B.y,B.z,B.w),ie.copy(B))}function Ie(B,j){let ee=d.get(j);ee===void 0&&(ee=new WeakMap,d.set(j,ee));let ce=ee.get(B);ce===void 0&&(ce=c.getUniformBlockIndex(j,B.name),ee.set(B,ce))}function He(B,j){const ce=d.get(j).get(B);h.get(j)!==ce&&(c.uniformBlockBinding(j,ce,B.__bindingPointIndex),h.set(j,ce))}function it(){c.disable(3042),c.disable(2884),c.disable(2929),c.disable(32823),c.disable(3089),c.disable(2960),c.disable(32926),c.blendEquation(32774),c.blendFunc(1,0),c.blendFuncSeparate(1,0,1,0),c.colorMask(!0,!0,!0,!0),c.clearColor(0,0,0,0),c.depthMask(!0),c.depthFunc(513),c.clearDepth(1),c.stencilMask(4294967295),c.stencilFunc(519,0,4294967295),c.stencilOp(7680,7680,7680),c.clearStencil(0),c.cullFace(1029),c.frontFace(2305),c.polygonOffset(0,0),c.activeTexture(33984),c.bindFramebuffer(36160,null),n===!0&&(c.bindFramebuffer(36009,null),c.bindFramebuffer(36008,null)),c.useProgram(null),c.lineWidth(1),c.scissor(0,0,c.canvas.width,c.canvas.height),c.viewport(0,0,c.canvas.width,c.canvas.height),u={},X=null,J={},m={},g=new WeakMap,p=[],f=null,_=!1,x=null,M=null,w=null,S=null,C=null,D=null,v=null,b=!1,P=null,O=null,N=null,A=null,L=null,Q.set(0,0,c.canvas.width,c.canvas.height),ie.set(0,0,c.canvas.width,c.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:de,disable:pe,bindFramebuffer:me,drawBuffers:Me,useProgram:Ae,setBlending:ht,setMaterial:Ft,setFlipSided:xt,setCullFace:ut,setLineWidth:qe,setPolygonOffset:We,setScissorTest:qt,activeTexture:Nt,bindTexture:R,unbindTexture:E,compressedTexImage2D:Y,compressedTexImage3D:te,texImage2D:ge,texImage3D:be,updateUBOMapping:Ie,uniformBlockBinding:He,texStorage2D:K,texStorage3D:we,texSubImage2D:ne,texSubImage3D:le,compressedTexSubImage2D:xe,compressedTexSubImage3D:he,scissor:ye,viewport:_e,reset:it}}function ip(c,e,t,n,i,s,o){const r=i.isWebGL2,a=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,E){return _?new OffscreenCanvas(R,E):Vi("canvas")}function M(R,E,Y,te){let ne=1;if((R.width>te||R.height>te)&&(ne=te/Math.max(R.width,R.height)),ne<1||E===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const le=E?sc:Math.floor,xe=le(ne*R.width),he=le(ne*R.height);p===void 0&&(p=x(xe,he));const K=Y?x(xe,he):p;return K.width=xe,K.height=he,K.getContext("2d").drawImage(R,0,0,xe,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+xe+"x"+he+")."),K}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function w(R){return xo(R.width)&&xo(R.height)}function S(R){return r?!1:R.wrapS!==kt||R.wrapT!==kt||R.minFilter!==gt&&R.minFilter!==zt}function C(R,E){return R.generateMipmaps&&E&&R.minFilter!==gt&&R.minFilter!==zt}function D(R){c.generateMipmap(R)}function v(R,E,Y,te,ne=!1){if(r===!1)return E;if(R!==null){if(c[R]!==void 0)return c[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let le=E;return E===6403&&(Y===5126&&(le=33326),Y===5131&&(le=33325),Y===5121&&(le=33321)),E===33319&&(Y===5126&&(le=33328),Y===5131&&(le=33327),Y===5121&&(le=33323)),E===6408&&(Y===5126&&(le=34836),Y===5131&&(le=34842),Y===5121&&(le=te===ke&&ne===!1?35907:32856),Y===32819&&(le=32854),Y===32820&&(le=32855)),(le===33325||le===33326||le===33327||le===33328||le===34842||le===34836)&&e.get("EXT_color_buffer_float"),le}function b(R,E,Y){return C(R,Y)===!0||R.isFramebufferTexture&&R.minFilter!==gt&&R.minFilter!==zt?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function P(R){return R===gt||R===Hr||R===zs?9728:9729}function O(R){const E=R.target;E.removeEventListener("dispose",O),A(E),E.isVideoTexture&&g.delete(E)}function N(R){const E=R.target;E.removeEventListener("dispose",N),I(E)}function A(R){const E=n.get(R);if(E.__webglInit===void 0)return;const Y=R.source,te=f.get(Y);if(te){const ne=te[E.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&L(R),Object.keys(te).length===0&&f.delete(Y)}n.remove(R)}function L(R){const E=n.get(R);c.deleteTexture(E.__webglTexture);const Y=R.source,te=f.get(Y);delete te[E.__cacheKey],o.memory.textures--}function I(R){const E=R.texture,Y=n.get(R),te=n.get(E);if(te.__webglTexture!==void 0&&(c.deleteTexture(te.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)c.deleteFramebuffer(Y.__webglFramebuffer[ne]),Y.__webglDepthbuffer&&c.deleteRenderbuffer(Y.__webglDepthbuffer[ne]);else{if(c.deleteFramebuffer(Y.__webglFramebuffer),Y.__webglDepthbuffer&&c.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&c.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let ne=0;ne<Y.__webglColorRenderbuffer.length;ne++)Y.__webglColorRenderbuffer[ne]&&c.deleteRenderbuffer(Y.__webglColorRenderbuffer[ne]);Y.__webglDepthRenderbuffer&&c.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ne=0,le=E.length;ne<le;ne++){const xe=n.get(E[ne]);xe.__webglTexture&&(c.deleteTexture(xe.__webglTexture),o.memory.textures--),n.remove(E[ne])}n.remove(E),n.remove(R)}let z=0;function H(){z=0}function V(){const R=z;return R>=a&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+a),z+=1,R}function X(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.encoding),E.join()}function J(R,E){const Y=n.get(R);if(R.isVideoTexture&&qt(R),R.isRenderTargetTexture===!1&&R.version>0&&Y.__version!==R.version){const te=R.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(Y,R,E);return}}t.bindTexture(3553,Y.__webglTexture,33984+E)}function oe(R,E){const Y=n.get(R);if(R.version>0&&Y.__version!==R.version){pe(Y,R,E);return}t.bindTexture(35866,Y.__webglTexture,33984+E)}function F(R,E){const Y=n.get(R);if(R.version>0&&Y.__version!==R.version){pe(Y,R,E);return}t.bindTexture(32879,Y.__webglTexture,33984+E)}function Q(R,E){const Y=n.get(R);if(R.version>0&&Y.__version!==R.version){me(Y,R,E);return}t.bindTexture(34067,Y.__webglTexture,33984+E)}const ie={[Oi]:10497,[kt]:33071,[br]:33648},k={[gt]:9728,[Hr]:9984,[zs]:9986,[zt]:9729,[Bl]:9985,[Ui]:9987};function ue(R,E,Y){if(Y?(c.texParameteri(R,10242,ie[E.wrapS]),c.texParameteri(R,10243,ie[E.wrapT]),(R===32879||R===35866)&&c.texParameteri(R,32882,ie[E.wrapR]),c.texParameteri(R,10240,k[E.magFilter]),c.texParameteri(R,10241,k[E.minFilter])):(c.texParameteri(R,10242,33071),c.texParameteri(R,10243,33071),(R===32879||R===35866)&&c.texParameteri(R,32882,33071),(E.wrapS!==kt||E.wrapT!==kt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),c.texParameteri(R,10240,P(E.magFilter)),c.texParameteri(R,10241,P(E.minFilter)),E.minFilter!==gt&&E.minFilter!==zt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===gt||E.minFilter!==zs&&E.minFilter!==Ui||E.type===Gn&&e.has("OES_texture_float_linear")===!1||r===!1&&E.type===Gi&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(c.texParameterf(R,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function de(R,E){let Y=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",O));const te=E.source;let ne=f.get(te);ne===void 0&&(ne={},f.set(te,ne));const le=X(E);if(le!==R.__cacheKey){ne[le]===void 0&&(ne[le]={texture:c.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ne[le].usedTimes++;const xe=ne[R.__cacheKey];xe!==void 0&&(ne[R.__cacheKey].usedTimes--,xe.usedTimes===0&&L(E)),R.__cacheKey=le,R.__webglTexture=ne[le].texture}return Y}function pe(R,E,Y){let te=3553;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(te=35866),E.isData3DTexture&&(te=32879);const ne=de(R,E),le=E.source;t.bindTexture(te,R.__webglTexture,33984+Y);const xe=n.get(le);if(le.version!==xe.__version||ne===!0){t.activeTexture(33984+Y),c.pixelStorei(37440,E.flipY),c.pixelStorei(37441,E.premultiplyAlpha),c.pixelStorei(3317,E.unpackAlignment),c.pixelStorei(37443,0);const he=S(E)&&w(E.image)===!1;let K=M(E.image,he,!1,h);K=Nt(E,K);const we=w(K)||r,ge=s.convert(E.format,E.encoding);let be=s.convert(E.type),ye=v(E.internalFormat,ge,be,E.encoding,E.isVideoTexture);ue(te,E,we);let _e;const Ie=E.mipmaps,He=r&&E.isVideoTexture!==!0,it=xe.__version===void 0||ne===!0,B=b(E,K,we);if(E.isDepthTexture)ye=6402,r?E.type===Gn?ye=36012:E.type===Un?ye=33190:E.type===di?ye=35056:ye=33189:E.type===Gn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===kn&&ye===6402&&E.type!==La&&E.type!==Un&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Un,be=s.convert(E.type)),E.format===gi&&ye===6402&&(ye=34041,E.type!==di&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=di,be=s.convert(E.type))),it&&(He?t.texStorage2D(3553,1,ye,K.width,K.height):t.texImage2D(3553,0,ye,K.width,K.height,0,ge,be,null));else if(E.isDataTexture)if(Ie.length>0&&we){He&&it&&t.texStorage2D(3553,B,ye,Ie[0].width,Ie[0].height);for(let j=0,ee=Ie.length;j<ee;j++)_e=Ie[j],He?t.texSubImage2D(3553,j,0,0,_e.width,_e.height,ge,be,_e.data):t.texImage2D(3553,j,ye,_e.width,_e.height,0,ge,be,_e.data);E.generateMipmaps=!1}else He?(it&&t.texStorage2D(3553,B,ye,K.width,K.height),t.texSubImage2D(3553,0,0,0,K.width,K.height,ge,be,K.data)):t.texImage2D(3553,0,ye,K.width,K.height,0,ge,be,K.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){He&&it&&t.texStorage3D(35866,B,ye,Ie[0].width,Ie[0].height,K.depth);for(let j=0,ee=Ie.length;j<ee;j++)_e=Ie[j],E.format!==Vt?ge!==null?He?t.compressedTexSubImage3D(35866,j,0,0,0,_e.width,_e.height,K.depth,ge,_e.data,0,0):t.compressedTexImage3D(35866,j,ye,_e.width,_e.height,K.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?t.texSubImage3D(35866,j,0,0,0,_e.width,_e.height,K.depth,ge,be,_e.data):t.texImage3D(35866,j,ye,_e.width,_e.height,K.depth,0,ge,be,_e.data)}else{He&&it&&t.texStorage2D(3553,B,ye,Ie[0].width,Ie[0].height);for(let j=0,ee=Ie.length;j<ee;j++)_e=Ie[j],E.format!==Vt?ge!==null?He?t.compressedTexSubImage2D(3553,j,0,0,_e.width,_e.height,ge,_e.data):t.compressedTexImage2D(3553,j,ye,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?t.texSubImage2D(3553,j,0,0,_e.width,_e.height,ge,be,_e.data):t.texImage2D(3553,j,ye,_e.width,_e.height,0,ge,be,_e.data)}else if(E.isDataArrayTexture)He?(it&&t.texStorage3D(35866,B,ye,K.width,K.height,K.depth),t.texSubImage3D(35866,0,0,0,0,K.width,K.height,K.depth,ge,be,K.data)):t.texImage3D(35866,0,ye,K.width,K.height,K.depth,0,ge,be,K.data);else if(E.isData3DTexture)He?(it&&t.texStorage3D(32879,B,ye,K.width,K.height,K.depth),t.texSubImage3D(32879,0,0,0,0,K.width,K.height,K.depth,ge,be,K.data)):t.texImage3D(32879,0,ye,K.width,K.height,K.depth,0,ge,be,K.data);else if(E.isFramebufferTexture){if(it)if(He)t.texStorage2D(3553,B,ye,K.width,K.height);else{let j=K.width,ee=K.height;for(let ce=0;ce<B;ce++)t.texImage2D(3553,ce,ye,j,ee,0,ge,be,null),j>>=1,ee>>=1}}else if(Ie.length>0&&we){He&&it&&t.texStorage2D(3553,B,ye,Ie[0].width,Ie[0].height);for(let j=0,ee=Ie.length;j<ee;j++)_e=Ie[j],He?t.texSubImage2D(3553,j,0,0,ge,be,_e):t.texImage2D(3553,j,ye,ge,be,_e);E.generateMipmaps=!1}else He?(it&&t.texStorage2D(3553,B,ye,K.width,K.height),t.texSubImage2D(3553,0,0,0,ge,be,K)):t.texImage2D(3553,0,ye,ge,be,K);C(E,we)&&D(te),xe.__version=le.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function me(R,E,Y){if(E.image.length!==6)return;const te=de(R,E),ne=E.source;t.bindTexture(34067,R.__webglTexture,33984+Y);const le=n.get(ne);if(ne.version!==le.__version||te===!0){t.activeTexture(33984+Y),c.pixelStorei(37440,E.flipY),c.pixelStorei(37441,E.premultiplyAlpha),c.pixelStorei(3317,E.unpackAlignment),c.pixelStorei(37443,0);const xe=E.isCompressedTexture||E.image[0].isCompressedTexture,he=E.image[0]&&E.image[0].isDataTexture,K=[];for(let j=0;j<6;j++)!xe&&!he?K[j]=M(E.image[j],!1,!0,l):K[j]=he?E.image[j].image:E.image[j],K[j]=Nt(E,K[j]);const we=K[0],ge=w(we)||r,be=s.convert(E.format,E.encoding),ye=s.convert(E.type),_e=v(E.internalFormat,be,ye,E.encoding),Ie=r&&E.isVideoTexture!==!0,He=le.__version===void 0||te===!0;let it=b(E,we,ge);ue(34067,E,ge);let B;if(xe){Ie&&He&&t.texStorage2D(34067,it,_e,we.width,we.height);for(let j=0;j<6;j++){B=K[j].mipmaps;for(let ee=0;ee<B.length;ee++){const ce=B[ee];E.format!==Vt?be!==null?Ie?t.compressedTexSubImage2D(34069+j,ee,0,0,ce.width,ce.height,be,ce.data):t.compressedTexImage2D(34069+j,ee,_e,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?t.texSubImage2D(34069+j,ee,0,0,ce.width,ce.height,be,ye,ce.data):t.texImage2D(34069+j,ee,_e,ce.width,ce.height,0,be,ye,ce.data)}}}else{B=E.mipmaps,Ie&&He&&(B.length>0&&it++,t.texStorage2D(34067,it,_e,K[0].width,K[0].height));for(let j=0;j<6;j++)if(he){Ie?t.texSubImage2D(34069+j,0,0,0,K[j].width,K[j].height,be,ye,K[j].data):t.texImage2D(34069+j,0,_e,K[j].width,K[j].height,0,be,ye,K[j].data);for(let ee=0;ee<B.length;ee++){const fe=B[ee].image[j].image;Ie?t.texSubImage2D(34069+j,ee+1,0,0,fe.width,fe.height,be,ye,fe.data):t.texImage2D(34069+j,ee+1,_e,fe.width,fe.height,0,be,ye,fe.data)}}else{Ie?t.texSubImage2D(34069+j,0,0,0,be,ye,K[j]):t.texImage2D(34069+j,0,_e,be,ye,K[j]);for(let ee=0;ee<B.length;ee++){const ce=B[ee];Ie?t.texSubImage2D(34069+j,ee+1,0,0,be,ye,ce.image[j]):t.texImage2D(34069+j,ee+1,_e,be,ye,ce.image[j])}}}C(E,ge)&&D(34067),le.__version=ne.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Me(R,E,Y,te,ne){const le=s.convert(Y.format,Y.encoding),xe=s.convert(Y.type),he=v(Y.internalFormat,le,xe,Y.encoding);n.get(E).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,he,E.width,E.height,E.depth,0,le,xe,null):t.texImage2D(ne,0,he,E.width,E.height,0,le,xe,null)),t.bindFramebuffer(36160,R),We(E)?u.framebufferTexture2DMultisampleEXT(36160,te,ne,n.get(Y).__webglTexture,0,qe(E)):(ne===3553||ne>=34069&&ne<=34074)&&c.framebufferTexture2D(36160,te,ne,n.get(Y).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ae(R,E,Y){if(c.bindRenderbuffer(36161,R),E.depthBuffer&&!E.stencilBuffer){let te=33189;if(Y||We(E)){const ne=E.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Gn?te=36012:ne.type===Un&&(te=33190));const le=qe(E);We(E)?u.renderbufferStorageMultisampleEXT(36161,le,te,E.width,E.height):c.renderbufferStorageMultisample(36161,le,te,E.width,E.height)}else c.renderbufferStorage(36161,te,E.width,E.height);c.framebufferRenderbuffer(36160,36096,36161,R)}else if(E.depthBuffer&&E.stencilBuffer){const te=qe(E);Y&&We(E)===!1?c.renderbufferStorageMultisample(36161,te,35056,E.width,E.height):We(E)?u.renderbufferStorageMultisampleEXT(36161,te,35056,E.width,E.height):c.renderbufferStorage(36161,34041,E.width,E.height),c.framebufferRenderbuffer(36160,33306,36161,R)}else{const te=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ne=0;ne<te.length;ne++){const le=te[ne],xe=s.convert(le.format,le.encoding),he=s.convert(le.type),K=v(le.internalFormat,xe,he,le.encoding),we=qe(E);Y&&We(E)===!1?c.renderbufferStorageMultisample(36161,we,K,E.width,E.height):We(E)?u.renderbufferStorageMultisampleEXT(36161,we,K,E.width,E.height):c.renderbufferStorage(36161,K,E.width,E.height)}}c.bindRenderbuffer(36161,null)}function Le(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),J(E.depthTexture,0);const te=n.get(E.depthTexture).__webglTexture,ne=qe(E);if(E.depthTexture.format===kn)We(E)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,ne):c.framebufferTexture2D(36160,36096,3553,te,0);else if(E.depthTexture.format===gi)We(E)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,ne):c.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function Fe(R){const E=n.get(R),Y=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Le(E.__webglFramebuffer,R)}else if(Y){E.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(36160,E.__webglFramebuffer[te]),E.__webglDepthbuffer[te]=c.createRenderbuffer(),Ae(E.__webglDepthbuffer[te],R,!1)}else t.bindFramebuffer(36160,E.__webglFramebuffer),E.__webglDepthbuffer=c.createRenderbuffer(),Ae(E.__webglDepthbuffer,R,!1);t.bindFramebuffer(36160,null)}function ht(R,E,Y){const te=n.get(R);E!==void 0&&Me(te.__webglFramebuffer,R,R.texture,36064,3553),Y!==void 0&&Fe(R)}function Ft(R){const E=R.texture,Y=n.get(R),te=n.get(E);R.addEventListener("dispose",N),R.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=c.createTexture()),te.__version=E.version,o.memory.textures++);const ne=R.isWebGLCubeRenderTarget===!0,le=R.isWebGLMultipleRenderTargets===!0,xe=w(R)||r;if(ne){Y.__webglFramebuffer=[];for(let he=0;he<6;he++)Y.__webglFramebuffer[he]=c.createFramebuffer()}else{if(Y.__webglFramebuffer=c.createFramebuffer(),le)if(i.drawBuffers){const he=R.texture;for(let K=0,we=he.length;K<we;K++){const ge=n.get(he[K]);ge.__webglTexture===void 0&&(ge.__webglTexture=c.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&R.samples>0&&We(R)===!1){const he=le?E:[E];Y.__webglMultisampledFramebuffer=c.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,Y.__webglMultisampledFramebuffer);for(let K=0;K<he.length;K++){const we=he[K];Y.__webglColorRenderbuffer[K]=c.createRenderbuffer(),c.bindRenderbuffer(36161,Y.__webglColorRenderbuffer[K]);const ge=s.convert(we.format,we.encoding),be=s.convert(we.type),ye=v(we.internalFormat,ge,be,we.encoding,R.isXRRenderTarget===!0),_e=qe(R);c.renderbufferStorageMultisample(36161,_e,ye,R.width,R.height),c.framebufferRenderbuffer(36160,36064+K,36161,Y.__webglColorRenderbuffer[K])}c.bindRenderbuffer(36161,null),R.depthBuffer&&(Y.__webglDepthRenderbuffer=c.createRenderbuffer(),Ae(Y.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,te.__webglTexture),ue(34067,E,xe);for(let he=0;he<6;he++)Me(Y.__webglFramebuffer[he],R,E,36064,34069+he);C(E,xe)&&D(34067),t.unbindTexture()}else if(le){const he=R.texture;for(let K=0,we=he.length;K<we;K++){const ge=he[K],be=n.get(ge);t.bindTexture(3553,be.__webglTexture),ue(3553,ge,xe),Me(Y.__webglFramebuffer,R,ge,36064+K,3553),C(ge,xe)&&D(3553)}t.unbindTexture()}else{let he=3553;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(r?he=R.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,te.__webglTexture),ue(he,E,xe),Me(Y.__webglFramebuffer,R,E,36064,he),C(E,xe)&&D(he),t.unbindTexture()}R.depthBuffer&&Fe(R)}function xt(R){const E=w(R)||r,Y=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let te=0,ne=Y.length;te<ne;te++){const le=Y[te];if(C(le,E)){const xe=R.isWebGLCubeRenderTarget?34067:3553,he=n.get(le).__webglTexture;t.bindTexture(xe,he),D(xe),t.unbindTexture()}}}function ut(R){if(r&&R.samples>0&&We(R)===!1){const E=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],Y=R.width,te=R.height;let ne=16384;const le=[],xe=R.stencilBuffer?33306:36096,he=n.get(R),K=R.isWebGLMultipleRenderTargets===!0;if(K)for(let we=0;we<E.length;we++)t.bindFramebuffer(36160,he.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(36160,36064+we,36161,null),t.bindFramebuffer(36160,he.__webglFramebuffer),c.framebufferTexture2D(36009,36064+we,3553,null,0);t.bindFramebuffer(36008,he.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,he.__webglFramebuffer);for(let we=0;we<E.length;we++){le.push(36064+we),R.depthBuffer&&le.push(xe);const ge=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(ge===!1&&(R.depthBuffer&&(ne|=256),R.stencilBuffer&&(ne|=1024)),K&&c.framebufferRenderbuffer(36008,36064,36161,he.__webglColorRenderbuffer[we]),ge===!0&&(c.invalidateFramebuffer(36008,[xe]),c.invalidateFramebuffer(36009,[xe])),K){const be=n.get(E[we]).__webglTexture;c.framebufferTexture2D(36009,36064,3553,be,0)}c.blitFramebuffer(0,0,Y,te,0,0,Y,te,ne,9728),m&&c.invalidateFramebuffer(36008,le)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),K)for(let we=0;we<E.length;we++){t.bindFramebuffer(36160,he.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(36160,36064+we,36161,he.__webglColorRenderbuffer[we]);const ge=n.get(E[we]).__webglTexture;t.bindFramebuffer(36160,he.__webglFramebuffer),c.framebufferTexture2D(36009,36064+we,3553,ge,0)}t.bindFramebuffer(36009,he.__webglMultisampledFramebuffer)}}function qe(R){return Math.min(d,R.samples)}function We(R){const E=n.get(R);return r&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function qt(R){const E=o.render.frame;g.get(R)!==E&&(g.set(R,E),R.update())}function Nt(R,E){const Y=R.encoding,te=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Sr||Y!==Wn&&(Y===ke?r===!1?e.has("EXT_sRGB")===!0&&te===Vt?(R.format=Sr,R.minFilter=zt,R.generateMipmaps=!1):E=Ia.sRGBToLinear(E):(te!==Vt||ne!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",Y)),E}this.allocateTextureUnit=V,this.resetTextureUnits=H,this.setTexture2D=J,this.setTexture2DArray=oe,this.setTexture3D=F,this.setTextureCube=Q,this.rebindTextures=ht,this.setupRenderTarget=Ft,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=We}function sp(c,e,t){const n=t.isWebGL2;function i(s,o=null){let r;if(s===Vn)return 5121;if(s===kl)return 32819;if(s===Vl)return 32820;if(s===Ol)return 5120;if(s===Ul)return 5122;if(s===La)return 5123;if(s===Gl)return 5124;if(s===Un)return 5125;if(s===Gn)return 5126;if(s===Gi)return n?5131:(r=e.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(s===Wl)return 6406;if(s===Vt)return 6408;if(s===Hl)return 6409;if(s===ql)return 6410;if(s===kn)return 6402;if(s===gi)return 34041;if(s===Sr)return r=e.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(s===Xl)return 6403;if(s===jl)return 36244;if(s===Yl)return 33319;if(s===$l)return 33320;if(s===Zl)return 36249;if(s===Fs||s===Ns||s===Bs||s===Os)if(o===ke)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(s===Fs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ns)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Os)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(s===Fs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ns)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Bs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Os)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===qr||s===Xr||s===jr||s===Yr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(s===qr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Xr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===jr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Yr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Kl)return r=e.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===$r||s===Zr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(s===$r)return o===ke?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(s===Zr)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Kr||s===Jr||s===Qr||s===eo||s===to||s===no||s===io||s===so||s===ro||s===oo||s===ao||s===lo||s===co||s===ho)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(s===Kr)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Jr)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Qr)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===eo)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===to)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===no)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===io)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===so)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ro)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===oo)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ao)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===lo)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===co)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ho)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Us)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(s===Us)return o===ke?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Jl||s===uo||s===fo||s===po)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(s===Us)return r.COMPRESSED_RED_RGTC1_EXT;if(s===uo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===fo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===po)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===di?n?34042:(r=e.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):c[s]!==void 0?c[s]:null}return{convert:i}}class rp extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ms extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const op={type:"move"};class ur{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const r=this._targetRay,a=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const p of e.hand.values()){const f=t.getJointPose(p,n),_=this._getHandJoint(l,p);f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=f.radius),_.visible=f!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&u>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else a!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1));r!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(r.matrix.fromArray(i.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),i.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(i.linearVelocity)):r.hasLinearVelocity=!1,i.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(i.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(op)))}return r!==null&&(r.visible=i!==null),a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ms;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ap extends yt{constructor(e,t,n,i,s,o,r,a,l,h){if(h=h!==void 0?h:kn,h!==kn&&h!==gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===kn&&(n=Un),n===void 0&&h===gi&&(n=di),super(null,i,s,o,r,a,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=r!==void 0?r:gt,this.minFilter=a!==void 0?a:gt,this.flipY=!1,this.generateMipmaps=!1}}class lp extends vi{constructor(e,t){super();const n=this;let i=null,s=1,o=null,r="local-floor",a=1,l=null,h=null,d=null,u=null,m=null,g=null;const p=t.getContextAttributes();let f=null,_=null;const x=[],M=[],w=new Set,S=new Map,C=new Ct;C.layers.enable(1),C.viewport=new Ve;const D=new Ct;D.layers.enable(2),D.viewport=new Ve;const v=[C,D],b=new rp;b.layers.enable(1),b.layers.enable(2);let P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let Q=x[F];return Q===void 0&&(Q=new ur,x[F]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(F){let Q=x[F];return Q===void 0&&(Q=new ur,x[F]=Q),Q.getGripSpace()},this.getHand=function(F){let Q=x[F];return Q===void 0&&(Q=new ur,x[F]=Q),Q.getHandSpace()};function N(F){const Q=M.indexOf(F.inputSource);if(Q===-1)return;const ie=x[Q];ie!==void 0&&ie.dispatchEvent({type:F.type,data:F.inputSource})}function A(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",A),i.removeEventListener("inputsourceschange",L);for(let F=0;F<x.length;F++){const Q=M[F];Q!==null&&(M[F]=null,x[F].disconnect(Q))}P=null,O=null,e.setRenderTarget(f),m=null,u=null,d=null,i=null,_=null,oe.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){r=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(F){l=F},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(F){if(i=F,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",A),i.addEventListener("inputsourceschange",L),p.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:m}),_=new Hn(m.framebufferWidth,m.framebufferHeight,{format:Vt,type:Vn,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let Q=null,ie=null,k=null;p.depth&&(k=p.stencil?35056:33190,Q=p.stencil?gi:kn,ie=p.stencil?di:Un);const ue={colorFormat:32856,depthFormat:k,scaleFactor:s};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(ue),i.updateRenderState({layers:[u]}),_=new Hn(u.textureWidth,u.textureHeight,{format:Vt,type:Vn,depthTexture:new ap(u.textureWidth,u.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const de=e.properties.get(_);de.__ignoreDepthValues=u.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(a),l=null,o=await i.requestReferenceSpace(r),oe.setContext(i),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function L(F){for(let Q=0;Q<F.removed.length;Q++){const ie=F.removed[Q],k=M.indexOf(ie);k>=0&&(M[k]=null,x[k].disconnect(ie))}for(let Q=0;Q<F.added.length;Q++){const ie=F.added[Q];let k=M.indexOf(ie);if(k===-1){for(let de=0;de<x.length;de++)if(de>=M.length){M.push(ie),k=de;break}else if(M[de]===null){M[de]=ie,k=de;break}if(k===-1)break}const ue=x[k];ue&&ue.connect(ie)}}const I=new G,z=new G;function H(F,Q,ie){I.setFromMatrixPosition(Q.matrixWorld),z.setFromMatrixPosition(ie.matrixWorld);const k=I.distanceTo(z),ue=Q.projectionMatrix.elements,de=ie.projectionMatrix.elements,pe=ue[14]/(ue[10]-1),me=ue[14]/(ue[10]+1),Me=(ue[9]+1)/ue[5],Ae=(ue[9]-1)/ue[5],Le=(ue[8]-1)/ue[0],Fe=(de[8]+1)/de[0],ht=pe*Le,Ft=pe*Fe,xt=k/(-Le+Fe),ut=xt*-Le;Q.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(ut),F.translateZ(xt),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const qe=pe+xt,We=me+xt,qt=ht-ut,Nt=Ft+(k-ut),R=Me*me/We*qe,E=Ae*me/We*qe;F.projectionMatrix.makePerspective(qt,Nt,R,E,qe,We)}function V(F,Q){Q===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(Q.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(i===null)return;b.near=D.near=C.near=F.near,b.far=D.far=C.far=F.far,(P!==b.near||O!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,O=b.far);const Q=F.parent,ie=b.cameras;V(b,Q);for(let ue=0;ue<ie.length;ue++)V(ie[ue],Q);b.matrixWorld.decompose(b.position,b.quaternion,b.scale),F.matrix.copy(b.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale);const k=F.children;for(let ue=0,de=k.length;ue<de;ue++)k[ue].updateMatrixWorld(!0);ie.length===2?H(b,C,D):b.projectionMatrix.copy(C.projectionMatrix)},this.getCamera=function(){return b},this.getFoveation=function(){if(!(u===null&&m===null))return a},this.setFoveation=function(F){a=F,u!==null&&(u.fixedFoveation=F),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=F)},this.getPlanes=function(){return w};let X=null;function J(F,Q){if(h=Q.getViewerPose(l||o),g=Q,h!==null){const ie=h.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let k=!1;ie.length!==b.cameras.length&&(b.cameras.length=0,k=!0);for(let ue=0;ue<ie.length;ue++){const de=ie[ue];let pe=null;if(m!==null)pe=m.getViewport(de);else{const Me=d.getViewSubImage(u,de);pe=Me.viewport,ue===0&&(e.setRenderTargetTextures(_,Me.colorTexture,u.ignoreDepthValues?void 0:Me.depthStencilTexture),e.setRenderTarget(_))}let me=v[ue];me===void 0&&(me=new Ct,me.layers.enable(ue),me.viewport=new Ve,v[ue]=me),me.matrix.fromArray(de.transform.matrix),me.projectionMatrix.fromArray(de.projectionMatrix),me.viewport.set(pe.x,pe.y,pe.width,pe.height),ue===0&&b.matrix.copy(me.matrix),k===!0&&b.cameras.push(me)}}for(let ie=0;ie<x.length;ie++){const k=M[ie],ue=x[ie];k!==null&&ue!==void 0&&ue.update(k,Q,l||o)}if(X&&X(F,Q),Q.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Q.detectedPlanes});let ie=null;for(const k of w)Q.detectedPlanes.has(k)||(ie===null&&(ie=[]),ie.push(k));if(ie!==null)for(const k of ie)w.delete(k),S.delete(k),n.dispatchEvent({type:"planeremoved",data:k});for(const k of Q.detectedPlanes)if(!w.has(k))w.add(k),S.set(k,Q.lastChangedTime),n.dispatchEvent({type:"planeadded",data:k});else{const ue=S.get(k);k.lastChangedTime>ue&&(S.set(k,k.lastChangedTime),n.dispatchEvent({type:"planechanged",data:k}))}}g=null}const oe=new Wa;oe.setAnimationLoop(J),this.setAnimationLoop=function(F){X=F},this.dispose=function(){}}}function cp(c,e){function t(p,f){f.color.getRGB(p.fogColor.value,Ga(c)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function n(p,f,_,x,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(p,f):f.isMeshToonMaterial?(i(p,f),h(p,f)):f.isMeshPhongMaterial?(i(p,f),l(p,f)):f.isMeshStandardMaterial?(i(p,f),d(p,f),f.isMeshPhysicalMaterial&&u(p,f,M)):f.isMeshMatcapMaterial?(i(p,f),m(p,f)):f.isMeshDepthMaterial?i(p,f):f.isMeshDistanceMaterial?(i(p,f),g(p,f)):f.isMeshNormalMaterial?i(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?r(p,f,_,x):f.isSpriteMaterial?a(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===Lt&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===Lt&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const _=e.get(f).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const w=c.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*w}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let x;f.map?x=f.map:f.specularMap?x=f.specularMap:f.displacementMap?x=f.displacementMap:f.normalMap?x=f.normalMap:f.bumpMap?x=f.bumpMap:f.roughnessMap?x=f.roughnessMap:f.metalnessMap?x=f.metalnessMap:f.alphaMap?x=f.alphaMap:f.emissiveMap?x=f.emissiveMap:f.clearcoatMap?x=f.clearcoatMap:f.clearcoatNormalMap?x=f.clearcoatNormalMap:f.clearcoatRoughnessMap?x=f.clearcoatRoughnessMap:f.iridescenceMap?x=f.iridescenceMap:f.iridescenceThicknessMap?x=f.iridescenceThicknessMap:f.specularIntensityMap?x=f.specularIntensityMap:f.specularColorMap?x=f.specularColorMap:f.transmissionMap?x=f.transmissionMap:f.thicknessMap?x=f.thicknessMap:f.sheenColorMap?x=f.sheenColorMap:f.sheenRoughnessMap&&(x=f.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix));let M;f.aoMap?M=f.aoMap:f.lightMap&&(M=f.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uv2Transform.value.copy(M.matrix))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function r(p,f,_,x){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*_,p.scale.value=x*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let M;f.map?M=f.map:f.alphaMap&&(M=f.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uvTransform.value.copy(M.matrix))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let _;f.map?_=f.map:f.alphaMap&&(_=f.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function l(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function u(p,f,_){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===Lt&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function hp(c,e,t,n){let i={},s={},o=[];const r=t.isWebGL2?c.getParameter(35375):0;function a(x,M){const w=M.program;n.uniformBlockBinding(x,w)}function l(x,M){let w=i[x.id];w===void 0&&(g(x),w=h(x),i[x.id]=w,x.addEventListener("dispose",f));const S=M.program;n.updateUBOMapping(x,S);const C=e.render.frame;s[x.id]!==C&&(u(x),s[x.id]=C)}function h(x){const M=d();x.__bindingPointIndex=M;const w=c.createBuffer(),S=x.__size,C=x.usage;return c.bindBuffer(35345,w),c.bufferData(35345,S,C),c.bindBuffer(35345,null),c.bindBufferBase(35345,M,w),w}function d(){for(let x=0;x<r;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const M=i[x.id],w=x.uniforms,S=x.__cache;c.bindBuffer(35345,M);for(let C=0,D=w.length;C<D;C++){const v=w[C];if(m(v,C,S)===!0){const b=v.__offset,P=Array.isArray(v.value)?v.value:[v.value];let O=0;for(let N=0;N<P.length;N++){const A=P[N],L=p(A);typeof A=="number"?(v.__data[0]=A,c.bufferSubData(35345,b+O,v.__data)):A.isMatrix3?(v.__data[0]=A.elements[0],v.__data[1]=A.elements[1],v.__data[2]=A.elements[2],v.__data[3]=A.elements[0],v.__data[4]=A.elements[3],v.__data[5]=A.elements[4],v.__data[6]=A.elements[5],v.__data[7]=A.elements[0],v.__data[8]=A.elements[6],v.__data[9]=A.elements[7],v.__data[10]=A.elements[8],v.__data[11]=A.elements[0]):(A.toArray(v.__data,O),O+=L.storage/Float32Array.BYTES_PER_ELEMENT)}c.bufferSubData(35345,b,v.__data)}}c.bindBuffer(35345,null)}function m(x,M,w){const S=x.value;if(w[M]===void 0){if(typeof S=="number")w[M]=S;else{const C=Array.isArray(S)?S:[S],D=[];for(let v=0;v<C.length;v++)D.push(C[v].clone());w[M]=D}return!0}else if(typeof S=="number"){if(w[M]!==S)return w[M]=S,!0}else{const C=Array.isArray(w[M])?w[M]:[w[M]],D=Array.isArray(S)?S:[S];for(let v=0;v<C.length;v++){const b=C[v];if(b.equals(D[v])===!1)return b.copy(D[v]),!0}}return!1}function g(x){const M=x.uniforms;let w=0;const S=16;let C=0;for(let D=0,v=M.length;D<v;D++){const b=M[D],P={boundary:0,storage:0},O=Array.isArray(b.value)?b.value:[b.value];for(let N=0,A=O.length;N<A;N++){const L=O[N],I=p(L);P.boundary+=I.boundary,P.storage+=I.storage}if(b.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=w,D>0){C=w%S;const N=S-C;C!==0&&N-P.boundary<0&&(w+=S-C,b.__offset=w)}w+=P.storage}return C=w%S,C>0&&(w+=S-C),x.__size=w,x.__cache={},this}function p(x){const M={boundary:0,storage:0};return typeof x=="number"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function f(x){const M=x.target;M.removeEventListener("dispose",f);const w=o.indexOf(M.__bindingPointIndex);o.splice(w,1),c.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function _(){for(const x in i)c.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:a,update:l,dispose:_}}function up(){const c=Vi("canvas");return c.style.display="block",c}function Pr(c={}){this.isWebGLRenderer=!0;const e=c.canvas!==void 0?c.canvas:up(),t=c.context!==void 0?c.context:null,n=c.depth!==void 0?c.depth:!0,i=c.stencil!==void 0?c.stencil:!0,s=c.antialias!==void 0?c.antialias:!1,o=c.premultipliedAlpha!==void 0?c.premultipliedAlpha:!0,r=c.preserveDrawingBuffer!==void 0?c.preserveDrawingBuffer:!1,a=c.powerPreference!==void 0?c.powerPreference:"default",l=c.failIfMajorPerformanceCaveat!==void 0?c.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=c.alpha!==void 0?c.alpha:!1;let d=null,u=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Wn,this.useLegacyLights=!0,this.toneMapping=pn,this.toneMappingExposure=1;const p=this;let f=!1,_=0,x=0,M=null,w=-1,S=null;const C=new Ve,D=new Ve;let v=null,b=e.width,P=e.height,O=1,N=null,A=null;const L=new Ve(0,0,b,P),I=new Ve(0,0,b,P);let z=!1;const H=new Lr;let V=!1,X=!1,J=null;const oe=new Qe,F=new G,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ie(){return M===null?O:1}let k=t;function ue(T,W){for(let q=0;q<T.length;q++){const U=T[q],$=e.getContext(U,W);if($!==null)return $}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:r,powerPreference:a,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Tr}`),e.addEventListener("webglcontextlost",be,!1),e.addEventListener("webglcontextrestored",ye,!1),e.addEventListener("webglcontextcreationerror",_e,!1),k===null){const W=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&W.shift(),k=ue(W,T),k===null)throw ue(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let de,pe,me,Me,Ae,Le,Fe,ht,Ft,xt,ut,qe,We,qt,Nt,R,E,Y,te,ne,le,xe,he,K;function we(){de=new Md(k),pe=new pd(k,de,c),de.init(pe),xe=new sp(k,de,pe),me=new np(k,de,pe),Me=new Sd,Ae=new Vf,Le=new ip(k,de,me,Ae,pe,xe,Me),Fe=new gd(p),ht=new yd(p),Ft=new Dc(k,pe),he=new dd(k,de,Ft,pe),xt=new wd(k,Ft,Me,he),ut=new Cd(k,xt,Ft,Me),te=new Ad(k,pe,Le),R=new md(Ae),qe=new kf(p,Fe,ht,de,pe,he,R),We=new cp(p,Ae),qt=new Hf,Nt=new Zf(de,pe),Y=new ud(p,Fe,ht,me,ut,h,o),E=new tp(p,ut,pe),K=new hp(k,Me,pe,me),ne=new fd(k,de,Me,pe),le=new bd(k,de,Me,pe),Me.programs=qe.programs,p.capabilities=pe,p.extensions=de,p.properties=Ae,p.renderLists=qt,p.shadowMap=E,p.state=me,p.info=Me}we();const ge=new lp(p,k);this.xr=ge,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const T=de.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=de.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(T){T!==void 0&&(O=T,this.setSize(b,P,!1))},this.getSize=function(T){return T.set(b,P)},this.setSize=function(T,W,q=!0){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}b=T,P=W,e.width=Math.floor(T*O),e.height=Math.floor(W*O),q===!0&&(e.style.width=T+"px",e.style.height=W+"px"),this.setViewport(0,0,T,W)},this.getDrawingBufferSize=function(T){return T.set(b*O,P*O).floor()},this.setDrawingBufferSize=function(T,W,q){b=T,P=W,O=q,e.width=Math.floor(T*q),e.height=Math.floor(W*q),this.setViewport(0,0,T,W)},this.getCurrentViewport=function(T){return T.copy(C)},this.getViewport=function(T){return T.copy(L)},this.setViewport=function(T,W,q,U){T.isVector4?L.set(T.x,T.y,T.z,T.w):L.set(T,W,q,U),me.viewport(C.copy(L).multiplyScalar(O).floor())},this.getScissor=function(T){return T.copy(I)},this.setScissor=function(T,W,q,U){T.isVector4?I.set(T.x,T.y,T.z,T.w):I.set(T,W,q,U),me.scissor(D.copy(I).multiplyScalar(O).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(T){me.setScissorTest(z=T)},this.setOpaqueSort=function(T){N=T},this.setTransparentSort=function(T){A=T},this.getClearColor=function(T){return T.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor.apply(Y,arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha.apply(Y,arguments)},this.clear=function(T=!0,W=!0,q=!0){let U=0;T&&(U|=16384),W&&(U|=256),q&&(U|=1024),k.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",ye,!1),e.removeEventListener("webglcontextcreationerror",_e,!1),qt.dispose(),Nt.dispose(),Ae.dispose(),Fe.dispose(),ht.dispose(),ut.dispose(),he.dispose(),K.dispose(),qe.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",ee),ge.removeEventListener("sessionend",ce),J&&(J.dispose(),J=null),fe.stop()};function be(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const T=Me.autoReset,W=E.enabled,q=E.autoUpdate,U=E.needsUpdate,$=E.type;we(),Me.autoReset=T,E.enabled=W,E.autoUpdate=q,E.needsUpdate=U,E.type=$}function _e(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ie(T){const W=T.target;W.removeEventListener("dispose",Ie),He(W)}function He(T){it(T),Ae.remove(T)}function it(T){const W=Ae.get(T).programs;W!==void 0&&(W.forEach(function(q){qe.releaseProgram(q)}),T.isShaderMaterial&&qe.releaseShaderCache(T))}this.renderBufferDirect=function(T,W,q,U,$,ve){W===null&&(W=Q);const Se=$.isMesh&&$.matrixWorld.determinant()<0,Te=sl(T,W,q,U,$);me.setMaterial(U,Se);let Ce=q.index,ze=1;U.wireframe===!0&&(Ce=xt.getWireframeAttribute(q),ze=2);const Re=q.drawRange,Pe=q.attributes.position;let Ye=Re.start*ze,wt=(Re.start+Re.count)*ze;ve!==null&&(Ye=Math.max(Ye,ve.start*ze),wt=Math.min(wt,(ve.start+ve.count)*ze)),Ce!==null?(Ye=Math.max(Ye,0),wt=Math.min(wt,Ce.count)):Pe!=null&&(Ye=Math.max(Ye,0),wt=Math.min(wt,Pe.count));const tn=wt-Ye;if(tn<0||tn===1/0)return;he.setup($,U,Te,q,Ce);let Tn,$e=ne;if(Ce!==null&&(Tn=Ft.get(Ce),$e=le,$e.setIndex(Tn)),$.isMesh)U.wireframe===!0?(me.setLineWidth(U.wireframeLinewidth*ie()),$e.setMode(1)):$e.setMode(4);else if($.isLine){let De=U.linewidth;De===void 0&&(De=1),me.setLineWidth(De*ie()),$.isLineSegments?$e.setMode(1):$.isLineLoop?$e.setMode(2):$e.setMode(3)}else $.isPoints?$e.setMode(0):$.isSprite&&$e.setMode(4);if($.isInstancedMesh)$e.renderInstances(Ye,tn,$.count);else if(q.isInstancedBufferGeometry){const De=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Rs=Math.min(q.instanceCount,De);$e.renderInstances(Ye,tn,Rs)}else $e.render(Ye,tn)},this.compile=function(T,W){function q(U,$,ve){U.transparent===!0&&U.side===wn&&U.forceSinglePass===!1?(U.side=Lt,U.needsUpdate=!0,Dt(U,$,ve),U.side=En,U.needsUpdate=!0,Dt(U,$,ve),U.side=wn):Dt(U,$,ve)}u=Nt.get(T),u.init(),g.push(u),T.traverseVisible(function(U){U.isLight&&U.layers.test(W.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),u.setupLights(p.useLegacyLights),T.traverse(function(U){const $=U.material;if($)if(Array.isArray($))for(let ve=0;ve<$.length;ve++){const Se=$[ve];q(Se,T,U)}else q($,T,U)}),g.pop(),u=null};let B=null;function j(T){B&&B(T)}function ee(){fe.stop()}function ce(){fe.start()}const fe=new Wa;fe.setAnimationLoop(j),typeof self<"u"&&fe.setContext(self),this.setAnimationLoop=function(T){B=T,ge.setAnimationLoop(T),T===null?fe.stop():fe.start()},ge.addEventListener("sessionstart",ee),ge.addEventListener("sessionend",ce),this.render=function(T,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(W),W=ge.getCamera()),T.isScene===!0&&T.onBeforeRender(p,T,W,M),u=Nt.get(T,g.length),u.init(),g.push(u),oe.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),H.setFromProjectionMatrix(oe),X=this.localClippingEnabled,V=R.init(this.clippingPlanes,X),d=qt.get(T,m.length),d.init(),m.push(d),Ue(T,W,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(N,A),V===!0&&R.beginShadows();const q=u.state.shadowsArray;if(E.render(q,T,W),V===!0&&R.endShadows(),this.info.autoReset===!0&&this.info.reset(),Y.render(d,T),u.setupLights(p.useLegacyLights),W.isArrayCamera){const U=W.cameras;for(let $=0,ve=U.length;$<ve;$++){const Se=U[$];st(d,T,Se,Se.viewport)}}else st(d,T,W);M!==null&&(Le.updateMultisampleRenderTarget(M),Le.updateRenderTargetMipmap(M)),T.isScene===!0&&T.onAfterRender(p,T,W),he.resetDefaultState(),w=-1,S=null,g.pop(),g.length>0?u=g[g.length-1]:u=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function Ue(T,W,q,U){if(T.visible===!1)return;if(T.layers.test(W.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(W);else if(T.isLight)u.pushLight(T),T.castShadow&&u.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||H.intersectsSprite(T)){U&&F.setFromMatrixPosition(T.matrixWorld).applyMatrix4(oe);const Se=ut.update(T),Te=T.material;Te.visible&&d.push(T,Se,Te,q,F.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Me.render.frame&&(T.skeleton.update(),T.skeleton.frame=Me.render.frame),!T.frustumCulled||H.intersectsObject(T))){U&&F.setFromMatrixPosition(T.matrixWorld).applyMatrix4(oe);const Se=ut.update(T),Te=T.material;if(Array.isArray(Te)){const Ce=Se.groups;for(let ze=0,Re=Ce.length;ze<Re;ze++){const Pe=Ce[ze],Ye=Te[Pe.materialIndex];Ye&&Ye.visible&&d.push(T,Se,Ye,q,F.z,Pe)}}else Te.visible&&d.push(T,Se,Te,q,F.z,null)}}const ve=T.children;for(let Se=0,Te=ve.length;Se<Te;Se++)Ue(ve[Se],W,q,U)}function st(T,W,q,U){const $=T.opaque,ve=T.transmissive,Se=T.transparent;u.setupLightsView(q),V===!0&&R.setGlobalState(p.clippingPlanes,q),ve.length>0&&dt($,W,q),U&&me.viewport(C.copy(U)),$.length>0&&Xt($,W,q),ve.length>0&&Xt(ve,W,q),Se.length>0&&Xt(Se,W,q),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function dt(T,W,q){const U=pe.isWebGL2;J===null&&(J=new Hn(1024,1024,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")?Gi:Vn,minFilter:Ui,samples:U&&s===!0?4:0}));const $=p.getRenderTarget();p.setRenderTarget(J),p.clear();const ve=p.toneMapping;p.toneMapping=pn,Xt(T,W,q),p.toneMapping=ve,Le.updateMultisampleRenderTarget(J),Le.updateRenderTargetMipmap(J),p.setRenderTarget($)}function Xt(T,W,q){const U=W.isScene===!0?W.overrideMaterial:null;for(let $=0,ve=T.length;$<ve;$++){const Se=T[$],Te=Se.object,Ce=Se.geometry,ze=U===null?Se.material:U,Re=Se.group;Te.layers.test(q.layers)&&Xe(Te,W,q,Ce,ze,Re)}}function Xe(T,W,q,U,$,ve){T.onBeforeRender(p,W,q,U,$,ve),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(p,W,q,U,T,ve),$.transparent===!0&&$.side===wn&&$.forceSinglePass===!1?($.side=Lt,$.needsUpdate=!0,p.renderBufferDirect(q,W,U,$,T,ve),$.side=En,$.needsUpdate=!0,p.renderBufferDirect(q,W,U,$,T,ve),$.side=wn):p.renderBufferDirect(q,W,U,$,T,ve),T.onAfterRender(p,W,q,U,$,ve)}function Dt(T,W,q){W.isScene!==!0&&(W=Q);const U=Ae.get(T),$=u.state.lights,ve=u.state.shadowsArray,Se=$.state.version,Te=qe.getParameters(T,$.state,ve,W,q),Ce=qe.getProgramCacheKey(Te);let ze=U.programs;U.environment=T.isMeshStandardMaterial?W.environment:null,U.fog=W.fog,U.envMap=(T.isMeshStandardMaterial?ht:Fe).get(T.envMap||U.environment),ze===void 0&&(T.addEventListener("dispose",Ie),ze=new Map,U.programs=ze);let Re=ze.get(Ce);if(Re!==void 0){if(U.currentProgram===Re&&U.lightsStateVersion===Se)return jt(T,Te),Re}else Te.uniforms=qe.getUniforms(T),T.onBuild(q,Te,p),T.onBeforeCompile(Te,p),Re=qe.acquireProgram(Te,Ce),ze.set(Ce,Re),U.uniforms=Te.uniforms;const Pe=U.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pe.clippingPlanes=R.uniform),jt(T,Te),U.needsLights=ol(T),U.lightsStateVersion=Se,U.needsLights&&(Pe.ambientLightColor.value=$.state.ambient,Pe.lightProbe.value=$.state.probe,Pe.directionalLights.value=$.state.directional,Pe.directionalLightShadows.value=$.state.directionalShadow,Pe.spotLights.value=$.state.spot,Pe.spotLightShadows.value=$.state.spotShadow,Pe.rectAreaLights.value=$.state.rectArea,Pe.ltc_1.value=$.state.rectAreaLTC1,Pe.ltc_2.value=$.state.rectAreaLTC2,Pe.pointLights.value=$.state.point,Pe.pointLightShadows.value=$.state.pointShadow,Pe.hemisphereLights.value=$.state.hemi,Pe.directionalShadowMap.value=$.state.directionalShadowMap,Pe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Pe.spotShadowMap.value=$.state.spotShadowMap,Pe.spotLightMatrix.value=$.state.spotLightMatrix,Pe.spotLightMap.value=$.state.spotLightMap,Pe.pointShadowMap.value=$.state.pointShadowMap,Pe.pointShadowMatrix.value=$.state.pointShadowMatrix);const Ye=Re.getUniforms(),wt=bs.seqWithValue(Ye.seq,Pe);return U.currentProgram=Re,U.uniformsList=wt,Re}function jt(T,W){const q=Ae.get(T);q.outputEncoding=W.outputEncoding,q.instancing=W.instancing,q.skinning=W.skinning,q.morphTargets=W.morphTargets,q.morphNormals=W.morphNormals,q.morphColors=W.morphColors,q.morphTargetsCount=W.morphTargetsCount,q.numClippingPlanes=W.numClippingPlanes,q.numIntersection=W.numClipIntersection,q.vertexAlphas=W.vertexAlphas,q.vertexTangents=W.vertexTangents,q.toneMapping=W.toneMapping}function sl(T,W,q,U,$){W.isScene!==!0&&(W=Q),Le.resetTextureUnits();const ve=W.fog,Se=U.isMeshStandardMaterial?W.environment:null,Te=M===null?p.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:Wn,Ce=(U.isMeshStandardMaterial?ht:Fe).get(U.envMap||Se),ze=U.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Re=!!U.normalMap&&!!q.attributes.tangent,Pe=!!q.morphAttributes.position,Ye=!!q.morphAttributes.normal,wt=!!q.morphAttributes.color,tn=U.toneMapped?p.toneMapping:pn,Tn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,$e=Tn!==void 0?Tn.length:0,De=Ae.get(U),Rs=u.state.lights;if(V===!0&&(X===!0||T!==S)){const bt=T===S&&U.id===w;R.setState(U,T,bt)}let rt=!1;U.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Rs.state.version||De.outputEncoding!==Te||$.isInstancedMesh&&De.instancing===!1||!$.isInstancedMesh&&De.instancing===!0||$.isSkinnedMesh&&De.skinning===!1||!$.isSkinnedMesh&&De.skinning===!0||De.envMap!==Ce||U.fog===!0&&De.fog!==ve||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==R.numPlanes||De.numIntersection!==R.numIntersection)||De.vertexAlphas!==ze||De.vertexTangents!==Re||De.morphTargets!==Pe||De.morphNormals!==Ye||De.morphColors!==wt||De.toneMapping!==tn||pe.isWebGL2===!0&&De.morphTargetsCount!==$e)&&(rt=!0):(rt=!0,De.__version=U.version);let An=De.currentProgram;rt===!0&&(An=Dt(U,W,$));let Nr=!1,Mi=!1,Ps=!1;const ft=An.getUniforms(),Cn=De.uniforms;if(me.useProgram(An.program)&&(Nr=!0,Mi=!0,Ps=!0),U.id!==w&&(w=U.id,Mi=!0),Nr||S!==T){if(ft.setValue(k,"projectionMatrix",T.projectionMatrix),pe.logarithmicDepthBuffer&&ft.setValue(k,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),S!==T&&(S=T,Mi=!0,Ps=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const bt=ft.map.cameraPosition;bt!==void 0&&bt.setValue(k,F.setFromMatrixPosition(T.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&ft.setValue(k,"isOrthographic",T.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||$.isSkinnedMesh)&&ft.setValue(k,"viewMatrix",T.matrixWorldInverse)}if($.isSkinnedMesh){ft.setOptional(k,$,"bindMatrix"),ft.setOptional(k,$,"bindMatrixInverse");const bt=$.skeleton;bt&&(pe.floatVertexTextures?(bt.boneTexture===null&&bt.computeBoneTexture(),ft.setValue(k,"boneTexture",bt.boneTexture,Le),ft.setValue(k,"boneTextureSize",bt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ds=q.morphAttributes;if((Ds.position!==void 0||Ds.normal!==void 0||Ds.color!==void 0&&pe.isWebGL2===!0)&&te.update($,q,An),(Mi||De.receiveShadow!==$.receiveShadow)&&(De.receiveShadow=$.receiveShadow,ft.setValue(k,"receiveShadow",$.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(Cn.envMap.value=Ce,Cn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Mi&&(ft.setValue(k,"toneMappingExposure",p.toneMappingExposure),De.needsLights&&rl(Cn,Ps),ve&&U.fog===!0&&We.refreshFogUniforms(Cn,ve),We.refreshMaterialUniforms(Cn,U,O,P,J),bs.upload(k,De.uniformsList,Cn,Le)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(bs.upload(k,De.uniformsList,Cn,Le),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&ft.setValue(k,"center",$.center),ft.setValue(k,"modelViewMatrix",$.modelViewMatrix),ft.setValue(k,"normalMatrix",$.normalMatrix),ft.setValue(k,"modelMatrix",$.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const bt=U.uniformsGroups;for(let Is=0,al=bt.length;Is<al;Is++)if(pe.isWebGL2){const Br=bt[Is];K.update(Br,An),K.bind(Br,An)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return An}function rl(T,W){T.ambientLightColor.needsUpdate=W,T.lightProbe.needsUpdate=W,T.directionalLights.needsUpdate=W,T.directionalLightShadows.needsUpdate=W,T.pointLights.needsUpdate=W,T.pointLightShadows.needsUpdate=W,T.spotLights.needsUpdate=W,T.spotLightShadows.needsUpdate=W,T.rectAreaLights.needsUpdate=W,T.hemisphereLights.needsUpdate=W}function ol(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(T,W,q){Ae.get(T.texture).__webglTexture=W,Ae.get(T.depthTexture).__webglTexture=q;const U=Ae.get(T);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=q===void 0,U.__autoAllocateDepthBuffer||de.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,W){const q=Ae.get(T);q.__webglFramebuffer=W,q.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(T,W=0,q=0){M=T,_=W,x=q;let U=!0,$=null,ve=!1,Se=!1;if(T){const Ce=Ae.get(T);Ce.__useDefaultFramebuffer!==void 0?(me.bindFramebuffer(36160,null),U=!1):Ce.__webglFramebuffer===void 0?Le.setupRenderTarget(T):Ce.__hasExternalTextures&&Le.rebindTextures(T,Ae.get(T.texture).__webglTexture,Ae.get(T.depthTexture).__webglTexture);const ze=T.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Se=!0);const Re=Ae.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?($=Re[W],ve=!0):pe.isWebGL2&&T.samples>0&&Le.useMultisampledRTT(T)===!1?$=Ae.get(T).__webglMultisampledFramebuffer:$=Re,C.copy(T.viewport),D.copy(T.scissor),v=T.scissorTest}else C.copy(L).multiplyScalar(O).floor(),D.copy(I).multiplyScalar(O).floor(),v=z;if(me.bindFramebuffer(36160,$)&&pe.drawBuffers&&U&&me.drawBuffers(T,$),me.viewport(C),me.scissor(D),me.setScissorTest(v),ve){const Ce=Ae.get(T.texture);k.framebufferTexture2D(36160,36064,34069+W,Ce.__webglTexture,q)}else if(Se){const Ce=Ae.get(T.texture),ze=W||0;k.framebufferTextureLayer(36160,36064,Ce.__webglTexture,q||0,ze)}w=-1},this.readRenderTargetPixels=function(T,W,q,U,$,ve,Se){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Ae.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Se!==void 0&&(Te=Te[Se]),Te){me.bindFramebuffer(36160,Te);try{const Ce=T.texture,ze=Ce.format,Re=Ce.type;if(ze!==Vt&&xe.convert(ze)!==k.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pe=Re===Gi&&(de.has("EXT_color_buffer_half_float")||pe.isWebGL2&&de.has("EXT_color_buffer_float"));if(Re!==Vn&&xe.convert(Re)!==k.getParameter(35738)&&!(Re===Gn&&(pe.isWebGL2||de.has("OES_texture_float")||de.has("WEBGL_color_buffer_float")))&&!Pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=T.width-U&&q>=0&&q<=T.height-$&&k.readPixels(W,q,U,$,xe.convert(ze),xe.convert(Re),ve)}finally{const Ce=M!==null?Ae.get(M).__webglFramebuffer:null;me.bindFramebuffer(36160,Ce)}}},this.copyFramebufferToTexture=function(T,W,q=0){const U=Math.pow(2,-q),$=Math.floor(W.image.width*U),ve=Math.floor(W.image.height*U);Le.setTexture2D(W,0),k.copyTexSubImage2D(3553,q,0,0,T.x,T.y,$,ve),me.unbindTexture()},this.copyTextureToTexture=function(T,W,q,U=0){const $=W.image.width,ve=W.image.height,Se=xe.convert(q.format),Te=xe.convert(q.type);Le.setTexture2D(q,0),k.pixelStorei(37440,q.flipY),k.pixelStorei(37441,q.premultiplyAlpha),k.pixelStorei(3317,q.unpackAlignment),W.isDataTexture?k.texSubImage2D(3553,U,T.x,T.y,$,ve,Se,Te,W.image.data):W.isCompressedTexture?k.compressedTexSubImage2D(3553,U,T.x,T.y,W.mipmaps[0].width,W.mipmaps[0].height,Se,W.mipmaps[0].data):k.texSubImage2D(3553,U,T.x,T.y,Se,Te,W.image),U===0&&q.generateMipmaps&&k.generateMipmap(3553),me.unbindTexture()},this.copyTextureToTexture3D=function(T,W,q,U,$=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=T.max.x-T.min.x+1,Se=T.max.y-T.min.y+1,Te=T.max.z-T.min.z+1,Ce=xe.convert(U.format),ze=xe.convert(U.type);let Re;if(U.isData3DTexture)Le.setTexture3D(U,0),Re=32879;else if(U.isDataArrayTexture)Le.setTexture2DArray(U,0),Re=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(37440,U.flipY),k.pixelStorei(37441,U.premultiplyAlpha),k.pixelStorei(3317,U.unpackAlignment);const Pe=k.getParameter(3314),Ye=k.getParameter(32878),wt=k.getParameter(3316),tn=k.getParameter(3315),Tn=k.getParameter(32877),$e=q.isCompressedTexture?q.mipmaps[0]:q.image;k.pixelStorei(3314,$e.width),k.pixelStorei(32878,$e.height),k.pixelStorei(3316,T.min.x),k.pixelStorei(3315,T.min.y),k.pixelStorei(32877,T.min.z),q.isDataTexture||q.isData3DTexture?k.texSubImage3D(Re,$,W.x,W.y,W.z,ve,Se,Te,Ce,ze,$e.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Re,$,W.x,W.y,W.z,ve,Se,Te,Ce,$e.data)):k.texSubImage3D(Re,$,W.x,W.y,W.z,ve,Se,Te,Ce,ze,$e),k.pixelStorei(3314,Pe),k.pixelStorei(32878,Ye),k.pixelStorei(3316,wt),k.pixelStorei(3315,tn),k.pixelStorei(32877,Tn),$===0&&U.generateMipmaps&&k.generateMipmap(Re),me.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Le.setTextureCube(T,0):T.isData3DTexture?Le.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Le.setTexture2DArray(T,0):Le.setTexture2D(T,0),me.unbindTexture()},this.resetState=function(){_=0,x=0,M=null,me.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(Pr.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(c){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!c}}});class dp extends Pr{}dp.prototype.isWebGL1Renderer=!0;class fp extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Dr extends Rt{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,r=0,a=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],d=[],u=[],m=[];let g=0;const p=[],f=n/2;let _=0;x(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new ct(d,3)),this.setAttribute("normal",new ct(u,3)),this.setAttribute("uv",new ct(m,2));function x(){const w=new G,S=new G;let C=0;const D=(t-e)/n;for(let v=0;v<=s;v++){const b=[],P=v/s,O=P*(t-e)+e;for(let N=0;N<=i;N++){const A=N/i,L=A*a+r,I=Math.sin(L),z=Math.cos(L);S.x=O*I,S.y=-P*n+f,S.z=O*z,d.push(S.x,S.y,S.z),w.set(I,D,z).normalize(),u.push(w.x,w.y,w.z),m.push(A,1-P),b.push(g++)}p.push(b)}for(let v=0;v<i;v++)for(let b=0;b<s;b++){const P=p[b][v],O=p[b+1][v],N=p[b+1][v+1],A=p[b][v+1];h.push(P,O,A),h.push(O,N,A),C+=6}l.addGroup(_,C,0),_+=C}function M(w){const S=g,C=new Be,D=new G;let v=0;const b=w===!0?e:t,P=w===!0?1:-1;for(let N=1;N<=i;N++)d.push(0,f*P,0),u.push(0,P,0),m.push(.5,.5),g++;const O=g;for(let N=0;N<=i;N++){const L=N/i*a+r,I=Math.cos(L),z=Math.sin(L);D.x=b*z,D.y=f*P,D.z=b*I,d.push(D.x,D.y,D.z),u.push(0,P,0),C.x=I*.5+.5,C.y=z*.5*P+.5,m.push(C.x,C.y),g++}for(let N=0;N<i;N++){const A=S+N,L=O+N;w===!0?h.push(L,L+1,A):h.push(L+1,L,A),v+=3}l.addGroup(_,v,w===!0?1:2),_+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wi extends Rt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:r},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const a=Math.min(o+r,Math.PI);let l=0;const h=[],d=new G,u=new G,m=[],g=[],p=[],f=[];for(let _=0;_<=n;_++){const x=[],M=_/n;let w=0;_==0&&o==0?w=.5/t:_==n&&a==Math.PI&&(w=-.5/t);for(let S=0;S<=t;S++){const C=S/t;d.x=-e*Math.cos(i+C*s)*Math.sin(o+M*r),d.y=e*Math.cos(o+M*r),d.z=e*Math.sin(i+C*s)*Math.sin(o+M*r),g.push(d.x,d.y,d.z),u.copy(d).normalize(),p.push(u.x,u.y,u.z),f.push(C+w,1-M),x.push(l++)}h.push(x)}for(let _=0;_<n;_++)for(let x=0;x<t;x++){const M=h[_][x+1],w=h[_][x],S=h[_+1][x],C=h[_+1][x+1];(_!==0||o>0)&&m.push(M,w,C),(_!==n-1||a<Math.PI)&&m.push(w,S,C)}this.setIndex(m),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(p,3)),this.setAttribute("uv",new ct(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class gs extends Yi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ra,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Jo={enabled:!1,files:{},add:function(c,e){this.enabled!==!1&&(this.files[c]=e)},get:function(c){if(this.enabled!==!1)return this.files[c]},remove:function(c){delete this.files[c]},clear:function(){this.files={}}};class pp{constructor(e,t,n){const i=this;let s=!1,o=0,r=0,a;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){r++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,r),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,r),o===r&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return a?a(h):h},this.setURLModifier=function(h){return a=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){const m=l[d],g=l[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}}const mp=new pp;class Ya{constructor(e){this.manager=e!==void 0?e:mp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class gp extends Ya{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Jo.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const r=Vi("img");function a(){h(),Jo.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(d){h(),i&&i(d),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){r.removeEventListener("load",a,!1),r.removeEventListener("error",l,!1)}return r.addEventListener("load",a,!1),r.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(r.crossOrigin=this.crossOrigin),s.manager.itemStart(e),r.src=e,r}}class _s extends Ya{constructor(e){super(e)}load(e,t,n,i){const s=new yt,o=new gp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(r){s.image=r,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class _p extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const dr=new Qe,Qo=new G,ea=new G;class xp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lr,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Qo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qo),ea.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ea),t.updateMatrixWorld(),dr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(dr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ta=new Qe,Li=new G,fr=new G;class vp extends xp{constructor(){super(new Ct(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Be(4,2),this._viewportCount=6,this._viewports=[new Ve(2,1,1,1),new Ve(0,1,1,1),new Ve(3,1,1,1),new Ve(1,1,1,1),new Ve(3,0,1,1),new Ve(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Li.setFromMatrixPosition(e.matrixWorld),n.position.copy(Li),fr.copy(n.position),fr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(fr),n.updateMatrixWorld(),i.makeTranslation(-Li.x,-Li.y,-Li.z),ta.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ta)}}class yp extends _p{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new vp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tr);function Mp(c,e=!1){const t=c[0].index!==null,n=new Set(Object.keys(c[0].attributes)),i=new Set(Object.keys(c[0].morphAttributes)),s={},o={},r=c[0].morphTargetsRelative,a=new Rt;let l=0;for(let h=0;h<c.length;++h){const d=c[h];let u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in d.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;s[m]===void 0&&(s[m]=[]),s[m].push(d.attributes[m]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(r!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in d.morphAttributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[m]===void 0&&(o[m]=[]),o[m].push(d.morphAttributes[m])}if(e){let m;if(t)m=d.index.count;else if(d.attributes.position!==void 0)m=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;a.addGroup(l,m,h),l+=m}}if(t){let h=0;const d=[];for(let u=0;u<c.length;++u){const m=c[u].index;for(let g=0;g<m.count;++g)d.push(m.getX(g)+h);h+=c[u].attributes.position.count}a.setIndex(d)}for(const h in s){const d=na(s[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+h+" attribute."),null;a.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d===0)break;a.morphAttributes=a.morphAttributes||{},a.morphAttributes[h]=[];for(let u=0;u<d;++u){const m=[];for(let p=0;p<o[h].length;++p)m.push(o[h][p][u]);const g=na(m);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+h+" morphAttribute."),null;a.morphAttributes[h].push(g)}}return a}function na(c){let e,t,n,i=0;for(let r=0;r<c.length;++r){const a=c[r];if(a.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=a.array.constructor),e!==a.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=a.itemSize),t!==a.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=a.normalized),n!==a.normalized)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;i+=a.array.length}const s=new e(i);let o=0;for(let r=0;r<c.length;++r)s.set(c[r].array,o),o+=c[r].array.length;return new Ht(s,t,n)}class Wt{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new y);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new y);const n=this.elements,i=e.x,s=e.y,o=e.z;return t.x=n[0]*i+n[1]*s+n[2]*o,t.y=n[3]*i+n[4]*s+n[5]*o,t.z=n[6]*i+n[7]*s+n[8]*o,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new Wt);const n=this.elements,i=e.elements,s=t.elements,o=n[0],r=n[1],a=n[2],l=n[3],h=n[4],d=n[5],u=n[6],m=n[7],g=n[8],p=i[0],f=i[1],_=i[2],x=i[3],M=i[4],w=i[5],S=i[6],C=i[7],D=i[8];return s[0]=o*p+r*x+a*S,s[1]=o*f+r*M+a*C,s[2]=o*_+r*w+a*D,s[3]=l*p+h*x+d*S,s[4]=l*f+h*M+d*C,s[5]=l*_+h*w+d*D,s[6]=u*p+m*x+g*S,s[7]=u*f+m*M+g*C,s[8]=u*_+m*w+g*D,t}scale(e,t){t===void 0&&(t=new Wt);const n=this.elements,i=t.elements;for(let s=0;s!==3;s++)i[3*s+0]=e.x*n[3*s+0],i[3*s+1]=e.y*n[3*s+1],i[3*s+2]=e.z*n[3*s+2];return t}solve(e,t){t===void 0&&(t=new y);const n=3,i=4,s=[];let o,r;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(r=0;r<3;r++)s[o+i*r]=this.elements[o+3*r];s[3+4*0]=e.x,s[3+4*1]=e.y,s[3+4*2]=e.z;let a=3;const l=a;let h;const d=4;let u;do{if(o=l-a,s[o+i*o]===0){for(r=o+1;r<l;r++)if(s[o+i*r]!==0){h=d;do u=d-h,s[u+i*o]+=s[u+i*r];while(--h);break}}if(s[o+i*o]!==0)for(r=o+1;r<l;r++){const m=s[o+i*r]/s[o+i*o];h=d;do u=d-h,s[u+i*r]=u<=o?0:s[u+i*r]-s[u+i*o]*m;while(--h)}}while(--a);if(t.z=s[2*i+3]/s[2*i+2],t.y=(s[1*i+3]-s[1*i+2]*t.z)/s[1*i+1],t.x=(s[0*i+3]-s[0*i+2]*t.z-s[0*i+1]*t.y)/s[0*i+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";const t=",";for(let n=0;n<9;n++)e+=this.elements[n]+t;return e}reverse(e){e===void 0&&(e=new Wt);const t=3,n=6,i=wp;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let r=3;const a=r;let l;const h=n;let d;do{if(s=a-r,i[s+n*s]===0){for(o=s+1;o<a;o++)if(i[s+n*o]!==0){l=h;do d=h-l,i[d+n*s]+=i[d+n*o];while(--l);break}}if(i[s+n*s]!==0)for(o=s+1;o<a;o++){const u=i[s+n*o]/i[s+n*s];l=h;do d=h-l,i[d+n*o]=d<=s?0:i[d+n*o]-i[d+n*s]*u;while(--l)}}while(--r);s=2;do{o=s-1;do{const u=i[s+n*o]/i[s+n*s];l=n;do d=n-l,i[d+n*o]=i[d+n*o]-i[d+n*s]*u;while(--l)}while(o--)}while(--s);s=2;do{const u=1/i[s+n*s];l=n;do d=n-l,i[d+n*s]=i[d+n*s]*u;while(--l)}while(s--);s=2;do{o=2;do{if(d=i[t+o+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(s,o,d)}while(o--)}while(s--);return e}setRotationFromQuaternion(e){const t=e.x,n=e.y,i=e.z,s=e.w,o=t+t,r=n+n,a=i+i,l=t*o,h=t*r,d=t*a,u=n*r,m=n*a,g=i*a,p=s*o,f=s*r,_=s*a,x=this.elements;return x[3*0+0]=1-(u+g),x[3*0+1]=h-_,x[3*0+2]=d+f,x[3*1+0]=h+_,x[3*1+1]=1-(l+g),x[3*1+2]=m-p,x[3*2+0]=d-f,x[3*2+1]=m+p,x[3*2+2]=1-(l+u),this}transpose(e){e===void 0&&(e=new Wt);const t=this.elements,n=e.elements;let i;return n[0]=t[0],n[4]=t[4],n[8]=t[8],i=t[1],n[1]=t[3],n[3]=i,i=t[2],n[2]=t[6],n[6]=i,i=t[5],n[5]=t[7],n[7]=i,e}}const wp=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class y{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new y);const n=e.x,i=e.y,s=e.z,o=this.x,r=this.y,a=this.z;return t.x=r*s-a*i,t.y=a*n-o*s,t.z=o*i-r*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new y(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new y(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new Wt([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,n=this.z,i=Math.sqrt(e*e+t*t+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(e){e===void 0&&(e=new y);const t=this.x,n=this.y,i=this.z;let s=Math.sqrt(t*t+n*n+i*i);return s>0?(s=1/s,e.x=t*s,e.y=n*s,e.z=i*s):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,r=e.z;return Math.sqrt((s-t)*(s-t)+(o-n)*(o-n)+(r-i)*(r-i))}distanceSquared(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,r=e.z;return(s-t)*(s-t)+(o-n)*(o-n)+(r-i)*(r-i)}scale(e,t){t===void 0&&(t=new y);const n=this.x,i=this.y,s=this.z;return t.x=e*n,t.y=e*i,t.z=e*s,t}vmul(e,t){return t===void 0&&(t=new y),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new y),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new y),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const n=this.length();if(n>0){const i=bp,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=Sp;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,e)):(o.set(0,1,0),i.cross(o,e)),i.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){const i=this.x,s=this.y,o=this.z;n.x=i+(e.x-i)*t,n.y=s+(e.y-s)*t,n.z=o+(e.z-o)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(ia),ia.almostEquals(e,t)}clone(){return new y(this.x,this.y,this.z)}}y.ZERO=new y(0,0,0);y.UNIT_X=new y(1,0,0);y.UNIT_Y=new y(0,1,0);y.UNIT_Z=new y(0,0,1);const bp=new y,Sp=new y,ia=new y;class Pt{constructor(e){e===void 0&&(e={}),this.lowerBound=new y,this.upperBound=new y,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,i){const s=this.lowerBound,o=this.upperBound,r=n;s.copy(e[0]),r&&r.vmult(s,s),o.copy(s);for(let a=1;a<e.length;a++){let l=e[a];r&&(r.vmult(l,sa),l=sa),l.x>o.x&&(o.x=l.x),l.x<s.x&&(s.x=l.x),l.y>o.y&&(o.y=l.y),l.y<s.y&&(s.y=l.y),l.z>o.z&&(o.z=l.z),l.z<s.z&&(s.z=l.z)}return t&&(t.vadd(s,s),t.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new Pt().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound,o=i.x<=n.x&&n.x<=s.x||t.x<=s.x&&s.x<=n.x,r=i.y<=n.y&&n.y<=s.y||t.y<=s.y&&s.y<=n.y,a=i.z<=n.z&&n.z<=s.z||t.z<=s.z&&s.z<=n.z;return o&&r&&a}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound;return t.x<=i.x&&n.x>=s.x&&t.y<=i.y&&n.y>=s.y&&t.z<=i.z&&n.z>=s.z}getCorners(e,t,n,i,s,o,r,a){const l=this.lowerBound,h=this.upperBound;e.copy(l),t.set(h.x,l.y,l.z),n.set(h.x,h.y,l.z),i.set(l.x,h.y,h.z),s.set(h.x,l.y,h.z),o.set(l.x,h.y,l.z),r.set(l.x,l.y,h.z),a.copy(h)}toLocalFrame(e,t){const n=ra,i=n[0],s=n[1],o=n[2],r=n[3],a=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,r,a,l,h,d);for(let u=0;u!==8;u++){const m=n[u];e.pointToLocal(m,m)}return t.setFromPoints(n)}toWorldFrame(e,t){const n=ra,i=n[0],s=n[1],o=n[2],r=n[3],a=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,r,a,l,h,d);for(let u=0;u!==8;u++){const m=n[u];e.pointToWorld(m,m)}return t.setFromPoints(n)}overlapsRay(e){const{direction:t,from:n}=e,i=1/t.x,s=1/t.y,o=1/t.z,r=(this.lowerBound.x-n.x)*i,a=(this.upperBound.x-n.x)*i,l=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,m=Math.max(Math.max(Math.min(r,a),Math.min(l,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(r,a),Math.max(l,h)),Math.max(d,u));return!(g<0||m>g)}}const sa=new y,ra=[new y,new y,new y,new y,new y,new y,new y,new y];class oa{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:i}=t;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(e,t,n){let{index:i}=e,{index:s}=t;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class $a{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const n=this._listeners;if(n[e]===void 0)return this;const i=n[e].indexOf(t);return i!==-1&&n[e].splice(i,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,e)}return this}}class je{constructor(e,t,n,i){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new y),this.normalize();const t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const n=Ep,i=Tp;e.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new je);const n=this.x,i=this.y,s=this.z,o=this.w,r=e.x,a=e.y,l=e.z,h=e.w;return t.x=n*h+o*r+i*l-s*a,t.y=i*h+o*a+s*r-n*l,t.z=s*h+o*l+n*a-i*r,t.w=o*h-n*r-i*a-s*l,t}inverse(e){e===void 0&&(e=new je);const t=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(e);const o=1/(t*t+n*n+i*i+s*s);return e.x*=o,e.y*=o,e.z*=o,e.w*=o,e}conjugate(e){return e===void 0&&(e=new je),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new y);const n=e.x,i=e.y,s=e.z,o=this.x,r=this.y,a=this.z,l=this.w,h=l*n+r*s-a*i,d=l*i+a*n-o*s,u=l*s+o*i-r*n,m=-o*n-r*i-a*s;return t.x=h*l+m*-o+d*-a-u*-r,t.y=d*l+m*-r+u*-o-h*-a,t.z=u*l+m*-a+h*-r-d*-o,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,i,s;const o=this.x,r=this.y,a=this.z,l=this.w;switch(t){case"YZX":const h=o*r+a*l;if(h>.499&&(n=2*Math.atan2(o,l),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(o,l),i=-Math.PI/2,s=0),n===void 0){const d=o*o,u=r*r,m=a*a;n=Math.atan2(2*r*l-2*o*a,1-2*u-2*m),i=Math.asin(2*h),s=Math.atan2(2*o*l-2*r*a,1-2*d-2*m)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=i,e.x=s}setFromEuler(e,t,n,i){i===void 0&&(i="XYZ");const s=Math.cos(e/2),o=Math.cos(t/2),r=Math.cos(n/2),a=Math.sin(e/2),l=Math.sin(t/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=a*o*r+s*l*h,this.y=s*l*r-a*o*h,this.z=s*o*h+a*l*r,this.w=s*o*r-a*l*h):i==="YXZ"?(this.x=a*o*r+s*l*h,this.y=s*l*r-a*o*h,this.z=s*o*h-a*l*r,this.w=s*o*r+a*l*h):i==="ZXY"?(this.x=a*o*r-s*l*h,this.y=s*l*r+a*o*h,this.z=s*o*h+a*l*r,this.w=s*o*r-a*l*h):i==="ZYX"?(this.x=a*o*r-s*l*h,this.y=s*l*r+a*o*h,this.z=s*o*h-a*l*r,this.w=s*o*r+a*l*h):i==="YZX"?(this.x=a*o*r+s*l*h,this.y=s*l*r+a*o*h,this.z=s*o*h-a*l*r,this.w=s*o*r-a*l*h):i==="XZY"&&(this.x=a*o*r-s*l*h,this.y=s*l*r-a*o*h,this.z=s*o*h+a*l*r,this.w=s*o*r+a*l*h),this}clone(){return new je(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new je);const i=this.x,s=this.y,o=this.z,r=this.w;let a=e.x,l=e.y,h=e.z,d=e.w,u,m,g,p,f;return m=i*a+s*l+o*h+r*d,m<0&&(m=-m,a=-a,l=-l,h=-h,d=-d),1-m>1e-6?(u=Math.acos(m),g=Math.sin(u),p=Math.sin((1-t)*u)/g,f=Math.sin(t*u)/g):(p=1-t,f=t),n.x=p*i+f*a,n.y=p*s+f*l,n.z=p*o+f*h,n.w=p*r+f*d,n}integrate(e,t,n,i){i===void 0&&(i=new je);const s=e.x*n.x,o=e.y*n.y,r=e.z*n.z,a=this.x,l=this.y,h=this.z,d=this.w,u=t*.5;return i.x+=u*(s*d+o*h-r*l),i.y+=u*(o*d+r*a-s*h),i.z+=u*(r*d+s*l-o*a),i.w+=u*(-s*a-o*l-r*h),i}}const Ep=new y,Tp=new y,Ap={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class re{constructor(e){e===void 0&&(e={}),this.id=re.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}re.idCounter=0;re.types=Ap;class Ne{constructor(e){e===void 0&&(e={}),this.position=new y,this.quaternion=new je,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return Ne.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return Ne.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new y),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,i){return i===void 0&&(i=new y),n.vsub(e,i),t.conjugate(aa),aa.vmult(i,i),i}static pointToWorldFrame(e,t,n,i){return i===void 0&&(i=new y),t.vmult(n,i),i.vadd(e,i),i}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new y),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,i){return i===void 0&&(i=new y),t.w*=-1,t.vmult(n,i),t.w*=-1,i}}const aa=new je;class Bi extends re{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=e;super({type:re.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;const i=new y;for(let s=0;s!==e.length;s++){const o=e[s],r=o.length;for(let a=0;a!==r;a++){const l=(a+1)%r;t[o[a]].vsub(t[o[l]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let i=0;i<this.faces[e].length;i++)if(!this.vertices[this.faces[e][i]])throw new Error(`Vertex ${this.faces[e][i]} not found!`);const t=this.faceNormals[e]||new y;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[e].length;i++)console.warn(`.vertices[${this.faces[e][i]}] = Vec3(${this.vertices[this.faces[e][i]].toString()})`)}}}getFaceNormal(e,t){const n=this.faces[e],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];Bi.computeNormal(i,s,o,t)}static computeNormal(e,t,n,i){const s=new y,o=new y;t.vsub(e,o),n.vsub(t,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(e,t,n,i,s,o,r,a,l){const h=new y;let d=-1,u=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),s.vmult(h,h);const p=h.dot(o);p>u&&(u=p,d=g)}const m=[];for(let g=0;g<n.faces[d].length;g++){const p=n.vertices[n.faces[d][g]],f=new y;f.copy(p),s.vmult(f,f),i.vadd(f,f),m.push(f)}d>=0&&this.clipFaceAgainstHull(o,e,t,m,r,a,l)}findSeparatingAxis(e,t,n,i,s,o,r,a){const l=new y,h=new y,d=new y,u=new y,m=new y,g=new y;let p=Number.MAX_VALUE;const f=this;if(f.uniqueAxes)for(let _=0;_!==f.uniqueAxes.length;_++){n.vmult(f.uniqueAxes[_],l);const x=f.testSepAxis(l,e,t,n,i,s);if(x===!1)return!1;x<p&&(p=x,o.copy(l))}else{const _=r?r.length:f.faces.length;for(let x=0;x<_;x++){const M=r?r[x]:x;l.copy(f.faceNormals[M]),n.vmult(l,l);const w=f.testSepAxis(l,e,t,n,i,s);if(w===!1)return!1;w<p&&(p=w,o.copy(l))}}if(e.uniqueAxes)for(let _=0;_!==e.uniqueAxes.length;_++){s.vmult(e.uniqueAxes[_],h);const x=f.testSepAxis(h,e,t,n,i,s);if(x===!1)return!1;x<p&&(p=x,o.copy(h))}else{const _=a?a.length:e.faces.length;for(let x=0;x<_;x++){const M=a?a[x]:x;h.copy(e.faceNormals[M]),s.vmult(h,h);const w=f.testSepAxis(h,e,t,n,i,s);if(w===!1)return!1;w<p&&(p=w,o.copy(h))}}for(let _=0;_!==f.uniqueEdges.length;_++){n.vmult(f.uniqueEdges[_],u);for(let x=0;x!==e.uniqueEdges.length;x++)if(s.vmult(e.uniqueEdges[x],m),u.cross(m,g),!g.almostZero()){g.normalize();const M=f.testSepAxis(g,e,t,n,i,s);if(M===!1)return!1;M<p&&(p=M,o.copy(g))}}return i.vsub(t,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(e,t,n,i,s,o){const r=this;Bi.project(r,e,n,i,pr),Bi.project(t,e,s,o,mr);const a=pr[0],l=pr[1],h=mr[0],d=mr[1];if(a<d||h<l)return!1;const u=a-d,m=h-l;return u<m?u:m}calculateLocalInertia(e,t){const n=new y,i=new y;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,r=n.z-i.z;t.x=1/12*e*(2*o*2*o+2*r*2*r),t.y=1/12*e*(2*s*2*s+2*r*2*r),t.z=1/12*e*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(e){const t=this.faces[e],n=this.faceNormals[e],i=this.vertices[t[0]];return-n.dot(i)}clipFaceAgainstHull(e,t,n,i,s,o,r){const a=new y,l=new y,h=new y,d=new y,u=new y,m=new y,g=new y,p=new y,f=this,_=[],x=i,M=_;let w=-1,S=Number.MAX_VALUE;for(let P=0;P<f.faces.length;P++){a.copy(f.faceNormals[P]),n.vmult(a,a);const O=a.dot(e);O<S&&(S=O,w=P)}if(w<0)return;const C=f.faces[w];C.connectedFaces=[];for(let P=0;P<f.faces.length;P++)for(let O=0;O<f.faces[P].length;O++)C.indexOf(f.faces[P][O])!==-1&&P!==w&&C.connectedFaces.indexOf(P)===-1&&C.connectedFaces.push(P);const D=C.length;for(let P=0;P<D;P++){const O=f.vertices[C[P]],N=f.vertices[C[(P+1)%D]];O.vsub(N,l),h.copy(l),n.vmult(h,h),t.vadd(h,h),d.copy(this.faceNormals[w]),n.vmult(d,d),t.vadd(d,d),h.cross(d,u),u.negate(u),m.copy(O),n.vmult(m,m),t.vadd(m,m);const A=C.connectedFaces[P];g.copy(this.faceNormals[A]);const L=this.getPlaneConstantOfFace(A);p.copy(g),n.vmult(p,p);const I=L-p.dot(t);for(this.clipFaceAgainstPlane(x,M,p,I);x.length;)x.shift();for(;M.length;)x.push(M.shift())}g.copy(this.faceNormals[w]);const v=this.getPlaneConstantOfFace(w);p.copy(g),n.vmult(p,p);const b=v-p.dot(t);for(let P=0;P<x.length;P++){let O=p.dot(x[P])+b;if(O<=s&&(console.log(`clamped: depth=${O} to minDist=${s}`),O=s),O<=o){const N=x[P];if(O<=1e-6){const A={point:N,normal:p,depth:O};r.push(A)}}}}clipFaceAgainstPlane(e,t,n,i){let s,o;const r=e.length;if(r<2)return t;let a=e[e.length-1],l=e[0];s=n.dot(a)+i;for(let h=0;h<r;h++){if(l=e[h],o=n.dot(l)+i,s<0)if(o<0){const d=new y;d.copy(l),t.push(d)}else{const d=new y;a.lerp(l,s/(s-o),d),t.push(d)}else if(o<0){const d=new y;a.lerp(l,s/(s-o),d),t.push(d),t.push(l)}a=l,s=o}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new y);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)t.vmult(n[s],i[s]),e.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<e.x?e.x=s.x:s.x>t.x&&(t.x=s.x),s.y<e.y?e.y=s.y:s.y>t.y&&(t.y=s.y),s.z<e.z?e.z=s.z:s.z>t.z&&(t.z=s.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new y);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==t;s++)e.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let n=0;n!==t.length;n++){const i=t[n].lengthSquared();i>e&&(e=i)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const s=this.vertices;let o,r,a,l,h,d,u=new y;for(let m=0;m<s.length;m++){u.copy(s[m]),t.vmult(u,u),e.vadd(u,u);const g=u;(o===void 0||g.x<o)&&(o=g.x),(l===void 0||g.x>l)&&(l=g.x),(r===void 0||g.y<r)&&(r=g.y),(h===void 0||g.y>h)&&(h=g.y),(a===void 0||g.z<a)&&(a=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(o,r,a),i.set(l,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new y);const t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const n=this.vertices.length,i=this.vertices;if(t){for(let s=0;s<n;s++){const o=i[s];t.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];t.vmult(o,o)}}if(e)for(let s=0;s<n;s++){const o=i[s];o.vadd(e,o)}}pointIsInside(e){const t=this.vertices,n=this.faces,i=this.faceNormals,s=null,o=new y;this.getAveragePointLocal(o);for(let r=0;r<this.faces.length;r++){let a=i[r];const l=t[n[r][0]],h=new y;e.vsub(l,h);const d=a.dot(h),u=new y;o.vsub(l,u);const m=a.dot(u);if(d<0&&m>0||d>0&&m<0)return!1}return s?1:-1}static project(e,t,n,i,s){const o=e.vertices.length,r=Cp;let a=0,l=0;const h=Lp,d=e.vertices;h.setZero(),Ne.vectorToLocalFrame(n,i,t,r),Ne.pointToLocalFrame(n,i,h,h);const u=h.dot(r);l=a=d[0].dot(r);for(let m=1;m<o;m++){const g=d[m].dot(r);g>a&&(a=g),g<l&&(l=g)}if(l-=u,a-=u,l>a){const m=l;l=a,a=m}s[0]=a,s[1]=l}}const pr=[],mr=[];new y;const Cp=new y,Lp=new y;class Hi extends re{constructor(e){super({type:re.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,i=y,s=[new i(-e,-t,-n),new i(e,-t,-n),new i(e,t,-n),new i(-e,t,-n),new i(-e,-t,n),new i(e,-t,n),new i(e,t,n),new i(-e,t,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],r=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],a=new Bi({vertices:s,faces:o,axes:r});this.convexPolyhedronRepresentation=a,a.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new y),Hi.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){const i=e;n.x=1/12*t*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*t*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*t*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(e,t){const n=e,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),t!==void 0)for(let s=0;s!==n.length;s++)t.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)yn.set(s[o][0],s[o][1],s[o][2]),t.vmult(yn,yn),e.vadd(yn,yn),n(yn.x,yn.y,yn.z)}calculateWorldAABB(e,t,n,i){const s=this.halfExtents;$t[0].set(s.x,s.y,s.z),$t[1].set(-s.x,s.y,s.z),$t[2].set(-s.x,-s.y,s.z),$t[3].set(-s.x,-s.y,-s.z),$t[4].set(s.x,-s.y,-s.z),$t[5].set(s.x,s.y,-s.z),$t[6].set(-s.x,s.y,-s.z),$t[7].set(s.x,-s.y,s.z);const o=$t[0];t.vmult(o,o),e.vadd(o,o),i.copy(o),n.copy(o);for(let r=1;r<8;r++){const a=$t[r];t.vmult(a,a),e.vadd(a,a);const l=a.x,h=a.y,d=a.z;l>i.x&&(i.x=l),h>i.y&&(i.y=h),d>i.z&&(i.z=d),l<n.x&&(n.x=l),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const yn=new y,$t=[new y,new y,new y,new y,new y,new y,new y,new y],Ir={DYNAMIC:1,STATIC:2,KINEMATIC:4},zr={AWAKE:0,SLEEPY:1,SLEEPING:2};class ae extends $a{constructor(e){e===void 0&&(e={}),super(),this.id=ae.idCounter++,this.index=-1,this.world=null,this.vlambda=new y,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new y,this.previousPosition=new y,this.interpolatedPosition=new y,this.initPosition=new y,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new y,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new y,this.force=new y;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?ae.STATIC:ae.DYNAMIC,typeof e.type==typeof ae.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=ae.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new y,this.quaternion=new je,this.initQuaternion=new je,this.previousQuaternion=new je,this.interpolatedQuaternion=new je,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new y,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new y,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new y,this.invInertia=new y,this.invInertiaWorld=new Wt,this.invMassSolve=0,this.invInertiaSolve=new y,this.invInertiaWorldSolve=new Wt,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new y(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new y(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new Pt,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new y,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=ae.AWAKE,this.wakeUpAfterNarrowphase=!1,e===ae.SLEEPING&&this.dispatchEvent(ae.wakeupEvent)}sleep(){this.sleepState=ae.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;t===ae.AWAKE&&n<i?(this.sleepState=ae.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(ae.sleepyEvent)):t===ae.SLEEPY&&n>i?this.wakeUp():t===ae.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(ae.sleepEvent))}}updateSolveMassProperties(){this.sleepState===ae.SLEEPING||this.type===ae.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new y),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new y),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new y),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new y),this.quaternion.vmult(e,t),t}addShape(e,t,n){const i=new y,s=new je;return t&&i.copy(t),n&&s.copy(n),this.shapes.push(e),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,n=e.length;let i=0;for(let s=0;s!==n;s++){const o=e[s];o.updateBoundingSphereRadius();const r=t[s].length(),a=o.boundingSphereRadius;r+a>i&&(i=r+a)}this.boundingRadius=i}updateAABB(){const e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,i=e.length,s=Rp,o=Pp,r=this.quaternion,a=this.aabb,l=Dp;for(let h=0;h!==i;h++){const d=e[h];r.vmult(t[h],s),s.vadd(this.position,s),r.mult(n[h],o),d.calculateWorldAABB(s,o,l.lowerBound,l.upperBound),h===0?a.copy(l):a.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const n=Ip,i=zp;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(t,n),n.mmult(i,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new y),this.type!==ae.DYNAMIC)return;this.sleepState===ae.SLEEPING&&this.wakeUp();const n=Np;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new y),this.type!==ae.DYNAMIC)return;const n=Bp,i=Op;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyForce(n,i)}applyTorque(e){this.type===ae.DYNAMIC&&(this.sleepState===ae.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new y),this.type!==ae.DYNAMIC)return;this.sleepState===ae.SLEEPING&&this.wakeUp();const n=t,i=Up;i.copy(e),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=Gp;n.cross(e,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new y),this.type!==ae.DYNAMIC)return;const n=kp,i=Vp;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyImpulse(n,i)}updateMassProperties(){const e=Wp;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Hi.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const n=new y;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===ae.DYNAMIC||this.type===ae.KINEMATIC)||this.sleepState===ae.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,r=this.force,a=this.torque,l=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,m=h*e;i.x+=r.x*m*u.x,i.y+=r.y*m*u.y,i.z+=r.z*m*u.z;const g=d.elements,p=this.angularFactor,f=a.x*p.x,_=a.y*p.y,x=a.z*p.z;s.x+=e*(g[0]*f+g[1]*_+g[2]*x),s.y+=e*(g[3]*f+g[4]*_+g[5]*x),s.z+=e*(g[6]*f+g[7]*_+g[8]*x),o.x+=i.x*e,o.y+=i.y*e,o.z+=i.z*e,l.integrate(this.angularVelocity,e,this.angularFactor,l),t&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}ae.idCounter=0;ae.COLLIDE_EVENT_NAME="collide";ae.DYNAMIC=Ir.DYNAMIC;ae.STATIC=Ir.STATIC;ae.KINEMATIC=Ir.KINEMATIC;ae.AWAKE=zr.AWAKE;ae.SLEEPY=zr.SLEEPY;ae.SLEEPING=zr.SLEEPING;ae.wakeupEvent={type:"wakeup"};ae.sleepyEvent={type:"sleepy"};ae.sleepEvent={type:"sleep"};const Rp=new y,Pp=new je,Dp=new Pt,Ip=new Wt,zp=new Wt,Fp=new Wt,Np=new y,Bp=new y,Op=new y,Up=new y,Gp=new y,kp=new y,Vp=new y,Wp=new y;class Za{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!(!(e.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&e.collisionFilterMask)||(e.type&ae.STATIC||e.sleepState===ae.SLEEPING)&&(t.type&ae.STATIC||t.sleepState===ae.SLEEPING))}intersectionTest(e,t,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,i):this.doBoundingSphereBroadphase(e,t,n,i)}doBoundingSphereBroadphase(e,t,n,i){const s=Hp;t.position.vsub(e.position,s);const o=(e.boundingRadius+t.boundingRadius)**2;s.lengthSquared()<o&&(n.push(e),i.push(t))}doBoundingBoxBroadphase(e,t,n,i){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),i.push(t))}makePairsUnique(e,t){const n=qp,i=Xp,s=jp,o=e.length;for(let r=0;r!==o;r++)i[r]=e[r],s[r]=t[r];e.length=0,t.length=0;for(let r=0;r!==o;r++){const a=i[r].id,l=s[r].id,h=a<l?`${a},${l}`:`${l},${a}`;n[h]=r,n.keys.push(h)}for(let r=0;r!==n.keys.length;r++){const a=n.keys.pop(),l=n[a];e.push(i[l]),t.push(s[l]),delete n[a]}}setWorld(e){}static boundingSphereCheck(e,t){const n=new y;e.position.vsub(t.position,n);const i=e.shapes[0],s=t.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Hp=new y;new y;new je;new y;const qp={keys:[]},Xp=[],jp=[];new y;new y;new y;class Yp extends Za{constructor(){super()}collisionPairs(e,t,n){const i=e.bodies,s=i.length;let o,r;for(let a=0;a!==s;a++)for(let l=0;l!==a;l++)o=i[a],r=i[l],this.needBroadphaseCollision(o,r)&&this.intersectionTest(o,r,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let i=0;i<e.bodies.length;i++){const s=e.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(t)&&n.push(s)}return n}}class Ss{constructor(){this.rayFromWorld=new y,this.rayToWorld=new y,this.hitNormalWorld=new y,this.hitPointWorld=new y,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,i,s,o,r){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=r}}let Ka,Ja,Qa,el,tl,nl,il;const Fr={CLOSEST:1,ANY:2,ALL:4};Ka=re.types.SPHERE;Ja=re.types.PLANE;Qa=re.types.BOX;el=re.types.CYLINDER;tl=re.types.CONVEXPOLYHEDRON;nl=re.types.HEIGHTFIELD;il=re.types.TRIMESH;class Ke{get[Ka](){return this._intersectSphere}get[Ja](){return this._intersectPlane}get[Qa](){return this._intersectBox}get[el](){return this._intersectConvex}get[tl](){return this._intersectConvex}get[nl](){return this._intersectHeightfield}get[il](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new y),t===void 0&&(t=new y),this.from=e.clone(),this.to=t.clone(),this.direction=new y,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Ke.ANY,this.result=new Ss,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||Ke.ANY,this.result=t.result||new Ss,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(la),gr.length=0,e.broadphase.aabbQuery(e,la,gr),this.intersectBodies(gr),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!e.collisionResponse||!(this.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&this.collisionFilterMask))return;const i=$p,s=Zp;for(let o=0,r=e.shapes.length;o<r;o++){const a=e.shapes[o];if(!(n&&!a.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[o],s),e.quaternion.vmult(e.shapeOffsets[o],i),i.vadd(e.position,i),this.intersectShape(a,s,i,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,i=e.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,i){const s=this.from;if(hm(s,this.direction,n)>e.boundingSphereRadius)return;const r=this[e.type];r&&r.call(this,e,t,n,i,e)}_intersectBox(e,t,n,i,s){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,i,s)}_intersectPlane(e,t,n,i,s){const o=this.from,r=this.to,a=this.direction,l=new y(0,0,1);t.vmult(l,l);const h=new y;o.vsub(n,h);const d=h.dot(l);r.vsub(n,h);const u=h.dot(l);if(d*u>0||o.distanceTo(r)<d)return;const m=l.dot(a);if(Math.abs(m)<this.precision)return;const g=new y,p=new y,f=new y;o.vsub(n,g);const _=-l.dot(g)/m;a.scale(_,p),o.vadd(p,f),this.reportIntersection(l,f,s,i,-1)}getAABB(e){const{lowerBound:t,upperBound:n}=e,i=this.to,s=this.from;t.x=Math.min(i.x,s.x),t.y=Math.min(i.y,s.y),t.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(e,t,n,i,s){e.data,e.elementSize;const o=Kp;o.from.copy(this.from),o.to.copy(this.to),Ne.pointToLocalFrame(n,t,o.from,o.from),Ne.pointToLocalFrame(n,t,o.to,o.to),o.updateDirection();const r=Jp;let a,l,h,d;a=l=0,h=d=e.data.length-1;const u=new Pt;o.getAABB(u),e.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,r,!0),a=Math.max(a,r[0]),l=Math.max(l,r[1]),e.getIndexOfPosition(u.upperBound.x,u.upperBound.y,r,!0),h=Math.min(h,r[0]+1),d=Math.min(d,r[1]+1);for(let m=a;m<h;m++)for(let g=l;g<d;g++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(m,g,u),!!u.overlapsRay(o)){if(e.getConvexTrianglePillar(m,g,!1),Ne.pointToWorldFrame(n,t,e.pillarOffset,xs),this._intersectConvex(e.pillarConvex,t,xs,i,s,ca),this.result.shouldStop)return;e.getConvexTrianglePillar(m,g,!0),Ne.pointToWorldFrame(n,t,e.pillarOffset,xs),this._intersectConvex(e.pillarConvex,t,xs,i,s,ca)}}}_intersectSphere(e,t,n,i,s){const o=this.from,r=this.to,a=e.radius,l=(r.x-o.x)**2+(r.y-o.y)**2+(r.z-o.z)**2,h=2*((r.x-o.x)*(o.x-n.x)+(r.y-o.y)*(o.y-n.y)+(r.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-a**2,u=h**2-4*l*d,m=Qp,g=em;if(!(u<0))if(u===0)o.lerp(r,u,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1);else{const p=(-h-Math.sqrt(u))/(2*l),f=(-h+Math.sqrt(u))/(2*l);if(p>=0&&p<=1&&(o.lerp(r,p,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1)),this.result.shouldStop)return;f>=0&&f<=1&&(o.lerp(r,f,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1))}}_intersectConvex(e,t,n,i,s,o){const r=tm,a=ha,l=o&&o.faceList||null,h=e.faces,d=e.vertices,u=e.faceNormals,m=this.direction,g=this.from,p=this.to,f=g.distanceTo(p),_=l?l.length:h.length,x=this.result;for(let M=0;!x.shouldStop&&M<_;M++){const w=l?l[M]:M,S=h[w],C=u[w],D=t,v=n;a.copy(d[S[0]]),D.vmult(a,a),a.vadd(v,a),a.vsub(g,a),D.vmult(C,r);const b=m.dot(r);if(Math.abs(b)<this.precision)continue;const P=r.dot(a)/b;if(!(P<0)){m.scale(P,vt),vt.vadd(g,vt),Gt.copy(d[S[0]]),D.vmult(Gt,Gt),v.vadd(Gt,Gt);for(let O=1;!x.shouldStop&&O<S.length-1;O++){Zt.copy(d[S[O]]),Kt.copy(d[S[O+1]]),D.vmult(Zt,Zt),D.vmult(Kt,Kt),v.vadd(Zt,Zt),v.vadd(Kt,Kt);const N=vt.distanceTo(g);!(Ke.pointInTriangle(vt,Gt,Zt,Kt)||Ke.pointInTriangle(vt,Zt,Gt,Kt))||N>f||this.reportIntersection(r,vt,s,i,w)}}}}_intersectTrimesh(e,t,n,i,s,o){const r=nm,a=lm,l=cm,h=ha,d=im,u=sm,m=rm,g=am,p=om,f=e.indices;e.vertices;const _=this.from,x=this.to,M=this.direction;l.position.copy(n),l.quaternion.copy(t),Ne.vectorToLocalFrame(n,t,M,d),Ne.pointToLocalFrame(n,t,_,u),Ne.pointToLocalFrame(n,t,x,m),m.x*=e.scale.x,m.y*=e.scale.y,m.z*=e.scale.z,u.x*=e.scale.x,u.y*=e.scale.y,u.z*=e.scale.z,m.vsub(u,d),d.normalize();const w=u.distanceSquared(m);e.tree.rayQuery(this,l,a);for(let S=0,C=a.length;!this.result.shouldStop&&S!==C;S++){const D=a[S];e.getNormal(D,r),e.getVertex(f[D*3],Gt),Gt.vsub(u,h);const v=d.dot(r),b=r.dot(h)/v;if(b<0)continue;d.scale(b,vt),vt.vadd(u,vt),e.getVertex(f[D*3+1],Zt),e.getVertex(f[D*3+2],Kt);const P=vt.distanceSquared(u);!(Ke.pointInTriangle(vt,Zt,Gt,Kt)||Ke.pointInTriangle(vt,Gt,Zt,Kt))||P>w||(Ne.vectorToWorldFrame(t,r,p),Ne.pointToWorldFrame(n,t,vt,g),this.reportIntersection(p,g,s,i,D))}a.length=0}reportIntersection(e,t,n,i,s){const o=this.from,r=this.to,a=o.distanceTo(t),l=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(l.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case Ke.ALL:this.hasHit=!0,l.set(o,r,e,t,n,i,a),l.hasHit=!0,this.callback(l);break;case Ke.CLOSEST:(a<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(o,r,e,t,n,i,a));break;case Ke.ANY:this.hasHit=!0,l.hasHit=!0,l.set(o,r,e,t,n,i,a),l.shouldStop=!0;break}}static pointInTriangle(e,t,n,i){i.vsub(t,On),n.vsub(t,Ri),e.vsub(t,_r);const s=On.dot(On),o=On.dot(Ri),r=On.dot(_r),a=Ri.dot(Ri),l=Ri.dot(_r);let h,d;return(h=a*r-o*l)>=0&&(d=s*l-o*r)>=0&&h+d<s*a-o*o}}Ke.CLOSEST=Fr.CLOSEST;Ke.ANY=Fr.ANY;Ke.ALL=Fr.ALL;const la=new Pt,gr=[],Ri=new y,_r=new y,$p=new y,Zp=new je,vt=new y,Gt=new y,Zt=new y,Kt=new y;new y;new Ss;const ca={faceList:[0]},xs=new y,Kp=new Ke,Jp=[],Qp=new y,em=new y,tm=new y;new y;new y;const ha=new y,nm=new y,im=new y,sm=new y,rm=new y,om=new y,am=new y;new Pt;const lm=[],cm=new Ne,On=new y,vs=new y;function hm(c,e,t){t.vsub(c,On);const n=On.dot(e);return e.scale(n,vs),vs.vadd(c,vs),t.distanceTo(vs)}class hi extends Za{static checkBounds(e,t,n){let i,s;n===0?(i=e.position.x,s=t.position.x):n===1?(i=e.position.y,s=t.position.y):n===2&&(i=e.position.z,s=t.position.z);const o=e.boundingRadius,r=t.boundingRadius,a=i+o;return s-r<a}static insertionSortX(e){for(let t=1,n=e.length;t<n;t++){const i=e[t];let s;for(s=t-1;s>=0&&!(e[s].aabb.lowerBound.x<=i.aabb.lowerBound.x);s--)e[s+1]=e[s];e[s+1]=i}return e}static insertionSortY(e){for(let t=1,n=e.length;t<n;t++){const i=e[t];let s;for(s=t-1;s>=0&&!(e[s].aabb.lowerBound.y<=i.aabb.lowerBound.y);s--)e[s+1]=e[s];e[s+1]=i}return e}static insertionSortZ(e){for(let t=1,n=e.length;t<n;t++){const i=e[t];let s;for(s=t-1;s>=0&&!(e[s].aabb.lowerBound.z<=i.aabb.lowerBound.z);s--)e[s+1]=e[s];e[s+1]=i}return e}constructor(e){super(),this.axisList=[],this.world=null,this.axisIndex=0;const t=this.axisList;this._addBodyHandler=n=>{t.push(n.body)},this._removeBodyHandler=n=>{const i=t.indexOf(n.body);i!==-1&&t.splice(i,1)},e&&this.setWorld(e)}setWorld(e){this.axisList.length=0;for(let t=0;t<e.bodies.length;t++)this.axisList.push(e.bodies[t]);e.removeEventListener("addBody",this._addBodyHandler),e.removeEventListener("removeBody",this._removeBodyHandler),e.addEventListener("addBody",this._addBodyHandler),e.addEventListener("removeBody",this._removeBodyHandler),this.world=e,this.dirty=!0}collisionPairs(e,t,n){const i=this.axisList,s=i.length,o=this.axisIndex;let r,a;for(this.dirty&&(this.sortList(),this.dirty=!1),r=0;r!==s;r++){const l=i[r];for(a=r+1;a<s;a++){const h=i[a];if(this.needBroadphaseCollision(l,h)){if(!hi.checkBounds(l,h,o))break;this.intersectionTest(l,h,t,n)}}}}sortList(){const e=this.axisList,t=this.axisIndex,n=e.length;for(let i=0;i!==n;i++){const s=e[i];s.aabbNeedsUpdate&&s.updateAABB()}t===0?hi.insertionSortX(e):t===1?hi.insertionSortY(e):t===2&&hi.insertionSortZ(e)}autoDetectAxis(){let e=0,t=0,n=0,i=0,s=0,o=0;const r=this.axisList,a=r.length,l=1/a;for(let m=0;m!==a;m++){const g=r[m],p=g.position.x;e+=p,t+=p*p;const f=g.position.y;n+=f,i+=f*f;const _=g.position.z;s+=_,o+=_*_}const h=t-e*e*l,d=i-n*n*l,u=o-s*s*l;h>d?h>u?this.axisIndex=0:this.axisIndex=2:d>u?this.axisIndex=1:this.axisIndex=2}aabbQuery(e,t,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);const i=this.axisIndex;let s="x";i===1&&(s="y"),i===2&&(s="z");const o=this.axisList;t.lowerBound[s],t.upperBound[s];for(let r=0;r<o.length;r++){const a=o[r];a.aabbNeedsUpdate&&a.updateAABB(),a.aabb.overlaps(t)&&n.push(a)}return n}}class um{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}}class ua{constructor(){this.spatial=new y,this.rotational=new y}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class $i{constructor(e,t,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=$i.idCounter++,this.minForce=n,this.maxForce=i,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new ua,this.jacobianElementB=new ua,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){const i=t,s=e,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(e,t,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*e-i*t-o*n}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return e.spatial.dot(s)+t.spatial.dot(o)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,r=n.angularVelocity,a=i.angularVelocity;return e.multiplyVectors(s,r)+t.multiplyVectors(o,a)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,r=n.wlambda,a=i.wlambda;return e.multiplyVectors(s,r)+t.multiplyVectors(o,a)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,r=i.force,a=i.torque,l=n.invMassSolve,h=i.invMassSolve;return s.scale(l,da),r.scale(h,fa),n.invInertiaWorldSolve.vmult(o,pa),i.invInertiaWorldSolve.vmult(a,ma),e.multiplyVectors(da,pa)+t.multiplyVectors(fa,ma)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,r=n.invInertiaWorldSolve,a=i.invInertiaWorldSolve;let l=s+o;return r.vmult(e.rotational,ys),l+=ys.dot(e.rotational),a.vmult(t.rotational,ys),l+=ys.dot(t.rotational),l}addToWlambda(e){const t=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=dm;i.vlambda.addScaledVector(i.invMassSolve*e,t.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*e,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(t.rotational,o),i.wlambda.addScaledVector(e,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(e,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}$i.idCounter=0;const da=new y,fa=new y,pa=new y,ma=new y,ys=new y,dm=new y;class fm extends $i{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new y,this.rj=new y,this.ni=new y}computeB(e){const t=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,r=this.rj,a=pm,l=mm,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=s.velocity,m=s.angularVelocity;s.force,s.torque;const g=gm,p=this.jacobianElementA,f=this.jacobianElementB,_=this.ni;o.cross(_,a),r.cross(_,l),_.negate(p.spatial),a.negate(p.rotational),f.spatial.copy(_),f.rotational.copy(l),g.copy(s.position),g.vadd(r,g),g.vsub(i.position,g),g.vsub(o,g);const x=_.dot(g),M=this.restitution+1,w=M*u.dot(_)-M*h.dot(_)+m.dot(l)-d.dot(a),S=this.computeGiMf();return-x*t-w*n-e*S}getImpactVelocityAlongNormal(){const e=_m,t=xm,n=vm,i=ym,s=Mm;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(i,t),e.vsub(t,s),this.ni.dot(s)}}const pm=new y,mm=new y,gm=new y,_m=new y,xm=new y,vm=new y,ym=new y,Mm=new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;class ga extends $i{constructor(e,t,n){super(e,t,-n,n),this.ri=new y,this.rj=new y,this.t=new y}computeB(e){this.a;const t=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=wm,o=bm,r=this.t;n.cross(r,s),i.cross(r,o);const a=this.jacobianElementA,l=this.jacobianElementB;r.negate(a.spatial),s.negate(a.rotational),l.spatial.copy(r),l.rotational.copy(o);const h=this.computeGW(),d=this.computeGiMf();return-h*t-e*d}}const wm=new y,bm=new y;class Cs{constructor(e,t,n){n=um.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Cs.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Cs.idCounter=0;class Ls{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=Ls.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}Ls.idCounter=0;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new Ke;new y;new y;new y;new y(1,0,0),new y(0,1,0),new y(0,0,1);new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;class Sm extends re{constructor(e){if(super({type:re.types.SPHERE}),this.radius=e!==void 0?e:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(e,t){t===void 0&&(t=new y);const n=2*e*this.radius*this.radius/5;return t.x=n,t.y=n,t.z=n,t}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(e,t,n,i){const s=this.radius,o=["x","y","z"];for(let r=0;r<o.length;r++){const a=o[r];n[a]=e[a]-s,i[a]=e[a]+s}}}new y;new y;new y;new y;new y;new y;new y;new y;new y;class Em extends re{constructor(){super({type:re.types.PLANE}),this.worldNormal=new y,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(e){const t=this.worldNormal;t.set(0,0,1),e.vmult(t,t),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(e,t){return t===void 0&&(t=new y),t}volume(){return Number.MAX_VALUE}calculateWorldAABB(e,t,n,i){ln.set(0,0,1),t.vmult(ln,ln);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),ln.x===1?i.x=e.x:ln.x===-1&&(n.x=e.x),ln.y===1?i.y=e.y:ln.y===-1&&(n.y=e.y),ln.z===1?i.z=e.z:ln.z===-1&&(n.z=e.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const ln=new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new Pt;new y;new Pt;new y;new y;new y;new y;new y;new y;new y;new Pt;new y;new Ne;new Pt;class Tm{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}}class Am extends Tm{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,r=o.length,a=t.bodies,l=a.length,h=e;let d,u,m,g,p,f;if(r!==0)for(let w=0;w!==l;w++)a[w].updateSolveMassProperties();const _=Lm,x=Rm,M=Cm;_.length=r,x.length=r,M.length=r;for(let w=0;w!==r;w++){const S=o[w];M[w]=0,x[w]=S.computeB(h),_[w]=1/S.computeC()}if(r!==0){for(let C=0;C!==l;C++){const D=a[C],v=D.vlambda,b=D.wlambda;v.set(0,0,0),b.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let C=0;C!==r;C++){const D=o[C];d=x[C],u=_[C],f=M[C],p=D.computeGWlambda(),m=u*(d-p-D.eps*f),f+m<D.minForce?m=D.minForce-f:f+m>D.maxForce&&(m=D.maxForce-f),M[C]+=m,g+=m>0?m:-m,D.addToWlambda(m)}if(g*g<s)break}for(let C=0;C!==l;C++){const D=a[C],v=D.velocity,b=D.angularVelocity;D.vlambda.vmul(D.linearFactor,D.vlambda),v.vadd(D.vlambda,v),D.wlambda.vmul(D.angularFactor,D.wlambda),b.vadd(D.wlambda,b)}let w=o.length;const S=1/h;for(;w--;)o[w].multiplier=M[w]*S}return n}}const Cm=[],Lm=[],Rm=[];ae.STATIC;class Pm{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class Dm extends Pm{constructor(){super(...arguments),this.type=y}constructObject(){return new y}}const Ge={sphereSphere:re.types.SPHERE,spherePlane:re.types.SPHERE|re.types.PLANE,boxBox:re.types.BOX|re.types.BOX,sphereBox:re.types.SPHERE|re.types.BOX,planeBox:re.types.PLANE|re.types.BOX,convexConvex:re.types.CONVEXPOLYHEDRON,sphereConvex:re.types.SPHERE|re.types.CONVEXPOLYHEDRON,planeConvex:re.types.PLANE|re.types.CONVEXPOLYHEDRON,boxConvex:re.types.BOX|re.types.CONVEXPOLYHEDRON,sphereHeightfield:re.types.SPHERE|re.types.HEIGHTFIELD,boxHeightfield:re.types.BOX|re.types.HEIGHTFIELD,convexHeightfield:re.types.CONVEXPOLYHEDRON|re.types.HEIGHTFIELD,sphereParticle:re.types.PARTICLE|re.types.SPHERE,planeParticle:re.types.PLANE|re.types.PARTICLE,boxParticle:re.types.BOX|re.types.PARTICLE,convexParticle:re.types.PARTICLE|re.types.CONVEXPOLYHEDRON,cylinderCylinder:re.types.CYLINDER,sphereCylinder:re.types.SPHERE|re.types.CYLINDER,planeCylinder:re.types.PLANE|re.types.CYLINDER,boxCylinder:re.types.BOX|re.types.CYLINDER,convexCylinder:re.types.CONVEXPOLYHEDRON|re.types.CYLINDER,heightfieldCylinder:re.types.HEIGHTFIELD|re.types.CYLINDER,particleCylinder:re.types.PARTICLE|re.types.CYLINDER,sphereTrimesh:re.types.SPHERE|re.types.TRIMESH,planeTrimesh:re.types.PLANE|re.types.TRIMESH};class Im{get[Ge.sphereSphere](){return this.sphereSphere}get[Ge.spherePlane](){return this.spherePlane}get[Ge.boxBox](){return this.boxBox}get[Ge.sphereBox](){return this.sphereBox}get[Ge.planeBox](){return this.planeBox}get[Ge.convexConvex](){return this.convexConvex}get[Ge.sphereConvex](){return this.sphereConvex}get[Ge.planeConvex](){return this.planeConvex}get[Ge.boxConvex](){return this.boxConvex}get[Ge.sphereHeightfield](){return this.sphereHeightfield}get[Ge.boxHeightfield](){return this.boxHeightfield}get[Ge.convexHeightfield](){return this.convexHeightfield}get[Ge.sphereParticle](){return this.sphereParticle}get[Ge.planeParticle](){return this.planeParticle}get[Ge.boxParticle](){return this.boxParticle}get[Ge.convexParticle](){return this.convexParticle}get[Ge.cylinderCylinder](){return this.convexConvex}get[Ge.sphereCylinder](){return this.sphereConvex}get[Ge.planeCylinder](){return this.planeConvex}get[Ge.boxCylinder](){return this.boxConvex}get[Ge.convexCylinder](){return this.convexConvex}get[Ge.heightfieldCylinder](){return this.heightfieldCylinder}get[Ge.particleCylinder](){return this.particleCylinder}get[Ge.sphereTrimesh](){return this.sphereTrimesh}get[Ge.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Dm,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,i,s,o){let r;this.contactPointPool.length?(r=this.contactPointPool.pop(),r.bi=e,r.bj=t):r=new fm(e,t),r.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&i.collisionResponse;const a=this.currentContactMaterial;r.restitution=a.restitution,r.setSpookParams(a.contactEquationStiffness,a.contactEquationRelaxation,this.world.dt);const l=n.material||e.material,h=i.material||t.material;return l&&h&&l.restitution>=0&&h.restitution>=0&&(r.restitution=l.restitution*h.restitution),r.si=s||n,r.sj=o||i,r}createFrictionEquationsFromContact(e,t){const n=e.bi,i=e.bj,s=e.si,o=e.sj,r=this.world,a=this.currentContactMaterial;let l=a.friction;const h=s.material||n.material,d=o.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(l=h.friction*d.friction),l>0){const u=l*(r.frictionGravity||r.gravity).length();let m=n.invMass+i.invMass;m>0&&(m=1/m);const g=this.frictionEquationPool,p=g.length?g.pop():new ga(n,i,u*m),f=g.length?g.pop():new ga(n,i,u*m);return p.bi=f.bi=n,p.bj=f.bj=i,p.minForce=f.minForce=-u*m,p.maxForce=f.maxForce=u*m,p.ri.copy(e.ri),p.rj.copy(e.rj),f.ri.copy(e.ri),f.rj.copy(e.rj),e.ni.tangents(p.t,f.t),p.setSpookParams(a.frictionEquationStiffness,a.frictionEquationRelaxation,r.dt),f.setSpookParams(a.frictionEquationStiffness,a.frictionEquationRelaxation,r.dt),p.enabled=f.enabled=e.enabled,t.push(p,f),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Dn.setZero(),ri.setZero(),oi.setZero();const s=t.bi;t.bj;for(let r=0;r!==e;r++)t=this.result[this.result.length-1-r],t.bi!==s?(Dn.vadd(t.ni,Dn),ri.vadd(t.ri,ri),oi.vadd(t.rj,oi)):(Dn.vsub(t.ni,Dn),ri.vadd(t.rj,ri),oi.vadd(t.ri,oi));const o=1/e;ri.scale(o,n.ri),oi.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Dn.normalize(),Dn.tangents(n.t,i.t)}getContacts(e,t,n,i,s,o,r){this.contactPointPool=s,this.frictionEquationPool=r,this.result=i,this.frictionResult=o;const a=Nm,l=Bm,h=zm,d=Fm;for(let u=0,m=e.length;u!==m;u++){const g=e[u],p=t[u];let f=null;g.material&&p.material&&(f=n.getContactMaterial(g.material,p.material)||null);const _=g.type&ae.KINEMATIC&&p.type&ae.STATIC||g.type&ae.STATIC&&p.type&ae.KINEMATIC||g.type&ae.KINEMATIC&&p.type&ae.KINEMATIC;for(let x=0;x<g.shapes.length;x++){g.quaternion.mult(g.shapeOrientations[x],a),g.quaternion.vmult(g.shapeOffsets[x],h),h.vadd(g.position,h);const M=g.shapes[x];for(let w=0;w<p.shapes.length;w++){p.quaternion.mult(p.shapeOrientations[w],l),p.quaternion.vmult(p.shapeOffsets[w],d),d.vadd(p.position,d);const S=p.shapes[w];if(!(M.collisionFilterMask&S.collisionFilterGroup&&S.collisionFilterMask&M.collisionFilterGroup)||h.distanceTo(d)>M.boundingSphereRadius+S.boundingSphereRadius)continue;let C=null;M.material&&S.material&&(C=n.getContactMaterial(M.material,S.material)||null),this.currentContactMaterial=C||f||n.defaultContactMaterial;const D=M.type|S.type,v=this[D];if(v){let b=!1;M.type<S.type?b=v.call(this,M,S,h,d,a,l,g,p,M,S,_):b=v.call(this,S,M,d,h,l,a,p,g,M,S,_),b&&_&&(n.shapeOverlapKeeper.set(M.id,S.id),n.bodyOverlapKeeper.set(g.id,p.id))}}}}}sphereSphere(e,t,n,i,s,o,r,a,l,h,d){if(d)return n.distanceSquared(i)<(e.radius+t.radius)**2;const u=this.createContactEquation(r,a,e,t,l,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(e.radius,u.ri),u.rj.scale(-t.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(r.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(a.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(e,t,n,i,s,o,r,a,l,h,d){const u=this.createContactEquation(r,a,e,t,l,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(e.radius,u.ri),n.vsub(i,Ms),u.ni.scale(u.ni.dot(Ms),_a),Ms.vsub(_a,u.rj),-Ms.dot(u.ni)<=e.radius){if(d)return!0;const m=u.ri,g=u.rj;m.vadd(n,m),m.vsub(r.position,m),g.vadd(i,g),g.vsub(a.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(e,t,n,i,s,o,r,a,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,i,s,o,r,a,e,t,d)}sphereBox(e,t,n,i,s,o,r,a,l,h,d){const u=this.v3pool,m=cg;n.vsub(i,ws),t.getSideNormals(m,o);const g=e.radius;let p=!1;const f=ug,_=dg,x=fg;let M=null,w=0,S=0,C=0,D=null;for(let z=0,H=m.length;z!==H&&p===!1;z++){const V=og;V.copy(m[z]);const X=V.length();V.normalize();const J=ws.dot(V);if(J<X+g&&J>0){const oe=ag,F=lg;oe.copy(m[(z+1)%3]),F.copy(m[(z+2)%3]);const Q=oe.length(),ie=F.length();oe.normalize(),F.normalize();const k=ws.dot(oe),ue=ws.dot(F);if(k<Q&&k>-Q&&ue<ie&&ue>-ie){const de=Math.abs(J-X-g);if((D===null||de<D)&&(D=de,S=k,C=ue,M=X,f.copy(V),_.copy(oe),x.copy(F),w++,d))return!0}}}if(w){p=!0;const z=this.createContactEquation(r,a,e,t,l,h);f.scale(-g,z.ri),z.ni.copy(f),z.ni.negate(z.ni),f.scale(M,f),_.scale(S,_),f.vadd(_,f),x.scale(C,x),f.vadd(x,z.rj),z.ri.vadd(n,z.ri),z.ri.vsub(r.position,z.ri),z.rj.vadd(i,z.rj),z.rj.vsub(a.position,z.rj),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}let v=u.get();const b=hg;for(let z=0;z!==2&&!p;z++)for(let H=0;H!==2&&!p;H++)for(let V=0;V!==2&&!p;V++)if(v.set(0,0,0),z?v.vadd(m[0],v):v.vsub(m[0],v),H?v.vadd(m[1],v):v.vsub(m[1],v),V?v.vadd(m[2],v):v.vsub(m[2],v),i.vadd(v,b),b.vsub(n,b),b.lengthSquared()<g*g){if(d)return!0;p=!0;const X=this.createContactEquation(r,a,e,t,l,h);X.ri.copy(b),X.ri.normalize(),X.ni.copy(X.ri),X.ri.scale(g,X.ri),X.rj.copy(v),X.ri.vadd(n,X.ri),X.ri.vsub(r.position,X.ri),X.rj.vadd(i,X.rj),X.rj.vsub(a.position,X.rj),this.result.push(X),this.createFrictionEquationsFromContact(X,this.frictionResult)}u.release(v),v=null;const P=u.get(),O=u.get(),N=u.get(),A=u.get(),L=u.get(),I=m.length;for(let z=0;z!==I&&!p;z++)for(let H=0;H!==I&&!p;H++)if(z%3!==H%3){m[H].cross(m[z],P),P.normalize(),m[z].vadd(m[H],O),N.copy(n),N.vsub(O,N),N.vsub(i,N);const V=N.dot(P);P.scale(V,A);let X=0;for(;X===z%3||X===H%3;)X++;L.copy(n),L.vsub(A,L),L.vsub(O,L),L.vsub(i,L);const J=Math.abs(V),oe=L.length();if(J<m[X].length()&&oe<g){if(d)return!0;p=!0;const F=this.createContactEquation(r,a,e,t,l,h);O.vadd(A,F.rj),F.rj.copy(F.rj),L.negate(F.ni),F.ni.normalize(),F.ri.copy(F.rj),F.ri.vadd(i,F.ri),F.ri.vsub(n,F.ri),F.ri.normalize(),F.ri.scale(g,F.ri),F.ri.vadd(n,F.ri),F.ri.vsub(r.position,F.ri),F.rj.vadd(i,F.rj),F.rj.vsub(a.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}}u.release(P,O,N,A,L)}planeBox(e,t,n,i,s,o,r,a,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,i,s,o,r,a,e,t,d)}convexConvex(e,t,n,i,s,o,r,a,l,h,d,u,m){const g=Cg;if(!(n.distanceTo(i)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,s,i,o,g,u,m)){const p=[],f=Lg;e.clipAgainstHull(n,s,t,i,o,g,-100,100,p);let _=0;for(let x=0;x!==p.length;x++){if(d)return!0;const M=this.createContactEquation(r,a,e,t,l,h),w=M.ri,S=M.rj;g.negate(M.ni),p[x].normal.negate(f),f.scale(p[x].depth,f),p[x].point.vadd(f,w),S.copy(p[x].point),w.vsub(n,w),S.vsub(i,S),w.vadd(n,w),w.vsub(r.position,w),S.vadd(i,S),S.vsub(a.position,S),this.result.push(M),_++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(M,this.frictionResult)}this.enableFrictionReduction&&_&&this.createFrictionFromAverage(_)}}sphereConvex(e,t,n,i,s,o,r,a,l,h,d){const u=this.v3pool;n.vsub(i,pg);const m=t.faceNormals,g=t.faces,p=t.vertices,f=e.radius;let _=!1;for(let x=0;x!==p.length;x++){const M=p[x],w=xg;o.vmult(M,w),i.vadd(w,w);const S=_g;if(w.vsub(n,S),S.lengthSquared()<f*f){if(d)return!0;_=!0;const C=this.createContactEquation(r,a,e,t,l,h);C.ri.copy(S),C.ri.normalize(),C.ni.copy(C.ri),C.ri.scale(f,C.ri),w.vsub(i,C.rj),C.ri.vadd(n,C.ri),C.ri.vsub(r.position,C.ri),C.rj.vadd(i,C.rj),C.rj.vsub(a.position,C.rj),this.result.push(C),this.createFrictionEquationsFromContact(C,this.frictionResult);return}}for(let x=0,M=g.length;x!==M&&_===!1;x++){const w=m[x],S=g[x],C=vg;o.vmult(w,C);const D=yg;o.vmult(p[S[0]],D),D.vadd(i,D);const v=Mg;C.scale(-f,v),n.vadd(v,v);const b=wg;v.vsub(D,b);const P=b.dot(C),O=bg;if(n.vsub(D,O),P<0&&O.dot(C)>0){const N=[];for(let A=0,L=S.length;A!==L;A++){const I=u.get();o.vmult(p[S[A]],I),i.vadd(I,I),N.push(I)}if(rg(N,C,n)){if(d)return!0;_=!0;const A=this.createContactEquation(r,a,e,t,l,h);C.scale(-f,A.ri),C.negate(A.ni);const L=u.get();C.scale(-P,L);const I=u.get();C.scale(-f,I),n.vsub(i,A.rj),A.rj.vadd(I,A.rj),A.rj.vadd(L,A.rj),A.rj.vadd(i,A.rj),A.rj.vsub(a.position,A.rj),A.ri.vadd(n,A.ri),A.ri.vsub(r.position,A.ri),u.release(L),u.release(I),this.result.push(A),this.createFrictionEquationsFromContact(A,this.frictionResult);for(let z=0,H=N.length;z!==H;z++)u.release(N[z]);return}else for(let A=0;A!==S.length;A++){const L=u.get(),I=u.get();o.vmult(p[S[(A+1)%S.length]],L),o.vmult(p[S[(A+2)%S.length]],I),i.vadd(L,L),i.vadd(I,I);const z=mg;I.vsub(L,z);const H=gg;z.unit(H);const V=u.get(),X=u.get();n.vsub(L,X);const J=X.dot(H);H.scale(J,V),V.vadd(L,V);const oe=u.get();if(V.vsub(n,oe),J>0&&J*J<z.lengthSquared()&&oe.lengthSquared()<f*f){if(d)return!0;const F=this.createContactEquation(r,a,e,t,l,h);V.vsub(i,F.rj),V.vsub(n,F.ni),F.ni.normalize(),F.ni.scale(f,F.ri),F.rj.vadd(i,F.rj),F.rj.vsub(a.position,F.rj),F.ri.vadd(n,F.ri),F.ri.vsub(r.position,F.ri),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult);for(let Q=0,ie=N.length;Q!==ie;Q++)u.release(N[Q]);u.release(L),u.release(I),u.release(V),u.release(oe),u.release(X);return}u.release(L),u.release(I),u.release(V),u.release(oe),u.release(X)}for(let A=0,L=N.length;A!==L;A++)u.release(N[A])}}}planeConvex(e,t,n,i,s,o,r,a,l,h,d){const u=Sg,m=Eg;m.set(0,0,1),s.vmult(m,m);let g=0;const p=Tg;for(let f=0;f!==t.vertices.length;f++)if(u.copy(t.vertices[f]),o.vmult(u,u),i.vadd(u,u),u.vsub(n,p),m.dot(p)<=0){if(d)return!0;const x=this.createContactEquation(r,a,e,t,l,h),M=Ag;m.scale(m.dot(p),M),u.vsub(M,M),M.vsub(n,x.ri),x.ni.copy(m),u.vsub(i,x.rj),x.ri.vadd(n,x.ri),x.ri.vsub(r.position,x.ri),x.rj.vadd(i,x.rj),x.rj.vsub(a.position,x.rj),this.result.push(x),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(e,t,n,i,s,o,r,a,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,i,s,o,r,a,e,t,d)}sphereHeightfield(e,t,n,i,s,o,r,a,l,h,d){const u=t.data,m=e.radius,g=t.elementSize,p=kg,f=Gg;Ne.pointToLocalFrame(i,o,n,f);let _=Math.floor((f.x-m)/g)-1,x=Math.ceil((f.x+m)/g)+1,M=Math.floor((f.y-m)/g)-1,w=Math.ceil((f.y+m)/g)+1;if(x<0||w<0||_>u.length||M>u[0].length)return;_<0&&(_=0),x<0&&(x=0),M<0&&(M=0),w<0&&(w=0),_>=u.length&&(_=u.length-1),x>=u.length&&(x=u.length-1),w>=u[0].length&&(w=u[0].length-1),M>=u[0].length&&(M=u[0].length-1);const S=[];t.getRectMinMax(_,M,x,w,S);const C=S[0],D=S[1];if(f.z-m>D||f.z+m<C)return;const v=this.result;for(let b=_;b<x;b++)for(let P=M;P<w;P++){const O=v.length;let N=!1;if(t.getConvexTrianglePillar(b,P,!1),Ne.pointToWorldFrame(i,o,t.pillarOffset,p),n.distanceTo(p)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(N=this.sphereConvex(e,t.pillarConvex,n,p,s,o,r,a,e,t,d)),d&&N||(t.getConvexTrianglePillar(b,P,!0),Ne.pointToWorldFrame(i,o,t.pillarOffset,p),n.distanceTo(p)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(N=this.sphereConvex(e,t.pillarConvex,n,p,s,o,r,a,e,t,d)),d&&N))return!0;if(v.length-O>2)return}}boxHeightfield(e,t,n,i,s,o,r,a,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,i,s,o,r,a,e,t,d)}convexHeightfield(e,t,n,i,s,o,r,a,l,h,d){const u=t.data,m=t.elementSize,g=e.boundingSphereRadius,p=Og,f=Ug,_=Bg;Ne.pointToLocalFrame(i,o,n,_);let x=Math.floor((_.x-g)/m)-1,M=Math.ceil((_.x+g)/m)+1,w=Math.floor((_.y-g)/m)-1,S=Math.ceil((_.y+g)/m)+1;if(M<0||S<0||x>u.length||w>u[0].length)return;x<0&&(x=0),M<0&&(M=0),w<0&&(w=0),S<0&&(S=0),x>=u.length&&(x=u.length-1),M>=u.length&&(M=u.length-1),S>=u[0].length&&(S=u[0].length-1),w>=u[0].length&&(w=u[0].length-1);const C=[];t.getRectMinMax(x,w,M,S,C);const D=C[0],v=C[1];if(!(_.z-g>v||_.z+g<D))for(let b=x;b<M;b++)for(let P=w;P<S;P++){let O=!1;if(t.getConvexTrianglePillar(b,P,!1),Ne.pointToWorldFrame(i,o,t.pillarOffset,p),n.distanceTo(p)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(O=this.convexConvex(e,t.pillarConvex,n,p,s,o,r,a,null,null,d,f,null)),d&&O||(t.getConvexTrianglePillar(b,P,!0),Ne.pointToWorldFrame(i,o,t.pillarOffset,p),n.distanceTo(p)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(O=this.convexConvex(e,t.pillarConvex,n,p,s,o,r,a,null,null,d,f,null)),d&&O))return!0}}sphereParticle(e,t,n,i,s,o,r,a,l,h,d){const u=Ig;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=e.radius*e.radius){if(d)return!0;const g=this.createContactEquation(a,r,t,e,l,h);u.normalize(),g.rj.copy(u),g.rj.scale(e.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(e,t,n,i,s,o,r,a,l,h,d){const u=Rg;u.set(0,0,1),r.quaternion.vmult(u,u);const m=Pg;if(i.vsub(r.position,m),u.dot(m)<=0){if(d)return!0;const p=this.createContactEquation(a,r,t,e,l,h);p.ni.copy(u),p.ni.negate(p.ni),p.ri.set(0,0,0);const f=Dg;u.scale(u.dot(i),f),i.vsub(f,f),p.rj.copy(f),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}}boxParticle(e,t,n,i,s,o,r,a,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,i,s,o,r,a,e,t,d)}convexParticle(e,t,n,i,s,o,r,a,l,h,d){let u=-1;const m=Fg,g=Ng;let p=null;const f=zg;if(f.copy(i),f.vsub(n,f),s.conjugate(xa),xa.vmult(f,f),e.pointIsInside(f)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,s),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(s);for(let _=0,x=e.faces.length;_!==x;_++){const M=[e.worldVertices[e.faces[_][0]]],w=e.worldFaceNormals[_];i.vsub(M[0],va);const S=-w.dot(va);if(p===null||Math.abs(S)<Math.abs(p)){if(d)return!0;p=S,u=_,m.copy(w)}}if(u!==-1){const _=this.createContactEquation(a,r,t,e,l,h);m.scale(p,g),g.vadd(i,g),g.vsub(n,g),_.rj.copy(g),m.negate(_.ni),_.ri.set(0,0,0);const x=_.ri,M=_.rj;x.vadd(i,x),x.vsub(a.position,x),M.vadd(n,M),M.vsub(r.position,M),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,i,s,o,r,a,l,h,d){return this.convexHeightfield(t,e,i,n,o,s,a,r,l,h,d)}particleCylinder(e,t,n,i,s,o,r,a,l,h,d){return this.convexParticle(t,e,i,n,o,s,a,r,l,h,d)}sphereTrimesh(e,t,n,i,s,o,r,a,l,h,d){const u=qm,m=Xm,g=jm,p=Ym,f=$m,_=Zm,x=eg,M=Hm,w=Vm,S=tg;Ne.pointToLocalFrame(i,o,n,f);const C=e.radius;x.lowerBound.set(f.x-C,f.y-C,f.z-C),x.upperBound.set(f.x+C,f.y+C,f.z+C),t.getTrianglesInAABB(x,S);const D=Wm,v=e.radius*e.radius;for(let A=0;A<S.length;A++)for(let L=0;L<3;L++)if(t.getVertex(t.indices[S[A]*3+L],D),D.vsub(f,w),w.lengthSquared()<=v){if(M.copy(D),Ne.pointToWorldFrame(i,o,M,D),D.vsub(n,w),d)return!0;let I=this.createContactEquation(r,a,e,t,l,h);I.ni.copy(w),I.ni.normalize(),I.ri.copy(I.ni),I.ri.scale(e.radius,I.ri),I.ri.vadd(n,I.ri),I.ri.vsub(r.position,I.ri),I.rj.copy(D),I.rj.vsub(a.position,I.rj),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}for(let A=0;A<S.length;A++)for(let L=0;L<3;L++){t.getVertex(t.indices[S[A]*3+L],u),t.getVertex(t.indices[S[A]*3+(L+1)%3],m),m.vsub(u,g),f.vsub(m,_);const I=_.dot(g);f.vsub(u,_);let z=_.dot(g);if(z>0&&I<0&&(f.vsub(u,_),p.copy(g),p.normalize(),z=_.dot(p),p.scale(z,_),_.vadd(u,_),_.distanceTo(f)<e.radius)){if(d)return!0;const V=this.createContactEquation(r,a,e,t,l,h);_.vsub(f,V.ni),V.ni.normalize(),V.ni.scale(e.radius,V.ri),V.ri.vadd(n,V.ri),V.ri.vsub(r.position,V.ri),Ne.pointToWorldFrame(i,o,_,_),_.vsub(a.position,V.rj),Ne.vectorToWorldFrame(o,V.ni,V.ni),Ne.vectorToWorldFrame(o,V.ri,V.ri),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}}const b=Km,P=Jm,O=Qm,N=km;for(let A=0,L=S.length;A!==L;A++){t.getTriangleVertices(S[A],b,P,O),t.getNormal(S[A],N),f.vsub(b,_);let I=_.dot(N);if(N.scale(I,_),f.vsub(_,_),I=_.distanceTo(f),Ke.pointInTriangle(_,b,P,O)&&I<e.radius){if(d)return!0;let z=this.createContactEquation(r,a,e,t,l,h);_.vsub(f,z.ni),z.ni.normalize(),z.ni.scale(e.radius,z.ri),z.ri.vadd(n,z.ri),z.ri.vsub(r.position,z.ri),Ne.pointToWorldFrame(i,o,_,_),_.vsub(a.position,z.rj),Ne.vectorToWorldFrame(o,z.ni,z.ni),Ne.vectorToWorldFrame(o,z.ri,z.ri),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}}S.length=0}planeTrimesh(e,t,n,i,s,o,r,a,l,h,d){const u=new y,m=Om;m.set(0,0,1),s.vmult(m,m);for(let g=0;g<t.vertices.length/3;g++){t.getVertex(g,u);const p=new y;p.copy(u),Ne.pointToWorldFrame(i,o,p,u);const f=Um;if(u.vsub(n,f),m.dot(f)<=0){if(d)return!0;const x=this.createContactEquation(r,a,e,t,l,h);x.ni.copy(m);const M=Gm;m.scale(f.dot(m),M),u.vsub(M,M),x.ri.copy(M),x.ri.vsub(r.position,x.ri),x.rj.copy(u),x.rj.vsub(a.position,x.rj),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}}}const Dn=new y,ri=new y,oi=new y,zm=new y,Fm=new y,Nm=new je,Bm=new je,Om=new y,Um=new y,Gm=new y,km=new y,Vm=new y;new y;const Wm=new y,Hm=new y,qm=new y,Xm=new y,jm=new y,Ym=new y,$m=new y,Zm=new y,Km=new y,Jm=new y,Qm=new y,eg=new Pt,tg=[],Ms=new y,_a=new y,ng=new y,ig=new y,sg=new y;function rg(c,e,t){let n=null;const i=c.length;for(let s=0;s!==i;s++){const o=c[s],r=ng;c[(s+1)%i].vsub(o,r);const a=ig;r.cross(e,a);const l=sg;t.vsub(o,l);const h=a.dot(l);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const ws=new y,og=new y,ag=new y,lg=new y,cg=[new y,new y,new y,new y,new y,new y],hg=new y,ug=new y,dg=new y,fg=new y,pg=new y,mg=new y,gg=new y,_g=new y,xg=new y,vg=new y,yg=new y,Mg=new y,wg=new y,bg=new y;new y;new y;const Sg=new y,Eg=new y,Tg=new y,Ag=new y,Cg=new y,Lg=new y,Rg=new y,Pg=new y,Dg=new y,Ig=new y,xa=new je,zg=new y;new y;const Fg=new y,va=new y,Ng=new y,Bg=new y,Og=new y,Ug=[0],Gg=new y,kg=new y;class ya{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const n=t;t=e,e=n}return e<<16|t}set(e,t){const n=this.getKey(e,t),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const n=this.current,i=this.previous,s=n.length,o=i.length;let r=0;for(let a=0;a<s;a++){let l=!1;const h=n[a];for(;h>i[r];)r++;l=h===i[r],l||Ma(e,h)}r=0;for(let a=0;a<o;a++){let l=!1;const h=i[a];for(;h>n[r];)r++;l=n[r]===h,l||Ma(t,h)}}}function Ma(c,e){c.push((e&4294901760)>>16,e&65535)}const xr=(c,e)=>c<e?`${c}-${e}`:`${e}-${c}`;class Vg{constructor(){this.data={keys:[]}}get(e,t){const n=xr(e,t);return this.data[n]}set(e,t,n){const i=xr(e,t);this.get(e,t)||this.data.keys.push(i),this.data[i]=n}delete(e,t){const n=xr(e,t),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const n=t.pop();delete e[n]}}}class Wg extends $a{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new y,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new y,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new Yp,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new Am,this.constraints=[],this.narrowphase=new Im(this),this.collisionMatrix=new oa,this.collisionMatrixPrevious=new oa,this.bodyOverlapKeeper=new ya,this.shapeOverlapKeeper=new ya,this.contactmaterials=[],this.contactMaterialTable=new Vg,this.defaultMaterial=new Ls("default"),this.defaultContactMaterial=new Cs(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof Ss?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,i){return n===void 0&&(n={}),n.mode=Ke.ALL,n.from=e,n.to=t,n.callback=i,vr.intersectWorld(this,n)}raycastAny(e,t,n,i){return n===void 0&&(n={}),n.mode=Ke.ANY,n.from=e,n.to=t,n.result=i,vr.intersectWorld(this,n)}raycastClosest(e,t,n,i){return n===void 0&&(n={}),n.mode=Ke.CLOSEST,n.from=e,n.to=t,n.result=i,vr.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof ae&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,n=this.bodies,i=n.indexOf(e);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let n=0;n<t.length;n++){const i=t[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===e)return o}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const n=et.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const i=n-this.lastCallTime;this.step(e,i,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const i=et.now();let s=0;for(;this.accumulator>=e&&s<n&&(this.internalStep(e),this.accumulator-=e,s++,!(et.now()-i>e*1e3)););this.accumulator=this.accumulator%e;const o=this.accumulator/e;for(let r=0;r!==this.bodies.length;r++){const a=this.bodies[r];a.previousPosition.lerp(a.position,o,a.interpolatedPosition),a.previousQuaternion.slerp(a.quaternion,o,a.interpolatedQuaternion),a.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,n=Yg,i=$g,s=this.bodies.length,o=this.bodies,r=this.solver,a=this.gravity,l=this.doProfiling,h=this.profile,d=ae.DYNAMIC;let u=-1/0;const m=this.constraints,g=jg;a.length();const p=a.x,f=a.y,_=a.z;let x=0;for(l&&(u=et.now()),x=0;x!==s;x++){const A=o[x];if(A.type===d){const L=A.force,I=A.mass;L.x+=I*p,L.y+=I*f,L.z+=I*_}}for(let A=0,L=this.subsystems.length;A!==L;A++)this.subsystems[A].update();l&&(u=et.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),l&&(h.broadphase=et.now()-u);let M=m.length;for(x=0;x!==M;x++){const A=m[x];if(!A.collideConnected)for(let L=n.length-1;L>=0;L-=1)(A.bodyA===n[L]&&A.bodyB===i[L]||A.bodyB===n[L]&&A.bodyA===i[L])&&(n.splice(L,1),i.splice(L,1))}this.collisionMatrixTick(),l&&(u=et.now());const w=Xg,S=t.length;for(x=0;x!==S;x++)w.push(t[x]);t.length=0;const C=this.frictionEquations.length;for(x=0;x!==C;x++)g.push(this.frictionEquations[x]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,t,w,this.frictionEquations,g),l&&(h.narrowphase=et.now()-u),l&&(u=et.now()),x=0;x<this.frictionEquations.length;x++)r.addEquation(this.frictionEquations[x]);const D=t.length;for(let A=0;A!==D;A++){const L=t[A],I=L.bi,z=L.bj,H=L.si,V=L.sj;let X;if(I.material&&z.material?X=this.getContactMaterial(I.material,z.material)||this.defaultContactMaterial:X=this.defaultContactMaterial,X.friction,I.material&&z.material&&(I.material.friction>=0&&z.material.friction>=0&&I.material.friction*z.material.friction,I.material.restitution>=0&&z.material.restitution>=0&&(L.restitution=I.material.restitution*z.material.restitution)),r.addEquation(L),I.allowSleep&&I.type===ae.DYNAMIC&&I.sleepState===ae.SLEEPING&&z.sleepState===ae.AWAKE&&z.type!==ae.STATIC){const J=z.velocity.lengthSquared()+z.angularVelocity.lengthSquared(),oe=z.sleepSpeedLimit**2;J>=oe*2&&(I.wakeUpAfterNarrowphase=!0)}if(z.allowSleep&&z.type===ae.DYNAMIC&&z.sleepState===ae.SLEEPING&&I.sleepState===ae.AWAKE&&I.type!==ae.STATIC){const J=I.velocity.lengthSquared()+I.angularVelocity.lengthSquared(),oe=I.sleepSpeedLimit**2;J>=oe*2&&(z.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(I,z,!0),this.collisionMatrixPrevious.get(I,z)||(Pi.body=z,Pi.contact=L,I.dispatchEvent(Pi),Pi.body=I,z.dispatchEvent(Pi)),this.bodyOverlapKeeper.set(I.id,z.id),this.shapeOverlapKeeper.set(H.id,V.id)}for(this.emitContactEvents(),l&&(h.makeContactConstraints=et.now()-u,u=et.now()),x=0;x!==s;x++){const A=o[x];A.wakeUpAfterNarrowphase&&(A.wakeUp(),A.wakeUpAfterNarrowphase=!1)}for(M=m.length,x=0;x!==M;x++){const A=m[x];A.update();for(let L=0,I=A.equations.length;L!==I;L++){const z=A.equations[L];r.addEquation(z)}}r.solve(e,this),l&&(h.solve=et.now()-u),r.removeAllEquations();const v=Math.pow;for(x=0;x!==s;x++){const A=o[x];if(A.type&d){const L=v(1-A.linearDamping,e),I=A.velocity;I.scale(L,I);const z=A.angularVelocity;if(z){const H=v(1-A.angularDamping,e);z.scale(H,z)}}}this.dispatchEvent(qg),l&&(u=et.now());const P=this.stepnumber%(this.quatNormalizeSkip+1)===0,O=this.quatNormalizeFast;for(x=0;x!==s;x++)o[x].integrate(e,P,O);this.clearForces(),this.broadphase.dirty=!0,l&&(h.integrate=et.now()-u),this.stepnumber+=1,this.dispatchEvent(Hg);let N=!0;if(this.allowSleep)for(N=!1,x=0;x!==s;x++){const A=o[x];A.sleepTick(this.time),A.sleepState!==ae.SLEEPING&&(N=!0)}this.hasActiveBodies=N}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(cn,hn),e){for(let s=0,o=cn.length;s<o;s+=2)Di.bodyA=this.getBodyById(cn[s]),Di.bodyB=this.getBodyById(cn[s+1]),this.dispatchEvent(Di);Di.bodyA=Di.bodyB=null}if(t){for(let s=0,o=hn.length;s<o;s+=2)Ii.bodyA=this.getBodyById(hn[s]),Ii.bodyB=this.getBodyById(hn[s+1]),this.dispatchEvent(Ii);Ii.bodyA=Ii.bodyB=null}cn.length=hn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(cn,hn),n){for(let s=0,o=cn.length;s<o;s+=2){const r=this.getShapeById(cn[s]),a=this.getShapeById(cn[s+1]);un.shapeA=r,un.shapeB=a,r&&(un.bodyA=r.body),a&&(un.bodyB=a.body),this.dispatchEvent(un)}un.bodyA=un.bodyB=un.shapeA=un.shapeB=null}if(i){for(let s=0,o=hn.length;s<o;s+=2){const r=this.getShapeById(hn[s]),a=this.getShapeById(hn[s+1]);dn.shapeA=r,dn.shapeB=a,r&&(dn.bodyA=r.body),a&&(dn.bodyB=a.body),this.dispatchEvent(dn)}dn.bodyA=dn.bodyB=dn.shapeA=dn.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let n=0;n!==t;n++){const i=e[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new Pt;const vr=new Ke,et=globalThis.performance||{};if(!et.now){let c=Date.now();et.timing&&et.timing.navigationStart&&(c=et.timing.navigationStart),et.now=()=>Date.now()-c}new y;const Hg={type:"postStep"},qg={type:"preStep"},Pi={type:ae.COLLIDE_EVENT_NAME,body:null,contact:null},Xg=[],jg=[],Yg=[],$g=[],cn=[],hn=[],Di={type:"beginContact",bodyA:null,bodyB:null},Ii={type:"endContact",bodyA:null,bodyB:null},un={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},dn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};function Zg(c,e,t){let{color:n=65280,scale:i=1,onInit:s,onUpdate:o}=t===void 0?{}:t;const r=[],a=new Cr({color:n??65280,wireframe:!0}),l=new y,h=new y,d=new y,u=new je,m=new Wi(1),g=new mn(1,1,1),p=new xi(10,10,10,10);p.translate(0,0,1e-4);function f(v){const b=new Rt,P=[];for(let N=0;N<v.vertices.length;N++){const A=v.vertices[N];P.push(A.x,A.y,A.z)}b.setAttribute("position",new ct(P,3));const O=[];for(let N=0;N<v.faces.length;N++){const A=v.faces[N],L=A[0];for(let I=1;I<A.length-1;I++){const z=A[I],H=A[I+1];O.push(L,z,H)}}return b.setIndex(O),b.computeBoundingSphere(),b.computeVertexNormals(),b}function _(v){const b=new Rt,P=[],O=l,N=h,A=d;for(let L=0;L<v.indices.length/3;L++)v.getTriangleVertices(L,O,N,A),P.push(O.x,O.y,O.z),P.push(N.x,N.y,N.z),P.push(A.x,A.y,A.z);return b.setAttribute("position",new ct(P,3)),b.computeBoundingSphere(),b.computeVertexNormals(),b}function x(v){const b=new Rt,P=v.elementSize||1,O=v.data.flatMap((A,L)=>A.flatMap((I,z)=>[L*P,z*P,I])),N=[];for(let A=0;A<v.data.length-1;A++)for(let L=0;L<v.data[A].length-1;L++){const I=v.data[A].length,z=A*I+L;N.push(z+1,z+I,z+I+1),N.push(z+I,z+1,z)}return b.setIndex(N),b.setAttribute("position",new ct(O,3)),b.computeBoundingSphere(),b.computeVertexNormals(),b}function M(v){let b=new Je;const{SPHERE:P,BOX:O,PLANE:N,CYLINDER:A,CONVEXPOLYHEDRON:L,TRIMESH:I,HEIGHTFIELD:z}=re.types;switch(v.type){case P:{b=new Je(m,a);break}case O:{b=new Je(g,a);break}case N:{b=new Je(p,a);break}case A:{const H=new Dr(v.radiusTop,v.radiusBottom,v.height,v.numSegments);b=new Je(H,a),v.geometryId=H.id;break}case L:{const H=f(v);b=new Je(H,a),v.geometryId=H.id;break}case I:{const H=_(v);b=new Je(H,a),v.geometryId=H.id;break}case z:{const H=x(v);b=new Je(H,a),v.geometryId=H.id;break}}return c.add(b),b}function w(v,b){const{SPHERE:P,BOX:O,PLANE:N,CYLINDER:A,CONVEXPOLYHEDRON:L,TRIMESH:I,HEIGHTFIELD:z}=re.types;switch(b.type){case P:{const{radius:H}=b;v.scale.set(H*i,H*i,H*i);break}case O:{v.scale.copy(b.halfExtents),v.scale.multiplyScalar(2*i);break}case N:break;case A:{v.scale.set(1*i,1*i,1*i);break}case L:{v.scale.set(1*i,1*i,1*i);break}case I:{v.scale.copy(b.scale).multiplyScalar(i);break}case z:{v.scale.set(1*i,1*i,1*i);break}}}function S(v,b){if(!v)return!1;const{geometry:P}=v;return P instanceof Wi&&b.type===re.types.SPHERE||P instanceof mn&&b.type===re.types.BOX||P instanceof xi&&b.type===re.types.PLANE||P.id===b.geometryId&&b.type===re.types.CYLINDER||P.id===b.geometryId&&b.type===re.types.CONVEXPOLYHEDRON||P.id===b.geometryId&&b.type===re.types.TRIMESH||P.id===b.geometryId&&b.type===re.types.HEIGHTFIELD}function C(v,b){let P=r[v],O=!1;return S(P,b)||(P&&c.remove(P),r[v]=P=M(b),O=!0),w(P,b),O}function D(){const v=r,b=l,P=u;let O=0;for(const N of e.bodies)for(let A=0;A!==N.shapes.length;A++){const L=N.shapes[A],I=C(O,L),z=v[O];z&&(N.quaternion.vmult(N.shapeOffsets[A],b),N.position.vadd(b,b),N.quaternion.mult(N.shapeOrientations[A],P),z.position.copy(b),z.quaternion.copy(P),I&&s instanceof Function&&s(N,z,L),!I&&o instanceof Function&&o(N,z,L)),O++}for(let N=O;N<v.length;N++){const A=v[N];A&&c.remove(A)}v.length=O}return{update:D}}let Z,zi,Jt=15,Mn=.25,ai=[],In=[0,0],zn,wa=3;class Kg{constructor(e){Z=this,Z.canvas=e,Z.sizes={width:window.innerWidth,height:window.innerHeight},Z.textures={ball:"ball.png",wall:"brick.png",floor:"C_Down_v2.png"},zn="initialize",Z.render(),Z.update(),window.addEventListener("resize",Z.resize),window.addEventListener("keydown",t=>{ai[t.code]=!0}),window.addEventListener("keyup",t=>{ai[t.code]=!1}),window.addEventListener("click",t=>{(zn=="initialize"||t.target.classList.contains("button"))&&(zn="fade-in")})}controls(){ai.ArrowUp&&(In[1]=-1),ai.ArrowDown&&(In[1]=1),ai.ArrowLeft&&(In[0]=-1),ai.ArrowRight&&(In[0]=1)}generateWalls(e){const t=[],n=new ae({mass:0});for(let a=0;a<e.dimension;a++)for(let l=0;l<e.dimension;l++)if(e[a][l]){const h=new mn(1,1,1);h.translate(a,l,.5),t.push(h);const d=new Hi(new y(.5,.5,.5));n.addShape(d,new y(a,l,.5))}const i=Mp(t,!0),s=new _s().load(Z.textures.wall);s.wrapS=s.wrapT=Oi;const o=new gs({map:s,wireframe:!1}),r=new Je(i,o);r.rotation.x=-Math.PI*.5,Z.scene.add(r),n.quaternion.setFromEuler(-Math.PI*.5,0,0),Z.world.addBody(n)}generateFloor(e){const t=new xi(e*10,e*10,e,e),n=new _s().load(Z.textures.floor);n.wrapS=n.wrapT=Oi;const i=new gs({map:n}),s=new Je(t,i);s.position.set((e-1)/2,0,-(e-2)/2),s.rotation.x=-Math.PI*.5,Z.scene.add(s);const o=new Em,r=new ae({mass:0,shape:o});r.position.copy(s.position),r.quaternion.setFromEuler(-Math.PI*.5,0,0),Z.world.addBody(r)}generateBall(e,t){const n=new Wi(e,32,16),i=new _s().load(Z.textures.ball),s=new gs({map:i}),o=new Je(n,s);o.position.copy(t),Z.scene.add(o),Z.ballMesh=o;const r=new Sm(e),a=new ae({mass:1,type:ae.DYNAMIC,sleepState:!1,shape:r,angularDamping:1,linearDamping:.5});a.updateMassProperties(),a.position.copy(t),Z.world.addBody(a),Z.ballBody=a}victoryBox(e){const t=new mn(Mn,Mn,Mn),n=new _s().load(Z.textures.ball),i=new gs({map:n}),s=new Je(t,i);s.position.copy(e),Z.scene.add(s);const o=new Hi(new y(Mn/2,Mn/2,Mn/2)),r=new ae({shape:o,isTrigger:!0});r.position.copy(e),Z.world.addBody(r),Z.triggerVictory=r}createWorld(){Z.world=new Wg,Z.world.broadphase=new hi(Z.world),Z.world.allowSleep=!0,Z.world.gravity=new y(0,-9.82,0)}createScene(){Z.scene=new fp,Z.light=new yp(16777215,1),Z.light.position.set(1,2,-1),Z.scene.add(Z.light),Z.camera=new Ct(75,Z.sizes.width/Z.sizes.height,.1,100),Z.camera.position.set(1,5,-1),Z.camera.rotation.x=-Math.PI*.5,Z.generateBall(Mn,{x:1,y:Mn,z:-1}),Z.generateWalls(zi),Z.generateFloor(Jt),Z.victoryBox({x:Jt,y:.5,z:-Jt+2})}render(){Z.renderer=new Pr({canvas:Z.canvas}),Z.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),Z.renderer.setSize(Z.sizes.width,Z.sizes.height)}resize(){Z.sizes.width=window.innerWidth,Z.sizes.height=window.innerHeight,Z.camera.aspect=Z.sizes.width/Z.sizes.height,Z.camera.updateProjectionMatrix(),Z.renderer.setSize(Z.sizes.width,Z.sizes.height),Z.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}debug(){Z.cannonDebugger=new Zg(Z.scene,Z.world,{scale:1})}updateWorld(){Z.ballMesh.position.copy(Z.ballBody.position),Z.controls(),Z.ballBody.velocity.set(In[0]*wa,0,In[1]*wa),In=[0,0],Z.world.fixedStep()}updateScene(){Z.camera.position.x+=(Z.ballMesh.position.x-Z.camera.position.x)*.1,Z.camera.position.z+=(Z.ballMesh.position.z-Z.camera.position.z)*.1,Z.camera.position.y+=(5-Z.camera.position.y)*.1,Z.light.position.x=Z.camera.position.x,Z.light.position.z=Z.camera.position.z,Z.light.position.y=Z.camera.position.y-3}updateRender(){Z.renderer.render(Z.scene,Z.camera)}checkForVictory(e){e.body===Z.ballBody&&(console.log("win is triggered!",e),zn="fade-out")}update(){switch(zn){case"initialize":zi=ba(Jt),zi[Jt-1][Jt-2]=!1,Z.createWorld(),Z.createScene(),Z.light.intensity=0,document.querySelector(".instructions").style.opacity=1;const e=Math.floor((Jt-1)/2-6);document.querySelector("#level").innerHTML="Level "+e;break;case"fade-in":Z.light.intensity+=.1*(1-Z.light.intensity),Z.updateRender(),document.querySelector(".instructions").style.opacity=0,document.querySelector(".level").style.opacity=0,Math.abs(Z.light.intensity-1)<.05&&(Z.light.intensity=1,zn="play");break;case"play":Z.updateWorld(),Z.updateScene(),Z.updateRender(),Z.triggerVictory.addEventListener("collide",Z.checkForVictory);break;case"fade-out":Z.updateWorld(),Z.updateScene(),Z.light.intensity+=.1*(0-Z.light.intensity),Z.updateRender(),Math.abs(Z.light.intensity-0)<.1&&(Z.light.intensity=0,Z.updateRender(),zn="congrats");break;case"congrats":zi=ba(Jt),zi[Jt-1][Jt-2]=!1,Z.createWorld(),Z.createScene(),Z.light.intensity=0,document.querySelector(".level").style.opacity=1;const t=1;document.querySelector(".level p").innerHTML="Level "+t+" complete";break}requestAnimationFrame(Z.update)}}const ba=c=>{function e(s,o,r){for(s[o][r]=!1;;){let a=[];if(o>1&&s[o-2][r]==!0&&a.push([-1,0]),o<s.dimension-2&&s[o+2][r]==!0&&a.push([1,0]),r>1&&s[o][r-2]==!0&&a.push([0,-1]),r<s.dimension-2&&s[o][r+2]==!0&&a.push([0,1]),a.length==0)return s;const l=a[Math.floor(Math.random()*a.length)];s[o+l[0]][r+l[1]]=!1,s=e(s,o+l[0]*2,r+l[1]*2)}}let t=new Array(c);t.dimension=c;for(var n=0;n<c;n++){t[n]=new Array(c);for(var i=0;i<c;i++)t[n][i]=!0}return t=e(t,1,1),t};new Kg(document.querySelector("canvas.webgl"));
//# sourceMappingURL=index-24bb043e.js.map
