import{S as G,i as J,s as q,e as P,b as k,R as x,h as d,q as E,r as D,u as H,C as ee,D as W,k as M,a as B,l as V,m as j,c as C,n as I,F as y,E as te,Q as U,T as R,G as ne,H as le,I as re,J as be,g as _,d as g,U as he,K as oe,Z as ke,M as ye,V as K,w as Te,v as z,f as F,y as T,z as v,A as N,B as w,a3 as ve,p as Ne}from"./index.2ec30732.js";import{d as X,S as we,e as Se,f as Ee,g as De,C as Le}from"./PreviousNextPage.aba6035a.js";import{y as ie,x as Ae,w as Pe,E as Re,g as Ue,t as Be,l as Ce}from"./model.8ddacb6e.js";import{b as se}from"./paths.85a95069.js";import{L as Oe}from"./ChevronDown.50abd158.js";import{u as fe}from"./_commonjsHelpers.ebfc7a71.js";function Ie(o){let e=(o[0]??"-")+"",l;return{c(){l=E(e)},l(t){l=D(t,e)},m(t,n){k(t,l,n)},p(t,n){n&1&&e!==(e=(t[0]??"-")+"")&&H(l,e)},d(t){t&&d(l)}}}function Me(o){let e=JSON.stringify(o[0],null,2)+"",l;return{c(){l=E(e)},l(t){l=D(t,e)},m(t,n){k(t,l,n)},p(t,n){n&1&&e!==(e=JSON.stringify(t[0],null,2)+"")&&H(l,e)},d(t){t&&d(l)}}}function Ve(o){let e,l,t;return{c(){e=E('"'),l=E(o[0]),t=E('"')},l(n){e=D(n,'"'),l=D(n,o[0]),t=D(n,'"')},m(n,r){k(n,e,r),k(n,l,r),k(n,t,r)},p(n,r){r&1&&H(l,n[0])},d(n){n&&d(e),n&&d(l),n&&d(t)}}}function je(o){let e;function l(r,i){return typeof r[0]=="string"?Ve:typeof r[0]=="object"?Me:Ie}let t=l(o),n=t(o);return{c(){n.c(),e=P()},l(r){n.l(r),e=P()},m(r,i){n.m(r,i),k(r,e,i)},p(r,[i]){t===(t=l(r))&&n?n.p(r,i):(n.d(1),n=t(r),n&&(n.c(),n.m(e.parentNode,e)))},i:x,o:x,d(r){n.d(r),r&&d(e)}}}function Ge(o,e,l){let{value:t}=e;return o.$$set=n=>{"value"in n&&l(0,t=n.value)},[t]}class Je extends G{constructor(e){super(),J(this,e,Ge,je,q,{value:0})}}const qe=o=>({}),ae=o=>({});function ze(o){let e;return{c(){e=E(o[2])},l(l){e=D(l,o[2])},m(l,t){k(l,e,t)},p(l,t){t&4&&H(e,l[2])},d(l){l&&d(e)}}}function Fe(o){let e,l,t,n,r,i,f;const u=o[10].default,c=ee(u,o,o[9],null),L=o[10].tooltip,m=ee(L,o,o[9],ae),$=m||ze(o);let S=[o[8]],A={};for(let s=0;s<S.length;s+=1)A=W(A,S[s]);return{c(){e=M("span"),l=M("button"),c&&c.c(),t=B(),n=M("div"),$&&$.c(),this.h()},l(s){e=V(s,"SPAN",{});var a=j(e);l=V(a,"BUTTON",{type:!0,"aria-describedby":!0});var p=j(l);c&&c.l(p),p.forEach(d),t=C(a),n=V(a,"DIV",{role:!0,id:!0});var h=j(n);$&&$.l(h),h.forEach(d),a.forEach(d),this.h()},h(){I(l,"type","button"),I(l,"aria-describedby",o[5]),y(l,"bx--tooltip--a11y",!0),y(l,"bx--tooltip__trigger",!0),y(l,"bx--tooltip__trigger--definition",!0),y(l,"bx--tooltip--hidden",!o[0]),y(l,"bx--tooltip--visible",o[0]),y(l,"bx--tooltip--top",o[4]==="top"),y(l,"bx--tooltip--bottom",o[4]==="bottom"),y(l,"bx--tooltip--align-start",o[3]==="start"),y(l,"bx--tooltip--align-center",o[3]==="center"),y(l,"bx--tooltip--align-end",o[3]==="end"),I(n,"role","tooltip"),I(n,"id",o[5]),y(n,"bx--assistive-text",!0),te(e,A),y(e,"bx--tooltip--definition",!0),y(e,"bx--tooltip--a11y",!0)},m(s,a){k(s,e,a),U(e,l),c&&c.m(l,null),o[17](l),U(e,t),U(e,n),$&&$.m(n,null),r=!0,i||(f=[R(window,"keydown",o[16]),R(l,"click",o[11]),R(l,"mouseover",o[12]),R(l,"mouseenter",o[13]),R(l,"mouseleave",o[14]),R(l,"focus",o[15]),R(l,"focus",o[7]),R(l,"blur",o[6]),R(e,"mouseenter",o[7]),R(e,"mouseleave",o[6])],i=!0)},p(s,[a]){c&&c.p&&(!r||a&512)&&ne(c,u,s,s[9],r?re(u,s[9],a,null):le(s[9]),null),(!r||a&32)&&I(l,"aria-describedby",s[5]),(!r||a&1)&&y(l,"bx--tooltip--hidden",!s[0]),(!r||a&1)&&y(l,"bx--tooltip--visible",s[0]),(!r||a&16)&&y(l,"bx--tooltip--top",s[4]==="top"),(!r||a&16)&&y(l,"bx--tooltip--bottom",s[4]==="bottom"),(!r||a&8)&&y(l,"bx--tooltip--align-start",s[3]==="start"),(!r||a&8)&&y(l,"bx--tooltip--align-center",s[3]==="center"),(!r||a&8)&&y(l,"bx--tooltip--align-end",s[3]==="end"),m?m.p&&(!r||a&512)&&ne(m,L,s,s[9],r?re(L,s[9],a,qe):le(s[9]),ae):$&&$.p&&(!r||a&4)&&$.p(s,r?a:-1),(!r||a&32)&&I(n,"id",s[5]),te(e,A=be(S,[a&256&&s[8]])),y(e,"bx--tooltip--definition",!0),y(e,"bx--tooltip--a11y",!0)},i(s){r||(_(c,s),_($,s),r=!0)},o(s){g(c,s),g($,s),r=!1},d(s){s&&d(e),c&&c.d(s),o[17](null),$&&$.d(s),i=!1,he(f)}}}function He(o,e,l){const t=["tooltipText","open","align","direction","id","ref"];let n=oe(e,t),{$$slots:r={},$$scope:i}=e,{tooltipText:f=""}=e,{open:u=!1}=e,{align:c="center"}=e,{direction:L="bottom"}=e,{id:m="ccs-"+Math.random().toString(36)}=e,{ref:$=null}=e;const S=ke(),A=()=>l(0,u=!1),s=()=>l(0,u=!0);function a(b){K.call(this,o,b)}function p(b){K.call(this,o,b)}function h(b){K.call(this,o,b)}function O(b){K.call(this,o,b)}function Q(b){K.call(this,o,b)}const Z=({key:b})=>{b==="Escape"&&A()};function ge(b){Te[b?"unshift":"push"](()=>{$=b,l(1,$)})}return o.$$set=b=>{e=W(W({},e),ye(b)),l(8,n=oe(e,t)),"tooltipText"in b&&l(2,f=b.tooltipText),"open"in b&&l(0,u=b.open),"align"in b&&l(3,c=b.align),"direction"in b&&l(4,L=b.direction),"id"in b&&l(5,m=b.id),"ref"in b&&l(1,$=b.ref),"$$scope"in b&&l(9,i=b.$$scope)},o.$$.update=()=>{o.$$.dirty&1&&S(u?"open":"close")},[u,$,f,c,L,m,A,s,n,i,r,a,p,h,O,Q,Z,ge]}class Ke extends G{constructor(e){super(),J(this,e,He,Fe,q,{tooltipText:2,open:0,align:3,direction:4,id:5,ref:1})}}const Qe=Ke;function ue(o){let e,l;return e=new X({props:{type:"red",$$slots:{default:[We]},$$scope:{ctx:o}}}),{c(){T(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,n){const r={};n&3&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function Ze(o){let e;return{c(){e=E("Deprecated")},l(l){e=D(l,"Deprecated")},m(l,t){k(l,e,t)},d(l){l&&d(e)}}}function We(o){let e,l;return e=new Qe({props:{tooltipText:o[0],$$slots:{default:[Ze]},$$scope:{ctx:o}}}),{c(){T(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,n){const r={};n&1&&(r.tooltipText=t[0]),n&2&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function Xe(o){let e,l,t=o[0]&&ue(o);return{c(){t&&t.c(),e=P()},l(n){t&&t.l(n),e=P()},m(n,r){t&&t.m(n,r),k(n,e,r),l=!0},p(n,[r]){n[0]?t?(t.p(n,r),r&1&&_(t,1)):(t=ue(n),t.c(),_(t,1),t.m(e.parentNode,e)):t&&(z(),g(t,1,1,()=>{t=null}),F())},i(n){l||(_(t),l=!0)},o(n){g(t),l=!1},d(n){t&&t.d(n),n&&d(e)}}}function Ye(o,e,l){let{reason:t}=e;return o.$$set=n=>{"reason"in n&&l(0,t=n.reason)},[t]}class xe extends G{constructor(e){super(),J(this,e,Ye,Xe,q,{reason:0})}}function ce(o){let e,l;return e=new X({props:{type:"purple",$$slots:{default:[et]},$$scope:{ctx:o}}}),{c(){T(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function et(o){let e;return{c(){e=E("Non-null")},l(l){e=D(l,"Non-null")},m(l,t){k(l,e,t)},d(l){l&&d(e)}}}function tt(o){let e=!ie(o[0]),l,t,n=e&&ce(o);return{c(){n&&n.c(),l=P()},l(r){n&&n.l(r),l=P()},m(r,i){n&&n.m(r,i),k(r,l,i),t=!0},p(r,[i]){i&1&&(e=!ie(r[0])),e?n?i&1&&_(n,1):(n=ce(r),n.c(),_(n,1),n.m(l.parentNode,l)):n&&(z(),g(n,1,1,()=>{n=null}),F())},i(r){t||(_(n),t=!0)},o(r){g(n),t=!1},d(r){n&&n.d(r),r&&d(l)}}}function nt(o,e,l){let{type:t}=e;return o.$$set=n=>{"type"in n&&l(0,t=n.type)},[t]}class lt extends G{constructor(e){super(),J(this,e,nt,tt,q,{type:0})}}function rt(o){let e,l;return e=new Oe({props:{href:fe.joinUrlPaths(se,`/types/${String(o[0].name)}`),$$slots:{default:[st]},$$scope:{ctx:o}}}),{c(){T(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,n){const r={};n&1&&(r.href=fe.joinUrlPaths(se,`/types/${String(t[0].name)}`)),n&3&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function ot(o){let e,l,t;return e=new Y({props:{type:o[0].ofType}}),{c(){T(e.$$.fragment),l=E("!")},l(n){v(e.$$.fragment,n),l=D(n,"!")},m(n,r){N(e,n,r),k(n,l,r),t=!0},p(n,r){const i={};r&1&&(i.type=n[0].ofType),e.$set(i)},i(n){t||(_(e.$$.fragment,n),t=!0)},o(n){g(e.$$.fragment,n),t=!1},d(n){w(e,n),n&&d(l)}}}function it(o){let e,l,t,n;return l=new Y({props:{type:o[0].ofType}}),{c(){e=E("["),T(l.$$.fragment),t=E("]")},l(r){e=D(r,"["),v(l.$$.fragment,r),t=D(r,"]")},m(r,i){k(r,e,i),N(l,r,i),k(r,t,i),n=!0},p(r,i){const f={};i&1&&(f.type=r[0].ofType),l.$set(f)},i(r){n||(_(l.$$.fragment,r),n=!0)},o(r){g(l.$$.fragment,r),n=!1},d(r){r&&d(e),w(l,r),r&&d(t)}}}function st(o){let e=o[0].name+"",l;return{c(){l=E(e)},l(t){l=D(t,e)},m(t,n){k(t,l,n)},p(t,n){n&1&&e!==(e=t[0].name+"")&&H(l,e)},d(t){t&&d(l)}}}function ft(o){let e,l,t,n,r,i,f;const u=[it,ot,rt],c=[];function L(m,$){return $&1&&(e=null),$&1&&(l=null),$&1&&(t=null),e==null&&(e=!!Ae(m[0])),e?0:(l==null&&(l=!!Pe(m[0])),l?1:(t==null&&(t=!!Re(m[0])),t?2:-1))}return~(n=L(o,-1))&&(r=c[n]=u[n](o)),{c(){r&&r.c(),i=P()},l(m){r&&r.l(m),i=P()},m(m,$){~n&&c[n].m(m,$),k(m,i,$),f=!0},p(m,[$]){let S=n;n=L(m,$),n===S?~n&&c[n].p(m,$):(r&&(z(),g(c[S],1,1,()=>{c[S]=null}),F()),~n?(r=c[n],r?r.p(m,$):(r=c[n]=u[n](m),r.c()),_(r,1),r.m(i.parentNode,i)):r=null)},i(m){f||(_(r),f=!0)},o(m){g(r),f=!1},d(m){~n&&c[n].d(m),m&&d(i)}}}function at(o,e,l){let{type:t}=e;return o.$$set=n=>{"type"in n&&l(0,t=n.type)},[t]}class Y extends G{constructor(e){super(),J(this,e,at,ft,q,{type:0})}}function ut(o){let e,l;return e=new Y({props:{type:o[0]}}),{c(){T(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,n){const r={};n&1&&(r.type=t[0]),e.$set(r)},i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function ct(o){let e,l;return e=new X({props:{type:"blue",$$slots:{default:[ut]},$$scope:{ctx:o}}}),{c(){T(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,[n]){const r={};n&3&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function pt(o,e,l){let{type:t}=e;return o.$$set=n=>{"type"in n&&l(0,t=n.type)},[t]}class _t extends G{constructor(e){super(),J(this,e,pt,ct,q,{type:0})}}function pe(o,e,l){const t=o.slice();return t[3]=e[l],t}function _e(o){let e,l,t,n,r,i;return r=new Je({props:{value:o[3].default}}),{c(){e=M("span"),l=E("="),t=B(),n=M("span"),T(r.$$.fragment)},l(f){e=V(f,"SPAN",{});var u=j(e);l=D(u,"="),u.forEach(d),t=C(f),n=V(f,"SPAN",{});var c=j(n);v(r.$$.fragment,c),c.forEach(d)},m(f,u){k(f,e,u),U(e,l),k(f,t,u),k(f,n,u),N(r,n,null),i=!0},p(f,u){const c={};u&1&&(c.value=f[3].default),r.$set(c)},i(f){i||(_(r.$$.fragment,f),i=!0)},o(f){g(r.$$.fragment,f),i=!1},d(f){f&&d(e),f&&d(t),f&&d(n),w(r)}}}function me(o){let e,l;return e=new Le({props:{source:o[3].description}}),{c(){T(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,n){const r={};n&1&&(r.source=t[3].description),e.$set(r)},i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function mt(o){let e,l,t=o[3].name+"",n,r,i,f,u,c,L,m,$,S,A,s=o[3].default&&_e(o);f=new _t({props:{type:o[3].type}}),c=new xe({props:{reason:o[3].deprecationReason}}),m=new lt({props:{type:o[3].type}});let a=o[3].description&&me(o);return{c(){e=M("p"),l=M("span"),n=E(t),r=B(),s&&s.c(),i=B(),T(f.$$.fragment),u=B(),T(c.$$.fragment),L=B(),T(m.$$.fragment),$=B(),a&&a.c(),S=P(),this.h()},l(p){e=V(p,"P",{class:!0});var h=j(e);l=V(h,"SPAN",{style:!0});var O=j(l);n=D(O,t),O.forEach(d),r=C(h),s&&s.l(h),i=C(h),v(f.$$.fragment,h),u=C(h),v(c.$$.fragment,h),L=C(h),v(m.$$.fragment,h),h.forEach(d),$=C(p),a&&a.l(p),S=P(),this.h()},h(){Ne(l,"font-weight","bold"),I(e,"class","arg-name-section svelte-9cf7d2")},m(p,h){k(p,e,h),U(e,l),U(l,n),U(e,r),s&&s.m(e,null),U(e,i),N(f,e,null),U(e,u),N(c,e,null),U(e,L),N(m,e,null),k(p,$,h),a&&a.m(p,h),k(p,S,h),A=!0},p(p,h){(!A||h&1)&&t!==(t=p[3].name+"")&&H(n,t),p[3].default?s?(s.p(p,h),h&1&&_(s,1)):(s=_e(p),s.c(),_(s,1),s.m(e,i)):s&&(z(),g(s,1,1,()=>{s=null}),F());const O={};h&1&&(O.type=p[3].type),f.$set(O);const Q={};h&1&&(Q.reason=p[3].deprecationReason),c.$set(Q);const Z={};h&1&&(Z.type=p[3].type),m.$set(Z),p[3].description?a?(a.p(p,h),h&1&&_(a,1)):(a=me(p),a.c(),_(a,1),a.m(S.parentNode,S)):a&&(z(),g(a,1,1,()=>{a=null}),F())},i(p){A||(_(s),_(f.$$.fragment,p),_(c.$$.fragment,p),_(m.$$.fragment,p),_(a),A=!0)},o(p){g(s),g(f.$$.fragment,p),g(c.$$.fragment,p),g(m.$$.fragment,p),g(a),A=!1},d(p){p&&d(e),s&&s.d(),w(f),w(c),w(m),p&&d($),a&&a.d(p),p&&d(S)}}}function $t(o){let e,l,t;return e=new De({props:{$$slots:{default:[mt]},$$scope:{ctx:o}}}),{c(){T(e.$$.fragment),l=B()},l(n){v(e.$$.fragment,n),l=C(n)},m(n,r){N(e,n,r),k(n,l,r),t=!0},p(n,r){const i={};r&65&&(i.$$scope={dirty:r,ctx:n}),e.$set(i)},i(n){t||(_(e.$$.fragment,n),t=!0)},o(n){g(e.$$.fragment,n),t=!1},d(n){w(e,n),n&&d(l)}}}function $e(o){let e,l;return e=new Ee({props:{$$slots:{default:[$t]},$$scope:{ctx:o}}}),{c(){T(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,n){const r={};n&65&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function dt(o){let e,l,t=o[0],n=[];for(let i=0;i<t.length;i+=1)n[i]=$e(pe(o,t,i));const r=i=>g(n[i],1,1,()=>{n[i]=null});return{c(){for(let i=0;i<n.length;i+=1)n[i].c();e=P()},l(i){for(let f=0;f<n.length;f+=1)n[f].l(i);e=P()},m(i,f){for(let u=0;u<n.length;u+=1)n[u].m(i,f);k(i,e,f),l=!0},p(i,f){if(f&1){t=i[0];let u;for(u=0;u<t.length;u+=1){const c=pe(i,t,u);n[u]?(n[u].p(c,f),_(n[u],1)):(n[u]=$e(c),n[u].c(),_(n[u],1),n[u].m(e.parentNode,e))}for(z(),u=t.length;u<n.length;u+=1)r(u);F()}},i(i){if(!l){for(let f=0;f<t.length;f+=1)_(n[f]);l=!0}},o(i){n=n.filter(Boolean);for(let f=0;f<n.length;f+=1)g(n[f]);l=!1},d(i){ve(n,i),i&&d(e)}}}function gt(o){let e,l;return e=new Se({props:{$$slots:{default:[dt]},$$scope:{ctx:o}}}),{c(){T(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,n){const r={};n&65&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function bt(o){let e,l;return e=new we({props:{condensed:!0,$$slots:{default:[gt]},$$scope:{ctx:o}}}),{c(){T(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,[n]){const r={};n&65&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function de(o){return o.map(e=>({id:e.name,deprecationReason:e.deprecationReason,name:e.name,description:e.description,default:e.defaultValue,type:e.type}))}function ht(o,e,l){let{data:t}=e;const n=Ue(Be.ARGUMENTS_SORTING,"default");let r;return o.$$set=i=>{"data"in i&&l(1,t=i.data)},o.$$.update=()=>{o.$$.dirty&2&&(n==="alphabetical"?l(0,r=Ce.sortBy(de(t),i=>i.name)):l(0,r=de(t)))},[r,t]}class St extends G{constructor(e){super(),J(this,e,ht,bt,q,{data:1})}}export{St as A,xe as D,lt as N,Y as T,_t as a,Je as b,Qe as c};
