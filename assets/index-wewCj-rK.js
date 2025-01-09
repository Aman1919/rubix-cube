var rv=Object.defineProperty;var sv=(r,e,t)=>e in r?rv(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var En=(r,e,t)=>sv(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var Cc={exports:{}},zo={},Pc={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Up;function ov(){if(Up)return ft;Up=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function y(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function x(I,ne,Ie){this.props=I,this.context=ne,this.refs=w,this.updater=Ie||S}x.prototype.isReactComponent={},x.prototype.setState=function(I,ne){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ne,"setState")},x.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function _(){}_.prototype=x.prototype;function U(I,ne,Ie){this.props=I,this.context=ne,this.refs=w,this.updater=Ie||S}var L=U.prototype=new _;L.constructor=U,E(L,x.prototype),L.isPureReactComponent=!0;var b=Array.isArray,X=Object.prototype.hasOwnProperty,z={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function j(I,ne,Ie){var Z,ue={},Me=null,ve=null;if(ne!=null)for(Z in ne.ref!==void 0&&(ve=ne.ref),ne.key!==void 0&&(Me=""+ne.key),ne)X.call(ne,Z)&&!F.hasOwnProperty(Z)&&(ue[Z]=ne[Z]);var Te=arguments.length-2;if(Te===1)ue.children=Ie;else if(1<Te){for(var Ue=Array(Te),Ze=0;Ze<Te;Ze++)Ue[Ze]=arguments[Ze+2];ue.children=Ue}if(I&&I.defaultProps)for(Z in Te=I.defaultProps,Te)ue[Z]===void 0&&(ue[Z]=Te[Z]);return{$$typeof:r,type:I,key:Me,ref:ve,props:ue,_owner:z.current}}function C(I,ne){return{$$typeof:r,type:I.type,key:ne,ref:I.ref,props:I.props,_owner:I._owner}}function R(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function B(I){var ne={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Ie){return ne[Ie]})}var oe=/\/+/g;function ee(I,ne){return typeof I=="object"&&I!==null&&I.key!=null?B(""+I.key):ne.toString(36)}function fe(I,ne,Ie,Z,ue){var Me=typeof I;(Me==="undefined"||Me==="boolean")&&(I=null);var ve=!1;if(I===null)ve=!0;else switch(Me){case"string":case"number":ve=!0;break;case"object":switch(I.$$typeof){case r:case e:ve=!0}}if(ve)return ve=I,ue=ue(ve),I=Z===""?"."+ee(ve,0):Z,b(ue)?(Ie="",I!=null&&(Ie=I.replace(oe,"$&/")+"/"),fe(ue,ne,Ie,"",function(Ze){return Ze})):ue!=null&&(R(ue)&&(ue=C(ue,Ie+(!ue.key||ve&&ve.key===ue.key?"":(""+ue.key).replace(oe,"$&/")+"/")+I)),ne.push(ue)),1;if(ve=0,Z=Z===""?".":Z+":",b(I))for(var Te=0;Te<I.length;Te++){Me=I[Te];var Ue=Z+ee(Me,Te);ve+=fe(Me,ne,Ie,Ue,ue)}else if(Ue=y(I),typeof Ue=="function")for(I=Ue.call(I),Te=0;!(Me=I.next()).done;)Me=Me.value,Ue=Z+ee(Me,Te++),ve+=fe(Me,ne,Ie,Ue,ue);else if(Me==="object")throw ne=String(I),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return ve}function he(I,ne,Ie){if(I==null)return I;var Z=[],ue=0;return fe(I,Z,"","",function(Me){return ne.call(Ie,Me,ue++)}),Z}function se(I){if(I._status===-1){var ne=I._result;ne=ne(),ne.then(function(Ie){(I._status===0||I._status===-1)&&(I._status=1,I._result=Ie)},function(Ie){(I._status===0||I._status===-1)&&(I._status=2,I._result=Ie)}),I._status===-1&&(I._status=0,I._result=ne)}if(I._status===1)return I._result.default;throw I._result}var le={current:null},k={transition:null},ae={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:k,ReactCurrentOwner:z};function re(){throw Error("act(...) is not supported in production builds of React.")}return ft.Children={map:he,forEach:function(I,ne,Ie){he(I,function(){ne.apply(this,arguments)},Ie)},count:function(I){var ne=0;return he(I,function(){ne++}),ne},toArray:function(I){return he(I,function(ne){return ne})||[]},only:function(I){if(!R(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},ft.Component=x,ft.Fragment=t,ft.Profiler=a,ft.PureComponent=U,ft.StrictMode=s,ft.Suspense=h,ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,ft.act=re,ft.cloneElement=function(I,ne,Ie){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var Z=E({},I.props),ue=I.key,Me=I.ref,ve=I._owner;if(ne!=null){if(ne.ref!==void 0&&(Me=ne.ref,ve=z.current),ne.key!==void 0&&(ue=""+ne.key),I.type&&I.type.defaultProps)var Te=I.type.defaultProps;for(Ue in ne)X.call(ne,Ue)&&!F.hasOwnProperty(Ue)&&(Z[Ue]=ne[Ue]===void 0&&Te!==void 0?Te[Ue]:ne[Ue])}var Ue=arguments.length-2;if(Ue===1)Z.children=Ie;else if(1<Ue){Te=Array(Ue);for(var Ze=0;Ze<Ue;Ze++)Te[Ze]=arguments[Ze+2];Z.children=Te}return{$$typeof:r,type:I.type,key:ue,ref:Me,props:Z,_owner:ve}},ft.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:l,_context:I},I.Consumer=I},ft.createElement=j,ft.createFactory=function(I){var ne=j.bind(null,I);return ne.type=I,ne},ft.createRef=function(){return{current:null}},ft.forwardRef=function(I){return{$$typeof:f,render:I}},ft.isValidElement=R,ft.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:se}},ft.memo=function(I,ne){return{$$typeof:m,type:I,compare:ne===void 0?null:ne}},ft.startTransition=function(I){var ne=k.transition;k.transition={};try{I()}finally{k.transition=ne}},ft.unstable_act=re,ft.useCallback=function(I,ne){return le.current.useCallback(I,ne)},ft.useContext=function(I){return le.current.useContext(I)},ft.useDebugValue=function(){},ft.useDeferredValue=function(I){return le.current.useDeferredValue(I)},ft.useEffect=function(I,ne){return le.current.useEffect(I,ne)},ft.useId=function(){return le.current.useId()},ft.useImperativeHandle=function(I,ne,Ie){return le.current.useImperativeHandle(I,ne,Ie)},ft.useInsertionEffect=function(I,ne){return le.current.useInsertionEffect(I,ne)},ft.useLayoutEffect=function(I,ne){return le.current.useLayoutEffect(I,ne)},ft.useMemo=function(I,ne){return le.current.useMemo(I,ne)},ft.useReducer=function(I,ne,Ie){return le.current.useReducer(I,ne,Ie)},ft.useRef=function(I){return le.current.useRef(I)},ft.useState=function(I){return le.current.useState(I)},ft.useSyncExternalStore=function(I,ne,Ie){return le.current.useSyncExternalStore(I,ne,Ie)},ft.useTransition=function(){return le.current.useTransition()},ft.version="18.3.1",ft}var Np;function Jf(){return Np||(Np=1,Pc.exports=ov()),Pc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function av(){if(Fp)return zo;Fp=1;var r=Jf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,m){var g,v={},y=null,S=null;m!==void 0&&(y=""+m),h.key!==void 0&&(y=""+h.key),h.ref!==void 0&&(S=h.ref);for(g in h)s.call(h,g)&&!l.hasOwnProperty(g)&&(v[g]=h[g]);if(f&&f.defaultProps)for(g in h=f.defaultProps,h)v[g]===void 0&&(v[g]=h[g]);return{$$typeof:e,type:f,key:y,ref:S,props:v,_owner:a.current}}return zo.Fragment=t,zo.jsx=c,zo.jsxs=c,zo}var Op;function lv(){return Op||(Op=1,Cc.exports=av()),Cc.exports}var ln=lv(),al={},bc={exports:{}},Ln={},Dc={exports:{}},Lc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kp;function uv(){return kp||(kp=1,function(r){function e(k,ae){var re=k.length;k.push(ae);e:for(;0<re;){var I=re-1>>>1,ne=k[I];if(0<a(ne,ae))k[I]=ae,k[re]=ne,re=I;else break e}}function t(k){return k.length===0?null:k[0]}function s(k){if(k.length===0)return null;var ae=k[0],re=k.pop();if(re!==ae){k[0]=re;e:for(var I=0,ne=k.length,Ie=ne>>>1;I<Ie;){var Z=2*(I+1)-1,ue=k[Z],Me=Z+1,ve=k[Me];if(0>a(ue,re))Me<ne&&0>a(ve,ue)?(k[I]=ve,k[Me]=re,I=Me):(k[I]=ue,k[Z]=re,I=Z);else if(Me<ne&&0>a(ve,re))k[I]=ve,k[Me]=re,I=Me;else break e}}return ae}function a(k,ae){var re=k.sortIndex-ae.sortIndex;return re!==0?re:k.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();r.unstable_now=function(){return c.now()-f}}var h=[],m=[],g=1,v=null,y=3,S=!1,E=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(k){for(var ae=t(m);ae!==null;){if(ae.callback===null)s(m);else if(ae.startTime<=k)s(m),ae.sortIndex=ae.expirationTime,e(h,ae);else break;ae=t(m)}}function b(k){if(w=!1,L(k),!E)if(t(h)!==null)E=!0,se(X);else{var ae=t(m);ae!==null&&le(b,ae.startTime-k)}}function X(k,ae){E=!1,w&&(w=!1,_(j),j=-1),S=!0;var re=y;try{for(L(ae),v=t(h);v!==null&&(!(v.expirationTime>ae)||k&&!B());){var I=v.callback;if(typeof I=="function"){v.callback=null,y=v.priorityLevel;var ne=I(v.expirationTime<=ae);ae=r.unstable_now(),typeof ne=="function"?v.callback=ne:v===t(h)&&s(h),L(ae)}else s(h);v=t(h)}if(v!==null)var Ie=!0;else{var Z=t(m);Z!==null&&le(b,Z.startTime-ae),Ie=!1}return Ie}finally{v=null,y=re,S=!1}}var z=!1,F=null,j=-1,C=5,R=-1;function B(){return!(r.unstable_now()-R<C)}function oe(){if(F!==null){var k=r.unstable_now();R=k;var ae=!0;try{ae=F(!0,k)}finally{ae?ee():(z=!1,F=null)}}else z=!1}var ee;if(typeof U=="function")ee=function(){U(oe)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,he=fe.port2;fe.port1.onmessage=oe,ee=function(){he.postMessage(null)}}else ee=function(){x(oe,0)};function se(k){F=k,z||(z=!0,ee())}function le(k,ae){j=x(function(){k(r.unstable_now())},ae)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(k){k.callback=null},r.unstable_continueExecution=function(){E||S||(E=!0,se(X))},r.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<k?Math.floor(1e3/k):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(k){switch(y){case 1:case 2:case 3:var ae=3;break;default:ae=y}var re=y;y=ae;try{return k()}finally{y=re}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(k,ae){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var re=y;y=k;try{return ae()}finally{y=re}},r.unstable_scheduleCallback=function(k,ae,re){var I=r.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?I+re:I):re=I,k){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=re+ne,k={id:g++,callback:ae,priorityLevel:k,startTime:re,expirationTime:ne,sortIndex:-1},re>I?(k.sortIndex=re,e(m,k),t(h)===null&&k===t(m)&&(w?(_(j),j=-1):w=!0,le(b,re-I))):(k.sortIndex=ne,e(h,k),E||S||(E=!0,se(X))),k},r.unstable_shouldYield=B,r.unstable_wrapCallback=function(k){var ae=y;return function(){var re=y;y=ae;try{return k.apply(this,arguments)}finally{y=re}}}}(Lc)),Lc}var zp;function cv(){return zp||(zp=1,Dc.exports=uv()),Dc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function fv(){if(Bp)return Ln;Bp=1;var r=Jf(),e=cv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(a[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function y(n){return h.call(v,n)?!0:h.call(g,n)?!1:m.test(n)?v[n]=!0:(g[n]=!0,!1)}function S(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,o,u){if(i===null||typeof i>"u"||S(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(n,i,o,u,d,p,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=p,this.removeEmptyString=M}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new w(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function U(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,U);x[i]=new w(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,U);x[i]=new w(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,U);x[i]=new w(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,o,u){var d=x.hasOwnProperty(i)?x[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,d,u)&&(o=null),u||d===null?y(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,u=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var b=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,X=Symbol.for("react.element"),z=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),B=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),k=Symbol.iterator;function ae(n){return n===null||typeof n!="object"?null:(n=k&&n[k]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,I;function ne(n){if(I===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+n}var Ie=!1;function Z(n,i){if(!n||Ie)return"";Ie=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(Q){var u=Q}Reflect.construct(n,[],i)}else{try{i.call()}catch(Q){u=Q}n.call(i.prototype)}else{try{throw Error()}catch(Q){u=Q}n()}}catch(Q){if(Q&&u&&typeof Q.stack=="string"){for(var d=Q.stack.split(`
`),p=u.stack.split(`
`),M=d.length-1,D=p.length-1;1<=M&&0<=D&&d[M]!==p[D];)D--;for(;1<=M&&0<=D;M--,D--)if(d[M]!==p[D]){if(M!==1||D!==1)do if(M--,D--,0>D||d[M]!==p[D]){var N=`
`+d[M].replace(" at new "," at ");return n.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",n.displayName)),N}while(1<=M&&0<=D);break}}}finally{Ie=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?ne(n):""}function ue(n){switch(n.tag){case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return n=Z(n.type,!1),n;case 11:return n=Z(n.type.render,!1),n;case 1:return n=Z(n.type,!0),n;default:return""}}function Me(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case z:return"Portal";case C:return"Profiler";case j:return"StrictMode";case ee:return"Suspense";case fe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case oe:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case he:return i=n.displayName||null,i!==null?i:Me(n.type)||"Memo";case se:i=n._payload,n=n._init;try{return Me(n(i))}catch{}}return null}function ve(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(i);case 8:return i===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Te(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ue(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(n){var i=Ue(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,p=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(M){u=""+M,p.call(this,M)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(M){u=""+M},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Rt(n){n._valueTracker||(n._valueTracker=Ze(n))}function mt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=Ue(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function Dt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function O(n,i){var o=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function _n(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=Te(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ht(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function ut(n,i){ht(n,i);var o=Te(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?At(n,i.type,o):i.hasOwnProperty("defaultValue")&&At(n,i.type,Te(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function je(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function At(n,i,o){(i!=="number"||Dt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var We=Array.isArray;function P(n,i,o,u){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&u&&(n[o].defaultSelected=!0)}else{for(o=""+Te(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function T(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function K(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(We(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:Te(o)}}function pe(n,i){var o=Te(i.value),u=Te(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function ge(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ce(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ve(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ce(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var we,Ne=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(we=we||document.createElement("div"),we.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=we.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function at(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Se={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];Object.keys(Se).forEach(function(n){ke.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Se[i]=Se[n]})});function qe(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Se.hasOwnProperty(n)&&Se[n]?(""+i).trim():i+"px"}function Qe(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,d=qe(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,d):n[o]=d}}var ze=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ct(n,i){if(i){if(ze[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function nt(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tt=null;function G(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ae=null,ie=null,de=null;function be(n){if(n=To(n)){if(typeof Ae!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ma(i),Ae(n.stateNode,n.type,i))}}function Pe(n){ie?de?de.push(n):de=[n]:ie=n}function it(){if(ie){var n=ie,i=de;if(de=ie=null,be(n),i)for(n=0;n<i.length;n++)be(i[n])}}function It(n,i){return n(i)}function qt(){}var vt=!1;function An(n,i,o){if(vt)return n(i,o);vt=!0;try{return It(n,i,o)}finally{vt=!1,(ie!==null||de!==null)&&(qt(),it())}}function vn(n,i){var o=n.stateNode;if(o===null)return null;var u=Ma(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var ts=!1;if(f)try{var ji={};Object.defineProperty(ji,"passive",{get:function(){ts=!0}}),window.addEventListener("test",ji,ji),window.removeEventListener("test",ji,ji)}catch{ts=!1}function Ei(n,i,o,u,d,p,M,D,N){var Q=Array.prototype.slice.call(arguments,3);try{i.apply(o,Q)}catch(_e){this.onError(_e)}}var Ti=!1,Tr=null,wr=!1,Yi=null,ta={onError:function(n){Ti=!0,Tr=n}};function ns(n,i,o,u,d,p,M,D,N){Ti=!1,Tr=null,Ei.apply(ta,arguments)}function na(n,i,o,u,d,p,M,D,N){if(ns.apply(this,arguments),Ti){if(Ti){var Q=Tr;Ti=!1,Tr=null}else throw Error(t(198));wr||(wr=!0,Yi=Q)}}function di(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,i.flags&4098&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function ia(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ra(n){if(di(n)!==n)throw Error(t(188))}function Zl(n){var i=n.alternate;if(!i){if(i=di(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var d=o.return;if(d===null)break;var p=d.alternate;if(p===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===o)return ra(d),n;if(p===u)return ra(d),i;p=p.sibling}throw Error(t(188))}if(o.return!==u.return)o=d,u=p;else{for(var M=!1,D=d.child;D;){if(D===o){M=!0,o=d,u=p;break}if(D===u){M=!0,u=d,o=p;break}D=D.sibling}if(!M){for(D=p.child;D;){if(D===o){M=!0,o=p,u=d;break}if(D===u){M=!0,u=p,o=d;break}D=D.sibling}if(!M)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function sa(n){return n=Zl(n),n!==null?oa(n):null}function oa(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=oa(n);if(i!==null)return i;n=n.sibling}return null}var A=e.unstable_scheduleCallback,W=e.unstable_cancelCallback,J=e.unstable_shouldYield,te=e.unstable_requestPaint,H=e.unstable_now,ye=e.unstable_getCurrentPriorityLevel,Re=e.unstable_ImmediatePriority,Le=e.unstable_UserBlockingPriority,Fe=e.unstable_NormalPriority,Je=e.unstable_LowPriority,et=e.unstable_IdlePriority,Xe=null,rt=null;function yt(n){if(rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(Xe,n,void 0,(n.current.flags&128)===128)}catch{}}var St=Math.clz32?Math.clz32:Ye,Ft=Math.log,_t=Math.LN2;function Ye(n){return n>>>=0,n===0?32:31-(Ft(n)/_t|0)|0}var Bt=64,gt=4194304;function sn(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ei(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,d=n.suspendedLanes,p=n.pingedLanes,M=o&268435455;if(M!==0){var D=M&~d;D!==0?u=sn(D):(p&=M,p!==0&&(u=sn(p)))}else M=o&~d,M!==0?u=sn(M):p!==0&&(u=sn(p));if(u===0)return 0;if(i!==0&&i!==u&&!(i&d)&&(d=u&-u,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if(u&4&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-St(i),d=1<<o,u|=n[o],i&=~d;return u}function xn(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ar(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var M=31-St(p),D=1<<M,N=d[M];N===-1?(!(D&o)||D&u)&&(d[M]=xn(D,i)):N<=i&&(n.expiredLanes|=D),p&=~D}}function Ct(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function yn(){var n=Bt;return Bt<<=1,!(Bt&4194240)&&(Bt=64),n}function un(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function Gt(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-St(i),n[i]=o}function cn(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-St(o),p=1<<d;i[d]=0,u[d]=-1,n[d]=-1,o&=~p}}function Rr(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-St(o),d=1<<u;d&i|n[u]&i&&(n[u]|=i),o&=~d}}var pt=0;function dd(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var hd,Ql,pd,md,gd,Jl=!1,aa=[],qi=null,$i=null,Ki=null,ao=new Map,lo=new Map,Zi=[],Rg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _d(n,i){switch(n){case"focusin":case"focusout":qi=null;break;case"dragenter":case"dragleave":$i=null;break;case"mouseover":case"mouseout":Ki=null;break;case"pointerover":case"pointerout":ao.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":lo.delete(i.pointerId)}}function uo(n,i,o,u,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[d]},i!==null&&(i=To(i),i!==null&&Ql(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Cg(n,i,o,u,d){switch(i){case"focusin":return qi=uo(qi,n,i,o,u,d),!0;case"dragenter":return $i=uo($i,n,i,o,u,d),!0;case"mouseover":return Ki=uo(Ki,n,i,o,u,d),!0;case"pointerover":var p=d.pointerId;return ao.set(p,uo(ao.get(p)||null,n,i,o,u,d)),!0;case"gotpointercapture":return p=d.pointerId,lo.set(p,uo(lo.get(p)||null,n,i,o,u,d)),!0}return!1}function vd(n){var i=Cr(n.target);if(i!==null){var o=di(i);if(o!==null){if(i=o.tag,i===13){if(i=ia(o),i!==null){n.blockedOn=i,gd(n.priority,function(){pd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function la(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=tu(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Tt=u,o.target.dispatchEvent(u),Tt=null}else return i=To(o),i!==null&&Ql(i),n.blockedOn=o,!1;i.shift()}return!0}function xd(n,i,o){la(n)&&o.delete(i)}function Pg(){Jl=!1,qi!==null&&la(qi)&&(qi=null),$i!==null&&la($i)&&($i=null),Ki!==null&&la(Ki)&&(Ki=null),ao.forEach(xd),lo.forEach(xd)}function co(n,i){n.blockedOn===i&&(n.blockedOn=null,Jl||(Jl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Pg)))}function fo(n){function i(d){return co(d,n)}if(0<aa.length){co(aa[0],n);for(var o=1;o<aa.length;o++){var u=aa[o];u.blockedOn===n&&(u.blockedOn=null)}}for(qi!==null&&co(qi,n),$i!==null&&co($i,n),Ki!==null&&co(Ki,n),ao.forEach(i),lo.forEach(i),o=0;o<Zi.length;o++)u=Zi[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<Zi.length&&(o=Zi[0],o.blockedOn===null);)vd(o),o.blockedOn===null&&Zi.shift()}var is=b.ReactCurrentBatchConfig,ua=!0;function bg(n,i,o,u){var d=pt,p=is.transition;is.transition=null;try{pt=1,eu(n,i,o,u)}finally{pt=d,is.transition=p}}function Dg(n,i,o,u){var d=pt,p=is.transition;is.transition=null;try{pt=4,eu(n,i,o,u)}finally{pt=d,is.transition=p}}function eu(n,i,o,u){if(ua){var d=tu(n,i,o,u);if(d===null)vu(n,i,u,ca,o),_d(n,u);else if(Cg(d,n,i,o,u))u.stopPropagation();else if(_d(n,u),i&4&&-1<Rg.indexOf(n)){for(;d!==null;){var p=To(d);if(p!==null&&hd(p),p=tu(n,i,o,u),p===null&&vu(n,i,u,ca,o),p===d)break;d=p}d!==null&&u.stopPropagation()}else vu(n,i,u,null,o)}}var ca=null;function tu(n,i,o,u){if(ca=null,n=G(u),n=Cr(n),n!==null)if(i=di(n),i===null)n=null;else if(o=i.tag,o===13){if(n=ia(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ca=n,null}function yd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ye()){case Re:return 1;case Le:return 4;case Fe:case Je:return 16;case et:return 536870912;default:return 16}default:return 16}}var Qi=null,nu=null,fa=null;function Sd(){if(fa)return fa;var n,i=nu,o=i.length,u,d="value"in Qi?Qi.value:Qi.textContent,p=d.length;for(n=0;n<o&&i[n]===d[n];n++);var M=o-n;for(u=1;u<=M&&i[o-u]===d[p-u];u++);return fa=d.slice(n,1<u?1-u:void 0)}function da(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function ha(){return!0}function Md(){return!1}function On(n){function i(o,u,d,p,M){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var D in n)n.hasOwnProperty(D)&&(o=n[D],this[D]=o?o(p):p[D]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ha:Md,this.isPropagationStopped=Md,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ha)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ha)},persist:function(){},isPersistent:ha}),i}var rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},iu=On(rs),ho=re({},rs,{view:0,detail:0}),Lg=On(ho),ru,su,po,pa=re({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:au,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==po&&(po&&n.type==="mousemove"?(ru=n.screenX-po.screenX,su=n.screenY-po.screenY):su=ru=0,po=n),ru)},movementY:function(n){return"movementY"in n?n.movementY:su}}),Ed=On(pa),Ig=re({},pa,{dataTransfer:0}),Ug=On(Ig),Ng=re({},ho,{relatedTarget:0}),ou=On(Ng),Fg=re({},rs,{animationName:0,elapsedTime:0,pseudoElement:0}),Og=On(Fg),kg=re({},rs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),zg=On(kg),Bg=re({},rs,{data:0}),Td=On(Bg),Hg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wg(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Gg[n])?!!i[n]:!1}function au(){return Wg}var Xg=re({},ho,{key:function(n){if(n.key){var i=Hg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=da(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Vg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:au,charCode:function(n){return n.type==="keypress"?da(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?da(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),jg=On(Xg),Yg=re({},pa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wd=On(Yg),qg=re({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:au}),$g=On(qg),Kg=re({},rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zg=On(Kg),Qg=re({},pa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Jg=On(Qg),e_=[9,13,27,32],lu=f&&"CompositionEvent"in window,mo=null;f&&"documentMode"in document&&(mo=document.documentMode);var t_=f&&"TextEvent"in window&&!mo,Ad=f&&(!lu||mo&&8<mo&&11>=mo),Rd=" ",Cd=!1;function Pd(n,i){switch(n){case"keyup":return e_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ss=!1;function n_(n,i){switch(n){case"compositionend":return bd(i);case"keypress":return i.which!==32?null:(Cd=!0,Rd);case"textInput":return n=i.data,n===Rd&&Cd?null:n;default:return null}}function i_(n,i){if(ss)return n==="compositionend"||!lu&&Pd(n,i)?(n=Sd(),fa=nu=Qi=null,ss=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ad&&i.locale!=="ko"?null:i.data;default:return null}}var r_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!r_[n.type]:i==="textarea"}function Ld(n,i,o,u){Pe(u),i=xa(i,"onChange"),0<i.length&&(o=new iu("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var go=null,_o=null;function s_(n){Kd(n,0)}function ma(n){var i=cs(n);if(mt(i))return n}function o_(n,i){if(n==="change")return i}var Id=!1;if(f){var uu;if(f){var cu="oninput"in document;if(!cu){var Ud=document.createElement("div");Ud.setAttribute("oninput","return;"),cu=typeof Ud.oninput=="function"}uu=cu}else uu=!1;Id=uu&&(!document.documentMode||9<document.documentMode)}function Nd(){go&&(go.detachEvent("onpropertychange",Fd),_o=go=null)}function Fd(n){if(n.propertyName==="value"&&ma(_o)){var i=[];Ld(i,_o,n,G(n)),An(s_,i)}}function a_(n,i,o){n==="focusin"?(Nd(),go=i,_o=o,go.attachEvent("onpropertychange",Fd)):n==="focusout"&&Nd()}function l_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ma(_o)}function u_(n,i){if(n==="click")return ma(i)}function c_(n,i){if(n==="input"||n==="change")return ma(i)}function f_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ti=typeof Object.is=="function"?Object.is:f_;function vo(n,i){if(ti(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!h.call(i,d)||!ti(n[d],i[d]))return!1}return!0}function Od(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function kd(n,i){var o=Od(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Od(o)}}function zd(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?zd(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Bd(){for(var n=window,i=Dt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=Dt(n.document)}return i}function fu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function d_(n){var i=Bd(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&zd(o.ownerDocument.documentElement,o)){if(u!==null&&fu(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,p=Math.min(u.start,d);u=u.end===void 0?p:Math.min(u.end,d),!n.extend&&p>u&&(d=u,u=p,p=d),d=kd(o,p);var M=kd(o,u);d&&M&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==M.node||n.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),p>u?(n.addRange(i),n.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var h_=f&&"documentMode"in document&&11>=document.documentMode,os=null,du=null,xo=null,hu=!1;function Hd(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;hu||os==null||os!==Dt(u)||(u=os,"selectionStart"in u&&fu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),xo&&vo(xo,u)||(xo=u,u=xa(du,"onSelect"),0<u.length&&(i=new iu("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=os)))}function ga(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var as={animationend:ga("Animation","AnimationEnd"),animationiteration:ga("Animation","AnimationIteration"),animationstart:ga("Animation","AnimationStart"),transitionend:ga("Transition","TransitionEnd")},pu={},Vd={};f&&(Vd=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function _a(n){if(pu[n])return pu[n];if(!as[n])return n;var i=as[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in Vd)return pu[n]=i[o];return n}var Gd=_a("animationend"),Wd=_a("animationiteration"),Xd=_a("animationstart"),jd=_a("transitionend"),Yd=new Map,qd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ji(n,i){Yd.set(n,i),l(i,[n])}for(var mu=0;mu<qd.length;mu++){var gu=qd[mu],p_=gu.toLowerCase(),m_=gu[0].toUpperCase()+gu.slice(1);Ji(p_,"on"+m_)}Ji(Gd,"onAnimationEnd"),Ji(Wd,"onAnimationIteration"),Ji(Xd,"onAnimationStart"),Ji("dblclick","onDoubleClick"),Ji("focusin","onFocus"),Ji("focusout","onBlur"),Ji(jd,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),g_=new Set("cancel close invalid load scroll toggle".split(" ").concat(yo));function $d(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,na(u,i,void 0,n),n.currentTarget=null}function Kd(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],d=u.event;u=u.listeners;e:{var p=void 0;if(i)for(var M=u.length-1;0<=M;M--){var D=u[M],N=D.instance,Q=D.currentTarget;if(D=D.listener,N!==p&&d.isPropagationStopped())break e;$d(d,D,Q),p=N}else for(M=0;M<u.length;M++){if(D=u[M],N=D.instance,Q=D.currentTarget,D=D.listener,N!==p&&d.isPropagationStopped())break e;$d(d,D,Q),p=N}}}if(wr)throw n=Yi,wr=!1,Yi=null,n}function Ut(n,i){var o=i[Tu];o===void 0&&(o=i[Tu]=new Set);var u=n+"__bubble";o.has(u)||(Zd(i,n,2,!1),o.add(u))}function _u(n,i,o){var u=0;i&&(u|=4),Zd(o,n,u,i)}var va="_reactListening"+Math.random().toString(36).slice(2);function So(n){if(!n[va]){n[va]=!0,s.forEach(function(o){o!=="selectionchange"&&(g_.has(o)||_u(o,!1,n),_u(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[va]||(i[va]=!0,_u("selectionchange",!1,i))}}function Zd(n,i,o,u){switch(yd(i)){case 1:var d=bg;break;case 4:d=Dg;break;default:d=eu}o=d.bind(null,i,o,n),d=void 0,!ts||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function vu(n,i,o,u,d){var p=u;if(!(i&1)&&!(i&2)&&u!==null)e:for(;;){if(u===null)return;var M=u.tag;if(M===3||M===4){var D=u.stateNode.containerInfo;if(D===d||D.nodeType===8&&D.parentNode===d)break;if(M===4)for(M=u.return;M!==null;){var N=M.tag;if((N===3||N===4)&&(N=M.stateNode.containerInfo,N===d||N.nodeType===8&&N.parentNode===d))return;M=M.return}for(;D!==null;){if(M=Cr(D),M===null)return;if(N=M.tag,N===5||N===6){u=p=M;continue e}D=D.parentNode}}u=u.return}An(function(){var Q=p,_e=G(o),xe=[];e:{var me=Yd.get(n);if(me!==void 0){var De=iu,Be=n;switch(n){case"keypress":if(da(o)===0)break e;case"keydown":case"keyup":De=jg;break;case"focusin":Be="focus",De=ou;break;case"focusout":Be="blur",De=ou;break;case"beforeblur":case"afterblur":De=ou;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":De=Ed;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":De=Ug;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":De=$g;break;case Gd:case Wd:case Xd:De=Og;break;case jd:De=Zg;break;case"scroll":De=Lg;break;case"wheel":De=Jg;break;case"copy":case"cut":case"paste":De=zg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":De=wd}var He=(i&4)!==0,Wt=!He&&n==="scroll",Y=He?me!==null?me+"Capture":null:me;He=[];for(var V=Q,$;V!==null;){$=V;var Ee=$.stateNode;if($.tag===5&&Ee!==null&&($=Ee,Y!==null&&(Ee=vn(V,Y),Ee!=null&&He.push(Mo(V,Ee,$)))),Wt)break;V=V.return}0<He.length&&(me=new De(me,Be,null,o,_e),xe.push({event:me,listeners:He}))}}if(!(i&7)){e:{if(me=n==="mouseover"||n==="pointerover",De=n==="mouseout"||n==="pointerout",me&&o!==Tt&&(Be=o.relatedTarget||o.fromElement)&&(Cr(Be)||Be[wi]))break e;if((De||me)&&(me=_e.window===_e?_e:(me=_e.ownerDocument)?me.defaultView||me.parentWindow:window,De?(Be=o.relatedTarget||o.toElement,De=Q,Be=Be?Cr(Be):null,Be!==null&&(Wt=di(Be),Be!==Wt||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(De=null,Be=Q),De!==Be)){if(He=Ed,Ee="onMouseLeave",Y="onMouseEnter",V="mouse",(n==="pointerout"||n==="pointerover")&&(He=wd,Ee="onPointerLeave",Y="onPointerEnter",V="pointer"),Wt=De==null?me:cs(De),$=Be==null?me:cs(Be),me=new He(Ee,V+"leave",De,o,_e),me.target=Wt,me.relatedTarget=$,Ee=null,Cr(_e)===Q&&(He=new He(Y,V+"enter",Be,o,_e),He.target=$,He.relatedTarget=Wt,Ee=He),Wt=Ee,De&&Be)t:{for(He=De,Y=Be,V=0,$=He;$;$=ls($))V++;for($=0,Ee=Y;Ee;Ee=ls(Ee))$++;for(;0<V-$;)He=ls(He),V--;for(;0<$-V;)Y=ls(Y),$--;for(;V--;){if(He===Y||Y!==null&&He===Y.alternate)break t;He=ls(He),Y=ls(Y)}He=null}else He=null;De!==null&&Qd(xe,me,De,He,!1),Be!==null&&Wt!==null&&Qd(xe,Wt,Be,He,!0)}}e:{if(me=Q?cs(Q):window,De=me.nodeName&&me.nodeName.toLowerCase(),De==="select"||De==="input"&&me.type==="file")var Ge=o_;else if(Dd(me))if(Id)Ge=c_;else{Ge=l_;var $e=a_}else(De=me.nodeName)&&De.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(Ge=u_);if(Ge&&(Ge=Ge(n,Q))){Ld(xe,Ge,o,_e);break e}$e&&$e(n,me,Q),n==="focusout"&&($e=me._wrapperState)&&$e.controlled&&me.type==="number"&&At(me,"number",me.value)}switch($e=Q?cs(Q):window,n){case"focusin":(Dd($e)||$e.contentEditable==="true")&&(os=$e,du=Q,xo=null);break;case"focusout":xo=du=os=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,Hd(xe,o,_e);break;case"selectionchange":if(h_)break;case"keydown":case"keyup":Hd(xe,o,_e)}var Ke;if(lu)e:{switch(n){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else ss?Pd(n,o)&&(tt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(tt="onCompositionStart");tt&&(Ad&&o.locale!=="ko"&&(ss||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&ss&&(Ke=Sd()):(Qi=_e,nu="value"in Qi?Qi.value:Qi.textContent,ss=!0)),$e=xa(Q,tt),0<$e.length&&(tt=new Td(tt,n,null,o,_e),xe.push({event:tt,listeners:$e}),Ke?tt.data=Ke:(Ke=bd(o),Ke!==null&&(tt.data=Ke)))),(Ke=t_?n_(n,o):i_(n,o))&&(Q=xa(Q,"onBeforeInput"),0<Q.length&&(_e=new Td("onBeforeInput","beforeinput",null,o,_e),xe.push({event:_e,listeners:Q}),_e.data=Ke))}Kd(xe,i)})}function Mo(n,i,o){return{instance:n,listener:i,currentTarget:o}}function xa(n,i){for(var o=i+"Capture",u=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=vn(n,o),p!=null&&u.unshift(Mo(n,p,d)),p=vn(n,i),p!=null&&u.push(Mo(n,p,d))),n=n.return}return u}function ls(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Qd(n,i,o,u,d){for(var p=i._reactName,M=[];o!==null&&o!==u;){var D=o,N=D.alternate,Q=D.stateNode;if(N!==null&&N===u)break;D.tag===5&&Q!==null&&(D=Q,d?(N=vn(o,p),N!=null&&M.unshift(Mo(o,N,D))):d||(N=vn(o,p),N!=null&&M.push(Mo(o,N,D)))),o=o.return}M.length!==0&&n.push({event:i,listeners:M})}var __=/\r\n?/g,v_=/\u0000|\uFFFD/g;function Jd(n){return(typeof n=="string"?n:""+n).replace(__,`
`).replace(v_,"")}function ya(n,i,o){if(i=Jd(i),Jd(n)!==i&&o)throw Error(t(425))}function Sa(){}var xu=null,yu=null;function Su(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Mu=typeof setTimeout=="function"?setTimeout:void 0,x_=typeof clearTimeout=="function"?clearTimeout:void 0,eh=typeof Promise=="function"?Promise:void 0,y_=typeof queueMicrotask=="function"?queueMicrotask:typeof eh<"u"?function(n){return eh.resolve(null).then(n).catch(S_)}:Mu;function S_(n){setTimeout(function(){throw n})}function Eu(n,i){var o=i,u=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(u===0){n.removeChild(d),fo(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=d}while(o);fo(i)}function er(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function th(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var us=Math.random().toString(36).slice(2),hi="__reactFiber$"+us,Eo="__reactProps$"+us,wi="__reactContainer$"+us,Tu="__reactEvents$"+us,M_="__reactListeners$"+us,E_="__reactHandles$"+us;function Cr(n){var i=n[hi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[wi]||o[hi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=th(n);n!==null;){if(o=n[hi])return o;n=th(n)}return i}n=o,o=n.parentNode}return null}function To(n){return n=n[hi]||n[wi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function cs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ma(n){return n[Eo]||null}var wu=[],fs=-1;function tr(n){return{current:n}}function Nt(n){0>fs||(n.current=wu[fs],wu[fs]=null,fs--)}function Lt(n,i){fs++,wu[fs]=n.current,n.current=i}var nr={},fn=tr(nr),Rn=tr(!1),Pr=nr;function ds(n,i){var o=n.type.contextTypes;if(!o)return nr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in o)d[p]=i[p];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Cn(n){return n=n.childContextTypes,n!=null}function Ea(){Nt(Rn),Nt(fn)}function nh(n,i,o){if(fn.current!==nr)throw Error(t(168));Lt(fn,i),Lt(Rn,o)}function ih(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,ve(n)||"Unknown",d));return re({},o,u)}function Ta(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||nr,Pr=fn.current,Lt(fn,n),Lt(Rn,Rn.current),!0}function rh(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=ih(n,i,Pr),u.__reactInternalMemoizedMergedChildContext=n,Nt(Rn),Nt(fn),Lt(fn,n)):Nt(Rn),Lt(Rn,o)}var Ai=null,wa=!1,Au=!1;function sh(n){Ai===null?Ai=[n]:Ai.push(n)}function T_(n){wa=!0,sh(n)}function ir(){if(!Au&&Ai!==null){Au=!0;var n=0,i=pt;try{var o=Ai;for(pt=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}Ai=null,wa=!1}catch(d){throw Ai!==null&&(Ai=Ai.slice(n+1)),A(Re,ir),d}finally{pt=i,Au=!1}}return null}var hs=[],ps=0,Aa=null,Ra=0,Gn=[],Wn=0,br=null,Ri=1,Ci="";function Dr(n,i){hs[ps++]=Ra,hs[ps++]=Aa,Aa=n,Ra=i}function oh(n,i,o){Gn[Wn++]=Ri,Gn[Wn++]=Ci,Gn[Wn++]=br,br=n;var u=Ri;n=Ci;var d=32-St(u)-1;u&=~(1<<d),o+=1;var p=32-St(i)+d;if(30<p){var M=d-d%5;p=(u&(1<<M)-1).toString(32),u>>=M,d-=M,Ri=1<<32-St(i)+d|o<<d|u,Ci=p+n}else Ri=1<<p|o<<d|u,Ci=n}function Ru(n){n.return!==null&&(Dr(n,1),oh(n,1,0))}function Cu(n){for(;n===Aa;)Aa=hs[--ps],hs[ps]=null,Ra=hs[--ps],hs[ps]=null;for(;n===br;)br=Gn[--Wn],Gn[Wn]=null,Ci=Gn[--Wn],Gn[Wn]=null,Ri=Gn[--Wn],Gn[Wn]=null}var kn=null,zn=null,Ot=!1,ni=null;function ah(n,i){var o=qn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function lh(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,kn=n,zn=er(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,kn=n,zn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=br!==null?{id:Ri,overflow:Ci}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=qn(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,kn=n,zn=null,!0):!1;default:return!1}}function Pu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function bu(n){if(Ot){var i=zn;if(i){var o=i;if(!lh(n,i)){if(Pu(n))throw Error(t(418));i=er(o.nextSibling);var u=kn;i&&lh(n,i)?ah(u,o):(n.flags=n.flags&-4097|2,Ot=!1,kn=n)}}else{if(Pu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ot=!1,kn=n}}}function uh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;kn=n}function Ca(n){if(n!==kn)return!1;if(!Ot)return uh(n),Ot=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Su(n.type,n.memoizedProps)),i&&(i=zn)){if(Pu(n))throw ch(),Error(t(418));for(;i;)ah(n,i),i=er(i.nextSibling)}if(uh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){zn=er(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}zn=null}}else zn=kn?er(n.stateNode.nextSibling):null;return!0}function ch(){for(var n=zn;n;)n=er(n.nextSibling)}function ms(){zn=kn=null,Ot=!1}function Du(n){ni===null?ni=[n]:ni.push(n)}var w_=b.ReactCurrentBatchConfig;function wo(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var d=u,p=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(M){var D=d.refs;M===null?delete D[p]:D[p]=M},i._stringRef=p,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Pa(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function fh(n){var i=n._init;return i(n._payload)}function dh(n){function i(Y,V){if(n){var $=Y.deletions;$===null?(Y.deletions=[V],Y.flags|=16):$.push(V)}}function o(Y,V){if(!n)return null;for(;V!==null;)i(Y,V),V=V.sibling;return null}function u(Y,V){for(Y=new Map;V!==null;)V.key!==null?Y.set(V.key,V):Y.set(V.index,V),V=V.sibling;return Y}function d(Y,V){return Y=fr(Y,V),Y.index=0,Y.sibling=null,Y}function p(Y,V,$){return Y.index=$,n?($=Y.alternate,$!==null?($=$.index,$<V?(Y.flags|=2,V):$):(Y.flags|=2,V)):(Y.flags|=1048576,V)}function M(Y){return n&&Y.alternate===null&&(Y.flags|=2),Y}function D(Y,V,$,Ee){return V===null||V.tag!==6?(V=Mc($,Y.mode,Ee),V.return=Y,V):(V=d(V,$),V.return=Y,V)}function N(Y,V,$,Ee){var Ge=$.type;return Ge===F?_e(Y,V,$.props.children,Ee,$.key):V!==null&&(V.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===se&&fh(Ge)===V.type)?(Ee=d(V,$.props),Ee.ref=wo(Y,V,$),Ee.return=Y,Ee):(Ee=Ja($.type,$.key,$.props,null,Y.mode,Ee),Ee.ref=wo(Y,V,$),Ee.return=Y,Ee)}function Q(Y,V,$,Ee){return V===null||V.tag!==4||V.stateNode.containerInfo!==$.containerInfo||V.stateNode.implementation!==$.implementation?(V=Ec($,Y.mode,Ee),V.return=Y,V):(V=d(V,$.children||[]),V.return=Y,V)}function _e(Y,V,$,Ee,Ge){return V===null||V.tag!==7?(V=zr($,Y.mode,Ee,Ge),V.return=Y,V):(V=d(V,$),V.return=Y,V)}function xe(Y,V,$){if(typeof V=="string"&&V!==""||typeof V=="number")return V=Mc(""+V,Y.mode,$),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case X:return $=Ja(V.type,V.key,V.props,null,Y.mode,$),$.ref=wo(Y,null,V),$.return=Y,$;case z:return V=Ec(V,Y.mode,$),V.return=Y,V;case se:var Ee=V._init;return xe(Y,Ee(V._payload),$)}if(We(V)||ae(V))return V=zr(V,Y.mode,$,null),V.return=Y,V;Pa(Y,V)}return null}function me(Y,V,$,Ee){var Ge=V!==null?V.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return Ge!==null?null:D(Y,V,""+$,Ee);if(typeof $=="object"&&$!==null){switch($.$$typeof){case X:return $.key===Ge?N(Y,V,$,Ee):null;case z:return $.key===Ge?Q(Y,V,$,Ee):null;case se:return Ge=$._init,me(Y,V,Ge($._payload),Ee)}if(We($)||ae($))return Ge!==null?null:_e(Y,V,$,Ee,null);Pa(Y,$)}return null}function De(Y,V,$,Ee,Ge){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Y=Y.get($)||null,D(V,Y,""+Ee,Ge);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case X:return Y=Y.get(Ee.key===null?$:Ee.key)||null,N(V,Y,Ee,Ge);case z:return Y=Y.get(Ee.key===null?$:Ee.key)||null,Q(V,Y,Ee,Ge);case se:var $e=Ee._init;return De(Y,V,$,$e(Ee._payload),Ge)}if(We(Ee)||ae(Ee))return Y=Y.get($)||null,_e(V,Y,Ee,Ge,null);Pa(V,Ee)}return null}function Be(Y,V,$,Ee){for(var Ge=null,$e=null,Ke=V,tt=V=0,nn=null;Ke!==null&&tt<$.length;tt++){Ke.index>tt?(nn=Ke,Ke=null):nn=Ke.sibling;var Mt=me(Y,Ke,$[tt],Ee);if(Mt===null){Ke===null&&(Ke=nn);break}n&&Ke&&Mt.alternate===null&&i(Y,Ke),V=p(Mt,V,tt),$e===null?Ge=Mt:$e.sibling=Mt,$e=Mt,Ke=nn}if(tt===$.length)return o(Y,Ke),Ot&&Dr(Y,tt),Ge;if(Ke===null){for(;tt<$.length;tt++)Ke=xe(Y,$[tt],Ee),Ke!==null&&(V=p(Ke,V,tt),$e===null?Ge=Ke:$e.sibling=Ke,$e=Ke);return Ot&&Dr(Y,tt),Ge}for(Ke=u(Y,Ke);tt<$.length;tt++)nn=De(Ke,Y,tt,$[tt],Ee),nn!==null&&(n&&nn.alternate!==null&&Ke.delete(nn.key===null?tt:nn.key),V=p(nn,V,tt),$e===null?Ge=nn:$e.sibling=nn,$e=nn);return n&&Ke.forEach(function(dr){return i(Y,dr)}),Ot&&Dr(Y,tt),Ge}function He(Y,V,$,Ee){var Ge=ae($);if(typeof Ge!="function")throw Error(t(150));if($=Ge.call($),$==null)throw Error(t(151));for(var $e=Ge=null,Ke=V,tt=V=0,nn=null,Mt=$.next();Ke!==null&&!Mt.done;tt++,Mt=$.next()){Ke.index>tt?(nn=Ke,Ke=null):nn=Ke.sibling;var dr=me(Y,Ke,Mt.value,Ee);if(dr===null){Ke===null&&(Ke=nn);break}n&&Ke&&dr.alternate===null&&i(Y,Ke),V=p(dr,V,tt),$e===null?Ge=dr:$e.sibling=dr,$e=dr,Ke=nn}if(Mt.done)return o(Y,Ke),Ot&&Dr(Y,tt),Ge;if(Ke===null){for(;!Mt.done;tt++,Mt=$.next())Mt=xe(Y,Mt.value,Ee),Mt!==null&&(V=p(Mt,V,tt),$e===null?Ge=Mt:$e.sibling=Mt,$e=Mt);return Ot&&Dr(Y,tt),Ge}for(Ke=u(Y,Ke);!Mt.done;tt++,Mt=$.next())Mt=De(Ke,Y,tt,Mt.value,Ee),Mt!==null&&(n&&Mt.alternate!==null&&Ke.delete(Mt.key===null?tt:Mt.key),V=p(Mt,V,tt),$e===null?Ge=Mt:$e.sibling=Mt,$e=Mt);return n&&Ke.forEach(function(iv){return i(Y,iv)}),Ot&&Dr(Y,tt),Ge}function Wt(Y,V,$,Ee){if(typeof $=="object"&&$!==null&&$.type===F&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case X:e:{for(var Ge=$.key,$e=V;$e!==null;){if($e.key===Ge){if(Ge=$.type,Ge===F){if($e.tag===7){o(Y,$e.sibling),V=d($e,$.props.children),V.return=Y,Y=V;break e}}else if($e.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===se&&fh(Ge)===$e.type){o(Y,$e.sibling),V=d($e,$.props),V.ref=wo(Y,$e,$),V.return=Y,Y=V;break e}o(Y,$e);break}else i(Y,$e);$e=$e.sibling}$.type===F?(V=zr($.props.children,Y.mode,Ee,$.key),V.return=Y,Y=V):(Ee=Ja($.type,$.key,$.props,null,Y.mode,Ee),Ee.ref=wo(Y,V,$),Ee.return=Y,Y=Ee)}return M(Y);case z:e:{for($e=$.key;V!==null;){if(V.key===$e)if(V.tag===4&&V.stateNode.containerInfo===$.containerInfo&&V.stateNode.implementation===$.implementation){o(Y,V.sibling),V=d(V,$.children||[]),V.return=Y,Y=V;break e}else{o(Y,V);break}else i(Y,V);V=V.sibling}V=Ec($,Y.mode,Ee),V.return=Y,Y=V}return M(Y);case se:return $e=$._init,Wt(Y,V,$e($._payload),Ee)}if(We($))return Be(Y,V,$,Ee);if(ae($))return He(Y,V,$,Ee);Pa(Y,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,V!==null&&V.tag===6?(o(Y,V.sibling),V=d(V,$),V.return=Y,Y=V):(o(Y,V),V=Mc($,Y.mode,Ee),V.return=Y,Y=V),M(Y)):o(Y,V)}return Wt}var gs=dh(!0),hh=dh(!1),ba=tr(null),Da=null,_s=null,Lu=null;function Iu(){Lu=_s=Da=null}function Uu(n){var i=ba.current;Nt(ba),n._currentValue=i}function Nu(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function vs(n,i){Da=n,Lu=_s=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&i&&(Pn=!0),n.firstContext=null)}function Xn(n){var i=n._currentValue;if(Lu!==n)if(n={context:n,memoizedValue:i,next:null},_s===null){if(Da===null)throw Error(t(308));_s=n,Da.dependencies={lanes:0,firstContext:n}}else _s=_s.next=n;return i}var Lr=null;function Fu(n){Lr===null?Lr=[n]:Lr.push(n)}function ph(n,i,o,u){var d=i.interleaved;return d===null?(o.next=o,Fu(i)):(o.next=d.next,d.next=o),i.interleaved=o,Pi(n,u)}function Pi(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var rr=!1;function Ou(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function bi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function sr(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,xt&2){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Pi(n,o)}return d=u.interleaved,d===null?(i.next=i,Fu(u)):(i.next=d.next,d.next=i),u.interleaved=i,Pi(n,o)}function La(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,Rr(n,o)}}function gh(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?d=p=M:p=p.next=M,o=o.next}while(o!==null);p===null?d=p=i:p=p.next=i}else d=p=i;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Ia(n,i,o,u){var d=n.updateQueue;rr=!1;var p=d.firstBaseUpdate,M=d.lastBaseUpdate,D=d.shared.pending;if(D!==null){d.shared.pending=null;var N=D,Q=N.next;N.next=null,M===null?p=Q:M.next=Q,M=N;var _e=n.alternate;_e!==null&&(_e=_e.updateQueue,D=_e.lastBaseUpdate,D!==M&&(D===null?_e.firstBaseUpdate=Q:D.next=Q,_e.lastBaseUpdate=N))}if(p!==null){var xe=d.baseState;M=0,_e=Q=N=null,D=p;do{var me=D.lane,De=D.eventTime;if((u&me)===me){_e!==null&&(_e=_e.next={eventTime:De,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var Be=n,He=D;switch(me=i,De=o,He.tag){case 1:if(Be=He.payload,typeof Be=="function"){xe=Be.call(De,xe,me);break e}xe=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=He.payload,me=typeof Be=="function"?Be.call(De,xe,me):Be,me==null)break e;xe=re({},xe,me);break e;case 2:rr=!0}}D.callback!==null&&D.lane!==0&&(n.flags|=64,me=d.effects,me===null?d.effects=[D]:me.push(D))}else De={eventTime:De,lane:me,tag:D.tag,payload:D.payload,callback:D.callback,next:null},_e===null?(Q=_e=De,N=xe):_e=_e.next=De,M|=me;if(D=D.next,D===null){if(D=d.shared.pending,D===null)break;me=D,D=me.next,me.next=null,d.lastBaseUpdate=me,d.shared.pending=null}}while(!0);if(_e===null&&(N=xe),d.baseState=N,d.firstBaseUpdate=Q,d.lastBaseUpdate=_e,i=d.shared.interleaved,i!==null){d=i;do M|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);Nr|=M,n.lanes=M,n.memoizedState=xe}}function _h(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=o,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var Ao={},pi=tr(Ao),Ro=tr(Ao),Co=tr(Ao);function Ir(n){if(n===Ao)throw Error(t(174));return n}function ku(n,i){switch(Lt(Co,i),Lt(Ro,n),Lt(pi,Ao),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ve(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Ve(i,n)}Nt(pi),Lt(pi,i)}function xs(){Nt(pi),Nt(Ro),Nt(Co)}function vh(n){Ir(Co.current);var i=Ir(pi.current),o=Ve(i,n.type);i!==o&&(Lt(Ro,n),Lt(pi,o))}function zu(n){Ro.current===n&&(Nt(pi),Nt(Ro))}var kt=tr(0);function Ua(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Bu=[];function Hu(){for(var n=0;n<Bu.length;n++)Bu[n]._workInProgressVersionPrimary=null;Bu.length=0}var Na=b.ReactCurrentDispatcher,Vu=b.ReactCurrentBatchConfig,Ur=0,zt=null,$t=null,en=null,Fa=!1,Po=!1,bo=0,A_=0;function dn(){throw Error(t(321))}function Gu(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!ti(n[o],i[o]))return!1;return!0}function Wu(n,i,o,u,d,p){if(Ur=p,zt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Na.current=n===null||n.memoizedState===null?b_:D_,n=o(u,d),Po){p=0;do{if(Po=!1,bo=0,25<=p)throw Error(t(301));p+=1,en=$t=null,i.updateQueue=null,Na.current=L_,n=o(u,d)}while(Po)}if(Na.current=za,i=$t!==null&&$t.next!==null,Ur=0,en=$t=zt=null,Fa=!1,i)throw Error(t(300));return n}function Xu(){var n=bo!==0;return bo=0,n}function mi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?zt.memoizedState=en=n:en=en.next=n,en}function jn(){if($t===null){var n=zt.alternate;n=n!==null?n.memoizedState:null}else n=$t.next;var i=en===null?zt.memoizedState:en.next;if(i!==null)en=i,$t=n;else{if(n===null)throw Error(t(310));$t=n,n={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},en===null?zt.memoizedState=en=n:en=en.next=n}return en}function Do(n,i){return typeof i=="function"?i(n):i}function ju(n){var i=jn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=$t,d=u.baseQueue,p=o.pending;if(p!==null){if(d!==null){var M=d.next;d.next=p.next,p.next=M}u.baseQueue=d=p,o.pending=null}if(d!==null){p=d.next,u=u.baseState;var D=M=null,N=null,Q=p;do{var _e=Q.lane;if((Ur&_e)===_e)N!==null&&(N=N.next={lane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),u=Q.hasEagerState?Q.eagerState:n(u,Q.action);else{var xe={lane:_e,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null};N===null?(D=N=xe,M=u):N=N.next=xe,zt.lanes|=_e,Nr|=_e}Q=Q.next}while(Q!==null&&Q!==p);N===null?M=u:N.next=D,ti(u,i.memoizedState)||(Pn=!0),i.memoizedState=u,i.baseState=M,i.baseQueue=N,o.lastRenderedState=u}if(n=o.interleaved,n!==null){d=n;do p=d.lane,zt.lanes|=p,Nr|=p,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Yu(n){var i=jn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,d=o.pending,p=i.memoizedState;if(d!==null){o.pending=null;var M=d=d.next;do p=n(p,M.action),M=M.next;while(M!==d);ti(p,i.memoizedState)||(Pn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,u]}function xh(){}function yh(n,i){var o=zt,u=jn(),d=i(),p=!ti(u.memoizedState,d);if(p&&(u.memoizedState=d,Pn=!0),u=u.queue,qu(Eh.bind(null,o,u,n),[n]),u.getSnapshot!==i||p||en!==null&&en.memoizedState.tag&1){if(o.flags|=2048,Lo(9,Mh.bind(null,o,u,d,i),void 0,null),tn===null)throw Error(t(349));Ur&30||Sh(o,i,d)}return d}function Sh(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Mh(n,i,o,u){i.value=o,i.getSnapshot=u,Th(i)&&wh(n)}function Eh(n,i,o){return o(function(){Th(i)&&wh(n)})}function Th(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!ti(n,o)}catch{return!0}}function wh(n){var i=Pi(n,1);i!==null&&oi(i,n,1,-1)}function Ah(n){var i=mi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Do,lastRenderedState:n},i.queue=n,n=n.dispatch=P_.bind(null,zt,n),[i.memoizedState,n]}function Lo(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function Rh(){return jn().memoizedState}function Oa(n,i,o,u){var d=mi();zt.flags|=n,d.memoizedState=Lo(1|i,o,void 0,u===void 0?null:u)}function ka(n,i,o,u){var d=jn();u=u===void 0?null:u;var p=void 0;if($t!==null){var M=$t.memoizedState;if(p=M.destroy,u!==null&&Gu(u,M.deps)){d.memoizedState=Lo(i,o,p,u);return}}zt.flags|=n,d.memoizedState=Lo(1|i,o,p,u)}function Ch(n,i){return Oa(8390656,8,n,i)}function qu(n,i){return ka(2048,8,n,i)}function Ph(n,i){return ka(4,2,n,i)}function bh(n,i){return ka(4,4,n,i)}function Dh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Lh(n,i,o){return o=o!=null?o.concat([n]):null,ka(4,4,Dh.bind(null,i,n),o)}function $u(){}function Ih(n,i){var o=jn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Gu(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function Uh(n,i){var o=jn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Gu(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function Nh(n,i,o){return Ur&21?(ti(o,i)||(o=yn(),zt.lanes|=o,Nr|=o,n.baseState=!0),i):(n.baseState&&(n.baseState=!1,Pn=!0),n.memoizedState=o)}function R_(n,i){var o=pt;pt=o!==0&&4>o?o:4,n(!0);var u=Vu.transition;Vu.transition={};try{n(!1),i()}finally{pt=o,Vu.transition=u}}function Fh(){return jn().memoizedState}function C_(n,i,o){var u=ur(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Oh(n))kh(i,o);else if(o=ph(n,i,o,u),o!==null){var d=Mn();oi(o,n,u,d),zh(o,i,u)}}function P_(n,i,o){var u=ur(n),d={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Oh(n))kh(i,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var M=i.lastRenderedState,D=p(M,o);if(d.hasEagerState=!0,d.eagerState=D,ti(D,M)){var N=i.interleaved;N===null?(d.next=d,Fu(i)):(d.next=N.next,N.next=d),i.interleaved=d;return}}catch{}finally{}o=ph(n,i,d,u),o!==null&&(d=Mn(),oi(o,n,u,d),zh(o,i,u))}}function Oh(n){var i=n.alternate;return n===zt||i!==null&&i===zt}function kh(n,i){Po=Fa=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function zh(n,i,o){if(o&4194240){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,Rr(n,o)}}var za={readContext:Xn,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useInsertionEffect:dn,useLayoutEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useMutableSource:dn,useSyncExternalStore:dn,useId:dn,unstable_isNewReconciler:!1},b_={readContext:Xn,useCallback:function(n,i){return mi().memoizedState=[n,i===void 0?null:i],n},useContext:Xn,useEffect:Ch,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Oa(4194308,4,Dh.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Oa(4194308,4,n,i)},useInsertionEffect:function(n,i){return Oa(4,2,n,i)},useMemo:function(n,i){var o=mi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=mi();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=C_.bind(null,zt,n),[u.memoizedState,n]},useRef:function(n){var i=mi();return n={current:n},i.memoizedState=n},useState:Ah,useDebugValue:$u,useDeferredValue:function(n){return mi().memoizedState=n},useTransition:function(){var n=Ah(!1),i=n[0];return n=R_.bind(null,n[1]),mi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=zt,d=mi();if(Ot){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),tn===null)throw Error(t(349));Ur&30||Sh(u,i,o)}d.memoizedState=o;var p={value:o,getSnapshot:i};return d.queue=p,Ch(Eh.bind(null,u,p,n),[n]),u.flags|=2048,Lo(9,Mh.bind(null,u,p,o,i),void 0,null),o},useId:function(){var n=mi(),i=tn.identifierPrefix;if(Ot){var o=Ci,u=Ri;o=(u&~(1<<32-St(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=bo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=A_++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},D_={readContext:Xn,useCallback:Ih,useContext:Xn,useEffect:qu,useImperativeHandle:Lh,useInsertionEffect:Ph,useLayoutEffect:bh,useMemo:Uh,useReducer:ju,useRef:Rh,useState:function(){return ju(Do)},useDebugValue:$u,useDeferredValue:function(n){var i=jn();return Nh(i,$t.memoizedState,n)},useTransition:function(){var n=ju(Do)[0],i=jn().memoizedState;return[n,i]},useMutableSource:xh,useSyncExternalStore:yh,useId:Fh,unstable_isNewReconciler:!1},L_={readContext:Xn,useCallback:Ih,useContext:Xn,useEffect:qu,useImperativeHandle:Lh,useInsertionEffect:Ph,useLayoutEffect:bh,useMemo:Uh,useReducer:Yu,useRef:Rh,useState:function(){return Yu(Do)},useDebugValue:$u,useDeferredValue:function(n){var i=jn();return $t===null?i.memoizedState=n:Nh(i,$t.memoizedState,n)},useTransition:function(){var n=Yu(Do)[0],i=jn().memoizedState;return[n,i]},useMutableSource:xh,useSyncExternalStore:yh,useId:Fh,unstable_isNewReconciler:!1};function ii(n,i){if(n&&n.defaultProps){i=re({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function Ku(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:re({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Ba={isMounted:function(n){return(n=n._reactInternals)?di(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=Mn(),d=ur(n),p=bi(u,d);p.payload=i,o!=null&&(p.callback=o),i=sr(n,p,d),i!==null&&(oi(i,n,d,u),La(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=Mn(),d=ur(n),p=bi(u,d);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=sr(n,p,d),i!==null&&(oi(i,n,d,u),La(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Mn(),u=ur(n),d=bi(o,u);d.tag=2,i!=null&&(d.callback=i),i=sr(n,d,u),i!==null&&(oi(i,n,u,o),La(i,n,u))}};function Bh(n,i,o,u,d,p,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,p,M):i.prototype&&i.prototype.isPureReactComponent?!vo(o,u)||!vo(d,p):!0}function Hh(n,i,o){var u=!1,d=nr,p=i.contextType;return typeof p=="object"&&p!==null?p=Xn(p):(d=Cn(i)?Pr:fn.current,u=i.contextTypes,p=(u=u!=null)?ds(n,d):nr),i=new i(o,p),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ba,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),i}function Vh(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&Ba.enqueueReplaceState(i,i.state,null)}function Zu(n,i,o,u){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},Ou(n);var p=i.contextType;typeof p=="object"&&p!==null?d.context=Xn(p):(p=Cn(i)?Pr:fn.current,d.context=ds(n,p)),d.state=n.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Ku(n,i,p,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Ba.enqueueReplaceState(d,d.state,null),Ia(n,o,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function ys(n,i){try{var o="",u=i;do o+=ue(u),u=u.return;while(u);var d=o}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:i,stack:d,digest:null}}function Qu(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function Ju(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var I_=typeof WeakMap=="function"?WeakMap:Map;function Gh(n,i,o){o=bi(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){Ya||(Ya=!0,pc=u),Ju(n,i)},o}function Wh(n,i,o){o=bi(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;o.payload=function(){return u(d)},o.callback=function(){Ju(n,i)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){Ju(n,i),typeof u!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function Xh(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new I_;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(o)||(d.add(o),n=Y_.bind(null,n,i,o),i.then(n,n))}function jh(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Yh(n,i,o,u,d){return n.mode&1?(n.flags|=65536,n.lanes=d,n):(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=bi(-1,1),i.tag=2,sr(o,i,1))),o.lanes|=1),n)}var U_=b.ReactCurrentOwner,Pn=!1;function Sn(n,i,o,u){i.child=n===null?hh(i,null,o,u):gs(i,n.child,o,u)}function qh(n,i,o,u,d){o=o.render;var p=i.ref;return vs(i,d),u=Wu(n,i,o,u,p,d),o=Xu(),n!==null&&!Pn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Di(n,i,d)):(Ot&&o&&Ru(i),i.flags|=1,Sn(n,i,u,d),i.child)}function $h(n,i,o,u,d){if(n===null){var p=o.type;return typeof p=="function"&&!Sc(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,Kh(n,i,p,u,d)):(n=Ja(o.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(p=n.child,!(n.lanes&d)){var M=p.memoizedProps;if(o=o.compare,o=o!==null?o:vo,o(M,u)&&n.ref===i.ref)return Di(n,i,d)}return i.flags|=1,n=fr(p,u),n.ref=i.ref,n.return=i,i.child=n}function Kh(n,i,o,u,d){if(n!==null){var p=n.memoizedProps;if(vo(p,u)&&n.ref===i.ref)if(Pn=!1,i.pendingProps=u=p,(n.lanes&d)!==0)n.flags&131072&&(Pn=!0);else return i.lanes=n.lanes,Di(n,i,d)}return ec(n,i,o,u,d)}function Zh(n,i,o){var u=i.pendingProps,d=u.children,p=n!==null?n.memoizedState:null;if(u.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(Ms,Bn),Bn|=o;else{if(!(o&1073741824))return n=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Lt(Ms,Bn),Bn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:o,Lt(Ms,Bn),Bn|=u}else p!==null?(u=p.baseLanes|o,i.memoizedState=null):u=o,Lt(Ms,Bn),Bn|=u;return Sn(n,i,d,o),i.child}function Qh(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function ec(n,i,o,u,d){var p=Cn(o)?Pr:fn.current;return p=ds(i,p),vs(i,d),o=Wu(n,i,o,u,p,d),u=Xu(),n!==null&&!Pn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Di(n,i,d)):(Ot&&u&&Ru(i),i.flags|=1,Sn(n,i,o,d),i.child)}function Jh(n,i,o,u,d){if(Cn(o)){var p=!0;Ta(i)}else p=!1;if(vs(i,d),i.stateNode===null)Va(n,i),Hh(i,o,u),Zu(i,o,u,d),u=!0;else if(n===null){var M=i.stateNode,D=i.memoizedProps;M.props=D;var N=M.context,Q=o.contextType;typeof Q=="object"&&Q!==null?Q=Xn(Q):(Q=Cn(o)?Pr:fn.current,Q=ds(i,Q));var _e=o.getDerivedStateFromProps,xe=typeof _e=="function"||typeof M.getSnapshotBeforeUpdate=="function";xe||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==u||N!==Q)&&Vh(i,M,u,Q),rr=!1;var me=i.memoizedState;M.state=me,Ia(i,u,M,d),N=i.memoizedState,D!==u||me!==N||Rn.current||rr?(typeof _e=="function"&&(Ku(i,o,_e,u),N=i.memoizedState),(D=rr||Bh(i,o,D,u,me,N,Q))?(xe||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=N),M.props=u,M.state=N,M.context=Q,u=D):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{M=i.stateNode,mh(n,i),D=i.memoizedProps,Q=i.type===i.elementType?D:ii(i.type,D),M.props=Q,xe=i.pendingProps,me=M.context,N=o.contextType,typeof N=="object"&&N!==null?N=Xn(N):(N=Cn(o)?Pr:fn.current,N=ds(i,N));var De=o.getDerivedStateFromProps;(_e=typeof De=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==xe||me!==N)&&Vh(i,M,u,N),rr=!1,me=i.memoizedState,M.state=me,Ia(i,u,M,d);var Be=i.memoizedState;D!==xe||me!==Be||Rn.current||rr?(typeof De=="function"&&(Ku(i,o,De,u),Be=i.memoizedState),(Q=rr||Bh(i,o,Q,u,me,Be,N)||!1)?(_e||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(u,Be,N),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(u,Be,N)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||D===n.memoizedProps&&me===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===n.memoizedProps&&me===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Be),M.props=u,M.state=Be,M.context=N,u=Q):(typeof M.componentDidUpdate!="function"||D===n.memoizedProps&&me===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===n.memoizedProps&&me===n.memoizedState||(i.flags|=1024),u=!1)}return tc(n,i,o,u,p,d)}function tc(n,i,o,u,d,p){Qh(n,i);var M=(i.flags&128)!==0;if(!u&&!M)return d&&rh(i,o,!1),Di(n,i,p);u=i.stateNode,U_.current=i;var D=M&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&M?(i.child=gs(i,n.child,null,p),i.child=gs(i,null,D,p)):Sn(n,i,D,p),i.memoizedState=u.state,d&&rh(i,o,!0),i.child}function ep(n){var i=n.stateNode;i.pendingContext?nh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&nh(n,i.context,!1),ku(n,i.containerInfo)}function tp(n,i,o,u,d){return ms(),Du(d),i.flags|=256,Sn(n,i,o,u),i.child}var nc={dehydrated:null,treeContext:null,retryLane:0};function ic(n){return{baseLanes:n,cachePool:null,transitions:null}}function np(n,i,o){var u=i.pendingProps,d=kt.current,p=!1,M=(i.flags&128)!==0,D;if((D=M)||(D=n!==null&&n.memoizedState===null?!1:(d&2)!==0),D?(p=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Lt(kt,d&1),n===null)return bu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(i.mode&1?n.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(M=u.children,n=u.fallback,p?(u=i.mode,p=i.child,M={mode:"hidden",children:M},!(u&1)&&p!==null?(p.childLanes=0,p.pendingProps=M):p=el(M,u,0,null),n=zr(n,u,o,null),p.return=i,n.return=i,p.sibling=n,i.child=p,i.child.memoizedState=ic(o),i.memoizedState=nc,n):rc(i,M));if(d=n.memoizedState,d!==null&&(D=d.dehydrated,D!==null))return N_(n,i,M,u,D,d,o);if(p){p=u.fallback,M=i.mode,d=n.child,D=d.sibling;var N={mode:"hidden",children:u.children};return!(M&1)&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=N,i.deletions=null):(u=fr(d,N),u.subtreeFlags=d.subtreeFlags&14680064),D!==null?p=fr(D,p):(p=zr(p,M,o,null),p.flags|=2),p.return=i,u.return=i,u.sibling=p,i.child=u,u=p,p=i.child,M=n.child.memoizedState,M=M===null?ic(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},p.memoizedState=M,p.childLanes=n.childLanes&~o,i.memoizedState=nc,u}return p=n.child,n=p.sibling,u=fr(p,{mode:"visible",children:u.children}),!(i.mode&1)&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function rc(n,i){return i=el({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Ha(n,i,o,u){return u!==null&&Du(u),gs(i,n.child,null,o),n=rc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function N_(n,i,o,u,d,p,M){if(o)return i.flags&256?(i.flags&=-257,u=Qu(Error(t(422))),Ha(n,i,M,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(p=u.fallback,d=i.mode,u=el({mode:"visible",children:u.children},d,0,null),p=zr(p,d,M,null),p.flags|=2,u.return=i,p.return=i,u.sibling=p,i.child=u,i.mode&1&&gs(i,n.child,null,M),i.child.memoizedState=ic(M),i.memoizedState=nc,p);if(!(i.mode&1))return Ha(n,i,M,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var D=u.dgst;return u=D,p=Error(t(419)),u=Qu(p,u,void 0),Ha(n,i,M,u)}if(D=(M&n.childLanes)!==0,Pn||D){if(u=tn,u!==null){switch(M&-M){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(u.suspendedLanes|M)?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Pi(n,d),oi(u,n,d,-1))}return yc(),u=Qu(Error(t(421))),Ha(n,i,M,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=q_.bind(null,n),d._reactRetry=i,null):(n=p.treeContext,zn=er(d.nextSibling),kn=i,Ot=!0,ni=null,n!==null&&(Gn[Wn++]=Ri,Gn[Wn++]=Ci,Gn[Wn++]=br,Ri=n.id,Ci=n.overflow,br=i),i=rc(i,u.children),i.flags|=4096,i)}function ip(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Nu(n.return,i,o)}function sc(n,i,o,u,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=o,p.tailMode=d)}function rp(n,i,o){var u=i.pendingProps,d=u.revealOrder,p=u.tail;if(Sn(n,i,u.children,o),u=kt.current,u&2)u=u&1|2,i.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&ip(n,o,i);else if(n.tag===19)ip(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Lt(kt,u),!(i.mode&1))i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&Ua(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),sc(i,!1,d,o,p);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Ua(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}sc(i,!0,o,null,p);break;case"together":sc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Va(n,i){!(i.mode&1)&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Di(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Nr|=i.lanes,!(o&i.childLanes))return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=fr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=fr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function F_(n,i,o){switch(i.tag){case 3:ep(i),ms();break;case 5:vh(i);break;case 1:Cn(i.type)&&Ta(i);break;case 4:ku(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;Lt(ba,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Lt(kt,kt.current&1),i.flags|=128,null):o&i.child.childLanes?np(n,i,o):(Lt(kt,kt.current&1),n=Di(n,i,o),n!==null?n.sibling:null);Lt(kt,kt.current&1);break;case 19:if(u=(o&i.childLanes)!==0,n.flags&128){if(u)return rp(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Lt(kt,kt.current),u)break;return null;case 22:case 23:return i.lanes=0,Zh(n,i,o)}return Di(n,i,o)}var sp,oc,op,ap;sp=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},oc=function(){},op=function(n,i,o,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Ir(pi.current);var p=null;switch(o){case"input":d=O(n,d),u=O(n,u),p=[];break;case"select":d=re({},d,{value:void 0}),u=re({},u,{value:void 0}),p=[];break;case"textarea":d=T(n,d),u=T(n,u),p=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Sa)}ct(o,u);var M;o=null;for(Q in d)if(!u.hasOwnProperty(Q)&&d.hasOwnProperty(Q)&&d[Q]!=null)if(Q==="style"){var D=d[Q];for(M in D)D.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else Q!=="dangerouslySetInnerHTML"&&Q!=="children"&&Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&Q!=="autoFocus"&&(a.hasOwnProperty(Q)?p||(p=[]):(p=p||[]).push(Q,null));for(Q in u){var N=u[Q];if(D=d!=null?d[Q]:void 0,u.hasOwnProperty(Q)&&N!==D&&(N!=null||D!=null))if(Q==="style")if(D){for(M in D)!D.hasOwnProperty(M)||N&&N.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in N)N.hasOwnProperty(M)&&D[M]!==N[M]&&(o||(o={}),o[M]=N[M])}else o||(p||(p=[]),p.push(Q,o)),o=N;else Q==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,D=D?D.__html:void 0,N!=null&&D!==N&&(p=p||[]).push(Q,N)):Q==="children"?typeof N!="string"&&typeof N!="number"||(p=p||[]).push(Q,""+N):Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&(a.hasOwnProperty(Q)?(N!=null&&Q==="onScroll"&&Ut("scroll",n),p||D===N||(p=[])):(p=p||[]).push(Q,N))}o&&(p=p||[]).push("style",o);var Q=p;(i.updateQueue=Q)&&(i.flags|=4)}},ap=function(n,i,o,u){o!==u&&(i.flags|=4)};function Io(n,i){if(!Ot)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function hn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function O_(n,i,o){var u=i.pendingProps;switch(Cu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return hn(i),null;case 1:return Cn(i.type)&&Ea(),hn(i),null;case 3:return u=i.stateNode,xs(),Nt(Rn),Nt(fn),Hu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Ca(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,ni!==null&&(_c(ni),ni=null))),oc(n,i),hn(i),null;case 5:zu(i);var d=Ir(Co.current);if(o=i.type,n!==null&&i.stateNode!=null)op(n,i,o,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return hn(i),null}if(n=Ir(pi.current),Ca(i)){u=i.stateNode,o=i.type;var p=i.memoizedProps;switch(u[hi]=i,u[Eo]=p,n=(i.mode&1)!==0,o){case"dialog":Ut("cancel",u),Ut("close",u);break;case"iframe":case"object":case"embed":Ut("load",u);break;case"video":case"audio":for(d=0;d<yo.length;d++)Ut(yo[d],u);break;case"source":Ut("error",u);break;case"img":case"image":case"link":Ut("error",u),Ut("load",u);break;case"details":Ut("toggle",u);break;case"input":_n(u,p),Ut("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},Ut("invalid",u);break;case"textarea":K(u,p),Ut("invalid",u)}ct(o,p),d=null;for(var M in p)if(p.hasOwnProperty(M)){var D=p[M];M==="children"?typeof D=="string"?u.textContent!==D&&(p.suppressHydrationWarning!==!0&&ya(u.textContent,D,n),d=["children",D]):typeof D=="number"&&u.textContent!==""+D&&(p.suppressHydrationWarning!==!0&&ya(u.textContent,D,n),d=["children",""+D]):a.hasOwnProperty(M)&&D!=null&&M==="onScroll"&&Ut("scroll",u)}switch(o){case"input":Rt(u),je(u,p,!0);break;case"textarea":Rt(u),ge(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=Sa)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{M=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ce(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=M.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=M.createElement(o,{is:u.is}):(n=M.createElement(o),o==="select"&&(M=n,u.multiple?M.multiple=!0:u.size&&(M.size=u.size))):n=M.createElementNS(n,o),n[hi]=i,n[Eo]=u,sp(n,i,!1,!1),i.stateNode=n;e:{switch(M=nt(o,u),o){case"dialog":Ut("cancel",n),Ut("close",n),d=u;break;case"iframe":case"object":case"embed":Ut("load",n),d=u;break;case"video":case"audio":for(d=0;d<yo.length;d++)Ut(yo[d],n);d=u;break;case"source":Ut("error",n),d=u;break;case"img":case"image":case"link":Ut("error",n),Ut("load",n),d=u;break;case"details":Ut("toggle",n),d=u;break;case"input":_n(n,u),d=O(n,u),Ut("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=re({},u,{value:void 0}),Ut("invalid",n);break;case"textarea":K(n,u),d=T(n,u),Ut("invalid",n);break;default:d=u}ct(o,d),D=d;for(p in D)if(D.hasOwnProperty(p)){var N=D[p];p==="style"?Qe(n,N):p==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,N!=null&&Ne(n,N)):p==="children"?typeof N=="string"?(o!=="textarea"||N!=="")&&at(n,N):typeof N=="number"&&at(n,""+N):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?N!=null&&p==="onScroll"&&Ut("scroll",n):N!=null&&L(n,p,N,M))}switch(o){case"input":Rt(n),je(n,u,!1);break;case"textarea":Rt(n),ge(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Te(u.value));break;case"select":n.multiple=!!u.multiple,p=u.value,p!=null?P(n,!!u.multiple,p,!1):u.defaultValue!=null&&P(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Sa)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return hn(i),null;case 6:if(n&&i.stateNode!=null)ap(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=Ir(Co.current),Ir(pi.current),Ca(i)){if(u=i.stateNode,o=i.memoizedProps,u[hi]=i,(p=u.nodeValue!==o)&&(n=kn,n!==null))switch(n.tag){case 3:ya(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ya(u.nodeValue,o,(n.mode&1)!==0)}p&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[hi]=i,i.stateNode=u}return hn(i),null;case 13:if(Nt(kt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ot&&zn!==null&&i.mode&1&&!(i.flags&128))ch(),ms(),i.flags|=98560,p=!1;else if(p=Ca(i),u!==null&&u.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[hi]=i}else ms(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;hn(i),p=!1}else ni!==null&&(_c(ni),ni=null),p=!0;if(!p)return i.flags&65536?i:null}return i.flags&128?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,i.mode&1&&(n===null||kt.current&1?Kt===0&&(Kt=3):yc())),i.updateQueue!==null&&(i.flags|=4),hn(i),null);case 4:return xs(),oc(n,i),n===null&&So(i.stateNode.containerInfo),hn(i),null;case 10:return Uu(i.type._context),hn(i),null;case 17:return Cn(i.type)&&Ea(),hn(i),null;case 19:if(Nt(kt),p=i.memoizedState,p===null)return hn(i),null;if(u=(i.flags&128)!==0,M=p.rendering,M===null)if(u)Io(p,!1);else{if(Kt!==0||n!==null&&n.flags&128)for(n=i.child;n!==null;){if(M=Ua(n),M!==null){for(i.flags|=128,Io(p,!1),u=M.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)p=o,n=u,p.flags&=14680066,M=p.alternate,M===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=M.childLanes,p.lanes=M.lanes,p.child=M.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=M.memoizedProps,p.memoizedState=M.memoizedState,p.updateQueue=M.updateQueue,p.type=M.type,n=M.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Lt(kt,kt.current&1|2),i.child}n=n.sibling}p.tail!==null&&H()>Es&&(i.flags|=128,u=!0,Io(p,!1),i.lanes=4194304)}else{if(!u)if(n=Ua(M),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Io(p,!0),p.tail===null&&p.tailMode==="hidden"&&!M.alternate&&!Ot)return hn(i),null}else 2*H()-p.renderingStartTime>Es&&o!==1073741824&&(i.flags|=128,u=!0,Io(p,!1),i.lanes=4194304);p.isBackwards?(M.sibling=i.child,i.child=M):(o=p.last,o!==null?o.sibling=M:i.child=M,p.last=M)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=H(),i.sibling=null,o=kt.current,Lt(kt,u?o&1|2:o&1),i):(hn(i),null);case 22:case 23:return xc(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&i.mode&1?Bn&1073741824&&(hn(i),i.subtreeFlags&6&&(i.flags|=8192)):hn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function k_(n,i){switch(Cu(i),i.tag){case 1:return Cn(i.type)&&Ea(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return xs(),Nt(Rn),Nt(fn),Hu(),n=i.flags,n&65536&&!(n&128)?(i.flags=n&-65537|128,i):null;case 5:return zu(i),null;case 13:if(Nt(kt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ms()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Nt(kt),null;case 4:return xs(),null;case 10:return Uu(i.type._context),null;case 22:case 23:return xc(),null;case 24:return null;default:return null}}var Ga=!1,pn=!1,z_=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Ss(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Ht(n,i,u)}else o.current=null}function ac(n,i,o){try{o()}catch(u){Ht(n,i,u)}}var lp=!1;function B_(n,i){if(xu=ua,n=Bd(),fu(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var M=0,D=-1,N=-1,Q=0,_e=0,xe=n,me=null;t:for(;;){for(var De;xe!==o||d!==0&&xe.nodeType!==3||(D=M+d),xe!==p||u!==0&&xe.nodeType!==3||(N=M+u),xe.nodeType===3&&(M+=xe.nodeValue.length),(De=xe.firstChild)!==null;)me=xe,xe=De;for(;;){if(xe===n)break t;if(me===o&&++Q===d&&(D=M),me===p&&++_e===u&&(N=M),(De=xe.nextSibling)!==null)break;xe=me,me=xe.parentNode}xe=De}o=D===-1||N===-1?null:{start:D,end:N}}else o=null}o=o||{start:0,end:0}}else o=null;for(yu={focusedElem:n,selectionRange:o},ua=!1,Oe=i;Oe!==null;)if(i=Oe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Oe=n;else for(;Oe!==null;){i=Oe;try{var Be=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var He=Be.memoizedProps,Wt=Be.memoizedState,Y=i.stateNode,V=Y.getSnapshotBeforeUpdate(i.elementType===i.type?He:ii(i.type,He),Wt);Y.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var $=i.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ee){Ht(i,i.return,Ee)}if(n=i.sibling,n!==null){n.return=i.return,Oe=n;break}Oe=i.return}return Be=lp,lp=!1,Be}function Uo(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&ac(i,o,p)}d=d.next}while(d!==u)}}function Wa(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function lc(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function up(n){var i=n.alternate;i!==null&&(n.alternate=null,up(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[hi],delete i[Eo],delete i[Tu],delete i[M_],delete i[E_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function cp(n){return n.tag===5||n.tag===3||n.tag===4}function fp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||cp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function uc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Sa));else if(u!==4&&(n=n.child,n!==null))for(uc(n,i,o),n=n.sibling;n!==null;)uc(n,i,o),n=n.sibling}function cc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(cc(n,i,o),n=n.sibling;n!==null;)cc(n,i,o),n=n.sibling}var on=null,ri=!1;function or(n,i,o){for(o=o.child;o!==null;)dp(n,i,o),o=o.sibling}function dp(n,i,o){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(Xe,o)}catch{}switch(o.tag){case 5:pn||Ss(o,i);case 6:var u=on,d=ri;on=null,or(n,i,o),on=u,ri=d,on!==null&&(ri?(n=on,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):on.removeChild(o.stateNode));break;case 18:on!==null&&(ri?(n=on,o=o.stateNode,n.nodeType===8?Eu(n.parentNode,o):n.nodeType===1&&Eu(n,o),fo(n)):Eu(on,o.stateNode));break;case 4:u=on,d=ri,on=o.stateNode.containerInfo,ri=!0,or(n,i,o),on=u,ri=d;break;case 0:case 11:case 14:case 15:if(!pn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var p=d,M=p.destroy;p=p.tag,M!==void 0&&(p&2||p&4)&&ac(o,i,M),d=d.next}while(d!==u)}or(n,i,o);break;case 1:if(!pn&&(Ss(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(D){Ht(o,i,D)}or(n,i,o);break;case 21:or(n,i,o);break;case 22:o.mode&1?(pn=(u=pn)||o.memoizedState!==null,or(n,i,o),pn=u):or(n,i,o);break;default:or(n,i,o)}}function hp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new z_),i.forEach(function(u){var d=$_.bind(null,n,u);o.has(u)||(o.add(u),u.then(d,d))})}}function si(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];try{var p=n,M=i,D=M;e:for(;D!==null;){switch(D.tag){case 5:on=D.stateNode,ri=!1;break e;case 3:on=D.stateNode.containerInfo,ri=!0;break e;case 4:on=D.stateNode.containerInfo,ri=!0;break e}D=D.return}if(on===null)throw Error(t(160));dp(p,M,d),on=null,ri=!1;var N=d.alternate;N!==null&&(N.return=null),d.return=null}catch(Q){Ht(d,i,Q)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)pp(i,n),i=i.sibling}function pp(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(si(i,n),gi(n),u&4){try{Uo(3,n,n.return),Wa(3,n)}catch(He){Ht(n,n.return,He)}try{Uo(5,n,n.return)}catch(He){Ht(n,n.return,He)}}break;case 1:si(i,n),gi(n),u&512&&o!==null&&Ss(o,o.return);break;case 5:if(si(i,n),gi(n),u&512&&o!==null&&Ss(o,o.return),n.flags&32){var d=n.stateNode;try{at(d,"")}catch(He){Ht(n,n.return,He)}}if(u&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,M=o!==null?o.memoizedProps:p,D=n.type,N=n.updateQueue;if(n.updateQueue=null,N!==null)try{D==="input"&&p.type==="radio"&&p.name!=null&&ht(d,p),nt(D,M);var Q=nt(D,p);for(M=0;M<N.length;M+=2){var _e=N[M],xe=N[M+1];_e==="style"?Qe(d,xe):_e==="dangerouslySetInnerHTML"?Ne(d,xe):_e==="children"?at(d,xe):L(d,_e,xe,Q)}switch(D){case"input":ut(d,p);break;case"textarea":pe(d,p);break;case"select":var me=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var De=p.value;De!=null?P(d,!!p.multiple,De,!1):me!==!!p.multiple&&(p.defaultValue!=null?P(d,!!p.multiple,p.defaultValue,!0):P(d,!!p.multiple,p.multiple?[]:"",!1))}d[Eo]=p}catch(He){Ht(n,n.return,He)}}break;case 6:if(si(i,n),gi(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(He){Ht(n,n.return,He)}}break;case 3:if(si(i,n),gi(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{fo(i.containerInfo)}catch(He){Ht(n,n.return,He)}break;case 4:si(i,n),gi(n);break;case 13:si(i,n),gi(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(hc=H())),u&4&&hp(n);break;case 22:if(_e=o!==null&&o.memoizedState!==null,n.mode&1?(pn=(Q=pn)||_e,si(i,n),pn=Q):si(i,n),gi(n),u&8192){if(Q=n.memoizedState!==null,(n.stateNode.isHidden=Q)&&!_e&&n.mode&1)for(Oe=n,_e=n.child;_e!==null;){for(xe=Oe=_e;Oe!==null;){switch(me=Oe,De=me.child,me.tag){case 0:case 11:case 14:case 15:Uo(4,me,me.return);break;case 1:Ss(me,me.return);var Be=me.stateNode;if(typeof Be.componentWillUnmount=="function"){u=me,o=me.return;try{i=u,Be.props=i.memoizedProps,Be.state=i.memoizedState,Be.componentWillUnmount()}catch(He){Ht(u,o,He)}}break;case 5:Ss(me,me.return);break;case 22:if(me.memoizedState!==null){_p(xe);continue}}De!==null?(De.return=me,Oe=De):_p(xe)}_e=_e.sibling}e:for(_e=null,xe=n;;){if(xe.tag===5){if(_e===null){_e=xe;try{d=xe.stateNode,Q?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(D=xe.stateNode,N=xe.memoizedProps.style,M=N!=null&&N.hasOwnProperty("display")?N.display:null,D.style.display=qe("display",M))}catch(He){Ht(n,n.return,He)}}}else if(xe.tag===6){if(_e===null)try{xe.stateNode.nodeValue=Q?"":xe.memoizedProps}catch(He){Ht(n,n.return,He)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===n)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===n)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===n)break e;_e===xe&&(_e=null),xe=xe.return}_e===xe&&(_e=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:si(i,n),gi(n),u&4&&hp(n);break;case 21:break;default:si(i,n),gi(n)}}function gi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(cp(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(at(d,""),u.flags&=-33);var p=fp(n);cc(n,p,d);break;case 3:case 4:var M=u.stateNode.containerInfo,D=fp(n);uc(n,D,M);break;default:throw Error(t(161))}}catch(N){Ht(n,n.return,N)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function H_(n,i,o){Oe=n,mp(n)}function mp(n,i,o){for(var u=(n.mode&1)!==0;Oe!==null;){var d=Oe,p=d.child;if(d.tag===22&&u){var M=d.memoizedState!==null||Ga;if(!M){var D=d.alternate,N=D!==null&&D.memoizedState!==null||pn;D=Ga;var Q=pn;if(Ga=M,(pn=N)&&!Q)for(Oe=d;Oe!==null;)M=Oe,N=M.child,M.tag===22&&M.memoizedState!==null?vp(d):N!==null?(N.return=M,Oe=N):vp(d);for(;p!==null;)Oe=p,mp(p),p=p.sibling;Oe=d,Ga=D,pn=Q}gp(n)}else d.subtreeFlags&8772&&p!==null?(p.return=d,Oe=p):gp(n)}}function gp(n){for(;Oe!==null;){var i=Oe;if(i.flags&8772){var o=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:pn||Wa(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!pn)if(o===null)u.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:ii(i.type,o.memoizedProps);u.componentDidUpdate(d,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&_h(i,p,u);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}_h(i,M,o)}break;case 5:var D=i.stateNode;if(o===null&&i.flags&4){o=D;var N=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":N.autoFocus&&o.focus();break;case"img":N.src&&(o.src=N.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var Q=i.alternate;if(Q!==null){var _e=Q.memoizedState;if(_e!==null){var xe=_e.dehydrated;xe!==null&&fo(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}pn||i.flags&512&&lc(i)}catch(me){Ht(i,i.return,me)}}if(i===n){Oe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Oe=o;break}Oe=i.return}}function _p(n){for(;Oe!==null;){var i=Oe;if(i===n){Oe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Oe=o;break}Oe=i.return}}function vp(n){for(;Oe!==null;){var i=Oe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Wa(4,i)}catch(N){Ht(i,o,N)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(N){Ht(i,d,N)}}var p=i.return;try{lc(i)}catch(N){Ht(i,p,N)}break;case 5:var M=i.return;try{lc(i)}catch(N){Ht(i,M,N)}}}catch(N){Ht(i,i.return,N)}if(i===n){Oe=null;break}var D=i.sibling;if(D!==null){D.return=i.return,Oe=D;break}Oe=i.return}}var V_=Math.ceil,Xa=b.ReactCurrentDispatcher,fc=b.ReactCurrentOwner,Yn=b.ReactCurrentBatchConfig,xt=0,tn=null,jt=null,an=0,Bn=0,Ms=tr(0),Kt=0,No=null,Nr=0,ja=0,dc=0,Fo=null,bn=null,hc=0,Es=1/0,Li=null,Ya=!1,pc=null,ar=null,qa=!1,lr=null,$a=0,Oo=0,mc=null,Ka=-1,Za=0;function Mn(){return xt&6?H():Ka!==-1?Ka:Ka=H()}function ur(n){return n.mode&1?xt&2&&an!==0?an&-an:w_.transition!==null?(Za===0&&(Za=yn()),Za):(n=pt,n!==0||(n=window.event,n=n===void 0?16:yd(n.type)),n):1}function oi(n,i,o,u){if(50<Oo)throw Oo=0,mc=null,Error(t(185));Gt(n,o,u),(!(xt&2)||n!==tn)&&(n===tn&&(!(xt&2)&&(ja|=o),Kt===4&&cr(n,an)),Dn(n,u),o===1&&xt===0&&!(i.mode&1)&&(Es=H()+500,wa&&ir()))}function Dn(n,i){var o=n.callbackNode;Ar(n,i);var u=ei(n,n===tn?an:0);if(u===0)o!==null&&W(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&W(o),i===1)n.tag===0?T_(yp.bind(null,n)):sh(yp.bind(null,n)),y_(function(){!(xt&6)&&ir()}),o=null;else{switch(dd(u)){case 1:o=Re;break;case 4:o=Le;break;case 16:o=Fe;break;case 536870912:o=et;break;default:o=Fe}o=Cp(o,xp.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function xp(n,i){if(Ka=-1,Za=0,xt&6)throw Error(t(327));var o=n.callbackNode;if(Ts()&&n.callbackNode!==o)return null;var u=ei(n,n===tn?an:0);if(u===0)return null;if(u&30||u&n.expiredLanes||i)i=Qa(n,u);else{i=u;var d=xt;xt|=2;var p=Mp();(tn!==n||an!==i)&&(Li=null,Es=H()+500,Or(n,i));do try{X_();break}catch(D){Sp(n,D)}while(!0);Iu(),Xa.current=p,xt=d,jt!==null?i=0:(tn=null,an=0,i=Kt)}if(i!==0){if(i===2&&(d=Ct(n),d!==0&&(u=d,i=gc(n,d))),i===1)throw o=No,Or(n,0),cr(n,u),Dn(n,H()),o;if(i===6)cr(n,u);else{if(d=n.current.alternate,!(u&30)&&!G_(d)&&(i=Qa(n,u),i===2&&(p=Ct(n),p!==0&&(u=p,i=gc(n,p))),i===1))throw o=No,Or(n,0),cr(n,u),Dn(n,H()),o;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:kr(n,bn,Li);break;case 3:if(cr(n,u),(u&130023424)===u&&(i=hc+500-H(),10<i)){if(ei(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){Mn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Mu(kr.bind(null,n,bn,Li),i);break}kr(n,bn,Li);break;case 4:if(cr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var M=31-St(u);p=1<<M,M=i[M],M>d&&(d=M),u&=~p}if(u=d,u=H()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*V_(u/1960))-u,10<u){n.timeoutHandle=Mu(kr.bind(null,n,bn,Li),u);break}kr(n,bn,Li);break;case 5:kr(n,bn,Li);break;default:throw Error(t(329))}}}return Dn(n,H()),n.callbackNode===o?xp.bind(null,n):null}function gc(n,i){var o=Fo;return n.current.memoizedState.isDehydrated&&(Or(n,i).flags|=256),n=Qa(n,i),n!==2&&(i=bn,bn=o,i!==null&&_c(i)),n}function _c(n){bn===null?bn=n:bn.push.apply(bn,n)}function G_(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var d=o[u],p=d.getSnapshot;d=d.value;try{if(!ti(p(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function cr(n,i){for(i&=~dc,i&=~ja,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-St(i),u=1<<o;n[o]=-1,i&=~u}}function yp(n){if(xt&6)throw Error(t(327));Ts();var i=ei(n,0);if(!(i&1))return Dn(n,H()),null;var o=Qa(n,i);if(n.tag!==0&&o===2){var u=Ct(n);u!==0&&(i=u,o=gc(n,u))}if(o===1)throw o=No,Or(n,0),cr(n,i),Dn(n,H()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,kr(n,bn,Li),Dn(n,H()),null}function vc(n,i){var o=xt;xt|=1;try{return n(i)}finally{xt=o,xt===0&&(Es=H()+500,wa&&ir())}}function Fr(n){lr!==null&&lr.tag===0&&!(xt&6)&&Ts();var i=xt;xt|=1;var o=Yn.transition,u=pt;try{if(Yn.transition=null,pt=1,n)return n()}finally{pt=u,Yn.transition=o,xt=i,!(xt&6)&&ir()}}function xc(){Bn=Ms.current,Nt(Ms)}function Or(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,x_(o)),jt!==null)for(o=jt.return;o!==null;){var u=o;switch(Cu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Ea();break;case 3:xs(),Nt(Rn),Nt(fn),Hu();break;case 5:zu(u);break;case 4:xs();break;case 13:Nt(kt);break;case 19:Nt(kt);break;case 10:Uu(u.type._context);break;case 22:case 23:xc()}o=o.return}if(tn=n,jt=n=fr(n.current,null),an=Bn=i,Kt=0,No=null,dc=ja=Nr=0,bn=Fo=null,Lr!==null){for(i=0;i<Lr.length;i++)if(o=Lr[i],u=o.interleaved,u!==null){o.interleaved=null;var d=u.next,p=o.pending;if(p!==null){var M=p.next;p.next=d,u.next=M}o.pending=u}Lr=null}return n}function Sp(n,i){do{var o=jt;try{if(Iu(),Na.current=za,Fa){for(var u=zt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Fa=!1}if(Ur=0,en=$t=zt=null,Po=!1,bo=0,fc.current=null,o===null||o.return===null){Kt=1,No=i,jt=null;break}e:{var p=n,M=o.return,D=o,N=i;if(i=an,D.flags|=32768,N!==null&&typeof N=="object"&&typeof N.then=="function"){var Q=N,_e=D,xe=_e.tag;if(!(_e.mode&1)&&(xe===0||xe===11||xe===15)){var me=_e.alternate;me?(_e.updateQueue=me.updateQueue,_e.memoizedState=me.memoizedState,_e.lanes=me.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var De=jh(M);if(De!==null){De.flags&=-257,Yh(De,M,D,p,i),De.mode&1&&Xh(p,Q,i),i=De,N=Q;var Be=i.updateQueue;if(Be===null){var He=new Set;He.add(N),i.updateQueue=He}else Be.add(N);break e}else{if(!(i&1)){Xh(p,Q,i),yc();break e}N=Error(t(426))}}else if(Ot&&D.mode&1){var Wt=jh(M);if(Wt!==null){!(Wt.flags&65536)&&(Wt.flags|=256),Yh(Wt,M,D,p,i),Du(ys(N,D));break e}}p=N=ys(N,D),Kt!==4&&(Kt=2),Fo===null?Fo=[p]:Fo.push(p),p=M;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var Y=Gh(p,N,i);gh(p,Y);break e;case 1:D=N;var V=p.type,$=p.stateNode;if(!(p.flags&128)&&(typeof V.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(ar===null||!ar.has($)))){p.flags|=65536,i&=-i,p.lanes|=i;var Ee=Wh(p,D,i);gh(p,Ee);break e}}p=p.return}while(p!==null)}Tp(o)}catch(Ge){i=Ge,jt===o&&o!==null&&(jt=o=o.return);continue}break}while(!0)}function Mp(){var n=Xa.current;return Xa.current=za,n===null?za:n}function yc(){(Kt===0||Kt===3||Kt===2)&&(Kt=4),tn===null||!(Nr&268435455)&&!(ja&268435455)||cr(tn,an)}function Qa(n,i){var o=xt;xt|=2;var u=Mp();(tn!==n||an!==i)&&(Li=null,Or(n,i));do try{W_();break}catch(d){Sp(n,d)}while(!0);if(Iu(),xt=o,Xa.current=u,jt!==null)throw Error(t(261));return tn=null,an=0,Kt}function W_(){for(;jt!==null;)Ep(jt)}function X_(){for(;jt!==null&&!J();)Ep(jt)}function Ep(n){var i=Rp(n.alternate,n,Bn);n.memoizedProps=n.pendingProps,i===null?Tp(n):jt=i,fc.current=null}function Tp(n){var i=n;do{var o=i.alternate;if(n=i.return,i.flags&32768){if(o=k_(o,i),o!==null){o.flags&=32767,jt=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Kt=6,jt=null;return}}else if(o=O_(o,i,Bn),o!==null){jt=o;return}if(i=i.sibling,i!==null){jt=i;return}jt=i=n}while(i!==null);Kt===0&&(Kt=5)}function kr(n,i,o){var u=pt,d=Yn.transition;try{Yn.transition=null,pt=1,j_(n,i,o,u)}finally{Yn.transition=d,pt=u}return null}function j_(n,i,o,u){do Ts();while(lr!==null);if(xt&6)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=o.lanes|o.childLanes;if(cn(n,p),n===tn&&(jt=tn=null,an=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||qa||(qa=!0,Cp(Fe,function(){return Ts(),null})),p=(o.flags&15990)!==0,o.subtreeFlags&15990||p){p=Yn.transition,Yn.transition=null;var M=pt;pt=1;var D=xt;xt|=4,fc.current=null,B_(n,o),pp(o,n),d_(yu),ua=!!xu,yu=xu=null,n.current=o,H_(o),te(),xt=D,pt=M,Yn.transition=p}else n.current=o;if(qa&&(qa=!1,lr=n,$a=d),p=n.pendingLanes,p===0&&(ar=null),yt(o.stateNode),Dn(n,H()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],u(d.value,{componentStack:d.stack,digest:d.digest});if(Ya)throw Ya=!1,n=pc,pc=null,n;return $a&1&&n.tag!==0&&Ts(),p=n.pendingLanes,p&1?n===mc?Oo++:(Oo=0,mc=n):Oo=0,ir(),null}function Ts(){if(lr!==null){var n=dd($a),i=Yn.transition,o=pt;try{if(Yn.transition=null,pt=16>n?16:n,lr===null)var u=!1;else{if(n=lr,lr=null,$a=0,xt&6)throw Error(t(331));var d=xt;for(xt|=4,Oe=n.current;Oe!==null;){var p=Oe,M=p.child;if(Oe.flags&16){var D=p.deletions;if(D!==null){for(var N=0;N<D.length;N++){var Q=D[N];for(Oe=Q;Oe!==null;){var _e=Oe;switch(_e.tag){case 0:case 11:case 15:Uo(8,_e,p)}var xe=_e.child;if(xe!==null)xe.return=_e,Oe=xe;else for(;Oe!==null;){_e=Oe;var me=_e.sibling,De=_e.return;if(up(_e),_e===Q){Oe=null;break}if(me!==null){me.return=De,Oe=me;break}Oe=De}}}var Be=p.alternate;if(Be!==null){var He=Be.child;if(He!==null){Be.child=null;do{var Wt=He.sibling;He.sibling=null,He=Wt}while(He!==null)}}Oe=p}}if(p.subtreeFlags&2064&&M!==null)M.return=p,Oe=M;else e:for(;Oe!==null;){if(p=Oe,p.flags&2048)switch(p.tag){case 0:case 11:case 15:Uo(9,p,p.return)}var Y=p.sibling;if(Y!==null){Y.return=p.return,Oe=Y;break e}Oe=p.return}}var V=n.current;for(Oe=V;Oe!==null;){M=Oe;var $=M.child;if(M.subtreeFlags&2064&&$!==null)$.return=M,Oe=$;else e:for(M=V;Oe!==null;){if(D=Oe,D.flags&2048)try{switch(D.tag){case 0:case 11:case 15:Wa(9,D)}}catch(Ge){Ht(D,D.return,Ge)}if(D===M){Oe=null;break e}var Ee=D.sibling;if(Ee!==null){Ee.return=D.return,Oe=Ee;break e}Oe=D.return}}if(xt=d,ir(),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(Xe,n)}catch{}u=!0}return u}finally{pt=o,Yn.transition=i}}return!1}function wp(n,i,o){i=ys(o,i),i=Gh(n,i,1),n=sr(n,i,1),i=Mn(),n!==null&&(Gt(n,1,i),Dn(n,i))}function Ht(n,i,o){if(n.tag===3)wp(n,n,o);else for(;i!==null;){if(i.tag===3){wp(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ar===null||!ar.has(u))){n=ys(o,n),n=Wh(i,n,1),i=sr(i,n,1),n=Mn(),i!==null&&(Gt(i,1,n),Dn(i,n));break}}i=i.return}}function Y_(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=Mn(),n.pingedLanes|=n.suspendedLanes&o,tn===n&&(an&o)===o&&(Kt===4||Kt===3&&(an&130023424)===an&&500>H()-hc?Or(n,0):dc|=o),Dn(n,i)}function Ap(n,i){i===0&&(n.mode&1?(i=gt,gt<<=1,!(gt&130023424)&&(gt=4194304)):i=1);var o=Mn();n=Pi(n,i),n!==null&&(Gt(n,i,o),Dn(n,o))}function q_(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Ap(n,o)}function $_(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Ap(n,o)}var Rp;Rp=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Rn.current)Pn=!0;else{if(!(n.lanes&o)&&!(i.flags&128))return Pn=!1,F_(n,i,o);Pn=!!(n.flags&131072)}else Pn=!1,Ot&&i.flags&1048576&&oh(i,Ra,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Va(n,i),n=i.pendingProps;var d=ds(i,fn.current);vs(i,o),d=Wu(null,i,u,n,d,o);var p=Xu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Cn(u)?(p=!0,Ta(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Ou(i),d.updater=Ba,i.stateNode=d,d._reactInternals=i,Zu(i,u,n,o),i=tc(null,i,u,!0,p,o)):(i.tag=0,Ot&&p&&Ru(i),Sn(null,i,d,o),i=i.child),i;case 16:u=i.elementType;e:{switch(Va(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=Z_(u),n=ii(u,n),d){case 0:i=ec(null,i,u,n,o);break e;case 1:i=Jh(null,i,u,n,o);break e;case 11:i=qh(null,i,u,n,o);break e;case 14:i=$h(null,i,u,ii(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ii(u,d),ec(n,i,u,d,o);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ii(u,d),Jh(n,i,u,d,o);case 3:e:{if(ep(i),n===null)throw Error(t(387));u=i.pendingProps,p=i.memoizedState,d=p.element,mh(n,i),Ia(i,u,null,o);var M=i.memoizedState;if(u=M.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=ys(Error(t(423)),i),i=tp(n,i,u,o,d);break e}else if(u!==d){d=ys(Error(t(424)),i),i=tp(n,i,u,o,d);break e}else for(zn=er(i.stateNode.containerInfo.firstChild),kn=i,Ot=!0,ni=null,o=hh(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ms(),u===d){i=Di(n,i,o);break e}Sn(n,i,u,o)}i=i.child}return i;case 5:return vh(i),n===null&&bu(i),u=i.type,d=i.pendingProps,p=n!==null?n.memoizedProps:null,M=d.children,Su(u,d)?M=null:p!==null&&Su(u,p)&&(i.flags|=32),Qh(n,i),Sn(n,i,M,o),i.child;case 6:return n===null&&bu(i),null;case 13:return np(n,i,o);case 4:return ku(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=gs(i,null,u,o):Sn(n,i,u,o),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ii(u,d),qh(n,i,u,d,o);case 7:return Sn(n,i,i.pendingProps,o),i.child;case 8:return Sn(n,i,i.pendingProps.children,o),i.child;case 12:return Sn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,p=i.memoizedProps,M=d.value,Lt(ba,u._currentValue),u._currentValue=M,p!==null)if(ti(p.value,M)){if(p.children===d.children&&!Rn.current){i=Di(n,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var D=p.dependencies;if(D!==null){M=p.child;for(var N=D.firstContext;N!==null;){if(N.context===u){if(p.tag===1){N=bi(-1,o&-o),N.tag=2;var Q=p.updateQueue;if(Q!==null){Q=Q.shared;var _e=Q.pending;_e===null?N.next=N:(N.next=_e.next,_e.next=N),Q.pending=N}}p.lanes|=o,N=p.alternate,N!==null&&(N.lanes|=o),Nu(p.return,o,i),D.lanes|=o;break}N=N.next}}else if(p.tag===10)M=p.type===i.type?null:p.child;else if(p.tag===18){if(M=p.return,M===null)throw Error(t(341));M.lanes|=o,D=M.alternate,D!==null&&(D.lanes|=o),Nu(M,o,i),M=p.sibling}else M=p.child;if(M!==null)M.return=p;else for(M=p;M!==null;){if(M===i){M=null;break}if(p=M.sibling,p!==null){p.return=M.return,M=p;break}M=M.return}p=M}Sn(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,vs(i,o),d=Xn(d),u=u(d),i.flags|=1,Sn(n,i,u,o),i.child;case 14:return u=i.type,d=ii(u,i.pendingProps),d=ii(u.type,d),$h(n,i,u,d,o);case 15:return Kh(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ii(u,d),Va(n,i),i.tag=1,Cn(u)?(n=!0,Ta(i)):n=!1,vs(i,o),Hh(i,u,d),Zu(i,u,d,o),tc(null,i,u,!0,n,o);case 19:return rp(n,i,o);case 22:return Zh(n,i,o)}throw Error(t(156,i.tag))};function Cp(n,i){return A(n,i)}function K_(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(n,i,o,u){return new K_(n,i,o,u)}function Sc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Z_(n){if(typeof n=="function")return Sc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===oe)return 11;if(n===he)return 14}return 2}function fr(n,i){var o=n.alternate;return o===null?(o=qn(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Ja(n,i,o,u,d,p){var M=2;if(u=n,typeof n=="function")Sc(n)&&(M=1);else if(typeof n=="string")M=5;else e:switch(n){case F:return zr(o.children,d,p,i);case j:M=8,d|=8;break;case C:return n=qn(12,o,i,d|2),n.elementType=C,n.lanes=p,n;case ee:return n=qn(13,o,i,d),n.elementType=ee,n.lanes=p,n;case fe:return n=qn(19,o,i,d),n.elementType=fe,n.lanes=p,n;case le:return el(o,d,p,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:M=10;break e;case B:M=9;break e;case oe:M=11;break e;case he:M=14;break e;case se:M=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=qn(M,o,i,d),i.elementType=n,i.type=u,i.lanes=p,i}function zr(n,i,o,u){return n=qn(7,n,u,i),n.lanes=o,n}function el(n,i,o,u){return n=qn(22,n,u,i),n.elementType=le,n.lanes=o,n.stateNode={isHidden:!1},n}function Mc(n,i,o){return n=qn(6,n,null,i),n.lanes=o,n}function Ec(n,i,o){return i=qn(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Q_(n,i,o,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=un(0),this.expirationTimes=un(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=un(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Tc(n,i,o,u,d,p,M,D,N){return n=new Q_(n,i,o,D,N),i===1?(i=1,p===!0&&(i|=8)):i=0,p=qn(3,null,null,i),n.current=p,p.stateNode=n,p.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ou(p),n}function J_(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function Pp(n){if(!n)return nr;n=n._reactInternals;e:{if(di(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Cn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Cn(o))return ih(n,o,i)}return i}function bp(n,i,o,u,d,p,M,D,N){return n=Tc(o,u,!0,n,d,p,M,D,N),n.context=Pp(null),o=n.current,u=Mn(),d=ur(o),p=bi(u,d),p.callback=i??null,sr(o,p,d),n.current.lanes=d,Gt(n,d,u),Dn(n,u),n}function tl(n,i,o,u){var d=i.current,p=Mn(),M=ur(d);return o=Pp(o),i.context===null?i.context=o:i.pendingContext=o,i=bi(p,M),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=sr(d,i,M),n!==null&&(oi(n,d,M,p),La(n,d,M)),M}function nl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Dp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function wc(n,i){Dp(n,i),(n=n.alternate)&&Dp(n,i)}var Lp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ac(n){this._internalRoot=n}il.prototype.render=Ac.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));tl(n,i,null,null)},il.prototype.unmount=Ac.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Fr(function(){tl(null,n,null,null)}),i[wi]=null}};function il(n){this._internalRoot=n}il.prototype.unstable_scheduleHydration=function(n){if(n){var i=md();n={blockedOn:null,target:n,priority:i};for(var o=0;o<Zi.length&&i!==0&&i<Zi[o].priority;o++);Zi.splice(o,0,n),o===0&&vd(n)}};function Rc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function rl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Ip(){}function ev(n,i,o,u,d){if(d){if(typeof u=="function"){var p=u;u=function(){var Q=nl(M);p.call(Q)}}var M=bp(i,u,n,0,null,!1,!1,"",Ip);return n._reactRootContainer=M,n[wi]=M.current,So(n.nodeType===8?n.parentNode:n),Fr(),M}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var D=u;u=function(){var Q=nl(N);D.call(Q)}}var N=Tc(n,0,!1,null,null,!1,!1,"",Ip);return n._reactRootContainer=N,n[wi]=N.current,So(n.nodeType===8?n.parentNode:n),Fr(function(){tl(i,N,o,u)}),N}function sl(n,i,o,u,d){var p=o._reactRootContainer;if(p){var M=p;if(typeof d=="function"){var D=d;d=function(){var N=nl(M);D.call(N)}}tl(i,M,n,d)}else M=ev(o,i,n,d,u);return nl(M)}hd=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=sn(i.pendingLanes);o!==0&&(Rr(i,o|1),Dn(i,H()),!(xt&6)&&(Es=H()+500,ir()))}break;case 13:Fr(function(){var u=Pi(n,1);if(u!==null){var d=Mn();oi(u,n,1,d)}}),wc(n,1)}},Ql=function(n){if(n.tag===13){var i=Pi(n,134217728);if(i!==null){var o=Mn();oi(i,n,134217728,o)}wc(n,134217728)}},pd=function(n){if(n.tag===13){var i=ur(n),o=Pi(n,i);if(o!==null){var u=Mn();oi(o,n,i,u)}wc(n,i)}},md=function(){return pt},gd=function(n,i){var o=pt;try{return pt=n,i()}finally{pt=o}},Ae=function(n,i,o){switch(i){case"input":if(ut(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var d=Ma(u);if(!d)throw Error(t(90));mt(u),ut(u,d)}}}break;case"textarea":pe(n,o);break;case"select":i=o.value,i!=null&&P(n,!!o.multiple,i,!1)}},It=vc,qt=Fr;var tv={usingClientEntryPoint:!1,Events:[To,cs,Ma,Pe,it,vc]},ko={findFiberByHostInstance:Cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nv={bundleType:ko.bundleType,version:ko.version,rendererPackageName:ko.rendererPackageName,rendererConfig:ko.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=sa(n),n===null?null:n.stateNode},findFiberByHostInstance:ko.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ol.isDisabled&&ol.supportsFiber)try{Xe=ol.inject(nv),rt=ol}catch{}}return Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tv,Ln.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rc(i))throw Error(t(200));return J_(n,i,null,o)},Ln.createRoot=function(n,i){if(!Rc(n))throw Error(t(299));var o=!1,u="",d=Lp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Tc(n,1,!1,null,null,o,!1,u,d),n[wi]=i.current,So(n.nodeType===8?n.parentNode:n),new Ac(i)},Ln.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=sa(i),n=n===null?null:n.stateNode,n},Ln.flushSync=function(n){return Fr(n)},Ln.hydrate=function(n,i,o){if(!rl(i))throw Error(t(200));return sl(null,n,i,!0,o)},Ln.hydrateRoot=function(n,i,o){if(!Rc(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,d=!1,p="",M=Lp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=bp(i,null,n,1,o??null,d,!1,p,M),n[wi]=i.current,So(n),u)for(n=0;n<u.length;n++)o=u[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new il(i)},Ln.render=function(n,i,o){if(!rl(i))throw Error(t(200));return sl(null,n,i,!1,o)},Ln.unmountComponentAtNode=function(n){if(!rl(n))throw Error(t(40));return n._reactRootContainer?(Fr(function(){sl(null,null,n,!1,function(){n._reactRootContainer=null,n[wi]=null})}),!0):!1},Ln.unstable_batchedUpdates=vc,Ln.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!rl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return sl(n,i,o,!1,u)},Ln.version="18.3.1-next-f1338f8080-20240426",Ln}var Hp;function dv(){if(Hp)return bc.exports;Hp=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),bc.exports=fv(),bc.exports}var Vp;function hv(){if(Vp)return al;Vp=1;var r=dv();return al.createRoot=r.createRoot,al.hydrateRoot=r.hydrateRoot,al}var pv=hv(),Bo=Jf();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ed="171",Xs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Hs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},mv=0,Gp=1,gv=2,qm=1,_v=2,ki=3,Er=0,Un=1,zi=2,Sr=0,js=1,Wp=2,Xp=3,jp=4,vv=5,Yr=100,xv=101,yv=102,Sv=103,Mv=104,Ev=200,Tv=201,wv=202,Av=203,ff=204,df=205,Rv=206,Cv=207,Pv=208,bv=209,Dv=210,Lv=211,Iv=212,Uv=213,Nv=214,hf=0,pf=1,mf=2,Zs=3,gf=4,_f=5,vf=6,xf=7,$m=0,Fv=1,Ov=2,Mr=0,kv=1,zv=2,Bv=3,Hv=4,Vv=5,Gv=6,Wv=7,Km=300,Qs=301,Js=302,yf=303,Sf=304,jl=306,Mf=1e3,$r=1001,Ef=1002,fi=1003,Xv=1004,ll=1005,vi=1006,Ic=1007,Kr=1008,Gi=1009,Zm=1010,Qm=1011,Ko=1012,td=1013,Zr=1014,Bi=1015,Qo=1016,nd=1017,id=1018,eo=1020,Jm=35902,eg=1021,tg=1022,ci=1023,ng=1024,ig=1025,Ys=1026,to=1027,rg=1028,rd=1029,sg=1030,sd=1031,od=1033,Nl=33776,Fl=33777,Ol=33778,kl=33779,Tf=35840,wf=35841,Af=35842,Rf=35843,Cf=36196,Pf=37492,bf=37496,Df=37808,Lf=37809,If=37810,Uf=37811,Nf=37812,Ff=37813,Of=37814,kf=37815,zf=37816,Bf=37817,Hf=37818,Vf=37819,Gf=37820,Wf=37821,zl=36492,Xf=36494,jf=36495,og=36283,Yf=36284,qf=36285,$f=36286,jv=3200,Yv=3201,qv=0,$v=1,yr="",Kn="srgb",no="srgb-linear",Hl="linear",Pt="srgb",ws=7680,Yp=519,Kv=512,Zv=513,Qv=514,ag=515,Jv=516,e0=517,t0=518,n0=519,qp=35044,$p="300 es",Hi=2e3,Vl=2001;class es{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Kp=1234567;const qs=Math.PI/180,Zo=180/Math.PI;function ro(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(mn[r&255]+mn[r>>8&255]+mn[r>>16&255]+mn[r>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[s&255]+mn[s>>8&255]+mn[s>>16&255]+mn[s>>24&255]).toLowerCase()}function dt(r,e,t){return Math.max(e,Math.min(t,r))}function ad(r,e){return(r%e+e)%e}function i0(r,e,t,s,a){return s+(r-e)*(a-s)/(t-e)}function r0(r,e,t){return r!==e?(t-r)/(e-r):0}function qo(r,e,t){return(1-t)*r+t*e}function s0(r,e,t,s){return qo(r,e,1-Math.exp(-t*s))}function o0(r,e=1){return e-Math.abs(ad(r,e*2)-e)}function a0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function l0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function u0(r,e){return r+Math.floor(Math.random()*(e-r+1))}function c0(r,e){return r+Math.random()*(e-r)}function f0(r){return r*(.5-Math.random())}function d0(r){r!==void 0&&(Kp=r);let e=Kp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function h0(r){return r*qs}function p0(r){return r*Zo}function m0(r){return(r&r-1)===0&&r!==0}function g0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function _0(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function v0(r,e,t,s,a){const l=Math.cos,c=Math.sin,f=l(t/2),h=c(t/2),m=l((e+s)/2),g=c((e+s)/2),v=l((e-s)/2),y=c((e-s)/2),S=l((s-e)/2),E=c((s-e)/2);switch(a){case"XYX":r.set(f*g,h*v,h*y,f*m);break;case"YZY":r.set(h*y,f*g,h*v,f*m);break;case"ZXZ":r.set(h*v,h*y,f*g,f*m);break;case"XZX":r.set(f*g,h*E,h*S,f*m);break;case"YXY":r.set(h*S,f*g,h*E,f*m);break;case"ZYZ":r.set(h*E,h*S,f*g,f*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function zs(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Tn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const x0={DEG2RAD:qs,RAD2DEG:Zo,generateUUID:ro,clamp:dt,euclideanModulo:ad,mapLinear:i0,inverseLerp:r0,lerp:qo,damp:s0,pingpong:o0,smoothstep:a0,smootherstep:l0,randInt:u0,randFloat:c0,randFloatSpread:f0,seededRandom:d0,degToRad:h0,radToDeg:p0,isPowerOfTwo:m0,ceilPowerOfTwo:g0,floorPowerOfTwo:_0,setQuaternionFromProperEuler:v0,normalize:Tn,denormalize:zs};class lt{constructor(e=0,t=0){lt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,a=e.elements;return this.x=a[0]*t+a[3]*s+a[6],this.y=a[1]*t+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(dt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(dt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*s-c*a+e.x,this.y=l*a+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,t,s,a,l,c,f,h,m){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,c,f,h,m)}set(e,t,s,a,l,c,f,h,m){const g=this.elements;return g[0]=e,g[1]=a,g[2]=f,g[3]=t,g[4]=l,g[5]=h,g[6]=s,g[7]=c,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,c=s[0],f=s[3],h=s[6],m=s[1],g=s[4],v=s[7],y=s[2],S=s[5],E=s[8],w=a[0],x=a[3],_=a[6],U=a[1],L=a[4],b=a[7],X=a[2],z=a[5],F=a[8];return l[0]=c*w+f*U+h*X,l[3]=c*x+f*L+h*z,l[6]=c*_+f*b+h*F,l[1]=m*w+g*U+v*X,l[4]=m*x+g*L+v*z,l[7]=m*_+g*b+v*F,l[2]=y*w+S*U+E*X,l[5]=y*x+S*L+E*z,l[8]=y*_+S*b+E*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],m=e[7],g=e[8];return t*c*g-t*f*m-s*l*g+s*f*h+a*l*m-a*c*h}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],m=e[7],g=e[8],v=g*c-f*m,y=f*h-g*l,S=m*l-c*h,E=t*v+s*y+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=v*w,e[1]=(a*m-g*s)*w,e[2]=(f*s-a*c)*w,e[3]=y*w,e[4]=(g*t-a*h)*w,e[5]=(a*l-f*t)*w,e[6]=S*w,e[7]=(s*h-m*t)*w,e[8]=(c*t-s*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,a,l,c,f){const h=Math.cos(l),m=Math.sin(l);return this.set(s*h,s*m,-s*(h*c+m*f)+c+e,-a*m,a*h,-a*(-m*c+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Uc.makeScale(e,t)),this}rotate(e){return this.premultiply(Uc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Uc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<9;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Uc=new st;function lg(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Gl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function y0(){const r=Gl("canvas");return r.style.display="block",r}const Zp={};function Bs(r){r in Zp||(Zp[r]=!0,console.warn(r))}function S0(r,e,t){return new Promise(function(s,a){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}function M0(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function E0(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Qp=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jp=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function T0(){const r={enabled:!0,workingColorSpace:no,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Pt&&(a.r=Vi(a.r),a.g=Vi(a.g),a.b=Vi(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Pt&&(a.r=$s(a.r),a.g=$s(a.g),a.b=$s(a.b))),a},fromWorkingColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},toWorkingColorSpace:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===yr?Hl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[no]:{primaries:e,whitePoint:s,transfer:Hl,toXYZ:Qp,fromXYZ:Jp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:e,whitePoint:s,transfer:Pt,toXYZ:Qp,fromXYZ:Jp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}}),r}const Et=T0();function Vi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function $s(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let As;class w0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{As===void 0&&(As=Gl("canvas")),As.width=e.width,As.height=e.height;const s=As.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=As}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gl("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=Vi(l[c]/255)*255;return s.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(Vi(t[s]/255)*255):t[s]=Vi(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let A0=0;class ug{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=ro(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(Nc(a[c].image)):l.push(Nc(a[c]))}else l=Nc(a);s.url=l}return t||(e.images[this.uuid]=s),s}}function Nc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?w0.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let R0=0;class Nn extends es{constructor(e=Nn.DEFAULT_IMAGE,t=Nn.DEFAULT_MAPPING,s=$r,a=$r,l=vi,c=Kr,f=ci,h=Gi,m=Nn.DEFAULT_ANISOTROPY,g=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=ro(),this.name="",this.source=new ug(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=h,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Km)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mf:e.x=e.x-Math.floor(e.x);break;case $r:e.x=e.x<0?0:1;break;case Ef:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mf:e.y=e.y-Math.floor(e.y);break;case $r:e.y=e.y<0?0:1;break;case Ef:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=Km;Nn.DEFAULT_ANISOTROPY=1;class Xt{constructor(e=0,t=0,s=0,a=1){Xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,a){return this.x=e,this.y=t,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*s+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*s+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*s+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,a,l;const h=e.elements,m=h[0],g=h[4],v=h[8],y=h[1],S=h[5],E=h[9],w=h[2],x=h[6],_=h[10];if(Math.abs(g-y)<.01&&Math.abs(v-w)<.01&&Math.abs(E-x)<.01){if(Math.abs(g+y)<.1&&Math.abs(v+w)<.1&&Math.abs(E+x)<.1&&Math.abs(m+S+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(m+1)/2,b=(S+1)/2,X=(_+1)/2,z=(g+y)/4,F=(v+w)/4,j=(E+x)/4;return L>b&&L>X?L<.01?(s=0,a=.707106781,l=.707106781):(s=Math.sqrt(L),a=z/s,l=F/s):b>X?b<.01?(s=.707106781,a=0,l=.707106781):(a=Math.sqrt(b),s=z/a,l=j/a):X<.01?(s=.707106781,a=.707106781,l=0):(l=Math.sqrt(X),s=F/l,a=j/l),this.set(s,a,l,t),this}let U=Math.sqrt((x-E)*(x-E)+(v-w)*(v-w)+(y-g)*(y-g));return Math.abs(U)<.001&&(U=1),this.x=(x-E)/U,this.y=(v-w)/U,this.z=(y-g)/U,this.w=Math.acos((m+S+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(dt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class C0 extends es{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Xt(0,0,e,t),this.scissorTest=!1,this.viewport=new Xt(0,0,e,t);const a={width:e,height:t,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const l=new Nn(a,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);l.flipY=!1,l.generateMipmaps=s.generateMipmaps,l.internalFormat=s.internalFormat,this.textures=[];const c=s.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=s;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,a=e.textures.length;s<a;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ug(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qr extends C0{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class cg extends Nn{constructor(e=null,t=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=fi,this.minFilter=fi,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class P0 extends Nn{constructor(e=null,t=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=fi,this.minFilter=fi,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jr{constructor(e=0,t=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=a}static slerpFlat(e,t,s,a,l,c,f){let h=s[a+0],m=s[a+1],g=s[a+2],v=s[a+3];const y=l[c+0],S=l[c+1],E=l[c+2],w=l[c+3];if(f===0){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(f===1){e[t+0]=y,e[t+1]=S,e[t+2]=E,e[t+3]=w;return}if(v!==w||h!==y||m!==S||g!==E){let x=1-f;const _=h*y+m*S+g*E+v*w,U=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const X=Math.sqrt(L),z=Math.atan2(X,_*U);x=Math.sin(x*z)/X,f=Math.sin(f*z)/X}const b=f*U;if(h=h*x+y*b,m=m*x+S*b,g=g*x+E*b,v=v*x+w*b,x===1-f){const X=1/Math.sqrt(h*h+m*m+g*g+v*v);h*=X,m*=X,g*=X,v*=X}}e[t]=h,e[t+1]=m,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,s,a,l,c){const f=s[a],h=s[a+1],m=s[a+2],g=s[a+3],v=l[c],y=l[c+1],S=l[c+2],E=l[c+3];return e[t]=f*E+g*v+h*S-m*y,e[t+1]=h*E+g*y+m*v-f*S,e[t+2]=m*E+g*S+f*y-h*v,e[t+3]=g*E-f*v-h*y-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,a){return this._x=e,this._y=t,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,a=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,m=f(s/2),g=f(a/2),v=f(l/2),y=h(s/2),S=h(a/2),E=h(l/2);switch(c){case"XYZ":this._x=y*g*v+m*S*E,this._y=m*S*v-y*g*E,this._z=m*g*E+y*S*v,this._w=m*g*v-y*S*E;break;case"YXZ":this._x=y*g*v+m*S*E,this._y=m*S*v-y*g*E,this._z=m*g*E-y*S*v,this._w=m*g*v+y*S*E;break;case"ZXY":this._x=y*g*v-m*S*E,this._y=m*S*v+y*g*E,this._z=m*g*E+y*S*v,this._w=m*g*v-y*S*E;break;case"ZYX":this._x=y*g*v-m*S*E,this._y=m*S*v+y*g*E,this._z=m*g*E-y*S*v,this._w=m*g*v+y*S*E;break;case"YZX":this._x=y*g*v+m*S*E,this._y=m*S*v+y*g*E,this._z=m*g*E-y*S*v,this._w=m*g*v-y*S*E;break;case"XZY":this._x=y*g*v-m*S*E,this._y=m*S*v-y*g*E,this._z=m*g*E+y*S*v,this._w=m*g*v+y*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],a=t[4],l=t[8],c=t[1],f=t[5],h=t[9],m=t[2],g=t[6],v=t[10],y=s+f+v;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(g-h)*S,this._y=(l-m)*S,this._z=(c-a)*S}else if(s>f&&s>v){const S=2*Math.sqrt(1+s-f-v);this._w=(g-h)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(l+m)/S}else if(f>v){const S=2*Math.sqrt(1+f-s-v);this._w=(l-m)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(h+g)/S}else{const S=2*Math.sqrt(1+v-s-f);this._w=(c-a)/S,this._x=(l+m)/S,this._y=(h+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,t/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,a=e._y,l=e._z,c=e._w,f=t._x,h=t._y,m=t._z,g=t._w;return this._x=s*g+c*f+a*m-l*h,this._y=a*g+c*h+l*f-s*m,this._z=l*g+c*m+s*h-a*f,this._w=c*g-s*f-a*h-l*m,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,a=this._y,l=this._z,c=this._w;let f=c*e._w+s*e._x+a*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=s,this._y=a,this._z=l,this;const h=1-f*f;if(h<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*s+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const m=Math.sqrt(h),g=Math.atan2(m,f),v=Math.sin((1-t)*g)/m,y=Math.sin(t*g)/m;return this._w=c*v+this._w*y,this._x=s*v+this._x*y,this._y=a*v+this._y*y,this._z=l*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),a=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,s=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(em.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(em.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*a,this.y=l[1]*t+l[4]*s+l[7]*a,this.z=l[2]*t+l[5]*s+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*s+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*s+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*s+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,s=this.y,a=this.z,l=e.x,c=e.y,f=e.z,h=e.w,m=2*(c*a-f*s),g=2*(f*t-l*a),v=2*(l*s-c*t);return this.x=t+h*m+c*v-f*g,this.y=s+h*g+f*m-l*v,this.z=a+h*v+l*g-c*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*a,this.y=l[1]*t+l[5]*s+l[9]*a,this.z=l[2]*t+l[6]*s+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(dt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,a=e.y,l=e.z,c=t.x,f=t.y,h=t.z;return this.x=a*h-l*f,this.y=l*c-s*h,this.z=s*f-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Fc.copy(this).projectOnVector(e),this.sub(Fc)}reflect(e){return this.sub(Fc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(dt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return t*t+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const a=Math.sin(t)*e;return this.x=a*Math.sin(s),this.y=Math.cos(t)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fc=new q,em=new Jr;class Jo{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,ai):ai.fromBufferAttribute(l,c),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ul.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ul.copy(s.boundingBox)),ul.applyMatrix4(e.matrixWorld),this.union(ul)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ho),cl.subVectors(this.max,Ho),Rs.subVectors(e.a,Ho),Cs.subVectors(e.b,Ho),Ps.subVectors(e.c,Ho),hr.subVectors(Cs,Rs),pr.subVectors(Ps,Cs),Br.subVectors(Rs,Ps);let t=[0,-hr.z,hr.y,0,-pr.z,pr.y,0,-Br.z,Br.y,hr.z,0,-hr.x,pr.z,0,-pr.x,Br.z,0,-Br.x,-hr.y,hr.x,0,-pr.y,pr.x,0,-Br.y,Br.x,0];return!Oc(t,Rs,Cs,Ps,cl)||(t=[1,0,0,0,1,0,0,0,1],!Oc(t,Rs,Cs,Ps,cl))?!1:(fl.crossVectors(hr,pr),t=[fl.x,fl.y,fl.z],Oc(t,Rs,Cs,Ps,cl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ii=[new q,new q,new q,new q,new q,new q,new q,new q],ai=new q,ul=new Jo,Rs=new q,Cs=new q,Ps=new q,hr=new q,pr=new q,Br=new q,Ho=new q,cl=new q,fl=new q,Hr=new q;function Oc(r,e,t,s,a){for(let l=0,c=r.length-3;l<=c;l+=3){Hr.fromArray(r,l);const f=a.x*Math.abs(Hr.x)+a.y*Math.abs(Hr.y)+a.z*Math.abs(Hr.z),h=e.dot(Hr),m=t.dot(Hr),g=s.dot(Hr);if(Math.max(-Math.max(h,m,g),Math.min(h,m,g))>f)return!1}return!0}const b0=new Jo,Vo=new q,kc=new q;class Yl{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):b0.setFromPoints(e).getCenter(s);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vo.subVectors(e,this.center);const t=Vo.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),a=(s-this.radius)*.5;this.center.addScaledVector(Vo,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vo.copy(e.center).add(kc)),this.expandByPoint(Vo.copy(e.center).sub(kc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ui=new q,zc=new q,dl=new q,mr=new q,Bc=new q,hl=new q,Hc=new q;class ql{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,t),Ui.distanceToSquared(e))}distanceSqToSegment(e,t,s,a){zc.copy(e).add(t).multiplyScalar(.5),dl.copy(t).sub(e).normalize(),mr.copy(this.origin).sub(zc);const l=e.distanceTo(t)*.5,c=-this.direction.dot(dl),f=mr.dot(this.direction),h=-mr.dot(dl),m=mr.lengthSq(),g=Math.abs(1-c*c);let v,y,S,E;if(g>0)if(v=c*h-f,y=c*f-h,E=l*g,v>=0)if(y>=-E)if(y<=E){const w=1/g;v*=w,y*=w,S=v*(v+c*y+2*f)+y*(c*v+y+2*h)+m}else y=l,v=Math.max(0,-(c*y+f)),S=-v*v+y*(y+2*h)+m;else y=-l,v=Math.max(0,-(c*y+f)),S=-v*v+y*(y+2*h)+m;else y<=-E?(v=Math.max(0,-(-c*l+f)),y=v>0?-l:Math.min(Math.max(-l,-h),l),S=-v*v+y*(y+2*h)+m):y<=E?(v=0,y=Math.min(Math.max(-l,-h),l),S=y*(y+2*h)+m):(v=Math.max(0,-(c*l+f)),y=v>0?l:Math.min(Math.max(-l,-h),l),S=-v*v+y*(y+2*h)+m);else y=c>0?-l:l,v=Math.max(0,-(c*y+f)),S=-v*v+y*(y+2*h)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(zc).addScaledVector(dl,y),S}intersectSphere(e,t){Ui.subVectors(e.center,this.origin);const s=Ui.dot(this.direction),a=Ui.dot(Ui)-s*s,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=s-c,h=s+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,a,l,c,f,h;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,y=this.origin;return m>=0?(s=(e.min.x-y.x)*m,a=(e.max.x-y.x)*m):(s=(e.max.x-y.x)*m,a=(e.min.x-y.x)*m),g>=0?(l=(e.min.y-y.y)*g,c=(e.max.y-y.y)*g):(l=(e.max.y-y.y)*g,c=(e.min.y-y.y)*g),s>c||l>a||((l>s||isNaN(s))&&(s=l),(c<a||isNaN(a))&&(a=c),v>=0?(f=(e.min.z-y.z)*v,h=(e.max.z-y.z)*v):(f=(e.max.z-y.z)*v,h=(e.min.z-y.z)*v),s>h||f>a)||((f>s||s!==s)&&(s=f),(h<a||a!==a)&&(a=h),a<0)?null:this.at(s>=0?s:a,t)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,t,s,a,l){Bc.subVectors(t,e),hl.subVectors(s,e),Hc.crossVectors(Bc,hl);let c=this.direction.dot(Hc),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;mr.subVectors(this.origin,e);const h=f*this.direction.dot(hl.crossVectors(mr,hl));if(h<0)return null;const m=f*this.direction.dot(Bc.cross(mr));if(m<0||h+m>c)return null;const g=-f*mr.dot(Hc);return g<0?null:this.at(g/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(e,t,s,a,l,c,f,h,m,g,v,y,S,E,w,x){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,c,f,h,m,g,v,y,S,E,w,x)}set(e,t,s,a,l,c,f,h,m,g,v,y,S,E,w,x){const _=this.elements;return _[0]=e,_[4]=t,_[8]=s,_[12]=a,_[1]=l,_[5]=c,_[9]=f,_[13]=h,_[2]=m,_[6]=g,_[10]=v,_[14]=y,_[3]=S,_[7]=E,_[11]=w,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,a=1/bs.setFromMatrixColumn(e,0).length(),l=1/bs.setFromMatrixColumn(e,1).length(),c=1/bs.setFromMatrixColumn(e,2).length();return t[0]=s[0]*a,t[1]=s[1]*a,t[2]=s[2]*a,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*c,t[9]=s[9]*c,t[10]=s[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,a=e.y,l=e.z,c=Math.cos(s),f=Math.sin(s),h=Math.cos(a),m=Math.sin(a),g=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const y=c*g,S=c*v,E=f*g,w=f*v;t[0]=h*g,t[4]=-h*v,t[8]=m,t[1]=S+E*m,t[5]=y-w*m,t[9]=-f*h,t[2]=w-y*m,t[6]=E+S*m,t[10]=c*h}else if(e.order==="YXZ"){const y=h*g,S=h*v,E=m*g,w=m*v;t[0]=y+w*f,t[4]=E*f-S,t[8]=c*m,t[1]=c*v,t[5]=c*g,t[9]=-f,t[2]=S*f-E,t[6]=w+y*f,t[10]=c*h}else if(e.order==="ZXY"){const y=h*g,S=h*v,E=m*g,w=m*v;t[0]=y-w*f,t[4]=-c*v,t[8]=E+S*f,t[1]=S+E*f,t[5]=c*g,t[9]=w-y*f,t[2]=-c*m,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){const y=c*g,S=c*v,E=f*g,w=f*v;t[0]=h*g,t[4]=E*m-S,t[8]=y*m+w,t[1]=h*v,t[5]=w*m+y,t[9]=S*m-E,t[2]=-m,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){const y=c*h,S=c*m,E=f*h,w=f*m;t[0]=h*g,t[4]=w-y*v,t[8]=E*v+S,t[1]=v,t[5]=c*g,t[9]=-f*g,t[2]=-m*g,t[6]=S*v+E,t[10]=y-w*v}else if(e.order==="XZY"){const y=c*h,S=c*m,E=f*h,w=f*m;t[0]=h*g,t[4]=-v,t[8]=m*g,t[1]=y*v+w,t[5]=c*g,t[9]=S*v-E,t[2]=E*v-S,t[6]=f*g,t[10]=w*v+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(D0,e,L0)}lookAt(e,t,s){const a=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),gr.crossVectors(s,Hn),gr.lengthSq()===0&&(Math.abs(s.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),gr.crossVectors(s,Hn)),gr.normalize(),pl.crossVectors(Hn,gr),a[0]=gr.x,a[4]=pl.x,a[8]=Hn.x,a[1]=gr.y,a[5]=pl.y,a[9]=Hn.y,a[2]=gr.z,a[6]=pl.z,a[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,c=s[0],f=s[4],h=s[8],m=s[12],g=s[1],v=s[5],y=s[9],S=s[13],E=s[2],w=s[6],x=s[10],_=s[14],U=s[3],L=s[7],b=s[11],X=s[15],z=a[0],F=a[4],j=a[8],C=a[12],R=a[1],B=a[5],oe=a[9],ee=a[13],fe=a[2],he=a[6],se=a[10],le=a[14],k=a[3],ae=a[7],re=a[11],I=a[15];return l[0]=c*z+f*R+h*fe+m*k,l[4]=c*F+f*B+h*he+m*ae,l[8]=c*j+f*oe+h*se+m*re,l[12]=c*C+f*ee+h*le+m*I,l[1]=g*z+v*R+y*fe+S*k,l[5]=g*F+v*B+y*he+S*ae,l[9]=g*j+v*oe+y*se+S*re,l[13]=g*C+v*ee+y*le+S*I,l[2]=E*z+w*R+x*fe+_*k,l[6]=E*F+w*B+x*he+_*ae,l[10]=E*j+w*oe+x*se+_*re,l[14]=E*C+w*ee+x*le+_*I,l[3]=U*z+L*R+b*fe+X*k,l[7]=U*F+L*B+b*he+X*ae,l[11]=U*j+L*oe+b*se+X*re,l[15]=U*C+L*ee+b*le+X*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],a=e[8],l=e[12],c=e[1],f=e[5],h=e[9],m=e[13],g=e[2],v=e[6],y=e[10],S=e[14],E=e[3],w=e[7],x=e[11],_=e[15];return E*(+l*h*v-a*m*v-l*f*y+s*m*y+a*f*S-s*h*S)+w*(+t*h*S-t*m*y+l*c*y-a*c*S+a*m*g-l*h*g)+x*(+t*m*v-t*f*S-l*c*v+s*c*S+l*f*g-s*m*g)+_*(-a*f*g-t*h*v+t*f*y+a*c*v-s*c*y+s*h*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],m=e[7],g=e[8],v=e[9],y=e[10],S=e[11],E=e[12],w=e[13],x=e[14],_=e[15],U=v*x*m-w*y*m+w*h*S-f*x*S-v*h*_+f*y*_,L=E*y*m-g*x*m-E*h*S+c*x*S+g*h*_-c*y*_,b=g*w*m-E*v*m+E*f*S-c*w*S-g*f*_+c*v*_,X=E*v*h-g*w*h-E*f*y+c*w*y+g*f*x-c*v*x,z=t*U+s*L+a*b+l*X;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/z;return e[0]=U*F,e[1]=(w*y*l-v*x*l-w*a*S+s*x*S+v*a*_-s*y*_)*F,e[2]=(f*x*l-w*h*l+w*a*m-s*x*m-f*a*_+s*h*_)*F,e[3]=(v*h*l-f*y*l-v*a*m+s*y*m+f*a*S-s*h*S)*F,e[4]=L*F,e[5]=(g*x*l-E*y*l+E*a*S-t*x*S-g*a*_+t*y*_)*F,e[6]=(E*h*l-c*x*l-E*a*m+t*x*m+c*a*_-t*h*_)*F,e[7]=(c*y*l-g*h*l+g*a*m-t*y*m-c*a*S+t*h*S)*F,e[8]=b*F,e[9]=(E*v*l-g*w*l-E*s*S+t*w*S+g*s*_-t*v*_)*F,e[10]=(c*w*l-E*f*l+E*s*m-t*w*m-c*s*_+t*f*_)*F,e[11]=(g*f*l-c*v*l-g*s*m+t*v*m+c*s*S-t*f*S)*F,e[12]=X*F,e[13]=(g*w*a-E*v*a+E*s*y-t*w*y-g*s*x+t*v*x)*F,e[14]=(E*f*a-c*w*a-E*s*h+t*w*h+c*s*x-t*f*x)*F,e[15]=(c*v*a-g*f*a+g*s*h-t*v*h-c*s*y+t*f*y)*F,this}scale(e){const t=this.elements,s=e.x,a=e.y,l=e.z;return t[0]*=s,t[4]*=a,t[8]*=l,t[1]*=s,t[5]*=a,t[9]*=l,t[2]*=s,t[6]*=a,t[10]*=l,t[3]*=s,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,a))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),a=Math.sin(t),l=1-s,c=e.x,f=e.y,h=e.z,m=l*c,g=l*f;return this.set(m*c+s,m*f-a*h,m*h+a*f,0,m*f+a*h,g*f+s,g*h-a*c,0,m*h-a*f,g*h+a*c,l*h*h+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,a,l,c){return this.set(1,s,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,s){const a=this.elements,l=t._x,c=t._y,f=t._z,h=t._w,m=l+l,g=c+c,v=f+f,y=l*m,S=l*g,E=l*v,w=c*g,x=c*v,_=f*v,U=h*m,L=h*g,b=h*v,X=s.x,z=s.y,F=s.z;return a[0]=(1-(w+_))*X,a[1]=(S+b)*X,a[2]=(E-L)*X,a[3]=0,a[4]=(S-b)*z,a[5]=(1-(y+_))*z,a[6]=(x+U)*z,a[7]=0,a[8]=(E+L)*F,a[9]=(x-U)*F,a[10]=(1-(y+w))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,s){const a=this.elements;let l=bs.set(a[0],a[1],a[2]).length();const c=bs.set(a[4],a[5],a[6]).length(),f=bs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],li.copy(this);const m=1/l,g=1/c,v=1/f;return li.elements[0]*=m,li.elements[1]*=m,li.elements[2]*=m,li.elements[4]*=g,li.elements[5]*=g,li.elements[6]*=g,li.elements[8]*=v,li.elements[9]*=v,li.elements[10]*=v,t.setFromRotationMatrix(li),s.x=l,s.y=c,s.z=f,this}makePerspective(e,t,s,a,l,c,f=Hi){const h=this.elements,m=2*l/(t-e),g=2*l/(s-a),v=(t+e)/(t-e),y=(s+a)/(s-a);let S,E;if(f===Hi)S=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(f===Vl)S=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=g,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,s,a,l,c,f=Hi){const h=this.elements,m=1/(t-e),g=1/(s-a),v=1/(c-l),y=(t+e)*m,S=(s+a)*g;let E,w;if(f===Hi)E=(c+l)*v,w=-2*v;else if(f===Vl)E=l*v,w=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-y,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=w,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<16;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const bs=new q,li=new Vt,D0=new q(0,0,0),L0=new q(1,1,1),gr=new q,pl=new q,Hn=new q,tm=new Vt,nm=new Jr;class Wi{constructor(e=0,t=0,s=0,a=Wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,a=this._order){return this._x=e,this._y=t,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const a=e.elements,l=a[0],c=a[4],f=a[8],h=a[1],m=a[5],g=a[9],v=a[2],y=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(dt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-dt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return tm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tm,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nm.setFromEuler(this),this.setFromQuaternion(nm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wi.DEFAULT_ORDER="XYZ";class ld{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let I0=0;const im=new q,Ds=new Jr,Ni=new Vt,ml=new q,Go=new q,U0=new q,N0=new Jr,rm=new q(1,0,0),sm=new q(0,1,0),om=new q(0,0,1),am={type:"added"},F0={type:"removed"},Ls={type:"childadded",child:null},Vc={type:"childremoved",child:null};class Fn extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=ro(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const e=new q,t=new Wi,s=new Jr,a=new q(1,1,1);function l(){s.setFromEuler(t,!1)}function c(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Vt},normalMatrix:{value:new st}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ld,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(rm,e)}rotateY(e){return this.rotateOnAxis(sm,e)}rotateZ(e){return this.rotateOnAxis(om,e)}translateOnAxis(e,t){return im.copy(e).applyQuaternion(this.quaternion),this.position.add(im.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rm,e)}translateY(e){return this.translateOnAxis(sm,e)}translateZ(e){return this.translateOnAxis(om,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?ml.copy(e):ml.set(e,t,s);const a=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(Go,ml,this.up):Ni.lookAt(ml,Go,this.up),this.quaternion.setFromRotationMatrix(Ni),a&&(Ni.extractRotation(a.matrixWorld),Ds.setFromRotationMatrix(Ni),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(am),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(F0),Vc.child=e,this.dispatchEvent(Vc),Vc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(am),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,a=this.children.length;s<a;s++){const c=this.children[s].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,U0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,N0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let m=0,g=h.length;m<g;m++){const v=h[m];l(e.shapes,v)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,m=this.material.length;h<m;h++)f.push(l(e.materials,this.material[h]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];a.animations.push(l(e.animations,h))}}if(t){const f=c(e.geometries),h=c(e.materials),m=c(e.textures),g=c(e.images),v=c(e.shapes),y=c(e.skeletons),S=c(e.animations),E=c(e.nodes);f.length>0&&(s.geometries=f),h.length>0&&(s.materials=h),m.length>0&&(s.textures=m),g.length>0&&(s.images=g),v.length>0&&(s.shapes=v),y.length>0&&(s.skeletons=y),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=a,s;function c(f){const h=[];for(const m in f){const g=f[m];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}Fn.DEFAULT_UP=new q(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ui=new q,Fi=new q,Gc=new q,Oi=new q,Is=new q,Us=new q,lm=new q,Wc=new q,Xc=new q,jc=new q,Yc=new Xt,qc=new Xt,$c=new Xt;class Qn{constructor(e=new q,t=new q,s=new q){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,a){a.subVectors(s,t),ui.subVectors(e,t),a.cross(ui);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,s,a,l){ui.subVectors(a,t),Fi.subVectors(s,t),Gc.subVectors(e,t);const c=ui.dot(ui),f=ui.dot(Fi),h=ui.dot(Gc),m=Fi.dot(Fi),g=Fi.dot(Gc),v=c*m-f*f;if(v===0)return l.set(0,0,0),null;const y=1/v,S=(m*h-f*g)*y,E=(c*g-f*h)*y;return l.set(1-S-E,E,S)}static containsPoint(e,t,s,a){return this.getBarycoord(e,t,s,a,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,t,s,a,l,c,f,h){return this.getBarycoord(e,t,s,a,Oi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Oi.x),h.addScaledVector(c,Oi.y),h.addScaledVector(f,Oi.z),h)}static getInterpolatedAttribute(e,t,s,a,l,c){return Yc.setScalar(0),qc.setScalar(0),$c.setScalar(0),Yc.fromBufferAttribute(e,t),qc.fromBufferAttribute(e,s),$c.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Yc,l.x),c.addScaledVector(qc,l.y),c.addScaledVector($c,l.z),c}static isFrontFacing(e,t,s,a){return ui.subVectors(s,t),Fi.subVectors(e,t),ui.cross(Fi).dot(a)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,a){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,s,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),ui.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,a,l){return Qn.getInterpolation(e,this.a,this.b,this.c,t,s,a,l)}containsPoint(e){return Qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,a=this.b,l=this.c;let c,f;Is.subVectors(a,s),Us.subVectors(l,s),Wc.subVectors(e,s);const h=Is.dot(Wc),m=Us.dot(Wc);if(h<=0&&m<=0)return t.copy(s);Xc.subVectors(e,a);const g=Is.dot(Xc),v=Us.dot(Xc);if(g>=0&&v<=g)return t.copy(a);const y=h*v-g*m;if(y<=0&&h>=0&&g<=0)return c=h/(h-g),t.copy(s).addScaledVector(Is,c);jc.subVectors(e,l);const S=Is.dot(jc),E=Us.dot(jc);if(E>=0&&S<=E)return t.copy(l);const w=S*m-h*E;if(w<=0&&m>=0&&E<=0)return f=m/(m-E),t.copy(s).addScaledVector(Us,f);const x=g*E-S*v;if(x<=0&&v-g>=0&&S-E>=0)return lm.subVectors(l,a),f=(v-g)/(v-g+(S-E)),t.copy(a).addScaledVector(lm,f);const _=1/(x+w+y);return c=w*_,f=y*_,t.copy(s).addScaledVector(Is,c).addScaledVector(Us,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},gl={h:0,s:0,l:0};function Kc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class wt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,t),this}setRGB(e,t,s,a=Et.workingColorSpace){return this.r=e,this.g=t,this.b=s,Et.toWorkingColorSpace(this,a),this}setHSL(e,t,s,a=Et.workingColorSpace){if(e=ad(e,1),t=dt(t,0,1),s=dt(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,c=2*s-l;this.r=Kc(c,l,e+1/3),this.g=Kc(c,l,e),this.b=Kc(c,l,e-1/3)}return Et.toWorkingColorSpace(this,a),this}setStyle(e,t=Kn){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kn){const s=fg[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return Et.fromWorkingColorSpace(gn.copy(this),e),Math.round(dt(gn.r*255,0,255))*65536+Math.round(dt(gn.g*255,0,255))*256+Math.round(dt(gn.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.fromWorkingColorSpace(gn.copy(this),t);const s=gn.r,a=gn.g,l=gn.b,c=Math.max(s,a,l),f=Math.min(s,a,l);let h,m;const g=(f+c)/2;if(f===c)h=0,m=0;else{const v=c-f;switch(m=g<=.5?v/(c+f):v/(2-c-f),c){case s:h=(a-l)/v+(a<l?6:0);break;case a:h=(l-s)/v+2;break;case l:h=(s-a)/v+4;break}h/=6}return e.h=h,e.s=m,e.l=g,e}getRGB(e,t=Et.workingColorSpace){return Et.fromWorkingColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=Kn){Et.fromWorkingColorSpace(gn.copy(this),e);const t=gn.r,s=gn.g,a=gn.b;return e!==Kn?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,t,s){return this.getHSL(_r),this.setHSL(_r.h+e,_r.s+t,_r.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(_r),e.getHSL(gl);const s=qo(_r.h,gl.h,t),a=qo(_r.s,gl.s,t),l=qo(_r.l,gl.l,t);return this.setHSL(s,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*a,this.g=l[1]*t+l[4]*s+l[7]*a,this.b=l[2]*t+l[5]*s+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gn=new wt;wt.NAMES=fg;let O0=0;class ea extends es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=ro(),this.name="",this.type="Material",this.blending=js,this.side=Er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ff,this.blendDst=df,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(s.blending=this.blending),this.side!==Er&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==ff&&(s.blendSrc=this.blendSrc),this.blendDst!==df&&(s.blendDst=this.blendDst),this.blendEquation!==Yr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yp&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(s.textures=l),c.length>0&&(s.images=c)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const a=t.length;s=new Array(a);for(let l=0;l!==a;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class dg extends ea{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=$m,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new q,_l=new lt;class yi{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=qp,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)_l.fromBufferAttribute(this,t),_l.applyMatrix3(e),this.setXY(t,_l.x,_l.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=zs(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Tn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),s=Tn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,a){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),s=Tn(s,this.array),a=Tn(a,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,t,s,a,l){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),s=Tn(s,this.array),a=Tn(a,this.array),l=Tn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qp&&(e.usage=this.usage),e}}class hg extends yi{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class pg extends yi{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class Jn extends yi{constructor(e,t,s){super(new Float32Array(e),t,s)}}let k0=0;const $n=new Vt,Zc=new Fn,Ns=new q,Vn=new Jo,Wo=new Jo,rn=new q;class Mi extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=ro(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lg(e)?pg:hg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new st().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,t,s){return $n.makeTranslation(e,t,s),this.applyMatrix4($n),this}scale(e,t,s){return $n.makeScale(e,t,s),this.applyMatrix4($n),this}lookAt(e){return Zc.lookAt(e),Zc.updateMatrix(),this.applyMatrix4(Zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Jn(s,3))}else{const s=Math.min(e.length,t.count);for(let a=0;a<s;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];Vn.setFromBufferAttribute(l),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const s=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];Wo.setFromBufferAttribute(f),this.morphTargetsRelative?(rn.addVectors(Vn.min,Wo.min),Vn.expandByPoint(rn),rn.addVectors(Vn.max,Wo.max),Vn.expandByPoint(rn)):(Vn.expandByPoint(Wo.min),Vn.expandByPoint(Wo.max))}Vn.getCenter(s);let a=0;for(let l=0,c=e.count;l<c;l++)rn.fromBufferAttribute(e,l),a=Math.max(a,s.distanceToSquared(rn));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],h=this.morphTargetsRelative;for(let m=0,g=f.count;m<g;m++)rn.fromBufferAttribute(f,m),h&&(Ns.fromBufferAttribute(e,m),rn.add(Ns)),a=Math.max(a,s.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yi(new Float32Array(4*s.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let j=0;j<s.count;j++)f[j]=new q,h[j]=new q;const m=new q,g=new q,v=new q,y=new lt,S=new lt,E=new lt,w=new q,x=new q;function _(j,C,R){m.fromBufferAttribute(s,j),g.fromBufferAttribute(s,C),v.fromBufferAttribute(s,R),y.fromBufferAttribute(l,j),S.fromBufferAttribute(l,C),E.fromBufferAttribute(l,R),g.sub(m),v.sub(m),S.sub(y),E.sub(y);const B=1/(S.x*E.y-E.x*S.y);isFinite(B)&&(w.copy(g).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(B),x.copy(v).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(B),f[j].add(w),f[C].add(w),f[R].add(w),h[j].add(x),h[C].add(x),h[R].add(x))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let j=0,C=U.length;j<C;++j){const R=U[j],B=R.start,oe=R.count;for(let ee=B,fe=B+oe;ee<fe;ee+=3)_(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const L=new q,b=new q,X=new q,z=new q;function F(j){X.fromBufferAttribute(a,j),z.copy(X);const C=f[j];L.copy(C),L.sub(X.multiplyScalar(X.dot(C))).normalize(),b.crossVectors(z,C);const B=b.dot(h[j])<0?-1:1;c.setXYZW(j,L.x,L.y,L.z,B)}for(let j=0,C=U.length;j<C;++j){const R=U[j],B=R.start,oe=R.count;for(let ee=B,fe=B+oe;ee<fe;ee+=3)F(e.getX(ee+0)),F(e.getX(ee+1)),F(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new yi(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let y=0,S=s.count;y<S;y++)s.setXYZ(y,0,0,0);const a=new q,l=new q,c=new q,f=new q,h=new q,m=new q,g=new q,v=new q;if(e)for(let y=0,S=e.count;y<S;y+=3){const E=e.getX(y+0),w=e.getX(y+1),x=e.getX(y+2);a.fromBufferAttribute(t,E),l.fromBufferAttribute(t,w),c.fromBufferAttribute(t,x),g.subVectors(c,l),v.subVectors(a,l),g.cross(v),f.fromBufferAttribute(s,E),h.fromBufferAttribute(s,w),m.fromBufferAttribute(s,x),f.add(g),h.add(g),m.add(g),s.setXYZ(E,f.x,f.y,f.z),s.setXYZ(w,h.x,h.y,h.z),s.setXYZ(x,m.x,m.y,m.z)}else for(let y=0,S=t.count;y<S;y+=3)a.fromBufferAttribute(t,y+0),l.fromBufferAttribute(t,y+1),c.fromBufferAttribute(t,y+2),g.subVectors(c,l),v.subVectors(a,l),g.cross(v),s.setXYZ(y+0,g.x,g.y,g.z),s.setXYZ(y+1,g.x,g.y,g.z),s.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(f,h){const m=f.array,g=f.itemSize,v=f.normalized,y=new m.constructor(h.length*g);let S=0,E=0;for(let w=0,x=h.length;w<x;w++){f.isInterleavedBufferAttribute?S=h[w]*f.data.stride+f.offset:S=h[w]*g;for(let _=0;_<g;_++)y[E++]=m[S++]}return new yi(y,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mi,s=this.index.array,a=this.attributes;for(const f in a){const h=a[f],m=e(h,s);t.setAttribute(f,m)}const l=this.morphAttributes;for(const f in l){const h=[],m=l[f];for(let g=0,v=m.length;g<v;g++){const y=m[g],S=e(y,s);h.push(S)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const m=c[f];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const h in s){const m=s[h];e.data.attributes[h]=m.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],g=[];for(let v=0,y=m.length;v<y;v++){const S=m[v];g.push(S.toJSON(e.data))}g.length>0&&(a[h]=g,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(t));const a=e.attributes;for(const m in a){const g=a[m];this.setAttribute(m,g.clone(t))}const l=e.morphAttributes;for(const m in l){const g=[],v=l[m];for(let y=0,S=v.length;y<S;y++)g.push(v[y].clone(t));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let m=0,g=c.length;m<g;m++){const v=c[m];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const um=new Vt,Vr=new ql,vl=new Yl,cm=new q,xl=new q,yl=new q,Sl=new q,Qc=new q,Ml=new q,fm=new q,El=new q;class xi extends Fn{constructor(e=new Mi,t=new dg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,a=s.attributes.position,l=s.morphAttributes.position,c=s.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){Ml.set(0,0,0);for(let h=0,m=l.length;h<m;h++){const g=f[h],v=l[h];g!==0&&(Qc.fromBufferAttribute(v,e),c?Ml.addScaledVector(Qc,g):Ml.addScaledVector(Qc.sub(t),g))}t.add(Ml)}return t}raycast(e,t){const s=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),vl.copy(s.boundingSphere),vl.applyMatrix4(l),Vr.copy(e.ray).recast(e.near),!(vl.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(vl,cm)===null||Vr.origin.distanceToSquared(cm)>(e.far-e.near)**2))&&(um.copy(l).invert(),Vr.copy(e.ray).applyMatrix4(um),!(s.boundingBox!==null&&Vr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,Vr)))}_computeIntersections(e,t,s){let a;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,m=l.attributes.uv,g=l.attributes.uv1,v=l.attributes.normal,y=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,w=y.length;E<w;E++){const x=y[E],_=c[x.materialIndex],U=Math.max(x.start,S.start),L=Math.min(f.count,Math.min(x.start+x.count,S.start+S.count));for(let b=U,X=L;b<X;b+=3){const z=f.getX(b),F=f.getX(b+1),j=f.getX(b+2);a=Tl(this,_,e,s,m,g,v,z,F,j),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),w=Math.min(f.count,S.start+S.count);for(let x=E,_=w;x<_;x+=3){const U=f.getX(x),L=f.getX(x+1),b=f.getX(x+2);a=Tl(this,c,e,s,m,g,v,U,L,b),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(c))for(let E=0,w=y.length;E<w;E++){const x=y[E],_=c[x.materialIndex],U=Math.max(x.start,S.start),L=Math.min(h.count,Math.min(x.start+x.count,S.start+S.count));for(let b=U,X=L;b<X;b+=3){const z=b,F=b+1,j=b+2;a=Tl(this,_,e,s,m,g,v,z,F,j),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),w=Math.min(h.count,S.start+S.count);for(let x=E,_=w;x<_;x+=3){const U=x,L=x+1,b=x+2;a=Tl(this,c,e,s,m,g,v,U,L,b),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}}}function z0(r,e,t,s,a,l,c,f){let h;if(e.side===Un?h=s.intersectTriangle(c,l,a,!0,f):h=s.intersectTriangle(a,l,c,e.side===Er,f),h===null)return null;El.copy(f),El.applyMatrix4(r.matrixWorld);const m=t.ray.origin.distanceTo(El);return m<t.near||m>t.far?null:{distance:m,point:El.clone(),object:r}}function Tl(r,e,t,s,a,l,c,f,h,m){r.getVertexPosition(f,xl),r.getVertexPosition(h,yl),r.getVertexPosition(m,Sl);const g=z0(r,e,t,s,xl,yl,Sl,fm);if(g){const v=new q;Qn.getBarycoord(fm,xl,yl,Sl,v),a&&(g.uv=Qn.getInterpolatedAttribute(a,f,h,m,v,new lt)),l&&(g.uv1=Qn.getInterpolatedAttribute(l,f,h,m,v,new lt)),c&&(g.normal=Qn.getInterpolatedAttribute(c,f,h,m,v,new q),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const y={a:f,b:h,c:m,normal:new q,materialIndex:0};Qn.getNormal(xl,yl,Sl,y.normal),g.face=y,g.barycoord=v}return g}class so extends Mi{constructor(e=1,t=1,s=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const h=[],m=[],g=[],v=[];let y=0,S=0;E("z","y","x",-1,-1,s,t,e,c,l,0),E("z","y","x",1,-1,s,t,-e,c,l,1),E("x","z","y",1,1,e,s,t,a,c,2),E("x","z","y",1,-1,e,s,-t,a,c,3),E("x","y","z",1,-1,e,t,s,a,l,4),E("x","y","z",-1,-1,e,t,-s,a,l,5),this.setIndex(h),this.setAttribute("position",new Jn(m,3)),this.setAttribute("normal",new Jn(g,3)),this.setAttribute("uv",new Jn(v,2));function E(w,x,_,U,L,b,X,z,F,j,C){const R=b/F,B=X/j,oe=b/2,ee=X/2,fe=z/2,he=F+1,se=j+1;let le=0,k=0;const ae=new q;for(let re=0;re<se;re++){const I=re*B-ee;for(let ne=0;ne<he;ne++){const Ie=ne*R-oe;ae[w]=Ie*U,ae[x]=I*L,ae[_]=fe,m.push(ae.x,ae.y,ae.z),ae[w]=0,ae[x]=0,ae[_]=z>0?1:-1,g.push(ae.x,ae.y,ae.z),v.push(ne/F),v.push(1-re/j),le+=1}}for(let re=0;re<j;re++)for(let I=0;I<F;I++){const ne=y+I+he*re,Ie=y+I+he*(re+1),Z=y+(I+1)+he*(re+1),ue=y+(I+1)+he*re;h.push(ne,Ie,ue),h.push(Ie,Z,ue),k+=6}f.addGroup(S,k,C),S+=k,y+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new so(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function io(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const a=r[t][s];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=a.clone():Array.isArray(a)?e[t][s]=a.slice():e[t][s]=a}}return e}function wn(r){const e={};for(let t=0;t<r.length;t++){const s=io(r[t]);for(const a in s)e[a]=s[a]}return e}function B0(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function mg(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const H0={clone:io,merge:wn};var V0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,G0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends ea{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=V0,this.fragmentShader=G0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=io(e.uniforms),this.uniformsGroups=B0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class gg extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=Hi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vr=new q,dm=new lt,hm=new lt;class Zn extends gg{constructor(e=50,t=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zo*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vr.x,vr.y).multiplyScalar(-e/vr.z),vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(vr.x,vr.y).multiplyScalar(-e/vr.z)}getViewSize(e,t){return this.getViewBounds(e,dm,hm),t.subVectors(hm,dm)}setViewOffset(e,t,s,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qs*.5*this.fov)/this.zoom,s=2*t,a=this.aspect*s,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,m=c.fullHeight;l+=c.offsetX*a/h,t-=c.offsetY*s/m,a*=c.width/h,s*=c.height/m}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fs=-90,Os=1;class W0 extends Fn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Zn(Fs,Os,e,t);a.layers=this.layers,this.add(a);const l=new Zn(Fs,Os,e,t);l.layers=this.layers,this.add(l);const c=new Zn(Fs,Os,e,t);c.layers=this.layers,this.add(c);const f=new Zn(Fs,Os,e,t);f.layers=this.layers,this.add(f);const h=new Zn(Fs,Os,e,t);h.layers=this.layers,this.add(h);const m=new Zn(Fs,Os,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,a,l,c,f,h]=t;for(const m of t)this.remove(m);if(e===Hi)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Vl)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,m,g]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,a),e.render(t,l),e.setRenderTarget(s,1,a),e.render(t,c),e.setRenderTarget(s,2,a),e.render(t,f),e.setRenderTarget(s,3,a),e.render(t,h),e.setRenderTarget(s,4,a),e.render(t,m),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,a),e.render(t,g),e.setRenderTarget(v,y,S),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class _g extends Nn{constructor(e,t,s,a,l,c,f,h,m,g){e=e!==void 0?e:[],t=t!==void 0?t:Qs,super(e,t,s,a,l,c,f,h,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class X0 extends Qr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];this.texture=new _g(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:vi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new so(5,5,5),l=new Xi({name:"CubemapFromEquirect",uniforms:io(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Un,blending:Sr});l.uniforms.tEquirect.value=t;const c=new xi(a,l),f=t.minFilter;return t.minFilter===Kr&&(t.minFilter=vi),new W0(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,s,a){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,s,a);e.setRenderTarget(l)}}class j0 extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Jc=new q,Y0=new q,q0=new st;class xr{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,a){return this.normal.set(e,t,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const a=Jc.subVectors(s,t).cross(Y0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(Jc),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||q0.getNormalMatrix(e),a=this.coplanarPoint(Jc).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gr=new Yl,wl=new q;class vg{constructor(e=new xr,t=new xr,s=new xr,a=new xr,l=new xr,c=new xr){this.planes=[e,t,s,a,l,c]}set(e,t,s,a,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Hi){const s=this.planes,a=e.elements,l=a[0],c=a[1],f=a[2],h=a[3],m=a[4],g=a[5],v=a[6],y=a[7],S=a[8],E=a[9],w=a[10],x=a[11],_=a[12],U=a[13],L=a[14],b=a[15];if(s[0].setComponents(h-l,y-m,x-S,b-_).normalize(),s[1].setComponents(h+l,y+m,x+S,b+_).normalize(),s[2].setComponents(h+c,y+g,x+E,b+U).normalize(),s[3].setComponents(h-c,y-g,x-E,b-U).normalize(),s[4].setComponents(h-f,y-v,x-w,b-L).normalize(),t===Hi)s[5].setComponents(h+f,y+v,x+w,b+L).normalize();else if(t===Vl)s[5].setComponents(f,v,w,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(e){return Gr.center.set(0,0,0),Gr.radius=.7071067811865476,Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){const t=this.planes,s=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const a=t[s];if(wl.x=a.normal.x>0?e.max.x:e.min.x,wl.y=a.normal.y>0?e.max.y:e.min.y,wl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(wl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ud extends ea{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wl=new q,Xl=new q,pm=new Vt,Xo=new ql,Al=new Yl,ef=new q,mm=new q;class $0 extends Fn{constructor(e=new Mi,t=new ud){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let a=1,l=t.count;a<l;a++)Wl.fromBufferAttribute(t,a-1),Xl.fromBufferAttribute(t,a),s[a]=s[a-1],s[a]+=Wl.distanceTo(Xl);e.setAttribute("lineDistance",new Jn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const s=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,c=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Al.copy(s.boundingSphere),Al.applyMatrix4(a),Al.radius+=l,e.ray.intersectsSphere(Al)===!1)return;pm.copy(a).invert(),Xo.copy(e.ray).applyMatrix4(pm);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,m=this.isLineSegments?2:1,g=s.index,y=s.attributes.position;if(g!==null){const S=Math.max(0,c.start),E=Math.min(g.count,c.start+c.count);for(let w=S,x=E-1;w<x;w+=m){const _=g.getX(w),U=g.getX(w+1),L=Rl(this,e,Xo,h,_,U);L&&t.push(L)}if(this.isLineLoop){const w=g.getX(E-1),x=g.getX(S),_=Rl(this,e,Xo,h,w,x);_&&t.push(_)}}else{const S=Math.max(0,c.start),E=Math.min(y.count,c.start+c.count);for(let w=S,x=E-1;w<x;w+=m){const _=Rl(this,e,Xo,h,w,w+1);_&&t.push(_)}if(this.isLineLoop){const w=Rl(this,e,Xo,h,E-1,S);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Rl(r,e,t,s,a,l){const c=r.geometry.attributes.position;if(Wl.fromBufferAttribute(c,a),Xl.fromBufferAttribute(c,l),t.distanceSqToSegment(Wl,Xl,ef,mm)>s)return;ef.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo(ef);if(!(h<e.near||h>e.far))return{distance:h,point:mm.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const gm=new q,_m=new q;class xg extends $0{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[];for(let a=0,l=t.count;a<l;a+=2)gm.fromBufferAttribute(t,a),_m.fromBufferAttribute(t,a+1),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+gm.distanceTo(_m);e.setAttribute("lineDistance",new Jn(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}let Vs=class extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}};class yg extends Nn{constructor(e,t,s,a,l,c,f,h,m,g=Ys){if(g!==Ys&&g!==to)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&g===Ys&&(s=Zr),s===void 0&&g===to&&(s=eo),super(null,a,l,c,f,h,g,s,m),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=f!==void 0?f:fi,this.minFilter=h!==void 0?h:fi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Cl=new q,Pl=new q,tf=new q,bl=new Qn;class K0 extends Mi{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const a=Math.pow(10,4),l=Math.cos(qs*t),c=e.getIndex(),f=e.getAttribute("position"),h=c?c.count:f.count,m=[0,0,0],g=["a","b","c"],v=new Array(3),y={},S=[];for(let E=0;E<h;E+=3){c?(m[0]=c.getX(E),m[1]=c.getX(E+1),m[2]=c.getX(E+2)):(m[0]=E,m[1]=E+1,m[2]=E+2);const{a:w,b:x,c:_}=bl;if(w.fromBufferAttribute(f,m[0]),x.fromBufferAttribute(f,m[1]),_.fromBufferAttribute(f,m[2]),bl.getNormal(tf),v[0]=`${Math.round(w.x*a)},${Math.round(w.y*a)},${Math.round(w.z*a)}`,v[1]=`${Math.round(x.x*a)},${Math.round(x.y*a)},${Math.round(x.z*a)}`,v[2]=`${Math.round(_.x*a)},${Math.round(_.y*a)},${Math.round(_.z*a)}`,!(v[0]===v[1]||v[1]===v[2]||v[2]===v[0]))for(let U=0;U<3;U++){const L=(U+1)%3,b=v[U],X=v[L],z=bl[g[U]],F=bl[g[L]],j=`${b}_${X}`,C=`${X}_${b}`;C in y&&y[C]?(tf.dot(y[C].normal)<=l&&(S.push(z.x,z.y,z.z),S.push(F.x,F.y,F.z)),y[C]=null):j in y||(y[j]={index0:m[U],index1:m[L],normal:tf.clone()})}}for(const E in y)if(y[E]){const{index0:w,index1:x}=y[E];Cl.fromBufferAttribute(f,w),Pl.fromBufferAttribute(f,x),S.push(Cl.x,Cl.y,Cl.z),S.push(Pl.x,Pl.y,Pl.z)}this.setAttribute("position",new Jn(S,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class $l extends Mi{constructor(e=1,t=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:a};const l=e/2,c=t/2,f=Math.floor(s),h=Math.floor(a),m=f+1,g=h+1,v=e/f,y=t/h,S=[],E=[],w=[],x=[];for(let _=0;_<g;_++){const U=_*y-c;for(let L=0;L<m;L++){const b=L*v-l;E.push(b,-U,0),w.push(0,0,1),x.push(L/f),x.push(1-_/h)}}for(let _=0;_<h;_++)for(let U=0;U<f;U++){const L=U+m*_,b=U+m*(_+1),X=U+1+m*(_+1),z=U+1+m*_;S.push(L,b,z),S.push(b,X,z)}this.setIndex(S),this.setAttribute("position",new Jn(E,3)),this.setAttribute("normal",new Jn(w,3)),this.setAttribute("uv",new Jn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $l(e.width,e.height,e.widthSegments,e.heightSegments)}}class Z0 extends ea{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Q0 extends ea{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class J0 extends gg{constructor(e=-1,t=1,s=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=s-e,c=s+e,f=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,c=l+m*this.view.width,f-=g*this.view.offsetY,h=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ex extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const vm=new Vt;class tx{constructor(e,t,s=0,a=1/0){this.ray=new ql(e,t),this.near=s,this.far=a,this.camera=null,this.layers=new ld,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return vm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vm),this}intersectObject(e,t=!0,s=[]){return Kf(e,this,s,t),s.sort(xm),s}intersectObjects(e,t=!0,s=[]){for(let a=0,l=e.length;a<l;a++)Kf(e[a],this,s,t);return s.sort(xm),s}}function xm(r,e){return r.distance-e.distance}function Kf(r,e,t,s){let a=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(a=!1),a===!0&&s===!0){const l=r.children;for(let c=0,f=l.length;c<f;c++)Kf(l[c],e,t,!0)}}class ym{constructor(e=1,t=0,s=0){return this.radius=e,this.phi=t,this.theta=s,this}set(e,t,s){return this.radius=e,this.phi=t,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=dt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,s){return this.radius=Math.sqrt(e*e+t*t+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class nx extends xg{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],s=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],a=new Mi;a.setAttribute("position",new Jn(t,3)),a.setAttribute("color",new Jn(s,3));const l=new ud({vertexColors:!0,toneMapped:!1});super(a,l),this.type="AxesHelper"}setColors(e,t,s){const a=new wt,l=this.geometry.attributes.color.array;return a.set(e),a.toArray(l,0),a.toArray(l,3),a.set(t),a.toArray(l,6),a.toArray(l,9),a.set(s),a.toArray(l,12),a.toArray(l,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class ix extends es{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Sm(r,e,t,s){const a=rx(s);switch(t){case eg:return r*e;case ng:return r*e;case ig:return r*e*2;case rg:return r*e/a.components*a.byteLength;case rd:return r*e/a.components*a.byteLength;case sg:return r*e*2/a.components*a.byteLength;case sd:return r*e*2/a.components*a.byteLength;case tg:return r*e*3/a.components*a.byteLength;case ci:return r*e*4/a.components*a.byteLength;case od:return r*e*4/a.components*a.byteLength;case Nl:case Fl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ol:case kl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case wf:case Rf:return Math.max(r,16)*Math.max(e,8)/4;case Tf:case Af:return Math.max(r,8)*Math.max(e,8)/2;case Cf:case Pf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case bf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Df:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Lf:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case If:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Uf:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Nf:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ff:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Of:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case kf:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case zf:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Bf:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Hf:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Vf:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Gf:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Wf:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case zl:case Xf:case jf:return Math.ceil(r/4)*Math.ceil(e/4)*16;case og:case Yf:return Math.ceil(r/4)*Math.ceil(e/4)*8;case qf:case $f:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rx(r){switch(r){case Gi:case Zm:return{byteLength:1,components:1};case Ko:case Qm:case Qo:return{byteLength:2,components:1};case nd:case id:return{byteLength:2,components:4};case Zr:case td:case Bi:return{byteLength:4,components:1};case Jm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ed}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ed);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Sg(){let r=null,e=!1,t=null,s=null;function a(l,c){t(l,c),s=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(a),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function sx(r){const e=new WeakMap;function t(f,h){const m=f.array,g=f.usage,v=m.byteLength,y=r.createBuffer();r.bindBuffer(h,y),r.bufferData(h,m,g),f.onUploadCallback();let S;if(m instanceof Float32Array)S=r.FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=r.SHORT;else if(m instanceof Uint32Array)S=r.UNSIGNED_INT;else if(m instanceof Int32Array)S=r.INT;else if(m instanceof Int8Array)S=r.BYTE;else if(m instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:v}}function s(f,h,m){const g=h.array,v=h.updateRanges;if(r.bindBuffer(m,f),v.length===0)r.bufferSubData(m,0,g);else{v.sort((S,E)=>S.start-E.start);let y=0;for(let S=1;S<v.length;S++){const E=v[y],w=v[S];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++y,v[y]=w)}v.length=y+1;for(let S=0,E=v.length;S<E;S++){const w=v[S];r.bufferSubData(m,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(r.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,t(f,h));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,f,h),m.version=f.version}}return{get:a,remove:l,update:c}}var ox=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ax=`#ifdef USE_ALPHAHASH
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
#endif`,lx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ux=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dx=`#ifdef USE_AOMAP
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
#endif`,hx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,px=`#ifdef USE_BATCHING
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
#endif`,mx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_x=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xx=`#ifdef USE_IRIDESCENCE
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
#endif`,yx=`#ifdef USE_BUMPMAP
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
#endif`,Sx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ax=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Px=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,bx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dx=`vec3 transformedNormal = objectNormal;
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
#endif`,Lx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ix=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ux=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ox=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kx=`#ifdef USE_ENVMAP
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
#endif`,zx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bx=`#ifdef USE_ENVMAP
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
#endif`,Hx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vx=`#ifdef USE_ENVMAP
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
#endif`,Gx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yx=`#ifdef USE_GRADIENTMAP
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
}`,qx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$x=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zx=`uniform bool receiveShadow;
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
#endif`,Qx=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,Jx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ey=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ty=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ny=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iy=`PhysicalMaterial material;
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
#endif`,ry=`struct PhysicalMaterial {
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,sy=`
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
#endif`,oy=`#if defined( RE_IndirectDiffuse )
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
#endif`,ay=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ly=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,py=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,my=`#if defined( USE_POINTS_UV )
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
#endif`,gy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_y=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sy=`#ifdef USE_MORPHTARGETS
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
#endif`,My=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ey=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ty=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ay=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ry=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cy=`#ifdef USE_NORMALMAP
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
#endif`,Py=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,by=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ly=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Iy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ny=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Oy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ky=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,By=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,Vy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wy=`float getShadowMask() {
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
}`,Xy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jy=`#ifdef USE_SKINNING
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
#endif`,Yy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qy=`#ifdef USE_SKINNING
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
#endif`,$y=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ky=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jy=`#ifdef USE_TRANSMISSION
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
#endif`,eS=`#ifdef USE_TRANSMISSION
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
#endif`,tS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oS=`uniform sampler2D t2D;
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
}`,aS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fS=`#include <common>
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
}`,dS=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hS=`#define DISTANCE
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
}`,pS=`#define DISTANCE
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
}`,mS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_S=`uniform float scale;
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
}`,vS=`uniform vec3 diffuse;
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
}`,xS=`#include <common>
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
}`,yS=`uniform vec3 diffuse;
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
}`,SS=`#define LAMBERT
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
}`,MS=`#define LAMBERT
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
}`,ES=`#define MATCAP
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
}`,TS=`#define MATCAP
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
}`,wS=`#define NORMAL
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
}`,AS=`#define NORMAL
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
}`,RS=`#define PHONG
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
}`,CS=`#define PHONG
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
}`,PS=`#define STANDARD
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
}`,bS=`#define STANDARD
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
}`,DS=`#define TOON
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
}`,LS=`#define TOON
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
}`,IS=`uniform float size;
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
}`,US=`uniform vec3 diffuse;
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
}`,NS=`#include <common>
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
}`,FS=`uniform vec3 color;
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
}`,OS=`uniform float rotation;
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
}`,kS=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:ox,alphahash_pars_fragment:ax,alphamap_fragment:lx,alphamap_pars_fragment:ux,alphatest_fragment:cx,alphatest_pars_fragment:fx,aomap_fragment:dx,aomap_pars_fragment:hx,batching_pars_vertex:px,batching_vertex:mx,begin_vertex:gx,beginnormal_vertex:_x,bsdfs:vx,iridescence_fragment:xx,bumpmap_pars_fragment:yx,clipping_planes_fragment:Sx,clipping_planes_pars_fragment:Mx,clipping_planes_pars_vertex:Ex,clipping_planes_vertex:Tx,color_fragment:wx,color_pars_fragment:Ax,color_pars_vertex:Rx,color_vertex:Cx,common:Px,cube_uv_reflection_fragment:bx,defaultnormal_vertex:Dx,displacementmap_pars_vertex:Lx,displacementmap_vertex:Ix,emissivemap_fragment:Ux,emissivemap_pars_fragment:Nx,colorspace_fragment:Fx,colorspace_pars_fragment:Ox,envmap_fragment:kx,envmap_common_pars_fragment:zx,envmap_pars_fragment:Bx,envmap_pars_vertex:Hx,envmap_physical_pars_fragment:Qx,envmap_vertex:Vx,fog_vertex:Gx,fog_pars_vertex:Wx,fog_fragment:Xx,fog_pars_fragment:jx,gradientmap_pars_fragment:Yx,lightmap_pars_fragment:qx,lights_lambert_fragment:$x,lights_lambert_pars_fragment:Kx,lights_pars_begin:Zx,lights_toon_fragment:Jx,lights_toon_pars_fragment:ey,lights_phong_fragment:ty,lights_phong_pars_fragment:ny,lights_physical_fragment:iy,lights_physical_pars_fragment:ry,lights_fragment_begin:sy,lights_fragment_maps:oy,lights_fragment_end:ay,logdepthbuf_fragment:ly,logdepthbuf_pars_fragment:uy,logdepthbuf_pars_vertex:cy,logdepthbuf_vertex:fy,map_fragment:dy,map_pars_fragment:hy,map_particle_fragment:py,map_particle_pars_fragment:my,metalnessmap_fragment:gy,metalnessmap_pars_fragment:_y,morphinstance_vertex:vy,morphcolor_vertex:xy,morphnormal_vertex:yy,morphtarget_pars_vertex:Sy,morphtarget_vertex:My,normal_fragment_begin:Ey,normal_fragment_maps:Ty,normal_pars_fragment:wy,normal_pars_vertex:Ay,normal_vertex:Ry,normalmap_pars_fragment:Cy,clearcoat_normal_fragment_begin:Py,clearcoat_normal_fragment_maps:by,clearcoat_pars_fragment:Dy,iridescence_pars_fragment:Ly,opaque_fragment:Iy,packing:Uy,premultiplied_alpha_fragment:Ny,project_vertex:Fy,dithering_fragment:Oy,dithering_pars_fragment:ky,roughnessmap_fragment:zy,roughnessmap_pars_fragment:By,shadowmap_pars_fragment:Hy,shadowmap_pars_vertex:Vy,shadowmap_vertex:Gy,shadowmask_pars_fragment:Wy,skinbase_vertex:Xy,skinning_pars_vertex:jy,skinning_vertex:Yy,skinnormal_vertex:qy,specularmap_fragment:$y,specularmap_pars_fragment:Ky,tonemapping_fragment:Zy,tonemapping_pars_fragment:Qy,transmission_fragment:Jy,transmission_pars_fragment:eS,uv_pars_fragment:tS,uv_pars_vertex:nS,uv_vertex:iS,worldpos_vertex:rS,background_vert:sS,background_frag:oS,backgroundCube_vert:aS,backgroundCube_frag:lS,cube_vert:uS,cube_frag:cS,depth_vert:fS,depth_frag:dS,distanceRGBA_vert:hS,distanceRGBA_frag:pS,equirect_vert:mS,equirect_frag:gS,linedashed_vert:_S,linedashed_frag:vS,meshbasic_vert:xS,meshbasic_frag:yS,meshlambert_vert:SS,meshlambert_frag:MS,meshmatcap_vert:ES,meshmatcap_frag:TS,meshnormal_vert:wS,meshnormal_frag:AS,meshphong_vert:RS,meshphong_frag:CS,meshphysical_vert:PS,meshphysical_frag:bS,meshtoon_vert:DS,meshtoon_frag:LS,points_vert:IS,points_frag:US,shadow_vert:NS,shadow_frag:FS,sprite_vert:OS,sprite_frag:kS},Ce={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},_i={basic:{uniforms:wn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:wn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new wt(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:wn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:wn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:wn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new wt(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:wn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:wn([Ce.points,Ce.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:wn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:wn([Ce.common,Ce.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:wn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:wn([Ce.sprite,Ce.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:wn([Ce.common,Ce.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:wn([Ce.lights,Ce.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};_i.physical={uniforms:wn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const Dl={r:0,b:0,g:0},Wr=new Wi,zS=new Vt;function BS(r,e,t,s,a,l,c){const f=new wt(0);let h=l===!0?0:1,m,g,v=null,y=0,S=null;function E(L){let b=L.isScene===!0?L.background:null;return b&&b.isTexture&&(b=(L.backgroundBlurriness>0?t:e).get(b)),b}function w(L){let b=!1;const X=E(L);X===null?_(f,h):X&&X.isColor&&(_(X,1),b=!0);const z=r.xr.getEnvironmentBlendMode();z==="additive"?s.buffers.color.setClear(0,0,0,1,c):z==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,c),(r.autoClear||b)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(L,b){const X=E(b);X&&(X.isCubeTexture||X.mapping===jl)?(g===void 0&&(g=new xi(new so(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:io(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(z,F,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),Wr.copy(b.backgroundRotation),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),g.material.uniforms.envMap.value=X,g.material.uniforms.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(zS.makeRotationFromEuler(Wr)),g.material.toneMapped=Et.getTransfer(X.colorSpace)!==Pt,(v!==X||y!==X.version||S!==r.toneMapping)&&(g.material.needsUpdate=!0,v=X,y=X.version,S=r.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):X&&X.isTexture&&(m===void 0&&(m=new xi(new $l(2,2),new Xi({name:"BackgroundMaterial",uniforms:io(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Er,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=X,m.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,m.material.toneMapped=Et.getTransfer(X.colorSpace)!==Pt,X.matrixAutoUpdate===!0&&X.updateMatrix(),m.material.uniforms.uvTransform.value.copy(X.matrix),(v!==X||y!==X.version||S!==r.toneMapping)&&(m.material.needsUpdate=!0,v=X,y=X.version,S=r.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function _(L,b){L.getRGB(Dl,mg(r)),s.buffers.color.setClear(Dl.r,Dl.g,Dl.b,b,c)}function U(){g!==void 0&&(g.geometry.dispose(),g.material.dispose()),m!==void 0&&(m.geometry.dispose(),m.material.dispose())}return{getClearColor:function(){return f},setClearColor:function(L,b=1){f.set(L),h=b,_(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(L){h=L,_(f,h)},render:w,addToRenderList:x,dispose:U}}function HS(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},a=y(null);let l=a,c=!1;function f(R,B,oe,ee,fe){let he=!1;const se=v(ee,oe,B);l!==se&&(l=se,m(l.object)),he=S(R,ee,oe,fe),he&&E(R,ee,oe,fe),fe!==null&&e.update(fe,r.ELEMENT_ARRAY_BUFFER),(he||c)&&(c=!1,b(R,B,oe,ee),fe!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function h(){return r.createVertexArray()}function m(R){return r.bindVertexArray(R)}function g(R){return r.deleteVertexArray(R)}function v(R,B,oe){const ee=oe.wireframe===!0;let fe=s[R.id];fe===void 0&&(fe={},s[R.id]=fe);let he=fe[B.id];he===void 0&&(he={},fe[B.id]=he);let se=he[ee];return se===void 0&&(se=y(h()),he[ee]=se),se}function y(R){const B=[],oe=[],ee=[];for(let fe=0;fe<t;fe++)B[fe]=0,oe[fe]=0,ee[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:oe,attributeDivisors:ee,object:R,attributes:{},index:null}}function S(R,B,oe,ee){const fe=l.attributes,he=B.attributes;let se=0;const le=oe.getAttributes();for(const k in le)if(le[k].location>=0){const re=fe[k];let I=he[k];if(I===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(I=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(I=R.instanceColor)),re===void 0||re.attribute!==I||I&&re.data!==I.data)return!0;se++}return l.attributesNum!==se||l.index!==ee}function E(R,B,oe,ee){const fe={},he=B.attributes;let se=0;const le=oe.getAttributes();for(const k in le)if(le[k].location>=0){let re=he[k];re===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(re=R.instanceColor));const I={};I.attribute=re,re&&re.data&&(I.data=re.data),fe[k]=I,se++}l.attributes=fe,l.attributesNum=se,l.index=ee}function w(){const R=l.newAttributes;for(let B=0,oe=R.length;B<oe;B++)R[B]=0}function x(R){_(R,0)}function _(R,B){const oe=l.newAttributes,ee=l.enabledAttributes,fe=l.attributeDivisors;oe[R]=1,ee[R]===0&&(r.enableVertexAttribArray(R),ee[R]=1),fe[R]!==B&&(r.vertexAttribDivisor(R,B),fe[R]=B)}function U(){const R=l.newAttributes,B=l.enabledAttributes;for(let oe=0,ee=B.length;oe<ee;oe++)B[oe]!==R[oe]&&(r.disableVertexAttribArray(oe),B[oe]=0)}function L(R,B,oe,ee,fe,he,se){se===!0?r.vertexAttribIPointer(R,B,oe,fe,he):r.vertexAttribPointer(R,B,oe,ee,fe,he)}function b(R,B,oe,ee){w();const fe=ee.attributes,he=oe.getAttributes(),se=B.defaultAttributeValues;for(const le in he){const k=he[le];if(k.location>=0){let ae=fe[le];if(ae===void 0&&(le==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),le==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor)),ae!==void 0){const re=ae.normalized,I=ae.itemSize,ne=e.get(ae);if(ne===void 0)continue;const Ie=ne.buffer,Z=ne.type,ue=ne.bytesPerElement,Me=Z===r.INT||Z===r.UNSIGNED_INT||ae.gpuType===td;if(ae.isInterleavedBufferAttribute){const ve=ae.data,Te=ve.stride,Ue=ae.offset;if(ve.isInstancedInterleavedBuffer){for(let Ze=0;Ze<k.locationSize;Ze++)_(k.location+Ze,ve.meshPerAttribute);R.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ze=0;Ze<k.locationSize;Ze++)x(k.location+Ze);r.bindBuffer(r.ARRAY_BUFFER,Ie);for(let Ze=0;Ze<k.locationSize;Ze++)L(k.location+Ze,I/k.locationSize,Z,re,Te*ue,(Ue+I/k.locationSize*Ze)*ue,Me)}else{if(ae.isInstancedBufferAttribute){for(let ve=0;ve<k.locationSize;ve++)_(k.location+ve,ae.meshPerAttribute);R.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ve=0;ve<k.locationSize;ve++)x(k.location+ve);r.bindBuffer(r.ARRAY_BUFFER,Ie);for(let ve=0;ve<k.locationSize;ve++)L(k.location+ve,I/k.locationSize,Z,re,I*ue,I/k.locationSize*ve*ue,Me)}}else if(se!==void 0){const re=se[le];if(re!==void 0)switch(re.length){case 2:r.vertexAttrib2fv(k.location,re);break;case 3:r.vertexAttrib3fv(k.location,re);break;case 4:r.vertexAttrib4fv(k.location,re);break;default:r.vertexAttrib1fv(k.location,re)}}}}U()}function X(){j();for(const R in s){const B=s[R];for(const oe in B){const ee=B[oe];for(const fe in ee)g(ee[fe].object),delete ee[fe];delete B[oe]}delete s[R]}}function z(R){if(s[R.id]===void 0)return;const B=s[R.id];for(const oe in B){const ee=B[oe];for(const fe in ee)g(ee[fe].object),delete ee[fe];delete B[oe]}delete s[R.id]}function F(R){for(const B in s){const oe=s[B];if(oe[R.id]===void 0)continue;const ee=oe[R.id];for(const fe in ee)g(ee[fe].object),delete ee[fe];delete oe[R.id]}}function j(){C(),c=!0,l!==a&&(l=a,m(l.object))}function C(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:j,resetDefaultState:C,dispose:X,releaseStatesOfGeometry:z,releaseStatesOfProgram:F,initAttributes:w,enableAttribute:x,disableUnusedAttributes:U}}function VS(r,e,t){let s;function a(m){s=m}function l(m,g){r.drawArrays(s,m,g),t.update(g,s,1)}function c(m,g,v){v!==0&&(r.drawArraysInstanced(s,m,g,v),t.update(g,s,v))}function f(m,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,g,0,v);let S=0;for(let E=0;E<v;E++)S+=g[E];t.update(S,s,1)}function h(m,g,v,y){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<m.length;E++)c(m[E],g[E],y[E]);else{S.multiDrawArraysInstancedWEBGL(s,m,0,g,0,y,0,v);let E=0;for(let w=0;w<v;w++)E+=g[w]*y[w];t.update(E,s,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function GS(r,e,t,s){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(F){return!(F!==ci&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(F){const j=F===Qo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Gi&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Bi&&!j)}function h(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const g=h(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const v=t.logarithmicDepthBuffer===!0,y=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),U=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),X=E>0,z=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:y,maxTextures:S,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:U,maxVaryings:L,maxFragmentUniforms:b,vertexTextures:X,maxSamples:z}}function WS(r){const e=this;let t=null,s=0,a=!1,l=!1;const c=new xr,f=new st,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const S=v.length!==0||y||s!==0||a;return a=y,s=v.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,y){t=g(v,y,0)},this.setState=function(v,y,S){const E=v.clippingPlanes,w=v.clipIntersection,x=v.clipShadows,_=r.get(v);if(!a||E===null||E.length===0||l&&!x)l?g(null):m();else{const U=l?0:s,L=U*4;let b=_.clippingState||null;h.value=b,b=g(E,y,L,S);for(let X=0;X!==L;++X)b[X]=t[X];_.clippingState=b,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=U}};function m(){h.value!==t&&(h.value=t,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(v,y,S,E){const w=v!==null?v.length:0;let x=null;if(w!==0){if(x=h.value,E!==!0||x===null){const _=S+w*4,U=y.matrixWorldInverse;f.getNormalMatrix(U),(x===null||x.length<_)&&(x=new Float32Array(_));for(let L=0,b=S;L!==w;++L,b+=4)c.copy(v[L]).applyMatrix4(U,f),c.normal.toArray(x,b),x[b+3]=c.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,x}}function XS(r){let e=new WeakMap;function t(c,f){return f===yf?c.mapping=Qs:f===Sf&&(c.mapping=Js),c}function s(c){if(c&&c.isTexture){const f=c.mapping;if(f===yf||f===Sf)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const m=new X0(h.height);return m.fromEquirectangularTexture(r,c),e.set(c,m),c.addEventListener("dispose",a),t(m.texture,c.mapping)}else return null}}return c}function a(c){const f=c.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}const Gs=4,Mm=[.125,.215,.35,.446,.526,.582],qr=20,nf=new J0,Em=new wt;let rf=null,sf=0,of=0,af=!1;const jr=(1+Math.sqrt(5))/2,ks=1/jr,Tm=[new q(-jr,ks,0),new q(jr,ks,0),new q(-ks,0,jr),new q(ks,0,jr),new q(0,jr,-ks),new q(0,jr,ks),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class wm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,a=100){rf=this._renderer.getRenderTarget(),sf=this._renderer.getActiveCubeFace(),of=this._renderer.getActiveMipmapLevel(),af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,s,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rf,sf,of),this._renderer.xr.enabled=af,e.scissorTest=!1,Ll(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qs||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rf=this._renderer.getRenderTarget(),sf=this._renderer.getActiveCubeFace(),of=this._renderer.getActiveMipmapLevel(),af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:vi,minFilter:vi,generateMipmaps:!1,type:Qo,format:ci,colorSpace:no,depthBuffer:!1},a=Am(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Am(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jS(l)),this._blurMaterial=YS(l,e,t)}return a}_compileMaterial(e){const t=new xi(this._lodPlanes[0],e);this._renderer.compile(t,nf)}_sceneToCubeUV(e,t,s,a){const f=new Zn(90,1,t,s),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(Em),g.toneMapping=Mr,g.autoClear=!1;const S=new dg({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1}),E=new xi(new so,S);let w=!1;const x=e.background;x?x.isColor&&(S.color.copy(x),e.background=null,w=!0):(S.color.copy(Em),w=!0);for(let _=0;_<6;_++){const U=_%3;U===0?(f.up.set(0,h[_],0),f.lookAt(m[_],0,0)):U===1?(f.up.set(0,0,h[_]),f.lookAt(0,m[_],0)):(f.up.set(0,h[_],0),f.lookAt(0,0,m[_]));const L=this._cubeSize;Ll(a,U*L,_>2?L:0,L,L),g.setRenderTarget(a),w&&g.render(E,f),g.render(e,f)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=y,g.autoClear=v,e.background=x}_textureToCubeUV(e,t){const s=this._renderer,a=e.mapping===Qs||e.mapping===Js;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rm());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new xi(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Ll(t,0,0,3*h,2*h),s.setRenderTarget(t),s.render(c,nf)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Tm[(a-l-1)%Tm.length];this._blur(e,l-1,l,c,f)}t.autoClear=s}_blur(e,t,s,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,s,a,"latitudinal",l),this._halfBlur(c,e,s,s,a,"longitudinal",l)}_halfBlur(e,t,s,a,l,c,f){const h=this._renderer,m=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new xi(this._lodPlanes[a],m),y=m.uniforms,S=this._sizeLods[s]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*qr-1),w=l/E,x=isFinite(l)?1+Math.floor(g*w):qr;x>qr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${qr}`);const _=[];let U=0;for(let F=0;F<qr;++F){const j=F/w,C=Math.exp(-j*j/2);_.push(C),F===0?U+=C:F<x&&(U+=2*C)}for(let F=0;F<_.length;F++)_[F]=_[F]/U;y.envMap.value=e.texture,y.samples.value=x,y.weights.value=_,y.latitudinal.value=c==="latitudinal",f&&(y.poleAxis.value=f);const{_lodMax:L}=this;y.dTheta.value=E,y.mipInt.value=L-s;const b=this._sizeLods[a],X=3*b*(a>L-Gs?a-L+Gs:0),z=4*(this._cubeSize-b);Ll(t,X,z,3*b,2*b),h.setRenderTarget(t),h.render(v,nf)}}function jS(r){const e=[],t=[],s=[];let a=r;const l=r-Gs+1+Mm.length;for(let c=0;c<l;c++){const f=Math.pow(2,a);t.push(f);let h=1/f;c>r-Gs?h=Mm[c-r+Gs-1]:c===0&&(h=0),s.push(h);const m=1/(f-2),g=-m,v=1+m,y=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,E=6,w=3,x=2,_=1,U=new Float32Array(w*E*S),L=new Float32Array(x*E*S),b=new Float32Array(_*E*S);for(let z=0;z<S;z++){const F=z%3*2/3-1,j=z>2?0:-1,C=[F,j,0,F+2/3,j,0,F+2/3,j+1,0,F,j,0,F+2/3,j+1,0,F,j+1,0];U.set(C,w*E*z),L.set(y,x*E*z);const R=[z,z,z,z,z,z];b.set(R,_*E*z)}const X=new Mi;X.setAttribute("position",new yi(U,w)),X.setAttribute("uv",new yi(L,x)),X.setAttribute("faceIndex",new yi(b,_)),e.push(X),a>Gs&&a--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function Am(r,e,t){const s=new Qr(r,e,t);return s.texture.mapping=jl,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ll(r,e,t,s,a){r.viewport.set(e,t,s,a),r.scissor.set(e,t,s,a)}function YS(r,e,t){const s=new Float32Array(qr),a=new q(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:cd(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Rm(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cd(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Cm(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function cd(){return`

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
	`}function qS(r){let e=new WeakMap,t=null;function s(f){if(f&&f.isTexture){const h=f.mapping,m=h===yf||h===Sf,g=h===Qs||h===Js;if(m||g){let v=e.get(f);const y=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==y)return t===null&&(t=new wm(r)),v=m?t.fromEquirectangular(f,v):t.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const S=f.image;return m&&S&&S.height>0||g&&S&&a(S)?(t===null&&(t=new wm(r)),v=m?t.fromEquirectangular(f):t.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",l),v.texture):null}}}return f}function a(f){let h=0;const m=6;for(let g=0;g<m;g++)f[g]!==void 0&&h++;return h===m}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:c}}function $S(r){const e={};function t(s){if(e[s]!==void 0)return e[s];let a;switch(s){case"WEBGL_depth_texture":a=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=r.getExtension(s)}return e[s]=a,a}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const a=t(s);return a===null&&Bs("THREE.WebGLRenderer: "+s+" extension not supported."),a}}}function KS(r,e,t,s){const a={},l=new WeakMap;function c(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);y.removeEventListener("dispose",c),delete a[y.id];const S=l.get(y);S&&(e.remove(S),l.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function f(v,y){return a[y.id]===!0||(y.addEventListener("dispose",c),a[y.id]=!0,t.memory.geometries++),y}function h(v){const y=v.attributes;for(const S in y)e.update(y[S],r.ARRAY_BUFFER)}function m(v){const y=[],S=v.index,E=v.attributes.position;let w=0;if(S!==null){const U=S.array;w=S.version;for(let L=0,b=U.length;L<b;L+=3){const X=U[L+0],z=U[L+1],F=U[L+2];y.push(X,z,z,F,F,X)}}else if(E!==void 0){const U=E.array;w=E.version;for(let L=0,b=U.length/3-1;L<b;L+=3){const X=L+0,z=L+1,F=L+2;y.push(X,z,z,F,F,X)}}else return;const x=new(lg(y)?pg:hg)(y,1);x.version=w;const _=l.get(v);_&&e.remove(_),l.set(v,x)}function g(v){const y=l.get(v);if(y){const S=v.index;S!==null&&y.version<S.version&&m(v)}else m(v);return l.get(v)}return{get:f,update:h,getWireframeAttribute:g}}function ZS(r,e,t){let s;function a(y){s=y}let l,c;function f(y){l=y.type,c=y.bytesPerElement}function h(y,S){r.drawElements(s,S,l,y*c),t.update(S,s,1)}function m(y,S,E){E!==0&&(r.drawElementsInstanced(s,S,l,y*c,E),t.update(S,s,E))}function g(y,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,l,y,0,E);let x=0;for(let _=0;_<E;_++)x+=S[_];t.update(x,s,1)}function v(y,S,E,w){if(E===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<y.length;_++)m(y[_]/c,S[_],w[_]);else{x.multiDrawElementsInstancedWEBGL(s,S,0,l,y,0,w,0,E);let _=0;for(let U=0;U<E;U++)_+=S[U]*w[U];t.update(_,s,1)}}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function QS(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,c,f){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:s}}function JS(r,e,t){const s=new WeakMap,a=new Xt;function l(c,f,h){const m=c.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=g!==void 0?g.length:0;let y=s.get(f);if(y===void 0||y.count!==v){let R=function(){j.dispose(),s.delete(f),f.removeEventListener("dispose",R)};var S=R;y!==void 0&&y.texture.dispose();const E=f.morphAttributes.position!==void 0,w=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],U=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let b=0;E===!0&&(b=1),w===!0&&(b=2),x===!0&&(b=3);let X=f.attributes.position.count*b,z=1;X>e.maxTextureSize&&(z=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const F=new Float32Array(X*z*4*v),j=new cg(F,X,z,v);j.type=Bi,j.needsUpdate=!0;const C=b*4;for(let B=0;B<v;B++){const oe=_[B],ee=U[B],fe=L[B],he=X*z*4*B;for(let se=0;se<oe.count;se++){const le=se*C;E===!0&&(a.fromBufferAttribute(oe,se),F[he+le+0]=a.x,F[he+le+1]=a.y,F[he+le+2]=a.z,F[he+le+3]=0),w===!0&&(a.fromBufferAttribute(ee,se),F[he+le+4]=a.x,F[he+le+5]=a.y,F[he+le+6]=a.z,F[he+le+7]=0),x===!0&&(a.fromBufferAttribute(fe,se),F[he+le+8]=a.x,F[he+le+9]=a.y,F[he+le+10]=a.z,F[he+le+11]=fe.itemSize===4?a.w:1)}}y={count:v,texture:j,size:new lt(X,z)},s.set(f,y),f.addEventListener("dispose",R)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let E=0;for(let x=0;x<m.length;x++)E+=m[x];const w=f.morphTargetsRelative?1:1-E;h.getUniforms().setValue(r,"morphTargetBaseInfluence",w),h.getUniforms().setValue(r,"morphTargetInfluences",m)}h.getUniforms().setValue(r,"morphTargetsTexture",y.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}return{update:l}}function eM(r,e,t,s){let a=new WeakMap;function l(h){const m=s.render.frame,g=h.geometry,v=e.get(h,g);if(a.get(v)!==m&&(e.update(v),a.set(v,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==m&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const y=h.skeleton;a.get(y)!==m&&(y.update(),a.set(y,m))}return v}function c(){a=new WeakMap}function f(h){const m=h.target;m.removeEventListener("dispose",f),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:l,dispose:c}}const Mg=new Nn,Pm=new yg(1,1),Eg=new cg,Tg=new P0,wg=new _g,bm=[],Dm=[],Lm=new Float32Array(16),Im=new Float32Array(9),Um=new Float32Array(4);function oo(r,e,t){const s=r[0];if(s<=0||s>0)return r;const a=e*t;let l=bm[a];if(l===void 0&&(l=new Float32Array(a),bm[a]=l),e!==0){s.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,r[c].toArray(l,f)}return l}function Qt(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function Jt(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function Kl(r,e){let t=Dm[e];t===void 0&&(t=new Int32Array(e),Dm[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function tM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function nM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2fv(this.addr,e),Jt(t,e)}}function iM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;r.uniform3fv(this.addr,e),Jt(t,e)}}function rM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4fv(this.addr,e),Jt(t,e)}}function sM(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Qt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Qt(t,s))return;Um.set(s),r.uniformMatrix2fv(this.addr,!1,Um),Jt(t,s)}}function oM(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Qt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Qt(t,s))return;Im.set(s),r.uniformMatrix3fv(this.addr,!1,Im),Jt(t,s)}}function aM(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Qt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Qt(t,s))return;Lm.set(s),r.uniformMatrix4fv(this.addr,!1,Lm),Jt(t,s)}}function lM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function uM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2iv(this.addr,e),Jt(t,e)}}function cM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;r.uniform3iv(this.addr,e),Jt(t,e)}}function fM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4iv(this.addr,e),Jt(t,e)}}function dM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function hM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2uiv(this.addr,e),Jt(t,e)}}function pM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;r.uniform3uiv(this.addr,e),Jt(t,e)}}function mM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4uiv(this.addr,e),Jt(t,e)}}function gM(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a);let l;this.type===r.SAMPLER_2D_SHADOW?(Pm.compareFunction=ag,l=Pm):l=Mg,t.setTexture2D(e||l,a)}function _M(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture3D(e||Tg,a)}function vM(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTextureCube(e||wg,a)}function xM(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture2DArray(e||Eg,a)}function yM(r){switch(r){case 5126:return tM;case 35664:return nM;case 35665:return iM;case 35666:return rM;case 35674:return sM;case 35675:return oM;case 35676:return aM;case 5124:case 35670:return lM;case 35667:case 35671:return uM;case 35668:case 35672:return cM;case 35669:case 35673:return fM;case 5125:return dM;case 36294:return hM;case 36295:return pM;case 36296:return mM;case 35678:case 36198:case 36298:case 36306:case 35682:return gM;case 35679:case 36299:case 36307:return _M;case 35680:case 36300:case 36308:case 36293:return vM;case 36289:case 36303:case 36311:case 36292:return xM}}function SM(r,e){r.uniform1fv(this.addr,e)}function MM(r,e){const t=oo(e,this.size,2);r.uniform2fv(this.addr,t)}function EM(r,e){const t=oo(e,this.size,3);r.uniform3fv(this.addr,t)}function TM(r,e){const t=oo(e,this.size,4);r.uniform4fv(this.addr,t)}function wM(r,e){const t=oo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function AM(r,e){const t=oo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function RM(r,e){const t=oo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function CM(r,e){r.uniform1iv(this.addr,e)}function PM(r,e){r.uniform2iv(this.addr,e)}function bM(r,e){r.uniform3iv(this.addr,e)}function DM(r,e){r.uniform4iv(this.addr,e)}function LM(r,e){r.uniform1uiv(this.addr,e)}function IM(r,e){r.uniform2uiv(this.addr,e)}function UM(r,e){r.uniform3uiv(this.addr,e)}function NM(r,e){r.uniform4uiv(this.addr,e)}function FM(r,e,t){const s=this.cache,a=e.length,l=Kl(t,a);Qt(s,l)||(r.uniform1iv(this.addr,l),Jt(s,l));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||Mg,l[c])}function OM(r,e,t){const s=this.cache,a=e.length,l=Kl(t,a);Qt(s,l)||(r.uniform1iv(this.addr,l),Jt(s,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||Tg,l[c])}function kM(r,e,t){const s=this.cache,a=e.length,l=Kl(t,a);Qt(s,l)||(r.uniform1iv(this.addr,l),Jt(s,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||wg,l[c])}function zM(r,e,t){const s=this.cache,a=e.length,l=Kl(t,a);Qt(s,l)||(r.uniform1iv(this.addr,l),Jt(s,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||Eg,l[c])}function BM(r){switch(r){case 5126:return SM;case 35664:return MM;case 35665:return EM;case 35666:return TM;case 35674:return wM;case 35675:return AM;case 35676:return RM;case 5124:case 35670:return CM;case 35667:case 35671:return PM;case 35668:case 35672:return bM;case 35669:case 35673:return DM;case 5125:return LM;case 36294:return IM;case 36295:return UM;case 36296:return NM;case 35678:case 36198:case 36298:case 36306:case 35682:return FM;case 35679:case 36299:case 36307:return OM;case 35680:case 36300:case 36308:case 36293:return kM;case 36289:case 36303:case 36311:case 36292:return zM}}class HM{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=yM(t.type)}}class VM{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=BM(t.type)}}class GM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(e,t[f.id],s)}}}const lf=/(\w+)(\])?(\[|\.)?/g;function Nm(r,e){r.seq.push(e),r.map[e.id]=e}function WM(r,e,t){const s=r.name,a=s.length;for(lf.lastIndex=0;;){const l=lf.exec(s),c=lf.lastIndex;let f=l[1];const h=l[2]==="]",m=l[3];if(h&&(f=f|0),m===void 0||m==="["&&c+2===a){Nm(t,m===void 0?new HM(f,r,e):new VM(f,r,e));break}else{let v=t.map[f];v===void 0&&(v=new GM(f),Nm(t,v)),t=v}}}class Bl{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<s;++a){const l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);WM(l,c,this)}}setValue(e,t,s,a){const l=this.map[t];l!==void 0&&l.setValue(e,s,a)}setOptional(e,t,s){const a=t[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,t,s,a){for(let l=0,c=t.length;l!==c;++l){const f=t[l],h=s[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,a)}}static seqWithValue(e,t){const s=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&s.push(c)}return s}}function Fm(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const XM=37297;let jM=0;function YM(r,e){const t=r.split(`
`),s=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const f=c+1;s.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return s.join(`
`)}const Om=new st;function qM(r){Et._getMatrix(Om,Et.workingColorSpace,r);const e=`mat3( ${Om.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(r)){case Hl:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function km(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),a=r.getShaderInfoLog(e).trim();if(s&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+YM(r.getShaderSource(e),c)}else return a}function $M(r,e){const t=qM(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function KM(r,e){let t;switch(e){case kv:t="Linear";break;case zv:t="Reinhard";break;case Bv:t="Cineon";break;case Hv:t="ACESFilmic";break;case Gv:t="AgX";break;case Wv:t="Neutral";break;case Vv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Il=new q;function ZM(){Et.getLuminanceCoefficients(Il);const r=Il.x.toFixed(4),e=Il.y.toFixed(4),t=Il.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jo).join(`
`)}function JM(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function eE(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const l=r.getActiveAttrib(e,a),c=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:r.getAttribLocation(e,c),locationSize:f}}return t}function jo(r){return r!==""}function zm(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zf(r){return r.replace(tE,iE)}const nE=new Map;function iE(r,e){let t=ot[e];if(t===void 0){const s=nE.get(e);if(s!==void 0)t=ot[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Zf(t)}const rE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hm(r){return r.replace(rE,sE)}function sE(r,e,t,s){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Vm(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function oE(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===qm?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===_v?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function aE(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Qs:case Js:e="ENVMAP_TYPE_CUBE";break;case jl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lE(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Js:e="ENVMAP_MODE_REFRACTION";break}return e}function uE(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case $m:e="ENVMAP_BLENDING_MULTIPLY";break;case Fv:e="ENVMAP_BLENDING_MIX";break;case Ov:e="ENVMAP_BLENDING_ADD";break}return e}function cE(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:s,maxMip:t}}function fE(r,e,t,s){const a=r.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const h=oE(t),m=aE(t),g=lE(t),v=uE(t),y=cE(t),S=QM(t),E=JM(l),w=a.createProgram();let x,_,U=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(jo).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(jo).join(`
`),_.length>0&&(_+=`
`)):(x=[Vm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),_=[Vm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mr?"#define TONE_MAPPING":"",t.toneMapping!==Mr?ot.tonemapping_pars_fragment:"",t.toneMapping!==Mr?KM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,$M("linearToOutputTexel",t.outputColorSpace),ZM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(jo).join(`
`)),c=Zf(c),c=zm(c,t),c=Bm(c,t),f=Zf(f),f=zm(f,t),f=Bm(f,t),c=Hm(c),f=Hm(f),t.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",t.glslVersion===$p?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$p?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=U+x+c,b=U+_+f,X=Fm(a,a.VERTEX_SHADER,L),z=Fm(a,a.FRAGMENT_SHADER,b);a.attachShader(w,X),a.attachShader(w,z),t.index0AttributeName!==void 0?a.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function F(B){if(r.debug.checkShaderErrors){const oe=a.getProgramInfoLog(w).trim(),ee=a.getShaderInfoLog(X).trim(),fe=a.getShaderInfoLog(z).trim();let he=!0,se=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(he=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,w,X,z);else{const le=km(a,X,"vertex"),k=km(a,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+oe+`
`+le+`
`+k)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(ee===""||fe==="")&&(se=!1);se&&(B.diagnostics={runnable:he,programLog:oe,vertexShader:{log:ee,prefix:x},fragmentShader:{log:fe,prefix:_}})}a.deleteShader(X),a.deleteShader(z),j=new Bl(a,w),C=eE(a,w)}let j;this.getUniforms=function(){return j===void 0&&F(this),j};let C;this.getAttributes=function(){return C===void 0&&F(this),C};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(w,XM)),R},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jM++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=X,this.fragmentShader=z,this}let dE=0;class hE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(s),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new pE(e),t.set(e,s)),s}}class pE{constructor(e){this.id=dE++,this.code=e,this.usedTimes=0}}function mE(r,e,t,s,a,l,c){const f=new ld,h=new hE,m=new Set,g=[],v=a.logarithmicDepthBuffer,y=a.vertexTextures;let S=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(C){return m.add(C),C===0?"uv":`uv${C}`}function x(C,R,B,oe,ee){const fe=oe.fog,he=ee.geometry,se=C.isMeshStandardMaterial?oe.environment:null,le=(C.isMeshStandardMaterial?t:e).get(C.envMap||se),k=le&&le.mapping===jl?le.image.height:null,ae=E[C.type];C.precision!==null&&(S=a.getMaxPrecision(C.precision),S!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",S,"instead."));const re=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,I=re!==void 0?re.length:0;let ne=0;he.morphAttributes.position!==void 0&&(ne=1),he.morphAttributes.normal!==void 0&&(ne=2),he.morphAttributes.color!==void 0&&(ne=3);let Ie,Z,ue,Me;if(ae){const vt=_i[ae];Ie=vt.vertexShader,Z=vt.fragmentShader}else Ie=C.vertexShader,Z=C.fragmentShader,h.update(C),ue=h.getVertexShaderID(C),Me=h.getFragmentShaderID(C);const ve=r.getRenderTarget(),Te=r.state.buffers.depth.getReversed(),Ue=ee.isInstancedMesh===!0,Ze=ee.isBatchedMesh===!0,Rt=!!C.map,mt=!!C.matcap,Dt=!!le,O=!!C.aoMap,_n=!!C.lightMap,ht=!!C.bumpMap,ut=!!C.normalMap,je=!!C.displacementMap,At=!!C.emissiveMap,We=!!C.metalnessMap,P=!!C.roughnessMap,T=C.anisotropy>0,K=C.clearcoat>0,pe=C.dispersion>0,ge=C.iridescence>0,ce=C.sheen>0,Ve=C.transmission>0,we=T&&!!C.anisotropyMap,Ne=K&&!!C.clearcoatMap,at=K&&!!C.clearcoatNormalMap,Se=K&&!!C.clearcoatRoughnessMap,ke=ge&&!!C.iridescenceMap,qe=ge&&!!C.iridescenceThicknessMap,Qe=ce&&!!C.sheenColorMap,ze=ce&&!!C.sheenRoughnessMap,ct=!!C.specularMap,nt=!!C.specularColorMap,Tt=!!C.specularIntensityMap,G=Ve&&!!C.transmissionMap,Ae=Ve&&!!C.thicknessMap,ie=!!C.gradientMap,de=!!C.alphaMap,be=C.alphaTest>0,Pe=!!C.alphaHash,it=!!C.extensions;let It=Mr;C.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(It=r.toneMapping);const qt={shaderID:ae,shaderType:C.type,shaderName:C.name,vertexShader:Ie,fragmentShader:Z,defines:C.defines,customVertexShaderID:ue,customFragmentShaderID:Me,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:S,batching:Ze,batchingColor:Ze&&ee._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&ee.instanceColor!==null,instancingMorph:Ue&&ee.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:ve===null?r.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:no,alphaToCoverage:!!C.alphaToCoverage,map:Rt,matcap:mt,envMap:Dt,envMapMode:Dt&&le.mapping,envMapCubeUVHeight:k,aoMap:O,lightMap:_n,bumpMap:ht,normalMap:ut,displacementMap:y&&je,emissiveMap:At,normalMapObjectSpace:ut&&C.normalMapType===$v,normalMapTangentSpace:ut&&C.normalMapType===qv,metalnessMap:We,roughnessMap:P,anisotropy:T,anisotropyMap:we,clearcoat:K,clearcoatMap:Ne,clearcoatNormalMap:at,clearcoatRoughnessMap:Se,dispersion:pe,iridescence:ge,iridescenceMap:ke,iridescenceThicknessMap:qe,sheen:ce,sheenColorMap:Qe,sheenRoughnessMap:ze,specularMap:ct,specularColorMap:nt,specularIntensityMap:Tt,transmission:Ve,transmissionMap:G,thicknessMap:Ae,gradientMap:ie,opaque:C.transparent===!1&&C.blending===js&&C.alphaToCoverage===!1,alphaMap:de,alphaTest:be,alphaHash:Pe,combine:C.combine,mapUv:Rt&&w(C.map.channel),aoMapUv:O&&w(C.aoMap.channel),lightMapUv:_n&&w(C.lightMap.channel),bumpMapUv:ht&&w(C.bumpMap.channel),normalMapUv:ut&&w(C.normalMap.channel),displacementMapUv:je&&w(C.displacementMap.channel),emissiveMapUv:At&&w(C.emissiveMap.channel),metalnessMapUv:We&&w(C.metalnessMap.channel),roughnessMapUv:P&&w(C.roughnessMap.channel),anisotropyMapUv:we&&w(C.anisotropyMap.channel),clearcoatMapUv:Ne&&w(C.clearcoatMap.channel),clearcoatNormalMapUv:at&&w(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&w(C.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&w(C.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&w(C.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&w(C.sheenColorMap.channel),sheenRoughnessMapUv:ze&&w(C.sheenRoughnessMap.channel),specularMapUv:ct&&w(C.specularMap.channel),specularColorMapUv:nt&&w(C.specularColorMap.channel),specularIntensityMapUv:Tt&&w(C.specularIntensityMap.channel),transmissionMapUv:G&&w(C.transmissionMap.channel),thicknessMapUv:Ae&&w(C.thicknessMap.channel),alphaMapUv:de&&w(C.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(ut||T),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!he.attributes.uv&&(Rt||de),fog:!!fe,useFog:C.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Te,skinning:ee.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:ne,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:It,decodeVideoTexture:Rt&&C.map.isVideoTexture===!0&&Et.getTransfer(C.map.colorSpace)===Pt,decodeVideoTextureEmissive:At&&C.emissiveMap.isVideoTexture===!0&&Et.getTransfer(C.emissiveMap.colorSpace)===Pt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===zi,flipSided:C.side===Un,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:it&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&C.extensions.multiDraw===!0||Ze)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return qt.vertexUv1s=m.has(1),qt.vertexUv2s=m.has(2),qt.vertexUv3s=m.has(3),m.clear(),qt}function _(C){const R=[];if(C.shaderID?R.push(C.shaderID):(R.push(C.customVertexShaderID),R.push(C.customFragmentShaderID)),C.defines!==void 0)for(const B in C.defines)R.push(B),R.push(C.defines[B]);return C.isRawShaderMaterial===!1&&(U(R,C),L(R,C),R.push(r.outputColorSpace)),R.push(C.customProgramCacheKey),R.join()}function U(C,R){C.push(R.precision),C.push(R.outputColorSpace),C.push(R.envMapMode),C.push(R.envMapCubeUVHeight),C.push(R.mapUv),C.push(R.alphaMapUv),C.push(R.lightMapUv),C.push(R.aoMapUv),C.push(R.bumpMapUv),C.push(R.normalMapUv),C.push(R.displacementMapUv),C.push(R.emissiveMapUv),C.push(R.metalnessMapUv),C.push(R.roughnessMapUv),C.push(R.anisotropyMapUv),C.push(R.clearcoatMapUv),C.push(R.clearcoatNormalMapUv),C.push(R.clearcoatRoughnessMapUv),C.push(R.iridescenceMapUv),C.push(R.iridescenceThicknessMapUv),C.push(R.sheenColorMapUv),C.push(R.sheenRoughnessMapUv),C.push(R.specularMapUv),C.push(R.specularColorMapUv),C.push(R.specularIntensityMapUv),C.push(R.transmissionMapUv),C.push(R.thicknessMapUv),C.push(R.combine),C.push(R.fogExp2),C.push(R.sizeAttenuation),C.push(R.morphTargetsCount),C.push(R.morphAttributeCount),C.push(R.numDirLights),C.push(R.numPointLights),C.push(R.numSpotLights),C.push(R.numSpotLightMaps),C.push(R.numHemiLights),C.push(R.numRectAreaLights),C.push(R.numDirLightShadows),C.push(R.numPointLightShadows),C.push(R.numSpotLightShadows),C.push(R.numSpotLightShadowsWithMaps),C.push(R.numLightProbes),C.push(R.shadowMapType),C.push(R.toneMapping),C.push(R.numClippingPlanes),C.push(R.numClipIntersection),C.push(R.depthPacking)}function L(C,R){f.disableAll(),R.supportsVertexTextures&&f.enable(0),R.instancing&&f.enable(1),R.instancingColor&&f.enable(2),R.instancingMorph&&f.enable(3),R.matcap&&f.enable(4),R.envMap&&f.enable(5),R.normalMapObjectSpace&&f.enable(6),R.normalMapTangentSpace&&f.enable(7),R.clearcoat&&f.enable(8),R.iridescence&&f.enable(9),R.alphaTest&&f.enable(10),R.vertexColors&&f.enable(11),R.vertexAlphas&&f.enable(12),R.vertexUv1s&&f.enable(13),R.vertexUv2s&&f.enable(14),R.vertexUv3s&&f.enable(15),R.vertexTangents&&f.enable(16),R.anisotropy&&f.enable(17),R.alphaHash&&f.enable(18),R.batching&&f.enable(19),R.dispersion&&f.enable(20),R.batchingColor&&f.enable(21),C.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reverseDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.decodeVideoTextureEmissive&&f.enable(20),R.alphaToCoverage&&f.enable(21),C.push(f.mask)}function b(C){const R=E[C.type];let B;if(R){const oe=_i[R];B=H0.clone(oe.uniforms)}else B=C.uniforms;return B}function X(C,R){let B;for(let oe=0,ee=g.length;oe<ee;oe++){const fe=g[oe];if(fe.cacheKey===R){B=fe,++B.usedTimes;break}}return B===void 0&&(B=new fE(r,R,C,l),g.push(B)),B}function z(C){if(--C.usedTimes===0){const R=g.indexOf(C);g[R]=g[g.length-1],g.pop(),C.destroy()}}function F(C){h.remove(C)}function j(){h.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:b,acquireProgram:X,releaseProgram:z,releaseShaderCache:F,programs:g,dispose:j}}function gE(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let f=r.get(c);return f===void 0&&(f={},r.set(c,f)),f}function s(c){r.delete(c)}function a(c,f,h){r.get(c)[f]=h}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:a,dispose:l}}function _E(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Gm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Wm(){const r=[];let e=0;const t=[],s=[],a=[];function l(){e=0,t.length=0,s.length=0,a.length=0}function c(v,y,S,E,w,x){let _=r[e];return _===void 0?(_={id:v.id,object:v,geometry:y,material:S,groupOrder:E,renderOrder:v.renderOrder,z:w,group:x},r[e]=_):(_.id=v.id,_.object=v,_.geometry=y,_.material=S,_.groupOrder=E,_.renderOrder=v.renderOrder,_.z=w,_.group=x),e++,_}function f(v,y,S,E,w,x){const _=c(v,y,S,E,w,x);S.transmission>0?s.push(_):S.transparent===!0?a.push(_):t.push(_)}function h(v,y,S,E,w,x){const _=c(v,y,S,E,w,x);S.transmission>0?s.unshift(_):S.transparent===!0?a.unshift(_):t.unshift(_)}function m(v,y){t.length>1&&t.sort(v||_E),s.length>1&&s.sort(y||Gm),a.length>1&&a.sort(y||Gm)}function g(){for(let v=e,y=r.length;v<y;v++){const S=r[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:s,transparent:a,init:l,push:f,unshift:h,finish:g,sort:m}}function vE(){let r=new WeakMap;function e(s,a){const l=r.get(s);let c;return l===void 0?(c=new Wm,r.set(s,[c])):a>=l.length?(c=new Wm,l.push(c)):c=l[a],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function xE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new wt};break;case"SpotLight":t={position:new q,direction:new q,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new wt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":t={color:new wt,position:new q,halfWidth:new q,halfHeight:new q};break}return r[e.id]=t,t}}}function yE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let SE=0;function ME(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function EE(r){const e=new xE,t=yE(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new q);const a=new q,l=new Vt,c=new Vt;function f(m){let g=0,v=0,y=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let S=0,E=0,w=0,x=0,_=0,U=0,L=0,b=0,X=0,z=0,F=0;m.sort(ME);for(let C=0,R=m.length;C<R;C++){const B=m[C],oe=B.color,ee=B.intensity,fe=B.distance,he=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)g+=oe.r*ee,v+=oe.g*ee,y+=oe.b*ee;else if(B.isLightProbe){for(let se=0;se<9;se++)s.probe[se].addScaledVector(B.sh.coefficients[se],ee);F++}else if(B.isDirectionalLight){const se=e.get(B);if(se.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const le=B.shadow,k=t.get(B);k.shadowIntensity=le.intensity,k.shadowBias=le.bias,k.shadowNormalBias=le.normalBias,k.shadowRadius=le.radius,k.shadowMapSize=le.mapSize,s.directionalShadow[S]=k,s.directionalShadowMap[S]=he,s.directionalShadowMatrix[S]=B.shadow.matrix,U++}s.directional[S]=se,S++}else if(B.isSpotLight){const se=e.get(B);se.position.setFromMatrixPosition(B.matrixWorld),se.color.copy(oe).multiplyScalar(ee),se.distance=fe,se.coneCos=Math.cos(B.angle),se.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),se.decay=B.decay,s.spot[w]=se;const le=B.shadow;if(B.map&&(s.spotLightMap[X]=B.map,X++,le.updateMatrices(B),B.castShadow&&z++),s.spotLightMatrix[w]=le.matrix,B.castShadow){const k=t.get(B);k.shadowIntensity=le.intensity,k.shadowBias=le.bias,k.shadowNormalBias=le.normalBias,k.shadowRadius=le.radius,k.shadowMapSize=le.mapSize,s.spotShadow[w]=k,s.spotShadowMap[w]=he,b++}w++}else if(B.isRectAreaLight){const se=e.get(B);se.color.copy(oe).multiplyScalar(ee),se.halfWidth.set(B.width*.5,0,0),se.halfHeight.set(0,B.height*.5,0),s.rectArea[x]=se,x++}else if(B.isPointLight){const se=e.get(B);if(se.color.copy(B.color).multiplyScalar(B.intensity),se.distance=B.distance,se.decay=B.decay,B.castShadow){const le=B.shadow,k=t.get(B);k.shadowIntensity=le.intensity,k.shadowBias=le.bias,k.shadowNormalBias=le.normalBias,k.shadowRadius=le.radius,k.shadowMapSize=le.mapSize,k.shadowCameraNear=le.camera.near,k.shadowCameraFar=le.camera.far,s.pointShadow[E]=k,s.pointShadowMap[E]=he,s.pointShadowMatrix[E]=B.shadow.matrix,L++}s.point[E]=se,E++}else if(B.isHemisphereLight){const se=e.get(B);se.skyColor.copy(B.color).multiplyScalar(ee),se.groundColor.copy(B.groundColor).multiplyScalar(ee),s.hemi[_]=se,_++}}x>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ce.LTC_FLOAT_1,s.rectAreaLTC2=Ce.LTC_FLOAT_2):(s.rectAreaLTC1=Ce.LTC_HALF_1,s.rectAreaLTC2=Ce.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=v,s.ambient[2]=y;const j=s.hash;(j.directionalLength!==S||j.pointLength!==E||j.spotLength!==w||j.rectAreaLength!==x||j.hemiLength!==_||j.numDirectionalShadows!==U||j.numPointShadows!==L||j.numSpotShadows!==b||j.numSpotMaps!==X||j.numLightProbes!==F)&&(s.directional.length=S,s.spot.length=w,s.rectArea.length=x,s.point.length=E,s.hemi.length=_,s.directionalShadow.length=U,s.directionalShadowMap.length=U,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=b,s.spotShadowMap.length=b,s.directionalShadowMatrix.length=U,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=b+X-z,s.spotLightMap.length=X,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=F,j.directionalLength=S,j.pointLength=E,j.spotLength=w,j.rectAreaLength=x,j.hemiLength=_,j.numDirectionalShadows=U,j.numPointShadows=L,j.numSpotShadows=b,j.numSpotMaps=X,j.numLightProbes=F,s.version=SE++)}function h(m,g){let v=0,y=0,S=0,E=0,w=0;const x=g.matrixWorldInverse;for(let _=0,U=m.length;_<U;_++){const L=m[_];if(L.isDirectionalLight){const b=s.directional[v];b.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(x),v++}else if(L.isSpotLight){const b=s.spot[S];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(x),b.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(x),S++}else if(L.isRectAreaLight){const b=s.rectArea[E];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(x),c.identity(),l.copy(L.matrixWorld),l.premultiply(x),c.extractRotation(l),b.halfWidth.set(L.width*.5,0,0),b.halfHeight.set(0,L.height*.5,0),b.halfWidth.applyMatrix4(c),b.halfHeight.applyMatrix4(c),E++}else if(L.isPointLight){const b=s.point[y];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(x),y++}else if(L.isHemisphereLight){const b=s.hemi[w];b.direction.setFromMatrixPosition(L.matrixWorld),b.direction.transformDirection(x),w++}}}return{setup:f,setupView:h,state:s}}function Xm(r){const e=new EE(r),t=[],s=[];function a(g){m.camera=g,t.length=0,s.length=0}function l(g){t.push(g)}function c(g){s.push(g)}function f(){e.setup(t)}function h(g){e.setupView(t,g)}const m={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:c}}function TE(r){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let f;return c===void 0?(f=new Xm(r),e.set(a,[f])):l>=c.length?(f=new Xm(r),c.push(f)):f=c[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}const wE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AE=`uniform sampler2D shadow_pass;
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
}`;function RE(r,e,t){let s=new vg;const a=new lt,l=new lt,c=new Xt,f=new Z0({depthPacking:Yv}),h=new Q0,m={},g=t.maxTextureSize,v={[Er]:Un,[Un]:Er,[zi]:zi},y=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:wE,fragmentShader:AE}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const E=new Mi;E.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new xi(E,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qm;let _=this.type;this.render=function(z,F,j){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||z.length===0)return;const C=r.getRenderTarget(),R=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),oe=r.state;oe.setBlending(Sr),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const ee=_!==ki&&this.type===ki,fe=_===ki&&this.type!==ki;for(let he=0,se=z.length;he<se;he++){const le=z[he],k=le.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;a.copy(k.mapSize);const ae=k.getFrameExtents();if(a.multiply(ae),l.copy(k.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(l.x=Math.floor(g/ae.x),a.x=l.x*ae.x,k.mapSize.x=l.x),a.y>g&&(l.y=Math.floor(g/ae.y),a.y=l.y*ae.y,k.mapSize.y=l.y)),k.map===null||ee===!0||fe===!0){const I=this.type!==ki?{minFilter:fi,magFilter:fi}:{};k.map!==null&&k.map.dispose(),k.map=new Qr(a.x,a.y,I),k.map.texture.name=le.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const re=k.getViewportCount();for(let I=0;I<re;I++){const ne=k.getViewport(I);c.set(l.x*ne.x,l.y*ne.y,l.x*ne.z,l.y*ne.w),oe.viewport(c),k.updateMatrices(le,I),s=k.getFrustum(),b(F,j,k.camera,le,this.type)}k.isPointLightShadow!==!0&&this.type===ki&&U(k,j),k.needsUpdate=!1}_=this.type,x.needsUpdate=!1,r.setRenderTarget(C,R,B)};function U(z,F){const j=e.update(w);y.defines.VSM_SAMPLES!==z.blurSamples&&(y.defines.VSM_SAMPLES=z.blurSamples,S.defines.VSM_SAMPLES=z.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Qr(a.x,a.y)),y.uniforms.shadow_pass.value=z.map.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,r.setRenderTarget(z.mapPass),r.clear(),r.renderBufferDirect(F,null,j,y,w,null),S.uniforms.shadow_pass.value=z.mapPass.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,r.setRenderTarget(z.map),r.clear(),r.renderBufferDirect(F,null,j,S,w,null)}function L(z,F,j,C){let R=null;const B=j.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(B!==void 0)R=B;else if(R=j.isPointLight===!0?h:f,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const oe=R.uuid,ee=F.uuid;let fe=m[oe];fe===void 0&&(fe={},m[oe]=fe);let he=fe[ee];he===void 0&&(he=R.clone(),fe[ee]=he,F.addEventListener("dispose",X)),R=he}if(R.visible=F.visible,R.wireframe=F.wireframe,C===ki?R.side=F.shadowSide!==null?F.shadowSide:F.side:R.side=F.shadowSide!==null?F.shadowSide:v[F.side],R.alphaMap=F.alphaMap,R.alphaTest=F.alphaTest,R.map=F.map,R.clipShadows=F.clipShadows,R.clippingPlanes=F.clippingPlanes,R.clipIntersection=F.clipIntersection,R.displacementMap=F.displacementMap,R.displacementScale=F.displacementScale,R.displacementBias=F.displacementBias,R.wireframeLinewidth=F.wireframeLinewidth,R.linewidth=F.linewidth,j.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const oe=r.properties.get(R);oe.light=j}return R}function b(z,F,j,C,R){if(z.visible===!1)return;if(z.layers.test(F.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&R===ki)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,z.matrixWorld);const ee=e.update(z),fe=z.material;if(Array.isArray(fe)){const he=ee.groups;for(let se=0,le=he.length;se<le;se++){const k=he[se],ae=fe[k.materialIndex];if(ae&&ae.visible){const re=L(z,ae,C,R);z.onBeforeShadow(r,z,F,j,ee,re,k),r.renderBufferDirect(j,null,ee,re,z,k),z.onAfterShadow(r,z,F,j,ee,re,k)}}}else if(fe.visible){const he=L(z,fe,C,R);z.onBeforeShadow(r,z,F,j,ee,he,null),r.renderBufferDirect(j,null,ee,he,z,null),z.onAfterShadow(r,z,F,j,ee,he,null)}}const oe=z.children;for(let ee=0,fe=oe.length;ee<fe;ee++)b(oe[ee],F,j,C,R)}function X(z){z.target.removeEventListener("dispose",X);for(const j in m){const C=m[j],R=z.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}const CE={[hf]:pf,[mf]:vf,[gf]:xf,[Zs]:_f,[pf]:hf,[vf]:mf,[xf]:gf,[_f]:Zs};function PE(r,e){function t(){let G=!1;const Ae=new Xt;let ie=null;const de=new Xt(0,0,0,0);return{setMask:function(be){ie!==be&&!G&&(r.colorMask(be,be,be,be),ie=be)},setLocked:function(be){G=be},setClear:function(be,Pe,it,It,qt){qt===!0&&(be*=It,Pe*=It,it*=It),Ae.set(be,Pe,it,It),de.equals(Ae)===!1&&(r.clearColor(be,Pe,it,It),de.copy(Ae))},reset:function(){G=!1,ie=null,de.set(-1,0,0,0)}}}function s(){let G=!1,Ae=!1,ie=null,de=null,be=null;return{setReversed:function(Pe){if(Ae!==Pe){const it=e.get("EXT_clip_control");Ae?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT);const It=be;be=null,this.setClear(It)}Ae=Pe},getReversed:function(){return Ae},setTest:function(Pe){Pe?ve(r.DEPTH_TEST):Te(r.DEPTH_TEST)},setMask:function(Pe){ie!==Pe&&!G&&(r.depthMask(Pe),ie=Pe)},setFunc:function(Pe){if(Ae&&(Pe=CE[Pe]),de!==Pe){switch(Pe){case hf:r.depthFunc(r.NEVER);break;case pf:r.depthFunc(r.ALWAYS);break;case mf:r.depthFunc(r.LESS);break;case Zs:r.depthFunc(r.LEQUAL);break;case gf:r.depthFunc(r.EQUAL);break;case _f:r.depthFunc(r.GEQUAL);break;case vf:r.depthFunc(r.GREATER);break;case xf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}de=Pe}},setLocked:function(Pe){G=Pe},setClear:function(Pe){be!==Pe&&(Ae&&(Pe=1-Pe),r.clearDepth(Pe),be=Pe)},reset:function(){G=!1,ie=null,de=null,be=null,Ae=!1}}}function a(){let G=!1,Ae=null,ie=null,de=null,be=null,Pe=null,it=null,It=null,qt=null;return{setTest:function(vt){G||(vt?ve(r.STENCIL_TEST):Te(r.STENCIL_TEST))},setMask:function(vt){Ae!==vt&&!G&&(r.stencilMask(vt),Ae=vt)},setFunc:function(vt,An,vn){(ie!==vt||de!==An||be!==vn)&&(r.stencilFunc(vt,An,vn),ie=vt,de=An,be=vn)},setOp:function(vt,An,vn){(Pe!==vt||it!==An||It!==vn)&&(r.stencilOp(vt,An,vn),Pe=vt,it=An,It=vn)},setLocked:function(vt){G=vt},setClear:function(vt){qt!==vt&&(r.clearStencil(vt),qt=vt)},reset:function(){G=!1,Ae=null,ie=null,de=null,be=null,Pe=null,it=null,It=null,qt=null}}}const l=new t,c=new s,f=new a,h=new WeakMap,m=new WeakMap;let g={},v={},y=new WeakMap,S=[],E=null,w=!1,x=null,_=null,U=null,L=null,b=null,X=null,z=null,F=new wt(0,0,0),j=0,C=!1,R=null,B=null,oe=null,ee=null,fe=null;const he=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,le=0;const k=r.getParameter(r.VERSION);k.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(k)[1]),se=le>=1):k.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),se=le>=2);let ae=null,re={};const I=r.getParameter(r.SCISSOR_BOX),ne=r.getParameter(r.VIEWPORT),Ie=new Xt().fromArray(I),Z=new Xt().fromArray(ne);function ue(G,Ae,ie,de){const be=new Uint8Array(4),Pe=r.createTexture();r.bindTexture(G,Pe),r.texParameteri(G,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(G,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let it=0;it<ie;it++)G===r.TEXTURE_3D||G===r.TEXTURE_2D_ARRAY?r.texImage3D(Ae,0,r.RGBA,1,1,de,0,r.RGBA,r.UNSIGNED_BYTE,be):r.texImage2D(Ae+it,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,be);return Pe}const Me={};Me[r.TEXTURE_2D]=ue(r.TEXTURE_2D,r.TEXTURE_2D,1),Me[r.TEXTURE_CUBE_MAP]=ue(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[r.TEXTURE_2D_ARRAY]=ue(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Me[r.TEXTURE_3D]=ue(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),ve(r.DEPTH_TEST),c.setFunc(Zs),ht(!1),ut(Gp),ve(r.CULL_FACE),O(Sr);function ve(G){g[G]!==!0&&(r.enable(G),g[G]=!0)}function Te(G){g[G]!==!1&&(r.disable(G),g[G]=!1)}function Ue(G,Ae){return v[G]!==Ae?(r.bindFramebuffer(G,Ae),v[G]=Ae,G===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Ae),G===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Ze(G,Ae){let ie=S,de=!1;if(G){ie=y.get(Ae),ie===void 0&&(ie=[],y.set(Ae,ie));const be=G.textures;if(ie.length!==be.length||ie[0]!==r.COLOR_ATTACHMENT0){for(let Pe=0,it=be.length;Pe<it;Pe++)ie[Pe]=r.COLOR_ATTACHMENT0+Pe;ie.length=be.length,de=!0}}else ie[0]!==r.BACK&&(ie[0]=r.BACK,de=!0);de&&r.drawBuffers(ie)}function Rt(G){return E!==G?(r.useProgram(G),E=G,!0):!1}const mt={[Yr]:r.FUNC_ADD,[xv]:r.FUNC_SUBTRACT,[yv]:r.FUNC_REVERSE_SUBTRACT};mt[Sv]=r.MIN,mt[Mv]=r.MAX;const Dt={[Ev]:r.ZERO,[Tv]:r.ONE,[wv]:r.SRC_COLOR,[ff]:r.SRC_ALPHA,[Dv]:r.SRC_ALPHA_SATURATE,[Pv]:r.DST_COLOR,[Rv]:r.DST_ALPHA,[Av]:r.ONE_MINUS_SRC_COLOR,[df]:r.ONE_MINUS_SRC_ALPHA,[bv]:r.ONE_MINUS_DST_COLOR,[Cv]:r.ONE_MINUS_DST_ALPHA,[Lv]:r.CONSTANT_COLOR,[Iv]:r.ONE_MINUS_CONSTANT_COLOR,[Uv]:r.CONSTANT_ALPHA,[Nv]:r.ONE_MINUS_CONSTANT_ALPHA};function O(G,Ae,ie,de,be,Pe,it,It,qt,vt){if(G===Sr){w===!0&&(Te(r.BLEND),w=!1);return}if(w===!1&&(ve(r.BLEND),w=!0),G!==vv){if(G!==x||vt!==C){if((_!==Yr||b!==Yr)&&(r.blendEquation(r.FUNC_ADD),_=Yr,b=Yr),vt)switch(G){case js:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Wp:r.blendFunc(r.ONE,r.ONE);break;case Xp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case jp:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case js:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Wp:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Xp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case jp:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}U=null,L=null,X=null,z=null,F.set(0,0,0),j=0,x=G,C=vt}return}be=be||Ae,Pe=Pe||ie,it=it||de,(Ae!==_||be!==b)&&(r.blendEquationSeparate(mt[Ae],mt[be]),_=Ae,b=be),(ie!==U||de!==L||Pe!==X||it!==z)&&(r.blendFuncSeparate(Dt[ie],Dt[de],Dt[Pe],Dt[it]),U=ie,L=de,X=Pe,z=it),(It.equals(F)===!1||qt!==j)&&(r.blendColor(It.r,It.g,It.b,qt),F.copy(It),j=qt),x=G,C=!1}function _n(G,Ae){G.side===zi?Te(r.CULL_FACE):ve(r.CULL_FACE);let ie=G.side===Un;Ae&&(ie=!ie),ht(ie),G.blending===js&&G.transparent===!1?O(Sr):O(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),l.setMask(G.colorWrite);const de=G.stencilWrite;f.setTest(de),de&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),At(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ve(r.SAMPLE_ALPHA_TO_COVERAGE):Te(r.SAMPLE_ALPHA_TO_COVERAGE)}function ht(G){R!==G&&(G?r.frontFace(r.CW):r.frontFace(r.CCW),R=G)}function ut(G){G!==mv?(ve(r.CULL_FACE),G!==B&&(G===Gp?r.cullFace(r.BACK):G===gv?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Te(r.CULL_FACE),B=G}function je(G){G!==oe&&(se&&r.lineWidth(G),oe=G)}function At(G,Ae,ie){G?(ve(r.POLYGON_OFFSET_FILL),(ee!==Ae||fe!==ie)&&(r.polygonOffset(Ae,ie),ee=Ae,fe=ie)):Te(r.POLYGON_OFFSET_FILL)}function We(G){G?ve(r.SCISSOR_TEST):Te(r.SCISSOR_TEST)}function P(G){G===void 0&&(G=r.TEXTURE0+he-1),ae!==G&&(r.activeTexture(G),ae=G)}function T(G,Ae,ie){ie===void 0&&(ae===null?ie=r.TEXTURE0+he-1:ie=ae);let de=re[ie];de===void 0&&(de={type:void 0,texture:void 0},re[ie]=de),(de.type!==G||de.texture!==Ae)&&(ae!==ie&&(r.activeTexture(ie),ae=ie),r.bindTexture(G,Ae||Me[G]),de.type=G,de.texture=Ae)}function K(){const G=re[ae];G!==void 0&&G.type!==void 0&&(r.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function pe(){try{r.compressedTexImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ge(){try{r.compressedTexImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ce(){try{r.texSubImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ve(){try{r.texSubImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function we(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ne(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function at(){try{r.texStorage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Se(){try{r.texStorage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ke(){try{r.texImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function qe(){try{r.texImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Qe(G){Ie.equals(G)===!1&&(r.scissor(G.x,G.y,G.z,G.w),Ie.copy(G))}function ze(G){Z.equals(G)===!1&&(r.viewport(G.x,G.y,G.z,G.w),Z.copy(G))}function ct(G,Ae){let ie=m.get(Ae);ie===void 0&&(ie=new WeakMap,m.set(Ae,ie));let de=ie.get(G);de===void 0&&(de=r.getUniformBlockIndex(Ae,G.name),ie.set(G,de))}function nt(G,Ae){const de=m.get(Ae).get(G);h.get(Ae)!==de&&(r.uniformBlockBinding(Ae,de,G.__bindingPointIndex),h.set(Ae,de))}function Tt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},ae=null,re={},v={},y=new WeakMap,S=[],E=null,w=!1,x=null,_=null,U=null,L=null,b=null,X=null,z=null,F=new wt(0,0,0),j=0,C=!1,R=null,B=null,oe=null,ee=null,fe=null,Ie.set(0,0,r.canvas.width,r.canvas.height),Z.set(0,0,r.canvas.width,r.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:ve,disable:Te,bindFramebuffer:Ue,drawBuffers:Ze,useProgram:Rt,setBlending:O,setMaterial:_n,setFlipSided:ht,setCullFace:ut,setLineWidth:je,setPolygonOffset:At,setScissorTest:We,activeTexture:P,bindTexture:T,unbindTexture:K,compressedTexImage2D:pe,compressedTexImage3D:ge,texImage2D:ke,texImage3D:qe,updateUBOMapping:ct,uniformBlockBinding:nt,texStorage2D:at,texStorage3D:Se,texSubImage2D:ce,texSubImage3D:Ve,compressedTexSubImage2D:we,compressedTexSubImage3D:Ne,scissor:Qe,viewport:ze,reset:Tt}}function bE(r,e,t,s,a,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new lt,g=new WeakMap;let v;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,T){return S?new OffscreenCanvas(P,T):Gl("canvas")}function w(P,T,K){let pe=1;const ge=We(P);if((ge.width>K||ge.height>K)&&(pe=K/Math.max(ge.width,ge.height)),pe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ce=Math.floor(pe*ge.width),Ve=Math.floor(pe*ge.height);v===void 0&&(v=E(ce,Ve));const we=T?E(ce,Ve):v;return we.width=ce,we.height=Ve,we.getContext("2d").drawImage(P,0,0,ce,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ce+"x"+Ve+")."),we}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),P;return P}function x(P){return P.generateMipmaps}function _(P){r.generateMipmap(P)}function U(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(P,T,K,pe,ge=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ce=T;if(T===r.RED&&(K===r.FLOAT&&(ce=r.R32F),K===r.HALF_FLOAT&&(ce=r.R16F),K===r.UNSIGNED_BYTE&&(ce=r.R8)),T===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(ce=r.R8UI),K===r.UNSIGNED_SHORT&&(ce=r.R16UI),K===r.UNSIGNED_INT&&(ce=r.R32UI),K===r.BYTE&&(ce=r.R8I),K===r.SHORT&&(ce=r.R16I),K===r.INT&&(ce=r.R32I)),T===r.RG&&(K===r.FLOAT&&(ce=r.RG32F),K===r.HALF_FLOAT&&(ce=r.RG16F),K===r.UNSIGNED_BYTE&&(ce=r.RG8)),T===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(ce=r.RG8UI),K===r.UNSIGNED_SHORT&&(ce=r.RG16UI),K===r.UNSIGNED_INT&&(ce=r.RG32UI),K===r.BYTE&&(ce=r.RG8I),K===r.SHORT&&(ce=r.RG16I),K===r.INT&&(ce=r.RG32I)),T===r.RGB_INTEGER&&(K===r.UNSIGNED_BYTE&&(ce=r.RGB8UI),K===r.UNSIGNED_SHORT&&(ce=r.RGB16UI),K===r.UNSIGNED_INT&&(ce=r.RGB32UI),K===r.BYTE&&(ce=r.RGB8I),K===r.SHORT&&(ce=r.RGB16I),K===r.INT&&(ce=r.RGB32I)),T===r.RGBA_INTEGER&&(K===r.UNSIGNED_BYTE&&(ce=r.RGBA8UI),K===r.UNSIGNED_SHORT&&(ce=r.RGBA16UI),K===r.UNSIGNED_INT&&(ce=r.RGBA32UI),K===r.BYTE&&(ce=r.RGBA8I),K===r.SHORT&&(ce=r.RGBA16I),K===r.INT&&(ce=r.RGBA32I)),T===r.RGB&&K===r.UNSIGNED_INT_5_9_9_9_REV&&(ce=r.RGB9_E5),T===r.RGBA){const Ve=ge?Hl:Et.getTransfer(pe);K===r.FLOAT&&(ce=r.RGBA32F),K===r.HALF_FLOAT&&(ce=r.RGBA16F),K===r.UNSIGNED_BYTE&&(ce=Ve===Pt?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT_4_4_4_4&&(ce=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(ce=r.RGB5_A1)}return(ce===r.R16F||ce===r.R32F||ce===r.RG16F||ce===r.RG32F||ce===r.RGBA16F||ce===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function b(P,T){let K;return P?T===null||T===Zr||T===eo?K=r.DEPTH24_STENCIL8:T===Bi?K=r.DEPTH32F_STENCIL8:T===Ko&&(K=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Zr||T===eo?K=r.DEPTH_COMPONENT24:T===Bi?K=r.DEPTH_COMPONENT32F:T===Ko&&(K=r.DEPTH_COMPONENT16),K}function X(P,T){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==fi&&P.minFilter!==vi?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function z(P){const T=P.target;T.removeEventListener("dispose",z),j(T),T.isVideoTexture&&g.delete(T)}function F(P){const T=P.target;T.removeEventListener("dispose",F),R(T)}function j(P){const T=s.get(P);if(T.__webglInit===void 0)return;const K=P.source,pe=y.get(K);if(pe){const ge=pe[T.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&C(P),Object.keys(pe).length===0&&y.delete(K)}s.remove(P)}function C(P){const T=s.get(P);r.deleteTexture(T.__webglTexture);const K=P.source,pe=y.get(K);delete pe[T.__cacheKey],c.memory.textures--}function R(P){const T=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(T.__webglFramebuffer[pe]))for(let ge=0;ge<T.__webglFramebuffer[pe].length;ge++)r.deleteFramebuffer(T.__webglFramebuffer[pe][ge]);else r.deleteFramebuffer(T.__webglFramebuffer[pe]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[pe])}else{if(Array.isArray(T.__webglFramebuffer))for(let pe=0;pe<T.__webglFramebuffer.length;pe++)r.deleteFramebuffer(T.__webglFramebuffer[pe]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pe=0;pe<T.__webglColorRenderbuffer.length;pe++)T.__webglColorRenderbuffer[pe]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[pe]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const K=P.textures;for(let pe=0,ge=K.length;pe<ge;pe++){const ce=s.get(K[pe]);ce.__webglTexture&&(r.deleteTexture(ce.__webglTexture),c.memory.textures--),s.remove(K[pe])}s.remove(P)}let B=0;function oe(){B=0}function ee(){const P=B;return P>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+a.maxTextures),B+=1,P}function fe(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function he(P,T){const K=s.get(P);if(P.isVideoTexture&&je(P),P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){const pe=P.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(K,P,T);return}}t.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+T)}function se(P,T){const K=s.get(P);if(P.version>0&&K.__version!==P.version){Z(K,P,T);return}t.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+T)}function le(P,T){const K=s.get(P);if(P.version>0&&K.__version!==P.version){Z(K,P,T);return}t.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+T)}function k(P,T){const K=s.get(P);if(P.version>0&&K.__version!==P.version){ue(K,P,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+T)}const ae={[Mf]:r.REPEAT,[$r]:r.CLAMP_TO_EDGE,[Ef]:r.MIRRORED_REPEAT},re={[fi]:r.NEAREST,[Xv]:r.NEAREST_MIPMAP_NEAREST,[ll]:r.NEAREST_MIPMAP_LINEAR,[vi]:r.LINEAR,[Ic]:r.LINEAR_MIPMAP_NEAREST,[Kr]:r.LINEAR_MIPMAP_LINEAR},I={[Kv]:r.NEVER,[n0]:r.ALWAYS,[Zv]:r.LESS,[ag]:r.LEQUAL,[Qv]:r.EQUAL,[t0]:r.GEQUAL,[Jv]:r.GREATER,[e0]:r.NOTEQUAL};function ne(P,T){if(T.type===Bi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===vi||T.magFilter===Ic||T.magFilter===ll||T.magFilter===Kr||T.minFilter===vi||T.minFilter===Ic||T.minFilter===ll||T.minFilter===Kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,ae[T.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,ae[T.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,ae[T.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,re[T.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,re[T.minFilter]),T.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,I[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===fi||T.minFilter!==ll&&T.minFilter!==Kr||T.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Ie(P,T){let K=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",z));const pe=T.source;let ge=y.get(pe);ge===void 0&&(ge={},y.set(pe,ge));const ce=fe(T);if(ce!==P.__cacheKey){ge[ce]===void 0&&(ge[ce]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,K=!0),ge[ce].usedTimes++;const Ve=ge[P.__cacheKey];Ve!==void 0&&(ge[P.__cacheKey].usedTimes--,Ve.usedTimes===0&&C(T)),P.__cacheKey=ce,P.__webglTexture=ge[ce].texture}return K}function Z(P,T,K){let pe=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pe=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pe=r.TEXTURE_3D);const ge=Ie(P,T),ce=T.source;t.bindTexture(pe,P.__webglTexture,r.TEXTURE0+K);const Ve=s.get(ce);if(ce.version!==Ve.__version||ge===!0){t.activeTexture(r.TEXTURE0+K);const we=Et.getPrimaries(Et.workingColorSpace),Ne=T.colorSpace===yr?null:Et.getPrimaries(T.colorSpace),at=T.colorSpace===yr||we===Ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let Se=w(T.image,!1,a.maxTextureSize);Se=At(T,Se);const ke=l.convert(T.format,T.colorSpace),qe=l.convert(T.type);let Qe=L(T.internalFormat,ke,qe,T.colorSpace,T.isVideoTexture);ne(pe,T);let ze;const ct=T.mipmaps,nt=T.isVideoTexture!==!0,Tt=Ve.__version===void 0||ge===!0,G=ce.dataReady,Ae=X(T,Se);if(T.isDepthTexture)Qe=b(T.format===to,T.type),Tt&&(nt?t.texStorage2D(r.TEXTURE_2D,1,Qe,Se.width,Se.height):t.texImage2D(r.TEXTURE_2D,0,Qe,Se.width,Se.height,0,ke,qe,null));else if(T.isDataTexture)if(ct.length>0){nt&&Tt&&t.texStorage2D(r.TEXTURE_2D,Ae,Qe,ct[0].width,ct[0].height);for(let ie=0,de=ct.length;ie<de;ie++)ze=ct[ie],nt?G&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,ze.width,ze.height,ke,qe,ze.data):t.texImage2D(r.TEXTURE_2D,ie,Qe,ze.width,ze.height,0,ke,qe,ze.data);T.generateMipmaps=!1}else nt?(Tt&&t.texStorage2D(r.TEXTURE_2D,Ae,Qe,Se.width,Se.height),G&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Se.width,Se.height,ke,qe,Se.data)):t.texImage2D(r.TEXTURE_2D,0,Qe,Se.width,Se.height,0,ke,qe,Se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){nt&&Tt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ae,Qe,ct[0].width,ct[0].height,Se.depth);for(let ie=0,de=ct.length;ie<de;ie++)if(ze=ct[ie],T.format!==ci)if(ke!==null)if(nt){if(G)if(T.layerUpdates.size>0){const be=Sm(ze.width,ze.height,T.format,T.type);for(const Pe of T.layerUpdates){const it=ze.data.subarray(Pe*be/ze.data.BYTES_PER_ELEMENT,(Pe+1)*be/ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,Pe,ze.width,ze.height,1,ke,it)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,0,ze.width,ze.height,Se.depth,ke,ze.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ie,Qe,ze.width,ze.height,Se.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?G&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,0,ze.width,ze.height,Se.depth,ke,qe,ze.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ie,Qe,ze.width,ze.height,Se.depth,0,ke,qe,ze.data)}else{nt&&Tt&&t.texStorage2D(r.TEXTURE_2D,Ae,Qe,ct[0].width,ct[0].height);for(let ie=0,de=ct.length;ie<de;ie++)ze=ct[ie],T.format!==ci?ke!==null?nt?G&&t.compressedTexSubImage2D(r.TEXTURE_2D,ie,0,0,ze.width,ze.height,ke,ze.data):t.compressedTexImage2D(r.TEXTURE_2D,ie,Qe,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?G&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,ze.width,ze.height,ke,qe,ze.data):t.texImage2D(r.TEXTURE_2D,ie,Qe,ze.width,ze.height,0,ke,qe,ze.data)}else if(T.isDataArrayTexture)if(nt){if(Tt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ae,Qe,Se.width,Se.height,Se.depth),G)if(T.layerUpdates.size>0){const ie=Sm(Se.width,Se.height,T.format,T.type);for(const de of T.layerUpdates){const be=Se.data.subarray(de*ie/Se.data.BYTES_PER_ELEMENT,(de+1)*ie/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,de,Se.width,Se.height,1,ke,qe,be)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,ke,qe,Se.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Qe,Se.width,Se.height,Se.depth,0,ke,qe,Se.data);else if(T.isData3DTexture)nt?(Tt&&t.texStorage3D(r.TEXTURE_3D,Ae,Qe,Se.width,Se.height,Se.depth),G&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,ke,qe,Se.data)):t.texImage3D(r.TEXTURE_3D,0,Qe,Se.width,Se.height,Se.depth,0,ke,qe,Se.data);else if(T.isFramebufferTexture){if(Tt)if(nt)t.texStorage2D(r.TEXTURE_2D,Ae,Qe,Se.width,Se.height);else{let ie=Se.width,de=Se.height;for(let be=0;be<Ae;be++)t.texImage2D(r.TEXTURE_2D,be,Qe,ie,de,0,ke,qe,null),ie>>=1,de>>=1}}else if(ct.length>0){if(nt&&Tt){const ie=We(ct[0]);t.texStorage2D(r.TEXTURE_2D,Ae,Qe,ie.width,ie.height)}for(let ie=0,de=ct.length;ie<de;ie++)ze=ct[ie],nt?G&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,ke,qe,ze):t.texImage2D(r.TEXTURE_2D,ie,Qe,ke,qe,ze);T.generateMipmaps=!1}else if(nt){if(Tt){const ie=We(Se);t.texStorage2D(r.TEXTURE_2D,Ae,Qe,ie.width,ie.height)}G&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ke,qe,Se)}else t.texImage2D(r.TEXTURE_2D,0,Qe,ke,qe,Se);x(T)&&_(pe),Ve.__version=ce.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function ue(P,T,K){if(T.image.length!==6)return;const pe=Ie(P,T),ge=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+K);const ce=s.get(ge);if(ge.version!==ce.__version||pe===!0){t.activeTexture(r.TEXTURE0+K);const Ve=Et.getPrimaries(Et.workingColorSpace),we=T.colorSpace===yr?null:Et.getPrimaries(T.colorSpace),Ne=T.colorSpace===yr||Ve===we?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const at=T.isCompressedTexture||T.image[0].isCompressedTexture,Se=T.image[0]&&T.image[0].isDataTexture,ke=[];for(let de=0;de<6;de++)!at&&!Se?ke[de]=w(T.image[de],!0,a.maxCubemapSize):ke[de]=Se?T.image[de].image:T.image[de],ke[de]=At(T,ke[de]);const qe=ke[0],Qe=l.convert(T.format,T.colorSpace),ze=l.convert(T.type),ct=L(T.internalFormat,Qe,ze,T.colorSpace),nt=T.isVideoTexture!==!0,Tt=ce.__version===void 0||pe===!0,G=ge.dataReady;let Ae=X(T,qe);ne(r.TEXTURE_CUBE_MAP,T);let ie;if(at){nt&&Tt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ae,ct,qe.width,qe.height);for(let de=0;de<6;de++){ie=ke[de].mipmaps;for(let be=0;be<ie.length;be++){const Pe=ie[be];T.format!==ci?Qe!==null?nt?G&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,0,0,Pe.width,Pe.height,Qe,Pe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,ct,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,0,0,Pe.width,Pe.height,Qe,ze,Pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,ct,Pe.width,Pe.height,0,Qe,ze,Pe.data)}}}else{if(ie=T.mipmaps,nt&&Tt){ie.length>0&&Ae++;const de=We(ke[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ae,ct,de.width,de.height)}for(let de=0;de<6;de++)if(Se){nt?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,ke[de].width,ke[de].height,Qe,ze,ke[de].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ct,ke[de].width,ke[de].height,0,Qe,ze,ke[de].data);for(let be=0;be<ie.length;be++){const it=ie[be].image[de].image;nt?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,0,0,it.width,it.height,Qe,ze,it.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,ct,it.width,it.height,0,Qe,ze,it.data)}}else{nt?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Qe,ze,ke[de]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ct,Qe,ze,ke[de]);for(let be=0;be<ie.length;be++){const Pe=ie[be];nt?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,0,0,Qe,ze,Pe.image[de]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,ct,Qe,ze,Pe.image[de])}}}x(T)&&_(r.TEXTURE_CUBE_MAP),ce.__version=ge.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Me(P,T,K,pe,ge,ce){const Ve=l.convert(K.format,K.colorSpace),we=l.convert(K.type),Ne=L(K.internalFormat,Ve,we,K.colorSpace),at=s.get(T),Se=s.get(K);if(Se.__renderTarget=T,!at.__hasExternalTextures){const ke=Math.max(1,T.width>>ce),qe=Math.max(1,T.height>>ce);ge===r.TEXTURE_3D||ge===r.TEXTURE_2D_ARRAY?t.texImage3D(ge,ce,Ne,ke,qe,T.depth,0,Ve,we,null):t.texImage2D(ge,ce,Ne,ke,qe,0,Ve,we,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),ut(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pe,ge,Se.__webglTexture,0,ht(T)):(ge===r.TEXTURE_2D||ge>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,pe,ge,Se.__webglTexture,ce),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ve(P,T,K){if(r.bindRenderbuffer(r.RENDERBUFFER,P),T.depthBuffer){const pe=T.depthTexture,ge=pe&&pe.isDepthTexture?pe.type:null,ce=b(T.stencilBuffer,ge),Ve=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=ht(T);ut(T)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,we,ce,T.width,T.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,we,ce,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ce,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ve,r.RENDERBUFFER,P)}else{const pe=T.textures;for(let ge=0;ge<pe.length;ge++){const ce=pe[ge],Ve=l.convert(ce.format,ce.colorSpace),we=l.convert(ce.type),Ne=L(ce.internalFormat,Ve,we,ce.colorSpace),at=ht(T);K&&ut(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,at,Ne,T.width,T.height):ut(T)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,at,Ne,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Ne,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Te(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=s.get(T.depthTexture);pe.__renderTarget=T,(!pe.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),he(T.depthTexture,0);const ge=pe.__webglTexture,ce=ht(T);if(T.depthTexture.format===Ys)ut(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ge,0,ce):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ge,0);else if(T.depthTexture.format===to)ut(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ge,0,ce):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Ue(P){const T=s.get(P),K=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const pe=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pe){const ge=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pe.removeEventListener("dispose",ge)};pe.addEventListener("dispose",ge),T.__depthDisposeCallback=ge}T.__boundDepthTexture=pe}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Te(T.__webglFramebuffer,P)}else if(K){T.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[pe]),T.__webglDepthbuffer[pe]===void 0)T.__webglDepthbuffer[pe]=r.createRenderbuffer(),ve(T.__webglDepthbuffer[pe],P,!1);else{const ge=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=T.__webglDepthbuffer[pe];r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,ce)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),ve(T.__webglDepthbuffer,P,!1);else{const pe=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ge),r.framebufferRenderbuffer(r.FRAMEBUFFER,pe,r.RENDERBUFFER,ge)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ze(P,T,K){const pe=s.get(P);T!==void 0&&Me(pe.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&Ue(P)}function Rt(P){const T=P.texture,K=s.get(P),pe=s.get(T);P.addEventListener("dispose",F);const ge=P.textures,ce=P.isWebGLCubeRenderTarget===!0,Ve=ge.length>1;if(Ve||(pe.__webglTexture===void 0&&(pe.__webglTexture=r.createTexture()),pe.__version=T.version,c.memory.textures++),ce){K.__webglFramebuffer=[];for(let we=0;we<6;we++)if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer[we]=[];for(let Ne=0;Ne<T.mipmaps.length;Ne++)K.__webglFramebuffer[we][Ne]=r.createFramebuffer()}else K.__webglFramebuffer[we]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer=[];for(let we=0;we<T.mipmaps.length;we++)K.__webglFramebuffer[we]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(Ve)for(let we=0,Ne=ge.length;we<Ne;we++){const at=s.get(ge[we]);at.__webglTexture===void 0&&(at.__webglTexture=r.createTexture(),c.memory.textures++)}if(P.samples>0&&ut(P)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let we=0;we<ge.length;we++){const Ne=ge[we];K.__webglColorRenderbuffer[we]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[we]);const at=l.convert(Ne.format,Ne.colorSpace),Se=l.convert(Ne.type),ke=L(Ne.internalFormat,at,Se,Ne.colorSpace,P.isXRRenderTarget===!0),qe=ht(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,qe,ke,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,K.__webglColorRenderbuffer[we])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),ve(K.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ce){t.bindTexture(r.TEXTURE_CUBE_MAP,pe.__webglTexture),ne(r.TEXTURE_CUBE_MAP,T);for(let we=0;we<6;we++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ne=0;Ne<T.mipmaps.length;Ne++)Me(K.__webglFramebuffer[we][Ne],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ne);else Me(K.__webglFramebuffer[we],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);x(T)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ve){for(let we=0,Ne=ge.length;we<Ne;we++){const at=ge[we],Se=s.get(at);t.bindTexture(r.TEXTURE_2D,Se.__webglTexture),ne(r.TEXTURE_2D,at),Me(K.__webglFramebuffer,P,at,r.COLOR_ATTACHMENT0+we,r.TEXTURE_2D,0),x(at)&&_(r.TEXTURE_2D)}t.unbindTexture()}else{let we=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(we=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(we,pe.__webglTexture),ne(we,T),T.mipmaps&&T.mipmaps.length>0)for(let Ne=0;Ne<T.mipmaps.length;Ne++)Me(K.__webglFramebuffer[Ne],P,T,r.COLOR_ATTACHMENT0,we,Ne);else Me(K.__webglFramebuffer,P,T,r.COLOR_ATTACHMENT0,we,0);x(T)&&_(we),t.unbindTexture()}P.depthBuffer&&Ue(P)}function mt(P){const T=P.textures;for(let K=0,pe=T.length;K<pe;K++){const ge=T[K];if(x(ge)){const ce=U(P),Ve=s.get(ge).__webglTexture;t.bindTexture(ce,Ve),_(ce),t.unbindTexture()}}}const Dt=[],O=[];function _n(P){if(P.samples>0){if(ut(P)===!1){const T=P.textures,K=P.width,pe=P.height;let ge=r.COLOR_BUFFER_BIT;const ce=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ve=s.get(P),we=T.length>1;if(we)for(let Ne=0;Ne<T.length;Ne++)t.bindFramebuffer(r.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Ne=0;Ne<T.length;Ne++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ge|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ge|=r.STENCIL_BUFFER_BIT)),we){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ne]);const at=s.get(T[Ne]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,at,0)}r.blitFramebuffer(0,0,K,pe,0,0,K,pe,ge,r.NEAREST),h===!0&&(Dt.length=0,O.length=0,Dt.push(r.COLOR_ATTACHMENT0+Ne),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Dt.push(ce),O.push(ce),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,O)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Dt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),we)for(let Ne=0;Ne<T.length;Ne++){t.bindFramebuffer(r.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ne]);const at=s.get(T[Ne]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.TEXTURE_2D,at,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&h){const T=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function ht(P){return Math.min(a.maxSamples,P.samples)}function ut(P){const T=s.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function je(P){const T=c.render.frame;g.get(P)!==T&&(g.set(P,T),P.update())}function At(P,T){const K=P.colorSpace,pe=P.format,ge=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||K!==no&&K!==yr&&(Et.getTransfer(K)===Pt?(pe!==ci||ge!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),T}function We(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(m.width=P.naturalWidth||P.width,m.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(m.width=P.displayWidth,m.height=P.displayHeight):(m.width=P.width,m.height=P.height),m}this.allocateTextureUnit=ee,this.resetTextureUnits=oe,this.setTexture2D=he,this.setTexture2DArray=se,this.setTexture3D=le,this.setTextureCube=k,this.rebindTextures=Ze,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=_n,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ut}function DE(r,e){function t(s,a=yr){let l;const c=Et.getTransfer(a);if(s===Gi)return r.UNSIGNED_BYTE;if(s===nd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===id)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Jm)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Zm)return r.BYTE;if(s===Qm)return r.SHORT;if(s===Ko)return r.UNSIGNED_SHORT;if(s===td)return r.INT;if(s===Zr)return r.UNSIGNED_INT;if(s===Bi)return r.FLOAT;if(s===Qo)return r.HALF_FLOAT;if(s===eg)return r.ALPHA;if(s===tg)return r.RGB;if(s===ci)return r.RGBA;if(s===ng)return r.LUMINANCE;if(s===ig)return r.LUMINANCE_ALPHA;if(s===Ys)return r.DEPTH_COMPONENT;if(s===to)return r.DEPTH_STENCIL;if(s===rg)return r.RED;if(s===rd)return r.RED_INTEGER;if(s===sg)return r.RG;if(s===sd)return r.RG_INTEGER;if(s===od)return r.RGBA_INTEGER;if(s===Nl||s===Fl||s===Ol||s===kl)if(c===Pt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===Nl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Fl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ol)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===Nl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Fl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ol)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===kl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Tf||s===wf||s===Af||s===Rf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===Tf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===wf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Af)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Rf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Cf||s===Pf||s===bf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===Cf||s===Pf)return c===Pt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===bf)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Df||s===Lf||s===If||s===Uf||s===Nf||s===Ff||s===Of||s===kf||s===zf||s===Bf||s===Hf||s===Vf||s===Gf||s===Wf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Df)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Lf)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===If)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Uf)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Nf)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ff)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Of)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===kf)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===zf)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Bf)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Hf)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Vf)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Gf)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Wf)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===zl||s===Xf||s===jf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===zl)return c===Pt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Xf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===jf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===og||s===Yf||s===qf||s===$f)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===zl)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Yf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===qf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===$f)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===eo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}const LE={type:"move"};class uf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let a=null,l=null,c=null;const f=this._targetRay,h=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){c=!0;for(const w of e.hand.values()){const x=t.getJointPose(w,s),_=this._getHandJoint(m,w);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],y=g.position.distanceTo(v.position),S=.02,E=.005;m.inputState.pinching&&y>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(a=t.getPose(e.targetRaySpace,s),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(LE)))}return f!==null&&(f.visible=a!==null),h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new Vs;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const IE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UE=`
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

}`;class NE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const a=new Nn,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!=s.depthNear||t.depthFar!=s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Xi({vertexShader:IE,fragmentShader:UE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xi(new $l(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FE extends es{constructor(e,t){super();const s=this;let a=null,l=1,c=null,f="local-floor",h=1,m=null,g=null,v=null,y=null,S=null,E=null;const w=new NE,x=t.getContextAttributes();let _=null,U=null;const L=[],b=[],X=new lt;let z=null;const F=new Zn;F.viewport=new Xt;const j=new Zn;j.viewport=new Xt;const C=[F,j],R=new ex;let B=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ue=L[Z];return ue===void 0&&(ue=new uf,L[Z]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Z){let ue=L[Z];return ue===void 0&&(ue=new uf,L[Z]=ue),ue.getGripSpace()},this.getHand=function(Z){let ue=L[Z];return ue===void 0&&(ue=new uf,L[Z]=ue),ue.getHandSpace()};function ee(Z){const ue=b.indexOf(Z.inputSource);if(ue===-1)return;const Me=L[ue];Me!==void 0&&(Me.update(Z.inputSource,Z.frame,m||c),Me.dispatchEvent({type:Z.type,data:Z.inputSource}))}function fe(){a.removeEventListener("select",ee),a.removeEventListener("selectstart",ee),a.removeEventListener("selectend",ee),a.removeEventListener("squeeze",ee),a.removeEventListener("squeezestart",ee),a.removeEventListener("squeezeend",ee),a.removeEventListener("end",fe),a.removeEventListener("inputsourceschange",he);for(let Z=0;Z<L.length;Z++){const ue=b[Z];ue!==null&&(b[Z]=null,L[Z].disconnect(ue))}B=null,oe=null,w.reset(),e.setRenderTarget(_),S=null,y=null,v=null,a=null,U=null,Ie.stop(),s.isPresenting=!1,e.setPixelRatio(z),e.setSize(X.width,X.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){l=Z,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){f=Z,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(Z){m=Z},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(Z){if(a=Z,a!==null){if(_=e.getRenderTarget(),a.addEventListener("select",ee),a.addEventListener("selectstart",ee),a.addEventListener("selectend",ee),a.addEventListener("squeeze",ee),a.addEventListener("squeezestart",ee),a.addEventListener("squeezeend",ee),a.addEventListener("end",fe),a.addEventListener("inputsourceschange",he),x.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(X),a.renderState.layers===void 0){const ue={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,ue),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),U=new Qr(S.framebufferWidth,S.framebufferHeight,{format:ci,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ue=null,Me=null,ve=null;x.depth&&(ve=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=x.stencil?to:Ys,Me=x.stencil?eo:Zr);const Te={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:l};v=new XRWebGLBinding(a,t),y=v.createProjectionLayer(Te),a.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),U=new Qr(y.textureWidth,y.textureHeight,{format:ci,type:Gi,depthTexture:new yg(y.textureWidth,y.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(h),m=null,c=await a.requestReferenceSpace(f),Ie.setContext(a),Ie.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function he(Z){for(let ue=0;ue<Z.removed.length;ue++){const Me=Z.removed[ue],ve=b.indexOf(Me);ve>=0&&(b[ve]=null,L[ve].disconnect(Me))}for(let ue=0;ue<Z.added.length;ue++){const Me=Z.added[ue];let ve=b.indexOf(Me);if(ve===-1){for(let Ue=0;Ue<L.length;Ue++)if(Ue>=b.length){b.push(Me),ve=Ue;break}else if(b[Ue]===null){b[Ue]=Me,ve=Ue;break}if(ve===-1)break}const Te=L[ve];Te&&Te.connect(Me)}}const se=new q,le=new q;function k(Z,ue,Me){se.setFromMatrixPosition(ue.matrixWorld),le.setFromMatrixPosition(Me.matrixWorld);const ve=se.distanceTo(le),Te=ue.projectionMatrix.elements,Ue=Me.projectionMatrix.elements,Ze=Te[14]/(Te[10]-1),Rt=Te[14]/(Te[10]+1),mt=(Te[9]+1)/Te[5],Dt=(Te[9]-1)/Te[5],O=(Te[8]-1)/Te[0],_n=(Ue[8]+1)/Ue[0],ht=Ze*O,ut=Ze*_n,je=ve/(-O+_n),At=je*-O;if(ue.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(At),Z.translateZ(je),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Te[10]===-1)Z.projectionMatrix.copy(ue.projectionMatrix),Z.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const We=Ze+je,P=Rt+je,T=ht-At,K=ut+(ve-At),pe=mt*Rt/P*We,ge=Dt*Rt/P*We;Z.projectionMatrix.makePerspective(T,K,pe,ge,We,P),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ae(Z,ue){ue===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ue.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(a===null)return;let ue=Z.near,Me=Z.far;w.texture!==null&&(w.depthNear>0&&(ue=w.depthNear),w.depthFar>0&&(Me=w.depthFar)),R.near=j.near=F.near=ue,R.far=j.far=F.far=Me,(B!==R.near||oe!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),B=R.near,oe=R.far),F.layers.mask=Z.layers.mask|2,j.layers.mask=Z.layers.mask|4,R.layers.mask=F.layers.mask|j.layers.mask;const ve=Z.parent,Te=R.cameras;ae(R,ve);for(let Ue=0;Ue<Te.length;Ue++)ae(Te[Ue],ve);Te.length===2?k(R,F,j):R.projectionMatrix.copy(F.projectionMatrix),re(Z,R,ve)};function re(Z,ue,Me){Me===null?Z.matrix.copy(ue.matrixWorld):(Z.matrix.copy(Me.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ue.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ue.projectionMatrix),Z.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Zo*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(y===null&&S===null))return h},this.setFoveation=function(Z){h=Z,y!==null&&(y.fixedFoveation=Z),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Z)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(R)};let I=null;function ne(Z,ue){if(g=ue.getViewerPose(m||c),E=ue,g!==null){const Me=g.views;S!==null&&(e.setRenderTargetFramebuffer(U,S.framebuffer),e.setRenderTarget(U));let ve=!1;Me.length!==R.cameras.length&&(R.cameras.length=0,ve=!0);for(let Ue=0;Ue<Me.length;Ue++){const Ze=Me[Ue];let Rt=null;if(S!==null)Rt=S.getViewport(Ze);else{const Dt=v.getViewSubImage(y,Ze);Rt=Dt.viewport,Ue===0&&(e.setRenderTargetTextures(U,Dt.colorTexture,y.ignoreDepthValues?void 0:Dt.depthStencilTexture),e.setRenderTarget(U))}let mt=C[Ue];mt===void 0&&(mt=new Zn,mt.layers.enable(Ue),mt.viewport=new Xt,C[Ue]=mt),mt.matrix.fromArray(Ze.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(Ze.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),Ue===0&&(R.matrix.copy(mt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ve===!0&&R.cameras.push(mt)}const Te=a.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Ue=v.getDepthInformation(Me[0]);Ue&&Ue.isValid&&Ue.texture&&w.init(e,Ue,a.renderState)}}for(let Me=0;Me<L.length;Me++){const ve=b[Me],Te=L[Me];ve!==null&&Te!==void 0&&Te.update(ve,ue,m||c)}I&&I(Z,ue),ue.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ue}),E=null}const Ie=new Sg;Ie.setAnimationLoop(ne),this.setAnimationLoop=function(Z){I=Z},this.dispose=function(){}}}const Xr=new Wi,OE=new Vt;function kE(r,e){function t(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function s(x,_){_.color.getRGB(x.fogColor.value,mg(r)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function a(x,_,U,L,b){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(x,_):_.isMeshToonMaterial?(l(x,_),v(x,_)):_.isMeshPhongMaterial?(l(x,_),g(x,_)):_.isMeshStandardMaterial?(l(x,_),y(x,_),_.isMeshPhysicalMaterial&&S(x,_,b)):_.isMeshMatcapMaterial?(l(x,_),E(x,_)):_.isMeshDepthMaterial?l(x,_):_.isMeshDistanceMaterial?(l(x,_),w(x,_)):_.isMeshNormalMaterial?l(x,_):_.isLineBasicMaterial?(c(x,_),_.isLineDashedMaterial&&f(x,_)):_.isPointsMaterial?h(x,_,U,L):_.isSpriteMaterial?m(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,t(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===Un&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,t(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===Un&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,t(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,t(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const U=e.get(_),L=U.envMap,b=U.envMapRotation;L&&(x.envMap.value=L,Xr.copy(b),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),x.envMapRotation.value.setFromMatrix4(OE.makeRotationFromEuler(Xr)),x.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,x.aoMapTransform))}function c(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform))}function f(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function h(x,_,U,L){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*U,x.scale.value=L*.5,_.map&&(x.map.value=_.map,t(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function m(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function g(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function v(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function y(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function S(x,_,U){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Un&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=U.texture,x.transmissionSamplerSize.value.set(U.width,U.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,_){_.matcap&&(x.matcap.value=_.matcap)}function w(x,_){const U=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(U.matrixWorld),x.nearDistance.value=U.shadow.camera.near,x.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function zE(r,e,t,s){let a={},l={},c=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(U,L){const b=L.program;s.uniformBlockBinding(U,b)}function m(U,L){let b=a[U.id];b===void 0&&(E(U),b=g(U),a[U.id]=b,U.addEventListener("dispose",x));const X=L.program;s.updateUBOMapping(U,X);const z=e.render.frame;l[U.id]!==z&&(y(U),l[U.id]=z)}function g(U){const L=v();U.__bindingPointIndex=L;const b=r.createBuffer(),X=U.__size,z=U.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,X,z),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,b),b}function v(){for(let U=0;U<f;U++)if(c.indexOf(U)===-1)return c.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(U){const L=a[U.id],b=U.uniforms,X=U.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let z=0,F=b.length;z<F;z++){const j=Array.isArray(b[z])?b[z]:[b[z]];for(let C=0,R=j.length;C<R;C++){const B=j[C];if(S(B,z,C,X)===!0){const oe=B.__offset,ee=Array.isArray(B.value)?B.value:[B.value];let fe=0;for(let he=0;he<ee.length;he++){const se=ee[he],le=w(se);typeof se=="number"||typeof se=="boolean"?(B.__data[0]=se,r.bufferSubData(r.UNIFORM_BUFFER,oe+fe,B.__data)):se.isMatrix3?(B.__data[0]=se.elements[0],B.__data[1]=se.elements[1],B.__data[2]=se.elements[2],B.__data[3]=0,B.__data[4]=se.elements[3],B.__data[5]=se.elements[4],B.__data[6]=se.elements[5],B.__data[7]=0,B.__data[8]=se.elements[6],B.__data[9]=se.elements[7],B.__data[10]=se.elements[8],B.__data[11]=0):(se.toArray(B.__data,fe),fe+=le.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,oe,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(U,L,b,X){const z=U.value,F=L+"_"+b;if(X[F]===void 0)return typeof z=="number"||typeof z=="boolean"?X[F]=z:X[F]=z.clone(),!0;{const j=X[F];if(typeof z=="number"||typeof z=="boolean"){if(j!==z)return X[F]=z,!0}else if(j.equals(z)===!1)return j.copy(z),!0}return!1}function E(U){const L=U.uniforms;let b=0;const X=16;for(let F=0,j=L.length;F<j;F++){const C=Array.isArray(L[F])?L[F]:[L[F]];for(let R=0,B=C.length;R<B;R++){const oe=C[R],ee=Array.isArray(oe.value)?oe.value:[oe.value];for(let fe=0,he=ee.length;fe<he;fe++){const se=ee[fe],le=w(se),k=b%X,ae=k%le.boundary,re=k+ae;b+=ae,re!==0&&X-re<le.storage&&(b+=X-re),oe.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=b,b+=le.storage}}}const z=b%X;return z>0&&(b+=X-z),U.__size=b,U.__cache={},this}function w(U){const L={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(L.boundary=4,L.storage=4):U.isVector2?(L.boundary=8,L.storage=8):U.isVector3||U.isColor?(L.boundary=16,L.storage=12):U.isVector4?(L.boundary=16,L.storage=16):U.isMatrix3?(L.boundary=48,L.storage=48):U.isMatrix4?(L.boundary=64,L.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),L}function x(U){const L=U.target;L.removeEventListener("dispose",x);const b=c.indexOf(L.__bindingPointIndex);c.splice(b,1),r.deleteBuffer(a[L.id]),delete a[L.id],delete l[L.id]}function _(){for(const U in a)r.deleteBuffer(a[U]);c=[],a={},l={}}return{bind:h,update:m,dispose:_}}class BE{constructor(e={}){const{canvas:t=y0(),context:s=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=c;const E=new Uint32Array(4),w=new Int32Array(4);let x=null,_=null;const U=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this.toneMapping=Mr,this.toneMappingExposure=1;const b=this;let X=!1,z=0,F=0,j=null,C=-1,R=null;const B=new Xt,oe=new Xt;let ee=null;const fe=new wt(0);let he=0,se=t.width,le=t.height,k=1,ae=null,re=null;const I=new Xt(0,0,se,le),ne=new Xt(0,0,se,le);let Ie=!1;const Z=new vg;let ue=!1,Me=!1;const ve=new Vt,Te=new Vt,Ue=new q,Ze=new Xt,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function Dt(){return j===null?k:1}let O=s;function _n(A,W){return t.getContext(A,W)}try{const A={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ed}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),O===null){const W="webgl2";if(O=_n(W,A),O===null)throw _n(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ht,ut,je,At,We,P,T,K,pe,ge,ce,Ve,we,Ne,at,Se,ke,qe,Qe,ze,ct,nt,Tt,G;function Ae(){ht=new $S(O),ht.init(),nt=new DE(O,ht),ut=new GS(O,ht,e,nt),je=new PE(O,ht),ut.reverseDepthBuffer&&y&&je.buffers.depth.setReversed(!0),At=new QS(O),We=new gE,P=new bE(O,ht,je,We,ut,nt,At),T=new XS(b),K=new qS(b),pe=new sx(O),Tt=new HS(O,pe),ge=new KS(O,pe,At,Tt),ce=new eM(O,ge,pe,At),Qe=new JS(O,ut,P),Se=new WS(We),Ve=new mE(b,T,K,ht,ut,Tt,Se),we=new kE(b,We),Ne=new vE,at=new TE(ht),qe=new BS(b,T,K,je,ce,S,h),ke=new RE(b,ce,ut),G=new zE(O,At,ut,je),ze=new VS(O,ht,At),ct=new ZS(O,ht,At),At.programs=Ve.programs,b.capabilities=ut,b.extensions=ht,b.properties=We,b.renderLists=Ne,b.shadowMap=ke,b.state=je,b.info=At}Ae();const ie=new FE(b,O);this.xr=ie,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=ht.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ht.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(A){A!==void 0&&(k=A,this.setSize(se,le,!1))},this.getSize=function(A){return A.set(se,le)},this.setSize=function(A,W,J=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=A,le=W,t.width=Math.floor(A*k),t.height=Math.floor(W*k),J===!0&&(t.style.width=A+"px",t.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(se*k,le*k).floor()},this.setDrawingBufferSize=function(A,W,J){se=A,le=W,k=J,t.width=Math.floor(A*J),t.height=Math.floor(W*J),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(B)},this.getViewport=function(A){return A.copy(I)},this.setViewport=function(A,W,J,te){A.isVector4?I.set(A.x,A.y,A.z,A.w):I.set(A,W,J,te),je.viewport(B.copy(I).multiplyScalar(k).round())},this.getScissor=function(A){return A.copy(ne)},this.setScissor=function(A,W,J,te){A.isVector4?ne.set(A.x,A.y,A.z,A.w):ne.set(A,W,J,te),je.scissor(oe.copy(ne).multiplyScalar(k).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(A){je.setScissorTest(Ie=A)},this.setOpaqueSort=function(A){ae=A},this.setTransparentSort=function(A){re=A},this.getClearColor=function(A){return A.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(A=!0,W=!0,J=!0){let te=0;if(A){let H=!1;if(j!==null){const ye=j.texture.format;H=ye===od||ye===sd||ye===rd}if(H){const ye=j.texture.type,Re=ye===Gi||ye===Zr||ye===Ko||ye===eo||ye===nd||ye===id,Le=qe.getClearColor(),Fe=qe.getClearAlpha(),Je=Le.r,et=Le.g,Xe=Le.b;Re?(E[0]=Je,E[1]=et,E[2]=Xe,E[3]=Fe,O.clearBufferuiv(O.COLOR,0,E)):(w[0]=Je,w[1]=et,w[2]=Xe,w[3]=Fe,O.clearBufferiv(O.COLOR,0,w))}else te|=O.COLOR_BUFFER_BIT}W&&(te|=O.DEPTH_BUFFER_BIT),J&&(te|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),qe.dispose(),Ne.dispose(),at.dispose(),We.dispose(),T.dispose(),K.dispose(),ce.dispose(),Tt.dispose(),G.dispose(),Ve.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",ts),ie.removeEventListener("sessionend",ji),Ei.stop()};function de(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),X=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),X=!1;const A=At.autoReset,W=ke.enabled,J=ke.autoUpdate,te=ke.needsUpdate,H=ke.type;Ae(),At.autoReset=A,ke.enabled=W,ke.autoUpdate=J,ke.needsUpdate=te,ke.type=H}function Pe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function it(A){const W=A.target;W.removeEventListener("dispose",it),It(W)}function It(A){qt(A),We.remove(A)}function qt(A){const W=We.get(A).programs;W!==void 0&&(W.forEach(function(J){Ve.releaseProgram(J)}),A.isShaderMaterial&&Ve.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,J,te,H,ye){W===null&&(W=Rt);const Re=H.isMesh&&H.matrixWorld.determinant()<0,Le=ia(A,W,J,te,H);je.setMaterial(te,Re);let Fe=J.index,Je=1;if(te.wireframe===!0){if(Fe=ge.getWireframeAttribute(J),Fe===void 0)return;Je=2}const et=J.drawRange,Xe=J.attributes.position;let rt=et.start*Je,yt=(et.start+et.count)*Je;ye!==null&&(rt=Math.max(rt,ye.start*Je),yt=Math.min(yt,(ye.start+ye.count)*Je)),Fe!==null?(rt=Math.max(rt,0),yt=Math.min(yt,Fe.count)):Xe!=null&&(rt=Math.max(rt,0),yt=Math.min(yt,Xe.count));const St=yt-rt;if(St<0||St===1/0)return;Tt.setup(H,te,Le,J,Fe);let Ft,_t=ze;if(Fe!==null&&(Ft=pe.get(Fe),_t=ct,_t.setIndex(Ft)),H.isMesh)te.wireframe===!0?(je.setLineWidth(te.wireframeLinewidth*Dt()),_t.setMode(O.LINES)):_t.setMode(O.TRIANGLES);else if(H.isLine){let Ye=te.linewidth;Ye===void 0&&(Ye=1),je.setLineWidth(Ye*Dt()),H.isLineSegments?_t.setMode(O.LINES):H.isLineLoop?_t.setMode(O.LINE_LOOP):_t.setMode(O.LINE_STRIP)}else H.isPoints?_t.setMode(O.POINTS):H.isSprite&&_t.setMode(O.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)_t.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))_t.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ye=H._multiDrawStarts,Bt=H._multiDrawCounts,gt=H._multiDrawCount,sn=Fe?pe.get(Fe).bytesPerElement:1,ei=We.get(te).currentProgram.getUniforms();for(let xn=0;xn<gt;xn++)ei.setValue(O,"_gl_DrawID",xn),_t.render(Ye[xn]/sn,Bt[xn])}else if(H.isInstancedMesh)_t.renderInstances(rt,St,H.count);else if(J.isInstancedBufferGeometry){const Ye=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Bt=Math.min(J.instanceCount,Ye);_t.renderInstances(rt,St,Bt)}else _t.render(rt,St)};function vt(A,W,J){A.transparent===!0&&A.side===zi&&A.forceSinglePass===!1?(A.side=Un,A.needsUpdate=!0,ns(A,W,J),A.side=Er,A.needsUpdate=!0,ns(A,W,J),A.side=zi):ns(A,W,J)}this.compile=function(A,W,J=null){J===null&&(J=A),_=at.get(J),_.init(W),L.push(_),J.traverseVisible(function(H){H.isLight&&H.layers.test(W.layers)&&(_.pushLight(H),H.castShadow&&_.pushShadow(H))}),A!==J&&A.traverseVisible(function(H){H.isLight&&H.layers.test(W.layers)&&(_.pushLight(H),H.castShadow&&_.pushShadow(H))}),_.setupLights();const te=new Set;return A.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ye=H.material;if(ye)if(Array.isArray(ye))for(let Re=0;Re<ye.length;Re++){const Le=ye[Re];vt(Le,J,H),te.add(Le)}else vt(ye,J,H),te.add(ye)}),L.pop(),_=null,te},this.compileAsync=function(A,W,J=null){const te=this.compile(A,W,J);return new Promise(H=>{function ye(){if(te.forEach(function(Re){We.get(Re).currentProgram.isReady()&&te.delete(Re)}),te.size===0){H(A);return}setTimeout(ye,10)}ht.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let An=null;function vn(A){An&&An(A)}function ts(){Ei.stop()}function ji(){Ei.start()}const Ei=new Sg;Ei.setAnimationLoop(vn),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(A){An=A,ie.setAnimationLoop(A),A===null?Ei.stop():Ei.start()},ie.addEventListener("sessionstart",ts),ie.addEventListener("sessionend",ji),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(W),W=ie.getCamera()),A.isScene===!0&&A.onBeforeRender(b,A,W,j),_=at.get(A,L.length),_.init(W),L.push(_),Te.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Z.setFromProjectionMatrix(Te),Me=this.localClippingEnabled,ue=Se.init(this.clippingPlanes,Me),x=Ne.get(A,U.length),x.init(),U.push(x),ie.enabled===!0&&ie.isPresenting===!0){const ye=b.xr.getDepthSensingMesh();ye!==null&&Ti(ye,W,-1/0,b.sortObjects)}Ti(A,W,0,b.sortObjects),x.finish(),b.sortObjects===!0&&x.sort(ae,re),mt=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,mt&&qe.addToRenderList(x,A),this.info.render.frame++,ue===!0&&Se.beginShadows();const J=_.state.shadowsArray;ke.render(J,A,W),ue===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=x.opaque,H=x.transmissive;if(_.setupLights(),W.isArrayCamera){const ye=W.cameras;if(H.length>0)for(let Re=0,Le=ye.length;Re<Le;Re++){const Fe=ye[Re];wr(te,H,A,Fe)}mt&&qe.render(A);for(let Re=0,Le=ye.length;Re<Le;Re++){const Fe=ye[Re];Tr(x,A,Fe,Fe.viewport)}}else H.length>0&&wr(te,H,A,W),mt&&qe.render(A),Tr(x,A,W);j!==null&&(P.updateMultisampleRenderTarget(j),P.updateRenderTargetMipmap(j)),A.isScene===!0&&A.onAfterRender(b,A,W),Tt.resetDefaultState(),C=-1,R=null,L.pop(),L.length>0?(_=L[L.length-1],ue===!0&&Se.setGlobalState(b.clippingPlanes,_.state.camera)):_=null,U.pop(),U.length>0?x=U[U.length-1]:x=null};function Ti(A,W,J,te){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Z.intersectsSprite(A)){te&&Ze.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Te);const Re=ce.update(A),Le=A.material;Le.visible&&x.push(A,Re,Le,J,Ze.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Z.intersectsObject(A))){const Re=ce.update(A),Le=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ze.copy(A.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ze.copy(Re.boundingSphere.center)),Ze.applyMatrix4(A.matrixWorld).applyMatrix4(Te)),Array.isArray(Le)){const Fe=Re.groups;for(let Je=0,et=Fe.length;Je<et;Je++){const Xe=Fe[Je],rt=Le[Xe.materialIndex];rt&&rt.visible&&x.push(A,Re,rt,J,Ze.z,Xe)}}else Le.visible&&x.push(A,Re,Le,J,Ze.z,null)}}const ye=A.children;for(let Re=0,Le=ye.length;Re<Le;Re++)Ti(ye[Re],W,J,te)}function Tr(A,W,J,te){const H=A.opaque,ye=A.transmissive,Re=A.transparent;_.setupLightsView(J),ue===!0&&Se.setGlobalState(b.clippingPlanes,J),te&&je.viewport(B.copy(te)),H.length>0&&Yi(H,W,J),ye.length>0&&Yi(ye,W,J),Re.length>0&&Yi(Re,W,J),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function wr(A,W,J,te){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[te.id]===void 0&&(_.state.transmissionRenderTarget[te.id]=new Qr(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Qo:Gi,minFilter:Kr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const ye=_.state.transmissionRenderTarget[te.id],Re=te.viewport||B;ye.setSize(Re.z,Re.w);const Le=b.getRenderTarget();b.setRenderTarget(ye),b.getClearColor(fe),he=b.getClearAlpha(),he<1&&b.setClearColor(16777215,.5),b.clear(),mt&&qe.render(J);const Fe=b.toneMapping;b.toneMapping=Mr;const Je=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),_.setupLightsView(te),ue===!0&&Se.setGlobalState(b.clippingPlanes,te),Yi(A,J,te),P.updateMultisampleRenderTarget(ye),P.updateRenderTargetMipmap(ye),ht.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Xe=0,rt=W.length;Xe<rt;Xe++){const yt=W[Xe],St=yt.object,Ft=yt.geometry,_t=yt.material,Ye=yt.group;if(_t.side===zi&&St.layers.test(te.layers)){const Bt=_t.side;_t.side=Un,_t.needsUpdate=!0,ta(St,J,te,Ft,_t,Ye),_t.side=Bt,_t.needsUpdate=!0,et=!0}}et===!0&&(P.updateMultisampleRenderTarget(ye),P.updateRenderTargetMipmap(ye))}b.setRenderTarget(Le),b.setClearColor(fe,he),Je!==void 0&&(te.viewport=Je),b.toneMapping=Fe}function Yi(A,W,J){const te=W.isScene===!0?W.overrideMaterial:null;for(let H=0,ye=A.length;H<ye;H++){const Re=A[H],Le=Re.object,Fe=Re.geometry,Je=te===null?Re.material:te,et=Re.group;Le.layers.test(J.layers)&&ta(Le,W,J,Fe,Je,et)}}function ta(A,W,J,te,H,ye){A.onBeforeRender(b,W,J,te,H,ye),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(b,W,J,te,A,ye),H.transparent===!0&&H.side===zi&&H.forceSinglePass===!1?(H.side=Un,H.needsUpdate=!0,b.renderBufferDirect(J,W,te,H,A,ye),H.side=Er,H.needsUpdate=!0,b.renderBufferDirect(J,W,te,H,A,ye),H.side=zi):b.renderBufferDirect(J,W,te,H,A,ye),A.onAfterRender(b,W,J,te,H,ye)}function ns(A,W,J){W.isScene!==!0&&(W=Rt);const te=We.get(A),H=_.state.lights,ye=_.state.shadowsArray,Re=H.state.version,Le=Ve.getParameters(A,H.state,ye,W,J),Fe=Ve.getProgramCacheKey(Le);let Je=te.programs;te.environment=A.isMeshStandardMaterial?W.environment:null,te.fog=W.fog,te.envMap=(A.isMeshStandardMaterial?K:T).get(A.envMap||te.environment),te.envMapRotation=te.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Je===void 0&&(A.addEventListener("dispose",it),Je=new Map,te.programs=Je);let et=Je.get(Fe);if(et!==void 0){if(te.currentProgram===et&&te.lightsStateVersion===Re)return di(A,Le),et}else Le.uniforms=Ve.getUniforms(A),A.onBeforeCompile(Le,b),et=Ve.acquireProgram(Le,Fe),Je.set(Fe,et),te.uniforms=Le.uniforms;const Xe=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xe.clippingPlanes=Se.uniform),di(A,Le),te.needsLights=Zl(A),te.lightsStateVersion=Re,te.needsLights&&(Xe.ambientLightColor.value=H.state.ambient,Xe.lightProbe.value=H.state.probe,Xe.directionalLights.value=H.state.directional,Xe.directionalLightShadows.value=H.state.directionalShadow,Xe.spotLights.value=H.state.spot,Xe.spotLightShadows.value=H.state.spotShadow,Xe.rectAreaLights.value=H.state.rectArea,Xe.ltc_1.value=H.state.rectAreaLTC1,Xe.ltc_2.value=H.state.rectAreaLTC2,Xe.pointLights.value=H.state.point,Xe.pointLightShadows.value=H.state.pointShadow,Xe.hemisphereLights.value=H.state.hemi,Xe.directionalShadowMap.value=H.state.directionalShadowMap,Xe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Xe.spotShadowMap.value=H.state.spotShadowMap,Xe.spotLightMatrix.value=H.state.spotLightMatrix,Xe.spotLightMap.value=H.state.spotLightMap,Xe.pointShadowMap.value=H.state.pointShadowMap,Xe.pointShadowMatrix.value=H.state.pointShadowMatrix),te.currentProgram=et,te.uniformsList=null,et}function na(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Bl.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function di(A,W){const J=We.get(A);J.outputColorSpace=W.outputColorSpace,J.batching=W.batching,J.batchingColor=W.batchingColor,J.instancing=W.instancing,J.instancingColor=W.instancingColor,J.instancingMorph=W.instancingMorph,J.skinning=W.skinning,J.morphTargets=W.morphTargets,J.morphNormals=W.morphNormals,J.morphColors=W.morphColors,J.morphTargetsCount=W.morphTargetsCount,J.numClippingPlanes=W.numClippingPlanes,J.numIntersection=W.numClipIntersection,J.vertexAlphas=W.vertexAlphas,J.vertexTangents=W.vertexTangents,J.toneMapping=W.toneMapping}function ia(A,W,J,te,H){W.isScene!==!0&&(W=Rt),P.resetTextureUnits();const ye=W.fog,Re=te.isMeshStandardMaterial?W.environment:null,Le=j===null?b.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:no,Fe=(te.isMeshStandardMaterial?K:T).get(te.envMap||Re),Je=te.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,et=!!J.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Xe=!!J.morphAttributes.position,rt=!!J.morphAttributes.normal,yt=!!J.morphAttributes.color;let St=Mr;te.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(St=b.toneMapping);const Ft=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,_t=Ft!==void 0?Ft.length:0,Ye=We.get(te),Bt=_.state.lights;if(ue===!0&&(Me===!0||A!==R)){const Gt=A===R&&te.id===C;Se.setState(te,A,Gt)}let gt=!1;te.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Bt.state.version||Ye.outputColorSpace!==Le||H.isBatchedMesh&&Ye.batching===!1||!H.isBatchedMesh&&Ye.batching===!0||H.isBatchedMesh&&Ye.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ye.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ye.instancing===!1||!H.isInstancedMesh&&Ye.instancing===!0||H.isSkinnedMesh&&Ye.skinning===!1||!H.isSkinnedMesh&&Ye.skinning===!0||H.isInstancedMesh&&Ye.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ye.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ye.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ye.instancingMorph===!1&&H.morphTexture!==null||Ye.envMap!==Fe||te.fog===!0&&Ye.fog!==ye||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Se.numPlanes||Ye.numIntersection!==Se.numIntersection)||Ye.vertexAlphas!==Je||Ye.vertexTangents!==et||Ye.morphTargets!==Xe||Ye.morphNormals!==rt||Ye.morphColors!==yt||Ye.toneMapping!==St||Ye.morphTargetsCount!==_t)&&(gt=!0):(gt=!0,Ye.__version=te.version);let sn=Ye.currentProgram;gt===!0&&(sn=ns(te,W,H));let ei=!1,xn=!1,Ar=!1;const Ct=sn.getUniforms(),yn=Ye.uniforms;if(je.useProgram(sn.program)&&(ei=!0,xn=!0,Ar=!0),te.id!==C&&(C=te.id,xn=!0),ei||R!==A){je.buffers.depth.getReversed()?(ve.copy(A.projectionMatrix),M0(ve),E0(ve),Ct.setValue(O,"projectionMatrix",ve)):Ct.setValue(O,"projectionMatrix",A.projectionMatrix),Ct.setValue(O,"viewMatrix",A.matrixWorldInverse);const cn=Ct.map.cameraPosition;cn!==void 0&&cn.setValue(O,Ue.setFromMatrixPosition(A.matrixWorld)),ut.logarithmicDepthBuffer&&Ct.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Ct.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,xn=!0,Ar=!0)}if(H.isSkinnedMesh){Ct.setOptional(O,H,"bindMatrix"),Ct.setOptional(O,H,"bindMatrixInverse");const Gt=H.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),Ct.setValue(O,"boneTexture",Gt.boneTexture,P))}H.isBatchedMesh&&(Ct.setOptional(O,H,"batchingTexture"),Ct.setValue(O,"batchingTexture",H._matricesTexture,P),Ct.setOptional(O,H,"batchingIdTexture"),Ct.setValue(O,"batchingIdTexture",H._indirectTexture,P),Ct.setOptional(O,H,"batchingColorTexture"),H._colorsTexture!==null&&Ct.setValue(O,"batchingColorTexture",H._colorsTexture,P));const un=J.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&Qe.update(H,J,sn),(xn||Ye.receiveShadow!==H.receiveShadow)&&(Ye.receiveShadow=H.receiveShadow,Ct.setValue(O,"receiveShadow",H.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(yn.envMap.value=Fe,yn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&W.environment!==null&&(yn.envMapIntensity.value=W.environmentIntensity),xn&&(Ct.setValue(O,"toneMappingExposure",b.toneMappingExposure),Ye.needsLights&&ra(yn,Ar),ye&&te.fog===!0&&we.refreshFogUniforms(yn,ye),we.refreshMaterialUniforms(yn,te,k,le,_.state.transmissionRenderTarget[A.id]),Bl.upload(O,na(Ye),yn,P)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Bl.upload(O,na(Ye),yn,P),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Ct.setValue(O,"center",H.center),Ct.setValue(O,"modelViewMatrix",H.modelViewMatrix),Ct.setValue(O,"normalMatrix",H.normalMatrix),Ct.setValue(O,"modelMatrix",H.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const Gt=te.uniformsGroups;for(let cn=0,Rr=Gt.length;cn<Rr;cn++){const pt=Gt[cn];G.update(pt,sn),G.bind(pt,sn)}}return sn}function ra(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function Zl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(A,W,J){We.get(A.texture).__webglTexture=W,We.get(A.depthTexture).__webglTexture=J;const te=We.get(A);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=J===void 0,te.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,W){const J=We.get(A);J.__webglFramebuffer=W,J.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,J=0){j=A,z=W,F=J;let te=!0,H=null,ye=!1,Re=!1;if(A){const Fe=We.get(A);if(Fe.__useDefaultFramebuffer!==void 0)je.bindFramebuffer(O.FRAMEBUFFER,null),te=!1;else if(Fe.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(Fe.__hasExternalTextures)P.rebindTextures(A,We.get(A.texture).__webglTexture,We.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Xe=A.depthTexture;if(Fe.__boundDepthTexture!==Xe){if(Xe!==null&&We.has(Xe)&&(A.width!==Xe.image.width||A.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const Je=A.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Re=!0);const et=We.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(et[W])?H=et[W][J]:H=et[W],ye=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?H=We.get(A).__webglMultisampledFramebuffer:Array.isArray(et)?H=et[J]:H=et,B.copy(A.viewport),oe.copy(A.scissor),ee=A.scissorTest}else B.copy(I).multiplyScalar(k).floor(),oe.copy(ne).multiplyScalar(k).floor(),ee=Ie;if(je.bindFramebuffer(O.FRAMEBUFFER,H)&&te&&je.drawBuffers(A,H),je.viewport(B),je.scissor(oe),je.setScissorTest(ee),ye){const Fe=We.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+W,Fe.__webglTexture,J)}else if(Re){const Fe=We.get(A.texture),Je=W||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Fe.__webglTexture,J||0,Je)}C=-1},this.readRenderTargetPixels=function(A,W,J,te,H,ye,Re){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=We.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){je.bindFramebuffer(O.FRAMEBUFFER,Le);try{const Fe=A.texture,Je=Fe.format,et=Fe.type;if(!ut.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-te&&J>=0&&J<=A.height-H&&O.readPixels(W,J,te,H,nt.convert(Je),nt.convert(et),ye)}finally{const Fe=j!==null?We.get(j).__webglFramebuffer:null;je.bindFramebuffer(O.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(A,W,J,te,H,ye,Re){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=We.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){const Fe=A.texture,Je=Fe.format,et=Fe.type;if(!ut.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=A.width-te&&J>=0&&J<=A.height-H){je.bindFramebuffer(O.FRAMEBUFFER,Le);const Xe=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Xe),O.bufferData(O.PIXEL_PACK_BUFFER,ye.byteLength,O.STREAM_READ),O.readPixels(W,J,te,H,nt.convert(Je),nt.convert(et),0);const rt=j!==null?We.get(j).__webglFramebuffer:null;je.bindFramebuffer(O.FRAMEBUFFER,rt);const yt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await S0(O,yt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Xe),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ye),O.deleteBuffer(Xe),O.deleteSync(yt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,W=null,J=0){A.isTexture!==!0&&(Bs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1]);const te=Math.pow(2,-J),H=Math.floor(A.image.width*te),ye=Math.floor(A.image.height*te),Re=W!==null?W.x:0,Le=W!==null?W.y:0;P.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,J,0,0,Re,Le,H,ye),je.unbindTexture()};const sa=O.createFramebuffer(),oa=O.createFramebuffer();this.copyTextureToTexture=function(A,W,J=null,te=null,H=0,ye=null){A.isTexture!==!0&&(Bs("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,A=arguments[1],W=arguments[2],ye=arguments[3]||0,J=null),ye===null&&(H!==0?(Bs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=H,H=0):ye=0);let Re,Le,Fe,Je,et,Xe,rt,yt,St;const Ft=A.isCompressedTexture?A.mipmaps[ye]:A.image;if(J!==null)Re=J.max.x-J.min.x,Le=J.max.y-J.min.y,Fe=J.isBox3?J.max.z-J.min.z:1,Je=J.min.x,et=J.min.y,Xe=J.isBox3?J.min.z:0;else{const un=Math.pow(2,-H);Re=Math.floor(Ft.width*un),Le=Math.floor(Ft.height*un),A.isDataArrayTexture?Fe=Ft.depth:A.isData3DTexture?Fe=Math.floor(Ft.depth*un):Fe=1,Je=0,et=0,Xe=0}te!==null?(rt=te.x,yt=te.y,St=te.z):(rt=0,yt=0,St=0);const _t=nt.convert(W.format),Ye=nt.convert(W.type);let Bt;W.isData3DTexture?(P.setTexture3D(W,0),Bt=O.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(P.setTexture2DArray(W,0),Bt=O.TEXTURE_2D_ARRAY):(P.setTexture2D(W,0),Bt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const gt=O.getParameter(O.UNPACK_ROW_LENGTH),sn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),ei=O.getParameter(O.UNPACK_SKIP_PIXELS),xn=O.getParameter(O.UNPACK_SKIP_ROWS),Ar=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ft.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ft.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Je),O.pixelStorei(O.UNPACK_SKIP_ROWS,et),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Xe);const Ct=A.isDataArrayTexture||A.isData3DTexture,yn=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const un=We.get(A),Gt=We.get(W),cn=We.get(un.__renderTarget),Rr=We.get(Gt.__renderTarget);je.bindFramebuffer(O.READ_FRAMEBUFFER,cn.__webglFramebuffer),je.bindFramebuffer(O.DRAW_FRAMEBUFFER,Rr.__webglFramebuffer);for(let pt=0;pt<Fe;pt++)Ct&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,We.get(A).__webglTexture,H,Xe+pt),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,We.get(W).__webglTexture,ye,St+pt)),O.blitFramebuffer(Je,et,Re,Le,rt,yt,Re,Le,O.DEPTH_BUFFER_BIT,O.NEAREST);je.bindFramebuffer(O.READ_FRAMEBUFFER,null),je.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(H!==0||A.isRenderTargetTexture||We.has(A)){const un=We.get(A),Gt=We.get(W);je.bindFramebuffer(O.READ_FRAMEBUFFER,sa),je.bindFramebuffer(O.DRAW_FRAMEBUFFER,oa);for(let cn=0;cn<Fe;cn++)Ct?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,un.__webglTexture,H,Xe+cn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,un.__webglTexture,H),yn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Gt.__webglTexture,ye,St+cn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Gt.__webglTexture,ye),H!==0?O.blitFramebuffer(Je,et,Re,Le,rt,yt,Re,Le,O.COLOR_BUFFER_BIT,O.NEAREST):yn?O.copyTexSubImage3D(Bt,ye,rt,yt,St+cn,Je,et,Re,Le):O.copyTexSubImage2D(Bt,ye,rt,yt,Je,et,Re,Le);je.bindFramebuffer(O.READ_FRAMEBUFFER,null),je.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else yn?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(Bt,ye,rt,yt,St,Re,Le,Fe,_t,Ye,Ft.data):W.isCompressedArrayTexture?O.compressedTexSubImage3D(Bt,ye,rt,yt,St,Re,Le,Fe,_t,Ft.data):O.texSubImage3D(Bt,ye,rt,yt,St,Re,Le,Fe,_t,Ye,Ft):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ye,rt,yt,Re,Le,_t,Ye,Ft.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ye,rt,yt,Ft.width,Ft.height,_t,Ft.data):O.texSubImage2D(O.TEXTURE_2D,ye,rt,yt,Re,Le,_t,Ye,Ft);O.pixelStorei(O.UNPACK_ROW_LENGTH,gt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,sn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ei),O.pixelStorei(O.UNPACK_SKIP_ROWS,xn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ar),ye===0&&W.generateMipmaps&&O.generateMipmap(Bt),je.unbindTexture()},this.copyTextureToTexture3D=function(A,W,J=null,te=null,H=0){return A.isTexture!==!0&&(Bs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,te=arguments[1]||null,A=arguments[2],W=arguments[3],H=arguments[4]||0),Bs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,W,J,te,H)},this.initRenderTarget=function(A){We.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),je.unbindTexture()},this.resetState=function(){z=0,F=0,j=null,je.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}}var $o=function(){var r=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(g){g.preventDefault(),s(++r%e.children.length)},!1);function t(g){return e.appendChild(g.dom),g}function s(g){for(var v=0;v<e.children.length;v++)e.children[v].style.display=v===g?"block":"none";r=g}var a=(performance||Date).now(),l=a,c=0,f=t(new $o.Panel("FPS","#0ff","#002")),h=t(new $o.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var m=t(new $o.Panel("MB","#f08","#201"));return s(0),{REVISION:16,dom:e,addPanel:t,showPanel:s,begin:function(){a=(performance||Date).now()},end:function(){c++;var g=(performance||Date).now();if(h.update(g-a,200),g>=l+1e3&&(f.update(c*1e3/(g-l),100),l=g,c=0,m)){var v=performance.memory;m.update(v.usedJSHeapSize/1048576,v.jsHeapSizeLimit/1048576)}return g},update:function(){a=this.end()},domElement:e,setMode:s}};$o.Panel=function(r,e,t){var s=1/0,a=0,l=Math.round,c=l(window.devicePixelRatio||1),f=80*c,h=48*c,m=3*c,g=2*c,v=3*c,y=15*c,S=74*c,E=30*c,w=document.createElement("canvas");w.width=f,w.height=h,w.style.cssText="width:80px;height:48px";var x=w.getContext("2d");return x.font="bold "+9*c+"px Helvetica,Arial,sans-serif",x.textBaseline="top",x.fillStyle=t,x.fillRect(0,0,f,h),x.fillStyle=e,x.fillText(r,m,g),x.fillRect(v,y,S,E),x.fillStyle=t,x.globalAlpha=.9,x.fillRect(v,y,S,E),{dom:w,update:function(_,U){s=Math.min(s,_),a=Math.max(a,_),x.fillStyle=t,x.globalAlpha=1,x.fillRect(0,0,f,y),x.fillStyle=e,x.fillText(l(_)+" "+r+" ("+l(s)+"-"+l(a)+")",m,g),x.drawImage(w,v+c,y,S-c,E,v,y,S-c,E),x.fillRect(v+S-c,y,c,E),x.fillStyle=t,x.globalAlpha=.9,x.fillRect(v+S-c,y,c,l((1-_/U)*E))}}};const jm={type:"change"},fd={type:"start"},Ag={type:"end"},Ul=new ql,Ym=new xr,HE=Math.cos(70*x0.DEG2RAD),Zt=new q,In=2*Math.PI,bt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},cf=1e-6;class VE extends ix{constructor(e,t=null){super(e,t),this.state=bt.NONE,this.enabled=!0,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xs.ROTATE,MIDDLE:Xs.DOLLY,RIGHT:Xs.PAN},this.touches={ONE:Hs.ROTATE,TWO:Hs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new q,this._lastQuaternion=new Jr,this._lastTargetPosition=new q,this._quat=new Jr().setFromUnitVectors(e.up,new q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ym,this._sphericalDelta=new ym,this._scale=1,this._panOffset=new q,this._rotateStart=new lt,this._rotateEnd=new lt,this._rotateDelta=new lt,this._panStart=new lt,this._panEnd=new lt,this._panDelta=new lt,this._dollyStart=new lt,this._dollyEnd=new lt,this._dollyDelta=new lt,this._dollyDirection=new q,this._mouse=new lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=WE.bind(this),this._onPointerDown=GE.bind(this),this._onPointerUp=XE.bind(this),this._onContextMenu=QE.bind(this),this._onMouseWheel=qE.bind(this),this._onKeyDown=$E.bind(this),this._onTouchStart=KE.bind(this),this._onTouchMove=ZE.bind(this),this._onMouseDown=jE.bind(this),this._onMouseMove=YE.bind(this),this._interceptControlDown=JE.bind(this),this._interceptControlUp=eT.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(jm),this.update(),this.state=bt.NONE}update(e=null){const t=this.object.position;Zt.copy(t).sub(this.target),Zt.applyQuaternion(this._quat),this._spherical.setFromVector3(Zt),this.autoRotate&&this.state===bt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(s)&&isFinite(a)&&(s<-Math.PI?s+=In:s>Math.PI&&(s-=In),a<-Math.PI?a+=In:a>Math.PI&&(a-=In),s<=a?this._spherical.theta=Math.max(s,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+a)/2?Math.max(s,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=c!=this._spherical.radius}if(Zt.setFromSpherical(this._spherical),Zt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Zt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const f=Zt.length();c=this._clampDistance(f*this._scale);const h=f-c;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),l=!!h}else if(this.object.isOrthographicCamera){const f=new q(this._mouse.x,this._mouse.y,0);f.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=h!==this.object.zoom;const m=new q(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(f),this.object.updateMatrixWorld(),c=Zt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(Ul.origin.copy(this.object.position),Ul.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ul.direction))<HE?this.object.lookAt(this.target):(Ym.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ul.intersectPlane(Ym,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>cf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>cf||this._lastTargetPosition.distanceToSquared(this.target)>cf?(this.dispatchEvent(jm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?In/60*this.autoRotateSpeed*e:In/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Zt.setFromMatrixColumn(t,0),Zt.multiplyScalar(-e),this._panOffset.add(Zt)}_panUp(e,t){this.screenSpacePanning===!0?Zt.setFromMatrixColumn(t,1):(Zt.setFromMatrixColumn(t,0),Zt.crossVectors(this.object.up,Zt)),Zt.multiplyScalar(e),this._panOffset.add(Zt)}_pan(e,t){const s=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;Zt.copy(a).sub(this.target);let l=Zt.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/s.clientHeight,this.object.matrix),this._panUp(2*t*l/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),a=e-s.left,l=t-s.top,c=s.width,f=s.height;this._mouse.x=a/c*2-1,this._mouse.y=-(l/f)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(In*this._rotateDelta.x/t.clientHeight),this._rotateUp(In*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(In*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-In*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(In*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-In*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(s,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(s,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),s=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(s*s+a*a);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),a=.5*(e.pageX+s.x),l=.5*(e.pageY+s.y);this._rotateEnd.set(a,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(In*this._rotateDelta.x/t.clientHeight),this._rotateUp(In*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(s,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),s=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(s*s+a*a);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,f=(e.pageY+t.y)*.5;this._updateZoomParameters(c,f)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new lt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function GE(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function WE(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function XE(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ag),this.state=bt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function jE(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Xs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=bt.DOLLY;break;case Xs.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=bt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=bt.ROTATE}break;case Xs.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=bt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=bt.PAN}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(fd)}function YE(r){switch(this.state){case bt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case bt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case bt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function qE(r){this.enabled===!1||this.enableZoom===!1||this.state!==bt.NONE||(r.preventDefault(),this.dispatchEvent(fd),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Ag))}function $E(r){this.enabled!==!1&&this._handleKeyDown(r)}function KE(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Hs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=bt.TOUCH_ROTATE;break;case Hs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=bt.TOUCH_PAN;break;default:this.state=bt.NONE}break;case 2:switch(this.touches.TWO){case Hs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=bt.TOUCH_DOLLY_PAN;break;case Hs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=bt.TOUCH_DOLLY_ROTATE;break;default:this.state=bt.NONE}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(fd)}function ZE(r){switch(this._trackPointer(r),this.state){case bt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case bt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case bt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case bt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=bt.NONE}}function QE(r){this.enabled!==!1&&r.preventDefault()}function JE(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function eT(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class tT{constructor(e){En(this,"camera",new Zn(45,window.innerWidth/window.innerHeight,1,1e3));En(this,"scene",new j0);En(this,"renderer");En(this,"stats");En(this,"orbitControls");this.InitScene(e)}InitScene(e){this.renderer=new BE({canvas:e,antialias:!0}),this.renderer.setSize(Math.min(window.innerWidth*.97,800),Math.min(window.innerHeight*.75,800)),this.camera.position.set(5,5,5),this.stats=new $o,document.body.appendChild(this.stats.dom),this.orbitControls=new VE(this.camera,this.renderer.domElement);const t=new nx(5);this.scene.add(t),window.addEventListener("resize",()=>this.render())}animate(){var e;window.requestAnimationFrame(this.animate.bind(this)),this.render(),(e=this.stats)==null||e.update(),this.orbitControls.update()}render(){var e;(e=this.renderer)==null||e.render(this.scene,this.camera)}resize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.render()}}class nT{constructor(e,t,s){En(this,"cube",new Vs);En(this,"cubeMesh");En(this,"uniform",{opacity:{value:1}});this.InitCube(e,t,s)}InitCube(e,t,s){const a=new so(1,1,1),l=new Xi({uniforms:this.uniform,transparent:!0,vertexShader:iT,fragmentShader:rT}),c=new xi(a,l);this.cubeMesh=c,this.cube.add(c);const f=new K0(a),h=new xg(f,new ud({color:"black",linewidth:5}));this.cube.add(h),this.cube.position.set(e,t,s)}}const iT=`
varying vec3 pos;
uniform float opacity;
void main(){
pos = position;
gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,rT=`
varying vec3 pos;
uniform float opacity;
void main(){
vec4 red = vec4(0.8, 0.2, 0.2, opacity);        
vec4 green = vec4(0.2, 0.8, 0.2, opacity);      
vec4 blue = vec4(0.2, 0.2, 0.8, opacity);       
vec4 yellow = vec4(0.9, 0.9, 0.5, opacity);    
vec4 orange = vec4(0.9, 0.5, 0.2, opacity);    
vec4 white = vec4(0.8, 0.8, 0.8, opacity);      
vec4 black = vec4(0.1, 0.1, 0.1, opacity);      


          float scale = .499;

bool front = pos.x > scale;
bool top = pos.y > scale;
bool right = pos.z > scale;
bool left = pos.z < -scale;
bool bottom = pos.y< -scale;
bool back = pos.x< -scale;

  if (front) {
              gl_FragColor = red;
          } else if (back) {
              gl_FragColor = orange;
          } else if (top) {
              gl_FragColor = white;
          } else if (bottom) {
              gl_FragColor = yellow;
          } else if (right) {
              gl_FragColor = blue;
           } else if (left) {
              gl_FragColor = green;
          } else {
              gl_FragColor = black;
          }

}
`;var Ks=Object.freeze({Linear:Object.freeze({None:function(r){return r},In:function(r){return r},Out:function(r){return r},InOut:function(r){return r}}),Quadratic:Object.freeze({In:function(r){return r*r},Out:function(r){return r*(2-r)},InOut:function(r){return(r*=2)<1?.5*r*r:-.5*(--r*(r-2)-1)}}),Cubic:Object.freeze({In:function(r){return r*r*r},Out:function(r){return--r*r*r+1},InOut:function(r){return(r*=2)<1?.5*r*r*r:.5*((r-=2)*r*r+2)}}),Quartic:Object.freeze({In:function(r){return r*r*r*r},Out:function(r){return 1- --r*r*r*r},InOut:function(r){return(r*=2)<1?.5*r*r*r*r:-.5*((r-=2)*r*r*r-2)}}),Quintic:Object.freeze({In:function(r){return r*r*r*r*r},Out:function(r){return--r*r*r*r*r+1},InOut:function(r){return(r*=2)<1?.5*r*r*r*r*r:.5*((r-=2)*r*r*r*r+2)}}),Sinusoidal:Object.freeze({In:function(r){return 1-Math.sin((1-r)*Math.PI/2)},Out:function(r){return Math.sin(r*Math.PI/2)},InOut:function(r){return .5*(1-Math.sin(Math.PI*(.5-r)))}}),Exponential:Object.freeze({In:function(r){return r===0?0:Math.pow(1024,r-1)},Out:function(r){return r===1?1:1-Math.pow(2,-10*r)},InOut:function(r){return r===0?0:r===1?1:(r*=2)<1?.5*Math.pow(1024,r-1):.5*(-Math.pow(2,-10*(r-1))+2)}}),Circular:Object.freeze({In:function(r){return 1-Math.sqrt(1-r*r)},Out:function(r){return Math.sqrt(1- --r*r)},InOut:function(r){return(r*=2)<1?-.5*(Math.sqrt(1-r*r)-1):.5*(Math.sqrt(1-(r-=2)*r)+1)}}),Elastic:Object.freeze({In:function(r){return r===0?0:r===1?1:-Math.pow(2,10*(r-1))*Math.sin((r-1.1)*5*Math.PI)},Out:function(r){return r===0?0:r===1?1:Math.pow(2,-10*r)*Math.sin((r-.1)*5*Math.PI)+1},InOut:function(r){return r===0?0:r===1?1:(r*=2,r<1?-.5*Math.pow(2,10*(r-1))*Math.sin((r-1.1)*5*Math.PI):.5*Math.pow(2,-10*(r-1))*Math.sin((r-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(r){var e=1.70158;return r===1?1:r*r*((e+1)*r-e)},Out:function(r){var e=1.70158;return r===0?0:--r*r*((e+1)*r+e)+1},InOut:function(r){var e=2.5949095;return(r*=2)<1?.5*(r*r*((e+1)*r-e)):.5*((r-=2)*r*((e+1)*r+e)+2)}}),Bounce:Object.freeze({In:function(r){return 1-Ks.Bounce.Out(1-r)},Out:function(r){return r<1/2.75?7.5625*r*r:r<2/2.75?7.5625*(r-=1.5/2.75)*r+.75:r<2.5/2.75?7.5625*(r-=2.25/2.75)*r+.9375:7.5625*(r-=2.625/2.75)*r+.984375},InOut:function(r){return r<.5?Ks.Bounce.In(r*2)*.5:Ks.Bounce.Out(r*2-1)*.5+.5}}),generatePow:function(r){return r===void 0&&(r=4),r=r<Number.EPSILON?Number.EPSILON:r,r=r>1e4?1e4:r,{In:function(e){return Math.pow(e,r)},Out:function(e){return 1-Math.pow(1-e,r)},InOut:function(e){return e<.5?Math.pow(e*2,r)/2:(1-Math.pow(2-e*2,r))/2+.5}}}}),Yo=function(){return performance.now()},sT=function(){function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._tweens={},this._tweensAddedDuringUpdate={},this.add.apply(this,e)}return r.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},r.prototype.removeAll=function(){this._tweens={}},r.prototype.add=function(){for(var e,t=[],s=0;s<arguments.length;s++)t[s]=arguments[s];for(var a=0,l=t;a<l.length;a++){var c=l[a];(e=c._group)===null||e===void 0||e.remove(c),c._group=this,this._tweens[c.getId()]=c,this._tweensAddedDuringUpdate[c.getId()]=c}},r.prototype.remove=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var s=0,a=e;s<a.length;s++){var l=a[s];l._group=void 0,delete this._tweens[l.getId()],delete this._tweensAddedDuringUpdate[l.getId()]}},r.prototype.allStopped=function(){return this.getAll().every(function(e){return!e.isPlaying()})},r.prototype.update=function(e,t){e===void 0&&(e=Yo()),t===void 0&&(t=!0);var s=Object.keys(this._tweens);if(s.length!==0)for(;s.length>0;){this._tweensAddedDuringUpdate={};for(var a=0;a<s.length;a++){var l=this._tweens[s[a]],c=!t;l&&l.update(e,c)===!1&&!t&&this.remove(l)}s=Object.keys(this._tweensAddedDuringUpdate)}},r}(),Ws={Linear:function(r,e){var t=r.length-1,s=t*e,a=Math.floor(s),l=Ws.Utils.Linear;return e<0?l(r[0],r[1],s):e>1?l(r[t],r[t-1],t-s):l(r[a],r[a+1>t?t:a+1],s-a)},Bezier:function(r,e){for(var t=0,s=r.length-1,a=Math.pow,l=Ws.Utils.Bernstein,c=0;c<=s;c++)t+=a(1-e,s-c)*a(e,c)*r[c]*l(s,c);return t},CatmullRom:function(r,e){var t=r.length-1,s=t*e,a=Math.floor(s),l=Ws.Utils.CatmullRom;return r[0]===r[t]?(e<0&&(a=Math.floor(s=t*(1+e))),l(r[(a-1+t)%t],r[a],r[(a+1)%t],r[(a+2)%t],s-a)):e<0?r[0]-(l(r[0],r[0],r[1],r[1],-s)-r[0]):e>1?r[t]-(l(r[t],r[t],r[t-1],r[t-1],s-t)-r[t]):l(r[a?a-1:0],r[a],r[t<a+1?t:a+1],r[t<a+2?t:a+2],s-a)},Utils:{Linear:function(r,e,t){return(e-r)*t+r},Bernstein:function(r,e){var t=Ws.Utils.Factorial;return t(r)/t(e)/t(r-e)},Factorial:function(){var r=[1];return function(e){var t=1;if(r[e])return r[e];for(var s=e;s>1;s--)t*=s;return r[e]=t,t}}(),CatmullRom:function(r,e,t,s,a){var l=(t-r)*.5,c=(s-e)*.5,f=a*a,h=a*f;return(2*e-2*t+l+c)*h+(-3*e+3*t-2*l-c)*f+l*a+e}}},oT=function(){function r(){}return r.nextId=function(){return r._nextId++},r._nextId=0,r}(),Qf=new sT,aT=function(){function r(e,t){this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Ks.Linear.None,this._interpolationFunction=Ws.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=oT.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1,this._object=e,typeof t=="object"?(this._group=t,t.add(this)):t===!0&&(this._group=Qf,Qf.add(this))}return r.prototype.getId=function(){return this._id},r.prototype.isPlaying=function(){return this._isPlaying},r.prototype.isPaused=function(){return this._isPaused},r.prototype.getDuration=function(){return this._duration},r.prototype.to=function(e,t){if(t===void 0&&(t=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=t<0?0:t,this},r.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e<0?0:e,this},r.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},r.prototype.start=function(e,t){if(e===void 0&&(e=Yo()),t===void 0&&(t=!1),this._isPlaying)return this;if(this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var s in this._valuesStartRepeat)this._swapEndStartRepeatValues(s),this._valuesStart[s]=this._valuesStartRepeat[s]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var a={};for(var l in this._valuesEnd)a[l]=this._valuesEnd[l];this._valuesEnd=a}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},r.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},r.prototype._setupProperties=function(e,t,s,a,l){for(var c in s){var f=e[c],h=Array.isArray(f),m=h?"array":typeof f,g=!h&&Array.isArray(s[c]);if(!(m==="undefined"||m==="function")){if(g){var v=s[c];if(v.length===0)continue;for(var y=[f],S=0,E=v.length;S<E;S+=1){var w=this._handleRelativeValue(f,v[S]);if(isNaN(w)){g=!1,console.warn("Found invalid interpolation list. Skipping.");break}y.push(w)}g&&(s[c]=y)}if((m==="object"||h)&&f&&!g){t[c]=h?[]:{};var x=f;for(var _ in x)t[c][_]=x[_];a[c]=h?[]:{};var v=s[c];if(!this._isDynamic){var U={};for(var _ in v)U[_]=v[_];s[c]=v=U}this._setupProperties(x,t[c],v,a[c],l)}else(typeof t[c]>"u"||l)&&(t[c]=f),h||(t[c]*=1),g?a[c]=s[c].slice().reverse():a[c]=t[c]||0}}},r.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},r.prototype.end=function(){return this._goToEnd=!0,this.update(this._startTime+this._duration),this},r.prototype.pause=function(e){return e===void 0&&(e=Yo()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this)},r.prototype.resume=function(e){return e===void 0&&(e=Yo()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this)},r.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},r.prototype.group=function(e){return e?(e.add(this),this):(console.warn("tween.group() without args has been removed, use group.add(tween) instead."),this)},r.prototype.remove=function(){var e;return(e=this._group)===null||e===void 0||e.remove(this),this},r.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},r.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},r.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},r.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},r.prototype.easing=function(e){return e===void 0&&(e=Ks.Linear.None),this._easingFunction=e,this},r.prototype.interpolation=function(e){return e===void 0&&(e=Ws.Linear),this._interpolationFunction=e,this},r.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},r.prototype.onStart=function(e){return this._onStartCallback=e,this},r.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},r.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},r.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},r.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},r.prototype.onStop=function(e){return this._onStopCallback=e,this},r.prototype.update=function(e,t){var s=this,a;if(e===void 0&&(e=Yo()),t===void 0&&(t=r.autoStartOnUpdate),this._isPaused)return!0;var l;if(!this._goToEnd&&!this._isPlaying)if(t)this.start(e,!0);else return!1;if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var c=e-this._startTime,f=this._duration+((a=this._repeatDelayTime)!==null&&a!==void 0?a:this._delayTime),h=this._duration+this._repeat*f,m=function(){if(s._duration===0||c>h)return 1;var w=Math.trunc(c/f),x=c-w*f,_=Math.min(x/s._duration,1);return _===0&&c===s._duration?1:_},g=m(),v=this._easingFunction(g);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,v),this._onUpdateCallback&&this._onUpdateCallback(this._object,g),this._duration===0||c>=this._duration)if(this._repeat>0){var y=Math.min(Math.trunc((c-this._duration)/f)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=y);for(l in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[l]=="string"&&(this._valuesStartRepeat[l]=this._valuesStartRepeat[l]+parseFloat(this._valuesEnd[l])),this._yoyo&&this._swapEndStartRepeatValues(l),this._valuesStart[l]=this._valuesStartRepeat[l];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=f*y,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var S=0,E=this._chainedTweens.length;S<E;S++)this._chainedTweens[S].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},r.prototype._updateProperties=function(e,t,s,a){for(var l in s)if(t[l]!==void 0){var c=t[l]||0,f=s[l],h=Array.isArray(e[l]),m=Array.isArray(f),g=!h&&m;g?e[l]=this._interpolationFunction(f,a):typeof f=="object"&&f?this._updateProperties(e[l],c,f,a):(f=this._handleRelativeValue(c,f),typeof f=="number"&&(e[l]=c+(f-c)*a))}},r.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},r.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],s=this._valuesEnd[e];typeof s=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(s):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},r.autoStartOnUpdate=!1,r}(),Si=Qf;Si.getAll.bind(Si);Si.removeAll.bind(Si);Si.add.bind(Si);Si.remove.bind(Si);Si.update.bind(Si);class lT{constructor(e=3){En(this,"size");En(this,"RubixCubeGroup",new Vs);En(this,"selectedCube",null);En(this,"cubes",[]);En(this,"rotating",!1);En(this,"constant",.1);this.size=e,this.InitRubixCube()}InitRubixCube(){const e=this.size,t=.5*(1-e),s=.5*(e-.5);for(let a=t;a<s;a++)for(let l=t;l<s;l++)for(let c=t;c<s;c++){const f=new nT(a,l,c);this.cubes.push(f),this.RubixCubeGroup.add(f.cube)}}highLightCube(e){this.cubes.forEach(t=>{t.cubeMesh.uuid===e.uuid?(this.selectedCube=t,t.uniform.opacity.value=.5):t.uniform.opacity.value=1})}cubeInXaxis(e,t){return e.cube.position.x>t.cube.position.x-this.constant&&e.cube.position.x<t.cube.position.x+this.constant}cubeInYaxis(e,t){return e.cube.position.y>t.cube.position.y-this.constant&&e.cube.position.y<t.cube.position.y+this.constant}cubeInZaxis(e,t){return e.cube.position.z>t.cube.position.z-this.constant&&e.cube.position.z<t.cube.position.z+this.constant}RotateOnAxis(e,t){const s={angle:0},a={angle:Math.PI/2},l={angle:0};this.rotating=!0;const c=new aT(s).to(a,500).easing(Ks.Quadratic.InOut).onUpdate(({angle:h})=>{e.cube.position.applyAxisAngle(t,h-l.angle),e.cube.rotateOnWorldAxis(t,h-l.angle),l.angle=h}).start();c.onComplete(()=>this.rotating=!1);function f(){c.update(),requestAnimationFrame(f)}requestAnimationFrame(f)}keyDown(e){!this.selectedCube||this.rotating||(e==="w"?this.rotate(1,0,0):e==="s"?this.rotate(-1,0,0):e==="a"?this.rotate(0,1,0):e==="d"?this.rotate(0,-1,0):e==="q"?this.rotate(0,0,1):e==="e"&&this.rotate(0,0,-1))}rotate(e,t,s){const a=new q(e,t,s);e!==0&&this.cubes.forEach(l=>{this.cubeInXaxis(l,this.selectedCube)&&this.RotateOnAxis(l,a)}),t!==0&&this.cubes.forEach(l=>{this.cubeInYaxis(l,this.selectedCube)&&this.RotateOnAxis(l,a)}),s!==0&&this.cubes.forEach(l=>{this.cubeInZaxis(l,this.selectedCube)&&this.RotateOnAxis(l,a)})}resetHightLight(){this.selectedCube=null,this.cubes.forEach(e=>{e.uniform.opacity.value=1})}}function uT(){const r=Bo.useRef(null),[e,t]=Bo.useState(3),[s,a]=Bo.useState(!0),[l,c]=Bo.useState(null);return Bo.useEffect(()=>{if(!r.current||!s)return;const f=r.current,h=new tT(f),m=new lT(e);h.scene.add(m.RubixCubeGroup),h.animate();const g=new tx,v=new lt;c(m);function y(E){v.x=E.clientX/window.innerWidth*2-1,v.y=-(E.clientY/window.innerHeight)*2+1,g.setFromCamera(v,h.camera);const w=g.intersectObject(h.scene).filter(x=>x.object.type==="Mesh");w.length>0?m.highLightCube(w[0].object):m.resetHightLight()}function S(E){const w=E.key;m.keyDown(w)}window.addEventListener("keydown",S),f.addEventListener("mousedown",y),a(!1)},[r,s]),ln.jsxs("div",{className:"app",children:[ln.jsx("h1",{children:"N - Dimensions Rubix Cube"}),ln.jsxs("p",{children:["Note: 1. Select a Cube piece then press keys below to move the faces ",ln.jsx("br",{}),"2. If Your are seeing only bright color it could be bcz cube has become big try zooming out."]}),ln.jsxs("div",{className:"flex",children:[ln.jsxs("div",{className:"form-container",children:[ln.jsx("input",{type:"text",className:"form-input",value:e,onChange:f=>{const h=Number(f.target.value);isNaN(h)||t(h)}}),ln.jsx("button",{className:"form-button",onClick:()=>a(!0),children:"Generate"})]}),ln.jsxs("div",{className:"gamepad",children:[ln.jsx("div",{className:"key w",onClick:()=>l==null?void 0:l.keyDown("w"),children:"W"}),ln.jsx("div",{className:"key a",onClick:()=>l==null?void 0:l.keyDown("a"),children:"A"}),ln.jsx("div",{className:"key s",onClick:()=>l==null?void 0:l.keyDown("s"),children:"S"}),ln.jsx("div",{className:"key d",onClick:()=>l==null?void 0:l.keyDown("d"),children:"D"}),ln.jsx("div",{className:"key q",onClick:()=>l==null?void 0:l.keyDown("q"),children:"Q"}),ln.jsx("div",{className:"key e",onClick:()=>l==null?void 0:l.keyDown("e"),children:"E"})]})]}),ln.jsx("canvas",{ref:r})]})}pv.createRoot(document.getElementById("root")).render(ln.jsx(uT,{}));
