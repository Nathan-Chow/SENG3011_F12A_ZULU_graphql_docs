import{w as u}from"./index.8cce8785.js";import{a as _}from"./paths.ecbd5fca.js";const g="1680175064425",w="sveltekit:snapshot",k="sveltekit:scroll",A="sveltekit:index",f={tap:1,hover:2,viewport:3,eager:4,off:-1};function R(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function I(){return{x:pageXOffset,y:pageYOffset}}function l(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const d={...f,"":f.hover};function h(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function S(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=h(e)}}function y(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const s=e instanceof SVGAElement?e.target.baseVal:e.target,o=!n||!!s||v(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external")||e.hasAttribute("download");return{url:n,external:o,target:s}}function T(e){let t=null,n=null,s=null,o=null,a=e;for(;a&&a!==document.documentElement;)n===null&&(n=l(a,"preload-code")),s===null&&(s=l(a,"preload-data")),t===null&&(t=l(a,"noscroll")),o===null&&(o=l(a,"reload")),a=h(a);return{preload_code:d[n??"off"],preload_data:d[s??"off"],noscroll:t==="off"?!1:t===""?!0:null,reload:o==="off"?!1:o===""?!0:null}}function p(e){const t=u(e);let n=!0;function s(){n=!0,t.update(r=>r)}function o(r){n=!1,t.set(r)}function a(r){let i;return t.subscribe(c=>{(i===void 0||n&&c!==i)&&r(i=c)})}return{notify:s,set:o,subscribe:a}}function b(){const{set:e,subscribe:t}=u(!1);let n;async function s(){clearTimeout(n);const o=await fetch(`${_}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(o.ok){const r=(await o.json()).version!==g;return r&&(e(!0),clearTimeout(n)),r}else throw new Error(`Version check failed: ${o.status}`)}return{subscribe:t,check:s}}function v(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function x(e){e.client}const O={url:p({}),page:p({}),navigating:u(null),updated:b()};export{A as I,f as P,k as S,w as a,y as b,T as c,I as d,x as e,S as f,R as g,v as i,O as s};
