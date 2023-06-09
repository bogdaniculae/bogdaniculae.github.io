(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rr="150",El=0,Vr=1,Tl=2,Ba=1,Al=2,Bi=3,En=0,Re=1,wn=2,Sn=0,fi=1,Wr=2,Hr=3,qr=4,Cl=5,ci=100,Ll=101,Pl=102,Xr=103,jr=104,Rl=200,Dl=201,Il=202,zl=203,Oa=204,Ua=205,Fl=206,Nl=207,Bl=208,Ol=209,Ul=210,Gl=0,kl=1,Vl=2,Sr=3,Wl=4,Hl=5,ql=6,Xl=7,Ga=0,jl=1,Yl=2,mn=0,$l=1,Zl=2,Kl=3,Jl=4,Ql=5,ka=300,gi=301,_i=302,Er=303,Tr=304,Cs=306,Ar=1e3,Ve=1001,Cr=1002,ge=1003,Yr=1004,Bs=1005,Fe=1006,tc=1007,ki=1008,Hn=1009,ec=1010,nc=1011,Va=1012,ic=1013,Un=1014,Gn=1015,Vi=1016,sc=1017,rc=1018,pi=1020,oc=1021,We=1023,ac=1024,lc=1025,Wn=1026,xi=1027,cc=1028,hc=1029,uc=1030,dc=1031,fc=1033,Os=33776,Us=33777,Gs=33778,ks=33779,$r=35840,Zr=35841,Kr=35842,Jr=35843,pc=36196,Qr=37492,to=37496,eo=37808,no=37809,io=37810,so=37811,ro=37812,oo=37813,ao=37814,lo=37815,co=37816,ho=37817,uo=37818,fo=37819,po=37820,mo=37821,Vs=36492,mc=36283,go=36284,_o=36285,xo=36286,qn=3e3,Gt=3001,gc=3200,_c=3201,Wa=0,xc=1,Je="srgb",Wi="srgb-linear",Ha="display-p3",Ws=7680,vc=519,vo=35044,yo="300 es",Lr=1035;class Mi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hs=Math.PI/180,Mo=180/Math.PI;function Xi(){const c=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ae[c&255]+ae[c>>8&255]+ae[c>>16&255]+ae[c>>24&255]+"-"+ae[t&255]+ae[t>>8&255]+"-"+ae[t>>16&15|64]+ae[t>>24&255]+"-"+ae[e&63|128]+ae[e>>8&255]+"-"+ae[e>>16&255]+ae[e>>24&255]+ae[n&255]+ae[n>>8&255]+ae[n>>16&255]+ae[n>>24&255]).toLowerCase()}function Le(c,t,e){return Math.max(t,Math.min(e,c))}function yc(c,t){return(c%t+t)%t}function qs(c,t,e){return(1-e)*c+e*t}function wo(c){return(c&c-1)===0&&c!==0}function Mc(c){return Math.pow(2,Math.floor(Math.log(c)/Math.LN2))}function Ki(c,t){switch(t.constructor){case Float32Array:return c;case Uint16Array:return c/65535;case Uint8Array:return c/255;case Int16Array:return Math.max(c/32767,-1);case Int8Array:return Math.max(c/127,-1);default:throw new Error("Invalid component type.")}}function Ee(c,t){switch(t.constructor){case Float32Array:return c;case Uint16Array:return Math.round(c*65535);case Uint8Array:return Math.round(c*255);case Int16Array:return Math.round(c*32767);case Int8Array:return Math.round(c*127);default:throw new Error("Invalid component type.")}}class Bt{constructor(t=0,e=0){Bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _e{constructor(){_e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,s,o,r,a,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=r,h[3]=e,h[4]=s,h[5]=a,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],r=n[3],a=n[6],l=n[1],h=n[4],d=n[7],u=n[2],m=n[5],g=n[8],p=i[0],f=i[3],_=i[6],x=i[1],y=i[4],M=i[7],S=i[2],C=i[5],D=i[8];return s[0]=o*p+r*x+a*S,s[3]=o*f+r*y+a*C,s[6]=o*_+r*M+a*D,s[1]=l*p+h*x+d*S,s[4]=l*f+h*y+d*C,s[7]=l*_+h*M+d*D,s[2]=u*p+m*x+g*S,s[5]=u*f+m*y+g*C,s[8]=u*_+m*M+g*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],r=t[5],a=t[6],l=t[7],h=t[8];return e*o*h-e*r*l-n*s*h+n*r*a+i*s*l-i*o*a}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],r=t[5],a=t[6],l=t[7],h=t[8],d=h*o-r*l,u=r*a-h*s,m=l*s-o*a,g=e*d+n*u+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return t[0]=d*p,t[1]=(i*l-h*n)*p,t[2]=(r*n-i*o)*p,t[3]=u*p,t[4]=(h*e-i*a)*p,t[5]=(i*s-r*e)*p,t[6]=m*p,t[7]=(n*a-l*e)*p,t[8]=(o*e-n*s)*p,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,r){const a=Math.cos(s),l=Math.sin(s);return this.set(n*a,n*l,-n*(a*o+l*r)+o+t,-i*l,i*a,-i*(-l*o+a*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(Xs.makeScale(t,e)),this}rotate(t){return this.premultiply(Xs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xs.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xs=new _e;function qa(c){for(let t=c.length-1;t>=0;--t)if(c[t]>=65535)return!0;return!1}function Hi(c){return document.createElementNS("http://www.w3.org/1999/xhtml",c)}let ji=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,r){let a=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const u=s[o+0],m=s[o+1],g=s[o+2],p=s[o+3];if(r===0){t[e+0]=a,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(r===1){t[e+0]=u,t[e+1]=m,t[e+2]=g,t[e+3]=p;return}if(d!==p||a!==u||l!==m||h!==g){let f=1-r;const _=a*u+l*m+h*g+d*p,x=_>=0?1:-1,y=1-_*_;if(y>Number.EPSILON){const S=Math.sqrt(y),C=Math.atan2(S,_*x);f=Math.sin(f*C)/S,r=Math.sin(r*C)/S}const M=r*x;if(a=a*f+u*M,l=l*f+m*M,h=h*f+g*M,d=d*f+p*M,f===1-r){const S=1/Math.sqrt(a*a+l*l+h*h+d*d);a*=S,l*=S,h*=S,d*=S}}t[e]=a,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){const r=n[i],a=n[i+1],l=n[i+2],h=n[i+3],d=s[o],u=s[o+1],m=s[o+2],g=s[o+3];return t[e]=r*g+h*d+a*m-l*u,t[e+1]=a*g+h*u+l*d-r*m,t[e+2]=l*g+h*m+r*u-a*d,t[e+3]=h*g-r*d-a*u-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,o=t._order,r=Math.cos,a=Math.sin,l=r(n/2),h=r(i/2),d=r(s/2),u=a(n/2),m=a(i/2),g=a(s/2);switch(o){case"XYZ":this._x=u*h*d+l*m*g,this._y=l*m*d-u*h*g,this._z=l*h*g+u*m*d,this._w=l*h*d-u*m*g;break;case"YXZ":this._x=u*h*d+l*m*g,this._y=l*m*d-u*h*g,this._z=l*h*g-u*m*d,this._w=l*h*d+u*m*g;break;case"ZXY":this._x=u*h*d-l*m*g,this._y=l*m*d+u*h*g,this._z=l*h*g+u*m*d,this._w=l*h*d-u*m*g;break;case"ZYX":this._x=u*h*d-l*m*g,this._y=l*m*d+u*h*g,this._z=l*h*g-u*m*d,this._w=l*h*d+u*m*g;break;case"YZX":this._x=u*h*d+l*m*g,this._y=l*m*d+u*h*g,this._z=l*h*g-u*m*d,this._w=l*h*d-u*m*g;break;case"XZY":this._x=u*h*d-l*m*g,this._y=l*m*d-u*h*g,this._z=l*h*g+u*m*d,this._w=l*h*d+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],r=e[5],a=e[9],l=e[2],h=e[6],d=e[10],u=n+r+d;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-a)*m,this._y=(s-l)*m,this._z=(o-i)*m}else if(n>r&&n>d){const m=2*Math.sqrt(1+n-r-d);this._w=(h-a)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+l)/m}else if(r>d){const m=2*Math.sqrt(1+r-n-d);this._w=(s-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(a+h)/m}else{const m=2*Math.sqrt(1+d-n-r);this._w=(o-i)/m,this._x=(s+l)/m,this._y=(a+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Le(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,r=e._x,a=e._y,l=e._z,h=e._w;return this._x=n*h+o*r+i*l-s*a,this._y=i*h+o*a+s*r-n*l,this._z=s*h+o*l+n*a-i*r,this._w=o*h-n*r-i*a-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let r=o*t._w+n*t._x+i*t._y+s*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const a=1-r*r;if(a<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(a),h=Math.atan2(l,r),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,r=t.z,a=t.w,l=a*e+o*i-r*n,h=a*n+r*e-s*i,d=a*i+s*n-o*e,u=-s*e-o*n-r*i;return this.x=l*a+u*-s+h*-r-d*-o,this.y=h*a+u*-o+d*-s-l*-r,this.z=d*a+u*-r+l*-o-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,r=e.y,a=e.z;return this.x=i*a-s*r,this.y=s*o-n*a,this.z=n*r-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return js.copy(this).projectOnVector(t),this.sub(js)}reflect(t){return this.sub(js.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const js=new U,bo=new ji;function mi(c){return c<.04045?c*.0773993808:Math.pow(c*.9478672986+.0521327014,2.4)}function Ys(c){return c<.0031308?c*12.92:1.055*Math.pow(c,.41666)-.055}const wc=new _e().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),bc=new _e().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),bn=new U;function Sc(c){return c.convertSRGBToLinear(),bn.set(c.r,c.g,c.b).applyMatrix3(bc),c.setRGB(bn.x,bn.y,bn.z)}function Ec(c){return bn.set(c.r,c.g,c.b).applyMatrix3(wc),c.setRGB(bn.x,bn.y,bn.z).convertLinearToSRGB()}const Tc={[Wi]:c=>c,[Je]:c=>c.convertSRGBToLinear(),[Ha]:Sc},Ac={[Wi]:c=>c,[Je]:c=>c.convertLinearToSRGB(),[Ha]:Ec},fe={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(c){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!c},get workingColorSpace(){return Wi},set workingColorSpace(c){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(c,t,e){if(this.enabled===!1||t===e||!t||!e)return c;const n=Tc[t],i=Ac[e];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return i(n(c))},fromWorkingColorSpace:function(c,t){return this.convert(c,this.workingColorSpace,t)},toWorkingColorSpace:function(c,t){return this.convert(c,t,this.workingColorSpace)}};let Yn;class Xa{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Yn===void 0&&(Yn=Hi("canvas")),Yn.width=t.width,Yn.height=t.height;const n=Yn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Yn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Hi("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=mi(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(mi(e[n]/255)*255):e[n]=mi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class ja{constructor(t=null){this.isSource=!0,this.uuid=Xi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,r=i.length;o<r;o++)i[o].isDataTexture?s.push($s(i[o].image)):s.push($s(i[o]))}else s=$s(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function $s(c){return typeof HTMLImageElement<"u"&&c instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&c instanceof ImageBitmap?Xa.getDataURL(c):c.data?{data:Array.from(c.data),width:c.width,height:c.height,type:c.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cc=0;class Me extends Mi{constructor(t=Me.DEFAULT_IMAGE,e=Me.DEFAULT_MAPPING,n=Ve,i=Ve,s=Fe,o=ki,r=We,a=Hn,l=Me.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cc++}),this.uuid=Xi(),this.name="",this.source=new ja(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=r,this.internalFormat=null,this.type=a,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ka)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ar:t.x=t.x-Math.floor(t.x);break;case Ve:t.x=t.x<0?0:1;break;case Cr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ar:t.y=t.y-Math.floor(t.y);break;case Ve:t.y=t.y<0?0:1;break;case Cr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Me.DEFAULT_IMAGE=null;Me.DEFAULT_MAPPING=ka;Me.DEFAULT_ANISOTROPY=1;class kt{constructor(t=0,e=0,n=0,i=1){kt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const a=t.elements,l=a[0],h=a[4],d=a[8],u=a[1],m=a[5],g=a[9],p=a[2],f=a[6],_=a[10];if(Math.abs(h-u)<.01&&Math.abs(d-p)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+p)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,M=(m+1)/2,S=(_+1)/2,C=(h+u)/4,D=(d+p)/4,v=(g+f)/4;return y>M&&y>S?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=C/n,s=D/n):M>S?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=C/i,s=v/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=D/s,i=v/s),this.set(n,i,s,e),this}let x=Math.sqrt((f-g)*(f-g)+(d-p)*(d-p)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(f-g)/x,this.y=(d-p)/x,this.z=(u-h)/x,this.w=Math.acos((l+m+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xn extends Mi{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new kt(0,0,t,e),this.scissorTest=!1,this.viewport=new kt(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new Me(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Fe,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ja(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ya extends Me{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ge,this.minFilter=ge,this.wrapR=Ve,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lc extends Me{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ge,this.minFilter=ge,this.wrapR=Ve,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yi{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,r=-1/0;for(let a=0,l=t.length;a<l;a+=3){const h=t[a],d=t[a+1],u=t[a+2];h<e&&(e=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>o&&(o=d),u>r&&(r=u)}return this.min.set(e,n,i),this.max.set(s,o,r),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,r=-1/0;for(let a=0,l=t.count;a<l;a++){const h=t.getX(a),d=t.getY(a),u=t.getZ(a);h<e&&(e=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>o&&(o=d),u>r&&(r=u)}return this.min.set(e,n,i),this.max.set(s,o,r),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,r=s.count;o<r;o++)Pn.fromBufferAttribute(s,o).applyMatrix4(t.matrixWorld),this.expandByPoint(Pn)}else n.boundingBox===null&&n.computeBoundingBox(),Zs.copy(n.boundingBox),Zs.applyMatrix4(t.matrixWorld),this.union(Zs);const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ei),Ji.subVectors(this.max,Ei),$n.subVectors(t.a,Ei),Zn.subVectors(t.b,Ei),Kn.subVectors(t.c,Ei),gn.subVectors(Zn,$n),_n.subVectors(Kn,Zn),Rn.subVectors($n,Kn);let e=[0,-gn.z,gn.y,0,-_n.z,_n.y,0,-Rn.z,Rn.y,gn.z,0,-gn.x,_n.z,0,-_n.x,Rn.z,0,-Rn.x,-gn.y,gn.x,0,-_n.y,_n.x,0,-Rn.y,Rn.x,0];return!Ks(e,$n,Zn,Kn,Ji)||(e=[1,0,0,0,1,0,0,0,1],!Ks(e,$n,Zn,Kn,Ji))?!1:(Qi.crossVectors(gn,_n),e=[Qi.x,Qi.y,Qi.z],Ks(e,$n,Zn,Kn,Ji))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(sn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const sn=[new U,new U,new U,new U,new U,new U,new U,new U],Pn=new U,Zs=new Yi,$n=new U,Zn=new U,Kn=new U,gn=new U,_n=new U,Rn=new U,Ei=new U,Ji=new U,Qi=new U,Dn=new U;function Ks(c,t,e,n,i){for(let s=0,o=c.length-3;s<=o;s+=3){Dn.fromArray(c,s);const r=i.x*Math.abs(Dn.x)+i.y*Math.abs(Dn.y)+i.z*Math.abs(Dn.z),a=t.dot(Dn),l=e.dot(Dn),h=n.dot(Dn);if(Math.max(-Math.max(a,l,h),Math.min(a,l,h))>r)return!1}return!0}const Pc=new Yi,Ti=new U,Js=new U;class Ls{constructor(t=new U,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Pc.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ti.subVectors(t,this.center);const e=Ti.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ti,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Js.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ti.copy(t.center).add(Js)),this.expandByPoint(Ti.copy(t.center).sub(Js))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const rn=new U,Qs=new U,ts=new U,xn=new U,tr=new U,es=new U,er=new U;let $a=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(rn.copy(this.origin).addScaledVector(this.direction,e),rn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Qs.copy(t).add(e).multiplyScalar(.5),ts.copy(e).sub(t).normalize(),xn.copy(this.origin).sub(Qs);const s=t.distanceTo(e)*.5,o=-this.direction.dot(ts),r=xn.dot(this.direction),a=-xn.dot(ts),l=xn.lengthSq(),h=Math.abs(1-o*o);let d,u,m,g;if(h>0)if(d=o*a-r,u=o*r-a,g=s*h,d>=0)if(u>=-g)if(u<=g){const p=1/h;d*=p,u*=p,m=d*(d+o*u+2*r)+u*(o*d+u+2*a)+l}else u=s,d=Math.max(0,-(o*u+r)),m=-d*d+u*(u+2*a)+l;else u=-s,d=Math.max(0,-(o*u+r)),m=-d*d+u*(u+2*a)+l;else u<=-g?(d=Math.max(0,-(-o*s+r)),u=d>0?-s:Math.min(Math.max(-s,-a),s),m=-d*d+u*(u+2*a)+l):u<=g?(d=0,u=Math.min(Math.max(-s,-a),s),m=u*(u+2*a)+l):(d=Math.max(0,-(o*s+r)),u=d>0?s:Math.min(Math.max(-s,-a),s),m=-d*d+u*(u+2*a)+l);else u=o>0?-s:s,d=Math.max(0,-(o*u+r)),m=-d*d+u*(u+2*a)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Qs).addScaledVector(ts,u),m}intersectSphere(t,e){rn.subVectors(t.center,this.origin);const n=rn.dot(this.direction),i=rn.dot(rn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),r=n-o,a=n+o;return a<0?null:r<0?this.at(a,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,r,a;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(r=(t.min.z-u.z)*d,a=(t.max.z-u.z)*d):(r=(t.max.z-u.z)*d,a=(t.min.z-u.z)*d),n>a||r>i)||((r>n||n!==n)&&(n=r),(a<i||i!==i)&&(i=a),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,rn)!==null}intersectTriangle(t,e,n,i,s){tr.subVectors(e,t),es.subVectors(n,t),er.crossVectors(tr,es);let o=this.direction.dot(er),r;if(o>0){if(i)return null;r=1}else if(o<0)r=-1,o=-o;else return null;xn.subVectors(this.origin,t);const a=r*this.direction.dot(es.crossVectors(xn,es));if(a<0)return null;const l=r*this.direction.dot(tr.cross(xn));if(l<0||a+l>o)return null;const h=-r*xn.dot(er);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class jt{constructor(){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,s,o,r,a,l,h,d,u,m,g,p,f){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=i,_[1]=s,_[5]=o,_[9]=r,_[13]=a,_[2]=l,_[6]=h,_[10]=d,_[14]=u,_[3]=m,_[7]=g,_[11]=p,_[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Jn.setFromMatrixColumn(t,0).length(),s=1/Jn.setFromMatrixColumn(t,1).length(),o=1/Jn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),r=Math.sin(n),a=Math.cos(i),l=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=o*h,m=o*d,g=r*h,p=r*d;e[0]=a*h,e[4]=-a*d,e[8]=l,e[1]=m+g*l,e[5]=u-p*l,e[9]=-r*a,e[2]=p-u*l,e[6]=g+m*l,e[10]=o*a}else if(t.order==="YXZ"){const u=a*h,m=a*d,g=l*h,p=l*d;e[0]=u+p*r,e[4]=g*r-m,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-r,e[2]=m*r-g,e[6]=p+u*r,e[10]=o*a}else if(t.order==="ZXY"){const u=a*h,m=a*d,g=l*h,p=l*d;e[0]=u-p*r,e[4]=-o*d,e[8]=g+m*r,e[1]=m+g*r,e[5]=o*h,e[9]=p-u*r,e[2]=-o*l,e[6]=r,e[10]=o*a}else if(t.order==="ZYX"){const u=o*h,m=o*d,g=r*h,p=r*d;e[0]=a*h,e[4]=g*l-m,e[8]=u*l+p,e[1]=a*d,e[5]=p*l+u,e[9]=m*l-g,e[2]=-l,e[6]=r*a,e[10]=o*a}else if(t.order==="YZX"){const u=o*a,m=o*l,g=r*a,p=r*l;e[0]=a*h,e[4]=p-u*d,e[8]=g*d+m,e[1]=d,e[5]=o*h,e[9]=-r*h,e[2]=-l*h,e[6]=m*d+g,e[10]=u-p*d}else if(t.order==="XZY"){const u=o*a,m=o*l,g=r*a,p=r*l;e[0]=a*h,e[4]=-d,e[8]=l*h,e[1]=u*d+p,e[5]=o*h,e[9]=m*d-g,e[2]=g*d-m,e[6]=r*h,e[10]=p*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rc,t,Dc)}lookAt(t,e,n){const i=this.elements;return Te.subVectors(t,e),Te.lengthSq()===0&&(Te.z=1),Te.normalize(),vn.crossVectors(n,Te),vn.lengthSq()===0&&(Math.abs(n.z)===1?Te.x+=1e-4:Te.z+=1e-4,Te.normalize(),vn.crossVectors(n,Te)),vn.normalize(),ns.crossVectors(Te,vn),i[0]=vn.x,i[4]=ns.x,i[8]=Te.x,i[1]=vn.y,i[5]=ns.y,i[9]=Te.y,i[2]=vn.z,i[6]=ns.z,i[10]=Te.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],r=n[4],a=n[8],l=n[12],h=n[1],d=n[5],u=n[9],m=n[13],g=n[2],p=n[6],f=n[10],_=n[14],x=n[3],y=n[7],M=n[11],S=n[15],C=i[0],D=i[4],v=i[8],b=i[12],R=i[1],O=i[5],N=i[9],A=i[13],L=i[2],I=i[6],z=i[10],H=i[14],V=i[3],X=i[7],K=i[11],rt=i[15];return s[0]=o*C+r*R+a*L+l*V,s[4]=o*D+r*O+a*I+l*X,s[8]=o*v+r*N+a*z+l*K,s[12]=o*b+r*A+a*H+l*rt,s[1]=h*C+d*R+u*L+m*V,s[5]=h*D+d*O+u*I+m*X,s[9]=h*v+d*N+u*z+m*K,s[13]=h*b+d*A+u*H+m*rt,s[2]=g*C+p*R+f*L+_*V,s[6]=g*D+p*O+f*I+_*X,s[10]=g*v+p*N+f*z+_*K,s[14]=g*b+p*A+f*H+_*rt,s[3]=x*C+y*R+M*L+S*V,s[7]=x*D+y*O+M*I+S*X,s[11]=x*v+y*N+M*z+S*K,s[15]=x*b+y*A+M*H+S*rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],r=t[5],a=t[9],l=t[13],h=t[2],d=t[6],u=t[10],m=t[14],g=t[3],p=t[7],f=t[11],_=t[15];return g*(+s*a*d-i*l*d-s*r*u+n*l*u+i*r*m-n*a*m)+p*(+e*a*m-e*l*u+s*o*u-i*o*m+i*l*h-s*a*h)+f*(+e*l*d-e*r*m-s*o*d+n*o*m+s*r*h-n*l*h)+_*(-i*r*h-e*a*d+e*r*u+i*o*d-n*o*u+n*a*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],r=t[5],a=t[6],l=t[7],h=t[8],d=t[9],u=t[10],m=t[11],g=t[12],p=t[13],f=t[14],_=t[15],x=d*f*l-p*u*l+p*a*m-r*f*m-d*a*_+r*u*_,y=g*u*l-h*f*l-g*a*m+o*f*m+h*a*_-o*u*_,M=h*p*l-g*d*l+g*r*m-o*p*m-h*r*_+o*d*_,S=g*d*a-h*p*a-g*r*u+o*p*u+h*r*f-o*d*f,C=e*x+n*y+i*M+s*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/C;return t[0]=x*D,t[1]=(p*u*s-d*f*s-p*i*m+n*f*m+d*i*_-n*u*_)*D,t[2]=(r*f*s-p*a*s+p*i*l-n*f*l-r*i*_+n*a*_)*D,t[3]=(d*a*s-r*u*s-d*i*l+n*u*l+r*i*m-n*a*m)*D,t[4]=y*D,t[5]=(h*f*s-g*u*s+g*i*m-e*f*m-h*i*_+e*u*_)*D,t[6]=(g*a*s-o*f*s-g*i*l+e*f*l+o*i*_-e*a*_)*D,t[7]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*m+e*a*m)*D,t[8]=M*D,t[9]=(g*d*s-h*p*s-g*n*m+e*p*m+h*n*_-e*d*_)*D,t[10]=(o*p*s-g*r*s+g*n*l-e*p*l-o*n*_+e*r*_)*D,t[11]=(h*r*s-o*d*s-h*n*l+e*d*l+o*n*m-e*r*m)*D,t[12]=S*D,t[13]=(h*p*i-g*d*i+g*n*u-e*p*u-h*n*f+e*d*f)*D,t[14]=(g*r*i-o*p*i-g*n*a+e*p*a+o*n*f-e*r*f)*D,t[15]=(o*d*i-h*r*i+h*n*a-e*d*a-o*n*u+e*r*u)*D,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,r=t.y,a=t.z,l=s*o,h=s*r;return this.set(l*o+n,l*r-i*a,l*a+i*r,0,l*r+i*a,h*r+n,h*a-i*o,0,l*a-i*r,h*a+i*o,s*a*a+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,r=e._z,a=e._w,l=s+s,h=o+o,d=r+r,u=s*l,m=s*h,g=s*d,p=o*h,f=o*d,_=r*d,x=a*l,y=a*h,M=a*d,S=n.x,C=n.y,D=n.z;return i[0]=(1-(p+_))*S,i[1]=(m+M)*S,i[2]=(g-y)*S,i[3]=0,i[4]=(m-M)*C,i[5]=(1-(u+_))*C,i[6]=(f+x)*C,i[7]=0,i[8]=(g+y)*D,i[9]=(f-x)*D,i[10]=(1-(u+p))*D,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Jn.set(i[0],i[1],i[2]).length();const o=Jn.set(i[4],i[5],i[6]).length(),r=Jn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Oe.copy(this);const l=1/s,h=1/o,d=1/r;return Oe.elements[0]*=l,Oe.elements[1]*=l,Oe.elements[2]*=l,Oe.elements[4]*=h,Oe.elements[5]*=h,Oe.elements[6]*=h,Oe.elements[8]*=d,Oe.elements[9]*=d,Oe.elements[10]*=d,e.setFromRotationMatrix(Oe),n.x=s,n.y=o,n.z=r,this}makePerspective(t,e,n,i,s,o){const r=this.elements,a=2*s/(e-t),l=2*s/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i),u=-(o+s)/(o-s),m=-2*o*s/(o-s);return r[0]=a,r[4]=0,r[8]=h,r[12]=0,r[1]=0,r[5]=l,r[9]=d,r[13]=0,r[2]=0,r[6]=0,r[10]=u,r[14]=m,r[3]=0,r[7]=0,r[11]=-1,r[15]=0,this}makeOrthographic(t,e,n,i,s,o){const r=this.elements,a=1/(e-t),l=1/(n-i),h=1/(o-s),d=(e+t)*a,u=(n+i)*l,m=(o+s)*h;return r[0]=2*a,r[4]=0,r[8]=0,r[12]=-d,r[1]=0,r[5]=2*l,r[9]=0,r[13]=-u,r[2]=0,r[6]=0,r[10]=-2*h,r[14]=-m,r[3]=0,r[7]=0,r[11]=0,r[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Jn=new U,Oe=new jt,Rc=new U(0,0,0),Dc=new U(1,1,1),vn=new U,ns=new U,Te=new U,So=new jt,Eo=new ji;class Ps{constructor(t=0,e=0,n=0,i=Ps.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],r=i[8],a=i[1],l=i[5],h=i[9],d=i[2],u=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Le(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,m),this._z=Math.atan2(a,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(a,s));break;case"ZYX":this._y=Math.asin(-Le(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(a,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(r,m));break;case"XZY":this._z=Math.asin(-Le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return So.makeRotationFromQuaternion(t),this.setFromRotationMatrix(So,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Eo.setFromEuler(this),this.setFromQuaternion(Eo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ps.DEFAULT_ORDER="XYZ";class Za{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ic=0;const To=new U,Qn=new ji,on=new jt,is=new U,Ai=new U,zc=new U,Fc=new ji,Ao=new U(1,0,0),Co=new U(0,1,0),Lo=new U(0,0,1),Nc={type:"added"},Po={type:"removed"};class xe extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ic++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new U,e=new Ps,n=new ji,i=new U(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new jt},normalMatrix:{value:new _e}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Za,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qn.setFromAxisAngle(t,e),this.quaternion.multiply(Qn),this}rotateOnWorldAxis(t,e){return Qn.setFromAxisAngle(t,e),this.quaternion.premultiply(Qn),this}rotateX(t){return this.rotateOnAxis(Ao,t)}rotateY(t){return this.rotateOnAxis(Co,t)}rotateZ(t){return this.rotateOnAxis(Lo,t)}translateOnAxis(t,e){return To.copy(t).applyQuaternion(this.quaternion),this.position.add(To.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ao,t)}translateY(t){return this.translateOnAxis(Co,t)}translateZ(t){return this.translateOnAxis(Lo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(on.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?is.copy(t):is.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ai.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(Ai,is,this.up):on.lookAt(is,Ai,this.up),this.quaternion.setFromRotationMatrix(on),i&&(on.extractRotation(i.matrixWorld),Qn.setFromRotationMatrix(on),this.quaternion.premultiply(Qn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Nc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Po)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Po)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),on.multiply(t.parent.matrixWorld)),t.applyMatrix4(on),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(t,e);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ai,t,zc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ai,Fc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const r=i[s];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(r,a){return r[a.uuid]===void 0&&(r[a.uuid]=a.toJSON(t)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const a=r.shapes;if(Array.isArray(a))for(let l=0,h=a.length;l<h;l++){const d=a[l];s(t.shapes,d)}else s(t.shapes,a)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let a=0,l=this.material.length;a<l;a++)r.push(s(t.materials,this.material[a]));i.material=r}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let r=0;r<this.children.length;r++)i.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let r=0;r<this.animations.length;r++){const a=this.animations[r];i.animations.push(s(t.animations,a))}}if(e){const r=o(t.geometries),a=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),m=o(t.animations),g=o(t.nodes);r.length>0&&(n.geometries=r),a.length>0&&(n.materials=a),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(r){const a=[];for(const l in r){const h=r[l];delete h.metadata,a.push(h)}return a}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}xe.DEFAULT_UP=new U(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ue=new U,an=new U,nr=new U,ln=new U,ti=new U,ei=new U,Ro=new U,ir=new U,sr=new U,rr=new U;class pn{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ue.subVectors(t,e),i.cross(Ue);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Ue.subVectors(i,e),an.subVectors(n,e),nr.subVectors(t,e);const o=Ue.dot(Ue),r=Ue.dot(an),a=Ue.dot(nr),l=an.dot(an),h=an.dot(nr),d=o*l-r*r;if(d===0)return s.set(-2,-1,-1);const u=1/d,m=(l*a-r*h)*u,g=(o*h-r*a)*u;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ln),ln.x>=0&&ln.y>=0&&ln.x+ln.y<=1}static getUV(t,e,n,i,s,o,r,a){return this.getBarycoord(t,e,n,i,ln),a.set(0,0),a.addScaledVector(s,ln.x),a.addScaledVector(o,ln.y),a.addScaledVector(r,ln.z),a}static isFrontFacing(t,e,n,i){return Ue.subVectors(n,e),an.subVectors(t,e),Ue.cross(an).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ue.subVectors(this.c,this.b),an.subVectors(this.a,this.b),Ue.cross(an).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return pn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return pn.getUV(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,r;ti.subVectors(i,n),ei.subVectors(s,n),ir.subVectors(t,n);const a=ti.dot(ir),l=ei.dot(ir);if(a<=0&&l<=0)return e.copy(n);sr.subVectors(t,i);const h=ti.dot(sr),d=ei.dot(sr);if(h>=0&&d<=h)return e.copy(i);const u=a*d-h*l;if(u<=0&&a>=0&&h<=0)return o=a/(a-h),e.copy(n).addScaledVector(ti,o);rr.subVectors(t,s);const m=ti.dot(rr),g=ei.dot(rr);if(g>=0&&m<=g)return e.copy(s);const p=m*l-a*g;if(p<=0&&l>=0&&g<=0)return r=l/(l-g),e.copy(n).addScaledVector(ei,r);const f=h*g-m*d;if(f<=0&&d-h>=0&&m-g>=0)return Ro.subVectors(s,i),r=(d-h)/(d-h+(m-g)),e.copy(i).addScaledVector(Ro,r);const _=1/(f+p+u);return o=p*_,r=u*_,e.copy(n).addScaledVector(ti,o).addScaledVector(ei,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Bc=0,wi=class extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bc++}),this.uuid=Xi(),this.name="",this.type="Material",this.blending=fi,this.side=En,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Oa,this.blendDst=Ua,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fi&&(n.blending=this.blending),this.side!==En&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const r in s){const a=s[r];delete a.metadata,o.push(a)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};const Ka={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ge={h:0,s:0,l:0},ss={h:0,s:0,l:0};function or(c,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?c+(t-c)*6*e:e<1/2?t:e<2/3?c+(t-c)*6*(2/3-e):c}class Nt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,fe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=fe.workingColorSpace){if(t=yc(t,1),e=Le(e,0,1),n=Le(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=or(o,s,t+1/3),this.g=or(o,s,t),this.b=or(o,s,t-1/3)}return fe.toWorkingColorSpace(this,i),this}setStyle(t,e=Je){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],r=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,fe.toWorkingColorSpace(this,e),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,fe.toWorkingColorSpace(this,e),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)){const a=parseFloat(s[1])/360,l=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(a,l,h,e)}break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,fe.toWorkingColorSpace(this,e),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,fe.toWorkingColorSpace(this,e),this;console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){const n=Ka[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mi(t.r),this.g=mi(t.g),this.b=mi(t.b),this}copyLinearToSRGB(t){return this.r=Ys(t.r),this.g=Ys(t.g),this.b=Ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return fe.fromWorkingColorSpace(le.copy(this),t),Le(le.r*255,0,255)<<16^Le(le.g*255,0,255)<<8^Le(le.b*255,0,255)<<0}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.fromWorkingColorSpace(le.copy(this),e);const n=le.r,i=le.g,s=le.b,o=Math.max(n,i,s),r=Math.min(n,i,s);let a,l;const h=(r+o)/2;if(r===o)a=0,l=0;else{const d=o-r;switch(l=h<=.5?d/(o+r):d/(2-o-r),o){case n:a=(i-s)/d+(i<s?6:0);break;case i:a=(s-n)/d+2;break;case s:a=(n-i)/d+4;break}a/=6}return t.h=a,t.s=l,t.l=h,t}getRGB(t,e=fe.workingColorSpace){return fe.fromWorkingColorSpace(le.copy(this),e),t.r=le.r,t.g=le.g,t.b=le.b,t}getStyle(t=Je){fe.fromWorkingColorSpace(le.copy(this),t);const e=le.r,n=le.g,i=le.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${e*255|0},${n*255|0},${i*255|0})`}offsetHSL(t,e,n){return this.getHSL(Ge),Ge.h+=t,Ge.s+=e,Ge.l+=n,this.setHSL(Ge.h,Ge.s,Ge.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ge),t.getHSL(ss);const n=qs(Ge.h,ss.h,e),i=qs(Ge.s,ss.s,e),s=qs(Ge.l,ss.l,e);return this.setHSL(n,i,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const le=new Nt;Nt.NAMES=Ka;class Dr extends wi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ga,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Zt=new U,rs=new Bt;class en{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=vo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)rs.fromBufferAttribute(this,e),rs.applyMatrix3(t),this.setXY(e,rs.x,rs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Zt.fromBufferAttribute(this,e),Zt.applyMatrix3(t),this.setXYZ(e,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Zt.fromBufferAttribute(this,e),Zt.applyMatrix4(t),this.setXYZ(e,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Zt.fromBufferAttribute(this,e),Zt.applyNormalMatrix(t),this.setXYZ(e,Zt.x,Zt.y,Zt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Zt.fromBufferAttribute(this,e),Zt.transformDirection(t),this.setXYZ(e,Zt.x,Zt.y,Zt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ki(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ki(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ki(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ki(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),i=Ee(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),i=Ee(i,this.array),s=Ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==vo&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ja extends en{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Qa extends en{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Jt extends en{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Oc=0;const ze=new jt,ar=new xe,ni=new U,Ae=new Yi,Ci=new Yi,re=new U;class we extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Oc++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qa(t)?Qa:Ja)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new _e().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ze.makeRotationFromQuaternion(t),this.applyMatrix4(ze),this}rotateX(t){return ze.makeRotationX(t),this.applyMatrix4(ze),this}rotateY(t){return ze.makeRotationY(t),this.applyMatrix4(ze),this}rotateZ(t){return ze.makeRotationZ(t),this.applyMatrix4(ze),this}translate(t,e,n){return ze.makeTranslation(t,e,n),this.applyMatrix4(ze),this}scale(t,e,n){return ze.makeScale(t,e,n),this.applyMatrix4(ze),this}lookAt(t){return ar.lookAt(t),ar.updateMatrix(),this.applyMatrix4(ar.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ni).negate(),this.translate(ni.x,ni.y,ni.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Jt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Ae.setFromBufferAttribute(s),this.morphTargetsRelative?(re.addVectors(this.boundingBox.min,Ae.min),this.boundingBox.expandByPoint(re),re.addVectors(this.boundingBox.max,Ae.max),this.boundingBox.expandByPoint(re)):(this.boundingBox.expandByPoint(Ae.min),this.boundingBox.expandByPoint(Ae.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ls);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(Ae.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const r=e[s];Ci.setFromBufferAttribute(r),this.morphTargetsRelative?(re.addVectors(Ae.min,Ci.min),Ae.expandByPoint(re),re.addVectors(Ae.max,Ci.max),Ae.expandByPoint(re)):(Ae.expandByPoint(Ci.min),Ae.expandByPoint(Ci.max))}Ae.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)re.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(re));if(e)for(let s=0,o=e.length;s<o;s++){const r=e[s],a=this.morphTargetsRelative;for(let l=0,h=r.count;l<h;l++)re.fromBufferAttribute(r,l),a&&(ni.fromBufferAttribute(t,l),re.add(ni)),i=Math.max(i,n.distanceToSquared(re))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,o=e.uv.array,r=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*r),4));const a=this.getAttribute("tangent").array,l=[],h=[];for(let R=0;R<r;R++)l[R]=new U,h[R]=new U;const d=new U,u=new U,m=new U,g=new Bt,p=new Bt,f=new Bt,_=new U,x=new U;function y(R,O,N){d.fromArray(i,R*3),u.fromArray(i,O*3),m.fromArray(i,N*3),g.fromArray(o,R*2),p.fromArray(o,O*2),f.fromArray(o,N*2),u.sub(d),m.sub(d),p.sub(g),f.sub(g);const A=1/(p.x*f.y-f.x*p.y);isFinite(A)&&(_.copy(u).multiplyScalar(f.y).addScaledVector(m,-p.y).multiplyScalar(A),x.copy(m).multiplyScalar(p.x).addScaledVector(u,-f.x).multiplyScalar(A),l[R].add(_),l[O].add(_),l[N].add(_),h[R].add(x),h[O].add(x),h[N].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let R=0,O=M.length;R<O;++R){const N=M[R],A=N.start,L=N.count;for(let I=A,z=A+L;I<z;I+=3)y(n[I+0],n[I+1],n[I+2])}const S=new U,C=new U,D=new U,v=new U;function b(R){D.fromArray(s,R*3),v.copy(D);const O=l[R];S.copy(O),S.sub(D.multiplyScalar(D.dot(O))).normalize(),C.crossVectors(v,O);const A=C.dot(h[R])<0?-1:1;a[R*4]=S.x,a[R*4+1]=S.y,a[R*4+2]=S.z,a[R*4+3]=A}for(let R=0,O=M.length;R<O;++R){const N=M[R],A=N.start,L=N.count;for(let I=A,z=A+L;I<z;I+=3)b(n[I+0]),b(n[I+1]),b(n[I+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const i=new U,s=new U,o=new U,r=new U,a=new U,l=new U,h=new U,d=new U;if(t)for(let u=0,m=t.count;u<m;u+=3){const g=t.getX(u+0),p=t.getX(u+1),f=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,p),o.fromBufferAttribute(e,f),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),r.fromBufferAttribute(n,g),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,f),r.add(h),a.add(h),l.add(h),n.setXYZ(g,r.x,r.y,r.z),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let u=0,m=e.count;u<m;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)re.fromBufferAttribute(t,e),re.normalize(),t.setXYZ(e,re.x,re.y,re.z)}toNonIndexed(){function t(r,a){const l=r.array,h=r.itemSize,d=r.normalized,u=new l.constructor(a.length*h);let m=0,g=0;for(let p=0,f=a.length;p<f;p++){r.isInterleavedBufferAttribute?m=a[p]*r.data.stride+r.offset:m=a[p]*h;for(let _=0;_<h;_++)u[g++]=l[m++]}return new en(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new we,n=this.index.array,i=this.attributes;for(const r in i){const a=i[r],l=t(a,n);e.setAttribute(r,l)}const s=this.morphAttributes;for(const r in s){const a=[],l=s[r];for(let h=0,d=l.length;h<d;h++){const u=l[h],m=t(u,n);a.push(m)}e.morphAttributes[r]=a}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let r=0,a=o.length;r<a;r++){const l=o[r];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const l in a)a[l]!==void 0&&(t[l]=a[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const a in n){const l=n[a];t.data.attributes[a]=l.toJSON(t.data)}const i={};let s=!1;for(const a in this.morphAttributes){const l=this.morphAttributes[a],h=[];for(let d=0,u=l.length;d<u;d++){const m=l[d];h.push(m.toJSON(t.data))}h.length>0&&(i[a]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],d=s[l];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const a=t.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Do=new jt,Ye=new $a,os=new Ls,Io=new U,Li=new U,Pi=new U,Ri=new U,lr=new U,as=new U,ls=new Bt,cs=new Bt,hs=new Bt,cr=new U,us=new U;class oe extends xe{constructor(t=new we,e=new Dr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const r=this.morphTargetInfluences;if(s&&r){as.set(0,0,0);for(let a=0,l=s.length;a<l;a++){const h=r[a],d=s[a];h!==0&&(lr.fromBufferAttribute(d,t),o?as.addScaledVector(lr,h):as.addScaledVector(lr.sub(e),h))}e.add(as)}return this.isSkinnedMesh&&this.boneTransform(t,e),e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),os.copy(n.boundingSphere),os.applyMatrix4(s),Ye.copy(t.ray).recast(t.near),os.containsPoint(Ye.origin)===!1&&(Ye.intersectSphere(os,Io)===null||Ye.origin.distanceToSquared(Io)>(t.far-t.near)**2))||(Do.copy(s).invert(),Ye.copy(t.ray).applyMatrix4(Do),n.boundingBox!==null&&Ye.intersectsBox(n.boundingBox)===!1))return;let o;const r=n.index,a=n.attributes.position,l=n.attributes.uv,h=n.attributes.uv2,d=n.groups,u=n.drawRange;if(r!==null)if(Array.isArray(i))for(let m=0,g=d.length;m<g;m++){const p=d[m],f=i[p.materialIndex],_=Math.max(p.start,u.start),x=Math.min(r.count,Math.min(p.start+p.count,u.start+u.count));for(let y=_,M=x;y<M;y+=3){const S=r.getX(y),C=r.getX(y+1),D=r.getX(y+2);o=ds(this,f,t,Ye,l,h,S,C,D),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=p.materialIndex,e.push(o))}}else{const m=Math.max(0,u.start),g=Math.min(r.count,u.start+u.count);for(let p=m,f=g;p<f;p+=3){const _=r.getX(p),x=r.getX(p+1),y=r.getX(p+2);o=ds(this,i,t,Ye,l,h,_,x,y),o&&(o.faceIndex=Math.floor(p/3),e.push(o))}}else if(a!==void 0)if(Array.isArray(i))for(let m=0,g=d.length;m<g;m++){const p=d[m],f=i[p.materialIndex],_=Math.max(p.start,u.start),x=Math.min(a.count,Math.min(p.start+p.count,u.start+u.count));for(let y=_,M=x;y<M;y+=3){const S=y,C=y+1,D=y+2;o=ds(this,f,t,Ye,l,h,S,C,D),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=p.materialIndex,e.push(o))}}else{const m=Math.max(0,u.start),g=Math.min(a.count,u.start+u.count);for(let p=m,f=g;p<f;p+=3){const _=p,x=p+1,y=p+2;o=ds(this,i,t,Ye,l,h,_,x,y),o&&(o.faceIndex=Math.floor(p/3),e.push(o))}}}}function Uc(c,t,e,n,i,s,o,r){let a;if(t.side===Re?a=n.intersectTriangle(o,s,i,!0,r):a=n.intersectTriangle(i,s,o,t.side===En,r),a===null)return null;us.copy(r),us.applyMatrix4(c.matrixWorld);const l=e.ray.origin.distanceTo(us);return l<e.near||l>e.far?null:{distance:l,point:us.clone(),object:c}}function ds(c,t,e,n,i,s,o,r,a){c.getVertexPosition(o,Li),c.getVertexPosition(r,Pi),c.getVertexPosition(a,Ri);const l=Uc(c,t,e,n,Li,Pi,Ri,cr);if(l){i&&(ls.fromBufferAttribute(i,o),cs.fromBufferAttribute(i,r),hs.fromBufferAttribute(i,a),l.uv=pn.getUV(cr,Li,Pi,Ri,ls,cs,hs,new Bt)),s&&(ls.fromBufferAttribute(s,o),cs.fromBufferAttribute(s,r),hs.fromBufferAttribute(s,a),l.uv2=pn.getUV(cr,Li,Pi,Ri,ls,cs,hs,new Bt));const h={a:o,b:r,c:a,normal:new U,materialIndex:0};pn.getNormal(Li,Pi,Ri,h.normal),l.face=h}return l}class Tn extends we{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const r=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const a=[],l=[],h=[],d=[];let u=0,m=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(a),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(d,2));function g(p,f,_,x,y,M,S,C,D,v,b){const R=M/D,O=S/v,N=M/2,A=S/2,L=C/2,I=D+1,z=v+1;let H=0,V=0;const X=new U;for(let K=0;K<z;K++){const rt=K*O-A;for(let F=0;F<I;F++){const J=F*R-N;X[p]=J*x,X[f]=rt*y,X[_]=L,l.push(X.x,X.y,X.z),X[p]=0,X[f]=0,X[_]=C>0?1:-1,h.push(X.x,X.y,X.z),d.push(F/D),d.push(1-K/v),H+=1}}for(let K=0;K<v;K++)for(let rt=0;rt<D;rt++){const F=u+rt+I*K,J=u+rt+I*(K+1),nt=u+(rt+1)+I*(K+1),k=u+(rt+1)+I*K;a.push(F,J,k),a.push(J,nt,k),V+=6}r.addGroup(m,V,b),m+=V,u+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function vi(c){const t={};for(const e in c){t[e]={};for(const n in c[e]){const i=c[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function pe(c){const t={};for(let e=0;e<c.length;e++){const n=vi(c[e]);for(const i in n)t[i]=n[i]}return t}function Gc(c){const t=[];for(let e=0;e<c.length;e++)t.push(c[e].clone());return t}function tl(c){return c.getRenderTarget()===null&&c.outputEncoding===Gt?Je:Wi}const kc={clone:vi,merge:pe};var Vc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jn extends wi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vc,this.fragmentShader=Wc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vi(t.uniforms),this.uniformsGroups=Gc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class el extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Pe extends el{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Mo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Hs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Mo*2*Math.atan(Math.tan(Hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Hs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const a=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/a,e-=o.offsetY*n/l,i*=o.width/a,n*=o.height/l}const r=this.filmOffset;r!==0&&(s+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ii=-90,si=1;class Hc extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Pe(ii,si,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Pe(ii,si,t,e);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Pe(ii,si,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const r=new Pe(ii,si,t,e);r.layers=this.layers,r.up.set(0,0,1),r.lookAt(0,-1,0),this.add(r);const a=new Pe(ii,si,t,e);a.layers=this.layers,a.up.set(0,1,0),a.lookAt(0,0,1),this.add(a);const l=new Pe(ii,si,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,r,a,l]=this.children,h=t.getRenderTarget(),d=t.toneMapping,u=t.xr.enabled;t.toneMapping=mn,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,r),t.setRenderTarget(n,4),t.render(e,a),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(h),t.toneMapping=d,t.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class nl extends Me{constructor(t,e,n,i,s,o,r,a,l,h){t=t!==void 0?t:[],e=e!==void 0?e:gi,super(t,e,n,i,s,o,r,a,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class qc extends Xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new nl(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Fe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Tn(5,5,5),s=new jn({name:"CubemapFromEquirect",uniforms:vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Re,blending:Sn});s.uniforms.tEquirect.value=e;const o=new oe(i,s),r=e.minFilter;return e.minFilter===ki&&(e.minFilter=Fe),new Hc(1,10,this).update(t,o),e.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const hr=new U,Xc=new U,jc=new _e;class zn{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=hr.subVectors(n,e).cross(Xc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(hr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||jc.getNormalMatrix(t),i=this.coplanarPoint(hr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ri=new Ls,fs=new U;class Ir{constructor(t=new zn,e=new zn,n=new zn,i=new zn,s=new zn,o=new zn){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(n),r[3].copy(i),r[4].copy(s),r[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],s=n[1],o=n[2],r=n[3],a=n[4],l=n[5],h=n[6],d=n[7],u=n[8],m=n[9],g=n[10],p=n[11],f=n[12],_=n[13],x=n[14],y=n[15];return e[0].setComponents(r-i,d-a,p-u,y-f).normalize(),e[1].setComponents(r+i,d+a,p+u,y+f).normalize(),e[2].setComponents(r+s,d+l,p+m,y+_).normalize(),e[3].setComponents(r-s,d-l,p-m,y-_).normalize(),e[4].setComponents(r-o,d-h,p-g,y-x).normalize(),e[5].setComponents(r+o,d+h,p+g,y+x).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(ri)}intersectsSprite(t){return ri.center.set(0,0,0),ri.radius=.7071067811865476,ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(fs.x=i.normal.x>0?t.max.x:t.min.x,fs.y=i.normal.y>0?t.max.y:t.min.y,fs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(fs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function il(){let c=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=c.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=c.requestAnimationFrame(i),t=!0)},stop:function(){c.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){c=s}}}function Yc(c,t){const e=t.isWebGL2,n=new WeakMap;function i(l,h){const d=l.array,u=l.usage,m=c.createBuffer();c.bindBuffer(h,m),c.bufferData(h,d,u),l.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,d){const u=h.array,m=h.updateRange;c.bindBuffer(d,l),m.count===-1?c.bufferSubData(d,0,u):(e?c.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):c.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(c.deleteBuffer(h.buffer),n.delete(l))}function a(l,h){if(l.isGLBufferAttribute){const u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);d===void 0?n.set(l,i(l,h)):d.version<l.version&&(s(d.buffer,l,h),d.version=l.version)}return{get:o,remove:r,update:a}}class yi extends we{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,r=Math.floor(n),a=Math.floor(i),l=r+1,h=a+1,d=t/r,u=e/a,m=[],g=[],p=[],f=[];for(let _=0;_<h;_++){const x=_*u-o;for(let y=0;y<l;y++){const M=y*d-s;g.push(M,-x,0),p.push(0,0,1),f.push(y/r),f.push(1-_/a)}}for(let _=0;_<a;_++)for(let x=0;x<r;x++){const y=x+l*_,M=x+l*(_+1),S=x+1+l*(_+1),C=x+1+l*_;m.push(y,M,C),m.push(M,S,C)}this.setIndex(m),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(p,3)),this.setAttribute("uv",new Jt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yi(t.width,t.height,t.widthSegments,t.heightSegments)}}var $c=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Zc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Jc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,th=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eh="vec3 transformed = vec3( position );",nh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ih=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,sh=`#ifdef USE_IRIDESCENCE
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
#endif`,rh=`#ifdef USE_BUMPMAP
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
#endif`,oh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ah=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ch=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,fh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ph=`#define PI 3.141592653589793
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
}`,mh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gh=`vec3 transformedNormal = objectNormal;
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
#endif`,_h=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,vh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mh="gl_FragColor = linearToOutputTexel( gl_FragColor );",wh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bh=`#ifdef USE_ENVMAP
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
#endif`,Sh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Eh=`#ifdef USE_ENVMAP
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
#endif`,Th=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ah=`#ifdef USE_ENVMAP
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
#endif`,Ch=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ph=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dh=`#ifdef USE_GRADIENTMAP
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
}`,Ih=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bh=`uniform bool receiveShadow;
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
#endif`,Oh=`#if defined( USE_ENVMAP )
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
#endif`,Uh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wh=`PhysicalMaterial material;
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
#endif`,Hh=`struct PhysicalMaterial {
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
}`,qh=`
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
#endif`,Xh=`#if defined( RE_IndirectDiffuse )
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
#endif`,jh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Yh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$h=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Kh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Jh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,eu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,su=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ru=`#ifdef USE_MORPHNORMALS
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
#endif`,ou=`#ifdef USE_MORPHTARGETS
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
#endif`,au=`#ifdef USE_MORPHTARGETS
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
#endif`,lu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,cu=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,hu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,du=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fu=`#ifdef USE_NORMALMAP
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
#endif`,pu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,mu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,gu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,_u=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Su=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Eu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Au=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lu=`float getShadowMask() {
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
}`,Pu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ru=`#ifdef USE_SKINNING
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
#endif`,Du=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Iu=`#ifdef USE_SKINNING
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
#endif`,zu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ou=`#ifdef USE_TRANSMISSION
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
#endif`,Uu=`#ifdef USE_TRANSMISSION
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
#endif`,Gu=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,ku=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Vu=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Wu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Hu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,qu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Xu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ju=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yu=`uniform sampler2D t2D;
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
}`,$u=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ku=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ju=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Qu=`#include <common>
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
}`,td=`#if DEPTH_PACKING == 3200
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
}`,ed=`#define DISTANCE
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
}`,nd=`#define DISTANCE
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
}`,id=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,rd=`uniform float scale;
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
}`,od=`uniform vec3 diffuse;
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
}`,ad=`#include <common>
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
}`,ld=`uniform vec3 diffuse;
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
}`,cd=`#define LAMBERT
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
}`,hd=`#define LAMBERT
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
}`,ud=`#define MATCAP
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
}`,dd=`#define MATCAP
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
}`,fd=`#define NORMAL
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
}`,pd=`#define NORMAL
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
}`,md=`#define PHONG
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
}`,gd=`#define PHONG
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
}`,_d=`#define STANDARD
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
}`,xd=`#define STANDARD
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
}`,vd=`#define TOON
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
}`,yd=`#define TOON
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
}`,Md=`uniform float size;
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
}`,wd=`uniform vec3 diffuse;
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
}`,bd=`#include <common>
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
}`,Sd=`uniform vec3 color;
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
}`,Ed=`uniform float rotation;
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
}`,Td=`uniform vec3 diffuse;
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
}`,St={alphamap_fragment:$c,alphamap_pars_fragment:Zc,alphatest_fragment:Kc,alphatest_pars_fragment:Jc,aomap_fragment:Qc,aomap_pars_fragment:th,begin_vertex:eh,beginnormal_vertex:nh,bsdfs:ih,iridescence_fragment:sh,bumpmap_pars_fragment:rh,clipping_planes_fragment:oh,clipping_planes_pars_fragment:ah,clipping_planes_pars_vertex:lh,clipping_planes_vertex:ch,color_fragment:hh,color_pars_fragment:uh,color_pars_vertex:dh,color_vertex:fh,common:ph,cube_uv_reflection_fragment:mh,defaultnormal_vertex:gh,displacementmap_pars_vertex:_h,displacementmap_vertex:xh,emissivemap_fragment:vh,emissivemap_pars_fragment:yh,encodings_fragment:Mh,encodings_pars_fragment:wh,envmap_fragment:bh,envmap_common_pars_fragment:Sh,envmap_pars_fragment:Eh,envmap_pars_vertex:Th,envmap_physical_pars_fragment:Oh,envmap_vertex:Ah,fog_vertex:Ch,fog_pars_vertex:Lh,fog_fragment:Ph,fog_pars_fragment:Rh,gradientmap_pars_fragment:Dh,lightmap_fragment:Ih,lightmap_pars_fragment:zh,lights_lambert_fragment:Fh,lights_lambert_pars_fragment:Nh,lights_pars_begin:Bh,lights_toon_fragment:Uh,lights_toon_pars_fragment:Gh,lights_phong_fragment:kh,lights_phong_pars_fragment:Vh,lights_physical_fragment:Wh,lights_physical_pars_fragment:Hh,lights_fragment_begin:qh,lights_fragment_maps:Xh,lights_fragment_end:jh,logdepthbuf_fragment:Yh,logdepthbuf_pars_fragment:$h,logdepthbuf_pars_vertex:Zh,logdepthbuf_vertex:Kh,map_fragment:Jh,map_pars_fragment:Qh,map_particle_fragment:tu,map_particle_pars_fragment:eu,metalnessmap_fragment:nu,metalnessmap_pars_fragment:iu,morphcolor_vertex:su,morphnormal_vertex:ru,morphtarget_pars_vertex:ou,morphtarget_vertex:au,normal_fragment_begin:lu,normal_fragment_maps:cu,normal_pars_fragment:hu,normal_pars_vertex:uu,normal_vertex:du,normalmap_pars_fragment:fu,clearcoat_normal_fragment_begin:pu,clearcoat_normal_fragment_maps:mu,clearcoat_pars_fragment:gu,iridescence_pars_fragment:_u,output_fragment:xu,packing:vu,premultiplied_alpha_fragment:yu,project_vertex:Mu,dithering_fragment:wu,dithering_pars_fragment:bu,roughnessmap_fragment:Su,roughnessmap_pars_fragment:Eu,shadowmap_pars_fragment:Tu,shadowmap_pars_vertex:Au,shadowmap_vertex:Cu,shadowmask_pars_fragment:Lu,skinbase_vertex:Pu,skinning_pars_vertex:Ru,skinning_vertex:Du,skinnormal_vertex:Iu,specularmap_fragment:zu,specularmap_pars_fragment:Fu,tonemapping_fragment:Nu,tonemapping_pars_fragment:Bu,transmission_fragment:Ou,transmission_pars_fragment:Uu,uv_pars_fragment:Gu,uv_pars_vertex:ku,uv_vertex:Vu,uv2_pars_fragment:Wu,uv2_pars_vertex:Hu,uv2_vertex:qu,worldpos_vertex:Xu,background_vert:ju,background_frag:Yu,backgroundCube_vert:$u,backgroundCube_frag:Zu,cube_vert:Ku,cube_frag:Ju,depth_vert:Qu,depth_frag:td,distanceRGBA_vert:ed,distanceRGBA_frag:nd,equirect_vert:id,equirect_frag:sd,linedashed_vert:rd,linedashed_frag:od,meshbasic_vert:ad,meshbasic_frag:ld,meshlambert_vert:cd,meshlambert_frag:hd,meshmatcap_vert:ud,meshmatcap_frag:dd,meshnormal_vert:fd,meshnormal_frag:pd,meshphong_vert:md,meshphong_frag:gd,meshphysical_vert:_d,meshphysical_frag:xd,meshtoon_vert:vd,meshtoon_frag:yd,points_vert:Md,points_frag:wd,shadow_vert:bd,shadow_frag:Sd,sprite_vert:Ed,sprite_frag:Td},it={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new _e},uv2Transform:{value:new _e},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new _e}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new _e}}},Qe={basic:{uniforms:pe([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:pe([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Nt(0)}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:pe([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:pe([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:pe([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Nt(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:pe([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:pe([it.points,it.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:pe([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:pe([it.common,it.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:pe([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:pe([it.sprite,it.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new _e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distanceRGBA:{uniforms:pe([it.common,it.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distanceRGBA_vert,fragmentShader:St.distanceRGBA_frag},shadow:{uniforms:pe([it.lights,it.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};Qe.physical={uniforms:pe([Qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};const ps={r:0,b:0,g:0};function Ad(c,t,e,n,i,s,o){const r=new Nt(0);let a=s===!0?0:1,l,h,d=null,u=0,m=null;function g(f,_){let x=!1,y=_.isScene===!0?_.background:null;y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y));const M=c.xr,S=M.getSession&&M.getSession();S&&S.environmentBlendMode==="additive"&&(y=null),y===null?p(r,a):y&&y.isColor&&(p(y,1),x=!0),(c.autoClear||x)&&c.clear(c.autoClearColor,c.autoClearDepth,c.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Cs)?(h===void 0&&(h=new oe(new Tn(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:vi(Qe.backgroundCube.uniforms),vertexShader:Qe.backgroundCube.vertexShader,fragmentShader:Qe.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,D,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=y.encoding!==Gt,(d!==y||u!==y.version||m!==c.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,m=c.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new oe(new yi(2,2),new jn({name:"BackgroundMaterial",uniforms:vi(Qe.background.uniforms),vertexShader:Qe.background.vertexShader,fragmentShader:Qe.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=y.encoding!==Gt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||m!==c.toneMapping)&&(l.material.needsUpdate=!0,d=y,u=y.version,m=c.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function p(f,_){f.getRGB(ps,tl(c)),n.buffers.color.setClear(ps.r,ps.g,ps.b,_,o)}return{getClearColor:function(){return r},setClearColor:function(f,_=1){r.set(f),a=_,p(r,a)},getClearAlpha:function(){return a},setClearAlpha:function(f){a=f,p(r,a)},render:g}}function Cd(c,t,e,n){const i=c.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,r={},a=f(null);let l=a,h=!1;function d(L,I,z,H,V){let X=!1;if(o){const K=p(H,z,I);l!==K&&(l=K,m(l.object)),X=_(L,H,z,V),X&&x(L,H,z,V)}else{const K=I.wireframe===!0;(l.geometry!==H.id||l.program!==z.id||l.wireframe!==K)&&(l.geometry=H.id,l.program=z.id,l.wireframe=K,X=!0)}V!==null&&e.update(V,34963),(X||h)&&(h=!1,v(L,I,z,H),V!==null&&c.bindBuffer(34963,e.get(V).buffer))}function u(){return n.isWebGL2?c.createVertexArray():s.createVertexArrayOES()}function m(L){return n.isWebGL2?c.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?c.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function p(L,I,z){const H=z.wireframe===!0;let V=r[L.id];V===void 0&&(V={},r[L.id]=V);let X=V[I.id];X===void 0&&(X={},V[I.id]=X);let K=X[H];return K===void 0&&(K=f(u()),X[H]=K),K}function f(L){const I=[],z=[],H=[];for(let V=0;V<i;V++)I[V]=0,z[V]=0,H[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:z,attributeDivisors:H,object:L,attributes:{},index:null}}function _(L,I,z,H){const V=l.attributes,X=I.attributes;let K=0;const rt=z.getAttributes();for(const F in rt)if(rt[F].location>=0){const nt=V[F];let k=X[F];if(k===void 0&&(F==="instanceMatrix"&&L.instanceMatrix&&(k=L.instanceMatrix),F==="instanceColor"&&L.instanceColor&&(k=L.instanceColor)),nt===void 0||nt.attribute!==k||k&&nt.data!==k.data)return!0;K++}return l.attributesNum!==K||l.index!==H}function x(L,I,z,H){const V={},X=I.attributes;let K=0;const rt=z.getAttributes();for(const F in rt)if(rt[F].location>=0){let nt=X[F];nt===void 0&&(F==="instanceMatrix"&&L.instanceMatrix&&(nt=L.instanceMatrix),F==="instanceColor"&&L.instanceColor&&(nt=L.instanceColor));const k={};k.attribute=nt,nt&&nt.data&&(k.data=nt.data),V[F]=k,K++}l.attributes=V,l.attributesNum=K,l.index=H}function y(){const L=l.newAttributes;for(let I=0,z=L.length;I<z;I++)L[I]=0}function M(L){S(L,0)}function S(L,I){const z=l.newAttributes,H=l.enabledAttributes,V=l.attributeDivisors;z[L]=1,H[L]===0&&(c.enableVertexAttribArray(L),H[L]=1),V[L]!==I&&((n.isWebGL2?c:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,I),V[L]=I)}function C(){const L=l.newAttributes,I=l.enabledAttributes;for(let z=0,H=I.length;z<H;z++)I[z]!==L[z]&&(c.disableVertexAttribArray(z),I[z]=0)}function D(L,I,z,H,V,X){n.isWebGL2===!0&&(z===5124||z===5125)?c.vertexAttribIPointer(L,I,z,V,X):c.vertexAttribPointer(L,I,z,H,V,X)}function v(L,I,z,H){if(n.isWebGL2===!1&&(L.isInstancedMesh||H.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();const V=H.attributes,X=z.getAttributes(),K=I.defaultAttributeValues;for(const rt in X){const F=X[rt];if(F.location>=0){let J=V[rt];if(J===void 0&&(rt==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),rt==="instanceColor"&&L.instanceColor&&(J=L.instanceColor)),J!==void 0){const nt=J.normalized,k=J.itemSize,ht=e.get(J);if(ht===void 0)continue;const ut=ht.buffer,ft=ht.type,pt=ht.bytesPerElement;if(J.isInterleavedBufferAttribute){const yt=J.data,Tt=yt.stride,Ct=J.offset;if(yt.isInstancedInterleavedBuffer){for(let zt=0;zt<F.locationSize;zt++)S(F.location+zt,yt.meshPerAttribute);L.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let zt=0;zt<F.locationSize;zt++)M(F.location+zt);c.bindBuffer(34962,ut);for(let zt=0;zt<F.locationSize;zt++)D(F.location+zt,k/F.locationSize,ft,nt,Tt*pt,(Ct+k/F.locationSize*zt)*pt)}else{if(J.isInstancedBufferAttribute){for(let yt=0;yt<F.locationSize;yt++)S(F.location+yt,J.meshPerAttribute);L.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let yt=0;yt<F.locationSize;yt++)M(F.location+yt);c.bindBuffer(34962,ut);for(let yt=0;yt<F.locationSize;yt++)D(F.location+yt,k/F.locationSize,ft,nt,k*pt,k/F.locationSize*yt*pt)}}else if(K!==void 0){const nt=K[rt];if(nt!==void 0)switch(nt.length){case 2:c.vertexAttrib2fv(F.location,nt);break;case 3:c.vertexAttrib3fv(F.location,nt);break;case 4:c.vertexAttrib4fv(F.location,nt);break;default:c.vertexAttrib1fv(F.location,nt)}}}}C()}function b(){N();for(const L in r){const I=r[L];for(const z in I){const H=I[z];for(const V in H)g(H[V].object),delete H[V];delete I[z]}delete r[L]}}function R(L){if(r[L.id]===void 0)return;const I=r[L.id];for(const z in I){const H=I[z];for(const V in H)g(H[V].object),delete H[V];delete I[z]}delete r[L.id]}function O(L){for(const I in r){const z=r[I];if(z[L.id]===void 0)continue;const H=z[L.id];for(const V in H)g(H[V].object),delete H[V];delete z[L.id]}}function N(){A(),h=!0,l!==a&&(l=a,m(l.object))}function A(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:N,resetDefaultState:A,dispose:b,releaseStatesOfGeometry:R,releaseStatesOfProgram:O,initAttributes:y,enableAttribute:M,disableUnusedAttributes:C}}function Ld(c,t,e,n){const i=n.isWebGL2;let s;function o(l){s=l}function r(l,h){c.drawArrays(s,l,h),e.update(h,s,1)}function a(l,h,d){if(d===0)return;let u,m;if(i)u=c,m="drawArraysInstanced";else if(u=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[m](s,l,h,d),e.update(h,s,d)}this.setMode=o,this.render=r,this.renderInstances=a}function Pd(c,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");n=c.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(D){if(D==="highp"){if(c.getShaderPrecisionFormat(35633,36338).precision>0&&c.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";D="mediump"}return D==="mediump"&&c.getShaderPrecisionFormat(35633,36337).precision>0&&c.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&c instanceof WebGL2RenderingContext;let r=e.precision!==void 0?e.precision:"highp";const a=s(r);a!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",a,"instead."),r=a);const l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=c.getParameter(34930),u=c.getParameter(35660),m=c.getParameter(3379),g=c.getParameter(34076),p=c.getParameter(34921),f=c.getParameter(36347),_=c.getParameter(36348),x=c.getParameter(36349),y=u>0,M=o||t.has("OES_texture_float"),S=y&&M,C=o?c.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:r,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:f,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:y,floatFragmentTextures:M,floatVertexTextures:S,maxSamples:C}}function Rd(c){const t=this;let e=null,n=0,i=!1,s=!1;const o=new zn,r=new _e,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const m=d.length!==0||u||n!==0||i;return i=u,n=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,m){const g=d.clippingPlanes,p=d.clipIntersection,f=d.clipShadows,_=c.get(d);if(!i||g===null||g.length===0||s&&!f)s?h(null):l();else{const x=s?0:n,y=x*4;let M=_.clippingState||null;a.value=M,M=h(g,u,y,m);for(let S=0;S!==y;++S)M[S]=e[S];_.clippingState=M,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=x}};function l(){a.value!==e&&(a.value=e,a.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,m,g){const p=d!==null?d.length:0;let f=null;if(p!==0){if(f=a.value,g!==!0||f===null){const _=m+p*4,x=u.matrixWorldInverse;r.getNormalMatrix(x),(f===null||f.length<_)&&(f=new Float32Array(_));for(let y=0,M=m;y!==p;++y,M+=4)o.copy(d[y]).applyMatrix4(x,r),o.normal.toArray(f,M),f[M+3]=o.constant}a.value=f,a.needsUpdate=!0}return t.numPlanes=p,t.numIntersection=0,f}}function Dd(c){let t=new WeakMap;function e(o,r){return r===Er?o.mapping=gi:r===Tr&&(o.mapping=_i),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const r=o.mapping;if(r===Er||r===Tr)if(t.has(o)){const a=t.get(o).texture;return e(a,o.mapping)}else{const a=o.image;if(a&&a.height>0){const l=new qc(a.height/2);return l.fromEquirectangularTexture(c,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const r=o.target;r.removeEventListener("dispose",i);const a=t.get(r);a!==void 0&&(t.delete(r),a.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Id extends el{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,r=i+e,a=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,r-=h*this.view.offsetY,a=r-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,r,a,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const hi=4,zo=[.125,.215,.35,.446,.526,.582],Nn=20,ur=new Id,Fo=new Nt;let dr=null;const Fn=(1+Math.sqrt(5))/2,oi=1/Fn,No=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Fn,oi),new U(0,Fn,-oi),new U(oi,0,Fn),new U(-oi,0,Fn),new U(Fn,oi,0),new U(-Fn,oi,0)];class Bo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){dr=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Go(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(dr),t.scissorTest=!1,ms(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gi||t.mapping===_i?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),dr=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Fe,minFilter:Fe,generateMipmaps:!1,type:Vi,format:We,encoding:qn,depthBuffer:!1},i=Oo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oo(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zd(s)),this._blurMaterial=Fd(s,t,e)}return i}_compileMaterial(t){const e=new oe(this._lodPlanes[0],t);this._renderer.compile(e,ur)}_sceneToCubeUV(t,e,n,i){const r=new Pe(90,1,e,n),a=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Fo),h.toneMapping=mn,h.autoClear=!1;const m=new Dr({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),g=new oe(new Tn,m);let p=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,p=!0):(m.color.copy(Fo),p=!0);for(let _=0;_<6;_++){const x=_%3;x===0?(r.up.set(0,a[_],0),r.lookAt(l[_],0,0)):x===1?(r.up.set(0,0,a[_]),r.lookAt(0,l[_],0)):(r.up.set(0,a[_],0),r.lookAt(0,0,l[_]));const y=this._cubeSize;ms(i,x*y,_>2?y:0,y,y),h.setRenderTarget(i),p&&h.render(g,r),h.render(t,r)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===gi||t.mapping===_i;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Go()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uo());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new oe(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=t;const a=this._cubeSize;ms(e,0,0,3*a,2*a),n.setRenderTarget(e),n.render(o,ur)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=No[(i-1)%No.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,r){const a=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new oe(this._lodPlanes[i],l),u=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Nn-1),p=s/g,f=isFinite(s)?1+Math.floor(h*p):Nn;f>Nn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Nn}`);const _=[];let x=0;for(let D=0;D<Nn;++D){const v=D/p,b=Math.exp(-v*v/2);_.push(b),D===0?x+=b:D<f&&(x+=2*b)}for(let D=0;D<_.length;D++)_[D]=_[D]/x;u.envMap.value=t.texture,u.samples.value=f,u.weights.value=_,u.latitudinal.value=o==="latitudinal",r&&(u.poleAxis.value=r);const{_lodMax:y}=this;u.dTheta.value=g,u.mipInt.value=y-n;const M=this._sizeLods[i],S=3*M*(i>y-hi?i-y+hi:0),C=4*(this._cubeSize-M);ms(e,S,C,3*M,2*M),a.setRenderTarget(e),a.render(d,ur)}}function zd(c){const t=[],e=[],n=[];let i=c;const s=c-hi+1+zo.length;for(let o=0;o<s;o++){const r=Math.pow(2,i);e.push(r);let a=1/r;o>c-hi?a=zo[o-c+hi-1]:o===0&&(a=0),n.push(a);const l=1/(r-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,p=3,f=2,_=1,x=new Float32Array(p*g*m),y=new Float32Array(f*g*m),M=new Float32Array(_*g*m);for(let C=0;C<m;C++){const D=C%3*2/3-1,v=C>2?0:-1,b=[D,v,0,D+2/3,v,0,D+2/3,v+1,0,D,v,0,D+2/3,v+1,0,D,v+1,0];x.set(b,p*g*C),y.set(u,f*g*C);const R=[C,C,C,C,C,C];M.set(R,_*g*C)}const S=new we;S.setAttribute("position",new en(x,p)),S.setAttribute("uv",new en(y,f)),S.setAttribute("faceIndex",new en(M,_)),t.push(S),i>hi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Oo(c,t,e){const n=new Xn(c,t,e);return n.texture.mapping=Cs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ms(c,t,e,n,i){c.viewport.set(t,e,n,i),c.scissor.set(t,e,n,i)}function Fd(c,t,e){const n=new Float32Array(Nn),i=new U(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:Nn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${c}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:zr(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Uo(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zr(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Go(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function zr(){return`

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
	`}function Nd(c){let t=new WeakMap,e=null;function n(r){if(r&&r.isTexture){const a=r.mapping,l=a===Er||a===Tr,h=a===gi||a===_i;if(l||h)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let d=t.get(r);return e===null&&(e=new Bo(c)),d=l?e.fromEquirectangular(r,d):e.fromCubemap(r,d),t.set(r,d),d.texture}else{if(t.has(r))return t.get(r).texture;{const d=r.image;if(l&&d&&d.height>0||h&&d&&i(d)){e===null&&(e=new Bo(c));const u=l?e.fromEquirectangular(r):e.fromCubemap(r);return t.set(r,u),r.addEventListener("dispose",s),u.texture}else return null}}}return r}function i(r){let a=0;const l=6;for(let h=0;h<l;h++)r[h]!==void 0&&a++;return a===l}function s(r){const a=r.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Bd(c){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=c.getExtension("WEBGL_depth_texture")||c.getExtension("MOZ_WEBGL_depth_texture")||c.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=c.getExtension("EXT_texture_filter_anisotropic")||c.getExtension("MOZ_EXT_texture_filter_anisotropic")||c.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=c.getExtension("WEBGL_compressed_texture_s3tc")||c.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||c.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=c.getExtension("WEBGL_compressed_texture_pvrtc")||c.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=c.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Od(c,t,e,n){const i={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete i[u.id];const m=s.get(u);m&&(t.remove(m),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function r(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function a(d){const u=d.attributes;for(const g in u)t.update(u[g],34962);const m=d.morphAttributes;for(const g in m){const p=m[g];for(let f=0,_=p.length;f<_;f++)t.update(p[f],34962)}}function l(d){const u=[],m=d.index,g=d.attributes.position;let p=0;if(m!==null){const x=m.array;p=m.version;for(let y=0,M=x.length;y<M;y+=3){const S=x[y+0],C=x[y+1],D=x[y+2];u.push(S,C,C,D,D,S)}}else{const x=g.array;p=g.version;for(let y=0,M=x.length/3-1;y<M;y+=3){const S=y+0,C=y+1,D=y+2;u.push(S,C,C,D,D,S)}}const f=new(qa(u)?Qa:Ja)(u,1);f.version=p;const _=s.get(d);_&&t.remove(_),s.set(d,f)}function h(d){const u=s.get(d);if(u){const m=d.index;m!==null&&u.version<m.version&&l(d)}else l(d);return s.get(d)}return{get:r,update:a,getWireframeAttribute:h}}function Ud(c,t,e,n){const i=n.isWebGL2;let s;function o(u){s=u}let r,a;function l(u){r=u.type,a=u.bytesPerElement}function h(u,m){c.drawElements(s,m,r,u*a),e.update(m,s,1)}function d(u,m,g){if(g===0)return;let p,f;if(i)p=c,f="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,m,r,u*a,g),e.update(m,s,g)}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=d}function Gd(c){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,r){switch(e.calls++,o){case 4:e.triangles+=r*(s/3);break;case 1:e.lines+=r*(s/2);break;case 3:e.lines+=r*(s-1);break;case 2:e.lines+=r*s;break;case 0:e.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function kd(c,t){return c[0]-t[0]}function Vd(c,t){return Math.abs(t[1])-Math.abs(c[1])}function Wd(c,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new kt,r=[];for(let l=0;l<8;l++)r[l]=[l,0];function a(l,h,d){const u=l.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=g!==void 0?g.length:0;let f=s.get(h);if(f===void 0||f.count!==p){let I=function(){A.dispose(),s.delete(h),h.removeEventListener("dispose",I)};var m=I;f!==void 0&&f.texture.dispose();const y=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],v=h.morphAttributes.color||[];let b=0;y===!0&&(b=1),M===!0&&(b=2),S===!0&&(b=3);let R=h.attributes.position.count*b,O=1;R>t.maxTextureSize&&(O=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const N=new Float32Array(R*O*4*p),A=new Ya(N,R,O,p);A.type=Gn,A.needsUpdate=!0;const L=b*4;for(let z=0;z<p;z++){const H=C[z],V=D[z],X=v[z],K=R*O*4*z;for(let rt=0;rt<H.count;rt++){const F=rt*L;y===!0&&(o.fromBufferAttribute(H,rt),N[K+F+0]=o.x,N[K+F+1]=o.y,N[K+F+2]=o.z,N[K+F+3]=0),M===!0&&(o.fromBufferAttribute(V,rt),N[K+F+4]=o.x,N[K+F+5]=o.y,N[K+F+6]=o.z,N[K+F+7]=0),S===!0&&(o.fromBufferAttribute(X,rt),N[K+F+8]=o.x,N[K+F+9]=o.y,N[K+F+10]=o.z,N[K+F+11]=X.itemSize===4?o.w:1)}}f={count:p,texture:A,size:new Bt(R,O)},s.set(h,f),h.addEventListener("dispose",I)}let _=0;for(let y=0;y<u.length;y++)_+=u[y];const x=h.morphTargetsRelative?1:1-_;d.getUniforms().setValue(c,"morphTargetBaseInfluence",x),d.getUniforms().setValue(c,"morphTargetInfluences",u),d.getUniforms().setValue(c,"morphTargetsTexture",f.texture,e),d.getUniforms().setValue(c,"morphTargetsTextureSize",f.size)}else{const g=u===void 0?0:u.length;let p=n[h.id];if(p===void 0||p.length!==g){p=[];for(let M=0;M<g;M++)p[M]=[M,0];n[h.id]=p}for(let M=0;M<g;M++){const S=p[M];S[0]=M,S[1]=u[M]}p.sort(Vd);for(let M=0;M<8;M++)M<g&&p[M][1]?(r[M][0]=p[M][0],r[M][1]=p[M][1]):(r[M][0]=Number.MAX_SAFE_INTEGER,r[M][1]=0);r.sort(kd);const f=h.morphAttributes.position,_=h.morphAttributes.normal;let x=0;for(let M=0;M<8;M++){const S=r[M],C=S[0],D=S[1];C!==Number.MAX_SAFE_INTEGER&&D?(f&&h.getAttribute("morphTarget"+M)!==f[C]&&h.setAttribute("morphTarget"+M,f[C]),_&&h.getAttribute("morphNormal"+M)!==_[C]&&h.setAttribute("morphNormal"+M,_[C]),i[M]=D,x+=D):(f&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),_&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),i[M]=0)}const y=h.morphTargetsRelative?1:1-x;d.getUniforms().setValue(c,"morphTargetBaseInfluence",y),d.getUniforms().setValue(c,"morphTargetInfluences",i)}}return{update:a}}function Hd(c,t,e,n){let i=new WeakMap;function s(a){const l=n.render.frame,h=a.geometry,d=t.get(a,h);return i.get(d)!==l&&(t.update(d),i.set(d,l)),a.isInstancedMesh&&(a.hasEventListener("dispose",r)===!1&&a.addEventListener("dispose",r),e.update(a.instanceMatrix,34962),a.instanceColor!==null&&e.update(a.instanceColor,34962)),d}function o(){i=new WeakMap}function r(a){const l=a.target;l.removeEventListener("dispose",r),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}const sl=new Me,rl=new Ya,ol=new Lc,al=new nl,ko=[],Vo=[],Wo=new Float32Array(16),Ho=new Float32Array(9),qo=new Float32Array(4);function bi(c,t,e){const n=c[0];if(n<=0||n>0)return c;const i=t*e;let s=ko[i];if(s===void 0&&(s=new Float32Array(i),ko[i]=s),t!==0){n.toArray(s,0);for(let o=1,r=0;o!==t;++o)r+=e,c[o].toArray(s,r)}return s}function te(c,t){if(c.length!==t.length)return!1;for(let e=0,n=c.length;e<n;e++)if(c[e]!==t[e])return!1;return!0}function ee(c,t){for(let e=0,n=t.length;e<n;e++)c[e]=t[e]}function Rs(c,t){let e=Vo[t];e===void 0&&(e=new Int32Array(t),Vo[t]=e);for(let n=0;n!==t;++n)e[n]=c.allocateTextureUnit();return e}function qd(c,t){const e=this.cache;e[0]!==t&&(c.uniform1f(this.addr,t),e[0]=t)}function Xd(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(c.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(te(e,t))return;c.uniform2fv(this.addr,t),ee(e,t)}}function jd(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(c.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(c.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(te(e,t))return;c.uniform3fv(this.addr,t),ee(e,t)}}function Yd(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(c.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(te(e,t))return;c.uniform4fv(this.addr,t),ee(e,t)}}function $d(c,t){const e=this.cache,n=t.elements;if(n===void 0){if(te(e,t))return;c.uniformMatrix2fv(this.addr,!1,t),ee(e,t)}else{if(te(e,n))return;qo.set(n),c.uniformMatrix2fv(this.addr,!1,qo),ee(e,n)}}function Zd(c,t){const e=this.cache,n=t.elements;if(n===void 0){if(te(e,t))return;c.uniformMatrix3fv(this.addr,!1,t),ee(e,t)}else{if(te(e,n))return;Ho.set(n),c.uniformMatrix3fv(this.addr,!1,Ho),ee(e,n)}}function Kd(c,t){const e=this.cache,n=t.elements;if(n===void 0){if(te(e,t))return;c.uniformMatrix4fv(this.addr,!1,t),ee(e,t)}else{if(te(e,n))return;Wo.set(n),c.uniformMatrix4fv(this.addr,!1,Wo),ee(e,n)}}function Jd(c,t){const e=this.cache;e[0]!==t&&(c.uniform1i(this.addr,t),e[0]=t)}function Qd(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(c.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(te(e,t))return;c.uniform2iv(this.addr,t),ee(e,t)}}function tf(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(c.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(te(e,t))return;c.uniform3iv(this.addr,t),ee(e,t)}}function ef(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(c.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(te(e,t))return;c.uniform4iv(this.addr,t),ee(e,t)}}function nf(c,t){const e=this.cache;e[0]!==t&&(c.uniform1ui(this.addr,t),e[0]=t)}function sf(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(c.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(te(e,t))return;c.uniform2uiv(this.addr,t),ee(e,t)}}function rf(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(c.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(te(e,t))return;c.uniform3uiv(this.addr,t),ee(e,t)}}function of(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(c.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(te(e,t))return;c.uniform4uiv(this.addr,t),ee(e,t)}}function af(c,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(c.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||sl,i)}function lf(c,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(c.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||ol,i)}function cf(c,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(c.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||al,i)}function hf(c,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(c.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||rl,i)}function uf(c){switch(c){case 5126:return qd;case 35664:return Xd;case 35665:return jd;case 35666:return Yd;case 35674:return $d;case 35675:return Zd;case 35676:return Kd;case 5124:case 35670:return Jd;case 35667:case 35671:return Qd;case 35668:case 35672:return tf;case 35669:case 35673:return ef;case 5125:return nf;case 36294:return sf;case 36295:return rf;case 36296:return of;case 35678:case 36198:case 36298:case 36306:case 35682:return af;case 35679:case 36299:case 36307:return lf;case 35680:case 36300:case 36308:case 36293:return cf;case 36289:case 36303:case 36311:case 36292:return hf}}function df(c,t){c.uniform1fv(this.addr,t)}function ff(c,t){const e=bi(t,this.size,2);c.uniform2fv(this.addr,e)}function pf(c,t){const e=bi(t,this.size,3);c.uniform3fv(this.addr,e)}function mf(c,t){const e=bi(t,this.size,4);c.uniform4fv(this.addr,e)}function gf(c,t){const e=bi(t,this.size,4);c.uniformMatrix2fv(this.addr,!1,e)}function _f(c,t){const e=bi(t,this.size,9);c.uniformMatrix3fv(this.addr,!1,e)}function xf(c,t){const e=bi(t,this.size,16);c.uniformMatrix4fv(this.addr,!1,e)}function vf(c,t){c.uniform1iv(this.addr,t)}function yf(c,t){c.uniform2iv(this.addr,t)}function Mf(c,t){c.uniform3iv(this.addr,t)}function wf(c,t){c.uniform4iv(this.addr,t)}function bf(c,t){c.uniform1uiv(this.addr,t)}function Sf(c,t){c.uniform2uiv(this.addr,t)}function Ef(c,t){c.uniform3uiv(this.addr,t)}function Tf(c,t){c.uniform4uiv(this.addr,t)}function Af(c,t,e){const n=this.cache,i=t.length,s=Rs(e,i);te(n,s)||(c.uniform1iv(this.addr,s),ee(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||sl,s[o])}function Cf(c,t,e){const n=this.cache,i=t.length,s=Rs(e,i);te(n,s)||(c.uniform1iv(this.addr,s),ee(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||ol,s[o])}function Lf(c,t,e){const n=this.cache,i=t.length,s=Rs(e,i);te(n,s)||(c.uniform1iv(this.addr,s),ee(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||al,s[o])}function Pf(c,t,e){const n=this.cache,i=t.length,s=Rs(e,i);te(n,s)||(c.uniform1iv(this.addr,s),ee(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||rl,s[o])}function Rf(c){switch(c){case 5126:return df;case 35664:return ff;case 35665:return pf;case 35666:return mf;case 35674:return gf;case 35675:return _f;case 35676:return xf;case 5124:case 35670:return vf;case 35667:case 35671:return yf;case 35668:case 35672:return Mf;case 35669:case 35673:return wf;case 5125:return bf;case 36294:return Sf;case 36295:return Ef;case 36296:return Tf;case 35678:case 36198:case 36298:case 36306:case 35682:return Af;case 35679:case 36299:case 36307:return Cf;case 35680:case 36300:case 36308:case 36293:return Lf;case 36289:case 36303:case 36311:case 36292:return Pf}}class Df{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=uf(e.type)}}class If{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Rf(e.type)}}class zf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const r=i[s];r.setValue(t,e[r.id],n)}}}const fr=/(\w+)(\])?(\[|\.)?/g;function Xo(c,t){c.seq.push(t),c.map[t.id]=t}function Ff(c,t,e){const n=c.name,i=n.length;for(fr.lastIndex=0;;){const s=fr.exec(n),o=fr.lastIndex;let r=s[1];const a=s[2]==="]",l=s[3];if(a&&(r=r|0),l===void 0||l==="["&&o+2===i){Xo(e,l===void 0?new Df(r,c,t):new If(r,c,t));break}else{let d=e.map[r];d===void 0&&(d=new zf(r),Xo(e,d)),e=d}}}class Es{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);Ff(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const r=e[s],a=n[r.id];a.needsUpdate!==!1&&r.setValue(t,a.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function jo(c,t,e){const n=c.createShader(t);return c.shaderSource(n,e),c.compileShader(n),n}let Nf=0;function Bf(c,t){const e=c.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const r=o+1;n.push(`${r===t?">":" "} ${r}: ${e[o]}`)}return n.join(`
`)}function Of(c){switch(c){case qn:return["Linear","( value )"];case Gt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",c),["Linear","( value )"]}}function Yo(c,t,e){const n=c.getShaderParameter(t,35713),i=c.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Bf(c.getShaderSource(t),o)}else return i}function Uf(c,t){const e=Of(t);return"vec4 "+c+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Gf(c,t){let e;switch(t){case $l:e="Linear";break;case Zl:e="Reinhard";break;case Kl:e="OptimizedCineon";break;case Jl:e="ACESFilmic";break;case Ql:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+c+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function kf(c){return[c.extensionDerivatives||c.envMapCubeUVHeight||c.bumpMap||c.tangentSpaceNormalMap||c.clearcoatNormalMap||c.flatShading||c.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(c.extensionFragDepth||c.logarithmicDepthBuffer)&&c.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",c.extensionDrawBuffers&&c.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(c.extensionShaderTextureLOD||c.envMap||c.transmission)&&c.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Oi).join(`
`)}function Vf(c){const t=[];for(const e in c){const n=c[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Wf(c,t){const e={},n=c.getProgramParameter(t,35721);for(let i=0;i<n;i++){const s=c.getActiveAttrib(t,i),o=s.name;let r=1;s.type===35674&&(r=2),s.type===35675&&(r=3),s.type===35676&&(r=4),e[o]={type:s.type,location:c.getAttribLocation(t,o),locationSize:r}}return e}function Oi(c){return c!==""}function $o(c,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return c.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zo(c,t){return c.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Hf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pr(c){return c.replace(Hf,qf)}function qf(c,t){const e=St[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Pr(e)}const Xf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ko(c){return c.replace(Xf,jf)}function jf(c,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Jo(c){let t="precision "+c.precision+` float;
precision `+c.precision+" int;";return c.precision==="highp"?t+=`
#define HIGH_PRECISION`:c.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:c.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Yf(c){let t="SHADOWMAP_TYPE_BASIC";return c.shadowMapType===Ba?t="SHADOWMAP_TYPE_PCF":c.shadowMapType===Al?t="SHADOWMAP_TYPE_PCF_SOFT":c.shadowMapType===Bi&&(t="SHADOWMAP_TYPE_VSM"),t}function $f(c){let t="ENVMAP_TYPE_CUBE";if(c.envMap)switch(c.envMapMode){case gi:case _i:t="ENVMAP_TYPE_CUBE";break;case Cs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Zf(c){let t="ENVMAP_MODE_REFLECTION";if(c.envMap)switch(c.envMapMode){case _i:t="ENVMAP_MODE_REFRACTION";break}return t}function Kf(c){let t="ENVMAP_BLENDING_NONE";if(c.envMap)switch(c.combine){case Ga:t="ENVMAP_BLENDING_MULTIPLY";break;case jl:t="ENVMAP_BLENDING_MIX";break;case Yl:t="ENVMAP_BLENDING_ADD";break}return t}function Jf(c){const t=c.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Qf(c,t,e,n){const i=c.getContext(),s=e.defines;let o=e.vertexShader,r=e.fragmentShader;const a=Yf(e),l=$f(e),h=Zf(e),d=Kf(e),u=Jf(e),m=e.isWebGL2?"":kf(e),g=Vf(s),p=i.createProgram();let f,_,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=[g].filter(Oi).join(`
`),f.length>0&&(f+=`
`),_=[m,g].filter(Oi).join(`
`),_.length>0&&(_+=`
`)):(f=[Jo(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+a:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oi).join(`
`),_=[m,Jo(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+a:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mn?"#define TONE_MAPPING":"",e.toneMapping!==mn?St.tonemapping_pars_fragment:"",e.toneMapping!==mn?Gf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",St.encodings_pars_fragment,Uf("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Oi).join(`
`)),o=Pr(o),o=$o(o,e),o=Zo(o,e),r=Pr(r),r=$o(r,e),r=Zo(r,e),o=Ko(o),r=Ko(r),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["#define varying in",e.glslVersion===yo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===yo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=x+f+o,M=x+_+r,S=jo(i,35633,y),C=jo(i,35632,M);if(i.attachShader(p,S),i.attachShader(p,C),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),c.debug.checkShaderErrors){const b=i.getProgramInfoLog(p).trim(),R=i.getShaderInfoLog(S).trim(),O=i.getShaderInfoLog(C).trim();let N=!0,A=!0;if(i.getProgramParameter(p,35714)===!1){N=!1;const L=Yo(i,S,"vertex"),I=Yo(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+b+`
`+L+`
`+I)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(R===""||O==="")&&(A=!1);A&&(this.diagnostics={runnable:N,programLog:b,vertexShader:{log:R,prefix:f},fragmentShader:{log:O,prefix:_}})}i.deleteShader(S),i.deleteShader(C);let D;this.getUniforms=function(){return D===void 0&&(D=new Es(i,p)),D};let v;return this.getAttributes=function(){return v===void 0&&(v=Wf(i,p)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=e.shaderName,this.id=Nf++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=C,this}let tp=0;class ep{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new np(t),e.set(t,n)),n}}class np{constructor(t){this.id=tp++,this.code=t,this.usedTimes=0}}function ip(c,t,e,n,i,s,o){const r=new Za,a=new ep,l=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,b,R,O,N){const A=O.fog,L=N.geometry,I=v.isMeshStandardMaterial?O.environment:null,z=(v.isMeshStandardMaterial?e:t).get(v.envMap||I),H=z&&z.mapping===Cs?z.image.height:null,V=g[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const X=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,K=X!==void 0?X.length:0;let rt=0;L.morphAttributes.position!==void 0&&(rt=1),L.morphAttributes.normal!==void 0&&(rt=2),L.morphAttributes.color!==void 0&&(rt=3);let F,J,nt,k;if(V){const Tt=Qe[V];F=Tt.vertexShader,J=Tt.fragmentShader}else F=v.vertexShader,J=v.fragmentShader,a.update(v),nt=a.getVertexShaderID(v),k=a.getFragmentShaderID(v);const ht=c.getRenderTarget(),ut=v.alphaTest>0,ft=v.clearcoat>0,pt=v.iridescence>0;return{isWebGL2:h,shaderID:V,shaderName:v.type,vertexShader:F,fragmentShader:J,defines:v.defines,customVertexShaderID:nt,customFragmentShaderID:k,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:N.isInstancedMesh===!0,instancingColor:N.isInstancedMesh===!0&&N.instanceColor!==null,supportsVertexTextures:u,outputEncoding:ht===null?c.outputEncoding:ht.isXRRenderTarget===!0?ht.texture.encoding:qn,map:!!v.map,matcap:!!v.matcap,envMap:!!z,envMapMode:z&&z.mapping,envMapCubeUVHeight:H,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===xc,tangentSpaceNormalMap:v.normalMapType===Wa,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Gt,clearcoat:ft,clearcoatMap:ft&&!!v.clearcoatMap,clearcoatRoughnessMap:ft&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:ft&&!!v.clearcoatNormalMap,iridescence:pt,iridescenceMap:pt&&!!v.iridescenceMap,iridescenceThicknessMap:pt&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===fi,alphaMap:!!v.alphaMap,alphaTest:ut,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!L.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!A,useFog:v.fog===!0,fogExp2:A&&A.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:d,skinning:N.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:rt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:c.shadowMap.enabled&&R.length>0,shadowMapType:c.shadowMap.type,toneMapping:v.toneMapped?c.toneMapping:mn,useLegacyLights:c.useLegacyLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===wn,flipSided:v.side===Re,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function f(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const R in v.defines)b.push(R),b.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(_(b,v),x(b,v),b.push(c.outputEncoding)),b.push(v.customProgramCacheKey),b.join()}function _(v,b){v.push(b.precision),v.push(b.outputEncoding),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.combine),v.push(b.vertexUvs),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function x(v,b){r.disableAll(),b.isWebGL2&&r.enable(0),b.supportsVertexTextures&&r.enable(1),b.instancing&&r.enable(2),b.instancingColor&&r.enable(3),b.map&&r.enable(4),b.matcap&&r.enable(5),b.envMap&&r.enable(6),b.lightMap&&r.enable(7),b.aoMap&&r.enable(8),b.emissiveMap&&r.enable(9),b.bumpMap&&r.enable(10),b.normalMap&&r.enable(11),b.objectSpaceNormalMap&&r.enable(12),b.tangentSpaceNormalMap&&r.enable(13),b.clearcoat&&r.enable(14),b.clearcoatMap&&r.enable(15),b.clearcoatRoughnessMap&&r.enable(16),b.clearcoatNormalMap&&r.enable(17),b.iridescence&&r.enable(18),b.iridescenceMap&&r.enable(19),b.iridescenceThicknessMap&&r.enable(20),b.displacementMap&&r.enable(21),b.specularMap&&r.enable(22),b.roughnessMap&&r.enable(23),b.metalnessMap&&r.enable(24),b.gradientMap&&r.enable(25),b.alphaMap&&r.enable(26),b.alphaTest&&r.enable(27),b.vertexColors&&r.enable(28),b.vertexAlphas&&r.enable(29),b.vertexUvs&&r.enable(30),b.vertexTangents&&r.enable(31),b.uvsVertexOnly&&r.enable(32),v.push(r.mask),r.disableAll(),b.fog&&r.enable(0),b.useFog&&r.enable(1),b.flatShading&&r.enable(2),b.logarithmicDepthBuffer&&r.enable(3),b.skinning&&r.enable(4),b.morphTargets&&r.enable(5),b.morphNormals&&r.enable(6),b.morphColors&&r.enable(7),b.premultipliedAlpha&&r.enable(8),b.shadowMapEnabled&&r.enable(9),b.useLegacyLights&&r.enable(10),b.doubleSided&&r.enable(11),b.flipSided&&r.enable(12),b.useDepthPacking&&r.enable(13),b.dithering&&r.enable(14),b.specularIntensityMap&&r.enable(15),b.specularColorMap&&r.enable(16),b.transmission&&r.enable(17),b.transmissionMap&&r.enable(18),b.thicknessMap&&r.enable(19),b.sheen&&r.enable(20),b.sheenColorMap&&r.enable(21),b.sheenRoughnessMap&&r.enable(22),b.decodeVideoTexture&&r.enable(23),b.opaque&&r.enable(24),v.push(r.mask)}function y(v){const b=g[v.type];let R;if(b){const O=Qe[b];R=kc.clone(O.uniforms)}else R=v.uniforms;return R}function M(v,b){let R;for(let O=0,N=l.length;O<N;O++){const A=l[O];if(A.cacheKey===b){R=A,++R.usedTimes;break}}return R===void 0&&(R=new Qf(c,b,v,s),l.push(R)),R}function S(v){if(--v.usedTimes===0){const b=l.indexOf(v);l[b]=l[l.length-1],l.pop(),v.destroy()}}function C(v){a.remove(v)}function D(){a.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:y,acquireProgram:M,releaseProgram:S,releaseShaderCache:C,programs:l,dispose:D}}function sp(){let c=new WeakMap;function t(s){let o=c.get(s);return o===void 0&&(o={},c.set(s,o)),o}function e(s){c.delete(s)}function n(s,o,r){c.get(s)[o]=r}function i(){c=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function rp(c,t){return c.groupOrder!==t.groupOrder?c.groupOrder-t.groupOrder:c.renderOrder!==t.renderOrder?c.renderOrder-t.renderOrder:c.material.id!==t.material.id?c.material.id-t.material.id:c.z!==t.z?c.z-t.z:c.id-t.id}function Qo(c,t){return c.groupOrder!==t.groupOrder?c.groupOrder-t.groupOrder:c.renderOrder!==t.renderOrder?c.renderOrder-t.renderOrder:c.z!==t.z?t.z-c.z:c.id-t.id}function ta(){const c=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,m,g,p,f){let _=c[t];return _===void 0?(_={id:d.id,object:d,geometry:u,material:m,groupOrder:g,renderOrder:d.renderOrder,z:p,group:f},c[t]=_):(_.id=d.id,_.object=d,_.geometry=u,_.material=m,_.groupOrder=g,_.renderOrder=d.renderOrder,_.z=p,_.group=f),t++,_}function r(d,u,m,g,p,f){const _=o(d,u,m,g,p,f);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):e.push(_)}function a(d,u,m,g,p,f){const _=o(d,u,m,g,p,f);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):e.unshift(_)}function l(d,u){e.length>1&&e.sort(d||rp),n.length>1&&n.sort(u||Qo),i.length>1&&i.sort(u||Qo)}function h(){for(let d=t,u=c.length;d<u;d++){const m=c[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:r,unshift:a,finish:h,sort:l}}function op(){let c=new WeakMap;function t(n,i){const s=c.get(n);let o;return s===void 0?(o=new ta,c.set(n,[o])):i>=s.length?(o=new ta,s.push(o)):o=s[i],o}function e(){c=new WeakMap}return{get:t,dispose:e}}function ap(){const c={};return{get:function(t){if(c[t.id]!==void 0)return c[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Nt};break;case"SpotLight":e={position:new U,direction:new U,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new U,halfWidth:new U,halfHeight:new U};break}return c[t.id]=e,e}}}function lp(){const c={};return{get:function(t){if(c[t.id]!==void 0)return c[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return c[t.id]=e,e}}}let cp=0;function hp(c,t){return(t.castShadow?2:0)-(c.castShadow?2:0)+(t.map?1:0)-(c.map?1:0)}function up(c,t){const e=new ap,n=lp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new U);const s=new U,o=new jt,r=new jt;function a(h,d){let u=0,m=0,g=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let p=0,f=0,_=0,x=0,y=0,M=0,S=0,C=0,D=0,v=0;h.sort(hp);const b=d===!0?Math.PI:1;for(let O=0,N=h.length;O<N;O++){const A=h[O],L=A.color,I=A.intensity,z=A.distance,H=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=L.r*I*b,m+=L.g*I*b,g+=L.b*I*b;else if(A.isLightProbe)for(let V=0;V<9;V++)i.probe[V].addScaledVector(A.sh.coefficients[V],I);else if(A.isDirectionalLight){const V=e.get(A);if(V.color.copy(A.color).multiplyScalar(A.intensity*b),A.castShadow){const X=A.shadow,K=n.get(A);K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,i.directionalShadow[p]=K,i.directionalShadowMap[p]=H,i.directionalShadowMatrix[p]=A.shadow.matrix,M++}i.directional[p]=V,p++}else if(A.isSpotLight){const V=e.get(A);V.position.setFromMatrixPosition(A.matrixWorld),V.color.copy(L).multiplyScalar(I*b),V.distance=z,V.coneCos=Math.cos(A.angle),V.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),V.decay=A.decay,i.spot[_]=V;const X=A.shadow;if(A.map&&(i.spotLightMap[D]=A.map,D++,X.updateMatrices(A),A.castShadow&&v++),i.spotLightMatrix[_]=X.matrix,A.castShadow){const K=n.get(A);K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,i.spotShadow[_]=K,i.spotShadowMap[_]=H,C++}_++}else if(A.isRectAreaLight){const V=e.get(A);V.color.copy(L).multiplyScalar(I),V.halfWidth.set(A.width*.5,0,0),V.halfHeight.set(0,A.height*.5,0),i.rectArea[x]=V,x++}else if(A.isPointLight){const V=e.get(A);if(V.color.copy(A.color).multiplyScalar(A.intensity*b),V.distance=A.distance,V.decay=A.decay,A.castShadow){const X=A.shadow,K=n.get(A);K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,K.shadowCameraNear=X.camera.near,K.shadowCameraFar=X.camera.far,i.pointShadow[f]=K,i.pointShadowMap[f]=H,i.pointShadowMatrix[f]=A.shadow.matrix,S++}i.point[f]=V,f++}else if(A.isHemisphereLight){const V=e.get(A);V.skyColor.copy(A.color).multiplyScalar(I*b),V.groundColor.copy(A.groundColor).multiplyScalar(I*b),i.hemi[y]=V,y++}}x>0&&(t.isWebGL2||c.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=it.LTC_FLOAT_1,i.rectAreaLTC2=it.LTC_FLOAT_2):c.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=it.LTC_HALF_1,i.rectAreaLTC2=it.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=m,i.ambient[2]=g;const R=i.hash;(R.directionalLength!==p||R.pointLength!==f||R.spotLength!==_||R.rectAreaLength!==x||R.hemiLength!==y||R.numDirectionalShadows!==M||R.numPointShadows!==S||R.numSpotShadows!==C||R.numSpotMaps!==D)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=x,i.point.length=f,i.hemi.length=y,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=C+D-v,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=v,R.directionalLength=p,R.pointLength=f,R.spotLength=_,R.rectAreaLength=x,R.hemiLength=y,R.numDirectionalShadows=M,R.numPointShadows=S,R.numSpotShadows=C,R.numSpotMaps=D,i.version=cp++)}function l(h,d){let u=0,m=0,g=0,p=0,f=0;const _=d.matrixWorldInverse;for(let x=0,y=h.length;x<y;x++){const M=h[x];if(M.isDirectionalLight){const S=i.directional[u];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(_),u++}else if(M.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(_),g++}else if(M.isRectAreaLight){const S=i.rectArea[p];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(_),r.identity(),o.copy(M.matrixWorld),o.premultiply(_),r.extractRotation(o),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),p++}else if(M.isPointLight){const S=i.point[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(_),m++}else if(M.isHemisphereLight){const S=i.hemi[f];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(_),f++}}}return{setup:a,setupView:l,state:i}}function ea(c,t){const e=new up(c,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(d){n.push(d)}function r(d){i.push(d)}function a(d){e.setup(n,d)}function l(d){e.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function dp(c,t){let e=new WeakMap;function n(s,o=0){const r=e.get(s);let a;return r===void 0?(a=new ea(c,t),e.set(s,[a])):o>=r.length?(a=new ea(c,t),r.push(a)):a=r[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class fp extends wi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class pp extends wi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new U,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const mp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gp=`uniform sampler2D shadow_pass;
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
}`;function _p(c,t,e){let n=new Ir;const i=new Bt,s=new Bt,o=new kt,r=new fp({depthPacking:_c}),a=new pp,l={},h=e.maxTextureSize,d={[En]:Re,[Re]:En,[wn]:wn},u=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:mp,fragmentShader:gp}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new we;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new oe(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ba,this.render=function(M,S,C){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||M.length===0)return;const D=c.getRenderTarget(),v=c.getActiveCubeFace(),b=c.getActiveMipmapLevel(),R=c.state;R.setBlending(Sn),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let O=0,N=M.length;O<N;O++){const A=M[O],L=A.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",A,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;i.copy(L.mapSize);const I=L.getFrameExtents();if(i.multiply(I),s.copy(L.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/I.x),i.x=s.x*I.x,L.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/I.y),i.y=s.y*I.y,L.mapSize.y=s.y)),L.map===null){const H=this.type!==Bi?{minFilter:ge,magFilter:ge}:{};L.map=new Xn(i.x,i.y,H),L.map.texture.name=A.name+".shadowMap",L.camera.updateProjectionMatrix()}c.setRenderTarget(L.map),c.clear();const z=L.getViewportCount();for(let H=0;H<z;H++){const V=L.getViewport(H);o.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),R.viewport(o),L.updateMatrices(A,H),n=L.getFrustum(),y(S,C,L.camera,A,this.type)}L.isPointLightShadow!==!0&&this.type===Bi&&_(L,C),L.needsUpdate=!1}f.needsUpdate=!1,c.setRenderTarget(D,v,b)};function _(M,S){const C=t.update(p);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Xn(i.x,i.y)),u.uniforms.shadow_pass.value=M.map.texture,u.uniforms.resolution.value=M.mapSize,u.uniforms.radius.value=M.radius,c.setRenderTarget(M.mapPass),c.clear(),c.renderBufferDirect(S,null,C,u,p,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,c.setRenderTarget(M.map),c.clear(),c.renderBufferDirect(S,null,C,m,p,null)}function x(M,S,C,D,v,b){let R=null;const O=C.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(O!==void 0)R=O;else if(R=C.isPointLight===!0?a:r,c.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const N=R.uuid,A=S.uuid;let L=l[N];L===void 0&&(L={},l[N]=L);let I=L[A];I===void 0&&(I=R.clone(),L[A]=I),R=I}return R.visible=S.visible,R.wireframe=S.wireframe,b===Bi?R.side=S.shadowSide!==null?S.shadowSide:S.side:R.side=S.shadowSide!==null?S.shadowSide:d[S.side],R.alphaMap=S.alphaMap,R.alphaTest=S.alphaTest,R.map=S.map,R.clipShadows=S.clipShadows,R.clippingPlanes=S.clippingPlanes,R.clipIntersection=S.clipIntersection,R.displacementMap=S.displacementMap,R.displacementScale=S.displacementScale,R.displacementBias=S.displacementBias,R.wireframeLinewidth=S.wireframeLinewidth,R.linewidth=S.linewidth,C.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(C.matrixWorld),R.nearDistance=D,R.farDistance=v),R}function y(M,S,C,D,v){if(M.visible===!1)return;if(M.layers.test(S.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&v===Bi)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,M.matrixWorld);const O=t.update(M),N=M.material;if(Array.isArray(N)){const A=O.groups;for(let L=0,I=A.length;L<I;L++){const z=A[L],H=N[z.materialIndex];if(H&&H.visible){const V=x(M,H,D,C.near,C.far,v);c.renderBufferDirect(C,null,O,V,M,z)}}}else if(N.visible){const A=x(M,N,D,C.near,C.far,v);c.renderBufferDirect(C,null,O,A,M,null)}}const R=M.children;for(let O=0,N=R.length;O<N;O++)y(R[O],S,C,D,v)}}function xp(c,t,e){const n=e.isWebGL2;function i(){let B=!1;const j=new kt;let Q=null;const at=new kt(0,0,0,0);return{setMask:function(dt){Q!==dt&&!B&&(c.colorMask(dt,dt,dt,dt),Q=dt)},setLocked:function(dt){B=dt},setClear:function(dt,Ot,ie,ue,Xe){Xe===!0&&(dt*=ue,Ot*=ue,ie*=ue),j.set(dt,Ot,ie,ue),at.equals(j)===!1&&(c.clearColor(dt,Ot,ie,ue),at.copy(j))},reset:function(){B=!1,Q=null,at.set(-1,0,0,0)}}}function s(){let B=!1,j=null,Q=null,at=null;return{setTest:function(dt){dt?ut(2929):ft(2929)},setMask:function(dt){j!==dt&&!B&&(c.depthMask(dt),j=dt)},setFunc:function(dt){if(Q!==dt){switch(dt){case Gl:c.depthFunc(512);break;case kl:c.depthFunc(519);break;case Vl:c.depthFunc(513);break;case Sr:c.depthFunc(515);break;case Wl:c.depthFunc(514);break;case Hl:c.depthFunc(518);break;case ql:c.depthFunc(516);break;case Xl:c.depthFunc(517);break;default:c.depthFunc(515)}Q=dt}},setLocked:function(dt){B=dt},setClear:function(dt){at!==dt&&(c.clearDepth(dt),at=dt)},reset:function(){B=!1,j=null,Q=null,at=null}}}function o(){let B=!1,j=null,Q=null,at=null,dt=null,Ot=null,ie=null,ue=null,Xe=null;return{setTest:function(Xt){B||(Xt?ut(2960):ft(2960))},setMask:function(Xt){j!==Xt&&!B&&(c.stencilMask(Xt),j=Xt)},setFunc:function(Xt,Ie,je){(Q!==Xt||at!==Ie||dt!==je)&&(c.stencilFunc(Xt,Ie,je),Q=Xt,at=Ie,dt=je)},setOp:function(Xt,Ie,je){(Ot!==Xt||ie!==Ie||ue!==je)&&(c.stencilOp(Xt,Ie,je),Ot=Xt,ie=Ie,ue=je)},setLocked:function(Xt){B=Xt},setClear:function(Xt){Xe!==Xt&&(c.clearStencil(Xt),Xe=Xt)},reset:function(){B=!1,j=null,Q=null,at=null,dt=null,Ot=null,ie=null,ue=null,Xe=null}}}const r=new i,a=new s,l=new o,h=new WeakMap,d=new WeakMap;let u={},m={},g=new WeakMap,p=[],f=null,_=!1,x=null,y=null,M=null,S=null,C=null,D=null,v=null,b=!1,R=null,O=null,N=null,A=null,L=null;const I=c.getParameter(35661);let z=!1,H=0;const V=c.getParameter(7938);V.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(V)[1]),z=H>=1):V.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),z=H>=2);let X=null,K={};const rt=c.getParameter(3088),F=c.getParameter(2978),J=new kt().fromArray(rt),nt=new kt().fromArray(F);function k(B,j,Q){const at=new Uint8Array(4),dt=c.createTexture();c.bindTexture(B,dt),c.texParameteri(B,10241,9728),c.texParameteri(B,10240,9728);for(let Ot=0;Ot<Q;Ot++)c.texImage2D(j+Ot,0,6408,1,1,0,6408,5121,at);return dt}const ht={};ht[3553]=k(3553,3553,1),ht[34067]=k(34067,34069,6),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),ut(2929),a.setFunc(Sr),ve(!1),he(Vr),ut(2884),ce(Sn);function ut(B){u[B]!==!0&&(c.enable(B),u[B]=!0)}function ft(B){u[B]!==!1&&(c.disable(B),u[B]=!1)}function pt(B,j){return m[B]!==j?(c.bindFramebuffer(B,j),m[B]=j,n&&(B===36009&&(m[36160]=j),B===36160&&(m[36009]=j)),!0):!1}function yt(B,j){let Q=p,at=!1;if(B)if(Q=g.get(j),Q===void 0&&(Q=[],g.set(j,Q)),B.isWebGLMultipleRenderTargets){const dt=B.texture;if(Q.length!==dt.length||Q[0]!==36064){for(let Ot=0,ie=dt.length;Ot<ie;Ot++)Q[Ot]=36064+Ot;Q.length=dt.length,at=!0}}else Q[0]!==36064&&(Q[0]=36064,at=!0);else Q[0]!==1029&&(Q[0]=1029,at=!0);at&&(e.isWebGL2?c.drawBuffers(Q):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function Tt(B){return f!==B?(c.useProgram(B),f=B,!0):!1}const Ct={[ci]:32774,[Ll]:32778,[Pl]:32779};if(n)Ct[Xr]=32775,Ct[jr]=32776;else{const B=t.get("EXT_blend_minmax");B!==null&&(Ct[Xr]=B.MIN_EXT,Ct[jr]=B.MAX_EXT)}const zt={[Rl]:0,[Dl]:1,[Il]:768,[Oa]:770,[Ul]:776,[Bl]:774,[Fl]:772,[zl]:769,[Ua]:771,[Ol]:775,[Nl]:773};function ce(B,j,Q,at,dt,Ot,ie,ue){if(B===Sn){_===!0&&(ft(3042),_=!1);return}if(_===!1&&(ut(3042),_=!0),B!==Cl){if(B!==x||ue!==b){if((y!==ci||C!==ci)&&(c.blendEquation(32774),y=ci,C=ci),ue)switch(B){case fi:c.blendFuncSeparate(1,771,1,771);break;case Wr:c.blendFunc(1,1);break;case Hr:c.blendFuncSeparate(0,769,0,1);break;case qr:c.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case fi:c.blendFuncSeparate(770,771,1,771);break;case Wr:c.blendFunc(770,1);break;case Hr:c.blendFuncSeparate(0,769,0,1);break;case qr:c.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}M=null,S=null,D=null,v=null,x=B,b=ue}return}dt=dt||j,Ot=Ot||Q,ie=ie||at,(j!==y||dt!==C)&&(c.blendEquationSeparate(Ct[j],Ct[dt]),y=j,C=dt),(Q!==M||at!==S||Ot!==D||ie!==v)&&(c.blendFuncSeparate(zt[Q],zt[at],zt[Ot],zt[ie]),M=Q,S=at,D=Ot,v=ie),x=B,b=!1}function Ne(B,j){B.side===wn?ft(2884):ut(2884);let Q=B.side===Re;j&&(Q=!Q),ve(Q),B.blending===fi&&B.transparent===!1?ce(Sn):ce(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);const at=B.stencilWrite;l.setTest(at),at&&(l.setMask(B.stencilWriteMask),l.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),l.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Vt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ut(32926):ft(32926)}function ve(B){R!==B&&(B?c.frontFace(2304):c.frontFace(2305),R=B)}function he(B){B!==El?(ut(2884),B!==O&&(B===Vr?c.cullFace(1029):B===Tl?c.cullFace(1028):c.cullFace(1032))):ft(2884),O=B}function Ht(B){B!==N&&(z&&c.lineWidth(B),N=B)}function Vt(B,j,Q){B?(ut(32823),(A!==j||L!==Q)&&(c.polygonOffset(j,Q),A=j,L=Q)):ft(32823)}function qe(B){B?ut(3089):ft(3089)}function Be(B){B===void 0&&(B=33984+I-1),X!==B&&(c.activeTexture(B),X=B)}function P(B,j,Q){Q===void 0&&(X===null?Q=33984+I-1:Q=X);let at=K[Q];at===void 0&&(at={type:void 0,texture:void 0},K[Q]=at),(at.type!==B||at.texture!==j)&&(X!==Q&&(c.activeTexture(Q),X=Q),c.bindTexture(B,j||ht[B]),at.type=B,at.texture=j)}function E(){const B=K[X];B!==void 0&&B.type!==void 0&&(c.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Y(){try{c.compressedTexImage2D.apply(c,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function tt(){try{c.compressedTexImage3D.apply(c,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function et(){try{c.texSubImage2D.apply(c,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ot(){try{c.texSubImage3D.apply(c,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _t(){try{c.compressedTexSubImage2D.apply(c,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ct(){try{c.compressedTexSubImage3D.apply(c,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Z(){try{c.texStorage2D.apply(c,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Mt(){try{c.texStorage3D.apply(c,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function mt(){try{c.texImage2D.apply(c,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function wt(){try{c.texImage3D.apply(c,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function vt(B){J.equals(B)===!1&&(c.scissor(B.x,B.y,B.z,B.w),J.copy(B))}function gt(B){nt.equals(B)===!1&&(c.viewport(B.x,B.y,B.z,B.w),nt.copy(B))}function Dt(B,j){let Q=d.get(j);Q===void 0&&(Q=new WeakMap,d.set(j,Q));let at=Q.get(B);at===void 0&&(at=c.getUniformBlockIndex(j,B.name),Q.set(B,at))}function Wt(B,j){const at=d.get(j).get(B);h.get(j)!==at&&(c.uniformBlockBinding(j,at,B.__bindingPointIndex),h.set(j,at))}function ne(){c.disable(3042),c.disable(2884),c.disable(2929),c.disable(32823),c.disable(3089),c.disable(2960),c.disable(32926),c.blendEquation(32774),c.blendFunc(1,0),c.blendFuncSeparate(1,0,1,0),c.colorMask(!0,!0,!0,!0),c.clearColor(0,0,0,0),c.depthMask(!0),c.depthFunc(513),c.clearDepth(1),c.stencilMask(4294967295),c.stencilFunc(519,0,4294967295),c.stencilOp(7680,7680,7680),c.clearStencil(0),c.cullFace(1029),c.frontFace(2305),c.polygonOffset(0,0),c.activeTexture(33984),c.bindFramebuffer(36160,null),n===!0&&(c.bindFramebuffer(36009,null),c.bindFramebuffer(36008,null)),c.useProgram(null),c.lineWidth(1),c.scissor(0,0,c.canvas.width,c.canvas.height),c.viewport(0,0,c.canvas.width,c.canvas.height),u={},X=null,K={},m={},g=new WeakMap,p=[],f=null,_=!1,x=null,y=null,M=null,S=null,C=null,D=null,v=null,b=!1,R=null,O=null,N=null,A=null,L=null,J.set(0,0,c.canvas.width,c.canvas.height),nt.set(0,0,c.canvas.width,c.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:ut,disable:ft,bindFramebuffer:pt,drawBuffers:yt,useProgram:Tt,setBlending:ce,setMaterial:Ne,setFlipSided:ve,setCullFace:he,setLineWidth:Ht,setPolygonOffset:Vt,setScissorTest:qe,activeTexture:Be,bindTexture:P,unbindTexture:E,compressedTexImage2D:Y,compressedTexImage3D:tt,texImage2D:mt,texImage3D:wt,updateUBOMapping:Dt,uniformBlockBinding:Wt,texStorage2D:Z,texStorage3D:Mt,texSubImage2D:et,texSubImage3D:ot,compressedTexSubImage2D:_t,compressedTexSubImage3D:ct,scissor:vt,viewport:gt,reset:ne}}function vp(c,t,e,n,i,s,o){const r=i.isWebGL2,a=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,E){return _?new OffscreenCanvas(P,E):Hi("canvas")}function y(P,E,Y,tt){let et=1;if((P.width>tt||P.height>tt)&&(et=tt/Math.max(P.width,P.height)),et<1||E===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const ot=E?Mc:Math.floor,_t=ot(et*P.width),ct=ot(et*P.height);p===void 0&&(p=x(_t,ct));const Z=Y?x(_t,ct):p;return Z.width=_t,Z.height=ct,Z.getContext("2d").drawImage(P,0,0,_t,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+_t+"x"+ct+")."),Z}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function M(P){return wo(P.width)&&wo(P.height)}function S(P){return r?!1:P.wrapS!==Ve||P.wrapT!==Ve||P.minFilter!==ge&&P.minFilter!==Fe}function C(P,E){return P.generateMipmaps&&E&&P.minFilter!==ge&&P.minFilter!==Fe}function D(P){c.generateMipmap(P)}function v(P,E,Y,tt,et=!1){if(r===!1)return E;if(P!==null){if(c[P]!==void 0)return c[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ot=E;return E===6403&&(Y===5126&&(ot=33326),Y===5131&&(ot=33325),Y===5121&&(ot=33321)),E===33319&&(Y===5126&&(ot=33328),Y===5131&&(ot=33327),Y===5121&&(ot=33323)),E===6408&&(Y===5126&&(ot=34836),Y===5131&&(ot=34842),Y===5121&&(ot=tt===Gt&&et===!1?35907:32856),Y===32819&&(ot=32854),Y===32820&&(ot=32855)),(ot===33325||ot===33326||ot===33327||ot===33328||ot===34842||ot===34836)&&t.get("EXT_color_buffer_float"),ot}function b(P,E,Y){return C(P,Y)===!0||P.isFramebufferTexture&&P.minFilter!==ge&&P.minFilter!==Fe?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function R(P){return P===ge||P===Yr||P===Bs?9728:9729}function O(P){const E=P.target;E.removeEventListener("dispose",O),A(E),E.isVideoTexture&&g.delete(E)}function N(P){const E=P.target;E.removeEventListener("dispose",N),I(E)}function A(P){const E=n.get(P);if(E.__webglInit===void 0)return;const Y=P.source,tt=f.get(Y);if(tt){const et=tt[E.__cacheKey];et.usedTimes--,et.usedTimes===0&&L(P),Object.keys(tt).length===0&&f.delete(Y)}n.remove(P)}function L(P){const E=n.get(P);c.deleteTexture(E.__webglTexture);const Y=P.source,tt=f.get(Y);delete tt[E.__cacheKey],o.memory.textures--}function I(P){const E=P.texture,Y=n.get(P),tt=n.get(E);if(tt.__webglTexture!==void 0&&(c.deleteTexture(tt.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let et=0;et<6;et++)c.deleteFramebuffer(Y.__webglFramebuffer[et]),Y.__webglDepthbuffer&&c.deleteRenderbuffer(Y.__webglDepthbuffer[et]);else{if(c.deleteFramebuffer(Y.__webglFramebuffer),Y.__webglDepthbuffer&&c.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&c.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let et=0;et<Y.__webglColorRenderbuffer.length;et++)Y.__webglColorRenderbuffer[et]&&c.deleteRenderbuffer(Y.__webglColorRenderbuffer[et]);Y.__webglDepthRenderbuffer&&c.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let et=0,ot=E.length;et<ot;et++){const _t=n.get(E[et]);_t.__webglTexture&&(c.deleteTexture(_t.__webglTexture),o.memory.textures--),n.remove(E[et])}n.remove(E),n.remove(P)}let z=0;function H(){z=0}function V(){const P=z;return P>=a&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+a),z+=1,P}function X(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.encoding),E.join()}function K(P,E){const Y=n.get(P);if(P.isVideoTexture&&qe(P),P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){const tt=P.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ft(Y,P,E);return}}e.bindTexture(3553,Y.__webglTexture,33984+E)}function rt(P,E){const Y=n.get(P);if(P.version>0&&Y.__version!==P.version){ft(Y,P,E);return}e.bindTexture(35866,Y.__webglTexture,33984+E)}function F(P,E){const Y=n.get(P);if(P.version>0&&Y.__version!==P.version){ft(Y,P,E);return}e.bindTexture(32879,Y.__webglTexture,33984+E)}function J(P,E){const Y=n.get(P);if(P.version>0&&Y.__version!==P.version){pt(Y,P,E);return}e.bindTexture(34067,Y.__webglTexture,33984+E)}const nt={[Ar]:10497,[Ve]:33071,[Cr]:33648},k={[ge]:9728,[Yr]:9984,[Bs]:9986,[Fe]:9729,[tc]:9985,[ki]:9987};function ht(P,E,Y){if(Y?(c.texParameteri(P,10242,nt[E.wrapS]),c.texParameteri(P,10243,nt[E.wrapT]),(P===32879||P===35866)&&c.texParameteri(P,32882,nt[E.wrapR]),c.texParameteri(P,10240,k[E.magFilter]),c.texParameteri(P,10241,k[E.minFilter])):(c.texParameteri(P,10242,33071),c.texParameteri(P,10243,33071),(P===32879||P===35866)&&c.texParameteri(P,32882,33071),(E.wrapS!==Ve||E.wrapT!==Ve)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),c.texParameteri(P,10240,R(E.magFilter)),c.texParameteri(P,10241,R(E.minFilter)),E.minFilter!==ge&&E.minFilter!==Fe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const tt=t.get("EXT_texture_filter_anisotropic");if(E.magFilter===ge||E.minFilter!==Bs&&E.minFilter!==ki||E.type===Gn&&t.has("OES_texture_float_linear")===!1||r===!1&&E.type===Vi&&t.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(c.texParameterf(P,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function ut(P,E){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",O));const tt=E.source;let et=f.get(tt);et===void 0&&(et={},f.set(tt,et));const ot=X(E);if(ot!==P.__cacheKey){et[ot]===void 0&&(et[ot]={texture:c.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),et[ot].usedTimes++;const _t=et[P.__cacheKey];_t!==void 0&&(et[P.__cacheKey].usedTimes--,_t.usedTimes===0&&L(E)),P.__cacheKey=ot,P.__webglTexture=et[ot].texture}return Y}function ft(P,E,Y){let tt=3553;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(tt=35866),E.isData3DTexture&&(tt=32879);const et=ut(P,E),ot=E.source;e.bindTexture(tt,P.__webglTexture,33984+Y);const _t=n.get(ot);if(ot.version!==_t.__version||et===!0){e.activeTexture(33984+Y),c.pixelStorei(37440,E.flipY),c.pixelStorei(37441,E.premultiplyAlpha),c.pixelStorei(3317,E.unpackAlignment),c.pixelStorei(37443,0);const ct=S(E)&&M(E.image)===!1;let Z=y(E.image,ct,!1,h);Z=Be(E,Z);const Mt=M(Z)||r,mt=s.convert(E.format,E.encoding);let wt=s.convert(E.type),vt=v(E.internalFormat,mt,wt,E.encoding,E.isVideoTexture);ht(tt,E,Mt);let gt;const Dt=E.mipmaps,Wt=r&&E.isVideoTexture!==!0,ne=_t.__version===void 0||et===!0,B=b(E,Z,Mt);if(E.isDepthTexture)vt=6402,r?E.type===Gn?vt=36012:E.type===Un?vt=33190:E.type===pi?vt=35056:vt=33189:E.type===Gn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Wn&&vt===6402&&E.type!==Va&&E.type!==Un&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Un,wt=s.convert(E.type)),E.format===xi&&vt===6402&&(vt=34041,E.type!==pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=pi,wt=s.convert(E.type))),ne&&(Wt?e.texStorage2D(3553,1,vt,Z.width,Z.height):e.texImage2D(3553,0,vt,Z.width,Z.height,0,mt,wt,null));else if(E.isDataTexture)if(Dt.length>0&&Mt){Wt&&ne&&e.texStorage2D(3553,B,vt,Dt[0].width,Dt[0].height);for(let j=0,Q=Dt.length;j<Q;j++)gt=Dt[j],Wt?e.texSubImage2D(3553,j,0,0,gt.width,gt.height,mt,wt,gt.data):e.texImage2D(3553,j,vt,gt.width,gt.height,0,mt,wt,gt.data);E.generateMipmaps=!1}else Wt?(ne&&e.texStorage2D(3553,B,vt,Z.width,Z.height),e.texSubImage2D(3553,0,0,0,Z.width,Z.height,mt,wt,Z.data)):e.texImage2D(3553,0,vt,Z.width,Z.height,0,mt,wt,Z.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Wt&&ne&&e.texStorage3D(35866,B,vt,Dt[0].width,Dt[0].height,Z.depth);for(let j=0,Q=Dt.length;j<Q;j++)gt=Dt[j],E.format!==We?mt!==null?Wt?e.compressedTexSubImage3D(35866,j,0,0,0,gt.width,gt.height,Z.depth,mt,gt.data,0,0):e.compressedTexImage3D(35866,j,vt,gt.width,gt.height,Z.depth,0,gt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?e.texSubImage3D(35866,j,0,0,0,gt.width,gt.height,Z.depth,mt,wt,gt.data):e.texImage3D(35866,j,vt,gt.width,gt.height,Z.depth,0,mt,wt,gt.data)}else{Wt&&ne&&e.texStorage2D(3553,B,vt,Dt[0].width,Dt[0].height);for(let j=0,Q=Dt.length;j<Q;j++)gt=Dt[j],E.format!==We?mt!==null?Wt?e.compressedTexSubImage2D(3553,j,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(3553,j,vt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?e.texSubImage2D(3553,j,0,0,gt.width,gt.height,mt,wt,gt.data):e.texImage2D(3553,j,vt,gt.width,gt.height,0,mt,wt,gt.data)}else if(E.isDataArrayTexture)Wt?(ne&&e.texStorage3D(35866,B,vt,Z.width,Z.height,Z.depth),e.texSubImage3D(35866,0,0,0,0,Z.width,Z.height,Z.depth,mt,wt,Z.data)):e.texImage3D(35866,0,vt,Z.width,Z.height,Z.depth,0,mt,wt,Z.data);else if(E.isData3DTexture)Wt?(ne&&e.texStorage3D(32879,B,vt,Z.width,Z.height,Z.depth),e.texSubImage3D(32879,0,0,0,0,Z.width,Z.height,Z.depth,mt,wt,Z.data)):e.texImage3D(32879,0,vt,Z.width,Z.height,Z.depth,0,mt,wt,Z.data);else if(E.isFramebufferTexture){if(ne)if(Wt)e.texStorage2D(3553,B,vt,Z.width,Z.height);else{let j=Z.width,Q=Z.height;for(let at=0;at<B;at++)e.texImage2D(3553,at,vt,j,Q,0,mt,wt,null),j>>=1,Q>>=1}}else if(Dt.length>0&&Mt){Wt&&ne&&e.texStorage2D(3553,B,vt,Dt[0].width,Dt[0].height);for(let j=0,Q=Dt.length;j<Q;j++)gt=Dt[j],Wt?e.texSubImage2D(3553,j,0,0,mt,wt,gt):e.texImage2D(3553,j,vt,mt,wt,gt);E.generateMipmaps=!1}else Wt?(ne&&e.texStorage2D(3553,B,vt,Z.width,Z.height),e.texSubImage2D(3553,0,0,0,mt,wt,Z)):e.texImage2D(3553,0,vt,mt,wt,Z);C(E,Mt)&&D(tt),_t.__version=ot.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function pt(P,E,Y){if(E.image.length!==6)return;const tt=ut(P,E),et=E.source;e.bindTexture(34067,P.__webglTexture,33984+Y);const ot=n.get(et);if(et.version!==ot.__version||tt===!0){e.activeTexture(33984+Y),c.pixelStorei(37440,E.flipY),c.pixelStorei(37441,E.premultiplyAlpha),c.pixelStorei(3317,E.unpackAlignment),c.pixelStorei(37443,0);const _t=E.isCompressedTexture||E.image[0].isCompressedTexture,ct=E.image[0]&&E.image[0].isDataTexture,Z=[];for(let j=0;j<6;j++)!_t&&!ct?Z[j]=y(E.image[j],!1,!0,l):Z[j]=ct?E.image[j].image:E.image[j],Z[j]=Be(E,Z[j]);const Mt=Z[0],mt=M(Mt)||r,wt=s.convert(E.format,E.encoding),vt=s.convert(E.type),gt=v(E.internalFormat,wt,vt,E.encoding),Dt=r&&E.isVideoTexture!==!0,Wt=ot.__version===void 0||tt===!0;let ne=b(E,Mt,mt);ht(34067,E,mt);let B;if(_t){Dt&&Wt&&e.texStorage2D(34067,ne,gt,Mt.width,Mt.height);for(let j=0;j<6;j++){B=Z[j].mipmaps;for(let Q=0;Q<B.length;Q++){const at=B[Q];E.format!==We?wt!==null?Dt?e.compressedTexSubImage2D(34069+j,Q,0,0,at.width,at.height,wt,at.data):e.compressedTexImage2D(34069+j,Q,gt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?e.texSubImage2D(34069+j,Q,0,0,at.width,at.height,wt,vt,at.data):e.texImage2D(34069+j,Q,gt,at.width,at.height,0,wt,vt,at.data)}}}else{B=E.mipmaps,Dt&&Wt&&(B.length>0&&ne++,e.texStorage2D(34067,ne,gt,Z[0].width,Z[0].height));for(let j=0;j<6;j++)if(ct){Dt?e.texSubImage2D(34069+j,0,0,0,Z[j].width,Z[j].height,wt,vt,Z[j].data):e.texImage2D(34069+j,0,gt,Z[j].width,Z[j].height,0,wt,vt,Z[j].data);for(let Q=0;Q<B.length;Q++){const dt=B[Q].image[j].image;Dt?e.texSubImage2D(34069+j,Q+1,0,0,dt.width,dt.height,wt,vt,dt.data):e.texImage2D(34069+j,Q+1,gt,dt.width,dt.height,0,wt,vt,dt.data)}}else{Dt?e.texSubImage2D(34069+j,0,0,0,wt,vt,Z[j]):e.texImage2D(34069+j,0,gt,wt,vt,Z[j]);for(let Q=0;Q<B.length;Q++){const at=B[Q];Dt?e.texSubImage2D(34069+j,Q+1,0,0,wt,vt,at.image[j]):e.texImage2D(34069+j,Q+1,gt,wt,vt,at.image[j])}}}C(E,mt)&&D(34067),ot.__version=et.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function yt(P,E,Y,tt,et){const ot=s.convert(Y.format,Y.encoding),_t=s.convert(Y.type),ct=v(Y.internalFormat,ot,_t,Y.encoding);n.get(E).__hasExternalTextures||(et===32879||et===35866?e.texImage3D(et,0,ct,E.width,E.height,E.depth,0,ot,_t,null):e.texImage2D(et,0,ct,E.width,E.height,0,ot,_t,null)),e.bindFramebuffer(36160,P),Vt(E)?u.framebufferTexture2DMultisampleEXT(36160,tt,et,n.get(Y).__webglTexture,0,Ht(E)):(et===3553||et>=34069&&et<=34074)&&c.framebufferTexture2D(36160,tt,et,n.get(Y).__webglTexture,0),e.bindFramebuffer(36160,null)}function Tt(P,E,Y){if(c.bindRenderbuffer(36161,P),E.depthBuffer&&!E.stencilBuffer){let tt=33189;if(Y||Vt(E)){const et=E.depthTexture;et&&et.isDepthTexture&&(et.type===Gn?tt=36012:et.type===Un&&(tt=33190));const ot=Ht(E);Vt(E)?u.renderbufferStorageMultisampleEXT(36161,ot,tt,E.width,E.height):c.renderbufferStorageMultisample(36161,ot,tt,E.width,E.height)}else c.renderbufferStorage(36161,tt,E.width,E.height);c.framebufferRenderbuffer(36160,36096,36161,P)}else if(E.depthBuffer&&E.stencilBuffer){const tt=Ht(E);Y&&Vt(E)===!1?c.renderbufferStorageMultisample(36161,tt,35056,E.width,E.height):Vt(E)?u.renderbufferStorageMultisampleEXT(36161,tt,35056,E.width,E.height):c.renderbufferStorage(36161,34041,E.width,E.height),c.framebufferRenderbuffer(36160,33306,36161,P)}else{const tt=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let et=0;et<tt.length;et++){const ot=tt[et],_t=s.convert(ot.format,ot.encoding),ct=s.convert(ot.type),Z=v(ot.internalFormat,_t,ct,ot.encoding),Mt=Ht(E);Y&&Vt(E)===!1?c.renderbufferStorageMultisample(36161,Mt,Z,E.width,E.height):Vt(E)?u.renderbufferStorageMultisampleEXT(36161,Mt,Z,E.width,E.height):c.renderbufferStorage(36161,Z,E.width,E.height)}}c.bindRenderbuffer(36161,null)}function Ct(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),K(E.depthTexture,0);const tt=n.get(E.depthTexture).__webglTexture,et=Ht(E);if(E.depthTexture.format===Wn)Vt(E)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,tt,0,et):c.framebufferTexture2D(36160,36096,3553,tt,0);else if(E.depthTexture.format===xi)Vt(E)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,tt,0,et):c.framebufferTexture2D(36160,33306,3553,tt,0);else throw new Error("Unknown depthTexture format")}function zt(P){const E=n.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Ct(E.__webglFramebuffer,P)}else if(Y){E.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(36160,E.__webglFramebuffer[tt]),E.__webglDepthbuffer[tt]=c.createRenderbuffer(),Tt(E.__webglDepthbuffer[tt],P,!1)}else e.bindFramebuffer(36160,E.__webglFramebuffer),E.__webglDepthbuffer=c.createRenderbuffer(),Tt(E.__webglDepthbuffer,P,!1);e.bindFramebuffer(36160,null)}function ce(P,E,Y){const tt=n.get(P);E!==void 0&&yt(tt.__webglFramebuffer,P,P.texture,36064,3553),Y!==void 0&&zt(P)}function Ne(P){const E=P.texture,Y=n.get(P),tt=n.get(E);P.addEventListener("dispose",N),P.isWebGLMultipleRenderTargets!==!0&&(tt.__webglTexture===void 0&&(tt.__webglTexture=c.createTexture()),tt.__version=E.version,o.memory.textures++);const et=P.isWebGLCubeRenderTarget===!0,ot=P.isWebGLMultipleRenderTargets===!0,_t=M(P)||r;if(et){Y.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)Y.__webglFramebuffer[ct]=c.createFramebuffer()}else{if(Y.__webglFramebuffer=c.createFramebuffer(),ot)if(i.drawBuffers){const ct=P.texture;for(let Z=0,Mt=ct.length;Z<Mt;Z++){const mt=n.get(ct[Z]);mt.__webglTexture===void 0&&(mt.__webglTexture=c.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&P.samples>0&&Vt(P)===!1){const ct=ot?E:[E];Y.__webglMultisampledFramebuffer=c.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,Y.__webglMultisampledFramebuffer);for(let Z=0;Z<ct.length;Z++){const Mt=ct[Z];Y.__webglColorRenderbuffer[Z]=c.createRenderbuffer(),c.bindRenderbuffer(36161,Y.__webglColorRenderbuffer[Z]);const mt=s.convert(Mt.format,Mt.encoding),wt=s.convert(Mt.type),vt=v(Mt.internalFormat,mt,wt,Mt.encoding,P.isXRRenderTarget===!0),gt=Ht(P);c.renderbufferStorageMultisample(36161,gt,vt,P.width,P.height),c.framebufferRenderbuffer(36160,36064+Z,36161,Y.__webglColorRenderbuffer[Z])}c.bindRenderbuffer(36161,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=c.createRenderbuffer(),Tt(Y.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(36160,null)}}if(et){e.bindTexture(34067,tt.__webglTexture),ht(34067,E,_t);for(let ct=0;ct<6;ct++)yt(Y.__webglFramebuffer[ct],P,E,36064,34069+ct);C(E,_t)&&D(34067),e.unbindTexture()}else if(ot){const ct=P.texture;for(let Z=0,Mt=ct.length;Z<Mt;Z++){const mt=ct[Z],wt=n.get(mt);e.bindTexture(3553,wt.__webglTexture),ht(3553,mt,_t),yt(Y.__webglFramebuffer,P,mt,36064+Z,3553),C(mt,_t)&&D(3553)}e.unbindTexture()}else{let ct=3553;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(r?ct=P.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ct,tt.__webglTexture),ht(ct,E,_t),yt(Y.__webglFramebuffer,P,E,36064,ct),C(E,_t)&&D(ct),e.unbindTexture()}P.depthBuffer&&zt(P)}function ve(P){const E=M(P)||r,Y=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let tt=0,et=Y.length;tt<et;tt++){const ot=Y[tt];if(C(ot,E)){const _t=P.isWebGLCubeRenderTarget?34067:3553,ct=n.get(ot).__webglTexture;e.bindTexture(_t,ct),D(_t),e.unbindTexture()}}}function he(P){if(r&&P.samples>0&&Vt(P)===!1){const E=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],Y=P.width,tt=P.height;let et=16384;const ot=[],_t=P.stencilBuffer?33306:36096,ct=n.get(P),Z=P.isWebGLMultipleRenderTargets===!0;if(Z)for(let Mt=0;Mt<E.length;Mt++)e.bindFramebuffer(36160,ct.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(36160,36064+Mt,36161,null),e.bindFramebuffer(36160,ct.__webglFramebuffer),c.framebufferTexture2D(36009,36064+Mt,3553,null,0);e.bindFramebuffer(36008,ct.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,ct.__webglFramebuffer);for(let Mt=0;Mt<E.length;Mt++){ot.push(36064+Mt),P.depthBuffer&&ot.push(_t);const mt=ct.__ignoreDepthValues!==void 0?ct.__ignoreDepthValues:!1;if(mt===!1&&(P.depthBuffer&&(et|=256),P.stencilBuffer&&(et|=1024)),Z&&c.framebufferRenderbuffer(36008,36064,36161,ct.__webglColorRenderbuffer[Mt]),mt===!0&&(c.invalidateFramebuffer(36008,[_t]),c.invalidateFramebuffer(36009,[_t])),Z){const wt=n.get(E[Mt]).__webglTexture;c.framebufferTexture2D(36009,36064,3553,wt,0)}c.blitFramebuffer(0,0,Y,tt,0,0,Y,tt,et,9728),m&&c.invalidateFramebuffer(36008,ot)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),Z)for(let Mt=0;Mt<E.length;Mt++){e.bindFramebuffer(36160,ct.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(36160,36064+Mt,36161,ct.__webglColorRenderbuffer[Mt]);const mt=n.get(E[Mt]).__webglTexture;e.bindFramebuffer(36160,ct.__webglFramebuffer),c.framebufferTexture2D(36009,36064+Mt,3553,mt,0)}e.bindFramebuffer(36009,ct.__webglMultisampledFramebuffer)}}function Ht(P){return Math.min(d,P.samples)}function Vt(P){const E=n.get(P);return r&&P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function qe(P){const E=o.render.frame;g.get(P)!==E&&(g.set(P,E),P.update())}function Be(P,E){const Y=P.encoding,tt=P.format,et=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Lr||Y!==qn&&(Y===Gt?r===!1?t.has("EXT_sRGB")===!0&&tt===We?(P.format=Lr,P.minFilter=Fe,P.generateMipmaps=!1):E=Xa.sRGBToLinear(E):(tt!==We||et!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",Y)),E}this.allocateTextureUnit=V,this.resetTextureUnits=H,this.setTexture2D=K,this.setTexture2DArray=rt,this.setTexture3D=F,this.setTextureCube=J,this.rebindTextures=ce,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Vt}function yp(c,t,e){const n=e.isWebGL2;function i(s,o=null){let r;if(s===Hn)return 5121;if(s===sc)return 32819;if(s===rc)return 32820;if(s===ec)return 5120;if(s===nc)return 5122;if(s===Va)return 5123;if(s===ic)return 5124;if(s===Un)return 5125;if(s===Gn)return 5126;if(s===Vi)return n?5131:(r=t.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(s===oc)return 6406;if(s===We)return 6408;if(s===ac)return 6409;if(s===lc)return 6410;if(s===Wn)return 6402;if(s===xi)return 34041;if(s===Lr)return r=t.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(s===cc)return 6403;if(s===hc)return 36244;if(s===uc)return 33319;if(s===dc)return 33320;if(s===fc)return 36249;if(s===Os||s===Us||s===Gs||s===ks)if(o===Gt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(s===Os)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Us)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(s===Os)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Us)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Gs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ks)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===$r||s===Zr||s===Kr||s===Jr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(s===$r)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Zr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Kr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Jr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===pc)return r=t.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Qr||s===to)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(s===Qr)return o===Gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(s===to)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===eo||s===no||s===io||s===so||s===ro||s===oo||s===ao||s===lo||s===co||s===ho||s===uo||s===fo||s===po||s===mo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(s===eo)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===no)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===io)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===so)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ro)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===oo)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ao)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===lo)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===co)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ho)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===uo)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===fo)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===po)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===mo)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Vs)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(s===Vs)return o===Gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===mc||s===go||s===_o||s===xo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(s===Vs)return r.COMPRESSED_RED_RGTC1_EXT;if(s===go)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===_o)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===xo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===pi?n?34042:(r=t.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):c[s]!==void 0?c[s]:null}return{convert:i}}class Mp extends Pe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class gs extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wp={type:"move"};class pr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const r=this._targetRay,a=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const p of t.hand.values()){const f=e.getJointPose(p,n),_=this._getHandJoint(l,p);f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=f.radius),_.visible=f!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&u>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else a!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1));r!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(r.matrix.fromArray(i.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),i.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(i.linearVelocity)):r.hasLinearVelocity=!1,i.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(i.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(wp)))}return r!==null&&(r.visible=i!==null),a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new gs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class bp extends Me{constructor(t,e,n,i,s,o,r,a,l,h){if(h=h!==void 0?h:Wn,h!==Wn&&h!==xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Wn&&(n=Un),n===void 0&&h===xi&&(n=pi),super(null,i,s,o,r,a,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:ge,this.minFilter=a!==void 0?a:ge,this.flipY=!1,this.generateMipmaps=!1}}class Sp extends Mi{constructor(t,e){super();const n=this;let i=null,s=1,o=null,r="local-floor",a=1,l=null,h=null,d=null,u=null,m=null,g=null;const p=e.getContextAttributes();let f=null,_=null;const x=[],y=[],M=new Set,S=new Map,C=new Pe;C.layers.enable(1),C.viewport=new kt;const D=new Pe;D.layers.enable(2),D.viewport=new kt;const v=[C,D],b=new Mp;b.layers.enable(1),b.layers.enable(2);let R=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let J=x[F];return J===void 0&&(J=new pr,x[F]=J),J.getTargetRaySpace()},this.getControllerGrip=function(F){let J=x[F];return J===void 0&&(J=new pr,x[F]=J),J.getGripSpace()},this.getHand=function(F){let J=x[F];return J===void 0&&(J=new pr,x[F]=J),J.getHandSpace()};function N(F){const J=y.indexOf(F.inputSource);if(J===-1)return;const nt=x[J];nt!==void 0&&nt.dispatchEvent({type:F.type,data:F.inputSource})}function A(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",A),i.removeEventListener("inputsourceschange",L);for(let F=0;F<x.length;F++){const J=y[F];J!==null&&(y[F]=null,x[F].disconnect(J))}R=null,O=null,t.setRenderTarget(f),m=null,u=null,d=null,i=null,_=null,rt.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){r=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(F){l=F},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(F){if(i=F,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",A),i.addEventListener("inputsourceschange",L),p.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const J={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,e,J),i.updateRenderState({baseLayer:m}),_=new Xn(m.framebufferWidth,m.framebufferHeight,{format:We,type:Hn,encoding:t.outputEncoding,stencilBuffer:p.stencil})}else{let J=null,nt=null,k=null;p.depth&&(k=p.stencil?35056:33190,J=p.stencil?xi:Wn,nt=p.stencil?pi:Un);const ht={colorFormat:32856,depthFormat:k,scaleFactor:s};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(ht),i.updateRenderState({layers:[u]}),_=new Xn(u.textureWidth,u.textureHeight,{format:We,type:Hn,depthTexture:new bp(u.textureWidth,u.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:p.stencil,encoding:t.outputEncoding,samples:p.antialias?4:0});const ut=t.properties.get(_);ut.__ignoreDepthValues=u.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(a),l=null,o=await i.requestReferenceSpace(r),rt.setContext(i),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function L(F){for(let J=0;J<F.removed.length;J++){const nt=F.removed[J],k=y.indexOf(nt);k>=0&&(y[k]=null,x[k].disconnect(nt))}for(let J=0;J<F.added.length;J++){const nt=F.added[J];let k=y.indexOf(nt);if(k===-1){for(let ut=0;ut<x.length;ut++)if(ut>=y.length){y.push(nt),k=ut;break}else if(y[ut]===null){y[ut]=nt,k=ut;break}if(k===-1)break}const ht=x[k];ht&&ht.connect(nt)}}const I=new U,z=new U;function H(F,J,nt){I.setFromMatrixPosition(J.matrixWorld),z.setFromMatrixPosition(nt.matrixWorld);const k=I.distanceTo(z),ht=J.projectionMatrix.elements,ut=nt.projectionMatrix.elements,ft=ht[14]/(ht[10]-1),pt=ht[14]/(ht[10]+1),yt=(ht[9]+1)/ht[5],Tt=(ht[9]-1)/ht[5],Ct=(ht[8]-1)/ht[0],zt=(ut[8]+1)/ut[0],ce=ft*Ct,Ne=ft*zt,ve=k/(-Ct+zt),he=ve*-Ct;J.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(he),F.translateZ(ve),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const Ht=ft+ve,Vt=pt+ve,qe=ce-he,Be=Ne+(k-he),P=yt*pt/Vt*Ht,E=Tt*pt/Vt*Ht;F.projectionMatrix.makePerspective(qe,Be,P,E,Ht,Vt)}function V(F,J){J===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(J.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(i===null)return;b.near=D.near=C.near=F.near,b.far=D.far=C.far=F.far,(R!==b.near||O!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),R=b.near,O=b.far);const J=F.parent,nt=b.cameras;V(b,J);for(let ht=0;ht<nt.length;ht++)V(nt[ht],J);b.matrixWorld.decompose(b.position,b.quaternion,b.scale),F.matrix.copy(b.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale);const k=F.children;for(let ht=0,ut=k.length;ht<ut;ht++)k[ht].updateMatrixWorld(!0);nt.length===2?H(b,C,D):b.projectionMatrix.copy(C.projectionMatrix)},this.getCamera=function(){return b},this.getFoveation=function(){if(!(u===null&&m===null))return a},this.setFoveation=function(F){a=F,u!==null&&(u.fixedFoveation=F),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=F)},this.getPlanes=function(){return M};let X=null;function K(F,J){if(h=J.getViewerPose(l||o),g=J,h!==null){const nt=h.views;m!==null&&(t.setRenderTargetFramebuffer(_,m.framebuffer),t.setRenderTarget(_));let k=!1;nt.length!==b.cameras.length&&(b.cameras.length=0,k=!0);for(let ht=0;ht<nt.length;ht++){const ut=nt[ht];let ft=null;if(m!==null)ft=m.getViewport(ut);else{const yt=d.getViewSubImage(u,ut);ft=yt.viewport,ht===0&&(t.setRenderTargetTextures(_,yt.colorTexture,u.ignoreDepthValues?void 0:yt.depthStencilTexture),t.setRenderTarget(_))}let pt=v[ht];pt===void 0&&(pt=new Pe,pt.layers.enable(ht),pt.viewport=new kt,v[ht]=pt),pt.matrix.fromArray(ut.transform.matrix),pt.projectionMatrix.fromArray(ut.projectionMatrix),pt.viewport.set(ft.x,ft.y,ft.width,ft.height),ht===0&&b.matrix.copy(pt.matrix),k===!0&&b.cameras.push(pt)}}for(let nt=0;nt<x.length;nt++){const k=y[nt],ht=x[nt];k!==null&&ht!==void 0&&ht.update(k,J,l||o)}if(X&&X(F,J),J.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:J.detectedPlanes});let nt=null;for(const k of M)J.detectedPlanes.has(k)||(nt===null&&(nt=[]),nt.push(k));if(nt!==null)for(const k of nt)M.delete(k),S.delete(k),n.dispatchEvent({type:"planeremoved",data:k});for(const k of J.detectedPlanes)if(!M.has(k))M.add(k),S.set(k,J.lastChangedTime),n.dispatchEvent({type:"planeadded",data:k});else{const ht=S.get(k);k.lastChangedTime>ht&&(S.set(k,k.lastChangedTime),n.dispatchEvent({type:"planechanged",data:k}))}}g=null}const rt=new il;rt.setAnimationLoop(K),this.setAnimationLoop=function(F){X=F},this.dispose=function(){}}}function Ep(c,t){function e(p,f){f.color.getRGB(p.fogColor.value,tl(c)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function n(p,f,_,x,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(p,f):f.isMeshToonMaterial?(i(p,f),h(p,f)):f.isMeshPhongMaterial?(i(p,f),l(p,f)):f.isMeshStandardMaterial?(i(p,f),d(p,f),f.isMeshPhysicalMaterial&&u(p,f,y)):f.isMeshMatcapMaterial?(i(p,f),m(p,f)):f.isMeshDepthMaterial?i(p,f):f.isMeshDistanceMaterial?(i(p,f),g(p,f)):f.isMeshNormalMaterial?i(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?r(p,f,_,x):f.isSpriteMaterial?a(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===Re&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===Re&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const _=t.get(f).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const M=c.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*M}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let x;f.map?x=f.map:f.specularMap?x=f.specularMap:f.displacementMap?x=f.displacementMap:f.normalMap?x=f.normalMap:f.bumpMap?x=f.bumpMap:f.roughnessMap?x=f.roughnessMap:f.metalnessMap?x=f.metalnessMap:f.alphaMap?x=f.alphaMap:f.emissiveMap?x=f.emissiveMap:f.clearcoatMap?x=f.clearcoatMap:f.clearcoatNormalMap?x=f.clearcoatNormalMap:f.clearcoatRoughnessMap?x=f.clearcoatRoughnessMap:f.iridescenceMap?x=f.iridescenceMap:f.iridescenceThicknessMap?x=f.iridescenceThicknessMap:f.specularIntensityMap?x=f.specularIntensityMap:f.specularColorMap?x=f.specularColorMap:f.transmissionMap?x=f.transmissionMap:f.thicknessMap?x=f.thicknessMap:f.sheenColorMap?x=f.sheenColorMap:f.sheenRoughnessMap&&(x=f.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix));let y;f.aoMap?y=f.aoMap:f.lightMap&&(y=f.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uv2Transform.value.copy(y.matrix))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function r(p,f,_,x){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*_,p.scale.value=x*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let y;f.map?y=f.map:f.alphaMap&&(y=f.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let _;f.map?_=f.map:f.alphaMap&&(_=f.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function l(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),t.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function u(p,f,_){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===Re&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function Tp(c,t,e,n){let i={},s={},o=[];const r=e.isWebGL2?c.getParameter(35375):0;function a(x,y){const M=y.program;n.uniformBlockBinding(x,M)}function l(x,y){let M=i[x.id];M===void 0&&(g(x),M=h(x),i[x.id]=M,x.addEventListener("dispose",f));const S=y.program;n.updateUBOMapping(x,S);const C=t.render.frame;s[x.id]!==C&&(u(x),s[x.id]=C)}function h(x){const y=d();x.__bindingPointIndex=y;const M=c.createBuffer(),S=x.__size,C=x.usage;return c.bindBuffer(35345,M),c.bufferData(35345,S,C),c.bindBuffer(35345,null),c.bindBufferBase(35345,y,M),M}function d(){for(let x=0;x<r;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const y=i[x.id],M=x.uniforms,S=x.__cache;c.bindBuffer(35345,y);for(let C=0,D=M.length;C<D;C++){const v=M[C];if(m(v,C,S)===!0){const b=v.__offset,R=Array.isArray(v.value)?v.value:[v.value];let O=0;for(let N=0;N<R.length;N++){const A=R[N],L=p(A);typeof A=="number"?(v.__data[0]=A,c.bufferSubData(35345,b+O,v.__data)):A.isMatrix3?(v.__data[0]=A.elements[0],v.__data[1]=A.elements[1],v.__data[2]=A.elements[2],v.__data[3]=A.elements[0],v.__data[4]=A.elements[3],v.__data[5]=A.elements[4],v.__data[6]=A.elements[5],v.__data[7]=A.elements[0],v.__data[8]=A.elements[6],v.__data[9]=A.elements[7],v.__data[10]=A.elements[8],v.__data[11]=A.elements[0]):(A.toArray(v.__data,O),O+=L.storage/Float32Array.BYTES_PER_ELEMENT)}c.bufferSubData(35345,b,v.__data)}}c.bindBuffer(35345,null)}function m(x,y,M){const S=x.value;if(M[y]===void 0){if(typeof S=="number")M[y]=S;else{const C=Array.isArray(S)?S:[S],D=[];for(let v=0;v<C.length;v++)D.push(C[v].clone());M[y]=D}return!0}else if(typeof S=="number"){if(M[y]!==S)return M[y]=S,!0}else{const C=Array.isArray(M[y])?M[y]:[M[y]],D=Array.isArray(S)?S:[S];for(let v=0;v<C.length;v++){const b=C[v];if(b.equals(D[v])===!1)return b.copy(D[v]),!0}}return!1}function g(x){const y=x.uniforms;let M=0;const S=16;let C=0;for(let D=0,v=y.length;D<v;D++){const b=y[D],R={boundary:0,storage:0},O=Array.isArray(b.value)?b.value:[b.value];for(let N=0,A=O.length;N<A;N++){const L=O[N],I=p(L);R.boundary+=I.boundary,R.storage+=I.storage}if(b.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=M,D>0){C=M%S;const N=S-C;C!==0&&N-R.boundary<0&&(M+=S-C,b.__offset=M)}M+=R.storage}return C=M%S,C>0&&(M+=S-C),x.__size=M,x.__cache={},this}function p(x){const y={boundary:0,storage:0};return typeof x=="number"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function f(x){const y=x.target;y.removeEventListener("dispose",f);const M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),c.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function _(){for(const x in i)c.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:a,update:l,dispose:_}}function Ap(){const c=Hi("canvas");return c.style.display="block",c}function Fr(c={}){this.isWebGLRenderer=!0;const t=c.canvas!==void 0?c.canvas:Ap(),e=c.context!==void 0?c.context:null,n=c.depth!==void 0?c.depth:!0,i=c.stencil!==void 0?c.stencil:!0,s=c.antialias!==void 0?c.antialias:!1,o=c.premultipliedAlpha!==void 0?c.premultipliedAlpha:!0,r=c.preserveDrawingBuffer!==void 0?c.preserveDrawingBuffer:!1,a=c.powerPreference!==void 0?c.powerPreference:"default",l=c.failIfMajorPerformanceCaveat!==void 0?c.failIfMajorPerformanceCaveat:!1;let h;e!==null?h=e.getContextAttributes().alpha:h=c.alpha!==void 0?c.alpha:!1;let d=null,u=null;const m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=qn,this.useLegacyLights=!0,this.toneMapping=mn,this.toneMappingExposure=1;const p=this;let f=!1,_=0,x=0,y=null,M=-1,S=null;const C=new kt,D=new kt;let v=null,b=t.width,R=t.height,O=1,N=null,A=null;const L=new kt(0,0,b,R),I=new kt(0,0,b,R);let z=!1;const H=new Ir;let V=!1,X=!1,K=null;const rt=new jt,F=new U,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function nt(){return y===null?O:1}let k=e;function ht(T,W){for(let q=0;q<T.length;q++){const G=T[q],$=t.getContext(G,W);if($!==null)return $}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:r,powerPreference:a,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rr}`),t.addEventListener("webglcontextlost",wt,!1),t.addEventListener("webglcontextrestored",vt,!1),t.addEventListener("webglcontextcreationerror",gt,!1),k===null){const W=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&W.shift(),k=ht(W,T),k===null)throw ht(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ut,ft,pt,yt,Tt,Ct,zt,ce,Ne,ve,he,Ht,Vt,qe,Be,P,E,Y,tt,et,ot,_t,ct,Z;function Mt(){ut=new Bd(k),ft=new Pd(k,ut,c),ut.init(ft),_t=new yp(k,ut,ft),pt=new xp(k,ut,ft),yt=new Gd,Tt=new sp,Ct=new vp(k,ut,pt,Tt,ft,_t,yt),zt=new Dd(p),ce=new Nd(p),Ne=new Yc(k,ft),ct=new Cd(k,ut,Ne,ft),ve=new Od(k,Ne,yt,ct),he=new Hd(k,ve,Ne,yt),tt=new Wd(k,ft,Ct),P=new Rd(Tt),Ht=new ip(p,zt,ce,ut,ft,ct,P),Vt=new Ep(p,Tt),qe=new op,Be=new dp(ut,ft),Y=new Ad(p,zt,ce,pt,he,h,o),E=new _p(p,he,ft),Z=new Tp(k,yt,ft,pt),et=new Ld(k,ut,yt,ft),ot=new Ud(k,ut,yt,ft),yt.programs=Ht.programs,p.capabilities=ft,p.extensions=ut,p.properties=Tt,p.renderLists=qe,p.shadowMap=E,p.state=pt,p.info=yt}Mt();const mt=new Sp(p,k);this.xr=mt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const T=ut.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ut.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(T){T!==void 0&&(O=T,this.setSize(b,R,!1))},this.getSize=function(T){return T.set(b,R)},this.setSize=function(T,W,q=!0){if(mt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}b=T,R=W,t.width=Math.floor(T*O),t.height=Math.floor(W*O),q===!0&&(t.style.width=T+"px",t.style.height=W+"px"),this.setViewport(0,0,T,W)},this.getDrawingBufferSize=function(T){return T.set(b*O,R*O).floor()},this.setDrawingBufferSize=function(T,W,q){b=T,R=W,O=q,t.width=Math.floor(T*q),t.height=Math.floor(W*q),this.setViewport(0,0,T,W)},this.getCurrentViewport=function(T){return T.copy(C)},this.getViewport=function(T){return T.copy(L)},this.setViewport=function(T,W,q,G){T.isVector4?L.set(T.x,T.y,T.z,T.w):L.set(T,W,q,G),pt.viewport(C.copy(L).multiplyScalar(O).floor())},this.getScissor=function(T){return T.copy(I)},this.setScissor=function(T,W,q,G){T.isVector4?I.set(T.x,T.y,T.z,T.w):I.set(T,W,q,G),pt.scissor(D.copy(I).multiplyScalar(O).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(T){pt.setScissorTest(z=T)},this.setOpaqueSort=function(T){N=T},this.setTransparentSort=function(T){A=T},this.getClearColor=function(T){return T.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor.apply(Y,arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha.apply(Y,arguments)},this.clear=function(T=!0,W=!0,q=!0){let G=0;T&&(G|=16384),W&&(G|=256),q&&(G|=1024),k.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",wt,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",gt,!1),qe.dispose(),Be.dispose(),Tt.dispose(),zt.dispose(),ce.dispose(),he.dispose(),ct.dispose(),Z.dispose(),Ht.dispose(),mt.dispose(),mt.removeEventListener("sessionstart",Q),mt.removeEventListener("sessionend",at),K&&(K.dispose(),K=null),dt.stop()};function wt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const T=yt.autoReset,W=E.enabled,q=E.autoUpdate,G=E.needsUpdate,$=E.type;Mt(),yt.autoReset=T,E.enabled=W,E.autoUpdate=q,E.needsUpdate=G,E.type=$}function gt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Dt(T){const W=T.target;W.removeEventListener("dispose",Dt),Wt(W)}function Wt(T){ne(T),Tt.remove(T)}function ne(T){const W=Tt.get(T).programs;W!==void 0&&(W.forEach(function(q){Ht.releaseProgram(q)}),T.isShaderMaterial&&Ht.releaseShaderCache(T))}this.renderBufferDirect=function(T,W,q,G,$,xt){W===null&&(W=J);const bt=$.isMesh&&$.matrixWorld.determinant()<0,Et=Ml(T,W,q,G,$);pt.setMaterial(G,bt);let At=q.index,It=1;G.wireframe===!0&&(At=ve.getWireframeAttribute(q),It=2);const Lt=q.drawRange,Pt=q.attributes.position;let Yt=Lt.start*It,be=(Lt.start+Lt.count)*It;xt!==null&&(Yt=Math.max(Yt,xt.start*It),be=Math.min(be,(xt.start+xt.count)*It)),At!==null?(Yt=Math.max(Yt,0),be=Math.min(be,At.count)):Pt!=null&&(Yt=Math.max(Yt,0),be=Math.min(be,Pt.count));const nn=be-Yt;if(nn<0||nn===1/0)return;ct.setup($,G,Et,q,At);let An,$t=et;if(At!==null&&(An=Ne.get(At),$t=ot,$t.setIndex(An)),$.isMesh)G.wireframe===!0?(pt.setLineWidth(G.wireframeLinewidth*nt()),$t.setMode(1)):$t.setMode(4);else if($.isLine){let Rt=G.linewidth;Rt===void 0&&(Rt=1),pt.setLineWidth(Rt*nt()),$.isLineSegments?$t.setMode(1):$.isLineLoop?$t.setMode(2):$t.setMode(3)}else $.isPoints?$t.setMode(0):$.isSprite&&$t.setMode(4);if($.isInstancedMesh)$t.renderInstances(Yt,nn,$.count);else if(q.isInstancedBufferGeometry){const Rt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Is=Math.min(q.instanceCount,Rt);$t.renderInstances(Yt,nn,Is)}else $t.render(Yt,nn)},this.compile=function(T,W){function q(G,$,xt){G.transparent===!0&&G.side===wn&&G.forceSinglePass===!1?(G.side=Re,G.needsUpdate=!0,Ie(G,$,xt),G.side=En,G.needsUpdate=!0,Ie(G,$,xt),G.side=wn):Ie(G,$,xt)}u=Be.get(T),u.init(),g.push(u),T.traverseVisible(function(G){G.isLight&&G.layers.test(W.layers)&&(u.pushLight(G),G.castShadow&&u.pushShadow(G))}),u.setupLights(p.useLegacyLights),T.traverse(function(G){const $=G.material;if($)if(Array.isArray($))for(let xt=0;xt<$.length;xt++){const bt=$[xt];q(bt,T,G)}else q($,T,G)}),g.pop(),u=null};let B=null;function j(T){B&&B(T)}function Q(){dt.stop()}function at(){dt.start()}const dt=new il;dt.setAnimationLoop(j),typeof self<"u"&&dt.setContext(self),this.setAnimationLoop=function(T){B=T,mt.setAnimationLoop(T),T===null?dt.stop():dt.start()},mt.addEventListener("sessionstart",Q),mt.addEventListener("sessionend",at),this.render=function(T,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),mt.enabled===!0&&mt.isPresenting===!0&&(mt.cameraAutoUpdate===!0&&mt.updateCamera(W),W=mt.getCamera()),T.isScene===!0&&T.onBeforeRender(p,T,W,y),u=Be.get(T,g.length),u.init(),g.push(u),rt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),H.setFromProjectionMatrix(rt),X=this.localClippingEnabled,V=P.init(this.clippingPlanes,X),d=qe.get(T,m.length),d.init(),m.push(d),Ot(T,W,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(N,A),V===!0&&P.beginShadows();const q=u.state.shadowsArray;if(E.render(q,T,W),V===!0&&P.endShadows(),this.info.autoReset===!0&&this.info.reset(),Y.render(d,T),u.setupLights(p.useLegacyLights),W.isArrayCamera){const G=W.cameras;for(let $=0,xt=G.length;$<xt;$++){const bt=G[$];ie(d,T,bt,bt.viewport)}}else ie(d,T,W);y!==null&&(Ct.updateMultisampleRenderTarget(y),Ct.updateRenderTargetMipmap(y)),T.isScene===!0&&T.onAfterRender(p,T,W),ct.resetDefaultState(),M=-1,S=null,g.pop(),g.length>0?u=g[g.length-1]:u=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function Ot(T,W,q,G){if(T.visible===!1)return;if(T.layers.test(W.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(W);else if(T.isLight)u.pushLight(T),T.castShadow&&u.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||H.intersectsSprite(T)){G&&F.setFromMatrixPosition(T.matrixWorld).applyMatrix4(rt);const bt=he.update(T),Et=T.material;Et.visible&&d.push(T,bt,Et,q,F.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==yt.render.frame&&(T.skeleton.update(),T.skeleton.frame=yt.render.frame),!T.frustumCulled||H.intersectsObject(T))){G&&F.setFromMatrixPosition(T.matrixWorld).applyMatrix4(rt);const bt=he.update(T),Et=T.material;if(Array.isArray(Et)){const At=bt.groups;for(let It=0,Lt=At.length;It<Lt;It++){const Pt=At[It],Yt=Et[Pt.materialIndex];Yt&&Yt.visible&&d.push(T,bt,Yt,q,F.z,Pt)}}else Et.visible&&d.push(T,bt,Et,q,F.z,null)}}const xt=T.children;for(let bt=0,Et=xt.length;bt<Et;bt++)Ot(xt[bt],W,q,G)}function ie(T,W,q,G){const $=T.opaque,xt=T.transmissive,bt=T.transparent;u.setupLightsView(q),V===!0&&P.setGlobalState(p.clippingPlanes,q),xt.length>0&&ue($,W,q),G&&pt.viewport(C.copy(G)),$.length>0&&Xe($,W,q),xt.length>0&&Xe(xt,W,q),bt.length>0&&Xe(bt,W,q),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function ue(T,W,q){const G=ft.isWebGL2;K===null&&(K=new Xn(1024,1024,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")?Vi:Hn,minFilter:ki,samples:G&&s===!0?4:0}));const $=p.getRenderTarget();p.setRenderTarget(K),p.clear();const xt=p.toneMapping;p.toneMapping=mn,Xe(T,W,q),p.toneMapping=xt,Ct.updateMultisampleRenderTarget(K),Ct.updateRenderTargetMipmap(K),p.setRenderTarget($)}function Xe(T,W,q){const G=W.isScene===!0?W.overrideMaterial:null;for(let $=0,xt=T.length;$<xt;$++){const bt=T[$],Et=bt.object,At=bt.geometry,It=G===null?bt.material:G,Lt=bt.group;Et.layers.test(q.layers)&&Xt(Et,W,q,At,It,Lt)}}function Xt(T,W,q,G,$,xt){T.onBeforeRender(p,W,q,G,$,xt),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(p,W,q,G,T,xt),$.transparent===!0&&$.side===wn&&$.forceSinglePass===!1?($.side=Re,$.needsUpdate=!0,p.renderBufferDirect(q,W,G,$,T,xt),$.side=En,$.needsUpdate=!0,p.renderBufferDirect(q,W,G,$,T,xt),$.side=wn):p.renderBufferDirect(q,W,G,$,T,xt),T.onAfterRender(p,W,q,G,$,xt)}function Ie(T,W,q){W.isScene!==!0&&(W=J);const G=Tt.get(T),$=u.state.lights,xt=u.state.shadowsArray,bt=$.state.version,Et=Ht.getParameters(T,$.state,xt,W,q),At=Ht.getProgramCacheKey(Et);let It=G.programs;G.environment=T.isMeshStandardMaterial?W.environment:null,G.fog=W.fog,G.envMap=(T.isMeshStandardMaterial?ce:zt).get(T.envMap||G.environment),It===void 0&&(T.addEventListener("dispose",Dt),It=new Map,G.programs=It);let Lt=It.get(At);if(Lt!==void 0){if(G.currentProgram===Lt&&G.lightsStateVersion===bt)return je(T,Et),Lt}else Et.uniforms=Ht.getUniforms(T),T.onBuild(q,Et,p),T.onBeforeCompile(Et,p),Lt=Ht.acquireProgram(Et,At),It.set(At,Lt),G.uniforms=Et.uniforms;const Pt=G.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pt.clippingPlanes=P.uniform),je(T,Et),G.needsLights=bl(T),G.lightsStateVersion=bt,G.needsLights&&(Pt.ambientLightColor.value=$.state.ambient,Pt.lightProbe.value=$.state.probe,Pt.directionalLights.value=$.state.directional,Pt.directionalLightShadows.value=$.state.directionalShadow,Pt.spotLights.value=$.state.spot,Pt.spotLightShadows.value=$.state.spotShadow,Pt.rectAreaLights.value=$.state.rectArea,Pt.ltc_1.value=$.state.rectAreaLTC1,Pt.ltc_2.value=$.state.rectAreaLTC2,Pt.pointLights.value=$.state.point,Pt.pointLightShadows.value=$.state.pointShadow,Pt.hemisphereLights.value=$.state.hemi,Pt.directionalShadowMap.value=$.state.directionalShadowMap,Pt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Pt.spotShadowMap.value=$.state.spotShadowMap,Pt.spotLightMatrix.value=$.state.spotLightMatrix,Pt.spotLightMap.value=$.state.spotLightMap,Pt.pointShadowMap.value=$.state.pointShadowMap,Pt.pointShadowMatrix.value=$.state.pointShadowMatrix);const Yt=Lt.getUniforms(),be=Es.seqWithValue(Yt.seq,Pt);return G.currentProgram=Lt,G.uniformsList=be,Lt}function je(T,W){const q=Tt.get(T);q.outputEncoding=W.outputEncoding,q.instancing=W.instancing,q.skinning=W.skinning,q.morphTargets=W.morphTargets,q.morphNormals=W.morphNormals,q.morphColors=W.morphColors,q.morphTargetsCount=W.morphTargetsCount,q.numClippingPlanes=W.numClippingPlanes,q.numIntersection=W.numClipIntersection,q.vertexAlphas=W.vertexAlphas,q.vertexTangents=W.vertexTangents,q.toneMapping=W.toneMapping}function Ml(T,W,q,G,$){W.isScene!==!0&&(W=J),Ct.resetTextureUnits();const xt=W.fog,bt=G.isMeshStandardMaterial?W.environment:null,Et=y===null?p.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:qn,At=(G.isMeshStandardMaterial?ce:zt).get(G.envMap||bt),It=G.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Lt=!!G.normalMap&&!!q.attributes.tangent,Pt=!!q.morphAttributes.position,Yt=!!q.morphAttributes.normal,be=!!q.morphAttributes.color,nn=G.toneMapped?p.toneMapping:mn,An=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,$t=An!==void 0?An.length:0,Rt=Tt.get(G),Is=u.state.lights;if(V===!0&&(X===!0||T!==S)){const Se=T===S&&G.id===M;P.setState(G,T,Se)}let se=!1;G.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==Is.state.version||Rt.outputEncoding!==Et||$.isInstancedMesh&&Rt.instancing===!1||!$.isInstancedMesh&&Rt.instancing===!0||$.isSkinnedMesh&&Rt.skinning===!1||!$.isSkinnedMesh&&Rt.skinning===!0||Rt.envMap!==At||G.fog===!0&&Rt.fog!==xt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==P.numPlanes||Rt.numIntersection!==P.numIntersection)||Rt.vertexAlphas!==It||Rt.vertexTangents!==Lt||Rt.morphTargets!==Pt||Rt.morphNormals!==Yt||Rt.morphColors!==be||Rt.toneMapping!==nn||ft.isWebGL2===!0&&Rt.morphTargetsCount!==$t)&&(se=!0):(se=!0,Rt.__version=G.version);let Cn=Rt.currentProgram;se===!0&&(Cn=Ie(G,W,$));let Gr=!1,Si=!1,zs=!1;const de=Cn.getUniforms(),Ln=Rt.uniforms;if(pt.useProgram(Cn.program)&&(Gr=!0,Si=!0,zs=!0),G.id!==M&&(M=G.id,Si=!0),Gr||S!==T){if(de.setValue(k,"projectionMatrix",T.projectionMatrix),ft.logarithmicDepthBuffer&&de.setValue(k,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),S!==T&&(S=T,Si=!0,zs=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const Se=de.map.cameraPosition;Se!==void 0&&Se.setValue(k,F.setFromMatrixPosition(T.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&de.setValue(k,"isOrthographic",T.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||$.isSkinnedMesh)&&de.setValue(k,"viewMatrix",T.matrixWorldInverse)}if($.isSkinnedMesh){de.setOptional(k,$,"bindMatrix"),de.setOptional(k,$,"bindMatrixInverse");const Se=$.skeleton;Se&&(ft.floatVertexTextures?(Se.boneTexture===null&&Se.computeBoneTexture(),de.setValue(k,"boneTexture",Se.boneTexture,Ct),de.setValue(k,"boneTextureSize",Se.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Fs=q.morphAttributes;if((Fs.position!==void 0||Fs.normal!==void 0||Fs.color!==void 0&&ft.isWebGL2===!0)&&tt.update($,q,Cn),(Si||Rt.receiveShadow!==$.receiveShadow)&&(Rt.receiveShadow=$.receiveShadow,de.setValue(k,"receiveShadow",$.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Ln.envMap.value=At,Ln.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),Si&&(de.setValue(k,"toneMappingExposure",p.toneMappingExposure),Rt.needsLights&&wl(Ln,zs),xt&&G.fog===!0&&Vt.refreshFogUniforms(Ln,xt),Vt.refreshMaterialUniforms(Ln,G,O,R,K),Es.upload(k,Rt.uniformsList,Ln,Ct)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Es.upload(k,Rt.uniformsList,Ln,Ct),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&de.setValue(k,"center",$.center),de.setValue(k,"modelViewMatrix",$.modelViewMatrix),de.setValue(k,"normalMatrix",$.normalMatrix),de.setValue(k,"modelMatrix",$.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Se=G.uniformsGroups;for(let Ns=0,Sl=Se.length;Ns<Sl;Ns++)if(ft.isWebGL2){const kr=Se[Ns];Z.update(kr,Cn),Z.bind(kr,Cn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Cn}function wl(T,W){T.ambientLightColor.needsUpdate=W,T.lightProbe.needsUpdate=W,T.directionalLights.needsUpdate=W,T.directionalLightShadows.needsUpdate=W,T.pointLights.needsUpdate=W,T.pointLightShadows.needsUpdate=W,T.spotLights.needsUpdate=W,T.spotLightShadows.needsUpdate=W,T.rectAreaLights.needsUpdate=W,T.hemisphereLights.needsUpdate=W}function bl(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(T,W,q){Tt.get(T.texture).__webglTexture=W,Tt.get(T.depthTexture).__webglTexture=q;const G=Tt.get(T);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=q===void 0,G.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,W){const q=Tt.get(T);q.__webglFramebuffer=W,q.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(T,W=0,q=0){y=T,_=W,x=q;let G=!0,$=null,xt=!1,bt=!1;if(T){const At=Tt.get(T);At.__useDefaultFramebuffer!==void 0?(pt.bindFramebuffer(36160,null),G=!1):At.__webglFramebuffer===void 0?Ct.setupRenderTarget(T):At.__hasExternalTextures&&Ct.rebindTextures(T,Tt.get(T.texture).__webglTexture,Tt.get(T.depthTexture).__webglTexture);const It=T.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(bt=!0);const Lt=Tt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?($=Lt[W],xt=!0):ft.isWebGL2&&T.samples>0&&Ct.useMultisampledRTT(T)===!1?$=Tt.get(T).__webglMultisampledFramebuffer:$=Lt,C.copy(T.viewport),D.copy(T.scissor),v=T.scissorTest}else C.copy(L).multiplyScalar(O).floor(),D.copy(I).multiplyScalar(O).floor(),v=z;if(pt.bindFramebuffer(36160,$)&&ft.drawBuffers&&G&&pt.drawBuffers(T,$),pt.viewport(C),pt.scissor(D),pt.setScissorTest(v),xt){const At=Tt.get(T.texture);k.framebufferTexture2D(36160,36064,34069+W,At.__webglTexture,q)}else if(bt){const At=Tt.get(T.texture),It=W||0;k.framebufferTextureLayer(36160,36064,At.__webglTexture,q||0,It)}M=-1},this.readRenderTargetPixels=function(T,W,q,G,$,xt,bt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Tt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&bt!==void 0&&(Et=Et[bt]),Et){pt.bindFramebuffer(36160,Et);try{const At=T.texture,It=At.format,Lt=At.type;if(It!==We&&_t.convert(It)!==k.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pt=Lt===Vi&&(ut.has("EXT_color_buffer_half_float")||ft.isWebGL2&&ut.has("EXT_color_buffer_float"));if(Lt!==Hn&&_t.convert(Lt)!==k.getParameter(35738)&&!(Lt===Gn&&(ft.isWebGL2||ut.has("OES_texture_float")||ut.has("WEBGL_color_buffer_float")))&&!Pt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=T.width-G&&q>=0&&q<=T.height-$&&k.readPixels(W,q,G,$,_t.convert(It),_t.convert(Lt),xt)}finally{const At=y!==null?Tt.get(y).__webglFramebuffer:null;pt.bindFramebuffer(36160,At)}}},this.copyFramebufferToTexture=function(T,W,q=0){const G=Math.pow(2,-q),$=Math.floor(W.image.width*G),xt=Math.floor(W.image.height*G);Ct.setTexture2D(W,0),k.copyTexSubImage2D(3553,q,0,0,T.x,T.y,$,xt),pt.unbindTexture()},this.copyTextureToTexture=function(T,W,q,G=0){const $=W.image.width,xt=W.image.height,bt=_t.convert(q.format),Et=_t.convert(q.type);Ct.setTexture2D(q,0),k.pixelStorei(37440,q.flipY),k.pixelStorei(37441,q.premultiplyAlpha),k.pixelStorei(3317,q.unpackAlignment),W.isDataTexture?k.texSubImage2D(3553,G,T.x,T.y,$,xt,bt,Et,W.image.data):W.isCompressedTexture?k.compressedTexSubImage2D(3553,G,T.x,T.y,W.mipmaps[0].width,W.mipmaps[0].height,bt,W.mipmaps[0].data):k.texSubImage2D(3553,G,T.x,T.y,bt,Et,W.image),G===0&&q.generateMipmaps&&k.generateMipmap(3553),pt.unbindTexture()},this.copyTextureToTexture3D=function(T,W,q,G,$=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xt=T.max.x-T.min.x+1,bt=T.max.y-T.min.y+1,Et=T.max.z-T.min.z+1,At=_t.convert(G.format),It=_t.convert(G.type);let Lt;if(G.isData3DTexture)Ct.setTexture3D(G,0),Lt=32879;else if(G.isDataArrayTexture)Ct.setTexture2DArray(G,0),Lt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(37440,G.flipY),k.pixelStorei(37441,G.premultiplyAlpha),k.pixelStorei(3317,G.unpackAlignment);const Pt=k.getParameter(3314),Yt=k.getParameter(32878),be=k.getParameter(3316),nn=k.getParameter(3315),An=k.getParameter(32877),$t=q.isCompressedTexture?q.mipmaps[0]:q.image;k.pixelStorei(3314,$t.width),k.pixelStorei(32878,$t.height),k.pixelStorei(3316,T.min.x),k.pixelStorei(3315,T.min.y),k.pixelStorei(32877,T.min.z),q.isDataTexture||q.isData3DTexture?k.texSubImage3D(Lt,$,W.x,W.y,W.z,xt,bt,Et,At,It,$t.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Lt,$,W.x,W.y,W.z,xt,bt,Et,At,$t.data)):k.texSubImage3D(Lt,$,W.x,W.y,W.z,xt,bt,Et,At,It,$t),k.pixelStorei(3314,Pt),k.pixelStorei(32878,Yt),k.pixelStorei(3316,be),k.pixelStorei(3315,nn),k.pixelStorei(32877,An),$===0&&G.generateMipmaps&&k.generateMipmap(Lt),pt.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Ct.setTextureCube(T,0):T.isData3DTexture?Ct.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ct.setTexture2DArray(T,0):Ct.setTexture2D(T,0),pt.unbindTexture()},this.resetState=function(){_=0,x=0,y=null,pt.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(Fr.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(c){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!c}}});class Cp extends Fr{}Cp.prototype.isWebGL1Renderer=!0;class Lp extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class ll extends wi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Nt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const na=new U,ia=new U,sa=new jt,mr=new $a,_s=new Ls;class Pp extends xe{constructor(t=new we,e=new ll){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)na.fromBufferAttribute(e,i-1),ia.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=na.distanceTo(ia);t.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(i),_s.radius+=s,t.ray.intersectsSphere(_s)===!1)return;sa.copy(i).invert(),mr.copy(t.ray).applyMatrix4(sa);const r=s/((this.scale.x+this.scale.y+this.scale.z)/3),a=r*r,l=new U,h=new U,d=new U,u=new U,m=this.isLineSegments?2:1,g=n.index,f=n.attributes.position;if(g!==null){const _=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let y=_,M=x-1;y<M;y+=m){const S=g.getX(y),C=g.getX(y+1);if(l.fromBufferAttribute(f,S),h.fromBufferAttribute(f,C),mr.distanceSqToSegment(l,h,u,d)>a)continue;u.applyMatrix4(this.matrixWorld);const v=t.ray.origin.distanceTo(u);v<t.near||v>t.far||e.push({distance:v,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let y=_,M=x-1;y<M;y+=m){if(l.fromBufferAttribute(f,y),h.fromBufferAttribute(f,y+1),mr.distanceSqToSegment(l,h,u,d)>a)continue;u.applyMatrix4(this.matrixWorld);const C=t.ray.origin.distanceTo(u);C<t.near||C>t.far||e.push({distance:C,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}}const ra=new U,oa=new U;class Rp extends Pp{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)ra.fromBufferAttribute(e,i),oa.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ra.distanceTo(oa);t.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Nr extends we{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,r=0,a=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],d=[],u=[],m=[];let g=0;const p=[],f=n/2;let _=0;x(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Jt(d,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(m,2));function x(){const M=new U,S=new U;let C=0;const D=(e-t)/n;for(let v=0;v<=s;v++){const b=[],R=v/s,O=R*(e-t)+t;for(let N=0;N<=i;N++){const A=N/i,L=A*a+r,I=Math.sin(L),z=Math.cos(L);S.x=O*I,S.y=-R*n+f,S.z=O*z,d.push(S.x,S.y,S.z),M.set(I,D,z).normalize(),u.push(M.x,M.y,M.z),m.push(A,1-R),b.push(g++)}p.push(b)}for(let v=0;v<i;v++)for(let b=0;b<s;b++){const R=p[b][v],O=p[b+1][v],N=p[b+1][v+1],A=p[b][v+1];h.push(R,O,A),h.push(O,N,A),C+=6}l.addGroup(_,C,0),_+=C}function y(M){const S=g,C=new Bt,D=new U;let v=0;const b=M===!0?t:e,R=M===!0?1:-1;for(let N=1;N<=i;N++)d.push(0,f*R,0),u.push(0,R,0),m.push(.5,.5),g++;const O=g;for(let N=0;N<=i;N++){const L=N/i*a+r,I=Math.cos(L),z=Math.sin(L);D.x=b*z,D.y=f*R,D.z=b*I,d.push(D.x,D.y,D.z),u.push(0,R,0),C.x=I*.5+.5,C.y=z*.5*R+.5,m.push(C.x,C.y),g++}for(let N=0;N<i;N++){const A=S+N,L=O+N;M===!0?h.push(L,L+1,A):h.push(L+1,L,A),v+=3}l.addGroup(_,v,M===!0?1:2),_+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ts extends we{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:r},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const a=Math.min(o+r,Math.PI);let l=0;const h=[],d=new U,u=new U,m=[],g=[],p=[],f=[];for(let _=0;_<=n;_++){const x=[],y=_/n;let M=0;_==0&&o==0?M=.5/e:_==n&&a==Math.PI&&(M=-.5/e);for(let S=0;S<=e;S++){const C=S/e;d.x=-t*Math.cos(i+C*s)*Math.sin(o+y*r),d.y=t*Math.cos(o+y*r),d.z=t*Math.sin(i+C*s)*Math.sin(o+y*r),g.push(d.x,d.y,d.z),u.copy(d).normalize(),p.push(u.x,u.y,u.z),f.push(C+M,1-y),x.push(l++)}h.push(x)}for(let _=0;_<n;_++)for(let x=0;x<e;x++){const y=h[_][x+1],M=h[_][x],S=h[_+1][x],C=h[_+1][x+1];(_!==0||o>0)&&m.push(y,M,C),(_!==n-1||a<Math.PI)&&m.push(M,S,C)}this.setIndex(m),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(p,3)),this.setAttribute("uv",new Jt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ts(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class aa extends wi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wa,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const la={enabled:!1,files:{},add:function(c,t){this.enabled!==!1&&(this.files[c]=t)},get:function(c){if(this.enabled!==!1)return this.files[c]},remove:function(c){delete this.files[c]},clear:function(){this.files={}}};class Dp{constructor(t,e,n){const i=this;let s=!1,o=0,r=0,a;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){r++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,r),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,r),o===r&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return a?a(h):h},this.setURLModifier=function(h){return a=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){const m=l[d],g=l[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}}const Ip=new Dp;class cl{constructor(t){this.manager=t!==void 0?t:Ip,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}class zp extends cl{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=la.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const r=Hi("img");function a(){h(),la.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(d){h(),i&&i(d),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){r.removeEventListener("load",a,!1),r.removeEventListener("error",l,!1)}return r.addEventListener("load",a,!1),r.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(r.crossOrigin=this.crossOrigin),s.manager.itemStart(t),r.src=t,r}}class ca extends cl{constructor(t){super(t)}load(t,e,n,i){const s=new Me,o=new zp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(r){s.image=r,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class Fp extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const gr=new jt,ha=new U,ua=new U;class Np{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ir,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ha.setFromMatrixPosition(t.matrixWorld),e.position.copy(ha),ua.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ua),e.updateMatrixWorld(),gr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(gr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const da=new jt,Di=new U,_r=new U;class Bp extends Np{constructor(){super(new Pe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Bt(4,2),this._viewportCount=6,this._viewports=[new kt(2,1,1,1),new kt(0,1,1,1),new kt(3,1,1,1),new kt(1,1,1,1),new kt(3,0,1,1),new kt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Di.setFromMatrixPosition(t.matrixWorld),n.position.copy(Di),_r.copy(n.position),_r.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(_r),n.updateMatrixWorld(),i.makeTranslation(-Di.x,-Di.y,-Di.z),da.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(da)}}class Op extends Fp{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Bp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Up{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fa(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=fa();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function fa(){return(typeof performance>"u"?Date:performance).now()}class Gp extends Rp{constructor(t=10,e=10,n=4473924,i=8947848){n=new Nt(n),i=new Nt(i);const s=e/2,o=t/e,r=t/2,a=[],l=[];for(let u=0,m=0,g=-r;u<=e;u++,g+=o){a.push(-r,0,g,r,0,g),a.push(g,0,-r,g,0,r);const p=u===s?n:i;p.toArray(l,m),m+=3,p.toArray(l,m),m+=3,p.toArray(l,m),m+=3,p.toArray(l,m),m+=3}const h=new we;h.setAttribute("position",new Jt(a,3)),h.setAttribute("color",new Jt(l,3));const d=new ll({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rr);class He{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new w);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new w);const n=this.elements,i=t.x,s=t.y,o=t.z;return e.x=n[0]*i+n[1]*s+n[2]*o,e.y=n[3]*i+n[4]*s+n[5]*o,e.z=n[6]*i+n[7]*s+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new He);const n=this.elements,i=t.elements,s=e.elements,o=n[0],r=n[1],a=n[2],l=n[3],h=n[4],d=n[5],u=n[6],m=n[7],g=n[8],p=i[0],f=i[1],_=i[2],x=i[3],y=i[4],M=i[5],S=i[6],C=i[7],D=i[8];return s[0]=o*p+r*x+a*S,s[1]=o*f+r*y+a*C,s[2]=o*_+r*M+a*D,s[3]=l*p+h*x+d*S,s[4]=l*f+h*y+d*C,s[5]=l*_+h*M+d*D,s[6]=u*p+m*x+g*S,s[7]=u*f+m*y+g*C,s[8]=u*_+m*M+g*D,e}scale(t,e){e===void 0&&(e=new He);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new w);const n=3,i=4,s=[];let o,r;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(r=0;r<3;r++)s[o+i*r]=this.elements[o+3*r];s[3+4*0]=t.x,s[3+4*1]=t.y,s[3+4*2]=t.z;let a=3;const l=a;let h;const d=4;let u;do{if(o=l-a,s[o+i*o]===0){for(r=o+1;r<l;r++)if(s[o+i*r]!==0){h=d;do u=d-h,s[u+i*o]+=s[u+i*r];while(--h);break}}if(s[o+i*o]!==0)for(r=o+1;r<l;r++){const m=s[o+i*r]/s[o+i*o];h=d;do u=d-h,s[u+i*r]=u<=o?0:s[u+i*r]-s[u+i*o]*m;while(--h)}}while(--a);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new He);const e=3,n=6,i=kp;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let r=3;const a=r;let l;const h=n;let d;do{if(s=a-r,i[s+n*s]===0){for(o=s+1;o<a;o++)if(i[s+n*o]!==0){l=h;do d=h-l,i[d+n*s]+=i[d+n*o];while(--l);break}}if(i[s+n*s]!==0)for(o=s+1;o<a;o++){const u=i[s+n*o]/i[s+n*s];l=h;do d=h-l,i[d+n*o]=d<=s?0:i[d+n*o]-i[d+n*s]*u;while(--l)}}while(--r);s=2;do{o=s-1;do{const u=i[s+n*o]/i[s+n*s];l=n;do d=n-l,i[d+n*o]=i[d+n*o]-i[d+n*s]*u;while(--l)}while(o--)}while(--s);s=2;do{const u=1/i[s+n*s];l=n;do d=n-l,i[d+n*s]=i[d+n*s]*u;while(--l)}while(s--);s=2;do{o=2;do{if(d=i[e+o+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,o,d)}while(o--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,o=e+e,r=n+n,a=i+i,l=e*o,h=e*r,d=e*a,u=n*r,m=n*a,g=i*a,p=s*o,f=s*r,_=s*a,x=this.elements;return x[3*0+0]=1-(u+g),x[3*0+1]=h-_,x[3*0+2]=d+f,x[3*1+0]=h+_,x[3*1+1]=1-(l+g),x[3*1+2]=m-p,x[3*2+0]=d-f,x[3*2+1]=m+p,x[3*2+2]=1-(l+u),this}transpose(t){t===void 0&&(t=new He);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const kp=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class w{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new w);const n=t.x,i=t.y,s=t.z,o=this.x,r=this.y,a=this.z;return e.x=r*s-a*i,e.y=a*n-o*s,e.z=o*i-r*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new w(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new w(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new He([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new w);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,r=t.z;return Math.sqrt((s-e)*(s-e)+(o-n)*(o-n)+(r-i)*(r-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,r=t.z;return(s-e)*(s-e)+(o-n)*(o-n)+(r-i)*(r-i)}scale(t,e){e===void 0&&(e=new w);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new w),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new w),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new w),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=Vp,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=Wp;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(pa),pa.almostEquals(t,e)}clone(){return new w(this.x,this.y,this.z)}}w.ZERO=new w(0,0,0);w.UNIT_X=new w(1,0,0);w.UNIT_Y=new w(0,1,0);w.UNIT_Z=new w(0,0,1);const Vp=new w,Wp=new w,pa=new w;class De{constructor(t){t===void 0&&(t={}),this.lowerBound=new w,this.upperBound=new w,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,o=this.upperBound,r=n;s.copy(t[0]),r&&r.vmult(s,s),o.copy(s);for(let a=1;a<t.length;a++){let l=t[a];r&&(r.vmult(l,ma),l=ma),l.x>o.x&&(o.x=l.x),l.x<s.x&&(s.x=l.x),l.y>o.y&&(o.y=l.y),l.y<s.y&&(s.y=l.y),l.z>o.z&&(o.z=l.z),l.z<s.z&&(s.z=l.z)}return e&&(e.vadd(s,s),e.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new De().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,o=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,r=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,a=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return o&&r&&a}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,o,r,a){const l=this.lowerBound,h=this.upperBound;t.copy(l),e.set(h.x,l.y,l.z),n.set(h.x,h.y,l.z),i.set(l.x,h.y,h.z),s.set(h.x,l.y,h.z),o.set(l.x,h.y,l.z),r.set(l.x,l.y,h.z),a.copy(h)}toLocalFrame(t,e){const n=ga,i=n[0],s=n[1],o=n[2],r=n[3],a=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,r,a,l,h,d);for(let u=0;u!==8;u++){const m=n[u];t.pointToLocal(m,m)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=ga,i=n[0],s=n[1],o=n[2],r=n[3],a=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,r,a,l,h,d);for(let u=0;u!==8;u++){const m=n[u];t.pointToWorld(m,m)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,o=1/e.z,r=(this.lowerBound.x-n.x)*i,a=(this.upperBound.x-n.x)*i,l=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,m=Math.max(Math.max(Math.min(r,a),Math.min(l,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(r,a),Math.max(l,h)),Math.max(d,u));return!(g<0||m>g)}}const ma=new w,ga=[new w,new w,new w,new w,new w,new w,new w,new w];class _a{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class hl{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class qt{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new w),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=Hp,i=qp;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new qt);const n=this.x,i=this.y,s=this.z,o=this.w,r=t.x,a=t.y,l=t.z,h=t.w;return e.x=n*h+o*r+i*l-s*a,e.y=i*h+o*a+s*r-n*l,e.z=s*h+o*l+n*a-i*r,e.w=o*h-n*r-i*a-s*l,e}inverse(t){t===void 0&&(t=new qt);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const o=1/(e*e+n*n+i*i+s*s);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new qt),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new w);const n=t.x,i=t.y,s=t.z,o=this.x,r=this.y,a=this.z,l=this.w,h=l*n+r*s-a*i,d=l*i+a*n-o*s,u=l*s+o*i-r*n,m=-o*n-r*i-a*s;return e.x=h*l+m*-o+d*-a-u*-r,e.y=d*l+m*-r+u*-o-h*-a,e.z=u*l+m*-a+h*-r-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const o=this.x,r=this.y,a=this.z,l=this.w;switch(e){case"YZX":const h=o*r+a*l;if(h>.499&&(n=2*Math.atan2(o,l),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(o,l),i=-Math.PI/2,s=0),n===void 0){const d=o*o,u=r*r,m=a*a;n=Math.atan2(2*r*l-2*o*a,1-2*u-2*m),i=Math.asin(2*h),s=Math.atan2(2*o*l-2*r*a,1-2*d-2*m)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),o=Math.cos(e/2),r=Math.cos(n/2),a=Math.sin(t/2),l=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=a*o*r+s*l*h,this.y=s*l*r-a*o*h,this.z=s*o*h+a*l*r,this.w=s*o*r-a*l*h):i==="YXZ"?(this.x=a*o*r+s*l*h,this.y=s*l*r-a*o*h,this.z=s*o*h-a*l*r,this.w=s*o*r+a*l*h):i==="ZXY"?(this.x=a*o*r-s*l*h,this.y=s*l*r+a*o*h,this.z=s*o*h+a*l*r,this.w=s*o*r-a*l*h):i==="ZYX"?(this.x=a*o*r-s*l*h,this.y=s*l*r+a*o*h,this.z=s*o*h-a*l*r,this.w=s*o*r+a*l*h):i==="YZX"?(this.x=a*o*r+s*l*h,this.y=s*l*r+a*o*h,this.z=s*o*h-a*l*r,this.w=s*o*r-a*l*h):i==="XZY"&&(this.x=a*o*r-s*l*h,this.y=s*l*r-a*o*h,this.z=s*o*h+a*l*r,this.w=s*o*r+a*l*h),this}clone(){return new qt(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new qt);const i=this.x,s=this.y,o=this.z,r=this.w;let a=t.x,l=t.y,h=t.z,d=t.w,u,m,g,p,f;return m=i*a+s*l+o*h+r*d,m<0&&(m=-m,a=-a,l=-l,h=-h,d=-d),1-m>1e-6?(u=Math.acos(m),g=Math.sin(u),p=Math.sin((1-e)*u)/g,f=Math.sin(e*u)/g):(p=1-e,f=e),n.x=p*i+f*a,n.y=p*s+f*l,n.z=p*o+f*h,n.w=p*r+f*d,n}integrate(t,e,n,i){i===void 0&&(i=new qt);const s=t.x*n.x,o=t.y*n.y,r=t.z*n.z,a=this.x,l=this.y,h=this.z,d=this.w,u=e*.5;return i.x+=u*(s*d+o*h-r*l),i.y+=u*(o*d+r*a-s*h),i.z+=u*(r*d+s*l-o*a),i.w+=u*(-s*a-o*l-r*h),i}}const Hp=new w,qp=new w,Xp={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class st{constructor(t){t===void 0&&(t={}),this.id=st.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}st.idCounter=0;st.types=Xp;class Ft{constructor(t){t===void 0&&(t={}),this.position=new w,this.quaternion=new qt,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return Ft.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return Ft.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new w),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new w),n.vsub(t,i),e.conjugate(xa),xa.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new w),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new w),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new w),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const xa=new qt;class Ui extends st{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=t;super({type:st.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new w;for(let s=0;s!==t.length;s++){const o=t[s],r=o.length;for(let a=0;a!==r;a++){const l=(a+1)%r;e[o[a]].vsub(e[o[l]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new w;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];Ui.computeNormal(i,s,o,e)}static computeNormal(t,e,n,i){const s=new w,o=new w;e.vsub(t,o),n.vsub(e,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,o,r,a,l){const h=new w;let d=-1,u=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),s.vmult(h,h);const p=h.dot(o);p>u&&(u=p,d=g)}const m=[];for(let g=0;g<n.faces[d].length;g++){const p=n.vertices[n.faces[d][g]],f=new w;f.copy(p),s.vmult(f,f),i.vadd(f,f),m.push(f)}d>=0&&this.clipFaceAgainstHull(o,t,e,m,r,a,l)}findSeparatingAxis(t,e,n,i,s,o,r,a){const l=new w,h=new w,d=new w,u=new w,m=new w,g=new w;let p=Number.MAX_VALUE;const f=this;if(f.uniqueAxes)for(let _=0;_!==f.uniqueAxes.length;_++){n.vmult(f.uniqueAxes[_],l);const x=f.testSepAxis(l,t,e,n,i,s);if(x===!1)return!1;x<p&&(p=x,o.copy(l))}else{const _=r?r.length:f.faces.length;for(let x=0;x<_;x++){const y=r?r[x]:x;l.copy(f.faceNormals[y]),n.vmult(l,l);const M=f.testSepAxis(l,t,e,n,i,s);if(M===!1)return!1;M<p&&(p=M,o.copy(l))}}if(t.uniqueAxes)for(let _=0;_!==t.uniqueAxes.length;_++){s.vmult(t.uniqueAxes[_],h);const x=f.testSepAxis(h,t,e,n,i,s);if(x===!1)return!1;x<p&&(p=x,o.copy(h))}else{const _=a?a.length:t.faces.length;for(let x=0;x<_;x++){const y=a?a[x]:x;h.copy(t.faceNormals[y]),s.vmult(h,h);const M=f.testSepAxis(h,t,e,n,i,s);if(M===!1)return!1;M<p&&(p=M,o.copy(h))}}for(let _=0;_!==f.uniqueEdges.length;_++){n.vmult(f.uniqueEdges[_],u);for(let x=0;x!==t.uniqueEdges.length;x++)if(s.vmult(t.uniqueEdges[x],m),u.cross(m,g),!g.almostZero()){g.normalize();const y=f.testSepAxis(g,t,e,n,i,s);if(y===!1)return!1;y<p&&(p=y,o.copy(g))}}return i.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,s,o){const r=this;Ui.project(r,t,n,i,xr),Ui.project(e,t,s,o,vr);const a=xr[0],l=xr[1],h=vr[0],d=vr[1];if(a<d||h<l)return!1;const u=a-d,m=h-l;return u<m?u:m}calculateLocalInertia(t,e){const n=new w,i=new w;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,r=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*r*2*r),e.y=1/12*t*(2*s*2*s+2*r*2*r),e.z=1/12*t*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,o,r){const a=new w,l=new w,h=new w,d=new w,u=new w,m=new w,g=new w,p=new w,f=this,_=[],x=i,y=_;let M=-1,S=Number.MAX_VALUE;for(let R=0;R<f.faces.length;R++){a.copy(f.faceNormals[R]),n.vmult(a,a);const O=a.dot(t);O<S&&(S=O,M=R)}if(M<0)return;const C=f.faces[M];C.connectedFaces=[];for(let R=0;R<f.faces.length;R++)for(let O=0;O<f.faces[R].length;O++)C.indexOf(f.faces[R][O])!==-1&&R!==M&&C.connectedFaces.indexOf(R)===-1&&C.connectedFaces.push(R);const D=C.length;for(let R=0;R<D;R++){const O=f.vertices[C[R]],N=f.vertices[C[(R+1)%D]];O.vsub(N,l),h.copy(l),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[M]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),m.copy(O),n.vmult(m,m),e.vadd(m,m);const A=C.connectedFaces[R];g.copy(this.faceNormals[A]);const L=this.getPlaneConstantOfFace(A);p.copy(g),n.vmult(p,p);const I=L-p.dot(e);for(this.clipFaceAgainstPlane(x,y,p,I);x.length;)x.shift();for(;y.length;)x.push(y.shift())}g.copy(this.faceNormals[M]);const v=this.getPlaneConstantOfFace(M);p.copy(g),n.vmult(p,p);const b=v-p.dot(e);for(let R=0;R<x.length;R++){let O=p.dot(x[R])+b;if(O<=s&&(console.log(`clamped: depth=${O} to minDist=${s}`),O=s),O<=o){const N=x[R];if(O<=1e-6){const A={point:N,normal:p,depth:O};r.push(A)}}}}clipFaceAgainstPlane(t,e,n,i){let s,o;const r=t.length;if(r<2)return e;let a=t[t.length-1],l=t[0];s=n.dot(a)+i;for(let h=0;h<r;h++){if(l=t[h],o=n.dot(l)+i,s<0)if(o<0){const d=new w;d.copy(l),e.push(d)}else{const d=new w;a.lerp(l,s/(s-o),d),e.push(d)}else if(o<0){const d=new w;a.lerp(l,s/(s-o),d),e.push(d),e.push(l)}a=l,s=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new w);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new w);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let o,r,a,l,h,d,u=new w;for(let m=0;m<s.length;m++){u.copy(s[m]),e.vmult(u,u),t.vadd(u,u);const g=u;(o===void 0||g.x<o)&&(o=g.x),(l===void 0||g.x>l)&&(l=g.x),(r===void 0||g.y<r)&&(r=g.y),(h===void 0||g.y>h)&&(h=g.y),(a===void 0||g.z<a)&&(a=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(o,r,a),i.set(l,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new w);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const o=i[s];e.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];e.vmult(o,o)}}if(t)for(let s=0;s<n;s++){const o=i[s];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=null,o=new w;this.getAveragePointLocal(o);for(let r=0;r<this.faces.length;r++){let a=i[r];const l=e[n[r][0]],h=new w;t.vsub(l,h);const d=a.dot(h),u=new w;o.vsub(l,u);const m=a.dot(u);if(d<0&&m>0||d>0&&m<0)return!1}return s?1:-1}static project(t,e,n,i,s){const o=t.vertices.length,r=jp;let a=0,l=0;const h=Yp,d=t.vertices;h.setZero(),Ft.vectorToLocalFrame(n,i,e,r),Ft.pointToLocalFrame(n,i,h,h);const u=h.dot(r);l=a=d[0].dot(r);for(let m=1;m<o;m++){const g=d[m].dot(r);g>a&&(a=g),g<l&&(l=g)}if(l-=u,a-=u,l>a){const m=l;l=a,a=m}s[0]=a,s[1]=l}}const xr=[],vr=[];new w;const jp=new w,Yp=new w;class qi extends st{constructor(t){super({type:st.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=w,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],r=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],a=new Ui({vertices:s,faces:o,axes:r});this.convexPolyhedronRepresentation=a,a.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new w),qi.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)yn.set(s[o][0],s[o][1],s[o][2]),e.vmult(yn,yn),t.vadd(yn,yn),n(yn.x,yn.y,yn.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;$e[0].set(s.x,s.y,s.z),$e[1].set(-s.x,s.y,s.z),$e[2].set(-s.x,-s.y,s.z),$e[3].set(-s.x,-s.y,-s.z),$e[4].set(s.x,-s.y,-s.z),$e[5].set(s.x,s.y,-s.z),$e[6].set(-s.x,s.y,-s.z),$e[7].set(s.x,-s.y,s.z);const o=$e[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let r=1;r<8;r++){const a=$e[r];e.vmult(a,a),t.vadd(a,a);const l=a.x,h=a.y,d=a.z;l>i.x&&(i.x=l),h>i.y&&(i.y=h),d>i.z&&(i.z=d),l<n.x&&(n.x=l),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const yn=new w,$e=[new w,new w,new w,new w,new w,new w,new w,new w],Br={DYNAMIC:1,STATIC:2,KINEMATIC:4},Or={AWAKE:0,SLEEPY:1,SLEEPING:2};class lt extends hl{constructor(t){t===void 0&&(t={}),super(),this.id=lt.idCounter++,this.index=-1,this.world=null,this.vlambda=new w,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new w,this.previousPosition=new w,this.interpolatedPosition=new w,this.initPosition=new w,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new w,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new w,this.force=new w;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?lt.STATIC:lt.DYNAMIC,typeof t.type==typeof lt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=lt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new w,this.quaternion=new qt,this.initQuaternion=new qt,this.previousQuaternion=new qt,this.interpolatedQuaternion=new qt,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new w,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new w,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new w,this.invInertia=new w,this.invInertiaWorld=new He,this.invMassSolve=0,this.invInertiaSolve=new w,this.invInertiaWorldSolve=new He,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new w(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new w(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new De,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new w,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=lt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===lt.SLEEPING&&this.dispatchEvent(lt.wakeupEvent)}sleep(){this.sleepState=lt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===lt.AWAKE&&n<i?(this.sleepState=lt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(lt.sleepyEvent)):e===lt.SLEEPY&&n>i?this.wakeUp():e===lt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(lt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===lt.SLEEPING||this.type===lt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new w),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new w),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new w),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new w),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new w,s=new qt;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const o=t[s];o.updateBoundingSphereRadius();const r=e[s].length(),a=o.boundingSphereRadius;r+a>i&&(i=r+a)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=$p,o=Zp,r=this.quaternion,a=this.aabb,l=Kp;for(let h=0;h!==i;h++){const d=t[h];r.vmult(e[h],s),s.vadd(this.position,s),r.mult(n[h],o),d.calculateWorldAABB(s,o,l.lowerBound,l.upperBound),h===0?a.copy(l):a.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=Jp,i=Qp;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new w),this.type!==lt.DYNAMIC)return;this.sleepState===lt.SLEEPING&&this.wakeUp();const n=em;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new w),this.type!==lt.DYNAMIC)return;const n=nm,i=im;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===lt.DYNAMIC&&(this.sleepState===lt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new w),this.type!==lt.DYNAMIC)return;this.sleepState===lt.SLEEPING&&this.wakeUp();const n=e,i=sm;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=rm;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new w),this.type!==lt.DYNAMIC)return;const n=om,i=am;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=lm;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),qi.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new w;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===lt.DYNAMIC||this.type===lt.KINEMATIC)||this.sleepState===lt.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,r=this.force,a=this.torque,l=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,m=h*t;i.x+=r.x*m*u.x,i.y+=r.y*m*u.y,i.z+=r.z*m*u.z;const g=d.elements,p=this.angularFactor,f=a.x*p.x,_=a.y*p.y,x=a.z*p.z;s.x+=t*(g[0]*f+g[1]*_+g[2]*x),s.y+=t*(g[3]*f+g[4]*_+g[5]*x),s.z+=t*(g[6]*f+g[7]*_+g[8]*x),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,l.integrate(this.angularVelocity,t,this.angularFactor,l),e&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}lt.idCounter=0;lt.COLLIDE_EVENT_NAME="collide";lt.DYNAMIC=Br.DYNAMIC;lt.STATIC=Br.STATIC;lt.KINEMATIC=Br.KINEMATIC;lt.AWAKE=Or.AWAKE;lt.SLEEPY=Or.SLEEPY;lt.SLEEPING=Or.SLEEPING;lt.wakeupEvent={type:"wakeup"};lt.sleepyEvent={type:"sleepy"};lt.sleepEvent={type:"sleep"};const $p=new w,Zp=new qt,Kp=new De,Jp=new He,Qp=new He,tm=new He,em=new w,nm=new w,im=new w,sm=new w,rm=new w,om=new w,am=new w,lm=new w;class ul{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&lt.STATIC||t.sleepState===lt.SLEEPING)&&(e.type&lt.STATIC||e.sleepState===lt.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=cm;e.position.vsub(t.position,s);const o=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=hm,i=um,s=dm,o=t.length;for(let r=0;r!==o;r++)i[r]=t[r],s[r]=e[r];t.length=0,e.length=0;for(let r=0;r!==o;r++){const a=i[r].id,l=s[r].id,h=a<l?`${a},${l}`:`${l},${a}`;n[h]=r,n.keys.push(h)}for(let r=0;r!==n.keys.length;r++){const a=n.keys.pop(),l=n[a];t.push(i[l]),e.push(s[l]),delete n[a]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new w;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const cm=new w;new w;new qt;new w;const hm={keys:[]},um=[],dm=[];new w;new w;new w;class fm extends ul{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let o,r;for(let a=0;a!==s;a++)for(let l=0;l!==a;l++)o=i[a],r=i[l],this.needBroadphaseCollision(o,r)&&this.intersectionTest(o,r,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class As{constructor(){this.rayFromWorld=new w,this.rayToWorld=new w,this.hitNormalWorld=new w,this.hitPointWorld=new w,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,o,r){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=r}}let dl,fl,pl,ml,gl,_l,xl;const Ur={CLOSEST:1,ANY:2,ALL:4};dl=st.types.SPHERE;fl=st.types.PLANE;pl=st.types.BOX;ml=st.types.CYLINDER;gl=st.types.CONVEXPOLYHEDRON;_l=st.types.HEIGHTFIELD;xl=st.types.TRIMESH;class Kt{get[dl](){return this._intersectSphere}get[fl](){return this._intersectPlane}get[pl](){return this._intersectBox}get[ml](){return this._intersectConvex}get[gl](){return this._intersectConvex}get[_l](){return this._intersectHeightfield}get[xl](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new w),e===void 0&&(e=new w),this.from=t.clone(),this.to=e.clone(),this.direction=new w,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Kt.ANY,this.result=new As,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||Kt.ANY,this.result=e.result||new As,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(va),yr.length=0,t.broadphase.aabbQuery(t,va,yr),this.intersectBodies(yr),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const i=pm,s=mm;for(let o=0,r=t.shapes.length;o<r;o++){const a=t.shapes[o];if(!(n&&!a.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],s),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(a,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(Lm(s,this.direction,n)>t.boundingSphereRadius)return;const r=this[t.type];r&&r.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const o=this.from,r=this.to,a=this.direction,l=new w(0,0,1);e.vmult(l,l);const h=new w;o.vsub(n,h);const d=h.dot(l);r.vsub(n,h);const u=h.dot(l);if(d*u>0||o.distanceTo(r)<d)return;const m=l.dot(a);if(Math.abs(m)<this.precision)return;const g=new w,p=new w,f=new w;o.vsub(n,g);const _=-l.dot(g)/m;a.scale(_,p),o.vadd(p,f),this.reportIntersection(l,f,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const o=gm;o.from.copy(this.from),o.to.copy(this.to),Ft.pointToLocalFrame(n,e,o.from,o.from),Ft.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const r=_m;let a,l,h,d;a=l=0,h=d=t.data.length-1;const u=new De;o.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,r,!0),a=Math.max(a,r[0]),l=Math.max(l,r[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,r,!0),h=Math.min(h,r[0]+1),d=Math.min(d,r[1]+1);for(let m=a;m<h;m++)for(let g=l;g<d;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(m,g,u),!!u.overlapsRay(o)){if(t.getConvexTrianglePillar(m,g,!1),Ft.pointToWorldFrame(n,e,t.pillarOffset,xs),this._intersectConvex(t.pillarConvex,e,xs,i,s,ya),this.result.shouldStop)return;t.getConvexTrianglePillar(m,g,!0),Ft.pointToWorldFrame(n,e,t.pillarOffset,xs),this._intersectConvex(t.pillarConvex,e,xs,i,s,ya)}}}_intersectSphere(t,e,n,i,s){const o=this.from,r=this.to,a=t.radius,l=(r.x-o.x)**2+(r.y-o.y)**2+(r.z-o.z)**2,h=2*((r.x-o.x)*(o.x-n.x)+(r.y-o.y)*(o.y-n.y)+(r.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-a**2,u=h**2-4*l*d,m=xm,g=vm;if(!(u<0))if(u===0)o.lerp(r,u,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1);else{const p=(-h-Math.sqrt(u))/(2*l),f=(-h+Math.sqrt(u))/(2*l);if(p>=0&&p<=1&&(o.lerp(r,p,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1)),this.result.shouldStop)return;f>=0&&f<=1&&(o.lerp(r,f,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1))}}_intersectConvex(t,e,n,i,s,o){const r=ym,a=Ma,l=o&&o.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,m=this.direction,g=this.from,p=this.to,f=g.distanceTo(p),_=l?l.length:h.length,x=this.result;for(let y=0;!x.shouldStop&&y<_;y++){const M=l?l[y]:y,S=h[M],C=u[M],D=e,v=n;a.copy(d[S[0]]),D.vmult(a,a),a.vadd(v,a),a.vsub(g,a),D.vmult(C,r);const b=m.dot(r);if(Math.abs(b)<this.precision)continue;const R=r.dot(a)/b;if(!(R<0)){m.scale(R,ye),ye.vadd(g,ye),ke.copy(d[S[0]]),D.vmult(ke,ke),v.vadd(ke,ke);for(let O=1;!x.shouldStop&&O<S.length-1;O++){Ze.copy(d[S[O]]),Ke.copy(d[S[O+1]]),D.vmult(Ze,Ze),D.vmult(Ke,Ke),v.vadd(Ze,Ze),v.vadd(Ke,Ke);const N=ye.distanceTo(g);!(Kt.pointInTriangle(ye,ke,Ze,Ke)||Kt.pointInTriangle(ye,Ze,ke,Ke))||N>f||this.reportIntersection(r,ye,s,i,M)}}}}_intersectTrimesh(t,e,n,i,s,o){const r=Mm,a=Am,l=Cm,h=Ma,d=wm,u=bm,m=Sm,g=Tm,p=Em,f=t.indices;t.vertices;const _=this.from,x=this.to,y=this.direction;l.position.copy(n),l.quaternion.copy(e),Ft.vectorToLocalFrame(n,e,y,d),Ft.pointToLocalFrame(n,e,_,u),Ft.pointToLocalFrame(n,e,x,m),m.x*=t.scale.x,m.y*=t.scale.y,m.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,m.vsub(u,d),d.normalize();const M=u.distanceSquared(m);t.tree.rayQuery(this,l,a);for(let S=0,C=a.length;!this.result.shouldStop&&S!==C;S++){const D=a[S];t.getNormal(D,r),t.getVertex(f[D*3],ke),ke.vsub(u,h);const v=d.dot(r),b=r.dot(h)/v;if(b<0)continue;d.scale(b,ye),ye.vadd(u,ye),t.getVertex(f[D*3+1],Ze),t.getVertex(f[D*3+2],Ke);const R=ye.distanceSquared(u);!(Kt.pointInTriangle(ye,Ze,ke,Ke)||Kt.pointInTriangle(ye,ke,Ze,Ke))||R>M||(Ft.vectorToWorldFrame(e,r,p),Ft.pointToWorldFrame(n,e,ye,g),this.reportIntersection(p,g,s,i,D))}a.length=0}reportIntersection(t,e,n,i,s){const o=this.from,r=this.to,a=o.distanceTo(e),l=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(l.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case Kt.ALL:this.hasHit=!0,l.set(o,r,t,e,n,i,a),l.hasHit=!0,this.callback(l);break;case Kt.CLOSEST:(a<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(o,r,t,e,n,i,a));break;case Kt.ANY:this.hasHit=!0,l.hasHit=!0,l.set(o,r,t,e,n,i,a),l.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,Bn),n.vsub(e,Ii),t.vsub(e,Mr);const s=Bn.dot(Bn),o=Bn.dot(Ii),r=Bn.dot(Mr),a=Ii.dot(Ii),l=Ii.dot(Mr);let h,d;return(h=a*r-o*l)>=0&&(d=s*l-o*r)>=0&&h+d<s*a-o*o}}Kt.CLOSEST=Ur.CLOSEST;Kt.ANY=Ur.ANY;Kt.ALL=Ur.ALL;const va=new De,yr=[],Ii=new w,Mr=new w,pm=new w,mm=new qt,ye=new w,ke=new w,Ze=new w,Ke=new w;new w;new As;const ya={faceList:[0]},xs=new w,gm=new Kt,_m=[],xm=new w,vm=new w,ym=new w;new w;new w;const Ma=new w,Mm=new w,wm=new w,bm=new w,Sm=new w,Em=new w,Tm=new w;new De;const Am=[],Cm=new Ft,Bn=new w,vs=new w;function Lm(c,t,e){e.vsub(c,Bn);const n=Bn.dot(t);return t.scale(n,vs),vs.vadd(c,vs),e.distanceTo(vs)}class ui extends ul{static checkBounds(t,e,n){let i,s;n===0?(i=t.position.x,s=e.position.x):n===1?(i=t.position.y,s=e.position.y):n===2&&(i=t.position.z,s=e.position.z);const o=t.boundingRadius,r=e.boundingRadius,a=i+o;return s-r<a}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.x<=i.aabb.lowerBound.x);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.y<=i.aabb.lowerBound.y);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.z<=i.aabb.lowerBound.z);s--)t[s+1]=t[s];t[s+1]=i}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;const e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{const i=e.indexOf(n.body);i!==-1&&e.splice(i,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){const i=this.axisList,s=i.length,o=this.axisIndex;let r,a;for(this.dirty&&(this.sortList(),this.dirty=!1),r=0;r!==s;r++){const l=i[r];for(a=r+1;a<s;a++){const h=i[a];if(this.needBroadphaseCollision(l,h)){if(!ui.checkBounds(l,h,o))break;this.intersectionTest(l,h,e,n)}}}}sortList(){const t=this.axisList,e=this.axisIndex,n=t.length;for(let i=0;i!==n;i++){const s=t[i];s.aabbNeedsUpdate&&s.updateAABB()}e===0?ui.insertionSortX(t):e===1?ui.insertionSortY(t):e===2&&ui.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,i=0,s=0,o=0;const r=this.axisList,a=r.length,l=1/a;for(let m=0;m!==a;m++){const g=r[m],p=g.position.x;t+=p,e+=p*p;const f=g.position.y;n+=f,i+=f*f;const _=g.position.z;s+=_,o+=_*_}const h=e-t*t*l,d=i-n*n*l,u=o-s*s*l;h>d?h>u?this.axisIndex=0:this.axisIndex=2:d>u?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);const i=this.axisIndex;let s="x";i===1&&(s="y"),i===2&&(s="z");const o=this.axisList;e.lowerBound[s],e.upperBound[s];for(let r=0;r<o.length;r++){const a=o[r];a.aabbNeedsUpdate&&a.updateAABB(),a.aabb.overlaps(e)&&n.push(a)}return n}}class Pm{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class wa{constructor(){this.spatial=new w,this.rotational=new w}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class $i{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=$i.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new wa,this.jacobianElementB=new wa,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*t-i*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return t.spatial.dot(s)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,r=n.angularVelocity,a=i.angularVelocity;return t.multiplyVectors(s,r)+e.multiplyVectors(o,a)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,r=n.wlambda,a=i.wlambda;return t.multiplyVectors(s,r)+e.multiplyVectors(o,a)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,r=i.force,a=i.torque,l=n.invMassSolve,h=i.invMassSolve;return s.scale(l,ba),r.scale(h,Sa),n.invInertiaWorldSolve.vmult(o,Ea),i.invInertiaWorldSolve.vmult(a,Ta),t.multiplyVectors(ba,Ea)+e.multiplyVectors(Sa,Ta)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,r=n.invInertiaWorldSolve,a=i.invInertiaWorldSolve;let l=s+o;return r.vmult(t.rotational,ys),l+=ys.dot(t.rotational),a.vmult(e.rotational,ys),l+=ys.dot(e.rotational),l}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=Rm;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}$i.idCounter=0;const ba=new w,Sa=new w,Ea=new w,Ta=new w,ys=new w,Rm=new w;class Dm extends $i{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new w,this.rj=new w,this.ni=new w}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,r=this.rj,a=Im,l=zm,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=s.velocity,m=s.angularVelocity;s.force,s.torque;const g=Fm,p=this.jacobianElementA,f=this.jacobianElementB,_=this.ni;o.cross(_,a),r.cross(_,l),_.negate(p.spatial),a.negate(p.rotational),f.spatial.copy(_),f.rotational.copy(l),g.copy(s.position),g.vadd(r,g),g.vsub(i.position,g),g.vsub(o,g);const x=_.dot(g),y=this.restitution+1,M=y*u.dot(_)-y*h.dot(_)+m.dot(l)-d.dot(a),S=this.computeGiMf();return-x*e-M*n-t*S}getImpactVelocityAlongNormal(){const t=Nm,e=Bm,n=Om,i=Um,s=Gm;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const Im=new w,zm=new w,Fm=new w,Nm=new w,Bm=new w,Om=new w,Um=new w,Gm=new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;class Aa extends $i{constructor(t,e,n){super(t,e,-n,n),this.ri=new w,this.rj=new w,this.t=new w}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=km,o=Vm,r=this.t;n.cross(r,s),i.cross(r,o);const a=this.jacobianElementA,l=this.jacobianElementB;r.negate(a.spatial),s.negate(a.rotational),l.spatial.copy(r),l.rotational.copy(o);const h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}}const km=new w,Vm=new w;class Ds{constructor(t,e,n){n=Pm.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Ds.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Ds.idCounter=0;class Zi{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=Zi.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}Zi.idCounter=0;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new Kt;new w;new w;new w;new w(1,0,0),new w(0,1,0),new w(0,0,1);new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new De;new w;new De;new w;new w;new w;new w;new w;new w;new w;new De;new w;new Ft;new De;class Wm{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class Hm extends Wm{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,r=o.length,a=e.bodies,l=a.length,h=t;let d,u,m,g,p,f;if(r!==0)for(let M=0;M!==l;M++)a[M].updateSolveMassProperties();const _=Xm,x=jm,y=qm;_.length=r,x.length=r,y.length=r;for(let M=0;M!==r;M++){const S=o[M];y[M]=0,x[M]=S.computeB(h),_[M]=1/S.computeC()}if(r!==0){for(let C=0;C!==l;C++){const D=a[C],v=D.vlambda,b=D.wlambda;v.set(0,0,0),b.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let C=0;C!==r;C++){const D=o[C];d=x[C],u=_[C],f=y[C],p=D.computeGWlambda(),m=u*(d-p-D.eps*f),f+m<D.minForce?m=D.minForce-f:f+m>D.maxForce&&(m=D.maxForce-f),y[C]+=m,g+=m>0?m:-m,D.addToWlambda(m)}if(g*g<s)break}for(let C=0;C!==l;C++){const D=a[C],v=D.velocity,b=D.angularVelocity;D.vlambda.vmul(D.linearFactor,D.vlambda),v.vadd(D.vlambda,v),D.wlambda.vmul(D.angularFactor,D.wlambda),b.vadd(D.wlambda,b)}let M=o.length;const S=1/h;for(;M--;)o[M].multiplier=y[M]*S}return n}}const qm=[],Xm=[],jm=[];lt.STATIC;class Ym{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class $m extends Ym{constructor(){super(...arguments),this.type=w}constructObject(){return new w}}const Ut={sphereSphere:st.types.SPHERE,spherePlane:st.types.SPHERE|st.types.PLANE,boxBox:st.types.BOX|st.types.BOX,sphereBox:st.types.SPHERE|st.types.BOX,planeBox:st.types.PLANE|st.types.BOX,convexConvex:st.types.CONVEXPOLYHEDRON,sphereConvex:st.types.SPHERE|st.types.CONVEXPOLYHEDRON,planeConvex:st.types.PLANE|st.types.CONVEXPOLYHEDRON,boxConvex:st.types.BOX|st.types.CONVEXPOLYHEDRON,sphereHeightfield:st.types.SPHERE|st.types.HEIGHTFIELD,boxHeightfield:st.types.BOX|st.types.HEIGHTFIELD,convexHeightfield:st.types.CONVEXPOLYHEDRON|st.types.HEIGHTFIELD,sphereParticle:st.types.PARTICLE|st.types.SPHERE,planeParticle:st.types.PLANE|st.types.PARTICLE,boxParticle:st.types.BOX|st.types.PARTICLE,convexParticle:st.types.PARTICLE|st.types.CONVEXPOLYHEDRON,cylinderCylinder:st.types.CYLINDER,sphereCylinder:st.types.SPHERE|st.types.CYLINDER,planeCylinder:st.types.PLANE|st.types.CYLINDER,boxCylinder:st.types.BOX|st.types.CYLINDER,convexCylinder:st.types.CONVEXPOLYHEDRON|st.types.CYLINDER,heightfieldCylinder:st.types.HEIGHTFIELD|st.types.CYLINDER,particleCylinder:st.types.PARTICLE|st.types.CYLINDER,sphereTrimesh:st.types.SPHERE|st.types.TRIMESH,planeTrimesh:st.types.PLANE|st.types.TRIMESH};class Zm{get[Ut.sphereSphere](){return this.sphereSphere}get[Ut.spherePlane](){return this.spherePlane}get[Ut.boxBox](){return this.boxBox}get[Ut.sphereBox](){return this.sphereBox}get[Ut.planeBox](){return this.planeBox}get[Ut.convexConvex](){return this.convexConvex}get[Ut.sphereConvex](){return this.sphereConvex}get[Ut.planeConvex](){return this.planeConvex}get[Ut.boxConvex](){return this.boxConvex}get[Ut.sphereHeightfield](){return this.sphereHeightfield}get[Ut.boxHeightfield](){return this.boxHeightfield}get[Ut.convexHeightfield](){return this.convexHeightfield}get[Ut.sphereParticle](){return this.sphereParticle}get[Ut.planeParticle](){return this.planeParticle}get[Ut.boxParticle](){return this.boxParticle}get[Ut.convexParticle](){return this.convexParticle}get[Ut.cylinderCylinder](){return this.convexConvex}get[Ut.sphereCylinder](){return this.sphereConvex}get[Ut.planeCylinder](){return this.planeConvex}get[Ut.boxCylinder](){return this.boxConvex}get[Ut.convexCylinder](){return this.convexConvex}get[Ut.heightfieldCylinder](){return this.heightfieldCylinder}get[Ut.particleCylinder](){return this.particleCylinder}get[Ut.sphereTrimesh](){return this.sphereTrimesh}get[Ut.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new $m,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,o){let r;this.contactPointPool.length?(r=this.contactPointPool.pop(),r.bi=t,r.bj=e):r=new Dm(t,e),r.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const a=this.currentContactMaterial;r.restitution=a.restitution,r.setSpookParams(a.contactEquationStiffness,a.contactEquationRelaxation,this.world.dt);const l=n.material||t.material,h=i.material||e.material;return l&&h&&l.restitution>=0&&h.restitution>=0&&(r.restitution=l.restitution*h.restitution),r.si=s||n,r.sj=o||i,r}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,o=t.sj,r=this.world,a=this.currentContactMaterial;let l=a.friction;const h=s.material||n.material,d=o.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(l=h.friction*d.friction),l>0){const u=l*(r.frictionGravity||r.gravity).length();let m=n.invMass+i.invMass;m>0&&(m=1/m);const g=this.frictionEquationPool,p=g.length?g.pop():new Aa(n,i,u*m),f=g.length?g.pop():new Aa(n,i,u*m);return p.bi=f.bi=n,p.bj=f.bj=i,p.minForce=f.minForce=-u*m,p.maxForce=f.maxForce=u*m,p.ri.copy(t.ri),p.rj.copy(t.rj),f.ri.copy(t.ri),f.rj.copy(t.rj),t.ni.tangents(p.t,f.t),p.setSpookParams(a.frictionEquationStiffness,a.frictionEquationRelaxation,r.dt),f.setSpookParams(a.frictionEquationStiffness,a.frictionEquationRelaxation,r.dt),p.enabled=f.enabled=t.enabled,e.push(p,f),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];In.setZero(),ai.setZero(),li.setZero();const s=e.bi;e.bj;for(let r=0;r!==t;r++)e=this.result[this.result.length-1-r],e.bi!==s?(In.vadd(e.ni,In),ai.vadd(e.ri,ai),li.vadd(e.rj,li)):(In.vsub(e.ni,In),ai.vadd(e.rj,ai),li.vadd(e.ri,li));const o=1/t;ai.scale(o,n.ri),li.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),In.normalize(),In.tangents(n.t,i.t)}getContacts(t,e,n,i,s,o,r){this.contactPointPool=s,this.frictionEquationPool=r,this.result=i,this.frictionResult=o;const a=Qm,l=tg,h=Km,d=Jm;for(let u=0,m=t.length;u!==m;u++){const g=t[u],p=e[u];let f=null;g.material&&p.material&&(f=n.getContactMaterial(g.material,p.material)||null);const _=g.type&lt.KINEMATIC&&p.type&lt.STATIC||g.type&lt.STATIC&&p.type&lt.KINEMATIC||g.type&lt.KINEMATIC&&p.type&lt.KINEMATIC;for(let x=0;x<g.shapes.length;x++){g.quaternion.mult(g.shapeOrientations[x],a),g.quaternion.vmult(g.shapeOffsets[x],h),h.vadd(g.position,h);const y=g.shapes[x];for(let M=0;M<p.shapes.length;M++){p.quaternion.mult(p.shapeOrientations[M],l),p.quaternion.vmult(p.shapeOffsets[M],d),d.vadd(p.position,d);const S=p.shapes[M];if(!(y.collisionFilterMask&S.collisionFilterGroup&&S.collisionFilterMask&y.collisionFilterGroup)||h.distanceTo(d)>y.boundingSphereRadius+S.boundingSphereRadius)continue;let C=null;y.material&&S.material&&(C=n.getContactMaterial(y.material,S.material)||null),this.currentContactMaterial=C||f||n.defaultContactMaterial;const D=y.type|S.type,v=this[D];if(v){let b=!1;y.type<S.type?b=v.call(this,y,S,h,d,a,l,g,p,y,S,_):b=v.call(this,S,y,d,h,l,a,p,g,y,S,_),b&&_&&(n.shapeOverlapKeeper.set(y.id,S.id),n.bodyOverlapKeeper.set(g.id,p.id))}}}}}sphereSphere(t,e,n,i,s,o,r,a,l,h,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const u=this.createContactEquation(r,a,t,e,l,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(r.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(a.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,i,s,o,r,a,l,h,d){const u=this.createContactEquation(r,a,t,e,l,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(i,Ms),u.ni.scale(u.ni.dot(Ms),Ca),Ms.vsub(Ca,u.rj),-Ms.dot(u.ni)<=t.radius){if(d)return!0;const m=u.ri,g=u.rj;m.vadd(n,m),m.vsub(r.position,m),g.vadd(i,g),g.vsub(a.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,i,s,o,r,a,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,o,r,a,t,e,d)}sphereBox(t,e,n,i,s,o,r,a,l,h,d){const u=this.v3pool,m=Tg;n.vsub(i,ws),e.getSideNormals(m,o);const g=t.radius;let p=!1;const f=Cg,_=Lg,x=Pg;let y=null,M=0,S=0,C=0,D=null;for(let z=0,H=m.length;z!==H&&p===!1;z++){const V=bg;V.copy(m[z]);const X=V.length();V.normalize();const K=ws.dot(V);if(K<X+g&&K>0){const rt=Sg,F=Eg;rt.copy(m[(z+1)%3]),F.copy(m[(z+2)%3]);const J=rt.length(),nt=F.length();rt.normalize(),F.normalize();const k=ws.dot(rt),ht=ws.dot(F);if(k<J&&k>-J&&ht<nt&&ht>-nt){const ut=Math.abs(K-X-g);if((D===null||ut<D)&&(D=ut,S=k,C=ht,y=X,f.copy(V),_.copy(rt),x.copy(F),M++,d))return!0}}}if(M){p=!0;const z=this.createContactEquation(r,a,t,e,l,h);f.scale(-g,z.ri),z.ni.copy(f),z.ni.negate(z.ni),f.scale(y,f),_.scale(S,_),f.vadd(_,f),x.scale(C,x),f.vadd(x,z.rj),z.ri.vadd(n,z.ri),z.ri.vsub(r.position,z.ri),z.rj.vadd(i,z.rj),z.rj.vsub(a.position,z.rj),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}let v=u.get();const b=Ag;for(let z=0;z!==2&&!p;z++)for(let H=0;H!==2&&!p;H++)for(let V=0;V!==2&&!p;V++)if(v.set(0,0,0),z?v.vadd(m[0],v):v.vsub(m[0],v),H?v.vadd(m[1],v):v.vsub(m[1],v),V?v.vadd(m[2],v):v.vsub(m[2],v),i.vadd(v,b),b.vsub(n,b),b.lengthSquared()<g*g){if(d)return!0;p=!0;const X=this.createContactEquation(r,a,t,e,l,h);X.ri.copy(b),X.ri.normalize(),X.ni.copy(X.ri),X.ri.scale(g,X.ri),X.rj.copy(v),X.ri.vadd(n,X.ri),X.ri.vsub(r.position,X.ri),X.rj.vadd(i,X.rj),X.rj.vsub(a.position,X.rj),this.result.push(X),this.createFrictionEquationsFromContact(X,this.frictionResult)}u.release(v),v=null;const R=u.get(),O=u.get(),N=u.get(),A=u.get(),L=u.get(),I=m.length;for(let z=0;z!==I&&!p;z++)for(let H=0;H!==I&&!p;H++)if(z%3!==H%3){m[H].cross(m[z],R),R.normalize(),m[z].vadd(m[H],O),N.copy(n),N.vsub(O,N),N.vsub(i,N);const V=N.dot(R);R.scale(V,A);let X=0;for(;X===z%3||X===H%3;)X++;L.copy(n),L.vsub(A,L),L.vsub(O,L),L.vsub(i,L);const K=Math.abs(V),rt=L.length();if(K<m[X].length()&&rt<g){if(d)return!0;p=!0;const F=this.createContactEquation(r,a,t,e,l,h);O.vadd(A,F.rj),F.rj.copy(F.rj),L.negate(F.ni),F.ni.normalize(),F.ri.copy(F.rj),F.ri.vadd(i,F.ri),F.ri.vsub(n,F.ri),F.ri.normalize(),F.ri.scale(g,F.ri),F.ri.vadd(n,F.ri),F.ri.vsub(r.position,F.ri),F.rj.vadd(i,F.rj),F.rj.vsub(a.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}}u.release(R,O,N,A,L)}planeBox(t,e,n,i,s,o,r,a,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,o,r,a,t,e,d)}convexConvex(t,e,n,i,s,o,r,a,l,h,d,u,m){const g=qg;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,o,g,u,m)){const p=[],f=Xg;t.clipAgainstHull(n,s,e,i,o,g,-100,100,p);let _=0;for(let x=0;x!==p.length;x++){if(d)return!0;const y=this.createContactEquation(r,a,t,e,l,h),M=y.ri,S=y.rj;g.negate(y.ni),p[x].normal.negate(f),f.scale(p[x].depth,f),p[x].point.vadd(f,M),S.copy(p[x].point),M.vsub(n,M),S.vsub(i,S),M.vadd(n,M),M.vsub(r.position,M),S.vadd(i,S),S.vsub(a.position,S),this.result.push(y),_++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&_&&this.createFrictionFromAverage(_)}}sphereConvex(t,e,n,i,s,o,r,a,l,h,d){const u=this.v3pool;n.vsub(i,Rg);const m=e.faceNormals,g=e.faces,p=e.vertices,f=t.radius;let _=!1;for(let x=0;x!==p.length;x++){const y=p[x],M=Fg;o.vmult(y,M),i.vadd(M,M);const S=zg;if(M.vsub(n,S),S.lengthSquared()<f*f){if(d)return!0;_=!0;const C=this.createContactEquation(r,a,t,e,l,h);C.ri.copy(S),C.ri.normalize(),C.ni.copy(C.ri),C.ri.scale(f,C.ri),M.vsub(i,C.rj),C.ri.vadd(n,C.ri),C.ri.vsub(r.position,C.ri),C.rj.vadd(i,C.rj),C.rj.vsub(a.position,C.rj),this.result.push(C),this.createFrictionEquationsFromContact(C,this.frictionResult);return}}for(let x=0,y=g.length;x!==y&&_===!1;x++){const M=m[x],S=g[x],C=Ng;o.vmult(M,C);const D=Bg;o.vmult(p[S[0]],D),D.vadd(i,D);const v=Og;C.scale(-f,v),n.vadd(v,v);const b=Ug;v.vsub(D,b);const R=b.dot(C),O=Gg;if(n.vsub(D,O),R<0&&O.dot(C)>0){const N=[];for(let A=0,L=S.length;A!==L;A++){const I=u.get();o.vmult(p[S[A]],I),i.vadd(I,I),N.push(I)}if(wg(N,C,n)){if(d)return!0;_=!0;const A=this.createContactEquation(r,a,t,e,l,h);C.scale(-f,A.ri),C.negate(A.ni);const L=u.get();C.scale(-R,L);const I=u.get();C.scale(-f,I),n.vsub(i,A.rj),A.rj.vadd(I,A.rj),A.rj.vadd(L,A.rj),A.rj.vadd(i,A.rj),A.rj.vsub(a.position,A.rj),A.ri.vadd(n,A.ri),A.ri.vsub(r.position,A.ri),u.release(L),u.release(I),this.result.push(A),this.createFrictionEquationsFromContact(A,this.frictionResult);for(let z=0,H=N.length;z!==H;z++)u.release(N[z]);return}else for(let A=0;A!==S.length;A++){const L=u.get(),I=u.get();o.vmult(p[S[(A+1)%S.length]],L),o.vmult(p[S[(A+2)%S.length]],I),i.vadd(L,L),i.vadd(I,I);const z=Dg;I.vsub(L,z);const H=Ig;z.unit(H);const V=u.get(),X=u.get();n.vsub(L,X);const K=X.dot(H);H.scale(K,V),V.vadd(L,V);const rt=u.get();if(V.vsub(n,rt),K>0&&K*K<z.lengthSquared()&&rt.lengthSquared()<f*f){if(d)return!0;const F=this.createContactEquation(r,a,t,e,l,h);V.vsub(i,F.rj),V.vsub(n,F.ni),F.ni.normalize(),F.ni.scale(f,F.ri),F.rj.vadd(i,F.rj),F.rj.vsub(a.position,F.rj),F.ri.vadd(n,F.ri),F.ri.vsub(r.position,F.ri),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult);for(let J=0,nt=N.length;J!==nt;J++)u.release(N[J]);u.release(L),u.release(I),u.release(V),u.release(rt),u.release(X);return}u.release(L),u.release(I),u.release(V),u.release(rt),u.release(X)}for(let A=0,L=N.length;A!==L;A++)u.release(N[A])}}}planeConvex(t,e,n,i,s,o,r,a,l,h,d){const u=kg,m=Vg;m.set(0,0,1),s.vmult(m,m);let g=0;const p=Wg;for(let f=0;f!==e.vertices.length;f++)if(u.copy(e.vertices[f]),o.vmult(u,u),i.vadd(u,u),u.vsub(n,p),m.dot(p)<=0){if(d)return!0;const x=this.createContactEquation(r,a,t,e,l,h),y=Hg;m.scale(m.dot(p),y),u.vsub(y,y),y.vsub(n,x.ri),x.ni.copy(m),u.vsub(i,x.rj),x.ri.vadd(n,x.ri),x.ri.vsub(r.position,x.ri),x.rj.vadd(i,x.rj),x.rj.vsub(a.position,x.rj),this.result.push(x),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,i,s,o,r,a,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,o,r,a,t,e,d)}sphereHeightfield(t,e,n,i,s,o,r,a,l,h,d){const u=e.data,m=t.radius,g=e.elementSize,p=s0,f=i0;Ft.pointToLocalFrame(i,o,n,f);let _=Math.floor((f.x-m)/g)-1,x=Math.ceil((f.x+m)/g)+1,y=Math.floor((f.y-m)/g)-1,M=Math.ceil((f.y+m)/g)+1;if(x<0||M<0||_>u.length||y>u[0].length)return;_<0&&(_=0),x<0&&(x=0),y<0&&(y=0),M<0&&(M=0),_>=u.length&&(_=u.length-1),x>=u.length&&(x=u.length-1),M>=u[0].length&&(M=u[0].length-1),y>=u[0].length&&(y=u[0].length-1);const S=[];e.getRectMinMax(_,y,x,M,S);const C=S[0],D=S[1];if(f.z-m>D||f.z+m<C)return;const v=this.result;for(let b=_;b<x;b++)for(let R=y;R<M;R++){const O=v.length;let N=!1;if(e.getConvexTrianglePillar(b,R,!1),Ft.pointToWorldFrame(i,o,e.pillarOffset,p),n.distanceTo(p)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(N=this.sphereConvex(t,e.pillarConvex,n,p,s,o,r,a,t,e,d)),d&&N||(e.getConvexTrianglePillar(b,R,!0),Ft.pointToWorldFrame(i,o,e.pillarOffset,p),n.distanceTo(p)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(N=this.sphereConvex(t,e.pillarConvex,n,p,s,o,r,a,t,e,d)),d&&N))return!0;if(v.length-O>2)return}}boxHeightfield(t,e,n,i,s,o,r,a,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,o,r,a,t,e,d)}convexHeightfield(t,e,n,i,s,o,r,a,l,h,d){const u=e.data,m=e.elementSize,g=t.boundingSphereRadius,p=e0,f=n0,_=t0;Ft.pointToLocalFrame(i,o,n,_);let x=Math.floor((_.x-g)/m)-1,y=Math.ceil((_.x+g)/m)+1,M=Math.floor((_.y-g)/m)-1,S=Math.ceil((_.y+g)/m)+1;if(y<0||S<0||x>u.length||M>u[0].length)return;x<0&&(x=0),y<0&&(y=0),M<0&&(M=0),S<0&&(S=0),x>=u.length&&(x=u.length-1),y>=u.length&&(y=u.length-1),S>=u[0].length&&(S=u[0].length-1),M>=u[0].length&&(M=u[0].length-1);const C=[];e.getRectMinMax(x,M,y,S,C);const D=C[0],v=C[1];if(!(_.z-g>v||_.z+g<D))for(let b=x;b<y;b++)for(let R=M;R<S;R++){let O=!1;if(e.getConvexTrianglePillar(b,R,!1),Ft.pointToWorldFrame(i,o,e.pillarOffset,p),n.distanceTo(p)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(O=this.convexConvex(t,e.pillarConvex,n,p,s,o,r,a,null,null,d,f,null)),d&&O||(e.getConvexTrianglePillar(b,R,!0),Ft.pointToWorldFrame(i,o,e.pillarOffset,p),n.distanceTo(p)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(O=this.convexConvex(t,e.pillarConvex,n,p,s,o,r,a,null,null,d,f,null)),d&&O))return!0}}sphereParticle(t,e,n,i,s,o,r,a,l,h,d){const u=Zg;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;const g=this.createContactEquation(a,r,e,t,l,h);u.normalize(),g.rj.copy(u),g.rj.scale(t.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,i,s,o,r,a,l,h,d){const u=jg;u.set(0,0,1),r.quaternion.vmult(u,u);const m=Yg;if(i.vsub(r.position,m),u.dot(m)<=0){if(d)return!0;const p=this.createContactEquation(a,r,e,t,l,h);p.ni.copy(u),p.ni.negate(p.ni),p.ri.set(0,0,0);const f=$g;u.scale(u.dot(i),f),i.vsub(f,f),p.rj.copy(f),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}}boxParticle(t,e,n,i,s,o,r,a,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,o,r,a,t,e,d)}convexParticle(t,e,n,i,s,o,r,a,l,h,d){let u=-1;const m=Jg,g=Qg;let p=null;const f=Kg;if(f.copy(i),f.vsub(n,f),s.conjugate(La),La.vmult(f,f),t.pointIsInside(f)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let _=0,x=t.faces.length;_!==x;_++){const y=[t.worldVertices[t.faces[_][0]]],M=t.worldFaceNormals[_];i.vsub(y[0],Pa);const S=-M.dot(Pa);if(p===null||Math.abs(S)<Math.abs(p)){if(d)return!0;p=S,u=_,m.copy(M)}}if(u!==-1){const _=this.createContactEquation(a,r,e,t,l,h);m.scale(p,g),g.vadd(i,g),g.vsub(n,g),_.rj.copy(g),m.negate(_.ni),_.ri.set(0,0,0);const x=_.ri,y=_.rj;x.vadd(i,x),x.vsub(a.position,x),y.vadd(n,y),y.vsub(r.position,y),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,o,r,a,l,h,d){return this.convexHeightfield(e,t,i,n,o,s,a,r,l,h,d)}particleCylinder(t,e,n,i,s,o,r,a,l,h,d){return this.convexParticle(e,t,i,n,o,s,a,r,l,h,d)}sphereTrimesh(t,e,n,i,s,o,r,a,l,h,d){const u=lg,m=cg,g=hg,p=ug,f=dg,_=fg,x=_g,y=ag,M=rg,S=xg;Ft.pointToLocalFrame(i,o,n,f);const C=t.radius;x.lowerBound.set(f.x-C,f.y-C,f.z-C),x.upperBound.set(f.x+C,f.y+C,f.z+C),e.getTrianglesInAABB(x,S);const D=og,v=t.radius*t.radius;for(let A=0;A<S.length;A++)for(let L=0;L<3;L++)if(e.getVertex(e.indices[S[A]*3+L],D),D.vsub(f,M),M.lengthSquared()<=v){if(y.copy(D),Ft.pointToWorldFrame(i,o,y,D),D.vsub(n,M),d)return!0;let I=this.createContactEquation(r,a,t,e,l,h);I.ni.copy(M),I.ni.normalize(),I.ri.copy(I.ni),I.ri.scale(t.radius,I.ri),I.ri.vadd(n,I.ri),I.ri.vsub(r.position,I.ri),I.rj.copy(D),I.rj.vsub(a.position,I.rj),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}for(let A=0;A<S.length;A++)for(let L=0;L<3;L++){e.getVertex(e.indices[S[A]*3+L],u),e.getVertex(e.indices[S[A]*3+(L+1)%3],m),m.vsub(u,g),f.vsub(m,_);const I=_.dot(g);f.vsub(u,_);let z=_.dot(g);if(z>0&&I<0&&(f.vsub(u,_),p.copy(g),p.normalize(),z=_.dot(p),p.scale(z,_),_.vadd(u,_),_.distanceTo(f)<t.radius)){if(d)return!0;const V=this.createContactEquation(r,a,t,e,l,h);_.vsub(f,V.ni),V.ni.normalize(),V.ni.scale(t.radius,V.ri),V.ri.vadd(n,V.ri),V.ri.vsub(r.position,V.ri),Ft.pointToWorldFrame(i,o,_,_),_.vsub(a.position,V.rj),Ft.vectorToWorldFrame(o,V.ni,V.ni),Ft.vectorToWorldFrame(o,V.ri,V.ri),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}}const b=pg,R=mg,O=gg,N=sg;for(let A=0,L=S.length;A!==L;A++){e.getTriangleVertices(S[A],b,R,O),e.getNormal(S[A],N),f.vsub(b,_);let I=_.dot(N);if(N.scale(I,_),f.vsub(_,_),I=_.distanceTo(f),Kt.pointInTriangle(_,b,R,O)&&I<t.radius){if(d)return!0;let z=this.createContactEquation(r,a,t,e,l,h);_.vsub(f,z.ni),z.ni.normalize(),z.ni.scale(t.radius,z.ri),z.ri.vadd(n,z.ri),z.ri.vsub(r.position,z.ri),Ft.pointToWorldFrame(i,o,_,_),_.vsub(a.position,z.rj),Ft.vectorToWorldFrame(o,z.ni,z.ni),Ft.vectorToWorldFrame(o,z.ri,z.ri),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}}S.length=0}planeTrimesh(t,e,n,i,s,o,r,a,l,h,d){const u=new w,m=eg;m.set(0,0,1),s.vmult(m,m);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,u);const p=new w;p.copy(u),Ft.pointToWorldFrame(i,o,p,u);const f=ng;if(u.vsub(n,f),m.dot(f)<=0){if(d)return!0;const x=this.createContactEquation(r,a,t,e,l,h);x.ni.copy(m);const y=ig;m.scale(f.dot(m),y),u.vsub(y,y),x.ri.copy(y),x.ri.vsub(r.position,x.ri),x.rj.copy(u),x.rj.vsub(a.position,x.rj),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}}}const In=new w,ai=new w,li=new w,Km=new w,Jm=new w,Qm=new qt,tg=new qt,eg=new w,ng=new w,ig=new w,sg=new w,rg=new w;new w;const og=new w,ag=new w,lg=new w,cg=new w,hg=new w,ug=new w,dg=new w,fg=new w,pg=new w,mg=new w,gg=new w,_g=new De,xg=[],Ms=new w,Ca=new w,vg=new w,yg=new w,Mg=new w;function wg(c,t,e){let n=null;const i=c.length;for(let s=0;s!==i;s++){const o=c[s],r=vg;c[(s+1)%i].vsub(o,r);const a=yg;r.cross(t,a);const l=Mg;e.vsub(o,l);const h=a.dot(l);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const ws=new w,bg=new w,Sg=new w,Eg=new w,Tg=[new w,new w,new w,new w,new w,new w],Ag=new w,Cg=new w,Lg=new w,Pg=new w,Rg=new w,Dg=new w,Ig=new w,zg=new w,Fg=new w,Ng=new w,Bg=new w,Og=new w,Ug=new w,Gg=new w;new w;new w;const kg=new w,Vg=new w,Wg=new w,Hg=new w,qg=new w,Xg=new w,jg=new w,Yg=new w,$g=new w,Zg=new w,La=new qt,Kg=new w;new w;const Jg=new w,Pa=new w,Qg=new w,t0=new w,e0=new w,n0=[0],i0=new w,s0=new w;class Ra{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,o=i.length;let r=0;for(let a=0;a<s;a++){let l=!1;const h=n[a];for(;h>i[r];)r++;l=h===i[r],l||Da(t,h)}r=0;for(let a=0;a<o;a++){let l=!1;const h=i[a];for(;h>n[r];)r++;l=n[r]===h,l||Da(e,h)}}}function Da(c,t){c.push((t&4294901760)>>16,t&65535)}const wr=(c,t)=>c<t?`${c}-${t}`:`${t}-${c}`;class r0{constructor(){this.data={keys:[]}}get(t,e){const n=wr(t,e);return this.data[n]}set(t,e,n){const i=wr(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=wr(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class o0 extends hl{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new w,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new w,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new fm,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new Hm,this.constraints=[],this.narrowphase=new Zm(this),this.collisionMatrix=new _a,this.collisionMatrixPrevious=new _a,this.bodyOverlapKeeper=new Ra,this.shapeOverlapKeeper=new Ra,this.contactmaterials=[],this.contactMaterialTable=new r0,this.defaultMaterial=new Zi("default"),this.defaultContactMaterial=new Ds(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof As?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=Kt.ALL,n.from=t,n.to=e,n.callback=i,br.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=Kt.ANY,n.from=t,n.to=e,n.result=i,br.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=Kt.CLOSEST,n.from=t,n.to=e,n.result=i,br.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof lt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=Qt.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=Qt.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(Qt.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let r=0;r!==this.bodies.length;r++){const a=this.bodies[r];a.previousPosition.lerp(a.position,o,a.interpolatedPosition),a.previousQuaternion.slerp(a.quaternion,o,a.interpolatedQuaternion),a.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=u0,i=d0,s=this.bodies.length,o=this.bodies,r=this.solver,a=this.gravity,l=this.doProfiling,h=this.profile,d=lt.DYNAMIC;let u=-1/0;const m=this.constraints,g=h0;a.length();const p=a.x,f=a.y,_=a.z;let x=0;for(l&&(u=Qt.now()),x=0;x!==s;x++){const A=o[x];if(A.type===d){const L=A.force,I=A.mass;L.x+=I*p,L.y+=I*f,L.z+=I*_}}for(let A=0,L=this.subsystems.length;A!==L;A++)this.subsystems[A].update();l&&(u=Qt.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),l&&(h.broadphase=Qt.now()-u);let y=m.length;for(x=0;x!==y;x++){const A=m[x];if(!A.collideConnected)for(let L=n.length-1;L>=0;L-=1)(A.bodyA===n[L]&&A.bodyB===i[L]||A.bodyB===n[L]&&A.bodyA===i[L])&&(n.splice(L,1),i.splice(L,1))}this.collisionMatrixTick(),l&&(u=Qt.now());const M=c0,S=e.length;for(x=0;x!==S;x++)M.push(e[x]);e.length=0;const C=this.frictionEquations.length;for(x=0;x!==C;x++)g.push(this.frictionEquations[x]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,M,this.frictionEquations,g),l&&(h.narrowphase=Qt.now()-u),l&&(u=Qt.now()),x=0;x<this.frictionEquations.length;x++)r.addEquation(this.frictionEquations[x]);const D=e.length;for(let A=0;A!==D;A++){const L=e[A],I=L.bi,z=L.bj,H=L.si,V=L.sj;let X;if(I.material&&z.material?X=this.getContactMaterial(I.material,z.material)||this.defaultContactMaterial:X=this.defaultContactMaterial,X.friction,I.material&&z.material&&(I.material.friction>=0&&z.material.friction>=0&&I.material.friction*z.material.friction,I.material.restitution>=0&&z.material.restitution>=0&&(L.restitution=I.material.restitution*z.material.restitution)),r.addEquation(L),I.allowSleep&&I.type===lt.DYNAMIC&&I.sleepState===lt.SLEEPING&&z.sleepState===lt.AWAKE&&z.type!==lt.STATIC){const K=z.velocity.lengthSquared()+z.angularVelocity.lengthSquared(),rt=z.sleepSpeedLimit**2;K>=rt*2&&(I.wakeUpAfterNarrowphase=!0)}if(z.allowSleep&&z.type===lt.DYNAMIC&&z.sleepState===lt.SLEEPING&&I.sleepState===lt.AWAKE&&I.type!==lt.STATIC){const K=I.velocity.lengthSquared()+I.angularVelocity.lengthSquared(),rt=I.sleepSpeedLimit**2;K>=rt*2&&(z.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(I,z,!0),this.collisionMatrixPrevious.get(I,z)||(zi.body=z,zi.contact=L,I.dispatchEvent(zi),zi.body=I,z.dispatchEvent(zi)),this.bodyOverlapKeeper.set(I.id,z.id),this.shapeOverlapKeeper.set(H.id,V.id)}for(this.emitContactEvents(),l&&(h.makeContactConstraints=Qt.now()-u,u=Qt.now()),x=0;x!==s;x++){const A=o[x];A.wakeUpAfterNarrowphase&&(A.wakeUp(),A.wakeUpAfterNarrowphase=!1)}for(y=m.length,x=0;x!==y;x++){const A=m[x];A.update();for(let L=0,I=A.equations.length;L!==I;L++){const z=A.equations[L];r.addEquation(z)}}r.solve(t,this),l&&(h.solve=Qt.now()-u),r.removeAllEquations();const v=Math.pow;for(x=0;x!==s;x++){const A=o[x];if(A.type&d){const L=v(1-A.linearDamping,t),I=A.velocity;I.scale(L,I);const z=A.angularVelocity;if(z){const H=v(1-A.angularDamping,t);z.scale(H,z)}}}this.dispatchEvent(l0),l&&(u=Qt.now());const R=this.stepnumber%(this.quatNormalizeSkip+1)===0,O=this.quatNormalizeFast;for(x=0;x!==s;x++)o[x].integrate(t,R,O);this.clearForces(),this.broadphase.dirty=!0,l&&(h.integrate=Qt.now()-u),this.stepnumber+=1,this.dispatchEvent(a0);let N=!0;if(this.allowSleep)for(N=!1,x=0;x!==s;x++){const A=o[x];A.sleepTick(this.time),A.sleepState!==lt.SLEEPING&&(N=!0)}this.hasActiveBodies=N}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(cn,hn),t){for(let s=0,o=cn.length;s<o;s+=2)Fi.bodyA=this.getBodyById(cn[s]),Fi.bodyB=this.getBodyById(cn[s+1]),this.dispatchEvent(Fi);Fi.bodyA=Fi.bodyB=null}if(e){for(let s=0,o=hn.length;s<o;s+=2)Ni.bodyA=this.getBodyById(hn[s]),Ni.bodyB=this.getBodyById(hn[s+1]),this.dispatchEvent(Ni);Ni.bodyA=Ni.bodyB=null}cn.length=hn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(cn,hn),n){for(let s=0,o=cn.length;s<o;s+=2){const r=this.getShapeById(cn[s]),a=this.getShapeById(cn[s+1]);un.shapeA=r,un.shapeB=a,r&&(un.bodyA=r.body),a&&(un.bodyB=a.body),this.dispatchEvent(un)}un.bodyA=un.bodyB=un.shapeA=un.shapeB=null}if(i){for(let s=0,o=hn.length;s<o;s+=2){const r=this.getShapeById(hn[s]),a=this.getShapeById(hn[s+1]);dn.shapeA=r,dn.shapeB=a,r&&(dn.bodyA=r.body),a&&(dn.bodyB=a.body),this.dispatchEvent(dn)}dn.bodyA=dn.bodyB=dn.shapeA=dn.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new De;const br=new Kt,Qt=globalThis.performance||{};if(!Qt.now){let c=Date.now();Qt.timing&&Qt.timing.navigationStart&&(c=Qt.timing.navigationStart),Qt.now=()=>Date.now()-c}new w;const a0={type:"postStep"},l0={type:"preStep"},zi={type:lt.COLLIDE_EVENT_NAME,body:null,contact:null},c0=[],h0=[],u0=[],d0=[],cn=[],hn=[],Fi={type:"beginContact",bodyA:null,bodyB:null},Ni={type:"endContact",bodyA:null,bodyB:null},un={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},dn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};function f0(c,t,e){let{color:n=65280,scale:i=1,onInit:s,onUpdate:o}=e===void 0?{}:e;const r=[],a=new Dr({color:n??65280,wireframe:!0}),l=new w,h=new w,d=new w,u=new qt,m=new Ts(1),g=new Tn(1,1,1),p=new yi(10,10,10,10);p.translate(0,0,1e-4);function f(v){const b=new we,R=[];for(let N=0;N<v.vertices.length;N++){const A=v.vertices[N];R.push(A.x,A.y,A.z)}b.setAttribute("position",new Jt(R,3));const O=[];for(let N=0;N<v.faces.length;N++){const A=v.faces[N],L=A[0];for(let I=1;I<A.length-1;I++){const z=A[I],H=A[I+1];O.push(L,z,H)}}return b.setIndex(O),b.computeBoundingSphere(),b.computeVertexNormals(),b}function _(v){const b=new we,R=[],O=l,N=h,A=d;for(let L=0;L<v.indices.length/3;L++)v.getTriangleVertices(L,O,N,A),R.push(O.x,O.y,O.z),R.push(N.x,N.y,N.z),R.push(A.x,A.y,A.z);return b.setAttribute("position",new Jt(R,3)),b.computeBoundingSphere(),b.computeVertexNormals(),b}function x(v){const b=new we,R=v.elementSize||1,O=v.data.flatMap((A,L)=>A.flatMap((I,z)=>[L*R,z*R,I])),N=[];for(let A=0;A<v.data.length-1;A++)for(let L=0;L<v.data[A].length-1;L++){const I=v.data[A].length,z=A*I+L;N.push(z+1,z+I,z+I+1),N.push(z+I,z+1,z)}return b.setIndex(N),b.setAttribute("position",new Jt(O,3)),b.computeBoundingSphere(),b.computeVertexNormals(),b}function y(v){let b=new oe;const{SPHERE:R,BOX:O,PLANE:N,CYLINDER:A,CONVEXPOLYHEDRON:L,TRIMESH:I,HEIGHTFIELD:z}=st.types;switch(v.type){case R:{b=new oe(m,a);break}case O:{b=new oe(g,a);break}case N:{b=new oe(p,a);break}case A:{const H=new Nr(v.radiusTop,v.radiusBottom,v.height,v.numSegments);b=new oe(H,a),v.geometryId=H.id;break}case L:{const H=f(v);b=new oe(H,a),v.geometryId=H.id;break}case I:{const H=_(v);b=new oe(H,a),v.geometryId=H.id;break}case z:{const H=x(v);b=new oe(H,a),v.geometryId=H.id;break}}return c.add(b),b}function M(v,b){const{SPHERE:R,BOX:O,PLANE:N,CYLINDER:A,CONVEXPOLYHEDRON:L,TRIMESH:I,HEIGHTFIELD:z}=st.types;switch(b.type){case R:{const{radius:H}=b;v.scale.set(H*i,H*i,H*i);break}case O:{v.scale.copy(b.halfExtents),v.scale.multiplyScalar(2*i);break}case N:break;case A:{v.scale.set(1*i,1*i,1*i);break}case L:{v.scale.set(1*i,1*i,1*i);break}case I:{v.scale.copy(b.scale).multiplyScalar(i);break}case z:{v.scale.set(1*i,1*i,1*i);break}}}function S(v,b){if(!v)return!1;const{geometry:R}=v;return R instanceof Ts&&b.type===st.types.SPHERE||R instanceof Tn&&b.type===st.types.BOX||R instanceof yi&&b.type===st.types.PLANE||R.id===b.geometryId&&b.type===st.types.CYLINDER||R.id===b.geometryId&&b.type===st.types.CONVEXPOLYHEDRON||R.id===b.geometryId&&b.type===st.types.TRIMESH||R.id===b.geometryId&&b.type===st.types.HEIGHTFIELD}function C(v,b){let R=r[v],O=!1;return S(R,b)||(R&&c.remove(R),r[v]=R=y(b),O=!0),M(R,b),O}function D(){const v=r,b=l,R=u;let O=0;for(const N of t.bodies)for(let A=0;A!==N.shapes.length;A++){const L=N.shapes[A],I=C(O,L),z=v[O];z&&(N.quaternion.vmult(N.shapeOffsets[A],b),N.position.vadd(b,b),N.quaternion.mult(N.shapeOrientations[A],R),z.position.copy(b),z.quaternion.copy(R),I&&s instanceof Function&&s(N,z,L),!I&&o instanceof Function&&o(N,z,L)),O++}for(let N=O;N<v.length;N++){const A=v[N];A&&c.remove(A)}v.length=O}return{update:D}}let Mn,fn,vl,kn,Vn,bs,tn={width:window.innerWidth,height:window.innerHeight},Gi,di,On,me,Ce;const Ia={ball:"ball.png",wall:"brick.png",floor:"concrete.png"};let p0=new Up,za,Fa=new w(0,1,0),Ss=new qt,Na=new w,m0=35;g0();yl();function g0(){kn=new Pe(75,tn.width/tn.height,.1,100),kn.position.set(0,5,10),fn=new o0,fn.broadphase=new ui(fn),fn.allowSleep=!0,fn.gravity=new w(0,-9.82,0),Mn=new Lp,kn.lookAt(Mn.position);const c=new Gp(100,20);Mn.add(c),Vn=new Fr({antialias:!0}),Vn.setPixelRatio(Math.min(window.devicePixelRatio,2)),Vn.setSize(tn.width,tn.height),document.body.appendChild(Vn.domElement),bs=new Op(16777215,2),bs.position.set(0,5,3),Mn.add(bs);const t=new qi(new w(50,50,1));di=new lt({mass:0,material:"slipperyMaterial"}),di.addShape(t),di.quaternion.setFromAxisAngle(new w(1,0,0),-Math.PI/2),fn.addBody(di);const e=new yi(100,100),n=new ca().load(Ia.floor),i=new aa({map:n});Gi=new oe(e,i),Gi.rotation.x=-Math.PI/2,Mn.add(Gi);const s=new w(2,2,2),o=new Zi("slipperyMaterial"),r=new qi(s);me=new lt({mass:5,material:o,linearDamping:.5,angularDamping:1}),me.addShape(r),me.position.set(0,4,0),fn.addBody(me);const a=new Tn(s.x*2,s.y*2,s.z*2),l=new ca().load(Ia.ball),h=new aa({map:l});On=new oe(a,h),On.position.set(0,4,0),Mn.add(On),On.add(kn),On.add(bs),vl=new f0(Mn,fn),window.addEventListener("resize",_0),Ce={arrowleft:!1,arrowdown:!1,arrowright:!1,arrowup:!1,a:!1,s:!1,d:!1,w:!1},document.body.addEventListener("keydown",d=>{const u=d.code.replace("Key","").toLowerCase();Ce[u]!==void 0&&(Ce[u]=!0)}),document.body.addEventListener("keyup",d=>{const u=d.code.replace("Key","").toLowerCase();Ce[u]!==void 0&&(Ce[u]=!1)})}function yl(){requestAnimationFrame(yl),x0(),Vn.render(Mn,kn)}function _0(){tn.width=window.innerWidth,tn.height=window.innerHeight,kn.aspect=tn.width/tn.height,kn.updateProjectionMatrix(),Vn.setSize(tn.width,tn.height),Vn.setPixelRatio(Math.min(window.devicePixelRatio,2))}function x0(){fn.fixedStep(),za=p0.getDelta(),On.position.copy(me.position),On.quaternion.copy(me.quaternion),Gi.position.copy(di.position),Gi.quaternion.copy(di.quaternion);const c=Math.PI/2*za;(Ce.arrowleft||Ce.a)&&(Ss.setFromAxisAngle(Fa,c),me.quaternion=Ss.mult(me.quaternion)),(Ce.arrowright||Ce.d)&&(Ss.setFromAxisAngle(Fa,-c),me.quaternion=Ss.mult(me.quaternion)),Na.set(0,0,m0*.2);let t=me.quaternion.vmult(Na);(Ce.arrowup||Ce.w)&&(me.velocity.x=-t.x,me.velocity.z=-t.z),(Ce.arrowdown||Ce.s)&&(me.velocity.x=t.x,me.velocity.z=t.z),vl.update()}
//# sourceMappingURL=index-bd80e403.js.map
