!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.PouchDB=e()}}(function(){var e;return function e(t,n,r){function o(a,s){if(!n[a]){if(!t[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(i)return i(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var f=n[a]={exports:{}};t[a][0].call(f.exports,function(e){var n=t[a][1][e];return o(n||e)},f,f.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){"use strict";function r(e){return function(){var t=arguments.length;if(t){for(var n=[],r=-1;++r<t;)n[r]=arguments[r];return e.call(this,n)}return e.call(this,[])}}t.exports=r},{}],2:[function(e,t,n){(function(r){function o(){return!("undefined"==typeof window||!window||void 0===window.process||"renderer"!==window.process.type)||("undefined"!=typeof document&&document&&"WebkitAppearance"in document.documentElement.style||"undefined"!=typeof window&&window&&window.console&&(console.firebug||console.exception&&console.table)||"undefined"!=typeof navigator&&navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function i(e){var t=this.useColors;if(e[0]=(t?"%c":"")+this.namespace+(t?" %c":" ")+e[0]+(t?"%c ":" ")+"+"+n.humanize(this.diff),t){var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var o=0,i=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(o++,"%c"===e&&(i=o))}),e.splice(i,0,r)}}function a(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function s(e){try{null==e?n.storage.removeItem("debug"):n.storage.debug=e}catch(e){}}function u(){var e;try{e=n.storage.debug}catch(e){}return!e&&void 0!==r&&"env"in r&&(e=r.env.DEBUG),e}n=t.exports=e(3),n.log=a,n.formatArgs=i,n.save=s,n.load=u,n.useColors=o,n.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),n.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],n.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},n.enable(u())}).call(this,e(9))},{3:3,9:9}],3:[function(e,t,n){function r(e){var t,r=0;for(t in e)r=(r<<5)-r+e.charCodeAt(t),r|=0;return n.colors[Math.abs(r)%n.colors.length]}function o(e){function t(){if(t.enabled){var e=t,r=+new Date,o=r-(c||r);e.diff=o,e.prev=c,e.curr=r,c=r;for(var i=new Array(arguments.length),a=0;a<i.length;a++)i[a]=arguments[a];i[0]=n.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");var s=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,function(t,r){if("%%"===t)return t;s++;var o=n.formatters[r];if("function"==typeof o){var a=i[s];t=o.call(e,a),i.splice(s,1),s--}return t}),n.formatArgs.call(e,i);(t.log||n.log||console.log.bind(console)).apply(e,i)}}return t.namespace=e,t.enabled=n.enabled(e),t.useColors=n.useColors(),t.color=r(e),"function"==typeof n.init&&n.init(t),t}function i(e){n.save(e),n.names=[],n.skips=[];for(var t=("string"==typeof e?e:"").split(/[\s,]+/),r=t.length,o=0;o<r;o++)t[o]&&(e=t[o].replace(/\*/g,".*?"),"-"===e[0]?n.skips.push(new RegExp("^"+e.substr(1)+"$")):n.names.push(new RegExp("^"+e+"$")))}function a(){n.enable("")}function s(e){var t,r;for(t=0,r=n.skips.length;t<r;t++)if(n.skips[t].test(e))return!1;for(t=0,r=n.names.length;t<r;t++)if(n.names[t].test(e))return!0;return!1}function u(e){return e instanceof Error?e.stack||e.message:e}n=t.exports=o.debug=o.default=o,n.coerce=u,n.disable=a,n.enable=i,n.enabled=s,n.humanize=e(8),n.names=[],n.skips=[],n.formatters={};var c},{8:8}],4:[function(e,t,n){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function o(e){return"function"==typeof e}function i(e){return"number"==typeof e}function a(e){return"object"==typeof e&&null!==e}function s(e){return void 0===e}t.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(e){if(!i(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},r.prototype.emit=function(e){var t,n,r,i,u,c;if(this._events||(this._events={}),"error"===e&&(!this._events.error||a(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var f=new Error('Uncaught, unspecified "error" event. ('+t+")");throw f.context=t,f}if(n=this._events[e],s(n))return!1;if(o(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:i=Array.prototype.slice.call(arguments,1),n.apply(this,i)}else if(a(n))for(i=Array.prototype.slice.call(arguments,1),c=n.slice(),r=c.length,u=0;u<r;u++)c[u].apply(this,i);return!0},r.prototype.addListener=function(e,t){var n;if(!o(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,o(t.listener)?t.listener:t),this._events[e]?a(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,a(this._events[e])&&!this._events[e].warned&&(n=s(this._maxListeners)?r.defaultMaxListeners:this._maxListeners)&&n>0&&this._events[e].length>n&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(e,t){function n(){this.removeListener(e,n),r||(r=!0,t.apply(this,arguments))}if(!o(t))throw TypeError("listener must be a function");var r=!1;return n.listener=t,this.on(e,n),this},r.prototype.removeListener=function(e,t){var n,r,i,s;if(!o(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(n=this._events[e],i=n.length,r=-1,n===t||o(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(a(n)){for(s=i;s-- >0;)if(n[s]===t||n[s].listener&&n[s].listener===t){r=s;break}if(r<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(r,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},r.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[e],o(n))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},r.prototype.listeners=function(e){return this._events&&this._events[e]?o(this._events[e])?[this._events[e]]:this._events[e].slice():[]},r.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(o(t))return 1;if(t)return t.length}return 0},r.listenerCount=function(e,t){return e.listenerCount(t)}},{}],5:[function(e,t,n){(function(e){"use strict";function n(){f=!0;for(var e,t,n=l.length;n;){for(t=l,l=[],e=-1;++e<n;)t[e]();n=l.length}f=!1}function r(e){1!==l.push(e)||f||o()}var o,i=e.MutationObserver||e.WebKitMutationObserver;if(i){var a=0,s=new i(n),u=e.document.createTextNode("");s.observe(u,{characterData:!0}),o=function(){u.data=a=++a%2}}else if(e.setImmediate||void 0===e.MessageChannel)o="document"in e&&"onreadystatechange"in e.document.createElement("script")?function(){var t=e.document.createElement("script");t.onreadystatechange=function(){n(),t.onreadystatechange=null,t.parentNode.removeChild(t),t=null},e.document.documentElement.appendChild(t)}:function(){setTimeout(n,0)};else{var c=new e.MessageChannel;c.port1.onmessage=n,o=function(){c.port2.postMessage(0)}}var f,l=[];t.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],6:[function(e,t,n){"function"==typeof Object.create?t.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},{}],7:[function(e,t,n){"use strict";function r(){}function o(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=_,this.queue=[],this.outcome=void 0,e!==r&&u(this,e)}function i(e,t,n){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof n&&(this.onRejected=n,this.callRejected=this.otherCallRejected)}function a(e,t,n){p(function(){var r;try{r=t(n)}catch(t){return v.reject(e,t)}r===e?v.reject(e,new TypeError("Cannot resolve promise with itself")):v.resolve(e,r)})}function s(e){var t=e&&e.then;if(e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof t)return function(){t.apply(e,arguments)}}function u(e,t){function n(t){i||(i=!0,v.reject(e,t))}function r(t){i||(i=!0,v.resolve(e,t))}function o(){t(r,n)}var i=!1,a=c(o);"error"===a.status&&n(a.value)}function c(e,t){var n={};try{n.value=e(t),n.status="success"}catch(e){n.status="error",n.value=e}return n}function f(e){return e instanceof this?e:v.resolve(new this(r),e)}function l(e){var t=new this(r);return v.reject(t,e)}function d(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var n=e.length,o=!1;if(!n)return this.resolve([]);for(var i=new Array(n),a=0,s=-1,u=new this(r);++s<n;)!function(e,r){function s(e){i[r]=e,++a!==n||o||(o=!0,v.resolve(u,i))}t.resolve(e).then(s,function(e){o||(o=!0,v.reject(u,e))})}(e[s],s);return u}function h(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var n=e.length,o=!1;if(!n)return this.resolve([]);for(var i=-1,a=new this(r);++i<n;)!function(e){t.resolve(e).then(function(e){o||(o=!0,v.resolve(a,e))},function(e){o||(o=!0,v.reject(a,e))})}(e[i]);return a}var p=e(5),v={},g=["REJECTED"],y=["FULFILLED"],_=["PENDING"];t.exports=o,o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){if("function"!=typeof e&&this.state===y||"function"!=typeof t&&this.state===g)return this;var n=new this.constructor(r);if(this.state!==_){a(n,this.state===y?e:t,this.outcome)}else this.queue.push(new i(n,e,t));return n},i.prototype.callFulfilled=function(e){v.resolve(this.promise,e)},i.prototype.otherCallFulfilled=function(e){a(this.promise,this.onFulfilled,e)},i.prototype.callRejected=function(e){v.reject(this.promise,e)},i.prototype.otherCallRejected=function(e){a(this.promise,this.onRejected,e)},v.resolve=function(e,t){var n=c(s,t);if("error"===n.status)return v.reject(e,n.value);var r=n.value;if(r)u(e,r);else{e.state=y,e.outcome=t;for(var o=-1,i=e.queue.length;++o<i;)e.queue[o].callFulfilled(t)}return e},v.reject=function(e,t){e.state=g,e.outcome=t;for(var n=-1,r=e.queue.length;++n<r;)e.queue[n].callRejected(t);return e},o.resolve=f,o.reject=l,o.all=d,o.race=h},{5:5}],8:[function(e,t,n){function r(e){if(e=String(e),!(e.length>1e4)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var n=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return n*l;case"days":case"day":case"d":return n*f;case"hours":case"hour":case"hrs":case"hr":case"h":return n*c;case"minutes":case"minute":case"mins":case"min":case"m":return n*u;case"seconds":case"second":case"secs":case"sec":case"s":return n*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}function o(e){return e>=f?Math.round(e/f)+"d":e>=c?Math.round(e/c)+"h":e>=u?Math.round(e/u)+"m":e>=s?Math.round(e/s)+"s":e+"ms"}function i(e){return a(e,f,"day")||a(e,c,"hour")||a(e,u,"minute")||a(e,s,"second")||e+" ms"}function a(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}var s=1e3,u=60*s,c=60*u,f=24*c,l=365.25*f;t.exports=function(e,t){t=t||{};var n=typeof e;if("string"===n&&e.length>0)return r(e);if("number"===n&&!1===isNaN(e))return t.long?i(e):o(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},{}],9:[function(e,t,n){function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(l===setTimeout)return setTimeout(e,0);if((l===r||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function a(e){if(d===clearTimeout)return clearTimeout(e);if((d===o||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function s(){g&&p&&(g=!1,p.length?v=p.concat(v):y=-1,v.length&&u())}function u(){if(!g){var e=i(s);g=!0;for(var t=v.length;t;){for(p=v,v=[];++y<t;)p&&p[y].run();y=-1,t=v.length}p=null,g=!1,a(e)}}function c(e,t){this.fun=e,this.array=t}function f(){}var l,d,h=t.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:r}catch(e){l=r}try{d="function"==typeof clearTimeout?clearTimeout:o}catch(e){d=o}}();var p,v=[],g=!1,y=-1;h.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];v.push(new c(e,t)),1!==v.length||g||i(u)},c.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=f,h.addListener=f,h.once=f,h.off=f,h.removeListener=f,h.removeAllListeners=f,h.emit=f,h.prependListener=f,h.prependOnceListener=f,h.listeners=function(e){return[]},h.binding=function(e){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(e){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}},{}],10:[function(t,n,r){!function(t){if("object"==typeof r)n.exports=t();else if("function"==typeof e&&e.amd)e(t);else{var o;try{o=window}catch(e){o=self}o.SparkMD5=t()}}(function(e){"use strict";function t(e,t){var n=e[0],r=e[1],o=e[2],i=e[3];n+=(r&o|~r&i)+t[0]-680876936|0,n=(n<<7|n>>>25)+r|0,i+=(n&r|~n&o)+t[1]-389564586|0,i=(i<<12|i>>>20)+n|0,o+=(i&n|~i&r)+t[2]+606105819|0,o=(o<<17|o>>>15)+i|0,r+=(o&i|~o&n)+t[3]-1044525330|0,r=(r<<22|r>>>10)+o|0,n+=(r&o|~r&i)+t[4]-176418897|0,n=(n<<7|n>>>25)+r|0,i+=(n&r|~n&o)+t[5]+1200080426|0,i=(i<<12|i>>>20)+n|0,o+=(i&n|~i&r)+t[6]-1473231341|0,o=(o<<17|o>>>15)+i|0,r+=(o&i|~o&n)+t[7]-45705983|0,r=(r<<22|r>>>10)+o|0,n+=(r&o|~r&i)+t[8]+1770035416|0,n=(n<<7|n>>>25)+r|0,i+=(n&r|~n&o)+t[9]-1958414417|0,i=(i<<12|i>>>20)+n|0,o+=(i&n|~i&r)+t[10]-42063|0,o=(o<<17|o>>>15)+i|0,r+=(o&i|~o&n)+t[11]-1990404162|0,r=(r<<22|r>>>10)+o|0,n+=(r&o|~r&i)+t[12]+1804603682|0,n=(n<<7|n>>>25)+r|0,i+=(n&r|~n&o)+t[13]-40341101|0,i=(i<<12|i>>>20)+n|0,o+=(i&n|~i&r)+t[14]-1502002290|0,o=(o<<17|o>>>15)+i|0,r+=(o&i|~o&n)+t[15]+1236535329|0,r=(r<<22|r>>>10)+o|0,n+=(r&i|o&~i)+t[1]-165796510|0,n=(n<<5|n>>>27)+r|0,i+=(n&o|r&~o)+t[6]-1069501632|0,i=(i<<9|i>>>23)+n|0,o+=(i&r|n&~r)+t[11]+643717713|0,o=(o<<14|o>>>18)+i|0,r+=(o&n|i&~n)+t[0]-373897302|0,r=(r<<20|r>>>12)+o|0,n+=(r&i|o&~i)+t[5]-701558691|0,n=(n<<5|n>>>27)+r|0,i+=(n&o|r&~o)+t[10]+38016083|0,i=(i<<9|i>>>23)+n|0,o+=(i&r|n&~r)+t[15]-660478335|0,o=(o<<14|o>>>18)+i|0,r+=(o&n|i&~n)+t[4]-405537848|0,r=(r<<20|r>>>12)+o|0,n+=(r&i|o&~i)+t[9]+568446438|0,n=(n<<5|n>>>27)+r|0,i+=(n&o|r&~o)+t[14]-1019803690|0,i=(i<<9|i>>>23)+n|0,o+=(i&r|n&~r)+t[3]-187363961|0,o=(o<<14|o>>>18)+i|0,r+=(o&n|i&~n)+t[8]+1163531501|0,r=(r<<20|r>>>12)+o|0,n+=(r&i|o&~i)+t[13]-1444681467|0,n=(n<<5|n>>>27)+r|0,i+=(n&o|r&~o)+t[2]-51403784|0,i=(i<<9|i>>>23)+n|0,o+=(i&r|n&~r)+t[7]+1735328473|0,o=(o<<14|o>>>18)+i|0,r+=(o&n|i&~n)+t[12]-1926607734|0,r=(r<<20|r>>>12)+o|0,n+=(r^o^i)+t[5]-378558|0,n=(n<<4|n>>>28)+r|0,i+=(n^r^o)+t[8]-2022574463|0,i=(i<<11|i>>>21)+n|0,o+=(i^n^r)+t[11]+1839030562|0,o=(o<<16|o>>>16)+i|0,r+=(o^i^n)+t[14]-35309556|0,r=(r<<23|r>>>9)+o|0,n+=(r^o^i)+t[1]-1530992060|0,n=(n<<4|n>>>28)+r|0,i+=(n^r^o)+t[4]+1272893353|0,i=(i<<11|i>>>21)+n|0,o+=(i^n^r)+t[7]-155497632|0,o=(o<<16|o>>>16)+i|0,r+=(o^i^n)+t[10]-1094730640|0,r=(r<<23|r>>>9)+o|0,n+=(r^o^i)+t[13]+681279174|0,n=(n<<4|n>>>28)+r|0,i+=(n^r^o)+t[0]-358537222|0,i=(i<<11|i>>>21)+n|0,o+=(i^n^r)+t[3]-722521979|0,o=(o<<16|o>>>16)+i|0,r+=(o^i^n)+t[6]+76029189|0,r=(r<<23|r>>>9)+o|0,n+=(r^o^i)+t[9]-640364487|0,n=(n<<4|n>>>28)+r|0,i+=(n^r^o)+t[12]-421815835|0,i=(i<<11|i>>>21)+n|0,o+=(i^n^r)+t[15]+530742520|0,o=(o<<16|o>>>16)+i|0,r+=(o^i^n)+t[2]-995338651|0,r=(r<<23|r>>>9)+o|0,n+=(o^(r|~i))+t[0]-198630844|0,n=(n<<6|n>>>26)+r|0,i+=(r^(n|~o))+t[7]+1126891415|0,i=(i<<10|i>>>22)+n|0,o+=(n^(i|~r))+t[14]-1416354905|0,o=(o<<15|o>>>17)+i|0,r+=(i^(o|~n))+t[5]-57434055|0,r=(r<<21|r>>>11)+o|0,n+=(o^(r|~i))+t[12]+1700485571|0,n=(n<<6|n>>>26)+r|0,i+=(r^(n|~o))+t[3]-1894986606|0,i=(i<<10|i>>>22)+n|0,o+=(n^(i|~r))+t[10]-1051523|0,o=(o<<15|o>>>17)+i|0,r+=(i^(o|~n))+t[1]-2054922799|0,r=(r<<21|r>>>11)+o|0,n+=(o^(r|~i))+t[8]+1873313359|0,n=(n<<6|n>>>26)+r|0,i+=(r^(n|~o))+t[15]-30611744|0,i=(i<<10|i>>>22)+n|0,o+=(n^(i|~r))+t[6]-1560198380|0,o=(o<<15|o>>>17)+i|0,r+=(i^(o|~n))+t[13]+1309151649|0,r=(r<<21|r>>>11)+o|0,n+=(o^(r|~i))+t[4]-145523070|0,n=(n<<6|n>>>26)+r|0,i+=(r^(n|~o))+t[11]-1120210379|0,i=(i<<10|i>>>22)+n|0,o+=(n^(i|~r))+t[2]+718787259|0,o=(o<<15|o>>>17)+i|0,r+=(i^(o|~n))+t[9]-343485551|0,r=(r<<21|r>>>11)+o|0,e[0]=n+e[0]|0,e[1]=r+e[1]|0,e[2]=o+e[2]|0,e[3]=i+e[3]|0}function n(e){var t,n=[];for(t=0;t<64;t+=4)n[t>>2]=e.charCodeAt(t)+(e.charCodeAt(t+1)<<8)+(e.charCodeAt(t+2)<<16)+(e.charCodeAt(t+3)<<24);return n}function r(e){var t,n=[];for(t=0;t<64;t+=4)n[t>>2]=e[t]+(e[t+1]<<8)+(e[t+2]<<16)+(e[t+3]<<24);return n}function o(e){var r,o,i,a,s,u,c=e.length,f=[1732584193,-271733879,-1732584194,271733878];for(r=64;r<=c;r+=64)t(f,n(e.substring(r-64,r)));for(e=e.substring(r-64),o=e.length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],r=0;r<o;r+=1)i[r>>2]|=e.charCodeAt(r)<<(r%4<<3);if(i[r>>2]|=128<<(r%4<<3),r>55)for(t(f,i),r=0;r<16;r+=1)i[r]=0;return a=8*c,a=a.toString(16).match(/(.*?)(.{0,8})$/),s=parseInt(a[2],16),u=parseInt(a[1],16)||0,i[14]=s,i[15]=u,t(f,i),f}function i(e){var n,o,i,a,s,u,c=e.length,f=[1732584193,-271733879,-1732584194,271733878];for(n=64;n<=c;n+=64)t(f,r(e.subarray(n-64,n)));for(e=n-64<c?e.subarray(n-64):new Uint8Array(0),o=e.length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],n=0;n<o;n+=1)i[n>>2]|=e[n]<<(n%4<<3);if(i[n>>2]|=128<<(n%4<<3),n>55)for(t(f,i),n=0;n<16;n+=1)i[n]=0;return a=8*c,a=a.toString(16).match(/(.*?)(.{0,8})$/),s=parseInt(a[2],16),u=parseInt(a[1],16)||0,i[14]=s,i[15]=u,t(f,i),f}function a(e){var t,n="";for(t=0;t<4;t+=1)n+=p[e>>8*t+4&15]+p[e>>8*t&15];return n}function s(e){var t;for(t=0;t<e.length;t+=1)e[t]=a(e[t]);return e.join("")}function u(e){return/[\u0080-\uFFFF]/.test(e)&&(e=unescape(encodeURIComponent(e))),e}function c(e,t){var n,r=e.length,o=new ArrayBuffer(r),i=new Uint8Array(o);for(n=0;n<r;n+=1)i[n]=e.charCodeAt(n);return t?i:o}function f(e){return String.fromCharCode.apply(null,new Uint8Array(e))}function l(e,t,n){var r=new Uint8Array(e.byteLength+t.byteLength);return r.set(new Uint8Array(e)),r.set(new Uint8Array(t),e.byteLength),n?r:r.buffer}function d(e){var t,n=[],r=e.length;for(t=0;t<r-1;t+=2)n.push(parseInt(e.substr(t,2),16));return String.fromCharCode.apply(String,n)}function h(){this.reset()}var p=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];return"5d41402abc4b2a76b9719d911017c592"!==s(o("hello"))&&function(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n},"undefined"==typeof ArrayBuffer||ArrayBuffer.prototype.slice||function(){function t(e,t){return e=0|e||0,e<0?Math.max(e+t,0):Math.min(e,t)}ArrayBuffer.prototype.slice=function(n,r){var o,i,a,s,u=this.byteLength,c=t(n,u),f=u;return r!==e&&(f=t(r,u)),c>f?new ArrayBuffer(0):(o=f-c,i=new ArrayBuffer(o),a=new Uint8Array(i),s=new Uint8Array(this,c,o),a.set(s),i)}}(),h.prototype.append=function(e){return this.appendBinary(u(e)),this},h.prototype.appendBinary=function(e){this._buff+=e,this._length+=e.length;var r,o=this._buff.length;for(r=64;r<=o;r+=64)t(this._hash,n(this._buff.substring(r-64,r)));return this._buff=this._buff.substring(r-64),this},h.prototype.end=function(e){var t,n,r=this._buff,o=r.length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<o;t+=1)i[t>>2]|=r.charCodeAt(t)<<(t%4<<3);return this._finish(i,o),n=s(this._hash),e&&(n=d(n)),this.reset(),n},h.prototype.reset=function(){return this._buff="",this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},h.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash}},h.prototype.setState=function(e){return this._buff=e.buff,this._length=e.length,this._hash=e.hash,this},h.prototype.destroy=function(){delete this._hash,delete this._buff,delete this._length},h.prototype._finish=function(e,n){var r,o,i,a=n;if(e[a>>2]|=128<<(a%4<<3),a>55)for(t(this._hash,e),a=0;a<16;a+=1)e[a]=0;r=8*this._length,r=r.toString(16).match(/(.*?)(.{0,8})$/),o=parseInt(r[2],16),i=parseInt(r[1],16)||0,e[14]=o,e[15]=i,t(this._hash,e)},h.hash=function(e,t){return h.hashBinary(u(e),t)},h.hashBinary=function(e,t){var n=o(e),r=s(n);return t?d(r):r},h.ArrayBuffer=function(){this.reset()},h.ArrayBuffer.prototype.append=function(e){var n,o=l(this._buff.buffer,e,!0),i=o.length;for(this._length+=e.byteLength,n=64;n<=i;n+=64)t(this._hash,r(o.subarray(n-64,n)));return this._buff=n-64<i?new Uint8Array(o.buffer.slice(n-64)):new Uint8Array(0),this},h.ArrayBuffer.prototype.end=function(e){var t,n,r=this._buff,o=r.length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<o;t+=1)i[t>>2]|=r[t]<<(t%4<<3);return this._finish(i,o),n=s(this._hash),e&&(n=d(n)),this.reset(),n},h.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},h.ArrayBuffer.prototype.getState=function(){var e=h.prototype.getState.call(this);return e.buff=f(e.buff),e},h.ArrayBuffer.prototype.setState=function(e){return e.buff=c(e.buff,!0),h.prototype.setState.call(this,e)},h.ArrayBuffer.prototype.destroy=h.prototype.destroy,h.ArrayBuffer.prototype._finish=h.prototype._finish,h.ArrayBuffer.hash=function(e,t){var n=i(new Uint8Array(e)),r=s(n);return t?d(r):r},h})},{}],11:[function(e,t,n){var r=e(14),o=e(15),i=o;i.v1=r,i.v4=o,t.exports=i},{14:14,15:15}],12:[function(e,t,n){function r(e,t){var n=t||0,r=o;return r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]}for(var o=[],i=0;i<256;++i)o[i]=(i+256).toString(16).substr(1);t.exports=r},{}],13:[function(e,t,n){(function(e){var n,r=e.crypto||e.msCrypto;if(r&&r.getRandomValues){var o=new Uint8Array(16);n=function(){return r.getRandomValues(o),o}}if(!n){var i=new Array(16);n=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),i[t]=e>>>((3&t)<<3)&255;return i}}t.exports=n}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],14:[function(e,t,n){function r(e,t,n){var r=t&&n||0,o=t||[];e=e||{};var a=void 0!==e.clockseq?e.clockseq:u,l=void 0!==e.msecs?e.msecs:(new Date).getTime(),d=void 0!==e.nsecs?e.nsecs:f+1,h=l-c+(d-f)/1e4;if(h<0&&void 0===e.clockseq&&(a=a+1&16383),(h<0||l>c)&&void 0===e.nsecs&&(d=0),d>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");c=l,f=d,u=a,l+=122192928e5;var p=(1e4*(268435455&l)+d)%4294967296;o[r++]=p>>>24&255,o[r++]=p>>>16&255,o[r++]=p>>>8&255,o[r++]=255&p;var v=l/4294967296*1e4&268435455;o[r++]=v>>>8&255,o[r++]=255&v,o[r++]=v>>>24&15|16,o[r++]=v>>>16&255,o[r++]=a>>>8|128,o[r++]=255&a;for(var g=e.node||s,y=0;y<6;++y)o[r+y]=g[y];return t||i(o)}var o=e(13),i=e(12),a=o(),s=[1|a[0],a[1],a[2],a[3],a[4],a[5]],u=16383&(a[6]<<8|a[7]),c=0,f=0;t.exports=r},{12:12,13:13}],15:[function(e,t,n){function r(e,t,n){var r=t&&n||0;"string"==typeof e&&(t="binary"==e?new Array(16):null,e=null),e=e||{};var a=e.random||(e.rng||o)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t)for(var s=0;s<16;++s)t[r+s]=a[s];return t||i(a)}var o=e(13),i=e(12);t.exports=r},{12:12,13:13}],16:[function(e,t,n){"use strict";function r(e,t,n){var r=n[n.length-1];e===r.element&&(n.pop(),r=n[n.length-1]);var o=r.element,i=r.index;if(Array.isArray(o))o.push(e);else if(i===t.length-2){var a=t.pop();o[a]=e}else t.push(e)}n.stringify=function(e){var t=[];t.push({obj:e});for(var n,r,o,i,a,s,u,c,f,l,d,h="";n=t.pop();)if(r=n.obj,o=n.prefix||"",i=n.val||"",h+=o,i)h+=i;else if("object"!=typeof r)h+=void 0===r?null:JSON.stringify(r);else if(null===r)h+="null";else if(Array.isArray(r)){for(t.push({val:"]"}),a=r.length-1;a>=0;a--)s=0===a?"":",",t.push({obj:r[a],prefix:s});t.push({val:"["})}else{u=[];for(c in r)r.hasOwnProperty(c)&&u.push(c);for(t.push({val:"}"}),a=u.length-1;a>=0;a--)f=u[a],l=r[f],d=a>0?",":"",d+=JSON.stringify(f)+":",t.push({obj:l,prefix:d});t.push({val:"{"})}return h},n.parse=function(e){for(var t,n,o,i,a,s,u,c,f,l=[],d=[],h=0;;)if("}"!==(t=e[h++])&&"]"!==t&&void 0!==t)switch(t){case" ":case"\t":case"\n":case":":case",":break;case"n":h+=3,r(null,l,d);break;case"t":h+=3,r(!0,l,d);break;case"f":h+=4,r(!1,l,d);break;case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":case"-":for(n="",h--;;){if(o=e[h++],!/[\d\.\-e\+]/.test(o)){h--;break}n+=o}r(parseFloat(n),l,d);break;case'"':for(i="",a=void 0,s=0;;){if('"'===(u=e[h++])&&("\\"!==a||s%2!=1))break;i+=u,a=u,"\\"===a?s++:s=0}r(JSON.parse('"'+i+'"'),l,d);break;case"[":c={element:[],index:l.length},l.push(c.element),d.push(c);break;case"{":f={element:{},index:l.length},l.push(f.element),d.push(f);break;default:throw new Error("unexpectedly reached end of input: "+t)}else{if(1===l.length)return l.pop();r(l.pop(),l,d)}}},{}],17:[function(e,t,n){(function(n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function o(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer||"undefined"!=typeof Blob&&e instanceof Blob}function i(e){if("function"==typeof e.slice)return e.slice(0);var t=new ArrayBuffer(e.byteLength),n=new Uint8Array(t),r=new Uint8Array(e);return n.set(r),t}function a(e){if(e instanceof ArrayBuffer)return i(e);var t=e.size,n=e.type;return"function"==typeof e.slice?e.slice(0,t,n):e.webkitSlice(0,t,n)}function s(e){var t=Object.getPrototypeOf(e);if(null===t)return!0;var n=t.constructor;return"function"==typeof n&&n instanceof n&&go.call(n)==yo}function u(e){var t,n,r;if(!e||"object"!=typeof e)return e;if(Array.isArray(e)){for(t=[],n=0,r=e.length;n<r;n++)t[n]=u(e[n]);return t}if(e instanceof Date)return e.toISOString();if(o(e))return a(e);if(!s(e))return e;t={};for(n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=u(e[n]);void 0!==i&&(t[n]=i)}return t}function c(e){var t=!1;return so(function(n){if(t)throw new Error("once called more than once");t=!0,e.apply(this,n)})}function f(e){return so(function(t){t=u(t);var n=this,r="function"==typeof t[t.length-1]&&t.pop(),o=new vo(function(r,o){var i;try{var a=c(function(e,t){e?o(e):r(t)});t.push(a),i=e.apply(n,t),i&&"function"==typeof i.then&&r(i)}catch(e){o(e)}});return r&&o.then(function(e){r(null,e)},r),o})}function l(e,t,n){if(e.constructor.listeners("debug").length){for(var r=["api",e.name,t],o=0;o<n.length-1;o++)r.push(n[o]);e.constructor.emit("debug",r);var i=n[n.length-1];n[n.length-1]=function(n,r){var o=["api",e.name,t];o=o.concat(n?["error",n]:["success",r]),e.constructor.emit("debug",o),i(n,r)}}}function d(e,t){return f(so(function(n){if(this._closed)return vo.reject(new Error("database is closed"));if(this._destroyed)return vo.reject(new Error("database is destroyed"));var r=this;return l(r,e,n),this.taskqueue.isReady?t.apply(this,n):new vo(function(t,o){r.taskqueue.addTask(function(i){i?o(i):t(r[e].apply(r,n))})})}))}function h(e){return"$"+e}function p(e){return e.substring(1)}function v(){this._store={}}function g(e){if(this._store=new v,e&&Array.isArray(e))for(var t=0,n=e.length;t<n;t++)this.add(e[t])}function y(e,t){for(var n={},r=0,o=t.length;r<o;r++){var i=t[r];i in e&&(n[i]=e[i])}return n}function _(e){return e}function m(e){return[{ok:e}]}function b(e,t,n){function r(){var e=[];d.forEach(function(t){t.docs.forEach(function(n){e.push({id:t.id,docs:[n]})})}),n(null,{results:e})}function o(){++l===f&&r()}function i(e,t,n){d[e]={id:t,docs:n},o()}function a(){if(!(p>=h.length)){var e=Math.min(p+wo,h.length),t=h.slice(p,e);s(t,p),p+=t.length}}function s(n,r){n.forEach(function(n,o){var s=r+o,u=c.get(n),f=y(u[0],["atts_since","attachments"]);f.open_revs=u.map(function(e){return e.rev}),f.open_revs=f.open_revs.filter(_);var l=_;0===f.open_revs.length&&(delete f.open_revs,l=m),["revs","attachments","binary","ajax","latest"].forEach(function(e){e in t&&(f[e]=t[e])}),e.get(n,f,function(e,t){var r;r=e?[{error:e}]:l(t),i(s,n,r),a()})})}var u=t.docs,c=new mo;u.forEach(function(e){c.has(e.id)?c.get(e.id).push(e):c.set(e.id,[e])});var f=c.size,l=0,d=new Array(f),h=[];c.forEach(function(e,t){h.push(t)});var p=0;a()}function w(){return"undefined"!=typeof chrome&&void 0!==chrome.storage&&void 0!==chrome.storage.local}function E(){return bo}function k(e){w()?chrome.storage.onChanged.addListener(function(t){null!=t.db_name&&e.emit(t.dbName.newValue)}):E()&&("undefined"!=typeof addEventListener?addEventListener("storage",function(t){e.emit(t.key)}):window.attachEvent("storage",function(t){e.emit(t.key)}))}function S(){uo.EventEmitter.call(this),this._listeners={},k(this)}function q(e){if("undefined"!==console&&e in console){var t=Array.prototype.slice.call(arguments,1);console[e].apply(console,t)}}function A(e,t){return e=parseInt(e,10)||0,t=parseInt(t,10),t!==t||t<=e?t=(e||1)<<1:t+=1,t>6e5&&(e=3e5,t=6e5),~~((t-e)*Math.random()+e)}function x(e){var t=0;return e||(t=2e3),A(e,t)}function T(e,t){q("info","The above "+e+" is totally normal. "+t)}function O(e,t,n){Error.call(this,n),this.status=e,this.name=t,this.message=n,this.error=!0}function j(e,t){function n(t){for(var n in e)"function"!=typeof e[n]&&(this[n]=e[n]);void 0!==t&&(this.reason=t)}return n.prototype=O.prototype,new n(t)}function C(e){if("object"!=typeof e){var t=e;e=jo,e.data=t}return"error"in e&&"conflict"===e.error&&(e.name="conflict",e.status=409),"name"in e||(e.name=e.error||"unknown"),"status"in e||(e.status=500),"message"in e||(e.message=e.message||e.reason),e}function L(e,t,n){try{return!e(t,n)}catch(e){var r="Filter function threw: "+e.toString();return j(Do,r)}}function I(e){var t={},n=e.filter&&"function"==typeof e.filter;return t.query=e.query_params,function(r){r.doc||(r.doc={});var o=n&&L(e.filter,r.doc,t);if("object"==typeof o)return o;if(o)return!1;if(e.include_docs){if(!e.attachments)for(var i in r.doc._attachments)r.doc._attachments.hasOwnProperty(i)&&(r.doc._attachments[i].stub=!0)}else delete r.doc;return!0}}function D(e){for(var t=[],n=0,r=e.length;n<r;n++)t=t.concat(e[n]);return t}function R(){}function N(e){var t;if(e?"string"!=typeof e?t=j(xo):/^_/.test(e)&&!/^_(design|local)/.test(e)&&(t=j(Oo)):t=j(To),t)throw t}function B(e){
return"boolean"==typeof e._remote?e._remote:"function"==typeof e.type&&(q("warn","db.type() is deprecated and will be removed in a future version of PouchDB"),"http"===e.type())}function $(e,t){return"listenerCount"in e?e.listenerCount(t):uo.EventEmitter.listenerCount(e,t)}function F(e){if(!e)return null;var t=e.split("/");return 2===t.length?t:1===t.length?[e,e]:null}function M(e){var t=F(e);return t?t.join("/"):null}function P(e){for(var t=Ho.exec(e),n={},r=14;r--;){var o=Po[r],i=t[r]||"",a=-1!==["user","password"].indexOf(o);n[o]=a?decodeURIComponent(i):i}return n[Uo]={},n[Po[12]].replace(Jo,function(e,t,r){t&&(n[Uo][t]=r)}),n}function U(e,t){var n=[],r=[];for(var o in t)t.hasOwnProperty(o)&&(n.push(o),r.push(t[o]));return n.push(e),Function.apply(null,n).apply(null,r)}function J(e,t,n){return new vo(function(r,o){e.get(t,function(i,a){if(i){if(404!==i.status)return o(i);a={}}var s=a._rev,u=n(a);if(!u)return r({updated:!1,rev:s});u._id=t,u._rev=s,r(H(e,u,n))})})}function H(e,t,n){return e.put(t).then(function(e){return{updated:!0,rev:e.rev}},function(r){if(409!==r.status)throw r;return J(e,t._id,n)})}function W(){return io.v4().replace(/-/g,"").toLowerCase()}function z(e){for(var t,n,r,o,i=e.rev_tree.slice();o=i.pop();){var a=o.ids,s=a[2],u=o.pos;if(s.length)for(var c=0,f=s.length;c<f;c++)i.push({pos:u+1,ids:s[c]});else{var l=!!a[1].deleted,d=a[0];t&&!(r!==l?r:n!==u?n<u:t<d)||(t=d,n=u,r=l)}}return n+"-"+t}function K(e,t){for(var n,r=e.slice();n=r.pop();)for(var o=n.pos,i=n.ids,a=i[2],s=t(0===a.length,o,i[0],n.ctx,i[1]),u=0,c=a.length;u<c;u++)r.push({pos:o+1,ids:a[u],ctx:s})}function X(e,t){return e.pos-t.pos}function G(e){var t=[];K(e,function(e,n,r,o,i){e&&t.push({rev:n+"-"+r,pos:n,opts:i})}),t.sort(X).reverse();for(var n=0,r=t.length;n<r;n++)delete t[n].pos;return t}function V(e){for(var t=z(e),n=G(e.rev_tree),r=[],o=0,i=n.length;o<i;o++){var a=n[o];a.rev===t||a.opts.deleted||r.push(a.rev)}return r}function Q(e){var t=[];return K(e.rev_tree,function(e,n,r,o,i){"available"!==i.status||e||(t.push(n+"-"+r),i.status="missing")}),t}function Y(e){for(var t,n=[],r=e.slice();t=r.pop();){var o=t.pos,i=t.ids,a=i[0],s=i[1],u=i[2],c=0===u.length,f=t.history?t.history.slice():[];f.push({id:a,opts:s}),c&&n.push({pos:o+1-f.length,ids:f});for(var l=0,d=u.length;l<d;l++)r.push({pos:o+1,ids:u[l],history:f})}return n.reverse()}function Z(e,t){return e.pos-t.pos}function ee(e,t,n){for(var r,o=0,i=e.length;o<i;)r=o+i>>>1,n(e[r],t)<0?o=r+1:i=r;return o}function te(e,t,n){var r=ee(e,t,n);e.splice(r,0,t)}function ne(e,t){for(var n,r,o=t,i=e.length;o<i;o++){var a=e[o],s=[a.id,a.opts,[]];r?(r[2].push(s),r=s):n=r=s}return n}function re(e,t){return e[0]<t[0]?-1:1}function oe(e,t){for(var n=[{tree1:e,tree2:t}],r=!1;n.length>0;){var o=n.pop(),i=o.tree1,a=o.tree2;(i[1].status||a[1].status)&&(i[1].status="available"===i[1].status||"available"===a[1].status?"available":"missing");for(var s=0;s<a[2].length;s++)if(i[2][0]){for(var u=!1,c=0;c<i[2].length;c++)i[2][c][0]===a[2][s][0]&&(n.push({tree1:i[2][c],tree2:a[2][s]}),u=!0);u||(r="new_branch",te(i[2],a[2][s],re))}else r="new_leaf",i[2][0]=a[2][s]}return{conflicts:r,tree:e}}function ie(e,t,n){var r,o=[],i=!1,a=!1;if(!e.length)return{tree:[t],conflicts:"new_leaf"};for(var s=0,u=e.length;s<u;s++){var c=e[s];if(c.pos===t.pos&&c.ids[0]===t.ids[0])r=oe(c.ids,t.ids),o.push({pos:c.pos,ids:r.tree}),i=i||r.conflicts,a=!0;else if(!0!==n){var f=c.pos<t.pos?c:t,l=c.pos<t.pos?t:c,d=l.pos-f.pos,h=[],p=[];for(p.push({ids:f.ids,diff:d,parent:null,parentIdx:null});p.length>0;){var v=p.pop();if(0!==v.diff)for(var g=v.ids[2],y=0,_=g.length;y<_;y++)p.push({ids:g[y],diff:v.diff-1,parent:v.ids,parentIdx:y});else v.ids[0]===l.ids[0]&&h.push(v)}var m=h[0];m?(r=oe(m.ids,l.ids),m.parent[2][m.parentIdx]=r.tree,o.push({pos:f.pos,ids:f.ids}),i=i||r.conflicts,a=!0):o.push(c)}else o.push(c)}return a||o.push(t),o.sort(Z),{tree:o,conflicts:i||"internal_node"}}function ae(e,t){for(var n,r,o=Y(e),i=0,a=o.length;i<a;i++){var s,u=o[i],c=u.ids;if(c.length>t){n||(n={});var f=c.length-t;s={pos:u.pos+f,ids:ne(c,f)};for(var l=0;l<f;l++){var d=u.pos+l+"-"+c[l].id;n[d]=!0}}else s={pos:u.pos,ids:ne(c,0)};r=r?ie(r,s,!0).tree:[s]}return n&&K(r,function(e,t,r){delete n[t+"-"+r]}),{tree:r,revs:n?Object.keys(n):[]}}function se(e,t,n){var r=ie(e,t),o=ae(r.tree,n);return{tree:o.tree,stemmedRevs:o.revs,conflicts:r.conflicts}}function ue(e,t){for(var n,r=e.slice(),o=t.split("-"),i=parseInt(o[0],10),a=o[1];n=r.pop();){if(n.pos===i&&n.ids[0]===a)return!0;for(var s=n.ids[2],u=0,c=s.length;u<c;u++)r.push({pos:n.pos+1,ids:s[u]})}return!1}function ce(e){return e.ids}function fe(e,t){t||(t=z(e));for(var n,r=t.substring(t.indexOf("-")+1),o=e.rev_tree.map(ce);n=o.pop();){if(n[0]===r)return!!n[1].deleted;o=o.concat(n[2])}}function le(e){return/^_local/.test(e)}function de(e,t){for(var n,r=t.rev_tree.slice();n=r.pop();){var o=n.pos,i=n.ids,a=i[0],s=i[1],u=i[2],c=0===u.length,f=n.history?n.history.slice():[];if(f.push({id:a,pos:o,opts:s}),c)for(var l=0,d=f.length;l<d;l++){var h=f[l],p=h.pos+"-"+h.id;if(p===e)return o+"-"+a}for(var v=0,g=u.length;v<g;v++)r.push({pos:o+1,ids:u[v],history:f})}throw new Error("Unable to resolve latest revision for id "+t.id+", rev "+e)}function he(e,t){try{e.emit("change",t)}catch(e){q("error",'Error in .on("change", function):',e)}}function pe(e,t,n){function r(){o.cancel()}uo.EventEmitter.call(this);var o=this;this.db=e,t=t?u(t):{};var i=t.complete=c(function(t,n){t?$(o,"error")>0&&o.emit("error",t):o.emit("complete",n),o.removeAllListeners(),e.removeListener("destroyed",r)});n&&(o.on("complete",function(e){n(null,e)}),o.on("error",n)),e.once("destroyed",r),t.onChange=function(e){o.isCancelled||he(o,e)};var a=new vo(function(e,n){t.complete=function(t,r){t?n(t):e(r)}});o.once("cancel",function(){e.removeListener("destroyed",r),t.complete(null,{status:"cancelled"})}),this.then=a.then.bind(a),this.catch=a.catch.bind(a),this.then(function(e){i(null,e)},i),e.taskqueue.isReady?o.validateChanges(t):e.taskqueue.addTask(function(e){e?t.complete(e):o.isCancelled?o.emit("cancel"):o.validateChanges(t)})}function ve(e,t,n){var r=[{rev:e._rev}];"all_docs"===n.style&&(r=G(t.rev_tree).map(function(e){return{rev:e.rev}}));var o={id:t.id,changes:r,doc:e};return fe(t,e._rev)&&(o.deleted=!0),n.conflicts&&(o.doc._conflicts=V(t),o.doc._conflicts.length||delete o.doc._conflicts),o}function ge(e,t){return e<t?-1:e>t?1:0}function ye(e,t){return function(n,r){n||r[0]&&r[0].error?(n=n||r[0],n.docId=t,e(n)):e(null,r.length?r[0]:r)}}function _e(e){for(var t=0;t<e.length;t++){var n=e[t];if(n._deleted)delete n._attachments;else if(n._attachments)for(var r=Object.keys(n._attachments),o=0;o<r.length;o++){var i=r[o];n._attachments[i]=y(n._attachments[i],["data","digest","content_type","length","revpos","stub"])}}}function me(e,t){var n=ge(e._id,t._id);return 0!==n?n:ge(e._revisions?e._revisions.start:0,t._revisions?t._revisions.start:0)}function be(e){var t={},n=[];return K(e,function(e,r,o,i){var a=r+"-"+o;return e&&(t[a]=0),void 0!==i&&n.push({from:i,to:a}),a}),n.reverse(),n.forEach(function(e){void 0===t[e.from]?t[e.from]=1+t[e.to]:t[e.from]=Math.min(t[e.from],1+t[e.to])}),t}function we(e,t,n){var r="limit"in t?t.keys.slice(t.skip,t.limit+t.skip):t.skip>0?t.keys.slice(t.skip):t.keys;if(t.descending&&r.reverse(),!r.length)return e._allDocs({limit:0},n);var o={offset:t.skip};return vo.all(r.map(function(n){var r=ko({key:n,deleted:"ok"},t);return["limit","skip","keys"].forEach(function(e){delete r[e]}),new vo(function(t,i){e._allDocs(r,function(e,r){if(e)return i(e);o.total_rows=r.total_rows,t(r.rows[0]||{key:n,error:"not_found"})})})})).then(function(e){return o.rows=e,o})}function Ee(e){var t=e._compactionQueue[0],n=t.opts,r=t.callback;e.get("_local/compaction").catch(function(){return!1}).then(function(t){t&&t.last_seq&&(n.last_seq=t.last_seq),e._compact(n,function(t,n){t?r(t):r(null,n),fo(function(){e._compactionQueue.shift(),e._compactionQueue.length&&Ee(e)})})})}function ke(e){return"_"===e.charAt(0)&&e+" is not a valid attachment name, attachment names cannot start with '_'"}function Se(){uo.EventEmitter.call(this)}function qe(){this.isReady=!1,this.failed=!1,this.queue=[]}function Ae(e,t){var n=e.match(/([a-z-]*):\/\/(.*)/);if(n)return{name:/https?/.test(n[1])?n[1]+"://"+n[2]:n[2],adapter:n[1]};var r=Te.adapters,o=Te.preferredAdapters,i=Te.prefix,a=t.adapter;if(!a)for(var s=0;s<o.length;++s){a=o[s];{if(!("idb"===a&&"websql"in r&&E()&&localStorage["_pouch__websqldb_"+i+e]))break;q("log",'PouchDB is downgrading "'+e+'" to WebSQL to avoid data loss, because it was already opened with WebSQL.')}}var u=r[a];return{name:u&&"use_prefix"in u&&!u.use_prefix?e:i+e,adapter:a}}function xe(e){function t(t){e.removeListener("closed",n),t||e.constructor.emit("destroyed",e.name)}function n(){e.removeListener("destroyed",t),e.constructor.emit("unref",e)}e.once("destroyed",t),e.once("closed",n),e.constructor.emit("ref",e)}function Te(e,t){if(!(this instanceof Te))return new Te(e,t);var n=this;if(t=t||{},e&&"object"==typeof e&&(t=e,e=t.name,delete t.name),this.__opts=t=u(t),n.auto_compaction=t.auto_compaction,n.prefix=Te.prefix,"string"!=typeof e)throw new Error("Missing/invalid DB name");var r=(t.prefix||"")+e,o=Ae(r,t);if(t.name=o.name,t.adapter=t.adapter||o.adapter,n.name=e,n._adapter=t.adapter,Te.emit("debug",["adapter","Picked adapter: ",t.adapter]),!Te.adapters[t.adapter]||!Te.adapters[t.adapter].valid())throw new Error("Invalid Adapter: "+t.adapter);Se.call(n),n.taskqueue=new qe,n.adapter=t.adapter,Te.adapters[t.adapter].call(n,t,function(e){if(e)return n.taskqueue.fail(e);xe(n),n.emit("created",n),Te.emit("created",n.name),n.taskqueue.ready(n)})}function Oe(e){e.debug=lo;var t={};e.on("debug",function(e){var n=e[0],r=e.slice(1);t[n]||(t[n]=lo("pouchdb:"+n)),t[n].apply(null,r)})}function je(e,t){for(var n=e,r=0,o=t.length;r<o;r++){if(!(n=n[t[r]]))break}return n}function Ce(e,t){return e<t?-1:e>t?1:0}function Le(e){for(var t=[],n="",r=0,o=e.length;r<o;r++){var i=e[r];"."===i?r>0&&"\\"===e[r-1]?n=n.substring(0,n.length-1)+".":(t.push(n),n=""):n+=i}return t.push(n),t}function Ie(e){return Ko.indexOf(e)>-1}function De(e){return Object.keys(e)[0]}function Re(e){return e[De(e)]}function Ne(e){var t={};return e.forEach(function(e){Object.keys(e).forEach(function(n){var r=e[n];if("object"!=typeof r&&(r={$eq:r}),Ie(n))r instanceof Array?t[n]=r.map(function(e){return Ne([e])}):t[n]=Ne([r]);else{var o=t[n]=t[n]||{};Object.keys(r).forEach(function(e){var t=r[e];return"$gt"===e||"$gte"===e?Be(e,t,o):"$lt"===e||"$lte"===e?$e(e,t,o):"$ne"===e?Fe(t,o):"$eq"===e?Me(t,o):void(o[e]=t)})}})}),t}function Be(e,t,n){void 0===n.$eq&&(void 0!==n.$gte?"$gte"===e?t>n.$gte&&(n.$gte=t):t>=n.$gte&&(delete n.$gte,n.$gt=t):void 0!==n.$gt?"$gte"===e?t>n.$gt&&(delete n.$gt,n.$gte=t):t>n.$gt&&(n.$gt=t):n[e]=t)}function $e(e,t,n){void 0===n.$eq&&(void 0!==n.$lte?"$lte"===e?t<n.$lte&&(n.$lte=t):t<=n.$lte&&(delete n.$lte,n.$lt=t):void 0!==n.$lt?"$lte"===e?t<n.$lt&&(delete n.$lt,n.$lte=t):t<n.$lt&&(n.$lt=t):n[e]=t)}function Fe(e,t){"$ne"in t?t.$ne.push(e):t.$ne=[e]}function Me(e,t){delete t.$gt,delete t.$gte,delete t.$lt,delete t.$lte,delete t.$ne,t.$eq=e}function Pe(e){var t=u(e),n=!1;"$and"in t&&(t=Ne(t.$and),n=!0),["$or","$nor"].forEach(function(e){e in t&&t[e].forEach(function(e){for(var t=Object.keys(e),n=0;n<t.length;n++){var r=t[n],o=e[r];"object"==typeof o&&null!==o||(e[r]={$eq:o})}})}),"$not"in t&&(t.$not=Ne([t.$not]));for(var r=Object.keys(t),o=0;o<r.length;o++){var i=r[o],a=t[i];"object"!=typeof a||null===a?a={$eq:a}:"$ne"in a&&!n&&(a.$ne=[a.$ne]),t[i]=a}return t}function Ue(e,t,n){for(var r="",o=n-e.length;r.length<o;)r+=t;return r}function Je(e,t,n){return Ue(e,t,n)+e}function He(e,t){if(e===t)return 0;e=We(e),t=We(t);var n=et(e),r=et(t);if(n-r!=0)return n-r;switch(typeof e){case"number":return e-t;case"boolean":return e<t?-1:1;case"string":return Ye(e,t)}return Array.isArray(e)?Qe(e,t):Ze(e,t)}function We(e){switch(typeof e){case"undefined":return null;case"number":return e===1/0||e===-1/0||isNaN(e)?null:e;case"object":var t=e;if(Array.isArray(e)){var n=e.length;e=new Array(n);for(var r=0;r<n;r++)e[r]=We(t[r])}else{if(e instanceof Date)return e.toJSON();if(null!==e){e={};for(var o in t)if(t.hasOwnProperty(o)){var i=t[o];void 0!==i&&(e[o]=We(i))}}}}return e}function ze(e){if(null!==e)switch(typeof e){case"boolean":return e?1:0;case"number":return tt(e);case"string":return e.replace(/\u0002/g,"").replace(/\u0001/g,"").replace(/\u0000/g,"");case"object":var t=Array.isArray(e),n=t?e:Object.keys(e),r=-1,o=n.length,i="";if(t)for(;++r<o;)i+=Ke(n[r]);else for(;++r<o;){var a=n[r];i+=Ke(a)+Ke(e[a])}return i}return""}function Ke(e){return e=We(e),et(e)+Vo+ze(e)+"\0"}function Xe(e,t){var n,r=t;if("1"===e[t])n=0,t++;else{var o="0"===e[t];t++;var i="",a=e.substring(t,t+Go),s=parseInt(a,10)+Xo;for(o&&(s=-s),t+=Go;;){var u=e[t];if("\0"===u)break;i+=u,t++}i=i.split("."),n=1===i.length?parseInt(i,10):parseFloat(i[0]+"."+i[1]),o&&(n-=10),0!==s&&(n=parseFloat(n+"e"+s))}return{num:n,length:t-r}}function Ge(e,t){var n=e.pop();if(t.length){var r=t[t.length-1];n===r.element&&(t.pop(),r=t[t.length-1]);var o=r.element,i=r.index;if(Array.isArray(o))o.push(n);else if(i===e.length-2){var a=e.pop();o[a]=n}else e.push(n)}}function Ve(e){for(var t=[],n=[],r=0;;){var o=e[r++];if("\0"!==o)switch(o){case"1":t.push(null);break;case"2":t.push("1"===e[r]),r++;break;case"3":var i=Xe(e,r);t.push(i.num),r+=i.length;break;case"4":for(var a="";;){var s=e[r];if("\0"===s)break;a+=s,r++}a=a.replace(/\u0001\u0001/g,"\0").replace(/\u0001\u0002/g,"").replace(/\u0002\u0002/g,""),t.push(a);break;case"5":var u={element:[],index:t.length};t.push(u.element),n.push(u);break;case"6":var c={element:{},index:t.length};t.push(c.element),n.push(c);break;default:throw new Error("bad collationIndex or unexpectedly reached end of input: "+o)}else{if(1===t.length)return t.pop();Ge(t,n)}}}function Qe(e,t){for(var n=Math.min(e.length,t.length),r=0;r<n;r++){var o=He(e[r],t[r]);if(0!==o)return o}return e.length===t.length?0:e.length>t.length?1:-1}function Ye(e,t){return e===t?0:e>t?1:-1}function Ze(e,t){for(var n=Object.keys(e),r=Object.keys(t),o=Math.min(n.length,r.length),i=0;i<o;i++){var a=He(n[i],r[i]);if(0!==a)return a;if(0!==(a=He(e[n[i]],t[r[i]])))return a}return n.length===r.length?0:n.length>r.length?1:-1}function et(e){var t=["boolean","number","string","object"],n=t.indexOf(typeof e);return~n?null===e?1:Array.isArray(e)?5:n<3?n+2:n+3:Array.isArray(e)?5:void 0}function tt(e){if(0===e)return"1";var t=e.toExponential().split(/e\+?/),n=parseInt(t[1],10),r=e<0,o=r?"0":"2",i=(r?-n:n)-Xo,a=Je(i.toString(),"0",Go);o+=Vo+a;var s=Math.abs(parseFloat(t[0]));r&&(s=10-s);var u=s.toFixed(20);return u=u.replace(/\.?0+$/,""),o+=Vo+u}function nt(e){function t(t){return e.map(function(e){var n=De(e),r=Le(n);return je(t,r)})}return function(e,n){var r=t(e.doc),o=t(n.doc),i=He(r,o);return 0!==i?i:Ce(e.doc._id,n.doc._id)}}function rt(e,t,n){if(e=e.filter(function(e){return ot(e.doc,t.selector,n)}),t.sort){var r=nt(t.sort);e=e.sort(r),"string"!=typeof t.sort[0]&&"desc"===Re(t.sort[0])&&(e=e.reverse())}if("limit"in t||"skip"in t){var o=t.skip||0,i=("limit"in t?t.limit:e.length)+o;e=e.slice(o,i)}return e}function ot(e,t,n){return n.every(function(n){var r=t[n],o=Le(n),i=je(e,o);return Ie(n)?at(n,r,e):it(r,e,o,i)})}function it(e,t,n,r){return!e||Object.keys(e).every(function(o){var i=e[o];return st(o,t,i,n,r)})}function at(e,t,n){return"$or"===e?t.some(function(e){return ot(n,e,Object.keys(e))}):"$not"===e?!ot(n,t,Object.keys(t)):!t.find(function(e){return ot(n,e,Object.keys(e))})}function st(e,t,n,r,o){if(!Qo[e])throw new Error('unknown operator "'+e+'" - should be one of $eq, $lte, $lt, $gt, $gte, $exists, $ne, $in, $nin, $size, $mod, $regex, $elemMatch, $type, $allMatch or $all');return Qo[e](t,n,r,o)}function ut(e){return void 0!==e&&null!==e}function ct(e){return void 0!==e}function ft(e,t){var n=t[0],r=t[1];if(0===n)throw new Error("Bad divisor, cannot divide by zero");if(parseInt(n,10)!==n)throw new Error("Divisor is not an integer");if(parseInt(r,10)!==r)throw new Error("Modulus is not an integer");return parseInt(e,10)===e&&e%n===r}function lt(e,t){return t.some(function(t){return e instanceof Array?e.indexOf(t)>-1:e===t})}function dt(e,t){return t.every(function(t){return e.indexOf(t)>-1})}function ht(e,t){return e.length===t}function pt(e,t){return new RegExp(t).test(e)}function vt(e,t){switch(t){case"null":return null===e;case"boolean":return"boolean"==typeof e;case"number":return"number"==typeof e;case"string":return"string"==typeof e;case"array":return e instanceof Array;case"object":return"[object Object]"==={}.toString.call(e)}throw new Error(t+" not supported as a type.Please use one of object, string, array, number, boolean or null.")}function gt(e,t){if("object"!=typeof t)throw new Error("Selector error: expected a JSON object");t=Pe(t);var n={doc:e},r=rt([n],{selector:t},Object.keys(t));return r&&1===r.length}function yt(e){return U('"use strict";\nreturn '+e+";",{})}function _t(e){return U(["return function(doc) {",'  "use strict";',"  var emitted = false;","  var emit = function (a, b) {","    emitted = true;","  };","  var view = "+e+";","  view(doc);","  if (emitted) {","    return true;","  }","};"].join("\n"),{})}function mt(e,t){if(e.selector&&e.filter&&"_selector"!==e.filter){var n="string"==typeof e.filter?e.filter:"function";return t(new Error('selector invalid for filter "'+n+'"'))}t()}function bt(e){e.view&&!e.filter&&(e.filter="_view"),e.selector&&!e.filter&&(e.filter="_selector"),e.filter&&"string"==typeof e.filter&&("_view"===e.filter?e.view=M(e.view):e.filter=M(e.filter))}function wt(e,t){return t.filter&&"string"==typeof t.filter&&!t.doc_ids&&!B(e.db)}function Et(e,t){var n=t.complete;if("_view"===t.filter){if(!t.view||"string"!=typeof t.view){var r=j(Do,"`view` filter parameter not found or invalid.");return n(r)}var o=F(t.view);e.db.get("_design/"+o[0],function(r,i){if(e.isCancelled)return n(null,{status:"cancelled"});if(r)return n(C(r));var a=i&&i.views&&i.views[o[1]]&&i.views[o[1]].map;if(!a)return n(j(qo,i.views?"missing json key: "+o[1]:"missing json key: views"));t.filter=_t(a),e.doChanges(t)})}else if(t.selector)t.filter=function(e){return gt(e,t.selector)},e.doChanges(t);else{var i=F(t.filter);e.db.get("_design/"+i[0],function(r,o){if(e.isCancelled)return n(null,{status:"cancelled"});if(r)return n(C(r));var a=o&&o.filters&&o.filters[i[1]];if(!a)return n(j(qo,o&&o.filters?"missing json key: "+i[1]:"missing json key: filters"));t.filter=yt(a),e.doChanges(t)})}}function kt(e){e._changesFilterPlugin={validate:mt,normalize:bt,shouldFilter:wt,filter:Et}}function St(e){return e.reduce(function(e,t){return e[t]=!0,e},{})}function qt(e){if(!/^\d+-./.test(e))return j($o);var t=e.indexOf("-"),n=e.substring(0,t),r=e.substring(t+1);return{prefix:parseInt(n,10),id:r}}function At(e,t){for(var n=e.start-e.ids.length+1,r=e.ids,o=[r[0],t,[]],i=1,a=r.length;i<a;i++)o=[r[i],{status:"missing"},[o]];return[{pos:n,ids:o}]}function xt(e,t){var n,r,o,i={status:"available"};if(e._deleted&&(i.deleted=!0),t)if(e._id||(e._id=Wo()),r=W(),e._rev){if(o=qt(e._rev),o.error)return o;e._rev_tree=[{pos:o.prefix,ids:[o.id,{status:"missing"},[[r,i,[]]]]}],n=o.prefix+1}else e._rev_tree=[{pos:1,ids:[r,i,[]]}],n=1;else if(e._revisions&&(e._rev_tree=At(e._revisions,i),n=e._revisions.start,r=e._revisions.ids[0]),!e._rev_tree){if(o=qt(e._rev),o.error)return o;n=o.prefix,r=o.id,e._rev_tree=[{pos:n,ids:[r,i,[]]}]}N(e._id),e._rev=n+"-"+r;var a={metadata:{},data:{}};for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var u="_"===s[0];if(u&&!Zo[s]){var c=j(Io,s);throw c.message=Io.message+": "+s,c}u&&!ei[s]?a.metadata[s.slice(1)]=e[s]:a.data[s]=e[s]}return a}function Tt(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(i){if("TypeError"!==i.name)throw i;for(var n="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder,r=new n,o=0;o<e.length;o+=1)r.append(e[o]);return r.getBlob(t.type)}}function Ot(e){for(var t=e.length,n=new ArrayBuffer(t),r=new Uint8Array(n),o=0;o<t;o++)r[o]=e.charCodeAt(o);return n}function jt(e,t){return Tt([Ot(e)],{type:t})}function Ct(e,t){return jt(ti(e),t)}function Lt(e){for(var t="",n=new Uint8Array(e),r=n.byteLength,o=0;o<r;o++)t+=String.fromCharCode(n[o]);return t}function It(e,t){if("undefined"==typeof FileReader)return t(Lt((new FileReaderSync).readAsArrayBuffer(e)));var n=new FileReader,r="function"==typeof n.readAsBinaryString;n.onloadend=function(e){var n=e.target.result||"";if(r)return t(n);t(Lt(n))},r?n.readAsBinaryString(e):n.readAsArrayBuffer(e)}function Dt(e,t){It(e,function(e){t(e)})}function Rt(e,t){Dt(e,function(e){t(ni(e))})}function Nt(e,t){if("undefined"==typeof FileReader)return t((new FileReaderSync).readAsArrayBuffer(e));var n=new FileReader;n.onloadend=function(e){var n=e.target.result||new ArrayBuffer(0);t(n)},n.readAsArrayBuffer(e)}function Bt(e){return ni(e)}function $t(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.slice(t,n)}function Ft(e,t,n,r,o){(n>0||r<t.size)&&(t=$t(t,n,r)),Nt(t,function(t){e.append(t),o()})}function Mt(e,t,n,r,o){(n>0||r<t.length)&&(t=t.substring(n,r)),e.appendBinary(t),o()}function Pt(e,t){function n(){ri(o)}function r(){var e=f.end(!0),n=Bt(e);t(n),f.destroy()}function o(){var t=c*s,o=t+s;c++,c<u?l(f,e,t,o,n):l(f,e,t,o,r)}var i="string"==typeof e,a=i?e.length:e.size,s=Math.min(oi,a),u=Math.ceil(a/s),c=0,f=i?new ho:new ho.ArrayBuffer,l=i?Mt:Ft;o()}function Ut(e){return ho.hash(e)}function Jt(e){try{return ti(e)}catch(e){var t=j(Co,"Attachment is not a valid base64 string");return{error:t}}}function Ht(e,t,n){var r=Jt(e.data);if(r.error)return n(r.error);e.length=r.length,e.data="blob"===t?jt(r,e.content_type):"base64"===t?ni(r):r,Pt(r,function(t){e.digest="md5-"+t,n()})}function Wt(e,t,n){Pt(e.data,function(r){e.digest="md5-"+r,e.length=e.data.size||e.data.length||0,"binary"===t?Dt(e.data,function(t){e.data=t,n()}):"base64"===t?Rt(e.data,function(t){e.data=t,n()}):n()})}function zt(e,t,n){if(e.stub)return n();"string"==typeof e.data?Ht(e,t,n):Wt(e,t,n)}function Kt(e,t,n){function r(){i++,e.length===i&&(o?n(o):n())}if(!e.length)return n();var o,i=0;e.forEach(function(e){function n(e){o=e,++a===i.length&&r()}var i=e.data&&e.data._attachments?Object.keys(e.data._attachments):[],a=0;if(!i.length)return r();for(var s in e.data._attachments)e.data._attachments.hasOwnProperty(s)&&zt(e.data._attachments[s],t,n)})}function Xt(e,t,n,r,o,i,a,s){if(ue(t.rev_tree,n.metadata.rev))return r[o]=n,i();var u=t.winningRev||z(t),c="deleted"in t?t.deleted:fe(t,u),f="deleted"in n.metadata?n.metadata.deleted:fe(n.metadata),l=/^1-/.test(n.metadata.rev);if(c&&!f&&s&&l){var d=n.data;d._rev=u,d._id=n.metadata.id,n=xt(d,s)}var h=se(t.rev_tree,n.metadata.rev_tree[0],e);if(s&&(c&&f&&"new_leaf"!==h.conflicts||!c&&"new_leaf"!==h.conflicts||c&&!f&&"new_branch"===h.conflicts)){var p=j(Ao);return r[o]=p,i()}var v=n.metadata.rev;n.metadata.rev_tree=h.tree,n.stemmedRevs=h.stemmedRevs||[],t.rev_map&&(n.metadata.rev_map=t.rev_map);var g,y=z(n.metadata),_=fe(n.metadata,y),m=c===_?0:c<_?-1:1;g=v===y?_:fe(n.metadata,v),a(n,y,_,g,!0,m,o,i)}function Gt(e){return"missing"===e.metadata.rev_tree[0].ids[1].status}function Vt(e,t,n,r,o,i,a,s,u){function c(e,t,n){var r=z(e.metadata),o=fe(e.metadata,r);if("was_delete"in s&&o)return i[t]=j(qo,"deleted"),n();if(l&&Gt(e)){var u=j(Ao);return i[t]=u,n()}a(e,r,o,o,!1,o?0:1,t,n)}function f(){++h===p&&u&&u()}e=e||1e3;var l=s.new_edits,d=new mo,h=0,p=t.length;t.forEach(function(e,t){if(e._id&&le(e._id)){var r=e._deleted?"_removeLocal":"_putLocal";return void n[r](e,{ctx:o},function(e,n){i[t]=e||n,f()})}var a=e.metadata.id;d.has(a)?(p--,d.get(a).push([e,t])):d.set(a,[[e,t]])}),d.forEach(function(t,n){function o(){++u<t.length?s():f()}function s(){var s=t[u],f=s[0],d=s[1];if(r.has(n))Xt(e,r.get(n),f,i,d,o,a,l);else{var h=se([],f.metadata.rev_tree[0],e);f.metadata.rev_tree=h.tree,f.stemmedRevs=h.stemmedRevs||[],c(f,d,o)}}var u=0;s()})}function Qt(e){try{return JSON.parse(e)}catch(t){return po.parse(e)}}function Yt(e){try{return JSON.stringify(e)}catch(t){return po.stringify(e)}}function Zt(e){return function(t){var n="unknown_error";t.target&&t.target.error&&(n=t.target.error.name||t.target.error.message),e(j(No,n,t.type))}}function en(e,t,n){return{data:Yt(e),winningRev:t,deletedOrLocal:n?"1":"0",seq:e.seq,id:e.id}}function tn(e){if(!e)return null;var t=Qt(e.data);return t.winningRev=e.winningRev,t.deleted="1"===e.deletedOrLocal,t.seq=e.seq,t}function nn(e){if(!e)return e;var t=e._doc_id_rev.lastIndexOf(":");return e._id=e._doc_id_rev.substring(0,t-1),e._rev=e._doc_id_rev.substring(t+1),delete e._doc_id_rev,e}function rn(e,t,n,r){n?r(e?"string"!=typeof e?e:Ct(e,t):Tt([""],{type:t})):e?"string"!=typeof e?It(e,function(e){r(ni(e))}):r(e):r("")}function on(e,t,n,r){function o(){++s===a.length&&r&&r()}function i(e,t){var r=e._attachments[t],i=r.digest;n.objectStore(ui).get(i).onsuccess=function(e){r.body=e.target.result.body,o()}}var a=Object.keys(e._attachments||{});if(!a.length)return r&&r();var s=0;a.forEach(function(n){t.attachments&&t.include_docs?i(e,n):(e._attachments[n].stub=!0,o())})}function an(e,t){return vo.all(e.map(function(e){if(e.doc&&e.doc._attachments){var n=Object.keys(e.doc._attachments);return vo.all(n.map(function(n){var r=e.doc._attachments[n];if("body"in r){var o=r.body,i=r.content_type;return new vo(function(a){rn(o,i,t,function(t){e.doc._attachments[n]=ko(y(r,["digest","content_type"]),{data:t}),a()})})}}))}}))}function sn(e,t,n){function r(){--c||o()}function o(){i.length&&i.forEach(function(e){u.index("digestSeq").count(IDBKeyRange.bound(e+"::",e+"::￿",!1,!1)).onsuccess=function(t){t.target.result||s.delete(e)}})}var i=[],a=n.objectStore(si),s=n.objectStore(ui),u=n.objectStore(ci),c=e.length;e.forEach(function(e){var n=a.index("_doc_id_rev"),o=t+"::"+e;n.getKey(o).onsuccess=function(e){var t=e.target.result;if("number"!=typeof t)return r();a.delete(t),u.index("seq").openCursor(IDBKeyRange.only(t)).onsuccess=function(e){var t=e.target.result;if(t){var n=t.value.digestSeq.split("::")[0];i.push(n),u.delete(t.primaryKey),t.continue()}else r()}}})}function un(e,t,n){try{return{txn:e.transaction(t,n)}}catch(e){return{error:e}}}function cn(e,t,n,r,o,i){function a(){var e=[ai,si,ui,li,ci,fi],t=un(o,e,"readwrite");if(t.error)return i(t.error);m=t.txn,m.onabort=Zt(i),m.ontimeout=Zt(i),m.oncomplete=l,b=m.objectStore(ai),w=m.objectStore(si),E=m.objectStore(ui),k=m.objectStore(ci),S=m.objectStore(fi),S.get(fi).onsuccess=function(e){A=e.target.result,c()},h(function(e){if(e)return N=!0,i(e);f()})}function s(){L=!0,c()}function u(){Vt(e.revs_limit,x,r,R,m,D,p,n,s)}function c(){A&&L&&(A.docCount+=I,S.put(A))}function f(){function e(){++n===x.length&&u()}function t(t){var n=tn(t.target.result);n&&R.set(n.id,n),e()}if(x.length)for(var n=0,r=0,o=x.length;r<o;r++){var i=x[r];if(i._id&&le(i._id))e();else{var a=b.get(i.metadata.id);a.onsuccess=t}}}function l(){N||(hi.notify(r._meta.name),i(null,D))}function d(e,t){E.get(e).onsuccess=function(n){if(n.target.result)t();else{var r=j(Fo,"unknown stub attachment with digest "+e);r.status=412,t(r)}}}function h(e){function t(){++o===n.length&&e(r)}var n=[];if(x.forEach(function(e){e.data&&e.data._attachments&&Object.keys(e.data._attachments).forEach(function(t){var r=e.data._attachments[t];r.stub&&n.push(r.digest)})}),!n.length)return e();var r,o=0;n.forEach(function(e){d(e,function(e){e&&!r&&(r=e),t()})})}function p(e,t,n,r,o,i,a,s){e.metadata.winningRev=t,e.metadata.deleted=n;var u=e.data;if(u._id=e.metadata.id,u._rev=e.metadata.rev,r&&(u._deleted=!0),u._attachments&&Object.keys(u._attachments).length)return g(e,t,n,o,a,s);I+=i,c(),v(e,t,n,o,a,s)}function v(e,t,n,o,i,a){function s(i){var a=e.stemmedRevs||[];o&&r.auto_compaction&&(a=a.concat(Q(e.metadata))),a&&a.length&&sn(a,e.metadata.id,m),l.seq=i.target.result;var s=en(l,t,n);b.put(s).onsuccess=c}function u(e){e.preventDefault(),e.stopPropagation(),w.index("_doc_id_rev").getKey(f._doc_id_rev).onsuccess=function(e){w.put(f,e.target.result).onsuccess=s}}function c(){D[i]={ok:!0,id:l.id,rev:l.rev},R.set(e.metadata.id,e.metadata),y(e,l.seq,a)}var f=e.data,l=e.metadata;f._doc_id_rev=l.id+"::"+l.rev,delete f._id,delete f._rev;var d=w.put(f);d.onsuccess=s,d.onerror=u}function g(e,t,n,r,o,i){function a(){c===f.length&&v(e,t,n,r,o,i)}function s(){c++,a()}var u=e.data,c=0,f=Object.keys(u._attachments);f.forEach(function(n){var r=e.data._attachments[n];if(r.stub)c++,a();else{var o=r.data;delete r.data,r.revpos=parseInt(t,10);_(r.digest,o,s)}})}function y(e,t,n){function r(){++o===i.length&&n()}var o=0,i=Object.keys(e.data._attachments||{});if(!i.length)return n();for(var a=0;a<i.length;a++)!function(n){var o=e.data._attachments[n].digest,i=k.put({seq:t,digestSeq:o+"::"+t});i.onsuccess=r,i.onerror=function(e){e.preventDefault(),e.stopPropagation(),r()}}(i[a])}function _(e,t,n){E.count(e).onsuccess=function(r){if(r.target.result)return n();var o={digest:e,body:t};E.put(o).onsuccess=n}}for(var m,b,w,E,k,S,q,A,x=t.docs,T=0,O=x.length;T<O;T++){var C=x[T];C._id&&le(C._id)||(C=x[T]=xt(C,n.new_edits),C.error&&!q&&(q=C))}if(q)return i(q);var L=!1,I=0,D=new Array(x.length),R=new mo,N=!1,B=r._meta.blobSupport?"blob":"base64";Kt(x,B,function(e){if(e)return i(e);a()})}function fn(e,t,n,r,o){function i(e){f=e.target.result,c&&o(c,f,l)}function a(e){c=e.target.result,f&&o(c,f,l)}function s(){if(!c.length)return o();var n,s=c[c.length-1];if(t&&t.upper)try{n=IDBKeyRange.bound(s,t.upper,!0,t.upperOpen)}catch(e){if("DataError"===e.name&&0===e.code)return o()}else n=IDBKeyRange.lowerBound(s,!0);t=n,c=null,f=null,e.getAll(t,r).onsuccess=i,e.getAllKeys(t,r).onsuccess=a}function u(e){var t=e.target.result;if(!t)return o();o([t.key],[t.value],t)}var c,f,l,d="function"==typeof e.getAll&&"function"==typeof e.getAllKeys&&r>1&&!n;d?(l={continue:s},e.getAll(t,r).onsuccess=i,e.getAllKeys(t,r).onsuccess=a):n?e.openCursor(t,"prev").onsuccess=u:e.openCursor(t).onsuccess=u}function ln(e,t,n){function r(e){var t=e.target.result;t?(o.push(t.value),t.continue()):n({target:{result:o}})}if("function"==typeof e.getAll)return void(e.getAll(t).onsuccess=n);var o=[];e.openCursor(t).onsuccess=r}function dn(e,t,n,r,o){try{if(e&&t)return o?IDBKeyRange.bound(t,e,!n,!1):IDBKeyRange.bound(e,t,!1,!n);if(e)return o?IDBKeyRange.upperBound(e):IDBKeyRange.lowerBound(e);if(t)return o?IDBKeyRange.lowerBound(t,!n):IDBKeyRange.upperBound(t,!n);if(r)return IDBKeyRange.only(r)}catch(e){return{error:e}}return null}function hn(e,t,n){function r(t,n,r){var o=t.id+"::"+r;q.get(o).onsuccess=function(r){if(n.doc=nn(r.target.result),e.conflicts){var o=V(t);o.length&&(n.doc._conflicts=o)}on(n.doc,e,b)}}function o(t,n){var o={id:n.id,key:n.id,value:{rev:t}},i=n.deleted;"ok"===e.deleted?(A.push(o),i?(o.value.deleted=!0,o.doc=null):e.include_docs&&r(n,o,t)):!i&&h--<=0&&(A.push(o),e.include_docs&&r(n,o,t))}function i(e){for(var t=0,n=e.length;t<n&&A.length!==p;t++){var r=e[t],i=tn(r);o(i.winningRev,i)}}function a(e,t,n){n&&(i(t),A.length<p&&n.continue())}function s(t){var n=t.target.result;e.descending&&(n=n.reverse()),i(n)}function u(){n(null,{total_rows:w,offset:e.skip,rows:A})}function c(){e.attachments?an(A,e.binary).then(u):u()}var f="startkey"in e&&e.startkey,l="endkey"in e&&e.endkey,d="key"in e&&e.key,h=e.skip||0,p="number"==typeof e.limit?e.limit:-1,v=!1!==e.inclusive_end,g=dn(f,l,v,d,e.descending),y=g&&g.error;if(y&&("DataError"!==y.name||0!==y.code))return n(j(No,y.name,y.message));var _=[ai,si,fi];e.attachments&&_.push(ui);var m=un(t,_,"readonly");if(m.error)return n(m.error);var b=m.txn;b.oncomplete=c,b.onabort=Zt(n);var w,E=b.objectStore(ai),k=b.objectStore(si),S=b.objectStore(fi),q=k.index("_doc_id_rev"),A=[];return S.get(fi).onsuccess=function(e){w=e.target.result.docCount},
y||0===p?void 0:-1===p?ln(E,g,s):void fn(E,g,e.descending,p+h,a)}function pn(e){return new vo(function(t){var n=Tt([""]);e.objectStore(di).put(n,"key").onsuccess=function(){var e=navigator.userAgent.match(/Chrome\/(\d+)/),n=navigator.userAgent.match(/Edge\//);t(n||!e||parseInt(e[1],10)>=43)},e.onabort=function(e){e.preventDefault(),e.stopPropagation(),t(!1)}}).catch(function(){return!1})}function vn(e,t){e.objectStore(ai).index("deletedOrLocal").count(IDBKeyRange.only("0")).onsuccess=function(e){t(e.target.result)}}function gn(e,t,n,r){try{e(t,n)}catch(t){r.emit("error",t)}}function yn(){!pi&&vi.length&&(pi=!0,vi.shift()())}function _n(e,t,n){vi.push(function(){e(function(e,r){gn(t,e,r,n),pi=!1,fo(function(){yn(n)})})}),yn()}function mn(e,t,n,r){function o(t,n,r){function o(t,n){var r=e.processChange(n,t,e);d=r.seq=t.seq;var o=w(r);if("object"==typeof o)return e.complete(o);o&&(b++,p&&m.push(r),e.attachments&&e.include_docs?on(n,e,v,function(){an([r],e.binary).then(function(){e.onChange(r)})}):e.onChange(r))}function i(){for(var e=0,t=s.length;e<t&&b!==h;e++){var n=s[e];if(n){o(u[e],n)}}b!==h&&r.continue()}if(r&&t.length){var s=new Array(t.length),u=new Array(t.length),c=0;n.forEach(function(e,n){a(nn(e),t[n],function(e,r){u[n]=e,s[n]=r,++c===t.length&&i()})})}}function i(e,t,n,r){if(n.seq!==t)return r();if(n.winningRev===e._rev)return r(n,e);var o=e._id+"::"+n.winningRev;_.get(o).onsuccess=function(e){r(n,nn(e.target.result))}}function a(e,t,n){if(l&&!l.has(e._id))return n();var r=E.get(e._id);if(r)return i(e,t,r,n);y.get(e._id).onsuccess=function(o){r=tn(o.target.result),E.set(e._id,r),i(e,t,r,n)}}function s(){e.complete(null,{results:m,last_seq:d})}function c(){!e.continuous&&e.attachments?an(m).then(s):s()}if(e=u(e),e.continuous){var f=n+":"+Wo();return hi.addListener(n,f,t,e),hi.notify(n),{cancel:function(){hi.removeListener(n,f)}}}var l=e.doc_ids&&new _o(e.doc_ids);e.since=e.since||0;var d=e.since,h="limit"in e?e.limit:-1;0===h&&(h=1);var p;p="return_docs"in e?e.return_docs:!("returnDocs"in e)||e.returnDocs;var v,g,y,_,m=[],b=0,w=I(e),E=new mo,k=[ai,si];e.attachments&&k.push(ui);var S=un(r,k,"readonly");if(S.error)return e.complete(S.error);v=S.txn,v.onabort=Zt(e.complete),v.oncomplete=c,g=v.objectStore(si),y=v.objectStore(ai),_=g.index("_doc_id_rev"),fn(g,e.since&&!e.descending?IDBKeyRange.lowerBound(e.since,!0):null,e.descending,h,o)}function bn(e,t){var n=this;_n(function(t){wn(n,e,t)},t,n.constructor)}function wn(e,t,n){function r(e){var t=e.createObjectStore(ai,{keyPath:"id"});e.createObjectStore(si,{autoIncrement:!0}).createIndex("_doc_id_rev","_doc_id_rev",{unique:!0}),e.createObjectStore(ui,{keyPath:"digest"}),e.createObjectStore(fi,{keyPath:"id",autoIncrement:!1}),e.createObjectStore(di),t.createIndex("deletedOrLocal","deletedOrLocal",{unique:!1}),e.createObjectStore(li,{keyPath:"_id"});var n=e.createObjectStore(ci,{autoIncrement:!0});n.createIndex("seq","seq"),n.createIndex("digestSeq","digestSeq",{unique:!0})}function o(e,t){var n=e.objectStore(ai);n.createIndex("deletedOrLocal","deletedOrLocal",{unique:!1}),n.openCursor().onsuccess=function(e){var r=e.target.result;if(r){var o=r.value,i=fe(o);o.deletedOrLocal=i?"1":"0",n.put(o),r.continue()}else t()}}function i(e){e.createObjectStore(li,{keyPath:"_id"}).createIndex("_doc_id_rev","_doc_id_rev",{unique:!0})}function a(e,t){var n=e.objectStore(li),r=e.objectStore(ai),o=e.objectStore(si);r.openCursor().onsuccess=function(e){var i=e.target.result;if(i){var a=i.value,s=a.id,u=le(s),c=z(a);if(u){var f=s+"::"+c,l=s+"::",d=s+"::~",h=o.index("_doc_id_rev"),p=IDBKeyRange.bound(l,d,!1,!1),v=h.openCursor(p);v.onsuccess=function(e){if(v=e.target.result){var t=v.value;t._doc_id_rev===f&&n.put(t),o.delete(v.primaryKey),v.continue()}else r.delete(i.primaryKey),i.continue()}}else i.continue()}else t&&t()}}function s(e){var t=e.createObjectStore(ci,{autoIncrement:!0});t.createIndex("seq","seq"),t.createIndex("digestSeq","digestSeq",{unique:!0})}function u(e,t){var n=e.objectStore(si),r=e.objectStore(ui),o=e.objectStore(ci);r.count().onsuccess=function(e){if(!e.target.result)return t();n.openCursor().onsuccess=function(e){var n=e.target.result;if(!n)return t();for(var r=n.value,i=n.primaryKey,a=Object.keys(r._attachments||{}),s={},u=0;u<a.length;u++)s[r._attachments[a[u]].digest]=!0;var c=Object.keys(s);for(u=0;u<c.length;u++){var f=c[u];o.put({seq:i,digestSeq:f+"::"+i})}n.continue()}}}function c(e){function t(e){return e.data?tn(e):(e.deleted="1"===e.deletedOrLocal,e)}var n=e.objectStore(si),r=e.objectStore(ai);r.openCursor().onsuccess=function(e){function o(){var e=en(a,a.winningRev,a.deleted);r.put(e).onsuccess=function(){i.continue()}}var i=e.target.result;if(i){var a=t(i.value);if(a.winningRev=a.winningRev||z(a),a.seq)return o();!function(){var e=a.id+"::",t=a.id+"::￿",r=n.index("_doc_id_rev").openCursor(IDBKeyRange.bound(e,t)),i=0;r.onsuccess=function(e){var t=e.target.result;if(!t)return a.seq=i,o();var n=t.primaryKey;n>i&&(i=n),t.continue()}}()}}}var l=t.name,d=null;e._meta=null,e._remote=!1,e.type=function(){return"idb"},e._id=f(function(t){t(null,e._meta.instanceId)}),e._bulkDocs=function(n,r,o){cn(t,n,r,e,d,o)},e._get=function(e,t,n){function r(){n(a,{doc:o,metadata:i,ctx:s})}var o,i,a,s=t.ctx;if(!s){var u=un(d,[ai,si,ui],"readonly");if(u.error)return n(u.error);s=u.txn}s.objectStore(ai).get(e).onsuccess=function(e){if(!(i=tn(e.target.result)))return a=j(qo,"missing"),r();var n;if(t.rev)n=t.latest?de(t.rev,i):t.rev;else{n=i.winningRev;if(fe(i))return a=j(qo,"deleted"),r()}var u=s.objectStore(si),c=i.id+"::"+n;u.index("_doc_id_rev").get(c).onsuccess=function(e){if(o=e.target.result,o&&(o=nn(o)),!o)return a=j(qo,"missing"),r();r()}}},e._getAttachment=function(e,t,n,r,o){var i;if(r.ctx)i=r.ctx;else{var a=un(d,[ai,si,ui],"readonly");if(a.error)return o(a.error);i=a.txn}var s=n.digest,u=n.content_type;i.objectStore(ui).get(s).onsuccess=function(e){rn(e.target.result.body,u,r.binary,function(e){o(null,e)})}},e._info=function(t){var n,r,o=un(d,[fi,si],"readonly");if(o.error)return t(o.error);var i=o.txn;i.objectStore(fi).get(fi).onsuccess=function(e){r=e.target.result.docCount},i.objectStore(si).openCursor(null,"prev").onsuccess=function(e){var t=e.target.result;n=t?t.key:0},i.oncomplete=function(){t(null,{doc_count:r,update_seq:n,idb_attachment_format:e._meta.blobSupport?"binary":"base64"})}},e._allDocs=function(e,t){hn(e,d,t)},e._changes=function(t){return mn(t,e,l,d)},e._close=function(e){d.close(),gi.delete(l),e()},e._getRevisionTree=function(e,t){var n=un(d,[ai],"readonly");if(n.error)return t(n.error);n.txn.objectStore(ai).get(e).onsuccess=function(e){var n=tn(e.target.result);n?t(null,n.rev_tree):t(j(qo))}},e._doCompaction=function(e,t,n){var r=[ai,si,ui,ci],o=un(d,r,"readwrite");if(o.error)return n(o.error);var i=o.txn;i.objectStore(ai).get(e).onsuccess=function(n){var r=tn(n.target.result);K(r.rev_tree,function(e,n,r,o,i){var a=n+"-"+r;-1!==t.indexOf(a)&&(i.status="missing")}),sn(t,e,i);var o=r.winningRev,a=r.deleted;i.objectStore(ai).put(en(r,o,a))},i.onabort=Zt(n),i.oncomplete=function(){n()}},e._getLocal=function(e,t){var n=un(d,[li],"readonly");if(n.error)return t(n.error);var r=n.txn,o=r.objectStore(li).get(e);o.onerror=Zt(t),o.onsuccess=function(e){var n=e.target.result;n?(delete n._doc_id_rev,t(null,n)):t(j(qo))}},e._putLocal=function(e,t,n){"function"==typeof t&&(n=t,t={}),delete e._revisions;var r=e._rev,o=e._id;e._rev=r?"0-"+(parseInt(r.split("-")[1],10)+1):"0-1";var i,a=t.ctx;if(!a){var s=un(d,[li],"readwrite");if(s.error)return n(s.error);a=s.txn,a.onerror=Zt(n),a.oncomplete=function(){i&&n(null,i)}}var u,c=a.objectStore(li);r?(u=c.get(o),u.onsuccess=function(o){var a=o.target.result;if(a&&a._rev===r){c.put(e).onsuccess=function(){i={ok:!0,id:e._id,rev:e._rev},t.ctx&&n(null,i)}}else n(j(Ao))}):(u=c.add(e),u.onerror=function(e){n(j(Ao)),e.preventDefault(),e.stopPropagation()},u.onsuccess=function(){i={ok:!0,id:e._id,rev:e._rev},t.ctx&&n(null,i)})},e._removeLocal=function(e,t,n){"function"==typeof t&&(n=t,t={});var r=t.ctx;if(!r){var o=un(d,[li],"readwrite");if(o.error)return n(o.error);r=o.txn,r.oncomplete=function(){i&&n(null,i)}}var i,a=e._id,s=r.objectStore(li),u=s.get(a);u.onerror=Zt(n),u.onsuccess=function(r){var o=r.target.result;o&&o._rev===e._rev?(s.delete(a),i={ok:!0,id:a,rev:"0-0"},t.ctx&&n(null,i)):n(j(qo))}},e._destroy=function(e,t){hi.removeAllListeners(l);var n=yi.get(l);n&&n.result&&(n.result.close(),gi.delete(l));var r=indexedDB.deleteDatabase(l);r.onsuccess=function(){yi.delete(l),E()&&l in localStorage&&delete localStorage[l],t(null,{ok:!0})},r.onerror=Zt(t)};var h=gi.get(l);if(h)return d=h.idb,e._meta=h.global,fo(function(){n(null,e)});var p;p=t.storage?En(l,t.storage):indexedDB.open(l,ii),yi.set(l,p),p.onupgradeneeded=function(e){function t(){var e=l[d-1];d++,e&&e(f,t)}var n=e.target.result;if(e.oldVersion<1)return r(n);var f=e.currentTarget.transaction;e.oldVersion<3&&i(n),e.oldVersion<4&&s(n);var l=[o,a,u,c],d=e.oldVersion;t()},p.onsuccess=function(t){function r(){void 0!==s&&f&&(e._meta={name:l,instanceId:u,blobSupport:s},gi.set(l,{idb:d,global:e._meta}),n(null,e))}function o(){if(void 0!==a&&void 0!==i){var e=l+"_id";e in i?u=i[e]:i[e]=u=Wo(),i.docCount=a,c.objectStore(fi).put(i)}}d=t.target.result,d.onversionchange=function(){d.close(),gi.delete(l)},d.onabort=function(e){q("error","Database has a global failure",e.target.error),d.close(),gi.delete(l)};var i,a,s,u,c=d.transaction([fi,di,ai],"readwrite"),f=!1;c.objectStore(fi).get(fi).onsuccess=function(e){i=e.target.result||{id:fi},o()},vn(c,function(e){a=e,o()}),Yo||(Yo=pn(c)),Yo.then(function(e){s=e,r()}),c.oncomplete=function(){f=!0,r()}},p.onerror=function(){var e="Failed to open indexedDB, are you in private browsing mode?";q("error",e),n(j(No,e))}}function En(e,t){try{return indexedDB.open(e,{version:ii,storage:t})}catch(t){return indexedDB.open(e,ii)}}function kn(e){return decodeURIComponent(escape(e))}function Sn(e){return e<65?e-48:e-55}function qn(e,t,n){for(var r="";t<n;)r+=String.fromCharCode(Sn(e.charCodeAt(t++))<<4|Sn(e.charCodeAt(t++)));return r}function An(e,t,n){for(var r="";t<n;)r+=String.fromCharCode(Sn(e.charCodeAt(t+2))<<12|Sn(e.charCodeAt(t+3))<<8|Sn(e.charCodeAt(t))<<4|Sn(e.charCodeAt(t+1))),t+=4;return r}function xn(e,t){return"UTF-8"===t?kn(qn(e,0,e.length)):An(e,0,e.length)}function Tn(e){return"'"+e+"'"}function On(e){return e.replace(/\u0002/g,"").replace(/\u0001/g,"").replace(/\u0000/g,"")}function jn(e){return e.replace(/\u0001\u0001/g,"\0").replace(/\u0001\u0002/g,"").replace(/\u0002\u0002/g,"")}function Cn(e){return delete e._id,delete e._rev,JSON.stringify(e)}function Ln(e,t,n){return e=JSON.parse(e),e._id=t,e._rev=n,e}function In(e){for(var t="(";e--;)t+="?",e&&(t+=",");return t+")"}function Dn(e,t,n,r,o){return"SELECT "+e+" FROM "+("string"==typeof t?t:t.join(" JOIN "))+(n?" ON "+n:"")+(r?" WHERE "+("string"==typeof r?r:r.join(" AND ")):"")+(o?" ORDER BY "+o:"")}function Rn(e,t,n){function r(){++i===e.length&&o()}function o(){if(a.length){var e="SELECT DISTINCT digest AS digest FROM "+qi+" WHERE seq IN "+In(a.length);n.executeSql(e,a,function(e,t){for(var n=[],r=0;r<t.rows.length;r++)n.push(t.rows.item(r).digest);if(n.length){var o="DELETE FROM "+qi+" WHERE seq IN ("+a.map(function(){return"?"}).join(",")+")";e.executeSql(o,a,function(e){var t="SELECT digest FROM "+qi+" WHERE digest IN ("+n.map(function(){return"?"}).join(",")+")";e.executeSql(t,n,function(e,t){for(var r=new _o,o=0;o<t.rows.length;o++)r.add(t.rows.item(o).digest);n.forEach(function(t){r.has(t)||(e.executeSql("DELETE FROM "+qi+" WHERE digest=?",[t]),e.executeSql("DELETE FROM "+Ei+" WHERE digest=?",[t]))})})})}})}}if(e.length){var i=0,a=[];e.forEach(function(e){var o="SELECT seq FROM "+wi+" WHERE doc_id=? AND rev=?";n.executeSql(o,[t,e],function(e,t){if(!t.rows.length)return r();var n=t.rows.item(0).seq;a.push(n),e.executeSql("DELETE FROM "+wi+" WHERE seq=?",[n],r)})})}}function Nn(e){return function(t){q("error","WebSQL threw an error",t);var n=t&&t.constructor.toString().match(/function ([^(]+)/),r=n&&n[1]||t.type,o=t.target||t.message;e(j(Bo,o,r))}}function Bn(e){return"size"in e?1e6*e.size:"undefined"!=typeof navigator&&/Android/.test(navigator.userAgent)?5e6:1}function $n(e,t,n,r,o,i,a){function s(){if(m)return a(m);i.notify(r._name),a(null,b)}function u(e,t){var n="SELECT count(*) as cnt FROM "+Ei+" WHERE digest=?";_.executeSql(n,[e],function(n,r){if(0===r.rows.item(0).cnt){var o=j(Fo,"unknown stub attachment with digest "+e);t(o)}else t()})}function c(e){function t(){++o===n.length&&e(r)}var n=[];if(g.forEach(function(e){e.data&&e.data._attachments&&Object.keys(e.data._attachments).forEach(function(t){var r=e.data._attachments[t];r.stub&&n.push(r.digest)})}),!n.length)return e();var r,o=0;n.forEach(function(e){u(e,function(e){e&&!r&&(r=e),t()})})}function f(e,t,n,o,i,a,s,u){function c(){function t(e,t){function r(){return++o===i.length&&t(),!1}var o=0,i=Object.keys(n._attachments||{});if(!i.length)return t();for(var a=0;a<i.length;a++)!function(t){var o="INSERT INTO "+qi+" (digest, seq) VALUES (?,?)",i=[n._attachments[t].digest,e];_.executeSql(o,i,r,r)}(i[a])}var n=e.data,r=o?1:0,i=n._id,a=n._rev,s=Cn(n),u="INSERT INTO "+wi+" (doc_id, rev, json, deleted) VALUES (?, ?, ?, ?);",c=[i,a,s,r];_.executeSql(u,c,function(e,n){var r=n.insertId;t(r,function(){d(e,r)})},function(){var e=Dn("seq",wi,null,"doc_id=? AND rev=?");return _.executeSql(e,[i,a],function(e,n){var o=n.rows.item(0).seq,u="UPDATE "+wi+" SET json=?, deleted=? WHERE doc_id=? AND rev=?;",c=[s,r,i,a];e.executeSql(u,c,function(e){t(o,function(){d(e,o)})})}),!1})}function f(e){p||(e?(p=e,u(p)):v===g.length&&c())}function l(e){v++,f(e)}function d(n,o){var a=e.metadata.id,c=e.stemmedRevs||[];i&&r.auto_compaction&&(c=Q(e.metadata).concat(c)),c.length&&Rn(c,a,n),e.metadata.seq=o;var f=e.metadata.rev;delete e.metadata.rev;var l=i?"UPDATE "+bi+" SET json=?, max_seq=?, winningseq=(SELECT seq FROM "+wi+" WHERE doc_id="+bi+".id AND rev=?) WHERE id=?":"INSERT INTO "+bi+" (id, winningseq, max_seq, json) VALUES (?,?,?,?);",d=Yt(e.metadata),h=i?[d,o,t,a]:[a,o,o,d];n.executeSql(l,h,function(){b[s]={ok:!0,id:e.metadata.id,rev:f},w.set(a,e.metadata),u()})}var p=null,v=0;e.data._id=e.metadata.id,e.data._rev=e.metadata.rev;var g=Object.keys(e.data._attachments||{});o&&(e.data._deleted=!0),g.forEach(function(n){var r=e.data._attachments[n];if(r.stub)v++,f();else{var o=r.data;delete r.data,r.revpos=parseInt(t,10);h(r.digest,o,l)}}),g.length||c()}function l(){Vt(e.revs_limit,g,r,w,_,b,f,n)}function d(e){function t(){++n===g.length&&e()}if(!g.length)return e();var n=0;g.forEach(function(e){if(e._id&&le(e._id))return t();var n=e.metadata.id;_.executeSql("SELECT json FROM "+bi+" WHERE id = ?",[n],function(e,r){if(r.rows.length){var o=Qt(r.rows.item(0).json);w.set(n,o)}t()})})}function h(e,t,n){var r="SELECT digest FROM "+Ei+" WHERE digest=?";_.executeSql(r,[e],function(o,i){if(i.rows.length)return n();r="INSERT INTO "+Ei+" (digest, body, escaped) VALUES (?,?,1)",o.executeSql(r,[e,On(t)],function(){n()},function(){return n(),!1})})}var p=n.new_edits,v=t.docs,g=v.map(function(e){return e._id&&le(e._id)?e:xt(e,p)}),y=g.filter(function(e){return e.error});if(y.length)return a(y[0]);var _,m,b=new Array(g.length),w=new mo;Kt(g,"binary",function(e){if(e)return a(e);o.transaction(function(e){_=e,c(function(e){e?m=e:d(l)})},Nn(a),s)})}function Fn(e){return e.websql(e.name,e.version,e.description,e.size)}function Mn(e){try{return{db:Fn(e)}}catch(e){return{error:e}}}function Pn(e){var t=Ai.get(e.name);return t||(t=Mn(e),Ai.set(e.name,t)),t}function Un(e,t,n,r,o){function i(){++u===s.length&&o&&o()}function a(e,o){var a=e._attachments[o],s={binary:t.binary,ctx:r};n._getAttachment(e._id,o,a,s,function(t,n){e._attachments[o]=ko(y(a,["digest","content_type"]),{data:n}),i()})}var s=Object.keys(e._attachments||{});if(!s.length)return o&&o();var u=0;s.forEach(function(n){t.attachments&&t.include_docs?a(e,n):(e._attachments[n].stub=!0,i())})}function Jn(e,t){function n(){E()&&(window.localStorage["_pouch__websqldb_"+m._name]=!0),t(null,m)}function r(e,t){e.executeSql(Ci),e.executeSql("ALTER TABLE "+wi+" ADD COLUMN deleted TINYINT(1) DEFAULT 0",[],function(){e.executeSql(Oi),e.executeSql("ALTER TABLE "+bi+" ADD COLUMN local TINYINT(1) DEFAULT 0",[],function(){e.executeSql("CREATE INDEX IF NOT EXISTS 'doc-store-local-idx' ON "+bi+" (local, id)");var n="SELECT "+bi+".winningseq AS seq, "+bi+".json AS metadata FROM "+wi+" JOIN "+bi+" ON "+wi+".seq = "+bi+".winningseq";e.executeSql(n,[],function(e,n){for(var r=[],o=[],i=0;i<n.rows.length;i++){var a=n.rows.item(i),s=a.seq,u=JSON.parse(a.metadata);fe(u)&&r.push(s),le(u.id)&&o.push(u.id)}e.executeSql("UPDATE "+bi+"SET local = 1 WHERE id IN "+In(o.length),o,function(){e.executeSql("UPDATE "+wi+" SET deleted = 1 WHERE seq IN "+In(r.length),r,t)})})})})}function o(e,t){var n="CREATE TABLE IF NOT EXISTS "+ki+" (id UNIQUE, rev, json)";e.executeSql(n,[],function(){var n="SELECT "+bi+".id AS id, "+wi+".json AS data FROM "+wi+" JOIN "+bi+" ON "+wi+".seq = "+bi+".winningseq WHERE local = 1";e.executeSql(n,[],function(e,n){function r(){if(!o.length)return t(e);var n=o.shift(),i=JSON.parse(n.data)._rev;e.executeSql("INSERT INTO "+ki+" (id, rev, json) VALUES (?,?,?)",[n.id,i,n.data],function(e){e.executeSql("DELETE FROM "+bi+" WHERE id=?",[n.id],function(e){e.executeSql("DELETE FROM "+wi+" WHERE seq=?",[n.seq],function(){r()})})})}for(var o=[],i=0;i<n.rows.length;i++)o.push(n.rows.item(i));r()})})}function i(e,t){function n(n){function r(){if(!n.length)return t(e);var o=n.shift(),i=xn(o.hex,_),a=i.lastIndexOf("::"),s=i.substring(0,a),u=i.substring(a+2),c="UPDATE "+wi+" SET doc_id=?, rev=? WHERE doc_id_rev=?";e.executeSql(c,[s,u,i],function(){r()})}r()}var r="ALTER TABLE "+wi+" ADD COLUMN doc_id";e.executeSql(r,[],function(e){var t="ALTER TABLE "+wi+" ADD COLUMN rev";e.executeSql(t,[],function(e){e.executeSql(ji,[],function(e){var t="SELECT hex(doc_id_rev) as hex FROM "+wi;e.executeSql(t,[],function(e,t){for(var r=[],o=0;o<t.rows.length;o++)r.push(t.rows.item(o));n(r)})})})})}function a(e,t){function n(e){var n="SELECT COUNT(*) AS cnt FROM "+Ei;e.executeSql(n,[],function(e,n){function r(){var n=Dn(Ri+", "+bi+".id AS id",[bi,wi],Di,null,bi+".id ");n+=" LIMIT "+i+" OFFSET "+o,o+=i,e.executeSql(n,[],function(e,n){if(!n.rows.length)return t(e);for(var o={},i=0;i<n.rows.length;i++)for(var a=n.rows.item(i),s=Ln(a.data,a.id,a.rev),u=Object.keys(s._attachments||{}),c=0;c<u.length;c++){var f=s._attachments[u[c]];!function(e,t){var n=o[e]=o[e]||[];-1===n.indexOf(t)&&n.push(t)}(f.digest,a.seq)}var l=[];if(Object.keys(o).forEach(function(e){o[e].forEach(function(t){l.push([e,t])})}),!l.length)return r();var d=0;l.forEach(function(t){var n="INSERT INTO "+qi+" (digest, seq) VALUES (?,?)";e.executeSql(n,t,function(){++d===l.length&&r()})})})}if(!n.rows.item(0).cnt)return t(e);var o=0,i=10;r()})}var r="CREATE TABLE IF NOT EXISTS "+qi+" (digest, seq INTEGER)";e.executeSql(r,[],function(e){e.executeSql(Ii,[],function(e){e.executeSql(Li,[],n)})})}function s(e,t){var n="ALTER TABLE "+Ei+" ADD COLUMN escaped TINYINT(1) DEFAULT 0";e.executeSql(n,[],t)}function c(e,t){var n="ALTER TABLE "+bi+" ADD COLUMN max_seq INTEGER";e.executeSql(n,[],function(e){var n="UPDATE "+bi+" SET max_seq=(SELECT MAX(seq) FROM "+wi+" WHERE doc_id=id)";e.executeSql(n,[],function(e){var n="CREATE UNIQUE INDEX IF NOT EXISTS 'doc-max-seq-idx' ON "+bi+" (max_seq)";e.executeSql(n,[],t)})})}function l(e,t){e.executeSql('SELECT HEX("a") AS hex',[],function(e,n){var r=n.rows.item(0).hex;_=2===r.length?"UTF-8":"UTF-16",t()})}function d(){for(;k.length>0;){k.pop()(null,b)}}function h(e,t){if(0===t){var n="CREATE TABLE IF NOT EXISTS "+Si+" (dbid, db_version INTEGER)",u="CREATE TABLE IF NOT EXISTS "+Ei+" (digest UNIQUE, escaped TINYINT(1), body BLOB)",f="CREATE TABLE IF NOT EXISTS "+qi+" (digest, seq INTEGER)",l="CREATE TABLE IF NOT EXISTS "+bi+" (id unique, json, winningseq, max_seq INTEGER UNIQUE)",h="CREATE TABLE IF NOT EXISTS "+wi+" (seq INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, json, deleted TINYINT(1), doc_id, rev)",p="CREATE TABLE IF NOT EXISTS "+ki+" (id UNIQUE, rev, json)";e.executeSql(u),e.executeSql(p),e.executeSql(f,[],function(){e.executeSql(Li),e.executeSql(Ii)}),e.executeSql(l,[],function(){e.executeSql(Ci),e.executeSql(h,[],function(){e.executeSql(Oi),e.executeSql(ji),e.executeSql(n,[],function(){var t="INSERT INTO "+Si+" (db_version, dbid) VALUES (?,?)";b=Wo();var n=[mi,b];e.executeSql(t,n,function(){d()})})})})}else{var v=function(){t<mi&&e.executeSql("UPDATE "+Si+" SET db_version = "+mi);var n="SELECT dbid FROM "+Si;e.executeSql(n,[],function(e,t){b=t.rows.item(0).dbid,d()})},g=[r,o,i,a,s,c,v],y=t,_=function(e){g[y-1](e,_),y++};_(e)}}function p(e){var t="SELECT sql FROM sqlite_master WHERE tbl_name = "+Si;e.executeSql(t,[],function(e,t){t.rows.length?/db_version/.test(t.rows.item(0).sql)?e.executeSql("SELECT db_version FROM "+Si,[],function(e,t){h(e,t.rows.item(0).db_version)}):e.executeSql("ALTER TABLE "+Si+" ADD COLUMN db_version INTEGER",[],function(){h(e,1)}):h(e,0)})}function v(e,t){var n="SELECT MAX(seq) AS seq FROM "+wi;e.executeSql(n,[],function(e,n){var r=n.rows.item(0).seq||0;t(r)})}function g(e,t){var n=Dn("COUNT("+bi+".id) AS 'num'",[bi,wi],Di,wi+".deleted=0");e.executeSql(n,[],function(e,n){t(n.rows.item(0).num)})}function y(e,t,n,r,o){var i=Dn(Ri,[bi,wi],Di,bi+".id=?"),a=[t];e.executeSql(i,a,function(e,t){if(!t.rows.length){var i=j(qo,"missing");return o(i)}var a=t.rows.item(0),s=Qt(a.metadata);r(de(n,s))})}var _,m=this,b=null,w=Bn(e),k=[];m._name=e.name;var S=ko({},e,{version:Ti,description:e.name,size:w}),q=Pn(S);if(q.error)return Nn(t)(q.error);var A=q.db;"function"!=typeof A.readTransaction&&(A.readTransaction=A.transaction),function(){A.transaction(function(e){l(e,function(){p(e)})},Nn(t),n)}(),m._remote=!1,m.type=function(){return"websql"},m._id=f(function(e){e(null,b)}),m._info=function(e){var t,n;A.readTransaction(function(e){v(e,function(e){t=e}),g(e,function(e){n=e})},Nn(e),function(){e(null,{doc_count:n,update_seq:t,websql_encoding:_})})},m._bulkDocs=function(t,n,r){$n(e,t,n,m,A,xi,r)},m._get=function(e,t,n){function r(e){n(e,{doc:o,metadata:i,ctx:a})}var o,i,a=t.ctx;if(!a)return A.readTransaction(function(r){m._get(e,ko({ctx:r},t),n)});var s,u;if(t.rev){if(t.latest)return void y(a,e,t.rev,function(r){t.latest=!1,t.rev=r,m._get(e,t,n)},r);s=Dn(Ri,[bi,wi],bi+".id="+wi+".doc_id",[wi+".doc_id=?",wi+".rev=?"]),u=[e,t.rev]}else s=Dn(Ri,[bi,wi],Di,bi+".id=?"),u=[e];a.executeSql(s,u,function(e,n){if(!n.rows.length){return r(j(qo,"missing"))}var a=n.rows.item(0);if(i=Qt(a.metadata),a.deleted&&!t.rev){return r(j(qo,"deleted"))}o=Ln(a.data,i.id,a.rev),r()})},m._allDocs=function(e,t){var n,r=[],o="startkey"in e&&e.startkey,i="endkey"in e&&e.endkey,a="key"in e&&e.key,s="descending"in e&&e.descending,u="limit"in e?e.limit:-1,c="skip"in e?e.skip:0,f=!1!==e.inclusive_end,l=[],d=[];if(!1!==a)d.push(bi+".id = ?"),l.push(a);else if(!1!==o||!1!==i){if(!1!==o&&(d.push(bi+".id "+(s?"<=":">=")+" ?"),l.push(o)),!1!==i){var h=s?">":"<";f&&(h+="="),d.push(bi+".id "+h+" ?"),l.push(i)}!1!==a&&(d.push(bi+".id = ?"),l.push(a))}"ok"!==e.deleted&&d.push(wi+".deleted = 0"),A.readTransaction(function(t){if(g(t,function(e){n=e}),0!==u){var o=Dn(Ri,[bi,wi],Di,d,bi+".id "+(s?"DESC":"ASC"));o+=" LIMIT "+u+" OFFSET "+c,t.executeSql(o,l,function(t,n){for(var o=0,i=n.rows.length;o<i;o++){var a=n.rows.item(o),s=Qt(a.metadata),u=s.id,c=Ln(a.data,u,a.rev),f=c._rev,l={id:u,key:u,value:{rev:f}};if(e.include_docs){if(l.doc=c,l.doc._rev=f,e.conflicts){var d=V(s);d.length&&(l.doc._conflicts=d)}Un(l.doc,e,m,t)}if(a.deleted){if("ok"!==e.deleted)continue;l.value.deleted=!0,l.doc=null}r.push(l)}})}},Nn(t),function(){t(null,{total_rows:n,offset:e.skip,rows:r})})},m._changes=function(e){if(e=u(e),e.continuous){var t=m._name+":"+Wo();return xi.addListener(m._name,t,m,e),xi.notify(m._name),{cancel:function(){xi.removeListener(m._name,t)}}}var n=e.descending;e.since=e.since&&!n?e.since:0;var r="limit"in e?e.limit:-1;0===r&&(r=1);var o;o="return_docs"in e?e.return_docs:!("returnDocs"in e)||e.returnDocs;var i=[],a=0;!function(){var t=bi+".json AS metadata, "+bi+".max_seq AS maxSeq, "+wi+".json AS winningDoc, "+wi+".rev AS winningRev ",s=bi+" JOIN "+wi,u=bi+".id="+wi+".doc_id AND "+bi+".winningseq="+wi+".seq",c=["maxSeq > ?"],f=[e.since];e.doc_ids&&(c.push(bi+".id IN "+In(e.doc_ids.length)),f=f.concat(e.doc_ids));var l="maxSeq "+(n?"DESC":"ASC"),d=Dn(t,s,u,c,l),h=I(e);e.view||e.filter||(d+=" LIMIT "+r);var p=e.since||0;A.readTransaction(function(t){t.executeSql(d,f,function(t,n){function s(t){return function(){e.onChange(t)}}for(var u=0,c=n.rows.length;u<c;u++){var f=n.rows.item(u),l=Qt(f.metadata);p=f.maxSeq;var d=Ln(f.winningDoc,l.id,f.winningRev),v=e.processChange(d,l,e);v.seq=f.maxSeq;var g=h(v);if("object"==typeof g)return e.complete(g);if(g&&(a++,o&&i.push(v),e.attachments&&e.include_docs?Un(d,e,m,t,s(v)):s(v)()),a===r)break}})},Nn(e.complete),function(){e.continuous||e.complete(null,{results:i,last_seq:p})})}()},m._close=function(e){e()},m._getAttachment=function(e,t,n,r,o){var i,a=r.ctx,s=n.digest,u=n.content_type,c="SELECT escaped, CASE WHEN escaped = 1 THEN body ELSE HEX(body) END AS body FROM "+Ei+" WHERE digest=?";a.executeSql(c,[s],function(e,t){var n=t.rows.item(0),a=n.escaped?jn(n.body):xn(n.body,_);i=r.binary?jt(a,u):ni(a),o(null,i)})},m._getRevisionTree=function(e,t){A.readTransaction(function(n){var r="SELECT json AS metadata FROM "+bi+" WHERE id = ?";n.executeSql(r,[e],function(e,n){if(n.rows.length){var r=Qt(n.rows.item(0).metadata);t(null,r.rev_tree)}else t(j(qo))})})},m._doCompaction=function(e,t,n){if(!t.length)return n();A.transaction(function(n){var r="SELECT json AS metadata FROM "+bi+" WHERE id = ?";n.executeSql(r,[e],function(n,r){var o=Qt(r.rows.item(0).metadata);K(o.rev_tree,function(e,n,r,o,i){var a=n+"-"+r;-1!==t.indexOf(a)&&(i.status="missing")});var i="UPDATE "+bi+" SET json = ? WHERE id = ?";n.executeSql(i,[Yt(o),e])}),Rn(t,e,n)},Nn(n),function(){n()})},m._getLocal=function(e,t){A.readTransaction(function(n){var r="SELECT json, rev FROM "+ki+" WHERE id=?";n.executeSql(r,[e],function(n,r){if(r.rows.length){var o=r.rows.item(0),i=Ln(o.json,e,o.rev);t(null,i)}else t(j(qo))})})},m._putLocal=function(e,t,n){function r(e){var r,c;i?(r="UPDATE "+ki+" SET rev=?, json=? WHERE id=? AND rev=?",c=[o,u,a,i]):(r="INSERT INTO "+ki+" (id, rev, json) VALUES (?,?,?)",c=[a,o,u]),e.executeSql(r,c,function(e,r){r.rowsAffected?(s={ok:!0,id:a,rev:o},t.ctx&&n(null,s)):n(j(Ao))},function(){return n(j(Ao)),!1})}"function"==typeof t&&(n=t,t={}),delete e._revisions;var o,i=e._rev,a=e._id;o=e._rev=i?"0-"+(parseInt(i.split("-")[1],10)+1):"0-1";var s,u=Cn(e);t.ctx?r(t.ctx):A.transaction(r,Nn(n),function(){s&&n(null,s)})},m._removeLocal=function(e,t,n){function r(r){var i="DELETE FROM "+ki+" WHERE id=? AND rev=?",a=[e._id,e._rev];r.executeSql(i,a,function(r,i){if(!i.rowsAffected)return n(j(qo));o={ok:!0,id:e._id,rev:"0-0"},t.ctx&&n(null,o)})}"function"==typeof t&&(n=t,t={});var o;t.ctx?r(t.ctx):A.transaction(r,Nn(n),function(){o&&n(null,o)})},m._destroy=function(e,t){xi.removeAllListeners(m._name),A.transaction(function(e){[bi,wi,Ei,Si,ki,qi].forEach(function(t){e.executeSql("DROP TABLE IF EXISTS "+t,[])})},Nn(t),function(){E()&&(delete window.localStorage["_pouch__websqldb_"+m._name],delete window.localStorage[m._name]),t(null,{ok:!0})})}}function Hn(){try{return openDatabase("_pouch_validate_websql",1,"",1),!0}catch(e){return!1}}function Wn(){if("undefined"==typeof indexedDB||null===indexedDB||!/iP(hone|od|ad)/.test(navigator.userAgent))return!0;var e=E(),t="_pouch__websqldb_valid_"+navigator.userAgent;if(e&&localStorage[t])return"1"===localStorage[t];var n=Hn();return e&&(localStorage[t]=n?"1":"0"),n}function zn(){return"function"==typeof openDatabase&&Wn()}function Kn(e,t,n,r){return openDatabase(e,t,n,r)}function Xn(e,t){var n=ko({websql:Kn},e);Jn.call(this,n,t)}function Gn(){for(var e={},t=new vo(function(t,n){e.resolve=t,e.reject=n}),n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.promise=t,vo.resolve().then(function(){return fetch.apply(null,n)}).then(function(t){e.resolve(t)}).catch(function(t){e.reject(t)}),e}function Vn(e,t){var n,r,o,i=new Headers,a={method:e.method,credentials:"include",headers:i};return e.json&&(i.set("Accept","application/json"),i.set("Content-Type",e.headers["Content-Type"]||"application/json")),e.body&&e.processData&&"string"!=typeof e.body?a.body=JSON.stringify(e.body):a.body="body"in e?e.body:null,Object.keys(e.headers).forEach(function(t){e.headers.hasOwnProperty(t)&&i.set(t,e.headers[t])}),n=Gn(e.url,a),e.timeout>0&&(r=setTimeout(function(){n.reject(new Error("Load timeout for resource: "+e.url))},e.timeout)),n.promise.then(function(t){return o={statusCode:t.status},e.timeout>0&&clearTimeout(r),o.statusCode>=200&&o.statusCode<300?e.binary?t.blob():t.text():t.json()}).then(function(e){o.statusCode>=200&&o.statusCode<300?t(null,o,e):(e.status=o.statusCode,t(e))}).catch(function(e){e||(e=new Error("canceled")),t(e)}),{abort:n.reject}}function Qn(e,t){var n,r,o=!1,i=function(){n.abort(),u()},a=function(){o=!0,n.abort(),u()},s={abort:i},u=function(){clearTimeout(r),s.abort=function(){},n&&(n.onprogress=void 0,n.upload&&(n.upload.onprogress=void 0),n.onreadystatechange=void 0,n=void 0)};n=e.xhr?new e.xhr:new XMLHttpRequest;try{n.open(e.method,e.url)}catch(e){return t(new Error(e.name||"Url is invalid"))}n.withCredentials=!("withCredentials"in e)||e.withCredentials,"GET"===e.method?delete e.headers["Content-Type"]:e.json&&(e.headers.Accept="application/json",e.headers["Content-Type"]=e.headers["Content-Type"]||"application/json",e.body&&e.processData&&"string"!=typeof e.body&&(e.body=JSON.stringify(e.body))),e.binary&&(n.responseType="arraybuffer"),"body"in e||(e.body=null);for(var c in e.headers)e.headers.hasOwnProperty(c)&&n.setRequestHeader(c,e.headers[c]);return e.timeout>0&&(r=setTimeout(a,e.timeout),n.onprogress=function(){clearTimeout(r),4!==n.readyState&&(r=setTimeout(a,e.timeout))},void 0!==n.upload&&(n.upload.onprogress=n.onprogress)),n.onreadystatechange=function(){if(4===n.readyState){var r={statusCode:n.status};if(n.status>=200&&n.status<300){var i;i=e.binary?Tt([n.response||""],{type:n.getResponseHeader("Content-Type")}):n.responseText,t(null,r,i)}else{var a={};if(o)a=new Error("ETIMEDOUT"),a.code="ETIMEDOUT";else if("string"==typeof n.response)try{a=JSON.parse(n.response)}catch(e){}a.status=n.status,t(a)}u()}},e.body&&e.body instanceof Blob?Nt(e.body,function(e){n.send(e)}):n.send(e.body),s}function Yn(e,t){return Bi||e.xhr?Qn(e,t):Vn(e,t)}function Zn(){return""}function er(e,t){function n(t,n,r){if(!e.binary&&e.json&&"string"==typeof t)try{t=JSON.parse(t)}catch(e){return r(e)}Array.isArray(t)&&(t=t.map(function(e){return e.error||e.missing?C(e):e})),e.binary&&$i(t,n),r(null,t,n)}return e=u(e),e=ko({method:"GET",headers:{},json:!0,processData:!0,timeout:1e4,cache:!1},e),e.json&&(e.binary||(e.headers.Accept="application/json"),e.headers["Content-Type"]=e.headers["Content-Type"]||"application/json"),e.binary&&(e.encoding=null,e.json=!1),e.processData||(e.json=!1),Yn(e,function(r,o,i){if(r)return t(C(r));var a,s=o.headers&&o.headers["content-type"],u=i||Zn();if(!e.binary&&(e.json||!e.processData)&&"object"!=typeof u&&(/json/.test(s)||/^[\s]*\{/.test(u)&&/\}[\s]*$/.test(u)))try{u=JSON.parse(u.toString())}catch(e){}o.statusCode>=200&&o.statusCode<300?n(u,o,t):(a=C(u),a.status=o.statusCode,t(a))})}function tr(e,t){var n=navigator&&navigator.userAgent?navigator.userAgent.toLowerCase():"",r=-1!==n.indexOf("safari")&&-1===n.indexOf("chrome"),o=-1!==n.indexOf("msie"),i=-1!==n.indexOf("edge"),a=r||(o||i)&&"GET"===e.method,s=!("cache"in e)||e.cache;if(!/^blob:/.test(e.url)&&(a||!s)){var u=-1!==e.url.indexOf("?");e.url+=(u?"&":"?")+"_nonce="+Date.now()}return er(e,t)}function nr(e,t){
return new vo(function(n,r){function o(){f++,e[l++]().then(a,s)}function i(){++d===h?c?r(c):n():u()}function a(){f--,i()}function s(e){f--,c=c||e,i()}function u(){for(;f<t&&l<h;)o()}var c,f=0,l=0,d=0,h=e.length;u()})}function rr(e){var t=e.doc&&e.doc._attachments;t&&Object.keys(t).forEach(function(e){var n=t[e];n.data=Ct(n.data,n.content_type)})}function or(e){return/^_design/.test(e)?"_design/"+encodeURIComponent(e.slice(8)):/^_local/.test(e)?"_local/"+encodeURIComponent(e.slice(7)):encodeURIComponent(e)}function ir(e){return e._attachments&&Object.keys(e._attachments)?vo.all(Object.keys(e._attachments).map(function(t){var n=e._attachments[t];if(n.data&&"string"!=typeof n.data)return new vo(function(e){Rt(n.data,e)}).then(function(e){n.data=e})})):vo.resolve()}function ar(e){if(!e.prefix)return!1;var t=P(e.prefix).protocol;return"http"===t||"https"===t}function sr(e,t){if(ar(t)){var n=t.name.substr(t.prefix.length);e=t.prefix+encodeURIComponent(n)}var r=P(e);(r.user||r.password)&&(r.auth={username:r.user,password:r.password});var o=r.path.replace(/(^\/|\/$)/g,"").split("/");return r.db=o.pop(),-1===r.db.indexOf("%")&&(r.db=encodeURIComponent(r.db)),r.path=o.join("/"),r}function ur(e,t){return cr(e,e.db+"/"+t)}function cr(e,t){var n=e.path?"/":"";return e.protocol+"://"+e.host+(e.port?":"+e.port:"")+"/"+e.path+n+t}function fr(e){return"?"+Object.keys(e).map(function(t){return t+"="+encodeURIComponent(e[t])}).join("&")}function lr(e,t){function n(e,t,n){var r=e.ajax||{},o=ko(u(l),r,t),i=u(l.headers||{});return o.headers=ko(i,r.headers,t.headers||{}),s.constructor.listeners("debug").length&&s.constructor.emit("debug",["http",o.method,o.url]),s._ajax(o,n)}function r(e,t){return new vo(function(r,o){n(e,t,function(e,t){if(e)return o(e);r(t)})})}function o(e,t){return d(e,so(function(e){i().then(function(){return t.apply(this,e)}).catch(function(t){e.pop()(t)})}))}function i(){return e.skipSetup||e.skip_setup?vo.resolve():g||(g=r({},{method:"GET",url:f}).catch(function(e){return e&&e.status&&404===e.status?(T(404,"PouchDB is just detecting if the remote exists."),r({},{method:"PUT",url:f})):vo.reject(e)}).catch(function(e){return!(!e||!e.status||412!==e.status)||vo.reject(e)}),g.catch(function(){g=null}),g)}function a(e){return e.split("/").map(encodeURIComponent).join("/")}var s=this,c=sr(e.name,e),f=ur(c,"");e=u(e);var l=e.ajax||{};if(e.auth||c.auth){var h=e.auth||c.auth,p=h.username+":"+h.password,v=ni(unescape(encodeURIComponent(p)));l.headers=l.headers||{},l.headers.Authorization="Basic "+v}s._ajax=tr;var g;fo(function(){t(null,s)}),s._remote=!0,s.type=function(){return"http"},s.id=o("id",function(e){n({},{method:"GET",url:cr(c,"")},function(t,n){var r=n&&n.uuid?n.uuid+c.db:ur(c,"");e(null,r)})}),s.request=o("request",function(e,t){e.url=ur(c,e.url),n({},e,t)}),s.compact=o("compact",function(e,t){"function"==typeof e&&(t=e,e={}),e=u(e),n(e,{url:ur(c,"_compact"),method:"POST"},function(){function n(){s.info(function(r,o){o&&!o.compact_running?t(null,{ok:!0}):setTimeout(n,e.interval||200)})}n()})}),s.bulkGet=d("bulkGet",function(e,t){function r(t){var r={};e.revs&&(r.revs=!0),e.attachments&&(r.attachments=!0),e.latest&&(r.latest=!0),n(e,{url:ur(c,"_bulk_get"+fr(r)),method:"POST",body:{docs:e.docs}},t)}function o(){for(var n=Mi,r=Math.ceil(e.docs.length/n),o=0,a=new Array(r),s=0;s<r;s++){var u=y(e,["revs","attachments","latest"]);u.ajax=l,u.docs=e.docs.slice(s*n,Math.min(e.docs.length,(s+1)*n)),b(i,u,function(e){return function(n,i){a[e]=i.results,++o===r&&t(null,{results:D(a)})}}(s))}}var i=this,a=cr(c,""),s=Ji[a];"boolean"!=typeof s?r(function(e,n){e?(Ji[a]=!1,T(e.status,"PouchDB is just detecting if the remote supports the _bulk_get API."),o()):(Ji[a]=!0,t(null,n))}):s?r(t):o()}),s._info=function(e){i().then(function(){n({},{method:"GET",url:ur(c,"")},function(t,n){if(t)return e(t);n.host=ur(c,""),e(null,n)})}).catch(e)},s.get=o("get",function(e,t,n){function o(e){function n(n){var i=o[n],s=or(e._id)+"/"+a(n)+"?rev="+e._rev;return r(t,{method:"GET",url:ur(c,s),binary:!0}).then(function(e){return t.binary?e:new vo(function(t){Rt(e,t)})}).then(function(e){delete i.stub,delete i.length,i.data=e})}var o=e._attachments,i=o&&Object.keys(o);if(o&&i.length){return nr(i.map(function(e){return function(){return n(e)}}),5)}}function i(e){return Array.isArray(e)?vo.all(e.map(function(e){if(e.ok)return o(e.ok)})):o(e)}"function"==typeof t&&(n=t,t={}),t=u(t);var s={};t.revs&&(s.revs=!0),t.revs_info&&(s.revs_info=!0),t.latest&&(s.latest=!0),t.open_revs&&("all"!==t.open_revs&&(t.open_revs=JSON.stringify(t.open_revs)),s.open_revs=t.open_revs),t.rev&&(s.rev=t.rev),t.conflicts&&(s.conflicts=t.conflicts),e=or(e);var f={method:"GET",url:ur(c,e+fr(s))};r(t,f).then(function(e){return vo.resolve().then(function(){if(t.attachments)return i(e)}).then(function(){n(null,e)})}).catch(function(t){t.docId=e,n(t)})}),s.remove=o("remove",function(e,t,r,o){var i;"string"==typeof t?(i={_id:e,_rev:t},"function"==typeof r&&(o=r,r={})):(i=e,"function"==typeof t?(o=t,r={}):(o=r,r=t));var a=i._rev||r.rev;n(r,{method:"DELETE",url:ur(c,or(i._id))+"?rev="+a},o)}),s.getAttachment=o("getAttachment",function(e,t,r,o){"function"==typeof r&&(o=r,r={});var i=r.rev?"?rev="+r.rev:"";n(r,{method:"GET",url:ur(c,or(e))+"/"+a(t)+i,binary:!0},o)}),s.removeAttachment=o("removeAttachment",function(e,t,r,o){n({},{method:"DELETE",url:ur(c,or(e)+"/"+a(t))+"?rev="+r},o)}),s.putAttachment=o("putAttachment",function(e,t,r,o,i,s){"function"==typeof i&&(s=i,i=o,o=r,r=null);var u=or(e)+"/"+a(t),f=ur(c,u);if(r&&(f+="?rev="+r),"string"==typeof o){var d;try{d=ti(o)}catch(e){return s(j(Co,"Attachment is not a valid base64 string"))}o=d?jt(d,i):""}n({},{headers:{"Content-Type":i},method:"PUT",url:f,processData:!1,body:o,timeout:l.timeout||6e4},s)}),s._bulkDocs=function(e,t,r){e.new_edits=t.new_edits,i().then(function(){return vo.all(e.docs.map(ir))}).then(function(){n(t,{method:"POST",url:ur(c,"_bulk_docs"),timeout:t.timeout,body:e},function(e,t){if(e)return r(e);t.forEach(function(e){e.ok=!0}),r(null,t)})}).catch(r)},s._put=function(e,t,r){i().then(function(){return ir(e)}).then(function(){n(t,{method:"PUT",url:ur(c,or(e._id)),body:e},function(t,n){if(t)return t.docId=e&&e._id,r(t);r(null,n)})}).catch(r)},s.allDocs=o("allDocs",function(e,t){"function"==typeof e&&(t=e,e={}),e=u(e);var n,o={},i="GET";e.conflicts&&(o.conflicts=!0),e.descending&&(o.descending=!0),e.include_docs&&(o.include_docs=!0),e.attachments&&(o.attachments=!0),e.key&&(o.key=JSON.stringify(e.key)),e.start_key&&(e.startkey=e.start_key),e.startkey&&(o.startkey=JSON.stringify(e.startkey)),e.end_key&&(e.endkey=e.end_key),e.endkey&&(o.endkey=JSON.stringify(e.endkey)),void 0!==e.inclusive_end&&(o.inclusive_end=!!e.inclusive_end),void 0!==e.limit&&(o.limit=e.limit),void 0!==e.skip&&(o.skip=e.skip);var a=fr(o);void 0!==e.keys&&(i="POST",n={keys:e.keys}),r(e,{method:i,url:ur(c,"_all_docs"+a),body:n}).then(function(n){e.include_docs&&e.attachments&&e.binary&&n.rows.forEach(rr),t(null,n)}).catch(t)}),s._changes=function(e){var t="batch_size"in e?e.batch_size:Fi;e=u(e),!e.continuous||"heartbeat"in e||(e.heartbeat=Ui);var r="timeout"in e?e.timeout:"timeout"in l?l.timeout:3e4;"timeout"in e&&e.timeout&&r-e.timeout<Pi&&(r=e.timeout+Pi),"heartbeat"in e&&e.heartbeat&&r-e.heartbeat<Pi&&(r=e.heartbeat+Pi);var o={};"timeout"in e&&e.timeout&&(o.timeout=e.timeout);var a,s=void 0!==e.limit&&e.limit;a="return_docs"in e?e.return_docs:!("returnDocs"in e)||e.returnDocs;var f=s;if(e.style&&(o.style=e.style),(e.include_docs||e.filter&&"function"==typeof e.filter)&&(o.include_docs=!0),e.attachments&&(o.attachments=!0),e.continuous&&(o.feed="longpoll"),e.conflicts&&(o.conflicts=!0),e.descending&&(o.descending=!0),"heartbeat"in e&&e.heartbeat&&(o.heartbeat=e.heartbeat),e.filter&&"string"==typeof e.filter&&(o.filter=e.filter),e.view&&"string"==typeof e.view&&(o.filter="_view",o.view=e.view),e.query_params&&"object"==typeof e.query_params)for(var d in e.query_params)e.query_params.hasOwnProperty(d)&&(o[d]=e.query_params[d]);var h,p="GET";e.doc_ids?(o.filter="_doc_ids",p="POST",h={doc_ids:e.doc_ids}):e.selector&&(o.filter="_selector",p="POST",h={selector:e.selector});var v,g,y=function(a,u){if(!e.aborted){o.since=a,"object"==typeof o.since&&(o.since=JSON.stringify(o.since)),e.descending?s&&(o.limit=f):o.limit=!s||f>t?t:f;var l={method:p,url:ur(c,"_changes"+fr(o)),timeout:r,body:h};g=a,e.aborted||i().then(function(){v=n(e,l,u)}).catch(u)}},_={results:[]},m=function(n,r){if(!e.aborted){var o=0;if(r&&r.results){o=r.results.length,_.last_seq=r.last_seq;({}).query=e.query_params,r.results=r.results.filter(function(t){f--;var n=I(e)(t);return n&&(e.include_docs&&e.attachments&&e.binary&&rr(t),a&&_.results.push(t),e.onChange(t)),n})}else if(n)return e.aborted=!0,void e.complete(n);r&&r.last_seq&&(g=r.last_seq);var i=s&&f<=0||r&&o<t||e.descending;(!e.continuous||s&&f<=0)&&i?e.complete(null,_):fo(function(){y(g,m)})}};return y(e.since||0,m),{cancel:function(){e.aborted=!0,v&&v.abort()}}},s.revsDiff=o("revsDiff",function(e,t,r){"function"==typeof t&&(r=t,t={}),n(t,{method:"POST",url:ur(c,"_revs_diff"),body:e},r)}),s._close=function(e){e()},s._destroy=function(e,t){n(e,{url:ur(c,""),method:"DELETE"},function(e,n){if(e&&e.status&&404!==e.status)return t(e);t(null,n)})}}function dr(e){this.status=400,this.name="query_parse_error",this.message=e,this.error=!0;try{Error.captureStackTrace(this,dr)}catch(e){}}function hr(e){this.status=404,this.name="not_found",this.message=e,this.error=!0;try{Error.captureStackTrace(this,hr)}catch(e){}}function pr(e){this.status=500,this.name="invalid_value",this.message=e,this.error=!0;try{Error.captureStackTrace(this,pr)}catch(e){}}function vr(e,t){return t&&e.then(function(e){fo(function(){t(null,e)})},function(e){fo(function(){t(e)})}),e}function gr(e){return so(function(t){var n=t.pop(),r=e.apply(this,t);return"function"==typeof n&&vr(r,n),r})}function yr(e,t){return e.then(function(e){return t().then(function(){return e})},function(e){return t().then(function(){throw e})})}function _r(e,t){return function(){var n=arguments,r=this;return e.add(function(){return t.apply(r,n)})}}function mr(e){var t=new _o(e),n=new Array(t.size),r=-1;return t.forEach(function(e){n[++r]=e}),n}function br(e){var t=new Array(e.size),n=-1;return e.forEach(function(e,r){t[++n]=r}),t}function wr(e){return new pr("builtin "+e+" function requires map values to be numbers or number arrays")}function Er(e){for(var t=0,n=0,r=e.length;n<r;n++){var o=e[n];if("number"!=typeof o){if(!Array.isArray(o))throw wr("_sum");t="number"==typeof t?[t]:t;for(var i=0,a=o.length;i<a;i++){var s=o[i];if("number"!=typeof s)throw wr("_sum");void 0===t[i]?t.push(s):t[i]+=s}}else"number"==typeof t?t+=o:t[0]+=o}return t}function kr(e,t){return U("return ("+e.replace(/;\s*$/,"")+");",{emit:t,sum:Er,log:Wi,isArray:zi,toJSON:Ki})}function Sr(){this.promise=new vo(function(e){e()})}function qr(e){if(!e)return"undefined";switch(typeof e){case"function":case"string":return e.toString();default:return JSON.stringify(e)}}function Ar(e,t){return qr(e)+qr(t)+"undefined"}function xr(e,t,n,r,o,i){var a,s=Ar(n,r);if(!o&&(a=e._cachedViews=e._cachedViews||{},a[s]))return a[s];var u=e.info().then(function(u){function c(e){e.views=e.views||{};var n=t;-1===n.indexOf("/")&&(n=t+"/"+t);var r=e.views[n]=e.views[n]||{};if(!r[f])return r[f]=!0,e}var f=u.db_name+"-mrview-"+(o?"temp":Ut(s));return J(e,"_local/"+i,c).then(function(){return e.registerDependentDatabase(f).then(function(t){var o=t.db;o.auto_compaction=!0;var i={name:f,db:o,sourceDB:e,adapter:e.adapter,mapFun:n,reduceFun:r};return i.db.get("_local/lastSeq").catch(function(e){if(404!==e.status)throw e}).then(function(e){return i.seq=e?e.seq:0,a&&i.db.once("destroyed",function(){delete a[s]}),i})})})});return a&&(a[s]=u),u}function Tr(e){return-1===e.indexOf("/")?[e,e]:e.split("/")}function Or(e){return 1===e.length&&/^1-/.test(e[0].rev)}function jr(e,t){try{e.emit("error",t)}catch(e){q("error","The user's map/reduce function threw an uncaught error.\nYou can debug this error by doing:\nmyDatabase.on('error', function (err) { debugger; });\nPlease double-check your map/reduce function."),q("error",t)}}function Cr(e){if(/^_sum/.test(e))return Qi._sum;if(/^_count/.test(e))return Qi._count;if(/^_stats/.test(e))return Qi._stats;if(/^_/.test(e))throw new Error(e+" is not a supported reduce function.")}function Lr(e,t){if("function"==typeof e&&2===e.length){var n=e;return function(e){return n(e,t)}}return kr(e.toString(),t)}function Ir(e){var t=e.toString(),n=Cr(t);return n||kr(t)}function Dr(e,t){var n=e.views&&e.views[t];if("string"!=typeof n.map)throw new hr("ddoc "+e._id+" has no string view named "+t+", instead found object of type: "+typeof n.map)}function Rr(e,t,n){return Yi.query.call(this,e,t,n)}function Nr(e){return Yi.viewCleanup.call(this,e)}function Br(e){return/^1-/.test(e)}function $r(e,t,n){return!e._attachments||!e._attachments[n]||e._attachments[n].digest!==t._attachments[n].digest}function Fr(e,t){var n=Object.keys(t._attachments);return vo.all(n.map(function(n){return e.getAttachment(t._id,n,{rev:t._rev})}))}function Mr(e,t,n){var r=B(t)&&!B(e),o=Object.keys(n._attachments);return r?e.get(n._id).then(function(r){return vo.all(o.map(function(o){return $r(r,n,o)?t.getAttachment(n._id,o):e.getAttachment(r._id,o)}))}).catch(function(e){if(404!==e.status)throw e;return Fr(t,n)}):Fr(t,n)}function Pr(e){var t=[];return Object.keys(e).forEach(function(n){e[n].missing.forEach(function(e){t.push({id:n,rev:e})})}),{docs:t,revs:!0,latest:!0}}function Ur(e,t,n,r){function o(){var o=Pr(n);if(o.docs.length)return e.bulkGet(o).then(function(n){if(r.cancelled)throw new Error("cancelled");return vo.all(n.results.map(function(n){return vo.all(n.docs.map(function(n){var r=n.ok;return n.error&&(d=!1),r&&r._attachments?Mr(t,e,r).then(function(e){var t=Object.keys(r._attachments);return e.forEach(function(e,n){var o=r._attachments[t[n]];delete o.stub,delete o.length,o.data=e}),r}):r}))})).then(function(e){l=l.concat(D(e).filter(Boolean))})})}function i(e){return e._attachments&&Object.keys(e._attachments).length>0}function a(e){return e._conflicts&&e._conflicts.length>0}function s(t){return e.allDocs({keys:t,include_docs:!0,conflicts:!0}).then(function(e){if(r.cancelled)throw new Error("cancelled");e.rows.forEach(function(e){e.deleted||!e.doc||!Br(e.value.rev)||i(e.doc)||a(e.doc)||(e.doc._conflicts&&delete e.doc._conflicts,l.push(e.doc),delete n[e.id])})})}function c(){var e=Object.keys(n).filter(function(e){var t=n[e].missing;return 1===t.length&&Br(t[0])});if(e.length>0)return s(e)}function f(){return{ok:d,docs:l}}n=u(n);var l=[],d=!0;return vo.resolve().then(c).then(o).then(f)}function Jr(e,t,n,r,o){return e.get(t).catch(function(n){if(404===n.status)return"http"!==e.adapter&&"https"!==e.adapter||T(404,"PouchDB is just checking if a remote checkpoint exists."),{session_id:r,_id:t,history:[],replicator:ta,version:ea};throw n}).then(function(i){if(!o.cancelled&&i.last_seq!==n)return i.history=(i.history||[]).filter(function(e){return e.session_id!==r}),i.history.unshift({last_seq:n,session_id:r}),i.history=i.history.slice(0,na),i.version=ea,i.replicator=ta,i.session_id=r,i.last_seq=n,e.put(i).catch(function(i){if(409===i.status)return Jr(e,t,n,r,o);throw i})})}function Hr(e,t,n,r,o){this.src=e,this.target=t,this.id=n,this.returnValue=r,this.opts=o}function Wr(e,t){return e.session_id===t.session_id?{last_seq:e.last_seq,history:e.history}:zr(e.history,t.history)}function zr(e,t){var n=e[0],r=e.slice(1),o=t[0],i=t.slice(1);return n&&0!==t.length?Kr(n.session_id,t)?{last_seq:n.last_seq,history:e}:Kr(o.session_id,r)?{last_seq:o.last_seq,history:i}:zr(r,i):{last_seq:ra,history:[]}}function Kr(e,t){var n=t[0],r=t.slice(1);return!(!e||0===t.length)&&(e===n.session_id||Kr(e,r))}function Xr(e){return"number"==typeof e.status&&4===Math.floor(e.status/100)}function Gr(e,t,n,r){if(!1===e.retry)return t.emit("error",n),void t.removeAllListeners();if("function"!=typeof e.back_off_function&&(e.back_off_function=x),t.emit("requestError",n),"active"===t.state||"pending"===t.state){t.emit("paused",n),t.state="stopped";var o=function(){e.current_back_off=ia},i=function(){t.removeListener("active",o)};t.once("paused",i),t.once("active",o)}e.current_back_off=e.current_back_off||ia,e.current_back_off=e.back_off_function(e.current_back_off),setTimeout(r,e.current_back_off)}function Vr(e){return Object.keys(e).sort(He).reduce(function(t,n){return t[n]=e[n],t},{})}function Qr(e,t,n){var r=n.doc_ids?n.doc_ids.sort(He):"",o=n.filter?n.filter.toString():"",i="",a="",s="";return n.selector&&(s=JSON.stringify(n.selector)),n.filter&&n.query_params&&(i=JSON.stringify(Vr(n.query_params))),n.filter&&"_view"===n.filter&&(a=n.view.toString()),vo.all([e.id(),t.id()]).then(function(e){var t=e[0]+e[1]+o+a+i+r+s;return new vo(function(e){Pt(t,e)})}).then(function(e){return"_local/"+(e=e.replace(/\//g,".").replace(/\+/g,"_"))})}function Yr(e,t,n,r,o){function i(){return k?vo.resolve():Qr(e,t,n).then(function(o){E=o;var i={};i=!1===n.checkpoint?{writeSourceCheckpoint:!1,writeTargetCheckpoint:!1}:"source"===n.checkpoint?{writeSourceCheckpoint:!0,writeTargetCheckpoint:!1}:"target"===n.checkpoint?{writeSourceCheckpoint:!1,writeTargetCheckpoint:!0}:{writeSourceCheckpoint:!0,writeTargetCheckpoint:!0},k=new Hr(e,t,E,r,i)})}function a(){if($=[],0!==w.docs.length){var e=w.docs,i={timeout:n.timeout};return t.bulkDocs({docs:e,new_edits:!1},i).then(function(t){if(r.cancelled)throw p(),new Error("cancelled");var n=Object.create(null);t.forEach(function(e){e.error&&(n[e.id]=e)});var i=Object.keys(n).length;o.doc_write_failures+=i,o.docs_written+=e.length-i,e.forEach(function(e){var t=n[e._id];if(t){if(o.errors.push(t),"unauthorized"!==t.name&&"forbidden"!==t.name)throw t;r.emit("denied",u(t))}else $.push(e)})},function(t){throw o.doc_write_failures+=e.length,t})}}function s(){if(w.error)throw new Error("There was a problem getting docs.");o.last_seq=O=w.seq;var e=u(o);return $.length&&(e.docs=$,r.emit("change",e)),A=!0,k.writeCheckpoint(w.seq,F).then(function(){if(A=!1,r.cancelled)throw p(),new Error("cancelled");w=void 0,_()}).catch(function(e){throw b(e),e})}function c(){var e={};return w.changes.forEach(function(t){"_user/"!==t.id&&(e[t.id]=t.changes.map(function(e){return e.rev}))}),t.revsDiff(e).then(function(e){if(r.cancelled)throw p(),new Error("cancelled");w.diffs=e})}function f(){return Ur(e,t,w.diffs,r).then(function(e){w.error=!e.ok,e.docs.forEach(function(e){delete w.diffs[e._id],o.docs_read++,w.docs.push(e)})})}function l(){if(!r.cancelled&&!w){if(0===S.length)return void d(!0);w=S.shift(),c().then(f).then(a).then(s).then(l).catch(function(e){h("batch processing terminated with error",e)})}}function d(e){if(0===q.changes.length)return void(0!==S.length||w||((C&&M.live||x)&&(r.state="pending",r.emit("paused")),x&&p()));(e||x||q.changes.length>=L)&&(S.push(q),q={seq:0,changes:[],docs:[]},"pending"!==r.state&&"stopped"!==r.state||(r.state="active",r.emit("active")),l())}function h(e,t){T||(t.message||(t.message=e),o.ok=!1,o.status="aborting",S=[],q={seq:0,changes:[],docs:[]},p(t))}function p(i){T||r.cancelled&&(o.status="cancelled",A)||(o.status=o.status||"complete",o.end_time=new Date,o.last_seq=O,T=!0,i?(i=j(i),i.result=o,"unauthorized"===i.name||"forbidden"===i.name?(r.emit("error",i),r.removeAllListeners()):Gr(n,r,i,function(){Yr(e,t,n,r)})):(r.emit("complete",o),r.removeAllListeners()))}function v(e){if(r.cancelled)return p();I(n)(e)&&(q.seq=e.seq,q.changes.push(e),d(0===S.length&&M.live))}function g(e){if(R=!1,r.cancelled)return p();if(e.results.length>0)M.since=e.last_seq,_(),d(!0);else{var t=function(){C?(M.live=!0,_()):x=!0,d(!0)};w||0!==e.results.length?t():(A=!0,k.writeCheckpoint(e.last_seq,F).then(function(){A=!1,o.last_seq=O=e.last_seq,t()}).catch(b))}}function y(e){if(R=!1,r.cancelled)return p();h("changes rejected",e)}function _(){function t(){i.cancel()}function o(){r.removeListener("cancel",t)}if(!R&&!x&&S.length<D){R=!0,r._changes&&(r.removeListener("cancel",r._abortChanges),r._changes.cancel()),r.once("cancel",t);var i=e.changes(M).on("change",v);i.then(o,o),i.then(g).catch(y),n.retry&&(r._changes=i,r._abortChanges=t)}}function m(){i().then(function(){return r.cancelled?void p():k.getCheckpoint().then(function(e){O=e,M={since:O,limit:L,batch_size:L,style:"all_docs",doc_ids:N,selector:B,return_docs:!0},n.filter&&("string"!=typeof n.filter?M.include_docs=!0:M.filter=n.filter),"heartbeat"in n&&(M.heartbeat=n.heartbeat),"timeout"in n&&(M.timeout=n.timeout),n.query_params&&(M.query_params=n.query_params),n.view&&(M.view=n.view),_()})}).catch(function(e){h("getCheckpoint rejected with ",e)})}function b(e){A=!1,h("writeCheckpoint completed with error",e)}var w,E,k,S=[],q={seq:0,changes:[],docs:[]},A=!1,x=!1,T=!1,O=0,C=n.continuous||n.live||!1,L=n.batch_size||100,D=n.batches_limit||10,R=!1,N=n.doc_ids,B=n.selector,$=[],F=Wo();o=o||{ok:!0,start_time:new Date,docs_read:0,docs_written:0,doc_write_failures:0,errors:[]};var M={};if(r.ready(e,t),r.cancelled)return void p();r._addedListeners||(r.once("cancel",p),"function"==typeof n.complete&&(r.once("error",n.complete),r.once("complete",function(e){n.complete(null,e)})),r._addedListeners=!0),void 0===n.since?m():i().then(function(){return A=!0,k.writeCheckpoint(n.since,F)}).then(function(){if(A=!1,r.cancelled)return void p();O=n.since,m()}).catch(b)}function Zr(){uo.EventEmitter.call(this),this.cancelled=!1,this.state="pending";var e=this,t=new vo(function(t,n){e.once("complete",t),e.once("error",n)});e.then=function(e,n){return t.then(e,n)},e.catch=function(e){return t.catch(e)},e.catch(function(){})}function eo(e,t){var n=t.PouchConstructor;return"string"==typeof e?new n(e,t):e}function to(e,t,n,r){if("function"==typeof n&&(r=n,n={}),void 0===n&&(n={}),n.doc_ids&&!Array.isArray(n.doc_ids))throw j(Do,"`doc_ids` filter parameter is not a list.");n.complete=r,n=u(n),n.continuous=n.continuous||n.live,n.retry="retry"in n&&n.retry,n.PouchConstructor=n.PouchConstructor||this;var o=new Zr(n);return Yr(eo(e,n),eo(t,n),n,o),o}function no(e,t,n,r){return"function"==typeof n&&(r=n,n={}),void 0===n&&(n={}),n=u(n),n.PouchConstructor=n.PouchConstructor||this,e=eo(e,n),t=eo(t,n),new ro(e,t,n,r)}function ro(e,t,n,r){function o(e){p.emit("change",{direction:"pull",change:e})}function i(e){p.emit("change",{direction:"push",change:e})}function a(e){p.emit("denied",{direction:"push",doc:e})}function s(e){p.emit("denied",{direction:"pull",doc:e})}function u(){p.pushPaused=!0,p.pullPaused&&p.emit("paused")}function c(){p.pullPaused=!0,p.pushPaused&&p.emit("paused")}function f(){p.pushPaused=!1,p.pullPaused&&p.emit("active",{direction:"push"})}function l(){p.pullPaused=!1,p.pushPaused&&p.emit("active",{direction:"pull"})}function d(e){return function(t,n){var r="change"===t&&(n===o||n===i),d="denied"===t&&(n===s||n===a),h="paused"===t&&(n===c||n===u),v="active"===t&&(n===l||n===f);(r||d||h||v)&&(t in y||(y[t]={}),y[t][e]=!0,2===Object.keys(y[t]).length&&p.removeAllListeners(t))}}function h(e,t,n){-1==e.listeners(t).indexOf(n)&&e.on(t,n)}var p=this;this.canceled=!1;var v=n.push?ko({},n,n.push):n,g=n.pull?ko({},n,n.pull):n;this.push=to(e,t,v),this.pull=to(t,e,g),this.pushPaused=!0,this.pullPaused=!0;var y={};n.live&&(this.push.on("complete",p.pull.cancel.bind(p.pull)),this.pull.on("complete",p.push.cancel.bind(p.push))),this.on("newListener",function(e){"change"===e?(h(p.pull,"change",o),h(p.push,"change",i)):"denied"===e?(h(p.pull,"denied",s),h(p.push,"denied",a)):"active"===e?(h(p.pull,"active",l),h(p.push,"active",f)):"paused"===e&&(h(p.pull,"paused",c),h(p.push,"paused",u))}),this.on("removeListener",function(e){"change"===e?(p.pull.removeListener("change",o),p.push.removeListener("change",i)):"denied"===e?(p.pull.removeListener("denied",s),p.push.removeListener("denied",a)):"active"===e?(p.pull.removeListener("active",l),p.push.removeListener("active",f)):"paused"===e&&(p.pull.removeListener("paused",c),p.push.removeListener("paused",u))}),this.pull.on("removeListener",d("pull")),this.push.on("removeListener",d("push"));var _=vo.all([this.push,this.pull]).then(function(e){var t={push:e[0],pull:e[1]};return p.emit("complete",t),r&&r(null,t),p.removeAllListeners(),t},function(e){if(p.cancel(),r?r(e):p.emit("error",e),p.removeAllListeners(),r)throw e});this.then=function(e,t){return _.then(e,t)},this.catch=function(e){return _.catch(e)}}function oo(e){e.replicate=to,e.sync=no,Object.defineProperty(e.prototype,"replicate",{get:function(){var e=this;return{from:function(t,n,r){return e.constructor.replicate(t,e,n,r)},to:function(t,n,r){return e.constructor.replicate(e,t,n,r)}}}}),e.prototype.sync=function(e,t,n){return this.constructor.sync(this,e,t,n)}}var io=r(e(11)),ao=r(e(7)),so=r(e(1)),uo=e(4),co=r(e(6)),fo=r(e(5)),lo=r(e(2)),ho=r(e(10)),po=r(e(16)),vo="function"==typeof Promise?Promise:ao,go=Function.prototype.toString,yo=go.call(Object);v.prototype.get=function(e){var t=h(e);return this._store[t]},v.prototype.set=function(e,t){var n=h(e);return this._store[n]=t,!0},v.prototype.has=function(e){return h(e)in this._store},v.prototype.delete=function(e){var t=h(e),n=t in this._store;return delete this._store[t],n},v.prototype.forEach=function(e){for(var t=Object.keys(this._store),n=0,r=t.length;n<r;n++){var o=t[n],i=this._store[o];o=p(o),e(i,o)}},Object.defineProperty(v.prototype,"size",{get:function(){return Object.keys(this._store).length}}),g.prototype.add=function(e){return this._store.set(e,!0)},g.prototype.has=function(e){return this._store.has(e)},g.prototype.forEach=function(e){this._store.forEach(function(t,n){e(n)})},Object.defineProperty(g.prototype,"size",{get:function(){return this._store.size}});var _o,mo;!function(){if("undefined"==typeof Symbol||"undefined"==typeof Map||"undefined"==typeof Set)return!1;var e=Object.getOwnPropertyDescriptor(Map,Symbol.species);return e&&"get"in e&&Map[Symbol.species]===Map}()?(_o=g,mo=v):(_o=Set,mo=Map);var bo,wo=6;if(w())bo=!1;else try{localStorage.setItem("_pouch_check_localstorage",1),bo=!!localStorage.getItem("_pouch_check_localstorage")}catch(e){bo=!1}co(S,uo.EventEmitter),S.prototype.addListener=function(e,t,n,r){function o(){function e(){a=!1}if(i._listeners[t]){if(a)return void(a="waiting");a=!0;var s=y(r,["style","include_docs","attachments","conflicts","filter","doc_ids","view","since","query_params","binary"]);n.changes(s).on("change",function(e){e.seq>r.since&&!r.cancelled&&(r.since=e.seq,r.onChange(e))}).on("complete",function(){"waiting"===a&&fo(o),a=!1}).on("error",e)}}if(!this._listeners[t]){var i=this,a=!1;this._listeners[t]=o,this.on(e,o)}},S.prototype.removeListener=function(e,t){t in this._listeners&&(uo.EventEmitter.prototype.removeListener.call(this,e,this._listeners[t]),delete this._listeners[t])},S.prototype.notifyLocalWindows=function(e){w()?chrome.storage.local.set({dbName:e}):E()&&(localStorage[e]="a"===localStorage[e]?"b":"a")},S.prototype.notify=function(e){this.emit(e),this.notifyLocalWindows(e)};var Eo;Eo="function"==typeof Object.assign?Object.assign:function(e){for(var t=Object(e),n=1;n<arguments.length;n++){var r=arguments[n];if(null!=r)for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t};var ko=Eo;co(O,Error),O.prototype.toString=function(){return JSON.stringify({status:this.status,name:this.name,message:this.message,reason:this.reason})};var So=(new O(401,"unauthorized","Name or password is incorrect."),new O(400,"bad_request","Missing JSON list of 'docs'")),qo=new O(404,"not_found","missing"),Ao=new O(409,"conflict","Document update conflict"),xo=new O(400,"bad_request","_id field must contain a string"),To=new O(412,"missing_id","_id is required for puts"),Oo=new O(400,"bad_request","Only reserved document ids may start with underscore."),jo=(new O(412,"precondition_failed","Database not open"),new O(500,"unknown_error","Database encountered an unknown error")),Co=new O(500,"badarg","Some query argument is invalid"),Lo=(new O(400,"invalid_request","Request was invalid"),new O(400,"query_parse_error","Some query parameter is invalid")),Io=new O(500,"doc_validation","Bad special document member"),Do=new O(400,"bad_request","Something wrong with the request"),Ro=new O(400,"bad_request","Document must be a JSON object"),No=(new O(404,"not_found","Database not found"),new O(500,"indexed_db_went_bad","unknown")),Bo=new O(500,"web_sql_went_bad","unknown"),$o=(new O(500,"levelDB_went_went_bad","unknown"),new O(403,"forbidden","Forbidden by design doc validate_doc_update function"),new O(400,"bad_request","Invalid rev format")),Fo=(new O(412,"file_exists","The database could not be created, the file already exists."),new O(412,"missing_stub","A pre-existing attachment stub wasn't found")),Mo=(new O(413,"invalid_url","Provided URL is invalid"),R.name);var Po=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],Uo="queryKey",Jo=/(?:^|&)([^&=]*)=?([^&]*)/g,Ho=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Wo=io.v4;co(pe,uo.EventEmitter),pe.prototype.cancel=function(){this.isCancelled=!0,this.db.taskqueue.isReady&&this.emit("cancel")},pe.prototype.validateChanges=function(e){var t=e.complete,n=this;Te._changesFilterPlugin?Te._changesFilterPlugin.validate(e,function(r){if(r)return t(r);n.doChanges(e)}):n.doChanges(e)},pe.prototype.doChanges=function(e){var t=this,n=e.complete;if(e=u(e),"live"in e&&!("continuous"in e)&&(e.continuous=e.live),e.processChange=ve,"latest"===e.since&&(e.since="now"),e.since||(e.since=0),"now"===e.since)return void this.db.info().then(function(r){if(t.isCancelled)return void n(null,{status:"cancelled"});e.since=r.update_seq,t.doChanges(e)},n);if(Te._changesFilterPlugin){if(Te._changesFilterPlugin.normalize(e),Te._changesFilterPlugin.shouldFilter(this,e))return Te._changesFilterPlugin.filter(this,e)}else["doc_ids","filter","selector","view"].forEach(function(t){t in e&&q("warn",'The "'+t+'" option was passed in to changes/replicate, but pouchdb-changes-filter plugin is not installed, so it was ignored. Please install the plugin to enable filtering.')});"descending"in e||(e.descending=!1),e.limit=0===e.limit?1:e.limit,e.complete=n;var r=this.db._changes(e);if(r&&"function"==typeof r.cancel){var o=t.cancel;t.cancel=so(function(e){r.cancel(),o.apply(this,e)})}},co(Se,uo.EventEmitter),Se.prototype.post=d("post",function(e,t,n){if("function"==typeof t&&(n=t,t={}),"object"!=typeof e||Array.isArray(e))return n(j(Ro));this.bulkDocs({docs:[e]},t,ye(n,e._id))}),Se.prototype.put=d("put",function(e,t,n){function r(n){"function"==typeof o._put&&!1!==t.new_edits?o._put(e,t,n):o.bulkDocs({docs:[e]},t,ye(n,e._id))}if("function"==typeof t&&(n=t,t={}),"object"!=typeof e||Array.isArray(e))return n(j(Ro));if(N(e._id),le(e._id)&&"function"==typeof this._putLocal)return e._deleted?this._removeLocal(e,n):this._putLocal(e,n);var o=this;t.force&&e._rev?(!function(){var n=e._rev.split("-"),r=n[1],o=parseInt(n[0],10),i=o+1,a=W();e._revisions={start:i,ids:[a,r]},e._rev=i+"-"+a,t.new_edits=!1}(),r(function(t){var r=t?null:{ok:!0,id:e._id,rev:e._rev};n(t,r)})):r(n)}),Se.prototype.putAttachment=d("putAttachment",function(e,t,n,r,o){function i(e){var n="_rev"in e?parseInt(e._rev,10):0;return e._attachments=e._attachments||{},e._attachments[t]={content_type:o,data:r,revpos:++n},a.put(e)}var a=this;return"function"==typeof o&&(o=r,r=n,n=null),void 0===o&&(o=r,r=n,n=null),o||q("warn","Attachment",t,"on document",e,"is missing content_type"),a.get(e).then(function(e){if(e._rev!==n)throw j(Ao);return i(e)},function(t){if(t.reason===qo.message)return i({_id:e});throw t})}),Se.prototype.removeAttachment=d("removeAttachment",function(e,t,n,r){var o=this;o.get(e,function(e,i){
return e?void r(e):i._rev!==n?void r(j(Ao)):i._attachments?(delete i._attachments[t],0===Object.keys(i._attachments).length&&delete i._attachments,void o.put(i,r)):r()})}),Se.prototype.remove=d("remove",function(e,t,n,r){var o;"string"==typeof t?(o={_id:e,_rev:t},"function"==typeof n&&(r=n,n={})):(o=e,"function"==typeof t?(r=t,n={}):(r=n,n=t)),n=n||{},n.was_delete=!0;var i={_id:o._id,_rev:o._rev||n.rev};if(i._deleted=!0,le(i._id)&&"function"==typeof this._removeLocal)return this._removeLocal(o,r);this.bulkDocs({docs:[i]},n,ye(r,i._id))}),Se.prototype.revsDiff=d("revsDiff",function(e,t,n){function r(e,t){s.has(e)||s.set(e,{missing:[]}),s.get(e).missing.push(t)}function o(t,n){var o=e[t].slice(0);K(n,function(e,n,i,a,s){var u=n+"-"+i,c=o.indexOf(u);-1!==c&&(o.splice(c,1),"available"!==s.status&&r(t,u))}),o.forEach(function(e){r(t,e)})}"function"==typeof t&&(n=t,t={});var i=Object.keys(e);if(!i.length)return n(null,{});var a=0,s=new mo;i.map(function(t){this._getRevisionTree(t,function(r,u){if(r&&404===r.status&&"missing"===r.message)s.set(t,{missing:e[t]});else{if(r)return n(r);o(t,u)}if(++a===i.length){var c={};return s.forEach(function(e,t){c[t]=e}),n(null,c)}})},this)}),Se.prototype.bulkGet=d("bulkGet",function(e,t){b(this,e,t)}),Se.prototype.compactDocument=d("compactDocument",function(e,t,n){var r=this;this._getRevisionTree(e,function(o,i){if(o)return n(o);var a=be(i),s=[],u=[];Object.keys(a).forEach(function(e){a[e]>t&&s.push(e)}),K(i,function(e,t,n,r,o){var i=t+"-"+n;"available"===o.status&&-1!==s.indexOf(i)&&u.push(i)}),r._doCompaction(e,u,n)})}),Se.prototype.compact=d("compact",function(e,t){"function"==typeof e&&(t=e,e={});var n=this;e=e||{},n._compactionQueue=n._compactionQueue||[],n._compactionQueue.push({opts:e,callback:t}),1===n._compactionQueue.length&&Ee(n)}),Se.prototype._compact=function(e,t){function n(e){a.push(o.compactDocument(e.id,0))}function r(e){var n=e.last_seq;vo.all(a).then(function(){return J(o,"_local/compaction",function(e){return(!e.last_seq||e.last_seq<n)&&(e.last_seq=n,e)})}).then(function(){t(null,{ok:!0})}).catch(t)}var o=this,i={return_docs:!1,last_seq:e.last_seq||0},a=[];o.changes(i).on("change",n).on("complete",r).on("error",t)},Se.prototype.get=d("get",function(e,t,n){function r(){var r=[],a=o.length;if(!a)return n(null,r);o.forEach(function(o){i.get(e,{rev:o,revs:t.revs,latest:t.latest,attachments:t.attachments},function(e,t){if(e)r.push({missing:o});else{for(var i,s=0,u=r.length;s<u;s++)if(r[s].ok&&r[s].ok._rev===t._rev){i=!0;break}i||r.push({ok:t})}--a||n(null,r)})})}if("function"==typeof t&&(n=t,t={}),"string"!=typeof e)return n(j(xo));if(le(e)&&"function"==typeof this._getLocal)return this._getLocal(e,n);var o=[],i=this;if(!t.open_revs)return this._get(e,t,function(r,o){if(r)return r.docId=e,n(r);var a=o.doc,s=o.metadata,u=o.ctx;if(t.conflicts){var c=V(s);c.length&&(a._conflicts=c)}if(fe(s,a._rev)&&(a._deleted=!0),t.revs||t.revs_info){for(var f=a._rev.split("-"),l=parseInt(f[0],10),d=f[1],h=Y(s.rev_tree),p=null,v=0;v<h.length;v++){var g=h[v],y=g.ids.map(function(e){return e.id}).indexOf(d);(y===l-1||!p&&-1!==y)&&(p=g)}var _=p.ids.map(function(e){return e.id}).indexOf(a._rev.split("-")[1])+1,m=p.ids.length-_;if(p.ids.splice(_,m),p.ids.reverse(),t.revs&&(a._revisions={start:p.pos+p.ids.length-1,ids:p.ids.map(function(e){return e.id})}),t.revs_info){var b=p.pos+p.ids.length;a._revs_info=p.ids.map(function(e){return b--,{rev:b+"-"+e.id,status:e.opts.status}})}}if(t.attachments&&a._attachments){var w=a._attachments,E=Object.keys(w).length;if(0===E)return n(null,a);Object.keys(w).forEach(function(e){this._getAttachment(a._id,e,w[e],{rev:a._rev,binary:t.binary,ctx:u},function(t,r){var o=a._attachments[e];o.data=r,delete o.stub,delete o.length,--E||n(null,a)})},i)}else{if(a._attachments)for(var k in a._attachments)a._attachments.hasOwnProperty(k)&&(a._attachments[k].stub=!0);n(null,a)}});if("all"===t.open_revs)this._getRevisionTree(e,function(e,t){if(e)return n(e);o=G(t).map(function(e){return e.rev}),r()});else{if(!Array.isArray(t.open_revs))return n(j(jo,"function_clause"));o=t.open_revs;for(var a=0;a<o.length;a++){var s=o[a];if("string"!=typeof s||!/^\d+-/.test(s))return n(j($o))}r()}}),Se.prototype.getAttachment=d("getAttachment",function(e,t,n,r){var o=this;n instanceof Function&&(r=n,n={}),this._get(e,n,function(i,a){return i?r(i):a.doc._attachments&&a.doc._attachments[t]?(n.ctx=a.ctx,n.binary=!0,o._getAttachment(e,t,a.doc._attachments[t],n,r),void 0):r(j(qo))})}),Se.prototype.allDocs=d("allDocs",function(e,t){if("function"==typeof e&&(t=e,e={}),e.skip=void 0!==e.skip?e.skip:0,e.start_key&&(e.startkey=e.start_key),e.end_key&&(e.endkey=e.end_key),"keys"in e){if(!Array.isArray(e.keys))return t(new TypeError("options.keys must be an array"));var n=["startkey","endkey","key"].filter(function(t){return t in e})[0];if(n)return void t(j(Lo,"Query parameter `"+n+"` is not compatible with multi-get"));if(!B(this))return we(this,e,t)}return this._allDocs(e,t)}),Se.prototype.changes=function(e,t){return"function"==typeof e&&(t=e,e={}),new pe(this,e,t)},Se.prototype.close=d("close",function(e){return this._closed=!0,this.emit("closed"),this._close(e)}),Se.prototype.info=d("info",function(e){var t=this;this._info(function(n,r){if(n)return e(n);r.db_name=r.db_name||t.name,r.auto_compaction=!(!t.auto_compaction||B(t)),r.adapter=t.adapter,e(null,r)})}),Se.prototype.id=d("id",function(e){return this._id(e)}),Se.prototype.type=function(){return"function"==typeof this._type?this._type():this.adapter},Se.prototype.bulkDocs=d("bulkDocs",function(e,t,n){if("function"==typeof t&&(n=t,t={}),t=t||{},Array.isArray(e)&&(e={docs:e}),!e||!e.docs||!Array.isArray(e.docs))return n(j(So));for(var r=0;r<e.docs.length;++r)if("object"!=typeof e.docs[r]||Array.isArray(e.docs[r]))return n(j(Ro));var o;if(e.docs.forEach(function(e){e._attachments&&Object.keys(e._attachments).forEach(function(t){o=o||ke(t),e._attachments[t].content_type||q("warn","Attachment",t,"on document",e._id,"is missing content_type")})}),o)return n(j(Do,o));"new_edits"in t||(t.new_edits=!("new_edits"in e)||e.new_edits);var i=this;t.new_edits||B(i)||e.docs.sort(me),_e(e.docs);var a=e.docs.map(function(e){return e._id});return this._bulkDocs(e,t,function(e,r){if(e)return n(e);if(t.new_edits||(r=r.filter(function(e){return e.error})),!B(i))for(var o=0,s=r.length;o<s;o++)r[o].id=r[o].id||a[o];n(null,r)})}),Se.prototype.registerDependentDatabase=d("registerDependentDatabase",function(e,t){function n(t){return t.dependentDbs=t.dependentDbs||{},!t.dependentDbs[e]&&(t.dependentDbs[e]=!0,t)}var r=new this.constructor(e,this.__opts);J(this,"_local/_pouch_dependentDbs",n).then(function(){t(null,{db:r})}).catch(t)}),Se.prototype.destroy=d("destroy",function(e,t){function n(){r._destroy(e,function(e,n){if(e)return t(e);r._destroyed=!0,r.emit("destroyed"),t(null,n||{ok:!0})})}"function"==typeof e&&(t=e,e={});var r=this,o=!("use_prefix"in r)||r.use_prefix;if(B(r))return n();r.get("_local/_pouch_dependentDbs",function(e,i){if(e)return 404!==e.status?t(e):n();var a=i.dependentDbs,s=r.constructor,u=Object.keys(a).map(function(e){var t=o?e.replace(new RegExp("^"+s.prefix),""):e;return new s(t,r.__opts).destroy()});vo.all(u).then(n,t)})}),qe.prototype.execute=function(){var e;if(this.failed)for(;e=this.queue.shift();)e(this.failed);else for(;e=this.queue.shift();)e()},qe.prototype.fail=function(e){this.failed=e,this.execute()},qe.prototype.ready=function(e){this.isReady=!0,this.db=e,this.execute()},qe.prototype.addTask=function(e){this.queue.push(e),this.failed&&this.execute()},co(Te,Se),Te.adapters={},Te.preferredAdapters=[],Te.prefix="_pouch_";var zo=new uo.EventEmitter;!function(e){Object.keys(uo.EventEmitter.prototype).forEach(function(t){"function"==typeof uo.EventEmitter.prototype[t]&&(e[t]=zo[t].bind(zo))});var t=e._destructionListeners=new mo;e.on("ref",function(e){t.has(e.name)||t.set(e.name,[]),t.get(e.name).push(e)}),e.on("unref",function(e){if(t.has(e.name)){var n=t.get(e.name),r=n.indexOf(e);r<0||(n.splice(r,1),n.length>1?t.set(e.name,n):t.delete(e.name))}}),e.on("destroyed",function(e){if(t.has(e)){var n=t.get(e);t.delete(e),n.forEach(function(e){e.emit("destroyed",!0)})}})}(Te),Te.adapter=function(e,t,n){t.valid()&&(Te.adapters[e]=t,n&&Te.preferredAdapters.push(e))},Te.plugin=function(e){if("function"==typeof e)e(Te);else{if("object"!=typeof e||0===Object.keys(e).length)throw new Error('Invalid plugin: got "'+e+'", expected an object or a function');Object.keys(e).forEach(function(t){Te.prototype[t]=e[t]})}return this.__defaults&&(Te.__defaults=ko({},this.__defaults)),Te},Te.defaults=function(e){function t(e,n){if(!(this instanceof t))return new t(e,n);n=n||{},e&&"object"==typeof e&&(n=e,e=n.name,delete n.name),n=ko({},t.__defaults,n),Te.call(this,e,n)}return co(t,Te),t.preferredAdapters=Te.preferredAdapters.slice(),Object.keys(Te).forEach(function(e){e in t||(t[e]=Te[e])}),t.__defaults=ko({},this.__defaults,e),t};var Ko=["$or","$nor","$not"],Xo=-324,Go=3,Vo="",Qo={$elemMatch:function(e,t,n,r){return!!Array.isArray(r)&&(0!==r.length&&("object"==typeof r[0]?r.some(function(e){return ot(e,t,Object.keys(t))}):r.some(function(r){return it(t,e,n,r)})))},$allMatch:function(e,t,n,r){return!!Array.isArray(r)&&(0!==r.length&&("object"==typeof r[0]?r.every(function(e){return ot(e,t,Object.keys(t))}):r.every(function(r){return it(t,e,n,r)})))},$eq:function(e,t,n,r){return ct(r)&&0===He(r,t)},$gte:function(e,t,n,r){return ct(r)&&He(r,t)>=0},$gt:function(e,t,n,r){return ct(r)&&He(r,t)>0},$lte:function(e,t,n,r){return ct(r)&&He(r,t)<=0},$lt:function(e,t,n,r){return ct(r)&&He(r,t)<0},$exists:function(e,t,n,r){return t?ct(r):!ct(r)},$mod:function(e,t,n,r){return ut(r)&&ft(r,t)},$ne:function(e,t,n,r){return t.every(function(e){return 0!==He(r,e)})},$in:function(e,t,n,r){return ut(r)&&lt(r,t)},$nin:function(e,t,n,r){return ut(r)&&!lt(r,t)},$size:function(e,t,n,r){return ut(r)&&ht(r,t)},$all:function(e,t,n,r){return Array.isArray(r)&&dt(r,t)},$regex:function(e,t,n,r){return ut(r)&&pt(r,t)},$type:function(e,t,n,r){return vt(r,t)}};Te.plugin(Oe),Te.plugin(kt),Te.version="6.3.4";var Yo,Zo=St(["_id","_rev","_attachments","_deleted","_revisions","_revs_info","_conflicts","_deleted_conflicts","_local_seq","_rev_tree","_replication_id","_replication_state","_replication_state_time","_replication_state_reason","_replication_stats","_removed"]),ei=St(["_attachments","_replication_id","_replication_state","_replication_state_time","_replication_state_reason","_replication_stats"]),ti=function(e){return atob(e)},ni=function(e){return btoa(e)},ri=n.setImmediate||n.setTimeout,oi=32768,ii=5,ai="document-store",si="by-sequence",ui="attach-store",ci="attach-seq-store",fi="meta-store",li="local-store",di="detect-blob-support",hi=new S,pi=!1,vi=[],gi=new mo,yi=new mo;bn.valid=function(){return!("undefined"!=typeof openDatabase&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform))&&"undefined"!=typeof indexedDB&&"undefined"!=typeof IDBKeyRange};var _i=function(e){e.adapter("idb",bn,!0)},mi=7,bi=Tn("document-store"),wi=Tn("by-sequence"),Ei=Tn("attach-store"),ki=Tn("local-store"),Si=Tn("metadata-store"),qi=Tn("attach-seq-store"),Ai=new mo,xi=new S,Ti=1,Oi="CREATE INDEX IF NOT EXISTS 'by-seq-deleted-idx' ON "+wi+" (seq, deleted)",ji="CREATE UNIQUE INDEX IF NOT EXISTS 'by-seq-doc-id-rev' ON "+wi+" (doc_id, rev)",Ci="CREATE INDEX IF NOT EXISTS 'doc-winningseq-idx' ON "+bi+" (winningseq)",Li="CREATE INDEX IF NOT EXISTS 'attach-seq-seq-idx' ON "+qi+" (seq)",Ii="CREATE UNIQUE INDEX IF NOT EXISTS 'attach-seq-digest-idx' ON "+qi+" (digest, seq)",Di=wi+".seq = "+bi+".winningseq",Ri=wi+".seq AS seq, "+wi+".deleted AS deleted, "+wi+".json AS data, "+wi+".rev AS rev, "+bi+".json AS metadata";Xn.valid=zn,Xn.use_prefix=!0;var Ni=function(e){e.adapter("websql",Xn,!0)},Bi=function(){try{return new XMLHttpRequest,!0}catch(e){return!1}}(),$i=function(){},Fi=25,Mi=50,Pi=5e3,Ui=1e4,Ji={};lr.valid=function(){return!0};var Hi=function(e){e.adapter("http",lr,!1),e.adapter("https",lr,!1)};co(dr,Error),co(hr,Error),co(pr,Error);var Wi=q.bind(null,"log"),zi=Array.isArray,Ki=JSON.parse;Sr.prototype.add=function(e){return this.promise=this.promise.catch(function(){}).then(function(){return e()}),this.promise},Sr.prototype.finish=function(){return this.promise};var Xi={},Gi=new Sr,Vi=50,Qi={_sum:function(e,t){return Er(t)},_count:function(e,t){return t.length},_stats:function(e,t){return{sum:Er(t),min:Math.min.apply(null,t),max:Math.max.apply(null,t),count:t.length,sumsqr:function(e){for(var t=0,n=0,r=e.length;n<r;n++){var o=e[n];t+=o*o}return t}(t)}}},Yi=function(e,t,n,r){function o(e,t,n){try{t(n)}catch(t){jr(e,t)}}function i(e,t,n,r,o){try{return{output:t(n,r,o)}}catch(t){return jr(e,t),{error:t}}}function a(e,t){var n=He(e.key,t.key);return 0!==n?n:He(e.value,t.value)}function s(e,t,n){return n=n||0,"number"==typeof t?e.slice(n,t+n):n>0?e.slice(n):e}function u(e){var t=e.value;return t&&"object"==typeof t&&t._id||e.id}function c(e){e.rows.forEach(function(e){var t=e.doc&&e.doc._attachments;t&&Object.keys(t).forEach(function(e){var n=t[e];t[e].data=Ct(n.data,n.content_type)})})}function f(e){return function(t){return e.include_docs&&e.attachments&&e.binary&&c(t),t}}function l(e,t,n,r){var o=t[e];void 0!==o&&(r&&(o=encodeURIComponent(JSON.stringify(o))),n.push(e+"="+o))}function d(e){if(void 0!==e){var t=Number(e);return isNaN(t)||t!==parseInt(e,10)?e:t}}function h(e){return e.group_level=d(e.group_level),e.limit=d(e.limit),e.skip=d(e.skip),e}function p(e){if(e){if("number"!=typeof e)return new dr('Invalid value for integer: "'+e+'"');if(e<0)return new dr('Invalid value for positive integer: "'+e+'"')}}function v(e,t){var n=e.descending?"endkey":"startkey",r=e.descending?"startkey":"endkey";if(void 0!==e[n]&&void 0!==e[r]&&He(e[n],e[r])>0)throw new dr("No rows can match your key range, reverse your start_key and end_key or set {descending : true}");if(t.reduce&&!1!==e.reduce){if(e.include_docs)throw new dr("{include_docs:true} is invalid for reduce");if(e.keys&&e.keys.length>1&&!e.group&&!e.group_level)throw new dr("Multi-key fetches for reduce views must use {group: true}")}["group_level","limit","skip"].forEach(function(t){var n=p(e[t]);if(n)throw n})}function g(e,t,n){var r,o=[],i="GET";if(l("reduce",n,o),l("include_docs",n,o),l("attachments",n,o),l("limit",n,o),l("descending",n,o),l("group",n,o),l("group_level",n,o),l("skip",n,o),l("stale",n,o),l("conflicts",n,o),l("startkey",n,o,!0),l("start_key",n,o,!0),l("endkey",n,o,!0),l("end_key",n,o,!0),l("inclusive_end",n,o),l("key",n,o,!0),o=o.join("&"),o=""===o?"":"?"+o,void 0!==n.keys){var a="keys="+encodeURIComponent(JSON.stringify(n.keys));a.length+o.length+1<=2e3?o+=("?"===o[0]?"&":"?")+a:(i="POST","string"==typeof t?r={keys:n.keys}:t.keys=n.keys)}if("string"==typeof t){var s=Tr(t);return e.request({method:i,url:"_design/"+s[0]+"/_view/"+s[1]+o,body:r}).then(function(e){return e.rows.forEach(function(e){if(e.value&&e.value.error&&"builtin_reduce_error"===e.value.error)throw new Error(e.reason)}),e}).then(f(n))}return r=r||{},Object.keys(t).forEach(function(e){Array.isArray(t[e])?r[e]=t[e]:r[e]=t[e].toString()}),e.request({method:"POST",url:"_temp_view"+o,body:r}).then(f(n))}function y(e,t,n){return new vo(function(r,o){e._query(t,n,function(e,t){if(e)return o(e);r(t)})})}function _(e){return new vo(function(t,n){e._viewCleanup(function(e,r){if(e)return n(e);t(r)})})}function m(e){return function(t){if(404===t.status)return e;throw t}}function b(e,t,n){function r(e){return e.keys.length?t.db.allDocs({keys:e.keys,include_docs:!0}):vo.resolve({rows:[]})}function o(e,t){for(var n=[],r=new _o,o=0,i=t.rows.length;o<i;o++){var a=t.rows[o],s=a.doc;if(s&&(n.push(s),r.add(s._id),s._deleted=!u.has(s._id),!s._deleted)){var c=u.get(s._id);"value"in c&&(s.value=c.value)}}var f=br(u);return f.forEach(function(e){if(!r.has(e)){var t={_id:e},o=u.get(e);"value"in o&&(t.value=o.value),n.push(t)}}),e.keys=mr(f.concat(e.keys)),n.push(e),n}var i="_local/doc_"+e,a={_id:i,keys:[]},s=n.get(e),u=s[0],c=s[1];return function(){return Or(c)?vo.resolve(a):t.db.get(i).catch(m(a))}().then(function(e){return r(e).then(function(t){return o(e,t)})})}function w(e,t,n){return e.db.get("_local/lastSeq").catch(m({_id:"_local/lastSeq",seq:0})).then(function(r){var o=br(t);return vo.all(o.map(function(n){return b(n,e,t)})).then(function(t){var o=D(t);return r.seq=n,o.push(r),e.db.bulkDocs({docs:o})})})}function E(e){var t="string"==typeof e?e:e.name,n=Xi[t];return n||(n=Xi[t]=new Sr),n}function k(e){return _r(E(e),function(){return S(e)})()}function S(e){function n(e,t){var n={id:l._id,key:We(e)};void 0!==t&&null!==t&&(n.value=We(t)),f.push(n)}function r(t,n){return function(){return w(e,t,n)}}function i(){return e.sourceDB.changes({conflicts:!0,include_docs:!0,style:"all_docs",since:h,limit:Vi}).then(s)}function s(e){var t=e.results;if(t.length){var n=u(t);if(p.add(r(n,h)),!(t.length<Vi))return i()}}function u(t){for(var n=new mo,r=0,i=t.length;r<i;r++){var s=t[r];if("_"!==s.doc._id[0]){f=[],l=s.doc,l._deleted||o(e.sourceDB,d,l),f.sort(a);var u=c(f);n.set(s.doc._id,[u,s.changes])}h=s.seq}return n}function c(e){for(var t,n=new mo,r=0,o=e.length;r<o;r++){var i=e[r],a=[i.key,i.id];r>0&&0===He(i.key,t)&&a.push(r),n.set(Ke(a),i),t=i.key}return n}var f,l,d=t(e.mapFun,n),h=e.seq||0,p=new Sr;return i().then(function(){return p.finish()}).then(function(){e.seq=h})}function q(e,t,r){0===r.group_level&&delete r.group_level;var o=r.group||r.group_level,a=n(e.reduceFun),u=[],c=isNaN(r.group_level)?Number.POSITIVE_INFINITY:r.group_level;t.forEach(function(e){var t=u[u.length-1],n=o?e.key:null;if(o&&Array.isArray(n)&&(n=n.slice(0,c)),t&&0===He(t.groupKey,n))return t.keys.push([e.key,e.id]),void t.values.push(e.value);u.push({keys:[[e.key,e.id]],values:[e.value],groupKey:n})}),t=[];for(var f=0,l=u.length;f<l;f++){var d=u[f],h=i(e.sourceDB,a,d.keys,d.values,!1);if(h.error&&h.error instanceof pr)throw h.error;t.push({value:h.error?null:h.output,key:d.groupKey})}return{rows:s(t,r.limit,r.skip)}}function A(e,t){return _r(E(e),function(){return x(e,t)})()}function x(e,t){function n(t){return t.include_docs=!0,e.db.allDocs(t).then(function(e){return o=e.total_rows,e.rows.map(function(e){if("value"in e.doc&&"object"==typeof e.doc.value&&null!==e.doc.value){var t=Object.keys(e.doc.value).sort(),n=["id","key","value"];if(!(t<n||t>n))return e.doc.value}var r=Ve(e.doc._id);return{key:r[0],id:r[1],value:"value"in e.doc?e.doc.value:null}})})}function r(n){var r;if(r=i?q(e,n,t):{total_rows:o,offset:a,rows:n},t.include_docs){var s=mr(n.map(u));return e.sourceDB.allDocs({keys:s,include_docs:!0,conflicts:t.conflicts,attachments:t.attachments,binary:t.binary}).then(function(e){var t=new mo;return e.rows.forEach(function(e){t.set(e.id,e.doc)}),n.forEach(function(e){var n=u(e),r=t.get(n);r&&(e.doc=r)}),r})}return r}var o,i=e.reduceFun&&!1!==t.reduce,a=t.skip||0;if(void 0===t.keys||t.keys.length||(t.limit=0,delete t.keys),void 0!==t.keys){var s=t.keys,c=s.map(function(e){return n({startkey:Ke([e]),endkey:Ke([e,{}])})});return vo.all(c).then(D).then(r)}var f,l,d={descending:t.descending};if("start_key"in t&&(f=t.start_key),"startkey"in t&&(f=t.startkey),"end_key"in t&&(l=t.end_key),"endkey"in t&&(l=t.endkey),void 0!==f&&(d.startkey=Ke(t.descending?[f,{}]:[f])),void 0!==l){var h=!1!==t.inclusive_end;t.descending&&(h=!h),d.endkey=Ke(h?[l,{}]:[l])}if(void 0!==t.key){var p=Ke([t.key]),v=Ke([t.key,{}]);d.descending?(d.endkey=p,d.startkey=v):(d.startkey=p,d.endkey=v)}return i||("number"==typeof t.limit&&(d.limit=t.limit),d.skip=a),n(d).then(r)}function T(e){return e.request({method:"POST",url:"_view_cleanup"})}function O(t){return t.get("_local/"+e).then(function(e){var n=new mo;Object.keys(e.views).forEach(function(e){var t=Tr(e),r="_design/"+t[0],o=t[1],i=n.get(r);i||(i=new _o,n.set(r,i)),i.add(o)});var r={keys:br(n),include_docs:!0};return t.allDocs(r).then(function(r){var o={};r.rows.forEach(function(t){var r=t.key.substring(8);n.get(t.key).forEach(function(n){var i=r+"/"+n;e.views[i]||(i=n);var a=Object.keys(e.views[i]),s=t.doc&&t.doc.views&&t.doc.views[n];a.forEach(function(e){o[e]=o[e]||s})})});var i=Object.keys(o).filter(function(e){return!o[e]}),a=i.map(function(e){return _r(E(e),function(){return new t.constructor(e,t.__opts).destroy()})()});return vo.all(a).then(function(){return{ok:!0}})})},m({ok:!0}))}function j(t,n,o){if("function"==typeof t._query)return y(t,n,o);if(B(t))return g(t,n,o);if("string"!=typeof n)return v(o,n),Gi.add(function(){return xr(t,"temp_view/temp_view",n.map,n.reduce,!0,e).then(function(e){return yr(k(e).then(function(){return A(e,o)}),function(){return e.db.destroy()})})}),Gi.finish();var i=n,a=Tr(i),s=a[0],u=a[1];return t.get("_design/"+s).then(function(n){var a=n.views&&n.views[u];if(!a)throw new hr("ddoc "+n._id+" has no view named "+u);return r(n,u),v(o,a),xr(t,i,a.map,a.reduce,!1,e).then(function(e){return"ok"===o.stale||"update_after"===o.stale?("update_after"===o.stale&&fo(function(){k(e)}),A(e,o)):k(e).then(function(){return A(e,o)})})})}function C(e,t,n){var r=this;"function"==typeof t&&(n=t,t={}),t=t?h(t):{},"function"==typeof e&&(e={map:e});var o=vo.resolve().then(function(){return j(r,e,t)});return vr(o,n),o}return{query:C,viewCleanup:gr(function(){var e=this;return"function"==typeof e._viewCleanup?_(e):B(e)?T(e):O(e)})}}("mrviews",Lr,Ir,Dr),Zi={query:Rr,viewCleanup:Nr},ea=1,ta="pouchdb",na=5,ra=0;Hr.prototype.writeCheckpoint=function(e,t){var n=this;return this.updateTarget(e,t).then(function(){return n.updateSource(e,t)})},Hr.prototype.updateTarget=function(e,t){return this.opts.writeTargetCheckpoint?Jr(this.target,this.id,e,t,this.returnValue):vo.resolve(!0)},Hr.prototype.updateSource=function(e,t){if(this.opts.writeSourceCheckpoint){var n=this;return this.readOnlySource?vo.resolve(!0):Jr(this.src,this.id,e,t,this.returnValue).catch(function(e){if(Xr(e))return n.readOnlySource=!0,!0;throw e})}return vo.resolve(!0)};var oa={undefined:function(e,t){return 0===He(e.last_seq,t.last_seq)?t.last_seq:0},1:function(e,t){return Wr(t,e).last_seq}};Hr.prototype.getCheckpoint=function(){var e=this;return e.target.get(e.id).then(function(t){return e.readOnlySource?vo.resolve(t.last_seq):e.src.get(e.id).then(function(e){if(t.version!==e.version)return ra;var n;return n=t.version?t.version.toString():"undefined",n in oa?oa[n](t,e):ra},function(n){if(404===n.status&&t.last_seq)return e.src.put({_id:e.id,last_seq:ra}).then(function(){return ra},function(n){return Xr(n)?(e.readOnlySource=!0,t.last_seq):ra});throw n})}).catch(function(e){if(404!==e.status)throw e;return ra})};var ia=0;co(Zr,uo.EventEmitter),Zr.prototype.cancel=function(){this.cancelled=!0,this.state="cancelled",this.emit("cancel")},Zr.prototype.ready=function(e,t){function n(){o.cancel()}function r(){e.removeListener("destroyed",n),t.removeListener("destroyed",n)}var o=this;o._readyCalled||(o._readyCalled=!0,e.once("destroyed",n),t.once("destroyed",n),o.once("complete",r))},co(ro,uo.EventEmitter),ro.prototype.cancel=function(){this.canceled||(this.canceled=!0,this.push.cancel(),this.pull.cancel())},Te.plugin(_i).plugin(Ni).plugin(Hi).plugin(Zi).plugin(oo),t.exports=Te}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{1:1,10:10,11:11,16:16,2:2,4:4,5:5,6:6,7:7}]},{},[17])(17)});


(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.PouchAuthentication = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process){
'use strict';

var Promise = require(13);
var urlJoin = require(16);

function getBaseUrl(db) {
  if (typeof db.getUrl === 'function') { // pouchdb pre-6.0.0
    return db.getUrl().replace(/\/[^\/]+\/?$/, '');
  } else { // pouchdb post-6.0.0
    return db.name.replace(/\/[^\/]+\/?$/, '');
  }
}
exports.getUsersUrl = function (db) {
  return urlJoin(getBaseUrl(db), '/_users');
};
exports.getSessionUrl = function (db) {
  return urlJoin(getBaseUrl(db), '/_session');
};
exports.once = function (fun) {
  var called = false;
  return exports.getArguments(function (args) {
    if (called) {
      console.trace();
      throw new Error('once called  more than once');
    } else {
      called = true;
      fun.apply(this, args);
    }
  });
};
exports.getArguments = function (fun) {
  return function () {
    var len = arguments.length;
    var args = new Array(len);
    var i = -1;
    while (++i < len) {
      args[i] = arguments[i];
    }
    return fun.call(this, args);
  };
};
exports.toPromise = function (func) {
  //create the function we will be returning
  return exports.getArguments(function (args) {
    var self = this;
    var tempCB = (typeof args[args.length - 1] === 'function') ? args.pop() : false;
    // if the last argument is a function, assume its a callback
    var usedCB;
    if (tempCB) {
      // if it was a callback, create a new callback which calls it,
      // but do so async so we don't trap any errors
      usedCB = function (err, resp) {
        process.nextTick(function () {
          tempCB(err, resp);
        });
      };
    }
    var promise = new Promise(function (fulfill, reject) {
      try {
        var callback = exports.once(function (err, mesg) {
          if (err) {
            reject(err);
          } else {
            fulfill(mesg);
          }
        });
        // create a callback for this invocation
        // apply the function in the orig context
        args.push(callback);
        func.apply(self, args);
      } catch (e) {
        reject(e);
      }
    });
    // if there is a callback, call it back
    if (usedCB) {
      promise.then(function (result) {
        usedCB(null, result);
      }, usedCB);
    }
    promise.cancel = function () {
      return this;
    };
    return promise;
  });
};

exports.inherits = require(7);
exports.extend = require(12);
exports.ajax = require(11);
exports.clone = function (obj) {
  return exports.extend(true, {}, obj);
};
exports.uuid = require(14).uuid;
exports.Promise = Promise;

}).call(this,require(15))
},{"11":11,"12":12,"13":13,"14":14,"15":15,"16":16,"7":7}],2:[function(require,module,exports){
'use strict';

module.exports = argsArray;

function argsArray(fun) {
  return function () {
    var len = arguments.length;
    if (len) {
      var args = [];
      var i = -1;
      while (++i < len) {
        args[i] = arguments[i];
      }
      return fun.call(this, args);
    } else {
      return fun.call(this, []);
    }
  };
}
},{}],3:[function(require,module,exports){

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = require(4);
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // is webkit? http://stackoverflow.com/a/16459606/376773
  return ('WebkitAppearance' in document.documentElement.style) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (window.console && (console.firebug || (console.exception && console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  return JSON.stringify(v);
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs() {
  var args = arguments;
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return args;

  var c = 'color: ' + this.color;
  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
  return args;
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}
  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage(){
  try {
    return window.localStorage;
  } catch (e) {}
}

},{"4":4}],4:[function(require,module,exports){

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = debug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = require(10);

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lowercased letter, i.e. "n".
 */

exports.formatters = {};

/**
 * Previously assigned color.
 */

var prevColor = 0;

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 *
 * @return {Number}
 * @api private
 */

function selectColor() {
  return exports.colors[prevColor++ % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function debug(namespace) {

  // define the `disabled` version
  function disabled() {
  }
  disabled.enabled = false;

  // define the `enabled` version
  function enabled() {

    var self = enabled;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // add the `color` if not set
    if (null == self.useColors) self.useColors = exports.useColors();
    if (null == self.color && self.useColors) self.color = selectColor();

    var args = Array.prototype.slice.call(arguments);

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %o
      args = ['%o'].concat(args);
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    if ('function' === typeof exports.formatArgs) {
      args = exports.formatArgs.apply(self, args);
    }
    var logFn = enabled.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }
  enabled.enabled = true;

  var fn = exports.enabled(namespace) ? enabled : disabled;

  fn.namespace = namespace;

  return fn;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  var split = (namespaces || '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

},{"10":10}],5:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],6:[function(require,module,exports){
(function (global){
'use strict';
var Mutation = global.MutationObserver || global.WebKitMutationObserver;

var scheduleDrain;

{
  if (Mutation) {
    var called = 0;
    var observer = new Mutation(nextTick);
    var element = global.document.createTextNode('');
    observer.observe(element, {
      characterData: true
    });
    scheduleDrain = function () {
      element.data = (called = ++called % 2);
    };
  } else if (!global.setImmediate && typeof global.MessageChannel !== 'undefined') {
    var channel = new global.MessageChannel();
    channel.port1.onmessage = nextTick;
    scheduleDrain = function () {
      channel.port2.postMessage(0);
    };
  } else if ('document' in global && 'onreadystatechange' in global.document.createElement('script')) {
    scheduleDrain = function () {

      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var scriptEl = global.document.createElement('script');
      scriptEl.onreadystatechange = function () {
        nextTick();

        scriptEl.onreadystatechange = null;
        scriptEl.parentNode.removeChild(scriptEl);
        scriptEl = null;
      };
      global.document.documentElement.appendChild(scriptEl);
    };
  } else {
    scheduleDrain = function () {
      setTimeout(nextTick, 0);
    };
  }
}

var draining;
var queue = [];
//named nextTick for less confusing stack traces
function nextTick() {
  draining = true;
  var i, oldQueue;
  var len = queue.length;
  while (len) {
    oldQueue = queue;
    queue = [];
    i = -1;
    while (++i < len) {
      oldQueue[i]();
    }
    len = queue.length;
  }
  draining = false;
}

module.exports = immediate;
function immediate(task) {
  if (queue.push(task) === 1 && !draining) {
    scheduleDrain();
  }
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],7:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],8:[function(require,module,exports){
(function(factory) {
  if(typeof exports === 'object') {
    factory(exports);
  } else {
    factory(this);
  }
}).call(this, function(root) { 

  var slice   = Array.prototype.slice,
      each    = Array.prototype.forEach;

  var extend = function(obj) {
    if(typeof obj !== 'object') throw obj + ' is not an object' ;

    var sources = slice.call(arguments, 1); 

    each.call(sources, function(source) {
      if(source) {
        for(var prop in source) {
          if(typeof source[prop] === 'object' && obj[prop]) {
            extend.call(obj, obj[prop], source[prop]);
          } else {
            obj[prop] = source[prop];
          }
        } 
      }
    });

    return obj;
  }

  root.extend = extend;
});

},{}],9:[function(require,module,exports){
'use strict';
var immediate = require(6);

/* istanbul ignore next */
function INTERNAL() {}

var handlers = {};

var REJECTED = ['REJECTED'];
var FULFILLED = ['FULFILLED'];
var PENDING = ['PENDING'];

module.exports = Promise;

function Promise(resolver) {
  if (typeof resolver !== 'function') {
    throw new TypeError('resolver must be a function');
  }
  this.state = PENDING;
  this.queue = [];
  this.outcome = void 0;
  if (resolver !== INTERNAL) {
    safelyResolveThenable(this, resolver);
  }
}

Promise.prototype["catch"] = function (onRejected) {
  return this.then(null, onRejected);
};
Promise.prototype.then = function (onFulfilled, onRejected) {
  if (typeof onFulfilled !== 'function' && this.state === FULFILLED ||
    typeof onRejected !== 'function' && this.state === REJECTED) {
    return this;
  }
  var promise = new this.constructor(INTERNAL);
  if (this.state !== PENDING) {
    var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
    unwrap(promise, resolver, this.outcome);
  } else {
    this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
  }

  return promise;
};
function QueueItem(promise, onFulfilled, onRejected) {
  this.promise = promise;
  if (typeof onFulfilled === 'function') {
    this.onFulfilled = onFulfilled;
    this.callFulfilled = this.otherCallFulfilled;
  }
  if (typeof onRejected === 'function') {
    this.onRejected = onRejected;
    this.callRejected = this.otherCallRejected;
  }
}
QueueItem.prototype.callFulfilled = function (value) {
  handlers.resolve(this.promise, value);
};
QueueItem.prototype.otherCallFulfilled = function (value) {
  unwrap(this.promise, this.onFulfilled, value);
};
QueueItem.prototype.callRejected = function (value) {
  handlers.reject(this.promise, value);
};
QueueItem.prototype.otherCallRejected = function (value) {
  unwrap(this.promise, this.onRejected, value);
};

function unwrap(promise, func, value) {
  immediate(function () {
    var returnValue;
    try {
      returnValue = func(value);
    } catch (e) {
      return handlers.reject(promise, e);
    }
    if (returnValue === promise) {
      handlers.reject(promise, new TypeError('Cannot resolve promise with itself'));
    } else {
      handlers.resolve(promise, returnValue);
    }
  });
}

handlers.resolve = function (self, value) {
  var result = tryCatch(getThen, value);
  if (result.status === 'error') {
    return handlers.reject(self, result.value);
  }
  var thenable = result.value;

  if (thenable) {
    safelyResolveThenable(self, thenable);
  } else {
    self.state = FULFILLED;
    self.outcome = value;
    var i = -1;
    var len = self.queue.length;
    while (++i < len) {
      self.queue[i].callFulfilled(value);
    }
  }
  return self;
};
handlers.reject = function (self, error) {
  self.state = REJECTED;
  self.outcome = error;
  var i = -1;
  var len = self.queue.length;
  while (++i < len) {
    self.queue[i].callRejected(error);
  }
  return self;
};

function getThen(obj) {
  // Make sure we only access the accessor once as required by the spec
  var then = obj && obj.then;
  if (obj && typeof obj === 'object' && typeof then === 'function') {
    return function appyThen() {
      then.apply(obj, arguments);
    };
  }
}

function safelyResolveThenable(self, thenable) {
  // Either fulfill, reject or reject with error
  var called = false;
  function onError(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.reject(self, value);
  }

  function onSuccess(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.resolve(self, value);
  }

  function tryToUnwrap() {
    thenable(onSuccess, onError);
  }

  var result = tryCatch(tryToUnwrap);
  if (result.status === 'error') {
    onError(result.value);
  }
}

function tryCatch(func, value) {
  var out = {};
  try {
    out.value = func(value);
    out.status = 'success';
  } catch (e) {
    out.status = 'error';
    out.value = e;
  }
  return out;
}

Promise.resolve = resolve;
function resolve(value) {
  if (value instanceof this) {
    return value;
  }
  return handlers.resolve(new this(INTERNAL), value);
}

Promise.reject = reject;
function reject(reason) {
  var promise = new this(INTERNAL);
  return handlers.reject(promise, reason);
}

Promise.all = all;
function all(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var values = new Array(len);
  var resolved = 0;
  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    allResolver(iterable[i], i);
  }
  return promise;
  function allResolver(value, i) {
    self.resolve(value).then(resolveFromAll, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
    function resolveFromAll(outValue) {
      values[i] = outValue;
      if (++resolved === len && !called) {
        called = true;
        handlers.resolve(promise, values);
      }
    }
  }
}

Promise.race = race;
function race(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    resolver(iterable[i]);
  }
  return promise;
  function resolver(value) {
    self.resolve(value).then(function (response) {
      if (!called) {
        called = true;
        handlers.resolve(promise, response);
      }
    }, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
  }
}

},{"6":6}],10:[function(require,module,exports){
/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} options
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options){
  options = options || {};
  if ('string' == typeof val) return parse(val);
  return options.long
    ? long(val)
    : short(val);
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = '' + str;
  if (str.length > 10000) return;
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
  if (!match) return;
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function short(ms) {
  if (ms >= d) return Math.round(ms / d) + 'd';
  if (ms >= h) return Math.round(ms / h) + 'h';
  if (ms >= m) return Math.round(ms / m) + 'm';
  if (ms >= s) return Math.round(ms / s) + 's';
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function long(ms) {
  return plural(ms, d, 'day')
    || plural(ms, h, 'hour')
    || plural(ms, m, 'minute')
    || plural(ms, s, 'second')
    || ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) return;
  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
  return Math.ceil(ms / n) + ' ' + name + 's';
}

},{}],11:[function(require,module,exports){
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var lie = _interopDefault(require(9));
var jsExtend = require(8);
var inherits = _interopDefault(require(7));
var getArguments = _interopDefault(require(2));
var debug = _interopDefault(require(3));
var events = require(5);

// Abstracts constructing a Blob object, so it also works in older
// browsers that don't support the native Blob constructor (e.g.
// old QtWebKit versions, Android < 4.4).
function createBlob(parts, properties) {
  /* global BlobBuilder,MSBlobBuilder,MozBlobBuilder,WebKitBlobBuilder */
  parts = parts || [];
  properties = properties || {};
  try {
    return new Blob(parts, properties);
  } catch (e) {
    if (e.name !== "TypeError") {
      throw e;
    }
    var Builder = typeof BlobBuilder !== 'undefined' ? BlobBuilder :
                  typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder :
                  typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder :
                  WebKitBlobBuilder;
    var builder = new Builder();
    for (var i = 0; i < parts.length; i += 1) {
      builder.append(parts[i]);
    }
    return builder.getBlob(properties.type);
  }
}

// simplified API. universal browser support is assumed
function readAsArrayBuffer(blob, callback) {
  if (typeof FileReader === 'undefined') {
    // fix for Firefox in a web worker:
    // https://bugzilla.mozilla.org/show_bug.cgi?id=901097
    return callback(new FileReaderSync().readAsArrayBuffer(blob));
  }

  var reader = new FileReader();
  reader.onloadend = function (e) {
    var result = e.target.result || new ArrayBuffer(0);
    callback(result);
  };
  reader.readAsArrayBuffer(blob);
}

/* istanbul ignore next */
var PouchPromise = typeof Promise === 'function' ? Promise : lie;

/* global fetch */
/* global Headers */
function wrappedFetch() {
  var wrappedPromise = {};

  var promise = new PouchPromise(function (resolve, reject) {
    wrappedPromise.resolve = resolve;
    wrappedPromise.reject = reject;
  });

  var args = new Array(arguments.length);

  for (var i = 0; i < args.length; i++) {
    args[i] = arguments[i];
  }

  wrappedPromise.promise = promise;

  PouchPromise.resolve().then(function () {
    return fetch.apply(null, args);
  }).then(function (response) {
    wrappedPromise.resolve(response);
  }).catch(function (error) {
    wrappedPromise.reject(error);
  });

  return wrappedPromise;
}

function fetchRequest(options, callback) {
  var wrappedPromise, timer, response;

  var headers = new Headers();

  var fetchOptions = {
    method: options.method,
    credentials: 'include',
    headers: headers
  };

  if (options.json) {
    headers.set('Accept', 'application/json');
    headers.set('Content-Type', options.headers['Content-Type'] ||
      'application/json');
  }

  if (options.body && (options.body instanceof Blob)) {
    readAsArrayBuffer(options.body, function (arrayBuffer) {
      fetchOptions.body = arrayBuffer;
    });
  } else if (options.body &&
             options.processData &&
             typeof options.body !== 'string') {
    fetchOptions.body = JSON.stringify(options.body);
  } else if ('body' in options) {
    fetchOptions.body = options.body;
  } else {
    fetchOptions.body = null;
  }

  Object.keys(options.headers).forEach(function (key) {
    if (options.headers.hasOwnProperty(key)) {
      headers.set(key, options.headers[key]);
    }
  });

  wrappedPromise = wrappedFetch(options.url, fetchOptions);

  if (options.timeout > 0) {
    timer = setTimeout(function () {
      wrappedPromise.reject(new Error('Load timeout for resource: ' +
        options.url));
    }, options.timeout);
  }

  wrappedPromise.promise.then(function (fetchResponse) {
    response = {
      statusCode: fetchResponse.status
    };

    if (options.timeout > 0) {
      clearTimeout(timer);
    }

    if (response.statusCode >= 200 && response.statusCode < 300) {
      return options.binary ? fetchResponse.blob() : fetchResponse.text();
    }

    return fetchResponse.json();
  }).then(function (result) {
    if (response.statusCode >= 200 && response.statusCode < 300) {
      callback(null, response, result);
    } else {
      callback(result, response);
    }
  }).catch(function (error) {
    callback(error, response);
  });

  return {abort: wrappedPromise.reject};
}

function xhRequest(options, callback) {

  var xhr, timer;
  var timedout = false;

  var abortReq = function () {
    xhr.abort();
    cleanUp();
  };

  var timeoutReq = function () {
    timedout = true;
    xhr.abort();
    cleanUp();
  };

  var ret = {abort: abortReq};

  var cleanUp = function () {
    clearTimeout(timer);
    ret.abort = function () {};
    if (xhr) {
      xhr.onprogress = undefined;
      if (xhr.upload) {
        xhr.upload.onprogress = undefined;
      }
      xhr.onreadystatechange = undefined;
      xhr = undefined;
    }
  };

  if (options.xhr) {
    xhr = new options.xhr();
  } else {
    xhr = new XMLHttpRequest();
  }

  try {
    xhr.open(options.method, options.url);
  } catch (exception) {
    return callback(new Error(exception.name || 'Url is invalid'));
  }

  xhr.withCredentials = ('withCredentials' in options) ?
    options.withCredentials : true;

  if (options.method === 'GET') {
    delete options.headers['Content-Type'];
  } else if (options.json) {
    options.headers.Accept = 'application/json';
    options.headers['Content-Type'] = options.headers['Content-Type'] ||
      'application/json';
    if (options.body &&
        options.processData &&
        typeof options.body !== "string") {
      options.body = JSON.stringify(options.body);
    }
  }

  if (options.binary) {
    xhr.responseType = 'arraybuffer';
  }

  if (!('body' in options)) {
    options.body = null;
  }

  for (var key in options.headers) {
    if (options.headers.hasOwnProperty(key)) {
      xhr.setRequestHeader(key, options.headers[key]);
    }
  }

  if (options.timeout > 0) {
    timer = setTimeout(timeoutReq, options.timeout);
    xhr.onprogress = function () {
      clearTimeout(timer);
      if(xhr.readyState !== 4) {
        timer = setTimeout(timeoutReq, options.timeout);
      }
    };
    if (typeof xhr.upload !== 'undefined') { // does not exist in ie9
      xhr.upload.onprogress = xhr.onprogress;
    }
  }

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return;
    }

    var response = {
      statusCode: xhr.status
    };

    if (xhr.status >= 200 && xhr.status < 300) {
      var data;
      if (options.binary) {
        data = createBlob([xhr.response || ''], {
          type: xhr.getResponseHeader('Content-Type')
        });
      } else {
        data = xhr.responseText;
      }
      callback(null, response, data);
    } else {
      var err = {};
      if (timedout) {
        err = new Error('ETIMEDOUT');
        err.code = 'ETIMEDOUT';
      } else if (typeof xhr.response === 'string') {
        try {
          err = JSON.parse(xhr.response);
        } catch(e) {}
      }
      err.status = xhr.status;
      callback(err);
    }
    cleanUp();
  };

  if (options.body && (options.body instanceof Blob)) {
    readAsArrayBuffer(options.body, function (arrayBuffer) {
      xhr.send(arrayBuffer);
    });
  } else {
    xhr.send(options.body);
  }

  return ret;
}

function testXhr() {
  try {
    new XMLHttpRequest();
    return true;
  } catch (err) {
    return false;
  }
}

var hasXhr = testXhr();

function ajax$1(options, callback) {
  if (hasXhr || options.xhr) {
    return xhRequest(options, callback);
  } else {
    return fetchRequest(options, callback);
  }
}

inherits(PouchError, Error);

function PouchError(opts) {
  Error.call(this, opts.reason);
  this.status = opts.status;
  this.name = opts.error;
  this.message = opts.reason;
  this.error = true;
}

PouchError.prototype.toString = function () {
  return JSON.stringify({
    status: this.status,
    name: this.name,
    message: this.message,
    reason: this.reason
  });
};

var UNAUTHORIZED = new PouchError({
  status: 401,
  error: 'unauthorized',
  reason: "Name or password is incorrect."
});

var MISSING_BULK_DOCS = new PouchError({
  status: 400,
  error: 'bad_request',
  reason: "Missing JSON list of 'docs'"
});

var MISSING_DOC = new PouchError({
  status: 404,
  error: 'not_found',
  reason: 'missing'
});

var REV_CONFLICT = new PouchError({
  status: 409,
  error: 'conflict',
  reason: 'Document update conflict'
});

var INVALID_ID = new PouchError({
  status: 400,
  error: 'bad_request',
  reason: '_id field must contain a string'
});

var MISSING_ID = new PouchError({
  status: 412,
  error: 'missing_id',
  reason: '_id is required for puts'
});

var RESERVED_ID = new PouchError({
  status: 400,
  error: 'bad_request',
  reason: 'Only reserved document ids may start with underscore.'
});

var NOT_OPEN = new PouchError({
  status: 412,
  error: 'precondition_failed',
  reason: 'Database not open'
});

var UNKNOWN_ERROR = new PouchError({
  status: 500,
  error: 'unknown_error',
  reason: 'Database encountered an unknown error'
});

var BAD_ARG = new PouchError({
  status: 500,
  error: 'badarg',
  reason: 'Some query argument is invalid'
});

var INVALID_REQUEST = new PouchError({
  status: 400,
  error: 'invalid_request',
  reason: 'Request was invalid'
});

var QUERY_PARSE_ERROR = new PouchError({
  status: 400,
  error: 'query_parse_error',
  reason: 'Some query parameter is invalid'
});

var DOC_VALIDATION = new PouchError({
  status: 500,
  error: 'doc_validation',
  reason: 'Bad special document member'
});

var BAD_REQUEST = new PouchError({
  status: 400,
  error: 'bad_request',
  reason: 'Something wrong with the request'
});

var NOT_AN_OBJECT = new PouchError({
  status: 400,
  error: 'bad_request',
  reason: 'Document must be a JSON object'
});

var DB_MISSING = new PouchError({
  status: 404,
  error: 'not_found',
  reason: 'Database not found'
});

var IDB_ERROR = new PouchError({
  status: 500,
  error: 'indexed_db_went_bad',
  reason: 'unknown'
});

var WSQ_ERROR = new PouchError({
  status: 500,
  error: 'web_sql_went_bad',
  reason: 'unknown'
});

var LDB_ERROR = new PouchError({
  status: 500,
  error: 'levelDB_went_went_bad',
  reason: 'unknown'
});

var FORBIDDEN = new PouchError({
  status: 403,
  error: 'forbidden',
  reason: 'Forbidden by design doc validate_doc_update function'
});

var INVALID_REV = new PouchError({
  status: 400,
  error: 'bad_request',
  reason: 'Invalid rev format'
});

var FILE_EXISTS = new PouchError({
  status: 412,
  error: 'file_exists',
  reason: 'The database could not be created, the file already exists.'
});

var MISSING_STUB = new PouchError({
  status: 412,
  error: 'missing_stub'
});

var INVALID_URL = new PouchError({
  status: 413,
  error: 'invalid_url',
  reason: 'Provided URL is invalid'
});

function generateErrorFromResponse(err) {

  if (typeof err !== 'object') {
    var data = err;
    err = UNKNOWN_ERROR;
    err.data = data;
  }

  if ('error' in err && err.error === 'conflict') {
    err.name = 'conflict';
    err.status = 409;
  }

  if (!('name' in err)) {
    err.name = err.error || 'unknown';
  }

  if (!('status' in err)) {
    err.status = 500;
  }

  if (!('message' in err)) {
    err.message = err.message || err.reason;
  }

  return err;
}

function isBinaryObject(object) {
  return (typeof ArrayBuffer !== 'undefined' && object instanceof ArrayBuffer) ||
    (typeof Blob !== 'undefined' && object instanceof Blob);
}

function cloneArrayBuffer(buff) {
  if (typeof buff.slice === 'function') {
    return buff.slice(0);
  }
  // IE10-11 slice() polyfill
  var target = new ArrayBuffer(buff.byteLength);
  var targetArray = new Uint8Array(target);
  var sourceArray = new Uint8Array(buff);
  targetArray.set(sourceArray);
  return target;
}

function cloneBinaryObject(object) {
  if (object instanceof ArrayBuffer) {
    return cloneArrayBuffer(object);
  }
  var size = object.size;
  var type = object.type;
  // Blob
  if (typeof object.slice === 'function') {
    return object.slice(0, size, type);
  }
  // PhantomJS slice() replacement
  return object.webkitSlice(0, size, type);
}

// most of this is borrowed from lodash.isPlainObject:
// https://github.com/fis-components/lodash.isplainobject/
// blob/29c358140a74f252aeb08c9eb28bef86f2217d4a/index.js

var funcToString = Function.prototype.toString;
var objectCtorString = funcToString.call(Object);

function isPlainObject(value) {
  var proto = Object.getPrototypeOf(value);
  /* istanbul ignore if */
  if (proto === null) { // not sure when this happens, but I guess it can
    return true;
  }
  var Ctor = proto.constructor;
  return (typeof Ctor == 'function' &&
    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
}

function clone(object) {
  var newObject;
  var i;
  var len;

  if (!object || typeof object !== 'object') {
    return object;
  }

  if (Array.isArray(object)) {
    newObject = [];
    for (i = 0, len = object.length; i < len; i++) {
      newObject[i] = clone(object[i]);
    }
    return newObject;
  }

  // special case: to avoid inconsistencies between IndexedDB
  // and other backends, we automatically stringify Dates
  if (object instanceof Date) {
    return object.toISOString();
  }

  if (isBinaryObject(object)) {
    return cloneBinaryObject(object);
  }

  if (!isPlainObject(object)) {
    return object; // don't clone objects like Workers
  }

  newObject = {};
  for (i in object) {
    /* istanbul ignore else */
    if (Object.prototype.hasOwnProperty.call(object, i)) {
      var value = clone(object[i]);
      if (typeof value !== 'undefined') {
        newObject[i] = value;
      }
    }
  }
  return newObject;
}

var log = debug('pouchdb:api');

// like underscore/lodash _.pick()
function pick(obj, arr) {
  var res = {};
  for (var i = 0, len = arr.length; i < len; i++) {
    var prop = arr[i];
    if (prop in obj) {
      res[prop] = obj[prop];
    }
  }
  return res;
}

function isChromeApp() {
  return (typeof chrome !== "undefined" &&
    typeof chrome.storage !== "undefined" &&
    typeof chrome.storage.local !== "undefined");
}

var hasLocal;

if (isChromeApp()) {
  hasLocal = false;
} else {
  try {
    localStorage.setItem('_pouch_check_localstorage', 1);
    hasLocal = !!localStorage.getItem('_pouch_check_localstorage');
  } catch (e) {
    hasLocal = false;
  }
}

function hasLocalStorage() {
  return hasLocal;
}

inherits(Changes, events.EventEmitter);

/* istanbul ignore next */
function attachBrowserEvents(self) {
  if (isChromeApp()) {
    chrome.storage.onChanged.addListener(function (e) {
      // make sure it's event addressed to us
      if (e.db_name != null) {
        //object only has oldValue, newValue members
        self.emit(e.dbName.newValue);
      }
    });
  } else if (hasLocalStorage()) {
    if (typeof addEventListener !== 'undefined') {
      addEventListener("storage", function (e) {
        self.emit(e.key);
      });
    } else { // old IE
      window.attachEvent("storage", function (e) {
        self.emit(e.key);
      });
    }
  }
}

function Changes() {
  events.EventEmitter.call(this);
  this._listeners = {};

  attachBrowserEvents(this);
}
Changes.prototype.addListener = function (dbName, id, db, opts) {
  /* istanbul ignore if */
  if (this._listeners[id]) {
    return;
  }
  var self = this;
  var inprogress = false;
  function eventFunction() {
    /* istanbul ignore if */
    if (!self._listeners[id]) {
      return;
    }
    if (inprogress) {
      inprogress = 'waiting';
      return;
    }
    inprogress = true;
    var changesOpts = pick(opts, [
      'style', 'include_docs', 'attachments', 'conflicts', 'filter',
      'doc_ids', 'view', 'since', 'query_params', 'binary'
    ]);

    /* istanbul ignore next */
    function onError() {
      inprogress = false;
    }

    db.changes(changesOpts).on('change', function (c) {
      if (c.seq > opts.since && !opts.cancelled) {
        opts.since = c.seq;
        opts.onChange(c);
      }
    }).on('complete', function () {
      if (inprogress === 'waiting') {
        setTimeout(function (){
          eventFunction();
        },0);
      }
      inprogress = false;
    }).on('error', onError);
  }
  this._listeners[id] = eventFunction;
  this.on(dbName, eventFunction);
};

Changes.prototype.removeListener = function (dbName, id) {
  /* istanbul ignore if */
  if (!(id in this._listeners)) {
    return;
  }
  events.EventEmitter.prototype.removeListener.call(this, dbName,
    this._listeners[id]);
  delete this._listeners[id];
};


/* istanbul ignore next */
Changes.prototype.notifyLocalWindows = function (dbName) {
  //do a useless change on a storage thing
  //in order to get other windows's listeners to activate
  if (isChromeApp()) {
    chrome.storage.local.set({dbName: dbName});
  } else if (hasLocalStorage()) {
    localStorage[dbName] = (localStorage[dbName] === "a") ? "b" : "a";
  }
};

Changes.prototype.notify = function (dbName) {
  this.emit(dbName);
  this.notifyLocalWindows(dbName);
};

// BEGIN Math.uuid.js

/*!
Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com

Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/

/*
 * Generate a random uuid.
 *
 * USAGE: Math.uuid(length, radix)
 *   length - the desired number of characters
 *   radix  - the number of allowable values for each character.
 *
 * EXAMPLES:
 *   // No arguments  - returns RFC4122, version 4 ID
 *   >>> Math.uuid()
 *   "92329D39-6F5C-4520-ABFC-AAB64544E172"
 *
 *   // One argument - returns ID of the specified length
 *   >>> Math.uuid(15)     // 15 character ID (default base=62)
 *   "VcydxgltxrVZSTV"
 *
 *   // Two arguments - returns ID of the specified length, and radix. 
 *   // (Radix must be <= 62)
 *   >>> Math.uuid(8, 2)  // 8 character ID (base=2)
 *   "01001010"
 *   >>> Math.uuid(8, 10) // 8 character ID (base=10)
 *   "47473046"
 *   >>> Math.uuid(8, 16) // 8 character ID (base=16)
 *   "098F4D35"
 */
var chars = (
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
  'abcdefghijklmnopqrstuvwxyz'
).split('');

// the blob already has a type; do nothing
var res$2 = function () {};

function defaultBody() {
  return '';
}

function ajaxCore(options, callback) {

  options = clone(options);

  var defaultOptions = {
    method : "GET",
    headers: {},
    json: true,
    processData: true,
    timeout: 10000,
    cache: false
  };

  options = jsExtend.extend(defaultOptions, options);

  function onSuccess(obj, resp, cb) {
    if (!options.binary && options.json && typeof obj === 'string') {
      /* istanbul ignore next */
      try {
        obj = JSON.parse(obj);
      } catch (e) {
        // Probably a malformed JSON from server
        return cb(e);
      }
    }
    if (Array.isArray(obj)) {
      obj = obj.map(function (v) {
        if (v.error || v.missing) {
          return generateErrorFromResponse(v);
        } else {
          return v;
        }
      });
    }
    if (options.binary) {
      res$2(obj, resp);
    }
    cb(null, obj, resp);
  }

  if (options.json) {
    if (!options.binary) {
      options.headers.Accept = 'application/json';
    }
    options.headers['Content-Type'] = options.headers['Content-Type'] ||
      'application/json';
  }

  if (options.binary) {
    options.encoding = null;
    options.json = false;
  }

  if (!options.processData) {
    options.json = false;
  }

  return ajax$1(options, function (err, response, body) {

    if (err) {
      return callback(generateErrorFromResponse(err));
    }

    var error;
    var content_type = response.headers && response.headers['content-type'];
    var data = body || defaultBody();

    // CouchDB doesn't always return the right content-type for JSON data, so
    // we check for ^{ and }$ (ignoring leading/trailing whitespace)
    if (!options.binary && (options.json || !options.processData) &&
        typeof data !== 'object' &&
        (/json/.test(content_type) ||
         (/^[\s]*\{/.test(data) && /\}[\s]*$/.test(data)))) {
      try {
        data = JSON.parse(data.toString());
      } catch (e) {}
    }

    if (response.statusCode >= 200 && response.statusCode < 300) {
      onSuccess(data, response, callback);
    } else {
      error = generateErrorFromResponse(data);
      error.status = response.statusCode;
      callback(error);
    }
  });
}

function ajax(opts, callback) {

  // cache-buster, specifically designed to work around IE's aggressive caching
  // see http://www.dashbay.com/2011/05/internet-explorer-caches-ajax/
  // Also Safari caches POSTs, so we need to cache-bust those too.
  var ua = (navigator && navigator.userAgent) ?
    navigator.userAgent.toLowerCase() : '';

  var isSafari = ua.indexOf('safari') !== -1 && ua.indexOf('chrome') === -1;
  var isIE = ua.indexOf('msie') !== -1;
  var isEdge = ua.indexOf('edge') !== -1;

  // it appears the new version of safari also caches GETs,
  // see https://github.com/pouchdb/pouchdb/issues/5010
  var shouldCacheBust = (isSafari ||
    ((isIE || isEdge) && opts.method === 'GET'));

  var cache = 'cache' in opts ? opts.cache : true;

  var isBlobUrl = /^blob:/.test(opts.url); // don't append nonces for blob URLs

  if (!isBlobUrl && (shouldCacheBust || !cache)) {
    var hasArgs = opts.url.indexOf('?') !== -1;
    opts.url += (hasArgs ? '&' : '?') + '_nonce=' + Date.now();
  }

  return ajaxCore(opts, callback);
}

module.exports = ajax;
},{"2":2,"3":3,"5":5,"7":7,"8":8,"9":9}],12:[function(require,module,exports){
"use strict";

// Extends method
// (taken from http://code.jquery.com/jquery-1.9.0.js)
// Populate the class2type map
var class2type = {};

var types = [
  "Boolean", "Number", "String", "Function", "Array",
  "Date", "RegExp", "Object", "Error"
];
for (var i = 0; i < types.length; i++) {
  var typename = types[i];
  class2type["[object " + typename + "]"] = typename.toLowerCase();
}

var core_toString = class2type.toString;
var core_hasOwn = class2type.hasOwnProperty;

function type(obj) {
  if (obj === null) {
    return String(obj);
  }
  return typeof obj === "object" || typeof obj === "function" ?
    class2type[core_toString.call(obj)] || "object" :
    typeof obj;
}

function isWindow(obj) {
  return obj !== null && obj === obj.window;
}

function isPlainObject(obj) {
  // Must be an Object.
  // Because of IE, we also have to check the presence of
  // the constructor property.
  // Make sure that DOM nodes and window objects don't pass through, as well
  if (!obj || type(obj) !== "object" || obj.nodeType || isWindow(obj)) {
    return false;
  }

  try {
    // Not own constructor property must be Object
    if (obj.constructor &&
      !core_hasOwn.call(obj, "constructor") &&
      !core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
      return false;
    }
  } catch ( e ) {
    // IE8,9 Will throw exceptions on certain host objects #9897
    return false;
  }

  // Own properties are enumerated firstly, so to speed up,
  // if last one is own, then all properties are own.
  var key;
  for (key in obj) {}

  return key === undefined || core_hasOwn.call(obj, key);
}


function isFunction(obj) {
  return type(obj) === "function";
}

var isArray = Array.isArray || function (obj) {
  return type(obj) === "array";
};

function extend() {
  // originally extend() was recursive, but this ended up giving us
  // "call stack exceeded", so it's been unrolled to use a literal stack
  // (see https://github.com/pouchdb/pouchdb/issues/2543)
  var stack = [];
  var i = -1;
  var len = arguments.length;
  var args = new Array(len);
  while (++i < len) {
    args[i] = arguments[i];
  }
  var container = {};
  stack.push({args: args, result: {container: container, key: 'key'}});
  var next;
  while ((next = stack.pop())) {
    extendInner(stack, next.args, next.result);
  }
  return container.key;
}

function extendInner(stack, args, result) {
  var options, name, src, copy, copyIsArray, clone,
    target = args[0] || {},
    i = 1,
    length = args.length,
    deep = false,
    numericStringRegex = /\d+/,
    optionsIsArray;

  // Handle a deep copy situation
  if (typeof target === "boolean") {
    deep = target;
    target = args[1] || {};
    // skip the boolean and the target
    i = 2;
  }

  // Handle case when target is a string or something (possible in deep copy)
  if (typeof target !== "object" && !isFunction(target)) {
    target = {};
  }

  // extend jQuery itself if only one argument is passed
  if (length === i) {
    /* jshint validthis: true */
    target = this;
    --i;
  }

  for (; i < length; i++) {
    // Only deal with non-null/undefined values
    if ((options = args[i]) != null) {
      optionsIsArray = isArray(options);
      // Extend the base object
      for (name in options) {
        //if (options.hasOwnProperty(name)) {
        if (!(name in Object.prototype)) {
          if (optionsIsArray && !numericStringRegex.test(name)) {
            continue;
          }

          src = target[name];
          copy = options[name];

          // Prevent never-ending loop
          if (target === copy) {
            continue;
          }

          // Recurse if we're merging plain objects or arrays
          if (deep && copy && (isPlainObject(copy) ||
              (copyIsArray = isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && isArray(src) ? src : [];

            } else {
              clone = src && isPlainObject(src) ? src : {};
            }

            // Never move original objects, clone them
            stack.push({
              args: [deep, clone, copy],
              result: {
                container: target,
                key: name
              }
            });

          // Don't bring in undefined values
          } else if (copy !== undefined) {
            if (!(isArray(options) && isFunction(copy))) {
              target[name] = copy;
            }
          }
        }
      }
    }
  }

  // "Return" the modified object by setting the key
  // on the given container
  result.container[result.key] = target;
}


module.exports = extend;



},{}],13:[function(require,module,exports){
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var lie = _interopDefault(require(9));

/* istanbul ignore next */
var PouchPromise = typeof Promise === 'function' ? Promise : lie;

module.exports = PouchPromise;
},{"9":9}],14:[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var lie = _interopDefault(require(9));
var getArguments = _interopDefault(require(2));
var debug = _interopDefault(require(3));
var events = require(5);
var inherits = _interopDefault(require(7));

/* istanbul ignore next */
var PouchPromise = typeof Promise === 'function' ? Promise : lie;

function isBinaryObject(object) {
  return (typeof ArrayBuffer !== 'undefined' && object instanceof ArrayBuffer) ||
    (typeof Blob !== 'undefined' && object instanceof Blob);
}

function cloneArrayBuffer(buff) {
  if (typeof buff.slice === 'function') {
    return buff.slice(0);
  }
  // IE10-11 slice() polyfill
  var target = new ArrayBuffer(buff.byteLength);
  var targetArray = new Uint8Array(target);
  var sourceArray = new Uint8Array(buff);
  targetArray.set(sourceArray);
  return target;
}

function cloneBinaryObject(object) {
  if (object instanceof ArrayBuffer) {
    return cloneArrayBuffer(object);
  }
  var size = object.size;
  var type = object.type;
  // Blob
  if (typeof object.slice === 'function') {
    return object.slice(0, size, type);
  }
  // PhantomJS slice() replacement
  return object.webkitSlice(0, size, type);
}

// most of this is borrowed from lodash.isPlainObject:
// https://github.com/fis-components/lodash.isplainobject/
// blob/29c358140a74f252aeb08c9eb28bef86f2217d4a/index.js

var funcToString = Function.prototype.toString;
var objectCtorString = funcToString.call(Object);

function isPlainObject(value) {
  var proto = Object.getPrototypeOf(value);
  /* istanbul ignore if */
  if (proto === null) { // not sure when this happens, but I guess it can
    return true;
  }
  var Ctor = proto.constructor;
  return (typeof Ctor == 'function' &&
    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
}

function clone(object) {
  var newObject;
  var i;
  var len;

  if (!object || typeof object !== 'object') {
    return object;
  }

  if (Array.isArray(object)) {
    newObject = [];
    for (i = 0, len = object.length; i < len; i++) {
      newObject[i] = clone(object[i]);
    }
    return newObject;
  }

  // special case: to avoid inconsistencies between IndexedDB
  // and other backends, we automatically stringify Dates
  if (object instanceof Date) {
    return object.toISOString();
  }

  if (isBinaryObject(object)) {
    return cloneBinaryObject(object);
  }

  if (!isPlainObject(object)) {
    return object; // don't clone objects like Workers
  }

  newObject = {};
  for (i in object) {
    /* istanbul ignore else */
    if (Object.prototype.hasOwnProperty.call(object, i)) {
      var value = clone(object[i]);
      if (typeof value !== 'undefined') {
        newObject[i] = value;
      }
    }
  }
  return newObject;
}

function once(fun) {
  var called = false;
  return getArguments(function (args) {
    /* istanbul ignore if */
    if (called) {
      // this is a smoke test and should never actually happen
      throw new Error('once called more than once');
    } else {
      called = true;
      fun.apply(this, args);
    }
  });
}

function toPromise(func) {
  //create the function we will be returning
  return getArguments(function (args) {
    // Clone arguments
    args = clone(args);
    var self = this;
    var tempCB =
      (typeof args[args.length - 1] === 'function') ? args.pop() : false;
    // if the last argument is a function, assume its a callback
    var usedCB;
    if (tempCB) {
      // if it was a callback, create a new callback which calls it,
      // but do so async so we don't trap any errors
      usedCB = function (err, resp) {
        process.nextTick(function () {
          tempCB(err, resp);
        });
      };
    }
    var promise = new PouchPromise(function (fulfill, reject) {
      var resp;
      try {
        var callback = once(function (err, mesg) {
          if (err) {
            reject(err);
          } else {
            fulfill(mesg);
          }
        });
        // create a callback for this invocation
        // apply the function in the orig context
        args.push(callback);
        resp = func.apply(self, args);
        if (resp && typeof resp.then === 'function') {
          fulfill(resp);
        }
      } catch (e) {
        reject(e);
      }
    });
    // if there is a callback, call it back
    if (usedCB) {
      promise.then(function (result) {
        usedCB(null, result);
      }, usedCB);
    }
    return promise;
  });
}

var log = debug('pouchdb:api');

function adapterFun(name, callback) {
  function logApiCall(self, name, args) {
    /* istanbul ignore if */
    if (log.enabled) {
      var logArgs = [self.name, name];
      for (var i = 0; i < args.length - 1; i++) {
        logArgs.push(args[i]);
      }
      log.apply(null, logArgs);

      // override the callback itself to log the response
      var origCallback = args[args.length - 1];
      args[args.length - 1] = function (err, res) {
        var responseArgs = [self.name, name];
        responseArgs = responseArgs.concat(
          err ? ['error', err] : ['success', res]
        );
        log.apply(null, responseArgs);
        origCallback(err, res);
      };
    }
  }

  return toPromise(getArguments(function (args) {
    if (this._closed) {
      return PouchPromise.reject(new Error('database is closed'));
    }
    if (this._destroyed) {
      return PouchPromise.reject(new Error('database is destroyed'));
    }
    var self = this;
    logApiCall(self, name, args);
    if (!this.taskqueue.isReady) {
      return new PouchPromise(function (fulfill, reject) {
        self.taskqueue.addTask(function (failed) {
          if (failed) {
            reject(failed);
          } else {
            fulfill(self[name].apply(self, args));
          }
        });
      });
    }
    return callback.apply(this, args);
  }));
}

// like underscore/lodash _.pick()
function pick(obj, arr) {
  var res = {};
  for (var i = 0, len = arr.length; i < len; i++) {
    var prop = arr[i];
    if (prop in obj) {
      res[prop] = obj[prop];
    }
  }
  return res;
}

// Most browsers throttle concurrent requests at 6, so it's silly
// to shim _bulk_get by trying to launch potentially hundreds of requests
// and then letting the majority time out. We can handle this ourselves.
var MAX_NUM_CONCURRENT_REQUESTS = 6;

function identityFunction(x) {
  return x;
}

function formatResultForOpenRevsGet(result) {
  return [{
    ok: result
  }];
}

// shim for P/CouchDB adapters that don't directly implement _bulk_get
function bulkGet(db, opts, callback) {
  var requests = opts.docs;

  // consolidate into one request per doc if possible
  var requestsById = {};
  requests.forEach(function (request) {
    if (request.id in requestsById) {
      requestsById[request.id].push(request);
    } else {
      requestsById[request.id] = [request];
    }
  });

  var numDocs = Object.keys(requestsById).length;
  var numDone = 0;
  var perDocResults = new Array(numDocs);

  function collapseResultsAndFinish() {
    var results = [];
    perDocResults.forEach(function (res) {
      res.docs.forEach(function (info) {
        results.push({
          id: res.id,
          docs: [info]
        });
      });
    });
    callback(null, {results: results});
  }

  function checkDone() {
    if (++numDone === numDocs) {
      collapseResultsAndFinish();
    }
  }

  function gotResult(docIndex, id, docs) {
    perDocResults[docIndex] = {id: id, docs: docs};
    checkDone();
  }

  var allRequests = Object.keys(requestsById);

  var i = 0;

  function nextBatch() {

    if (i >= allRequests.length) {
      return;
    }

    var upTo = Math.min(i + MAX_NUM_CONCURRENT_REQUESTS, allRequests.length);
    var batch = allRequests.slice(i, upTo);
    processBatch(batch, i);
    i += batch.length;
  }

  function processBatch(batch, offset) {
    batch.forEach(function (docId, j) {
      var docIdx = offset + j;
      var docRequests = requestsById[docId];

      // just use the first request as the "template"
      // TODO: The _bulk_get API allows for more subtle use cases than this,
      // but for now it is unlikely that there will be a mix of different
      // "atts_since" or "attachments" in the same request, since it's just
      // replicate.js that is using this for the moment.
      // Also, atts_since is aspirational, since we don't support it yet.
      var docOpts = pick(docRequests[0], ['atts_since', 'attachments']);
      docOpts.open_revs = docRequests.map(function (request) {
        // rev is optional, open_revs disallowed
        return request.rev;
      });

      // remove falsey / undefined revisions
      docOpts.open_revs = docOpts.open_revs.filter(identityFunction);

      var formatResult = identityFunction;

      if (docOpts.open_revs.length === 0) {
        delete docOpts.open_revs;

        // when fetching only the "winning" leaf,
        // transform the result so it looks like an open_revs
        // request
        formatResult = formatResultForOpenRevsGet;
      }

      // globally-supplied options
      ['revs', 'attachments', 'binary', 'ajax'].forEach(function (param) {
        if (param in opts) {
          docOpts[param] = opts[param];
        }
      });
      db.get(docId, docOpts, function (err, res) {
        var result;
        /* istanbul ignore if */
        if (err) {
          result = [{error: err}];
        } else {
          result = formatResult(res);
        }
        gotResult(docIdx, docId, result);
        nextBatch();
      });
    });
  }

  nextBatch();

}

function isChromeApp() {
  return (typeof chrome !== "undefined" &&
    typeof chrome.storage !== "undefined" &&
    typeof chrome.storage.local !== "undefined");
}

var hasLocal;

if (isChromeApp()) {
  hasLocal = false;
} else {
  try {
    localStorage.setItem('_pouch_check_localstorage', 1);
    hasLocal = !!localStorage.getItem('_pouch_check_localstorage');
  } catch (e) {
    hasLocal = false;
  }
}

function hasLocalStorage() {
  return hasLocal;
}

inherits(Changes, events.EventEmitter);

/* istanbul ignore next */
function attachBrowserEvents(self) {
  if (isChromeApp()) {
    chrome.storage.onChanged.addListener(function (e) {
      // make sure it's event addressed to us
      if (e.db_name != null) {
        //object only has oldValue, newValue members
        self.emit(e.dbName.newValue);
      }
    });
  } else if (hasLocalStorage()) {
    if (typeof addEventListener !== 'undefined') {
      addEventListener("storage", function (e) {
        self.emit(e.key);
      });
    } else { // old IE
      window.attachEvent("storage", function (e) {
        self.emit(e.key);
      });
    }
  }
}

function Changes() {
  events.EventEmitter.call(this);
  this._listeners = {};

  attachBrowserEvents(this);
}
Changes.prototype.addListener = function (dbName, id, db, opts) {
  /* istanbul ignore if */
  if (this._listeners[id]) {
    return;
  }
  var self = this;
  var inprogress = false;
  function eventFunction() {
    /* istanbul ignore if */
    if (!self._listeners[id]) {
      return;
    }
    if (inprogress) {
      inprogress = 'waiting';
      return;
    }
    inprogress = true;
    var changesOpts = pick(opts, [
      'style', 'include_docs', 'attachments', 'conflicts', 'filter',
      'doc_ids', 'view', 'since', 'query_params', 'binary'
    ]);

    /* istanbul ignore next */
    function onError() {
      inprogress = false;
    }

    db.changes(changesOpts).on('change', function (c) {
      if (c.seq > opts.since && !opts.cancelled) {
        opts.since = c.seq;
        opts.onChange(c);
      }
    }).on('complete', function () {
      if (inprogress === 'waiting') {
        setTimeout(function (){
          eventFunction();
        },0);
      }
      inprogress = false;
    }).on('error', onError);
  }
  this._listeners[id] = eventFunction;
  this.on(dbName, eventFunction);
};

Changes.prototype.removeListener = function (dbName, id) {
  /* istanbul ignore if */
  if (!(id in this._listeners)) {
    return;
  }
  events.EventEmitter.prototype.removeListener.call(this, dbName,
    this._listeners[id]);
  delete this._listeners[id];
};


/* istanbul ignore next */
Changes.prototype.notifyLocalWindows = function (dbName) {
  //do a useless change on a storage thing
  //in order to get other windows's listeners to activate
  if (isChromeApp()) {
    chrome.storage.local.set({dbName: dbName});
  } else if (hasLocalStorage()) {
    localStorage[dbName] = (localStorage[dbName] === "a") ? "b" : "a";
  }
};

Changes.prototype.notify = function (dbName) {
  this.emit(dbName);
  this.notifyLocalWindows(dbName);
};

function guardedConsole(method) {
  /* istanbul ignore else */
  if (console !== 'undefined' && method in console) {
    var args = Array.prototype.slice.call(arguments, 1);
    console[method].apply(console, args);
  }
}

function randomNumber(min, max) {
  var maxTimeout = 600000; // Hard-coded default of 10 minutes
  min = parseInt(min, 10) || 0;
  max = parseInt(max, 10);
  if (max !== max || max <= min) {
    max = (min || 1) << 1; //doubling
  } else {
    max = max + 1;
  }
  // In order to not exceed maxTimeout, pick a random value between half of maxTimeout and maxTimeout
  if(max > maxTimeout) {
    min = maxTimeout >> 1; // divide by two
    max = maxTimeout;
  }
  var ratio = Math.random();
  var range = max - min;

  return ~~(range * ratio + min); // ~~ coerces to an int, but fast.
}

function defaultBackOff(min) {
  var max = 0;
  if (!min) {
    max = 2000;
  }
  return randomNumber(min, max);
}

// designed to give info to browser users, who are disturbed
// when they see http errors in the console
function explainError(status, str) {
  guardedConsole('info', 'The above ' + status + ' is totally normal. ' + str);
}

function extendInner(obj, otherObj) {
  for (var key in otherObj) {
    if (otherObj.hasOwnProperty(key)) {
      var value = clone(otherObj[key]);
      if (typeof value !== 'undefined') {
        obj[key] = value;
      }
    }
  }
}

function extend(obj, obj2, obj3) {
  extendInner(obj, obj2);
  if (obj3) {
    extendInner(obj, obj3);
  }
  return obj;
}

inherits(PouchError, Error);

function PouchError(opts) {
  Error.call(this, opts.reason);
  this.status = opts.status;
  this.name = opts.error;
  this.message = opts.reason;
  this.error = true;
}

PouchError.prototype.toString = function () {
  return JSON.stringify({
    status: this.status,
    name: this.name,
    message: this.message,
    reason: this.reason
  });
};

var UNAUTHORIZED = new PouchError({
  status: 401,
  error: 'unauthorized',
  reason: "Name or password is incorrect."
});

var MISSING_BULK_DOCS = new PouchError({
  status: 400,
  error: 'bad_request',
  reason: "Missing JSON list of 'docs'"
});

var MISSING_DOC = new PouchError({
  status: 404,
  error: 'not_found',
  reason: 'missing'
});

var REV_CONFLICT = new PouchError({
  status: 409,
  error: 'conflict',
  reason: 'Document update conflict'
});

var INVALID_ID = new PouchError({
  status: 400,
  error: 'bad_request',
  reason: '_id field must contain a string'
});

var MISSING_ID = new PouchError({
  status: 412,
  error: 'missing_id',
  reason: '_id is required for puts'
});

var RESERVED_ID = new PouchError({
  status: 400,
  error: 'bad_request',
  reason: 'Only reserved document ids may start with underscore.'
});

var NOT_OPEN = new PouchError({
  status: 412,
  error: 'precondition_failed',
  reason: 'Database not open'
});

var UNKNOWN_ERROR = new PouchError({
  status: 500,
  error: 'unknown_error',
  reason: 'Database encountered an unknown error'
});

var BAD_ARG = new PouchError({
  status: 500,
  error: 'badarg',
  reason: 'Some query argument is invalid'
});

var INVALID_REQUEST = new PouchError({
  status: 400,
  error: 'invalid_request',
  reason: 'Request was invalid'
});

var QUERY_PARSE_ERROR = new PouchError({
  status: 400,
  error: 'query_parse_error',
  reason: 'Some query parameter is invalid'
});

var DOC_VALIDATION = new PouchError({
  status: 500,
  error: 'doc_validation',
  reason: 'Bad special document member'
});

var BAD_REQUEST = new PouchError({
  status: 400,
  error: 'bad_request',
  reason: 'Something wrong with the request'
});

var NOT_AN_OBJECT = new PouchError({
  status: 400,
  error: 'bad_request',
  reason: 'Document must be a JSON object'
});

var DB_MISSING = new PouchError({
  status: 404,
  error: 'not_found',
  reason: 'Database not found'
});

var IDB_ERROR = new PouchError({
  status: 500,
  error: 'indexed_db_went_bad',
  reason: 'unknown'
});

var WSQ_ERROR = new PouchError({
  status: 500,
  error: 'web_sql_went_bad',
  reason: 'unknown'
});

var LDB_ERROR = new PouchError({
  status: 500,
  error: 'levelDB_went_went_bad',
  reason: 'unknown'
});

var FORBIDDEN = new PouchError({
  status: 403,
  error: 'forbidden',
  reason: 'Forbidden by design doc validate_doc_update function'
});

var INVALID_REV = new PouchError({
  status: 400,
  error: 'bad_request',
  reason: 'Invalid rev format'
});

var FILE_EXISTS = new PouchError({
  status: 412,
  error: 'file_exists',
  reason: 'The database could not be created, the file already exists.'
});

var MISSING_STUB = new PouchError({
  status: 412,
  error: 'missing_stub'
});

var INVALID_URL = new PouchError({
  status: 413,
  error: 'invalid_url',
  reason: 'Provided URL is invalid'
});

function createError(error, reason) {
  function CustomPouchError(reason) {
    // inherit error properties from our parent error manually
    // so as to allow proper JSON parsing.
    /* jshint ignore:start */
    for (var p in error) {
      if (typeof error[p] !== 'function') {
        this[p] = error[p];
      }
    }
    /* jshint ignore:end */
    if (reason !== undefined) {
      this.reason = reason;
    }
  }
  CustomPouchError.prototype = PouchError.prototype;
  return new CustomPouchError(reason);
}

function tryFilter(filter, doc, req) {
  try {
    return !filter(doc, req);
  } catch (err) {
    var msg = 'Filter function threw: ' + err.toString();
    return createError(BAD_REQUEST, msg);
  }
}

function filterChange(opts) {
  var req = {};
  var hasFilter = opts.filter && typeof opts.filter === 'function';
  req.query = opts.query_params;

  return function filter(change) {
    if (!change.doc) {
      // CSG sends events on the changes feed that don't have documents,
      // this hack makes a whole lot of existing code robust.
      change.doc = {};
    }

    var filterReturn = hasFilter && tryFilter(opts.filter, change.doc, req);

    if (typeof filterReturn === 'object') {
      return filterReturn;
    }

    if (filterReturn) {
      return false;
    }

    if (!opts.include_docs) {
      delete change.doc;
    } else if (!opts.attachments) {
      for (var att in change.doc._attachments) {
        /* istanbul ignore else */
        if (change.doc._attachments.hasOwnProperty(att)) {
          change.doc._attachments[att].stub = true;
        }
      }
    }
    return true;
  };
}

function flatten(arrs) {
  var res = [];
  for (var i = 0, len = arrs.length; i < len; i++) {
    res = res.concat(arrs[i]);
  }
  return res;
}

// shim for Function.prototype.name,
// for browsers that don't support it like IE

/* istanbul ignore next */
function f() {}

var hasName = f.name;
var res;

// We dont run coverage in IE
/* istanbul ignore else */
if (hasName) {
  res = function (fun) {
    return fun.name;
  };
} else {
  res = function (fun) {
    return fun.toString().match(/^\s*function\s*(\S*)\s*\(/)[1];
  };
}

var functionName = res;

// Determine id an ID is valid
//   - invalid IDs begin with an underescore that does not begin '_design' or
//     '_local'
//   - any other string value is a valid id
// Returns the specific error object for each case
function invalidIdError(id) {
  var err;
  if (!id) {
    err = createError(MISSING_ID);
  } else if (typeof id !== 'string') {
    err = createError(INVALID_ID);
  } else if (/^_/.test(id) && !(/^_(design|local)/).test(id)) {
    err = createError(RESERVED_ID);
  }
  if (err) {
    throw err;
  }
}

function isCordova() {
  return (typeof cordova !== "undefined" ||
  typeof PhoneGap !== "undefined" ||
  typeof phonegap !== "undefined");
}

function listenerCount(ee, type) {
  return 'listenerCount' in ee ? ee.listenerCount(type) :
                                 events.EventEmitter.listenerCount(ee, type);
}

function parseDesignDocFunctionName(s) {
  if (!s) {
    return null;
  }
  var parts = s.split('/');
  if (parts.length === 2) {
    return parts;
  }
  if (parts.length === 1) {
    return [s, s];
  }
  return null;
}

function normalizeDesignDocFunctionName(s) {
  var normalized = parseDesignDocFunctionName(s);
  return normalized ? normalized.join('/') : null;
}

// originally parseUri 1.2.2, now patched by us
// (c) Steven Levithan <stevenlevithan.com>
// MIT License
var keys = ["source", "protocol", "authority", "userInfo", "user", "password",
    "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
var qName ="queryKey";
var qParser = /(?:^|&)([^&=]*)=?([^&]*)/g;

// use the "loose" parser
/* jshint maxlen: false */
var parser = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

function parseUri(str) {
  var m = parser.exec(str);
  var uri = {};
  var i = 14;

  while (i--) {
    var key = keys[i];
    var value = m[i] || "";
    var encoded = ['user', 'password'].indexOf(key) !== -1;
    uri[key] = encoded ? decodeURIComponent(value) : value;
  }

  uri[qName] = {};
  uri[keys[12]].replace(qParser, function ($0, $1, $2) {
    if ($1) {
      uri[qName][$1] = $2;
    }
  });

  return uri;
}

// this is essentially the "update sugar" function from daleharvey/pouchdb#1388
// the diffFun tells us what delta to apply to the doc.  it either returns
// the doc, or false if it doesn't need to do an update after all
function upsert(db, docId, diffFun) {
  return new PouchPromise(function (fulfill, reject) {
    db.get(docId, function (err, doc) {
      if (err) {
        /* istanbul ignore next */
        if (err.status !== 404) {
          return reject(err);
        }
        doc = {};
      }

      // the user might change the _rev, so save it for posterity
      var docRev = doc._rev;
      var newDoc = diffFun(doc);

      if (!newDoc) {
        // if the diffFun returns falsy, we short-circuit as
        // an optimization
        return fulfill({updated: false, rev: docRev});
      }

      // users aren't allowed to modify these values,
      // so reset them here
      newDoc._id = docId;
      newDoc._rev = docRev;
      fulfill(tryAndPut(db, newDoc, diffFun));
    });
  });
}

function tryAndPut(db, doc, diffFun) {
  return db.put(doc).then(function (res) {
    return {
      updated: true,
      rev: res.rev
    };
  }, function (err) {
    /* istanbul ignore next */
    if (err.status !== 409) {
      throw err;
    }
    return upsert(db, doc._id, diffFun);
  });
}

// BEGIN Math.uuid.js

/*!
Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com

Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/

/*
 * Generate a random uuid.
 *
 * USAGE: Math.uuid(length, radix)
 *   length - the desired number of characters
 *   radix  - the number of allowable values for each character.
 *
 * EXAMPLES:
 *   // No arguments  - returns RFC4122, version 4 ID
 *   >>> Math.uuid()
 *   "92329D39-6F5C-4520-ABFC-AAB64544E172"
 *
 *   // One argument - returns ID of the specified length
 *   >>> Math.uuid(15)     // 15 character ID (default base=62)
 *   "VcydxgltxrVZSTV"
 *
 *   // Two arguments - returns ID of the specified length, and radix. 
 *   // (Radix must be <= 62)
 *   >>> Math.uuid(8, 2)  // 8 character ID (base=2)
 *   "01001010"
 *   >>> Math.uuid(8, 10) // 8 character ID (base=10)
 *   "47473046"
 *   >>> Math.uuid(8, 16) // 8 character ID (base=16)
 *   "098F4D35"
 */
var chars = (
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
  'abcdefghijklmnopqrstuvwxyz'
).split('');
function getValue(radix) {
  return 0 | Math.random() * radix;
}
function uuid(len, radix) {
  radix = radix || chars.length;
  var out = '';
  var i = -1;

  if (len) {
    // Compact form
    while (++i < len) {
      out += chars[getValue(radix)];
    }
    return out;
  }
    // rfc4122, version 4 form
    // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5
  while (++i < 36) {
    switch (i) {
      case 8:
      case 13:
      case 18:
      case 23:
        out += '-';
        break;
      case 19:
        out += chars[(getValue(16) & 0x3) | 0x8];
        break;
      default:
        out += chars[getValue(16)];
    }
  }

  return out;
}

exports.adapterFun = adapterFun;
exports.bulkGetShim = bulkGet;
exports.changesHandler = Changes;
exports.clone = clone;
exports.defaultBackOff = defaultBackOff;
exports.explainError = explainError;
exports.extend = extend;
exports.filterChange = filterChange;
exports.flatten = flatten;
exports.functionName = functionName;
exports.guardedConsole = guardedConsole;
exports.hasLocalStorage = hasLocalStorage;
exports.invalidIdError = invalidIdError;
exports.isChromeApp = isChromeApp;
exports.isCordova = isCordova;
exports.listenerCount = listenerCount;
exports.normalizeDdocFunctionName = normalizeDesignDocFunctionName;
exports.once = once;
exports.parseDdocFunctionName = parseDesignDocFunctionName;
exports.parseUri = parseUri;
exports.pick = pick;
exports.toPromise = toPromise;
exports.upsert = upsert;
exports.uuid = uuid;
}).call(this,require(15))
},{"15":15,"2":2,"3":3,"5":5,"7":7,"9":9}],15:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],16:[function(require,module,exports){
(function (name, context, definition) {
  if (typeof module !== 'undefined' && module.exports) module.exports = definition();
  else if (typeof define === 'function' && define.amd) define(definition);
  else context[name] = definition();
})('urljoin', this, function () {

  function normalize (str, options) {

    // make sure protocol is followed by two slashes
    str = str.replace(/:\//g, '://');

    // remove consecutive slashes
    str = str.replace(/([^:\s])\/+/g, '$1/');

    // remove trailing slash before parameters or hash
    str = str.replace(/\/(\?|&|#[^!])/g, '$1');

    // replace ? in parameters with &
    str = str.replace(/(\?.+)\?/g, '$1&');

    return str;
  }

  return function () {
    var input = arguments;
    var options = {};

    if (typeof arguments[0] === 'object') {
      // new syntax with array and options
      input = arguments[0];
      options = arguments[1] || {};
    }

    var joined = [].slice.call(input, 0).join('/');
    return normalize(joined, options);
  };

});

},{}],17:[function(require,module,exports){
'use strict';

var utils = require(1);

function wrapError(callback) {
  // provide more helpful error message
  return function (err, res) {
    if (err) {
      if (err.name === 'unknown_error') {
        err.message = (err.message || '') +
          ' Unknown error!  Did you remember to enable CORS?';
      }
    }
    return callback(err, res);
  };
}

function putUser(db, user, opts, callback) {
  var reservedWords = ['name', 'password', 'roles', 'type', 'salt', 'metadata'];
  if (opts.metadata) {
    for (var key in opts.metadata) {
      if (opts.hasOwnProperty(key)) {
        if (reservedWords.indexOf(key) !== -1 || key.startsWith('_')) {
          return callback(new AuthError('cannot use reserved word in metadata: "' + key + '"'));
        }
      }
    }
    user = utils.extend(true, user, opts.metadata);
  }

  var url = utils.getUsersUrl(db) + '/' + encodeURIComponent(user._id);
  var ajaxOpts = utils.extend(true, {
    method : 'PUT',
    url : url,
    body : user
  }, opts.ajax || {});
  utils.ajax(ajaxOpts, wrapError(callback));
}

exports.signup = utils.toPromise(function (username, password, opts, callback) {
  var db = this;
  if (typeof callback === 'undefined') {
    callback = typeof opts === 'undefined' ? (typeof password === 'undefined' ?
      username : password) : opts;
    opts = {};
  }
  if (['http', 'https'].indexOf(db.type()) === -1) {
    return callback(new AuthError('This plugin only works for the http/https adapter. ' +
      'So you should use new PouchDB("http://mysite.com:5984/mydb") instead.'));
  } else if (!username) {
    return callback(new AuthError('You must provide a username'));
  } else if (!password) {
    return callback(new AuthError('You must provide a password'));
  }

  var userId = 'org.couchdb.user:' + username;
  var user = {
    name     : username,
    password : password,
    roles    : opts.roles || [],
    type     : 'user',
    _id      : userId
  };

  putUser(db, user, opts, callback);
});

exports.signUp = exports.signup;

exports.login = utils.toPromise(function (username, password, opts, callback) {
  var db = this;
  if (typeof callback === 'undefined') {
    callback = opts;
    opts = {};
  }
  if (['http', 'https'].indexOf(db.type()) === -1) {
    return callback(new AuthError('this plugin only works for the http/https adapter'));
  }

  if (!username) {
    return callback(new AuthError('you must provide a username'));
  } else if (!password) {
    return callback(new AuthError('you must provide a password'));
  }

  var ajaxOpts = utils.extend(true, {
    method : 'POST',
    url : utils.getSessionUrl(db),
    headers : {'Content-Type': 'application/json'},
    body : JSON.stringify({name: username, password: password})
  }, opts.ajax || {});
  utils.ajax(ajaxOpts, wrapError(callback));
});

exports.logIn = exports.login;

exports.logout = utils.toPromise(function (opts, callback) {
  var db = this;
  if (typeof callback === 'undefined') {
    callback = opts;
    opts = {};
  }
  var ajaxOpts = utils.extend(true, {
    method : 'DELETE',
    url : utils.getSessionUrl(db)
  }, opts.ajax || {});
  utils.ajax(ajaxOpts, wrapError(callback));
});

exports.logOut = exports.logout;

exports.getSession = utils.toPromise(function (opts, callback) {
  var db = this;
  if (typeof callback === 'undefined') {
    callback = opts;
    opts = {};
  }
  var url = utils.getSessionUrl(db);

  var ajaxOpts = utils.extend(true, {
    method : 'GET',
    url : url
  }, opts.ajax || {});
  utils.ajax(ajaxOpts, wrapError(callback));
});

exports.getUser = utils.toPromise(function (username, opts, callback) {
  var db = this;
  if (typeof callback === 'undefined') {
    callback = typeof opts === 'undefined' ? username : opts;
    opts = {};
  }
  if (!username) {
    return callback(new AuthError('you must provide a username'));
  }

  var url = utils.getUsersUrl(db);
  var ajaxOpts = utils.extend(true, {
    method : 'GET',
    url : url + '/' + encodeURIComponent('org.couchdb.user:' + username)
  }, opts.ajax || {});
  utils.ajax(ajaxOpts, wrapError(callback));
});

exports.putUser = utils.toPromise(function (username, opts, callback) {
  var db = this;
  if (typeof callback === 'undefined') {
    callback = typeof opts === 'undefined' ? username : opts;
    opts = {};
  }
  if (['http', 'https'].indexOf(db.type()) === -1) {
    return callback(new AuthError('This plugin only works for the http/https adapter. ' +
      'So you should use new PouchDB("http://mysite.com:5984/mydb") instead.'));
  } else if (!username) {
    return callback(new AuthError('You must provide a username'));
  }

  return db.getUser(username, opts, function (error, user) {
    if (error) {
      return callback(error);
    }

    putUser(db, user, opts, callback);
  });
});

exports.changePassword = utils.toPromise(function (username, password, opts, callback) {
  var db = this;
  if (typeof callback === 'undefined') {
    callback = typeof opts === 'undefined' ? (typeof password === 'undefined' ?
      username : password) : opts;
    opts = {};
  }
  if (['http', 'https'].indexOf(db.type()) === -1) {
    return callback(new AuthError('This plugin only works for the http/https adapter. ' +
      'So you should use new PouchDB("http://mysite.com:5984/mydb") instead.'));
  } else if (!username) {
    return callback(new AuthError('You must provide a username'));
  } else if (!password) {
    return callback(new AuthError('You must provide a password'));
  }

  return db.getUser(username, opts, function (error, user) {
    if (error) {
      return callback(error);
    }

    user.password = password;

    var url = utils.getUsersUrl(db) + '/' + encodeURIComponent(user._id);
    var ajaxOpts = utils.extend(true, {
      method : 'PUT',
      url : url,
      body : user
    }, opts.ajax || {});
    utils.ajax(ajaxOpts, wrapError(callback));
  });
});

exports.changeUsername = utils.toPromise(function (oldUsername, newUsername, opts, callback) {
  var db = this;
  var USERNAME_PREFIX = 'org.couchdb.user:';
  var ajax = function (opts) {
    return new utils.Promise(function (resolve, reject) {
      utils.ajax(opts, wrapError(function (err, res) {
        if (err) {
          return reject(err);
        }
        resolve(res);
      }));
    });
  };
  var updateUser = function (user, opts) {
    var url = utils.getUsersUrl(db) + '/' + encodeURIComponent(user._id);
    var updateOpts = utils.extend(true, {
      method : 'PUT',
      url : url,
      body: user
    }, opts.ajax);
    return ajax(updateOpts);
  };
  if (typeof callback === 'undefined') {
    callback = opts;
    opts = {};
  }
  opts.ajax = opts.ajax || {};
  if (['http', 'https'].indexOf(db.type()) === -1) {
    return callback(new AuthError('This plugin only works for the http/https adapter. ' +
      'So you should use new PouchDB("http://mysite.com:5984/mydb") instead.'));
  }
  if (!newUsername) {
    return callback(new AuthError('You must provide a new username'));
  }
  if (!oldUsername) {
    return callback(new AuthError('You must provide a username to rename'));
  }

  return db.getUser(newUsername, opts)
  .then(function () {
    var error = new AuthError('user already exists');
    error.taken = true;
    throw error;
  }, function () {
    return db.getUser(oldUsername, opts);
  })
  .then(function (user) {
    var newUser = utils.clone(user);
    delete newUser._rev;
    newUser._id = USERNAME_PREFIX + newUsername;
    newUser.name = newUsername;
    newUser.roles = opts.roles || user.roles || {};
    return updateUser(newUser, opts).then(function () {
      user._deleted = true;
      return updateUser(user, opts);
    });
  }).then(function (res) {
    callback(null, res);
  }).catch(callback);
});


function AuthError(message) {
  this.status = 400;
  this.name = 'authentication_error';
  this.message = message;
  this.error = true;
  try {
    Error.captureStackTrace(this, AuthError);
  } catch (e) {}
}

utils.inherits(AuthError, Error);

if (typeof window !== 'undefined' && window.PouchDB) {
  window.PouchDB.plugin(exports);
}

},{"1":1}]},{},[17])(17)
});