import{n as a,o as n}from"./model.b6762f15.js";import{f as i}from"./pages.be11a0f5.js";import{e as s}from"./index.b1f5b21f.js";const f=a(),m=({params:t,url:r})=>{const o=n(t.mutation),e=i(r.pathname);if(!o||!e)throw s(404,`Mutation ${t.mutation} not found.`);return{field:o,page:e}},c=Object.freeze(Object.defineProperty({__proto__:null,load:m,prerender:f},Symbol.toStringTag,{value:"Module"}));export{c as _,m as l,f as p};