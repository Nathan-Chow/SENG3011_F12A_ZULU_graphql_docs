import{f as a,B as p,C as n}from"./model.f9b9f297.js";import{f}from"./pages.6bd2a279.js";import{e as y}from"./index.b1f5b21f.js";const g=!a(),m=({params:t,url:r})=>{const e=p(t.type),s=n(e),o=f(r.pathname);if(!e||!o)throw y(404,`Type ${t.type} not found.`);return{type:e,usages:s,page:o}},d=Object.freeze(Object.defineProperty({__proto__:null,load:m,prerender:g},Symbol.toStringTag,{value:"Module"}));export{d as _,m as l,g as p};