import{u as f,o as g,q as c,A as x,y as A,a as V,i as z,L as C,r as L,d as X,j as Y,k as b,l as H,m as $,S as W,_hW as h}from"./q-Q7QTf1-t.js";import{_ as u}from"./q-BKaOGYNW.js";import{c as Q,u as U}from"./q-VM9VSI-B.js";const Z=()=>{const[t]=f();t.value=!1},G=Object.freeze(Object.defineProperty({__proto__:null,_hW:h,s_2ldbAEOl2gA:Z},Symbol.toStringTag,{value:"Module"})),B=async t=>{const[e,a]=f();if(!a.isDraggableSig.value||!a.scrollerRef.value||!a.isMouseWheelSig.value)return;const o=e.validIndexesSig.value,n=a.currentIndexSig.value,r=o.indexOf(n),i=t.deltaY>0?1:-1,s=Math.max(0,Math.min(r+i,o.length-1));a.currentIndexSig.value=o[s]},J=Object.freeze(Object.defineProperty({__proto__:null,_hW:h,s_L1GmqTNfhAM:B},Symbol.toStringTag,{value:"Module"})),N=async t=>{const[e,a,o,n]=f();if(n.isMouseDownSig.value||n.startPosSig.value===void 0||!e.scrollerRef.value||!n.boundariesSig.value)return;const r=t.touches[0][n.orientationProps[e.orientationSig.value].clientPosition],i=e.sensitivitySig.value.touch,s=(n.startPosSig.value-r)*i,v=n.transformSig.value[n.orientationProps[e.orientationSig.value].direction]-s;v>=n.boundariesSig.value.min&&v<=n.boundariesSig.value.max&&(n.transformSig.value[n.orientationProps[e.orientationSig.value].direction]=v,await a()),n.startPosSig.value=r,o.value=!0},F=Object.freeze(Object.defineProperty({__proto__:null,_hW:h,s_gYyuXHAdPwQ:N},Symbol.toStringTag,{value:"Module"})),K=async()=>{const[t,e,a,o,n,r]=f();if(!t.scrollerRef.value)return;const i=t.slideRefsArray.value,s=-r.transformSig.value[r.orientationProps[t.orientationSig.value].direction];let v=0,d=1/0;for(let S=0;S<i.length;S++){if(!i[S].value)continue;const P=await r.getSlidePosition(S),w=Math.abs(P-s);w<d&&(v=S,d=w)}const p=await r.getSlidePosition(v);await r.setTransition(!0),r.transformSig.value[r.orientationProps[t.orientationSig.value].direction]=-p,await r.setTransform(),t.currentIndexSig.value=v,r.isMouseDownSig.value=!1,a.value=!1,o.value=!1,n.value=!1,window.removeEventListener("mousemove",e)},ee=Object.freeze(Object.defineProperty({__proto__:null,_hW:h,s_thwVS36cOi4:K},Symbol.toStringTag,{value:"Module"})),te=async t=>{const[e,a,o,n]=f();!e.isDraggableSig.value||!e.scrollerRef.value||(e.startIndexSig.value&&e.scrollStartRef.value&&e.scrollStartRef.value.style.setProperty("--scroll-snap-align","none"),n.startPosSig.value=t.touches[0][n.orientationProps[e.orientationSig.value].clientPosition],o.value=!0,a.value=!1,await n.setBoundaries(),await n.setTransition(!1))},oe=Object.freeze(Object.defineProperty({__proto__:null,_hW:h,s_goZjavtLU0s:te},Symbol.toStringTag,{value:"Module"})),ne=()=>{const[t,e,a]=f();e.value&&(a.value=t.startIndexSig.value!==0&&t.startIndexSig.value!==void 0&&t.currentIndexSig.value!==0)},ae=Object.freeze(Object.defineProperty({__proto__:null,_hW:h,s_Uybcp9hL4Vk:ne},Symbol.toStringTag,{value:"Module"})),re=async t=>{const[e,a,o,n,r]=f();e.isDraggableSig.value&&e.scrollerRef.value&&(await r.setTransition(!0),e.startIndexSig.value&&e.scrollStartRef.value&&e.scrollStartRef.value.style.setProperty("--scroll-snap-align","none"),await r.setBoundaries(),r.isMouseDownSig.value=!0,r.startPosSig.value=t.pageX,window.addEventListener("mousemove",o),window.addEventListener("mouseup",a),n.value=!1)},ie=Object.freeze(Object.defineProperty({__proto__:null,_hW:h,s_JCEwpvzdgFw:re},Symbol.toStringTag,{value:"Module"})),se=async t=>{const[e,a,o]=f();if(!o.isMouseDownSig.value||o.startPosSig.value===void 0||!e.scrollerRef.value||!o.boundariesSig.value)return;const n=t[o.orientationProps[e.orientationSig.value].pagePosition],r=e.sensitivitySig.value.mouse,i=(o.startPosSig.value-n)*r,s=o.transformSig.value[o.orientationProps[e.orientationSig.value].direction]-i;s>=o.boundariesSig.value.min&&s<=o.boundariesSig.value.max&&(o.transformSig.value[o.orientationProps[e.orientationSig.value].direction]=s,await o.setTransition(!1),await o.setTransform()),o.startPosSig.value=n,a.value=!0},le=Object.freeze(Object.defineProperty({__proto__:null,_hW:h,s_ME0WKOgExXg:se},Symbol.toStringTag,{value:"Module"})),ce=async()=>{const[t,e]=f();if(window.matchMedia("(pointer: coarse)").matches||(await e.setTransition(!0),!t.scrollerRef.value))return;const o=await e.getSlidePosition(t.currentIndexSig.value);e.transformSig.value.x=-o,await e.setTransform(),t.scrollerRef.value.style.transition="none"},ue=Object.freeze(Object.defineProperty({__proto__:null,_hW:h,s_bVuor4cftYE:ce},Symbol.toStringTag,{value:"Module"})),de=`@layer qwik-ui {
  [data-qui-carousel-viewport] {
    overflow: hidden;
  }

  [data-qui-carousel-scroller] {
    transform: var(--transform);
    will-change: transform;
    transition: 0.3s transform ease-out;

    display: flex;
    gap: var(--gap);
    flex-direction: var(--orientation);

    /* for initial slide position */
    scroll-snap-type: both mandatory;
    max-height: calc(var(--max-slide-height));
  }

  [data-qui-carousel-slide] {
    /* default, feel free to override */
    --total-gap-width: calc(var(--gap) * (var(--slides-per-view) - 1));
    --available-slide-width: calc(100% - var(--total-gap-width));
    --slide-width: calc(var(--available-slide-width) / var(--slides-per-view));

    flex-basis: var(--slide-width);
    flex-shrink: 0;
    position: relative;
  }

  [data-qui-carousel-scroller][data-initial] {
    overflow: hidden;
  }

  @media (prefers-reduced-motion: reduce) {
    [data-qui-carousel-player] {
      display: none;
    }
  }

  /* workaround until scroll-snap-start is added to CSS */
  [data-qui-scroll-start] {
    --remove-flex-gap: calc(-1 * var(--gap) - 1px);
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    white-space: nowrap;
    visibility: hidden;
    display: none;
  }

  /* should not affect padding on non-scroller carousels */
  [data-qui-carousel-scroller] [data-qui-scroll-start] {
    display: revert;
  }

  /* Offsetting the scroll-start - Horizontal orientation */
  [data-qui-scroll-start][data-orientation='horizontal'][data-start] {
    margin-right: var(--remove-flex-gap);
  }

  [data-qui-scroll-start][data-orientation='horizontal'][data-end] {
    margin-left: var(--remove-flex-gap);
  }

  /* Vertical orientation (remove start gap) */
  [data-qui-scroll-start][data-orientation='vertical'][data-start] {
    margin-top: var(--remove-flex-gap);
  }

  [data-qui-scroll-start]::before {
    content: '';
    height: 1px;
    width: 1px;
    display: block;
    /* changes to none on first interaction */
    scroll-snap-align: var(--scroll-snap-align, start);
  }

  /* position the marker to the start */
  [data-qui-scroll-start][data-start]::before {
    margin-top: calc(var(--remove-flex-gap) * -1);
  }

  /* position the marker to the end */
  [data-qui-scroll-start][data-end]::before {
    margin-top: calc(var(--remove-flex-gap) * 1);
  }

  /* center verically */
  [data-qui-scroll-start][data-center]::before {
    position: absolute;
    margin-top: -0.5px;
    inset: 50%;
  }

  /* remove the marker's snap-align on hover */
  [data-qui-carousel-scroller]:hover [data-qui-scroll-start]::before {
    scroll-snap-align: unset;
  }

  [data-initial] [hidden] {
    display: none;
  }
}
`,ve=de,_e=Object.freeze(Object.defineProperty({__proto__:null,s_swbkXD0aHIQ:ve},Symbol.toStringTag,{value:"Module"})),ge=async function({track:e}){var d;const[a,o,n,r,i]=f();if(e(()=>a.currentIndexSig.value),n.value){n.value=!1;return}if(i.isTouchDeviceSig.value&&r.value||!a.scrollerRef.value||((d=a.scrollStartRef.value)==null||d.style.setProperty("--scroll-snap-align","none"),i.isMouseDownSig.value))return;const s=a.currentIndexSig.value,v=await i.getSlidePosition(s);await i.setTransition(!0),i.transformSig.value[i.orientationProps[a.orientationSig.value].direction]=-v,await i.setTransform(),window.removeEventListener("mousemove",o)},Se=Object.freeze(Object.defineProperty({__proto__:null,_hW:h,s_mkrGHn8eoZs:ge},Symbol.toStringTag,{value:"Module"})),fe=(t,e)=>{const a=g();return c(()=>u(()=>import("./q-CJQYCylM.js"),[]),"s_JBWfcZedntY",[e,t,a])};function he(t){const e=g(),a=g({x:0,y:0,z:0}),o=g(null),n=g(!1),r=g(!1),i=g(!0),s=g();x(c(()=>u(()=>import("./q-CqsOOS0B.js").then(_=>_.a),[]),"s_HGjtmSzFdHY",[t]));const v={vertical:{size:"height",scroll:"scrollHeight",client:"clientHeight",direction:"y",pagePosition:"pageY",clientPosition:"clientY"},horizontal:{size:"width",scroll:"scrollWidth",client:"clientWidth",direction:"x",pagePosition:"pageX",clientPosition:"clientX"}},{direction:d,scroll:p,client:S,size:T}=v[t.orientationSig.value],P=c(()=>u(()=>import("./q-CqsOOS0B.js").then(_=>_.d),[]),"s_vrrpt77xodg",[t,d,a]),w=c(()=>u(()=>import("./q-CqsOOS0B.js").then(_=>_.b),[]),"s_wLay1v0u2ZM",[o,S,t,p]),M=c(()=>u(()=>import("./q-CqsOOS0B.js").then(_=>_.c),[]),"s_MQiUQCHItJ4",[t,s,i]);return{startPosSig:e,transformSig:a,boundariesSig:o,isMouseDownSig:n,isTouchDeviceSig:r,isInitialTransitionSig:i,setTransform:P,setBoundaries:w,setTransition:M,setInitialSlidePos:c(()=>u(()=>import("./q-CqsOOS0B.js").then(_=>_.e),[]),"s_xRNJzycdHf8",[t,P,M,a]),orientationProps:v,getSlidePosition:c(()=>u(()=>import("./q-CqsOOS0B.js").then(_=>_.u),[]),"s_7OnEFPiybSE",[S,t,p,T])}}const pe=t=>{A(c(()=>u(()=>Promise.resolve().then(()=>_e),void 0),"s_swbkXD0aHIQ"));const e=V(Q),a=z(t,["onMouseDown$","onTouchStart$","onTouchMove$","onTouchEnd$"]),o=g(!1),n=g(!0),r=g(!1),i=g(!0),s=g(!1),v=U(e),d=he(e),p=c(()=>u(()=>Promise.resolve().then(()=>le),void 0),"s_ME0WKOgExXg",[e,o,d]),S=c(()=>u(()=>Promise.resolve().then(()=>ee),void 0),"s_thwVS36cOi4",[e,p,o,n,r,d]),T=c(()=>u(()=>Promise.resolve().then(()=>ie),void 0),"s_JCEwpvzdgFw",[e,S,p,o,d]);x(c(()=>u(()=>Promise.resolve().then(()=>Se),void 0),"s_mkrGHn8eoZs",[e,p,o,n,d]));const P=c(()=>u(()=>Promise.resolve().then(()=>ue),void 0),"s_bVuor4cftYE",[e,d]),w=c(()=>u(()=>Promise.resolve().then(()=>oe),void 0),"s_goZjavtLU0s",[e,n,r,d]),M=fe(d.setTransform,1),I=c(()=>u(()=>Promise.resolve().then(()=>F),void 0),"s_gYyuXHAdPwQ",[e,M,n,d]);C("resize",P),x(c(()=>u(()=>Promise.resolve().then(()=>ae),void 0),"s_Uybcp9hL4Vk",[e,i,s]));const j=c(()=>u(()=>Promise.resolve().then(()=>J),void 0),"s_L1GmqTNfhAM",[v,e]);x(c(()=>u(()=>Promise.resolve().then(()=>G),void 0),"s_2ldbAEOl2gA",[i]));let _=0,q=0,y=null,E=null;const k=L(l=>{const m=l.touches[0];!m||(y=l.target.closest("[data-qui-carousel-scroller]"),!y)||(E=y.getAttribute("data-orientation"),_=m.clientX,q=m.clientY)},'e=>{const touch=e.touches[0];if(!touch)return;const target=e.target;activeCarousel=target.closest("[data-qui-carousel-scroller]");if(!activeCarousel)return;carouselOrientation=activeCarousel.getAttribute("data-orientation");touchStartX=touch.clientX;touchStartY=touch.clientY;}'),R=L(l=>{if(!y||!E)return;const m=l.touches[0];if(!m)return;const O=Math.abs(m.clientX-_),D=Math.abs(m.clientY-q);(E==="horizontal"&&O>D&&O>5||E==="vertical"&&D>O&&D>5)&&l.preventDefault()},'e=>{if(!activeCarousel||!carouselOrientation)return;const touch=e.touches[0];if(!touch)return;const deltaX=Math.abs(touch.clientX-touchStartX);const deltaY=Math.abs(touch.clientY-touchStartY);if(carouselOrientation==="horizontal"&&deltaX>deltaY&&deltaX>5){e.preventDefault();}else if(carouselOrientation==="vertical"&&deltaY>deltaX&&deltaY>5){e.preventDefault();}}');return X("div",{onMouseDown$:[T,t.onMouseDown$],onTouchStart$:[k,w,t.onTouchStart$],onTouchMove$:[R,I,t.onTouchMove$],onTouchEnd$:[S,t.onTouchEnd$],onQVisible$:s.value?d.setInitialSlidePos:void 0,onWheel$:j},{"data-qui-carousel-viewport":!0,"preventdefault:wheel":b(l=>l.isMouseWheelSig.value,[e])},Y("div",{ref:e.scrollerRef,"data-qui-carousel-scroller":!0,get"data-draggable"(){return e.isDraggableSig.value?"":void 0},get"data-align"(){return e.alignSig.value},get"data-initial-touch"(){return r.value?"":void 0},get"data-initial"(){return s.value?"":void 0},get"data-orientation"(){return e.orientationSig.value},...a,children:$(W,null,3,"KB_0")},{"data-qui-carousel-scroller":H,"data-draggable":b(l=>l.isDraggableSig.value?"":void 0,[e]),"data-align":b(l=>l.alignSig.value,[e]),"data-initial-touch":b(l=>l.value?"":void 0,[r]),"data-initial":b(l=>l.value?"":void 0,[s]),"data-orientation":b(l=>l.orientationSig.value,[e])},0,null),0,"KB_1")},be=Object.freeze(Object.defineProperty({__proto__:null,s_l5VsvZGk3eE:pe},Symbol.toStringTag,{value:"Module"}));export{h as _hW,be as s,Z as s_2ldbAEOl2gA,re as s_JCEwpvzdgFw,B as s_L1GmqTNfhAM,se as s_ME0WKOgExXg,ne as s_Uybcp9hL4Vk,ce as s_bVuor4cftYE,N as s_gYyuXHAdPwQ,te as s_goZjavtLU0s,pe as s_l5VsvZGk3eE,ge as s_mkrGHn8eoZs,ve as s_swbkXD0aHIQ,K as s_thwVS36cOi4,fe as u};
