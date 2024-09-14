navigator.userAgent.indexOf("Chrome-Lighthouse")==-1&&function(T){var v={};function s(i){if(v[i])return v[i].exports;var h=v[i]={i:i,l:!1,exports:{}};return T[i].call(h.exports,h,h.exports,s),h.l=!0,h.exports}s.m=T,s.c=v,s.d=function(i,h,f){s.o(i,h)||Object.defineProperty(i,h,{enumerable:!0,get:f})},s.r=function(i){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},s.t=function(i,h){if(1&h&&(i=s(i)),8&h||4&h&&typeof i=="object"&&i&&i.__esModule)return i;var f=Object.create(null);if(s.r(f),Object.defineProperty(f,"default",{enumerable:!0,value:i}),2&h&&typeof i!="string")for(var c in i)s.d(f,c,function(_){return i[_]}.bind(null,c));return f},s.n=function(i){var h=i&&i.__esModule?function(){return i.default}:function(){return i};return s.d(h,"a",h),h},s.o=function(i,h){return Object.prototype.hasOwnProperty.call(i,h)},s.p="",s(s.s=0)}([function(T,v,s){"use strict";s.r(v),s(1),s(2)},function(T,v){(function(s,i){"use strict";if("IntersectionObserver"in s&&"IntersectionObserverEntry"in s&&"intersectionRatio"in s.IntersectionObserverEntry.prototype)"isIntersecting"in s.IntersectionObserverEntry.prototype||Object.defineProperty(s.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var h=[];c.prototype.THROTTLE_TIMEOUT=100,c.prototype.POLL_INTERVAL=null,c.prototype.USE_MUTATION_OBSERVER=!0,c.prototype.observe=function(e){if(!this._observationTargets.some(function(t){return t.element==e})){if(!e||e.nodeType!=1)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:e,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},c.prototype.unobserve=function(e){this._observationTargets=this._observationTargets.filter(function(t){return t.element!=e}),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},c.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},c.prototype.takeRecords=function(){var e=this._queuedEntries.slice();return this._queuedEntries=[],e},c.prototype._initThresholds=function(e){var t=e||[0];return Array.isArray(t)||(t=[t]),t.sort().filter(function(n,a,l){if(typeof n!="number"||isNaN(n)||n<0||n>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return n!==l[a-1]})},c.prototype._parseRootMargin=function(e){var t=(e||"0px").split(/\s+/).map(function(n){var a=/^(-?\d*\.?\d+)(px|%)$/.exec(n);if(!a)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(a[1]),unit:a[2]}});return t[1]=t[1]||t[0],t[2]=t[2]||t[0],t[3]=t[3]||t[1],t},c.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(_(s,"resize",this._checkForIntersections,!0),_(i,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in s&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(i,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},c.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,A(s,"resize",this._checkForIntersections,!0),A(i,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},c.prototype._checkForIntersections=function(){var e=this._rootIsInDom(),t=e?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach(function(n){var a=n.element,l=E(a),d=this._rootContainsTarget(a),p=n.entry,r=e&&d&&this._computeTargetAndRootIntersection(a,t),o=n.entry=new f({time:s.performance&&performance.now&&performance.now(),target:a,boundingClientRect:l,rootBounds:t,intersectionRect:r});p?e&&d?this._hasCrossedThreshold(p,o)&&this._queuedEntries.push(o):p&&p.isIntersecting&&this._queuedEntries.push(o):this._queuedEntries.push(o)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},c.prototype._computeTargetAndRootIntersection=function(e,t){if(s.getComputedStyle(e).display!="none"){for(var n,a,l,d,p,r,o,u,m=E(e),g=I(e),b=!1;!b;){var y=null,R=g.nodeType==1?s.getComputedStyle(g):{};if(R.display=="none")return;if(g==this.root||g==i?(b=!0,y=t):g!=i.body&&g!=i.documentElement&&R.overflow!="visible"&&(y=E(g)),y&&(n=y,a=m,l=void 0,d=void 0,p=void 0,r=void 0,o=void 0,u=void 0,l=Math.max(n.top,a.top),d=Math.min(n.bottom,a.bottom),p=Math.max(n.left,a.left),r=Math.min(n.right,a.right),u=d-l,!(m=(o=r-p)>=0&&u>=0&&{top:l,bottom:d,left:p,right:r,width:o,height:u})))break;g=I(g)}return m}},c.prototype._getRootRect=function(){var e;if(this.root)e=E(this.root);else{var t=i.documentElement,n=i.body;e={top:0,left:0,right:t.clientWidth||n.clientWidth,width:t.clientWidth||n.clientWidth,bottom:t.clientHeight||n.clientHeight,height:t.clientHeight||n.clientHeight}}return this._expandRectByRootMargin(e)},c.prototype._expandRectByRootMargin=function(e){var t=this._rootMarginValues.map(function(a,l){return a.unit=="px"?a.value:a.value*(l%2?e.width:e.height)/100}),n={top:e.top-t[0],right:e.right+t[1],bottom:e.bottom+t[2],left:e.left-t[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},c.prototype._hasCrossedThreshold=function(e,t){var n=e&&e.isIntersecting?e.intersectionRatio||0:-1,a=t.isIntersecting?t.intersectionRatio||0:-1;if(n!==a)for(var l=0;l<this.thresholds.length;l++){var d=this.thresholds[l];if(d==n||d==a||d<n!=d<a)return!0}},c.prototype._rootIsInDom=function(){return!this.root||O(i,this.root)},c.prototype._rootContainsTarget=function(e){return O(this.root||i,e)},c.prototype._registerInstance=function(){h.indexOf(this)<0&&h.push(this)},c.prototype._unregisterInstance=function(){var e=h.indexOf(this);e!=-1&&h.splice(e,1)},s.IntersectionObserver=c,s.IntersectionObserverEntry=f}function f(e){this.time=e.time,this.target=e.target,this.rootBounds=e.rootBounds,this.boundingClientRect=e.boundingClientRect,this.intersectionRect=e.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0},this.isIntersecting=!!e.intersectionRect;var t=this.boundingClientRect,n=t.width*t.height,a=this.intersectionRect,l=a.width*a.height;this.intersectionRatio=n?Number((l/n).toFixed(4)):this.isIntersecting?1:0}function c(e,t){var n,a,l,d=t||{};if(typeof e!="function")throw new Error("callback must be a function");if(d.root&&d.root.nodeType!=1)throw new Error("root must be an Element");this._checkForIntersections=(n=this._checkForIntersections.bind(this),a=this.THROTTLE_TIMEOUT,l=null,function(){l||(l=setTimeout(function(){n(),l=null},a))}),this._callback=e,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(d.rootMargin),this.thresholds=this._initThresholds(d.threshold),this.root=d.root||null,this.rootMargin=this._rootMarginValues.map(function(p){return p.value+p.unit}).join(" ")}function _(e,t,n,a){typeof e.addEventListener=="function"?e.addEventListener(t,n,a||!1):typeof e.attachEvent=="function"&&e.attachEvent("on"+t,n)}function A(e,t,n,a){typeof e.removeEventListener=="function"?e.removeEventListener(t,n,a||!1):typeof e.detatchEvent=="function"&&e.detatchEvent("on"+t,n)}function E(e){var t;try{t=e.getBoundingClientRect()}catch(n){}return t?(t.width&&t.height||(t={top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.right-t.left,height:t.bottom-t.top}),t):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function O(e,t){for(var n=t;n;){if(n==e)return!0;n=I(n)}return!1}function I(e){var t=e.parentNode;return t&&t.nodeType==11&&t.host?t.host:t}})(window,document)},function(T,v){(function(){"use strict";var s,i,h,f,c=document.createElement("details"),_=typeof HTMLDetailsElement!="undefined"&&c instanceof HTMLDetailsElement,A="open"in c||_,E="ontoggle"in c,O='\ndetails, summary {\n  display: block;\n}\ndetails:not([open]) > *:not(summary) {\n  display: none;\n}\nsummary::before {\n  content: "\u25BA";\n  padding-right: 0.3rem;\n  font-size: 0.6rem;\n  cursor: default;\n}\n[open] > summary::before {\n  content: "\u25BC";\n}\n',I=[],e=I.forEach,t=I.slice;function n(r){(function(o,u){return(o.tagName==u?[o]:[]).concat(typeof o.getElementsByTagName=="function"?t.call(o.getElementsByTagName(u)):[])})(r,"SUMMARY").forEach(function(o){var u=p(o,"DETAILS");o.setAttribute("aria-expanded",u.hasAttribute("open")),o.hasAttribute("tabindex")||o.setAttribute("tabindex","0"),o.hasAttribute("role")||o.setAttribute("role","button")})}function a(r){return!(r.defaultPrevented||r.ctrlKey||r.metaKey||r.shiftKey||r.target.isContentEditable)}function l(r){addEventListener("click",function(o){if(a(o)&&o.which<=1){var u=p(o.target,"SUMMARY");u&&u.parentNode&&u.parentNode.tagName=="DETAILS"&&r(u.parentNode)}},!1),addEventListener("keydown",function(o){if(a(o)&&(o.keyCode==13||o.keyCode==32)){var u=p(o.target,"SUMMARY");u&&u.parentNode&&u.parentNode.tagName=="DETAILS"&&(r(u.parentNode),o.preventDefault())}},!1)}function d(r){var o=document.createEvent("Event");o.initEvent("toggle",!1,!1),r.dispatchEvent(o)}function p(r,o){if(typeof r.closest=="function")return r.closest(o);for(;r;){if(r.tagName==o)return r;r=r.parentNode}}A||(document.head.insertAdjacentHTML("afterbegin","<style>"+O+"</style>"),s=document.createElement("details").constructor.prototype,i=s.setAttribute,h=s.removeAttribute,f=Object.getOwnPropertyDescriptor(s,"open"),Object.defineProperties(s,{open:{get:function(){return this.tagName=="DETAILS"?this.hasAttribute("open"):f&&f.get?f.get.call(this):void 0},set:function(r){return this.tagName=="DETAILS"?r?this.setAttribute("open",""):this.removeAttribute("open"):f&&f.set?f.set.call(this,r):void 0}},setAttribute:{value:function(r,o){var u=this,m=function(){return i.call(u,r,o)};if(r=="open"&&this.tagName=="DETAILS"){var g=this.hasAttribute("open"),b=m();if(!g){var y=this.querySelector("summary");y&&y.setAttribute("aria-expanded",!0),d(this)}return b}return m()}},removeAttribute:{value:function(r){var o=this,u=function(){return h.call(o,r)};if(r=="open"&&this.tagName=="DETAILS"){var m=this.hasAttribute("open"),g=u();if(m){var b=this.querySelector("summary");b&&b.setAttribute("aria-expanded",!1),d(this)}return g}return u()}}}),l(function(r){r.hasAttribute("open")?r.removeAttribute("open"):r.setAttribute("open","")}),n(document),window.MutationObserver?new MutationObserver(function(r){e.call(r,function(o){e.call(o.addedNodes,n)})}).observe(document.documentElement,{subtree:!0,childList:!0}):document.addEventListener("DOMNodeInserted",function(r){n(r.target)})),A&&!E&&(window.MutationObserver?new MutationObserver(function(r){e.call(r,function(o){var u=o.target,m=o.attributeName;u.tagName=="DETAILS"&&m=="open"&&d(u)})}).observe(document.documentElement,{attributes:!0,subtree:!0}):l(function(r){var o=r.getAttribute("open");setTimeout(function(){var u=r.getAttribute("open");o!=u&&d(r)},1)}))})()}]);
//# sourceMappingURL=/s/files/1/0326/3129/2039/t/47/assets/polyfills.js.map?v=1640000917
