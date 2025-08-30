import{u as c,q as r,E as g,a as y,z as P,p as d,B as S,k as h,l as b,o as m,S as T,_ as v}from"./q-gSxxJeWo.js";import{_ as p}from"./q-BKaOGYNW.js";import{p as O,E as w}from"./q-Xim6xbjs.js";import{u as E}from"./q-DZzWbOQ9.js";const I=`/* This only applies when popover isn't supported */
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
`,j=I,L=Object.freeze(Object.defineProperty({__proto__:null,s_DFUr4KYdozs:j},Symbol.toStringTag,{value:"Module"})),R=async e=>{var t;const[o]=c();if(!((t=o.panelRef)!=null&&t.value))return;const n=o.panelRef.value;e.newState==="open"&&(delete n.dataset.closed,n.dataset.open=""),e.newState==="closed"&&(delete n.dataset.open,n.dataset.closed="")},A=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_3Y0XUYf0ylE:R},Symbol.toStringTag,{value:"Module"})),q=()=>{const[e]=c();if(e.value===0){e.value=1;return}},x=Object.freeze(Object.defineProperty({__proto__:null,s_z5LAGIQSXVo:q},Symbol.toStringTag,{value:"Module"})),z=async({track:e,cleanup:o})=>{var _;const[n,t,a,s]=c();e(()=>s.value),a.value=!0;const i=r(()=>p(()=>Promise.resolve().then(()=>X),void 0),"s_p4i9PzXrbqw");let l=document.querySelector("div[data-qwik-ui-popover-polyfill]");l||(l=document.createElement("div"),l.setAttribute("data-qwik-ui-popover-polyfill",""),document.body.appendChild(l)),(_=n.panelRef)!=null&&_.value&&(await i(n.panelRef.value)===null?l.appendChild(n.panelRef.value):t.value=!0,document.dispatchEvent(new CustomEvent("showpopoverpoly")),o(()=>{var u;return(u=n.panelRef)==null?void 0:u.value}))},k=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_KPU0hKnqoXw:z},Symbol.toStringTag,{value:"Module"})),$=e=>{g();const o=y(O),n=`${o.compId}-panel`,t={context:o,givenContextRef:o.panelRef},a=E(e.ref,t);P(r(()=>p(()=>Promise.resolve().then(()=>L),void 0),"s_DFUr4KYdozs"));const s=d(!1),i=d(2),l=d(!1),_=d(!1);return i.value===1&&setTimeout(()=>{l.value=!0},0),S(r(()=>p(()=>Promise.resolve().then(()=>k),void 0),"s_KPU0hKnqoXw",[o,_,s,l])),h("div",{...e,id:n,ref:a,get popover(){return o.manual||e.popover==="manual"?"manual":"auto"},children:[i.value===1&&m(w,null,3,"WN_0"),m(T,null,3,"WN_1")],onBeforeToggle$:[r(()=>p(()=>Promise.resolve().then(()=>A),void 0),"s_3Y0XUYf0ylE",[o]),e.onBeforeToggle$],onToggle$:[r(()=>p(()=>Promise.resolve().then(()=>K),void 0),"s_bMdLT6O0jOc",[o,_]),e.onToggle$],"document:onPopPolyLoad$":r(()=>p(()=>Promise.resolve().then(()=>x),void 0),"s_z5LAGIQSXVo",[i])},{popover:b((f,u)=>f.manual||u.popover==="manual"?"manual":"auto",[o,e])},0,"WN_2")},C=e=>{var o,n;for(;e!=null&&e.parentElement;){if(((o=e.parentElement)==null?void 0:o.tagName)==="DIALOG"||(n=e.parentElement)!=null&&n.hasAttribute("popover"))return e.parentElement;e=e.parentElement}return null},X=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_p4i9PzXrbqw:C},Symbol.toStringTag,{value:"Module"})),D=e=>{var t,a,s;const[o,n]=c();o.isOpenSig.value=e.newState==="open",(t=o.panelRef)!=null&&t.value&&(a=o.panelRef)!=null&&a.value.classList.contains(":popover-open")&&(s=o.panelRef)!=null&&s.value.parentElement&&!n.value&&o.panelRef.value.parentElement.appendChild(o.panelRef.value)},K=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_bMdLT6O0jOc:D},Symbol.toStringTag,{value:"Module"}));export{q as a,z as b,$ as c,C as d,D as e,R as s,j as s_DFUr4KYdozs};
