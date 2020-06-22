(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function q(a,b){if(b)a:{for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
q("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.f=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.f};
var d=0;return b});
q("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function r(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function fa(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ia="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ja=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ia(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ka;
if("function"==typeof Object.setPrototypeOf)ka=Object.setPrototypeOf;else{var la;a:{var ma={a:!0},na={};try{na.__proto__=ma;la=na.a;break a}catch(a){}la=!1}ka=la?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var oa=ka;
function u(a,b){a.prototype=ia(b.prototype);a.prototype.constructor=a;if(oa)oa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.M=b.prototype}
q("Reflect",function(a){return a?a:{}});
q("Reflect.construct",function(){return ja});
function pa(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
q("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=pa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
q("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=pa(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
function w(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var qa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)w(d,e)&&(a[e]=d[e])}return a};
q("Object.assign",function(a){return a||qa});
q("WeakMap",function(a){function b(k){this.f=(h+=Math.random()+1).toString();if(k){k=r(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!w(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m["delete"](k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!w(k,g))throw Error("WeakMap key fail: "+k);k[g][this.f]=l;return this};
b.prototype.get=function(k){return d(k)&&w(k,g)?k[g][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&w(k,g)&&w(k[g],this.f)};
b.prototype["delete"]=function(k){return d(k)&&w(k,g)&&w(k[g],this.f)?delete k[g][this.f]:!1};
return b});
q("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.f;return ea(function(){if(l){for(;l.head!=h.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.g[l];if(m&&w(h.g,l))for(var p=0;p<m.length;p++){var v=m[p];if(k!==k&&v.key!==v.key||k===v.key)return{id:l,list:m,index:p,u:v}}return{id:l,list:m,index:-1,u:void 0}}
function e(h){this.g={};this.f=b();this.size=0;if(h){h=r(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(r([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.g[l.id]=[]);l.u?l.u.value=k:(l.u={next:this.f,previous:this.f.previous,head:this.f,key:h,value:k},l.list.push(l.u),this.f.previous.next=l.u,this.f.previous=l.u,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.u&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.g[h.id],h.u.previous.next=h.u.next,h.u.next.previous=h.u.previous,h.u.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).u};
e.prototype.get=function(h){return(h=d(this,h).u)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
q("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)w(b,d)&&c.push([d,b[d]]);return c}});
q("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==pa(this,b,"includes").indexOf(b,c||0)}});
q("Set",function(a){function b(c){this.f=new Map;if(c){c=r(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(r([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
var x=this||self;function z(a,b,c){a=a.split(".");c=c||x;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
var ra=/^[\w+/_-]+[=]{0,2}$/,sa=null;function ta(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&ra.test(a)?a:""}
function A(a,b){for(var c=a.split("."),d=b||x,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function ua(){}
function va(a){a.ia=void 0;a.getInstance=function(){return a.ia?a.ia:a.ia=new a}}
function wa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function xa(a){var b=wa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function ya(a){return"function"==wa(a)}
function za(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Aa(a){return Object.prototype.hasOwnProperty.call(a,Ba)&&a[Ba]||(a[Ba]=++Ca)}
var Ba="closure_uid_"+(1E9*Math.random()>>>0),Ca=0;function Da(a,b,c){return a.call.apply(a.bind,arguments)}
function Ea(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function B(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?B=Da:B=Ea;return B.apply(null,arguments)}
function Fa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
var C=Date.now;function D(a,b){z(a,b,void 0)}
function E(a,b){function c(){}
c.prototype=b.prototype;a.M=b.prototype;a.prototype=new c;a.prototype.constructor=a}
function Ga(a){return a}
;function F(a){if(Error.captureStackTrace)Error.captureStackTrace(this,F);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
E(F,Error);F.prototype.name="CustomError";function Ha(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.h=!b&&/[?&]ae=1(&|$)/.test(a);this.i=!b&&/[?&]ae=2(&|$)/.test(a);if((this.f=/[?&]adurl=([^&]*)/.exec(a))&&this.f[1]){try{var c=decodeURIComponent(this.f[1])}catch(d){c=null}this.g=c}}
;var Ja=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},G=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ka=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},La=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Ma=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
G(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Na(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function Oa(a,b){var c=Ja(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Pa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Qa(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(xa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Ra(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function Sa(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Ta(a,b){var c=xa(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function Ua(a){var b=Va,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Wa(a){for(var b in a)return!1;return!0}
function Xa(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Ya(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function Za(a){var b={},c;for(c in a)b[c]=a[c];return b}
function $a(a){var b=wa(a);if("object"==b||"array"==b){if(ya(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=$a(a[c]);return b}return a}
var ab="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ab.length;f++)c=ab[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var cb;function db(){if(void 0===cb){var a=null,b=x.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Ga,createScript:Ga,createScriptURL:Ga})}catch(c){x.console&&x.console.error(c.message)}cb=a}else cb=a}return cb}
;function eb(a,b){this.f=a===fb&&b||"";this.g=gb}
eb.prototype.K=!0;eb.prototype.J=function(){return this.f};
function hb(a){return a instanceof eb&&a.constructor===eb&&a.g===gb?a.f:"type_error:Const"}
var gb={},fb={};function ib(a,b){this.f=a===jb&&b||"";this.g=kb}
ib.prototype.K=!0;ib.prototype.J=function(){return this.f.toString()};
ib.prototype.ha=!0;ib.prototype.ea=function(){return 1};
function lb(a){if(a instanceof ib&&a.constructor===ib&&a.g===kb)return a.f;wa(a);return"type_error:TrustedResourceUrl"}
var kb={};function mb(a){var b=db();a=b?b.createScriptURL(a):a;return new ib(jb,a)}
var jb={};var nb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function ob(a,b){if(b)a=a.replace(pb,"&amp;").replace(qb,"&lt;").replace(rb,"&gt;").replace(sb,"&quot;").replace(tb,"&#39;").replace(ub,"&#0;");else{if(!vb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(pb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(qb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(rb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(sb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(tb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(ub,"&#0;"))}return a}
var pb=/&/g,qb=/</g,rb=/>/g,sb=/"/g,tb=/'/g,ub=/\x00/g,vb=/[\x00&<>"']/;function H(a,b){this.f=a===wb&&b||"";this.g=xb}
H.prototype.K=!0;H.prototype.J=function(){return this.f.toString()};
H.prototype.ha=!0;H.prototype.ea=function(){return 1};
function yb(a){if(a instanceof H&&a.constructor===H&&a.g===xb)return a.f;wa(a);return"type_error:SafeUrl"}
var zb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Ab(a){if(a instanceof H)return a;a="object"==typeof a&&a.K?a.J():String(a);zb.test(a)||(a="about:invalid#zClosurez");return new H(wb,a)}
var xb={},Bb=new H(wb,"about:invalid#zClosurez"),wb={};var Cb;a:{var Db=x.navigator;if(Db){var Eb=Db.userAgent;if(Eb){Cb=Eb;break a}}Cb=""}function I(a){return-1!=Cb.indexOf(a)}
;function Fb(){this.f="";this.h=Gb;this.g=null}
Fb.prototype.ha=!0;Fb.prototype.ea=function(){return this.g};
Fb.prototype.K=!0;Fb.prototype.J=function(){return this.f.toString()};
var Gb={};function Ib(a,b){var c=new Fb,d=db();c.f=d?d.createHTML(a):a;c.g=b;return c}
;function Jb(a,b){var c=b instanceof H?b:Ab(b);a.href=yb(c)}
function Kb(a,b){a.src=lb(b);var c;(c=a.ownerDocument&&a.ownerDocument.defaultView)&&c!=x?c=ta(c.document):(null===sa&&(sa=ta(x.document)),c=sa);c&&a.setAttribute("nonce",c)}
;function Lb(a){return a=ob(a,void 0)}
function Mb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Nb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function J(a){return a?decodeURI(a):a}
function K(a,b){return b.match(Nb)[a]||null}
function Ob(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Ob(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Pb(a){var b=[],c;for(c in a)Ob(c,a[c],b);return b.join("&")}
function Qb(a,b){var c=Pb(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
var Rb=/#|$/;function Sb(a,b){var c=a.search(Rb);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}
;var Tb=I("Opera"),Ub=I("Trident")||I("MSIE"),Vb=I("Edge"),Wb=I("Gecko")&&!(-1!=Cb.toLowerCase().indexOf("webkit")&&!I("Edge"))&&!(I("Trident")||I("MSIE"))&&!I("Edge"),Xb=-1!=Cb.toLowerCase().indexOf("webkit")&&!I("Edge");function Yb(){var a=x.document;return a?a.documentMode:void 0}
var Zb;a:{var $b="",ac=function(){var a=Cb;if(Wb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Vb)return/Edge\/([\d\.]+)/.exec(a);if(Ub)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Xb)return/WebKit\/(\S+)/.exec(a);if(Tb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
ac&&($b=ac?ac[1]:"");if(Ub){var bc=Yb();if(null!=bc&&bc>parseFloat($b)){Zb=String(bc);break a}}Zb=$b}var cc=Zb,dc;if(x.document&&Ub){var ec=Yb();dc=ec?ec:parseInt(cc,10)||void 0}else dc=void 0;var fc=dc;var gc={},hc=null;var L=window;function ic(a){var b=A("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||x.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:(b=a.message,null==b&&(a.constructor&&
a.constructor instanceof Function?(a.constructor.name?b=a.constructor.name:(b=a.constructor,jc[b]?b=jc[b]:(b=String(b),jc[b]||(c=/function\s+([^\(]+)/m.exec(b),jc[b]=c?c[1]:"[Anonymous]"),b=jc[b])),b='Unknown Error of type "'+b+'"'):b="Unknown Error of unknown type"),{message:b,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:a.stack||"Not available"})}
var jc={};function kc(a){this.f=a||{cookie:""}}
n=kc.prototype;n.isEnabled=function(){return navigator.cookieEnabled};
n.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.vb;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.na}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(C()+1E3*h)).toUTCString();this.f.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+e:
"")};
n.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=nb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{na:0,path:b,domain:c});return d};
n.isEmpty=function(){return!this.f.cookie};
n.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=nb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var lc=new kc("undefined"==typeof document?null:document);var mc=!Ub||9<=Number(fc);function nc(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
n=nc.prototype;n.clone=function(){return new nc(this.x,this.y)};
n.equals=function(a){return a instanceof nc&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
n.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
n.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
n.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function oc(a,b){this.width=a;this.height=b}
n=oc.prototype;n.clone=function(){return new oc(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.isEmpty=function(){return!(this.width*this.height)};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function pc(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function qc(a,b){Sa(b,function(c,d){c&&"object"==typeof c&&c.K&&(c=c.J());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:rc.hasOwnProperty(d)?a.setAttribute(rc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var rc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function sc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!mc&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Lb(g.name),'"');if(g.type){f.push(' type="',Lb(g.type),'"');var h={};bb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=tc(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):qc(f,g));2<d.length&&uc(e,f,d);return f}
function uc(a,b,c){function d(g){g&&b.appendChild("string"===typeof g?a.createTextNode(g):g)}
for(var e=2;e<c.length;e++){var f=c[e];!xa(f)||za(f)&&0<f.nodeType?d(f):G(vc(f)?Pa(f):f,d)}}
function tc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function vc(a){if(a&&"number"==typeof a.length){if(za(a))return"function"==typeof a.item||"string"==typeof a.item;if(ya(a))return"function"==typeof a.item}return!1}
function wc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function xc(a){yc();return mb(a)}
var yc=ua;function zc(a){var b=Ac;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Bc(){var a=[];zc(function(b){a.push(b)});
return a}
var Ac={bb:"allow-forms",cb:"allow-modals",eb:"allow-orientation-lock",fb:"allow-pointer-lock",gb:"allow-popups",hb:"allow-popups-to-escape-sandbox",ib:"allow-presentation",jb:"allow-same-origin",kb:"allow-scripts",lb:"allow-top-navigation",mb:"allow-top-navigation-by-user-activation"},Cc=Ra(function(){return Bc()});
function Dc(){var a=tc(document,"IFRAME"),b={};G(Cc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function M(){this.g=this.g;this.D=this.D}
M.prototype.g=!1;M.prototype.dispose=function(){this.g||(this.g=!0,this.o())};
function Ec(a,b){a.g?b():(a.D||(a.D=[]),a.D.push(b))}
M.prototype.o=function(){if(this.D)for(;this.D.length;)this.D.shift()()};
function Fc(a){a&&"function"==typeof a.dispose&&a.dispose()}
function Gc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];xa(d)?Gc.apply(null,d):Fc(d)}}
;function Hc(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;mb(hb(new eb(fb,"//fonts.googleapis.com/css")));var Ic=(new Date).getTime();function Jc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"chrome"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";
var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Kc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(p){for(var v=g,t=0;64>t;t+=4)v[t/4]=p[t]<<24|p[t+1]<<16|p[t+2]<<8|p[t+3];for(t=16;80>t;t++)p=v[t-3]^v[t-8]^v[t-14]^v[t-16],v[t]=(p<<1|p>>>31)&4294967295;p=e[0];var y=e[1],W=e[2],ha=e[3],Mc=e[4];for(t=0;80>t;t++){if(40>t)if(20>t){var Ia=ha^y&(W^ha);var Hb=1518500249}else Ia=y^W^ha,Hb=1859775393;else 60>t?(Ia=y&W|ha&(y|W),Hb=2400959708):(Ia=y^W^ha,Hb=3395469782);Ia=((p<<5|p>>>27)&4294967295)+Ia+Mc+Hb+v[t]&4294967295;Mc=ha;ha=W;W=(y<<30|y>>>2)&4294967295;y=p;p=Ia}e[0]=e[0]+p&4294967295;e[1]=
e[1]+y&4294967295;e[2]=e[2]+W&4294967295;e[3]=e[3]+ha&4294967295;e[4]=e[4]+Mc&4294967295}
function c(p,v){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var t=[],y=0,W=p.length;y<W;++y)t.push(p.charCodeAt(y));p=t}v||(v=p.length);t=0;if(0==l)for(;t+64<v;)b(p.slice(t,t+64)),t+=64,m+=64;for(;t<v;)if(f[l++]=p[t++],m++,64==l)for(l=0,b(f);t+64<v;)b(p.slice(t,t+64)),t+=64,m+=64}
function d(){var p=[],v=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var t=63;56<=t;t--)f[t]=v&255,v>>>=8;b(f);for(t=v=0;5>t;t++)for(var y=24;0<=y;y-=8)p[v++]=e[t]>>y&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,za:function(){for(var p=d(),v="",t=0;t<p.length;t++)v+="0123456789ABCDEF".charAt(Math.floor(p[t]/16))+"0123456789ABCDEF".charAt(p[t]%16);return v}}}
;function Lc(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],G(d,function(h){e.push(h)}),Nc(e.join(" "));
var f=[],g=[];G(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];G(d,function(h){e.push(h)});
a=Nc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Nc(a){var b=Kc();b.update(a);return b.za().toLowerCase()}
;function Oc(a){var b=Jc(String(x.location.href)),c;(c=x.__SAPISID||x.__APISID||x.__OVERRIDE_SID)?c=!0:(c=new kc(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?x.__SAPISID:x.__APISID,c||(c=new kc(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(x.location.href);return d&&c&&b?[b,Lc(Jc(d),c,a||null)].join(" "):null}return null}
;function Pc(){this.g=[];this.f=-1}
Pc.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
Pc.prototype.get=function(a){return!!this.g[a]};
function Qc(a){-1==a.f&&(a.f=Ma(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function Rc(a,b){this.h=a;this.i=b;this.g=0;this.f=null}
Rc.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.h();return a};
function Sc(a,b){a.i(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function Tc(a){x.setTimeout(function(){throw a;},0)}
var Uc;
function Vc(){var a=x.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!I("Presto")&&(a=function(){var e=tc(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=B(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!I("Trident")&&!I("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.ma;c.ma=null;e()}};
return function(e){d.next={ma:e};d=d.next;b.port2.postMessage(0)}}return function(e){x.setTimeout(e,0)}}
;function Wc(){this.g=this.f=null}
var Yc=new Rc(function(){return new Xc},function(a){a.reset()});
Wc.prototype.add=function(a,b){var c=Yc.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
Wc.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function Xc(){this.next=this.scope=this.f=null}
Xc.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
Xc.prototype.reset=function(){this.next=this.scope=this.f=null};function Zc(a,b){$c||ad();bd||($c(),bd=!0);cd.add(a,b)}
var $c;function ad(){if(x.Promise&&x.Promise.resolve){var a=x.Promise.resolve(void 0);$c=function(){a.then(dd)}}else $c=function(){var b=dd;
!ya(x.setImmediate)||x.Window&&x.Window.prototype&&!I("Edge")&&x.Window.prototype.setImmediate==x.setImmediate?(Uc||(Uc=Vc()),Uc(b)):x.setImmediate(b)}}
var bd=!1,cd=new Wc;function dd(){for(var a;a=cd.remove();){try{a.f.call(a.scope)}catch(b){Tc(b)}Sc(Yc,a)}bd=!1}
;function ed(){this.g=-1}
;function fd(){this.g=64;this.f=[];this.l=[];this.m=[];this.i=[];this.i[0]=128;for(var a=1;a<this.g;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
E(fd,ed);fd.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.j=this.h=0};
function gd(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],h=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+k&4294967295}
fd.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.l,f=this.h;d<b;){if(0==f)for(;d<=c;)gd(this,a,d),d+=this.g;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){gd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){gd(this,e);f=0;break}}this.h=f;this.j+=b}};
fd.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.g-(this.h-56));for(var c=this.g-1;56<=c;c--)this.l[c]=b&255,b/=256;gd(this,this.l);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};function hd(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function id(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function jd(a,b){if(a.classList)var c=a.classList.contains(b);else c=a.classList?a.classList:hd(a).match(/\S+/g)||[],c=0<=Ja(c,b);return c}
function kd(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):jd(a,"inverted-hdpi")&&id(a,Ka(a.classList?a.classList:hd(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var ld="StopIteration"in x?x.StopIteration:{message:"StopIteration",stack:""};function md(){}
md.prototype.next=function(){throw ld;};
md.prototype.F=function(){return this};
function nd(a){if(a instanceof md)return a;if("function"==typeof a.F)return a.F(!1);if(xa(a)){var b=0,c=new md;c.next=function(){for(;;){if(b>=a.length)throw ld;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function od(a,b){if(xa(a))try{G(a,b,void 0)}catch(c){if(c!==ld)throw c;}else{a=nd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==ld)throw c;}}}
function pd(a){if(xa(a))return Pa(a);a=nd(a);var b=[];od(a,function(c){b.push(c)});
return b}
;function qd(a,b){this.h={};this.f=[];this.G=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof qd)for(c=rd(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function rd(a){sd(a);return a.f.concat()}
n=qd.prototype;n.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||td;sd(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function td(a,b){return a===b}
n.isEmpty=function(){return 0==this.g};
n.clear=function(){this.h={};this.G=this.g=this.f.length=0};
n.remove=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)?(delete this.h[a],this.g--,this.G++,this.f.length>2*this.g&&sd(this),!0):!1};
function sd(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.h,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
n.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.h,a)?this.h[a]:b};
n.set=function(a,b){Object.prototype.hasOwnProperty.call(this.h,a)||(this.g++,this.f.push(a),this.G++);this.h[a]=b};
n.forEach=function(a,b){for(var c=rd(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
n.clone=function(){return new qd(this)};
n.F=function(a){sd(this);var b=0,c=this.G,d=this,e=new md;e.next=function(){if(c!=d.G)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw ld;var f=d.f[b++];return a?f:d.h[f]};
return e};function ud(a){var b=[];vd(new wd,a,b);return b.join("")}
function wd(){}
function vd(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),vd(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),xd(d,c),c.push(":"),vd(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":xd(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var yd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},zd=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function xd(a,b){b.push('"',a.replace(zd,function(c){var d=yd[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),yd[c]=d);return d}),'"')}
;function Ad(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function N(a){this.f=0;this.m=void 0;this.i=this.g=this.h=null;this.j=this.l=!1;if(a!=ua)try{var b=this;a.call(void 0,function(c){Bd(b,2,c)},function(c){Bd(b,3,c)})}catch(c){Bd(this,3,c)}}
function Cd(){this.next=this.context=this.onRejected=this.g=this.f=null;this.h=!1}
Cd.prototype.reset=function(){this.context=this.onRejected=this.g=this.f=null;this.h=!1};
var Dd=new Rc(function(){return new Cd},function(a){a.reset()});
function Ed(a,b,c){var d=Dd.get();d.g=a;d.onRejected=b;d.context=c;return d}
function Fd(a){return new N(function(b,c){c(a)})}
N.prototype.then=function(a,b,c){return Gd(this,ya(a)?a:null,ya(b)?b:null,c)};
N.prototype.$goog_Thenable=!0;function Hd(a,b){return Gd(a,null,b,void 0)}
N.prototype.cancel=function(a){if(0==this.f){var b=new Id(a);Zc(function(){Jd(this,b)},this)}};
function Jd(a,b){if(0==a.f)if(a.h){var c=a.h;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.h||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?Jd(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):Kd(c),Ld(c,e,3,b)))}a.h=null}else Bd(a,3,b)}
function Md(a,b){a.g||2!=a.f&&3!=a.f||Nd(a);a.i?a.i.next=b:a.g=b;a.i=b}
function Gd(a,b,c,d){var e=Ed(null,null,null);e.f=new N(function(f,g){e.g=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Id?g(h):f(k)}catch(l){g(l)}}:g});
e.f.h=a;Md(a,e);return e.f}
N.prototype.A=function(a){this.f=0;Bd(this,2,a)};
N.prototype.C=function(a){this.f=0;Bd(this,3,a)};
function Bd(a,b,c){if(0==a.f){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;a:{var d=c,e=a.A,f=a.C;if(d instanceof N){Md(d,Ed(e||ua,f||null,a));var g=!0}else if(Ad(d))d.then(e,f,a),g=!0;else{if(za(d))try{var h=d.then;if(ya(h)){Od(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.m=c,a.f=b,a.h=null,Nd(a),3!=b||c instanceof Id||Pd(a,c))}}
function Od(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Nd(a){a.l||(a.l=!0,Zc(a.D,a))}
function Kd(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.i=null);return b}
N.prototype.D=function(){for(var a;a=Kd(this);)Ld(this,a,this.f,this.m);this.l=!1};
function Ld(a,b,c,d){if(3==c&&b.onRejected&&!b.h)for(;a&&a.j;a=a.h)a.j=!1;if(b.f)b.f.h=null,Qd(b,c,d);else try{b.h?b.g.call(b.context):Qd(b,c,d)}catch(e){Rd.call(null,e)}Sc(Dd,b)}
function Qd(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Pd(a,b){a.j=!0;Zc(function(){a.j&&Rd.call(null,b)})}
var Rd=Tc;function Id(a){F.call(this,a)}
E(Id,F);Id.prototype.name="cancel";function O(a){M.call(this);this.l=1;this.i=[];this.j=0;this.f=[];this.h={};this.m=!!a}
E(O,M);n=O.prototype;n.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.l;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.l=e+3;d.push(e);return e};
function Sd(a,b,c,d){if(b=a.h[b]){var e=a.f;(b=Na(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.O(b)}}
n.O=function(a){var b=this.f[a];if(b){var c=this.h[b];0!=this.j?(this.i.push(a),this.f[a+1]=ua):(c&&Oa(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
n.N=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.m)for(e=0;e<c.length;e++){var g=c[e];Td(this.f[g+1],this.f[g+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;c=this.i.pop();)this.O(c)}}return 0!=e}return!1};
function Td(a,b,c){Zc(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.h[a];b&&(G(b,this.O,this),delete this.h[a])}else this.f.length=0,this.h={}};
n.o=function(){O.M.o.call(this);this.clear();this.i.length=0};function Ud(a){this.f=a}
Ud.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,ud(b))};
Ud.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Ud.prototype.remove=function(a){this.f.remove(a)};function Vd(a){this.f=a}
E(Vd,Ud);function Wd(a){this.data=a}
function Xd(a){return void 0===a||a instanceof Wd?a:new Wd(a)}
Vd.prototype.set=function(a,b){Vd.M.set.call(this,a,Xd(b))};
Vd.prototype.g=function(a){a=Vd.M.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Vd.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Yd(a){this.f=a}
E(Yd,Vd);Yd.prototype.set=function(a,b,c){if(b=Xd(b)){if(c){if(c<C()){Yd.prototype.remove.call(this,a);return}b.expiration=c}b.creation=C()}Yd.M.set.call(this,a,b)};
Yd.prototype.g=function(a){var b=Yd.M.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<C()||c&&c>C())Yd.prototype.remove.call(this,a);else return b}};function Zd(){}
;function $d(){}
E($d,Zd);$d.prototype.clear=function(){var a=pd(this.F(!0)),b=this;G(a,function(c){b.remove(c)})};function ae(a){this.f=a}
E(ae,$d);n=ae.prototype;n.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
n.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.f.removeItem(a)};
n.F=function(a){var b=0,c=this.f,d=new md;d.next=function(){if(b>=c.length)throw ld;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
n.clear=function(){this.f.clear()};
n.key=function(a){return this.f.key(a)};function be(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
E(be,ae);function ce(a,b){this.g=a;this.f=null;if(Ub&&!(9<=Number(fc))){de||(de=new qd);this.f=de.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),de.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
E(ce,$d);var ee={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},de=null;function fe(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return ee[b]})}
n=ce.prototype;n.isAvailable=function(){return!!this.f};
n.set=function(a,b){this.f.setAttribute(fe(a),b);ge(this)};
n.get=function(a){a=this.f.getAttribute(fe(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.f.removeAttribute(fe(a));ge(this)};
n.F=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new md;d.next=function(){if(b>=c.length)throw ld;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
n.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);ge(this)};
function ge(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function he(a,b){this.g=a;this.f=b+"::"}
E(he,$d);he.prototype.set=function(a,b){this.g.set(this.f+a,b)};
he.prototype.get=function(a){return this.g.get(this.f+a)};
he.prototype.remove=function(a){this.g.remove(this.f+a)};
he.prototype.F=function(a){var b=this.g.F(!0),c=this,d=new md;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};function ie(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var je=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};z("yt.config_",je,void 0);function P(a){ie(je,arguments)}
function Q(a,b){return a in je?je[a]:b}
function ke(){return Q("PLAYER_CONFIG",{})}
function le(a){var b=je.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;function me(){var a=ne;A("yt.ads.biscotti.getId_")||z("yt.ads.biscotti.getId_",a,void 0)}
function oe(a){z("yt.ads.biscotti.lastId_",a,void 0)}
;var pe=[];function qe(a){pe.forEach(function(b){return b(a)})}
function re(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){se(b),qe(b)}}:a}
function se(a){var b=A("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=Q("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),P("ERRORS",b))}
function te(a){var b=A("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=Q("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),P("ERRORS",b))}
;function ue(a){a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),g=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?Array.isArray(b[f])?Qa(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(k){if("q"!=e[0]){var h=Error("Error decoding URL component");h.params={key:e[0],value:e[1]};se(h)}}}return b}
function ve(a){var b=[];Sa(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];G(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function we(a){"?"==a.charAt(0)&&(a=a.substr(1));return ue(a)}
function xe(a,b){return ye(a,b||{},!0)}
function ye(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=we(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return Qb(a,e)+d}
;function ze(a){var b=Ae;a=void 0===a?A("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(Be(b),Ce(b));b.ca_type="image";a&&(b.bid=a);return b}
function Be(a){var b={};b.dt=Ic;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?L:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!L.navigator&&"unknown"!==typeof L.navigator.javaEnabled&&!!L.navigator.javaEnabled&&L.navigator.javaEnabled();L.screen&&(b.u_h=L.screen.height,b.u_w=L.screen.width,b.u_ah=L.screen.availHeight,b.u_aw=L.screen.availWidth,b.u_cd=L.screen.colorDepth);
L.navigator&&L.navigator.plugins&&(b.u_nplug=L.navigator.plugins.length);L.navigator&&L.navigator.mimeTypes&&(b.u_nmime=L.navigator.mimeTypes.length);return b}
function Ce(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(p){}try{var e=b.outerWidth;var f=b.outerHeight}catch(p){}try{var g=b.innerWidth;var h=b.innerHeight}catch(p){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.f.top;try{var k=(c||window).document,l="CSS1Compat"==k.compatMode?k.documentElement:k.body;var m=(new oc(l.clientWidth,l.clientHeight)).round()}catch(p){m=new oc(-12245933,-12245933)}k=m;m={};l=new Pc;x.SVGElement&&
x.document.createElementNS&&l.set(0);c=Dc();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);x.crypto&&x.crypto.subtle&&l.set(3);x.TextDecoder&&x.TextEncoder&&l.set(4);l=Qc(l);m.bc=l;m.bih=k.height;m.biw=k.width;m.brdim=b.join();a=a.g;return m.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,m.wgl=!!L.WebGLRenderingContext,m}
var Ae=new function(){var a=window.document;this.f=window;this.g=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return ve(ze(a))},void 0);C();function R(a){a=De(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Ee(a,b){var c=De(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function De(a){var b=Q("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:Q("EXPERIMENT_FLAGS",{})[a]}
;var Fe=void 0!==XMLHttpRequest?function(){return new XMLHttpRequest}:void 0!==ActiveXObject?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function Ge(){if(!Fe)return null;var a=Fe();return"open"in a?a:null}
function He(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function S(a,b){ya(a)&&(a=re(a));return window.setTimeout(a,b)}
function T(a){window.clearTimeout(a)}
;var Ie={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Je="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
Ke=!1;
function Le(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=K(1,a),e=J(K(3,a));d&&e?(d=c,c=a.match(Nb),d=d.match(Nb),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?J(K(3,c))==e&&(Number(K(4,c))||null)==(Number(K(4,a))||null):!0;d=R("web_ajax_ignore_global_headers_if_set");for(var f in Ie)e=Q(Ie[f]),!e||!c&&!Me(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||Me(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||Me(a,"X-YouTube-Time-Zone"))&&(f="undefined"!=typeof Intl?
(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=f);if(c||Me(a,"X-YouTube-Ad-Signals"))b["X-YouTube-Ad-Signals"]=ve(ze(void 0));return b}
function Ne(a){var b=window.location.search,c=J(K(3,a)),d=J(K(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=we(b),f={};G(Je,function(g){e[g]&&(f[g]=e[g])});
return ye(a,f||{},!1)}
function Me(a,b){var c=Q("CORS_HEADER_WHITELIST")||{},d=J(K(3,a));return d?(c=c[d])?0<=Ja(c,b):!1:!0}
function Oe(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Pe(a,b);var d=Qe(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&T(f);var h=g.ok,k=function(l){l=l||{};var m=b.context||x;h?b.onSuccess&&b.onSuccess.call(m,l,g):b.onError&&b.onError.call(m,l,g);b.ja&&b.ja.call(m,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.sa&&0<b.timeout&&(f=S(function(){e||(e=!0,T(f),b.sa.call(b.context||x))},b.timeout))}else Re(a,b)}
function Re(a,b){var c=b.format||"JSON";a=Pe(a,b);var d=Qe(a,b),e=!1,f=Se(a,function(k){if(!e){e=!0;h&&T(h);var l=He(k),m=null,p=400<=k.status&&500>k.status,v=500<=k.status&&600>k.status;if(l||p||v)m=Te(a,c,k,b.qb);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=!!m}m=m||{};p=b.context||x;l?b.onSuccess&&b.onSuccess.call(p,k,m):b.onError&&b.onError.call(p,k,m);b.ja&&b.ja.call(p,k,m)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
if(b.P&&0<b.timeout){var g=b.P;var h=S(function(){e||(e=!0,f.abort(),T(h),g.call(b.context||x,f))},b.timeout)}return f}
function Pe(a,b){b.tb&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=Q("XSRF_FIELD_NAME",void 0),d=b.ab;d&&(d[c]&&delete d[c],a=xe(a,d));return a}
function Qe(a,b){var c=Q("XSRF_FIELD_NAME",void 0),d=Q("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.B,g=Q("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.sb||J(K(3,a))&&!b.withCredentials&&J(K(3,a))!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.B&&b.B[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=we(e),bb(e,f),e=b.ta&&"JSON"==b.ta?JSON.stringify(e):Pb(e));f=e||f&&!Wa(f);!Ke&&f&&"POST"!=b.method&&(Ke=!0,se(Error("AJAX request with postData should use POST")));
return e}
function Te(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,te(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Ue(a):null)e={},G(a.getElementsByTagName("*"),function(g){e[g.tagName]=Ve(g)})}d&&We(e);
return e}
function We(a){if(za(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];var e=new eb(fb,"HTML that is escaped and sanitized server-side and passed through yt.net.ajax");hb(e);hb(e);d=Ib(d,null);a[c]=d}else We(a[b])}}
function Ue(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Ve(a){var b="";G(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Se(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&re(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Ge();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;R("debug_forward_web_query_parameters")&&(a=Ne(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Le(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Xe={},Ye=0;
function Ze(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=Cb,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a instanceof H||(a="object"==typeof a&&a.K?a.J():String(a),a=zb.test(a)?new H(wb,a):null),b=yb(a||Bb),"about:invalid#zClosurez"===b?a="":(b instanceof Fb?a=b:(d="object"==typeof b,a=null,d&&b.ha&&(a=b.ea()),b=ob(d&&b.K?b.J():String(b)),a=Ib(b,a)),a instanceof Fb&&a.constructor===Fb&&a.h===Gb?a=a.f:(wa(a),a="type_error:SafeHtml"),a=encodeURIComponent(String(ud(a.toString())))),/^[\s\xa0]*$/.test(a)||(a=
sc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))):e?Se(a,b,"POST",e,d):Q("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Se(a,b,"GET","",d):$e(a,b)||af(a,b))}
function $e(a,b){if(!le("web_use_beacon_api_for_ad_click_server_pings"))return!1;if(le("use_sonic_js_library_for_v4_support")){a:{try{var c=new Ha({url:a});if(c.h&&c.g||c.i){var d=J(K(5,a));var e=!(!d||!d.endsWith("/aclk")||"1"!==Sb(a,"ri"));break a}}catch(f){}e=!1}if(!e)return!1}else if(e=J(K(5,a)),!e||-1==e.indexOf("/aclk")||"1"!==Sb(a,"ae")||"1"!==Sb(a,"act"))return!1;return bf(a)?(b&&b(),!0):!1}
function bf(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function af(a,b){var c=new Image,d=""+Ye++;Xe[d]=c;c.onload=c.onerror=function(){b&&Xe[d]&&b();delete Xe[d]};
c.src=a}
;var cf=0;z("ytDomDomGetNextId",A("ytDomDomGetNextId")||function(){return++cf},void 0);var df={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function ef(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in df||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.f=a.pageX;this.g=a.pageY}}catch(e){}}
function ff(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.f=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.g=a.clientY+b}}
ef.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
ef.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
ef.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Va=x.ytEventsEventsListeners||{};z("ytEventsEventsListeners",Va,void 0);var gf=x.ytEventsEventsCounter||{count:0};z("ytEventsEventsCounter",gf,void 0);
function hf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Ua(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=za(e[4])&&za(d)&&Ya(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var jf=Ra(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function U(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=hf(a,b,c,d);if(e)return e;e=++gf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new ef(h);if(!wc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new ef(h);
h.currentTarget=a;return c.call(a,h)};
g=re(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),jf()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Va[e]=[a,b,c,g,d];return e}
function kf(a){a&&("string"==typeof a&&(a=[a]),G(a,function(b){if(b in Va){var c=Va[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?jf()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Va[b]}}))}
;var lf=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function mf(a){this.A=a;this.f=null;this.j=0;this.m=null;this.l=0;this.h=[];for(a=0;4>a;a++)this.h.push(0);this.i=0;this.H=U(window,"mousemove",B(this.I,this));a=B(this.C,this);ya(a)&&(a=re(a));this.L=window.setInterval(a,25)}
E(mf,M);mf.prototype.I=function(a){void 0===a.f&&ff(a);var b=a.f;void 0===a.g&&ff(a);this.f=new nc(b,a.g)};
mf.prototype.C=function(){if(this.f){var a=lf();if(0!=this.j){var b=this.m,c=this.f,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.j);this.h[this.i]=.5<Math.abs((d-this.l)/this.l)?1:0;for(c=b=0;4>c;c++)b+=this.h[c]||0;3<=b&&this.A();this.l=d}this.j=a;this.m=this.f;this.i=(this.i+1)%4}};
mf.prototype.o=function(){window.clearInterval(this.L);kf(this.H)};function nf(){}
function of(a,b){return pf(a,1,b)}
;function qf(){}
u(qf,nf);function pf(a,b,c){isNaN(c)&&(c=void 0);var d=A("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):S(a,c||0)}
qf.prototype.start=function(){var a=A("yt.scheduler.instance.start");a&&a()};
qf.prototype.pause=function(){var a=A("yt.scheduler.instance.pause");a&&a()};
va(qf);qf.getInstance();var rf={};function sf(a){var b=void 0===a?{}:a;a=void 0===b.Ea?!0:b.Ea;b=void 0===b.Pa?!1:b.Pa;if(null==A("_lact",window)){var c=parseInt(Q("LACT"),10);c=isFinite(c)?C()-Math.max(c,0):-1;z("_lact",c,window);z("_fact",c,window);-1==c&&V();U(document,"keydown",V);U(document,"keyup",V);U(document,"mousedown",V);U(document,"mouseup",V);a&&(b?U(window,"touchmove",function(){tf("touchmove",200)},{passive:!0}):(U(window,"resize",function(){tf("resize",200)}),U(window,"scroll",function(){tf("scroll",200)})));
new mf(function(){tf("mouse",100)});
U(document,"touchstart",V,{passive:!0});U(document,"touchend",V,{passive:!0})}}
function tf(a,b){rf[a]||(rf[a]=!0,of(function(){V();rf[a]=!1},b))}
function V(){null==A("_lact",window)&&sf();var a=C();z("_lact",a,window);-1==A("_fact",window)&&z("_fact",a,window);(a=A("ytglobal.ytUtilActivityCallback_"))&&a()}
function uf(){var a=A("_lact",window),b;null==a?b=-1:b=Math.max(C()-a,0);return b}
;var vf=x.ytPubsubPubsubInstance||new O;O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.O;O.prototype.publish=O.prototype.N;O.prototype.clear=O.prototype.clear;z("ytPubsubPubsubInstance",vf,void 0);var wf=x.ytPubsubPubsubSubscribedKeys||{};z("ytPubsubPubsubSubscribedKeys",wf,void 0);var xf=x.ytPubsubPubsubTopicToKeys||{};z("ytPubsubPubsubTopicToKeys",xf,void 0);var yf=x.ytPubsubPubsubIsSynchronous||{};z("ytPubsubPubsubIsSynchronous",yf,void 0);
function zf(a,b){var c=Af();if(c){var d=c.subscribe(a,function(){var e=arguments;var f=function(){wf[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{yf[a]?f():S(f,0)}catch(g){se(g)}},void 0);
wf[d]=!0;xf[a]||(xf[a]=[]);xf[a].push(d);return d}return 0}
function Bf(a){var b=Af();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),G(a,function(c){b.unsubscribeByKey(c);delete wf[c]}))}
function Cf(a,b){var c=Af();c&&c.publish.apply(c,arguments)}
function Df(a){var b=Af();if(b)if(b.clear(a),a)Ef(a);else for(var c in xf)Ef(c)}
function Af(){return x.ytPubsubPubsubInstance}
function Ef(a){xf[a]&&(a=xf[a],G(a,function(b){wf[b]&&delete wf[b]}),a.length=0)}
;var Ff=window,X=Ff.ytcsi&&Ff.ytcsi.now?Ff.ytcsi.now:Ff.performance&&Ff.performance.timing&&Ff.performance.now&&Ff.performance.timing.navigationStart?function(){return Ff.performance.timing.navigationStart+Ff.performance.now()}:function(){return(new Date).getTime()};var Gf=Ee("initial_gel_batch_timeout",1E3),Hf=Math.pow(2,16)-1,If=null,Jf=0,Kf=void 0,Lf=0,Mf=0,Nf=0,Of=!0,Pf=x.ytLoggingTransportLogPayloadsQueue_||{};z("ytLoggingTransportLogPayloadsQueue_",Pf,void 0);var Qf=x.ytLoggingTransportGELQueue_||new Map;z("ytLoggingTransportGELQueue_",Qf,void 0);var Rf=x.ytLoggingTransportTokensToCttTargetIds_||{};z("ytLoggingTransportTokensToCttTargetIds_",Rf,void 0);
function Sf(){T(Lf);T(Mf);Mf=0;Kf&&Kf.isReady()?(Tf(Qf),"log_event"in Pf&&Tf(Object.entries(Pf.log_event)),Qf.clear(),delete Pf.log_event):Uf()}
function Uf(){R("web_gel_timeout_cap")&&!Mf&&(Mf=S(Sf,6E4));T(Lf);var a=Q("LOGGING_BATCH_TIMEOUT",Ee("web_gel_debounce_ms",1E4));R("shorten_initial_gel_batch_timeout")&&Of&&(a=Gf);Lf=S(Sf,a)}
function Tf(a){var b=Kf,c=Math.round(X());a=r(a);for(var d=a.next();!d.done;d=a.next()){var e=r(d.value);d=e.next().value;var f=e.next().value;e=$a({context:Vf(b.f||Wf())});e.events=f;(f=Rf[d])&&Xf(e,d,f);delete Rf[d];Yf(e,c);Zf(b,"log_event",e,{retry:!0,onSuccess:function(){Jf=Math.round(X()-c)}});
Of=!1}}
function Yf(a,b){a.requestTimeMs=String(b);R("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=Q("EVENT_ID",void 0);if(c){var d=Q("BATCH_CLIENT_COUNTER",void 0)||0;!d&&R("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*Hf/2));d++;d>Hf&&(d=1);P("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;If&&Jf&&R("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:If,roundtripMs:String(Jf)});If=c;Jf=0}}
function Xf(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var $f=x.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",$f,void 0);
function ag(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||X());e[a]=b;e.context={lastActivityMs:String(d.timestamp?-1:uf())};R("log_sequence_info_on_gel_web")&&d.R&&(a=e.context,b=d.R,$f[b]=b in $f?$f[b]+1:0,a.sequence={index:$f[b],groupKey:b},d.rb&&delete $f[d.R]);d=d.da;a="";d&&(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),Rf[d.token]=a,a=d.token);d=Qf.get(a)||[];Qf.set(a,d);d.push(e);c&&(Kf=new c);c=Ee("web_logging_max_batch")||100;e=
X();d.length>=c?Sf():10<=e-Nf&&(Uf(),Nf=e)}
;function bg(){for(var a={},b=r(Object.entries(we(Q("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=r(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a}
;function cg(){return"INNERTUBE_API_KEY"in je&&"INNERTUBE_API_VERSION"in je}
function Wf(){return{innertubeApiKey:Q("INNERTUBE_API_KEY",void 0),innertubeApiVersion:Q("INNERTUBE_API_VERSION",void 0),Fa:Q("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Ga:Q("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:Q("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Ia:Q("INNERTUBE_CONTEXT_HL",void 0),Ha:Q("INNERTUBE_CONTEXT_GL",void 0),Ja:Q("INNERTUBE_HOST_OVERRIDE",void 0)||"",Ka:!!Q("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)}}
function Vf(a){a={client:{hl:a.Ia,gl:a.Ha,clientName:a.Ga,clientVersion:a.innertubeContextClientVersion,configInfo:a.Fa}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));b=Q("EXPERIMENTS_TOKEN","");""!==b&&(a.client.experimentsToken=b);b=[];var c=Q("EXPERIMENTS_FORCED_FLAGS",{});for(d in c)b.push({key:d,value:String(c[d])});var d=Q("EXPERIMENT_FLAGS",{});for(var e in d)e.startsWith("force_")&&void 0===c[e]&&b.push({key:e,value:String(d[e])});0<b.length&&(a.request={internalExperimentFlags:b});
Q("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(a.user={onBehalfOfUser:Q("DELEGATED_SESSION_ID")});a.client=Object.assign(a.client,bg());return a}
function dg(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||Q("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.ob||Q("AUTHORIZATION"))||(a?b="Bearer "+A("gapi.auth.getToken")().nb:b=Oc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=Q("SESSION_INDEX",0),R("pageid_as_header_web")&&(d["X-Goog-PageId"]=Q("DELEGATED_SESSION_ID")));return d}
function eg(a){a=Object.assign({},a);delete a.Authorization;var b=Oc();if(b){var c=new fd;c.update(Q("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;xa(b);void 0===c&&(c=0);if(!hc){hc={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));gc[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===hc[k]&&(hc[k]=h)}}}c=gc[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],m=(f=e+1<b.length)?
b[e+1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|m>>4;m=(m&15)<<2|k>>6;k&=63;g||(k=64,f||(m=64));d.push(c[h],c[l],c[m]||"",c[k]||"")}a.hash=d.join("")}return a}
;function fg(a,b,c,d){lc.set(""+a,b,{na:c,path:"/",domain:void 0===d?"youtube.com":d,secure:!1})}
;function gg(){var a=new be;(a=a.isAvailable()?new he(a,"yt.innertube"):null)||(a=new ce("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new Yd(a):null;this.g=document.domain||window.location.hostname}
gg.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,C()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(ud(b))}catch(f){return}else e=escape(b);fg(a,e,c,this.g)};
gg.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=lc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
gg.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;lc.remove(""+a,"/",void 0===b?"youtube.com":b)};var hg=new gg;function ig(a,b,c,d){if(d)return null;d=hg.get("nextId",!0)||1;var e=hg.get("requests",!0)||{};e[d]={method:a,request:b,authState:eg(c),requestTime:Math.round(X())};hg.set("nextId",d+1,86400,!0);hg.set("requests",e,86400,!0);return d}
function jg(a){var b=hg.get("requests",!0)||{};delete b[a];hg.set("requests",b,86400,!0)}
function kg(a){var b=hg.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(X())-d.requestTime)){var e=d.authState,f=eg(dg(!1));Ya(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(X())),Zf(a,d.method,e,{}));delete b[c]}}hg.set("requests",b,86400,!0)}}
;function lg(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:fa(r(c)))}
u(lg,Error);function mg(a){var b=this;this.f=null;a?this.f=a:cg()&&(this.f=Wf());pf(function(){kg(b)},0,5E3)}
mg.prototype.isReady=function(){!this.f&&cg()&&(this.f=Wf());return!!this.f};
function Zf(a,b,c,d){!Q("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&te(new lg("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady())throw b=new lg("innertube xhrclient not ready",b,c,d),se(b),b.f=0,b;var e={headers:{"Content-Type":"application/json"},method:"POST",B:c,ta:"JSON",P:function(){d.P()},
sa:d.P,onSuccess:function(v,t){if(d.onSuccess)d.onSuccess(t)},
ra:function(v){if(d.onSuccess)d.onSuccess(v)},
onError:function(v,t){if(d.onError)d.onError(t)},
ub:function(v){if(d.onError)d.onError(v)},
timeout:d.timeout,withCredentials:!0},f="",g=a.f.Ja;g&&(f=g);g=a.f.Ka||!1;var h=dg(g,f,d);Object.assign(e.headers,h);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var k=xe(""+f+("/youtubei/"+a.f.innertubeApiVersion+"/"+b),{alt:"json",key:a.f.innertubeApiKey}),l;if(d.retry&&R("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(l=ig(b,c,h,g))){var m=e.onSuccess,p=e.ra;e.onSuccess=function(v,t){jg(l);m(v,t)};
c.ra=function(v,t){jg(l);p(v,t)}}try{R("use_fetch_for_op_xhr")?Oe(k,e):(e.method="POST",e.B||(e.B={}),Re(k,e))}catch(v){if("InvalidAccessError"==v.name)l&&(jg(l),l=0),te(Error("An extension is blocking network request."));
else throw v;}l&&pf(function(){kg(a)},0,5E3)}
;function ng(a,b,c){c=void 0===c?{}:c;var d=mg;Q("ytLoggingEventsDefaultDisabled",!1)&&mg==mg&&(d=null);ag(a,b,d,c)}
;var og=[{oa:function(a){return"Cannot read property '"+a.key+"'"},
ka:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{oa:function(a){return"Cannot call '"+
a.key+"'"},
ka:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
groups:["key"]}]}}];var pg=new Set,qg=0,rg=void 0;function sg(a){tg(a,"WARNING")}
function tg(a,b,c,d,e){e=void 0===e?{}:e;e.name=c||Q("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=d||Q("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=e||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;var f=void 0===f?!1:f;if(a&&(R("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),a)),(window&&
window.yterr||f)&&!(5<=qg)&&0!==a.f)){var g=ic(a);f=g.message||"Unknown Error";d=g.name||"UnknownError";e=g.lineNumber||"Not available";var h=g.fileName||"Not available";g=g.stack||a.g||"Not available";if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var k=0,l=0;l<a.args.length;l++){var m=a.args[l],p="params."+l;k+=p.length;if(m)if(Array.isArray(m))for(var v=c,t=0;t<m.length&&!(m[t]&&(k+=ug(t,m[t],p,v),500<k));t++);else if("object"===typeof m)for(v in v=void 0,t=c,m){if(m[v]&&(k+=ug(v,m[v],
p,t),500<k))break}else c[p]=String(JSON.stringify(m)).substring(0,500),k+=c[p].length;else c[p]=String(JSON.stringify(m)).substring(0,500),k+=c[p].length;if(500<=k)break}else if(a.hasOwnProperty("params")&&a.params)if(m=a.params,"object"===typeof a.params)for(l in p=0,m){if(m[l]&&(k="params."+l,v=String(JSON.stringify(m[l])).substr(0,500),c[k]=v,p+=k.length+v.length,500<p))break}else c.params=String(JSON.stringify(m)).substr(0,500);c={message:f,name:d,lineNumber:e,fileName:h,stack:g,params:c};a=Number(a.columnNumber);
isNaN(a)||(c.lineNumber=c.lineNumber+":"+a);void 0===rg&&(rg=Math.random()<Ee("log_js_error_clusters"));if(!0===rg)a:for(d=r(og),a=d.next();!a.done;a=d.next())if(a=a.value,a.ka[c.name])for(e=r(a.ka[c.name]),f=e.next();!f.done;f=e.next())if(h=f.value,f=c.message.match(h.regexp)){c.params["error.original"]=f[0];d=h.groups;e={};for(h=0;h<d.length;h++)e[d[h]]=f[h+1],c.params["error."+d[h]]=f[h+1];c.message=a.oa(e);break a}window.yterr&&"function"===typeof window.yterr&&window.yterr(c);if(!(pg.has(c.message)||
0<=c.stack.indexOf("/YouTubeCenter.js")||0<=c.stack.indexOf("/mytube.js"))){if(R("kevlar_gel_error_routing")){a=b;var y;f={stackTrace:c.stack};c.fileName&&(f.filename=c.fileName);d=(null===(y=c.lineNumber)||void 0===y?0:y.split)?c.lineNumber.split(":"):[];0!==d.length&&(1!==d.length||isNaN(Number(d[0]))?2!==d.length||isNaN(Number(d[0]))||isNaN(Number(d[1]))||(f.lineNumber=Number(d[0]),f.columnNumber=Number(d[1])):f.lineNumber=Number(d[0]));y={level:"ERROR_LEVEL_UNKNOWN",message:c.message};"ERROR"===
a?y.level="ERROR_LEVEL_ERROR":"WARNING"===a&&(y.level="ERROR_LEVEL_WARNNING");a={isObfuscated:!0,browserStackInfo:f};f={pageUrl:window.location.href,kvPairs:[]};if(d=c.params)for(e=r(Object.keys(d)),h=e.next();!h.done;h=e.next())h=h.value,f.kvPairs.push({key:"client."+h,value:String(d[h])});ng("clientError",{errorMetadata:f,stackTrace:a,logMessage:y});Sf()}y=c.params||{};b={ab:{a:"logerror",t:"jserror",type:c.name,msg:c.message.substr(0,250),line:c.lineNumber,level:b,"client.name":y.name},B:{url:Q("PAGE_NAME",
window.location.href),file:c.fileName},method:"POST"};y.version&&(b["client.version"]=y.version);if(b.B){c.stack&&(b.B.stack=c.stack);a=r(Object.keys(y));for(f=a.next();!f.done;f=a.next())f=f.value,b.B["client."+f]=y[f];if(y=Q("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(a=r(Object.keys(y)),f=a.next();!f.done;f=a.next())f=f.value,b.B[f]=y[f];y=Q("SERVER_NAME",void 0);a=Q("SERVER_VERSION",void 0);y&&a&&(b.B["server.name"]=y,b.B["server.version"]=a)}Re(Q("ECATCHER_REPORT_HOST","")+"/error_204",
b);pg.add(c.message);qg++}}}
function ug(a,b,c,d){c+="."+a;a=String(JSON.stringify(b)).substr(0,500);d[c]=a;return c.length+a.length}
;function vg(a,b,c,d,e,f){tg(a,void 0===b?"ERROR":b,c,d,f)}
;var wg=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};z("yt.msgs_",wg,void 0);function xg(a){ie(wg,arguments)}
;function yg(a){a&&(a.dataset?a.dataset[zg("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Ag(a,b){return a?a.dataset?a.dataset[zg(b)]:a.getAttribute("data-"+b):null}
var Bg={};function zg(a){return Bg[a]||(Bg[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Cg=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Dg=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Eg(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Cg,""),c=c.replace(Dg,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Fg(a,b,c)}
function Fg(a,b,c){c=void 0===c?null:c;var d=Gg(a),e=document.getElementById(d),f=e&&Ag(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=zf(d,b),b=""+Aa(b),Hg[b]=f),g||(e=Ig(a,d,function(){Ag(e,"loaded")||(yg(e),Cf(d),S(Fa(Df,d),0))},c)))}
function Ig(a,b,c,d){d=void 0===d?null:d;var e=tc(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Kb(e,xc(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Jg(a){a=Gg(a);var b=document.getElementById(a);b&&(Df(a),b.parentNode.removeChild(b))}
function Kg(a,b){if(a&&b){var c=""+Aa(b);(c=Hg[c])&&Bf(c)}}
function Gg(a){var b=document.createElement("a");Jb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Mb(a)}
var Hg={};var Lg=[],Mg=!1;function Ng(){if("1"!=Ta(ke(),"args","privembed")){var a=function(){Mg=!0;"google_ad_status"in window?P("DCLKSTAT",1):P("DCLKSTAT",2)};
Eg("//static.doubleclick.net/instream/ad_status.js",a);Lg.push(of(function(){Mg||"google_ad_status"in window||(Kg("//static.doubleclick.net/instream/ad_status.js",a),Mg=!0,P("DCLKSTAT",3))},5E3))}}
function Og(){return parseInt(Q("DCLKSTAT",0),10)}
;function Pg(){this.g=!1;this.f=null}
Pg.prototype.initialize=function(a,b,c,d,e,f){var g=this;f=void 0===f?!1:f;b?(this.g=!0,Eg(b,function(){g.g=!1;window.botguard?Qg(g,c,d,f):(Jg(b),sg(new lg("Unable to load Botguard","from "+b)))},e)):a&&(eval(a),window.botguard?Qg(this,c,d,f):sg(Error("Unable to load Botguard from JS")))};
function Qg(a,b,c,d){if(d)try{a.f=new window.botguard.bg(b,c?function(){return c(b)}:ua)}catch(e){sg(e)}else{try{a.f=new window.botguard.bg(b)}catch(e){sg(e)}c&&c(b)}}
Pg.prototype.dispose=function(){this.f=null};var Rg=new Pg,Sg=!1,Tg=0,Ug="";function Vg(a){R("botguard_periodic_refresh")?Tg=X():R("botguard_always_refresh")&&(Ug=a)}
function Wg(a){if(a){if(Rg.g)return!1;if(R("botguard_periodic_refresh"))return 72E5<X()-Tg;if(R("botguard_always_refresh"))return Ug!=a}else return!1;return!Sg}
function Xg(){return!!Rg.f}
function Yg(a){a=void 0===a?{}:a;a=void 0===a?{}:a;return Rg.f?Rg.f.invoke(void 0,void 0,a):null}
;var Zg=C().toString();
function $g(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=C();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Zg)for(a=1,b=0;b<Zg.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Zg.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var ah=x.ytLoggingDocDocumentNonce_||$g();z("ytLoggingDocDocumentNonce_",ah,void 0);var bh=1;function ch(a){this.f=a}
function dh(a){var b={};void 0!==a.f.trackingParams?b.trackingParams=a.f.trackingParams:(b.veType=a.f.veType,void 0!==a.f.veCounter&&(b.veCounter=a.f.veCounter),void 0!==a.f.elementIndex&&(b.elementIndex=a.f.elementIndex));void 0!==a.f.dataElement&&(b.dataElement=dh(a.f.dataElement));void 0!==a.f.youtubeData&&(b.youtubeData=a.f.youtubeData);return b}
ch.prototype.toString=function(){return JSON.stringify(dh(this))};function eh(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function fh(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function gh(a){return Q(fh(void 0===a?0:a),void 0)}
z("yt_logging_screen.getRootVeType",gh,void 0);function hh(){var a=gh(0),b;a?b=new ch({veType:a,youtubeData:void 0}):b=null;return b}
function ih(){var a=Q("csn-to-ctt-auth-info");a||(a={},P("csn-to-ctt-auth-info",a));return a}
function jh(a){a=void 0===a?0:a;var b=Q(eh(a));if(!b&&!Q("USE_CSN_FALLBACK",!0))return null;b||0!=a||(R("kevlar_client_side_screens")||R("c3_client_side_screens")?b="UNDEFINED_CSN":b=Q("EVENT_ID"));return b?b:null}
z("yt_logging_screen.getCurrentCsn",jh,void 0);function kh(a,b,c){var d=ih();(c=jh(c))&&delete d[c];b&&(d[a]=b)}
function lh(a){return ih()[a]}
z("yt_logging_screen.getCttAuthInfo",lh,void 0);function mh(a,b,c,d){c=void 0===c?0:c;if(a!==Q(eh(c))||b!==Q(fh(c)))if(kh(a,d,c),P(eh(c),a),P(fh(c),b),0==c||R("web_screen_associated_all_layers"))b=function(){setTimeout(function(){a&&ag("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:ah,clientScreenNonce:a},mg)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
z("yt_logging_screen.setCurrentScreen",mh,void 0);function nh(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=Q("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=Q("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=J(K(3,window.location.href));g&&f.push(g);g=J(K(3,d));if(0<=Ja(f,g)||!g&&0==d.lastIndexOf("/",0))if(R("autoescape_tempdata_url")&&(f=document.createElement("a"),Jb(f,d),d=f.href),d){g=d.match(Nb);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||
b.ved)&&(b=Object.assign({csn:jh()},b)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&(e=b,b="ST-"+Mb(d).toString(36),e=e?Pb(e):"",fg(b,e,k||5))}else k=b,e="ST-"+Mb(d).toString(36),k=k?Pb(k):"",fg(e,k,5)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var m=void 0===m?"":m;var p=void 0===p?window:p;c=p.location;a=Qb(a,l)+m;a=a instanceof H?a:Ab(a);c.href=yb(a)}return!0}
;function oh(a,b){this.version=a;this.args=b}
;function ph(a,b){this.topic=a;this.f=b}
ph.prototype.toString=function(){return this.topic};var qh=A("ytPubsub2Pubsub2Instance")||new O;O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.O;O.prototype.publish=O.prototype.N;O.prototype.clear=O.prototype.clear;z("ytPubsub2Pubsub2Instance",qh,void 0);var rh=A("ytPubsub2Pubsub2SubscribedKeys")||{};z("ytPubsub2Pubsub2SubscribedKeys",rh,void 0);var sh=A("ytPubsub2Pubsub2TopicToKeys")||{};z("ytPubsub2Pubsub2TopicToKeys",sh,void 0);var th=A("ytPubsub2Pubsub2IsAsync")||{};z("ytPubsub2Pubsub2IsAsync",th,void 0);
z("ytPubsub2Pubsub2SkipSubKey",null,void 0);function uh(a,b){var c=vh();c&&c.publish.call(c,a.toString(),a,b)}
function wh(a){var b=xh,c=vh();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=A("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(rh[d])try{if(f&&b instanceof ph&&b!=e)try{var h=b.f,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.G){var l=new h;h.G=l.version}var m=h.G}catch(p){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
Pa(k.args))}catch(p){throw p.message="yt.pubsub2.Data.deserialize(): "+p.message,p;}}catch(p){throw p.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+p.message,p;}a.call(window,f)}catch(p){se(p)}},th[b.toString()]?A("yt.scheduler.instance")?of(g):S(g,0):g())});
rh[d]=!0;sh[b.toString()]||(sh[b.toString()]=[]);sh[b.toString()].push(d);return d}
function yh(){var a=zh,b=wh(function(c){a.apply(void 0,arguments);Ah(b)});
return b}
function Ah(a){var b=vh();b&&("number"===typeof a&&(a=[a]),G(a,function(c){b.unsubscribeByKey(c);delete rh[c]}))}
function vh(){return A("ytPubsub2Pubsub2Instance")}
;function Bh(a){oh.call(this,1,arguments);this.csn=a}
u(Bh,oh);var xh=new ph("screen-created",Bh),Ch=[],Dh=0;function Eh(a,b,c){var d=R("use_default_events_client")?void 0:mg;b={csn:a,parentVe:dh(b),childVes:La(c,function(f){return dh(f)})};
c=r(c);for(var e=c.next();!e.done;e=c.next())e=dh(e.value),(Wa(e)||!e.trackingParams&&!e.veType)&&vg(Error("Child VE logged with no data"),"WARNING");c={da:lh(a),R:a};"UNDEFINED_CSN"==a?Fh("visualElementAttached",b,c):d?ag("visualElementAttached",b,d,c):ng("visualElementAttached",b,c)}
function Fh(a,b,c){Ch.push({payloadName:a,payload:b,options:c});Dh||(Dh=yh())}
function zh(a){if(Ch){for(var b=r(Ch),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,ag(c.payloadName,c.payload,null,c.options));Ch.length=0}Dh=0}
;function Gh(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||Za(b);this.assets=a.assets||{};this.attrs=a.attrs||Za(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Gh.prototype.clone=function(){var a=new Gh,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==wa(c)?a[b]=Za(c):a[b]=c}return a};function Hh(){M.call(this);this.f=[]}
u(Hh,M);Hh.prototype.o=function(){for(;this.f.length;){var a=this.f.pop();a.target.removeEventListener(a.name,a.pb)}M.prototype.o.call(this)};var Ih=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Jh(a){a=a||"";if(window.spf){var b=a.match(Ih);spf.style.load(a,b?b[1]:"",void 0)}else Kh(a)}
function Kh(a){var b=Lh(a),c=document.getElementById(b),d=c&&Ag(c,"loaded");d||c&&!d||(c=Mh(a,b,function(){Ag(c,"loaded")||(yg(c),Cf(b),S(Fa(Df,b),0))}))}
function Mh(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=xc(a);d.rel="stylesheet";d.href=lb(a).toString();(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Lh(a){var b=tc(document,"A"),c=new eb(fb,"This URL is never added to the DOM");hb(c);hb(c);Jb(b,new H(wb,a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Mb(a)}
;function Nh(a,b,c,d){M.call(this);var e=this;this.m=this.Y=a;this.V=b;this.A=!1;this.api={};this.W=this.H=null;this.I=new O;Ec(this,Fa(Fc,this.I));this.j={};this.S=this.X=this.h=this.ca=this.f=null;this.L=!1;this.l=this.C=null;this.Z={};this.wa=["onReady"];this.ba=null;this.la=NaN;this.T={};this.i=d;Oh(this);this.aa("WATCH_LATER_VIDEO_ADDED",this.Ma.bind(this));this.aa("WATCH_LATER_VIDEO_REMOVED",this.Na.bind(this));this.aa("onAdAnnounce",this.ya.bind(this));this.xa=new Hh(this);Ec(this,Fa(Fc,this.xa));
this.U=0;c?this.U=S(function(){e.loadNewVideoConfig(c)},0):d&&(Ph(this),Qh(this))}
u(Nh,M);n=Nh.prototype;n.getId=function(){return this.V};
n.loadNewVideoConfig=function(a){if(!this.g){this.U&&(T(this.U),this.U=0);a instanceof Gh||(a=new Gh(a));this.ca=a;this.f=a.clone();Ph(this);this.X||(this.X=Rh(this,this.f.args.jsapicallback||"onYouTubePlayerReady"));this.f.args.jsapicallback=null;if(a=this.f.attrs.width)this.m.style.width=Hc(Number(a)||a);if(a=this.f.attrs.height)this.m.style.height=Hc(Number(a)||a);Qh(this);this.A&&Sh(this)}};
function Ph(a){var b;a.i?b=a.i.rootElementId:b=a.f.attrs.id;a.h=b||a.h;"video-player"==a.h&&(a.h=a.V,a.f.attrs.id=a.V);a.m.id==a.h&&(a.h+="-player",a.f.attrs.id=a.h)}
n.Ba=function(){return this.ca};
function Sh(a){a.f&&!a.f.loaded&&(a.f.loaded=!0,"0"!=a.f.args.autoplay?a.api.loadVideoByPlayerVars(a.f.args):a.api.cueVideoByPlayerVars(a.f.args))}
function Th(a){var b=!0,c=Uh(a);c&&a.f&&(a=Vh(a),b=Ag(c,"version")===a);return b&&!!A("yt.player.Application.create")}
function Qh(a){if(!a.g&&!a.L){var b=Th(a);if(b&&"html5"==(Uh(a)?"html5":null))a.S="html5",a.A||Wh(a);else if(Xh(a),a.S="html5",b&&a.l)a.Y.appendChild(a.l),Wh(a);else{a.f&&(a.f.loaded=!0);var c=!1;a.C=function(){c=!0;if(a.i)var d=a.i.serializedExperimentFlags;else a.f&&a.f.args&&(d=a.f.args.fflags);d="true"==ue(d||"").player_bootstrap_method?A("yt.player.Application.createAlternate")||A("yt.player.Application.create"):A("yt.player.Application.create");var e=a.f?a.f.clone():void 0;d(a.Y,e,a.i);Wh(a)};
a.L=!0;b?a.C():(Eg(Vh(a),a.C),(b=a.i?a.i.cssUrl:a.f.assets.css)&&Jh(b),Yh(a)&&!c&&z("yt.player.Application.create",null,void 0))}}}
function Uh(a){var b=pc(a.h);!b&&a.m&&a.m.querySelector&&(b=a.m.querySelector("#"+a.h));return b}
function Wh(a){if(!a.g){var b=Uh(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.L=!1,b.isNotServable&&a.f&&b.isNotServable(a.f.args.video_id)||Zh(a)):a.la=S(function(){Wh(a)},50)}}
function Zh(a){Oh(a);a.A=!0;var b=Uh(a);b.addEventListener&&(a.H=$h(a,b,"addEventListener"));b.removeEventListener&&(a.W=$h(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=$h(a,b,e))}for(var f in a.j)a.H(f,a.j[f]);Sh(a);a.X&&a.X(a.api);a.I.N("onReady",a.api)}
function $h(a,b,c){var d=b[c];return function(){try{return a.ba=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.params=c,a.ba=e,te(e))}}}
function Oh(a){a.A=!1;if(a.W)for(var b in a.j)a.W(b,a.j[b]);for(var c in a.T)T(parseInt(c,10));a.T={};a.H=null;a.W=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.aa.bind(a);a.api.removeEventListener=a.Ra.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.Ca.bind(a);a.api.getPlayerType=a.Da.bind(a);a.api.getCurrentVideoConfig=a.Ba.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.La.bind(a)}
n.La=function(){return this.A};
n.aa=function(a,b){var c=this,d=Rh(this,b);if(d){if(!(0<=Ja(this.wa,a)||this.j[a])){var e=ai(this,a);this.H&&this.H(a,e)}this.I.subscribe(a,d);"onReady"==a&&this.A&&S(function(){d(c.api)},0)}};
n.Ra=function(a,b){if(!this.g){var c=Rh(this,b);c&&Sd(this.I,a,c)}};
function Rh(a,b){var c=b;if("string"==typeof b){if(a.Z[b])return a.Z[b];c=function(){var d=A(b);d&&d.apply(x,arguments)};
a.Z[b]=c}return c?c:null}
function ai(a,b){var c="ytPlayer"+b+a.V;a.j[b]=c;x[c]=function(d){var e=S(function(){if(!a.g){a.I.N(b,d);var f=a.T,g=String(e);g in f&&delete f[g]}},0);
Xa(a.T,String(e))};
return c}
n.ya=function(a){Cf("a11y-announce",a)};
n.Ma=function(a){Cf("WATCH_LATER_VIDEO_ADDED",a)};
n.Na=function(a){Cf("WATCH_LATER_VIDEO_REMOVED",a)};
n.Da=function(){return this.S||(Uh(this)?"html5":null)};
n.Ca=function(){return this.ba};
function Xh(a){a.cancel();Oh(a);a.S=null;a.f&&(a.f.loaded=!1);var b=Uh(a);b&&(Th(a)||!Yh(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));for(a=a.Y;b=a.firstChild;)a.removeChild(b)}
n.cancel=function(){if(this.C){var a=Vh(this);Kg(a,this.C)}T(this.la);this.L=!1};
n.o=function(){Xh(this);if(this.l&&this.f&&this.l.destroy)try{this.l.destroy()}catch(b){se(b)}this.Z=null;for(var a in this.j)x[this.j[a]]=null;this.ca=this.f=this.api=null;delete this.Y;delete this.m;M.prototype.o.call(this)};
function Yh(a){return a.f&&a.f.args&&a.f.args.fflags?-1!=a.f.args.fflags.indexOf("player_destroy_old_version=true"):!1}
function Vh(a){return a.i?a.i.jsUrl:a.f.assets.js}
;var bi={},ci="player_uid_"+(1E9*Math.random()>>>0);function di(a){delete bi[a.getId()]}
;function ei(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function fi(a,b,c){"string"===typeof a&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});a:{if((b=a.mediaContentUrl)&&(b=/\/([ve]|embed)\/([^#?]+)/.exec(b))&&b[2]){b=b[2];break a}b=null}a.videoId=b;return gi(a)}
function gi(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function hi(a,b,c,d){if(za(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function ii(a){a=void 0===a?!1:a;M.call(this);this.f=new O(a);Ec(this,Fa(Fc,this.f))}
E(ii,M);ii.prototype.subscribe=function(a,b,c){return this.g?0:this.f.subscribe(a,b,c)};
ii.prototype.j=function(a,b){this.g||this.f.N.apply(this.f,arguments)};function ji(a,b,c){ii.call(this);this.h=a;this.i=b;this.l=c}
u(ji,ii);function ki(a,b,c){if(!a.g){var d=a.h;d.g||a.i!=d.f||(a={id:a.l,command:b},c&&(a.data=c),d.f.postMessage(ud(a),d.i))}}
ji.prototype.o=function(){this.i=this.h=null;ii.prototype.o.call(this)};function li(a){M.call(this);this.f=a;this.f.subscribe("command",this.ua,this);this.h={};this.j=!1}
u(li,M);n=li.prototype;n.start=function(){this.j||this.g||(this.j=!0,ki(this.f,"RECEIVING"))};
n.ua=function(a,b,c){if(this.j&&!this.g){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&(a=d.event,a in this.h||(c=B(this.Ta,this,a),this.h[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":"string"===typeof d.event&&mi(this,d.event);break;default:this.i.isReady()&&this.i.isExternalMethodAvailable(a,c||null)&&(b=ni(a,b||{}),c=this.i.handleExternalCall(a,b,c||null),(c=oi(a,c))&&this.j&&!this.g&&ki(this.f,a,c))}}};
n.Ta=function(a,b){this.j&&!this.g&&ki(this.f,a,this.fa(a,b))};
n.fa=function(a,b){if(null!=b)return{value:b}};
function mi(a,b){b in a.h&&(a.removeEventListener(b,a.h[b]),delete a.h[b])}
n.o=function(){var a=this.f;a.g||Sd(a.f,"command",this.ua,this);this.f=null;for(var b in this.h)mi(this,b);M.prototype.o.call(this)};function pi(a,b){li.call(this,b);this.i=a;this.start()}
u(pi,li);pi.prototype.addEventListener=function(a,b){this.i.addEventListener(a,b)};
pi.prototype.removeEventListener=function(a,b){this.i.removeEventListener(a,b)};
function ni(a,b){switch(a){case "loadVideoById":return b=gi(b),[b];case "cueVideoById":return b=gi(b),[b];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return b=hi(b),[b];case "cuePlaylist":return b=hi(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function oi(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
pi.prototype.fa=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return li.prototype.fa.call(this,a,b)};
pi.prototype.o=function(){li.prototype.o.call(this);delete this.i};function qi(a,b,c){M.call(this);var d=this;c=c||Q("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.h=b||null;this.A="*";this.i=c;this.sessionId=null;this.channel="widget";this.C=!!a;this.m=function(e){a:if(!("*"!=d.i&&e.origin!=d.i||d.h&&e.source!=d.h||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.C&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.i=d.A=e.origin);d.h=e.source;d.sessionId=f.id;d.f&&(d.f(),d.f=null);break;case "command":d.j&&(!d.l||0<=Ja(d.l,f.func))&&d.j(f.func,f.args,e.origin)}}};
this.l=this.f=this.j=null;window.addEventListener("message",this.m)}
u(qi,M);qi.prototype.sendMessage=function(a,b){var c=b||this.h;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=JSON.stringify(a);c.postMessage(d,this.A)}catch(e){te(e)}}};
qi.prototype.o=function(){window.removeEventListener("message",this.m);M.prototype.o.call(this)};function ri(){var a=this.g=new qi(!!Q("WIDGET_ID_ENFORCE")),b=B(this.Qa,this);a.j=b;a.l=null;this.g.channel="widget";if(a=Q("WIDGET_ID"))this.g.sessionId=a;this.i=[];this.l=!1;this.j={}}
n=ri.prototype;n.Qa=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.j[a]||"onReady"==a||(this.addEventListener(a,si(this,a)),this.j[a]=!0)):this.qa(a,b,c)};
n.qa=function(){};
function si(a,b){return B(function(c){this.sendMessage(b,c)},a)}
n.addEventListener=function(){};
n.Aa=function(){this.l=!0;this.sendMessage("initialDelivery",this.ga());this.sendMessage("onReady");G(this.i,this.va,this);this.i=[]};
n.ga=function(){return null};
function ti(a,b){a.sendMessage("infoDelivery",b)}
n.va=function(a){this.l?this.g.sendMessage(a):this.i.push(a)};
n.sendMessage=function(a,b){this.va({event:a,info:void 0==b?null:b})};
n.dispose=function(){this.g=null};function ui(a){ri.call(this);this.f=a;this.h=[];this.addEventListener("onReady",B(this.Oa,this));this.addEventListener("onVideoProgress",B(this.Xa,this));this.addEventListener("onVolumeChange",B(this.Ya,this));this.addEventListener("onApiChange",B(this.Sa,this));this.addEventListener("onPlaybackQualityChange",B(this.Ua,this));this.addEventListener("onPlaybackRateChange",B(this.Va,this));this.addEventListener("onStateChange",B(this.Wa,this));this.addEventListener("onWebglSettingsChanged",B(this.Za,
this))}
u(ui,ri);n=ui.prototype;n.qa=function(a,b,c){if(this.f.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&ei(a)){var d=b;if(za(d[0])&&!Array.isArray(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=gi.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=fi.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=hi.apply(window,d)}d=e}b.length=1;b[0]=d}this.f.handleExternalCall(a,b,c);ei(a)&&ti(this,this.ga())}};
n.Oa=function(){var a=B(this.Aa,this);this.g.f=a};
n.addEventListener=function(a,b){this.h.push({eventType:a,listener:b});this.f.addEventListener(a,b)};
n.ga=function(){if(!this.f)return null;var a=this.f.getApiInterface();Oa(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.f[e]();b[f]=g}catch(h){}}}b.videoData=this.f.getVideoData();b.currentTimeLastUpdated_=C()/1E3;return b};
n.Wa=function(a){a={playerState:a,currentTime:this.f.getCurrentTime(),duration:this.f.getDuration(),videoData:this.f.getVideoData(),videoStartBytes:0,videoBytesTotal:this.f.getVideoBytesTotal(),videoLoadedFraction:this.f.getVideoLoadedFraction(),playbackQuality:this.f.getPlaybackQuality(),availableQualityLevels:this.f.getAvailableQualityLevels(),currentTimeLastUpdated_:C()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getVideoUrl&&(a.videoUrl=
this.f.getVideoUrl());this.f.getVideoContentRect&&(a.videoContentRect=this.f.getVideoContentRect());this.f.getProgressState&&(a.progressState=this.f.getProgressState());this.f.getPlaylist&&(a.playlist=this.f.getPlaylist());this.f.getPlaylistIndex&&(a.playlistIndex=this.f.getPlaylistIndex());this.f.getStoryboardFormat&&(a.storyboardFormat=this.f.getStoryboardFormat());ti(this,a)};
n.Ua=function(a){ti(this,{playbackQuality:a})};
n.Va=function(a){ti(this,{playbackRate:a})};
n.Sa=function(){for(var a=this.f.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.f.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.f.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
n.Ya=function(){ti(this,{muted:this.f.isMuted(),volume:this.f.getVolume()})};
n.Xa=function(a){a={currentTime:a,videoBytesLoaded:this.f.getVideoBytesLoaded(),videoLoadedFraction:this.f.getVideoLoadedFraction(),currentTimeLastUpdated_:C()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getProgressState&&(a.progressState=this.f.getProgressState());ti(this,a)};
n.Za=function(){var a={sphericalProperties:this.f.getSphericalProperties()};ti(this,a)};
n.dispose=function(){ri.prototype.dispose.call(this);for(var a=0;a<this.h.length;a++){var b=this.h[a];this.f.removeEventListener(b.eventType,b.listener)}this.h=[]};function vi(a,b,c){M.call(this);this.f=a;this.i=c;this.j=U(window,"message",B(this.l,this));this.h=new ji(this,a,b);Ec(this,Fa(Fc,this.h))}
u(vi,M);vi.prototype.l=function(a){var b;if(b=!this.g)if(b=a.origin==this.i)a:{b=this.f;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.h,c.g||c.j("command",b.command,b.data,a.origin))}};
vi.prototype.o=function(){kf(this.j);this.f=null;M.prototype.o.call(this)};function wi(){var a=Za(xi),b;return Hd(new N(function(c,d){a.onSuccess=function(e){He(e)?c(e):d(new yi("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new yi("Unknown request error","net.unknown",e))};
a.P=function(e){d(new yi("Request timed out","net.timeout",e))};
b=Re("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof Id&&b.abort();
return Fd(c)})}
function yi(a,b){F.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
u(yi,F);function zi(){this.g=0;this.f=null}
zi.prototype.then=function(a,b,c){return 1===this.g&&a?(a=a.call(c,this.f),Ad(a)?a:Ai(a)):2===this.g&&b?(a=b.call(c,this.f),Ad(a)?a:Bi(a)):this};
zi.prototype.getValue=function(){return this.f};
zi.prototype.$goog_Thenable=!0;function Bi(a){var b=new zi;a=void 0===a?null:a;b.g=2;b.f=void 0===a?null:a;return b}
function Ai(a){var b=new zi;a=void 0===a?null:a;b.g=1;b.f=void 0===a?null:a;return b}
;function Ci(a){F.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Di;this.isTimeout=a instanceof yi&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Id}
u(Ci,F);Ci.prototype.name="BiscottiError";function Di(){F.call(this,"Biscotti ID is missing from server")}
u(Di,F);Di.prototype.name="BiscottiMissingError";var xi={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Ei=null;function ne(){if("1"===Ta(ke(),"args","privembed"))return Fd(Error("Biscotti ID is not available in private embed mode"));Ei||(Ei=Hd(wi().then(Fi),function(a){return Gi(2,a)}));
return Ei}
function Fi(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Di;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Di;a=a.id;oe(a);Ei=Ai(a);Hi(18E5,2);return a}
function Gi(a,b){var c=new Ci(b);oe("");Ei=Bi(c);0<a&&Hi(12E4,a-1);throw c;}
function Hi(a,b){S(function(){Hd(wi().then(Fi,function(c){return Gi(b,c)}),ua)},a)}
function Ii(){try{var a=A("yt.ads.biscotti.getId_");return a?a():ne()}catch(b){return Fd(b)}}
;function Ji(a){if("1"!==Ta(ke(),"args","privembed")){a&&me();try{Ii().then(function(){},function(){}),S(Ji,18E5)}catch(b){se(b)}}}
;var Y=A("ytglobal.prefsUserPrefsPrefs_")||{};z("ytglobal.prefsUserPrefsPrefs_",Y,void 0);function Ki(){this.f=Q("ALT_PREF_COOKIE_NAME","PREF");var a=lc.get(""+this.f,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Y[d]=c.toString())}}}
n=Ki.prototype;n.get=function(a,b){Li(a);Mi(a);var c=void 0!==Y[a]?Y[a].toString():null;return null!=c?c:b?b:""};
n.set=function(a,b){Li(a);Mi(a);if(null==b)throw Error("ExpectedNotNull");Y[a]=b.toString()};
n.remove=function(a){Li(a);Mi(a);delete Y[a]};
n.save=function(){fg(this.f,this.dump(),63072E3)};
n.clear=function(){for(var a in Y)delete Y[a]};
n.dump=function(){var a=[],b;for(b in Y)a.push(b+"="+encodeURIComponent(String(Y[b])));return a.join("&")};
function Mi(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Li(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Ni(a){a=void 0!==Y[a]?Y[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
va(Ki);function Oi(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!Pi(a)||c.some(function(e){return!Pi(e)}))throw Error("Only objects may be merged.");
c=r(c);for(d=c.next();!d.done;d=c.next())Qi(a,d.value);return a}
function Qi(a,b){for(var c in b)if(Pi(b[c])){if(c in a&&!Pi(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Qi(a[c],b[c])}else if(Ri(b[c])){if(c in a&&!Ri(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Si(a[c],b[c])}else a[c]=b[c];return a}
function Si(a,b){for(var c=r(b),d=c.next();!d.done;d=c.next())d=d.value,Pi(d)?a.push(Qi({},d)):Ri(d)?a.push(Si([],d)):a.push(d);return a}
function Pi(a){return"object"===typeof a&&!Array.isArray(a)}
function Ri(a){return"object"===typeof a&&Array.isArray(a)}
;function Ti(a,b){oh.call(this,1,arguments)}
u(Ti,oh);function Ui(a,b){oh.call(this,1,arguments)}
u(Ui,oh);var Vi=new ph("aft-recorded",Ti),Wi=new ph("timing-sent",Ui);var Xi=window;function Yi(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var Zi=Xi.performance||Xi.mozPerformance||Xi.msPerformance||Xi.webkitPerformance||new Yi;var $i=!1;B(Zi.clearResourceTimings||Zi.webkitClearResourceTimings||Zi.mozClearResourceTimings||Zi.msClearResourceTimings||Zi.oClearResourceTimings||ua,Zi);function aj(a){var b=bj(a);if(b.aft)return b.aft;a=Q((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function cj(a){var b;(b=A("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function dj(a){a=cj(a);a.info||(a.info={});return a.info}
function bj(a){a=cj(a);a.tick||(a.tick={});return a.tick}
function ej(a){var b=cj(a).nonce;b||(b=$g(),cj(a).nonce=b);return b}
function fj(a){var b=bj(a||""),c=aj(a);c&&!$i&&(uh(Vi,new Ti(Math.round(c-b._start),a)),$i=!0)}
;function gj(){var a=A("ytcsi.debug");a||(a=[],z("ytcsi.debug",a,void 0),z("ytcsi.reference",{},void 0));return a}
function hj(a){a=a||"";var b=A("ytcsi.reference");b||(gj(),b=A("ytcsi.reference"));if(b[a])return b[a];var c=gj(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var ij=x.ytLoggingLatencyUsageStats_||{};z("ytLoggingLatencyUsageStats_",ij,void 0);function jj(){this.f=0}
function kj(){jj.instance||(jj.instance=new jj);return jj.instance}
jj.prototype.tick=function(a,b,c){lj(this,"tick_"+a+"_"+b)||ng("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
jj.prototype.info=function(a,b){var c=Object.keys(a).join("");lj(this,"info_"+c+"_"+b)||(c=Object.assign({},a),c.clientActionNonce=b,ng("latencyActionInfo",c))};
jj.prototype.span=function(a,b){var c=Object.keys(a).join("");lj(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,ng("latencyActionSpan",a))};
function lj(a,b){ij[b]=ij[b]||{count:0};var c=ij[b];c.count++;c.time=X();a.f||(a.f=pf(function(){var d=X(),e;for(e in ij)ij[e]&&6E4<d-ij[e].time&&delete ij[e];a&&(a.f=0)},0,5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new lg("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||sg(c)),!0):!1}
;var Z={},mj=(Z.ad_allowed="adTypesAllowed",Z.yt_abt="adBreakType",Z.ad_cpn="adClientPlaybackNonce",Z.ad_docid="adVideoId",Z.yt_ad_an="adNetworks",Z.ad_at="adType",Z.browse_id="browseId",Z.p="httpProtocol",Z.t="transportProtocol",Z.cpn="clientPlaybackNonce",Z.ccs="creatorInfo.creatorCanaryState",Z.cseg="creatorInfo.creatorSegment",Z.csn="clientScreenNonce",Z.docid="videoId",Z.GetHome_rid="requestIds",Z.GetSearch_rid="requestIds",Z.GetPlayer_rid="requestIds",Z.GetWatchNext_rid="requestIds",Z.GetBrowse_rid=
"requestIds",Z.GetLibrary_rid="requestIds",Z.is_continuation="isContinuation",Z.is_nav="isNavigation",Z.b_p="kabukiInfo.browseParams",Z.is_prefetch="kabukiInfo.isPrefetch",Z.is_secondary_nav="kabukiInfo.isSecondaryNav",Z.prev_browse_id="kabukiInfo.prevBrowseId",Z.query_source="kabukiInfo.querySource",Z.voz_type="kabukiInfo.vozType",Z.yt_lt="loadType",Z.mver="creatorInfo.measurementVersion",Z.yt_ad="isMonetized",Z.nr="webInfo.navigationReason",Z.nrsu="navigationRequestedSameUrl",Z.ncnp="webInfo.nonPreloadedNodeCount",
Z.pnt="performanceNavigationTiming",Z.prt="playbackRequiresTap",Z.plt="playerInfo.playbackType",Z.pis="playerInfo.playerInitializedState",Z.paused="playerInfo.isPausedOnLoad",Z.yt_pt="playerType",Z.fmt="playerInfo.itag",Z.yt_pl="watchInfo.isPlaylist",Z.yt_pre="playerInfo.preloadType",Z.yt_ad_pr="prerollAllowed",Z.pa="previousAction",Z.yt_red="isRedSubscriber",Z.rce="mwebInfo.responseContentEncoding",Z.scrh="screenHeight",Z.scrw="screenWidth",Z.st="serverTimeMs",Z.ssdm="shellStartupDurationMs",Z.aq=
"tvInfo.appQuality",Z.br_trs="tvInfo.bedrockTriggerState",Z.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Z.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Z.label="tvInfo.label",Z.is_mdx="tvInfo.isMdx",Z.preloaded="tvInfo.isPreloaded",Z.upg_player_vis="playerInfo.visibilityState",Z.query="unpluggedInfo.query",Z.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Z.yt_vst="videoStreamType",Z.vph="viewportHeight",Z.vpw="viewportWidth",Z.yt_vis="isVisible",Z.rcl="mwebInfo.responseContentLength",
Z.GetSettings_rid="requestIds",Z.GetTrending_rid="requestIds",Z.GetMusicSearchSuggestions_rid="requestIds",Z.REQUEST_ID="requestIds",Z),nj="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),oj={},pj=(oj.ccs="CANARY_STATE_",
oj.mver="MEASUREMENT_VERSION_",oj.pis="PLAYER_INITIALIZED_STATE_",oj.yt_pt="LATENCY_PLAYER_",oj.pa="LATENCY_ACTION_",oj.yt_vst="VIDEO_STREAM_TYPE_",oj),qj="all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function rj(a){return!!Q("FORCE_CSI_ON_GEL",!1)||R("csi_on_gel")||!!cj(a).useGel}
function sj(a){a=cj(a);if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel}
;function tj(a,b,c){if(null!==b)if(dj(c)[a]=b,rj(c)){var d=b;b=sj(c);if(b.gelInfos)b.gelInfos["info_"+a]=!0;else{var e={};b.gelInfos=(e["info_"+a]=!0,e)}if(a.match("_rid")){var f=a.split("_rid")[0];a="REQUEST_ID"}if(a in mj){b=mj[a];0<=Ja(nj,b)&&(d=!!d);a in pj&&"string"===typeof d&&(d=pj[a]+d.toUpperCase());a=d;d=b.split(".");for(var g=e={},h=0;h<d.length-1;h++){var k=d[h];g[k]={};g=g[k]}g[d[d.length-1]]="requestIds"===b?[{id:a,endpoint:f}]:a;f=Oi({},e)}else 0<=Ja(qj,a)||sg(new lg("Unknown label logged with GEL CSI",
a)),f=void 0;f&&rj(c)&&(b=hj(c||""),Oi(b.info,f),b=sj(c),"gelInfos"in b||(b.gelInfos={}),Oi(b.gelInfos,f),c=ej(c),kj().info(f,c))}else hj(c||"").info[a]=b}
function uj(a,b,c){var d=bj(c);if(R("use_first_tick")&&vj(a,c))return d[a];if(!b&&"_"!==a[0]){var e=a;Zi.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),Zi.mark(e))}e=b||X();d[a]=e;e=sj(c);e.gelTicks&&(e.gelTicks["tick_"+a]=!0);c||b||X();if(rj(c)){hj(c||"").tick[a]=b||X();e=ej(c);if("_start"===a){var f=kj();lj(f,"baseline_"+e)||ng("latencyActionBaselined",{clientActionNonce:e},{timestamp:b})}else kj().tick(a,e,b);fj(c);e=!0}else e=!1;if(!e){if(!A("yt.timing."+(c||"")+"pingSent_")&&
(f=Q((c||"")+"TIMING_ACTION",void 0),e=bj(c),A("ytglobal.timing"+(c||"")+"ready_")&&f&&vj("_start")&&aj(c)))if(fj(c),c)wj(c);else{f=!0;var g=Q("TIMING_WAIT",[]);if(g.length)for(var h=0,k=g.length;h<k;++h)if(!(g[h]in e)){f=!1;break}f&&wj(c)}hj(c||"").tick[a]=b||X()}return d[a]}
function vj(a,b){var c=bj(b);return a in c}
function wj(a){if(!rj(a)){var b=bj(a),c=dj(a),d=b._start,e=Q("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:Q((a||"")+"TIMING_ACTION",void 0)},g=c.srt;void 0!==b.srt&&delete c.srt;b.aft=aj(a);var h=bj(a),k=h.pbr,l=h.vc;h=h.pbs;k&&l&&h&&k<l&&l<h&&dj(a).yt_pvis&&"youtube"===e&&(tj("yt_lt","hot_bg",a),e=b.vc,k=b.pbs,delete b.aft,c.aft=Math.round(k-e));for(var m in c)"_"!==m.charAt(0)&&(f[m]=c[m]);b.ps=X();m={};e=[];for(var p in b)"_"!==p.charAt(0)&&(k=Math.round(b[p]-d),m[p]=k,e.push(p+"."+k));f.rt=
e.join(",");b=!!c.ap;R("debug_csi_data")&&(c=A("yt.timing.csiData"),c||(c=[],D("yt.timing.csiData",c)),c.push({page:location.href,time:new Date,args:f}));c="";for(var v in f)f.hasOwnProperty(v)&&(c+="&"+v+"="+f[v]);f="/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var t=void 0===t?"":t;bf(f,t)||Ze(f,void 0,void 0,void 0,t)}else Ze(f);z("yt.timing."+(a||"")+"pingSent_",!0,void 0);uh(Wi,new Ui(m.aft+(Number(g)||0),a))}}
if(R("overwrite_polyfill_on_logging_lib_loaded")){var xj=window;xj.ytcsi&&(xj.ytcsi.info=tj,xj.ytcsi.tick=uj)};var yj=null,zj=null,Aj=null,Bj={};function Cj(a){var b=a.id;a=a.ve_type;var c=bh++;a=new ch({veType:a,veCounter:c,elementIndex:void 0,dataElement:void 0,youtubeData:void 0});Bj[b]=a;b=jh();c=hh();b&&c&&Eh(b,c,[a])}
function Dj(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(mh(b,a),a=hh()))for(var c in Bj){var d=Bj[c];d&&Eh(b,a,[d])}}
function Ej(a){Bj[a.id]=new ch({trackingParams:a.tracking_params})}
function Fj(a){var b=jh(),c=Bj[a.id];if(b&&c){a=R("use_default_events_client")?void 0:mg;c={csn:b,ve:dh(c),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"};var d={da:lh(b),R:b};"UNDEFINED_CSN"==b?Fh("visualElementGestured",c,d):a?ag("visualElementGestured",c,a,d):ng("visualElementGestured",c,d)}}
function Gj(a){a=a.ids;var b=jh();if(b)for(var c=0;c<a.length;c++){var d=Bj[a[c]];if(d){var e=b,f=R("use_default_events_client")?void 0:mg;d={csn:e,ve:dh(d),eventType:1};var g={da:lh(e),R:e};"UNDEFINED_CSN"==e?Fh("visualElementShown",d,g):f?ag("visualElementShown",d,f,g):ng("visualElementShown",d,g)}}}
;z("yt.setConfig",P,void 0);z("yt.config.set",P,void 0);z("yt.setMsg",xg,void 0);z("yt.msgs.set",xg,void 0);z("yt.logging.errors.log",vg,void 0);
z("writeEmbed",function(){var a=Q("PLAYER_CONFIG",void 0);Ji(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=Q("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);Q("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");b="player";var d=void 0===d?!0:d;b="string"===typeof b?pc(b):b;var e=ci+"_"+Aa(b),f=bi[e];f&&d?a&&a.args&&a.args.fflags&&a.args.fflags.includes("web_player_remove_playerproxy=true")?f.api.loadVideoByPlayerVars(a.args||
null):f.loadNewVideoConfig(a):(f=new Nh(b,e,a,void 0),bi[e]=f,Cf("player-added",f.api),Ec(f,Fa(di,f)));a=f.api;yj=a;a.addEventListener("onScreenChanged",Dj);a.addEventListener("onLogClientVeCreated",Cj);a.addEventListener("onLogServerVeCreated",Ej);a.addEventListener("onLogVeClicked",Fj);a.addEventListener("onLogVesShown",Gj);d=Q("POST_MESSAGE_ID","player");Q("ENABLE_JS_API")?Aj=new ui(a):Q("ENABLE_POST_API")&&"string"===typeof d&&"string"===typeof c&&(zj=new vi(window.parent,d,c),Aj=new pi(a,zj.h));
c=Q("BG_P",void 0);Wg(c)&&(Q("BG_I")||Q("BG_IU"))&&(Sg=!0,Rg.initialize(Q("BG_I",null),Q("BG_IU",null),c,Vg,void 0,!!Q("BG_CE",!1)));Ng()},void 0);
z("yt.www.watch.ads.restrictioncookie.spr",function(a){Ze(a+"mac_204?action_fcts=1");return!0},void 0);
var Hj=re(function(){uj("ol");var a=Ki.getInstance(),b=!!((Ni("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&jd(document.body,"exp-invert-logo"))if(c&&!jd(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!jd(d,"inverted-hdpi")){var e=hd(d);id(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&jd(document.body,"inverted-hdpi")&&kd();b!=c&&(b="f"+(Math.floor(119/31)+1),d=Ni(b)||0,d=c?d|67108864:
d&-67108865,0==d?delete Y[b]:(c=d.toString(16),Y[b]=c.toString()),a.save())}),Ij=re(function(){var a=yj;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();Q("PL_ATT")&&Rg.dispose();a=0;for(var b=Lg.length;a<b;a++){var c=Lg[a];if(!isNaN(c)){var d=A("yt.scheduler.instance.cancelJob");d?d(c):T(c)}}Lg.length=0;Jg("//static.doubleclick.net/instream/ad_status.js");Mg=!1;P("DCLKSTAT",0);Gc(Aj,zj);if(a=yj)a.removeEventListener("onScreenChanged",Dj),a.removeEventListener("onLogClientVeCreated",Cj),a.removeEventListener("onLogServerVeCreated",Ej),a.removeEventListener("onLogVeClicked",Fj),a.removeEventListener("onLogVesShown",
Gj),a.destroy();Bj={}});
window.addEventListener?(window.addEventListener("load",Hj),window.addEventListener("unload",Ij)):window.attachEvent&&(window.attachEvent("onload",Hj),window.attachEvent("onunload",Ij));D("yt.abuse.player.botguardInitialized",A("yt.abuse.player.botguardInitialized")||Xg);D("yt.abuse.player.invokeBotguard",A("yt.abuse.player.invokeBotguard")||Yg);D("yt.abuse.dclkstatus.checkDclkStatus",A("yt.abuse.dclkstatus.checkDclkStatus")||Og);D("yt.player.exports.navigate",A("yt.player.exports.navigate")||nh);
D("yt.util.activity.init",A("yt.util.activity.init")||sf);D("yt.util.activity.getTimeSinceActive",A("yt.util.activity.getTimeSinceActive")||uf);D("yt.util.activity.setTimestamp",A("yt.util.activity.setTimestamp")||V);}).call(this);
