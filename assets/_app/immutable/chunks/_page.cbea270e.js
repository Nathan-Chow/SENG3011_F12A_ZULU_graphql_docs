import{r as s,u as n}from"./model.0bec552b.js";import{f as i}from"./pages.ba8ea31e.js";import{e as a}from"./index.b1f5b21f.js";const p=s(),c=({params:o,url:t})=>{const r=n(o.subscription),e=i(t.pathname);if(!r||!e)throw a(404,`Subscription ${o.subscription} not found.`);return{field:r,page:e}},l=Object.freeze(Object.defineProperty({__proto__:null,load:c,prerender:p},Symbol.toStringTag,{value:"Module"}));export{l as _,c as l,p};
