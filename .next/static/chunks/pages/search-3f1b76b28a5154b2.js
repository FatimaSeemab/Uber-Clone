(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{8161:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return n(9505)}])},8418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var u,a=e[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var i,o=(i=n(7294))&&i.__esModule?i:{default:i},u=n(6273),a=n(387),c=n(7190);var l={};function s(e,t,n,r){if(e&&u.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(i?"%"+i:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,i=a.useRouter(),f=o.default.useMemo((function(){var t=r(u.resolveHref(i,e.href,!0),2),n=t[0],o=t[1];return{href:n,as:e.as?u.resolveHref(i,e.as):o||n}}),[i,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,m=e.shallow,g=e.scroll,b=e.locale;"string"===typeof v&&(v=o.default.createElement("a",null,v));var y=(t=o.default.Children.only(v))&&"object"===typeof t&&t.ref,x=r(c.useIntersection({rootMargin:"200px"}),2),j=x[0],_=x[1],w=o.default.useCallback((function(e){j(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,j]);o.default.useEffect((function(){var e=_&&n&&u.isLocalURL(d),t="undefined"!==typeof b?b:i&&i.locale,r=l[d+"%"+p+(t?"%"+t:"")];e&&!r&&s(i,d,p,{locale:t})}),[p,d,_,b,n,i]);var k={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,o,a,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n))&&(e.preventDefault(),null==a&&r.indexOf("#")>=0&&(a=!1),t[i?"replace":"push"](n,r,{shallow:o,locale:c,scroll:a}))}(e,i,d,p,h,m,g,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u.isLocalURL(d)&&s(i,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof b?b:i&&i.locale,O=i&&i.isLocaleDomain&&u.getDomainLocale(p,E,i&&i.locales,i&&i.domainLocales);k.href=O||u.addBasePath(u.addLocale(p,E,i&&i.defaultLocale))}return o.default.cloneElement(t,k)};t.default=f},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var u,a=e[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!u,c=i.useRef(),l=r(i.useState(!1),2),s=l[0],f=l[1],d=i.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||s||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=a.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return a.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,o=r.observer,u=r.elements;return u.set(e,t),o.observe(e),function(){u.delete(e),o.unobserve(e),0===u.size&&(o.disconnect(),a.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,s]);return i.useEffect((function(){if(!u&&!s){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[s]),[d,s]};var i=n(7294),o=n(9311),u="undefined"!==typeof IntersectionObserver;var a=new Map},9505:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=n(7294),o=n(3043),u=n.n(o),a=n(1664);function c(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function l(){var e=c(["\nbg-gray-200\nh-screen\n"]);return l=function(){return e},e}function s(){var e=c(["\nbg-black\ntext-white text-center\nmt-2\nmx-4 px-4 py-3 text-2xl\ncursor-pointer\nw-100\n"]);return s=function(){return e},e}function f(){var e=c(["\nbg-white  px-4 cursor-pointer"]);return f=function(){return e},e}function d(){var e=c(["\nh-12\n"]);return d=function(){return e},e}function p(){var e=c(["w-10 flex flex-col mr-2 items-center"]);return p=function(){return e},e}function v(){var e=c(["px-4 flex items-center bg-white mb-2 "]);return v=function(){return e},e}function h(){var e=c([" h-2.5"]);return h=function(){return e},e}function m(){var e=c(["h-10"]);return m=function(){return e},e}function g(){var e=c(["h-3"]);return g=function(){return e},e}function b(){var e=c(["flex flex-col flex-1"]);return b=function(){return e},e}function y(){var e=c(["\nh-10\nbg-gray-200\nmy-2\nrounded-2 \np-2\noutline-none border-none\n"]);return y=function(){return e},e}function x(){var e=c(["h-10 w-10\nrounded-full bg-gray-200  ml-3"]);return x=function(){return e},e}function j(){var e=c(["flex items-center bg-white px-4 py-2"]);return j=function(){return e},e}function _(){var e=c(["bg-gray-400 w-10 h-10 p-2 rounded-full mr-2"]);return _=function(){return e},e}i.useState,t.default=function(){var e=(0,i.useState)(""),t=e[0],n=e[1],o=(0,i.useState)(""),u=o[0],c=o[1];return(0,r.jsxs)(w,{children:[(0,r.jsx)(E,{children:(0,r.jsx)(a.default,{href:"/",passHref:!0,children:(0,r.jsx)(O,{src:"https://img.icons8.com/ios-filled/50/000000/left.png"})})}),(0,r.jsxs)(C,{children:[(0,r.jsxs)(M,{children:[(0,r.jsx)(L,{src:"https://img.icons8.com/ios/50/9CA3AF/filled-circle.png"}),(0,r.jsx)(P,{src:"https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"}),(0,r.jsx)(A,{src:"https://img.icons8.com/windows/50/000000/square-full.png"})]}),(0,r.jsxs)(I,{children:[(0,r.jsx)(N,{placeholder:"Enter Pickup Location",value:t,onChange:function(e){n(e.target.value)}}),(0,r.jsx)(N,{placeholder:"Where to?",value:u,onChange:function(e){c(e.target.value)}})]}),(0,r.jsx)(R,{src:"https://img.icons8.com/ios/50/000000/plus-math.png"})]}),(0,r.jsxs)(S,{children:[(0,r.jsx)(T,{src:"https://img.icons8.com/ios-filled/50/ffffff/star--v1.png"}),"SavedPlaces"]}),(0,r.jsx)(a.default,{href:{pathname:"/confirm",query:{pickup:t,dropoff:u}},passHref:!0,children:(0,r.jsx)(k,{children:"Comfirm Locations"})})]})};var w=u().div(l()),k=u().div(s()),E=u().div(f()),O=u().img(d()),M=u().div(p()),C=u().div(v()),L=u().img(h()),P=u().img(m()),A=u().img(g()),I=u().div(b()),N=u().input(y()),R=u().img(x()),S=u().div(j()),T=u().img(_())},1664:function(e,t,n){e.exports=n(8418)},7824:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]},3043:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const i=r(n(7904));t.default=i.default},7904:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(7294)),o=r(n(7824)),u=n(4796),a=(e,t="")=>{const n=e.toString().trim().replace(/\s{2,}/g," ").split(" ").filter((e=>","!==e)),r=t?t.split(" "):[];return u.classnames(...r.concat(n).filter((e=>" "!==e)).filter(((e,t,n)=>n.indexOf(e)===t))).split(" ")};function c(e,...t){return e.reduce(((e,t)=>`${e} ${t}`),t.join(" ")).trim().replace(/\s{2,}/g," ")}function l(e){return(t,...n)=>i.default.forwardRef(((r,o)=>i.default.createElement(e,Object.assign({},Object.fromEntries(Object.entries(r).filter((([e])=>"$"!==e.charAt(0)))),{ref:o,className:c(a(t,r.className),...n.map((e=>e(r))))}))))}const s=o.default.reduce(((e,t)=>({...e,[t]:l(t)})),{}),f=Object.assign(l,s);t.default=f},4796:function(e,t){!function(e){"use strict";function t(e){var n,r,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(r=t(e[n]))&&(i&&(i+=" "),i+=r);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}var n=function(){for(var e,n,r=0,i="";r<arguments.length;)(e=arguments[r++])&&(n=t(e))&&(i&&(i+=" "),i+=n);return i},r=n;e.classnames=n,e.default=r,e.tw=r,Object.defineProperty(e,"__esModule",{value:!0})}(t)}},function(e){e.O(0,[774,888,179],(function(){return t=8161,e(e.s=t);var t}));var t=e.O();_N_E=t}]);