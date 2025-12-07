var Ux=Object.defineProperty;var Nx=(t,e,n)=>e in t?Ux(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ke=(t,e,n)=>Nx(t,typeof e!="symbol"?e+"":e,n);function Bx(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Fx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var c0={exports:{}},Yl={},u0={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var to=Symbol.for("react.element"),Ox=Symbol.for("react.portal"),zx=Symbol.for("react.fragment"),kx=Symbol.for("react.strict_mode"),Hx=Symbol.for("react.profiler"),Gx=Symbol.for("react.provider"),Vx=Symbol.for("react.context"),Wx=Symbol.for("react.forward_ref"),Xx=Symbol.for("react.suspense"),Yx=Symbol.for("react.memo"),jx=Symbol.for("react.lazy"),Lh=Symbol.iterator;function Qx(t){return t===null||typeof t!="object"?null:(t=Lh&&t[Lh]||t["@@iterator"],typeof t=="function"?t:null)}var f0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},d0=Object.assign,h0={};function js(t,e,n){this.props=t,this.context=e,this.refs=h0,this.updater=n||f0}js.prototype.isReactComponent={};js.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};js.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function p0(){}p0.prototype=js.prototype;function md(t,e,n){this.props=t,this.context=e,this.refs=h0,this.updater=n||f0}var gd=md.prototype=new p0;gd.constructor=md;d0(gd,js.prototype);gd.isPureReactComponent=!0;var Uh=Array.isArray,m0=Object.prototype.hasOwnProperty,vd={current:null},g0={key:!0,ref:!0,__self:!0,__source:!0};function v0(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)m0.call(e,i)&&!g0.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:to,type:t,key:s,ref:a,props:r,_owner:vd.current}}function Kx(t,e){return{$$typeof:to,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function xd(t){return typeof t=="object"&&t!==null&&t.$$typeof===to}function qx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Nh=/\/+/g;function xc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?qx(""+t.key):e.toString(36)}function tl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case to:case Ox:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+xc(a,0):i,Uh(r)?(n="",t!=null&&(n=t.replace(Nh,"$&/")+"/"),tl(r,e,n,"",function(c){return c})):r!=null&&(xd(r)&&(r=Kx(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Nh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Uh(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+xc(s,o);a+=tl(s,e,n,l,r)}else if(l=Qx(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+xc(s,o++),a+=tl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function ho(t,e,n){if(t==null)return t;var i=[],r=0;return tl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Jx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dn={current:null},nl={transition:null},Zx={ReactCurrentDispatcher:dn,ReactCurrentBatchConfig:nl,ReactCurrentOwner:vd};function x0(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:ho,forEach:function(t,e,n){ho(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ho(t,function(){e++}),e},toArray:function(t){return ho(t,function(e){return e})||[]},only:function(t){if(!xd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=js;Xe.Fragment=zx;Xe.Profiler=Hx;Xe.PureComponent=md;Xe.StrictMode=kx;Xe.Suspense=Xx;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zx;Xe.act=x0;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=d0({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=vd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)m0.call(e,l)&&!g0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:to,type:t.type,key:r,ref:s,props:i,_owner:a}};Xe.createContext=function(t){return t={$$typeof:Vx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Gx,_context:t},t.Consumer=t};Xe.createElement=v0;Xe.createFactory=function(t){var e=v0.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:Wx,render:t}};Xe.isValidElement=xd;Xe.lazy=function(t){return{$$typeof:jx,_payload:{_status:-1,_result:t},_init:Jx}};Xe.memo=function(t,e){return{$$typeof:Yx,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=nl.transition;nl.transition={};try{t()}finally{nl.transition=e}};Xe.unstable_act=x0;Xe.useCallback=function(t,e){return dn.current.useCallback(t,e)};Xe.useContext=function(t){return dn.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return dn.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return dn.current.useEffect(t,e)};Xe.useId=function(){return dn.current.useId()};Xe.useImperativeHandle=function(t,e,n){return dn.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return dn.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return dn.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return dn.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return dn.current.useReducer(t,e,n)};Xe.useRef=function(t){return dn.current.useRef(t)};Xe.useState=function(t){return dn.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return dn.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return dn.current.useTransition()};Xe.version="18.3.1";u0.exports=Xe;var ne=u0.exports;const _0=Fx(ne),$x=Bx({__proto__:null,default:_0},[ne]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e_=ne,t_=Symbol.for("react.element"),n_=Symbol.for("react.fragment"),i_=Object.prototype.hasOwnProperty,r_=e_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s_={key:!0,ref:!0,__self:!0,__source:!0};function y0(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)i_.call(e,i)&&!s_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:t_,type:t,key:s,ref:a,props:r,_owner:r_.current}}Yl.Fragment=n_;Yl.jsx=y0;Yl.jsxs=y0;c0.exports=Yl;var I=c0.exports,bu={},A0={exports:{}},Ln={},S0={exports:{}},E0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,W){var Y=U.length;U.push(W);e:for(;0<Y;){var de=Y-1>>>1,Me=U[de];if(0<r(Me,W))U[de]=W,U[Y]=Me,Y=de;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var W=U[0],Y=U.pop();if(Y!==W){U[0]=Y;e:for(var de=0,Me=U.length,$e=Me>>>1;de<$e;){var Ze=2*(de+1)-1,rt=U[Ze],X=Ze+1,Z=U[X];if(0>r(rt,Y))X<Me&&0>r(Z,rt)?(U[de]=Z,U[X]=Y,de=X):(U[de]=rt,U[Ze]=Y,de=Ze);else if(X<Me&&0>r(Z,Y))U[de]=Z,U[X]=Y,de=X;else break e}}return W}function r(U,W){var Y=U.sortIndex-W.sortIndex;return Y!==0?Y:U.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],f=1,u=null,h=3,p=!1,v=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(U){for(var W=n(c);W!==null;){if(W.callback===null)i(c);else if(W.startTime<=U)i(c),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(c)}}function S(U){if(_=!1,x(U),!v)if(n(l)!==null)v=!0,q(C);else{var W=n(c);W!==null&&te(S,W.startTime-U)}}function C(U,W){v=!1,_&&(_=!1,d(L),L=-1),p=!0;var Y=h;try{for(x(W),u=n(l);u!==null&&(!(u.expirationTime>W)||U&&!R());){var de=u.callback;if(typeof de=="function"){u.callback=null,h=u.priorityLevel;var Me=de(u.expirationTime<=W);W=t.unstable_now(),typeof Me=="function"?u.callback=Me:u===n(l)&&i(l),x(W)}else i(l);u=n(l)}if(u!==null)var $e=!0;else{var Ze=n(c);Ze!==null&&te(S,Ze.startTime-W),$e=!1}return $e}finally{u=null,h=Y,p=!1}}var M=!1,b=null,L=-1,w=5,A=-1;function R(){return!(t.unstable_now()-A<w)}function k(){if(b!==null){var U=t.unstable_now();A=U;var W=!0;try{W=b(!0,U)}finally{W?O():(M=!1,b=null)}}else M=!1}var O;if(typeof g=="function")O=function(){g(k)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,j=J.port2;J.port1.onmessage=k,O=function(){j.postMessage(null)}}else O=function(){m(k,0)};function q(U){b=U,M||(M=!0,O())}function te(U,W){L=m(function(){U(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,q(C))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(h){case 1:case 2:case 3:var W=3;break;default:W=h}var Y=h;h=W;try{return U()}finally{h=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,W){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var Y=h;h=U;try{return W()}finally{h=Y}},t.unstable_scheduleCallback=function(U,W,Y){var de=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?de+Y:de):Y=de,U){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=Y+Me,U={id:f++,callback:W,priorityLevel:U,startTime:Y,expirationTime:Me,sortIndex:-1},Y>de?(U.sortIndex=Y,e(c,U),n(l)===null&&U===n(c)&&(_?(d(L),L=-1):_=!0,te(S,Y-de))):(U.sortIndex=Me,e(l,U),v||p||(v=!0,q(C))),U},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(U){var W=h;return function(){var Y=h;h=W;try{return U.apply(this,arguments)}finally{h=Y}}}})(E0);S0.exports=E0;var a_=S0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o_=ne,In=a_;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var M0=new Set,La={};function Xr(t,e){Us(t,e),Us(t+"Capture",e)}function Us(t,e){for(La[t]=e,t=0;t<e.length;t++)M0.add(e[t])}var Li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ru=Object.prototype.hasOwnProperty,l_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bh={},Fh={};function c_(t){return Ru.call(Fh,t)?!0:Ru.call(Bh,t)?!1:l_.test(t)?Fh[t]=!0:(Bh[t]=!0,!1)}function u_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function f_(t,e,n,i){if(e===null||typeof e>"u"||u_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function hn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Kt[t]=new hn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Kt[e]=new hn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Kt[t]=new hn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Kt[t]=new hn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Kt[t]=new hn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Kt[t]=new hn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Kt[t]=new hn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Kt[t]=new hn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Kt[t]=new hn(t,5,!1,t.toLowerCase(),null,!1,!1)});var _d=/[\-:]([a-z])/g;function yd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(_d,yd);Kt[e]=new hn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(_d,yd);Kt[e]=new hn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(_d,yd);Kt[e]=new hn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Kt[t]=new hn(t,1,!1,t.toLowerCase(),null,!1,!1)});Kt.xlinkHref=new hn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Kt[t]=new hn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ad(t,e,n,i){var r=Kt.hasOwnProperty(e)?Kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(f_(e,n,r,i)&&(n=null),i||r===null?c_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var zi=o_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,po=Symbol.for("react.element"),hs=Symbol.for("react.portal"),ps=Symbol.for("react.fragment"),Sd=Symbol.for("react.strict_mode"),Du=Symbol.for("react.profiler"),w0=Symbol.for("react.provider"),T0=Symbol.for("react.context"),Ed=Symbol.for("react.forward_ref"),Pu=Symbol.for("react.suspense"),Iu=Symbol.for("react.suspense_list"),Md=Symbol.for("react.memo"),qi=Symbol.for("react.lazy"),C0=Symbol.for("react.offscreen"),Oh=Symbol.iterator;function na(t){return t===null||typeof t!="object"?null:(t=Oh&&t[Oh]||t["@@iterator"],typeof t=="function"?t:null)}var Mt=Object.assign,_c;function ga(t){if(_c===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);_c=e&&e[1]||""}return`
`+_c+t}var yc=!1;function Ac(t,e){if(!t||yc)return"";yc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{yc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ga(t):""}function d_(t){switch(t.tag){case 5:return ga(t.type);case 16:return ga("Lazy");case 13:return ga("Suspense");case 19:return ga("SuspenseList");case 0:case 2:case 15:return t=Ac(t.type,!1),t;case 11:return t=Ac(t.type.render,!1),t;case 1:return t=Ac(t.type,!0),t;default:return""}}function Lu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ps:return"Fragment";case hs:return"Portal";case Du:return"Profiler";case Sd:return"StrictMode";case Pu:return"Suspense";case Iu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case T0:return(t.displayName||"Context")+".Consumer";case w0:return(t._context.displayName||"Context")+".Provider";case Ed:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Md:return e=t.displayName||null,e!==null?e:Lu(t.type)||"Memo";case qi:e=t._payload,t=t._init;try{return Lu(t(e))}catch{}}return null}function h_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Lu(e);case 8:return e===Sd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function b0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function p_(t){var e=b0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function mo(t){t._valueTracker||(t._valueTracker=p_(t))}function R0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=b0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function xl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Uu(t,e){var n=e.checked;return Mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function zh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function D0(t,e){e=e.checked,e!=null&&Ad(t,"checked",e,!1)}function Nu(t,e){D0(t,e);var n=hr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Bu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Bu(t,e.type,hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function kh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Bu(t,e,n){(e!=="number"||xl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var va=Array.isArray;function ws(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+hr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Fu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return Mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(va(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:hr(n)}}function P0(t,e){var n=hr(e.value),i=hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Gh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function I0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ou(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?I0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var go,L0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(go=go||document.createElement("div"),go.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=go.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ua(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Sa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},m_=["Webkit","ms","Moz","O"];Object.keys(Sa).forEach(function(t){m_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Sa[e]=Sa[t]})});function U0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Sa.hasOwnProperty(t)&&Sa[t]?(""+e).trim():e+"px"}function N0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=U0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var g_=Mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zu(t,e){if(e){if(g_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function ku(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hu=null;function wd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gu=null,Ts=null,Cs=null;function Vh(t){if(t=ro(t)){if(typeof Gu!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=Jl(e),Gu(t.stateNode,t.type,e))}}function B0(t){Ts?Cs?Cs.push(t):Cs=[t]:Ts=t}function F0(){if(Ts){var t=Ts,e=Cs;if(Cs=Ts=null,Vh(t),e)for(t=0;t<e.length;t++)Vh(e[t])}}function O0(t,e){return t(e)}function z0(){}var Sc=!1;function k0(t,e,n){if(Sc)return t(e,n);Sc=!0;try{return O0(t,e,n)}finally{Sc=!1,(Ts!==null||Cs!==null)&&(z0(),F0())}}function Na(t,e){var n=t.stateNode;if(n===null)return null;var i=Jl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var Vu=!1;if(Li)try{var ia={};Object.defineProperty(ia,"passive",{get:function(){Vu=!0}}),window.addEventListener("test",ia,ia),window.removeEventListener("test",ia,ia)}catch{Vu=!1}function v_(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Ea=!1,_l=null,yl=!1,Wu=null,x_={onError:function(t){Ea=!0,_l=t}};function __(t,e,n,i,r,s,a,o,l){Ea=!1,_l=null,v_.apply(x_,arguments)}function y_(t,e,n,i,r,s,a,o,l){if(__.apply(this,arguments),Ea){if(Ea){var c=_l;Ea=!1,_l=null}else throw Error(ie(198));yl||(yl=!0,Wu=c)}}function Yr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function H0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wh(t){if(Yr(t)!==t)throw Error(ie(188))}function A_(t){var e=t.alternate;if(!e){if(e=Yr(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Wh(r),t;if(s===i)return Wh(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function G0(t){return t=A_(t),t!==null?V0(t):null}function V0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=V0(t);if(e!==null)return e;t=t.sibling}return null}var W0=In.unstable_scheduleCallback,Xh=In.unstable_cancelCallback,S_=In.unstable_shouldYield,E_=In.unstable_requestPaint,bt=In.unstable_now,M_=In.unstable_getCurrentPriorityLevel,Td=In.unstable_ImmediatePriority,X0=In.unstable_UserBlockingPriority,Al=In.unstable_NormalPriority,w_=In.unstable_LowPriority,Y0=In.unstable_IdlePriority,jl=null,pi=null;function T_(t){if(pi&&typeof pi.onCommitFiberRoot=="function")try{pi.onCommitFiberRoot(jl,t,void 0,(t.current.flags&128)===128)}catch{}}var ni=Math.clz32?Math.clz32:R_,C_=Math.log,b_=Math.LN2;function R_(t){return t>>>=0,t===0?32:31-(C_(t)/b_|0)|0}var vo=64,xo=4194304;function xa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Sl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=xa(o):(s&=a,s!==0&&(i=xa(s)))}else a=n&~r,a!==0?i=xa(a):s!==0&&(i=xa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ni(e),r=1<<n,i|=t[n],e&=~r;return i}function D_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function P_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-ni(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=D_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Xu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function j0(){var t=vo;return vo<<=1,!(vo&4194240)&&(vo=64),t}function Ec(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function no(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ni(e),t[e]=n}function I_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ni(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Cd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ni(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var st=0;function Q0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var K0,bd,q0,J0,Z0,Yu=!1,_o=[],rr=null,sr=null,ar=null,Ba=new Map,Fa=new Map,Zi=[],L_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yh(t,e){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":Ba.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fa.delete(e.pointerId)}}function ra(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ro(e),e!==null&&bd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function U_(t,e,n,i,r){switch(e){case"focusin":return rr=ra(rr,t,e,n,i,r),!0;case"dragenter":return sr=ra(sr,t,e,n,i,r),!0;case"mouseover":return ar=ra(ar,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ba.set(s,ra(Ba.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Fa.set(s,ra(Fa.get(s)||null,t,e,n,i,r)),!0}return!1}function $0(t){var e=Lr(t.target);if(e!==null){var n=Yr(e);if(n!==null){if(e=n.tag,e===13){if(e=H0(n),e!==null){t.blockedOn=e,Z0(t.priority,function(){q0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function il(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ju(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Hu=i,n.target.dispatchEvent(i),Hu=null}else return e=ro(n),e!==null&&bd(e),t.blockedOn=n,!1;e.shift()}return!0}function jh(t,e,n){il(t)&&n.delete(e)}function N_(){Yu=!1,rr!==null&&il(rr)&&(rr=null),sr!==null&&il(sr)&&(sr=null),ar!==null&&il(ar)&&(ar=null),Ba.forEach(jh),Fa.forEach(jh)}function sa(t,e){t.blockedOn===e&&(t.blockedOn=null,Yu||(Yu=!0,In.unstable_scheduleCallback(In.unstable_NormalPriority,N_)))}function Oa(t){function e(r){return sa(r,t)}if(0<_o.length){sa(_o[0],t);for(var n=1;n<_o.length;n++){var i=_o[n];i.blockedOn===t&&(i.blockedOn=null)}}for(rr!==null&&sa(rr,t),sr!==null&&sa(sr,t),ar!==null&&sa(ar,t),Ba.forEach(e),Fa.forEach(e),n=0;n<Zi.length;n++)i=Zi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Zi.length&&(n=Zi[0],n.blockedOn===null);)$0(n),n.blockedOn===null&&Zi.shift()}var bs=zi.ReactCurrentBatchConfig,El=!0;function B_(t,e,n,i){var r=st,s=bs.transition;bs.transition=null;try{st=1,Rd(t,e,n,i)}finally{st=r,bs.transition=s}}function F_(t,e,n,i){var r=st,s=bs.transition;bs.transition=null;try{st=4,Rd(t,e,n,i)}finally{st=r,bs.transition=s}}function Rd(t,e,n,i){if(El){var r=ju(t,e,n,i);if(r===null)Lc(t,e,i,Ml,n),Yh(t,i);else if(U_(r,t,e,n,i))i.stopPropagation();else if(Yh(t,i),e&4&&-1<L_.indexOf(t)){for(;r!==null;){var s=ro(r);if(s!==null&&K0(s),s=ju(t,e,n,i),s===null&&Lc(t,e,i,Ml,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Lc(t,e,i,null,n)}}var Ml=null;function ju(t,e,n,i){if(Ml=null,t=wd(i),t=Lr(t),t!==null)if(e=Yr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=H0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ml=t,null}function eg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(M_()){case Td:return 1;case X0:return 4;case Al:case w_:return 16;case Y0:return 536870912;default:return 16}default:return 16}}var er=null,Dd=null,rl=null;function tg(){if(rl)return rl;var t,e=Dd,n=e.length,i,r="value"in er?er.value:er.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return rl=r.slice(t,1<i?1-i:void 0)}function sl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function yo(){return!0}function Qh(){return!1}function Un(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?yo:Qh,this.isPropagationStopped=Qh,this}return Mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yo)},persist:function(){},isPersistent:yo}),e}var Qs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pd=Un(Qs),io=Mt({},Qs,{view:0,detail:0}),O_=Un(io),Mc,wc,aa,Ql=Mt({},io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Id,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==aa&&(aa&&t.type==="mousemove"?(Mc=t.screenX-aa.screenX,wc=t.screenY-aa.screenY):wc=Mc=0,aa=t),Mc)},movementY:function(t){return"movementY"in t?t.movementY:wc}}),Kh=Un(Ql),z_=Mt({},Ql,{dataTransfer:0}),k_=Un(z_),H_=Mt({},io,{relatedTarget:0}),Tc=Un(H_),G_=Mt({},Qs,{animationName:0,elapsedTime:0,pseudoElement:0}),V_=Un(G_),W_=Mt({},Qs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),X_=Un(W_),Y_=Mt({},Qs,{data:0}),qh=Un(Y_),j_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Q_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function q_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=K_[t])?!!e[t]:!1}function Id(){return q_}var J_=Mt({},io,{key:function(t){if(t.key){var e=j_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Q_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Id,charCode:function(t){return t.type==="keypress"?sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Z_=Un(J_),$_=Mt({},Ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jh=Un($_),ey=Mt({},io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Id}),ty=Un(ey),ny=Mt({},Qs,{propertyName:0,elapsedTime:0,pseudoElement:0}),iy=Un(ny),ry=Mt({},Ql,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sy=Un(ry),ay=[9,13,27,32],Ld=Li&&"CompositionEvent"in window,Ma=null;Li&&"documentMode"in document&&(Ma=document.documentMode);var oy=Li&&"TextEvent"in window&&!Ma,ng=Li&&(!Ld||Ma&&8<Ma&&11>=Ma),Zh=" ",$h=!1;function ig(t,e){switch(t){case"keyup":return ay.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ms=!1;function ly(t,e){switch(t){case"compositionend":return rg(e);case"keypress":return e.which!==32?null:($h=!0,Zh);case"textInput":return t=e.data,t===Zh&&$h?null:t;default:return null}}function cy(t,e){if(ms)return t==="compositionend"||!Ld&&ig(t,e)?(t=tg(),rl=Dd=er=null,ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ng&&e.locale!=="ko"?null:e.data;default:return null}}var uy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ep(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!uy[t.type]:e==="textarea"}function sg(t,e,n,i){B0(i),e=wl(e,"onChange"),0<e.length&&(n=new Pd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var wa=null,za=null;function fy(t){gg(t,0)}function Kl(t){var e=xs(t);if(R0(e))return t}function dy(t,e){if(t==="change")return e}var ag=!1;if(Li){var Cc;if(Li){var bc="oninput"in document;if(!bc){var tp=document.createElement("div");tp.setAttribute("oninput","return;"),bc=typeof tp.oninput=="function"}Cc=bc}else Cc=!1;ag=Cc&&(!document.documentMode||9<document.documentMode)}function np(){wa&&(wa.detachEvent("onpropertychange",og),za=wa=null)}function og(t){if(t.propertyName==="value"&&Kl(za)){var e=[];sg(e,za,t,wd(t)),k0(fy,e)}}function hy(t,e,n){t==="focusin"?(np(),wa=e,za=n,wa.attachEvent("onpropertychange",og)):t==="focusout"&&np()}function py(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Kl(za)}function my(t,e){if(t==="click")return Kl(e)}function gy(t,e){if(t==="input"||t==="change")return Kl(e)}function vy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var si=typeof Object.is=="function"?Object.is:vy;function ka(t,e){if(si(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ru.call(e,r)||!si(t[r],e[r]))return!1}return!0}function ip(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rp(t,e){var n=ip(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ip(n)}}function lg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?lg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function cg(){for(var t=window,e=xl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=xl(t.document)}return e}function Ud(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function xy(t){var e=cg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&lg(n.ownerDocument.documentElement,n)){if(i!==null&&Ud(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=rp(n,s);var a=rp(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _y=Li&&"documentMode"in document&&11>=document.documentMode,gs=null,Qu=null,Ta=null,Ku=!1;function sp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ku||gs==null||gs!==xl(i)||(i=gs,"selectionStart"in i&&Ud(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ta&&ka(Ta,i)||(Ta=i,i=wl(Qu,"onSelect"),0<i.length&&(e=new Pd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=gs)))}function Ao(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var vs={animationend:Ao("Animation","AnimationEnd"),animationiteration:Ao("Animation","AnimationIteration"),animationstart:Ao("Animation","AnimationStart"),transitionend:Ao("Transition","TransitionEnd")},Rc={},ug={};Li&&(ug=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function ql(t){if(Rc[t])return Rc[t];if(!vs[t])return t;var e=vs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ug)return Rc[t]=e[n];return t}var fg=ql("animationend"),dg=ql("animationiteration"),hg=ql("animationstart"),pg=ql("transitionend"),mg=new Map,ap="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(t,e){mg.set(t,e),Xr(e,[t])}for(var Dc=0;Dc<ap.length;Dc++){var Pc=ap[Dc],yy=Pc.toLowerCase(),Ay=Pc[0].toUpperCase()+Pc.slice(1);vr(yy,"on"+Ay)}vr(fg,"onAnimationEnd");vr(dg,"onAnimationIteration");vr(hg,"onAnimationStart");vr("dblclick","onDoubleClick");vr("focusin","onFocus");vr("focusout","onBlur");vr(pg,"onTransitionEnd");Us("onMouseEnter",["mouseout","mouseover"]);Us("onMouseLeave",["mouseout","mouseover"]);Us("onPointerEnter",["pointerout","pointerover"]);Us("onPointerLeave",["pointerout","pointerover"]);Xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sy=new Set("cancel close invalid load scroll toggle".split(" ").concat(_a));function op(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,y_(i,e,void 0,t),t.currentTarget=null}function gg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;op(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;op(r,o,c),s=l}}}if(yl)throw t=Wu,yl=!1,Wu=null,t}function pt(t,e){var n=e[ef];n===void 0&&(n=e[ef]=new Set);var i=t+"__bubble";n.has(i)||(vg(e,t,2,!1),n.add(i))}function Ic(t,e,n){var i=0;e&&(i|=4),vg(n,t,i,e)}var So="_reactListening"+Math.random().toString(36).slice(2);function Ha(t){if(!t[So]){t[So]=!0,M0.forEach(function(n){n!=="selectionchange"&&(Sy.has(n)||Ic(n,!1,t),Ic(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[So]||(e[So]=!0,Ic("selectionchange",!1,e))}}function vg(t,e,n,i){switch(eg(e)){case 1:var r=B_;break;case 4:r=F_;break;default:r=Rd}n=r.bind(null,e,n,t),r=void 0,!Vu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Lc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Lr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}k0(function(){var c=s,f=wd(n),u=[];e:{var h=mg.get(t);if(h!==void 0){var p=Pd,v=t;switch(t){case"keypress":if(sl(n)===0)break e;case"keydown":case"keyup":p=Z_;break;case"focusin":v="focus",p=Tc;break;case"focusout":v="blur",p=Tc;break;case"beforeblur":case"afterblur":p=Tc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Kh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=k_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=ty;break;case fg:case dg:case hg:p=V_;break;case pg:p=iy;break;case"scroll":p=O_;break;case"wheel":p=sy;break;case"copy":case"cut":case"paste":p=X_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Jh}var _=(e&4)!==0,m=!_&&t==="scroll",d=_?h!==null?h+"Capture":null:h;_=[];for(var g=c,x;g!==null;){x=g;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,d!==null&&(S=Na(g,d),S!=null&&_.push(Ga(g,S,x)))),m)break;g=g.return}0<_.length&&(h=new p(h,v,null,n,f),u.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Hu&&(v=n.relatedTarget||n.fromElement)&&(Lr(v)||v[Ui]))break e;if((p||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?Lr(v):null,v!==null&&(m=Yr(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(_=Kh,S="onMouseLeave",d="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(_=Jh,S="onPointerLeave",d="onPointerEnter",g="pointer"),m=p==null?h:xs(p),x=v==null?h:xs(v),h=new _(S,g+"leave",p,n,f),h.target=m,h.relatedTarget=x,S=null,Lr(f)===c&&(_=new _(d,g+"enter",v,n,f),_.target=x,_.relatedTarget=m,S=_),m=S,p&&v)t:{for(_=p,d=v,g=0,x=_;x;x=Jr(x))g++;for(x=0,S=d;S;S=Jr(S))x++;for(;0<g-x;)_=Jr(_),g--;for(;0<x-g;)d=Jr(d),x--;for(;g--;){if(_===d||d!==null&&_===d.alternate)break t;_=Jr(_),d=Jr(d)}_=null}else _=null;p!==null&&lp(u,h,p,_,!1),v!==null&&m!==null&&lp(u,m,v,_,!0)}}e:{if(h=c?xs(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var C=dy;else if(ep(h))if(ag)C=gy;else{C=py;var M=hy}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=my);if(C&&(C=C(t,c))){sg(u,C,n,f);break e}M&&M(t,h,c),t==="focusout"&&(M=h._wrapperState)&&M.controlled&&h.type==="number"&&Bu(h,"number",h.value)}switch(M=c?xs(c):window,t){case"focusin":(ep(M)||M.contentEditable==="true")&&(gs=M,Qu=c,Ta=null);break;case"focusout":Ta=Qu=gs=null;break;case"mousedown":Ku=!0;break;case"contextmenu":case"mouseup":case"dragend":Ku=!1,sp(u,n,f);break;case"selectionchange":if(_y)break;case"keydown":case"keyup":sp(u,n,f)}var b;if(Ld)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else ms?ig(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(ng&&n.locale!=="ko"&&(ms||L!=="onCompositionStart"?L==="onCompositionEnd"&&ms&&(b=tg()):(er=f,Dd="value"in er?er.value:er.textContent,ms=!0)),M=wl(c,L),0<M.length&&(L=new qh(L,t,null,n,f),u.push({event:L,listeners:M}),b?L.data=b:(b=rg(n),b!==null&&(L.data=b)))),(b=oy?ly(t,n):cy(t,n))&&(c=wl(c,"onBeforeInput"),0<c.length&&(f=new qh("onBeforeInput","beforeinput",null,n,f),u.push({event:f,listeners:c}),f.data=b))}gg(u,e)})}function Ga(t,e,n){return{instance:t,listener:e,currentTarget:n}}function wl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Na(t,n),s!=null&&i.unshift(Ga(t,s,r)),s=Na(t,e),s!=null&&i.push(Ga(t,s,r))),t=t.return}return i}function Jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function lp(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Na(n,s),l!=null&&a.unshift(Ga(n,l,o))):r||(l=Na(n,s),l!=null&&a.push(Ga(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Ey=/\r\n?/g,My=/\u0000|\uFFFD/g;function cp(t){return(typeof t=="string"?t:""+t).replace(Ey,`
`).replace(My,"")}function Eo(t,e,n){if(e=cp(e),cp(t)!==e&&n)throw Error(ie(425))}function Tl(){}var qu=null,Ju=null;function Zu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $u=typeof setTimeout=="function"?setTimeout:void 0,wy=typeof clearTimeout=="function"?clearTimeout:void 0,up=typeof Promise=="function"?Promise:void 0,Ty=typeof queueMicrotask=="function"?queueMicrotask:typeof up<"u"?function(t){return up.resolve(null).then(t).catch(Cy)}:$u;function Cy(t){setTimeout(function(){throw t})}function Uc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Oa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Oa(e)}function or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function fp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ks=Math.random().toString(36).slice(2),ui="__reactFiber$"+Ks,Va="__reactProps$"+Ks,Ui="__reactContainer$"+Ks,ef="__reactEvents$"+Ks,by="__reactListeners$"+Ks,Ry="__reactHandles$"+Ks;function Lr(t){var e=t[ui];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ui]||n[ui]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=fp(t);t!==null;){if(n=t[ui])return n;t=fp(t)}return e}t=n,n=t.parentNode}return null}function ro(t){return t=t[ui]||t[Ui],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function xs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function Jl(t){return t[Va]||null}var tf=[],_s=-1;function xr(t){return{current:t}}function gt(t){0>_s||(t.current=tf[_s],tf[_s]=null,_s--)}function dt(t,e){_s++,tf[_s]=t.current,t.current=e}var pr={},rn=xr(pr),_n=xr(!1),kr=pr;function Ns(t,e){var n=t.type.contextTypes;if(!n)return pr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function yn(t){return t=t.childContextTypes,t!=null}function Cl(){gt(_n),gt(rn)}function dp(t,e,n){if(rn.current!==pr)throw Error(ie(168));dt(rn,e),dt(_n,n)}function xg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,h_(t)||"Unknown",r));return Mt({},n,i)}function bl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pr,kr=rn.current,dt(rn,t),dt(_n,_n.current),!0}function hp(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=xg(t,e,kr),i.__reactInternalMemoizedMergedChildContext=t,gt(_n),gt(rn),dt(rn,t)):gt(_n),dt(_n,n)}var wi=null,Zl=!1,Nc=!1;function _g(t){wi===null?wi=[t]:wi.push(t)}function Dy(t){Zl=!0,_g(t)}function _r(){if(!Nc&&wi!==null){Nc=!0;var t=0,e=st;try{var n=wi;for(st=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}wi=null,Zl=!1}catch(r){throw wi!==null&&(wi=wi.slice(t+1)),W0(Td,_r),r}finally{st=e,Nc=!1}}return null}var ys=[],As=0,Rl=null,Dl=0,On=[],zn=0,Hr=null,Ti=1,Ci="";function br(t,e){ys[As++]=Dl,ys[As++]=Rl,Rl=t,Dl=e}function yg(t,e,n){On[zn++]=Ti,On[zn++]=Ci,On[zn++]=Hr,Hr=t;var i=Ti;t=Ci;var r=32-ni(i)-1;i&=~(1<<r),n+=1;var s=32-ni(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Ti=1<<32-ni(e)+r|n<<r|i,Ci=s+t}else Ti=1<<s|n<<r|i,Ci=t}function Nd(t){t.return!==null&&(br(t,1),yg(t,1,0))}function Bd(t){for(;t===Rl;)Rl=ys[--As],ys[As]=null,Dl=ys[--As],ys[As]=null;for(;t===Hr;)Hr=On[--zn],On[zn]=null,Ci=On[--zn],On[zn]=null,Ti=On[--zn],On[zn]=null}var Dn=null,Rn=null,xt=!1,$n=null;function Ag(t,e){var n=kn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function pp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Dn=t,Rn=or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Dn=t,Rn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Hr!==null?{id:Ti,overflow:Ci}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=kn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Dn=t,Rn=null,!0):!1;default:return!1}}function nf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function rf(t){if(xt){var e=Rn;if(e){var n=e;if(!pp(t,e)){if(nf(t))throw Error(ie(418));e=or(n.nextSibling);var i=Dn;e&&pp(t,e)?Ag(i,n):(t.flags=t.flags&-4097|2,xt=!1,Dn=t)}}else{if(nf(t))throw Error(ie(418));t.flags=t.flags&-4097|2,xt=!1,Dn=t}}}function mp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dn=t}function Mo(t){if(t!==Dn)return!1;if(!xt)return mp(t),xt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Zu(t.type,t.memoizedProps)),e&&(e=Rn)){if(nf(t))throw Sg(),Error(ie(418));for(;e;)Ag(t,e),e=or(e.nextSibling)}if(mp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Rn=or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Rn=null}}else Rn=Dn?or(t.stateNode.nextSibling):null;return!0}function Sg(){for(var t=Rn;t;)t=or(t.nextSibling)}function Bs(){Rn=Dn=null,xt=!1}function Fd(t){$n===null?$n=[t]:$n.push(t)}var Py=zi.ReactCurrentBatchConfig;function oa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function wo(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function gp(t){var e=t._init;return e(t._payload)}function Eg(t){function e(d,g){if(t){var x=d.deletions;x===null?(d.deletions=[g],d.flags|=16):x.push(g)}}function n(d,g){if(!t)return null;for(;g!==null;)e(d,g),g=g.sibling;return null}function i(d,g){for(d=new Map;g!==null;)g.key!==null?d.set(g.key,g):d.set(g.index,g),g=g.sibling;return d}function r(d,g){return d=fr(d,g),d.index=0,d.sibling=null,d}function s(d,g,x){return d.index=x,t?(x=d.alternate,x!==null?(x=x.index,x<g?(d.flags|=2,g):x):(d.flags|=2,g)):(d.flags|=1048576,g)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,g,x,S){return g===null||g.tag!==6?(g=Gc(x,d.mode,S),g.return=d,g):(g=r(g,x),g.return=d,g)}function l(d,g,x,S){var C=x.type;return C===ps?f(d,g,x.props.children,S,x.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===qi&&gp(C)===g.type)?(S=r(g,x.props),S.ref=oa(d,g,x),S.return=d,S):(S=dl(x.type,x.key,x.props,null,d.mode,S),S.ref=oa(d,g,x),S.return=d,S)}function c(d,g,x,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=Vc(x,d.mode,S),g.return=d,g):(g=r(g,x.children||[]),g.return=d,g)}function f(d,g,x,S,C){return g===null||g.tag!==7?(g=Or(x,d.mode,S,C),g.return=d,g):(g=r(g,x),g.return=d,g)}function u(d,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Gc(""+g,d.mode,x),g.return=d,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case po:return x=dl(g.type,g.key,g.props,null,d.mode,x),x.ref=oa(d,null,g),x.return=d,x;case hs:return g=Vc(g,d.mode,x),g.return=d,g;case qi:var S=g._init;return u(d,S(g._payload),x)}if(va(g)||na(g))return g=Or(g,d.mode,x,null),g.return=d,g;wo(d,g)}return null}function h(d,g,x,S){var C=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:o(d,g,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case po:return x.key===C?l(d,g,x,S):null;case hs:return x.key===C?c(d,g,x,S):null;case qi:return C=x._init,h(d,g,C(x._payload),S)}if(va(x)||na(x))return C!==null?null:f(d,g,x,S,null);wo(d,x)}return null}function p(d,g,x,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(x)||null,o(g,d,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case po:return d=d.get(S.key===null?x:S.key)||null,l(g,d,S,C);case hs:return d=d.get(S.key===null?x:S.key)||null,c(g,d,S,C);case qi:var M=S._init;return p(d,g,x,M(S._payload),C)}if(va(S)||na(S))return d=d.get(x)||null,f(g,d,S,C,null);wo(g,S)}return null}function v(d,g,x,S){for(var C=null,M=null,b=g,L=g=0,w=null;b!==null&&L<x.length;L++){b.index>L?(w=b,b=null):w=b.sibling;var A=h(d,b,x[L],S);if(A===null){b===null&&(b=w);break}t&&b&&A.alternate===null&&e(d,b),g=s(A,g,L),M===null?C=A:M.sibling=A,M=A,b=w}if(L===x.length)return n(d,b),xt&&br(d,L),C;if(b===null){for(;L<x.length;L++)b=u(d,x[L],S),b!==null&&(g=s(b,g,L),M===null?C=b:M.sibling=b,M=b);return xt&&br(d,L),C}for(b=i(d,b);L<x.length;L++)w=p(b,d,L,x[L],S),w!==null&&(t&&w.alternate!==null&&b.delete(w.key===null?L:w.key),g=s(w,g,L),M===null?C=w:M.sibling=w,M=w);return t&&b.forEach(function(R){return e(d,R)}),xt&&br(d,L),C}function _(d,g,x,S){var C=na(x);if(typeof C!="function")throw Error(ie(150));if(x=C.call(x),x==null)throw Error(ie(151));for(var M=C=null,b=g,L=g=0,w=null,A=x.next();b!==null&&!A.done;L++,A=x.next()){b.index>L?(w=b,b=null):w=b.sibling;var R=h(d,b,A.value,S);if(R===null){b===null&&(b=w);break}t&&b&&R.alternate===null&&e(d,b),g=s(R,g,L),M===null?C=R:M.sibling=R,M=R,b=w}if(A.done)return n(d,b),xt&&br(d,L),C;if(b===null){for(;!A.done;L++,A=x.next())A=u(d,A.value,S),A!==null&&(g=s(A,g,L),M===null?C=A:M.sibling=A,M=A);return xt&&br(d,L),C}for(b=i(d,b);!A.done;L++,A=x.next())A=p(b,d,L,A.value,S),A!==null&&(t&&A.alternate!==null&&b.delete(A.key===null?L:A.key),g=s(A,g,L),M===null?C=A:M.sibling=A,M=A);return t&&b.forEach(function(k){return e(d,k)}),xt&&br(d,L),C}function m(d,g,x,S){if(typeof x=="object"&&x!==null&&x.type===ps&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case po:e:{for(var C=x.key,M=g;M!==null;){if(M.key===C){if(C=x.type,C===ps){if(M.tag===7){n(d,M.sibling),g=r(M,x.props.children),g.return=d,d=g;break e}}else if(M.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===qi&&gp(C)===M.type){n(d,M.sibling),g=r(M,x.props),g.ref=oa(d,M,x),g.return=d,d=g;break e}n(d,M);break}else e(d,M);M=M.sibling}x.type===ps?(g=Or(x.props.children,d.mode,S,x.key),g.return=d,d=g):(S=dl(x.type,x.key,x.props,null,d.mode,S),S.ref=oa(d,g,x),S.return=d,d=S)}return a(d);case hs:e:{for(M=x.key;g!==null;){if(g.key===M)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){n(d,g.sibling),g=r(g,x.children||[]),g.return=d,d=g;break e}else{n(d,g);break}else e(d,g);g=g.sibling}g=Vc(x,d.mode,S),g.return=d,d=g}return a(d);case qi:return M=x._init,m(d,g,M(x._payload),S)}if(va(x))return v(d,g,x,S);if(na(x))return _(d,g,x,S);wo(d,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(n(d,g.sibling),g=r(g,x),g.return=d,d=g):(n(d,g),g=Gc(x,d.mode,S),g.return=d,d=g),a(d)):n(d,g)}return m}var Fs=Eg(!0),Mg=Eg(!1),Pl=xr(null),Il=null,Ss=null,Od=null;function zd(){Od=Ss=Il=null}function kd(t){var e=Pl.current;gt(Pl),t._currentValue=e}function sf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Rs(t,e){Il=t,Od=Ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(xn=!0),t.firstContext=null)}function Gn(t){var e=t._currentValue;if(Od!==t)if(t={context:t,memoizedValue:e,next:null},Ss===null){if(Il===null)throw Error(ie(308));Ss=t,Il.dependencies={lanes:0,firstContext:t}}else Ss=Ss.next=t;return e}var Ur=null;function Hd(t){Ur===null?Ur=[t]:Ur.push(t)}function wg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Hd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ni(t,i)}function Ni(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ji=!1;function Gd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Di(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function lr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ni(t,n)}return r=i.interleaved,r===null?(e.next=e,Hd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ni(t,n)}function al(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Cd(t,n)}}function vp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ll(t,e,n,i){var r=t.updateQueue;Ji=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(s!==null){var u=r.baseState;a=0,f=c=l=null,o=s;do{var h=o.lane,p=o.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,_=o;switch(h=e,p=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){u=v.call(p,u,h);break e}u=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,h=typeof v=="function"?v.call(p,u,h):v,h==null)break e;u=Mt({},u,h);break e;case 2:Ji=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else p={eventTime:p,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=p,l=u):f=f.next=p,a|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=u),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Vr|=a,t.lanes=a,t.memoizedState=u}}function xp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var so={},mi=xr(so),Wa=xr(so),Xa=xr(so);function Nr(t){if(t===so)throw Error(ie(174));return t}function Vd(t,e){switch(dt(Xa,e),dt(Wa,t),dt(mi,so),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ou(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ou(e,t)}gt(mi),dt(mi,e)}function Os(){gt(mi),gt(Wa),gt(Xa)}function Cg(t){Nr(Xa.current);var e=Nr(mi.current),n=Ou(e,t.type);e!==n&&(dt(Wa,t),dt(mi,n))}function Wd(t){Wa.current===t&&(gt(mi),gt(Wa))}var St=xr(0);function Ul(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bc=[];function Xd(){for(var t=0;t<Bc.length;t++)Bc[t]._workInProgressVersionPrimary=null;Bc.length=0}var ol=zi.ReactCurrentDispatcher,Fc=zi.ReactCurrentBatchConfig,Gr=0,Et=null,Ut=null,Ht=null,Nl=!1,Ca=!1,Ya=0,Iy=0;function Zt(){throw Error(ie(321))}function Yd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!si(t[n],e[n]))return!1;return!0}function jd(t,e,n,i,r,s){if(Gr=s,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ol.current=t===null||t.memoizedState===null?By:Fy,t=n(i,r),Ca){s=0;do{if(Ca=!1,Ya=0,25<=s)throw Error(ie(301));s+=1,Ht=Ut=null,e.updateQueue=null,ol.current=Oy,t=n(i,r)}while(Ca)}if(ol.current=Bl,e=Ut!==null&&Ut.next!==null,Gr=0,Ht=Ut=Et=null,Nl=!1,e)throw Error(ie(300));return t}function Qd(){var t=Ya!==0;return Ya=0,t}function li(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?Et.memoizedState=Ht=t:Ht=Ht.next=t,Ht}function Vn(){if(Ut===null){var t=Et.alternate;t=t!==null?t.memoizedState:null}else t=Ut.next;var e=Ht===null?Et.memoizedState:Ht.next;if(e!==null)Ht=e,Ut=t;else{if(t===null)throw Error(ie(310));Ut=t,t={memoizedState:Ut.memoizedState,baseState:Ut.baseState,baseQueue:Ut.baseQueue,queue:Ut.queue,next:null},Ht===null?Et.memoizedState=Ht=t:Ht=Ht.next=t}return Ht}function ja(t,e){return typeof e=="function"?e(t):e}function Oc(t){var e=Vn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=Ut,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var f=c.lane;if((Gr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var u={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=u,a=i):l=l.next=u,Et.lanes|=f,Vr|=f}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,si(i,e.memoizedState)||(xn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Et.lanes|=s,Vr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function zc(t){var e=Vn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);si(s,e.memoizedState)||(xn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function bg(){}function Rg(t,e){var n=Et,i=Vn(),r=e(),s=!si(i.memoizedState,r);if(s&&(i.memoizedState=r,xn=!0),i=i.queue,Kd(Ig.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ht!==null&&Ht.memoizedState.tag&1){if(n.flags|=2048,Qa(9,Pg.bind(null,n,i,r,e),void 0,null),Wt===null)throw Error(ie(349));Gr&30||Dg(n,e,r)}return r}function Dg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Pg(t,e,n,i){e.value=n,e.getSnapshot=i,Lg(e)&&Ug(t)}function Ig(t,e,n){return n(function(){Lg(e)&&Ug(t)})}function Lg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!si(t,n)}catch{return!0}}function Ug(t){var e=Ni(t,1);e!==null&&ii(e,t,1,-1)}function _p(t){var e=li();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:t},e.queue=t,t=t.dispatch=Ny.bind(null,Et,t),[e.memoizedState,t]}function Qa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Ng(){return Vn().memoizedState}function ll(t,e,n,i){var r=li();Et.flags|=t,r.memoizedState=Qa(1|e,n,void 0,i===void 0?null:i)}function $l(t,e,n,i){var r=Vn();i=i===void 0?null:i;var s=void 0;if(Ut!==null){var a=Ut.memoizedState;if(s=a.destroy,i!==null&&Yd(i,a.deps)){r.memoizedState=Qa(e,n,s,i);return}}Et.flags|=t,r.memoizedState=Qa(1|e,n,s,i)}function yp(t,e){return ll(8390656,8,t,e)}function Kd(t,e){return $l(2048,8,t,e)}function Bg(t,e){return $l(4,2,t,e)}function Fg(t,e){return $l(4,4,t,e)}function Og(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function zg(t,e,n){return n=n!=null?n.concat([t]):null,$l(4,4,Og.bind(null,e,t),n)}function qd(){}function kg(t,e){var n=Vn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Yd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Hg(t,e){var n=Vn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Yd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Gg(t,e,n){return Gr&21?(si(n,e)||(n=j0(),Et.lanes|=n,Vr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,xn=!0),t.memoizedState=n)}function Ly(t,e){var n=st;st=n!==0&&4>n?n:4,t(!0);var i=Fc.transition;Fc.transition={};try{t(!1),e()}finally{st=n,Fc.transition=i}}function Vg(){return Vn().memoizedState}function Uy(t,e,n){var i=ur(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Wg(t))Xg(e,n);else if(n=wg(t,e,n,i),n!==null){var r=un();ii(n,t,i,r),Yg(n,e,i)}}function Ny(t,e,n){var i=ur(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Wg(t))Xg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,si(o,a)){var l=e.interleaved;l===null?(r.next=r,Hd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=wg(t,e,r,i),n!==null&&(r=un(),ii(n,t,i,r),Yg(n,e,i))}}function Wg(t){var e=t.alternate;return t===Et||e!==null&&e===Et}function Xg(t,e){Ca=Nl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Yg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Cd(t,n)}}var Bl={readContext:Gn,useCallback:Zt,useContext:Zt,useEffect:Zt,useImperativeHandle:Zt,useInsertionEffect:Zt,useLayoutEffect:Zt,useMemo:Zt,useReducer:Zt,useRef:Zt,useState:Zt,useDebugValue:Zt,useDeferredValue:Zt,useTransition:Zt,useMutableSource:Zt,useSyncExternalStore:Zt,useId:Zt,unstable_isNewReconciler:!1},By={readContext:Gn,useCallback:function(t,e){return li().memoizedState=[t,e===void 0?null:e],t},useContext:Gn,useEffect:yp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ll(4194308,4,Og.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ll(4194308,4,t,e)},useInsertionEffect:function(t,e){return ll(4,2,t,e)},useMemo:function(t,e){var n=li();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=li();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Uy.bind(null,Et,t),[i.memoizedState,t]},useRef:function(t){var e=li();return t={current:t},e.memoizedState=t},useState:_p,useDebugValue:qd,useDeferredValue:function(t){return li().memoizedState=t},useTransition:function(){var t=_p(!1),e=t[0];return t=Ly.bind(null,t[1]),li().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Et,r=li();if(xt){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),Wt===null)throw Error(ie(349));Gr&30||Dg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,yp(Ig.bind(null,i,s,t),[t]),i.flags|=2048,Qa(9,Pg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=li(),e=Wt.identifierPrefix;if(xt){var n=Ci,i=Ti;n=(i&~(1<<32-ni(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ya++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Iy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Fy={readContext:Gn,useCallback:kg,useContext:Gn,useEffect:Kd,useImperativeHandle:zg,useInsertionEffect:Bg,useLayoutEffect:Fg,useMemo:Hg,useReducer:Oc,useRef:Ng,useState:function(){return Oc(ja)},useDebugValue:qd,useDeferredValue:function(t){var e=Vn();return Gg(e,Ut.memoizedState,t)},useTransition:function(){var t=Oc(ja)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:bg,useSyncExternalStore:Rg,useId:Vg,unstable_isNewReconciler:!1},Oy={readContext:Gn,useCallback:kg,useContext:Gn,useEffect:Kd,useImperativeHandle:zg,useInsertionEffect:Bg,useLayoutEffect:Fg,useMemo:Hg,useReducer:zc,useRef:Ng,useState:function(){return zc(ja)},useDebugValue:qd,useDeferredValue:function(t){var e=Vn();return Ut===null?e.memoizedState=t:Gg(e,Ut.memoizedState,t)},useTransition:function(){var t=zc(ja)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:bg,useSyncExternalStore:Rg,useId:Vg,unstable_isNewReconciler:!1};function Jn(t,e){if(t&&t.defaultProps){e=Mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function af(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ec={isMounted:function(t){return(t=t._reactInternals)?Yr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=un(),r=ur(t),s=Di(i,r);s.payload=e,n!=null&&(s.callback=n),e=lr(t,s,r),e!==null&&(ii(e,t,r,i),al(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=un(),r=ur(t),s=Di(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=lr(t,s,r),e!==null&&(ii(e,t,r,i),al(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=un(),i=ur(t),r=Di(n,i);r.tag=2,e!=null&&(r.callback=e),e=lr(t,r,i),e!==null&&(ii(e,t,i,n),al(e,t,i))}};function Ap(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!ka(n,i)||!ka(r,s):!0}function jg(t,e,n){var i=!1,r=pr,s=e.contextType;return typeof s=="object"&&s!==null?s=Gn(s):(r=yn(e)?kr:rn.current,i=e.contextTypes,s=(i=i!=null)?Ns(t,r):pr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ec,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Sp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&ec.enqueueReplaceState(e,e.state,null)}function of(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Gd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Gn(s):(s=yn(e)?kr:rn.current,r.context=Ns(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(af(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ec.enqueueReplaceState(r,r.state,null),Ll(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function zs(t,e){try{var n="",i=e;do n+=d_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function kc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function lf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var zy=typeof WeakMap=="function"?WeakMap:Map;function Qg(t,e,n){n=Di(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ol||(Ol=!0,xf=i),lf(t,e)},n}function Kg(t,e,n){n=Di(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){lf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){lf(t,e),typeof i!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Ep(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new zy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=$y.bind(null,t,e,n),e.then(t,t))}function Mp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function wp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Di(-1,1),e.tag=2,lr(n,e,1))),n.lanes|=1),t)}var ky=zi.ReactCurrentOwner,xn=!1;function ln(t,e,n,i){e.child=t===null?Mg(e,null,n,i):Fs(e,t.child,n,i)}function Tp(t,e,n,i,r){n=n.render;var s=e.ref;return Rs(e,r),i=jd(t,e,n,i,s,r),n=Qd(),t!==null&&!xn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Bi(t,e,r)):(xt&&n&&Nd(e),e.flags|=1,ln(t,e,i,r),e.child)}function Cp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!rh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,qg(t,e,s,i,r)):(t=dl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:ka,n(a,i)&&t.ref===e.ref)return Bi(t,e,r)}return e.flags|=1,t=fr(s,i),t.ref=e.ref,t.return=e,e.child=t}function qg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ka(s,i)&&t.ref===e.ref)if(xn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(xn=!0);else return e.lanes=t.lanes,Bi(t,e,r)}return cf(t,e,n,i,r)}function Jg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},dt(Ms,Cn),Cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,dt(Ms,Cn),Cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,dt(Ms,Cn),Cn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,dt(Ms,Cn),Cn|=i;return ln(t,e,r,n),e.child}function Zg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function cf(t,e,n,i,r){var s=yn(n)?kr:rn.current;return s=Ns(e,s),Rs(e,r),n=jd(t,e,n,i,s,r),i=Qd(),t!==null&&!xn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Bi(t,e,r)):(xt&&i&&Nd(e),e.flags|=1,ln(t,e,n,r),e.child)}function bp(t,e,n,i,r){if(yn(n)){var s=!0;bl(e)}else s=!1;if(Rs(e,r),e.stateNode===null)cl(t,e),jg(e,n,i),of(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Gn(c):(c=yn(n)?kr:rn.current,c=Ns(e,c));var f=n.getDerivedStateFromProps,u=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";u||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Sp(e,a,i,c),Ji=!1;var h=e.memoizedState;a.state=h,Ll(e,i,a,r),l=e.memoizedState,o!==i||h!==l||_n.current||Ji?(typeof f=="function"&&(af(e,n,f,i),l=e.memoizedState),(o=Ji||Ap(e,n,o,i,h,l,c))?(u||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Tg(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Jn(e.type,o),a.props=c,u=e.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Gn(l):(l=yn(n)?kr:rn.current,l=Ns(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==u||h!==l)&&Sp(e,a,i,l),Ji=!1,h=e.memoizedState,a.state=h,Ll(e,i,a,r);var v=e.memoizedState;o!==u||h!==v||_n.current||Ji?(typeof p=="function"&&(af(e,n,p,i),v=e.memoizedState),(c=Ji||Ap(e,n,c,i,h,v,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return uf(t,e,n,i,s,r)}function uf(t,e,n,i,r,s){Zg(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&hp(e,n,!1),Bi(t,e,s);i=e.stateNode,ky.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Fs(e,t.child,null,s),e.child=Fs(e,null,o,s)):ln(t,e,o,s),e.memoizedState=i.state,r&&hp(e,n,!0),e.child}function $g(t){var e=t.stateNode;e.pendingContext?dp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&dp(t,e.context,!1),Vd(t,e.containerInfo)}function Rp(t,e,n,i,r){return Bs(),Fd(r),e.flags|=256,ln(t,e,n,i),e.child}var ff={dehydrated:null,treeContext:null,retryLane:0};function df(t){return{baseLanes:t,cachePool:null,transitions:null}}function ev(t,e,n){var i=e.pendingProps,r=St.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),dt(St,r&1),t===null)return rf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=ic(a,i,0,null),t=Or(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=df(n),e.memoizedState=ff,t):Jd(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Hy(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=fr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=fr(o,s):(s=Or(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?df(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=ff,i}return s=t.child,t=s.sibling,i=fr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Jd(t,e){return e=ic({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function To(t,e,n,i){return i!==null&&Fd(i),Fs(e,t.child,null,n),t=Jd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Hy(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=kc(Error(ie(422))),To(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ic({mode:"visible",children:i.children},r,0,null),s=Or(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Fs(e,t.child,null,a),e.child.memoizedState=df(a),e.memoizedState=ff,s);if(!(e.mode&1))return To(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ie(419)),i=kc(s,i,void 0),To(t,e,a,i)}if(o=(a&t.childLanes)!==0,xn||o){if(i=Wt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ni(t,r),ii(i,t,r,-1))}return ih(),i=kc(Error(ie(421))),To(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=eA.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Rn=or(r.nextSibling),Dn=e,xt=!0,$n=null,t!==null&&(On[zn++]=Ti,On[zn++]=Ci,On[zn++]=Hr,Ti=t.id,Ci=t.overflow,Hr=e),e=Jd(e,i.children),e.flags|=4096,e)}function Dp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),sf(t.return,e,n)}function Hc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function tv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(ln(t,e,i.children,n),i=St.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Dp(t,n,e);else if(t.tag===19)Dp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(dt(St,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ul(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Hc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ul(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Hc(e,!0,n,null,s);break;case"together":Hc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function cl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Bi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Vr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Gy(t,e,n){switch(e.tag){case 3:$g(e),Bs();break;case 5:Cg(e);break;case 1:yn(e.type)&&bl(e);break;case 4:Vd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;dt(Pl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(dt(St,St.current&1),e.flags|=128,null):n&e.child.childLanes?ev(t,e,n):(dt(St,St.current&1),t=Bi(t,e,n),t!==null?t.sibling:null);dt(St,St.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return tv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),dt(St,St.current),i)break;return null;case 22:case 23:return e.lanes=0,Jg(t,e,n)}return Bi(t,e,n)}var nv,hf,iv,rv;nv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hf=function(){};iv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Nr(mi.current);var s=null;switch(n){case"input":r=Uu(t,r),i=Uu(t,i),s=[];break;case"select":r=Mt({},r,{value:void 0}),i=Mt({},i,{value:void 0}),s=[];break;case"textarea":r=Fu(t,r),i=Fu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Tl)}zu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(La.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(La.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&pt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};rv=function(t,e,n,i){n!==i&&(e.flags|=4)};function la(t,e){if(!xt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function $t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Vy(t,e,n){var i=e.pendingProps;switch(Bd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(e),null;case 1:return yn(e.type)&&Cl(),$t(e),null;case 3:return i=e.stateNode,Os(),gt(_n),gt(rn),Xd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Mo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,$n!==null&&(Af($n),$n=null))),hf(t,e),$t(e),null;case 5:Wd(e);var r=Nr(Xa.current);if(n=e.type,t!==null&&e.stateNode!=null)iv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return $t(e),null}if(t=Nr(mi.current),Mo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ui]=e,i[Va]=s,t=(e.mode&1)!==0,n){case"dialog":pt("cancel",i),pt("close",i);break;case"iframe":case"object":case"embed":pt("load",i);break;case"video":case"audio":for(r=0;r<_a.length;r++)pt(_a[r],i);break;case"source":pt("error",i);break;case"img":case"image":case"link":pt("error",i),pt("load",i);break;case"details":pt("toggle",i);break;case"input":zh(i,s),pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},pt("invalid",i);break;case"textarea":Hh(i,s),pt("invalid",i)}zu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Eo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Eo(i.textContent,o,t),r=["children",""+o]):La.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&pt("scroll",i)}switch(n){case"input":mo(i),kh(i,s,!0);break;case"textarea":mo(i),Gh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Tl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=I0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ui]=e,t[Va]=i,nv(t,e,!1,!1),e.stateNode=t;e:{switch(a=ku(n,i),n){case"dialog":pt("cancel",t),pt("close",t),r=i;break;case"iframe":case"object":case"embed":pt("load",t),r=i;break;case"video":case"audio":for(r=0;r<_a.length;r++)pt(_a[r],t);r=i;break;case"source":pt("error",t),r=i;break;case"img":case"image":case"link":pt("error",t),pt("load",t),r=i;break;case"details":pt("toggle",t),r=i;break;case"input":zh(t,i),r=Uu(t,i),pt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Mt({},i,{value:void 0}),pt("invalid",t);break;case"textarea":Hh(t,i),r=Fu(t,i),pt("invalid",t);break;default:r=i}zu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?N0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&L0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ua(t,l):typeof l=="number"&&Ua(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(La.hasOwnProperty(s)?l!=null&&s==="onScroll"&&pt("scroll",t):l!=null&&Ad(t,s,l,a))}switch(n){case"input":mo(t),kh(t,i,!1);break;case"textarea":mo(t),Gh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+hr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ws(t,!!i.multiple,s,!1):i.defaultValue!=null&&ws(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Tl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $t(e),null;case 6:if(t&&e.stateNode!=null)rv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=Nr(Xa.current),Nr(mi.current),Mo(e)){if(i=e.stateNode,n=e.memoizedProps,i[ui]=e,(s=i.nodeValue!==n)&&(t=Dn,t!==null))switch(t.tag){case 3:Eo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Eo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ui]=e,e.stateNode=i}return $t(e),null;case 13:if(gt(St),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xt&&Rn!==null&&e.mode&1&&!(e.flags&128))Sg(),Bs(),e.flags|=98560,s=!1;else if(s=Mo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[ui]=e}else Bs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$t(e),s=!1}else $n!==null&&(Af($n),$n=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||St.current&1?Nt===0&&(Nt=3):ih())),e.updateQueue!==null&&(e.flags|=4),$t(e),null);case 4:return Os(),hf(t,e),t===null&&Ha(e.stateNode.containerInfo),$t(e),null;case 10:return kd(e.type._context),$t(e),null;case 17:return yn(e.type)&&Cl(),$t(e),null;case 19:if(gt(St),s=e.memoizedState,s===null)return $t(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)la(s,!1);else{if(Nt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Ul(t),a!==null){for(e.flags|=128,la(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return dt(St,St.current&1|2),e.child}t=t.sibling}s.tail!==null&&bt()>ks&&(e.flags|=128,i=!0,la(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ul(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),la(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!xt)return $t(e),null}else 2*bt()-s.renderingStartTime>ks&&n!==1073741824&&(e.flags|=128,i=!0,la(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=bt(),e.sibling=null,n=St.current,dt(St,i?n&1|2:n&1),e):($t(e),null);case 22:case 23:return nh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Cn&1073741824&&($t(e),e.subtreeFlags&6&&(e.flags|=8192)):$t(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function Wy(t,e){switch(Bd(e),e.tag){case 1:return yn(e.type)&&Cl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Os(),gt(_n),gt(rn),Xd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Wd(e),null;case 13:if(gt(St),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));Bs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return gt(St),null;case 4:return Os(),null;case 10:return kd(e.type._context),null;case 22:case 23:return nh(),null;case 24:return null;default:return null}}var Co=!1,nn=!1,Xy=typeof WeakSet=="function"?WeakSet:Set,me=null;function Es(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ct(t,e,i)}else n.current=null}function pf(t,e,n){try{n()}catch(i){Ct(t,e,i)}}var Pp=!1;function Yy(t,e){if(qu=El,t=cg(),Ud(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,f=0,u=t,h=null;t:for(;;){for(var p;u!==n||r!==0&&u.nodeType!==3||(o=a+r),u!==s||i!==0&&u.nodeType!==3||(l=a+i),u.nodeType===3&&(a+=u.nodeValue.length),(p=u.firstChild)!==null;)h=u,u=p;for(;;){if(u===t)break t;if(h===n&&++c===r&&(o=a),h===s&&++f===i&&(l=a),(p=u.nextSibling)!==null)break;u=h,h=u.parentNode}u=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ju={focusedElem:t,selectionRange:n},El=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,m=v.memoizedState,d=e.stateNode,g=d.getSnapshotBeforeUpdate(e.elementType===e.type?_:Jn(e.type,_),m);d.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(S){Ct(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return v=Pp,Pp=!1,v}function ba(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&pf(e,n,s)}r=r.next}while(r!==i)}}function tc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function mf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function sv(t){var e=t.alternate;e!==null&&(t.alternate=null,sv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ui],delete e[Va],delete e[ef],delete e[by],delete e[Ry])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function av(t){return t.tag===5||t.tag===3||t.tag===4}function Ip(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||av(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Tl));else if(i!==4&&(t=t.child,t!==null))for(gf(t,e,n),t=t.sibling;t!==null;)gf(t,e,n),t=t.sibling}function vf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(vf(t,e,n),t=t.sibling;t!==null;)vf(t,e,n),t=t.sibling}var Yt=null,Zn=!1;function Gi(t,e,n){for(n=n.child;n!==null;)ov(t,e,n),n=n.sibling}function ov(t,e,n){if(pi&&typeof pi.onCommitFiberUnmount=="function")try{pi.onCommitFiberUnmount(jl,n)}catch{}switch(n.tag){case 5:nn||Es(n,e);case 6:var i=Yt,r=Zn;Yt=null,Gi(t,e,n),Yt=i,Zn=r,Yt!==null&&(Zn?(t=Yt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Yt.removeChild(n.stateNode));break;case 18:Yt!==null&&(Zn?(t=Yt,n=n.stateNode,t.nodeType===8?Uc(t.parentNode,n):t.nodeType===1&&Uc(t,n),Oa(t)):Uc(Yt,n.stateNode));break;case 4:i=Yt,r=Zn,Yt=n.stateNode.containerInfo,Zn=!0,Gi(t,e,n),Yt=i,Zn=r;break;case 0:case 11:case 14:case 15:if(!nn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&pf(n,e,a),r=r.next}while(r!==i)}Gi(t,e,n);break;case 1:if(!nn&&(Es(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Ct(n,e,o)}Gi(t,e,n);break;case 21:Gi(t,e,n);break;case 22:n.mode&1?(nn=(i=nn)||n.memoizedState!==null,Gi(t,e,n),nn=i):Gi(t,e,n);break;default:Gi(t,e,n)}}function Lp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Xy),e.forEach(function(i){var r=tA.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function jn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Yt=o.stateNode,Zn=!1;break e;case 3:Yt=o.stateNode.containerInfo,Zn=!0;break e;case 4:Yt=o.stateNode.containerInfo,Zn=!0;break e}o=o.return}if(Yt===null)throw Error(ie(160));ov(s,a,r),Yt=null,Zn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Ct(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)lv(e,t),e=e.sibling}function lv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(jn(e,t),oi(t),i&4){try{ba(3,t,t.return),tc(3,t)}catch(_){Ct(t,t.return,_)}try{ba(5,t,t.return)}catch(_){Ct(t,t.return,_)}}break;case 1:jn(e,t),oi(t),i&512&&n!==null&&Es(n,n.return);break;case 5:if(jn(e,t),oi(t),i&512&&n!==null&&Es(n,n.return),t.flags&32){var r=t.stateNode;try{Ua(r,"")}catch(_){Ct(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&D0(r,s),ku(o,a);var c=ku(o,s);for(a=0;a<l.length;a+=2){var f=l[a],u=l[a+1];f==="style"?N0(r,u):f==="dangerouslySetInnerHTML"?L0(r,u):f==="children"?Ua(r,u):Ad(r,f,u,c)}switch(o){case"input":Nu(r,s);break;case"textarea":P0(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ws(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?ws(r,!!s.multiple,s.defaultValue,!0):ws(r,!!s.multiple,s.multiple?[]:"",!1))}r[Va]=s}catch(_){Ct(t,t.return,_)}}break;case 6:if(jn(e,t),oi(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){Ct(t,t.return,_)}}break;case 3:if(jn(e,t),oi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Oa(e.containerInfo)}catch(_){Ct(t,t.return,_)}break;case 4:jn(e,t),oi(t);break;case 13:jn(e,t),oi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(eh=bt())),i&4&&Lp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(nn=(c=nn)||f,jn(e,t),nn=c):jn(e,t),oi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(me=t,f=t.child;f!==null;){for(u=me=f;me!==null;){switch(h=me,p=h.child,h.tag){case 0:case 11:case 14:case 15:ba(4,h,h.return);break;case 1:Es(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){Ct(i,n,_)}}break;case 5:Es(h,h.return);break;case 22:if(h.memoizedState!==null){Np(u);continue}}p!==null?(p.return=h,me=p):Np(u)}f=f.sibling}e:for(f=null,u=t;;){if(u.tag===5){if(f===null){f=u;try{r=u.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=u.stateNode,l=u.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=U0("display",a))}catch(_){Ct(t,t.return,_)}}}else if(u.tag===6){if(f===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(_){Ct(t,t.return,_)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===t)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;f===u&&(f=null),u=u.return}f===u&&(f=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:jn(e,t),oi(t),i&4&&Lp(t);break;case 21:break;default:jn(e,t),oi(t)}}function oi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(av(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ua(r,""),i.flags&=-33);var s=Ip(t);vf(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Ip(t);gf(t,o,a);break;default:throw Error(ie(161))}}catch(l){Ct(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function jy(t,e,n){me=t,cv(t)}function cv(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Co;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||nn;o=Co;var c=nn;if(Co=a,(nn=l)&&!c)for(me=r;me!==null;)a=me,l=a.child,a.tag===22&&a.memoizedState!==null?Bp(r):l!==null?(l.return=a,me=l):Bp(r);for(;s!==null;)me=s,cv(s),s=s.sibling;me=r,Co=o,nn=c}Up(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):Up(t)}}function Up(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:nn||tc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!nn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Jn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&xp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}xp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var u=f.dehydrated;u!==null&&Oa(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}nn||e.flags&512&&mf(e)}catch(h){Ct(e,e.return,h)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function Np(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function Bp(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{tc(4,e)}catch(l){Ct(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ct(e,r,l)}}var s=e.return;try{mf(e)}catch(l){Ct(e,s,l)}break;case 5:var a=e.return;try{mf(e)}catch(l){Ct(e,a,l)}}}catch(l){Ct(e,e.return,l)}if(e===t){me=null;break}var o=e.sibling;if(o!==null){o.return=e.return,me=o;break}me=e.return}}var Qy=Math.ceil,Fl=zi.ReactCurrentDispatcher,Zd=zi.ReactCurrentOwner,Hn=zi.ReactCurrentBatchConfig,et=0,Wt=null,Lt=null,jt=0,Cn=0,Ms=xr(0),Nt=0,Ka=null,Vr=0,nc=0,$d=0,Ra=null,vn=null,eh=0,ks=1/0,Ei=null,Ol=!1,xf=null,cr=null,bo=!1,tr=null,zl=0,Da=0,_f=null,ul=-1,fl=0;function un(){return et&6?bt():ul!==-1?ul:ul=bt()}function ur(t){return t.mode&1?et&2&&jt!==0?jt&-jt:Py.transition!==null?(fl===0&&(fl=j0()),fl):(t=st,t!==0||(t=window.event,t=t===void 0?16:eg(t.type)),t):1}function ii(t,e,n,i){if(50<Da)throw Da=0,_f=null,Error(ie(185));no(t,n,i),(!(et&2)||t!==Wt)&&(t===Wt&&(!(et&2)&&(nc|=n),Nt===4&&$i(t,jt)),An(t,i),n===1&&et===0&&!(e.mode&1)&&(ks=bt()+500,Zl&&_r()))}function An(t,e){var n=t.callbackNode;P_(t,e);var i=Sl(t,t===Wt?jt:0);if(i===0)n!==null&&Xh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Xh(n),e===1)t.tag===0?Dy(Fp.bind(null,t)):_g(Fp.bind(null,t)),Ty(function(){!(et&6)&&_r()}),n=null;else{switch(Q0(i)){case 1:n=Td;break;case 4:n=X0;break;case 16:n=Al;break;case 536870912:n=Y0;break;default:n=Al}n=vv(n,uv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function uv(t,e){if(ul=-1,fl=0,et&6)throw Error(ie(327));var n=t.callbackNode;if(Ds()&&t.callbackNode!==n)return null;var i=Sl(t,t===Wt?jt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=kl(t,i);else{e=i;var r=et;et|=2;var s=dv();(Wt!==t||jt!==e)&&(Ei=null,ks=bt()+500,Fr(t,e));do try{Jy();break}catch(o){fv(t,o)}while(!0);zd(),Fl.current=s,et=r,Lt!==null?e=0:(Wt=null,jt=0,e=Nt)}if(e!==0){if(e===2&&(r=Xu(t),r!==0&&(i=r,e=yf(t,r))),e===1)throw n=Ka,Fr(t,0),$i(t,i),An(t,bt()),n;if(e===6)$i(t,i);else{if(r=t.current.alternate,!(i&30)&&!Ky(r)&&(e=kl(t,i),e===2&&(s=Xu(t),s!==0&&(i=s,e=yf(t,s))),e===1))throw n=Ka,Fr(t,0),$i(t,i),An(t,bt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:Rr(t,vn,Ei);break;case 3:if($i(t,i),(i&130023424)===i&&(e=eh+500-bt(),10<e)){if(Sl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){un(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=$u(Rr.bind(null,t,vn,Ei),e);break}Rr(t,vn,Ei);break;case 4:if($i(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-ni(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=bt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Qy(i/1960))-i,10<i){t.timeoutHandle=$u(Rr.bind(null,t,vn,Ei),i);break}Rr(t,vn,Ei);break;case 5:Rr(t,vn,Ei);break;default:throw Error(ie(329))}}}return An(t,bt()),t.callbackNode===n?uv.bind(null,t):null}function yf(t,e){var n=Ra;return t.current.memoizedState.isDehydrated&&(Fr(t,e).flags|=256),t=kl(t,e),t!==2&&(e=vn,vn=n,e!==null&&Af(e)),t}function Af(t){vn===null?vn=t:vn.push.apply(vn,t)}function Ky(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!si(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $i(t,e){for(e&=~$d,e&=~nc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ni(e),i=1<<n;t[n]=-1,e&=~i}}function Fp(t){if(et&6)throw Error(ie(327));Ds();var e=Sl(t,0);if(!(e&1))return An(t,bt()),null;var n=kl(t,e);if(t.tag!==0&&n===2){var i=Xu(t);i!==0&&(e=i,n=yf(t,i))}if(n===1)throw n=Ka,Fr(t,0),$i(t,e),An(t,bt()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Rr(t,vn,Ei),An(t,bt()),null}function th(t,e){var n=et;et|=1;try{return t(e)}finally{et=n,et===0&&(ks=bt()+500,Zl&&_r())}}function Wr(t){tr!==null&&tr.tag===0&&!(et&6)&&Ds();var e=et;et|=1;var n=Hn.transition,i=st;try{if(Hn.transition=null,st=1,t)return t()}finally{st=i,Hn.transition=n,et=e,!(et&6)&&_r()}}function nh(){Cn=Ms.current,gt(Ms)}function Fr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,wy(n)),Lt!==null)for(n=Lt.return;n!==null;){var i=n;switch(Bd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Cl();break;case 3:Os(),gt(_n),gt(rn),Xd();break;case 5:Wd(i);break;case 4:Os();break;case 13:gt(St);break;case 19:gt(St);break;case 10:kd(i.type._context);break;case 22:case 23:nh()}n=n.return}if(Wt=t,Lt=t=fr(t.current,null),jt=Cn=e,Nt=0,Ka=null,$d=nc=Vr=0,vn=Ra=null,Ur!==null){for(e=0;e<Ur.length;e++)if(n=Ur[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Ur=null}return t}function fv(t,e){do{var n=Lt;try{if(zd(),ol.current=Bl,Nl){for(var i=Et.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Nl=!1}if(Gr=0,Ht=Ut=Et=null,Ca=!1,Ya=0,Zd.current=null,n===null||n.return===null){Nt=1,Ka=e,Lt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=jt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=o,u=f.tag;if(!(f.mode&1)&&(u===0||u===11||u===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=Mp(a);if(p!==null){p.flags&=-257,wp(p,a,o,s,e),p.mode&1&&Ep(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){Ep(s,c,e),ih();break e}l=Error(ie(426))}}else if(xt&&o.mode&1){var m=Mp(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),wp(m,a,o,s,e),Fd(zs(l,o));break e}}s=l=zs(l,o),Nt!==4&&(Nt=2),Ra===null?Ra=[s]:Ra.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Qg(s,l,e);vp(s,d);break e;case 1:o=l;var g=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(cr===null||!cr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Kg(s,o,e);vp(s,S);break e}}s=s.return}while(s!==null)}pv(n)}catch(C){e=C,Lt===n&&n!==null&&(Lt=n=n.return);continue}break}while(!0)}function dv(){var t=Fl.current;return Fl.current=Bl,t===null?Bl:t}function ih(){(Nt===0||Nt===3||Nt===2)&&(Nt=4),Wt===null||!(Vr&268435455)&&!(nc&268435455)||$i(Wt,jt)}function kl(t,e){var n=et;et|=2;var i=dv();(Wt!==t||jt!==e)&&(Ei=null,Fr(t,e));do try{qy();break}catch(r){fv(t,r)}while(!0);if(zd(),et=n,Fl.current=i,Lt!==null)throw Error(ie(261));return Wt=null,jt=0,Nt}function qy(){for(;Lt!==null;)hv(Lt)}function Jy(){for(;Lt!==null&&!S_();)hv(Lt)}function hv(t){var e=gv(t.alternate,t,Cn);t.memoizedProps=t.pendingProps,e===null?pv(t):Lt=e,Zd.current=null}function pv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Wy(n,e),n!==null){n.flags&=32767,Lt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Nt=6,Lt=null;return}}else if(n=Vy(n,e,Cn),n!==null){Lt=n;return}if(e=e.sibling,e!==null){Lt=e;return}Lt=e=t}while(e!==null);Nt===0&&(Nt=5)}function Rr(t,e,n){var i=st,r=Hn.transition;try{Hn.transition=null,st=1,Zy(t,e,n,i)}finally{Hn.transition=r,st=i}return null}function Zy(t,e,n,i){do Ds();while(tr!==null);if(et&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(I_(t,s),t===Wt&&(Lt=Wt=null,jt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||bo||(bo=!0,vv(Al,function(){return Ds(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Hn.transition,Hn.transition=null;var a=st;st=1;var o=et;et|=4,Zd.current=null,Yy(t,n),lv(n,t),xy(Ju),El=!!qu,Ju=qu=null,t.current=n,jy(n),E_(),et=o,st=a,Hn.transition=s}else t.current=n;if(bo&&(bo=!1,tr=t,zl=r),s=t.pendingLanes,s===0&&(cr=null),T_(n.stateNode),An(t,bt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ol)throw Ol=!1,t=xf,xf=null,t;return zl&1&&t.tag!==0&&Ds(),s=t.pendingLanes,s&1?t===_f?Da++:(Da=0,_f=t):Da=0,_r(),null}function Ds(){if(tr!==null){var t=Q0(zl),e=Hn.transition,n=st;try{if(Hn.transition=null,st=16>t?16:t,tr===null)var i=!1;else{if(t=tr,tr=null,zl=0,et&6)throw Error(ie(331));var r=et;for(et|=4,me=t.current;me!==null;){var s=me,a=s.child;if(me.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(me=c;me!==null;){var f=me;switch(f.tag){case 0:case 11:case 15:ba(8,f,s)}var u=f.child;if(u!==null)u.return=f,me=u;else for(;me!==null;){f=me;var h=f.sibling,p=f.return;if(sv(f),f===c){me=null;break}if(h!==null){h.return=p,me=h;break}me=p}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}me=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,me=a;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ba(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,me=d;break e}me=s.return}}var g=t.current;for(me=g;me!==null;){a=me;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,me=x;else e:for(a=g;me!==null;){if(o=me,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:tc(9,o)}}catch(C){Ct(o,o.return,C)}if(o===a){me=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,me=S;break e}me=o.return}}if(et=r,_r(),pi&&typeof pi.onPostCommitFiberRoot=="function")try{pi.onPostCommitFiberRoot(jl,t)}catch{}i=!0}return i}finally{st=n,Hn.transition=e}}return!1}function Op(t,e,n){e=zs(n,e),e=Qg(t,e,1),t=lr(t,e,1),e=un(),t!==null&&(no(t,1,e),An(t,e))}function Ct(t,e,n){if(t.tag===3)Op(t,t,n);else for(;e!==null;){if(e.tag===3){Op(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(cr===null||!cr.has(i))){t=zs(n,t),t=Kg(e,t,1),e=lr(e,t,1),t=un(),e!==null&&(no(e,1,t),An(e,t));break}}e=e.return}}function $y(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=un(),t.pingedLanes|=t.suspendedLanes&n,Wt===t&&(jt&n)===n&&(Nt===4||Nt===3&&(jt&130023424)===jt&&500>bt()-eh?Fr(t,0):$d|=n),An(t,e)}function mv(t,e){e===0&&(t.mode&1?(e=xo,xo<<=1,!(xo&130023424)&&(xo=4194304)):e=1);var n=un();t=Ni(t,e),t!==null&&(no(t,e,n),An(t,n))}function eA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),mv(t,n)}function tA(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),mv(t,n)}var gv;gv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||_n.current)xn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return xn=!1,Gy(t,e,n);xn=!!(t.flags&131072)}else xn=!1,xt&&e.flags&1048576&&yg(e,Dl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;cl(t,e),t=e.pendingProps;var r=Ns(e,rn.current);Rs(e,n),r=jd(null,e,i,t,r,n);var s=Qd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yn(i)?(s=!0,bl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Gd(e),r.updater=ec,e.stateNode=r,r._reactInternals=e,of(e,i,t,n),e=uf(null,e,i,!0,s,n)):(e.tag=0,xt&&s&&Nd(e),ln(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(cl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=iA(i),t=Jn(i,t),r){case 0:e=cf(null,e,i,t,n);break e;case 1:e=bp(null,e,i,t,n);break e;case 11:e=Tp(null,e,i,t,n);break e;case 14:e=Cp(null,e,i,Jn(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),cf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),bp(t,e,i,r,n);case 3:e:{if($g(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Tg(t,e),Ll(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=zs(Error(ie(423)),e),e=Rp(t,e,i,n,r);break e}else if(i!==r){r=zs(Error(ie(424)),e),e=Rp(t,e,i,n,r);break e}else for(Rn=or(e.stateNode.containerInfo.firstChild),Dn=e,xt=!0,$n=null,n=Mg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bs(),i===r){e=Bi(t,e,n);break e}ln(t,e,i,n)}e=e.child}return e;case 5:return Cg(e),t===null&&rf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Zu(i,r)?a=null:s!==null&&Zu(i,s)&&(e.flags|=32),Zg(t,e),ln(t,e,a,n),e.child;case 6:return t===null&&rf(e),null;case 13:return ev(t,e,n);case 4:return Vd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Fs(e,null,i,n):ln(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),Tp(t,e,i,r,n);case 7:return ln(t,e,e.pendingProps,n),e.child;case 8:return ln(t,e,e.pendingProps.children,n),e.child;case 12:return ln(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,dt(Pl,i._currentValue),i._currentValue=a,s!==null)if(si(s.value,a)){if(s.children===r.children&&!_n.current){e=Bi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Di(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),sf(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ie(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),sf(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}ln(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Rs(e,n),r=Gn(r),i=i(r),e.flags|=1,ln(t,e,i,n),e.child;case 14:return i=e.type,r=Jn(i,e.pendingProps),r=Jn(i.type,r),Cp(t,e,i,r,n);case 15:return qg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),cl(t,e),e.tag=1,yn(i)?(t=!0,bl(e)):t=!1,Rs(e,n),jg(e,i,r),of(e,i,r,n),uf(null,e,i,!0,t,n);case 19:return tv(t,e,n);case 22:return Jg(t,e,n)}throw Error(ie(156,e.tag))};function vv(t,e){return W0(t,e)}function nA(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,e,n,i){return new nA(t,e,n,i)}function rh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function iA(t){if(typeof t=="function")return rh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ed)return 11;if(t===Md)return 14}return 2}function fr(t,e){var n=t.alternate;return n===null?(n=kn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function dl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")rh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case ps:return Or(n.children,r,s,e);case Sd:a=8,r|=8;break;case Du:return t=kn(12,n,e,r|2),t.elementType=Du,t.lanes=s,t;case Pu:return t=kn(13,n,e,r),t.elementType=Pu,t.lanes=s,t;case Iu:return t=kn(19,n,e,r),t.elementType=Iu,t.lanes=s,t;case C0:return ic(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case w0:a=10;break e;case T0:a=9;break e;case Ed:a=11;break e;case Md:a=14;break e;case qi:a=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=kn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Or(t,e,n,i){return t=kn(7,t,i,e),t.lanes=n,t}function ic(t,e,n,i){return t=kn(22,t,i,e),t.elementType=C0,t.lanes=n,t.stateNode={isHidden:!1},t}function Gc(t,e,n){return t=kn(6,t,null,e),t.lanes=n,t}function Vc(t,e,n){return e=kn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function rA(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ec(0),this.expirationTimes=Ec(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ec(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function sh(t,e,n,i,r,s,a,o,l){return t=new rA(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=kn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gd(s),t}function sA(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function xv(t){if(!t)return pr;t=t._reactInternals;e:{if(Yr(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(yn(n))return xg(t,n,e)}return e}function _v(t,e,n,i,r,s,a,o,l){return t=sh(n,i,!0,t,r,s,a,o,l),t.context=xv(null),n=t.current,i=un(),r=ur(n),s=Di(i,r),s.callback=e??null,lr(n,s,r),t.current.lanes=r,no(t,r,i),An(t,i),t}function rc(t,e,n,i){var r=e.current,s=un(),a=ur(r);return n=xv(n),e.context===null?e.context=n:e.pendingContext=n,e=Di(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=lr(r,e,a),t!==null&&(ii(t,r,a,s),al(t,r,a)),a}function Hl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function zp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ah(t,e){zp(t,e),(t=t.alternate)&&zp(t,e)}function aA(){return null}var yv=typeof reportError=="function"?reportError:function(t){console.error(t)};function oh(t){this._internalRoot=t}sc.prototype.render=oh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));rc(t,e,null,null)};sc.prototype.unmount=oh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Wr(function(){rc(null,t,null,null)}),e[Ui]=null}};function sc(t){this._internalRoot=t}sc.prototype.unstable_scheduleHydration=function(t){if(t){var e=J0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Zi.length&&e!==0&&e<Zi[n].priority;n++);Zi.splice(n,0,t),n===0&&$0(t)}};function lh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ac(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function kp(){}function oA(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Hl(a);s.call(c)}}var a=_v(e,i,t,0,null,!1,!1,"",kp);return t._reactRootContainer=a,t[Ui]=a.current,Ha(t.nodeType===8?t.parentNode:t),Wr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Hl(l);o.call(c)}}var l=sh(t,0,!1,null,null,!1,!1,"",kp);return t._reactRootContainer=l,t[Ui]=l.current,Ha(t.nodeType===8?t.parentNode:t),Wr(function(){rc(e,l,n,i)}),l}function oc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Hl(a);o.call(l)}}rc(e,a,t,r)}else a=oA(n,e,t,r,i);return Hl(a)}K0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=xa(e.pendingLanes);n!==0&&(Cd(e,n|1),An(e,bt()),!(et&6)&&(ks=bt()+500,_r()))}break;case 13:Wr(function(){var i=Ni(t,1);if(i!==null){var r=un();ii(i,t,1,r)}}),ah(t,1)}};bd=function(t){if(t.tag===13){var e=Ni(t,134217728);if(e!==null){var n=un();ii(e,t,134217728,n)}ah(t,134217728)}};q0=function(t){if(t.tag===13){var e=ur(t),n=Ni(t,e);if(n!==null){var i=un();ii(n,t,e,i)}ah(t,e)}};J0=function(){return st};Z0=function(t,e){var n=st;try{return st=t,e()}finally{st=n}};Gu=function(t,e,n){switch(e){case"input":if(Nu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Jl(i);if(!r)throw Error(ie(90));R0(i),Nu(i,r)}}}break;case"textarea":P0(t,n);break;case"select":e=n.value,e!=null&&ws(t,!!n.multiple,e,!1)}};O0=th;z0=Wr;var lA={usingClientEntryPoint:!1,Events:[ro,xs,Jl,B0,F0,th]},ca={findFiberByHostInstance:Lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cA={bundleType:ca.bundleType,version:ca.version,rendererPackageName:ca.rendererPackageName,rendererConfig:ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=G0(t),t===null?null:t.stateNode},findFiberByHostInstance:ca.findFiberByHostInstance||aA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ro.isDisabled&&Ro.supportsFiber)try{jl=Ro.inject(cA),pi=Ro}catch{}}Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lA;Ln.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lh(e))throw Error(ie(200));return sA(t,e,null,n)};Ln.createRoot=function(t,e){if(!lh(t))throw Error(ie(299));var n=!1,i="",r=yv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=sh(t,1,!1,null,null,n,!1,i,r),t[Ui]=e.current,Ha(t.nodeType===8?t.parentNode:t),new oh(e)};Ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=G0(e),t=t===null?null:t.stateNode,t};Ln.flushSync=function(t){return Wr(t)};Ln.hydrate=function(t,e,n){if(!ac(e))throw Error(ie(200));return oc(null,t,e,!0,n)};Ln.hydrateRoot=function(t,e,n){if(!lh(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=yv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=_v(e,null,t,1,n??null,r,!1,s,a),t[Ui]=e.current,Ha(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new sc(e)};Ln.render=function(t,e,n){if(!ac(e))throw Error(ie(200));return oc(null,t,e,!1,n)};Ln.unmountComponentAtNode=function(t){if(!ac(t))throw Error(ie(40));return t._reactRootContainer?(Wr(function(){oc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ui]=null})}),!0):!1};Ln.unstable_batchedUpdates=th;Ln.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ac(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return oc(t,e,n,!1,i)};Ln.version="18.3.1-next-f1338f8080-20240426";function Av(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Av)}catch(t){console.error(t)}}Av(),A0.exports=Ln;var uA=A0.exports,Hp=uA;bu.createRoot=Hp.createRoot,bu.hydrateRoot=Hp.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qa(){return qa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},qa.apply(this,arguments)}var nr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(nr||(nr={}));const Gp="popstate";function fA(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:a,hash:o}=i.location;return Sf("",{pathname:s,search:a,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:Sv(r)}return hA(e,n,null,t)}function Bt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ch(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function dA(){return Math.random().toString(36).substr(2,8)}function Vp(t,e){return{usr:t.state,key:t.key,idx:e}}function Sf(t,e,n,i){return n===void 0&&(n=null),qa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?qs(e):e,{state:n,key:e&&e.key||i||dA()})}function Sv(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function qs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function hA(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o=nr.Pop,l=null,c=f();c==null&&(c=0,a.replaceState(qa({},a.state,{idx:c}),""));function f(){return(a.state||{idx:null}).idx}function u(){o=nr.Pop;let m=f(),d=m==null?null:m-c;c=m,l&&l({action:o,location:_.location,delta:d})}function h(m,d){o=nr.Push;let g=Sf(_.location,m,d);c=f()+1;let x=Vp(g,c),S=_.createHref(g);try{a.pushState(x,"",S)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;r.location.assign(S)}s&&l&&l({action:o,location:_.location,delta:1})}function p(m,d){o=nr.Replace;let g=Sf(_.location,m,d);c=f();let x=Vp(g,c),S=_.createHref(g);a.replaceState(x,"",S),s&&l&&l({action:o,location:_.location,delta:0})}function v(m){let d=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof m=="string"?m:Sv(m);return g=g.replace(/ $/,"%20"),Bt(d,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,d)}let _={get action(){return o},get location(){return t(r,a)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Gp,u),l=m,()=>{r.removeEventListener(Gp,u),l=null}},createHref(m){return e(r,m)},createURL:v,encodeLocation(m){let d=v(m);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:h,replace:p,go(m){return a.go(m)}};return _}var Wp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Wp||(Wp={}));function pA(t,e,n){return n===void 0&&(n="/"),mA(t,e,n)}function mA(t,e,n,i){let r=typeof e=="string"?qs(e):e,s=wv(r.pathname||"/",n);if(s==null)return null;let a=Ev(t);gA(a);let o=null;for(let l=0;o==null&&l<a.length;++l){let c=bA(s);o=wA(a[l],c)}return o}function Ev(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(Bt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=zr([i,l.relativePath]),f=n.concat(l);s.children&&s.children.length>0&&(Bt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Ev(s.children,e,f,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:EA(c,s.index),routesMeta:f})};return t.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let l of Mv(s.path))r(s,a,l)}),e}function Mv(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=Mv(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function gA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:MA(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const vA=/^:[\w-]+$/,xA=3,_A=2,yA=1,AA=10,SA=-2,Xp=t=>t==="*";function EA(t,e){let n=t.split("/"),i=n.length;return n.some(Xp)&&(i+=SA),e&&(i+=_A),n.filter(r=>!Xp(r)).reduce((r,s)=>r+(vA.test(s)?xA:s===""?yA:AA),i)}function MA(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function wA(t,e,n){let{routesMeta:i}=t,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,f=s==="/"?e:e.slice(s.length)||"/",u=TA({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},f),h=l.route;if(!u)return null;Object.assign(r,u.params),a.push({params:r,pathname:zr([s,u.pathname]),pathnameBase:NA(zr([s,u.pathnameBase])),route:h}),u.pathnameBase!=="/"&&(s=zr([s,u.pathnameBase]))}return a}function TA(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=CA(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((c,f,u)=>{let{paramName:h,isOptional:p}=f;if(h==="*"){let _=o[u]||"";a=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const v=o[u];return p&&!v?c[h]=void 0:c[h]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:a,pattern:t}}function CA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ch(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function bA(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ch(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function wv(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const RA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,DA=t=>RA.test(t);function PA(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?qs(t):t,s;if(n)if(DA(n))s=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),ch(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?s=Yp(n.substring(1),"/"):s=Yp(n,e)}else s=e;return{pathname:s,search:BA(i),hash:FA(r)}}function Yp(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Wc(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function IA(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function LA(t,e){let n=IA(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function UA(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=qs(t):(r=qa({},t),Bt(!r.pathname||!r.pathname.includes("?"),Wc("?","pathname","search",r)),Bt(!r.pathname||!r.pathname.includes("#"),Wc("#","pathname","hash",r)),Bt(!r.search||!r.search.includes("#"),Wc("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=n;else{let u=e.length-1;if(!i&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),u-=1;r.pathname=h.join("/")}o=u>=0?e[u]:"/"}let l=PA(r,o),c=a&&a!=="/"&&a.endsWith("/"),f=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||f)&&(l.pathname+="/"),l}const zr=t=>t.join("/").replace(/\/\/+/g,"/"),NA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),BA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,FA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function OA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Tv=["post","put","patch","delete"];new Set(Tv);const zA=["get",...Tv];new Set(zA);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ja(){return Ja=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ja.apply(this,arguments)}const uh=ne.createContext(null),kA=ne.createContext(null),lc=ne.createContext(null),cc=ne.createContext(null),jr=ne.createContext({outlet:null,matches:[],isDataRoute:!1}),Cv=ne.createContext(null);function uc(){return ne.useContext(cc)!=null}function bv(){return uc()||Bt(!1),ne.useContext(cc).location}function Rv(t){ne.useContext(lc).static||ne.useLayoutEffect(t)}function fc(){let{isDataRoute:t}=ne.useContext(jr);return t?eS():HA()}function HA(){uc()||Bt(!1);let t=ne.useContext(uh),{basename:e,future:n,navigator:i}=ne.useContext(lc),{matches:r}=ne.useContext(jr),{pathname:s}=bv(),a=JSON.stringify(LA(r,n.v7_relativeSplatPath)),o=ne.useRef(!1);return Rv(()=>{o.current=!0}),ne.useCallback(function(c,f){if(f===void 0&&(f={}),!o.current)return;if(typeof c=="number"){i.go(c);return}let u=UA(c,JSON.parse(a),s,f.relative==="path");t==null&&e!=="/"&&(u.pathname=u.pathname==="/"?e:zr([e,u.pathname])),(f.replace?i.replace:i.push)(u,f.state,f)},[e,i,a,s,t])}function GA(){let{matches:t}=ne.useContext(jr),e=t[t.length-1];return e?e.params:{}}function VA(t,e){return WA(t,e)}function WA(t,e,n,i){uc()||Bt(!1);let{navigator:r}=ne.useContext(lc),{matches:s}=ne.useContext(jr),a=s[s.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let c=bv(),f;if(e){var u;let m=typeof e=="string"?qs(e):e;l==="/"||(u=m.pathname)!=null&&u.startsWith(l)||Bt(!1),f=m}else f=c;let h=f.pathname||"/",p=h;if(l!=="/"){let m=l.replace(/^\//,"").split("/");p="/"+h.replace(/^\//,"").split("/").slice(m.length).join("/")}let v=pA(t,{pathname:p}),_=KA(v&&v.map(m=>Object.assign({},m,{params:Object.assign({},o,m.params),pathname:zr([l,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:zr([l,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),s,n,i);return e&&_?ne.createElement(cc.Provider,{value:{location:Ja({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:nr.Pop}},_):_}function XA(){let t=$A(),e=OA(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return ne.createElement(ne.Fragment,null,ne.createElement("h2",null,"Unexpected Application Error!"),ne.createElement("h3",{style:{fontStyle:"italic"}},e),n?ne.createElement("pre",{style:r},n):null,null)}const YA=ne.createElement(XA,null);class jA extends ne.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?ne.createElement(jr.Provider,{value:this.props.routeContext},ne.createElement(Cv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function QA(t){let{routeContext:e,match:n,children:i}=t,r=ne.useContext(uh);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),ne.createElement(jr.Provider,{value:e},i)}function KA(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let f=a.findIndex(u=>u.route.id&&(o==null?void 0:o[u.route.id])!==void 0);f>=0||Bt(!1),a=a.slice(0,Math.min(a.length,f+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let f=0;f<a.length;f++){let u=a[f];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(c=f),u.route.id){let{loaderData:h,errors:p}=n,v=u.route.loader&&h[u.route.id]===void 0&&(!p||p[u.route.id]===void 0);if(u.route.lazy||v){l=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((f,u,h)=>{let p,v=!1,_=null,m=null;n&&(p=o&&u.route.id?o[u.route.id]:void 0,_=u.route.errorElement||YA,l&&(c<0&&h===0?(tS("route-fallback"),v=!0,m=null):c===h&&(v=!0,m=u.route.hydrateFallbackElement||null)));let d=e.concat(a.slice(0,h+1)),g=()=>{let x;return p?x=_:v?x=m:u.route.Component?x=ne.createElement(u.route.Component,null):u.route.element?x=u.route.element:x=f,ne.createElement(QA,{match:u,routeContext:{outlet:f,matches:d,isDataRoute:n!=null},children:x})};return n&&(u.route.ErrorBoundary||u.route.errorElement||h===0)?ne.createElement(jA,{location:n.location,revalidation:n.revalidation,component:_,error:p,children:g(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):g()},null)}var Dv=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Dv||{}),Pv=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Pv||{});function qA(t){let e=ne.useContext(uh);return e||Bt(!1),e}function JA(t){let e=ne.useContext(kA);return e||Bt(!1),e}function ZA(t){let e=ne.useContext(jr);return e||Bt(!1),e}function Iv(t){let e=ZA(),n=e.matches[e.matches.length-1];return n.route.id||Bt(!1),n.route.id}function $A(){var t;let e=ne.useContext(Cv),n=JA(),i=Iv();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function eS(){let{router:t}=qA(Dv.UseNavigateStable),e=Iv(Pv.UseNavigateStable),n=ne.useRef(!1);return Rv(()=>{n.current=!0}),ne.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Ja({fromRouteId:e},s)))},[t,e])}const jp={};function tS(t,e,n){jp[t]||(jp[t]=!0)}function nS(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function ya(t){Bt(!1)}function iS(t){let{basename:e="/",children:n=null,location:i,navigationType:r=nr.Pop,navigator:s,static:a=!1,future:o}=t;uc()&&Bt(!1);let l=e.replace(/^\/*/,"/"),c=ne.useMemo(()=>({basename:l,navigator:s,static:a,future:Ja({v7_relativeSplatPath:!1},o)}),[l,o,s,a]);typeof i=="string"&&(i=qs(i));let{pathname:f="/",search:u="",hash:h="",state:p=null,key:v="default"}=i,_=ne.useMemo(()=>{let m=wv(f,l);return m==null?null:{location:{pathname:m,search:u,hash:h,state:p,key:v},navigationType:r}},[l,f,u,h,p,v,r]);return _==null?null:ne.createElement(lc.Provider,{value:c},ne.createElement(cc.Provider,{children:n,value:_}))}function rS(t){let{children:e,location:n}=t;return VA(Ef(e),n)}new Promise(()=>{});function Ef(t,e){e===void 0&&(e=[]);let n=[];return ne.Children.forEach(t,(i,r)=>{if(!ne.isValidElement(i))return;let s=[...e,r];if(i.type===ne.Fragment){n.push.apply(n,Ef(i.props.children,s));return}i.type!==ya&&Bt(!1),!i.props.index||!i.props.children||Bt(!1);let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=Ef(i.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const sS="6";try{window.__reactRouterVersion=sS}catch{}const aS="startTransition",Qp=$x[aS];function oS(t){let{basename:e,children:n,future:i,window:r}=t,s=ne.useRef();s.current==null&&(s.current=fA({window:r,v5Compat:!0}));let a=s.current,[o,l]=ne.useState({action:a.action,location:a.location}),{v7_startTransition:c}=i||{},f=ne.useCallback(u=>{c&&Qp?Qp(()=>l(u)):l(u)},[l,c]);return ne.useLayoutEffect(()=>a.listen(f),[a,f]),ne.useEffect(()=>nS(i),[i]),ne.createElement(iS,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:a,future:i})}var Kp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Kp||(Kp={}));var qp;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(qp||(qp={}));/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Lv=(...t)=>t.filter((e,n,i)=>!!e&&i.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var cS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=ne.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>ne.createElement("svg",{ref:l,...cS,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:Lv("lucide",r),...o},[...a.map(([c,f])=>ne.createElement(c,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=(t,e)=>{const n=ne.forwardRef(({className:i,...r},s)=>ne.createElement(uS,{ref:s,iconNode:e,className:Lv(`lucide-${lS(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=Jt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=Jt("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=Jt("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=Jt("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=Jt("CirclePlay",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=Jt("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=Jt("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=Jt("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=Jt("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=Jt("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=Jt("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=Jt("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=Jt("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=Jt("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=Jt("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=Jt("Vote",[["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}],["path",{d:"M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z",key:"1ezoue"}],["path",{d:"M22 19H2",key:"nuriw5"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=Jt("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Js="181",SS=0,tm=1,ES=2,Bv=1,MS=2,Si=3,Fi=0,Gt=1,cn=2,Qt=0,Ps=1,nm=2,im=3,rm=4,wS=5,Pr=100,TS=101,CS=102,bS=103,RS=104,DS=200,PS=201,IS=202,LS=203,Mf=204,wf=205,US=206,NS=207,BS=208,FS=209,OS=210,zS=211,kS=212,HS=213,GS=214,Tf=0,Gl=1,Cf=2,Hs=3,bf=4,Rf=5,Df=6,Pf=7,Fv=0,VS=1,WS=2,dr=0,XS=1,YS=2,jS=3,QS=4,KS=5,qS=6,JS=7,Ov=300,Gs=301,Vs=302,If=303,Lf=304,dc=306,Uf=1e3,bi=1001,Nf=1002,fn=1003,ZS=1004,Do=1005,Vt=1006,Xc=1007,Br=1008,qt=1009,zv=1010,kv=1011,Za=1012,fh=1013,mr=1014,Ri=1015,Zs=1016,dh=1017,hh=1018,Ws=1020,Hv=35902,Gv=35899,Vv=1021,Wv=1022,ti=1023,$a=1026,Xs=1027,Xv=1028,ph=1029,mh=1030,gh=1031,vh=1033,hl=33776,pl=33777,ml=33778,gl=33779,Bf=35840,Ff=35841,Of=35842,zf=35843,kf=36196,Hf=37492,Gf=37496,Vf=37808,Wf=37809,Xf=37810,Yf=37811,jf=37812,Qf=37813,Kf=37814,qf=37815,Jf=37816,Zf=37817,$f=37818,ed=37819,td=37820,nd=37821,id=36492,rd=36494,sd=36495,ad=36283,od=36284,ld=36285,cd=36286,Qr=3200,$S=3201,eE=0,tE=1,fi="",ct="srgb",gr="srgb-linear",Vl="linear",lt="srgb",Zr=7680,sm=519,nE=512,iE=513,rE=514,Yv=515,sE=516,aE=517,oE=518,lE=519,am=35044,om="300 es",di=2e3,Wl=2001;function jv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Xl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function cE(){const t=Xl("canvas");return t.style.display="block",t}const lm={};function cm(...t){const e="THREE."+t.shift();console.log(e,...t)}function Oe(...t){const e="THREE."+t.shift();console.warn(e,...t)}function Rt(...t){const e="THREE."+t.shift();console.error(e,...t)}function eo(...t){const e=t.join(" ");e in lm||(lm[e]=!0,Oe(...t))}function uE(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}class ki{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yc=Math.PI/180,ud=180/Math.PI;function ao(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[t&255]+en[t>>8&255]+en[t>>16&255]+en[t>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[n&63|128]+en[n>>8&255]+"-"+en[n>>16&255]+en[n>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function We(t,e,n){return Math.max(e,Math.min(n,t))}function fE(t,e){return(t%e+e)%e}function jc(t,e,n){return(1-n)*t+n*e}function ua(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function gn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ve{constructor(e=0,n=0){ve.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=We(this.x,e.x,n.x),this.y=We(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=We(this.x,e,n),this.y=We(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],f=i[r+2],u=i[r+3],h=s[a+0],p=s[a+1],v=s[a+2],_=s[a+3];if(o<=0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=u;return}if(o>=1){e[n+0]=h,e[n+1]=p,e[n+2]=v,e[n+3]=_;return}if(u!==_||l!==h||c!==p||f!==v){let m=l*h+c*p+f*v+u*_;m<0&&(h=-h,p=-p,v=-v,_=-_,m=-m);let d=1-o;if(m<.9995){const g=Math.acos(m),x=Math.sin(g);d=Math.sin(d*g)/x,o=Math.sin(o*g)/x,l=l*d+h*o,c=c*d+p*o,f=f*d+v*o,u=u*d+_*o}else{l=l*d+h*o,c=c*d+p*o,f=f*d+v*o,u=u*d+_*o;const g=1/Math.sqrt(l*l+c*c+f*f+u*u);l*=g,c*=g,f*=g,u*=g}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=u}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],f=i[r+3],u=s[a],h=s[a+1],p=s[a+2],v=s[a+3];return e[n]=o*v+f*u+l*p-c*h,e[n+1]=l*v+f*h+c*u-o*p,e[n+2]=c*v+f*p+o*h-l*u,e[n+3]=f*v-o*u-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(r/2),u=o(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=h*f*u+c*p*v,this._y=c*p*u-h*f*v,this._z=c*f*v+h*p*u,this._w=c*f*u-h*p*v;break;case"YXZ":this._x=h*f*u+c*p*v,this._y=c*p*u-h*f*v,this._z=c*f*v-h*p*u,this._w=c*f*u+h*p*v;break;case"ZXY":this._x=h*f*u-c*p*v,this._y=c*p*u+h*f*v,this._z=c*f*v+h*p*u,this._w=c*f*u-h*p*v;break;case"ZYX":this._x=h*f*u-c*p*v,this._y=c*p*u+h*f*v,this._z=c*f*v-h*p*u,this._w=c*f*u+h*p*v;break;case"YZX":this._x=h*f*u+c*p*v,this._y=c*p*u+h*f*v,this._z=c*f*v-h*p*u,this._w=c*f*u-h*p*v;break;case"XZY":this._x=h*f*u-c*p*v,this._y=c*p*u-h*f*v,this._z=c*f*v+h*p*u,this._w=c*f*u+h*p*v;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],f=n[6],u=n[10],h=i+o+u;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>u){const p=2*Math.sqrt(1+i-o-u);this._w=(f-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-i-u);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+u-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-i*c,this._z=s*f+a*c+i*l-r*o,this._w=a*f-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,n=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(um.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(um.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),f=2*(o*n-s*r),u=2*(s*i-a*n);return this.x=n+l*c+a*u-o*f,this.y=i+l*f+o*c-s*u,this.z=r+l*u+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=We(this.x,e.x,n.x),this.y=We(this.y,e.y,n.y),this.z=We(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=We(this.x,e,n),this.y=We(this.y,e,n),this.z=We(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qc.copy(this).projectOnVector(e),this.sub(Qc)}reflect(e){return this.sub(Qc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qc=new F,um=new oo;class He{constructor(e,n,i,r,s,a,o,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],u=i[7],h=i[2],p=i[5],v=i[8],_=r[0],m=r[3],d=r[6],g=r[1],x=r[4],S=r[7],C=r[2],M=r[5],b=r[8];return s[0]=a*_+o*g+l*C,s[3]=a*m+o*x+l*M,s[6]=a*d+o*S+l*b,s[1]=c*_+f*g+u*C,s[4]=c*m+f*x+u*M,s[7]=c*d+f*S+u*b,s[2]=h*_+p*g+v*C,s[5]=h*m+p*x+v*M,s[8]=h*d+p*S+v*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return n*a*f-n*o*c-i*s*f+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],u=f*a-o*c,h=o*l-f*s,p=c*s-a*l,v=n*u+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=u*_,e[1]=(r*c-f*i)*_,e[2]=(o*i-r*a)*_,e[3]=h*_,e[4]=(f*n-r*l)*_,e[5]=(r*s-o*n)*_,e[6]=p*_,e[7]=(i*l-c*n)*_,e[8]=(a*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Kc.makeScale(e,n)),this}rotate(e){return this.premultiply(Kc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Kc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Kc=new He,fm=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dm=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dE(){const t={enabled:!0,workingColorSpace:gr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===lt&&(r.r=Pi(r.r),r.g=Pi(r.g),r.b=Pi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===lt&&(r.r=Is(r.r),r.g=Is(r.g),r.b=Is(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===fi?Vl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return eo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return eo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[gr]:{primaries:e,whitePoint:i,transfer:Vl,toXYZ:fm,fromXYZ:dm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ct},outputColorSpaceConfig:{drawingBufferColorSpace:ct}},[ct]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:fm,fromXYZ:dm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ct}}}),t}const nt=dE();function Pi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Is(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let $r;class hE{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{$r===void 0&&($r=Xl("canvas")),$r.width=e.width,$r.height=e.height;const r=$r.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=$r}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Xl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Pi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Pi(n[i]/255)*255):n[i]=Pi(n[i]);return{data:n,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pE=0;class xh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pE++}),this.uuid=ao(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(qc(r[a].image)):s.push(qc(r[a]))}else s=qc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function qc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?hE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}let mE=0;const Jc=new F;class Ft extends ki{constructor(e=Ft.DEFAULT_IMAGE,n=Ft.DEFAULT_MAPPING,i=bi,r=bi,s=Vt,a=Br,o=ti,l=qt,c=Ft.DEFAULT_ANISOTROPY,f=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=ao(),this.name="",this.source=new xh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Jc).x}get height(){return this.source.getSize(Jc).y}get depth(){return this.source.getSize(Jc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Oe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Oe(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ov)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Uf:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case Nf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Uf:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case Nf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=Ov;Ft.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,n=0,i=0,r=1){mt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],u=l[8],h=l[1],p=l[5],v=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(f-h)<.01&&Math.abs(u-_)<.01&&Math.abs(v-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(u+_)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,S=(p+1)/2,C=(d+1)/2,M=(f+h)/4,b=(u+_)/4,L=(v+m)/4;return x>S&&x>C?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=M/i,s=b/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=M/r,s=L/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=b/s,r=L/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-v)*(m-v)+(u-_)*(u-_)+(h-f)*(h-f));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(u-_)/g,this.z=(h-f)/g,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=We(this.x,e.x,n.x),this.y=We(this.y,e.y,n.y),this.z=We(this.z,e.z,n.z),this.w=We(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=We(this.x,e,n),this.y=We(this.y,e,n),this.z=We(this.z,e,n),this.w=We(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gE extends ki{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new mt(0,0,e,n),this.scissorTest=!1,this.viewport=new mt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new Ft(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new xh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sn extends gE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Qv extends Ft{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vE extends Ft{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lo{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qn):Qn.fromBufferAttribute(s,a),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Po.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Po.copy(i.boundingBox)),Po.applyMatrix4(e.matrixWorld),this.union(Po)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fa),Io.subVectors(this.max,fa),es.subVectors(e.a,fa),ts.subVectors(e.b,fa),ns.subVectors(e.c,fa),Vi.subVectors(ts,es),Wi.subVectors(ns,ts),Sr.subVectors(es,ns);let n=[0,-Vi.z,Vi.y,0,-Wi.z,Wi.y,0,-Sr.z,Sr.y,Vi.z,0,-Vi.x,Wi.z,0,-Wi.x,Sr.z,0,-Sr.x,-Vi.y,Vi.x,0,-Wi.y,Wi.x,0,-Sr.y,Sr.x,0];return!Zc(n,es,ts,ns,Io)||(n=[1,0,0,0,1,0,0,0,1],!Zc(n,es,ts,ns,Io))?!1:(Lo.crossVectors(Vi,Wi),n=[Lo.x,Lo.y,Lo.z],Zc(n,es,ts,ns,Io))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const gi=[new F,new F,new F,new F,new F,new F,new F,new F],Qn=new F,Po=new lo,es=new F,ts=new F,ns=new F,Vi=new F,Wi=new F,Sr=new F,fa=new F,Io=new F,Lo=new F,Er=new F;function Zc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Er.fromArray(t,s);const o=r.x*Math.abs(Er.x)+r.y*Math.abs(Er.y)+r.z*Math.abs(Er.z),l=e.dot(Er),c=n.dot(Er),f=i.dot(Er);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const xE=new lo,da=new F,$c=new F;class hc{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):xE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;da.subVectors(e,this.center);const n=da.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(da,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(da.copy(e.center).add($c)),this.expandByPoint(da.copy(e.center).sub($c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const vi=new F,eu=new F,Uo=new F,Xi=new F,tu=new F,No=new F,nu=new F;class Kv{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=vi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,n),vi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){eu.copy(e).add(n).multiplyScalar(.5),Uo.copy(n).sub(e).normalize(),Xi.copy(this.origin).sub(eu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Uo),o=Xi.dot(this.direction),l=-Xi.dot(Uo),c=Xi.lengthSq(),f=Math.abs(1-a*a);let u,h,p,v;if(f>0)if(u=a*l-o,h=a*o-l,v=s*f,u>=0)if(h>=-v)if(h<=v){const _=1/f;u*=_,h*=_,p=u*(u+a*h+2*o)+h*(a*u+h+2*l)+c}else h=s,u=Math.max(0,-(a*h+o)),p=-u*u+h*(h+2*l)+c;else h=-s,u=Math.max(0,-(a*h+o)),p=-u*u+h*(h+2*l)+c;else h<=-v?(u=Math.max(0,-(-a*s+o)),h=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+h*(h+2*l)+c):h<=v?(u=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(u=Math.max(0,-(a*s+o)),h=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+h*(h+2*l)+c);else h=a>0?-s:s,u=Math.max(0,-(a*h+o)),p=-u*u+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(eu).addScaledVector(Uo,h),p}intersectSphere(e,n){vi.subVectors(e.center,this.origin);const i=vi.dot(this.direction),r=vi.dot(vi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,a=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,a=(e.min.y-h.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,n,i,r,s){tu.subVectors(n,e),No.subVectors(i,e),nu.crossVectors(tu,No);let a=this.direction.dot(nu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xi.subVectors(this.origin,e);const l=o*this.direction.dot(No.crossVectors(Xi,No));if(l<0)return null;const c=o*this.direction.dot(tu.cross(Xi));if(c<0||l+c>a)return null;const f=-o*Xi.dot(nu);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dt{constructor(e,n,i,r,s,a,o,l,c,f,u,h,p,v,_,m){Dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,f,u,h,p,v,_,m)}set(e,n,i,r,s,a,o,l,c,f,u,h,p,v,_,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=f,d[10]=u,d[14]=h,d[3]=p,d[7]=v,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/is.setFromMatrixColumn(e,0).length(),s=1/is.setFromMatrixColumn(e,1).length(),a=1/is.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const h=a*f,p=a*u,v=o*f,_=o*u;n[0]=l*f,n[4]=-l*u,n[8]=c,n[1]=p+v*c,n[5]=h-_*c,n[9]=-o*l,n[2]=_-h*c,n[6]=v+p*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*f,p=l*u,v=c*f,_=c*u;n[0]=h+_*o,n[4]=v*o-p,n[8]=a*c,n[1]=a*u,n[5]=a*f,n[9]=-o,n[2]=p*o-v,n[6]=_+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*f,p=l*u,v=c*f,_=c*u;n[0]=h-_*o,n[4]=-a*u,n[8]=v+p*o,n[1]=p+v*o,n[5]=a*f,n[9]=_-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*f,p=a*u,v=o*f,_=o*u;n[0]=l*f,n[4]=v*c-p,n[8]=h*c+_,n[1]=l*u,n[5]=_*c+h,n[9]=p*c-v,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,v=o*l,_=o*c;n[0]=l*f,n[4]=_-h*u,n[8]=v*u+p,n[1]=u,n[5]=a*f,n[9]=-o*f,n[2]=-c*f,n[6]=p*u+v,n[10]=h-_*u}else if(e.order==="XZY"){const h=a*l,p=a*c,v=o*l,_=o*c;n[0]=l*f,n[4]=-u,n[8]=c*f,n[1]=h*u+_,n[5]=a*f,n[9]=p*u-v,n[2]=v*u-p,n[6]=o*f,n[10]=_*u+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_E,e,yE)}lookAt(e,n,i){const r=this.elements;return wn.subVectors(e,n),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Yi.crossVectors(i,wn),Yi.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Yi.crossVectors(i,wn)),Yi.normalize(),Bo.crossVectors(wn,Yi),r[0]=Yi.x,r[4]=Bo.x,r[8]=wn.x,r[1]=Yi.y,r[5]=Bo.y,r[9]=wn.y,r[2]=Yi.z,r[6]=Bo.z,r[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],u=i[5],h=i[9],p=i[13],v=i[2],_=i[6],m=i[10],d=i[14],g=i[3],x=i[7],S=i[11],C=i[15],M=r[0],b=r[4],L=r[8],w=r[12],A=r[1],R=r[5],k=r[9],O=r[13],J=r[2],j=r[6],q=r[10],te=r[14],U=r[3],W=r[7],Y=r[11],de=r[15];return s[0]=a*M+o*A+l*J+c*U,s[4]=a*b+o*R+l*j+c*W,s[8]=a*L+o*k+l*q+c*Y,s[12]=a*w+o*O+l*te+c*de,s[1]=f*M+u*A+h*J+p*U,s[5]=f*b+u*R+h*j+p*W,s[9]=f*L+u*k+h*q+p*Y,s[13]=f*w+u*O+h*te+p*de,s[2]=v*M+_*A+m*J+d*U,s[6]=v*b+_*R+m*j+d*W,s[10]=v*L+_*k+m*q+d*Y,s[14]=v*w+_*O+m*te+d*de,s[3]=g*M+x*A+S*J+C*U,s[7]=g*b+x*R+S*j+C*W,s[11]=g*L+x*k+S*q+C*Y,s[15]=g*w+x*O+S*te+C*de,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],u=e[6],h=e[10],p=e[14],v=e[3],_=e[7],m=e[11],d=e[15];return v*(+s*l*u-r*c*u-s*o*h+i*c*h+r*o*p-i*l*p)+_*(+n*l*p-n*c*h+s*a*h-r*a*p+r*c*f-s*l*f)+m*(+n*c*u-n*o*p-s*a*u+i*a*p+s*o*f-i*c*f)+d*(-r*o*f-n*l*u+n*o*h+r*a*u-i*a*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],u=e[9],h=e[10],p=e[11],v=e[12],_=e[13],m=e[14],d=e[15],g=u*m*c-_*h*c+_*l*p-o*m*p-u*l*d+o*h*d,x=v*h*c-f*m*c-v*l*p+a*m*p+f*l*d-a*h*d,S=f*_*c-v*u*c+v*o*p-a*_*p-f*o*d+a*u*d,C=v*u*l-f*_*l-v*o*h+a*_*h+f*o*m-a*u*m,M=n*g+i*x+r*S+s*C;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/M;return e[0]=g*b,e[1]=(_*h*s-u*m*s-_*r*p+i*m*p+u*r*d-i*h*d)*b,e[2]=(o*m*s-_*l*s+_*r*c-i*m*c-o*r*d+i*l*d)*b,e[3]=(u*l*s-o*h*s-u*r*c+i*h*c+o*r*p-i*l*p)*b,e[4]=x*b,e[5]=(f*m*s-v*h*s+v*r*p-n*m*p-f*r*d+n*h*d)*b,e[6]=(v*l*s-a*m*s-v*r*c+n*m*c+a*r*d-n*l*d)*b,e[7]=(a*h*s-f*l*s+f*r*c-n*h*c-a*r*p+n*l*p)*b,e[8]=S*b,e[9]=(v*u*s-f*_*s-v*i*p+n*_*p+f*i*d-n*u*d)*b,e[10]=(a*_*s-v*o*s+v*i*c-n*_*c-a*i*d+n*o*d)*b,e[11]=(f*o*s-a*u*s-f*i*c+n*u*c+a*i*p-n*o*p)*b,e[12]=C*b,e[13]=(f*_*r-v*u*r+v*i*h-n*_*h-f*i*m+n*u*m)*b,e[14]=(v*o*r-a*_*r-v*i*l+n*_*l+a*i*m-n*o*m)*b,e[15]=(a*u*r-f*o*r+f*i*l-n*u*l-a*i*h+n*o*h)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+i,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,f=a+a,u=o+o,h=s*c,p=s*f,v=s*u,_=a*f,m=a*u,d=o*u,g=l*c,x=l*f,S=l*u,C=i.x,M=i.y,b=i.z;return r[0]=(1-(_+d))*C,r[1]=(p+S)*C,r[2]=(v-x)*C,r[3]=0,r[4]=(p-S)*M,r[5]=(1-(h+d))*M,r[6]=(m+g)*M,r[7]=0,r[8]=(v+x)*b,r[9]=(m-g)*b,r[10]=(1-(h+_))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=is.set(r[0],r[1],r[2]).length();const a=is.set(r[4],r[5],r[6]).length(),o=is.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Kn.copy(this);const c=1/s,f=1/a,u=1/o;return Kn.elements[0]*=c,Kn.elements[1]*=c,Kn.elements[2]*=c,Kn.elements[4]*=f,Kn.elements[5]*=f,Kn.elements[6]*=f,Kn.elements[8]*=u,Kn.elements[9]*=u,Kn.elements[10]*=u,n.setFromRotationMatrix(Kn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=di,l=!1){const c=this.elements,f=2*s/(n-e),u=2*s/(i-r),h=(n+e)/(n-e),p=(i+r)/(i-r);let v,_;if(l)v=s/(a-s),_=a*s/(a-s);else if(o===di)v=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Wl)v=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=di,l=!1){const c=this.elements,f=2/(n-e),u=2/(i-r),h=-(n+e)/(n-e),p=-(i+r)/(i-r);let v,_;if(l)v=1/(a-s),_=a/(a-s);else if(o===di)v=-2/(a-s),_=-(a+s)/(a-s);else if(o===Wl)v=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const is=new F,Kn=new Dt,_E=new F(0,0,0),yE=new F(1,1,1),Yi=new F,Bo=new F,wn=new F,hm=new Dt,pm=new oo;class Oi{constructor(e=0,n=0,i=0,r=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],u=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return hm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return pm.setFromEuler(this),this.setFromQuaternion(pm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class qv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let AE=0;const mm=new F,rs=new oo,xi=new Dt,Fo=new F,ha=new F,SE=new F,EE=new oo,gm=new F(1,0,0),vm=new F(0,1,0),xm=new F(0,0,1),_m={type:"added"},ME={type:"removed"},ss={type:"childadded",child:null},iu={type:"childremoved",child:null};class Sn extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:AE++}),this.uuid=ao(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sn.DEFAULT_UP.clone();const e=new F,n=new Oi,i=new oo,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Dt},normalMatrix:{value:new He}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=Sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return rs.setFromAxisAngle(e,n),this.quaternion.multiply(rs),this}rotateOnWorldAxis(e,n){return rs.setFromAxisAngle(e,n),this.quaternion.premultiply(rs),this}rotateX(e){return this.rotateOnAxis(gm,e)}rotateY(e){return this.rotateOnAxis(vm,e)}rotateZ(e){return this.rotateOnAxis(xm,e)}translateOnAxis(e,n){return mm.copy(e).applyQuaternion(this.quaternion),this.position.add(mm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(gm,e)}translateY(e){return this.translateOnAxis(vm,e)}translateZ(e){return this.translateOnAxis(xm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Fo.copy(e):Fo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(ha,Fo,this.up):xi.lookAt(Fo,ha,this.up),this.quaternion.setFromRotationMatrix(xi),r&&(xi.extractRotation(r.matrixWorld),rs.setFromRotationMatrix(xi),this.quaternion.premultiply(rs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_m),ss.child=e,this.dispatchEvent(ss),ss.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ME),iu.child=e,this.dispatchEvent(iu),iu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_m),ss.child=e,this.dispatchEvent(ss),ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,e,SE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,EE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),u=a(e.shapes),h=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Sn.DEFAULT_UP=new F(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qn=new F,_i=new F,ru=new F,yi=new F,as=new F,os=new F,ym=new F,su=new F,au=new F,ou=new F,lu=new mt,cu=new mt,uu=new mt;class ei{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),qn.subVectors(e,n),r.cross(qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){qn.subVectors(r,n),_i.subVectors(i,n),ru.subVectors(e,n);const a=qn.dot(qn),o=qn.dot(_i),l=qn.dot(ru),c=_i.dot(_i),f=_i.dot(ru),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const h=1/u,p=(c*l-o*f)*h,v=(a*f-o*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,yi.x),l.addScaledVector(a,yi.y),l.addScaledVector(o,yi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return lu.setScalar(0),cu.setScalar(0),uu.setScalar(0),lu.fromBufferAttribute(e,n),cu.fromBufferAttribute(e,i),uu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(lu,s.x),a.addScaledVector(cu,s.y),a.addScaledVector(uu,s.z),a}static isFrontFacing(e,n,i,r){return qn.subVectors(i,n),_i.subVectors(e,n),qn.cross(_i).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),qn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ei.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ei.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;as.subVectors(r,i),os.subVectors(s,i),su.subVectors(e,i);const l=as.dot(su),c=os.dot(su);if(l<=0&&c<=0)return n.copy(i);au.subVectors(e,r);const f=as.dot(au),u=os.dot(au);if(f>=0&&u<=f)return n.copy(r);const h=l*u-f*c;if(h<=0&&l>=0&&f<=0)return a=l/(l-f),n.copy(i).addScaledVector(as,a);ou.subVectors(e,s);const p=as.dot(ou),v=os.dot(ou);if(v>=0&&p<=v)return n.copy(s);const _=p*c-l*v;if(_<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(os,o);const m=f*v-p*u;if(m<=0&&u-f>=0&&p-v>=0)return ym.subVectors(s,r),o=(u-f)/(u-f+(p-v)),n.copy(r).addScaledVector(ym,o);const d=1/(m+_+h);return a=_*d,o=h*d,n.copy(i).addScaledVector(as,a).addScaledVector(os,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},Oo={h:0,s:0,l:0};function fu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=nt.workingColorSpace){return this.r=e,this.g=n,this.b=i,nt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=nt.workingColorSpace){if(e=fE(e,1),n=We(n,0,1),i=We(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=fu(a,s,e+1/3),this.g=fu(a,s,e),this.b=fu(a,s,e-1/3)}return nt.colorSpaceToWorking(this,r),this}setStyle(e,n=ct){function i(s){s!==void 0&&parseFloat(s)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Oe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ct){const i=Jv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ct){return nt.workingToColorSpace(tn.copy(this),e),Math.round(We(tn.r*255,0,255))*65536+Math.round(We(tn.g*255,0,255))*256+Math.round(We(tn.b*255,0,255))}getHexString(e=ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.workingToColorSpace(tn.copy(this),n);const i=tn.r,r=tn.g,s=tn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=f<=.5?u/(a+o):u/(2-a-o),a){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=nt.workingColorSpace){return nt.workingToColorSpace(tn.copy(this),n),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=ct){nt.workingToColorSpace(tn.copy(this),e);const n=tn.r,i=tn.g,r=tn.b;return e!==ct?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+n,ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ji),e.getHSL(Oo);const i=jc(ji.h,Oo.h,n),r=jc(ji.s,Oo.s,n),s=jc(ji.l,Oo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new Je;Je.NAMES=Jv;let wE=0;class Kr extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=ao(),this.name="",this.type="Material",this.blending=Ps,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mf,this.blendDst=wf,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zr,this.stencilZFail=Zr,this.stencilZPass=Zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Oe(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Oe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(i.blending=this.blending),this.side!==Fi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Mf&&(i.blendSrc=this.blendSrc),this.blendDst!==wf&&(i.blendDst=this.blendDst),this.blendEquation!==Pr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Zv extends Kr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=Fv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new F,zo=new ve;let TE=0;class Pn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:TE++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=am,this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)zo.fromBufferAttribute(this,n),zo.applyMatrix3(e),this.setXY(n,zo.x,zo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix3(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix4(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyNormalMatrix(e),this.setXYZ(n,It.x,It.y,It.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.transformDirection(e),this.setXYZ(n,It.x,It.y,It.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ua(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=gn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ua(n,this.array)),n}setX(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ua(n,this.array)),n}setY(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ua(n,this.array)),n}setZ(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ua(n,this.array)),n}setW(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array),s=gn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==am&&(e.usage=this.usage),e}}class $v extends Pn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class ex extends Pn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ri extends Pn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let CE=0;const Fn=new Dt,du=new Sn,ls=new F,Tn=new lo,pa=new lo,kt=new F;class Nn extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:CE++}),this.uuid=ao(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jv(e)?ex:$v)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,n,i){return Fn.makeTranslation(e,n,i),this.applyMatrix4(Fn),this}scale(e,n,i){return Fn.makeScale(e,n,i),this.applyMatrix4(Fn),this}lookAt(e){return du.lookAt(e),du.updateMatrix(),this.applyMatrix4(du.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ri(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Tn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];pa.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(Tn.min,pa.min),Tn.expandByPoint(kt),kt.addVectors(Tn.max,pa.max),Tn.expandByPoint(kt)):(Tn.expandByPoint(pa.min),Tn.expandByPoint(pa.max))}Tn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(kt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)kt.fromBufferAttribute(o,c),l&&(ls.fromBufferAttribute(e,c),kt.add(ls)),r=Math.max(r,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new F,l[L]=new F;const c=new F,f=new F,u=new F,h=new ve,p=new ve,v=new ve,_=new F,m=new F;function d(L,w,A){c.fromBufferAttribute(i,L),f.fromBufferAttribute(i,w),u.fromBufferAttribute(i,A),h.fromBufferAttribute(s,L),p.fromBufferAttribute(s,w),v.fromBufferAttribute(s,A),f.sub(c),u.sub(c),p.sub(h),v.sub(h);const R=1/(p.x*v.y-v.x*p.y);isFinite(R)&&(_.copy(f).multiplyScalar(v.y).addScaledVector(u,-p.y).multiplyScalar(R),m.copy(u).multiplyScalar(p.x).addScaledVector(f,-v.x).multiplyScalar(R),o[L].add(_),o[w].add(_),o[A].add(_),l[L].add(m),l[w].add(m),l[A].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let L=0,w=g.length;L<w;++L){const A=g[L],R=A.start,k=A.count;for(let O=R,J=R+k;O<J;O+=3)d(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const x=new F,S=new F,C=new F,M=new F;function b(L){C.fromBufferAttribute(r,L),M.copy(C);const w=o[L];x.copy(w),x.sub(C.multiplyScalar(C.dot(w))).normalize(),S.crossVectors(M,w);const R=S.dot(l[L])<0?-1:1;a.setXYZW(L,x.x,x.y,x.z,R)}for(let L=0,w=g.length;L<w;++L){const A=g[L],R=A.start,k=A.count;for(let O=R,J=R+k;O<J;O+=3)b(e.getX(O+0)),b(e.getX(O+1)),b(e.getX(O+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new F,s=new F,a=new F,o=new F,l=new F,c=new F,f=new F,u=new F;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,m),f.subVectors(a,s),u.subVectors(r,s),f.cross(u),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(f),l.add(f),c.add(f),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),f.subVectors(a,s),u.subVectors(r,s),f.cross(u),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)kt.fromBufferAttribute(e,n),kt.normalize(),e.setXYZ(n,kt.x,kt.y,kt.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,u=o.normalized,h=new c.constructor(l.length*f);let p=0,v=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*f;for(let d=0;d<f;d++)h[v++]=c[p++]}return new Pn(h,f,u)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Nn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,u=c.length;f<u;f++){const h=c[f],p=e(h,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let u=0,h=c.length;u<h;u++){const p=c[u];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],u=s[c];for(let h=0,p=u.length;h<p;h++)f.push(u[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Am=new Dt,Mr=new Kv,ko=new hc,Sm=new F,Ho=new F,Go=new F,Vo=new F,hu=new F,Wo=new F,Em=new F,Xo=new F;class Wn extends Sn{constructor(e=new Nn,n=new Zv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Wo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],u=s[l];f!==0&&(hu.fromBufferAttribute(u,e),a?Wo.addScaledVector(hu,f):Wo.addScaledVector(hu.sub(n),f))}n.add(Wo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ko.copy(i.boundingSphere),ko.applyMatrix4(s),Mr.copy(e.ray).recast(e.near),!(ko.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(ko,Sm)===null||Mr.origin.distanceToSquared(Sm)>(e.far-e.near)**2))&&(Am.copy(s).invert(),Mr.copy(e.ray).applyMatrix4(Am),!(i.boundingBox!==null&&Mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Mr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,u=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,_=h.length;v<_;v++){const m=h[v],d=a[m.materialIndex],g=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,C=x;S<C;S+=3){const M=o.getX(S),b=o.getX(S+1),L=o.getX(S+2);r=Yo(this,d,e,i,c,f,u,M,b,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=v,d=_;m<d;m+=3){const g=o.getX(m),x=o.getX(m+1),S=o.getX(m+2);r=Yo(this,a,e,i,c,f,u,g,x,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,_=h.length;v<_;v++){const m=h[v],d=a[m.materialIndex],g=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,C=x;S<C;S+=3){const M=S,b=S+1,L=S+2;r=Yo(this,d,e,i,c,f,u,M,b,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=v,d=_;m<d;m+=3){const g=m,x=m+1,S=m+2;r=Yo(this,a,e,i,c,f,u,g,x,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function bE(t,e,n,i,r,s,a,o){let l;if(e.side===Gt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Fi,o),l===null)return null;Xo.copy(o),Xo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Xo);return c<n.near||c>n.far?null:{distance:c,point:Xo.clone(),object:t}}function Yo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Ho),t.getVertexPosition(l,Go),t.getVertexPosition(c,Vo);const f=bE(t,e,n,i,Ho,Go,Vo,Em);if(f){const u=new F;ei.getBarycoord(Em,Ho,Go,Vo,u),r&&(f.uv=ei.getInterpolatedAttribute(r,o,l,c,u,new ve)),s&&(f.uv1=ei.getInterpolatedAttribute(s,o,l,c,u,new ve)),a&&(f.normal=ei.getInterpolatedAttribute(a,o,l,c,u,new F),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new F,materialIndex:0};ei.getNormal(Ho,Go,Vo,h.normal),f.face=h,f.barycoord=u}return f}class co extends Nn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],u=[];let h=0,p=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ri(c,3)),this.setAttribute("normal",new ri(f,3)),this.setAttribute("uv",new ri(u,2));function v(_,m,d,g,x,S,C,M,b,L,w){const A=S/b,R=C/L,k=S/2,O=C/2,J=M/2,j=b+1,q=L+1;let te=0,U=0;const W=new F;for(let Y=0;Y<q;Y++){const de=Y*R-O;for(let Me=0;Me<j;Me++){const $e=Me*A-k;W[_]=$e*g,W[m]=de*x,W[d]=J,c.push(W.x,W.y,W.z),W[_]=0,W[m]=0,W[d]=M>0?1:-1,f.push(W.x,W.y,W.z),u.push(Me/b),u.push(1-Y/L),te+=1}}for(let Y=0;Y<L;Y++)for(let de=0;de<b;de++){const Me=h+de+j*Y,$e=h+de+j*(Y+1),Ze=h+(de+1)+j*(Y+1),rt=h+(de+1)+j*Y;l.push(Me,$e,rt),l.push($e,Ze,rt),U+=6}o.addGroup(p,U,w),p+=U,h+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new co(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ys(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function on(t){const e={};for(let n=0;n<t.length;n++){const i=Ys(t[n]);for(const r in i)e[r]=i[r]}return e}function RE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function tx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const DE={clone:Ys,merge:on};var PE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,IE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pt extends Kr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=PE,this.fragmentShader=IE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=RE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class nx extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qi=new F,Mm=new ve,wm=new ve;class bn extends nx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ud*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ud*2*Math.atan(Math.tan(Yc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,n){return this.getViewBounds(e,Mm,wm),n.subVectors(wm,Mm)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Yc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const cs=-90,us=1;class LE extends Sn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new bn(cs,us,e,n);r.layers=this.layers,this.add(r);const s=new bn(cs,us,e,n);s.layers=this.layers,this.add(s);const a=new bn(cs,us,e,n);a.layers=this.layers,this.add(a);const o=new bn(cs,us,e,n);o.layers=this.layers,this.add(o);const l=new bn(cs,us,e,n);l.layers=this.layers,this.add(l);const c=new bn(cs,us,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(u,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class ix extends Ft{constructor(e=[],n=Gs,i,r,s,a,o,l,c,f){super(e,n,i,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class UE extends sn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ix(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new co(5,5,5),s=new Pt({name:"CubemapFromEquirect",uniforms:Ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gt,blending:Qt});s.uniforms.tEquirect.value=n;const a=new Wn(r,s),o=n.minFilter;return n.minFilter===Br&&(n.minFilter=Vt),new LE(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}class jo extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const NE={type:"move"};class pu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const f=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=f.position.distanceTo(u.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(NE)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new jo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class _h{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Je(e),this.near=n,this.far=i}clone(){return new _h(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class fd extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class BE extends Ft{constructor(e=null,n=1,i=1,r,s,a,o,l,c=fn,f=fn,u,h){super(null,a,o,l,c,f,r,s,u,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ls extends Pn{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const mu=new F,FE=new F,OE=new He;class Dr{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=mu.subVectors(i,n).cross(FE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(mu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||OE.getNormalMatrix(e),r=this.coplanarPoint(mu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new hc,zE=new ve(.5,.5),Qo=new F;class rx{constructor(e=new Dr,n=new Dr,i=new Dr,r=new Dr,s=new Dr,a=new Dr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=di,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],f=s[4],u=s[5],h=s[6],p=s[7],v=s[8],_=s[9],m=s[10],d=s[11],g=s[12],x=s[13],S=s[14],C=s[15];if(r[0].setComponents(c-a,p-f,d-v,C-g).normalize(),r[1].setComponents(c+a,p+f,d+v,C+g).normalize(),r[2].setComponents(c+o,p+u,d+_,C+x).normalize(),r[3].setComponents(c-o,p-u,d-_,C-x).normalize(),i)r[4].setComponents(l,h,m,S).normalize(),r[5].setComponents(c-l,p-h,d-m,C-S).normalize();else if(r[4].setComponents(c-l,p-h,d-m,C-S).normalize(),n===di)r[5].setComponents(c+l,p+h,d+m,C+S).normalize();else if(n===Wl)r[5].setComponents(l,h,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){wr.center.set(0,0,0);const n=zE.distanceTo(e.center);return wr.radius=.7071067811865476+n,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Qo.x=r.normal.x>0?e.max.x:e.min.x,Qo.y=r.normal.y>0?e.max.y:e.min.y,Qo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sx extends Kr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Tm=new Dt,dd=new Kv,Ko=new hc,qo=new F;class kE extends Sn{constructor(e=new Nn,n=new sx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ko.copy(i.boundingSphere),Ko.applyMatrix4(r),Ko.radius+=s,e.ray.intersectsSphere(Ko)===!1)return;Tm.copy(r).invert(),dd.copy(e.ray).applyMatrix4(Tm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let v=h,_=p;v<_;v++){const m=c.getX(v);qo.fromBufferAttribute(u,m),Cm(qo,m,l,r,e,n,this)}}else{const h=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let v=h,_=p;v<_;v++)qo.fromBufferAttribute(u,v),Cm(qo,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Cm(t,e,n,i,r,s,a){const o=dd.distanceSqToPoint(t);if(o<n){const l=new F;dd.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class yh extends Ft{constructor(e,n,i=mr,r,s,a,o=fn,l=fn,c,f=$a,u=1){if(f!==$a&&f!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:u};super(h,r,s,a,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class ax extends Ft{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Hi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Oe("Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let a;n?a=n:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const f=i[r],h=i[r+1]-f,p=(a-f)/h;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=n||(a.isVector2?new ve:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new F,r=[],s=[],a=[],o=new F,l=new Dt;for(let p=0;p<=e;p++){const v=p/e;r[p]=this.getTangentAt(v,new F)}s[0]=new F,a[0]=new F;let c=Number.MAX_VALUE;const f=Math.abs(r[0].x),u=Math.abs(r[0].y),h=Math.abs(r[0].z);f<=c&&(c=f,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(We(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,v))}a[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(We(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],p*v)),a[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ox extends Hi{constructor(e=0,n=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,n=new ve){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const f=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*f-p*u+this.aX,c=h*u+p*f+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class HE extends ox{constructor(e,n,i,r,s,a){super(e,n,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ah(){let t=0,e=0,n=0,i=0;function r(s,a,o,l){t=s,e=o,n=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,f,u){let h=(a-s)/c-(o-s)/(c+f)+(o-a)/f,p=(o-a)/f-(l-a)/(f+u)+(l-o)/u;h*=f,p*=f,r(a,o,h,p)},calc:function(s){const a=s*s,o=a*s;return t+e*s+n*a+i*o}}}const Jo=new F,gu=new Ah,vu=new Ah,xu=new Ah;class GE extends Hi{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new F){const i=n,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,f;this.closed||o>0?c=r[(o-1)%s]:(Jo.subVectors(r[0],r[1]).add(r[0]),c=Jo);const u=r[o%s],h=r[(o+1)%s];if(this.closed||o+2<s?f=r[(o+2)%s]:(Jo.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=Jo),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(f),p);_<1e-4&&(_=1),v<1e-4&&(v=_),m<1e-4&&(m=_),gu.initNonuniformCatmullRom(c.x,u.x,h.x,f.x,v,_,m),vu.initNonuniformCatmullRom(c.y,u.y,h.y,f.y,v,_,m),xu.initNonuniformCatmullRom(c.z,u.z,h.z,f.z,v,_,m)}else this.curveType==="catmullrom"&&(gu.initCatmullRom(c.x,u.x,h.x,f.x,this.tension),vu.initCatmullRom(c.y,u.y,h.y,f.y,this.tension),xu.initCatmullRom(c.z,u.z,h.z,f.z,this.tension));return i.set(gu.calc(l),vu.calc(l),xu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new F().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function bm(t,e,n,i,r){const s=(i-e)*.5,a=(r-n)*.5,o=t*t,l=t*o;return(2*n-2*i+s+a)*l+(-3*n+3*i-2*s-a)*o+s*t+n}function VE(t,e){const n=1-t;return n*n*e}function WE(t,e){return 2*(1-t)*t*e}function XE(t,e){return t*t*e}function Pa(t,e,n,i){return VE(t,e)+WE(t,n)+XE(t,i)}function YE(t,e){const n=1-t;return n*n*n*e}function jE(t,e){const n=1-t;return 3*n*n*t*e}function QE(t,e){return 3*(1-t)*t*t*e}function KE(t,e){return t*t*t*e}function Ia(t,e,n,i,r){return YE(t,e)+jE(t,n)+QE(t,i)+KE(t,r)}class qE extends Hi{constructor(e=new ve,n=new ve,i=new ve,r=new ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new ve){const i=n,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Ia(e,r.x,s.x,a.x,o.x),Ia(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class JE extends Hi{constructor(e=new F,n=new F,i=new F,r=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new F){const i=n,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Ia(e,r.x,s.x,a.x,o.x),Ia(e,r.y,s.y,a.y,o.y),Ia(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ZE extends Hi{constructor(e=new ve,n=new ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new ve){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new ve){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lx extends Hi{constructor(e=new F,n=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new F){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new F){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $E extends Hi{constructor(e=new ve,n=new ve,i=new ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new ve){const i=n,r=this.v0,s=this.v1,a=this.v2;return i.set(Pa(e,r.x,s.x,a.x),Pa(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cx extends Hi{constructor(e=new F,n=new F,i=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new F){const i=n,r=this.v0,s=this.v1,a=this.v2;return i.set(Pa(e,r.x,s.x,a.x),Pa(e,r.y,s.y,a.y),Pa(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class eM extends Hi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new ve){const i=n,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],f=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return i.set(bm(o,l.x,c.x,f.x,u.x),bm(o,l.y,c.y,f.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new ve().fromArray(r))}return this}}var tM=Object.freeze({__proto__:null,ArcCurve:HE,CatmullRomCurve3:GE,CubicBezierCurve:qE,CubicBezierCurve3:JE,EllipseCurve:ox,LineCurve:ZE,LineCurve3:lx,QuadraticBezierCurve:$E,QuadraticBezierCurve3:cx,SplineCurve:eM});class $s extends Nn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,f=l+1,u=e/o,h=n/l,p=[],v=[],_=[],m=[];for(let d=0;d<f;d++){const g=d*h-a;for(let x=0;x<c;x++){const S=x*u-s;v.push(S,-g,0),_.push(0,0,1),m.push(x/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let g=0;g<o;g++){const x=g+c*d,S=g+c*(d+1),C=g+1+c*(d+1),M=g+1+c*d;p.push(x,S,M),p.push(S,C,M)}this.setIndex(p),this.setAttribute("position",new ri(v,3)),this.setAttribute("normal",new ri(_,3)),this.setAttribute("uv",new ri(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.width,e.height,e.widthSegments,e.heightSegments)}}class Sh extends Nn{constructor(e=new cx(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const a=e.computeFrenetFrames(n,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new F,l=new F,c=new ve;let f=new F;const u=[],h=[],p=[],v=[];_(),this.setIndex(v),this.setAttribute("position",new ri(u,3)),this.setAttribute("normal",new ri(h,3)),this.setAttribute("uv",new ri(p,2));function _(){for(let x=0;x<n;x++)m(x);m(s===!1?n:0),g(),d()}function m(x){f=e.getPointAt(x/n,f);const S=a.normals[x],C=a.binormals[x];for(let M=0;M<=r;M++){const b=M/r*Math.PI*2,L=Math.sin(b),w=-Math.cos(b);l.x=w*S.x+L*C.x,l.y=w*S.y+L*C.y,l.z=w*S.z+L*C.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=f.x+i*l.x,o.y=f.y+i*l.y,o.z=f.z+i*l.z,u.push(o.x,o.y,o.z)}}function d(){for(let x=1;x<=n;x++)for(let S=1;S<=r;S++){const C=(r+1)*(x-1)+(S-1),M=(r+1)*x+(S-1),b=(r+1)*x+S,L=(r+1)*(x-1)+S;v.push(C,M,L),v.push(M,b,L)}}function g(){for(let x=0;x<=n;x++)for(let S=0;S<=r;S++)c.x=x/n,c.y=S/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Sh(new tM[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class nM extends Kr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qr,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iM extends Kr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class rM{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(f){o++,s===!1&&r.onStart!==void 0&&r.onStart(f,a,o),s=!0},this.itemEnd=function(f){a++,r.onProgress!==void 0&&r.onProgress(f,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,u){return c.push(f,u),this},this.removeHandler=function(f){const u=c.indexOf(f);return u!==-1&&c.splice(u,2),this},this.getHandler=function(f){for(let u=0,h=c.length;u<h;u+=2){const p=c[u],v=c[u+1];if(p.global&&(p.lastIndex=0),p.test(f))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}class ux extends nx{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class fx extends Nn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class sM extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class aM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}class Ge{constructor(e){this.value=e}clone(){return new Ge(this.value.clone===void 0?this.value:this.value.clone())}}function Rm(t,e,n,i){const r=oM(i);switch(n){case Vv:return t*e;case Xv:return t*e/r.components*r.byteLength;case ph:return t*e/r.components*r.byteLength;case mh:return t*e*2/r.components*r.byteLength;case gh:return t*e*2/r.components*r.byteLength;case Wv:return t*e*3/r.components*r.byteLength;case ti:return t*e*4/r.components*r.byteLength;case vh:return t*e*4/r.components*r.byteLength;case hl:case pl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ml:case gl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ff:case zf:return Math.max(t,16)*Math.max(e,8)/4;case Bf:case Of:return Math.max(t,8)*Math.max(e,8)/2;case kf:case Hf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Gf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Vf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Wf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Xf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Yf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case jf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Qf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Kf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case qf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Jf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Zf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case $f:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ed:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case td:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case nd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case id:case rd:case sd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case ad:case od:return Math.ceil(t/4)*Math.ceil(e/4)*8;case ld:case cd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function oM(t){switch(t){case qt:case zv:return{byteLength:1,components:1};case Za:case kv:case Zs:return{byteLength:2,components:1};case dh:case hh:return{byteLength:2,components:4};case mr:case fh:case Ri:return{byteLength:4,components:1};case Hv:case Gv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Js}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Js);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dx(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function lM(t){const e=new WeakMap;function n(o,l){const c=o.array,f=o.usage,u=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,f),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const f=l.array,u=l.updateRanges;if(t.bindBuffer(c,o),u.length===0)t.bufferSubData(c,0,f);else{u.sort((p,v)=>p.start-v.start);let h=0;for(let p=1;p<u.length;p++){const v=u[h],_=u[p];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++h,u[h]=_)}u.length=h+1;for(let p=0,v=u.length;p<v;p++){const _=u[p];t.bufferSubData(c,_.start*f.BYTES_PER_ELEMENT,f,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var cM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,xM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_M=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,AM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,SM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,EM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,MM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,RM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,DM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,PM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,IM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,LM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,UM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,NM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,BM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zM="gl_FragColor = linearToOutputTexel( gl_FragColor );",kM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,HM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,GM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,VM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,WM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,XM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,YM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,KM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,JM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$M=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,e1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,t1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,n1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,i1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,r1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,a1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,o1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,l1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,c1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,u1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,f1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,d1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,m1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,g1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,v1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,x1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,y1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,A1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,w1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,C1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,b1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,P1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,I1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,L1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,U1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,N1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,B1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,F1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,O1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,z1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,G1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,V1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,X1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Y1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,j1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Q1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,K1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,q1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,J1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Z1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ew=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,iw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ow=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_w=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Aw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ew=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ww=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Cw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Rw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Dw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Lw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ow=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,be={alphahash_fragment:cM,alphahash_pars_fragment:uM,alphamap_fragment:fM,alphamap_pars_fragment:dM,alphatest_fragment:hM,alphatest_pars_fragment:pM,aomap_fragment:mM,aomap_pars_fragment:gM,batching_pars_vertex:vM,batching_vertex:xM,begin_vertex:_M,beginnormal_vertex:yM,bsdfs:AM,iridescence_fragment:SM,bumpmap_pars_fragment:EM,clipping_planes_fragment:MM,clipping_planes_pars_fragment:wM,clipping_planes_pars_vertex:TM,clipping_planes_vertex:CM,color_fragment:bM,color_pars_fragment:RM,color_pars_vertex:DM,color_vertex:PM,common:IM,cube_uv_reflection_fragment:LM,defaultnormal_vertex:UM,displacementmap_pars_vertex:NM,displacementmap_vertex:BM,emissivemap_fragment:FM,emissivemap_pars_fragment:OM,colorspace_fragment:zM,colorspace_pars_fragment:kM,envmap_fragment:HM,envmap_common_pars_fragment:GM,envmap_pars_fragment:VM,envmap_pars_vertex:WM,envmap_physical_pars_fragment:t1,envmap_vertex:XM,fog_vertex:YM,fog_pars_vertex:jM,fog_fragment:QM,fog_pars_fragment:KM,gradientmap_pars_fragment:qM,lightmap_pars_fragment:JM,lights_lambert_fragment:ZM,lights_lambert_pars_fragment:$M,lights_pars_begin:e1,lights_toon_fragment:n1,lights_toon_pars_fragment:i1,lights_phong_fragment:r1,lights_phong_pars_fragment:s1,lights_physical_fragment:a1,lights_physical_pars_fragment:o1,lights_fragment_begin:l1,lights_fragment_maps:c1,lights_fragment_end:u1,logdepthbuf_fragment:f1,logdepthbuf_pars_fragment:d1,logdepthbuf_pars_vertex:h1,logdepthbuf_vertex:p1,map_fragment:m1,map_pars_fragment:g1,map_particle_fragment:v1,map_particle_pars_fragment:x1,metalnessmap_fragment:_1,metalnessmap_pars_fragment:y1,morphinstance_vertex:A1,morphcolor_vertex:S1,morphnormal_vertex:E1,morphtarget_pars_vertex:M1,morphtarget_vertex:w1,normal_fragment_begin:T1,normal_fragment_maps:C1,normal_pars_fragment:b1,normal_pars_vertex:R1,normal_vertex:D1,normalmap_pars_fragment:P1,clearcoat_normal_fragment_begin:I1,clearcoat_normal_fragment_maps:L1,clearcoat_pars_fragment:U1,iridescence_pars_fragment:N1,opaque_fragment:B1,packing:F1,premultiplied_alpha_fragment:O1,project_vertex:z1,dithering_fragment:k1,dithering_pars_fragment:H1,roughnessmap_fragment:G1,roughnessmap_pars_fragment:V1,shadowmap_pars_fragment:W1,shadowmap_pars_vertex:X1,shadowmap_vertex:Y1,shadowmask_pars_fragment:j1,skinbase_vertex:Q1,skinning_pars_vertex:K1,skinning_vertex:q1,skinnormal_vertex:J1,specularmap_fragment:Z1,specularmap_pars_fragment:$1,tonemapping_fragment:ew,tonemapping_pars_fragment:tw,transmission_fragment:nw,transmission_pars_fragment:iw,uv_pars_fragment:rw,uv_pars_vertex:sw,uv_vertex:aw,worldpos_vertex:ow,background_vert:lw,background_frag:cw,backgroundCube_vert:uw,backgroundCube_frag:fw,cube_vert:dw,cube_frag:hw,depth_vert:pw,depth_frag:mw,distanceRGBA_vert:gw,distanceRGBA_frag:vw,equirect_vert:xw,equirect_frag:_w,linedashed_vert:yw,linedashed_frag:Aw,meshbasic_vert:Sw,meshbasic_frag:Ew,meshlambert_vert:Mw,meshlambert_frag:ww,meshmatcap_vert:Tw,meshmatcap_frag:Cw,meshnormal_vert:bw,meshnormal_frag:Rw,meshphong_vert:Dw,meshphong_frag:Pw,meshphysical_vert:Iw,meshphysical_frag:Lw,meshtoon_vert:Uw,meshtoon_frag:Nw,points_vert:Bw,points_frag:Fw,shadow_vert:Ow,shadow_frag:zw,sprite_vert:kw,sprite_frag:Hw},ce={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},ci={basic:{uniforms:on([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:on([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Je(0)}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:on([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:on([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:on([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Je(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:on([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:on([ce.points,ce.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:on([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:on([ce.common,ce.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:on([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:be.meshnormal_vert,fragmentShader:be.meshnormal_frag},sprite:{uniforms:on([ce.sprite,ce.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:be.background_vert,fragmentShader:be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:be.backgroundCube_vert,fragmentShader:be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distanceRGBA:{uniforms:on([ce.common,ce.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distanceRGBA_vert,fragmentShader:be.distanceRGBA_frag},shadow:{uniforms:on([ce.lights,ce.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};ci.physical={uniforms:on([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};const Zo={r:0,b:0,g:0},Tr=new Oi,Gw=new Dt;function Vw(t,e,n,i,r,s,a){const o=new Je(0);let l=s===!0?0:1,c,f,u=null,h=0,p=null;function v(x){let S=x.isScene===!0?x.background:null;return S&&S.isTexture&&(S=(x.backgroundBlurriness>0?n:e).get(S)),S}function _(x){let S=!1;const C=v(x);C===null?d(o,l):C&&C.isColor&&(d(C,1),S=!0);const M=t.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(x,S){const C=v(S);C&&(C.isCubeTexture||C.mapping===dc)?(f===void 0&&(f=new Wn(new co(1,1,1),new Pt({name:"BackgroundCubeMaterial",uniforms:Ys(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(M,b,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Tr.copy(S.backgroundRotation),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),f.material.uniforms.envMap.value=C,f.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Gw.makeRotationFromEuler(Tr)),f.material.toneMapped=nt.getTransfer(C.colorSpace)!==lt,(u!==C||h!==C.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,u=C,h=C.version,p=t.toneMapping),f.layers.enableAll(),x.unshift(f,f.geometry,f.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Wn(new $s(2,2),new Pt({name:"BackgroundMaterial",uniforms:Ys(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=nt.getTransfer(C.colorSpace)!==lt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||h!==C.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,u=C,h=C.version,p=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function d(x,S){x.getRGB(Zo,tx(t)),i.buffers.color.setClear(Zo.r,Zo.g,Zo.b,S,a)}function g(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,S=1){o.set(x),l=S,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,d(o,l)},render:_,addToRenderList:m,dispose:g}}function Ww(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(A,R,k,O,J){let j=!1;const q=u(O,k,R);s!==q&&(s=q,c(s.object)),j=p(A,O,k,J),j&&v(A,O,k,J),J!==null&&e.update(J,t.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,S(A,R,k,O),J!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function l(){return t.createVertexArray()}function c(A){return t.bindVertexArray(A)}function f(A){return t.deleteVertexArray(A)}function u(A,R,k){const O=k.wireframe===!0;let J=i[A.id];J===void 0&&(J={},i[A.id]=J);let j=J[R.id];j===void 0&&(j={},J[R.id]=j);let q=j[O];return q===void 0&&(q=h(l()),j[O]=q),q}function h(A){const R=[],k=[],O=[];for(let J=0;J<n;J++)R[J]=0,k[J]=0,O[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:k,attributeDivisors:O,object:A,attributes:{},index:null}}function p(A,R,k,O){const J=s.attributes,j=R.attributes;let q=0;const te=k.getAttributes();for(const U in te)if(te[U].location>=0){const Y=J[U];let de=j[U];if(de===void 0&&(U==="instanceMatrix"&&A.instanceMatrix&&(de=A.instanceMatrix),U==="instanceColor"&&A.instanceColor&&(de=A.instanceColor)),Y===void 0||Y.attribute!==de||de&&Y.data!==de.data)return!0;q++}return s.attributesNum!==q||s.index!==O}function v(A,R,k,O){const J={},j=R.attributes;let q=0;const te=k.getAttributes();for(const U in te)if(te[U].location>=0){let Y=j[U];Y===void 0&&(U==="instanceMatrix"&&A.instanceMatrix&&(Y=A.instanceMatrix),U==="instanceColor"&&A.instanceColor&&(Y=A.instanceColor));const de={};de.attribute=Y,Y&&Y.data&&(de.data=Y.data),J[U]=de,q++}s.attributes=J,s.attributesNum=q,s.index=O}function _(){const A=s.newAttributes;for(let R=0,k=A.length;R<k;R++)A[R]=0}function m(A){d(A,0)}function d(A,R){const k=s.newAttributes,O=s.enabledAttributes,J=s.attributeDivisors;k[A]=1,O[A]===0&&(t.enableVertexAttribArray(A),O[A]=1),J[A]!==R&&(t.vertexAttribDivisor(A,R),J[A]=R)}function g(){const A=s.newAttributes,R=s.enabledAttributes;for(let k=0,O=R.length;k<O;k++)R[k]!==A[k]&&(t.disableVertexAttribArray(k),R[k]=0)}function x(A,R,k,O,J,j,q){q===!0?t.vertexAttribIPointer(A,R,k,J,j):t.vertexAttribPointer(A,R,k,O,J,j)}function S(A,R,k,O){_();const J=O.attributes,j=k.getAttributes(),q=R.defaultAttributeValues;for(const te in j){const U=j[te];if(U.location>=0){let W=J[te];if(W===void 0&&(te==="instanceMatrix"&&A.instanceMatrix&&(W=A.instanceMatrix),te==="instanceColor"&&A.instanceColor&&(W=A.instanceColor)),W!==void 0){const Y=W.normalized,de=W.itemSize,Me=e.get(W);if(Me===void 0)continue;const $e=Me.buffer,Ze=Me.type,rt=Me.bytesPerElement,X=Ze===t.INT||Ze===t.UNSIGNED_INT||W.gpuType===fh;if(W.isInterleavedBufferAttribute){const Z=W.data,xe=Z.stride,ze=W.offset;if(Z.isInstancedInterleavedBuffer){for(let we=0;we<U.locationSize;we++)d(U.location+we,Z.meshPerAttribute);A.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let we=0;we<U.locationSize;we++)m(U.location+we);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let we=0;we<U.locationSize;we++)x(U.location+we,de/U.locationSize,Ze,Y,xe*rt,(ze+de/U.locationSize*we)*rt,X)}else{if(W.isInstancedBufferAttribute){for(let Z=0;Z<U.locationSize;Z++)d(U.location+Z,W.meshPerAttribute);A.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Z=0;Z<U.locationSize;Z++)m(U.location+Z);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let Z=0;Z<U.locationSize;Z++)x(U.location+Z,de/U.locationSize,Ze,Y,de*rt,de/U.locationSize*Z*rt,X)}}else if(q!==void 0){const Y=q[te];if(Y!==void 0)switch(Y.length){case 2:t.vertexAttrib2fv(U.location,Y);break;case 3:t.vertexAttrib3fv(U.location,Y);break;case 4:t.vertexAttrib4fv(U.location,Y);break;default:t.vertexAttrib1fv(U.location,Y)}}}}g()}function C(){L();for(const A in i){const R=i[A];for(const k in R){const O=R[k];for(const J in O)f(O[J].object),delete O[J];delete R[k]}delete i[A]}}function M(A){if(i[A.id]===void 0)return;const R=i[A.id];for(const k in R){const O=R[k];for(const J in O)f(O[J].object),delete O[J];delete R[k]}delete i[A.id]}function b(A){for(const R in i){const k=i[R];if(k[A.id]===void 0)continue;const O=k[A.id];for(const J in O)f(O[J].object),delete O[J];delete k[A.id]}}function L(){w(),a=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:M,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:g}}function Xw(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function a(c,f,u){u!==0&&(t.drawArraysInstanced(i,c,f,u),n.update(f,i,u))}function o(c,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,u);let p=0;for(let v=0;v<u;v++)p+=f[v];n.update(p,i,1)}function l(c,f,u,h){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)a(c[v],f[v],h[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,h,0,u);let v=0;for(let _=0;_<u;_++)v+=f[_]*h[_];n.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Yw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==ti&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const L=b===Zs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==qt&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Ri&&!L)}function l(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(Oe("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const u=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=v>0,M=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:g,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:C,maxSamples:M}}function jw(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Dr,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const p=u.length!==0||h||i!==0||r;return r=h,i=u.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){n=f(u,h,0)},this.setState=function(u,h,p){const v=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=t.get(u);if(!r||v===null||v.length===0||s&&!m)s?f(null):c();else{const g=s?0:i,x=g*4;let S=d.clippingState||null;l.value=S,S=f(v,h,x,p);for(let C=0;C!==x;++C)S[C]=n[C];d.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(u,h,p,v){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,v!==!0||m===null){const d=p+_*4,g=h.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,S=p;x!==_;++x,S+=4)a.copy(u[x]).applyMatrix4(g,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Qw(t){let e=new WeakMap;function n(a,o){return o===If?a.mapping=Gs:o===Lf&&(a.mapping=Vs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===If||o===Lf)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new UE(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const ir=4,Dm=[.125,.215,.35,.446,.526,.582],Ir=20,Kw=256,ma=new ux,Pm=new Je;let _u=null,yu=0,Au=0,Su=!1;const qw=new F;class Im{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=qw}=s;_u=this._renderer.getRenderTarget(),yu=this._renderer.getActiveCubeFace(),Au=this._renderer.getActiveMipmapLevel(),Su=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Um(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_u,yu,Au),this._renderer.xr.enabled=Su,e.scissorTest=!1,fs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Gs||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_u=this._renderer.getRenderTarget(),yu=this._renderer.getActiveCubeFace(),Au=this._renderer.getActiveMipmapLevel(),Su=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:Zs,format:ti,colorSpace:gr,depthBuffer:!1},r=Lm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lm(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Jw(s)),this._blurMaterial=$w(s,e,n),this._ggxMaterial=Zw(s,e,n)}return r}_compileMaterial(e){const n=new Wn(new Nn,e);this._renderer.compile(n,ma)}_sceneToCubeUV(e,n,i,r,s){const l=new bn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,p=u.toneMapping;u.getClearColor(Pm),u.toneMapping=dr,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wn(new co,new Zv({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let d=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,d=!0):(m.color.copy(Pm),d=!0);for(let x=0;x<6;x++){const S=x%3;S===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[x],s.y,s.z)):S===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[x]));const C=this._cubeSize;fs(r,S*C,x>2?C:0,C,C),u.setRenderTarget(r),d&&u.render(_,l),u.render(e,l)}u.toneMapping=p,u.autoClear=h,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Gs||e.mapping===Vs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Um());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;fs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,ma)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),u=Math.sqrt(c*c-f*f),h=.05+c*.95,p=u*h,{_lodMax:v}=this,_=this._sizeLods[i],m=3*_*(i>v-ir?i-v+ir:0),d=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=v-n,fs(s,m,d,3*_,2*_),r.setRenderTarget(s),r.render(o,ma),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,fs(e,m,d,3*_,2*_),r.setRenderTarget(e),r.render(o,ma)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Rt("blur direction must be either latitudinal or longitudinal!");const f=3,u=this._lodMeshes[r];u.material=c;const h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ir-1),_=s/v,m=isFinite(s)?1+Math.floor(f*_):Ir;m>Ir&&Oe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ir}`);const d=[];let g=0;for(let b=0;b<Ir;++b){const L=b/_,w=Math.exp(-L*L/2);d.push(w),b===0?g+=w:b<m&&(g+=2*w)}for(let b=0;b<d.length;b++)d[b]=d[b]/g;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:x}=this;h.dTheta.value=v,h.mipInt.value=x-i;const S=this._sizeLods[r],C=3*S*(r>x-ir?r-x+ir:0),M=4*(this._cubeSize-S);fs(n,C,M,3*S,2*S),l.setRenderTarget(n),l.render(u,ma)}}function Jw(t){const e=[],n=[],i=[];let r=t;const s=t-ir+1+Dm.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-ir?l=Dm[a-t+ir-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),f=-c,u=1+c,h=[f,f,u,f,u,u,f,f,u,u,f,u],p=6,v=6,_=3,m=2,d=1,g=new Float32Array(_*v*p),x=new Float32Array(m*v*p),S=new Float32Array(d*v*p);for(let M=0;M<p;M++){const b=M%3*2/3-1,L=M>2?0:-1,w=[b,L,0,b+2/3,L,0,b+2/3,L+1,0,b,L,0,b+2/3,L+1,0,b,L+1,0];g.set(w,_*v*M),x.set(h,m*v*M);const A=[M,M,M,M,M,M];S.set(A,d*v*M)}const C=new Nn;C.setAttribute("position",new Pn(g,_)),C.setAttribute("uv",new Pn(x,m)),C.setAttribute("faceIndex",new Pn(S,d)),i.push(new Wn(C,null)),r>ir&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Lm(t,e,n){const i=new sn(t,e,n);return i.texture.mapping=dc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Zw(t,e,n){return new Pt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Kw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function $w(t,e,n){const i=new Float32Array(Ir),r=new F(0,1,0);return new Pt({name:"SphericalGaussianBlur",defines:{n:Ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function Um(){return new Pt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function Nm(){return new Pt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function pc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function eT(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===If||l===Lf,f=l===Gs||l===Vs;if(c||f){let u=e.get(o);const h=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new Im(t)),u=c?n.fromEquirectangular(o,u):n.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||f&&p&&r(p)?(n===null&&(n=new Im(t)),u=c?n.fromEquirectangular(o):n.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let l=0;const c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function tT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&eo("WebGLRenderer: "+i+" extension not supported."),r}}}function nT(t,e,n,i){const r={},s=new WeakMap;function a(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(u,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(u){const h=u.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function c(u){const h=[],p=u.index,v=u.attributes.position;let _=0;if(p!==null){const g=p.array;_=p.version;for(let x=0,S=g.length;x<S;x+=3){const C=g[x+0],M=g[x+1],b=g[x+2];h.push(C,M,M,b,b,C)}}else if(v!==void 0){const g=v.array;_=v.version;for(let x=0,S=g.length/3-1;x<S;x+=3){const C=x+0,M=x+1,b=x+2;h.push(C,M,M,b,b,C)}}else return;const m=new(jv(h)?ex:$v)(h,1);m.version=_;const d=s.get(u);d&&e.remove(d),s.set(u,m)}function f(u){const h=s.get(u);if(h){const p=u.index;p!==null&&h.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:f}}function iT(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*a),n.update(p,i,1)}function c(h,p,v){v!==0&&(t.drawElementsInstanced(i,p,s,h*a,v),n.update(p,i,v))}function f(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,v);let m=0;for(let d=0;d<v;d++)m+=p[d];n.update(m,i,1)}function u(h,p,v,_){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/a,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,_,0,v);let d=0;for(let g=0;g<v;g++)d+=p[g]*_[g];n.update(d,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=u}function rT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:Rt("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function sT(t,e,n){const i=new WeakMap,r=new mt;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=f!==void 0?f.length:0;let h=i.get(o);if(h===void 0||h.count!==u){let A=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",A)};var p=A;h!==void 0&&h.texture.dispose();const v=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let S=0;v===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let C=o.attributes.position.count*S,M=1;C>e.maxTextureSize&&(M=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const b=new Float32Array(C*M*4*u),L=new Qv(b,C,M,u);L.type=Ri,L.needsUpdate=!0;const w=S*4;for(let R=0;R<u;R++){const k=d[R],O=g[R],J=x[R],j=C*M*4*R;for(let q=0;q<k.count;q++){const te=q*w;v===!0&&(r.fromBufferAttribute(k,q),b[j+te+0]=r.x,b[j+te+1]=r.y,b[j+te+2]=r.z,b[j+te+3]=0),_===!0&&(r.fromBufferAttribute(O,q),b[j+te+4]=r.x,b[j+te+5]=r.y,b[j+te+6]=r.z,b[j+te+7]=0),m===!0&&(r.fromBufferAttribute(J,q),b[j+te+8]=r.x,b[j+te+9]=r.y,b[j+te+10]=r.z,b[j+te+11]=J.itemSize===4?r.w:1)}}h={count:u,texture:L,size:new ve(C,M)},i.set(o,h),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const _=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function aT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,u=e.get(l,f);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return u}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}const hx=new Ft,Bm=new yh(1,1),px=new Qv,mx=new vE,gx=new ix,Fm=[],Om=[],zm=new Float32Array(16),km=new Float32Array(9),Hm=new Float32Array(4);function ea(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Fm[r];if(s===void 0&&(s=new Float32Array(r),Fm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ot(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function mc(t,e){let n=Om[e];n===void 0&&(n=new Int32Array(e),Om[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function oT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function lT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2fv(this.addr,e),zt(n,e)}}function cT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ot(n,e))return;t.uniform3fv(this.addr,e),zt(n,e)}}function uT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4fv(this.addr,e),zt(n,e)}}function fT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),zt(n,e)}else{if(Ot(n,i))return;Hm.set(i),t.uniformMatrix2fv(this.addr,!1,Hm),zt(n,i)}}function dT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),zt(n,e)}else{if(Ot(n,i))return;km.set(i),t.uniformMatrix3fv(this.addr,!1,km),zt(n,i)}}function hT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),zt(n,e)}else{if(Ot(n,i))return;zm.set(i),t.uniformMatrix4fv(this.addr,!1,zm),zt(n,i)}}function pT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function mT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2iv(this.addr,e),zt(n,e)}}function gT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3iv(this.addr,e),zt(n,e)}}function vT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4iv(this.addr,e),zt(n,e)}}function xT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function _T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2uiv(this.addr,e),zt(n,e)}}function yT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3uiv(this.addr,e),zt(n,e)}}function AT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4uiv(this.addr,e),zt(n,e)}}function ST(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Bm.compareFunction=Yv,s=Bm):s=hx,n.setTexture2D(e||s,r)}function ET(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||mx,r)}function MT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||gx,r)}function wT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||px,r)}function TT(t){switch(t){case 5126:return oT;case 35664:return lT;case 35665:return cT;case 35666:return uT;case 35674:return fT;case 35675:return dT;case 35676:return hT;case 5124:case 35670:return pT;case 35667:case 35671:return mT;case 35668:case 35672:return gT;case 35669:case 35673:return vT;case 5125:return xT;case 36294:return _T;case 36295:return yT;case 36296:return AT;case 35678:case 36198:case 36298:case 36306:case 35682:return ST;case 35679:case 36299:case 36307:return ET;case 35680:case 36300:case 36308:case 36293:return MT;case 36289:case 36303:case 36311:case 36292:return wT}}function CT(t,e){t.uniform1fv(this.addr,e)}function bT(t,e){const n=ea(e,this.size,2);t.uniform2fv(this.addr,n)}function RT(t,e){const n=ea(e,this.size,3);t.uniform3fv(this.addr,n)}function DT(t,e){const n=ea(e,this.size,4);t.uniform4fv(this.addr,n)}function PT(t,e){const n=ea(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function IT(t,e){const n=ea(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function LT(t,e){const n=ea(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function UT(t,e){t.uniform1iv(this.addr,e)}function NT(t,e){t.uniform2iv(this.addr,e)}function BT(t,e){t.uniform3iv(this.addr,e)}function FT(t,e){t.uniform4iv(this.addr,e)}function OT(t,e){t.uniform1uiv(this.addr,e)}function zT(t,e){t.uniform2uiv(this.addr,e)}function kT(t,e){t.uniform3uiv(this.addr,e)}function HT(t,e){t.uniform4uiv(this.addr,e)}function GT(t,e,n){const i=this.cache,r=e.length,s=mc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||hx,s[a])}function VT(t,e,n){const i=this.cache,r=e.length,s=mc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||mx,s[a])}function WT(t,e,n){const i=this.cache,r=e.length,s=mc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||gx,s[a])}function XT(t,e,n){const i=this.cache,r=e.length,s=mc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||px,s[a])}function YT(t){switch(t){case 5126:return CT;case 35664:return bT;case 35665:return RT;case 35666:return DT;case 35674:return PT;case 35675:return IT;case 35676:return LT;case 5124:case 35670:return UT;case 35667:case 35671:return NT;case 35668:case 35672:return BT;case 35669:case 35673:return FT;case 5125:return OT;case 36294:return zT;case 36295:return kT;case 36296:return HT;case 35678:case 36198:case 36298:case 36306:case 35682:return GT;case 35679:case 36299:case 36307:return VT;case 35680:case 36300:case 36308:case 36293:return WT;case 36289:case 36303:case 36311:case 36292:return XT}}class jT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=TT(n.type)}}class QT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=YT(n.type)}}class KT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Eu=/(\w+)(\])?(\[|\.)?/g;function Gm(t,e){t.seq.push(e),t.map[e.id]=e}function qT(t,e,n){const i=t.name,r=i.length;for(Eu.lastIndex=0;;){const s=Eu.exec(i),a=Eu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Gm(n,c===void 0?new jT(o,t,e):new QT(o,t,e));break}else{let u=n.map[o];u===void 0&&(u=new KT(o),Gm(n,u)),n=u}}}class vl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);qT(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Vm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const JT=37297;let ZT=0;function $T(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Wm=new He;function eC(t){nt._getMatrix(Wm,nt.workingColorSpace,t);const e=`mat3( ${Wm.elements.map(n=>n.toFixed(4))} )`;switch(nt.getTransfer(t)){case Vl:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Xm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+$T(t.getShaderSource(e),o)}else return s}function tC(t,e){const n=eC(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function nC(t,e){let n;switch(e){case XS:n="Linear";break;case YS:n="Reinhard";break;case jS:n="Cineon";break;case QS:n="ACESFilmic";break;case qS:n="AgX";break;case JS:n="Neutral";break;case KS:n="Custom";break;default:Oe("WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const $o=new F;function iC(){nt.getLuminanceCoefficients($o);const t=$o.x.toFixed(4),e=$o.y.toFixed(4),n=$o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rC(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Aa).join(`
`)}function sC(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function aC(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Aa(t){return t!==""}function Ym(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oC=/^[ \t]*#include +<([\w\d./]+)>/gm;function hd(t){return t.replace(oC,cC)}const lC=new Map;function cC(t,e){let n=be[e];if(n===void 0){const i=lC.get(e);if(i!==void 0)n=be[i],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return hd(n)}const uC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qm(t){return t.replace(uC,fC)}function fC(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Km(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dC(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Bv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===MS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Si&&(e="SHADOWMAP_TYPE_VSM"),e}function hC(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Gs:case Vs:e="ENVMAP_TYPE_CUBE";break;case dc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pC(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Vs:e="ENVMAP_MODE_REFRACTION";break}return e}function mC(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Fv:e="ENVMAP_BLENDING_MULTIPLY";break;case VS:e="ENVMAP_BLENDING_MIX";break;case WS:e="ENVMAP_BLENDING_ADD";break}return e}function gC(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function vC(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=dC(n),c=hC(n),f=pC(n),u=mC(n),h=gC(n),p=rC(n),v=sC(s),_=r.createProgram();let m,d,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Aa).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Aa).join(`
`),d.length>0&&(d+=`
`)):(m=[Km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Aa).join(`
`),d=[Km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==dr?"#define TONE_MAPPING":"",n.toneMapping!==dr?be.tonemapping_pars_fragment:"",n.toneMapping!==dr?nC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",be.colorspace_pars_fragment,tC("linearToOutputTexel",n.outputColorSpace),iC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Aa).join(`
`)),a=hd(a),a=Ym(a,n),a=jm(a,n),o=hd(o),o=Ym(o,n),o=jm(o,n),a=Qm(a),o=Qm(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===om?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===om?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=g+m+a,S=g+d+o,C=Vm(r,r.VERTEX_SHADER,x),M=Vm(r,r.FRAGMENT_SHADER,S);r.attachShader(_,C),r.attachShader(_,M),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function b(R){if(t.debug.checkShaderErrors){const k=r.getProgramInfoLog(_)||"",O=r.getShaderInfoLog(C)||"",J=r.getShaderInfoLog(M)||"",j=k.trim(),q=O.trim(),te=J.trim();let U=!0,W=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(U=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,C,M);else{const Y=Xm(r,C,"vertex"),de=Xm(r,M,"fragment");Rt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+j+`
`+Y+`
`+de)}else j!==""?Oe("WebGLProgram: Program Info Log:",j):(q===""||te==="")&&(W=!1);W&&(R.diagnostics={runnable:U,programLog:j,vertexShader:{log:q,prefix:m},fragmentShader:{log:te,prefix:d}})}r.deleteShader(C),r.deleteShader(M),L=new vl(r,_),w=aC(r,_)}let L;this.getUniforms=function(){return L===void 0&&b(this),L};let w;this.getAttributes=function(){return w===void 0&&b(this),w};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(_,JT)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ZT++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=M,this}let xC=0;class _C{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new yC(e),n.set(e,i)),i}}class yC{constructor(e){this.id=xC++,this.code=e,this.usedTimes=0}}function AC(t,e,n,i,r,s,a){const o=new qv,l=new _C,c=new Set,f=[],u=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,A,R,k,O){const J=k.fog,j=O.geometry,q=w.isMeshStandardMaterial?k.environment:null,te=(w.isMeshStandardMaterial?n:e).get(w.envMap||q),U=te&&te.mapping===dc?te.image.height:null,W=v[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&Oe("WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const Y=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,de=Y!==void 0?Y.length:0;let Me=0;j.morphAttributes.position!==void 0&&(Me=1),j.morphAttributes.normal!==void 0&&(Me=2),j.morphAttributes.color!==void 0&&(Me=3);let $e,Ze,rt,X;if(W){const at=ci[W];$e=at.vertexShader,Ze=at.fragmentShader}else $e=w.vertexShader,Ze=w.fragmentShader,l.update(w),rt=l.getVertexShaderID(w),X=l.getFragmentShaderID(w);const Z=t.getRenderTarget(),xe=t.state.buffers.depth.getReversed(),ze=O.isInstancedMesh===!0,we=O.isBatchedMesh===!0,Ye=!!w.map,Xt=!!w.matcap,Ve=!!te,vt=!!w.aoMap,D=!!w.lightMap,je=!!w.bumpMap,Qe=!!w.normalMap,ft=!!w.displacementMap,Ae=!!w.emissiveMap,_t=!!w.metalnessMap,Ce=!!w.roughnessMap,Fe=w.anisotropy>0,T=w.clearcoat>0,y=w.dispersion>0,z=w.iridescence>0,Q=w.sheen>0,$=w.transmission>0,V=Fe&&!!w.anisotropyMap,Ee=T&&!!w.clearcoatMap,ue=T&&!!w.clearcoatNormalMap,Re=T&&!!w.clearcoatRoughnessMap,Se=z&&!!w.iridescenceMap,ee=z&&!!w.iridescenceThicknessMap,ae=Q&&!!w.sheenColorMap,Le=Q&&!!w.sheenRoughnessMap,Pe=!!w.specularMap,pe=!!w.specularColorMap,Ne=!!w.specularIntensityMap,P=$&&!!w.transmissionMap,fe=$&&!!w.thicknessMap,oe=!!w.gradientMap,le=!!w.alphaMap,re=w.alphaTest>0,K=!!w.alphaHash,_e=!!w.extensions;let Be=dr;w.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Be=t.toneMapping);const ht={shaderID:W,shaderType:w.type,shaderName:w.name,vertexShader:$e,fragmentShader:Ze,defines:w.defines,customVertexShaderID:rt,customFragmentShaderID:X,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:we,batchingColor:we&&O._colorsTexture!==null,instancing:ze,instancingColor:ze&&O.instanceColor!==null,instancingMorph:ze&&O.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Z===null?t.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:gr,alphaToCoverage:!!w.alphaToCoverage,map:Ye,matcap:Xt,envMap:Ve,envMapMode:Ve&&te.mapping,envMapCubeUVHeight:U,aoMap:vt,lightMap:D,bumpMap:je,normalMap:Qe,displacementMap:h&&ft,emissiveMap:Ae,normalMapObjectSpace:Qe&&w.normalMapType===tE,normalMapTangentSpace:Qe&&w.normalMapType===eE,metalnessMap:_t,roughnessMap:Ce,anisotropy:Fe,anisotropyMap:V,clearcoat:T,clearcoatMap:Ee,clearcoatNormalMap:ue,clearcoatRoughnessMap:Re,dispersion:y,iridescence:z,iridescenceMap:Se,iridescenceThicknessMap:ee,sheen:Q,sheenColorMap:ae,sheenRoughnessMap:Le,specularMap:Pe,specularColorMap:pe,specularIntensityMap:Ne,transmission:$,transmissionMap:P,thicknessMap:fe,gradientMap:oe,opaque:w.transparent===!1&&w.blending===Ps&&w.alphaToCoverage===!1,alphaMap:le,alphaTest:re,alphaHash:K,combine:w.combine,mapUv:Ye&&_(w.map.channel),aoMapUv:vt&&_(w.aoMap.channel),lightMapUv:D&&_(w.lightMap.channel),bumpMapUv:je&&_(w.bumpMap.channel),normalMapUv:Qe&&_(w.normalMap.channel),displacementMapUv:ft&&_(w.displacementMap.channel),emissiveMapUv:Ae&&_(w.emissiveMap.channel),metalnessMapUv:_t&&_(w.metalnessMap.channel),roughnessMapUv:Ce&&_(w.roughnessMap.channel),anisotropyMapUv:V&&_(w.anisotropyMap.channel),clearcoatMapUv:Ee&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:ue&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Le&&_(w.sheenRoughnessMap.channel),specularMapUv:Pe&&_(w.specularMap.channel),specularColorMapUv:pe&&_(w.specularColorMap.channel),specularIntensityMapUv:Ne&&_(w.specularIntensityMap.channel),transmissionMapUv:P&&_(w.transmissionMap.channel),thicknessMapUv:fe&&_(w.thicknessMap.channel),alphaMapUv:le&&_(w.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Qe||Fe),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!j.attributes.uv&&(Ye||le),fog:!!J,useFog:w.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xe,skinning:O.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Me,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:Be,decodeVideoTexture:Ye&&w.map.isVideoTexture===!0&&nt.getTransfer(w.map.colorSpace)===lt,decodeVideoTextureEmissive:Ae&&w.emissiveMap.isVideoTexture===!0&&nt.getTransfer(w.emissiveMap.colorSpace)===lt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===cn,flipSided:w.side===Gt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:_e&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&w.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function d(w){const A=[];if(w.shaderID?A.push(w.shaderID):(A.push(w.customVertexShaderID),A.push(w.customFragmentShaderID)),w.defines!==void 0)for(const R in w.defines)A.push(R),A.push(w.defines[R]);return w.isRawShaderMaterial===!1&&(g(A,w),x(A,w),A.push(t.outputColorSpace)),A.push(w.customProgramCacheKey),A.join()}function g(w,A){w.push(A.precision),w.push(A.outputColorSpace),w.push(A.envMapMode),w.push(A.envMapCubeUVHeight),w.push(A.mapUv),w.push(A.alphaMapUv),w.push(A.lightMapUv),w.push(A.aoMapUv),w.push(A.bumpMapUv),w.push(A.normalMapUv),w.push(A.displacementMapUv),w.push(A.emissiveMapUv),w.push(A.metalnessMapUv),w.push(A.roughnessMapUv),w.push(A.anisotropyMapUv),w.push(A.clearcoatMapUv),w.push(A.clearcoatNormalMapUv),w.push(A.clearcoatRoughnessMapUv),w.push(A.iridescenceMapUv),w.push(A.iridescenceThicknessMapUv),w.push(A.sheenColorMapUv),w.push(A.sheenRoughnessMapUv),w.push(A.specularMapUv),w.push(A.specularColorMapUv),w.push(A.specularIntensityMapUv),w.push(A.transmissionMapUv),w.push(A.thicknessMapUv),w.push(A.combine),w.push(A.fogExp2),w.push(A.sizeAttenuation),w.push(A.morphTargetsCount),w.push(A.morphAttributeCount),w.push(A.numDirLights),w.push(A.numPointLights),w.push(A.numSpotLights),w.push(A.numSpotLightMaps),w.push(A.numHemiLights),w.push(A.numRectAreaLights),w.push(A.numDirLightShadows),w.push(A.numPointLightShadows),w.push(A.numSpotLightShadows),w.push(A.numSpotLightShadowsWithMaps),w.push(A.numLightProbes),w.push(A.shadowMapType),w.push(A.toneMapping),w.push(A.numClippingPlanes),w.push(A.numClipIntersection),w.push(A.depthPacking)}function x(w,A){o.disableAll(),A.supportsVertexTextures&&o.enable(0),A.instancing&&o.enable(1),A.instancingColor&&o.enable(2),A.instancingMorph&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),A.dispersion&&o.enable(20),A.batchingColor&&o.enable(21),A.gradientMap&&o.enable(22),w.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),w.push(o.mask)}function S(w){const A=v[w.type];let R;if(A){const k=ci[A];R=DE.clone(k.uniforms)}else R=w.uniforms;return R}function C(w,A){let R;for(let k=0,O=f.length;k<O;k++){const J=f[k];if(J.cacheKey===A){R=J,++R.usedTimes;break}}return R===void 0&&(R=new vC(t,A,w,s),f.push(R)),R}function M(w){if(--w.usedTimes===0){const A=f.indexOf(w);f[A]=f[f.length-1],f.pop(),w.destroy()}}function b(w){l.remove(w)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:C,releaseProgram:M,releaseShaderCache:b,programs:f,dispose:L}}function SC(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function EC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function qm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Jm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(u,h,p,v,_,m){let d=t[e];return d===void 0?(d={id:u.id,object:u,geometry:h,material:p,groupOrder:v,renderOrder:u.renderOrder,z:_,group:m},t[e]=d):(d.id=u.id,d.object=u,d.geometry=h,d.material=p,d.groupOrder=v,d.renderOrder=u.renderOrder,d.z=_,d.group=m),e++,d}function o(u,h,p,v,_,m){const d=a(u,h,p,v,_,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(u,h,p,v,_,m){const d=a(u,h,p,v,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(u,h){n.length>1&&n.sort(u||EC),i.length>1&&i.sort(h||qm),r.length>1&&r.sort(h||qm)}function f(){for(let u=e,h=t.length;u<h;u++){const p=t[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:f,sort:c}}function MC(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Jm,t.set(i,[a])):r>=s.length?(a=new Jm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function wC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new Je};break;case"SpotLight":n={position:new F,direction:new F,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function TC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let CC=0;function bC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function RC(t){const e=new wC,n=TC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const r=new F,s=new Dt,a=new Dt;function o(c){let f=0,u=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,v=0,_=0,m=0,d=0,g=0,x=0,S=0,C=0,M=0,b=0;c.sort(bC);for(let w=0,A=c.length;w<A;w++){const R=c[w],k=R.color,O=R.intensity,J=R.distance,j=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)f+=k.r*O,u+=k.g*O,h+=k.b*O;else if(R.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(R.sh.coefficients[q],O);b++}else if(R.isDirectionalLight){const q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const te=R.shadow,U=n.get(R);U.shadowIntensity=te.intensity,U.shadowBias=te.bias,U.shadowNormalBias=te.normalBias,U.shadowRadius=te.radius,U.shadowMapSize=te.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=j,i.directionalShadowMatrix[p]=R.shadow.matrix,g++}i.directional[p]=q,p++}else if(R.isSpotLight){const q=e.get(R);q.position.setFromMatrixPosition(R.matrixWorld),q.color.copy(k).multiplyScalar(O),q.distance=J,q.coneCos=Math.cos(R.angle),q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),q.decay=R.decay,i.spot[_]=q;const te=R.shadow;if(R.map&&(i.spotLightMap[C]=R.map,C++,te.updateMatrices(R),R.castShadow&&M++),i.spotLightMatrix[_]=te.matrix,R.castShadow){const U=n.get(R);U.shadowIntensity=te.intensity,U.shadowBias=te.bias,U.shadowNormalBias=te.normalBias,U.shadowRadius=te.radius,U.shadowMapSize=te.mapSize,i.spotShadow[_]=U,i.spotShadowMap[_]=j,S++}_++}else if(R.isRectAreaLight){const q=e.get(R);q.color.copy(k).multiplyScalar(O),q.halfWidth.set(R.width*.5,0,0),q.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=q,m++}else if(R.isPointLight){const q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),q.distance=R.distance,q.decay=R.decay,R.castShadow){const te=R.shadow,U=n.get(R);U.shadowIntensity=te.intensity,U.shadowBias=te.bias,U.shadowNormalBias=te.normalBias,U.shadowRadius=te.radius,U.shadowMapSize=te.mapSize,U.shadowCameraNear=te.camera.near,U.shadowCameraFar=te.camera.far,i.pointShadow[v]=U,i.pointShadowMap[v]=j,i.pointShadowMatrix[v]=R.shadow.matrix,x++}i.point[v]=q,v++}else if(R.isHemisphereLight){const q=e.get(R);q.skyColor.copy(R.color).multiplyScalar(O),q.groundColor.copy(R.groundColor).multiplyScalar(O),i.hemi[d]=q,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=u,i.ambient[2]=h;const L=i.hash;(L.directionalLength!==p||L.pointLength!==v||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==d||L.numDirectionalShadows!==g||L.numPointShadows!==x||L.numSpotShadows!==S||L.numSpotMaps!==C||L.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=v,i.hemi.length=d,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+C-M,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=b,L.directionalLength=p,L.pointLength=v,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=d,L.numDirectionalShadows=g,L.numPointShadows=x,L.numSpotShadows=S,L.numSpotMaps=C,L.numLightProbes=b,i.version=CC++)}function l(c,f){let u=0,h=0,p=0,v=0,_=0;const m=f.matrixWorldInverse;for(let d=0,g=c.length;d<g;d++){const x=c[d];if(x.isDirectionalLight){const S=i.directional[u];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),u++}else if(x.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(x.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),h++}else if(x.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function Zm(t){const e=new RC(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function a(f){i.push(f)}function o(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function DC(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Zm(t),e.set(r,[o])):s>=a.length?(o=new Zm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const PC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function LC(t,e,n){let i=new rx;const r=new ve,s=new ve,a=new mt,o=new nM({depthPacking:$S}),l=new iM,c={},f=n.maxTextureSize,u={[Fi]:Gt,[Gt]:Fi,[cn]:cn},h=new Pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:PC,fragmentShader:IC}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new Nn;v.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Wn(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bv;let d=this.type;this.render=function(M,b,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const w=t.getRenderTarget(),A=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),k=t.state;k.setBlending(Qt),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const O=d!==Si&&this.type===Si,J=d===Si&&this.type!==Si;for(let j=0,q=M.length;j<q;j++){const te=M[j],U=te.shadow;if(U===void 0){Oe("WebGLShadowMap:",te,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const W=U.getFrameExtents();if(r.multiply(W),s.copy(U.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/W.x),r.x=s.x*W.x,U.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/W.y),r.y=s.y*W.y,U.mapSize.y=s.y)),U.map===null||O===!0||J===!0){const de=this.type!==Si?{minFilter:fn,magFilter:fn}:{};U.map!==null&&U.map.dispose(),U.map=new sn(r.x,r.y,de),U.map.texture.name=te.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const Y=U.getViewportCount();for(let de=0;de<Y;de++){const Me=U.getViewport(de);a.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),k.viewport(a),U.updateMatrices(te,de),i=U.getFrustum(),S(b,L,U.camera,te,this.type)}U.isPointLightShadow!==!0&&this.type===Si&&g(U,L),U.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(w,A,R)};function g(M,b){const L=e.update(_);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new sn(r.x,r.y)),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(b,null,L,h,_,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(b,null,L,p,_,null)}function x(M,b,L,w){let A=null;const R=L.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(R!==void 0)A=R;else if(A=L.isPointLight===!0?l:o,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const k=A.uuid,O=b.uuid;let J=c[k];J===void 0&&(J={},c[k]=J);let j=J[O];j===void 0&&(j=A.clone(),J[O]=j,b.addEventListener("dispose",C)),A=j}if(A.visible=b.visible,A.wireframe=b.wireframe,w===Si?A.side=b.shadowSide!==null?b.shadowSide:b.side:A.side=b.shadowSide!==null?b.shadowSide:u[b.side],A.alphaMap=b.alphaMap,A.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,A.map=b.map,A.clipShadows=b.clipShadows,A.clippingPlanes=b.clippingPlanes,A.clipIntersection=b.clipIntersection,A.displacementMap=b.displacementMap,A.displacementScale=b.displacementScale,A.displacementBias=b.displacementBias,A.wireframeLinewidth=b.wireframeLinewidth,A.linewidth=b.linewidth,L.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const k=t.properties.get(A);k.light=L}return A}function S(M,b,L,w,A){if(M.visible===!1)return;if(M.layers.test(b.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&A===Si)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,M.matrixWorld);const O=e.update(M),J=M.material;if(Array.isArray(J)){const j=O.groups;for(let q=0,te=j.length;q<te;q++){const U=j[q],W=J[U.materialIndex];if(W&&W.visible){const Y=x(M,W,w,A);M.onBeforeShadow(t,M,b,L,O,Y,U),t.renderBufferDirect(L,null,O,Y,M,U),M.onAfterShadow(t,M,b,L,O,Y,U)}}}else if(J.visible){const j=x(M,J,w,A);M.onBeforeShadow(t,M,b,L,O,j,null),t.renderBufferDirect(L,null,O,j,M,null),M.onAfterShadow(t,M,b,L,O,j,null)}}const k=M.children;for(let O=0,J=k.length;O<J;O++)S(k[O],b,L,w,A)}function C(M){M.target.removeEventListener("dispose",C);for(const L in c){const w=c[L],A=M.target.uuid;A in w&&(w[A].dispose(),delete w[A])}}}const UC={[Tf]:Gl,[Cf]:Df,[bf]:Pf,[Hs]:Rf,[Gl]:Tf,[Df]:Cf,[Pf]:bf,[Rf]:Hs};function NC(t,e){function n(){let P=!1;const fe=new mt;let oe=null;const le=new mt(0,0,0,0);return{setMask:function(re){oe!==re&&!P&&(t.colorMask(re,re,re,re),oe=re)},setLocked:function(re){P=re},setClear:function(re,K,_e,Be,ht){ht===!0&&(re*=Be,K*=Be,_e*=Be),fe.set(re,K,_e,Be),le.equals(fe)===!1&&(t.clearColor(re,K,_e,Be),le.copy(fe))},reset:function(){P=!1,oe=null,le.set(-1,0,0,0)}}}function i(){let P=!1,fe=!1,oe=null,le=null,re=null;return{setReversed:function(K){if(fe!==K){const _e=e.get("EXT_clip_control");K?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),fe=K;const Be=re;re=null,this.setClear(Be)}},getReversed:function(){return fe},setTest:function(K){K?Z(t.DEPTH_TEST):xe(t.DEPTH_TEST)},setMask:function(K){oe!==K&&!P&&(t.depthMask(K),oe=K)},setFunc:function(K){if(fe&&(K=UC[K]),le!==K){switch(K){case Tf:t.depthFunc(t.NEVER);break;case Gl:t.depthFunc(t.ALWAYS);break;case Cf:t.depthFunc(t.LESS);break;case Hs:t.depthFunc(t.LEQUAL);break;case bf:t.depthFunc(t.EQUAL);break;case Rf:t.depthFunc(t.GEQUAL);break;case Df:t.depthFunc(t.GREATER);break;case Pf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}le=K}},setLocked:function(K){P=K},setClear:function(K){re!==K&&(fe&&(K=1-K),t.clearDepth(K),re=K)},reset:function(){P=!1,oe=null,le=null,re=null,fe=!1}}}function r(){let P=!1,fe=null,oe=null,le=null,re=null,K=null,_e=null,Be=null,ht=null;return{setTest:function(at){P||(at?Z(t.STENCIL_TEST):xe(t.STENCIL_TEST))},setMask:function(at){fe!==at&&!P&&(t.stencilMask(at),fe=at)},setFunc:function(at,ai,Yn){(oe!==at||le!==ai||re!==Yn)&&(t.stencilFunc(at,ai,Yn),oe=at,le=ai,re=Yn)},setOp:function(at,ai,Yn){(K!==at||_e!==ai||Be!==Yn)&&(t.stencilOp(at,ai,Yn),K=at,_e=ai,Be=Yn)},setLocked:function(at){P=at},setClear:function(at){ht!==at&&(t.clearStencil(at),ht=at)},reset:function(){P=!1,fe=null,oe=null,le=null,re=null,K=null,_e=null,Be=null,ht=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let f={},u={},h=new WeakMap,p=[],v=null,_=!1,m=null,d=null,g=null,x=null,S=null,C=null,M=null,b=new Je(0,0,0),L=0,w=!1,A=null,R=null,k=null,O=null,J=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,te=0;const U=t.getParameter(t.VERSION);U.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(U)[1]),q=te>=1):U.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),q=te>=2);let W=null,Y={};const de=t.getParameter(t.SCISSOR_BOX),Me=t.getParameter(t.VIEWPORT),$e=new mt().fromArray(de),Ze=new mt().fromArray(Me);function rt(P,fe,oe,le){const re=new Uint8Array(4),K=t.createTexture();t.bindTexture(P,K),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let _e=0;_e<oe;_e++)P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,le,0,t.RGBA,t.UNSIGNED_BYTE,re):t.texImage2D(fe+_e,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,re);return K}const X={};X[t.TEXTURE_2D]=rt(t.TEXTURE_2D,t.TEXTURE_2D,1),X[t.TEXTURE_CUBE_MAP]=rt(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[t.TEXTURE_2D_ARRAY]=rt(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),X[t.TEXTURE_3D]=rt(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(t.DEPTH_TEST),a.setFunc(Hs),je(!1),Qe(tm),Z(t.CULL_FACE),vt(Qt);function Z(P){f[P]!==!0&&(t.enable(P),f[P]=!0)}function xe(P){f[P]!==!1&&(t.disable(P),f[P]=!1)}function ze(P,fe){return u[P]!==fe?(t.bindFramebuffer(P,fe),u[P]=fe,P===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=fe),P===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function we(P,fe){let oe=p,le=!1;if(P){oe=h.get(fe),oe===void 0&&(oe=[],h.set(fe,oe));const re=P.textures;if(oe.length!==re.length||oe[0]!==t.COLOR_ATTACHMENT0){for(let K=0,_e=re.length;K<_e;K++)oe[K]=t.COLOR_ATTACHMENT0+K;oe.length=re.length,le=!0}}else oe[0]!==t.BACK&&(oe[0]=t.BACK,le=!0);le&&t.drawBuffers(oe)}function Ye(P){return v!==P?(t.useProgram(P),v=P,!0):!1}const Xt={[Pr]:t.FUNC_ADD,[TS]:t.FUNC_SUBTRACT,[CS]:t.FUNC_REVERSE_SUBTRACT};Xt[bS]=t.MIN,Xt[RS]=t.MAX;const Ve={[DS]:t.ZERO,[PS]:t.ONE,[IS]:t.SRC_COLOR,[Mf]:t.SRC_ALPHA,[OS]:t.SRC_ALPHA_SATURATE,[BS]:t.DST_COLOR,[US]:t.DST_ALPHA,[LS]:t.ONE_MINUS_SRC_COLOR,[wf]:t.ONE_MINUS_SRC_ALPHA,[FS]:t.ONE_MINUS_DST_COLOR,[NS]:t.ONE_MINUS_DST_ALPHA,[zS]:t.CONSTANT_COLOR,[kS]:t.ONE_MINUS_CONSTANT_COLOR,[HS]:t.CONSTANT_ALPHA,[GS]:t.ONE_MINUS_CONSTANT_ALPHA};function vt(P,fe,oe,le,re,K,_e,Be,ht,at){if(P===Qt){_===!0&&(xe(t.BLEND),_=!1);return}if(_===!1&&(Z(t.BLEND),_=!0),P!==wS){if(P!==m||at!==w){if((d!==Pr||S!==Pr)&&(t.blendEquation(t.FUNC_ADD),d=Pr,S=Pr),at)switch(P){case Ps:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case nm:t.blendFunc(t.ONE,t.ONE);break;case im:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case rm:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Rt("WebGLState: Invalid blending: ",P);break}else switch(P){case Ps:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case nm:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case im:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rm:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",P);break}g=null,x=null,C=null,M=null,b.set(0,0,0),L=0,m=P,w=at}return}re=re||fe,K=K||oe,_e=_e||le,(fe!==d||re!==S)&&(t.blendEquationSeparate(Xt[fe],Xt[re]),d=fe,S=re),(oe!==g||le!==x||K!==C||_e!==M)&&(t.blendFuncSeparate(Ve[oe],Ve[le],Ve[K],Ve[_e]),g=oe,x=le,C=K,M=_e),(Be.equals(b)===!1||ht!==L)&&(t.blendColor(Be.r,Be.g,Be.b,ht),b.copy(Be),L=ht),m=P,w=!1}function D(P,fe){P.side===cn?xe(t.CULL_FACE):Z(t.CULL_FACE);let oe=P.side===Gt;fe&&(oe=!oe),je(oe),P.blending===Ps&&P.transparent===!1?vt(Qt):vt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const le=P.stencilWrite;o.setTest(le),le&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ae(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Z(t.SAMPLE_ALPHA_TO_COVERAGE):xe(t.SAMPLE_ALPHA_TO_COVERAGE)}function je(P){A!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),A=P)}function Qe(P){P!==SS?(Z(t.CULL_FACE),P!==R&&(P===tm?t.cullFace(t.BACK):P===ES?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):xe(t.CULL_FACE),R=P}function ft(P){P!==k&&(q&&t.lineWidth(P),k=P)}function Ae(P,fe,oe){P?(Z(t.POLYGON_OFFSET_FILL),(O!==fe||J!==oe)&&(t.polygonOffset(fe,oe),O=fe,J=oe)):xe(t.POLYGON_OFFSET_FILL)}function _t(P){P?Z(t.SCISSOR_TEST):xe(t.SCISSOR_TEST)}function Ce(P){P===void 0&&(P=t.TEXTURE0+j-1),W!==P&&(t.activeTexture(P),W=P)}function Fe(P,fe,oe){oe===void 0&&(W===null?oe=t.TEXTURE0+j-1:oe=W);let le=Y[oe];le===void 0&&(le={type:void 0,texture:void 0},Y[oe]=le),(le.type!==P||le.texture!==fe)&&(W!==oe&&(t.activeTexture(oe),W=oe),t.bindTexture(P,fe||X[P]),le.type=P,le.texture=fe)}function T(){const P=Y[W];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function y(){try{t.compressedTexImage2D(...arguments)}catch(P){P("WebGLState:",P)}}function z(){try{t.compressedTexImage3D(...arguments)}catch(P){P("WebGLState:",P)}}function Q(){try{t.texSubImage2D(...arguments)}catch(P){P("WebGLState:",P)}}function $(){try{t.texSubImage3D(...arguments)}catch(P){P("WebGLState:",P)}}function V(){try{t.compressedTexSubImage2D(...arguments)}catch(P){P("WebGLState:",P)}}function Ee(){try{t.compressedTexSubImage3D(...arguments)}catch(P){P("WebGLState:",P)}}function ue(){try{t.texStorage2D(...arguments)}catch(P){P("WebGLState:",P)}}function Re(){try{t.texStorage3D(...arguments)}catch(P){P("WebGLState:",P)}}function Se(){try{t.texImage2D(...arguments)}catch(P){P("WebGLState:",P)}}function ee(){try{t.texImage3D(...arguments)}catch(P){P("WebGLState:",P)}}function ae(P){$e.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),$e.copy(P))}function Le(P){Ze.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),Ze.copy(P))}function Pe(P,fe){let oe=c.get(fe);oe===void 0&&(oe=new WeakMap,c.set(fe,oe));let le=oe.get(P);le===void 0&&(le=t.getUniformBlockIndex(fe,P.name),oe.set(P,le))}function pe(P,fe){const le=c.get(fe).get(P);l.get(fe)!==le&&(t.uniformBlockBinding(fe,le,P.__bindingPointIndex),l.set(fe,le))}function Ne(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},W=null,Y={},u={},h=new WeakMap,p=[],v=null,_=!1,m=null,d=null,g=null,x=null,S=null,C=null,M=null,b=new Je(0,0,0),L=0,w=!1,A=null,R=null,k=null,O=null,J=null,$e.set(0,0,t.canvas.width,t.canvas.height),Ze.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Z,disable:xe,bindFramebuffer:ze,drawBuffers:we,useProgram:Ye,setBlending:vt,setMaterial:D,setFlipSided:je,setCullFace:Qe,setLineWidth:ft,setPolygonOffset:Ae,setScissorTest:_t,activeTexture:Ce,bindTexture:Fe,unbindTexture:T,compressedTexImage2D:y,compressedTexImage3D:z,texImage2D:Se,texImage3D:ee,updateUBOMapping:Pe,uniformBlockBinding:pe,texStorage2D:ue,texStorage3D:Re,texSubImage2D:Q,texSubImage3D:$,compressedTexSubImage2D:V,compressedTexSubImage3D:Ee,scissor:ae,viewport:Le,reset:Ne}}function BC(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ve,f=new WeakMap;let u;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,y){return p?new OffscreenCanvas(T,y):Xl("canvas")}function _(T,y,z){let Q=1;const $=Fe(T);if(($.width>z||$.height>z)&&(Q=z/Math.max($.width,$.height)),Q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const V=Math.floor(Q*$.width),Ee=Math.floor(Q*$.height);u===void 0&&(u=v(V,Ee));const ue=y?v(V,Ee):u;return ue.width=V,ue.height=Ee,ue.getContext("2d").drawImage(T,0,0,V,Ee),Oe("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+V+"x"+Ee+")."),ue}else return"data"in T&&Oe("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),T;return T}function m(T){return T.generateMipmaps}function d(T){t.generateMipmap(T)}function g(T){return T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?t.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(T,y,z,Q,$=!1){if(T!==null){if(t[T]!==void 0)return t[T];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let V=y;if(y===t.RED&&(z===t.FLOAT&&(V=t.R32F),z===t.HALF_FLOAT&&(V=t.R16F),z===t.UNSIGNED_BYTE&&(V=t.R8)),y===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(V=t.R8UI),z===t.UNSIGNED_SHORT&&(V=t.R16UI),z===t.UNSIGNED_INT&&(V=t.R32UI),z===t.BYTE&&(V=t.R8I),z===t.SHORT&&(V=t.R16I),z===t.INT&&(V=t.R32I)),y===t.RG&&(z===t.FLOAT&&(V=t.RG32F),z===t.HALF_FLOAT&&(V=t.RG16F),z===t.UNSIGNED_BYTE&&(V=t.RG8)),y===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(V=t.RG8UI),z===t.UNSIGNED_SHORT&&(V=t.RG16UI),z===t.UNSIGNED_INT&&(V=t.RG32UI),z===t.BYTE&&(V=t.RG8I),z===t.SHORT&&(V=t.RG16I),z===t.INT&&(V=t.RG32I)),y===t.RGB_INTEGER&&(z===t.UNSIGNED_BYTE&&(V=t.RGB8UI),z===t.UNSIGNED_SHORT&&(V=t.RGB16UI),z===t.UNSIGNED_INT&&(V=t.RGB32UI),z===t.BYTE&&(V=t.RGB8I),z===t.SHORT&&(V=t.RGB16I),z===t.INT&&(V=t.RGB32I)),y===t.RGBA_INTEGER&&(z===t.UNSIGNED_BYTE&&(V=t.RGBA8UI),z===t.UNSIGNED_SHORT&&(V=t.RGBA16UI),z===t.UNSIGNED_INT&&(V=t.RGBA32UI),z===t.BYTE&&(V=t.RGBA8I),z===t.SHORT&&(V=t.RGBA16I),z===t.INT&&(V=t.RGBA32I)),y===t.RGB&&(z===t.UNSIGNED_INT_5_9_9_9_REV&&(V=t.RGB9_E5),z===t.UNSIGNED_INT_10F_11F_11F_REV&&(V=t.R11F_G11F_B10F)),y===t.RGBA){const Ee=$?Vl:nt.getTransfer(Q);z===t.FLOAT&&(V=t.RGBA32F),z===t.HALF_FLOAT&&(V=t.RGBA16F),z===t.UNSIGNED_BYTE&&(V=Ee===lt?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT_4_4_4_4&&(V=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(V=t.RGB5_A1)}return(V===t.R16F||V===t.R32F||V===t.RG16F||V===t.RG32F||V===t.RGBA16F||V===t.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function S(T,y){let z;return T?y===null||y===mr||y===Ws?z=t.DEPTH24_STENCIL8:y===Ri?z=t.DEPTH32F_STENCIL8:y===Za&&(z=t.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===mr||y===Ws?z=t.DEPTH_COMPONENT24:y===Ri?z=t.DEPTH_COMPONENT32F:y===Za&&(z=t.DEPTH_COMPONENT16),z}function C(T,y){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==fn&&T.minFilter!==Vt?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function M(T){const y=T.target;y.removeEventListener("dispose",M),L(y),y.isVideoTexture&&f.delete(y)}function b(T){const y=T.target;y.removeEventListener("dispose",b),A(y)}function L(T){const y=i.get(T);if(y.__webglInit===void 0)return;const z=T.source,Q=h.get(z);if(Q){const $=Q[y.__cacheKey];$.usedTimes--,$.usedTimes===0&&w(T),Object.keys(Q).length===0&&h.delete(z)}i.remove(T)}function w(T){const y=i.get(T);t.deleteTexture(y.__webglTexture);const z=T.source,Q=h.get(z);delete Q[y.__cacheKey],a.memory.textures--}function A(T){const y=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(y.__webglFramebuffer[Q]))for(let $=0;$<y.__webglFramebuffer[Q].length;$++)t.deleteFramebuffer(y.__webglFramebuffer[Q][$]);else t.deleteFramebuffer(y.__webglFramebuffer[Q]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[Q])}else{if(Array.isArray(y.__webglFramebuffer))for(let Q=0;Q<y.__webglFramebuffer.length;Q++)t.deleteFramebuffer(y.__webglFramebuffer[Q]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Q=0;Q<y.__webglColorRenderbuffer.length;Q++)y.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[Q]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const z=T.textures;for(let Q=0,$=z.length;Q<$;Q++){const V=i.get(z[Q]);V.__webglTexture&&(t.deleteTexture(V.__webglTexture),a.memory.textures--),i.remove(z[Q])}i.remove(T)}let R=0;function k(){R=0}function O(){const T=R;return T>=r.maxTextures&&Oe("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),R+=1,T}function J(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function j(T,y){const z=i.get(T);if(T.isVideoTexture&&_t(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&z.__version!==T.version){const Q=T.image;if(Q===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{X(z,T,y);return}}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+y)}function q(T,y){const z=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){X(z,T,y);return}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+y)}function te(T,y){const z=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){X(z,T,y);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+y)}function U(T,y){const z=i.get(T);if(T.version>0&&z.__version!==T.version){Z(z,T,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+y)}const W={[Uf]:t.REPEAT,[bi]:t.CLAMP_TO_EDGE,[Nf]:t.MIRRORED_REPEAT},Y={[fn]:t.NEAREST,[ZS]:t.NEAREST_MIPMAP_NEAREST,[Do]:t.NEAREST_MIPMAP_LINEAR,[Vt]:t.LINEAR,[Xc]:t.LINEAR_MIPMAP_NEAREST,[Br]:t.LINEAR_MIPMAP_LINEAR},de={[nE]:t.NEVER,[lE]:t.ALWAYS,[iE]:t.LESS,[Yv]:t.LEQUAL,[rE]:t.EQUAL,[oE]:t.GEQUAL,[sE]:t.GREATER,[aE]:t.NOTEQUAL};function Me(T,y){if(y.type===Ri&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Vt||y.magFilter===Xc||y.magFilter===Do||y.magFilter===Br||y.minFilter===Vt||y.minFilter===Xc||y.minFilter===Do||y.minFilter===Br)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,W[y.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,W[y.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,W[y.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,Y[y.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,Y[y.minFilter]),y.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,de[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===fn||y.minFilter!==Do&&y.minFilter!==Br||y.type===Ri&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function $e(T,y){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",M));const Q=y.source;let $=h.get(Q);$===void 0&&($={},h.set(Q,$));const V=J(y);if(V!==T.__cacheKey){$[V]===void 0&&($[V]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,z=!0),$[V].usedTimes++;const Ee=$[T.__cacheKey];Ee!==void 0&&($[T.__cacheKey].usedTimes--,Ee.usedTimes===0&&w(y)),T.__cacheKey=V,T.__webglTexture=$[V].texture}return z}function Ze(T,y,z){return Math.floor(Math.floor(T/z)/y)}function rt(T,y,z,Q){const V=T.updateRanges;if(V.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,y.width,y.height,z,Q,y.data);else{V.sort((ee,ae)=>ee.start-ae.start);let Ee=0;for(let ee=1;ee<V.length;ee++){const ae=V[Ee],Le=V[ee],Pe=ae.start+ae.count,pe=Ze(Le.start,y.width,4),Ne=Ze(ae.start,y.width,4);Le.start<=Pe+1&&pe===Ne&&Ze(Le.start+Le.count-1,y.width,4)===pe?ae.count=Math.max(ae.count,Le.start+Le.count-ae.start):(++Ee,V[Ee]=Le)}V.length=Ee+1;const ue=t.getParameter(t.UNPACK_ROW_LENGTH),Re=t.getParameter(t.UNPACK_SKIP_PIXELS),Se=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,y.width);for(let ee=0,ae=V.length;ee<ae;ee++){const Le=V[ee],Pe=Math.floor(Le.start/4),pe=Math.ceil(Le.count/4),Ne=Pe%y.width,P=Math.floor(Pe/y.width),fe=pe,oe=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ne),t.pixelStorei(t.UNPACK_SKIP_ROWS,P),n.texSubImage2D(t.TEXTURE_2D,0,Ne,P,fe,oe,z,Q,y.data)}T.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ue),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Re),t.pixelStorei(t.UNPACK_SKIP_ROWS,Se)}}function X(T,y,z){let Q=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Q=t.TEXTURE_3D);const $=$e(T,y),V=y.source;n.bindTexture(Q,T.__webglTexture,t.TEXTURE0+z);const Ee=i.get(V);if(V.version!==Ee.__version||$===!0){n.activeTexture(t.TEXTURE0+z);const ue=nt.getPrimaries(nt.workingColorSpace),Re=y.colorSpace===fi?null:nt.getPrimaries(y.colorSpace),Se=y.colorSpace===fi||ue===Re?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let ee=_(y.image,!1,r.maxTextureSize);ee=Ce(y,ee);const ae=s.convert(y.format,y.colorSpace),Le=s.convert(y.type);let Pe=x(y.internalFormat,ae,Le,y.colorSpace,y.isVideoTexture);Me(Q,y);let pe;const Ne=y.mipmaps,P=y.isVideoTexture!==!0,fe=Ee.__version===void 0||$===!0,oe=V.dataReady,le=C(y,ee);if(y.isDepthTexture)Pe=S(y.format===Xs,y.type),fe&&(P?n.texStorage2D(t.TEXTURE_2D,1,Pe,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,Pe,ee.width,ee.height,0,ae,Le,null));else if(y.isDataTexture)if(Ne.length>0){P&&fe&&n.texStorage2D(t.TEXTURE_2D,le,Pe,Ne[0].width,Ne[0].height);for(let re=0,K=Ne.length;re<K;re++)pe=Ne[re],P?oe&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,pe.width,pe.height,ae,Le,pe.data):n.texImage2D(t.TEXTURE_2D,re,Pe,pe.width,pe.height,0,ae,Le,pe.data);y.generateMipmaps=!1}else P?(fe&&n.texStorage2D(t.TEXTURE_2D,le,Pe,ee.width,ee.height),oe&&rt(y,ee,ae,Le)):n.texImage2D(t.TEXTURE_2D,0,Pe,ee.width,ee.height,0,ae,Le,ee.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){P&&fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,Pe,Ne[0].width,Ne[0].height,ee.depth);for(let re=0,K=Ne.length;re<K;re++)if(pe=Ne[re],y.format!==ti)if(ae!==null)if(P){if(oe)if(y.layerUpdates.size>0){const _e=Rm(pe.width,pe.height,y.format,y.type);for(const Be of y.layerUpdates){const ht=pe.data.subarray(Be*_e/pe.data.BYTES_PER_ELEMENT,(Be+1)*_e/pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,Be,pe.width,pe.height,1,ae,ht)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,pe.width,pe.height,ee.depth,ae,pe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,re,Pe,pe.width,pe.height,ee.depth,0,pe.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?oe&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,pe.width,pe.height,ee.depth,ae,Le,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,re,Pe,pe.width,pe.height,ee.depth,0,ae,Le,pe.data)}else{P&&fe&&n.texStorage2D(t.TEXTURE_2D,le,Pe,Ne[0].width,Ne[0].height);for(let re=0,K=Ne.length;re<K;re++)pe=Ne[re],y.format!==ti?ae!==null?P?oe&&n.compressedTexSubImage2D(t.TEXTURE_2D,re,0,0,pe.width,pe.height,ae,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,re,Pe,pe.width,pe.height,0,pe.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?oe&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,pe.width,pe.height,ae,Le,pe.data):n.texImage2D(t.TEXTURE_2D,re,Pe,pe.width,pe.height,0,ae,Le,pe.data)}else if(y.isDataArrayTexture)if(P){if(fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,Pe,ee.width,ee.height,ee.depth),oe)if(y.layerUpdates.size>0){const re=Rm(ee.width,ee.height,y.format,y.type);for(const K of y.layerUpdates){const _e=ee.data.subarray(K*re/ee.data.BYTES_PER_ELEMENT,(K+1)*re/ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,K,ee.width,ee.height,1,ae,Le,_e)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ae,Le,ee.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Pe,ee.width,ee.height,ee.depth,0,ae,Le,ee.data);else if(y.isData3DTexture)P?(fe&&n.texStorage3D(t.TEXTURE_3D,le,Pe,ee.width,ee.height,ee.depth),oe&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ae,Le,ee.data)):n.texImage3D(t.TEXTURE_3D,0,Pe,ee.width,ee.height,ee.depth,0,ae,Le,ee.data);else if(y.isFramebufferTexture){if(fe)if(P)n.texStorage2D(t.TEXTURE_2D,le,Pe,ee.width,ee.height);else{let re=ee.width,K=ee.height;for(let _e=0;_e<le;_e++)n.texImage2D(t.TEXTURE_2D,_e,Pe,re,K,0,ae,Le,null),re>>=1,K>>=1}}else if(Ne.length>0){if(P&&fe){const re=Fe(Ne[0]);n.texStorage2D(t.TEXTURE_2D,le,Pe,re.width,re.height)}for(let re=0,K=Ne.length;re<K;re++)pe=Ne[re],P?oe&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,ae,Le,pe):n.texImage2D(t.TEXTURE_2D,re,Pe,ae,Le,pe);y.generateMipmaps=!1}else if(P){if(fe){const re=Fe(ee);n.texStorage2D(t.TEXTURE_2D,le,Pe,re.width,re.height)}oe&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ae,Le,ee)}else n.texImage2D(t.TEXTURE_2D,0,Pe,ae,Le,ee);m(y)&&d(Q),Ee.__version=V.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function Z(T,y,z){if(y.image.length!==6)return;const Q=$e(T,y),$=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+z);const V=i.get($);if($.version!==V.__version||Q===!0){n.activeTexture(t.TEXTURE0+z);const Ee=nt.getPrimaries(nt.workingColorSpace),ue=y.colorSpace===fi?null:nt.getPrimaries(y.colorSpace),Re=y.colorSpace===fi||Ee===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Se=y.isCompressedTexture||y.image[0].isCompressedTexture,ee=y.image[0]&&y.image[0].isDataTexture,ae=[];for(let K=0;K<6;K++)!Se&&!ee?ae[K]=_(y.image[K],!0,r.maxCubemapSize):ae[K]=ee?y.image[K].image:y.image[K],ae[K]=Ce(y,ae[K]);const Le=ae[0],Pe=s.convert(y.format,y.colorSpace),pe=s.convert(y.type),Ne=x(y.internalFormat,Pe,pe,y.colorSpace),P=y.isVideoTexture!==!0,fe=V.__version===void 0||Q===!0,oe=$.dataReady;let le=C(y,Le);Me(t.TEXTURE_CUBE_MAP,y);let re;if(Se){P&&fe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,le,Ne,Le.width,Le.height);for(let K=0;K<6;K++){re=ae[K].mipmaps;for(let _e=0;_e<re.length;_e++){const Be=re[_e];y.format!==ti?Pe!==null?P?oe&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,0,0,Be.width,Be.height,Pe,Be.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,Ne,Be.width,Be.height,0,Be.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,0,0,Be.width,Be.height,Pe,pe,Be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,Ne,Be.width,Be.height,0,Pe,pe,Be.data)}}}else{if(re=y.mipmaps,P&&fe){re.length>0&&le++;const K=Fe(ae[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,le,Ne,K.width,K.height)}for(let K=0;K<6;K++)if(ee){P?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ae[K].width,ae[K].height,Pe,pe,ae[K].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ne,ae[K].width,ae[K].height,0,Pe,pe,ae[K].data);for(let _e=0;_e<re.length;_e++){const ht=re[_e].image[K].image;P?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,0,0,ht.width,ht.height,Pe,pe,ht.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,Ne,ht.width,ht.height,0,Pe,pe,ht.data)}}else{P?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Pe,pe,ae[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ne,Pe,pe,ae[K]);for(let _e=0;_e<re.length;_e++){const Be=re[_e];P?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,0,0,Pe,pe,Be.image[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,Ne,Pe,pe,Be.image[K])}}}m(y)&&d(t.TEXTURE_CUBE_MAP),V.__version=$.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function xe(T,y,z,Q,$,V){const Ee=s.convert(z.format,z.colorSpace),ue=s.convert(z.type),Re=x(z.internalFormat,Ee,ue,z.colorSpace),Se=i.get(y),ee=i.get(z);if(ee.__renderTarget=y,!Se.__hasExternalTextures){const ae=Math.max(1,y.width>>V),Le=Math.max(1,y.height>>V);$===t.TEXTURE_3D||$===t.TEXTURE_2D_ARRAY?n.texImage3D($,V,Re,ae,Le,y.depth,0,Ee,ue,null):n.texImage2D($,V,Re,ae,Le,0,Ee,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),Ae(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,$,ee.__webglTexture,0,ft(y)):($===t.TEXTURE_2D||$>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,$,ee.__webglTexture,V),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ze(T,y,z){if(t.bindRenderbuffer(t.RENDERBUFFER,T),y.depthBuffer){const Q=y.depthTexture,$=Q&&Q.isDepthTexture?Q.type:null,V=S(y.stencilBuffer,$),Ee=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=ft(y);Ae(y)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,V,y.width,y.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,V,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,V,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ee,t.RENDERBUFFER,T)}else{const Q=y.textures;for(let $=0;$<Q.length;$++){const V=Q[$],Ee=s.convert(V.format,V.colorSpace),ue=s.convert(V.type),Re=x(V.internalFormat,Ee,ue,V.colorSpace),Se=ft(y);z&&Ae(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Se,Re,y.width,y.height):Ae(y)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Se,Re,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,Re,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function we(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(y.depthTexture);Q.__renderTarget=y,(!Q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),j(y.depthTexture,0);const $=Q.__webglTexture,V=ft(y);if(y.depthTexture.format===$a)Ae(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,$,0,V):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,$,0);else if(y.depthTexture.format===Xs)Ae(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,$,0,V):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Ye(T){const y=i.get(T),z=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){const Q=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Q){const $=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Q.removeEventListener("dispose",$)};Q.addEventListener("dispose",$),y.__depthDisposeCallback=$}y.__boundDepthTexture=Q}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const Q=T.texture.mipmaps;Q&&Q.length>0?we(y.__webglFramebuffer[0],T):we(y.__webglFramebuffer,T)}else if(z){y.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[Q]),y.__webglDepthbuffer[Q]===void 0)y.__webglDepthbuffer[Q]=t.createRenderbuffer(),ze(y.__webglDepthbuffer[Q],T,!1);else{const $=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,V=y.__webglDepthbuffer[Q];t.bindRenderbuffer(t.RENDERBUFFER,V),t.framebufferRenderbuffer(t.FRAMEBUFFER,$,t.RENDERBUFFER,V)}}else{const Q=T.texture.mipmaps;if(Q&&Q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=t.createRenderbuffer(),ze(y.__webglDepthbuffer,T,!1);else{const $=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,V=y.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,V),t.framebufferRenderbuffer(t.FRAMEBUFFER,$,t.RENDERBUFFER,V)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Xt(T,y,z){const Q=i.get(T);y!==void 0&&xe(Q.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&Ye(T)}function Ve(T){const y=T.texture,z=i.get(T),Q=i.get(y);T.addEventListener("dispose",b);const $=T.textures,V=T.isWebGLCubeRenderTarget===!0,Ee=$.length>1;if(Ee||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=y.version,a.memory.textures++),V){z.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[ue]=[];for(let Re=0;Re<y.mipmaps.length;Re++)z.__webglFramebuffer[ue][Re]=t.createFramebuffer()}else z.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let ue=0;ue<y.mipmaps.length;ue++)z.__webglFramebuffer[ue]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let ue=0,Re=$.length;ue<Re;ue++){const Se=i.get($[ue]);Se.__webglTexture===void 0&&(Se.__webglTexture=t.createTexture(),a.memory.textures++)}if(T.samples>0&&Ae(T)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ue=0;ue<$.length;ue++){const Re=$[ue];z.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[ue]);const Se=s.convert(Re.format,Re.colorSpace),ee=s.convert(Re.type),ae=x(Re.internalFormat,Se,ee,Re.colorSpace,T.isXRRenderTarget===!0),Le=ft(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,ae,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,z.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),ze(z.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(V){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),Me(t.TEXTURE_CUBE_MAP,y);for(let ue=0;ue<6;ue++)if(y.mipmaps&&y.mipmaps.length>0)for(let Re=0;Re<y.mipmaps.length;Re++)xe(z.__webglFramebuffer[ue][Re],T,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re);else xe(z.__webglFramebuffer[ue],T,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(y)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let ue=0,Re=$.length;ue<Re;ue++){const Se=$[ue],ee=i.get(Se);let ae=t.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ae=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ae,ee.__webglTexture),Me(ae,Se),xe(z.__webglFramebuffer,T,Se,t.COLOR_ATTACHMENT0+ue,ae,0),m(Se)&&d(ae)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ue=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,Q.__webglTexture),Me(ue,y),y.mipmaps&&y.mipmaps.length>0)for(let Re=0;Re<y.mipmaps.length;Re++)xe(z.__webglFramebuffer[Re],T,y,t.COLOR_ATTACHMENT0,ue,Re);else xe(z.__webglFramebuffer,T,y,t.COLOR_ATTACHMENT0,ue,0);m(y)&&d(ue),n.unbindTexture()}T.depthBuffer&&Ye(T)}function vt(T){const y=T.textures;for(let z=0,Q=y.length;z<Q;z++){const $=y[z];if(m($)){const V=g(T),Ee=i.get($).__webglTexture;n.bindTexture(V,Ee),d(V),n.unbindTexture()}}}const D=[],je=[];function Qe(T){if(T.samples>0){if(Ae(T)===!1){const y=T.textures,z=T.width,Q=T.height;let $=t.COLOR_BUFFER_BIT;const V=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=i.get(T),ue=y.length>1;if(ue)for(let Se=0;Se<y.length;Se++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const Re=T.texture.mipmaps;Re&&Re.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Se=0;Se<y.length;Se++){if(T.resolveDepthBuffer&&(T.depthBuffer&&($|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&($|=t.STENCIL_BUFFER_BIT)),ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[Se]);const ee=i.get(y[Se]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ee,0)}t.blitFramebuffer(0,0,z,Q,0,0,z,Q,$,t.NEAREST),l===!0&&(D.length=0,je.length=0,D.push(t.COLOR_ATTACHMENT0+Se),T.depthBuffer&&T.resolveDepthBuffer===!1&&(D.push(V),je.push(V),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,je)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,D))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let Se=0;Se<y.length;Se++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[Se]);const ee=i.get(y[Se]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,ee,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const y=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function ft(T){return Math.min(r.maxSamples,T.samples)}function Ae(T){const y=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function _t(T){const y=a.render.frame;f.get(T)!==y&&(f.set(T,y),T.update())}function Ce(T,y){const z=T.colorSpace,Q=T.format,$=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==gr&&z!==fi&&(nt.getTransfer(z)===lt?(Q!==ti||$!==qt)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",z)),y}function Fe(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=k,this.setTexture2D=j,this.setTexture2DArray=q,this.setTexture3D=te,this.setTextureCube=U,this.rebindTextures=Xt,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Ae}function FC(t,e){function n(i,r=fi){let s;const a=nt.getTransfer(r);if(i===qt)return t.UNSIGNED_BYTE;if(i===dh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===hh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Hv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Gv)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===zv)return t.BYTE;if(i===kv)return t.SHORT;if(i===Za)return t.UNSIGNED_SHORT;if(i===fh)return t.INT;if(i===mr)return t.UNSIGNED_INT;if(i===Ri)return t.FLOAT;if(i===Zs)return t.HALF_FLOAT;if(i===Vv)return t.ALPHA;if(i===Wv)return t.RGB;if(i===ti)return t.RGBA;if(i===$a)return t.DEPTH_COMPONENT;if(i===Xs)return t.DEPTH_STENCIL;if(i===Xv)return t.RED;if(i===ph)return t.RED_INTEGER;if(i===mh)return t.RG;if(i===gh)return t.RG_INTEGER;if(i===vh)return t.RGBA_INTEGER;if(i===hl||i===pl||i===ml||i===gl)if(a===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===hl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ml)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===hl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ml)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===gl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bf||i===Ff||i===Of||i===zf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Bf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ff)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Of)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===zf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===kf||i===Hf||i===Gf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===kf||i===Hf)return a===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Gf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Vf||i===Wf||i===Xf||i===Yf||i===jf||i===Qf||i===Kf||i===qf||i===Jf||i===Zf||i===$f||i===ed||i===td||i===nd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Vf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===jf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Qf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Jf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$f)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ed)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===td)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===nd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===id||i===rd||i===sd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===id)return a===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ad||i===od||i===ld||i===cd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ad)return s.COMPRESSED_RED_RGTC1_EXT;if(i===od)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ld)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===cd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ws?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const OC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class kC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new ax(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Pt({vertexShader:OC,fragmentShader:zC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Wn(new $s(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HC extends ki{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,u=null,h=null,p=null,v=null;const _=typeof XRWebGLBinding<"u",m=new kC,d={},g=n.getContextAttributes();let x=null,S=null;const C=[],M=[],b=new ve;let L=null;const w=new bn;w.viewport=new mt;const A=new bn;A.viewport=new mt;const R=[w,A],k=new sM;let O=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Z=C[X];return Z===void 0&&(Z=new pu,C[X]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(X){let Z=C[X];return Z===void 0&&(Z=new pu,C[X]=Z),Z.getGripSpace()},this.getHand=function(X){let Z=C[X];return Z===void 0&&(Z=new pu,C[X]=Z),Z.getHandSpace()};function j(X){const Z=M.indexOf(X.inputSource);if(Z===-1)return;const xe=C[Z];xe!==void 0&&(xe.update(X.inputSource,X.frame,c||a),xe.dispatchEvent({type:X.type,data:X.inputSource}))}function q(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",te);for(let X=0;X<C.length;X++){const Z=M[X];Z!==null&&(M[X]=null,C[X].disconnect(Z))}O=null,J=null,m.reset();for(const X in d)delete d[X];e.setRenderTarget(x),p=null,h=null,u=null,r=null,S=null,rt.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(r,n)),u},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",q),r.addEventListener("inputsourceschange",te),g.xrCompatible!==!0&&await n.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(b),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,ze=null,we=null;g.depth&&(we=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,xe=g.stencil?Xs:$a,ze=g.stencil?Ws:mr);const Ye={colorFormat:n.RGBA8,depthFormat:we,scaleFactor:s};u=this.getBinding(),h=u.createProjectionLayer(Ye),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new sn(h.textureWidth,h.textureHeight,{format:ti,type:qt,depthTexture:new yh(h.textureWidth,h.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const xe={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,xe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new sn(p.framebufferWidth,p.framebufferHeight,{format:ti,type:qt,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),rt.setContext(r),rt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te(X){for(let Z=0;Z<X.removed.length;Z++){const xe=X.removed[Z],ze=M.indexOf(xe);ze>=0&&(M[ze]=null,C[ze].disconnect(xe))}for(let Z=0;Z<X.added.length;Z++){const xe=X.added[Z];let ze=M.indexOf(xe);if(ze===-1){for(let Ye=0;Ye<C.length;Ye++)if(Ye>=M.length){M.push(xe),ze=Ye;break}else if(M[Ye]===null){M[Ye]=xe,ze=Ye;break}if(ze===-1)break}const we=C[ze];we&&we.connect(xe)}}const U=new F,W=new F;function Y(X,Z,xe){U.setFromMatrixPosition(Z.matrixWorld),W.setFromMatrixPosition(xe.matrixWorld);const ze=U.distanceTo(W),we=Z.projectionMatrix.elements,Ye=xe.projectionMatrix.elements,Xt=we[14]/(we[10]-1),Ve=we[14]/(we[10]+1),vt=(we[9]+1)/we[5],D=(we[9]-1)/we[5],je=(we[8]-1)/we[0],Qe=(Ye[8]+1)/Ye[0],ft=Xt*je,Ae=Xt*Qe,_t=ze/(-je+Qe),Ce=_t*-je;if(Z.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ce),X.translateZ(_t),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),we[10]===-1)X.projectionMatrix.copy(Z.projectionMatrix),X.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const Fe=Xt+_t,T=Ve+_t,y=ft-Ce,z=Ae+(ze-Ce),Q=vt*Ve/T*Fe,$=D*Ve/T*Fe;X.projectionMatrix.makePerspective(y,z,Q,$,Fe,T),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function de(X,Z){Z===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Z.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let Z=X.near,xe=X.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),k.near=A.near=w.near=Z,k.far=A.far=w.far=xe,(O!==k.near||J!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),O=k.near,J=k.far),k.layers.mask=X.layers.mask|6,w.layers.mask=k.layers.mask&3,A.layers.mask=k.layers.mask&5;const ze=X.parent,we=k.cameras;de(k,ze);for(let Ye=0;Ye<we.length;Ye++)de(we[Ye],ze);we.length===2?Y(k,w,A):k.projectionMatrix.copy(w.projectionMatrix),Me(X,k,ze)};function Me(X,Z,xe){xe===null?X.matrix.copy(Z.matrixWorld):(X.matrix.copy(xe.matrixWorld),X.matrix.invert(),X.matrix.multiply(Z.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Z.projectionMatrix),X.projectionMatrixInverse.copy(Z.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ud*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(X){return d[X]};let $e=null;function Ze(X,Z){if(f=Z.getViewerPose(c||a),v=Z,f!==null){const xe=f.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let ze=!1;xe.length!==k.cameras.length&&(k.cameras.length=0,ze=!0);for(let Ve=0;Ve<xe.length;Ve++){const vt=xe[Ve];let D=null;if(p!==null)D=p.getViewport(vt);else{const Qe=u.getViewSubImage(h,vt);D=Qe.viewport,Ve===0&&(e.setRenderTargetTextures(S,Qe.colorTexture,Qe.depthStencilTexture),e.setRenderTarget(S))}let je=R[Ve];je===void 0&&(je=new bn,je.layers.enable(Ve),je.viewport=new mt,R[Ve]=je),je.matrix.fromArray(vt.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(vt.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(D.x,D.y,D.width,D.height),Ve===0&&(k.matrix.copy(je.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),ze===!0&&k.cameras.push(je)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){u=i.getBinding();const Ve=u.getDepthInformation(xe[0]);Ve&&Ve.isValid&&Ve.texture&&m.init(Ve,r.renderState)}if(we&&we.includes("camera-access")&&_){e.state.unbindTexture(),u=i.getBinding();for(let Ve=0;Ve<xe.length;Ve++){const vt=xe[Ve].camera;if(vt){let D=d[vt];D||(D=new ax,d[vt]=D);const je=u.getCameraImage(vt);D.sourceTexture=je}}}}for(let xe=0;xe<C.length;xe++){const ze=M[xe],we=C[xe];ze!==null&&we!==void 0&&we.update(ze,Z,c||a)}$e&&$e(X,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),v=null}const rt=new dx;rt.setAnimationLoop(Ze),this.setAnimationLoop=function(X){$e=X},this.dispose=function(){}}}const Cr=new Oi,GC=new Dt;function VC(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,tx(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,g,x,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),u(m,d)):d.isMeshPhongMaterial?(s(m,d),f(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(s(m,d),v(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,g,x):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Gt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Gt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const g=e.get(d),x=g.envMap,S=g.envMapRotation;x&&(m.envMap.value=x,Cr.copy(S),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),m.envMapRotation.value.setFromMatrix4(GC.makeRotationFromEuler(Cr)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,g,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*g,m.scale.value=x*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function f(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,g){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Gt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const g=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function WC(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,x){const S=x.program;i.uniformBlockBinding(g,S)}function c(g,x){let S=r[g.id];S===void 0&&(v(g),S=f(g),r[g.id]=S,g.addEventListener("dispose",m));const C=x.program;i.updateUBOMapping(g,C);const M=e.render.frame;s[g.id]!==M&&(h(g),s[g.id]=M)}function f(g){const x=u();g.__bindingPointIndex=x;const S=t.createBuffer(),C=g.__size,M=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,C,M),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,S),S}function u(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const x=r[g.id],S=g.uniforms,C=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let M=0,b=S.length;M<b;M++){const L=Array.isArray(S[M])?S[M]:[S[M]];for(let w=0,A=L.length;w<A;w++){const R=L[w];if(p(R,M,w,C)===!0){const k=R.__offset,O=Array.isArray(R.value)?R.value:[R.value];let J=0;for(let j=0;j<O.length;j++){const q=O[j],te=_(q);typeof q=="number"||typeof q=="boolean"?(R.__data[0]=q,t.bufferSubData(t.UNIFORM_BUFFER,k+J,R.__data)):q.isMatrix3?(R.__data[0]=q.elements[0],R.__data[1]=q.elements[1],R.__data[2]=q.elements[2],R.__data[3]=0,R.__data[4]=q.elements[3],R.__data[5]=q.elements[4],R.__data[6]=q.elements[5],R.__data[7]=0,R.__data[8]=q.elements[6],R.__data[9]=q.elements[7],R.__data[10]=q.elements[8],R.__data[11]=0):(q.toArray(R.__data,J),J+=te.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,x,S,C){const M=g.value,b=x+"_"+S;if(C[b]===void 0)return typeof M=="number"||typeof M=="boolean"?C[b]=M:C[b]=M.clone(),!0;{const L=C[b];if(typeof M=="number"||typeof M=="boolean"){if(L!==M)return C[b]=M,!0}else if(L.equals(M)===!1)return L.copy(M),!0}return!1}function v(g){const x=g.uniforms;let S=0;const C=16;for(let b=0,L=x.length;b<L;b++){const w=Array.isArray(x[b])?x[b]:[x[b]];for(let A=0,R=w.length;A<R;A++){const k=w[A],O=Array.isArray(k.value)?k.value:[k.value];for(let J=0,j=O.length;J<j;J++){const q=O[J],te=_(q),U=S%C,W=U%te.boundary,Y=U+W;S+=W,Y!==0&&C-Y<te.storage&&(S+=C-Y),k.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=te.storage}}}const M=S%C;return M>0&&(S+=C-M),g.__size=S,g.__cache={},this}function _(g){const x={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(x.boundary=4,x.storage=4):g.isVector2?(x.boundary=8,x.storage=8):g.isVector3||g.isColor?(x.boundary=16,x.storage=12):g.isVector4?(x.boundary=16,x.storage=16):g.isMatrix3?(x.boundary=48,x.storage=48):g.isMatrix4?(x.boundary=64,x.storage=64):g.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Oe("WebGLRenderer: Unsupported uniform value type.",g),x}function m(g){const x=g.target;x.removeEventListener("dispose",m);const S=a.indexOf(x.__bindingPointIndex);a.splice(S,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const g in r)t.deleteBuffer(r[g]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}const XC=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Ai=null;function YC(){return Ai===null&&(Ai=new BE(XC,32,32,mh,Zs),Ai.minFilter=Vt,Ai.magFilter=Vt,Ai.wrapS=bi,Ai.wrapT=bi,Ai.generateMipmaps=!1,Ai.needsUpdate=!0),Ai}class jC{constructor(e={}){const{canvas:n=cE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const v=new Set([vh,gh,ph]),_=new Set([qt,mr,Za,Ws,dh,hh]),m=new Uint32Array(4),d=new Int32Array(4);let g=null,x=null;const S=[],C=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=dr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let b=!1;this._outputColorSpace=ct;let L=0,w=0,A=null,R=-1,k=null;const O=new mt,J=new mt;let j=null;const q=new Je(0);let te=0,U=n.width,W=n.height,Y=1,de=null,Me=null;const $e=new mt(0,0,U,W),Ze=new mt(0,0,U,W);let rt=!1;const X=new rx;let Z=!1,xe=!1;const ze=new Dt,we=new F,Ye=new mt,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function vt(){return A===null?Y:1}let D=i;function je(E,N){return n.getContext(E,N)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Js}`),n.addEventListener("webglcontextlost",re,!1),n.addEventListener("webglcontextrestored",K,!1),n.addEventListener("webglcontextcreationerror",_e,!1),D===null){const N="webgl2";if(D=je(N,E),D===null)throw je(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw E("WebGLRenderer: "+E.message),E}let Qe,ft,Ae,_t,Ce,Fe,T,y,z,Q,$,V,Ee,ue,Re,Se,ee,ae,Le,Pe,pe,Ne,P,fe;function oe(){Qe=new tT(D),Qe.init(),Ne=new FC(D,Qe),ft=new Yw(D,Qe,e,Ne),Ae=new NC(D,Qe),ft.reversedDepthBuffer&&h&&Ae.buffers.depth.setReversed(!0),_t=new rT(D),Ce=new SC,Fe=new BC(D,Qe,Ae,Ce,ft,Ne,_t),T=new Qw(M),y=new eT(M),z=new lM(D),P=new Ww(D,z),Q=new nT(D,z,_t,P),$=new aT(D,Q,z,_t),Le=new sT(D,ft,Fe),Se=new jw(Ce),V=new AC(M,T,y,Qe,ft,P,Se),Ee=new VC(M,Ce),ue=new MC,Re=new DC(Qe),ae=new Vw(M,T,y,Ae,$,p,l),ee=new LC(M,$,ft),fe=new WC(D,_t,ft,Ae),Pe=new Xw(D,Qe,_t),pe=new iT(D,Qe,_t),_t.programs=V.programs,M.capabilities=ft,M.extensions=Qe,M.properties=Ce,M.renderLists=ue,M.shadowMap=ee,M.state=Ae,M.info=_t}oe();const le=new HC(M,D);this.xr=le,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=Qe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Qe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(E){E!==void 0&&(Y=E,this.setSize(U,W,!1))},this.getSize=function(E){return E.set(U,W)},this.setSize=function(E,N,H=!0){if(le.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}U=E,W=N,n.width=Math.floor(E*Y),n.height=Math.floor(N*Y),H===!0&&(n.style.width=E+"px",n.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(U*Y,W*Y).floor()},this.setDrawingBufferSize=function(E,N,H){U=E,W=N,Y=H,n.width=Math.floor(E*H),n.height=Math.floor(N*H),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(O)},this.getViewport=function(E){return E.copy($e)},this.setViewport=function(E,N,H,G){E.isVector4?$e.set(E.x,E.y,E.z,E.w):$e.set(E,N,H,G),Ae.viewport(O.copy($e).multiplyScalar(Y).round())},this.getScissor=function(E){return E.copy(Ze)},this.setScissor=function(E,N,H,G){E.isVector4?Ze.set(E.x,E.y,E.z,E.w):Ze.set(E,N,H,G),Ae.scissor(J.copy(Ze).multiplyScalar(Y).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(E){Ae.setScissorTest(rt=E)},this.setOpaqueSort=function(E){de=E},this.setTransparentSort=function(E){Me=E},this.getClearColor=function(E){return E.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(E=!0,N=!0,H=!0){let G=0;if(E){let B=!1;if(A!==null){const se=A.texture.format;B=v.has(se)}if(B){const se=A.texture.type,he=_.has(se),ye=ae.getClearColor(),ge=ae.getClearAlpha(),Ie=ye.r,Ue=ye.g,Te=ye.b;he?(m[0]=Ie,m[1]=Ue,m[2]=Te,m[3]=ge,D.clearBufferuiv(D.COLOR,0,m)):(d[0]=Ie,d[1]=Ue,d[2]=Te,d[3]=ge,D.clearBufferiv(D.COLOR,0,d))}else G|=D.COLOR_BUFFER_BIT}N&&(G|=D.DEPTH_BUFFER_BIT),H&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",re,!1),n.removeEventListener("webglcontextrestored",K,!1),n.removeEventListener("webglcontextcreationerror",_e,!1),ae.dispose(),ue.dispose(),Re.dispose(),Ce.dispose(),T.dispose(),y.dispose(),$.dispose(),P.dispose(),fe.dispose(),V.dispose(),le.dispose(),le.removeEventListener("sessionstart",Th),le.removeEventListener("sessionend",Ch),yr.stop()};function re(E){E.preventDefault(),cm("WebGLRenderer: Context Lost."),b=!0}function K(){cm("WebGLRenderer: Context Restored."),b=!1;const E=_t.autoReset,N=ee.enabled,H=ee.autoUpdate,G=ee.needsUpdate,B=ee.type;oe(),_t.autoReset=E,ee.enabled=N,ee.autoUpdate=H,ee.needsUpdate=G,ee.type=B}function _e(E){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Be(E){const N=E.target;N.removeEventListener("dispose",Be),ht(N)}function ht(E){at(E),Ce.remove(E)}function at(E){const N=Ce.get(E).programs;N!==void 0&&(N.forEach(function(H){V.releaseProgram(H)}),E.isShaderMaterial&&V.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,H,G,B,se){N===null&&(N=Xt);const he=B.isMesh&&B.matrixWorld.determinant()<0,ye=bx(E,N,H,G,B);Ae.setMaterial(G,he);let ge=H.index,Ie=1;if(G.wireframe===!0){if(ge=Q.getWireframeAttribute(H),ge===void 0)return;Ie=2}const Ue=H.drawRange,Te=H.attributes.position;let Ke=Ue.start*Ie,ot=(Ue.start+Ue.count)*Ie;se!==null&&(Ke=Math.max(Ke,se.start*Ie),ot=Math.min(ot,(se.start+se.count)*Ie)),ge!==null?(Ke=Math.max(Ke,0),ot=Math.min(ot,ge.count)):Te!=null&&(Ke=Math.max(Ke,0),ot=Math.min(ot,Te.count));const wt=ot-Ke;if(wt<0||wt===1/0)return;P.setup(B,G,ye,H,ge);let Tt,ut=Pe;if(ge!==null&&(Tt=z.get(ge),ut=pe,ut.setIndex(Tt)),B.isMesh)G.wireframe===!0?(Ae.setLineWidth(G.wireframeLinewidth*vt()),ut.setMode(D.LINES)):ut.setMode(D.TRIANGLES);else if(B.isLine){let De=G.linewidth;De===void 0&&(De=1),Ae.setLineWidth(De*vt()),B.isLineSegments?ut.setMode(D.LINES):B.isLineLoop?ut.setMode(D.LINE_LOOP):ut.setMode(D.LINE_STRIP)}else B.isPoints?ut.setMode(D.POINTS):B.isSprite&&ut.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)eo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))ut.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const De=B._multiDrawStarts,yt=B._multiDrawCounts,tt=B._multiDrawCount,En=ge?z.get(ge).bytesPerElement:1,qr=Ce.get(G).currentProgram.getUniforms();for(let Mn=0;Mn<tt;Mn++)qr.setValue(D,"_gl_DrawID",Mn),ut.render(De[Mn]/En,yt[Mn])}else if(B.isInstancedMesh)ut.renderInstances(Ke,wt,B.count);else if(H.isInstancedBufferGeometry){const De=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,yt=Math.min(H.instanceCount,De);ut.renderInstances(Ke,wt,yt)}else ut.render(Ke,wt)};function ai(E,N,H){E.transparent===!0&&E.side===cn&&E.forceSinglePass===!1?(E.side=Gt,E.needsUpdate=!0,fo(E,N,H),E.side=Fi,E.needsUpdate=!0,fo(E,N,H),E.side=cn):fo(E,N,H)}this.compile=function(E,N,H=null){H===null&&(H=E),x=Re.get(H),x.init(N),C.push(x),H.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(x.pushLight(B),B.castShadow&&x.pushShadow(B))}),E!==H&&E.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(x.pushLight(B),B.castShadow&&x.pushShadow(B))}),x.setupLights();const G=new Set;return E.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const se=B.material;if(se)if(Array.isArray(se))for(let he=0;he<se.length;he++){const ye=se[he];ai(ye,H,B),G.add(ye)}else ai(se,H,B),G.add(se)}),x=C.pop(),G},this.compileAsync=function(E,N,H=null){const G=this.compile(E,N,H);return new Promise(B=>{function se(){if(G.forEach(function(he){Ce.get(he).currentProgram.isReady()&&G.delete(he)}),G.size===0){B(E);return}setTimeout(se,10)}Qe.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Yn=null;function Cx(E){Yn&&Yn(E)}function Th(){yr.stop()}function Ch(){yr.start()}const yr=new dx;yr.setAnimationLoop(Cx),typeof self<"u"&&yr.setContext(self),this.setAnimationLoop=function(E){Yn=E,le.setAnimationLoop(E),E===null?yr.stop():yr.start()},le.addEventListener("sessionstart",Th),le.addEventListener("sessionend",Ch),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(N),N=le.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,N,A),x=Re.get(E,C.length),x.init(N),C.push(x),ze.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),X.setFromProjectionMatrix(ze,di,N.reversedDepth),xe=this.localClippingEnabled,Z=Se.init(this.clippingPlanes,xe),g=ue.get(E,S.length),g.init(),S.push(g),le.enabled===!0&&le.isPresenting===!0){const se=M.xr.getDepthSensingMesh();se!==null&&gc(se,N,-1/0,M.sortObjects)}gc(E,N,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(de,Me),Ve=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Ve&&ae.addToRenderList(g,E),this.info.render.frame++,Z===!0&&Se.beginShadows();const H=x.state.shadowsArray;ee.render(H,E,N),Z===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=g.opaque,B=g.transmissive;if(x.setupLights(),N.isArrayCamera){const se=N.cameras;if(B.length>0)for(let he=0,ye=se.length;he<ye;he++){const ge=se[he];Rh(G,B,E,ge)}Ve&&ae.render(E);for(let he=0,ye=se.length;he<ye;he++){const ge=se[he];bh(g,E,ge,ge.viewport)}}else B.length>0&&Rh(G,B,E,N),Ve&&ae.render(E),bh(g,E,N);A!==null&&w===0&&(Fe.updateMultisampleRenderTarget(A),Fe.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(M,E,N),P.resetDefaultState(),R=-1,k=null,C.pop(),C.length>0?(x=C[C.length-1],Z===!0&&Se.setGlobalState(M.clippingPlanes,x.state.camera)):x=null,S.pop(),S.length>0?g=S[S.length-1]:g=null};function gc(E,N,H,G){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)x.pushLight(E),E.castShadow&&x.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){G&&Ye.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ze);const he=$.update(E),ye=E.material;ye.visible&&g.push(E,he,ye,H,Ye.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||X.intersectsObject(E))){const he=$.update(E),ye=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ye.copy(E.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Ye.copy(he.boundingSphere.center)),Ye.applyMatrix4(E.matrixWorld).applyMatrix4(ze)),Array.isArray(ye)){const ge=he.groups;for(let Ie=0,Ue=ge.length;Ie<Ue;Ie++){const Te=ge[Ie],Ke=ye[Te.materialIndex];Ke&&Ke.visible&&g.push(E,he,Ke,H,Ye.z,Te)}}else ye.visible&&g.push(E,he,ye,H,Ye.z,null)}}const se=E.children;for(let he=0,ye=se.length;he<ye;he++)gc(se[he],N,H,G)}function bh(E,N,H,G){const{opaque:B,transmissive:se,transparent:he}=E;x.setupLightsView(H),Z===!0&&Se.setGlobalState(M.clippingPlanes,H),G&&Ae.viewport(O.copy(G)),B.length>0&&uo(B,N,H),se.length>0&&uo(se,N,H),he.length>0&&uo(he,N,H),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Rh(E,N,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[G.id]===void 0&&(x.state.transmissionRenderTarget[G.id]=new sn(1,1,{generateMipmaps:!0,type:Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float")?Zs:qt,minFilter:Br,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const se=x.state.transmissionRenderTarget[G.id],he=G.viewport||O;se.setSize(he.z*M.transmissionResolutionScale,he.w*M.transmissionResolutionScale);const ye=M.getRenderTarget(),ge=M.getActiveCubeFace(),Ie=M.getActiveMipmapLevel();M.setRenderTarget(se),M.getClearColor(q),te=M.getClearAlpha(),te<1&&M.setClearColor(16777215,.5),M.clear(),Ve&&ae.render(H);const Ue=M.toneMapping;M.toneMapping=dr;const Te=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),x.setupLightsView(G),Z===!0&&Se.setGlobalState(M.clippingPlanes,G),uo(E,H,G),Fe.updateMultisampleRenderTarget(se),Fe.updateRenderTargetMipmap(se),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let ot=0,wt=N.length;ot<wt;ot++){const Tt=N[ot],{object:ut,geometry:De,material:yt,group:tt}=Tt;if(yt.side===cn&&ut.layers.test(G.layers)){const En=yt.side;yt.side=Gt,yt.needsUpdate=!0,Dh(ut,H,G,De,yt,tt),yt.side=En,yt.needsUpdate=!0,Ke=!0}}Ke===!0&&(Fe.updateMultisampleRenderTarget(se),Fe.updateRenderTargetMipmap(se))}M.setRenderTarget(ye,ge,Ie),M.setClearColor(q,te),Te!==void 0&&(G.viewport=Te),M.toneMapping=Ue}function uo(E,N,H){const G=N.isScene===!0?N.overrideMaterial:null;for(let B=0,se=E.length;B<se;B++){const he=E[B],{object:ye,geometry:ge,group:Ie}=he;let Ue=he.material;Ue.allowOverride===!0&&G!==null&&(Ue=G),ye.layers.test(H.layers)&&Dh(ye,N,H,ge,Ue,Ie)}}function Dh(E,N,H,G,B,se){E.onBeforeRender(M,N,H,G,B,se),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(M,N,H,G,E,se),B.transparent===!0&&B.side===cn&&B.forceSinglePass===!1?(B.side=Gt,B.needsUpdate=!0,M.renderBufferDirect(H,N,G,B,E,se),B.side=Fi,B.needsUpdate=!0,M.renderBufferDirect(H,N,G,B,E,se),B.side=cn):M.renderBufferDirect(H,N,G,B,E,se),E.onAfterRender(M,N,H,G,B,se)}function fo(E,N,H){N.isScene!==!0&&(N=Xt);const G=Ce.get(E),B=x.state.lights,se=x.state.shadowsArray,he=B.state.version,ye=V.getParameters(E,B.state,se,N,H),ge=V.getProgramCacheKey(ye);let Ie=G.programs;G.environment=E.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(E.isMeshStandardMaterial?y:T).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Ie===void 0&&(E.addEventListener("dispose",Be),Ie=new Map,G.programs=Ie);let Ue=Ie.get(ge);if(Ue!==void 0){if(G.currentProgram===Ue&&G.lightsStateVersion===he)return Ih(E,ye),Ue}else ye.uniforms=V.getUniforms(E),E.onBeforeCompile(ye,M),Ue=V.acquireProgram(ye,ge),Ie.set(ge,Ue),G.uniforms=ye.uniforms;const Te=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Te.clippingPlanes=Se.uniform),Ih(E,ye),G.needsLights=Dx(E),G.lightsStateVersion=he,G.needsLights&&(Te.ambientLightColor.value=B.state.ambient,Te.lightProbe.value=B.state.probe,Te.directionalLights.value=B.state.directional,Te.directionalLightShadows.value=B.state.directionalShadow,Te.spotLights.value=B.state.spot,Te.spotLightShadows.value=B.state.spotShadow,Te.rectAreaLights.value=B.state.rectArea,Te.ltc_1.value=B.state.rectAreaLTC1,Te.ltc_2.value=B.state.rectAreaLTC2,Te.pointLights.value=B.state.point,Te.pointLightShadows.value=B.state.pointShadow,Te.hemisphereLights.value=B.state.hemi,Te.directionalShadowMap.value=B.state.directionalShadowMap,Te.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Te.spotShadowMap.value=B.state.spotShadowMap,Te.spotLightMatrix.value=B.state.spotLightMatrix,Te.spotLightMap.value=B.state.spotLightMap,Te.pointShadowMap.value=B.state.pointShadowMap,Te.pointShadowMatrix.value=B.state.pointShadowMatrix),G.currentProgram=Ue,G.uniformsList=null,Ue}function Ph(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=vl.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Ih(E,N){const H=Ce.get(E);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function bx(E,N,H,G,B){N.isScene!==!0&&(N=Xt),Fe.resetTextureUnits();const se=N.fog,he=G.isMeshStandardMaterial?N.environment:null,ye=A===null?M.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:gr,ge=(G.isMeshStandardMaterial?y:T).get(G.envMap||he),Ie=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ue=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Te=!!H.morphAttributes.position,Ke=!!H.morphAttributes.normal,ot=!!H.morphAttributes.color;let wt=dr;G.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(wt=M.toneMapping);const Tt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ut=Tt!==void 0?Tt.length:0,De=Ce.get(G),yt=x.state.lights;if(Z===!0&&(xe===!0||E!==k)){const an=E===k&&G.id===R;Se.setState(G,E,an)}let tt=!1;G.version===De.__version?(De.needsLights&&De.lightsStateVersion!==yt.state.version||De.outputColorSpace!==ye||B.isBatchedMesh&&De.batching===!1||!B.isBatchedMesh&&De.batching===!0||B.isBatchedMesh&&De.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&De.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&De.instancing===!1||!B.isInstancedMesh&&De.instancing===!0||B.isSkinnedMesh&&De.skinning===!1||!B.isSkinnedMesh&&De.skinning===!0||B.isInstancedMesh&&De.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&De.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&De.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&De.instancingMorph===!1&&B.morphTexture!==null||De.envMap!==ge||G.fog===!0&&De.fog!==se||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==Se.numPlanes||De.numIntersection!==Se.numIntersection)||De.vertexAlphas!==Ie||De.vertexTangents!==Ue||De.morphTargets!==Te||De.morphNormals!==Ke||De.morphColors!==ot||De.toneMapping!==wt||De.morphTargetsCount!==ut)&&(tt=!0):(tt=!0,De.__version=G.version);let En=De.currentProgram;tt===!0&&(En=fo(G,N,B));let qr=!1,Mn=!1,ta=!1;const At=En.getUniforms(),pn=De.uniforms;if(Ae.useProgram(En.program)&&(qr=!0,Mn=!0,ta=!0),G.id!==R&&(R=G.id,Mn=!0),qr||k!==E){Ae.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),At.setValue(D,"projectionMatrix",E.projectionMatrix),At.setValue(D,"viewMatrix",E.matrixWorldInverse);const mn=At.map.cameraPosition;mn!==void 0&&mn.setValue(D,we.setFromMatrixPosition(E.matrixWorld)),ft.logarithmicDepthBuffer&&At.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&At.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),k!==E&&(k=E,Mn=!0,ta=!0)}if(B.isSkinnedMesh){At.setOptional(D,B,"bindMatrix"),At.setOptional(D,B,"bindMatrixInverse");const an=B.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),At.setValue(D,"boneTexture",an.boneTexture,Fe))}B.isBatchedMesh&&(At.setOptional(D,B,"batchingTexture"),At.setValue(D,"batchingTexture",B._matricesTexture,Fe),At.setOptional(D,B,"batchingIdTexture"),At.setValue(D,"batchingIdTexture",B._indirectTexture,Fe),At.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&At.setValue(D,"batchingColorTexture",B._colorsTexture,Fe));const Bn=H.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&Le.update(B,H,En),(Mn||De.receiveShadow!==B.receiveShadow)&&(De.receiveShadow=B.receiveShadow,At.setValue(D,"receiveShadow",B.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(pn.envMap.value=ge,pn.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(pn.envMapIntensity.value=N.environmentIntensity),pn.dfgLUT!==void 0&&(pn.dfgLUT.value=YC()),Mn&&(At.setValue(D,"toneMappingExposure",M.toneMappingExposure),De.needsLights&&Rx(pn,ta),se&&G.fog===!0&&Ee.refreshFogUniforms(pn,se),Ee.refreshMaterialUniforms(pn,G,Y,W,x.state.transmissionRenderTarget[E.id]),vl.upload(D,Ph(De),pn,Fe)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(vl.upload(D,Ph(De),pn,Fe),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&At.setValue(D,"center",B.center),At.setValue(D,"modelViewMatrix",B.modelViewMatrix),At.setValue(D,"normalMatrix",B.normalMatrix),At.setValue(D,"modelMatrix",B.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const an=G.uniformsGroups;for(let mn=0,vc=an.length;mn<vc;mn++){const Ar=an[mn];fe.update(Ar,En),fe.bind(Ar,En)}}return En}function Rx(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Dx(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,N,H){const G=Ce.get(E);G.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Ce.get(E.texture).__webglTexture=N,Ce.get(E.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:H,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,N){const H=Ce.get(E);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0};const Px=D.createFramebuffer();this.setRenderTarget=function(E,N=0,H=0){A=E,L=N,w=H;let G=!0,B=null,se=!1,he=!1;if(E){const ge=Ce.get(E);if(ge.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(D.FRAMEBUFFER,null),G=!1;else if(ge.__webglFramebuffer===void 0)Fe.setupRenderTarget(E);else if(ge.__hasExternalTextures)Fe.rebindTextures(E,Ce.get(E.texture).__webglTexture,Ce.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Te=E.depthTexture;if(ge.__boundDepthTexture!==Te){if(Te!==null&&Ce.has(Te)&&(E.width!==Te.image.width||E.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Fe.setupDepthRenderbuffer(E)}}const Ie=E.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(he=!0);const Ue=Ce.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ue[N])?B=Ue[N][H]:B=Ue[N],se=!0):E.samples>0&&Fe.useMultisampledRTT(E)===!1?B=Ce.get(E).__webglMultisampledFramebuffer:Array.isArray(Ue)?B=Ue[H]:B=Ue,O.copy(E.viewport),J.copy(E.scissor),j=E.scissorTest}else O.copy($e).multiplyScalar(Y).floor(),J.copy(Ze).multiplyScalar(Y).floor(),j=rt;if(H!==0&&(B=Px),Ae.bindFramebuffer(D.FRAMEBUFFER,B)&&G&&Ae.drawBuffers(E,B),Ae.viewport(O),Ae.scissor(J),Ae.setScissorTest(j),se){const ge=Ce.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,ge.__webglTexture,H)}else if(he){const ge=N;for(let Ie=0;Ie<E.textures.length;Ie++){const Ue=Ce.get(E.textures[Ie]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ie,Ue.__webglTexture,H,ge)}}else if(E!==null&&H!==0){const ge=Ce.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ge.__webglTexture,H)}R=-1},this.readRenderTargetPixels=function(E,N,H,G,B,se,he,ye=0){if(!(E&&E.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Ce.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&he!==void 0&&(ge=ge[he]),ge){Ae.bindFramebuffer(D.FRAMEBUFFER,ge);try{const Ie=E.textures[ye],Ue=Ie.format,Te=Ie.type;if(!ft.textureFormatReadable(Ue)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(Te)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-G&&H>=0&&H<=E.height-B&&(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ye),D.readPixels(N,H,G,B,Ne.convert(Ue),Ne.convert(Te),se))}finally{const Ie=A!==null?Ce.get(A).__webglFramebuffer:null;Ae.bindFramebuffer(D.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(E,N,H,G,B,se,he,ye=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Ce.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&he!==void 0&&(ge=ge[he]),ge)if(N>=0&&N<=E.width-G&&H>=0&&H<=E.height-B){Ae.bindFramebuffer(D.FRAMEBUFFER,ge);const Ie=E.textures[ye],Ue=Ie.format,Te=Ie.type;if(!ft.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ke),D.bufferData(D.PIXEL_PACK_BUFFER,se.byteLength,D.STREAM_READ),E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ye),D.readPixels(N,H,G,B,Ne.convert(Ue),Ne.convert(Te),0);const ot=A!==null?Ce.get(A).__webglFramebuffer:null;Ae.bindFramebuffer(D.FRAMEBUFFER,ot);const wt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await uE(D,wt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ke),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,se),D.deleteBuffer(Ke),D.deleteSync(wt),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,N=null,H=0){const G=Math.pow(2,-H),B=Math.floor(E.image.width*G),se=Math.floor(E.image.height*G),he=N!==null?N.x:0,ye=N!==null?N.y:0;Fe.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,he,ye,B,se),Ae.unbindTexture()};const Ix=D.createFramebuffer(),Lx=D.createFramebuffer();this.copyTextureToTexture=function(E,N,H=null,G=null,B=0,se=null){se===null&&(B!==0?(eo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=B,B=0):se=0);let he,ye,ge,Ie,Ue,Te,Ke,ot,wt;const Tt=E.isCompressedTexture?E.mipmaps[se]:E.image;if(H!==null)he=H.max.x-H.min.x,ye=H.max.y-H.min.y,ge=H.isBox3?H.max.z-H.min.z:1,Ie=H.min.x,Ue=H.min.y,Te=H.isBox3?H.min.z:0;else{const Bn=Math.pow(2,-B);he=Math.floor(Tt.width*Bn),ye=Math.floor(Tt.height*Bn),E.isDataArrayTexture?ge=Tt.depth:E.isData3DTexture?ge=Math.floor(Tt.depth*Bn):ge=1,Ie=0,Ue=0,Te=0}G!==null?(Ke=G.x,ot=G.y,wt=G.z):(Ke=0,ot=0,wt=0);const ut=Ne.convert(N.format),De=Ne.convert(N.type);let yt;N.isData3DTexture?(Fe.setTexture3D(N,0),yt=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Fe.setTexture2DArray(N,0),yt=D.TEXTURE_2D_ARRAY):(Fe.setTexture2D(N,0),yt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const tt=D.getParameter(D.UNPACK_ROW_LENGTH),En=D.getParameter(D.UNPACK_IMAGE_HEIGHT),qr=D.getParameter(D.UNPACK_SKIP_PIXELS),Mn=D.getParameter(D.UNPACK_SKIP_ROWS),ta=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Tt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Tt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ie),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ue),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Te);const At=E.isDataArrayTexture||E.isData3DTexture,pn=N.isDataArrayTexture||N.isData3DTexture;if(E.isDepthTexture){const Bn=Ce.get(E),an=Ce.get(N),mn=Ce.get(Bn.__renderTarget),vc=Ce.get(an.__renderTarget);Ae.bindFramebuffer(D.READ_FRAMEBUFFER,mn.__webglFramebuffer),Ae.bindFramebuffer(D.DRAW_FRAMEBUFFER,vc.__webglFramebuffer);for(let Ar=0;Ar<ge;Ar++)At&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ce.get(E).__webglTexture,B,Te+Ar),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ce.get(N).__webglTexture,se,wt+Ar)),D.blitFramebuffer(Ie,Ue,he,ye,Ke,ot,he,ye,D.DEPTH_BUFFER_BIT,D.NEAREST);Ae.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(B!==0||E.isRenderTargetTexture||Ce.has(E)){const Bn=Ce.get(E),an=Ce.get(N);Ae.bindFramebuffer(D.READ_FRAMEBUFFER,Ix),Ae.bindFramebuffer(D.DRAW_FRAMEBUFFER,Lx);for(let mn=0;mn<ge;mn++)At?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Bn.__webglTexture,B,Te+mn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Bn.__webglTexture,B),pn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,an.__webglTexture,se,wt+mn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,an.__webglTexture,se),B!==0?D.blitFramebuffer(Ie,Ue,he,ye,Ke,ot,he,ye,D.COLOR_BUFFER_BIT,D.NEAREST):pn?D.copyTexSubImage3D(yt,se,Ke,ot,wt+mn,Ie,Ue,he,ye):D.copyTexSubImage2D(yt,se,Ke,ot,Ie,Ue,he,ye);Ae.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else pn?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(yt,se,Ke,ot,wt,he,ye,ge,ut,De,Tt.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(yt,se,Ke,ot,wt,he,ye,ge,ut,Tt.data):D.texSubImage3D(yt,se,Ke,ot,wt,he,ye,ge,ut,De,Tt):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,se,Ke,ot,he,ye,ut,De,Tt.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,se,Ke,ot,Tt.width,Tt.height,ut,Tt.data):D.texSubImage2D(D.TEXTURE_2D,se,Ke,ot,he,ye,ut,De,Tt);D.pixelStorei(D.UNPACK_ROW_LENGTH,tt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,En),D.pixelStorei(D.UNPACK_SKIP_PIXELS,qr),D.pixelStorei(D.UNPACK_SKIP_ROWS,Mn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ta),se===0&&N.generateMipmaps&&D.generateMipmap(yt),Ae.unbindTexture()},this.initRenderTarget=function(E){Ce.get(E).__webglFramebuffer===void 0&&Fe.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Fe.setTextureCube(E,0):E.isData3DTexture?Fe.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Fe.setTexture2DArray(E,0):Fe.setTexture2D(E,0),Ae.unbindTexture()},this.resetState=function(){L=0,w=0,A=null,Ae.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),n.unpackColorSpace=nt._getUnpackColorSpace()}}/**
 * postprocessing v6.38.0 build Sat Nov 08 2025
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2025 Raoul van Rüschen
 * @license Zlib
 */var Mu=1/1e3,QC=1e3,KC=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(t){typeof document<"u"&&document.hidden!==void 0&&(t?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=t)}get delta(){return this._delta*Mu}get fixedDelta(){return this._fixedDelta*Mu}set fixedDelta(t){this._fixedDelta=t*QC}get elapsed(){return this._elapsed*Mu}update(t){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(t!==void 0?t:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(t){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},qC=(()=>{const t=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),n=new Nn;return n.setAttribute("position",new Pn(t,3)),n.setAttribute("uv",new Pn(e,2)),n})(),Xn=class pd{static get fullscreenGeometry(){return qC}constructor(e="Pass",n=new fd,i=new ux){this.name=e,this.renderer=null,this.scene=n,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const n=this.fullscreenMaterial;n!==null&&(n.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let n=this.screen;n!==null?n.material=e:(n=new Wn(pd.fullscreenGeometry,e),n.frustumCulled=!1,this.scene===null&&(this.scene=new fd),this.scene.add(n),this.screen=n)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,n=Qr){}render(e,n,i,r,s){throw new Error("Render method not implemented!")}setSize(e,n){}initialize(e,n,i){}dispose(){for(const e of Object.keys(this)){const n=this[e];(n instanceof sn||n instanceof Kr||n instanceof Ft||n instanceof pd)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},JC=class extends Xn{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(t,e,n,i,r){const s=t.state.buffers.stencil;s.setLocked(!1),s.setTest(!1)}},ZC=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,vx="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",xx=class extends Pt{constructor(){super({name:"CopyMaterial",defines:{DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new Ge(null),depthBuffer:new Ge(null),channelWeights:new Ge(null),opacity:new Ge(1)},blending:Qt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:ZC,vertexShader:vx}),this.depthFunc=Gl}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(t){const e=t!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=t}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(t){const e=t!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=t}set depthPacking(t){this.defines.DEPTH_PACKING=t.toFixed(0),this.needsUpdate=!0}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(t){t!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=t):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(t){this.uniforms.inputBuffer.value=t}getOpacity(t){return this.uniforms.opacity.value}setOpacity(t){this.uniforms.opacity.value=t}},$C=class extends Xn{constructor(t,e=!0){super("CopyPass"),this.fullscreenMaterial=new xx,this.needsSwap=!1,this.renderTarget=t,t===void 0&&(this.renderTarget=new sn(1,1,{minFilter:Vt,magFilter:Vt,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(t){this.autoResize=t}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(t){this.autoResize=t}render(t,e,n,i,r){this.fullscreenMaterial.inputBuffer=e.texture,t.setRenderTarget(this.renderToScreen?null:this.renderTarget),t.render(this.scene,this.camera)}setSize(t,e){this.autoResize&&this.renderTarget.setSize(t,e)}initialize(t,e,n){n!==void 0&&(this.renderTarget.texture.type=n,n!==qt?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":t!==null&&t.outputColorSpace===ct&&(this.renderTarget.texture.colorSpace=ct))}},$m=new Je,Eh=class extends Xn{constructor(t=!0,e=!0,n=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=t,this.depth=e,this.stencil=n,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(t,e,n){this.color=t,this.depth=e,this.stencil=n}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(t){this.overrideClearColor=t}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(t){this.overrideClearAlpha=t}render(t,e,n,i,r){const s=this.overrideClearColor,a=this.overrideClearAlpha,o=t.getClearAlpha(),l=s!==null,c=a>=0;l?(t.getClearColor($m),t.setClearColor(s,c?a:o)):c&&t.setClearAlpha(a),t.setRenderTarget(this.renderToScreen?null:e),t.clear(this.color,this.depth,this.stencil),l?t.setClearColor($m,o):c&&t.setClearAlpha(o)}},e3=class extends Xn{constructor(t,e){super("MaskPass",t,e),this.needsSwap=!1,this.clearPass=new Eh(!1,!1,!0),this.inverse=!1}set mainScene(t){this.scene=t}set mainCamera(t){this.camera=t}get inverted(){return this.inverse}set inverted(t){this.inverse=t}get clear(){return this.clearPass.enabled}set clear(t){this.clearPass.enabled=t}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(t){this.inverted=t}render(t,e,n,i,r){const s=t.getContext(),a=t.state.buffers,o=this.scene,l=this.camera,c=this.clearPass,f=this.inverted?0:1,u=1-f;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.stencil.setFunc(s.ALWAYS,f,4294967295),a.stencil.setClear(u),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?c.render(t,null):(c.render(t,e),c.render(t,n))),this.renderToScreen?(t.setRenderTarget(null),t.render(o,l)):(t.setRenderTarget(e),t.render(o,l),t.setRenderTarget(n),t.render(o,l)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(s.EQUAL,1,4294967295),a.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.stencil.setLocked(!0)}},t3=class{constructor(t=null,{depthBuffer:e=!0,stencilBuffer:n=!1,multisampling:i=0,frameBufferType:r}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,n,r,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new $C,this.depthTexture=null,this.passes=[],this.timer=new KC,this.autoRenderToScreen=!0,this.setRenderer(t)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(t){const e=this.inputBuffer,n=this.multisampling;n>0&&t>0?(this.inputBuffer.samples=t,this.outputBuffer.samples=t,this.inputBuffer.dispose(),this.outputBuffer.dispose()):n!==t&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,t),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(t){if(this.renderer=t,t!==null){const e=t.getSize(new ve),n=t.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===qt&&t.outputColorSpace===ct&&(this.inputBuffer.texture.colorSpace=ct,this.outputBuffer.texture.colorSpace=ct,this.inputBuffer.dispose(),this.outputBuffer.dispose()),t.autoClear=!1,this.setSize(e.width,e.height);for(const r of this.passes)r.initialize(t,n,i)}}replaceRenderer(t,e=!0){const n=this.renderer,i=n.domElement.parentNode;return this.setRenderer(t),e&&i!==null&&(i.removeChild(n.domElement),i.appendChild(t.domElement)),n}createDepthTexture(){const t=this.depthTexture=new yh;return this.inputBuffer.depthTexture=t,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(t.format=Xs,t.type=Ws):t.type=mr,t}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const t of this.passes)t.setDepthTexture(null)}}createBuffer(t,e,n,i){const r=this.renderer,s=r===null?new ve:r.getDrawingBufferSize(new ve),a={minFilter:Vt,magFilter:Vt,stencilBuffer:e,depthBuffer:t,type:n},o=new sn(s.width,s.height,a);return i>0&&(o.samples=i),n===qt&&r!==null&&r.outputColorSpace===ct&&(o.texture.colorSpace=ct),o.texture.name="EffectComposer.Buffer",o.texture.generateMipmaps=!1,o}setMainScene(t){for(const e of this.passes)e.mainScene=t}setMainCamera(t){for(const e of this.passes)e.mainCamera=t}addPass(t,e){const n=this.passes,i=this.renderer,r=i.getDrawingBufferSize(new ve),s=i.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(t.setRenderer(i),t.setSize(r.width,r.height),t.initialize(i,s,a),this.autoRenderToScreen&&(n.length>0&&(n[n.length-1].renderToScreen=!1),t.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?n.splice(e,0,t):n.push(t),this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!0),t.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const o=this.createDepthTexture();for(t of n)t.setDepthTexture(o)}else t.setDepthTexture(this.depthTexture)}removePass(t){const e=this.passes,n=e.indexOf(t);if(n!==-1&&e.splice(n,1).length>0){if(this.depthTexture!==null){const s=(o,l)=>o||l.needsDepthTexture;e.reduce(s,!1)||(t.getDepthTexture()===this.depthTexture&&t.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&n===e.length&&(t.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const t=this.passes;this.deleteDepthTexture(),t.length>0&&(this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!1),this.passes=[])}render(t){const e=this.renderer,n=this.copyPass;let i=this.inputBuffer,r=this.outputBuffer,s=!1,a,o,l;t===void 0&&(this.timer.update(),t=this.timer.getDelta());for(const c of this.passes)c.enabled&&(c.render(e,i,r,t,s),c.needsSwap&&(s&&(n.renderToScreen=c.renderToScreen,a=e.getContext(),o=e.state.buffers.stencil,o.setFunc(a.NOTEQUAL,1,4294967295),n.render(e,i,r,t,s),o.setFunc(a.EQUAL,1,4294967295)),l=i,i=r,r=l),c instanceof e3?s=!0:c instanceof JC&&(s=!1))}setSize(t,e,n){const i=this.renderer,r=i.getSize(new ve);(t===void 0||e===void 0)&&(t=r.width,e=r.height),(r.width!==t||r.height!==e)&&i.setSize(t,e,n);const s=i.getDrawingBufferSize(new ve);this.inputBuffer.setSize(s.width,s.height),this.outputBuffer.setSize(s.width,s.height);for(const a of this.passes)a.setSize(s.width,s.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const t of this.passes)t.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),Xn.fullscreenGeometry.dispose()}},Ii={NONE:0,DEPTH:1,CONVOLUTION:2},it={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},n3=class{constructor(){this.shaderParts=new Map([[it.FRAGMENT_HEAD,null],[it.FRAGMENT_MAIN_UV,null],[it.FRAGMENT_MAIN_IMAGE,null],[it.VERTEX_HEAD,null],[it.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=Ii.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=gr}},wu=!1,e0=class{constructor(t=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(t),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let n;if(e.material.flatShading)switch(e.material.side){case cn:n=this.materialsFlatShadedDoubleSide;break;case Gt:n=this.materialsFlatShadedBackSide;break;default:n=this.materialsFlatShaded;break}else switch(e.material.side){case cn:n=this.materialsDoubleSide;break;case Gt:n=this.materialsBackSide;break;default:n=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=n[2]:e.isInstancedMesh?e.material=n[1]:e.material=n[0],++this.meshCount}}}cloneMaterial(t){if(!(t instanceof Pt))return t.clone();const e=t.uniforms,n=new Map;for(const r in e){const s=e[r].value;s.isRenderTargetTexture&&(e[r].value=null,n.set(r,s))}const i=t.clone();for(const r of n)e[r[0]].value=r[1],i.uniforms[r[0]].value=r[1];return i}setMaterial(t){if(this.disposeMaterials(),this.material=t,t!==null){const e=this.materials=[this.cloneMaterial(t),this.cloneMaterial(t),this.cloneMaterial(t)];for(const n of e)n.uniforms=Object.assign({},t.uniforms),n.side=Fi;e[2].skinning=!0,this.materialsBackSide=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.side=Gt,i}),this.materialsDoubleSide=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.side=cn,i}),this.materialsFlatShaded=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i.side=Gt,i}),this.materialsFlatShadedDoubleSide=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i.side=cn,i})}}render(t,e,n){const i=t.shadowMap.enabled;if(t.shadowMap.enabled=!1,wu){const r=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),t.render(e,n);for(const s of r)s[0].material=s[1];this.meshCount!==r.size&&r.clear()}else{const r=e.overrideMaterial;e.overrideMaterial=this.material,t.render(e,n),e.overrideMaterial=r}t.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){const t=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of t)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return wu}static set workaroundEnabled(t){wu=t}},Ki=-1,hi=class extends ki{constructor(t,e=Ki,n=Ki,i=1){super(),this.resizable=t,this.baseSize=new ve(1,1),this.preferredSize=new ve(e,n),this.target=this.preferredSize,this.s=i,this.effectiveSize=new ve,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const t=this.baseSize,e=this.preferredSize,n=this.effectiveSize,i=this.scale;e.width!==Ki?n.width=e.width:e.height!==Ki?n.width=Math.round(e.height*(t.width/Math.max(t.height,1))):n.width=Math.round(t.width*i),e.height!==Ki?n.height=e.height:e.width!==Ki?n.height=Math.round(e.width/Math.max(t.width/Math.max(t.height,1),1)):n.height=Math.round(t.height*i)}get width(){return this.effectiveSize.width}set width(t){this.preferredWidth=t}get height(){return this.effectiveSize.height}set height(t){this.preferredHeight=t}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(t){this.s!==t&&(this.s=t,this.preferredSize.setScalar(Ki),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getScale(){return this.scale}setScale(t){this.scale=t}get baseWidth(){return this.baseSize.width}set baseWidth(t){this.baseSize.width!==t&&(this.baseSize.width=t,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseWidth(){return this.baseWidth}setBaseWidth(t){this.baseWidth=t}get baseHeight(){return this.baseSize.height}set baseHeight(t){this.baseSize.height!==t&&(this.baseSize.height=t,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(t){this.baseHeight=t}setBaseSize(t,e){(this.baseSize.width!==t||this.baseSize.height!==e)&&(this.baseSize.set(t,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(t){this.preferredSize.width!==t&&(this.preferredSize.width=t,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(t){this.preferredWidth=t}get preferredHeight(){return this.preferredSize.height}set preferredHeight(t){this.preferredSize.height!==t&&(this.preferredSize.height=t,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(t){this.preferredHeight=t}setPreferredSize(t,e){(this.preferredSize.width!==t||this.preferredSize.height!==e)&&(this.preferredSize.set(t,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}copy(t){this.s=t.scale,this.baseSize.set(t.baseWidth,t.baseHeight),this.preferredSize.set(t.preferredWidth,t.preferredHeight),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height)}static get AUTO_SIZE(){return Ki}},qe={ADD:0,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},i3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb,y.a),y.a*opacity);}",r3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb)*0.5,y.a),y.a*opacity);}",s3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.xy,xHSL.z));return mix(x,vec4(z,y.a),y.a*opacity);}",a3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/b)),vec3(1.0),step(1.0,a));return mix(x,vec4(z,y.a),y.a*opacity);}",o3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(x,vec4(z,y.a),y.a*opacity);}",l3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb,y.rgb),y.a),y.a*opacity);}",c3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(abs(x.rgb-y.rgb),y.a),y.a*opacity);}",u3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb/max(y.rgb,1e-12),y.a),y.a*opacity);}",f3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb-2.0*x.rgb*y.rgb),y.a),y.a*opacity);}",d3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=min(x.rgb,1.0);vec3 b=min(y.rgb,1.0);vec3 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(x,vec4(z,y.a),y.a*opacity);}",h3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(step(1.0,x.rgb+y.rgb),y.a),y.a*opacity);}",p3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.x,xHSL.yz));return mix(x,vec4(z,y.a),y.a*opacity);}",m3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-y.rgb,y.a),y.a*opacity);}",g3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(y.rgb*(1.0-x.rgb),y.a),y.a*opacity);}",v3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb,y.rgb),y.a),y.a*opacity);}",x3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(y.rgb+x.rgb-1.0,0.0,1.0),y.a),y.a*opacity);}",_3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb+y.rgb,1.0),y.a),y.a*opacity);}",y3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(2.0*y.rgb+x.rgb-1.0,0.0,1.0),y.a),y.a*opacity);}",A3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.xy,yHSL.z));return mix(x,vec4(z,y.a),y.a*opacity);}",S3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb*y.rgb,y.a),y.a*opacity);}",E3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-abs(1.0-x.rgb-y.rgb),y.a),y.a*opacity);}",M3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,y.a*opacity);}",w3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(2.0*y.rgb*x.rgb,1.0-2.0*(1.0-y.rgb)*(1.0-x.rgb),step(0.5,x.rgb));return mix(x,vec4(z,y.a),y.a*opacity);}",T3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 y2=2.0*y.rgb;vec3 z=mix(mix(y2,x.rgb,step(0.5*x.rgb,y.rgb)),max(y2-1.0,vec3(0.0)),step(x.rgb,y2-1.0));return mix(x,vec4(z,y.a),y.a*opacity);}",C3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(min(x.rgb*x.rgb/max(1.0-y.rgb,1e-12),1.0),y.rgb,step(1.0,y.rgb));return mix(x,vec4(z,y.a),y.a*opacity);}",b3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.x,yHSL.y,xHSL.z));return mix(x,vec4(z,y.a),y.a*opacity);}",R3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb-min(x.rgb*y.rgb,1.0),y.a),y.a*opacity);}",D3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb;vec3 b=y.rgb;vec3 y2=2.0*b;vec3 w=step(0.5,b);vec3 c=a-(1.0-y2)*a*(1.0-a);vec3 d=mix(a+(y2-1.0)*(sqrt(a)-a),a+(y2-1.0)*a*((16.0*a-12.0)*a+3.0),w*(1.0-step(0.25,a)));vec3 z=mix(c,d,w);return mix(x,vec4(z,y.a),y.a*opacity);}",P3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",I3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb+y.rgb-1.0,0.0),y.a),y.a*opacity);}",L3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(max(1.0-min((1.0-x.rgb)/(2.0*y.rgb),1.0),0.0),min(x.rgb/(2.0*(1.0-y.rgb)),1.0),step(0.5,y.rgb));return mix(x,vec4(z,y.a),y.a*opacity);}",U3=new Map([[qe.ADD,i3],[qe.AVERAGE,r3],[qe.COLOR,s3],[qe.COLOR_BURN,a3],[qe.COLOR_DODGE,o3],[qe.DARKEN,l3],[qe.DIFFERENCE,c3],[qe.DIVIDE,u3],[qe.DST,null],[qe.EXCLUSION,f3],[qe.HARD_LIGHT,d3],[qe.HARD_MIX,h3],[qe.HUE,p3],[qe.INVERT,m3],[qe.INVERT_RGB,g3],[qe.LIGHTEN,v3],[qe.LINEAR_BURN,x3],[qe.LINEAR_DODGE,_3],[qe.LINEAR_LIGHT,y3],[qe.LUMINOSITY,A3],[qe.MULTIPLY,S3],[qe.NEGATION,E3],[qe.NORMAL,M3],[qe.OVERLAY,w3],[qe.PIN_LIGHT,T3],[qe.REFLECT,C3],[qe.SATURATION,b3],[qe.SCREEN,R3],[qe.SOFT_LIGHT,D3],[qe.SRC,P3],[qe.SUBTRACT,I3],[qe.VIVID_LIGHT,L3]]),N3=class extends ki{constructor(t,e=1){super(),this._blendFunction=t,this.opacity=new Ge(e)}getOpacity(){return this.opacity.value}setOpacity(t){this.opacity.value=t}get blendFunction(){return this._blendFunction}set blendFunction(t){this._blendFunction=t,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(t){this.blendFunction=t}getShaderCode(){return U3.get(this.blendFunction)}},_x=class extends ki{constructor(t,e,{attributes:n=Ii.NONE,blendFunction:i=qe.NORMAL,defines:r=new Map,uniforms:s=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=t,this.renderer=null,this.attributes=n,this.fragmentShader=e,this.vertexShader=o,this.defines=r,this.uniforms=s,this.extensions=a,this.blendMode=new N3(i),this.blendMode.addEventListener("change",l=>this.setChanged()),this._inputColorSpace=gr,this._outputColorSpace=fi}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(t){this._inputColorSpace=t,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t,this.setChanged()}set mainScene(t){}set mainCamera(t){}getName(){return this.name}setRenderer(t){this.renderer=t}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(t){this.attributes=t,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(t){this.fragmentShader=t,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(t){this.vertexShader=t,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(t,e=Qr){}update(t,e,n){}setSize(t,e){}initialize(t,e,n){}dispose(){for(const t of Object.keys(this)){const e=this[t];(e instanceof sn||e instanceof Kr||e instanceof Ft||e instanceof Xn)&&this[t].dispose()}}},Mh={MEDIUM:2,LARGE:3},B3=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,F3="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",O3=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],z3=class extends Pt{constructor(t=new mt){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new Ge(null),texelSize:new Ge(new mt),scale:new Ge(1),kernel:new Ge(0)},blending:Qt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:B3,vertexShader:F3}),this.setTexelSize(t.x,t.y),this.kernelSize=Mh.MEDIUM}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setInputBuffer(t){this.inputBuffer=t}get kernelSequence(){return O3[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(t){this.uniforms.scale.value=t}getScale(){return this.uniforms.scale.value}setScale(t){this.uniforms.scale.value=t}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(t){this.uniforms.kernel.value=t}setKernel(t){this.kernel=t}setTexelSize(t,e){this.uniforms.texelSize.value.set(t,e,t*.5,e*.5)}setSize(t,e){const n=1/t,i=1/e;this.uniforms.texelSize.value.set(n,i,n*.5,i*.5)}},k3=class extends Xn{constructor({kernelSize:t=Mh.MEDIUM,resolutionScale:e=.5,width:n=hi.AUTO_SIZE,height:i=hi.AUTO_SIZE,resolutionX:r=n,resolutionY:s=i}={}){super("KawaseBlurPass"),this.renderTargetA=new sn(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const a=this.resolution=new hi(this,r,s,e);a.addEventListener("change",o=>this.setSize(a.baseWidth,a.baseHeight)),this._blurMaterial=new z3,this._blurMaterial.kernelSize=t,this.copyMaterial=new xx}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(t){this._blurMaterial=t}get dithering(){return this.copyMaterial.dithering}set dithering(t){this.copyMaterial.dithering=t}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(t){this.blurMaterial.kernelSize=t}get width(){return this.resolution.width}set width(t){this.resolution.preferredWidth=t}get height(){return this.resolution.height}set height(t){this.resolution.preferredHeight=t}get scale(){return this.blurMaterial.scale}set scale(t){this.blurMaterial.scale=t}getScale(){return this.blurMaterial.scale}setScale(t){this.blurMaterial.scale=t}getKernelSize(){return this.kernelSize}setKernelSize(t){this.kernelSize=t}getResolutionScale(){return this.resolution.scale}setResolutionScale(t){this.resolution.scale=t}render(t,e,n,i,r){const s=this.scene,a=this.camera,o=this.renderTargetA,l=this.renderTargetB,c=this.blurMaterial,f=c.kernelSequence;let u=e;this.fullscreenMaterial=c;for(let h=0,p=f.length;h<p;++h){const v=h&1?l:o;c.kernel=f[h],c.inputBuffer=u.texture,t.setRenderTarget(v),t.render(s,a),u=v}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=u.texture,t.setRenderTarget(this.renderToScreen?null:n),t.render(s,a)}setSize(t,e){const n=this.resolution;n.setBaseSize(t,e);const i=n.width,r=n.height;this.renderTargetA.setSize(i,r),this.renderTargetB.setSize(i,r),this.blurMaterial.setSize(t,e)}initialize(t,e,n){n!==void 0&&(this.renderTargetA.texture.type=n,this.renderTargetB.texture.type=n,n!==qt?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):t!==null&&t.outputColorSpace===ct&&(this.renderTargetA.texture.colorSpace=ct,this.renderTargetB.texture.colorSpace=ct))}static get AUTO_SIZE(){return hi.AUTO_SIZE}},H3=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);float mask=1.0;
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);mask=low*high;
#elif defined(THRESHOLD)
mask=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=texel*mask;
#else
gl_FragColor=vec4(l*mask);
#endif
}`,G3=class extends Pt{constructor(t=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:Js.replace(/\D+/g,"")},uniforms:{inputBuffer:new Ge(null),threshold:new Ge(0),smoothing:new Ge(1),range:new Ge(null)},blending:Qt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:H3,vertexShader:vx}),this.colorOutput=t,this.luminanceRange=e}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setInputBuffer(t){this.uniforms.inputBuffer.value=t}get threshold(){return this.uniforms.threshold.value}set threshold(t){this.smoothing>0||t>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=t}getThreshold(){return this.threshold}setThreshold(t){this.threshold=t}get smoothing(){return this.uniforms.smoothing.value}set smoothing(t){this.threshold>0||t>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=t}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(t){this.smoothing=t}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(t){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(t){t?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(t){return this.colorOutput}setColorOutputEnabled(t){this.colorOutput=t}get useRange(){return this.luminanceRange!==null}set useRange(t){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(t){t!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=t,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(t){this.luminanceRange=t}},V3=class extends Xn{constructor({renderTarget:t,luminanceRange:e,colorOutput:n,resolutionScale:i=1,width:r=hi.AUTO_SIZE,height:s=hi.AUTO_SIZE,resolutionX:a=r,resolutionY:o=s}={}){super("LuminancePass"),this.fullscreenMaterial=new G3(n,e),this.needsSwap=!1,this.renderTarget=t,this.renderTarget===void 0&&(this.renderTarget=new sn(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const l=this.resolution=new hi(this,a,o,i);l.addEventListener("change",c=>this.setSize(l.baseWidth,l.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(t,e,n,i,r){const s=this.fullscreenMaterial;s.inputBuffer=e.texture,t.setRenderTarget(this.renderToScreen?null:this.renderTarget),t.render(this.scene,this.camera)}setSize(t,e){const n=this.resolution;n.setBaseSize(t,e),this.renderTarget.setSize(n.width,n.height)}initialize(t,e,n){n!==void 0&&n!==qt&&(this.renderTarget.texture.type=n,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},W3=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.0555555
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,X3="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",Y3=class extends Pt{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new Ge(null),texelSize:new Ge(new ve)},blending:Qt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:W3,vertexShader:X3})}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setSize(t,e){this.uniforms.texelSize.value.set(1/t,1/e)}},j3=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,Q3="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",K3=class extends Pt{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new Ge(null),supportBuffer:new Ge(null),texelSize:new Ge(new ve),radius:new Ge(.85)},blending:Qt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:j3,vertexShader:Q3})}set inputBuffer(t){this.uniforms.inputBuffer.value=t}set supportBuffer(t){this.uniforms.supportBuffer.value=t}get radius(){return this.uniforms.radius.value}set radius(t){this.uniforms.radius.value=t}setSize(t,e){this.uniforms.texelSize.value.set(1/t,1/e)}},q3=class extends Xn{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new sn(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new Y3,this.upsamplingMaterial=new K3,this.resolution=new ve}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(t){if(this.levels!==t){const e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let n=0;n<t;++n){const i=e.clone();i.texture.name="Downsampling.Mipmap"+n,this.downsamplingMipmaps.push(i)}this.upsamplingMipmaps.push(e);for(let n=1,i=t-1;n<i;++n){const r=e.clone();r.texture.name="Upsampling.Mipmap"+n,this.upsamplingMipmaps.push(r)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(t){this.upsamplingMaterial.radius=t}render(t,e,n,i,r){const{scene:s,camera:a}=this,{downsamplingMaterial:o,upsamplingMaterial:l}=this,{downsamplingMipmaps:c,upsamplingMipmaps:f}=this;let u=e;this.fullscreenMaterial=o;for(let h=0,p=c.length;h<p;++h){const v=c[h];o.setSize(u.width,u.height),o.inputBuffer=u.texture,t.setRenderTarget(v),t.render(s,a),u=v}this.fullscreenMaterial=l;for(let h=f.length-1;h>=0;--h){const p=f[h];l.setSize(u.width,u.height),l.inputBuffer=u.texture,l.supportBuffer=c[h].texture,t.setRenderTarget(p),t.render(s,a),u=p}}setSize(t,e){const n=this.resolution;n.set(t,e);let i=n.width,r=n.height;for(let s=0,a=this.downsamplingMipmaps.length;s<a;++s)i=Math.round(i*.5),r=Math.round(r*.5),this.downsamplingMipmaps[s].setSize(i,r),s<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[s].setSize(i,r)}initialize(t,e,n){if(n!==void 0){const i=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const r of i)r.texture.type=n;if(n!==qt)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(t!==null&&t.outputColorSpace===ct)for(const r of i)r.texture.colorSpace=ct}}dispose(){super.dispose();for(const t of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))t.dispose()}},J3=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 texel=texture2D(map,uv);outputColor=vec4(texel.rgb*intensity,max(inputColor.a,texel.a));}`,Z3=class extends _x{constructor({blendFunction:t=qe.SCREEN,luminanceThreshold:e=1,luminanceSmoothing:n=.03,mipmapBlur:i=!0,intensity:r=1,radius:s=.85,levels:a=8,kernelSize:o=Mh.LARGE,resolutionScale:l=.5,width:c=hi.AUTO_SIZE,height:f=hi.AUTO_SIZE,resolutionX:u=c,resolutionY:h=f}={}){super("BloomEffect",J3,{blendFunction:t,uniforms:new Map([["map",new Ge(null)],["intensity",new Ge(r)]])}),this.renderTarget=new sn(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new k3({kernelSize:o}),this.luminancePass=new V3({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=n,this.mipmapBlurPass=new q3,this.mipmapBlurPass.enabled=i,this.mipmapBlurPass.radius=s,this.mipmapBlurPass.levels=a,this.uniforms.get("map").value=i?this.mipmapBlurPass.texture:this.renderTarget.texture;const p=this.resolution=new hi(this,u,h,l);p.addEventListener("change",v=>this.setSize(p.baseWidth,p.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(t){this.resolution.preferredWidth=t}get height(){return this.resolution.height}set height(t){this.resolution.preferredHeight=t}get dithering(){return this.blurPass.dithering}set dithering(t){this.blurPass.dithering=t}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(t){this.blurPass.kernelSize=t}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(t){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(t){this.uniforms.get("intensity").value=t}getIntensity(){return this.intensity}setIntensity(t){this.intensity=t}getResolutionScale(){return this.resolution.scale}setResolutionScale(t){this.resolution.scale=t}update(t,e,n){const i=this.renderTarget,r=this.luminancePass;r.enabled?(r.render(t,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(t,r.renderTarget):this.blurPass.render(t,r.renderTarget,i)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(t,e):this.blurPass.render(t,e,i)}setSize(t,e){const n=this.resolution;n.setBaseSize(t,e),this.renderTarget.setSize(n.width,n.height),this.blurPass.resolution.copy(n),this.luminancePass.setSize(t,e),this.mipmapBlurPass.setSize(t,e)}initialize(t,e,n){this.blurPass.initialize(t,e,n),this.luminancePass.initialize(t,e,n),this.mipmapBlurPass.initialize(t,e,n),n!==void 0&&(this.renderTarget.texture.type=n,t!==null&&t.outputColorSpace===ct&&(this.renderTarget.texture.colorSpace=ct))}},t0=class extends Xn{constructor(t,e="inputBuffer"){super("ShaderPass"),this.fullscreenMaterial=t,this.input=e}setInput(t){this.input=t}render(t,e,n,i,r){const s=this.fullscreenMaterial.uniforms;e!==null&&s!==void 0&&s[this.input]!==void 0&&(s[this.input].value=e.texture),t.setRenderTarget(this.renderToScreen?null:n),t.render(this.scene,this.camera)}initialize(t,e,n){n!==void 0&&n!==qt&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},$3=class extends Xn{constructor(t,e,n=null){super("RenderPass",t,e),this.needsSwap=!1,this.clearPass=new Eh,this.overrideMaterialManager=n===null?null:new e0(n),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(t){this.scene=t}set mainCamera(t){this.camera=t}get renderToScreen(){return super.renderToScreen}set renderToScreen(t){super.renderToScreen=t,this.clearPass.renderToScreen=t}get overrideMaterial(){const t=this.overrideMaterialManager;return t!==null?t.material:null}set overrideMaterial(t){const e=this.overrideMaterialManager;t!==null?e!==null?e.setMaterial(t):this.overrideMaterialManager=new e0(t):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(t){this.overrideMaterial=t}get clear(){return this.clearPass.enabled}set clear(t){this.clearPass.enabled=t}getSelection(){return this.selection}setSelection(t){this.selection=t}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(t){this.ignoreBackground=t}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(t){this.skipShadowMapUpdate=t}getClearPass(){return this.clearPass}render(t,e,n,i,r){const s=this.scene,a=this.camera,o=this.selection,l=a.layers.mask,c=s.background,f=t.shadowMap.autoUpdate,u=this.renderToScreen?null:e;o!==null&&a.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(t.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(s.background=null),this.clearPass.enabled&&this.clearPass.render(t,e),t.setRenderTarget(u),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(t,s,a):t.render(s,a),a.layers.mask=l,s.background=c,t.shadowMap.autoUpdate=f}},yx={COLOR:2},e2={DISABLED:0},ds={LOW:0,MEDIUM:1,HIGH:2,ULTRA:3},t2=`varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
#if EDGE_DETECTION_MODE == 1
#include <common>
#endif
#if EDGE_DETECTION_MODE == 0 || PREDICATION_MODE == 1
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}vec3 gatherNeighbors(){float p=readDepth(vUv);float pLeft=readDepth(vUv0);float pTop=readDepth(vUv1);return vec3(p,pLeft,pTop);}
#elif PREDICATION_MODE == 2
uniform sampler2D predicationBuffer;vec3 gatherNeighbors(){float p=texture2D(predicationBuffer,vUv).r;float pLeft=texture2D(predicationBuffer,vUv0).r;float pTop=texture2D(predicationBuffer,vUv1).r;return vec3(p,pLeft,pTop);}
#endif
#if PREDICATION_MODE != 0
vec2 calculatePredicatedThreshold(){vec3 neighbours=gatherNeighbors();vec2 delta=abs(neighbours.xx-neighbours.yz);vec2 edges=step(PREDICATION_THRESHOLD,delta);return PREDICATION_SCALE*EDGE_THRESHOLD*(1.0-PREDICATION_STRENGTH*edges);}
#endif
#if EDGE_DETECTION_MODE != 0
uniform sampler2D inputBuffer;
#endif
void main(){
#if EDGE_DETECTION_MODE == 0
const vec2 threshold=vec2(DEPTH_THRESHOLD);
#elif PREDICATION_MODE != 0
vec2 threshold=calculatePredicatedThreshold();
#else
const vec2 threshold=vec2(EDGE_THRESHOLD);
#endif
#if EDGE_DETECTION_MODE == 0
vec3 neighbors=gatherNeighbors();vec2 delta=abs(neighbors.xx-vec2(neighbors.y,neighbors.z));vec2 edges=step(threshold,delta);if(dot(edges,vec2(1.0))==0.0){discard;}gl_FragColor=vec4(edges,0.0,1.0);
#elif EDGE_DETECTION_MODE == 1
float l=luminance(texture2D(inputBuffer,vUv).rgb);float lLeft=luminance(texture2D(inputBuffer,vUv0).rgb);float lTop=luminance(texture2D(inputBuffer,vUv1).rgb);vec4 delta;delta.xy=abs(l-vec2(lLeft,lTop));vec2 edges=step(threshold,delta.xy);if(dot(edges,vec2(1.0))==0.0){discard;}float lRight=luminance(texture2D(inputBuffer,vUv2).rgb);float lBottom=luminance(texture2D(inputBuffer,vUv3).rgb);delta.zw=abs(l-vec2(lRight,lBottom));vec2 maxDelta=max(delta.xy,delta.zw);float lLeftLeft=luminance(texture2D(inputBuffer,vUv4).rgb);float lTopTop=luminance(texture2D(inputBuffer,vUv5).rgb);delta.zw=abs(vec2(lLeft,lTop)-vec2(lLeftLeft,lTopTop));maxDelta=max(maxDelta.xy,delta.zw);float finalDelta=max(maxDelta.x,maxDelta.y);edges.xy*=step(finalDelta,LOCAL_CONTRAST_ADAPTATION_FACTOR*delta.xy);gl_FragColor=vec4(edges,0.0,1.0);
#elif EDGE_DETECTION_MODE == 2
vec4 delta;vec3 c=texture2D(inputBuffer,vUv).rgb;vec3 cLeft=texture2D(inputBuffer,vUv0).rgb;vec3 t=abs(c-cLeft);delta.x=max(max(t.r,t.g),t.b);vec3 cTop=texture2D(inputBuffer,vUv1).rgb;t=abs(c-cTop);delta.y=max(max(t.r,t.g),t.b);vec2 edges=step(threshold,delta.xy);if(dot(edges,vec2(1.0))==0.0){discard;}vec3 cRight=texture2D(inputBuffer,vUv2).rgb;t=abs(c-cRight);delta.z=max(max(t.r,t.g),t.b);vec3 cBottom=texture2D(inputBuffer,vUv3).rgb;t=abs(c-cBottom);delta.w=max(max(t.r,t.g),t.b);vec2 maxDelta=max(delta.xy,delta.zw);vec3 cLeftLeft=texture2D(inputBuffer,vUv4).rgb;t=abs(c-cLeftLeft);delta.z=max(max(t.r,t.g),t.b);vec3 cTopTop=texture2D(inputBuffer,vUv5).rgb;t=abs(c-cTopTop);delta.w=max(max(t.r,t.g),t.b);maxDelta=max(maxDelta.xy,delta.zw);float finalDelta=max(maxDelta.x,maxDelta.y);edges*=step(finalDelta,LOCAL_CONTRAST_ADAPTATION_FACTOR*delta.xy);gl_FragColor=vec4(edges,0.0,1.0);
#endif
}`,n2=`uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,0.0);vUv1=vUv+texelSize*vec2(0.0,-1.0);
#if EDGE_DETECTION_MODE != 0
vUv2=vUv+texelSize*vec2(1.0,0.0);vUv3=vUv+texelSize*vec2(0.0,1.0);vUv4=vUv+texelSize*vec2(-2.0,0.0);vUv5=vUv+texelSize*vec2(0.0,-2.0);
#endif
gl_Position=vec4(position.xy,1.0,1.0);}`,i2=class extends Pt{constructor(t=new ve,e=yx.COLOR){super({name:"EdgeDetectionMaterial",defines:{THREE_REVISION:Js.replace(/\D+/g,""),LOCAL_CONTRAST_ADAPTATION_FACTOR:"2.0",EDGE_THRESHOLD:"0.1",DEPTH_THRESHOLD:"0.01",PREDICATION_MODE:"0",PREDICATION_THRESHOLD:"0.01",PREDICATION_SCALE:"2.0",PREDICATION_STRENGTH:"1.0",DEPTH_PACKING:"0"},uniforms:{inputBuffer:new Ge(null),depthBuffer:new Ge(null),predicationBuffer:new Ge(null),texelSize:new Ge(t)},blending:Qt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:t2,vertexShader:n2}),this.edgeDetectionMode=e}set depthBuffer(t){this.uniforms.depthBuffer.value=t}set depthPacking(t){this.defines.DEPTH_PACKING=t.toFixed(0),this.needsUpdate=!0}setDepthBuffer(t,e=Qr){this.depthBuffer=t,this.depthPacking=e}get edgeDetectionMode(){return Number(this.defines.EDGE_DETECTION_MODE)}set edgeDetectionMode(t){this.defines.EDGE_DETECTION_MODE=t.toFixed(0),this.needsUpdate=!0}getEdgeDetectionMode(){return this.edgeDetectionMode}setEdgeDetectionMode(t){this.edgeDetectionMode=t}get localContrastAdaptationFactor(){return Number(this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR)}set localContrastAdaptationFactor(t){this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR=t.toFixed("6"),this.needsUpdate=!0}getLocalContrastAdaptationFactor(){return this.localContrastAdaptationFactor}setLocalContrastAdaptationFactor(t){this.localContrastAdaptationFactor=t}get edgeDetectionThreshold(){return Number(this.defines.EDGE_THRESHOLD)}set edgeDetectionThreshold(t){this.defines.EDGE_THRESHOLD=t.toFixed("6"),this.defines.DEPTH_THRESHOLD=(t*.1).toFixed("6"),this.needsUpdate=!0}getEdgeDetectionThreshold(){return this.edgeDetectionThreshold}setEdgeDetectionThreshold(t){this.edgeDetectionThreshold=t}get predicationMode(){return Number(this.defines.PREDICATION_MODE)}set predicationMode(t){this.defines.PREDICATION_MODE=t.toFixed(0),this.needsUpdate=!0}getPredicationMode(){return this.predicationMode}setPredicationMode(t){this.predicationMode=t}set predicationBuffer(t){this.uniforms.predicationBuffer.value=t}setPredicationBuffer(t){this.uniforms.predicationBuffer.value=t}get predicationThreshold(){return Number(this.defines.PREDICATION_THRESHOLD)}set predicationThreshold(t){this.defines.PREDICATION_THRESHOLD=t.toFixed("6"),this.needsUpdate=!0}getPredicationThreshold(){return this.predicationThreshold}setPredicationThreshold(t){this.predicationThreshold=t}get predicationScale(){return Number(this.defines.PREDICATION_SCALE)}set predicationScale(t){this.defines.PREDICATION_SCALE=t.toFixed("6"),this.needsUpdate=!0}getPredicationScale(){return this.predicationScale}setPredicationScale(t){this.predicationScale=t}get predicationStrength(){return Number(this.defines.PREDICATION_STRENGTH)}set predicationStrength(t){this.defines.PREDICATION_STRENGTH=t.toFixed("6"),this.needsUpdate=!0}getPredicationStrength(){return this.predicationStrength}setPredicationStrength(t){this.predicationStrength=t}setSize(t,e){this.uniforms.texelSize.value.set(1/t,1/e)}},r2=`#define sampleLevelZeroOffset(t, coord, offset) texture2D(t, coord + offset * texelSize)
#if __VERSION__ < 300
#define round(v) floor(v + 0.5)
#endif
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform lowp sampler2D areaTexture;uniform lowp sampler2D searchTexture;uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}vec2 decodeDiagBilinearAccess(in vec2 e){e.r=e.r*abs(5.0*e.r-5.0*0.75);return round(e);}vec4 decodeDiagBilinearAccess(in vec4 e){e.rb=e.rb*abs(5.0*e.rb-5.0*0.75);return round(e);}vec2 searchDiag1(const in vec2 texCoord,const in vec2 dir,out vec2 e){vec4 coord=vec4(texCoord,-1.0,1.0);vec3 t=vec3(texelSize,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(coord.z<float(MAX_SEARCH_STEPS_DIAG_INT-1)&&coord.w>0.9)){break;}coord.xyz=t*vec3(dir,1.0)+coord.xyz;e=texture2D(inputBuffer,coord.xy).rg;coord.w=dot(e,vec2(0.5));}return coord.zw;}vec2 searchDiag2(const in vec2 texCoord,const in vec2 dir,out vec2 e){vec4 coord=vec4(texCoord,-1.0,1.0);coord.x+=0.25*texelSize.x;vec3 t=vec3(texelSize,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(coord.z<float(MAX_SEARCH_STEPS_DIAG_INT-1)&&coord.w>0.9)){break;}coord.xyz=t*vec3(dir,1.0)+coord.xyz;e=texture2D(inputBuffer,coord.xy).rg;e=decodeDiagBilinearAccess(e);coord.w=dot(e,vec2(0.5));}return coord.zw;}vec2 areaDiag(const in vec2 dist,const in vec2 e,const in float offset){vec2 texCoord=vec2(AREATEX_MAX_DISTANCE_DIAG,AREATEX_MAX_DISTANCE_DIAG)*e+dist;texCoord=AREATEX_PIXEL_SIZE*texCoord+0.5*AREATEX_PIXEL_SIZE;texCoord.x+=0.5;texCoord.y+=AREATEX_SUBTEX_SIZE*offset;return texture2D(areaTexture,texCoord).rg;}vec2 calculateDiagWeights(const in vec2 texCoord,const in vec2 e,const in vec4 subsampleIndices){vec2 weights=vec2(0.0);vec4 d;vec2 end;if(e.r>0.0){d.xz=searchDiag1(texCoord,vec2(-1.0,1.0),end);d.x+=float(end.y>0.9);}else{d.xz=vec2(0.0);}d.yw=searchDiag1(texCoord,vec2(1.0,-1.0),end);if(d.x+d.y>2.0){vec4 coords=vec4(-d.x+0.25,d.x,d.y,-d.y-0.25)*texelSize.xyxy+texCoord.xyxy;vec4 c;c.xy=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(-1,0)).rg;c.zw=sampleLevelZeroOffset(inputBuffer,coords.zw,vec2(1,0)).rg;c.yxwz=decodeDiagBilinearAccess(c.xyzw);vec2 cc=vec2(2.0)*c.xz+c.yw;movec(bvec2(step(0.9,d.zw)),cc,vec2(0.0));weights+=areaDiag(d.xy,cc,subsampleIndices.z);}d.xz=searchDiag2(texCoord,vec2(-1.0,-1.0),end);if(sampleLevelZeroOffset(inputBuffer,texCoord,vec2(1,0)).r>0.0){d.yw=searchDiag2(texCoord,vec2(1.0),end);d.y+=float(end.y>0.9);}else{d.yw=vec2(0.0);}if(d.x+d.y>2.0){vec4 coords=vec4(-d.x,-d.x,d.y,d.y)*texelSize.xyxy+texCoord.xyxy;vec4 c;c.x=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(-1,0)).g;c.y=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(0,-1)).r;c.zw=sampleLevelZeroOffset(inputBuffer,coords.zw,vec2(1,0)).gr;vec2 cc=vec2(2.0)*c.xz+c.yw;movec(bvec2(step(0.9,d.zw)),cc,vec2(0.0));weights+=areaDiag(d.xy,cc,subsampleIndices.w).gr;}return weights;}float searchLength(const in vec2 e,const in float offset){vec2 scale=SEARCHTEX_SIZE*vec2(0.5,-1.0);vec2 bias=SEARCHTEX_SIZE*vec2(offset,1.0);scale+=vec2(-1.0,1.0);bias+=vec2(0.5,-0.5);scale*=1.0/SEARCHTEX_PACKED_SIZE;bias*=1.0/SEARCHTEX_PACKED_SIZE;return texture2D(searchTexture,scale*e+bias).r;}float searchXLeft(in vec2 texCoord,const in float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.x>end&&e.g>0.8281&&e.r==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(-2.0,0.0)*texelSize+texCoord;}float offset=-(255.0/127.0)*searchLength(e,0.0)+3.25;return texelSize.x*offset+texCoord.x;}float searchXRight(vec2 texCoord,const in float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.x<end&&e.g>0.8281&&e.r==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(2.0,0.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e,0.5)+3.25;return-texelSize.x*offset+texCoord.x;}float searchYUp(vec2 texCoord,const in float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.y>end&&e.r>0.8281&&e.g==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=-vec2(0.0,2.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e.gr,0.0)+3.25;return texelSize.y*offset+texCoord.y;}float searchYDown(vec2 texCoord,const in float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;i++){if(!(texCoord.y<end&&e.r>0.8281&&e.g==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(0.0,2.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e.gr,0.5)+3.25;return-texelSize.y*offset+texCoord.y;}vec2 area(const in vec2 dist,const in float e1,const in float e2,const in float offset){vec2 texCoord=vec2(AREATEX_MAX_DISTANCE)*round(4.0*vec2(e1,e2))+dist;texCoord=AREATEX_PIXEL_SIZE*texCoord+0.5*AREATEX_PIXEL_SIZE;texCoord.y=AREATEX_SUBTEX_SIZE*offset+texCoord.y;return texture2D(areaTexture,texCoord).rg;}void detectHorizontalCornerPattern(inout vec2 weights,const in vec4 texCoord,const in vec2 d){
#if !defined(DISABLE_CORNER_DETECTION)
vec2 leftRight=step(d.xy,d.yx);vec2 rounding=(1.0-CORNER_ROUNDING_NORM)*leftRight;rounding/=leftRight.x+leftRight.y;vec2 factor=vec2(1.0);factor.x-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(0,1)).r;factor.x-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,1)).r;factor.y-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(0,-2)).r;factor.y-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,-2)).r;weights*=clamp(factor,0.0,1.0);
#endif
}void detectVerticalCornerPattern(inout vec2 weights,const in vec4 texCoord,const in vec2 d){
#if !defined(DISABLE_CORNER_DETECTION)
vec2 leftRight=step(d.xy,d.yx);vec2 rounding=(1.0-CORNER_ROUNDING_NORM)*leftRight;rounding/=leftRight.x+leftRight.y;vec2 factor=vec2(1.0);factor.x-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(1,0)).g;factor.x-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,1)).g;factor.y-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(-2,0)).g;factor.y-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(-2,1)).g;weights*=clamp(factor,0.0,1.0);
#endif
}void main(){vec4 weights=vec4(0.0);vec4 subsampleIndices=vec4(0.0);vec2 e=texture2D(inputBuffer,vUv).rg;if(e.g>0.0){
#if !defined(DISABLE_DIAG_DETECTION)
weights.rg=calculateDiagWeights(vUv,e,subsampleIndices);if(weights.r==-weights.g){
#endif
vec2 d;vec3 coords;coords.x=searchXLeft(vOffset[0].xy,vOffset[2].x);coords.y=vOffset[1].y;d.x=coords.x;float e1=texture2D(inputBuffer,coords.xy).r;coords.z=searchXRight(vOffset[0].zw,vOffset[2].y);d.y=coords.z;d=round(resolution.xx*d+-vPixCoord.xx);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.zy,vec2(1,0)).r;weights.rg=area(sqrtD,e1,e2,subsampleIndices.y);coords.y=vUv.y;detectHorizontalCornerPattern(weights.rg,coords.xyzy,d);
#if !defined(DISABLE_DIAG_DETECTION)
}else{e.r=0.0;}
#endif
}if(e.r>0.0){vec2 d;vec3 coords;coords.y=searchYUp(vOffset[1].xy,vOffset[2].z);coords.x=vOffset[0].x;d.x=coords.y;float e1=texture2D(inputBuffer,coords.xy).g;coords.z=searchYDown(vOffset[1].zw,vOffset[2].w);d.y=coords.z;d=round(resolution.yy*d-vPixCoord.yy);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.xz,vec2(0,1)).g;weights.ba=area(sqrtD,e1,e2,subsampleIndices.x);coords.x=vUv.x;detectVerticalCornerPattern(weights.ba,coords.xyxz,d);}gl_FragColor=weights;}`,s2="uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void main(){vUv=position.xy*0.5+0.5;vPixCoord=vUv*resolution;vOffset[0]=vUv.xyxy+texelSize.xyxy*vec4(-0.25,-0.125,1.25,-0.125);vOffset[1]=vUv.xyxy+texelSize.xyxy*vec4(-0.125,-0.25,-0.125,1.25);vOffset[2]=vec4(vOffset[0].xz,vOffset[1].yw)+vec4(-2.0,2.0,-2.0,2.0)*texelSize.xxyy*MAX_SEARCH_STEPS_FLOAT;gl_Position=vec4(position.xy,1.0,1.0);}",a2=class extends Pt{constructor(t=new ve,e=new ve){super({name:"SMAAWeightsMaterial",defines:{MAX_SEARCH_STEPS_INT:"16",MAX_SEARCH_STEPS_FLOAT:"16.0",MAX_SEARCH_STEPS_DIAG_INT:"8",MAX_SEARCH_STEPS_DIAG_FLOAT:"8.0",CORNER_ROUNDING:"25",CORNER_ROUNDING_NORM:"0.25",AREATEX_MAX_DISTANCE:"16.0",AREATEX_MAX_DISTANCE_DIAG:"20.0",AREATEX_PIXEL_SIZE:"(1.0 / vec2(160.0, 560.0))",AREATEX_SUBTEX_SIZE:"(1.0 / 7.0)",SEARCHTEX_SIZE:"vec2(66.0, 33.0)",SEARCHTEX_PACKED_SIZE:"vec2(64.0, 16.0)"},uniforms:{inputBuffer:new Ge(null),searchTexture:new Ge(null),areaTexture:new Ge(null),resolution:new Ge(e),texelSize:new Ge(t)},blending:Qt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:r2,vertexShader:s2})}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setInputBuffer(t){this.uniforms.inputBuffer.value=t}get searchTexture(){return this.uniforms.searchTexture.value}set searchTexture(t){this.uniforms.searchTexture.value=t}get areaTexture(){return this.uniforms.areaTexture.value}set areaTexture(t){this.uniforms.areaTexture.value=t}setLookupTextures(t,e){this.searchTexture=t,this.areaTexture=e}get orthogonalSearchSteps(){return Number(this.defines.MAX_SEARCH_STEPS_INT)}set orthogonalSearchSteps(t){const e=Math.min(Math.max(t,0),112);this.defines.MAX_SEARCH_STEPS_INT=e.toFixed("0"),this.defines.MAX_SEARCH_STEPS_FLOAT=e.toFixed("1"),this.needsUpdate=!0}setOrthogonalSearchSteps(t){this.orthogonalSearchSteps=t}get diagonalSearchSteps(){return Number(this.defines.MAX_SEARCH_STEPS_DIAG_INT)}set diagonalSearchSteps(t){const e=Math.min(Math.max(t,0),20);this.defines.MAX_SEARCH_STEPS_DIAG_INT=e.toFixed("0"),this.defines.MAX_SEARCH_STEPS_DIAG_FLOAT=e.toFixed("1"),this.needsUpdate=!0}setDiagonalSearchSteps(t){this.diagonalSearchSteps=t}get diagonalDetection(){return this.defines.DISABLE_DIAG_DETECTION===void 0}set diagonalDetection(t){t?delete this.defines.DISABLE_DIAG_DETECTION:this.defines.DISABLE_DIAG_DETECTION="1",this.needsUpdate=!0}isDiagonalDetectionEnabled(){return this.diagonalDetection}setDiagonalDetectionEnabled(t){this.diagonalDetection=t}get cornerRounding(){return Number(this.defines.CORNER_ROUNDING)}set cornerRounding(t){const e=Math.min(Math.max(t,0),100);this.defines.CORNER_ROUNDING=e.toFixed("4"),this.defines.CORNER_ROUNDING_NORM=(e/100).toFixed("4"),this.needsUpdate=!0}setCornerRounding(t){this.cornerRounding=t}get cornerDetection(){return this.defines.DISABLE_CORNER_DETECTION===void 0}set cornerDetection(t){t?delete this.defines.DISABLE_CORNER_DETECTION:this.defines.DISABLE_CORNER_DETECTION="1",this.needsUpdate=!0}isCornerRoundingEnabled(){return this.cornerDetection}setCornerRoundingEnabled(t){this.cornerDetection=t}setSize(t,e){const n=this.uniforms;n.texelSize.value.set(1/t,1/e),n.resolution.value.set(t,e)}},n0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAYAAACm53kpAAAAeElEQVRYR+2XSwqAMAxEJ168ePEqwRSKhIIiuHjJqiU0gWE+1CQdApcVAMUAuARaMGCX1MIL/Ow13++9lW2s3mW9MWvsnWc/2fvGygwPAN4E8QzAA4CXAB6AHjG4JTHYI1ey3pcx6FHnEfhLDOIBKAmUBK6/ANUDTlROXAHd9EC1AAAAAElFTkSuQmCC",i0="data:image/png;base64,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",o2="uniform sampler2D weightMap;varying vec2 vOffset0;varying vec2 vOffset1;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 a;a.x=texture2D(weightMap,vOffset0).a;a.y=texture2D(weightMap,vOffset1).g;a.wz=texture2D(weightMap,uv).rb;vec4 color=inputColor;if(dot(a,vec4(1.0))>=1e-5){bool h=max(a.x,a.z)>max(a.y,a.w);vec4 blendingOffset=vec4(0.0,a.y,0.0,a.w);vec2 blendingWeight=a.yw;movec(bvec4(h),blendingOffset,vec4(a.x,0.0,a.z,0.0));movec(bvec2(h),blendingWeight,a.xz);blendingWeight/=dot(blendingWeight,vec2(1.0));vec4 blendingCoord=blendingOffset*vec4(texelSize,-texelSize)+uv.xyxy;color=blendingWeight.x*texture2D(inputBuffer,blendingCoord.xy);color+=blendingWeight.y*texture2D(inputBuffer,blendingCoord.zw);}outputColor=color;}",l2="varying vec2 vOffset0;varying vec2 vOffset1;void mainSupport(const in vec2 uv){vOffset0=uv+texelSize*vec2(1.0,0.0);vOffset1=uv+texelSize*vec2(0.0,1.0);}",c2=class extends _x{constructor({blendFunction:t=qe.SRC,preset:e=ds.MEDIUM,edgeDetectionMode:n=yx.COLOR,predicationMode:i=e2.DISABLED}={}){super("SMAAEffect",o2,{vertexShader:l2,blendFunction:t,attributes:Ii.CONVOLUTION|Ii.DEPTH,uniforms:new Map([["weightMap",new Ge(null)]])});let r,s;arguments.length>1&&(r=arguments[0],s=arguments[1],arguments.length>2&&(e=arguments[2]),arguments.length>3&&(n=arguments[3])),this.renderTargetEdges=new sn(1,1,{depthBuffer:!1}),this.renderTargetEdges.texture.name="SMAA.Edges",this.renderTargetWeights=this.renderTargetEdges.clone(),this.renderTargetWeights.texture.name="SMAA.Weights",this.uniforms.get("weightMap").value=this.renderTargetWeights.texture,this.clearPass=new Eh(!0,!1,!1),this.clearPass.overrideClearColor=new Je(0),this.clearPass.overrideClearAlpha=1,this.edgeDetectionPass=new t0(new i2),this.edgeDetectionMaterial.edgeDetectionMode=n,this.edgeDetectionMaterial.predicationMode=i,this.weightsPass=new t0(new a2);const a=new rM;a.onLoad=()=>{const o=new Ft(r);o.name="SMAA.Search",o.magFilter=fn,o.minFilter=fn,o.generateMipmaps=!1,o.needsUpdate=!0,o.flipY=!0,this.weightsMaterial.searchTexture=o;const l=new Ft(s);l.name="SMAA.Area",l.magFilter=Vt,l.minFilter=Vt,l.generateMipmaps=!1,l.needsUpdate=!0,l.flipY=!1,this.weightsMaterial.areaTexture=l,this.dispatchEvent({type:"load"})},a.itemStart("search"),a.itemStart("area"),r!==void 0&&s!==void 0?(a.itemEnd("search"),a.itemEnd("area")):typeof Image<"u"&&(r=new Image,s=new Image,r.addEventListener("load",()=>a.itemEnd("search")),s.addEventListener("load",()=>a.itemEnd("area")),r.src=n0,s.src=i0),this.applyPreset(e)}get edgesTexture(){return this.renderTargetEdges.texture}getEdgesTexture(){return this.edgesTexture}get weightsTexture(){return this.renderTargetWeights.texture}getWeightsTexture(){return this.weightsTexture}get edgeDetectionMaterial(){return this.edgeDetectionPass.fullscreenMaterial}get colorEdgesMaterial(){return this.edgeDetectionMaterial}getEdgeDetectionMaterial(){return this.edgeDetectionMaterial}get weightsMaterial(){return this.weightsPass.fullscreenMaterial}getWeightsMaterial(){return this.weightsMaterial}setEdgeDetectionThreshold(t){this.edgeDetectionMaterial.edgeDetectionThreshold=t}setOrthogonalSearchSteps(t){this.weightsMaterial.orthogonalSearchSteps=t}applyPreset(t){const e=this.edgeDetectionMaterial,n=this.weightsMaterial;switch(t){case ds.LOW:e.edgeDetectionThreshold=.15,n.orthogonalSearchSteps=4,n.diagonalDetection=!1,n.cornerDetection=!1;break;case ds.MEDIUM:e.edgeDetectionThreshold=.1,n.orthogonalSearchSteps=8,n.diagonalDetection=!1,n.cornerDetection=!1;break;case ds.HIGH:e.edgeDetectionThreshold=.1,n.orthogonalSearchSteps=16,n.diagonalSearchSteps=8,n.cornerRounding=25,n.diagonalDetection=!0,n.cornerDetection=!0;break;case ds.ULTRA:e.edgeDetectionThreshold=.05,n.orthogonalSearchSteps=32,n.diagonalSearchSteps=16,n.cornerRounding=25,n.diagonalDetection=!0,n.cornerDetection=!0;break}}setDepthTexture(t,e=Qr){this.edgeDetectionMaterial.depthBuffer=t,this.edgeDetectionMaterial.depthPacking=e}update(t,e,n){this.clearPass.render(t,this.renderTargetEdges),this.edgeDetectionPass.render(t,e,this.renderTargetEdges),this.weightsPass.render(t,this.renderTargetEdges,this.renderTargetWeights)}setSize(t,e){this.edgeDetectionMaterial.setSize(t,e),this.weightsMaterial.setSize(t,e),this.renderTargetEdges.setSize(t,e),this.renderTargetWeights.setSize(t,e)}dispose(){const{searchTexture:t,areaTexture:e}=this.weightsMaterial;t!==null&&e!==null&&(t.dispose(),e.dispose()),super.dispose()}static get searchImageDataURL(){return n0}static get areaImageDataURL(){return i0}},u2=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,f2="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",d2=class extends Pt{constructor(t,e,n,i,r=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:Js.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new Ge(null),depthBuffer:new Ge(null),resolution:new Ge(new ve),texelSize:new Ge(new ve),cameraNear:new Ge(.3),cameraFar:new Ge(1e3),aspect:new Ge(1),time:new Ge(0)},blending:Qt,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:r}),t&&this.setShaderParts(t),e&&this.setDefines(e),n&&this.setUniforms(n),this.copyCameraSettings(i)}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setInputBuffer(t){this.uniforms.inputBuffer.value=t}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(t){this.uniforms.depthBuffer.value=t}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(t){this.defines.DEPTH_PACKING=t.toFixed(0),this.needsUpdate=!0}setDepthBuffer(t,e=Qr){this.depthBuffer=t,this.depthPacking=e}setShaderData(t){this.setShaderParts(t.shaderParts),this.setDefines(t.defines),this.setUniforms(t.uniforms),this.setExtensions(t.extensions)}setShaderParts(t){return this.fragmentShader=u2.replace(it.FRAGMENT_HEAD,t.get(it.FRAGMENT_HEAD)||"").replace(it.FRAGMENT_MAIN_UV,t.get(it.FRAGMENT_MAIN_UV)||"").replace(it.FRAGMENT_MAIN_IMAGE,t.get(it.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=f2.replace(it.VERTEX_HEAD,t.get(it.VERTEX_HEAD)||"").replace(it.VERTEX_MAIN_SUPPORT,t.get(it.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(t){for(const e of t.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(t){for(const e of t.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(t){this.extensions={};for(const e of t)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(t){this.encodeOutput!==t&&(t?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(t){return this.encodeOutput}setOutputEncodingEnabled(t){this.encodeOutput=t}get time(){return this.uniforms.time.value}set time(t){this.uniforms.time.value=t}setDeltaTime(t){this.uniforms.time.value+=t}adoptCameraSettings(t){this.copyCameraSettings(t)}copyCameraSettings(t){t&&(this.uniforms.cameraNear.value=t.near,this.uniforms.cameraFar.value=t.far,t instanceof bn?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(t,e){const n=this.uniforms;n.resolution.value.set(t,e),n.texelSize.value.set(1/t,1/e),n.aspect.value=t/e}static get Section(){return it}};function r0(t,e,n){for(const i of e){const r="$1"+t+i.charAt(0).toUpperCase()+i.slice(1),s=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(const a of n.entries())a[1]!==null&&n.set(a[0],a[1].replace(s,r))}}function h2(t,e,n){let i=e.getFragmentShader(),r=e.getVertexShader();const s=i!==void 0&&/mainImage/.test(i),a=i!==void 0&&/mainUv/.test(i);if(n.attributes|=e.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(a&&n.attributes&Ii.CONVOLUTION)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!s&&!a)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const o=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,l=n.shaderParts;let c=l.get(it.FRAGMENT_HEAD)||"",f=l.get(it.FRAGMENT_MAIN_UV)||"",u=l.get(it.FRAGMENT_MAIN_IMAGE)||"",h=l.get(it.VERTEX_HEAD)||"",p=l.get(it.VERTEX_MAIN_SUPPORT)||"";const v=new Set,_=new Set;if(a&&(f+=`	${t}MainUv(UV);
`,n.uvTransformation=!0),r!==null&&/mainSupport/.test(r)){const g=/mainSupport *\([\w\s]*?uv\s*?\)/.test(r);p+=`	${t}MainSupport(`,p+=g?`vUv);
`:`);
`;for(const x of r.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const S of x[1].split(/\s*,\s*/))n.varyings.add(S),v.add(S),_.add(S);for(const x of r.matchAll(o))_.add(x[1])}for(const g of i.matchAll(o))_.add(g[1]);for(const g of e.defines.keys())_.add(g.replace(/\([\w\s,]*\)/g,""));for(const g of e.uniforms.keys())_.add(g);_.delete("while"),_.delete("for"),_.delete("if"),e.uniforms.forEach((g,x)=>n.uniforms.set(t+x.charAt(0).toUpperCase()+x.slice(1),g)),e.defines.forEach((g,x)=>n.defines.set(t+x.charAt(0).toUpperCase()+x.slice(1),g));const m=new Map([["fragment",i],["vertex",r]]);r0(t,_,n.defines),r0(t,_,m),i=m.get("fragment"),r=m.get("vertex");const d=e.blendMode;if(n.blendModes.set(d.blendFunction,d),s){e.inputColorSpace!==null&&e.inputColorSpace!==n.colorSpace&&(u+=e.inputColorSpace===ct?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==fi?n.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(n.colorSpace=e.inputColorSpace);const g=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;u+=`${t}MainImage(color0, UV, `,n.attributes&Ii.DEPTH&&g.test(i)&&(u+="depth, ",n.readDepth=!0),u+=`color1);
	`;const x=t+"BlendOpacity";n.uniforms.set(x,d.opacity),u+=`color0 = blend${d.blendFunction}(color0, color1, ${x});

	`,c+=`uniform float ${x};

`}if(c+=i+`
`,r!==null&&(h+=r+`
`),l.set(it.FRAGMENT_HEAD,c),l.set(it.FRAGMENT_MAIN_UV,f),l.set(it.FRAGMENT_MAIN_IMAGE,u),l.set(it.VERTEX_HEAD,h),l.set(it.VERTEX_MAIN_SUPPORT,p),e.extensions!==null)for(const g of e.extensions)n.extensions.add(g)}}var s0=class extends Xn{constructor(t,...e){super("EffectPass"),this.fullscreenMaterial=new d2(null,null,null,t),this.listener=n=>this.handleEvent(n),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(t){for(const e of this.effects)e.mainScene=t}set mainCamera(t){this.fullscreenMaterial.copyCameraSettings(t);for(const e of this.effects)e.mainCamera=t}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(t){this.fullscreenMaterial.encodeOutput=t}get dithering(){return this.fullscreenMaterial.dithering}set dithering(t){const e=this.fullscreenMaterial;e.dithering=t,e.needsUpdate=!0}setEffects(t){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=t.sort((e,n)=>n.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const t=new n3;let e=0;for(const a of this.effects)if(a.blendMode.blendFunction===qe.DST)t.attributes|=a.getAttributes()&Ii.DEPTH;else{if(t.attributes&a.getAttributes()&Ii.CONVOLUTION)throw new Error(`Convolution effects cannot be merged (${a.name})`);h2("e"+e++,a,t)}let n=t.shaderParts.get(it.FRAGMENT_HEAD),i=t.shaderParts.get(it.FRAGMENT_MAIN_IMAGE),r=t.shaderParts.get(it.FRAGMENT_MAIN_UV);const s=/\bblend\b/g;for(const a of t.blendModes.values())n+=a.getShaderCode().replace(s,`blend${a.blendFunction}`)+`
`;t.attributes&Ii.DEPTH?(t.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,t.colorSpace===ct&&(i+=`color0 = sRGBToLinear(color0);
	`),t.uvTransformation?(r=`vec2 transformedUv = vUv;
`+r,t.defines.set("UV","transformedUv")):t.defines.set("UV","vUv"),t.shaderParts.set(it.FRAGMENT_HEAD,n),t.shaderParts.set(it.FRAGMENT_MAIN_IMAGE,i),t.shaderParts.set(it.FRAGMENT_MAIN_UV,r);for(const[a,o]of t.shaderParts)o!==null&&t.shaderParts.set(a,o.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(t)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(t,e=Qr){this.fullscreenMaterial.depthBuffer=t,this.fullscreenMaterial.depthPacking=e;for(const n of this.effects)n.setDepthTexture(t,e)}render(t,e,n,i,r){for(const s of this.effects)s.update(t,e,i);if(!this.skipRendering||this.renderToScreen){const s=this.fullscreenMaterial;s.inputBuffer=e.texture,s.time+=i*this.timeScale,t.setRenderTarget(this.renderToScreen?null:n),t.render(this.scene,this.camera)}}setSize(t,e){this.fullscreenMaterial.setSize(t,e);for(const n of this.effects)n.setSize(t,e)}initialize(t,e,n){this.renderer=t;for(const i of this.effects)i.initialize(t,e,n);this.updateMaterial(),n!==void 0&&n!==qt&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const t of this.effects)t.removeEventListener("change",this.listener),t.dispose()}handleEvent(t){switch(t.type){case"change":this.recompile();break}}};const p2={onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"turbulentDistortion",length:400,roadWidth:10,islandWidth:2,lanesPerRoad:3,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:50,lightPairsPerRoadWay:50,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.05,400*.15],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.2,.2],carFloorSeparation:[.05,1],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:1250072,brokenLines:1250072,leftCars:[14177983,6770850,12732332],rightCars:[242627,941733,3294549],sticks:242627}};function a0(t){return Math.sin(t)*.5+.5}const Tu={uFreq:{value:new mt(4,8,8,1)},uAmp:{value:new mt(25,5,10,10)}},Ax={turbulentDistortion:{uniforms:Tu,getDistortion:`
      uniform vec4 uFreq;
      uniform vec4 uAmp;
      float nsin(float val){
        return sin(val) * 0.5 + 0.5;
      }
      #define PI 3.14159265358979
      float getDistortionX(float progress){
        return (
          cos(PI * progress * uFreq.r + uTime) * uAmp.r +
          pow(cos(PI * progress * uFreq.g + uTime * (uFreq.g / uFreq.r)), 2. ) * uAmp.g
        );
      }
      float getDistortionY(float progress){
        return (
          -nsin(PI * progress * uFreq.b + uTime) * uAmp.b +
          -pow(nsin(PI * progress * uFreq.a + uTime / (uFreq.b / uFreq.a)), 5.) * uAmp.a
        );
      }
      vec3 getDistortion(float progress){
        return vec3(
          getDistortionX(progress) - getDistortionX(0.0125),
          getDistortionY(progress) - getDistortionY(0.0125),
          0.
        );
      }
    `,getJS:(t,e)=>{const n=Tu.uFreq.value,i=Tu.uAmp.value,r=c=>Math.cos(Math.PI*c*n.x+e)*i.x+Math.pow(Math.cos(Math.PI*c*n.y+e*(n.y/n.x)),2)*i.y,s=c=>-a0(Math.PI*c*n.z+e)*i.z-Math.pow(a0(Math.PI*c*n.w+e/(n.z/n.w)),5)*i.w,a=new F(r(t)-r(t+.007),s(t)-s(t+.007),0),o=new F(-2,-5,0),l=new F(0,0,-10);return a.multiply(o).add(l)}}};function Mi(t){return Array.isArray(t)?Math.random()*(t[1]-t[0])+t[0]:Math.random()*t}function Sx(t){return Array.isArray(t)?t[Math.floor(Math.random()*t.length)]:t}function o0(t,e,n=.1,i=.001){let r=(e-t)*n;return Math.abs(r)<i&&(r=e-t),r}class l0{constructor(e,n,i,r,s){ke(this,"webgl");ke(this,"options");ke(this,"colors");ke(this,"speed");ke(this,"fade");ke(this,"mesh");this.webgl=e,this.options=n,this.colors=i,this.speed=r,this.fade=s}init(){const e=this.options,n=new lx(new F(0,0,0),new F(0,0,-1)),i=new Sh(n,40,1,8,!1),r=new fx().copy(i);r.instanceCount=e.lightPairsPerRoadWay*2;const s=e.roadWidth/e.lanesPerRoad,a=[],o=[],l=[];let c;Array.isArray(this.colors)?c=this.colors.map(h=>new Je(h)):c=[new Je(this.colors)];for(let h=0;h<e.lightPairsPerRoadWay;h++){const p=Mi(e.carLightsRadius),v=Mi(e.carLightsLength),_=Mi(this.speed);let d=h%e.lanesPerRoad*s-e.roadWidth/2+s/2;const g=Mi(e.carWidthPercentage)*s,x=Mi(e.carShiftX)*s;d+=x;const S=Mi(e.carFloorSeparation)+p*1.3,C=-Mi(e.length);a.push(d-g/2,S,C),a.push(d+g/2,S,C),o.push(p,v,_),o.push(p,v,_);const M=Sx(c);l.push(M.r,M.g,M.b),l.push(M.r,M.g,M.b)}r.setAttribute("aOffset",new Ls(new Float32Array(a),3,!1)),r.setAttribute("aMetrics",new Ls(new Float32Array(o),3,!1)),r.setAttribute("aColor",new Ls(new Float32Array(l),3,!1));const f=new Pt({fragmentShader:`
        #define USE_FOG;
        ${be.fog_pars_fragment}
        varying vec3 vColor;
        varying vec2 vUv; 
        uniform vec2 uFade;
        void main() {
          vec3 color = vec3(vColor);
          float alpha = smoothstep(uFade.x, uFade.y, vUv.x);
          gl_FragColor = vec4(color, alpha);
          if (gl_FragColor.a < 0.0001) discard;
          ${be.fog_fragment}
        }
      `,vertexShader:`
        #define USE_FOG;
        ${be.fog_pars_vertex}
        attribute vec3 aOffset;
        attribute vec3 aMetrics;
        attribute vec3 aColor;
        uniform float uTravelLength;
        uniform float uTime;
        varying vec2 vUv; 
        varying vec3 vColor; 
        #include <getDistortion_vertex>
        void main() {
          vec3 transformed = position.xyz;
          float radius = aMetrics.r;
          float myLength = aMetrics.g;
          float speed = aMetrics.b;

          transformed.xy *= radius;
          transformed.z *= myLength;

          transformed.z += myLength - mod(uTime * speed + aOffset.z, uTravelLength);
          transformed.xy += aOffset.xy;

          float progress = abs(transformed.z / uTravelLength);
          transformed.xyz += getDistortion(progress);

          vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
          gl_Position = projectionMatrix * mvPosition;
          vUv = uv;
          vColor = aColor;
          ${be.fog_vertex}
        }
      `,transparent:!0,uniforms:Object.assign({uTime:{value:0},uTravelLength:{value:e.length},uFade:{value:this.fade}},this.webgl.fogUniforms,(typeof this.options.distortion=="object"?this.options.distortion.uniforms:{})||{})});f.onBeforeCompile=h=>{h.vertexShader=h.vertexShader.replace("#include <getDistortion_vertex>",typeof this.options.distortion=="object"?this.options.distortion.getDistortion:"")};const u=new Wn(r,f);u.frustumCulled=!1,this.webgl.scene.add(u),this.mesh=u}update(e){this.mesh.material.uniforms.uTime&&(this.mesh.material.uniforms.uTime.value=e)}}class m2{constructor(e,n){ke(this,"webgl");ke(this,"options");ke(this,"mesh");this.webgl=e,this.options=n}init(){const e=this.options,n=new $s(1,1),i=new fx().copy(n),r=e.totalSideLightSticks;i.instanceCount=r;const s=e.length/(r-1),a=[],o=[],l=[],c=[new Je(e.colors.sticks)];for(let h=0;h<r;h++){const p=Mi(e.lightStickWidth),v=Mi(e.lightStickHeight);a.push((h-1)*s*2+s*Math.random());const _=Sx(c);o.push(_.r,_.g,_.b),l.push(p,v)}i.setAttribute("aOffset",new Ls(new Float32Array(a),1,!1)),i.setAttribute("aColor",new Ls(new Float32Array(o),3,!1)),i.setAttribute("aMetrics",new Ls(new Float32Array(l),2,!1));const f=new Pt({fragmentShader:`
        #define USE_FOG;
        ${be.fog_pars_fragment}
        varying vec3 vColor;
        void main(){
          vec3 color = vec3(vColor);
          gl_FragColor = vec4(color,1.);
          ${be.fog_fragment}
        }
      `,vertexShader:`
        #define USE_FOG;
        ${be.fog_pars_vertex}
        attribute float aOffset;
        attribute vec3 aColor;
        attribute vec2 aMetrics;
        uniform float uTravelLength;
        uniform float uTime;
        varying vec3 vColor;
        mat4 rotationY( in float angle ) {
          return mat4(
            cos(angle),		0,		sin(angle),	0,
            0,		        1.0,	0,			0,
            -sin(angle),	    0,		cos(angle),	0,
            0, 		        0,		0,			1
          );
        }
        #include <getDistortion_vertex>
        void main(){
          vec3 transformed = position.xyz;
          float width = aMetrics.x;
          float height = aMetrics.y;

          transformed.xy *= vec2(width, height);
          float time = mod(uTime * 60. * 2. + aOffset, uTravelLength);

          transformed = (rotationY(3.14/2.) * vec4(transformed,1.)).xyz;
          transformed.z += - uTravelLength + time;

          float progress = abs(transformed.z / uTravelLength);
          transformed.xyz += getDistortion(progress);

          transformed.y += height / 2.;
          transformed.x += -width / 2.;
          vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
          gl_Position = projectionMatrix * mvPosition;
          vColor = aColor;
          ${be.fog_vertex}
        }
      `,side:cn,uniforms:Object.assign({uTravelLength:{value:e.length},uTime:{value:0}},this.webgl.fogUniforms,(typeof e.distortion=="object"?e.distortion.uniforms:{})||{})});f.onBeforeCompile=h=>{h.vertexShader=h.vertexShader.replace("#include <getDistortion_vertex>",typeof this.options.distortion=="object"?this.options.distortion.getDistortion:"")};const u=new Wn(i,f);u.frustumCulled=!1,this.webgl.scene.add(u),this.mesh=u}update(e){this.mesh.material.uniforms.uTime&&(this.mesh.material.uniforms.uTime.value=e)}}class g2{constructor(e,n){ke(this,"webgl");ke(this,"options");ke(this,"uTime");ke(this,"leftRoadWay");ke(this,"rightRoadWay");ke(this,"island");this.webgl=e,this.options=n,this.uTime={value:0}}createPlane(e,n,i){const r=this.options,s=100,a=new $s(i?r.roadWidth:r.islandWidth,r.length,20,s),o=new Pt({fragmentShader:`
        #define USE_FOG;
        varying vec2 vUv; 
        uniform vec3 uColor;
        uniform float uTime;
        ${be.fog_pars_fragment}
        void main() {
          vec2 uv = vUv;
          vec3 color = vec3(uColor);
          gl_FragColor = vec4(color, 1.);
          ${be.fog_fragment}
        }
      `,vertexShader:`
        #define USE_FOG;
        uniform float uTime;
        ${be.fog_pars_vertex}
        uniform float uTravelLength;
        varying vec2 vUv; 
        #include <getDistortion_vertex>
        void main() {
          vec3 transformed = position.xyz;
          vec3 distortion = getDistortion((transformed.y + uTravelLength / 2.) / uTravelLength);
          transformed.x += distortion.x;
          transformed.z += distortion.y;
          transformed.y += -1. * distortion.z;  
          
          vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
          gl_Position = projectionMatrix * mvPosition;
          vUv = uv;
          ${be.fog_vertex}
        }
      `,side:cn,uniforms:Object.assign({uTravelLength:{value:r.length},uColor:{value:new Je(i?r.colors.roadColor:r.colors.islandColor)},uTime:this.uTime},this.webgl.fogUniforms,(typeof r.distortion=="object"?r.distortion.uniforms:{})||{})});o.onBeforeCompile=c=>{c.vertexShader=c.vertexShader.replace("#include <getDistortion_vertex>",typeof this.options.distortion=="object"?this.options.distortion.getDistortion:"")};const l=new Wn(a,o);return l.rotation.x=-Math.PI/2,l.position.z=-r.length/2,l.position.x+=(this.options.islandWidth/2+r.roadWidth/2)*e,this.webgl.scene.add(l),l}init(){this.leftRoadWay=this.createPlane(-1,this.options.roadWidth,!0),this.rightRoadWay=this.createPlane(1,this.options.roadWidth,!0),this.island=this.createPlane(0,this.options.islandWidth,!1)}update(e){this.uTime.value=e}}function v2(t,e){const n=t.domElement,i=n.clientWidth,r=n.clientHeight,s=n.width!==i||n.height!==r;return s&&e(i,r,!1),s}let x2=class{constructor(e,n){ke(this,"container");ke(this,"options");ke(this,"renderer");ke(this,"composer");ke(this,"camera");ke(this,"scene");ke(this,"renderPass");ke(this,"bloomPass");ke(this,"clock");ke(this,"disposed");ke(this,"road");ke(this,"leftCarLights");ke(this,"rightCarLights");ke(this,"leftSticks");ke(this,"fogUniforms");ke(this,"fovTarget");ke(this,"speedUpTarget");ke(this,"speedUp");ke(this,"timeOffset");this.options=n,this.options.distortion||(this.options.distortion=Ax.turbulentDistortion),this.container=e,this.renderer=new jC({antialias:!1,alpha:!0}),this.renderer.setSize(e.offsetWidth,e.offsetHeight,!1),this.renderer.setPixelRatio(window.devicePixelRatio),this.composer=new t3(this.renderer),e.appendChild(this.renderer.domElement),this.camera=new bn(n.fov,e.offsetWidth/e.offsetHeight,.1,1e4),this.camera.position.z=-5,this.camera.position.y=8,this.camera.position.x=0,this.scene=new fd,this.scene.background=null;const i=new Nn,r=[];for(let l=0;l<2e3;l++){const c=(Math.random()-.5)*2e3,f=(Math.random()-.5)*2e3,u=(Math.random()-.5)*2e3;r.push(c,f,u)}i.setAttribute("position",new ri(r,3));const s=new sx({color:16777215,size:2,transparent:!0,opacity:.8}),a=new kE(i,s);this.scene.add(a);const o=new _h(n.colors.background,n.length*.2,n.length*500);this.scene.fog=o,this.fogUniforms={fogColor:{value:o.color},fogNear:{value:o.near},fogFar:{value:o.far}},this.clock=new aM,this.disposed=!1,this.road=new g2(this,n),this.leftCarLights=new l0(this,n,n.colors.leftCars,n.movingAwaySpeed,new ve(0,1-n.carLightsFade)),this.rightCarLights=new l0(this,n,n.colors.rightCars,n.movingCloserSpeed,new ve(1,0+n.carLightsFade)),this.leftSticks=new m2(this,n),this.fovTarget=n.fov,this.speedUpTarget=0,this.speedUp=0,this.timeOffset=0,this.tick=this.tick.bind(this),this.init=this.init.bind(this),this.setSize=this.setSize.bind(this),window.addEventListener("resize",this.onWindowResize.bind(this))}onWindowResize(){const e=this.container.offsetWidth,n=this.container.offsetHeight;this.renderer.setSize(e,n),this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.composer.setSize(e,n)}initPasses(){this.renderPass=new $3(this.scene,this.camera),this.bloomPass=new s0(this.camera,new Z3({luminanceThreshold:.15,luminanceSmoothing:.3,intensity:2,resolutionScale:1}));const e=new s0(this.camera,new c2({preset:ds.MEDIUM}));this.renderPass.renderToScreen=!1,this.bloomPass.renderToScreen=!1,e.renderToScreen=!0,this.composer.addPass(this.renderPass),this.composer.addPass(this.bloomPass),this.composer.addPass(e)}init(){this.initPasses();const e=this.options;this.road.init(),this.leftCarLights.init(),this.leftCarLights.mesh.position.setX(-e.roadWidth/2-e.islandWidth/2),this.rightCarLights.init(),this.rightCarLights.mesh.position.setX(e.roadWidth/2+e.islandWidth/2),this.leftSticks.init(),this.leftSticks.mesh.position.setX(-(e.roadWidth+e.islandWidth/2)),this.tick()}update(e){const n=Math.exp(-(-60*Math.log2(.9))*e);this.speedUp+=o0(this.speedUp,this.speedUpTarget,n,1e-5),this.timeOffset+=this.speedUp*e;const i=this.clock.elapsedTime+this.timeOffset;this.rightCarLights.update(i),this.leftCarLights.update(i),this.leftSticks.update(i),this.road.update(i);let r=!1;const s=o0(this.camera.fov,this.fovTarget,n);if(s!==0&&(this.camera.fov+=s*e*6,r=!0),typeof this.options.distortion=="object"&&this.options.distortion.getJS){const a=this.options.distortion.getJS(.025,i);this.camera.lookAt(new F(this.camera.position.x+a.x,this.camera.position.y+a.y,this.camera.position.z+a.z)),r=!0}r&&this.camera.updateProjectionMatrix()}render(e){this.composer.render(e)}dispose(){this.disposed=!0,this.renderer&&this.renderer.dispose(),this.composer&&this.composer.dispose(),this.scene&&this.scene.clear(),window.removeEventListener("resize",this.onWindowResize.bind(this))}setSize(e,n,i){this.composer.setSize(e,n,i)}tick(){if(this.disposed||!this)return;if(v2(this.renderer,this.setSize)){const n=this.renderer.domElement;this.camera.aspect=n.clientWidth/n.clientHeight,this.camera.updateProjectionMatrix()}const e=this.clock.getDelta();this.render(e),this.update(e),requestAnimationFrame(this.tick)}};const wh=({effectOptions:t={}})=>{const e={...p2,...t},n=ne.useRef(null),i=ne.useRef(null);return ne.useEffect(()=>{if(i.current){i.current.dispose();const o=document.getElementById("lights");if(o)for(;o.firstChild;)o.removeChild(o.firstChild)}const r=n.current;if(!r)return;const s={...e};typeof s.distortion=="string"&&(s.distortion=Ax[s.distortion]);const a=new x2(r,s);return i.current=a,a.init(),()=>{i.current&&i.current.dispose()}},[]),I.jsx("div",{id:"lights",ref:n})};function _2(){const t=fc();return I.jsxs(I.Fragment,{children:[I.jsx(wh,{}),I.jsxs("div",{className:"home-page",children:[I.jsxs("div",{className:"hero",children:[I.jsxs("h1",{className:"title",children:[I.jsx("span",{className:"title-text",children:"WHO'S THE"}),I.jsx("span",{className:"title-highlight",children:"CLOWN?"})]}),I.jsx("p",{className:"subtitle",children:"Multiplayer shame engine. Bring a friend."}),I.jsxs("p",{className:"description",children:["Submit your most ridiculous responses to silly prompts.",I.jsx("br",{}),'An AI judge will pick the "clown" each round.',I.jsx("br",{}),"May the worst answer win!"]}),I.jsxs("button",{className:"btn-hero",onClick:()=>t("/lobby"),children:[I.jsx(mS,{className:"btn-icon"}),I.jsx("span",{children:"START PLAYING"})]})]}),I.jsxs("div",{className:"features",children:[I.jsxs("div",{className:"feature",children:[I.jsx("div",{className:"feature-icon-wrapper",children:I.jsx(yS,{className:"feature-icon"})}),I.jsx("h3",{children:"Quick Setup"}),I.jsx("p",{children:"Create a room and share the code with friends"})]}),I.jsxs("div",{className:"feature",children:[I.jsx("div",{className:"feature-icon-wrapper",children:I.jsx(AS,{className:"feature-icon"})}),I.jsx("h3",{children:"Real-time"}),I.jsx("p",{children:"Fast-paced rounds with instant results"})]}),I.jsxs("div",{className:"feature",children:[I.jsx("div",{className:"feature-icon-wrapper",children:I.jsx(hS,{className:"feature-icon"})}),I.jsx("h3",{children:"AI Judge"}),I.jsx("p",{children:"Let the AI decide who gave the worst answer"})]})]})]})]})}const Ex=ne.createContext(void 0);function y2({children:t}){const[e,n]=ne.useState(null);return I.jsx(Ex.Provider,{value:{user:e,setUser:n},children:t})}function Mx(){const t=ne.useContext(Ex);if(!t)throw new Error("useUser must be used within UserProvider");return t}const wx=ne.createContext(void 0);function A2({children:t}){const[e,n]=ne.useState(null);return I.jsx(wx.Provider,{value:{room:e,setRoom:n},children:t})}function Tx(){const t=ne.useContext(wx);if(!t)throw new Error("useRoom must be used within RoomProvider");return t}const S2="https://who-is-the-clown.bsse23094.workers.dev";function E2(){const[t,e]=ne.useState(""),[n,i]=ne.useState(""),[r,s]=ne.useState(!0),[a,o]=ne.useState(""),[l,c]=ne.useState(!1),[f,u]=ne.useState("ai"),h=fc(),{setUser:p}=Mx(),{setRoom:v}=Tx(),_=async()=>{if(!t.trim()){o("Please enter a username");return}c(!0),o("");try{const d=await fetch(`${S2}/api/rooms/create`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t.trim()})});if(!d.ok){const x=await d.json();throw new Error(x.error||"Failed to create room")}const g=await d.json();p({_id:g.userId,username:g.username}),v({_id:g.roomCode,code:g.roomCode,judgeMode:f,players:[{_id:g.userId,username:g.username}]}),c(!1),h(`/room/${g.roomCode}`)}catch(d){o(d.message),c(!1)}},m=async()=>{if(!t.trim()){o("Please enter a username");return}if(!n.trim()){o("Please enter a room code");return}c(!0),o("");try{const d=Math.random().toString(36).substring(2)+Date.now().toString(36);p({_id:d,username:t.trim()}),v({_id:n.trim().toUpperCase(),code:n.trim().toUpperCase(),players:[]}),c(!1),h(`/room/${n.trim().toUpperCase()}`)}catch(d){o(d.message),c(!1)}};return I.jsxs(I.Fragment,{children:[I.jsx(wh,{}),I.jsx("div",{className:"lobby-page",children:I.jsxs("div",{className:"lobby-card",children:[I.jsxs("div",{className:"tabs",children:[I.jsxs("button",{className:`tab ${r?"active":""}`,onClick:()=>{s(!0),o("")},children:[I.jsx(Jp,{className:"tab-icon"}),I.jsx("span",{children:"Host Game"})]}),I.jsxs("button",{className:`tab ${r?"":"active"}`,onClick:()=>{s(!1),o("")},children:[I.jsx(Zp,{className:"tab-icon"}),I.jsx("span",{children:"Join Game"})]})]}),I.jsxs("div",{className:"form",children:[I.jsx("input",{type:"text",placeholder:"Enter your username",value:t,onChange:d=>e(d.target.value),className:"input",maxLength:20}),!r&&I.jsx("input",{type:"text",placeholder:"Enter room code",value:n,onChange:d=>i(d.target.value.toUpperCase()),className:"input",maxLength:5}),r&&I.jsxs("div",{className:"mode-selector",children:[I.jsx("div",{className:"mode-selector-header",children:I.jsx("h3",{children:"Select Judge Mode"})}),I.jsxs("div",{className:"mode-options",children:[I.jsxs("button",{type:"button",className:`mode-option ${f==="ai"?"selected":""}`,onClick:()=>u("ai"),children:[I.jsx("div",{className:"mode-icon",children:I.jsx(dS,{size:32})}),I.jsxs("div",{className:"mode-content",children:[I.jsx("div",{className:"mode-title",children:"AI Judge"}),I.jsx("div",{className:"mode-description",children:"An AI analyzes all answers and picks the worst one with a personalized roast"})]})]}),I.jsxs("button",{type:"button",className:`mode-option ${f==="vote"?"selected":""}`,onClick:()=>u("vote"),children:[I.jsx("div",{className:"mode-icon",children:I.jsx(Nv,{size:32})}),I.jsxs("div",{className:"mode-content",children:[I.jsx("div",{className:"mode-title",children:"Majority Voting"}),I.jsx("div",{className:"mode-description",children:"Players vote for the worst answer. The one with most votes becomes the clown!"})]})]})]})]}),a&&I.jsx("div",{className:"error",children:a}),I.jsx("button",{className:"submit-btn",onClick:r?_:m,disabled:l,children:l?I.jsxs(I.Fragment,{children:[I.jsx(vS,{className:"btn-icon spin"}),I.jsx("span",{children:"Loading..."})]}):I.jsxs(I.Fragment,{children:[r?I.jsx(Jp,{className:"btn-icon"}):I.jsx(Zp,{className:"btn-icon"}),I.jsx("span",{children:r?"Create Room":"Join Room"})]})})]})]})})]})}class M2{constructor(e){ke(this,"ws",null);ke(this,"url");ke(this,"roomCode","");ke(this,"handlers",new Map);ke(this,"reconnectAttempts",0);ke(this,"maxReconnectAttempts",5);ke(this,"messageQueue",[]);this.url=e}connect(e){if(this.ws&&this.roomCode===e){console.log("⚠️ Already connected to this room");return}this.ws&&this.ws.close(),this.roomCode=e;const n=this.url.replace("http","ws").replace("https","wss")+`/game/${e}`;console.log("🔌 Connecting to:",n),this.ws=new WebSocket(n),this.ws.onopen=()=>{console.log("✅ Connected to game server"),this.reconnectAttempts=0,setTimeout(()=>{for(;this.messageQueue.length>0;){const i=this.messageQueue.shift();i&&this.ws&&this.ws.readyState===WebSocket.OPEN&&(console.log("📤 Sending queued message:",i.type),this.ws.send(JSON.stringify({type:i.type,...i.data})))}},50)},this.ws.onmessage=i=>{try{const r=JSON.parse(i.data);console.log("📨 Received:",r.type,r),this.handleMessage(r)}catch(r){console.error("❌ Failed to parse message:",r)}},this.ws.onerror=i=>{console.error("❌ WebSocket error:",i)},this.ws.onclose=()=>{console.log("🔌 Disconnected from game server"),this.attemptReconnect()}}attemptReconnect(){if(this.reconnectAttempts<this.maxReconnectAttempts){this.reconnectAttempts++;const e=Math.min(1e3*Math.pow(2,this.reconnectAttempts-1),1e4);console.log(`Reconnecting... (${this.reconnectAttempts}/${this.maxReconnectAttempts}) in ${e}ms`),setTimeout(()=>{this.roomCode&&this.connect(this.roomCode)},e)}else console.error("❌ Max reconnection attempts reached")}handleMessage(e){const{type:n,...i}=e,r=this.handlers.get(n);r&&r.forEach(s=>s(i))}on(e,n){this.handlers.has(e)||this.handlers.set(e,[]),this.handlers.get(e).push(n)}once(e,n){const i=r=>{n(r),this.off(e,i)};this.on(e,i)}off(e,n){if(!n){this.handlers.delete(e);return}const i=this.handlers.get(e);if(i){const r=i.indexOf(n);r>-1&&i.splice(r,1)}}emit(e,n){var r;const i={type:e,...n};this.ws&&this.ws.readyState===WebSocket.OPEN?(console.log("📤 Sending:",e,i),this.ws.send(JSON.stringify(i))):this.ws&&this.ws.readyState===WebSocket.CONNECTING?(console.log("⏳ Queueing message (connecting):",e),this.messageQueue.push({type:e,data:n})):console.error("❌ WebSocket is not connected, readyState:",(r=this.ws)==null?void 0:r.readyState)}disconnect(){this.ws&&(this.ws.close(),this.ws=null),this.handlers.clear(),this.messageQueue=[]}isConnected(){return this.ws!==null&&this.ws.readyState===WebSocket.OPEN}}const w2="https://who-is-the-clown.bsse23094.workers.dev";let Cu=null;function el(){return Cu||(Cu=new M2(w2)),Cu}function T2({prompt:t}){return I.jsxs("div",{className:"prompt-view",children:[I.jsx("h2",{children:"Get Ready!"}),I.jsx("div",{className:"prompt-card",children:I.jsx("p",{className:"prompt-text",children:t})}),I.jsx("p",{className:"hint",children:"Time to think of your worst answer..."})]})}function C2({prompt:t,timer:e,onSubmit:n}){const[i,r]=ne.useState(""),[s,a]=ne.useState(e),[o,l]=ne.useState(!1);ne.useEffect(()=>{if(o)return;const f=setInterval(()=>{a(u=>u<=1?(clearInterval(f),0):u-1)},1e3);return()=>clearInterval(f)},[o]);const c=f=>{f.preventDefault(),!(!i.trim()||o)&&(n(i.trim()),l(!0))};return I.jsxs("div",{className:"answer-form",children:[I.jsx("div",{className:"timer",children:I.jsx("div",{className:"timer-circle",style:{"--progress":s/e},children:I.jsxs("span",{children:[s,"s"]})})}),I.jsx("h3",{className:"prompt",children:t}),o?I.jsxs("div",{className:"submitted",children:[I.jsx("div",{className:"check-icon",children:"✓"}),I.jsx("p",{children:"Answer submitted!"}),I.jsx("p",{className:"wait",children:"Waiting for other players..."})]}):I.jsxs("form",{onSubmit:c,children:[I.jsx("textarea",{className:"answer-input",placeholder:"Type your answer here...",value:i,onChange:f=>r(f.target.value),maxLength:200,rows:4,autoFocus:!0}),I.jsxs("div",{className:"char-count",children:[i.length,"/200"]}),I.jsx("button",{type:"submit",className:"btn btn-primary",disabled:!i.trim(),children:"Submit Answer"})]})]})}function b2({result:t,players:e,currentUserId:n}){const i=t.clownUserId===n;return I.jsxs("div",{className:"reveal-view",children:[I.jsxs("div",{className:`clown-reveal ${i?"you":""}`,children:[I.jsxs("h2",{children:[I.jsx($p,{className:"header-icon"}),"The Clown Is..."]}),I.jsx("div",{className:"clown-name",children:i?"YOU!":t.clownUsername||"Unknown"}),I.jsxs("div",{className:"roast",children:['"',t.roast,'"']}),I.jsxs("div",{className:"judge-method",children:["Judged by: ",t.method]})]}),t.answers&&t.answers.length>0&&I.jsxs("div",{className:"answers-section",children:[I.jsx("h3",{children:"All Answers:"}),I.jsx("div",{className:"answers-list",children:t.answers.map((r,s)=>{const a=e.find(l=>(l.id||l._id)===r.userId),o=r.userId===t.clownUserId;return I.jsxs("div",{className:`answer-card ${o?"clown":""}`,children:[I.jsxs("div",{className:"player-name",children:[(a==null?void 0:a.username)||"Unknown",o&&I.jsx($p,{className:"clown-icon",size:16})]}),I.jsx("div",{className:"answer-text",children:r.text})]},s)})})]})]})}function R2({answers:t,currentUserId:e,onVote:n,votedUserIds:i}){const[r,s]=ne.useState(null),a=i.includes(e),[o]=ne.useState(()=>t.map((f,u)=>({...f,originalIndex:u})).sort(()=>Math.random()-.5)),l=c=>{c!==e&&(a||(s(c),n(c)))};return I.jsxs("div",{className:"voting-view",children:[I.jsxs("div",{className:"voting-header",children:[I.jsxs("h2",{children:[I.jsx(Nv,{className:"header-icon"}),"Vote for the Worst Answer"]}),I.jsx("p",{className:"voting-subtitle",children:a?"Waiting for other players...":"Pick the answer you think is the worst"}),I.jsxs("div",{className:"vote-counter",children:[i.length," / ",t.length," voted"]})]}),I.jsx("div",{className:"answers-grid",children:o.map((c,f)=>{const u=c.userId===e,h=r===c.userId;return I.jsxs("button",{className:`answer-card ${u?"own-answer":""} ${h?"selected":""} ${a?"disabled":""}`,onClick:()=>l(c.userId),disabled:u||a,children:[I.jsxs("div",{className:"answer-number",children:["Answer ",f+1]}),I.jsx("div",{className:"answer-text",children:c.text}),u&&I.jsx("div",{className:"own-badge",children:"Your Answer"}),h&&I.jsxs("div",{className:"voted-badge",children:[I.jsx(pS,{size:14}),"Voted"]})]},f)})}),I.jsx("div",{className:"voting-instructions",children:I.jsxs("p",{children:[I.jsx(gS,{size:16,className:"instruction-icon"}),"Can't vote for your own answer. Answers are shown in random order."]})})]})}function D2({stats:t,onNextRound:e}){var r;const n=[...t].sort((s,a)=>a.clownCount-s.clownCount);console.log("Scoreboard rendering with stats:",n);const i=s=>s===0?I.jsx(Uv,{className:"medal-icon"}):s===1?I.jsx(_S,{className:"medal-icon"}):s===2?I.jsx(em,{className:"medal-icon"}):null;return I.jsxs("div",{className:"scoreboard",children:[I.jsxs("div",{className:"scoreboard-header",children:[I.jsx("h2",{children:"Round Results"}),I.jsx("div",{className:"subtitle",children:"Who's the biggest clown?"})]}),I.jsx("div",{className:"standings",children:n.length>0?n.map((s,a)=>I.jsxs("div",{className:`standing-item ${a===0?"rank-1":""}`,children:[I.jsxs("div",{className:"rank",children:["#",a+1]}),i(a),I.jsx("div",{className:"player-name",children:s.username||"Unknown Player"}),I.jsx("div",{className:"score",children:s.clownCount})]},s.username)):I.jsx("div",{className:"no-stats",children:I.jsx("p",{children:"No stats yet. Time to play!"})})}),I.jsxs("div",{className:"stats-grid",children:[I.jsxs("div",{className:"stat-card",children:[I.jsxs("div",{className:"stat-header",children:[I.jsx(em,{className:"stat-icon"}),I.jsx("div",{className:"stat-label",children:"Clown Count"})]}),I.jsx("div",{className:"stat-value",children:((r=n[0])==null?void 0:r.clownCount)||0})]}),I.jsxs("div",{className:"stat-card",children:[I.jsxs("div",{className:"stat-header",children:[I.jsx(xS,{className:"stat-icon"}),I.jsx("div",{className:"stat-label",children:"Rounds"})]}),I.jsx("div",{className:"stat-value",children:n.length})]})]}),I.jsxs("button",{className:"next-round-btn",onClick:e,children:[I.jsx("span",{children:"Next Round"}),I.jsx(fS,{className:"btn-icon"})]})]})}function P2(){const{roomId:t}=GA(),e=fc(),{user:n}=Mx(),{room:i,setRoom:r}=Tx(),[s,a]=ne.useState("waiting"),[o,l]=ne.useState(""),[c,f]=ne.useState(30),[u,h]=ne.useState(null),[p,v]=ne.useState([]),[_,m]=ne.useState((i==null?void 0:i.players)||[]),[d,g]=ne.useState([]),[x,S]=ne.useState([]),[C,M]=ne.useState(null);ne.useEffect(()=>{if(!n||!i||!t){e("/lobby");return}console.log("🎮 RoomPage: Setting up WebSocket connection for room",t);const R=el();R.connect(t);const k=setTimeout(()=>{R.emit("join",{username:n.username||"Player",userId:n._id})},100);return R.on("joined",O=>{console.log("Joined room:",O),O.room&&(r({...i,...O.room,_id:(i==null?void 0:i._id)||O.room.code}),m(O.room.players||[]),M(O.room.hostId||null))}),R.on("player_joined",O=>{console.log("Player joined:",O),O.players&&m(O.players),O.hostId&&M(O.hostId)}),R.on("round_started",O=>{console.log("Round started:",O),l(O.prompt),f(O.timer||30),a("prompt"),g([]),S([]),setTimeout(()=>{a("answering")},3e3)}),R.on("answer_update",O=>{console.log("Answer update:",O)}),R.on("voting_started",O=>{console.log("Voting started:",O),g(O.answers||[]),a("voting")}),R.on("vote_update",O=>{console.log("Vote update:",O),S(O.votedUserIds||[])}),R.on("round_result",O=>{console.log("Round result:",O),h(O),a("reveal"),O.scoreboard&&v(O.scoreboard),setTimeout(()=>{a("scoreboard")},5e3)}),R.on("error",O=>{console.error("Socket error:",O),alert(O.message||"An error occurred")}),()=>{console.log("🎮 RoomPage: Cleaning up WebSocket connection"),clearTimeout(k)}},[n,i,t,e]);const b=()=>{el().emit("start_round",{userId:n==null?void 0:n._id,judgeMode:(i==null?void 0:i.judgeMode)||"ai"})},L=R=>{el().emit("submit_answer",{userId:n==null?void 0:n._id,text:R})},w=R=>{el().emit("submit_vote",{voterId:n==null?void 0:n._id,votedForId:R})},A=()=>{a("waiting"),h(null),g([]),S([])};return!n||!i?null:I.jsxs(I.Fragment,{children:[I.jsx(wh,{}),I.jsxs("div",{className:"room-page",children:[I.jsxs("div",{className:"room-header",children:[I.jsxs("h2",{children:["Room Code: ",i.code]}),I.jsxs("div",{className:"players",children:[I.jsxs("h3",{children:["Players (",_.length,"):"]}),I.jsx("ul",{children:_.map(R=>I.jsxs("li",{children:[R.username,(R.id||R._id)===C&&I.jsx(Uv,{className:"crown-icon",size:16})]},R.id||R._id))})]})]}),I.jsxs("div",{className:"game-area",children:[s==="waiting"&&I.jsxs("div",{className:"waiting",children:[I.jsx("h2",{children:"Waiting for players..."}),I.jsx("p",{children:"At least 2 players needed to start"}),_.length>=2&&n._id===C&&I.jsx("button",{className:"btn btn-primary",onClick:b,children:"Start Round"}),_.length>=2&&n._id!==C&&I.jsx("p",{className:"waiting-host",children:"Waiting for host to start..."})]}),s==="prompt"&&I.jsx(T2,{prompt:o}),s==="answering"&&I.jsx(C2,{prompt:o,timer:c,onSubmit:L}),s==="voting"&&I.jsx(R2,{answers:d,currentUserId:n._id,onVote:w,votedUserIds:x}),s==="reveal"&&u&&I.jsx(b2,{result:u,players:_,currentUserId:n._id}),s==="scoreboard"&&I.jsx(D2,{stats:p,onNextRound:A})]})]})]})}function I2(){const t=fc();return I.jsxs("div",{style:{textAlign:"center",padding:"3rem"},children:[I.jsx("h1",{style:{fontSize:"3rem"},children:"404"}),I.jsx("p",{style:{fontSize:"1.2rem",marginBottom:"2rem"},children:"Page not found"}),I.jsx("button",{className:"btn btn-primary",onClick:()=>t("/"),children:"Go Home"})]})}function L2({children:t}){return I.jsxs("div",{className:"layout",children:[I.jsx("main",{className:"main-content",children:t}),I.jsx("footer",{className:"footer",children:I.jsx("p",{children:"Multiplayer shame engine © 2025"})})]})}function U2(){return I.jsx(y2,{children:I.jsx(A2,{children:I.jsx(L2,{children:I.jsxs(rS,{children:[I.jsx(ya,{path:"/",element:I.jsx(_2,{})}),I.jsx(ya,{path:"/lobby",element:I.jsx(E2,{})}),I.jsx(ya,{path:"/room/:roomId",element:I.jsx(P2,{})}),I.jsx(ya,{path:"*",element:I.jsx(I2,{})})]})})})})}bu.createRoot(document.getElementById("root")).render(I.jsx(_0.StrictMode,{children:I.jsx(oS,{basename:"/who-is-the-clown",children:I.jsx(U2,{})})}));
