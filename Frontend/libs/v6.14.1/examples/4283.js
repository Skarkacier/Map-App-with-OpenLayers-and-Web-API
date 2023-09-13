"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4283],{57313:function(r,e,t){function n(r,e){var t=r.length-e,n=0;do{for(var o=e;o>0;o--)r[n+e]+=r[n],n++;t-=e}while(t>0)}function o(r,e,t){for(var n=0,o=r.length,i=o/t;o>e;){for(var a=e;a>0;--a)r[n+e]+=r[n],++n;o-=e}for(var u=r.slice(),c=0;c<i;++c)for(var f=0;f<t;++f)r[t*c+f]=u[(t-f-1)*i+c]}function i(r,e,t,i,a,u){if(!e||1===e)return r;for(var c=0;c<a.length;++c){if(a[c]%8!=0)throw new Error("When decoding with predictor, only multiple of 8 bits are supported.");if(a[c]!==a[0])throw new Error("When decoding with predictor, all samples must have the same size.")}for(var f=a[0]/8,l=2===u?1:a.length,s=0;s<i&&!(s*l*t*f>=r.byteLength);++s){var p=void 0;if(2===e){switch(a[0]){case 8:p=new Uint8Array(r,s*l*t*f,l*t*f);break;case 16:p=new Uint16Array(r,s*l*t*f,l*t*f/2);break;case 32:p=new Uint32Array(r,s*l*t*f,l*t*f/4);break;default:throw new Error("Predictor 2 not allowed with ".concat(a[0]," bits per sample."))}n(p,l)}else 3===e&&o(p=new Uint8Array(r,s*l*t*f,l*t*f),l,f)}return r}function a(r,e,t,n,o,i,a){try{var u=r[i](a),c=u.value}catch(r){return void t(r)}u.done?e(c):Promise.resolve(c).then(n,o)}function u(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}t.d(e,{Z:function(){return c}});var c=function(){function r(){!function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r)}var e,t,n,o,c;return e=r,(t=[{key:"decode",value:(o=regeneratorRuntime.mark((function r(e,t){var n,o,a,u,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.decodeBlock(t);case 2:if(n=r.sent,1===(o=e.Predictor||1)){r.next=9;break}return a=!e.StripOffsets,u=a?e.TileWidth:e.ImageWidth,c=a?e.TileLength:e.RowsPerStrip||e.ImageLength,r.abrupt("return",i(n,o,u,c,e.BitsPerSample,e.PlanarConfiguration));case 9:return r.abrupt("return",n);case 10:case"end":return r.stop()}}),r,this)})),c=function(){var r=this,e=arguments;return new Promise((function(t,n){var i=o.apply(r,e);function u(r){a(i,t,n,u,c,"next",r)}function c(r){a(i,t,n,u,c,"throw",r)}u(void 0)}))},function(r,e){return c.apply(this,arguments)})}])&&u(e.prototype,t),n&&u(e,n),Object.defineProperty(e,"prototype",{writable:!1}),r}()},4283:function(r,e,t){t.r(e),t.d(e,{default:function(){return h}});var n=t(57313);function o(r){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}function i(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function a(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function u(r,e){return(u=Object.setPrototypeOf||function(r,e){return r.__proto__=e,r})(r,e)}function c(r){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(r){return!1}}();return function(){var t,n=l(r);if(e){var o=l(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return f(this,t)}}function f(r,e){if(e&&("object"===o(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(r){if(void 0===r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}(r)}function l(r){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)})(r)}function s(r,e){for(var t=e.length-1;t>=0;t--)r.push(e[t]);return r}function p(r){for(var e=new Uint16Array(4093),t=new Uint8Array(4093),n=0;n<=257;n++)e[n]=4096,t[n]=n;var o=258,i=9,a=0;function u(){o=258,i=9}function c(r){var e=function(r,e,t){var n=e%8,o=Math.floor(e/8),i=8-n,a=e+t-8*(o+1),u=8*(o+2)-(e+t),c=8*(o+2)-e;if(u=Math.max(0,u),o>=r.length)return console.warn("ran off the end of the buffer before finding EOI_CODE (end on input code)"),257;var f=r[o]&Math.pow(2,8-n)-1,l=f<<=t-i;if(o+1<r.length){var s=r[o+1]>>>u;l+=s<<=Math.max(0,t-c)}if(a>8&&o+2<r.length){var p=8*(o+3)-(e+t);l+=r[o+2]>>>p}return l}(r,a,i);return a+=i,e}function f(r,n){return t[o]=n,e[o]=r,++o-1}function l(r){for(var n=[],o=r;4096!==o;o=e[o])n.push(t[o]);return n}var p=[];u();for(var h,y=new Uint8Array(r),v=c(y);257!==v;){if(256===v){for(u(),v=c(y);256===v;)v=c(y);if(257===v)break;if(v>256)throw new Error("corrupted code at scanline ".concat(v));s(p,l(v)),h=v}else if(v<o){var b=l(v);s(p,b),f(h,b[b.length-1]),h=v}else{var d=l(h);if(!d)throw new Error("Bogus entry. Not in dictionary, ".concat(h," / ").concat(o,", position: ").concat(a));s(p,d),p.push(d[d.length-1]),f(h,d[d.length-1]),h=v}o+1>=Math.pow(2,i)&&(12===i?h=void 0:i++),v=c(y)}return new Uint8Array(p)}var h=function(r){!function(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),e&&u(r,e)}(f,r);var e,t,n,o=c(f);function f(){return i(this,f),o.apply(this,arguments)}return e=f,(t=[{key:"decodeBlock",value:function(r){return p(r).buffer}}])&&a(e.prototype,t),n&&a(e,n),Object.defineProperty(e,"prototype",{writable:!1}),f}(n.Z)}}]);
//# sourceMappingURL=4283.js.map