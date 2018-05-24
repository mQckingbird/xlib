/* Interfaz de Usuario - Kit CopyLee */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Popper=t()}(this,function(){"use strict";function e(e){var t={};return e&&"[object Function]"===t.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var n=window.getComputedStyle(e,null);return t?n[t]:n}function n(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function o(e){if(!e||-1!==["HTML","BODY","#document"].indexOf(e.nodeName))return window.document.body;var r=t(e),i=r.overflow,f=r.overflowX,a=r.overflowY;return/(auto|scroll)/.test(i+a+f)?e:o(n(e))}function r(e){var t=e.nodeName;return"BODY"!==t&&("HTML"===t||e.firstElementChild.offsetParent===e)}function i(e){return null!==e.parentNode?i(e.parentNode):e}function f(e){var t=e&&e.offsetParent,n=t&&t.nodeName;return n&&"BODY"!==n&&"HTML"!==n?t:window.document.documentElement}function a(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return window.document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,o=n?e:t,s=n?t:e,p=document.createRange();p.setStart(o,0),p.setEnd(s,0);var u=p.commonAncestorContainer;if(e!==u&&t!==u||o.contains(s))return r(u)?u:f(u);var d=i(e);return d.host?a(d.host,t):a(e,i(t).host)}function s(e){var t="top"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",n=e.nodeName;if("BODY"===n||"HTML"===n){var o=window.document.documentElement;return(window.document.scrollingElement||o)[t]}return e[t]}function p(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=s(t,"top"),r=s(t,"left"),i=n?-1:1;return e.top+=o*i,e.bottom+=o*i,e.left+=r*i,e.right+=r*i,e}function u(e,t){var n="x"===t?"Left":"Top",o="Left"===n?"Right":"Bottom";return+e["border"+n+"Width"].split("px")[0]+ +e["border"+o+"Width"].split("px")[0]}function d(e,t,n,o){return Math.max(t["offset"+e],n["client"+e],n["offset"+e],Z()?n["offset"+e]+o["margin"+("Height"===e?"Top":"Left")]+o["margin"+("Height"===e?"Bottom":"Right")]:0)}function l(){var e=window.document.body,t=window.document.documentElement,n=Z()&&window.getComputedStyle(t);return{height:d("Height",e,t,n),width:d("Width",e,t,n)}}function c(e){return ne({},e,{right:e.left+e.width,bottom:e.top+e.height})}function h(e){var n={};if(Z())try{n=e.getBoundingClientRect();var o=s(e,"top"),r=s(e,"left");n.top+=o,n.left+=r,n.bottom+=o,n.right+=r}catch(e){}else n=e.getBoundingClientRect();var i={left:n.left,top:n.top,width:n.right-n.left,height:n.bottom-n.top},f="HTML"===e.nodeName?l():{},a=f.width||e.clientWidth||i.right-i.left,p=f.height||e.clientHeight||i.bottom-i.top,d=e.offsetWidth-a,h=e.offsetHeight-p;if(d||h){var m=t(e);d-=u(m,"x"),h-=u(m,"y"),i.width-=d,i.height-=h}return c(i)}function m(e,n){var r=Z(),i="HTML"===n.nodeName,f=h(e),a=h(n),s=o(e),u=t(n),d=+u.borderTopWidth.split("px")[0],l=+u.borderLeftWidth.split("px")[0],m=c({top:f.top-a.top-d,left:f.left-a.left-l,width:f.width,height:f.height});if(m.marginTop=0,m.marginLeft=0,!r&&i){var g=+u.marginTop.split("px")[0],v=+u.marginLeft.split("px")[0];m.top-=d-g,m.bottom-=d-g,m.left-=l-v,m.right-=l-v,m.marginTop=g,m.marginLeft=v}return(r?n.contains(s):n===s&&"BODY"!==s.nodeName)&&(m=p(m,n)),m}function g(e){var t=window.document.documentElement,n=m(e,t),o=Math.max(t.clientWidth,window.innerWidth||0),r=Math.max(t.clientHeight,window.innerHeight||0),i=s(t),f=s(t,"left");return c({top:i-n.top+n.marginTop,left:f-n.left+n.marginLeft,width:o,height:r})}function v(e){var o=e.nodeName;return"BODY"!==o&&"HTML"!==o&&("fixed"===t(e,"position")||v(n(e)))}function b(e,t,r,i){var f={top:0,left:0},s=a(e,t);if("viewport"===i)f=g(s);else{var p=void 0;"scrollParent"===i?"BODY"===(p=o(n(e))).nodeName&&(p=window.document.documentElement):p="window"===i?window.document.documentElement:i;var u=m(p,s);if("HTML"!==p.nodeName||v(s))f=u;else{var d=l(),c=d.height,h=d.width;f.top+=u.top-u.marginTop,f.bottom=c+u.top,f.left+=u.left-u.marginLeft,f.right=h+u.left}}return f.left+=r,f.top+=r,f.right-=r,f.bottom-=r,f}function w(e){return e.width*e.height}function y(e,t,n,o,r){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var f=b(n,o,i,r),a={top:{width:f.width,height:t.top-f.top},right:{width:f.right-t.right,height:f.height},bottom:{width:f.width,height:f.bottom-t.bottom},left:{width:t.left-f.left,height:f.height}},s=Object.keys(a).map(function(e){return ne({key:e},a[e],{area:w(a[e])})}).sort(function(e,t){return t.area-e.area}),p=s.filter(function(e){var t=e.width,o=e.height;return t>=n.clientWidth&&o>=n.clientHeight}),u=p.length>0?p[0].key:s[0].key,d=e.split("-")[1];return u+(d?"-"+d:"")}function O(e,t,n){return m(n,a(t,n))}function E(e){var t=window.getComputedStyle(e),n=parseFloat(t.marginTop)+parseFloat(t.marginBottom),o=parseFloat(t.marginLeft)+parseFloat(t.marginRight);return{width:e.offsetWidth+o,height:e.offsetHeight+n}}function x(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function L(e,t,n){n=n.split("-")[0];var o=E(e),r={width:o.width,height:o.height},i=-1!==["right","left"].indexOf(n),f=i?"top":"left",a=i?"left":"top",s=i?"height":"width",p=i?"width":"height";return r[f]=t[f]+t[s]/2-o[s]/2,r[a]=n===a?t[a]-o[p]:t[x(a)],r}function T(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function M(e,t,n){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===n});var o=T(e,function(e){return e[t]===n});return e.indexOf(o)}function C(t,n,o){return(void 0===o?t:t.slice(0,M(t,"name",o))).forEach(function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var o=t.function||t.fn;t.enabled&&e(o)&&(n.offsets.popper=c(n.offsets.popper),n.offsets.reference=c(n.offsets.reference),n=o(n,t))}),n}function N(){if(!this.state.isDestroyed){var e={instance:this,styles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=O(this.state,this.popper,this.reference),e.placement=y(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.offsets.popper=L(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position="absolute",e=C(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function k(e,t){return e.some(function(e){var n=e.name;return e.enabled&&n===t})}function W(e){for(var t=[!1,"ms","webkit","moz","o"],n=e.charAt(0).toUpperCase()+e.slice(1),o=0;o<t.length-1;o++){var r=t[o],i=r?""+r+n:e;if(void 0!==window.document.body.style[i])return i}return null}function H(){return this.state.isDestroyed=!0,k(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.left="",this.popper.style.position="",this.popper.style.top="",this.popper.style[W("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function P(e,t,n,r){var i="BODY"===e.nodeName,f=i?window:e;f.addEventListener(t,n,{passive:!0}),i||P(o(f.parentNode),t,n,r),r.push(f)}function A(e,t,n,r){n.updateBound=r,window.addEventListener("resize",n.updateBound,{passive:!0});var i=o(e);return P(i,"scroll",n.updateBound,n.scrollParents),n.scrollElement=i,n.eventsEnabled=!0,n}function B(){this.state.eventsEnabled||(this.state=A(this.reference,this.options,this.state,this.scheduleUpdate))}function D(e,t){return window.removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function S(){this.state.eventsEnabled&&(window.cancelAnimationFrame(this.scheduleUpdate),this.state=D(this.reference,this.state))}function j(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function I(e,t){Object.keys(t).forEach(function(n){var o="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&j(t[n])&&(o="px"),e.style[n]=t[n]+o})}function F(e,t){Object.keys(t).forEach(function(n){!1!==t[n]?e.setAttribute(n,t[n]):e.removeAttribute(n)})}function R(e,t,n){var o=T(e,function(e){return e.name===t}),r=!!o&&e.some(function(e){return e.name===n&&e.enabled&&e.order<o.order});if(!r){var i="`"+t+"`",f="`"+n+"`";console.warn(f+" modifier is required by "+i+" modifier in order to work, be sure to include it before "+i+"!")}return r}function U(e){return"end"===e?"start":"start"===e?"end":e}function Y(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=re.indexOf(e),o=re.slice(n+1).concat(re.slice(0,n));return t?o.reverse():o}function q(e,t,n,o){var r=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),i=+r[1],f=r[2];if(!i)return e;if(0===f.indexOf("%")){var a=void 0;switch(f){case"%p":a=n;break;case"%":case"%r":default:a=o}return c(a)[t]/100*i}if("vh"===f||"vw"===f){return("vh"===f?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*i}return i}function K(e,t,n,o){var r=[0,0],i=-1!==["right","left"].indexOf(o),f=e.split(/(\+|\-)/).map(function(e){return e.trim()}),a=f.indexOf(T(f,function(e){return-1!==e.search(/,|\s/)}));f[a]&&-1===f[a].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var s=/\s*,\s*|\s+/,p=-1!==a?[f.slice(0,a).concat([f[a].split(s)[0]]),[f[a].split(s)[1]].concat(f.slice(a+1))]:[f];return(p=p.map(function(e,o){var r=(1===o?!i:i)?"height":"width",f=!1;return e.reduce(function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,f=!0,e):f?(e[e.length-1]+=t,f=!1,e):e.concat(t)},[]).map(function(e){return q(e,r,t,n)})})).forEach(function(e,t){e.forEach(function(n,o){j(n)&&(r[t]+=n*("-"===e[o-1]?-1:1))})}),r}for(var z=["native code","[object MutationObserverConstructor]"],G="undefined"!=typeof window,V=["Edge","Trident","Firefox"],_=0,X=0;X<V.length;X+=1)if(G&&navigator.userAgent.indexOf(V[X])>=0){_=1;break}var J=G&&function(e){return z.some(function(t){return(e||"").toString().indexOf(t)>-1})}(window.MutationObserver)?function(e){var t=!1,n=0,o=document.createElement("span");return new MutationObserver(function(){e(),t=!1}).observe(o,{attributes:!0}),function(){t||(t=!0,o.setAttribute("x-index",n),n+=1)}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},_))}},Q=void 0,Z=function(){return void 0===Q&&(Q=-1!==navigator.appVersion.indexOf("MSIE 10")),Q},$=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},ee=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),te=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},oe=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],re=oe.slice(3),ie={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"},fe={placement:"bottom",eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,n=t.split("-")[0],o=t.split("-")[1];if(o){var r=e.offsets,i=r.reference,f=r.popper,a=-1!==["bottom","top"].indexOf(n),s=a?"left":"top",p=a?"width":"height",u={start:te({},s,i[s]),end:te({},s,i[s]+i[p]-f[p])};e.offsets.popper=ne({},f,u[o])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var n=t.offset,o=e.placement,r=e.offsets,i=r.popper,f=r.reference,a=o.split("-")[0],s=void 0;return s=j(+n)?[+n,0]:K(n,i,f,a),"left"===a?(i.top+=s[0],i.left-=s[1]):"right"===a?(i.top+=s[0],i.left+=s[1]):"top"===a?(i.left+=s[0],i.top-=s[1]):"bottom"===a&&(i.left+=s[0],i.top+=s[1]),e.popper=i,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var n=t.boundariesElement||f(e.instance.popper);e.instance.reference===n&&(n=f(n));var o=b(e.instance.popper,e.instance.reference,t.padding,n);t.boundaries=o;var r=t.priority,i=e.offsets.popper,a={primary:function(e){var n=i[e];return i[e]<o[e]&&!t.escapeWithReference&&(n=Math.max(i[e],o[e])),te({},e,n)},secondary:function(e){var n="right"===e?"left":"top",r=i[n];return i[e]>o[e]&&!t.escapeWithReference&&(r=Math.min(i[n],o[e]-("right"===e?i.width:i.height))),te({},n,r)}};return r.forEach(function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";i=ne({},i,a[t](e))}),e.offsets.popper=i,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,n=t.popper,o=t.reference,r=e.placement.split("-")[0],i=Math.floor,f=-1!==["top","bottom"].indexOf(r),a=f?"right":"bottom",s=f?"left":"top",p=f?"width":"height";return n[a]<i(o[s])&&(e.offsets.popper[s]=i(o[s])-n[p]),n[s]>i(o[a])&&(e.offsets.popper[s]=i(o[a])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){if(!R(e.instance.modifiers,"arrow","keepTogether"))return e;var n=t.element;if("string"==typeof n){if(!(n=e.instance.popper.querySelector(n)))return e}else if(!e.instance.popper.contains(n))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var o=e.placement.split("-")[0],r=e.offsets,i=r.popper,f=r.reference,a=-1!==["left","right"].indexOf(o),s=a?"height":"width",p=a?"top":"left",u=a?"left":"top",d=a?"bottom":"right",l=E(n)[s];f[d]-l<i[p]&&(e.offsets.popper[p]-=i[p]-(f[d]-l)),f[p]+l>i[d]&&(e.offsets.popper[p]+=f[p]+l-i[d]);var h=f[p]+f[s]/2-l/2-c(e.offsets.popper)[p];return h=Math.max(Math.min(i[s]-l,h),0),e.arrowElement=n,e.offsets.arrow={},e.offsets.arrow[p]=Math.round(h),e.offsets.arrow[u]="",e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(e,t){if(k(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var n=b(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement),o=e.placement.split("-")[0],r=x(o),i=e.placement.split("-")[1]||"",f=[];switch(t.behavior){case ie.FLIP:f=[o,r];break;case ie.CLOCKWISE:f=Y(o);break;case ie.COUNTERCLOCKWISE:f=Y(o,!0);break;default:f=t.behavior}return f.forEach(function(a,s){if(o!==a||f.length===s+1)return e;o=e.placement.split("-")[0],r=x(o);var p=e.offsets.popper,u=e.offsets.reference,d=Math.floor,l="left"===o&&d(p.right)>d(u.left)||"right"===o&&d(p.left)<d(u.right)||"top"===o&&d(p.bottom)>d(u.top)||"bottom"===o&&d(p.top)<d(u.bottom),c=d(p.left)<d(n.left),h=d(p.right)>d(n.right),m=d(p.top)<d(n.top),g=d(p.bottom)>d(n.bottom),v="left"===o&&c||"right"===o&&h||"top"===o&&m||"bottom"===o&&g,b=-1!==["top","bottom"].indexOf(o),w=!!t.flipVariations&&(b&&"start"===i&&c||b&&"end"===i&&h||!b&&"start"===i&&m||!b&&"end"===i&&g);(l||v||w)&&(e.flipped=!0,(l||v)&&(o=f[s+1]),w&&(i=U(i)),e.placement=o+(i?"-"+i:""),e.offsets.popper=ne({},e.offsets.popper,L(e.instance.popper,e.offsets.reference,e.placement)),e=C(e.instance.modifiers,e,"flip"))}),e},behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,n=t.split("-")[0],o=e.offsets,r=o.popper,i=o.reference,f=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n);return r[f?"left":"top"]=i[t]-(a?r[f?"width":"height"]:0),e.placement=x(t),e.offsets.popper=c(r),e}},hide:{order:800,enabled:!0,fn:function(e){if(!R(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=T(e.instance.modifiers,function(e){return"preventOverflow"===e.name}).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var n=t.x,o=t.y,r=e.offsets.popper,i=T(e.instance.modifiers,function(e){return"applyStyle"===e.name}).gpuAcceleration;void 0!==i&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var a=void 0!==i?i:t.gpuAcceleration,s=h(f(e.instance.popper)),p={position:r.position},u={left:Math.floor(r.left),top:Math.floor(r.top),bottom:Math.floor(r.bottom),right:Math.floor(r.right)},d="bottom"===n?"top":"bottom",l="right"===o?"left":"right",c=W("transform"),m=void 0,g=void 0;if(g="bottom"===d?-s.height+u.bottom:u.top,m="right"===l?-s.width+u.right:u.left,a&&c)p[c]="translate3d("+m+"px, "+g+"px, 0)",p[d]=0,p[l]=0,p.willChange="transform";else{var v="bottom"===d?-1:1,b="right"===l?-1:1;p[d]=g*v,p[l]=m*b,p.willChange=d+", "+l}var w={"x-placement":e.placement};return e.attributes=ne({},w,e.attributes),e.styles=ne({},p,e.styles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){return I(e.instance.popper,e.styles),F(e.instance.popper,e.attributes),e.offsets.arrow&&I(e.arrowElement,e.offsets.arrow),e},onLoad:function(e,t,n,o,r){var i=O(r,t,e),f=y(n.placement,i,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",f),I(t,{position:"absolute"}),n},gpuAcceleration:void 0}}},ae=function(){function t(n,o){var r=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};$(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(r.update)},this.update=J(this.update.bind(this)),this.options=ne({},t.Defaults,i),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=n.jquery?n[0]:n,this.popper=o.jquery?o[0]:o,this.options.modifiers={},Object.keys(ne({},t.Defaults.modifiers,i.modifiers)).forEach(function(e){r.options.modifiers[e]=ne({},t.Defaults.modifiers[e]||{},i.modifiers?i.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return ne({name:e},r.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(r.reference,r.popper,r.options,t,r.state)}),this.update();var f=this.options.eventsEnabled;f&&this.enableEventListeners(),this.state.eventsEnabled=f}return ee(t,[{key:"update",value:function(){return N.call(this)}},{key:"destroy",value:function(){return H.call(this)}},{key:"enableEventListeners",value:function(){return B.call(this)}},{key:"disableEventListeners",value:function(){return S.call(this)}}]),t}();return ae.Utils=("undefined"!=typeof window?window:global).PopperUtils,ae.placements=oe,ae.Defaults=fe,ae});
(function(a,b){'object'==typeof exports&&'undefined'!=typeof module?module.exports=b(require('popper.js')):'function'==typeof define&&define.amd?define(['popper.js'],b):a.Tooltip=b(a.Popper)})(this,function(a){'use strict';function b(j){return j&&'[object Function]'==={}.toString.call(j)}a='default'in a?a['default']:a;var c=function(j,k){if(!(j instanceof k))throw new TypeError('Cannot call a class as a function')},d=function(){function j(k,l){for(var n,m=0;m<l.length;m++)n=l[m],n.enumerable=n.enumerable||!1,n.configurable=!0,'value'in n&&(n.writable=!0),Object.defineProperty(k,n.key,n)}return function(k,l,m){return l&&j(k.prototype,l),m&&j(k,m),k}}(),e=Object.assign||function(j){for(var l,k=1;k<arguments.length;k++)for(var m in l=arguments[k],l)Object.prototype.hasOwnProperty.call(l,m)&&(j[m]=l[m]);return j},f={container:!1,delay:0,html:!1,placement:'top',title:'',template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:'hover focus',offset:0},g=function(){function j(k,l){c(this,j),h.call(this),l=e({},f,l),k.jquery&&(k=k[0]),this.reference=k,this.options=l;var m='string'==typeof l.trigger?l.trigger.split(' ').filter(function(n){return-1!==['click','hover','focus'].indexOf(n)}):[];this._isOpen=!1,this._setEventListeners(k,m,l)}return d(j,[{key:'_create',value:function(l,m,n,o){var p=window.document.createElement('div');p.innerHTML=m.trim();var q=p.childNodes[0];q.id='tooltip_'+Math.random().toString(36).substr(2,10),q.setAttribute('aria-hidden','false');var r=p.querySelector(this.innerSelector);if(1===n.nodeType)o&&r.appendChild(n);else if(b(n)){var s=n.call(l);o?r.innerHTML=s:r.innerText=s}else o?r.innerHTML=n:r.innerText=n;return q}},{key:'_show',value:function(l,m){if(this._isOpen)return this;if(this._isOpen=!0,this._tooltipNode)return this._tooltipNode.style.display='',this._tooltipNode.setAttribute('aria-hidden','false'),this.popperInstance.update(),this;var n=l.getAttribute('title')||m.title;if(!n)return this;var o=this._create(l,m.template,n,m.html);o.setAttribute('aria-describedby',o.id);var p=this._findContainer(m.container,l);this._append(o,p);var q={placement:m.placement,modifiers:{arrow:{element:this.arrowSelector}}};return m.boundariesElement&&(q.modifiers.preventOverflow={boundariesElement:m.boundariesElement}),this.popperInstance=new a(l,o,q),this._tooltipNode=o,this}},{key:'_hide',value:function(){return this._isOpen?(this._isOpen=!1,this._tooltipNode.style.display='none',this._tooltipNode.setAttribute('aria-hidden','true'),this):this}},{key:'_dispose',value:function(){var l=this;return this._tooltipNode&&(this._hide(),this.popperInstance.destroy(),this._events.forEach(function(m){var n=m.func,o=m.event;l.reference.removeEventListener(o,n)}),this._events=[],this._tooltipNode.parentNode.removeChild(this._tooltipNode),this._tooltipNode=null),this}},{key:'_findContainer',value:function(l,m){return'string'==typeof l?l=window.document.querySelector(l):!1===l&&(l=m.parentNode),l}},{key:'_append',value:function(l,m){m.appendChild(l)}},{key:'_setEventListeners',value:function(l,m,n){var o=this,p=[],q=[];m.forEach(function(r){switch(r){case'hover':p.push('mouseenter'),q.push('mouseleave');case'focus':p.push('focus'),q.push('blur');case'click':p.push('click'),q.push('click');}}),p.forEach(function(r){var s=function(u){!0===o._isOpen||(u.usedByTooltip=!0,o._scheduleShow(l,n.delay,n,u))};o._events.push({event:r,func:s}),l.addEventListener(r,s)}),q.forEach(function(r){var s=function(u){!0===u.usedByTooltip||o._scheduleHide(l,n.delay,n,u)};o._events.push({event:r,func:s}),l.addEventListener(r,s)})}},{key:'_scheduleShow',value:function(l,m,n){var o=this,p=m&&m.show||m||0;window.setTimeout(function(){return o._show(l,n)},p)}},{key:'_scheduleHide',value:function(l,m,n,o){var p=this,q=m&&m.hide||m||0;window.setTimeout(function(){if(!1!==p._isOpen&&document.body.contains(p._tooltipNode)){if('mouseleave'===o.type){var r=p._setTooltipNodeEvent(o,l,m,n);if(r)return}p._hide(l,n)}},q)}}]),j}(),h=function(){var k=this;this.show=function(){return k._show(k.reference,k.options)},this.hide=function(){return k._hide()},this.dispose=function(){return k._dispose()},this.toggle=function(){return k._isOpen?k.hide():k.show()},this.arrowSelector='.tooltip-arrow, .tooltip__arrow',this.innerSelector='.tooltip-inner, .tooltip__inner',this._events=[],this._setTooltipNodeEvent=function(l,m,n,o){var p=l.relatedreference||l.toElement;return!!k._tooltipNode.contains(p)&&(k._tooltipNode.addEventListener(l.type,function r(s){var t=s.relatedreference||s.toElement;k._tooltipNode.removeEventListener(l.type,r),m.contains(t)||k._scheduleHide(m,o.delay,o,s)}),!0)}};return g});
/*var consolecss = "text-shadow: -1px -1px hsl(0,100%,50%), 1px 1px hsl(5.4, 100%, 50%), 3px 2px hsl(10.8, 100%, 50%), 5px 3px hsl(16.2, 100%, 50%), 7px 4px hsl(21.6, 100%, 50%), 9px 5px hsl(27, 100%, 50%), 11px 6px hsl(32.4, 100%, 50%), 13px 7px hsl(37.8, 100%, 50%), 14px 8px hsl(43.2, 100%, 50%), 16px 9px hsl(48.6, 100%, 50%), 18px 10px hsl(54, 100%, 50%), 20px 11px hsl(59.4, 100%, 50%), 22px 12px hsl(64.8, 100%, 50%), 23px 13px hsl(70.2, 100%, 50%), 25px 14px hsl(75.6, 100%, 50%), 27px 15px hsl(81, 100%, 50%), 28px 16px hsl(86.4, 100%, 50%), 30px 17px hsl(91.8, 100%, 50%), 32px 18px hsl(97.2, 100%, 50%), 33px 19px hsl(102.6, 100%, 50%), 35px 20px hsl(108, 100%, 50%), 36px 21px hsl(113.4, 100%, 50%), 38px 22px hsl(118.8, 100%, 50%), 39px 23px hsl(124.2, 100%, 50%), 41px 24px hsl(129.6, 100%, 50%), 42px 25px hsl(135, 100%, 50%), 43px 26px hsl(140.4, 100%, 50%), 45px 27px hsl(145.8, 100%, 50%), 46px 28px hsl(151.2, 100%, 50%), 47px 29px hsl(156.6, 100%, 50%), 48px 30px hsl(162, 100%, 50%), 49px 31px hsl(167.4, 100%, 50%), 50px 32px hsl(172.8, 100%, 50%), 51px 33px hsl(178.2, 100%, 50%), 52px 34px hsl(183.6, 100%, 50%), 53px 35px hsl(189, 100%, 50%), 54px 36px hsl(194.4, 100%, 50%), 55px 37px hsl(199.8, 100%, 50%), 55px 38px hsl(205.2, 100%, 50%), 56px 39px hsl(210.6, 100%, 50%), 57px 40px hsl(216, 100%, 50%), 57px 41px hsl(221.4, 100%, 50%), 58px 42px hsl(226.8, 100%, 50%), 58px 43px hsl(232.2, 100%, 50%), 58px 44px hsl(237.6, 100%, 50%), 59px 45px hsl(243, 100%, 50%), 59px 46px hsl(248.4, 100%, 50%), 59px 47px hsl(253.8, 100%, 50%), 59px 48px hsl(259.2, 100%, 50%), 59px 49px hsl(264.6, 100%, 50%), 60px 50px hsl(270, 100%, 50%), 59px 51px hsl(275.4, 100%, 50%), 59px 52px hsl(280.8, 100%, 50%), 59px 53px hsl(286.2, 100%, 50%), 59px 54px hsl(291.6, 100%, 50%), 59px 55px hsl(297, 100%, 50%), 58px 56px hsl(302.4, 100%, 50%), 58px 57px hsl(307.8, 100%, 50%), 58px 58px hsl(313.2, 100%, 50%), 57px 59px hsl(318.6, 100%, 50%), 57px 60px hsl(324, 100%, 50%), 56px 61px hsl(329.4, 100%, 50%), 55px 62px hsl(334.8, 100%, 50%), 55px 63px hsl(340.2, 100%, 50%), 54px 64px hsl(345.6, 100%, 50%), 53px 65px hsl(351, 100%, 50%), 52px 66px hsl(356.4, 100%, 50%), 51px 67px hsl(361.8, 100%, 50%), 50px 68px hsl(367.2, 100%, 50%), 49px 69px hsl(372.6, 100%, 50%), 48px 70px hsl(378, 100%, 50%), 47px 71px hsl(383.4, 100%, 50%), 46px 72px hsl(388.8, 100%, 50%), 45px 73px hsl(394.2, 100%, 50%), 43px 74px hsl(399.6, 100%, 50%), 42px 75px hsl(405, 100%, 50%), 41px 76px hsl(410.4, 100%, 50%), 39px 77px hsl(415.8, 100%, 50%), 38px 78px hsl(421.2, 100%, 50%), 36px 79px hsl(426.6, 100%, 50%), 35px 80px hsl(432, 100%, 50%), 33px 81px hsl(437.4, 100%, 50%), 32px 82px hsl(442.8, 100%, 50%), 30px 83px hsl(448.2, 100%, 50%), 28px 84px hsl(453.6, 100%, 50%), 27px 85px hsl(459, 100%, 50%), 25px 86px hsl(464.4, 100%, 50%), 23px 87px hsl(469.8, 100%, 50%), 22px 88px hsl(475.2, 100%, 50%), 20px 89px hsl(480.6, 100%, 50%), 18px 90px hsl(486, 100%, 50%), 16px 91px hsl(491.4, 100%, 50%), 14px 92px hsl(496.8, 100%, 50%), 13px 93px hsl(502.2, 100%, 50%), 11px 94px hsl(507.6, 100%, 50%), 9px 95px hsl(513, 100%, 50%), 7px 96px hsl(518.4, 100%, 50%), 5px 97px hsl(523.8, 100%, 50%), 3px 98px hsl(529.2, 100%, 50%), 1px 99px hsl(534.6, 100%, 50%), 7px 100px hsl(540, 100%, 50%), -1px 101px hsl(545.4, 100%, 50%), -3px 102px hsl(550.8, 100%, 50%), -5px 103px hsl(556.2, 100%, 50%), -7px 104px hsl(561.6, 100%, 50%), -9px 105px hsl(567, 100%, 50%), -11px 106px hsl(572.4, 100%, 50%), -13px 107px hsl(577.8, 100%, 50%), -14px 108px hsl(583.2, 100%, 50%), -16px 109px hsl(588.6, 100%, 50%), -18px 110px hsl(594, 100%, 50%), -20px 111px hsl(599.4, 100%, 50%), -22px 112px hsl(604.8, 100%, 50%), -23px 113px hsl(610.2, 100%, 50%), -25px 114px hsl(615.6, 100%, 50%), -27px 115px hsl(621, 100%, 50%), -28px 116px hsl(626.4, 100%, 50%), -30px 117px hsl(631.8, 100%, 50%), -32px 118px hsl(637.2, 100%, 50%), -33px 119px hsl(642.6, 100%, 50%), -35px 120px hsl(648, 100%, 50%), -36px 121px hsl(653.4, 100%, 50%), -38px 122px hsl(658.8, 100%, 50%), -39px 123px hsl(664.2, 100%, 50%), -41px 124px hsl(669.6, 100%, 50%), -42px 125px hsl(675, 100%, 50%), -43px 126px hsl(680.4, 100%, 50%), -45px 127px hsl(685.8, 100%, 50%), -46px 128px hsl(691.2, 100%, 50%), -47px 129px hsl(696.6, 100%, 50%), -48px 130px hsl(702, 100%, 50%), -49px 131px hsl(707.4, 100%, 50%), -50px 132px hsl(712.8, 100%, 50%), -51px 133px hsl(718.2, 100%, 50%), -52px 134px hsl(723.6, 100%, 50%), -53px 135px hsl(729, 100%, 50%), -54px 136px hsl(734.4, 100%, 50%), -55px 137px hsl(739.8, 100%, 50%), -55px 138px hsl(745.2, 100%, 50%), -56px 139px hsl(750.6, 100%, 50%), -57px 140px hsl(756, 100%, 50%), -57px 141px hsl(761.4, 100%, 50%), -58px 142px hsl(766.8, 100%, 50%), -58px 143px hsl(772.2, 100%, 50%), -58px 144px hsl(777.6, 100%, 50%), -59px 145px hsl(783, 100%, 50%), -59px 146px hsl(788.4, 100%, 50%), -59px 147px hsl(793.8, 100%, 50%), -59px 148px hsl(799.2, 100%, 50%), -59px 149px hsl(804.6, 100%, 50%), -60px 150px hsl(810, 100%, 50%), -59px 151px hsl(815.4, 100%, 50%), -59px 152px hsl(820.8, 100%, 50%), -59px 153px hsl(826.2, 100%, 50%), -59px 154px hsl(831.6, 100%, 50%), -59px 155px hsl(837, 100%, 50%), -58px 156px hsl(842.4, 100%, 50%), -58px 157px hsl(847.8, 100%, 50%), -58px 158px hsl(853.2, 100%, 50%), -57px 159px hsl(858.6, 100%, 50%), -57px 160px hsl(864, 100%, 50%), -56px 161px hsl(869.4, 100%, 50%), -55px 162px hsl(874.8, 100%, 50%), -55px 163px hsl(880.2, 100%, 50%), -54px 164px hsl(885.6, 100%, 50%), -53px 165px hsl(891, 100%, 50%), -52px 166px hsl(896.4, 100%, 50%), -51px 167px hsl(901.8, 100%, 50%), -50px 168px hsl(907.2, 100%, 50%), -49px 169px hsl(912.6, 100%, 50%), -48px 170px hsl(918, 100%, 50%), -47px 171px hsl(923.4, 100%, 50%), -46px 172px hsl(928.8, 100%, 50%), -45px 173px hsl(934.2, 100%, 50%), -43px 174px hsl(939.6, 100%, 50%), -42px 175px hsl(945, 100%, 50%), -41px 176px hsl(950.4, 100%, 50%), -39px 177px hsl(955.8, 100%, 50%), -38px 178px hsl(961.2, 100%, 50%), -36px 179px hsl(966.6, 100%, 50%), -35px 180px hsl(972, 100%, 50%), -33px 181px hsl(977.4, 100%, 50%), -32px 182px hsl(982.8, 100%, 50%), -30px 183px hsl(988.2, 100%, 50%), -28px 184px hsl(993.6, 100%, 50%), -27px 185px hsl(999, 100%, 50%), -25px 186px hsl(1004.4, 100%, 50%), -23px 187px hsl(1009.8, 100%, 50%), -22px 188px hsl(1015.2, 100%, 50%), -20px 189px hsl(1020.6, 100%, 50%), -18px 190px hsl(1026, 100%, 50%), -16px 191px hsl(1031.4, 100%, 50%), -14px 192px hsl(1036.8, 100%, 50%), -13px 193px hsl(1042.2, 100%, 50%), -11px 194px hsl(1047.6, 100%, 50%), -9px 195px hsl(1053, 100%, 50%), -7px 196px hsl(1058.4, 100%, 50%), -5px 197px hsl(1063.8, 100%, 50%), -3px 198px hsl(1069.2, 100%, 50%), -1px 199px hsl(1074.6, 100%, 50%), -1px 200px hsl(1080, 100%, 50%), 1px 201px hsl(1085.4, 100%, 50%), 3px 202px hsl(1090.8, 100%, 50%), 5px 203px hsl(1096.2, 100%, 50%), 7px 204px hsl(1101.6, 100%, 50%), 9px 205px hsl(1107, 100%, 50%), 11px 206px hsl(1112.4, 100%, 50%), 13px 207px hsl(1117.8, 100%, 50%), 14px 208px hsl(1123.2, 100%, 50%), 16px 209px hsl(1128.6, 100%, 50%), 18px 210px hsl(1134, 100%, 50%), 20px 211px hsl(1139.4, 100%, 50%), 22px 212px hsl(1144.8, 100%, 50%), 23px 213px hsl(1150.2, 100%, 50%), 25px 214px hsl(1155.6, 100%, 50%), 27px 215px hsl(1161, 100%, 50%), 28px 216px hsl(1166.4, 100%, 50%), 30px 217px hsl(1171.8, 100%, 50%), 32px 218px hsl(1177.2, 100%, 50%), 33px 219px hsl(1182.6, 100%, 50%), 35px 220px hsl(1188, 100%, 50%), 36px 221px hsl(1193.4, 100%, 50%), 38px 222px hsl(1198.8, 100%, 50%), 39px 223px hsl(1204.2, 100%, 50%), 41px 224px hsl(1209.6, 100%, 50%), 42px 225px hsl(1215, 100%, 50%), 43px 226px hsl(1220.4, 100%, 50%), 45px 227px hsl(1225.8, 100%, 50%), 46px 228px hsl(1231.2, 100%, 50%), 47px 229px hsl(1236.6, 100%, 50%), 48px 230px hsl(1242, 100%, 50%), 49px 231px hsl(1247.4, 100%, 50%), 50px 232px hsl(1252.8, 100%, 50%), 51px 233px hsl(1258.2, 100%, 50%), 52px 234px hsl(1263.6, 100%, 50%), 53px 235px hsl(1269, 100%, 50%), 54px 236px hsl(1274.4, 100%, 50%), 55px 237px hsl(1279.8, 100%, 50%), 55px 238px hsl(1285.2, 100%, 50%), 56px 239px hsl(1290.6, 100%, 50%), 57px 240px hsl(1296, 100%, 50%), 57px 241px hsl(1301.4, 100%, 50%), 58px 242px hsl(1306.8, 100%, 50%), 58px 243px hsl(1312.2, 100%, 50%), 58px 244px hsl(1317.6, 100%, 50%), 59px 245px hsl(1323, 100%, 50%), 59px 246px hsl(1328.4, 100%, 50%), 59px 247px hsl(1333.8, 100%, 50%), 59px 248px hsl(1339.2, 100%, 50%), 59px 249px hsl(1344.6, 100%, 50%), 60px 250px hsl(1350, 100%, 50%), 59px 251px hsl(1355.4, 100%, 50%), 59px 252px hsl(1360.8, 100%, 50%), 59px 253px hsl(1366.2, 100%, 50%), 59px 254px hsl(1371.6, 100%, 50%), 59px 255px hsl(1377, 100%, 50%), 58px 256px hsl(1382.4, 100%, 50%), 58px 257px hsl(1387.8, 100%, 50%), 58px 258px hsl(1393.2, 100%, 50%), 57px 259px hsl(1398.6, 100%, 50%), 57px 260px hsl(1404, 100%, 50%), 56px 261px hsl(1409.4, 100%, 50%), 55px 262px hsl(1414.8, 100%, 50%), 55px 263px hsl(1420.2, 100%, 50%), 54px 264px hsl(1425.6, 100%, 50%), 53px 265px hsl(1431, 100%, 50%), 52px 266px hsl(1436.4, 100%, 50%), 51px 267px hsl(1441.8, 100%, 50%), 50px 268px hsl(1447.2, 100%, 50%), 49px 269px hsl(1452.6, 100%, 50%), 48px 270px hsl(1458, 100%, 50%), 47px 271px hsl(1463.4, 100%, 50%), 46px 272px hsl(1468.8, 100%, 50%), 45px 273px hsl(1474.2, 100%, 50%), 43px 274px hsl(1479.6, 100%, 50%), 42px 275px hsl(1485, 100%, 50%), 41px 276px hsl(1490.4, 100%, 50%), 39px 277px hsl(1495.8, 100%, 50%), 38px 278px hsl(1501.2, 100%, 50%), 36px 279px hsl(1506.6, 100%, 50%), 35px 280px hsl(1512, 100%, 50%), 33px 281px hsl(1517.4, 100%, 50%), 32px 282px hsl(1522.8, 100%, 50%), 30px 283px hsl(1528.2, 100%, 50%), 28px 284px hsl(1533.6, 100%, 50%), 27px 285px hsl(1539, 100%, 50%), 25px 286px hsl(1544.4, 100%, 50%), 23px 287px hsl(1549.8, 100%, 50%), 22px 288px hsl(1555.2, 100%, 50%), 20px 289px hsl(1560.6, 100%, 50%), 18px 290px hsl(1566, 100%, 50%), 16px 291px hsl(1571.4, 100%, 50%), 14px 292px hsl(1576.8, 100%, 50%), 13px 293px hsl(1582.2, 100%, 50%), 11px 294px hsl(1587.6, 100%, 50%), 9px 295px hsl(1593, 100%, 50%), 7px 296px hsl(1598.4, 100%, 50%), 5px 297px hsl(1603.8, 100%, 50%), 3px 298px hsl(1609.2, 100%, 50%), 1px 299px hsl(1614.6, 100%, 50%), 2px 300px hsl(1620, 100%, 50%), -1px 301px hsl(1625.4, 100%, 50%), -3px 302px hsl(1630.8, 100%, 50%), -5px 303px hsl(1636.2, 100%, 50%), -7px 304px hsl(1641.6, 100%, 50%), -9px 305px hsl(1647, 100%, 50%), -11px 306px hsl(1652.4, 100%, 50%), -13px 307px hsl(1657.8, 100%, 50%), -14px 308px hsl(1663.2, 100%, 50%), -16px 309px hsl(1668.6, 100%, 50%), -18px 310px hsl(1674, 100%, 50%), -20px 311px hsl(1679.4, 100%, 50%), -22px 312px hsl(1684.8, 100%, 50%), -23px 313px hsl(1690.2, 100%, 50%), -25px 314px hsl(1695.6, 100%, 50%), -27px 315px hsl(1701, 100%, 50%), -28px 316px hsl(1706.4, 100%, 50%), -30px 317px hsl(1711.8, 100%, 50%), -32px 318px hsl(1717.2, 100%, 50%), -33px 319px hsl(1722.6, 100%, 50%), -35px 320px hsl(1728, 100%, 50%), -36px 321px hsl(1733.4, 100%, 50%), -38px 322px hsl(1738.8, 100%, 50%), -39px 323px hsl(1744.2, 100%, 50%), -41px 324px hsl(1749.6, 100%, 50%), -42px 325px hsl(1755, 100%, 50%), -43px 326px hsl(1760.4, 100%, 50%), -45px 327px hsl(1765.8, 100%, 50%), -46px 328px hsl(1771.2, 100%, 50%), -47px 329px hsl(1776.6, 100%, 50%), -48px 330px hsl(1782, 100%, 50%), -49px 331px hsl(1787.4, 100%, 50%), -50px 332px hsl(1792.8, 100%, 50%), -51px 333px hsl(1798.2, 100%, 50%), -52px 334px hsl(1803.6, 100%, 50%), -53px 335px hsl(1809, 100%, 50%), -54px 336px hsl(1814.4, 100%, 50%), -55px 337px hsl(1819.8, 100%, 50%), -55px 338px hsl(1825.2, 100%, 50%), -56px 339px hsl(1830.6, 100%, 50%), -57px 340px hsl(1836, 100%, 50%), -57px 341px hsl(1841.4, 100%, 50%), -58px 342px hsl(1846.8, 100%, 50%), -58px 343px hsl(1852.2, 100%, 50%), -58px 344px hsl(1857.6, 100%, 50%), -59px 345px hsl(1863, 100%, 50%), -59px 346px hsl(1868.4, 100%, 50%), -59px 347px hsl(1873.8, 100%, 50%), -59px 348px hsl(1879.2, 100%, 50%), -59px 349px hsl(1884.6, 100%, 50%), -60px 350px hsl(1890, 100%, 50%), -59px 351px hsl(1895.4, 100%, 50%), -59px 352px hsl(1900.8, 100%, 50%), -59px 353px hsl(1906.2, 100%, 50%), -59px 354px hsl(1911.6, 100%, 50%), -59px 355px hsl(1917, 100%, 50%), -58px 356px hsl(1922.4, 100%, 50%), -58px 357px hsl(1927.8, 100%, 50%), -58px 358px hsl(1933.2, 100%, 50%), -57px 359px hsl(1938.6, 100%, 50%), -57px 360px hsl(1944, 100%, 50%), -56px 361px hsl(1949.4, 100%, 50%), -55px 362px hsl(1954.8, 100%, 50%), -55px 363px hsl(1960.2, 100%, 50%), -54px 364px hsl(1965.6, 100%, 50%), -53px 365px hsl(1971, 100%, 50%), -52px 366px hsl(1976.4, 100%, 50%), -51px 367px hsl(1981.8, 100%, 50%), -50px 368px hsl(1987.2, 100%, 50%), -49px 369px hsl(1992.6, 100%, 50%), -48px 370px hsl(1998, 100%, 50%), -47px 371px hsl(2003.4, 100%, 50%), -46px 372px hsl(2008.8, 100%, 50%), -45px 373px hsl(2014.2, 100%, 50%), -43px 374px hsl(2019.6, 100%, 50%), -42px 375px hsl(2025, 100%, 50%), -41px 376px hsl(2030.4, 100%, 50%), -39px 377px hsl(2035.8, 100%, 50%), -38px 378px hsl(2041.2, 100%, 50%), -36px 379px hsl(2046.6, 100%, 50%), -35px 380px hsl(2052, 100%, 50%), -33px 381px hsl(2057.4, 100%, 50%), -32px 382px hsl(2062.8, 100%, 50%), -30px 383px hsl(2068.2, 100%, 50%), -28px 384px hsl(2073.6, 100%, 50%), -27px 385px hsl(2079, 100%, 50%), -25px 386px hsl(2084.4, 100%, 50%), -23px 387px hsl(2089.8, 100%, 50%), -22px 388px hsl(2095.2, 100%, 50%), -20px 389px hsl(2100.6, 100%, 50%), -18px 390px hsl(2106, 100%, 50%), -16px 391px hsl(2111.4, 100%, 50%), -14px 392px hsl(2116.8, 100%, 50%), -13px 393px hsl(2122.2, 100%, 50%), -11px 394px hsl(2127.6, 100%, 50%), -9px 395px hsl(2133, 100%, 50%), -7px 396px hsl(2138.4, 100%, 50%), -5px 397px hsl(2143.8, 100%, 50%), -3px 398px hsl(2149.2, 100%, 50%), -1px 399px hsl(2154.6, 100%, 50%); font-size: 40px;";

console.log("%cCopyLEE %s", consolecss, 'iniciando funciones');*/

function xlog(message, color) {

    color = color || "black";

    switch (color) {
        case "success":  
             color = "Green"; 
             break;
        case "info":     
                color = "DodgerBlue";  
             break;
        case "error":   
             color = "Red";     
             break;
        case "warning":  
             color = "Orange";   
             break;
        default: 
             color = color;
    }

    console.log("%c" + message, "color:" + color);
}

function generarid() {
    return ("0000" + (Math.random()*Math.pow(36,4) << 0).toString(36)).slice(-4)
}

function getCleanedString(cadena){
   // Definimos los caracteres que queremos eliminar
   var specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,.";

   // Los eliminamos todos
   for (var i = 0; i < specialChars.length; i++) {
       cadena= cadena.replace(new RegExp("\\" + specialChars[i], 'gi'), '');
   }   

   // Lo queremos devolver limpio en minusculas
   cadena = cadena.toLowerCase();

   // Quitamos espacios y los sustituimos por _ porque nos gusta mas asi
   cadena = cadena.replace(/ /g,"_");

   // Quitamos acentos y "ñ". Fijate en que va sin comillas el primer parametro
   cadena = cadena.replace(/á/gi,"a");
   cadena = cadena.replace(/é/gi,"e");
   cadena = cadena.replace(/í/gi,"i");
   cadena = cadena.replace(/ó/gi,"o");
   cadena = cadena.replace(/ú/gi,"u");
   cadena = cadena.replace(/ñ/gi,"n");
   return cadena;
}

function strip(html){
   var doc = new DOMParser().parseFromString(html, 'text/html');
   return doc.body.textContent || "";
}
function fadeOutPageLoad(){
	console.log("LLAMADO PAGE OUT!");


                            $("#page").fadeOut('fast').delay(2000).queue(function() {$(this).remove();});
                            const ring = anime.timeline({
  duration: 500,
  complete: () => {
    launch.play();
  }
});
ring
  .add({
    targets: ".ring:nth-of-type(2)",
    width: ["100%", "90%"],
    height: ["100%", "90%"]
  })
  .add({
    targets: ".ring:nth-of-type(3)",
    width: ["100%", "80%"],
    height: ["100%", "80%"]
  })
  .add({
    targets: ".ring:nth-of-type(4)",
    width: ["100%", "70%"],
    height: ["100%", "70%"]
  })
  .add({
    targets: ".rocket",
    rotate: ["180deg", "0deg"],
    translateX: ["-50%", "-50%"],
    translateY: ["-100%", "0%"],
    opacity: [0, 1],
    offset: 0,
    easing: "easeInOutQuad",
    duration: 1000
  });

const launch = anime.timeline({
  autoplay: false
});
launch
  .add({
    targets: ".clouds .cloud, .clouds .filllogo",
    translateY: ["360%", "0"],
    opacity: [0, 1],
    easing: "easeInOutQuad"
  })
  .add({
    targets: ".jet",
    scaleY: [0, 1.1],
    translateX: ["-50%", "-50%"],
    bottom: ["-100%", "-10%"],
    easing: "easeInOutQuad",
    offset: 50
  })
  .add({
    targets: ".rocket",
    top: ["50%", "-15%"],
    easing: "easeInOutQuad",
    offset: 50
  });

  /*window.book_list = new bookList(document.getElementById('grid'));*/


}

var quantum = new PouchDB('https://quay.stream/db/_users', {skip_setup: true});
var dblee = new PouchDB('https://quay.stream/db/libros', {skip_setup: true});

var upublic = new PouchDB('https://quay.stream/db/upublic', {skip_setup: true});
var compraslee_remote = new PouchDB('https://quay.stream/db/compras', {skip_setup: true});
var dbleelocal = new PouchDB('dblee');
var compras = new PouchDB('compras');
var opts = { live: true, retry: true, selector: {publish: {$eq: true}} };
var optscart = { live: true, retry: true };

function notifon(){
	 dbleelocal.sync(dblee, opts)
    .on('change', onSyncChange)
    .on('paused', onSyncPaused)
    .on('error', onSyncError);
var notifications = new PouchDB('https://quay.stream/db/notificaciones', {skip_setup: true, auto_compaction: true});
var notificaciones = new PouchDB('notificaciones', {skip_setup: true, auto_compaction: true});
notificaciones.replicate.from(notifications).on('complete', function(info) {
notificaciones.sync(notifications, {
  live: true,
  retry: true
}).on('change', function (info) {
  // handle change
  toast("Tienes notificaciones.")
}).on('paused', function (err) {
  // replication paused (e.g. replication up to date, user went offline)
}).on('active', function () {
  // replicate resumed (e.g. new changes replicating, user went back online)
}).on('denied', function (err) {
  // a document failed to replicate (e.g. due to permissions)
}).on('complete', function (info) {
  // handle complete
}).on('error', function (err) {
  // handle error
});}).on('error', function (err) {
  // handle error replicate from notif
});
  compras.sync(compraslee_remote, optscart)
    .on('change', onCartChange)
    .on('paused', onCartPaused)
    .on('error', onCartError);
    function onCartChange(){
    	toast("Sincronización: Cambios en el carro");
    }
    function onCartPaused(){
    	toast("Carro sincronizado");
    }
    function onCartError(){
    	toast("Error replicando orden de libros");
    }
    fadeOutPageLoad();
	var $notiftip = $('.js-notiftip'),
    $trignot = $('.js-dropnotif'),
    $arrow = $('.js-notiftip__arrow'),
    $hiddenTxt = $('.js-notiftip__hidden-text');

var poppernot = new Popper($trignot, $notiftip, {
    placement: 'bottom',
    eventsEnabled: false
});

$trignot.on('click', function (e) {
    e.preventDefault();

    var targetId = $(this).data('target'),
        $thisTarget = $(targetId),
        $thisHiddenTxt = $thisTarget.find($hiddenTxt),
        hiddenContent = ' ';

    $thisTarget.toggleClass('is-hidden is-visible');
    $thisHiddenTxt.html(hiddenContent);
});

}


;(function(root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.NProgress = factory();
  }

})(this, function() {
  var NProgress = {};

  NProgress.version = '0.2.0';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'ease',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var progress = NProgress.render(!started),
        bar      = progress.querySelector(Settings.barSelector),
        speed    = Settings.speed,
        ease     = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, { 
          transition: 'none', 
          opacity: 1 
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function() {
          css(progress, { 
            transition: 'all ' + speed + 'ms linear', 
            opacity: 0 
          });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else {
      if (typeof amount !== 'number') {
        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc(Math.random() * Settings.trickleRate);
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;

    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() === "resolved") {
        return this;
      }

      if (current === 0) {
        NProgress.start();
      }

      initial++;
      current++;

      $promise.always(function() {
        current--;
        if (current === 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });

      return this;
    };

  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');
    
    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar      = progress.querySelector(Settings.barSelector),
        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent   = document.querySelector(Settings.parent),
        spinner;
    
    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];
    
    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery 
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it 
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
        cssProps    = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
          prop, 
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return; 

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element. 
   * The list is wrapped with a single space on each end to facilitate finding 
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});


!(function(root) {

    function Grapnel(opts) {
        "use strict";

        var self = this; // Scope reference
        this.events = {}; // Event Listeners
        this.state = null; // Router state object
        this.options = opts || {}; // Options
        this.options.env = this.options.env || (!!(Object.keys(root).length === 0 && process && process.browser !== true) ? 'server' : 'client');
        this.options.mode = this.options.mode || (!!(this.options.env !== 'server' && this.options.pushState && root.history && root.history.pushState) ? 'pushState' : 'hashchange');
        this.version = '0.6.4'; // Version

        if ('function' === typeof root.addEventListener) {
            root.addEventListener('hashchange', function() {
                self.trigger('hashchange');
            });

            root.addEventListener('popstate', function(e) {
                // Make sure popstate doesn't run on init -- this is a common issue with Safari and old versions of Chrome
                if (self.state && self.state.previousState === null) return false;

                self.trigger('navigate');
            });
        }

        return this;
    };
    /**
     * Create a RegExp Route from a string
     * This is the heart of the router and I've made it as small as possible!
     *
     * @param {String} Path of route
     * @param {Array} Array of keys to fill
     * @param {Bool} Case sensitive comparison
     * @param {Bool} Strict mode
     */
    Grapnel.regexRoute = function(path, keys, sensitive, strict) {
        if (path instanceof RegExp) return path;
        if (path instanceof Array) path = '(' + path.join('|') + ')';
        // Build route RegExp
        path = path.concat(strict ? '' : '/?')
            .replace(/\/\(/g, '(?:/')
            .replace(/\+/g, '__plus__')
            .replace(/(\/)?(\.)?:(\w+)(?:(\(.*?\)))?(\?)?/g, function(_, slash, format, key, capture, optional) {
                keys.push({
                    name: key,
                    optional: !!optional
                });
                slash = slash || '';

                return '' + (optional ? '' : slash) + '(?:' + (optional ? slash : '') + (format || '') + (capture || (format && '([^/.]+?)' || '([^/]+?)')) + ')' + (optional || '');
            })
            .replace(/([\/.])/g, '\\$1')
            .replace(/__plus__/g, '(.+)')
            .replace(/\*/g, '(.*)');

        return new RegExp('^' + path + '$', sensitive ? '' : 'i');
    };
    /**
     * ForEach workaround utility
     *
     * @param {Array} to iterate
     * @param {Function} callback
     */
    Grapnel._forEach = function(a, callback) {
        if (typeof Array.prototype.forEach === 'function') return Array.prototype.forEach.call(a, callback);
        // Replicate forEach()
        return function(c, next) {
            for (var i = 0, n = this.length; i < n; ++i) {
                c.call(next, this[i], i, this);
            }
        }.call(a, callback);
    };
    /**
     * Add an route and handler
     *
     * @param {String|RegExp} route name
     * @return {self} Router
     */
    Grapnel.prototype.get = Grapnel.prototype.add = function(route) {
        var self = this,
            middleware = Array.prototype.slice.call(arguments, 1, -1),
            handler = Array.prototype.slice.call(arguments, -1)[0],
            request = new Request(route);

        var invoke = function RouteHandler() {
            // Build request parameters
            var req = request.parse(self.path());
            // Check if matches are found
            if (req.match) {
                // Match found
                var extra = {
                    route: route,
                    params: req.params,
                    req: req,
                    regex: req.match
                };
                // Create call stack -- add middleware first, then handler
                var stack = new CallStack(self, extra).enqueue(middleware.concat(handler));
                // Trigger main event
                self.trigger('match', stack, req);
                // Continue?
                if (!stack.runCallback) return self;
                // Previous state becomes current state
                stack.previousState = self.state;
                // Save new state
                self.state = stack;
                // Prevent this handler from being called if parent handler in stack has instructed not to propagate any more events
                if (stack.parent() && stack.parent().propagateEvent === false) {
                    stack.propagateEvent = false;
                    return self;
                }
                // Call handler
                stack.callback();
            }
            // Returns self
            return self;
        };
        // Event name
        var eventName = (self.options.mode !== 'pushState' && self.options.env !== 'server') ? 'hashchange' : 'navigate';
        // Invoke when route is defined, and once again when app navigates
        return invoke().on(eventName, invoke);
    };
    /**
     * Fire an event listener
     *
     * @param {String} event name
     * @param {Mixed} [attributes] Parameters that will be applied to event handler
     * @return {self} Router
     */
    Grapnel.prototype.trigger = function(event) {
        var self = this,
            params = Array.prototype.slice.call(arguments, 1);
        // Call matching events
        if (this.events[event]) {
            Grapnel._forEach(this.events[event], function(fn) {
                fn.apply(self, params);
            });
        }

        return this;
    };
    /**
     * Add an event listener
     *
     * @param {String} event name (multiple events can be called when separated by a space " ")
     * @param {Function} callback
     * @return {self} Router
     */
    Grapnel.prototype.on = Grapnel.prototype.bind = function(event, handler) {
        var self = this,
            events = event.split(' ');

        Grapnel._forEach(events, function(event) {
            if (self.events[event]) {
                self.events[event].push(handler);
            } else {
                self.events[event] = [handler];
            }
        });

        return this;
    };
    /**
     * Allow event to be called only once
     *
     * @param {String} event name(s)
     * @param {Function} callback
     * @return {self} Router
     */
    Grapnel.prototype.once = function(event, handler) {
        var ran = false;

        return this.on(event, function() {
            if (ran) return false;
            ran = true;
            handler.apply(this, arguments);
            handler = null;
            return true;
        });
    };
    /**
     * @param {String} Route context (without trailing slash)
     * @param {[Function]} Middleware (optional)
     * @return {Function} Adds route to context
     */
    Grapnel.prototype.context = function(context) {
        var self = this,
            middleware = Array.prototype.slice.call(arguments, 1);

        return function() {
            var value = arguments[0],
                submiddleware = (arguments.length > 2) ? Array.prototype.slice.call(arguments, 1, -1) : [],
                handler = Array.prototype.slice.call(arguments, -1)[0],
                prefix = (context.slice(-1) !== '/' && value !== '/' && value !== '') ? context + '/' : context,
                path = (value.substr(0, 1) !== '/') ? value : value.substr(1),
                pattern = prefix + path;

            return self.add.apply(self, [pattern].concat(middleware).concat(submiddleware).concat([handler]));
        }
    };
    /**
     * Navigate through history API
     *
     * @param {String} Pathname
     * @return {self} Router
     */
    Grapnel.prototype.navigate = function(path) {
        return this.path(path).trigger('navigate');
    };

    Grapnel.prototype.path = function(pathname) {
        var self = this,
            frag;

        if ('string' === typeof pathname) {
            // Set path
            if (self.options.mode === 'pushState') {
                frag = (self.options.root) ? (self.options.root + pathname) : pathname;
                root.history.pushState({}, null, frag);
            } else if (root.location) {
                root.location.hash = (self.options.hashBang ? '!' : '') + pathname;
            } else {
                root._pathname = pathname || '';
            }

            return this;
        } else if ('undefined' === typeof pathname) {
            // Get path
            if (self.options.mode === 'pushState') {
                frag = root.location.pathname.replace(self.options.root, '');
            } else if (self.options.mode !== 'pushState' && root.location) {
                frag = (root.location.hash) ? root.location.hash.split((self.options.hashBang ? '#!' : '#'))[1] : '';
            } else {
                frag = root._pathname || '';
            }

            return frag;
        } else if (pathname === false) {
            // Clear path
            if (self.options.mode === 'pushState') {
                root.history.pushState({}, null, self.options.root || '/');
            } else if (root.location) {
                root.location.hash = (self.options.hashBang) ? '!' : '';
            }

            return self;
        }
    };
    /**
     * Create routes based on an object
     *
     * @param {Object} [Options, Routes]
     * @param {Object Routes}
     * @return {self} Router
     */
    Grapnel.listen = function() {
        var opts, routes;
        if (arguments[0] && arguments[1]) {
            opts = arguments[0];
            routes = arguments[1];
        } else {
            routes = arguments[0];
        }
        // Return a new Grapnel instance
        return (function() {
            // TODO: Accept multi-level routes
            for (var key in routes) {
                this.add.call(this, key, routes[key]);
            }

            return this;
        }).call(new Grapnel(opts || {}));
    };
    /**
     * Create a call stack that can be enqueued by handlers and middleware
     *
     * @param {Object} Router
     * @param {Object} Extend
     * @return {self} CallStack
     */
    function CallStack(router, extendObj) {
        this.stack = CallStack.global.slice(0);
        this.router = router;
        this.runCallback = true;
        this.callbackRan = false;
        this.propagateEvent = true;
        this.value = router.path();

        for (var key in extendObj) {
            this[key] = extendObj[key];
        }

        return this;
    };
    /**
     * Build request parameters and allow them to be checked against a string (usually the current path)
     *
     * @param {String} Route
     * @return {self} Request 
     */
    function Request(route) {
        this.route = route;
        this.keys = [];
        this.regex = Grapnel.regexRoute(route, this.keys);
    };
    // This allows global middleware
    CallStack.global = [];
    /**
     * Prevent a callback from being called
     *
     * @return {self} CallStack 
     */
    CallStack.prototype.preventDefault = function() {
        this.runCallback = false;
    };
    /**
     * Prevent any future callbacks from being called
     *
     * @return {self} CallStack 
     */
    CallStack.prototype.stopPropagation = function() {
        this.propagateEvent = false;
    };
    /**
     * Get parent state
     *
     * @return {Object} Previous state 
     */
    CallStack.prototype.parent = function() {
        var hasParentEvents = !!(this.previousState && this.previousState.value && this.previousState.value == this.value);
        return (hasParentEvents) ? this.previousState : false;
    };
    /**
     * Run a callback (calls to next)
     *
     * @return {self} CallStack 
     */
    CallStack.prototype.callback = function() {
        this.callbackRan = true;
        this.timeStamp = Date.now();
        this.next();
    };
    /**
     * Add handler or middleware to the stack
     *
     * @param {Function|Array} Handler or a array of handlers
     * @param {Int} Index to start inserting
     * @return {self} CallStack 
     */
    CallStack.prototype.enqueue = function(handler, atIndex) {
        var handlers = (!Array.isArray(handler)) ? [handler] : ((atIndex < handler.length) ? handler.reverse() : handler);

        while (handlers.length) {
            this.stack.splice(atIndex || this.stack.length + 1, 0, handlers.shift());
        }

        return this;
    };
    /**
     * Call to next item in stack -- this adds the `req`, `event`, and `next()` arguments to all middleware
     *
     * @return {self} CallStack 
     */
    CallStack.prototype.next = function() {
        var self = this;

        return this.stack.shift().call(this.router, this.req, this, function next() {
            self.next.call(self);
        });
    };
    /**
     * Match a path string -- returns a request object if there is a match -- returns false otherwise
     *
     * @return {Object} req
     */
    Request.prototype.parse = function(path) {
        var match = path.match(this.regex),
            self = this;

        var req = {
            params: {},
            keys: this.keys,
            matches: (match || []).slice(1),
            match: match
        };
        // Build parameters
        Grapnel._forEach(req.matches, function(value, i) {
            var key = (self.keys[i] && self.keys[i].name) ? self.keys[i].name : i;
            // Parameter key will be its key or the iteration index. This is useful if a wildcard (*) is matched
            req.params[key] = (value) ? decodeURIComponent(value) : undefined;
        });

        return req;
    };

    // Append utility constructors to Grapnel
    Grapnel.CallStack = CallStack;
    Grapnel.Request = Request;

    if ('function' === typeof root.define && !root.define.amd.grapnel) {
        root.define(function(require, exports, module) {
            root.define.amd.grapnel = true;
            return Grapnel;
        });
    } else if ('object' === typeof module && 'object' === typeof module.exports) {
        module.exports = exports = Grapnel;
    } else {
        root.Grapnel = Grapnel;
    }

}).call({}, ('object' === typeof window) ? window : this);
/*

var router = new Grapnel({ pushState : true, hashBang : true });

router.get('/products/:category/:id?', function(req){
    var id = req.params.id,
        category = req.params.category

    console.log(category, id);
});

router.get('/tiempo', function(req){
    console.log("tiempo!");
     $("#matikbirdpath").load("views/rooms.html", function(res){
                console.log(res);
                console.log("hola");
            });
});
router.get('/', function(req){
    console.log(req.user);
    console.log("hola!");
    $("#matikbirdpath").load("views/rooms.html", function(res){
                console.log(res);
                console.log("hola");
            });
});

router.navigate('/');
*/
var routes = {
    '/' : function(req, e){

        $("#matikbirdpath").load("views/main.html", function(res){
                
                NProgress.done();
            });
    },
        '/preferencias' : function(req, e){
          console.log("Preferencias")
        quantum.getSession(function (err, response) {
  if (err) {
     $("#matikbirdpath").load("views/errorsession.html", function(res){
                
                NProgress.done();
            });
  } else if (!response.userCtx.name) {
     $("#matikbirdpath").load("views/errorsession.html", function(res){
                
                NProgress.done();
            });
  } else {
    $("#matikbirdpath").load("views/preferencias.html", function(res){
                
                NProgress.done();
            });
  }
});
        
    },
    '/dashboard' : function(req, e){
        quantum.getSession(function (err, response) {
  if (err) {
     $("#matikbirdpath").load("views/errorsession.html", function(res){
                
                NProgress.done();
            });
  } else if (!response.userCtx.name) {
     $("#matikbirdpath").load("views/errorsession.html", function(res){
                
                NProgress.done();
            });
  } else {
    $("#matikbirdpath").load("views/dashboard.html", function(res){
                
                NProgress.done();
            });
  }
});
        
    },
        '/comprar' : function(req, e){
        quantum.getSession(function (err, response) {
  if (err) {
     $("#matikbirdpath").load("views/errorsession.html", function(res){
                
                NProgress.done();
            });
  } else if (!response.userCtx.name) {
     $("#matikbirdpath").load("views/errorsession.html", function(res){
                
                NProgress.done();
            });
  } else {


        $('.modal').addClass('modal-is-active');
     $('.webblur').addClass('webblur-is-blurred');
    $(".modal").load("views/comprar.html", function(res){
    
                NProgress.done();
            }); 
  }
});
        
    },
    '/chat' : function(req, e){
        quantum.getSession(function (err, response) {
  if (err) {
     $("#matikbirdpath").load("views/errorsession.html", function(res){
                
                NProgress.done();
            });
  } else if (!response.userCtx.name) {
     $("#matikbirdpath").load("views/errorsession.html", function(res){
                
                NProgress.done();
            });
  } else {
    $("#matikbirdpath").load("views/chat.html", function(res){
                
                NProgress.done();
            });
  }
});
        
    },
    '/calendario' : function(req, e){
        $("#matikbirdpath").load("views/calendario.html", function(res){
                console.log(res);
                console.log("hola");
            });
    },
    '/explorar' : function(req, e){
        $("#matikbirdpath").load("views/explore.html", function(res){
                console.log(res);
                console.log("hola");
            });
    },
    '/tyc' : function(req, e){
        $("#matikbirdpath").load("views/tyc.html", function(res){
                console.log(res);
                console.log("hola");
            });
    },
    '/priv' : function(req, e){
        $("#matikbirdpath").load("views/priv.html", function(res){
                console.log(res);
                console.log("hola");
            });
    },
    '/faq' : function(req, e){
        $("#matikbirdpath").load("views/faq.html", function(res){
                console.log(res);
                console.log("hola");
            });
    },
        '/zero' : function(req, e){
        $("#matikbirdpath").load("views/zerobooks.html", function(res){
                console.log("hola");
            });
    },
    '/buscar' : function(req, e){
        // Handle route
        console.log("Buscar:");
        console.log(req);
        console.log(e);
        $('.modal').addClass('modal-is-active');
     $('.webblur').addClass('webblur-is-blurred');
    if ($('#matikbirdpath').is(':empty')){
   $("#matikbirdpath").load("views/main.html", function(res){

                $('.modal').load('views/buscar.html');
                NProgress.done();
            }); 
} else { $('.modal').load('views/buscar.html');
                NProgress.done(); }
           
    },
    '/categoria/:id' : function(req, e){
        // Handle route
    },
    '/*' : function(req, e){
        NProgress.start();
        if(!e.parent()){
        $("#matikbirdpath").load("views/main.html", function(res){
                NProgress.done();
            });
    
        } else {
            NProgress.done();
        }
    }
}

var router = Grapnel.listen({ pushState : true, hashBang: true }, routes);
// Get Color Attribute
// Set the background book color
/*$("li.book-item").each(function() {
  var $this = $(this);

  $this.find(".bk-front > div").css('background-color', $(this).data("color"));
  $this.find(".bk-left").css('background-color', $(this).data("color"));
  $this.find(".back-color").css('background-color', $(this).data("color"));

  $this.find(".item-details a.button").on('click', function() {
    displayBookDetails($this);
  });
});

function displayBookDetails(el) {
  var $this = $(el);
  $('.main-container').addClass('prevent-scroll');
  $('.main-overlay').fadeIn();

  $this.find('.overlay-details').clone().prependTo('.main-overlay');

  $('a.close-overlay-btn').on('click', function(e) {
    e.preventDefault();
    $('.main-container').removeClass('prevent-scroll');
    $('.main-overlay').fadeOut();
    $('.main-overlay').find('.overlay-details').remove();
  });

  $('.main-overlay a.preview').on('click', function() {
    $('.main-overlay .overlay-desc').toggleClass('activated');
    $('.main-overlay .overlay-preview').toggleClass('activated');
  });

  $('.main-overlay a.back-preview-btn').on('click', function() {
    $('.main-overlay .overlay-desc').toggleClass('activated');
    $('.main-overlay .overlay-preview').toggleClass('activated');
  });
}



// Initiate Shuffle.js
var Shuffle = window.shuffle;

var bookList = function(element) {
  this.element = element;

  this.shuffle = new Shuffle(element, {
    itemSelector: '.book-item',
  });

  this._activeFilters = [];
  this.addFilterButtons();
  this.addSorting();
  this.addSearchFilter();
  this.mode = 'exclusive';
};

bookList.prototype.toArray = function(arrayLike) {
  return Array.prototype.slice.call(arrayLike);
};

// Catagory Filter Functions
// Toggle mode for the Catagory filters
bookList.prototype.toggleMode = function() {
  if (this.mode === 'additive') {
    this.mode = 'exclusive';
  } else {
    this.mode = 'additive';
  }
};

// Filter buttons eventlisteners
bookList.prototype.addFilterButtons = function() {
  var options = document.querySelector('.filter-options');
  if (!options) {
    return;
  }
  var filterButtons = this.toArray(options.children);

  filterButtons.forEach(function(button) {
    button.addEventListener('click', this._handleFilterClick.bind(this), false);
  }, this);
};

// Function for the Catagory Filter
bookList.prototype._handleFilterClick = function(evt) {
  var btn = evt.currentTarget;
  var isActive = btn.classList.contains('active');
  var btnGroup = btn.getAttribute('data-group');

  if (this.mode === 'additive') {
    if (isActive) {
      this._activeFilters.splice(this._activeFilters.indexOf(btnGroup));
    } else {
      this._activeFilters.push(btnGroup);
    }

    btn.classList.toggle('active');
    this.shuffle.filter(this._activeFilters);

  } else {
    this._removeActiveClassFromChildren(btn.parentNode);

    var filterGroup;
    if (isActive) {
      btn.classList.remove('active');
      filterGroup = Shuffle.ALL_ITEMS;
    } else {
      btn.classList.add('active');
      filterGroup = btnGroup;
    }

    this.shuffle.filter(filterGroup);
  }
};

// Remove classes for active states
bookList.prototype._removeActiveClassFromChildren = function(parent) {
  var children = parent.children;
  for (var i = children.length - 1; i >= 0; i--) {
    children[i].classList.remove('active');
  }


};

// Sort By
// Watching for the select box to change to run
bookList.prototype.addSorting = function() {
  var menu = document.querySelector('.sort-options');
  if (!menu) {
    return;
  }
  menu.addEventListener('change', this._handleSortChange.bind(this));
};

// Sort By function Handler runs on change
bookList.prototype._handleSortChange = function(evt) {
  var value = evt.target.value;
  var options = {};

  function sortByDate(element) {
    return element.getAttribute('data-created');
  }

  function sortByTitle(element) {
    return element.getAttribute('data-title').toLowerCase();
  }

  if (value === 'date-created') {
    options = {
      reverse: true,
      by: sortByDate,
    };
  } else if (value === 'title') {
    options = {
      by: sortByTitle,
    };
  }

  this.shuffle.sort(options);
};

// Searching the Data-attribute Title
// Advanced filtering
// Waiting for input into the search field
bookList.prototype.addSearchFilter = function() {
  var searchInput = document.querySelector('.shuffle-search');
  if (!searchInput) {
    return;
  }
  searchInput.addEventListener('keyup', this._handleSearchKeyup.bind(this));
};

// Search function Handler to search list
bookList.prototype._handleSearchKeyup = function(evt) {
  var searchInput = document.querySelector('.shuffle-search');
  var searchText = evt.target.value.toLowerCase();

  // Check if Search input has value to toggle class
  if (searchInput && searchInput.value) {
    $('.catalog-search').addClass('input--filled');
  } else {
    $('.catalog-search').removeClass('input--filled');
  }

  this.shuffle.filter(function(element, shuffle) {

    // If there is a current filter applied, ignore elements that don't match it.
    if (shuffle.group !== Shuffle.ALL_ITEMS) {
      // Get the item's groups.
      var groups = JSON.parse(element.getAttribute('data-groups'));
      var isElementInCurrentGroup = groups.indexOf(shuffle.group) !== -1;

      // Only search elements in the current group
      if (!isElementInCurrentGroup) {
        return false;
      }
    }

    var titleElement = element.querySelector('.book-item_title');
    var titleText = titleElement.textContent.toLowerCase().trim();

    return titleText.indexOf(searchText) !== -1;
  });
};
*/
// Wait till dom load to start the Shuffle js funtionality

$(function(){

  
  $('.iniciarsesion').on('click', function(e){
    e.preventDefault();
        $('.grop-from').attr('id', 'name');
    $('.icon-action').addClass('back');
    if($(this).attr('id') == 'searchtoggl') {
      if(!$searchbar.is(":visible")) { 
        // if invisible we switch the icon to appear collapsable
        $searchlink.removeClass('fa-search').addClass('fa-search-minus');
      } else {
        // if visible we switch the icon to appear as a toggle
        $searchlink.removeClass('fa-search-minus').addClass('fa-search');
      }
      
      $searchbar.slideToggle(300, function(){
        // callback after search bar animation
      });
    }
  });
  
  $('#searchform').submit(function(e){
    e.preventDefault(); // stop form submission
  });
});


function toast(text)
{
    var container = $(document.createElement("div"));
    container.addClass("toast");
    
    var message = $(document.createElement("div"));
    message.addClass("message");
    message.text(text);
    message.appendTo(container);
    
    container.appendTo(document.body);
    console.log(text);
    container.delay(10).fadeIn("slow", function()
    {
        $(this).delay(2500).fadeOut("slow", function() { $(this).remove(); });
    });
}
  var $searchlink = $('.iniciarsesion');
  var $searchbar  = $('#searchbar');


     var routes = {
    '/' : function(req, e){

        $("#matikbirdpath").load("views/main.html", function(res){
                
                NProgress.done();
            });
    },
        '/preferencias' : function(req, e){
          console.log("Preferencias")
        quantum.getSession(function (err, response) {
  if (err) {
     $("#matikbirdpath").load("views/errorsession.html", function(res){
                
                NProgress.done();
            });
  } else if (!response.userCtx.name) {
     $("#matikbirdpath").load("views/errorsession.html", function(res){
                
                NProgress.done();
            });
  } else {
    $("#matikbirdpath").load("views/preferencias.html", function(res){
                
                NProgress.done();
            });
  }
});
        
    },
    '/dashboard' : function(req, e){
        quantum.getSession(function (err, response) {
  if (err) {
     $("#matikbirdpath").load("views/errorsession.html", function(res){
                
                NProgress.done();
            });
  } else if (!response.userCtx.name) {
     $("#matikbirdpath").load("views/errorsession.html", function(res){
                
                NProgress.done();
            });
  } else {
    $("#matikbirdpath").load("views/dashboard.html", function(res){
                
                NProgress.done();
            });
  }
});
        
    },
        '/comprar' : function(req, e){
        quantum.getSession(function (err, response) {
  if (err) {
     $("#matikbirdpath").load("views/errorsession.html", function(res){
                
                NProgress.done();
            });
  } else if (!response.userCtx.name) {
     $("#matikbirdpath").load("views/errorsession.html", function(res){
                
                NProgress.done();
            });
  } else {


        $('.modal').addClass('modal-is-active');
     $('.webblur').addClass('webblur-is-blurred');
    $(".modal").load("views/comprar.html", function(res){
    
                NProgress.done();
            }); 
  }
});
        
    },
    '/chat' : function(req, e){
        quantum.getSession(function (err, response) {
  if (err) {
     $("#matikbirdpath").load("views/errorsession.html", function(res){
                
                NProgress.done();
            });
  } else if (!response.userCtx.name) {
     $("#matikbirdpath").load("views/errorsession.html", function(res){
                
                NProgress.done();
            });
  } else {
    $("#matikbirdpath").load("views/chat.html", function(res){
                
                NProgress.done();
            });
  }
});
        
    },
    '/calendario' : function(req, e){
        $("#matikbirdpath").load("views/calendario.html", function(res){
                console.log(res);
                console.log("hola");
            });
    },
    '/explorar' : function(req, e){
        $("#matikbirdpath").load("views/explore.html", function(res){
                console.log(res);
                console.log("hola");
            });
    },
    '/tyc' : function(req, e){
        $("#matikbirdpath").load("views/tyc.html", function(res){
                console.log(res);
                console.log("hola");
            });
    },
    '/priv' : function(req, e){
        $("#matikbirdpath").load("views/priv.html", function(res){
                console.log(res);
                console.log("hola");
            });
    },
    '/faq' : function(req, e){
        $("#matikbirdpath").load("views/faq.html", function(res){
                console.log(res);
                console.log("hola");
            });
    },
        '/zero' : function(req, e){
        $("#matikbirdpath").load("views/zerobooks.html", function(res){
                console.log("hola");
            });
    },
    '/buscar' : function(req, e){
        // Handle route
        console.log("Buscar:");
        console.log(req);
        console.log(e);
        $('.modal').addClass('modal-is-active');
     $('.webblur').addClass('webblur-is-blurred');
    if ($('#matikbirdpath').is(':empty')){
   $("#matikbirdpath").load("views/main.html", function(res){

                $('.modal').load('views/buscar.html');
                NProgress.done();
            }); 
} else { $('.modal').load('views/buscar.html');
                NProgress.done(); }
           
    },
    '/categoria/:id' : function(req, e){
        // Handle route
    },
    '/*' : function(req, e){
    	NProgress.start();
    	dbleelocal.replicate.from(dblee).on('complete', function(info) {
  // then two-way, continuous, retriable sync

	console.log( textStatus );
       if(!e.parent()){
        $("#matikbirdpath").load("views/main.html", function(res){
                NProgress.done();
                fadeOutPageLoad();
            });
    
        } else {
            NProgress.done();
            fadeOutPageLoad();
        }


}).on('error', onSyncError);

        
     
    }
}


    var router = Grapnel.listen({ pushState : true, hashBang: true }, routes);

function onSyncChange(){
  toast("Hay nuevos cambios!<br>");
}
function onSyncPaused(){
  console.log("Sincronización pausada");
  toast("Replicación pausada");
}
function onSyncError(){
  console.log("Error en la sincronización");
  toast("Error en replicación");
  /*router.navigate('/zero');*/
  fadeOutPageLoad();
}



  
 var months = [
    'Ene', 'Feb', 'Mar', 'Abr', 'May',
    'Jun', 'Jul', 'Ago', 'Sep',
    'Oct', 'Nov', 'Dic'
    ];
    function monthNumToName(monthnum) {
    return months[monthnum - 1] || '';
}
function monthNameToNum(monthname) {
    var month = months.indexOf(monthname);
    return month ? month + 1 : 0;
}


// do one way, one-off sync from the server until completion



/*sync.cancel();*/
function errorsession() {
  $("#matikbirdpath").load("views/errorsession.html", function(res){
                console.log(res);
                console.log("error usuario iniciado");
            });
  toast('Usuario no iniciado')
}

function checkuserloginptopage(){
  toast('Chequeando...');
                  quantum.getSession(function (err, response) {
            
                    if (err) {
                      errorsession();
                    } else if (!response.userCtx.name) {
                      // nobody's logged in
                      errorsession();
                    } else {
                      // 
                      
                      quantum.getUser(response.userCtx.name, function (err, response) {
                          if (err) {
                            if (err.name === 'not_found') {
                              errorsession();

                            } else {
                              // some other error
                              errorsession();
                            }
                          } else {
                            console(response);
                      }
                        });
                     
                
                    }
                  });
}
function cerrarsession() {
	NProgress.start();
    quantum.logout(function (err, response) {
  if (err) {
    // network error
    NProgress.done()
    toast('Ocurrió un problema');
  } else {
    toast('Saliendo...');
location.reload();
  }
});
};
$('#signup .form-head , #signup .form-head .form-action').click(function (event) {
    $('.grop-from').attr('id', 'name');
    $('.icon-action').addClass('back');
});

function letsgoin(){ 
	
  var patr_dni = $('#control-dni').val(),
   patr_email = $('#control-email').val(), patr_phone = $('#control-phone').val(), patr_nombre = $('#control-nombre').val(), patr_password = $('#control-password').val(), patr_password_repeat = $('#control-password-repeat').val();
    var form_id = $('.grop-from').attr('id');
    $('.icon-action').addClass('back');
    var randomizeu = getCleanedString(patr_nombre)+"-"+generarid();
    if ($('#control-' + form_id).val() != '') {
        switch (form_id) {
        case 'name':
            if ($('#control-dni').val() != '') {
              toast('Comprobando DNI');
              NProgress.start();
              $.ajax({
                type: 'GET',
                url: 'https://quay.stream:3471/dni/'+patr_dni,
                dataType: 'json'
            }).done(function (response) {
             var exists = response;
              console.log(response);
              if(response != 0){
                $('#control-exists').val('1');
               form_id = 'password';
                $('.grop-from').attr('id', form_id);
                $('.icon-action').addClass('back');
                toast('Eres usuario (:');
                NProgress.done();
              } else {
                console.log("error auth!");
                form_id = 'nombre';
                $('.grop-from').attr('id', form_id);
                $('.icon-action').addClass('back');
                toast('No eres usuario. Únete!');
                NProgress.done();
              }
            }).fail(function (data) {
                toast('Error. Intenta más tarde.');
                NProgress.done();
            });
          } else {
            $('.grop-from').addClass('error');
                $('.error-text').fadeIn();
               setTimeout(function(){
                $('.grop-from').removeClass('error');
                $('.error-text').fadeOut();
              }, 2000);
          }
            break;
          case 'nombre':
            if ($('#control-nombre').val() != '') {
            form_id = 'email';
            $('.grop-from').attr('id', form_id);
            $('.icon-action').addClass('back');
           } else {
            $('.grop-from').addClass('error');
                $('.error-text').fadeIn();
               setTimeout(function(){
                $('.grop-from').removeClass('error');
                $('.error-text').fadeOut();
              }, 2000);
             }
            break;
        case 'email':
            if ($('#control-email').val() != '') {
            form_id = 'phone';
            $('.grop-from').attr('id', form_id);
            $('.icon-action').addClass('back');
           } else {
            $('.grop-from').addClass('error');
                $('.error-text').fadeIn();
               setTimeout(function(){
                $('.grop-from').removeClass('error');
                $('.error-text').fadeOut();
              }, 2000);
             }
            break;
        case 'phone':
        if ($('#control-phone').val() != '') {
            form_id = 'password';
            $('.grop-from').attr('id', form_id);
                $('.icon-action').addClass('back');
                } else {
            $('.grop-from').addClass('error');
                $('.error-text').fadeIn();
               setTimeout(function(){
                $('.grop-from').removeClass('error');
                $('.error-text').fadeOut();
              }, 2000);
          }
            break;
        case 'password':
        if ($('#control-password').val() != '') {
          
          console.log("aca!");
          console.log($('#control-exists').val())
        if($('#control-exists').val() != 0) {
            quantum.login($('#control-dni').val(), $('#control-password').val(), function (err, response) {
            	NProgress.start();
                if (err) {
                  if (err.name === 'unauthorized') {
                    toast('Clave incorrecta');
                    console.log(err);
                    NProgress.done();
                  } else {
                  	console.log("Error Sinit: ", err);
                    toast('Sesión ya iniciada.');
                    NProgress.done();
                  }
                } else {
                 

                  quantum.getSession(function (err, response) {
            
                    if (err) {
                        console.log(err);
                      console.log("error")
                      NProgress.done();
                      // network error
                    } else if (!response.userCtx.name) {
                      // nobody's logged in
                      NProgress.done();
                      
                    } else {
                      // 
                      
                      quantum.getUser(response.userCtx.name, function (err, response) {
                          if (err) {
                            console.log(err);
                            if (err.name === 'not_found') {
                            	NProgress.done();
                              console.log("// typo, or you don't have the privileges to see this user");
                            } else {
                              // some other error
                              NProgress.done();
                            }
                          } else {

                            form_id = 'success';
                      $('.grop-from').attr('id', form_id);
                       
               $('.close').delay(3000).click();
                     
                       			var avautor = response.nombre.substring(0, response.nombre.indexOf(' '));
		avautor += " ";

		avautor += response.nombre.substring(response.nombre.indexOf(' ') + 1);
		avautor = avautor.replace(/\W*(\w)\w*/g, '$1').toUpperCase();

                            toast('Bienvenido (:');
                            console.log(response);  // response is the user object
                             $('.form-action').fadeOut('slow').remove;
                             $('.form-head').html('Bienvenido, '+response.nombre);
                             $('.initbutton').fadeOut('slow');
                          $('.page-header-container').prepend('<div class="icons_wrapper"><ul class="clearfix"><li class="icon" style="height: 52px; margin-left: 7px;" onclick="f()" ><a><div class="menu"><div class="title"><p class="author" data-letters="'+avautor+'"></p><i class="fa fa-chevron-down"></i><div class="arrow"></div></div><div class="dropdown"><p onclick="router.navigate(\'/dashboard\')">Dashboard <span class="fa fa-dashboard"></span></p><p onclick="router.navigate(\'/preferencias\')">Opciones <span class="fa fa-gear"></span></p><p onclick="cerrarsession()">Cerrar sesión <span class="fa fa-sign-out"></span></p></div></div></a></li><li class="icon js-dropnotif" data-target="#notif-1"><a><i class="fa fa-globe"></i></a></li><div class="notiftip js-notiftip is-hidden" id="notif-1"><span class="notiftip__arrow js-notiftip__arrow"></span><div class="notiftip__content" aria-live="assertive"><h3 class="rainbow-text" style="margin: 0; padding:7px;border-bottom: 1px solid #d2cece;">Notificaciones</h3><div class="notiftip__scrollable"><div class="notice infonot"><p>Info.</p></div><div class="notice successnot"><p>Éxito.</p></div><div class="notice warningnot"><p>Advertencia.</p></div><div class="notice errornot"><p>Notificación error.</p></div></div><span class="js-notiftip__hidden-text visually-hidden"></span></div></div></ul></div>  ');
                      
$searchbar.slideToggle(300, function(){
        						NProgress.done();
     						 });
                      }
                        });
                     
                
                    } 
                  });
                }
              });
        } else {
          form_id = 'password-repeat';
          $('.grop-from').attr('id', form_id);
                $('.icon-action').addClass('back');
        }
            } else {
            $('.grop-from').addClass('error');
                $('.error-text').fadeIn();
               setTimeout(function(){
                $('.grop-from').removeClass('error');
                $('.error-text').fadeOut();
              }, 2000);
          } 
            break;
            case 'password-repeat':
            if ($('#control-password-repeat').val() != '') {
              if($('#control-password-repeat').val() == $('#control-password').val()){

                 quantum.signup(patr_dni, patr_password_repeat, {
                    metadata : {
                    	usuario: randomizeu,
                      nombre: patr_nombre,
                      email : patr_dni,
                      usuario: patr_dni,
                      phone : patr_phone,
                      email_verificado : '0',
                      usuario_verificado : '0'
                    }

                  }, function (err, response) {
                    if(err){
                        console.log(err);
                        toast('Ocurrió un problema');
                    } else {
                    upublic.put({
                		_id: patr_dni,
                		nombre: patr_nombre,
                      email : patr_dni,
                      usuario: randomizeu,
                      phone : patr_phone,
                      email_verificado : '0',
                      usuario_verificado : '0'
                	})
                      form_id = 'success';
                      $('.grop-from').attr('id', form_id);
                      $('.icon-action').addClass('back');
                                  quantum.login($('#control-dni').val(), $('#control-password').val(), function (err, response) {
                if (err) {
                  if (err.name === 'unauthorized') {
                    toast('Clave incorrecta');
                    console.log(err);
                  } else {
                    toast('Sesión iniciada.');
                  }
                } else {
                 
                
                  quantum.getSession(function (err, response) {

                    if (err) {
                        console.log(err);
                      console.log("error");
                      fadeOutPageLoad();
                      // network error
                    } else if (!response.userCtx.name) {
                      // nobody's logged in
                      fadeOutPageLoad();
                      
                    } else {
                      
                      quantum.getUser(response.userCtx.name, function (err, response) {
                          if (err) {
                            console.log(err);
                            if (err.name === 'not_found') {
                              console.log("// typo, or you don't have the privileges to see this user");
                            } else {
                              // some other error
                            }
                          } else {
                            form_id = 'success';
                      $('.grop-from').attr('id', form_id);

                            $('.close').delay(3000).click();
                           var avautor = response.nombre.substring(0, response.nombre.indexOf(' '));
		avautor += " ";

		avautor += response.nombre.substring(response.nombre.indexOf(' ') + 1);
		avautor = avautor.replace(/\W*(\w)\w*/g, '$1').toUpperCase();

                            toast('Bienvenido (:');
                            console.log(response);  // response is the user object
                             $('.form-action').fadeOut('slow').remove;
                             $('.form-head').html('Bienvenido, '+response.nombre);
                             $('.initbutton').fadeOut('slow');
                                               $('.page-header-container').prepend('<div class="icons_wrapper"><ul class="clearfix"><li class="icon" style="height: 52px; margin-left: 7px;" onclick="f()" ><a><div class="menu"><div class="title"><p class="author" data-letters="'+avautor+'"></p><i class="fa fa-chevron-down"></i><div class="arrow"></div></div><div class="dropdown"><p onclick="router.navigate(\'/dashboard\')">Dashboard <span class="fa fa-dashboard"></span></p><p onclick="router.navigate(\'/preferencias\')">Opciones <span class="fa fa-gear"></span></p><p onclick="cerrarsession()">Cerrar sesión <span class="fa fa-sign-out"></span></p></div></div></a></li><li class="icon js-dropnotif" data-target="#notif-1"><a><i class="fa fa-globe"></i></a></li><div class="notiftip js-notiftip is-hidden" id="notif-1"><span class="notiftip__arrow js-notiftip__arrow"></span><div class="notiftip__content" aria-live="assertive"><h3  class="rainbow-text" style="margin:0; padding:7px; border-bottom: 1px solid #d2cece;">Notificaciones</h3><div class="notiftip__scrollable"><div class="notice infonot"><p>Info.</p></div><div class="notice successnot"><p>Éxito.</p></div><div class="notice warningnot"><p>Advertencia.</p></div><div class="notice errornot"><p>Notificación error.</p></div></div><span class="js-notiftip__hidden-text visually-hidden"></span></div></ul></div></div>  ');
                         setTimeout(function(){
    notifon();
},1000);
                                                   $searchbar.slideToggle(300, function(){
        NProgress.done();
      });
                         }
                        });
                     
                
                    }
                  });
                }
              });




                    }
                  });
                console.log("passwords match!");
              } else {
                toast('Las claves no coinciden');
              }
            
            } else {
            $('.grop-from').addClass('error');
                $('.error-text').fadeIn();
               setTimeout(function(){
                $('.grop-from').removeClass('error');
                $('.error-text').fadeOut();
              }, 2000);
          }
            break;
        }
        
    } else {
        switch (form_id) {
        case 'name':
            form_id = 'signup';
            $('.icon-action').removeClass('back');
            break;
        case 'phone':
            form_id = 'email';
            break;
        case 'email':
            form_id = 'name';
            break;
        case 'password':
            form_id = 'phone';
            break;
        case 'password-repeat':
            form_id = 'password';
            break;
        }
        $('.icon-action').removeClass('back');
    }
    
};
$('input').keyup(function () {
    $('.grop-from').removeClass('error');
    $('.error-text').fadeOut();
    if ($(this).val() != '') {
        $('.icon-action').removeClass('back');
    } else {
        $('.icon-action').addClass('back');
    }
});
$(document).keypress(function(e) {

    if(e.which == 13) {
        letsgoin();
        return false;  
    }
});
function f() {
  document.getElementsByClassName('dropdown')[0].classList.toggle('down');
  document.getElementsByClassName('arrow')[0].classList.toggle('gone');
  if (document.getElementsByClassName('dropdown')[0].classList.contains('down')) {
    setTimeout(function() {
      document.getElementsByClassName('dropdown')[0].style.overflow = 'visible'
    }, 500)
  } else {
    document.getElementsByClassName('dropdown')[0].style.overflow = 'hidden'
  }
}

var userobject = null;
  quantum.getSession(function (err, response) {
   if (!response.userCtx.name) {
                     fadeOutPageLoad();
                    } else {
                      // 
                      
                      quantum.getUser(response.userCtx.name, function (err, response) {
                          if (err) {
                            console.log(err);
                            if (err.name === 'not_found') {
                              console.log("// typo, or you don't have the privileges to see this user");
                         	
                            } 
                          } else {
                           
       form_id = 'success';
                      $('.grop-from').attr('id', form_id);
                       			var avautor = response.nombre.substring(0, response.nombre.indexOf(' '));
		avautor += " ";

		avautor += response.nombre.substring(response.nombre.indexOf(' ') + 1);
		avautor = avautor.replace(/\W*(\w)\w*/g, '$1').toUpperCase();

                            toast('Bienvenido (:');
                            console.log(response);  // response is the user object
                             $('.form-action').fadeOut('slow').remove;
                             $('.form-head').html('Bienvenido, '+response.nombre);
                             $('.initbutton').fadeOut('slow');
                                                 $('.page-header-container').prepend('<div class="icons_wrapper"><ul class="clearfix"><li class="icon" style="height: 52px; margin-left: 7px;" onclick="f()" ><a><div class="menu"><div class="title"><p class="author" data-letters="'+avautor+'"></p><i class="fa fa-chevron-down"></i><div class="arrow"></div></div><div class="dropdown"><p onclick="router.navigate(\'/dashboard\')">Dashboard <span class="fa fa-dashboard"></span></p><p onclick="router.navigate(\'/preferencias\')">Opciones <span class="fa fa-gear"></span></p><p onclick="cerrarsession()">Cerrar sesión <span class="fa fa-sign-out"></span></p></div></div></a></li><li class="icon js-dropnotif" data-target="#notif-1"><a><i class="fa fa-globe"></i></a></li><div class="notiftip js-notiftip is-hidden" id="notif-1"><span class="notiftip__arrow js-notiftip__arrow"></span><div class="notiftip__content" aria-live="assertive"><h3 class="rainbow-text" style="margin:0;padding:7px;border-bottom: 1px solid #d2cece;">Notificaciones</h3><div class="notiftip__scrollable"><div class="notice infonot"><p>Info.</p></div><div class="notice successnot"><p>Éxito.</p></div><div class="notice warningnot"><p>Advertencia.</p></div><div class="notice errornot"><p>Notificación error.</p></div></div><span class="js-notiftip__hidden-text visually-hidden"></span></div></div></ul></div>  ');
                            setTimeout(function(){
    notifon();
},1000);
                                                               $('.searchbar').fadeOut('slow');
                              

                    } }); }  
}); 






$('document').ready(function(){
  $('#buttonblur').on('click', function(){
     $('.modal').addClass('modal-is-active');
     $('.webblur').addClass('webblur-is-blurred');
  });
  
 if($('.modal').hasClass('modal-is-active'))
        {
    $('body').css('overflow','hidden');
    $('.svgs').css('display','none');
  }
});



function cerrarmodal(){
        if($('.modal').hasClass('modal-is-active'))
        {
         $('.modal').removeClass('modal-is-active');
         $('.webblur').removeClass('webblur-is-blurred');
         $('.modal').html('');
        }
    }  


function todaydate(){
  var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = dd + '/' + mm + '/' + yyyy;
return today;
}



/* dblee.createIndex({
  index: {
    fields: ['_id', 'dni', 'preventas', 'price_unity', 'publish', 'title', 'chapter']
  }
}).then(function (result) {
  console.log("creando index para busquedas");
  console.log(result);
}).catch(function (err) {
  console.log(err);
}); */
// funciones CopyLee


function audiotext(element){
	var utterance = new window.SpeechSynthesisUtterance();
    utterance.volume = 1;
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.lang = 'en-US';


        var words = new SpeechSynthesisUtterance( $(element).text() );
        speechSynthesis.speak(words);

  
}

function showbook(id){
	var color;
	dbleelocal.get(id, {attachments: true}).then(function (doc) {
		



  		upublic.get(doc.autor).then(function (user) {
		console.log(doc);
		console.log("USUARIO: ", user);
		var avautor = user.nombre.substring(0, user.nombre.indexOf(' '));
		avautor += " ";

		avautor += user.nombre.substring(user.nombre.indexOf(' ') + 1);
		avautor = avautor.replace(/\W*(\w)\w*/g, '$1').toUpperCase();
		if(doc.colors){
			color = doc.colors;
			$('<div class="overlay-details elementrainbowtop"><a href="#" class="close-overlay-btn">Cerrar</a><div class="overlay-image"><img class="imgbook" src="data:'+doc._attachments.portada.content_type+';base64,'+doc._attachments.portada.data+'" alt="Portada Libro"><div class="back-color" style="background-color: #'+doc.colors[2].hex+'"></div></div><div class="overlay-desc activated"><h2 class="overlay-title">'+doc.title+'</h2><p class="author" data-letters="'+avautor+'">'+user.nombre+'</p><div class="stat-bar"><div class="following"><span class="stat-name">Compras</span><span class="stat-number">'+doc.compras+'</span></div><div class="followers"><span class="stat-name">Meta</span><span class="stat-number">30</span></div><div class="posts"><span class="stat-name">Finaliza</span><span class="stat-number">'+doc.time_limit+'</span></div></div><div class="synopsis">'+doc.descripcion+'</div><a href="#" class="btnpapel paper paper-raise" style="float:left; width: unset; background-color: #45e751; color: #0b2a0a;" onclick="addlibro(\''+doc._id +'\', \''+doc.title +'\', \''+doc.price_unity +'\')"><i class="fa fa-plus"></i> Comprar</a><a href="#" style="float: left; width:unset; margin-left:7px; background-color: #5f81a2; color: #121930;" class="btnpapel preview paper paper-curl-right"><i class="fa fa-angle-double-down"></i> Vista previa</a> <i class="audiodesc fa fa-volume-up fa-2x" onclick="audiotext(\'.synopsis\')"></i></div><div class="overlay-preview"><a href="#" class="back-preview-btn">Volver</a><h4 class="preview-title">Vista previa</h4><div class="preview-content"><h5>Capítulo 1 - <i class="fa fa-volume-up fa-2x" onclick="audiotext(\'.preview-content\')"></i></h5>'+doc.chapter+'</div></div></div>').prependTo('.main-overlay');

		} else {
			$('<div class="overlay-details elementrainbowtop"><a href="#" class="close-overlay-btn">Cerrar</a><div class="overlay-image"><img class="imgbook" src="data:'+doc._attachments.portada.content_type+';base64,'+doc._attachments.portada.data+'" alt="Portada Libro"><div class="back-color"></div></div><div class="overlay-desc activated"><h2 class="overlay-title">'+doc.title+'</h2><p class="author" data-letters="'+avautor+'">'+user.nombre+'</p>  <div class="stat-bar"><div class="following"><span class="stat-name">Compras</span><span class="stat-number">'+doc.compras+'</span></div><div class="followers"><span class="stat-name">Meta</span><span class="stat-number">30</span></div><div class="posts"><span class="stat-name">Finaliza</span><span class="stat-number">'+doc.time_limit+'</span></div></div><div class="synopsis">'+doc.descripcion+'</div><a href="#" class="btnpapel paper paper-raise" style="float:left; width: unset; background-color: #45e751; color: #0b2a0a;" onclick="addlibro(\''+doc._id +'\', \''+doc.title +'\', \''+doc.price_unity +'\')"><i class="fa fa-plus"></i> Comprar</a><a href="#" style="float: left; width:unset; margin-left:7px; background-color: #5f81a2; color: #121930;" class="btnpapel preview paper paper-curl-right"><i class="fa fa-angle-double-down"></i> Vista previa</a> <i class="audiodesc fa fa-volume-up fa-2x" onclick="audiotext(\'.synopsis\')"></i> </div><div class="overlay-preview"><a href="#" class="back-preview-btn">Volver</a><h4 class="preview-title">Vista previa</h4><div class="preview-content"><h5>Capítulo 1 - <i class="fa fa-volume-up fa-2x" onclick="audiotext(\'.preview-content\')"></i></h5>'+doc.chapter+'</div></div></div>').prependTo('.main-overlay');

		}

		$('.main-container').addClass('prevent-scroll');
  $('.main-overlay').fadeIn();


  $('a.close-overlay-btn').on('click', function(e) {
    e.preventDefault();
    $('.main-container').removeClass('prevent-scroll');
    $('.main-overlay').fadeOut();
    $('.main-overlay').find('.overlay-details').remove();
  });

  $('.main-overlay a.preview').on('click', function() {
    $('.main-overlay .overlay-desc').toggleClass('activated');
    $('.main-overlay .overlay-preview').toggleClass('activated');
  });

  $('.main-overlay a.back-preview-btn').on('click', function() {
    $('.main-overlay .overlay-desc').toggleClass('activated');
    $('.main-overlay .overlay-preview').toggleClass('activated');
  });
	});
});
  }

  /* FLEX MASONRY */
  function guid() {
  function s4() {
    return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);
  }
  return 'g'+s4()+s4()+'-'+s4()+'-'+s4()+'-'+s4()+'-'+s4()+s4()+s4();
}

var MediaQuery = function(minWidth, columnCount) {
  return {
    matchMedia: window.matchMedia('(min-width:'+minWidth+'px)'),
    matches: function() {
      return this.matchMedia.matches;
    },
    columns: columnCount
  };
};

var Masonry = function(guid) {
  this.masonry = document.querySelector('#' + guid);
  this.mediaQueries = [];
  
  this.addMediaQuery = function(minWidth, columnCount) {
    this.mediaQueries.push(new MediaQuery(minWidth, columnCount));
  };
  
  this.supposedColumns = function() {
    var cols = 1;
    for (var m = 0; m < this.mediaQueries.length; m++) {
      var mq = this.mediaQueries[m];
      if (mq.matches()) {
        cols = mq.columns;
      }
    }
    return cols;
  };
  
  this.setColumns = function(columnCount) {
    this.saveArticles();
    var currentColumns = this.masonry.querySelectorAll('.colum');
    this.masonry.dataset.cols = columnCount;
    if (currentColumns.length > columnCount) {
      for (var c = 0; c < currentColumns.length; c++) {
         if (c + 1 > columnCount) {
           currentColumns[c].remove();
         }
      }
    } else if (currentColumns.length < columnCount) {
      for (var c = currentColumns.length; c < columnCount; c++) {
        var newCol = document.createElement('div');
        newCol.classList.add('colum');
        newCol.classList.add('colum-' + (c+1));
        this.masonry.appendChild(newCol);
      }
    } else {
      return;
    }
    this.fillArticles();
  };
  
  this.addToColumn = function(columnIndex, element) {
    var col = this.masonry.querySelector('.colum-' + columnIndex);
    col = col === null ? this.masonry.querySelector('.colum') : col;
    col.appendChild(element);
  };
  
  this.saveArticles = function() {
    var articles = this.masonry.querySelectorAll('article');
    for (var a = 0; a < articles.length; a++) {
      this.masonry.appendChild(articles[a]);
    }
  };
  
  this.fillArticles = function() {
    var articles = this.masonry.querySelectorAll('article');
    var lastCol = 0;
    for (var a = 0; a < articles.length; a++) {
      lastCol++;
      this.addToColumn(lastCol, articles[a]);
      if (lastCol == this.supposedColumns()) {
        lastCol = 0;
      }
    }
  };
  
  this.update = function() {
    if (this.supposedColumns() === this.masonry.dataset.cols) {
      return;
    }
 		this.setColumns(this.supposedColumns());
    this.fillArticles();
  };
  
  var breakpoints = this.masonry.dataset.breakpoints.split(',');
  var points = [], desiredCol = [];
  for (var b = 0; b < breakpoints.length; b++) {
    var breakpoint = breakpoints[b].split(':');
    this.addMediaQuery(breakpoint[0],breakpoint[1]);
  }
  
  console.debug('Masonry created with mediq queries:');
  console.debug(this.mediaQueries);
};

var FlexboxMasonry = {
  flexIt: function(masonry) {
    masonry.id = guid();
    var m = new Masonry(masonry.id);
    var columnOne = document.createElement('div');
    columnOne.classList.add('colum');
    columnOne.classList.add('colum-1');
    masonry.appendChild(columnOne);
    
    window.addEventListener('resize', function() {
        m.update();
    }, false);
    
    m.update();
  },
  run: function() {
    var masonries = document.querySelectorAll('.flexbox-masonry');
    for (var i = 0; i < masonries.length; i++) {
      var masonry = masonries[i];
      this.flexIt(masonry);
    }
  }
};
/* uso: FlexboxMasonry.run(); */


function getBrowserId () {

    var
        aKeys = ["MSIE", "Firefox", "Safari", "Chrome", "Opera"],
        sUsrAg = navigator.userAgent, nIdx = aKeys.length - 1;

    for (nIdx; nIdx > -1 && sUsrAg.indexOf(aKeys[nIdx]) === -1; nIdx--);

    return nIdx

}

  /* SHOP - PAYMENTS */
function abrirshop(){

    if( $('.cart-wrapper').is(':visible') ) {
        $('.cart-wrapper').animate({ 'width': '0%' }, 'slow', function(){
            $('.cart-wrapper').hide();
        });
       /* $('.cart-panel').animate({ 'margin-left': '0px' }, 'slow');*/
    }
    else {
        
        $('.cart-wrapper').animate({ 'width': '100%' }, 'slow', function(){
        	$('.cart-wrapper').show();
        	 });
       /* $('.cart-wrapper').animate({ 'margin-left': '0' }, 'slow');*/
    }

}


  var cart = {items:[],total:''};
   var comprador = ""
  //Add to cart

 

 
  	quantum.getSession(function (err, response) {
            console.log("GO");
                    if (err) {
                        console.log(err);
                      console.log("error")
                      // network error
                    } if (!response.userCtx.name) {
                    	if(localStorage.getItem('user_unk')) {
							  comprador = localStorage.getItem('user_unk');
							} else {
								localStorage.setItem('user_unk', generarid());
							  comprador = localStorage.getItem('user_unk');
							}

                    	console.log("NADIE ESTA LOGEADO");
                      	compras.createIndex({
                                     "type": "json", 
                                      "name": "mis-compras", 
                                      index: {
                                          fields: ['comprador']
                                      }
                                  }).then(function (result) {
                                      console.log(result);


                                  }).catch(function (err) {
                                      console.log(err);
                                  });
                         
                                  compras.find({
                                      selector: { comprador: { $eq: comprador } }
                                      //,      use_index: 'indexFoo'
                                  }).then(function (result) {      
                                 
                                      //console.log('find - result ' + result);
                                     /* console.log(JSON.stringify(result));*/
                                     console.log("Resultado COMPRAS");
                                      console.log(result);
                                      if(result.docs.length > 0){
                                      	$.extend(cart.items, result.docs);
					     	     console.log(cart);
					     	     updateCart(cart);
                                      } else {
                                      	console.log("CARRITO VACIO");
                                        /* CARRITO VACIO */
                                        updateCart(cart);
                                      }
                                     // console.log('JSON' + JSON.stringify(result, undefined, 2));
                                  
                                  }).catch(function (err) {
                                      console.log(err);
                                  });
                      
                      
                    } else {
                      // 
                      console.log("USER IN");
                      quantum.getUser(response.userCtx.name, function (err, response) {
                          if (err) {
                            console.log(err);
                            if (err.name === 'not_found') {
                              console.log("// typo, or you don't have the privileges to see this user");
                            } else {
                              // some other error
                            }

                          } else {


                            console.log(response);  // response is the user object
                            comprador = response.name;
                            
                                  var tmp = new Date().toISOString();
                                  //console.log('new Date() ' + tmp);

                                  compras.createIndex({
                                     "type": "json", 
                                      "name": "mis-compras", 
                                      index: {
                                          fields: ['comprador']
                                      }
                                  }).then(function (result) {
                                      console.log(result);


                                  }).catch(function (err) {
                                      console.log(err);
                                  });
                         
                                  compras.find({
                                      selector: { comprador: { $eq: response.name } },
                                      sort: ['comprador']
                                      //,      use_index: 'indexFoo'
                                  }).then(function (result) {      
                                 
                                      //console.log('find - result ' + result);
                                     /* console.log(JSON.stringify(result));*/
                                     console.log("Resultado COMPRAS");
                                      console.log(result);
                                      if(result.docs.length > 0){
                                      	$.extend(cart.items, result.docs);
					     	     console.log(cart);
					     	     updateCart(cart);
                                      } else {
                                        /* CARRITO VACIO */
                                        updateCart(cart);
                                      }
                                     // console.log('JSON' + JSON.stringify(result, undefined, 2));
                                  
                                  }).catch(function (err) {
                                      console.log(err);
                                  });
                              
               
                      }
                        });
                     
                
                    }
                  });


  var addToCart = function(product,qty){
  	console.log("FUNCTION ADDCART");
  	console.log(product);
    qty = qty || 1;
    var cart = getCart();
    var indexOfId = cart.items.findIndex(x => x.id == product.id);
    console.log("COMPRADOR: ", comprador);
    if(indexOfId === -1){
    	var newid = generarid();

    	compras.put({
		  _id: "shop-"+newid,
		  id: "shop-"+product.id,
          title:product.title,
          price:product.price,
          img:product.img,
          qty: qty,
          comprador: comprador
		}).then(function (response) {
				  cart.items.push(
		        {
		        _id: "shop-"+newid,
		          id: "shop-"+product.id,
		          title:product.title,
		          price:product.price,
		          img:product.img,
		          qty: qty,
		          comprador: comprador
		        }); 
		}).catch(function (err) {
			console.log("error agregar");
		  console.log(err);
		});
           
    }else{
    	function myDeltaFunction(doc) {
  doc.qty = doc.qty || 1;
  doc.qty++;
  return doc;
}
       compras.upsert(product.id, myDeltaFunction).then(function (res) {
               console.log(res);
               cart.items[indexOfId].qty++;
      // success, res is {rev: '1-xxx', updated: true, id: 'myDocId'}
    }).catch(function (err) {
      console.log(err);
      toast("Ocurrió un error.");
    }); 
      
    }
    
    //Update popup cart
    updateCart(cart);
  }
  
 /* var getProductValues = function(element){
    var productId = $(element).parent().find('.libro-item').data('id');
    var productBook = $(element).parent().find('.libro-item').data('book');
    var productPrice = $(element).parent().find('.libro-item').data('precio');
    console.log($(element).parent().find('.libro-item'));
    return {id:productId,title:productBook,price:productPrice};
  }*/
 

  
  	
 /*  var product = getProductValues(this);
    addToCart({id:product.id,name:product.title,price:product.price}); */
 	function addlibro(id, title, price){
console.log("ADD LIBRO");

    dbleelocal.getAttachment(id, 'portada').then(function (blob){
                                            var url = URL.createObjectURL(blob);
                                         
    addToCart({id:id,title:title,price:price, img: url});
                                               
                                         		         }).catch(function(err){
                                            console.log(err);
                                            toast("Error shop. Reintenta.")
                                            console.log("agregando portada - shop");
                                          });

  }
  
  //Update cart html to reflect changes
  var updateCart = function(cart){
     var totalCost = 0;
     var totalCount = 0;
    
     //Add to shopping cart dropdown
     $('.shopping-cart-items').html('');
     for(var i =0; i < cart.items.length; i++){
       totalCost += (cart.items[i].qty * parseFloat(cart.items[i].price));
       totalCount += cart.items[i].qty;
       $('.empty-cart').fadeOut('slow');

       $('.shopping-cart-items').append('<li class="cart-list-item">'+
                 '<div class="cart-item-img" style="background-image: url('+cart.items[i].img+');"></div>'+
                  '<div class="cart-item">'+
                  '<div class="cart-item-quantity" style="float: right;padding-right: 8px;">'+
         '<i id="subtract-qty'+i+'" class="fa fa-minus update-qty subtract-qty" aria-hidden="true"></i><span> '+
         cart.items[i].qty+
         ' <i id="add-qty'+i+'" class="fa fa-plus update-qty add-qty" aria-hidden="true"></i></div>'+

                 '<div class="cart-item-favorites" style="float: right;padding-right: 8px;">'+
                      '<i class="fa fa-heart-o"></i>'+
                    '</div>'+
                    '<div class="cart-item-trash my-cart-remove-container" style="float: right;padding-right: 8px;">'+
                      '<i id="my-cart-remove'+i+'" class="fa fa-trash"></i>'+
                    '</div>'+
                    '<div class="cart-item-description">'+
                      '<span>'+
                        '<p class="cart-item-label">'+cart.items[i].title+'</p>'+
                        '<p class="cart-item-price">$'+cart.items[i].price+'</p>'+
                      '</span>'+
                      
                   ' </div>'+
            
                  '</div>'+
                '</li>'
       
       );
         
/*  '<li class="clearfix">'+
         '<div class="my-cart-item"><img src="'+cart.items[i].img+'">'+
         '<div><span>Titulo: </span>'+cart.items[i].title+'</div>'+
         '<div><span>Precio: </span> $ '+cart.items[i].price+'</div>'+
         '<div>Qty: </span>'+
         '<i id="subtract-qty'+i+'" class="fa fa-minus-square update-qty subtract-qty" aria-hidden="true"></i><span> '+
         cart.items[i].qty+
         ' <i id="add-qty'+i+'" class="fa fa-plus-square update-qty add-qty" aria-hidden="true"></i></div>'+
         '</div>'+
         '<div class="my-cart-remove-container">'+
         '<i id="my-cart-remove'+i+'" class="fa fa-times my-cart-remove" aria-hidden="true">'+
         '</div>'+
         '</i>'*/
       (function(){
         var currentIndex = i;
         $('#add-qty'+currentIndex).on('click',function(){
           updateQuantity(cart.items[currentIndex].id,++cart.items[currentIndex].qty);
         })
       })();

       (function(){
         var currentIndex = i;
         $('#subtract-qty'+currentIndex).on('click',function(){
           if(cart.items[currentIndex].qty != 1){           
             updateQuantity(cart.items[currentIndex].id,--cart.items[currentIndex].qty); 
           }
         });
       })();
       
       (function(){
         var currentIndex = i;
         $('#my-cart-remove'+currentIndex).on('click',function(){
           removeFromCart(cart.items[currentIndex].id);
         });
       })();
      }
    
      //Update Counter
      updateCounter(totalCount);

      //Update Total
      updateTotal(totalCost);
    }
  
  //Update cart quantity by id
  var updateQuantity = function(id,qty){
    var cart = getCart();
    var cartIndex = cart.items.findIndex(x => x.id == id);
    cart.items[cartIndex].qty = qty;
    //Update popup cart
    updateCart(cart);
  };
  
  //Remove from cart on id
  var removeFromCart = function(id){
    var cart = getCart();
    var cartIndex = cart.items.findIndex(x => x.id == id);
    
    cart.items.splice(cartIndex,1);
    //Update popup cart
    updateCart(cart);
  };
  
  //Get Cart
  var getCart = function(){
    var myCart = cart;
      return myCart;
  }
  
  //Update counter 
  var updateCounter = function(val){
    $('.my-cart-counter').html(val);
  }
  
  //Update total
  var updateTotal = function(val){
    $('.my-cart-total').html('$'+val.toFixed(2));
  }
  
  //Checkout to sandbox payment gateway
  var checkout = function(){
    
  };
   	updateCart(cart);
  //Listeners
  //Close popup on body click
  /*$('body').click(function(e){
     e.preventDefault();
     $(".shopping-cart").fadeOut( "fast");  
  });
  */
  
  //Toggle cart on icon click
  $(".my-cart-icon").on("click", function(e) {
    e.stopPropagation();
    $(".shopping-cart").fadeToggle( "fast"); 
  });
  
  //Prevent close on popup click
  $('.my-cart-popup').on('click', function(e){
     e.stopPropagation();
  });  
/* MercadoPago */



  function comprar(){

  	NProgress.start();
  	console.log(cart);
  	console.log("COMPRAR");
  	abrirshop();

  			$('.modal').addClass('modal-is-active');
     $('.webblur').addClass('webblur-is-blurred');
  	$(".modal").load("views/comprar.html", function(res){
 		
                NProgress.done();
            }); 
  }



/********************** chat *********************/

hideChat(0);

$('#prime').click(function() {
  toggleFab();
});


//Toggle chat and links
function toggleFab() {
  $('.prime').toggleClass('zmdi-comment-outline');
  $('.prime').toggleClass('zmdi-close');
  $('.prime').toggleClass('is-active');
  $('.prime').toggleClass('is-visible');
  $('#prime').toggleClass('is-float');
  $('.chat').toggleClass('is-visible');
  $('.fab').toggleClass('is-visible');
  
}

  $('#chat_first_screen').click(function(e) {
        hideChat(1);
  });

  $('#chat_second_screen').click(function(e) {
        hideChat(2);
  });

  $('#chat_third_screen').click(function(e) {
        hideChat(3);
  });

  $('#chat_fourth_screen').click(function(e) {
        hideChat(4);
  });

  $('#chat_fullscreen_loader').click(function(e) {
      $('.fullscreen').toggleClass('fa-window-maximize');
      $('.fullscreen').toggleClass('fa-window-restore');
      $('.chat').toggleClass('chat_fullscreen');
      $('.fab').toggleClass('is-hide');
      $('.img_container').toggleClass('change_img');
      $('.chat_header').toggleClass('chat_header2');
      $('.fab_field').toggleClass('fab_field2');
      $('.chat_converse').toggleClass('chat_converse2');
      //$('#chat_converse').css('display', 'none');
     // $('#chat_body').css('display', 'none');
     // $('#chat_form').css('display', 'none');
     // $('.chat_login').css('display', 'none');
      $('#chat_fullscreen').css('display', 'block');
  });

function hideChat(hide) {
    switch (hide) {
      case 0:
      	    $('#chat_converse').css('display', 'block');
            $('#chat_body').css('display', 'none');
            $('#chat_form').css('display', 'none');
            $('.chat_login').css('display', 'none');
            $('.chat_fullscreen_loader').css('display', 'block');
            break;
      case 1:
            $('#chat_converse').css('display', 'block');
            $('#chat_body').css('display', 'none');
            $('#chat_form').css('display', 'none');
            $('.chat_login').css('display', 'none');
            $('.chat_fullscreen_loader').css('display', 'block');
            break;
      case 2:
            $('#chat_converse').css('display', 'none');
            $('#chat_body').css('display', 'block');
            $('#chat_form').css('display', 'none');
            $('.chat_login').css('display', 'none');
            $('.chat_fullscreen_loader').css('display', 'block');
            break;
      case 3:
            $('#chat_converse').css('display', 'none');
            $('#chat_body').css('display', 'none');
            $('#chat_form').css('display', 'block');
            $('.chat_login').css('display', 'none');
            $('.chat_fullscreen_loader').css('display', 'block');
            break;
      case 4:
            $('#chat_converse').css('display', 'none');
            $('#chat_body').css('display', 'none');
            $('#chat_form').css('display', 'none');
            $('.chat_login').css('display', 'none');
            $('.chat_fullscreen_loader').css('display', 'block');
            $('#chat_fullscreen').css('display', 'block');
            break;
    }
}

var KEY_ENTER=13;
var socket;
var room = "room_one";
$(document).ready(function(){
/*

	
	socket = io.connect('https://quay.stream:2210');
	var dataloop = {};
	socket.on("displayMessage", function (data) {
		var num = $(".message_box").children("p").length;
		console.log(num);
		var dataparsed = JSON.parse(data);
			/*	var messageString = "<p>"+dataparsed.user+" -- "+dataparsed.msj+"</p>";
		 	$(".message_box").append(messageString);

		if (num >= 10) { $(".message_box").children("p:first").remove();}
		*//*
		if(dataparsed.user == comprador) 
		{addMessage(dataparsed.msj,true);} else {
			addMessage(dataparsed.msj,false);
		}
	});
	
	socket.on("clear_room", function(){
		$(".message_box").children("p").html("&nbsp;");
	});
	
	$(".submit_button").click(function(e){
		e.preventDefault();
		var message = $(".message_input").val();
		if (message != "") socket.emit("chatMessage", [room, comprador, message]);
		$(".message_input").val("");
	});
	
	$(".room_button").click(function(e){
		e.preventDefault();
		var old_room = room;
		window.room = $(this).data("room");
		var join_event = "join_"+room;
		socket.emit(join_event, [old_room, room]);
	});

	$('.chat-input').on('input',function(e){
		socket.emit("typing", comprador);
		});

		socket.on("typewrite", function (data) {
			console.log(data);

		if(data != comprador) 
		{
			console.log("DATA - COMPRADOR:  ", comprador)
			friendIsTyping() } 
	});
*/

	var $input=$(".chat-input")
		,$sendButton=$(".chat-send")
		,$messagesContainer=$(".chat-messages")
		,$messagesList=$(".chat-messages-list")
		,$effectContainer=$(".chat-effect-container")
		,$infoContainer=$(".chat-info-container")

		,messages=0
		,bleeding=100
		,isFriendTyping=false
		,incomingMessages=0
		,lastMessage=""
	;
	
	var lipsum="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

	function gooOn(){
		setFilter('url(#goo)');
	}
	function gooOff(){
		setFilter('none');
	}
	function setFilter(value){
		$effectContainer.css({
			webkitFilter:value,
			mozFilter:value,
			filter:value,
		});
	}

	function addMessage(message,self){
		var $messageContainer=$("<li/>")
			.addClass('chat-message '+(self?'chat-message-self':'chat-message-friend'))
			.appendTo($messagesList)
		;
		var $messageBubble=$("<div/>")
			.addClass('chat-message-bubble')
			.appendTo($messageContainer)
		;
		$messageBubble.text(message);

		var oldScroll=$messagesContainer.scrollTop();
		$messagesContainer.scrollTop(9999999);
		var newScroll=$messagesContainer.scrollTop();
		var scrollDiff=newScroll-oldScroll;
		TweenMax.fromTo(
			$messagesList,0.4,{
				y:scrollDiff
			},{
				y:0,
				ease:Quint.easeOut
			}
		);

		return {
			$container:$messageContainer,
			$bubble:$messageBubble
		};
	}
	function sendMessage(){
		var message=$input.text();
		
		if(message=="") return;
		
		lastMessage=message;

		var messageElements=addMessage(message,true)
			,$messageContainer=messageElements.$container
			,$messageBubble=messageElements.$bubble
		;

		var oldInputHeight=$(".chat-input-bar").height();
		$input.text('');
		updateChatHeight();
		var newInputHeight=$(".chat-input-bar").height();
		var inputHeightDiff=newInputHeight-oldInputHeight

		var $messageEffect=$("<div/>")
			.addClass('chat-message-effect')
			.append($messageBubble.clone())
			.appendTo($effectContainer)
			.css({
				left:$input.position().left-12,
				top:$input.position().top+bleeding+inputHeightDiff
			})
		;


		var messagePos=$messageBubble.offset();
		var effectPos=$messageEffect.offset();
		var pos={
			x:messagePos.left-effectPos.left,
			y:messagePos.top-effectPos.top
		}

		var $sendIcon=$sendButton.children("i");
		TweenMax.to(
			$sendIcon,0.15,{
				x:30,
				y:-30,
				force3D:true,
				ease:Quad.easeOut,
				onComplete:function(){
					TweenMax.fromTo(
						$sendIcon,0.15,{
							x:-30,
							y:30
						},
						{
							x:0,
							y:0,
							force3D:true,
							ease:Quad.easeOut
						}
					);
				}
			}
		);

		gooOn();

		
		TweenMax.from(
			$messageBubble,0.8,{
				y:-pos.y,
				ease:Sine.easeInOut,
				force3D:true
			}
		);

		var startingScroll=$messagesContainer.scrollTop();
		var curScrollDiff=0;
		var effectYTransition;
		var setEffectYTransition=function(dest,dur,ease){
			return TweenMax.to(
				$messageEffect,dur,{
					y:dest,
					ease:ease,
					force3D:true,
					onUpdate:function(){
						var curScroll=$messagesContainer.scrollTop();
						var scrollDiff=curScroll-startingScroll;
						if(scrollDiff>0){
							curScrollDiff+=scrollDiff;
							startingScroll=curScroll;

							var time=effectYTransition.time();
							effectYTransition.kill();
							effectYTransition=setEffectYTransition(pos.y-curScrollDiff,0.8-time,Sine.easeOut);
						}
					}
				}
			);
		}

		effectYTransition=setEffectYTransition(pos.y,0.8,Sine.easeInOut);
		
		// effectYTransition.updateTo({y:800});

		TweenMax.from(
			$messageBubble,0.6,{
				delay:0.2,
				x:-pos.x,
				ease:Quad.easeInOut,
				force3D:true
			}
		);
		TweenMax.to(
			$messageEffect,0.6,{
				delay:0.2,
				x:pos.x,
				ease:Quad.easeInOut,
				force3D:true
			}
		);

		TweenMax.from(
			$messageBubble,0.2,{
				delay:0.65,
				opacity:0,
				ease:Quad.easeInOut,
				onComplete:function(){
					TweenMax.killTweensOf($messageEffect);
					$messageEffect.remove();
					if(!isFriendTyping)
						gooOff();
				}
			}
		);

		messages++;

		if(Math.random()<0.65 || lastMessage.indexOf("?")>-1 || messages==1) getReply();
	}
	function getReply(){
		if(incomingMessages>2) return;
		incomingMessages++;
		var typeStartDelay=1000+(lastMessage.length*40)+(Math.random()*1000);
		setTimeout(friendIsTyping,typeStartDelay);

		var source=lipsum.toLowerCase();
		source=source.split(" ");
		var start=Math.round(Math.random()*(source.length-1));
		var length=Math.round(Math.random()*13)+1;
		var end=start+length;
		if(end>=source.length){
			end=source.length-1;
			length=end-start;
		}
		var message="";
		for (var i = 0; i < length; i++) {
			message+=source[start+i]+(i<length-1?" ":"");
		}
		message+=Math.random()<0.4?"?":"";
		message+=Math.random()<0.2?" :)":(Math.random()<0.2?" :(":"");

		var typeDelay=300+(message.length*50)+(Math.random()*1000);

		setTimeout(function(){
			receiveMessage(message);
		},typeDelay+typeStartDelay);

		setTimeout(function(){
			incomingMessages--;
			if(Math.random()<0.1){
				getReply();
			}
			if(incomingMessages<=0){
				friendStoppedTyping();
			}
		},typeDelay+typeStartDelay);
	}

	function friendIsTyping(){
		if(isFriendTyping) return;

		isFriendTyping=true;

		var $dots=$("<div/>")
			.addClass('chat-effect-dots')
			.css({
				top:-30+bleeding,
				left:10
			})
			.appendTo($effectContainer)
		;
		for (var i = 0; i < 3; i++) {
			var $dot=$("<div/>")
				.addClass("chat-effect-dot")
				.css({
					left:i*20
				})
				.appendTo($dots)
			;
			TweenMax.to($dot,0.3,{
				delay:-i*0.1,
				y:30,
				yoyo:true,
				repeat:-1,
				ease:Quad.easeInOut
			})
		}
		var $info=$("<div/>")
			.addClass("chat-info-typing")
			.text("Escribiendo...")
			.css({
				transform:"translate3d(0,30px,0)"
			})
			.appendTo($infoContainer)

		TweenMax.to($info, 0.3,{
			y:0,
			force3D:true
		});

		gooOn();
	}

	function friendStoppedTyping(){
		if(!isFriendTyping) return

		isFriendTyping=false;

		var $dots=$effectContainer.find(".chat-effect-dots");
		TweenMax.to($dots,0.3,{
			y:40,
			force3D:true,
			ease:Quad.easeIn,
		});

		var $info=$infoContainer.find(".chat-info-typing");
		TweenMax.to($info,0.3,{
			y:30,
			force3D:true,
			ease:Quad.easeIn,
			onComplete:function(){
				$dots.remove();
				$info.remove();

				gooOff();
			}
		});
	}
	function receiveMessage(message){
		var messageElements=addMessage(message,false)
			,$messageContainer=messageElements.$container
			,$messageBubble=messageElements.$bubble
		;

		TweenMax.set($messageBubble,{
			transformOrigin:"60px 50%"
		})
		TweenMax.from($messageBubble,0.4,{
			scale:0,
			force3D:true,
			ease:Back.easeOut
		})
		TweenMax.from($messageBubble,0.4,{
			x:-100,
			force3D:true,
			ease:Quint.easeOut
		})
	}

	function updateChatHeight(){
		/*$messagesContainer.css({
			height:460-$(".chat-input-bar").height()
		});*/
	}

	$input.keydown(function(event) {
		if(event.keyCode==KEY_ENTER){
			event.preventDefault();
			sendMessage();
		}
	});
	$sendButton.click(function(event){
		event.preventDefault();
		sendMessage();
		// $input.focus();
	});
	$sendButton.on("touchstart",function(event){
		event.preventDefault();
		sendMessage();
		// $input.focus();
	});

	$input.on("input",function(){
		updateChatHeight();
	});

	gooOff();
	updateChatHeight();
})
/**************** FIN CHAT ***********************/


/**************** CUSTOM SELECT *******************/
function initselect(){ $(".custom-select").each(function() {
  var classes = $(this).attr("class"),
      id      = $(this).attr("id"),
      name    = $(this).attr("name");
  var template =  '<div class="' + classes + '">';
      template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
      template += '<div class="custom-options">';
      $(this).find("option").each(function() {
        template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
      });
  template += '</div></div>';
  
  $(this).wrap('<div class="custom-select-wrapper"></div>');
  $(this).hide();
  $(this).after(template);
});
$(".custom-option:first-of-type").hover(function() {
  $(this).parents(".custom-options").addClass("option-hover");
}, function() {
  $(this).parents(".custom-options").removeClass("option-hover");
});
$(".custom-select-trigger").on("click", function() {
  $('html').one('click',function() {
    $(".custom-select").removeClass("opened");
  });
  $(this).parents(".custom-select").toggleClass("opened");
  event.stopPropagation();
});
$(".custom-option").on("click", function() {
  $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
  $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
  $(this).addClass("selection");
  $(this).parents(".custom-select").removeClass("opened");
  $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
});
}

function closeMessage(el) {
  el.addClass('is-hidden');
}

$('.js-messageClose').on('click', function(e) {
  closeMessage($(this).closest('.Message'));
});

$('#js-helpMe').on('click', function(e) {
  alert('Help you we will, young padawan');
  closeMessage($(this).closest('.Message'));
});

$('#js-authMe').on('click', function(e) {
  alert('Okelidokeli, requesting data transfer.');
  closeMessage($(this).closest('.Message'));
});

$('#js-showMe').on('click', function(e) {
  alert("You're off to our help section. See you later!");
  closeMessage($(this).closest('.Message'));
});

$(document).ready(function() {
  setTimeout(function() {
    closeMessage($('#js-timer'));
  }, 5000);

});

function cuentaregresiva(id, timelimit){
	console.log('FIRE COUNTDOWN');
	var time_limit = timelimit.split('/');

	$('.countdown'+id).countdown(time_limit[2]+'/'+time_limit[1]+'/'+time_limit[0], function(event) {
  var $this = $(this).html(event.strftime(''
 /*   + '<span>%w</span> sem '*/
    + '<span>%d</span> días '
    + '<span>%H</span> horas <br>'
    + '<span>%M</span> minutos '
    + '<span>%S</span> segundos'));
});
}

/* Check input changes */
function checkAnyFormFieldEdited() {
    /*
     * If any field is edited,then only it will enable Save button
     */
    $(':text').keypress(function(e) { // text written
        enableSaveBtn();
    });

    $(':text').keyup(function(e) {
        if (e.keyCode == 8 || e.keyCode == 46) { //backspace and delete key
            enableSaveBtn();
        } else { // rest ignore
            e.preventDefault();
        }
    });
    $(':text').bind('paste', function(e) { // text pasted
        enableSaveBtn();
    });

    $('select').change(function(e) { // select element changed
        enableSaveBtn();
    });

    $(':radio').change(function(e) { // radio changed
        enableSaveBtn();
    });

    $(':password').keypress(function(e) { // password written
        enableSaveBtn();
    });
    $(':password').bind('paste', function(e) { // password pasted
        enableSaveBtn();
    });

}


function getportadabyIdtoClass(idimg){
    dbleelocal.getAttachment(idimg, 'portada').then(function (blob){
                                            var url = URL.createObjectURL(blob);
                                            $('.'+idimg).css('background', 'url(\''+url+'\')').css('background-size', 'cover'); 
                                              $('.'+idimg).attr("src",url); 
                                          }).catch(function(err){
                                            console.log(err)
                                            console.log("agregando portada - err");
                                          });
}
/* END CHECK INPUT CHANGES */