(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77edc8a5"],{"0dfd":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",{staticClass:"blog-container"},[n("div",{staticClass:"photo-wrap"},t._l(t.photoList,(function(e,o){return n("div",{key:o,staticClass:"photo-container"},[n("img",{key:o,staticClass:"photo",attrs:{src:e},on:{click:function(e){return t.preview(o)}}}),n("v-btn",{staticClass:"v-btn",attrs:{color:"info",id:"copy_text","data-clipboard-text":e},on:{click:function(n){return t.handleCopyFun(e)}}},[t._v("复制")])],1)})),0),n("infinite-loading",{on:{infinite:t.infiniteHandler}},[n("div",{attrs:{slot:"no-more"},slot:"no-more"}),n("div",{attrs:{slot:"no-results"},slot:"no-results"})])],1)],1)},r=[],i=n("2909"),a=n("3f5e"),c=n("b311"),u=n.n(c),s={data:function(){return{photoAlbumName:"",photoAlbumCover:"",photoList:[],current:1,size:10}},methods:{preview:function(t){this.$imagePreview({images:this.photoList,index:t})},infiniteHandler:function(t){var e=this,n={};n.current=this.current,n.size=this.size,Object(a["b"])(n,this.$route.params.albumId).then((function(n){var o;(e.photoAlbumCover=n.data.photoAlbumCover,e.photoAlbumName=n.data.photoAlbumName,n.data.photoList.length)?(e.current++,(o=e.photoList).push.apply(o,Object(i["a"])(n.data.photoList)),t.loaded()):t.complete()}))},handleCopyFun:function(t){var e=this,n=new u.a("#copy_text");n.on("success",(function(t){e.$toast({type:"success",message:"复制成功"}),n.destroy()})),n.on("error",(function(t){e.$toast({type:"error",message:"该浏览器不支持自动复制"}),n.destroy()}))}},computed:{}},l=s,f=(n("eebd"),n("2877")),h=n("6544"),d=n.n(h),p=n("8336"),y=n("b0af"),m=Object(f["a"])(l,o,r,!1,null,"96b1bdc0",null);e["default"]=m.exports;d()(m,{VBtn:p["a"],VCard:y["a"]})},"3f5e":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}));var o=n("b775");function r(t){return Object(o["a"])({url:"/photos/albums",method:"get",params:t})}function i(t,e){return Object(o["a"])({url:"/albums/"+e+"/photos",method:"get",params:t})}},"49a8":function(t,e,n){},b311:function(t,e,n){
/*!
 * clipboard.js v2.0.8
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function(e,n){t.exports=n()})(0,(function(){return function(){var t={134:function(t,e,n){"use strict";n.d(e,{default:function(){return O}});var o=n(279),r=n.n(o),i=n(370),a=n.n(i),c=n(817),u=n.n(c);function s(t){return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function h(t,e,n){return e&&f(t.prototype,e),n&&f(t,n),t}var d=function(){function t(e){l(this,t),this.resolveOptions(e),this.initSelection()}return h(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"createFakeElement",value:function(){var t="rtl"===document.documentElement.getAttribute("dir");this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var e=window.pageYOffset||document.documentElement.scrollTop;return this.fakeElem.style.top="".concat(e,"px"),this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.fakeElem}},{key:"selectFake",value:function(){var t=this,e=this.createFakeElement();this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.container.appendChild(e),this.selectedText=u()(e),this.copyText(),this.removeFake()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=u()(this.target),this.copyText()}},{key:"copyText",value:function(){var t;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==s(t)||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}(),p=d;function y(t){return y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function m(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function b(t,e,n){return e&&v(t.prototype,e),n&&v(t,n),t}function g(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&k(t,e)}function k(t,e){return k=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},k(t,e)}function E(t){var e=S();return function(){var n,o=T(t);if(e){var r=T(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return w(this,n)}}function w(t,e){return!e||"object"!==y(e)&&"function"!==typeof e?x(t):e}function x(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function S(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},T(t)}function A(t,e){var n="data-clipboard-".concat(t);if(e.hasAttribute(n))return e.getAttribute(n)}var C=function(t){g(n,t);var e=E(n);function n(t,o){var r;return m(this,n),r=e.call(this),r.resolveOptions(o),r.listenClick(t),r}return b(n,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"===typeof t.action?t.action:this.defaultAction,this.target="function"===typeof t.target?t.target:this.defaultTarget,this.text="function"===typeof t.text?t.text:this.defaultText,this.container="object"===y(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=a()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new p({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return A("action",t)}},{key:"defaultTarget",value:function(t){var e=A("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return A("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"===typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach((function(t){n=n&&!!document.queryCommandSupported(t)})),n}}]),n}(r()),O=C},828:function(t){var e=9;if("undefined"!==typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}function o(t,n){while(t&&t.nodeType!==e){if("function"===typeof t.matches&&t.matches(n))return t;t=t.parentNode}}t.exports=o},438:function(t,e,n){var o=n(828);function r(t,e,n,o,r){var i=a.apply(this,arguments);return t.addEventListener(n,i,r),{destroy:function(){t.removeEventListener(n,i,r)}}}function i(t,e,n,o,i){return"function"===typeof t.addEventListener?r.apply(null,arguments):"function"===typeof n?r.bind(null,document).apply(null,arguments):("string"===typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return r(t,e,n,o,i)})))}function a(t,e,n,r){return function(n){n.delegateTarget=o(n.target,e),n.delegateTarget&&r.call(t,n)}}t.exports=i},879:function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"===typeof t||t instanceof String},e.fn=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},370:function(t,e,n){var o=n(879),r=n(438);function i(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!o.string(e))throw new TypeError("Second argument must be a String");if(!o.fn(n))throw new TypeError("Third argument must be a Function");if(o.node(t))return a(t,e,n);if(o.nodeList(t))return c(t,e,n);if(o.string(t))return u(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function a(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function c(t,e,n){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,n)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,n)}))}}}function u(t,e,n){return r(document.body,t,e,n)}t.exports=i},817:function(t){function e(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(t),o.removeAllRanges(),o.addRange(r),e=o.toString()}return e}t.exports=e},279:function(t){function e(){}e.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var o=this;function r(){o.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;for(o;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,a=o.length;i<a;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=e,t.exports.TinyEmitter=e}},e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}return function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),n(134)}().default}))},eebd:function(t,e,n){"use strict";var o=n("49a8"),r=n.n(o);r.a}}]);