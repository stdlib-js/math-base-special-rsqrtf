// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).rsqrtf=n()}(this,(function(){"use strict";var t="function"==typeof Math.fround?Math.fround:null;var n=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var o=function(){return n&&"symbol"==typeof Symbol.toStringTag},r=Object.prototype.toString,e=r;var f=function(t){return e.call(t)},u=Object.prototype.hasOwnProperty;var a=function(t,n){return null!=t&&u.call(t,n)},l="function"==typeof Symbol?Symbol.toStringTag:"",i=a,c=l,y=r;var p=f,d=function(t){var n,o,r;if(null==t)return y.call(t);o=t[c],n=i(t,c);try{t[c]=void 0}catch(n){return y.call(t)}return r=y.call(t),n?t[c]=o:delete t[c],r},b=o()?d:p,s="function"==typeof Float32Array;var v=function(t){return s&&t instanceof Float32Array||"[object Float32Array]"===b(t)},m=Number.POSITIVE_INFINITY,h="function"==typeof Float32Array?Float32Array:null,S=v,F=m,g=h;var A="function"==typeof Float32Array?Float32Array:void 0,T=function(){throw new Error("not implemented")},w=new(function(){var t,n;if("function"!=typeof g)return!1;try{n=new g([1,3.14,-3.14,5e40]),t=S(n)&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===F}catch(n){t=!1}return t}()?A:T)(1);var I=t;"function"!=typeof I&&(I=function(t){return w[0]=t,w[0]});var j=I,O=Math.sqrt,M=j,N=O;return function(t){return M(1/N(M(t)))}}));
//# sourceMappingURL=bundle.js.map
