!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=13)}([function(t,e,n){"use strict";function r(t,e,n,r,i,a,u,s){if(o(e),!t){var c;if(void 0===e)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,i,a,u,s],f=0;c=new Error(e.replace(/%s/g,function(){return l[f++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}}var o=function(t){};t.exports=r},function(t,e,n){"use strict";function r(t){return void 0!==t.ref}function o(t){return void 0!==t.key}var i=n(2),a=n(11),u=(n(4),n(9),Object.prototype.hasOwnProperty),s=n(12),c={key:!0,ref:!0,__self:!0,__source:!0},l=function(t,e,n,r,o,i,a){var u={$$typeof:s,type:t,key:e,ref:n,props:a,_owner:i};return u};l.createElement=function(t,e,n){var i,s={},f=null,p=null;if(null!=e){r(e)&&(p=e.ref),o(e)&&(f=""+e.key),void 0===e.__self?null:e.__self,void 0===e.__source?null:e.__source;for(i in e)u.call(e,i)&&!c.hasOwnProperty(i)&&(s[i]=e[i])}var d=arguments.length-2;if(1===d)s.children=n;else if(d>1){for(var y=Array(d),h=0;h<d;h++)y[h]=arguments[h+2];s.children=y}if(t&&t.defaultProps){var v=t.defaultProps;for(i in v)void 0===s[i]&&(s[i]=v[i])}return l(t,f,p,0,0,a.current,s)},l.createFactory=function(t){var e=l.createElement.bind(null,t);return e.type=t,e},l.cloneAndReplaceKey=function(t,e){return l(t.type,e,t.ref,t._self,t._source,t._owner,t.props)},l.cloneElement=function(t,e,n){var s,f=i({},t.props),p=t.key,d=t.ref,y=(t._self,t._source,t._owner);if(null!=e){r(e)&&(d=e.ref,y=a.current),o(e)&&(p=""+e.key);var h;t.type&&t.type.defaultProps&&(h=t.type.defaultProps);for(s in e)u.call(e,s)&&!c.hasOwnProperty(s)&&(void 0===e[s]&&void 0!==h?f[s]=h[s]:f[s]=e[s])}var v=arguments.length-2;if(1===v)f.children=n;else if(v>1){for(var m=Array(v),b=0;b<v;b++)m[b]=arguments[b+2];f.children=m}return l(t.type,p,d,0,0,y,f)},l.isValidElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===s},t.exports=l},function(t,e,n){"use strict";function r(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,u,s=r(t),c=1;c<arguments.length;c++){n=Object(arguments[c]);for(var l in n)i.call(n,l)&&(s[l]=n[l]);if(o){u=o(n);for(var f=0;f<u.length;f++)a.call(n,u[f])&&(s[u[f]]=n[u[f]])}}return s}},function(t,e,n){"use strict";function r(t){for(var e=arguments.length-1,n="Minified React error #"+t+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant="+t,r=0;r<e;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);n+=" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";var o=new Error(n);throw o.name="Invariant Violation",o.framesToPop=1,o}t.exports=r},function(t,e,n){"use strict";var r=n(5),o=r;t.exports=o},function(t,e,n){"use strict";function r(t){return function(){return t}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(t){return t},t.exports=o},function(t,e,n){"use strict";t.exports=n(15)},function(t,e,n){"use strict";function r(t,e,n){this.props=t,this.context=e,this.refs=c,this.updater=n||s}function o(t,e,n){this.props=t,this.context=e,this.refs=c,this.updater=n||s}function i(){}var a=n(3),u=n(2),s=n(8),c=(n(9),n(10));n(0),n(16);r.prototype.isReactComponent={},r.prototype.setState=function(t,e){"object"!=typeof t&&"function"!=typeof t&&null!=t&&a("85"),this.updater.enqueueSetState(this,t),e&&this.updater.enqueueCallback(this,e,"setState")},r.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this),t&&this.updater.enqueueCallback(this,t,"forceUpdate")};i.prototype=r.prototype,o.prototype=new i,o.prototype.constructor=o,u(o.prototype,r.prototype),o.prototype.isPureReactComponent=!0,t.exports={Component:r,PureComponent:o}},function(t,e,n){"use strict";var r=(n(4),{isMounted:function(t){return!1},enqueueCallback:function(t,e){},enqueueForceUpdate:function(t){},enqueueReplaceState:function(t,e){},enqueueSetState:function(t,e){}});t.exports=r},function(t,e,n){"use strict";var r=!1;t.exports=r},function(t,e,n){"use strict";var r={};t.exports=r},function(t,e,n){"use strict";var r={current:null};t.exports=r},function(t,e,n){"use strict";var r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;t.exports=r},function(t,e,n){"use strict";(function(t){function e(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(r)},s=n(6),c=e(s),l=n(32),f=e(l),p=function(t){function e(){r(this,e);var t=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.state={inputVal:""},t.btnPersistState=t.btnPersistState.bind(t),t.handleChange=t.handleChange.bind(t),t}return i(e,t),a(e,[{key:"renderWidget",value:function(){var t={container:{font:"12px Roboto, sans-serif",color:"#fff"},button:{"margin-right":"10px"},logPanel:{"background-color":"#000",padding:"10px",color:"#ffffff",height:"100px"},inputBox:{padding:"3px","margin-right":"10px"},controls:{"margin-bottom":"10px"}},n=u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"getDashboardAPI",this).call(this).state.get("message"),r=n&&null!=n&&""!==n?"Persisted message found: "+n:"No persisted state found";return c.default.createElement("div",{style:t.container},c.default.createElement("div",{style:t.controls},c.default.createElement("strong",null,"Message: "),c.default.createElement("input",{style:t.inputBox,type:"text",id:"txtMessage",value:this.state.inputVal,onChange:this.handleChange}),c.default.createElement("button",{style:t.button,onClick:this.btnPersistState},"Persist State")),c.default.createElement("div",{style:t.logPanel,id:"divConsole"},r))}},{key:"btnPersistState",value:function(){var t=document.getElementById("txtMessage").value;u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"getDashboardAPI",this).call(this).state.set("message",t),alert("State persisted successfully!")}},{key:"handleChange",value:function(t){this.setState({inputVal:t.target.value}),this.input={},this.input.value=t.target.value}}]),e}(f.default);t.dashboard.registerWidget("WidgetState",p)}).call(e,n(14))},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var r=n(2),o=n(7),i=n(17),a=n(22),u=n(1),s=n(23),c=n(28),l=n(29),f=n(31),p=u.createElement,d=u.createFactory,y=u.cloneElement,h=r,v=function(t){return t},m={Children:{map:i.map,forEach:i.forEach,count:i.count,toArray:i.toArray,only:f},Component:o.Component,PureComponent:o.PureComponent,createElement:p,cloneElement:y,isValidElement:u.isValidElement,PropTypes:s,createClass:l,createFactory:d,createMixin:v,DOM:a,version:c,__spread:h};t.exports=m},function(t,e,n){"use strict";var r=function(){};t.exports=r},function(t,e,n){"use strict";function r(t){return(""+t).replace(x,"$&/")}function o(t,e){this.func=t,this.context=e,this.count=0}function i(t,e,n){var r=t.func,o=t.context;r.call(o,e,t.count++)}function a(t,e,n){if(null==t)return t;var r=o.getPooled(e,n);m(t,i,r),o.release(r)}function u(t,e,n,r){this.result=t,this.keyPrefix=e,this.func=n,this.context=r,this.count=0}function s(t,e,n){var o=t.result,i=t.keyPrefix,a=t.func,u=t.context,s=a.call(u,e,t.count++);Array.isArray(s)?c(s,o,n,v.thatReturnsArgument):null!=s&&(h.isValidElement(s)&&(s=h.cloneAndReplaceKey(s,i+(!s.key||e&&e.key===s.key?"":r(s.key)+"/")+n)),o.push(s))}function c(t,e,n,o,i){var a="";null!=n&&(a=r(n)+"/");var c=u.getPooled(e,a,o,i);m(t,s,c),u.release(c)}function l(t,e,n){if(null==t)return t;var r=[];return c(t,r,null,e,n),r}function f(t,e,n){return null}function p(t,e){return m(t,f,null)}function d(t){var e=[];return c(t,e,null,v.thatReturnsArgument),e}var y=n(18),h=n(1),v=n(5),m=n(19),b=y.twoArgumentPooler,g=y.fourArgumentPooler,x=/\/+/g;o.prototype.destructor=function(){this.func=null,this.context=null,this.count=0},y.addPoolingTo(o,b),u.prototype.destructor=function(){this.result=null,this.keyPrefix=null,this.func=null,this.context=null,this.count=0},y.addPoolingTo(u,g);var E={forEach:a,map:l,mapIntoWithKeyPrefixInternal:c,count:p,toArray:d};t.exports=E},function(t,e,n){"use strict";var r=n(3),o=(n(0),function(t){var e=this;if(e.instancePool.length){var n=e.instancePool.pop();return e.call(n,t),n}return new e(t)}),i=function(t,e){var n=this;if(n.instancePool.length){var r=n.instancePool.pop();return n.call(r,t,e),r}return new n(t,e)},a=function(t,e,n){var r=this;if(r.instancePool.length){var o=r.instancePool.pop();return r.call(o,t,e,n),o}return new r(t,e,n)},u=function(t,e,n,r){var o=this;if(o.instancePool.length){var i=o.instancePool.pop();return o.call(i,t,e,n,r),i}return new o(t,e,n,r)},s=function(t){var e=this;t instanceof e||r("25"),t.destructor(),e.instancePool.length<e.poolSize&&e.instancePool.push(t)},c=o,l=function(t,e){var n=t;return n.instancePool=[],n.getPooled=e||c,n.poolSize||(n.poolSize=10),n.release=s,n},f={addPoolingTo:l,oneArgumentPooler:o,twoArgumentPooler:i,threeArgumentPooler:a,fourArgumentPooler:u};t.exports=f},function(t,e,n){"use strict";function r(t,e){return t&&"object"==typeof t&&null!=t.key?c.escape(t.key):e.toString(36)}function o(t,e,n,i){var p=typeof t;if("undefined"!==p&&"boolean"!==p||(t=null),null===t||"string"===p||"number"===p||"object"===p&&t.$$typeof===u)return n(i,t,""===e?l+r(t,0):e),1;var d,y,h=0,v=""===e?l:e+f;if(Array.isArray(t))for(var m=0;m<t.length;m++)d=t[m],y=v+r(d,m),h+=o(d,y,n,i);else{var b=s(t);if(b){var g,x=b.call(t);if(b!==t.entries)for(var E=0;!(g=x.next()).done;)d=g.value,y=v+r(d,E++),h+=o(d,y,n,i);else for(;!(g=x.next()).done;){var P=g.value;P&&(d=P[1],y=v+c.escape(P[0])+f+r(d,0),h+=o(d,y,n,i))}}else if("object"===p){var _="",w=String(t);a("31","[object Object]"===w?"object with keys {"+Object.keys(t).join(", ")+"}":w,_)}}return h}function i(t,e,n){return null==t?0:o(t,"",e,n)}var a=n(3),u=(n(11),n(12)),s=n(20),c=(n(0),n(21)),l=(n(4),"."),f=":";t.exports=i},function(t,e,n){"use strict";function r(t){var e=t&&(o&&t[o]||t[i]);if("function"==typeof e)return e}var o="function"==typeof Symbol&&Symbol.iterator,i="@@iterator";t.exports=r},function(t,e,n){"use strict";function r(t){var e={"=":"=0",":":"=2"};return"$"+(""+t).replace(/[=:]/g,function(t){return e[t]})}function o(t){var e=/(=0|=2)/g,n={"=0":"=","=2":":"};return(""+("."===t[0]&&"$"===t[1]?t.substring(2):t.substring(1))).replace(e,function(t){return n[t]})}var i={escape:r,unescape:o};t.exports=i},function(t,e,n){"use strict";var r=n(1),o=r.createFactory,i={a:o("a"),abbr:o("abbr"),address:o("address"),area:o("area"),article:o("article"),aside:o("aside"),audio:o("audio"),b:o("b"),base:o("base"),bdi:o("bdi"),bdo:o("bdo"),big:o("big"),blockquote:o("blockquote"),body:o("body"),br:o("br"),button:o("button"),canvas:o("canvas"),caption:o("caption"),cite:o("cite"),code:o("code"),col:o("col"),colgroup:o("colgroup"),data:o("data"),datalist:o("datalist"),dd:o("dd"),del:o("del"),details:o("details"),dfn:o("dfn"),dialog:o("dialog"),div:o("div"),dl:o("dl"),dt:o("dt"),em:o("em"),embed:o("embed"),fieldset:o("fieldset"),figcaption:o("figcaption"),figure:o("figure"),footer:o("footer"),form:o("form"),h1:o("h1"),h2:o("h2"),h3:o("h3"),h4:o("h4"),h5:o("h5"),h6:o("h6"),head:o("head"),header:o("header"),hgroup:o("hgroup"),hr:o("hr"),html:o("html"),i:o("i"),iframe:o("iframe"),img:o("img"),input:o("input"),ins:o("ins"),kbd:o("kbd"),keygen:o("keygen"),label:o("label"),legend:o("legend"),li:o("li"),link:o("link"),main:o("main"),map:o("map"),mark:o("mark"),menu:o("menu"),menuitem:o("menuitem"),meta:o("meta"),meter:o("meter"),nav:o("nav"),noscript:o("noscript"),object:o("object"),ol:o("ol"),optgroup:o("optgroup"),option:o("option"),output:o("output"),p:o("p"),param:o("param"),picture:o("picture"),pre:o("pre"),progress:o("progress"),q:o("q"),rp:o("rp"),rt:o("rt"),ruby:o("ruby"),s:o("s"),samp:o("samp"),script:o("script"),section:o("section"),select:o("select"),small:o("small"),source:o("source"),span:o("span"),strong:o("strong"),style:o("style"),sub:o("sub"),summary:o("summary"),sup:o("sup"),table:o("table"),tbody:o("tbody"),td:o("td"),textarea:o("textarea"),tfoot:o("tfoot"),th:o("th"),thead:o("thead"),time:o("time"),title:o("title"),tr:o("tr"),track:o("track"),u:o("u"),ul:o("ul"),var:o("var"),video:o("video"),wbr:o("wbr"),circle:o("circle"),clipPath:o("clipPath"),defs:o("defs"),ellipse:o("ellipse"),g:o("g"),image:o("image"),line:o("line"),linearGradient:o("linearGradient"),mask:o("mask"),path:o("path"),pattern:o("pattern"),polygon:o("polygon"),polyline:o("polyline"),radialGradient:o("radialGradient"),rect:o("rect"),stop:o("stop"),svg:o("svg"),text:o("text"),tspan:o("tspan")};t.exports=i},function(t,e,n){"use strict";var r=n(1),o=r.isValidElement,i=n(24);t.exports=i(o)},function(t,e,n){"use strict";var r=n(25);t.exports=function(t){return r(t,!1)}},function(t,e,n){"use strict";var r=n(5),o=n(0),i=n(4),a=n(2),u=n(26),s=n(27);t.exports=function(t,e){function n(t){var e=t&&(j&&t[j]||t[A]);if("function"==typeof e)return e}function c(t,e){return t===e?0!==t||1/t==1/e:t!==t&&e!==e}function l(t){this.message=t,this.stack=""}function f(t){function n(n,r,i,a,s,c,f){if(a=a||N,c=c||i,f!==u)if(e)o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else;return null==r[i]?n?new l(null===r[i]?"The "+s+" `"+c+"` is marked as required in `"+a+"`, but its value is `null`.":"The "+s+" `"+c+"` is marked as required in `"+a+"`, but its value is `undefined`."):null:t(r,i,a,s,c)}var r=n.bind(null,!1);return r.isRequired=n.bind(null,!0),r}function p(t){function e(e,n,r,o,i,a){var u=e[n];if(P(u)!==t)return new l("Invalid "+o+" `"+i+"` of type `"+_(u)+"` supplied to `"+r+"`, expected `"+t+"`.");return null}return f(e)}function d(t){function e(e,n,r,o,i){if("function"!=typeof t)return new l("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var a=e[n];if(!Array.isArray(a)){return new l("Invalid "+o+" `"+i+"` of type `"+P(a)+"` supplied to `"+r+"`, expected an array.")}for(var s=0;s<a.length;s++){var c=t(a,s,r,o,i+"["+s+"]",u);if(c instanceof Error)return c}return null}return f(e)}function y(t){function e(e,n,r,o,i){if(!(e[n]instanceof t)){var a=t.name||N;return new l("Invalid "+o+" `"+i+"` of type `"+O(e[n])+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}return null}return f(e)}function h(t){function e(e,n,r,o,i){for(var a=e[n],u=0;u<t.length;u++)if(c(a,t[u]))return null;return new l("Invalid "+o+" `"+i+"` of value `"+a+"` supplied to `"+r+"`, expected one of "+JSON.stringify(t)+".")}return Array.isArray(t)?f(e):r.thatReturnsNull}function v(t){function e(e,n,r,o,i){if("function"!=typeof t)return new l("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var a=e[n],s=P(a);if("object"!==s)return new l("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+r+"`, expected an object.");for(var c in a)if(a.hasOwnProperty(c)){var f=t(a,c,r,o,i+"."+c,u);if(f instanceof Error)return f}return null}return f(e)}function m(t){function e(e,n,r,o,i){for(var a=0;a<t.length;a++){if(null==(0,t[a])(e,n,r,o,i,u))return null}return new l("Invalid "+o+" `"+i+"` supplied to `"+r+"`.")}if(!Array.isArray(t))return r.thatReturnsNull;for(var n=0;n<t.length;n++){var o=t[n];if("function"!=typeof o)return i(!1,"Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",w(o),n),r.thatReturnsNull}return f(e)}function b(t){function e(e,n,r,o,i){var a=e[n],s=P(a);if("object"!==s)return new l("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");for(var c in t){var f=t[c];if(f){var p=f(a,c,r,o,i+"."+c,u);if(p)return p}}return null}return f(e)}function g(t){function e(e,n,r,o,i){var s=e[n],c=P(s);if("object"!==c)return new l("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");var f=a({},e[n],t);for(var p in f){var d=t[p];if(!d)return new l("Invalid "+o+" `"+i+"` key `"+p+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(e[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(t),null,"  "));var y=d(s,p,r,o,i+"."+p,u);if(y)return y}return null}return f(e)}function x(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(x);if(null===e||t(e))return!0;var r=n(e);if(!r)return!1;var o,i=r.call(e);if(r!==e.entries){for(;!(o=i.next()).done;)if(!x(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!x(a[1]))return!1}return!0;default:return!1}}function E(t,e){return"symbol"===t||("Symbol"===e["@@toStringTag"]||"function"==typeof Symbol&&e instanceof Symbol)}function P(t){var e=typeof t;return Array.isArray(t)?"array":t instanceof RegExp?"object":E(e,t)?"symbol":e}function _(t){if(void 0===t||null===t)return""+t;var e=P(t);if("object"===e){if(t instanceof Date)return"date";if(t instanceof RegExp)return"regexp"}return e}function w(t){var e=_(t);switch(e){case"array":case"object":return"an "+e;case"boolean":case"date":case"regexp":return"a "+e;default:return e}}function O(t){return t.constructor&&t.constructor.name?t.constructor.name:N}var j="function"==typeof Symbol&&Symbol.iterator,A="@@iterator",N="<<anonymous>>",k={array:p("array"),bool:p("boolean"),func:p("function"),number:p("number"),object:p("object"),string:p("string"),symbol:p("symbol"),any:function(){return f(r.thatReturnsNull)}(),arrayOf:d,element:function(){function e(e,n,r,o,i){var a=e[n];if(!t(a)){return new l("Invalid "+o+" `"+i+"` of type `"+P(a)+"` supplied to `"+r+"`, expected a single ReactElement.")}return null}return f(e)}(),instanceOf:y,node:function(){function t(t,e,n,r,o){return x(t[e])?null:new l("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")}return f(t)}(),objectOf:v,oneOf:h,oneOfType:m,shape:b,exact:g};return l.prototype=Error.prototype,k.checkPropTypes=s,k.PropTypes=k,k}},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e,n){"use strict";function r(t,e,n,r,o){}t.exports=r},function(t,e,n){"use strict";t.exports="15.6.2"},function(t,e,n){"use strict";var r=n(7),o=r.Component,i=n(1),a=i.isValidElement,u=n(8),s=n(30);t.exports=s(o,a,u)},function(t,e,n){"use strict";function r(t){return t}function o(t,e,n){function o(t,e){var n=b.hasOwnProperty(e)?b[e]:null;P.hasOwnProperty(e)&&u("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",e),t&&u("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",e)}function c(t,n){if(n){u("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),u(!e(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var r=t.prototype,i=r.__reactAutoBindPairs;n.hasOwnProperty(s)&&g.mixins(t,n.mixins);for(var a in n)if(n.hasOwnProperty(a)&&a!==s){var c=n[a],l=r.hasOwnProperty(a);if(o(l,a),g.hasOwnProperty(a))g[a](t,c);else{var f=b.hasOwnProperty(a),y="function"==typeof c,h=y&&!f&&!l&&!1!==n.autobind;if(h)i.push(a,c),r[a]=c;else if(l){var v=b[a];u(f&&("DEFINE_MANY_MERGED"===v||"DEFINE_MANY"===v),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",v,a),"DEFINE_MANY_MERGED"===v?r[a]=p(r[a],c):"DEFINE_MANY"===v&&(r[a]=d(r[a],c))}else r[a]=c}}}else;}function l(t,e){if(e)for(var n in e){var r=e[n];if(e.hasOwnProperty(n)){var o=n in g;u(!o,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var i=n in t;u(!i,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),t[n]=r}}}function f(t,e){u(t&&e&&"object"==typeof t&&"object"==typeof e,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in e)e.hasOwnProperty(n)&&(u(void 0===t[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),t[n]=e[n]);return t}function p(t,e){return function(){var n=t.apply(this,arguments),r=e.apply(this,arguments);if(null==n)return r;if(null==r)return n;var o={};return f(o,n),f(o,r),o}}function d(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function y(t,e){var n=e.bind(t);return n}function h(t){for(var e=t.__reactAutoBindPairs,n=0;n<e.length;n+=2){var r=e[n],o=e[n+1];t[r]=y(t,o)}}function v(t){var e=r(function(t,r,o){this.__reactAutoBindPairs.length&&h(this),this.props=t,this.context=r,this.refs=a,this.updater=o||n,this.state=null;var i=this.getInitialState?this.getInitialState():null;u("object"==typeof i&&!Array.isArray(i),"%s.getInitialState(): must return an object or null",e.displayName||"ReactCompositeComponent"),this.state=i});e.prototype=new _,e.prototype.constructor=e,e.prototype.__reactAutoBindPairs=[],m.forEach(c.bind(null,e)),c(e,x),c(e,t),c(e,E),e.getDefaultProps&&(e.defaultProps=e.getDefaultProps()),u(e.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var o in b)e.prototype[o]||(e.prototype[o]=null);return e}var m=[],b={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},g={displayName:function(t,e){t.displayName=e},mixins:function(t,e){if(e)for(var n=0;n<e.length;n++)c(t,e[n])},childContextTypes:function(t,e){t.childContextTypes=i({},t.childContextTypes,e)},contextTypes:function(t,e){t.contextTypes=i({},t.contextTypes,e)},getDefaultProps:function(t,e){t.getDefaultProps?t.getDefaultProps=p(t.getDefaultProps,e):t.getDefaultProps=e},propTypes:function(t,e){t.propTypes=i({},t.propTypes,e)},statics:function(t,e){l(t,e)},autobind:function(){}},x={componentDidMount:function(){this.__isMounted=!0}},E={componentWillUnmount:function(){this.__isMounted=!1}},P={replaceState:function(t,e){this.updater.enqueueReplaceState(this,t,e)},isMounted:function(){return!!this.__isMounted}},_=function(){};return i(_.prototype,t.prototype,P),v}var i=n(2),a=n(10),u=n(0),s="mixins";t.exports=o},function(t,e,n){"use strict";function r(t){return i.isValidElement(t)||o("143"),t}var o=n(3),i=n(1);n(0);t.exports=r},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=n(6),s=function(t){return t&&t.__esModule?t:{default:t}}(u),c=function(t){function e(){r(this,e);var t=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.getDashboardAPI=t.getDashboardAPI.bind(t),t}return i(e,t),a(e,[{key:"render",value:function(){var t={padding:"30px 15px 15px 15px"};return s.default.createElement("div",{style:t},this.renderWidget())}},{key:"getDashboardAPI",value:function(){function t(){return""===window.location.hash||"#"===window.location.hash?{}:JSON.parse(window.location.hash.substr(1))}function e(t){window.location.hash=JSON.stringify(t)}function n(){var e=t();return e.hasOwnProperty(o.props.id)?e[o.props.id]:{}}function r(n){var r=t();r[o.props.id]=n,e(r)}var o=this;return{state:{get:function(t){var e=n();return e.hasOwnProperty(t)?e[t]:null},set:function(t,e){var o=n();o[t]=e,r(o)}}}}}]),e}(u.Component);e.default=c}]);