import{p as a,q as n}from"./model.d2307464.js";import{f as s}from"./pages.f53340dc.js";import{e as f}from"./index.b1f5b21f.js";const p=a(),u=({params:e,url:t})=>{const r=n(e.query),o=s(t.pathname);if(!r||!o)throw f(404,`Query ${e.query} not found.`);return{field:r,page:o}},y=Object.freeze(Object.defineProperty({__proto__:null,load:u,prerender:p},Symbol.toStringTag,{value:"Module"}));export{y as _,u as l,p};
