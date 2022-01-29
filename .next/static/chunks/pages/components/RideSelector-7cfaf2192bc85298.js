(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[864],{8269:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/RideSelector",function(){return r(972)}])},972:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var n=r(5893),i=r(7294),o=r(3043),c=r.n(o),u=[{imgUrl:"https://i.ibb.co/cyvcpfF/uberx.png",service:"UberX",multiplier:1},{imgUrl:"https://i.ibb.co/YDYMKny/uberxl.png",service:"UberXL",multiplier:1.5},{imgUrl:"https://i.ibb.co/Xx4G91m/uberblack.png",service:"Black",multiplier:2},{imgUrl:"https://i.ibb.co/cyvcpfF/uberx.png",service:"Comfort",multiplier:1.2},{imgUrl:" https://i.ibb.co/1nStPWT/uberblacksuv.png",service:"Black SUV",multiplier:2.8}];function a(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function s(){var e=a([" flex flex-col flex-1 overflow-y-scroll"]);return s=function(){return e},e}function l(){var e=a([" overflow-y-scroll "]);return l=function(){return e},e}function f(){var e=a(["flex  "]);return f=function(){return e},e}function d(){var e=a(["items-center p-4  flex-1"]);return d=function(){return e},e}function p(){var e=a(["font-medium"]);return p=function(){return e},e}function m(){var e=a(["text-xs text-blue-500 "]);return m=function(){return e},e}function b(){var e=a(["text-sm "]);return b=function(){return e},e}function v(){var e=a(["h-14 mr-2"]);return v=function(){return e},e}function h(){var e=a([" text-gray-500 text-cdenter text-xs py-2 border-b "]);return h=function(){return e},e}var g=function(e){var t=e.pickupCoordinates,r=e.dropoffCoordinates,o=(0,i.useState)(0),c=o[0],a=o[1];return(0,i.useEffect)((function(){fetch("https://api.mapbox.com/directions/v5/mapbox/driving/".concat(t[0],",").concat(t[1],";").concat(r[0],",").concat(r[1],"?access_token=pk.eyJ1IjoiZmF0aW1hLXNlZW1hYjIwMDEiLCJhIjoiY2t3dDltamRyMWViNDJ1cmxnM3EzeTlieSJ9.BmUtmLcYV2h_GJeZDxjWpQ")).then((function(e){return e.json()})).then((function(e){return a(e.routes[0].duration/100)}))}),[t,r]),(0,n.jsxs)(x,{children:[(0,n.jsx)(M,{children:"Choose a ride, or swap up for more"}),(0,n.jsx)(_,{children:u.map((function(e,t){return(0,n.jsxs)(j,{children:[(0,n.jsx)(E,{src:e.imgUrl}),(0,n.jsxs)(y,{children:[(0,n.jsx)(k,{children:e.service}),(0,n.jsx)(O,{children:"20 min"})]}),(0,n.jsx)(w,{children:"$"+(c*e.multiplier).toFixed(2)})]},t)}))})]})},x=c().div(s()),_=c().div(l()),j=c().div(f()),y=c().div(d()),k=c().div(p()),O=c().div(m()),w=c().div(b()),E=c().img(v()),M=c().div(h())},7824:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]},3043:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const i=n(r(7904));t.default=i.default},7904:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=n(r(7294)),o=n(r(7824)),c=r(4796),u=(e,t="")=>{const r=e.toString().trim().replace(/\s{2,}/g," ").split(" ").filter((e=>","!==e)),n=t?t.split(" "):[];return c.classnames(...n.concat(r).filter((e=>" "!==e)).filter(((e,t,r)=>r.indexOf(e)===t))).split(" ")};function a(e,...t){return e.reduce(((e,t)=>`${e} ${t}`),t.join(" ")).trim().replace(/\s{2,}/g," ")}function s(e){return(t,...r)=>i.default.forwardRef(((n,o)=>i.default.createElement(e,Object.assign({},Object.fromEntries(Object.entries(n).filter((([e])=>"$"!==e.charAt(0)))),{ref:o,className:a(u(t,n.className),...r.map((e=>e(n))))}))))}const l=o.default.reduce(((e,t)=>({...e,[t]:s(t)})),{}),f=Object.assign(s,l);t.default=f},4796:function(e,t){!function(e){"use strict";function t(e){var r,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(n=t(e[r]))&&(i&&(i+=" "),i+=n);else for(r in e)e[r]&&(i&&(i+=" "),i+=r);return i}var r=function(){for(var e,r,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(r=t(e))&&(i&&(i+=" "),i+=r);return i},n=r;e.classnames=r,e.default=n,e.tw=n,Object.defineProperty(e,"__esModule",{value:!0})}(t)}},function(e){e.O(0,[774,888,179],(function(){return t=8269,e(e.s=t);var t}));var t=e.O();_N_E=t}]);