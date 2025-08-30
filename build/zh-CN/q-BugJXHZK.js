import{u as S,p as _,q as c,B as x,z as A,a as z,j as V,M as C,s as L,e as X,k as Y,l as w,m as H,o as $,S as W,_ as f}from"./q-gSxxJeWo.js";import{_ as u}from"./q-BKaOGYNW.js";import{c as Q,u as U}from"./q-BVmIlQDv.js";const Z=()=>{const[t]=S();t.value=!1},B=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_2ldbAEOl2gA:Z},Symbol.toStringTag,{value:"Module"})),G=async t=>{const[e,a]=S();if(!a.isDraggableSig.value||!a.scrollerRef.value||!a.isMouseWheelSig.value)return;const o=e.validIndexesSig.value,n=a.currentIndexSig.value,i=o.indexOf(n),r=t.deltaY>0?1:-1,s=Math.max(0,Math.min(i+r,o.length-1));a.currentIndexSig.value=o[s]},J=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_L1GmqTNfhAM:G},Symbol.toStringTag,{value:"Module"})),N=async t=>{const[e,a,o,n]=S();if(n.isMouseDownSig.value||n.startPosSig.value===void 0||!e.scrollerRef.value||!n.boundariesSig.value)return;const i=t.touches[0][n.orientationProps[e.orientationSig.value].clientPosition],r=e.sensitivitySig.value.touch,s=(n.startPosSig.value-i)*r,v=n.transformSig.value[n.orientationProps[e.orientationSig.value].direction]-s;v>=n.boundariesSig.value.min&&v<=n.boundariesSig.value.max&&(n.transformSig.value[n.orientationProps[e.orientationSig.value].direction]=v,await a()),n.startPosSig.value=i,o.value=!0},F=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_gYyuXHAdPwQ:N},Symbol.toStringTag,{value:"Module"})),K=async()=>{const[t,e,a,o,n,i]=S();if(!t.scrollerRef.value)return;const r=t.slideRefsArray.value,s=-i.transformSig.value[i.orientationProps[t.orientationSig.value].direction];let v=0,d=1/0;for(let g=0;g<r.length;g++){if(!r[g].value)continue;const m=await i.getSlidePosition(g),P=Math.abs(m-s);P<d&&(v=g,d=P)}const h=await i.getSlidePosition(v);await i.setTransition(!0),i.transformSig.value[i.orientationProps[t.orientationSig.value].direction]=-h,await i.setTransform(),t.currentIndexSig.value=v,i.isMouseDownSig.value=!1,a.value=!1,o.value=!1,n.value=!1,window.removeEventListener("mousemove",e)},ee=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_thwVS36cOi4:K},Symbol.toStringTag,{value:"Module"})),te=async t=>{const[e,a,o,n]=S();!e.isDraggableSig.value||!e.scrollerRef.value||(e.startIndexSig.value&&e.scrollStartRef.value&&e.scrollStartRef.value.style.setProperty("--scroll-snap-align","none"),n.startPosSig.value=t.touches[0][n.orientationProps[e.orientationSig.value].clientPosition],o.value=!0,a.value=!1,await n.setBoundaries(),await n.setTransition(!1))},oe=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_goZjavtLU0s:te},Symbol.toStringTag,{value:"Module"})),ne=()=>{const[t,e,a]=S();e.value&&(a.value=t.startIndexSig.value!==0&&t.startIndexSig.value!==void 0&&t.currentIndexSig.value!==0)},ae=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_Uybcp9hL4Vk:ne},Symbol.toStringTag,{value:"Module"})),ie=async t=>{const[e,a,o,n,i]=S();e.isDraggableSig.value&&e.scrollerRef.value&&(await i.setTransition(!0),e.startIndexSig.value&&e.scrollStartRef.value&&e.scrollStartRef.value.style.setProperty("--scroll-snap-align","none"),await i.setBoundaries(),i.isMouseDownSig.value=!0,i.startPosSig.value=t.pageX,window.addEventListener("mousemove",o),window.addEventListener("mouseup",a),n.value=!1)},re=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_JCEwpvzdgFw:ie},Symbol.toStringTag,{value:"Module"})),se=async t=>{const[e,a,o]=S();if(!o.isMouseDownSig.value||o.startPosSig.value===void 0||!e.scrollerRef.value||!o.boundariesSig.value)return;const n=t[o.orientationProps[e.orientationSig.value].pagePosition],i=e.sensitivitySig.value.mouse,r=(o.startPosSig.value-n)*i,s=o.transformSig.value[o.orientationProps[e.orientationSig.value].direction]-r;s>=o.boundariesSig.value.min&&s<=o.boundariesSig.value.max&&(o.transformSig.value[o.orientationProps[e.orientationSig.value].direction]=s,await o.setTransition(!1),await o.setTransform()),o.startPosSig.value=n,a.value=!0},le=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_ME0WKOgExXg:se},Symbol.toStringTag,{value:"Module"})),ce=async()=>{const[t,e]=S();if(window.matchMedia("(pointer: coarse)").matches||(await e.setTransition(!0),!t.scrollerRef.value))return;const o=await e.getSlidePosition(t.currentIndexSig.value);e.transformSig.value.x=-o,await e.setTransform(),t.scrollerRef.value.style.transition="none"},ue=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_bVuor4cftYE:ce},Symbol.toStringTag,{value:"Module"})),de=`@layer qwik-ui {
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
`,ve=de,_e=Object.freeze(Object.defineProperty({__proto__:null,s_swbkXD0aHIQ:ve},Symbol.toStringTag,{value:"Module"})),ge=async function({track:e}){var d;const[a,o,n,i,r]=S();if(e(()=>a.currentIndexSig.value),n.value){n.value=!1;return}if(r.isTouchDeviceSig.value&&i.value||!a.scrollerRef.value||((d=a.scrollStartRef.value)==null||d.style.setProperty("--scroll-snap-align","none"),r.isMouseDownSig.value))return;const s=a.currentIndexSig.value,v=await r.getSlidePosition(s);await r.setTransition(!0),r.transformSig.value[r.orientationProps[a.orientationSig.value].direction]=-v,await r.setTransform(),window.removeEventListener("mousemove",o)},Se=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_mkrGHn8eoZs:ge},Symbol.toStringTag,{value:"Module"})),fe=(t,e)=>{const a=_();return c(()=>u(()=>import("./q-wIaenawc.js"),[]),"s_JBWfcZedntY",[e,t,a])};function he(t){const e=_(),a=_({x:0,y:0,z:0}),o=_(null),n=_(!1),i=_(!1),r=_(!0),s=_();x(c(()=>u(()=>import("./q-B1ONaisP.js"),[]),"s_HGjtmSzFdHY",[t]));const v={vertical:{size:"height",scroll:"scrollHeight",client:"clientHeight",direction:"y",pagePosition:"pageY",clientPosition:"clientY"},horizontal:{size:"width",scroll:"scrollWidth",client:"clientWidth",direction:"x",pagePosition:"pageX",clientPosition:"clientX"}},{direction:d,scroll:h,client:g,size:b}=v[t.orientationSig.value],m=c(()=>u(()=>import("./q-D_7bKs_4.js"),[]),"s_vrrpt77xodg",[t,d,a]),P=c(()=>u(()=>import("./q-DdFtcEe6.js"),[]),"s_wLay1v0u2ZM",[o,g,t,h]),T=c(()=>u(()=>import("./q-w64rZAkV.js"),[]),"s_MQiUQCHItJ4",[t,s,r]);return{startPosSig:e,transformSig:a,boundariesSig:o,isMouseDownSig:n,isTouchDeviceSig:i,isInitialTransitionSig:r,setTransform:m,setBoundaries:P,setTransition:T,setInitialSlidePos:c(()=>u(()=>import("./q-CBgW5eS2.js"),[]),"s_xRNJzycdHf8",[t,m,T,a]),orientationProps:v,getSlidePosition:c(()=>u(()=>import("./q-DxdEdxMh.js").then(M=>M.u),[]),"s_7OnEFPiybSE",[g,t,h,b])}}const we=t=>{A(c(()=>u(()=>Promise.resolve().then(()=>_e),void 0),"s_swbkXD0aHIQ"));const e=z(Q),a=V(t,["onMouseDown$","onTouchStart$","onTouchMove$","onTouchEnd$"]),o=_(!1),n=_(!0),i=_(!1),r=_(!0),s=_(!1),v=U(e),d=he(e),h=c(()=>u(()=>Promise.resolve().then(()=>le),void 0),"s_ME0WKOgExXg",[e,o,d]),g=c(()=>u(()=>Promise.resolve().then(()=>ee),void 0),"s_thwVS36cOi4",[e,h,o,n,i,d]),b=c(()=>u(()=>Promise.resolve().then(()=>re),void 0),"s_JCEwpvzdgFw",[e,g,h,o,d]);x(c(()=>u(()=>Promise.resolve().then(()=>Se),void 0),"s_mkrGHn8eoZs",[e,h,o,n,d]));const m=c(()=>u(()=>Promise.resolve().then(()=>ue),void 0),"s_bVuor4cftYE",[e,d]),P=c(()=>u(()=>Promise.resolve().then(()=>oe),void 0),"s_goZjavtLU0s",[e,n,i,d]),T=fe(d.setTransform,1),I=c(()=>u(()=>Promise.resolve().then(()=>F),void 0),"s_gYyuXHAdPwQ",[e,T,n,d]);C("resize",m),x(c(()=>u(()=>Promise.resolve().then(()=>ae),void 0),"s_Uybcp9hL4Vk",[e,r,s]));const j=c(()=>u(()=>Promise.resolve().then(()=>J),void 0),"s_L1GmqTNfhAM",[v,e]);x(c(()=>u(()=>Promise.resolve().then(()=>B),void 0),"s_2ldbAEOl2gA",[r]));let M=0,q=0,y=null,E=null;const R=L(l=>{const p=l.touches[0];!p||(y=l.target.closest("[data-qui-carousel-scroller]"),!y)||(E=y.getAttribute("data-orientation"),M=p.clientX,q=p.clientY)},'e=>{const touch=e.touches[0];if(!touch)return;const target=e.target;activeCarousel=target.closest("[data-qui-carousel-scroller]");if(!activeCarousel)return;carouselOrientation=activeCarousel.getAttribute("data-orientation");touchStartX=touch.clientX;touchStartY=touch.clientY;}'),k=L(l=>{if(!y||!E)return;const p=l.touches[0];if(!p)return;const O=Math.abs(p.clientX-M),D=Math.abs(p.clientY-q);(E==="horizontal"&&O>D&&O>5||E==="vertical"&&D>O&&D>5)&&l.preventDefault()},'e=>{if(!activeCarousel||!carouselOrientation)return;const touch=e.touches[0];if(!touch)return;const deltaX=Math.abs(touch.clientX-touchStartX);const deltaY=Math.abs(touch.clientY-touchStartY);if(carouselOrientation==="horizontal"&&deltaX>deltaY&&deltaX>5){e.preventDefault();}else if(carouselOrientation==="vertical"&&deltaY>deltaX&&deltaY>5){e.preventDefault();}}');return X("div",{onMouseDown$:[b,t.onMouseDown$],onTouchStart$:[R,P,t.onTouchStart$],onTouchMove$:[k,I,t.onTouchMove$],onTouchEnd$:[g,t.onTouchEnd$],onQVisible$:s.value?d.setInitialSlidePos:void 0,onWheel$:j},{"data-qui-carousel-viewport":!0,"preventdefault:wheel":w(l=>l.isMouseWheelSig.value,[e])},Y("div",{ref:e.scrollerRef,"data-qui-carousel-scroller":!0,get"data-draggable"(){return e.isDraggableSig.value?"":void 0},get"data-align"(){return e.alignSig.value},get"data-initial-touch"(){return i.value?"":void 0},get"data-initial"(){return s.value?"":void 0},get"data-orientation"(){return e.orientationSig.value},...a,children:$(W,null,3,"KB_0")},{"data-qui-carousel-scroller":H,"data-draggable":w(l=>l.isDraggableSig.value?"":void 0,[e]),"data-align":w(l=>l.alignSig.value,[e]),"data-initial-touch":w(l=>l.value?"":void 0,[i]),"data-initial":w(l=>l.value?"":void 0,[s]),"data-orientation":w(l=>l.orientationSig.value,[e])},0,null),0,"KB_1")};export{f as _hW,N as a,K as b,te as c,ne as d,ie as e,se as f,ce as g,ve as h,ge as i,we as j,G as s,Z as s_2ldbAEOl2gA,fe as u};
