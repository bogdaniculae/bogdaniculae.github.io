var Va=(m,t)=>()=>(t||m((t={exports:{}}).exports,t),t.exports);var sf=Va((Na,Wr)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(l){if(l.ep)return;l.ep=!0;const s=e(l);fetch(l.href,s)}})();(function(m,t){typeof Na=="object"&&typeof Wr<"u"?Wr.exports=t():typeof define=="function"&&define.amd?define(t):(m=m||self).keyboardJS=t()})(globalThis,function(){function m(o){return(m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i})(o)}function t(o,i){if(!(o instanceof i))throw new TypeError("Cannot call a class as a function")}function e(o,i){for(var c=0;c<i.length;c++){var h=i[c];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(o,h.key,h)}}function n(o,i,c){return i&&e(o.prototype,i),c&&e(o,c),o}function l(o){return function(i){if(Array.isArray(i))return s(i)}(o)||function(i){if(typeof Symbol<"u"&&Symbol.iterator in Object(i))return Array.from(i)}(o)||function(i,c){if(i){if(typeof i=="string")return s(i,c);var h=Object.prototype.toString.call(i).slice(8,-1);if(h==="Object"&&i.constructor&&(h=i.constructor.name),h==="Map"||h==="Set")return Array.from(i);if(h==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h))return s(i,c)}}(o)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function s(o,i){(i==null||i>o.length)&&(i=o.length);for(var c=0,h=new Array(i);c<i;c++)h[c]=o[c];return h}var r=function(){function o(i){t(this,o),this.sourceStr=i,this.subCombos=o.parseComboStr(i),this.keyNames=this.subCombos.reduce(function(c,h){return c.concat(h)},[])}return n(o,[{key:"check",value:function(i){for(var c=0,h=0;h<this.subCombos.length;h+=1)if((c=this._checkSubCombo(this.subCombos[h],c,i))===-1)return!1;return!0}},{key:"isEqual",value:function(i){if(!i||typeof i!="string"&&m(i)!=="object"||(typeof i=="string"&&(i=new o(i)),this.subCombos.length!==i.subCombos.length))return!1;for(var c=0;c<this.subCombos.length;c+=1)if(this.subCombos[c].length!==i.subCombos[c].length)return!1;for(var h=0;h<this.subCombos.length;h+=1){for(var v=this.subCombos[h],p=i.subCombos[h].slice(0),f=0;f<v.length;f+=1){var g=v[f],y=p.indexOf(g);y>-1&&p.splice(y,1)}if(p.length!==0)return!1}return!0}},{key:"_checkSubCombo",value:function(i,c,h){i=i.slice(0),h=h.slice(c);for(var v=c,p=0;p<i.length;p+=1){var f=i[p];if(f[0]==="\\"){var g=f.slice(1);g!==o.comboDeliminator&&g!==o.keyDeliminator||(f=g)}var y=h.indexOf(f);if(y>-1&&(i.splice(p,1),p-=1,y>v&&(v=y),i.length===0))return v}return-1}}]),o}();r.comboDeliminator=">",r.keyDeliminator="+",r.parseComboStr=function(o){for(var i=r._splitStr(o,r.comboDeliminator),c=[],h=0;h<i.length;h+=1)c.push(r._splitStr(i[h],r.keyDeliminator));return c},r._splitStr=function(o,i){for(var c=o,h=i,v="",p=[],f=0;f<c.length;f+=1)f>0&&c[f]===h&&c[f-1]!=="\\"&&(p.push(v.trim()),v="",f+=1),v+=c[f];return v&&p.push(v.trim()),p};var a=function(){function o(i){t(this,o),this.localeName=i,this.activeTargetKeys=[],this.pressedKeys=[],this._appliedMacros=[],this._keyMap={},this._killKeyCodes=[],this._macros=[]}return n(o,[{key:"bindKeyCode",value:function(i,c){typeof c=="string"&&(c=[c]),this._keyMap[i]=c}},{key:"bindMacro",value:function(i,c){typeof c=="string"&&(c=[c]);var h=null;typeof c=="function"&&(h=c,c=null);var v={keyCombo:new r(i),keyNames:c,handler:h};this._macros.push(v)}},{key:"getKeyCodes",value:function(i){var c=[];for(var h in this._keyMap)this._keyMap[h].indexOf(i)>-1&&c.push(0|h);return c}},{key:"getKeyNames",value:function(i){return this._keyMap[i]||[]}},{key:"setKillKey",value:function(i){if(typeof i!="string")this._killKeyCodes.push(i);else for(var c=this.getKeyCodes(i),h=0;h<c.length;h+=1)this.setKillKey(c[h])}},{key:"pressKey",value:function(i){if(typeof i!="string"){this.activeTargetKeys.length=0;for(var c=this.getKeyNames(i),h=0;h<c.length;h+=1)this.activeTargetKeys.push(c[h]),this.pressedKeys.indexOf(c[h])===-1&&this.pressedKeys.push(c[h]);this._applyMacros()}else for(var v=this.getKeyCodes(i),p=0;p<v.length;p+=1)this.pressKey(v[p])}},{key:"releaseKey",value:function(i){if(typeof i=="string")for(var c=this.getKeyCodes(i),h=0;h<c.length;h+=1)this.releaseKey(c[h]);else{var v=this.getKeyNames(i);if(this._killKeyCodes.indexOf(i)!==-1)this.pressedKeys.length=0;else for(var p=0;p<v.length;p+=1){var f=this.pressedKeys.indexOf(v[p]);f>-1&&this.pressedKeys.splice(f,1)}this.activeTargetKeys.length=0,this._clearMacros()}}},{key:"_applyMacros",value:function(){for(var i=this._macros.slice(0),c=0;c<i.length;c+=1){var h=i[c];if(h.keyCombo.check(this.pressedKeys)){h.handler&&(h.keyNames=h.handler(this.pressedKeys));for(var v=0;v<h.keyNames.length;v+=1)this.pressedKeys.indexOf(h.keyNames[v])===-1&&this.pressedKeys.push(h.keyNames[v]);this._appliedMacros.push(h)}}}},{key:"_clearMacros",value:function(){for(var i=0;i<this._appliedMacros.length;i+=1){var c=this._appliedMacros[i];if(!c.keyCombo.check(this.pressedKeys)){for(var h=0;h<c.keyNames.length;h+=1){var v=this.pressedKeys.indexOf(c.keyNames[h]);v>-1&&this.pressedKeys.splice(v,1)}c.handler&&(c.keyNames=null),this._appliedMacros.splice(i,1),i-=1}}}}]),o}(),u=function(){function o(i,c,h,v){t(this,o),this._locale=null,this._currentContext="",this._contexts={},this._listeners=[],this._appliedListeners=[],this._locales={},this._targetElement=null,this._targetWindow=null,this._targetPlatform="",this._targetUserAgent="",this._isModernBrowser=!1,this._targetKeyDownBinding=null,this._targetKeyUpBinding=null,this._targetResetBinding=null,this._paused=!1,this._contexts.global={listeners:this._listeners,targetWindow:i,targetElement:c,targetPlatform:h,targetUserAgent:v},this.setContext("global")}return n(o,[{key:"setLocale",value:function(i,c){var h=null;return typeof i=="string"?c?c(h=new a(i),this._targetPlatform,this._targetUserAgent):h=this._locales[i]||null:i=(h=i)._localeName,this._locale=h,this._locales[i]=h,h&&(this._locale.pressedKeys=h.pressedKeys),this}},{key:"getLocale",value:function(i){return i||(i=this._locale.localeName),this._locales[i]||null}},{key:"bind",value:function(i,c,h,v){if(i!==null&&typeof i!="function"||(v=h,h=c,c=i,i=null),i&&m(i)==="object"&&typeof i.length=="number"){for(var p=0;p<i.length;p+=1)this.bind(i[p],c,h);return this}return this._listeners.push({keyCombo:i?new r(i):null,pressHandler:c||null,releaseHandler:h||null,preventRepeat:!1,preventRepeatByDefault:v||!1,executingHandler:!1}),this}},{key:"addListener",value:function(i,c,h,v){return this.bind(i,c,h,v)}},{key:"on",value:function(i,c,h,v){return this.bind(i,c,h,v)}},{key:"bindPress",value:function(i,c,h){return this.bind(i,c,null,h)}},{key:"bindRelease",value:function(i,c){return this.bind(i,null,c,preventRepeatByDefault)}},{key:"unbind",value:function(i,c,h){if(i!==null&&typeof i!="function"||(h=c,c=i,i=null),i&&m(i)==="object"&&typeof i.length=="number"){for(var v=0;v<i.length;v+=1)this.unbind(i[v],c,h);return this}for(var p=0;p<this._listeners.length;p+=1){var f=this._listeners[p],g=!i&&!f.keyCombo||f.keyCombo&&f.keyCombo.isEqual(i),y=!c&&!h||!c&&!f.pressHandler||c===f.pressHandler,_=!c&&!h||!h&&!f.releaseHandler||h===f.releaseHandler;g&&y&&_&&(this._listeners.splice(p,1),p-=1)}return this}},{key:"removeListener",value:function(i,c,h){return this.unbind(i,c,h)}},{key:"off",value:function(i,c,h){return this.unbind(i,c,h)}},{key:"setContext",value:function(i){if(this._locale&&this.releaseAllKeys(),!this._contexts[i]){var c=this._contexts.global;this._contexts[i]={listeners:[],targetWindow:c.targetWindow,targetElement:c.targetElement,targetPlatform:c.targetPlatform,targetUserAgent:c.targetUserAgent}}var h=this._contexts[i];return this._currentContext=i,this._listeners=h.listeners,this.stop(),this.watch(h.targetWindow,h.targetElement,h.targetPlatform,h.targetUserAgent),this}},{key:"getContext",value:function(){return this._currentContext}},{key:"withContext",value:function(i,c){var h=this.getContext();return this.setContext(i),c(),this.setContext(h),this}},{key:"watch",value:function(i,c,h,v){var p=this;this.stop();var f=typeof globalThis<"u"?globalThis:typeof global<"u"?global:typeof window<"u"?window:{};if(!i){if(!f.addEventListener&&!f.attachEvent){if(this._currentContext==="global")return;throw new Error("Cannot find window functions addEventListener or attachEvent.")}i=f}if(typeof i.nodeType=="number"&&(v=h,h=c,c=i,i=f),!i.addEventListener&&!i.attachEvent)throw new Error("Cannot find addEventListener or attachEvent methods on targetWindow.");this._isModernBrowser=!!i.addEventListener;var g=i.navigator&&i.navigator.userAgent||"",y=i.navigator&&i.navigator.platform||"";c&&c!==null||(c=i.document),h&&h!==null||(h=y),v&&v!==null||(v=g),this._targetKeyDownBinding=function(x){p.pressKey(x.keyCode,x),p._handleCommandBug(x,y)},this._targetKeyUpBinding=function(x){p.releaseKey(x.keyCode,x)},this._targetResetBinding=function(x){p.releaseAllKeys(x)},this._bindEvent(c,"keydown",this._targetKeyDownBinding),this._bindEvent(c,"keyup",this._targetKeyUpBinding),this._bindEvent(i,"focus",this._targetResetBinding),this._bindEvent(i,"blur",this._targetResetBinding),this._targetElement=c,this._targetWindow=i,this._targetPlatform=h,this._targetUserAgent=v;var _=this._contexts[this._currentContext];return _.targetWindow=this._targetWindow,_.targetElement=this._targetElement,_.targetPlatform=this._targetPlatform,_.targetUserAgent=this._targetUserAgent,this}},{key:"stop",value:function(){if(this._targetElement&&this._targetWindow)return this._unbindEvent(this._targetElement,"keydown",this._targetKeyDownBinding),this._unbindEvent(this._targetElement,"keyup",this._targetKeyUpBinding),this._unbindEvent(this._targetWindow,"focus",this._targetResetBinding),this._unbindEvent(this._targetWindow,"blur",this._targetResetBinding),this._targetWindow=null,this._targetElement=null,this}},{key:"pressKey",value:function(i,c){if(this._paused)return this;if(!this._locale)throw new Error("Locale not set");return this._locale.pressKey(i),this._applyBindings(c),this}},{key:"releaseKey",value:function(i,c){if(this._paused)return this;if(!this._locale)throw new Error("Locale not set");return this._locale.releaseKey(i),this._clearBindings(c),this}},{key:"releaseAllKeys",value:function(i){if(this._paused)return this;if(!this._locale)throw new Error("Locale not set");return this._locale.pressedKeys.length=0,this._clearBindings(i),this}},{key:"pause",value:function(){return this._paused||(this._locale&&this.releaseAllKeys(),this._paused=!0),this}},{key:"resume",value:function(){return this._paused=!1,this}},{key:"reset",value:function(){return this.releaseAllKeys(),this._listeners.length=0,this}},{key:"_bindEvent",value:function(i,c,h){return this._isModernBrowser?i.addEventListener(c,h,!1):i.attachEvent("on"+c,h)}},{key:"_unbindEvent",value:function(i,c,h){return this._isModernBrowser?i.removeEventListener(c,h,!1):i.detachEvent("on"+c,h)}},{key:"_getGroupedListeners",value:function(){var i=[],c=[],h=this._listeners;return this._currentContext!=="global"&&(h=[].concat(l(h),l(this._contexts.global.listeners))),h.sort(function(v,p){return(p.keyCombo?p.keyCombo.keyNames.length:0)-(v.keyCombo?v.keyCombo.keyNames.length:0)}).forEach(function(v){for(var p=-1,f=0;f<c.length;f+=1)(c[f]===null&&v.keyCombo===null||c[f]!==null&&c[f].isEqual(v.keyCombo))&&(p=f);p===-1&&(p=c.length,c.push(v.keyCombo)),i[p]||(i[p]=[]),i[p].push(v)}),i}},{key:"_applyBindings",value:function(i){var c=this,h=!1;i||(i={}),i.preventRepeat=function(){h=!0},i.pressedKeys=this._locale.pressedKeys.slice(0);for(var v=this._locale.activeTargetKeys,p=this._locale.pressedKeys.slice(0),f=this._getGroupedListeners(),g=function(_){var x=f[_],w=x[0].keyCombo;if(w===null||w.check(p)&&v.some(function(C){return w.keyNames.includes(C)})){for(var I=0;I<x.length;I+=1){var V=x[I];V.executingHandler||!V.pressHandler||V.preventRepeat||(V.executingHandler=!0,V.pressHandler.call(c,i),V.executingHandler=!1,(h||V.preventRepeatByDefault)&&(V.preventRepeat=!0,h=!1)),c._appliedListeners.indexOf(V)===-1&&c._appliedListeners.push(V)}if(w)for(var b=0;b<w.keyNames.length;b+=1){var T=p.indexOf(w.keyNames[b]);T!==-1&&(p.splice(T,1),b-=1)}}},y=0;y<f.length;y+=1)g(y)}},{key:"_clearBindings",value:function(i){i||(i={}),i.pressedKeys=this._locale.pressedKeys.slice(0);for(var c=0;c<this._appliedListeners.length;c+=1){var h=this._appliedListeners[c],v=h.keyCombo;v!==null&&v.check(this._locale.pressedKeys)||(h.preventRepeat=!1,v===null&&i.pressedKeys.length!==0||(this._appliedListeners.splice(c,1),c-=1),!h.executingHandler&&h.releaseHandler&&(h.executingHandler=!0,h.releaseHandler.call(this,i),h.executingHandler=!1))}}},{key:"_handleCommandBug",value:function(i,c){c.match("Mac")&&this._locale.pressedKeys.includes("command")&&!["shift","ctrl","alt","capslock","tab","command"].includes(this._locale.getKeyNames(i.keyCode)[0])&&this._targetKeyUpBinding(i)}}]),o}(),d=new u;return d.setLocale("us",function(o,i,c){o.bindKeyCode(3,["cancel"]),o.bindKeyCode(8,["backspace"]),o.bindKeyCode(9,["tab"]),o.bindKeyCode(12,["clear"]),o.bindKeyCode(13,["enter"]),o.bindKeyCode(16,["shift"]),o.bindKeyCode(17,["ctrl"]),o.bindKeyCode(18,["alt","menu"]),o.bindKeyCode(19,["pause","break"]),o.bindKeyCode(20,["capslock"]),o.bindKeyCode(27,["escape","esc"]),o.bindKeyCode(32,["space","spacebar"]),o.bindKeyCode(33,["pageup"]),o.bindKeyCode(34,["pagedown"]),o.bindKeyCode(35,["end"]),o.bindKeyCode(36,["home"]),o.bindKeyCode(37,["left"]),o.bindKeyCode(38,["up"]),o.bindKeyCode(39,["right"]),o.bindKeyCode(40,["down"]),o.bindKeyCode(41,["select"]),o.bindKeyCode(42,["printscreen"]),o.bindKeyCode(43,["execute"]),o.bindKeyCode(44,["snapshot"]),o.bindKeyCode(45,["insert","ins"]),o.bindKeyCode(46,["delete","del"]),o.bindKeyCode(47,["help"]),o.bindKeyCode(145,["scrolllock","scroll"]),o.bindKeyCode(188,["comma",","]),o.bindKeyCode(190,["period","."]),o.bindKeyCode(191,["slash","forwardslash","/"]),o.bindKeyCode(192,["graveaccent","`"]),o.bindKeyCode(219,["openbracket","["]),o.bindKeyCode(220,["backslash","\\"]),o.bindKeyCode(221,["closebracket","]"]),o.bindKeyCode(222,["apostrophe","'"]),o.bindKeyCode(48,["zero","0"]),o.bindKeyCode(49,["one","1"]),o.bindKeyCode(50,["two","2"]),o.bindKeyCode(51,["three","3"]),o.bindKeyCode(52,["four","4"]),o.bindKeyCode(53,["five","5"]),o.bindKeyCode(54,["six","6"]),o.bindKeyCode(55,["seven","7"]),o.bindKeyCode(56,["eight","8"]),o.bindKeyCode(57,["nine","9"]),o.bindKeyCode(96,["numzero","num0"]),o.bindKeyCode(97,["numone","num1"]),o.bindKeyCode(98,["numtwo","num2"]),o.bindKeyCode(99,["numthree","num3"]),o.bindKeyCode(100,["numfour","num4"]),o.bindKeyCode(101,["numfive","num5"]),o.bindKeyCode(102,["numsix","num6"]),o.bindKeyCode(103,["numseven","num7"]),o.bindKeyCode(104,["numeight","num8"]),o.bindKeyCode(105,["numnine","num9"]),o.bindKeyCode(106,["nummultiply","num*"]),o.bindKeyCode(107,["numadd","num+"]),o.bindKeyCode(108,["numenter"]),o.bindKeyCode(109,["numsubtract","num-"]),o.bindKeyCode(110,["numdecimal","num."]),o.bindKeyCode(111,["numdivide","num/"]),o.bindKeyCode(144,["numlock","num"]),o.bindKeyCode(112,["f1"]),o.bindKeyCode(113,["f2"]),o.bindKeyCode(114,["f3"]),o.bindKeyCode(115,["f4"]),o.bindKeyCode(116,["f5"]),o.bindKeyCode(117,["f6"]),o.bindKeyCode(118,["f7"]),o.bindKeyCode(119,["f8"]),o.bindKeyCode(120,["f9"]),o.bindKeyCode(121,["f10"]),o.bindKeyCode(122,["f11"]),o.bindKeyCode(123,["f12"]),o.bindKeyCode(124,["f13"]),o.bindKeyCode(125,["f14"]),o.bindKeyCode(126,["f15"]),o.bindKeyCode(127,["f16"]),o.bindKeyCode(128,["f17"]),o.bindKeyCode(129,["f18"]),o.bindKeyCode(130,["f19"]),o.bindKeyCode(131,["f20"]),o.bindKeyCode(132,["f21"]),o.bindKeyCode(133,["f22"]),o.bindKeyCode(134,["f23"]),o.bindKeyCode(135,["f24"]),o.bindMacro("shift + `",["tilde","~"]),o.bindMacro("shift + 1",["exclamation","exclamationpoint","!"]),o.bindMacro("shift + 2",["at","@"]),o.bindMacro("shift + 3",["number","#"]),o.bindMacro("shift + 4",["dollar","dollars","dollarsign","$"]),o.bindMacro("shift + 5",["percent","%"]),o.bindMacro("shift + 6",["caret","^"]),o.bindMacro("shift + 7",["ampersand","and","&"]),o.bindMacro("shift + 8",["asterisk","*"]),o.bindMacro("shift + 9",["openparen","("]),o.bindMacro("shift + 0",["closeparen",")"]),o.bindMacro("shift + -",["underscore","_"]),o.bindMacro("shift + =",["plus","+"]),o.bindMacro("shift + [",["opencurlybrace","opencurlybracket","{"]),o.bindMacro("shift + ]",["closecurlybrace","closecurlybracket","}"]),o.bindMacro("shift + \\",["verticalbar","|"]),o.bindMacro("shift + ;",["colon",":"]),o.bindMacro("shift + '",["quotationmark","'"]),o.bindMacro("shift + !,",["openanglebracket","<"]),o.bindMacro("shift + .",["closeanglebracket",">"]),o.bindMacro("shift + /",["questionmark","?"]),i.match("Mac")?o.bindMacro("command",["mod","modifier"]):o.bindMacro("ctrl",["mod","modifier"]);for(var h=65;h<=90;h+=1){var v=String.fromCharCode(h+32),p=String.fromCharCode(h);o.bindKeyCode(h,v),o.bindMacro("shift + "+v,p),o.bindMacro("capslock + "+v,p)}var f,g,y=c.match("Firefox")?59:186,_=c.match("Firefox")?173:189,x=c.match("Firefox")?61:187;i.match("Mac")&&(c.match("Safari")||c.match("Chrome"))?(f=91,g=93):i.match("Mac")&&c.match("Opera")?(f=17,g=17):i.match("Mac")&&c.match("Firefox")&&(f=224,g=224),o.bindKeyCode(y,["semicolon",";"]),o.bindKeyCode(_,["dash","-"]),o.bindKeyCode(x,["equal","equalsign","="]),o.bindKeyCode(f,["command","windows","win","super","leftcommand","leftwindows","leftwin","leftsuper"]),o.bindKeyCode(g,["command","windows","win","super","rightcommand","rightwindows","rightwin","rightsuper"]),o.setKillKey("command")}),d.Keyboard=u,d.Locale=a,d.KeyCombo=r,d});/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kr="150",Wa=0,Kr=1,ka=2,ua=1,Ga=2,vi=3,Mn=0,Ge=1,yn=2,bn=0,Qn=1,Yr=2,jr=3,Zr=4,Ha=5,$n=100,qa=101,Xa=102,$r=103,Jr=104,Ka=200,Ya=201,ja=202,Za=203,ha=204,da=205,$a=206,Ja=207,Qa=208,to=209,eo=210,no=0,io=1,ro=2,Fr=3,so=4,ao=5,oo=6,lo=7,fa=0,co=1,uo=2,fn=0,ho=1,fo=2,po=3,mo=4,vo=5,pa=300,ni=301,ii=302,zr=303,Nr=304,Zi=306,ji=1e3,$e=1001,Ur=1002,Ie=1003,Qr=1004,tr=1005,Xe=1006,go=1007,xi=1008,Bn=1009,xo=1010,yo=1011,ma=1012,_o=1013,Pn=1014,Dn=1015,yi=1016,bo=1017,Mo=1018,ti=1020,wo=1021,Je=1023,So=1024,Eo=1025,In=1026,ri=1027,To=1028,Ao=1029,Co=1030,Ro=1031,Lo=1033,er=33776,nr=33777,ir=33778,rr=33779,ts=35840,es=35841,ns=35842,is=35843,Po=36196,rs=37492,ss=37496,as=37808,os=37809,ls=37810,cs=37811,us=37812,hs=37813,ds=37814,fs=37815,ps=37816,ms=37817,vs=37818,gs=37819,xs=37820,ys=37821,sr=36492,Do=36283,_s=36284,bs=36285,Ms=36286,Fn=3e3,ce=3001,Io=3200,Bo=3201,va=0,Fo=1,nn="srgb",_i="srgb-linear",ga="display-p3",ar=7680,zo=519,ws=35044,Ss="300 es",Or=1035;class ai{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const l=this._listeners[t];if(l!==void 0){const s=l.indexOf(e);s!==-1&&l.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const l=n.slice(0);for(let s=0,r=l.length;s<r;s++)l[s].call(this,t);t.target=null}}}const Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],or=Math.PI/180,Es=180/Math.PI;function Mi(){const m=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[m&255]+Ce[m>>8&255]+Ce[m>>16&255]+Ce[m>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function ke(m,t,e){return Math.max(t,Math.min(e,m))}function No(m,t){return(m%t+t)%t}function lr(m,t,e){return(1-e)*m+e*t}function Ts(m){return(m&m-1)===0&&m!==0}function Uo(m){return Math.pow(2,Math.floor(Math.log(m)/Math.LN2))}function Ti(m,t){switch(t.constructor){case Float32Array:return m;case Uint16Array:return m/65535;case Uint8Array:return m/255;case Int16Array:return Math.max(m/32767,-1);case Int8Array:return Math.max(m/127,-1);default:throw new Error("Invalid component type.")}}function Oe(m,t){switch(t.constructor){case Float32Array:return m;case Uint16Array:return Math.round(m*65535);case Uint8Array:return Math.round(m*255);case Int16Array:return Math.round(m*32767);case Int8Array:return Math.round(m*127);default:throw new Error("Invalid component type.")}}class le{constructor(t=0,e=0){le.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,l=t.elements;return this.x=l[0]*e+l[3]*n+l[6],this.y=l[1]*e+l[4]*n+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),l=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*l+t.x,this.y=s*l+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,l,s,r,a,u,d){const o=this.elements;return o[0]=t,o[1]=l,o[2]=a,o[3]=e,o[4]=s,o[5]=u,o[6]=n,o[7]=r,o[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,l=e.elements,s=this.elements,r=n[0],a=n[3],u=n[6],d=n[1],o=n[4],i=n[7],c=n[2],h=n[5],v=n[8],p=l[0],f=l[3],g=l[6],y=l[1],_=l[4],x=l[7],w=l[2],I=l[5],V=l[8];return s[0]=r*p+a*y+u*w,s[3]=r*f+a*_+u*I,s[6]=r*g+a*x+u*V,s[1]=d*p+o*y+i*w,s[4]=d*f+o*_+i*I,s[7]=d*g+o*x+i*V,s[2]=c*p+h*y+v*w,s[5]=c*f+h*_+v*I,s[8]=c*g+h*x+v*V,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],l=t[2],s=t[3],r=t[4],a=t[5],u=t[6],d=t[7],o=t[8];return e*r*o-e*a*d-n*s*o+n*a*u+l*s*d-l*r*u}invert(){const t=this.elements,e=t[0],n=t[1],l=t[2],s=t[3],r=t[4],a=t[5],u=t[6],d=t[7],o=t[8],i=o*r-a*d,c=a*u-o*s,h=d*s-r*u,v=e*i+n*c+l*h;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/v;return t[0]=i*p,t[1]=(l*d-o*n)*p,t[2]=(a*n-l*r)*p,t[3]=c*p,t[4]=(o*e-l*u)*p,t[5]=(l*s-a*e)*p,t[6]=h*p,t[7]=(n*u-d*e)*p,t[8]=(r*e-n*s)*p,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,l,s,r,a){const u=Math.cos(s),d=Math.sin(s);return this.set(n*u,n*d,-n*(u*r+d*a)+r+t,-l*d,l*u,-l*(-d*r+u*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(cr.makeScale(t,e)),this}rotate(t){return this.premultiply(cr.makeRotation(-t)),this}translate(t,e){return this.premultiply(cr.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let l=0;l<9;l++)if(e[l]!==n[l])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const cr=new Be;function xa(m){for(let t=m.length-1;t>=0;--t)if(m[t]>=65535)return!0;return!1}function bi(m){return document.createElementNS("http://www.w3.org/1999/xhtml",m)}class wi{constructor(t=0,e=0,n=0,l=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=l}static slerpFlat(t,e,n,l,s,r,a){let u=n[l+0],d=n[l+1],o=n[l+2],i=n[l+3];const c=s[r+0],h=s[r+1],v=s[r+2],p=s[r+3];if(a===0){t[e+0]=u,t[e+1]=d,t[e+2]=o,t[e+3]=i;return}if(a===1){t[e+0]=c,t[e+1]=h,t[e+2]=v,t[e+3]=p;return}if(i!==p||u!==c||d!==h||o!==v){let f=1-a;const g=u*c+d*h+o*v+i*p,y=g>=0?1:-1,_=1-g*g;if(_>Number.EPSILON){const w=Math.sqrt(_),I=Math.atan2(w,g*y);f=Math.sin(f*I)/w,a=Math.sin(a*I)/w}const x=a*y;if(u=u*f+c*x,d=d*f+h*x,o=o*f+v*x,i=i*f+p*x,f===1-a){const w=1/Math.sqrt(u*u+d*d+o*o+i*i);u*=w,d*=w,o*=w,i*=w}}t[e]=u,t[e+1]=d,t[e+2]=o,t[e+3]=i}static multiplyQuaternionsFlat(t,e,n,l,s,r){const a=n[l],u=n[l+1],d=n[l+2],o=n[l+3],i=s[r],c=s[r+1],h=s[r+2],v=s[r+3];return t[e]=a*v+o*i+u*h-d*c,t[e+1]=u*v+o*c+d*i-a*h,t[e+2]=d*v+o*h+a*c-u*i,t[e+3]=o*v-a*i-u*c-d*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,l){return this._x=t,this._y=e,this._z=n,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,l=t._y,s=t._z,r=t._order,a=Math.cos,u=Math.sin,d=a(n/2),o=a(l/2),i=a(s/2),c=u(n/2),h=u(l/2),v=u(s/2);switch(r){case"XYZ":this._x=c*o*i+d*h*v,this._y=d*h*i-c*o*v,this._z=d*o*v+c*h*i,this._w=d*o*i-c*h*v;break;case"YXZ":this._x=c*o*i+d*h*v,this._y=d*h*i-c*o*v,this._z=d*o*v-c*h*i,this._w=d*o*i+c*h*v;break;case"ZXY":this._x=c*o*i-d*h*v,this._y=d*h*i+c*o*v,this._z=d*o*v+c*h*i,this._w=d*o*i-c*h*v;break;case"ZYX":this._x=c*o*i-d*h*v,this._y=d*h*i+c*o*v,this._z=d*o*v-c*h*i,this._w=d*o*i+c*h*v;break;case"YZX":this._x=c*o*i+d*h*v,this._y=d*h*i+c*o*v,this._z=d*o*v-c*h*i,this._w=d*o*i-c*h*v;break;case"XZY":this._x=c*o*i-d*h*v,this._y=d*h*i-c*o*v,this._z=d*o*v+c*h*i,this._w=d*o*i+c*h*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,l=Math.sin(n);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],l=e[4],s=e[8],r=e[1],a=e[5],u=e[9],d=e[2],o=e[6],i=e[10],c=n+a+i;if(c>0){const h=.5/Math.sqrt(c+1);this._w=.25/h,this._x=(o-u)*h,this._y=(s-d)*h,this._z=(r-l)*h}else if(n>a&&n>i){const h=2*Math.sqrt(1+n-a-i);this._w=(o-u)/h,this._x=.25*h,this._y=(l+r)/h,this._z=(s+d)/h}else if(a>i){const h=2*Math.sqrt(1+a-n-i);this._w=(s-d)/h,this._x=(l+r)/h,this._y=.25*h,this._z=(u+o)/h}else{const h=2*Math.sqrt(1+i-n-a);this._w=(r-l)/h,this._x=(s+d)/h,this._y=(u+o)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ke(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const l=Math.min(1,e/n);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,l=t._y,s=t._z,r=t._w,a=e._x,u=e._y,d=e._z,o=e._w;return this._x=n*o+r*a+l*d-s*u,this._y=l*o+r*u+s*a-n*d,this._z=s*o+r*d+n*u-l*a,this._w=r*o-n*a-l*u-s*d,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,l=this._y,s=this._z,r=this._w;let a=r*t._w+n*t._x+l*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=l,this._z=s,this;const u=1-a*a;if(u<=Number.EPSILON){const h=1-e;return this._w=h*r+e*this._w,this._x=h*n+e*this._x,this._y=h*l+e*this._y,this._z=h*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const d=Math.sqrt(u),o=Math.atan2(d,a),i=Math.sin((1-e)*o)/d,c=Math.sin(e*o)/d;return this._w=r*i+this._w*c,this._x=n*i+this._x*c,this._y=l*i+this._y*c,this._z=s*i+this._z*c,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),l=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(l),n*Math.sin(s),n*Math.cos(s),e*Math.sin(l))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class it{constructor(t=0,e=0,n=0){it.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(As.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(As.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,l=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*l,this.y=s[1]*e+s[4]*n+s[7]*l,this.z=s[2]*e+s[5]*n+s[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,l=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*l+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*l+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*l+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*l+s[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,l=this.z,s=t.x,r=t.y,a=t.z,u=t.w,d=u*e+r*l-a*n,o=u*n+a*e-s*l,i=u*l+s*n-r*e,c=-s*e-r*n-a*l;return this.x=d*u+c*-s+o*-a-i*-r,this.y=o*u+c*-r+i*-s-d*-a,this.z=i*u+c*-a+d*-r-o*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,l=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*l,this.y=s[1]*e+s[5]*n+s[9]*l,this.z=s[2]*e+s[6]*n+s[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,l=t.y,s=t.z,r=e.x,a=e.y,u=e.z;return this.x=l*u-s*a,this.y=s*r-n*u,this.z=n*a-l*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ur.copy(this).projectOnVector(t),this.sub(ur)}reflect(t){return this.sub(ur.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,l=this.z-t.z;return e*e+n*n+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const l=Math.sin(e)*t;return this.x=l*Math.sin(n),this.y=Math.cos(e)*t,this.z=l*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=l,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ur=new it,As=new wi;function ei(m){return m<.04045?m*.0773993808:Math.pow(m*.9478672986+.0521327014,2.4)}function hr(m){return m<.0031308?m*12.92:1.055*Math.pow(m,.41666)-.055}const Oo=new Be().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Vo=new Be().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),_n=new it;function Wo(m){return m.convertSRGBToLinear(),_n.set(m.r,m.g,m.b).applyMatrix3(Vo),m.setRGB(_n.x,_n.y,_n.z)}function ko(m){return _n.set(m.r,m.g,m.b).applyMatrix3(Oo),m.setRGB(_n.x,_n.y,_n.z).convertLinearToSRGB()}const Go={[_i]:m=>m,[nn]:m=>m.convertSRGBToLinear(),[ga]:Wo},Ho={[_i]:m=>m,[nn]:m=>m.convertLinearToSRGB(),[ga]:ko},Pe={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(m){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!m},get workingColorSpace(){return _i},set workingColorSpace(m){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(m,t,e){if(this.enabled===!1||t===e||!t||!e)return m;const n=Go[t],l=Ho[e];if(n===void 0||l===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return l(n(m))},fromWorkingColorSpace:function(m,t){return this.convert(m,this.workingColorSpace,t)},toWorkingColorSpace:function(m,t){return this.convert(m,t,this.workingColorSpace)}};let Un;class ya{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Un===void 0&&(Un=bi("canvas")),Un.width=t.width,Un.height=t.height;const n=Un.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Un}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=bi("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const l=n.getImageData(0,0,t.width,t.height),s=l.data;for(let r=0;r<s.length;r++)s[r]=ei(s[r]/255)*255;return n.putImageData(l,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ei(e[n]/255)*255):e[n]=ei(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class _a{constructor(t=null){this.isSource=!0,this.uuid=Mi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},l=this.data;if(l!==null){let s;if(Array.isArray(l)){s=[];for(let r=0,a=l.length;r<a;r++)l[r].isDataTexture?s.push(dr(l[r].image)):s.push(dr(l[r]))}else s=dr(l);n.url=s}return e||(t.images[this.uuid]=n),n}}function dr(m){return typeof HTMLImageElement<"u"&&m instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&m instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&m instanceof ImageBitmap?ya.getDataURL(m):m.data?{data:Array.from(m.data),width:m.width,height:m.height,type:m.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qo=0;class ze extends ai{constructor(t=ze.DEFAULT_IMAGE,e=ze.DEFAULT_MAPPING,n=$e,l=$e,s=Xe,r=xi,a=Je,u=Bn,d=ze.DEFAULT_ANISOTROPY,o=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qo++}),this.uuid=Mi(),this.name="",this.source=new _a(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=l,this.magFilter=s,this.minFilter=r,this.anisotropy=d,this.format=a,this.internalFormat=null,this.type=u,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=o,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pa)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ji:t.x=t.x-Math.floor(t.x);break;case $e:t.x=t.x<0?0:1;break;case Ur:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ji:t.y=t.y-Math.floor(t.y);break;case $e:t.y=t.y<0?0:1;break;case Ur:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=pa;ze.DEFAULT_ANISOTROPY=1;class Te{constructor(t=0,e=0,n=0,l=1){Te.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,l){return this.x=t,this.y=e,this.z=n,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,l=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*l+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*l+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*l+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*l+r[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,l,s;const u=t.elements,d=u[0],o=u[4],i=u[8],c=u[1],h=u[5],v=u[9],p=u[2],f=u[6],g=u[10];if(Math.abs(o-c)<.01&&Math.abs(i-p)<.01&&Math.abs(v-f)<.01){if(Math.abs(o+c)<.1&&Math.abs(i+p)<.1&&Math.abs(v+f)<.1&&Math.abs(d+h+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(d+1)/2,x=(h+1)/2,w=(g+1)/2,I=(o+c)/4,V=(i+p)/4,b=(v+f)/4;return _>x&&_>w?_<.01?(n=0,l=.707106781,s=.707106781):(n=Math.sqrt(_),l=I/n,s=V/n):x>w?x<.01?(n=.707106781,l=0,s=.707106781):(l=Math.sqrt(x),n=I/l,s=b/l):w<.01?(n=.707106781,l=.707106781,s=0):(s=Math.sqrt(w),n=V/s,l=b/s),this.set(n,l,s,e),this}let y=Math.sqrt((f-v)*(f-v)+(i-p)*(i-p)+(c-o)*(c-o));return Math.abs(y)<.001&&(y=1),this.x=(f-v)/y,this.y=(i-p)/y,this.z=(c-o)/y,this.w=Math.acos((d+h+g-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zn extends ai{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e);const l={width:t,height:e,depth:1};this.texture=new ze(l,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Xe,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new _a(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ba extends ze{constructor(t=null,e=1,n=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:l},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=$e,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xo extends ze{constructor(t=null,e=1,n=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:l},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=$e,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Si{constructor(t=new it(1/0,1/0,1/0),e=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,l=1/0,s=-1/0,r=-1/0,a=-1/0;for(let u=0,d=t.length;u<d;u+=3){const o=t[u],i=t[u+1],c=t[u+2];o<e&&(e=o),i<n&&(n=i),c<l&&(l=c),o>s&&(s=o),i>r&&(r=i),c>a&&(a=c)}return this.min.set(e,n,l),this.max.set(s,r,a),this}setFromBufferAttribute(t){let e=1/0,n=1/0,l=1/0,s=-1/0,r=-1/0,a=-1/0;for(let u=0,d=t.count;u<d;u++){const o=t.getX(u),i=t.getY(u),c=t.getZ(u);o<e&&(e=o),i<n&&(n=i),c<l&&(l=c),o>s&&(s=o),i>r&&(r=i),c>a&&(a=c)}return this.min.set(e,n,l),this.max.set(s,r,a),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=En.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let r=0,a=s.count;r<a;r++)En.fromBufferAttribute(s,r).applyMatrix4(t.matrixWorld),this.expandByPoint(En)}else n.boundingBox===null&&n.computeBoundingBox(),fr.copy(n.boundingBox),fr.applyMatrix4(t.matrixWorld),this.union(fr);const l=t.children;for(let s=0,r=l.length;s<r;s++)this.expandByObject(l[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,En),En.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ci),Ai.subVectors(this.max,ci),On.subVectors(t.a,ci),Vn.subVectors(t.b,ci),Wn.subVectors(t.c,ci),mn.subVectors(Vn,On),vn.subVectors(Wn,Vn),Tn.subVectors(On,Wn);let e=[0,-mn.z,mn.y,0,-vn.z,vn.y,0,-Tn.z,Tn.y,mn.z,0,-mn.x,vn.z,0,-vn.x,Tn.z,0,-Tn.x,-mn.y,mn.x,0,-vn.y,vn.x,0,-Tn.y,Tn.x,0];return!pr(e,On,Vn,Wn,Ai)||(e=[1,0,0,0,1,0,0,0,1],!pr(e,On,Vn,Wn,Ai))?!1:(Ci.crossVectors(mn,vn),e=[Ci.x,Ci.y,Ci.z],pr(e,On,Vn,Wn,Ai))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,En).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(En).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(on),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const on=[new it,new it,new it,new it,new it,new it,new it,new it],En=new it,fr=new Si,On=new it,Vn=new it,Wn=new it,mn=new it,vn=new it,Tn=new it,ci=new it,Ai=new it,Ci=new it,An=new it;function pr(m,t,e,n,l){for(let s=0,r=m.length-3;s<=r;s+=3){An.fromArray(m,s);const a=l.x*Math.abs(An.x)+l.y*Math.abs(An.y)+l.z*Math.abs(An.z),u=t.dot(An),d=e.dot(An),o=n.dot(An);if(Math.max(-Math.max(u,d,o),Math.min(u,d,o))>a)return!1}return!0}const Ko=new Si,ui=new it,mr=new it;class Gr{constructor(t=new it,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ko.setFromPoints(t).getCenter(n);let l=0;for(let s=0,r=t.length;s<r;s++)l=Math.max(l,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ui.subVectors(t,this.center);const e=ui.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),l=(n-this.radius)*.5;this.center.addScaledVector(ui,l/n),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ui.copy(t.center).add(mr)),this.expandByPoint(ui.copy(t.center).sub(mr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ln=new it,vr=new it,Ri=new it,gn=new it,gr=new it,Li=new it,xr=new it;class Yo{constructor(t=new it,e=new it(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ln.copy(this.origin).addScaledVector(this.direction,e),ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,l){vr.copy(t).add(e).multiplyScalar(.5),Ri.copy(e).sub(t).normalize(),gn.copy(this.origin).sub(vr);const s=t.distanceTo(e)*.5,r=-this.direction.dot(Ri),a=gn.dot(this.direction),u=-gn.dot(Ri),d=gn.lengthSq(),o=Math.abs(1-r*r);let i,c,h,v;if(o>0)if(i=r*u-a,c=r*a-u,v=s*o,i>=0)if(c>=-v)if(c<=v){const p=1/o;i*=p,c*=p,h=i*(i+r*c+2*a)+c*(r*i+c+2*u)+d}else c=s,i=Math.max(0,-(r*c+a)),h=-i*i+c*(c+2*u)+d;else c=-s,i=Math.max(0,-(r*c+a)),h=-i*i+c*(c+2*u)+d;else c<=-v?(i=Math.max(0,-(-r*s+a)),c=i>0?-s:Math.min(Math.max(-s,-u),s),h=-i*i+c*(c+2*u)+d):c<=v?(i=0,c=Math.min(Math.max(-s,-u),s),h=c*(c+2*u)+d):(i=Math.max(0,-(r*s+a)),c=i>0?s:Math.min(Math.max(-s,-u),s),h=-i*i+c*(c+2*u)+d);else c=r>0?-s:s,i=Math.max(0,-(r*c+a)),h=-i*i+c*(c+2*u)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,i),l&&l.copy(vr).addScaledVector(Ri,c),h}intersectSphere(t,e){ln.subVectors(t.center,this.origin);const n=ln.dot(this.direction),l=ln.dot(ln)-n*n,s=t.radius*t.radius;if(l>s)return null;const r=Math.sqrt(s-l),a=n-r,u=n+r;return u<0?null:a<0?this.at(u,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,l,s,r,a,u;const d=1/this.direction.x,o=1/this.direction.y,i=1/this.direction.z,c=this.origin;return d>=0?(n=(t.min.x-c.x)*d,l=(t.max.x-c.x)*d):(n=(t.max.x-c.x)*d,l=(t.min.x-c.x)*d),o>=0?(s=(t.min.y-c.y)*o,r=(t.max.y-c.y)*o):(s=(t.max.y-c.y)*o,r=(t.min.y-c.y)*o),n>r||s>l||((s>n||isNaN(n))&&(n=s),(r<l||isNaN(l))&&(l=r),i>=0?(a=(t.min.z-c.z)*i,u=(t.max.z-c.z)*i):(a=(t.max.z-c.z)*i,u=(t.min.z-c.z)*i),n>u||a>l)||((a>n||n!==n)&&(n=a),(u<l||l!==l)&&(l=u),l<0)?null:this.at(n>=0?n:l,e)}intersectsBox(t){return this.intersectBox(t,ln)!==null}intersectTriangle(t,e,n,l,s){gr.subVectors(e,t),Li.subVectors(n,t),xr.crossVectors(gr,Li);let r=this.direction.dot(xr),a;if(r>0){if(l)return null;a=1}else if(r<0)a=-1,r=-r;else return null;gn.subVectors(this.origin,t);const u=a*this.direction.dot(Li.crossVectors(gn,Li));if(u<0)return null;const d=a*this.direction.dot(gr.cross(gn));if(d<0||u+d>r)return null;const o=-a*gn.dot(xr);return o<0?null:this.at(o/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ae{constructor(){Ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,l,s,r,a,u,d,o,i,c,h,v,p,f){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=l,g[1]=s,g[5]=r,g[9]=a,g[13]=u,g[2]=d,g[6]=o,g[10]=i,g[14]=c,g[3]=h,g[7]=v,g[11]=p,g[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,l=1/kn.setFromMatrixColumn(t,0).length(),s=1/kn.setFromMatrixColumn(t,1).length(),r=1/kn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*l,e[1]=n[1]*l,e[2]=n[2]*l,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,l=t.y,s=t.z,r=Math.cos(n),a=Math.sin(n),u=Math.cos(l),d=Math.sin(l),o=Math.cos(s),i=Math.sin(s);if(t.order==="XYZ"){const c=r*o,h=r*i,v=a*o,p=a*i;e[0]=u*o,e[4]=-u*i,e[8]=d,e[1]=h+v*d,e[5]=c-p*d,e[9]=-a*u,e[2]=p-c*d,e[6]=v+h*d,e[10]=r*u}else if(t.order==="YXZ"){const c=u*o,h=u*i,v=d*o,p=d*i;e[0]=c+p*a,e[4]=v*a-h,e[8]=r*d,e[1]=r*i,e[5]=r*o,e[9]=-a,e[2]=h*a-v,e[6]=p+c*a,e[10]=r*u}else if(t.order==="ZXY"){const c=u*o,h=u*i,v=d*o,p=d*i;e[0]=c-p*a,e[4]=-r*i,e[8]=v+h*a,e[1]=h+v*a,e[5]=r*o,e[9]=p-c*a,e[2]=-r*d,e[6]=a,e[10]=r*u}else if(t.order==="ZYX"){const c=r*o,h=r*i,v=a*o,p=a*i;e[0]=u*o,e[4]=v*d-h,e[8]=c*d+p,e[1]=u*i,e[5]=p*d+c,e[9]=h*d-v,e[2]=-d,e[6]=a*u,e[10]=r*u}else if(t.order==="YZX"){const c=r*u,h=r*d,v=a*u,p=a*d;e[0]=u*o,e[4]=p-c*i,e[8]=v*i+h,e[1]=i,e[5]=r*o,e[9]=-a*o,e[2]=-d*o,e[6]=h*i+v,e[10]=c-p*i}else if(t.order==="XZY"){const c=r*u,h=r*d,v=a*u,p=a*d;e[0]=u*o,e[4]=-i,e[8]=d*o,e[1]=c*i+p,e[5]=r*o,e[9]=h*i-v,e[2]=v*i-h,e[6]=a*o,e[10]=p*i+c}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jo,t,Zo)}lookAt(t,e,n){const l=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),xn.crossVectors(n,Ve),xn.lengthSq()===0&&(Math.abs(n.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),xn.crossVectors(n,Ve)),xn.normalize(),Pi.crossVectors(Ve,xn),l[0]=xn.x,l[4]=Pi.x,l[8]=Ve.x,l[1]=xn.y,l[5]=Pi.y,l[9]=Ve.y,l[2]=xn.z,l[6]=Pi.z,l[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,l=e.elements,s=this.elements,r=n[0],a=n[4],u=n[8],d=n[12],o=n[1],i=n[5],c=n[9],h=n[13],v=n[2],p=n[6],f=n[10],g=n[14],y=n[3],_=n[7],x=n[11],w=n[15],I=l[0],V=l[4],b=l[8],T=l[12],C=l[1],F=l[5],W=l[9],z=l[13],U=l[2],K=l[6],tt=l[10],k=l[14],B=l[3],Z=l[7],X=l[11],N=l[15];return s[0]=r*I+a*C+u*U+d*B,s[4]=r*V+a*F+u*K+d*Z,s[8]=r*b+a*W+u*tt+d*X,s[12]=r*T+a*z+u*k+d*N,s[1]=o*I+i*C+c*U+h*B,s[5]=o*V+i*F+c*K+h*Z,s[9]=o*b+i*W+c*tt+h*X,s[13]=o*T+i*z+c*k+h*N,s[2]=v*I+p*C+f*U+g*B,s[6]=v*V+p*F+f*K+g*Z,s[10]=v*b+p*W+f*tt+g*X,s[14]=v*T+p*z+f*k+g*N,s[3]=y*I+_*C+x*U+w*B,s[7]=y*V+_*F+x*K+w*Z,s[11]=y*b+_*W+x*tt+w*X,s[15]=y*T+_*z+x*k+w*N,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],l=t[8],s=t[12],r=t[1],a=t[5],u=t[9],d=t[13],o=t[2],i=t[6],c=t[10],h=t[14],v=t[3],p=t[7],f=t[11],g=t[15];return v*(+s*u*i-l*d*i-s*a*c+n*d*c+l*a*h-n*u*h)+p*(+e*u*h-e*d*c+s*r*c-l*r*h+l*d*o-s*u*o)+f*(+e*d*i-e*a*h-s*r*i+n*r*h+s*a*o-n*d*o)+g*(-l*a*o-e*u*i+e*a*c+l*r*i-n*r*c+n*u*o)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=e,l[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],l=t[2],s=t[3],r=t[4],a=t[5],u=t[6],d=t[7],o=t[8],i=t[9],c=t[10],h=t[11],v=t[12],p=t[13],f=t[14],g=t[15],y=i*f*d-p*c*d+p*u*h-a*f*h-i*u*g+a*c*g,_=v*c*d-o*f*d-v*u*h+r*f*h+o*u*g-r*c*g,x=o*p*d-v*i*d+v*a*h-r*p*h-o*a*g+r*i*g,w=v*i*u-o*p*u-v*a*c+r*p*c+o*a*f-r*i*f,I=e*y+n*_+l*x+s*w;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/I;return t[0]=y*V,t[1]=(p*c*s-i*f*s-p*l*h+n*f*h+i*l*g-n*c*g)*V,t[2]=(a*f*s-p*u*s+p*l*d-n*f*d-a*l*g+n*u*g)*V,t[3]=(i*u*s-a*c*s-i*l*d+n*c*d+a*l*h-n*u*h)*V,t[4]=_*V,t[5]=(o*f*s-v*c*s+v*l*h-e*f*h-o*l*g+e*c*g)*V,t[6]=(v*u*s-r*f*s-v*l*d+e*f*d+r*l*g-e*u*g)*V,t[7]=(r*c*s-o*u*s+o*l*d-e*c*d-r*l*h+e*u*h)*V,t[8]=x*V,t[9]=(v*i*s-o*p*s-v*n*h+e*p*h+o*n*g-e*i*g)*V,t[10]=(r*p*s-v*a*s+v*n*d-e*p*d-r*n*g+e*a*g)*V,t[11]=(o*a*s-r*i*s-o*n*d+e*i*d+r*n*h-e*a*h)*V,t[12]=w*V,t[13]=(o*p*l-v*i*l+v*n*c-e*p*c-o*n*f+e*i*f)*V,t[14]=(v*a*l-r*p*l-v*n*u+e*p*u+r*n*f-e*a*f)*V,t[15]=(r*i*l-o*a*l+o*n*u-e*i*u-r*n*c+e*a*c)*V,this}scale(t){const e=this.elements,n=t.x,l=t.y,s=t.z;return e[0]*=n,e[4]*=l,e[8]*=s,e[1]*=n,e[5]*=l,e[9]*=s,e[2]*=n,e[6]*=l,e[10]*=s,e[3]*=n,e[7]*=l,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,l))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),l=Math.sin(e),s=1-n,r=t.x,a=t.y,u=t.z,d=s*r,o=s*a;return this.set(d*r+n,d*a-l*u,d*u+l*a,0,d*a+l*u,o*a+n,o*u-l*r,0,d*u-l*a,o*u+l*r,s*u*u+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,l,s,r){return this.set(1,n,s,0,t,1,r,0,e,l,1,0,0,0,0,1),this}compose(t,e,n){const l=this.elements,s=e._x,r=e._y,a=e._z,u=e._w,d=s+s,o=r+r,i=a+a,c=s*d,h=s*o,v=s*i,p=r*o,f=r*i,g=a*i,y=u*d,_=u*o,x=u*i,w=n.x,I=n.y,V=n.z;return l[0]=(1-(p+g))*w,l[1]=(h+x)*w,l[2]=(v-_)*w,l[3]=0,l[4]=(h-x)*I,l[5]=(1-(c+g))*I,l[6]=(f+y)*I,l[7]=0,l[8]=(v+_)*V,l[9]=(f-y)*V,l[10]=(1-(c+p))*V,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,e,n){const l=this.elements;let s=kn.set(l[0],l[1],l[2]).length();const r=kn.set(l[4],l[5],l[6]).length(),a=kn.set(l[8],l[9],l[10]).length();this.determinant()<0&&(s=-s),t.x=l[12],t.y=l[13],t.z=l[14],Ye.copy(this);const d=1/s,o=1/r,i=1/a;return Ye.elements[0]*=d,Ye.elements[1]*=d,Ye.elements[2]*=d,Ye.elements[4]*=o,Ye.elements[5]*=o,Ye.elements[6]*=o,Ye.elements[8]*=i,Ye.elements[9]*=i,Ye.elements[10]*=i,e.setFromRotationMatrix(Ye),n.x=s,n.y=r,n.z=a,this}makePerspective(t,e,n,l,s,r){const a=this.elements,u=2*s/(e-t),d=2*s/(n-l),o=(e+t)/(e-t),i=(n+l)/(n-l),c=-(r+s)/(r-s),h=-2*r*s/(r-s);return a[0]=u,a[4]=0,a[8]=o,a[12]=0,a[1]=0,a[5]=d,a[9]=i,a[13]=0,a[2]=0,a[6]=0,a[10]=c,a[14]=h,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,l,s,r){const a=this.elements,u=1/(e-t),d=1/(n-l),o=1/(r-s),i=(e+t)*u,c=(n+l)*d,h=(r+s)*o;return a[0]=2*u,a[4]=0,a[8]=0,a[12]=-i,a[1]=0,a[5]=2*d,a[9]=0,a[13]=-c,a[2]=0,a[6]=0,a[10]=-2*o,a[14]=-h,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let l=0;l<16;l++)if(e[l]!==n[l])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const kn=new it,Ye=new Ae,jo=new it(0,0,0),Zo=new it(1,1,1),xn=new it,Pi=new it,Ve=new it,Cs=new Ae,Rs=new wi;class $i{constructor(t=0,e=0,n=0,l=$i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,l=this._order){return this._x=t,this._y=e,this._z=n,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const l=t.elements,s=l[0],r=l[4],a=l[8],u=l[1],d=l[5],o=l[9],i=l[2],c=l[6],h=l[10];switch(e){case"XYZ":this._y=Math.asin(ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-o,h),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(c,d),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(o,-1,1)),Math.abs(o)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(u,d)):(this._y=Math.atan2(-i,s),this._z=0);break;case"ZXY":this._x=Math.asin(ke(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-i,h),this._z=Math.atan2(-r,d)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-ke(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(c,h),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-r,d));break;case"YZX":this._z=Math.asin(ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-o,d),this._y=Math.atan2(-i,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-ke(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(c,d),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-o,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Cs.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cs,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Rs.setFromEuler(this),this.setFromQuaternion(Rs,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$i.DEFAULT_ORDER="XYZ";class Ma{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let $o=0;const Ls=new it,Gn=new wi,cn=new Ae,Di=new it,hi=new it,Jo=new it,Qo=new wi,Ps=new it(1,0,0),Ds=new it(0,1,0),Is=new it(0,0,1),tl={type:"added"},Bs={type:"removed"};class Ne extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$o++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new it,e=new $i,n=new wi,l=new it(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ae},normalMatrix:{value:new Be}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ma,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gn.setFromAxisAngle(t,e),this.quaternion.multiply(Gn),this}rotateOnWorldAxis(t,e){return Gn.setFromAxisAngle(t,e),this.quaternion.premultiply(Gn),this}rotateX(t){return this.rotateOnAxis(Ps,t)}rotateY(t){return this.rotateOnAxis(Ds,t)}rotateZ(t){return this.rotateOnAxis(Is,t)}translateOnAxis(t,e){return Ls.copy(t).applyQuaternion(this.quaternion),this.position.add(Ls.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ps,t)}translateY(t){return this.translateOnAxis(Ds,t)}translateZ(t){return this.translateOnAxis(Is,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Di.copy(t):Di.set(t,e,n);const l=this.parent;this.updateWorldMatrix(!0,!1),hi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(hi,Di,this.up):cn.lookAt(Di,hi,this.up),this.quaternion.setFromRotationMatrix(cn),l&&(cn.extractRotation(l.matrixWorld),Gn.setFromRotationMatrix(cn),this.quaternion.premultiply(Gn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(tl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bs)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Bs)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(cn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,l=this.children.length;n<l;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let l=0,s=this.children.length;l<s;l++){const r=this.children[l].getObjectsByProperty(t,e);r.length>0&&(n=n.concat(r))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hi,t,Jo),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hi,Qo,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,l=e.length;n<l;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,l=e.length;n<l;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,l=e.length;n<l;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const l=this.children;for(let s=0,r=l.length;s<r;s++){const a=l[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON()));function s(a,u){return a[u.uuid]===void 0&&(a[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const u=a.shapes;if(Array.isArray(u))for(let d=0,o=u.length;d<o;d++){const i=u[d];s(t.shapes,i)}else s(t.shapes,u)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let u=0,d=this.material.length;u<d;u++)a.push(s(t.materials,this.material[u]));l.material=a}else l.material=s(t.materials,this.material);if(this.children.length>0){l.children=[];for(let a=0;a<this.children.length;a++)l.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let a=0;a<this.animations.length;a++){const u=this.animations[a];l.animations.push(s(t.animations,u))}}if(e){const a=r(t.geometries),u=r(t.materials),d=r(t.textures),o=r(t.images),i=r(t.shapes),c=r(t.skeletons),h=r(t.animations),v=r(t.nodes);a.length>0&&(n.geometries=a),u.length>0&&(n.materials=u),d.length>0&&(n.textures=d),o.length>0&&(n.images=o),i.length>0&&(n.shapes=i),c.length>0&&(n.skeletons=c),h.length>0&&(n.animations=h),v.length>0&&(n.nodes=v)}return n.object=l,n;function r(a){const u=[];for(const d in a){const o=a[d];delete o.metadata,u.push(o)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const l=t.children[n];this.add(l.clone())}return this}}Ne.DEFAULT_UP=new it(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const je=new it,un=new it,yr=new it,hn=new it,Hn=new it,qn=new it,Fs=new it,_r=new it,br=new it,Mr=new it;class dn{constructor(t=new it,e=new it,n=new it){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,l){l.subVectors(n,e),je.subVectors(t,e),l.cross(je);const s=l.lengthSq();return s>0?l.multiplyScalar(1/Math.sqrt(s)):l.set(0,0,0)}static getBarycoord(t,e,n,l,s){je.subVectors(l,e),un.subVectors(n,e),yr.subVectors(t,e);const r=je.dot(je),a=je.dot(un),u=je.dot(yr),d=un.dot(un),o=un.dot(yr),i=r*d-a*a;if(i===0)return s.set(-2,-1,-1);const c=1/i,h=(d*u-a*o)*c,v=(r*o-a*u)*c;return s.set(1-h-v,v,h)}static containsPoint(t,e,n,l){return this.getBarycoord(t,e,n,l,hn),hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getUV(t,e,n,l,s,r,a,u){return this.getBarycoord(t,e,n,l,hn),u.set(0,0),u.addScaledVector(s,hn.x),u.addScaledVector(r,hn.y),u.addScaledVector(a,hn.z),u}static isFrontFacing(t,e,n,l){return je.subVectors(n,e),un.subVectors(t,e),je.cross(un).dot(l)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,l){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,e,n,l){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return je.subVectors(this.c,this.b),un.subVectors(this.a,this.b),je.cross(un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return dn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,l,s){return dn.getUV(t,this.a,this.b,this.c,e,n,l,s)}containsPoint(t){return dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,l=this.b,s=this.c;let r,a;Hn.subVectors(l,n),qn.subVectors(s,n),_r.subVectors(t,n);const u=Hn.dot(_r),d=qn.dot(_r);if(u<=0&&d<=0)return e.copy(n);br.subVectors(t,l);const o=Hn.dot(br),i=qn.dot(br);if(o>=0&&i<=o)return e.copy(l);const c=u*i-o*d;if(c<=0&&u>=0&&o<=0)return r=u/(u-o),e.copy(n).addScaledVector(Hn,r);Mr.subVectors(t,s);const h=Hn.dot(Mr),v=qn.dot(Mr);if(v>=0&&h<=v)return e.copy(s);const p=h*d-u*v;if(p<=0&&d>=0&&v<=0)return a=d/(d-v),e.copy(n).addScaledVector(qn,a);const f=o*v-h*i;if(f<=0&&i-o>=0&&h-v>=0)return Fs.subVectors(s,l),a=(i-o)/(i-o+(h-v)),e.copy(l).addScaledVector(Fs,a);const g=1/(f+p+c);return r=p*g,a=c*g,e.copy(n).addScaledVector(Hn,r).addScaledVector(qn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let el=0;class Ei extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:el++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=Qn,this.side=Mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ha,this.blendDst=da,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ar,this.stencilZFail=ar,this.stencilZPass=ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const l=this[e];if(l===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}l&&l.isColor?l.set(n):l&&l.isVector3&&n&&n.isVector3?l.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qn&&(n.blending=this.blending),this.side!==Mn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function l(s){const r=[];for(const a in s){const u=s[a];delete u.metadata,r.push(u)}return r}if(e){const s=l(t.textures),r=l(t.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const l=e.length;n=new Array(l);for(let s=0;s!==l;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const wa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ze={h:0,s:0,l:0},Ii={h:0,s:0,l:0};function wr(m,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?m+(t-m)*6*e:e<1/2?t:e<2/3?m+(t-m)*6*(2/3-e):m}class ae{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Pe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,l=Pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,Pe.toWorkingColorSpace(this,l),this}setHSL(t,e,n,l=Pe.workingColorSpace){if(t=No(t,1),e=ke(e,0,1),n=ke(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=wr(r,s,t+1/3),this.g=wr(r,s,t),this.b=wr(r,s,t-1/3)}return Pe.toWorkingColorSpace(this,l),this}setStyle(t,e=nn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=l[1],a=l[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Pe.toWorkingColorSpace(this,e),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Pe.toWorkingColorSpace(this,e),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const u=parseFloat(s[1])/360,d=parseFloat(s[2])/100,o=parseFloat(s[3])/100;return n(s[4]),this.setHSL(u,d,o,e)}break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=l[1],r=s.length;if(r===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Pe.toWorkingColorSpace(this,e),this;if(r===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Pe.toWorkingColorSpace(this,e),this;console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=nn){const n=wa[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ei(t.r),this.g=ei(t.g),this.b=ei(t.b),this}copyLinearToSRGB(t){return this.r=hr(t.r),this.g=hr(t.g),this.b=hr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=nn){return Pe.fromWorkingColorSpace(Re.copy(this),t),ke(Re.r*255,0,255)<<16^ke(Re.g*255,0,255)<<8^ke(Re.b*255,0,255)<<0}getHexString(t=nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Pe.workingColorSpace){Pe.fromWorkingColorSpace(Re.copy(this),e);const n=Re.r,l=Re.g,s=Re.b,r=Math.max(n,l,s),a=Math.min(n,l,s);let u,d;const o=(a+r)/2;if(a===r)u=0,d=0;else{const i=r-a;switch(d=o<=.5?i/(r+a):i/(2-r-a),r){case n:u=(l-s)/i+(l<s?6:0);break;case l:u=(s-n)/i+2;break;case s:u=(n-l)/i+4;break}u/=6}return t.h=u,t.s=d,t.l=o,t}getRGB(t,e=Pe.workingColorSpace){return Pe.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=nn){Pe.fromWorkingColorSpace(Re.copy(this),t);const e=Re.r,n=Re.g,l=Re.b;return t!==nn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${l.toFixed(3)})`:`rgb(${e*255|0},${n*255|0},${l*255|0})`}offsetHSL(t,e,n){return this.getHSL(Ze),Ze.h+=t,Ze.s+=e,Ze.l+=n,this.setHSL(Ze.h,Ze.s,Ze.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ze),t.getHSL(Ii);const n=lr(Ze.h,Ii.h,e),l=lr(Ze.s,Ii.s,e),s=lr(Ze.l,Ii.l,e);return this.setHSL(n,l,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Re=new ae;ae.NAMES=wa;class Sa extends Ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const me=new it,Bi=new le;class tn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ws,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let l=0,s=this.itemSize;l<s;l++)this.array[t+l]=e.array[n+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Bi.fromBufferAttribute(this,e),Bi.applyMatrix3(t),this.setXY(e,Bi.x,Bi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ti(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ti(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ti(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ti(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,l){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),l=Oe(l,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=l,this}setXYZW(t,e,n,l,s){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),l=Oe(l,this.array),s=Oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=l,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ws&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ea extends tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ta extends tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class sn extends tn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let nl=0;const qe=new Ae,Sr=new Ne,Xn=new it,We=new Si,di=new Si,Me=new it;class pn extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nl++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xa(t)?Ta:Ea)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Be().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qe.makeRotationFromQuaternion(t),this.applyMatrix4(qe),this}rotateX(t){return qe.makeRotationX(t),this.applyMatrix4(qe),this}rotateY(t){return qe.makeRotationY(t),this.applyMatrix4(qe),this}rotateZ(t){return qe.makeRotationZ(t),this.applyMatrix4(qe),this}translate(t,e,n){return qe.makeTranslation(t,e,n),this.applyMatrix4(qe),this}scale(t,e,n){return qe.makeScale(t,e,n),this.applyMatrix4(qe),this}lookAt(t){return Sr.lookAt(t),Sr.updateMatrix(),this.applyMatrix4(Sr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xn).negate(),this.translate(Xn.x,Xn.y,Xn.z),this}setFromPoints(t){const e=[];for(let n=0,l=t.length;n<l;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new sn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,l=e.length;n<l;n++){const s=e[n];We.setFromBufferAttribute(s),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new it,1/0);return}if(t){const n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const a=e[s];di.setFromBufferAttribute(a),this.morphTargetsRelative?(Me.addVectors(We.min,di.min),We.expandByPoint(Me),Me.addVectors(We.max,di.max),We.expandByPoint(Me)):(We.expandByPoint(di.min),We.expandByPoint(di.max))}We.getCenter(n);let l=0;for(let s=0,r=t.count;s<r;s++)Me.fromBufferAttribute(t,s),l=Math.max(l,n.distanceToSquared(Me));if(e)for(let s=0,r=e.length;s<r;s++){const a=e[s],u=this.morphTargetsRelative;for(let d=0,o=a.count;d<o;d++)Me.fromBufferAttribute(a,d),u&&(Xn.fromBufferAttribute(t,d),Me.add(Xn)),l=Math.max(l,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,l=e.position.array,s=e.normal.array,r=e.uv.array,a=l.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*a),4));const u=this.getAttribute("tangent").array,d=[],o=[];for(let C=0;C<a;C++)d[C]=new it,o[C]=new it;const i=new it,c=new it,h=new it,v=new le,p=new le,f=new le,g=new it,y=new it;function _(C,F,W){i.fromArray(l,C*3),c.fromArray(l,F*3),h.fromArray(l,W*3),v.fromArray(r,C*2),p.fromArray(r,F*2),f.fromArray(r,W*2),c.sub(i),h.sub(i),p.sub(v),f.sub(v);const z=1/(p.x*f.y-f.x*p.y);isFinite(z)&&(g.copy(c).multiplyScalar(f.y).addScaledVector(h,-p.y).multiplyScalar(z),y.copy(h).multiplyScalar(p.x).addScaledVector(c,-f.x).multiplyScalar(z),d[C].add(g),d[F].add(g),d[W].add(g),o[C].add(y),o[F].add(y),o[W].add(y))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let C=0,F=x.length;C<F;++C){const W=x[C],z=W.start,U=W.count;for(let K=z,tt=z+U;K<tt;K+=3)_(n[K+0],n[K+1],n[K+2])}const w=new it,I=new it,V=new it,b=new it;function T(C){V.fromArray(s,C*3),b.copy(V);const F=d[C];w.copy(F),w.sub(V.multiplyScalar(V.dot(F))).normalize(),I.crossVectors(b,F);const z=I.dot(o[C])<0?-1:1;u[C*4]=w.x,u[C*4+1]=w.y,u[C*4+2]=w.z,u[C*4+3]=z}for(let C=0,F=x.length;C<F;++C){const W=x[C],z=W.start,U=W.count;for(let K=z,tt=z+U;K<tt;K+=3)T(n[K+0]),T(n[K+1]),T(n[K+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let c=0,h=n.count;c<h;c++)n.setXYZ(c,0,0,0);const l=new it,s=new it,r=new it,a=new it,u=new it,d=new it,o=new it,i=new it;if(t)for(let c=0,h=t.count;c<h;c+=3){const v=t.getX(c+0),p=t.getX(c+1),f=t.getX(c+2);l.fromBufferAttribute(e,v),s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,f),o.subVectors(r,s),i.subVectors(l,s),o.cross(i),a.fromBufferAttribute(n,v),u.fromBufferAttribute(n,p),d.fromBufferAttribute(n,f),a.add(o),u.add(o),d.add(o),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(p,u.x,u.y,u.z),n.setXYZ(f,d.x,d.y,d.z)}else for(let c=0,h=e.count;c<h;c+=3)l.fromBufferAttribute(e,c+0),s.fromBufferAttribute(e,c+1),r.fromBufferAttribute(e,c+2),o.subVectors(r,s),i.subVectors(l,s),o.cross(i),n.setXYZ(c+0,o.x,o.y,o.z),n.setXYZ(c+1,o.x,o.y,o.z),n.setXYZ(c+2,o.x,o.y,o.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(a,u){const d=a.array,o=a.itemSize,i=a.normalized,c=new d.constructor(u.length*o);let h=0,v=0;for(let p=0,f=u.length;p<f;p++){a.isInterleavedBufferAttribute?h=u[p]*a.data.stride+a.offset:h=u[p]*o;for(let g=0;g<o;g++)c[v++]=d[h++]}return new tn(c,o,i)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new pn,n=this.index.array,l=this.attributes;for(const a in l){const u=l[a],d=t(u,n);e.setAttribute(a,d)}const s=this.morphAttributes;for(const a in s){const u=[],d=s[a];for(let o=0,i=d.length;o<i;o++){const c=d[o],h=t(c,n);u.push(h)}e.morphAttributes[a]=u}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,u=r.length;a<u;a++){const d=r[a];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const d in u)u[d]!==void 0&&(t[d]=u[d]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const u in n){const d=n[u];t.data.attributes[u]=d.toJSON(t.data)}const l={};let s=!1;for(const u in this.morphAttributes){const d=this.morphAttributes[u],o=[];for(let i=0,c=d.length;i<c;i++){const h=d[i];o.push(h.toJSON(t.data))}o.length>0&&(l[u]=o,s=!0)}s&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const l=t.attributes;for(const d in l){const o=l[d];this.setAttribute(d,o.clone(e))}const s=t.morphAttributes;for(const d in s){const o=[],i=s[d];for(let c=0,h=i.length;c<h;c++)o.push(i[c].clone(e));this.morphAttributes[d]=o}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let d=0,o=r.length;d<o;d++){const i=r[d];this.addGroup(i.start,i.count,i.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zs=new Ae,en=new Yo,Fi=new Gr,Ns=new it,fi=new it,pi=new it,mi=new it,Er=new it,zi=new it,Ni=new le,Ui=new le,Oi=new le,Tr=new it,Vi=new it;class Qe extends Ne{constructor(t=new pn,e=new Sa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const l=e[n[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=l.length;s<r;s++){const a=l[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,l=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(l,t);const a=this.morphTargetInfluences;if(s&&a){zi.set(0,0,0);for(let u=0,d=s.length;u<d;u++){const o=a[u],i=s[u];o!==0&&(Er.fromBufferAttribute(i,t),r?zi.addScaledVector(Er,o):zi.addScaledVector(Er.sub(e),o))}e.add(zi)}return this.isSkinnedMesh&&this.boneTransform(t,e),e}raycast(t,e){const n=this.geometry,l=this.material,s=this.matrixWorld;if(l===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Fi.copy(n.boundingSphere),Fi.applyMatrix4(s),en.copy(t.ray).recast(t.near),Fi.containsPoint(en.origin)===!1&&(en.intersectSphere(Fi,Ns)===null||en.origin.distanceToSquared(Ns)>(t.far-t.near)**2))||(zs.copy(s).invert(),en.copy(t.ray).applyMatrix4(zs),n.boundingBox!==null&&en.intersectsBox(n.boundingBox)===!1))return;let r;const a=n.index,u=n.attributes.position,d=n.attributes.uv,o=n.attributes.uv2,i=n.groups,c=n.drawRange;if(a!==null)if(Array.isArray(l))for(let h=0,v=i.length;h<v;h++){const p=i[h],f=l[p.materialIndex],g=Math.max(p.start,c.start),y=Math.min(a.count,Math.min(p.start+p.count,c.start+c.count));for(let _=g,x=y;_<x;_+=3){const w=a.getX(_),I=a.getX(_+1),V=a.getX(_+2);r=Wi(this,f,t,en,d,o,w,I,V),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const h=Math.max(0,c.start),v=Math.min(a.count,c.start+c.count);for(let p=h,f=v;p<f;p+=3){const g=a.getX(p),y=a.getX(p+1),_=a.getX(p+2);r=Wi(this,l,t,en,d,o,g,y,_),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(u!==void 0)if(Array.isArray(l))for(let h=0,v=i.length;h<v;h++){const p=i[h],f=l[p.materialIndex],g=Math.max(p.start,c.start),y=Math.min(u.count,Math.min(p.start+p.count,c.start+c.count));for(let _=g,x=y;_<x;_+=3){const w=_,I=_+1,V=_+2;r=Wi(this,f,t,en,d,o,w,I,V),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const h=Math.max(0,c.start),v=Math.min(u.count,c.start+c.count);for(let p=h,f=v;p<f;p+=3){const g=p,y=p+1,_=p+2;r=Wi(this,l,t,en,d,o,g,y,_),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function il(m,t,e,n,l,s,r,a){let u;if(t.side===Ge?u=n.intersectTriangle(r,s,l,!0,a):u=n.intersectTriangle(l,s,r,t.side===Mn,a),u===null)return null;Vi.copy(a),Vi.applyMatrix4(m.matrixWorld);const d=e.ray.origin.distanceTo(Vi);return d<e.near||d>e.far?null:{distance:d,point:Vi.clone(),object:m}}function Wi(m,t,e,n,l,s,r,a,u){m.getVertexPosition(r,fi),m.getVertexPosition(a,pi),m.getVertexPosition(u,mi);const d=il(m,t,e,n,fi,pi,mi,Tr);if(d){l&&(Ni.fromBufferAttribute(l,r),Ui.fromBufferAttribute(l,a),Oi.fromBufferAttribute(l,u),d.uv=dn.getUV(Tr,fi,pi,mi,Ni,Ui,Oi,new le)),s&&(Ni.fromBufferAttribute(s,r),Ui.fromBufferAttribute(s,a),Oi.fromBufferAttribute(s,u),d.uv2=dn.getUV(Tr,fi,pi,mi,Ni,Ui,Oi,new le));const o={a:r,b:a,c:u,normal:new it,materialIndex:0};dn.getNormal(fi,pi,mi,o.normal),d.face=o}return d}class oi extends pn{constructor(t=1,e=1,n=1,l=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:l,heightSegments:s,depthSegments:r};const a=this;l=Math.floor(l),s=Math.floor(s),r=Math.floor(r);const u=[],d=[],o=[],i=[];let c=0,h=0;v("z","y","x",-1,-1,n,e,t,r,s,0),v("z","y","x",1,-1,n,e,-t,r,s,1),v("x","z","y",1,1,t,n,e,l,r,2),v("x","z","y",1,-1,t,n,-e,l,r,3),v("x","y","z",1,-1,t,e,n,l,s,4),v("x","y","z",-1,-1,t,e,-n,l,s,5),this.setIndex(u),this.setAttribute("position",new sn(d,3)),this.setAttribute("normal",new sn(o,3)),this.setAttribute("uv",new sn(i,2));function v(p,f,g,y,_,x,w,I,V,b,T){const C=x/V,F=w/b,W=x/2,z=w/2,U=I/2,K=V+1,tt=b+1;let k=0,B=0;const Z=new it;for(let X=0;X<tt;X++){const N=X*F-z;for(let D=0;D<K;D++){const R=D*C-W;Z[p]=R*y,Z[f]=N*_,Z[g]=U,d.push(Z.x,Z.y,Z.z),Z[p]=0,Z[f]=0,Z[g]=I>0?1:-1,o.push(Z.x,Z.y,Z.z),i.push(D/V),i.push(1-X/b),k+=1}}for(let X=0;X<b;X++)for(let N=0;N<V;N++){const D=c+N+K*X,R=c+N+K*(X+1),L=c+(N+1)+K*(X+1),M=c+(N+1)+K*X;u.push(D,R,M),u.push(R,L,M),B+=6}a.addGroup(h,B,T),h+=B,c+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function si(m){const t={};for(const e in m){t[e]={};for(const n in m[e]){const l=m[e][n];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?t[e][n]=l.clone():Array.isArray(l)?t[e][n]=l.slice():t[e][n]=l}}return t}function De(m){const t={};for(let e=0;e<m.length;e++){const n=si(m[e]);for(const l in n)t[l]=n[l]}return t}function rl(m){const t=[];for(let e=0;e<m.length;e++)t.push(m[e].clone());return t}function Aa(m){return m.getRenderTarget()===null&&m.outputEncoding===ce?nn:_i}const sl={clone:si,merge:De};var al=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ol=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends Ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=al,this.fragmentShader=ol,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=si(t.uniforms),this.uniformsGroups=rl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const l in this.uniforms){const r=this.uniforms[l].value;r&&r.isTexture?e.uniforms[l]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[l]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[l]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[l]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[l]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[l]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[l]={type:"m4",value:r.toArray()}:e.uniforms[l]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const l in this.extensions)this.extensions[l]===!0&&(n[l]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ca extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ke extends Ca{constructor(t=50,e=1,n=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=l,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Es*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(or*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Es*2*Math.atan(Math.tan(or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,l,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=l,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(or*.5*this.fov)/this.zoom,n=2*e,l=this.aspect*n,s=-.5*l;const r=this.view;if(this.view!==null&&this.view.enabled){const u=r.fullWidth,d=r.fullHeight;s+=r.offsetX*l/u,e-=r.offsetY*n/d,l*=r.width/u,n*=r.height/d}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+l,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Kn=-90,Yn=1;class ll extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const l=new Ke(Kn,Yn,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(1,0,0),this.add(l);const s=new Ke(Kn,Yn,t,e);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const r=new Ke(Kn,Yn,t,e);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(0,1,0),this.add(r);const a=new Ke(Kn,Yn,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const u=new Ke(Kn,Yn,t,e);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,1),this.add(u);const d=new Ke(Kn,Yn,t,e);d.layers=this.layers,d.up.set(0,1,0),d.lookAt(0,0,-1),this.add(d)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[l,s,r,a,u,d]=this.children,o=t.getRenderTarget(),i=t.toneMapping,c=t.xr.enabled;t.toneMapping=fn,t.xr.enabled=!1;const h=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,l),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,r),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,u),n.texture.generateMipmaps=h,t.setRenderTarget(n,5),t.render(e,d),t.setRenderTarget(o),t.toneMapping=i,t.xr.enabled=c,n.texture.needsPMREMUpdate=!0}}class Ra extends ze{constructor(t,e,n,l,s,r,a,u,d,o){t=t!==void 0?t:[],e=e!==void 0?e:ni,super(t,e,n,l,s,r,a,u,d,o),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class cl extends zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},l=[n,n,n,n,n,n];this.texture=new Ra(l,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Xe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new oi(5,5,5),s=new Nn({name:"CubemapFromEquirect",uniforms:si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:bn});s.uniforms.tEquirect.value=e;const r=new Qe(l,s),a=e.minFilter;return e.minFilter===xi&&(e.minFilter=Xe),new ll(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,l){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,l);t.setRenderTarget(s)}}const Ar=new it,ul=new it,hl=new Be;class Cn{constructor(t=new it(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,l){return this.normal.set(t,e,n),this.constant=l,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const l=Ar.subVectors(n,e).cross(ul.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ar),l=this.normal.dot(n);if(l===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/l;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||hl.getNormalMatrix(t),l=this.coplanarPoint(Ar).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-l.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jn=new Gr,ki=new it;class La{constructor(t=new Cn,e=new Cn,n=new Cn,l=new Cn,s=new Cn,r=new Cn){this.planes=[t,e,n,l,s,r]}set(t,e,n,l,s,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(l),a[4].copy(s),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,l=n[0],s=n[1],r=n[2],a=n[3],u=n[4],d=n[5],o=n[6],i=n[7],c=n[8],h=n[9],v=n[10],p=n[11],f=n[12],g=n[13],y=n[14],_=n[15];return e[0].setComponents(a-l,i-u,p-c,_-f).normalize(),e[1].setComponents(a+l,i+u,p+c,_+f).normalize(),e[2].setComponents(a+s,i+d,p+h,_+g).normalize(),e[3].setComponents(a-s,i-d,p-h,_-g).normalize(),e[4].setComponents(a-r,i-o,p-v,_-y).normalize(),e[5].setComponents(a+r,i+o,p+v,_+y).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),jn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(jn)}intersectsSprite(t){return jn.center.set(0,0,0),jn.radius=.7071067811865476,jn.applyMatrix4(t.matrixWorld),this.intersectsSphere(jn)}intersectsSphere(t){const e=this.planes,n=t.center,l=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<l)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const l=e[n];if(ki.x=l.normal.x>0?t.max.x:t.min.x,ki.y=l.normal.y>0?t.max.y:t.min.y,ki.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(ki)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pa(){let m=null,t=!1,e=null,n=null;function l(s,r){e(s,r),n=m.requestAnimationFrame(l)}return{start:function(){t!==!0&&e!==null&&(n=m.requestAnimationFrame(l),t=!0)},stop:function(){m.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){m=s}}}function dl(m,t){const e=t.isWebGL2,n=new WeakMap;function l(d,o){const i=d.array,c=d.usage,h=m.createBuffer();m.bindBuffer(o,h),m.bufferData(o,i,c),d.onUploadCallback();let v;if(i instanceof Float32Array)v=5126;else if(i instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(e)v=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=5123;else if(i instanceof Int16Array)v=5122;else if(i instanceof Uint32Array)v=5125;else if(i instanceof Int32Array)v=5124;else if(i instanceof Int8Array)v=5120;else if(i instanceof Uint8Array)v=5121;else if(i instanceof Uint8ClampedArray)v=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+i);return{buffer:h,type:v,bytesPerElement:i.BYTES_PER_ELEMENT,version:d.version}}function s(d,o,i){const c=o.array,h=o.updateRange;m.bindBuffer(i,d),h.count===-1?m.bufferSubData(i,0,c):(e?m.bufferSubData(i,h.offset*c.BYTES_PER_ELEMENT,c,h.offset,h.count):m.bufferSubData(i,h.offset*c.BYTES_PER_ELEMENT,c.subarray(h.offset,h.offset+h.count)),h.count=-1),o.onUploadCallback()}function r(d){return d.isInterleavedBufferAttribute&&(d=d.data),n.get(d)}function a(d){d.isInterleavedBufferAttribute&&(d=d.data);const o=n.get(d);o&&(m.deleteBuffer(o.buffer),n.delete(d))}function u(d,o){if(d.isGLBufferAttribute){const c=n.get(d);(!c||c.version<d.version)&&n.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const i=n.get(d);i===void 0?n.set(d,l(d,o)):i.version<d.version&&(s(i.buffer,d,o),i.version=d.version)}return{get:r,remove:a,update:u}}class Ji extends pn{constructor(t=1,e=1,n=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:l};const s=t/2,r=e/2,a=Math.floor(n),u=Math.floor(l),d=a+1,o=u+1,i=t/a,c=e/u,h=[],v=[],p=[],f=[];for(let g=0;g<o;g++){const y=g*c-r;for(let _=0;_<d;_++){const x=_*i-s;v.push(x,-y,0),p.push(0,0,1),f.push(_/a),f.push(1-g/u)}}for(let g=0;g<u;g++)for(let y=0;y<a;y++){const _=y+d*g,x=y+d*(g+1),w=y+1+d*(g+1),I=y+1+d*g;h.push(_,x,I),h.push(x,w,I)}this.setIndex(h),this.setAttribute("position",new sn(v,3)),this.setAttribute("normal",new sn(p,3)),this.setAttribute("uv",new sn(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ji(t.width,t.height,t.widthSegments,t.heightSegments)}}var fl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,pl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ml=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,vl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gl=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yl="vec3 transformed = vec3( position );",_l=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bl=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Ml=`#ifdef USE_IRIDESCENCE
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
#endif`,wl=`#ifdef USE_BUMPMAP
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
#endif`,Sl=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,El=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Al=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cl=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ll=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Pl=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Dl=`#define PI 3.141592653589793
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
}`,Il=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bl=`vec3 transformedNormal = objectNormal;
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
#endif`,Fl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zl=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Nl=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ul=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ol="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vl=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wl=`#ifdef USE_ENVMAP
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
#endif`,kl=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gl=`#ifdef USE_ENVMAP
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
#endif`,Hl=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ql=`#ifdef USE_ENVMAP
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
#endif`,Xl=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kl=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yl=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jl=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zl=`#ifdef USE_GRADIENTMAP
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
}`,$l=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Jl=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ql=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ec=`uniform bool receiveShadow;
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
#endif`,nc=`#if defined( USE_ENVMAP )
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
#endif`,ic=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ac=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oc=`PhysicalMaterial material;
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
#endif`,lc=`struct PhysicalMaterial {
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
}`,cc=`
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
#endif`,uc=`#if defined( RE_IndirectDiffuse )
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
#endif`,hc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,dc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,mc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,vc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_c=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mc=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wc=`#ifdef USE_MORPHNORMALS
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
#endif`,Sc=`#ifdef USE_MORPHTARGETS
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
#endif`,Ec=`#ifdef USE_MORPHTARGETS
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
#endif`,Tc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Ac=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Cc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pc=`#ifdef USE_NORMALMAP
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
#endif`,Dc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Ic=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Bc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Fc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nc=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Uc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Oc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hc=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qc=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xc=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kc=`float getShadowMask() {
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
}`,Yc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jc=`#ifdef USE_SKINNING
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
#endif`,Zc=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$c=`#ifdef USE_SKINNING
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
#endif`,Jc=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nu=`#ifdef USE_TRANSMISSION
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
#endif`,iu=`#ifdef USE_TRANSMISSION
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
#endif`,ru=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,su=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,au=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,ou=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,lu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,cu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,uu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,du=`uniform sampler2D t2D;
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
}`,fu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,gu=`#include <common>
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
}`,xu=`#if DEPTH_PACKING == 3200
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
}`,yu=`#define DISTANCE
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
}`,_u=`#define DISTANCE
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
}`,bu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,wu=`uniform float scale;
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
}`,Su=`uniform vec3 diffuse;
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
}`,Eu=`#include <common>
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
}`,Tu=`uniform vec3 diffuse;
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
}`,Au=`#define LAMBERT
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
}`,Cu=`#define LAMBERT
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
}`,Ru=`#define MATCAP
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
}`,Lu=`#define MATCAP
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
}`,Pu=`#define NORMAL
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
}`,Du=`#define NORMAL
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
}`,Iu=`#define PHONG
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
}`,Bu=`#define PHONG
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
}`,Fu=`#define STANDARD
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
}`,zu=`#define STANDARD
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
}`,Nu=`#define TOON
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
}`,Uu=`#define TOON
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
}`,Ou=`uniform float size;
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
}`,Vu=`uniform vec3 diffuse;
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
}`,Wu=`#include <common>
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
}`,ku=`uniform vec3 color;
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
}`,Gu=`uniform float rotation;
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
}`,Hu=`uniform vec3 diffuse;
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
}`,Qt={alphamap_fragment:fl,alphamap_pars_fragment:pl,alphatest_fragment:ml,alphatest_pars_fragment:vl,aomap_fragment:gl,aomap_pars_fragment:xl,begin_vertex:yl,beginnormal_vertex:_l,bsdfs:bl,iridescence_fragment:Ml,bumpmap_pars_fragment:wl,clipping_planes_fragment:Sl,clipping_planes_pars_fragment:El,clipping_planes_pars_vertex:Tl,clipping_planes_vertex:Al,color_fragment:Cl,color_pars_fragment:Rl,color_pars_vertex:Ll,color_vertex:Pl,common:Dl,cube_uv_reflection_fragment:Il,defaultnormal_vertex:Bl,displacementmap_pars_vertex:Fl,displacementmap_vertex:zl,emissivemap_fragment:Nl,emissivemap_pars_fragment:Ul,encodings_fragment:Ol,encodings_pars_fragment:Vl,envmap_fragment:Wl,envmap_common_pars_fragment:kl,envmap_pars_fragment:Gl,envmap_pars_vertex:Hl,envmap_physical_pars_fragment:nc,envmap_vertex:ql,fog_vertex:Xl,fog_pars_vertex:Kl,fog_fragment:Yl,fog_pars_fragment:jl,gradientmap_pars_fragment:Zl,lightmap_fragment:$l,lightmap_pars_fragment:Jl,lights_lambert_fragment:Ql,lights_lambert_pars_fragment:tc,lights_pars_begin:ec,lights_toon_fragment:ic,lights_toon_pars_fragment:rc,lights_phong_fragment:sc,lights_phong_pars_fragment:ac,lights_physical_fragment:oc,lights_physical_pars_fragment:lc,lights_fragment_begin:cc,lights_fragment_maps:uc,lights_fragment_end:hc,logdepthbuf_fragment:dc,logdepthbuf_pars_fragment:fc,logdepthbuf_pars_vertex:pc,logdepthbuf_vertex:mc,map_fragment:vc,map_pars_fragment:gc,map_particle_fragment:xc,map_particle_pars_fragment:yc,metalnessmap_fragment:_c,metalnessmap_pars_fragment:bc,morphcolor_vertex:Mc,morphnormal_vertex:wc,morphtarget_pars_vertex:Sc,morphtarget_vertex:Ec,normal_fragment_begin:Tc,normal_fragment_maps:Ac,normal_pars_fragment:Cc,normal_pars_vertex:Rc,normal_vertex:Lc,normalmap_pars_fragment:Pc,clearcoat_normal_fragment_begin:Dc,clearcoat_normal_fragment_maps:Ic,clearcoat_pars_fragment:Bc,iridescence_pars_fragment:Fc,output_fragment:zc,packing:Nc,premultiplied_alpha_fragment:Uc,project_vertex:Oc,dithering_fragment:Vc,dithering_pars_fragment:Wc,roughnessmap_fragment:kc,roughnessmap_pars_fragment:Gc,shadowmap_pars_fragment:Hc,shadowmap_pars_vertex:qc,shadowmap_vertex:Xc,shadowmask_pars_fragment:Kc,skinbase_vertex:Yc,skinning_pars_vertex:jc,skinning_vertex:Zc,skinnormal_vertex:$c,specularmap_fragment:Jc,specularmap_pars_fragment:Qc,tonemapping_fragment:tu,tonemapping_pars_fragment:eu,transmission_fragment:nu,transmission_pars_fragment:iu,uv_pars_fragment:ru,uv_pars_vertex:su,uv_vertex:au,uv2_pars_fragment:ou,uv2_pars_vertex:lu,uv2_vertex:cu,worldpos_vertex:uu,background_vert:hu,background_frag:du,backgroundCube_vert:fu,backgroundCube_frag:pu,cube_vert:mu,cube_frag:vu,depth_vert:gu,depth_frag:xu,distanceRGBA_vert:yu,distanceRGBA_frag:_u,equirect_vert:bu,equirect_frag:Mu,linedashed_vert:wu,linedashed_frag:Su,meshbasic_vert:Eu,meshbasic_frag:Tu,meshlambert_vert:Au,meshlambert_frag:Cu,meshmatcap_vert:Ru,meshmatcap_frag:Lu,meshnormal_vert:Pu,meshnormal_frag:Du,meshphong_vert:Iu,meshphong_frag:Bu,meshphysical_vert:Fu,meshphysical_frag:zu,meshtoon_vert:Nu,meshtoon_frag:Uu,points_vert:Ou,points_frag:Vu,shadow_vert:Wu,shadow_frag:ku,sprite_vert:Gu,sprite_frag:Hu},Lt={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Be},uv2Transform:{value:new Be},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Be}}},rn={basic:{uniforms:De([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:De([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ae(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:De([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:De([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:De([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new ae(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:De([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:De([Lt.points,Lt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:De([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:De([Lt.common,Lt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:De([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:De([Lt.sprite,Lt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:De([Lt.common,Lt.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:De([Lt.lights,Lt.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};rn.physical={uniforms:De([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new le(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const Gi={r:0,b:0,g:0};function qu(m,t,e,n,l,s,r){const a=new ae(0);let u=s===!0?0:1,d,o,i=null,c=0,h=null;function v(f,g){let y=!1,_=g.isScene===!0?g.background:null;_&&_.isTexture&&(_=(g.backgroundBlurriness>0?e:t).get(_));const x=m.xr,w=x.getSession&&x.getSession();w&&w.environmentBlendMode==="additive"&&(_=null),_===null?p(a,u):_&&_.isColor&&(p(_,1),y=!0),(m.autoClear||y)&&m.clear(m.autoClearColor,m.autoClearDepth,m.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Zi)?(o===void 0&&(o=new Qe(new oi(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:si(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),o.geometry.deleteAttribute("uv"),o.onBeforeRender=function(I,V,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(o.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(o)),o.material.uniforms.envMap.value=_,o.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,o.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,o.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,o.material.toneMapped=_.encoding!==ce,(i!==_||c!==_.version||h!==m.toneMapping)&&(o.material.needsUpdate=!0,i=_,c=_.version,h=m.toneMapping),o.layers.enableAll(),f.unshift(o,o.geometry,o.material,0,0,null)):_&&_.isTexture&&(d===void 0&&(d=new Qe(new Ji(2,2),new Nn({name:"BackgroundMaterial",uniforms:si(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(d)),d.material.uniforms.t2D.value=_,d.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,d.material.toneMapped=_.encoding!==ce,_.matrixAutoUpdate===!0&&_.updateMatrix(),d.material.uniforms.uvTransform.value.copy(_.matrix),(i!==_||c!==_.version||h!==m.toneMapping)&&(d.material.needsUpdate=!0,i=_,c=_.version,h=m.toneMapping),d.layers.enableAll(),f.unshift(d,d.geometry,d.material,0,0,null))}function p(f,g){f.getRGB(Gi,Aa(m)),n.buffers.color.setClear(Gi.r,Gi.g,Gi.b,g,r)}return{getClearColor:function(){return a},setClearColor:function(f,g=1){a.set(f),u=g,p(a,u)},getClearAlpha:function(){return u},setClearAlpha:function(f){u=f,p(a,u)},render:v}}function Xu(m,t,e,n){const l=m.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,a={},u=f(null);let d=u,o=!1;function i(U,K,tt,k,B){let Z=!1;if(r){const X=p(k,tt,K);d!==X&&(d=X,h(d.object)),Z=g(U,k,tt,B),Z&&y(U,k,tt,B)}else{const X=K.wireframe===!0;(d.geometry!==k.id||d.program!==tt.id||d.wireframe!==X)&&(d.geometry=k.id,d.program=tt.id,d.wireframe=X,Z=!0)}B!==null&&e.update(B,34963),(Z||o)&&(o=!1,b(U,K,tt,k),B!==null&&m.bindBuffer(34963,e.get(B).buffer))}function c(){return n.isWebGL2?m.createVertexArray():s.createVertexArrayOES()}function h(U){return n.isWebGL2?m.bindVertexArray(U):s.bindVertexArrayOES(U)}function v(U){return n.isWebGL2?m.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function p(U,K,tt){const k=tt.wireframe===!0;let B=a[U.id];B===void 0&&(B={},a[U.id]=B);let Z=B[K.id];Z===void 0&&(Z={},B[K.id]=Z);let X=Z[k];return X===void 0&&(X=f(c()),Z[k]=X),X}function f(U){const K=[],tt=[],k=[];for(let B=0;B<l;B++)K[B]=0,tt[B]=0,k[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:tt,attributeDivisors:k,object:U,attributes:{},index:null}}function g(U,K,tt,k){const B=d.attributes,Z=K.attributes;let X=0;const N=tt.getAttributes();for(const D in N)if(N[D].location>=0){const L=B[D];let M=Z[D];if(M===void 0&&(D==="instanceMatrix"&&U.instanceMatrix&&(M=U.instanceMatrix),D==="instanceColor"&&U.instanceColor&&(M=U.instanceColor)),L===void 0||L.attribute!==M||M&&L.data!==M.data)return!0;X++}return d.attributesNum!==X||d.index!==k}function y(U,K,tt,k){const B={},Z=K.attributes;let X=0;const N=tt.getAttributes();for(const D in N)if(N[D].location>=0){let L=Z[D];L===void 0&&(D==="instanceMatrix"&&U.instanceMatrix&&(L=U.instanceMatrix),D==="instanceColor"&&U.instanceColor&&(L=U.instanceColor));const M={};M.attribute=L,L&&L.data&&(M.data=L.data),B[D]=M,X++}d.attributes=B,d.attributesNum=X,d.index=k}function _(){const U=d.newAttributes;for(let K=0,tt=U.length;K<tt;K++)U[K]=0}function x(U){w(U,0)}function w(U,K){const tt=d.newAttributes,k=d.enabledAttributes,B=d.attributeDivisors;tt[U]=1,k[U]===0&&(m.enableVertexAttribArray(U),k[U]=1),B[U]!==K&&((n.isWebGL2?m:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,K),B[U]=K)}function I(){const U=d.newAttributes,K=d.enabledAttributes;for(let tt=0,k=K.length;tt<k;tt++)K[tt]!==U[tt]&&(m.disableVertexAttribArray(tt),K[tt]=0)}function V(U,K,tt,k,B,Z){n.isWebGL2===!0&&(tt===5124||tt===5125)?m.vertexAttribIPointer(U,K,tt,B,Z):m.vertexAttribPointer(U,K,tt,k,B,Z)}function b(U,K,tt,k){if(n.isWebGL2===!1&&(U.isInstancedMesh||k.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const B=k.attributes,Z=tt.getAttributes(),X=K.defaultAttributeValues;for(const N in Z){const D=Z[N];if(D.location>=0){let R=B[N];if(R===void 0&&(N==="instanceMatrix"&&U.instanceMatrix&&(R=U.instanceMatrix),N==="instanceColor"&&U.instanceColor&&(R=U.instanceColor)),R!==void 0){const L=R.normalized,M=R.itemSize,G=e.get(R);if(G===void 0)continue;const J=G.buffer,$=G.type,H=G.bytesPerElement;if(R.isInterleavedBufferAttribute){const Q=R.data,rt=Q.stride,wt=R.offset;if(Q.isInstancedInterleavedBuffer){for(let bt=0;bt<D.locationSize;bt++)w(D.location+bt,Q.meshPerAttribute);U.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let bt=0;bt<D.locationSize;bt++)x(D.location+bt);m.bindBuffer(34962,J);for(let bt=0;bt<D.locationSize;bt++)V(D.location+bt,M/D.locationSize,$,L,rt*H,(wt+M/D.locationSize*bt)*H)}else{if(R.isInstancedBufferAttribute){for(let Q=0;Q<D.locationSize;Q++)w(D.location+Q,R.meshPerAttribute);U.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let Q=0;Q<D.locationSize;Q++)x(D.location+Q);m.bindBuffer(34962,J);for(let Q=0;Q<D.locationSize;Q++)V(D.location+Q,M/D.locationSize,$,L,M*H,M/D.locationSize*Q*H)}}else if(X!==void 0){const L=X[N];if(L!==void 0)switch(L.length){case 2:m.vertexAttrib2fv(D.location,L);break;case 3:m.vertexAttrib3fv(D.location,L);break;case 4:m.vertexAttrib4fv(D.location,L);break;default:m.vertexAttrib1fv(D.location,L)}}}}I()}function T(){W();for(const U in a){const K=a[U];for(const tt in K){const k=K[tt];for(const B in k)v(k[B].object),delete k[B];delete K[tt]}delete a[U]}}function C(U){if(a[U.id]===void 0)return;const K=a[U.id];for(const tt in K){const k=K[tt];for(const B in k)v(k[B].object),delete k[B];delete K[tt]}delete a[U.id]}function F(U){for(const K in a){const tt=a[K];if(tt[U.id]===void 0)continue;const k=tt[U.id];for(const B in k)v(k[B].object),delete k[B];delete tt[U.id]}}function W(){z(),o=!0,d!==u&&(d=u,h(d.object))}function z(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:i,reset:W,resetDefaultState:z,dispose:T,releaseStatesOfGeometry:C,releaseStatesOfProgram:F,initAttributes:_,enableAttribute:x,disableUnusedAttributes:I}}function Ku(m,t,e,n){const l=n.isWebGL2;let s;function r(d){s=d}function a(d,o){m.drawArrays(s,d,o),e.update(o,s,1)}function u(d,o,i){if(i===0)return;let c,h;if(l)c=m,h="drawArraysInstanced";else if(c=t.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",c===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}c[h](s,d,o,i),e.update(o,s,i)}this.setMode=r,this.render=a,this.renderInstances=u}function Yu(m,t,e){let n;function l(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const V=t.get("EXT_texture_filter_anisotropic");n=m.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(V){if(V==="highp"){if(m.getShaderPrecisionFormat(35633,36338).precision>0&&m.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";V="mediump"}return V==="mediump"&&m.getShaderPrecisionFormat(35633,36337).precision>0&&m.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&m instanceof WebGL2RenderingContext;let a=e.precision!==void 0?e.precision:"highp";const u=s(a);u!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",u,"instead."),a=u);const d=r||t.has("WEBGL_draw_buffers"),o=e.logarithmicDepthBuffer===!0,i=m.getParameter(34930),c=m.getParameter(35660),h=m.getParameter(3379),v=m.getParameter(34076),p=m.getParameter(34921),f=m.getParameter(36347),g=m.getParameter(36348),y=m.getParameter(36349),_=c>0,x=r||t.has("OES_texture_float"),w=_&&x,I=r?m.getParameter(36183):0;return{isWebGL2:r,drawBuffers:d,getMaxAnisotropy:l,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:o,maxTextures:i,maxVertexTextures:c,maxTextureSize:h,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:f,maxVaryings:g,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:x,floatVertexTextures:w,maxSamples:I}}function ju(m){const t=this;let e=null,n=0,l=!1,s=!1;const r=new Cn,a=new Be,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(i,c){const h=i.length!==0||c||n!==0||l;return l=c,n=i.length,h},this.beginShadows=function(){s=!0,o(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(i,c){e=o(i,c,0)},this.setState=function(i,c,h){const v=i.clippingPlanes,p=i.clipIntersection,f=i.clipShadows,g=m.get(i);if(!l||v===null||v.length===0||s&&!f)s?o(null):d();else{const y=s?0:n,_=y*4;let x=g.clippingState||null;u.value=x,x=o(v,c,_,h);for(let w=0;w!==_;++w)x[w]=e[w];g.clippingState=x,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=y}};function d(){u.value!==e&&(u.value=e,u.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function o(i,c,h,v){const p=i!==null?i.length:0;let f=null;if(p!==0){if(f=u.value,v!==!0||f===null){const g=h+p*4,y=c.matrixWorldInverse;a.getNormalMatrix(y),(f===null||f.length<g)&&(f=new Float32Array(g));for(let _=0,x=h;_!==p;++_,x+=4)r.copy(i[_]).applyMatrix4(y,a),r.normal.toArray(f,x),f[x+3]=r.constant}u.value=f,u.needsUpdate=!0}return t.numPlanes=p,t.numIntersection=0,f}}function Zu(m){let t=new WeakMap;function e(r,a){return a===zr?r.mapping=ni:a===Nr&&(r.mapping=ii),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const a=r.mapping;if(a===zr||a===Nr)if(t.has(r)){const u=t.get(r).texture;return e(u,r.mapping)}else{const u=r.image;if(u&&u.height>0){const d=new cl(u.height/2);return d.fromEquirectangularTexture(m,r),t.set(r,d),r.addEventListener("dispose",l),e(d.texture,r.mapping)}else return null}}return r}function l(r){const a=r.target;a.removeEventListener("dispose",l);const u=t.get(a);u!==void 0&&(t.delete(a),u.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class $u extends Ca{constructor(t=-1,e=1,n=1,l=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=l,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,l,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=l,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let s=n-t,r=n+t,a=l+e,u=l-e;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,o=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=d*this.view.offsetX,r=s+d*this.view.width,a-=o*this.view.offsetY,u=a-o*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,u,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Jn=4,Us=[.125,.215,.35,.446,.526,.582],Ln=20,Cr=new $u,Os=new ae;let Rr=null;const Rn=(1+Math.sqrt(5))/2,Zn=1/Rn,Vs=[new it(1,1,1),new it(-1,1,1),new it(1,1,-1),new it(-1,1,-1),new it(0,Rn,Zn),new it(0,Rn,-Zn),new it(Zn,0,Rn),new it(-Zn,0,Rn),new it(Rn,Zn,0),new it(-Rn,Zn,0)];class Ws{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,l=100){Rr=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,l,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Rr),t.scissorTest=!1,Hi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ni||t.mapping===ii?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Rr=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:yi,format:Je,encoding:Fn,depthBuffer:!1},l=ks(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ks(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ju(s)),this._blurMaterial=Qu(s,t,e)}return l}_compileMaterial(t){const e=new Qe(this._lodPlanes[0],t);this._renderer.compile(e,Cr)}_sceneToCubeUV(t,e,n,l){const a=new Ke(90,1,e,n),u=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],o=this._renderer,i=o.autoClear,c=o.toneMapping;o.getClearColor(Os),o.toneMapping=fn,o.autoClear=!1;const h=new Sa({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),v=new Qe(new oi,h);let p=!1;const f=t.background;f?f.isColor&&(h.color.copy(f),t.background=null,p=!0):(h.color.copy(Os),p=!0);for(let g=0;g<6;g++){const y=g%3;y===0?(a.up.set(0,u[g],0),a.lookAt(d[g],0,0)):y===1?(a.up.set(0,0,u[g]),a.lookAt(0,d[g],0)):(a.up.set(0,u[g],0),a.lookAt(0,0,d[g]));const _=this._cubeSize;Hi(l,y*_,g>2?_:0,_,_),o.setRenderTarget(l),p&&o.render(v,a),o.render(t,a)}v.geometry.dispose(),v.material.dispose(),o.toneMapping=c,o.autoClear=i,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,l=t.mapping===ni||t.mapping===ii;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hs()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gs());const s=l?this._cubemapMaterial:this._equirectMaterial,r=new Qe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const u=this._cubeSize;Hi(e,0,0,3*u,2*u),n.setRenderTarget(e),n.render(r,Cr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let l=1;l<this._lodPlanes.length;l++){const s=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),r=Vs[(l-1)%Vs.length];this._blur(t,l-1,l,s,r)}e.autoClear=n}_blur(t,e,n,l,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,l,"latitudinal",s),this._halfBlur(r,t,n,n,l,"longitudinal",s)}_halfBlur(t,e,n,l,s,r,a){const u=this._renderer,d=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const o=3,i=new Qe(this._lodPlanes[l],d),c=d.uniforms,h=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Ln-1),p=s/v,f=isFinite(s)?1+Math.floor(o*p):Ln;f>Ln&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Ln}`);const g=[];let y=0;for(let V=0;V<Ln;++V){const b=V/p,T=Math.exp(-b*b/2);g.push(T),V===0?y+=T:V<f&&(y+=2*T)}for(let V=0;V<g.length;V++)g[V]=g[V]/y;c.envMap.value=t.texture,c.samples.value=f,c.weights.value=g,c.latitudinal.value=r==="latitudinal",a&&(c.poleAxis.value=a);const{_lodMax:_}=this;c.dTheta.value=v,c.mipInt.value=_-n;const x=this._sizeLods[l],w=3*x*(l>_-Jn?l-_+Jn:0),I=4*(this._cubeSize-x);Hi(e,w,I,3*x,2*x),u.setRenderTarget(e),u.render(i,Cr)}}function Ju(m){const t=[],e=[],n=[];let l=m;const s=m-Jn+1+Us.length;for(let r=0;r<s;r++){const a=Math.pow(2,l);e.push(a);let u=1/a;r>m-Jn?u=Us[r-m+Jn-1]:r===0&&(u=0),n.push(u);const d=1/(a-2),o=-d,i=1+d,c=[o,o,i,o,i,i,o,o,i,i,o,i],h=6,v=6,p=3,f=2,g=1,y=new Float32Array(p*v*h),_=new Float32Array(f*v*h),x=new Float32Array(g*v*h);for(let I=0;I<h;I++){const V=I%3*2/3-1,b=I>2?0:-1,T=[V,b,0,V+2/3,b,0,V+2/3,b+1,0,V,b,0,V+2/3,b+1,0,V,b+1,0];y.set(T,p*v*I),_.set(c,f*v*I);const C=[I,I,I,I,I,I];x.set(C,g*v*I)}const w=new pn;w.setAttribute("position",new tn(y,p)),w.setAttribute("uv",new tn(_,f)),w.setAttribute("faceIndex",new tn(x,g)),t.push(w),l>Jn&&l--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ks(m,t,e){const n=new zn(m,t,e);return n.texture.mapping=Zi,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hi(m,t,e,n,l){m.viewport.set(t,e,n,l),m.scissor.set(t,e,n,l)}function Qu(m,t,e){const n=new Float32Array(Ln),l=new it(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:Ln,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${m}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Hr(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Gs(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hr(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Hs(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Hr(){return`

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
	`}function th(m){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const u=a.mapping,d=u===zr||u===Nr,o=u===ni||u===ii;if(d||o)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let i=t.get(a);return e===null&&(e=new Ws(m)),i=d?e.fromEquirectangular(a,i):e.fromCubemap(a,i),t.set(a,i),i.texture}else{if(t.has(a))return t.get(a).texture;{const i=a.image;if(d&&i&&i.height>0||o&&i&&l(i)){e===null&&(e=new Ws(m));const c=d?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,c),a.addEventListener("dispose",s),c.texture}else return null}}}return a}function l(a){let u=0;const d=6;for(let o=0;o<d;o++)a[o]!==void 0&&u++;return u===d}function s(a){const u=a.target;u.removeEventListener("dispose",s);const d=t.get(u);d!==void 0&&(t.delete(u),d.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function eh(m){const t={};function e(n){if(t[n]!==void 0)return t[n];let l;switch(n){case"WEBGL_depth_texture":l=m.getExtension("WEBGL_depth_texture")||m.getExtension("MOZ_WEBGL_depth_texture")||m.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=m.getExtension("EXT_texture_filter_anisotropic")||m.getExtension("MOZ_EXT_texture_filter_anisotropic")||m.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=m.getExtension("WEBGL_compressed_texture_s3tc")||m.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||m.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=m.getExtension("WEBGL_compressed_texture_pvrtc")||m.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=m.getExtension(n)}return t[n]=l,l}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const l=e(n);return l===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),l}}}function nh(m,t,e,n){const l={},s=new WeakMap;function r(i){const c=i.target;c.index!==null&&t.remove(c.index);for(const v in c.attributes)t.remove(c.attributes[v]);c.removeEventListener("dispose",r),delete l[c.id];const h=s.get(c);h&&(t.remove(h),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,e.memory.geometries--}function a(i,c){return l[c.id]===!0||(c.addEventListener("dispose",r),l[c.id]=!0,e.memory.geometries++),c}function u(i){const c=i.attributes;for(const v in c)t.update(c[v],34962);const h=i.morphAttributes;for(const v in h){const p=h[v];for(let f=0,g=p.length;f<g;f++)t.update(p[f],34962)}}function d(i){const c=[],h=i.index,v=i.attributes.position;let p=0;if(h!==null){const y=h.array;p=h.version;for(let _=0,x=y.length;_<x;_+=3){const w=y[_+0],I=y[_+1],V=y[_+2];c.push(w,I,I,V,V,w)}}else{const y=v.array;p=v.version;for(let _=0,x=y.length/3-1;_<x;_+=3){const w=_+0,I=_+1,V=_+2;c.push(w,I,I,V,V,w)}}const f=new(xa(c)?Ta:Ea)(c,1);f.version=p;const g=s.get(i);g&&t.remove(g),s.set(i,f)}function o(i){const c=s.get(i);if(c){const h=i.index;h!==null&&c.version<h.version&&d(i)}else d(i);return s.get(i)}return{get:a,update:u,getWireframeAttribute:o}}function ih(m,t,e,n){const l=n.isWebGL2;let s;function r(c){s=c}let a,u;function d(c){a=c.type,u=c.bytesPerElement}function o(c,h){m.drawElements(s,h,a,c*u),e.update(h,s,1)}function i(c,h,v){if(v===0)return;let p,f;if(l)p=m,f="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,h,a,c*u,v),e.update(h,s,v)}this.setMode=r,this.setIndex=d,this.render=o,this.renderInstances=i}function rh(m){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,a){switch(e.calls++,r){case 4:e.triangles+=a*(s/3);break;case 1:e.lines+=a*(s/2);break;case 3:e.lines+=a*(s-1);break;case 2:e.lines+=a*s;break;case 0:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function l(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:l,update:n}}function sh(m,t){return m[0]-t[0]}function ah(m,t){return Math.abs(t[1])-Math.abs(m[1])}function oh(m,t,e){const n={},l=new Float32Array(8),s=new WeakMap,r=new Te,a=[];for(let d=0;d<8;d++)a[d]=[d,0];function u(d,o,i){const c=d.morphTargetInfluences;if(t.isWebGL2===!0){const v=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=v!==void 0?v.length:0;let f=s.get(o);if(f===void 0||f.count!==p){let K=function(){z.dispose(),s.delete(o),o.removeEventListener("dispose",K)};var h=K;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,w=o.morphAttributes.color!==void 0,I=o.morphAttributes.position||[],V=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let T=0;_===!0&&(T=1),x===!0&&(T=2),w===!0&&(T=3);let C=o.attributes.position.count*T,F=1;C>t.maxTextureSize&&(F=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const W=new Float32Array(C*F*4*p),z=new ba(W,C,F,p);z.type=Dn,z.needsUpdate=!0;const U=T*4;for(let tt=0;tt<p;tt++){const k=I[tt],B=V[tt],Z=b[tt],X=C*F*4*tt;for(let N=0;N<k.count;N++){const D=N*U;_===!0&&(r.fromBufferAttribute(k,N),W[X+D+0]=r.x,W[X+D+1]=r.y,W[X+D+2]=r.z,W[X+D+3]=0),x===!0&&(r.fromBufferAttribute(B,N),W[X+D+4]=r.x,W[X+D+5]=r.y,W[X+D+6]=r.z,W[X+D+7]=0),w===!0&&(r.fromBufferAttribute(Z,N),W[X+D+8]=r.x,W[X+D+9]=r.y,W[X+D+10]=r.z,W[X+D+11]=Z.itemSize===4?r.w:1)}}f={count:p,texture:z,size:new le(C,F)},s.set(o,f),o.addEventListener("dispose",K)}let g=0;for(let _=0;_<c.length;_++)g+=c[_];const y=o.morphTargetsRelative?1:1-g;i.getUniforms().setValue(m,"morphTargetBaseInfluence",y),i.getUniforms().setValue(m,"morphTargetInfluences",c),i.getUniforms().setValue(m,"morphTargetsTexture",f.texture,e),i.getUniforms().setValue(m,"morphTargetsTextureSize",f.size)}else{const v=c===void 0?0:c.length;let p=n[o.id];if(p===void 0||p.length!==v){p=[];for(let x=0;x<v;x++)p[x]=[x,0];n[o.id]=p}for(let x=0;x<v;x++){const w=p[x];w[0]=x,w[1]=c[x]}p.sort(ah);for(let x=0;x<8;x++)x<v&&p[x][1]?(a[x][0]=p[x][0],a[x][1]=p[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(sh);const f=o.morphAttributes.position,g=o.morphAttributes.normal;let y=0;for(let x=0;x<8;x++){const w=a[x],I=w[0],V=w[1];I!==Number.MAX_SAFE_INTEGER&&V?(f&&o.getAttribute("morphTarget"+x)!==f[I]&&o.setAttribute("morphTarget"+x,f[I]),g&&o.getAttribute("morphNormal"+x)!==g[I]&&o.setAttribute("morphNormal"+x,g[I]),l[x]=V,y+=V):(f&&o.hasAttribute("morphTarget"+x)===!0&&o.deleteAttribute("morphTarget"+x),g&&o.hasAttribute("morphNormal"+x)===!0&&o.deleteAttribute("morphNormal"+x),l[x]=0)}const _=o.morphTargetsRelative?1:1-y;i.getUniforms().setValue(m,"morphTargetBaseInfluence",_),i.getUniforms().setValue(m,"morphTargetInfluences",l)}}return{update:u}}function lh(m,t,e,n){let l=new WeakMap;function s(u){const d=n.render.frame,o=u.geometry,i=t.get(u,o);return l.get(i)!==d&&(t.update(i),l.set(i,d)),u.isInstancedMesh&&(u.hasEventListener("dispose",a)===!1&&u.addEventListener("dispose",a),e.update(u.instanceMatrix,34962),u.instanceColor!==null&&e.update(u.instanceColor,34962)),i}function r(){l=new WeakMap}function a(u){const d=u.target;d.removeEventListener("dispose",a),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:s,dispose:r}}const Da=new ze,Ia=new ba,Ba=new Xo,Fa=new Ra,qs=[],Xs=[],Ks=new Float32Array(16),Ys=new Float32Array(9),js=new Float32Array(4);function li(m,t,e){const n=m[0];if(n<=0||n>0)return m;const l=t*e;let s=qs[l];if(s===void 0&&(s=new Float32Array(l),qs[l]=s),t!==0){n.toArray(s,0);for(let r=1,a=0;r!==t;++r)a+=e,m[r].toArray(s,a)}return s}function ve(m,t){if(m.length!==t.length)return!1;for(let e=0,n=m.length;e<n;e++)if(m[e]!==t[e])return!1;return!0}function ge(m,t){for(let e=0,n=t.length;e<n;e++)m[e]=t[e]}function Qi(m,t){let e=Xs[t];e===void 0&&(e=new Int32Array(t),Xs[t]=e);for(let n=0;n!==t;++n)e[n]=m.allocateTextureUnit();return e}function ch(m,t){const e=this.cache;e[0]!==t&&(m.uniform1f(this.addr,t),e[0]=t)}function uh(m,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(m.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;m.uniform2fv(this.addr,t),ge(e,t)}}function hh(m,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(m.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(m.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;m.uniform3fv(this.addr,t),ge(e,t)}}function dh(m,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(m.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;m.uniform4fv(this.addr,t),ge(e,t)}}function fh(m,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;m.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(ve(e,n))return;js.set(n),m.uniformMatrix2fv(this.addr,!1,js),ge(e,n)}}function ph(m,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;m.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(ve(e,n))return;Ys.set(n),m.uniformMatrix3fv(this.addr,!1,Ys),ge(e,n)}}function mh(m,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;m.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(ve(e,n))return;Ks.set(n),m.uniformMatrix4fv(this.addr,!1,Ks),ge(e,n)}}function vh(m,t){const e=this.cache;e[0]!==t&&(m.uniform1i(this.addr,t),e[0]=t)}function gh(m,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(m.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;m.uniform2iv(this.addr,t),ge(e,t)}}function xh(m,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(m.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;m.uniform3iv(this.addr,t),ge(e,t)}}function yh(m,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(m.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;m.uniform4iv(this.addr,t),ge(e,t)}}function _h(m,t){const e=this.cache;e[0]!==t&&(m.uniform1ui(this.addr,t),e[0]=t)}function bh(m,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(m.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;m.uniform2uiv(this.addr,t),ge(e,t)}}function Mh(m,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(m.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;m.uniform3uiv(this.addr,t),ge(e,t)}}function wh(m,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(m.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;m.uniform4uiv(this.addr,t),ge(e,t)}}function Sh(m,t,e){const n=this.cache,l=e.allocateTextureUnit();n[0]!==l&&(m.uniform1i(this.addr,l),n[0]=l),e.setTexture2D(t||Da,l)}function Eh(m,t,e){const n=this.cache,l=e.allocateTextureUnit();n[0]!==l&&(m.uniform1i(this.addr,l),n[0]=l),e.setTexture3D(t||Ba,l)}function Th(m,t,e){const n=this.cache,l=e.allocateTextureUnit();n[0]!==l&&(m.uniform1i(this.addr,l),n[0]=l),e.setTextureCube(t||Fa,l)}function Ah(m,t,e){const n=this.cache,l=e.allocateTextureUnit();n[0]!==l&&(m.uniform1i(this.addr,l),n[0]=l),e.setTexture2DArray(t||Ia,l)}function Ch(m){switch(m){case 5126:return ch;case 35664:return uh;case 35665:return hh;case 35666:return dh;case 35674:return fh;case 35675:return ph;case 35676:return mh;case 5124:case 35670:return vh;case 35667:case 35671:return gh;case 35668:case 35672:return xh;case 35669:case 35673:return yh;case 5125:return _h;case 36294:return bh;case 36295:return Mh;case 36296:return wh;case 35678:case 36198:case 36298:case 36306:case 35682:return Sh;case 35679:case 36299:case 36307:return Eh;case 35680:case 36300:case 36308:case 36293:return Th;case 36289:case 36303:case 36311:case 36292:return Ah}}function Rh(m,t){m.uniform1fv(this.addr,t)}function Lh(m,t){const e=li(t,this.size,2);m.uniform2fv(this.addr,e)}function Ph(m,t){const e=li(t,this.size,3);m.uniform3fv(this.addr,e)}function Dh(m,t){const e=li(t,this.size,4);m.uniform4fv(this.addr,e)}function Ih(m,t){const e=li(t,this.size,4);m.uniformMatrix2fv(this.addr,!1,e)}function Bh(m,t){const e=li(t,this.size,9);m.uniformMatrix3fv(this.addr,!1,e)}function Fh(m,t){const e=li(t,this.size,16);m.uniformMatrix4fv(this.addr,!1,e)}function zh(m,t){m.uniform1iv(this.addr,t)}function Nh(m,t){m.uniform2iv(this.addr,t)}function Uh(m,t){m.uniform3iv(this.addr,t)}function Oh(m,t){m.uniform4iv(this.addr,t)}function Vh(m,t){m.uniform1uiv(this.addr,t)}function Wh(m,t){m.uniform2uiv(this.addr,t)}function kh(m,t){m.uniform3uiv(this.addr,t)}function Gh(m,t){m.uniform4uiv(this.addr,t)}function Hh(m,t,e){const n=this.cache,l=t.length,s=Qi(e,l);ve(n,s)||(m.uniform1iv(this.addr,s),ge(n,s));for(let r=0;r!==l;++r)e.setTexture2D(t[r]||Da,s[r])}function qh(m,t,e){const n=this.cache,l=t.length,s=Qi(e,l);ve(n,s)||(m.uniform1iv(this.addr,s),ge(n,s));for(let r=0;r!==l;++r)e.setTexture3D(t[r]||Ba,s[r])}function Xh(m,t,e){const n=this.cache,l=t.length,s=Qi(e,l);ve(n,s)||(m.uniform1iv(this.addr,s),ge(n,s));for(let r=0;r!==l;++r)e.setTextureCube(t[r]||Fa,s[r])}function Kh(m,t,e){const n=this.cache,l=t.length,s=Qi(e,l);ve(n,s)||(m.uniform1iv(this.addr,s),ge(n,s));for(let r=0;r!==l;++r)e.setTexture2DArray(t[r]||Ia,s[r])}function Yh(m){switch(m){case 5126:return Rh;case 35664:return Lh;case 35665:return Ph;case 35666:return Dh;case 35674:return Ih;case 35675:return Bh;case 35676:return Fh;case 5124:case 35670:return zh;case 35667:case 35671:return Nh;case 35668:case 35672:return Uh;case 35669:case 35673:return Oh;case 5125:return Vh;case 36294:return Wh;case 36295:return kh;case 36296:return Gh;case 35678:case 36198:case 36298:case 36306:case 35682:return Hh;case 35679:case 36299:case 36307:return qh;case 35680:case 36300:case 36308:case 36293:return Xh;case 36289:case 36303:case 36311:case 36292:return Kh}}class jh{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Ch(e.type)}}class Zh{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Yh(e.type)}}class $h{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const l=this.seq;for(let s=0,r=l.length;s!==r;++s){const a=l[s];a.setValue(t,e[a.id],n)}}}const Lr=/(\w+)(\])?(\[|\.)?/g;function Zs(m,t){m.seq.push(t),m.map[t.id]=t}function Jh(m,t,e){const n=m.name,l=n.length;for(Lr.lastIndex=0;;){const s=Lr.exec(n),r=Lr.lastIndex;let a=s[1];const u=s[2]==="]",d=s[3];if(u&&(a=a|0),d===void 0||d==="["&&r+2===l){Zs(e,d===void 0?new jh(a,m,t):new Zh(a,m,t));break}else{let i=e.map[a];i===void 0&&(i=new $h(a),Zs(e,i)),e=i}}}class Yi{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let l=0;l<n;++l){const s=t.getActiveUniform(e,l),r=t.getUniformLocation(e,s.name);Jh(s,r,this)}}setValue(t,e,n,l){const s=this.map[e];s!==void 0&&s.setValue(t,n,l)}setOptional(t,e,n){const l=e[n];l!==void 0&&this.setValue(t,n,l)}static upload(t,e,n,l){for(let s=0,r=e.length;s!==r;++s){const a=e[s],u=n[a.id];u.needsUpdate!==!1&&a.setValue(t,u.value,l)}}static seqWithValue(t,e){const n=[];for(let l=0,s=t.length;l!==s;++l){const r=t[l];r.id in e&&n.push(r)}return n}}function $s(m,t,e){const n=m.createShader(t);return m.shaderSource(n,e),m.compileShader(n),n}let Qh=0;function td(m,t){const e=m.split(`
`),n=[],l=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=l;r<s;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}function ed(m){switch(m){case Fn:return["Linear","( value )"];case ce:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",m),["Linear","( value )"]}}function Js(m,t,e){const n=m.getShaderParameter(t,35713),l=m.getShaderInfoLog(t).trim();if(n&&l==="")return"";const s=/ERROR: 0:(\d+)/.exec(l);if(s){const r=parseInt(s[1]);return e.toUpperCase()+`

`+l+`

`+td(m.getShaderSource(t),r)}else return l}function nd(m,t){const e=ed(t);return"vec4 "+m+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function id(m,t){let e;switch(t){case ho:e="Linear";break;case fo:e="Reinhard";break;case po:e="OptimizedCineon";break;case mo:e="ACESFilmic";break;case vo:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+m+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function rd(m){return[m.extensionDerivatives||m.envMapCubeUVHeight||m.bumpMap||m.tangentSpaceNormalMap||m.clearcoatNormalMap||m.flatShading||m.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(m.extensionFragDepth||m.logarithmicDepthBuffer)&&m.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",m.extensionDrawBuffers&&m.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(m.extensionShaderTextureLOD||m.envMap||m.transmission)&&m.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(gi).join(`
`)}function sd(m){const t=[];for(const e in m){const n=m[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ad(m,t){const e={},n=m.getProgramParameter(t,35721);for(let l=0;l<n;l++){const s=m.getActiveAttrib(t,l),r=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),e[r]={type:s.type,location:m.getAttribLocation(t,r),locationSize:a}}return e}function gi(m){return m!==""}function Qs(m,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return m.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ta(m,t){return m.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const od=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vr(m){return m.replace(od,ld)}function ld(m,t){const e=Qt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Vr(e)}const cd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ea(m){return m.replace(cd,ud)}function ud(m,t,e,n){let l="";for(let s=parseInt(t);s<parseInt(e);s++)l+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return l}function na(m){let t="precision "+m.precision+` float;
precision `+m.precision+" int;";return m.precision==="highp"?t+=`
#define HIGH_PRECISION`:m.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:m.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function hd(m){let t="SHADOWMAP_TYPE_BASIC";return m.shadowMapType===ua?t="SHADOWMAP_TYPE_PCF":m.shadowMapType===Ga?t="SHADOWMAP_TYPE_PCF_SOFT":m.shadowMapType===vi&&(t="SHADOWMAP_TYPE_VSM"),t}function dd(m){let t="ENVMAP_TYPE_CUBE";if(m.envMap)switch(m.envMapMode){case ni:case ii:t="ENVMAP_TYPE_CUBE";break;case Zi:t="ENVMAP_TYPE_CUBE_UV";break}return t}function fd(m){let t="ENVMAP_MODE_REFLECTION";if(m.envMap)switch(m.envMapMode){case ii:t="ENVMAP_MODE_REFRACTION";break}return t}function pd(m){let t="ENVMAP_BLENDING_NONE";if(m.envMap)switch(m.combine){case fa:t="ENVMAP_BLENDING_MULTIPLY";break;case co:t="ENVMAP_BLENDING_MIX";break;case uo:t="ENVMAP_BLENDING_ADD";break}return t}function md(m){const t=m.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function vd(m,t,e,n){const l=m.getContext(),s=e.defines;let r=e.vertexShader,a=e.fragmentShader;const u=hd(e),d=dd(e),o=fd(e),i=pd(e),c=md(e),h=e.isWebGL2?"":rd(e),v=sd(s),p=l.createProgram();let f,g,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=[v].filter(gi).join(`
`),f.length>0&&(f+=`
`),g=[h,v].filter(gi).join(`
`),g.length>0&&(g+=`
`)):(f=[na(e),"#define SHADER_NAME "+e.shaderName,v,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+o:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gi).join(`
`),g=[h,na(e),"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+o:"",e.envMap?"#define "+i:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fn?"#define TONE_MAPPING":"",e.toneMapping!==fn?Qt.tonemapping_pars_fragment:"",e.toneMapping!==fn?id("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.encodings_pars_fragment,nd("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gi).join(`
`)),r=Vr(r),r=Qs(r,e),r=ta(r,e),a=Vr(a),a=Qs(a,e),a=ta(a,e),r=ea(r),a=ea(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,g=["#define varying in",e.glslVersion===Ss?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ss?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const _=y+f+r,x=y+g+a,w=$s(l,35633,_),I=$s(l,35632,x);if(l.attachShader(p,w),l.attachShader(p,I),e.index0AttributeName!==void 0?l.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&l.bindAttribLocation(p,0,"position"),l.linkProgram(p),m.debug.checkShaderErrors){const T=l.getProgramInfoLog(p).trim(),C=l.getShaderInfoLog(w).trim(),F=l.getShaderInfoLog(I).trim();let W=!0,z=!0;if(l.getProgramParameter(p,35714)===!1){W=!1;const U=Js(l,w,"vertex"),K=Js(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(p,35715)+`

Program Info Log: `+T+`
`+U+`
`+K)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(C===""||F==="")&&(z=!1);z&&(this.diagnostics={runnable:W,programLog:T,vertexShader:{log:C,prefix:f},fragmentShader:{log:F,prefix:g}})}l.deleteShader(w),l.deleteShader(I);let V;this.getUniforms=function(){return V===void 0&&(V=new Yi(l,p)),V};let b;return this.getAttributes=function(){return b===void 0&&(b=ad(l,p)),b},this.destroy=function(){n.releaseStatesOfProgram(this),l.deleteProgram(p),this.program=void 0},this.name=e.shaderName,this.id=Qh++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=I,this}let gd=0;class xd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,l=this._getShaderStage(e),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(l)===!1&&(r.add(l),l.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new yd(t),e.set(t,n)),n}}class yd{constructor(t){this.id=gd++,this.code=t,this.usedTimes=0}}function _d(m,t,e,n,l,s,r){const a=new Ma,u=new xd,d=[],o=l.isWebGL2,i=l.logarithmicDepthBuffer,c=l.vertexTextures;let h=l.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(b,T,C,F,W){const z=F.fog,U=W.geometry,K=b.isMeshStandardMaterial?F.environment:null,tt=(b.isMeshStandardMaterial?e:t).get(b.envMap||K),k=tt&&tt.mapping===Zi?tt.image.height:null,B=v[b.type];b.precision!==null&&(h=l.getMaxPrecision(b.precision),h!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",h,"instead."));const Z=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,X=Z!==void 0?Z.length:0;let N=0;U.morphAttributes.position!==void 0&&(N=1),U.morphAttributes.normal!==void 0&&(N=2),U.morphAttributes.color!==void 0&&(N=3);let D,R,L,M;if(B){const rt=rn[B];D=rt.vertexShader,R=rt.fragmentShader}else D=b.vertexShader,R=b.fragmentShader,u.update(b),L=u.getVertexShaderID(b),M=u.getFragmentShaderID(b);const G=m.getRenderTarget(),J=b.alphaTest>0,$=b.clearcoat>0,H=b.iridescence>0;return{isWebGL2:o,shaderID:B,shaderName:b.type,vertexShader:D,fragmentShader:R,defines:b.defines,customVertexShaderID:L,customFragmentShaderID:M,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:h,instancing:W.isInstancedMesh===!0,instancingColor:W.isInstancedMesh===!0&&W.instanceColor!==null,supportsVertexTextures:c,outputEncoding:G===null?m.outputEncoding:G.isXRRenderTarget===!0?G.texture.encoding:Fn,map:!!b.map,matcap:!!b.matcap,envMap:!!tt,envMapMode:tt&&tt.mapping,envMapCubeUVHeight:k,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===Fo,tangentSpaceNormalMap:b.normalMapType===va,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===ce,clearcoat:$,clearcoatMap:$&&!!b.clearcoatMap,clearcoatRoughnessMap:$&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:$&&!!b.clearcoatNormalMap,iridescence:H,iridescenceMap:H&&!!b.iridescenceMap,iridescenceThicknessMap:H&&!!b.iridescenceThicknessMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===Qn,alphaMap:!!b.alphaMap,alphaTest:J,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!U.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(b.map||b.bumpMap||b.normalMap||b.specularMap||b.alphaMap||b.emissiveMap||b.roughnessMap||b.metalnessMap||b.clearcoatNormalMap||b.iridescenceMap||b.iridescenceThicknessMap||b.transmission>0||b.transmissionMap||b.thicknessMap||b.specularIntensityMap||b.specularColorMap||b.sheen>0||b.sheenColorMap||b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!z,useFog:b.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:i,skinning:W.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:N,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:m.shadowMap.enabled&&C.length>0,shadowMapType:m.shadowMap.type,toneMapping:b.toneMapped?m.toneMapping:fn,useLegacyLights:m.useLegacyLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===yn,flipSided:b.side===Ge,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:o||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:o||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:o||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function f(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const C in b.defines)T.push(C),T.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(g(T,b),y(T,b),T.push(m.outputEncoding)),T.push(b.customProgramCacheKey),T.join()}function g(b,T){b.push(T.precision),b.push(T.outputEncoding),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.combine),b.push(T.vertexUvs),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function y(b,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),b.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.specularIntensityMap&&a.enable(15),T.specularColorMap&&a.enable(16),T.transmission&&a.enable(17),T.transmissionMap&&a.enable(18),T.thicknessMap&&a.enable(19),T.sheen&&a.enable(20),T.sheenColorMap&&a.enable(21),T.sheenRoughnessMap&&a.enable(22),T.decodeVideoTexture&&a.enable(23),T.opaque&&a.enable(24),b.push(a.mask)}function _(b){const T=v[b.type];let C;if(T){const F=rn[T];C=sl.clone(F.uniforms)}else C=b.uniforms;return C}function x(b,T){let C;for(let F=0,W=d.length;F<W;F++){const z=d[F];if(z.cacheKey===T){C=z,++C.usedTimes;break}}return C===void 0&&(C=new vd(m,T,b,s),d.push(C)),C}function w(b){if(--b.usedTimes===0){const T=d.indexOf(b);d[T]=d[d.length-1],d.pop(),b.destroy()}}function I(b){u.remove(b)}function V(){u.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:_,acquireProgram:x,releaseProgram:w,releaseShaderCache:I,programs:d,dispose:V}}function bd(){let m=new WeakMap;function t(s){let r=m.get(s);return r===void 0&&(r={},m.set(s,r)),r}function e(s){m.delete(s)}function n(s,r,a){m.get(s)[r]=a}function l(){m=new WeakMap}return{get:t,remove:e,update:n,dispose:l}}function Md(m,t){return m.groupOrder!==t.groupOrder?m.groupOrder-t.groupOrder:m.renderOrder!==t.renderOrder?m.renderOrder-t.renderOrder:m.material.id!==t.material.id?m.material.id-t.material.id:m.z!==t.z?m.z-t.z:m.id-t.id}function ia(m,t){return m.groupOrder!==t.groupOrder?m.groupOrder-t.groupOrder:m.renderOrder!==t.renderOrder?m.renderOrder-t.renderOrder:m.z!==t.z?t.z-m.z:m.id-t.id}function ra(){const m=[];let t=0;const e=[],n=[],l=[];function s(){t=0,e.length=0,n.length=0,l.length=0}function r(i,c,h,v,p,f){let g=m[t];return g===void 0?(g={id:i.id,object:i,geometry:c,material:h,groupOrder:v,renderOrder:i.renderOrder,z:p,group:f},m[t]=g):(g.id=i.id,g.object=i,g.geometry=c,g.material=h,g.groupOrder=v,g.renderOrder=i.renderOrder,g.z=p,g.group=f),t++,g}function a(i,c,h,v,p,f){const g=r(i,c,h,v,p,f);h.transmission>0?n.push(g):h.transparent===!0?l.push(g):e.push(g)}function u(i,c,h,v,p,f){const g=r(i,c,h,v,p,f);h.transmission>0?n.unshift(g):h.transparent===!0?l.unshift(g):e.unshift(g)}function d(i,c){e.length>1&&e.sort(i||Md),n.length>1&&n.sort(c||ia),l.length>1&&l.sort(c||ia)}function o(){for(let i=t,c=m.length;i<c;i++){const h=m[i];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:e,transmissive:n,transparent:l,init:s,push:a,unshift:u,finish:o,sort:d}}function wd(){let m=new WeakMap;function t(n,l){const s=m.get(n);let r;return s===void 0?(r=new ra,m.set(n,[r])):l>=s.length?(r=new ra,s.push(r)):r=s[l],r}function e(){m=new WeakMap}return{get:t,dispose:e}}function Sd(){const m={};return{get:function(t){if(m[t.id]!==void 0)return m[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new it,color:new ae};break;case"SpotLight":e={position:new it,direction:new it,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new it,color:new ae,distance:0,decay:0};break;case"HemisphereLight":e={direction:new it,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":e={color:new ae,position:new it,halfWidth:new it,halfHeight:new it};break}return m[t.id]=e,e}}}function Ed(){const m={};return{get:function(t){if(m[t.id]!==void 0)return m[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return m[t.id]=e,e}}}let Td=0;function Ad(m,t){return(t.castShadow?2:0)-(m.castShadow?2:0)+(t.map?1:0)-(m.map?1:0)}function Cd(m,t){const e=new Sd,n=Ed(),l={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let o=0;o<9;o++)l.probe.push(new it);const s=new it,r=new Ae,a=new Ae;function u(o,i){let c=0,h=0,v=0;for(let F=0;F<9;F++)l.probe[F].set(0,0,0);let p=0,f=0,g=0,y=0,_=0,x=0,w=0,I=0,V=0,b=0;o.sort(Ad);const T=i===!0?Math.PI:1;for(let F=0,W=o.length;F<W;F++){const z=o[F],U=z.color,K=z.intensity,tt=z.distance,k=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)c+=U.r*K*T,h+=U.g*K*T,v+=U.b*K*T;else if(z.isLightProbe)for(let B=0;B<9;B++)l.probe[B].addScaledVector(z.sh.coefficients[B],K);else if(z.isDirectionalLight){const B=e.get(z);if(B.color.copy(z.color).multiplyScalar(z.intensity*T),z.castShadow){const Z=z.shadow,X=n.get(z);X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,l.directionalShadow[p]=X,l.directionalShadowMap[p]=k,l.directionalShadowMatrix[p]=z.shadow.matrix,x++}l.directional[p]=B,p++}else if(z.isSpotLight){const B=e.get(z);B.position.setFromMatrixPosition(z.matrixWorld),B.color.copy(U).multiplyScalar(K*T),B.distance=tt,B.coneCos=Math.cos(z.angle),B.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),B.decay=z.decay,l.spot[g]=B;const Z=z.shadow;if(z.map&&(l.spotLightMap[V]=z.map,V++,Z.updateMatrices(z),z.castShadow&&b++),l.spotLightMatrix[g]=Z.matrix,z.castShadow){const X=n.get(z);X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,l.spotShadow[g]=X,l.spotShadowMap[g]=k,I++}g++}else if(z.isRectAreaLight){const B=e.get(z);B.color.copy(U).multiplyScalar(K),B.halfWidth.set(z.width*.5,0,0),B.halfHeight.set(0,z.height*.5,0),l.rectArea[y]=B,y++}else if(z.isPointLight){const B=e.get(z);if(B.color.copy(z.color).multiplyScalar(z.intensity*T),B.distance=z.distance,B.decay=z.decay,z.castShadow){const Z=z.shadow,X=n.get(z);X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,X.shadowCameraNear=Z.camera.near,X.shadowCameraFar=Z.camera.far,l.pointShadow[f]=X,l.pointShadowMap[f]=k,l.pointShadowMatrix[f]=z.shadow.matrix,w++}l.point[f]=B,f++}else if(z.isHemisphereLight){const B=e.get(z);B.skyColor.copy(z.color).multiplyScalar(K*T),B.groundColor.copy(z.groundColor).multiplyScalar(K*T),l.hemi[_]=B,_++}}y>0&&(t.isWebGL2||m.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Lt.LTC_FLOAT_1,l.rectAreaLTC2=Lt.LTC_FLOAT_2):m.has("OES_texture_half_float_linear")===!0?(l.rectAreaLTC1=Lt.LTC_HALF_1,l.rectAreaLTC2=Lt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),l.ambient[0]=c,l.ambient[1]=h,l.ambient[2]=v;const C=l.hash;(C.directionalLength!==p||C.pointLength!==f||C.spotLength!==g||C.rectAreaLength!==y||C.hemiLength!==_||C.numDirectionalShadows!==x||C.numPointShadows!==w||C.numSpotShadows!==I||C.numSpotMaps!==V)&&(l.directional.length=p,l.spot.length=g,l.rectArea.length=y,l.point.length=f,l.hemi.length=_,l.directionalShadow.length=x,l.directionalShadowMap.length=x,l.pointShadow.length=w,l.pointShadowMap.length=w,l.spotShadow.length=I,l.spotShadowMap.length=I,l.directionalShadowMatrix.length=x,l.pointShadowMatrix.length=w,l.spotLightMatrix.length=I+V-b,l.spotLightMap.length=V,l.numSpotLightShadowsWithMaps=b,C.directionalLength=p,C.pointLength=f,C.spotLength=g,C.rectAreaLength=y,C.hemiLength=_,C.numDirectionalShadows=x,C.numPointShadows=w,C.numSpotShadows=I,C.numSpotMaps=V,l.version=Td++)}function d(o,i){let c=0,h=0,v=0,p=0,f=0;const g=i.matrixWorldInverse;for(let y=0,_=o.length;y<_;y++){const x=o[y];if(x.isDirectionalLight){const w=l.directional[c];w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),c++}else if(x.isSpotLight){const w=l.spot[v];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),v++}else if(x.isRectAreaLight){const w=l.rectArea[p];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(g),a.identity(),r.copy(x.matrixWorld),r.premultiply(g),a.extractRotation(r),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),p++}else if(x.isPointLight){const w=l.point[h];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(g),h++}else if(x.isHemisphereLight){const w=l.hemi[f];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(g),f++}}}return{setup:u,setupView:d,state:l}}function sa(m,t){const e=new Cd(m,t),n=[],l=[];function s(){n.length=0,l.length=0}function r(i){n.push(i)}function a(i){l.push(i)}function u(i){e.setup(n,i)}function d(i){e.setupView(n,i)}return{init:s,state:{lightsArray:n,shadowsArray:l,lights:e},setupLights:u,setupLightsView:d,pushLight:r,pushShadow:a}}function Rd(m,t){let e=new WeakMap;function n(s,r=0){const a=e.get(s);let u;return a===void 0?(u=new sa(m,t),e.set(s,[u])):r>=a.length?(u=new sa(m,t),a.push(u)):u=a[r],u}function l(){e=new WeakMap}return{get:n,dispose:l}}class Ld extends Ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Io,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Pd extends Ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new it,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Dd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Id=`uniform sampler2D shadow_pass;
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
}`;function Bd(m,t,e){let n=new La;const l=new le,s=new le,r=new Te,a=new Ld({depthPacking:Bo}),u=new Pd,d={},o=e.maxTextureSize,i={[Mn]:Ge,[Ge]:Mn,[yn]:yn},c=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:Dd,fragmentShader:Id}),h=c.clone();h.defines.HORIZONTAL_PASS=1;const v=new pn;v.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Qe(v,c),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ua,this.render=function(x,w,I){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||x.length===0)return;const V=m.getRenderTarget(),b=m.getActiveCubeFace(),T=m.getActiveMipmapLevel(),C=m.state;C.setBlending(bn),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);for(let F=0,W=x.length;F<W;F++){const z=x[F],U=z.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;l.copy(U.mapSize);const K=U.getFrameExtents();if(l.multiply(K),s.copy(U.mapSize),(l.x>o||l.y>o)&&(l.x>o&&(s.x=Math.floor(o/K.x),l.x=s.x*K.x,U.mapSize.x=s.x),l.y>o&&(s.y=Math.floor(o/K.y),l.y=s.y*K.y,U.mapSize.y=s.y)),U.map===null){const k=this.type!==vi?{minFilter:Ie,magFilter:Ie}:{};U.map=new zn(l.x,l.y,k),U.map.texture.name=z.name+".shadowMap",U.camera.updateProjectionMatrix()}m.setRenderTarget(U.map),m.clear();const tt=U.getViewportCount();for(let k=0;k<tt;k++){const B=U.getViewport(k);r.set(s.x*B.x,s.y*B.y,s.x*B.z,s.y*B.w),C.viewport(r),U.updateMatrices(z,k),n=U.getFrustum(),_(w,I,U.camera,z,this.type)}U.isPointLightShadow!==!0&&this.type===vi&&g(U,I),U.needsUpdate=!1}f.needsUpdate=!1,m.setRenderTarget(V,b,T)};function g(x,w){const I=t.update(p);c.defines.VSM_SAMPLES!==x.blurSamples&&(c.defines.VSM_SAMPLES=x.blurSamples,h.defines.VSM_SAMPLES=x.blurSamples,c.needsUpdate=!0,h.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new zn(l.x,l.y)),c.uniforms.shadow_pass.value=x.map.texture,c.uniforms.resolution.value=x.mapSize,c.uniforms.radius.value=x.radius,m.setRenderTarget(x.mapPass),m.clear(),m.renderBufferDirect(w,null,I,c,p,null),h.uniforms.shadow_pass.value=x.mapPass.texture,h.uniforms.resolution.value=x.mapSize,h.uniforms.radius.value=x.radius,m.setRenderTarget(x.map),m.clear(),m.renderBufferDirect(w,null,I,h,p,null)}function y(x,w,I,V,b,T){let C=null;const F=I.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(F!==void 0)C=F;else if(C=I.isPointLight===!0?u:a,m.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const W=C.uuid,z=w.uuid;let U=d[W];U===void 0&&(U={},d[W]=U);let K=U[z];K===void 0&&(K=C.clone(),U[z]=K),C=K}return C.visible=w.visible,C.wireframe=w.wireframe,T===vi?C.side=w.shadowSide!==null?w.shadowSide:w.side:C.side=w.shadowSide!==null?w.shadowSide:i[w.side],C.alphaMap=w.alphaMap,C.alphaTest=w.alphaTest,C.map=w.map,C.clipShadows=w.clipShadows,C.clippingPlanes=w.clippingPlanes,C.clipIntersection=w.clipIntersection,C.displacementMap=w.displacementMap,C.displacementScale=w.displacementScale,C.displacementBias=w.displacementBias,C.wireframeLinewidth=w.wireframeLinewidth,C.linewidth=w.linewidth,I.isPointLight===!0&&C.isMeshDistanceMaterial===!0&&(C.referencePosition.setFromMatrixPosition(I.matrixWorld),C.nearDistance=V,C.farDistance=b),C}function _(x,w,I,V,b){if(x.visible===!1)return;if(x.layers.test(w.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&b===vi)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,x.matrixWorld);const F=t.update(x),W=x.material;if(Array.isArray(W)){const z=F.groups;for(let U=0,K=z.length;U<K;U++){const tt=z[U],k=W[tt.materialIndex];if(k&&k.visible){const B=y(x,k,V,I.near,I.far,b);m.renderBufferDirect(I,null,F,B,x,tt)}}}else if(W.visible){const z=y(x,W,V,I.near,I.far,b);m.renderBufferDirect(I,null,F,z,x,null)}}const C=x.children;for(let F=0,W=C.length;F<W;F++)_(C[F],w,I,V,b)}}function Fd(m,t,e){const n=e.isWebGL2;function l(){let j=!1;const st=new Te;let yt=null;const Tt=new Te(0,0,0,0);return{setMask:function(Ft){yt!==Ft&&!j&&(m.colorMask(Ft,Ft,Ft,Ft),yt=Ft)},setLocked:function(Ft){j=Ft},setClear:function(Ft,ee,oe,de,we){we===!0&&(Ft*=de,ee*=de,oe*=de),st.set(Ft,ee,oe,de),Tt.equals(st)===!1&&(m.clearColor(Ft,ee,oe,de),Tt.copy(st))},reset:function(){j=!1,yt=null,Tt.set(-1,0,0,0)}}}function s(){let j=!1,st=null,yt=null,Tt=null;return{setTest:function(Ft){Ft?J(2929):$(2929)},setMask:function(Ft){st!==Ft&&!j&&(m.depthMask(Ft),st=Ft)},setFunc:function(Ft){if(yt!==Ft){switch(Ft){case no:m.depthFunc(512);break;case io:m.depthFunc(519);break;case ro:m.depthFunc(513);break;case Fr:m.depthFunc(515);break;case so:m.depthFunc(514);break;case ao:m.depthFunc(518);break;case oo:m.depthFunc(516);break;case lo:m.depthFunc(517);break;default:m.depthFunc(515)}yt=Ft}},setLocked:function(Ft){j=Ft},setClear:function(Ft){Tt!==Ft&&(m.clearDepth(Ft),Tt=Ft)},reset:function(){j=!1,st=null,yt=null,Tt=null}}}function r(){let j=!1,st=null,yt=null,Tt=null,Ft=null,ee=null,oe=null,de=null,we=null;return{setTest:function(Jt){j||(Jt?J(2960):$(2960))},setMask:function(Jt){st!==Jt&&!j&&(m.stencilMask(Jt),st=Jt)},setFunc:function(Jt,nt,at){(yt!==Jt||Tt!==nt||Ft!==at)&&(m.stencilFunc(Jt,nt,at),yt=Jt,Tt=nt,Ft=at)},setOp:function(Jt,nt,at){(ee!==Jt||oe!==nt||de!==at)&&(m.stencilOp(Jt,nt,at),ee=Jt,oe=nt,de=at)},setLocked:function(Jt){j=Jt},setClear:function(Jt){we!==Jt&&(m.clearStencil(Jt),we=Jt)},reset:function(){j=!1,st=null,yt=null,Tt=null,Ft=null,ee=null,oe=null,de=null,we=null}}}const a=new l,u=new s,d=new r,o=new WeakMap,i=new WeakMap;let c={},h={},v=new WeakMap,p=[],f=null,g=!1,y=null,_=null,x=null,w=null,I=null,V=null,b=null,T=!1,C=null,F=null,W=null,z=null,U=null;const K=m.getParameter(35661);let tt=!1,k=0;const B=m.getParameter(7938);B.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(B)[1]),tt=k>=1):B.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),tt=k>=2);let Z=null,X={};const N=m.getParameter(3088),D=m.getParameter(2978),R=new Te().fromArray(N),L=new Te().fromArray(D);function M(j,st,yt){const Tt=new Uint8Array(4),Ft=m.createTexture();m.bindTexture(j,Ft),m.texParameteri(j,10241,9728),m.texParameteri(j,10240,9728);for(let ee=0;ee<yt;ee++)m.texImage2D(st+ee,0,6408,1,1,0,6408,5121,Tt);return Ft}const G={};G[3553]=M(3553,3553,1),G[34067]=M(34067,34069,6),a.setClear(0,0,0,1),u.setClear(1),d.setClear(0),J(2929),u.setFunc(Fr),vt(!1),Ht(Kr),J(2884),Et(bn);function J(j){c[j]!==!0&&(m.enable(j),c[j]=!0)}function $(j){c[j]!==!1&&(m.disable(j),c[j]=!1)}function H(j,st){return h[j]!==st?(m.bindFramebuffer(j,st),h[j]=st,n&&(j===36009&&(h[36160]=st),j===36160&&(h[36009]=st)),!0):!1}function Q(j,st){let yt=p,Tt=!1;if(j)if(yt=v.get(st),yt===void 0&&(yt=[],v.set(st,yt)),j.isWebGLMultipleRenderTargets){const Ft=j.texture;if(yt.length!==Ft.length||yt[0]!==36064){for(let ee=0,oe=Ft.length;ee<oe;ee++)yt[ee]=36064+ee;yt.length=Ft.length,Tt=!0}}else yt[0]!==36064&&(yt[0]=36064,Tt=!0);else yt[0]!==1029&&(yt[0]=1029,Tt=!0);Tt&&(e.isWebGL2?m.drawBuffers(yt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(yt))}function rt(j){return f!==j?(m.useProgram(j),f=j,!0):!1}const wt={[$n]:32774,[qa]:32778,[Xa]:32779};if(n)wt[$r]=32775,wt[Jr]=32776;else{const j=t.get("EXT_blend_minmax");j!==null&&(wt[$r]=j.MIN_EXT,wt[Jr]=j.MAX_EXT)}const bt={[Ka]:0,[Ya]:1,[ja]:768,[ha]:770,[eo]:776,[Qa]:774,[$a]:772,[Za]:769,[da]:771,[to]:775,[Ja]:773};function Et(j,st,yt,Tt,Ft,ee,oe,de){if(j===bn){g===!0&&($(3042),g=!1);return}if(g===!1&&(J(3042),g=!0),j!==Ha){if(j!==y||de!==T){if((_!==$n||I!==$n)&&(m.blendEquation(32774),_=$n,I=$n),de)switch(j){case Qn:m.blendFuncSeparate(1,771,1,771);break;case Yr:m.blendFunc(1,1);break;case jr:m.blendFuncSeparate(0,769,0,1);break;case Zr:m.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case Qn:m.blendFuncSeparate(770,771,1,771);break;case Yr:m.blendFunc(770,1);break;case jr:m.blendFuncSeparate(0,769,0,1);break;case Zr:m.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}x=null,w=null,V=null,b=null,y=j,T=de}return}Ft=Ft||st,ee=ee||yt,oe=oe||Tt,(st!==_||Ft!==I)&&(m.blendEquationSeparate(wt[st],wt[Ft]),_=st,I=Ft),(yt!==x||Tt!==w||ee!==V||oe!==b)&&(m.blendFuncSeparate(bt[yt],bt[Tt],bt[ee],bt[oe]),x=yt,w=Tt,V=ee,b=oe),y=j,T=!1}function ct(j,st){j.side===yn?$(2884):J(2884);let yt=j.side===Ge;st&&(yt=!yt),vt(yt),j.blending===Qn&&j.transparent===!1?Et(bn):Et(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.premultipliedAlpha),u.setFunc(j.depthFunc),u.setTest(j.depthTest),u.setMask(j.depthWrite),a.setMask(j.colorWrite);const Tt=j.stencilWrite;d.setTest(Tt),Tt&&(d.setMask(j.stencilWriteMask),d.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),d.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),qt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?J(32926):$(32926)}function vt(j){C!==j&&(j?m.frontFace(2304):m.frontFace(2305),C=j)}function Ht(j){j!==Wa?(J(2884),j!==F&&(j===Kr?m.cullFace(1029):j===ka?m.cullFace(1028):m.cullFace(1032))):$(2884),F=j}function Pt(j){j!==W&&(tt&&m.lineWidth(j),W=j)}function qt(j,st,yt){j?(J(32823),(z!==st||U!==yt)&&(m.polygonOffset(st,yt),z=st,U=yt)):$(32823)}function Rt(j){j?J(3089):$(3089)}function jt(j){j===void 0&&(j=33984+K-1),Z!==j&&(m.activeTexture(j),Z=j)}function P(j,st,yt){yt===void 0&&(Z===null?yt=33984+K-1:yt=Z);let Tt=X[yt];Tt===void 0&&(Tt={type:void 0,texture:void 0},X[yt]=Tt),(Tt.type!==j||Tt.texture!==st)&&(Z!==yt&&(m.activeTexture(yt),Z=yt),m.bindTexture(j,st||G[j]),Tt.type=j,Tt.texture=st)}function E(){const j=X[Z];j!==void 0&&j.type!==void 0&&(m.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function et(){try{m.compressedTexImage2D.apply(m,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ft(){try{m.compressedTexImage3D.apply(m,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function gt(){try{m.texSubImage2D.apply(m,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Mt(){try{m.texSubImage3D.apply(m,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Dt(){try{m.compressedTexSubImage2D.apply(m,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function At(){try{m.compressedTexSubImage3D.apply(m,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ht(){try{m.texStorage2D.apply(m,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Wt(){try{m.texStorage3D.apply(m,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Bt(){try{m.texImage2D.apply(m,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ot(){try{m.texImage3D.apply(m,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Nt(j){R.equals(j)===!1&&(m.scissor(j.x,j.y,j.z,j.w),R.copy(j))}function Ut(j){L.equals(j)===!1&&(m.viewport(j.x,j.y,j.z,j.w),L.copy(j))}function $t(j,st){let yt=i.get(st);yt===void 0&&(yt=new WeakMap,i.set(st,yt));let Tt=yt.get(j);Tt===void 0&&(Tt=m.getUniformBlockIndex(st,j.name),yt.set(j,Tt))}function te(j,st){const Tt=i.get(st).get(j);o.get(st)!==Tt&&(m.uniformBlockBinding(st,Tt,j.__bindingPointIndex),o.set(st,Tt))}function ie(){m.disable(3042),m.disable(2884),m.disable(2929),m.disable(32823),m.disable(3089),m.disable(2960),m.disable(32926),m.blendEquation(32774),m.blendFunc(1,0),m.blendFuncSeparate(1,0,1,0),m.colorMask(!0,!0,!0,!0),m.clearColor(0,0,0,0),m.depthMask(!0),m.depthFunc(513),m.clearDepth(1),m.stencilMask(4294967295),m.stencilFunc(519,0,4294967295),m.stencilOp(7680,7680,7680),m.clearStencil(0),m.cullFace(1029),m.frontFace(2305),m.polygonOffset(0,0),m.activeTexture(33984),m.bindFramebuffer(36160,null),n===!0&&(m.bindFramebuffer(36009,null),m.bindFramebuffer(36008,null)),m.useProgram(null),m.lineWidth(1),m.scissor(0,0,m.canvas.width,m.canvas.height),m.viewport(0,0,m.canvas.width,m.canvas.height),c={},Z=null,X={},h={},v=new WeakMap,p=[],f=null,g=!1,y=null,_=null,x=null,w=null,I=null,V=null,b=null,T=!1,C=null,F=null,W=null,z=null,U=null,R.set(0,0,m.canvas.width,m.canvas.height),L.set(0,0,m.canvas.width,m.canvas.height),a.reset(),u.reset(),d.reset()}return{buffers:{color:a,depth:u,stencil:d},enable:J,disable:$,bindFramebuffer:H,drawBuffers:Q,useProgram:rt,setBlending:Et,setMaterial:ct,setFlipSided:vt,setCullFace:Ht,setLineWidth:Pt,setPolygonOffset:qt,setScissorTest:Rt,activeTexture:jt,bindTexture:P,unbindTexture:E,compressedTexImage2D:et,compressedTexImage3D:ft,texImage2D:Bt,texImage3D:Ot,updateUBOMapping:$t,uniformBlockBinding:te,texStorage2D:ht,texStorage3D:Wt,texSubImage2D:gt,texSubImage3D:Mt,compressedTexSubImage2D:Dt,compressedTexSubImage3D:At,scissor:Nt,viewport:Ut,reset:ie}}function zd(m,t,e,n,l,s,r){const a=l.isWebGL2,u=l.maxTextures,d=l.maxCubemapSize,o=l.maxTextureSize,i=l.maxSamples,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let p;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(P,E){return g?new OffscreenCanvas(P,E):bi("canvas")}function _(P,E,et,ft){let gt=1;if((P.width>ft||P.height>ft)&&(gt=ft/Math.max(P.width,P.height)),gt<1||E===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const Mt=E?Uo:Math.floor,Dt=Mt(gt*P.width),At=Mt(gt*P.height);p===void 0&&(p=y(Dt,At));const ht=et?y(Dt,At):p;return ht.width=Dt,ht.height=At,ht.getContext("2d").drawImage(P,0,0,Dt,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Dt+"x"+At+")."),ht}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function x(P){return Ts(P.width)&&Ts(P.height)}function w(P){return a?!1:P.wrapS!==$e||P.wrapT!==$e||P.minFilter!==Ie&&P.minFilter!==Xe}function I(P,E){return P.generateMipmaps&&E&&P.minFilter!==Ie&&P.minFilter!==Xe}function V(P){m.generateMipmap(P)}function b(P,E,et,ft,gt=!1){if(a===!1)return E;if(P!==null){if(m[P]!==void 0)return m[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Mt=E;return E===6403&&(et===5126&&(Mt=33326),et===5131&&(Mt=33325),et===5121&&(Mt=33321)),E===33319&&(et===5126&&(Mt=33328),et===5131&&(Mt=33327),et===5121&&(Mt=33323)),E===6408&&(et===5126&&(Mt=34836),et===5131&&(Mt=34842),et===5121&&(Mt=ft===ce&&gt===!1?35907:32856),et===32819&&(Mt=32854),et===32820&&(Mt=32855)),(Mt===33325||Mt===33326||Mt===33327||Mt===33328||Mt===34842||Mt===34836)&&t.get("EXT_color_buffer_float"),Mt}function T(P,E,et){return I(P,et)===!0||P.isFramebufferTexture&&P.minFilter!==Ie&&P.minFilter!==Xe?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function C(P){return P===Ie||P===Qr||P===tr?9728:9729}function F(P){const E=P.target;E.removeEventListener("dispose",F),z(E),E.isVideoTexture&&v.delete(E)}function W(P){const E=P.target;E.removeEventListener("dispose",W),K(E)}function z(P){const E=n.get(P);if(E.__webglInit===void 0)return;const et=P.source,ft=f.get(et);if(ft){const gt=ft[E.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&U(P),Object.keys(ft).length===0&&f.delete(et)}n.remove(P)}function U(P){const E=n.get(P);m.deleteTexture(E.__webglTexture);const et=P.source,ft=f.get(et);delete ft[E.__cacheKey],r.memory.textures--}function K(P){const E=P.texture,et=n.get(P),ft=n.get(E);if(ft.__webglTexture!==void 0&&(m.deleteTexture(ft.__webglTexture),r.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++)m.deleteFramebuffer(et.__webglFramebuffer[gt]),et.__webglDepthbuffer&&m.deleteRenderbuffer(et.__webglDepthbuffer[gt]);else{if(m.deleteFramebuffer(et.__webglFramebuffer),et.__webglDepthbuffer&&m.deleteRenderbuffer(et.__webglDepthbuffer),et.__webglMultisampledFramebuffer&&m.deleteFramebuffer(et.__webglMultisampledFramebuffer),et.__webglColorRenderbuffer)for(let gt=0;gt<et.__webglColorRenderbuffer.length;gt++)et.__webglColorRenderbuffer[gt]&&m.deleteRenderbuffer(et.__webglColorRenderbuffer[gt]);et.__webglDepthRenderbuffer&&m.deleteRenderbuffer(et.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let gt=0,Mt=E.length;gt<Mt;gt++){const Dt=n.get(E[gt]);Dt.__webglTexture&&(m.deleteTexture(Dt.__webglTexture),r.memory.textures--),n.remove(E[gt])}n.remove(E),n.remove(P)}let tt=0;function k(){tt=0}function B(){const P=tt;return P>=u&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+u),tt+=1,P}function Z(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.encoding),E.join()}function X(P,E){const et=n.get(P);if(P.isVideoTexture&&Rt(P),P.isRenderTargetTexture===!1&&P.version>0&&et.__version!==P.version){const ft=P.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(et,P,E);return}}e.bindTexture(3553,et.__webglTexture,33984+E)}function N(P,E){const et=n.get(P);if(P.version>0&&et.__version!==P.version){$(et,P,E);return}e.bindTexture(35866,et.__webglTexture,33984+E)}function D(P,E){const et=n.get(P);if(P.version>0&&et.__version!==P.version){$(et,P,E);return}e.bindTexture(32879,et.__webglTexture,33984+E)}function R(P,E){const et=n.get(P);if(P.version>0&&et.__version!==P.version){H(et,P,E);return}e.bindTexture(34067,et.__webglTexture,33984+E)}const L={[ji]:10497,[$e]:33071,[Ur]:33648},M={[Ie]:9728,[Qr]:9984,[tr]:9986,[Xe]:9729,[go]:9985,[xi]:9987};function G(P,E,et){if(et?(m.texParameteri(P,10242,L[E.wrapS]),m.texParameteri(P,10243,L[E.wrapT]),(P===32879||P===35866)&&m.texParameteri(P,32882,L[E.wrapR]),m.texParameteri(P,10240,M[E.magFilter]),m.texParameteri(P,10241,M[E.minFilter])):(m.texParameteri(P,10242,33071),m.texParameteri(P,10243,33071),(P===32879||P===35866)&&m.texParameteri(P,32882,33071),(E.wrapS!==$e||E.wrapT!==$e)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),m.texParameteri(P,10240,C(E.magFilter)),m.texParameteri(P,10241,C(E.minFilter)),E.minFilter!==Ie&&E.minFilter!==Xe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const ft=t.get("EXT_texture_filter_anisotropic");if(E.magFilter===Ie||E.minFilter!==tr&&E.minFilter!==xi||E.type===Dn&&t.has("OES_texture_float_linear")===!1||a===!1&&E.type===yi&&t.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(m.texParameterf(P,ft.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function J(P,E){let et=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",F));const ft=E.source;let gt=f.get(ft);gt===void 0&&(gt={},f.set(ft,gt));const Mt=Z(E);if(Mt!==P.__cacheKey){gt[Mt]===void 0&&(gt[Mt]={texture:m.createTexture(),usedTimes:0},r.memory.textures++,et=!0),gt[Mt].usedTimes++;const Dt=gt[P.__cacheKey];Dt!==void 0&&(gt[P.__cacheKey].usedTimes--,Dt.usedTimes===0&&U(E)),P.__cacheKey=Mt,P.__webglTexture=gt[Mt].texture}return et}function $(P,E,et){let ft=3553;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ft=35866),E.isData3DTexture&&(ft=32879);const gt=J(P,E),Mt=E.source;e.bindTexture(ft,P.__webglTexture,33984+et);const Dt=n.get(Mt);if(Mt.version!==Dt.__version||gt===!0){e.activeTexture(33984+et),m.pixelStorei(37440,E.flipY),m.pixelStorei(37441,E.premultiplyAlpha),m.pixelStorei(3317,E.unpackAlignment),m.pixelStorei(37443,0);const At=w(E)&&x(E.image)===!1;let ht=_(E.image,At,!1,o);ht=jt(E,ht);const Wt=x(ht)||a,Bt=s.convert(E.format,E.encoding);let Ot=s.convert(E.type),Nt=b(E.internalFormat,Bt,Ot,E.encoding,E.isVideoTexture);G(ft,E,Wt);let Ut;const $t=E.mipmaps,te=a&&E.isVideoTexture!==!0,ie=Dt.__version===void 0||gt===!0,j=T(E,ht,Wt);if(E.isDepthTexture)Nt=6402,a?E.type===Dn?Nt=36012:E.type===Pn?Nt=33190:E.type===ti?Nt=35056:Nt=33189:E.type===Dn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===In&&Nt===6402&&E.type!==ma&&E.type!==Pn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Pn,Ot=s.convert(E.type)),E.format===ri&&Nt===6402&&(Nt=34041,E.type!==ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=ti,Ot=s.convert(E.type))),ie&&(te?e.texStorage2D(3553,1,Nt,ht.width,ht.height):e.texImage2D(3553,0,Nt,ht.width,ht.height,0,Bt,Ot,null));else if(E.isDataTexture)if($t.length>0&&Wt){te&&ie&&e.texStorage2D(3553,j,Nt,$t[0].width,$t[0].height);for(let st=0,yt=$t.length;st<yt;st++)Ut=$t[st],te?e.texSubImage2D(3553,st,0,0,Ut.width,Ut.height,Bt,Ot,Ut.data):e.texImage2D(3553,st,Nt,Ut.width,Ut.height,0,Bt,Ot,Ut.data);E.generateMipmaps=!1}else te?(ie&&e.texStorage2D(3553,j,Nt,ht.width,ht.height),e.texSubImage2D(3553,0,0,0,ht.width,ht.height,Bt,Ot,ht.data)):e.texImage2D(3553,0,Nt,ht.width,ht.height,0,Bt,Ot,ht.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){te&&ie&&e.texStorage3D(35866,j,Nt,$t[0].width,$t[0].height,ht.depth);for(let st=0,yt=$t.length;st<yt;st++)Ut=$t[st],E.format!==Je?Bt!==null?te?e.compressedTexSubImage3D(35866,st,0,0,0,Ut.width,Ut.height,ht.depth,Bt,Ut.data,0,0):e.compressedTexImage3D(35866,st,Nt,Ut.width,Ut.height,ht.depth,0,Ut.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?e.texSubImage3D(35866,st,0,0,0,Ut.width,Ut.height,ht.depth,Bt,Ot,Ut.data):e.texImage3D(35866,st,Nt,Ut.width,Ut.height,ht.depth,0,Bt,Ot,Ut.data)}else{te&&ie&&e.texStorage2D(3553,j,Nt,$t[0].width,$t[0].height);for(let st=0,yt=$t.length;st<yt;st++)Ut=$t[st],E.format!==Je?Bt!==null?te?e.compressedTexSubImage2D(3553,st,0,0,Ut.width,Ut.height,Bt,Ut.data):e.compressedTexImage2D(3553,st,Nt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?e.texSubImage2D(3553,st,0,0,Ut.width,Ut.height,Bt,Ot,Ut.data):e.texImage2D(3553,st,Nt,Ut.width,Ut.height,0,Bt,Ot,Ut.data)}else if(E.isDataArrayTexture)te?(ie&&e.texStorage3D(35866,j,Nt,ht.width,ht.height,ht.depth),e.texSubImage3D(35866,0,0,0,0,ht.width,ht.height,ht.depth,Bt,Ot,ht.data)):e.texImage3D(35866,0,Nt,ht.width,ht.height,ht.depth,0,Bt,Ot,ht.data);else if(E.isData3DTexture)te?(ie&&e.texStorage3D(32879,j,Nt,ht.width,ht.height,ht.depth),e.texSubImage3D(32879,0,0,0,0,ht.width,ht.height,ht.depth,Bt,Ot,ht.data)):e.texImage3D(32879,0,Nt,ht.width,ht.height,ht.depth,0,Bt,Ot,ht.data);else if(E.isFramebufferTexture){if(ie)if(te)e.texStorage2D(3553,j,Nt,ht.width,ht.height);else{let st=ht.width,yt=ht.height;for(let Tt=0;Tt<j;Tt++)e.texImage2D(3553,Tt,Nt,st,yt,0,Bt,Ot,null),st>>=1,yt>>=1}}else if($t.length>0&&Wt){te&&ie&&e.texStorage2D(3553,j,Nt,$t[0].width,$t[0].height);for(let st=0,yt=$t.length;st<yt;st++)Ut=$t[st],te?e.texSubImage2D(3553,st,0,0,Bt,Ot,Ut):e.texImage2D(3553,st,Nt,Bt,Ot,Ut);E.generateMipmaps=!1}else te?(ie&&e.texStorage2D(3553,j,Nt,ht.width,ht.height),e.texSubImage2D(3553,0,0,0,Bt,Ot,ht)):e.texImage2D(3553,0,Nt,Bt,Ot,ht);I(E,Wt)&&V(ft),Dt.__version=Mt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function H(P,E,et){if(E.image.length!==6)return;const ft=J(P,E),gt=E.source;e.bindTexture(34067,P.__webglTexture,33984+et);const Mt=n.get(gt);if(gt.version!==Mt.__version||ft===!0){e.activeTexture(33984+et),m.pixelStorei(37440,E.flipY),m.pixelStorei(37441,E.premultiplyAlpha),m.pixelStorei(3317,E.unpackAlignment),m.pixelStorei(37443,0);const Dt=E.isCompressedTexture||E.image[0].isCompressedTexture,At=E.image[0]&&E.image[0].isDataTexture,ht=[];for(let st=0;st<6;st++)!Dt&&!At?ht[st]=_(E.image[st],!1,!0,d):ht[st]=At?E.image[st].image:E.image[st],ht[st]=jt(E,ht[st]);const Wt=ht[0],Bt=x(Wt)||a,Ot=s.convert(E.format,E.encoding),Nt=s.convert(E.type),Ut=b(E.internalFormat,Ot,Nt,E.encoding),$t=a&&E.isVideoTexture!==!0,te=Mt.__version===void 0||ft===!0;let ie=T(E,Wt,Bt);G(34067,E,Bt);let j;if(Dt){$t&&te&&e.texStorage2D(34067,ie,Ut,Wt.width,Wt.height);for(let st=0;st<6;st++){j=ht[st].mipmaps;for(let yt=0;yt<j.length;yt++){const Tt=j[yt];E.format!==Je?Ot!==null?$t?e.compressedTexSubImage2D(34069+st,yt,0,0,Tt.width,Tt.height,Ot,Tt.data):e.compressedTexImage2D(34069+st,yt,Ut,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?e.texSubImage2D(34069+st,yt,0,0,Tt.width,Tt.height,Ot,Nt,Tt.data):e.texImage2D(34069+st,yt,Ut,Tt.width,Tt.height,0,Ot,Nt,Tt.data)}}}else{j=E.mipmaps,$t&&te&&(j.length>0&&ie++,e.texStorage2D(34067,ie,Ut,ht[0].width,ht[0].height));for(let st=0;st<6;st++)if(At){$t?e.texSubImage2D(34069+st,0,0,0,ht[st].width,ht[st].height,Ot,Nt,ht[st].data):e.texImage2D(34069+st,0,Ut,ht[st].width,ht[st].height,0,Ot,Nt,ht[st].data);for(let yt=0;yt<j.length;yt++){const Ft=j[yt].image[st].image;$t?e.texSubImage2D(34069+st,yt+1,0,0,Ft.width,Ft.height,Ot,Nt,Ft.data):e.texImage2D(34069+st,yt+1,Ut,Ft.width,Ft.height,0,Ot,Nt,Ft.data)}}else{$t?e.texSubImage2D(34069+st,0,0,0,Ot,Nt,ht[st]):e.texImage2D(34069+st,0,Ut,Ot,Nt,ht[st]);for(let yt=0;yt<j.length;yt++){const Tt=j[yt];$t?e.texSubImage2D(34069+st,yt+1,0,0,Ot,Nt,Tt.image[st]):e.texImage2D(34069+st,yt+1,Ut,Ot,Nt,Tt.image[st])}}}I(E,Bt)&&V(34067),Mt.__version=gt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Q(P,E,et,ft,gt){const Mt=s.convert(et.format,et.encoding),Dt=s.convert(et.type),At=b(et.internalFormat,Mt,Dt,et.encoding);n.get(E).__hasExternalTextures||(gt===32879||gt===35866?e.texImage3D(gt,0,At,E.width,E.height,E.depth,0,Mt,Dt,null):e.texImage2D(gt,0,At,E.width,E.height,0,Mt,Dt,null)),e.bindFramebuffer(36160,P),qt(E)?c.framebufferTexture2DMultisampleEXT(36160,ft,gt,n.get(et).__webglTexture,0,Pt(E)):(gt===3553||gt>=34069&&gt<=34074)&&m.framebufferTexture2D(36160,ft,gt,n.get(et).__webglTexture,0),e.bindFramebuffer(36160,null)}function rt(P,E,et){if(m.bindRenderbuffer(36161,P),E.depthBuffer&&!E.stencilBuffer){let ft=33189;if(et||qt(E)){const gt=E.depthTexture;gt&&gt.isDepthTexture&&(gt.type===Dn?ft=36012:gt.type===Pn&&(ft=33190));const Mt=Pt(E);qt(E)?c.renderbufferStorageMultisampleEXT(36161,Mt,ft,E.width,E.height):m.renderbufferStorageMultisample(36161,Mt,ft,E.width,E.height)}else m.renderbufferStorage(36161,ft,E.width,E.height);m.framebufferRenderbuffer(36160,36096,36161,P)}else if(E.depthBuffer&&E.stencilBuffer){const ft=Pt(E);et&&qt(E)===!1?m.renderbufferStorageMultisample(36161,ft,35056,E.width,E.height):qt(E)?c.renderbufferStorageMultisampleEXT(36161,ft,35056,E.width,E.height):m.renderbufferStorage(36161,34041,E.width,E.height),m.framebufferRenderbuffer(36160,33306,36161,P)}else{const ft=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let gt=0;gt<ft.length;gt++){const Mt=ft[gt],Dt=s.convert(Mt.format,Mt.encoding),At=s.convert(Mt.type),ht=b(Mt.internalFormat,Dt,At,Mt.encoding),Wt=Pt(E);et&&qt(E)===!1?m.renderbufferStorageMultisample(36161,Wt,ht,E.width,E.height):qt(E)?c.renderbufferStorageMultisampleEXT(36161,Wt,ht,E.width,E.height):m.renderbufferStorage(36161,ht,E.width,E.height)}}m.bindRenderbuffer(36161,null)}function wt(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),X(E.depthTexture,0);const ft=n.get(E.depthTexture).__webglTexture,gt=Pt(E);if(E.depthTexture.format===In)qt(E)?c.framebufferTexture2DMultisampleEXT(36160,36096,3553,ft,0,gt):m.framebufferTexture2D(36160,36096,3553,ft,0);else if(E.depthTexture.format===ri)qt(E)?c.framebufferTexture2DMultisampleEXT(36160,33306,3553,ft,0,gt):m.framebufferTexture2D(36160,33306,3553,ft,0);else throw new Error("Unknown depthTexture format")}function bt(P){const E=n.get(P),et=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");wt(E.__webglFramebuffer,P)}else if(et){E.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)e.bindFramebuffer(36160,E.__webglFramebuffer[ft]),E.__webglDepthbuffer[ft]=m.createRenderbuffer(),rt(E.__webglDepthbuffer[ft],P,!1)}else e.bindFramebuffer(36160,E.__webglFramebuffer),E.__webglDepthbuffer=m.createRenderbuffer(),rt(E.__webglDepthbuffer,P,!1);e.bindFramebuffer(36160,null)}function Et(P,E,et){const ft=n.get(P);E!==void 0&&Q(ft.__webglFramebuffer,P,P.texture,36064,3553),et!==void 0&&bt(P)}function ct(P){const E=P.texture,et=n.get(P),ft=n.get(E);P.addEventListener("dispose",W),P.isWebGLMultipleRenderTargets!==!0&&(ft.__webglTexture===void 0&&(ft.__webglTexture=m.createTexture()),ft.__version=E.version,r.memory.textures++);const gt=P.isWebGLCubeRenderTarget===!0,Mt=P.isWebGLMultipleRenderTargets===!0,Dt=x(P)||a;if(gt){et.__webglFramebuffer=[];for(let At=0;At<6;At++)et.__webglFramebuffer[At]=m.createFramebuffer()}else{if(et.__webglFramebuffer=m.createFramebuffer(),Mt)if(l.drawBuffers){const At=P.texture;for(let ht=0,Wt=At.length;ht<Wt;ht++){const Bt=n.get(At[ht]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=m.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&qt(P)===!1){const At=Mt?E:[E];et.__webglMultisampledFramebuffer=m.createFramebuffer(),et.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,et.__webglMultisampledFramebuffer);for(let ht=0;ht<At.length;ht++){const Wt=At[ht];et.__webglColorRenderbuffer[ht]=m.createRenderbuffer(),m.bindRenderbuffer(36161,et.__webglColorRenderbuffer[ht]);const Bt=s.convert(Wt.format,Wt.encoding),Ot=s.convert(Wt.type),Nt=b(Wt.internalFormat,Bt,Ot,Wt.encoding,P.isXRRenderTarget===!0),Ut=Pt(P);m.renderbufferStorageMultisample(36161,Ut,Nt,P.width,P.height),m.framebufferRenderbuffer(36160,36064+ht,36161,et.__webglColorRenderbuffer[ht])}m.bindRenderbuffer(36161,null),P.depthBuffer&&(et.__webglDepthRenderbuffer=m.createRenderbuffer(),rt(et.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(36160,null)}}if(gt){e.bindTexture(34067,ft.__webglTexture),G(34067,E,Dt);for(let At=0;At<6;At++)Q(et.__webglFramebuffer[At],P,E,36064,34069+At);I(E,Dt)&&V(34067),e.unbindTexture()}else if(Mt){const At=P.texture;for(let ht=0,Wt=At.length;ht<Wt;ht++){const Bt=At[ht],Ot=n.get(Bt);e.bindTexture(3553,Ot.__webglTexture),G(3553,Bt,Dt),Q(et.__webglFramebuffer,P,Bt,36064+ht,3553),I(Bt,Dt)&&V(3553)}e.unbindTexture()}else{let At=3553;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?At=P.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(At,ft.__webglTexture),G(At,E,Dt),Q(et.__webglFramebuffer,P,E,36064,At),I(E,Dt)&&V(At),e.unbindTexture()}P.depthBuffer&&bt(P)}function vt(P){const E=x(P)||a,et=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ft=0,gt=et.length;ft<gt;ft++){const Mt=et[ft];if(I(Mt,E)){const Dt=P.isWebGLCubeRenderTarget?34067:3553,At=n.get(Mt).__webglTexture;e.bindTexture(Dt,At),V(Dt),e.unbindTexture()}}}function Ht(P){if(a&&P.samples>0&&qt(P)===!1){const E=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],et=P.width,ft=P.height;let gt=16384;const Mt=[],Dt=P.stencilBuffer?33306:36096,At=n.get(P),ht=P.isWebGLMultipleRenderTargets===!0;if(ht)for(let Wt=0;Wt<E.length;Wt++)e.bindFramebuffer(36160,At.__webglMultisampledFramebuffer),m.framebufferRenderbuffer(36160,36064+Wt,36161,null),e.bindFramebuffer(36160,At.__webglFramebuffer),m.framebufferTexture2D(36009,36064+Wt,3553,null,0);e.bindFramebuffer(36008,At.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,At.__webglFramebuffer);for(let Wt=0;Wt<E.length;Wt++){Mt.push(36064+Wt),P.depthBuffer&&Mt.push(Dt);const Bt=At.__ignoreDepthValues!==void 0?At.__ignoreDepthValues:!1;if(Bt===!1&&(P.depthBuffer&&(gt|=256),P.stencilBuffer&&(gt|=1024)),ht&&m.framebufferRenderbuffer(36008,36064,36161,At.__webglColorRenderbuffer[Wt]),Bt===!0&&(m.invalidateFramebuffer(36008,[Dt]),m.invalidateFramebuffer(36009,[Dt])),ht){const Ot=n.get(E[Wt]).__webglTexture;m.framebufferTexture2D(36009,36064,3553,Ot,0)}m.blitFramebuffer(0,0,et,ft,0,0,et,ft,gt,9728),h&&m.invalidateFramebuffer(36008,Mt)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),ht)for(let Wt=0;Wt<E.length;Wt++){e.bindFramebuffer(36160,At.__webglMultisampledFramebuffer),m.framebufferRenderbuffer(36160,36064+Wt,36161,At.__webglColorRenderbuffer[Wt]);const Bt=n.get(E[Wt]).__webglTexture;e.bindFramebuffer(36160,At.__webglFramebuffer),m.framebufferTexture2D(36009,36064+Wt,3553,Bt,0)}e.bindFramebuffer(36009,At.__webglMultisampledFramebuffer)}}function Pt(P){return Math.min(i,P.samples)}function qt(P){const E=n.get(P);return a&&P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Rt(P){const E=r.render.frame;v.get(P)!==E&&(v.set(P,E),P.update())}function jt(P,E){const et=P.encoding,ft=P.format,gt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Or||et!==Fn&&(et===ce?a===!1?t.has("EXT_sRGB")===!0&&ft===Je?(P.format=Or,P.minFilter=Xe,P.generateMipmaps=!1):E=ya.sRGBToLinear(E):(ft!==Je||gt!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",et)),E}this.allocateTextureUnit=B,this.resetTextureUnits=k,this.setTexture2D=X,this.setTexture2DArray=N,this.setTexture3D=D,this.setTextureCube=R,this.rebindTextures=Et,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=qt}function Nd(m,t,e){const n=e.isWebGL2;function l(s,r=null){let a;if(s===Bn)return 5121;if(s===bo)return 32819;if(s===Mo)return 32820;if(s===xo)return 5120;if(s===yo)return 5122;if(s===ma)return 5123;if(s===_o)return 5124;if(s===Pn)return 5125;if(s===Dn)return 5126;if(s===yi)return n?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===wo)return 6406;if(s===Je)return 6408;if(s===So)return 6409;if(s===Eo)return 6410;if(s===In)return 6402;if(s===ri)return 34041;if(s===Or)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===To)return 6403;if(s===Ao)return 36244;if(s===Co)return 33319;if(s===Ro)return 33320;if(s===Lo)return 36249;if(s===er||s===nr||s===ir||s===rr)if(r===ce)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===er)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===nr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ir)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===rr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===er)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===nr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ir)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===rr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ts||s===es||s===ns||s===is)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ts)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===es)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ns)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===is)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Po)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===rs||s===ss)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===rs)return r===ce?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ss)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===as||s===os||s===ls||s===cs||s===us||s===hs||s===ds||s===fs||s===ps||s===ms||s===vs||s===gs||s===xs||s===ys)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===as)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===os)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ls)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===cs)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===us)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===hs)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ds)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===fs)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ps)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ms)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===vs)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===gs)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===xs)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ys)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===sr)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===sr)return r===ce?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Do||s===_s||s===bs||s===Ms)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===sr)return a.COMPRESSED_RED_RGTC1_EXT;if(s===_s)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===bs)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ms)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ti?n?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):m[s]!==void 0?m[s]:null}return{convert:l}}class Ud extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class qi extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Od={type:"move"};class Pr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let l=null,s=null,r=null;const a=this._targetRay,u=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){r=!0;for(const p of t.hand.values()){const f=e.getJointPose(p,n),g=this._getHandJoint(d,p);f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=f.radius),g.visible=f!==null}const o=d.joints["index-finger-tip"],i=d.joints["thumb-tip"],c=o.position.distanceTo(i.position),h=.02,v=.005;d.inputState.pinching&&c>h+v?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&c<=h-v&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));a!==null&&(l=e.getPose(t.targetRaySpace,n),l===null&&s!==null&&(l=s),l!==null&&(a.matrix.fromArray(l.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),l.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(l.linearVelocity)):a.hasLinearVelocity=!1,l.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(l.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Od)))}return a!==null&&(a.visible=l!==null),u!==null&&(u.visible=s!==null),d!==null&&(d.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new qi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Vd extends ze{constructor(t,e,n,l,s,r,a,u,d,o){if(o=o!==void 0?o:In,o!==In&&o!==ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&o===In&&(n=Pn),n===void 0&&o===ri&&(n=ti),super(null,l,s,r,a,u,o,n,d),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ie,this.minFilter=u!==void 0?u:Ie,this.flipY=!1,this.generateMipmaps=!1}}class Wd extends ai{constructor(t,e){super();const n=this;let l=null,s=1,r=null,a="local-floor",u=1,d=null,o=null,i=null,c=null,h=null,v=null;const p=e.getContextAttributes();let f=null,g=null;const y=[],_=[],x=new Set,w=new Map,I=new Ke;I.layers.enable(1),I.viewport=new Te;const V=new Ke;V.layers.enable(2),V.viewport=new Te;const b=[I,V],T=new Ud;T.layers.enable(1),T.layers.enable(2);let C=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let R=y[D];return R===void 0&&(R=new Pr,y[D]=R),R.getTargetRaySpace()},this.getControllerGrip=function(D){let R=y[D];return R===void 0&&(R=new Pr,y[D]=R),R.getGripSpace()},this.getHand=function(D){let R=y[D];return R===void 0&&(R=new Pr,y[D]=R),R.getHandSpace()};function W(D){const R=_.indexOf(D.inputSource);if(R===-1)return;const L=y[R];L!==void 0&&L.dispatchEvent({type:D.type,data:D.inputSource})}function z(){l.removeEventListener("select",W),l.removeEventListener("selectstart",W),l.removeEventListener("selectend",W),l.removeEventListener("squeeze",W),l.removeEventListener("squeezestart",W),l.removeEventListener("squeezeend",W),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",U);for(let D=0;D<y.length;D++){const R=_[D];R!==null&&(_[D]=null,y[D].disconnect(R))}C=null,F=null,t.setRenderTarget(f),h=null,c=null,i=null,l=null,g=null,N.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){s=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||r},this.setReferenceSpace=function(D){d=D},this.getBaseLayer=function(){return c!==null?c:h},this.getBinding=function(){return i},this.getFrame=function(){return v},this.getSession=function(){return l},this.setSession=async function(D){if(l=D,l!==null){if(f=t.getRenderTarget(),l.addEventListener("select",W),l.addEventListener("selectstart",W),l.addEventListener("selectend",W),l.addEventListener("squeeze",W),l.addEventListener("squeezestart",W),l.addEventListener("squeezeend",W),l.addEventListener("end",z),l.addEventListener("inputsourceschange",U),p.xrCompatible!==!0&&await e.makeXRCompatible(),l.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const R={antialias:l.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(l,e,R),l.updateRenderState({baseLayer:h}),g=new zn(h.framebufferWidth,h.framebufferHeight,{format:Je,type:Bn,encoding:t.outputEncoding,stencilBuffer:p.stencil})}else{let R=null,L=null,M=null;p.depth&&(M=p.stencil?35056:33190,R=p.stencil?ri:In,L=p.stencil?ti:Pn);const G={colorFormat:32856,depthFormat:M,scaleFactor:s};i=new XRWebGLBinding(l,e),c=i.createProjectionLayer(G),l.updateRenderState({layers:[c]}),g=new zn(c.textureWidth,c.textureHeight,{format:Je,type:Bn,depthTexture:new Vd(c.textureWidth,c.textureHeight,L,void 0,void 0,void 0,void 0,void 0,void 0,R),stencilBuffer:p.stencil,encoding:t.outputEncoding,samples:p.antialias?4:0});const J=t.properties.get(g);J.__ignoreDepthValues=c.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(u),d=null,r=await l.requestReferenceSpace(a),N.setContext(l),N.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function U(D){for(let R=0;R<D.removed.length;R++){const L=D.removed[R],M=_.indexOf(L);M>=0&&(_[M]=null,y[M].disconnect(L))}for(let R=0;R<D.added.length;R++){const L=D.added[R];let M=_.indexOf(L);if(M===-1){for(let J=0;J<y.length;J++)if(J>=_.length){_.push(L),M=J;break}else if(_[J]===null){_[J]=L,M=J;break}if(M===-1)break}const G=y[M];G&&G.connect(L)}}const K=new it,tt=new it;function k(D,R,L){K.setFromMatrixPosition(R.matrixWorld),tt.setFromMatrixPosition(L.matrixWorld);const M=K.distanceTo(tt),G=R.projectionMatrix.elements,J=L.projectionMatrix.elements,$=G[14]/(G[10]-1),H=G[14]/(G[10]+1),Q=(G[9]+1)/G[5],rt=(G[9]-1)/G[5],wt=(G[8]-1)/G[0],bt=(J[8]+1)/J[0],Et=$*wt,ct=$*bt,vt=M/(-wt+bt),Ht=vt*-wt;R.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Ht),D.translateZ(vt),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const Pt=$+vt,qt=H+vt,Rt=Et-Ht,jt=ct+(M-Ht),P=Q*H/qt*Pt,E=rt*H/qt*Pt;D.projectionMatrix.makePerspective(Rt,jt,P,E,Pt,qt)}function B(D,R){R===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(R.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(l===null)return;T.near=V.near=I.near=D.near,T.far=V.far=I.far=D.far,(C!==T.near||F!==T.far)&&(l.updateRenderState({depthNear:T.near,depthFar:T.far}),C=T.near,F=T.far);const R=D.parent,L=T.cameras;B(T,R);for(let G=0;G<L.length;G++)B(L[G],R);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),D.matrix.copy(T.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale);const M=D.children;for(let G=0,J=M.length;G<J;G++)M[G].updateMatrixWorld(!0);L.length===2?k(T,I,V):T.projectionMatrix.copy(I.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(!(c===null&&h===null))return u},this.setFoveation=function(D){u=D,c!==null&&(c.fixedFoveation=D),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=D)},this.getPlanes=function(){return x};let Z=null;function X(D,R){if(o=R.getViewerPose(d||r),v=R,o!==null){const L=o.views;h!==null&&(t.setRenderTargetFramebuffer(g,h.framebuffer),t.setRenderTarget(g));let M=!1;L.length!==T.cameras.length&&(T.cameras.length=0,M=!0);for(let G=0;G<L.length;G++){const J=L[G];let $=null;if(h!==null)$=h.getViewport(J);else{const Q=i.getViewSubImage(c,J);$=Q.viewport,G===0&&(t.setRenderTargetTextures(g,Q.colorTexture,c.ignoreDepthValues?void 0:Q.depthStencilTexture),t.setRenderTarget(g))}let H=b[G];H===void 0&&(H=new Ke,H.layers.enable(G),H.viewport=new Te,b[G]=H),H.matrix.fromArray(J.transform.matrix),H.projectionMatrix.fromArray(J.projectionMatrix),H.viewport.set($.x,$.y,$.width,$.height),G===0&&T.matrix.copy(H.matrix),M===!0&&T.cameras.push(H)}}for(let L=0;L<y.length;L++){const M=_[L],G=y[L];M!==null&&G!==void 0&&G.update(M,R,d||r)}if(Z&&Z(D,R),R.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:R.detectedPlanes});let L=null;for(const M of x)R.detectedPlanes.has(M)||(L===null&&(L=[]),L.push(M));if(L!==null)for(const M of L)x.delete(M),w.delete(M),n.dispatchEvent({type:"planeremoved",data:M});for(const M of R.detectedPlanes)if(!x.has(M))x.add(M),w.set(M,R.lastChangedTime),n.dispatchEvent({type:"planeadded",data:M});else{const G=w.get(M);M.lastChangedTime>G&&(w.set(M,M.lastChangedTime),n.dispatchEvent({type:"planechanged",data:M}))}}v=null}const N=new Pa;N.setAnimationLoop(X),this.setAnimationLoop=function(D){Z=D},this.dispose=function(){}}}function kd(m,t){function e(p,f){f.color.getRGB(p.fogColor.value,Aa(m)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function n(p,f,g,y,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?l(p,f):f.isMeshToonMaterial?(l(p,f),o(p,f)):f.isMeshPhongMaterial?(l(p,f),d(p,f)):f.isMeshStandardMaterial?(l(p,f),i(p,f),f.isMeshPhysicalMaterial&&c(p,f,_)):f.isMeshMatcapMaterial?(l(p,f),h(p,f)):f.isMeshDepthMaterial?l(p,f):f.isMeshDistanceMaterial?(l(p,f),v(p,f)):f.isMeshNormalMaterial?l(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&r(p,f)):f.isPointsMaterial?a(p,f,g,y):f.isSpriteMaterial?u(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function l(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===Ge&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===Ge&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const g=t.get(f).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const x=m.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*x}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let y;f.map?y=f.map:f.specularMap?y=f.specularMap:f.displacementMap?y=f.displacementMap:f.normalMap?y=f.normalMap:f.bumpMap?y=f.bumpMap:f.roughnessMap?y=f.roughnessMap:f.metalnessMap?y=f.metalnessMap:f.alphaMap?y=f.alphaMap:f.emissiveMap?y=f.emissiveMap:f.clearcoatMap?y=f.clearcoatMap:f.clearcoatNormalMap?y=f.clearcoatNormalMap:f.clearcoatRoughnessMap?y=f.clearcoatRoughnessMap:f.iridescenceMap?y=f.iridescenceMap:f.iridescenceThicknessMap?y=f.iridescenceThicknessMap:f.specularIntensityMap?y=f.specularIntensityMap:f.specularColorMap?y=f.specularColorMap:f.transmissionMap?y=f.transmissionMap:f.thicknessMap?y=f.thicknessMap:f.sheenColorMap?y=f.sheenColorMap:f.sheenRoughnessMap&&(y=f.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix));let _;f.aoMap?_=f.aoMap:f.lightMap&&(_=f.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uv2Transform.value.copy(_.matrix))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function r(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function a(p,f,g,y){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*g,p.scale.value=y*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let _;f.map?_=f.map:f.alphaMap&&(_=f.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function u(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let g;f.map?g=f.map:f.alphaMap&&(g=f.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),p.uvTransform.value.copy(g.matrix))}function d(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function o(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function i(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),t.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function c(p,f,g){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===Ge&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function h(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function Gd(m,t,e,n){let l={},s={},r=[];const a=e.isWebGL2?m.getParameter(35375):0;function u(y,_){const x=_.program;n.uniformBlockBinding(y,x)}function d(y,_){let x=l[y.id];x===void 0&&(v(y),x=o(y),l[y.id]=x,y.addEventListener("dispose",f));const w=_.program;n.updateUBOMapping(y,w);const I=t.render.frame;s[y.id]!==I&&(c(y),s[y.id]=I)}function o(y){const _=i();y.__bindingPointIndex=_;const x=m.createBuffer(),w=y.__size,I=y.usage;return m.bindBuffer(35345,x),m.bufferData(35345,w,I),m.bindBuffer(35345,null),m.bindBufferBase(35345,_,x),x}function i(){for(let y=0;y<a;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(y){const _=l[y.id],x=y.uniforms,w=y.__cache;m.bindBuffer(35345,_);for(let I=0,V=x.length;I<V;I++){const b=x[I];if(h(b,I,w)===!0){const T=b.__offset,C=Array.isArray(b.value)?b.value:[b.value];let F=0;for(let W=0;W<C.length;W++){const z=C[W],U=p(z);typeof z=="number"?(b.__data[0]=z,m.bufferSubData(35345,T+F,b.__data)):z.isMatrix3?(b.__data[0]=z.elements[0],b.__data[1]=z.elements[1],b.__data[2]=z.elements[2],b.__data[3]=z.elements[0],b.__data[4]=z.elements[3],b.__data[5]=z.elements[4],b.__data[6]=z.elements[5],b.__data[7]=z.elements[0],b.__data[8]=z.elements[6],b.__data[9]=z.elements[7],b.__data[10]=z.elements[8],b.__data[11]=z.elements[0]):(z.toArray(b.__data,F),F+=U.storage/Float32Array.BYTES_PER_ELEMENT)}m.bufferSubData(35345,T,b.__data)}}m.bindBuffer(35345,null)}function h(y,_,x){const w=y.value;if(x[_]===void 0){if(typeof w=="number")x[_]=w;else{const I=Array.isArray(w)?w:[w],V=[];for(let b=0;b<I.length;b++)V.push(I[b].clone());x[_]=V}return!0}else if(typeof w=="number"){if(x[_]!==w)return x[_]=w,!0}else{const I=Array.isArray(x[_])?x[_]:[x[_]],V=Array.isArray(w)?w:[w];for(let b=0;b<I.length;b++){const T=I[b];if(T.equals(V[b])===!1)return T.copy(V[b]),!0}}return!1}function v(y){const _=y.uniforms;let x=0;const w=16;let I=0;for(let V=0,b=_.length;V<b;V++){const T=_[V],C={boundary:0,storage:0},F=Array.isArray(T.value)?T.value:[T.value];for(let W=0,z=F.length;W<z;W++){const U=F[W],K=p(U);C.boundary+=K.boundary,C.storage+=K.storage}if(T.__data=new Float32Array(C.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=x,V>0){I=x%w;const W=w-I;I!==0&&W-C.boundary<0&&(x+=w-I,T.__offset=x)}x+=C.storage}return I=x%w,I>0&&(x+=w-I),y.__size=x,y.__cache={},this}function p(y){const _={boundary:0,storage:0};return typeof y=="number"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function f(y){const _=y.target;_.removeEventListener("dispose",f);const x=r.indexOf(_.__bindingPointIndex);r.splice(x,1),m.deleteBuffer(l[_.id]),delete l[_.id],delete s[_.id]}function g(){for(const y in l)m.deleteBuffer(l[y]);r=[],l={},s={}}return{bind:u,update:d,dispose:g}}function Hd(){const m=bi("canvas");return m.style.display="block",m}function qr(m={}){this.isWebGLRenderer=!0;const t=m.canvas!==void 0?m.canvas:Hd(),e=m.context!==void 0?m.context:null,n=m.depth!==void 0?m.depth:!0,l=m.stencil!==void 0?m.stencil:!0,s=m.antialias!==void 0?m.antialias:!1,r=m.premultipliedAlpha!==void 0?m.premultipliedAlpha:!0,a=m.preserveDrawingBuffer!==void 0?m.preserveDrawingBuffer:!1,u=m.powerPreference!==void 0?m.powerPreference:"default",d=m.failIfMajorPerformanceCaveat!==void 0?m.failIfMajorPerformanceCaveat:!1;let o;e!==null?o=e.getContextAttributes().alpha:o=m.alpha!==void 0?m.alpha:!1;let i=null,c=null;const h=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Fn,this.useLegacyLights=!0,this.toneMapping=fn,this.toneMappingExposure=1;const p=this;let f=!1,g=0,y=0,_=null,x=-1,w=null;const I=new Te,V=new Te;let b=null,T=t.width,C=t.height,F=1,W=null,z=null;const U=new Te(0,0,T,C),K=new Te(0,0,T,C);let tt=!1;const k=new La;let B=!1,Z=!1,X=null;const N=new Ae,D=new it,R={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function L(){return _===null?F:1}let M=e;function G(S,O){for(let Y=0;Y<S.length;Y++){const A=S[Y],q=t.getContext(A,O);if(q!==null)return q}return null}try{const S={alpha:!0,depth:n,stencil:l,antialias:s,premultipliedAlpha:r,preserveDrawingBuffer:a,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kr}`),t.addEventListener("webglcontextlost",Ot,!1),t.addEventListener("webglcontextrestored",Nt,!1),t.addEventListener("webglcontextcreationerror",Ut,!1),M===null){const O=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&O.shift(),M=G(O,S),M===null)throw G(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}M.getShaderPrecisionFormat===void 0&&(M.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let J,$,H,Q,rt,wt,bt,Et,ct,vt,Ht,Pt,qt,Rt,jt,P,E,et,ft,gt,Mt,Dt,At,ht;function Wt(){J=new eh(M),$=new Yu(M,J,m),J.init($),Dt=new Nd(M,J,$),H=new Fd(M,J,$),Q=new rh,rt=new bd,wt=new zd(M,J,H,rt,$,Dt,Q),bt=new Zu(p),Et=new th(p),ct=new dl(M,$),At=new Xu(M,J,ct,$),vt=new nh(M,ct,Q,At),Ht=new lh(M,vt,ct,Q),ft=new oh(M,$,wt),P=new ju(rt),Pt=new _d(p,bt,Et,J,$,At,P),qt=new kd(p,rt),Rt=new wd,jt=new Rd(J,$),et=new qu(p,bt,Et,H,Ht,o,r),E=new Bd(p,Ht,$),ht=new Gd(M,Q,$,H),gt=new Ku(M,J,Q,$),Mt=new ih(M,J,Q,$),Q.programs=Pt.programs,p.capabilities=$,p.extensions=J,p.properties=rt,p.renderLists=Rt,p.shadowMap=E,p.state=H,p.info=Q}Wt();const Bt=new Wd(p,M);this.xr=Bt,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const S=J.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=J.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(S){S!==void 0&&(F=S,this.setSize(T,C,!1))},this.getSize=function(S){return S.set(T,C)},this.setSize=function(S,O,Y=!0){if(Bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=S,C=O,t.width=Math.floor(S*F),t.height=Math.floor(O*F),Y===!0&&(t.style.width=S+"px",t.style.height=O+"px"),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(T*F,C*F).floor()},this.setDrawingBufferSize=function(S,O,Y){T=S,C=O,F=Y,t.width=Math.floor(S*Y),t.height=Math.floor(O*Y),this.setViewport(0,0,S,O)},this.getCurrentViewport=function(S){return S.copy(I)},this.getViewport=function(S){return S.copy(U)},this.setViewport=function(S,O,Y,A){S.isVector4?U.set(S.x,S.y,S.z,S.w):U.set(S,O,Y,A),H.viewport(I.copy(U).multiplyScalar(F).floor())},this.getScissor=function(S){return S.copy(K)},this.setScissor=function(S,O,Y,A){S.isVector4?K.set(S.x,S.y,S.z,S.w):K.set(S,O,Y,A),H.scissor(V.copy(K).multiplyScalar(F).floor())},this.getScissorTest=function(){return tt},this.setScissorTest=function(S){H.setScissorTest(tt=S)},this.setOpaqueSort=function(S){W=S},this.setTransparentSort=function(S){z=S},this.getClearColor=function(S){return S.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(S=!0,O=!0,Y=!0){let A=0;S&&(A|=16384),O&&(A|=256),Y&&(A|=1024),M.clear(A)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ot,!1),t.removeEventListener("webglcontextrestored",Nt,!1),t.removeEventListener("webglcontextcreationerror",Ut,!1),Rt.dispose(),jt.dispose(),rt.dispose(),bt.dispose(),Et.dispose(),Ht.dispose(),At.dispose(),ht.dispose(),Pt.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",yt),Bt.removeEventListener("sessionend",Tt),X&&(X.dispose(),X=null),Ft.stop()};function Ot(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function Nt(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const S=Q.autoReset,O=E.enabled,Y=E.autoUpdate,A=E.needsUpdate,q=E.type;Wt(),Q.autoReset=S,E.enabled=O,E.autoUpdate=Y,E.needsUpdate=A,E.type=q}function Ut(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function $t(S){const O=S.target;O.removeEventListener("dispose",$t),te(O)}function te(S){ie(S),rt.remove(S)}function ie(S){const O=rt.get(S).programs;O!==void 0&&(O.forEach(function(Y){Pt.releaseProgram(Y)}),S.isShaderMaterial&&Pt.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,Y,A,q,ot){O===null&&(O=R);const mt=q.isMesh&&q.matrixWorld.determinant()<0,ut=xt(S,O,Y,A,q);H.setMaterial(A,mt);let lt=Y.index,pt=1;A.wireframe===!0&&(lt=vt.getWireframeAttribute(Y),pt=2);const St=Y.drawRange,Ct=Y.attributes.position;let dt=St.start*pt,kt=(St.start+St.count)*pt;ot!==null&&(dt=Math.max(dt,ot.start*pt),kt=Math.min(kt,(ot.start+ot.count)*pt)),lt!==null?(dt=Math.max(dt,0),kt=Math.min(kt,lt.count)):Ct!=null&&(dt=Math.max(dt,0),kt=Math.min(kt,Ct.count));const Kt=kt-dt;if(Kt<0||Kt===1/0)return;At.setup(q,A,ut,Y,lt);let re,Vt=gt;if(lt!==null&&(re=ct.get(lt),Vt=Mt,Vt.setIndex(re)),q.isMesh)A.wireframe===!0?(H.setLineWidth(A.wireframeLinewidth*L()),Vt.setMode(1)):Vt.setMode(4);else if(q.isLine){let It=A.linewidth;It===void 0&&(It=1),H.setLineWidth(It*L()),q.isLineSegments?Vt.setMode(1):q.isLineLoop?Vt.setMode(2):Vt.setMode(3)}else q.isPoints?Vt.setMode(0):q.isSprite&&Vt.setMode(4);if(q.isInstancedMesh)Vt.renderInstances(dt,Kt,q.count);else if(Y.isInstancedBufferGeometry){const It=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Gt=Math.min(Y.instanceCount,It);Vt.renderInstances(dt,Kt,Gt)}else Vt.render(dt,Kt)},this.compile=function(S,O){function Y(A,q,ot){A.transparent===!0&&A.side===yn&&A.forceSinglePass===!1?(A.side=Ge,A.needsUpdate=!0,nt(A,q,ot),A.side=Mn,A.needsUpdate=!0,nt(A,q,ot),A.side=yn):nt(A,q,ot)}c=jt.get(S),c.init(),v.push(c),S.traverseVisible(function(A){A.isLight&&A.layers.test(O.layers)&&(c.pushLight(A),A.castShadow&&c.pushShadow(A))}),c.setupLights(p.useLegacyLights),S.traverse(function(A){const q=A.material;if(q)if(Array.isArray(q))for(let ot=0;ot<q.length;ot++){const mt=q[ot];Y(mt,S,A)}else Y(q,S,A)}),v.pop(),c=null};let j=null;function st(S){j&&j(S)}function yt(){Ft.stop()}function Tt(){Ft.start()}const Ft=new Pa;Ft.setAnimationLoop(st),typeof self<"u"&&Ft.setContext(self),this.setAnimationLoop=function(S){j=S,Bt.setAnimationLoop(S),S===null?Ft.stop():Ft.start()},Bt.addEventListener("sessionstart",yt),Bt.addEventListener("sessionend",Tt),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(O),O=Bt.getCamera()),S.isScene===!0&&S.onBeforeRender(p,S,O,_),c=jt.get(S,v.length),c.init(),v.push(c),N.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),k.setFromProjectionMatrix(N),Z=this.localClippingEnabled,B=P.init(this.clippingPlanes,Z),i=Rt.get(S,h.length),i.init(),h.push(i),ee(S,O,0,p.sortObjects),i.finish(),p.sortObjects===!0&&i.sort(W,z),B===!0&&P.beginShadows();const Y=c.state.shadowsArray;if(E.render(Y,S,O),B===!0&&P.endShadows(),this.info.autoReset===!0&&this.info.reset(),et.render(i,S),c.setupLights(p.useLegacyLights),O.isArrayCamera){const A=O.cameras;for(let q=0,ot=A.length;q<ot;q++){const mt=A[q];oe(i,S,mt,mt.viewport)}}else oe(i,S,O);_!==null&&(wt.updateMultisampleRenderTarget(_),wt.updateRenderTargetMipmap(_)),S.isScene===!0&&S.onAfterRender(p,S,O),At.resetDefaultState(),x=-1,w=null,v.pop(),v.length>0?c=v[v.length-1]:c=null,h.pop(),h.length>0?i=h[h.length-1]:i=null};function ee(S,O,Y,A){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)Y=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLight)c.pushLight(S),S.castShadow&&c.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||k.intersectsSprite(S)){A&&D.setFromMatrixPosition(S.matrixWorld).applyMatrix4(N);const mt=Ht.update(S),ut=S.material;ut.visible&&i.push(S,mt,ut,Y,D.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==Q.render.frame&&(S.skeleton.update(),S.skeleton.frame=Q.render.frame),!S.frustumCulled||k.intersectsObject(S))){A&&D.setFromMatrixPosition(S.matrixWorld).applyMatrix4(N);const mt=Ht.update(S),ut=S.material;if(Array.isArray(ut)){const lt=mt.groups;for(let pt=0,St=lt.length;pt<St;pt++){const Ct=lt[pt],dt=ut[Ct.materialIndex];dt&&dt.visible&&i.push(S,mt,dt,Y,D.z,Ct)}}else ut.visible&&i.push(S,mt,ut,Y,D.z,null)}}const ot=S.children;for(let mt=0,ut=ot.length;mt<ut;mt++)ee(ot[mt],O,Y,A)}function oe(S,O,Y,A){const q=S.opaque,ot=S.transmissive,mt=S.transparent;c.setupLightsView(Y),B===!0&&P.setGlobalState(p.clippingPlanes,Y),ot.length>0&&de(q,O,Y),A&&H.viewport(I.copy(A)),q.length>0&&we(q,O,Y),ot.length>0&&we(ot,O,Y),mt.length>0&&we(mt,O,Y),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function de(S,O,Y){const A=$.isWebGL2;X===null&&(X=new zn(1024,1024,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")?yi:Bn,minFilter:xi,samples:A&&s===!0?4:0}));const q=p.getRenderTarget();p.setRenderTarget(X),p.clear();const ot=p.toneMapping;p.toneMapping=fn,we(S,O,Y),p.toneMapping=ot,wt.updateMultisampleRenderTarget(X),wt.updateRenderTargetMipmap(X),p.setRenderTarget(q)}function we(S,O,Y){const A=O.isScene===!0?O.overrideMaterial:null;for(let q=0,ot=S.length;q<ot;q++){const mt=S[q],ut=mt.object,lt=mt.geometry,pt=A===null?mt.material:A,St=mt.group;ut.layers.test(Y.layers)&&Jt(ut,O,Y,lt,pt,St)}}function Jt(S,O,Y,A,q,ot){S.onBeforeRender(p,O,Y,A,q,ot),S.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),q.onBeforeRender(p,O,Y,A,S,ot),q.transparent===!0&&q.side===yn&&q.forceSinglePass===!1?(q.side=Ge,q.needsUpdate=!0,p.renderBufferDirect(Y,O,A,q,S,ot),q.side=Mn,q.needsUpdate=!0,p.renderBufferDirect(Y,O,A,q,S,ot),q.side=yn):p.renderBufferDirect(Y,O,A,q,S,ot),S.onAfterRender(p,O,Y,A,q,ot)}function nt(S,O,Y){O.isScene!==!0&&(O=R);const A=rt.get(S),q=c.state.lights,ot=c.state.shadowsArray,mt=q.state.version,ut=Pt.getParameters(S,q.state,ot,O,Y),lt=Pt.getProgramCacheKey(ut);let pt=A.programs;A.environment=S.isMeshStandardMaterial?O.environment:null,A.fog=O.fog,A.envMap=(S.isMeshStandardMaterial?Et:bt).get(S.envMap||A.environment),pt===void 0&&(S.addEventListener("dispose",$t),pt=new Map,A.programs=pt);let St=pt.get(lt);if(St!==void 0){if(A.currentProgram===St&&A.lightsStateVersion===mt)return at(S,ut),St}else ut.uniforms=Pt.getUniforms(S),S.onBuild(Y,ut,p),S.onBeforeCompile(ut,p),St=Pt.acquireProgram(ut,lt),pt.set(lt,St),A.uniforms=ut.uniforms;const Ct=A.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ct.clippingPlanes=P.uniform),at(S,ut),A.needsLights=Xt(S),A.lightsStateVersion=mt,A.needsLights&&(Ct.ambientLightColor.value=q.state.ambient,Ct.lightProbe.value=q.state.probe,Ct.directionalLights.value=q.state.directional,Ct.directionalLightShadows.value=q.state.directionalShadow,Ct.spotLights.value=q.state.spot,Ct.spotLightShadows.value=q.state.spotShadow,Ct.rectAreaLights.value=q.state.rectArea,Ct.ltc_1.value=q.state.rectAreaLTC1,Ct.ltc_2.value=q.state.rectAreaLTC2,Ct.pointLights.value=q.state.point,Ct.pointLightShadows.value=q.state.pointShadow,Ct.hemisphereLights.value=q.state.hemi,Ct.directionalShadowMap.value=q.state.directionalShadowMap,Ct.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ct.spotShadowMap.value=q.state.spotShadowMap,Ct.spotLightMatrix.value=q.state.spotLightMatrix,Ct.spotLightMap.value=q.state.spotLightMap,Ct.pointShadowMap.value=q.state.pointShadowMap,Ct.pointShadowMatrix.value=q.state.pointShadowMatrix);const dt=St.getUniforms(),kt=Yi.seqWithValue(dt.seq,Ct);return A.currentProgram=St,A.uniformsList=kt,St}function at(S,O){const Y=rt.get(S);Y.outputEncoding=O.outputEncoding,Y.instancing=O.instancing,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function xt(S,O,Y,A,q){O.isScene!==!0&&(O=R),wt.resetTextureUnits();const ot=O.fog,mt=A.isMeshStandardMaterial?O.environment:null,ut=_===null?p.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:Fn,lt=(A.isMeshStandardMaterial?Et:bt).get(A.envMap||mt),pt=A.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,St=!!A.normalMap&&!!Y.attributes.tangent,Ct=!!Y.morphAttributes.position,dt=!!Y.morphAttributes.normal,kt=!!Y.morphAttributes.color,Kt=A.toneMapped?p.toneMapping:fn,re=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Vt=re!==void 0?re.length:0,It=rt.get(A),Gt=c.state.lights;if(B===!0&&(Z===!0||S!==w)){const he=S===w&&A.id===x;P.setState(A,S,he)}let ne=!1;A.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Gt.state.version||It.outputEncoding!==ut||q.isInstancedMesh&&It.instancing===!1||!q.isInstancedMesh&&It.instancing===!0||q.isSkinnedMesh&&It.skinning===!1||!q.isSkinnedMesh&&It.skinning===!0||It.envMap!==lt||A.fog===!0&&It.fog!==ot||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==P.numPlanes||It.numIntersection!==P.numIntersection)||It.vertexAlphas!==pt||It.vertexTangents!==St||It.morphTargets!==Ct||It.morphNormals!==dt||It.morphColors!==kt||It.toneMapping!==Kt||$.isWebGL2===!0&&It.morphTargetsCount!==Vt)&&(ne=!0):(ne=!0,It.__version=A.version);let fe=It.currentProgram;ne===!0&&(fe=nt(A,O,q));let Se=!1,Le=!1,xe=!1;const Zt=fe.getUniforms(),Ee=It.uniforms;if(H.useProgram(fe.program)&&(Se=!0,Le=!0,xe=!0),A.id!==x&&(x=A.id,Le=!0),Se||w!==S){if(Zt.setValue(M,"projectionMatrix",S.projectionMatrix),$.logarithmicDepthBuffer&&Zt.setValue(M,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),w!==S&&(w=S,Le=!0,xe=!0),A.isShaderMaterial||A.isMeshPhongMaterial||A.isMeshToonMaterial||A.isMeshStandardMaterial||A.envMap){const he=Zt.map.cameraPosition;he!==void 0&&he.setValue(M,D.setFromMatrixPosition(S.matrixWorld))}(A.isMeshPhongMaterial||A.isMeshToonMaterial||A.isMeshLambertMaterial||A.isMeshBasicMaterial||A.isMeshStandardMaterial||A.isShaderMaterial)&&Zt.setValue(M,"isOrthographic",S.isOrthographicCamera===!0),(A.isMeshPhongMaterial||A.isMeshToonMaterial||A.isMeshLambertMaterial||A.isMeshBasicMaterial||A.isMeshStandardMaterial||A.isShaderMaterial||A.isShadowMaterial||q.isSkinnedMesh)&&Zt.setValue(M,"viewMatrix",S.matrixWorldInverse)}if(q.isSkinnedMesh){Zt.setOptional(M,q,"bindMatrix"),Zt.setOptional(M,q,"bindMatrixInverse");const he=q.skeleton;he&&($.floatVertexTextures?(he.boneTexture===null&&he.computeBoneTexture(),Zt.setValue(M,"boneTexture",he.boneTexture,wt),Zt.setValue(M,"boneTextureSize",he.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const se=Y.morphAttributes;if((se.position!==void 0||se.normal!==void 0||se.color!==void 0&&$.isWebGL2===!0)&&ft.update(q,Y,fe),(Le||It.receiveShadow!==q.receiveShadow)&&(It.receiveShadow=q.receiveShadow,Zt.setValue(M,"receiveShadow",q.receiveShadow)),A.isMeshGouraudMaterial&&A.envMap!==null&&(Ee.envMap.value=lt,Ee.flipEnvMap.value=lt.isCubeTexture&&lt.isRenderTargetTexture===!1?-1:1),Le&&(Zt.setValue(M,"toneMappingExposure",p.toneMappingExposure),It.needsLights&&_t(Ee,xe),ot&&A.fog===!0&&qt.refreshFogUniforms(Ee,ot),qt.refreshMaterialUniforms(Ee,A,F,C,X),Yi.upload(M,It.uniformsList,Ee,wt)),A.isShaderMaterial&&A.uniformsNeedUpdate===!0&&(Yi.upload(M,It.uniformsList,Ee,wt),A.uniformsNeedUpdate=!1),A.isSpriteMaterial&&Zt.setValue(M,"center",q.center),Zt.setValue(M,"modelViewMatrix",q.modelViewMatrix),Zt.setValue(M,"normalMatrix",q.normalMatrix),Zt.setValue(M,"modelMatrix",q.matrixWorld),A.isShaderMaterial||A.isRawShaderMaterial){const he=A.uniformsGroups;for(let ye=0,_e=he.length;ye<_e;ye++)if($.isWebGL2){const pe=he[ye];ht.update(pe,fe),ht.bind(pe,fe)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fe}function _t(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function Xt(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(S,O,Y){rt.get(S.texture).__webglTexture=O,rt.get(S.depthTexture).__webglTexture=Y;const A=rt.get(S);A.__hasExternalTextures=!0,A.__hasExternalTextures&&(A.__autoAllocateDepthBuffer=Y===void 0,A.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),A.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,O){const Y=rt.get(S);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(S,O=0,Y=0){_=S,g=O,y=Y;let A=!0,q=null,ot=!1,mt=!1;if(S){const lt=rt.get(S);lt.__useDefaultFramebuffer!==void 0?(H.bindFramebuffer(36160,null),A=!1):lt.__webglFramebuffer===void 0?wt.setupRenderTarget(S):lt.__hasExternalTextures&&wt.rebindTextures(S,rt.get(S.texture).__webglTexture,rt.get(S.depthTexture).__webglTexture);const pt=S.texture;(pt.isData3DTexture||pt.isDataArrayTexture||pt.isCompressedArrayTexture)&&(mt=!0);const St=rt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(q=St[O],ot=!0):$.isWebGL2&&S.samples>0&&wt.useMultisampledRTT(S)===!1?q=rt.get(S).__webglMultisampledFramebuffer:q=St,I.copy(S.viewport),V.copy(S.scissor),b=S.scissorTest}else I.copy(U).multiplyScalar(F).floor(),V.copy(K).multiplyScalar(F).floor(),b=tt;if(H.bindFramebuffer(36160,q)&&$.drawBuffers&&A&&H.drawBuffers(S,q),H.viewport(I),H.scissor(V),H.setScissorTest(b),ot){const lt=rt.get(S.texture);M.framebufferTexture2D(36160,36064,34069+O,lt.__webglTexture,Y)}else if(mt){const lt=rt.get(S.texture),pt=O||0;M.framebufferTextureLayer(36160,36064,lt.__webglTexture,Y||0,pt)}x=-1},this.readRenderTargetPixels=function(S,O,Y,A,q,ot,mt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ut=rt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&mt!==void 0&&(ut=ut[mt]),ut){H.bindFramebuffer(36160,ut);try{const lt=S.texture,pt=lt.format,St=lt.type;if(pt!==Je&&Dt.convert(pt)!==M.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ct=St===yi&&(J.has("EXT_color_buffer_half_float")||$.isWebGL2&&J.has("EXT_color_buffer_float"));if(St!==Bn&&Dt.convert(St)!==M.getParameter(35738)&&!(St===Dn&&($.isWebGL2||J.has("OES_texture_float")||J.has("WEBGL_color_buffer_float")))&&!Ct){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-A&&Y>=0&&Y<=S.height-q&&M.readPixels(O,Y,A,q,Dt.convert(pt),Dt.convert(St),ot)}finally{const lt=_!==null?rt.get(_).__webglFramebuffer:null;H.bindFramebuffer(36160,lt)}}},this.copyFramebufferToTexture=function(S,O,Y=0){const A=Math.pow(2,-Y),q=Math.floor(O.image.width*A),ot=Math.floor(O.image.height*A);wt.setTexture2D(O,0),M.copyTexSubImage2D(3553,Y,0,0,S.x,S.y,q,ot),H.unbindTexture()},this.copyTextureToTexture=function(S,O,Y,A=0){const q=O.image.width,ot=O.image.height,mt=Dt.convert(Y.format),ut=Dt.convert(Y.type);wt.setTexture2D(Y,0),M.pixelStorei(37440,Y.flipY),M.pixelStorei(37441,Y.premultiplyAlpha),M.pixelStorei(3317,Y.unpackAlignment),O.isDataTexture?M.texSubImage2D(3553,A,S.x,S.y,q,ot,mt,ut,O.image.data):O.isCompressedTexture?M.compressedTexSubImage2D(3553,A,S.x,S.y,O.mipmaps[0].width,O.mipmaps[0].height,mt,O.mipmaps[0].data):M.texSubImage2D(3553,A,S.x,S.y,mt,ut,O.image),A===0&&Y.generateMipmaps&&M.generateMipmap(3553),H.unbindTexture()},this.copyTextureToTexture3D=function(S,O,Y,A,q=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ot=S.max.x-S.min.x+1,mt=S.max.y-S.min.y+1,ut=S.max.z-S.min.z+1,lt=Dt.convert(A.format),pt=Dt.convert(A.type);let St;if(A.isData3DTexture)wt.setTexture3D(A,0),St=32879;else if(A.isDataArrayTexture)wt.setTexture2DArray(A,0),St=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}M.pixelStorei(37440,A.flipY),M.pixelStorei(37441,A.premultiplyAlpha),M.pixelStorei(3317,A.unpackAlignment);const Ct=M.getParameter(3314),dt=M.getParameter(32878),kt=M.getParameter(3316),Kt=M.getParameter(3315),re=M.getParameter(32877),Vt=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;M.pixelStorei(3314,Vt.width),M.pixelStorei(32878,Vt.height),M.pixelStorei(3316,S.min.x),M.pixelStorei(3315,S.min.y),M.pixelStorei(32877,S.min.z),Y.isDataTexture||Y.isData3DTexture?M.texSubImage3D(St,q,O.x,O.y,O.z,ot,mt,ut,lt,pt,Vt.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),M.compressedTexSubImage3D(St,q,O.x,O.y,O.z,ot,mt,ut,lt,Vt.data)):M.texSubImage3D(St,q,O.x,O.y,O.z,ot,mt,ut,lt,pt,Vt),M.pixelStorei(3314,Ct),M.pixelStorei(32878,dt),M.pixelStorei(3316,kt),M.pixelStorei(3315,Kt),M.pixelStorei(32877,re),q===0&&A.generateMipmaps&&M.generateMipmap(St),H.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?wt.setTextureCube(S,0):S.isData3DTexture?wt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?wt.setTexture2DArray(S,0):wt.setTexture2D(S,0),H.unbindTexture()},this.resetState=function(){g=0,y=0,_=null,H.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(qr.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(m){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!m}}});class qd extends qr{}qd.prototype.isWebGL1Renderer=!0;class Xd extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class Xr extends pn{constructor(t=1,e=32,n=16,l=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:l,phiLength:s,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const u=Math.min(r+a,Math.PI);let d=0;const o=[],i=new it,c=new it,h=[],v=[],p=[],f=[];for(let g=0;g<=n;g++){const y=[],_=g/n;let x=0;g==0&&r==0?x=.5/e:g==n&&u==Math.PI&&(x=-.5/e);for(let w=0;w<=e;w++){const I=w/e;i.x=-t*Math.cos(l+I*s)*Math.sin(r+_*a),i.y=t*Math.cos(r+_*a),i.z=t*Math.sin(l+I*s)*Math.sin(r+_*a),v.push(i.x,i.y,i.z),c.copy(i).normalize(),p.push(c.x,c.y,c.z),f.push(I+x,1-_),y.push(d++)}o.push(y)}for(let g=0;g<n;g++)for(let y=0;y<e;y++){const _=o[g][y+1],x=o[g][y],w=o[g+1][y],I=o[g+1][y+1];(g!==0||r>0)&&h.push(_,x,I),(g!==n-1||u<Math.PI)&&h.push(x,w,I)}this.setIndex(h),this.setAttribute("position",new sn(v,3)),this.setAttribute("normal",new sn(p,3)),this.setAttribute("uv",new sn(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Dr extends Ei{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=va,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const aa={enabled:!1,files:{},add:function(m,t){this.enabled!==!1&&(this.files[m]=t)},get:function(m){if(this.enabled!==!1)return this.files[m]},remove:function(m){delete this.files[m]},clear:function(){this.files={}}};class Kd{constructor(t,e,n){const l=this;let s=!1,r=0,a=0,u;const d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(o){a++,s===!1&&l.onStart!==void 0&&l.onStart(o,r,a),s=!0},this.itemEnd=function(o){r++,l.onProgress!==void 0&&l.onProgress(o,r,a),r===a&&(s=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(o){l.onError!==void 0&&l.onError(o)},this.resolveURL=function(o){return u?u(o):o},this.setURLModifier=function(o){return u=o,this},this.addHandler=function(o,i){return d.push(o,i),this},this.removeHandler=function(o){const i=d.indexOf(o);return i!==-1&&d.splice(i,2),this},this.getHandler=function(o){for(let i=0,c=d.length;i<c;i+=2){const h=d[i],v=d[i+1];if(h.global&&(h.lastIndex=0),h.test(o))return v}return null}}}const Yd=new Kd;class za{constructor(t){this.manager=t!==void 0?t:Yd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(l,s){n.load(t,l,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}class jd extends za{constructor(t){super(t)}load(t,e,n,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,r=aa.get(t);if(r!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(r),s.manager.itemEnd(t)},0),r;const a=bi("img");function u(){o(),aa.add(t,this),e&&e(this),s.manager.itemEnd(t)}function d(i){o(),l&&l(i),s.manager.itemError(t),s.manager.itemEnd(t)}function o(){a.removeEventListener("load",u,!1),a.removeEventListener("error",d,!1)}return a.addEventListener("load",u,!1),a.addEventListener("error",d,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class Ir extends za{constructor(t){super(t)}load(t,e,n,l){const s=new ze,r=new jd(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,l),s}}class Zd extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ae(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class $d extends Zd{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Jd{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=oa(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=oa();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function oa(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kr);function Xi(m){throw new Error('Could not dynamically require "'+m+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Fe={},Qd={get exports(){return Fe},set exports(m){Fe=m}};(function(m,t){(function(e){m.exports=e()})(function(){return function e(n,l,s){function r(d,o){if(!l[d]){if(!n[d]){var i=typeof Xi=="function"&&Xi;if(!o&&i)return i(d,!0);if(a)return a(d,!0);throw new Error("Cannot find module '"+d+"'")}var c=l[d]={exports:{}};n[d][0].call(c.exports,function(h){var v=n[d][1][h];return r(v||h)},c,c.exports,e,n,l,s)}return l[d].exports}for(var a=typeof Xi=="function"&&Xi,u=0;u<s.length;u++)r(s[u]);return r}({1:[function(e,n,l){n.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(e,n,l){n.exports={version:e("../package.json").version,AABB:e("./collision/AABB"),ArrayCollisionMatrix:e("./collision/ArrayCollisionMatrix"),Body:e("./objects/Body"),Box:e("./shapes/Box"),Broadphase:e("./collision/Broadphase"),Constraint:e("./constraints/Constraint"),ContactEquation:e("./equations/ContactEquation"),Narrowphase:e("./world/Narrowphase"),ConeTwistConstraint:e("./constraints/ConeTwistConstraint"),ContactMaterial:e("./material/ContactMaterial"),ConvexPolyhedron:e("./shapes/ConvexPolyhedron"),Cylinder:e("./shapes/Cylinder"),DistanceConstraint:e("./constraints/DistanceConstraint"),Equation:e("./equations/Equation"),EventTarget:e("./utils/EventTarget"),FrictionEquation:e("./equations/FrictionEquation"),GSSolver:e("./solver/GSSolver"),GridBroadphase:e("./collision/GridBroadphase"),Heightfield:e("./shapes/Heightfield"),HingeConstraint:e("./constraints/HingeConstraint"),LockConstraint:e("./constraints/LockConstraint"),Mat3:e("./math/Mat3"),Material:e("./material/Material"),NaiveBroadphase:e("./collision/NaiveBroadphase"),ObjectCollisionMatrix:e("./collision/ObjectCollisionMatrix"),Pool:e("./utils/Pool"),Particle:e("./shapes/Particle"),Plane:e("./shapes/Plane"),PointToPointConstraint:e("./constraints/PointToPointConstraint"),Quaternion:e("./math/Quaternion"),Ray:e("./collision/Ray"),RaycastVehicle:e("./objects/RaycastVehicle"),RaycastResult:e("./collision/RaycastResult"),RigidVehicle:e("./objects/RigidVehicle"),RotationalEquation:e("./equations/RotationalEquation"),RotationalMotorEquation:e("./equations/RotationalMotorEquation"),SAPBroadphase:e("./collision/SAPBroadphase"),SPHSystem:e("./objects/SPHSystem"),Shape:e("./shapes/Shape"),Solver:e("./solver/Solver"),Sphere:e("./shapes/Sphere"),SplitSolver:e("./solver/SplitSolver"),Spring:e("./objects/Spring"),Trimesh:e("./shapes/Trimesh"),Vec3:e("./math/Vec3"),Vec3Pool:e("./utils/Vec3Pool"),World:e("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(e,n,l){var s=e("../math/Vec3");e("../utils/Utils"),n.exports=r;function r(d){d=d||{},this.lowerBound=new s,d.lowerBound&&this.lowerBound.copy(d.lowerBound),this.upperBound=new s,d.upperBound&&this.upperBound.copy(d.upperBound)}var a=new s;r.prototype.setFromPoints=function(d,o,i,c){var h=this.lowerBound,v=this.upperBound,p=i;h.copy(d[0]),p&&p.vmult(h,h),v.copy(h);for(var f=1;f<d.length;f++){var g=d[f];p&&(p.vmult(g,a),g=a),g.x>v.x&&(v.x=g.x),g.x<h.x&&(h.x=g.x),g.y>v.y&&(v.y=g.y),g.y<h.y&&(h.y=g.y),g.z>v.z&&(v.z=g.z),g.z<h.z&&(h.z=g.z)}return o&&(o.vadd(h,h),o.vadd(v,v)),c&&(h.x-=c,h.y-=c,h.z-=c,v.x+=c,v.y+=c,v.z+=c),this},r.prototype.copy=function(d){return this.lowerBound.copy(d.lowerBound),this.upperBound.copy(d.upperBound),this},r.prototype.clone=function(){return new r().copy(this)},r.prototype.extend=function(d){var o=d.lowerBound.x;this.lowerBound.x>o&&(this.lowerBound.x=o);var i=d.upperBound.x;this.upperBound.x<i&&(this.upperBound.x=i);var o=d.lowerBound.y;this.lowerBound.y>o&&(this.lowerBound.y=o);var i=d.upperBound.y;this.upperBound.y<i&&(this.upperBound.y=i);var o=d.lowerBound.z;this.lowerBound.z>o&&(this.lowerBound.z=o);var i=d.upperBound.z;this.upperBound.z<i&&(this.upperBound.z=i)},r.prototype.overlaps=function(d){var o=this.lowerBound,i=this.upperBound,c=d.lowerBound,h=d.upperBound;return(c.x<=i.x&&i.x<=h.x||o.x<=h.x&&h.x<=i.x)&&(c.y<=i.y&&i.y<=h.y||o.y<=h.y&&h.y<=i.y)&&(c.z<=i.z&&i.z<=h.z||o.z<=h.z&&h.z<=i.z)},r.prototype.contains=function(d){var o=this.lowerBound,i=this.upperBound,c=d.lowerBound,h=d.upperBound;return o.x<=c.x&&i.x>=h.x&&o.y<=c.y&&i.y>=h.y&&o.z<=c.z&&i.z>=h.z},r.prototype.getCorners=function(d,o,i,c,h,v,p,f){var g=this.lowerBound,y=this.upperBound;d.copy(g),o.set(y.x,g.y,g.z),i.set(y.x,y.y,g.z),c.set(g.x,y.y,y.z),h.set(y.x,g.y,g.z),v.set(g.x,y.y,g.z),p.set(g.x,g.y,y.z),f.copy(y)};var u=[new s,new s,new s,new s,new s,new s,new s,new s];r.prototype.toLocalFrame=function(d,o){var i=u,c=i[0],h=i[1],v=i[2],p=i[3],f=i[4],g=i[5],y=i[6],_=i[7];this.getCorners(c,h,v,p,f,g,y,_);for(var x=0;x!==8;x++){var w=i[x];d.pointToLocal(w,w)}return o.setFromPoints(i)},r.prototype.toWorldFrame=function(d,o){var i=u,c=i[0],h=i[1],v=i[2],p=i[3],f=i[4],g=i[5],y=i[6],_=i[7];this.getCorners(c,h,v,p,f,g,y,_);for(var x=0;x!==8;x++){var w=i[x];d.pointToWorld(w,w)}return o.setFromPoints(i)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(e,n,l){n.exports=s;function s(){this.matrix=[]}s.prototype.get=function(r,a){if(r=r.index,a=a.index,a>r){var u=a;a=r,r=u}return this.matrix[(r*(r+1)>>1)+a-1]},s.prototype.set=function(r,a,u){if(r=r.index,a=a.index,a>r){var d=a;a=r,r=d}this.matrix[(r*(r+1)>>1)+a-1]=u?1:0},s.prototype.reset=function(){for(var r=0,a=this.matrix.length;r!==a;r++)this.matrix[r]=0},s.prototype.setNumObjects=function(r){this.matrix.length=r*(r-1)>>1}},{}],5:[function(e,n,l){var s=e("../objects/Body"),r=e("../math/Vec3"),a=e("../math/Quaternion");e("../shapes/Shape"),e("../shapes/Plane"),n.exports=u;function u(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}u.prototype.collisionPairs=function(p,f,g){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var d=s.STATIC|s.KINEMATIC;u.prototype.needBroadphaseCollision=function(p,f){return!(!(p.collisionFilterGroup&f.collisionFilterMask)||!(f.collisionFilterGroup&p.collisionFilterMask)||(p.type&d||p.sleepState===s.SLEEPING)&&(f.type&d||f.sleepState===s.SLEEPING))},u.prototype.intersectionTest=function(p,f,g,y){this.useBoundingBoxes?this.doBoundingBoxBroadphase(p,f,g,y):this.doBoundingSphereBroadphase(p,f,g,y)};var o=new r;new r,new a,new r,u.prototype.doBoundingSphereBroadphase=function(p,f,g,y){var _=o;f.position.vsub(p.position,_);var x=Math.pow(p.boundingRadius+f.boundingRadius,2),w=_.norm2();w<x&&(g.push(p),y.push(f))},u.prototype.doBoundingBoxBroadphase=function(p,f,g,y){p.aabbNeedsUpdate&&p.computeAABB(),f.aabbNeedsUpdate&&f.computeAABB(),p.aabb.overlaps(f.aabb)&&(g.push(p),y.push(f))};var i={keys:[]},c=[],h=[];u.prototype.makePairsUnique=function(p,f){for(var g=i,y=c,_=h,x=p.length,w=0;w!==x;w++)y[w]=p[w],_[w]=f[w];p.length=0,f.length=0;for(var w=0;w!==x;w++){var I=y[w].id,V=_[w].id,b=I<V?I+","+V:V+","+I;g[b]=w,g.keys.push(b)}for(var w=0;w!==g.keys.length;w++){var b=g.keys.pop(),T=g[b];p.push(y[T]),f.push(_[T]),delete g[b]}},u.prototype.setWorld=function(p){};var v=new r;u.boundingSphereCheck=function(p,f){var g=v;return p.position.vsub(f.position,g),Math.pow(p.shape.boundingSphereRadius+f.shape.boundingSphereRadius,2)>g.norm2()},u.prototype.aabbQuery=function(p,f,g){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(e,n,l){n.exports=u;var s=e("./Broadphase"),r=e("../math/Vec3"),a=e("../shapes/Shape");function u(o,i,c,h,v){s.apply(this),this.nx=c||10,this.ny=h||10,this.nz=v||10,this.aabbMin=o||new r(100,100,100),this.aabbMax=i||new r(-100,-100,-100);var p=this.nx*this.ny*this.nz;if(p<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=p,this.binLengths.length=p;for(var f=0;f<p;f++)this.bins[f]=[],this.binLengths[f]=0}u.prototype=new s,u.prototype.constructor=u;var d=new r;new r,u.prototype.collisionPairs=function(o,i,c){var h=o.numObjects(),v=o.bodies,J=this.aabbMax,G=this.aabbMin,p=this.nx,f=this.ny,g=this.nz,y=f*g,_=g,x=1,w=J.x,I=J.y,V=J.z,b=G.x,T=G.y,C=G.z,F=p/(w-b),W=f/(I-T),z=g/(V-C),U=(w-b)/p,K=(I-T)/f,tt=(V-C)/g,k=Math.sqrt(U*U+K*K+tt*tt)*.5,B=a.types,Z=B.SPHERE,X=B.PLANE;B.BOX,B.COMPOUND,B.CONVEXPOLYHEDRON;for(var N=this.bins,D=this.binLengths,R=this.bins.length,L=0;L!==R;L++)D[L]=0;var M=Math.ceil,G=Math.min,J=Math.max;function $(ht,Wt,Bt,Ot,Nt,Ut,$t){var te=(ht-b)*F|0,ie=(Wt-T)*W|0,j=(Bt-C)*z|0,st=M((Ot-b)*F),yt=M((Nt-T)*W),Tt=M((Ut-C)*z);te<0?te=0:te>=p&&(te=p-1),ie<0?ie=0:ie>=f&&(ie=f-1),j<0?j=0:j>=g&&(j=g-1),st<0?st=0:st>=p&&(st=p-1),yt<0?yt=0:yt>=f&&(yt=f-1),Tt<0?Tt=0:Tt>=g&&(Tt=g-1),te*=y,ie*=_,j*=x,st*=y,yt*=_,Tt*=x;for(var Ft=te;Ft<=st;Ft+=y)for(var ee=ie;ee<=yt;ee+=_)for(var oe=j;oe<=Tt;oe+=x){var de=Ft+ee+oe;N[de][D[de]++]=$t}}for(var L=0;L!==h;L++){var H=v[L],Q=H.shape;switch(Q.type){case Z:var rt=H.position.x,wt=H.position.y,bt=H.position.z,Et=Q.radius;$(rt-Et,wt-Et,bt-Et,rt+Et,wt+Et,bt+Et,H);break;case X:Q.worldNormalNeedsUpdate&&Q.computeWorldNormal(H.quaternion);var ct=Q.worldNormal,vt=b+U*.5-H.position.x,Ht=T+K*.5-H.position.y,Pt=C+tt*.5-H.position.z,qt=d;qt.set(vt,Ht,Pt);for(var Rt=0,jt=0;Rt!==p;Rt++,jt+=y,qt.y=Ht,qt.x+=U)for(var P=0,E=0;P!==f;P++,E+=_,qt.z=Pt,qt.y+=K)for(var et=0,ft=0;et!==g;et++,ft+=x,qt.z+=tt)if(qt.dot(ct)<k){var gt=jt+E+ft;N[gt][D[gt]++]=H}break;default:H.aabbNeedsUpdate&&H.computeAABB(),$(H.aabb.lowerBound.x,H.aabb.lowerBound.y,H.aabb.lowerBound.z,H.aabb.upperBound.x,H.aabb.upperBound.y,H.aabb.upperBound.z,H);break}}for(var L=0;L!==R;L++){var Mt=D[L];if(Mt>1)for(var Dt=N[L],Rt=0;Rt!==Mt;Rt++)for(var H=Dt[Rt],P=0;P!==Rt;P++){var At=Dt[P];this.needBroadphaseCollision(H,At)&&this.intersectionTest(H,At,i,c)}}this.makePairsUnique(i,c)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(e,n,l){n.exports=a;var s=e("./Broadphase"),r=e("./AABB");function a(){s.apply(this)}a.prototype=new s,a.prototype.constructor=a,a.prototype.collisionPairs=function(u,d,o){var i=u.bodies,c=i.length,h,v,p,f;for(h=0;h!==c;h++)for(v=0;v!==h;v++)p=i[h],f=i[v],this.needBroadphaseCollision(p,f)&&this.intersectionTest(p,f,d,o)},new r,a.prototype.aabbQuery=function(u,d,o){o=o||[];for(var i=0;i<u.bodies.length;i++){var c=u.bodies[i];c.aabbNeedsUpdate&&c.computeAABB(),c.aabb.overlaps(d)&&o.push(c)}return o}},{"./AABB":3,"./Broadphase":5}],8:[function(e,n,l){n.exports=s;function s(){this.matrix={}}s.prototype.get=function(r,a){if(r=r.id,a=a.id,a>r){var u=a;a=r,r=u}return r+"-"+a in this.matrix},s.prototype.set=function(r,a,u){if(r=r.id,a=a.id,a>r){var d=a;a=r,r=d}u?this.matrix[r+"-"+a]=!0:delete this.matrix[r+"-"+a]},s.prototype.reset=function(){this.matrix={}},s.prototype.setNumObjects=function(r){}},{}],9:[function(e,n,l){n.exports=i;var s=e("../math/Vec3"),r=e("../math/Quaternion"),a=e("../math/Transform");e("../shapes/ConvexPolyhedron"),e("../shapes/Box");var u=e("../collision/RaycastResult"),d=e("../shapes/Shape"),o=e("../collision/AABB");function i(R,L){this.from=R?R.clone():new s,this.to=L?L.clone():new s,this._direction=new s,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=i.ANY,this.result=new u,this.hasHit=!1,this.callback=function(M){}}i.prototype.constructor=i,i.CLOSEST=1,i.ANY=2,i.ALL=4;var c=new o,h=[];i.prototype.intersectWorld=function(R,L){return this.mode=L.mode||i.ANY,this.result=L.result||new u,this.skipBackfaces=!!L.skipBackfaces,this.collisionFilterMask=typeof L.collisionFilterMask<"u"?L.collisionFilterMask:-1,this.collisionFilterGroup=typeof L.collisionFilterGroup<"u"?L.collisionFilterGroup:-1,L.from&&this.from.copy(L.from),L.to&&this.to.copy(L.to),this.callback=L.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(c),h.length=0,R.broadphase.aabbQuery(R,c,h),this.intersectBodies(h),this.hasHit};var v=new s,p=new s;i.pointInTriangle=f;function f(R,L,M,G){G.vsub(L,X),M.vsub(L,v),R.vsub(L,p);var J=X.dot(X),$=X.dot(v),H=X.dot(p),Q=v.dot(v),rt=v.dot(p),wt,bt;return(wt=Q*H-$*rt)>=0&&(bt=J*rt-$*H)>=0&&wt+bt<J*Q-$*$}var g=new s,y=new r;i.prototype.intersectBody=function(R,L){L&&(this.result=L,this._updateDirection());var M=this.checkCollisionResponse;if(!(M&&!R.collisionResponse)&&!(!(this.collisionFilterGroup&R.collisionFilterMask)||!(R.collisionFilterGroup&this.collisionFilterMask)))for(var G=g,J=y,$=0,H=R.shapes.length;$<H;$++){var Q=R.shapes[$];if(!(M&&!Q.collisionResponse)&&(R.quaternion.mult(R.shapeOrientations[$],J),R.quaternion.vmult(R.shapeOffsets[$],G),G.vadd(R.position,G),this.intersectShape(Q,J,G,R),this.result._shouldStop))break}},i.prototype.intersectBodies=function(R,L){L&&(this.result=L,this._updateDirection());for(var M=0,G=R.length;!this.result._shouldStop&&M<G;M++)this.intersectBody(R[M])},i.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},i.prototype.intersectShape=function(R,L,M,G){var J=this.from,$=D(J,this._direction,M);if(!($>R.boundingSphereRadius)){var H=this[R.type];H&&H.call(this,R,L,M,G)}},new s,new s;var _=new s,x=new s,w=new s,I=new s;new s,new u,i.prototype.intersectBox=function(R,L,M,G){return this.intersectConvex(R.convexPolyhedronRepresentation,L,M,G)},i.prototype[d.types.BOX]=i.prototype.intersectBox,i.prototype.intersectPlane=function(R,L,M,G){var J=this.from,$=this.to,H=this._direction,Q=new s(0,0,1);L.vmult(Q,Q);var rt=new s;J.vsub(M,rt);var wt=rt.dot(Q);$.vsub(M,rt);var bt=rt.dot(Q);if(!(wt*bt>0)&&!(J.distanceTo($)<wt)){var Et=Q.dot(H);if(!(Math.abs(Et)<this.precision)){var ct=new s,vt=new s,Ht=new s;J.vsub(M,ct);var Pt=-Q.dot(ct)/Et;H.scale(Pt,vt),J.vadd(vt,Ht),this.reportIntersection(Q,Ht,R,G,-1)}}},i.prototype[d.types.PLANE]=i.prototype.intersectPlane,i.prototype.getAABB=function(R){var L=this.to,M=this.from;R.lowerBound.x=Math.min(L.x,M.x),R.lowerBound.y=Math.min(L.y,M.y),R.lowerBound.z=Math.min(L.z,M.z),R.upperBound.x=Math.max(L.x,M.x),R.upperBound.y=Math.max(L.y,M.y),R.upperBound.z=Math.max(L.z,M.z)};var V={faceList:[0]};i.prototype.intersectHeightfield=function(R,L,M,G){R.data,R.elementSize;var J=new s,$=new i(this.from,this.to);a.pointToLocalFrame(M,L,$.from,$.from),a.pointToLocalFrame(M,L,$.to,$.to);var H=[],Q=null,rt=null,wt=null,bt=null,Et=R.getIndexOfPosition($.from.x,$.from.y,H,!1);if(Et&&(Q=H[0],rt=H[1],wt=H[0],bt=H[1]),Et=R.getIndexOfPosition($.to.x,$.to.y,H,!1),Et&&((Q===null||H[0]<Q)&&(Q=H[0]),(wt===null||H[0]>wt)&&(wt=H[0]),(rt===null||H[1]<rt)&&(rt=H[1]),(bt===null||H[1]>bt)&&(bt=H[1])),Q!==null){var ct=[];R.getRectMinMax(Q,rt,wt,bt,ct);for(var vt=Q;vt<=wt;vt++)for(var Ht=rt;Ht<=bt;Ht++){if(this.result._shouldStop||(R.getConvexTrianglePillar(vt,Ht,!1),a.pointToWorldFrame(M,L,R.pillarOffset,J),this.intersectConvex(R.pillarConvex,L,J,G,V),this.result._shouldStop))return;R.getConvexTrianglePillar(vt,Ht,!0),a.pointToWorldFrame(M,L,R.pillarOffset,J),this.intersectConvex(R.pillarConvex,L,J,G,V)}}},i.prototype[d.types.HEIGHTFIELD]=i.prototype.intersectHeightfield;var b=new s,T=new s;i.prototype.intersectSphere=function(R,L,M,G){var J=this.from,$=this.to,H=R.radius,Q=Math.pow($.x-J.x,2)+Math.pow($.y-J.y,2)+Math.pow($.z-J.z,2),rt=2*(($.x-J.x)*(J.x-M.x)+($.y-J.y)*(J.y-M.y)+($.z-J.z)*(J.z-M.z)),wt=Math.pow(J.x-M.x,2)+Math.pow(J.y-M.y,2)+Math.pow(J.z-M.z,2)-Math.pow(H,2),bt=Math.pow(rt,2)-4*Q*wt,Et=b,ct=T;if(!(bt<0))if(bt===0)J.lerp($,bt,Et),Et.vsub(M,ct),ct.normalize(),this.reportIntersection(ct,Et,R,G,-1);else{var vt=(-rt-Math.sqrt(bt))/(2*Q),Ht=(-rt+Math.sqrt(bt))/(2*Q);if(vt>=0&&vt<=1&&(J.lerp($,vt,Et),Et.vsub(M,ct),ct.normalize(),this.reportIntersection(ct,Et,R,G,-1)),this.result._shouldStop)return;Ht>=0&&Ht<=1&&(J.lerp($,Ht,Et),Et.vsub(M,ct),ct.normalize(),this.reportIntersection(ct,Et,R,G,-1))}},i.prototype[d.types.SPHERE]=i.prototype.intersectSphere;var C=new s;new s,new s;var F=new s;i.prototype.intersectConvex=function(L,M,G,J,$){for(var H=C,Q=F,rt=$&&$.faceList||null,wt=L.faces,bt=L.vertices,Et=L.faceNormals,ct=this._direction,vt=this.from,Ht=this.to,Pt=vt.distanceTo(Ht),qt=rt?rt.length:wt.length,Rt=this.result,jt=0;!Rt._shouldStop&&jt<qt;jt++){var P=rt?rt[jt]:jt,E=wt[P],et=Et[P],ft=M,gt=G;Q.copy(bt[E[0]]),ft.vmult(Q,Q),Q.vadd(gt,Q),Q.vsub(vt,Q),ft.vmult(et,H);var Mt=ct.dot(H);if(!(Math.abs(Mt)<this.precision)){var Dt=H.dot(Q)/Mt;if(!(Dt<0)){ct.mult(Dt,_),_.vadd(vt,_),x.copy(bt[E[0]]),ft.vmult(x,x),gt.vadd(x,x);for(var At=1;!Rt._shouldStop&&At<E.length-1;At++){w.copy(bt[E[At]]),I.copy(bt[E[At+1]]),ft.vmult(w,w),ft.vmult(I,I),gt.vadd(w,w),gt.vadd(I,I);var ht=_.distanceTo(vt);!(f(_,x,w,I)||f(_,w,x,I))||ht>Pt||this.reportIntersection(H,_,L,J,P)}}}}},i.prototype[d.types.CONVEXPOLYHEDRON]=i.prototype.intersectConvex;var W=new s,z=new s,U=new s,K=new s,tt=new s,k=new s;new o;var B=[],Z=new a;i.prototype.intersectTrimesh=function(L,M,G,J,$){var H=W,Q=B,rt=Z,wt=F,bt=z,Et=U,ct=K,vt=k,Ht=tt;$&&$.faceList;var Pt=L.indices;L.vertices,L.faceNormals;var qt=this.from,Rt=this.to,jt=this._direction;rt.position.copy(G),rt.quaternion.copy(M),a.vectorToLocalFrame(G,M,jt,bt),a.pointToLocalFrame(G,M,qt,Et),a.pointToLocalFrame(G,M,Rt,ct);var P=Et.distanceSquared(ct);L.tree.rayQuery(this,rt,Q);for(var E=0,et=Q.length;!this.result._shouldStop&&E!==et;E++){var ft=Q[E];L.getNormal(ft,H),L.getVertex(Pt[ft*3],x),x.vsub(Et,wt);var gt=bt.dot(H),Mt=H.dot(wt)/gt;if(!(Mt<0)){bt.scale(Mt,_),_.vadd(Et,_),L.getVertex(Pt[ft*3+1],w),L.getVertex(Pt[ft*3+2],I);var Dt=_.distanceSquared(Et);!(f(_,w,x,I)||f(_,x,w,I))||Dt>P||(a.vectorToWorldFrame(M,H,Ht),a.pointToWorldFrame(G,M,_,vt),this.reportIntersection(Ht,vt,L,J,ft))}}Q.length=0},i.prototype[d.types.TRIMESH]=i.prototype.intersectTrimesh,i.prototype.reportIntersection=function(R,L,M,G,J){var $=this.from,H=this.to,Q=$.distanceTo(L),rt=this.result;if(!(this.skipBackfaces&&R.dot(this._direction)>0))switch(rt.hitFaceIndex=typeof J<"u"?J:-1,this.mode){case i.ALL:this.hasHit=!0,rt.set($,H,R,L,M,G,Q),rt.hasHit=!0,this.callback(rt);break;case i.CLOSEST:(Q<rt.distance||!rt.hasHit)&&(this.hasHit=!0,rt.hasHit=!0,rt.set($,H,R,L,M,G,Q));break;case i.ANY:this.hasHit=!0,rt.hasHit=!0,rt.set($,H,R,L,M,G,Q),rt._shouldStop=!0;break}};var X=new s,N=new s;function D(R,L,M){M.vsub(R,X);var G=X.dot(L);L.mult(G,N),N.vadd(R,N);var J=M.distanceTo(N);return J}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(e,n,l){var s=e("../math/Vec3");n.exports=r;function r(){this.rayFromWorld=new s,this.rayToWorld=new s,this.hitNormalWorld=new s,this.hitPointWorld=new s,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}r.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},r.prototype.abort=function(){this._shouldStop=!0},r.prototype.set=function(a,u,d,o,i,c,h){this.rayFromWorld.copy(a),this.rayToWorld.copy(u),this.hitNormalWorld.copy(d),this.hitPointWorld.copy(o),this.shape=i,this.body=c,this.distance=h}},{"../math/Vec3":30}],11:[function(e,n,l){e("../shapes/Shape");var s=e("../collision/Broadphase");n.exports=r;function r(a){s.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var u=this.axisList;this._addBodyHandler=function(d){u.push(d.body)},this._removeBodyHandler=function(d){var o=u.indexOf(d.body);o!==-1&&u.splice(o,1)},a&&this.setWorld(a)}r.prototype=new s,r.prototype.setWorld=function(a){this.axisList.length=0;for(var u=0;u<a.bodies.length;u++)this.axisList.push(a.bodies[u]);a.removeEventListener("addBody",this._addBodyHandler),a.removeEventListener("removeBody",this._removeBodyHandler),a.addEventListener("addBody",this._addBodyHandler),a.addEventListener("removeBody",this._removeBodyHandler),this.world=a,this.dirty=!0},r.insertionSortX=function(a){for(var u=1,d=a.length;u<d;u++){for(var o=a[u],i=u-1;i>=0&&!(a[i].aabb.lowerBound.x<=o.aabb.lowerBound.x);i--)a[i+1]=a[i];a[i+1]=o}return a},r.insertionSortY=function(a){for(var u=1,d=a.length;u<d;u++){for(var o=a[u],i=u-1;i>=0&&!(a[i].aabb.lowerBound.y<=o.aabb.lowerBound.y);i--)a[i+1]=a[i];a[i+1]=o}return a},r.insertionSortZ=function(a){for(var u=1,d=a.length;u<d;u++){for(var o=a[u],i=u-1;i>=0&&!(a[i].aabb.lowerBound.z<=o.aabb.lowerBound.z);i--)a[i+1]=a[i];a[i+1]=o}return a},r.prototype.collisionPairs=function(a,u,d){var o=this.axisList,i=o.length,c=this.axisIndex,h,v;for(this.dirty&&(this.sortList(),this.dirty=!1),h=0;h!==i;h++){var p=o[h];for(v=h+1;v<i;v++){var f=o[v];if(this.needBroadphaseCollision(p,f)){if(!r.checkBounds(p,f,c))break;this.intersectionTest(p,f,u,d)}}}},r.prototype.sortList=function(){for(var a=this.axisList,u=this.axisIndex,d=a.length,o=0;o!==d;o++){var i=a[o];i.aabbNeedsUpdate&&i.computeAABB()}u===0?r.insertionSortX(a):u===1?r.insertionSortY(a):u===2&&r.insertionSortZ(a)},r.checkBounds=function(a,u,d){var o,i;d===0?(o=a.position.x,i=u.position.x):d===1?(o=a.position.y,i=u.position.y):d===2&&(o=a.position.z,i=u.position.z);var c=a.boundingRadius,h=u.boundingRadius,v=o+c,p=i-h;return p<v},r.prototype.autoDetectAxis=function(){for(var a=0,u=0,d=0,o=0,i=0,c=0,h=this.axisList,v=h.length,p=1/v,f=0;f!==v;f++){var g=h[f],y=g.position.x;a+=y,u+=y*y;var _=g.position.y;d+=_,o+=_*_;var x=g.position.z;i+=x,c+=x*x}var w=u-a*a*p,I=o-d*d*p,V=c-i*i*p;w>I?w>V?this.axisIndex=0:this.axisIndex=2:I>V?this.axisIndex=1:this.axisIndex=2},r.prototype.aabbQuery=function(a,u,d){d=d||[],this.dirty&&(this.sortList(),this.dirty=!1);var o=this.axisIndex,i="x";o===1&&(i="y"),o===2&&(i="z");var c=this.axisList;u.lowerBound[i],u.upperBound[i];for(var h=0;h<c.length;h++){var v=c[h];v.aabbNeedsUpdate&&v.computeAABB(),v.aabb.overlaps(u)&&d.push(v)}return d}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(e,n,l){n.exports=d,e("./Constraint");var s=e("./PointToPointConstraint"),r=e("../equations/ConeEquation"),a=e("../equations/RotationalEquation");e("../equations/ContactEquation");var u=e("../math/Vec3");function d(o,i,c){c=c||{};var h=typeof c.maxForce<"u"?c.maxForce:1e6,v=c.pivotA?c.pivotA.clone():new u,p=c.pivotB?c.pivotB.clone():new u;this.axisA=c.axisA?c.axisA.clone():new u,this.axisB=c.axisB?c.axisB.clone():new u,s.call(this,o,v,i,p,h),this.collideConnected=!!c.collideConnected,this.angle=typeof c.angle<"u"?c.angle:0;var f=this.coneEquation=new r(o,i,c),g=this.twistEquation=new a(o,i,c);this.twistAngle=typeof c.twistAngle<"u"?c.twistAngle:0,f.maxForce=0,f.minForce=-h,g.maxForce=0,g.minForce=-h,this.equations.push(f,g)}d.prototype=new s,d.constructor=d,new u,new u,d.prototype.update=function(){var o=this.bodyA,i=this.bodyB,c=this.coneEquation,h=this.twistEquation;s.prototype.update.call(this),o.vectorToWorldFrame(this.axisA,c.axisA),i.vectorToWorldFrame(this.axisB,c.axisB),this.axisA.tangents(h.axisA,h.axisA),o.vectorToWorldFrame(h.axisA,h.axisA),this.axisB.tangents(h.axisB,h.axisB),i.vectorToWorldFrame(h.axisB,h.axisB),c.angle=this.angle,h.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(e,n,l){n.exports=r;var s=e("../utils/Utils");function r(a,u,d){d=s.defaults(d,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=a,this.bodyB=u,this.id=r.idCounter++,this.collideConnected=d.collideConnected,d.wakeUpBodies&&(a&&a.wakeUp(),u&&u.wakeUp())}r.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},r.prototype.enable=function(){for(var a=this.equations,u=0;u<a.length;u++)a[u].enabled=!0},r.prototype.disable=function(){for(var a=this.equations,u=0;u<a.length;u++)a[u].enabled=!1},r.idCounter=0},{"../utils/Utils":53}],14:[function(e,n,l){n.exports=a;var s=e("./Constraint"),r=e("../equations/ContactEquation");function a(u,d,o,i){s.call(this,u,d),typeof o>"u"&&(o=u.position.distanceTo(d.position)),typeof i>"u"&&(i=1e6),this.distance=o;var c=this.distanceEquation=new r(u,d);this.equations.push(c),c.minForce=-i,c.maxForce=i}a.prototype=new s,a.prototype.update=function(){var u=this.bodyA,d=this.bodyB,o=this.distanceEquation,i=this.distance*.5,c=o.ni;d.position.vsub(u.position,c),c.normalize(),c.mult(i,o.ri),c.mult(-i,o.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(e,n,l){n.exports=d,e("./Constraint");var s=e("./PointToPointConstraint"),r=e("../equations/RotationalEquation"),a=e("../equations/RotationalMotorEquation");e("../equations/ContactEquation");var u=e("../math/Vec3");function d(c,h,v){v=v||{};var p=typeof v.maxForce<"u"?v.maxForce:1e6,f=v.pivotA?v.pivotA.clone():new u,g=v.pivotB?v.pivotB.clone():new u;s.call(this,c,f,h,g,p);var y=this.axisA=v.axisA?v.axisA.clone():new u(1,0,0);y.normalize();var _=this.axisB=v.axisB?v.axisB.clone():new u(1,0,0);_.normalize();var x=this.rotationalEquation1=new r(c,h,v),w=this.rotationalEquation2=new r(c,h,v),I=this.motorEquation=new a(c,h,p);I.enabled=!1,this.equations.push(x,w,I)}d.prototype=new s,d.constructor=d,d.prototype.enableMotor=function(){this.motorEquation.enabled=!0},d.prototype.disableMotor=function(){this.motorEquation.enabled=!1},d.prototype.setMotorSpeed=function(c){this.motorEquation.targetVelocity=c},d.prototype.setMotorMaxForce=function(c){this.motorEquation.maxForce=c,this.motorEquation.minForce=-c};var o=new u,i=new u;d.prototype.update=function(){var c=this.bodyA,h=this.bodyB,v=this.motorEquation,p=this.rotationalEquation1,f=this.rotationalEquation2,g=o,y=i,_=this.axisA,x=this.axisB;s.prototype.update.call(this),c.quaternion.vmult(_,g),h.quaternion.vmult(x,y),g.tangents(p.axisA,f.axisA),p.axisB.copy(y),f.axisB.copy(y),this.motorEquation.enabled&&(c.quaternion.vmult(this.axisA,v.axisA),h.quaternion.vmult(this.axisB,v.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(e,n,l){n.exports=u,e("./Constraint");var s=e("./PointToPointConstraint"),r=e("../equations/RotationalEquation");e("../equations/RotationalMotorEquation"),e("../equations/ContactEquation");var a=e("../math/Vec3");function u(d,o,i){i=i||{};var c=typeof i.maxForce<"u"?i.maxForce:1e6,h=new a,v=new a,p=new a;d.position.vadd(o.position,p),p.scale(.5,p),o.pointToLocalFrame(p,v),d.pointToLocalFrame(p,h),s.call(this,d,h,o,v,c);var f=this.rotationalEquation1=new r(d,o,i),g=this.rotationalEquation2=new r(d,o,i),y=this.rotationalEquation3=new r(d,o,i);this.equations.push(f,g,y)}u.prototype=new s,u.constructor=u,new a,new a,u.prototype.update=function(){var d=this.bodyA,o=this.bodyB;this.motorEquation;var i=this.rotationalEquation1,c=this.rotationalEquation2,h=this.rotationalEquation3;s.prototype.update.call(this),d.vectorToWorldFrame(a.UNIT_X,i.axisA),o.vectorToWorldFrame(a.UNIT_Y,i.axisB),d.vectorToWorldFrame(a.UNIT_Y,c.axisA),o.vectorToWorldFrame(a.UNIT_Z,c.axisB),d.vectorToWorldFrame(a.UNIT_Z,h.axisA),o.vectorToWorldFrame(a.UNIT_X,h.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(e,n,l){n.exports=u;var s=e("./Constraint"),r=e("../equations/ContactEquation"),a=e("../math/Vec3");function u(d,o,i,c,h){s.call(this,d,i),h=typeof h<"u"?h:1e6,this.pivotA=o?o.clone():new a,this.pivotB=c?c.clone():new a;var v=this.equationX=new r(d,i),p=this.equationY=new r(d,i),f=this.equationZ=new r(d,i);this.equations.push(v,p,f),v.minForce=p.minForce=f.minForce=-h,v.maxForce=p.maxForce=f.maxForce=h,v.ni.set(1,0,0),p.ni.set(0,1,0),f.ni.set(0,0,1)}u.prototype=new s,u.prototype.update=function(){var d=this.bodyA,o=this.bodyB,i=this.equationX,c=this.equationY,h=this.equationZ;d.quaternion.vmult(this.pivotA,i.ri),o.quaternion.vmult(this.pivotB,i.rj),c.ri.copy(i.ri),c.rj.copy(i.rj),h.ri.copy(i.ri),h.rj.copy(i.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(e,n,l){n.exports=a;var s=e("../math/Vec3");e("../math/Mat3");var r=e("./Equation");function a(o,i,c){c=c||{};var h=typeof c.maxForce<"u"?c.maxForce:1e6;r.call(this,o,i,-h,h),this.axisA=c.axisA?c.axisA.clone():new s(1,0,0),this.axisB=c.axisB?c.axisB.clone():new s(0,1,0),this.angle=typeof c.angle<"u"?c.angle:0}a.prototype=new r,a.prototype.constructor=a;var u=new s,d=new s;a.prototype.computeB=function(o){var i=this.a,c=this.b,h=this.axisA,v=this.axisB,p=u,f=d,g=this.jacobianElementA,y=this.jacobianElementB;h.cross(v,p),v.cross(h,f),g.rotational.copy(f),y.rotational.copy(p);var _=Math.cos(this.angle)-h.dot(v),x=this.computeGW(),w=this.computeGiMf(),I=-_*i-x*c-o*w;return I}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(e,n,l){n.exports=a;var s=e("./Equation"),r=e("../math/Vec3");e("../math/Mat3");function a(f,g,y){y=typeof y<"u"?y:1e6,s.call(this,f,g,0,y),this.restitution=0,this.ri=new r,this.rj=new r,this.ni=new r}a.prototype=new s,a.prototype.constructor=a;var u=new r,d=new r,o=new r;a.prototype.computeB=function(f){var g=this.a,y=this.b,_=this.bi,x=this.bj,w=this.ri,I=this.rj,V=u,b=d,T=_.velocity,C=_.angularVelocity;_.force,_.torque;var F=x.velocity,W=x.angularVelocity;x.force,x.torque;var z=o,U=this.jacobianElementA,K=this.jacobianElementB,tt=this.ni;w.cross(tt,V),I.cross(tt,b),tt.negate(U.spatial),V.negate(U.rotational),K.spatial.copy(tt),K.rotational.copy(b),z.copy(x.position),z.vadd(I,z),z.vsub(_.position,z),z.vsub(w,z);var k=tt.dot(z),B=this.restitution+1,Z=B*F.dot(tt)-B*T.dot(tt)+W.dot(b)-C.dot(V),X=this.computeGiMf(),N=-k*g-Z*y-f*X;return N};var i=new r,c=new r,h=new r,v=new r,p=new r;a.prototype.getImpactVelocityAlongNormal=function(){var f=i,g=c,y=h,_=v,x=p;return this.bi.position.vadd(this.ri,y),this.bj.position.vadd(this.rj,_),this.bi.getVelocityAtWorldPoint(y,f),this.bj.getVelocityAtWorldPoint(_,g),f.vsub(g,x),this.ni.dot(x)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(e,n,l){n.exports=a;var s=e("../math/JacobianElement"),r=e("../math/Vec3");function a(p,f,g,y){this.id=a.id++,this.minForce=typeof g>"u"?-1e6:g,this.maxForce=typeof y>"u"?1e6:y,this.bi=p,this.bj=f,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new s,this.jacobianElementB=new s,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}a.prototype.constructor=a,a.id=0,a.prototype.setSpookParams=function(p,f,g){var y=f,_=p,x=g;this.a=4/(x*(1+4*y)),this.b=4*y/(1+4*y),this.eps=4/(x*x*_*(1+4*y))},a.prototype.computeB=function(p,f,g){var y=this.computeGW(),_=this.computeGq(),x=this.computeGiMf();return-_*p-y*f-x*g},a.prototype.computeGq=function(){var p=this.jacobianElementA,f=this.jacobianElementB,g=this.bi,y=this.bj,_=g.position,x=y.position;return p.spatial.dot(_)+f.spatial.dot(x)};var u=new r;a.prototype.computeGW=function(){var p=this.jacobianElementA,f=this.jacobianElementB,g=this.bi,y=this.bj,_=g.velocity,x=y.velocity,w=g.angularVelocity||u,I=y.angularVelocity||u;return p.multiplyVectors(_,w)+f.multiplyVectors(x,I)},a.prototype.computeGWlambda=function(){var p=this.jacobianElementA,f=this.jacobianElementB,g=this.bi,y=this.bj,_=g.vlambda,x=y.vlambda,w=g.wlambda||u,I=y.wlambda||u;return p.multiplyVectors(_,w)+f.multiplyVectors(x,I)};var d=new r,o=new r,i=new r,c=new r;a.prototype.computeGiMf=function(){var p=this.jacobianElementA,f=this.jacobianElementB,g=this.bi,y=this.bj,_=g.force,x=g.torque,w=y.force,I=y.torque,V=g.invMassSolve,b=y.invMassSolve;return g.invInertiaWorldSolve?g.invInertiaWorldSolve.vmult(x,i):i.set(0,0,0),y.invInertiaWorldSolve?y.invInertiaWorldSolve.vmult(I,c):c.set(0,0,0),_.mult(V,d),w.mult(b,o),p.multiplyVectors(d,i)+f.multiplyVectors(o,c)};var h=new r;a.prototype.computeGiMGt=function(){var p=this.jacobianElementA,f=this.jacobianElementB,g=this.bi,y=this.bj,_=g.invMassSolve,x=y.invMassSolve,w=g.invInertiaWorldSolve,I=y.invInertiaWorldSolve,V=_+x;return w&&(w.vmult(p.rotational,h),V+=h.dot(p.rotational)),I&&(I.vmult(f.rotational,h),V+=h.dot(f.rotational)),V};var v=new r;new r,new r,new r,new r,new r,a.prototype.addToWlambda=function(p){var f=this.jacobianElementA,g=this.jacobianElementB,y=this.bi,_=this.bj,x=v;f.spatial.mult(y.invMassSolve*p,x),y.vlambda.vadd(x,y.vlambda),g.spatial.mult(_.invMassSolve*p,x),_.vlambda.vadd(x,_.vlambda),y.invInertiaWorldSolve&&(y.invInertiaWorldSolve.vmult(f.rotational,x),x.mult(p,x),y.wlambda.vadd(x,y.wlambda)),_.invInertiaWorldSolve&&(_.invInertiaWorldSolve.vmult(g.rotational,x),x.mult(p,x),_.wlambda.vadd(x,_.wlambda))},a.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(e,n,l){n.exports=a;var s=e("./Equation"),r=e("../math/Vec3");e("../math/Mat3");function a(o,i,c){s.call(this,o,i,-c,c),this.ri=new r,this.rj=new r,this.t=new r}a.prototype=new s,a.prototype.constructor=a;var u=new r,d=new r;a.prototype.computeB=function(o){this.a;var i=this.b;this.bi,this.bj;var c=this.ri,h=this.rj,v=u,p=d,f=this.t;c.cross(f,v),h.cross(f,p);var g=this.jacobianElementA,y=this.jacobianElementB;f.negate(g.spatial),v.negate(g.rotational),y.spatial.copy(f),y.rotational.copy(p);var _=this.computeGW(),x=this.computeGiMf(),w=-_*i-o*x;return w}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(e,n,l){n.exports=a;var s=e("../math/Vec3");e("../math/Mat3");var r=e("./Equation");function a(o,i,c){c=c||{};var h=typeof c.maxForce<"u"?c.maxForce:1e6;r.call(this,o,i,-h,h),this.axisA=c.axisA?c.axisA.clone():new s(1,0,0),this.axisB=c.axisB?c.axisB.clone():new s(0,1,0),this.maxAngle=Math.PI/2}a.prototype=new r,a.prototype.constructor=a;var u=new s,d=new s;a.prototype.computeB=function(o){var i=this.a,c=this.b,h=this.axisA,v=this.axisB,p=u,f=d,g=this.jacobianElementA,y=this.jacobianElementB;h.cross(v,p),v.cross(h,f),g.rotational.copy(f),y.rotational.copy(p);var _=Math.cos(this.maxAngle)-h.dot(v),x=this.computeGW(),w=this.computeGiMf(),I=-_*i-x*c-o*w;return I}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(e,n,l){n.exports=a;var s=e("../math/Vec3");e("../math/Mat3");var r=e("./Equation");function a(u,d,o){o=typeof o<"u"?o:1e6,r.call(this,u,d,-o,o),this.axisA=new s,this.axisB=new s,this.targetVelocity=0}a.prototype=new r,a.prototype.constructor=a,a.prototype.computeB=function(u){this.a;var d=this.b;this.bi,this.bj;var o=this.axisA,i=this.axisB,c=this.jacobianElementA,h=this.jacobianElementB;c.rotational.copy(o),i.negate(h.rotational);var v=this.computeGW()-this.targetVelocity,p=this.computeGiMf(),f=-v*d-u*p;return f}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(e,n,l){var s=e("../utils/Utils");n.exports=r;function r(a,u,d){d=s.defaults(d,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=r.idCounter++,this.materials=[a,u],this.friction=d.friction,this.restitution=d.restitution,this.contactEquationStiffness=d.contactEquationStiffness,this.contactEquationRelaxation=d.contactEquationRelaxation,this.frictionEquationStiffness=d.frictionEquationStiffness,this.frictionEquationRelaxation=d.frictionEquationRelaxation}r.idCounter=0},{"../utils/Utils":53}],25:[function(e,n,l){n.exports=s;function s(r){var a="";r=r||{},typeof r=="string"?(a=r,r={}):typeof r=="object"&&(a=""),this.name=a,this.id=s.idCounter++,this.friction=typeof r.friction<"u"?r.friction:-1,this.restitution=typeof r.restitution<"u"?r.restitution:-1}s.idCounter=0},{}],26:[function(e,n,l){n.exports=r;var s=e("./Vec3");function r(){this.spatial=new s,this.rotational=new s}r.prototype.multiplyElement=function(a){return a.spatial.dot(this.spatial)+a.rotational.dot(this.rotational)},r.prototype.multiplyVectors=function(a,u){return a.dot(this.spatial)+u.dot(this.rotational)}},{"./Vec3":30}],27:[function(e,n,l){n.exports=r;var s=e("./Vec3");function r(a){a?this.elements=a:this.elements=[0,0,0,0,0,0,0,0,0]}r.prototype.identity=function(){var a=this.elements;a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=1,a[5]=0,a[6]=0,a[7]=0,a[8]=1},r.prototype.setZero=function(){var a=this.elements;a[0]=0,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=0,a[6]=0,a[7]=0,a[8]=0},r.prototype.setTrace=function(a){var u=this.elements;u[0]=a.x,u[4]=a.y,u[8]=a.z},r.prototype.getTrace=function(u){var u=u||new s,d=this.elements;u.x=d[0],u.y=d[4],u.z=d[8]},r.prototype.vmult=function(a,u){u=u||new s;var d=this.elements,o=a.x,i=a.y,c=a.z;return u.x=d[0]*o+d[1]*i+d[2]*c,u.y=d[3]*o+d[4]*i+d[5]*c,u.z=d[6]*o+d[7]*i+d[8]*c,u},r.prototype.smult=function(a){for(var u=0;u<this.elements.length;u++)this.elements[u]*=a},r.prototype.mmult=function(a,u){for(var d=u||new r,o=0;o<3;o++)for(var i=0;i<3;i++){for(var c=0,h=0;h<3;h++)c+=a.elements[o+h*3]*this.elements[h+i*3];d.elements[o+i*3]=c}return d},r.prototype.scale=function(a,u){u=u||new r;for(var d=this.elements,o=u.elements,i=0;i!==3;i++)o[3*i+0]=a.x*d[3*i+0],o[3*i+1]=a.y*d[3*i+1],o[3*i+2]=a.z*d[3*i+2];return u},r.prototype.solve=function(a,u){u=u||new s;for(var d=3,o=4,i=[],c=0;c<d*o;c++)i.push(0);var c,h;for(c=0;c<3;c++)for(h=0;h<3;h++)i[c+o*h]=this.elements[c+3*h];i[3+4*0]=a.x,i[3+4*1]=a.y,i[3+4*2]=a.z;var v=3,p=v,f,g=4,y;do{if(c=p-v,i[c+o*c]===0){for(h=c+1;h<p;h++)if(i[c+o*h]!==0){f=g;do y=g-f,i[y+o*c]+=i[y+o*h];while(--f);break}}if(i[c+o*c]!==0)for(h=c+1;h<p;h++){var _=i[c+o*h]/i[c+o*c];f=g;do y=g-f,i[y+o*h]=y<=c?0:i[y+o*h]-i[y+o*c]*_;while(--f)}}while(--v);if(u.z=i[2*o+3]/i[2*o+2],u.y=(i[1*o+3]-i[1*o+2]*u.z)/i[1*o+1],u.x=(i[0*o+3]-i[0*o+2]*u.z-i[0*o+1]*u.y)/i[0*o+0],isNaN(u.x)||isNaN(u.y)||isNaN(u.z)||u.x===1/0||u.y===1/0||u.z===1/0)throw"Could not solve equation! Got x=["+u.toString()+"], b=["+a.toString()+"], A=["+this.toString()+"]";return u},r.prototype.e=function(a,u,d){if(d===void 0)return this.elements[u+3*a];this.elements[u+3*a]=d},r.prototype.copy=function(a){for(var u=0;u<a.elements.length;u++)this.elements[u]=a.elements[u];return this},r.prototype.toString=function(){for(var a="",u=",",d=0;d<9;d++)a+=this.elements[d]+u;return a},r.prototype.reverse=function(a){a=a||new r;for(var u=3,d=6,o=[],i=0;i<u*d;i++)o.push(0);var i,c;for(i=0;i<3;i++)for(c=0;c<3;c++)o[i+d*c]=this.elements[i+3*c];o[3+6*0]=1,o[3+6*1]=0,o[3+6*2]=0,o[4+6*0]=0,o[4+6*1]=1,o[4+6*2]=0,o[5+6*0]=0,o[5+6*1]=0,o[5+6*2]=1;var h=3,v=h,p,f=d,g;do{if(i=v-h,o[i+d*i]===0){for(c=i+1;c<v;c++)if(o[i+d*c]!==0){p=f;do g=f-p,o[g+d*i]+=o[g+d*c];while(--p);break}}if(o[i+d*i]!==0)for(c=i+1;c<v;c++){var y=o[i+d*c]/o[i+d*i];p=f;do g=f-p,o[g+d*c]=g<=i?0:o[g+d*c]-o[g+d*i]*y;while(--p)}}while(--h);i=2;do{c=i-1;do{var y=o[i+d*c]/o[i+d*i];p=d;do g=d-p,o[g+d*c]=o[g+d*c]-o[g+d*i]*y;while(--p)}while(c--)}while(--i);i=2;do{var y=1/o[i+d*i];p=d;do g=d-p,o[g+d*i]=o[g+d*i]*y;while(--p)}while(i--);i=2;do{c=2;do{if(g=o[u+c+d*i],isNaN(g)||g===1/0)throw"Could not reverse! A=["+this.toString()+"]";a.e(i,c,g)}while(c--)}while(i--);return a},r.prototype.setRotationFromQuaternion=function(a){var u=a.x,d=a.y,o=a.z,i=a.w,c=u+u,h=d+d,v=o+o,p=u*c,f=u*h,g=u*v,y=d*h,_=d*v,x=o*v,w=i*c,I=i*h,V=i*v,b=this.elements;return b[3*0+0]=1-(y+x),b[3*0+1]=f-V,b[3*0+2]=g+I,b[3*1+0]=f+V,b[3*1+1]=1-(p+x),b[3*1+2]=_-w,b[3*2+0]=g-I,b[3*2+1]=_+w,b[3*2+2]=1-(p+y),this},r.prototype.transpose=function(a){a=a||new r;for(var u=a.elements,d=this.elements,o=0;o!==3;o++)for(var i=0;i!==3;i++)u[3*o+i]=d[3*i+o];return a}},{"./Vec3":30}],28:[function(e,n,l){n.exports=r;var s=e("./Vec3");function r(c,h,v,p){this.x=c!==void 0?c:0,this.y=h!==void 0?h:0,this.z=v!==void 0?v:0,this.w=p!==void 0?p:1}r.prototype.set=function(c,h,v,p){this.x=c,this.y=h,this.z=v,this.w=p},r.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},r.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},r.prototype.setFromAxisAngle=function(c,h){var v=Math.sin(h*.5);this.x=c.x*v,this.y=c.y*v,this.z=c.z*v,this.w=Math.cos(h*.5)},r.prototype.toAxisAngle=function(c){c=c||new s,this.normalize();var h=2*Math.acos(this.w),v=Math.sqrt(1-this.w*this.w);return v<.001?(c.x=this.x,c.y=this.y,c.z=this.z):(c.x=this.x/v,c.y=this.y/v,c.z=this.z/v),[c,h]};var a=new s,u=new s;r.prototype.setFromVectors=function(c,h){if(c.isAntiparallelTo(h)){var v=a,p=u;c.tangents(v,p),this.setFromAxisAngle(v,Math.PI)}else{var f=c.cross(h);this.x=f.x,this.y=f.y,this.z=f.z,this.w=Math.sqrt(Math.pow(c.norm(),2)*Math.pow(h.norm(),2))+c.dot(h),this.normalize()}};var d=new s,o=new s,i=new s;r.prototype.mult=function(c,h){h=h||new r;var v=this.w,p=d,f=o,g=i;return p.set(this.x,this.y,this.z),f.set(c.x,c.y,c.z),h.w=v*c.w-p.dot(f),p.cross(f,g),h.x=v*f.x+c.w*p.x+g.x,h.y=v*f.y+c.w*p.y+g.y,h.z=v*f.z+c.w*p.z+g.z,h},r.prototype.inverse=function(c){var h=this.x,v=this.y,p=this.z,f=this.w;c=c||new r,this.conjugate(c);var g=1/(h*h+v*v+p*p+f*f);return c.x*=g,c.y*=g,c.z*=g,c.w*=g,c},r.prototype.conjugate=function(c){return c=c||new r,c.x=-this.x,c.y=-this.y,c.z=-this.z,c.w=this.w,c},r.prototype.normalize=function(){var c=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);c===0?(this.x=0,this.y=0,this.z=0,this.w=0):(c=1/c,this.x*=c,this.y*=c,this.z*=c,this.w*=c)},r.prototype.normalizeFast=function(){var c=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;c===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=c,this.y*=c,this.z*=c,this.w*=c)},r.prototype.vmult=function(c,h){h=h||new s;var v=c.x,p=c.y,f=c.z,g=this.x,y=this.y,_=this.z,x=this.w,w=x*v+y*f-_*p,I=x*p+_*v-g*f,V=x*f+g*p-y*v,b=-g*v-y*p-_*f;return h.x=w*x+b*-g+I*-_-V*-y,h.y=I*x+b*-y+V*-g-w*-_,h.z=V*x+b*-_+w*-y-I*-g,h},r.prototype.copy=function(c){return this.x=c.x,this.y=c.y,this.z=c.z,this.w=c.w,this},r.prototype.toEuler=function(c,h){h=h||"YZX";var v,p,f,g=this.x,y=this.y,_=this.z,x=this.w;switch(h){case"YZX":var w=g*y+_*x;if(w>.499&&(v=2*Math.atan2(g,x),p=Math.PI/2,f=0),w<-.499&&(v=-2*Math.atan2(g,x),p=-Math.PI/2,f=0),isNaN(v)){var I=g*g,V=y*y,b=_*_;v=Math.atan2(2*y*x-2*g*_,1-2*V-2*b),p=Math.asin(2*w),f=Math.atan2(2*g*x-2*y*_,1-2*I-2*b)}break;default:throw new Error("Euler order "+h+" not supported yet.")}c.y=v,c.z=p,c.x=f},r.prototype.setFromEuler=function(c,h,v,p){p=p||"XYZ";var f=Math.cos(c/2),g=Math.cos(h/2),y=Math.cos(v/2),_=Math.sin(c/2),x=Math.sin(h/2),w=Math.sin(v/2);return p==="XYZ"?(this.x=_*g*y+f*x*w,this.y=f*x*y-_*g*w,this.z=f*g*w+_*x*y,this.w=f*g*y-_*x*w):p==="YXZ"?(this.x=_*g*y+f*x*w,this.y=f*x*y-_*g*w,this.z=f*g*w-_*x*y,this.w=f*g*y+_*x*w):p==="ZXY"?(this.x=_*g*y-f*x*w,this.y=f*x*y+_*g*w,this.z=f*g*w+_*x*y,this.w=f*g*y-_*x*w):p==="ZYX"?(this.x=_*g*y-f*x*w,this.y=f*x*y+_*g*w,this.z=f*g*w-_*x*y,this.w=f*g*y+_*x*w):p==="YZX"?(this.x=_*g*y+f*x*w,this.y=f*x*y+_*g*w,this.z=f*g*w-_*x*y,this.w=f*g*y-_*x*w):p==="XZY"&&(this.x=_*g*y-f*x*w,this.y=f*x*y-_*g*w,this.z=f*g*w+_*x*y,this.w=f*g*y+_*x*w),this},r.prototype.clone=function(){return new r(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(e,n,l){var s=e("./Vec3"),r=e("./Quaternion");n.exports=a;function a(d){d=d||{},this.position=new s,d.position&&this.position.copy(d.position),this.quaternion=new r,d.quaternion&&this.quaternion.copy(d.quaternion)}var u=new r;a.pointToLocalFrame=function(d,o,i,h){var h=h||new s;return i.vsub(d,h),o.conjugate(u),u.vmult(h,h),h},a.prototype.pointToLocal=function(d,o){return a.pointToLocalFrame(this.position,this.quaternion,d,o)},a.pointToWorldFrame=function(d,o,i,h){var h=h||new s;return o.vmult(i,h),h.vadd(d,h),h},a.prototype.pointToWorld=function(d,o){return a.pointToWorldFrame(this.position,this.quaternion,d,o)},a.prototype.vectorToWorldFrame=function(d,i){var i=i||new s;return this.quaternion.vmult(d,i),i},a.vectorToWorldFrame=function(d,o,i){return d.vmult(o,i),i},a.vectorToLocalFrame=function(d,o,i,h){var h=h||new s;return o.w*=-1,o.vmult(i,h),o.w*=-1,h}},{"./Quaternion":28,"./Vec3":30}],30:[function(e,n,l){n.exports=r;var s=e("./Mat3");function r(o,i,c){this.x=o||0,this.y=i||0,this.z=c||0}r.ZERO=new r(0,0,0),r.UNIT_X=new r(1,0,0),r.UNIT_Y=new r(0,1,0),r.UNIT_Z=new r(0,0,1),r.prototype.cross=function(o,i){var c=o.x,h=o.y,v=o.z,p=this.x,f=this.y,g=this.z;return i=i||new r,i.x=f*v-g*h,i.y=g*c-p*v,i.z=p*h-f*c,i},r.prototype.set=function(o,i,c){return this.x=o,this.y=i,this.z=c,this},r.prototype.setZero=function(){this.x=this.y=this.z=0},r.prototype.vadd=function(o,i){if(i)i.x=o.x+this.x,i.y=o.y+this.y,i.z=o.z+this.z;else return new r(this.x+o.x,this.y+o.y,this.z+o.z)},r.prototype.vsub=function(o,i){if(i)i.x=this.x-o.x,i.y=this.y-o.y,i.z=this.z-o.z;else return new r(this.x-o.x,this.y-o.y,this.z-o.z)},r.prototype.crossmat=function(){return new s([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},r.prototype.normalize=function(){var o=this.x,i=this.y,c=this.z,h=Math.sqrt(o*o+i*i+c*c);if(h>0){var v=1/h;this.x*=v,this.y*=v,this.z*=v}else this.x=0,this.y=0,this.z=0;return h},r.prototype.unit=function(o){o=o||new r;var i=this.x,c=this.y,h=this.z,v=Math.sqrt(i*i+c*c+h*h);return v>0?(v=1/v,o.x=i*v,o.y=c*v,o.z=h*v):(o.x=1,o.y=0,o.z=0),o},r.prototype.norm=function(){var o=this.x,i=this.y,c=this.z;return Math.sqrt(o*o+i*i+c*c)},r.prototype.length=r.prototype.norm,r.prototype.norm2=function(){return this.dot(this)},r.prototype.lengthSquared=r.prototype.norm2,r.prototype.distanceTo=function(o){var i=this.x,c=this.y,h=this.z,v=o.x,p=o.y,f=o.z;return Math.sqrt((v-i)*(v-i)+(p-c)*(p-c)+(f-h)*(f-h))},r.prototype.distanceSquared=function(o){var i=this.x,c=this.y,h=this.z,v=o.x,p=o.y,f=o.z;return(v-i)*(v-i)+(p-c)*(p-c)+(f-h)*(f-h)},r.prototype.mult=function(o,i){i=i||new r;var c=this.x,h=this.y,v=this.z;return i.x=o*c,i.y=o*h,i.z=o*v,i},r.prototype.scale=r.prototype.mult,r.prototype.dot=function(o){return this.x*o.x+this.y*o.y+this.z*o.z},r.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},r.prototype.negate=function(o){return o=o||new r,o.x=-this.x,o.y=-this.y,o.z=-this.z,o};var a=new r,u=new r;r.prototype.tangents=function(o,i){var c=this.norm();if(c>0){var h=a,v=1/c;h.set(this.x*v,this.y*v,this.z*v);var p=u;Math.abs(h.x)<.9?(p.set(1,0,0),h.cross(p,o)):(p.set(0,1,0),h.cross(p,o)),h.cross(o,i)}else o.set(1,0,0),i.set(0,1,0)},r.prototype.toString=function(){return this.x+","+this.y+","+this.z},r.prototype.toArray=function(){return[this.x,this.y,this.z]},r.prototype.copy=function(o){return this.x=o.x,this.y=o.y,this.z=o.z,this},r.prototype.lerp=function(o,i,c){var h=this.x,v=this.y,p=this.z;c.x=h+(o.x-h)*i,c.y=v+(o.y-v)*i,c.z=p+(o.z-p)*i},r.prototype.almostEquals=function(o,i){return i===void 0&&(i=1e-6),!(Math.abs(this.x-o.x)>i||Math.abs(this.y-o.y)>i||Math.abs(this.z-o.z)>i)},r.prototype.almostZero=function(o){return o===void 0&&(o=1e-6),!(Math.abs(this.x)>o||Math.abs(this.y)>o||Math.abs(this.z)>o)};var d=new r;r.prototype.isAntiparallelTo=function(o,i){return this.negate(d),d.almostEquals(o,i)},r.prototype.clone=function(){return new r(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(e,n,l){n.exports=i;var s=e("../utils/EventTarget");e("../shapes/Shape");var r=e("../math/Vec3"),a=e("../math/Mat3"),u=e("../math/Quaternion");e("../material/Material");var d=e("../collision/AABB"),o=e("../shapes/Box");function i(F){F=F||{},s.apply(this),this.id=i.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new r,this.collisionFilterGroup=typeof F.collisionFilterGroup=="number"?F.collisionFilterGroup:1,this.collisionFilterMask=typeof F.collisionFilterMask=="number"?F.collisionFilterMask:1,this.collisionResponse=!0,this.position=new r,F.position&&this.position.copy(F.position),this.previousPosition=new r,this.initPosition=new r,this.velocity=new r,F.velocity&&this.velocity.copy(F.velocity),this.initVelocity=new r,this.force=new r;var W=typeof F.mass=="number"?F.mass:0;this.mass=W,this.invMass=W>0?1/W:0,this.material=F.material||null,this.linearDamping=typeof F.linearDamping=="number"?F.linearDamping:.01,this.type=W<=0?i.STATIC:i.DYNAMIC,typeof F.type==typeof i.STATIC&&(this.type=F.type),this.allowSleep=typeof F.allowSleep<"u"?F.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof F.sleepSpeedLimit<"u"?F.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof F.sleepTimeLimit<"u"?F.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new r,this.quaternion=new u,F.quaternion&&this.quaternion.copy(F.quaternion),this.initQuaternion=new u,this.angularVelocity=new r,F.angularVelocity&&this.angularVelocity.copy(F.angularVelocity),this.initAngularVelocity=new r,this.interpolatedPosition=new r,this.interpolatedQuaternion=new u,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new r,this.invInertia=new r,this.invInertiaWorld=new a,this.invMassSolve=0,this.invInertiaSolve=new r,this.invInertiaWorldSolve=new a,this.fixedRotation=typeof F.fixedRotation<"u"?F.fixedRotation:!1,this.angularDamping=typeof F.angularDamping<"u"?F.angularDamping:.01,this.aabb=new d,this.aabbNeedsUpdate=!0,this.wlambda=new r,F.shape&&this.addShape(F.shape),this.updateMassProperties()}i.prototype=new s,i.prototype.constructor=i,i.DYNAMIC=1,i.STATIC=2,i.KINEMATIC=4,i.AWAKE=0,i.SLEEPY=1,i.SLEEPING=2,i.idCounter=0,i.prototype.wakeUp=function(){var F=this.sleepState;this.sleepState=0,F===i.SLEEPING&&this.dispatchEvent({type:"wakeup"})},i.prototype.sleep=function(){this.sleepState=i.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},i.sleepyEvent={type:"sleepy"},i.sleepEvent={type:"sleep"},i.prototype.sleepTick=function(F){if(this.allowSleep){var W=this.sleepState,z=this.velocity.norm2()+this.angularVelocity.norm2(),U=Math.pow(this.sleepSpeedLimit,2);W===i.AWAKE&&z<U?(this.sleepState=i.SLEEPY,this.timeLastSleepy=F,this.dispatchEvent(i.sleepyEvent)):W===i.SLEEPY&&z>U?this.wakeUp():W===i.SLEEPY&&F-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(i.sleepEvent))}},i.prototype.updateSolveMassProperties=function(){this.sleepState===i.SLEEPING||this.type===i.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},i.prototype.pointToLocalFrame=function(F,z){var z=z||new r;return F.vsub(this.position,z),this.quaternion.conjugate().vmult(z,z),z},i.prototype.vectorToLocalFrame=function(F,z){var z=z||new r;return this.quaternion.conjugate().vmult(F,z),z},i.prototype.pointToWorldFrame=function(F,z){var z=z||new r;return this.quaternion.vmult(F,z),z.vadd(this.position,z),z},i.prototype.vectorToWorldFrame=function(F,z){var z=z||new r;return this.quaternion.vmult(F,z),z};var c=new r,h=new u;i.prototype.addShape=function(F,W,z){var U=new r,K=new u;return W&&U.copy(W),z&&K.copy(z),this.shapes.push(F),this.shapeOffsets.push(U),this.shapeOrientations.push(K),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},i.prototype.updateBoundingRadius=function(){for(var F=this.shapes,W=this.shapeOffsets,z=F.length,U=0,K=0;K!==z;K++){var tt=F[K];tt.updateBoundingSphereRadius();var k=W[K].norm(),B=tt.boundingSphereRadius;k+B>U&&(U=k+B)}this.boundingRadius=U};var v=new d;i.prototype.computeAABB=function(){for(var F=this.shapes,W=this.shapeOffsets,z=this.shapeOrientations,U=F.length,K=c,tt=h,k=this.quaternion,B=this.aabb,Z=v,X=0;X!==U;X++){var N=F[X];z[X].mult(k,tt),tt.vmult(W[X],K),K.vadd(this.position,K),N.calculateWorldAABB(K,tt,Z.lowerBound,Z.upperBound),X===0?B.copy(Z):B.extend(Z)}this.aabbNeedsUpdate=!1};var p=new a,f=new a;new a,i.prototype.updateInertiaWorld=function(F){var W=this.invInertia;if(!(W.x===W.y&&W.y===W.z&&!F)){var z=p,U=f;z.setRotationFromQuaternion(this.quaternion),z.transpose(U),z.scale(W,z),z.mmult(U,this.invInertiaWorld)}};var g=new r,y=new r;i.prototype.applyForce=function(F,W){if(this.type===i.DYNAMIC){var z=g;W.vsub(this.position,z);var U=y;z.cross(F,U),this.force.vadd(F,this.force),this.torque.vadd(U,this.torque)}};var _=new r,x=new r;i.prototype.applyLocalForce=function(F,W){if(this.type===i.DYNAMIC){var z=_,U=x;this.vectorToWorldFrame(F,z),this.pointToWorldFrame(W,U),this.applyForce(z,U)}};var w=new r,I=new r,V=new r;i.prototype.applyImpulse=function(F,W){if(this.type===i.DYNAMIC){var z=w;W.vsub(this.position,z);var U=I;U.copy(F),U.mult(this.invMass,U),this.velocity.vadd(U,this.velocity);var K=V;z.cross(F,K),this.invInertiaWorld.vmult(K,K),this.angularVelocity.vadd(K,this.angularVelocity)}};var b=new r,T=new r;i.prototype.applyLocalImpulse=function(F,W){if(this.type===i.DYNAMIC){var z=b,U=T;this.vectorToWorldFrame(F,z),this.pointToWorldFrame(W,U),this.applyImpulse(z,U)}};var C=new r;i.prototype.updateMassProperties=function(){var F=C;this.invMass=this.mass>0?1/this.mass:0;var W=this.inertia,z=this.fixedRotation;this.computeAABB(),F.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),o.calculateInertia(F,this.mass,W),this.invInertia.set(W.x>0&&!z?1/W.x:0,W.y>0&&!z?1/W.y:0,W.z>0&&!z?1/W.z:0),this.updateInertiaWorld(!0)},i.prototype.getVelocityAtWorldPoint=function(F,W){var z=new r;return F.vsub(this.position,z),this.angularVelocity.cross(z,W),this.velocity.vadd(W,W),W}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(e,n,l){e("./Body");var s=e("../math/Vec3"),r=e("../math/Quaternion");e("../collision/RaycastResult");var a=e("../collision/Ray"),u=e("../objects/WheelInfo");n.exports=d;function d(k){this.chassisBody=k.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof k.indexRightAxis<"u"?k.indexRightAxis:1,this.indexForwardAxis=typeof k.indexForwardAxis<"u"?k.indexForwardAxis:0,this.indexUpAxis=typeof k.indexUpAxis<"u"?k.indexUpAxis:2}new s,new s,new s;var o=new s,i=new s,c=new s;new a,d.prototype.addWheel=function(k){k=k||{};var B=new u(k),Z=this.wheelInfos.length;return this.wheelInfos.push(B),Z},d.prototype.setSteeringValue=function(k,B){var Z=this.wheelInfos[B];Z.steering=k},new s,d.prototype.applyEngineForce=function(k,B){this.wheelInfos[B].engineForce=k},d.prototype.setBrake=function(k,B){this.wheelInfos[B].brake=k},d.prototype.addToWorld=function(k){this.constraints,k.add(this.chassisBody);var B=this;this.preStepCallback=function(){B.updateVehicle(k.dt)},k.addEventListener("preStep",this.preStepCallback),this.world=k},d.prototype.getVehicleAxisWorld=function(k,B){B.set(k===0?1:0,k===1?1:0,k===2?1:0),this.chassisBody.vectorToWorldFrame(B,B)},d.prototype.updateVehicle=function(k){for(var B=this.wheelInfos,Z=B.length,X=this.chassisBody,N=0;N<Z;N++)this.updateWheelTransform(N);this.currentVehicleSpeedKmHour=3.6*X.velocity.norm();var D=new s;this.getVehicleAxisWorld(this.indexForwardAxis,D),D.dot(X.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var N=0;N<Z;N++)this.castRay(B[N]);this.updateSuspension(k);for(var R=new s,L=new s,N=0;N<Z;N++){var M=B[N],G=M.suspensionForce;G>M.maxSuspensionForce&&(G=M.maxSuspensionForce),M.raycastResult.hitNormalWorld.scale(G*k,R),M.raycastResult.hitPointWorld.vsub(X.position,L),X.applyImpulse(R,M.raycastResult.hitPointWorld)}this.updateFriction(k);var J=new s,$=new s,H=new s;for(N=0;N<Z;N++){var M=B[N];X.getVelocityAtWorldPoint(M.chassisConnectionPointWorld,H);var Q=1;switch(this.indexUpAxis){case 1:Q=-1;break}if(M.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,$);var rt=$.dot(M.raycastResult.hitNormalWorld);M.raycastResult.hitNormalWorld.scale(rt,J),$.vsub(J,$);var wt=$.dot(H);M.deltaRotation=Q*wt*k/M.radius}(M.sliding||!M.isInContact)&&M.engineForce!==0&&M.useCustomSlidingRotationalSpeed&&(M.deltaRotation=(M.engineForce>0?1:-1)*M.customSlidingRotationalSpeed*k),Math.abs(M.brake)>Math.abs(M.engineForce)&&(M.deltaRotation=0),M.rotation+=M.deltaRotation,M.deltaRotation*=.99}},d.prototype.updateSuspension=function(k){for(var B=this.chassisBody,Z=B.mass,X=this.wheelInfos,N=X.length,D=0;D<N;D++){var R=X[D];if(R.isInContact){var L,M=R.suspensionRestLength,G=R.suspensionLength,J=M-G;L=R.suspensionStiffness*J*R.clippedInvContactDotSuspension;var $=R.suspensionRelativeVelocity,H;$<0?H=R.dampingCompression:H=R.dampingRelaxation,L-=H*$,R.suspensionForce=L*Z,R.suspensionForce<0&&(R.suspensionForce=0)}else R.suspensionForce=0}},d.prototype.removeFromWorld=function(k){this.constraints,k.remove(this.chassisBody),k.removeEventListener("preStep",this.preStepCallback),this.world=null};var h=new s,v=new s;d.prototype.castRay=function(k){var B=h,Z=v;this.updateWheelTransformWorld(k);var X=this.chassisBody,N=-1,D=k.suspensionRestLength+k.radius;k.directionWorld.scale(D,B);var R=k.chassisConnectionPointWorld;R.vadd(B,Z);var L=k.raycastResult;L.reset();var M=X.collisionResponse;X.collisionResponse=!1,this.world.rayTest(R,Z,L),X.collisionResponse=M;var G=L.body;if(k.raycastResult.groundObject=0,G){N=L.distance,k.raycastResult.hitNormalWorld=L.hitNormalWorld,k.isInContact=!0;var J=L.distance;k.suspensionLength=J-k.radius;var $=k.suspensionRestLength-k.maxSuspensionTravel,H=k.suspensionRestLength+k.maxSuspensionTravel;k.suspensionLength<$&&(k.suspensionLength=$),k.suspensionLength>H&&(k.suspensionLength=H,k.raycastResult.reset());var Q=k.raycastResult.hitNormalWorld.dot(k.directionWorld),rt=new s;X.getVelocityAtWorldPoint(k.raycastResult.hitPointWorld,rt);var wt=k.raycastResult.hitNormalWorld.dot(rt);if(Q>=-.1)k.suspensionRelativeVelocity=0,k.clippedInvContactDotSuspension=1/.1;else{var bt=-1/Q;k.suspensionRelativeVelocity=wt*bt,k.clippedInvContactDotSuspension=bt}}else k.suspensionLength=k.suspensionRestLength+0*k.maxSuspensionTravel,k.suspensionRelativeVelocity=0,k.directionWorld.scale(-1,k.raycastResult.hitNormalWorld),k.clippedInvContactDotSuspension=1;return N},d.prototype.updateWheelTransformWorld=function(k){k.isInContact=!1;var B=this.chassisBody;B.pointToWorldFrame(k.chassisConnectionPointLocal,k.chassisConnectionPointWorld),B.vectorToWorldFrame(k.directionLocal,k.directionWorld),B.vectorToWorldFrame(k.axleLocal,k.axleWorld)},d.prototype.updateWheelTransform=function(k){var B=o,Z=i,X=c,N=this.wheelInfos[k];this.updateWheelTransformWorld(N),N.directionLocal.scale(-1,B),Z.copy(N.axleLocal),B.cross(Z,X),X.normalize(),Z.normalize();var D=N.steering,R=new r;R.setFromAxisAngle(B,D);var L=new r;L.setFromAxisAngle(Z,N.rotation);var M=N.worldTransform.quaternion;this.chassisBody.quaternion.mult(R,M),M.mult(L,M),M.normalize();var G=N.worldTransform.position;G.copy(N.directionWorld),G.scale(N.suspensionLength,G),G.vadd(N.chassisConnectionPointWorld,G)};var p=[new s(1,0,0),new s(0,1,0),new s(0,0,1)];d.prototype.getWheelTransformWorld=function(k){return this.wheelInfos[k].worldTransform};var f=new s,g=[],y=[],_=1;d.prototype.updateFriction=function(k){for(var B=f,Z=this.wheelInfos,X=Z.length,N=this.chassisBody,D=y,R=g,L=0;L<X;L++){var M=Z[L],G=M.raycastResult.body;M.sideImpulse=0,M.forwardImpulse=0,D[L]||(D[L]=new s),R[L]||(R[L]=new s)}for(var L=0;L<X;L++){var M=Z[L],G=M.raycastResult.body;if(G){var J=R[L],$=this.getWheelTransformWorld(L);$.vectorToWorldFrame(p[this.indexRightAxis],J);var H=M.raycastResult.hitNormalWorld,Q=J.dot(H);H.scale(Q,B),J.vsub(B,J),J.normalize(),H.cross(J,D[L]),D[L].normalize(),M.sideImpulse=tt(N,M.raycastResult.hitPointWorld,G,M.raycastResult.hitPointWorld,J),M.sideImpulse*=_}}var rt=1,wt=.5;this.sliding=!1;for(var L=0;L<X;L++){var M=Z[L],G=M.raycastResult.body,bt=0;if(M.slipInfo=1,G){var Et=0,ct=M.brake?M.brake:Et;bt=V(N,G,M.raycastResult.hitPointWorld,D[L],ct),bt+=M.engineForce*k;var vt=ct/bt;M.slipInfo*=vt}if(M.forwardImpulse=0,M.skidInfo=1,G){M.skidInfo=1;var Ht=M.suspensionForce*k*M.frictionSlip,Pt=Ht,qt=Ht*Pt;M.forwardImpulse=bt;var Rt=M.forwardImpulse*wt,jt=M.sideImpulse*rt,P=Rt*Rt+jt*jt;if(M.sliding=!1,P>qt){this.sliding=!0,M.sliding=!0;var vt=Ht/Math.sqrt(P);M.skidInfo*=vt}}}if(this.sliding)for(var L=0;L<X;L++){var M=Z[L];M.sideImpulse!==0&&M.skidInfo<1&&(M.forwardImpulse*=M.skidInfo,M.sideImpulse*=M.skidInfo)}for(var L=0;L<X;L++){var M=Z[L],E=new s;if(E.copy(M.raycastResult.hitPointWorld),M.forwardImpulse!==0){var et=new s;D[L].scale(M.forwardImpulse,et),N.applyImpulse(et,E)}if(M.sideImpulse!==0){var G=M.raycastResult.body,ft=new s;ft.copy(M.raycastResult.hitPointWorld);var gt=new s;R[L].scale(M.sideImpulse,gt),N.pointToLocalFrame(E,E),E["xyz"[this.indexUpAxis]]*=M.rollInfluence,N.pointToWorldFrame(E,E),N.applyImpulse(gt,E),gt.scale(-1,gt),G.applyImpulse(gt,ft)}}};var x=new s,w=new s,I=new s;function V(k,B,Z,X,N){var D=0,R=Z,L=x,M=w,G=I;k.getVelocityAtWorldPoint(R,L),B.getVelocityAtWorldPoint(R,M),L.vsub(M,G);var J=X.dot(G),$=W(k,Z,X),H=W(B,Z,X),Q=1,rt=Q/($+H);return D=-J*rt,N<D&&(D=N),D<-N&&(D=-N),D}var b=new s,T=new s,C=new s,F=new s;function W(k,B,Z){var X=b,N=T,D=C,R=F;return B.vsub(k.position,X),X.cross(Z,N),k.invInertiaWorld.vmult(N,R),R.cross(X,D),k.invMass+Z.dot(D)}var z=new s,U=new s,K=new s;function tt(k,B,Z,X,N,Q){var R=N.norm2();if(R>1.1)return 0;var L=z,M=U,G=K;k.getVelocityAtWorldPoint(B,L),Z.getVelocityAtWorldPoint(X,M),L.vsub(M,G);var J=N.dot(G),$=.2,H=1/(k.invMass+Z.invMass),Q=-$*J*H;return Q}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(e,n,l){var s=e("./Body"),r=e("../shapes/Sphere"),a=e("../shapes/Box"),u=e("../math/Vec3"),d=e("../constraints/HingeConstraint");n.exports=o;function o(h){if(this.wheelBodies=[],this.coordinateSystem=typeof h.coordinateSystem>"u"?new u(1,2,3):h.coordinateSystem.clone(),this.chassisBody=h.chassisBody,!this.chassisBody){var v=new a(new u(5,2,.5));this.chassisBody=new s(1,v)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}o.prototype.addWheel=function(h){h=h||{};var v=h.body;v||(v=new s(1,new r(1.2))),this.wheelBodies.push(v),this.wheelForces.push(0),new u;var p=typeof h.position<"u"?h.position.clone():new u,f=new u;this.chassisBody.pointToWorldFrame(p,f),v.position.set(f.x,f.y,f.z);var g=typeof h.axis<"u"?h.axis.clone():new u(0,1,0);this.wheelAxes.push(g);var y=new d(this.chassisBody,v,{pivotA:p,axisA:g,pivotB:u.ZERO,axisB:g,collideConnected:!1});return this.constraints.push(y),this.wheelBodies.length-1},o.prototype.setSteeringValue=function(h,v){var p=this.wheelAxes[v],f=Math.cos(h),g=Math.sin(h),y=p.x,_=p.y;this.constraints[v].axisA.set(f*y-g*_,g*y+f*_,0)},o.prototype.setMotorSpeed=function(h,v){var p=this.constraints[v];p.enableMotor(),p.motorTargetVelocity=h},o.prototype.disableMotor=function(h){var v=this.constraints[h];v.disableMotor()};var i=new u;o.prototype.setWheelForce=function(h,v){this.wheelForces[v]=h},o.prototype.applyWheelForce=function(h,v){var p=this.wheelAxes[v],f=this.wheelBodies[v],g=f.torque;p.scale(h,i),f.vectorToWorldFrame(i,i),g.vadd(i,g)},o.prototype.addToWorld=function(h){for(var v=this.constraints,p=this.wheelBodies.concat([this.chassisBody]),f=0;f<p.length;f++)h.add(p[f]);for(var f=0;f<v.length;f++)h.addConstraint(v[f]);h.addEventListener("preStep",this._update.bind(this))},o.prototype._update=function(){for(var h=this.wheelForces,v=0;v<h.length;v++)this.applyWheelForce(h[v],v)},o.prototype.removeFromWorld=function(h){for(var v=this.constraints,p=this.wheelBodies.concat([this.chassisBody]),f=0;f<p.length;f++)h.remove(p[f]);for(var f=0;f<v.length;f++)h.removeConstraint(v[f])};var c=new u;o.prototype.getWheelSpeed=function(h){var v=this.wheelAxes[h],p=this.wheelBodies[h],f=p.angularVelocity;return this.chassisBody.vectorToWorldFrame(v,c),f.dot(c)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(e,n,l){n.exports=r,e("../shapes/Shape");var s=e("../math/Vec3");e("../math/Quaternion"),e("../shapes/Particle"),e("../objects/Body"),e("../material/Material");function r(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}r.prototype.add=function(v){this.particles.push(v),this.neighbors.length<this.particles.length&&this.neighbors.push([])},r.prototype.remove=function(v){var p=this.particles.indexOf(v);p!==-1&&(this.particles.splice(p,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var a=new s;r.prototype.getNeighbors=function(v,p){for(var f=this.particles.length,g=v.id,y=this.smoothingRadius*this.smoothingRadius,_=a,x=0;x!==f;x++){var w=this.particles[x];w.position.vsub(v.position,_),g!==w.id&&_.norm2()<y&&p.push(w)}};var u=new s,d=new s,o=new s,i=new s,c=new s,h=new s;r.prototype.update=function(){for(var v=this.particles.length,p=u,f=this.speedOfSound,g=this.eps,y=0;y!==v;y++){var _=this.particles[y],x=this.neighbors[y];x.length=0,this.getNeighbors(_,x),x.push(this.particles[y]);for(var w=x.length,I=0,V=0;V!==w;V++){_.position.vsub(x[V].position,p);var b=p.norm(),T=this.w(b);I+=x[V].mass*T}this.densities[y]=I,this.pressures[y]=f*f*(this.densities[y]-this.density)}for(var C=d,F=o,W=i,z=c,U=h,y=0;y!==v;y++){var K=this.particles[y];C.set(0,0,0),F.set(0,0,0);for(var tt,k,x=this.neighbors[y],w=x.length,V=0;V!==w;V++){var B=x[V];K.position.vsub(B.position,z);var Z=z.norm();tt=-B.mass*(this.pressures[y]/(this.densities[y]*this.densities[y]+g)+this.pressures[V]/(this.densities[V]*this.densities[V]+g)),this.gradw(z,W),W.mult(tt,W),C.vadd(W,C),B.velocity.vsub(K.velocity,U),U.mult(1/(1e-4+this.densities[y]*this.densities[V])*this.viscosity*B.mass,U),k=this.nablaw(Z),U.mult(k,U),F.vadd(U,F)}F.mult(K.mass,F),C.mult(K.mass,C),K.force.vadd(F,K.force),K.force.vadd(C,K.force)}},r.prototype.w=function(v){var p=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(p,9))*Math.pow(p*p-v*v,3)},r.prototype.gradw=function(v,p){var f=v.norm(),g=this.smoothingRadius;v.mult(945/(32*Math.PI*Math.pow(g,9))*Math.pow(g*g-f*f,2),p)},r.prototype.nablaw=function(v){var p=this.smoothingRadius,f=945/(32*Math.PI*Math.pow(p,9))*(p*p-v*v)*(7*v*v-3*p*p);return f}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(e,n,l){var s=e("../math/Vec3");n.exports=r;function r(y,_,x){x=x||{},this.restLength=typeof x.restLength=="number"?x.restLength:1,this.stiffness=x.stiffness||100,this.damping=x.damping||1,this.bodyA=y,this.bodyB=_,this.localAnchorA=new s,this.localAnchorB=new s,x.localAnchorA&&this.localAnchorA.copy(x.localAnchorA),x.localAnchorB&&this.localAnchorB.copy(x.localAnchorB),x.worldAnchorA&&this.setWorldAnchorA(x.worldAnchorA),x.worldAnchorB&&this.setWorldAnchorB(x.worldAnchorB)}r.prototype.setWorldAnchorA=function(y){this.bodyA.pointToLocalFrame(y,this.localAnchorA)},r.prototype.setWorldAnchorB=function(y){this.bodyB.pointToLocalFrame(y,this.localAnchorB)},r.prototype.getWorldAnchorA=function(y){this.bodyA.pointToWorldFrame(this.localAnchorA,y)},r.prototype.getWorldAnchorB=function(y){this.bodyB.pointToWorldFrame(this.localAnchorB,y)};var a=new s,u=new s,d=new s,o=new s,i=new s,c=new s,h=new s,v=new s,p=new s,f=new s,g=new s;r.prototype.applyForce=function(){var y=this.stiffness,_=this.damping,x=this.restLength,w=this.bodyA,I=this.bodyB,V=a,b=u,T=d,C=o,F=g,W=i,z=c,U=h,K=v,tt=p,k=f;this.getWorldAnchorA(W),this.getWorldAnchorB(z),W.vsub(w.position,U),z.vsub(I.position,K),z.vsub(W,V);var B=V.norm();b.copy(V),b.normalize(),I.velocity.vsub(w.velocity,T),I.angularVelocity.cross(K,F),T.vadd(F,T),w.angularVelocity.cross(U,F),T.vsub(F,T),b.mult(-y*(B-x)-_*T.dot(b),C),w.force.vsub(C,w.force),I.force.vadd(C,I.force),U.cross(C,tt),K.cross(C,k),w.torque.vsub(tt,w.torque),I.torque.vadd(k,I.torque)}},{"../math/Vec3":30}],36:[function(e,n,l){var s=e("../math/Vec3"),r=e("../math/Transform"),a=e("../collision/RaycastResult"),u=e("../utils/Utils");n.exports=d;function d(c){c=u.defaults(c,{chassisConnectionPointLocal:new s,chassisConnectionPointWorld:new s,directionLocal:new s,directionWorld:new s,axleLocal:new s,axleWorld:new s,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=c.maxSuspensionTravel,this.customSlidingRotationalSpeed=c.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=c.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=c.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=c.chassisConnectionPointWorld.clone(),this.directionLocal=c.directionLocal.clone(),this.directionWorld=c.directionWorld.clone(),this.axleLocal=c.axleLocal.clone(),this.axleWorld=c.axleWorld.clone(),this.suspensionRestLength=c.suspensionRestLength,this.suspensionMaxLength=c.suspensionMaxLength,this.radius=c.radius,this.suspensionStiffness=c.suspensionStiffness,this.dampingCompression=c.dampingCompression,this.dampingRelaxation=c.dampingRelaxation,this.frictionSlip=c.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=c.rollInfluence,this.maxSuspensionForce=c.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=c.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new a,this.worldTransform=new r,this.isInContact=!1}var i=new s,o=new s,i=new s;d.prototype.updateWheel=function(c){var h=this.raycastResult;if(this.isInContact){var v=h.hitNormalWorld.dot(h.directionWorld);h.hitPointWorld.vsub(c.position,o),c.getVelocityAtWorldPoint(o,i);var p=h.hitNormalWorld.dot(i);if(v>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var f=-1/v;this.suspensionRelativeVelocity=p*f,this.clippedInvContactDotSuspension=f}}else h.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,h.directionWorld.scale(-1,h.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(e,n,l){n.exports=u;var s=e("./Shape"),r=e("../math/Vec3"),a=e("./ConvexPolyhedron");function u(i){s.call(this),this.type=s.types.BOX,this.halfExtents=i,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}u.prototype=new s,u.prototype.constructor=u,u.prototype.updateConvexPolyhedronRepresentation=function(){var i=this.halfExtents.x,c=this.halfExtents.y,h=this.halfExtents.z,v=r,p=[new v(-i,-c,-h),new v(i,-c,-h),new v(i,c,-h),new v(-i,c,-h),new v(-i,-c,h),new v(i,-c,h),new v(i,c,h),new v(-i,c,h)],f=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new v(0,0,1),new v(0,1,0),new v(1,0,0);var g=new a(p,f);this.convexPolyhedronRepresentation=g,g.material=this.material},u.prototype.calculateLocalInertia=function(i,c){return c=c||new r,u.calculateInertia(this.halfExtents,i,c),c},u.calculateInertia=function(i,c,h){var v=i;h.x=1/12*c*(2*v.y*2*v.y+2*v.z*2*v.z),h.y=1/12*c*(2*v.x*2*v.x+2*v.z*2*v.z),h.z=1/12*c*(2*v.y*2*v.y+2*v.x*2*v.x)},u.prototype.getSideNormals=function(i,c){var h=i,v=this.halfExtents;if(h[0].set(v.x,0,0),h[1].set(0,v.y,0),h[2].set(0,0,v.z),h[3].set(-v.x,0,0),h[4].set(0,-v.y,0),h[5].set(0,0,-v.z),c!==void 0)for(var p=0;p!==h.length;p++)c.vmult(h[p],h[p]);return h},u.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},u.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var d=new r;new r,u.prototype.forEachWorldCorner=function(i,c,h){for(var v=this.halfExtents,p=[[v.x,v.y,v.z],[-v.x,v.y,v.z],[-v.x,-v.y,v.z],[-v.x,-v.y,-v.z],[v.x,-v.y,-v.z],[v.x,v.y,-v.z],[-v.x,v.y,-v.z],[v.x,-v.y,v.z]],f=0;f<p.length;f++)d.set(p[f][0],p[f][1],p[f][2]),c.vmult(d,d),i.vadd(d,d),h(d.x,d.y,d.z)};var o=[new r,new r,new r,new r,new r,new r,new r,new r];u.prototype.calculateWorldAABB=function(i,c,h,v){var p=this.halfExtents;o[0].set(p.x,p.y,p.z),o[1].set(-p.x,p.y,p.z),o[2].set(-p.x,-p.y,p.z),o[3].set(-p.x,-p.y,-p.z),o[4].set(p.x,-p.y,-p.z),o[5].set(p.x,p.y,-p.z),o[6].set(-p.x,p.y,-p.z),o[7].set(p.x,-p.y,p.z);var f=o[0];c.vmult(f,f),i.vadd(f,f),v.copy(f),h.copy(f);for(var g=1;g<8;g++){var f=o[g];c.vmult(f,f),i.vadd(f,f);var y=f.x,_=f.y,x=f.z;y>v.x&&(v.x=y),_>v.y&&(v.y=_),x>v.z&&(v.z=x),y<h.x&&(h.x=y),_<h.y&&(h.y=_),x<h.z&&(h.z=x)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(e,n,l){n.exports=u;var s=e("./Shape"),r=e("../math/Vec3");e("../math/Quaternion");var a=e("../math/Transform");function u(N,D,R){s.call(this),this.type=s.types.CONVEXPOLYHEDRON,this.vertices=N||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=D||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=R?R.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}u.prototype=new s,u.prototype.constructor=u;var d=new r;u.prototype.computeEdges=function(){var N=this.faces,D=this.vertices;D.length;var R=this.uniqueEdges;R.length=0;for(var L=d,M=0;M!==N.length;M++)for(var G=N[M],J=G.length,$=0;$!==J;$++){var H=($+1)%J;D[G[$]].vsub(D[G[H]],L),L.normalize();for(var Q=!1,rt=0;rt!==R.length;rt++)if(R[rt].almostEquals(L)||R[rt].almostEquals(L)){Q=!0;break}Q||R.push(L.clone())}},u.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var N=0;N<this.faces.length;N++){for(var D=0;D<this.faces[N].length;D++)if(!this.vertices[this.faces[N][D]])throw new Error("Vertex "+this.faces[N][D]+" not found!");var R=this.faceNormals[N]||new r;this.getFaceNormal(N,R),R.negate(R),this.faceNormals[N]=R;var L=this.vertices[this.faces[N][0]];if(R.dot(L)<0){console.error(".faceNormals["+N+"] = Vec3("+R.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var D=0;D<this.faces[N].length;D++)console.warn(".vertices["+this.faces[N][D]+"] = Vec3("+this.vertices[this.faces[N][D]].toString()+")")}}};var o=new r,i=new r;u.computeNormal=function(N,D,R,L){D.vsub(N,i),R.vsub(D,o),o.cross(i,L),L.isZero()||L.normalize()},u.prototype.getFaceNormal=function(N,D){var R=this.faces[N],L=this.vertices[R[0]],M=this.vertices[R[1]],G=this.vertices[R[2]];return u.computeNormal(L,M,G,D)};var c=new r;u.prototype.clipAgainstHull=function(N,D,R,L,M,G,J,$,H){for(var Q=c,rt=-1,wt=-Number.MAX_VALUE,bt=0;bt<R.faces.length;bt++){Q.copy(R.faceNormals[bt]),M.vmult(Q,Q);var Et=Q.dot(G);Et>wt&&(wt=Et,rt=bt)}for(var ct=[],vt=R.faces[rt],Ht=vt.length,Pt=0;Pt<Ht;Pt++){var qt=R.vertices[vt[Pt]],Rt=new r;Rt.copy(qt),M.vmult(Rt,Rt),L.vadd(Rt,Rt),ct.push(Rt)}rt>=0&&this.clipFaceAgainstHull(G,N,D,ct,J,$,H)};var h=new r,v=new r,p=new r,f=new r,g=new r,y=new r;u.prototype.findSeparatingAxis=function(N,D,R,L,M,G,J,$){var H=h,Q=v,rt=p,wt=f,bt=g,Et=y,ct=Number.MAX_VALUE,vt=this;if(vt.uniqueAxes)for(var Pt=0;Pt!==vt.uniqueAxes.length;Pt++){R.vmult(vt.uniqueAxes[Pt],H);var Rt=vt.testSepAxis(H,N,D,R,L,M);if(Rt===!1)return!1;Rt<ct&&(ct=Rt,G.copy(H))}else for(var Ht=J?J.length:vt.faces.length,Pt=0;Pt<Ht;Pt++){var qt=J?J[Pt]:Pt;H.copy(vt.faceNormals[qt]),R.vmult(H,H);var Rt=vt.testSepAxis(H,N,D,R,L,M);if(Rt===!1)return!1;Rt<ct&&(ct=Rt,G.copy(H))}if(N.uniqueAxes)for(var Pt=0;Pt!==N.uniqueAxes.length;Pt++){M.vmult(N.uniqueAxes[Pt],Q);var Rt=vt.testSepAxis(Q,N,D,R,L,M);if(Rt===!1)return!1;Rt<ct&&(ct=Rt,G.copy(Q))}else for(var jt=$?$.length:N.faces.length,Pt=0;Pt<jt;Pt++){var qt=$?$[Pt]:Pt;Q.copy(N.faceNormals[qt]),M.vmult(Q,Q);var Rt=vt.testSepAxis(Q,N,D,R,L,M);if(Rt===!1)return!1;Rt<ct&&(ct=Rt,G.copy(Q))}for(var P=0;P!==vt.uniqueEdges.length;P++){R.vmult(vt.uniqueEdges[P],wt);for(var E=0;E!==N.uniqueEdges.length;E++)if(M.vmult(N.uniqueEdges[E],bt),wt.cross(bt,Et),!Et.almostZero()){Et.normalize();var et=vt.testSepAxis(Et,N,D,R,L,M);if(et===!1)return!1;et<ct&&(ct=et,G.copy(Et))}}return L.vsub(D,rt),rt.dot(G)>0&&G.negate(G),!0};var _=[],x=[];u.prototype.testSepAxis=function(N,D,R,L,M,G){var J=this;u.project(J,N,R,L,_),u.project(D,N,M,G,x);var $=_[0],H=_[1],Q=x[0],rt=x[1],wt=$-rt,bt=Q-H,Et=wt<bt?wt:bt;return Et};var w=new r,I=new r;u.prototype.calculateLocalInertia=function(N,D){this.computeLocalAABB(w,I);var R=I.x-w.x,L=I.y-w.y,M=I.z-w.z;D.x=1/12*N*(2*L*2*L+2*M*2*M),D.y=1/12*N*(2*R*2*R+2*M*2*M),D.z=1/12*N*(2*L*2*L+2*R*2*R)},u.prototype.getPlaneConstantOfFace=function(N){var D=this.faces[N],R=this.faceNormals[N],L=this.vertices[D[0]],M=-R.dot(L);return M};var V=new r,b=new r,T=new r,C=new r,F=new r,W=new r,z=new r,U=new r;u.prototype.clipFaceAgainstHull=function(N,D,R,L,M,G,J){for(var $=V,H=b,Q=T,rt=C,wt=F,bt=W,Et=z,ct=U,vt=this,Ht=[],Pt=L,qt=Ht,Rt=-1,jt=Number.MAX_VALUE,P=0;P<vt.faces.length;P++){$.copy(vt.faceNormals[P]),R.vmult($,$);var E=$.dot(N);E<jt&&(jt=E,Rt=P)}if(!(Rt<0)){var et=vt.faces[Rt];et.connectedFaces=[];for(var ft=0;ft<vt.faces.length;ft++)for(var gt=0;gt<vt.faces[ft].length;gt++)et.indexOf(vt.faces[ft][gt])!==-1&&ft!==Rt&&et.connectedFaces.indexOf(ft)===-1&&et.connectedFaces.push(ft);Pt.length;for(var Mt=et.length,Dt=0;Dt<Mt;Dt++){var At=vt.vertices[et[Dt]],ht=vt.vertices[et[(Dt+1)%Mt]];At.vsub(ht,H),Q.copy(H),R.vmult(Q,Q),D.vadd(Q,Q),rt.copy(this.faceNormals[Rt]),R.vmult(rt,rt),D.vadd(rt,rt),Q.cross(rt,wt),wt.negate(wt),bt.copy(At),R.vmult(bt,bt),D.vadd(bt,bt),-bt.dot(wt);var Ot;{var Wt=et.connectedFaces[Dt];Et.copy(this.faceNormals[Wt]);var Bt=this.getPlaneConstantOfFace(Wt);ct.copy(Et),R.vmult(ct,ct);var Ot=Bt-ct.dot(D)}for(this.clipFaceAgainstPlane(Pt,qt,ct,Ot);Pt.length;)Pt.shift();for(;qt.length;)Pt.push(qt.shift())}Et.copy(this.faceNormals[Rt]);var Bt=this.getPlaneConstantOfFace(Rt);ct.copy(Et),R.vmult(ct,ct);for(var Ot=Bt-ct.dot(D),ft=0;ft<Pt.length;ft++){var Nt=ct.dot(Pt[ft])+Ot;if(Nt<=M&&(console.log("clamped: depth="+Nt+" to minDist="+(M+"")),Nt=M),Nt<=G){var Ut=Pt[ft];if(Nt<=0){var $t={point:Ut,normal:ct,depth:Nt};J.push($t)}}}}},u.prototype.clipFaceAgainstPlane=function(N,D,R,L){var M,G,J=N.length;if(J<2)return D;var $=N[N.length-1],H=N[0];M=R.dot($)+L;for(var Q=0;Q<J;Q++){if(H=N[Q],G=R.dot(H)+L,M<0)if(G<0){var rt=new r;rt.copy(H),D.push(rt)}else{var rt=new r;$.lerp(H,M/(M-G),rt),D.push(rt)}else if(G<0){var rt=new r;$.lerp(H,M/(M-G),rt),D.push(rt),D.push(H)}$=H,M=G}return D},u.prototype.computeWorldVertices=function(N,D){for(var R=this.vertices.length;this.worldVertices.length<R;)this.worldVertices.push(new r);for(var L=this.vertices,M=this.worldVertices,G=0;G!==R;G++)D.vmult(L[G],M[G]),N.vadd(M[G],M[G]);this.worldVerticesNeedsUpdate=!1},new r,u.prototype.computeLocalAABB=function(N,D){var R=this.vertices.length,L=this.vertices;N.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),D.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var M=0;M<R;M++){var G=L[M];G.x<N.x?N.x=G.x:G.x>D.x&&(D.x=G.x),G.y<N.y?N.y=G.y:G.y>D.y&&(D.y=G.y),G.z<N.z?N.z=G.z:G.z>D.z&&(D.z=G.z)}},u.prototype.computeWorldFaceNormals=function(N){for(var D=this.faceNormals.length;this.worldFaceNormals.length<D;)this.worldFaceNormals.push(new r);for(var R=this.faceNormals,L=this.worldFaceNormals,M=0;M!==D;M++)N.vmult(R[M],L[M]);this.worldFaceNormalsNeedsUpdate=!1},u.prototype.updateBoundingSphereRadius=function(){for(var N=0,D=this.vertices,R=0,L=D.length;R!==L;R++){var M=D[R].norm2();M>N&&(N=M)}this.boundingSphereRadius=Math.sqrt(N)};var K=new r;u.prototype.calculateWorldAABB=function(N,D,R,L){for(var M=this.vertices.length,G=this.vertices,J,$,H,Q,rt,wt,bt=0;bt<M;bt++){K.copy(G[bt]),D.vmult(K,K),N.vadd(K,K);var Et=K;Et.x<J||J===void 0?J=Et.x:(Et.x>Q||Q===void 0)&&(Q=Et.x),Et.y<$||$===void 0?$=Et.y:(Et.y>rt||rt===void 0)&&(rt=Et.y),Et.z<H||H===void 0?H=Et.z:(Et.z>wt||wt===void 0)&&(wt=Et.z)}R.set(J,$,H),L.set(Q,rt,wt)},u.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},u.prototype.getAveragePointLocal=function(N){N=N||new r;for(var D=this.vertices.length,R=this.vertices,L=0;L<D;L++)N.vadd(R[L],N);return N.mult(1/D,N),N},u.prototype.transformAllPoints=function(N,D){var R=this.vertices.length,L=this.vertices;if(D){for(var M=0;M<R;M++){var G=L[M];D.vmult(G,G)}for(var M=0;M<this.faceNormals.length;M++){var G=this.faceNormals[M];D.vmult(G,G)}}if(N)for(var M=0;M<R;M++){var G=L[M];G.vadd(N,G)}};var tt=new r,k=new r,B=new r;u.prototype.pointIsInside=function(N){var D=this.vertices.length,R=this.vertices,L=this.faces,M=this.faceNormals,G=null,J=this.faces.length,$=tt;this.getAveragePointLocal($);for(var H=0;H<J;H++){this.faces[H].length;var D=M[H],Q=R[L[H][0]],rt=k;N.vsub(Q,rt);var wt=D.dot(rt),bt=B;$.vsub(Q,bt);var Et=D.dot(bt);if(wt<0&&Et>0||wt>0&&Et<0)return!1}return G?1:-1},new r;var Z=new r,X=new r;u.project=function(N,D,R,L,M){var G=N.vertices.length,J=Z,$=0,H=0,Q=X,rt=N.vertices;Q.setZero(),a.vectorToLocalFrame(R,L,D,J),a.pointToLocalFrame(R,L,Q,Q);var wt=Q.dot(J);H=$=rt[0].dot(J);for(var bt=1;bt<G;bt++){var Et=rt[bt].dot(J);Et>$&&($=Et),Et<H&&(H=Et)}if(H-=wt,$-=wt,H>$){var ct=H;H=$,$=ct}M[0]=$,M[1]=H}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(e,n,l){n.exports=u;var s=e("./Shape"),r=e("../math/Vec3");e("../math/Quaternion");var a=e("./ConvexPolyhedron");function u(d,o,i,c){var h=c,v=[],p=[],f=[],g=[],y=[],_=Math.cos,x=Math.sin;v.push(new r(o*_(0),o*x(0),-i*.5)),g.push(0),v.push(new r(d*_(0),d*x(0),i*.5)),y.push(1);for(var w=0;w<h;w++){var I=2*Math.PI/h*(w+1),V=2*Math.PI/h*(w+.5);w<h-1?(v.push(new r(o*_(I),o*x(I),-i*.5)),g.push(2*w+2),v.push(new r(d*_(I),d*x(I),i*.5)),y.push(2*w+3),f.push([2*w+2,2*w+3,2*w+1,2*w])):f.push([0,1,2*w+1,2*w]),(h%2===1||w<h/2)&&p.push(new r(_(V),x(V),0))}f.push(y),p.push(new r(0,0,1));for(var b=[],w=0;w<g.length;w++)b.push(g[g.length-w-1]);f.push(b),this.type=s.types.CONVEXPOLYHEDRON,a.call(this,v,f,p)}u.prototype=new a},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(e,n,l){var s=e("./Shape"),r=e("./ConvexPolyhedron"),a=e("../math/Vec3"),u=e("../utils/Utils");n.exports=d;function d(o,i){i=u.defaults(i,{maxValue:null,minValue:null,elementSize:1}),this.data=o,this.maxValue=i.maxValue,this.minValue=i.minValue,this.elementSize=i.elementSize,i.minValue===null&&this.updateMinValue(),i.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,s.call(this),this.pillarConvex=new r,this.pillarOffset=new a,this.type=s.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}d.prototype=new s,d.prototype.update=function(){this._cachedPillars={}},d.prototype.updateMinValue=function(){for(var o=this.data,i=o[0][0],c=0;c!==o.length;c++)for(var h=0;h!==o[c].length;h++){var v=o[c][h];v<i&&(i=v)}this.minValue=i},d.prototype.updateMaxValue=function(){for(var o=this.data,i=o[0][0],c=0;c!==o.length;c++)for(var h=0;h!==o[c].length;h++){var v=o[c][h];v>i&&(i=v)}this.maxValue=i},d.prototype.setHeightValueAtIndex=function(o,i,c){var h=this.data;h[o][i]=c,this.clearCachedConvexTrianglePillar(o,i,!1),o>0&&(this.clearCachedConvexTrianglePillar(o-1,i,!0),this.clearCachedConvexTrianglePillar(o-1,i,!1)),i>0&&(this.clearCachedConvexTrianglePillar(o,i-1,!0),this.clearCachedConvexTrianglePillar(o,i-1,!1)),i>0&&o>0&&this.clearCachedConvexTrianglePillar(o-1,i-1,!0)},d.prototype.getRectMinMax=function(o,i,c,h,v){v=v||[];for(var p=this.data,f=this.minValue,g=o;g<=c;g++)for(var y=i;y<=h;y++){var _=p[g][y];_>f&&(f=_)}v[0]=this.minValue,v[1]=f},d.prototype.getIndexOfPosition=function(o,i,c,h){var v=this.elementSize,p=this.data,f=Math.floor(o/v),g=Math.floor(i/v);return c[0]=f,c[1]=g,h&&(f<0&&(f=0),g<0&&(g=0),f>=p.length-1&&(f=p.length-1),g>=p[0].length-1&&(g=p[0].length-1)),!(f<0||g<0||f>=p.length-1||g>=p[0].length-1)},d.prototype.getHeightAt=function(o,i,c){var h=[];this.getIndexOfPosition(o,i,h,c);var v=[];return this.getRectMinMax(h[0],h[1]+1,h[0],h[1]+1,v),(v[0]+v[1])/2},d.prototype.getCacheConvexTrianglePillarKey=function(o,i,c){return o+"_"+i+"_"+(c?1:0)},d.prototype.getCachedConvexTrianglePillar=function(o,i,c){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(o,i,c)]},d.prototype.setCachedConvexTrianglePillar=function(o,i,c,h,v){this._cachedPillars[this.getCacheConvexTrianglePillarKey(o,i,c)]={convex:h,offset:v}},d.prototype.clearCachedConvexTrianglePillar=function(o,i,c){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(o,i,c)]},d.prototype.getConvexTrianglePillar=function(o,i,c){var h=this.pillarConvex,v=this.pillarOffset;if(this.cacheEnabled){var p=this.getCachedConvexTrianglePillar(o,i,c);if(p){this.pillarConvex=p.convex,this.pillarOffset=p.offset;return}h=new r,v=new a,this.pillarConvex=h,this.pillarOffset=v}var p=this.data,f=this.elementSize,g=h.faces;h.vertices.length=6;for(var y=0;y<6;y++)h.vertices[y]||(h.vertices[y]=new a);g.length=5;for(var y=0;y<5;y++)g[y]||(g[y]=[]);var _=h.vertices,x=(Math.min(p[o][i],p[o+1][i],p[o][i+1],p[o+1][i+1])-this.minValue)/2+this.minValue;c?(v.set((o+.75)*f,(i+.75)*f,x),_[0].set(.25*f,.25*f,p[o+1][i+1]-x),_[1].set(-.75*f,.25*f,p[o][i+1]-x),_[2].set(.25*f,-.75*f,p[o+1][i]-x),_[3].set(.25*f,.25*f,-x-1),_[4].set(-.75*f,.25*f,-x-1),_[5].set(.25*f,-.75*f,-x-1),g[0][0]=0,g[0][1]=1,g[0][2]=2,g[1][0]=5,g[1][1]=4,g[1][2]=3,g[2][0]=2,g[2][1]=5,g[2][2]=3,g[2][3]=0,g[3][0]=3,g[3][1]=4,g[3][2]=1,g[3][3]=0,g[4][0]=1,g[4][1]=4,g[4][2]=5,g[4][3]=2):(v.set((o+.25)*f,(i+.25)*f,x),_[0].set(-.25*f,-.25*f,p[o][i]-x),_[1].set(.75*f,-.25*f,p[o+1][i]-x),_[2].set(-.25*f,.75*f,p[o][i+1]-x),_[3].set(-.25*f,-.25*f,-x-1),_[4].set(.75*f,-.25*f,-x-1),_[5].set(-.25*f,.75*f,-x-1),g[0][0]=0,g[0][1]=1,g[0][2]=2,g[1][0]=5,g[1][1]=4,g[1][2]=3,g[2][0]=0,g[2][1]=2,g[2][2]=5,g[2][3]=3,g[3][0]=1,g[3][1]=0,g[3][2]=3,g[3][3]=4,g[4][0]=4,g[4][1]=5,g[4][2]=2,g[4][3]=1),h.computeNormals(),h.computeEdges(),h.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(o,i,c,h,v)},d.prototype.calculateLocalInertia=function(o,i){return i=i||new a,i.set(0,0,0),i},d.prototype.volume=function(){return Number.MAX_VALUE},d.prototype.calculateWorldAABB=function(o,i,c,h){c.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),h.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},d.prototype.updateBoundingSphereRadius=function(){var o=this.data,i=this.elementSize;this.boundingSphereRadius=new a(o.length*i,o[0].length*i,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(e,n,l){n.exports=a;var s=e("./Shape"),r=e("../math/Vec3");function a(){s.call(this),this.type=s.types.PARTICLE}a.prototype=new s,a.prototype.constructor=a,a.prototype.calculateLocalInertia=function(u,d){return d=d||new r,d.set(0,0,0),d},a.prototype.volume=function(){return 0},a.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},a.prototype.calculateWorldAABB=function(u,d,o,i){o.copy(u),i.copy(u)}},{"../math/Vec3":30,"./Shape":43}],42:[function(e,n,l){n.exports=a;var s=e("./Shape"),r=e("../math/Vec3");function a(){s.call(this),this.type=s.types.PLANE,this.worldNormal=new r,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}a.prototype=new s,a.prototype.constructor=a,a.prototype.computeWorldNormal=function(d){var o=this.worldNormal;o.set(0,0,1),d.vmult(o,o),this.worldNormalNeedsUpdate=!1},a.prototype.calculateLocalInertia=function(d,o){return o=o||new r,o},a.prototype.volume=function(){return Number.MAX_VALUE};var u=new r;a.prototype.calculateWorldAABB=function(d,o,i,c){u.set(0,0,1),o.vmult(u,u);var h=Number.MAX_VALUE;i.set(-h,-h,-h),c.set(h,h,h),u.x===1&&(c.x=d.x),u.y===1&&(c.y=d.y),u.z===1&&(c.z=d.z),u.x===-1&&(i.x=d.x),u.y===-1&&(i.y=d.y),u.z===-1&&(i.z=d.z)},a.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(e,n,l){n.exports=s;var s=e("./Shape");e("../math/Vec3"),e("../math/Quaternion"),e("../material/Material");function s(){this.id=s.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}s.prototype.constructor=s,s.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},s.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},s.prototype.calculateLocalInertia=function(r,a){throw"calculateLocalInertia() not implemented for shape type "+this.type},s.idCounter=0,s.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(e,n,l){n.exports=a;var s=e("./Shape"),r=e("../math/Vec3");function a(u){if(s.call(this),this.radius=u!==void 0?Number(u):1,this.type=s.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}a.prototype=new s,a.prototype.constructor=a,a.prototype.calculateLocalInertia=function(u,d){d=d||new r;var o=2*u*this.radius*this.radius/5;return d.x=o,d.y=o,d.z=o,d},a.prototype.volume=function(){return 4*Math.PI*this.radius/3},a.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},a.prototype.calculateWorldAABB=function(u,d,o,i){for(var c=this.radius,h=["x","y","z"],v=0;v<h.length;v++){var p=h[v];o[p]=u[p]-c,i[p]=u[p]+c}}},{"../math/Vec3":30,"./Shape":43}],45:[function(e,n,l){n.exports=o;var s=e("./Shape"),r=e("../math/Vec3");e("../math/Quaternion");var a=e("../math/Transform"),u=e("../collision/AABB"),d=e("../utils/Octree");function o(b,T){s.call(this),this.type=s.types.TRIMESH,this.vertices=new Float32Array(b),this.indices=new Int16Array(T),this.normals=new Float32Array(T.length),this.aabb=new u,this.edges=null,this.scale=new r(1,1,1),this.tree=new d,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}o.prototype=new s,o.prototype.constructor=o;var i=new r;o.prototype.updateTree=function(){var b=this.tree;b.reset(),b.aabb.copy(this.aabb);var T=this.scale;b.aabb.lowerBound.x*=1/T.x,b.aabb.lowerBound.y*=1/T.y,b.aabb.lowerBound.z*=1/T.z,b.aabb.upperBound.x*=1/T.x,b.aabb.upperBound.y*=1/T.y,b.aabb.upperBound.z*=1/T.z;for(var C=new u,F=new r,W=new r,z=new r,U=[F,W,z],K=0;K<this.indices.length/3;K++){var tt=K*3;this._getUnscaledVertex(this.indices[tt],F),this._getUnscaledVertex(this.indices[tt+1],W),this._getUnscaledVertex(this.indices[tt+2],z),C.setFromPoints(U),b.insert(C,K)}b.removeEmptyNodes()};var c=new u;o.prototype.getTrianglesInAABB=function(b,T){c.copy(b);var C=this.scale,F=C.x,W=C.y,z=C.z,U=c.lowerBound,K=c.upperBound;return U.x/=F,U.y/=W,U.z/=z,K.x/=F,K.y/=W,K.z/=z,this.tree.aabbQuery(c,T)},o.prototype.setScale=function(b){var T=this.scale.x===this.scale.y===this.scale.z,C=b.x===b.y===b.z;T&&C||this.updateNormals(),this.scale.copy(b),this.updateAABB(),this.updateBoundingSphereRadius()},o.prototype.updateNormals=function(){for(var b=i,T=this.normals,C=0;C<this.indices.length/3;C++){var F=C*3,W=this.indices[F],z=this.indices[F+1],U=this.indices[F+2];this.getVertex(W,g),this.getVertex(z,y),this.getVertex(U,_),o.computeNormal(y,g,_,b),T[F]=b.x,T[F+1]=b.y,T[F+2]=b.z}},o.prototype.updateEdges=function(){for(var b={},T=function(tt,k){var B=W<z?W+"_"+z:z+"_"+W;b[B]=!0},C=0;C<this.indices.length/3;C++){var F=C*3,W=this.indices[F],z=this.indices[F+1];this.indices[F+2],T(),T(),T()}var U=Object.keys(b);this.edges=new Int16Array(U.length*2);for(var C=0;C<U.length;C++){var K=U[C].split("_");this.edges[2*C]=parseInt(K[0],10),this.edges[2*C+1]=parseInt(K[1],10)}},o.prototype.getEdgeVertex=function(b,T,C){var F=this.edges[b*2+(T?1:0)];this.getVertex(F,C)};var h=new r,v=new r;o.prototype.getEdgeVector=function(b,T){var C=h,F=v;this.getEdgeVertex(b,0,C),this.getEdgeVertex(b,1,F),F.vsub(C,T)};var p=new r,f=new r;o.computeNormal=function(b,T,C,F){T.vsub(b,f),C.vsub(T,p),p.cross(f,F),F.isZero()||F.normalize()};var g=new r,y=new r,_=new r;o.prototype.getVertex=function(b,T){var C=this.scale;return this._getUnscaledVertex(b,T),T.x*=C.x,T.y*=C.y,T.z*=C.z,T},o.prototype._getUnscaledVertex=function(b,T){var C=b*3,F=this.vertices;return T.set(F[C],F[C+1],F[C+2])},o.prototype.getWorldVertex=function(b,T,C,F){return this.getVertex(b,F),a.pointToWorldFrame(T,C,F,F),F},o.prototype.getTriangleVertices=function(b,T,C,F){var W=b*3;this.getVertex(this.indices[W],T),this.getVertex(this.indices[W+1],C),this.getVertex(this.indices[W+2],F)},o.prototype.getNormal=function(b,T){var C=b*3;return T.set(this.normals[C],this.normals[C+1],this.normals[C+2])};var x=new u;o.prototype.calculateLocalInertia=function(b,T){this.computeLocalAABB(x);var C=x.upperBound.x-x.lowerBound.x,F=x.upperBound.y-x.lowerBound.y,W=x.upperBound.z-x.lowerBound.z;return T.set(1/12*b*(2*F*2*F+2*W*2*W),1/12*b*(2*C*2*C+2*W*2*W),1/12*b*(2*F*2*F+2*C*2*C))};var w=new r;o.prototype.computeLocalAABB=function(b){var T=b.lowerBound,C=b.upperBound,F=this.vertices.length;this.vertices;var W=w;this.getVertex(0,W),T.copy(W),C.copy(W);for(var z=0;z!==F;z++)this.getVertex(z,W),W.x<T.x?T.x=W.x:W.x>C.x&&(C.x=W.x),W.y<T.y?T.y=W.y:W.y>C.y&&(C.y=W.y),W.z<T.z?T.z=W.z:W.z>C.z&&(C.z=W.z)},o.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},o.prototype.updateBoundingSphereRadius=function(){for(var b=0,T=this.vertices,C=new r,F=0,W=T.length/3;F!==W;F++){this.getVertex(F,C);var z=C.norm2();z>b&&(b=z)}this.boundingSphereRadius=Math.sqrt(b)},new r;var I=new a,V=new u;o.prototype.calculateWorldAABB=function(b,T,C,F){var W=I,z=V;W.position=b,W.quaternion=T,this.aabb.toWorldFrame(W,z),C.copy(z.lowerBound),F.copy(z.upperBound)},o.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},o.createTorus=function(b,T,C,F,W){b=b||1,T=T||.5,C=C||8,F=F||6,W=W||Math.PI*2;for(var z=[],U=[],K=0;K<=C;K++)for(var tt=0;tt<=F;tt++){var k=tt/F*W,B=K/C*Math.PI*2,Z=(b+T*Math.cos(B))*Math.cos(k),X=(b+T*Math.cos(B))*Math.sin(k),N=T*Math.sin(B);z.push(Z,X,N)}for(var K=1;K<=C;K++)for(var tt=1;tt<=F;tt++){var D=(F+1)*K+tt-1,R=(F+1)*(K-1)+tt-1,L=(F+1)*(K-1)+tt,M=(F+1)*K+tt;U.push(D,R,M),U.push(R,L,M)}return new o(z,U)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(e,n,l){n.exports=r,e("../math/Vec3"),e("../math/Quaternion");var s=e("./Solver");function r(){s.call(this),this.iterations=10,this.tolerance=1e-7}r.prototype=new s;var a=[],u=[],d=[];r.prototype.solve=function(o,i){var c=0,h=this.iterations,v=this.tolerance*this.tolerance,p=this.equations,f=p.length,g=i.bodies,y=g.length,_=o,x,w,I,V,b,T;if(f!==0)for(var C=0;C!==y;C++)g[C].updateSolveMassProperties();var F=u,W=d,z=a;F.length=f,W.length=f,z.length=f;for(var C=0;C!==f;C++){var U=p[C];z[C]=0,W[C]=U.computeB(_),F[C]=1/U.computeC()}if(f!==0){for(var C=0;C!==y;C++){var K=g[C],tt=K.vlambda,k=K.wlambda;tt.set(0,0,0),k&&k.set(0,0,0)}for(c=0;c!==h;c++){V=0;for(var B=0;B!==f;B++){var U=p[B];x=W[B],w=F[B],T=z[B],b=U.computeGWlambda(),I=w*(x-b-U.eps*T),T+I<U.minForce?I=U.minForce-T:T+I>U.maxForce&&(I=U.maxForce-T),z[B]+=I,V+=I>0?I:-I,U.addToWlambda(I)}if(V*V<v)break}for(var C=0;C!==y;C++){var K=g[C],Z=K.velocity,X=K.angularVelocity;Z.vadd(K.vlambda,Z),X&&X.vadd(K.wlambda,X)}}return c}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(e,n,l){n.exports=s;function s(){this.equations=[]}s.prototype.solve=function(r,a){return 0},s.prototype.addEquation=function(r){r.enabled&&this.equations.push(r)},s.prototype.removeEquation=function(r){var a=this.equations,u=a.indexOf(r);u!==-1&&a.splice(u,1)},s.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(e,n,l){n.exports=a,e("../math/Vec3"),e("../math/Quaternion");var s=e("./Solver"),r=e("../objects/Body");function a(g){for(s.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=g,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}a.prototype=new s;var u=[],d=[],o={bodies:[]},i=r.STATIC;function c(g){for(var y=g.length,_=0;_!==y;_++){var x=g[_];if(!x.visited&&!(x.body.type&i))return x}return!1}var h=[];function v(g,y,_,x){for(h.push(g),g.visited=!0,y(g,_,x);h.length;)for(var w=h.pop(),I;I=c(w.children);)I.visited=!0,y(I,_,x),h.push(I)}function p(g,y,_){y.push(g.body);for(var x=g.eqs.length,w=0;w!==x;w++){var I=g.eqs[w];_.indexOf(I)===-1&&_.push(I)}}a.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},a.prototype.solve=function(g,y){for(var _=u,x=this.nodePool,w=y.bodies,I=this.equations,V=I.length,b=w.length,T=this.subsolver;x.length<b;)x.push(this.createNode());_.length=b;for(var C=0;C<b;C++)_[C]=x[C];for(var C=0;C!==b;C++){var F=_[C];F.body=w[C],F.children.length=0,F.eqs.length=0,F.visited=!1}for(var W=0;W!==V;W++){var z=I[W],C=w.indexOf(z.bi),U=w.indexOf(z.bj),K=_[C],tt=_[U];K.children.push(tt),K.eqs.push(z),tt.children.push(K),tt.eqs.push(z)}var k,B=0,Z=d;T.tolerance=this.tolerance,T.iterations=this.iterations;for(var X=o;k=c(_);){Z.length=0,X.bodies.length=0,v(k,p,X.bodies,Z);var N=Z.length;Z=Z.sort(f);for(var C=0;C!==N;C++)T.addEquation(Z[C]);T.solve(g,X),T.removeAllEquations(),B++}return B};function f(g,y){return y.id-g.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(e,n,l){var s=function(){};n.exports=s,s.prototype={constructor:s,addEventListener:function(r,a){this._listeners===void 0&&(this._listeners={});var u=this._listeners;return u[r]===void 0&&(u[r]=[]),u[r].indexOf(a)===-1&&u[r].push(a),this},hasEventListener:function(r,a){if(this._listeners===void 0)return!1;var u=this._listeners;return u[r]!==void 0&&u[r].indexOf(a)!==-1},removeEventListener:function(r,a){if(this._listeners===void 0)return this;var u=this._listeners;if(u[r]===void 0)return this;var d=u[r].indexOf(a);return d!==-1&&u[r].splice(d,1),this},dispatchEvent:function(r){if(this._listeners===void 0)return this;var a=this._listeners,u=a[r.type];if(u!==void 0){r.target=this;for(var d=0,o=u.length;d<o;d++)u[d].call(this,r)}return this}}},{}],50:[function(e,n,l){var s=e("../collision/AABB"),r=e("../math/Vec3");n.exports=u;function a(i){i=i||{},this.root=i.root||null,this.aabb=i.aabb?i.aabb.clone():new s,this.data=[],this.children=[]}function u(i,c){c=c||{},c.root=null,c.aabb=i,a.call(this,c),this.maxDepth=typeof c.maxDepth<"u"?c.maxDepth:8}u.prototype=new a,a.prototype.reset=function(i,c){this.children.length=this.data.length=0},a.prototype.insert=function(i,c,h){var v=this.data;if(h=h||0,!this.aabb.contains(i))return!1;var p=this.children;if(h<(this.maxDepth||this.root.maxDepth)){var f=!1;p.length||(this.subdivide(),f=!0);for(var g=0;g!==8;g++)if(p[g].insert(i,c,h+1))return!0;f&&(p.length=0)}return v.push(c),!0};var d=new r;a.prototype.subdivide=function(){var i=this.aabb,c=i.lowerBound,h=i.upperBound,v=this.children;v.push(new a({aabb:new s({lowerBound:new r(0,0,0)})}),new a({aabb:new s({lowerBound:new r(1,0,0)})}),new a({aabb:new s({lowerBound:new r(1,1,0)})}),new a({aabb:new s({lowerBound:new r(1,1,1)})}),new a({aabb:new s({lowerBound:new r(0,1,1)})}),new a({aabb:new s({lowerBound:new r(0,0,1)})}),new a({aabb:new s({lowerBound:new r(1,0,1)})}),new a({aabb:new s({lowerBound:new r(0,1,0)})})),h.vsub(c,d),d.scale(.5,d);for(var p=this.root||this,f=0;f!==8;f++){var g=v[f];g.root=p;var y=g.aabb.lowerBound;y.x*=d.x,y.y*=d.y,y.z*=d.z,y.vadd(c,y),y.vadd(d,g.aabb.upperBound)}},a.prototype.aabbQuery=function(i,c){this.data,this.children;for(var h=[this];h.length;){var v=h.pop();v.aabb.overlaps(i)&&Array.prototype.push.apply(c,v.data),Array.prototype.push.apply(h,v.children)}return c};var o=new s;a.prototype.rayQuery=function(i,c,h){return i.getAABB(o),o.toLocalFrame(c,o),this.aabbQuery(o,h),h},a.prototype.removeEmptyNodes=function(){for(var i=[this];i.length;){for(var c=i.pop(),h=c.children.length-1;h>=0;h--)c.children[h].data.length||c.children.splice(h,1);Array.prototype.push.apply(i,c.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(e,n,l){n.exports=s;function s(){this.objects=[],this.type=Object}s.prototype.release=function(){for(var r=arguments.length,a=0;a!==r;a++)this.objects.push(arguments[a])},s.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},s.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(e,n,l){n.exports=s;function s(){this.data={keys:[]}}s.prototype.get=function(r,a){if(r>a){var u=a;a=r,r=u}return this.data[r+"-"+a]},s.prototype.set=function(r,a,u){if(r>a){var d=a;a=r,r=d}var o=r+"-"+a;this.get(r,a)||this.data.keys.push(o),this.data[o]=u},s.prototype.reset=function(){for(var r=this.data,a=r.keys;a.length>0;){var u=a.pop();delete r[u]}}},{}],53:[function(e,n,l){function s(){}n.exports=s,s.defaults=function(r,a){r=r||{};for(var u in a)u in r||(r[u]=a[u]);return r}},{}],54:[function(e,n,l){n.exports=a;var s=e("../math/Vec3"),r=e("./Pool");function a(){r.call(this),this.type=s}a.prototype=new r,a.prototype.constructObject=function(){return new s}},{"../math/Vec3":30,"./Pool":51}],55:[function(e,n,l){n.exports=v;var s=e("../collision/AABB"),r=e("../shapes/Shape"),a=e("../collision/Ray"),u=e("../math/Vec3"),d=e("../math/Transform");e("../shapes/ConvexPolyhedron");var o=e("../math/Quaternion");e("../solver/Solver");var i=e("../utils/Vec3Pool"),c=e("../equations/ContactEquation"),h=e("../equations/FrictionEquation");function v(nt){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new i,this.world=nt,this.currentContactMaterial=null,this.enableFrictionReduction=!1}v.prototype.createContactEquation=function(nt,at,xt,_t,Xt,S){var O;this.contactPointPool.length?(O=this.contactPointPool.pop(),O.bi=nt,O.bj=at):O=new c(nt,at),O.enabled=nt.collisionResponse&&at.collisionResponse&&xt.collisionResponse&&_t.collisionResponse;var Y=this.currentContactMaterial;O.restitution=Y.restitution,O.setSpookParams(Y.contactEquationStiffness,Y.contactEquationRelaxation,this.world.dt);var A=xt.material||nt.material,q=_t.material||at.material;return A&&q&&A.restitution>=0&&q.restitution>=0&&(O.restitution=A.restitution*q.restitution),O.si=Xt||xt,O.sj=S||_t,O},v.prototype.createFrictionEquationsFromContact=function(nt,at){var xt=nt.bi,_t=nt.bj,Xt=nt.si,S=nt.sj,O=this.world,Y=this.currentContactMaterial,A=Y.friction,q=Xt.material||xt.material,ot=S.material||_t.material;if(q&&ot&&q.friction>=0&&ot.friction>=0&&(A=q.friction*ot.friction),A>0){var mt=A*O.gravity.length(),ut=xt.invMass+_t.invMass;ut>0&&(ut=1/ut);var lt=this.frictionEquationPool,pt=lt.length?lt.pop():new h(xt,_t,mt*ut),St=lt.length?lt.pop():new h(xt,_t,mt*ut);return pt.bi=St.bi=xt,pt.bj=St.bj=_t,pt.minForce=St.minForce=-mt*ut,pt.maxForce=St.maxForce=mt*ut,pt.ri.copy(nt.ri),pt.rj.copy(nt.rj),St.ri.copy(nt.ri),St.rj.copy(nt.rj),nt.ni.tangents(pt.t,St.t),pt.setSpookParams(Y.frictionEquationStiffness,Y.frictionEquationRelaxation,O.dt),St.setSpookParams(Y.frictionEquationStiffness,Y.frictionEquationRelaxation,O.dt),pt.enabled=St.enabled=nt.enabled,at.push(pt,St),!0}return!1};var p=new u,f=new u,g=new u;v.prototype.createFrictionFromAverage=function(nt){var at=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(at,this.frictionResult)||nt===1)){var xt=this.frictionResult[this.frictionResult.length-2],_t=this.frictionResult[this.frictionResult.length-1];p.setZero(),f.setZero(),g.setZero();var Xt=at.bi;at.bj;for(var S=0;S!==nt;S++)at=this.result[this.result.length-1-S],at.bodyA!==Xt?(p.vadd(at.ni,p),f.vadd(at.ri,f),g.vadd(at.rj,g)):(p.vsub(at.ni,p),f.vadd(at.rj,f),g.vadd(at.ri,g));var O=1/nt;f.scale(O,xt.ri),g.scale(O,xt.rj),_t.ri.copy(xt.ri),_t.rj.copy(xt.rj),p.normalize(),p.tangents(xt.t,_t.t)}};var y=new u,_=new u,x=new o,w=new o;v.prototype.getContacts=function(nt,at,xt,_t,Xt,S,O){this.contactPointPool=Xt,this.frictionEquationPool=O,this.result=_t,this.frictionResult=S;for(var Y=x,A=w,q=y,ot=_,mt=0,ut=nt.length;mt!==ut;mt++){var lt=nt[mt],pt=at[mt],St=null;lt.material&&pt.material&&(St=xt.getContactMaterial(lt.material,pt.material)||null);for(var Ct=0;Ct<lt.shapes.length;Ct++){lt.quaternion.mult(lt.shapeOrientations[Ct],Y),lt.quaternion.vmult(lt.shapeOffsets[Ct],q),q.vadd(lt.position,q);for(var dt=lt.shapes[Ct],kt=0;kt<pt.shapes.length;kt++){pt.quaternion.mult(pt.shapeOrientations[kt],A),pt.quaternion.vmult(pt.shapeOffsets[kt],ot),ot.vadd(pt.position,ot);var Kt=pt.shapes[kt];if(!(q.distanceTo(ot)>dt.boundingSphereRadius+Kt.boundingSphereRadius)){var re=null;dt.material&&Kt.material&&(re=xt.getContactMaterial(dt.material,Kt.material)||null),this.currentContactMaterial=re||St||xt.defaultContactMaterial;var Vt=this[dt.type|Kt.type];Vt&&(dt.type<Kt.type?Vt.call(this,dt,Kt,q,ot,Y,A,lt,pt,dt,Kt):Vt.call(this,Kt,dt,ot,q,A,Y,pt,lt,dt,Kt))}}}}},v.prototype[r.types.BOX|r.types.BOX]=v.prototype.boxBox=function(nt,at,xt,_t,Xt,S,O,Y){nt.convexPolyhedronRepresentation.material=nt.material,at.convexPolyhedronRepresentation.material=at.material,nt.convexPolyhedronRepresentation.collisionResponse=nt.collisionResponse,at.convexPolyhedronRepresentation.collisionResponse=at.collisionResponse,this.convexConvex(nt.convexPolyhedronRepresentation,at.convexPolyhedronRepresentation,xt,_t,Xt,S,O,Y,nt,at)},v.prototype[r.types.BOX|r.types.CONVEXPOLYHEDRON]=v.prototype.boxConvex=function(nt,at,xt,_t,Xt,S,O,Y){nt.convexPolyhedronRepresentation.material=nt.material,nt.convexPolyhedronRepresentation.collisionResponse=nt.collisionResponse,this.convexConvex(nt.convexPolyhedronRepresentation,at,xt,_t,Xt,S,O,Y,nt,at)},v.prototype[r.types.BOX|r.types.PARTICLE]=v.prototype.boxParticle=function(nt,at,xt,_t,Xt,S,O,Y){nt.convexPolyhedronRepresentation.material=nt.material,nt.convexPolyhedronRepresentation.collisionResponse=nt.collisionResponse,this.convexParticle(nt.convexPolyhedronRepresentation,at,xt,_t,Xt,S,O,Y,nt,at)},v.prototype[r.types.SPHERE]=v.prototype.sphereSphere=function(nt,at,xt,_t,Xt,S,O,Y){var A=this.createContactEquation(O,Y,nt,at);_t.vsub(xt,A.ni),A.ni.normalize(),A.ri.copy(A.ni),A.rj.copy(A.ni),A.ri.mult(nt.radius,A.ri),A.rj.mult(-at.radius,A.rj),A.ri.vadd(xt,A.ri),A.ri.vsub(O.position,A.ri),A.rj.vadd(_t,A.rj),A.rj.vsub(Y.position,A.rj),this.result.push(A),this.createFrictionEquationsFromContact(A,this.frictionResult)};var I=new u,V=new u,b=new u;v.prototype[r.types.PLANE|r.types.TRIMESH]=v.prototype.planeTrimesh=function(nt,at,xt,_t,Xt,S,O,Y){var A=new u,q=I;q.set(0,0,1),Xt.vmult(q,q);for(var ot=0;ot<at.vertices.length/3;ot++){at.getVertex(ot,A);var mt=new u;mt.copy(A),d.pointToWorldFrame(_t,S,mt,A);var ut=V;A.vsub(xt,ut);var lt=q.dot(ut);if(lt<=0){var pt=this.createContactEquation(O,Y,nt,at);pt.ni.copy(q);var St=b;q.scale(ut.dot(q),St),A.vsub(St,St),pt.ri.copy(St),pt.ri.vsub(O.position,pt.ri),pt.rj.copy(A),pt.rj.vsub(Y.position,pt.rj),this.result.push(pt),this.createFrictionEquationsFromContact(pt,this.frictionResult)}}};var T=new u,C=new u;new u;var F=new u,W=new u,z=new u,U=new u,K=new u,tt=new u,k=new u,B=new u,Z=new u,X=new u,N=new u,D=new s,R=[];v.prototype[r.types.SPHERE|r.types.TRIMESH]=v.prototype.sphereTrimesh=function(nt,at,xt,_t,Xt,S,O,Y){var A=z,q=U,ot=K,mt=tt,ut=k,lt=B,pt=D,St=W,Ct=C,dt=R;d.pointToLocalFrame(_t,S,xt,ut);var kt=nt.radius;pt.lowerBound.set(ut.x-kt,ut.y-kt,ut.z-kt),pt.upperBound.set(ut.x+kt,ut.y+kt,ut.z+kt),at.getTrianglesInAABB(pt,dt);for(var Kt=F,re=nt.radius*nt.radius,Vt=0;Vt<dt.length;Vt++)for(var It=0;It<3;It++)if(at.getVertex(at.indices[dt[Vt]*3+It],Kt),Kt.vsub(ut,Ct),Ct.norm2()<=re){St.copy(Kt),d.pointToWorldFrame(_t,S,St,Kt),Kt.vsub(xt,Ct);var Gt=this.createContactEquation(O,Y,nt,at);Gt.ni.copy(Ct),Gt.ni.normalize(),Gt.ri.copy(Gt.ni),Gt.ri.scale(nt.radius,Gt.ri),Gt.ri.vadd(xt,Gt.ri),Gt.ri.vsub(O.position,Gt.ri),Gt.rj.copy(Kt),Gt.rj.vsub(Y.position,Gt.rj),this.result.push(Gt),this.createFrictionEquationsFromContact(Gt,this.frictionResult)}for(var Vt=0;Vt<dt.length;Vt++)for(var It=0;It<3;It++){at.getVertex(at.indices[dt[Vt]*3+It],A),at.getVertex(at.indices[dt[Vt]*3+(It+1)%3],q),q.vsub(A,ot),ut.vsub(q,lt);var ne=lt.dot(ot);ut.vsub(A,lt);var fe=lt.dot(ot);if(fe>0&&ne<0){ut.vsub(A,lt),mt.copy(ot),mt.normalize(),fe=lt.dot(mt),mt.scale(fe,lt),lt.vadd(A,lt);var Se=lt.distanceTo(ut);if(Se<nt.radius){var Gt=this.createContactEquation(O,Y,nt,at);lt.vsub(ut,Gt.ni),Gt.ni.normalize(),Gt.ni.scale(nt.radius,Gt.ri),d.pointToWorldFrame(_t,S,lt,lt),lt.vsub(Y.position,Gt.rj),d.vectorToWorldFrame(S,Gt.ni,Gt.ni),d.vectorToWorldFrame(S,Gt.ri,Gt.ri),this.result.push(Gt),this.createFrictionEquationsFromContact(Gt,this.frictionResult)}}}for(var Le=Z,xe=X,Zt=N,Ee=T,Vt=0,se=dt.length;Vt!==se;Vt++){at.getTriangleVertices(dt[Vt],Le,xe,Zt),at.getNormal(dt[Vt],Ee),ut.vsub(Le,lt);var Se=lt.dot(Ee);if(Ee.scale(Se,lt),ut.vsub(lt,lt),Se=lt.distanceTo(ut),a.pointInTriangle(lt,Le,xe,Zt)&&Se<nt.radius){var Gt=this.createContactEquation(O,Y,nt,at);lt.vsub(ut,Gt.ni),Gt.ni.normalize(),Gt.ni.scale(nt.radius,Gt.ri),d.pointToWorldFrame(_t,S,lt,lt),lt.vsub(Y.position,Gt.rj),d.vectorToWorldFrame(S,Gt.ni,Gt.ni),d.vectorToWorldFrame(S,Gt.ri,Gt.ri),this.result.push(Gt),this.createFrictionEquationsFromContact(Gt,this.frictionResult)}}dt.length=0};var L=new u,M=new u;v.prototype[r.types.SPHERE|r.types.PLANE]=v.prototype.spherePlane=function(nt,at,xt,_t,Xt,S,O,Y){var A=this.createContactEquation(O,Y,nt,at);if(A.ni.set(0,0,1),S.vmult(A.ni,A.ni),A.ni.negate(A.ni),A.ni.normalize(),A.ni.mult(nt.radius,A.ri),xt.vsub(_t,L),A.ni.mult(A.ni.dot(L),M),L.vsub(M,A.rj),-L.dot(A.ni)<=nt.radius){var q=A.ri,ot=A.rj;q.vadd(xt,q),q.vsub(O.position,q),ot.vadd(_t,ot),ot.vsub(Y.position,ot),this.result.push(A),this.createFrictionEquationsFromContact(A,this.frictionResult)}};var G=new u,J=new u,$=new u;function H(nt,at,xt){for(var _t=null,Xt=nt.length,S=0;S!==Xt;S++){var O=nt[S],Y=G;nt[(S+1)%Xt].vsub(O,Y);var A=J;Y.cross(at,A);var q=$;xt.vsub(O,q);var ot=A.dot(q);if(_t===null||ot>0&&_t===!0||ot<=0&&_t===!1){_t===null&&(_t=ot>0);continue}else return!1}return!0}var Q=new u,rt=new u,wt=new u,bt=new u,Et=[new u,new u,new u,new u,new u,new u],ct=new u,vt=new u,Ht=new u,Pt=new u;v.prototype[r.types.SPHERE|r.types.BOX]=v.prototype.sphereBox=function(nt,at,xt,_t,Xt,S,O,Y){var A=this.v3pool,q=Et;xt.vsub(_t,Q),at.getSideNormals(q,S);for(var ot=nt.radius,mt=!1,ut=vt,lt=Ht,pt=Pt,St=null,Ct=0,dt=0,kt=0,Kt=null,re=0,Vt=q.length;re!==Vt&&mt===!1;re++){var It=rt;It.copy(q[re]);var Gt=It.norm();It.normalize();var ne=Q.dot(It);if(ne<Gt+ot&&ne>0){var fe=wt,Se=bt;fe.copy(q[(re+1)%3]),Se.copy(q[(re+2)%3]);var Le=fe.norm(),xe=Se.norm();fe.normalize(),Se.normalize();var Zt=Q.dot(fe),Ee=Q.dot(Se);if(Zt<Le&&Zt>-Le&&Ee<xe&&Ee>-xe){var be=Math.abs(ne-Gt-ot);(Kt===null||be<Kt)&&(Kt=be,dt=Zt,kt=Ee,St=Gt,ut.copy(It),lt.copy(fe),pt.copy(Se),Ct++)}}}if(Ct){mt=!0;var Yt=this.createContactEquation(O,Y,nt,at);ut.mult(-ot,Yt.ri),Yt.ni.copy(ut),Yt.ni.negate(Yt.ni),ut.mult(St,ut),lt.mult(dt,lt),ut.vadd(lt,ut),pt.mult(kt,pt),ut.vadd(pt,Yt.rj),Yt.ri.vadd(xt,Yt.ri),Yt.ri.vsub(O.position,Yt.ri),Yt.rj.vadd(_t,Yt.rj),Yt.rj.vsub(Y.position,Yt.rj),this.result.push(Yt),this.createFrictionEquationsFromContact(Yt,this.frictionResult)}for(var se=A.get(),he=ct,ye=0;ye!==2&&!mt;ye++)for(var _e=0;_e!==2&&!mt;_e++)for(var pe=0;pe!==2&&!mt;pe++)if(se.set(0,0,0),ye?se.vadd(q[0],se):se.vsub(q[0],se),_e?se.vadd(q[1],se):se.vsub(q[1],se),pe?se.vadd(q[2],se):se.vsub(q[2],se),_t.vadd(se,he),he.vsub(xt,he),he.norm2()<ot*ot){mt=!0;var Yt=this.createContactEquation(O,Y,nt,at);Yt.ri.copy(he),Yt.ri.normalize(),Yt.ni.copy(Yt.ri),Yt.ri.mult(ot,Yt.ri),Yt.rj.copy(se),Yt.ri.vadd(xt,Yt.ri),Yt.ri.vsub(O.position,Yt.ri),Yt.rj.vadd(_t,Yt.rj),Yt.rj.vsub(Y.position,Yt.rj),this.result.push(Yt),this.createFrictionEquationsFromContact(Yt,this.frictionResult)}A.release(se),se=null;for(var He=A.get(),an=A.get(),Yt=A.get(),Ue=A.get(),be=A.get(),wn=q.length,ye=0;ye!==wn&&!mt;ye++)for(var _e=0;_e!==wn&&!mt;_e++)if(ye%3!==_e%3){q[_e].cross(q[ye],He),He.normalize(),q[ye].vadd(q[_e],an),Yt.copy(xt),Yt.vsub(an,Yt),Yt.vsub(_t,Yt);var Sn=Yt.dot(He);He.mult(Sn,Ue);for(var pe=0;pe===ye%3||pe===_e%3;)pe++;be.copy(xt),be.vsub(Ue,be),be.vsub(an,be),be.vsub(_t,be);var Ua=Math.abs(Sn),Oa=be.norm();if(Ua<q[pe].norm()&&Oa<ot){mt=!0;var ue=this.createContactEquation(O,Y,nt,at);an.vadd(Ue,ue.rj),ue.rj.copy(ue.rj),be.negate(ue.ni),ue.ni.normalize(),ue.ri.copy(ue.rj),ue.ri.vadd(_t,ue.ri),ue.ri.vsub(xt,ue.ri),ue.ri.normalize(),ue.ri.mult(ot,ue.ri),ue.ri.vadd(xt,ue.ri),ue.ri.vsub(O.position,ue.ri),ue.rj.vadd(_t,ue.rj),ue.rj.vsub(Y.position,ue.rj),this.result.push(ue),this.createFrictionEquationsFromContact(ue,this.frictionResult)}}A.release(He,an,Yt,Ue,be)};var qt=new u,Rt=new u,jt=new u,P=new u,E=new u,et=new u,ft=new u,gt=new u,Mt=new u,Dt=new u;v.prototype[r.types.SPHERE|r.types.CONVEXPOLYHEDRON]=v.prototype.sphereConvex=function(nt,at,xt,_t,Xt,S,O,Y){var A=this.v3pool;xt.vsub(_t,qt);for(var q=at.faceNormals,ot=at.faces,mt=at.vertices,ut=nt.radius,lt=0;lt!==mt.length;lt++){var pt=mt[lt],St=E;S.vmult(pt,St),_t.vadd(St,St);var Ct=P;if(St.vsub(xt,Ct),Ct.norm2()<ut*ut){kt=!0;var dt=this.createContactEquation(O,Y,nt,at);dt.ri.copy(Ct),dt.ri.normalize(),dt.ni.copy(dt.ri),dt.ri.mult(ut,dt.ri),St.vsub(_t,dt.rj),dt.ri.vadd(xt,dt.ri),dt.ri.vsub(O.position,dt.ri),dt.rj.vadd(_t,dt.rj),dt.rj.vsub(Y.position,dt.rj),this.result.push(dt),this.createFrictionEquationsFromContact(dt,this.frictionResult);return}}for(var kt=!1,lt=0,Kt=ot.length;lt!==Kt&&kt===!1;lt++){var re=q[lt],Vt=ot[lt],It=et;S.vmult(re,It);var Gt=ft;S.vmult(mt[Vt[0]],Gt),Gt.vadd(_t,Gt);var ne=gt;It.mult(-ut,ne),xt.vadd(ne,ne);var fe=Mt;ne.vsub(Gt,fe);var Se=fe.dot(It),Le=Dt;if(xt.vsub(Gt,Le),Se<0&&Le.dot(It)>0){for(var xe=[],Zt=0,Ee=Vt.length;Zt!==Ee;Zt++){var se=A.get();S.vmult(mt[Vt[Zt]],se),_t.vadd(se,se),xe.push(se)}if(H(xe,It,xt)){kt=!0;var dt=this.createContactEquation(O,Y,nt,at);It.mult(-ut,dt.ri),It.negate(dt.ni);var he=A.get();It.mult(-Se,he);var ye=A.get();It.mult(-ut,ye),xt.vsub(_t,dt.rj),dt.rj.vadd(ye,dt.rj),dt.rj.vadd(he,dt.rj),dt.rj.vadd(_t,dt.rj),dt.rj.vsub(Y.position,dt.rj),dt.ri.vadd(xt,dt.ri),dt.ri.vsub(O.position,dt.ri),A.release(he),A.release(ye),this.result.push(dt),this.createFrictionEquationsFromContact(dt,this.frictionResult);for(var Zt=0,_e=xe.length;Zt!==_e;Zt++)A.release(xe[Zt]);return}else for(var Zt=0;Zt!==Vt.length;Zt++){var pe=A.get(),He=A.get();S.vmult(mt[Vt[(Zt+1)%Vt.length]],pe),S.vmult(mt[Vt[(Zt+2)%Vt.length]],He),_t.vadd(pe,pe),_t.vadd(He,He);var an=Rt;He.vsub(pe,an);var Yt=jt;an.unit(Yt);var Ue=A.get(),be=A.get();xt.vsub(pe,be);var wn=be.dot(Yt);Yt.mult(wn,Ue),Ue.vadd(pe,Ue);var Sn=A.get();if(Ue.vsub(xt,Sn),wn>0&&wn*wn<an.norm2()&&Sn.norm2()<ut*ut){var dt=this.createContactEquation(O,Y,nt,at);Ue.vsub(_t,dt.rj),Ue.vsub(xt,dt.ni),dt.ni.normalize(),dt.ni.mult(ut,dt.ri),dt.rj.vadd(_t,dt.rj),dt.rj.vsub(Y.position,dt.rj),dt.ri.vadd(xt,dt.ri),dt.ri.vsub(O.position,dt.ri),this.result.push(dt),this.createFrictionEquationsFromContact(dt,this.frictionResult);for(var Zt=0,_e=xe.length;Zt!==_e;Zt++)A.release(xe[Zt]);A.release(pe),A.release(He),A.release(Ue),A.release(Sn),A.release(be);return}A.release(pe),A.release(He),A.release(Ue),A.release(Sn),A.release(be)}for(var Zt=0,_e=xe.length;Zt!==_e;Zt++)A.release(xe[Zt])}}},new u,new u,v.prototype[r.types.PLANE|r.types.BOX]=v.prototype.planeBox=function(nt,at,xt,_t,Xt,S,O,Y){at.convexPolyhedronRepresentation.material=at.material,at.convexPolyhedronRepresentation.collisionResponse=at.collisionResponse,this.planeConvex(nt,at.convexPolyhedronRepresentation,xt,_t,Xt,S,O,Y)};var At=new u,ht=new u,Wt=new u,Bt=new u;v.prototype[r.types.PLANE|r.types.CONVEXPOLYHEDRON]=v.prototype.planeConvex=function(nt,at,xt,_t,Xt,S,O,Y){var A=At,q=ht;q.set(0,0,1),Xt.vmult(q,q);for(var ot=0,mt=Wt,ut=0;ut!==at.vertices.length;ut++){A.copy(at.vertices[ut]),S.vmult(A,A),_t.vadd(A,A),A.vsub(xt,mt);var lt=q.dot(mt);if(lt<=0){var pt=this.createContactEquation(O,Y,nt,at),St=Bt;q.mult(q.dot(mt),St),A.vsub(St,St),St.vsub(xt,pt.ri),pt.ni.copy(q),A.vsub(_t,pt.rj),pt.ri.vadd(xt,pt.ri),pt.ri.vsub(O.position,pt.ri),pt.rj.vadd(_t,pt.rj),pt.rj.vsub(Y.position,pt.rj),this.result.push(pt),ot++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(pt,this.frictionResult)}}this.enableFrictionReduction&&ot&&this.createFrictionFromAverage(ot)};var Ot=new u,Nt=new u;v.prototype[r.types.CONVEXPOLYHEDRON]=v.prototype.convexConvex=function(nt,at,xt,_t,Xt,S,O,Y,A,q,ot,mt){var ut=Ot;if(!(xt.distanceTo(_t)>nt.boundingSphereRadius+at.boundingSphereRadius)&&nt.findSeparatingAxis(at,xt,Xt,_t,S,ut,ot,mt)){var lt=[],pt=Nt;nt.clipAgainstHull(xt,Xt,at,_t,S,ut,-100,100,lt);for(var St=0,Ct=0;Ct!==lt.length;Ct++){var dt=this.createContactEquation(O,Y,nt,at,A,q),kt=dt.ri,Kt=dt.rj;ut.negate(dt.ni),lt[Ct].normal.negate(pt),pt.mult(lt[Ct].depth,pt),lt[Ct].point.vadd(pt,kt),Kt.copy(lt[Ct].point),kt.vsub(xt,kt),Kt.vsub(_t,Kt),kt.vadd(xt,kt),kt.vsub(O.position,kt),Kt.vadd(_t,Kt),Kt.vsub(Y.position,Kt),this.result.push(dt),St++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(dt,this.frictionResult)}this.enableFrictionReduction&&St&&this.createFrictionFromAverage(St)}};var Ut=new u,$t=new u,te=new u;v.prototype[r.types.PLANE|r.types.PARTICLE]=v.prototype.planeParticle=function(nt,at,xt,_t,Xt,S,O,Y){var A=Ut;A.set(0,0,1),O.quaternion.vmult(A,A);var q=$t;_t.vsub(O.position,q);var ot=A.dot(q);if(ot<=0){var mt=this.createContactEquation(Y,O,at,nt);mt.ni.copy(A),mt.ni.negate(mt.ni),mt.ri.set(0,0,0);var ut=te;A.mult(A.dot(_t),ut),_t.vsub(ut,ut),mt.rj.copy(ut),this.result.push(mt),this.createFrictionEquationsFromContact(mt,this.frictionResult)}};var ie=new u;v.prototype[r.types.PARTICLE|r.types.SPHERE]=v.prototype.sphereParticle=function(nt,at,xt,_t,Xt,S,O,Y){var A=ie;A.set(0,0,1),_t.vsub(xt,A);var q=A.norm2();if(q<=nt.radius*nt.radius){var ot=this.createContactEquation(Y,O,at,nt);A.normalize(),ot.rj.copy(A),ot.rj.mult(nt.radius,ot.rj),ot.ni.copy(A),ot.ni.negate(ot.ni),ot.ri.set(0,0,0),this.result.push(ot),this.createFrictionEquationsFromContact(ot,this.frictionResult)}};var j=new o,st=new u;new u;var yt=new u,Tt=new u,Ft=new u;v.prototype[r.types.PARTICLE|r.types.CONVEXPOLYHEDRON]=v.prototype.convexParticle=function(nt,at,xt,_t,Xt,S,O,Y){var A=-1,q=yt,ot=Ft,mt=null,ut=st;if(ut.copy(_t),ut.vsub(xt,ut),Xt.conjugate(j),j.vmult(ut,ut),nt.pointIsInside(ut)){nt.worldVerticesNeedsUpdate&&nt.computeWorldVertices(xt,Xt),nt.worldFaceNormalsNeedsUpdate&&nt.computeWorldFaceNormals(Xt);for(var lt=0,pt=nt.faces.length;lt!==pt;lt++){var St=[nt.worldVertices[nt.faces[lt][0]]],Ct=nt.worldFaceNormals[lt];_t.vsub(St[0],Tt);var dt=-Ct.dot(Tt);(mt===null||Math.abs(dt)<Math.abs(mt))&&(mt=dt,A=lt,q.copy(Ct))}if(A!==-1){var kt=this.createContactEquation(Y,O,at,nt);q.mult(mt,ot),ot.vadd(_t,ot),ot.vsub(xt,ot),kt.rj.copy(ot),q.negate(kt.ni),kt.ri.set(0,0,0);var Kt=kt.ri,re=kt.rj;Kt.vadd(_t,Kt),Kt.vsub(Y.position,Kt),re.vadd(xt,re),re.vsub(O.position,re),this.result.push(kt),this.createFrictionEquationsFromContact(kt,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},v.prototype[r.types.BOX|r.types.HEIGHTFIELD]=v.prototype.boxHeightfield=function(nt,at,xt,_t,Xt,S,O,Y){nt.convexPolyhedronRepresentation.material=nt.material,nt.convexPolyhedronRepresentation.collisionResponse=nt.collisionResponse,this.convexHeightfield(nt.convexPolyhedronRepresentation,at,xt,_t,Xt,S,O,Y)};var ee=new u,oe=new u,de=[0];v.prototype[r.types.CONVEXPOLYHEDRON|r.types.HEIGHTFIELD]=v.prototype.convexHeightfield=function(nt,at,xt,_t,Xt,S,O,Y){var A=at.data,q=at.elementSize,ot=nt.boundingSphereRadius,mt=oe,ut=de,lt=ee;d.pointToLocalFrame(_t,S,xt,lt);var pt=Math.floor((lt.x-ot)/q)-1,St=Math.ceil((lt.x+ot)/q)+1,Ct=Math.floor((lt.y-ot)/q)-1,dt=Math.ceil((lt.y+ot)/q)+1;if(!(St<0||dt<0||pt>A.length||Ct>A[0].length)){pt<0&&(pt=0),St<0&&(St=0),Ct<0&&(Ct=0),dt<0&&(dt=0),pt>=A.length&&(pt=A.length-1),St>=A.length&&(St=A.length-1),dt>=A[0].length&&(dt=A[0].length-1),Ct>=A[0].length&&(Ct=A[0].length-1);var kt=[];at.getRectMinMax(pt,Ct,St,dt,kt);var Kt=kt[0],re=kt[1];if(!(lt.z-ot>re||lt.z+ot<Kt))for(var Vt=pt;Vt<St;Vt++)for(var It=Ct;It<dt;It++)at.getConvexTrianglePillar(Vt,It,!1),d.pointToWorldFrame(_t,S,at.pillarOffset,mt),xt.distanceTo(mt)<at.pillarConvex.boundingSphereRadius+nt.boundingSphereRadius&&this.convexConvex(nt,at.pillarConvex,xt,mt,Xt,S,O,Y,null,null,ut,null),at.getConvexTrianglePillar(Vt,It,!0),d.pointToWorldFrame(_t,S,at.pillarOffset,mt),xt.distanceTo(mt)<at.pillarConvex.boundingSphereRadius+nt.boundingSphereRadius&&this.convexConvex(nt,at.pillarConvex,xt,mt,Xt,S,O,Y,null,null,ut,null)}};var we=new u,Jt=new u;v.prototype[r.types.SPHERE|r.types.HEIGHTFIELD]=v.prototype.sphereHeightfield=function(nt,at,xt,_t,Xt,S,O,Y){var A=at.data,q=nt.radius,ot=at.elementSize,mt=Jt,ut=we;d.pointToLocalFrame(_t,S,xt,ut);var lt=Math.floor((ut.x-q)/ot)-1,pt=Math.ceil((ut.x+q)/ot)+1,St=Math.floor((ut.y-q)/ot)-1,Ct=Math.ceil((ut.y+q)/ot)+1;if(!(pt<0||Ct<0||lt>A.length||Ct>A[0].length)){lt<0&&(lt=0),pt<0&&(pt=0),St<0&&(St=0),Ct<0&&(Ct=0),lt>=A.length&&(lt=A.length-1),pt>=A.length&&(pt=A.length-1),Ct>=A[0].length&&(Ct=A[0].length-1),St>=A[0].length&&(St=A[0].length-1);var dt=[];at.getRectMinMax(lt,St,pt,Ct,dt);var kt=dt[0],Kt=dt[1];if(!(ut.z-q>Kt||ut.z+q<kt))for(var re=this.result,Vt=lt;Vt<pt;Vt++)for(var It=St;It<Ct;It++){var Gt=re.length;at.getConvexTrianglePillar(Vt,It,!1),d.pointToWorldFrame(_t,S,at.pillarOffset,mt),xt.distanceTo(mt)<at.pillarConvex.boundingSphereRadius+nt.boundingSphereRadius&&this.sphereConvex(nt,at.pillarConvex,xt,mt,Xt,S,O,Y),at.getConvexTrianglePillar(Vt,It,!0),d.pointToWorldFrame(_t,S,at.pillarOffset,mt),xt.distanceTo(mt)<at.pillarConvex.boundingSphereRadius+nt.boundingSphereRadius&&this.sphereConvex(nt,at.pillarConvex,xt,mt,Xt,S,O,Y);var ne=re.length-Gt;if(ne>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(e,n,l){n.exports=x;var s=e("../shapes/Shape"),r=e("../math/Vec3"),a=e("../math/Quaternion"),u=e("../solver/GSSolver");e("../utils/Vec3Pool"),e("../equations/ContactEquation"),e("../equations/FrictionEquation");var d=e("./Narrowphase"),o=e("../utils/EventTarget"),i=e("../collision/ArrayCollisionMatrix"),c=e("../material/Material"),h=e("../material/ContactMaterial"),v=e("../objects/Body"),p=e("../utils/TupleDictionary"),f=e("../collision/RaycastResult"),g=e("../collision/AABB"),y=e("../collision/Ray"),_=e("../collision/NaiveBroadphase");function x(){o.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new r,this.broadphase=new _,this.bodies=[],this.solver=new u,this.constraints=[],this.narrowphase=new d(this),this.collisionMatrix=new i,this.collisionMatrixPrevious=new i,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new p,this.defaultMaterial=new c("default"),this.defaultContactMaterial=new h(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}x.prototype=new o,new g;var w=new y;if(x.prototype.getContactMaterial=function(B,Z){return this.contactMaterialTable.get(B.id,Z.id)},x.prototype.numObjects=function(){return this.bodies.length},x.prototype.collisionMatrixTick=function(){var B=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=B,this.collisionMatrix.reset()},x.prototype.add=x.prototype.addBody=function(B){this.bodies.indexOf(B)===-1&&(B.index=this.bodies.length,this.bodies.push(B),B.world=this,B.initPosition.copy(B.position),B.initVelocity.copy(B.velocity),B.timeLastSleepy=this.time,B instanceof v&&(B.initAngularVelocity.copy(B.angularVelocity),B.initQuaternion.copy(B.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=B,this.dispatchEvent(this.addBodyEvent))},x.prototype.addConstraint=function(B){this.constraints.push(B)},x.prototype.removeConstraint=function(B){var Z=this.constraints.indexOf(B);Z!==-1&&this.constraints.splice(Z,1)},x.prototype.rayTest=function(B,Z,X){X instanceof f?this.raycastClosest(B,Z,{skipBackfaces:!0},X):this.raycastAll(B,Z,{skipBackfaces:!0},X)},x.prototype.raycastAll=function(B,Z,X,N){return X.mode=y.ALL,X.from=B,X.to=Z,X.callback=N,w.intersectWorld(this,X)},x.prototype.raycastAny=function(B,Z,X,N){return X.mode=y.ANY,X.from=B,X.to=Z,X.result=N,w.intersectWorld(this,X)},x.prototype.raycastClosest=function(B,Z,X,N){return X.mode=y.CLOSEST,X.from=B,X.to=Z,X.result=N,w.intersectWorld(this,X)},x.prototype.remove=function(B){B.world=null;var Z=this.bodies.length-1,X=this.bodies,N=X.indexOf(B);if(N!==-1){X.splice(N,1);for(var D=0;D!==X.length;D++)X[D].index=D;this.collisionMatrix.setNumObjects(Z),this.removeBodyEvent.body=B,this.dispatchEvent(this.removeBodyEvent)}},x.prototype.removeBody=x.prototype.remove,x.prototype.addMaterial=function(B){this.materials.push(B)},x.prototype.addContactMaterial=function(B){this.contactmaterials.push(B),this.contactMaterialTable.set(B.materials[0].id,B.materials[1].id,B)},typeof performance>"u"&&(performance={}),!performance.now){var I=Date.now();performance.timing&&performance.timing.navigationStart&&(I=performance.timing.navigationStart),performance.now=function(){return Date.now()-I}}var V=new r;x.prototype.step=function(B,Z,X){if(X=X||10,Z=Z||0,Z===0)this.internalStep(B),this.time+=B;else{var N=Math.floor((this.time+Z)/B)-Math.floor(this.time/B);N=Math.min(N,X);for(var D=performance.now(),R=0;R!==N&&(this.internalStep(B),!(performance.now()-D>B*1e3));R++);this.time+=Z;for(var L=this.time%B,M=L/B,G=V,J=this.bodies,$=0;$!==J.length;$++){var H=J[$];H.type!==v.STATIC&&H.sleepState!==v.SLEEPING?(H.position.vsub(H.previousPosition,G),G.scale(M,G),H.position.vadd(G,H.interpolatedPosition)):(H.interpolatedPosition.copy(H.position),H.interpolatedQuaternion.copy(H.quaternion))}}};var b={type:"postStep"},T={type:"preStep"},C={type:"collide",body:null,contact:null},F=[],W=[],z=[],U=[];new r,new r,new r,new r,new r,new r,new r,new r,new r,new a;var K=new a,tt=new a,k=new r;x.prototype.internalStep=function(B){this.dt=B;var Z=this.contacts,X=z,N=U,D=this.numObjects(),R=this.bodies,L=this.solver,M=this.gravity,G=this.doProfiling,J=this.profile,$=v.DYNAMIC,H,Q=this.constraints,rt=W;M.norm();var wt=M.x,bt=M.y,Et=M.z,ct=0;for(G&&(H=performance.now()),ct=0;ct!==D;ct++){var vt=R[ct];if(vt.type&$){var Ht=vt.force,Pt=vt.mass;Ht.x+=Pt*wt,Ht.y+=Pt*bt,Ht.z+=Pt*Et}}for(var ct=0,qt=this.subsystems.length;ct!==qt;ct++)this.subsystems[ct].update();G&&(H=performance.now()),X.length=0,N.length=0,this.broadphase.collisionPairs(this,X,N),G&&(J.broadphase=performance.now()-H);var Ot=Q.length;for(ct=0;ct!==Ot;ct++){var Rt=Q[ct];if(!Rt.collideConnected)for(var jt=X.length-1;jt>=0;jt-=1)(Rt.bodyA===X[jt]&&Rt.bodyB===N[jt]||Rt.bodyB===X[jt]&&Rt.bodyA===N[jt])&&(X.splice(jt,1),N.splice(jt,1))}this.collisionMatrixTick(),G&&(H=performance.now());var P=F,E=Z.length;for(ct=0;ct!==E;ct++)P.push(Z[ct]);Z.length=0;var et=this.frictionEquations.length;for(ct=0;ct!==et;ct++)rt.push(this.frictionEquations[ct]);this.frictionEquations.length=0,this.narrowphase.getContacts(X,N,this,Z,P,this.frictionEquations,rt),G&&(J.narrowphase=performance.now()-H),G&&(H=performance.now());for(var ct=0;ct<this.frictionEquations.length;ct++)L.addEquation(this.frictionEquations[ct]);for(var ft=Z.length,gt=0;gt!==ft;gt++){var Rt=Z[gt],vt=Rt.bi,Mt=Rt.bj;Rt.si,Rt.sj;var Dt;if(vt.material&&Mt.material?Dt=this.getContactMaterial(vt.material,Mt.material)||this.defaultContactMaterial:Dt=this.defaultContactMaterial,Dt.friction,vt.material&&Mt.material&&(vt.material.friction>=0&&Mt.material.friction>=0&&vt.material.friction*Mt.material.friction,vt.material.restitution>=0&&Mt.material.restitution>=0&&(Rt.restitution=vt.material.restitution*Mt.material.restitution)),L.addEquation(Rt),vt.allowSleep&&vt.type===v.DYNAMIC&&vt.sleepState===v.SLEEPING&&Mt.sleepState===v.AWAKE&&Mt.type!==v.STATIC){var At=Mt.velocity.norm2()+Mt.angularVelocity.norm2(),ht=Math.pow(Mt.sleepSpeedLimit,2);At>=ht*2&&(vt._wakeUpAfterNarrowphase=!0)}if(Mt.allowSleep&&Mt.type===v.DYNAMIC&&Mt.sleepState===v.SLEEPING&&vt.sleepState===v.AWAKE&&vt.type!==v.STATIC){var Wt=vt.velocity.norm2()+vt.angularVelocity.norm2(),Bt=Math.pow(vt.sleepSpeedLimit,2);Wt>=Bt*2&&(Mt._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(vt,Mt,!0),this.collisionMatrixPrevious.get(vt,Mt)||(C.body=Mt,C.contact=Rt,vt.dispatchEvent(C),C.body=vt,Mt.dispatchEvent(C))}for(G&&(J.makeContactConstraints=performance.now()-H,H=performance.now()),ct=0;ct!==D;ct++){var vt=R[ct];vt._wakeUpAfterNarrowphase&&(vt.wakeUp(),vt._wakeUpAfterNarrowphase=!1)}var Ot=Q.length;for(ct=0;ct!==Ot;ct++){var Rt=Q[ct];Rt.update();for(var jt=0,Nt=Rt.equations.length;jt!==Nt;jt++){var Ut=Rt.equations[jt];L.addEquation(Ut)}}L.solve(B,this),G&&(J.solve=performance.now()-H),L.removeAllEquations();var $t=Math.pow;for(ct=0;ct!==D;ct++){var vt=R[ct];if(vt.type&$){var te=$t(1-vt.linearDamping,B),ie=vt.velocity;ie.mult(te,ie);var j=vt.angularVelocity;if(j){var st=$t(1-vt.angularDamping,B);j.mult(st,j)}}}for(this.dispatchEvent(T),ct=0;ct!==D;ct++){var vt=R[ct];vt.preStep&&vt.preStep.call(vt)}G&&(H=performance.now());var yt=K,Tt=tt,Ft=this.stepnumber,ee=v.DYNAMIC|v.KINEMATIC,oe=Ft%(this.quatNormalizeSkip+1)===0,de=this.quatNormalizeFast,we=B*.5;for(s.types.PLANE,s.types.CONVEXPOLYHEDRON,ct=0;ct!==D;ct++){var Jt=R[ct],nt=Jt.force,at=Jt.torque;if(Jt.type&ee&&Jt.sleepState!==v.SLEEPING){var xt=Jt.velocity,_t=Jt.angularVelocity,Xt=Jt.position,S=Jt.quaternion,O=Jt.invMass,Y=Jt.invInertiaWorld;xt.x+=nt.x*O*B,xt.y+=nt.y*O*B,xt.z+=nt.z*O*B,Jt.angularVelocity&&(Y.vmult(at,k),k.mult(B,k),k.vadd(_t,_t)),Xt.x+=xt.x*B,Xt.y+=xt.y*B,Xt.z+=xt.z*B,Jt.angularVelocity&&(yt.set(_t.x,_t.y,_t.z,0),yt.mult(S,Tt),S.x+=we*Tt.x,S.y+=we*Tt.y,S.z+=we*Tt.z,S.w+=we*Tt.w,oe&&(de?S.normalizeFast():S.normalize())),Jt.aabb&&(Jt.aabbNeedsUpdate=!0),Jt.updateInertiaWorld&&Jt.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,G&&(J.integrate=performance.now()-H),this.time+=B,this.stepnumber+=1,this.dispatchEvent(b),ct=0;ct!==D;ct++){var vt=R[ct],A=vt.postStep;A&&A.call(vt)}if(this.allowSleep)for(ct=0;ct!==D;ct++)R[ct].sleepTick(this.time)},x.prototype.clearForces=function(){for(var B=this.bodies,Z=B.length,X=0;X!==Z;X++){var N=B[X];N.force,N.torque,N.force.set(0,0,0),N.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})})(Qd);function tf(m,t=!1){const e=m[0].index!==null,n=new Set(Object.keys(m[0].attributes)),l=new Set(Object.keys(m[0].morphAttributes)),s={},r={},a=m[0].morphTargetsRelative,u=new pn;let d=0;for(let o=0;o<m.length;++o){const i=m[o];let c=0;if(e!==(i.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+o+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const h in i.attributes){if(!n.has(h))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+o+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;s[h]===void 0&&(s[h]=[]),s[h].push(i.attributes[h]),c++}if(c!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+o+". Make sure all geometries have the same number of attributes."),null;if(a!==i.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+o+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const h in i.morphAttributes){if(!l.has(h))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+o+".  .morphAttributes must be consistent throughout all geometries."),null;r[h]===void 0&&(r[h]=[]),r[h].push(i.morphAttributes[h])}if(t){let h;if(e)h=i.index.count;else if(i.attributes.position!==void 0)h=i.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+o+". The geometry must have either an index or a position attribute"),null;u.addGroup(d,h,o),d+=h}}if(e){let o=0;const i=[];for(let c=0;c<m.length;++c){const h=m[c].index;for(let v=0;v<h.count;++v)i.push(h.getX(v)+o);o+=m[c].attributes.position.count}u.setIndex(i)}for(const o in s){const i=la(s[o]);if(!i)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+o+" attribute."),null;u.setAttribute(o,i)}for(const o in r){const i=r[o][0].length;if(i===0)break;u.morphAttributes=u.morphAttributes||{},u.morphAttributes[o]=[];for(let c=0;c<i;++c){const h=[];for(let p=0;p<r[o].length;++p)h.push(r[o][p][c]);const v=la(h);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+o+" morphAttribute."),null;u.morphAttributes[o].push(v)}}return u}function la(m){let t,e,n,l=0;for(let a=0;a<m.length;++a){const u=m[a];if(u.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;l+=u.array.length}const s=new t(l);let r=0;for(let a=0;a<m.length;++a)s.set(m[a].array,r),r+=m[a].array.length;return new tn(s,e,n)}let zt,Br,Ki=11,ef=.25;const nf=new Jd;let ca=0;class rf{constructor(t){zt=this,zt.canvas=t,zt.sizes={width:window.innerWidth,height:window.innerHeight},zt.textures={ball:"ball.png",wall:"brick.png",floor:"concrete.png"},Br=zt.generateSquareMaze(Ki),Br[Ki-1][Ki-2]=!1,zt.objectsToUpdate=[],zt.physicsWorld(),zt.world(),zt.render(),zt.update(),window.addEventListener("resize",zt.resize),keyboardJS.bind("up",()=>{zt.objectsToUpdate[0].body.position.z+=-.25}),keyboardJS.bind("down",()=>{zt.objectsToUpdate[0].body.position.z+=.25}),keyboardJS.bind("left",()=>{zt.objectsToUpdate[0].body.position.x+=-.25}),keyboardJS.bind("right",()=>{zt.objectsToUpdate[0].body.position.x+=.25})}generateSquareMaze(t){function e(r,a,u){for(r[a][u]=!1;;){let d=[];if(a>1&&r[a-2][u]==!0&&d.push([-1,0]),a<r.dimension-2&&r[a+2][u]==!0&&d.push([1,0]),u>1&&r[a][u-2]==!0&&d.push([0,-1]),u<r.dimension-2&&r[a][u+2]==!0&&d.push([0,1]),d.length==0)return r;const o=d[Math.floor(Math.random()*d.length)];r[a+o[0]][u+o[1]]=!1,r=e(r,a+o[0]*2,u+o[1]*2)}}let n=new Array(t);n.dimension=t;for(var l=0;l<t;l++){n[l]=new Array(t);for(var s=0;s<t;s++)n[l][s]=!0}return n=e(n,1,1),n}generateWalls(t){const e=[],n=new Fe.Body({mass:0});for(let u=0;u<t.dimension;u++)for(let d=0;d<t.dimension;d++)if(t[u][d]){const o=new oi(1,1,1);o.translate(u,d,.5),e.push(o);const i=new Fe.Box(new Fe.Vec3(1,1,1));n.addShape(i,new Fe.Vec3(u,d,.5))}const l=tf(e,!0),s=new Ir().load(zt.textures.wall),r=new Dr({map:s}),a=new Qe(l,r);a.rotation.x=-Math.PI*.5,zt.scene.add(a),zt.physicsWorld.addBody(n)}generateFloor(t){const e=new Ji(t*10,t*10,t,t),n=new Ir().load(zt.textures.floor);n.wrapS=n.wrapT=ji,n.repeat.set(t*5,t*5);const l=new Dr({map:n}),s=new Qe(e,l);s.position.set(0,0,0),s.rotation.x=-Math.PI*.5;const r=new Fe.Plane,a=new Fe.Body({mass:0,shape:r});a.quaternion.setFromAxisAngle(new Fe.Vec3(-1,0,0),Math.PI*.5),zt.scene.add(s),zt.physicsWorld.addBody(a)}generateBall(t,e){const n=new Xr(t,32,16),l=new Ir().load(zt.textures.ball),s=new Dr({map:l}),r=new Qe(n,s);r.position.copy(e),zt.scene.add(r);const a=new Fe.Sphere(t),u=new Fe.Body({mass:1,shape:a});u.position.copy(e),zt.physicsWorld.addBody(u),zt.objectsToUpdate.push({mesh:r,body:u})}physicsWorld(){zt.physicsWorld=new Fe.World,zt.physicsWorld.gravity.set(0,-9.82,0);const t=new Fe.Material("default"),e=new Fe.ContactMaterial(t,t,{friction:.1,restitution:0});zt.physicsWorld.addContactMaterial(e),zt.physicsWorld.defaultContactMaterial=e}world(){zt.scene=new Xd,zt.light=new $d(16777215),zt.scene.add(zt.light),zt.camera=new Ke(75,zt.sizes.width/zt.sizes.height,.1,100),zt.camera.position.set(1,5,-1),zt.camera.rotation.x=-Math.PI*.5,zt.ball=zt.generateBall(ef,{x:1,y:4,z:-1}),zt.walls=zt.generateWalls(Br),zt.floor=zt.generateFloor(Ki),console.log(zt.ball)}render(){zt.renderer=new qr({canvas:zt.canvas}),zt.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),zt.renderer.setSize(zt.sizes.width,zt.sizes.height)}resize(){zt.sizes.width=window.innerWidth,zt.sizes.height=window.innerHeight,zt.camera.aspect=zt.sizes.width/zt.sizes.height,zt.camera.updateProjectionMatrix(),zt.renderer.setSize(zt.sizes.width,zt.sizes.height),zt.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}updatePhysicsWorld(){for(const n of zt.objectsToUpdate)n.mesh.position.copy(n.body.position);const t=nf.getElapsedTime(),e=t-ca;ca=t,zt.physicsWorld.step(1/60,e,3)}update(){zt.updatePhysicsWorld(),zt.renderer.render(zt.scene,zt.camera),requestAnimationFrame(zt.update)}}new rf(document.querySelector("canvas.webgl"))});export default sf();
//# sourceMappingURL=index-27dc36cd.js.map
