import{u as c,q as p,D as y,a as g,y as P,o as d,A as S,j as b,k as h,m,S as T,_hW as v}from"./q-Q7QTf1-t.js";import{_ as s}from"./q-BKaOGYNW.js";import{p as O,E as w}from"./q-P_sM4yPl.js";import{u as I}from"./q-DAeZLEpY.js";const j=`/* This only applies when popover isn't supported */
@supports not selector(:popover-open) {
  /* The polyfill adds this class when popped out */
  [popover]:not(.\\:popover-open) {
    display: none;
  }
}

.popover-closing {
  display: block !important;
}

/* Strips the user agent styles from the popover when in floating mode */
@layer qwik-ui {
  [data-floating] {
    margin: unset;
    padding: unset;
    border: unset;
    overflow: unset;
    position: absolute;
  }

  [data-floating='fixed'] {
    position: fixed;
  }
}

/** override the polyfill's layer, which gets dynamically imported later on. */
@layer popover-polyfill {
  [data-floating] {
    margin: unset;
    padding: unset;
    border: unset;
    overflow: unset;
    position: absolute;
  }

  [data-floating='fixed'] {
    position: fixed;
  }
}
`,E=j,L=Object.freeze(Object.defineProperty({__proto__:null,s_DFUr4KYdozs:E},Symbol.toStringTag,{value:"Module"})),R=async e=>{var t;const[o]=c();if(!((t=o.panelRef)!=null&&t.value))return;const n=o.panelRef.value;e.newState==="open"&&(delete n.dataset.closed,n.dataset.open=""),e.newState==="closed"&&(delete n.dataset.open,n.dataset.closed="")},A=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_3Y0XUYf0ylE:R},Symbol.toStringTag,{value:"Module"})),q=()=>{const[e]=c();if(e.value===0){e.value=1;return}},x=Object.freeze(Object.defineProperty({__proto__:null,s_z5LAGIQSXVo:q},Symbol.toStringTag,{value:"Module"})),k=async({track:e,cleanup:o})=>{var _;const[n,t,a,r]=c();e(()=>r.value),a.value=!0;const i=p(()=>s(()=>Promise.resolve().then(()=>D),void 0),"s_p4i9PzXrbqw");let l=document.querySelector("div[data-qwik-ui-popover-polyfill]");l||(l=document.createElement("div"),l.setAttribute("data-qwik-ui-popover-polyfill",""),document.body.appendChild(l)),(_=n.panelRef)!=null&&_.value&&(await i(n.panelRef.value)===null?l.appendChild(n.panelRef.value):t.value=!0,document.dispatchEvent(new CustomEvent("showpopoverpoly")),o(()=>{var u;return(u=n.panelRef)==null?void 0:u.value}))},z=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_KPU0hKnqoXw:k},Symbol.toStringTag,{value:"Module"})),C=e=>{y();const o=g(O),n=`${o.compId}-panel`,t={context:o,givenContextRef:o.panelRef},a=I(e.ref,t);P(p(()=>s(()=>Promise.resolve().then(()=>L),void 0),"s_DFUr4KYdozs"));const r=d(!1),i=d(2),l=d(!1),_=d(!1);return i.value===1&&setTimeout(()=>{l.value=!0},0),S(p(()=>s(()=>Promise.resolve().then(()=>z),void 0),"s_KPU0hKnqoXw",[o,_,r,l])),b("div",{...e,id:n,ref:a,get popover(){return o.manual||e.popover==="manual"?"manual":"auto"},children:[i.value===1&&m(w,null,3,"WN_0"),m(T,null,3,"WN_1")],onBeforeToggle$:[p(()=>s(()=>Promise.resolve().then(()=>A),void 0),"s_3Y0XUYf0ylE",[o]),e.onBeforeToggle$],onToggle$:[p(()=>s(()=>Promise.resolve().then(()=>K),void 0),"s_bMdLT6O0jOc",[o,_]),e.onToggle$],"document:onPopPolyLoad$":p(()=>s(()=>Promise.resolve().then(()=>x),void 0),"s_z5LAGIQSXVo",[i])},{popover:h((f,u)=>f.manual||u.popover==="manual"?"manual":"auto",[o,e])},0,"WN_2")},$=Object.freeze(Object.defineProperty({__proto__:null,s_WupmyACoTIk:C},Symbol.toStringTag,{value:"Module"})),X=e=>{var o,n;for(;e!=null&&e.parentElement;){if(((o=e.parentElement)==null?void 0:o.tagName)==="DIALOG"||(n=e.parentElement)!=null&&n.hasAttribute("popover"))return e.parentElement;e=e.parentElement}return null},D=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_p4i9PzXrbqw:X},Symbol.toStringTag,{value:"Module"})),M=e=>{var t,a,r;const[o,n]=c();o.isOpenSig.value=e.newState==="open",(t=o.panelRef)!=null&&t.value&&(a=o.panelRef)!=null&&a.value.classList.contains(":popover-open")&&(r=o.panelRef)!=null&&r.value.parentElement&&!n.value&&o.panelRef.value.parentElement.appendChild(o.panelRef.value)},K=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_bMdLT6O0jOc:M},Symbol.toStringTag,{value:"Module"}));export{v as _hW,$ as p,R as s_3Y0XUYf0ylE,E as s_DFUr4KYdozs,k as s_KPU0hKnqoXw,C as s_WupmyACoTIk,M as s_bMdLT6O0jOc,X as s_p4i9PzXrbqw,q as s_z5LAGIQSXVo};
