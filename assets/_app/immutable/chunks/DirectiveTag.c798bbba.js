import{S as N,i as k,s as L,e as v,b as p,g as _,d,h as m,y as w,z as A,A as b,B as y,k as O,l as U,m as B,n as $,q as g,r as h,u as E}from"./index.2ec30732.js";import{b as D}from"./paths.d5a50c49.js";import{s as V,j as I,D as q,K as l}from"./model.710b81ea.js";import{u as T}from"./_commonjsHelpers.ebfc7a71.js";import{d as x}from"./PreviousNextPage.fb9f328e.js";import{c as C}from"./ArgsList.348f3ff7.js";function J(s){let n,a;return n=new x({props:{type:"blue",$$slots:{default:[P]},$$scope:{ctx:s}}}),{c(){w(n.$$.fragment)},l(i){A(n.$$.fragment,i)},m(i,e){b(n,i,e),a=!0},p(i,e){const t={};e&67&&(t.$$scope={dirty:e,ctx:i}),n.$set(t)},i(i){a||(_(n.$$.fragment,i),a=!0)},o(i){d(n.$$.fragment,i),a=!1},d(i){y(n,i)}}}function K(s){let n,a=s[0].name.value+"",i;return{c(){n=g("@"),i=g(a)},l(e){n=h(e,"@"),i=h(e,a)},m(e,t){p(e,n,t),p(e,i,t)},p(e,t){t&1&&a!==(a=e[0].name.value+"")&&E(i,a)},d(e){e&&m(n),e&&m(i)}}}function P(s){let n,a,i,e;return a=new C({props:{tooltipText:s[1],direction:"top",align:"center",$$slots:{default:[K]},$$scope:{ctx:s}}}),{c(){n=O("a"),w(a.$$.fragment),this.h()},l(t){n=U(t,"A",{href:!0,class:!0});var r=B(n);A(a.$$.fragment,r),r.forEach(m),this.h()},h(){$(n,"href",i=T.joinUrlPaths(D,`/directives/${s[0].name.value}`)),$(n,"class","override-tooltip-width svelte-a6h330")},m(t,r){p(t,n,r),b(a,n,null),e=!0},p(t,r){const u={};r&2&&(u.tooltipText=t[1]),r&65&&(u.$$scope={dirty:r,ctx:t}),a.$set(u),(!e||r&1&&i!==(i=T.joinUrlPaths(D,`/directives/${t[0].name.value}`)))&&$(n,"href",i)},i(t){e||(_(a.$$.fragment,t),e=!0)},o(t){d(a.$$.fragment,t),e=!1},d(t){t&&m(n),y(a)}}}function z(s){let n=s[2](),a,i,e=n&&J(s);return{c(){e&&e.c(),a=v()},l(t){e&&e.l(t),a=v()},m(t,r){e&&e.m(t,r),p(t,a,r),i=!0},p(t,[r]){n&&e.p(t,r)},i(t){i||(_(e),i=!0)},o(t){d(e),i=!1},d(t){e&&e.d(t),t&&m(a)}}}function F(s,n,a){let{directive:i}=n,e,t;function r(o){switch(o.kind){case l.INT:case l.BOOLEAN:case l.FLOAT:return String(o.value);case l.STRING:case l.ENUM:return`"${o.value}"`;case l.NULL:return"null";case l.LIST:return`[${o.values.map(r).join(", ")}]`;case l.OBJECT:return`{${o.fields.map(c=>`${c.name.value}: ${r(c.value)}`).join(", ")}}`}}function u(){return!!e&&q(e)}function S(o,c){const f=c.find(j=>j.name.value===o.name);return f?r(f.value):JSON.stringify(o.defaultValue)}return s.$$set=o=>{"directive"in o&&a(0,i=o.directive)},s.$$.update=()=>{if(s.$$.dirty&1&&a(3,e=V.getDirective(i.name.value)),s.$$.dirty&9){let o=`@${i.name.value}`;const c=e?I(e):[];c.length>0&&(o+=`(${c.map(f=>`${f.name}: ${S(f,i.arguments||[])}`).join(", ")})`),a(1,t=o.trim())}},[i,t,u,e]}class X extends N{constructor(n){super(),k(this,n,F,z,L,{directive:0})}}export{X as D};
