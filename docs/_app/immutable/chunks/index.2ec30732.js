function w(){}const ht=t=>t;function mt(t,e){for(const n in e)t[n]=e[n];return t}function Z(t){return t()}function Q(){return Object.create(null)}function v(t){t.forEach(Z)}function G(t){return typeof t=="function"}function Wt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let S;function It(t,e){return S||(S=document.createElement("a")),S.href=e,t===S.href}function pt(t){return Object.keys(t).length===0}function tt(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Jt(t){let e;return tt(t,n=>e=n)(),e}function Kt(t,e,n){t.$$.on_destroy.push(tt(e,n))}function Qt(t,e,n,i){if(t){const s=et(t,e,n,i);return t[0](s)}}function et(t,e,n,i){return t[1]&&i?mt(n.ctx.slice(),t[1](i(e))):n.ctx}function Ut(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function Vt(t,e,n,i,s,l){if(s){const r=et(e,n,i,l);t.p(r,s)}}function Xt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Yt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Zt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function te(t){const e={};for(const n in t)e[n]=!0;return e}function ee(t,e,n){return t.set(n),e}const nt=typeof window<"u";let gt=nt?()=>window.performance.now():()=>Date.now(),W=nt?t=>requestAnimationFrame(t):w;const x=new Set;function it(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&W(it)}function yt(t){let e;return x.size===0&&W(it),{promise:new Promise(n=>{x.add(e={c:t,f:n})}),abort(){x.delete(e)}}}let P=!1;function $t(){P=!0}function bt(){P=!1}function xt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function wt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const _=e[u];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,_=(s>0&&e[n[s]].claim_order<=u?s+1:xt(1,s,h=>e[n[h]].claim_order,u))-1;i[c]=n[_]+1;const a=_+1;n[a]=c,s=Math.max(a,s)}const l=[],r=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);l.reverse(),r.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<r.length;c++){for(;u<l.length&&r[c].claim_order>=l[u].claim_order;)u++;const _=u<l.length?l[u]:null;t.insertBefore(r[c],_)}}function vt(t,e){t.appendChild(e)}function st(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Et(t){const e=I("style");return Nt(st(t),e),e.sheet}function Nt(t,e){return vt(t.head||t,e),e.sheet}function Tt(t,e){if(P){for(wt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function kt(t,e,n){t.insertBefore(e,n||null)}function At(t,e,n){P&&!n?Tt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function k(t){t.parentNode&&t.parentNode.removeChild(t)}function ne(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function I(t){return document.createElement(t)}function rt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function J(t){return document.createTextNode(t)}function ie(){return J(" ")}function se(){return J("")}function re(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function oe(t){return function(e){return e.preventDefault(),t.call(this,e)}}function ce(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function K(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function le(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:K(t,i,e[i])}function ue(t,e){for(const n in e)K(t,n,e[n])}function ae(t,e){Object.keys(e).forEach(n=>{Ct(t,n,e[n])})}function Ct(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:K(t,e,n)}function St(t){return Array.from(t.childNodes)}function ot(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ct(t,e,n,i,s=!1){ot(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function lt(t,e,n,i){return ct(t,s=>s.nodeName===e,s=>{const l=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||l.push(o.name)}l.forEach(r=>s.removeAttribute(r))},()=>i(e))}function fe(t,e,n){return lt(t,e,n,I)}function _e(t,e,n){return lt(t,e,n,rt)}function jt(t,e){return ct(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>J(e),!0)}function de(t){return jt(t," ")}function U(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function he(t,e){const n=U(t,"HTML_TAG_START",0),i=U(t,"HTML_TAG_END",n);if(n===i)return new V(void 0,e);ot(t);const s=t.splice(n,i-n+1);k(s[0]),k(s[s.length-1]);const l=s.slice(1,s.length-1);for(const r of l)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new V(l,e)}function me(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function pe(t,e){t.value=e??""}function ge(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ye(t,e,n){t.classList[n?"add":"remove"](e)}function ut(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function $e(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const l=s.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(s)):l===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class Dt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=rt(n.nodeName):this.e=I(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)kt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(k)}}class V extends Dt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)At(this.t,this.n[n],e)}}function be(t,e){return new t(e)}const M=new Map;let H=0;function Mt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ht(t,e){const n={stylesheet:Et(e),rules:{}};return M.set(t,n),n}function X(t,e,n,i,s,l,r,o=0){const c=16.666/i;let u=`{
`;for(let g=0;g<=1;g+=c){const y=e+(n-e)*l(g);u+=g*100+`%{${r(y,1-y)}}
`}const _=u+`100% {${r(n,1-n)}}
}`,a=`__svelte_${Mt(_)}_${o}`,h=st(t),{stylesheet:f,rules:d}=M.get(h)||Ht(h,t);d[a]||(d[a]=!0,f.insertRule(`@keyframes ${a} ${_}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${i}ms linear ${s}ms 1 both`,H+=1,a}function Ot(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),H-=s,H||Pt())}function Pt(){W(()=>{H||(M.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&k(e)}),M.clear())})}let A;function T(t){A=t}function E(){if(!A)throw new Error("Function called outside component initialization");return A}function xe(t){E().$$.on_mount.push(t)}function we(t){E().$$.after_update.push(t)}function ve(t){E().$$.on_destroy.push(t)}function Ee(){const t=E();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const l=ut(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,l)}),!l.defaultPrevented}return!0}}function Ne(t,e){return E().$$.context.set(t,e),e}function Te(t){return E().$$.context.get(t)}function ke(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const b=[],Y=[],j=[],z=[],at=Promise.resolve();let F=!1;function ft(){F||(F=!0,at.then(_t))}function Ae(){return ft(),at}function O(t){j.push(t)}function Ce(t){z.push(t)}const q=new Set;let $=0;function _t(){if($!==0)return;const t=A;do{try{for(;$<b.length;){const e=b[$];$++,T(e),Lt(e.$$)}}catch(e){throw b.length=0,$=0,e}for(T(null),b.length=0,$=0;Y.length;)Y.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];q.has(n)||(q.add(n),n())}j.length=0}while(b.length);for(;z.length;)z.pop()();F=!1,q.clear(),T(t)}function Lt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}let N;function Rt(){return N||(N=Promise.resolve(),N.then(()=>{N=null})),N}function B(t,e,n){t.dispatchEvent(ut(`${e?"intro":"outro"}${n}`))}const D=new Set;let p;function Se(){p={r:0,c:[],p}}function je(){p.r||v(p.c),p=p.p}function qt(t,e){t&&t.i&&(D.delete(t),t.i(e))}function De(t,e,n,i){if(t&&t.o){if(D.has(t))return;D.add(t),p.c.push(()=>{D.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Bt={duration:0};function Me(t,e,n,i){const s={direction:"both"};let l=e(t,n,s),r=i?0:1,o=null,c=null,u=null;function _(){u&&Ot(t,u)}function a(f,d){const m=f.b-r;return d*=Math.abs(m),{a:r,b:f.b,d:m,duration:d,start:f.start,end:f.start+d,group:f.group}}function h(f){const{delay:d=0,duration:m=300,easing:g=ht,tick:y=w,css:L}=l||Bt,R={start:gt()+d,b:f};f||(R.group=p,p.r+=1),o||c?c=R:(L&&(_(),u=X(t,r,f,m,d,g,L)),f&&y(0,1),o=a(R,m),O(()=>B(t,f,"start")),yt(C=>{if(c&&C>c.start&&(o=a(c,m),c=null,B(t,o.b,"start"),L&&(_(),u=X(t,r,o.b,o.duration,0,g,l.css))),o){if(C>=o.end)y(r=o.b,1-r),B(t,o.b,"end"),c||(o.b?_():--o.group.r||v(o.group.c)),o=null;else if(C>=o.start){const dt=C-o.start;r=o.a+o.d*g(dt/o.duration),y(r,1-r)}}return!!(o||c)}))}return{run(f){G(l)?Rt().then(()=>{l=l(s),h(f)}):h(f)},end(){_(),o=c=null}}}const He=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Oe(t,e){const n={},i={},s={$$scope:1};let l=t.length;for(;l--;){const r=t[l],o=e[l];if(o){for(const c in r)c in o||(i[c]=1);for(const c in o)s[c]||(n[c]=o[c],s[c]=1);t[l]=o}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Pe(t){return typeof t=="object"&&t!==null?t:{}}function Le(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Re(t){t&&t.c()}function qe(t,e){t&&t.l(e)}function zt(t,e,n,i){const{fragment:s,after_update:l}=t.$$;s&&s.m(e,n),i||O(()=>{const r=t.$$.on_mount.map(Z).filter(G);t.$$.on_destroy?t.$$.on_destroy.push(...r):v(r),t.$$.on_mount=[]}),l.forEach(O)}function Ft(t,e){const n=t.$$;n.fragment!==null&&(v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Gt(t,e){t.$$.dirty[0]===-1&&(b.push(t),ft(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Be(t,e,n,i,s,l,r,o=[-1]){const c=A;T(t);const u=t.$$={fragment:null,ctx:[],props:l,update:w,not_equal:s,bound:Q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Q(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};r&&r(u.root);let _=!1;if(u.ctx=n?n(t,e.props||{},(a,h,...f)=>{const d=f.length?f[0]:h;return u.ctx&&s(u.ctx[a],u.ctx[a]=d)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](d),_&&Gt(t,a)),h}):[],u.update(),_=!0,v(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){$t();const a=St(e.target);u.fragment&&u.fragment.l(a),a.forEach(k)}else u.fragment&&u.fragment.c();e.intro&&qt(t.$$.fragment),zt(t,e.target,e.anchor,e.customElement),bt(),_t()}T(c)}class ze{$destroy(){Ft(this,1),this.$destroy=w}$on(e,n){if(!G(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!pt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Pe as $,zt as A,Ft as B,Qt as C,mt as D,le as E,ye as F,Vt as G,Xt as H,Ut as I,Oe as J,Zt as K,Kt as L,Yt as M,rt as N,_e as O,ue as P,Tt as Q,w as R,ze as S,re as T,v as U,ke as V,O as W,Le as X,Ce as Y,Ee as Z,pe as _,ie as a,ce as a0,Me as a1,te as a2,ne as a3,Jt as a4,ee as a5,V as a6,he as a7,ve as a8,$e as a9,He as aa,Te as ab,Ne as ac,oe as ad,ae,tt as af,G as ag,It as ah,At as b,de as c,De as d,se as e,je as f,qt as g,k as h,Be as i,we as j,I as k,fe as l,St as m,K as n,xe as o,ge as p,J as q,jt as r,Wt as s,Ae as t,me as u,Se as v,Y as w,be as x,Re as y,qe as z};