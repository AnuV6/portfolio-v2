"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[664],{3140:function(e,t,r){var a,n,l=Object.create,i=Object.defineProperty,s=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,p=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of o(t))u.call(e,n)||n===r||i(e,n,{get:()=>t[n],enumerable:!(a=s(t,n))||a.enumerable});return e},h=(e,t,r)=>(c(e,"symbol"!=typeof t?t+"":t,r),r),m={};((e,t)=>{for(var r in t)i(e,r,{get:t[r],enumerable:!0})})(m,{default:()=>y}),e.exports=d(i({},"__esModule",{value:!0}),m);var f=(n=null!=(a=r(4090))?l(p(a)):{},d(a&&a.__esModule?n:i(n,"default",{value:a,enumerable:!0}),a));let b="64px",g={};class y extends f.Component{componentDidMount(){this.mounted=!0,this.fetchImage(this.props)}componentDidUpdate(e){let{url:t,light:r}=this.props;(e.url!==t||e.light!==r)&&this.fetchImage(this.props)}componentWillUnmount(){this.mounted=!1}fetchImage(e){let{url:t,light:r,oEmbedUrl:a}=e;if(!f.default.isValidElement(r)){if("string"==typeof r){this.setState({image:r});return}if(g[t]){this.setState({image:g[t]});return}return this.setState({image:null}),window.fetch(a.replace("{url}",t)).then(e=>e.json()).then(e=>{if(e.thumbnail_url&&this.mounted){let r=e.thumbnail_url.replace("height=100","height=480").replace("-d_295x166","-d_640");this.setState({image:r}),g[t]=r}})}}render(){let{light:e,onClick:t,playIcon:r,previewTabIndex:a,previewAriaLabel:n}=this.props,{image:l}=this.state,i=f.default.isValidElement(e),s={display:"flex",alignItems:"center",justifyContent:"center"},o={preview:{width:"100%",height:"100%",backgroundImage:l&&!i?"url(".concat(l,")"):void 0,backgroundSize:"cover",backgroundPosition:"center",cursor:"pointer",...s},shadow:{background:"radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",borderRadius:b,width:b,height:b,position:i?"absolute":void 0,...s},playIcon:{borderStyle:"solid",borderWidth:"16px 0 16px 26px",borderColor:"transparent transparent transparent white",marginLeft:"7px"}},p=f.default.createElement("div",{style:o.shadow,className:"react-player__shadow"},f.default.createElement("div",{style:o.playIcon,className:"react-player__play-icon"}));return f.default.createElement("div",{style:o.preview,className:"react-player__preview",onClick:t,tabIndex:a,onKeyPress:this.handleKeyPress,...n?{"aria-label":n}:{}},i?e:null,r||p)}constructor(){super(...arguments),h(this,"mounted",!1),h(this,"state",{image:null}),h(this,"handleKeyPress",e=>{("Enter"===e.key||" "===e.key)&&this.props.onClick()})}}}}]);