(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var r;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ea=ca(this);function t(a,b){if(b)a:{for(var c=ea,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
t("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.f=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.f};
var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ha(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ia="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ja;
if("function"==typeof Object.setPrototypeOf)ja=Object.setPrototypeOf;else{var ka;a:{var la={a:!0},ma={};try{ma.__proto__=la;ka=ma.a;break a}catch(a){}ka=!1}ja=ka?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var na=ja;
function oa(a,b){a.prototype=ia(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.A=b.prototype}
function pa(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=pa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=pa(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,k=Math.max(0,Math.min(c|0,d.length)),g=0;g<f&&k<e;)if(d[k++]!=b[g++])return!1;return g>=f}});
function w(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var qa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)w(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||qa});
t("WeakMap",function(a){function b(h){this.f=(g+=Math.random()+1).toString();if(h){h=u(h);for(var l;!(l=h.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(h){var l=typeof h;return"object"===l&&null!==h||"function"===l}
function e(h){if(!w(h,k)){var l=new c;ba(h,k,{value:l})}}
function f(h){var l=Object[h];l&&(Object[h]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var h=Object.seal({}),l=Object.seal({}),n=new a([[h,2],[l,3]]);if(2!=n.get(h)||3!=n.get(l))return!1;n["delete"](h);n.set(l,4);return!n.has(h)&&4==n.get(l)}catch(m){return!1}}())return a;
var k="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var g=0;b.prototype.set=function(h,l){if(!d(h))throw Error("Invalid WeakMap key");e(h);if(!w(h,k))throw Error("WeakMap key fail: "+h);h[k][this.f]=l;return this};
b.prototype.get=function(h){return d(h)&&w(h,k)?h[k][this.f]:void 0};
b.prototype.has=function(h){return d(h)&&w(h,k)&&w(h[k],this.f)};
b.prototype["delete"]=function(h){return d(h)&&w(h,k)&&w(h[k],this.f)?delete h[k][this.f]:!1};
return b});
t("Map",function(a){function b(){var g={};return g.previous=g.next=g.head=g}
function c(g,h){var l=g.f;return fa(function(){if(l){for(;l.head!=g.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:h(l)};l=null}return{done:!0,value:void 0}})}
function d(g,h){var l=h&&typeof h;"object"==l||"function"==l?f.has(h)?l=f.get(h):(l=""+ ++k,f.set(h,l)):l="p_"+h;var n=g.g[l];if(n&&w(g.g,l))for(var m=0;m<n.length;m++){var q=n[m];if(h!==h&&q.key!==q.key||h===q.key)return{id:l,list:n,index:m,j:q}}return{id:l,list:n,index:-1,j:void 0}}
function e(g){this.g={};this.f=b();this.size=0;if(g){g=u(g);for(var h;!(h=g.next()).done;)h=h.value,this.set(h[0],h[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var g=Object.seal({x:4}),h=new a(u([[g,"s"]]));if("s"!=h.get(g)||1!=h.size||h.get({x:4})||h.set({x:4},"t")!=h||2!=h.size)return!1;var l=h.entries(),n=l.next();if(n.done||n.value[0]!=g||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(m){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(g,h){g=0===g?0:g;var l=d(this,g);l.list||(l.list=this.g[l.id]=[]);l.j?l.j.value=h:(l.j={next:this.f,previous:this.f.previous,head:this.f,key:g,value:h},l.list.push(l.j),this.f.previous.next=l.j,this.f.previous=l.j,this.size++);return this};
e.prototype["delete"]=function(g){g=d(this,g);return g.j&&g.list?(g.list.splice(g.index,1),g.list.length||delete this.g[g.id],g.j.previous.next=g.j.next,g.j.next.previous=g.j.previous,g.j.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(g){return!!d(this,g).j};
e.prototype.get=function(g){return(g=d(this,g).j)&&g.value};
e.prototype.entries=function(){return c(this,function(g){return[g.key,g.value]})};
e.prototype.keys=function(){return c(this,function(g){return g.key})};
e.prototype.values=function(){return c(this,function(g){return g.value})};
e.prototype.forEach=function(g,h){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,g.call(h,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var k=0;return e});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)w(b,d)&&c.push([d,b[d]]);return c}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==pa(this,b,"includes").indexOf(b,c||0)}});
t("Set",function(a){function b(c){this.f=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(k){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
var y=this||self;function z(a,b){for(var c=a.split("."),d=b||y,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function ra(){}
function sa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function ta(a){var b=sa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function ua(a){return"function"==sa(a)}
function va(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function wa(a){return Object.prototype.hasOwnProperty.call(a,xa)&&a[xa]||(a[xa]=++ya)}
var xa="closure_uid_"+(1E9*Math.random()>>>0),ya=0;function Aa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function A(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?A=Aa:A=Ba;return A.apply(null,arguments)}
var C=Date.now;function D(a,b){var c=a.split("."),d=y;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function E(a,b){function c(){}
c.prototype=b.prototype;a.A=b.prototype;a.prototype=new c;a.prototype.constructor=a}
function Ca(a){return a}
;var Da=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},F=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ea=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
F(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Fa(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function Ga(a){return Array.prototype.concat.apply([],arguments)}
function Ha(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ia(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ta(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var k=0;k<f;k++)a[e+k]=d[k]}else a.push(d)}}
;function Ja(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function Ka(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function La(a){var b=G,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Ma(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function Na(a){var b=sa(a);if("object"==b||"array"==b){if(ua(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=Na(a[c]);return b}return a}
var Oa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Pa(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Oa.length;f++)c=Oa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var Qa;function Ra(){if(void 0===Qa){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Ca,createScript:Ca,createScriptURL:Ca})}catch(c){y.console&&y.console.error(c.message)}Qa=a}else Qa=a}return Qa}
;function Sa(a,b){this.g=a===Ta&&b||"";this.f=Ua}
function Va(a){return a instanceof Sa&&a.constructor===Sa&&a.f===Ua?a.g:"type_error:Const"}
var Ua={},Ta={};var Wa=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Xa=/&/g,Ya=/</g,Za=/>/g,$a=/"/g,ab=/'/g,bb=/\x00/g,cb=/[\x00&<>"']/;var db;a:{var eb=y.navigator;if(eb){var fb=eb.userAgent;if(fb){db=fb;break a}}db=""}function H(a){return-1!=db.indexOf(a)}
;function gb(){}
;var hb=H("Opera"),ib=H("Trident")||H("MSIE"),jb=H("Edge"),kb=H("Gecko")&&!(-1!=db.toLowerCase().indexOf("webkit")&&!H("Edge"))&&!(H("Trident")||H("MSIE"))&&!H("Edge"),lb=-1!=db.toLowerCase().indexOf("webkit")&&!H("Edge");function mb(){var a=y.document;return a?a.documentMode:void 0}
var nb;a:{var ob="",pb=function(){var a=db;if(kb)return/rv:([^\);]+)(\)|;)/.exec(a);if(jb)return/Edge\/([\d\.]+)/.exec(a);if(ib)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(lb)return/WebKit\/(\S+)/.exec(a);if(hb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
pb&&(ob=pb?pb[1]:"");if(ib){var qb=mb();if(null!=qb&&qb>parseFloat(ob)){nb=String(qb);break a}}nb=ob}var rb=nb,sb;if(y.document&&ib){var tb=mb();sb=tb?tb:parseInt(rb,10)||void 0}else sb=void 0;var ub=sb;var vb={},wb=null;var I=window;function xb(a){var b=z("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:(b=a.message,null==b&&(a.constructor&&
a.constructor instanceof Function?(a.constructor.name?b=a.constructor.name:(b=a.constructor,yb[b]?b=yb[b]:(b=String(b),yb[b]||(c=/function\s+([^\(]+)/m.exec(b),yb[b]=c?c[1]:"[Anonymous]"),b=yb[b])),b='Unknown Error of type "'+b+'"'):b="Unknown Error of unknown type"),{message:b,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:a.stack||"Not available"})}
var yb={};function zb(a){this.f=a||{cookie:""}}
r=zb.prototype;r.isEnabled=function(){return navigator.cookieEnabled};
r.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.za;d=c.secure||!1;var f=c.domain||void 0;var k=c.path||void 0;var g=c.M}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===g&&(g=-1);c=f?";domain="+f:"";k=k?";path="+k:"";d=d?";secure":"";g=0>g?"":0==g?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(C()+1E3*g)).toUTCString();this.f.cookie=a+"="+b+c+k+g+d+(null!=e?";samesite="+e:"")};
r.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Wa(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
r.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{M:0,path:b,domain:c});return d};
r.isEmpty=function(){return!this.f.cookie};
r.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Wa(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Ab=new zb("undefined"==typeof document?null:document);function Bb(a,b){this.width=a;this.height=b}
r=Bb.prototype;r.clone=function(){return new Bb(this.width,this.height)};
r.aspectRatio=function(){return this.width/this.height};
r.isEmpty=function(){return!(this.width*this.height)};
r.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
r.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
r.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Cb(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Db(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Eb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function J(a){return a.match(Eb)}
function L(a){return a?decodeURI(a):a}
function Fb(a){var b=J(a);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function Gb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Gb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Hb(a){var b=[],c;for(c in a)Gb(c,a[c],b);return b.join("&")}
var Ib=/#|$/;function Jb(a){var b=Kb;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Lb(){var a=[];Jb(function(b){a.push(b)});
return a}
var Kb={ga:"allow-forms",ha:"allow-modals",ia:"allow-orientation-lock",ja:"allow-pointer-lock",ka:"allow-popups",la:"allow-popups-to-escape-sandbox",ma:"allow-presentation",na:"allow-same-origin",oa:"allow-scripts",pa:"allow-top-navigation",qa:"allow-top-navigation-by-user-activation"},Mb=Ja(function(){return Lb()});
function Nb(){var a=Cb(),b={};F(Mb(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function Ob(){this.h=this.h;this.i=this.i}
Ob.prototype.h=!1;Ob.prototype.dispose=function(){this.h||(this.h=!0,this.F())};
Ob.prototype.F=function(){if(this.i)for(;this.i.length;)this.i.shift()()};var Pb=Va(new Sa(Ta,"//fonts.googleapis.com/css")),Qb=Ra();Qb&&Qb.createScriptURL(Pb);var Rb=(new Date).getTime();function Sb(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"chrome"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";
var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Tb(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(m){for(var q=k,p=0;64>p;p+=4)q[p/4]=m[p]<<24|m[p+1]<<16|m[p+2]<<8|m[p+3];for(p=16;80>p;p++)m=q[p-3]^q[p-8]^q[p-14]^q[p-16],q[p]=(m<<1|m>>>31)&4294967295;m=e[0];var v=e[1],x=e[2],B=e[3],K=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var da=B^v&(x^B);var za=1518500249}else da=v^x^B,za=1859775393;else 60>p?(da=v&x|B&(v|x),za=2400959708):(da=v^x^B,za=3395469782);da=((m<<5|m>>>27)&4294967295)+da+K+za+q[p]&4294967295;K=B;B=x;x=(v<<30|v>>>2)&4294967295;v=m;m=da}e[0]=e[0]+m&4294967295;e[1]=e[1]+v&4294967295;
e[2]=e[2]+x&4294967295;e[3]=e[3]+B&4294967295;e[4]=e[4]+K&4294967295}
function c(m,q){if("string"===typeof m){m=unescape(encodeURIComponent(m));for(var p=[],v=0,x=m.length;v<x;++v)p.push(m.charCodeAt(v));m=p}q||(q=m.length);p=0;if(0==l)for(;p+64<q;)b(m.slice(p,p+64)),p+=64,n+=64;for(;p<q;)if(f[l++]=m[p++],n++,64==l)for(l=0,b(f);p+64<q;)b(m.slice(p,p+64)),p+=64,n+=64}
function d(){var m=[],q=8*n;56>l?c(g,56-l):c(g,64-(l-56));for(var p=63;56<=p;p--)f[p]=q&255,q>>>=8;b(f);for(p=q=0;5>p;p++)for(var v=24;0<=v;v-=8)m[q++]=e[p]>>v&255;return m}
for(var e=[],f=[],k=[],g=[128],h=1;64>h;++h)g[h]=0;var l,n;a();return{reset:a,update:c,digest:d,X:function(){for(var m=d(),q="",p=0;p<m.length;p++)q+="0123456789ABCDEF".charAt(Math.floor(m[p]/16))+"0123456789ABCDEF".charAt(m[p]%16);return q}}}
;function Ub(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],F(d,function(g){e.push(g)}),Vb(e.join(" "));
var f=[],k=[];F(c,function(g){k.push(g.key);f.push(g.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];F(d,function(g){e.push(g)});
a=Vb(e.join(" "));a=[c,a];0==k.length||a.push(k.join(""));return a.join("_")}
function Vb(a){var b=Tb();b.update(a);return b.X().toLowerCase()}
;function Wb(a){var b=Sb(String(y.location.href)),c;(c=y.__SAPISID||y.__APISID||y.__OVERRIDE_SID)?c=!0:(c=new zb(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?y.__SAPISID:y.__APISID,c||(c=new zb(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(y.location.href);return d&&c&&b?[b,Ub(Sb(d),c,a||null)].join(" "):null}return null}
;function Xb(){this.g=[];this.f=-1}
Xb.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
Xb.prototype.get=function(a){return!!this.g[a]};
function Yb(a){-1==a.f&&(a.f=Ea(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function Zb(a,b){this.h=a;this.i=b;this.g=0;this.f=null}
Zb.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.h();return a};function $b(a){y.setTimeout(function(){throw a;},0)}
var ac;function bc(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!H("Presto")&&(a=function(){var e=Cb();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var k="callImmediate"+Math.random(),g="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=A(function(h){if(("*"==g||h.origin==g)&&h.data==k)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(k,g)}}});
if("undefined"!==typeof a&&!H("Trident")&&!H("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.K;c.K=null;e()}};
return function(e){d.next={K:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function cc(){this.g=this.f=null}
var ec=new Zb(function(){return new dc},function(a){a.reset()});
cc.prototype.add=function(a,b){var c=ec.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
cc.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function dc(){this.next=this.scope=this.f=null}
dc.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
dc.prototype.reset=function(){this.next=this.scope=this.f=null};function fc(a){gc||hc();ic||(gc(),ic=!0);jc.add(a,void 0)}
var gc;function hc(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);gc=function(){a.then(kc)}}else gc=function(){var b=kc;
!ua(y.setImmediate)||y.Window&&y.Window.prototype&&!H("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(ac||(ac=bc()),ac(b)):y.setImmediate(b)}}
var ic=!1,jc=new cc;function kc(){for(var a;a=jc.remove();){try{a.f.call(a.scope)}catch(c){$b(c)}var b=ec;b.i(a);100>b.g&&(b.g++,a.next=b.f,b.f=a)}ic=!1}
;function lc(){this.g=-1}
;function mc(){this.g=64;this.f=[];this.m=[];this.u=[];this.i=[];this.i[0]=128;for(var a=1;a<this.g;++a)this.i[a]=0;this.l=this.h=0;this.reset()}
E(mc,lc);mc.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.l=this.h=0};
function nc(a,b,c){c||(c=0);var d=a.u;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var k=a.f[2],g=a.f[3],h=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=g^c&(k^g);var l=1518500249}else f=c^k^g,l=1859775393;else 60>e?(f=c&k|g&(c|k),l=2400959708):
(f=c^k^g,l=3395469782);f=(b<<5|b>>>27)+f+h+l+d[e]&4294967295;h=g;g=k;k=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+k&4294967295;a.f[3]=a.f[3]+g&4294967295;a.f[4]=a.f[4]+h&4294967295}
mc.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.m,f=this.h;d<b;){if(0==f)for(;d<=c;)nc(this,a,d),d+=this.g;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){nc(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){nc(this,e);f=0;break}}this.h=f;this.l+=b}};
mc.prototype.digest=function(){var a=[],b=8*this.l;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.g-(this.h-56));for(var c=this.g-1;56<=c;c--)this.m[c]=b&255,b/=256;nc(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};var M="StopIteration"in y?y.StopIteration:{message:"StopIteration",stack:""};function N(){}
N.prototype.next=function(){throw M;};
N.prototype.s=function(){return this};
function oc(a){if(a instanceof N)return a;if("function"==typeof a.s)return a.s(!1);if(ta(a)){var b=0,c=new N;c.next=function(){for(;;){if(b>=a.length)throw M;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function pc(a,b){if(ta(a))try{F(a,b,void 0)}catch(c){if(c!==M)throw c;}else{a=oc(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==M)throw c;}}}
function qc(a){if(ta(a))return Ha(a);a=oc(a);var b=[];pc(a,function(c){b.push(c)});
return b}
;function rc(a,b){this.h={};this.f=[];this.i=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof rc)for(c=sc(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function sc(a){tc(a);return a.f.concat()}
r=rc.prototype;r.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||uc;tc(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function uc(a,b){return a===b}
r.isEmpty=function(){return 0==this.g};
r.clear=function(){this.h={};this.i=this.g=this.f.length=0};
r.remove=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)?(delete this.h[a],this.g--,this.i++,this.f.length>2*this.g&&tc(this),!0):!1};
function tc(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.h,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
r.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.h,a)?this.h[a]:b};
r.set=function(a,b){Object.prototype.hasOwnProperty.call(this.h,a)||(this.g++,this.f.push(a),this.i++);this.h[a]=b};
r.forEach=function(a,b){for(var c=sc(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
r.clone=function(){return new rc(this)};
r.s=function(a){tc(this);var b=0,c=this.i,d=this,e=new N;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw M;var f=d.f[b++];return a?f:d.h[f]};
return e};var vc=y.JSON.stringify;function O(a){Ob.call(this);this.u=1;this.l=[];this.m=0;this.f=[];this.g={};this.B=!!a}
E(O,Ob);r=O.prototype;r.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.u;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.u=e+3;d.push(e);return e};
function wc(a,b,c){var d=xc;if(a=d.g[a]){var e=d.f;(a=Fa(a,function(f){return e[f+1]==b&&e[f+2]==c}))&&d.D(a)}}
r.D=function(a){var b=this.f[a];if(b){var c=this.g[b];if(0!=this.m)this.l.push(a),this.f[a+1]=ra;else{if(c){var d=Da(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.f[a];delete this.f[a+1];delete this.f[a+2]}}return!!b};
r.I=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.B)for(e=0;e<c.length;e++){var k=c[e];yc(this.f[k+1],this.f[k+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f;e++)k=c[e],this.f[k+1].apply(this.f[k+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.D(c)}}return 0!=e}return!1};
function yc(a,b,c){fc(function(){a.apply(b,c)})}
r.clear=function(a){if(a){var b=this.g[a];b&&(F(b,this.D,this),delete this.g[a])}else this.f.length=0,this.g={}};
r.F=function(){O.A.F.call(this);this.clear();this.l.length=0};function zc(a){this.f=a}
zc.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,vc(b))};
zc.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
zc.prototype.remove=function(a){this.f.remove(a)};function P(a){this.f=a}
E(P,zc);function Ac(a){this.data=a}
function Bc(a){return void 0===a||a instanceof Ac?a:new Ac(a)}
P.prototype.set=function(a,b){P.A.set.call(this,a,Bc(b))};
P.prototype.g=function(a){a=P.A.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
P.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Q(a){this.f=a}
E(Q,P);Q.prototype.set=function(a,b,c){if(b=Bc(b)){if(c){if(c<C()){Q.prototype.remove.call(this,a);return}b.expiration=c}b.creation=C()}Q.A.set.call(this,a,b)};
Q.prototype.g=function(a){var b=Q.A.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<C()||c&&c>C())Q.prototype.remove.call(this,a);else return b}};function Cc(){}
;function Dc(){}
E(Dc,Cc);Dc.prototype.clear=function(){var a=qc(this.s(!0)),b=this;F(a,function(c){b.remove(c)})};function Ec(a){this.f=a}
E(Ec,Dc);r=Ec.prototype;r.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
r.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
r.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){this.f.removeItem(a)};
r.s=function(a){var b=0,c=this.f,d=new N;d.next=function(){if(b>=c.length)throw M;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
r.clear=function(){this.f.clear()};
r.key=function(a){return this.f.key(a)};function Fc(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
E(Fc,Ec);function Gc(a,b){this.g=a;this.f=null;var c;if(c=ib)c=!(9<=Number(ub));if(c){Hc||(Hc=new rc);this.f=Hc.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),Hc.set(a,this.f));try{this.f.load(this.g)}catch(d){this.f=null}}}
E(Gc,Dc);var Ic={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Hc=null;function Jc(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Ic[b]})}
r=Gc.prototype;r.isAvailable=function(){return!!this.f};
r.set=function(a,b){this.f.setAttribute(Jc(a),b);Kc(this)};
r.get=function(a){a=this.f.getAttribute(Jc(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){this.f.removeAttribute(Jc(a));Kc(this)};
r.s=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new N;d.next=function(){if(b>=c.length)throw M;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
r.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Kc(this)};
function Kc(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Lc(a,b){this.g=a;this.f=b+"::"}
E(Lc,Dc);Lc.prototype.set=function(a,b){this.g.set(this.f+a,b)};
Lc.prototype.get=function(a){return this.g.get(this.f+a)};
Lc.prototype.remove=function(a){this.g.remove(this.f+a)};
Lc.prototype.s=function(a){var b=this.g.s(!0),c=this,d=new N;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};var R=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};D("yt.config_",R);function Mc(a){var b=arguments;1<b.length?R[b[0]]=b[1]:1===b.length&&Object.assign(R,b[0])}
function S(a,b){return a in R?R[a]:b}
;var Nc=[];function Oc(a){Nc.forEach(function(b){return b(a)})}
function Pc(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Qc(b),Oc(b)}}:a}
function Qc(a){var b=z("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=S("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),Mc("ERRORS",b))}
function Rc(a){var b=z("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=S("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),Mc("ERRORS",b))}
;var Sc=0;D("ytDomDomGetNextId",z("ytDomDomGetNextId")||function(){return++Sc});var Tc={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Uc(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Tc||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
Uc.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Uc.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Uc.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var G=y.ytEventsEventsListeners||{};D("ytEventsEventsListeners",G);var Vc=y.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",Vc);
function Wc(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return La(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,k=va(e[4])&&va(d)&&Ma(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||k)})}
function Xc(a){a&&("string"==typeof a&&(a=[a]),F(a,function(b){if(b in G){var c=G[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Yc()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete G[b]}}))}
var Yc=Ja(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Zc(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=Wc(a,b,c,d);if(!e){e=++Vc.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var k=f?function(g){g=new Uc(g);if(!Db(g.relatedTarget,function(h){return h==a}))return g.currentTarget=a,g.type=b,c.call(a,g)}:function(g){g=new Uc(g);
g.currentTarget=a;return c.call(a,g)};
k=Pc(k);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Yc()||"boolean"===typeof d?a.addEventListener(b,k,d):a.addEventListener(b,k,!!d.capture)):a.attachEvent("on"+b,k);G[e]=[a,b,c,k,d]}}}
;function $c(a,b){ua(a)&&(a=Pc(a));return window.setTimeout(a,b)}
function ad(a){ua(a)&&(a=Pc(a));return window.setInterval(a,250)}
;function bd(a){var b=[];Ka(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];F(f,function(k){""==k?b.push(e):b.push(e+"="+encodeURIComponent(String(k)))})});
return b.join("&")}
function cd(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),k=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?Array.isArray(b[f])?Ia(b[f],k):b[f]=[b[f],k]:b[f]=k}catch(h){if("q"!=e[0]){var g=Error("Error decoding URL component");g.params={key:e[0],value:e[1]};Qc(g)}}}return b}
function dd(a,b){return ed(a,b||{},!0)}
function ed(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=cd(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=Hb(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.substr(0,f),e,b.substr(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
;var fd={};function gd(a){return fd[a]||(fd[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var hd={},id=[],xc=new O,jd={};function kd(){for(var a=u(id),b=a.next();!b.done;b=a.next())b=b.value,b()}
function ld(a,b){var c;"yt:"==a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[gd(b)]:a.getAttribute("data-"+b):null;return c}
function md(a,b){xc.I.apply(xc,arguments)}
;function nd(a){this.g=a||{};this.h=this.f=!1;a=document.getElementById("www-widgetapi-script");if(this.f=!!("https:"==document.location.protocol||a&&0==a.src.indexOf("https:"))){a=[this.g,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.replace("http://","https://"))}}
function T(a,b){for(var c=[a.g,window.YTConfig||{}],d=0;d<c.length;d++){var e=c[d][b];if(void 0!=e)return e}return null}
function od(a,b,c){pd||(pd={},Zc(window,"message",A(a.i,a)));pd[c]=b}
nd.prototype.i=function(a){if(a.origin==T(this,"host")||a.origin==T(this,"host").replace(/^http:/,"https:")){try{var b=JSON.parse(a.data)}catch(c){return}this.h=!0;this.f||0!=a.origin.indexOf("https:")||(this.f=!0);if(a=pd[b.id])a.B=!0,a.B&&(F(a.u,a.J,a),a.u.length=0),a.T(b)}};
var pd=null;function U(a){a=qd(a);return"string"===typeof a&&"false"===a?!1:!!a}
function rd(a,b){var c=qd(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function qd(a){var b=S("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:S("EXPERIMENT_FLAGS",{})[a]}
;function sd(){}
function td(a){var b=5E3;isNaN(b)&&(b=void 0);var c=z("yt.scheduler.instance.addJob");c?c(a,0,b):void 0===b?a():$c(a,b||0)}
;function V(){}
oa(V,sd);V.prototype.start=function(){var a=z("yt.scheduler.instance.start");a&&a()};
V.f=void 0;V.g=function(){V.f||(V.f=new V)};
V.g();var ud=y.ytPubsubPubsubInstance||new O;O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.D;O.prototype.publish=O.prototype.I;O.prototype.clear=O.prototype.clear;D("ytPubsubPubsubInstance",ud);D("ytPubsubPubsubSubscribedKeys",y.ytPubsubPubsubSubscribedKeys||{});D("ytPubsubPubsubTopicToKeys",y.ytPubsubPubsubTopicToKeys||{});D("ytPubsubPubsubIsSynchronous",y.ytPubsubPubsubIsSynchronous||{});var W=window,vd=W.ytcsi&&W.ytcsi.now?W.ytcsi.now:W.performance&&W.performance.timing&&W.performance.now&&W.performance.timing.navigationStart?function(){return W.performance.timing.navigationStart+W.performance.now()}:function(){return(new Date).getTime()};var wd=rd("initial_gel_batch_timeout",1E3),xd=Math.pow(2,16)-1,yd=null,zd=0,Ad=void 0,Bd=0,Cd=0,Dd=0,Ed=!0,Fd=y.ytLoggingTransportLogPayloadsQueue_||{};D("ytLoggingTransportLogPayloadsQueue_",Fd);var Gd=y.ytLoggingTransportGELQueue_||new Map;D("ytLoggingTransportGELQueue_",Gd);var Hd=y.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",Hd);
function Id(){window.clearTimeout(Bd);window.clearTimeout(Cd);Cd=0;Ad&&Ad.isReady()?(Jd(Gd),"log_event"in Fd&&Jd(Object.entries(Fd.log_event)),Gd.clear(),delete Fd.log_event):Kd()}
function Kd(){U("web_gel_timeout_cap")&&!Cd&&(Cd=$c(Id,6E4));window.clearTimeout(Bd);var a=S("LOGGING_BATCH_TIMEOUT",rd("web_gel_debounce_ms",1E4));U("shorten_initial_gel_batch_timeout")&&Ed&&(a=wd);Bd=$c(Id,a)}
function Jd(a){var b=Ad,c=Math.round(vd());a=u(a);for(var d=a.next();!d.done;d=a.next()){var e=u(d.value);d=e.next().value;var f=e.next().value;e=Na({context:Ld(b.f||Md())});e.events=f;(f=Hd[d])&&Nd(e,d,f);delete Hd[d];Od(e,c);Pd(b,"log_event",e,{retry:!0,onSuccess:function(){zd=Math.round(vd()-c)}});
Ed=!1}}
function Od(a,b){a.requestTimeMs=String(b);U("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=S("EVENT_ID",void 0);if(c){var d=S("BATCH_CLIENT_COUNTER",void 0)||0;!d&&U("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*xd/2));d++;d>xd&&(d=1);Mc("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;yd&&zd&&U("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:yd,roundtripMs:String(zd)});yd=c;zd=0}}
function Nd(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var Qd=y.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",Qd);function Rd(a){var b=Sd;a=void 0===a?z("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(Td(b),Ud(b));b.ca_type="image";a&&(b.bid=a);return b}
function Td(a){var b={};b.dt=Rb;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?I:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!I.navigator&&"unknown"!==typeof I.navigator.javaEnabled&&!!I.navigator.javaEnabled&&I.navigator.javaEnabled();I.screen&&(b.u_h=I.screen.height,b.u_w=I.screen.width,b.u_ah=I.screen.availHeight,b.u_aw=I.screen.availWidth,b.u_cd=I.screen.colorDepth);
I.navigator&&I.navigator.plugins&&(b.u_nplug=I.navigator.plugins.length);I.navigator&&I.navigator.mimeTypes&&(b.u_nmime=I.navigator.mimeTypes.length);return b}
function Ud(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(m){}try{var e=b.outerWidth;var f=b.outerHeight}catch(m){}try{var k=b.innerWidth;var g=b.innerHeight}catch(m){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,k,g];c=a.f.top;try{var h=(c||window).document,l="CSS1Compat"==h.compatMode?h.documentElement:h.body;var n=(new Bb(l.clientWidth,l.clientHeight)).round()}catch(m){n=new Bb(-12245933,-12245933)}h=n;n={};l=new Xb;y.SVGElement&&
y.document.createElementNS&&l.set(0);c=Nb();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);y.crypto&&y.crypto.subtle&&l.set(3);y.TextDecoder&&y.TextEncoder&&l.set(4);l=Yb(l);n.bc=l;n.bih=h.height;n.biw=h.width;n.brdim=b.join();a=a.g;return n.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,n.wgl=!!I.WebGLRenderingContext,n}
var Sd=new function(){var a=window.document;this.f=window;this.g=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return bd(Rd(a))});C();var Vd=void 0!==XMLHttpRequest?function(){return new XMLHttpRequest}:void 0!==ActiveXObject?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function Wd(){if(!Vd)return null;var a=Vd();return"open"in a?a:null}
;var Xd={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Yd="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
Zd=!1;
function $d(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=J(a)[1]||null,e=L(J(a)[3]||null);d&&e?(d=c,c=J(a),d=J(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?L(J(c)[3]||null)==e&&(Number(J(c)[4]||null)||null)==(Number(J(a)[4]||null)||null):!0;d=U("web_ajax_ignore_global_headers_if_set");for(var f in Xd)e=S(Xd[f]),!e||!c&&!ae(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||ae(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||ae(a,"X-YouTube-Time-Zone"))&&(f=
"undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=f);if(c||ae(a,"X-YouTube-Ad-Signals"))b["X-YouTube-Ad-Signals"]=bd(Rd(void 0));return b}
function be(a){var b=window.location.search,c=L(J(a)[3]||null),d=L(J(a)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=cd(b),f={};F(Yd,function(k){e[k]&&(f[k]=e[k])});
return ed(a,f||{},!1)}
function ae(a,b){var c=S("CORS_HEADER_WHITELIST")||{},d=L(J(a)[3]||null);return d?(c=c[d])?0<=Da(c,b):!1:!0}
function ce(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=de(a,b);var d=ee(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(k){if(!e){e=!0;f&&window.clearTimeout(f);var g=k.ok,h=function(l){l=l||{};var n=b.context||y;g?b.onSuccess&&b.onSuccess.call(n,l,k):b.onError&&b.onError.call(n,l,k);b.G&&b.G.call(n,l,k)};
"JSON"==(b.format||"JSON")&&(g||400<=k.status&&500>k.status)?k.json().then(h,function(){h(null)}):h(null)}});
b.P&&0<b.timeout&&(f=$c(function(){e||(e=!0,window.clearTimeout(f),b.P.call(b.context||y))},b.timeout))}else fe(a,b)}
function fe(a,b){var c=b.format||"JSON";a=de(a,b);var d=ee(a,b),e=!1,f=ge(a,function(h){if(!e){e=!0;g&&window.clearTimeout(g);a:switch(h&&"status"in h?h.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var n=null,m=400<=h.status&&500>h.status,q=500<=h.status&&600>h.status;if(l||m||q)n=he(a,c,h,b.ta);if(l)a:if(h&&204==h.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||
{};m=b.context||y;l?b.onSuccess&&b.onSuccess.call(m,h,n):b.onError&&b.onError.call(m,h,n);b.G&&b.G.call(m,h,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
if(b.C&&0<b.timeout){var k=b.C;var g=$c(function(){e||(e=!0,f.abort(),window.clearTimeout(g),k.call(b.context||y,f))},b.timeout)}}
function de(a,b){b.xa&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=S("XSRF_FIELD_NAME",void 0),d=b.fa;d&&(d[c]&&delete d[c],a=dd(a,d));return a}
function ee(a,b){var c=S("XSRF_FIELD_NAME",void 0),d=S("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.o,k=S("XSRF_FIELD_NAME",void 0),g;b.headers&&(g=b.headers["Content-Type"]);b.wa||L(J(a)[3]||null)&&!b.withCredentials&&L(J(a)[3]||null)!=document.location.hostname||"POST"!=b.method||g&&"application/x-www-form-urlencoded"!=g||b.o&&b.o[k]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=cd(e),Pa(e,f),e=b.S&&"JSON"==b.S?JSON.stringify(e):Hb(e));if(!(c=e)&&(c=f)){a:{for(var h in f){f=!1;break a}f=!0}c=!f}!Zd&&
c&&"POST"!=b.method&&(Zd=!0,Qc(Error("AJAX request with postData should use POST")));return e}
function he(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(k){throw d=Error("Error reading responseText"),d.params=a,Rc(d),k;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?ie(a):null)e={},F(a.getElementsByTagName("*"),function(k){e[k.tagName]=je(k)})}d&&ke(e);
return e}
function ke(a){if(va(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=new Sa(Ta,"HTML that is escaped and sanitized server-side and passed through yt.net.ajax");Va(e);Va(e);e=new gb;var f=Ra();f&&f.createHTML(d);a[c]=e}else ke(a[b])}}
function ie(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function je(a){var b="";F(a.childNodes,function(c){b+=c.nodeValue});
return b}
function ge(a,b,c,d,e,f,k){function g(){4==(h&&"readyState"in h?h.readyState:0)&&b&&Pc(b)(h)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var h=Wd();if(!h)return null;"onloadend"in h?h.addEventListener("loadend",g,!1):h.onreadystatechange=g;U("debug_forward_web_query_parameters")&&(a=be(a));h.open(c,a,!0);f&&(h.responseType=f);k&&(h.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=$d(a,e))for(var l in e)h.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&h.setRequestHeader("Content-Type","application/x-www-form-urlencoded");h.send(d);
return h}
;function le(){for(var a={},b=u(Object.entries(cd(S("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=u(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a}
;function me(){return"INNERTUBE_API_KEY"in R&&"INNERTUBE_API_VERSION"in R}
function Md(){return{innertubeApiKey:S("INNERTUBE_API_KEY",void 0),innertubeApiVersion:S("INNERTUBE_API_VERSION",void 0),Y:S("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Z:S("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:S("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),ba:S("INNERTUBE_CONTEXT_HL",void 0),aa:S("INNERTUBE_CONTEXT_GL",void 0),ca:S("INNERTUBE_HOST_OVERRIDE",void 0)||"",da:!!S("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)}}
function Ld(a){a={client:{hl:a.ba,gl:a.aa,clientName:a.Z,clientVersion:a.innertubeContextClientVersion,configInfo:a.Y}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));b=S("EXPERIMENTS_TOKEN","");""!==b&&(a.client.experimentsToken=b);b=[];var c=S("EXPERIMENTS_FORCED_FLAGS",{});for(d in c)b.push({key:d,value:String(c[d])});var d=S("EXPERIMENT_FLAGS",{});for(var e in d)e.startsWith("force_")&&void 0===c[e]&&b.push({key:e,value:String(d[e])});0<b.length&&(a.request={internalExperimentFlags:b});
S("DELEGATED_SESSION_ID")&&!U("pageid_as_header_web")&&(a.user={onBehalfOfUser:S("DELEGATED_SESSION_ID")});a.client=Object.assign(a.client,le());return a}
function ne(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||S("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.sa||S("AUTHORIZATION"))||(a?b="Bearer "+z("gapi.auth.getToken")().ra:b=Wb([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=S("SESSION_INDEX",0),U("pageid_as_header_web")&&(d["X-Goog-PageId"]=S("DELEGATED_SESSION_ID")));return d}
function oe(a){a=Object.assign({},a);delete a.Authorization;var b=Wb();if(b){var c=new mc;c.update(S("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;ta(b);void 0===c&&(c=0);if(!wb){wb={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var k=d.concat(e[f].split(""));vb[f]=k;for(var g=0;g<k.length;g++){var h=k[g];void 0===wb[h]&&(wb[h]=g)}}}c=vb[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],n=(f=e+1<b.length)?
b[e+1]:0;h=(k=e+2<b.length)?b[e+2]:0;g=l>>2;l=(l&3)<<4|n>>4;n=(n&15)<<2|h>>6;h&=63;k||(h=64,f||(n=64));d.push(c[g],c[l],c[n]||"",c[h]||"")}a.hash=d.join("")}return a}
;function pe(){var a=new Fc;(a=a.isAvailable()?new Lc(a,"yt.innertube"):null)||(a=new Gc("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new Q(a):null;this.g=document.domain||window.location.hostname}
pe.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,C()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(vc(b))}catch(f){return}else e=escape(b);b=this.g;Ab.set(""+a,e,{M:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
pe.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=Ab.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
pe.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;Ab.remove(""+a,"/",void 0===b?"youtube.com":b)};var X=new pe;function qe(a,b,c,d){if(d)return null;d=X.get("nextId",!0)||1;var e=X.get("requests",!0)||{};e[d]={method:a,request:b,authState:oe(c),requestTime:Math.round(vd())};X.set("nextId",d+1,86400,!0);X.set("requests",e,86400,!0);return d}
function re(a){var b=X.get("requests",!0)||{};delete b[a];X.set("requests",b,86400,!0)}
function se(a){var b=X.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(vd())-d.requestTime)){var e=d.authState,f=oe(ne(!1));Ma(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(vd())),Pd(a,d.method,e,{}));delete b[c]}}X.set("requests",b,86400,!0)}}
;function te(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:ha(u(c)))}
oa(te,Error);function ue(a){var b=this;this.f=null;a?this.f=a:me()&&(this.f=Md());td(function(){se(b)})}
ue.prototype.isReady=function(){!this.f&&me()&&(this.f=Md());return!!this.f};
function Pd(a,b,c,d){!S("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Rc(new te("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady())throw b=new te("innertube xhrclient not ready",b,c,d),Qc(b),b.f=0,b;var e={headers:{"Content-Type":"application/json"},method:"POST",o:c,S:"JSON",C:function(){d.C()},
P:d.C,onSuccess:function(q,p){if(d.onSuccess)d.onSuccess(p)},
O:function(q){if(d.onSuccess)d.onSuccess(q)},
onError:function(q,p){if(d.onError)d.onError(p)},
ya:function(q){if(d.onError)d.onError(q)},
timeout:d.timeout,withCredentials:!0},f="",k=a.f.ca;k&&(f=k);k=a.f.da||!1;var g=ne(k,f,d);Object.assign(e.headers,g);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var h=dd(""+f+("/youtubei/"+a.f.innertubeApiVersion+"/"+b),{alt:"json",key:a.f.innertubeApiKey}),l;if(d.retry&&U("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(l=qe(b,c,g,k))){var n=e.onSuccess,m=e.O;e.onSuccess=function(q,p){re(l);n(q,p)};
c.O=function(q,p){re(l);m(q,p)}}try{U("use_fetch_for_op_xhr")?ce(h,e):(e.method="POST",e.o||(e.o={}),fe(h,e))}catch(q){if("InvalidAccessError"==q.name)l&&(re(l),l=0),Rc(Error("An extension is blocking network request."));
else throw q;}l&&td(function(){se(a)})}
;var ve=[{N:function(a){return"Cannot read property '"+a.key+"'"},
H:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{N:function(a){return"Cannot call '"+
a.key+"'"},
H:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
groups:["key"]}]}}];var we=new Set,xe=0,ye=void 0;function ze(a,b,c,d){c+="."+a;a=String(JSON.stringify(b)).substr(0,500);d[c]=a;return c.length+a.length}
;function Y(a,b,c){this.m=this.f=this.g=null;this.l=wa(this);this.h=0;this.B=!1;this.u=[];this.i=null;this.U=c;this.W={};c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"==a.tagName.toLowerCase(),b.host||(b.host=c?Fb(a.src):"https://www.youtube.com"),this.g=new nd(b),c||(b=Ae(this,a),this.m=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.f=a,this.f.id||(this.f.id="widget"+wa(this.f)),hd[this.f.id]=this,window.postMessage){this.i=new O;Be(this);b=T(this.g,"events");for(var d in b)b.hasOwnProperty(d)&&
this.addEventListener(d,b[d]);for(var e in jd)Ce(this,e)}}
r=Y.prototype;r.setSize=function(a,b){this.f.width=a;this.f.height=b;return this};
r.ea=function(){return this.f};
r.T=function(a){De(this,a.event,a)};
r.addEventListener=function(a,b){var c=b;"string"==typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.i.subscribe(a,c);Ee(this,a);return this};
function Ce(a,b){var c=b.split(".");if(2==c.length){var d=c[1];a.U==c[0]&&Ee(a,d)}}
r.destroy=function(){this.f.id&&(hd[this.f.id]=null);var a=this.i;a&&"function"==typeof a.dispose&&a.dispose();if(this.m){a=this.f;var b=a.parentNode;b&&b.replaceChild(this.m,a)}else(a=this.f)&&a.parentNode&&a.parentNode.removeChild(a);pd&&(pd[this.l]=null);this.g=null;a=this.f;for(var c in G)G[c][0]==a&&Xc(c);this.m=this.f=null};
r.L=function(){return{}};
function Fe(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.B?a.J(b):a.u.push(b)}
function De(a,b,c){a.i.h||(c={target:a,data:c},a.i.I(b,c),md(a.U+"."+b,c))}
function Ae(a,b){for(var c=document.createElement("iframe"),d=b.attributes,e=0,f=d.length;e<f;e++){var k=d[e].value;null!=k&&""!=k&&"null"!=k&&c.setAttribute(d[e].name,k)}c.setAttribute("frameBorder",0);c.setAttribute("allowfullscreen",1);c.setAttribute("allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+T(a.g,"title"));(d=T(a.g,"width"))&&c.setAttribute("width",d);(d=T(a.g,"height"))&&c.setAttribute("height",d);var g=a.L();g.enablejsapi=
window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.l;window.location.href&&F(["debugjs","debugcss"],function(h){var l=window.location.href;var n=l.search(Ib);b:{var m=0;for(var q=h.length;0<=(m=l.indexOf(h,m))&&m<n;){var p=l.charCodeAt(m-1);if(38==p||63==p)if(p=l.charCodeAt(m+q),!p||61==p||38==p||35==p)break b;m+=q+1}m=-1}if(0>m)l=null;else{q=l.indexOf("&",m);if(0>q||q>n)q=n;m+=h.length+1;l=decodeURIComponent(l.substr(m,q-m).replace(/\+/g,
" "))}null!==l&&(g[h]=l)});
c.src=T(a.g,"host")+("/embed/"+T(a.g,"videoId"))+"?"+Hb(g);return c}
r.R=function(){this.f&&this.f.contentWindow?this.J({event:"listening"}):window.clearInterval(this.h)};
function Be(a){od(a.g,a,a.l);a.h=ad(A(a.R,a));Zc(a.f,"load",A(function(){window.clearInterval(this.h);this.h=ad(A(this.R,this))},a))}
function Ee(a,b){a.W[b]||(a.W[b]=!0,Fe(a,"addEventListener",[b]))}
r.J=function(a){a.id=this.l;a.channel="widget";a=vc(a);var b=this.g;var c=Fb(this.f.src||"");b=0==c.indexOf("https:")?[c]:b.f?[c.replace("http:","https:")]:b.h?[c]:[c,c.replace("http:","https:")];if(this.f.contentWindow)for(c=0;c<b.length;c++)try{this.f.contentWindow.postMessage(a,b[c])}catch(K){if(K.name&&"SyntaxError"==K.name){if(!(K.message&&0<K.message.indexOf("target origin ''"))){var d=void 0,e=void 0,f=K;e=void 0===e?{}:e;e.name=S("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=S("INNERTUBE_CONTEXT_CLIENT_VERSION",
void 0);var k=e||{};e="WARNING";e=void 0===e?"ERROR":e;d=void 0===d?!1:d;if(f){if(U("console_log_js_exceptions")){var g=f,h=[];h.push("Name: "+g.name);h.push("Message: "+g.message);g.hasOwnProperty("params")&&h.push("Error Params: "+JSON.stringify(g.params));h.push("File name: "+g.fileName);h.push("Stacktrace: "+g.stack);window.console.log(h.join("\n"),g)}if((window&&window.yterr||d)&&!(5<=xe)&&0!==f.f){var l=void 0,n=xb(f);d=n.message||"Unknown Error";g=n.name||"UnknownError";h=n.lineNumber||"Not available";
var m=n.fileName||"Not available";n=n.stack||f.g||"Not available";if(f.hasOwnProperty("args")&&f.args&&f.args.length){var q=0;for(l=0;l<f.args.length;l++){var p=f.args[l],v="params."+l;q+=v.length;if(p)if(Array.isArray(p))for(var x=k,B=0;B<p.length&&!(p[B]&&(q+=ze(B,p[B],v,x),500<q));B++);else if("object"===typeof p)for(x in x=void 0,B=k,p){if(p[x]&&(q+=ze(x,p[x],v,B),500<q))break}else k[v]=String(JSON.stringify(p)).substring(0,500),q+=k[v].length;else k[v]=String(JSON.stringify(p)).substring(0,500),
q+=k[v].length;if(500<=q)break}}else if(f.hasOwnProperty("params")&&f.params)if(p=f.params,"object"===typeof f.params)for(l in v=0,p){if(p[l]&&(q="params."+l,x=String(JSON.stringify(p[l])).substr(0,500),k[q]=x,v+=q.length+x.length,500<v))break}else k.params=String(JSON.stringify(p)).substr(0,500);k={message:d,name:g,lineNumber:h,fileName:m,stack:n,params:k};f=Number(f.columnNumber);isNaN(f)||(k.lineNumber=k.lineNumber+":"+f);f=k;void 0===ye&&(ye=Math.random()<rd("log_js_error_clusters"));if(!0===
ye)a:for(g=u(ve),k=g.next();!k.done;k=g.next())if(k=k.value,k.H[f.name])for(h=u(k.H[f.name]),d=h.next();!d.done;d=h.next())if(m=d.value,d=f.message.match(m.regexp)){f.params["error.original"]=d[0];g=m.groups;h={};for(m=0;m<g.length;m++)h[g[m]]=d[m+1],f.params["error."+g[m]]=d[m+1];f.message=k.N(h);break a}window.yterr&&"function"===typeof window.yterr&&window.yterr(f);if(!(we.has(f.message)||0<=f.stack.indexOf("/YouTubeCenter.js")||0<=f.stack.indexOf("/mytube.js"))){if(U("kevlar_gel_error_routing")){d=
k=void 0;h=e;g=f;m={stackTrace:g.stack};g.fileName&&(m.filename=g.fileName);n=(null===(d=g.lineNumber)||void 0===d?0:d.split)?g.lineNumber.split(":"):[];0!==n.length&&(1!==n.length||isNaN(Number(n[0]))?2!==n.length||isNaN(Number(n[0]))||isNaN(Number(n[1]))||(m.lineNumber=Number(n[0]),m.columnNumber=Number(n[1])):m.lineNumber=Number(n[0]));d={level:"ERROR_LEVEL_UNKNOWN",message:g.message};"ERROR"===h?d.level="ERROR_LEVEL_ERROR":"WARNING"===h&&(d.level="ERROR_LEVEL_WARNNING");h={isObfuscated:!0,browserStackInfo:m};
m={pageUrl:window.location.href,kvPairs:[]};if(g=g.params)for(n=u(Object.keys(g)),l=n.next();!l.done;l=n.next())l=l.value,m.kvPairs.push({key:"client."+l,value:String(g[l])});h={errorMetadata:m,stackTrace:h,logMessage:d};k=void 0===k?{}:k;d=ue;S("ytLoggingEventsDefaultDisabled",!1)&&ue==ue&&(d=null);k=void 0===k?{}:k;g={};g.eventTimeMs=Math.round(k.timestamp||vd());g.clientError=h;h=String;k.timestamp?m=-1:(m=z("_lact",window),null==m?m=-1:m=Math.max(C()-m,0));g.context={lastActivityMs:h(m)};U("log_sequence_info_on_gel_web")&&
k.V&&(h=g.context,m=k.V,Qd[m]=m in Qd?Qd[m]+1:0,h.sequence={index:Qd[m],groupKey:m},k.va&&delete Qd[k.V]);k=k.ua;h="";k&&(h=k,m={},h.videoId?m.videoId=h.videoId:h.playlistId&&(m.playlistId=h.playlistId),Hd[k.token]=m,h=k.token);k=Gd.get(h)||[];Gd.set(h,k);k.push(g);d&&(Ad=new d);d=rd("web_logging_max_batch")||100;g=vd();k.length>=d?Id():10<=g-Dd&&(Kd(),Dd=g);Id()}d=f;k=d.params||{};e={fa:{a:"logerror",t:"jserror",type:d.name,msg:d.message.substr(0,250),line:d.lineNumber,level:e,"client.name":k.name},
o:{url:S("PAGE_NAME",window.location.href),file:d.fileName},method:"POST"};k.version&&(e["client.version"]=k.version);if(e.o){d.stack&&(e.o.stack=d.stack);d=u(Object.keys(k));for(g=d.next();!g.done;g=d.next())g=g.value,e.o["client."+g]=k[g];if(k=S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(d=u(Object.keys(k)),g=d.next();!g.done;g=d.next())g=g.value,e.o[g]=k[g];k=S("SERVER_NAME",void 0);d=S("SERVER_VERSION",void 0);k&&d&&(e.o["server.name"]=k,e.o["server.version"]=d)}fe(S("ECATCHER_REPORT_HOST",
"")+"/error_204",e);we.add(f.message);xe++}}}}}else throw K;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function Ge(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function He(a){return 0===a.search("get")||0===a.search("is")}
;function Z(a,b){if(!a)throw Error("YouTube player element ID required.");var c={title:"video player",videoId:"",width:640,height:360};if(b)for(var d in b)c[d]=b[d];Y.call(this,a,c,"player");this.v={};this.playerInfo={}}
oa(Z,Y);r=Z.prototype;r.L=function(){var a=T(this.g,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!=window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=T(this.g,"embedConfig")){if(va(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
r.T=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(va(a))for(var c in a)this.v[c]=a[c];break;case "infoDelivery":Ie(this,a);break;case "initialDelivery":window.clearInterval(this.h);this.playerInfo={};this.v={};Je(this,a.apiInterface);Ie(this,a);break;default:De(this,b,a)}};
function Ie(a,b){if(va(b))for(var c in b)a.playerInfo[c]=b[c]}
function Je(a,b){F(b,function(c){this[c]||("getCurrentTime"==c?this[c]=function(){var d=this.playerInfo.currentTime;if(1==this.playerInfo.playerState){var e=(C()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:Ge(c)?this[c]=function(){this.playerInfo={};
this.v={};Fe(this,c,arguments);return this}:He(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){Fe(this,c,arguments);
return this})},a)}
r.getVideoEmbedCode=function(){var a=parseInt(T(this.g,"width"),10),b=parseInt(T(this.g,"height"),10),c=T(this.g,"host")+("/embed/"+T(this.g,"videoId"));cb.test(c)&&(-1!=c.indexOf("&")&&(c=c.replace(Xa,"&amp;")),-1!=c.indexOf("<")&&(c=c.replace(Ya,"&lt;")),-1!=c.indexOf(">")&&(c=c.replace(Za,"&gt;")),-1!=c.indexOf('"')&&(c=c.replace($a,"&quot;")),-1!=c.indexOf("'")&&(c=c.replace(ab,"&#39;")),-1!=c.indexOf("\x00")&&(c=c.replace(bb,"&#0;")));return'<iframe width="'+a+'" height="'+b+'" src="'+c+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'};
r.getOptions=function(a){return this.v.namespaces?a?this.v[a].options||[]:this.v.namespaces||[]:[]};
r.getOption=function(a,b){if(this.v.namespaces&&a&&b)return this.v[a][b]};
function Ke(a){if("iframe"!=a.tagName.toLowerCase()){var b=ld(a,"videoid");b&&(b={videoId:b,width:ld(a,"width"),height:ld(a,"height")},new Z(a,b))}}
;D("YT.PlayerState.UNSTARTED",-1);D("YT.PlayerState.ENDED",0);D("YT.PlayerState.PLAYING",1);D("YT.PlayerState.PAUSED",2);D("YT.PlayerState.BUFFERING",3);D("YT.PlayerState.CUED",5);D("YT.get",function(a){return hd[a]});
D("YT.scan",kd);D("YT.subscribe",function(a,b,c){xc.subscribe(a,b,c);jd[a]=!0;for(var d in hd)Ce(hd[d],a)});
D("YT.unsubscribe",function(a,b,c){wc(a,b,c)});
D("YT.Player",Z);Y.prototype.destroy=Y.prototype.destroy;Y.prototype.setSize=Y.prototype.setSize;Y.prototype.getIframe=Y.prototype.ea;Y.prototype.addEventListener=Y.prototype.addEventListener;Z.prototype.getVideoEmbedCode=Z.prototype.getVideoEmbedCode;Z.prototype.getOptions=Z.prototype.getOptions;Z.prototype.getOption=Z.prototype.getOption;
id.push(function(a){var b=a;b||(b=document);a=Ha(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var k=b.className,g;if(g="function"==typeof k.split)g=0<=Da(k.split(/\s+/),
"yt-player");g&&(f[d++]=b)}f.length=d;b=f}}b=Ha(b);F(Ga(a,b),Ke)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||kd();var Le=y.onYTReady;Le&&Le();var Me=y.onYouTubeIframeAPIReady;Me&&Me();var Ne=y.onYouTubePlayerAPIReady;Ne&&Ne();}).call(this);
