// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,o;t=this,o=function(){"use strict";var t="function"==typeof Math.fround?Math.fround:null,o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),n=Object.prototype.toString,e=Object.prototype.hasOwnProperty,r="function"==typeof Symbol?Symbol.toStringTag:"",f=o&&"symbol"==typeof Symbol.toStringTag?function(t){var o,f,l,u,a;if(null==t)return n.call(t);f=t[r],a=r,o=null!=(u=t)&&e.call(u,a);try{t[r]=void 0}catch(o){return n.call(t)}return l=n.call(t),o?t[r]=f:delete t[r],l}:function(t){return n.call(t)},l="function"==typeof Float32Array,u=Number.POSITIVE_INFINITY,a="function"==typeof Float32Array?Float32Array:null,i="function"==typeof Float32Array?Float32Array:void 0,y=new(function(){var t,o,n;if("function"!=typeof a)return!1;try{o=new a([1,3.14,-3.14,5e40]),n=o,t=(l&&n instanceof Float32Array||"[object Float32Array]"===f(n))&&1===o[0]&&3.140000104904175===o[1]&&-3.140000104904175===o[2]&&o[3]===u}catch(o){t=!1}return t}()?i:function(){throw new Error("not implemented")})(1),c="function"==typeof t?t:function(t){return y[0]=t,y[0]},p=Math.sqrt;return function(t){return c(1/p(c(t)))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):(t="undefined"!=typeof globalThis?globalThis:t||self).rsqrtf=o();
//# sourceMappingURL=browser.js.map
