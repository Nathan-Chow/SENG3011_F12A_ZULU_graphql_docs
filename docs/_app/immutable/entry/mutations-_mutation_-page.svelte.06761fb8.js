import{S as P,i as M,s as T,a as u,y as d,a9 as w,h as l,c,z as $,b as _,A as g,g as h,d as v,B as y}from"../chunks/index.2ec30732.js";import{F as A,Q as F}from"../chunks/FieldDetails.83303c1b.js";import{P as N}from"../chunks/PreviousNextPage.aef80db6.js";function Q(o){let n,r,t,i,s,f;return document.title=n="Mutation - "+o[0].field.name,t=new A({props:{field:o[0].field,type:F.MUTATION}}),s=new N({props:{page:o[0].page}}),{c(){r=u(),d(t.$$.fragment),i=u(),d(s.$$.fragment)},l(e){w("svelte-1ha51ns",document.head).forEach(l),r=c(e),$(t.$$.fragment,e),i=c(e),$(s.$$.fragment,e)},m(e,a){_(e,r,a),g(t,e,a),_(e,i,a),g(s,e,a),f=!0},p(e,[a]){(!f||a&1)&&n!==(n="Mutation - "+e[0].field.name)&&(document.title=n);const m={};a&1&&(m.field=e[0].field),t.$set(m);const p={};a&1&&(p.page=e[0].page),s.$set(p)},i(e){f||(h(t.$$.fragment,e),h(s.$$.fragment,e),f=!0)},o(e){v(t.$$.fragment,e),v(s.$$.fragment,e),f=!1},d(e){e&&l(r),y(t,e),e&&l(i),y(s,e)}}}function S(o,n,r){let{data:t}=n;return o.$$set=i=>{"data"in i&&r(0,t=i.data)},[t]}class z extends P{constructor(n){super(),M(this,n,S,Q,T,{data:0})}}export{z as default};
