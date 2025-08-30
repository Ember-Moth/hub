import{b as M,q as P,D as ta,m as dt,d as Ot,k as ea}from"./q-Q7QTf1-t.js";import{_ as q}from"./q-BKaOGYNW.js";const za=`:where(html[dir='ltr']),
:where([data-qwik-toaster][dir='ltr']) {
  --toast-icon-margin-start: -3px;
  --toast-icon-margin-end: 4px;
  --toast-svg-margin-start: -1px;
  --toast-svg-margin-end: 0px;
  --toast-button-margin-start: auto;
  --toast-button-margin-end: 0;
  --toast-close-button-start: 0;
  --toast-close-button-end: unset;
  --toast-close-button-transform: translate(-35%, -35%);
}

:where(html[dir='rtl']),
:where([data-qwik-toaster][dir='rtl']) {
  --toast-icon-margin-start: 4px;
  --toast-icon-margin-end: -3px;
  --toast-svg-margin-start: 0px;
  --toast-svg-margin-end: -1px;
  --toast-button-margin-start: 0;
  --toast-button-margin-end: auto;
  --toast-close-button-start: unset;
  --toast-close-button-end: 0;
  --toast-close-button-transform: translate(35%, -35%);
}

:where([data-qwik-toaster]) {
  position: fixed;
  width: var(--width);
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial,
    Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  --gray1: hsl(0, 0%, 99%);
  --gray2: hsl(0, 0%, 97.3%);
  --gray3: hsl(0, 0%, 95.1%);
  --gray4: hsl(0, 0%, 93%);
  --gray5: hsl(0, 0%, 90.9%);
  --gray6: hsl(0, 0%, 88.7%);
  --gray7: hsl(0, 0%, 85.8%);
  --gray8: hsl(0, 0%, 78%);
  --gray9: hsl(0, 0%, 56.1%);
  --gray10: hsl(0, 0%, 52.3%);
  --gray11: hsl(0, 0%, 43.5%);
  --gray12: hsl(0, 0%, 9%);
  --border-radius: 8px;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  list-style: none;
  outline: none;
  z-index: 999999999;
}

:where([data-qwik-toaster][data-x-position='right']) {
  right: max(var(--offset), env(safe-area-inset-right));
}

:where([data-qwik-toaster][data-x-position='left']) {
  left: max(var(--offset), env(safe-area-inset-left));
}

:where([data-qwik-toaster][data-x-position='center']) {
  left: 50%;
  transform: translateX(-50%);
}

:where([data-qwik-toaster][data-y-position='top']) {
  top: max(var(--offset), env(safe-area-inset-top));
}

:where([data-qwik-toaster][data-y-position='bottom']) {
  bottom: max(var(--offset), env(safe-area-inset-bottom));
}

:where([data-qwik-toast]) {
  --y: translateY(100%);
  --lift-amount: calc(var(--lift) * var(--gap));
  z-index: var(--z-index);
  position: absolute;
  opacity: 0;
  transform: var(--y);
  filter: blur(0);
  /* https://stackoverflow.com/questions/48124372/pointermove-event-not-working-with-touch-why-not */
  touch-action: none;
  transition: transform 400ms, opacity 400ms, height 400ms, box-shadow 200ms;
  box-sizing: border-box;
  outline: none;
  overflow-wrap: anywhere;
}

:where([data-qwik-toast][data-styled='true']) {
  padding: 16px;
  background: var(--normal-bg);
  border: 1px solid var(--normal-border);
  color: var(--normal-text);
  border-radius: var(--border-radius);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  width: var(--width);
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 6px;
}

:where([data-qwik-toast]:focus-visible) {
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1), 0 0 0 2px rgba(0, 0, 0, 0.2);
}

:where([data-qwik-toast][data-y-position='top']) {
  top: 0;
  --y: translateY(-100%);
  --lift: 1;
  --lift-amount: calc(1 * var(--gap));
}

:where([data-qwik-toast][data-y-position='bottom']) {
  bottom: 0;
  --y: translateY(100%);
  --lift: -1;
  --lift-amount: calc(var(--lift) * var(--gap));
}

:where([data-qwik-toast]) :where([data-description]) {
  font-weight: 400;
  line-height: 1.4;
  color: inherit;
}

:where([data-qwik-toast]) :where([data-title]) {
  font-weight: 500;
  line-height: 1.5;
  color: inherit;
}

:where([data-qwik-toast]) :where([data-icon]) {
  display: flex;
  height: 16px;
  width: 16px;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
  margin-left: var(--toast-icon-margin-start);
  margin-right: var(--toast-icon-margin-end);
}

:where([data-qwik-toast][data-promise='true']) :where([data-icon])>svg {
  opacity: 0;
  transform: scale(0.8);
  transform-origin: center;
  animation: qwik-fade-in 300ms ease forwards;
}

:where([data-qwik-toast]) :where([data-icon])>* {
  flex-shrink: 0;
}

:where([data-qwik-toast]) :where([data-icon]) svg {
  margin-left: var(--toast-svg-margin-start);
  margin-right: var(--toast-svg-margin-end);
}

:where([data-qwik-toast]) :where([data-content]) {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

[data-qwik-toast][data-styled="true"] [data-button] {
  border-radius: 4px;
  padding-left: 8px;
  padding-right: 8px;
  height: 24px;
  font-size: 12px;
  color: var(--normal-bg);
  background: var(--normal-text);
  margin-left: var(--toast-button-margin-start);
  margin-right: var(--toast-button-margin-end);
  border: none;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  transition: opacity 400ms, box-shadow 200ms;
}

:where([data-qwik-toast]) :where([data-button]):focus-visible {
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.4);
}

:where([data-qwik-toast]) :where([data-button]):first-of-type {
  margin-left: var(--toast-button-margin-start);
  margin-right: var(--toast-button-margin-end);
}

:where([data-qwik-toast]) :where([data-cancel]) {
  color: var(--normal-text);
  background: rgba(0, 0, 0, 0.08);
}

:where([data-qwik-toast][data-theme='dark']) :where([data-cancel]) {
  background: rgba(255, 255, 255, 0.3);
}

:where([data-qwik-toast]) :where([data-close-button]) {
  position: absolute;
  left: var(--toast-close-button-start);
  right: var(--toast-close-button-end);
  top: 0;
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  background: var(--gray1);
  color: var(--gray12);
  border: 1px solid var(--gray4);
  transform: var(--toast-close-button-transform);
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;
  transition: opacity 100ms, background 200ms, border-color 200ms;
}

:where([data-qwik-toast]) :where([data-close-button]):focus-visible {
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1), 0 0 0 2px rgba(0, 0, 0, 0.2);
}

:where([data-qwik-toast]) :where([data-disabled='true']) {
  cursor: not-allowed;
}

:where([data-qwik-toast]):hover :where([data-close-button]):hover {
  background: var(--gray2);
  border-color: var(--gray5);
}

/* Leave a ghost div to avoid setting hover to false when swiping out */
:where([data-qwik-toast][data-swiping='true'])::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 100%;
  z-index: -1;
}

:where([data-qwik-toast][data-y-position='top'][data-swiping='true'])::before {
  /* y 50% needed to distribute height additional height evenly */
  bottom: 50%;
  transform: scaleY(3) translateY(50%);
}

:where([data-qwik-toast][data-y-position='bottom'][data-swiping='true'])::before {
  /* y -50% needed to distribute height additional height evenly */
  top: 50%;
  transform: scaleY(3) translateY(-50%);
}

/* Leave a ghost div to avoid setting hover to false when transitioning out */
:where([data-qwik-toast][data-swiping='false'][data-removed='true'])::before {
  content: '';
  position: absolute;
  inset: 0;
  transform: scaleY(2);
}

/* Needed to avoid setting hover to false when inbetween toasts */
:where([data-qwik-toast])::after {
  content: '';
  position: absolute;
  left: 0;
  height: calc(var(--gap) + 1px);
  bottom: 100%;
  width: 100%;
}

:where([data-qwik-toast][data-mounted='true']) {
  --y: translateY(0);
  opacity: 1;
}

:where([data-qwik-toast][data-expanded='false'][data-front='false']) {
  --scale: var(--toasts-before) * 0.05 + 1;
  --y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));
  height: var(--front-toast-height);
}

:where([data-qwik-toast])>* {
  transition: opacity 400ms;
}

:where([data-qwik-toast][data-expanded='false'][data-front='false'][data-styled='true'])>* {
  opacity: 0;
}

:where([data-qwik-toast][data-visible='false']) {
  opacity: 0;
  pointer-events: none;
}

:where([data-qwik-toast][data-mounted='true'][data-expanded='true']) {
  --y: translateY(calc(var(--lift) * var(--offset)));
  height: var(--initial-height);
}

:where([data-qwik-toast][data-removed='true'][data-front='true'][data-swipe-out='false']) {
  --y: translateY(calc(var(--lift) * -100%));
  opacity: 0;
}

:where([data-qwik-toast][data-removed='true'][data-front='false'][data-swipe-out='false'][data-expanded='true']) {
  --y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));
  opacity: 0;
}

:where([data-qwik-toast][data-removed='true'][data-front='false'][data-swipe-out='false'][data-expanded='false']) {
  --y: translateY(40%);
  opacity: 0;
  transition: transform 500ms, opacity 200ms;
}

/* Bump up the height to make sure hover state doesn't get set to false */
:where([data-qwik-toast][data-removed='true'][data-front='false'])::before {
  height: calc(var(--initial-height) + 20%);
}

[data-qwik-toast][data-swiping='true'] {
  transform: var(--y) translateY(var(--swipe-amount, 0px));
  transition: none;
}

[data-qwik-toast][data-swipe-out='true'][data-y-position='bottom'],
[data-qwik-toast][data-swipe-out='true'][data-y-position='top'] {
  animation: swipe-out 200ms ease-out forwards;
}

@keyframes swipe-out {
  from {
    transform: translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));
    opacity: 1;
  }

  to {
    transform: translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));
    opacity: 0;
  }
}

@media (max-width: 600px) {
  [data-qwik-toaster] {
    position: fixed;
    --mobile-offset: 16px;
    right: var(--mobile-offset);
    left: var(--mobile-offset);
    width: 100%;
  }

  [data-qwik-toaster] [data-qwik-toast] {
    left: 0;
    right: 0;
    width: calc(100% - var(--mobile-offset) * 2);
  }

  [data-qwik-toaster][data-x-position='left'] {
    left: var(--mobile-offset);
  }

  [data-qwik-toaster][data-y-position='bottom'] {
    bottom: 20px;
  }

  [data-qwik-toaster][data-y-position='top'] {
    top: 20px;
  }

  [data-qwik-toaster][data-x-position='center'] {
    left: var(--mobile-offset);
    right: var(--mobile-offset);
    transform: none;
  }
}

[data-qwik-toaster][data-theme='light'] {
  --normal-bg: #fff;
  --normal-border: var(--gray4);
  --normal-text: var(--gray12);

  --success-bg: hsl(143, 85%, 96%);
  --success-border: hsl(145, 92%, 91%);
  --success-text: hsl(140, 100%, 27%);

  --info-bg: hsl(208, 100%, 97%);
  --info-border: hsl(221, 91%, 91%);
  --info-text: hsl(210, 92%, 45%);

  --warning-bg: hsl(49, 100%, 97%);
  --warning-border: hsl(49, 91%, 91%);
  --warning-text: hsl(31, 92%, 45%);

  --error-bg: hsl(359, 100%, 97%);
  --error-border: hsl(359, 100%, 94%);
  --error-text: hsl(360, 100%, 45%);
}

[data-qwik-toaster][data-theme='light'] [data-qwik-toast][data-invert='true'] {
  --normal-bg: #000;
  --normal-border: hsl(0, 0%, 20%);
  --normal-text: var(--gray1);
}

[data-qwik-toaster][data-theme='dark'] [data-qwik-toast][data-invert='true'] {
  --normal-bg: #fff;
  --normal-border: var(--gray3);
  --normal-text: var(--gray12);
}

[data-qwik-toaster][data-theme='dark'] {
  --normal-bg: #000;
  --normal-border: hsl(0, 0%, 20%);
  --normal-text: var(--gray1);

  --success-bg: hsl(150, 100%, 6%);
  --success-border: hsl(147, 100%, 12%);
  --success-text: hsl(150, 86%, 65%);

  --info-bg: hsl(215, 100%, 6%);
  --info-border: hsl(223, 100%, 12%);
  --info-text: hsl(216, 87%, 65%);

  --warning-bg: hsl(64, 100%, 6%);
  --warning-border: hsl(60, 100%, 12%);
  --warning-text: hsl(46, 87%, 65%);

  --error-bg: hsl(358, 76%, 10%);
  --error-border: hsl(357, 89%, 16%);
  --error-text: hsl(358, 100%, 81%);
}

[data-rich-colors='true'] [data-qwik-toast][data-type='success'] {
  background: var(--success-bg);
  border-color: var(--success-border);
  color: var(--success-text);
}

[data-rich-colors='true'] [data-qwik-toast][data-type='success'] [data-close-button] {
  background: var(--success-bg);
  border-color: var(--success-border);
  color: var(--success-text);
}

[data-rich-colors='true'] [data-qwik-toast][data-type='info'] {
  background: var(--info-bg);
  border-color: var(--info-border);
  color: var(--info-text);
}

[data-rich-colors='true'] [data-qwik-toast][data-type='info'] [data-close-button] {
  background: var(--info-bg);
  border-color: var(--info-border);
  color: var(--info-text);
}

[data-rich-colors='true'] [data-qwik-toast][data-type='warning'] {
  background: var(--warning-bg);
  border-color: var(--warning-border);
  color: var(--warning-text);
}

[data-rich-colors='true'] [data-qwik-toast][data-type='warning'] [data-close-button] {
  background: var(--warning-bg);
  border-color: var(--warning-border);
  color: var(--warning-text);
}

[data-rich-colors='true'] [data-qwik-toast][data-type='error'] {
  background: var(--error-bg);
  border-color: var(--error-border);
  color: var(--error-text);
}

[data-rich-colors='true'] [data-qwik-toast][data-type='error'] [data-close-button] {
  background: var(--error-bg);
  border-color: var(--error-border);
  color: var(--error-text);
}

.qwik-loading-wrapper {
  --size: 16px;
  height: var(--size);
  width: var(--size);
  position: absolute;
  inset: 0;
  z-index: 10;
}

.qwik-loading-wrapper[data-visible='false'] {
  transform-origin: center;
  animation: qwik-fade-out 0.2s ease forwards;
}

.qwik-spinner {
  position: relative;
  top: 50%;
  left: 50%;
  height: var(--size);
  width: var(--size);
}

.qwik-loading-bar {
  animation: qwik-spin 1.2s linear infinite;
  background: var(--gray11);
  border-radius: 6px;
  height: 8%;
  left: -10%;
  position: absolute;
  top: -3.9%;
  width: 24%;
}

.qwik-loading-bar:nth-child(1) {
  animation-delay: -1.2s;
  transform: rotate(0.0001deg) translate(146%);
}

.qwik-loading-bar:nth-child(2) {
  animation-delay: -1.1s;
  transform: rotate(30deg) translate(146%);
}

.qwik-loading-bar:nth-child(3) {
  animation-delay: -1s;
  transform: rotate(60deg) translate(146%);
}

.qwik-loading-bar:nth-child(4) {
  animation-delay: -0.9s;
  transform: rotate(90deg) translate(146%);
}

.qwik-loading-bar:nth-child(5) {
  animation-delay: -0.8s;
  transform: rotate(120deg) translate(146%);
}

.qwik-loading-bar:nth-child(6) {
  animation-delay: -0.7s;
  transform: rotate(150deg) translate(146%);
}

.qwik-loading-bar:nth-child(7) {
  animation-delay: -0.6s;
  transform: rotate(180deg) translate(146%);
}

.qwik-loading-bar:nth-child(8) {
  animation-delay: -0.5s;
  transform: rotate(210deg) translate(146%);
}

.qwik-loading-bar:nth-child(9) {
  animation-delay: -0.4s;
  transform: rotate(240deg) translate(146%);
}

.qwik-loading-bar:nth-child(10) {
  animation-delay: -0.3s;
  transform: rotate(270deg) translate(146%);
}

.qwik-loading-bar:nth-child(11) {
  animation-delay: -0.2s;
  transform: rotate(300deg) translate(146%);
}

.qwik-loading-bar:nth-child(12) {
  animation-delay: -0.1s;
  transform: rotate(330deg) translate(146%);
}

@keyframes qwik-fade-in {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes qwik-fade-out {
  0% {
    opacity: 1;
    transform: scale(1);
  }

  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}

@keyframes qwik-spin {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0.15;
  }
}

@media (prefers-reduced-motion) {

  [data-qwik-toast],
  [data-qwik-toast]>*,
  .qwik-loading-bar {
    transition: none !important;
    animation: none !important;
  }
}

.qwik-loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center;
  transition: opacity 200ms, transform 200ms;
}

.qwik-loader[data-visible='false'] {
  opacity: 0;
  transform: scale(0.8) translate(-50%, -50%);
}`,Wa=3,Ga="32px",Ba=4e3,Ya=356,ja=14,Va=20,Xa=200;let qt=1;const j=[];let V=[];const aa=a=>(j.push(a),()=>{const e=j.indexOf(a);j.splice(e,1)}),ve=a=>{j.forEach(e=>e(a))},Ae=a=>{ve(a),V=[...V,a]},S=a=>{var b;const{message:e,...i}=a,s=typeof(a==null?void 0:a.id)=="number"||a.id&&((b=a.id)==null?void 0:b.length)>0?a.id:qt++,f=V.find(h=>h.id===s),d=a.dismissible===void 0?!0:a.dismissible;return f?V=V.map(h=>h.id===s?(ve({...h,...a,id:s,title:e}),{...h,...a,id:s,dismissible:d,title:e}):h):Ae({title:e,...i,dismissible:d,id:s}),s},ke=a=>a?(j.forEach(e=>e({id:a,dismiss:!0})),a):V.forEach(e=>{j.forEach(i=>i({id:e.id,dismiss:!0}))}),oa=(a,e)=>S({...e,message:a}),ra=(a,e)=>S({...e,message:a,type:"error"}),na=(a,e)=>S({...e,type:"success",message:a}),ia=(a,e)=>S({...e,type:"info",message:a}),sa=(a,e)=>S({...e,type:"warning",message:a}),la=(a,e)=>S({...e,type:"loading",message:a}),ca=(a,e)=>{if(!e)return;let i;e.loading!==void 0&&(i=S({...e,promise:a,type:"loading",message:e.loading,description:typeof e.description!="function"?e.description:void 0}));const s=a instanceof Promise?a:a();let f=i!==void 0;return s.then(async d=>{if(d&&typeof d.ok=="boolean"&&!d.ok){f=!1;const b=typeof e.error=="function"?await e.error({error:`HTTP error! status: ${d.status}`}):e.error,h=typeof e.description=="function"?await e.description(`HTTP error! status: ${d.status}`):e.description;S({id:i,type:"error",message:b,description:h})}else if(e.success!==void 0){f=!1;const b=typeof e.success=="function"?await e.success(d):e.success,h=typeof e.description=="function"?await e.description(d):e.description;S({id:i,type:"success",message:b,description:h})}}).catch(async d=>{if(e.error!==void 0){f=!1;const b=typeof e.error=="function"?await e.error(d):e.error,h=typeof e.description=="function"?await e.description(d):e.description;S({id:i,type:"error",message:b,description:h})}}).finally(()=>{var d;f&&(ke(i),i=void 0),(d=e.finally)==null||d.call(e)}),i},da=(a,e)=>{const i=(e==null?void 0:e.id)||qt++;return S({jsx:a(i),id:i,...e}),i},N={subscribe:aa,addToast:Ae,create:S,dismiss:ke,message:oa,error:ra,success:na,info:ia,warning:sa,loading:la,promise:ca,custom:da},fa=(a,e)=>{const i=(e==null?void 0:e.id)||qt++;return N.addToast({title:a,...e,id:i}),i},ua=fa,$a=Object.assign(ua,{success:N.success,info:N.info,warning:N.warning,error:N.error,custom:N.custom,message:N.message,promise:N.promise,dismiss:N.dismiss,loading:N.loading});function Za(a){return a.label!==void 0&&typeof a.onClick$=="function"}let pe;(function(a){a.SwipedOut="SwipedOut",a.SwipedBack="SwipedBack",a.NotSwiped="NotSwiped"})(pe||(pe={}));const Ka=a=>{switch(ta(),a){case"success":return dt(pa,null,3,"oH_0");case"info":return dt(ha,null,3,"oH_1");case"warning":return dt(ga,null,3,"oH_2");case"error":return dt(_a,null,3,"oH_3");default:return null}},ma=Array(12).fill(0),Ja=M(P(()=>q(()=>Promise.resolve().then(()=>Ua),void 0),"s_0409WLJe4ZA")),pa=M(P(()=>q(()=>import("./q-BUmN53SF.js"),[]),"s_PlMhMWQHW9g")),ga=M(P(()=>q(()=>import("./q-DVzbAVyW.js"),[]),"s_XugbeigHGlc")),ha=M(P(()=>q(()=>import("./q-C-S5DH-f.js"),[]),"s_czjMKqmqjMo")),_a=M(P(()=>q(()=>import("./q-ChG4mu-N.js"),[]),"s_uE2rykD0NII"));const{entries:xe,setPrototypeOf:ge,isFrozen:wa,getPrototypeOf:ba,getOwnPropertyDescriptor:Ta}=Object;let{freeze:E,seal:R,create:Se}=Object,{apply:Mt,construct:Pt}=typeof Reflect<"u"&&Reflect;E||(E=function(e){return e});R||(R=function(e){return e});Mt||(Mt=function(e,i,s){return e.apply(i,s)});Pt||(Pt=function(e,i){return new e(...i)});const ft=x(Array.prototype.forEach),he=x(Array.prototype.pop),et=x(Array.prototype.push),pt=x(String.prototype.toLowerCase),Lt=x(String.prototype.toString),_e=x(String.prototype.match),at=x(String.prototype.replace),Ea=x(String.prototype.indexOf),ya=x(String.prototype.trim),L=x(Object.prototype.hasOwnProperty),k=x(RegExp.prototype.test),ot=va(TypeError);function x(a){return function(e){for(var i=arguments.length,s=new Array(i>1?i-1:0),f=1;f<i;f++)s[f-1]=arguments[f];return Mt(a,e,s)}}function va(a){return function(){for(var e=arguments.length,i=new Array(e),s=0;s<e;s++)i[s]=arguments[s];return Pt(a,i)}}function c(a,e){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:pt;ge&&ge(a,null);let s=e.length;for(;s--;){let f=e[s];if(typeof f=="string"){const d=i(f);d!==f&&(wa(e)||(e[s]=d),f=d)}a[f]=!0}return a}function Aa(a){for(let e=0;e<a.length;e++)L(a,e)||(a[e]=null);return a}function F(a){const e=Se(null);for(const[i,s]of xe(a))L(a,i)&&(Array.isArray(s)?e[i]=Aa(s):s&&typeof s=="object"&&s.constructor===Object?e[i]=F(s):e[i]=s);return e}function ut(a,e){for(;a!==null;){const s=Ta(a,e);if(s){if(s.get)return x(s.get);if(typeof s.value=="function")return x(s.value)}a=ba(a)}function i(){return null}return i}const we=E(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),It=E(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Nt=E(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),ka=E(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Dt=E(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),xa=E(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),be=E(["#text"]),Te=E(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Ct=E(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Ee=E(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),mt=E(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Sa=R(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Ra=R(/<%[\w\W]*|[\w\W]*%>/gm),Oa=R(/\${[\w\W]*}/gm),La=R(/^data-[\-\w.\u00B7-\uFFFF]/),Ia=R(/^aria-[\-\w]+$/),Re=R(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Na=R(/^(?:\w+script|data):/i),Da=R(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Oe=R(/^html$/i),Ca=R(/^[a-z][.\w]*(-[.\w]+)+$/i);var ye=Object.freeze({__proto__:null,MUSTACHE_EXPR:Sa,ERB_EXPR:Ra,TMPLIT_EXPR:Oa,DATA_ATTR:La,ARIA_ATTR:Ia,IS_ALLOWED_URI:Re,IS_SCRIPT_OR_DATA:Na,ATTR_WHITESPACE:Da,DOCTYPE_NAME:Oe,CUSTOM_ELEMENT:Ca});const Ma=function(){return typeof window>"u"?null:window},Pa=function(e,i){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let s=null;const f="data-tt-policy-suffix";i&&i.hasAttribute(f)&&(s=i.getAttribute(f));const d="dompurify"+(s?"#"+s:"");try{return e.createPolicy(d,{createHTML(b){return b},createScriptURL(b){return b}})}catch{return null}};function Le(){let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Ma();const e=n=>Le(n);if(e.version="3.1.2",e.removed=[],!a||!a.document||a.document.nodeType!==9)return e.isSupported=!1,e;let{document:i}=a;const s=i,f=s.currentScript,{DocumentFragment:d,HTMLTemplateElement:b,Node:h,Element:Ut,NodeFilter:X,NamedNodeMap:Ie=a.NamedNodeMap||a.MozNamedAttrMap,HTMLFormElement:Ne,DOMParser:De,trustedTypes:rt}=a,nt=Ut.prototype,Ce=ut(nt,"cloneNode"),Me=ut(nt,"nextSibling"),Pe=ut(nt,"childNodes"),$=ut(nt,"parentNode");if(typeof b=="function"){const n=i.createElement("template");n.content&&n.content.ownerDocument&&(i=n.content.ownerDocument)}let T,Z="";const{implementation:gt,createNodeIterator:qe,createDocumentFragment:Ue,getElementsByTagName:Fe}=i,{importNode:He}=s;let I={};e.isSupported=typeof xe=="function"&&typeof $=="function"&&gt&&gt.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:ht,ERB_EXPR:_t,TMPLIT_EXPR:wt,DATA_ATTR:ze,ARIA_ATTR:We,IS_SCRIPT_OR_DATA:Ge,ATTR_WHITESPACE:Ft,CUSTOM_ELEMENT:Be}=ye;let{IS_ALLOWED_URI:Ht}=ye,m=null;const zt=c({},[...we,...It,...Nt,...Dt,...be]);let p=null;const Wt=c({},[...Te,...Ct,...Ee,...mt]);let u=Object.seal(Se(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),K=null,bt=null,Gt=!0,Tt=!0,Bt=!1,Yt=!0,H=!1,jt=!0,U=!1,Et=!1,yt=!1,z=!1,it=!1,st=!1,Vt=!0,Xt=!1;const Ye="user-content-";let vt=!0,J=!1,W={},G=null;const $t=c({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Zt=null;const Kt=c({},["audio","video","img","source","image","track"]);let At=null;const Jt=c({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),lt="http://www.w3.org/1998/Math/MathML",ct="http://www.w3.org/2000/svg",D="http://www.w3.org/1999/xhtml";let B=D,kt=!1,xt=null;const je=c({},[lt,ct,D],Lt);let Q=null;const Ve=["application/xhtml+xml","text/html"],Xe="text/html";let g=null,Y=null;const Qt=255,$e=i.createElement("form"),te=function(t){return t instanceof RegExp||t instanceof Function},St=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Y&&Y===t)){if((!t||typeof t!="object")&&(t={}),t=F(t),Q=Ve.indexOf(t.PARSER_MEDIA_TYPE)===-1?Xe:t.PARSER_MEDIA_TYPE,g=Q==="application/xhtml+xml"?Lt:pt,m=L(t,"ALLOWED_TAGS")?c({},t.ALLOWED_TAGS,g):zt,p=L(t,"ALLOWED_ATTR")?c({},t.ALLOWED_ATTR,g):Wt,xt=L(t,"ALLOWED_NAMESPACES")?c({},t.ALLOWED_NAMESPACES,Lt):je,At=L(t,"ADD_URI_SAFE_ATTR")?c(F(Jt),t.ADD_URI_SAFE_ATTR,g):Jt,Zt=L(t,"ADD_DATA_URI_TAGS")?c(F(Kt),t.ADD_DATA_URI_TAGS,g):Kt,G=L(t,"FORBID_CONTENTS")?c({},t.FORBID_CONTENTS,g):$t,K=L(t,"FORBID_TAGS")?c({},t.FORBID_TAGS,g):{},bt=L(t,"FORBID_ATTR")?c({},t.FORBID_ATTR,g):{},W=L(t,"USE_PROFILES")?t.USE_PROFILES:!1,Gt=t.ALLOW_ARIA_ATTR!==!1,Tt=t.ALLOW_DATA_ATTR!==!1,Bt=t.ALLOW_UNKNOWN_PROTOCOLS||!1,Yt=t.ALLOW_SELF_CLOSE_IN_ATTR!==!1,H=t.SAFE_FOR_TEMPLATES||!1,jt=t.SAFE_FOR_XML!==!1,U=t.WHOLE_DOCUMENT||!1,z=t.RETURN_DOM||!1,it=t.RETURN_DOM_FRAGMENT||!1,st=t.RETURN_TRUSTED_TYPE||!1,yt=t.FORCE_BODY||!1,Vt=t.SANITIZE_DOM!==!1,Xt=t.SANITIZE_NAMED_PROPS||!1,vt=t.KEEP_CONTENT!==!1,J=t.IN_PLACE||!1,Ht=t.ALLOWED_URI_REGEXP||Re,B=t.NAMESPACE||D,u=t.CUSTOM_ELEMENT_HANDLING||{},t.CUSTOM_ELEMENT_HANDLING&&te(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(u.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&te(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(u.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(u.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),H&&(Tt=!1),it&&(z=!0),W&&(m=c({},be),p=[],W.html===!0&&(c(m,we),c(p,Te)),W.svg===!0&&(c(m,It),c(p,Ct),c(p,mt)),W.svgFilters===!0&&(c(m,Nt),c(p,Ct),c(p,mt)),W.mathMl===!0&&(c(m,Dt),c(p,Ee),c(p,mt))),t.ADD_TAGS&&(m===zt&&(m=F(m)),c(m,t.ADD_TAGS,g)),t.ADD_ATTR&&(p===Wt&&(p=F(p)),c(p,t.ADD_ATTR,g)),t.ADD_URI_SAFE_ATTR&&c(At,t.ADD_URI_SAFE_ATTR,g),t.FORBID_CONTENTS&&(G===$t&&(G=F(G)),c(G,t.FORBID_CONTENTS,g)),vt&&(m["#text"]=!0),U&&c(m,["html","head","body"]),m.table&&(c(m,["tbody"]),delete K.tbody),t.TRUSTED_TYPES_POLICY){if(typeof t.TRUSTED_TYPES_POLICY.createHTML!="function")throw ot('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof t.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw ot('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');T=t.TRUSTED_TYPES_POLICY,Z=T.createHTML("")}else T===void 0&&(T=Pa(rt,f)),T!==null&&typeof Z=="string"&&(Z=T.createHTML(""));E&&E(t),Y=t}},ee=c({},["mi","mo","mn","ms","mtext"]),ae=c({},["foreignobject","annotation-xml"]),Ze=c({},["title","style","font","a","script"]),oe=c({},[...It,...Nt,...ka]),re=c({},[...Dt,...xa]),Ke=function(t){let o=$(t);(!o||!o.tagName)&&(o={namespaceURI:B,tagName:"template"});const r=pt(t.tagName),l=pt(o.tagName);return xt[t.namespaceURI]?t.namespaceURI===ct?o.namespaceURI===D?r==="svg":o.namespaceURI===lt?r==="svg"&&(l==="annotation-xml"||ee[l]):!!oe[r]:t.namespaceURI===lt?o.namespaceURI===D?r==="math":o.namespaceURI===ct?r==="math"&&ae[l]:!!re[r]:t.namespaceURI===D?o.namespaceURI===ct&&!ae[l]||o.namespaceURI===lt&&!ee[l]?!1:!re[r]&&(Ze[r]||!oe[r]):!!(Q==="application/xhtml+xml"&&xt[t.namespaceURI]):!1},O=function(t){et(e.removed,{element:t});try{t.parentNode.removeChild(t)}catch{t.remove()}},Rt=function(t,o){try{et(e.removed,{attribute:o.getAttributeNode(t),from:o})}catch{et(e.removed,{attribute:null,from:o})}if(o.removeAttribute(t),t==="is"&&!p[t])if(z||it)try{O(o)}catch{}else try{o.setAttribute(t,"")}catch{}},ne=function(t){let o=null,r=null;if(yt)t="<remove></remove>"+t;else{const w=_e(t,/^[\r\n\t ]+/);r=w&&w[0]}Q==="application/xhtml+xml"&&B===D&&(t='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+t+"</body></html>");const l=T?T.createHTML(t):t;if(B===D)try{o=new De().parseFromString(l,Q)}catch{}if(!o||!o.documentElement){o=gt.createDocument(B,"template",null);try{o.documentElement.innerHTML=kt?Z:l}catch{}}const _=o.body||o.documentElement;return t&&r&&_.insertBefore(i.createTextNode(r),_.childNodes[0]||null),B===D?Fe.call(o,U?"html":"body")[0]:U?o.documentElement:_},ie=function(t){return qe.call(t.ownerDocument||t,t,X.SHOW_ELEMENT|X.SHOW_COMMENT|X.SHOW_TEXT|X.SHOW_PROCESSING_INSTRUCTION|X.SHOW_CDATA_SECTION,null)},Je=function(t){return t instanceof Ne&&(typeof t.__depth<"u"&&typeof t.__depth!="number"||typeof t.__removalCount<"u"&&typeof t.__removalCount!="number"||typeof t.nodeName!="string"||typeof t.textContent!="string"||typeof t.removeChild!="function"||!(t.attributes instanceof Ie)||typeof t.removeAttribute!="function"||typeof t.setAttribute!="function"||typeof t.namespaceURI!="string"||typeof t.insertBefore!="function"||typeof t.hasChildNodes!="function")},se=function(t){return typeof h=="function"&&t instanceof h},C=function(t,o,r){I[t]&&ft(I[t],l=>{l.call(e,o,r,Y)})},le=function(t){let o=null;if(C("beforeSanitizeElements",t,null),Je(t))return O(t),!0;const r=g(t.nodeName);if(C("uponSanitizeElement",t,{tagName:r,allowedTags:m}),t.hasChildNodes()&&!se(t.firstElementChild)&&k(/<[/\w]/g,t.innerHTML)&&k(/<[/\w]/g,t.textContent)||t.nodeType===7||jt&&t.nodeType===8&&k(/<[/\w]/g,t.data))return O(t),!0;if(!m[r]||K[r]){if(!K[r]&&de(r)&&(u.tagNameCheck instanceof RegExp&&k(u.tagNameCheck,r)||u.tagNameCheck instanceof Function&&u.tagNameCheck(r)))return!1;if(vt&&!G[r]){const l=$(t)||t.parentNode,_=Pe(t)||t.childNodes;if(_&&l){const w=_.length;for(let y=w-1;y>=0;--y){const v=Ce(_[y],!0);v.__removalCount=(t.__removalCount||0)+1,l.insertBefore(v,Me(t))}}}return O(t),!0}return t instanceof Ut&&!Ke(t)||(r==="noscript"||r==="noembed"||r==="noframes")&&k(/<\/no(script|embed|frames)/i,t.innerHTML)?(O(t),!0):(H&&t.nodeType===3&&(o=t.textContent,ft([ht,_t,wt],l=>{o=at(o,l," ")}),t.textContent!==o&&(et(e.removed,{element:t.cloneNode()}),t.textContent=o)),C("afterSanitizeElements",t,null),!1)},ce=function(t,o,r){if(Vt&&(o==="id"||o==="name")&&(r in i||r in $e))return!1;if(!(Tt&&!bt[o]&&k(ze,o))){if(!(Gt&&k(We,o))){if(!p[o]||bt[o]){if(!(de(t)&&(u.tagNameCheck instanceof RegExp&&k(u.tagNameCheck,t)||u.tagNameCheck instanceof Function&&u.tagNameCheck(t))&&(u.attributeNameCheck instanceof RegExp&&k(u.attributeNameCheck,o)||u.attributeNameCheck instanceof Function&&u.attributeNameCheck(o))||o==="is"&&u.allowCustomizedBuiltInElements&&(u.tagNameCheck instanceof RegExp&&k(u.tagNameCheck,r)||u.tagNameCheck instanceof Function&&u.tagNameCheck(r))))return!1}else if(!At[o]){if(!k(Ht,at(r,Ft,""))){if(!((o==="src"||o==="xlink:href"||o==="href")&&t!=="script"&&Ea(r,"data:")===0&&Zt[t])){if(!(Bt&&!k(Ge,at(r,Ft,"")))){if(r)return!1}}}}}}return!0},de=function(t){return t!=="annotation-xml"&&_e(t,Be)},fe=function(t){C("beforeSanitizeAttributes",t,null);const{attributes:o}=t;if(!o)return;const r={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:p};let l=o.length;for(;l--;){const _=o[l],{name:w,namespaceURI:y,value:v}=_,tt=g(w);let A=w==="value"?v:ya(v);if(r.attrName=tt,r.attrValue=A,r.keepAttr=!0,r.forceKeepAttr=void 0,C("uponSanitizeAttribute",t,r),A=r.attrValue,r.forceKeepAttr||(Rt(w,t),!r.keepAttr))continue;if(!Yt&&k(/\/>/i,A)){Rt(w,t);continue}H&&ft([ht,_t,wt],me=>{A=at(A,me," ")});const ue=g(t.nodeName);if(ce(ue,tt,A)){if(Xt&&(tt==="id"||tt==="name")&&(Rt(w,t),A=Ye+A),T&&typeof rt=="object"&&typeof rt.getAttributeType=="function"&&!y)switch(rt.getAttributeType(ue,tt)){case"TrustedHTML":A=T.createHTML(A);break;case"TrustedScriptURL":A=T.createScriptURL(A);break}try{y?t.setAttributeNS(y,w,A):t.setAttribute(w,A),he(e.removed)}catch{}}}C("afterSanitizeAttributes",t,null)},Qe=function n(t){let o=null;const r=ie(t);for(C("beforeSanitizeShadowDOM",t,null);o=r.nextNode();){if(C("uponSanitizeShadowNode",o,null),le(o))continue;const l=$(o);o.nodeType===1&&(l&&l.__depth?o.__depth=(o.__removalCount||0)+l.__depth+1:o.__depth=1),o.__depth>=Qt&&O(o),o.content instanceof d&&(o.content.__depth=o.__depth,n(o.content)),fe(o)}C("afterSanitizeShadowDOM",t,null)};return e.sanitize=function(n){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=null,r=null,l=null,_=null;if(kt=!n,kt&&(n="<!-->"),typeof n!="string"&&!se(n))if(typeof n.toString=="function"){if(n=n.toString(),typeof n!="string")throw ot("dirty is not a string, aborting")}else throw ot("toString is not a function");if(!e.isSupported)return n;if(Et||St(t),e.removed=[],typeof n=="string"&&(J=!1),J){if(n.nodeName){const v=g(n.nodeName);if(!m[v]||K[v])throw ot("root node is forbidden and cannot be sanitized in-place")}}else if(n instanceof h)o=ne("<!---->"),r=o.ownerDocument.importNode(n,!0),r.nodeType===1&&r.nodeName==="BODY"||r.nodeName==="HTML"?o=r:o.appendChild(r);else{if(!z&&!H&&!U&&n.indexOf("<")===-1)return T&&st?T.createHTML(n):n;if(o=ne(n),!o)return z?null:st?Z:""}o&&yt&&O(o.firstChild);const w=ie(J?n:o);for(;l=w.nextNode();){if(le(l))continue;const v=$(l);l.nodeType===1&&(v&&v.__depth?l.__depth=(l.__removalCount||0)+v.__depth+1:l.__depth=1),l.__depth>=Qt&&O(l),l.content instanceof d&&(l.content.__depth=l.__depth,Qe(l.content)),fe(l)}if(J)return n;if(z){if(it)for(_=Ue.call(o.ownerDocument);o.firstChild;)_.appendChild(o.firstChild);else _=o;return(p.shadowroot||p.shadowrootmode)&&(_=He.call(s,_,!0)),_}let y=U?o.outerHTML:o.innerHTML;return U&&m["!doctype"]&&o.ownerDocument&&o.ownerDocument.doctype&&o.ownerDocument.doctype.name&&k(Oe,o.ownerDocument.doctype.name)&&(y="<!DOCTYPE "+o.ownerDocument.doctype.name+`>
`+y),H&&ft([ht,_t,wt],v=>{y=at(y,v," ")}),T&&st?T.createHTML(y):y},e.setConfig=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};St(n),Et=!0},e.clearConfig=function(){Y=null,Et=!1},e.isValidAttribute=function(n,t,o){Y||St({});const r=g(n),l=g(t);return ce(r,l,o)},e.addHook=function(n,t){typeof t=="function"&&(I[n]=I[n]||[],et(I[n],t))},e.removeHook=function(n){if(I[n])return he(I[n])},e.removeHooks=function(n){I[n]&&(I[n]=[])},e.removeAllHooks=function(){I={}},e}var Qa=Le();const to=M(P(()=>q(()=>import("./q-De_ICCJ7.js").then(a=>a.i),[]),"s_0aOiYLLcTuA")),eo=M(P(()=>q(()=>import("./q-AaougIaD.js").then(a=>a.i),[]),"s_IPk10GunI7g")),ao=M(P(()=>q(()=>import("./q-C2CBz4te.js").then(a=>a.i),[]),"s_OAwbeyfgs0c")),qa=a=>Ot("div",null,{class:"qwik-loading-wrapper","data-visible":ea(e=>String(e.visible),[a],"String(p0.visible)")},Ot("div",null,{class:"qwik-spinner"},ma.map((e,i)=>Ot("div",null,{class:"qwik-loading-bar"},null,3,`spinner-bar-${i}`)),1,null),1,"oH_4"),Ua=Object.freeze(Object.defineProperty({__proto__:null,s_0409WLJe4ZA:qa},Symbol.toStringTag,{value:"Module"}));export{ja as G,Ja as L,Va as S,Ba as T,Ga as V,Xa as a,eo as b,N as c,Ya as d,Wa as e,to as f,Ka as g,ao as h,Za as i,Qa as p,za as s,qa as s_0409WLJe4ZA,$a as t};
