(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{888:function(e,t,n){Promise.resolve().then(n.bind(n,6183)),Promise.resolve().then(n.bind(n,2046)),Promise.resolve().then(n.bind(n,312)),Promise.resolve().then(n.t.bind(n,748,23)),Promise.resolve().then(n.t.bind(n,4490,23)),Promise.resolve().then(n.t.bind(n,5415,23)),Promise.resolve().then(n.t.bind(n,7608,23)),Promise.resolve().then(n.t.bind(n,2445,23)),Promise.resolve().then(n.t.bind(n,529,23)),Promise.resolve().then(n.t.bind(n,1171,23))},6183:function(e,t,n){"use strict";n.r(t);var s=n(3827),r=n(9174),i=n(4090);t.default=()=>((0,i.useEffect)(()=>{r.D.preloader()},[]),(0,s.jsxs)(i.Fragment,{children:[(0,s.jsx)("div",{className:"trm-preloader",children:(0,s.jsx)("div",{className:"trm-holder",children:(0,s.jsxs)("div",{className:"preloader",children:[(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{})]})})}),(0,s.jsx)("div",{className:"trm-mode-swich-animation-frame",children:(0,s.jsxs)("div",{className:"trm-mode-swich-animation",children:[(0,s.jsx)("i",{className:"far fa-sun"}),(0,s.jsx)("div",{className:"trm-horizon"}),(0,s.jsx)("i",{className:"far fa-moon"})]})})]}))},2046:function(e,t,n){"use strict";n.r(t),n.d(t,{context:function(){return c}});var s=n(3827),r=n(4090);let{MODE:i,BANNER_TYPE:a,PAGE_INFO:o,BANNER_IMAGE:l}={MODE:"MODE",BANNER_TYPE:"BANNER_TYPE",BANNER_IMAGE:"BANNER_IMAGE",PAGE_INFO:"PAGE_INFO"},c=(0,r.createContext)(),d=(e,t)=>{let{type:n,payload:s}=t;switch(n){case i:return{...e,mode:s};case a:return{...e,banner_type:s};case l:return{...e,banner_image:s};case o:return{...e,page_info:s};default:return e}};t.default=e=>{let[t,n]=(0,r.useReducer)(d,{mode:!1,banner_image:"/img/banner.jpg",banner_type:"",page_info:{pageTitle:"",subTitle:"",pageName:"",scroll_down:!0}}),u=(0,r.useCallback)(e=>{n({type:i,payload:e})},[]),m=(0,r.useCallback)(e=>{n({type:a,payload:e})},[]),f=(0,r.useCallback)(e=>{n({type:l,payload:e})},[]),h=(0,r.useCallback)((e,t,s,r)=>{n({type:o,payload:{pageTitle:e,subTitle:t,pageName:s,scroll_down:!1!==r||r}})},[]),{mode:v,banner_type:p,banner_image:x,page_info:b}=t;return(0,s.jsx)(c.Provider,{value:{mode:v,modeChange:u,banner_type:p,banner_type_function:m,banner_image:x,banner_image_function:f,page_info:b,page_info_function:h},children:e.children})}},312:function(e,t,n){"use strict";n.r(t);var s=n(3827),r=n(2046),i=n(4090);t.default=()=>{let{mode:e}=(0,i.useContext)(r.context);return(0,s.jsx)("head",{children:(0,s.jsx)("link",{rel:"stylesheet",href:"css/style-".concat(e?"dark":"light",".css")})})}},9174:function(e,t,n){"use strict";n.d(t,{D:function(){return s}});let s={preloader(){document.documentElement.classList.add("is-animating");var e=document.querySelector(".trm-scroll-container");e.style.opacity="0",e.style.transition="opacity 0.6s",setTimeout(function(){document.documentElement.classList.remove("is-animating"),e.style.opacity="1"},1e3)},scrollAnimation(){n.e(62).then(n.bind(n,7062)).then(e=>{scroll=new e.default({el:document.querySelector("#trm-scroll-container"),smooth:!0,lerp:.1})})}}},2445:function(){},1171:function(){},748:function(){},4490:function(){},5415:function(){},529:function(){},7608:function(){}},function(e){e.O(0,[971,69,744],function(){return e(e.s=888)}),_N_E=e.O()}]);