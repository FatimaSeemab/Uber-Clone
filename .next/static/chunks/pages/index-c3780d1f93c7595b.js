(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3678)}])},2356:function(e,n,t){"use strict";t.d(n,{I8:function(){return c},Ap:function(){return u}});var r=t(5503),o=t(5762),i=t(7702),a=(0,r.ZF)({apiKey:"AIzaSyB1utWRs7T-plAUFpLNpZfW9EpC1dBWYLE",authDomain:"uber-clone-4355d.firebaseapp.com",projectId:"uber-clone-4355d",storageBucket:"uber-clone-4355d.appspot.com",messagingSenderId:"286106651255",appId:"1:286106651255:web:f9b669a02f364ac0ef1472",measurementId:"G-D6PCYZWS6J"}),u=((0,o.IH)(a),new i.hJ),c=(0,i.v0)()},8045:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function i(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var a=d(t(7294)),u=d(t(5443)),c=t(6978),f=t(5809),s=t(7190);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e){return e&&e.__esModule?e:{default:e}}function p(e){for(var n=arguments,t=function(t){var r=null!=n[t]?n[t]:{},o=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(n){l(e,n,r[n])}))},r=1;r<arguments.length;r++)t(r);return e}var v=new Set,h=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var m=new Map([["default",function(e){var n=e.root,t=e.src,r=e.width,o=e.quality;0;return"".concat(n,"?url=").concat(encodeURIComponent(t),"&w=").concat(r,"&q=").concat(o||75)}],["imgix",function(e){var n=e.root,t=e.src,r=e.width,o=e.quality,i=new URL("".concat(n).concat(O(t))),a=i.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),o&&a.set("q",o.toString());return i.href}],["cloudinary",function(e){var n=e.root,t=e.src,r=e.width,o=e.quality,i=["f_auto","c_limit","w_"+r,"q_"+(o||"auto")].join(",")+"/";return"".concat(n).concat(i).concat(O(t))}],["akamai",function(e){var n=e.root,t=e.src,r=e.width;return"".concat(n).concat(O(t),"?imwidth=").concat(r)}],["custom",function(e){var n=e.src;throw new Error('Image with src "'.concat(n,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function y(e){return void 0!==e.default}var g,b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||f.imageConfigDefault,w=b.deviceSizes,x=b.imageSizes,j=b.loader,A=b.path,E=(b.domains,i(w).concat(i(x)));function I(e){var n=e.src,t=e.unoptimized,r=e.layout,o=e.width,a=e.quality,u=e.sizes,c=e.loader;if(t)return{src:n,srcSet:void 0,sizes:void 0};var f=function(e,n,t){if(t&&("fill"===n||"responsive"===n)){for(var r,o=/(^|\s)(1?\d?\d)vw/g,a=[];r=o.exec(t);r)a.push(parseInt(r[2]));if(a.length){var u,c=.01*(u=Math).min.apply(u,i(a));return{widths:E.filter((function(e){return e>=w[0]*c})),kind:"w"}}return{widths:E,kind:"w"}}return"number"!==typeof e||"fill"===n||"responsive"===n?{widths:w,kind:"w"}:{widths:i(new Set([e,2*e].map((function(e){return E.find((function(n){return n>=e}))||E[E.length-1]})))),kind:"x"}}(o,r,u),s=f.widths,l=f.kind,d=s.length-1;return{sizes:u||"w"!==l?u:"100vw",srcSet:s.map((function(e,t){return"".concat(c({src:n,quality:a,width:e})," ").concat("w"===l?e:t+1).concat(l)})).join(", "),src:c({src:n,quality:a,width:s[d]})}}function _(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function L(e){var n=m.get(j);if(n)return n(p({root:A},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(j))}function O(e){return"/"===e[0]?e.slice(1):e}w.sort((function(e,n){return e-n})),E.sort((function(e,n){return e-n}))},8418:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var o,i=(o=t(7294))&&o.__esModule?o:{default:o},a=t(6273),u=t(387),c=t(7190);var f={};function s(e,n,t,r){if(e&&a.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[n+"%"+t+(o?"%"+o:"")]=!0}}var l=function(e){var n,t=!1!==e.prefetch,o=u.useRouter(),l=i.default.useMemo((function(){var n=r(a.resolveHref(o,e.href,!0),2),t=n[0],i=n[1];return{href:t,as:e.as?a.resolveHref(o,e.as):i||t}}),[o,e.href,e.as]),d=l.href,p=l.as,v=e.children,h=e.replace,m=e.shallow,y=e.scroll,g=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var b=(n=i.default.Children.only(v))&&"object"===typeof n&&n.ref,w=r(c.useIntersection({rootMargin:"200px"}),2),x=w[0],j=w[1],A=i.default.useCallback((function(e){x(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,x]);i.default.useEffect((function(){var e=j&&t&&a.isLocalURL(d),n="undefined"!==typeof g?g:o&&o.locale,r=f[d+"%"+p+(n?"%"+n:"")];e&&!r&&s(o,d,p,{locale:n})}),[p,d,j,g,t,o]);var E={ref:A,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,i,u,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(t))&&(e.preventDefault(),null==u&&r.indexOf("#")>=0&&(u=!1),n[o?"replace":"push"](t,r,{shallow:i,locale:c,scroll:u}))}(e,o,d,p,h,m,y,g)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),a.isLocalURL(d)&&s(o,d,p,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var I="undefined"!==typeof g?g:o&&o.locale,_=o&&o.isLocaleDomain&&a.getDomainLocale(p,I,o&&o.locales,o&&o.domainLocales);E.href=_||a.addBasePath(a.addLocale(p,I,o&&o.defaultLocale))}return i.default.cloneElement(n,E)};n.default=l},7190:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,c=o.useRef(),f=r(o.useState(!1),2),s=f[0],l=f[1],d=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),t||s||e&&e.tagName&&(c.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=u.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return u.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,i=r.observer,a=r.elements;return a.set(e,n),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),u.delete(o))}}(e,(function(e){return e&&l(e)}),{rootMargin:n}))}),[t,n,s]);return o.useEffect((function(){if(!a&&!s){var e=i.requestIdleCallback((function(){return l(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[s]),[d,s]};var o=t(7294),i=t(9311),a="undefined"!==typeof IntersectionObserver;var u=new Map},6978:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.toBase64=function(e){return window.btoa(e)}},3525:function(e,n,t){"use strict";t.r(n);var r=t(5893),o=t(7294),i=t(3043),a=t.n(i),u=t(6158),c=t.n(u);function f(){var e,n,t=(e=["flex-1 h-1/2"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return f=function(){return t},t}c().accessToken="pk.eyJ1IjoiZmF0aW1hLXNlZW1hYjIwMDEiLCJhIjoiY2t3dDltamRyMWViNDJ1cmxnM3EzeTlieSJ9.BmUtmLcYV2h_GJeZDxjWpQ";var s=a().div(f());n.default=function(e){var n=e.pickupCoordinates,t=e.dropoffCoordinates;console.log(n),console.log(t),(0,o.useEffect)((function(){var e=new(c().Map)({container:"map",style:"mapbox://styles/mapbox/streets-v11",center:[-99.29611,39.39172],zoom:3});n&&i(e,n),t&&i(e,t),t&&n&&e.fitBounds([n,t],{padding:60})}),[n,t]);var i=function(e,n){(new(c().Marker)).setLngLat(n).addTo(e)};return(0,r.jsx)(s,{id:"map"})}},3678:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return E}});var r=t(5893),o=(t(9008),t(5675),t(7294)),i=t(3525),a=t(3043),u=t.n(a),c=t(1664),f=t(1163),s=t(7702),l=t(2356);function d(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function p(){var e=d(["\nflex flex-col  h-screen\n"]);return p=function(){return e},e}function v(){var e=d(["flex-1 bp-4"]);return v=function(){return e},e}function h(){var e=d(["flex justify-between items-center"]);return h=function(){return e},e}function m(){var e=d(["h-28"]);return m=function(){return e},e}function y(){var e=d(["flex items-center  "]);return y=function(){return e},e}function g(){var e=d([" mr-4 w-20 text-sm"]);return g=function(){return e},e}function b(){var e=d(["h-12 w-12 rounded-full border border-gray-200 p-px hover:cursor-pointer"]);return b=function(){return e},e}function w(){var e=d(["flex "]);return w=function(){return e},e}function x(){var e=d(["\nbg-gray-200\nm-2 h-32\nitems-center flex-col justify-center\nrounded-lg\nflex\nflex-1\ntransform hover:scale-105 transition text-xl"]);return x=function(){return e},e}function j(){var e=d(["h-3/5\n"]);return j=function(){return e},e}function A(){var e=d(["h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8"]);return A=function(){return e},e}function E(){var e=(0,f.useRouter)(),n=(0,o.useState)(null),t=n[0],a=n[1];return(0,o.useEffect)((function(){return(0,s.Aj)(l.I8,(function(n){n?a({name:n.displayName}):(a(null),e.push("/login"))}))}),[e]),(0,r.jsxs)(I,{children:[(0,r.jsx)(i.default,{id:"map",children:"Map"}),(0,r.jsxs)(_,{children:[(0,r.jsxs)(L,{children:[(0,r.jsx)(O,{src:"https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"}),(0,r.jsxs)(S,{children:[(0,r.jsx)(k,{children:t&&t.name}),(0,r.jsx)(M,{src:t&&t.photoUrl,onClick:function(){(0,s.w7)(l.I8)}})]})]}),(0,r.jsxs)(R,{children:[(0,r.jsx)(c.default,{href:"/search",passHref:!0,children:(0,r.jsxs)(C,{children:[(0,r.jsx)(D,{src:"https://i.ibb.co/cyvcpfF/uberx.png"}),"Ride"]})}),(0,r.jsxs)(C,{children:[(0,r.jsx)(D,{src:"https://i.ibb.co/n776JLm/bike.png"}),"Wheel"]}),(0,r.jsxs)(C,{children:[(0,r.jsx)(D,{src:"https://i.ibb.co/5RjchBg/uberschedule.png"}),"Reserve"]})]}),(0,r.jsx)(z,{children:"Where to?"})]})]})}var I=u().div(p()),_=u().div(v()),L=u().div(h()),O=u().img(m()),S=u().div(y()),k=u().div(g()),M=u().img(b()),R=u().div(w()),C=u().div(x()),D=u().img(j()),z=u().div(A())},5809:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.imageConfigDefault=n.VALID_LOADERS=void 0;n.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];n.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},9008:function(e,n,t){t(5443)},5675:function(e,n,t){t(8045)},1664:function(e,n,t){e.exports=t(8418)}},function(e){e.O(0,[634,297,858,774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);