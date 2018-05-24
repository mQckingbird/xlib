/* Interfaz de Usuario - Kit CopyLee */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Popper=t()}(this,function(){"use strict";function e(e){var t={};return e&&"[object Function]"===t.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var n=window.getComputedStyle(e,null);return t?n[t]:n}function n(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function o(e){if(!e||-1!==["HTML","BODY","#document"].indexOf(e.nodeName))return window.document.body;var r=t(e),i=r.overflow,f=r.overflowX,a=r.overflowY;return/(auto|scroll)/.test(i+a+f)?e:o(n(e))}function r(e){var t=e.nodeName;return"BODY"!==t&&("HTML"===t||e.firstElementChild.offsetParent===e)}function i(e){return null!==e.parentNode?i(e.parentNode):e}function f(e){var t=e&&e.offsetParent,n=t&&t.nodeName;return n&&"BODY"!==n&&"HTML"!==n?t:window.document.documentElement}function a(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return window.document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,o=n?e:t,s=n?t:e,p=document.createRange();p.setStart(o,0),p.setEnd(s,0);var u=p.commonAncestorContainer;if(e!==u&&t!==u||o.contains(s))return r(u)?u:f(u);var d=i(e);return d.host?a(d.host,t):a(e,i(t).host)}function s(e){var t="top"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",n=e.nodeName;if("BODY"===n||"HTML"===n){var o=window.document.documentElement;return(window.document.scrollingElement||o)[t]}return e[t]}function p(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=s(t,"top"),r=s(t,"left"),i=n?-1:1;return e.top+=o*i,e.bottom+=o*i,e.left+=r*i,e.right+=r*i,e}function u(e,t){var n="x"===t?"Left":"Top",o="Left"===n?"Right":"Bottom";return+e["border"+n+"Width"].split("px")[0]+ +e["border"+o+"Width"].split("px")[0]}function d(e,t,n,o){return Math.max(t["offset"+e],n["client"+e],n["offset"+e],Z()?n["offset"+e]+o["margin"+("Height"===e?"Top":"Left")]+o["margin"+("Height"===e?"Bottom":"Right")]:0)}function l(){var e=window.document.body,t=window.document.documentElement,n=Z()&&window.getComputedStyle(t);return{height:d("Height",e,t,n),width:d("Width",e,t,n)}}function c(e){return ne({},e,{right:e.left+e.width,bottom:e.top+e.height})}function h(e){var n={};if(Z())try{n=e.getBoundingClientRect();var o=s(e,"top"),r=s(e,"left");n.top+=o,n.left+=r,n.bottom+=o,n.right+=r}catch(e){}else n=e.getBoundingClientRect();var i={left:n.left,top:n.top,width:n.right-n.left,height:n.bottom-n.top},f="HTML"===e.nodeName?l():{},a=f.width||e.clientWidth||i.right-i.left,p=f.height||e.clientHeight||i.bottom-i.top,d=e.offsetWidth-a,h=e.offsetHeight-p;if(d||h){var m=t(e);d-=u(m,"x"),h-=u(m,"y"),i.width-=d,i.height-=h}return c(i)}function m(e,n){var r=Z(),i="HTML"===n.nodeName,f=h(e),a=h(n),s=o(e),u=t(n),d=+u.borderTopWidth.split("px")[0],l=+u.borderLeftWidth.split("px")[0],m=c({top:f.top-a.top-d,left:f.left-a.left-l,width:f.width,height:f.height});if(m.marginTop=0,m.marginLeft=0,!r&&i){var g=+u.marginTop.split("px")[0],v=+u.marginLeft.split("px")[0];m.top-=d-g,m.bottom-=d-g,m.left-=l-v,m.right-=l-v,m.marginTop=g,m.marginLeft=v}return(r?n.contains(s):n===s&&"BODY"!==s.nodeName)&&(m=p(m,n)),m}function g(e){var t=window.document.documentElement,n=m(e,t),o=Math.max(t.clientWidth,window.innerWidth||0),r=Math.max(t.clientHeight,window.innerHeight||0),i=s(t),f=s(t,"left");return c({top:i-n.top+n.marginTop,left:f-n.left+n.marginLeft,width:o,height:r})}function v(e){var o=e.nodeName;return"BODY"!==o&&"HTML"!==o&&("fixed"===t(e,"position")||v(n(e)))}function b(e,t,r,i){var f={top:0,left:0},s=a(e,t);if("viewport"===i)f=g(s);else{var p=void 0;"scrollParent"===i?"BODY"===(p=o(n(e))).nodeName&&(p=window.document.documentElement):p="window"===i?window.document.documentElement:i;var u=m(p,s);if("HTML"!==p.nodeName||v(s))f=u;else{var d=l(),c=d.height,h=d.width;f.top+=u.top-u.marginTop,f.bottom=c+u.top,f.left+=u.left-u.marginLeft,f.right=h+u.left}}return f.left+=r,f.top+=r,f.right-=r,f.bottom-=r,f}function w(e){return e.width*e.height}function y(e,t,n,o,r){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var f=b(n,o,i,r),a={top:{width:f.width,height:t.top-f.top},right:{width:f.right-t.right,height:f.height},bottom:{width:f.width,height:f.bottom-t.bottom},left:{width:t.left-f.left,height:f.height}},s=Object.keys(a).map(function(e){return ne({key:e},a[e],{area:w(a[e])})}).sort(function(e,t){return t.area-e.area}),p=s.filter(function(e){var t=e.width,o=e.height;return t>=n.clientWidth&&o>=n.clientHeight}),u=p.length>0?p[0].key:s[0].key,d=e.split("-")[1];return u+(d?"-"+d:"")}function O(e,t,n){return m(n,a(t,n))}function E(e){var t=window.getComputedStyle(e),n=parseFloat(t.marginTop)+parseFloat(t.marginBottom),o=parseFloat(t.marginLeft)+parseFloat(t.marginRight);return{width:e.offsetWidth+o,height:e.offsetHeight+n}}function x(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function L(e,t,n){n=n.split("-")[0];var o=E(e),r={width:o.width,height:o.height},i=-1!==["right","left"].indexOf(n),f=i?"top":"left",a=i?"left":"top",s=i?"height":"width",p=i?"width":"height";return r[f]=t[f]+t[s]/2-o[s]/2,r[a]=n===a?t[a]-o[p]:t[x(a)],r}function T(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function M(e,t,n){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===n});var o=T(e,function(e){return e[t]===n});return e.indexOf(o)}function C(t,n,o){return(void 0===o?t:t.slice(0,M(t,"name",o))).forEach(function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var o=t.function||t.fn;t.enabled&&e(o)&&(n.offsets.popper=c(n.offsets.popper),n.offsets.reference=c(n.offsets.reference),n=o(n,t))}),n}function N(){if(!this.state.isDestroyed){var e={instance:this,styles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=O(this.state,this.popper,this.reference),e.placement=y(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.offsets.popper=L(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position="absolute",e=C(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function k(e,t){return e.some(function(e){var n=e.name;return e.enabled&&n===t})}function W(e){for(var t=[!1,"ms","webkit","moz","o"],n=e.charAt(0).toUpperCase()+e.slice(1),o=0;o<t.length-1;o++){var r=t[o],i=r?""+r+n:e;if(void 0!==window.document.body.style[i])return i}return null}function H(){return this.state.isDestroyed=!0,k(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.left="",this.popper.style.position="",this.popper.style.top="",this.popper.style[W("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function P(e,t,n,r){var i="BODY"===e.nodeName,f=i?window:e;f.addEventListener(t,n,{passive:!0}),i||P(o(f.parentNode),t,n,r),r.push(f)}function A(e,t,n,r){n.updateBound=r,window.addEventListener("resize",n.updateBound,{passive:!0});var i=o(e);return P(i,"scroll",n.updateBound,n.scrollParents),n.scrollElement=i,n.eventsEnabled=!0,n}function B(){this.state.eventsEnabled||(this.state=A(this.reference,this.options,this.state,this.scheduleUpdate))}function D(e,t){return window.removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function S(){this.state.eventsEnabled&&(window.cancelAnimationFrame(this.scheduleUpdate),this.state=D(this.reference,this.state))}function j(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function I(e,t){Object.keys(t).forEach(function(n){var o="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&j(t[n])&&(o="px"),e.style[n]=t[n]+o})}function F(e,t){Object.keys(t).forEach(function(n){!1!==t[n]?e.setAttribute(n,t[n]):e.removeAttribute(n)})}function R(e,t,n){var o=T(e,function(e){return e.name===t}),r=!!o&&e.some(function(e){return e.name===n&&e.enabled&&e.order<o.order});if(!r){var i="`"+t+"`",f="`"+n+"`";console.warn(f+" modifier is required by "+i+" modifier in order to work, be sure to include it before "+i+"!")}return r}function U(e){return"end"===e?"start":"start"===e?"end":e}function Y(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=re.indexOf(e),o=re.slice(n+1).concat(re.slice(0,n));return t?o.reverse():o}function q(e,t,n,o){var r=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),i=+r[1],f=r[2];if(!i)return e;if(0===f.indexOf("%")){var a=void 0;switch(f){case"%p":a=n;break;case"%":case"%r":default:a=o}return c(a)[t]/100*i}if("vh"===f||"vw"===f){return("vh"===f?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*i}return i}function K(e,t,n,o){var r=[0,0],i=-1!==["right","left"].indexOf(o),f=e.split(/(\+|\-)/).map(function(e){return e.trim()}),a=f.indexOf(T(f,function(e){return-1!==e.search(/,|\s/)}));f[a]&&-1===f[a].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var s=/\s*,\s*|\s+/,p=-1!==a?[f.slice(0,a).concat([f[a].split(s)[0]]),[f[a].split(s)[1]].concat(f.slice(a+1))]:[f];return(p=p.map(function(e,o){var r=(1===o?!i:i)?"height":"width",f=!1;return e.reduce(function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,f=!0,e):f?(e[e.length-1]+=t,f=!1,e):e.concat(t)},[]).map(function(e){return q(e,r,t,n)})})).forEach(function(e,t){e.forEach(function(n,o){j(n)&&(r[t]+=n*("-"===e[o-1]?-1:1))})}),r}for(var z=["native code","[object MutationObserverConstructor]"],G="undefined"!=typeof window,V=["Edge","Trident","Firefox"],_=0,X=0;X<V.length;X+=1)if(G&&navigator.userAgent.indexOf(V[X])>=0){_=1;break}var J=G&&function(e){return z.some(function(t){return(e||"").toString().indexOf(t)>-1})}(window.MutationObserver)?function(e){var t=!1,n=0,o=document.createElement("span");return new MutationObserver(function(){e(),t=!1}).observe(o,{attributes:!0}),function(){t||(t=!0,o.setAttribute("x-index",n),n+=1)}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},_))}},Q=void 0,Z=function(){return void 0===Q&&(Q=-1!==navigator.appVersion.indexOf("MSIE 10")),Q},$=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},ee=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),te=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},oe=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],re=oe.slice(3),ie={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"},fe={placement:"bottom",eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,n=t.split("-")[0],o=t.split("-")[1];if(o){var r=e.offsets,i=r.reference,f=r.popper,a=-1!==["bottom","top"].indexOf(n),s=a?"left":"top",p=a?"width":"height",u={start:te({},s,i[s]),end:te({},s,i[s]+i[p]-f[p])};e.offsets.popper=ne({},f,u[o])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var n=t.offset,o=e.placement,r=e.offsets,i=r.popper,f=r.reference,a=o.split("-")[0],s=void 0;return s=j(+n)?[+n,0]:K(n,i,f,a),"left"===a?(i.top+=s[0],i.left-=s[1]):"right"===a?(i.top+=s[0],i.left+=s[1]):"top"===a?(i.left+=s[0],i.top-=s[1]):"bottom"===a&&(i.left+=s[0],i.top+=s[1]),e.popper=i,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var n=t.boundariesElement||f(e.instance.popper);e.instance.reference===n&&(n=f(n));var o=b(e.instance.popper,e.instance.reference,t.padding,n);t.boundaries=o;var r=t.priority,i=e.offsets.popper,a={primary:function(e){var n=i[e];return i[e]<o[e]&&!t.escapeWithReference&&(n=Math.max(i[e],o[e])),te({},e,n)},secondary:function(e){var n="right"===e?"left":"top",r=i[n];return i[e]>o[e]&&!t.escapeWithReference&&(r=Math.min(i[n],o[e]-("right"===e?i.width:i.height))),te({},n,r)}};return r.forEach(function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";i=ne({},i,a[t](e))}),e.offsets.popper=i,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,n=t.popper,o=t.reference,r=e.placement.split("-")[0],i=Math.floor,f=-1!==["top","bottom"].indexOf(r),a=f?"right":"bottom",s=f?"left":"top",p=f?"width":"height";return n[a]<i(o[s])&&(e.offsets.popper[s]=i(o[s])-n[p]),n[s]>i(o[a])&&(e.offsets.popper[s]=i(o[a])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){if(!R(e.instance.modifiers,"arrow","keepTogether"))return e;var n=t.element;if("string"==typeof n){if(!(n=e.instance.popper.querySelector(n)))return e}else if(!e.instance.popper.contains(n))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var o=e.placement.split("-")[0],r=e.offsets,i=r.popper,f=r.reference,a=-1!==["left","right"].indexOf(o),s=a?"height":"width",p=a?"top":"left",u=a?"left":"top",d=a?"bottom":"right",l=E(n)[s];f[d]-l<i[p]&&(e.offsets.popper[p]-=i[p]-(f[d]-l)),f[p]+l>i[d]&&(e.offsets.popper[p]+=f[p]+l-i[d]);var h=f[p]+f[s]/2-l/2-c(e.offsets.popper)[p];return h=Math.max(Math.min(i[s]-l,h),0),e.arrowElement=n,e.offsets.arrow={},e.offsets.arrow[p]=Math.round(h),e.offsets.arrow[u]="",e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(e,t){if(k(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var n=b(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement),o=e.placement.split("-")[0],r=x(o),i=e.placement.split("-")[1]||"",f=[];switch(t.behavior){case ie.FLIP:f=[o,r];break;case ie.CLOCKWISE:f=Y(o);break;case ie.COUNTERCLOCKWISE:f=Y(o,!0);break;default:f=t.behavior}return f.forEach(function(a,s){if(o!==a||f.length===s+1)return e;o=e.placement.split("-")[0],r=x(o);var p=e.offsets.popper,u=e.offsets.reference,d=Math.floor,l="left"===o&&d(p.right)>d(u.left)||"right"===o&&d(p.left)<d(u.right)||"top"===o&&d(p.bottom)>d(u.top)||"bottom"===o&&d(p.top)<d(u.bottom),c=d(p.left)<d(n.left),h=d(p.right)>d(n.right),m=d(p.top)<d(n.top),g=d(p.bottom)>d(n.bottom),v="left"===o&&c||"right"===o&&h||"top"===o&&m||"bottom"===o&&g,b=-1!==["top","bottom"].indexOf(o),w=!!t.flipVariations&&(b&&"start"===i&&c||b&&"end"===i&&h||!b&&"start"===i&&m||!b&&"end"===i&&g);(l||v||w)&&(e.flipped=!0,(l||v)&&(o=f[s+1]),w&&(i=U(i)),e.placement=o+(i?"-"+i:""),e.offsets.popper=ne({},e.offsets.popper,L(e.instance.popper,e.offsets.reference,e.placement)),e=C(e.instance.modifiers,e,"flip"))}),e},behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,n=t.split("-")[0],o=e.offsets,r=o.popper,i=o.reference,f=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n);return r[f?"left":"top"]=i[t]-(a?r[f?"width":"height"]:0),e.placement=x(t),e.offsets.popper=c(r),e}},hide:{order:800,enabled:!0,fn:function(e){if(!R(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=T(e.instance.modifiers,function(e){return"preventOverflow"===e.name}).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var n=t.x,o=t.y,r=e.offsets.popper,i=T(e.instance.modifiers,function(e){return"applyStyle"===e.name}).gpuAcceleration;void 0!==i&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var a=void 0!==i?i:t.gpuAcceleration,s=h(f(e.instance.popper)),p={position:r.position},u={left:Math.floor(r.left),top:Math.floor(r.top),bottom:Math.floor(r.bottom),right:Math.floor(r.right)},d="bottom"===n?"top":"bottom",l="right"===o?"left":"right",c=W("transform"),m=void 0,g=void 0;if(g="bottom"===d?-s.height+u.bottom:u.top,m="right"===l?-s.width+u.right:u.left,a&&c)p[c]="translate3d("+m+"px, "+g+"px, 0)",p[d]=0,p[l]=0,p.willChange="transform";else{var v="bottom"===d?-1:1,b="right"===l?-1:1;p[d]=g*v,p[l]=m*b,p.willChange=d+", "+l}var w={"x-placement":e.placement};return e.attributes=ne({},w,e.attributes),e.styles=ne({},p,e.styles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){return I(e.instance.popper,e.styles),F(e.instance.popper,e.attributes),e.offsets.arrow&&I(e.arrowElement,e.offsets.arrow),e},onLoad:function(e,t,n,o,r){var i=O(r,t,e),f=y(n.placement,i,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",f),I(t,{position:"absolute"}),n},gpuAcceleration:void 0}}},ae=function(){function t(n,o){var r=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};$(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(r.update)},this.update=J(this.update.bind(this)),this.options=ne({},t.Defaults,i),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=n.jquery?n[0]:n,this.popper=o.jquery?o[0]:o,this.options.modifiers={},Object.keys(ne({},t.Defaults.modifiers,i.modifiers)).forEach(function(e){r.options.modifiers[e]=ne({},t.Defaults.modifiers[e]||{},i.modifiers?i.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return ne({name:e},r.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(r.reference,r.popper,r.options,t,r.state)}),this.update();var f=this.options.eventsEnabled;f&&this.enableEventListeners(),this.state.eventsEnabled=f}return ee(t,[{key:"update",value:function(){return N.call(this)}},{key:"destroy",value:function(){return H.call(this)}},{key:"enableEventListeners",value:function(){return B.call(this)}},{key:"disableEventListeners",value:function(){return S.call(this)}}]),t}();return ae.Utils=("undefined"!=typeof window?window:global).PopperUtils,ae.placements=oe,ae.Defaults=fe,ae});
(function(a,b){'object'==typeof exports&&'undefined'!=typeof module?module.exports=b(require('popper.js')):'function'==typeof define&&define.amd?define(['popper.js'],b):a.Tooltip=b(a.Popper)})(this,function(a){'use strict';function b(j){return j&&'[object Function]'==={}.toString.call(j)}a='default'in a?a['default']:a;var c=function(j,k){if(!(j instanceof k))throw new TypeError('Cannot call a class as a function')},d=function(){function j(k,l){for(var n,m=0;m<l.length;m++)n=l[m],n.enumerable=n.enumerable||!1,n.configurable=!0,'value'in n&&(n.writable=!0),Object.defineProperty(k,n.key,n)}return function(k,l,m){return l&&j(k.prototype,l),m&&j(k,m),k}}(),e=Object.assign||function(j){for(var l,k=1;k<arguments.length;k++)for(var m in l=arguments[k],l)Object.prototype.hasOwnProperty.call(l,m)&&(j[m]=l[m]);return j},f={container:!1,delay:0,html:!1,placement:'top',title:'',template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:'hover focus',offset:0},g=function(){function j(k,l){c(this,j),h.call(this),l=e({},f,l),k.jquery&&(k=k[0]),this.reference=k,this.options=l;var m='string'==typeof l.trigger?l.trigger.split(' ').filter(function(n){return-1!==['click','hover','focus'].indexOf(n)}):[];this._isOpen=!1,this._setEventListeners(k,m,l)}return d(j,[{key:'_create',value:function(l,m,n,o){var p=window.document.createElement('div');p.innerHTML=m.trim();var q=p.childNodes[0];q.id='tooltip_'+Math.random().toString(36).substr(2,10),q.setAttribute('aria-hidden','false');var r=p.querySelector(this.innerSelector);if(1===n.nodeType)o&&r.appendChild(n);else if(b(n)){var s=n.call(l);o?r.innerHTML=s:r.innerText=s}else o?r.innerHTML=n:r.innerText=n;return q}},{key:'_show',value:function(l,m){if(this._isOpen)return this;if(this._isOpen=!0,this._tooltipNode)return this._tooltipNode.style.display='',this._tooltipNode.setAttribute('aria-hidden','false'),this.popperInstance.update(),this;var n=l.getAttribute('title')||m.title;if(!n)return this;var o=this._create(l,m.template,n,m.html);o.setAttribute('aria-describedby',o.id);var p=this._findContainer(m.container,l);this._append(o,p);var q={placement:m.placement,modifiers:{arrow:{element:this.arrowSelector}}};return m.boundariesElement&&(q.modifiers.preventOverflow={boundariesElement:m.boundariesElement}),this.popperInstance=new a(l,o,q),this._tooltipNode=o,this}},{key:'_hide',value:function(){return this._isOpen?(this._isOpen=!1,this._tooltipNode.style.display='none',this._tooltipNode.setAttribute('aria-hidden','true'),this):this}},{key:'_dispose',value:function(){var l=this;return this._tooltipNode&&(this._hide(),this.popperInstance.destroy(),this._events.forEach(function(m){var n=m.func,o=m.event;l.reference.removeEventListener(o,n)}),this._events=[],this._tooltipNode.parentNode.removeChild(this._tooltipNode),this._tooltipNode=null),this}},{key:'_findContainer',value:function(l,m){return'string'==typeof l?l=window.document.querySelector(l):!1===l&&(l=m.parentNode),l}},{key:'_append',value:function(l,m){m.appendChild(l)}},{key:'_setEventListeners',value:function(l,m,n){var o=this,p=[],q=[];m.forEach(function(r){switch(r){case'hover':p.push('mouseenter'),q.push('mouseleave');case'focus':p.push('focus'),q.push('blur');case'click':p.push('click'),q.push('click');}}),p.forEach(function(r){var s=function(u){!0===o._isOpen||(u.usedByTooltip=!0,o._scheduleShow(l,n.delay,n,u))};o._events.push({event:r,func:s}),l.addEventListener(r,s)}),q.forEach(function(r){var s=function(u){!0===u.usedByTooltip||o._scheduleHide(l,n.delay,n,u)};o._events.push({event:r,func:s}),l.addEventListener(r,s)})}},{key:'_scheduleShow',value:function(l,m,n){var o=this,p=m&&m.show||m||0;window.setTimeout(function(){return o._show(l,n)},p)}},{key:'_scheduleHide',value:function(l,m,n,o){var p=this,q=m&&m.hide||m||0;window.setTimeout(function(){if(!1!==p._isOpen&&document.body.contains(p._tooltipNode)){if('mouseleave'===o.type){var r=p._setTooltipNodeEvent(o,l,m,n);if(r)return}p._hide(l,n)}},q)}}]),j}(),h=function(){var k=this;this.show=function(){return k._show(k.reference,k.options)},this.hide=function(){return k._hide()},this.dispose=function(){return k._dispose()},this.toggle=function(){return k._isOpen?k.hide():k.show()},this.arrowSelector='.tooltip-arrow, .tooltip__arrow',this.innerSelector='.tooltip-inner, .tooltip__inner',this._events=[],this._setTooltipNodeEvent=function(l,m,n,o){var p=l.relatedreference||l.toElement;return!!k._tooltipNode.contains(p)&&(k._tooltipNode.addEventListener(l.type,function r(s){var t=s.relatedreference||s.toElement;k._tooltipNode.removeEventListener(l.type,r),m.contains(t)||k._scheduleHide(m,o.delay,o,s)}),!0)}};return g});




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

var quantum = new PouchDB('https://quay.stream/db/_users', {skipSetup: true});
var dblee = new PouchDB('https://quay.stream/db/libros', {skipSetup: true});
var dbleelocal = new PouchDB('dblee');
  var url = 'https://quay.stream/db/libros';
var opts = { live: true, retry: true };
function onSyncChange(){
  console.log("Sync has changed docs!");
  dblee.replicate.to(dbleelocal).on('complete', function(info) {
  // then two-way
});
  toast("Hay nuevos cambios!");
}
function onSyncPaused(){
  console.log("Sincronización pausada");
  toast("Replicación pausada");
}
function onSyncError(){
  console.log("Error en la sincronización");
  toast("Error en replicación");
}
function onSyncError(){
  console.log("Error en la sincronización 2");
  toast("Error en replicación 2");
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
dbleelocal.replicate.from(dblee).on('complete', function(info) {
  // then two-way, continuous, retriable sync

  console.log("Sync listo");
  console.log(info);
   returnbookstoallcarousels();
 PouchDB.sync(dbleelocal, dblee, opts)
    .on('change', onSyncChange)
    .on('paused', onSyncPaused)
    .on('error', onSyncErrorTwo);
}).on('error', onSyncError);


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
                            return response;
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
                            toast('Bienvenido (:');
                            console.log(response);  // response is the user object
                             $('.form-action').fadeOut('slow').remove;
                             $('.form-head').html('Bienvenido, '+response.nombre);
                             $('.initbutton').fadeOut('slow');
                             $('.page-header-container').prepend('  <div class="menu"><div class="title" onclick="f()">'+response.nombre+' <span class="fa fa-bars"></span><div class="arrow"></div></div><div class="dropdown"><p onclick="router.navigate(\'/dashboard\')">Dashboard <span class="fa fa-dashboard"></span></p><p onclick="router.navigate(\'/preferencias\')">Opciones <span class="fa fa-gear"></span></p><p onclick="cerrarsession()">Cerrar sesión <span class="fa fa-sign-out"></span></p></div></div>');
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
                      console.log("error")
                      // network error
                    } else if (!response.userCtx.name) {
                      // nobody's logged in
                      
                      
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
                            toast('Bienvenido (:');
                            console.log(response);  // response is the user object
                             $('.form-action').fadeOut('slow').remove;
                             $('.form-head').html('Bienvenido, '+response.nombre);
                             $('.initbutton').fadeOut('slow');
                             $('.page-header-container').prepend('  <div class="menu"><div class="title" onclick="f()">'+response.nombre+' <span class="fa fa-bars"></span><div class="arrow"></div></div><div class="dropdown"><p onclick="router.navigate(\'/dashboard\')">Dashboard <span class="fa fa-dashboard"></span></p><p onclick="router.navigate(\'/preferencias\')">Opciones <span class="fa fa-gear"></span></p><p onclick="cerrarsession()">Cerrar sesión <span class="fa fa-sign-out"></span></p></div></div>');
                             $searchbar.slideToggle(300, function(){
        // callback after search bar animation
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
function fadeOutPageLoad(){
	console.log("LLAMADO PAGE OUT!");


                            $("#page").fadeOut('fast');
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

  quantum.getSession(function (err, response) {
   if (!response.userCtx.name) {
                     fadeOutPageLoad()
                    } else {
                      // 
                      
                      quantum.getUser(response.userCtx.name, function (err, response) {
                          if (err) {
                            console.log(err);
                            if (err.name === 'not_found') {
                              console.log("// typo, or you don't have the privileges to see this user");
                              fadeOutPageLoad()
                            } else {
                               form_id = 'success';
                      $('.grop-from').attr('id', form_id);
                       
                            toast('Bienvenido (:');
                            console.log(response);  // response is the user object
                             $('.form-action').fadeOut('slow').remove;
                             $('.form-head').html('Bienvenido, '+response.nombre);
                             $('.initbutton').fadeOut('slow');
                             $('.page-header-container').prepend('  <div class="menu"><div class="title" onclick="f()">'+response.nombre+' <span class="fa fa-bars"></span><div class="arrow"></div></div><div class="dropdown"><p onclick="router.navigate(\'/dashboard\')">Dashboard <span class="fa fa-dashboard"></span></p><p onclick="router.navigate(\'/preferencias\')">Opciones <span class="fa fa-gear"></span></p><p onclick="cerrarsession()">Cerrar sesión <span class="fa fa-sign-out"></span></p></div></div>');
                                  $('.searchbar').fadeOut('slow');
                                  fadeOutPageLoad()
                            }
                          } else {
                           
       form_id = 'success';
                      $('.grop-from').attr('id', form_id);
                       
                            toast('Bienvenido (:');
                            console.log(response);  // response is the user object
                             $('.form-action').fadeOut('slow').remove;
                             $('.form-head').html('Bienvenido, '+response.nombre);
                             $('.initbutton').fadeOut('slow');
                          $('.page-header-container').prepend('  <div class="menu"><div class="title" onclick="f()">'+response.nombre+' <span class="fa fa-bars"></span><div class="arrow"></div></div><div class="dropdown"><p onclick="router.navigate(\'/dashboard\')">Dashboard <span class="fa fa-dashboard"></span></p><p onclick="router.navigate(\'/preferencias\')">Opciones <span class="fa fa-gear"></span></p><p onclick="cerrarsession()">Cerrar sesión <span class="fa fa-sign-out"></span></p></div></div>');
                                    $('.searchbar').fadeOut('slow');
                                    fadeOutPageLoad()

                    } }); }  
}); 


function generarid() {
    return ("0000" + (Math.random()*Math.pow(36,4) << 0).toString(36)).slice(-4)
}




$('document').ready(function(){
  $('#buttonblur').on('click', function(){
     $('.modal').addClass('modal-is-active');
     $('.webblur').addClass('webblur-is-blurred');
  });
  
 
});

function cerrarmodal(){
        if($('.modal').hasClass('modal-is-active'))
        {
         $('.modal').removeClass('modal-is-active');
         $('.webblur').removeClass('webblur-is-blurred');
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


//Comprimir Array y Contar
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


function showbook(id){
	var color;
	dbleelocal.get(id, {attachments: true}).then(function (doc) {
		console.log(doc);
		console.log(doc._attachments.portada);
		if(doc.colors != null){
			color = doc.colors;
			$('<div class="overlay-details"><a href="#" class="close-overlay-btn">Cerrar</a><div class="overlay-image"><img class="imgbook" src="data:'+doc._attachments.portada.content_type+';base64,'+doc._attachments.portada.data+'"" alt="Portada Libro"><div class="back-color" style="background-color: #'+doc.colors[2].hex+'"></div></div><div class="overlay-desc activated"><h2 class="overlay_title">'+doc.title+'</h2><p class="author">por AUTOR</p><p class="published">FECHA</p><p class="synopsis">'+doc.descripcion+'</p><a href="#" class="button preview">Vista previa</a></div><div class="overlay-preview"><a href="#" class="back-preview-btn">Volver</a><h4 class="preview-title">Vista previa</h4><div class="preview-content"><h5>Capítulo 1</h5>'+doc.chapter+'</div></div></div>').prependTo('.main-overlay');

		} else {
			$('<div class="overlay-details"><a href="#" class="close-overlay-btn">Cerrar</a><div class="overlay-image"><img class="imgbook" src="data:'+doc._attachments.portada.content_type+';base64,'+doc._attachments.portada.data+'"" alt="Portada Libro"><div class="back-color"></div></div><div class="overlay-desc activated"><h2 class="overlay_title">'+doc.title+'</h2><p class="author">por AUTOR</p><p class="published">FECHA</p><p class="synopsis">'+doc.descripcion+'</p><a href="#" class="button preview">Vista previa</a></div><div class="overlay-preview"><a href="#" class="back-preview-btn">Volver</a><h4 class="preview-title">Vista previa</h4><div class="preview-content"><h5>Capítulo 1</h5>'+doc.chapter+'</div></div></div>').prependTo('.main-overlay');

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
	})

  }
function abrirshop(){

    if( $('.cart-wrapper').is(':visible') ) {
        $('.cart-wrapper').animate({ 'width': '0px' }, 'slow', function(){
            $('.cart-wrapper').hide();
        });
        $('.cart-panel').animate({ 'margin-left': '0px' }, 'slow');
    }
    else {
        $('.cart-wrapper').show();
        $('.cart-wrapper').animate({ 'width': '210px' }, 'slow');
        $('.cart-wrapper').animate({ 'margin-left': '210px' }, 'slow');
    }

}
  (function(){
  
  var cart = {items:[],total:''};
  
  //Add to cart
  var addToCart = function(product,qty){
    qty = qty || 1;
    var cart = getCart();
    var indexOfId = cart.items.findIndex(x => x.id == product.id);

    if(indexOfId === -1){
      cart.items.push(
        {
          id: product.id,
          name:product.name,
          price:product.price,
          qty: qty
        });      
    }else{
      cart.items[indexOfId].qty++;
    }
    
    //Update popup cart
    updateCart(cart);
  }
  
  var getProductValues = function(element){
    var productId = $(element).parent().find('.my-cart-id').attr('id');
    var productName = $(element).parent().find('.my-cart-name').html();
    var productPrice = $(element).parent().find('.my-cart-price').html();
    return {id:productId,name:productName,price:productPrice};
  }
  
  $('.my-cart-add').on('click',function(){
    var product = getProductValues(this);
    addToCart({id:product.id,name:product.name,price:product.price});
  });
  
  //Update cart html to reflect changes
  var updateCart = function(cart){
     var totalCost = 0;
     var totalCount = 0;
    
     //Add to shopping cart dropdown
     $('.shopping-cart-items').html('');
     for(var i =0; i < cart.items.length; i++){
       totalCost += (cart.items[i].qty * parseFloat(cart.items[i].price));
       totalCount += cart.items[i].qty;

       $('.shopping-cart-items').append(
         '<li class="clearfix">'+
         '<div class="my-cart-item">'+
         '<div><span>Name: </span>'+cart.items[i].name+'</div>'+
         '<div><span>Price: </span> R '+cart.items[i].price+'</div>'+
         '<div>Qty: </span>'+
         '<i id="subtract-qty'+i+'" class="fa fa-minus-square update-qty subtract-qty" aria-hidden="true"></i><span> '+
         cart.items[i].qty+
         ' <i id="add-qty'+i+'" class="fa fa-plus-square update-qty add-qty" aria-hidden="true"></i></div>'+
         '</div>'+
         '<div class="my-cart-remove-container">'+
         '<i id="my-cart-remove'+i+'" class="fa fa-times my-cart-remove" aria-hidden="true">'+
         '</div>'+
         '</i>'
       );

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
    $('.my-cart-total').html('R '+val.toFixed(2));
  }
  
  //Checkout to sandbox payment gateway
  var checkout = function(){
    
  };
 
  //Listeners
  //Close popup on body click
  $('body').click(function(e){
     e.preventDefault();
     $(".shopping-cart").fadeOut( "fast");  
  });
  
  
  //Toggle cart on icon click
  $(".my-cart-icon").on("click", function(e) {
    e.stopPropagation();
    $(".shopping-cart").fadeToggle( "fast"); 
  });
  
  //Prevent close on popup click
  $('.my-cart-popup').on('click', function(e){
     e.stopPropagation();
  });  
})();