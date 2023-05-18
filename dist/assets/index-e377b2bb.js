(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=e(a);fetch(a.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wr="150",Ua=0,Xr=1,Oa=2,ca=1,Va=2,vi=3,wn=0,ke=1,_n=2,Mn=0,Qn=1,Yr=2,jr=3,Zr=4,Wa=5,Kn=100,Ga=101,ka=102,$r=103,Kr=104,Ha=200,qa=201,Xa=202,Ya=203,ua=204,ha=205,ja=206,Za=207,$a=208,Ka=209,Ja=210,Qa=0,to=1,eo=2,Fr=3,no=4,io=5,ro=6,so=7,da=0,ao=1,oo=2,fn=0,lo=1,co=2,uo=3,ho=4,fo=5,fa=300,ni=301,ii=302,zr=303,Nr=304,$i=306,Zi=1e3,Ke=1001,Ur=1002,Ie=1003,Jr=1004,tr=1005,Xe=1006,po=1007,xi=1008,Bn=1009,mo=1010,vo=1011,pa=1012,go=1013,Pn=1014,Dn=1015,_i=1016,xo=1017,_o=1018,ti=1020,yo=1021,Je=1023,Mo=1024,wo=1025,In=1026,ri=1027,bo=1028,So=1029,Eo=1030,To=1031,Ao=1033,er=33776,nr=33777,ir=33778,rr=33779,Qr=35840,ts=35841,es=35842,ns=35843,Co=36196,is=37492,rs=37496,ss=37808,as=37809,os=37810,ls=37811,cs=37812,us=37813,hs=37814,ds=37815,fs=37816,ps=37817,ms=37818,vs=37819,gs=37820,xs=37821,sr=36492,Ro=36283,_s=36284,ys=36285,Ms=36286,Fn=3e3,ce=3001,Lo=3200,Po=3201,ma=0,Do=1,nn="srgb",yi="srgb-linear",va="display-p3",ar=7680,Io=519,ws=35044,bs="300 es",Or=1035;class ai{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const a=this._listeners[t];if(a!==void 0){const r=a.indexOf(e);r!==-1&&a.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const a=n.slice(0);for(let r=0,i=a.length;r<i;r++)a[r].call(this,t);t.target=null}}}const Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],or=Math.PI/180,Ss=180/Math.PI;function wi(){const d=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[d&255]+Ce[d>>8&255]+Ce[d>>16&255]+Ce[d>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function Ge(d,t,e){return Math.max(t,Math.min(e,d))}function Bo(d,t){return(d%t+t)%t}function lr(d,t,e){return(1-e)*d+e*t}function Es(d){return(d&d-1)===0&&d!==0}function Fo(d){return Math.pow(2,Math.floor(Math.log(d)/Math.LN2))}function Ti(d,t){switch(t.constructor){case Float32Array:return d;case Uint16Array:return d/65535;case Uint8Array:return d/255;case Int16Array:return Math.max(d/32767,-1);case Int8Array:return Math.max(d/127,-1);default:throw new Error("Invalid component type.")}}function Oe(d,t){switch(t.constructor){case Float32Array:return d;case Uint16Array:return Math.round(d*65535);case Uint8Array:return Math.round(d*255);case Int16Array:return Math.round(d*32767);case Int8Array:return Math.round(d*127);default:throw new Error("Invalid component type.")}}class le{constructor(t=0,e=0){le.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6],this.y=a[1]*e+a[4]*n+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),a=Math.sin(e),r=this.x-t.x,i=this.y-t.y;return this.x=r*n-i*a+t.x,this.y=r*a+i*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,a,r,i,s,c,h){const l=this.elements;return l[0]=t,l[1]=a,l[2]=s,l[3]=e,l[4]=r,l[5]=c,l[6]=n,l[7]=i,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,a=e.elements,r=this.elements,i=n[0],s=n[3],c=n[6],h=n[1],l=n[4],o=n[7],u=n[2],f=n[5],v=n[8],m=a[0],p=a[3],g=a[6],_=a[1],y=a[4],x=a[7],b=a[2],I=a[5],G=a[8];return r[0]=i*m+s*_+c*b,r[3]=i*p+s*y+c*I,r[6]=i*g+s*x+c*G,r[1]=h*m+l*_+o*b,r[4]=h*p+l*y+o*I,r[7]=h*g+l*x+o*G,r[2]=u*m+f*_+v*b,r[5]=u*p+f*y+v*I,r[8]=u*g+f*x+v*G,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],a=t[2],r=t[3],i=t[4],s=t[5],c=t[6],h=t[7],l=t[8];return e*i*l-e*s*h-n*r*l+n*s*c+a*r*h-a*i*c}invert(){const t=this.elements,e=t[0],n=t[1],a=t[2],r=t[3],i=t[4],s=t[5],c=t[6],h=t[7],l=t[8],o=l*i-s*h,u=s*c-l*r,f=h*r-i*c,v=e*o+n*u+a*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/v;return t[0]=o*m,t[1]=(a*h-l*n)*m,t[2]=(s*n-a*i)*m,t[3]=u*m,t[4]=(l*e-a*c)*m,t[5]=(a*r-s*e)*m,t[6]=f*m,t[7]=(n*c-h*e)*m,t[8]=(i*e-n*r)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,a,r,i,s){const c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*i+h*s)+i+t,-a*h,a*c,-a*(-h*i+c*s)+s+e,0,0,1),this}scale(t,e){return this.premultiply(cr.makeScale(t,e)),this}rotate(t){return this.premultiply(cr.makeRotation(-t)),this}translate(t,e){return this.premultiply(cr.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let a=0;a<9;a++)if(e[a]!==n[a])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const cr=new Be;function ga(d){for(let t=d.length-1;t>=0;--t)if(d[t]>=65535)return!0;return!1}function Mi(d){return document.createElementNS("http://www.w3.org/1999/xhtml",d)}class bi{constructor(t=0,e=0,n=0,a=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=a}static slerpFlat(t,e,n,a,r,i,s){let c=n[a+0],h=n[a+1],l=n[a+2],o=n[a+3];const u=r[i+0],f=r[i+1],v=r[i+2],m=r[i+3];if(s===0){t[e+0]=c,t[e+1]=h,t[e+2]=l,t[e+3]=o;return}if(s===1){t[e+0]=u,t[e+1]=f,t[e+2]=v,t[e+3]=m;return}if(o!==m||c!==u||h!==f||l!==v){let p=1-s;const g=c*u+h*f+l*v+o*m,_=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){const b=Math.sqrt(y),I=Math.atan2(b,g*_);p=Math.sin(p*I)/b,s=Math.sin(s*I)/b}const x=s*_;if(c=c*p+u*x,h=h*p+f*x,l=l*p+v*x,o=o*p+m*x,p===1-s){const b=1/Math.sqrt(c*c+h*h+l*l+o*o);c*=b,h*=b,l*=b,o*=b}}t[e]=c,t[e+1]=h,t[e+2]=l,t[e+3]=o}static multiplyQuaternionsFlat(t,e,n,a,r,i){const s=n[a],c=n[a+1],h=n[a+2],l=n[a+3],o=r[i],u=r[i+1],f=r[i+2],v=r[i+3];return t[e]=s*v+l*o+c*f-h*u,t[e+1]=c*v+l*u+h*o-s*f,t[e+2]=h*v+l*f+s*u-c*o,t[e+3]=l*v-s*o-c*u-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,a){return this._x=t,this._y=e,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,a=t._y,r=t._z,i=t._order,s=Math.cos,c=Math.sin,h=s(n/2),l=s(a/2),o=s(r/2),u=c(n/2),f=c(a/2),v=c(r/2);switch(i){case"XYZ":this._x=u*l*o+h*f*v,this._y=h*f*o-u*l*v,this._z=h*l*v+u*f*o,this._w=h*l*o-u*f*v;break;case"YXZ":this._x=u*l*o+h*f*v,this._y=h*f*o-u*l*v,this._z=h*l*v-u*f*o,this._w=h*l*o+u*f*v;break;case"ZXY":this._x=u*l*o-h*f*v,this._y=h*f*o+u*l*v,this._z=h*l*v+u*f*o,this._w=h*l*o-u*f*v;break;case"ZYX":this._x=u*l*o-h*f*v,this._y=h*f*o+u*l*v,this._z=h*l*v-u*f*o,this._w=h*l*o+u*f*v;break;case"YZX":this._x=u*l*o+h*f*v,this._y=h*f*o+u*l*v,this._z=h*l*v-u*f*o,this._w=h*l*o-u*f*v;break;case"XZY":this._x=u*l*o-h*f*v,this._y=h*f*o-u*l*v,this._z=h*l*v+u*f*o,this._w=h*l*o+u*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+i)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,a=Math.sin(n);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],a=e[4],r=e[8],i=e[1],s=e[5],c=e[9],h=e[2],l=e[6],o=e[10],u=n+s+o;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(l-c)*f,this._y=(r-h)*f,this._z=(i-a)*f}else if(n>s&&n>o){const f=2*Math.sqrt(1+n-s-o);this._w=(l-c)/f,this._x=.25*f,this._y=(a+i)/f,this._z=(r+h)/f}else if(s>o){const f=2*Math.sqrt(1+s-n-o);this._w=(r-h)/f,this._x=(a+i)/f,this._y=.25*f,this._z=(c+l)/f}else{const f=2*Math.sqrt(1+o-n-s);this._w=(i-a)/f,this._x=(r+h)/f,this._y=(c+l)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const a=Math.min(1,e/n);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,a=t._y,r=t._z,i=t._w,s=e._x,c=e._y,h=e._z,l=e._w;return this._x=n*l+i*s+a*h-r*c,this._y=a*l+i*c+r*s-n*h,this._z=r*l+i*h+n*c-a*s,this._w=i*l-n*s-a*c-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,a=this._y,r=this._z,i=this._w;let s=i*t._w+n*t._x+a*t._y+r*t._z;if(s<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,s=-s):this.copy(t),s>=1)return this._w=i,this._x=n,this._y=a,this._z=r,this;const c=1-s*s;if(c<=Number.EPSILON){const f=1-e;return this._w=f*i+e*this._w,this._x=f*n+e*this._x,this._y=f*a+e*this._y,this._z=f*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(c),l=Math.atan2(h,s),o=Math.sin((1-e)*l)/h,u=Math.sin(e*l)/h;return this._w=i*o+this._w*u,this._x=n*o+this._x*u,this._y=a*o+this._y*u,this._z=r*o+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),a=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(a),n*Math.sin(r),n*Math.cos(r),e*Math.sin(a))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class it{constructor(t=0,e=0,n=0){it.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ts.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ts.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,a=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*a,this.y=r[1]*e+r[4]*n+r[7]*a,this.z=r[2]*e+r[5]*n+r[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,a=this.z,r=t.elements,i=1/(r[3]*e+r[7]*n+r[11]*a+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*a+r[12])*i,this.y=(r[1]*e+r[5]*n+r[9]*a+r[13])*i,this.z=(r[2]*e+r[6]*n+r[10]*a+r[14])*i,this}applyQuaternion(t){const e=this.x,n=this.y,a=this.z,r=t.x,i=t.y,s=t.z,c=t.w,h=c*e+i*a-s*n,l=c*n+s*e-r*a,o=c*a+r*n-i*e,u=-r*e-i*n-s*a;return this.x=h*c+u*-r+l*-s-o*-i,this.y=l*c+u*-i+o*-r-h*-s,this.z=o*c+u*-s+h*-i-l*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,a=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*a,this.y=r[1]*e+r[5]*n+r[9]*a,this.z=r[2]*e+r[6]*n+r[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,a=t.y,r=t.z,i=e.x,s=e.y,c=e.z;return this.x=a*c-r*s,this.y=r*i-n*c,this.z=n*s-a*i,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ur.copy(this).projectOnVector(t),this.sub(ur)}reflect(t){return this.sub(ur.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,a=this.z-t.z;return e*e+n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const a=Math.sin(e)*t;return this.x=a*Math.sin(n),this.y=Math.cos(e)*t,this.z=a*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=a,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ur=new it,Ts=new bi;function ei(d){return d<.04045?d*.0773993808:Math.pow(d*.9478672986+.0521327014,2.4)}function hr(d){return d<.0031308?d*12.92:1.055*Math.pow(d,.41666)-.055}const zo=new Be().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),No=new Be().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),yn=new it;function Uo(d){return d.convertSRGBToLinear(),yn.set(d.r,d.g,d.b).applyMatrix3(No),d.setRGB(yn.x,yn.y,yn.z)}function Oo(d){return yn.set(d.r,d.g,d.b).applyMatrix3(zo),d.setRGB(yn.x,yn.y,yn.z).convertLinearToSRGB()}const Vo={[yi]:d=>d,[nn]:d=>d.convertSRGBToLinear(),[va]:Uo},Wo={[yi]:d=>d,[nn]:d=>d.convertLinearToSRGB(),[va]:Oo},Pe={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(d){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!d},get workingColorSpace(){return yi},set workingColorSpace(d){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(d,t,e){if(this.enabled===!1||t===e||!t||!e)return d;const n=Vo[t],a=Wo[e];if(n===void 0||a===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return a(n(d))},fromWorkingColorSpace:function(d,t){return this.convert(d,this.workingColorSpace,t)},toWorkingColorSpace:function(d,t){return this.convert(d,t,this.workingColorSpace)}};let Un;class xa{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Un===void 0&&(Un=Mi("canvas")),Un.width=t.width,Un.height=t.height;const n=Un.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Un}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Mi("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const a=n.getImageData(0,0,t.width,t.height),r=a.data;for(let i=0;i<r.length;i++)r[i]=ei(r[i]/255)*255;return n.putImageData(a,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ei(e[n]/255)*255):e[n]=ei(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class _a{constructor(t=null){this.isSource=!0,this.uuid=wi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let i=0,s=a.length;i<s;i++)a[i].isDataTexture?r.push(dr(a[i].image)):r.push(dr(a[i]))}else r=dr(a);n.url=r}return e||(t.images[this.uuid]=n),n}}function dr(d){return typeof HTMLImageElement<"u"&&d instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&d instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&d instanceof ImageBitmap?xa.getDataURL(d):d.data?{data:Array.from(d.data),width:d.width,height:d.height,type:d.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Go=0;class ze extends ai{constructor(t=ze.DEFAULT_IMAGE,e=ze.DEFAULT_MAPPING,n=Ke,a=Ke,r=Xe,i=xi,s=Je,c=Bn,h=ze.DEFAULT_ANISOTROPY,l=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Go++}),this.uuid=wi(),this.name="",this.source=new _a(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=a,this.magFilter=r,this.minFilter=i,this.anisotropy=h,this.format=s,this.internalFormat=null,this.type=c,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=l,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fa)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zi:t.x=t.x-Math.floor(t.x);break;case Ke:t.x=t.x<0?0:1;break;case Ur:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zi:t.y=t.y-Math.floor(t.y);break;case Ke:t.y=t.y<0?0:1;break;case Ur:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=fa;ze.DEFAULT_ANISOTROPY=1;class Te{constructor(t=0,e=0,n=0,a=1){Te.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,a){return this.x=t,this.y=e,this.z=n,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,a=this.z,r=this.w,i=t.elements;return this.x=i[0]*e+i[4]*n+i[8]*a+i[12]*r,this.y=i[1]*e+i[5]*n+i[9]*a+i[13]*r,this.z=i[2]*e+i[6]*n+i[10]*a+i[14]*r,this.w=i[3]*e+i[7]*n+i[11]*a+i[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,a,r;const c=t.elements,h=c[0],l=c[4],o=c[8],u=c[1],f=c[5],v=c[9],m=c[2],p=c[6],g=c[10];if(Math.abs(l-u)<.01&&Math.abs(o-m)<.01&&Math.abs(v-p)<.01){if(Math.abs(l+u)<.1&&Math.abs(o+m)<.1&&Math.abs(v+p)<.1&&Math.abs(h+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(h+1)/2,x=(f+1)/2,b=(g+1)/2,I=(l+u)/4,G=(o+m)/4,M=(v+p)/4;return y>x&&y>b?y<.01?(n=0,a=.707106781,r=.707106781):(n=Math.sqrt(y),a=I/n,r=G/n):x>b?x<.01?(n=.707106781,a=0,r=.707106781):(a=Math.sqrt(x),n=I/a,r=M/a):b<.01?(n=.707106781,a=.707106781,r=0):(r=Math.sqrt(b),n=G/r,a=M/r),this.set(n,a,r,e),this}let _=Math.sqrt((p-v)*(p-v)+(o-m)*(o-m)+(u-l)*(u-l));return Math.abs(_)<.001&&(_=1),this.x=(p-v)/_,this.y=(o-m)/_,this.z=(u-l)/_,this.w=Math.acos((h+f+g-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zn extends ai{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e);const a={width:t,height:e,depth:1};this.texture=new ze(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Xe,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new _a(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ya extends ze{constructor(t=null,e=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:a},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=Ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ko extends ze{constructor(t=null,e=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:a},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=Ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Si{constructor(t=new it(1/0,1/0,1/0),e=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,a=1/0,r=-1/0,i=-1/0,s=-1/0;for(let c=0,h=t.length;c<h;c+=3){const l=t[c],o=t[c+1],u=t[c+2];l<e&&(e=l),o<n&&(n=o),u<a&&(a=u),l>r&&(r=l),o>i&&(i=o),u>s&&(s=u)}return this.min.set(e,n,a),this.max.set(r,i,s),this}setFromBufferAttribute(t){let e=1/0,n=1/0,a=1/0,r=-1/0,i=-1/0,s=-1/0;for(let c=0,h=t.count;c<h;c++){const l=t.getX(c),o=t.getY(c),u=t.getZ(c);l<e&&(e=l),o<n&&(n=o),u<a&&(a=u),l>r&&(r=l),o>i&&(i=o),u>s&&(s=u)}return this.min.set(e,n,a),this.max.set(r,i,s),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=En.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let i=0,s=r.count;i<s;i++)En.fromBufferAttribute(r,i).applyMatrix4(t.matrixWorld),this.expandByPoint(En)}else n.boundingBox===null&&n.computeBoundingBox(),fr.copy(n.boundingBox),fr.applyMatrix4(t.matrixWorld),this.union(fr);const a=t.children;for(let r=0,i=a.length;r<i;r++)this.expandByObject(a[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,En),En.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ci),Ai.subVectors(this.max,ci),On.subVectors(t.a,ci),Vn.subVectors(t.b,ci),Wn.subVectors(t.c,ci),mn.subVectors(Vn,On),vn.subVectors(Wn,Vn),Tn.subVectors(On,Wn);let e=[0,-mn.z,mn.y,0,-vn.z,vn.y,0,-Tn.z,Tn.y,mn.z,0,-mn.x,vn.z,0,-vn.x,Tn.z,0,-Tn.x,-mn.y,mn.x,0,-vn.y,vn.x,0,-Tn.y,Tn.x,0];return!pr(e,On,Vn,Wn,Ai)||(e=[1,0,0,0,1,0,0,0,1],!pr(e,On,Vn,Wn,Ai))?!1:(Ci.crossVectors(mn,vn),e=[Ci.x,Ci.y,Ci.z],pr(e,On,Vn,Wn,Ai))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,En).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(En).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(on),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const on=[new it,new it,new it,new it,new it,new it,new it,new it],En=new it,fr=new Si,On=new it,Vn=new it,Wn=new it,mn=new it,vn=new it,Tn=new it,ci=new it,Ai=new it,Ci=new it,An=new it;function pr(d,t,e,n,a){for(let r=0,i=d.length-3;r<=i;r+=3){An.fromArray(d,r);const s=a.x*Math.abs(An.x)+a.y*Math.abs(An.y)+a.z*Math.abs(An.z),c=t.dot(An),h=e.dot(An),l=n.dot(An);if(Math.max(-Math.max(c,h,l),Math.min(c,h,l))>s)return!1}return!0}const Ho=new Si,ui=new it,mr=new it;class Gr{constructor(t=new it,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ho.setFromPoints(t).getCenter(n);let a=0;for(let r=0,i=t.length;r<i;r++)a=Math.max(a,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ui.subVectors(t,this.center);const e=ui.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),a=(n-this.radius)*.5;this.center.addScaledVector(ui,a/n),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ui.copy(t.center).add(mr)),this.expandByPoint(ui.copy(t.center).sub(mr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ln=new it,vr=new it,Ri=new it,gn=new it,gr=new it,Li=new it,xr=new it;class qo{constructor(t=new it,e=new it(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ln.copy(this.origin).addScaledVector(this.direction,e),ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,a){vr.copy(t).add(e).multiplyScalar(.5),Ri.copy(e).sub(t).normalize(),gn.copy(this.origin).sub(vr);const r=t.distanceTo(e)*.5,i=-this.direction.dot(Ri),s=gn.dot(this.direction),c=-gn.dot(Ri),h=gn.lengthSq(),l=Math.abs(1-i*i);let o,u,f,v;if(l>0)if(o=i*c-s,u=i*s-c,v=r*l,o>=0)if(u>=-v)if(u<=v){const m=1/l;o*=m,u*=m,f=o*(o+i*u+2*s)+u*(i*o+u+2*c)+h}else u=r,o=Math.max(0,-(i*u+s)),f=-o*o+u*(u+2*c)+h;else u=-r,o=Math.max(0,-(i*u+s)),f=-o*o+u*(u+2*c)+h;else u<=-v?(o=Math.max(0,-(-i*r+s)),u=o>0?-r:Math.min(Math.max(-r,-c),r),f=-o*o+u*(u+2*c)+h):u<=v?(o=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+h):(o=Math.max(0,-(i*r+s)),u=o>0?r:Math.min(Math.max(-r,-c),r),f=-o*o+u*(u+2*c)+h);else u=i>0?-r:r,o=Math.max(0,-(i*u+s)),f=-o*o+u*(u+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,o),a&&a.copy(vr).addScaledVector(Ri,u),f}intersectSphere(t,e){ln.subVectors(t.center,this.origin);const n=ln.dot(this.direction),a=ln.dot(ln)-n*n,r=t.radius*t.radius;if(a>r)return null;const i=Math.sqrt(r-a),s=n-i,c=n+i;return c<0?null:s<0?this.at(c,e):this.at(s,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,a,r,i,s,c;const h=1/this.direction.x,l=1/this.direction.y,o=1/this.direction.z,u=this.origin;return h>=0?(n=(t.min.x-u.x)*h,a=(t.max.x-u.x)*h):(n=(t.max.x-u.x)*h,a=(t.min.x-u.x)*h),l>=0?(r=(t.min.y-u.y)*l,i=(t.max.y-u.y)*l):(r=(t.max.y-u.y)*l,i=(t.min.y-u.y)*l),n>i||r>a||((r>n||isNaN(n))&&(n=r),(i<a||isNaN(a))&&(a=i),o>=0?(s=(t.min.z-u.z)*o,c=(t.max.z-u.z)*o):(s=(t.max.z-u.z)*o,c=(t.min.z-u.z)*o),n>c||s>a)||((s>n||n!==n)&&(n=s),(c<a||a!==a)&&(a=c),a<0)?null:this.at(n>=0?n:a,e)}intersectsBox(t){return this.intersectBox(t,ln)!==null}intersectTriangle(t,e,n,a,r){gr.subVectors(e,t),Li.subVectors(n,t),xr.crossVectors(gr,Li);let i=this.direction.dot(xr),s;if(i>0){if(a)return null;s=1}else if(i<0)s=-1,i=-i;else return null;gn.subVectors(this.origin,t);const c=s*this.direction.dot(Li.crossVectors(gn,Li));if(c<0)return null;const h=s*this.direction.dot(gr.cross(gn));if(h<0||c+h>i)return null;const l=-s*gn.dot(xr);return l<0?null:this.at(l/i,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ae{constructor(){Ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,a,r,i,s,c,h,l,o,u,f,v,m,p){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=a,g[1]=r,g[5]=i,g[9]=s,g[13]=c,g[2]=h,g[6]=l,g[10]=o,g[14]=u,g[3]=f,g[7]=v,g[11]=m,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,a=1/Gn.setFromMatrixColumn(t,0).length(),r=1/Gn.setFromMatrixColumn(t,1).length(),i=1/Gn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*a,e[1]=n[1]*a,e[2]=n[2]*a,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*i,e[9]=n[9]*i,e[10]=n[10]*i,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,a=t.y,r=t.z,i=Math.cos(n),s=Math.sin(n),c=Math.cos(a),h=Math.sin(a),l=Math.cos(r),o=Math.sin(r);if(t.order==="XYZ"){const u=i*l,f=i*o,v=s*l,m=s*o;e[0]=c*l,e[4]=-c*o,e[8]=h,e[1]=f+v*h,e[5]=u-m*h,e[9]=-s*c,e[2]=m-u*h,e[6]=v+f*h,e[10]=i*c}else if(t.order==="YXZ"){const u=c*l,f=c*o,v=h*l,m=h*o;e[0]=u+m*s,e[4]=v*s-f,e[8]=i*h,e[1]=i*o,e[5]=i*l,e[9]=-s,e[2]=f*s-v,e[6]=m+u*s,e[10]=i*c}else if(t.order==="ZXY"){const u=c*l,f=c*o,v=h*l,m=h*o;e[0]=u-m*s,e[4]=-i*o,e[8]=v+f*s,e[1]=f+v*s,e[5]=i*l,e[9]=m-u*s,e[2]=-i*h,e[6]=s,e[10]=i*c}else if(t.order==="ZYX"){const u=i*l,f=i*o,v=s*l,m=s*o;e[0]=c*l,e[4]=v*h-f,e[8]=u*h+m,e[1]=c*o,e[5]=m*h+u,e[9]=f*h-v,e[2]=-h,e[6]=s*c,e[10]=i*c}else if(t.order==="YZX"){const u=i*c,f=i*h,v=s*c,m=s*h;e[0]=c*l,e[4]=m-u*o,e[8]=v*o+f,e[1]=o,e[5]=i*l,e[9]=-s*l,e[2]=-h*l,e[6]=f*o+v,e[10]=u-m*o}else if(t.order==="XZY"){const u=i*c,f=i*h,v=s*c,m=s*h;e[0]=c*l,e[4]=-o,e[8]=h*l,e[1]=u*o+m,e[5]=i*l,e[9]=f*o-v,e[2]=v*o-f,e[6]=s*l,e[10]=m*o+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xo,t,Yo)}lookAt(t,e,n){const a=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),xn.crossVectors(n,Ve),xn.lengthSq()===0&&(Math.abs(n.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),xn.crossVectors(n,Ve)),xn.normalize(),Pi.crossVectors(Ve,xn),a[0]=xn.x,a[4]=Pi.x,a[8]=Ve.x,a[1]=xn.y,a[5]=Pi.y,a[9]=Ve.y,a[2]=xn.z,a[6]=Pi.z,a[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,a=e.elements,r=this.elements,i=n[0],s=n[4],c=n[8],h=n[12],l=n[1],o=n[5],u=n[9],f=n[13],v=n[2],m=n[6],p=n[10],g=n[14],_=n[3],y=n[7],x=n[11],b=n[15],I=a[0],G=a[4],M=a[8],T=a[12],C=a[1],F=a[5],V=a[9],z=a[13],U=a[2],Y=a[6],tt=a[10],W=a[14],B=a[3],$=a[7],X=a[11],N=a[15];return r[0]=i*I+s*C+c*U+h*B,r[4]=i*G+s*F+c*Y+h*$,r[8]=i*M+s*V+c*tt+h*X,r[12]=i*T+s*z+c*W+h*N,r[1]=l*I+o*C+u*U+f*B,r[5]=l*G+o*F+u*Y+f*$,r[9]=l*M+o*V+u*tt+f*X,r[13]=l*T+o*z+u*W+f*N,r[2]=v*I+m*C+p*U+g*B,r[6]=v*G+m*F+p*Y+g*$,r[10]=v*M+m*V+p*tt+g*X,r[14]=v*T+m*z+p*W+g*N,r[3]=_*I+y*C+x*U+b*B,r[7]=_*G+y*F+x*Y+b*$,r[11]=_*M+y*V+x*tt+b*X,r[15]=_*T+y*z+x*W+b*N,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],a=t[8],r=t[12],i=t[1],s=t[5],c=t[9],h=t[13],l=t[2],o=t[6],u=t[10],f=t[14],v=t[3],m=t[7],p=t[11],g=t[15];return v*(+r*c*o-a*h*o-r*s*u+n*h*u+a*s*f-n*c*f)+m*(+e*c*f-e*h*u+r*i*u-a*i*f+a*h*l-r*c*l)+p*(+e*h*o-e*s*f-r*i*o+n*i*f+r*s*l-n*h*l)+g*(-a*s*l-e*c*o+e*s*u+a*i*o-n*i*u+n*c*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=e,a[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],a=t[2],r=t[3],i=t[4],s=t[5],c=t[6],h=t[7],l=t[8],o=t[9],u=t[10],f=t[11],v=t[12],m=t[13],p=t[14],g=t[15],_=o*p*h-m*u*h+m*c*f-s*p*f-o*c*g+s*u*g,y=v*u*h-l*p*h-v*c*f+i*p*f+l*c*g-i*u*g,x=l*m*h-v*o*h+v*s*f-i*m*f-l*s*g+i*o*g,b=v*o*c-l*m*c-v*s*u+i*m*u+l*s*p-i*o*p,I=e*_+n*y+a*x+r*b;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/I;return t[0]=_*G,t[1]=(m*u*r-o*p*r-m*a*f+n*p*f+o*a*g-n*u*g)*G,t[2]=(s*p*r-m*c*r+m*a*h-n*p*h-s*a*g+n*c*g)*G,t[3]=(o*c*r-s*u*r-o*a*h+n*u*h+s*a*f-n*c*f)*G,t[4]=y*G,t[5]=(l*p*r-v*u*r+v*a*f-e*p*f-l*a*g+e*u*g)*G,t[6]=(v*c*r-i*p*r-v*a*h+e*p*h+i*a*g-e*c*g)*G,t[7]=(i*u*r-l*c*r+l*a*h-e*u*h-i*a*f+e*c*f)*G,t[8]=x*G,t[9]=(v*o*r-l*m*r-v*n*f+e*m*f+l*n*g-e*o*g)*G,t[10]=(i*m*r-v*s*r+v*n*h-e*m*h-i*n*g+e*s*g)*G,t[11]=(l*s*r-i*o*r-l*n*h+e*o*h+i*n*f-e*s*f)*G,t[12]=b*G,t[13]=(l*m*a-v*o*a+v*n*u-e*m*u-l*n*p+e*o*p)*G,t[14]=(v*s*a-i*m*a-v*n*c+e*m*c+i*n*p-e*s*p)*G,t[15]=(i*o*a-l*s*a+l*n*c-e*o*c-i*n*u+e*s*u)*G,this}scale(t){const e=this.elements,n=t.x,a=t.y,r=t.z;return e[0]*=n,e[4]*=a,e[8]*=r,e[1]*=n,e[5]*=a,e[9]*=r,e[2]*=n,e[6]*=a,e[10]*=r,e[3]*=n,e[7]*=a,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,a))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),a=Math.sin(e),r=1-n,i=t.x,s=t.y,c=t.z,h=r*i,l=r*s;return this.set(h*i+n,h*s-a*c,h*c+a*s,0,h*s+a*c,l*s+n,l*c-a*i,0,h*c-a*s,l*c+a*i,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,a,r,i){return this.set(1,n,r,0,t,1,i,0,e,a,1,0,0,0,0,1),this}compose(t,e,n){const a=this.elements,r=e._x,i=e._y,s=e._z,c=e._w,h=r+r,l=i+i,o=s+s,u=r*h,f=r*l,v=r*o,m=i*l,p=i*o,g=s*o,_=c*h,y=c*l,x=c*o,b=n.x,I=n.y,G=n.z;return a[0]=(1-(m+g))*b,a[1]=(f+x)*b,a[2]=(v-y)*b,a[3]=0,a[4]=(f-x)*I,a[5]=(1-(u+g))*I,a[6]=(p+_)*I,a[7]=0,a[8]=(v+y)*G,a[9]=(p-_)*G,a[10]=(1-(u+m))*G,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,e,n){const a=this.elements;let r=Gn.set(a[0],a[1],a[2]).length();const i=Gn.set(a[4],a[5],a[6]).length(),s=Gn.set(a[8],a[9],a[10]).length();this.determinant()<0&&(r=-r),t.x=a[12],t.y=a[13],t.z=a[14],je.copy(this);const h=1/r,l=1/i,o=1/s;return je.elements[0]*=h,je.elements[1]*=h,je.elements[2]*=h,je.elements[4]*=l,je.elements[5]*=l,je.elements[6]*=l,je.elements[8]*=o,je.elements[9]*=o,je.elements[10]*=o,e.setFromRotationMatrix(je),n.x=r,n.y=i,n.z=s,this}makePerspective(t,e,n,a,r,i){const s=this.elements,c=2*r/(e-t),h=2*r/(n-a),l=(e+t)/(e-t),o=(n+a)/(n-a),u=-(i+r)/(i-r),f=-2*i*r/(i-r);return s[0]=c,s[4]=0,s[8]=l,s[12]=0,s[1]=0,s[5]=h,s[9]=o,s[13]=0,s[2]=0,s[6]=0,s[10]=u,s[14]=f,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(t,e,n,a,r,i){const s=this.elements,c=1/(e-t),h=1/(n-a),l=1/(i-r),o=(e+t)*c,u=(n+a)*h,f=(i+r)*l;return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-o,s[1]=0,s[5]=2*h,s[9]=0,s[13]=-u,s[2]=0,s[6]=0,s[10]=-2*l,s[14]=-f,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let a=0;a<16;a++)if(e[a]!==n[a])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Gn=new it,je=new Ae,Xo=new it(0,0,0),Yo=new it(1,1,1),xn=new it,Pi=new it,Ve=new it,As=new Ae,Cs=new bi;class Ki{constructor(t=0,e=0,n=0,a=Ki.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,a=this._order){return this._x=t,this._y=e,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const a=t.elements,r=a[0],i=a[4],s=a[8],c=a[1],h=a[5],l=a[9],o=a[2],u=a[6],f=a[10];switch(e){case"XYZ":this._y=Math.asin(Ge(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-i,r)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(s,f),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-o,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-o,f),this._z=Math.atan2(-i,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-i,h));break;case"YZX":this._z=Math.asin(Ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-o,r)):(this._x=0,this._y=Math.atan2(s,f));break;case"XZY":this._z=Math.asin(-Ge(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return As.makeRotationFromQuaternion(t),this.setFromRotationMatrix(As,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Cs.setFromEuler(this),this.setFromQuaternion(Cs,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ki.DEFAULT_ORDER="XYZ";class Ma{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let jo=0;const Rs=new it,kn=new bi,cn=new Ae,Di=new it,hi=new it,Zo=new it,$o=new bi,Ls=new it(1,0,0),Ps=new it(0,1,0),Ds=new it(0,0,1),Ko={type:"added"},Is={type:"removed"};class Ne extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jo++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new it,e=new Ki,n=new bi,a=new it(1,1,1);function r(){n.setFromEuler(e,!1)}function i(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(i),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ae},normalMatrix:{value:new Be}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ma,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return kn.setFromAxisAngle(t,e),this.quaternion.multiply(kn),this}rotateOnWorldAxis(t,e){return kn.setFromAxisAngle(t,e),this.quaternion.premultiply(kn),this}rotateX(t){return this.rotateOnAxis(Ls,t)}rotateY(t){return this.rotateOnAxis(Ps,t)}rotateZ(t){return this.rotateOnAxis(Ds,t)}translateOnAxis(t,e){return Rs.copy(t).applyQuaternion(this.quaternion),this.position.add(Rs.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ls,t)}translateY(t){return this.translateOnAxis(Ps,t)}translateZ(t){return this.translateOnAxis(Ds,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Di.copy(t):Di.set(t,e,n);const a=this.parent;this.updateWorldMatrix(!0,!1),hi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(hi,Di,this.up):cn.lookAt(Di,hi,this.up),this.quaternion.setFromRotationMatrix(cn),a&&(cn.extractRotation(a.matrixWorld),kn.setFromRotationMatrix(cn),this.quaternion.premultiply(kn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Ko)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Is)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Is)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(cn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,a=this.children.length;n<a;n++){const i=this.children[n].getObjectByProperty(t,e);if(i!==void 0)return i}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let a=0,r=this.children.length;a<r;a++){const i=this.children[a].getObjectsByProperty(t,e);i.length>0&&(n=n.concat(i))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hi,t,Zo),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hi,$o,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,a=e.length;n<a;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,a=e.length;n<a;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,a=e.length;n<a;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const a=this.children;for(let r=0,i=a.length;r<i;r++){const s=a[r];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON()));function r(s,c){return s[c.uuid]===void 0&&(s[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(t.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const c=s.shapes;if(Array.isArray(c))for(let h=0,l=c.length;h<l;h++){const o=c[h];r(t.shapes,o)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let c=0,h=this.material.length;c<h;c++)s.push(r(t.materials,this.material[c]));a.material=s}else a.material=r(t.materials,this.material);if(this.children.length>0){a.children=[];for(let s=0;s<this.children.length;s++)a.children.push(this.children[s].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let s=0;s<this.animations.length;s++){const c=this.animations[s];a.animations.push(r(t.animations,c))}}if(e){const s=i(t.geometries),c=i(t.materials),h=i(t.textures),l=i(t.images),o=i(t.shapes),u=i(t.skeletons),f=i(t.animations),v=i(t.nodes);s.length>0&&(n.geometries=s),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),l.length>0&&(n.images=l),o.length>0&&(n.shapes=o),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),v.length>0&&(n.nodes=v)}return n.object=a,n;function i(s){const c=[];for(const h in s){const l=s[h];delete l.metadata,c.push(l)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const a=t.children[n];this.add(a.clone())}return this}}Ne.DEFAULT_UP=new it(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ze=new it,un=new it,_r=new it,hn=new it,Hn=new it,qn=new it,Bs=new it,yr=new it,Mr=new it,wr=new it;class dn{constructor(t=new it,e=new it,n=new it){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,a){a.subVectors(n,e),Ze.subVectors(t,e),a.cross(Ze);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(t,e,n,a,r){Ze.subVectors(a,e),un.subVectors(n,e),_r.subVectors(t,e);const i=Ze.dot(Ze),s=Ze.dot(un),c=Ze.dot(_r),h=un.dot(un),l=un.dot(_r),o=i*h-s*s;if(o===0)return r.set(-2,-1,-1);const u=1/o,f=(h*c-s*l)*u,v=(i*l-s*c)*u;return r.set(1-f-v,v,f)}static containsPoint(t,e,n,a){return this.getBarycoord(t,e,n,a,hn),hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getUV(t,e,n,a,r,i,s,c){return this.getBarycoord(t,e,n,a,hn),c.set(0,0),c.addScaledVector(r,hn.x),c.addScaledVector(i,hn.y),c.addScaledVector(s,hn.z),c}static isFrontFacing(t,e,n,a){return Ze.subVectors(n,e),un.subVectors(t,e),Ze.cross(un).dot(a)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,a){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,e,n,a){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ze.subVectors(this.c,this.b),un.subVectors(this.a,this.b),Ze.cross(un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return dn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,a,r){return dn.getUV(t,this.a,this.b,this.c,e,n,a,r)}containsPoint(t){return dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,a=this.b,r=this.c;let i,s;Hn.subVectors(a,n),qn.subVectors(r,n),yr.subVectors(t,n);const c=Hn.dot(yr),h=qn.dot(yr);if(c<=0&&h<=0)return e.copy(n);Mr.subVectors(t,a);const l=Hn.dot(Mr),o=qn.dot(Mr);if(l>=0&&o<=l)return e.copy(a);const u=c*o-l*h;if(u<=0&&c>=0&&l<=0)return i=c/(c-l),e.copy(n).addScaledVector(Hn,i);wr.subVectors(t,r);const f=Hn.dot(wr),v=qn.dot(wr);if(v>=0&&f<=v)return e.copy(r);const m=f*h-c*v;if(m<=0&&h>=0&&v<=0)return s=h/(h-v),e.copy(n).addScaledVector(qn,s);const p=l*v-f*o;if(p<=0&&o-l>=0&&f-v>=0)return Bs.subVectors(r,a),s=(o-l)/(o-l+(f-v)),e.copy(a).addScaledVector(Bs,s);const g=1/(p+m+u);return i=m*g,s=u*g,e.copy(n).addScaledVector(Hn,i).addScaledVector(qn,s)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Jo=0;class Ei extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jo++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=Qn,this.side=wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ua,this.blendDst=ha,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Io,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ar,this.stencilZFail=ar,this.stencilZPass=ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const a=this[e];if(a===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}a&&a.isColor?a.set(n):a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qn&&(n.blending=this.blending),this.side!==wn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(r){const i=[];for(const s in r){const c=r[s];delete c.metadata,i.push(c)}return i}if(e){const r=a(t.textures),i=a(t.images);r.length>0&&(n.textures=r),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const a=e.length;n=new Array(a);for(let r=0;r!==a;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const wa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$e={h:0,s:0,l:0},Ii={h:0,s:0,l:0};function br(d,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?d+(t-d)*6*e:e<1/2?t:e<2/3?d+(t-d)*6*(2/3-e):d}class ae{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Pe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,a=Pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,Pe.toWorkingColorSpace(this,a),this}setHSL(t,e,n,a=Pe.workingColorSpace){if(t=Bo(t,1),e=Ge(e,0,1),n=Ge(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,i=2*n-r;this.r=br(i,r,t+1/3),this.g=br(i,r,t),this.b=br(i,r,t-1/3)}return Pe.toWorkingColorSpace(this,a),this}setStyle(t,e=nn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const i=a[1],s=a[2];switch(i){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Pe.toWorkingColorSpace(this,e),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Pe.toWorkingColorSpace(this,e),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const c=parseFloat(r[1])/360,h=parseFloat(r[2])/100,l=parseFloat(r[3])/100;return n(r[4]),this.setHSL(c,h,l,e)}break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=a[1],i=r.length;if(i===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Pe.toWorkingColorSpace(this,e),this;if(i===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Pe.toWorkingColorSpace(this,e),this;console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=nn){const n=wa[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ei(t.r),this.g=ei(t.g),this.b=ei(t.b),this}copyLinearToSRGB(t){return this.r=hr(t.r),this.g=hr(t.g),this.b=hr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=nn){return Pe.fromWorkingColorSpace(Re.copy(this),t),Ge(Re.r*255,0,255)<<16^Ge(Re.g*255,0,255)<<8^Ge(Re.b*255,0,255)<<0}getHexString(t=nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Pe.workingColorSpace){Pe.fromWorkingColorSpace(Re.copy(this),e);const n=Re.r,a=Re.g,r=Re.b,i=Math.max(n,a,r),s=Math.min(n,a,r);let c,h;const l=(s+i)/2;if(s===i)c=0,h=0;else{const o=i-s;switch(h=l<=.5?o/(i+s):o/(2-i-s),i){case n:c=(a-r)/o+(a<r?6:0);break;case a:c=(r-n)/o+2;break;case r:c=(n-a)/o+4;break}c/=6}return t.h=c,t.s=h,t.l=l,t}getRGB(t,e=Pe.workingColorSpace){return Pe.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=nn){Pe.fromWorkingColorSpace(Re.copy(this),t);const e=Re.r,n=Re.g,a=Re.b;return t!==nn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${e*255|0},${n*255|0},${a*255|0})`}offsetHSL(t,e,n){return this.getHSL($e),$e.h+=t,$e.s+=e,$e.l+=n,this.setHSL($e.h,$e.s,$e.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL($e),t.getHSL(Ii);const n=lr($e.h,Ii.h,e),a=lr($e.s,Ii.s,e),r=lr($e.l,Ii.l,e);return this.setHSL(n,a,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Re=new ae;ae.NAMES=wa;class ba extends Ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const me=new it,Bi=new le;class tn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ws,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[t+a]=e.array[n+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Bi.fromBufferAttribute(this,e),Bi.applyMatrix3(t),this.setXY(e,Bi.x,Bi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ti(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ti(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ti(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ti(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,a){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),a=Oe(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=a,this}setXYZW(t,e,n,a,r){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),a=Oe(a,this.array),r=Oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=a,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ws&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Sa extends tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ea extends tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class sn extends tn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Qo=0;const qe=new Ae,Sr=new Ne,Xn=new it,We=new Si,di=new Si,we=new it;class pn extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qo++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ga(t)?Ea:Sa)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Be().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qe.makeRotationFromQuaternion(t),this.applyMatrix4(qe),this}rotateX(t){return qe.makeRotationX(t),this.applyMatrix4(qe),this}rotateY(t){return qe.makeRotationY(t),this.applyMatrix4(qe),this}rotateZ(t){return qe.makeRotationZ(t),this.applyMatrix4(qe),this}translate(t,e,n){return qe.makeTranslation(t,e,n),this.applyMatrix4(qe),this}scale(t,e,n){return qe.makeScale(t,e,n),this.applyMatrix4(qe),this}lookAt(t){return Sr.lookAt(t),Sr.updateMatrix(),this.applyMatrix4(Sr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xn).negate(),this.translate(Xn.x,Xn.y,Xn.z),this}setFromPoints(t){const e=[];for(let n=0,a=t.length;n<a;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new sn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,a=e.length;n<a;n++){const r=e[n];We.setFromBufferAttribute(r),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new it,1/0);return}if(t){const n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let r=0,i=e.length;r<i;r++){const s=e[r];di.setFromBufferAttribute(s),this.morphTargetsRelative?(we.addVectors(We.min,di.min),We.expandByPoint(we),we.addVectors(We.max,di.max),We.expandByPoint(we)):(We.expandByPoint(di.min),We.expandByPoint(di.max))}We.getCenter(n);let a=0;for(let r=0,i=t.count;r<i;r++)we.fromBufferAttribute(t,r),a=Math.max(a,n.distanceToSquared(we));if(e)for(let r=0,i=e.length;r<i;r++){const s=e[r],c=this.morphTargetsRelative;for(let h=0,l=s.count;h<l;h++)we.fromBufferAttribute(s,h),c&&(Xn.fromBufferAttribute(t,h),we.add(Xn)),a=Math.max(a,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,a=e.position.array,r=e.normal.array,i=e.uv.array,s=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*s),4));const c=this.getAttribute("tangent").array,h=[],l=[];for(let C=0;C<s;C++)h[C]=new it,l[C]=new it;const o=new it,u=new it,f=new it,v=new le,m=new le,p=new le,g=new it,_=new it;function y(C,F,V){o.fromArray(a,C*3),u.fromArray(a,F*3),f.fromArray(a,V*3),v.fromArray(i,C*2),m.fromArray(i,F*2),p.fromArray(i,V*2),u.sub(o),f.sub(o),m.sub(v),p.sub(v);const z=1/(m.x*p.y-p.x*m.y);isFinite(z)&&(g.copy(u).multiplyScalar(p.y).addScaledVector(f,-m.y).multiplyScalar(z),_.copy(f).multiplyScalar(m.x).addScaledVector(u,-p.x).multiplyScalar(z),h[C].add(g),h[F].add(g),h[V].add(g),l[C].add(_),l[F].add(_),l[V].add(_))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let C=0,F=x.length;C<F;++C){const V=x[C],z=V.start,U=V.count;for(let Y=z,tt=z+U;Y<tt;Y+=3)y(n[Y+0],n[Y+1],n[Y+2])}const b=new it,I=new it,G=new it,M=new it;function T(C){G.fromArray(r,C*3),M.copy(G);const F=h[C];b.copy(F),b.sub(G.multiplyScalar(G.dot(F))).normalize(),I.crossVectors(M,F);const z=I.dot(l[C])<0?-1:1;c[C*4]=b.x,c[C*4+1]=b.y,c[C*4+2]=b.z,c[C*4+3]=z}for(let C=0,F=x.length;C<F;++C){const V=x[C],z=V.start,U=V.count;for(let Y=z,tt=z+U;Y<tt;Y+=3)T(n[Y+0]),T(n[Y+1]),T(n[Y+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const a=new it,r=new it,i=new it,s=new it,c=new it,h=new it,l=new it,o=new it;if(t)for(let u=0,f=t.count;u<f;u+=3){const v=t.getX(u+0),m=t.getX(u+1),p=t.getX(u+2);a.fromBufferAttribute(e,v),r.fromBufferAttribute(e,m),i.fromBufferAttribute(e,p),l.subVectors(i,r),o.subVectors(a,r),l.cross(o),s.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),h.fromBufferAttribute(n,p),s.add(l),c.add(l),h.add(l),n.setXYZ(v,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z),n.setXYZ(p,h.x,h.y,h.z)}else for(let u=0,f=e.count;u<f;u+=3)a.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),i.fromBufferAttribute(e,u+2),l.subVectors(i,r),o.subVectors(a,r),l.cross(o),n.setXYZ(u+0,l.x,l.y,l.z),n.setXYZ(u+1,l.x,l.y,l.z),n.setXYZ(u+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(s,c){const h=s.array,l=s.itemSize,o=s.normalized,u=new h.constructor(c.length*l);let f=0,v=0;for(let m=0,p=c.length;m<p;m++){s.isInterleavedBufferAttribute?f=c[m]*s.data.stride+s.offset:f=c[m]*l;for(let g=0;g<l;g++)u[v++]=h[f++]}return new tn(u,l,o)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new pn,n=this.index.array,a=this.attributes;for(const s in a){const c=a[s],h=t(c,n);e.setAttribute(s,h)}const r=this.morphAttributes;for(const s in r){const c=[],h=r[s];for(let l=0,o=h.length;l<o;l++){const u=h[l],f=t(u,n);c.push(f)}e.morphAttributes[s]=c}e.morphTargetsRelative=this.morphTargetsRelative;const i=this.groups;for(let s=0,c=i.length;s<c;s++){const h=i[s];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const h=n[c];t.data.attributes[c]=h.toJSON(t.data)}const a={};let r=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],l=[];for(let o=0,u=h.length;o<u;o++){const f=h[o];l.push(f.toJSON(t.data))}l.length>0&&(a[c]=l,r=!0)}r&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const i=this.groups;i.length>0&&(t.data.groups=JSON.parse(JSON.stringify(i)));const s=this.boundingSphere;return s!==null&&(t.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const a=t.attributes;for(const h in a){const l=a[h];this.setAttribute(h,l.clone(e))}const r=t.morphAttributes;for(const h in r){const l=[],o=r[h];for(let u=0,f=o.length;u<f;u++)l.push(o[u].clone(e));this.morphAttributes[h]=l}this.morphTargetsRelative=t.morphTargetsRelative;const i=t.groups;for(let h=0,l=i.length;h<l;h++){const o=i[h];this.addGroup(o.start,o.count,o.materialIndex)}const s=t.boundingBox;s!==null&&(this.boundingBox=s.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fs=new Ae,en=new qo,Fi=new Gr,zs=new it,fi=new it,pi=new it,mi=new it,Er=new it,zi=new it,Ni=new le,Ui=new le,Oi=new le,Tr=new it,Vi=new it;class Qe extends Ne{constructor(t=new pn,e=new ba){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const a=e[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,i=a.length;r<i;r++){const s=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(t,e){const n=this.geometry,a=n.attributes.position,r=n.morphAttributes.position,i=n.morphTargetsRelative;e.fromBufferAttribute(a,t);const s=this.morphTargetInfluences;if(r&&s){zi.set(0,0,0);for(let c=0,h=r.length;c<h;c++){const l=s[c],o=r[c];l!==0&&(Er.fromBufferAttribute(o,t),i?zi.addScaledVector(Er,l):zi.addScaledVector(Er.sub(e),l))}e.add(zi)}return this.isSkinnedMesh&&this.boneTransform(t,e),e}raycast(t,e){const n=this.geometry,a=this.material,r=this.matrixWorld;if(a===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Fi.copy(n.boundingSphere),Fi.applyMatrix4(r),en.copy(t.ray).recast(t.near),Fi.containsPoint(en.origin)===!1&&(en.intersectSphere(Fi,zs)===null||en.origin.distanceToSquared(zs)>(t.far-t.near)**2))||(Fs.copy(r).invert(),en.copy(t.ray).applyMatrix4(Fs),n.boundingBox!==null&&en.intersectsBox(n.boundingBox)===!1))return;let i;const s=n.index,c=n.attributes.position,h=n.attributes.uv,l=n.attributes.uv2,o=n.groups,u=n.drawRange;if(s!==null)if(Array.isArray(a))for(let f=0,v=o.length;f<v;f++){const m=o[f],p=a[m.materialIndex],g=Math.max(m.start,u.start),_=Math.min(s.count,Math.min(m.start+m.count,u.start+u.count));for(let y=g,x=_;y<x;y+=3){const b=s.getX(y),I=s.getX(y+1),G=s.getX(y+2);i=Wi(this,p,t,en,h,l,b,I,G),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const f=Math.max(0,u.start),v=Math.min(s.count,u.start+u.count);for(let m=f,p=v;m<p;m+=3){const g=s.getX(m),_=s.getX(m+1),y=s.getX(m+2);i=Wi(this,a,t,en,h,l,g,_,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let f=0,v=o.length;f<v;f++){const m=o[f],p=a[m.materialIndex],g=Math.max(m.start,u.start),_=Math.min(c.count,Math.min(m.start+m.count,u.start+u.count));for(let y=g,x=_;y<x;y+=3){const b=y,I=y+1,G=y+2;i=Wi(this,p,t,en,h,l,b,I,G),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const f=Math.max(0,u.start),v=Math.min(c.count,u.start+u.count);for(let m=f,p=v;m<p;m+=3){const g=m,_=m+1,y=m+2;i=Wi(this,a,t,en,h,l,g,_,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function tl(d,t,e,n,a,r,i,s){let c;if(t.side===ke?c=n.intersectTriangle(i,r,a,!0,s):c=n.intersectTriangle(a,r,i,t.side===wn,s),c===null)return null;Vi.copy(s),Vi.applyMatrix4(d.matrixWorld);const h=e.ray.origin.distanceTo(Vi);return h<e.near||h>e.far?null:{distance:h,point:Vi.clone(),object:d}}function Wi(d,t,e,n,a,r,i,s,c){d.getVertexPosition(i,fi),d.getVertexPosition(s,pi),d.getVertexPosition(c,mi);const h=tl(d,t,e,n,fi,pi,mi,Tr);if(h){a&&(Ni.fromBufferAttribute(a,i),Ui.fromBufferAttribute(a,s),Oi.fromBufferAttribute(a,c),h.uv=dn.getUV(Tr,fi,pi,mi,Ni,Ui,Oi,new le)),r&&(Ni.fromBufferAttribute(r,i),Ui.fromBufferAttribute(r,s),Oi.fromBufferAttribute(r,c),h.uv2=dn.getUV(Tr,fi,pi,mi,Ni,Ui,Oi,new le));const l={a:i,b:s,c,normal:new it,materialIndex:0};dn.getNormal(fi,pi,mi,l.normal),h.face=l}return h}class oi extends pn{constructor(t=1,e=1,n=1,a=1,r=1,i=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:a,heightSegments:r,depthSegments:i};const s=this;a=Math.floor(a),r=Math.floor(r),i=Math.floor(i);const c=[],h=[],l=[],o=[];let u=0,f=0;v("z","y","x",-1,-1,n,e,t,i,r,0),v("z","y","x",1,-1,n,e,-t,i,r,1),v("x","z","y",1,1,t,n,e,a,i,2),v("x","z","y",1,-1,t,n,-e,a,i,3),v("x","y","z",1,-1,t,e,n,a,r,4),v("x","y","z",-1,-1,t,e,-n,a,r,5),this.setIndex(c),this.setAttribute("position",new sn(h,3)),this.setAttribute("normal",new sn(l,3)),this.setAttribute("uv",new sn(o,2));function v(m,p,g,_,y,x,b,I,G,M,T){const C=x/G,F=b/M,V=x/2,z=b/2,U=I/2,Y=G+1,tt=M+1;let W=0,B=0;const $=new it;for(let X=0;X<tt;X++){const N=X*F-z;for(let D=0;D<Y;D++){const R=D*C-V;$[m]=R*_,$[p]=N*y,$[g]=U,h.push($.x,$.y,$.z),$[m]=0,$[p]=0,$[g]=I>0?1:-1,l.push($.x,$.y,$.z),o.push(D/G),o.push(1-X/M),W+=1}}for(let X=0;X<M;X++)for(let N=0;N<G;N++){const D=u+N+Y*X,R=u+N+Y*(X+1),L=u+(N+1)+Y*(X+1),w=u+(N+1)+Y*X;c.push(D,R,w),c.push(R,L,w),B+=6}s.addGroup(f,B,T),f+=B,u+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function si(d){const t={};for(const e in d){t[e]={};for(const n in d[e]){const a=d[e][n];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?t[e][n]=a.clone():Array.isArray(a)?t[e][n]=a.slice():t[e][n]=a}}return t}function De(d){const t={};for(let e=0;e<d.length;e++){const n=si(d[e]);for(const a in n)t[a]=n[a]}return t}function el(d){const t=[];for(let e=0;e<d.length;e++)t.push(d[e].clone());return t}function Ta(d){return d.getRenderTarget()===null&&d.outputEncoding===ce?nn:yi}const nl={clone:si,merge:De};var il=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends Ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=il,this.fragmentShader=rl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=si(t.uniforms),this.uniformsGroups=el(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const a in this.uniforms){const i=this.uniforms[a].value;i&&i.isTexture?e.uniforms[a]={type:"t",value:i.toJSON(t).uuid}:i&&i.isColor?e.uniforms[a]={type:"c",value:i.getHex()}:i&&i.isVector2?e.uniforms[a]={type:"v2",value:i.toArray()}:i&&i.isVector3?e.uniforms[a]={type:"v3",value:i.toArray()}:i&&i.isVector4?e.uniforms[a]={type:"v4",value:i.toArray()}:i&&i.isMatrix3?e.uniforms[a]={type:"m3",value:i.toArray()}:i&&i.isMatrix4?e.uniforms[a]={type:"m4",value:i.toArray()}:e.uniforms[a]={value:i}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Aa extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ye extends Aa{constructor(t=50,e=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ss*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(or*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,a,r,i){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=i,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(or*.5*this.fov)/this.zoom,n=2*e,a=this.aspect*n,r=-.5*a;const i=this.view;if(this.view!==null&&this.view.enabled){const c=i.fullWidth,h=i.fullHeight;r+=i.offsetX*a/c,e-=i.offsetY*n/h,a*=i.width/c,n*=i.height/h}const s=this.filmOffset;s!==0&&(r+=t*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Yn=-90,jn=1;class sl extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const a=new Ye(Yn,jn,t,e);a.layers=this.layers,a.up.set(0,1,0),a.lookAt(1,0,0),this.add(a);const r=new Ye(Yn,jn,t,e);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const i=new Ye(Yn,jn,t,e);i.layers=this.layers,i.up.set(0,0,-1),i.lookAt(0,1,0),this.add(i);const s=new Ye(Yn,jn,t,e);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);const c=new Ye(Yn,jn,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const h=new Ye(Yn,jn,t,e);h.layers=this.layers,h.up.set(0,1,0),h.lookAt(0,0,-1),this.add(h)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[a,r,i,s,c,h]=this.children,l=t.getRenderTarget(),o=t.toneMapping,u=t.xr.enabled;t.toneMapping=fn,t.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,a),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,i),t.setRenderTarget(n,3),t.render(e,s),t.setRenderTarget(n,4),t.render(e,c),n.texture.generateMipmaps=f,t.setRenderTarget(n,5),t.render(e,h),t.setRenderTarget(l),t.toneMapping=o,t.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class Ca extends ze{constructor(t,e,n,a,r,i,s,c,h,l){t=t!==void 0?t:[],e=e!==void 0?e:ni,super(t,e,n,a,r,i,s,c,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class al extends zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},a=[n,n,n,n,n,n];this.texture=new Ca(a,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Xe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new oi(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:Mn});r.uniforms.tEquirect.value=e;const i=new Qe(a,r),s=e.minFilter;return e.minFilter===xi&&(e.minFilter=Xe),new sl(1,10,this).update(t,i),e.minFilter=s,i.geometry.dispose(),i.material.dispose(),this}clear(t,e,n,a){const r=t.getRenderTarget();for(let i=0;i<6;i++)t.setRenderTarget(this,i),t.clear(e,n,a);t.setRenderTarget(r)}}const Ar=new it,ol=new it,ll=new Be;class Cn{constructor(t=new it(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,a){return this.normal.set(t,e,n),this.constant=a,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const a=Ar.subVectors(n,e).cross(ol.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ar),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/a;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ll.getNormalMatrix(t),a=this.coplanarPoint(Ar).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zn=new Gr,Gi=new it;class Ra{constructor(t=new Cn,e=new Cn,n=new Cn,a=new Cn,r=new Cn,i=new Cn){this.planes=[t,e,n,a,r,i]}set(t,e,n,a,r,i){const s=this.planes;return s[0].copy(t),s[1].copy(e),s[2].copy(n),s[3].copy(a),s[4].copy(r),s[5].copy(i),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,a=n[0],r=n[1],i=n[2],s=n[3],c=n[4],h=n[5],l=n[6],o=n[7],u=n[8],f=n[9],v=n[10],m=n[11],p=n[12],g=n[13],_=n[14],y=n[15];return e[0].setComponents(s-a,o-c,m-u,y-p).normalize(),e[1].setComponents(s+a,o+c,m+u,y+p).normalize(),e[2].setComponents(s+r,o+h,m+f,y+g).normalize(),e[3].setComponents(s-r,o-h,m-f,y-g).normalize(),e[4].setComponents(s-i,o-l,m-v,y-_).normalize(),e[5].setComponents(s+i,o+l,m+v,y+_).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Zn)}intersectsSprite(t){return Zn.center.set(0,0,0),Zn.radius=.7071067811865476,Zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(t){const e=this.planes,n=t.center,a=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<a)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const a=e[n];if(Gi.x=a.normal.x>0?t.max.x:t.min.x,Gi.y=a.normal.y>0?t.max.y:t.min.y,Gi.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(Gi)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function La(){let d=null,t=!1,e=null,n=null;function a(r,i){e(r,i),n=d.requestAnimationFrame(a)}return{start:function(){t!==!0&&e!==null&&(n=d.requestAnimationFrame(a),t=!0)},stop:function(){d.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){d=r}}}function cl(d,t){const e=t.isWebGL2,n=new WeakMap;function a(h,l){const o=h.array,u=h.usage,f=d.createBuffer();d.bindBuffer(l,f),d.bufferData(l,o,u),h.onUploadCallback();let v;if(o instanceof Float32Array)v=5126;else if(o instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(e)v=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=5123;else if(o instanceof Int16Array)v=5122;else if(o instanceof Uint32Array)v=5125;else if(o instanceof Int32Array)v=5124;else if(o instanceof Int8Array)v=5120;else if(o instanceof Uint8Array)v=5121;else if(o instanceof Uint8ClampedArray)v=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);return{buffer:f,type:v,bytesPerElement:o.BYTES_PER_ELEMENT,version:h.version}}function r(h,l,o){const u=l.array,f=l.updateRange;d.bindBuffer(o,h),f.count===-1?d.bufferSubData(o,0,u):(e?d.bufferSubData(o,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):d.bufferSubData(o,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),l.onUploadCallback()}function i(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function s(h){h.isInterleavedBufferAttribute&&(h=h.data);const l=n.get(h);l&&(d.deleteBuffer(l.buffer),n.delete(h))}function c(h,l){if(h.isGLBufferAttribute){const u=n.get(h);(!u||u.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const o=n.get(h);o===void 0?n.set(h,a(h,l)):o.version<h.version&&(r(o.buffer,h,l),o.version=h.version)}return{get:i,remove:s,update:c}}class Ji extends pn{constructor(t=1,e=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:a};const r=t/2,i=e/2,s=Math.floor(n),c=Math.floor(a),h=s+1,l=c+1,o=t/s,u=e/c,f=[],v=[],m=[],p=[];for(let g=0;g<l;g++){const _=g*u-i;for(let y=0;y<h;y++){const x=y*o-r;v.push(x,-_,0),m.push(0,0,1),p.push(y/s),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let _=0;_<s;_++){const y=_+h*g,x=_+h*(g+1),b=_+1+h*(g+1),I=_+1+h*g;f.push(y,x,I),f.push(x,b,I)}this.setIndex(f),this.setAttribute("position",new sn(v,3)),this.setAttribute("normal",new sn(m,3)),this.setAttribute("uv",new sn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ji(t.width,t.height,t.widthSegments,t.heightSegments)}}var ul=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,hl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dl=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,fl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pl=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ml=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vl="vec3 transformed = vec3( position );",gl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xl=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,_l=`#ifdef USE_IRIDESCENCE
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
#endif`,yl=`#ifdef USE_BUMPMAP
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
#endif`,Ml=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,El=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Al=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Cl=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Rl=`#define PI 3.141592653589793
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
}`,Ll=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pl=`vec3 transformedNormal = objectNormal;
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
#endif`,Dl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Il=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Bl=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fl=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zl="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nl=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ul=`#ifdef USE_ENVMAP
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
#endif`,Ol=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vl=`#ifdef USE_ENVMAP
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
#endif`,Wl=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gl=`#ifdef USE_ENVMAP
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
#endif`,kl=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hl=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ql=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xl=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yl=`#ifdef USE_GRADIENTMAP
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
}`,jl=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Zl=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$l=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kl=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jl=`uniform bool receiveShadow;
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
#endif`,Ql=`#if defined( USE_ENVMAP )
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
#endif`,tc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ec=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ic=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rc=`PhysicalMaterial material;
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
#endif`,sc=`struct PhysicalMaterial {
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
}`,ac=`
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
#endif`,oc=`#if defined( RE_IndirectDiffuse )
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
#endif`,lc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,cc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,dc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,fc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_c=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yc=`#ifdef USE_MORPHNORMALS
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
#endif`,Mc=`#ifdef USE_MORPHTARGETS
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
#endif`,wc=`#ifdef USE_MORPHTARGETS
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
#endif`,bc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Sc=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Ec=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ac=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cc=`#ifdef USE_NORMALMAP
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
#endif`,Rc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Lc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Pc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Dc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ic=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bc=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Uc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Oc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wc=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gc=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kc=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hc=`float getShadowMask() {
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
}`,qc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xc=`#ifdef USE_SKINNING
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
#endif`,Yc=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jc=`#ifdef USE_SKINNING
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
#endif`,Zc=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$c=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kc=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jc=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qc=`#ifdef USE_TRANSMISSION
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
#endif`,tu=`#ifdef USE_TRANSMISSION
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
#endif`,eu=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,nu=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,iu=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,ru=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,su=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,au=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,ou=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cu=`uniform sampler2D t2D;
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
}`,uu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,du=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,pu=`#include <common>
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
}`,mu=`#if DEPTH_PACKING == 3200
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
}`,vu=`#define DISTANCE
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
}`,gu=`#define DISTANCE
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
}`,xu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_u=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,yu=`uniform float scale;
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
}`,Mu=`uniform vec3 diffuse;
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
}`,wu=`#include <common>
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
}`,bu=`uniform vec3 diffuse;
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
}`,Su=`#define LAMBERT
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
}`,Eu=`#define LAMBERT
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
}`,Tu=`#define MATCAP
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
}`,Au=`#define MATCAP
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
}`,Cu=`#define NORMAL
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
}`,Ru=`#define NORMAL
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
}`,Lu=`#define PHONG
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
}`,Pu=`#define PHONG
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
}`,Du=`#define STANDARD
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
}`,Iu=`#define STANDARD
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
}`,Bu=`#define TOON
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
}`,Fu=`#define TOON
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
}`,zu=`uniform float size;
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
}`,Nu=`uniform vec3 diffuse;
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
}`,Uu=`#include <common>
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
}`,Ou=`uniform vec3 color;
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
}`,Vu=`uniform float rotation;
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
}`,Wu=`uniform vec3 diffuse;
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
}`,Qt={alphamap_fragment:ul,alphamap_pars_fragment:hl,alphatest_fragment:dl,alphatest_pars_fragment:fl,aomap_fragment:pl,aomap_pars_fragment:ml,begin_vertex:vl,beginnormal_vertex:gl,bsdfs:xl,iridescence_fragment:_l,bumpmap_pars_fragment:yl,clipping_planes_fragment:Ml,clipping_planes_pars_fragment:wl,clipping_planes_pars_vertex:bl,clipping_planes_vertex:Sl,color_fragment:El,color_pars_fragment:Tl,color_pars_vertex:Al,color_vertex:Cl,common:Rl,cube_uv_reflection_fragment:Ll,defaultnormal_vertex:Pl,displacementmap_pars_vertex:Dl,displacementmap_vertex:Il,emissivemap_fragment:Bl,emissivemap_pars_fragment:Fl,encodings_fragment:zl,encodings_pars_fragment:Nl,envmap_fragment:Ul,envmap_common_pars_fragment:Ol,envmap_pars_fragment:Vl,envmap_pars_vertex:Wl,envmap_physical_pars_fragment:Ql,envmap_vertex:Gl,fog_vertex:kl,fog_pars_vertex:Hl,fog_fragment:ql,fog_pars_fragment:Xl,gradientmap_pars_fragment:Yl,lightmap_fragment:jl,lightmap_pars_fragment:Zl,lights_lambert_fragment:$l,lights_lambert_pars_fragment:Kl,lights_pars_begin:Jl,lights_toon_fragment:tc,lights_toon_pars_fragment:ec,lights_phong_fragment:nc,lights_phong_pars_fragment:ic,lights_physical_fragment:rc,lights_physical_pars_fragment:sc,lights_fragment_begin:ac,lights_fragment_maps:oc,lights_fragment_end:lc,logdepthbuf_fragment:cc,logdepthbuf_pars_fragment:uc,logdepthbuf_pars_vertex:hc,logdepthbuf_vertex:dc,map_fragment:fc,map_pars_fragment:pc,map_particle_fragment:mc,map_particle_pars_fragment:vc,metalnessmap_fragment:gc,metalnessmap_pars_fragment:xc,morphcolor_vertex:_c,morphnormal_vertex:yc,morphtarget_pars_vertex:Mc,morphtarget_vertex:wc,normal_fragment_begin:bc,normal_fragment_maps:Sc,normal_pars_fragment:Ec,normal_pars_vertex:Tc,normal_vertex:Ac,normalmap_pars_fragment:Cc,clearcoat_normal_fragment_begin:Rc,clearcoat_normal_fragment_maps:Lc,clearcoat_pars_fragment:Pc,iridescence_pars_fragment:Dc,output_fragment:Ic,packing:Bc,premultiplied_alpha_fragment:Fc,project_vertex:zc,dithering_fragment:Nc,dithering_pars_fragment:Uc,roughnessmap_fragment:Oc,roughnessmap_pars_fragment:Vc,shadowmap_pars_fragment:Wc,shadowmap_pars_vertex:Gc,shadowmap_vertex:kc,shadowmask_pars_fragment:Hc,skinbase_vertex:qc,skinning_pars_vertex:Xc,skinning_vertex:Yc,skinnormal_vertex:jc,specularmap_fragment:Zc,specularmap_pars_fragment:$c,tonemapping_fragment:Kc,tonemapping_pars_fragment:Jc,transmission_fragment:Qc,transmission_pars_fragment:tu,uv_pars_fragment:eu,uv_pars_vertex:nu,uv_vertex:iu,uv2_pars_fragment:ru,uv2_pars_vertex:su,uv2_vertex:au,worldpos_vertex:ou,background_vert:lu,background_frag:cu,backgroundCube_vert:uu,backgroundCube_frag:hu,cube_vert:du,cube_frag:fu,depth_vert:pu,depth_frag:mu,distanceRGBA_vert:vu,distanceRGBA_frag:gu,equirect_vert:xu,equirect_frag:_u,linedashed_vert:yu,linedashed_frag:Mu,meshbasic_vert:wu,meshbasic_frag:bu,meshlambert_vert:Su,meshlambert_frag:Eu,meshmatcap_vert:Tu,meshmatcap_frag:Au,meshnormal_vert:Cu,meshnormal_frag:Ru,meshphong_vert:Lu,meshphong_frag:Pu,meshphysical_vert:Du,meshphysical_frag:Iu,meshtoon_vert:Bu,meshtoon_frag:Fu,points_vert:zu,points_frag:Nu,shadow_vert:Uu,shadow_frag:Ou,sprite_vert:Vu,sprite_frag:Wu},Lt={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Be},uv2Transform:{value:new Be},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Be}}},rn={basic:{uniforms:De([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:De([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ae(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:De([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:De([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:De([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new ae(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:De([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:De([Lt.points,Lt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:De([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:De([Lt.common,Lt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:De([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:De([Lt.sprite,Lt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:De([Lt.common,Lt.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:De([Lt.lights,Lt.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};rn.physical={uniforms:De([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new le(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const ki={r:0,b:0,g:0};function Gu(d,t,e,n,a,r,i){const s=new ae(0);let c=r===!0?0:1,h,l,o=null,u=0,f=null;function v(p,g){let _=!1,y=g.isScene===!0?g.background:null;y&&y.isTexture&&(y=(g.backgroundBlurriness>0?e:t).get(y));const x=d.xr,b=x.getSession&&x.getSession();b&&b.environmentBlendMode==="additive"&&(y=null),y===null?m(s,c):y&&y.isColor&&(m(y,1),_=!0),(d.autoClear||_)&&d.clear(d.autoClearColor,d.autoClearDepth,d.autoClearStencil),y&&(y.isCubeTexture||y.mapping===$i)?(l===void 0&&(l=new Qe(new oi(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:si(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(I,G,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.toneMapped=y.encoding!==ce,(o!==y||u!==y.version||f!==d.toneMapping)&&(l.material.needsUpdate=!0,o=y,u=y.version,f=d.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(h===void 0&&(h=new Qe(new Ji(2,2),new Nn({name:"BackgroundMaterial",uniforms:si(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=y,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.toneMapped=y.encoding!==ce,y.matrixAutoUpdate===!0&&y.updateMatrix(),h.material.uniforms.uvTransform.value.copy(y.matrix),(o!==y||u!==y.version||f!==d.toneMapping)&&(h.material.needsUpdate=!0,o=y,u=y.version,f=d.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null))}function m(p,g){p.getRGB(ki,Ta(d)),n.buffers.color.setClear(ki.r,ki.g,ki.b,g,i)}return{getClearColor:function(){return s},setClearColor:function(p,g=1){s.set(p),c=g,m(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,m(s,c)},render:v}}function ku(d,t,e,n){const a=d.getParameter(34921),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),i=n.isWebGL2||r!==null,s={},c=p(null);let h=c,l=!1;function o(U,Y,tt,W,B){let $=!1;if(i){const X=m(W,tt,Y);h!==X&&(h=X,f(h.object)),$=g(U,W,tt,B),$&&_(U,W,tt,B)}else{const X=Y.wireframe===!0;(h.geometry!==W.id||h.program!==tt.id||h.wireframe!==X)&&(h.geometry=W.id,h.program=tt.id,h.wireframe=X,$=!0)}B!==null&&e.update(B,34963),($||l)&&(l=!1,M(U,Y,tt,W),B!==null&&d.bindBuffer(34963,e.get(B).buffer))}function u(){return n.isWebGL2?d.createVertexArray():r.createVertexArrayOES()}function f(U){return n.isWebGL2?d.bindVertexArray(U):r.bindVertexArrayOES(U)}function v(U){return n.isWebGL2?d.deleteVertexArray(U):r.deleteVertexArrayOES(U)}function m(U,Y,tt){const W=tt.wireframe===!0;let B=s[U.id];B===void 0&&(B={},s[U.id]=B);let $=B[Y.id];$===void 0&&($={},B[Y.id]=$);let X=$[W];return X===void 0&&(X=p(u()),$[W]=X),X}function p(U){const Y=[],tt=[],W=[];for(let B=0;B<a;B++)Y[B]=0,tt[B]=0,W[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:tt,attributeDivisors:W,object:U,attributes:{},index:null}}function g(U,Y,tt,W){const B=h.attributes,$=Y.attributes;let X=0;const N=tt.getAttributes();for(const D in N)if(N[D].location>=0){const L=B[D];let w=$[D];if(w===void 0&&(D==="instanceMatrix"&&U.instanceMatrix&&(w=U.instanceMatrix),D==="instanceColor"&&U.instanceColor&&(w=U.instanceColor)),L===void 0||L.attribute!==w||w&&L.data!==w.data)return!0;X++}return h.attributesNum!==X||h.index!==W}function _(U,Y,tt,W){const B={},$=Y.attributes;let X=0;const N=tt.getAttributes();for(const D in N)if(N[D].location>=0){let L=$[D];L===void 0&&(D==="instanceMatrix"&&U.instanceMatrix&&(L=U.instanceMatrix),D==="instanceColor"&&U.instanceColor&&(L=U.instanceColor));const w={};w.attribute=L,L&&L.data&&(w.data=L.data),B[D]=w,X++}h.attributes=B,h.attributesNum=X,h.index=W}function y(){const U=h.newAttributes;for(let Y=0,tt=U.length;Y<tt;Y++)U[Y]=0}function x(U){b(U,0)}function b(U,Y){const tt=h.newAttributes,W=h.enabledAttributes,B=h.attributeDivisors;tt[U]=1,W[U]===0&&(d.enableVertexAttribArray(U),W[U]=1),B[U]!==Y&&((n.isWebGL2?d:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,Y),B[U]=Y)}function I(){const U=h.newAttributes,Y=h.enabledAttributes;for(let tt=0,W=Y.length;tt<W;tt++)Y[tt]!==U[tt]&&(d.disableVertexAttribArray(tt),Y[tt]=0)}function G(U,Y,tt,W,B,$){n.isWebGL2===!0&&(tt===5124||tt===5125)?d.vertexAttribIPointer(U,Y,tt,B,$):d.vertexAttribPointer(U,Y,tt,W,B,$)}function M(U,Y,tt,W){if(n.isWebGL2===!1&&(U.isInstancedMesh||W.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();const B=W.attributes,$=tt.getAttributes(),X=Y.defaultAttributeValues;for(const N in $){const D=$[N];if(D.location>=0){let R=B[N];if(R===void 0&&(N==="instanceMatrix"&&U.instanceMatrix&&(R=U.instanceMatrix),N==="instanceColor"&&U.instanceColor&&(R=U.instanceColor)),R!==void 0){const L=R.normalized,w=R.itemSize,k=e.get(R);if(k===void 0)continue;const J=k.buffer,K=k.type,H=k.bytesPerElement;if(R.isInterleavedBufferAttribute){const Q=R.data,rt=Q.stride,bt=R.offset;if(Q.isInstancedInterleavedBuffer){for(let Mt=0;Mt<D.locationSize;Mt++)b(D.location+Mt,Q.meshPerAttribute);U.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Mt=0;Mt<D.locationSize;Mt++)x(D.location+Mt);d.bindBuffer(34962,J);for(let Mt=0;Mt<D.locationSize;Mt++)G(D.location+Mt,w/D.locationSize,K,L,rt*H,(bt+w/D.locationSize*Mt)*H)}else{if(R.isInstancedBufferAttribute){for(let Q=0;Q<D.locationSize;Q++)b(D.location+Q,R.meshPerAttribute);U.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let Q=0;Q<D.locationSize;Q++)x(D.location+Q);d.bindBuffer(34962,J);for(let Q=0;Q<D.locationSize;Q++)G(D.location+Q,w/D.locationSize,K,L,w*H,w/D.locationSize*Q*H)}}else if(X!==void 0){const L=X[N];if(L!==void 0)switch(L.length){case 2:d.vertexAttrib2fv(D.location,L);break;case 3:d.vertexAttrib3fv(D.location,L);break;case 4:d.vertexAttrib4fv(D.location,L);break;default:d.vertexAttrib1fv(D.location,L)}}}}I()}function T(){V();for(const U in s){const Y=s[U];for(const tt in Y){const W=Y[tt];for(const B in W)v(W[B].object),delete W[B];delete Y[tt]}delete s[U]}}function C(U){if(s[U.id]===void 0)return;const Y=s[U.id];for(const tt in Y){const W=Y[tt];for(const B in W)v(W[B].object),delete W[B];delete Y[tt]}delete s[U.id]}function F(U){for(const Y in s){const tt=s[Y];if(tt[U.id]===void 0)continue;const W=tt[U.id];for(const B in W)v(W[B].object),delete W[B];delete tt[U.id]}}function V(){z(),l=!0,h!==c&&(h=c,f(h.object))}function z(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:o,reset:V,resetDefaultState:z,dispose:T,releaseStatesOfGeometry:C,releaseStatesOfProgram:F,initAttributes:y,enableAttribute:x,disableUnusedAttributes:I}}function Hu(d,t,e,n){const a=n.isWebGL2;let r;function i(h){r=h}function s(h,l){d.drawArrays(r,h,l),e.update(l,r,1)}function c(h,l,o){if(o===0)return;let u,f;if(a)u=d,f="drawArraysInstanced";else if(u=t.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[f](r,h,l,o),e.update(l,r,o)}this.setMode=i,this.render=s,this.renderInstances=c}function qu(d,t,e){let n;function a(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const G=t.get("EXT_texture_filter_anisotropic");n=d.getParameter(G.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(G){if(G==="highp"){if(d.getShaderPrecisionFormat(35633,36338).precision>0&&d.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";G="mediump"}return G==="mediump"&&d.getShaderPrecisionFormat(35633,36337).precision>0&&d.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const i=typeof WebGL2RenderingContext<"u"&&d instanceof WebGL2RenderingContext;let s=e.precision!==void 0?e.precision:"highp";const c=r(s);c!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",c,"instead."),s=c);const h=i||t.has("WEBGL_draw_buffers"),l=e.logarithmicDepthBuffer===!0,o=d.getParameter(34930),u=d.getParameter(35660),f=d.getParameter(3379),v=d.getParameter(34076),m=d.getParameter(34921),p=d.getParameter(36347),g=d.getParameter(36348),_=d.getParameter(36349),y=u>0,x=i||t.has("OES_texture_float"),b=y&&x,I=i?d.getParameter(36183):0;return{isWebGL2:i,drawBuffers:h,getMaxAnisotropy:a,getMaxPrecision:r,precision:s,logarithmicDepthBuffer:l,maxTextures:o,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:y,floatFragmentTextures:x,floatVertexTextures:b,maxSamples:I}}function Xu(d){const t=this;let e=null,n=0,a=!1,r=!1;const i=new Cn,s=new Be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(o,u){const f=o.length!==0||u||n!==0||a;return a=u,n=o.length,f},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(o,u){e=l(o,u,0)},this.setState=function(o,u,f){const v=o.clippingPlanes,m=o.clipIntersection,p=o.clipShadows,g=d.get(o);if(!a||v===null||v.length===0||r&&!p)r?l(null):h();else{const _=r?0:n,y=_*4;let x=g.clippingState||null;c.value=x,x=l(v,u,y,f);for(let b=0;b!==y;++b)x[b]=e[b];g.clippingState=x,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=_}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function l(o,u,f,v){const m=o!==null?o.length:0;let p=null;if(m!==0){if(p=c.value,v!==!0||p===null){const g=f+m*4,_=u.matrixWorldInverse;s.getNormalMatrix(_),(p===null||p.length<g)&&(p=new Float32Array(g));for(let y=0,x=f;y!==m;++y,x+=4)i.copy(o[y]).applyMatrix4(_,s),i.normal.toArray(p,x),p[x+3]=i.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,p}}function Yu(d){let t=new WeakMap;function e(i,s){return s===zr?i.mapping=ni:s===Nr&&(i.mapping=ii),i}function n(i){if(i&&i.isTexture&&i.isRenderTargetTexture===!1){const s=i.mapping;if(s===zr||s===Nr)if(t.has(i)){const c=t.get(i).texture;return e(c,i.mapping)}else{const c=i.image;if(c&&c.height>0){const h=new al(c.height/2);return h.fromEquirectangularTexture(d,i),t.set(i,h),i.addEventListener("dispose",a),e(h.texture,i.mapping)}else return null}}return i}function a(i){const s=i.target;s.removeEventListener("dispose",a);const c=t.get(s);c!==void 0&&(t.delete(s),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class ju extends Aa{constructor(t=-1,e=1,n=1,a=-1,r=.1,i=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=a,this.near=r,this.far=i,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,a,r,i){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=i,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=n-t,i=n+t,s=a+e,c=a-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,i=r+h*this.view.width,s-=l*this.view.offsetY,c=s-l*this.view.height}this.projectionMatrix.makeOrthographic(r,i,s,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Jn=4,Ns=[.125,.215,.35,.446,.526,.582],Ln=20,Cr=new ju,Us=new ae;let Rr=null;const Rn=(1+Math.sqrt(5))/2,$n=1/Rn,Os=[new it(1,1,1),new it(-1,1,1),new it(1,1,-1),new it(-1,1,-1),new it(0,Rn,$n),new it(0,Rn,-$n),new it($n,0,Rn),new it(-$n,0,Rn),new it(Rn,$n,0),new it(-Rn,$n,0)];class Vs{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,a=100){Rr=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,a,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ks(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Rr),t.scissorTest=!1,Hi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ni||t.mapping===ii?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Rr=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:_i,format:Je,encoding:Fn,depthBuffer:!1},a=Ws(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ws(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zu(r)),this._blurMaterial=$u(r,t,e)}return a}_compileMaterial(t){const e=new Qe(this._lodPlanes[0],t);this._renderer.compile(e,Cr)}_sceneToCubeUV(t,e,n,a){const s=new Ye(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],l=this._renderer,o=l.autoClear,u=l.toneMapping;l.getClearColor(Us),l.toneMapping=fn,l.autoClear=!1;const f=new ba({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),v=new Qe(new oi,f);let m=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,m=!0):(f.color.copy(Us),m=!0);for(let g=0;g<6;g++){const _=g%3;_===0?(s.up.set(0,c[g],0),s.lookAt(h[g],0,0)):_===1?(s.up.set(0,0,c[g]),s.lookAt(0,h[g],0)):(s.up.set(0,c[g],0),s.lookAt(0,0,h[g]));const y=this._cubeSize;Hi(a,_*y,g>2?y:0,y,y),l.setRenderTarget(a),m&&l.render(v,s),l.render(t,s)}v.geometry.dispose(),v.material.dispose(),l.toneMapping=u,l.autoClear=o,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,a=t.mapping===ni||t.mapping===ii;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=ks()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gs());const r=a?this._cubemapMaterial:this._equirectMaterial,i=new Qe(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=t;const c=this._cubeSize;Hi(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(i,Cr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),i=Os[(a-1)%Os.length];this._blur(t,a-1,a,r,i)}e.autoClear=n}_blur(t,e,n,a,r){const i=this._pingPongRenderTarget;this._halfBlur(t,i,e,n,a,"latitudinal",r),this._halfBlur(i,t,n,n,a,"longitudinal",r)}_halfBlur(t,e,n,a,r,i,s){const c=this._renderer,h=this._blurMaterial;i!=="latitudinal"&&i!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,o=new Qe(this._lodPlanes[a],h),u=h.uniforms,f=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ln-1),m=r/v,p=isFinite(r)?1+Math.floor(l*m):Ln;p>Ln&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ln}`);const g=[];let _=0;for(let G=0;G<Ln;++G){const M=G/m,T=Math.exp(-M*M/2);g.push(T),G===0?_+=T:G<p&&(_+=2*T)}for(let G=0;G<g.length;G++)g[G]=g[G]/_;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=g,u.latitudinal.value=i==="latitudinal",s&&(u.poleAxis.value=s);const{_lodMax:y}=this;u.dTheta.value=v,u.mipInt.value=y-n;const x=this._sizeLods[a],b=3*x*(a>y-Jn?a-y+Jn:0),I=4*(this._cubeSize-x);Hi(e,b,I,3*x,2*x),c.setRenderTarget(e),c.render(o,Cr)}}function Zu(d){const t=[],e=[],n=[];let a=d;const r=d-Jn+1+Ns.length;for(let i=0;i<r;i++){const s=Math.pow(2,a);e.push(s);let c=1/s;i>d-Jn?c=Ns[i-d+Jn-1]:i===0&&(c=0),n.push(c);const h=1/(s-2),l=-h,o=1+h,u=[l,l,o,l,o,o,l,l,o,o,l,o],f=6,v=6,m=3,p=2,g=1,_=new Float32Array(m*v*f),y=new Float32Array(p*v*f),x=new Float32Array(g*v*f);for(let I=0;I<f;I++){const G=I%3*2/3-1,M=I>2?0:-1,T=[G,M,0,G+2/3,M,0,G+2/3,M+1,0,G,M,0,G+2/3,M+1,0,G,M+1,0];_.set(T,m*v*I),y.set(u,p*v*I);const C=[I,I,I,I,I,I];x.set(C,g*v*I)}const b=new pn;b.setAttribute("position",new tn(_,m)),b.setAttribute("uv",new tn(y,p)),b.setAttribute("faceIndex",new tn(x,g)),t.push(b),a>Jn&&a--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ws(d,t,e){const n=new zn(d,t,e);return n.texture.mapping=$i,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hi(d,t,e,n,a){d.viewport.set(t,e,n,a),d.scissor.set(t,e,n,a)}function $u(d,t,e){const n=new Float32Array(Ln),a=new it(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:Ln,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${d}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:kr(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Gs(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kr(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function ks(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function kr(){return`

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
	`}function Ku(d){let t=new WeakMap,e=null;function n(s){if(s&&s.isTexture){const c=s.mapping,h=c===zr||c===Nr,l=c===ni||c===ii;if(h||l)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let o=t.get(s);return e===null&&(e=new Vs(d)),o=h?e.fromEquirectangular(s,o):e.fromCubemap(s,o),t.set(s,o),o.texture}else{if(t.has(s))return t.get(s).texture;{const o=s.image;if(h&&o&&o.height>0||l&&o&&a(o)){e===null&&(e=new Vs(d));const u=h?e.fromEquirectangular(s):e.fromCubemap(s);return t.set(s,u),s.addEventListener("dispose",r),u.texture}else return null}}}return s}function a(s){let c=0;const h=6;for(let l=0;l<h;l++)s[l]!==void 0&&c++;return c===h}function r(s){const c=s.target;c.removeEventListener("dispose",r);const h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function i(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:i}}function Ju(d){const t={};function e(n){if(t[n]!==void 0)return t[n];let a;switch(n){case"WEBGL_depth_texture":a=d.getExtension("WEBGL_depth_texture")||d.getExtension("MOZ_WEBGL_depth_texture")||d.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=d.getExtension("EXT_texture_filter_anisotropic")||d.getExtension("MOZ_EXT_texture_filter_anisotropic")||d.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=d.getExtension("WEBGL_compressed_texture_s3tc")||d.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||d.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=d.getExtension("WEBGL_compressed_texture_pvrtc")||d.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=d.getExtension(n)}return t[n]=a,a}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const a=e(n);return a===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),a}}}function Qu(d,t,e,n){const a={},r=new WeakMap;function i(o){const u=o.target;u.index!==null&&t.remove(u.index);for(const v in u.attributes)t.remove(u.attributes[v]);u.removeEventListener("dispose",i),delete a[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function s(o,u){return a[u.id]===!0||(u.addEventListener("dispose",i),a[u.id]=!0,e.memory.geometries++),u}function c(o){const u=o.attributes;for(const v in u)t.update(u[v],34962);const f=o.morphAttributes;for(const v in f){const m=f[v];for(let p=0,g=m.length;p<g;p++)t.update(m[p],34962)}}function h(o){const u=[],f=o.index,v=o.attributes.position;let m=0;if(f!==null){const _=f.array;m=f.version;for(let y=0,x=_.length;y<x;y+=3){const b=_[y+0],I=_[y+1],G=_[y+2];u.push(b,I,I,G,G,b)}}else{const _=v.array;m=v.version;for(let y=0,x=_.length/3-1;y<x;y+=3){const b=y+0,I=y+1,G=y+2;u.push(b,I,I,G,G,b)}}const p=new(ga(u)?Ea:Sa)(u,1);p.version=m;const g=r.get(o);g&&t.remove(g),r.set(o,p)}function l(o){const u=r.get(o);if(u){const f=o.index;f!==null&&u.version<f.version&&h(o)}else h(o);return r.get(o)}return{get:s,update:c,getWireframeAttribute:l}}function th(d,t,e,n){const a=n.isWebGL2;let r;function i(u){r=u}let s,c;function h(u){s=u.type,c=u.bytesPerElement}function l(u,f){d.drawElements(r,f,s,u*c),e.update(f,r,1)}function o(u,f,v){if(v===0)return;let m,p;if(a)m=d,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,f,s,u*c,v),e.update(f,r,v)}this.setMode=i,this.setIndex=h,this.render=l,this.renderInstances=o}function eh(d){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,i,s){switch(e.calls++,i){case 4:e.triangles+=s*(r/3);break;case 1:e.lines+=s*(r/2);break;case 3:e.lines+=s*(r-1);break;case 2:e.lines+=s*r;break;case 0:e.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i);break}}function a(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:a,update:n}}function nh(d,t){return d[0]-t[0]}function ih(d,t){return Math.abs(t[1])-Math.abs(d[1])}function rh(d,t,e){const n={},a=new Float32Array(8),r=new WeakMap,i=new Te,s=[];for(let h=0;h<8;h++)s[h]=[h,0];function c(h,l,o){const u=h.morphTargetInfluences;if(t.isWebGL2===!0){const v=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,m=v!==void 0?v.length:0;let p=r.get(l);if(p===void 0||p.count!==m){let Y=function(){z.dispose(),r.delete(l),l.removeEventListener("dispose",Y)};var f=Y;p!==void 0&&p.texture.dispose();const y=l.morphAttributes.position!==void 0,x=l.morphAttributes.normal!==void 0,b=l.morphAttributes.color!==void 0,I=l.morphAttributes.position||[],G=l.morphAttributes.normal||[],M=l.morphAttributes.color||[];let T=0;y===!0&&(T=1),x===!0&&(T=2),b===!0&&(T=3);let C=l.attributes.position.count*T,F=1;C>t.maxTextureSize&&(F=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const V=new Float32Array(C*F*4*m),z=new ya(V,C,F,m);z.type=Dn,z.needsUpdate=!0;const U=T*4;for(let tt=0;tt<m;tt++){const W=I[tt],B=G[tt],$=M[tt],X=C*F*4*tt;for(let N=0;N<W.count;N++){const D=N*U;y===!0&&(i.fromBufferAttribute(W,N),V[X+D+0]=i.x,V[X+D+1]=i.y,V[X+D+2]=i.z,V[X+D+3]=0),x===!0&&(i.fromBufferAttribute(B,N),V[X+D+4]=i.x,V[X+D+5]=i.y,V[X+D+6]=i.z,V[X+D+7]=0),b===!0&&(i.fromBufferAttribute($,N),V[X+D+8]=i.x,V[X+D+9]=i.y,V[X+D+10]=i.z,V[X+D+11]=$.itemSize===4?i.w:1)}}p={count:m,texture:z,size:new le(C,F)},r.set(l,p),l.addEventListener("dispose",Y)}let g=0;for(let y=0;y<u.length;y++)g+=u[y];const _=l.morphTargetsRelative?1:1-g;o.getUniforms().setValue(d,"morphTargetBaseInfluence",_),o.getUniforms().setValue(d,"morphTargetInfluences",u),o.getUniforms().setValue(d,"morphTargetsTexture",p.texture,e),o.getUniforms().setValue(d,"morphTargetsTextureSize",p.size)}else{const v=u===void 0?0:u.length;let m=n[l.id];if(m===void 0||m.length!==v){m=[];for(let x=0;x<v;x++)m[x]=[x,0];n[l.id]=m}for(let x=0;x<v;x++){const b=m[x];b[0]=x,b[1]=u[x]}m.sort(ih);for(let x=0;x<8;x++)x<v&&m[x][1]?(s[x][0]=m[x][0],s[x][1]=m[x][1]):(s[x][0]=Number.MAX_SAFE_INTEGER,s[x][1]=0);s.sort(nh);const p=l.morphAttributes.position,g=l.morphAttributes.normal;let _=0;for(let x=0;x<8;x++){const b=s[x],I=b[0],G=b[1];I!==Number.MAX_SAFE_INTEGER&&G?(p&&l.getAttribute("morphTarget"+x)!==p[I]&&l.setAttribute("morphTarget"+x,p[I]),g&&l.getAttribute("morphNormal"+x)!==g[I]&&l.setAttribute("morphNormal"+x,g[I]),a[x]=G,_+=G):(p&&l.hasAttribute("morphTarget"+x)===!0&&l.deleteAttribute("morphTarget"+x),g&&l.hasAttribute("morphNormal"+x)===!0&&l.deleteAttribute("morphNormal"+x),a[x]=0)}const y=l.morphTargetsRelative?1:1-_;o.getUniforms().setValue(d,"morphTargetBaseInfluence",y),o.getUniforms().setValue(d,"morphTargetInfluences",a)}}return{update:c}}function sh(d,t,e,n){let a=new WeakMap;function r(c){const h=n.render.frame,l=c.geometry,o=t.get(c,l);return a.get(o)!==h&&(t.update(o),a.set(o,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",s)===!1&&c.addEventListener("dispose",s),e.update(c.instanceMatrix,34962),c.instanceColor!==null&&e.update(c.instanceColor,34962)),o}function i(){a=new WeakMap}function s(c){const h=c.target;h.removeEventListener("dispose",s),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:i}}const Pa=new ze,Da=new ya,Ia=new ko,Ba=new Ca,Hs=[],qs=[],Xs=new Float32Array(16),Ys=new Float32Array(9),js=new Float32Array(4);function li(d,t,e){const n=d[0];if(n<=0||n>0)return d;const a=t*e;let r=Hs[a];if(r===void 0&&(r=new Float32Array(a),Hs[a]=r),t!==0){n.toArray(r,0);for(let i=1,s=0;i!==t;++i)s+=e,d[i].toArray(r,s)}return r}function ve(d,t){if(d.length!==t.length)return!1;for(let e=0,n=d.length;e<n;e++)if(d[e]!==t[e])return!1;return!0}function ge(d,t){for(let e=0,n=t.length;e<n;e++)d[e]=t[e]}function Qi(d,t){let e=qs[t];e===void 0&&(e=new Int32Array(t),qs[t]=e);for(let n=0;n!==t;++n)e[n]=d.allocateTextureUnit();return e}function ah(d,t){const e=this.cache;e[0]!==t&&(d.uniform1f(this.addr,t),e[0]=t)}function oh(d,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(d.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;d.uniform2fv(this.addr,t),ge(e,t)}}function lh(d,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(d.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(d.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;d.uniform3fv(this.addr,t),ge(e,t)}}function ch(d,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(d.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;d.uniform4fv(this.addr,t),ge(e,t)}}function uh(d,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;d.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(ve(e,n))return;js.set(n),d.uniformMatrix2fv(this.addr,!1,js),ge(e,n)}}function hh(d,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;d.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(ve(e,n))return;Ys.set(n),d.uniformMatrix3fv(this.addr,!1,Ys),ge(e,n)}}function dh(d,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;d.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(ve(e,n))return;Xs.set(n),d.uniformMatrix4fv(this.addr,!1,Xs),ge(e,n)}}function fh(d,t){const e=this.cache;e[0]!==t&&(d.uniform1i(this.addr,t),e[0]=t)}function ph(d,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(d.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;d.uniform2iv(this.addr,t),ge(e,t)}}function mh(d,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(d.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;d.uniform3iv(this.addr,t),ge(e,t)}}function vh(d,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(d.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;d.uniform4iv(this.addr,t),ge(e,t)}}function gh(d,t){const e=this.cache;e[0]!==t&&(d.uniform1ui(this.addr,t),e[0]=t)}function xh(d,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(d.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;d.uniform2uiv(this.addr,t),ge(e,t)}}function _h(d,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(d.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;d.uniform3uiv(this.addr,t),ge(e,t)}}function yh(d,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(d.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;d.uniform4uiv(this.addr,t),ge(e,t)}}function Mh(d,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(d.uniform1i(this.addr,a),n[0]=a),e.setTexture2D(t||Pa,a)}function wh(d,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(d.uniform1i(this.addr,a),n[0]=a),e.setTexture3D(t||Ia,a)}function bh(d,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(d.uniform1i(this.addr,a),n[0]=a),e.setTextureCube(t||Ba,a)}function Sh(d,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(d.uniform1i(this.addr,a),n[0]=a),e.setTexture2DArray(t||Da,a)}function Eh(d){switch(d){case 5126:return ah;case 35664:return oh;case 35665:return lh;case 35666:return ch;case 35674:return uh;case 35675:return hh;case 35676:return dh;case 5124:case 35670:return fh;case 35667:case 35671:return ph;case 35668:case 35672:return mh;case 35669:case 35673:return vh;case 5125:return gh;case 36294:return xh;case 36295:return _h;case 36296:return yh;case 35678:case 36198:case 36298:case 36306:case 35682:return Mh;case 35679:case 36299:case 36307:return wh;case 35680:case 36300:case 36308:case 36293:return bh;case 36289:case 36303:case 36311:case 36292:return Sh}}function Th(d,t){d.uniform1fv(this.addr,t)}function Ah(d,t){const e=li(t,this.size,2);d.uniform2fv(this.addr,e)}function Ch(d,t){const e=li(t,this.size,3);d.uniform3fv(this.addr,e)}function Rh(d,t){const e=li(t,this.size,4);d.uniform4fv(this.addr,e)}function Lh(d,t){const e=li(t,this.size,4);d.uniformMatrix2fv(this.addr,!1,e)}function Ph(d,t){const e=li(t,this.size,9);d.uniformMatrix3fv(this.addr,!1,e)}function Dh(d,t){const e=li(t,this.size,16);d.uniformMatrix4fv(this.addr,!1,e)}function Ih(d,t){d.uniform1iv(this.addr,t)}function Bh(d,t){d.uniform2iv(this.addr,t)}function Fh(d,t){d.uniform3iv(this.addr,t)}function zh(d,t){d.uniform4iv(this.addr,t)}function Nh(d,t){d.uniform1uiv(this.addr,t)}function Uh(d,t){d.uniform2uiv(this.addr,t)}function Oh(d,t){d.uniform3uiv(this.addr,t)}function Vh(d,t){d.uniform4uiv(this.addr,t)}function Wh(d,t,e){const n=this.cache,a=t.length,r=Qi(e,a);ve(n,r)||(d.uniform1iv(this.addr,r),ge(n,r));for(let i=0;i!==a;++i)e.setTexture2D(t[i]||Pa,r[i])}function Gh(d,t,e){const n=this.cache,a=t.length,r=Qi(e,a);ve(n,r)||(d.uniform1iv(this.addr,r),ge(n,r));for(let i=0;i!==a;++i)e.setTexture3D(t[i]||Ia,r[i])}function kh(d,t,e){const n=this.cache,a=t.length,r=Qi(e,a);ve(n,r)||(d.uniform1iv(this.addr,r),ge(n,r));for(let i=0;i!==a;++i)e.setTextureCube(t[i]||Ba,r[i])}function Hh(d,t,e){const n=this.cache,a=t.length,r=Qi(e,a);ve(n,r)||(d.uniform1iv(this.addr,r),ge(n,r));for(let i=0;i!==a;++i)e.setTexture2DArray(t[i]||Da,r[i])}function qh(d){switch(d){case 5126:return Th;case 35664:return Ah;case 35665:return Ch;case 35666:return Rh;case 35674:return Lh;case 35675:return Ph;case 35676:return Dh;case 5124:case 35670:return Ih;case 35667:case 35671:return Bh;case 35668:case 35672:return Fh;case 35669:case 35673:return zh;case 5125:return Nh;case 36294:return Uh;case 36295:return Oh;case 36296:return Vh;case 35678:case 36198:case 36298:case 36306:case 35682:return Wh;case 35679:case 36299:case 36307:return Gh;case 35680:case 36300:case 36308:case 36293:return kh;case 36289:case 36303:case 36311:case 36292:return Hh}}class Xh{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Eh(e.type)}}class Yh{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=qh(e.type)}}class jh{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const a=this.seq;for(let r=0,i=a.length;r!==i;++r){const s=a[r];s.setValue(t,e[s.id],n)}}}const Lr=/(\w+)(\])?(\[|\.)?/g;function Zs(d,t){d.seq.push(t),d.map[t.id]=t}function Zh(d,t,e){const n=d.name,a=n.length;for(Lr.lastIndex=0;;){const r=Lr.exec(n),i=Lr.lastIndex;let s=r[1];const c=r[2]==="]",h=r[3];if(c&&(s=s|0),h===void 0||h==="["&&i+2===a){Zs(e,h===void 0?new Xh(s,d,t):new Yh(s,d,t));break}else{let o=e.map[s];o===void 0&&(o=new jh(s),Zs(e,o)),e=o}}}class ji{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let a=0;a<n;++a){const r=t.getActiveUniform(e,a),i=t.getUniformLocation(e,r.name);Zh(r,i,this)}}setValue(t,e,n,a){const r=this.map[e];r!==void 0&&r.setValue(t,n,a)}setOptional(t,e,n){const a=e[n];a!==void 0&&this.setValue(t,n,a)}static upload(t,e,n,a){for(let r=0,i=e.length;r!==i;++r){const s=e[r],c=n[s.id];c.needsUpdate!==!1&&s.setValue(t,c.value,a)}}static seqWithValue(t,e){const n=[];for(let a=0,r=t.length;a!==r;++a){const i=t[a];i.id in e&&n.push(i)}return n}}function $s(d,t,e){const n=d.createShader(t);return d.shaderSource(n,e),d.compileShader(n),n}let $h=0;function Kh(d,t){const e=d.split(`
`),n=[],a=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let i=a;i<r;i++){const s=i+1;n.push(`${s===t?">":" "} ${s}: ${e[i]}`)}return n.join(`
`)}function Jh(d){switch(d){case Fn:return["Linear","( value )"];case ce:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",d),["Linear","( value )"]}}function Ks(d,t,e){const n=d.getShaderParameter(t,35713),a=d.getShaderInfoLog(t).trim();if(n&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const i=parseInt(r[1]);return e.toUpperCase()+`

`+a+`

`+Kh(d.getShaderSource(t),i)}else return a}function Qh(d,t){const e=Jh(t);return"vec4 "+d+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function td(d,t){let e;switch(t){case lo:e="Linear";break;case co:e="Reinhard";break;case uo:e="OptimizedCineon";break;case ho:e="ACESFilmic";break;case fo:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+d+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function ed(d){return[d.extensionDerivatives||d.envMapCubeUVHeight||d.bumpMap||d.tangentSpaceNormalMap||d.clearcoatNormalMap||d.flatShading||d.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(d.extensionFragDepth||d.logarithmicDepthBuffer)&&d.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",d.extensionDrawBuffers&&d.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(d.extensionShaderTextureLOD||d.envMap||d.transmission)&&d.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(gi).join(`
`)}function nd(d){const t=[];for(const e in d){const n=d[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function id(d,t){const e={},n=d.getProgramParameter(t,35721);for(let a=0;a<n;a++){const r=d.getActiveAttrib(t,a),i=r.name;let s=1;r.type===35674&&(s=2),r.type===35675&&(s=3),r.type===35676&&(s=4),e[i]={type:r.type,location:d.getAttribLocation(t,i),locationSize:s}}return e}function gi(d){return d!==""}function Js(d,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return d.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qs(d,t){return d.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const rd=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vr(d){return d.replace(rd,sd)}function sd(d,t){const e=Qt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Vr(e)}const ad=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ta(d){return d.replace(ad,od)}function od(d,t,e,n){let a="";for(let r=parseInt(t);r<parseInt(e);r++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function ea(d){let t="precision "+d.precision+` float;
precision `+d.precision+" int;";return d.precision==="highp"?t+=`
#define HIGH_PRECISION`:d.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:d.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ld(d){let t="SHADOWMAP_TYPE_BASIC";return d.shadowMapType===ca?t="SHADOWMAP_TYPE_PCF":d.shadowMapType===Va?t="SHADOWMAP_TYPE_PCF_SOFT":d.shadowMapType===vi&&(t="SHADOWMAP_TYPE_VSM"),t}function cd(d){let t="ENVMAP_TYPE_CUBE";if(d.envMap)switch(d.envMapMode){case ni:case ii:t="ENVMAP_TYPE_CUBE";break;case $i:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ud(d){let t="ENVMAP_MODE_REFLECTION";if(d.envMap)switch(d.envMapMode){case ii:t="ENVMAP_MODE_REFRACTION";break}return t}function hd(d){let t="ENVMAP_BLENDING_NONE";if(d.envMap)switch(d.combine){case da:t="ENVMAP_BLENDING_MULTIPLY";break;case ao:t="ENVMAP_BLENDING_MIX";break;case oo:t="ENVMAP_BLENDING_ADD";break}return t}function dd(d){const t=d.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function fd(d,t,e,n){const a=d.getContext(),r=e.defines;let i=e.vertexShader,s=e.fragmentShader;const c=ld(e),h=cd(e),l=ud(e),o=hd(e),u=dd(e),f=e.isWebGL2?"":ed(e),v=nd(r),m=a.createProgram();let p,g,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=[v].filter(gi).join(`
`),p.length>0&&(p+=`
`),g=[f,v].filter(gi).join(`
`),g.length>0&&(g+=`
`)):(p=[ea(e),"#define SHADER_NAME "+e.shaderName,v,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gi).join(`
`),g=[f,ea(e),"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",e.envMap?"#define "+o:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fn?"#define TONE_MAPPING":"",e.toneMapping!==fn?Qt.tonemapping_pars_fragment:"",e.toneMapping!==fn?td("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.encodings_pars_fragment,Qh("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gi).join(`
`)),i=Vr(i),i=Js(i,e),i=Qs(i,e),s=Vr(s),s=Js(s,e),s=Qs(s,e),i=ta(i),s=ta(s),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===bs?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=_+p+i,x=_+g+s,b=$s(a,35633,y),I=$s(a,35632,x);if(a.attachShader(m,b),a.attachShader(m,I),e.index0AttributeName!==void 0?a.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&a.bindAttribLocation(m,0,"position"),a.linkProgram(m),d.debug.checkShaderErrors){const T=a.getProgramInfoLog(m).trim(),C=a.getShaderInfoLog(b).trim(),F=a.getShaderInfoLog(I).trim();let V=!0,z=!0;if(a.getProgramParameter(m,35714)===!1){V=!1;const U=Ks(a,b,"vertex"),Y=Ks(a,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(m,35715)+`

Program Info Log: `+T+`
`+U+`
`+Y)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(C===""||F==="")&&(z=!1);z&&(this.diagnostics={runnable:V,programLog:T,vertexShader:{log:C,prefix:p},fragmentShader:{log:F,prefix:g}})}a.deleteShader(b),a.deleteShader(I);let G;this.getUniforms=function(){return G===void 0&&(G=new ji(a,m)),G};let M;return this.getAttributes=function(){return M===void 0&&(M=id(a,m)),M},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(m),this.program=void 0},this.name=e.shaderName,this.id=$h++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=I,this}let pd=0;class md{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,a=this._getShaderStage(e),r=this._getShaderStage(n),i=this._getShaderCacheForMaterial(t);return i.has(a)===!1&&(i.add(a),a.usedTimes++),i.has(r)===!1&&(i.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new vd(t),e.set(t,n)),n}}class vd{constructor(t){this.id=pd++,this.code=t,this.usedTimes=0}}function gd(d,t,e,n,a,r,i){const s=new Ma,c=new md,h=[],l=a.isWebGL2,o=a.logarithmicDepthBuffer,u=a.vertexTextures;let f=a.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M,T,C,F,V){const z=F.fog,U=V.geometry,Y=M.isMeshStandardMaterial?F.environment:null,tt=(M.isMeshStandardMaterial?e:t).get(M.envMap||Y),W=tt&&tt.mapping===$i?tt.image.height:null,B=v[M.type];M.precision!==null&&(f=a.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const $=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,X=$!==void 0?$.length:0;let N=0;U.morphAttributes.position!==void 0&&(N=1),U.morphAttributes.normal!==void 0&&(N=2),U.morphAttributes.color!==void 0&&(N=3);let D,R,L,w;if(B){const rt=rn[B];D=rt.vertexShader,R=rt.fragmentShader}else D=M.vertexShader,R=M.fragmentShader,c.update(M),L=c.getVertexShaderID(M),w=c.getFragmentShaderID(M);const k=d.getRenderTarget(),J=M.alphaTest>0,K=M.clearcoat>0,H=M.iridescence>0;return{isWebGL2:l,shaderID:B,shaderName:M.type,vertexShader:D,fragmentShader:R,defines:M.defines,customVertexShaderID:L,customFragmentShaderID:w,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,instancing:V.isInstancedMesh===!0,instancingColor:V.isInstancedMesh===!0&&V.instanceColor!==null,supportsVertexTextures:u,outputEncoding:k===null?d.outputEncoding:k.isXRRenderTarget===!0?k.texture.encoding:Fn,map:!!M.map,matcap:!!M.matcap,envMap:!!tt,envMapMode:tt&&tt.mapping,envMapCubeUVHeight:W,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===Do,tangentSpaceNormalMap:M.normalMapType===ma,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===ce,clearcoat:K,clearcoatMap:K&&!!M.clearcoatMap,clearcoatRoughnessMap:K&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:K&&!!M.clearcoatNormalMap,iridescence:H,iridescenceMap:H&&!!M.iridescenceMap,iridescenceThicknessMap:H&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===Qn,alphaMap:!!M.alphaMap,alphaTest:J,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!U.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(M.map||M.bumpMap||M.normalMap||M.specularMap||M.alphaMap||M.emissiveMap||M.roughnessMap||M.metalnessMap||M.clearcoatNormalMap||M.iridescenceMap||M.iridescenceThicknessMap||M.transmission>0||M.transmissionMap||M.thicknessMap||M.specularIntensityMap||M.specularColorMap||M.sheen>0||M.sheenColorMap||M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!z,useFog:M.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:o,skinning:V.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:N,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:i.numPlanes,numClipIntersection:i.numIntersection,dithering:M.dithering,shadowMapEnabled:d.shadowMap.enabled&&C.length>0,shadowMapType:d.shadowMap.type,toneMapping:M.toneMapped?d.toneMapping:fn,useLegacyLights:d.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===_n,flipSided:M.side===ke,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:l||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)T.push(C),T.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(g(T,M),_(T,M),T.push(d.outputEncoding)),T.push(M.customProgramCacheKey),T.join()}function g(M,T){M.push(T.precision),M.push(T.outputEncoding),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.combine),M.push(T.vertexUvs),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function _(M,T){s.disableAll(),T.isWebGL2&&s.enable(0),T.supportsVertexTextures&&s.enable(1),T.instancing&&s.enable(2),T.instancingColor&&s.enable(3),T.map&&s.enable(4),T.matcap&&s.enable(5),T.envMap&&s.enable(6),T.lightMap&&s.enable(7),T.aoMap&&s.enable(8),T.emissiveMap&&s.enable(9),T.bumpMap&&s.enable(10),T.normalMap&&s.enable(11),T.objectSpaceNormalMap&&s.enable(12),T.tangentSpaceNormalMap&&s.enable(13),T.clearcoat&&s.enable(14),T.clearcoatMap&&s.enable(15),T.clearcoatRoughnessMap&&s.enable(16),T.clearcoatNormalMap&&s.enable(17),T.iridescence&&s.enable(18),T.iridescenceMap&&s.enable(19),T.iridescenceThicknessMap&&s.enable(20),T.displacementMap&&s.enable(21),T.specularMap&&s.enable(22),T.roughnessMap&&s.enable(23),T.metalnessMap&&s.enable(24),T.gradientMap&&s.enable(25),T.alphaMap&&s.enable(26),T.alphaTest&&s.enable(27),T.vertexColors&&s.enable(28),T.vertexAlphas&&s.enable(29),T.vertexUvs&&s.enable(30),T.vertexTangents&&s.enable(31),T.uvsVertexOnly&&s.enable(32),M.push(s.mask),s.disableAll(),T.fog&&s.enable(0),T.useFog&&s.enable(1),T.flatShading&&s.enable(2),T.logarithmicDepthBuffer&&s.enable(3),T.skinning&&s.enable(4),T.morphTargets&&s.enable(5),T.morphNormals&&s.enable(6),T.morphColors&&s.enable(7),T.premultipliedAlpha&&s.enable(8),T.shadowMapEnabled&&s.enable(9),T.useLegacyLights&&s.enable(10),T.doubleSided&&s.enable(11),T.flipSided&&s.enable(12),T.useDepthPacking&&s.enable(13),T.dithering&&s.enable(14),T.specularIntensityMap&&s.enable(15),T.specularColorMap&&s.enable(16),T.transmission&&s.enable(17),T.transmissionMap&&s.enable(18),T.thicknessMap&&s.enable(19),T.sheen&&s.enable(20),T.sheenColorMap&&s.enable(21),T.sheenRoughnessMap&&s.enable(22),T.decodeVideoTexture&&s.enable(23),T.opaque&&s.enable(24),M.push(s.mask)}function y(M){const T=v[M.type];let C;if(T){const F=rn[T];C=nl.clone(F.uniforms)}else C=M.uniforms;return C}function x(M,T){let C;for(let F=0,V=h.length;F<V;F++){const z=h[F];if(z.cacheKey===T){C=z,++C.usedTimes;break}}return C===void 0&&(C=new fd(d,T,M,r),h.push(C)),C}function b(M){if(--M.usedTimes===0){const T=h.indexOf(M);h[T]=h[h.length-1],h.pop(),M.destroy()}}function I(M){c.remove(M)}function G(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:x,releaseProgram:b,releaseShaderCache:I,programs:h,dispose:G}}function xd(){let d=new WeakMap;function t(r){let i=d.get(r);return i===void 0&&(i={},d.set(r,i)),i}function e(r){d.delete(r)}function n(r,i,s){d.get(r)[i]=s}function a(){d=new WeakMap}return{get:t,remove:e,update:n,dispose:a}}function _d(d,t){return d.groupOrder!==t.groupOrder?d.groupOrder-t.groupOrder:d.renderOrder!==t.renderOrder?d.renderOrder-t.renderOrder:d.material.id!==t.material.id?d.material.id-t.material.id:d.z!==t.z?d.z-t.z:d.id-t.id}function na(d,t){return d.groupOrder!==t.groupOrder?d.groupOrder-t.groupOrder:d.renderOrder!==t.renderOrder?d.renderOrder-t.renderOrder:d.z!==t.z?t.z-d.z:d.id-t.id}function ia(){const d=[];let t=0;const e=[],n=[],a=[];function r(){t=0,e.length=0,n.length=0,a.length=0}function i(o,u,f,v,m,p){let g=d[t];return g===void 0?(g={id:o.id,object:o,geometry:u,material:f,groupOrder:v,renderOrder:o.renderOrder,z:m,group:p},d[t]=g):(g.id=o.id,g.object=o,g.geometry=u,g.material=f,g.groupOrder=v,g.renderOrder=o.renderOrder,g.z=m,g.group=p),t++,g}function s(o,u,f,v,m,p){const g=i(o,u,f,v,m,p);f.transmission>0?n.push(g):f.transparent===!0?a.push(g):e.push(g)}function c(o,u,f,v,m,p){const g=i(o,u,f,v,m,p);f.transmission>0?n.unshift(g):f.transparent===!0?a.unshift(g):e.unshift(g)}function h(o,u){e.length>1&&e.sort(o||_d),n.length>1&&n.sort(u||na),a.length>1&&a.sort(u||na)}function l(){for(let o=t,u=d.length;o<u;o++){const f=d[o];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:a,init:r,push:s,unshift:c,finish:l,sort:h}}function yd(){let d=new WeakMap;function t(n,a){const r=d.get(n);let i;return r===void 0?(i=new ia,d.set(n,[i])):a>=r.length?(i=new ia,r.push(i)):i=r[a],i}function e(){d=new WeakMap}return{get:t,dispose:e}}function Md(){const d={};return{get:function(t){if(d[t.id]!==void 0)return d[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new it,color:new ae};break;case"SpotLight":e={position:new it,direction:new it,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new it,color:new ae,distance:0,decay:0};break;case"HemisphereLight":e={direction:new it,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":e={color:new ae,position:new it,halfWidth:new it,halfHeight:new it};break}return d[t.id]=e,e}}}function wd(){const d={};return{get:function(t){if(d[t.id]!==void 0)return d[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return d[t.id]=e,e}}}let bd=0;function Sd(d,t){return(t.castShadow?2:0)-(d.castShadow?2:0)+(t.map?1:0)-(d.map?1:0)}function Ed(d,t){const e=new Md,n=wd(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let l=0;l<9;l++)a.probe.push(new it);const r=new it,i=new Ae,s=new Ae;function c(l,o){let u=0,f=0,v=0;for(let F=0;F<9;F++)a.probe[F].set(0,0,0);let m=0,p=0,g=0,_=0,y=0,x=0,b=0,I=0,G=0,M=0;l.sort(Sd);const T=o===!0?Math.PI:1;for(let F=0,V=l.length;F<V;F++){const z=l[F],U=z.color,Y=z.intensity,tt=z.distance,W=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)u+=U.r*Y*T,f+=U.g*Y*T,v+=U.b*Y*T;else if(z.isLightProbe)for(let B=0;B<9;B++)a.probe[B].addScaledVector(z.sh.coefficients[B],Y);else if(z.isDirectionalLight){const B=e.get(z);if(B.color.copy(z.color).multiplyScalar(z.intensity*T),z.castShadow){const $=z.shadow,X=n.get(z);X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,a.directionalShadow[m]=X,a.directionalShadowMap[m]=W,a.directionalShadowMatrix[m]=z.shadow.matrix,x++}a.directional[m]=B,m++}else if(z.isSpotLight){const B=e.get(z);B.position.setFromMatrixPosition(z.matrixWorld),B.color.copy(U).multiplyScalar(Y*T),B.distance=tt,B.coneCos=Math.cos(z.angle),B.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),B.decay=z.decay,a.spot[g]=B;const $=z.shadow;if(z.map&&(a.spotLightMap[G]=z.map,G++,$.updateMatrices(z),z.castShadow&&M++),a.spotLightMatrix[g]=$.matrix,z.castShadow){const X=n.get(z);X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,a.spotShadow[g]=X,a.spotShadowMap[g]=W,I++}g++}else if(z.isRectAreaLight){const B=e.get(z);B.color.copy(U).multiplyScalar(Y),B.halfWidth.set(z.width*.5,0,0),B.halfHeight.set(0,z.height*.5,0),a.rectArea[_]=B,_++}else if(z.isPointLight){const B=e.get(z);if(B.color.copy(z.color).multiplyScalar(z.intensity*T),B.distance=z.distance,B.decay=z.decay,z.castShadow){const $=z.shadow,X=n.get(z);X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,X.shadowCameraNear=$.camera.near,X.shadowCameraFar=$.camera.far,a.pointShadow[p]=X,a.pointShadowMap[p]=W,a.pointShadowMatrix[p]=z.shadow.matrix,b++}a.point[p]=B,p++}else if(z.isHemisphereLight){const B=e.get(z);B.skyColor.copy(z.color).multiplyScalar(Y*T),B.groundColor.copy(z.groundColor).multiplyScalar(Y*T),a.hemi[y]=B,y++}}_>0&&(t.isWebGL2||d.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Lt.LTC_FLOAT_1,a.rectAreaLTC2=Lt.LTC_FLOAT_2):d.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=Lt.LTC_HALF_1,a.rectAreaLTC2=Lt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=u,a.ambient[1]=f,a.ambient[2]=v;const C=a.hash;(C.directionalLength!==m||C.pointLength!==p||C.spotLength!==g||C.rectAreaLength!==_||C.hemiLength!==y||C.numDirectionalShadows!==x||C.numPointShadows!==b||C.numSpotShadows!==I||C.numSpotMaps!==G)&&(a.directional.length=m,a.spot.length=g,a.rectArea.length=_,a.point.length=p,a.hemi.length=y,a.directionalShadow.length=x,a.directionalShadowMap.length=x,a.pointShadow.length=b,a.pointShadowMap.length=b,a.spotShadow.length=I,a.spotShadowMap.length=I,a.directionalShadowMatrix.length=x,a.pointShadowMatrix.length=b,a.spotLightMatrix.length=I+G-M,a.spotLightMap.length=G,a.numSpotLightShadowsWithMaps=M,C.directionalLength=m,C.pointLength=p,C.spotLength=g,C.rectAreaLength=_,C.hemiLength=y,C.numDirectionalShadows=x,C.numPointShadows=b,C.numSpotShadows=I,C.numSpotMaps=G,a.version=bd++)}function h(l,o){let u=0,f=0,v=0,m=0,p=0;const g=o.matrixWorldInverse;for(let _=0,y=l.length;_<y;_++){const x=l[_];if(x.isDirectionalLight){const b=a.directional[u];b.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(g),u++}else if(x.isSpotLight){const b=a.spot[v];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(g),v++}else if(x.isRectAreaLight){const b=a.rectArea[m];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(g),s.identity(),i.copy(x.matrixWorld),i.premultiply(g),s.extractRotation(i),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(s),b.halfHeight.applyMatrix4(s),m++}else if(x.isPointLight){const b=a.point[f];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){const b=a.hemi[p];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(g),p++}}}return{setup:c,setupView:h,state:a}}function ra(d,t){const e=new Ed(d,t),n=[],a=[];function r(){n.length=0,a.length=0}function i(o){n.push(o)}function s(o){a.push(o)}function c(o){e.setup(n,o)}function h(o){e.setupView(n,o)}return{init:r,state:{lightsArray:n,shadowsArray:a,lights:e},setupLights:c,setupLightsView:h,pushLight:i,pushShadow:s}}function Td(d,t){let e=new WeakMap;function n(r,i=0){const s=e.get(r);let c;return s===void 0?(c=new ra(d,t),e.set(r,[c])):i>=s.length?(c=new ra(d,t),s.push(c)):c=s[i],c}function a(){e=new WeakMap}return{get:n,dispose:a}}class Ad extends Ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lo,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Cd extends Ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new it,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Rd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ld=`uniform sampler2D shadow_pass;
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
}`;function Pd(d,t,e){let n=new Ra;const a=new le,r=new le,i=new Te,s=new Ad({depthPacking:Po}),c=new Cd,h={},l=e.maxTextureSize,o={[wn]:ke,[ke]:wn,[_n]:_n},u=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:Rd,fragmentShader:Ld}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const v=new pn;v.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Qe(v,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ca,this.render=function(x,b,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||x.length===0)return;const G=d.getRenderTarget(),M=d.getActiveCubeFace(),T=d.getActiveMipmapLevel(),C=d.state;C.setBlending(Mn),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);for(let F=0,V=x.length;F<V;F++){const z=x[F],U=z.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;a.copy(U.mapSize);const Y=U.getFrameExtents();if(a.multiply(Y),r.copy(U.mapSize),(a.x>l||a.y>l)&&(a.x>l&&(r.x=Math.floor(l/Y.x),a.x=r.x*Y.x,U.mapSize.x=r.x),a.y>l&&(r.y=Math.floor(l/Y.y),a.y=r.y*Y.y,U.mapSize.y=r.y)),U.map===null){const W=this.type!==vi?{minFilter:Ie,magFilter:Ie}:{};U.map=new zn(a.x,a.y,W),U.map.texture.name=z.name+".shadowMap",U.camera.updateProjectionMatrix()}d.setRenderTarget(U.map),d.clear();const tt=U.getViewportCount();for(let W=0;W<tt;W++){const B=U.getViewport(W);i.set(r.x*B.x,r.y*B.y,r.x*B.z,r.y*B.w),C.viewport(i),U.updateMatrices(z,W),n=U.getFrustum(),y(b,I,U.camera,z,this.type)}U.isPointLightShadow!==!0&&this.type===vi&&g(U,I),U.needsUpdate=!1}p.needsUpdate=!1,d.setRenderTarget(G,M,T)};function g(x,b){const I=t.update(m);u.defines.VSM_SAMPLES!==x.blurSamples&&(u.defines.VSM_SAMPLES=x.blurSamples,f.defines.VSM_SAMPLES=x.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new zn(a.x,a.y)),u.uniforms.shadow_pass.value=x.map.texture,u.uniforms.resolution.value=x.mapSize,u.uniforms.radius.value=x.radius,d.setRenderTarget(x.mapPass),d.clear(),d.renderBufferDirect(b,null,I,u,m,null),f.uniforms.shadow_pass.value=x.mapPass.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,d.setRenderTarget(x.map),d.clear(),d.renderBufferDirect(b,null,I,f,m,null)}function _(x,b,I,G,M,T){let C=null;const F=I.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(F!==void 0)C=F;else if(C=I.isPointLight===!0?c:s,d.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const V=C.uuid,z=b.uuid;let U=h[V];U===void 0&&(U={},h[V]=U);let Y=U[z];Y===void 0&&(Y=C.clone(),U[z]=Y),C=Y}return C.visible=b.visible,C.wireframe=b.wireframe,T===vi?C.side=b.shadowSide!==null?b.shadowSide:b.side:C.side=b.shadowSide!==null?b.shadowSide:o[b.side],C.alphaMap=b.alphaMap,C.alphaTest=b.alphaTest,C.map=b.map,C.clipShadows=b.clipShadows,C.clippingPlanes=b.clippingPlanes,C.clipIntersection=b.clipIntersection,C.displacementMap=b.displacementMap,C.displacementScale=b.displacementScale,C.displacementBias=b.displacementBias,C.wireframeLinewidth=b.wireframeLinewidth,C.linewidth=b.linewidth,I.isPointLight===!0&&C.isMeshDistanceMaterial===!0&&(C.referencePosition.setFromMatrixPosition(I.matrixWorld),C.nearDistance=G,C.farDistance=M),C}function y(x,b,I,G,M){if(x.visible===!1)return;if(x.layers.test(b.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&M===vi)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,x.matrixWorld);const F=t.update(x),V=x.material;if(Array.isArray(V)){const z=F.groups;for(let U=0,Y=z.length;U<Y;U++){const tt=z[U],W=V[tt.materialIndex];if(W&&W.visible){const B=_(x,W,G,I.near,I.far,M);d.renderBufferDirect(I,null,F,B,x,tt)}}}else if(V.visible){const z=_(x,V,G,I.near,I.far,M);d.renderBufferDirect(I,null,F,z,x,null)}}const C=x.children;for(let F=0,V=C.length;F<V;F++)y(C[F],b,I,G,M)}}function Dd(d,t,e){const n=e.isWebGL2;function a(){let Z=!1;const st=new Te;let _t=null;const Tt=new Te(0,0,0,0);return{setMask:function(Ft){_t!==Ft&&!Z&&(d.colorMask(Ft,Ft,Ft,Ft),_t=Ft)},setLocked:function(Ft){Z=Ft},setClear:function(Ft,ee,oe,de,be){be===!0&&(Ft*=de,ee*=de,oe*=de),st.set(Ft,ee,oe,de),Tt.equals(st)===!1&&(d.clearColor(Ft,ee,oe,de),Tt.copy(st))},reset:function(){Z=!1,_t=null,Tt.set(-1,0,0,0)}}}function r(){let Z=!1,st=null,_t=null,Tt=null;return{setTest:function(Ft){Ft?J(2929):K(2929)},setMask:function(Ft){st!==Ft&&!Z&&(d.depthMask(Ft),st=Ft)},setFunc:function(Ft){if(_t!==Ft){switch(Ft){case Qa:d.depthFunc(512);break;case to:d.depthFunc(519);break;case eo:d.depthFunc(513);break;case Fr:d.depthFunc(515);break;case no:d.depthFunc(514);break;case io:d.depthFunc(518);break;case ro:d.depthFunc(516);break;case so:d.depthFunc(517);break;default:d.depthFunc(515)}_t=Ft}},setLocked:function(Ft){Z=Ft},setClear:function(Ft){Tt!==Ft&&(d.clearDepth(Ft),Tt=Ft)},reset:function(){Z=!1,st=null,_t=null,Tt=null}}}function i(){let Z=!1,st=null,_t=null,Tt=null,Ft=null,ee=null,oe=null,de=null,be=null;return{setTest:function(Jt){Z||(Jt?J(2960):K(2960))},setMask:function(Jt){st!==Jt&&!Z&&(d.stencilMask(Jt),st=Jt)},setFunc:function(Jt,nt,at){(_t!==Jt||Tt!==nt||Ft!==at)&&(d.stencilFunc(Jt,nt,at),_t=Jt,Tt=nt,Ft=at)},setOp:function(Jt,nt,at){(ee!==Jt||oe!==nt||de!==at)&&(d.stencilOp(Jt,nt,at),ee=Jt,oe=nt,de=at)},setLocked:function(Jt){Z=Jt},setClear:function(Jt){be!==Jt&&(d.clearStencil(Jt),be=Jt)},reset:function(){Z=!1,st=null,_t=null,Tt=null,Ft=null,ee=null,oe=null,de=null,be=null}}}const s=new a,c=new r,h=new i,l=new WeakMap,o=new WeakMap;let u={},f={},v=new WeakMap,m=[],p=null,g=!1,_=null,y=null,x=null,b=null,I=null,G=null,M=null,T=!1,C=null,F=null,V=null,z=null,U=null;const Y=d.getParameter(35661);let tt=!1,W=0;const B=d.getParameter(7938);B.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(B)[1]),tt=W>=1):B.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),tt=W>=2);let $=null,X={};const N=d.getParameter(3088),D=d.getParameter(2978),R=new Te().fromArray(N),L=new Te().fromArray(D);function w(Z,st,_t){const Tt=new Uint8Array(4),Ft=d.createTexture();d.bindTexture(Z,Ft),d.texParameteri(Z,10241,9728),d.texParameteri(Z,10240,9728);for(let ee=0;ee<_t;ee++)d.texImage2D(st+ee,0,6408,1,1,0,6408,5121,Tt);return Ft}const k={};k[3553]=w(3553,3553,1),k[34067]=w(34067,34069,6),s.setClear(0,0,0,1),c.setClear(1),h.setClear(0),J(2929),c.setFunc(Fr),vt(!1),Ht(Xr),J(2884),Et(Mn);function J(Z){u[Z]!==!0&&(d.enable(Z),u[Z]=!0)}function K(Z){u[Z]!==!1&&(d.disable(Z),u[Z]=!1)}function H(Z,st){return f[Z]!==st?(d.bindFramebuffer(Z,st),f[Z]=st,n&&(Z===36009&&(f[36160]=st),Z===36160&&(f[36009]=st)),!0):!1}function Q(Z,st){let _t=m,Tt=!1;if(Z)if(_t=v.get(st),_t===void 0&&(_t=[],v.set(st,_t)),Z.isWebGLMultipleRenderTargets){const Ft=Z.texture;if(_t.length!==Ft.length||_t[0]!==36064){for(let ee=0,oe=Ft.length;ee<oe;ee++)_t[ee]=36064+ee;_t.length=Ft.length,Tt=!0}}else _t[0]!==36064&&(_t[0]=36064,Tt=!0);else _t[0]!==1029&&(_t[0]=1029,Tt=!0);Tt&&(e.isWebGL2?d.drawBuffers(_t):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(_t))}function rt(Z){return p!==Z?(d.useProgram(Z),p=Z,!0):!1}const bt={[Kn]:32774,[Ga]:32778,[ka]:32779};if(n)bt[$r]=32775,bt[Kr]=32776;else{const Z=t.get("EXT_blend_minmax");Z!==null&&(bt[$r]=Z.MIN_EXT,bt[Kr]=Z.MAX_EXT)}const Mt={[Ha]:0,[qa]:1,[Xa]:768,[ua]:770,[Ja]:776,[$a]:774,[ja]:772,[Ya]:769,[ha]:771,[Ka]:775,[Za]:773};function Et(Z,st,_t,Tt,Ft,ee,oe,de){if(Z===Mn){g===!0&&(K(3042),g=!1);return}if(g===!1&&(J(3042),g=!0),Z!==Wa){if(Z!==_||de!==T){if((y!==Kn||I!==Kn)&&(d.blendEquation(32774),y=Kn,I=Kn),de)switch(Z){case Qn:d.blendFuncSeparate(1,771,1,771);break;case Yr:d.blendFunc(1,1);break;case jr:d.blendFuncSeparate(0,769,0,1);break;case Zr:d.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}else switch(Z){case Qn:d.blendFuncSeparate(770,771,1,771);break;case Yr:d.blendFunc(770,1);break;case jr:d.blendFuncSeparate(0,769,0,1);break;case Zr:d.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}x=null,b=null,G=null,M=null,_=Z,T=de}return}Ft=Ft||st,ee=ee||_t,oe=oe||Tt,(st!==y||Ft!==I)&&(d.blendEquationSeparate(bt[st],bt[Ft]),y=st,I=Ft),(_t!==x||Tt!==b||ee!==G||oe!==M)&&(d.blendFuncSeparate(Mt[_t],Mt[Tt],Mt[ee],Mt[oe]),x=_t,b=Tt,G=ee,M=oe),_=Z,T=!1}function ct(Z,st){Z.side===_n?K(2884):J(2884);let _t=Z.side===ke;st&&(_t=!_t),vt(_t),Z.blending===Qn&&Z.transparent===!1?Et(Mn):Et(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.premultipliedAlpha),c.setFunc(Z.depthFunc),c.setTest(Z.depthTest),c.setMask(Z.depthWrite),s.setMask(Z.colorWrite);const Tt=Z.stencilWrite;h.setTest(Tt),Tt&&(h.setMask(Z.stencilWriteMask),h.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),h.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),qt(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?J(32926):K(32926)}function vt(Z){C!==Z&&(Z?d.frontFace(2304):d.frontFace(2305),C=Z)}function Ht(Z){Z!==Ua?(J(2884),Z!==F&&(Z===Xr?d.cullFace(1029):Z===Oa?d.cullFace(1028):d.cullFace(1032))):K(2884),F=Z}function Pt(Z){Z!==V&&(tt&&d.lineWidth(Z),V=Z)}function qt(Z,st,_t){Z?(J(32823),(z!==st||U!==_t)&&(d.polygonOffset(st,_t),z=st,U=_t)):K(32823)}function Rt(Z){Z?J(3089):K(3089)}function Zt(Z){Z===void 0&&(Z=33984+Y-1),$!==Z&&(d.activeTexture(Z),$=Z)}function P(Z,st,_t){_t===void 0&&($===null?_t=33984+Y-1:_t=$);let Tt=X[_t];Tt===void 0&&(Tt={type:void 0,texture:void 0},X[_t]=Tt),(Tt.type!==Z||Tt.texture!==st)&&($!==_t&&(d.activeTexture(_t),$=_t),d.bindTexture(Z,st||k[Z]),Tt.type=Z,Tt.texture=st)}function E(){const Z=X[$];Z!==void 0&&Z.type!==void 0&&(d.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function et(){try{d.compressedTexImage2D.apply(d,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function ft(){try{d.compressedTexImage3D.apply(d,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function gt(){try{d.texSubImage2D.apply(d,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function wt(){try{d.texSubImage3D.apply(d,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Dt(){try{d.compressedTexSubImage2D.apply(d,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function At(){try{d.compressedTexSubImage3D.apply(d,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function ht(){try{d.texStorage2D.apply(d,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Wt(){try{d.texStorage3D.apply(d,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Bt(){try{d.texImage2D.apply(d,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ot(){try{d.texImage3D.apply(d,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Nt(Z){R.equals(Z)===!1&&(d.scissor(Z.x,Z.y,Z.z,Z.w),R.copy(Z))}function Ut(Z){L.equals(Z)===!1&&(d.viewport(Z.x,Z.y,Z.z,Z.w),L.copy(Z))}function Kt(Z,st){let _t=o.get(st);_t===void 0&&(_t=new WeakMap,o.set(st,_t));let Tt=_t.get(Z);Tt===void 0&&(Tt=d.getUniformBlockIndex(st,Z.name),_t.set(Z,Tt))}function te(Z,st){const Tt=o.get(st).get(Z);l.get(st)!==Tt&&(d.uniformBlockBinding(st,Tt,Z.__bindingPointIndex),l.set(st,Tt))}function ie(){d.disable(3042),d.disable(2884),d.disable(2929),d.disable(32823),d.disable(3089),d.disable(2960),d.disable(32926),d.blendEquation(32774),d.blendFunc(1,0),d.blendFuncSeparate(1,0,1,0),d.colorMask(!0,!0,!0,!0),d.clearColor(0,0,0,0),d.depthMask(!0),d.depthFunc(513),d.clearDepth(1),d.stencilMask(4294967295),d.stencilFunc(519,0,4294967295),d.stencilOp(7680,7680,7680),d.clearStencil(0),d.cullFace(1029),d.frontFace(2305),d.polygonOffset(0,0),d.activeTexture(33984),d.bindFramebuffer(36160,null),n===!0&&(d.bindFramebuffer(36009,null),d.bindFramebuffer(36008,null)),d.useProgram(null),d.lineWidth(1),d.scissor(0,0,d.canvas.width,d.canvas.height),d.viewport(0,0,d.canvas.width,d.canvas.height),u={},$=null,X={},f={},v=new WeakMap,m=[],p=null,g=!1,_=null,y=null,x=null,b=null,I=null,G=null,M=null,T=!1,C=null,F=null,V=null,z=null,U=null,R.set(0,0,d.canvas.width,d.canvas.height),L.set(0,0,d.canvas.width,d.canvas.height),s.reset(),c.reset(),h.reset()}return{buffers:{color:s,depth:c,stencil:h},enable:J,disable:K,bindFramebuffer:H,drawBuffers:Q,useProgram:rt,setBlending:Et,setMaterial:ct,setFlipSided:vt,setCullFace:Ht,setLineWidth:Pt,setPolygonOffset:qt,setScissorTest:Rt,activeTexture:Zt,bindTexture:P,unbindTexture:E,compressedTexImage2D:et,compressedTexImage3D:ft,texImage2D:Bt,texImage3D:Ot,updateUBOMapping:Kt,uniformBlockBinding:te,texStorage2D:ht,texStorage3D:Wt,texSubImage2D:gt,texSubImage3D:wt,compressedTexSubImage2D:Dt,compressedTexSubImage3D:At,scissor:Nt,viewport:Ut,reset:ie}}function Id(d,t,e,n,a,r,i){const s=a.isWebGL2,c=a.maxTextures,h=a.maxCubemapSize,l=a.maxTextureSize,o=a.maxSamples,u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let m;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,E){return g?new OffscreenCanvas(P,E):Mi("canvas")}function y(P,E,et,ft){let gt=1;if((P.width>ft||P.height>ft)&&(gt=ft/Math.max(P.width,P.height)),gt<1||E===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const wt=E?Fo:Math.floor,Dt=wt(gt*P.width),At=wt(gt*P.height);m===void 0&&(m=_(Dt,At));const ht=et?_(Dt,At):m;return ht.width=Dt,ht.height=At,ht.getContext("2d").drawImage(P,0,0,Dt,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Dt+"x"+At+")."),ht}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function x(P){return Es(P.width)&&Es(P.height)}function b(P){return s?!1:P.wrapS!==Ke||P.wrapT!==Ke||P.minFilter!==Ie&&P.minFilter!==Xe}function I(P,E){return P.generateMipmaps&&E&&P.minFilter!==Ie&&P.minFilter!==Xe}function G(P){d.generateMipmap(P)}function M(P,E,et,ft,gt=!1){if(s===!1)return E;if(P!==null){if(d[P]!==void 0)return d[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let wt=E;return E===6403&&(et===5126&&(wt=33326),et===5131&&(wt=33325),et===5121&&(wt=33321)),E===33319&&(et===5126&&(wt=33328),et===5131&&(wt=33327),et===5121&&(wt=33323)),E===6408&&(et===5126&&(wt=34836),et===5131&&(wt=34842),et===5121&&(wt=ft===ce&&gt===!1?35907:32856),et===32819&&(wt=32854),et===32820&&(wt=32855)),(wt===33325||wt===33326||wt===33327||wt===33328||wt===34842||wt===34836)&&t.get("EXT_color_buffer_float"),wt}function T(P,E,et){return I(P,et)===!0||P.isFramebufferTexture&&P.minFilter!==Ie&&P.minFilter!==Xe?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function C(P){return P===Ie||P===Jr||P===tr?9728:9729}function F(P){const E=P.target;E.removeEventListener("dispose",F),z(E),E.isVideoTexture&&v.delete(E)}function V(P){const E=P.target;E.removeEventListener("dispose",V),Y(E)}function z(P){const E=n.get(P);if(E.__webglInit===void 0)return;const et=P.source,ft=p.get(et);if(ft){const gt=ft[E.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&U(P),Object.keys(ft).length===0&&p.delete(et)}n.remove(P)}function U(P){const E=n.get(P);d.deleteTexture(E.__webglTexture);const et=P.source,ft=p.get(et);delete ft[E.__cacheKey],i.memory.textures--}function Y(P){const E=P.texture,et=n.get(P),ft=n.get(E);if(ft.__webglTexture!==void 0&&(d.deleteTexture(ft.__webglTexture),i.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++)d.deleteFramebuffer(et.__webglFramebuffer[gt]),et.__webglDepthbuffer&&d.deleteRenderbuffer(et.__webglDepthbuffer[gt]);else{if(d.deleteFramebuffer(et.__webglFramebuffer),et.__webglDepthbuffer&&d.deleteRenderbuffer(et.__webglDepthbuffer),et.__webglMultisampledFramebuffer&&d.deleteFramebuffer(et.__webglMultisampledFramebuffer),et.__webglColorRenderbuffer)for(let gt=0;gt<et.__webglColorRenderbuffer.length;gt++)et.__webglColorRenderbuffer[gt]&&d.deleteRenderbuffer(et.__webglColorRenderbuffer[gt]);et.__webglDepthRenderbuffer&&d.deleteRenderbuffer(et.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let gt=0,wt=E.length;gt<wt;gt++){const Dt=n.get(E[gt]);Dt.__webglTexture&&(d.deleteTexture(Dt.__webglTexture),i.memory.textures--),n.remove(E[gt])}n.remove(E),n.remove(P)}let tt=0;function W(){tt=0}function B(){const P=tt;return P>=c&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+c),tt+=1,P}function $(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.encoding),E.join()}function X(P,E){const et=n.get(P);if(P.isVideoTexture&&Rt(P),P.isRenderTargetTexture===!1&&P.version>0&&et.__version!==P.version){const ft=P.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(et,P,E);return}}e.bindTexture(3553,et.__webglTexture,33984+E)}function N(P,E){const et=n.get(P);if(P.version>0&&et.__version!==P.version){K(et,P,E);return}e.bindTexture(35866,et.__webglTexture,33984+E)}function D(P,E){const et=n.get(P);if(P.version>0&&et.__version!==P.version){K(et,P,E);return}e.bindTexture(32879,et.__webglTexture,33984+E)}function R(P,E){const et=n.get(P);if(P.version>0&&et.__version!==P.version){H(et,P,E);return}e.bindTexture(34067,et.__webglTexture,33984+E)}const L={[Zi]:10497,[Ke]:33071,[Ur]:33648},w={[Ie]:9728,[Jr]:9984,[tr]:9986,[Xe]:9729,[po]:9985,[xi]:9987};function k(P,E,et){if(et?(d.texParameteri(P,10242,L[E.wrapS]),d.texParameteri(P,10243,L[E.wrapT]),(P===32879||P===35866)&&d.texParameteri(P,32882,L[E.wrapR]),d.texParameteri(P,10240,w[E.magFilter]),d.texParameteri(P,10241,w[E.minFilter])):(d.texParameteri(P,10242,33071),d.texParameteri(P,10243,33071),(P===32879||P===35866)&&d.texParameteri(P,32882,33071),(E.wrapS!==Ke||E.wrapT!==Ke)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),d.texParameteri(P,10240,C(E.magFilter)),d.texParameteri(P,10241,C(E.minFilter)),E.minFilter!==Ie&&E.minFilter!==Xe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const ft=t.get("EXT_texture_filter_anisotropic");if(E.magFilter===Ie||E.minFilter!==tr&&E.minFilter!==xi||E.type===Dn&&t.has("OES_texture_float_linear")===!1||s===!1&&E.type===_i&&t.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(d.texParameterf(P,ft.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function J(P,E){let et=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",F));const ft=E.source;let gt=p.get(ft);gt===void 0&&(gt={},p.set(ft,gt));const wt=$(E);if(wt!==P.__cacheKey){gt[wt]===void 0&&(gt[wt]={texture:d.createTexture(),usedTimes:0},i.memory.textures++,et=!0),gt[wt].usedTimes++;const Dt=gt[P.__cacheKey];Dt!==void 0&&(gt[P.__cacheKey].usedTimes--,Dt.usedTimes===0&&U(E)),P.__cacheKey=wt,P.__webglTexture=gt[wt].texture}return et}function K(P,E,et){let ft=3553;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ft=35866),E.isData3DTexture&&(ft=32879);const gt=J(P,E),wt=E.source;e.bindTexture(ft,P.__webglTexture,33984+et);const Dt=n.get(wt);if(wt.version!==Dt.__version||gt===!0){e.activeTexture(33984+et),d.pixelStorei(37440,E.flipY),d.pixelStorei(37441,E.premultiplyAlpha),d.pixelStorei(3317,E.unpackAlignment),d.pixelStorei(37443,0);const At=b(E)&&x(E.image)===!1;let ht=y(E.image,At,!1,l);ht=Zt(E,ht);const Wt=x(ht)||s,Bt=r.convert(E.format,E.encoding);let Ot=r.convert(E.type),Nt=M(E.internalFormat,Bt,Ot,E.encoding,E.isVideoTexture);k(ft,E,Wt);let Ut;const Kt=E.mipmaps,te=s&&E.isVideoTexture!==!0,ie=Dt.__version===void 0||gt===!0,Z=T(E,ht,Wt);if(E.isDepthTexture)Nt=6402,s?E.type===Dn?Nt=36012:E.type===Pn?Nt=33190:E.type===ti?Nt=35056:Nt=33189:E.type===Dn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===In&&Nt===6402&&E.type!==pa&&E.type!==Pn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Pn,Ot=r.convert(E.type)),E.format===ri&&Nt===6402&&(Nt=34041,E.type!==ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=ti,Ot=r.convert(E.type))),ie&&(te?e.texStorage2D(3553,1,Nt,ht.width,ht.height):e.texImage2D(3553,0,Nt,ht.width,ht.height,0,Bt,Ot,null));else if(E.isDataTexture)if(Kt.length>0&&Wt){te&&ie&&e.texStorage2D(3553,Z,Nt,Kt[0].width,Kt[0].height);for(let st=0,_t=Kt.length;st<_t;st++)Ut=Kt[st],te?e.texSubImage2D(3553,st,0,0,Ut.width,Ut.height,Bt,Ot,Ut.data):e.texImage2D(3553,st,Nt,Ut.width,Ut.height,0,Bt,Ot,Ut.data);E.generateMipmaps=!1}else te?(ie&&e.texStorage2D(3553,Z,Nt,ht.width,ht.height),e.texSubImage2D(3553,0,0,0,ht.width,ht.height,Bt,Ot,ht.data)):e.texImage2D(3553,0,Nt,ht.width,ht.height,0,Bt,Ot,ht.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){te&&ie&&e.texStorage3D(35866,Z,Nt,Kt[0].width,Kt[0].height,ht.depth);for(let st=0,_t=Kt.length;st<_t;st++)Ut=Kt[st],E.format!==Je?Bt!==null?te?e.compressedTexSubImage3D(35866,st,0,0,0,Ut.width,Ut.height,ht.depth,Bt,Ut.data,0,0):e.compressedTexImage3D(35866,st,Nt,Ut.width,Ut.height,ht.depth,0,Ut.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?e.texSubImage3D(35866,st,0,0,0,Ut.width,Ut.height,ht.depth,Bt,Ot,Ut.data):e.texImage3D(35866,st,Nt,Ut.width,Ut.height,ht.depth,0,Bt,Ot,Ut.data)}else{te&&ie&&e.texStorage2D(3553,Z,Nt,Kt[0].width,Kt[0].height);for(let st=0,_t=Kt.length;st<_t;st++)Ut=Kt[st],E.format!==Je?Bt!==null?te?e.compressedTexSubImage2D(3553,st,0,0,Ut.width,Ut.height,Bt,Ut.data):e.compressedTexImage2D(3553,st,Nt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?e.texSubImage2D(3553,st,0,0,Ut.width,Ut.height,Bt,Ot,Ut.data):e.texImage2D(3553,st,Nt,Ut.width,Ut.height,0,Bt,Ot,Ut.data)}else if(E.isDataArrayTexture)te?(ie&&e.texStorage3D(35866,Z,Nt,ht.width,ht.height,ht.depth),e.texSubImage3D(35866,0,0,0,0,ht.width,ht.height,ht.depth,Bt,Ot,ht.data)):e.texImage3D(35866,0,Nt,ht.width,ht.height,ht.depth,0,Bt,Ot,ht.data);else if(E.isData3DTexture)te?(ie&&e.texStorage3D(32879,Z,Nt,ht.width,ht.height,ht.depth),e.texSubImage3D(32879,0,0,0,0,ht.width,ht.height,ht.depth,Bt,Ot,ht.data)):e.texImage3D(32879,0,Nt,ht.width,ht.height,ht.depth,0,Bt,Ot,ht.data);else if(E.isFramebufferTexture){if(ie)if(te)e.texStorage2D(3553,Z,Nt,ht.width,ht.height);else{let st=ht.width,_t=ht.height;for(let Tt=0;Tt<Z;Tt++)e.texImage2D(3553,Tt,Nt,st,_t,0,Bt,Ot,null),st>>=1,_t>>=1}}else if(Kt.length>0&&Wt){te&&ie&&e.texStorage2D(3553,Z,Nt,Kt[0].width,Kt[0].height);for(let st=0,_t=Kt.length;st<_t;st++)Ut=Kt[st],te?e.texSubImage2D(3553,st,0,0,Bt,Ot,Ut):e.texImage2D(3553,st,Nt,Bt,Ot,Ut);E.generateMipmaps=!1}else te?(ie&&e.texStorage2D(3553,Z,Nt,ht.width,ht.height),e.texSubImage2D(3553,0,0,0,Bt,Ot,ht)):e.texImage2D(3553,0,Nt,Bt,Ot,ht);I(E,Wt)&&G(ft),Dt.__version=wt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function H(P,E,et){if(E.image.length!==6)return;const ft=J(P,E),gt=E.source;e.bindTexture(34067,P.__webglTexture,33984+et);const wt=n.get(gt);if(gt.version!==wt.__version||ft===!0){e.activeTexture(33984+et),d.pixelStorei(37440,E.flipY),d.pixelStorei(37441,E.premultiplyAlpha),d.pixelStorei(3317,E.unpackAlignment),d.pixelStorei(37443,0);const Dt=E.isCompressedTexture||E.image[0].isCompressedTexture,At=E.image[0]&&E.image[0].isDataTexture,ht=[];for(let st=0;st<6;st++)!Dt&&!At?ht[st]=y(E.image[st],!1,!0,h):ht[st]=At?E.image[st].image:E.image[st],ht[st]=Zt(E,ht[st]);const Wt=ht[0],Bt=x(Wt)||s,Ot=r.convert(E.format,E.encoding),Nt=r.convert(E.type),Ut=M(E.internalFormat,Ot,Nt,E.encoding),Kt=s&&E.isVideoTexture!==!0,te=wt.__version===void 0||ft===!0;let ie=T(E,Wt,Bt);k(34067,E,Bt);let Z;if(Dt){Kt&&te&&e.texStorage2D(34067,ie,Ut,Wt.width,Wt.height);for(let st=0;st<6;st++){Z=ht[st].mipmaps;for(let _t=0;_t<Z.length;_t++){const Tt=Z[_t];E.format!==Je?Ot!==null?Kt?e.compressedTexSubImage2D(34069+st,_t,0,0,Tt.width,Tt.height,Ot,Tt.data):e.compressedTexImage2D(34069+st,_t,Ut,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?e.texSubImage2D(34069+st,_t,0,0,Tt.width,Tt.height,Ot,Nt,Tt.data):e.texImage2D(34069+st,_t,Ut,Tt.width,Tt.height,0,Ot,Nt,Tt.data)}}}else{Z=E.mipmaps,Kt&&te&&(Z.length>0&&ie++,e.texStorage2D(34067,ie,Ut,ht[0].width,ht[0].height));for(let st=0;st<6;st++)if(At){Kt?e.texSubImage2D(34069+st,0,0,0,ht[st].width,ht[st].height,Ot,Nt,ht[st].data):e.texImage2D(34069+st,0,Ut,ht[st].width,ht[st].height,0,Ot,Nt,ht[st].data);for(let _t=0;_t<Z.length;_t++){const Ft=Z[_t].image[st].image;Kt?e.texSubImage2D(34069+st,_t+1,0,0,Ft.width,Ft.height,Ot,Nt,Ft.data):e.texImage2D(34069+st,_t+1,Ut,Ft.width,Ft.height,0,Ot,Nt,Ft.data)}}else{Kt?e.texSubImage2D(34069+st,0,0,0,Ot,Nt,ht[st]):e.texImage2D(34069+st,0,Ut,Ot,Nt,ht[st]);for(let _t=0;_t<Z.length;_t++){const Tt=Z[_t];Kt?e.texSubImage2D(34069+st,_t+1,0,0,Ot,Nt,Tt.image[st]):e.texImage2D(34069+st,_t+1,Ut,Ot,Nt,Tt.image[st])}}}I(E,Bt)&&G(34067),wt.__version=gt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Q(P,E,et,ft,gt){const wt=r.convert(et.format,et.encoding),Dt=r.convert(et.type),At=M(et.internalFormat,wt,Dt,et.encoding);n.get(E).__hasExternalTextures||(gt===32879||gt===35866?e.texImage3D(gt,0,At,E.width,E.height,E.depth,0,wt,Dt,null):e.texImage2D(gt,0,At,E.width,E.height,0,wt,Dt,null)),e.bindFramebuffer(36160,P),qt(E)?u.framebufferTexture2DMultisampleEXT(36160,ft,gt,n.get(et).__webglTexture,0,Pt(E)):(gt===3553||gt>=34069&&gt<=34074)&&d.framebufferTexture2D(36160,ft,gt,n.get(et).__webglTexture,0),e.bindFramebuffer(36160,null)}function rt(P,E,et){if(d.bindRenderbuffer(36161,P),E.depthBuffer&&!E.stencilBuffer){let ft=33189;if(et||qt(E)){const gt=E.depthTexture;gt&&gt.isDepthTexture&&(gt.type===Dn?ft=36012:gt.type===Pn&&(ft=33190));const wt=Pt(E);qt(E)?u.renderbufferStorageMultisampleEXT(36161,wt,ft,E.width,E.height):d.renderbufferStorageMultisample(36161,wt,ft,E.width,E.height)}else d.renderbufferStorage(36161,ft,E.width,E.height);d.framebufferRenderbuffer(36160,36096,36161,P)}else if(E.depthBuffer&&E.stencilBuffer){const ft=Pt(E);et&&qt(E)===!1?d.renderbufferStorageMultisample(36161,ft,35056,E.width,E.height):qt(E)?u.renderbufferStorageMultisampleEXT(36161,ft,35056,E.width,E.height):d.renderbufferStorage(36161,34041,E.width,E.height),d.framebufferRenderbuffer(36160,33306,36161,P)}else{const ft=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let gt=0;gt<ft.length;gt++){const wt=ft[gt],Dt=r.convert(wt.format,wt.encoding),At=r.convert(wt.type),ht=M(wt.internalFormat,Dt,At,wt.encoding),Wt=Pt(E);et&&qt(E)===!1?d.renderbufferStorageMultisample(36161,Wt,ht,E.width,E.height):qt(E)?u.renderbufferStorageMultisampleEXT(36161,Wt,ht,E.width,E.height):d.renderbufferStorage(36161,ht,E.width,E.height)}}d.bindRenderbuffer(36161,null)}function bt(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),X(E.depthTexture,0);const ft=n.get(E.depthTexture).__webglTexture,gt=Pt(E);if(E.depthTexture.format===In)qt(E)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,ft,0,gt):d.framebufferTexture2D(36160,36096,3553,ft,0);else if(E.depthTexture.format===ri)qt(E)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,ft,0,gt):d.framebufferTexture2D(36160,33306,3553,ft,0);else throw new Error("Unknown depthTexture format")}function Mt(P){const E=n.get(P),et=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");bt(E.__webglFramebuffer,P)}else if(et){E.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)e.bindFramebuffer(36160,E.__webglFramebuffer[ft]),E.__webglDepthbuffer[ft]=d.createRenderbuffer(),rt(E.__webglDepthbuffer[ft],P,!1)}else e.bindFramebuffer(36160,E.__webglFramebuffer),E.__webglDepthbuffer=d.createRenderbuffer(),rt(E.__webglDepthbuffer,P,!1);e.bindFramebuffer(36160,null)}function Et(P,E,et){const ft=n.get(P);E!==void 0&&Q(ft.__webglFramebuffer,P,P.texture,36064,3553),et!==void 0&&Mt(P)}function ct(P){const E=P.texture,et=n.get(P),ft=n.get(E);P.addEventListener("dispose",V),P.isWebGLMultipleRenderTargets!==!0&&(ft.__webglTexture===void 0&&(ft.__webglTexture=d.createTexture()),ft.__version=E.version,i.memory.textures++);const gt=P.isWebGLCubeRenderTarget===!0,wt=P.isWebGLMultipleRenderTargets===!0,Dt=x(P)||s;if(gt){et.__webglFramebuffer=[];for(let At=0;At<6;At++)et.__webglFramebuffer[At]=d.createFramebuffer()}else{if(et.__webglFramebuffer=d.createFramebuffer(),wt)if(a.drawBuffers){const At=P.texture;for(let ht=0,Wt=At.length;ht<Wt;ht++){const Bt=n.get(At[ht]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=d.createTexture(),i.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&P.samples>0&&qt(P)===!1){const At=wt?E:[E];et.__webglMultisampledFramebuffer=d.createFramebuffer(),et.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,et.__webglMultisampledFramebuffer);for(let ht=0;ht<At.length;ht++){const Wt=At[ht];et.__webglColorRenderbuffer[ht]=d.createRenderbuffer(),d.bindRenderbuffer(36161,et.__webglColorRenderbuffer[ht]);const Bt=r.convert(Wt.format,Wt.encoding),Ot=r.convert(Wt.type),Nt=M(Wt.internalFormat,Bt,Ot,Wt.encoding,P.isXRRenderTarget===!0),Ut=Pt(P);d.renderbufferStorageMultisample(36161,Ut,Nt,P.width,P.height),d.framebufferRenderbuffer(36160,36064+ht,36161,et.__webglColorRenderbuffer[ht])}d.bindRenderbuffer(36161,null),P.depthBuffer&&(et.__webglDepthRenderbuffer=d.createRenderbuffer(),rt(et.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(36160,null)}}if(gt){e.bindTexture(34067,ft.__webglTexture),k(34067,E,Dt);for(let At=0;At<6;At++)Q(et.__webglFramebuffer[At],P,E,36064,34069+At);I(E,Dt)&&G(34067),e.unbindTexture()}else if(wt){const At=P.texture;for(let ht=0,Wt=At.length;ht<Wt;ht++){const Bt=At[ht],Ot=n.get(Bt);e.bindTexture(3553,Ot.__webglTexture),k(3553,Bt,Dt),Q(et.__webglFramebuffer,P,Bt,36064+ht,3553),I(Bt,Dt)&&G(3553)}e.unbindTexture()}else{let At=3553;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(s?At=P.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(At,ft.__webglTexture),k(At,E,Dt),Q(et.__webglFramebuffer,P,E,36064,At),I(E,Dt)&&G(At),e.unbindTexture()}P.depthBuffer&&Mt(P)}function vt(P){const E=x(P)||s,et=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ft=0,gt=et.length;ft<gt;ft++){const wt=et[ft];if(I(wt,E)){const Dt=P.isWebGLCubeRenderTarget?34067:3553,At=n.get(wt).__webglTexture;e.bindTexture(Dt,At),G(Dt),e.unbindTexture()}}}function Ht(P){if(s&&P.samples>0&&qt(P)===!1){const E=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],et=P.width,ft=P.height;let gt=16384;const wt=[],Dt=P.stencilBuffer?33306:36096,At=n.get(P),ht=P.isWebGLMultipleRenderTargets===!0;if(ht)for(let Wt=0;Wt<E.length;Wt++)e.bindFramebuffer(36160,At.__webglMultisampledFramebuffer),d.framebufferRenderbuffer(36160,36064+Wt,36161,null),e.bindFramebuffer(36160,At.__webglFramebuffer),d.framebufferTexture2D(36009,36064+Wt,3553,null,0);e.bindFramebuffer(36008,At.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,At.__webglFramebuffer);for(let Wt=0;Wt<E.length;Wt++){wt.push(36064+Wt),P.depthBuffer&&wt.push(Dt);const Bt=At.__ignoreDepthValues!==void 0?At.__ignoreDepthValues:!1;if(Bt===!1&&(P.depthBuffer&&(gt|=256),P.stencilBuffer&&(gt|=1024)),ht&&d.framebufferRenderbuffer(36008,36064,36161,At.__webglColorRenderbuffer[Wt]),Bt===!0&&(d.invalidateFramebuffer(36008,[Dt]),d.invalidateFramebuffer(36009,[Dt])),ht){const Ot=n.get(E[Wt]).__webglTexture;d.framebufferTexture2D(36009,36064,3553,Ot,0)}d.blitFramebuffer(0,0,et,ft,0,0,et,ft,gt,9728),f&&d.invalidateFramebuffer(36008,wt)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),ht)for(let Wt=0;Wt<E.length;Wt++){e.bindFramebuffer(36160,At.__webglMultisampledFramebuffer),d.framebufferRenderbuffer(36160,36064+Wt,36161,At.__webglColorRenderbuffer[Wt]);const Bt=n.get(E[Wt]).__webglTexture;e.bindFramebuffer(36160,At.__webglFramebuffer),d.framebufferTexture2D(36009,36064+Wt,3553,Bt,0)}e.bindFramebuffer(36009,At.__webglMultisampledFramebuffer)}}function Pt(P){return Math.min(o,P.samples)}function qt(P){const E=n.get(P);return s&&P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Rt(P){const E=i.render.frame;v.get(P)!==E&&(v.set(P,E),P.update())}function Zt(P,E){const et=P.encoding,ft=P.format,gt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Or||et!==Fn&&(et===ce?s===!1?t.has("EXT_sRGB")===!0&&ft===Je?(P.format=Or,P.minFilter=Xe,P.generateMipmaps=!1):E=xa.sRGBToLinear(E):(ft!==Je||gt!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",et)),E}this.allocateTextureUnit=B,this.resetTextureUnits=W,this.setTexture2D=X,this.setTexture2DArray=N,this.setTexture3D=D,this.setTextureCube=R,this.rebindTextures=Et,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=qt}function Bd(d,t,e){const n=e.isWebGL2;function a(r,i=null){let s;if(r===Bn)return 5121;if(r===xo)return 32819;if(r===_o)return 32820;if(r===mo)return 5120;if(r===vo)return 5122;if(r===pa)return 5123;if(r===go)return 5124;if(r===Pn)return 5125;if(r===Dn)return 5126;if(r===_i)return n?5131:(s=t.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===yo)return 6406;if(r===Je)return 6408;if(r===Mo)return 6409;if(r===wo)return 6410;if(r===In)return 6402;if(r===ri)return 34041;if(r===Or)return s=t.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(r===bo)return 6403;if(r===So)return 36244;if(r===Eo)return 33319;if(r===To)return 33320;if(r===Ao)return 36249;if(r===er||r===nr||r===ir||r===rr)if(i===ce)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===er)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===nr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ir)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===rr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===er)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===nr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ir)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===rr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Qr||r===ts||r===es||r===ns)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===Qr)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ts)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===es)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ns)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Co)return s=t.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===is||r===rs)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(r===is)return i===ce?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===rs)return i===ce?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ss||r===as||r===os||r===ls||r===cs||r===us||r===hs||r===ds||r===fs||r===ps||r===ms||r===vs||r===gs||r===xs)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(r===ss)return i===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===as)return i===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===os)return i===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ls)return i===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===cs)return i===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===us)return i===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===hs)return i===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ds)return i===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===fs)return i===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ps)return i===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ms)return i===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===vs)return i===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===gs)return i===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===xs)return i===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===sr)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(r===sr)return i===ce?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Ro||r===_s||r===ys||r===Ms)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(r===sr)return s.COMPRESSED_RED_RGTC1_EXT;if(r===_s)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ys)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ms)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ti?n?34042:(s=t.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):d[r]!==void 0?d[r]:null}return{convert:a}}class Fd extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class qi extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zd={type:"move"};class Pr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let a=null,r=null,i=null;const s=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){i=!0;for(const m of t.hand.values()){const p=e.getJointPose(m,n),g=this._getHandJoint(h,m);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=p.radius),g.visible=p!==null}const l=h.joints["index-finger-tip"],o=h.joints["thumb-tip"],u=l.position.distanceTo(o.position),f=.02,v=.005;h.inputState.pinching&&u>f+v?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&u<=f-v&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));s!==null&&(a=e.getPose(t.targetRaySpace,n),a===null&&r!==null&&(a=r),a!==null&&(s.matrix.fromArray(a.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),a.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(a.linearVelocity)):s.hasLinearVelocity=!1,a.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(a.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(zd)))}return s!==null&&(s.visible=a!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=i!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new qi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Nd extends ze{constructor(t,e,n,a,r,i,s,c,h,l){if(l=l!==void 0?l:In,l!==In&&l!==ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===In&&(n=Pn),n===void 0&&l===ri&&(n=ti),super(null,a,r,i,s,c,l,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=s!==void 0?s:Ie,this.minFilter=c!==void 0?c:Ie,this.flipY=!1,this.generateMipmaps=!1}}class Ud extends ai{constructor(t,e){super();const n=this;let a=null,r=1,i=null,s="local-floor",c=1,h=null,l=null,o=null,u=null,f=null,v=null;const m=e.getContextAttributes();let p=null,g=null;const _=[],y=[],x=new Set,b=new Map,I=new Ye;I.layers.enable(1),I.viewport=new Te;const G=new Ye;G.layers.enable(2),G.viewport=new Te;const M=[I,G],T=new Fd;T.layers.enable(1),T.layers.enable(2);let C=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let R=_[D];return R===void 0&&(R=new Pr,_[D]=R),R.getTargetRaySpace()},this.getControllerGrip=function(D){let R=_[D];return R===void 0&&(R=new Pr,_[D]=R),R.getGripSpace()},this.getHand=function(D){let R=_[D];return R===void 0&&(R=new Pr,_[D]=R),R.getHandSpace()};function V(D){const R=y.indexOf(D.inputSource);if(R===-1)return;const L=_[R];L!==void 0&&L.dispatchEvent({type:D.type,data:D.inputSource})}function z(){a.removeEventListener("select",V),a.removeEventListener("selectstart",V),a.removeEventListener("selectend",V),a.removeEventListener("squeeze",V),a.removeEventListener("squeezestart",V),a.removeEventListener("squeezeend",V),a.removeEventListener("end",z),a.removeEventListener("inputsourceschange",U);for(let D=0;D<_.length;D++){const R=y[D];R!==null&&(y[D]=null,_[D].disconnect(R))}C=null,F=null,t.setRenderTarget(p),f=null,u=null,o=null,a=null,g=null,N.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){r=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){s=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||i},this.setReferenceSpace=function(D){h=D},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return o},this.getFrame=function(){return v},this.getSession=function(){return a},this.setSession=async function(D){if(a=D,a!==null){if(p=t.getRenderTarget(),a.addEventListener("select",V),a.addEventListener("selectstart",V),a.addEventListener("selectend",V),a.addEventListener("squeeze",V),a.addEventListener("squeezestart",V),a.addEventListener("squeezeend",V),a.addEventListener("end",z),a.addEventListener("inputsourceschange",U),m.xrCompatible!==!0&&await e.makeXRCompatible(),a.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const R={antialias:a.renderState.layers===void 0?m.antialias:!0,alpha:m.alpha,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(a,e,R),a.updateRenderState({baseLayer:f}),g=new zn(f.framebufferWidth,f.framebufferHeight,{format:Je,type:Bn,encoding:t.outputEncoding,stencilBuffer:m.stencil})}else{let R=null,L=null,w=null;m.depth&&(w=m.stencil?35056:33190,R=m.stencil?ri:In,L=m.stencil?ti:Pn);const k={colorFormat:32856,depthFormat:w,scaleFactor:r};o=new XRWebGLBinding(a,e),u=o.createProjectionLayer(k),a.updateRenderState({layers:[u]}),g=new zn(u.textureWidth,u.textureHeight,{format:Je,type:Bn,depthTexture:new Nd(u.textureWidth,u.textureHeight,L,void 0,void 0,void 0,void 0,void 0,void 0,R),stencilBuffer:m.stencil,encoding:t.outputEncoding,samples:m.antialias?4:0});const J=t.properties.get(g);J.__ignoreDepthValues=u.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(c),h=null,i=await a.requestReferenceSpace(s),N.setContext(a),N.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function U(D){for(let R=0;R<D.removed.length;R++){const L=D.removed[R],w=y.indexOf(L);w>=0&&(y[w]=null,_[w].disconnect(L))}for(let R=0;R<D.added.length;R++){const L=D.added[R];let w=y.indexOf(L);if(w===-1){for(let J=0;J<_.length;J++)if(J>=y.length){y.push(L),w=J;break}else if(y[J]===null){y[J]=L,w=J;break}if(w===-1)break}const k=_[w];k&&k.connect(L)}}const Y=new it,tt=new it;function W(D,R,L){Y.setFromMatrixPosition(R.matrixWorld),tt.setFromMatrixPosition(L.matrixWorld);const w=Y.distanceTo(tt),k=R.projectionMatrix.elements,J=L.projectionMatrix.elements,K=k[14]/(k[10]-1),H=k[14]/(k[10]+1),Q=(k[9]+1)/k[5],rt=(k[9]-1)/k[5],bt=(k[8]-1)/k[0],Mt=(J[8]+1)/J[0],Et=K*bt,ct=K*Mt,vt=w/(-bt+Mt),Ht=vt*-bt;R.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Ht),D.translateZ(vt),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const Pt=K+vt,qt=H+vt,Rt=Et-Ht,Zt=ct+(w-Ht),P=Q*H/qt*Pt,E=rt*H/qt*Pt;D.projectionMatrix.makePerspective(Rt,Zt,P,E,Pt,qt)}function B(D,R){R===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(R.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(a===null)return;T.near=G.near=I.near=D.near,T.far=G.far=I.far=D.far,(C!==T.near||F!==T.far)&&(a.updateRenderState({depthNear:T.near,depthFar:T.far}),C=T.near,F=T.far);const R=D.parent,L=T.cameras;B(T,R);for(let k=0;k<L.length;k++)B(L[k],R);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),D.matrix.copy(T.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale);const w=D.children;for(let k=0,J=w.length;k<J;k++)w[k].updateMatrixWorld(!0);L.length===2?W(T,I,G):T.projectionMatrix.copy(I.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(D){c=D,u!==null&&(u.fixedFoveation=D),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=D)},this.getPlanes=function(){return x};let $=null;function X(D,R){if(l=R.getViewerPose(h||i),v=R,l!==null){const L=l.views;f!==null&&(t.setRenderTargetFramebuffer(g,f.framebuffer),t.setRenderTarget(g));let w=!1;L.length!==T.cameras.length&&(T.cameras.length=0,w=!0);for(let k=0;k<L.length;k++){const J=L[k];let K=null;if(f!==null)K=f.getViewport(J);else{const Q=o.getViewSubImage(u,J);K=Q.viewport,k===0&&(t.setRenderTargetTextures(g,Q.colorTexture,u.ignoreDepthValues?void 0:Q.depthStencilTexture),t.setRenderTarget(g))}let H=M[k];H===void 0&&(H=new Ye,H.layers.enable(k),H.viewport=new Te,M[k]=H),H.matrix.fromArray(J.transform.matrix),H.projectionMatrix.fromArray(J.projectionMatrix),H.viewport.set(K.x,K.y,K.width,K.height),k===0&&T.matrix.copy(H.matrix),w===!0&&T.cameras.push(H)}}for(let L=0;L<_.length;L++){const w=y[L],k=_[L];w!==null&&k!==void 0&&k.update(w,R,h||i)}if($&&$(D,R),R.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:R.detectedPlanes});let L=null;for(const w of x)R.detectedPlanes.has(w)||(L===null&&(L=[]),L.push(w));if(L!==null)for(const w of L)x.delete(w),b.delete(w),n.dispatchEvent({type:"planeremoved",data:w});for(const w of R.detectedPlanes)if(!x.has(w))x.add(w),b.set(w,R.lastChangedTime),n.dispatchEvent({type:"planeadded",data:w});else{const k=b.get(w);w.lastChangedTime>k&&(b.set(w,w.lastChangedTime),n.dispatchEvent({type:"planechanged",data:w}))}}v=null}const N=new La;N.setAnimationLoop(X),this.setAnimationLoop=function(D){$=D},this.dispose=function(){}}}function Od(d,t){function e(m,p){p.color.getRGB(m.fogColor.value,Ta(d)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,g,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(m,p):p.isMeshToonMaterial?(a(m,p),l(m,p)):p.isMeshPhongMaterial?(a(m,p),h(m,p)):p.isMeshStandardMaterial?(a(m,p),o(m,p),p.isMeshPhysicalMaterial&&u(m,p,y)):p.isMeshMatcapMaterial?(a(m,p),f(m,p)):p.isMeshDepthMaterial?a(m,p):p.isMeshDistanceMaterial?(a(m,p),v(m,p)):p.isMeshNormalMaterial?a(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&i(m,p)):p.isPointsMaterial?s(m,p,g,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===ke&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===ke&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const g=t.get(p).envMap;if(g&&(m.envMap.value=g,m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const x=d.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let _;p.map?_=p.map:p.specularMap?_=p.specularMap:p.displacementMap?_=p.displacementMap:p.normalMap?_=p.normalMap:p.bumpMap?_=p.bumpMap:p.roughnessMap?_=p.roughnessMap:p.metalnessMap?_=p.metalnessMap:p.alphaMap?_=p.alphaMap:p.emissiveMap?_=p.emissiveMap:p.clearcoatMap?_=p.clearcoatMap:p.clearcoatNormalMap?_=p.clearcoatNormalMap:p.clearcoatRoughnessMap?_=p.clearcoatRoughnessMap:p.iridescenceMap?_=p.iridescenceMap:p.iridescenceThicknessMap?_=p.iridescenceThicknessMap:p.specularIntensityMap?_=p.specularIntensityMap:p.specularColorMap?_=p.specularColorMap:p.transmissionMap?_=p.transmissionMap:p.thicknessMap?_=p.thicknessMap:p.sheenColorMap?_=p.sheenColorMap:p.sheenRoughnessMap&&(_=p.sheenRoughnessMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix));let y;p.aoMap?y=p.aoMap:p.lightMap&&(y=p.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uv2Transform.value.copy(y.matrix))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function i(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function s(m,p,g,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*g,m.scale.value=_*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y;p.map?y=p.map:p.alphaMap&&(y=p.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uvTransform.value.copy(y.matrix))}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let g;p.map?g=p.map:p.alphaMap&&(g=p.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),m.uvTransform.value.copy(g.matrix))}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function l(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function o(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,g){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===ke&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function f(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function Vd(d,t,e,n){let a={},r={},i=[];const s=e.isWebGL2?d.getParameter(35375):0;function c(_,y){const x=y.program;n.uniformBlockBinding(_,x)}function h(_,y){let x=a[_.id];x===void 0&&(v(_),x=l(_),a[_.id]=x,_.addEventListener("dispose",p));const b=y.program;n.updateUBOMapping(_,b);const I=t.render.frame;r[_.id]!==I&&(u(_),r[_.id]=I)}function l(_){const y=o();_.__bindingPointIndex=y;const x=d.createBuffer(),b=_.__size,I=_.usage;return d.bindBuffer(35345,x),d.bufferData(35345,b,I),d.bindBuffer(35345,null),d.bindBufferBase(35345,y,x),x}function o(){for(let _=0;_<s;_++)if(i.indexOf(_)===-1)return i.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const y=a[_.id],x=_.uniforms,b=_.__cache;d.bindBuffer(35345,y);for(let I=0,G=x.length;I<G;I++){const M=x[I];if(f(M,I,b)===!0){const T=M.__offset,C=Array.isArray(M.value)?M.value:[M.value];let F=0;for(let V=0;V<C.length;V++){const z=C[V],U=m(z);typeof z=="number"?(M.__data[0]=z,d.bufferSubData(35345,T+F,M.__data)):z.isMatrix3?(M.__data[0]=z.elements[0],M.__data[1]=z.elements[1],M.__data[2]=z.elements[2],M.__data[3]=z.elements[0],M.__data[4]=z.elements[3],M.__data[5]=z.elements[4],M.__data[6]=z.elements[5],M.__data[7]=z.elements[0],M.__data[8]=z.elements[6],M.__data[9]=z.elements[7],M.__data[10]=z.elements[8],M.__data[11]=z.elements[0]):(z.toArray(M.__data,F),F+=U.storage/Float32Array.BYTES_PER_ELEMENT)}d.bufferSubData(35345,T,M.__data)}}d.bindBuffer(35345,null)}function f(_,y,x){const b=_.value;if(x[y]===void 0){if(typeof b=="number")x[y]=b;else{const I=Array.isArray(b)?b:[b],G=[];for(let M=0;M<I.length;M++)G.push(I[M].clone());x[y]=G}return!0}else if(typeof b=="number"){if(x[y]!==b)return x[y]=b,!0}else{const I=Array.isArray(x[y])?x[y]:[x[y]],G=Array.isArray(b)?b:[b];for(let M=0;M<I.length;M++){const T=I[M];if(T.equals(G[M])===!1)return T.copy(G[M]),!0}}return!1}function v(_){const y=_.uniforms;let x=0;const b=16;let I=0;for(let G=0,M=y.length;G<M;G++){const T=y[G],C={boundary:0,storage:0},F=Array.isArray(T.value)?T.value:[T.value];for(let V=0,z=F.length;V<z;V++){const U=F[V],Y=m(U);C.boundary+=Y.boundary,C.storage+=Y.storage}if(T.__data=new Float32Array(C.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=x,G>0){I=x%b;const V=b-I;I!==0&&V-C.boundary<0&&(x+=b-I,T.__offset=x)}x+=C.storage}return I=x%b,I>0&&(x+=b-I),_.__size=x,_.__cache={},this}function m(_){const y={boundary:0,storage:0};return typeof _=="number"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function p(_){const y=_.target;y.removeEventListener("dispose",p);const x=i.indexOf(y.__bindingPointIndex);i.splice(x,1),d.deleteBuffer(a[y.id]),delete a[y.id],delete r[y.id]}function g(){for(const _ in a)d.deleteBuffer(a[_]);i=[],a={},r={}}return{bind:c,update:h,dispose:g}}function Wd(){const d=Mi("canvas");return d.style.display="block",d}function Hr(d={}){this.isWebGLRenderer=!0;const t=d.canvas!==void 0?d.canvas:Wd(),e=d.context!==void 0?d.context:null,n=d.depth!==void 0?d.depth:!0,a=d.stencil!==void 0?d.stencil:!0,r=d.antialias!==void 0?d.antialias:!1,i=d.premultipliedAlpha!==void 0?d.premultipliedAlpha:!0,s=d.preserveDrawingBuffer!==void 0?d.preserveDrawingBuffer:!1,c=d.powerPreference!==void 0?d.powerPreference:"default",h=d.failIfMajorPerformanceCaveat!==void 0?d.failIfMajorPerformanceCaveat:!1;let l;e!==null?l=e.getContextAttributes().alpha:l=d.alpha!==void 0?d.alpha:!1;let o=null,u=null;const f=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Fn,this.useLegacyLights=!0,this.toneMapping=fn,this.toneMappingExposure=1;const m=this;let p=!1,g=0,_=0,y=null,x=-1,b=null;const I=new Te,G=new Te;let M=null,T=t.width,C=t.height,F=1,V=null,z=null;const U=new Te(0,0,T,C),Y=new Te(0,0,T,C);let tt=!1;const W=new Ra;let B=!1,$=!1,X=null;const N=new Ae,D=new it,R={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function L(){return y===null?F:1}let w=e;function k(S,O){for(let j=0;j<S.length;j++){const A=S[j],q=t.getContext(A,O);if(q!==null)return q}return null}try{const S={alpha:!0,depth:n,stencil:a,antialias:r,premultipliedAlpha:i,preserveDrawingBuffer:s,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wr}`),t.addEventListener("webglcontextlost",Ot,!1),t.addEventListener("webglcontextrestored",Nt,!1),t.addEventListener("webglcontextcreationerror",Ut,!1),w===null){const O=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&O.shift(),w=k(O,S),w===null)throw k(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}w.getShaderPrecisionFormat===void 0&&(w.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let J,K,H,Q,rt,bt,Mt,Et,ct,vt,Ht,Pt,qt,Rt,Zt,P,E,et,ft,gt,wt,Dt,At,ht;function Wt(){J=new Ju(w),K=new qu(w,J,d),J.init(K),Dt=new Bd(w,J,K),H=new Dd(w,J,K),Q=new eh,rt=new xd,bt=new Id(w,J,H,rt,K,Dt,Q),Mt=new Yu(m),Et=new Ku(m),ct=new cl(w,K),At=new ku(w,J,ct,K),vt=new Qu(w,ct,Q,At),Ht=new sh(w,vt,ct,Q),ft=new rh(w,K,bt),P=new Xu(rt),Pt=new gd(m,Mt,Et,J,K,At,P),qt=new Od(m,rt),Rt=new yd,Zt=new Td(J,K),et=new Gu(m,Mt,Et,H,Ht,l,i),E=new Pd(m,Ht,K),ht=new Vd(w,Q,K,H),gt=new Hu(w,J,Q,K),wt=new th(w,J,Q,K),Q.programs=Pt.programs,m.capabilities=K,m.extensions=J,m.properties=rt,m.renderLists=Rt,m.shadowMap=E,m.state=H,m.info=Q}Wt();const Bt=new Ud(m,w);this.xr=Bt,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const S=J.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=J.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(S){S!==void 0&&(F=S,this.setSize(T,C,!1))},this.getSize=function(S){return S.set(T,C)},this.setSize=function(S,O,j=!0){if(Bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=S,C=O,t.width=Math.floor(S*F),t.height=Math.floor(O*F),j===!0&&(t.style.width=S+"px",t.style.height=O+"px"),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(T*F,C*F).floor()},this.setDrawingBufferSize=function(S,O,j){T=S,C=O,F=j,t.width=Math.floor(S*j),t.height=Math.floor(O*j),this.setViewport(0,0,S,O)},this.getCurrentViewport=function(S){return S.copy(I)},this.getViewport=function(S){return S.copy(U)},this.setViewport=function(S,O,j,A){S.isVector4?U.set(S.x,S.y,S.z,S.w):U.set(S,O,j,A),H.viewport(I.copy(U).multiplyScalar(F).floor())},this.getScissor=function(S){return S.copy(Y)},this.setScissor=function(S,O,j,A){S.isVector4?Y.set(S.x,S.y,S.z,S.w):Y.set(S,O,j,A),H.scissor(G.copy(Y).multiplyScalar(F).floor())},this.getScissorTest=function(){return tt},this.setScissorTest=function(S){H.setScissorTest(tt=S)},this.setOpaqueSort=function(S){V=S},this.setTransparentSort=function(S){z=S},this.getClearColor=function(S){return S.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(S=!0,O=!0,j=!0){let A=0;S&&(A|=16384),O&&(A|=256),j&&(A|=1024),w.clear(A)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ot,!1),t.removeEventListener("webglcontextrestored",Nt,!1),t.removeEventListener("webglcontextcreationerror",Ut,!1),Rt.dispose(),Zt.dispose(),rt.dispose(),Mt.dispose(),Et.dispose(),Ht.dispose(),At.dispose(),ht.dispose(),Pt.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",_t),Bt.removeEventListener("sessionend",Tt),X&&(X.dispose(),X=null),Ft.stop()};function Ot(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Nt(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const S=Q.autoReset,O=E.enabled,j=E.autoUpdate,A=E.needsUpdate,q=E.type;Wt(),Q.autoReset=S,E.enabled=O,E.autoUpdate=j,E.needsUpdate=A,E.type=q}function Ut(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Kt(S){const O=S.target;O.removeEventListener("dispose",Kt),te(O)}function te(S){ie(S),rt.remove(S)}function ie(S){const O=rt.get(S).programs;O!==void 0&&(O.forEach(function(j){Pt.releaseProgram(j)}),S.isShaderMaterial&&Pt.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,j,A,q,ot){O===null&&(O=R);const mt=q.isMesh&&q.matrixWorld.determinant()<0,ut=xt(S,O,j,A,q);H.setMaterial(A,mt);let lt=j.index,pt=1;A.wireframe===!0&&(lt=vt.getWireframeAttribute(j),pt=2);const St=j.drawRange,Ct=j.attributes.position;let dt=St.start*pt,Gt=(St.start+St.count)*pt;ot!==null&&(dt=Math.max(dt,ot.start*pt),Gt=Math.min(Gt,(ot.start+ot.count)*pt)),lt!==null?(dt=Math.max(dt,0),Gt=Math.min(Gt,lt.count)):Ct!=null&&(dt=Math.max(dt,0),Gt=Math.min(Gt,Ct.count));const Yt=Gt-dt;if(Yt<0||Yt===1/0)return;At.setup(q,A,ut,j,lt);let re,Vt=gt;if(lt!==null&&(re=ct.get(lt),Vt=wt,Vt.setIndex(re)),q.isMesh)A.wireframe===!0?(H.setLineWidth(A.wireframeLinewidth*L()),Vt.setMode(1)):Vt.setMode(4);else if(q.isLine){let It=A.linewidth;It===void 0&&(It=1),H.setLineWidth(It*L()),q.isLineSegments?Vt.setMode(1):q.isLineLoop?Vt.setMode(2):Vt.setMode(3)}else q.isPoints?Vt.setMode(0):q.isSprite&&Vt.setMode(4);if(q.isInstancedMesh)Vt.renderInstances(dt,Yt,q.count);else if(j.isInstancedBufferGeometry){const It=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,kt=Math.min(j.instanceCount,It);Vt.renderInstances(dt,Yt,kt)}else Vt.render(dt,Yt)},this.compile=function(S,O){function j(A,q,ot){A.transparent===!0&&A.side===_n&&A.forceSinglePass===!1?(A.side=ke,A.needsUpdate=!0,nt(A,q,ot),A.side=wn,A.needsUpdate=!0,nt(A,q,ot),A.side=_n):nt(A,q,ot)}u=Zt.get(S),u.init(),v.push(u),S.traverseVisible(function(A){A.isLight&&A.layers.test(O.layers)&&(u.pushLight(A),A.castShadow&&u.pushShadow(A))}),u.setupLights(m.useLegacyLights),S.traverse(function(A){const q=A.material;if(q)if(Array.isArray(q))for(let ot=0;ot<q.length;ot++){const mt=q[ot];j(mt,S,A)}else j(q,S,A)}),v.pop(),u=null};let Z=null;function st(S){Z&&Z(S)}function _t(){Ft.stop()}function Tt(){Ft.start()}const Ft=new La;Ft.setAnimationLoop(st),typeof self<"u"&&Ft.setContext(self),this.setAnimationLoop=function(S){Z=S,Bt.setAnimationLoop(S),S===null?Ft.stop():Ft.start()},Bt.addEventListener("sessionstart",_t),Bt.addEventListener("sessionend",Tt),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(O),O=Bt.getCamera()),S.isScene===!0&&S.onBeforeRender(m,S,O,y),u=Zt.get(S,v.length),u.init(),v.push(u),N.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),W.setFromProjectionMatrix(N),$=this.localClippingEnabled,B=P.init(this.clippingPlanes,$),o=Rt.get(S,f.length),o.init(),f.push(o),ee(S,O,0,m.sortObjects),o.finish(),m.sortObjects===!0&&o.sort(V,z),B===!0&&P.beginShadows();const j=u.state.shadowsArray;if(E.render(j,S,O),B===!0&&P.endShadows(),this.info.autoReset===!0&&this.info.reset(),et.render(o,S),u.setupLights(m.useLegacyLights),O.isArrayCamera){const A=O.cameras;for(let q=0,ot=A.length;q<ot;q++){const mt=A[q];oe(o,S,mt,mt.viewport)}}else oe(o,S,O);y!==null&&(bt.updateMultisampleRenderTarget(y),bt.updateRenderTargetMipmap(y)),S.isScene===!0&&S.onAfterRender(m,S,O),At.resetDefaultState(),x=-1,b=null,v.pop(),v.length>0?u=v[v.length-1]:u=null,f.pop(),f.length>0?o=f[f.length-1]:o=null};function ee(S,O,j,A){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)j=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLight)u.pushLight(S),S.castShadow&&u.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||W.intersectsSprite(S)){A&&D.setFromMatrixPosition(S.matrixWorld).applyMatrix4(N);const mt=Ht.update(S),ut=S.material;ut.visible&&o.push(S,mt,ut,j,D.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==Q.render.frame&&(S.skeleton.update(),S.skeleton.frame=Q.render.frame),!S.frustumCulled||W.intersectsObject(S))){A&&D.setFromMatrixPosition(S.matrixWorld).applyMatrix4(N);const mt=Ht.update(S),ut=S.material;if(Array.isArray(ut)){const lt=mt.groups;for(let pt=0,St=lt.length;pt<St;pt++){const Ct=lt[pt],dt=ut[Ct.materialIndex];dt&&dt.visible&&o.push(S,mt,dt,j,D.z,Ct)}}else ut.visible&&o.push(S,mt,ut,j,D.z,null)}}const ot=S.children;for(let mt=0,ut=ot.length;mt<ut;mt++)ee(ot[mt],O,j,A)}function oe(S,O,j,A){const q=S.opaque,ot=S.transmissive,mt=S.transparent;u.setupLightsView(j),B===!0&&P.setGlobalState(m.clippingPlanes,j),ot.length>0&&de(q,O,j),A&&H.viewport(I.copy(A)),q.length>0&&be(q,O,j),ot.length>0&&be(ot,O,j),mt.length>0&&be(mt,O,j),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function de(S,O,j){const A=K.isWebGL2;X===null&&(X=new zn(1024,1024,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")?_i:Bn,minFilter:xi,samples:A&&r===!0?4:0}));const q=m.getRenderTarget();m.setRenderTarget(X),m.clear();const ot=m.toneMapping;m.toneMapping=fn,be(S,O,j),m.toneMapping=ot,bt.updateMultisampleRenderTarget(X),bt.updateRenderTargetMipmap(X),m.setRenderTarget(q)}function be(S,O,j){const A=O.isScene===!0?O.overrideMaterial:null;for(let q=0,ot=S.length;q<ot;q++){const mt=S[q],ut=mt.object,lt=mt.geometry,pt=A===null?mt.material:A,St=mt.group;ut.layers.test(j.layers)&&Jt(ut,O,j,lt,pt,St)}}function Jt(S,O,j,A,q,ot){S.onBeforeRender(m,O,j,A,q,ot),S.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),q.onBeforeRender(m,O,j,A,S,ot),q.transparent===!0&&q.side===_n&&q.forceSinglePass===!1?(q.side=ke,q.needsUpdate=!0,m.renderBufferDirect(j,O,A,q,S,ot),q.side=wn,q.needsUpdate=!0,m.renderBufferDirect(j,O,A,q,S,ot),q.side=_n):m.renderBufferDirect(j,O,A,q,S,ot),S.onAfterRender(m,O,j,A,q,ot)}function nt(S,O,j){O.isScene!==!0&&(O=R);const A=rt.get(S),q=u.state.lights,ot=u.state.shadowsArray,mt=q.state.version,ut=Pt.getParameters(S,q.state,ot,O,j),lt=Pt.getProgramCacheKey(ut);let pt=A.programs;A.environment=S.isMeshStandardMaterial?O.environment:null,A.fog=O.fog,A.envMap=(S.isMeshStandardMaterial?Et:Mt).get(S.envMap||A.environment),pt===void 0&&(S.addEventListener("dispose",Kt),pt=new Map,A.programs=pt);let St=pt.get(lt);if(St!==void 0){if(A.currentProgram===St&&A.lightsStateVersion===mt)return at(S,ut),St}else ut.uniforms=Pt.getUniforms(S),S.onBuild(j,ut,m),S.onBeforeCompile(ut,m),St=Pt.acquireProgram(ut,lt),pt.set(lt,St),A.uniforms=ut.uniforms;const Ct=A.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ct.clippingPlanes=P.uniform),at(S,ut),A.needsLights=Xt(S),A.lightsStateVersion=mt,A.needsLights&&(Ct.ambientLightColor.value=q.state.ambient,Ct.lightProbe.value=q.state.probe,Ct.directionalLights.value=q.state.directional,Ct.directionalLightShadows.value=q.state.directionalShadow,Ct.spotLights.value=q.state.spot,Ct.spotLightShadows.value=q.state.spotShadow,Ct.rectAreaLights.value=q.state.rectArea,Ct.ltc_1.value=q.state.rectAreaLTC1,Ct.ltc_2.value=q.state.rectAreaLTC2,Ct.pointLights.value=q.state.point,Ct.pointLightShadows.value=q.state.pointShadow,Ct.hemisphereLights.value=q.state.hemi,Ct.directionalShadowMap.value=q.state.directionalShadowMap,Ct.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ct.spotShadowMap.value=q.state.spotShadowMap,Ct.spotLightMatrix.value=q.state.spotLightMatrix,Ct.spotLightMap.value=q.state.spotLightMap,Ct.pointShadowMap.value=q.state.pointShadowMap,Ct.pointShadowMatrix.value=q.state.pointShadowMatrix);const dt=St.getUniforms(),Gt=ji.seqWithValue(dt.seq,Ct);return A.currentProgram=St,A.uniformsList=Gt,St}function at(S,O){const j=rt.get(S);j.outputEncoding=O.outputEncoding,j.instancing=O.instancing,j.skinning=O.skinning,j.morphTargets=O.morphTargets,j.morphNormals=O.morphNormals,j.morphColors=O.morphColors,j.morphTargetsCount=O.morphTargetsCount,j.numClippingPlanes=O.numClippingPlanes,j.numIntersection=O.numClipIntersection,j.vertexAlphas=O.vertexAlphas,j.vertexTangents=O.vertexTangents,j.toneMapping=O.toneMapping}function xt(S,O,j,A,q){O.isScene!==!0&&(O=R),bt.resetTextureUnits();const ot=O.fog,mt=A.isMeshStandardMaterial?O.environment:null,ut=y===null?m.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:Fn,lt=(A.isMeshStandardMaterial?Et:Mt).get(A.envMap||mt),pt=A.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,St=!!A.normalMap&&!!j.attributes.tangent,Ct=!!j.morphAttributes.position,dt=!!j.morphAttributes.normal,Gt=!!j.morphAttributes.color,Yt=A.toneMapped?m.toneMapping:fn,re=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Vt=re!==void 0?re.length:0,It=rt.get(A),kt=u.state.lights;if(B===!0&&($===!0||S!==b)){const he=S===b&&A.id===x;P.setState(A,S,he)}let ne=!1;A.version===It.__version?(It.needsLights&&It.lightsStateVersion!==kt.state.version||It.outputEncoding!==ut||q.isInstancedMesh&&It.instancing===!1||!q.isInstancedMesh&&It.instancing===!0||q.isSkinnedMesh&&It.skinning===!1||!q.isSkinnedMesh&&It.skinning===!0||It.envMap!==lt||A.fog===!0&&It.fog!==ot||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==P.numPlanes||It.numIntersection!==P.numIntersection)||It.vertexAlphas!==pt||It.vertexTangents!==St||It.morphTargets!==Ct||It.morphNormals!==dt||It.morphColors!==Gt||It.toneMapping!==Yt||K.isWebGL2===!0&&It.morphTargetsCount!==Vt)&&(ne=!0):(ne=!0,It.__version=A.version);let fe=It.currentProgram;ne===!0&&(fe=nt(A,O,q));let Se=!1,Le=!1,xe=!1;const $t=fe.getUniforms(),Ee=It.uniforms;if(H.useProgram(fe.program)&&(Se=!0,Le=!0,xe=!0),A.id!==x&&(x=A.id,Le=!0),Se||b!==S){if($t.setValue(w,"projectionMatrix",S.projectionMatrix),K.logarithmicDepthBuffer&&$t.setValue(w,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),b!==S&&(b=S,Le=!0,xe=!0),A.isShaderMaterial||A.isMeshPhongMaterial||A.isMeshToonMaterial||A.isMeshStandardMaterial||A.envMap){const he=$t.map.cameraPosition;he!==void 0&&he.setValue(w,D.setFromMatrixPosition(S.matrixWorld))}(A.isMeshPhongMaterial||A.isMeshToonMaterial||A.isMeshLambertMaterial||A.isMeshBasicMaterial||A.isMeshStandardMaterial||A.isShaderMaterial)&&$t.setValue(w,"isOrthographic",S.isOrthographicCamera===!0),(A.isMeshPhongMaterial||A.isMeshToonMaterial||A.isMeshLambertMaterial||A.isMeshBasicMaterial||A.isMeshStandardMaterial||A.isShaderMaterial||A.isShadowMaterial||q.isSkinnedMesh)&&$t.setValue(w,"viewMatrix",S.matrixWorldInverse)}if(q.isSkinnedMesh){$t.setOptional(w,q,"bindMatrix"),$t.setOptional(w,q,"bindMatrixInverse");const he=q.skeleton;he&&(K.floatVertexTextures?(he.boneTexture===null&&he.computeBoneTexture(),$t.setValue(w,"boneTexture",he.boneTexture,bt),$t.setValue(w,"boneTextureSize",he.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const se=j.morphAttributes;if((se.position!==void 0||se.normal!==void 0||se.color!==void 0&&K.isWebGL2===!0)&&ft.update(q,j,fe),(Le||It.receiveShadow!==q.receiveShadow)&&(It.receiveShadow=q.receiveShadow,$t.setValue(w,"receiveShadow",q.receiveShadow)),A.isMeshGouraudMaterial&&A.envMap!==null&&(Ee.envMap.value=lt,Ee.flipEnvMap.value=lt.isCubeTexture&&lt.isRenderTargetTexture===!1?-1:1),Le&&($t.setValue(w,"toneMappingExposure",m.toneMappingExposure),It.needsLights&&yt(Ee,xe),ot&&A.fog===!0&&qt.refreshFogUniforms(Ee,ot),qt.refreshMaterialUniforms(Ee,A,F,C,X),ji.upload(w,It.uniformsList,Ee,bt)),A.isShaderMaterial&&A.uniformsNeedUpdate===!0&&(ji.upload(w,It.uniformsList,Ee,bt),A.uniformsNeedUpdate=!1),A.isSpriteMaterial&&$t.setValue(w,"center",q.center),$t.setValue(w,"modelViewMatrix",q.modelViewMatrix),$t.setValue(w,"normalMatrix",q.normalMatrix),$t.setValue(w,"modelMatrix",q.matrixWorld),A.isShaderMaterial||A.isRawShaderMaterial){const he=A.uniformsGroups;for(let _e=0,ye=he.length;_e<ye;_e++)if(K.isWebGL2){const pe=he[_e];ht.update(pe,fe),ht.bind(pe,fe)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fe}function yt(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function Xt(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(S,O,j){rt.get(S.texture).__webglTexture=O,rt.get(S.depthTexture).__webglTexture=j;const A=rt.get(S);A.__hasExternalTextures=!0,A.__hasExternalTextures&&(A.__autoAllocateDepthBuffer=j===void 0,A.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),A.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,O){const j=rt.get(S);j.__webglFramebuffer=O,j.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(S,O=0,j=0){y=S,g=O,_=j;let A=!0,q=null,ot=!1,mt=!1;if(S){const lt=rt.get(S);lt.__useDefaultFramebuffer!==void 0?(H.bindFramebuffer(36160,null),A=!1):lt.__webglFramebuffer===void 0?bt.setupRenderTarget(S):lt.__hasExternalTextures&&bt.rebindTextures(S,rt.get(S.texture).__webglTexture,rt.get(S.depthTexture).__webglTexture);const pt=S.texture;(pt.isData3DTexture||pt.isDataArrayTexture||pt.isCompressedArrayTexture)&&(mt=!0);const St=rt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(q=St[O],ot=!0):K.isWebGL2&&S.samples>0&&bt.useMultisampledRTT(S)===!1?q=rt.get(S).__webglMultisampledFramebuffer:q=St,I.copy(S.viewport),G.copy(S.scissor),M=S.scissorTest}else I.copy(U).multiplyScalar(F).floor(),G.copy(Y).multiplyScalar(F).floor(),M=tt;if(H.bindFramebuffer(36160,q)&&K.drawBuffers&&A&&H.drawBuffers(S,q),H.viewport(I),H.scissor(G),H.setScissorTest(M),ot){const lt=rt.get(S.texture);w.framebufferTexture2D(36160,36064,34069+O,lt.__webglTexture,j)}else if(mt){const lt=rt.get(S.texture),pt=O||0;w.framebufferTextureLayer(36160,36064,lt.__webglTexture,j||0,pt)}x=-1},this.readRenderTargetPixels=function(S,O,j,A,q,ot,mt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ut=rt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&mt!==void 0&&(ut=ut[mt]),ut){H.bindFramebuffer(36160,ut);try{const lt=S.texture,pt=lt.format,St=lt.type;if(pt!==Je&&Dt.convert(pt)!==w.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ct=St===_i&&(J.has("EXT_color_buffer_half_float")||K.isWebGL2&&J.has("EXT_color_buffer_float"));if(St!==Bn&&Dt.convert(St)!==w.getParameter(35738)&&!(St===Dn&&(K.isWebGL2||J.has("OES_texture_float")||J.has("WEBGL_color_buffer_float")))&&!Ct){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-A&&j>=0&&j<=S.height-q&&w.readPixels(O,j,A,q,Dt.convert(pt),Dt.convert(St),ot)}finally{const lt=y!==null?rt.get(y).__webglFramebuffer:null;H.bindFramebuffer(36160,lt)}}},this.copyFramebufferToTexture=function(S,O,j=0){const A=Math.pow(2,-j),q=Math.floor(O.image.width*A),ot=Math.floor(O.image.height*A);bt.setTexture2D(O,0),w.copyTexSubImage2D(3553,j,0,0,S.x,S.y,q,ot),H.unbindTexture()},this.copyTextureToTexture=function(S,O,j,A=0){const q=O.image.width,ot=O.image.height,mt=Dt.convert(j.format),ut=Dt.convert(j.type);bt.setTexture2D(j,0),w.pixelStorei(37440,j.flipY),w.pixelStorei(37441,j.premultiplyAlpha),w.pixelStorei(3317,j.unpackAlignment),O.isDataTexture?w.texSubImage2D(3553,A,S.x,S.y,q,ot,mt,ut,O.image.data):O.isCompressedTexture?w.compressedTexSubImage2D(3553,A,S.x,S.y,O.mipmaps[0].width,O.mipmaps[0].height,mt,O.mipmaps[0].data):w.texSubImage2D(3553,A,S.x,S.y,mt,ut,O.image),A===0&&j.generateMipmaps&&w.generateMipmap(3553),H.unbindTexture()},this.copyTextureToTexture3D=function(S,O,j,A,q=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ot=S.max.x-S.min.x+1,mt=S.max.y-S.min.y+1,ut=S.max.z-S.min.z+1,lt=Dt.convert(A.format),pt=Dt.convert(A.type);let St;if(A.isData3DTexture)bt.setTexture3D(A,0),St=32879;else if(A.isDataArrayTexture)bt.setTexture2DArray(A,0),St=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(37440,A.flipY),w.pixelStorei(37441,A.premultiplyAlpha),w.pixelStorei(3317,A.unpackAlignment);const Ct=w.getParameter(3314),dt=w.getParameter(32878),Gt=w.getParameter(3316),Yt=w.getParameter(3315),re=w.getParameter(32877),Vt=j.isCompressedTexture?j.mipmaps[0]:j.image;w.pixelStorei(3314,Vt.width),w.pixelStorei(32878,Vt.height),w.pixelStorei(3316,S.min.x),w.pixelStorei(3315,S.min.y),w.pixelStorei(32877,S.min.z),j.isDataTexture||j.isData3DTexture?w.texSubImage3D(St,q,O.x,O.y,O.z,ot,mt,ut,lt,pt,Vt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),w.compressedTexSubImage3D(St,q,O.x,O.y,O.z,ot,mt,ut,lt,Vt.data)):w.texSubImage3D(St,q,O.x,O.y,O.z,ot,mt,ut,lt,pt,Vt),w.pixelStorei(3314,Ct),w.pixelStorei(32878,dt),w.pixelStorei(3316,Gt),w.pixelStorei(3315,Yt),w.pixelStorei(32877,re),q===0&&A.generateMipmaps&&w.generateMipmap(St),H.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?bt.setTextureCube(S,0):S.isData3DTexture?bt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?bt.setTexture2DArray(S,0):bt.setTexture2D(S,0),H.unbindTexture()},this.resetState=function(){g=0,_=0,y=null,H.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(Hr.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(d){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!d}}});class Gd extends Hr{}Gd.prototype.isWebGL1Renderer=!0;class kd extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class qr extends pn{constructor(t=1,e=32,n=16,a=0,r=Math.PI*2,i=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:a,phiLength:r,thetaStart:i,thetaLength:s},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(i+s,Math.PI);let h=0;const l=[],o=new it,u=new it,f=[],v=[],m=[],p=[];for(let g=0;g<=n;g++){const _=[],y=g/n;let x=0;g==0&&i==0?x=.5/e:g==n&&c==Math.PI&&(x=-.5/e);for(let b=0;b<=e;b++){const I=b/e;o.x=-t*Math.cos(a+I*r)*Math.sin(i+y*s),o.y=t*Math.cos(i+y*s),o.z=t*Math.sin(a+I*r)*Math.sin(i+y*s),v.push(o.x,o.y,o.z),u.copy(o).normalize(),m.push(u.x,u.y,u.z),p.push(I+x,1-y),_.push(h++)}l.push(_)}for(let g=0;g<n;g++)for(let _=0;_<e;_++){const y=l[g][_+1],x=l[g][_],b=l[g+1][_],I=l[g+1][_+1];(g!==0||i>0)&&f.push(y,x,I),(g!==n-1||c<Math.PI)&&f.push(x,b,I)}this.setIndex(f),this.setAttribute("position",new sn(v,3)),this.setAttribute("normal",new sn(m,3)),this.setAttribute("uv",new sn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Dr extends Ei{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ma,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const sa={enabled:!1,files:{},add:function(d,t){this.enabled!==!1&&(this.files[d]=t)},get:function(d){if(this.enabled!==!1)return this.files[d]},remove:function(d){delete this.files[d]},clear:function(){this.files={}}};class Hd{constructor(t,e,n){const a=this;let r=!1,i=0,s=0,c;const h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(l){s++,r===!1&&a.onStart!==void 0&&a.onStart(l,i,s),r=!0},this.itemEnd=function(l){i++,a.onProgress!==void 0&&a.onProgress(l,i,s),i===s&&(r=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(l){a.onError!==void 0&&a.onError(l)},this.resolveURL=function(l){return c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,o){return h.push(l,o),this},this.removeHandler=function(l){const o=h.indexOf(l);return o!==-1&&h.splice(o,2),this},this.getHandler=function(l){for(let o=0,u=h.length;o<u;o+=2){const f=h[o],v=h[o+1];if(f.global&&(f.lastIndex=0),f.test(l))return v}return null}}}const qd=new Hd;class Fa{constructor(t){this.manager=t!==void 0?t:qd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(a,r){n.load(t,a,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}class Xd extends Fa{constructor(t){super(t)}load(t,e,n,a){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,i=sa.get(t);if(i!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(i),r.manager.itemEnd(t)},0),i;const s=Mi("img");function c(){l(),sa.add(t,this),e&&e(this),r.manager.itemEnd(t)}function h(o){l(),a&&a(o),r.manager.itemError(t),r.manager.itemEnd(t)}function l(){s.removeEventListener("load",c,!1),s.removeEventListener("error",h,!1)}return s.addEventListener("load",c,!1),s.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),r.manager.itemStart(t),s.src=t,s}}class Ir extends Fa{constructor(t){super(t)}load(t,e,n,a){const r=new ze,i=new Xd(this.manager);return i.setCrossOrigin(this.crossOrigin),i.setPath(this.path),i.load(t,function(s){r.image=s,r.needsUpdate=!0,e!==void 0&&e(r)},n,a),r}}class Yd extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ae(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class jd extends Yd{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Zd{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=aa(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=aa();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function aa(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wr);function Xi(d){throw new Error('Could not dynamically require "'+d+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Fe={},$d={get exports(){return Fe},set exports(d){Fe=d}};(function(d,t){(function(e){d.exports=e()})(function(){return function e(n,a,r){function i(h,l){if(!a[h]){if(!n[h]){var o=typeof Xi=="function"&&Xi;if(!l&&o)return o(h,!0);if(s)return s(h,!0);throw new Error("Cannot find module '"+h+"'")}var u=a[h]={exports:{}};n[h][0].call(u.exports,function(f){var v=n[h][1][f];return i(v||f)},u,u.exports,e,n,a,r)}return a[h].exports}for(var s=typeof Xi=="function"&&Xi,c=0;c<r.length;c++)i(r[c]);return i}({1:[function(e,n,a){n.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(e,n,a){n.exports={version:e("../package.json").version,AABB:e("./collision/AABB"),ArrayCollisionMatrix:e("./collision/ArrayCollisionMatrix"),Body:e("./objects/Body"),Box:e("./shapes/Box"),Broadphase:e("./collision/Broadphase"),Constraint:e("./constraints/Constraint"),ContactEquation:e("./equations/ContactEquation"),Narrowphase:e("./world/Narrowphase"),ConeTwistConstraint:e("./constraints/ConeTwistConstraint"),ContactMaterial:e("./material/ContactMaterial"),ConvexPolyhedron:e("./shapes/ConvexPolyhedron"),Cylinder:e("./shapes/Cylinder"),DistanceConstraint:e("./constraints/DistanceConstraint"),Equation:e("./equations/Equation"),EventTarget:e("./utils/EventTarget"),FrictionEquation:e("./equations/FrictionEquation"),GSSolver:e("./solver/GSSolver"),GridBroadphase:e("./collision/GridBroadphase"),Heightfield:e("./shapes/Heightfield"),HingeConstraint:e("./constraints/HingeConstraint"),LockConstraint:e("./constraints/LockConstraint"),Mat3:e("./math/Mat3"),Material:e("./material/Material"),NaiveBroadphase:e("./collision/NaiveBroadphase"),ObjectCollisionMatrix:e("./collision/ObjectCollisionMatrix"),Pool:e("./utils/Pool"),Particle:e("./shapes/Particle"),Plane:e("./shapes/Plane"),PointToPointConstraint:e("./constraints/PointToPointConstraint"),Quaternion:e("./math/Quaternion"),Ray:e("./collision/Ray"),RaycastVehicle:e("./objects/RaycastVehicle"),RaycastResult:e("./collision/RaycastResult"),RigidVehicle:e("./objects/RigidVehicle"),RotationalEquation:e("./equations/RotationalEquation"),RotationalMotorEquation:e("./equations/RotationalMotorEquation"),SAPBroadphase:e("./collision/SAPBroadphase"),SPHSystem:e("./objects/SPHSystem"),Shape:e("./shapes/Shape"),Solver:e("./solver/Solver"),Sphere:e("./shapes/Sphere"),SplitSolver:e("./solver/SplitSolver"),Spring:e("./objects/Spring"),Trimesh:e("./shapes/Trimesh"),Vec3:e("./math/Vec3"),Vec3Pool:e("./utils/Vec3Pool"),World:e("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(e,n,a){var r=e("../math/Vec3");e("../utils/Utils"),n.exports=i;function i(h){h=h||{},this.lowerBound=new r,h.lowerBound&&this.lowerBound.copy(h.lowerBound),this.upperBound=new r,h.upperBound&&this.upperBound.copy(h.upperBound)}var s=new r;i.prototype.setFromPoints=function(h,l,o,u){var f=this.lowerBound,v=this.upperBound,m=o;f.copy(h[0]),m&&m.vmult(f,f),v.copy(f);for(var p=1;p<h.length;p++){var g=h[p];m&&(m.vmult(g,s),g=s),g.x>v.x&&(v.x=g.x),g.x<f.x&&(f.x=g.x),g.y>v.y&&(v.y=g.y),g.y<f.y&&(f.y=g.y),g.z>v.z&&(v.z=g.z),g.z<f.z&&(f.z=g.z)}return l&&(l.vadd(f,f),l.vadd(v,v)),u&&(f.x-=u,f.y-=u,f.z-=u,v.x+=u,v.y+=u,v.z+=u),this},i.prototype.copy=function(h){return this.lowerBound.copy(h.lowerBound),this.upperBound.copy(h.upperBound),this},i.prototype.clone=function(){return new i().copy(this)},i.prototype.extend=function(h){var l=h.lowerBound.x;this.lowerBound.x>l&&(this.lowerBound.x=l);var o=h.upperBound.x;this.upperBound.x<o&&(this.upperBound.x=o);var l=h.lowerBound.y;this.lowerBound.y>l&&(this.lowerBound.y=l);var o=h.upperBound.y;this.upperBound.y<o&&(this.upperBound.y=o);var l=h.lowerBound.z;this.lowerBound.z>l&&(this.lowerBound.z=l);var o=h.upperBound.z;this.upperBound.z<o&&(this.upperBound.z=o)},i.prototype.overlaps=function(h){var l=this.lowerBound,o=this.upperBound,u=h.lowerBound,f=h.upperBound;return(u.x<=o.x&&o.x<=f.x||l.x<=f.x&&f.x<=o.x)&&(u.y<=o.y&&o.y<=f.y||l.y<=f.y&&f.y<=o.y)&&(u.z<=o.z&&o.z<=f.z||l.z<=f.z&&f.z<=o.z)},i.prototype.contains=function(h){var l=this.lowerBound,o=this.upperBound,u=h.lowerBound,f=h.upperBound;return l.x<=u.x&&o.x>=f.x&&l.y<=u.y&&o.y>=f.y&&l.z<=u.z&&o.z>=f.z},i.prototype.getCorners=function(h,l,o,u,f,v,m,p){var g=this.lowerBound,_=this.upperBound;h.copy(g),l.set(_.x,g.y,g.z),o.set(_.x,_.y,g.z),u.set(g.x,_.y,_.z),f.set(_.x,g.y,g.z),v.set(g.x,_.y,g.z),m.set(g.x,g.y,_.z),p.copy(_)};var c=[new r,new r,new r,new r,new r,new r,new r,new r];i.prototype.toLocalFrame=function(h,l){var o=c,u=o[0],f=o[1],v=o[2],m=o[3],p=o[4],g=o[5],_=o[6],y=o[7];this.getCorners(u,f,v,m,p,g,_,y);for(var x=0;x!==8;x++){var b=o[x];h.pointToLocal(b,b)}return l.setFromPoints(o)},i.prototype.toWorldFrame=function(h,l){var o=c,u=o[0],f=o[1],v=o[2],m=o[3],p=o[4],g=o[5],_=o[6],y=o[7];this.getCorners(u,f,v,m,p,g,_,y);for(var x=0;x!==8;x++){var b=o[x];h.pointToWorld(b,b)}return l.setFromPoints(o)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(e,n,a){n.exports=r;function r(){this.matrix=[]}r.prototype.get=function(i,s){if(i=i.index,s=s.index,s>i){var c=s;s=i,i=c}return this.matrix[(i*(i+1)>>1)+s-1]},r.prototype.set=function(i,s,c){if(i=i.index,s=s.index,s>i){var h=s;s=i,i=h}this.matrix[(i*(i+1)>>1)+s-1]=c?1:0},r.prototype.reset=function(){for(var i=0,s=this.matrix.length;i!==s;i++)this.matrix[i]=0},r.prototype.setNumObjects=function(i){this.matrix.length=i*(i-1)>>1}},{}],5:[function(e,n,a){var r=e("../objects/Body"),i=e("../math/Vec3"),s=e("../math/Quaternion");e("../shapes/Shape"),e("../shapes/Plane"),n.exports=c;function c(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}c.prototype.collisionPairs=function(m,p,g){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var h=r.STATIC|r.KINEMATIC;c.prototype.needBroadphaseCollision=function(m,p){return!(!(m.collisionFilterGroup&p.collisionFilterMask)||!(p.collisionFilterGroup&m.collisionFilterMask)||(m.type&h||m.sleepState===r.SLEEPING)&&(p.type&h||p.sleepState===r.SLEEPING))},c.prototype.intersectionTest=function(m,p,g,_){this.useBoundingBoxes?this.doBoundingBoxBroadphase(m,p,g,_):this.doBoundingSphereBroadphase(m,p,g,_)};var l=new i;new i,new s,new i,c.prototype.doBoundingSphereBroadphase=function(m,p,g,_){var y=l;p.position.vsub(m.position,y);var x=Math.pow(m.boundingRadius+p.boundingRadius,2),b=y.norm2();b<x&&(g.push(m),_.push(p))},c.prototype.doBoundingBoxBroadphase=function(m,p,g,_){m.aabbNeedsUpdate&&m.computeAABB(),p.aabbNeedsUpdate&&p.computeAABB(),m.aabb.overlaps(p.aabb)&&(g.push(m),_.push(p))};var o={keys:[]},u=[],f=[];c.prototype.makePairsUnique=function(m,p){for(var g=o,_=u,y=f,x=m.length,b=0;b!==x;b++)_[b]=m[b],y[b]=p[b];m.length=0,p.length=0;for(var b=0;b!==x;b++){var I=_[b].id,G=y[b].id,M=I<G?I+","+G:G+","+I;g[M]=b,g.keys.push(M)}for(var b=0;b!==g.keys.length;b++){var M=g.keys.pop(),T=g[M];m.push(_[T]),p.push(y[T]),delete g[M]}},c.prototype.setWorld=function(m){};var v=new i;c.boundingSphereCheck=function(m,p){var g=v;return m.position.vsub(p.position,g),Math.pow(m.shape.boundingSphereRadius+p.shape.boundingSphereRadius,2)>g.norm2()},c.prototype.aabbQuery=function(m,p,g){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(e,n,a){n.exports=c;var r=e("./Broadphase"),i=e("../math/Vec3"),s=e("../shapes/Shape");function c(l,o,u,f,v){r.apply(this),this.nx=u||10,this.ny=f||10,this.nz=v||10,this.aabbMin=l||new i(100,100,100),this.aabbMax=o||new i(-100,-100,-100);var m=this.nx*this.ny*this.nz;if(m<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=m,this.binLengths.length=m;for(var p=0;p<m;p++)this.bins[p]=[],this.binLengths[p]=0}c.prototype=new r,c.prototype.constructor=c;var h=new i;new i,c.prototype.collisionPairs=function(l,o,u){var f=l.numObjects(),v=l.bodies,J=this.aabbMax,k=this.aabbMin,m=this.nx,p=this.ny,g=this.nz,_=p*g,y=g,x=1,b=J.x,I=J.y,G=J.z,M=k.x,T=k.y,C=k.z,F=m/(b-M),V=p/(I-T),z=g/(G-C),U=(b-M)/m,Y=(I-T)/p,tt=(G-C)/g,W=Math.sqrt(U*U+Y*Y+tt*tt)*.5,B=s.types,$=B.SPHERE,X=B.PLANE;B.BOX,B.COMPOUND,B.CONVEXPOLYHEDRON;for(var N=this.bins,D=this.binLengths,R=this.bins.length,L=0;L!==R;L++)D[L]=0;var w=Math.ceil,k=Math.min,J=Math.max;function K(ht,Wt,Bt,Ot,Nt,Ut,Kt){var te=(ht-M)*F|0,ie=(Wt-T)*V|0,Z=(Bt-C)*z|0,st=w((Ot-M)*F),_t=w((Nt-T)*V),Tt=w((Ut-C)*z);te<0?te=0:te>=m&&(te=m-1),ie<0?ie=0:ie>=p&&(ie=p-1),Z<0?Z=0:Z>=g&&(Z=g-1),st<0?st=0:st>=m&&(st=m-1),_t<0?_t=0:_t>=p&&(_t=p-1),Tt<0?Tt=0:Tt>=g&&(Tt=g-1),te*=_,ie*=y,Z*=x,st*=_,_t*=y,Tt*=x;for(var Ft=te;Ft<=st;Ft+=_)for(var ee=ie;ee<=_t;ee+=y)for(var oe=Z;oe<=Tt;oe+=x){var de=Ft+ee+oe;N[de][D[de]++]=Kt}}for(var L=0;L!==f;L++){var H=v[L],Q=H.shape;switch(Q.type){case $:var rt=H.position.x,bt=H.position.y,Mt=H.position.z,Et=Q.radius;K(rt-Et,bt-Et,Mt-Et,rt+Et,bt+Et,Mt+Et,H);break;case X:Q.worldNormalNeedsUpdate&&Q.computeWorldNormal(H.quaternion);var ct=Q.worldNormal,vt=M+U*.5-H.position.x,Ht=T+Y*.5-H.position.y,Pt=C+tt*.5-H.position.z,qt=h;qt.set(vt,Ht,Pt);for(var Rt=0,Zt=0;Rt!==m;Rt++,Zt+=_,qt.y=Ht,qt.x+=U)for(var P=0,E=0;P!==p;P++,E+=y,qt.z=Pt,qt.y+=Y)for(var et=0,ft=0;et!==g;et++,ft+=x,qt.z+=tt)if(qt.dot(ct)<W){var gt=Zt+E+ft;N[gt][D[gt]++]=H}break;default:H.aabbNeedsUpdate&&H.computeAABB(),K(H.aabb.lowerBound.x,H.aabb.lowerBound.y,H.aabb.lowerBound.z,H.aabb.upperBound.x,H.aabb.upperBound.y,H.aabb.upperBound.z,H);break}}for(var L=0;L!==R;L++){var wt=D[L];if(wt>1)for(var Dt=N[L],Rt=0;Rt!==wt;Rt++)for(var H=Dt[Rt],P=0;P!==Rt;P++){var At=Dt[P];this.needBroadphaseCollision(H,At)&&this.intersectionTest(H,At,o,u)}}this.makePairsUnique(o,u)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(e,n,a){n.exports=s;var r=e("./Broadphase"),i=e("./AABB");function s(){r.apply(this)}s.prototype=new r,s.prototype.constructor=s,s.prototype.collisionPairs=function(c,h,l){var o=c.bodies,u=o.length,f,v,m,p;for(f=0;f!==u;f++)for(v=0;v!==f;v++)m=o[f],p=o[v],this.needBroadphaseCollision(m,p)&&this.intersectionTest(m,p,h,l)},new i,s.prototype.aabbQuery=function(c,h,l){l=l||[];for(var o=0;o<c.bodies.length;o++){var u=c.bodies[o];u.aabbNeedsUpdate&&u.computeAABB(),u.aabb.overlaps(h)&&l.push(u)}return l}},{"./AABB":3,"./Broadphase":5}],8:[function(e,n,a){n.exports=r;function r(){this.matrix={}}r.prototype.get=function(i,s){if(i=i.id,s=s.id,s>i){var c=s;s=i,i=c}return i+"-"+s in this.matrix},r.prototype.set=function(i,s,c){if(i=i.id,s=s.id,s>i){var h=s;s=i,i=h}c?this.matrix[i+"-"+s]=!0:delete this.matrix[i+"-"+s]},r.prototype.reset=function(){this.matrix={}},r.prototype.setNumObjects=function(i){}},{}],9:[function(e,n,a){n.exports=o;var r=e("../math/Vec3"),i=e("../math/Quaternion"),s=e("../math/Transform");e("../shapes/ConvexPolyhedron"),e("../shapes/Box");var c=e("../collision/RaycastResult"),h=e("../shapes/Shape"),l=e("../collision/AABB");function o(R,L){this.from=R?R.clone():new r,this.to=L?L.clone():new r,this._direction=new r,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=o.ANY,this.result=new c,this.hasHit=!1,this.callback=function(w){}}o.prototype.constructor=o,o.CLOSEST=1,o.ANY=2,o.ALL=4;var u=new l,f=[];o.prototype.intersectWorld=function(R,L){return this.mode=L.mode||o.ANY,this.result=L.result||new c,this.skipBackfaces=!!L.skipBackfaces,this.collisionFilterMask=typeof L.collisionFilterMask<"u"?L.collisionFilterMask:-1,this.collisionFilterGroup=typeof L.collisionFilterGroup<"u"?L.collisionFilterGroup:-1,L.from&&this.from.copy(L.from),L.to&&this.to.copy(L.to),this.callback=L.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(u),f.length=0,R.broadphase.aabbQuery(R,u,f),this.intersectBodies(f),this.hasHit};var v=new r,m=new r;o.pointInTriangle=p;function p(R,L,w,k){k.vsub(L,X),w.vsub(L,v),R.vsub(L,m);var J=X.dot(X),K=X.dot(v),H=X.dot(m),Q=v.dot(v),rt=v.dot(m),bt,Mt;return(bt=Q*H-K*rt)>=0&&(Mt=J*rt-K*H)>=0&&bt+Mt<J*Q-K*K}var g=new r,_=new i;o.prototype.intersectBody=function(R,L){L&&(this.result=L,this._updateDirection());var w=this.checkCollisionResponse;if(!(w&&!R.collisionResponse)&&!(!(this.collisionFilterGroup&R.collisionFilterMask)||!(R.collisionFilterGroup&this.collisionFilterMask)))for(var k=g,J=_,K=0,H=R.shapes.length;K<H;K++){var Q=R.shapes[K];if(!(w&&!Q.collisionResponse)&&(R.quaternion.mult(R.shapeOrientations[K],J),R.quaternion.vmult(R.shapeOffsets[K],k),k.vadd(R.position,k),this.intersectShape(Q,J,k,R),this.result._shouldStop))break}},o.prototype.intersectBodies=function(R,L){L&&(this.result=L,this._updateDirection());for(var w=0,k=R.length;!this.result._shouldStop&&w<k;w++)this.intersectBody(R[w])},o.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},o.prototype.intersectShape=function(R,L,w,k){var J=this.from,K=D(J,this._direction,w);if(!(K>R.boundingSphereRadius)){var H=this[R.type];H&&H.call(this,R,L,w,k)}},new r,new r;var y=new r,x=new r,b=new r,I=new r;new r,new c,o.prototype.intersectBox=function(R,L,w,k){return this.intersectConvex(R.convexPolyhedronRepresentation,L,w,k)},o.prototype[h.types.BOX]=o.prototype.intersectBox,o.prototype.intersectPlane=function(R,L,w,k){var J=this.from,K=this.to,H=this._direction,Q=new r(0,0,1);L.vmult(Q,Q);var rt=new r;J.vsub(w,rt);var bt=rt.dot(Q);K.vsub(w,rt);var Mt=rt.dot(Q);if(!(bt*Mt>0)&&!(J.distanceTo(K)<bt)){var Et=Q.dot(H);if(!(Math.abs(Et)<this.precision)){var ct=new r,vt=new r,Ht=new r;J.vsub(w,ct);var Pt=-Q.dot(ct)/Et;H.scale(Pt,vt),J.vadd(vt,Ht),this.reportIntersection(Q,Ht,R,k,-1)}}},o.prototype[h.types.PLANE]=o.prototype.intersectPlane,o.prototype.getAABB=function(R){var L=this.to,w=this.from;R.lowerBound.x=Math.min(L.x,w.x),R.lowerBound.y=Math.min(L.y,w.y),R.lowerBound.z=Math.min(L.z,w.z),R.upperBound.x=Math.max(L.x,w.x),R.upperBound.y=Math.max(L.y,w.y),R.upperBound.z=Math.max(L.z,w.z)};var G={faceList:[0]};o.prototype.intersectHeightfield=function(R,L,w,k){R.data,R.elementSize;var J=new r,K=new o(this.from,this.to);s.pointToLocalFrame(w,L,K.from,K.from),s.pointToLocalFrame(w,L,K.to,K.to);var H=[],Q=null,rt=null,bt=null,Mt=null,Et=R.getIndexOfPosition(K.from.x,K.from.y,H,!1);if(Et&&(Q=H[0],rt=H[1],bt=H[0],Mt=H[1]),Et=R.getIndexOfPosition(K.to.x,K.to.y,H,!1),Et&&((Q===null||H[0]<Q)&&(Q=H[0]),(bt===null||H[0]>bt)&&(bt=H[0]),(rt===null||H[1]<rt)&&(rt=H[1]),(Mt===null||H[1]>Mt)&&(Mt=H[1])),Q!==null){var ct=[];R.getRectMinMax(Q,rt,bt,Mt,ct);for(var vt=Q;vt<=bt;vt++)for(var Ht=rt;Ht<=Mt;Ht++){if(this.result._shouldStop||(R.getConvexTrianglePillar(vt,Ht,!1),s.pointToWorldFrame(w,L,R.pillarOffset,J),this.intersectConvex(R.pillarConvex,L,J,k,G),this.result._shouldStop))return;R.getConvexTrianglePillar(vt,Ht,!0),s.pointToWorldFrame(w,L,R.pillarOffset,J),this.intersectConvex(R.pillarConvex,L,J,k,G)}}},o.prototype[h.types.HEIGHTFIELD]=o.prototype.intersectHeightfield;var M=new r,T=new r;o.prototype.intersectSphere=function(R,L,w,k){var J=this.from,K=this.to,H=R.radius,Q=Math.pow(K.x-J.x,2)+Math.pow(K.y-J.y,2)+Math.pow(K.z-J.z,2),rt=2*((K.x-J.x)*(J.x-w.x)+(K.y-J.y)*(J.y-w.y)+(K.z-J.z)*(J.z-w.z)),bt=Math.pow(J.x-w.x,2)+Math.pow(J.y-w.y,2)+Math.pow(J.z-w.z,2)-Math.pow(H,2),Mt=Math.pow(rt,2)-4*Q*bt,Et=M,ct=T;if(!(Mt<0))if(Mt===0)J.lerp(K,Mt,Et),Et.vsub(w,ct),ct.normalize(),this.reportIntersection(ct,Et,R,k,-1);else{var vt=(-rt-Math.sqrt(Mt))/(2*Q),Ht=(-rt+Math.sqrt(Mt))/(2*Q);if(vt>=0&&vt<=1&&(J.lerp(K,vt,Et),Et.vsub(w,ct),ct.normalize(),this.reportIntersection(ct,Et,R,k,-1)),this.result._shouldStop)return;Ht>=0&&Ht<=1&&(J.lerp(K,Ht,Et),Et.vsub(w,ct),ct.normalize(),this.reportIntersection(ct,Et,R,k,-1))}},o.prototype[h.types.SPHERE]=o.prototype.intersectSphere;var C=new r;new r,new r;var F=new r;o.prototype.intersectConvex=function(L,w,k,J,K){for(var H=C,Q=F,rt=K&&K.faceList||null,bt=L.faces,Mt=L.vertices,Et=L.faceNormals,ct=this._direction,vt=this.from,Ht=this.to,Pt=vt.distanceTo(Ht),qt=rt?rt.length:bt.length,Rt=this.result,Zt=0;!Rt._shouldStop&&Zt<qt;Zt++){var P=rt?rt[Zt]:Zt,E=bt[P],et=Et[P],ft=w,gt=k;Q.copy(Mt[E[0]]),ft.vmult(Q,Q),Q.vadd(gt,Q),Q.vsub(vt,Q),ft.vmult(et,H);var wt=ct.dot(H);if(!(Math.abs(wt)<this.precision)){var Dt=H.dot(Q)/wt;if(!(Dt<0)){ct.mult(Dt,y),y.vadd(vt,y),x.copy(Mt[E[0]]),ft.vmult(x,x),gt.vadd(x,x);for(var At=1;!Rt._shouldStop&&At<E.length-1;At++){b.copy(Mt[E[At]]),I.copy(Mt[E[At+1]]),ft.vmult(b,b),ft.vmult(I,I),gt.vadd(b,b),gt.vadd(I,I);var ht=y.distanceTo(vt);!(p(y,x,b,I)||p(y,b,x,I))||ht>Pt||this.reportIntersection(H,y,L,J,P)}}}}},o.prototype[h.types.CONVEXPOLYHEDRON]=o.prototype.intersectConvex;var V=new r,z=new r,U=new r,Y=new r,tt=new r,W=new r;new l;var B=[],$=new s;o.prototype.intersectTrimesh=function(L,w,k,J,K){var H=V,Q=B,rt=$,bt=F,Mt=z,Et=U,ct=Y,vt=W,Ht=tt;K&&K.faceList;var Pt=L.indices;L.vertices,L.faceNormals;var qt=this.from,Rt=this.to,Zt=this._direction;rt.position.copy(k),rt.quaternion.copy(w),s.vectorToLocalFrame(k,w,Zt,Mt),s.pointToLocalFrame(k,w,qt,Et),s.pointToLocalFrame(k,w,Rt,ct);var P=Et.distanceSquared(ct);L.tree.rayQuery(this,rt,Q);for(var E=0,et=Q.length;!this.result._shouldStop&&E!==et;E++){var ft=Q[E];L.getNormal(ft,H),L.getVertex(Pt[ft*3],x),x.vsub(Et,bt);var gt=Mt.dot(H),wt=H.dot(bt)/gt;if(!(wt<0)){Mt.scale(wt,y),y.vadd(Et,y),L.getVertex(Pt[ft*3+1],b),L.getVertex(Pt[ft*3+2],I);var Dt=y.distanceSquared(Et);!(p(y,b,x,I)||p(y,x,b,I))||Dt>P||(s.vectorToWorldFrame(w,H,Ht),s.pointToWorldFrame(k,w,y,vt),this.reportIntersection(Ht,vt,L,J,ft))}}Q.length=0},o.prototype[h.types.TRIMESH]=o.prototype.intersectTrimesh,o.prototype.reportIntersection=function(R,L,w,k,J){var K=this.from,H=this.to,Q=K.distanceTo(L),rt=this.result;if(!(this.skipBackfaces&&R.dot(this._direction)>0))switch(rt.hitFaceIndex=typeof J<"u"?J:-1,this.mode){case o.ALL:this.hasHit=!0,rt.set(K,H,R,L,w,k,Q),rt.hasHit=!0,this.callback(rt);break;case o.CLOSEST:(Q<rt.distance||!rt.hasHit)&&(this.hasHit=!0,rt.hasHit=!0,rt.set(K,H,R,L,w,k,Q));break;case o.ANY:this.hasHit=!0,rt.hasHit=!0,rt.set(K,H,R,L,w,k,Q),rt._shouldStop=!0;break}};var X=new r,N=new r;function D(R,L,w){w.vsub(R,X);var k=X.dot(L);L.mult(k,N),N.vadd(R,N);var J=w.distanceTo(N);return J}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(e,n,a){var r=e("../math/Vec3");n.exports=i;function i(){this.rayFromWorld=new r,this.rayToWorld=new r,this.hitNormalWorld=new r,this.hitPointWorld=new r,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}i.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},i.prototype.abort=function(){this._shouldStop=!0},i.prototype.set=function(s,c,h,l,o,u,f){this.rayFromWorld.copy(s),this.rayToWorld.copy(c),this.hitNormalWorld.copy(h),this.hitPointWorld.copy(l),this.shape=o,this.body=u,this.distance=f}},{"../math/Vec3":30}],11:[function(e,n,a){e("../shapes/Shape");var r=e("../collision/Broadphase");n.exports=i;function i(s){r.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var c=this.axisList;this._addBodyHandler=function(h){c.push(h.body)},this._removeBodyHandler=function(h){var l=c.indexOf(h.body);l!==-1&&c.splice(l,1)},s&&this.setWorld(s)}i.prototype=new r,i.prototype.setWorld=function(s){this.axisList.length=0;for(var c=0;c<s.bodies.length;c++)this.axisList.push(s.bodies[c]);s.removeEventListener("addBody",this._addBodyHandler),s.removeEventListener("removeBody",this._removeBodyHandler),s.addEventListener("addBody",this._addBodyHandler),s.addEventListener("removeBody",this._removeBodyHandler),this.world=s,this.dirty=!0},i.insertionSortX=function(s){for(var c=1,h=s.length;c<h;c++){for(var l=s[c],o=c-1;o>=0&&!(s[o].aabb.lowerBound.x<=l.aabb.lowerBound.x);o--)s[o+1]=s[o];s[o+1]=l}return s},i.insertionSortY=function(s){for(var c=1,h=s.length;c<h;c++){for(var l=s[c],o=c-1;o>=0&&!(s[o].aabb.lowerBound.y<=l.aabb.lowerBound.y);o--)s[o+1]=s[o];s[o+1]=l}return s},i.insertionSortZ=function(s){for(var c=1,h=s.length;c<h;c++){for(var l=s[c],o=c-1;o>=0&&!(s[o].aabb.lowerBound.z<=l.aabb.lowerBound.z);o--)s[o+1]=s[o];s[o+1]=l}return s},i.prototype.collisionPairs=function(s,c,h){var l=this.axisList,o=l.length,u=this.axisIndex,f,v;for(this.dirty&&(this.sortList(),this.dirty=!1),f=0;f!==o;f++){var m=l[f];for(v=f+1;v<o;v++){var p=l[v];if(this.needBroadphaseCollision(m,p)){if(!i.checkBounds(m,p,u))break;this.intersectionTest(m,p,c,h)}}}},i.prototype.sortList=function(){for(var s=this.axisList,c=this.axisIndex,h=s.length,l=0;l!==h;l++){var o=s[l];o.aabbNeedsUpdate&&o.computeAABB()}c===0?i.insertionSortX(s):c===1?i.insertionSortY(s):c===2&&i.insertionSortZ(s)},i.checkBounds=function(s,c,h){var l,o;h===0?(l=s.position.x,o=c.position.x):h===1?(l=s.position.y,o=c.position.y):h===2&&(l=s.position.z,o=c.position.z);var u=s.boundingRadius,f=c.boundingRadius,v=l+u,m=o-f;return m<v},i.prototype.autoDetectAxis=function(){for(var s=0,c=0,h=0,l=0,o=0,u=0,f=this.axisList,v=f.length,m=1/v,p=0;p!==v;p++){var g=f[p],_=g.position.x;s+=_,c+=_*_;var y=g.position.y;h+=y,l+=y*y;var x=g.position.z;o+=x,u+=x*x}var b=c-s*s*m,I=l-h*h*m,G=u-o*o*m;b>I?b>G?this.axisIndex=0:this.axisIndex=2:I>G?this.axisIndex=1:this.axisIndex=2},i.prototype.aabbQuery=function(s,c,h){h=h||[],this.dirty&&(this.sortList(),this.dirty=!1);var l=this.axisIndex,o="x";l===1&&(o="y"),l===2&&(o="z");var u=this.axisList;c.lowerBound[o],c.upperBound[o];for(var f=0;f<u.length;f++){var v=u[f];v.aabbNeedsUpdate&&v.computeAABB(),v.aabb.overlaps(c)&&h.push(v)}return h}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(e,n,a){n.exports=h,e("./Constraint");var r=e("./PointToPointConstraint"),i=e("../equations/ConeEquation"),s=e("../equations/RotationalEquation");e("../equations/ContactEquation");var c=e("../math/Vec3");function h(l,o,u){u=u||{};var f=typeof u.maxForce<"u"?u.maxForce:1e6,v=u.pivotA?u.pivotA.clone():new c,m=u.pivotB?u.pivotB.clone():new c;this.axisA=u.axisA?u.axisA.clone():new c,this.axisB=u.axisB?u.axisB.clone():new c,r.call(this,l,v,o,m,f),this.collideConnected=!!u.collideConnected,this.angle=typeof u.angle<"u"?u.angle:0;var p=this.coneEquation=new i(l,o,u),g=this.twistEquation=new s(l,o,u);this.twistAngle=typeof u.twistAngle<"u"?u.twistAngle:0,p.maxForce=0,p.minForce=-f,g.maxForce=0,g.minForce=-f,this.equations.push(p,g)}h.prototype=new r,h.constructor=h,new c,new c,h.prototype.update=function(){var l=this.bodyA,o=this.bodyB,u=this.coneEquation,f=this.twistEquation;r.prototype.update.call(this),l.vectorToWorldFrame(this.axisA,u.axisA),o.vectorToWorldFrame(this.axisB,u.axisB),this.axisA.tangents(f.axisA,f.axisA),l.vectorToWorldFrame(f.axisA,f.axisA),this.axisB.tangents(f.axisB,f.axisB),o.vectorToWorldFrame(f.axisB,f.axisB),u.angle=this.angle,f.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(e,n,a){n.exports=i;var r=e("../utils/Utils");function i(s,c,h){h=r.defaults(h,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=s,this.bodyB=c,this.id=i.idCounter++,this.collideConnected=h.collideConnected,h.wakeUpBodies&&(s&&s.wakeUp(),c&&c.wakeUp())}i.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},i.prototype.enable=function(){for(var s=this.equations,c=0;c<s.length;c++)s[c].enabled=!0},i.prototype.disable=function(){for(var s=this.equations,c=0;c<s.length;c++)s[c].enabled=!1},i.idCounter=0},{"../utils/Utils":53}],14:[function(e,n,a){n.exports=s;var r=e("./Constraint"),i=e("../equations/ContactEquation");function s(c,h,l,o){r.call(this,c,h),typeof l>"u"&&(l=c.position.distanceTo(h.position)),typeof o>"u"&&(o=1e6),this.distance=l;var u=this.distanceEquation=new i(c,h);this.equations.push(u),u.minForce=-o,u.maxForce=o}s.prototype=new r,s.prototype.update=function(){var c=this.bodyA,h=this.bodyB,l=this.distanceEquation,o=this.distance*.5,u=l.ni;h.position.vsub(c.position,u),u.normalize(),u.mult(o,l.ri),u.mult(-o,l.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(e,n,a){n.exports=h,e("./Constraint");var r=e("./PointToPointConstraint"),i=e("../equations/RotationalEquation"),s=e("../equations/RotationalMotorEquation");e("../equations/ContactEquation");var c=e("../math/Vec3");function h(u,f,v){v=v||{};var m=typeof v.maxForce<"u"?v.maxForce:1e6,p=v.pivotA?v.pivotA.clone():new c,g=v.pivotB?v.pivotB.clone():new c;r.call(this,u,p,f,g,m);var _=this.axisA=v.axisA?v.axisA.clone():new c(1,0,0);_.normalize();var y=this.axisB=v.axisB?v.axisB.clone():new c(1,0,0);y.normalize();var x=this.rotationalEquation1=new i(u,f,v),b=this.rotationalEquation2=new i(u,f,v),I=this.motorEquation=new s(u,f,m);I.enabled=!1,this.equations.push(x,b,I)}h.prototype=new r,h.constructor=h,h.prototype.enableMotor=function(){this.motorEquation.enabled=!0},h.prototype.disableMotor=function(){this.motorEquation.enabled=!1},h.prototype.setMotorSpeed=function(u){this.motorEquation.targetVelocity=u},h.prototype.setMotorMaxForce=function(u){this.motorEquation.maxForce=u,this.motorEquation.minForce=-u};var l=new c,o=new c;h.prototype.update=function(){var u=this.bodyA,f=this.bodyB,v=this.motorEquation,m=this.rotationalEquation1,p=this.rotationalEquation2,g=l,_=o,y=this.axisA,x=this.axisB;r.prototype.update.call(this),u.quaternion.vmult(y,g),f.quaternion.vmult(x,_),g.tangents(m.axisA,p.axisA),m.axisB.copy(_),p.axisB.copy(_),this.motorEquation.enabled&&(u.quaternion.vmult(this.axisA,v.axisA),f.quaternion.vmult(this.axisB,v.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(e,n,a){n.exports=c,e("./Constraint");var r=e("./PointToPointConstraint"),i=e("../equations/RotationalEquation");e("../equations/RotationalMotorEquation"),e("../equations/ContactEquation");var s=e("../math/Vec3");function c(h,l,o){o=o||{};var u=typeof o.maxForce<"u"?o.maxForce:1e6,f=new s,v=new s,m=new s;h.position.vadd(l.position,m),m.scale(.5,m),l.pointToLocalFrame(m,v),h.pointToLocalFrame(m,f),r.call(this,h,f,l,v,u);var p=this.rotationalEquation1=new i(h,l,o),g=this.rotationalEquation2=new i(h,l,o),_=this.rotationalEquation3=new i(h,l,o);this.equations.push(p,g,_)}c.prototype=new r,c.constructor=c,new s,new s,c.prototype.update=function(){var h=this.bodyA,l=this.bodyB;this.motorEquation;var o=this.rotationalEquation1,u=this.rotationalEquation2,f=this.rotationalEquation3;r.prototype.update.call(this),h.vectorToWorldFrame(s.UNIT_X,o.axisA),l.vectorToWorldFrame(s.UNIT_Y,o.axisB),h.vectorToWorldFrame(s.UNIT_Y,u.axisA),l.vectorToWorldFrame(s.UNIT_Z,u.axisB),h.vectorToWorldFrame(s.UNIT_Z,f.axisA),l.vectorToWorldFrame(s.UNIT_X,f.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(e,n,a){n.exports=c;var r=e("./Constraint"),i=e("../equations/ContactEquation"),s=e("../math/Vec3");function c(h,l,o,u,f){r.call(this,h,o),f=typeof f<"u"?f:1e6,this.pivotA=l?l.clone():new s,this.pivotB=u?u.clone():new s;var v=this.equationX=new i(h,o),m=this.equationY=new i(h,o),p=this.equationZ=new i(h,o);this.equations.push(v,m,p),v.minForce=m.minForce=p.minForce=-f,v.maxForce=m.maxForce=p.maxForce=f,v.ni.set(1,0,0),m.ni.set(0,1,0),p.ni.set(0,0,1)}c.prototype=new r,c.prototype.update=function(){var h=this.bodyA,l=this.bodyB,o=this.equationX,u=this.equationY,f=this.equationZ;h.quaternion.vmult(this.pivotA,o.ri),l.quaternion.vmult(this.pivotB,o.rj),u.ri.copy(o.ri),u.rj.copy(o.rj),f.ri.copy(o.ri),f.rj.copy(o.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(e,n,a){n.exports=s;var r=e("../math/Vec3");e("../math/Mat3");var i=e("./Equation");function s(l,o,u){u=u||{};var f=typeof u.maxForce<"u"?u.maxForce:1e6;i.call(this,l,o,-f,f),this.axisA=u.axisA?u.axisA.clone():new r(1,0,0),this.axisB=u.axisB?u.axisB.clone():new r(0,1,0),this.angle=typeof u.angle<"u"?u.angle:0}s.prototype=new i,s.prototype.constructor=s;var c=new r,h=new r;s.prototype.computeB=function(l){var o=this.a,u=this.b,f=this.axisA,v=this.axisB,m=c,p=h,g=this.jacobianElementA,_=this.jacobianElementB;f.cross(v,m),v.cross(f,p),g.rotational.copy(p),_.rotational.copy(m);var y=Math.cos(this.angle)-f.dot(v),x=this.computeGW(),b=this.computeGiMf(),I=-y*o-x*u-l*b;return I}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(e,n,a){n.exports=s;var r=e("./Equation"),i=e("../math/Vec3");e("../math/Mat3");function s(p,g,_){_=typeof _<"u"?_:1e6,r.call(this,p,g,0,_),this.restitution=0,this.ri=new i,this.rj=new i,this.ni=new i}s.prototype=new r,s.prototype.constructor=s;var c=new i,h=new i,l=new i;s.prototype.computeB=function(p){var g=this.a,_=this.b,y=this.bi,x=this.bj,b=this.ri,I=this.rj,G=c,M=h,T=y.velocity,C=y.angularVelocity;y.force,y.torque;var F=x.velocity,V=x.angularVelocity;x.force,x.torque;var z=l,U=this.jacobianElementA,Y=this.jacobianElementB,tt=this.ni;b.cross(tt,G),I.cross(tt,M),tt.negate(U.spatial),G.negate(U.rotational),Y.spatial.copy(tt),Y.rotational.copy(M),z.copy(x.position),z.vadd(I,z),z.vsub(y.position,z),z.vsub(b,z);var W=tt.dot(z),B=this.restitution+1,$=B*F.dot(tt)-B*T.dot(tt)+V.dot(M)-C.dot(G),X=this.computeGiMf(),N=-W*g-$*_-p*X;return N};var o=new i,u=new i,f=new i,v=new i,m=new i;s.prototype.getImpactVelocityAlongNormal=function(){var p=o,g=u,_=f,y=v,x=m;return this.bi.position.vadd(this.ri,_),this.bj.position.vadd(this.rj,y),this.bi.getVelocityAtWorldPoint(_,p),this.bj.getVelocityAtWorldPoint(y,g),p.vsub(g,x),this.ni.dot(x)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(e,n,a){n.exports=s;var r=e("../math/JacobianElement"),i=e("../math/Vec3");function s(m,p,g,_){this.id=s.id++,this.minForce=typeof g>"u"?-1e6:g,this.maxForce=typeof _>"u"?1e6:_,this.bi=m,this.bj=p,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new r,this.jacobianElementB=new r,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}s.prototype.constructor=s,s.id=0,s.prototype.setSpookParams=function(m,p,g){var _=p,y=m,x=g;this.a=4/(x*(1+4*_)),this.b=4*_/(1+4*_),this.eps=4/(x*x*y*(1+4*_))},s.prototype.computeB=function(m,p,g){var _=this.computeGW(),y=this.computeGq(),x=this.computeGiMf();return-y*m-_*p-x*g},s.prototype.computeGq=function(){var m=this.jacobianElementA,p=this.jacobianElementB,g=this.bi,_=this.bj,y=g.position,x=_.position;return m.spatial.dot(y)+p.spatial.dot(x)};var c=new i;s.prototype.computeGW=function(){var m=this.jacobianElementA,p=this.jacobianElementB,g=this.bi,_=this.bj,y=g.velocity,x=_.velocity,b=g.angularVelocity||c,I=_.angularVelocity||c;return m.multiplyVectors(y,b)+p.multiplyVectors(x,I)},s.prototype.computeGWlambda=function(){var m=this.jacobianElementA,p=this.jacobianElementB,g=this.bi,_=this.bj,y=g.vlambda,x=_.vlambda,b=g.wlambda||c,I=_.wlambda||c;return m.multiplyVectors(y,b)+p.multiplyVectors(x,I)};var h=new i,l=new i,o=new i,u=new i;s.prototype.computeGiMf=function(){var m=this.jacobianElementA,p=this.jacobianElementB,g=this.bi,_=this.bj,y=g.force,x=g.torque,b=_.force,I=_.torque,G=g.invMassSolve,M=_.invMassSolve;return g.invInertiaWorldSolve?g.invInertiaWorldSolve.vmult(x,o):o.set(0,0,0),_.invInertiaWorldSolve?_.invInertiaWorldSolve.vmult(I,u):u.set(0,0,0),y.mult(G,h),b.mult(M,l),m.multiplyVectors(h,o)+p.multiplyVectors(l,u)};var f=new i;s.prototype.computeGiMGt=function(){var m=this.jacobianElementA,p=this.jacobianElementB,g=this.bi,_=this.bj,y=g.invMassSolve,x=_.invMassSolve,b=g.invInertiaWorldSolve,I=_.invInertiaWorldSolve,G=y+x;return b&&(b.vmult(m.rotational,f),G+=f.dot(m.rotational)),I&&(I.vmult(p.rotational,f),G+=f.dot(p.rotational)),G};var v=new i;new i,new i,new i,new i,new i,s.prototype.addToWlambda=function(m){var p=this.jacobianElementA,g=this.jacobianElementB,_=this.bi,y=this.bj,x=v;p.spatial.mult(_.invMassSolve*m,x),_.vlambda.vadd(x,_.vlambda),g.spatial.mult(y.invMassSolve*m,x),y.vlambda.vadd(x,y.vlambda),_.invInertiaWorldSolve&&(_.invInertiaWorldSolve.vmult(p.rotational,x),x.mult(m,x),_.wlambda.vadd(x,_.wlambda)),y.invInertiaWorldSolve&&(y.invInertiaWorldSolve.vmult(g.rotational,x),x.mult(m,x),y.wlambda.vadd(x,y.wlambda))},s.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(e,n,a){n.exports=s;var r=e("./Equation"),i=e("../math/Vec3");e("../math/Mat3");function s(l,o,u){r.call(this,l,o,-u,u),this.ri=new i,this.rj=new i,this.t=new i}s.prototype=new r,s.prototype.constructor=s;var c=new i,h=new i;s.prototype.computeB=function(l){this.a;var o=this.b;this.bi,this.bj;var u=this.ri,f=this.rj,v=c,m=h,p=this.t;u.cross(p,v),f.cross(p,m);var g=this.jacobianElementA,_=this.jacobianElementB;p.negate(g.spatial),v.negate(g.rotational),_.spatial.copy(p),_.rotational.copy(m);var y=this.computeGW(),x=this.computeGiMf(),b=-y*o-l*x;return b}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(e,n,a){n.exports=s;var r=e("../math/Vec3");e("../math/Mat3");var i=e("./Equation");function s(l,o,u){u=u||{};var f=typeof u.maxForce<"u"?u.maxForce:1e6;i.call(this,l,o,-f,f),this.axisA=u.axisA?u.axisA.clone():new r(1,0,0),this.axisB=u.axisB?u.axisB.clone():new r(0,1,0),this.maxAngle=Math.PI/2}s.prototype=new i,s.prototype.constructor=s;var c=new r,h=new r;s.prototype.computeB=function(l){var o=this.a,u=this.b,f=this.axisA,v=this.axisB,m=c,p=h,g=this.jacobianElementA,_=this.jacobianElementB;f.cross(v,m),v.cross(f,p),g.rotational.copy(p),_.rotational.copy(m);var y=Math.cos(this.maxAngle)-f.dot(v),x=this.computeGW(),b=this.computeGiMf(),I=-y*o-x*u-l*b;return I}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(e,n,a){n.exports=s;var r=e("../math/Vec3");e("../math/Mat3");var i=e("./Equation");function s(c,h,l){l=typeof l<"u"?l:1e6,i.call(this,c,h,-l,l),this.axisA=new r,this.axisB=new r,this.targetVelocity=0}s.prototype=new i,s.prototype.constructor=s,s.prototype.computeB=function(c){this.a;var h=this.b;this.bi,this.bj;var l=this.axisA,o=this.axisB,u=this.jacobianElementA,f=this.jacobianElementB;u.rotational.copy(l),o.negate(f.rotational);var v=this.computeGW()-this.targetVelocity,m=this.computeGiMf(),p=-v*h-c*m;return p}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(e,n,a){var r=e("../utils/Utils");n.exports=i;function i(s,c,h){h=r.defaults(h,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=i.idCounter++,this.materials=[s,c],this.friction=h.friction,this.restitution=h.restitution,this.contactEquationStiffness=h.contactEquationStiffness,this.contactEquationRelaxation=h.contactEquationRelaxation,this.frictionEquationStiffness=h.frictionEquationStiffness,this.frictionEquationRelaxation=h.frictionEquationRelaxation}i.idCounter=0},{"../utils/Utils":53}],25:[function(e,n,a){n.exports=r;function r(i){var s="";i=i||{},typeof i=="string"?(s=i,i={}):typeof i=="object"&&(s=""),this.name=s,this.id=r.idCounter++,this.friction=typeof i.friction<"u"?i.friction:-1,this.restitution=typeof i.restitution<"u"?i.restitution:-1}r.idCounter=0},{}],26:[function(e,n,a){n.exports=i;var r=e("./Vec3");function i(){this.spatial=new r,this.rotational=new r}i.prototype.multiplyElement=function(s){return s.spatial.dot(this.spatial)+s.rotational.dot(this.rotational)},i.prototype.multiplyVectors=function(s,c){return s.dot(this.spatial)+c.dot(this.rotational)}},{"./Vec3":30}],27:[function(e,n,a){n.exports=i;var r=e("./Vec3");function i(s){s?this.elements=s:this.elements=[0,0,0,0,0,0,0,0,0]}i.prototype.identity=function(){var s=this.elements;s[0]=1,s[1]=0,s[2]=0,s[3]=0,s[4]=1,s[5]=0,s[6]=0,s[7]=0,s[8]=1},i.prototype.setZero=function(){var s=this.elements;s[0]=0,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=0,s[6]=0,s[7]=0,s[8]=0},i.prototype.setTrace=function(s){var c=this.elements;c[0]=s.x,c[4]=s.y,c[8]=s.z},i.prototype.getTrace=function(c){var c=c||new r,h=this.elements;c.x=h[0],c.y=h[4],c.z=h[8]},i.prototype.vmult=function(s,c){c=c||new r;var h=this.elements,l=s.x,o=s.y,u=s.z;return c.x=h[0]*l+h[1]*o+h[2]*u,c.y=h[3]*l+h[4]*o+h[5]*u,c.z=h[6]*l+h[7]*o+h[8]*u,c},i.prototype.smult=function(s){for(var c=0;c<this.elements.length;c++)this.elements[c]*=s},i.prototype.mmult=function(s,c){for(var h=c||new i,l=0;l<3;l++)for(var o=0;o<3;o++){for(var u=0,f=0;f<3;f++)u+=s.elements[l+f*3]*this.elements[f+o*3];h.elements[l+o*3]=u}return h},i.prototype.scale=function(s,c){c=c||new i;for(var h=this.elements,l=c.elements,o=0;o!==3;o++)l[3*o+0]=s.x*h[3*o+0],l[3*o+1]=s.y*h[3*o+1],l[3*o+2]=s.z*h[3*o+2];return c},i.prototype.solve=function(s,c){c=c||new r;for(var h=3,l=4,o=[],u=0;u<h*l;u++)o.push(0);var u,f;for(u=0;u<3;u++)for(f=0;f<3;f++)o[u+l*f]=this.elements[u+3*f];o[3+4*0]=s.x,o[3+4*1]=s.y,o[3+4*2]=s.z;var v=3,m=v,p,g=4,_;do{if(u=m-v,o[u+l*u]===0){for(f=u+1;f<m;f++)if(o[u+l*f]!==0){p=g;do _=g-p,o[_+l*u]+=o[_+l*f];while(--p);break}}if(o[u+l*u]!==0)for(f=u+1;f<m;f++){var y=o[u+l*f]/o[u+l*u];p=g;do _=g-p,o[_+l*f]=_<=u?0:o[_+l*f]-o[_+l*u]*y;while(--p)}}while(--v);if(c.z=o[2*l+3]/o[2*l+2],c.y=(o[1*l+3]-o[1*l+2]*c.z)/o[1*l+1],c.x=(o[0*l+3]-o[0*l+2]*c.z-o[0*l+1]*c.y)/o[0*l+0],isNaN(c.x)||isNaN(c.y)||isNaN(c.z)||c.x===1/0||c.y===1/0||c.z===1/0)throw"Could not solve equation! Got x=["+c.toString()+"], b=["+s.toString()+"], A=["+this.toString()+"]";return c},i.prototype.e=function(s,c,h){if(h===void 0)return this.elements[c+3*s];this.elements[c+3*s]=h},i.prototype.copy=function(s){for(var c=0;c<s.elements.length;c++)this.elements[c]=s.elements[c];return this},i.prototype.toString=function(){for(var s="",c=",",h=0;h<9;h++)s+=this.elements[h]+c;return s},i.prototype.reverse=function(s){s=s||new i;for(var c=3,h=6,l=[],o=0;o<c*h;o++)l.push(0);var o,u;for(o=0;o<3;o++)for(u=0;u<3;u++)l[o+h*u]=this.elements[o+3*u];l[3+6*0]=1,l[3+6*1]=0,l[3+6*2]=0,l[4+6*0]=0,l[4+6*1]=1,l[4+6*2]=0,l[5+6*0]=0,l[5+6*1]=0,l[5+6*2]=1;var f=3,v=f,m,p=h,g;do{if(o=v-f,l[o+h*o]===0){for(u=o+1;u<v;u++)if(l[o+h*u]!==0){m=p;do g=p-m,l[g+h*o]+=l[g+h*u];while(--m);break}}if(l[o+h*o]!==0)for(u=o+1;u<v;u++){var _=l[o+h*u]/l[o+h*o];m=p;do g=p-m,l[g+h*u]=g<=o?0:l[g+h*u]-l[g+h*o]*_;while(--m)}}while(--f);o=2;do{u=o-1;do{var _=l[o+h*u]/l[o+h*o];m=h;do g=h-m,l[g+h*u]=l[g+h*u]-l[g+h*o]*_;while(--m)}while(u--)}while(--o);o=2;do{var _=1/l[o+h*o];m=h;do g=h-m,l[g+h*o]=l[g+h*o]*_;while(--m)}while(o--);o=2;do{u=2;do{if(g=l[c+u+h*o],isNaN(g)||g===1/0)throw"Could not reverse! A=["+this.toString()+"]";s.e(o,u,g)}while(u--)}while(o--);return s},i.prototype.setRotationFromQuaternion=function(s){var c=s.x,h=s.y,l=s.z,o=s.w,u=c+c,f=h+h,v=l+l,m=c*u,p=c*f,g=c*v,_=h*f,y=h*v,x=l*v,b=o*u,I=o*f,G=o*v,M=this.elements;return M[3*0+0]=1-(_+x),M[3*0+1]=p-G,M[3*0+2]=g+I,M[3*1+0]=p+G,M[3*1+1]=1-(m+x),M[3*1+2]=y-b,M[3*2+0]=g-I,M[3*2+1]=y+b,M[3*2+2]=1-(m+_),this},i.prototype.transpose=function(s){s=s||new i;for(var c=s.elements,h=this.elements,l=0;l!==3;l++)for(var o=0;o!==3;o++)c[3*l+o]=h[3*o+l];return s}},{"./Vec3":30}],28:[function(e,n,a){n.exports=i;var r=e("./Vec3");function i(u,f,v,m){this.x=u!==void 0?u:0,this.y=f!==void 0?f:0,this.z=v!==void 0?v:0,this.w=m!==void 0?m:1}i.prototype.set=function(u,f,v,m){this.x=u,this.y=f,this.z=v,this.w=m},i.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},i.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},i.prototype.setFromAxisAngle=function(u,f){var v=Math.sin(f*.5);this.x=u.x*v,this.y=u.y*v,this.z=u.z*v,this.w=Math.cos(f*.5)},i.prototype.toAxisAngle=function(u){u=u||new r,this.normalize();var f=2*Math.acos(this.w),v=Math.sqrt(1-this.w*this.w);return v<.001?(u.x=this.x,u.y=this.y,u.z=this.z):(u.x=this.x/v,u.y=this.y/v,u.z=this.z/v),[u,f]};var s=new r,c=new r;i.prototype.setFromVectors=function(u,f){if(u.isAntiparallelTo(f)){var v=s,m=c;u.tangents(v,m),this.setFromAxisAngle(v,Math.PI)}else{var p=u.cross(f);this.x=p.x,this.y=p.y,this.z=p.z,this.w=Math.sqrt(Math.pow(u.norm(),2)*Math.pow(f.norm(),2))+u.dot(f),this.normalize()}};var h=new r,l=new r,o=new r;i.prototype.mult=function(u,f){f=f||new i;var v=this.w,m=h,p=l,g=o;return m.set(this.x,this.y,this.z),p.set(u.x,u.y,u.z),f.w=v*u.w-m.dot(p),m.cross(p,g),f.x=v*p.x+u.w*m.x+g.x,f.y=v*p.y+u.w*m.y+g.y,f.z=v*p.z+u.w*m.z+g.z,f},i.prototype.inverse=function(u){var f=this.x,v=this.y,m=this.z,p=this.w;u=u||new i,this.conjugate(u);var g=1/(f*f+v*v+m*m+p*p);return u.x*=g,u.y*=g,u.z*=g,u.w*=g,u},i.prototype.conjugate=function(u){return u=u||new i,u.x=-this.x,u.y=-this.y,u.z=-this.z,u.w=this.w,u},i.prototype.normalize=function(){var u=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);u===0?(this.x=0,this.y=0,this.z=0,this.w=0):(u=1/u,this.x*=u,this.y*=u,this.z*=u,this.w*=u)},i.prototype.normalizeFast=function(){var u=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;u===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=u,this.y*=u,this.z*=u,this.w*=u)},i.prototype.vmult=function(u,f){f=f||new r;var v=u.x,m=u.y,p=u.z,g=this.x,_=this.y,y=this.z,x=this.w,b=x*v+_*p-y*m,I=x*m+y*v-g*p,G=x*p+g*m-_*v,M=-g*v-_*m-y*p;return f.x=b*x+M*-g+I*-y-G*-_,f.y=I*x+M*-_+G*-g-b*-y,f.z=G*x+M*-y+b*-_-I*-g,f},i.prototype.copy=function(u){return this.x=u.x,this.y=u.y,this.z=u.z,this.w=u.w,this},i.prototype.toEuler=function(u,f){f=f||"YZX";var v,m,p,g=this.x,_=this.y,y=this.z,x=this.w;switch(f){case"YZX":var b=g*_+y*x;if(b>.499&&(v=2*Math.atan2(g,x),m=Math.PI/2,p=0),b<-.499&&(v=-2*Math.atan2(g,x),m=-Math.PI/2,p=0),isNaN(v)){var I=g*g,G=_*_,M=y*y;v=Math.atan2(2*_*x-2*g*y,1-2*G-2*M),m=Math.asin(2*b),p=Math.atan2(2*g*x-2*_*y,1-2*I-2*M)}break;default:throw new Error("Euler order "+f+" not supported yet.")}u.y=v,u.z=m,u.x=p},i.prototype.setFromEuler=function(u,f,v,m){m=m||"XYZ";var p=Math.cos(u/2),g=Math.cos(f/2),_=Math.cos(v/2),y=Math.sin(u/2),x=Math.sin(f/2),b=Math.sin(v/2);return m==="XYZ"?(this.x=y*g*_+p*x*b,this.y=p*x*_-y*g*b,this.z=p*g*b+y*x*_,this.w=p*g*_-y*x*b):m==="YXZ"?(this.x=y*g*_+p*x*b,this.y=p*x*_-y*g*b,this.z=p*g*b-y*x*_,this.w=p*g*_+y*x*b):m==="ZXY"?(this.x=y*g*_-p*x*b,this.y=p*x*_+y*g*b,this.z=p*g*b+y*x*_,this.w=p*g*_-y*x*b):m==="ZYX"?(this.x=y*g*_-p*x*b,this.y=p*x*_+y*g*b,this.z=p*g*b-y*x*_,this.w=p*g*_+y*x*b):m==="YZX"?(this.x=y*g*_+p*x*b,this.y=p*x*_+y*g*b,this.z=p*g*b-y*x*_,this.w=p*g*_-y*x*b):m==="XZY"&&(this.x=y*g*_-p*x*b,this.y=p*x*_-y*g*b,this.z=p*g*b+y*x*_,this.w=p*g*_+y*x*b),this},i.prototype.clone=function(){return new i(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(e,n,a){var r=e("./Vec3"),i=e("./Quaternion");n.exports=s;function s(h){h=h||{},this.position=new r,h.position&&this.position.copy(h.position),this.quaternion=new i,h.quaternion&&this.quaternion.copy(h.quaternion)}var c=new i;s.pointToLocalFrame=function(h,l,o,f){var f=f||new r;return o.vsub(h,f),l.conjugate(c),c.vmult(f,f),f},s.prototype.pointToLocal=function(h,l){return s.pointToLocalFrame(this.position,this.quaternion,h,l)},s.pointToWorldFrame=function(h,l,o,f){var f=f||new r;return l.vmult(o,f),f.vadd(h,f),f},s.prototype.pointToWorld=function(h,l){return s.pointToWorldFrame(this.position,this.quaternion,h,l)},s.prototype.vectorToWorldFrame=function(h,o){var o=o||new r;return this.quaternion.vmult(h,o),o},s.vectorToWorldFrame=function(h,l,o){return h.vmult(l,o),o},s.vectorToLocalFrame=function(h,l,o,f){var f=f||new r;return l.w*=-1,l.vmult(o,f),l.w*=-1,f}},{"./Quaternion":28,"./Vec3":30}],30:[function(e,n,a){n.exports=i;var r=e("./Mat3");function i(l,o,u){this.x=l||0,this.y=o||0,this.z=u||0}i.ZERO=new i(0,0,0),i.UNIT_X=new i(1,0,0),i.UNIT_Y=new i(0,1,0),i.UNIT_Z=new i(0,0,1),i.prototype.cross=function(l,o){var u=l.x,f=l.y,v=l.z,m=this.x,p=this.y,g=this.z;return o=o||new i,o.x=p*v-g*f,o.y=g*u-m*v,o.z=m*f-p*u,o},i.prototype.set=function(l,o,u){return this.x=l,this.y=o,this.z=u,this},i.prototype.setZero=function(){this.x=this.y=this.z=0},i.prototype.vadd=function(l,o){if(o)o.x=l.x+this.x,o.y=l.y+this.y,o.z=l.z+this.z;else return new i(this.x+l.x,this.y+l.y,this.z+l.z)},i.prototype.vsub=function(l,o){if(o)o.x=this.x-l.x,o.y=this.y-l.y,o.z=this.z-l.z;else return new i(this.x-l.x,this.y-l.y,this.z-l.z)},i.prototype.crossmat=function(){return new r([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},i.prototype.normalize=function(){var l=this.x,o=this.y,u=this.z,f=Math.sqrt(l*l+o*o+u*u);if(f>0){var v=1/f;this.x*=v,this.y*=v,this.z*=v}else this.x=0,this.y=0,this.z=0;return f},i.prototype.unit=function(l){l=l||new i;var o=this.x,u=this.y,f=this.z,v=Math.sqrt(o*o+u*u+f*f);return v>0?(v=1/v,l.x=o*v,l.y=u*v,l.z=f*v):(l.x=1,l.y=0,l.z=0),l},i.prototype.norm=function(){var l=this.x,o=this.y,u=this.z;return Math.sqrt(l*l+o*o+u*u)},i.prototype.length=i.prototype.norm,i.prototype.norm2=function(){return this.dot(this)},i.prototype.lengthSquared=i.prototype.norm2,i.prototype.distanceTo=function(l){var o=this.x,u=this.y,f=this.z,v=l.x,m=l.y,p=l.z;return Math.sqrt((v-o)*(v-o)+(m-u)*(m-u)+(p-f)*(p-f))},i.prototype.distanceSquared=function(l){var o=this.x,u=this.y,f=this.z,v=l.x,m=l.y,p=l.z;return(v-o)*(v-o)+(m-u)*(m-u)+(p-f)*(p-f)},i.prototype.mult=function(l,o){o=o||new i;var u=this.x,f=this.y,v=this.z;return o.x=l*u,o.y=l*f,o.z=l*v,o},i.prototype.scale=i.prototype.mult,i.prototype.dot=function(l){return this.x*l.x+this.y*l.y+this.z*l.z},i.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},i.prototype.negate=function(l){return l=l||new i,l.x=-this.x,l.y=-this.y,l.z=-this.z,l};var s=new i,c=new i;i.prototype.tangents=function(l,o){var u=this.norm();if(u>0){var f=s,v=1/u;f.set(this.x*v,this.y*v,this.z*v);var m=c;Math.abs(f.x)<.9?(m.set(1,0,0),f.cross(m,l)):(m.set(0,1,0),f.cross(m,l)),f.cross(l,o)}else l.set(1,0,0),o.set(0,1,0)},i.prototype.toString=function(){return this.x+","+this.y+","+this.z},i.prototype.toArray=function(){return[this.x,this.y,this.z]},i.prototype.copy=function(l){return this.x=l.x,this.y=l.y,this.z=l.z,this},i.prototype.lerp=function(l,o,u){var f=this.x,v=this.y,m=this.z;u.x=f+(l.x-f)*o,u.y=v+(l.y-v)*o,u.z=m+(l.z-m)*o},i.prototype.almostEquals=function(l,o){return o===void 0&&(o=1e-6),!(Math.abs(this.x-l.x)>o||Math.abs(this.y-l.y)>o||Math.abs(this.z-l.z)>o)},i.prototype.almostZero=function(l){return l===void 0&&(l=1e-6),!(Math.abs(this.x)>l||Math.abs(this.y)>l||Math.abs(this.z)>l)};var h=new i;i.prototype.isAntiparallelTo=function(l,o){return this.negate(h),h.almostEquals(l,o)},i.prototype.clone=function(){return new i(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(e,n,a){n.exports=o;var r=e("../utils/EventTarget");e("../shapes/Shape");var i=e("../math/Vec3"),s=e("../math/Mat3"),c=e("../math/Quaternion");e("../material/Material");var h=e("../collision/AABB"),l=e("../shapes/Box");function o(F){F=F||{},r.apply(this),this.id=o.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new i,this.collisionFilterGroup=typeof F.collisionFilterGroup=="number"?F.collisionFilterGroup:1,this.collisionFilterMask=typeof F.collisionFilterMask=="number"?F.collisionFilterMask:1,this.collisionResponse=!0,this.position=new i,F.position&&this.position.copy(F.position),this.previousPosition=new i,this.initPosition=new i,this.velocity=new i,F.velocity&&this.velocity.copy(F.velocity),this.initVelocity=new i,this.force=new i;var V=typeof F.mass=="number"?F.mass:0;this.mass=V,this.invMass=V>0?1/V:0,this.material=F.material||null,this.linearDamping=typeof F.linearDamping=="number"?F.linearDamping:.01,this.type=V<=0?o.STATIC:o.DYNAMIC,typeof F.type==typeof o.STATIC&&(this.type=F.type),this.allowSleep=typeof F.allowSleep<"u"?F.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof F.sleepSpeedLimit<"u"?F.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof F.sleepTimeLimit<"u"?F.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new i,this.quaternion=new c,F.quaternion&&this.quaternion.copy(F.quaternion),this.initQuaternion=new c,this.angularVelocity=new i,F.angularVelocity&&this.angularVelocity.copy(F.angularVelocity),this.initAngularVelocity=new i,this.interpolatedPosition=new i,this.interpolatedQuaternion=new c,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new i,this.invInertia=new i,this.invInertiaWorld=new s,this.invMassSolve=0,this.invInertiaSolve=new i,this.invInertiaWorldSolve=new s,this.fixedRotation=typeof F.fixedRotation<"u"?F.fixedRotation:!1,this.angularDamping=typeof F.angularDamping<"u"?F.angularDamping:.01,this.aabb=new h,this.aabbNeedsUpdate=!0,this.wlambda=new i,F.shape&&this.addShape(F.shape),this.updateMassProperties()}o.prototype=new r,o.prototype.constructor=o,o.DYNAMIC=1,o.STATIC=2,o.KINEMATIC=4,o.AWAKE=0,o.SLEEPY=1,o.SLEEPING=2,o.idCounter=0,o.prototype.wakeUp=function(){var F=this.sleepState;this.sleepState=0,F===o.SLEEPING&&this.dispatchEvent({type:"wakeup"})},o.prototype.sleep=function(){this.sleepState=o.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},o.sleepyEvent={type:"sleepy"},o.sleepEvent={type:"sleep"},o.prototype.sleepTick=function(F){if(this.allowSleep){var V=this.sleepState,z=this.velocity.norm2()+this.angularVelocity.norm2(),U=Math.pow(this.sleepSpeedLimit,2);V===o.AWAKE&&z<U?(this.sleepState=o.SLEEPY,this.timeLastSleepy=F,this.dispatchEvent(o.sleepyEvent)):V===o.SLEEPY&&z>U?this.wakeUp():V===o.SLEEPY&&F-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(o.sleepEvent))}},o.prototype.updateSolveMassProperties=function(){this.sleepState===o.SLEEPING||this.type===o.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},o.prototype.pointToLocalFrame=function(F,z){var z=z||new i;return F.vsub(this.position,z),this.quaternion.conjugate().vmult(z,z),z},o.prototype.vectorToLocalFrame=function(F,z){var z=z||new i;return this.quaternion.conjugate().vmult(F,z),z},o.prototype.pointToWorldFrame=function(F,z){var z=z||new i;return this.quaternion.vmult(F,z),z.vadd(this.position,z),z},o.prototype.vectorToWorldFrame=function(F,z){var z=z||new i;return this.quaternion.vmult(F,z),z};var u=new i,f=new c;o.prototype.addShape=function(F,V,z){var U=new i,Y=new c;return V&&U.copy(V),z&&Y.copy(z),this.shapes.push(F),this.shapeOffsets.push(U),this.shapeOrientations.push(Y),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},o.prototype.updateBoundingRadius=function(){for(var F=this.shapes,V=this.shapeOffsets,z=F.length,U=0,Y=0;Y!==z;Y++){var tt=F[Y];tt.updateBoundingSphereRadius();var W=V[Y].norm(),B=tt.boundingSphereRadius;W+B>U&&(U=W+B)}this.boundingRadius=U};var v=new h;o.prototype.computeAABB=function(){for(var F=this.shapes,V=this.shapeOffsets,z=this.shapeOrientations,U=F.length,Y=u,tt=f,W=this.quaternion,B=this.aabb,$=v,X=0;X!==U;X++){var N=F[X];z[X].mult(W,tt),tt.vmult(V[X],Y),Y.vadd(this.position,Y),N.calculateWorldAABB(Y,tt,$.lowerBound,$.upperBound),X===0?B.copy($):B.extend($)}this.aabbNeedsUpdate=!1};var m=new s,p=new s;new s,o.prototype.updateInertiaWorld=function(F){var V=this.invInertia;if(!(V.x===V.y&&V.y===V.z&&!F)){var z=m,U=p;z.setRotationFromQuaternion(this.quaternion),z.transpose(U),z.scale(V,z),z.mmult(U,this.invInertiaWorld)}};var g=new i,_=new i;o.prototype.applyForce=function(F,V){if(this.type===o.DYNAMIC){var z=g;V.vsub(this.position,z);var U=_;z.cross(F,U),this.force.vadd(F,this.force),this.torque.vadd(U,this.torque)}};var y=new i,x=new i;o.prototype.applyLocalForce=function(F,V){if(this.type===o.DYNAMIC){var z=y,U=x;this.vectorToWorldFrame(F,z),this.pointToWorldFrame(V,U),this.applyForce(z,U)}};var b=new i,I=new i,G=new i;o.prototype.applyImpulse=function(F,V){if(this.type===o.DYNAMIC){var z=b;V.vsub(this.position,z);var U=I;U.copy(F),U.mult(this.invMass,U),this.velocity.vadd(U,this.velocity);var Y=G;z.cross(F,Y),this.invInertiaWorld.vmult(Y,Y),this.angularVelocity.vadd(Y,this.angularVelocity)}};var M=new i,T=new i;o.prototype.applyLocalImpulse=function(F,V){if(this.type===o.DYNAMIC){var z=M,U=T;this.vectorToWorldFrame(F,z),this.pointToWorldFrame(V,U),this.applyImpulse(z,U)}};var C=new i;o.prototype.updateMassProperties=function(){var F=C;this.invMass=this.mass>0?1/this.mass:0;var V=this.inertia,z=this.fixedRotation;this.computeAABB(),F.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),l.calculateInertia(F,this.mass,V),this.invInertia.set(V.x>0&&!z?1/V.x:0,V.y>0&&!z?1/V.y:0,V.z>0&&!z?1/V.z:0),this.updateInertiaWorld(!0)},o.prototype.getVelocityAtWorldPoint=function(F,V){var z=new i;return F.vsub(this.position,z),this.angularVelocity.cross(z,V),this.velocity.vadd(V,V),V}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(e,n,a){e("./Body");var r=e("../math/Vec3"),i=e("../math/Quaternion");e("../collision/RaycastResult");var s=e("../collision/Ray"),c=e("../objects/WheelInfo");n.exports=h;function h(W){this.chassisBody=W.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof W.indexRightAxis<"u"?W.indexRightAxis:1,this.indexForwardAxis=typeof W.indexForwardAxis<"u"?W.indexForwardAxis:0,this.indexUpAxis=typeof W.indexUpAxis<"u"?W.indexUpAxis:2}new r,new r,new r;var l=new r,o=new r,u=new r;new s,h.prototype.addWheel=function(W){W=W||{};var B=new c(W),$=this.wheelInfos.length;return this.wheelInfos.push(B),$},h.prototype.setSteeringValue=function(W,B){var $=this.wheelInfos[B];$.steering=W},new r,h.prototype.applyEngineForce=function(W,B){this.wheelInfos[B].engineForce=W},h.prototype.setBrake=function(W,B){this.wheelInfos[B].brake=W},h.prototype.addToWorld=function(W){this.constraints,W.add(this.chassisBody);var B=this;this.preStepCallback=function(){B.updateVehicle(W.dt)},W.addEventListener("preStep",this.preStepCallback),this.world=W},h.prototype.getVehicleAxisWorld=function(W,B){B.set(W===0?1:0,W===1?1:0,W===2?1:0),this.chassisBody.vectorToWorldFrame(B,B)},h.prototype.updateVehicle=function(W){for(var B=this.wheelInfos,$=B.length,X=this.chassisBody,N=0;N<$;N++)this.updateWheelTransform(N);this.currentVehicleSpeedKmHour=3.6*X.velocity.norm();var D=new r;this.getVehicleAxisWorld(this.indexForwardAxis,D),D.dot(X.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var N=0;N<$;N++)this.castRay(B[N]);this.updateSuspension(W);for(var R=new r,L=new r,N=0;N<$;N++){var w=B[N],k=w.suspensionForce;k>w.maxSuspensionForce&&(k=w.maxSuspensionForce),w.raycastResult.hitNormalWorld.scale(k*W,R),w.raycastResult.hitPointWorld.vsub(X.position,L),X.applyImpulse(R,w.raycastResult.hitPointWorld)}this.updateFriction(W);var J=new r,K=new r,H=new r;for(N=0;N<$;N++){var w=B[N];X.getVelocityAtWorldPoint(w.chassisConnectionPointWorld,H);var Q=1;switch(this.indexUpAxis){case 1:Q=-1;break}if(w.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,K);var rt=K.dot(w.raycastResult.hitNormalWorld);w.raycastResult.hitNormalWorld.scale(rt,J),K.vsub(J,K);var bt=K.dot(H);w.deltaRotation=Q*bt*W/w.radius}(w.sliding||!w.isInContact)&&w.engineForce!==0&&w.useCustomSlidingRotationalSpeed&&(w.deltaRotation=(w.engineForce>0?1:-1)*w.customSlidingRotationalSpeed*W),Math.abs(w.brake)>Math.abs(w.engineForce)&&(w.deltaRotation=0),w.rotation+=w.deltaRotation,w.deltaRotation*=.99}},h.prototype.updateSuspension=function(W){for(var B=this.chassisBody,$=B.mass,X=this.wheelInfos,N=X.length,D=0;D<N;D++){var R=X[D];if(R.isInContact){var L,w=R.suspensionRestLength,k=R.suspensionLength,J=w-k;L=R.suspensionStiffness*J*R.clippedInvContactDotSuspension;var K=R.suspensionRelativeVelocity,H;K<0?H=R.dampingCompression:H=R.dampingRelaxation,L-=H*K,R.suspensionForce=L*$,R.suspensionForce<0&&(R.suspensionForce=0)}else R.suspensionForce=0}},h.prototype.removeFromWorld=function(W){this.constraints,W.remove(this.chassisBody),W.removeEventListener("preStep",this.preStepCallback),this.world=null};var f=new r,v=new r;h.prototype.castRay=function(W){var B=f,$=v;this.updateWheelTransformWorld(W);var X=this.chassisBody,N=-1,D=W.suspensionRestLength+W.radius;W.directionWorld.scale(D,B);var R=W.chassisConnectionPointWorld;R.vadd(B,$);var L=W.raycastResult;L.reset();var w=X.collisionResponse;X.collisionResponse=!1,this.world.rayTest(R,$,L),X.collisionResponse=w;var k=L.body;if(W.raycastResult.groundObject=0,k){N=L.distance,W.raycastResult.hitNormalWorld=L.hitNormalWorld,W.isInContact=!0;var J=L.distance;W.suspensionLength=J-W.radius;var K=W.suspensionRestLength-W.maxSuspensionTravel,H=W.suspensionRestLength+W.maxSuspensionTravel;W.suspensionLength<K&&(W.suspensionLength=K),W.suspensionLength>H&&(W.suspensionLength=H,W.raycastResult.reset());var Q=W.raycastResult.hitNormalWorld.dot(W.directionWorld),rt=new r;X.getVelocityAtWorldPoint(W.raycastResult.hitPointWorld,rt);var bt=W.raycastResult.hitNormalWorld.dot(rt);if(Q>=-.1)W.suspensionRelativeVelocity=0,W.clippedInvContactDotSuspension=1/.1;else{var Mt=-1/Q;W.suspensionRelativeVelocity=bt*Mt,W.clippedInvContactDotSuspension=Mt}}else W.suspensionLength=W.suspensionRestLength+0*W.maxSuspensionTravel,W.suspensionRelativeVelocity=0,W.directionWorld.scale(-1,W.raycastResult.hitNormalWorld),W.clippedInvContactDotSuspension=1;return N},h.prototype.updateWheelTransformWorld=function(W){W.isInContact=!1;var B=this.chassisBody;B.pointToWorldFrame(W.chassisConnectionPointLocal,W.chassisConnectionPointWorld),B.vectorToWorldFrame(W.directionLocal,W.directionWorld),B.vectorToWorldFrame(W.axleLocal,W.axleWorld)},h.prototype.updateWheelTransform=function(W){var B=l,$=o,X=u,N=this.wheelInfos[W];this.updateWheelTransformWorld(N),N.directionLocal.scale(-1,B),$.copy(N.axleLocal),B.cross($,X),X.normalize(),$.normalize();var D=N.steering,R=new i;R.setFromAxisAngle(B,D);var L=new i;L.setFromAxisAngle($,N.rotation);var w=N.worldTransform.quaternion;this.chassisBody.quaternion.mult(R,w),w.mult(L,w),w.normalize();var k=N.worldTransform.position;k.copy(N.directionWorld),k.scale(N.suspensionLength,k),k.vadd(N.chassisConnectionPointWorld,k)};var m=[new r(1,0,0),new r(0,1,0),new r(0,0,1)];h.prototype.getWheelTransformWorld=function(W){return this.wheelInfos[W].worldTransform};var p=new r,g=[],_=[],y=1;h.prototype.updateFriction=function(W){for(var B=p,$=this.wheelInfos,X=$.length,N=this.chassisBody,D=_,R=g,L=0;L<X;L++){var w=$[L],k=w.raycastResult.body;w.sideImpulse=0,w.forwardImpulse=0,D[L]||(D[L]=new r),R[L]||(R[L]=new r)}for(var L=0;L<X;L++){var w=$[L],k=w.raycastResult.body;if(k){var J=R[L],K=this.getWheelTransformWorld(L);K.vectorToWorldFrame(m[this.indexRightAxis],J);var H=w.raycastResult.hitNormalWorld,Q=J.dot(H);H.scale(Q,B),J.vsub(B,J),J.normalize(),H.cross(J,D[L]),D[L].normalize(),w.sideImpulse=tt(N,w.raycastResult.hitPointWorld,k,w.raycastResult.hitPointWorld,J),w.sideImpulse*=y}}var rt=1,bt=.5;this.sliding=!1;for(var L=0;L<X;L++){var w=$[L],k=w.raycastResult.body,Mt=0;if(w.slipInfo=1,k){var Et=0,ct=w.brake?w.brake:Et;Mt=G(N,k,w.raycastResult.hitPointWorld,D[L],ct),Mt+=w.engineForce*W;var vt=ct/Mt;w.slipInfo*=vt}if(w.forwardImpulse=0,w.skidInfo=1,k){w.skidInfo=1;var Ht=w.suspensionForce*W*w.frictionSlip,Pt=Ht,qt=Ht*Pt;w.forwardImpulse=Mt;var Rt=w.forwardImpulse*bt,Zt=w.sideImpulse*rt,P=Rt*Rt+Zt*Zt;if(w.sliding=!1,P>qt){this.sliding=!0,w.sliding=!0;var vt=Ht/Math.sqrt(P);w.skidInfo*=vt}}}if(this.sliding)for(var L=0;L<X;L++){var w=$[L];w.sideImpulse!==0&&w.skidInfo<1&&(w.forwardImpulse*=w.skidInfo,w.sideImpulse*=w.skidInfo)}for(var L=0;L<X;L++){var w=$[L],E=new r;if(E.copy(w.raycastResult.hitPointWorld),w.forwardImpulse!==0){var et=new r;D[L].scale(w.forwardImpulse,et),N.applyImpulse(et,E)}if(w.sideImpulse!==0){var k=w.raycastResult.body,ft=new r;ft.copy(w.raycastResult.hitPointWorld);var gt=new r;R[L].scale(w.sideImpulse,gt),N.pointToLocalFrame(E,E),E["xyz"[this.indexUpAxis]]*=w.rollInfluence,N.pointToWorldFrame(E,E),N.applyImpulse(gt,E),gt.scale(-1,gt),k.applyImpulse(gt,ft)}}};var x=new r,b=new r,I=new r;function G(W,B,$,X,N){var D=0,R=$,L=x,w=b,k=I;W.getVelocityAtWorldPoint(R,L),B.getVelocityAtWorldPoint(R,w),L.vsub(w,k);var J=X.dot(k),K=V(W,$,X),H=V(B,$,X),Q=1,rt=Q/(K+H);return D=-J*rt,N<D&&(D=N),D<-N&&(D=-N),D}var M=new r,T=new r,C=new r,F=new r;function V(W,B,$){var X=M,N=T,D=C,R=F;return B.vsub(W.position,X),X.cross($,N),W.invInertiaWorld.vmult(N,R),R.cross(X,D),W.invMass+$.dot(D)}var z=new r,U=new r,Y=new r;function tt(W,B,$,X,N,Q){var R=N.norm2();if(R>1.1)return 0;var L=z,w=U,k=Y;W.getVelocityAtWorldPoint(B,L),$.getVelocityAtWorldPoint(X,w),L.vsub(w,k);var J=N.dot(k),K=.2,H=1/(W.invMass+$.invMass),Q=-K*J*H;return Q}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(e,n,a){var r=e("./Body"),i=e("../shapes/Sphere"),s=e("../shapes/Box"),c=e("../math/Vec3"),h=e("../constraints/HingeConstraint");n.exports=l;function l(f){if(this.wheelBodies=[],this.coordinateSystem=typeof f.coordinateSystem>"u"?new c(1,2,3):f.coordinateSystem.clone(),this.chassisBody=f.chassisBody,!this.chassisBody){var v=new s(new c(5,2,.5));this.chassisBody=new r(1,v)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}l.prototype.addWheel=function(f){f=f||{};var v=f.body;v||(v=new r(1,new i(1.2))),this.wheelBodies.push(v),this.wheelForces.push(0),new c;var m=typeof f.position<"u"?f.position.clone():new c,p=new c;this.chassisBody.pointToWorldFrame(m,p),v.position.set(p.x,p.y,p.z);var g=typeof f.axis<"u"?f.axis.clone():new c(0,1,0);this.wheelAxes.push(g);var _=new h(this.chassisBody,v,{pivotA:m,axisA:g,pivotB:c.ZERO,axisB:g,collideConnected:!1});return this.constraints.push(_),this.wheelBodies.length-1},l.prototype.setSteeringValue=function(f,v){var m=this.wheelAxes[v],p=Math.cos(f),g=Math.sin(f),_=m.x,y=m.y;this.constraints[v].axisA.set(p*_-g*y,g*_+p*y,0)},l.prototype.setMotorSpeed=function(f,v){var m=this.constraints[v];m.enableMotor(),m.motorTargetVelocity=f},l.prototype.disableMotor=function(f){var v=this.constraints[f];v.disableMotor()};var o=new c;l.prototype.setWheelForce=function(f,v){this.wheelForces[v]=f},l.prototype.applyWheelForce=function(f,v){var m=this.wheelAxes[v],p=this.wheelBodies[v],g=p.torque;m.scale(f,o),p.vectorToWorldFrame(o,o),g.vadd(o,g)},l.prototype.addToWorld=function(f){for(var v=this.constraints,m=this.wheelBodies.concat([this.chassisBody]),p=0;p<m.length;p++)f.add(m[p]);for(var p=0;p<v.length;p++)f.addConstraint(v[p]);f.addEventListener("preStep",this._update.bind(this))},l.prototype._update=function(){for(var f=this.wheelForces,v=0;v<f.length;v++)this.applyWheelForce(f[v],v)},l.prototype.removeFromWorld=function(f){for(var v=this.constraints,m=this.wheelBodies.concat([this.chassisBody]),p=0;p<m.length;p++)f.remove(m[p]);for(var p=0;p<v.length;p++)f.removeConstraint(v[p])};var u=new c;l.prototype.getWheelSpeed=function(f){var v=this.wheelAxes[f],m=this.wheelBodies[f],p=m.angularVelocity;return this.chassisBody.vectorToWorldFrame(v,u),p.dot(u)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(e,n,a){n.exports=i,e("../shapes/Shape");var r=e("../math/Vec3");e("../math/Quaternion"),e("../shapes/Particle"),e("../objects/Body"),e("../material/Material");function i(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}i.prototype.add=function(v){this.particles.push(v),this.neighbors.length<this.particles.length&&this.neighbors.push([])},i.prototype.remove=function(v){var m=this.particles.indexOf(v);m!==-1&&(this.particles.splice(m,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var s=new r;i.prototype.getNeighbors=function(v,m){for(var p=this.particles.length,g=v.id,_=this.smoothingRadius*this.smoothingRadius,y=s,x=0;x!==p;x++){var b=this.particles[x];b.position.vsub(v.position,y),g!==b.id&&y.norm2()<_&&m.push(b)}};var c=new r,h=new r,l=new r,o=new r,u=new r,f=new r;i.prototype.update=function(){for(var v=this.particles.length,m=c,p=this.speedOfSound,g=this.eps,_=0;_!==v;_++){var y=this.particles[_],x=this.neighbors[_];x.length=0,this.getNeighbors(y,x),x.push(this.particles[_]);for(var b=x.length,I=0,G=0;G!==b;G++){y.position.vsub(x[G].position,m);var M=m.norm(),T=this.w(M);I+=x[G].mass*T}this.densities[_]=I,this.pressures[_]=p*p*(this.densities[_]-this.density)}for(var C=h,F=l,V=o,z=u,U=f,_=0;_!==v;_++){var Y=this.particles[_];C.set(0,0,0),F.set(0,0,0);for(var tt,W,x=this.neighbors[_],b=x.length,G=0;G!==b;G++){var B=x[G];Y.position.vsub(B.position,z);var $=z.norm();tt=-B.mass*(this.pressures[_]/(this.densities[_]*this.densities[_]+g)+this.pressures[G]/(this.densities[G]*this.densities[G]+g)),this.gradw(z,V),V.mult(tt,V),C.vadd(V,C),B.velocity.vsub(Y.velocity,U),U.mult(1/(1e-4+this.densities[_]*this.densities[G])*this.viscosity*B.mass,U),W=this.nablaw($),U.mult(W,U),F.vadd(U,F)}F.mult(Y.mass,F),C.mult(Y.mass,C),Y.force.vadd(F,Y.force),Y.force.vadd(C,Y.force)}},i.prototype.w=function(v){var m=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(m,9))*Math.pow(m*m-v*v,3)},i.prototype.gradw=function(v,m){var p=v.norm(),g=this.smoothingRadius;v.mult(945/(32*Math.PI*Math.pow(g,9))*Math.pow(g*g-p*p,2),m)},i.prototype.nablaw=function(v){var m=this.smoothingRadius,p=945/(32*Math.PI*Math.pow(m,9))*(m*m-v*v)*(7*v*v-3*m*m);return p}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(e,n,a){var r=e("../math/Vec3");n.exports=i;function i(_,y,x){x=x||{},this.restLength=typeof x.restLength=="number"?x.restLength:1,this.stiffness=x.stiffness||100,this.damping=x.damping||1,this.bodyA=_,this.bodyB=y,this.localAnchorA=new r,this.localAnchorB=new r,x.localAnchorA&&this.localAnchorA.copy(x.localAnchorA),x.localAnchorB&&this.localAnchorB.copy(x.localAnchorB),x.worldAnchorA&&this.setWorldAnchorA(x.worldAnchorA),x.worldAnchorB&&this.setWorldAnchorB(x.worldAnchorB)}i.prototype.setWorldAnchorA=function(_){this.bodyA.pointToLocalFrame(_,this.localAnchorA)},i.prototype.setWorldAnchorB=function(_){this.bodyB.pointToLocalFrame(_,this.localAnchorB)},i.prototype.getWorldAnchorA=function(_){this.bodyA.pointToWorldFrame(this.localAnchorA,_)},i.prototype.getWorldAnchorB=function(_){this.bodyB.pointToWorldFrame(this.localAnchorB,_)};var s=new r,c=new r,h=new r,l=new r,o=new r,u=new r,f=new r,v=new r,m=new r,p=new r,g=new r;i.prototype.applyForce=function(){var _=this.stiffness,y=this.damping,x=this.restLength,b=this.bodyA,I=this.bodyB,G=s,M=c,T=h,C=l,F=g,V=o,z=u,U=f,Y=v,tt=m,W=p;this.getWorldAnchorA(V),this.getWorldAnchorB(z),V.vsub(b.position,U),z.vsub(I.position,Y),z.vsub(V,G);var B=G.norm();M.copy(G),M.normalize(),I.velocity.vsub(b.velocity,T),I.angularVelocity.cross(Y,F),T.vadd(F,T),b.angularVelocity.cross(U,F),T.vsub(F,T),M.mult(-_*(B-x)-y*T.dot(M),C),b.force.vsub(C,b.force),I.force.vadd(C,I.force),U.cross(C,tt),Y.cross(C,W),b.torque.vsub(tt,b.torque),I.torque.vadd(W,I.torque)}},{"../math/Vec3":30}],36:[function(e,n,a){var r=e("../math/Vec3"),i=e("../math/Transform"),s=e("../collision/RaycastResult"),c=e("../utils/Utils");n.exports=h;function h(u){u=c.defaults(u,{chassisConnectionPointLocal:new r,chassisConnectionPointWorld:new r,directionLocal:new r,directionWorld:new r,axleLocal:new r,axleWorld:new r,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=u.maxSuspensionTravel,this.customSlidingRotationalSpeed=u.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=u.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=u.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=u.chassisConnectionPointWorld.clone(),this.directionLocal=u.directionLocal.clone(),this.directionWorld=u.directionWorld.clone(),this.axleLocal=u.axleLocal.clone(),this.axleWorld=u.axleWorld.clone(),this.suspensionRestLength=u.suspensionRestLength,this.suspensionMaxLength=u.suspensionMaxLength,this.radius=u.radius,this.suspensionStiffness=u.suspensionStiffness,this.dampingCompression=u.dampingCompression,this.dampingRelaxation=u.dampingRelaxation,this.frictionSlip=u.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=u.rollInfluence,this.maxSuspensionForce=u.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=u.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new s,this.worldTransform=new i,this.isInContact=!1}var o=new r,l=new r,o=new r;h.prototype.updateWheel=function(u){var f=this.raycastResult;if(this.isInContact){var v=f.hitNormalWorld.dot(f.directionWorld);f.hitPointWorld.vsub(u.position,l),u.getVelocityAtWorldPoint(l,o);var m=f.hitNormalWorld.dot(o);if(v>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var p=-1/v;this.suspensionRelativeVelocity=m*p,this.clippedInvContactDotSuspension=p}}else f.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,f.directionWorld.scale(-1,f.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(e,n,a){n.exports=c;var r=e("./Shape"),i=e("../math/Vec3"),s=e("./ConvexPolyhedron");function c(o){r.call(this),this.type=r.types.BOX,this.halfExtents=o,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}c.prototype=new r,c.prototype.constructor=c,c.prototype.updateConvexPolyhedronRepresentation=function(){var o=this.halfExtents.x,u=this.halfExtents.y,f=this.halfExtents.z,v=i,m=[new v(-o,-u,-f),new v(o,-u,-f),new v(o,u,-f),new v(-o,u,-f),new v(-o,-u,f),new v(o,-u,f),new v(o,u,f),new v(-o,u,f)],p=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new v(0,0,1),new v(0,1,0),new v(1,0,0);var g=new s(m,p);this.convexPolyhedronRepresentation=g,g.material=this.material},c.prototype.calculateLocalInertia=function(o,u){return u=u||new i,c.calculateInertia(this.halfExtents,o,u),u},c.calculateInertia=function(o,u,f){var v=o;f.x=1/12*u*(2*v.y*2*v.y+2*v.z*2*v.z),f.y=1/12*u*(2*v.x*2*v.x+2*v.z*2*v.z),f.z=1/12*u*(2*v.y*2*v.y+2*v.x*2*v.x)},c.prototype.getSideNormals=function(o,u){var f=o,v=this.halfExtents;if(f[0].set(v.x,0,0),f[1].set(0,v.y,0),f[2].set(0,0,v.z),f[3].set(-v.x,0,0),f[4].set(0,-v.y,0),f[5].set(0,0,-v.z),u!==void 0)for(var m=0;m!==f.length;m++)u.vmult(f[m],f[m]);return f},c.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},c.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var h=new i;new i,c.prototype.forEachWorldCorner=function(o,u,f){for(var v=this.halfExtents,m=[[v.x,v.y,v.z],[-v.x,v.y,v.z],[-v.x,-v.y,v.z],[-v.x,-v.y,-v.z],[v.x,-v.y,-v.z],[v.x,v.y,-v.z],[-v.x,v.y,-v.z],[v.x,-v.y,v.z]],p=0;p<m.length;p++)h.set(m[p][0],m[p][1],m[p][2]),u.vmult(h,h),o.vadd(h,h),f(h.x,h.y,h.z)};var l=[new i,new i,new i,new i,new i,new i,new i,new i];c.prototype.calculateWorldAABB=function(o,u,f,v){var m=this.halfExtents;l[0].set(m.x,m.y,m.z),l[1].set(-m.x,m.y,m.z),l[2].set(-m.x,-m.y,m.z),l[3].set(-m.x,-m.y,-m.z),l[4].set(m.x,-m.y,-m.z),l[5].set(m.x,m.y,-m.z),l[6].set(-m.x,m.y,-m.z),l[7].set(m.x,-m.y,m.z);var p=l[0];u.vmult(p,p),o.vadd(p,p),v.copy(p),f.copy(p);for(var g=1;g<8;g++){var p=l[g];u.vmult(p,p),o.vadd(p,p);var _=p.x,y=p.y,x=p.z;_>v.x&&(v.x=_),y>v.y&&(v.y=y),x>v.z&&(v.z=x),_<f.x&&(f.x=_),y<f.y&&(f.y=y),x<f.z&&(f.z=x)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(e,n,a){n.exports=c;var r=e("./Shape"),i=e("../math/Vec3");e("../math/Quaternion");var s=e("../math/Transform");function c(N,D,R){r.call(this),this.type=r.types.CONVEXPOLYHEDRON,this.vertices=N||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=D||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=R?R.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}c.prototype=new r,c.prototype.constructor=c;var h=new i;c.prototype.computeEdges=function(){var N=this.faces,D=this.vertices;D.length;var R=this.uniqueEdges;R.length=0;for(var L=h,w=0;w!==N.length;w++)for(var k=N[w],J=k.length,K=0;K!==J;K++){var H=(K+1)%J;D[k[K]].vsub(D[k[H]],L),L.normalize();for(var Q=!1,rt=0;rt!==R.length;rt++)if(R[rt].almostEquals(L)||R[rt].almostEquals(L)){Q=!0;break}Q||R.push(L.clone())}},c.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var N=0;N<this.faces.length;N++){for(var D=0;D<this.faces[N].length;D++)if(!this.vertices[this.faces[N][D]])throw new Error("Vertex "+this.faces[N][D]+" not found!");var R=this.faceNormals[N]||new i;this.getFaceNormal(N,R),R.negate(R),this.faceNormals[N]=R;var L=this.vertices[this.faces[N][0]];if(R.dot(L)<0){console.error(".faceNormals["+N+"] = Vec3("+R.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var D=0;D<this.faces[N].length;D++)console.warn(".vertices["+this.faces[N][D]+"] = Vec3("+this.vertices[this.faces[N][D]].toString()+")")}}};var l=new i,o=new i;c.computeNormal=function(N,D,R,L){D.vsub(N,o),R.vsub(D,l),l.cross(o,L),L.isZero()||L.normalize()},c.prototype.getFaceNormal=function(N,D){var R=this.faces[N],L=this.vertices[R[0]],w=this.vertices[R[1]],k=this.vertices[R[2]];return c.computeNormal(L,w,k,D)};var u=new i;c.prototype.clipAgainstHull=function(N,D,R,L,w,k,J,K,H){for(var Q=u,rt=-1,bt=-Number.MAX_VALUE,Mt=0;Mt<R.faces.length;Mt++){Q.copy(R.faceNormals[Mt]),w.vmult(Q,Q);var Et=Q.dot(k);Et>bt&&(bt=Et,rt=Mt)}for(var ct=[],vt=R.faces[rt],Ht=vt.length,Pt=0;Pt<Ht;Pt++){var qt=R.vertices[vt[Pt]],Rt=new i;Rt.copy(qt),w.vmult(Rt,Rt),L.vadd(Rt,Rt),ct.push(Rt)}rt>=0&&this.clipFaceAgainstHull(k,N,D,ct,J,K,H)};var f=new i,v=new i,m=new i,p=new i,g=new i,_=new i;c.prototype.findSeparatingAxis=function(N,D,R,L,w,k,J,K){var H=f,Q=v,rt=m,bt=p,Mt=g,Et=_,ct=Number.MAX_VALUE,vt=this;if(vt.uniqueAxes)for(var Pt=0;Pt!==vt.uniqueAxes.length;Pt++){R.vmult(vt.uniqueAxes[Pt],H);var Rt=vt.testSepAxis(H,N,D,R,L,w);if(Rt===!1)return!1;Rt<ct&&(ct=Rt,k.copy(H))}else for(var Ht=J?J.length:vt.faces.length,Pt=0;Pt<Ht;Pt++){var qt=J?J[Pt]:Pt;H.copy(vt.faceNormals[qt]),R.vmult(H,H);var Rt=vt.testSepAxis(H,N,D,R,L,w);if(Rt===!1)return!1;Rt<ct&&(ct=Rt,k.copy(H))}if(N.uniqueAxes)for(var Pt=0;Pt!==N.uniqueAxes.length;Pt++){w.vmult(N.uniqueAxes[Pt],Q);var Rt=vt.testSepAxis(Q,N,D,R,L,w);if(Rt===!1)return!1;Rt<ct&&(ct=Rt,k.copy(Q))}else for(var Zt=K?K.length:N.faces.length,Pt=0;Pt<Zt;Pt++){var qt=K?K[Pt]:Pt;Q.copy(N.faceNormals[qt]),w.vmult(Q,Q);var Rt=vt.testSepAxis(Q,N,D,R,L,w);if(Rt===!1)return!1;Rt<ct&&(ct=Rt,k.copy(Q))}for(var P=0;P!==vt.uniqueEdges.length;P++){R.vmult(vt.uniqueEdges[P],bt);for(var E=0;E!==N.uniqueEdges.length;E++)if(w.vmult(N.uniqueEdges[E],Mt),bt.cross(Mt,Et),!Et.almostZero()){Et.normalize();var et=vt.testSepAxis(Et,N,D,R,L,w);if(et===!1)return!1;et<ct&&(ct=et,k.copy(Et))}}return L.vsub(D,rt),rt.dot(k)>0&&k.negate(k),!0};var y=[],x=[];c.prototype.testSepAxis=function(N,D,R,L,w,k){var J=this;c.project(J,N,R,L,y),c.project(D,N,w,k,x);var K=y[0],H=y[1],Q=x[0],rt=x[1],bt=K-rt,Mt=Q-H,Et=bt<Mt?bt:Mt;return Et};var b=new i,I=new i;c.prototype.calculateLocalInertia=function(N,D){this.computeLocalAABB(b,I);var R=I.x-b.x,L=I.y-b.y,w=I.z-b.z;D.x=1/12*N*(2*L*2*L+2*w*2*w),D.y=1/12*N*(2*R*2*R+2*w*2*w),D.z=1/12*N*(2*L*2*L+2*R*2*R)},c.prototype.getPlaneConstantOfFace=function(N){var D=this.faces[N],R=this.faceNormals[N],L=this.vertices[D[0]],w=-R.dot(L);return w};var G=new i,M=new i,T=new i,C=new i,F=new i,V=new i,z=new i,U=new i;c.prototype.clipFaceAgainstHull=function(N,D,R,L,w,k,J){for(var K=G,H=M,Q=T,rt=C,bt=F,Mt=V,Et=z,ct=U,vt=this,Ht=[],Pt=L,qt=Ht,Rt=-1,Zt=Number.MAX_VALUE,P=0;P<vt.faces.length;P++){K.copy(vt.faceNormals[P]),R.vmult(K,K);var E=K.dot(N);E<Zt&&(Zt=E,Rt=P)}if(!(Rt<0)){var et=vt.faces[Rt];et.connectedFaces=[];for(var ft=0;ft<vt.faces.length;ft++)for(var gt=0;gt<vt.faces[ft].length;gt++)et.indexOf(vt.faces[ft][gt])!==-1&&ft!==Rt&&et.connectedFaces.indexOf(ft)===-1&&et.connectedFaces.push(ft);Pt.length;for(var wt=et.length,Dt=0;Dt<wt;Dt++){var At=vt.vertices[et[Dt]],ht=vt.vertices[et[(Dt+1)%wt]];At.vsub(ht,H),Q.copy(H),R.vmult(Q,Q),D.vadd(Q,Q),rt.copy(this.faceNormals[Rt]),R.vmult(rt,rt),D.vadd(rt,rt),Q.cross(rt,bt),bt.negate(bt),Mt.copy(At),R.vmult(Mt,Mt),D.vadd(Mt,Mt),-Mt.dot(bt);var Ot;{var Wt=et.connectedFaces[Dt];Et.copy(this.faceNormals[Wt]);var Bt=this.getPlaneConstantOfFace(Wt);ct.copy(Et),R.vmult(ct,ct);var Ot=Bt-ct.dot(D)}for(this.clipFaceAgainstPlane(Pt,qt,ct,Ot);Pt.length;)Pt.shift();for(;qt.length;)Pt.push(qt.shift())}Et.copy(this.faceNormals[Rt]);var Bt=this.getPlaneConstantOfFace(Rt);ct.copy(Et),R.vmult(ct,ct);for(var Ot=Bt-ct.dot(D),ft=0;ft<Pt.length;ft++){var Nt=ct.dot(Pt[ft])+Ot;if(Nt<=w&&(console.log("clamped: depth="+Nt+" to minDist="+(w+"")),Nt=w),Nt<=k){var Ut=Pt[ft];if(Nt<=0){var Kt={point:Ut,normal:ct,depth:Nt};J.push(Kt)}}}}},c.prototype.clipFaceAgainstPlane=function(N,D,R,L){var w,k,J=N.length;if(J<2)return D;var K=N[N.length-1],H=N[0];w=R.dot(K)+L;for(var Q=0;Q<J;Q++){if(H=N[Q],k=R.dot(H)+L,w<0)if(k<0){var rt=new i;rt.copy(H),D.push(rt)}else{var rt=new i;K.lerp(H,w/(w-k),rt),D.push(rt)}else if(k<0){var rt=new i;K.lerp(H,w/(w-k),rt),D.push(rt),D.push(H)}K=H,w=k}return D},c.prototype.computeWorldVertices=function(N,D){for(var R=this.vertices.length;this.worldVertices.length<R;)this.worldVertices.push(new i);for(var L=this.vertices,w=this.worldVertices,k=0;k!==R;k++)D.vmult(L[k],w[k]),N.vadd(w[k],w[k]);this.worldVerticesNeedsUpdate=!1},new i,c.prototype.computeLocalAABB=function(N,D){var R=this.vertices.length,L=this.vertices;N.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),D.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var w=0;w<R;w++){var k=L[w];k.x<N.x?N.x=k.x:k.x>D.x&&(D.x=k.x),k.y<N.y?N.y=k.y:k.y>D.y&&(D.y=k.y),k.z<N.z?N.z=k.z:k.z>D.z&&(D.z=k.z)}},c.prototype.computeWorldFaceNormals=function(N){for(var D=this.faceNormals.length;this.worldFaceNormals.length<D;)this.worldFaceNormals.push(new i);for(var R=this.faceNormals,L=this.worldFaceNormals,w=0;w!==D;w++)N.vmult(R[w],L[w]);this.worldFaceNormalsNeedsUpdate=!1},c.prototype.updateBoundingSphereRadius=function(){for(var N=0,D=this.vertices,R=0,L=D.length;R!==L;R++){var w=D[R].norm2();w>N&&(N=w)}this.boundingSphereRadius=Math.sqrt(N)};var Y=new i;c.prototype.calculateWorldAABB=function(N,D,R,L){for(var w=this.vertices.length,k=this.vertices,J,K,H,Q,rt,bt,Mt=0;Mt<w;Mt++){Y.copy(k[Mt]),D.vmult(Y,Y),N.vadd(Y,Y);var Et=Y;Et.x<J||J===void 0?J=Et.x:(Et.x>Q||Q===void 0)&&(Q=Et.x),Et.y<K||K===void 0?K=Et.y:(Et.y>rt||rt===void 0)&&(rt=Et.y),Et.z<H||H===void 0?H=Et.z:(Et.z>bt||bt===void 0)&&(bt=Et.z)}R.set(J,K,H),L.set(Q,rt,bt)},c.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},c.prototype.getAveragePointLocal=function(N){N=N||new i;for(var D=this.vertices.length,R=this.vertices,L=0;L<D;L++)N.vadd(R[L],N);return N.mult(1/D,N),N},c.prototype.transformAllPoints=function(N,D){var R=this.vertices.length,L=this.vertices;if(D){for(var w=0;w<R;w++){var k=L[w];D.vmult(k,k)}for(var w=0;w<this.faceNormals.length;w++){var k=this.faceNormals[w];D.vmult(k,k)}}if(N)for(var w=0;w<R;w++){var k=L[w];k.vadd(N,k)}};var tt=new i,W=new i,B=new i;c.prototype.pointIsInside=function(N){var D=this.vertices.length,R=this.vertices,L=this.faces,w=this.faceNormals,k=null,J=this.faces.length,K=tt;this.getAveragePointLocal(K);for(var H=0;H<J;H++){this.faces[H].length;var D=w[H],Q=R[L[H][0]],rt=W;N.vsub(Q,rt);var bt=D.dot(rt),Mt=B;K.vsub(Q,Mt);var Et=D.dot(Mt);if(bt<0&&Et>0||bt>0&&Et<0)return!1}return k?1:-1},new i;var $=new i,X=new i;c.project=function(N,D,R,L,w){var k=N.vertices.length,J=$,K=0,H=0,Q=X,rt=N.vertices;Q.setZero(),s.vectorToLocalFrame(R,L,D,J),s.pointToLocalFrame(R,L,Q,Q);var bt=Q.dot(J);H=K=rt[0].dot(J);for(var Mt=1;Mt<k;Mt++){var Et=rt[Mt].dot(J);Et>K&&(K=Et),Et<H&&(H=Et)}if(H-=bt,K-=bt,H>K){var ct=H;H=K,K=ct}w[0]=K,w[1]=H}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(e,n,a){n.exports=c;var r=e("./Shape"),i=e("../math/Vec3");e("../math/Quaternion");var s=e("./ConvexPolyhedron");function c(h,l,o,u){var f=u,v=[],m=[],p=[],g=[],_=[],y=Math.cos,x=Math.sin;v.push(new i(l*y(0),l*x(0),-o*.5)),g.push(0),v.push(new i(h*y(0),h*x(0),o*.5)),_.push(1);for(var b=0;b<f;b++){var I=2*Math.PI/f*(b+1),G=2*Math.PI/f*(b+.5);b<f-1?(v.push(new i(l*y(I),l*x(I),-o*.5)),g.push(2*b+2),v.push(new i(h*y(I),h*x(I),o*.5)),_.push(2*b+3),p.push([2*b+2,2*b+3,2*b+1,2*b])):p.push([0,1,2*b+1,2*b]),(f%2===1||b<f/2)&&m.push(new i(y(G),x(G),0))}p.push(_),m.push(new i(0,0,1));for(var M=[],b=0;b<g.length;b++)M.push(g[g.length-b-1]);p.push(M),this.type=r.types.CONVEXPOLYHEDRON,s.call(this,v,p,m)}c.prototype=new s},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(e,n,a){var r=e("./Shape"),i=e("./ConvexPolyhedron"),s=e("../math/Vec3"),c=e("../utils/Utils");n.exports=h;function h(l,o){o=c.defaults(o,{maxValue:null,minValue:null,elementSize:1}),this.data=l,this.maxValue=o.maxValue,this.minValue=o.minValue,this.elementSize=o.elementSize,o.minValue===null&&this.updateMinValue(),o.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,r.call(this),this.pillarConvex=new i,this.pillarOffset=new s,this.type=r.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}h.prototype=new r,h.prototype.update=function(){this._cachedPillars={}},h.prototype.updateMinValue=function(){for(var l=this.data,o=l[0][0],u=0;u!==l.length;u++)for(var f=0;f!==l[u].length;f++){var v=l[u][f];v<o&&(o=v)}this.minValue=o},h.prototype.updateMaxValue=function(){for(var l=this.data,o=l[0][0],u=0;u!==l.length;u++)for(var f=0;f!==l[u].length;f++){var v=l[u][f];v>o&&(o=v)}this.maxValue=o},h.prototype.setHeightValueAtIndex=function(l,o,u){var f=this.data;f[l][o]=u,this.clearCachedConvexTrianglePillar(l,o,!1),l>0&&(this.clearCachedConvexTrianglePillar(l-1,o,!0),this.clearCachedConvexTrianglePillar(l-1,o,!1)),o>0&&(this.clearCachedConvexTrianglePillar(l,o-1,!0),this.clearCachedConvexTrianglePillar(l,o-1,!1)),o>0&&l>0&&this.clearCachedConvexTrianglePillar(l-1,o-1,!0)},h.prototype.getRectMinMax=function(l,o,u,f,v){v=v||[];for(var m=this.data,p=this.minValue,g=l;g<=u;g++)for(var _=o;_<=f;_++){var y=m[g][_];y>p&&(p=y)}v[0]=this.minValue,v[1]=p},h.prototype.getIndexOfPosition=function(l,o,u,f){var v=this.elementSize,m=this.data,p=Math.floor(l/v),g=Math.floor(o/v);return u[0]=p,u[1]=g,f&&(p<0&&(p=0),g<0&&(g=0),p>=m.length-1&&(p=m.length-1),g>=m[0].length-1&&(g=m[0].length-1)),!(p<0||g<0||p>=m.length-1||g>=m[0].length-1)},h.prototype.getHeightAt=function(l,o,u){var f=[];this.getIndexOfPosition(l,o,f,u);var v=[];return this.getRectMinMax(f[0],f[1]+1,f[0],f[1]+1,v),(v[0]+v[1])/2},h.prototype.getCacheConvexTrianglePillarKey=function(l,o,u){return l+"_"+o+"_"+(u?1:0)},h.prototype.getCachedConvexTrianglePillar=function(l,o,u){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(l,o,u)]},h.prototype.setCachedConvexTrianglePillar=function(l,o,u,f,v){this._cachedPillars[this.getCacheConvexTrianglePillarKey(l,o,u)]={convex:f,offset:v}},h.prototype.clearCachedConvexTrianglePillar=function(l,o,u){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(l,o,u)]},h.prototype.getConvexTrianglePillar=function(l,o,u){var f=this.pillarConvex,v=this.pillarOffset;if(this.cacheEnabled){var m=this.getCachedConvexTrianglePillar(l,o,u);if(m){this.pillarConvex=m.convex,this.pillarOffset=m.offset;return}f=new i,v=new s,this.pillarConvex=f,this.pillarOffset=v}var m=this.data,p=this.elementSize,g=f.faces;f.vertices.length=6;for(var _=0;_<6;_++)f.vertices[_]||(f.vertices[_]=new s);g.length=5;for(var _=0;_<5;_++)g[_]||(g[_]=[]);var y=f.vertices,x=(Math.min(m[l][o],m[l+1][o],m[l][o+1],m[l+1][o+1])-this.minValue)/2+this.minValue;u?(v.set((l+.75)*p,(o+.75)*p,x),y[0].set(.25*p,.25*p,m[l+1][o+1]-x),y[1].set(-.75*p,.25*p,m[l][o+1]-x),y[2].set(.25*p,-.75*p,m[l+1][o]-x),y[3].set(.25*p,.25*p,-x-1),y[4].set(-.75*p,.25*p,-x-1),y[5].set(.25*p,-.75*p,-x-1),g[0][0]=0,g[0][1]=1,g[0][2]=2,g[1][0]=5,g[1][1]=4,g[1][2]=3,g[2][0]=2,g[2][1]=5,g[2][2]=3,g[2][3]=0,g[3][0]=3,g[3][1]=4,g[3][2]=1,g[3][3]=0,g[4][0]=1,g[4][1]=4,g[4][2]=5,g[4][3]=2):(v.set((l+.25)*p,(o+.25)*p,x),y[0].set(-.25*p,-.25*p,m[l][o]-x),y[1].set(.75*p,-.25*p,m[l+1][o]-x),y[2].set(-.25*p,.75*p,m[l][o+1]-x),y[3].set(-.25*p,-.25*p,-x-1),y[4].set(.75*p,-.25*p,-x-1),y[5].set(-.25*p,.75*p,-x-1),g[0][0]=0,g[0][1]=1,g[0][2]=2,g[1][0]=5,g[1][1]=4,g[1][2]=3,g[2][0]=0,g[2][1]=2,g[2][2]=5,g[2][3]=3,g[3][0]=1,g[3][1]=0,g[3][2]=3,g[3][3]=4,g[4][0]=4,g[4][1]=5,g[4][2]=2,g[4][3]=1),f.computeNormals(),f.computeEdges(),f.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(l,o,u,f,v)},h.prototype.calculateLocalInertia=function(l,o){return o=o||new s,o.set(0,0,0),o},h.prototype.volume=function(){return Number.MAX_VALUE},h.prototype.calculateWorldAABB=function(l,o,u,f){u.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),f.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},h.prototype.updateBoundingSphereRadius=function(){var l=this.data,o=this.elementSize;this.boundingSphereRadius=new s(l.length*o,l[0].length*o,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(e,n,a){n.exports=s;var r=e("./Shape"),i=e("../math/Vec3");function s(){r.call(this),this.type=r.types.PARTICLE}s.prototype=new r,s.prototype.constructor=s,s.prototype.calculateLocalInertia=function(c,h){return h=h||new i,h.set(0,0,0),h},s.prototype.volume=function(){return 0},s.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},s.prototype.calculateWorldAABB=function(c,h,l,o){l.copy(c),o.copy(c)}},{"../math/Vec3":30,"./Shape":43}],42:[function(e,n,a){n.exports=s;var r=e("./Shape"),i=e("../math/Vec3");function s(){r.call(this),this.type=r.types.PLANE,this.worldNormal=new i,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}s.prototype=new r,s.prototype.constructor=s,s.prototype.computeWorldNormal=function(h){var l=this.worldNormal;l.set(0,0,1),h.vmult(l,l),this.worldNormalNeedsUpdate=!1},s.prototype.calculateLocalInertia=function(h,l){return l=l||new i,l},s.prototype.volume=function(){return Number.MAX_VALUE};var c=new i;s.prototype.calculateWorldAABB=function(h,l,o,u){c.set(0,0,1),l.vmult(c,c);var f=Number.MAX_VALUE;o.set(-f,-f,-f),u.set(f,f,f),c.x===1&&(u.x=h.x),c.y===1&&(u.y=h.y),c.z===1&&(u.z=h.z),c.x===-1&&(o.x=h.x),c.y===-1&&(o.y=h.y),c.z===-1&&(o.z=h.z)},s.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(e,n,a){n.exports=r;var r=e("./Shape");e("../math/Vec3"),e("../math/Quaternion"),e("../material/Material");function r(){this.id=r.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}r.prototype.constructor=r,r.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},r.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},r.prototype.calculateLocalInertia=function(i,s){throw"calculateLocalInertia() not implemented for shape type "+this.type},r.idCounter=0,r.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(e,n,a){n.exports=s;var r=e("./Shape"),i=e("../math/Vec3");function s(c){if(r.call(this),this.radius=c!==void 0?Number(c):1,this.type=r.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}s.prototype=new r,s.prototype.constructor=s,s.prototype.calculateLocalInertia=function(c,h){h=h||new i;var l=2*c*this.radius*this.radius/5;return h.x=l,h.y=l,h.z=l,h},s.prototype.volume=function(){return 4*Math.PI*this.radius/3},s.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},s.prototype.calculateWorldAABB=function(c,h,l,o){for(var u=this.radius,f=["x","y","z"],v=0;v<f.length;v++){var m=f[v];l[m]=c[m]-u,o[m]=c[m]+u}}},{"../math/Vec3":30,"./Shape":43}],45:[function(e,n,a){n.exports=l;var r=e("./Shape"),i=e("../math/Vec3");e("../math/Quaternion");var s=e("../math/Transform"),c=e("../collision/AABB"),h=e("../utils/Octree");function l(M,T){r.call(this),this.type=r.types.TRIMESH,this.vertices=new Float32Array(M),this.indices=new Int16Array(T),this.normals=new Float32Array(T.length),this.aabb=new c,this.edges=null,this.scale=new i(1,1,1),this.tree=new h,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}l.prototype=new r,l.prototype.constructor=l;var o=new i;l.prototype.updateTree=function(){var M=this.tree;M.reset(),M.aabb.copy(this.aabb);var T=this.scale;M.aabb.lowerBound.x*=1/T.x,M.aabb.lowerBound.y*=1/T.y,M.aabb.lowerBound.z*=1/T.z,M.aabb.upperBound.x*=1/T.x,M.aabb.upperBound.y*=1/T.y,M.aabb.upperBound.z*=1/T.z;for(var C=new c,F=new i,V=new i,z=new i,U=[F,V,z],Y=0;Y<this.indices.length/3;Y++){var tt=Y*3;this._getUnscaledVertex(this.indices[tt],F),this._getUnscaledVertex(this.indices[tt+1],V),this._getUnscaledVertex(this.indices[tt+2],z),C.setFromPoints(U),M.insert(C,Y)}M.removeEmptyNodes()};var u=new c;l.prototype.getTrianglesInAABB=function(M,T){u.copy(M);var C=this.scale,F=C.x,V=C.y,z=C.z,U=u.lowerBound,Y=u.upperBound;return U.x/=F,U.y/=V,U.z/=z,Y.x/=F,Y.y/=V,Y.z/=z,this.tree.aabbQuery(u,T)},l.prototype.setScale=function(M){var T=this.scale.x===this.scale.y===this.scale.z,C=M.x===M.y===M.z;T&&C||this.updateNormals(),this.scale.copy(M),this.updateAABB(),this.updateBoundingSphereRadius()},l.prototype.updateNormals=function(){for(var M=o,T=this.normals,C=0;C<this.indices.length/3;C++){var F=C*3,V=this.indices[F],z=this.indices[F+1],U=this.indices[F+2];this.getVertex(V,g),this.getVertex(z,_),this.getVertex(U,y),l.computeNormal(_,g,y,M),T[F]=M.x,T[F+1]=M.y,T[F+2]=M.z}},l.prototype.updateEdges=function(){for(var M={},T=function(tt,W){var B=V<z?V+"_"+z:z+"_"+V;M[B]=!0},C=0;C<this.indices.length/3;C++){var F=C*3,V=this.indices[F],z=this.indices[F+1];this.indices[F+2],T(),T(),T()}var U=Object.keys(M);this.edges=new Int16Array(U.length*2);for(var C=0;C<U.length;C++){var Y=U[C].split("_");this.edges[2*C]=parseInt(Y[0],10),this.edges[2*C+1]=parseInt(Y[1],10)}},l.prototype.getEdgeVertex=function(M,T,C){var F=this.edges[M*2+(T?1:0)];this.getVertex(F,C)};var f=new i,v=new i;l.prototype.getEdgeVector=function(M,T){var C=f,F=v;this.getEdgeVertex(M,0,C),this.getEdgeVertex(M,1,F),F.vsub(C,T)};var m=new i,p=new i;l.computeNormal=function(M,T,C,F){T.vsub(M,p),C.vsub(T,m),m.cross(p,F),F.isZero()||F.normalize()};var g=new i,_=new i,y=new i;l.prototype.getVertex=function(M,T){var C=this.scale;return this._getUnscaledVertex(M,T),T.x*=C.x,T.y*=C.y,T.z*=C.z,T},l.prototype._getUnscaledVertex=function(M,T){var C=M*3,F=this.vertices;return T.set(F[C],F[C+1],F[C+2])},l.prototype.getWorldVertex=function(M,T,C,F){return this.getVertex(M,F),s.pointToWorldFrame(T,C,F,F),F},l.prototype.getTriangleVertices=function(M,T,C,F){var V=M*3;this.getVertex(this.indices[V],T),this.getVertex(this.indices[V+1],C),this.getVertex(this.indices[V+2],F)},l.prototype.getNormal=function(M,T){var C=M*3;return T.set(this.normals[C],this.normals[C+1],this.normals[C+2])};var x=new c;l.prototype.calculateLocalInertia=function(M,T){this.computeLocalAABB(x);var C=x.upperBound.x-x.lowerBound.x,F=x.upperBound.y-x.lowerBound.y,V=x.upperBound.z-x.lowerBound.z;return T.set(1/12*M*(2*F*2*F+2*V*2*V),1/12*M*(2*C*2*C+2*V*2*V),1/12*M*(2*F*2*F+2*C*2*C))};var b=new i;l.prototype.computeLocalAABB=function(M){var T=M.lowerBound,C=M.upperBound,F=this.vertices.length;this.vertices;var V=b;this.getVertex(0,V),T.copy(V),C.copy(V);for(var z=0;z!==F;z++)this.getVertex(z,V),V.x<T.x?T.x=V.x:V.x>C.x&&(C.x=V.x),V.y<T.y?T.y=V.y:V.y>C.y&&(C.y=V.y),V.z<T.z?T.z=V.z:V.z>C.z&&(C.z=V.z)},l.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},l.prototype.updateBoundingSphereRadius=function(){for(var M=0,T=this.vertices,C=new i,F=0,V=T.length/3;F!==V;F++){this.getVertex(F,C);var z=C.norm2();z>M&&(M=z)}this.boundingSphereRadius=Math.sqrt(M)},new i;var I=new s,G=new c;l.prototype.calculateWorldAABB=function(M,T,C,F){var V=I,z=G;V.position=M,V.quaternion=T,this.aabb.toWorldFrame(V,z),C.copy(z.lowerBound),F.copy(z.upperBound)},l.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},l.createTorus=function(M,T,C,F,V){M=M||1,T=T||.5,C=C||8,F=F||6,V=V||Math.PI*2;for(var z=[],U=[],Y=0;Y<=C;Y++)for(var tt=0;tt<=F;tt++){var W=tt/F*V,B=Y/C*Math.PI*2,$=(M+T*Math.cos(B))*Math.cos(W),X=(M+T*Math.cos(B))*Math.sin(W),N=T*Math.sin(B);z.push($,X,N)}for(var Y=1;Y<=C;Y++)for(var tt=1;tt<=F;tt++){var D=(F+1)*Y+tt-1,R=(F+1)*(Y-1)+tt-1,L=(F+1)*(Y-1)+tt,w=(F+1)*Y+tt;U.push(D,R,w),U.push(R,L,w)}return new l(z,U)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(e,n,a){n.exports=i,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver");function i(){r.call(this),this.iterations=10,this.tolerance=1e-7}i.prototype=new r;var s=[],c=[],h=[];i.prototype.solve=function(l,o){var u=0,f=this.iterations,v=this.tolerance*this.tolerance,m=this.equations,p=m.length,g=o.bodies,_=g.length,y=l,x,b,I,G,M,T;if(p!==0)for(var C=0;C!==_;C++)g[C].updateSolveMassProperties();var F=c,V=h,z=s;F.length=p,V.length=p,z.length=p;for(var C=0;C!==p;C++){var U=m[C];z[C]=0,V[C]=U.computeB(y),F[C]=1/U.computeC()}if(p!==0){for(var C=0;C!==_;C++){var Y=g[C],tt=Y.vlambda,W=Y.wlambda;tt.set(0,0,0),W&&W.set(0,0,0)}for(u=0;u!==f;u++){G=0;for(var B=0;B!==p;B++){var U=m[B];x=V[B],b=F[B],T=z[B],M=U.computeGWlambda(),I=b*(x-M-U.eps*T),T+I<U.minForce?I=U.minForce-T:T+I>U.maxForce&&(I=U.maxForce-T),z[B]+=I,G+=I>0?I:-I,U.addToWlambda(I)}if(G*G<v)break}for(var C=0;C!==_;C++){var Y=g[C],$=Y.velocity,X=Y.angularVelocity;$.vadd(Y.vlambda,$),X&&X.vadd(Y.wlambda,X)}}return u}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(e,n,a){n.exports=r;function r(){this.equations=[]}r.prototype.solve=function(i,s){return 0},r.prototype.addEquation=function(i){i.enabled&&this.equations.push(i)},r.prototype.removeEquation=function(i){var s=this.equations,c=s.indexOf(i);c!==-1&&s.splice(c,1)},r.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(e,n,a){n.exports=s,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver"),i=e("../objects/Body");function s(g){for(r.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=g,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}s.prototype=new r;var c=[],h=[],l={bodies:[]},o=i.STATIC;function u(g){for(var _=g.length,y=0;y!==_;y++){var x=g[y];if(!x.visited&&!(x.body.type&o))return x}return!1}var f=[];function v(g,_,y,x){for(f.push(g),g.visited=!0,_(g,y,x);f.length;)for(var b=f.pop(),I;I=u(b.children);)I.visited=!0,_(I,y,x),f.push(I)}function m(g,_,y){_.push(g.body);for(var x=g.eqs.length,b=0;b!==x;b++){var I=g.eqs[b];y.indexOf(I)===-1&&y.push(I)}}s.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},s.prototype.solve=function(g,_){for(var y=c,x=this.nodePool,b=_.bodies,I=this.equations,G=I.length,M=b.length,T=this.subsolver;x.length<M;)x.push(this.createNode());y.length=M;for(var C=0;C<M;C++)y[C]=x[C];for(var C=0;C!==M;C++){var F=y[C];F.body=b[C],F.children.length=0,F.eqs.length=0,F.visited=!1}for(var V=0;V!==G;V++){var z=I[V],C=b.indexOf(z.bi),U=b.indexOf(z.bj),Y=y[C],tt=y[U];Y.children.push(tt),Y.eqs.push(z),tt.children.push(Y),tt.eqs.push(z)}var W,B=0,$=h;T.tolerance=this.tolerance,T.iterations=this.iterations;for(var X=l;W=u(y);){$.length=0,X.bodies.length=0,v(W,m,X.bodies,$);var N=$.length;$=$.sort(p);for(var C=0;C!==N;C++)T.addEquation($[C]);T.solve(g,X),T.removeAllEquations(),B++}return B};function p(g,_){return _.id-g.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(e,n,a){var r=function(){};n.exports=r,r.prototype={constructor:r,addEventListener:function(i,s){this._listeners===void 0&&(this._listeners={});var c=this._listeners;return c[i]===void 0&&(c[i]=[]),c[i].indexOf(s)===-1&&c[i].push(s),this},hasEventListener:function(i,s){if(this._listeners===void 0)return!1;var c=this._listeners;return c[i]!==void 0&&c[i].indexOf(s)!==-1},removeEventListener:function(i,s){if(this._listeners===void 0)return this;var c=this._listeners;if(c[i]===void 0)return this;var h=c[i].indexOf(s);return h!==-1&&c[i].splice(h,1),this},dispatchEvent:function(i){if(this._listeners===void 0)return this;var s=this._listeners,c=s[i.type];if(c!==void 0){i.target=this;for(var h=0,l=c.length;h<l;h++)c[h].call(this,i)}return this}}},{}],50:[function(e,n,a){var r=e("../collision/AABB"),i=e("../math/Vec3");n.exports=c;function s(o){o=o||{},this.root=o.root||null,this.aabb=o.aabb?o.aabb.clone():new r,this.data=[],this.children=[]}function c(o,u){u=u||{},u.root=null,u.aabb=o,s.call(this,u),this.maxDepth=typeof u.maxDepth<"u"?u.maxDepth:8}c.prototype=new s,s.prototype.reset=function(o,u){this.children.length=this.data.length=0},s.prototype.insert=function(o,u,f){var v=this.data;if(f=f||0,!this.aabb.contains(o))return!1;var m=this.children;if(f<(this.maxDepth||this.root.maxDepth)){var p=!1;m.length||(this.subdivide(),p=!0);for(var g=0;g!==8;g++)if(m[g].insert(o,u,f+1))return!0;p&&(m.length=0)}return v.push(u),!0};var h=new i;s.prototype.subdivide=function(){var o=this.aabb,u=o.lowerBound,f=o.upperBound,v=this.children;v.push(new s({aabb:new r({lowerBound:new i(0,0,0)})}),new s({aabb:new r({lowerBound:new i(1,0,0)})}),new s({aabb:new r({lowerBound:new i(1,1,0)})}),new s({aabb:new r({lowerBound:new i(1,1,1)})}),new s({aabb:new r({lowerBound:new i(0,1,1)})}),new s({aabb:new r({lowerBound:new i(0,0,1)})}),new s({aabb:new r({lowerBound:new i(1,0,1)})}),new s({aabb:new r({lowerBound:new i(0,1,0)})})),f.vsub(u,h),h.scale(.5,h);for(var m=this.root||this,p=0;p!==8;p++){var g=v[p];g.root=m;var _=g.aabb.lowerBound;_.x*=h.x,_.y*=h.y,_.z*=h.z,_.vadd(u,_),_.vadd(h,g.aabb.upperBound)}},s.prototype.aabbQuery=function(o,u){this.data,this.children;for(var f=[this];f.length;){var v=f.pop();v.aabb.overlaps(o)&&Array.prototype.push.apply(u,v.data),Array.prototype.push.apply(f,v.children)}return u};var l=new r;s.prototype.rayQuery=function(o,u,f){return o.getAABB(l),l.toLocalFrame(u,l),this.aabbQuery(l,f),f},s.prototype.removeEmptyNodes=function(){for(var o=[this];o.length;){for(var u=o.pop(),f=u.children.length-1;f>=0;f--)u.children[f].data.length||u.children.splice(f,1);Array.prototype.push.apply(o,u.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(e,n,a){n.exports=r;function r(){this.objects=[],this.type=Object}r.prototype.release=function(){for(var i=arguments.length,s=0;s!==i;s++)this.objects.push(arguments[s])},r.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},r.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(e,n,a){n.exports=r;function r(){this.data={keys:[]}}r.prototype.get=function(i,s){if(i>s){var c=s;s=i,i=c}return this.data[i+"-"+s]},r.prototype.set=function(i,s,c){if(i>s){var h=s;s=i,i=h}var l=i+"-"+s;this.get(i,s)||this.data.keys.push(l),this.data[l]=c},r.prototype.reset=function(){for(var i=this.data,s=i.keys;s.length>0;){var c=s.pop();delete i[c]}}},{}],53:[function(e,n,a){function r(){}n.exports=r,r.defaults=function(i,s){i=i||{};for(var c in s)c in i||(i[c]=s[c]);return i}},{}],54:[function(e,n,a){n.exports=s;var r=e("../math/Vec3"),i=e("./Pool");function s(){i.call(this),this.type=r}s.prototype=new i,s.prototype.constructObject=function(){return new r}},{"../math/Vec3":30,"./Pool":51}],55:[function(e,n,a){n.exports=v;var r=e("../collision/AABB"),i=e("../shapes/Shape"),s=e("../collision/Ray"),c=e("../math/Vec3"),h=e("../math/Transform");e("../shapes/ConvexPolyhedron");var l=e("../math/Quaternion");e("../solver/Solver");var o=e("../utils/Vec3Pool"),u=e("../equations/ContactEquation"),f=e("../equations/FrictionEquation");function v(nt){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new o,this.world=nt,this.currentContactMaterial=null,this.enableFrictionReduction=!1}v.prototype.createContactEquation=function(nt,at,xt,yt,Xt,S){var O;this.contactPointPool.length?(O=this.contactPointPool.pop(),O.bi=nt,O.bj=at):O=new u(nt,at),O.enabled=nt.collisionResponse&&at.collisionResponse&&xt.collisionResponse&&yt.collisionResponse;var j=this.currentContactMaterial;O.restitution=j.restitution,O.setSpookParams(j.contactEquationStiffness,j.contactEquationRelaxation,this.world.dt);var A=xt.material||nt.material,q=yt.material||at.material;return A&&q&&A.restitution>=0&&q.restitution>=0&&(O.restitution=A.restitution*q.restitution),O.si=Xt||xt,O.sj=S||yt,O},v.prototype.createFrictionEquationsFromContact=function(nt,at){var xt=nt.bi,yt=nt.bj,Xt=nt.si,S=nt.sj,O=this.world,j=this.currentContactMaterial,A=j.friction,q=Xt.material||xt.material,ot=S.material||yt.material;if(q&&ot&&q.friction>=0&&ot.friction>=0&&(A=q.friction*ot.friction),A>0){var mt=A*O.gravity.length(),ut=xt.invMass+yt.invMass;ut>0&&(ut=1/ut);var lt=this.frictionEquationPool,pt=lt.length?lt.pop():new f(xt,yt,mt*ut),St=lt.length?lt.pop():new f(xt,yt,mt*ut);return pt.bi=St.bi=xt,pt.bj=St.bj=yt,pt.minForce=St.minForce=-mt*ut,pt.maxForce=St.maxForce=mt*ut,pt.ri.copy(nt.ri),pt.rj.copy(nt.rj),St.ri.copy(nt.ri),St.rj.copy(nt.rj),nt.ni.tangents(pt.t,St.t),pt.setSpookParams(j.frictionEquationStiffness,j.frictionEquationRelaxation,O.dt),St.setSpookParams(j.frictionEquationStiffness,j.frictionEquationRelaxation,O.dt),pt.enabled=St.enabled=nt.enabled,at.push(pt,St),!0}return!1};var m=new c,p=new c,g=new c;v.prototype.createFrictionFromAverage=function(nt){var at=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(at,this.frictionResult)||nt===1)){var xt=this.frictionResult[this.frictionResult.length-2],yt=this.frictionResult[this.frictionResult.length-1];m.setZero(),p.setZero(),g.setZero();var Xt=at.bi;at.bj;for(var S=0;S!==nt;S++)at=this.result[this.result.length-1-S],at.bodyA!==Xt?(m.vadd(at.ni,m),p.vadd(at.ri,p),g.vadd(at.rj,g)):(m.vsub(at.ni,m),p.vadd(at.rj,p),g.vadd(at.ri,g));var O=1/nt;p.scale(O,xt.ri),g.scale(O,xt.rj),yt.ri.copy(xt.ri),yt.rj.copy(xt.rj),m.normalize(),m.tangents(xt.t,yt.t)}};var _=new c,y=new c,x=new l,b=new l;v.prototype.getContacts=function(nt,at,xt,yt,Xt,S,O){this.contactPointPool=Xt,this.frictionEquationPool=O,this.result=yt,this.frictionResult=S;for(var j=x,A=b,q=_,ot=y,mt=0,ut=nt.length;mt!==ut;mt++){var lt=nt[mt],pt=at[mt],St=null;lt.material&&pt.material&&(St=xt.getContactMaterial(lt.material,pt.material)||null);for(var Ct=0;Ct<lt.shapes.length;Ct++){lt.quaternion.mult(lt.shapeOrientations[Ct],j),lt.quaternion.vmult(lt.shapeOffsets[Ct],q),q.vadd(lt.position,q);for(var dt=lt.shapes[Ct],Gt=0;Gt<pt.shapes.length;Gt++){pt.quaternion.mult(pt.shapeOrientations[Gt],A),pt.quaternion.vmult(pt.shapeOffsets[Gt],ot),ot.vadd(pt.position,ot);var Yt=pt.shapes[Gt];if(!(q.distanceTo(ot)>dt.boundingSphereRadius+Yt.boundingSphereRadius)){var re=null;dt.material&&Yt.material&&(re=xt.getContactMaterial(dt.material,Yt.material)||null),this.currentContactMaterial=re||St||xt.defaultContactMaterial;var Vt=this[dt.type|Yt.type];Vt&&(dt.type<Yt.type?Vt.call(this,dt,Yt,q,ot,j,A,lt,pt,dt,Yt):Vt.call(this,Yt,dt,ot,q,A,j,pt,lt,dt,Yt))}}}}},v.prototype[i.types.BOX|i.types.BOX]=v.prototype.boxBox=function(nt,at,xt,yt,Xt,S,O,j){nt.convexPolyhedronRepresentation.material=nt.material,at.convexPolyhedronRepresentation.material=at.material,nt.convexPolyhedronRepresentation.collisionResponse=nt.collisionResponse,at.convexPolyhedronRepresentation.collisionResponse=at.collisionResponse,this.convexConvex(nt.convexPolyhedronRepresentation,at.convexPolyhedronRepresentation,xt,yt,Xt,S,O,j,nt,at)},v.prototype[i.types.BOX|i.types.CONVEXPOLYHEDRON]=v.prototype.boxConvex=function(nt,at,xt,yt,Xt,S,O,j){nt.convexPolyhedronRepresentation.material=nt.material,nt.convexPolyhedronRepresentation.collisionResponse=nt.collisionResponse,this.convexConvex(nt.convexPolyhedronRepresentation,at,xt,yt,Xt,S,O,j,nt,at)},v.prototype[i.types.BOX|i.types.PARTICLE]=v.prototype.boxParticle=function(nt,at,xt,yt,Xt,S,O,j){nt.convexPolyhedronRepresentation.material=nt.material,nt.convexPolyhedronRepresentation.collisionResponse=nt.collisionResponse,this.convexParticle(nt.convexPolyhedronRepresentation,at,xt,yt,Xt,S,O,j,nt,at)},v.prototype[i.types.SPHERE]=v.prototype.sphereSphere=function(nt,at,xt,yt,Xt,S,O,j){var A=this.createContactEquation(O,j,nt,at);yt.vsub(xt,A.ni),A.ni.normalize(),A.ri.copy(A.ni),A.rj.copy(A.ni),A.ri.mult(nt.radius,A.ri),A.rj.mult(-at.radius,A.rj),A.ri.vadd(xt,A.ri),A.ri.vsub(O.position,A.ri),A.rj.vadd(yt,A.rj),A.rj.vsub(j.position,A.rj),this.result.push(A),this.createFrictionEquationsFromContact(A,this.frictionResult)};var I=new c,G=new c,M=new c;v.prototype[i.types.PLANE|i.types.TRIMESH]=v.prototype.planeTrimesh=function(nt,at,xt,yt,Xt,S,O,j){var A=new c,q=I;q.set(0,0,1),Xt.vmult(q,q);for(var ot=0;ot<at.vertices.length/3;ot++){at.getVertex(ot,A);var mt=new c;mt.copy(A),h.pointToWorldFrame(yt,S,mt,A);var ut=G;A.vsub(xt,ut);var lt=q.dot(ut);if(lt<=0){var pt=this.createContactEquation(O,j,nt,at);pt.ni.copy(q);var St=M;q.scale(ut.dot(q),St),A.vsub(St,St),pt.ri.copy(St),pt.ri.vsub(O.position,pt.ri),pt.rj.copy(A),pt.rj.vsub(j.position,pt.rj),this.result.push(pt),this.createFrictionEquationsFromContact(pt,this.frictionResult)}}};var T=new c,C=new c;new c;var F=new c,V=new c,z=new c,U=new c,Y=new c,tt=new c,W=new c,B=new c,$=new c,X=new c,N=new c,D=new r,R=[];v.prototype[i.types.SPHERE|i.types.TRIMESH]=v.prototype.sphereTrimesh=function(nt,at,xt,yt,Xt,S,O,j){var A=z,q=U,ot=Y,mt=tt,ut=W,lt=B,pt=D,St=V,Ct=C,dt=R;h.pointToLocalFrame(yt,S,xt,ut);var Gt=nt.radius;pt.lowerBound.set(ut.x-Gt,ut.y-Gt,ut.z-Gt),pt.upperBound.set(ut.x+Gt,ut.y+Gt,ut.z+Gt),at.getTrianglesInAABB(pt,dt);for(var Yt=F,re=nt.radius*nt.radius,Vt=0;Vt<dt.length;Vt++)for(var It=0;It<3;It++)if(at.getVertex(at.indices[dt[Vt]*3+It],Yt),Yt.vsub(ut,Ct),Ct.norm2()<=re){St.copy(Yt),h.pointToWorldFrame(yt,S,St,Yt),Yt.vsub(xt,Ct);var kt=this.createContactEquation(O,j,nt,at);kt.ni.copy(Ct),kt.ni.normalize(),kt.ri.copy(kt.ni),kt.ri.scale(nt.radius,kt.ri),kt.ri.vadd(xt,kt.ri),kt.ri.vsub(O.position,kt.ri),kt.rj.copy(Yt),kt.rj.vsub(j.position,kt.rj),this.result.push(kt),this.createFrictionEquationsFromContact(kt,this.frictionResult)}for(var Vt=0;Vt<dt.length;Vt++)for(var It=0;It<3;It++){at.getVertex(at.indices[dt[Vt]*3+It],A),at.getVertex(at.indices[dt[Vt]*3+(It+1)%3],q),q.vsub(A,ot),ut.vsub(q,lt);var ne=lt.dot(ot);ut.vsub(A,lt);var fe=lt.dot(ot);if(fe>0&&ne<0){ut.vsub(A,lt),mt.copy(ot),mt.normalize(),fe=lt.dot(mt),mt.scale(fe,lt),lt.vadd(A,lt);var Se=lt.distanceTo(ut);if(Se<nt.radius){var kt=this.createContactEquation(O,j,nt,at);lt.vsub(ut,kt.ni),kt.ni.normalize(),kt.ni.scale(nt.radius,kt.ri),h.pointToWorldFrame(yt,S,lt,lt),lt.vsub(j.position,kt.rj),h.vectorToWorldFrame(S,kt.ni,kt.ni),h.vectorToWorldFrame(S,kt.ri,kt.ri),this.result.push(kt),this.createFrictionEquationsFromContact(kt,this.frictionResult)}}}for(var Le=$,xe=X,$t=N,Ee=T,Vt=0,se=dt.length;Vt!==se;Vt++){at.getTriangleVertices(dt[Vt],Le,xe,$t),at.getNormal(dt[Vt],Ee),ut.vsub(Le,lt);var Se=lt.dot(Ee);if(Ee.scale(Se,lt),ut.vsub(lt,lt),Se=lt.distanceTo(ut),s.pointInTriangle(lt,Le,xe,$t)&&Se<nt.radius){var kt=this.createContactEquation(O,j,nt,at);lt.vsub(ut,kt.ni),kt.ni.normalize(),kt.ni.scale(nt.radius,kt.ri),h.pointToWorldFrame(yt,S,lt,lt),lt.vsub(j.position,kt.rj),h.vectorToWorldFrame(S,kt.ni,kt.ni),h.vectorToWorldFrame(S,kt.ri,kt.ri),this.result.push(kt),this.createFrictionEquationsFromContact(kt,this.frictionResult)}}dt.length=0};var L=new c,w=new c;v.prototype[i.types.SPHERE|i.types.PLANE]=v.prototype.spherePlane=function(nt,at,xt,yt,Xt,S,O,j){var A=this.createContactEquation(O,j,nt,at);if(A.ni.set(0,0,1),S.vmult(A.ni,A.ni),A.ni.negate(A.ni),A.ni.normalize(),A.ni.mult(nt.radius,A.ri),xt.vsub(yt,L),A.ni.mult(A.ni.dot(L),w),L.vsub(w,A.rj),-L.dot(A.ni)<=nt.radius){var q=A.ri,ot=A.rj;q.vadd(xt,q),q.vsub(O.position,q),ot.vadd(yt,ot),ot.vsub(j.position,ot),this.result.push(A),this.createFrictionEquationsFromContact(A,this.frictionResult)}};var k=new c,J=new c,K=new c;function H(nt,at,xt){for(var yt=null,Xt=nt.length,S=0;S!==Xt;S++){var O=nt[S],j=k;nt[(S+1)%Xt].vsub(O,j);var A=J;j.cross(at,A);var q=K;xt.vsub(O,q);var ot=A.dot(q);if(yt===null||ot>0&&yt===!0||ot<=0&&yt===!1){yt===null&&(yt=ot>0);continue}else return!1}return!0}var Q=new c,rt=new c,bt=new c,Mt=new c,Et=[new c,new c,new c,new c,new c,new c],ct=new c,vt=new c,Ht=new c,Pt=new c;v.prototype[i.types.SPHERE|i.types.BOX]=v.prototype.sphereBox=function(nt,at,xt,yt,Xt,S,O,j){var A=this.v3pool,q=Et;xt.vsub(yt,Q),at.getSideNormals(q,S);for(var ot=nt.radius,mt=!1,ut=vt,lt=Ht,pt=Pt,St=null,Ct=0,dt=0,Gt=0,Yt=null,re=0,Vt=q.length;re!==Vt&&mt===!1;re++){var It=rt;It.copy(q[re]);var kt=It.norm();It.normalize();var ne=Q.dot(It);if(ne<kt+ot&&ne>0){var fe=bt,Se=Mt;fe.copy(q[(re+1)%3]),Se.copy(q[(re+2)%3]);var Le=fe.norm(),xe=Se.norm();fe.normalize(),Se.normalize();var $t=Q.dot(fe),Ee=Q.dot(Se);if($t<Le&&$t>-Le&&Ee<xe&&Ee>-xe){var Me=Math.abs(ne-kt-ot);(Yt===null||Me<Yt)&&(Yt=Me,dt=$t,Gt=Ee,St=kt,ut.copy(It),lt.copy(fe),pt.copy(Se),Ct++)}}}if(Ct){mt=!0;var jt=this.createContactEquation(O,j,nt,at);ut.mult(-ot,jt.ri),jt.ni.copy(ut),jt.ni.negate(jt.ni),ut.mult(St,ut),lt.mult(dt,lt),ut.vadd(lt,ut),pt.mult(Gt,pt),ut.vadd(pt,jt.rj),jt.ri.vadd(xt,jt.ri),jt.ri.vsub(O.position,jt.ri),jt.rj.vadd(yt,jt.rj),jt.rj.vsub(j.position,jt.rj),this.result.push(jt),this.createFrictionEquationsFromContact(jt,this.frictionResult)}for(var se=A.get(),he=ct,_e=0;_e!==2&&!mt;_e++)for(var ye=0;ye!==2&&!mt;ye++)for(var pe=0;pe!==2&&!mt;pe++)if(se.set(0,0,0),_e?se.vadd(q[0],se):se.vsub(q[0],se),ye?se.vadd(q[1],se):se.vsub(q[1],se),pe?se.vadd(q[2],se):se.vsub(q[2],se),yt.vadd(se,he),he.vsub(xt,he),he.norm2()<ot*ot){mt=!0;var jt=this.createContactEquation(O,j,nt,at);jt.ri.copy(he),jt.ri.normalize(),jt.ni.copy(jt.ri),jt.ri.mult(ot,jt.ri),jt.rj.copy(se),jt.ri.vadd(xt,jt.ri),jt.ri.vsub(O.position,jt.ri),jt.rj.vadd(yt,jt.rj),jt.rj.vsub(j.position,jt.rj),this.result.push(jt),this.createFrictionEquationsFromContact(jt,this.frictionResult)}A.release(se),se=null;for(var He=A.get(),an=A.get(),jt=A.get(),Ue=A.get(),Me=A.get(),bn=q.length,_e=0;_e!==bn&&!mt;_e++)for(var ye=0;ye!==bn&&!mt;ye++)if(_e%3!==ye%3){q[ye].cross(q[_e],He),He.normalize(),q[_e].vadd(q[ye],an),jt.copy(xt),jt.vsub(an,jt),jt.vsub(yt,jt);var Sn=jt.dot(He);He.mult(Sn,Ue);for(var pe=0;pe===_e%3||pe===ye%3;)pe++;Me.copy(xt),Me.vsub(Ue,Me),Me.vsub(an,Me),Me.vsub(yt,Me);var za=Math.abs(Sn),Na=Me.norm();if(za<q[pe].norm()&&Na<ot){mt=!0;var ue=this.createContactEquation(O,j,nt,at);an.vadd(Ue,ue.rj),ue.rj.copy(ue.rj),Me.negate(ue.ni),ue.ni.normalize(),ue.ri.copy(ue.rj),ue.ri.vadd(yt,ue.ri),ue.ri.vsub(xt,ue.ri),ue.ri.normalize(),ue.ri.mult(ot,ue.ri),ue.ri.vadd(xt,ue.ri),ue.ri.vsub(O.position,ue.ri),ue.rj.vadd(yt,ue.rj),ue.rj.vsub(j.position,ue.rj),this.result.push(ue),this.createFrictionEquationsFromContact(ue,this.frictionResult)}}A.release(He,an,jt,Ue,Me)};var qt=new c,Rt=new c,Zt=new c,P=new c,E=new c,et=new c,ft=new c,gt=new c,wt=new c,Dt=new c;v.prototype[i.types.SPHERE|i.types.CONVEXPOLYHEDRON]=v.prototype.sphereConvex=function(nt,at,xt,yt,Xt,S,O,j){var A=this.v3pool;xt.vsub(yt,qt);for(var q=at.faceNormals,ot=at.faces,mt=at.vertices,ut=nt.radius,lt=0;lt!==mt.length;lt++){var pt=mt[lt],St=E;S.vmult(pt,St),yt.vadd(St,St);var Ct=P;if(St.vsub(xt,Ct),Ct.norm2()<ut*ut){Gt=!0;var dt=this.createContactEquation(O,j,nt,at);dt.ri.copy(Ct),dt.ri.normalize(),dt.ni.copy(dt.ri),dt.ri.mult(ut,dt.ri),St.vsub(yt,dt.rj),dt.ri.vadd(xt,dt.ri),dt.ri.vsub(O.position,dt.ri),dt.rj.vadd(yt,dt.rj),dt.rj.vsub(j.position,dt.rj),this.result.push(dt),this.createFrictionEquationsFromContact(dt,this.frictionResult);return}}for(var Gt=!1,lt=0,Yt=ot.length;lt!==Yt&&Gt===!1;lt++){var re=q[lt],Vt=ot[lt],It=et;S.vmult(re,It);var kt=ft;S.vmult(mt[Vt[0]],kt),kt.vadd(yt,kt);var ne=gt;It.mult(-ut,ne),xt.vadd(ne,ne);var fe=wt;ne.vsub(kt,fe);var Se=fe.dot(It),Le=Dt;if(xt.vsub(kt,Le),Se<0&&Le.dot(It)>0){for(var xe=[],$t=0,Ee=Vt.length;$t!==Ee;$t++){var se=A.get();S.vmult(mt[Vt[$t]],se),yt.vadd(se,se),xe.push(se)}if(H(xe,It,xt)){Gt=!0;var dt=this.createContactEquation(O,j,nt,at);It.mult(-ut,dt.ri),It.negate(dt.ni);var he=A.get();It.mult(-Se,he);var _e=A.get();It.mult(-ut,_e),xt.vsub(yt,dt.rj),dt.rj.vadd(_e,dt.rj),dt.rj.vadd(he,dt.rj),dt.rj.vadd(yt,dt.rj),dt.rj.vsub(j.position,dt.rj),dt.ri.vadd(xt,dt.ri),dt.ri.vsub(O.position,dt.ri),A.release(he),A.release(_e),this.result.push(dt),this.createFrictionEquationsFromContact(dt,this.frictionResult);for(var $t=0,ye=xe.length;$t!==ye;$t++)A.release(xe[$t]);return}else for(var $t=0;$t!==Vt.length;$t++){var pe=A.get(),He=A.get();S.vmult(mt[Vt[($t+1)%Vt.length]],pe),S.vmult(mt[Vt[($t+2)%Vt.length]],He),yt.vadd(pe,pe),yt.vadd(He,He);var an=Rt;He.vsub(pe,an);var jt=Zt;an.unit(jt);var Ue=A.get(),Me=A.get();xt.vsub(pe,Me);var bn=Me.dot(jt);jt.mult(bn,Ue),Ue.vadd(pe,Ue);var Sn=A.get();if(Ue.vsub(xt,Sn),bn>0&&bn*bn<an.norm2()&&Sn.norm2()<ut*ut){var dt=this.createContactEquation(O,j,nt,at);Ue.vsub(yt,dt.rj),Ue.vsub(xt,dt.ni),dt.ni.normalize(),dt.ni.mult(ut,dt.ri),dt.rj.vadd(yt,dt.rj),dt.rj.vsub(j.position,dt.rj),dt.ri.vadd(xt,dt.ri),dt.ri.vsub(O.position,dt.ri),this.result.push(dt),this.createFrictionEquationsFromContact(dt,this.frictionResult);for(var $t=0,ye=xe.length;$t!==ye;$t++)A.release(xe[$t]);A.release(pe),A.release(He),A.release(Ue),A.release(Sn),A.release(Me);return}A.release(pe),A.release(He),A.release(Ue),A.release(Sn),A.release(Me)}for(var $t=0,ye=xe.length;$t!==ye;$t++)A.release(xe[$t])}}},new c,new c,v.prototype[i.types.PLANE|i.types.BOX]=v.prototype.planeBox=function(nt,at,xt,yt,Xt,S,O,j){at.convexPolyhedronRepresentation.material=at.material,at.convexPolyhedronRepresentation.collisionResponse=at.collisionResponse,this.planeConvex(nt,at.convexPolyhedronRepresentation,xt,yt,Xt,S,O,j)};var At=new c,ht=new c,Wt=new c,Bt=new c;v.prototype[i.types.PLANE|i.types.CONVEXPOLYHEDRON]=v.prototype.planeConvex=function(nt,at,xt,yt,Xt,S,O,j){var A=At,q=ht;q.set(0,0,1),Xt.vmult(q,q);for(var ot=0,mt=Wt,ut=0;ut!==at.vertices.length;ut++){A.copy(at.vertices[ut]),S.vmult(A,A),yt.vadd(A,A),A.vsub(xt,mt);var lt=q.dot(mt);if(lt<=0){var pt=this.createContactEquation(O,j,nt,at),St=Bt;q.mult(q.dot(mt),St),A.vsub(St,St),St.vsub(xt,pt.ri),pt.ni.copy(q),A.vsub(yt,pt.rj),pt.ri.vadd(xt,pt.ri),pt.ri.vsub(O.position,pt.ri),pt.rj.vadd(yt,pt.rj),pt.rj.vsub(j.position,pt.rj),this.result.push(pt),ot++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(pt,this.frictionResult)}}this.enableFrictionReduction&&ot&&this.createFrictionFromAverage(ot)};var Ot=new c,Nt=new c;v.prototype[i.types.CONVEXPOLYHEDRON]=v.prototype.convexConvex=function(nt,at,xt,yt,Xt,S,O,j,A,q,ot,mt){var ut=Ot;if(!(xt.distanceTo(yt)>nt.boundingSphereRadius+at.boundingSphereRadius)&&nt.findSeparatingAxis(at,xt,Xt,yt,S,ut,ot,mt)){var lt=[],pt=Nt;nt.clipAgainstHull(xt,Xt,at,yt,S,ut,-100,100,lt);for(var St=0,Ct=0;Ct!==lt.length;Ct++){var dt=this.createContactEquation(O,j,nt,at,A,q),Gt=dt.ri,Yt=dt.rj;ut.negate(dt.ni),lt[Ct].normal.negate(pt),pt.mult(lt[Ct].depth,pt),lt[Ct].point.vadd(pt,Gt),Yt.copy(lt[Ct].point),Gt.vsub(xt,Gt),Yt.vsub(yt,Yt),Gt.vadd(xt,Gt),Gt.vsub(O.position,Gt),Yt.vadd(yt,Yt),Yt.vsub(j.position,Yt),this.result.push(dt),St++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(dt,this.frictionResult)}this.enableFrictionReduction&&St&&this.createFrictionFromAverage(St)}};var Ut=new c,Kt=new c,te=new c;v.prototype[i.types.PLANE|i.types.PARTICLE]=v.prototype.planeParticle=function(nt,at,xt,yt,Xt,S,O,j){var A=Ut;A.set(0,0,1),O.quaternion.vmult(A,A);var q=Kt;yt.vsub(O.position,q);var ot=A.dot(q);if(ot<=0){var mt=this.createContactEquation(j,O,at,nt);mt.ni.copy(A),mt.ni.negate(mt.ni),mt.ri.set(0,0,0);var ut=te;A.mult(A.dot(yt),ut),yt.vsub(ut,ut),mt.rj.copy(ut),this.result.push(mt),this.createFrictionEquationsFromContact(mt,this.frictionResult)}};var ie=new c;v.prototype[i.types.PARTICLE|i.types.SPHERE]=v.prototype.sphereParticle=function(nt,at,xt,yt,Xt,S,O,j){var A=ie;A.set(0,0,1),yt.vsub(xt,A);var q=A.norm2();if(q<=nt.radius*nt.radius){var ot=this.createContactEquation(j,O,at,nt);A.normalize(),ot.rj.copy(A),ot.rj.mult(nt.radius,ot.rj),ot.ni.copy(A),ot.ni.negate(ot.ni),ot.ri.set(0,0,0),this.result.push(ot),this.createFrictionEquationsFromContact(ot,this.frictionResult)}};var Z=new l,st=new c;new c;var _t=new c,Tt=new c,Ft=new c;v.prototype[i.types.PARTICLE|i.types.CONVEXPOLYHEDRON]=v.prototype.convexParticle=function(nt,at,xt,yt,Xt,S,O,j){var A=-1,q=_t,ot=Ft,mt=null,ut=st;if(ut.copy(yt),ut.vsub(xt,ut),Xt.conjugate(Z),Z.vmult(ut,ut),nt.pointIsInside(ut)){nt.worldVerticesNeedsUpdate&&nt.computeWorldVertices(xt,Xt),nt.worldFaceNormalsNeedsUpdate&&nt.computeWorldFaceNormals(Xt);for(var lt=0,pt=nt.faces.length;lt!==pt;lt++){var St=[nt.worldVertices[nt.faces[lt][0]]],Ct=nt.worldFaceNormals[lt];yt.vsub(St[0],Tt);var dt=-Ct.dot(Tt);(mt===null||Math.abs(dt)<Math.abs(mt))&&(mt=dt,A=lt,q.copy(Ct))}if(A!==-1){var Gt=this.createContactEquation(j,O,at,nt);q.mult(mt,ot),ot.vadd(yt,ot),ot.vsub(xt,ot),Gt.rj.copy(ot),q.negate(Gt.ni),Gt.ri.set(0,0,0);var Yt=Gt.ri,re=Gt.rj;Yt.vadd(yt,Yt),Yt.vsub(j.position,Yt),re.vadd(xt,re),re.vsub(O.position,re),this.result.push(Gt),this.createFrictionEquationsFromContact(Gt,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},v.prototype[i.types.BOX|i.types.HEIGHTFIELD]=v.prototype.boxHeightfield=function(nt,at,xt,yt,Xt,S,O,j){nt.convexPolyhedronRepresentation.material=nt.material,nt.convexPolyhedronRepresentation.collisionResponse=nt.collisionResponse,this.convexHeightfield(nt.convexPolyhedronRepresentation,at,xt,yt,Xt,S,O,j)};var ee=new c,oe=new c,de=[0];v.prototype[i.types.CONVEXPOLYHEDRON|i.types.HEIGHTFIELD]=v.prototype.convexHeightfield=function(nt,at,xt,yt,Xt,S,O,j){var A=at.data,q=at.elementSize,ot=nt.boundingSphereRadius,mt=oe,ut=de,lt=ee;h.pointToLocalFrame(yt,S,xt,lt);var pt=Math.floor((lt.x-ot)/q)-1,St=Math.ceil((lt.x+ot)/q)+1,Ct=Math.floor((lt.y-ot)/q)-1,dt=Math.ceil((lt.y+ot)/q)+1;if(!(St<0||dt<0||pt>A.length||Ct>A[0].length)){pt<0&&(pt=0),St<0&&(St=0),Ct<0&&(Ct=0),dt<0&&(dt=0),pt>=A.length&&(pt=A.length-1),St>=A.length&&(St=A.length-1),dt>=A[0].length&&(dt=A[0].length-1),Ct>=A[0].length&&(Ct=A[0].length-1);var Gt=[];at.getRectMinMax(pt,Ct,St,dt,Gt);var Yt=Gt[0],re=Gt[1];if(!(lt.z-ot>re||lt.z+ot<Yt))for(var Vt=pt;Vt<St;Vt++)for(var It=Ct;It<dt;It++)at.getConvexTrianglePillar(Vt,It,!1),h.pointToWorldFrame(yt,S,at.pillarOffset,mt),xt.distanceTo(mt)<at.pillarConvex.boundingSphereRadius+nt.boundingSphereRadius&&this.convexConvex(nt,at.pillarConvex,xt,mt,Xt,S,O,j,null,null,ut,null),at.getConvexTrianglePillar(Vt,It,!0),h.pointToWorldFrame(yt,S,at.pillarOffset,mt),xt.distanceTo(mt)<at.pillarConvex.boundingSphereRadius+nt.boundingSphereRadius&&this.convexConvex(nt,at.pillarConvex,xt,mt,Xt,S,O,j,null,null,ut,null)}};var be=new c,Jt=new c;v.prototype[i.types.SPHERE|i.types.HEIGHTFIELD]=v.prototype.sphereHeightfield=function(nt,at,xt,yt,Xt,S,O,j){var A=at.data,q=nt.radius,ot=at.elementSize,mt=Jt,ut=be;h.pointToLocalFrame(yt,S,xt,ut);var lt=Math.floor((ut.x-q)/ot)-1,pt=Math.ceil((ut.x+q)/ot)+1,St=Math.floor((ut.y-q)/ot)-1,Ct=Math.ceil((ut.y+q)/ot)+1;if(!(pt<0||Ct<0||lt>A.length||Ct>A[0].length)){lt<0&&(lt=0),pt<0&&(pt=0),St<0&&(St=0),Ct<0&&(Ct=0),lt>=A.length&&(lt=A.length-1),pt>=A.length&&(pt=A.length-1),Ct>=A[0].length&&(Ct=A[0].length-1),St>=A[0].length&&(St=A[0].length-1);var dt=[];at.getRectMinMax(lt,St,pt,Ct,dt);var Gt=dt[0],Yt=dt[1];if(!(ut.z-q>Yt||ut.z+q<Gt))for(var re=this.result,Vt=lt;Vt<pt;Vt++)for(var It=St;It<Ct;It++){var kt=re.length;at.getConvexTrianglePillar(Vt,It,!1),h.pointToWorldFrame(yt,S,at.pillarOffset,mt),xt.distanceTo(mt)<at.pillarConvex.boundingSphereRadius+nt.boundingSphereRadius&&this.sphereConvex(nt,at.pillarConvex,xt,mt,Xt,S,O,j),at.getConvexTrianglePillar(Vt,It,!0),h.pointToWorldFrame(yt,S,at.pillarOffset,mt),xt.distanceTo(mt)<at.pillarConvex.boundingSphereRadius+nt.boundingSphereRadius&&this.sphereConvex(nt,at.pillarConvex,xt,mt,Xt,S,O,j);var ne=re.length-kt;if(ne>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(e,n,a){n.exports=x;var r=e("../shapes/Shape"),i=e("../math/Vec3"),s=e("../math/Quaternion"),c=e("../solver/GSSolver");e("../utils/Vec3Pool"),e("../equations/ContactEquation"),e("../equations/FrictionEquation");var h=e("./Narrowphase"),l=e("../utils/EventTarget"),o=e("../collision/ArrayCollisionMatrix"),u=e("../material/Material"),f=e("../material/ContactMaterial"),v=e("../objects/Body"),m=e("../utils/TupleDictionary"),p=e("../collision/RaycastResult"),g=e("../collision/AABB"),_=e("../collision/Ray"),y=e("../collision/NaiveBroadphase");function x(){l.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new i,this.broadphase=new y,this.bodies=[],this.solver=new c,this.constraints=[],this.narrowphase=new h(this),this.collisionMatrix=new o,this.collisionMatrixPrevious=new o,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new m,this.defaultMaterial=new u("default"),this.defaultContactMaterial=new f(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}x.prototype=new l,new g;var b=new _;if(x.prototype.getContactMaterial=function(B,$){return this.contactMaterialTable.get(B.id,$.id)},x.prototype.numObjects=function(){return this.bodies.length},x.prototype.collisionMatrixTick=function(){var B=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=B,this.collisionMatrix.reset()},x.prototype.add=x.prototype.addBody=function(B){this.bodies.indexOf(B)===-1&&(B.index=this.bodies.length,this.bodies.push(B),B.world=this,B.initPosition.copy(B.position),B.initVelocity.copy(B.velocity),B.timeLastSleepy=this.time,B instanceof v&&(B.initAngularVelocity.copy(B.angularVelocity),B.initQuaternion.copy(B.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=B,this.dispatchEvent(this.addBodyEvent))},x.prototype.addConstraint=function(B){this.constraints.push(B)},x.prototype.removeConstraint=function(B){var $=this.constraints.indexOf(B);$!==-1&&this.constraints.splice($,1)},x.prototype.rayTest=function(B,$,X){X instanceof p?this.raycastClosest(B,$,{skipBackfaces:!0},X):this.raycastAll(B,$,{skipBackfaces:!0},X)},x.prototype.raycastAll=function(B,$,X,N){return X.mode=_.ALL,X.from=B,X.to=$,X.callback=N,b.intersectWorld(this,X)},x.prototype.raycastAny=function(B,$,X,N){return X.mode=_.ANY,X.from=B,X.to=$,X.result=N,b.intersectWorld(this,X)},x.prototype.raycastClosest=function(B,$,X,N){return X.mode=_.CLOSEST,X.from=B,X.to=$,X.result=N,b.intersectWorld(this,X)},x.prototype.remove=function(B){B.world=null;var $=this.bodies.length-1,X=this.bodies,N=X.indexOf(B);if(N!==-1){X.splice(N,1);for(var D=0;D!==X.length;D++)X[D].index=D;this.collisionMatrix.setNumObjects($),this.removeBodyEvent.body=B,this.dispatchEvent(this.removeBodyEvent)}},x.prototype.removeBody=x.prototype.remove,x.prototype.addMaterial=function(B){this.materials.push(B)},x.prototype.addContactMaterial=function(B){this.contactmaterials.push(B),this.contactMaterialTable.set(B.materials[0].id,B.materials[1].id,B)},typeof performance>"u"&&(performance={}),!performance.now){var I=Date.now();performance.timing&&performance.timing.navigationStart&&(I=performance.timing.navigationStart),performance.now=function(){return Date.now()-I}}var G=new i;x.prototype.step=function(B,$,X){if(X=X||10,$=$||0,$===0)this.internalStep(B),this.time+=B;else{var N=Math.floor((this.time+$)/B)-Math.floor(this.time/B);N=Math.min(N,X);for(var D=performance.now(),R=0;R!==N&&(this.internalStep(B),!(performance.now()-D>B*1e3));R++);this.time+=$;for(var L=this.time%B,w=L/B,k=G,J=this.bodies,K=0;K!==J.length;K++){var H=J[K];H.type!==v.STATIC&&H.sleepState!==v.SLEEPING?(H.position.vsub(H.previousPosition,k),k.scale(w,k),H.position.vadd(k,H.interpolatedPosition)):(H.interpolatedPosition.copy(H.position),H.interpolatedQuaternion.copy(H.quaternion))}}};var M={type:"postStep"},T={type:"preStep"},C={type:"collide",body:null,contact:null},F=[],V=[],z=[],U=[];new i,new i,new i,new i,new i,new i,new i,new i,new i,new s;var Y=new s,tt=new s,W=new i;x.prototype.internalStep=function(B){this.dt=B;var $=this.contacts,X=z,N=U,D=this.numObjects(),R=this.bodies,L=this.solver,w=this.gravity,k=this.doProfiling,J=this.profile,K=v.DYNAMIC,H,Q=this.constraints,rt=V;w.norm();var bt=w.x,Mt=w.y,Et=w.z,ct=0;for(k&&(H=performance.now()),ct=0;ct!==D;ct++){var vt=R[ct];if(vt.type&K){var Ht=vt.force,Pt=vt.mass;Ht.x+=Pt*bt,Ht.y+=Pt*Mt,Ht.z+=Pt*Et}}for(var ct=0,qt=this.subsystems.length;ct!==qt;ct++)this.subsystems[ct].update();k&&(H=performance.now()),X.length=0,N.length=0,this.broadphase.collisionPairs(this,X,N),k&&(J.broadphase=performance.now()-H);var Ot=Q.length;for(ct=0;ct!==Ot;ct++){var Rt=Q[ct];if(!Rt.collideConnected)for(var Zt=X.length-1;Zt>=0;Zt-=1)(Rt.bodyA===X[Zt]&&Rt.bodyB===N[Zt]||Rt.bodyB===X[Zt]&&Rt.bodyA===N[Zt])&&(X.splice(Zt,1),N.splice(Zt,1))}this.collisionMatrixTick(),k&&(H=performance.now());var P=F,E=$.length;for(ct=0;ct!==E;ct++)P.push($[ct]);$.length=0;var et=this.frictionEquations.length;for(ct=0;ct!==et;ct++)rt.push(this.frictionEquations[ct]);this.frictionEquations.length=0,this.narrowphase.getContacts(X,N,this,$,P,this.frictionEquations,rt),k&&(J.narrowphase=performance.now()-H),k&&(H=performance.now());for(var ct=0;ct<this.frictionEquations.length;ct++)L.addEquation(this.frictionEquations[ct]);for(var ft=$.length,gt=0;gt!==ft;gt++){var Rt=$[gt],vt=Rt.bi,wt=Rt.bj;Rt.si,Rt.sj;var Dt;if(vt.material&&wt.material?Dt=this.getContactMaterial(vt.material,wt.material)||this.defaultContactMaterial:Dt=this.defaultContactMaterial,Dt.friction,vt.material&&wt.material&&(vt.material.friction>=0&&wt.material.friction>=0&&vt.material.friction*wt.material.friction,vt.material.restitution>=0&&wt.material.restitution>=0&&(Rt.restitution=vt.material.restitution*wt.material.restitution)),L.addEquation(Rt),vt.allowSleep&&vt.type===v.DYNAMIC&&vt.sleepState===v.SLEEPING&&wt.sleepState===v.AWAKE&&wt.type!==v.STATIC){var At=wt.velocity.norm2()+wt.angularVelocity.norm2(),ht=Math.pow(wt.sleepSpeedLimit,2);At>=ht*2&&(vt._wakeUpAfterNarrowphase=!0)}if(wt.allowSleep&&wt.type===v.DYNAMIC&&wt.sleepState===v.SLEEPING&&vt.sleepState===v.AWAKE&&vt.type!==v.STATIC){var Wt=vt.velocity.norm2()+vt.angularVelocity.norm2(),Bt=Math.pow(vt.sleepSpeedLimit,2);Wt>=Bt*2&&(wt._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(vt,wt,!0),this.collisionMatrixPrevious.get(vt,wt)||(C.body=wt,C.contact=Rt,vt.dispatchEvent(C),C.body=vt,wt.dispatchEvent(C))}for(k&&(J.makeContactConstraints=performance.now()-H,H=performance.now()),ct=0;ct!==D;ct++){var vt=R[ct];vt._wakeUpAfterNarrowphase&&(vt.wakeUp(),vt._wakeUpAfterNarrowphase=!1)}var Ot=Q.length;for(ct=0;ct!==Ot;ct++){var Rt=Q[ct];Rt.update();for(var Zt=0,Nt=Rt.equations.length;Zt!==Nt;Zt++){var Ut=Rt.equations[Zt];L.addEquation(Ut)}}L.solve(B,this),k&&(J.solve=performance.now()-H),L.removeAllEquations();var Kt=Math.pow;for(ct=0;ct!==D;ct++){var vt=R[ct];if(vt.type&K){var te=Kt(1-vt.linearDamping,B),ie=vt.velocity;ie.mult(te,ie);var Z=vt.angularVelocity;if(Z){var st=Kt(1-vt.angularDamping,B);Z.mult(st,Z)}}}for(this.dispatchEvent(T),ct=0;ct!==D;ct++){var vt=R[ct];vt.preStep&&vt.preStep.call(vt)}k&&(H=performance.now());var _t=Y,Tt=tt,Ft=this.stepnumber,ee=v.DYNAMIC|v.KINEMATIC,oe=Ft%(this.quatNormalizeSkip+1)===0,de=this.quatNormalizeFast,be=B*.5;for(r.types.PLANE,r.types.CONVEXPOLYHEDRON,ct=0;ct!==D;ct++){var Jt=R[ct],nt=Jt.force,at=Jt.torque;if(Jt.type&ee&&Jt.sleepState!==v.SLEEPING){var xt=Jt.velocity,yt=Jt.angularVelocity,Xt=Jt.position,S=Jt.quaternion,O=Jt.invMass,j=Jt.invInertiaWorld;xt.x+=nt.x*O*B,xt.y+=nt.y*O*B,xt.z+=nt.z*O*B,Jt.angularVelocity&&(j.vmult(at,W),W.mult(B,W),W.vadd(yt,yt)),Xt.x+=xt.x*B,Xt.y+=xt.y*B,Xt.z+=xt.z*B,Jt.angularVelocity&&(_t.set(yt.x,yt.y,yt.z,0),_t.mult(S,Tt),S.x+=be*Tt.x,S.y+=be*Tt.y,S.z+=be*Tt.z,S.w+=be*Tt.w,oe&&(de?S.normalizeFast():S.normalize())),Jt.aabb&&(Jt.aabbNeedsUpdate=!0),Jt.updateInertiaWorld&&Jt.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,k&&(J.integrate=performance.now()-H),this.time+=B,this.stepnumber+=1,this.dispatchEvent(M),ct=0;ct!==D;ct++){var vt=R[ct],A=vt.postStep;A&&A.call(vt)}if(this.allowSleep)for(ct=0;ct!==D;ct++)R[ct].sleepTick(this.time)},x.prototype.clearForces=function(){for(var B=this.bodies,$=B.length,X=0;X!==$;X++){var N=B[X];N.force,N.torque,N.force.set(0,0,0),N.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})})($d);function Kd(d,t=!1){const e=d[0].index!==null,n=new Set(Object.keys(d[0].attributes)),a=new Set(Object.keys(d[0].morphAttributes)),r={},i={},s=d[0].morphTargetsRelative,c=new pn;let h=0;for(let l=0;l<d.length;++l){const o=d[l];let u=0;if(e!==(o.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+l+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in o.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+l+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(o.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+l+". Make sure all geometries have the same number of attributes."),null;if(s!==o.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+l+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in o.morphAttributes){if(!a.has(f))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+l+".  .morphAttributes must be consistent throughout all geometries."),null;i[f]===void 0&&(i[f]=[]),i[f].push(o.morphAttributes[f])}if(t){let f;if(e)f=o.index.count;else if(o.attributes.position!==void 0)f=o.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+l+". The geometry must have either an index or a position attribute"),null;c.addGroup(h,f,l),h+=f}}if(e){let l=0;const o=[];for(let u=0;u<d.length;++u){const f=d[u].index;for(let v=0;v<f.count;++v)o.push(f.getX(v)+l);l+=d[u].attributes.position.count}c.setIndex(o)}for(const l in r){const o=oa(r[l]);if(!o)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+l+" attribute."),null;c.setAttribute(l,o)}for(const l in i){const o=i[l][0].length;if(o===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[l]=[];for(let u=0;u<o;++u){const f=[];for(let m=0;m<i[l].length;++m)f.push(i[l][m][u]);const v=oa(f);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+l+" morphAttribute."),null;c.morphAttributes[l].push(v)}}return c}function oa(d){let t,e,n,a=0;for(let s=0;s<d.length;++s){const c=d[s];if(c.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=c.itemSize),e!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=c.normalized),n!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;a+=c.array.length}const r=new t(a);let i=0;for(let s=0;s<d.length;++s)r.set(d[s].array,i),i+=d[s].array.length;return new tn(r,e,n)}let zt,Br,Yi=11,Jd=.25;const Qd=new Zd;let la=0;class tf{constructor(t){zt=this,zt.canvas=t,zt.sizes={width:window.innerWidth,height:window.innerHeight},zt.textures={ball:"ball.png",wall:"brick.png",floor:"concrete.png"},Br=zt.generateSquareMaze(Yi),Br[Yi-1][Yi-2]=!1,zt.objectsToUpdate=[],zt.physicsWorld(),zt.world(),zt.render(),zt.update(),window.addEventListener("resize",zt.resize),keyboardJS.bind("up",()=>{zt.objectsToUpdate[0].body.position.z+=-.25}),keyboardJS.bind("down",()=>{zt.objectsToUpdate[0].body.position.z+=.25}),keyboardJS.bind("left",()=>{zt.objectsToUpdate[0].body.position.x+=-.25}),keyboardJS.bind("right",()=>{zt.objectsToUpdate[0].body.position.x+=.25})}generateSquareMaze(t){function e(i,s,c){for(i[s][c]=!1;;){let h=[];if(s>1&&i[s-2][c]==!0&&h.push([-1,0]),s<i.dimension-2&&i[s+2][c]==!0&&h.push([1,0]),c>1&&i[s][c-2]==!0&&h.push([0,-1]),c<i.dimension-2&&i[s][c+2]==!0&&h.push([0,1]),h.length==0)return i;const l=h[Math.floor(Math.random()*h.length)];i[s+l[0]][c+l[1]]=!1,i=e(i,s+l[0]*2,c+l[1]*2)}}let n=new Array(t);n.dimension=t;for(var a=0;a<t;a++){n[a]=new Array(t);for(var r=0;r<t;r++)n[a][r]=!0}return n=e(n,1,1),n}generateWalls(t){const e=[],n=new Fe.Body({mass:0});for(let c=0;c<t.dimension;c++)for(let h=0;h<t.dimension;h++)if(t[c][h]){const l=new oi(1,1,1);l.translate(c,h,.5),e.push(l);const o=new Fe.Box(new Fe.Vec3(1,1,1));n.addShape(o,new Fe.Vec3(c,h,.5))}const a=Kd(e,!0),r=new Ir().load(zt.textures.wall),i=new Dr({map:r}),s=new Qe(a,i);s.rotation.x=-Math.PI*.5,zt.scene.add(s),zt.physicsWorld.addBody(n)}generateFloor(t){const e=new Ji(t*10,t*10,t,t),n=new Ir().load(zt.textures.floor);n.wrapS=n.wrapT=Zi,n.repeat.set(t*5,t*5);const a=new Dr({map:n}),r=new Qe(e,a);r.position.set(0,0,0),r.rotation.x=-Math.PI*.5;const i=new Fe.Plane,s=new Fe.Body({mass:0,shape:i});s.quaternion.setFromAxisAngle(new Fe.Vec3(-1,0,0),Math.PI*.5),zt.scene.add(r),zt.physicsWorld.addBody(s)}generateBall(t,e){const n=new qr(t,32,16),a=new Ir().load(zt.textures.ball),r=new Dr({map:a}),i=new Qe(n,r);i.position.copy(e),zt.scene.add(i);const s=new Fe.Sphere(t),c=new Fe.Body({mass:1,shape:s});c.position.copy(e),zt.physicsWorld.addBody(c),zt.objectsToUpdate.push({mesh:i,body:c})}physicsWorld(){zt.physicsWorld=new Fe.World,zt.physicsWorld.gravity.set(0,-9.82,0);const t=new Fe.Material("default"),e=new Fe.ContactMaterial(t,t,{friction:.1,restitution:0});zt.physicsWorld.addContactMaterial(e),zt.physicsWorld.defaultContactMaterial=e}world(){zt.scene=new kd,zt.light=new jd(16777215),zt.scene.add(zt.light),zt.camera=new Ye(75,zt.sizes.width/zt.sizes.height,.1,100),zt.camera.position.set(1,5,-1),zt.camera.rotation.x=-Math.PI*.5,zt.ball=zt.generateBall(Jd,{x:1,y:4,z:-1}),zt.walls=zt.generateWalls(Br),zt.floor=zt.generateFloor(Yi),console.log(zt.ball)}render(){zt.renderer=new Hr({canvas:zt.canvas}),zt.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),zt.renderer.setSize(zt.sizes.width,zt.sizes.height)}resize(){zt.sizes.width=window.innerWidth,zt.sizes.height=window.innerHeight,zt.camera.aspect=zt.sizes.width/zt.sizes.height,zt.camera.updateProjectionMatrix(),zt.renderer.setSize(zt.sizes.width,zt.sizes.height),zt.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}updatePhysicsWorld(){for(const n of zt.objectsToUpdate)n.mesh.position.copy(n.body.position);const t=Qd.getElapsedTime(),e=t-la;la=t,zt.physicsWorld.step(1/60,e,3)}update(){zt.updatePhysicsWorld(),zt.renderer.render(zt.scene,zt.camera),requestAnimationFrame(zt.update)}}new tf(document.querySelector("canvas.webgl"));
//# sourceMappingURL=index-e377b2bb.js.map
