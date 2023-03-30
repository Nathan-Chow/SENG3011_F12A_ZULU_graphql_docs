import{o as xe,t as se}from"../chunks/index.2ec30732.js";import{S as Ke,a as ze,I as q,g as De,f as Ce,b as ge,c as ce,s as F,i as qe,d as Q,P as Fe,e as Ye}from"../chunks/singletons.ddb66ac5.js";import{b as B}from"../chunks/paths.da5d847e.js";import{R as Me,H as ee}from"../chunks/control.e7f5239e.js";function We(n,i){return n==="/"||i==="ignore"?n:i==="never"?n.endsWith("/")?n.slice(0,-1):n:i==="always"&&!n.endsWith("/")?n+"/":n}function Xe(n){return n.split("%25").map(decodeURI).join("%25")}function Ze(n){for(const i in n)n[i]=decodeURIComponent(n[i]);return n}const Qe=["href","pathname","search","searchParams","toString","toJSON"];function et(n,i){const u=new URL(n);for(const c of Qe){let d=u[c];Object.defineProperty(u,c,{get(){return i(),d},enumerable:!0,configurable:!0})}return tt(u),u}function tt(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const nt="/__data.json";function at(n){return n.replace(/\/$/,"")+nt}function Be(n){try{return JSON.parse(sessionStorage[n])}catch{}}function He(n,i){const u=JSON.stringify(i);try{sessionStorage[n]=u}catch{}}function rt(...n){let i=5381;for(const u of n)if(typeof u=="string"){let c=u.length;for(;c;)i=i*33^u.charCodeAt(--c)}else if(ArrayBuffer.isView(u)){const c=new Uint8Array(u.buffer,u.byteOffset,u.byteLength);let d=c.length;for(;d;)i=i*33^c[--d]}else throw new TypeError("value must be a string or TypedArray");return(i>>>0).toString(36)}const le=window.fetch;window.fetch=(n,i)=>((n instanceof Request?n.method:(i==null?void 0:i.method)||"GET")!=="GET"&&te.delete(be(n)),le(n,i));const te=new Map;function ot(n,i){const u=be(n,i),c=document.querySelector(u);if(c!=null&&c.textContent){const{body:d,...p}=JSON.parse(c.textContent),L=c.getAttribute("data-ttl");return L&&te.set(u,{body:d,init:p,ttl:1e3*Number(L)}),Promise.resolve(new Response(d,p))}return le(n,i)}function it(n,i,u){if(te.size>0){const c=be(n,u),d=te.get(c);if(d){if(performance.now()<d.ttl&&["default","force-cache","only-if-cached",void 0].includes(u==null?void 0:u.cache))return new Response(d.body,d.init);te.delete(c)}}return le(i,u)}function be(n,i){let c=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;if(i!=null&&i.headers||i!=null&&i.body){const d=[];i.headers&&d.push([...new Headers(i.headers)].join(",")),i.body&&(typeof i.body=="string"||ArrayBuffer.isView(i.body))&&d.push(i.body),c+=`[data-hash="${rt(...d)}"]`}return c}const st=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function ct(n){const i=[];return{pattern:n==="/"?/^\/$/:new RegExp(`^${ft(n).map(c=>{const d=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(c);if(d)return i.push({name:d[1],matcher:d[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const p=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(c);if(p)return i.push({name:p[1],matcher:p[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!c)return;const L=c.split(/\[(.+?)\](?!\])/);return"/"+L.map((w,b)=>{if(b%2){if(w.startsWith("x+"))return ye(String.fromCharCode(parseInt(w.slice(2),16)));if(w.startsWith("u+"))return ye(String.fromCharCode(...w.slice(2).split("-").map(I=>parseInt(I,16))));const m=st.exec(w);if(!m)throw new Error(`Invalid param: ${w}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,$,A,v,P]=m;return i.push({name:v,matcher:P,optional:!!$,rest:!!A,chained:A?b===1&&L[0]==="":!1}),A?"(.*?)":$?"([^/]*)?":"([^/]+?)"}return ye(w)}).join("")}).join("")}/?$`),params:i}}function lt(n){return!/^\([^)]+\)$/.test(n)}function ft(n){return n.slice(1).split("/").filter(lt)}function ut(n,i,u){const c={},d=n.slice(1);let p=0;for(let L=0;L<i.length;L+=1){const l=i[L],w=d[L-p];if(l.chained&&l.rest&&p){c[l.name]=d.slice(L-p,L+1).filter(b=>b).join("/"),p=0;continue}if(w===void 0){l.rest&&(c[l.name]="");continue}if(!l.matcher||u[l.matcher](w)){c[l.name]=w;continue}if(l.optional&&l.chained){p++;continue}return}if(!p)return c}function ye(n){return n.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function dt({nodes:n,server_loads:i,dictionary:u,matchers:c}){const d=new Set(i);return Object.entries(u).map(([l,[w,b,m]])=>{const{pattern:$,params:A}=ct(l),v={id:l,exec:P=>{const I=$.exec(P);if(I)return ut(I,A,c)},errors:[1,...m||[]].map(P=>n[P]),layouts:[0,...b||[]].map(L),leaf:p(w)};return v.errors.length=v.layouts.length=Math.max(v.errors.length,v.layouts.length),v});function p(l){const w=l<0;return w&&(l=~l),[w,n[l]]}function L(l){return l===void 0?l:[d.has(l),n[l]]}}async function pt(n){var i;for(const u in n)if(typeof((i=n[u])==null?void 0:i.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([c,d])=>[c,await d])));return n}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const ht=-1,mt=-2,gt=-3,yt=-4,wt=-5,_t=-6;function bt(n,i){if(typeof n=="number")return d(n,!0);if(!Array.isArray(n)||n.length===0)throw new Error("Invalid input");const u=n,c=Array(u.length);function d(p,L=!1){if(p===ht)return;if(p===gt)return NaN;if(p===yt)return 1/0;if(p===wt)return-1/0;if(p===_t)return-0;if(L)throw new Error("Invalid input");if(p in c)return c[p];const l=u[p];if(!l||typeof l!="object")c[p]=l;else if(Array.isArray(l))if(typeof l[0]=="string"){const w=l[0],b=i==null?void 0:i[w];if(b)return c[p]=b(d(l[1]));switch(w){case"Date":c[p]=new Date(l[1]);break;case"Set":const m=new Set;c[p]=m;for(let v=1;v<l.length;v+=1)m.add(d(l[v]));break;case"Map":const $=new Map;c[p]=$;for(let v=1;v<l.length;v+=2)$.set(d(l[v]),d(l[v+1]));break;case"RegExp":c[p]=new RegExp(l[1],l[2]);break;case"Object":c[p]=Object(l[1]);break;case"BigInt":c[p]=BigInt(l[1]);break;case"null":const A=Object.create(null);c[p]=A;for(let v=1;v<l.length;v+=2)A[l[v]]=d(l[v+1]);break;default:throw new Error(`Unknown type ${w}`)}}else{const w=new Array(l.length);c[p]=w;for(let b=0;b<l.length;b+=1){const m=l[b];m!==mt&&(w[b]=d(m))}}else{const w={};c[p]=w;for(const b in l){const m=l[b];w[b]=d(m)}}return c[p]}return d(0)}function vt(n){return n.filter(i=>i!=null)}const z=Be(Ke)??{},Z=Be(ze)??{};function we(n){z[n]=Q()}function Et(n,i){var Ne;const u=dt(n),c=n.nodes[0],d=n.nodes[1];c(),d();const p=document.documentElement,L=[],l=[];let w=null;const b={before_navigate:[],after_navigate:[]};let m={branch:[],error:null,url:null},$=!1,A=!1,v=!0,P=!1,I=!1,G=!1,M=!1,H,N=(Ne=history.state)==null?void 0:Ne[q];N||(N=Date.now(),history.replaceState({...history.state,[q]:N},"",location.href));const fe=z[N];fe&&(history.scrollRestoration="manual",scrollTo(fe.x,fe.y));let V,ve,ne;async function Ee(){ne=ne||Promise.resolve(),await ne,ne=null;const t=new URL(location.href),e=Y(t,!0);w=null,await Le(e,t,[])}function ke(t){l.some(e=>e==null?void 0:e.snapshot)&&(Z[t]=l.map(e=>{var r;return(r=e==null?void 0:e.snapshot)==null?void 0:r.capture()}))}function Se(t){var e;(e=Z[t])==null||e.forEach((r,a)=>{var s,o;(o=(s=l[a])==null?void 0:s.snapshot)==null||o.restore(r)})}async function ue(t,{noScroll:e=!1,replaceState:r=!1,keepFocus:a=!1,state:s={},invalidateAll:o=!1},h,f){return typeof t=="string"&&(t=new URL(t,De(document))),ie({url:t,scroll:e?Q():null,keepfocus:a,redirect_chain:h,details:{state:s,replaceState:r},nav_token:f,accepted:()=>{o&&(M=!0)},blocked:()=>{},type:"goto"})}async function Re(t){return w={id:t.id,promise:Pe(t).then(e=>(e.type==="loaded"&&e.state.error&&(w=null),e))},w.promise}async function ae(...t){const r=u.filter(a=>t.some(s=>a.exec(s))).map(a=>Promise.all([...a.layouts,a.leaf].map(s=>s==null?void 0:s[1]())));await Promise.all(r)}async function Le(t,e,r,a,s,o={},h){var y,g,R;ve=o;let f=t&&await Pe(t);if(f||(f=await je(e,{id:null},await X(new Error(`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)),e=(t==null?void 0:t.url)||e,ve!==o)return!1;if(f.type==="redirect")if(r.length>10||r.includes(e.pathname))f=await re({status:500,error:await X(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return ue(new URL(f.location,e).href,{},[...r,e.pathname],o),!1;else((y=f.props.page)==null?void 0:y.status)>=400&&await F.updated.check()&&await W(e);if(L.length=0,M=!1,P=!0,a&&(we(a),ke(a)),(g=f.props.page)!=null&&g.url&&f.props.page.url.pathname!==e.pathname&&(e.pathname=(R=f.props.page)==null?void 0:R.url.pathname),s&&s.details){const{details:k}=s,O=k.replaceState?0:1;if(k.state[q]=N+=O,history[k.replaceState?"replaceState":"pushState"](k.state,"",e),!k.replaceState){let S=N+1;for(;Z[S]||z[S];)delete Z[S],delete z[S],S+=1}}if(w=null,A?(m=f.state,f.props.page&&(f.props.page.url=e),H.$set(f.props)):Ie(f),s){const{scroll:k,keepfocus:O}=s,{activeElement:S}=document;await se();const _=document.activeElement!==S&&document.activeElement!==document.body;if(!O&&!_&&await _e(),v){const U=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));k?scrollTo(k.x,k.y):U?U.scrollIntoView():scrollTo(0,0)}}else await se();v=!0,f.props.page&&(V=f.props.page),h&&h(),P=!1}function Ie(t){var a;m=t.state;const e=document.querySelector("style[data-sveltekit]");e&&e.remove(),V=t.props.page,H=new n.root({target:i,props:{...t.props,stores:F,components:l},hydrate:!0}),Se(N);const r={from:null,to:{params:m.params,route:{id:((a=m.route)==null?void 0:a.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};b.after_navigate.forEach(s=>s(r)),A=!0}async function J({url:t,params:e,branch:r,status:a,error:s,route:o,form:h}){let f="never";for(const S of r)(S==null?void 0:S.slash)!==void 0&&(f=S.slash);t.pathname=We(t.pathname,f),t.search=t.search;const y={type:"loaded",state:{url:t,params:e,branch:r,error:s,route:o},props:{constructors:vt(r).map(S=>S.node.component)}};h!==void 0&&(y.props.form=h);let g={},R=!V,k=0;for(let S=0;S<Math.max(r.length,m.branch.length);S+=1){const _=r[S],U=m.branch[S];(_==null?void 0:_.data)!==(U==null?void 0:U.data)&&(R=!0),_&&(g={...g,..._.data},R&&(y.props[`data_${k}`]=g),k+=1)}return(!m.url||t.href!==m.url.href||m.error!==s||h!==void 0&&h!==V.form||R)&&(y.props.page={error:s,params:e,route:{id:(o==null?void 0:o.id)??null},status:a,url:new URL(t),form:h??null,data:R?g:V.data}),y}async function de({loader:t,parent:e,url:r,params:a,route:s,server_data_node:o}){var g,R,k;let h=null;const f={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},y=await t();if((g=y.universal)!=null&&g.load){let O=function(..._){for(const U of _){const{href:D}=new URL(U,r);f.dependencies.add(D)}};const S={route:{get id(){return f.route=!0,s.id}},params:new Proxy(a,{get:(_,U)=>(f.params.add(U),_[U])}),data:(o==null?void 0:o.data)??null,url:et(r,()=>{f.url=!0}),async fetch(_,U){let D;_ instanceof Request?(D=_.url,U={body:_.method==="GET"||_.method==="HEAD"?void 0:await _.blob(),cache:_.cache,credentials:_.credentials,headers:_.headers,integrity:_.integrity,keepalive:_.keepalive,method:_.method,mode:_.mode,redirect:_.redirect,referrer:_.referrer,referrerPolicy:_.referrerPolicy,signal:_.signal,...U}):D=_;const C=new URL(D,r);return O(C.href),C.origin===r.origin&&(D=C.href.slice(r.origin.length)),A?it(D,C.href,U):ot(D,U)},setHeaders:()=>{},depends:O,parent(){return f.parent=!0,e()}};h=await y.universal.load.call(null,S)??null,h=h?await pt(h):null}return{node:y,loader:t,server:o,universal:(R=y.universal)!=null&&R.load?{type:"data",data:h,uses:f}:null,data:h??(o==null?void 0:o.data)??null,slash:((k=y.universal)==null?void 0:k.trailingSlash)??(o==null?void 0:o.slash)}}function Ae(t,e,r,a,s){if(M)return!0;if(!a)return!1;if(a.parent&&t||a.route&&e||a.url&&r)return!0;for(const o of a.params)if(s[o]!==m.params[o])return!0;for(const o of a.dependencies)if(L.some(h=>h(new URL(o))))return!0;return!1}function pe(t,e){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?e??null:null}async function Pe({id:t,invalidating:e,url:r,params:a,route:s}){if((w==null?void 0:w.id)===t)return w.promise;const{errors:o,layouts:h,leaf:f}=s,y=[...h,f];o.forEach(E=>E==null?void 0:E().catch(()=>{})),y.forEach(E=>E==null?void 0:E[1]().catch(()=>{}));let g=null;const R=m.url?t!==m.url.pathname+m.url.search:!1,k=m.route?s.id!==m.route.id:!1;let O=!1;const S=y.map((E,x)=>{var K;const j=m.branch[x],T=!!(E!=null&&E[0])&&((j==null?void 0:j.loader)!==E[1]||Ae(O,k,R,(K=j.server)==null?void 0:K.uses,a));return T&&(O=!0),T});if(S.some(Boolean)){try{g=await Ve(r,S)}catch(E){return re({status:E instanceof ee?E.status:500,error:await X(E,{url:r,params:a,route:{id:s.id}}),url:r,route:s})}if(g.type==="redirect")return g}const _=g==null?void 0:g.nodes;let U=!1;const D=y.map(async(E,x)=>{var he;if(!E)return;const j=m.branch[x],T=_==null?void 0:_[x];if((!T||T.type==="skip")&&E[1]===(j==null?void 0:j.loader)&&!Ae(U,k,R,(he=j.universal)==null?void 0:he.uses,a))return j;if(U=!0,(T==null?void 0:T.type)==="error")throw T;return de({loader:E[1],url:r,params:a,route:s,parent:async()=>{var $e;const Te={};for(let me=0;me<x;me+=1)Object.assign(Te,($e=await D[me])==null?void 0:$e.data);return Te},server_data_node:pe(T===void 0&&E[0]?{type:"skip"}:T??null,E[0]?j==null?void 0:j.server:void 0)})});for(const E of D)E.catch(()=>{});const C=[];for(let E=0;E<y.length;E+=1)if(y[E])try{C.push(await D[E])}catch(x){if(x instanceof Me)return{type:"redirect",location:x.location};let j=500,T;if(_!=null&&_.includes(x))j=x.status??j,T=x.error;else if(x instanceof ee)j=x.status,T=x.body;else{if(await F.updated.check())return await W(r);T=await X(x,{params:a,url:r,route:{id:s.id}})}const K=await Oe(E,C,o);return K?await J({url:r,params:a,branch:C.slice(0,K.idx).concat(K.node),status:j,error:T,route:s}):await je(r,{id:s.id},T,j)}else C.push(void 0);return await J({url:r,params:a,branch:C,status:200,error:null,route:s,form:e?void 0:null})}async function Oe(t,e,r){for(;t--;)if(r[t]){let a=t;for(;!e[a];)a-=1;try{return{idx:a+1,node:{node:await r[t](),loader:r[t],data:{},server:null,universal:null}}}catch{continue}}}async function re({status:t,error:e,url:r,route:a}){const s={};let o=null;if(n.server_loads[0]===0)try{const g=await Ve(r,[!0]);if(g.type!=="data"||g.nodes[0]&&g.nodes[0].type!=="data")throw 0;o=g.nodes[0]??null}catch{(r.origin!==location.origin||r.pathname!==location.pathname||$)&&await W(r)}const f=await de({loader:c,url:r,params:s,route:a,parent:()=>Promise.resolve({}),server_data_node:pe(o)}),y={node:await d(),loader:d,universal:null,server:null,data:null};return await J({url:r,params:s,branch:[f,y],status:t,error:e,route:null})}function Y(t,e){if(qe(t,B))return;const r=oe(t);for(const a of u){const s=a.exec(r);if(s)return{id:t.pathname+t.search,invalidating:e,route:a,params:Ze(s),url:t}}}function oe(t){return Xe(t.pathname.slice(B.length)||"/")}function Ue({url:t,type:e,intent:r,delta:a}){var f,y;let s=!1;const o={from:{params:m.params,route:{id:((f=m.route)==null?void 0:f.id)??null},url:m.url},to:{params:(r==null?void 0:r.params)??null,route:{id:((y=r==null?void 0:r.route)==null?void 0:y.id)??null},url:t},willUnload:!r,type:e};a!==void 0&&(o.delta=a);const h={...o,cancel:()=>{s=!0}};return I||b.before_navigate.forEach(g=>g(h)),s?null:o}async function ie({url:t,scroll:e,keepfocus:r,redirect_chain:a,details:s,type:o,delta:h,nav_token:f,accepted:y,blocked:g}){const R=Y(t,!1),k=Ue({url:t,type:o,delta:h,intent:R});if(!k){g();return}const O=N;y(),I=!0,A&&F.navigating.set(k),await Le(R,t,a,O,{scroll:e,keepfocus:r,details:s},f,()=>{I=!1,b.after_navigate.forEach(S=>S(k)),F.navigating.set(null)})}async function je(t,e,r,a){return t.origin===location.origin&&t.pathname===location.pathname&&!$?await re({status:a,error:r,url:t,route:e}):await W(t)}function W(t){return location.href=t.href,new Promise(()=>{})}function Je(){let t;p.addEventListener("mousemove",o=>{const h=o.target;clearTimeout(t),t=setTimeout(()=>{a(h,2)},20)});function e(o){a(o.composedPath()[0],1)}p.addEventListener("mousedown",e),p.addEventListener("touchstart",e,{passive:!0});const r=new IntersectionObserver(o=>{for(const h of o)h.isIntersecting&&(ae(oe(new URL(h.target.href))),r.unobserve(h.target))},{threshold:0});function a(o,h){const f=Ce(o,p);if(!f)return;const{url:y,external:g}=ge(f,B);if(g)return;const R=ce(f);if(!R.reload)if(h<=R.preload_data){const k=Y(y,!1);k&&Re(k)}else h<=R.preload_code&&ae(oe(y))}function s(){r.disconnect();for(const o of p.querySelectorAll("a")){const{url:h,external:f}=ge(o,B);if(f)continue;const y=ce(o);y.reload||(y.preload_code===Fe.viewport&&r.observe(o),y.preload_code===Fe.eager&&ae(oe(h)))}}b.after_navigate.push(s),s()}function X(t,e){return t instanceof ee?t.body:n.hooks.handleError({error:t,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:t=>{xe(()=>(b.after_navigate.push(t),()=>{const e=b.after_navigate.indexOf(t);b.after_navigate.splice(e,1)}))},before_navigate:t=>{xe(()=>(b.before_navigate.push(t),()=>{const e=b.before_navigate.indexOf(t);b.before_navigate.splice(e,1)}))},disable_scroll_handling:()=>{(P||!A)&&(v=!1)},goto:(t,e={})=>ue(t,e,[]),invalidate:t=>{if(typeof t=="function")L.push(t);else{const{href:e}=new URL(t,location.href);L.push(r=>r.href===e)}return Ee()},invalidateAll:()=>(M=!0,Ee()),preload_data:async t=>{const e=new URL(t,De(document)),r=Y(e,!1);if(!r)throw new Error(`Attempted to preload a URL that does not belong to this app: ${e}`);await Re(r)},preload_code:ae,apply_action:async t=>{if(t.type==="error"){const e=new URL(location.href),{branch:r,route:a}=m;if(!a)return;const s=await Oe(m.branch.length,r,a.errors);if(s){const o=await J({url:e,params:m.params,branch:r.slice(0,s.idx).concat(s.node),status:t.status??500,error:t.error,route:a});m=o.state,H.$set(o.props),se().then(_e)}}else if(t.type==="redirect")ue(t.location,{invalidateAll:!0},[]);else{const e={form:t.data,page:{...V,form:t.data,status:t.status}};H.$set(e),t.type==="success"&&se().then(_e)}},_start_router:()=>{var t;history.scrollRestoration="manual",addEventListener("beforeunload",e=>{var a;let r=!1;if(!I){const s={from:{params:m.params,route:{id:((a=m.route)==null?void 0:a.id)??null},url:m.url},to:null,willUnload:!0,type:"leave",cancel:()=>r=!0};b.before_navigate.forEach(o=>o(s))}r?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&(we(N),He(Ke,z),ke(N),He(ze,Z))}),(t=navigator.connection)!=null&&t.saveData||Je(),p.addEventListener("click",e=>{if(e.button||e.which!==1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)return;const r=Ce(e.composedPath()[0],p);if(!r)return;const{url:a,external:s,target:o}=ge(r,B);if(!a)return;if(o==="_parent"||o==="_top"){if(window.parent!==window)return}else if(o&&o!=="_self")return;const h=ce(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:"))return;if(s||h.reload){Ue({url:a,type:"link"})||e.preventDefault(),I=!0;return}const[y,g]=a.href.split("#");if(g!==void 0&&y===location.href.split("#")[0]){G=!0,we(N),m.url=a,F.page.set({...V,url:a}),F.page.notify();return}ie({url:a,scroll:h.noscroll?Q():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:a.href===location.href},accepted:()=>e.preventDefault(),blocked:()=>e.preventDefault(),type:"link"})}),p.addEventListener("submit",e=>{if(e.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(e.target),a=e.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const o=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(qe(o,B))return;const h=e.target,{noscroll:f,reload:y}=ce(h);if(y)return;e.preventDefault(),e.stopPropagation();const g=new FormData(h),R=a==null?void 0:a.getAttribute("name");R&&g.append(R,(a==null?void 0:a.getAttribute("value"))??""),o.search=new URLSearchParams(g).toString(),ie({url:o,scroll:f?Q():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async e=>{var r;if((r=e.state)!=null&&r[q]){if(e.state[q]===N)return;const a=z[e.state[q]];if(m.url.href.split("#")[0]===location.href.split("#")[0]){z[N]=Q(),N=e.state[q],scrollTo(a.x,a.y);return}const s=e.state[q]-N;let o=!1;await ie({url:new URL(location.href),scroll:a,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{N=e.state[q]},blocked:()=>{history.go(-s),o=!0},type:"popstate",delta:s}),o||Se(N)}}),addEventListener("hashchange",()=>{G&&(G=!1,history.replaceState({...history.state,[q]:++N},"",location.href))});for(const e of document.querySelectorAll("link"))e.rel==="icon"&&(e.href=e.href);addEventListener("pageshow",e=>{e.persisted&&F.navigating.set(null)})},_hydrate:async({status:t=200,error:e,node_ids:r,params:a,route:s,data:o,form:h})=>{$=!0;const f=new URL(location.href);({params:a={},route:s={id:null}}=Y(f,!1)||{});let y;try{const g=r.map(async(R,k)=>{const O=o[k];return O!=null&&O.uses&&(O.uses=Ge(O.uses)),de({loader:n.nodes[R],url:f,params:a,route:s,parent:async()=>{const S={};for(let _=0;_<k;_+=1)Object.assign(S,(await g[_]).data);return S},server_data_node:pe(O)})});y=await J({url:f,params:a,branch:await Promise.all(g),status:t,error:e,form:h,route:u.find(({id:R})=>R===s.id)??null})}catch(g){if(g instanceof Me){await W(new URL(g.location,location.href));return}y=await re({status:g instanceof ee?g.status:500,error:await X(g,{url:f,params:a,route:s}),url:f,route:s})}Ie(y)}}}async function Ve(n,i){const u=new URL(n);u.pathname=at(n.pathname),u.searchParams.append("x-sveltekit-invalidated",i.map(d=>d?"1":"").join("_"));const c=await le(u.href);if(!c.ok)throw new ee(c.status,await c.json());return new Promise(async d=>{var m;const p=new Map,L=c.body.getReader(),l=new TextDecoder;function w($){return bt($,{Promise:A=>new Promise((v,P)=>{p.set(A,{fulfil:v,reject:P})})})}let b="";for(;;){const{done:$,value:A}=await L.read();if($&&!b)break;for(b+=!A&&b?`
`:l.decode(A);;){const v=b.indexOf(`
`);if(v===-1)break;const P=JSON.parse(b.slice(0,v));if(b=b.slice(v+1),P.type==="redirect")return d(P);if(P.type==="data")(m=P.nodes)==null||m.forEach(I=>{(I==null?void 0:I.type)==="data"&&(I.uses=Ge(I.uses),I.data=w(I.data))}),d(P);else if(P.type==="chunk"){const{id:I,data:G,error:M}=P,H=p.get(I);p.delete(I),M?H.reject(w(M)):H.fulfil(w(G))}}}})}function Ge(n){return{dependencies:new Set((n==null?void 0:n.dependencies)??[]),params:new Set((n==null?void 0:n.params)??[]),parent:!!(n!=null&&n.parent),route:!!(n!=null&&n.route),url:!!(n!=null&&n.url)}}function _e(){const n=document.querySelector("[autofocus]");if(n)n.focus();else{const i=document.body,u=i.getAttribute("tabindex");return i.tabIndex=-1,i.focus({preventScroll:!0}),u!==null?i.setAttribute("tabindex",u):i.removeAttribute("tabindex"),new Promise(c=>{setTimeout(()=>{var d;c((d=getSelection())==null?void 0:d.removeAllRanges())})})}}async function It(n,i,u){const c=Et(n,i);Ye({client:c}),u?await c._hydrate(u):c.goto(location.href,{replaceState:!0}),c._start_router()}export{It as start};
