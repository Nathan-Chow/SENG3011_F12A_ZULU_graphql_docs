import{S as P,i as y,s as b,a as u,y as d,a9 as w,h as m,c,z as $,b as _,A as g,g as v,d as S,B as h}from"../chunks/index.2ec30732.js";import{F as x,Q as B}from"../chunks/FieldDetails.dfc13da1.js";import{P as C}from"../chunks/PreviousNextPage.2a89fe6b.js";function F(o){let s,r,t,i,n,f;return document.title=s="Subscription - "+o[0].field.name,t=new x({props:{field:o[0].field,type:B.SUBSCRIPTION}}),n=new C({props:{page:o[0].page}}),{c(){r=u(),d(t.$$.fragment),i=u(),d(n.$$.fragment)},l(e){w("svelte-40g4xm",document.head).forEach(m),r=c(e),$(t.$$.fragment,e),i=c(e),$(n.$$.fragment,e)},m(e,a){_(e,r,a),g(t,e,a),_(e,i,a),g(n,e,a),f=!0},p(e,[a]){(!f||a&1)&&s!==(s="Subscription - "+e[0].field.name)&&(document.title=s);const l={};a&1&&(l.field=e[0].field),t.$set(l);const p={};a&1&&(p.page=e[0].page),n.$set(p)},i(e){f||(v(t.$$.fragment,e),v(n.$$.fragment,e),f=!0)},o(e){S(t.$$.fragment,e),S(n.$$.fragment,e),f=!1},d(e){e&&m(r),h(t,e),e&&m(i),h(n,e)}}}function I(o,s,r){let{data:t}=s;return o.$$set=i=>{"data"in i&&r(0,t=i.data)},[t]}class q extends P{constructor(s){super(),y(this,s,I,F,b,{data:0})}}export{q as default};
