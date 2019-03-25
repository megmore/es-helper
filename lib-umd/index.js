!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t.EsHelper={})}(this,function(t){"use strict";"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function e(t,e){return t(e={exports:{}},e.exports),e.exports}var u=e(function(e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=r=function(t){return n(t)}:e.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},r(t)}e.exports=r});var n,r=e(function(t,e){var n;n=function(){return function(n){var r={};function o(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}return o.m=n,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,n){var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}}(),a=r(n(1)),u=r(n(3)),c=r(n(4));function r(t){return t&&t.__esModule?t:{default:t}}var s=function(t){function r(t,e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return n.resolveOptions(e),n.listenClick(t),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(r,u.default),i(r,[{key:"resolveOptions",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===o(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,c.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new a.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return l("action",t)}},{key:"defaultTarget",value:function(t){var e=l("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return l("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),r}();function l(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}t.exports=s},function(t,e,n){var r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}}(),a=n(2),u=(r=a)&&r.__esModule?r:{default:r};var c=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.resolveOptions(t),this.initSelection()}return i(e,[{key:"resolveOptions",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,u.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,u.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":o(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),e}();t.exports=c},function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(t),r.removeAllRanges(),r.addRange(o),e=r.toString()}return e}},function(t,e){function n(){}n.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function o(){r.off(t,o),e.apply(n,arguments)}return o._=e,this.on(t,o,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,o=n.length;r<o;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var i=0,a=r.length;i<a;i++)r[i].fn!==e&&r[i].fn._!==e&&o.push(r[i]);return o.length?n[t]=o:delete n[t],this}},t.exports=n},function(t,e,n){var r=n(5),o=n(6);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!r.string(e))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(t))return function(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}(t,e,n);if(r.nodeList(t))return function(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}(t,e,n);if(r.string(t))return function(t,e,n){return o(document.body,t,e,n)}(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},function(t,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e,n){var a=n(7);function i(t,e,n,r,o){var i=function(e,n,t,r){return function(t){t.delegateTarget=a(t.target,n),t.delegateTarget&&r.call(e,t)}}.apply(this,arguments);return t.addEventListener(n,i,o),{destroy:function(){t.removeEventListener(n,i,o)}}}t.exports=function(t,e,n,r,o){return"function"==typeof t.addEventListener?i.apply(null,arguments):"function"==typeof n?i.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return i(t,e,n,r,o)}))}},function(t,e){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}}])},t.exports=n()}),a=(n=r)&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n;var o=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t},s=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,l=/^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/,f=/^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/,d=/^[a-z]+$/,p=/^#[0-9a-fA-F]{6}$/,h=/px|vw|rem|em|%|auto|unset$/,y=/mobile/gi,g=/ipad|iphone/gi,v=/android/gi,m=/window|mac|linux/gi,b=/^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*?)\s*$/i;function E(){return y.test(navigator.userAgent)}function S(){return g.test(navigator.userAgent)}function A(){return v.test(navigator.userAgent)}function w(){return m.test(navigator.userAgent)}var k=new(function(){function t(){o(this,t),this.lang=navigator.language,this.type="pc",this.version="",this.OS="Windows",this.init()}return c(t,[{key:"init",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",e=!(1<arguments.length&&void 0!==arguments[1])||arguments[1];if(/Android (\d+(\.\d+)+)/.test(navigator.userAgent)?this.version=navigator.userAgent.match(/Android (\d+(\.\d+)+)/)[1]:/iPhone OS (\d+(_\d+)+)/.test(navigator.userAgent)?this.version=navigator.userAgent.match(/iPhone OS (\d+(_\d+)+)/)[1].replace(/_/g,"."):this.version="",E()?this.type="mobile":this.type="pc",S()?this.OS="IOS":A()?this.OS="Android":w()&&(this.OS="Windows"),t){var n=t.split("-");t=1<n.length?"".concat(n[0],"-").concat(n[1].toUpperCase()):n[0],this.lang=t}else this.lang=navigator.language;if(e){var r=document.documentElement;r.setAttribute("data-client-os",this.OS),r.setAttribute("data-client-type",this.type),r.setAttribute("lang",this.lang),"ar"===this.lang?r.setAttribute("dir","rtl"):r.hasAttribute("dir")&&r.removeAttribute("dir")}}}]),t}());function O(t,e,n,r){return n*(t/=r)*t+e}function x(t,e,n,r){return n*(t/=r)*t*t*t*t+e}function _(t,e,n,r){return n*((t=t/r-1)*t*t*t*t+1)+e}function T(t,e,n,r){return n*(t/=r)*t*t+e}function z(t,e,n,r){return n*((t=t/r-1)*t*t+1)+e}var C=["linear","easeIn","strongEaseIn","strongEaseOut","sineaseIn","sineaseOut"],j={x:{start:"left",size:"width",clientSize:"clientWidth",scrollStart:"scrollLeft",scrollSize:"scrollWidth"},y:{start:"top",size:"height",clientSize:"clientHeight",scrollStart:"scrollTop",scrollSize:"scrollHeight"}};function R(){var d=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"x",p=1<arguments.length?arguments[1]:void 0,t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},e=t.justify,h=void 0===e?0:e,n=t.target,y=void 0===n?0:n,r=t.duration,g=void 0===r?500:r,o=t.transition,v=void 0===o?"sineaseOut":o,i=t.position,m=void 0===i?"center":i;return new Promise(function(n){p&&C.includes(v)||n();var r=j[d],o=0;if("number"!=typeof y&&"start"!==y&&"end"!==y){var t=y.getBoundingClientRect(),e="start"===m?0:"end"===m?p[r.clientSize]-t[r.size]:(p[r.clientSize]-t[r.size])/2;o=t[r.start]-e+h}else o=("start"===y?-p[r.scrollStart]:"end"===y?p[r.scrollSize]-p[r.scrollStart]-p[r.clientSize]:y)+h;0===o&&n();var i,a,u=p[r.scrollSize]-p[r.clientSize],c=p[r.scrollStart],s="linear"===v?T:"easeIn"===v?O:"strongEaseIn"===v?x:"strongEaseOut"===v?_:"sineaseIn"===v?T:"sineaseOut"===v?z:void 0;if(0<o){var l=u-c;o=l<o?l:o,a=function(t){i||(i=t);var e=s(t-i,0,o,g);e=o<e?o:e,p[r.scrollStart]=c+e,e<o?requestAnimationFrame(a):n()}}else{var f=-p[r.scrollStart];o=o<f?f:o,a=function(t){i||(i=t);var e=s(t-i,0,o,g);e=e<o?o:e,p[r.scrollStart]=c+e,o<e?requestAnimationFrame(a):n()}}requestAnimationFrame(a)})}var L=/([:\-_]+(.))/g,I=/^moz([A-Z])/;function P(t){return t.replace(L,function(t,e,n,r){return r?n.toUpperCase():n}).replace(I,"Moz$1")}function M(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:window.location.href,e=decodeURI(t.replace(/\+/g,"%20")),n={},r=e.split("?");return r.length<=1||(r=r[1].split("&")).forEach(function(t){var e=t.split("=");n[e[0]]=e[1]}),n}t.arrayClear=function(t){t instanceof Array&&t.splice(0,t.length)},t.arrayUnique=function(t){var e=[],n=[],r=[];return t.forEach(function(t){isNaN(t)?n.push(t):r.push(t)}),(t=r.sort(function(t,e){return t-e}).concat(n.sort())).forEach(function(t){e.includes(t)||e.push(t)}),e},t.arrayUniqueByField=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"id",n=[];return t.forEach(function(t){n.map(function(t){return t[e]}).includes(t[e])||n.push(t)}),n},t.deepCopy=function e(t){var n;if(t instanceof Array)n=[],t.forEach(function(t){"object"===u(t)?n.push(e(t)):n.push(t)});else{if(!(t instanceof Object))return t;for(var r in n={},t)"object"===u(t[r])?n[r]=e(t[r]):n[r]=t[r]}return n},t.deepEqual=function t(e,n){var r=!0;if(e===n)return!0;if(!function(t,e){return[t,e].every(function(t){return null!==t})?u(t)===u(e):[t,e].every(function(t){return null===t})}(e,n))return!1;if(Array.isArray(e)&&Array.isArray(n)&&e.length!==n.length)return!1;for(var o in e){var i=e[o],a=n[o];if(u(i)!==u(a))return!1;if(!1===(r="object"===u(i)?t(i,a):i===a))return!1}return r},t.findNode=function t(){var e,n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},r=n.data,o=void 0===r?[]:r,i=n.field,a=void 0===i?"id":i,u=n.key,c=void 0===u?"":u,s=n.childField,l=void 0===s?"children":s,f={};f=o instanceof Array?o:o[l];for(var d=0;d<=f.length;d++){var p=f[d];if(p){if(p[a]===c)return p;if(p[l]&&p[l].length&&(e=t({data:p,key:c,childField:l,field:a}))&&e[a]===c)return e}}return e},t.clip2Board=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",e="clipDom".concat((new Date).getTime()),r=document.createElement("button"),o=document.body;r.style.display="hidden",r.style.position="fixed",r.setAttribute("id",e),r.setAttribute("data-clipboard-text",t),o.appendChild(r);var i=new a("#".concat(e));return new Promise(function(e,n){i.on("success",function(t){t.clearSelection(),o.removeChild(r),e(t.text)}),i.on("error",function(t){o.removeChild(r),n(t.text)}),r.click()})},t.Client=k,t.scrollToX=function(t,e){return R("x",t,e)},t.scrollToY=function(t,e){return R("y",t,e)},t.imageLoaded=function(r){return new Promise(function(t,e){var n=new Image;n.onload=function(){t({width:n.width,height:n.height}),n=null},n.onerror=function(){e("load image fail")},n.src=r})},t.camelCase=P,t.strStyle=function(e){var n="";return Object.keys(e).forEach(function(t){e.hasOwnProperty(t)&&(n+="".concat(t,":").concat(e[t],";"))}),n},t.getStyle=function(e,n){if(!e||!n)return"";"float"===(n=P(n))&&(n="cssFloat");try{var t=document.defaultView.getComputedStyle(e,"");return e.style[n]||t?t[n]:""}catch(t){return e.style[n]}},t.easeIn=O,t.linear=function(t,e,n,r){return n*t/r+e},t.sineaseIn=T,t.sineaseOut=z,t.strongEaseIn=x,t.strongEaseOut=_,t.getUrlParam=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:window.location.href;"string"!=typeof t&&console.error("要获取的参数名必须为字符串");var n=decodeURI(e.replace(/\+/g,"%20")),r=n.substring(n.lastIndexOf("?")+1),o=new RegExp("(^|&)".concat(t,"=([^&]*)(&|$)"),"i"),i=r.match(o);return null!==i?decodeURI(i[2]):""},t.getUrlParams=M,t.appendUrlParams=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:window.location.href,n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],r=e.split("?")[0],o=M(e),i=Object.assign(o,t),a=Object.keys(i);return n&&(a=a.sort()),a.forEach(function(t){r+="&".concat(t,"=").concat(i[t])}),r=r.replace(/&/,"?")},t.REGEX_UA_OS_WINDOWS=m,t.REGEX_UA_OS_ANDROID=v,t.REGEX_UA_OS_IOS=g,t.REGEX_UA_CLIENT_MOBILE=y,t.REGEX_STYLE_UNIT=h,t.REGEX_LOWER_CASE=d,t.REGEX_BASE64=b,t.REGEX_EMAIL=s,t.REGEX_HEX_COLOR=p,t.REGEX_UPPER_CASE=f,t.REGEX_URL=l,t.isOSAndroid=A,t.isOSIos=S,t.isBase64=function(t){return"string"==typeof t&&b.test(t)},t.isEmail=function(t){return"string"==typeof t&&s.test(t)},t.isEmptyObject=function(t){return"object"===u(t)&&0===Object.keys(t).length},t.isHexColor=function(t){return"string"==typeof t&&p.test(t)},t.isLowerCase=function(t){return"string"==typeof t&&d.test(t)},t.isMobile=E,t.isOSWindows=w,t.isStyleUnit=function(t){return"string"==typeof t&&h.test(t)},t.isTrimEmpty=function(t){return"string"==typeof t&&""===t.trim()},t.isUpperCase=function(t){return"string"==typeof t&&f.test(t)},t.isURL=function(t){return"string"==typeof t&&l.test(t)},Object.defineProperty(t,"__esModule",{value:!0})});
