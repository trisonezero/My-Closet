(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerPolicy&&(a.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?a.credentials="include":l.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(l){if(l.ep)return;l.ep=!0;const a=n(l);fetch(l.href,a)}})();function Bw(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ac={exports:{}},ms={},uc={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function Vw(){if(tm)return oe;tm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),y=Symbol.iterator;function w(S){return S===null||typeof S!="object"?null:(S=y&&S[y]||S["@@iterator"],typeof S=="function"?S:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,P={};function x(S,L,se){this.props=S,this.context=L,this.refs=P,this.updater=se||R}x.prototype.isReactComponent={},x.prototype.setState=function(S,L){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,L,"setState")},x.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function b(){}b.prototype=x.prototype;function z(S,L,se){this.props=S,this.context=L,this.refs=P,this.updater=se||R}var X=z.prototype=new b;X.constructor=z,T(X,x.prototype),X.isPureReactComponent=!0;var re=Array.isArray,ge=Object.prototype.hasOwnProperty,q={current:null},ne={key:!0,ref:!0,__self:!0,__source:!0};function de(S,L,se){var ue,he={},pe=null,Ce=null;if(L!=null)for(ue in L.ref!==void 0&&(Ce=L.ref),L.key!==void 0&&(pe=""+L.key),L)ge.call(L,ue)&&!ne.hasOwnProperty(ue)&&(he[ue]=L[ue]);var ve=arguments.length-2;if(ve===1)he.children=se;else if(1<ve){for(var Oe=Array(ve),St=0;St<ve;St++)Oe[St]=arguments[St+2];he.children=Oe}if(S&&S.defaultProps)for(ue in ve=S.defaultProps,ve)he[ue]===void 0&&(he[ue]=ve[ue]);return{$$typeof:r,type:S,key:pe,ref:Ce,props:he,_owner:q.current}}function ie(S,L){return{$$typeof:r,type:S.type,key:L,ref:S.ref,props:S.props,_owner:S._owner}}function ye(S){return typeof S=="object"&&S!==null&&S.$$typeof===r}function Se(S){var L={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(se){return L[se]})}var Ze=/\/+/g;function Pe(S,L){return typeof S=="object"&&S!==null&&S.key!=null?Se(""+S.key):L.toString(36)}function je(S,L,se,ue,he){var pe=typeof S;(pe==="undefined"||pe==="boolean")&&(S=null);var Ce=!1;if(S===null)Ce=!0;else switch(pe){case"string":case"number":Ce=!0;break;case"object":switch(S.$$typeof){case r:case e:Ce=!0}}if(Ce)return Ce=S,he=he(Ce),S=ue===""?"."+Pe(Ce,0):ue,re(he)?(se="",S!=null&&(se=S.replace(Ze,"$&/")+"/"),je(he,L,se,"",function(St){return St})):he!=null&&(ye(he)&&(he=ie(he,se+(!he.key||Ce&&Ce.key===he.key?"":(""+he.key).replace(Ze,"$&/")+"/")+S)),L.push(he)),1;if(Ce=0,ue=ue===""?".":ue+":",re(S))for(var ve=0;ve<S.length;ve++){pe=S[ve];var Oe=ue+Pe(pe,ve);Ce+=je(pe,L,se,Oe,he)}else if(Oe=w(S),typeof Oe=="function")for(S=Oe.call(S),ve=0;!(pe=S.next()).done;)pe=pe.value,Oe=ue+Pe(pe,ve++),Ce+=je(pe,L,se,Oe,he);else if(pe==="object")throw L=String(S),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.");return Ce}function At(S,L,se){if(S==null)return S;var ue=[],he=0;return je(S,ue,"","",function(pe){return L.call(se,pe,he++)}),ue}function et(S){if(S._status===-1){var L=S._result;L=L(),L.then(function(se){(S._status===0||S._status===-1)&&(S._status=1,S._result=se)},function(se){(S._status===0||S._status===-1)&&(S._status=2,S._result=se)}),S._status===-1&&(S._status=0,S._result=L)}if(S._status===1)return S._result.default;throw S._result}var xe={current:null},j={transition:null},J={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:j,ReactCurrentOwner:q};function V(){throw Error("act(...) is not supported in production builds of React.")}return oe.Children={map:At,forEach:function(S,L,se){At(S,function(){L.apply(this,arguments)},se)},count:function(S){var L=0;return At(S,function(){L++}),L},toArray:function(S){return At(S,function(L){return L})||[]},only:function(S){if(!ye(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},oe.Component=x,oe.Fragment=n,oe.Profiler=l,oe.PureComponent=z,oe.StrictMode=s,oe.Suspense=p,oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J,oe.act=V,oe.cloneElement=function(S,L,se){if(S==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+S+".");var ue=T({},S.props),he=S.key,pe=S.ref,Ce=S._owner;if(L!=null){if(L.ref!==void 0&&(pe=L.ref,Ce=q.current),L.key!==void 0&&(he=""+L.key),S.type&&S.type.defaultProps)var ve=S.type.defaultProps;for(Oe in L)ge.call(L,Oe)&&!ne.hasOwnProperty(Oe)&&(ue[Oe]=L[Oe]===void 0&&ve!==void 0?ve[Oe]:L[Oe])}var Oe=arguments.length-2;if(Oe===1)ue.children=se;else if(1<Oe){ve=Array(Oe);for(var St=0;St<Oe;St++)ve[St]=arguments[St+2];ue.children=ve}return{$$typeof:r,type:S.type,key:he,ref:pe,props:ue,_owner:Ce}},oe.createContext=function(S){return S={$$typeof:c,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},S.Provider={$$typeof:a,_context:S},S.Consumer=S},oe.createElement=de,oe.createFactory=function(S){var L=de.bind(null,S);return L.type=S,L},oe.createRef=function(){return{current:null}},oe.forwardRef=function(S){return{$$typeof:h,render:S}},oe.isValidElement=ye,oe.lazy=function(S){return{$$typeof:_,_payload:{_status:-1,_result:S},_init:et}},oe.memo=function(S,L){return{$$typeof:m,type:S,compare:L===void 0?null:L}},oe.startTransition=function(S){var L=j.transition;j.transition={};try{S()}finally{j.transition=L}},oe.unstable_act=V,oe.useCallback=function(S,L){return xe.current.useCallback(S,L)},oe.useContext=function(S){return xe.current.useContext(S)},oe.useDebugValue=function(){},oe.useDeferredValue=function(S){return xe.current.useDeferredValue(S)},oe.useEffect=function(S,L){return xe.current.useEffect(S,L)},oe.useId=function(){return xe.current.useId()},oe.useImperativeHandle=function(S,L,se){return xe.current.useImperativeHandle(S,L,se)},oe.useInsertionEffect=function(S,L){return xe.current.useInsertionEffect(S,L)},oe.useLayoutEffect=function(S,L){return xe.current.useLayoutEffect(S,L)},oe.useMemo=function(S,L){return xe.current.useMemo(S,L)},oe.useReducer=function(S,L,se){return xe.current.useReducer(S,L,se)},oe.useRef=function(S){return xe.current.useRef(S)},oe.useState=function(S){return xe.current.useState(S)},oe.useSyncExternalStore=function(S,L,se){return xe.current.useSyncExternalStore(S,L,se)},oe.useTransition=function(){return xe.current.useTransition()},oe.version="18.3.1",oe}var nm;function td(){return nm||(nm=1,uc.exports=Vw()),uc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm;function Hw(){if(rm)return ms;rm=1;var r=td(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(h,p,m){var _,y={},w=null,R=null;m!==void 0&&(w=""+m),p.key!==void 0&&(w=""+p.key),p.ref!==void 0&&(R=p.ref);for(_ in p)s.call(p,_)&&!a.hasOwnProperty(_)&&(y[_]=p[_]);if(h&&h.defaultProps)for(_ in p=h.defaultProps,p)y[_]===void 0&&(y[_]=p[_]);return{$$typeof:e,type:h,key:w,ref:R,props:y,_owner:l.current}}return ms.Fragment=n,ms.jsx=c,ms.jsxs=c,ms}var im;function $w(){return im||(im=1,ac.exports=Hw()),ac.exports}var W=$w(),N=td();const qw=Bw(N);var ml={},cc={exports:{}},vt={},dc={exports:{}},fc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sm;function Gw(){return sm||(sm=1,function(r){function e(j,J){var V=j.length;j.push(J);e:for(;0<V;){var S=V-1>>>1,L=j[S];if(0<l(L,J))j[S]=J,j[V]=L,V=S;else break e}}function n(j){return j.length===0?null:j[0]}function s(j){if(j.length===0)return null;var J=j[0],V=j.pop();if(V!==J){j[0]=V;e:for(var S=0,L=j.length,se=L>>>1;S<se;){var ue=2*(S+1)-1,he=j[ue],pe=ue+1,Ce=j[pe];if(0>l(he,V))pe<L&&0>l(Ce,he)?(j[S]=Ce,j[pe]=V,S=pe):(j[S]=he,j[ue]=V,S=ue);else if(pe<L&&0>l(Ce,V))j[S]=Ce,j[pe]=V,S=pe;else break e}}return J}function l(j,J){var V=j.sortIndex-J.sortIndex;return V!==0?V:j.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;r.unstable_now=function(){return a.now()}}else{var c=Date,h=c.now();r.unstable_now=function(){return c.now()-h}}var p=[],m=[],_=1,y=null,w=3,R=!1,T=!1,P=!1,x=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function X(j){for(var J=n(m);J!==null;){if(J.callback===null)s(m);else if(J.startTime<=j)s(m),J.sortIndex=J.expirationTime,e(p,J);else break;J=n(m)}}function re(j){if(P=!1,X(j),!T)if(n(p)!==null)T=!0,et(ge);else{var J=n(m);J!==null&&xe(re,J.startTime-j)}}function ge(j,J){T=!1,P&&(P=!1,b(de),de=-1),R=!0;var V=w;try{for(X(J),y=n(p);y!==null&&(!(y.expirationTime>J)||j&&!Se());){var S=y.callback;if(typeof S=="function"){y.callback=null,w=y.priorityLevel;var L=S(y.expirationTime<=J);J=r.unstable_now(),typeof L=="function"?y.callback=L:y===n(p)&&s(p),X(J)}else s(p);y=n(p)}if(y!==null)var se=!0;else{var ue=n(m);ue!==null&&xe(re,ue.startTime-J),se=!1}return se}finally{y=null,w=V,R=!1}}var q=!1,ne=null,de=-1,ie=5,ye=-1;function Se(){return!(r.unstable_now()-ye<ie)}function Ze(){if(ne!==null){var j=r.unstable_now();ye=j;var J=!0;try{J=ne(!0,j)}finally{J?Pe():(q=!1,ne=null)}}else q=!1}var Pe;if(typeof z=="function")Pe=function(){z(Ze)};else if(typeof MessageChannel<"u"){var je=new MessageChannel,At=je.port2;je.port1.onmessage=Ze,Pe=function(){At.postMessage(null)}}else Pe=function(){x(Ze,0)};function et(j){ne=j,q||(q=!0,Pe())}function xe(j,J){de=x(function(){j(r.unstable_now())},J)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(j){j.callback=null},r.unstable_continueExecution=function(){T||R||(T=!0,et(ge))},r.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ie=0<j?Math.floor(1e3/j):5},r.unstable_getCurrentPriorityLevel=function(){return w},r.unstable_getFirstCallbackNode=function(){return n(p)},r.unstable_next=function(j){switch(w){case 1:case 2:case 3:var J=3;break;default:J=w}var V=w;w=J;try{return j()}finally{w=V}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(j,J){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var V=w;w=j;try{return J()}finally{w=V}},r.unstable_scheduleCallback=function(j,J,V){var S=r.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?S+V:S):V=S,j){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=V+L,j={id:_++,callback:J,priorityLevel:j,startTime:V,expirationTime:L,sortIndex:-1},V>S?(j.sortIndex=V,e(m,j),n(p)===null&&j===n(m)&&(P?(b(de),de=-1):P=!0,xe(re,V-S))):(j.sortIndex=L,e(p,j),T||R||(T=!0,et(ge))),j},r.unstable_shouldYield=Se,r.unstable_wrapCallback=function(j){var J=w;return function(){var V=w;w=J;try{return j.apply(this,arguments)}finally{w=V}}}}(fc)),fc}var om;function Kw(){return om||(om=1,dc.exports=Gw()),dc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lm;function Qw(){if(lm)return vt;lm=1;var r=td(),e=Kw();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function a(t,i){c(t,i),c(t+"Capture",i)}function c(t,i){for(l[t]=i,t=0;t<i.length;t++)s.add(i[t])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},y={};function w(t){return p.call(y,t)?!0:p.call(_,t)?!1:m.test(t)?y[t]=!0:(_[t]=!0,!1)}function R(t,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,o,u){if(i===null||typeof i>"u"||R(t,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function P(t,i,o,u,d,f,g){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=f,this.removeEmptyString=g}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){x[t]=new P(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];x[i]=new P(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){x[t]=new P(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){x[t]=new P(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){x[t]=new P(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){x[t]=new P(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){x[t]=new P(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){x[t]=new P(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){x[t]=new P(t,5,!1,t.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function z(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(b,z);x[i]=new P(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(b,z);x[i]=new P(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(b,z);x[i]=new P(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){x[t]=new P(t,1,!1,t.toLowerCase(),null,!1,!1)}),x.xlinkHref=new P("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){x[t]=new P(t,1,!1,t.toLowerCase(),null,!0,!0)});function X(t,i,o,u){var d=x.hasOwnProperty(i)?x[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,o,d,u)&&(o=null),u||d===null?w(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):d.mustUseProperty?t[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,u=d.attributeNamespace,o===null?t.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,u?t.setAttributeNS(u,i,o):t.setAttribute(i,o))))}var re=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ge=Symbol.for("react.element"),q=Symbol.for("react.portal"),ne=Symbol.for("react.fragment"),de=Symbol.for("react.strict_mode"),ie=Symbol.for("react.profiler"),ye=Symbol.for("react.provider"),Se=Symbol.for("react.context"),Ze=Symbol.for("react.forward_ref"),Pe=Symbol.for("react.suspense"),je=Symbol.for("react.suspense_list"),At=Symbol.for("react.memo"),et=Symbol.for("react.lazy"),xe=Symbol.for("react.offscreen"),j=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=j&&t[j]||t["@@iterator"],typeof t=="function"?t:null)}var V=Object.assign,S;function L(t){if(S===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);S=i&&i[1]||""}return`
`+S+t}var se=!1;function ue(t,i){if(!t||se)return"";se=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(k){var u=k}Reflect.construct(t,[],i)}else{try{i.call()}catch(k){u=k}t.call(i.prototype)}else{try{throw Error()}catch(k){u=k}t()}}catch(k){if(k&&u&&typeof k.stack=="string"){for(var d=k.stack.split(`
`),f=u.stack.split(`
`),g=d.length-1,v=f.length-1;1<=g&&0<=v&&d[g]!==f[v];)v--;for(;1<=g&&0<=v;g--,v--)if(d[g]!==f[v]){if(g!==1||v!==1)do if(g--,v--,0>v||d[g]!==f[v]){var E=`
`+d[g].replace(" at new "," at ");return t.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",t.displayName)),E}while(1<=g&&0<=v);break}}}finally{se=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?L(t):""}function he(t){switch(t.tag){case 5:return L(t.type);case 16:return L("Lazy");case 13:return L("Suspense");case 19:return L("SuspenseList");case 0:case 2:case 15:return t=ue(t.type,!1),t;case 11:return t=ue(t.type.render,!1),t;case 1:return t=ue(t.type,!0),t;default:return""}}function pe(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ne:return"Fragment";case q:return"Portal";case ie:return"Profiler";case de:return"StrictMode";case Pe:return"Suspense";case je:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Se:return(t.displayName||"Context")+".Consumer";case ye:return(t._context.displayName||"Context")+".Provider";case Ze:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case At:return i=t.displayName||null,i!==null?i:pe(t.type)||"Memo";case et:i=t._payload,t=t._init;try{return pe(t(i))}catch{}}return null}function Ce(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pe(i);case 8:return i===de?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ve(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Oe(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function St(t){var i=Oe(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),u=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,f=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(g){u=""+g,f.call(this,g)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(g){u=""+g},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function io(t){t._valueTracker||(t._valueTracker=St(t))}function lf(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return t&&(u=Oe(t)?t.checked?"true":"false":t.value),t=u,t!==o?(i.setValue(t),!0):!1}function so(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ma(t,i){var o=i.checked;return V({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function af(t,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=ve(i.value!=null?i.value:o),t._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function uf(t,i){i=i.checked,i!=null&&X(t,"checked",i,!1)}function ga(t,i){uf(t,i);var o=ve(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?_a(t,i.type,o):i.hasOwnProperty("defaultValue")&&_a(t,i.type,ve(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function cf(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function _a(t,i,o){(i!=="number"||so(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Pi=Array.isArray;function Dr(t,i,o,u){if(t=t.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<t.length;o++)d=i.hasOwnProperty("$"+t[o].value),t[o].selected!==d&&(t[o].selected=d),d&&u&&(t[o].defaultSelected=!0)}else{for(o=""+ve(o),i=null,d=0;d<t.length;d++){if(t[d].value===o){t[d].selected=!0,u&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function ya(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return V({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function df(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Pi(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:ve(o)}}function ff(t,i){var o=ve(i.value),u=ve(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),u!=null&&(t.defaultValue=""+u)}function hf(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function pf(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function va(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?pf(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var oo,mf=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,d){MSApp.execUnsafeLocalFunction(function(){return t(i,o,u,d)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(oo=oo||document.createElement("div"),oo.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=oo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function xi(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Oi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gy=["Webkit","ms","Moz","O"];Object.keys(Oi).forEach(function(t){Gy.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Oi[i]=Oi[t]})});function gf(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Oi.hasOwnProperty(t)&&Oi[t]?(""+i).trim():i+"px"}function _f(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,d=gf(o,i[o],u);o==="float"&&(o="cssFloat"),u?t.setProperty(o,d):t[o]=d}}var Ky=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wa(t,i){if(i){if(Ky[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Ea(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Aa=null;function Sa(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ca=null,Mr=null,br=null;function yf(t){if(t=es(t)){if(typeof Ca!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Po(i),Ca(t.stateNode,t.type,i))}}function vf(t){Mr?br?br.push(t):br=[t]:Mr=t}function wf(){if(Mr){var t=Mr,i=br;if(br=Mr=null,yf(t),i)for(t=0;t<i.length;t++)yf(i[t])}}function Ef(t,i){return t(i)}function Af(){}var Ia=!1;function Sf(t,i,o){if(Ia)return t(i,o);Ia=!0;try{return Ef(t,i,o)}finally{Ia=!1,(Mr!==null||br!==null)&&(Af(),wf())}}function Li(t,i){var o=t.stateNode;if(o===null)return null;var u=Po(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Ta=!1;if(h)try{var Di={};Object.defineProperty(Di,"passive",{get:function(){Ta=!0}}),window.addEventListener("test",Di,Di),window.removeEventListener("test",Di,Di)}catch{Ta=!1}function Qy(t,i,o,u,d,f,g,v,E){var k=Array.prototype.slice.call(arguments,3);try{i.apply(o,k)}catch(D){this.onError(D)}}var Mi=!1,lo=null,ao=!1,ka=null,Yy={onError:function(t){Mi=!0,lo=t}};function Xy(t,i,o,u,d,f,g,v,E){Mi=!1,lo=null,Qy.apply(Yy,arguments)}function Jy(t,i,o,u,d,f,g,v,E){if(Xy.apply(this,arguments),Mi){if(Mi){var k=lo;Mi=!1,lo=null}else throw Error(n(198));ao||(ao=!0,ka=k)}}function or(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,i.flags&4098&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Cf(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function If(t){if(or(t)!==t)throw Error(n(188))}function Zy(t){var i=t.alternate;if(!i){if(i=or(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,u=i;;){var d=o.return;if(d===null)break;var f=d.alternate;if(f===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===o)return If(d),t;if(f===u)return If(d),i;f=f.sibling}throw Error(n(188))}if(o.return!==u.return)o=d,u=f;else{for(var g=!1,v=d.child;v;){if(v===o){g=!0,o=d,u=f;break}if(v===u){g=!0,u=d,o=f;break}v=v.sibling}if(!g){for(v=f.child;v;){if(v===o){g=!0,o=f,u=d;break}if(v===u){g=!0,u=f,o=d;break}v=v.sibling}if(!g)throw Error(n(189))}}if(o.alternate!==u)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function Tf(t){return t=Zy(t),t!==null?kf(t):null}function kf(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=kf(t);if(i!==null)return i;t=t.sibling}return null}var Rf=e.unstable_scheduleCallback,Nf=e.unstable_cancelCallback,ev=e.unstable_shouldYield,tv=e.unstable_requestPaint,We=e.unstable_now,nv=e.unstable_getCurrentPriorityLevel,Ra=e.unstable_ImmediatePriority,Pf=e.unstable_UserBlockingPriority,uo=e.unstable_NormalPriority,rv=e.unstable_LowPriority,xf=e.unstable_IdlePriority,co=null,qt=null;function iv(t){if(qt&&typeof qt.onCommitFiberRoot=="function")try{qt.onCommitFiberRoot(co,t,void 0,(t.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:lv,sv=Math.log,ov=Math.LN2;function lv(t){return t>>>=0,t===0?32:31-(sv(t)/ov|0)|0}var fo=64,ho=4194304;function bi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function po(t,i){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,f=t.pingedLanes,g=o&268435455;if(g!==0){var v=g&~d;v!==0?u=bi(v):(f&=g,f!==0&&(u=bi(f)))}else g=o&~d,g!==0?u=bi(g):f!==0&&(u=bi(f));if(u===0)return 0;if(i!==0&&i!==u&&!(i&d)&&(d=u&-u,f=i&-i,d>=f||d===16&&(f&4194240)!==0))return i;if(u&4&&(u|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=u;0<i;)o=31-Mt(i),d=1<<o,u|=t[o],i&=~d;return u}function av(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uv(t,i){for(var o=t.suspendedLanes,u=t.pingedLanes,d=t.expirationTimes,f=t.pendingLanes;0<f;){var g=31-Mt(f),v=1<<g,E=d[g];E===-1?(!(v&o)||v&u)&&(d[g]=av(v,i)):E<=i&&(t.expiredLanes|=v),f&=~v}}function Na(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Of(){var t=fo;return fo<<=1,!(fo&4194240)&&(fo=64),t}function Pa(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Fi(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Mt(i),t[i]=o}function cv(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<o;){var d=31-Mt(o),f=1<<d;i[d]=0,u[d]=-1,t[d]=-1,o&=~f}}function xa(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var u=31-Mt(o),d=1<<u;d&i|t[u]&i&&(t[u]|=i),o&=~d}}var we=0;function Lf(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Df,Oa,Mf,bf,Ff,La=!1,mo=[],Cn=null,In=null,Tn=null,Ui=new Map,zi=new Map,kn=[],dv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Uf(t,i){switch(t){case"focusin":case"focusout":Cn=null;break;case"dragenter":case"dragleave":In=null;break;case"mouseover":case"mouseout":Tn=null;break;case"pointerover":case"pointerout":Ui.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":zi.delete(i.pointerId)}}function ji(t,i,o,u,d,f){return t===null||t.nativeEvent!==f?(t={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:f,targetContainers:[d]},i!==null&&(i=es(i),i!==null&&Oa(i)),t):(t.eventSystemFlags|=u,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function fv(t,i,o,u,d){switch(i){case"focusin":return Cn=ji(Cn,t,i,o,u,d),!0;case"dragenter":return In=ji(In,t,i,o,u,d),!0;case"mouseover":return Tn=ji(Tn,t,i,o,u,d),!0;case"pointerover":var f=d.pointerId;return Ui.set(f,ji(Ui.get(f)||null,t,i,o,u,d)),!0;case"gotpointercapture":return f=d.pointerId,zi.set(f,ji(zi.get(f)||null,t,i,o,u,d)),!0}return!1}function zf(t){var i=lr(t.target);if(i!==null){var o=or(i);if(o!==null){if(i=o.tag,i===13){if(i=Cf(o),i!==null){t.blockedOn=i,Ff(t.priority,function(){Mf(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function go(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Ma(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var u=new o.constructor(o.type,o);Aa=u,o.target.dispatchEvent(u),Aa=null}else return i=es(o),i!==null&&Oa(i),t.blockedOn=o,!1;i.shift()}return!0}function jf(t,i,o){go(t)&&o.delete(i)}function hv(){La=!1,Cn!==null&&go(Cn)&&(Cn=null),In!==null&&go(In)&&(In=null),Tn!==null&&go(Tn)&&(Tn=null),Ui.forEach(jf),zi.forEach(jf)}function Wi(t,i){t.blockedOn===i&&(t.blockedOn=null,La||(La=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,hv)))}function Bi(t){function i(d){return Wi(d,t)}if(0<mo.length){Wi(mo[0],t);for(var o=1;o<mo.length;o++){var u=mo[o];u.blockedOn===t&&(u.blockedOn=null)}}for(Cn!==null&&Wi(Cn,t),In!==null&&Wi(In,t),Tn!==null&&Wi(Tn,t),Ui.forEach(i),zi.forEach(i),o=0;o<kn.length;o++)u=kn[o],u.blockedOn===t&&(u.blockedOn=null);for(;0<kn.length&&(o=kn[0],o.blockedOn===null);)zf(o),o.blockedOn===null&&kn.shift()}var Fr=re.ReactCurrentBatchConfig,_o=!0;function pv(t,i,o,u){var d=we,f=Fr.transition;Fr.transition=null;try{we=1,Da(t,i,o,u)}finally{we=d,Fr.transition=f}}function mv(t,i,o,u){var d=we,f=Fr.transition;Fr.transition=null;try{we=4,Da(t,i,o,u)}finally{we=d,Fr.transition=f}}function Da(t,i,o,u){if(_o){var d=Ma(t,i,o,u);if(d===null)Ja(t,i,u,yo,o),Uf(t,u);else if(fv(d,t,i,o,u))u.stopPropagation();else if(Uf(t,u),i&4&&-1<dv.indexOf(t)){for(;d!==null;){var f=es(d);if(f!==null&&Df(f),f=Ma(t,i,o,u),f===null&&Ja(t,i,u,yo,o),f===d)break;d=f}d!==null&&u.stopPropagation()}else Ja(t,i,u,null,o)}}var yo=null;function Ma(t,i,o,u){if(yo=null,t=Sa(u),t=lr(t),t!==null)if(i=or(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Cf(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return yo=t,null}function Wf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nv()){case Ra:return 1;case Pf:return 4;case uo:case rv:return 16;case xf:return 536870912;default:return 16}default:return 16}}var Rn=null,ba=null,vo=null;function Bf(){if(vo)return vo;var t,i=ba,o=i.length,u,d="value"in Rn?Rn.value:Rn.textContent,f=d.length;for(t=0;t<o&&i[t]===d[t];t++);var g=o-t;for(u=1;u<=g&&i[o-u]===d[f-u];u++);return vo=d.slice(t,1<u?1-u:void 0)}function wo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Eo(){return!0}function Vf(){return!1}function Ct(t){function i(o,u,d,f,g){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var v in t)t.hasOwnProperty(v)&&(o=t[v],this[v]=o?o(f):f[v]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Eo:Vf,this.isPropagationStopped=Vf,this}return V(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Eo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Eo)},persist:function(){},isPersistent:Eo}),i}var Ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fa=Ct(Ur),Vi=V({},Ur,{view:0,detail:0}),gv=Ct(Vi),Ua,za,Hi,Ao=V({},Vi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wa,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Hi&&(Hi&&t.type==="mousemove"?(Ua=t.screenX-Hi.screenX,za=t.screenY-Hi.screenY):za=Ua=0,Hi=t),Ua)},movementY:function(t){return"movementY"in t?t.movementY:za}}),Hf=Ct(Ao),_v=V({},Ao,{dataTransfer:0}),yv=Ct(_v),vv=V({},Vi,{relatedTarget:0}),ja=Ct(vv),wv=V({},Ur,{animationName:0,elapsedTime:0,pseudoElement:0}),Ev=Ct(wv),Av=V({},Ur,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Sv=Ct(Av),Cv=V({},Ur,{data:0}),$f=Ct(Cv),Iv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rv(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=kv[t])?!!i[t]:!1}function Wa(){return Rv}var Nv=V({},Vi,{key:function(t){if(t.key){var i=Iv[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=wo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Tv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wa,charCode:function(t){return t.type==="keypress"?wo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?wo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Pv=Ct(Nv),xv=V({},Ao,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qf=Ct(xv),Ov=V({},Vi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wa}),Lv=Ct(Ov),Dv=V({},Ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mv=Ct(Dv),bv=V({},Ao,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Fv=Ct(bv),Uv=[9,13,27,32],Ba=h&&"CompositionEvent"in window,$i=null;h&&"documentMode"in document&&($i=document.documentMode);var zv=h&&"TextEvent"in window&&!$i,Gf=h&&(!Ba||$i&&8<$i&&11>=$i),Kf=" ",Qf=!1;function Yf(t,i){switch(t){case"keyup":return Uv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zr=!1;function jv(t,i){switch(t){case"compositionend":return Xf(i);case"keypress":return i.which!==32?null:(Qf=!0,Kf);case"textInput":return t=i.data,t===Kf&&Qf?null:t;default:return null}}function Wv(t,i){if(zr)return t==="compositionend"||!Ba&&Yf(t,i)?(t=Bf(),vo=ba=Rn=null,zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Gf&&i.locale!=="ko"?null:i.data;default:return null}}var Bv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Bv[t.type]:i==="textarea"}function Zf(t,i,o,u){vf(u),i=ko(i,"onChange"),0<i.length&&(o=new Fa("onChange","change",null,o,u),t.push({event:o,listeners:i}))}var qi=null,Gi=null;function Vv(t){_h(t,0)}function So(t){var i=Hr(t);if(lf(i))return t}function Hv(t,i){if(t==="change")return i}var eh=!1;if(h){var Va;if(h){var Ha="oninput"in document;if(!Ha){var th=document.createElement("div");th.setAttribute("oninput","return;"),Ha=typeof th.oninput=="function"}Va=Ha}else Va=!1;eh=Va&&(!document.documentMode||9<document.documentMode)}function nh(){qi&&(qi.detachEvent("onpropertychange",rh),Gi=qi=null)}function rh(t){if(t.propertyName==="value"&&So(Gi)){var i=[];Zf(i,Gi,t,Sa(t)),Sf(Vv,i)}}function $v(t,i,o){t==="focusin"?(nh(),qi=i,Gi=o,qi.attachEvent("onpropertychange",rh)):t==="focusout"&&nh()}function qv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return So(Gi)}function Gv(t,i){if(t==="click")return So(i)}function Kv(t,i){if(t==="input"||t==="change")return So(i)}function Qv(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var bt=typeof Object.is=="function"?Object.is:Qv;function Ki(t,i){if(bt(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!p.call(i,d)||!bt(t[d],i[d]))return!1}return!0}function ih(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sh(t,i){var o=ih(t);t=0;for(var u;o;){if(o.nodeType===3){if(u=t+o.textContent.length,t<=i&&u>=i)return{node:o,offset:i-t};t=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=ih(o)}}function oh(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?oh(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function lh(){for(var t=window,i=so();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=so(t.document)}return i}function $a(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Yv(t){var i=lh(),o=t.focusedElem,u=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&oh(o.ownerDocument.documentElement,o)){if(u!==null&&$a(o)){if(i=u.start,t=u.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=o.textContent.length,f=Math.min(u.start,d);u=u.end===void 0?f:Math.min(u.end,d),!t.extend&&f>u&&(d=u,u=f,f=d),d=sh(o,f);var g=sh(o,u);d&&g&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==g.node||t.focusOffset!==g.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),f>u?(t.addRange(i),t.extend(g.node,g.offset)):(i.setEnd(g.node,g.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Xv=h&&"documentMode"in document&&11>=document.documentMode,jr=null,qa=null,Qi=null,Ga=!1;function ah(t,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Ga||jr==null||jr!==so(u)||(u=jr,"selectionStart"in u&&$a(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Qi&&Ki(Qi,u)||(Qi=u,u=ko(qa,"onSelect"),0<u.length&&(i=new Fa("onSelect","select",null,i,o),t.push({event:i,listeners:u}),i.target=jr)))}function Co(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var Wr={animationend:Co("Animation","AnimationEnd"),animationiteration:Co("Animation","AnimationIteration"),animationstart:Co("Animation","AnimationStart"),transitionend:Co("Transition","TransitionEnd")},Ka={},uh={};h&&(uh=document.createElement("div").style,"AnimationEvent"in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),"TransitionEvent"in window||delete Wr.transitionend.transition);function Io(t){if(Ka[t])return Ka[t];if(!Wr[t])return t;var i=Wr[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in uh)return Ka[t]=i[o];return t}var ch=Io("animationend"),dh=Io("animationiteration"),fh=Io("animationstart"),hh=Io("transitionend"),ph=new Map,mh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nn(t,i){ph.set(t,i),a(i,[t])}for(var Qa=0;Qa<mh.length;Qa++){var Ya=mh[Qa],Jv=Ya.toLowerCase(),Zv=Ya[0].toUpperCase()+Ya.slice(1);Nn(Jv,"on"+Zv)}Nn(ch,"onAnimationEnd"),Nn(dh,"onAnimationIteration"),Nn(fh,"onAnimationStart"),Nn("dblclick","onDoubleClick"),Nn("focusin","onFocus"),Nn("focusout","onBlur"),Nn(hh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ew=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yi));function gh(t,i,o){var u=t.type||"unknown-event";t.currentTarget=o,Jy(u,i,void 0,t),t.currentTarget=null}function _h(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var u=t[o],d=u.event;u=u.listeners;e:{var f=void 0;if(i)for(var g=u.length-1;0<=g;g--){var v=u[g],E=v.instance,k=v.currentTarget;if(v=v.listener,E!==f&&d.isPropagationStopped())break e;gh(d,v,k),f=E}else for(g=0;g<u.length;g++){if(v=u[g],E=v.instance,k=v.currentTarget,v=v.listener,E!==f&&d.isPropagationStopped())break e;gh(d,v,k),f=E}}}if(ao)throw t=ka,ao=!1,ka=null,t}function Re(t,i){var o=i[iu];o===void 0&&(o=i[iu]=new Set);var u=t+"__bubble";o.has(u)||(yh(i,t,2,!1),o.add(u))}function Xa(t,i,o){var u=0;i&&(u|=4),yh(o,t,u,i)}var To="_reactListening"+Math.random().toString(36).slice(2);function Xi(t){if(!t[To]){t[To]=!0,s.forEach(function(o){o!=="selectionchange"&&(ew.has(o)||Xa(o,!1,t),Xa(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[To]||(i[To]=!0,Xa("selectionchange",!1,i))}}function yh(t,i,o,u){switch(Wf(i)){case 1:var d=pv;break;case 4:d=mv;break;default:d=Da}o=d.bind(null,i,o,t),d=void 0,!Ta||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?t.addEventListener(i,o,{capture:!0,passive:d}):t.addEventListener(i,o,!0):d!==void 0?t.addEventListener(i,o,{passive:d}):t.addEventListener(i,o,!1)}function Ja(t,i,o,u,d){var f=u;if(!(i&1)&&!(i&2)&&u!==null)e:for(;;){if(u===null)return;var g=u.tag;if(g===3||g===4){var v=u.stateNode.containerInfo;if(v===d||v.nodeType===8&&v.parentNode===d)break;if(g===4)for(g=u.return;g!==null;){var E=g.tag;if((E===3||E===4)&&(E=g.stateNode.containerInfo,E===d||E.nodeType===8&&E.parentNode===d))return;g=g.return}for(;v!==null;){if(g=lr(v),g===null)return;if(E=g.tag,E===5||E===6){u=f=g;continue e}v=v.parentNode}}u=u.return}Sf(function(){var k=f,D=Sa(o),M=[];e:{var O=ph.get(t);if(O!==void 0){var B=Fa,$=t;switch(t){case"keypress":if(wo(o)===0)break e;case"keydown":case"keyup":B=Pv;break;case"focusin":$="focus",B=ja;break;case"focusout":$="blur",B=ja;break;case"beforeblur":case"afterblur":B=ja;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=Hf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=yv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=Lv;break;case ch:case dh:case fh:B=Ev;break;case hh:B=Mv;break;case"scroll":B=gv;break;case"wheel":B=Fv;break;case"copy":case"cut":case"paste":B=Sv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=qf}var G=(i&4)!==0,Be=!G&&t==="scroll",C=G?O!==null?O+"Capture":null:O;G=[];for(var A=k,I;A!==null;){I=A;var F=I.stateNode;if(I.tag===5&&F!==null&&(I=F,C!==null&&(F=Li(A,C),F!=null&&G.push(Ji(A,F,I)))),Be)break;A=A.return}0<G.length&&(O=new B(O,$,null,o,D),M.push({event:O,listeners:G}))}}if(!(i&7)){e:{if(O=t==="mouseover"||t==="pointerover",B=t==="mouseout"||t==="pointerout",O&&o!==Aa&&($=o.relatedTarget||o.fromElement)&&(lr($)||$[on]))break e;if((B||O)&&(O=D.window===D?D:(O=D.ownerDocument)?O.defaultView||O.parentWindow:window,B?($=o.relatedTarget||o.toElement,B=k,$=$?lr($):null,$!==null&&(Be=or($),$!==Be||$.tag!==5&&$.tag!==6)&&($=null)):(B=null,$=k),B!==$)){if(G=Hf,F="onMouseLeave",C="onMouseEnter",A="mouse",(t==="pointerout"||t==="pointerover")&&(G=qf,F="onPointerLeave",C="onPointerEnter",A="pointer"),Be=B==null?O:Hr(B),I=$==null?O:Hr($),O=new G(F,A+"leave",B,o,D),O.target=Be,O.relatedTarget=I,F=null,lr(D)===k&&(G=new G(C,A+"enter",$,o,D),G.target=I,G.relatedTarget=Be,F=G),Be=F,B&&$)t:{for(G=B,C=$,A=0,I=G;I;I=Br(I))A++;for(I=0,F=C;F;F=Br(F))I++;for(;0<A-I;)G=Br(G),A--;for(;0<I-A;)C=Br(C),I--;for(;A--;){if(G===C||C!==null&&G===C.alternate)break t;G=Br(G),C=Br(C)}G=null}else G=null;B!==null&&vh(M,O,B,G,!1),$!==null&&Be!==null&&vh(M,Be,$,G,!0)}}e:{if(O=k?Hr(k):window,B=O.nodeName&&O.nodeName.toLowerCase(),B==="select"||B==="input"&&O.type==="file")var K=Hv;else if(Jf(O))if(eh)K=Kv;else{K=qv;var Q=$v}else(B=O.nodeName)&&B.toLowerCase()==="input"&&(O.type==="checkbox"||O.type==="radio")&&(K=Gv);if(K&&(K=K(t,k))){Zf(M,K,o,D);break e}Q&&Q(t,O,k),t==="focusout"&&(Q=O._wrapperState)&&Q.controlled&&O.type==="number"&&_a(O,"number",O.value)}switch(Q=k?Hr(k):window,t){case"focusin":(Jf(Q)||Q.contentEditable==="true")&&(jr=Q,qa=k,Qi=null);break;case"focusout":Qi=qa=jr=null;break;case"mousedown":Ga=!0;break;case"contextmenu":case"mouseup":case"dragend":Ga=!1,ah(M,o,D);break;case"selectionchange":if(Xv)break;case"keydown":case"keyup":ah(M,o,D)}var Y;if(Ba)e:{switch(t){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else zr?Yf(t,o)&&(te="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(te="onCompositionStart");te&&(Gf&&o.locale!=="ko"&&(zr||te!=="onCompositionStart"?te==="onCompositionEnd"&&zr&&(Y=Bf()):(Rn=D,ba="value"in Rn?Rn.value:Rn.textContent,zr=!0)),Q=ko(k,te),0<Q.length&&(te=new $f(te,t,null,o,D),M.push({event:te,listeners:Q}),Y?te.data=Y:(Y=Xf(o),Y!==null&&(te.data=Y)))),(Y=zv?jv(t,o):Wv(t,o))&&(k=ko(k,"onBeforeInput"),0<k.length&&(D=new $f("onBeforeInput","beforeinput",null,o,D),M.push({event:D,listeners:k}),D.data=Y))}_h(M,i)})}function Ji(t,i,o){return{instance:t,listener:i,currentTarget:o}}function ko(t,i){for(var o=i+"Capture",u=[];t!==null;){var d=t,f=d.stateNode;d.tag===5&&f!==null&&(d=f,f=Li(t,o),f!=null&&u.unshift(Ji(t,f,d)),f=Li(t,i),f!=null&&u.push(Ji(t,f,d))),t=t.return}return u}function Br(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function vh(t,i,o,u,d){for(var f=i._reactName,g=[];o!==null&&o!==u;){var v=o,E=v.alternate,k=v.stateNode;if(E!==null&&E===u)break;v.tag===5&&k!==null&&(v=k,d?(E=Li(o,f),E!=null&&g.unshift(Ji(o,E,v))):d||(E=Li(o,f),E!=null&&g.push(Ji(o,E,v)))),o=o.return}g.length!==0&&t.push({event:i,listeners:g})}var tw=/\r\n?/g,nw=/\u0000|\uFFFD/g;function wh(t){return(typeof t=="string"?t:""+t).replace(tw,`
`).replace(nw,"")}function Ro(t,i,o){if(i=wh(i),wh(t)!==i&&o)throw Error(n(425))}function No(){}var Za=null,eu=null;function tu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var nu=typeof setTimeout=="function"?setTimeout:void 0,rw=typeof clearTimeout=="function"?clearTimeout:void 0,Eh=typeof Promise=="function"?Promise:void 0,iw=typeof queueMicrotask=="function"?queueMicrotask:typeof Eh<"u"?function(t){return Eh.resolve(null).then(t).catch(sw)}:nu;function sw(t){setTimeout(function(){throw t})}function ru(t,i){var o=i,u=0;do{var d=o.nextSibling;if(t.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(u===0){t.removeChild(d),Bi(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=d}while(o);Bi(i)}function Pn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Ah(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var Vr=Math.random().toString(36).slice(2),Gt="__reactFiber$"+Vr,Zi="__reactProps$"+Vr,on="__reactContainer$"+Vr,iu="__reactEvents$"+Vr,ow="__reactListeners$"+Vr,lw="__reactHandles$"+Vr;function lr(t){var i=t[Gt];if(i)return i;for(var o=t.parentNode;o;){if(i=o[on]||o[Gt]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Ah(t);t!==null;){if(o=t[Gt])return o;t=Ah(t)}return i}t=o,o=t.parentNode}return null}function es(t){return t=t[Gt]||t[on],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Hr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Po(t){return t[Zi]||null}var su=[],$r=-1;function xn(t){return{current:t}}function Ne(t){0>$r||(t.current=su[$r],su[$r]=null,$r--)}function Ie(t,i){$r++,su[$r]=t.current,t.current=i}var On={},st=xn(On),pt=xn(!1),ar=On;function qr(t,i){var o=t.type.contextTypes;if(!o)return On;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},f;for(f in o)d[f]=i[f];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function mt(t){return t=t.childContextTypes,t!=null}function xo(){Ne(pt),Ne(st)}function Sh(t,i,o){if(st.current!==On)throw Error(n(168));Ie(st,i),Ie(pt,o)}function Ch(t,i,o){var u=t.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(n(108,Ce(t)||"Unknown",d));return V({},o,u)}function Oo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||On,ar=st.current,Ie(st,t),Ie(pt,pt.current),!0}function Ih(t,i,o){var u=t.stateNode;if(!u)throw Error(n(169));o?(t=Ch(t,i,ar),u.__reactInternalMemoizedMergedChildContext=t,Ne(pt),Ne(st),Ie(st,t)):Ne(pt),Ie(pt,o)}var ln=null,Lo=!1,ou=!1;function Th(t){ln===null?ln=[t]:ln.push(t)}function aw(t){Lo=!0,Th(t)}function Ln(){if(!ou&&ln!==null){ou=!0;var t=0,i=we;try{var o=ln;for(we=1;t<o.length;t++){var u=o[t];do u=u(!0);while(u!==null)}ln=null,Lo=!1}catch(d){throw ln!==null&&(ln=ln.slice(t+1)),Rf(Ra,Ln),d}finally{we=i,ou=!1}}return null}var Gr=[],Kr=0,Do=null,Mo=0,Rt=[],Nt=0,ur=null,an=1,un="";function cr(t,i){Gr[Kr++]=Mo,Gr[Kr++]=Do,Do=t,Mo=i}function kh(t,i,o){Rt[Nt++]=an,Rt[Nt++]=un,Rt[Nt++]=ur,ur=t;var u=an;t=un;var d=32-Mt(u)-1;u&=~(1<<d),o+=1;var f=32-Mt(i)+d;if(30<f){var g=d-d%5;f=(u&(1<<g)-1).toString(32),u>>=g,d-=g,an=1<<32-Mt(i)+d|o<<d|u,un=f+t}else an=1<<f|o<<d|u,un=t}function lu(t){t.return!==null&&(cr(t,1),kh(t,1,0))}function au(t){for(;t===Do;)Do=Gr[--Kr],Gr[Kr]=null,Mo=Gr[--Kr],Gr[Kr]=null;for(;t===ur;)ur=Rt[--Nt],Rt[Nt]=null,un=Rt[--Nt],Rt[Nt]=null,an=Rt[--Nt],Rt[Nt]=null}var It=null,Tt=null,Le=!1,Ft=null;function Rh(t,i){var o=Lt(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Nh(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,It=t,Tt=Pn(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,It=t,Tt=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=ur!==null?{id:an,overflow:un}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Lt(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,It=t,Tt=null,!0):!1;default:return!1}}function uu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function cu(t){if(Le){var i=Tt;if(i){var o=i;if(!Nh(t,i)){if(uu(t))throw Error(n(418));i=Pn(o.nextSibling);var u=It;i&&Nh(t,i)?Rh(u,o):(t.flags=t.flags&-4097|2,Le=!1,It=t)}}else{if(uu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Le=!1,It=t}}}function Ph(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;It=t}function bo(t){if(t!==It)return!1;if(!Le)return Ph(t),Le=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!tu(t.type,t.memoizedProps)),i&&(i=Tt)){if(uu(t))throw xh(),Error(n(418));for(;i;)Rh(t,i),i=Pn(i.nextSibling)}if(Ph(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Tt=Pn(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Tt=null}}else Tt=It?Pn(t.stateNode.nextSibling):null;return!0}function xh(){for(var t=Tt;t;)t=Pn(t.nextSibling)}function Qr(){Tt=It=null,Le=!1}function du(t){Ft===null?Ft=[t]:Ft.push(t)}var uw=re.ReactCurrentBatchConfig;function ts(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var u=o.stateNode}if(!u)throw Error(n(147,t));var d=u,f=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===f?i.ref:(i=function(g){var v=d.refs;g===null?delete v[f]:v[f]=g},i._stringRef=f,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Fo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Oh(t){var i=t._init;return i(t._payload)}function Lh(t){function i(C,A){if(t){var I=C.deletions;I===null?(C.deletions=[A],C.flags|=16):I.push(A)}}function o(C,A){if(!t)return null;for(;A!==null;)i(C,A),A=A.sibling;return null}function u(C,A){for(C=new Map;A!==null;)A.key!==null?C.set(A.key,A):C.set(A.index,A),A=A.sibling;return C}function d(C,A){return C=Wn(C,A),C.index=0,C.sibling=null,C}function f(C,A,I){return C.index=I,t?(I=C.alternate,I!==null?(I=I.index,I<A?(C.flags|=2,A):I):(C.flags|=2,A)):(C.flags|=1048576,A)}function g(C){return t&&C.alternate===null&&(C.flags|=2),C}function v(C,A,I,F){return A===null||A.tag!==6?(A=nc(I,C.mode,F),A.return=C,A):(A=d(A,I),A.return=C,A)}function E(C,A,I,F){var K=I.type;return K===ne?D(C,A,I.props.children,F,I.key):A!==null&&(A.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===et&&Oh(K)===A.type)?(F=d(A,I.props),F.ref=ts(C,A,I),F.return=C,F):(F=ll(I.type,I.key,I.props,null,C.mode,F),F.ref=ts(C,A,I),F.return=C,F)}function k(C,A,I,F){return A===null||A.tag!==4||A.stateNode.containerInfo!==I.containerInfo||A.stateNode.implementation!==I.implementation?(A=rc(I,C.mode,F),A.return=C,A):(A=d(A,I.children||[]),A.return=C,A)}function D(C,A,I,F,K){return A===null||A.tag!==7?(A=yr(I,C.mode,F,K),A.return=C,A):(A=d(A,I),A.return=C,A)}function M(C,A,I){if(typeof A=="string"&&A!==""||typeof A=="number")return A=nc(""+A,C.mode,I),A.return=C,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case ge:return I=ll(A.type,A.key,A.props,null,C.mode,I),I.ref=ts(C,null,A),I.return=C,I;case q:return A=rc(A,C.mode,I),A.return=C,A;case et:var F=A._init;return M(C,F(A._payload),I)}if(Pi(A)||J(A))return A=yr(A,C.mode,I,null),A.return=C,A;Fo(C,A)}return null}function O(C,A,I,F){var K=A!==null?A.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return K!==null?null:v(C,A,""+I,F);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case ge:return I.key===K?E(C,A,I,F):null;case q:return I.key===K?k(C,A,I,F):null;case et:return K=I._init,O(C,A,K(I._payload),F)}if(Pi(I)||J(I))return K!==null?null:D(C,A,I,F,null);Fo(C,I)}return null}function B(C,A,I,F,K){if(typeof F=="string"&&F!==""||typeof F=="number")return C=C.get(I)||null,v(A,C,""+F,K);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case ge:return C=C.get(F.key===null?I:F.key)||null,E(A,C,F,K);case q:return C=C.get(F.key===null?I:F.key)||null,k(A,C,F,K);case et:var Q=F._init;return B(C,A,I,Q(F._payload),K)}if(Pi(F)||J(F))return C=C.get(I)||null,D(A,C,F,K,null);Fo(A,F)}return null}function $(C,A,I,F){for(var K=null,Q=null,Y=A,te=A=0,Ke=null;Y!==null&&te<I.length;te++){Y.index>te?(Ke=Y,Y=null):Ke=Y.sibling;var me=O(C,Y,I[te],F);if(me===null){Y===null&&(Y=Ke);break}t&&Y&&me.alternate===null&&i(C,Y),A=f(me,A,te),Q===null?K=me:Q.sibling=me,Q=me,Y=Ke}if(te===I.length)return o(C,Y),Le&&cr(C,te),K;if(Y===null){for(;te<I.length;te++)Y=M(C,I[te],F),Y!==null&&(A=f(Y,A,te),Q===null?K=Y:Q.sibling=Y,Q=Y);return Le&&cr(C,te),K}for(Y=u(C,Y);te<I.length;te++)Ke=B(Y,C,te,I[te],F),Ke!==null&&(t&&Ke.alternate!==null&&Y.delete(Ke.key===null?te:Ke.key),A=f(Ke,A,te),Q===null?K=Ke:Q.sibling=Ke,Q=Ke);return t&&Y.forEach(function(Bn){return i(C,Bn)}),Le&&cr(C,te),K}function G(C,A,I,F){var K=J(I);if(typeof K!="function")throw Error(n(150));if(I=K.call(I),I==null)throw Error(n(151));for(var Q=K=null,Y=A,te=A=0,Ke=null,me=I.next();Y!==null&&!me.done;te++,me=I.next()){Y.index>te?(Ke=Y,Y=null):Ke=Y.sibling;var Bn=O(C,Y,me.value,F);if(Bn===null){Y===null&&(Y=Ke);break}t&&Y&&Bn.alternate===null&&i(C,Y),A=f(Bn,A,te),Q===null?K=Bn:Q.sibling=Bn,Q=Bn,Y=Ke}if(me.done)return o(C,Y),Le&&cr(C,te),K;if(Y===null){for(;!me.done;te++,me=I.next())me=M(C,me.value,F),me!==null&&(A=f(me,A,te),Q===null?K=me:Q.sibling=me,Q=me);return Le&&cr(C,te),K}for(Y=u(C,Y);!me.done;te++,me=I.next())me=B(Y,C,te,me.value,F),me!==null&&(t&&me.alternate!==null&&Y.delete(me.key===null?te:me.key),A=f(me,A,te),Q===null?K=me:Q.sibling=me,Q=me);return t&&Y.forEach(function(Ww){return i(C,Ww)}),Le&&cr(C,te),K}function Be(C,A,I,F){if(typeof I=="object"&&I!==null&&I.type===ne&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case ge:e:{for(var K=I.key,Q=A;Q!==null;){if(Q.key===K){if(K=I.type,K===ne){if(Q.tag===7){o(C,Q.sibling),A=d(Q,I.props.children),A.return=C,C=A;break e}}else if(Q.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===et&&Oh(K)===Q.type){o(C,Q.sibling),A=d(Q,I.props),A.ref=ts(C,Q,I),A.return=C,C=A;break e}o(C,Q);break}else i(C,Q);Q=Q.sibling}I.type===ne?(A=yr(I.props.children,C.mode,F,I.key),A.return=C,C=A):(F=ll(I.type,I.key,I.props,null,C.mode,F),F.ref=ts(C,A,I),F.return=C,C=F)}return g(C);case q:e:{for(Q=I.key;A!==null;){if(A.key===Q)if(A.tag===4&&A.stateNode.containerInfo===I.containerInfo&&A.stateNode.implementation===I.implementation){o(C,A.sibling),A=d(A,I.children||[]),A.return=C,C=A;break e}else{o(C,A);break}else i(C,A);A=A.sibling}A=rc(I,C.mode,F),A.return=C,C=A}return g(C);case et:return Q=I._init,Be(C,A,Q(I._payload),F)}if(Pi(I))return $(C,A,I,F);if(J(I))return G(C,A,I,F);Fo(C,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,A!==null&&A.tag===6?(o(C,A.sibling),A=d(A,I),A.return=C,C=A):(o(C,A),A=nc(I,C.mode,F),A.return=C,C=A),g(C)):o(C,A)}return Be}var Yr=Lh(!0),Dh=Lh(!1),Uo=xn(null),zo=null,Xr=null,fu=null;function hu(){fu=Xr=zo=null}function pu(t){var i=Uo.current;Ne(Uo),t._currentValue=i}function mu(t,i,o){for(;t!==null;){var u=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),t===o)break;t=t.return}}function Jr(t,i){zo=t,fu=Xr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&i&&(gt=!0),t.firstContext=null)}function Pt(t){var i=t._currentValue;if(fu!==t)if(t={context:t,memoizedValue:i,next:null},Xr===null){if(zo===null)throw Error(n(308));Xr=t,zo.dependencies={lanes:0,firstContext:t}}else Xr=Xr.next=t;return i}var dr=null;function gu(t){dr===null?dr=[t]:dr.push(t)}function Mh(t,i,o,u){var d=i.interleaved;return d===null?(o.next=o,gu(i)):(o.next=d.next,d.next=o),i.interleaved=o,cn(t,u)}function cn(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Dn=!1;function _u(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function dn(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Mn(t,i,o){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,fe&2){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,cn(t,o)}return d=u.interleaved,d===null?(i.next=i,gu(u)):(i.next=d.next,d.next=i),u.interleaved=i,cn(t,o)}function jo(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=t.pendingLanes,o|=u,i.lanes=o,xa(t,o)}}function Fh(t,i){var o=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,f=null;if(o=o.firstBaseUpdate,o!==null){do{var g={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};f===null?d=f=g:f=f.next=g,o=o.next}while(o!==null);f===null?d=f=i:f=f.next=i}else d=f=i;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:u.shared,effects:u.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Wo(t,i,o,u){var d=t.updateQueue;Dn=!1;var f=d.firstBaseUpdate,g=d.lastBaseUpdate,v=d.shared.pending;if(v!==null){d.shared.pending=null;var E=v,k=E.next;E.next=null,g===null?f=k:g.next=k,g=E;var D=t.alternate;D!==null&&(D=D.updateQueue,v=D.lastBaseUpdate,v!==g&&(v===null?D.firstBaseUpdate=k:v.next=k,D.lastBaseUpdate=E))}if(f!==null){var M=d.baseState;g=0,D=k=E=null,v=f;do{var O=v.lane,B=v.eventTime;if((u&O)===O){D!==null&&(D=D.next={eventTime:B,lane:0,tag:v.tag,payload:v.payload,callback:v.callback,next:null});e:{var $=t,G=v;switch(O=i,B=o,G.tag){case 1:if($=G.payload,typeof $=="function"){M=$.call(B,M,O);break e}M=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=G.payload,O=typeof $=="function"?$.call(B,M,O):$,O==null)break e;M=V({},M,O);break e;case 2:Dn=!0}}v.callback!==null&&v.lane!==0&&(t.flags|=64,O=d.effects,O===null?d.effects=[v]:O.push(v))}else B={eventTime:B,lane:O,tag:v.tag,payload:v.payload,callback:v.callback,next:null},D===null?(k=D=B,E=M):D=D.next=B,g|=O;if(v=v.next,v===null){if(v=d.shared.pending,v===null)break;O=v,v=O.next,O.next=null,d.lastBaseUpdate=O,d.shared.pending=null}}while(!0);if(D===null&&(E=M),d.baseState=E,d.firstBaseUpdate=k,d.lastBaseUpdate=D,i=d.shared.interleaved,i!==null){d=i;do g|=d.lane,d=d.next;while(d!==i)}else f===null&&(d.shared.lanes=0);pr|=g,t.lanes=g,t.memoizedState=M}}function Uh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var u=t[i],d=u.callback;if(d!==null){if(u.callback=null,u=o,typeof d!="function")throw Error(n(191,d));d.call(u)}}}var ns={},Kt=xn(ns),rs=xn(ns),is=xn(ns);function fr(t){if(t===ns)throw Error(n(174));return t}function yu(t,i){switch(Ie(is,i),Ie(rs,t),Ie(Kt,ns),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:va(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=va(i,t)}Ne(Kt),Ie(Kt,i)}function Zr(){Ne(Kt),Ne(rs),Ne(is)}function zh(t){fr(is.current);var i=fr(Kt.current),o=va(i,t.type);i!==o&&(Ie(rs,t),Ie(Kt,o))}function vu(t){rs.current===t&&(Ne(Kt),Ne(rs))}var De=xn(0);function Bo(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var wu=[];function Eu(){for(var t=0;t<wu.length;t++)wu[t]._workInProgressVersionPrimary=null;wu.length=0}var Vo=re.ReactCurrentDispatcher,Au=re.ReactCurrentBatchConfig,hr=0,Me=null,He=null,qe=null,Ho=!1,ss=!1,os=0,cw=0;function ot(){throw Error(n(321))}function Su(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!bt(t[o],i[o]))return!1;return!0}function Cu(t,i,o,u,d,f){if(hr=f,Me=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Vo.current=t===null||t.memoizedState===null?pw:mw,t=o(u,d),ss){f=0;do{if(ss=!1,os=0,25<=f)throw Error(n(301));f+=1,qe=He=null,i.updateQueue=null,Vo.current=gw,t=o(u,d)}while(ss)}if(Vo.current=Go,i=He!==null&&He.next!==null,hr=0,qe=He=Me=null,Ho=!1,i)throw Error(n(300));return t}function Iu(){var t=os!==0;return os=0,t}function Qt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?Me.memoizedState=qe=t:qe=qe.next=t,qe}function xt(){if(He===null){var t=Me.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var i=qe===null?Me.memoizedState:qe.next;if(i!==null)qe=i,He=t;else{if(t===null)throw Error(n(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},qe===null?Me.memoizedState=qe=t:qe=qe.next=t}return qe}function ls(t,i){return typeof i=="function"?i(t):i}function Tu(t){var i=xt(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=He,d=u.baseQueue,f=o.pending;if(f!==null){if(d!==null){var g=d.next;d.next=f.next,f.next=g}u.baseQueue=d=f,o.pending=null}if(d!==null){f=d.next,u=u.baseState;var v=g=null,E=null,k=f;do{var D=k.lane;if((hr&D)===D)E!==null&&(E=E.next={lane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),u=k.hasEagerState?k.eagerState:t(u,k.action);else{var M={lane:D,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null};E===null?(v=E=M,g=u):E=E.next=M,Me.lanes|=D,pr|=D}k=k.next}while(k!==null&&k!==f);E===null?g=u:E.next=v,bt(u,i.memoizedState)||(gt=!0),i.memoizedState=u,i.baseState=g,i.baseQueue=E,o.lastRenderedState=u}if(t=o.interleaved,t!==null){d=t;do f=d.lane,Me.lanes|=f,pr|=f,d=d.next;while(d!==t)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function ku(t){var i=xt(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=o.dispatch,d=o.pending,f=i.memoizedState;if(d!==null){o.pending=null;var g=d=d.next;do f=t(f,g.action),g=g.next;while(g!==d);bt(f,i.memoizedState)||(gt=!0),i.memoizedState=f,i.baseQueue===null&&(i.baseState=f),o.lastRenderedState=f}return[f,u]}function jh(){}function Wh(t,i){var o=Me,u=xt(),d=i(),f=!bt(u.memoizedState,d);if(f&&(u.memoizedState=d,gt=!0),u=u.queue,Ru(Hh.bind(null,o,u,t),[t]),u.getSnapshot!==i||f||qe!==null&&qe.memoizedState.tag&1){if(o.flags|=2048,as(9,Vh.bind(null,o,u,d,i),void 0,null),Ge===null)throw Error(n(349));hr&30||Bh(o,i,d)}return d}function Bh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Me.updateQueue,i===null?(i={lastEffect:null,stores:null},Me.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Vh(t,i,o,u){i.value=o,i.getSnapshot=u,$h(i)&&qh(t)}function Hh(t,i,o){return o(function(){$h(i)&&qh(t)})}function $h(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!bt(t,o)}catch{return!0}}function qh(t){var i=cn(t,1);i!==null&&Wt(i,t,1,-1)}function Gh(t){var i=Qt();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ls,lastRenderedState:t},i.queue=t,t=t.dispatch=hw.bind(null,Me,t),[i.memoizedState,t]}function as(t,i,o,u){return t={tag:t,create:i,destroy:o,deps:u,next:null},i=Me.updateQueue,i===null?(i={lastEffect:null,stores:null},Me.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(u=o.next,o.next=t,t.next=u,i.lastEffect=t)),t}function Kh(){return xt().memoizedState}function $o(t,i,o,u){var d=Qt();Me.flags|=t,d.memoizedState=as(1|i,o,void 0,u===void 0?null:u)}function qo(t,i,o,u){var d=xt();u=u===void 0?null:u;var f=void 0;if(He!==null){var g=He.memoizedState;if(f=g.destroy,u!==null&&Su(u,g.deps)){d.memoizedState=as(i,o,f,u);return}}Me.flags|=t,d.memoizedState=as(1|i,o,f,u)}function Qh(t,i){return $o(8390656,8,t,i)}function Ru(t,i){return qo(2048,8,t,i)}function Yh(t,i){return qo(4,2,t,i)}function Xh(t,i){return qo(4,4,t,i)}function Jh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Zh(t,i,o){return o=o!=null?o.concat([t]):null,qo(4,4,Jh.bind(null,i,t),o)}function Nu(){}function ep(t,i){var o=xt();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Su(i,u[1])?u[0]:(o.memoizedState=[t,i],t)}function tp(t,i){var o=xt();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Su(i,u[1])?u[0]:(t=t(),o.memoizedState=[t,i],t)}function np(t,i,o){return hr&21?(bt(o,i)||(o=Of(),Me.lanes|=o,pr|=o,t.baseState=!0),i):(t.baseState&&(t.baseState=!1,gt=!0),t.memoizedState=o)}function dw(t,i){var o=we;we=o!==0&&4>o?o:4,t(!0);var u=Au.transition;Au.transition={};try{t(!1),i()}finally{we=o,Au.transition=u}}function rp(){return xt().memoizedState}function fw(t,i,o){var u=zn(t);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},ip(t))sp(i,o);else if(o=Mh(t,i,o,u),o!==null){var d=ct();Wt(o,t,u,d),op(o,i,u)}}function hw(t,i,o){var u=zn(t),d={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(ip(t))sp(i,d);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=i.lastRenderedReducer,f!==null))try{var g=i.lastRenderedState,v=f(g,o);if(d.hasEagerState=!0,d.eagerState=v,bt(v,g)){var E=i.interleaved;E===null?(d.next=d,gu(i)):(d.next=E.next,E.next=d),i.interleaved=d;return}}catch{}finally{}o=Mh(t,i,d,u),o!==null&&(d=ct(),Wt(o,t,u,d),op(o,i,u))}}function ip(t){var i=t.alternate;return t===Me||i!==null&&i===Me}function sp(t,i){ss=Ho=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function op(t,i,o){if(o&4194240){var u=i.lanes;u&=t.pendingLanes,o|=u,i.lanes=o,xa(t,o)}}var Go={readContext:Pt,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useInsertionEffect:ot,useLayoutEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useMutableSource:ot,useSyncExternalStore:ot,useId:ot,unstable_isNewReconciler:!1},pw={readContext:Pt,useCallback:function(t,i){return Qt().memoizedState=[t,i===void 0?null:i],t},useContext:Pt,useEffect:Qh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,$o(4194308,4,Jh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return $o(4194308,4,t,i)},useInsertionEffect:function(t,i){return $o(4,2,t,i)},useMemo:function(t,i){var o=Qt();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var u=Qt();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},u.queue=t,t=t.dispatch=fw.bind(null,Me,t),[u.memoizedState,t]},useRef:function(t){var i=Qt();return t={current:t},i.memoizedState=t},useState:Gh,useDebugValue:Nu,useDeferredValue:function(t){return Qt().memoizedState=t},useTransition:function(){var t=Gh(!1),i=t[0];return t=dw.bind(null,t[1]),Qt().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var u=Me,d=Qt();if(Le){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),Ge===null)throw Error(n(349));hr&30||Bh(u,i,o)}d.memoizedState=o;var f={value:o,getSnapshot:i};return d.queue=f,Qh(Hh.bind(null,u,f,t),[t]),u.flags|=2048,as(9,Vh.bind(null,u,f,o,i),void 0,null),o},useId:function(){var t=Qt(),i=Ge.identifierPrefix;if(Le){var o=un,u=an;o=(u&~(1<<32-Mt(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=os++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=cw++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},mw={readContext:Pt,useCallback:ep,useContext:Pt,useEffect:Ru,useImperativeHandle:Zh,useInsertionEffect:Yh,useLayoutEffect:Xh,useMemo:tp,useReducer:Tu,useRef:Kh,useState:function(){return Tu(ls)},useDebugValue:Nu,useDeferredValue:function(t){var i=xt();return np(i,He.memoizedState,t)},useTransition:function(){var t=Tu(ls)[0],i=xt().memoizedState;return[t,i]},useMutableSource:jh,useSyncExternalStore:Wh,useId:rp,unstable_isNewReconciler:!1},gw={readContext:Pt,useCallback:ep,useContext:Pt,useEffect:Ru,useImperativeHandle:Zh,useInsertionEffect:Yh,useLayoutEffect:Xh,useMemo:tp,useReducer:ku,useRef:Kh,useState:function(){return ku(ls)},useDebugValue:Nu,useDeferredValue:function(t){var i=xt();return He===null?i.memoizedState=t:np(i,He.memoizedState,t)},useTransition:function(){var t=ku(ls)[0],i=xt().memoizedState;return[t,i]},useMutableSource:jh,useSyncExternalStore:Wh,useId:rp,unstable_isNewReconciler:!1};function Ut(t,i){if(t&&t.defaultProps){i=V({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Pu(t,i,o,u){i=t.memoizedState,o=o(u,i),o=o==null?i:V({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Ko={isMounted:function(t){return(t=t._reactInternals)?or(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var u=ct(),d=zn(t),f=dn(u,d);f.payload=i,o!=null&&(f.callback=o),i=Mn(t,f,d),i!==null&&(Wt(i,t,d,u),jo(i,t,d))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var u=ct(),d=zn(t),f=dn(u,d);f.tag=1,f.payload=i,o!=null&&(f.callback=o),i=Mn(t,f,d),i!==null&&(Wt(i,t,d,u),jo(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=ct(),u=zn(t),d=dn(o,u);d.tag=2,i!=null&&(d.callback=i),i=Mn(t,d,u),i!==null&&(Wt(i,t,u,o),jo(i,t,u))}};function lp(t,i,o,u,d,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,f,g):i.prototype&&i.prototype.isPureReactComponent?!Ki(o,u)||!Ki(d,f):!0}function ap(t,i,o){var u=!1,d=On,f=i.contextType;return typeof f=="object"&&f!==null?f=Pt(f):(d=mt(i)?ar:st.current,u=i.contextTypes,f=(u=u!=null)?qr(t,d):On),i=new i(o,f),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ko,t.stateNode=i,i._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=f),i}function up(t,i,o,u){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==t&&Ko.enqueueReplaceState(i,i.state,null)}function xu(t,i,o,u){var d=t.stateNode;d.props=o,d.state=t.memoizedState,d.refs={},_u(t);var f=i.contextType;typeof f=="object"&&f!==null?d.context=Pt(f):(f=mt(i)?ar:st.current,d.context=qr(t,f)),d.state=t.memoizedState,f=i.getDerivedStateFromProps,typeof f=="function"&&(Pu(t,i,f,o),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Ko.enqueueReplaceState(d,d.state,null),Wo(t,o,d,u),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function ei(t,i){try{var o="",u=i;do o+=he(u),u=u.return;while(u);var d=o}catch(f){d=`
Error generating stack: `+f.message+`
`+f.stack}return{value:t,source:i,stack:d,digest:null}}function Ou(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Lu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var _w=typeof WeakMap=="function"?WeakMap:Map;function cp(t,i,o){o=dn(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){tl||(tl=!0,Ku=u),Lu(t,i)},o}function dp(t,i,o){o=dn(-1,o),o.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;o.payload=function(){return u(d)},o.callback=function(){Lu(t,i)}}var f=t.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(o.callback=function(){Lu(t,i),typeof u!="function"&&(Fn===null?Fn=new Set([this]):Fn.add(this));var g=i.stack;this.componentDidCatch(i.value,{componentStack:g!==null?g:""})}),o}function fp(t,i,o){var u=t.pingCache;if(u===null){u=t.pingCache=new _w;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(o)||(d.add(o),t=xw.bind(null,t,i,o),i.then(t,t))}function hp(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function pp(t,i,o,u,d){return t.mode&1?(t.flags|=65536,t.lanes=d,t):(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=dn(-1,1),i.tag=2,Mn(o,i,1))),o.lanes|=1),t)}var yw=re.ReactCurrentOwner,gt=!1;function ut(t,i,o,u){i.child=t===null?Dh(i,null,o,u):Yr(i,t.child,o,u)}function mp(t,i,o,u,d){o=o.render;var f=i.ref;return Jr(i,d),u=Cu(t,i,o,u,f,d),o=Iu(),t!==null&&!gt?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,fn(t,i,d)):(Le&&o&&lu(i),i.flags|=1,ut(t,i,u,d),i.child)}function gp(t,i,o,u,d){if(t===null){var f=o.type;return typeof f=="function"&&!tc(f)&&f.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=f,_p(t,i,f,u,d)):(t=ll(o.type,null,u,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(f=t.child,!(t.lanes&d)){var g=f.memoizedProps;if(o=o.compare,o=o!==null?o:Ki,o(g,u)&&t.ref===i.ref)return fn(t,i,d)}return i.flags|=1,t=Wn(f,u),t.ref=i.ref,t.return=i,i.child=t}function _p(t,i,o,u,d){if(t!==null){var f=t.memoizedProps;if(Ki(f,u)&&t.ref===i.ref)if(gt=!1,i.pendingProps=u=f,(t.lanes&d)!==0)t.flags&131072&&(gt=!0);else return i.lanes=t.lanes,fn(t,i,d)}return Du(t,i,o,u,d)}function yp(t,i,o){var u=i.pendingProps,d=u.children,f=t!==null?t.memoizedState:null;if(u.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(ni,kt),kt|=o;else{if(!(o&1073741824))return t=f!==null?f.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Ie(ni,kt),kt|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=f!==null?f.baseLanes:o,Ie(ni,kt),kt|=u}else f!==null?(u=f.baseLanes|o,i.memoizedState=null):u=o,Ie(ni,kt),kt|=u;return ut(t,i,d,o),i.child}function vp(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Du(t,i,o,u,d){var f=mt(o)?ar:st.current;return f=qr(i,f),Jr(i,d),o=Cu(t,i,o,u,f,d),u=Iu(),t!==null&&!gt?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,fn(t,i,d)):(Le&&u&&lu(i),i.flags|=1,ut(t,i,o,d),i.child)}function wp(t,i,o,u,d){if(mt(o)){var f=!0;Oo(i)}else f=!1;if(Jr(i,d),i.stateNode===null)Yo(t,i),ap(i,o,u),xu(i,o,u,d),u=!0;else if(t===null){var g=i.stateNode,v=i.memoizedProps;g.props=v;var E=g.context,k=o.contextType;typeof k=="object"&&k!==null?k=Pt(k):(k=mt(o)?ar:st.current,k=qr(i,k));var D=o.getDerivedStateFromProps,M=typeof D=="function"||typeof g.getSnapshotBeforeUpdate=="function";M||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(v!==u||E!==k)&&up(i,g,u,k),Dn=!1;var O=i.memoizedState;g.state=O,Wo(i,u,g,d),E=i.memoizedState,v!==u||O!==E||pt.current||Dn?(typeof D=="function"&&(Pu(i,o,D,u),E=i.memoizedState),(v=Dn||lp(i,o,v,u,O,E,k))?(M||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(i.flags|=4194308)):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=E),g.props=u,g.state=E,g.context=k,u=v):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{g=i.stateNode,bh(t,i),v=i.memoizedProps,k=i.type===i.elementType?v:Ut(i.type,v),g.props=k,M=i.pendingProps,O=g.context,E=o.contextType,typeof E=="object"&&E!==null?E=Pt(E):(E=mt(o)?ar:st.current,E=qr(i,E));var B=o.getDerivedStateFromProps;(D=typeof B=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(v!==M||O!==E)&&up(i,g,u,E),Dn=!1,O=i.memoizedState,g.state=O,Wo(i,u,g,d);var $=i.memoizedState;v!==M||O!==$||pt.current||Dn?(typeof B=="function"&&(Pu(i,o,B,u),$=i.memoizedState),(k=Dn||lp(i,o,k,u,O,$,E)||!1)?(D||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(u,$,E),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(u,$,E)),typeof g.componentDidUpdate=="function"&&(i.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof g.componentDidUpdate!="function"||v===t.memoizedProps&&O===t.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&O===t.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=$),g.props=u,g.state=$,g.context=E,u=k):(typeof g.componentDidUpdate!="function"||v===t.memoizedProps&&O===t.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&O===t.memoizedState||(i.flags|=1024),u=!1)}return Mu(t,i,o,u,f,d)}function Mu(t,i,o,u,d,f){vp(t,i);var g=(i.flags&128)!==0;if(!u&&!g)return d&&Ih(i,o,!1),fn(t,i,f);u=i.stateNode,yw.current=i;var v=g&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,t!==null&&g?(i.child=Yr(i,t.child,null,f),i.child=Yr(i,null,v,f)):ut(t,i,v,f),i.memoizedState=u.state,d&&Ih(i,o,!0),i.child}function Ep(t){var i=t.stateNode;i.pendingContext?Sh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Sh(t,i.context,!1),yu(t,i.containerInfo)}function Ap(t,i,o,u,d){return Qr(),du(d),i.flags|=256,ut(t,i,o,u),i.child}var bu={dehydrated:null,treeContext:null,retryLane:0};function Fu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Sp(t,i,o){var u=i.pendingProps,d=De.current,f=!1,g=(i.flags&128)!==0,v;if((v=g)||(v=t!==null&&t.memoizedState===null?!1:(d&2)!==0),v?(f=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Ie(De,d&1),t===null)return cu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(i.mode&1?t.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(g=u.children,t=u.fallback,f?(u=i.mode,f=i.child,g={mode:"hidden",children:g},!(u&1)&&f!==null?(f.childLanes=0,f.pendingProps=g):f=al(g,u,0,null),t=yr(t,u,o,null),f.return=i,t.return=i,f.sibling=t,i.child=f,i.child.memoizedState=Fu(o),i.memoizedState=bu,t):Uu(i,g));if(d=t.memoizedState,d!==null&&(v=d.dehydrated,v!==null))return vw(t,i,g,u,v,d,o);if(f){f=u.fallback,g=i.mode,d=t.child,v=d.sibling;var E={mode:"hidden",children:u.children};return!(g&1)&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=E,i.deletions=null):(u=Wn(d,E),u.subtreeFlags=d.subtreeFlags&14680064),v!==null?f=Wn(v,f):(f=yr(f,g,o,null),f.flags|=2),f.return=i,u.return=i,u.sibling=f,i.child=u,u=f,f=i.child,g=t.child.memoizedState,g=g===null?Fu(o):{baseLanes:g.baseLanes|o,cachePool:null,transitions:g.transitions},f.memoizedState=g,f.childLanes=t.childLanes&~o,i.memoizedState=bu,u}return f=t.child,t=f.sibling,u=Wn(f,{mode:"visible",children:u.children}),!(i.mode&1)&&(u.lanes=o),u.return=i,u.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=u,i.memoizedState=null,u}function Uu(t,i){return i=al({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Qo(t,i,o,u){return u!==null&&du(u),Yr(i,t.child,null,o),t=Uu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function vw(t,i,o,u,d,f,g){if(o)return i.flags&256?(i.flags&=-257,u=Ou(Error(n(422))),Qo(t,i,g,u)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(f=u.fallback,d=i.mode,u=al({mode:"visible",children:u.children},d,0,null),f=yr(f,d,g,null),f.flags|=2,u.return=i,f.return=i,u.sibling=f,i.child=u,i.mode&1&&Yr(i,t.child,null,g),i.child.memoizedState=Fu(g),i.memoizedState=bu,f);if(!(i.mode&1))return Qo(t,i,g,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var v=u.dgst;return u=v,f=Error(n(419)),u=Ou(f,u,void 0),Qo(t,i,g,u)}if(v=(g&t.childLanes)!==0,gt||v){if(u=Ge,u!==null){switch(g&-g){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(u.suspendedLanes|g)?0:d,d!==0&&d!==f.retryLane&&(f.retryLane=d,cn(t,d),Wt(u,t,d,-1))}return ec(),u=Ou(Error(n(421))),Qo(t,i,g,u)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=Ow.bind(null,t),d._reactRetry=i,null):(t=f.treeContext,Tt=Pn(d.nextSibling),It=i,Le=!0,Ft=null,t!==null&&(Rt[Nt++]=an,Rt[Nt++]=un,Rt[Nt++]=ur,an=t.id,un=t.overflow,ur=i),i=Uu(i,u.children),i.flags|=4096,i)}function Cp(t,i,o){t.lanes|=i;var u=t.alternate;u!==null&&(u.lanes|=i),mu(t.return,i,o)}function zu(t,i,o,u,d){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(f.isBackwards=i,f.rendering=null,f.renderingStartTime=0,f.last=u,f.tail=o,f.tailMode=d)}function Ip(t,i,o){var u=i.pendingProps,d=u.revealOrder,f=u.tail;if(ut(t,i,u.children,o),u=De.current,u&2)u=u&1|2,i.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Cp(t,o,i);else if(t.tag===19)Cp(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(Ie(De,u),!(i.mode&1))i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)t=o.alternate,t!==null&&Bo(t)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),zu(i,!1,d,o,f);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Bo(t)===null){i.child=d;break}t=d.sibling,d.sibling=o,o=d,d=t}zu(i,!0,o,null,f);break;case"together":zu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Yo(t,i){!(i.mode&1)&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function fn(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),pr|=i.lanes,!(o&i.childLanes))return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=Wn(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=Wn(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function ww(t,i,o){switch(i.tag){case 3:Ep(i),Qr();break;case 5:zh(i);break;case 1:mt(i.type)&&Oo(i);break;case 4:yu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;Ie(Uo,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Ie(De,De.current&1),i.flags|=128,null):o&i.child.childLanes?Sp(t,i,o):(Ie(De,De.current&1),t=fn(t,i,o),t!==null?t.sibling:null);Ie(De,De.current&1);break;case 19:if(u=(o&i.childLanes)!==0,t.flags&128){if(u)return Ip(t,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ie(De,De.current),u)break;return null;case 22:case 23:return i.lanes=0,yp(t,i,o)}return fn(t,i,o)}var Tp,ju,kp,Rp;Tp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},ju=function(){},kp=function(t,i,o,u){var d=t.memoizedProps;if(d!==u){t=i.stateNode,fr(Kt.current);var f=null;switch(o){case"input":d=ma(t,d),u=ma(t,u),f=[];break;case"select":d=V({},d,{value:void 0}),u=V({},u,{value:void 0}),f=[];break;case"textarea":d=ya(t,d),u=ya(t,u),f=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=No)}wa(o,u);var g;o=null;for(k in d)if(!u.hasOwnProperty(k)&&d.hasOwnProperty(k)&&d[k]!=null)if(k==="style"){var v=d[k];for(g in v)v.hasOwnProperty(g)&&(o||(o={}),o[g]="")}else k!=="dangerouslySetInnerHTML"&&k!=="children"&&k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&k!=="autoFocus"&&(l.hasOwnProperty(k)?f||(f=[]):(f=f||[]).push(k,null));for(k in u){var E=u[k];if(v=d!=null?d[k]:void 0,u.hasOwnProperty(k)&&E!==v&&(E!=null||v!=null))if(k==="style")if(v){for(g in v)!v.hasOwnProperty(g)||E&&E.hasOwnProperty(g)||(o||(o={}),o[g]="");for(g in E)E.hasOwnProperty(g)&&v[g]!==E[g]&&(o||(o={}),o[g]=E[g])}else o||(f||(f=[]),f.push(k,o)),o=E;else k==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,v=v?v.__html:void 0,E!=null&&v!==E&&(f=f||[]).push(k,E)):k==="children"?typeof E!="string"&&typeof E!="number"||(f=f||[]).push(k,""+E):k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&(l.hasOwnProperty(k)?(E!=null&&k==="onScroll"&&Re("scroll",t),f||v===E||(f=[])):(f=f||[]).push(k,E))}o&&(f=f||[]).push("style",o);var k=f;(i.updateQueue=k)&&(i.flags|=4)}},Rp=function(t,i,o,u){o!==u&&(i.flags|=4)};function us(t,i){if(!Le)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function lt(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,u=0;if(i)for(var d=t.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=u,t.childLanes=o,i}function Ew(t,i,o){var u=i.pendingProps;switch(au(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(i),null;case 1:return mt(i.type)&&xo(),lt(i),null;case 3:return u=i.stateNode,Zr(),Ne(pt),Ne(st),Eu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(bo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,Ft!==null&&(Xu(Ft),Ft=null))),ju(t,i),lt(i),null;case 5:vu(i);var d=fr(is.current);if(o=i.type,t!==null&&i.stateNode!=null)kp(t,i,o,u,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(n(166));return lt(i),null}if(t=fr(Kt.current),bo(i)){u=i.stateNode,o=i.type;var f=i.memoizedProps;switch(u[Gt]=i,u[Zi]=f,t=(i.mode&1)!==0,o){case"dialog":Re("cancel",u),Re("close",u);break;case"iframe":case"object":case"embed":Re("load",u);break;case"video":case"audio":for(d=0;d<Yi.length;d++)Re(Yi[d],u);break;case"source":Re("error",u);break;case"img":case"image":case"link":Re("error",u),Re("load",u);break;case"details":Re("toggle",u);break;case"input":af(u,f),Re("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!f.multiple},Re("invalid",u);break;case"textarea":df(u,f),Re("invalid",u)}wa(o,f),d=null;for(var g in f)if(f.hasOwnProperty(g)){var v=f[g];g==="children"?typeof v=="string"?u.textContent!==v&&(f.suppressHydrationWarning!==!0&&Ro(u.textContent,v,t),d=["children",v]):typeof v=="number"&&u.textContent!==""+v&&(f.suppressHydrationWarning!==!0&&Ro(u.textContent,v,t),d=["children",""+v]):l.hasOwnProperty(g)&&v!=null&&g==="onScroll"&&Re("scroll",u)}switch(o){case"input":io(u),cf(u,f,!0);break;case"textarea":io(u),hf(u);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(u.onclick=No)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{g=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=pf(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=g.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=g.createElement(o,{is:u.is}):(t=g.createElement(o),o==="select"&&(g=t,u.multiple?g.multiple=!0:u.size&&(g.size=u.size))):t=g.createElementNS(t,o),t[Gt]=i,t[Zi]=u,Tp(t,i,!1,!1),i.stateNode=t;e:{switch(g=Ea(o,u),o){case"dialog":Re("cancel",t),Re("close",t),d=u;break;case"iframe":case"object":case"embed":Re("load",t),d=u;break;case"video":case"audio":for(d=0;d<Yi.length;d++)Re(Yi[d],t);d=u;break;case"source":Re("error",t),d=u;break;case"img":case"image":case"link":Re("error",t),Re("load",t),d=u;break;case"details":Re("toggle",t),d=u;break;case"input":af(t,u),d=ma(t,u),Re("invalid",t);break;case"option":d=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},d=V({},u,{value:void 0}),Re("invalid",t);break;case"textarea":df(t,u),d=ya(t,u),Re("invalid",t);break;default:d=u}wa(o,d),v=d;for(f in v)if(v.hasOwnProperty(f)){var E=v[f];f==="style"?_f(t,E):f==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,E!=null&&mf(t,E)):f==="children"?typeof E=="string"?(o!=="textarea"||E!=="")&&xi(t,E):typeof E=="number"&&xi(t,""+E):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(l.hasOwnProperty(f)?E!=null&&f==="onScroll"&&Re("scroll",t):E!=null&&X(t,f,E,g))}switch(o){case"input":io(t),cf(t,u,!1);break;case"textarea":io(t),hf(t);break;case"option":u.value!=null&&t.setAttribute("value",""+ve(u.value));break;case"select":t.multiple=!!u.multiple,f=u.value,f!=null?Dr(t,!!u.multiple,f,!1):u.defaultValue!=null&&Dr(t,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=No)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return lt(i),null;case 6:if(t&&i.stateNode!=null)Rp(t,i,t.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(n(166));if(o=fr(is.current),fr(Kt.current),bo(i)){if(u=i.stateNode,o=i.memoizedProps,u[Gt]=i,(f=u.nodeValue!==o)&&(t=It,t!==null))switch(t.tag){case 3:Ro(u.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ro(u.nodeValue,o,(t.mode&1)!==0)}f&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[Gt]=i,i.stateNode=u}return lt(i),null;case 13:if(Ne(De),u=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Le&&Tt!==null&&i.mode&1&&!(i.flags&128))xh(),Qr(),i.flags|=98560,f=!1;else if(f=bo(i),u!==null&&u.dehydrated!==null){if(t===null){if(!f)throw Error(n(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(n(317));f[Gt]=i}else Qr(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;lt(i),f=!1}else Ft!==null&&(Xu(Ft),Ft=null),f=!0;if(!f)return i.flags&65536?i:null}return i.flags&128?(i.lanes=o,i):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(i.child.flags|=8192,i.mode&1&&(t===null||De.current&1?$e===0&&($e=3):ec())),i.updateQueue!==null&&(i.flags|=4),lt(i),null);case 4:return Zr(),ju(t,i),t===null&&Xi(i.stateNode.containerInfo),lt(i),null;case 10:return pu(i.type._context),lt(i),null;case 17:return mt(i.type)&&xo(),lt(i),null;case 19:if(Ne(De),f=i.memoizedState,f===null)return lt(i),null;if(u=(i.flags&128)!==0,g=f.rendering,g===null)if(u)us(f,!1);else{if($e!==0||t!==null&&t.flags&128)for(t=i.child;t!==null;){if(g=Bo(t),g!==null){for(i.flags|=128,us(f,!1),u=g.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)f=o,t=u,f.flags&=14680066,g=f.alternate,g===null?(f.childLanes=0,f.lanes=t,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,t=g.dependencies,f.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Ie(De,De.current&1|2),i.child}t=t.sibling}f.tail!==null&&We()>ri&&(i.flags|=128,u=!0,us(f,!1),i.lanes=4194304)}else{if(!u)if(t=Bo(g),t!==null){if(i.flags|=128,u=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),us(f,!0),f.tail===null&&f.tailMode==="hidden"&&!g.alternate&&!Le)return lt(i),null}else 2*We()-f.renderingStartTime>ri&&o!==1073741824&&(i.flags|=128,u=!0,us(f,!1),i.lanes=4194304);f.isBackwards?(g.sibling=i.child,i.child=g):(o=f.last,o!==null?o.sibling=g:i.child=g,f.last=g)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=We(),i.sibling=null,o=De.current,Ie(De,u?o&1|2:o&1),i):(lt(i),null);case 22:case 23:return Zu(),u=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(i.flags|=8192),u&&i.mode&1?kt&1073741824&&(lt(i),i.subtreeFlags&6&&(i.flags|=8192)):lt(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Aw(t,i){switch(au(i),i.tag){case 1:return mt(i.type)&&xo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Zr(),Ne(pt),Ne(st),Eu(),t=i.flags,t&65536&&!(t&128)?(i.flags=t&-65537|128,i):null;case 5:return vu(i),null;case 13:if(Ne(De),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Qr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ne(De),null;case 4:return Zr(),null;case 10:return pu(i.type._context),null;case 22:case 23:return Zu(),null;case 24:return null;default:return null}}var Xo=!1,at=!1,Sw=typeof WeakSet=="function"?WeakSet:Set,H=null;function ti(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Fe(t,i,u)}else o.current=null}function Wu(t,i,o){try{o()}catch(u){Fe(t,i,u)}}var Np=!1;function Cw(t,i){if(Za=_o,t=lh(),$a(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,f=u.focusNode;u=u.focusOffset;try{o.nodeType,f.nodeType}catch{o=null;break e}var g=0,v=-1,E=-1,k=0,D=0,M=t,O=null;t:for(;;){for(var B;M!==o||d!==0&&M.nodeType!==3||(v=g+d),M!==f||u!==0&&M.nodeType!==3||(E=g+u),M.nodeType===3&&(g+=M.nodeValue.length),(B=M.firstChild)!==null;)O=M,M=B;for(;;){if(M===t)break t;if(O===o&&++k===d&&(v=g),O===f&&++D===u&&(E=g),(B=M.nextSibling)!==null)break;M=O,O=M.parentNode}M=B}o=v===-1||E===-1?null:{start:v,end:E}}else o=null}o=o||{start:0,end:0}}else o=null;for(eu={focusedElem:t,selectionRange:o},_o=!1,H=i;H!==null;)if(i=H,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,H=t;else for(;H!==null;){i=H;try{var $=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if($!==null){var G=$.memoizedProps,Be=$.memoizedState,C=i.stateNode,A=C.getSnapshotBeforeUpdate(i.elementType===i.type?G:Ut(i.type,G),Be);C.__reactInternalSnapshotBeforeUpdate=A}break;case 3:var I=i.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(F){Fe(i,i.return,F)}if(t=i.sibling,t!==null){t.return=i.return,H=t;break}H=i.return}return $=Np,Np=!1,$}function cs(t,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&t)===t){var f=d.destroy;d.destroy=void 0,f!==void 0&&Wu(i,o,f)}d=d.next}while(d!==u)}}function Jo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function Bu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Pp(t){var i=t.alternate;i!==null&&(t.alternate=null,Pp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Gt],delete i[Zi],delete i[iu],delete i[ow],delete i[lw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function xp(t){return t.tag===5||t.tag===3||t.tag===4}function Op(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||xp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vu(t,i,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=No));else if(u!==4&&(t=t.child,t!==null))for(Vu(t,i,o),t=t.sibling;t!==null;)Vu(t,i,o),t=t.sibling}function Hu(t,i,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for(Hu(t,i,o),t=t.sibling;t!==null;)Hu(t,i,o),t=t.sibling}var tt=null,zt=!1;function bn(t,i,o){for(o=o.child;o!==null;)Lp(t,i,o),o=o.sibling}function Lp(t,i,o){if(qt&&typeof qt.onCommitFiberUnmount=="function")try{qt.onCommitFiberUnmount(co,o)}catch{}switch(o.tag){case 5:at||ti(o,i);case 6:var u=tt,d=zt;tt=null,bn(t,i,o),tt=u,zt=d,tt!==null&&(zt?(t=tt,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):tt.removeChild(o.stateNode));break;case 18:tt!==null&&(zt?(t=tt,o=o.stateNode,t.nodeType===8?ru(t.parentNode,o):t.nodeType===1&&ru(t,o),Bi(t)):ru(tt,o.stateNode));break;case 4:u=tt,d=zt,tt=o.stateNode.containerInfo,zt=!0,bn(t,i,o),tt=u,zt=d;break;case 0:case 11:case 14:case 15:if(!at&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var f=d,g=f.destroy;f=f.tag,g!==void 0&&(f&2||f&4)&&Wu(o,i,g),d=d.next}while(d!==u)}bn(t,i,o);break;case 1:if(!at&&(ti(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(v){Fe(o,i,v)}bn(t,i,o);break;case 21:bn(t,i,o);break;case 22:o.mode&1?(at=(u=at)||o.memoizedState!==null,bn(t,i,o),at=u):bn(t,i,o);break;default:bn(t,i,o)}}function Dp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new Sw),i.forEach(function(u){var d=Lw.bind(null,t,u);o.has(u)||(o.add(u),u.then(d,d))})}}function jt(t,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];try{var f=t,g=i,v=g;e:for(;v!==null;){switch(v.tag){case 5:tt=v.stateNode,zt=!1;break e;case 3:tt=v.stateNode.containerInfo,zt=!0;break e;case 4:tt=v.stateNode.containerInfo,zt=!0;break e}v=v.return}if(tt===null)throw Error(n(160));Lp(f,g,d),tt=null,zt=!1;var E=d.alternate;E!==null&&(E.return=null),d.return=null}catch(k){Fe(d,i,k)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Mp(i,t),i=i.sibling}function Mp(t,i){var o=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(jt(i,t),Yt(t),u&4){try{cs(3,t,t.return),Jo(3,t)}catch(G){Fe(t,t.return,G)}try{cs(5,t,t.return)}catch(G){Fe(t,t.return,G)}}break;case 1:jt(i,t),Yt(t),u&512&&o!==null&&ti(o,o.return);break;case 5:if(jt(i,t),Yt(t),u&512&&o!==null&&ti(o,o.return),t.flags&32){var d=t.stateNode;try{xi(d,"")}catch(G){Fe(t,t.return,G)}}if(u&4&&(d=t.stateNode,d!=null)){var f=t.memoizedProps,g=o!==null?o.memoizedProps:f,v=t.type,E=t.updateQueue;if(t.updateQueue=null,E!==null)try{v==="input"&&f.type==="radio"&&f.name!=null&&uf(d,f),Ea(v,g);var k=Ea(v,f);for(g=0;g<E.length;g+=2){var D=E[g],M=E[g+1];D==="style"?_f(d,M):D==="dangerouslySetInnerHTML"?mf(d,M):D==="children"?xi(d,M):X(d,D,M,k)}switch(v){case"input":ga(d,f);break;case"textarea":ff(d,f);break;case"select":var O=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!f.multiple;var B=f.value;B!=null?Dr(d,!!f.multiple,B,!1):O!==!!f.multiple&&(f.defaultValue!=null?Dr(d,!!f.multiple,f.defaultValue,!0):Dr(d,!!f.multiple,f.multiple?[]:"",!1))}d[Zi]=f}catch(G){Fe(t,t.return,G)}}break;case 6:if(jt(i,t),Yt(t),u&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,f=t.memoizedProps;try{d.nodeValue=f}catch(G){Fe(t,t.return,G)}}break;case 3:if(jt(i,t),Yt(t),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Bi(i.containerInfo)}catch(G){Fe(t,t.return,G)}break;case 4:jt(i,t),Yt(t);break;case 13:jt(i,t),Yt(t),d=t.child,d.flags&8192&&(f=d.memoizedState!==null,d.stateNode.isHidden=f,!f||d.alternate!==null&&d.alternate.memoizedState!==null||(Gu=We())),u&4&&Dp(t);break;case 22:if(D=o!==null&&o.memoizedState!==null,t.mode&1?(at=(k=at)||D,jt(i,t),at=k):jt(i,t),Yt(t),u&8192){if(k=t.memoizedState!==null,(t.stateNode.isHidden=k)&&!D&&t.mode&1)for(H=t,D=t.child;D!==null;){for(M=H=D;H!==null;){switch(O=H,B=O.child,O.tag){case 0:case 11:case 14:case 15:cs(4,O,O.return);break;case 1:ti(O,O.return);var $=O.stateNode;if(typeof $.componentWillUnmount=="function"){u=O,o=O.return;try{i=u,$.props=i.memoizedProps,$.state=i.memoizedState,$.componentWillUnmount()}catch(G){Fe(u,o,G)}}break;case 5:ti(O,O.return);break;case 22:if(O.memoizedState!==null){Up(M);continue}}B!==null?(B.return=O,H=B):Up(M)}D=D.sibling}e:for(D=null,M=t;;){if(M.tag===5){if(D===null){D=M;try{d=M.stateNode,k?(f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(v=M.stateNode,E=M.memoizedProps.style,g=E!=null&&E.hasOwnProperty("display")?E.display:null,v.style.display=gf("display",g))}catch(G){Fe(t,t.return,G)}}}else if(M.tag===6){if(D===null)try{M.stateNode.nodeValue=k?"":M.memoizedProps}catch(G){Fe(t,t.return,G)}}else if((M.tag!==22&&M.tag!==23||M.memoizedState===null||M===t)&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===t)break e;for(;M.sibling===null;){if(M.return===null||M.return===t)break e;D===M&&(D=null),M=M.return}D===M&&(D=null),M.sibling.return=M.return,M=M.sibling}}break;case 19:jt(i,t),Yt(t),u&4&&Dp(t);break;case 21:break;default:jt(i,t),Yt(t)}}function Yt(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(xp(o)){var u=o;break e}o=o.return}throw Error(n(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(xi(d,""),u.flags&=-33);var f=Op(t);Hu(t,f,d);break;case 3:case 4:var g=u.stateNode.containerInfo,v=Op(t);Vu(t,v,g);break;default:throw Error(n(161))}}catch(E){Fe(t,t.return,E)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Iw(t,i,o){H=t,bp(t)}function bp(t,i,o){for(var u=(t.mode&1)!==0;H!==null;){var d=H,f=d.child;if(d.tag===22&&u){var g=d.memoizedState!==null||Xo;if(!g){var v=d.alternate,E=v!==null&&v.memoizedState!==null||at;v=Xo;var k=at;if(Xo=g,(at=E)&&!k)for(H=d;H!==null;)g=H,E=g.child,g.tag===22&&g.memoizedState!==null?zp(d):E!==null?(E.return=g,H=E):zp(d);for(;f!==null;)H=f,bp(f),f=f.sibling;H=d,Xo=v,at=k}Fp(t)}else d.subtreeFlags&8772&&f!==null?(f.return=d,H=f):Fp(t)}}function Fp(t){for(;H!==null;){var i=H;if(i.flags&8772){var o=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:at||Jo(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!at)if(o===null)u.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:Ut(i.type,o.memoizedProps);u.componentDidUpdate(d,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var f=i.updateQueue;f!==null&&Uh(i,f,u);break;case 3:var g=i.updateQueue;if(g!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Uh(i,g,o)}break;case 5:var v=i.stateNode;if(o===null&&i.flags&4){o=v;var E=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":E.autoFocus&&o.focus();break;case"img":E.src&&(o.src=E.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var k=i.alternate;if(k!==null){var D=k.memoizedState;if(D!==null){var M=D.dehydrated;M!==null&&Bi(M)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}at||i.flags&512&&Bu(i)}catch(O){Fe(i,i.return,O)}}if(i===t){H=null;break}if(o=i.sibling,o!==null){o.return=i.return,H=o;break}H=i.return}}function Up(t){for(;H!==null;){var i=H;if(i===t){H=null;break}var o=i.sibling;if(o!==null){o.return=i.return,H=o;break}H=i.return}}function zp(t){for(;H!==null;){var i=H;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Jo(4,i)}catch(E){Fe(i,o,E)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(E){Fe(i,d,E)}}var f=i.return;try{Bu(i)}catch(E){Fe(i,f,E)}break;case 5:var g=i.return;try{Bu(i)}catch(E){Fe(i,g,E)}}}catch(E){Fe(i,i.return,E)}if(i===t){H=null;break}var v=i.sibling;if(v!==null){v.return=i.return,H=v;break}H=i.return}}var Tw=Math.ceil,Zo=re.ReactCurrentDispatcher,$u=re.ReactCurrentOwner,Ot=re.ReactCurrentBatchConfig,fe=0,Ge=null,Ve=null,nt=0,kt=0,ni=xn(0),$e=0,ds=null,pr=0,el=0,qu=0,fs=null,_t=null,Gu=0,ri=1/0,hn=null,tl=!1,Ku=null,Fn=null,nl=!1,Un=null,rl=0,hs=0,Qu=null,il=-1,sl=0;function ct(){return fe&6?We():il!==-1?il:il=We()}function zn(t){return t.mode&1?fe&2&&nt!==0?nt&-nt:uw.transition!==null?(sl===0&&(sl=Of()),sl):(t=we,t!==0||(t=window.event,t=t===void 0?16:Wf(t.type)),t):1}function Wt(t,i,o,u){if(50<hs)throw hs=0,Qu=null,Error(n(185));Fi(t,o,u),(!(fe&2)||t!==Ge)&&(t===Ge&&(!(fe&2)&&(el|=o),$e===4&&jn(t,nt)),yt(t,u),o===1&&fe===0&&!(i.mode&1)&&(ri=We()+500,Lo&&Ln()))}function yt(t,i){var o=t.callbackNode;uv(t,i);var u=po(t,t===Ge?nt:0);if(u===0)o!==null&&Nf(o),t.callbackNode=null,t.callbackPriority=0;else if(i=u&-u,t.callbackPriority!==i){if(o!=null&&Nf(o),i===1)t.tag===0?aw(Wp.bind(null,t)):Th(Wp.bind(null,t)),iw(function(){!(fe&6)&&Ln()}),o=null;else{switch(Lf(u)){case 1:o=Ra;break;case 4:o=Pf;break;case 16:o=uo;break;case 536870912:o=xf;break;default:o=uo}o=Qp(o,jp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function jp(t,i){if(il=-1,sl=0,fe&6)throw Error(n(327));var o=t.callbackNode;if(ii()&&t.callbackNode!==o)return null;var u=po(t,t===Ge?nt:0);if(u===0)return null;if(u&30||u&t.expiredLanes||i)i=ol(t,u);else{i=u;var d=fe;fe|=2;var f=Vp();(Ge!==t||nt!==i)&&(hn=null,ri=We()+500,gr(t,i));do try{Nw();break}catch(v){Bp(t,v)}while(!0);hu(),Zo.current=f,fe=d,Ve!==null?i=0:(Ge=null,nt=0,i=$e)}if(i!==0){if(i===2&&(d=Na(t),d!==0&&(u=d,i=Yu(t,d))),i===1)throw o=ds,gr(t,0),jn(t,u),yt(t,We()),o;if(i===6)jn(t,u);else{if(d=t.current.alternate,!(u&30)&&!kw(d)&&(i=ol(t,u),i===2&&(f=Na(t),f!==0&&(u=f,i=Yu(t,f))),i===1))throw o=ds,gr(t,0),jn(t,u),yt(t,We()),o;switch(t.finishedWork=d,t.finishedLanes=u,i){case 0:case 1:throw Error(n(345));case 2:_r(t,_t,hn);break;case 3:if(jn(t,u),(u&130023424)===u&&(i=Gu+500-We(),10<i)){if(po(t,0)!==0)break;if(d=t.suspendedLanes,(d&u)!==u){ct(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=nu(_r.bind(null,t,_t,hn),i);break}_r(t,_t,hn);break;case 4:if(jn(t,u),(u&4194240)===u)break;for(i=t.eventTimes,d=-1;0<u;){var g=31-Mt(u);f=1<<g,g=i[g],g>d&&(d=g),u&=~f}if(u=d,u=We()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Tw(u/1960))-u,10<u){t.timeoutHandle=nu(_r.bind(null,t,_t,hn),u);break}_r(t,_t,hn);break;case 5:_r(t,_t,hn);break;default:throw Error(n(329))}}}return yt(t,We()),t.callbackNode===o?jp.bind(null,t):null}function Yu(t,i){var o=fs;return t.current.memoizedState.isDehydrated&&(gr(t,i).flags|=256),t=ol(t,i),t!==2&&(i=_t,_t=o,i!==null&&Xu(i)),t}function Xu(t){_t===null?_t=t:_t.push.apply(_t,t)}function kw(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var d=o[u],f=d.getSnapshot;d=d.value;try{if(!bt(f(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function jn(t,i){for(i&=~qu,i&=~el,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-Mt(i),u=1<<o;t[o]=-1,i&=~u}}function Wp(t){if(fe&6)throw Error(n(327));ii();var i=po(t,0);if(!(i&1))return yt(t,We()),null;var o=ol(t,i);if(t.tag!==0&&o===2){var u=Na(t);u!==0&&(i=u,o=Yu(t,u))}if(o===1)throw o=ds,gr(t,0),jn(t,i),yt(t,We()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,_r(t,_t,hn),yt(t,We()),null}function Ju(t,i){var o=fe;fe|=1;try{return t(i)}finally{fe=o,fe===0&&(ri=We()+500,Lo&&Ln())}}function mr(t){Un!==null&&Un.tag===0&&!(fe&6)&&ii();var i=fe;fe|=1;var o=Ot.transition,u=we;try{if(Ot.transition=null,we=1,t)return t()}finally{we=u,Ot.transition=o,fe=i,!(fe&6)&&Ln()}}function Zu(){kt=ni.current,Ne(ni)}function gr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,rw(o)),Ve!==null)for(o=Ve.return;o!==null;){var u=o;switch(au(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&xo();break;case 3:Zr(),Ne(pt),Ne(st),Eu();break;case 5:vu(u);break;case 4:Zr();break;case 13:Ne(De);break;case 19:Ne(De);break;case 10:pu(u.type._context);break;case 22:case 23:Zu()}o=o.return}if(Ge=t,Ve=t=Wn(t.current,null),nt=kt=i,$e=0,ds=null,qu=el=pr=0,_t=fs=null,dr!==null){for(i=0;i<dr.length;i++)if(o=dr[i],u=o.interleaved,u!==null){o.interleaved=null;var d=u.next,f=o.pending;if(f!==null){var g=f.next;f.next=d,u.next=g}o.pending=u}dr=null}return t}function Bp(t,i){do{var o=Ve;try{if(hu(),Vo.current=Go,Ho){for(var u=Me.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Ho=!1}if(hr=0,qe=He=Me=null,ss=!1,os=0,$u.current=null,o===null||o.return===null){$e=1,ds=i,Ve=null;break}e:{var f=t,g=o.return,v=o,E=i;if(i=nt,v.flags|=32768,E!==null&&typeof E=="object"&&typeof E.then=="function"){var k=E,D=v,M=D.tag;if(!(D.mode&1)&&(M===0||M===11||M===15)){var O=D.alternate;O?(D.updateQueue=O.updateQueue,D.memoizedState=O.memoizedState,D.lanes=O.lanes):(D.updateQueue=null,D.memoizedState=null)}var B=hp(g);if(B!==null){B.flags&=-257,pp(B,g,v,f,i),B.mode&1&&fp(f,k,i),i=B,E=k;var $=i.updateQueue;if($===null){var G=new Set;G.add(E),i.updateQueue=G}else $.add(E);break e}else{if(!(i&1)){fp(f,k,i),ec();break e}E=Error(n(426))}}else if(Le&&v.mode&1){var Be=hp(g);if(Be!==null){!(Be.flags&65536)&&(Be.flags|=256),pp(Be,g,v,f,i),du(ei(E,v));break e}}f=E=ei(E,v),$e!==4&&($e=2),fs===null?fs=[f]:fs.push(f),f=g;do{switch(f.tag){case 3:f.flags|=65536,i&=-i,f.lanes|=i;var C=cp(f,E,i);Fh(f,C);break e;case 1:v=E;var A=f.type,I=f.stateNode;if(!(f.flags&128)&&(typeof A.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(Fn===null||!Fn.has(I)))){f.flags|=65536,i&=-i,f.lanes|=i;var F=dp(f,v,i);Fh(f,F);break e}}f=f.return}while(f!==null)}$p(o)}catch(K){i=K,Ve===o&&o!==null&&(Ve=o=o.return);continue}break}while(!0)}function Vp(){var t=Zo.current;return Zo.current=Go,t===null?Go:t}function ec(){($e===0||$e===3||$e===2)&&($e=4),Ge===null||!(pr&268435455)&&!(el&268435455)||jn(Ge,nt)}function ol(t,i){var o=fe;fe|=2;var u=Vp();(Ge!==t||nt!==i)&&(hn=null,gr(t,i));do try{Rw();break}catch(d){Bp(t,d)}while(!0);if(hu(),fe=o,Zo.current=u,Ve!==null)throw Error(n(261));return Ge=null,nt=0,$e}function Rw(){for(;Ve!==null;)Hp(Ve)}function Nw(){for(;Ve!==null&&!ev();)Hp(Ve)}function Hp(t){var i=Kp(t.alternate,t,kt);t.memoizedProps=t.pendingProps,i===null?$p(t):Ve=i,$u.current=null}function $p(t){var i=t;do{var o=i.alternate;if(t=i.return,i.flags&32768){if(o=Aw(o,i),o!==null){o.flags&=32767,Ve=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{$e=6,Ve=null;return}}else if(o=Ew(o,i,kt),o!==null){Ve=o;return}if(i=i.sibling,i!==null){Ve=i;return}Ve=i=t}while(i!==null);$e===0&&($e=5)}function _r(t,i,o){var u=we,d=Ot.transition;try{Ot.transition=null,we=1,Pw(t,i,o,u)}finally{Ot.transition=d,we=u}return null}function Pw(t,i,o,u){do ii();while(Un!==null);if(fe&6)throw Error(n(327));o=t.finishedWork;var d=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var f=o.lanes|o.childLanes;if(cv(t,f),t===Ge&&(Ve=Ge=null,nt=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||nl||(nl=!0,Qp(uo,function(){return ii(),null})),f=(o.flags&15990)!==0,o.subtreeFlags&15990||f){f=Ot.transition,Ot.transition=null;var g=we;we=1;var v=fe;fe|=4,$u.current=null,Cw(t,o),Mp(o,t),Yv(eu),_o=!!Za,eu=Za=null,t.current=o,Iw(o),tv(),fe=v,we=g,Ot.transition=f}else t.current=o;if(nl&&(nl=!1,Un=t,rl=d),f=t.pendingLanes,f===0&&(Fn=null),iv(o.stateNode),yt(t,We()),i!==null)for(u=t.onRecoverableError,o=0;o<i.length;o++)d=i[o],u(d.value,{componentStack:d.stack,digest:d.digest});if(tl)throw tl=!1,t=Ku,Ku=null,t;return rl&1&&t.tag!==0&&ii(),f=t.pendingLanes,f&1?t===Qu?hs++:(hs=0,Qu=t):hs=0,Ln(),null}function ii(){if(Un!==null){var t=Lf(rl),i=Ot.transition,o=we;try{if(Ot.transition=null,we=16>t?16:t,Un===null)var u=!1;else{if(t=Un,Un=null,rl=0,fe&6)throw Error(n(331));var d=fe;for(fe|=4,H=t.current;H!==null;){var f=H,g=f.child;if(H.flags&16){var v=f.deletions;if(v!==null){for(var E=0;E<v.length;E++){var k=v[E];for(H=k;H!==null;){var D=H;switch(D.tag){case 0:case 11:case 15:cs(8,D,f)}var M=D.child;if(M!==null)M.return=D,H=M;else for(;H!==null;){D=H;var O=D.sibling,B=D.return;if(Pp(D),D===k){H=null;break}if(O!==null){O.return=B,H=O;break}H=B}}}var $=f.alternate;if($!==null){var G=$.child;if(G!==null){$.child=null;do{var Be=G.sibling;G.sibling=null,G=Be}while(G!==null)}}H=f}}if(f.subtreeFlags&2064&&g!==null)g.return=f,H=g;else e:for(;H!==null;){if(f=H,f.flags&2048)switch(f.tag){case 0:case 11:case 15:cs(9,f,f.return)}var C=f.sibling;if(C!==null){C.return=f.return,H=C;break e}H=f.return}}var A=t.current;for(H=A;H!==null;){g=H;var I=g.child;if(g.subtreeFlags&2064&&I!==null)I.return=g,H=I;else e:for(g=A;H!==null;){if(v=H,v.flags&2048)try{switch(v.tag){case 0:case 11:case 15:Jo(9,v)}}catch(K){Fe(v,v.return,K)}if(v===g){H=null;break e}var F=v.sibling;if(F!==null){F.return=v.return,H=F;break e}H=v.return}}if(fe=d,Ln(),qt&&typeof qt.onPostCommitFiberRoot=="function")try{qt.onPostCommitFiberRoot(co,t)}catch{}u=!0}return u}finally{we=o,Ot.transition=i}}return!1}function qp(t,i,o){i=ei(o,i),i=cp(t,i,1),t=Mn(t,i,1),i=ct(),t!==null&&(Fi(t,1,i),yt(t,i))}function Fe(t,i,o){if(t.tag===3)qp(t,t,o);else for(;i!==null;){if(i.tag===3){qp(i,t,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Fn===null||!Fn.has(u))){t=ei(o,t),t=dp(i,t,1),i=Mn(i,t,1),t=ct(),i!==null&&(Fi(i,1,t),yt(i,t));break}}i=i.return}}function xw(t,i,o){var u=t.pingCache;u!==null&&u.delete(i),i=ct(),t.pingedLanes|=t.suspendedLanes&o,Ge===t&&(nt&o)===o&&($e===4||$e===3&&(nt&130023424)===nt&&500>We()-Gu?gr(t,0):qu|=o),yt(t,i)}function Gp(t,i){i===0&&(t.mode&1?(i=ho,ho<<=1,!(ho&130023424)&&(ho=4194304)):i=1);var o=ct();t=cn(t,i),t!==null&&(Fi(t,i,o),yt(t,o))}function Ow(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Gp(t,o)}function Lw(t,i){var o=0;switch(t.tag){case 13:var u=t.stateNode,d=t.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(i),Gp(t,o)}var Kp;Kp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||pt.current)gt=!0;else{if(!(t.lanes&o)&&!(i.flags&128))return gt=!1,ww(t,i,o);gt=!!(t.flags&131072)}else gt=!1,Le&&i.flags&1048576&&kh(i,Mo,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Yo(t,i),t=i.pendingProps;var d=qr(i,st.current);Jr(i,o),d=Cu(null,i,u,t,d,o);var f=Iu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,mt(u)?(f=!0,Oo(i)):f=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,_u(i),d.updater=Ko,i.stateNode=d,d._reactInternals=i,xu(i,u,t,o),i=Mu(null,i,u,!0,f,o)):(i.tag=0,Le&&f&&lu(i),ut(null,i,d,o),i=i.child),i;case 16:u=i.elementType;e:{switch(Yo(t,i),t=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=Mw(u),t=Ut(u,t),d){case 0:i=Du(null,i,u,t,o);break e;case 1:i=wp(null,i,u,t,o);break e;case 11:i=mp(null,i,u,t,o);break e;case 14:i=gp(null,i,u,Ut(u.type,t),o);break e}throw Error(n(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Ut(u,d),Du(t,i,u,d,o);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Ut(u,d),wp(t,i,u,d,o);case 3:e:{if(Ep(i),t===null)throw Error(n(387));u=i.pendingProps,f=i.memoizedState,d=f.element,bh(t,i),Wo(i,u,null,o);var g=i.memoizedState;if(u=g.element,f.isDehydrated)if(f={element:u,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},i.updateQueue.baseState=f,i.memoizedState=f,i.flags&256){d=ei(Error(n(423)),i),i=Ap(t,i,u,o,d);break e}else if(u!==d){d=ei(Error(n(424)),i),i=Ap(t,i,u,o,d);break e}else for(Tt=Pn(i.stateNode.containerInfo.firstChild),It=i,Le=!0,Ft=null,o=Dh(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Qr(),u===d){i=fn(t,i,o);break e}ut(t,i,u,o)}i=i.child}return i;case 5:return zh(i),t===null&&cu(i),u=i.type,d=i.pendingProps,f=t!==null?t.memoizedProps:null,g=d.children,tu(u,d)?g=null:f!==null&&tu(u,f)&&(i.flags|=32),vp(t,i),ut(t,i,g,o),i.child;case 6:return t===null&&cu(i),null;case 13:return Sp(t,i,o);case 4:return yu(i,i.stateNode.containerInfo),u=i.pendingProps,t===null?i.child=Yr(i,null,u,o):ut(t,i,u,o),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Ut(u,d),mp(t,i,u,d,o);case 7:return ut(t,i,i.pendingProps,o),i.child;case 8:return ut(t,i,i.pendingProps.children,o),i.child;case 12:return ut(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,f=i.memoizedProps,g=d.value,Ie(Uo,u._currentValue),u._currentValue=g,f!==null)if(bt(f.value,g)){if(f.children===d.children&&!pt.current){i=fn(t,i,o);break e}}else for(f=i.child,f!==null&&(f.return=i);f!==null;){var v=f.dependencies;if(v!==null){g=f.child;for(var E=v.firstContext;E!==null;){if(E.context===u){if(f.tag===1){E=dn(-1,o&-o),E.tag=2;var k=f.updateQueue;if(k!==null){k=k.shared;var D=k.pending;D===null?E.next=E:(E.next=D.next,D.next=E),k.pending=E}}f.lanes|=o,E=f.alternate,E!==null&&(E.lanes|=o),mu(f.return,o,i),v.lanes|=o;break}E=E.next}}else if(f.tag===10)g=f.type===i.type?null:f.child;else if(f.tag===18){if(g=f.return,g===null)throw Error(n(341));g.lanes|=o,v=g.alternate,v!==null&&(v.lanes|=o),mu(g,o,i),g=f.sibling}else g=f.child;if(g!==null)g.return=f;else for(g=f;g!==null;){if(g===i){g=null;break}if(f=g.sibling,f!==null){f.return=g.return,g=f;break}g=g.return}f=g}ut(t,i,d.children,o),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,Jr(i,o),d=Pt(d),u=u(d),i.flags|=1,ut(t,i,u,o),i.child;case 14:return u=i.type,d=Ut(u,i.pendingProps),d=Ut(u.type,d),gp(t,i,u,d,o);case 15:return _p(t,i,i.type,i.pendingProps,o);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Ut(u,d),Yo(t,i),i.tag=1,mt(u)?(t=!0,Oo(i)):t=!1,Jr(i,o),ap(i,u,d),xu(i,u,d,o),Mu(null,i,u,!0,t,o);case 19:return Ip(t,i,o);case 22:return yp(t,i,o)}throw Error(n(156,i.tag))};function Qp(t,i){return Rf(t,i)}function Dw(t,i,o,u){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(t,i,o,u){return new Dw(t,i,o,u)}function tc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Mw(t){if(typeof t=="function")return tc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ze)return 11;if(t===At)return 14}return 2}function Wn(t,i){var o=t.alternate;return o===null?(o=Lt(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function ll(t,i,o,u,d,f){var g=2;if(u=t,typeof t=="function")tc(t)&&(g=1);else if(typeof t=="string")g=5;else e:switch(t){case ne:return yr(o.children,d,f,i);case de:g=8,d|=8;break;case ie:return t=Lt(12,o,i,d|2),t.elementType=ie,t.lanes=f,t;case Pe:return t=Lt(13,o,i,d),t.elementType=Pe,t.lanes=f,t;case je:return t=Lt(19,o,i,d),t.elementType=je,t.lanes=f,t;case xe:return al(o,d,f,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ye:g=10;break e;case Se:g=9;break e;case Ze:g=11;break e;case At:g=14;break e;case et:g=16,u=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Lt(g,o,i,d),i.elementType=t,i.type=u,i.lanes=f,i}function yr(t,i,o,u){return t=Lt(7,t,u,i),t.lanes=o,t}function al(t,i,o,u){return t=Lt(22,t,u,i),t.elementType=xe,t.lanes=o,t.stateNode={isHidden:!1},t}function nc(t,i,o){return t=Lt(6,t,null,i),t.lanes=o,t}function rc(t,i,o){return i=Lt(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function bw(t,i,o,u,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pa(0),this.expirationTimes=Pa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pa(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function ic(t,i,o,u,d,f,g,v,E){return t=new bw(t,i,o,v,E),i===1?(i=1,f===!0&&(i|=8)):i=0,f=Lt(3,null,null,i),t.current=f,f.stateNode=t,f.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},_u(f),t}function Fw(t,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:q,key:u==null?null:""+u,children:t,containerInfo:i,implementation:o}}function Yp(t){if(!t)return On;t=t._reactInternals;e:{if(or(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(mt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(mt(o))return Ch(t,o,i)}return i}function Xp(t,i,o,u,d,f,g,v,E){return t=ic(o,u,!0,t,d,f,g,v,E),t.context=Yp(null),o=t.current,u=ct(),d=zn(o),f=dn(u,d),f.callback=i??null,Mn(o,f,d),t.current.lanes=d,Fi(t,d,u),yt(t,u),t}function ul(t,i,o,u){var d=i.current,f=ct(),g=zn(d);return o=Yp(o),i.context===null?i.context=o:i.pendingContext=o,i=dn(f,g),i.payload={element:t},u=u===void 0?null:u,u!==null&&(i.callback=u),t=Mn(d,i,g),t!==null&&(Wt(t,d,g,f),jo(t,d,g)),g}function cl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Jp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function sc(t,i){Jp(t,i),(t=t.alternate)&&Jp(t,i)}var Zp=typeof reportError=="function"?reportError:function(t){console.error(t)};function oc(t){this._internalRoot=t}dl.prototype.render=oc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));ul(t,i,null,null)},dl.prototype.unmount=oc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;mr(function(){ul(null,t,null,null)}),i[on]=null}};function dl(t){this._internalRoot=t}dl.prototype.unstable_scheduleHydration=function(t){if(t){var i=bf();t={blockedOn:null,target:t,priority:i};for(var o=0;o<kn.length&&i!==0&&i<kn[o].priority;o++);kn.splice(o,0,t),o===0&&zf(t)}};function lc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function fl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function em(){}function Uw(t,i,o,u,d){if(d){if(typeof u=="function"){var f=u;u=function(){var k=cl(g);f.call(k)}}var g=Xp(i,u,t,0,null,!1,!1,"",em);return t._reactRootContainer=g,t[on]=g.current,Xi(t.nodeType===8?t.parentNode:t),mr(),g}for(;d=t.lastChild;)t.removeChild(d);if(typeof u=="function"){var v=u;u=function(){var k=cl(E);v.call(k)}}var E=ic(t,0,!1,null,null,!1,!1,"",em);return t._reactRootContainer=E,t[on]=E.current,Xi(t.nodeType===8?t.parentNode:t),mr(function(){ul(i,E,o,u)}),E}function hl(t,i,o,u,d){var f=o._reactRootContainer;if(f){var g=f;if(typeof d=="function"){var v=d;d=function(){var E=cl(g);v.call(E)}}ul(i,g,t,d)}else g=Uw(o,i,t,d,u);return cl(g)}Df=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=bi(i.pendingLanes);o!==0&&(xa(i,o|1),yt(i,We()),!(fe&6)&&(ri=We()+500,Ln()))}break;case 13:mr(function(){var u=cn(t,1);if(u!==null){var d=ct();Wt(u,t,1,d)}}),sc(t,1)}},Oa=function(t){if(t.tag===13){var i=cn(t,134217728);if(i!==null){var o=ct();Wt(i,t,134217728,o)}sc(t,134217728)}},Mf=function(t){if(t.tag===13){var i=zn(t),o=cn(t,i);if(o!==null){var u=ct();Wt(o,t,i,u)}sc(t,i)}},bf=function(){return we},Ff=function(t,i){var o=we;try{return we=t,i()}finally{we=o}},Ca=function(t,i,o){switch(i){case"input":if(ga(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==t&&u.form===t.form){var d=Po(u);if(!d)throw Error(n(90));lf(u),ga(u,d)}}}break;case"textarea":ff(t,o);break;case"select":i=o.value,i!=null&&Dr(t,!!o.multiple,i,!1)}},Ef=Ju,Af=mr;var zw={usingClientEntryPoint:!1,Events:[es,Hr,Po,vf,wf,Ju]},ps={findFiberByHostInstance:lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jw={bundleType:ps.bundleType,version:ps.version,rendererPackageName:ps.rendererPackageName,rendererConfig:ps.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:re.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Tf(t),t===null?null:t.stateNode},findFiberByHostInstance:ps.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pl.isDisabled&&pl.supportsFiber)try{co=pl.inject(jw),qt=pl}catch{}}return vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zw,vt.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lc(i))throw Error(n(200));return Fw(t,i,null,o)},vt.createRoot=function(t,i){if(!lc(t))throw Error(n(299));var o=!1,u="",d=Zp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=ic(t,1,!1,null,null,o,!1,u,d),t[on]=i.current,Xi(t.nodeType===8?t.parentNode:t),new oc(i)},vt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Tf(i),t=t===null?null:t.stateNode,t},vt.flushSync=function(t){return mr(t)},vt.hydrate=function(t,i,o){if(!fl(i))throw Error(n(200));return hl(null,t,i,!0,o)},vt.hydrateRoot=function(t,i,o){if(!lc(t))throw Error(n(405));var u=o!=null&&o.hydratedSources||null,d=!1,f="",g=Zp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onRecoverableError!==void 0&&(g=o.onRecoverableError)),i=Xp(i,null,t,1,o??null,d,!1,f,g),t[on]=i.current,Xi(t),u)for(t=0;t<u.length;t++)o=u[t],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new dl(i)},vt.render=function(t,i,o){if(!fl(i))throw Error(n(200));return hl(null,t,i,!1,o)},vt.unmountComponentAtNode=function(t){if(!fl(t))throw Error(n(40));return t._reactRootContainer?(mr(function(){hl(null,null,t,!1,function(){t._reactRootContainer=null,t[on]=null})}),!0):!1},vt.unstable_batchedUpdates=Ju,vt.unstable_renderSubtreeIntoContainer=function(t,i,o,u){if(!fl(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return hl(t,i,o,!1,u)},vt.version="18.3.1-next-f1338f8080-20240426",vt}var am;function Yw(){if(am)return cc.exports;am=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),cc.exports=Qw(),cc.exports}var um;function Xw(){if(um)return ml;um=1;var r=Yw();return ml.createRoot=r.createRoot,ml.hydrateRoot=r.hydrateRoot,ml}var Jw=Xw(),gs={},cm;function Zw(){if(cm)return gs;cm=1,Object.defineProperty(gs,"__esModule",{value:!0}),gs.parse=c,gs.serialize=m;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,a=(()=>{const w=function(){};return w.prototype=Object.create(null),w})();function c(w,R){const T=new a,P=w.length;if(P<2)return T;const x=(R==null?void 0:R.decode)||_;let b=0;do{const z=w.indexOf("=",b);if(z===-1)break;const X=w.indexOf(";",b),re=X===-1?P:X;if(z>re){b=w.lastIndexOf(";",z-1)+1;continue}const ge=h(w,b,z),q=p(w,z,ge),ne=w.slice(ge,q);if(T[ne]===void 0){let de=h(w,z+1,re),ie=p(w,re,de);const ye=x(w.slice(de,ie));T[ne]=ye}b=re+1}while(b<P);return T}function h(w,R,T){do{const P=w.charCodeAt(R);if(P!==32&&P!==9)return R}while(++R<T);return T}function p(w,R,T){for(;R>T;){const P=w.charCodeAt(--R);if(P!==32&&P!==9)return R+1}return T}function m(w,R,T){const P=(T==null?void 0:T.encode)||encodeURIComponent;if(!r.test(w))throw new TypeError(`argument name is invalid: ${w}`);const x=P(R);if(!e.test(x))throw new TypeError(`argument val is invalid: ${R}`);let b=w+"="+x;if(!T)return b;if(T.maxAge!==void 0){if(!Number.isInteger(T.maxAge))throw new TypeError(`option maxAge is invalid: ${T.maxAge}`);b+="; Max-Age="+T.maxAge}if(T.domain){if(!n.test(T.domain))throw new TypeError(`option domain is invalid: ${T.domain}`);b+="; Domain="+T.domain}if(T.path){if(!s.test(T.path))throw new TypeError(`option path is invalid: ${T.path}`);b+="; Path="+T.path}if(T.expires){if(!y(T.expires)||!Number.isFinite(T.expires.valueOf()))throw new TypeError(`option expires is invalid: ${T.expires}`);b+="; Expires="+T.expires.toUTCString()}if(T.httpOnly&&(b+="; HttpOnly"),T.secure&&(b+="; Secure"),T.partitioned&&(b+="; Partitioned"),T.priority)switch(typeof T.priority=="string"?T.priority.toLowerCase():void 0){case"low":b+="; Priority=Low";break;case"medium":b+="; Priority=Medium";break;case"high":b+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${T.priority}`)}if(T.sameSite)switch(typeof T.sameSite=="string"?T.sameSite.toLowerCase():T.sameSite){case!0:case"strict":b+="; SameSite=Strict";break;case"lax":b+="; SameSite=Lax";break;case"none":b+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${T.sameSite}`)}return b}function _(w){if(w.indexOf("%")===-1)return w;try{return decodeURIComponent(w)}catch{return w}}function y(w){return l.call(w)==="[object Date]"}return gs}Zw();/**
 * react-router v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var dm="popstate";function eE(r={}){function e(s,l){let{pathname:a,search:c,hash:h}=s.location;return Nc("",{pathname:a,search:c,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(s,l){return typeof l=="string"?l:Os(l)}return nE(e,n,null,r)}function be(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function tn(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function tE(){return Math.random().toString(36).substring(2,10)}function fm(r,e){return{usr:r.state,key:r.key,idx:e}}function Nc(r,e,n=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Ei(e):e,state:n,key:e&&e.key||s||tE()}}function Os({pathname:r="/",search:e="",hash:n=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(r+=n.charAt(0)==="#"?n:"#"+n),r}function Ei(r){let e={};if(r){let n=r.indexOf("#");n>=0&&(e.hash=r.substring(n),r=r.substring(0,n));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function nE(r,e,n,s={}){let{window:l=document.defaultView,v5Compat:a=!1}=s,c=l.history,h="POP",p=null,m=_();m==null&&(m=0,c.replaceState({...c.state,idx:m},""));function _(){return(c.state||{idx:null}).idx}function y(){h="POP";let x=_(),b=x==null?null:x-m;m=x,p&&p({action:h,location:P.location,delta:b})}function w(x,b){h="PUSH";let z=Nc(P.location,x,b);m=_()+1;let X=fm(z,m),re=P.createHref(z);try{c.pushState(X,"",re)}catch(ge){if(ge instanceof DOMException&&ge.name==="DataCloneError")throw ge;l.location.assign(re)}a&&p&&p({action:h,location:P.location,delta:1})}function R(x,b){h="REPLACE";let z=Nc(P.location,x,b);m=_();let X=fm(z,m),re=P.createHref(z);c.replaceState(X,"",re),a&&p&&p({action:h,location:P.location,delta:0})}function T(x){let b=l.location.origin!=="null"?l.location.origin:l.location.href,z=typeof x=="string"?x:Os(x);return z=z.replace(/ $/,"%20"),be(b,`No window.location.(origin|href) available to create URL for href: ${z}`),new URL(z,b)}let P={get action(){return h},get location(){return r(l,c)},listen(x){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(dm,y),p=x,()=>{l.removeEventListener(dm,y),p=null}},createHref(x){return e(l,x)},createURL:T,encodeLocation(x){let b=T(x);return{pathname:b.pathname,search:b.search,hash:b.hash}},push:w,replace:R,go(x){return c.go(x)}};return P}function Tg(r,e,n="/"){return rE(r,e,n,!1)}function rE(r,e,n,s){let l=typeof e=="string"?Ei(e):e,a=Zn(l.pathname||"/",n);if(a==null)return null;let c=kg(r);iE(c);let h=null;for(let p=0;h==null&&p<c.length;++p){let m=mE(a);h=hE(c[p],m,s)}return h}function kg(r,e=[],n=[],s=""){let l=(a,c,h)=>{let p={relativePath:h===void 0?a.path||"":h,caseSensitive:a.caseSensitive===!0,childrenIndex:c,route:a};p.relativePath.startsWith("/")&&(be(p.relativePath.startsWith(s),`Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(s.length));let m=yn([s,p.relativePath]),_=n.concat(p);a.children&&a.children.length>0&&(be(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),kg(a.children,e,_,m)),!(a.path==null&&!a.index)&&e.push({path:m,score:dE(m,a.index),routesMeta:_})};return r.forEach((a,c)=>{var h;if(a.path===""||!((h=a.path)!=null&&h.includes("?")))l(a,c);else for(let p of Rg(a.path))l(a,c,p)}),e}function Rg(r){let e=r.split("/");if(e.length===0)return[];let[n,...s]=e,l=n.endsWith("?"),a=n.replace(/\?$/,"");if(s.length===0)return l?[a,""]:[a];let c=Rg(s.join("/")),h=[];return h.push(...c.map(p=>p===""?a:[a,p].join("/"))),l&&h.push(...c),h.map(p=>r.startsWith("/")&&p===""?"/":p)}function iE(r){r.sort((e,n)=>e.score!==n.score?n.score-e.score:fE(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}var sE=/^:[\w-]+$/,oE=3,lE=2,aE=1,uE=10,cE=-2,hm=r=>r==="*";function dE(r,e){let n=r.split("/"),s=n.length;return n.some(hm)&&(s+=cE),e&&(s+=lE),n.filter(l=>!hm(l)).reduce((l,a)=>l+(sE.test(a)?oE:a===""?aE:uE),s)}function fE(r,e){return r.length===e.length&&r.slice(0,-1).every((s,l)=>s===e[l])?r[r.length-1]-e[e.length-1]:0}function hE(r,e,n=!1){let{routesMeta:s}=r,l={},a="/",c=[];for(let h=0;h<s.length;++h){let p=s[h],m=h===s.length-1,_=a==="/"?e:e.slice(a.length)||"/",y=kl({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},_),w=p.route;if(!y&&m&&n&&!s[s.length-1].route.index&&(y=kl({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},_)),!y)return null;Object.assign(l,y.params),c.push({params:l,pathname:yn([a,y.pathname]),pathnameBase:vE(yn([a,y.pathnameBase])),route:w}),y.pathnameBase!=="/"&&(a=yn([a,y.pathnameBase]))}return c}function kl(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[n,s]=pE(r.path,r.caseSensitive,r.end),l=e.match(n);if(!l)return null;let a=l[0],c=a.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:s.reduce((m,{paramName:_,isOptional:y},w)=>{if(_==="*"){let T=h[w]||"";c=a.slice(0,a.length-T.length).replace(/(.)\/+$/,"$1")}const R=h[w];return y&&!R?m[_]=void 0:m[_]=(R||"").replace(/%2F/g,"/"),m},{}),pathname:a,pathnameBase:c,pattern:r}}function pE(r,e=!1,n=!0){tn(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,h,p)=>(s.push({paramName:h,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function mE(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return tn(!1,`The URL path "${r}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Zn(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=r.charAt(n);return s&&s!=="/"?null:r.slice(n)||"/"}function gE(r,e="/"){let{pathname:n,search:s="",hash:l=""}=typeof r=="string"?Ei(r):r;return{pathname:n?n.startsWith("/")?n:_E(n,e):e,search:wE(s),hash:EE(l)}}function _E(r,e){let n=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function hc(r,e,n,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function yE(r){return r.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Ng(r){let e=yE(r);return e.map((n,s)=>s===e.length-1?n.pathname:n.pathnameBase)}function Pg(r,e,n,s=!1){let l;typeof r=="string"?l=Ei(r):(l={...r},be(!l.pathname||!l.pathname.includes("?"),hc("?","pathname","search",l)),be(!l.pathname||!l.pathname.includes("#"),hc("#","pathname","hash",l)),be(!l.search||!l.search.includes("#"),hc("#","search","hash",l)));let a=r===""||l.pathname==="",c=a?"/":l.pathname,h;if(c==null)h=n;else{let y=e.length-1;if(!s&&c.startsWith("..")){let w=c.split("/");for(;w[0]==="..";)w.shift(),y-=1;l.pathname=w.join("/")}h=y>=0?e[y]:"/"}let p=gE(l,h),m=c&&c!=="/"&&c.endsWith("/"),_=(a||c===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(m||_)&&(p.pathname+="/"),p}var yn=r=>r.join("/").replace(/\/\/+/g,"/"),vE=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),wE=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,EE=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function AE(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var xg=["POST","PUT","PATCH","DELETE"];new Set(xg);var SE=["GET",...xg];new Set(SE);var Ai=N.createContext(null);Ai.displayName="DataRouter";var Xl=N.createContext(null);Xl.displayName="DataRouterState";var Og=N.createContext({isTransitioning:!1});Og.displayName="ViewTransition";var CE=N.createContext(new Map);CE.displayName="Fetchers";var IE=N.createContext(null);IE.displayName="Await";var nn=N.createContext(null);nn.displayName="Navigation";var Hs=N.createContext(null);Hs.displayName="Location";var rn=N.createContext({outlet:null,matches:[],isDataRoute:!1});rn.displayName="Route";var nd=N.createContext(null);nd.displayName="RouteError";function TE(r,{relative:e}={}){be($s(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:s}=N.useContext(nn),{hash:l,pathname:a,search:c}=Gs(r,{relative:e}),h=a;return n!=="/"&&(h=a==="/"?n:yn([n,a])),s.createHref({pathname:h,search:c,hash:l})}function $s(){return N.useContext(Hs)!=null}function Pr(){return be($s(),"useLocation() may be used only in the context of a <Router> component."),N.useContext(Hs).location}var Lg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Dg(r){N.useContext(nn).static||N.useLayoutEffect(r)}function qs(){let{isDataRoute:r}=N.useContext(rn);return r?WE():kE()}function kE(){be($s(),"useNavigate() may be used only in the context of a <Router> component.");let r=N.useContext(Ai),{basename:e,navigator:n}=N.useContext(nn),{matches:s}=N.useContext(rn),{pathname:l}=Pr(),a=JSON.stringify(Ng(s)),c=N.useRef(!1);return Dg(()=>{c.current=!0}),N.useCallback((p,m={})=>{if(tn(c.current,Lg),!c.current)return;if(typeof p=="number"){n.go(p);return}let _=Pg(p,JSON.parse(a),l,m.relative==="path");r==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:yn([e,_.pathname])),(m.replace?n.replace:n.push)(_,m.state,m)},[e,n,a,l,r])}var RE=N.createContext(null);function NE(r){let e=N.useContext(rn).outlet;return e&&N.createElement(RE.Provider,{value:r},e)}function Gs(r,{relative:e}={}){let{matches:n}=N.useContext(rn),{pathname:s}=Pr(),l=JSON.stringify(Ng(n));return N.useMemo(()=>Pg(r,JSON.parse(l),s,e==="path"),[r,l,s,e])}function PE(r,e){return Mg(r,e)}function Mg(r,e,n,s){var b;be($s(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=N.useContext(nn),{matches:a}=N.useContext(rn),c=a[a.length-1],h=c?c.params:{},p=c?c.pathname:"/",m=c?c.pathnameBase:"/",_=c&&c.route;{let z=_&&_.path||"";bg(p,!_||z.endsWith("*")||z.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${z}"> to <Route path="${z==="/"?"*":`${z}/*`}">.`)}let y=Pr(),w;if(e){let z=typeof e=="string"?Ei(e):e;be(m==="/"||((b=z.pathname)==null?void 0:b.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${z.pathname}" was given in the \`location\` prop.`),w=z}else w=y;let R=w.pathname||"/",T=R;if(m!=="/"){let z=m.replace(/^\//,"").split("/");T="/"+R.replace(/^\//,"").split("/").slice(z.length).join("/")}let P=Tg(r,{pathname:T});tn(_||P!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),tn(P==null||P[P.length-1].route.element!==void 0||P[P.length-1].route.Component!==void 0||P[P.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=ME(P&&P.map(z=>Object.assign({},z,{params:Object.assign({},h,z.params),pathname:yn([m,l.encodeLocation?l.encodeLocation(z.pathname).pathname:z.pathname]),pathnameBase:z.pathnameBase==="/"?m:yn([m,l.encodeLocation?l.encodeLocation(z.pathnameBase).pathname:z.pathnameBase])})),a,n,s);return e&&x?N.createElement(Hs.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},x):x}function xE(){let r=jE(),e=AE(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),n=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},a={padding:"2px 4px",backgroundColor:s},c=null;return console.error("Error handled by React Router default ErrorBoundary:",r),c=N.createElement(N.Fragment,null,N.createElement("p",null,"💿 Hey developer 👋"),N.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",N.createElement("code",{style:a},"ErrorBoundary")," or"," ",N.createElement("code",{style:a},"errorElement")," prop on your route.")),N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},e),n?N.createElement("pre",{style:l},n):null,c)}var OE=N.createElement(xE,null),LE=class extends N.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?N.createElement(rn.Provider,{value:this.props.routeContext},N.createElement(nd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function DE({routeContext:r,match:e,children:n}){let s=N.useContext(Ai);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),N.createElement(rn.Provider,{value:r},n)}function ME(r,e=[],n=null,s=null){if(r==null){if(!n)return null;if(n.errors)r=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)r=n.matches;else return null}let l=r,a=n==null?void 0:n.errors;if(a!=null){let p=l.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id])!==void 0);be(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),l=l.slice(0,Math.min(l.length,p+1))}let c=!1,h=-1;if(n)for(let p=0;p<l.length;p++){let m=l[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(h=p),m.route.id){let{loaderData:_,errors:y}=n,w=m.route.loader&&!_.hasOwnProperty(m.route.id)&&(!y||y[m.route.id]===void 0);if(m.route.lazy||w){c=!0,h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}return l.reduceRight((p,m,_)=>{let y,w=!1,R=null,T=null;n&&(y=a&&m.route.id?a[m.route.id]:void 0,R=m.route.errorElement||OE,c&&(h<0&&_===0?(bg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,T=null):h===_&&(w=!0,T=m.route.hydrateFallbackElement||null)));let P=e.concat(l.slice(0,_+1)),x=()=>{let b;return y?b=R:w?b=T:m.route.Component?b=N.createElement(m.route.Component,null):m.route.element?b=m.route.element:b=p,N.createElement(DE,{match:m,routeContext:{outlet:p,matches:P,isDataRoute:n!=null},children:b})};return n&&(m.route.ErrorBoundary||m.route.errorElement||_===0)?N.createElement(LE,{location:n.location,revalidation:n.revalidation,component:R,error:y,children:x(),routeContext:{outlet:null,matches:P,isDataRoute:!0}}):x()},null)}function rd(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function bE(r){let e=N.useContext(Ai);return be(e,rd(r)),e}function FE(r){let e=N.useContext(Xl);return be(e,rd(r)),e}function UE(r){let e=N.useContext(rn);return be(e,rd(r)),e}function id(r){let e=UE(r),n=e.matches[e.matches.length-1];return be(n.route.id,`${r} can only be used on routes that contain a unique "id"`),n.route.id}function zE(){return id("useRouteId")}function jE(){var s;let r=N.useContext(nd),e=FE("useRouteError"),n=id("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[n]}function WE(){let{router:r}=bE("useNavigate"),e=id("useNavigate"),n=N.useRef(!1);return Dg(()=>{n.current=!0}),N.useCallback(async(l,a={})=>{tn(n.current,Lg),n.current&&(typeof l=="number"?r.navigate(l):await r.navigate(l,{fromRouteId:e,...a}))},[r,e])}var pm={};function bg(r,e,n){!e&&!pm[r]&&(pm[r]=!0,tn(!1,n))}N.memo(BE);function BE({routes:r,future:e,state:n}){return Mg(r,void 0,n,e)}function VE(r){return NE(r.context)}function si(r){be(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function HE({basename:r="/",children:e=null,location:n,navigationType:s="POP",navigator:l,static:a=!1}){be(!$s(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=r.replace(/^\/*/,"/"),h=N.useMemo(()=>({basename:c,navigator:l,static:a,future:{}}),[c,l,a]);typeof n=="string"&&(n=Ei(n));let{pathname:p="/",search:m="",hash:_="",state:y=null,key:w="default"}=n,R=N.useMemo(()=>{let T=Zn(p,c);return T==null?null:{location:{pathname:T,search:m,hash:_,state:y,key:w},navigationType:s}},[c,p,m,_,y,w,s]);return tn(R!=null,`<Router basename="${c}"> is not able to match the URL "${p}${m}${_}" because it does not start with the basename, so the <Router> won't render anything.`),R==null?null:N.createElement(nn.Provider,{value:h},N.createElement(Hs.Provider,{children:e,value:R}))}function $E({children:r,location:e}){return PE(Pc(r),e)}function Pc(r,e=[]){let n=[];return N.Children.forEach(r,(s,l)=>{if(!N.isValidElement(s))return;let a=[...e,l];if(s.type===N.Fragment){n.push.apply(n,Pc(s.props.children,a));return}be(s.type===si,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),be(!s.props.index||!s.props.children,"An index route cannot have child routes.");let c={id:s.props.id||a.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=Pc(s.props.children,a)),n.push(c)}),n}var wl="get",El="application/x-www-form-urlencoded";function Jl(r){return r!=null&&typeof r.tagName=="string"}function qE(r){return Jl(r)&&r.tagName.toLowerCase()==="button"}function GE(r){return Jl(r)&&r.tagName.toLowerCase()==="form"}function KE(r){return Jl(r)&&r.tagName.toLowerCase()==="input"}function QE(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function YE(r,e){return r.button===0&&(!e||e==="_self")&&!QE(r)}var gl=null;function XE(){if(gl===null)try{new FormData(document.createElement("form"),0),gl=!1}catch{gl=!0}return gl}var JE=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function pc(r){return r!=null&&!JE.has(r)?(tn(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${El}"`),null):r}function ZE(r,e){let n,s,l,a,c;if(GE(r)){let h=r.getAttribute("action");s=h?Zn(h,e):null,n=r.getAttribute("method")||wl,l=pc(r.getAttribute("enctype"))||El,a=new FormData(r)}else if(qE(r)||KE(r)&&(r.type==="submit"||r.type==="image")){let h=r.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=r.getAttribute("formaction")||h.getAttribute("action");if(s=p?Zn(p,e):null,n=r.getAttribute("formmethod")||h.getAttribute("method")||wl,l=pc(r.getAttribute("formenctype"))||pc(h.getAttribute("enctype"))||El,a=new FormData(h,r),!XE()){let{name:m,type:_,value:y}=r;if(_==="image"){let w=m?`${m}.`:"";a.append(`${w}x`,"0"),a.append(`${w}y`,"0")}else m&&a.append(m,y)}}else{if(Jl(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=wl,s=null,l=El,c=r}return a&&l==="text/plain"&&(c=a,a=void 0),{action:s,method:n.toLowerCase(),encType:l,formData:a,body:c}}function sd(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}async function eA(r,e){if(r.id in e)return e[r.id];try{let n=await import(r.module);return e[r.id]=n,n}catch(n){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function tA(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function nA(r,e,n){let s=await Promise.all(r.map(async l=>{let a=e.routes[l.route.id];if(a){let c=await eA(a,n);return c.links?c.links():[]}return[]}));return oA(s.flat(1).filter(tA).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function mm(r,e,n,s,l,a){let c=(p,m)=>n[m]?p.route.id!==n[m].route.id:!0,h=(p,m)=>{var _;return n[m].pathname!==p.pathname||((_=n[m].route.path)==null?void 0:_.endsWith("*"))&&n[m].params["*"]!==p.params["*"]};return a==="assets"?e.filter((p,m)=>c(p,m)||h(p,m)):a==="data"?e.filter((p,m)=>{var y;let _=s.routes[p.route.id];if(!_||!_.hasLoader)return!1;if(c(p,m)||h(p,m))return!0;if(p.route.shouldRevalidate){let w=p.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((y=n[0])==null?void 0:y.params)||{},nextUrl:new URL(r,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function rA(r,e){return iA(r.map(n=>{let s=e.routes[n.route.id];if(!s)return[];let l=[s.module];return s.imports&&(l=l.concat(s.imports)),l}).flat(1))}function iA(r){return[...new Set(r)]}function sA(r){let e={},n=Object.keys(r).sort();for(let s of n)e[s]=r[s];return e}function oA(r,e){let n=new Set;return new Set(e),r.reduce((s,l)=>{let a=JSON.stringify(sA(l));return n.has(a)||(n.add(a),s.push({key:a,link:l})),s},[])}function lA(r){let e=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function aA(){let r=N.useContext(Ai);return sd(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function uA(){let r=N.useContext(Xl);return sd(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var od=N.createContext(void 0);od.displayName="FrameworkContext";function Fg(){let r=N.useContext(od);return sd(r,"You must render this element inside a <HydratedRouter> element"),r}function cA(r,e){let n=N.useContext(od),[s,l]=N.useState(!1),[a,c]=N.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:m,onMouseLeave:_,onTouchStart:y}=e,w=N.useRef(null);N.useEffect(()=>{if(r==="render"&&c(!0),r==="viewport"){let P=b=>{b.forEach(z=>{c(z.isIntersecting)})},x=new IntersectionObserver(P,{threshold:.5});return w.current&&x.observe(w.current),()=>{x.disconnect()}}},[r]),N.useEffect(()=>{if(s){let P=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(P)}}},[s]);let R=()=>{l(!0)},T=()=>{l(!1),c(!1)};return n?r!=="intent"?[a,w,{}]:[a,w,{onFocus:_s(h,R),onBlur:_s(p,T),onMouseEnter:_s(m,R),onMouseLeave:_s(_,T),onTouchStart:_s(y,R)}]:[!1,w,{}]}function _s(r,e){return n=>{r&&r(n),n.defaultPrevented||e(n)}}function dA({page:r,...e}){let{router:n}=aA(),s=N.useMemo(()=>Tg(n.routes,r,n.basename),[n.routes,r,n.basename]);return s?N.createElement(hA,{page:r,matches:s,...e}):null}function fA(r){let{manifest:e,routeModules:n}=Fg(),[s,l]=N.useState([]);return N.useEffect(()=>{let a=!1;return nA(r,e,n).then(c=>{a||l(c)}),()=>{a=!0}},[r,e,n]),s}function hA({page:r,matches:e,...n}){let s=Pr(),{manifest:l,routeModules:a}=Fg(),{loaderData:c,matches:h}=uA(),p=N.useMemo(()=>mm(r,e,h,l,s,"data"),[r,e,h,l,s]),m=N.useMemo(()=>mm(r,e,h,l,s,"assets"),[r,e,h,l,s]),_=N.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let R=new Set,T=!1;if(e.forEach(x=>{var z;let b=l.routes[x.route.id];!b||!b.hasLoader||(!p.some(X=>X.route.id===x.route.id)&&x.route.id in c&&((z=a[x.route.id])!=null&&z.shouldRevalidate)||b.hasClientLoader?T=!0:R.add(x.route.id))}),R.size===0)return[];let P=lA(r);return T&&R.size>0&&P.searchParams.set("_routes",e.filter(x=>R.has(x.route.id)).map(x=>x.route.id).join(",")),[P.pathname+P.search]},[c,s,l,p,e,r,a]),y=N.useMemo(()=>rA(m,l),[m,l]),w=fA(m);return N.createElement(N.Fragment,null,_.map(R=>N.createElement("link",{key:R,rel:"prefetch",as:"fetch",href:R,...n})),y.map(R=>N.createElement("link",{key:R,rel:"modulepreload",href:R,...n})),w.map(({key:R,link:T})=>N.createElement("link",{key:R,...T})))}function pA(...r){return e=>{r.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var Ug=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ug&&(window.__reactRouterVersion="7.1.1")}catch{}function mA({basename:r,children:e,window:n}){let s=N.useRef();s.current==null&&(s.current=eE({window:n,v5Compat:!0}));let l=s.current,[a,c]=N.useState({action:l.action,location:l.location}),h=N.useCallback(p=>{N.startTransition(()=>c(p))},[c]);return N.useLayoutEffect(()=>l.listen(h),[l,h]),N.createElement(HE,{basename:r,children:e,location:a.location,navigationType:a.action,navigator:l})}var zg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jg=N.forwardRef(function({onClick:e,discover:n="render",prefetch:s="none",relative:l,reloadDocument:a,replace:c,state:h,target:p,to:m,preventScrollReset:_,viewTransition:y,...w},R){let{basename:T}=N.useContext(nn),P=typeof m=="string"&&zg.test(m),x,b=!1;if(typeof m=="string"&&P&&(x=m,Ug))try{let ie=new URL(window.location.href),ye=m.startsWith("//")?new URL(ie.protocol+m):new URL(m),Se=Zn(ye.pathname,T);ye.origin===ie.origin&&Se!=null?m=Se+ye.search+ye.hash:b=!0}catch{tn(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let z=TE(m,{relative:l}),[X,re,ge]=cA(s,w),q=vA(m,{replace:c,state:h,target:p,preventScrollReset:_,relative:l,viewTransition:y});function ne(ie){e&&e(ie),ie.defaultPrevented||q(ie)}let de=N.createElement("a",{...w,...ge,href:x||z,onClick:b||a?e:ne,ref:pA(R,re),target:p,"data-discover":!P&&n==="render"?"true":void 0});return X&&!P?N.createElement(N.Fragment,null,de,N.createElement(dA,{page:z})):de});jg.displayName="Link";var gA=N.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:s="",end:l=!1,style:a,to:c,viewTransition:h,children:p,...m},_){let y=Gs(c,{relative:m.relative}),w=Pr(),R=N.useContext(Xl),{navigator:T,basename:P}=N.useContext(nn),x=R!=null&&CA(y)&&h===!0,b=T.encodeLocation?T.encodeLocation(y).pathname:y.pathname,z=w.pathname,X=R&&R.navigation&&R.navigation.location?R.navigation.location.pathname:null;n||(z=z.toLowerCase(),X=X?X.toLowerCase():null,b=b.toLowerCase()),X&&P&&(X=Zn(X,P)||X);const re=b!=="/"&&b.endsWith("/")?b.length-1:b.length;let ge=z===b||!l&&z.startsWith(b)&&z.charAt(re)==="/",q=X!=null&&(X===b||!l&&X.startsWith(b)&&X.charAt(b.length)==="/"),ne={isActive:ge,isPending:q,isTransitioning:x},de=ge?e:void 0,ie;typeof s=="function"?ie=s(ne):ie=[s,ge?"active":null,q?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let ye=typeof a=="function"?a(ne):a;return N.createElement(jg,{...m,"aria-current":de,className:ie,ref:_,style:ye,to:c,viewTransition:h},typeof p=="function"?p(ne):p)});gA.displayName="NavLink";var _A=N.forwardRef(({discover:r="render",fetcherKey:e,navigate:n,reloadDocument:s,replace:l,state:a,method:c=wl,action:h,onSubmit:p,relative:m,preventScrollReset:_,viewTransition:y,...w},R)=>{let T=AA(),P=SA(h,{relative:m}),x=c.toLowerCase()==="get"?"get":"post",b=typeof h=="string"&&zg.test(h),z=X=>{if(p&&p(X),X.defaultPrevented)return;X.preventDefault();let re=X.nativeEvent.submitter,ge=(re==null?void 0:re.getAttribute("formmethod"))||c;T(re||X.currentTarget,{fetcherKey:e,method:ge,navigate:n,replace:l,state:a,relative:m,preventScrollReset:_,viewTransition:y})};return N.createElement("form",{ref:R,method:x,action:P,onSubmit:s?p:z,...w,"data-discover":!b&&r==="render"?"true":void 0})});_A.displayName="Form";function yA(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Wg(r){let e=N.useContext(Ai);return be(e,yA(r)),e}function vA(r,{target:e,replace:n,state:s,preventScrollReset:l,relative:a,viewTransition:c}={}){let h=qs(),p=Pr(),m=Gs(r,{relative:a});return N.useCallback(_=>{if(YE(_,e)){_.preventDefault();let y=n!==void 0?n:Os(p)===Os(m);h(r,{replace:y,state:s,preventScrollReset:l,relative:a,viewTransition:c})}},[p,h,m,n,s,e,r,l,a,c])}var wA=0,EA=()=>`__${String(++wA)}__`;function AA(){let{router:r}=Wg("useSubmit"),{basename:e}=N.useContext(nn),n=zE();return N.useCallback(async(s,l={})=>{let{action:a,method:c,encType:h,formData:p,body:m}=ZE(s,e);if(l.navigate===!1){let _=l.fetcherKey||EA();await r.fetch(_,n,l.action||a,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||c,formEncType:l.encType||h,flushSync:l.flushSync})}else await r.navigate(l.action||a,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||c,formEncType:l.encType||h,replace:l.replace,state:l.state,fromRouteId:n,flushSync:l.flushSync,viewTransition:l.viewTransition})},[r,e,n])}function SA(r,{relative:e}={}){let{basename:n}=N.useContext(nn),s=N.useContext(rn);be(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),a={...Gs(r||".",{relative:e})},c=Pr();if(r==null){a.search=c.search;let h=new URLSearchParams(a.search),p=h.getAll("index");if(p.some(_=>_==="")){h.delete("index"),p.filter(y=>y).forEach(y=>h.append("index",y));let _=h.toString();a.search=_?`?${_}`:""}}return(!r||r===".")&&l.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(a.pathname=a.pathname==="/"?n:yn([n,a.pathname])),Os(a)}function CA(r,e={}){let n=N.useContext(Og);be(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Wg("useViewTransitionState"),l=Gs(r,{relative:e.relative});if(!n.isTransitioning)return!1;let a=Zn(n.currentLocation.pathname,s)||n.currentLocation.pathname,c=Zn(n.nextLocation.pathname,s)||n.nextLocation.pathname;return kl(l.pathname,c)!=null||kl(l.pathname,a)!=null}new TextEncoder;var gm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U=function(r,e){if(!r)throw Si(e)},Si=function(r){return new Error("Firebase Database ("+Bg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},IA=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const l=r[n++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const a=r[n++];e[s++]=String.fromCharCode((l&31)<<6|a&63)}else if(l>239&&l<365){const a=r[n++],c=r[n++],h=r[n++],p=((l&7)<<18|(a&63)<<12|(c&63)<<6|h&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const a=r[n++],c=r[n++];e[s++]=String.fromCharCode((l&15)<<12|(a&63)<<6|c&63)}}return e.join("")},ld={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const a=r[l],c=l+1<r.length,h=c?r[l+1]:0,p=l+2<r.length,m=p?r[l+2]:0,_=a>>2,y=(a&3)<<4|h>>4;let w=(h&15)<<2|m>>6,R=m&63;p||(R=64,c||(w=64)),s.push(n[_],n[y],n[w],n[R])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Vg(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):IA(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const a=n[r.charAt(l++)],h=l<r.length?n[r.charAt(l)]:0;++l;const m=l<r.length?n[r.charAt(l)]:64;++l;const y=l<r.length?n[r.charAt(l)]:64;if(++l,a==null||h==null||m==null||y==null)throw new TA;const w=a<<2|h>>4;if(s.push(w),m!==64){const R=h<<4&240|m>>2;if(s.push(R),y!==64){const T=m<<6&192|y;s.push(T)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class TA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hg=function(r){const e=Vg(r);return ld.encodeByteArray(e,!0)},Rl=function(r){return Hg(r).replace(/\./g,"")},Nl=function(r){try{return ld.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kA(r){return $g(void 0,r)}function $g(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!RA(n)||(r[n]=$g(r[n],e[n]));return r}function RA(r){return r!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA=()=>NA().__FIREBASE_DEFAULTS__,xA=()=>{if(typeof process>"u"||typeof gm>"u")return;const r=gm.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},OA=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Nl(r[1]);return e&&JSON.parse(e)},ad=()=>{try{return PA()||xA()||OA()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},qg=r=>{var e,n;return(n=(e=ad())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[r]},LA=r=>{const e=qg(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Gg=()=>{var r;return(r=ad())===null||r===void 0?void 0:r.config},Kg=r=>{var e;return(e=ad())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DA(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",l=r.iat||0,a=r.sub||r.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Rl(JSON.stringify(n)),Rl(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ud(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())}function MA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function bA(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Qg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function FA(){const r=ft();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function UA(){return Bg.NODE_ADMIN===!0}function zA(){try{return typeof indexedDB=="object"}catch{return!1}}function jA(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var a;e(((a=l.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA="FirebaseError";class nr extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=WA,Object.setPrototypeOf(this,nr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qs.prototype.create)}}class Qs{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},l=`${this.service}/${e}`,a=this.errors[e],c=a?BA(a,s):"Error",h=`${this.serviceName}: ${c} (${l}).`;return new nr(l,h,s)}}function BA(r,e){return r.replace(VA,(n,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const VA=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(r){return JSON.parse(r)}function Je(r){return JSON.stringify(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg=function(r){let e={},n={},s={},l="";try{const a=r.split(".");e=Ls(Nl(a[0])||""),n=Ls(Nl(a[1])||""),l=a[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:l}},HA=function(r){const e=Yg(r),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},$A=function(r){const e=Yg(r).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function pi(r,e){if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}function xc(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Pl(r,e,n){const s={};for(const l in r)Object.prototype.hasOwnProperty.call(r,l)&&(s[l]=e.call(n,r[l],l,r));return s}function xl(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const l of n){if(!s.includes(l))return!1;const a=r[l],c=e[l];if(_m(a)&&_m(c)){if(!xl(a,c))return!1}else if(a!==c)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function _m(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(l=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ss(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[l,a]=s.split("=");e[decodeURIComponent(l)]=decodeURIComponent(a)}}),e}function Cs(r){const e=r.indexOf("?");if(!e)return"";const n=r.indexOf("#",e);return r.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let y=0;y<16;y++)s[y]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let y=0;y<16;y++)s[y]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let y=16;y<80;y++){const w=s[y-3]^s[y-8]^s[y-14]^s[y-16];s[y]=(w<<1|w>>>31)&4294967295}let l=this.chain_[0],a=this.chain_[1],c=this.chain_[2],h=this.chain_[3],p=this.chain_[4],m,_;for(let y=0;y<80;y++){y<40?y<20?(m=h^a&(c^h),_=1518500249):(m=a^c^h,_=1859775393):y<60?(m=a&c|h&(a|c),_=2400959708):(m=a^c^h,_=3395469782);const w=(l<<5|l>>>27)+m+p+_+s[y]&4294967295;p=h,h=c,c=(a<<30|a>>>2)&4294967295,a=l,l=w}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+h&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let l=0;const a=this.buf_;let c=this.inbuf_;for(;l<n;){if(c===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<n;)if(a[c]=e.charCodeAt(l),++c,++l,c===this.blockSize){this.compress_(a),c=0;break}}else for(;l<n;)if(a[c]=e[l],++c,++l,c===this.blockSize){this.compress_(a),c=0;break}}this.inbuf_=c,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let a=24;a>=0;a-=8)e[s]=this.chain_[l]>>a&255,++s;return e}}function GA(r,e){const n=new KA(r,e);return n.subscribe.bind(n)}class KA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let l;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");QA(e,["next","error","complete"])?l=e:l={next:e,error:n,complete:s},l.next===void 0&&(l.next=mc),l.error===void 0&&(l.error=mc),l.complete===void 0&&(l.complete=mc);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function QA(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function mc(){}function Zl(r,e){return`${r} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);if(l>=55296&&l<=56319){const a=l-55296;s++,U(s<r.length,"Surrogate pair missing trail surrogate.");const c=r.charCodeAt(s)-56320;l=65536+(a<<10)+c}l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):l<65536?(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},ea=function(r){let e=0;for(let n=0;n<r.length;n++){const s=r.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(r){return r&&r._delegate?r._delegate:r}class Sr{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ks;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),l=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(a){if(l)return null;throw a}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ZA(e))try{this.getOrInitializeService({instanceIdentifier:vr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:l});s.resolve(a)}catch{}}}}clearInstance(e=vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vr){return this.instances.has(e)}getOptions(e=vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[a,c]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(a);s===h&&c.resolve(l)}return l}onInit(e,n){var s;const l=this.normalizeInstanceIdentifier(n),a=(s=this.onInitCallbacks.get(l))!==null&&s!==void 0?s:new Set;a.add(e),this.onInitCallbacks.set(l,a);const c=this.instances.get(l);return c&&e(c,l),()=>{a.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:JA(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=vr){return this.component?this.component.multipleInstances?e:vr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function JA(r){return r===vr?void 0:r}function ZA(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new XA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ee||(Ee={}));const tS={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},nS=Ee.INFO,rS={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},iS=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),l=rS[e];if(l)console[l](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cd{constructor(e){this.name=e,this._logLevel=nS,this._logHandler=iS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const sS=(r,e)=>e.some(n=>r instanceof n);let ym,vm;function oS(){return ym||(ym=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lS(){return vm||(vm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xg=new WeakMap,Oc=new WeakMap,Jg=new WeakMap,gc=new WeakMap,dd=new WeakMap;function aS(r){const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("success",a),r.removeEventListener("error",c)},a=()=>{n(Qn(r.result)),l()},c=()=>{s(r.error),l()};r.addEventListener("success",a),r.addEventListener("error",c)});return e.then(n=>{n instanceof IDBCursor&&Xg.set(n,r)}).catch(()=>{}),dd.set(e,r),e}function uS(r){if(Oc.has(r))return;const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("complete",a),r.removeEventListener("error",c),r.removeEventListener("abort",c)},a=()=>{n(),l()},c=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",a),r.addEventListener("error",c),r.addEventListener("abort",c)});Oc.set(r,e)}let Lc={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return Oc.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Jg.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Qn(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function cS(r){Lc=r(Lc)}function dS(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(_c(this),e,...n);return Jg.set(s,e.sort?e.sort():[e]),Qn(s)}:lS().includes(r)?function(...e){return r.apply(_c(this),e),Qn(Xg.get(this))}:function(...e){return Qn(r.apply(_c(this),e))}}function fS(r){return typeof r=="function"?dS(r):(r instanceof IDBTransaction&&uS(r),sS(r,oS())?new Proxy(r,Lc):r)}function Qn(r){if(r instanceof IDBRequest)return aS(r);if(gc.has(r))return gc.get(r);const e=fS(r);return e!==r&&(gc.set(r,e),dd.set(e,r)),e}const _c=r=>dd.get(r);function hS(r,e,{blocked:n,upgrade:s,blocking:l,terminated:a}={}){const c=indexedDB.open(r,e),h=Qn(c);return s&&c.addEventListener("upgradeneeded",p=>{s(Qn(c.result),p.oldVersion,p.newVersion,Qn(c.transaction),p)}),n&&c.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),h.then(p=>{a&&p.addEventListener("close",()=>a()),l&&p.addEventListener("versionchange",m=>l(m.oldVersion,m.newVersion,m))}).catch(()=>{}),h}const pS=["get","getKey","getAll","getAllKeys","count"],mS=["put","add","delete","clear"],yc=new Map;function wm(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(yc.get(e))return yc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,l=mS.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||pS.includes(n)))return;const a=async function(c,...h){const p=this.transaction(c,l?"readwrite":"readonly");let m=p.store;return s&&(m=m.index(h.shift())),(await Promise.all([m[n](...h),l&&p.done]))[0]};return yc.set(e,a),a}cS(r=>({...r,get:(e,n,s)=>wm(e,n)||r.get(e,n,s),has:(e,n)=>!!wm(e,n)||r.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_S(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function _S(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Dc="@firebase/app",Em="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=new cd("@firebase/app"),yS="@firebase/app-compat",vS="@firebase/analytics-compat",wS="@firebase/analytics",ES="@firebase/app-check-compat",AS="@firebase/app-check",SS="@firebase/auth",CS="@firebase/auth-compat",IS="@firebase/database",TS="@firebase/data-connect",kS="@firebase/database-compat",RS="@firebase/functions",NS="@firebase/functions-compat",PS="@firebase/installations",xS="@firebase/installations-compat",OS="@firebase/messaging",LS="@firebase/messaging-compat",DS="@firebase/performance",MS="@firebase/performance-compat",bS="@firebase/remote-config",FS="@firebase/remote-config-compat",US="@firebase/storage",zS="@firebase/storage-compat",jS="@firebase/firestore",WS="@firebase/vertexai",BS="@firebase/firestore-compat",VS="firebase",HS="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc="[DEFAULT]",$S={[Dc]:"fire-core",[yS]:"fire-core-compat",[wS]:"fire-analytics",[vS]:"fire-analytics-compat",[AS]:"fire-app-check",[ES]:"fire-app-check-compat",[SS]:"fire-auth",[CS]:"fire-auth-compat",[IS]:"fire-rtdb",[TS]:"fire-data-connect",[kS]:"fire-rtdb-compat",[RS]:"fire-fn",[NS]:"fire-fn-compat",[PS]:"fire-iid",[xS]:"fire-iid-compat",[OS]:"fire-fcm",[LS]:"fire-fcm-compat",[DS]:"fire-perf",[MS]:"fire-perf-compat",[bS]:"fire-rc",[FS]:"fire-rc-compat",[US]:"fire-gcs",[zS]:"fire-gcs-compat",[jS]:"fire-fst",[BS]:"fire-fst-compat",[WS]:"fire-vertex","fire-js":"fire-js",[VS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol=new Map,qS=new Map,bc=new Map;function Am(r,e){try{r.container.addComponent(e)}catch(n){En.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function mi(r){const e=r.name;if(bc.has(e))return En.debug(`There were multiple attempts to register component ${e}.`),!1;bc.set(e,r);for(const n of Ol.values())Am(n,r);for(const n of qS.values())Am(n,r);return!0}function fd(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function Xt(r){return r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yn=new Qs("app","Firebase",GS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Sr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=HS;function Zg(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Mc,automaticDataCollectionEnabled:!1},e),l=s.name;if(typeof l!="string"||!l)throw Yn.create("bad-app-name",{appName:String(l)});if(n||(n=Gg()),!n)throw Yn.create("no-options");const a=Ol.get(l);if(a){if(xl(n,a.options)&&xl(s,a.config))return a;throw Yn.create("duplicate-app",{appName:l})}const c=new eS(l);for(const p of bc.values())c.addComponent(p);const h=new KS(n,s,c);return Ol.set(l,h),h}function e_(r=Mc){const e=Ol.get(r);if(!e&&r===Mc&&Gg())return Zg();if(!e)throw Yn.create("no-app",{appName:r});return e}function Xn(r,e,n){var s;let l=(s=$S[r])!==null&&s!==void 0?s:r;n&&(l+=`-${n}`);const a=l.match(/\s|\//),c=e.match(/\s|\//);if(a||c){const h=[`Unable to register library "${l}" with version "${e}":`];a&&h.push(`library name "${l}" contains illegal characters (whitespace or "/")`),a&&c&&h.push("and"),c&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),En.warn(h.join(" "));return}mi(new Sr(`${l}-version`,()=>({library:l,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS="firebase-heartbeat-database",YS=1,Ds="firebase-heartbeat-store";let vc=null;function t_(){return vc||(vc=hS(QS,YS,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ds)}catch(n){console.warn(n)}}}}).catch(r=>{throw Yn.create("idb-open",{originalErrorMessage:r.message})})),vc}async function XS(r){try{const n=(await t_()).transaction(Ds),s=await n.objectStore(Ds).get(n_(r));return await n.done,s}catch(e){if(e instanceof nr)En.warn(e.message);else{const n=Yn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});En.warn(n.message)}}}async function Sm(r,e){try{const s=(await t_()).transaction(Ds,"readwrite");await s.objectStore(Ds).put(e,n_(r)),await s.done}catch(n){if(n instanceof nr)En.warn(n.message);else{const s=Yn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});En.warn(s.message)}}}function n_(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS=1024,ZS=30*24*60*60*1e3;class eC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nC(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Cm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(c=>c.date===a)?void 0:(this._heartbeatsCache.heartbeats.push({date:a,agent:l}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const h=new Date(c.date).valueOf();return Date.now()-h<=ZS}),this._storage.overwrite(this._heartbeatsCache))}catch(s){En.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Cm(),{heartbeatsToSend:s,unsentEntries:l}=tC(this._heartbeatsCache.heartbeats),a=Rl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(n){return En.warn(n),""}}}function Cm(){return new Date().toISOString().substring(0,10)}function tC(r,e=JS){const n=[];let s=r.slice();for(const l of r){const a=n.find(c=>c.agent===l.agent);if(a){if(a.dates.push(l.date),Im(n)>e){a.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),Im(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class nC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zA()?jA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await XS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return Sm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return Sm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...e.heartbeats]})}else return}}function Im(r){return Rl(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rC(r){mi(new Sr("platform-logger",e=>new gS(e),"PRIVATE")),mi(new Sr("heartbeat",e=>new eC(e),"PRIVATE")),Xn(Dc,Em,r),Xn(Dc,Em,"esm2017"),Xn("fire-js","")}rC("");var iC="firebase",sC="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xn(iC,sC,"app");function hd(r,e){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(r);l<s.length;l++)e.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(r,s[l])&&(n[s[l]]=r[s[l]]);return n}function r_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const oC=r_,i_=new Qs("auth","Firebase",r_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll=new cd("@firebase/auth");function lC(r,...e){Ll.logLevel<=Ee.WARN&&Ll.warn(`Auth (${Ii}): ${r}`,...e)}function Al(r,...e){Ll.logLevel<=Ee.ERROR&&Ll.error(`Auth (${Ii}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(r,...e){throw pd(r,...e)}function Zt(r,...e){return pd(r,...e)}function s_(r,e,n){const s=Object.assign(Object.assign({},oC()),{[e]:n});return new Qs("auth","Firebase",s).create(e,{appName:r.name})}function vn(r){return s_(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function pd(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return i_.create(r,...e)}function Z(r,e,...n){if(!r)throw pd(e,...n)}function pn(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Al(e),new Error(e)}function An(r,e){r||pn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function aC(){return Tm()==="http:"||Tm()==="https:"}function Tm(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(aC()||bA()||"connection"in navigator)?navigator.onLine:!0}function cC(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,n){this.shortDelay=e,this.longDelay=n,An(n>e,"Short delay should be less than long delay!"),this.isMobile=ud()||Qg()}get(){return uC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(r,e){An(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC=new Ys(3e4,6e4);function rr(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function ir(r,e,n,s,l={}){return l_(r,l,async()=>{let a={},c={};s&&(e==="GET"?c=s:a={body:JSON.stringify(s)});const h=Ci(Object.assign({key:r.config.apiKey},c)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const m=Object.assign({method:e,headers:p},a);return MA()||(m.referrerPolicy="no-referrer"),o_.fetch()(a_(r,r.config.apiHost,n,h),m)})}async function l_(r,e,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},dC),e);try{const l=new pC(r),a=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const c=await a.json();if("needConfirmation"in c)throw _l(r,"account-exists-with-different-credential",c);if(a.ok&&!("errorMessage"in c))return c;{const h=a.ok?c.errorMessage:c.error.message,[p,m]=h.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw _l(r,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw _l(r,"email-already-in-use",c);if(p==="USER_DISABLED")throw _l(r,"user-disabled",c);const _=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw s_(r,_,m);Ht(r,_)}}catch(l){if(l instanceof nr)throw l;Ht(r,"network-request-failed",{message:String(l)})}}async function Xs(r,e,n,s,l={}){const a=await ir(r,e,n,s,l);return"mfaPendingCredential"in a&&Ht(r,"multi-factor-auth-required",{_serverResponse:a}),a}function a_(r,e,n,s){const l=`${e}${n}?${s}`;return r.config.emulator?md(r.config,l):`${r.config.apiScheme}://${l}`}function hC(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class pC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Zt(this.auth,"network-request-failed")),fC.get())})}}function _l(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=Zt(r,e,s);return l.customData._tokenResponse=n,l}function km(r){return r!==void 0&&r.enterprise!==void 0}class mC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return hC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function gC(r,e){return ir(r,"GET","/v2/recaptchaConfig",rr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _C(r,e){return ir(r,"POST","/v1/accounts:delete",e)}async function u_(r,e){return ir(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yC(r,e=!1){const n=ht(r),s=await n.getIdToken(e),l=gd(s);Z(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const a=typeof l.firebase=="object"?l.firebase:void 0,c=a==null?void 0:a.sign_in_provider;return{claims:l,token:s,authTime:Ts(wc(l.auth_time)),issuedAtTime:Ts(wc(l.iat)),expirationTime:Ts(wc(l.exp)),signInProvider:c||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function wc(r){return Number(r)*1e3}function gd(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return Al("JWT malformed, contained fewer than 3 sections"),null;try{const l=Nl(n);return l?JSON.parse(l):(Al("Failed to decode base64 JWT payload"),null)}catch(l){return Al("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function Rm(r){const e=gd(r);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ms(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof nr&&vC(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function vC({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const l=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ts(this.lastLoginAt),this.creationTime=Ts(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dl(r){var e;const n=r.auth,s=await r.getIdToken(),l=await Ms(r,u_(n,{idToken:s}));Z(l==null?void 0:l.users.length,n,"internal-error");const a=l.users[0];r._notifyReloadListener(a);const c=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?c_(a.providerUserInfo):[],h=AC(r.providerData,c),p=r.isAnonymous,m=!(r.email&&a.passwordHash)&&!(h!=null&&h.length),_=p?m:!1,y={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:h,metadata:new Uc(a.createdAt,a.lastLoginAt),isAnonymous:_};Object.assign(r,y)}async function EC(r){const e=ht(r);await Dl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function AC(r,e){return[...r.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function c_(r){return r.map(e=>{var{providerId:n}=e,s=hd(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SC(r,e){const n=await l_(r,{},async()=>{const s=Ci({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:a}=r.config,c=a_(r,l,"/v1/token",`key=${a}`),h=await r._getAdditionalHeaders();return h["Content-Type"]="application/x-www-form-urlencoded",o_.fetch()(c,{method:"POST",headers:h,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function CC(r,e){return ir(r,"POST","/v2/accounts:revokeToken",rr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Rm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Z(e.length!==0,"internal-error");const n=Rm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:l,expiresIn:a}=await SC(e,n);this.updateTokensAndExpiration(s,l,Number(a))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:l,expirationTime:a}=n,c=new ai;return s&&(Z(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),l&&(Z(typeof l=="string","internal-error",{appName:e}),c.accessToken=l),a&&(Z(typeof a=="number","internal-error",{appName:e}),c.expirationTime=a),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ai,this.toJSON())}_performRefresh(){return pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(r,e){Z(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class mn{constructor(e){var{uid:n,auth:s,stsTokenManager:l}=e,a=hd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Uc(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const n=await Ms(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return yC(this,e)}reload(){return EC(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new mn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Dl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xt(this.auth.app))return Promise.reject(vn(this.auth));const e=await this.getIdToken();return await Ms(this,_C(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,l,a,c,h,p,m,_;const y=(s=n.displayName)!==null&&s!==void 0?s:void 0,w=(l=n.email)!==null&&l!==void 0?l:void 0,R=(a=n.phoneNumber)!==null&&a!==void 0?a:void 0,T=(c=n.photoURL)!==null&&c!==void 0?c:void 0,P=(h=n.tenantId)!==null&&h!==void 0?h:void 0,x=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,b=(m=n.createdAt)!==null&&m!==void 0?m:void 0,z=(_=n.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:X,emailVerified:re,isAnonymous:ge,providerData:q,stsTokenManager:ne}=n;Z(X&&ne,e,"internal-error");const de=ai.fromJSON(this.name,ne);Z(typeof X=="string",e,"internal-error"),Vn(y,e.name),Vn(w,e.name),Z(typeof re=="boolean",e,"internal-error"),Z(typeof ge=="boolean",e,"internal-error"),Vn(R,e.name),Vn(T,e.name),Vn(P,e.name),Vn(x,e.name),Vn(b,e.name),Vn(z,e.name);const ie=new mn({uid:X,auth:e,email:w,emailVerified:re,displayName:y,isAnonymous:ge,photoURL:T,phoneNumber:R,tenantId:P,stsTokenManager:de,createdAt:b,lastLoginAt:z});return q&&Array.isArray(q)&&(ie.providerData=q.map(ye=>Object.assign({},ye))),x&&(ie._redirectEventId=x),ie}static async _fromIdTokenResponse(e,n,s=!1){const l=new ai;l.updateFromServerResponse(n);const a=new mn({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await Dl(a),a}static async _fromGetAccountInfoResponse(e,n,s){const l=n.users[0];Z(l.localId!==void 0,"internal-error");const a=l.providerUserInfo!==void 0?c_(l.providerUserInfo):[],c=!(l.email&&l.passwordHash)&&!(a!=null&&a.length),h=new ai;h.updateFromIdToken(s);const p=new mn({uid:l.localId,auth:e,stsTokenManager:h,isAnonymous:c}),m={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:a,metadata:new Uc(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(a!=null&&a.length)};return Object.assign(p,m),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm=new Map;function gn(r){An(r instanceof Function,"Expected a class definition");let e=Nm.get(r);return e?(An(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Nm.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}d_.type="NONE";const Pm=d_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(r,e,n){return`firebase:${r}:${e}:${n}`}class ui{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:l,name:a}=this.auth;this.fullUserKey=Sl(this.userKey,l.apiKey,a),this.fullPersistenceKey=Sl("persistence",l.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?mn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ui(gn(Pm),e,s);const l=(await Promise.all(n.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let a=l[0]||gn(Pm);const c=Sl(s,e.config.apiKey,e.name);let h=null;for(const m of n)try{const _=await m._get(c);if(_){const y=mn._fromJSON(e,_);m!==a&&(h=y),a=m;break}}catch{}const p=l.filter(m=>m._shouldAllowMigration);return!a._shouldAllowMigration||!p.length?new ui(a,e,s):(a=p[0],h&&await a._set(c,h.toJSON()),await Promise.all(n.map(async m=>{if(m!==a)try{await m._remove(c)}catch{}})),new ui(a,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(m_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(f_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(__(e))return"Blackberry";if(y_(e))return"Webos";if(h_(e))return"Safari";if((e.includes("chrome/")||p_(e))&&!e.includes("edge/"))return"Chrome";if(g_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function f_(r=ft()){return/firefox\//i.test(r)}function h_(r=ft()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function p_(r=ft()){return/crios\//i.test(r)}function m_(r=ft()){return/iemobile/i.test(r)}function g_(r=ft()){return/android/i.test(r)}function __(r=ft()){return/blackberry/i.test(r)}function y_(r=ft()){return/webos/i.test(r)}function _d(r=ft()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function IC(r=ft()){var e;return _d(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function TC(){return FA()&&document.documentMode===10}function v_(r=ft()){return _d(r)||g_(r)||y_(r)||__(r)||/windows phone/i.test(r)||m_(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(r,e=[]){let n;switch(r){case"Browser":n=xm(ft());break;case"Worker":n=`${xm(ft())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ii}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=a=>new Promise((c,h)=>{try{const p=e(a);c(p)}catch(p){h(p)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RC(r,e={}){return ir(r,"GET","/v2/passwordPolicy",rr(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC=6;class PC{constructor(e){var n,s,l,a;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=c.minPasswordLength)!==null&&n!==void 0?n:NC,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,l,a,c,h;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(l=p.containsLowercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(a=p.containsUppercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(h=p.containsNonAlphanumericCharacter)!==null&&h!==void 0?h:!0),p}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),l&&(n.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,l,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e,n,s,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Om(this),this.idTokenSubscription=new Om(this),this.beforeStateQueue=new kC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=i_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gn(n)),this._initializationPromise=this.queue(async()=>{var s,l;if(!this._deleted&&(this.persistenceManager=await ui.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await u_(this,{idToken:e}),s=await mn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Xt(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(h,h))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let l=s,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,h=l==null?void 0:l._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===h)&&(p!=null&&p.user)&&(l=p.user,a=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(l)}catch(c){l=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Dl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=cC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xt(this.app))return Promise.reject(vn(this));const n=e?ht(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xt(this.app)?Promise.reject(vn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xt(this.app)?Promise.reject(vn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await RC(this),n=new PC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qs("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await CC(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gn(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await ui.create(this,[gn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,l){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n);let c=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(h,this,"internal-error"),h.then(()=>{c||a(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,l);return()=>{c=!0,p()}}else{const p=e.addObserver(n);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=w_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const l=await this._getAppCheckToken();return l&&(n["X-Firebase-AppCheck"]=l),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&lC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function xr(r){return ht(r)}class Om{constructor(e){this.auth=e,this.observer=null,this.addObserver=GA(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ta={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function OC(r){ta=r}function E_(r){return ta.loadJS(r)}function LC(){return ta.recaptchaEnterpriseScript}function DC(){return ta.gapiScript}function MC(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class bC{constructor(){this.enterprise=new FC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class FC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const UC="recaptcha-enterprise",A_="NO_RECAPTCHA";class zC{constructor(e){this.type=UC,this.auth=xr(e)}async verify(e="verify",n=!1){async function s(a){if(!n){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(c,h)=>{gC(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const m=new mC(p);return a.tenantId==null?a._agentRecaptchaConfig=m:a._tenantRecaptchaConfigs[a.tenantId]=m,c(m.siteKey)}}).catch(p=>{h(p)})})}function l(a,c,h){const p=window.grecaptcha;km(p)?p.enterprise.ready(()=>{p.enterprise.execute(a,{action:e}).then(m=>{c(m)}).catch(()=>{c(A_)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new bC().execute("siteKey",{action:"verify"}):new Promise((a,c)=>{s(this.auth).then(h=>{if(!n&&km(window.grecaptcha))l(h,a,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=LC();p.length!==0&&(p+=h),E_(p).then(()=>{l(h,a,c)}).catch(m=>{c(m)})}}).catch(h=>{c(h)})})}}async function Lm(r,e,n,s=!1,l=!1){const a=new zC(r);let c;if(l)c=A_;else try{c=await a.verify(n)}catch{c=await a.verify(n,!0)}const h=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in h){const p=h.phoneEnrollmentInfo.phoneNumber,m=h.phoneEnrollmentInfo.recaptchaToken;Object.assign(h,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:m,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in h){const p=h.phoneSignInInfo.recaptchaToken;Object.assign(h,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return h}return s?Object.assign(h,{captchaResp:c}):Object.assign(h,{captchaResponse:c}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function zc(r,e,n,s,l){var a;if(!((a=r._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Lm(r,e,n,n==="getOobCode");return s(r,c)}else return s(r,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await Lm(r,e,n,n==="getOobCode");return s(r,h)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jC(r,e){const n=fd(r,"auth");if(n.isInitialized()){const l=n.getImmediate(),a=n.getOptions();if(xl(a,e??{}))return l;Ht(l,"already-initialized")}return n.initialize({options:e})}function WC(r,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(gn);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function BC(r,e,n){const s=xr(r);Z(s._canInitEmulator,s,"emulator-config-failed"),Z(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,a=S_(e),{host:c,port:h}=VC(e),p=h===null?"":`:${h}`;s.config.emulator={url:`${a}//${c}${p}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:c,port:h,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:l})}),HC()}function S_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function VC(r){const e=S_(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const a=l[1];return{host:a,port:Dm(s.substr(a.length+1))}}else{const[a,c]=s.split(":");return{host:a,port:Dm(c)}}}function Dm(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function HC(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pn("not implemented")}_getIdTokenResponse(e){return pn("not implemented")}_linkToIdToken(e,n){return pn("not implemented")}_getReauthenticationResolver(e){return pn("not implemented")}}async function $C(r,e){return ir(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qC(r,e){return Xs(r,"POST","/v1/accounts:signInWithPassword",rr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GC(r,e){return Xs(r,"POST","/v1/accounts:signInWithEmailLink",rr(r,e))}async function KC(r,e){return Xs(r,"POST","/v1/accounts:signInWithEmailLink",rr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs extends yd{constructor(e,n,s,l=null){super("password",s),this._email=e,this._password=n,this._tenantId=l}static _fromEmailAndPassword(e,n){return new bs(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new bs(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zc(e,n,"signInWithPassword",qC);case"emailLink":return GC(e,{email:this._email,oobCode:this._password});default:Ht(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zc(e,s,"signUpPassword",$C);case"emailLink":return KC(e,{idToken:n,email:this._email,oobCode:this._password});default:Ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ci(r,e){return Xs(r,"POST","/v1/accounts:signInWithIdp",rr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC="http://localhost";class Cr extends yd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Cr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l}=n,a=hd(n,["providerId","signInMethod"]);if(!s||!l)return null;const c=new Cr(s,l);return c.idToken=a.idToken||void 0,c.accessToken=a.accessToken||void 0,c.secret=a.secret,c.nonce=a.nonce,c.pendingToken=a.pendingToken||null,c}_getIdTokenResponse(e){const n=this.buildRequest();return ci(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ci(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ci(e,n)}buildRequest(){const e={requestUri:QC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ci(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YC(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function XC(r){const e=Ss(Cs(r)).link,n=e?Ss(Cs(e)).deep_link_id:null,s=Ss(Cs(r)).deep_link_id;return(s?Ss(Cs(s)).link:null)||s||n||e||r}class vd{constructor(e){var n,s,l,a,c,h;const p=Ss(Cs(e)),m=(n=p.apiKey)!==null&&n!==void 0?n:null,_=(s=p.oobCode)!==null&&s!==void 0?s:null,y=YC((l=p.mode)!==null&&l!==void 0?l:null);Z(m&&_&&y,"argument-error"),this.apiKey=m,this.operation=y,this.code=_,this.continueUrl=(a=p.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(c=p.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(h=p.tenantId)!==null&&h!==void 0?h:null}static parseLink(e){const n=XC(e);try{return new vd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(){this.providerId=Ti.PROVIDER_ID}static credential(e,n){return bs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=vd.parseLink(n);return Z(s,"argument-error"),bs._fromEmailAndCode(e,s.code,s.tenantId)}}Ti.PROVIDER_ID="password";Ti.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ti.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js extends C_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends Js{constructor(){super("facebook.com")}static credential(e){return Cr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Hn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Js{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Cr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return $n.credential(n,s)}catch{return null}}}$n.GOOGLE_SIGN_IN_METHOD="google.com";$n.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends Js{constructor(){super("github.com")}static credential(e){return Cr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.GITHUB_SIGN_IN_METHOD="github.com";qn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends Js{constructor(){super("twitter.com")}static credential(e,n){return Cr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Gn.credential(n,s)}catch{return null}}}Gn.TWITTER_SIGN_IN_METHOD="twitter.com";Gn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JC(r,e){return Xs(r,"POST","/v1/accounts:signUp",rr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,l=!1){const a=await mn._fromIdTokenResponse(e,s,l),c=Mm(s);return new Ir({user:a,providerId:c,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const l=Mm(s);return new Ir({user:e,providerId:l,_tokenResponse:s,operationType:n})}}function Mm(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml extends nr{constructor(e,n,s,l){var a;super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,Ml.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,l){return new Ml(e,n,s,l)}}function I_(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Ml._fromErrorAndOperation(r,a,e,s):a})}async function ZC(r,e,n=!1){const s=await Ms(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return Ir._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eI(r,e,n=!1){const{auth:s}=r;if(Xt(s.app))return Promise.reject(vn(s));const l="reauthenticate";try{const a=await Ms(r,I_(s,l,e,r),n);Z(a.idToken,s,"internal-error");const c=gd(a.idToken);Z(c,s,"internal-error");const{sub:h}=c;return Z(r.uid===h,s,"user-mismatch"),Ir._forOperation(r,l,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Ht(s,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T_(r,e,n=!1){if(Xt(r.app))return Promise.reject(vn(r));const s="signIn",l=await I_(r,s,e),a=await Ir._fromIdTokenResponse(r,s,l);return n||await r._updateCurrentUser(a.user),a}async function tI(r,e){return T_(xr(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k_(r){const e=xr(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function nI(r,e,n){if(Xt(r.app))return Promise.reject(vn(r));const s=xr(r),c=await zc(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",JC).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&k_(r),p}),h=await Ir._fromIdTokenResponse(s,"signIn",c);return await s._updateCurrentUser(h.user),h}function rI(r,e,n){return Xt(r.app)?Promise.reject(vn(r)):tI(ht(r),Ti.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&k_(r),s})}function iI(r,e,n,s){return ht(r).onIdTokenChanged(e,n,s)}function sI(r,e,n){return ht(r).beforeAuthStateChanged(e,n)}function oI(r,e,n,s){return ht(r).onAuthStateChanged(e,n,s)}function lI(r){return ht(r).signOut()}const bl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(bl,"1"),this.storage.removeItem(bl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI=1e3,uI=10;class N_ extends R_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=v_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&e(n,l,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((c,h,p)=>{this.notifyListeners(c,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const l=()=>{const c=this.storage.getItem(s);!n&&this.localCache[s]===c||this.notifyListeners(s,c)},a=this.storage.getItem(s);TC()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,uI):l()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},aI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}N_.type="LOCAL";const cI=N_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_ extends R_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}P_.type="SESSION";const x_=P_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(l=>l.isListeningto(e));if(n)return n;const s=new na(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:l,data:a}=n.data,c=this.handlersMap[l];if(!(c!=null&&c.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const h=Array.from(c).map(async m=>m(n.origin,a)),p=await dI(h);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}na.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let a,c;return new Promise((h,p)=>{const m=wd("",20);l.port1.start();const _=setTimeout(()=>{p(new Error("unsupported_event"))},s);c={messageChannel:l,onMessage(y){const w=y;if(w.data.eventId===m)switch(w.data.status){case"ack":clearTimeout(_),a=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),h(w.data.response);break;default:clearTimeout(_),clearTimeout(a),p(new Error("invalid_response"));break}}},this.handlers.add(c),l.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:m,data:n},[l.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(){return window}function hI(r){en().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(){return typeof en().WorkerGlobalScope<"u"&&typeof en().importScripts=="function"}async function pI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mI(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function gI(){return O_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_="firebaseLocalStorageDb",_I=1,Fl="firebaseLocalStorage",D_="fbase_key";class Zs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ra(r,e){return r.transaction([Fl],e?"readwrite":"readonly").objectStore(Fl)}function yI(){const r=indexedDB.deleteDatabase(L_);return new Zs(r).toPromise()}function jc(){const r=indexedDB.open(L_,_I);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Fl,{keyPath:D_})}catch(l){n(l)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Fl)?e(s):(s.close(),await yI(),e(await jc()))})})}async function bm(r,e,n){const s=ra(r,!0).put({[D_]:e,value:n});return new Zs(s).toPromise()}async function vI(r,e){const n=ra(r,!1).get(e),s=await new Zs(n).toPromise();return s===void 0?null:s.value}function Fm(r,e){const n=ra(r,!0).delete(e);return new Zs(n).toPromise()}const wI=800,EI=3;class M_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>EI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return O_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=na._getInstance(gI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await pI(),!this.activeServiceWorker)return;this.sender=new fI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jc();return await bm(e,bl,"1"),await Fm(e,bl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>bm(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>vI(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Fm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const a=ra(l,!1).getAll();return new Zs(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:a}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(a)&&(this.notifyListeners(l,a),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}M_.type="LOCAL";const AI=M_;new Ys(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SI(r,e){return e?gn(e):(Z(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed extends yd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ci(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ci(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ci(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function CI(r){return T_(r.auth,new Ed(r),r.bypassAuthState)}function II(r){const{auth:e,user:n}=r;return Z(n,e,"internal-error"),eI(n,new Ed(r),r.bypassAuthState)}async function TI(r){const{auth:e,user:n}=r;return Z(n,e,"internal-error"),ZC(n,new Ed(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e,n,s,l,a=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:l,tenantId:a,error:c,type:h}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:a||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(p))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return CI;case"linkViaPopup":case"linkViaRedirect":return TI;case"reauthViaPopup":case"reauthViaRedirect":return II;default:Ht(this.auth,"internal-error")}}resolve(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=new Ys(2e3,1e4);class oi extends b_{constructor(e,n,s,l,a){super(e,n,l,a),this.provider=s,this.authWindow=null,this.pollId=null,oi.currentPopupAction&&oi.currentPopupAction.cancel(),oi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){An(this.filter.length===1,"Popup operations only handle one event");const e=wd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,oi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kI.get())};e()}}oi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI="pendingRedirect",Cl=new Map;class NI extends b_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Cl.get(this.auth._key());if(!e){try{const s=await PI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Cl.set(this.auth._key(),e)}return this.bypassAuthState||Cl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function PI(r,e){const n=LI(e),s=OI(r);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function xI(r,e){Cl.set(r._key(),e)}function OI(r){return gn(r._redirectPersistence)}function LI(r){return Sl(RI,r.config.apiKey,r.name)}async function DI(r,e,n=!1){if(Xt(r.app))return Promise.reject(vn(r));const s=xr(r),l=SI(s,e),c=await new NI(s,l,n).execute();return c&&!n&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI=10*60*1e3;class bI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!FI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!F_(e)){const l=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Zt(this.auth,l))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=MI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Um(e))}saveEventToCache(e){this.cachedEventUids.add(Um(e)),this.lastProcessedEventTime=Date.now()}}function Um(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function F_({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function FI(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return F_(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UI(r,e={}){return ir(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jI=/^https?/;async function WI(r){if(r.config.emulator)return;const{authorizedDomains:e}=await UI(r);for(const n of e)try{if(BI(n))return}catch{}Ht(r,"unauthorized-domain")}function BI(r){const e=Fc(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const c=new URL(r);return c.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&c.hostname===s}if(!jI.test(n))return!1;if(zI.test(r))return s===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI=new Ys(3e4,6e4);function zm(){const r=en().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function HI(r){return new Promise((e,n)=>{var s,l,a;function c(){zm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zm(),n(Zt(r,"network-request-failed"))},timeout:VI.get()})}if(!((l=(s=en().gapi)===null||s===void 0?void 0:s.iframes)===null||l===void 0)&&l.Iframe)e(gapi.iframes.getContext());else if(!((a=en().gapi)===null||a===void 0)&&a.load)c();else{const h=MC("iframefcb");return en()[h]=()=>{gapi.load?c():n(Zt(r,"network-request-failed"))},E_(`${DC()}?onload=${h}`).catch(p=>n(p))}}).catch(e=>{throw Il=null,e})}let Il=null;function $I(r){return Il=Il||HI(r),Il}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI=new Ys(5e3,15e3),GI="__/auth/iframe",KI="emulator/auth/iframe",QI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},YI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XI(r){const e=r.config;Z(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?md(e,KI):`https://${r.config.authDomain}/${GI}`,s={apiKey:e.apiKey,appName:r.name,v:Ii},l=YI.get(r.config.apiHost);l&&(s.eid=l);const a=r._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${Ci(s).slice(1)}`}async function JI(r){const e=await $I(r),n=en().gapi;return Z(n,r,"internal-error"),e.open({where:document.body,url:XI(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QI,dontclear:!0},s=>new Promise(async(l,a)=>{await s.restyle({setHideOnLeave:!1});const c=Zt(r,"network-request-failed"),h=en().setTimeout(()=>{a(c)},qI.get());function p(){en().clearTimeout(h),l(s)}s.ping(p).then(p,()=>{a(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eT=500,tT=600,nT="_blank",rT="http://localhost";class jm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iT(r,e,n,s=eT,l=tT){const a=Math.max((window.screen.availHeight-l)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let h="";const p=Object.assign(Object.assign({},ZI),{width:s.toString(),height:l.toString(),top:a,left:c}),m=ft().toLowerCase();n&&(h=p_(m)?nT:n),f_(m)&&(e=e||rT,p.scrollbars="yes");const _=Object.entries(p).reduce((w,[R,T])=>`${w}${R}=${T},`,"");if(IC(m)&&h!=="_self")return sT(e||"",h),new jm(null);const y=window.open(e||"",h,_);Z(y,r,"popup-blocked");try{y.focus()}catch{}return new jm(y)}function sT(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT="__/auth/handler",lT="emulator/auth/handler",aT=encodeURIComponent("fac");async function Wm(r,e,n,s,l,a){Z(r.config.authDomain,r,"auth-domain-config-required"),Z(r.config.apiKey,r,"invalid-api-key");const c={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:Ii,eventId:l};if(e instanceof C_){e.setDefaultLanguage(r.languageCode),c.providerId=e.providerId||"",xc(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,y]of Object.entries({}))c[_]=y}if(e instanceof Js){const _=e.getScopes().filter(y=>y!=="");_.length>0&&(c.scopes=_.join(","))}r.tenantId&&(c.tid=r.tenantId);const h=c;for(const _ of Object.keys(h))h[_]===void 0&&delete h[_];const p=await r._getAppCheckToken(),m=p?`#${aT}=${encodeURIComponent(p)}`:"";return`${uT(r)}?${Ci(h).slice(1)}${m}`}function uT({config:r}){return r.emulator?md(r,lT):`https://${r.authDomain}/${oT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec="webStorageSupport";class cT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=x_,this._completeRedirectFn=DI,this._overrideRedirectResult=xI}async _openPopup(e,n,s,l){var a;An((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const c=await Wm(e,n,s,Fc(),l);return iT(e,c,wd())}async _openRedirect(e,n,s,l){await this._originValidation(e);const a=await Wm(e,n,s,Fc(),l);return hI(a),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:l,promise:a}=this.eventManagers[n];return l?Promise.resolve(l):(An(a,"If manager is not set, promise should be"),a)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await JI(e),s=new bI(e);return n.register("authEvent",l=>(Z(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ec,{type:Ec},l=>{var a;const c=(a=l==null?void 0:l[0])===null||a===void 0?void 0:a[Ec];c!==void 0&&n(!!c),Ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=WI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return v_()||h_()||_d()}}const dT=cT;var Bm="@firebase/auth",Vm="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function pT(r){mi(new Sr("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:c,authDomain:h}=s.options;Z(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:c,authDomain:h,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:w_(r)},m=new xC(s,l,a,p);return WC(m,n),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),mi(new Sr("auth-internal",e=>{const n=xr(e.getProvider("auth").getImmediate());return(s=>new fT(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xn(Bm,Vm,hT(r)),Xn(Bm,Vm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT=5*60,gT=Kg("authIdTokenMaxAge")||mT;let Hm=null;const _T=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>gT)return;const l=n==null?void 0:n.token;Hm!==l&&(Hm=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function yT(r=e_()){const e=fd(r,"auth");if(e.isInitialized())return e.getImmediate();const n=jC(r,{popupRedirectResolver:dT,persistence:[AI,cI,x_]}),s=Kg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(s,location.origin);if(location.origin===a.origin){const c=_T(a.toString());sI(n,c,()=>c(n.currentUser)),iI(n,h=>c(h))}}const l=qg("auth");return l&&BC(n,`http://${l}`),n}function vT(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}OC({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=l=>{const a=Zt("internal-error");a.customData=l,n(a)},s.type="text/javascript",s.charset="UTF-8",vT().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});pT("Browser");var $m={};const qm="@firebase/database",Gm="1.0.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let U_="";function wT(r){U_=r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Je(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ls(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return sn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_=function(r){try{if(typeof window<"u"&&typeof window[r]<"u"){const e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ET(e)}}catch{}return new AT},Er=z_("localStorage"),ST=z_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di=new cd("@firebase/database"),CT=function(){let r=1;return function(){return r++}}(),j_=function(r){const e=YA(r),n=new qA;n.update(e);const s=n.digest();return ld.encodeByteArray(s)},eo=function(...r){let e="";for(let n=0;n<r.length;n++){const s=r[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=eo.apply(null,s):typeof s=="object"?e+=Je(s):e+=s,e+=" "}return e};let ks=null,Km=!0;const IT=function(r,e){U(!0,"Can't turn on custom loggers persistently."),di.logLevel=Ee.VERBOSE,ks=di.log.bind(di)},rt=function(...r){if(Km===!0&&(Km=!1,ks===null&&ST.get("logging_enabled")===!0&&IT()),ks){const e=eo.apply(null,r);ks(e)}},to=function(r){return function(...e){rt(r,...e)}},Wc=function(...r){const e="FIREBASE INTERNAL ERROR: "+eo(...r);di.error(e)},Sn=function(...r){const e=`FIREBASE FATAL ERROR: ${eo(...r)}`;throw di.error(e),new Error(e)},dt=function(...r){const e="FIREBASE WARNING: "+eo(...r);di.warn(e)},TT=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&dt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ad=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},kT=function(r){if(document.readyState==="complete")r();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},gi="[MIN_NAME]",Tr="[MAX_NAME]",Or=function(r,e){if(r===e)return 0;if(r===gi||e===Tr)return-1;if(e===gi||r===Tr)return 1;{const n=Qm(r),s=Qm(e);return n!==null?s!==null?n-s===0?r.length-e.length:n-s:-1:s!==null?1:r<e?-1:1}},RT=function(r,e){return r===e?0:r<e?-1:1},ys=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+Je(e))},Sd=function(r){if(typeof r!="object"||r===null)return Je(r);const e=[];for(const s in r)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Je(e[s]),n+=":",n+=Sd(r[e[s]]);return n+="}",n},W_=function(r,e){const n=r.length;if(n<=e)return[r];const s=[];for(let l=0;l<n;l+=e)l+e>n?s.push(r.substring(l,n)):s.push(r.substring(l,l+e));return s};function it(r,e){for(const n in r)r.hasOwnProperty(n)&&e(n,r[n])}const B_=function(r){U(!Ad(r),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let l,a,c,h,p;r===0?(a=0,c=0,l=1/r===-1/0?1:0):(l=r<0,r=Math.abs(r),r>=Math.pow(2,1-s)?(h=Math.min(Math.floor(Math.log(r)/Math.LN2),s),a=h+s,c=Math.round(r*Math.pow(2,n-h)-Math.pow(2,n))):(a=0,c=Math.round(r/Math.pow(2,1-s-n))));const m=[];for(p=n;p;p-=1)m.push(c%2?1:0),c=Math.floor(c/2);for(p=e;p;p-=1)m.push(a%2?1:0),a=Math.floor(a/2);m.push(l?1:0),m.reverse();const _=m.join("");let y="";for(p=0;p<64;p+=8){let w=parseInt(_.substr(p,8),2).toString(16);w.length===1&&(w="0"+w),y=y+w}return y.toLowerCase()},NT=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},PT=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function xT(r,e){let n="Unknown Error";r==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":r==="permission_denied"?n="Client doesn't have permission to access the desired data.":r==="unavailable"&&(n="The service is unavailable");const s=new Error(r+" at "+e._path.toString()+": "+n);return s.code=r.toUpperCase(),s}const OT=new RegExp("^-?(0*)\\d{1,10}$"),LT=-2147483648,DT=2147483647,Qm=function(r){if(OT.test(r)){const e=Number(r);if(e>=LT&&e<=DT)return e}return null},ki=function(r){try{r()}catch(e){setTimeout(()=>{const n=e.stack||"";throw dt("Exception was thrown by user callback.",n),e},Math.floor(0))}},MT=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Rs=function(r,e){const n=setTimeout(r,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){dt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(rt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',dt(e)}}class Tl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Tl.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd="5",V_="v",H_="s",$_="r",q_="f",G_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,K_="ls",Q_="p",Bc="ac",Y_="websocket",X_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e,n,s,l,a=!1,c="",h=!1,p=!1){this.secure=n,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=a,this.persistenceKey=c,this.includeNamespaceInQueryParams=h,this.isUsingEmulator=p,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Er.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Er.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function UT(r){return r.host!==r.internalHost||r.isCustomHost()||r.includeNamespaceInQueryParams}function Z_(r,e,n){U(typeof e=="string","typeof type must == string"),U(typeof n=="object","typeof params must == object");let s;if(e===Y_)s=(r.secure?"wss://":"ws://")+r.internalHost+"/.ws?";else if(e===X_)s=(r.secure?"https://":"http://")+r.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);UT(r)&&(n.ns=r.namespace);const l=[];return it(n,(a,c)=>{l.push(a+"="+c)}),s+l.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(){this.counters_={}}incrementCounter(e,n=1){sn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return kA(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac={},Sc={};function Id(r){const e=r.toString();return Ac[e]||(Ac[e]=new zT),Ac[e]}function jT(r,e){const n=r.toString();return Sc[n]||(Sc[n]=e()),Sc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<s.length;++l)s[l]&&ki(()=>{this.onMessage_(s[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym="start",BT="close",VT="pLPCommand",HT="pRTLPCB",ey="id",ty="pw",ny="ser",$T="cb",qT="seg",GT="ts",KT="d",QT="dframe",ry=1870,iy=30,YT=ry-iy,XT=25e3,JT=3e4;class li{constructor(e,n,s,l,a,c,h){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=l,this.authToken=a,this.transportSessionId=c,this.lastSessionId=h,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=to(e),this.stats_=Id(n),this.urlFn=p=>(this.appCheckToken&&(p[Bc]=this.appCheckToken),Z_(n,X_,p))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new WT(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(JT)),kT(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Td((...a)=>{const[c,h,p,m,_]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===Ym)this.id=h,this.password=p;else if(c===BT)h?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(h,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...a)=>{const[c,h]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(c,h)},()=>{this.onClosed_()},this.urlFn);const s={};s[Ym]="t",s[ny]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[$T]=this.scriptTagHolder.uniqueCallbackIdentifier),s[V_]=Cd,this.transportSessionId&&(s[H_]=this.transportSessionId),this.lastSessionId&&(s[K_]=this.lastSessionId),this.applicationId&&(s[Q_]=this.applicationId),this.appCheckToken&&(s[Bc]=this.appCheckToken),typeof location<"u"&&location.hostname&&G_.test(location.hostname)&&(s[$_]=q_);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){li.forceAllow_=!0}static forceDisallow(){li.forceDisallow_=!0}static isAvailable(){return li.forceAllow_?!0:!li.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!NT()&&!PT()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Je(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Hg(n),l=W_(s,YT);for(let a=0;a<l.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[a]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[QT]="t",s[ey]=e,s[ty]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Je(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Td{constructor(e,n,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=CT(),window[VT+this.uniqueCallbackIdentifier]=e,window[HT+this.uniqueCallbackIdentifier]=n,this.myIFrame=Td.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(h){rt("frame writing exception"),h.stack&&rt(h.stack),rt(h)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||rt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ey]=this.myID,e[ty]=this.myPW,e[ny]=this.currentSerial;let n=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+iy+s.length<=ry;){const c=this.pendingSegs.shift();s=s+"&"+qT+l+"="+c.seg+"&"+GT+l+"="+c.ts+"&"+KT+l+"="+c.d,l++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},l=setTimeout(s,Math.floor(XT)),a=()=>{clearTimeout(l),s()};this.addTag(e,a)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{rt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT=16384,ek=45e3;let Ul=null;typeof MozWebSocket<"u"?Ul=MozWebSocket:typeof WebSocket<"u"&&(Ul=WebSocket);class Jt{constructor(e,n,s,l,a,c,h){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=to(this.connId),this.stats_=Id(n),this.connURL=Jt.connectionURL_(n,c,h,l,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,l,a){const c={};return c[V_]=Cd,typeof location<"u"&&location.hostname&&G_.test(location.hostname)&&(c[$_]=q_),n&&(c[H_]=n),s&&(c[K_]=s),l&&(c[Bc]=l),a&&(c[Q_]=a),Z_(e,Y_,c)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Er.set("previous_websocket_failure",!0);try{let s;UA(),this.mySock=new Ul(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){Jt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ul!==null&&!Jt.forceDisallow_}static previouslyFailed(){return Er.isInMemoryStorage||Er.get("previous_websocket_failure")===!0}markConnectionHealthy(){Er.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Ls(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(U(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Je(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=W_(n,ZT);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ek))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Jt.responsesRequiredToBeHealthy=2;Jt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{static get ALL_TRANSPORTS(){return[li,Jt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Jt.isAvailable();let s=n&&!Jt.previouslyFailed();if(e.webSocketOnly&&(n||dt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Jt];else{const l=this.transports_=[];for(const a of Fs.ALL_TRANSPORTS)a&&a.isAvailable()&&l.push(a);Fs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Fs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk=6e4,nk=5e3,rk=10*1024,ik=100*1024,Cc="t",Xm="d",sk="s",Jm="r",ok="e",Zm="o",eg="a",tg="n",ng="p",lk="h";class ak{constructor(e,n,s,l,a,c,h,p,m,_){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=a,this.onMessage_=c,this.onReady_=h,this.onDisconnect_=p,this.onKill_=m,this.lastSessionId=_,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=to("c:"+this.id+":"),this.transportManager_=new Fs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=Rs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ik?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>rk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Cc in e){const n=e[Cc];n===eg?this.upgradeIfSecondaryHealthy_():n===Jm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Zm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ys("t",e),s=ys("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ng,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:eg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:tg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ys("t",e),s=ys("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ys(Cc,e);if(Xm in e){const s=e[Xm];if(n===lk){const l=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(n===tg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===sk?this.onConnectionShutdown_(s):n===Jm?this.onReset_(s):n===ok?Wc("Server Error: "+s):n===Zm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Wc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Cd!==s&&dt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Rs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(tk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Rs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(nk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ng,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Er.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{put(e,n,s,l){}merge(e,n,s,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e){this.allowedEvents_=e,this.listeners_={},U(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let l=0;l<s.length;l++)s[l].callback.apply(s[l].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const l=this.getInitialEvent(e);l&&n.apply(s,l)}off(e,n,s){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let a=0;a<l.length;a++)if(l[a].callback===n&&(!s||s===l[a].context)){l.splice(a,1);return}}validateEventType_(e){U(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl extends oy{static getInstance(){return new zl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ud()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return U(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg=32,ig=768;class Ae{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function _e(){return new Ae("")}function le(r){return r.pieceNum_>=r.pieces_.length?null:r.pieces_[r.pieceNum_]}function er(r){return r.pieces_.length-r.pieceNum_}function ke(r){let e=r.pieceNum_;return e<r.pieces_.length&&e++,new Ae(r.pieces_,e)}function kd(r){return r.pieceNum_<r.pieces_.length?r.pieces_[r.pieces_.length-1]:null}function uk(r){let e="";for(let n=r.pieceNum_;n<r.pieces_.length;n++)r.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(r.pieces_[n])));return e||"/"}function Us(r,e=0){return r.pieces_.slice(r.pieceNum_+e)}function ly(r){if(r.pieceNum_>=r.pieces_.length)return null;const e=[];for(let n=r.pieceNum_;n<r.pieces_.length-1;n++)e.push(r.pieces_[n]);return new Ae(e,0)}function Ue(r,e){const n=[];for(let s=r.pieceNum_;s<r.pieces_.length;s++)n.push(r.pieces_[s]);if(e instanceof Ae)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&n.push(s[l])}return new Ae(n,0)}function ce(r){return r.pieceNum_>=r.pieces_.length}function wt(r,e){const n=le(r),s=le(e);if(n===null)return e;if(n===s)return wt(ke(r),ke(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+r+")")}function ck(r,e){const n=Us(r,0),s=Us(e,0);for(let l=0;l<n.length&&l<s.length;l++){const a=Or(n[l],s[l]);if(a!==0)return a}return n.length===s.length?0:n.length<s.length?-1:1}function Rd(r,e){if(er(r)!==er(e))return!1;for(let n=r.pieceNum_,s=e.pieceNum_;n<=r.pieces_.length;n++,s++)if(r.pieces_[n]!==e.pieces_[s])return!1;return!0}function Dt(r,e){let n=r.pieceNum_,s=e.pieceNum_;if(er(r)>er(e))return!1;for(;n<r.pieces_.length;){if(r.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class dk{constructor(e,n){this.errorPrefix_=n,this.parts_=Us(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ea(this.parts_[s]);ay(this)}}function fk(r,e){r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(e),r.byteLength_+=ea(e),ay(r)}function hk(r){const e=r.parts_.pop();r.byteLength_-=ea(e),r.parts_.length>0&&(r.byteLength_-=1)}function ay(r){if(r.byteLength_>ig)throw new Error(r.errorPrefix_+"has a key path longer than "+ig+" bytes ("+r.byteLength_+").");if(r.parts_.length>rg)throw new Error(r.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+rg+") or object contains a cycle "+wr(r))}function wr(r){return r.parts_.length===0?"":"in property '"+r.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd extends oy{static getInstance(){return new Nd}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return U(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=1e3,pk=60*5*1e3,sg=30*1e3,mk=1.3,gk=3e4,_k="server_kill",og=3;class wn extends sy{constructor(e,n,s,l,a,c,h,p){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=a,this.authTokenProvider_=c,this.appCheckTokenProvider_=h,this.authOverride_=p,this.id=wn.nextPersistentConnectionId_++,this.log_=to("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=vs,this.maxReconnectDelay_=pk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Nd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&zl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const l=++this.requestNumber_,a={r:l,a:e,b:n};this.log_(Je(a)),U(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const n=new Ks,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const h=c.d;c.s==="ok"?n.resolve(h):n.reject(h)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),n.promise}listen(e,n,s,l){this.initConnection_();const a=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+a),this.listens.has(c)||this.listens.set(c,new Map),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),U(!this.listens.get(c).has(a),"listen() called twice for same path/queryId.");const h={onComplete:l,hashFn:n,query:e,tag:s};this.listens.get(c).set(a,h),this.connected_&&this.sendListen_(h)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),l=n._queryIdentifier;this.log_("Listen on "+s+" for "+l);const a={p:s},c="q";e.tag&&(a.q=n._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(c,a,h=>{const p=h.d,m=h.s;wn.warnOnListenWarnings_(p,n),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",h),m!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(m,p))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&sn(e,"w")){const s=pi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+n._queryParams.getIndex().toString()+'"',a=n._path.toString();dt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||$A(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=sg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=HA(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,l=>{const a=l.s,c=l.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,n)}sendUnlisten_(e,n,s,l){this.log_("Unlisten on "+e+" for "+n);const a={p:e},c="n";l&&(a.q=s,a.t=l),this.sendRequest(c,a)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,l){const a={p:n,d:s};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,c=>{l&&setTimeout(()=>{l(c.s,c.d)},Math.floor(0))})}put(e,n,s,l){this.putInternal("p",e,n,s,l)}merge(e,n,s,l){this.putInternal("m",e,n,s,l)}putInternal(e,n,s,l,a){this.initConnection_();const c={p:n,d:s};a!==void 0&&(c.h=a),this.outstandingPuts_.push({action:e,request:c,onComplete:l}),this.outstandingPutCount_++;const h=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(h):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,a=>{this.log_(n+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(a.s,a.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const a=s.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Je(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Wc("Unrecognized action received from server: "+Je(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){U(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=vs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=vs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>gk&&(this.reconnectDelay_=vs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*mk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+wn.nextConnectionId_++,a=this.lastSessionId;let c=!1,h=null;const p=function(){h?h.close():(c=!0,s())},m=function(y){U(h,"sendRequest call when we're not connected not allowed."),h.sendRequest(y)};this.realtime_={close:p,sendRequest:m};const _=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[y,w]=await Promise.all([this.authTokenProvider_.getToken(_),this.appCheckTokenProvider_.getToken(_)]);c?rt("getToken() completed but was canceled"):(rt("getToken() completed. Creating connection."),this.authToken_=y&&y.accessToken,this.appCheckToken_=w&&w.token,h=new ak(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,R=>{dt(R+" ("+this.repoInfo_.toString()+")"),this.interrupt(_k)},a))}catch(y){this.log_("Failed to get token: "+y),c||(this.repoInfo_.nodeAdmin&&dt(y),p())}}}interrupt(e){rt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){rt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],xc(this.interruptReasons_)&&(this.reconnectDelay_=vs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(a=>Sd(a)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,n){const s=new Ae(e).toString();let l;if(this.listens.has(s)){const a=this.listens.get(s);l=a.get(n),a.delete(n),a.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,n){rt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=og&&(this.reconnectDelay_=sg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){rt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=og&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+U_.replace(/\./g,"-")]=1,ud()?e["framework.cordova"]=1:Qg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=zl.getInstance().currentlyOnline();return xc(this.interruptReasons_)&&e}}wn.nextPersistentConnectionId_=0;wn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ae(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ae(gi,e),l=new ae(gi,n);return this.compare(s,l)!==0}minPost(){return ae.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yl;class uy extends ia{static get __EMPTY_NODE(){return yl}static set __EMPTY_NODE(e){yl=e}compare(e,n){return Or(e.name,n.name)}isDefinedOn(e){throw Si("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ae.MIN}maxPost(){return new ae(Tr,yl)}makePost(e,n){return U(typeof e=="string","KeyIndex indexValue must always be a string."),new ae(e,yl)}toString(){return".key"}}const fi=new uy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,n,s,l,a=null){this.isReverse_=l,this.resultGenerator_=a,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=n?s(e.key,n):1,l&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ye{constructor(e,n,s,l,a){this.key=e,this.value=n,this.color=s??Ye.RED,this.left=l??Et.EMPTY_NODE,this.right=a??Et.EMPTY_NODE}copy(e,n,s,l,a){return new Ye(e??this.key,n??this.value,s??this.color,l??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let l=this;const a=s(e,l.key);return a<0?l=l.copy(null,null,null,l.left.insert(e,n,s),null):a===0?l=l.copy(null,n,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,n,s)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return Et.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,l;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Et.EMPTY_NODE;l=s.right.min_(),s=s.copy(l.key,l.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ye.RED=!0;Ye.BLACK=!1;class yk{copy(e,n,s,l,a){return this}insert(e,n,s){return new Ye(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Et{constructor(e,n=Et.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Et(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ye.BLACK,null,null))}remove(e){return new Et(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ye.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,l=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return l?l.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(l=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new vl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new vl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new vl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new vl(this.root_,null,this.comparator_,!0,e)}}Et.EMPTY_NODE=new yk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vk(r,e){return Or(r.name,e.name)}function Pd(r,e){return Or(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vc;function wk(r){Vc=r}const cy=function(r){return typeof r=="number"?"number:"+B_(r):"string:"+r},dy=function(r){if(r.isLeafNode()){const e=r.val();U(typeof e=="string"||typeof e=="number"||typeof e=="object"&&sn(e,".sv"),"Priority must be a string or number.")}else U(r===Vc||r.isEmpty(),"priority of unexpected type.");U(r===Vc||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lg;class Qe{static set __childrenNodeConstructor(e){lg=e}static get __childrenNodeConstructor(){return lg}constructor(e,n=Qe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,U(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),dy(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Qe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Qe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ce(e)?this:le(e)===".priority"?this.priorityNode_:Qe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Qe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=le(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(U(s!==".priority"||er(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Qe.__childrenNodeConstructor.EMPTY_NODE.updateChild(ke(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+cy(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=B_(this.value_):e+=this.value_,this.lazyHash_=j_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Qe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Qe.__childrenNodeConstructor?-1:(U(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,l=Qe.VALUE_TYPE_ORDER.indexOf(n),a=Qe.VALUE_TYPE_ORDER.indexOf(s);return U(l>=0,"Unknown leaf type: "+n),U(a>=0,"Unknown leaf type: "+s),l===a?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Qe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fy,hy;function Ek(r){fy=r}function Ak(r){hy=r}class Sk extends ia{compare(e,n){const s=e.node.getPriority(),l=n.node.getPriority(),a=s.compareTo(l);return a===0?Or(e.name,n.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ae.MIN}maxPost(){return new ae(Tr,new Qe("[PRIORITY-POST]",hy))}makePost(e,n){const s=fy(e);return new ae(n,new Qe("[PRIORITY-POST]",s))}toString(){return".priority"}}const ze=new Sk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ck=Math.log(2);class Ik{constructor(e){const n=a=>parseInt(Math.log(a)/Ck,10),s=a=>parseInt(Array(a+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const jl=function(r,e,n,s){r.sort(e);const l=function(p,m){const _=m-p;let y,w;if(_===0)return null;if(_===1)return y=r[p],w=n?n(y):y,new Ye(w,y.node,Ye.BLACK,null,null);{const R=parseInt(_/2,10)+p,T=l(p,R),P=l(R+1,m);return y=r[R],w=n?n(y):y,new Ye(w,y.node,Ye.BLACK,T,P)}},a=function(p){let m=null,_=null,y=r.length;const w=function(T,P){const x=y-T,b=y;y-=T;const z=l(x+1,b),X=r[x],re=n?n(X):X;R(new Ye(re,X.node,P,null,z))},R=function(T){m?(m.left=T,m=T):(_=T,m=T)};for(let T=0;T<p.count;++T){const P=p.nextBitIsOne(),x=Math.pow(2,p.count-(T+1));P?w(x,Ye.BLACK):(w(x,Ye.BLACK),w(x,Ye.RED))}return _},c=new Ik(r.length),h=a(c);return new Et(s||e,h)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ic;const ws={};class _n{static get Default(){return U(ze,"ChildrenNode.ts has not been loaded"),Ic=Ic||new _n({".priority":ws},{".priority":ze}),Ic}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=pi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Et?n:null}hasIndex(e){return sn(this.indexSet_,e.toString())}addIndex(e,n){U(e!==fi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const a=n.getIterator(ae.Wrap);let c=a.getNext();for(;c;)l=l||e.isDefinedOn(c.node),s.push(c),c=a.getNext();let h;l?h=jl(s,e.getCompare()):h=ws;const p=e.toString(),m=Object.assign({},this.indexSet_);m[p]=e;const _=Object.assign({},this.indexes_);return _[p]=h,new _n(_,m)}addToIndexes(e,n){const s=Pl(this.indexes_,(l,a)=>{const c=pi(this.indexSet_,a);if(U(c,"Missing index implementation for "+a),l===ws)if(c.isDefinedOn(e.node)){const h=[],p=n.getIterator(ae.Wrap);let m=p.getNext();for(;m;)m.name!==e.name&&h.push(m),m=p.getNext();return h.push(e),jl(h,c.getCompare())}else return ws;else{const h=n.get(e.name);let p=l;return h&&(p=p.remove(new ae(e.name,h))),p.insert(e,e.node)}});return new _n(s,this.indexSet_)}removeFromIndexes(e,n){const s=Pl(this.indexes_,l=>{if(l===ws)return l;{const a=n.get(e.name);return a?l.remove(new ae(e.name,a)):l}});return new _n(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Es;class ee{static get EMPTY_NODE(){return Es||(Es=new ee(new Et(Pd),null,_n.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&dy(this.priorityNode_),this.children_.isEmpty()&&U(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Es}updatePriority(e){return this.children_.isEmpty()?this:new ee(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Es:n}}getChild(e){const n=le(e);return n===null?this:this.getImmediateChild(n).getChild(ke(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(U(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ae(e,n);let l,a;n.isEmpty()?(l=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,n),a=this.indexMap_.addToIndexes(s,this.children_));const c=l.isEmpty()?Es:this.priorityNode_;return new ee(l,c,a)}}updateChild(e,n){const s=le(e);if(s===null)return n;{U(le(e)!==".priority"||er(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(ke(e),n);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,l=0,a=!0;if(this.forEachChild(ze,(c,h)=>{n[c]=h.val(e),s++,a&&ee.INTEGER_REGEXP_.test(c)?l=Math.max(l,Number(c)):a=!1}),!e&&a&&l<2*s){const c=[];for(const h in n)c[h]=n[h];return c}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+cy(this.getPriority().val())+":"),this.forEachChild(ze,(n,s)=>{const l=s.hash();l!==""&&(e+=":"+n+":"+l)}),this.lazyHash_=e===""?"":j_(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const l=this.resolveIndex_(s);if(l){const a=l.getPredecessorKey(new ae(e,n));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ae(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ae(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>n(l.name,l.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,ae.Wrap);let a=l.peek();for(;a!=null&&n.compare(a,e)<0;)l.getNext(),a=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,ae.Wrap);let a=l.peek();for(;a!=null&&n.compare(a,e)>0;)l.getNext(),a=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===no?-1:0}withIndex(e){if(e===fi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ee(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===fi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ze),l=n.getIterator(ze);let a=s.getNext(),c=l.getNext();for(;a&&c;){if(a.name!==c.name||!a.node.equals(c.node))return!1;a=s.getNext(),c=l.getNext()}return a===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===fi?null:this.indexMap_.get(e.toString())}}ee.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Tk extends ee{constructor(){super(new Et(Pd),ee.EMPTY_NODE,_n.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ee.EMPTY_NODE}isEmpty(){return!1}}const no=new Tk;Object.defineProperties(ae,{MIN:{value:new ae(gi,ee.EMPTY_NODE)},MAX:{value:new ae(Tr,no)}});uy.__EMPTY_NODE=ee.EMPTY_NODE;Qe.__childrenNodeConstructor=ee;wk(no);Ak(no);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk=!0;function Xe(r,e=null){if(r===null)return ee.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),U(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){const n=r;return new Qe(n,Xe(e))}if(!(r instanceof Array)&&kk){const n=[];let s=!1;if(it(r,(c,h)=>{if(c.substring(0,1)!=="."){const p=Xe(h);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),n.push(new ae(c,p)))}}),n.length===0)return ee.EMPTY_NODE;const a=jl(n,vk,c=>c.name,Pd);if(s){const c=jl(n,ze.getCompare());return new ee(a,Xe(e),new _n({".priority":c},{".priority":ze}))}else return new ee(a,Xe(e),_n.Default)}else{let n=ee.EMPTY_NODE;return it(r,(s,l)=>{if(sn(r,s)&&s.substring(0,1)!=="."){const a=Xe(l);(a.isLeafNode()||!a.isEmpty())&&(n=n.updateImmediateChild(s,a))}}),n.updatePriority(Xe(e))}}Ek(Xe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk extends ia{constructor(e){super(),this.indexPath_=e,U(!ce(e)&&le(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),l=this.extractChild(n.node),a=s.compareTo(l);return a===0?Or(e.name,n.name):a}makePost(e,n){const s=Xe(e),l=ee.EMPTY_NODE.updateChild(this.indexPath_,s);return new ae(n,l)}maxPost(){const e=ee.EMPTY_NODE.updateChild(this.indexPath_,no);return new ae(Tr,e)}toString(){return Us(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk extends ia{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Or(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ae.MIN}maxPost(){return ae.MAX}makePost(e,n){const s=Xe(e);return new ae(n,s)}toString(){return".value"}}const Pk=new Nk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(r){return{type:"value",snapshotNode:r}}function _i(r,e){return{type:"child_added",snapshotNode:e,childName:r}}function zs(r,e){return{type:"child_removed",snapshotNode:e,childName:r}}function js(r,e,n){return{type:"child_changed",snapshotNode:e,childName:r,oldSnap:n}}function xk(r,e){return{type:"child_moved",snapshotNode:e,childName:r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e){this.index_=e}updateChild(e,n,s,l,a,c){U(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const h=e.getImmediateChild(n);return h.getChild(l).equals(s.getChild(l))&&h.isEmpty()===s.isEmpty()||(c!=null&&(s.isEmpty()?e.hasChild(n)?c.trackChildChange(zs(n,h)):U(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):h.isEmpty()?c.trackChildChange(_i(n,s)):c.trackChildChange(js(n,s,h))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ze,(l,a)=>{n.hasChild(l)||s.trackChildChange(zs(l,a))}),n.isLeafNode()||n.forEachChild(ze,(l,a)=>{if(e.hasChild(l)){const c=e.getImmediateChild(l);c.equals(a)||s.trackChildChange(js(l,a,c))}else s.trackChildChange(_i(l,a))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?ee.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e){this.indexedFilter_=new xd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ws.getStartPost_(e),this.endPost_=Ws.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,l,a,c){return this.matches(new ae(n,s))||(s=ee.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,l,a,c)}updateFullNode(e,n,s){n.isLeafNode()&&(n=ee.EMPTY_NODE);let l=n.withIndex(this.index_);l=l.updatePriority(ee.EMPTY_NODE);const a=this;return n.forEachChild(ze,(c,h)=>{a.matches(new ae(c,h))||(l=l.updateImmediateChild(c,ee.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Ws(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,l,a,c){return this.rangedFilter_.matches(new ae(n,s))||(s=ee.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,l,a,c):this.fullLimitUpdateChild_(e,n,s,a,c)}updateFullNode(e,n,s){let l;if(n.isLeafNode()||n.isEmpty())l=ee.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){l=ee.EMPTY_NODE.withIndex(this.index_);let a;this.reverse_?a=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):a=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let c=0;for(;a.hasNext()&&c<this.limit_;){const h=a.getNext();if(this.withinDirectionalStart(h))if(this.withinDirectionalEnd(h))l=l.updateImmediateChild(h.name,h.node),c++;else break;else continue}}else{l=n.withIndex(this.index_),l=l.updatePriority(ee.EMPTY_NODE);let a;this.reverse_?a=l.getReverseIterator(this.index_):a=l.getIterator(this.index_);let c=0;for(;a.hasNext();){const h=a.getNext();c<this.limit_&&this.withinDirectionalStart(h)&&this.withinDirectionalEnd(h)?c++:l=l.updateImmediateChild(h.name,ee.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,l,a){let c;if(this.reverse_){const y=this.index_.getCompare();c=(w,R)=>y(R,w)}else c=this.index_.getCompare();const h=e;U(h.numChildren()===this.limit_,"");const p=new ae(n,s),m=this.reverse_?h.getFirstChild(this.index_):h.getLastChild(this.index_),_=this.rangedFilter_.matches(p);if(h.hasChild(n)){const y=h.getImmediateChild(n);let w=l.getChildAfterChild(this.index_,m,this.reverse_);for(;w!=null&&(w.name===n||h.hasChild(w.name));)w=l.getChildAfterChild(this.index_,w,this.reverse_);const R=w==null?1:c(w,p);if(_&&!s.isEmpty()&&R>=0)return a!=null&&a.trackChildChange(js(n,s,y)),h.updateImmediateChild(n,s);{a!=null&&a.trackChildChange(zs(n,y));const P=h.updateImmediateChild(n,ee.EMPTY_NODE);return w!=null&&this.rangedFilter_.matches(w)?(a!=null&&a.trackChildChange(_i(w.name,w.node)),P.updateImmediateChild(w.name,w.node)):P}}else return s.isEmpty()?e:_&&c(m,p)>=0?(a!=null&&(a.trackChildChange(zs(m.name,m.node)),a.trackChildChange(_i(n,s))),h.updateImmediateChild(n,s).updateImmediateChild(m.name,ee.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ze}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return U(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return U(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:gi}hasEnd(){return this.endSet_}getIndexEndValue(){return U(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return U(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Tr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return U(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ze}copy(){const e=new Od;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Lk(r){return r.loadsAllData()?new xd(r.getIndex()):r.hasLimit()?new Ok(r):new Ws(r)}function ag(r){const e={};if(r.isDefault())return e;let n;if(r.index_===ze?n="$priority":r.index_===Pk?n="$value":r.index_===fi?n="$key":(U(r.index_ instanceof Rk,"Unrecognized index type!"),n=r.index_.toString()),e.orderBy=Je(n),r.startSet_){const s=r.startAfterSet_?"startAfter":"startAt";e[s]=Je(r.indexStartValue_),r.startNameSet_&&(e[s]+=","+Je(r.indexStartName_))}if(r.endSet_){const s=r.endBeforeSet_?"endBefore":"endAt";e[s]=Je(r.indexEndValue_),r.endNameSet_&&(e[s]+=","+Je(r.indexEndName_))}return r.limitSet_&&(r.isViewFromLeft()?e.limitToFirst=r.limit_:e.limitToLast=r.limit_),e}function ug(r){const e={};if(r.startSet_&&(e.sp=r.indexStartValue_,r.startNameSet_&&(e.sn=r.indexStartName_),e.sin=!r.startAfterSet_),r.endSet_&&(e.ep=r.indexEndValue_,r.endNameSet_&&(e.en=r.indexEndName_),e.ein=!r.endBeforeSet_),r.limitSet_){e.l=r.limit_;let n=r.viewFrom_;n===""&&(r.isViewFromLeft()?n="l":n="r"),e.vf=n}return r.index_!==ze&&(e.i=r.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl extends sy{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(U(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=to("p:rest:"),this.listens_={}}listen(e,n,s,l){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const c=Wl.getListenId_(e,s),h={};this.listens_[c]=h;const p=ag(e._queryParams);this.restRequest_(a+".json",p,(m,_)=>{let y=_;if(m===404&&(y=null,m=null),m===null&&this.onDataUpdate_(a,y,!1,s),pi(this.listens_,c)===h){let w;m?m===401?w="permission_denied":w="rest_error:"+m:w="ok",l(w,null)}})}unlisten(e,n){const s=Wl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=ag(e._queryParams),s=e._path.toString(),l=new Ks;return this.restRequest_(s+".json",n,(a,c)=>{let h=c;a===404&&(h=null,a=null),a===null?(this.onDataUpdate_(s,h,!1,null),l.resolve(h)):l.reject(new Error(h))}),l.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,a])=>{l&&l.accessToken&&(n.auth=l.accessToken),a&&a.token&&(n.ac=a.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ci(n);this.log_("Sending REST request for "+c);const h=new XMLHttpRequest;h.onreadystatechange=()=>{if(s&&h.readyState===4){this.log_("REST Response for "+c+" received. status:",h.status,"response:",h.responseText);let p=null;if(h.status>=200&&h.status<300){try{p=Ls(h.responseText)}catch{dt("Failed to parse JSON response for "+c+": "+h.responseText)}s(null,p)}else h.status!==401&&h.status!==404&&dt("Got unsuccessful REST response for "+c+" Status: "+h.status),s(h.status);s=null}},h.open("GET",c,!0),h.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(){this.rootNode_=ee.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(){return{value:null,children:new Map}}function my(r,e,n){if(ce(e))r.value=n,r.children.clear();else if(r.value!==null)r.value=r.value.updateChild(e,n);else{const s=le(e);r.children.has(s)||r.children.set(s,Bl());const l=r.children.get(s);e=ke(e),my(l,e,n)}}function Hc(r,e,n){r.value!==null?n(e,r.value):Mk(r,(s,l)=>{const a=new Ae(e.toString()+"/"+s);Hc(l,a,n)})}function Mk(r,e){r.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&it(this.last_,(s,l)=>{n[s]=n[s]-l}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=10*1e3,Fk=30*1e3,Uk=5*60*1e3;class zk{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new bk(e);const s=cg+(Fk-cg)*Math.random();Rs(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;it(e,(l,a)=>{a>0&&sn(this.statsToReport_,l)&&(n[l]=a,s=!0)}),s&&this.server_.reportStats(n),Rs(this.reportStats_.bind(this),Math.floor(Math.random()*2*Uk))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bt;(function(r){r[r.OVERWRITE=0]="OVERWRITE",r[r.MERGE=1]="MERGE",r[r.ACK_USER_WRITE=2]="ACK_USER_WRITE",r[r.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Bt||(Bt={}));function Ld(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Dd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Md(r){return{fromUser:!1,fromServer:!0,queryId:r,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Bt.ACK_USER_WRITE,this.source=Ld()}operationForChild(e){if(ce(this.path)){if(this.affectedTree.value!=null)return U(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ae(e));return new Vl(_e(),n,this.revert)}}else return U(le(this.path)===e,"operationForChild called for unrelated child."),new Vl(ke(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n){this.source=e,this.path=n,this.type=Bt.LISTEN_COMPLETE}operationForChild(e){return ce(this.path)?new Bs(this.source,_e()):new Bs(this.source,ke(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Bt.OVERWRITE}operationForChild(e){return ce(this.path)?new kr(this.source,_e(),this.snap.getImmediateChild(e)):new kr(this.source,ke(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Bt.MERGE}operationForChild(e){if(ce(this.path)){const n=this.children.subtree(new Ae(e));return n.isEmpty()?null:n.value?new kr(this.source,_e(),n.value):new yi(this.source,_e(),n)}else return U(le(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new yi(this.source,ke(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ce(e))return this.isFullyInitialized()&&!this.filtered_;const n=le(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Wk(r,e,n,s){const l=[],a=[];return e.forEach(c=>{c.type==="child_changed"&&r.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&a.push(xk(c.childName,c.snapshotNode))}),As(r,l,"child_removed",e,s,n),As(r,l,"child_added",e,s,n),As(r,l,"child_moved",a,s,n),As(r,l,"child_changed",e,s,n),As(r,l,"value",e,s,n),l}function As(r,e,n,s,l,a){const c=s.filter(h=>h.type===n);c.sort((h,p)=>Vk(r,h,p)),c.forEach(h=>{const p=Bk(r,h,a);l.forEach(m=>{m.respondsTo(h.type)&&e.push(m.createEvent(p,r.query_))})})}function Bk(r,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,r.index_)),e}function Vk(r,e,n){if(e.childName==null||n.childName==null)throw Si("Should only compare child_ events.");const s=new ae(e.childName,e.snapshotNode),l=new ae(n.childName,n.snapshotNode);return r.index_.compare(s,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(r,e){return{eventCache:r,serverCache:e}}function Ns(r,e,n,s){return sa(new Rr(e,n,s),r.serverCache)}function gy(r,e,n,s){return sa(r.eventCache,new Rr(e,n,s))}function $c(r){return r.eventCache.isFullyInitialized()?r.eventCache.getNode():null}function Nr(r){return r.serverCache.isFullyInitialized()?r.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tc;const Hk=()=>(Tc||(Tc=new Et(RT)),Tc);class Te{static fromObject(e){let n=new Te(null);return it(e,(s,l)=>{n=n.set(new Ae(s),l)}),n}constructor(e,n=Hk()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:_e(),value:this.value};if(ce(e))return null;{const s=le(e),l=this.children.get(s);if(l!==null){const a=l.findRootMostMatchingPathAndValue(ke(e),n);return a!=null?{path:Ue(new Ae(s),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ce(e))return this;{const n=le(e),s=this.children.get(n);return s!==null?s.subtree(ke(e)):new Te(null)}}set(e,n){if(ce(e))return new Te(n,this.children);{const s=le(e),a=(this.children.get(s)||new Te(null)).set(ke(e),n),c=this.children.insert(s,a);return new Te(this.value,c)}}remove(e){if(ce(e))return this.children.isEmpty()?new Te(null):new Te(null,this.children);{const n=le(e),s=this.children.get(n);if(s){const l=s.remove(ke(e));let a;return l.isEmpty()?a=this.children.remove(n):a=this.children.insert(n,l),this.value===null&&a.isEmpty()?new Te(null):new Te(this.value,a)}else return this}}get(e){if(ce(e))return this.value;{const n=le(e),s=this.children.get(n);return s?s.get(ke(e)):null}}setTree(e,n){if(ce(e))return n;{const s=le(e),a=(this.children.get(s)||new Te(null)).setTree(ke(e),n);let c;return a.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,a),new Te(this.value,c)}}fold(e){return this.fold_(_e(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((l,a)=>{s[l]=a.fold_(Ue(e,l),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,_e(),n)}findOnPath_(e,n,s){const l=this.value?s(n,this.value):!1;if(l)return l;if(ce(e))return null;{const a=le(e),c=this.children.get(a);return c?c.findOnPath_(ke(e),Ue(n,a),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,_e(),n)}foreachOnPath_(e,n,s){if(ce(e))return this;{this.value&&s(n,this.value);const l=le(e),a=this.children.get(l);return a?a.foreachOnPath_(ke(e),Ue(n,l),s):new Te(null)}}foreach(e){this.foreach_(_e(),e)}foreach_(e,n){this.children.inorderTraversal((s,l)=>{l.foreach_(Ue(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.writeTree_=e}static empty(){return new Vt(new Te(null))}}function Ps(r,e,n){if(ce(e))return new Vt(new Te(n));{const s=r.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let a=s.value;const c=wt(l,e);return a=a.updateChild(c,n),new Vt(r.writeTree_.set(l,a))}else{const l=new Te(n),a=r.writeTree_.setTree(e,l);return new Vt(a)}}}function qc(r,e,n){let s=r;return it(n,(l,a)=>{s=Ps(s,Ue(e,l),a)}),s}function dg(r,e){if(ce(e))return Vt.empty();{const n=r.writeTree_.setTree(e,new Te(null));return new Vt(n)}}function Gc(r,e){return Lr(r,e)!=null}function Lr(r,e){const n=r.writeTree_.findRootMostValueAndPath(e);return n!=null?r.writeTree_.get(n.path).getChild(wt(n.path,e)):null}function fg(r){const e=[],n=r.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ze,(s,l)=>{e.push(new ae(s,l))}):r.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new ae(s,l.value))}),e}function Jn(r,e){if(ce(e))return r;{const n=Lr(r,e);return n!=null?new Vt(new Te(n)):new Vt(r.writeTree_.subtree(e))}}function Kc(r){return r.writeTree_.isEmpty()}function vi(r,e){return _y(_e(),r.writeTree_,e)}function _y(r,e,n){if(e.value!=null)return n.updateChild(r,e.value);{let s=null;return e.children.inorderTraversal((l,a)=>{l===".priority"?(U(a.value!==null,"Priority writes must always be leaf nodes"),s=a.value):n=_y(Ue(r,l),a,n)}),!n.getChild(r).isEmpty()&&s!==null&&(n=n.updateChild(Ue(r,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(r,e){return Ey(e,r)}function $k(r,e,n,s,l){U(s>r.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),r.allWrites.push({path:e,snap:n,writeId:s,visible:l}),l&&(r.visibleWrites=Ps(r.visibleWrites,e,n)),r.lastWriteId=s}function qk(r,e,n,s){U(s>r.lastWriteId,"Stacking an older merge on top of newer ones"),r.allWrites.push({path:e,children:n,writeId:s,visible:!0}),r.visibleWrites=qc(r.visibleWrites,e,n),r.lastWriteId=s}function Gk(r,e){for(let n=0;n<r.allWrites.length;n++){const s=r.allWrites[n];if(s.writeId===e)return s}return null}function Kk(r,e){const n=r.allWrites.findIndex(h=>h.writeId===e);U(n>=0,"removeWrite called with nonexistent writeId.");const s=r.allWrites[n];r.allWrites.splice(n,1);let l=s.visible,a=!1,c=r.allWrites.length-1;for(;l&&c>=0;){const h=r.allWrites[c];h.visible&&(c>=n&&Qk(h,s.path)?l=!1:Dt(s.path,h.path)&&(a=!0)),c--}if(l){if(a)return Yk(r),!0;if(s.snap)r.visibleWrites=dg(r.visibleWrites,s.path);else{const h=s.children;it(h,p=>{r.visibleWrites=dg(r.visibleWrites,Ue(s.path,p))})}return!0}else return!1}function Qk(r,e){if(r.snap)return Dt(r.path,e);for(const n in r.children)if(r.children.hasOwnProperty(n)&&Dt(Ue(r.path,n),e))return!0;return!1}function Yk(r){r.visibleWrites=yy(r.allWrites,Xk,_e()),r.allWrites.length>0?r.lastWriteId=r.allWrites[r.allWrites.length-1].writeId:r.lastWriteId=-1}function Xk(r){return r.visible}function yy(r,e,n){let s=Vt.empty();for(let l=0;l<r.length;++l){const a=r[l];if(e(a)){const c=a.path;let h;if(a.snap)Dt(n,c)?(h=wt(n,c),s=Ps(s,h,a.snap)):Dt(c,n)&&(h=wt(c,n),s=Ps(s,_e(),a.snap.getChild(h)));else if(a.children){if(Dt(n,c))h=wt(n,c),s=qc(s,h,a.children);else if(Dt(c,n))if(h=wt(c,n),ce(h))s=qc(s,_e(),a.children);else{const p=pi(a.children,le(h));if(p){const m=p.getChild(ke(h));s=Ps(s,_e(),m)}}}else throw Si("WriteRecord should have .snap or .children")}}return s}function vy(r,e,n,s,l){if(!s&&!l){const a=Lr(r.visibleWrites,e);if(a!=null)return a;{const c=Jn(r.visibleWrites,e);if(Kc(c))return n;if(n==null&&!Gc(c,_e()))return null;{const h=n||ee.EMPTY_NODE;return vi(c,h)}}}else{const a=Jn(r.visibleWrites,e);if(!l&&Kc(a))return n;if(!l&&n==null&&!Gc(a,_e()))return null;{const c=function(m){return(m.visible||l)&&(!s||!~s.indexOf(m.writeId))&&(Dt(m.path,e)||Dt(e,m.path))},h=yy(r.allWrites,c,e),p=n||ee.EMPTY_NODE;return vi(h,p)}}}function Jk(r,e,n){let s=ee.EMPTY_NODE;const l=Lr(r.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(ze,(a,c)=>{s=s.updateImmediateChild(a,c)}),s;if(n){const a=Jn(r.visibleWrites,e);return n.forEachChild(ze,(c,h)=>{const p=vi(Jn(a,new Ae(c)),h);s=s.updateImmediateChild(c,p)}),fg(a).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const a=Jn(r.visibleWrites,e);return fg(a).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function Zk(r,e,n,s,l){U(s||l,"Either existingEventSnap or existingServerSnap must exist");const a=Ue(e,n);if(Gc(r.visibleWrites,a))return null;{const c=Jn(r.visibleWrites,a);return Kc(c)?l.getChild(n):vi(c,l.getChild(n))}}function e0(r,e,n,s){const l=Ue(e,n),a=Lr(r.visibleWrites,l);if(a!=null)return a;if(s.isCompleteForChild(n)){const c=Jn(r.visibleWrites,l);return vi(c,s.getNode().getImmediateChild(n))}else return null}function t0(r,e){return Lr(r.visibleWrites,e)}function n0(r,e,n,s,l,a,c){let h;const p=Jn(r.visibleWrites,e),m=Lr(p,_e());if(m!=null)h=m;else if(n!=null)h=vi(p,n);else return[];if(h=h.withIndex(c),!h.isEmpty()&&!h.isLeafNode()){const _=[],y=c.getCompare(),w=a?h.getReverseIteratorFrom(s,c):h.getIteratorFrom(s,c);let R=w.getNext();for(;R&&_.length<l;)y(R,s)!==0&&_.push(R),R=w.getNext();return _}else return[]}function r0(){return{visibleWrites:Vt.empty(),allWrites:[],lastWriteId:-1}}function Hl(r,e,n,s){return vy(r.writeTree,r.treePath,e,n,s)}function Fd(r,e){return Jk(r.writeTree,r.treePath,e)}function hg(r,e,n,s){return Zk(r.writeTree,r.treePath,e,n,s)}function $l(r,e){return t0(r.writeTree,Ue(r.treePath,e))}function i0(r,e,n,s,l,a){return n0(r.writeTree,r.treePath,e,n,s,l,a)}function Ud(r,e,n){return e0(r.writeTree,r.treePath,e,n)}function wy(r,e){return Ey(Ue(r.treePath,e),r.writeTree)}function Ey(r,e){return{treePath:r,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;U(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),U(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const a=l.type;if(n==="child_added"&&a==="child_removed")this.changeMap.set(s,js(s,e.snapshotNode,l.snapshotNode));else if(n==="child_removed"&&a==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&a==="child_changed")this.changeMap.set(s,zs(s,l.oldSnap));else if(n==="child_changed"&&a==="child_added")this.changeMap.set(s,_i(s,e.snapshotNode));else if(n==="child_changed"&&a==="child_changed")this.changeMap.set(s,js(s,e.snapshotNode,l.oldSnap));else throw Si("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Ay=new o0;class zd{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Rr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ud(this.writes_,e,s)}}getChildAfterChild(e,n,s){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Nr(this.viewCache_),a=i0(this.writes_,l,n,1,s,e);return a.length===0?null:a[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l0(r){return{filter:r}}function a0(r,e){U(e.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),U(e.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed")}function u0(r,e,n,s,l){const a=new s0;let c,h;if(n.type===Bt.OVERWRITE){const m=n;m.source.fromUser?c=Qc(r,e,m.path,m.snap,s,l,a):(U(m.source.fromServer,"Unknown source."),h=m.source.tagged||e.serverCache.isFiltered()&&!ce(m.path),c=ql(r,e,m.path,m.snap,s,l,h,a))}else if(n.type===Bt.MERGE){const m=n;m.source.fromUser?c=d0(r,e,m.path,m.children,s,l,a):(U(m.source.fromServer,"Unknown source."),h=m.source.tagged||e.serverCache.isFiltered(),c=Yc(r,e,m.path,m.children,s,l,h,a))}else if(n.type===Bt.ACK_USER_WRITE){const m=n;m.revert?c=p0(r,e,m.path,s,l,a):c=f0(r,e,m.path,m.affectedTree,s,l,a)}else if(n.type===Bt.LISTEN_COMPLETE)c=h0(r,e,n.path,s,a);else throw Si("Unknown operation type: "+n.type);const p=a.getChanges();return c0(e,c,p),{viewCache:c,changes:p}}function c0(r,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),a=$c(r);(n.length>0||!r.eventCache.isFullyInitialized()||l&&!s.getNode().equals(a)||!s.getNode().getPriority().equals(a.getPriority()))&&n.push(py($c(e)))}}function Sy(r,e,n,s,l,a){const c=e.eventCache;if($l(s,n)!=null)return e;{let h,p;if(ce(n))if(U(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=Nr(e),_=m instanceof ee?m:ee.EMPTY_NODE,y=Fd(s,_);h=r.filter.updateFullNode(e.eventCache.getNode(),y,a)}else{const m=Hl(s,Nr(e));h=r.filter.updateFullNode(e.eventCache.getNode(),m,a)}else{const m=le(n);if(m===".priority"){U(er(n)===1,"Can't have a priority with additional path components");const _=c.getNode();p=e.serverCache.getNode();const y=hg(s,n,_,p);y!=null?h=r.filter.updatePriority(_,y):h=c.getNode()}else{const _=ke(n);let y;if(c.isCompleteForChild(m)){p=e.serverCache.getNode();const w=hg(s,n,c.getNode(),p);w!=null?y=c.getNode().getImmediateChild(m).updateChild(_,w):y=c.getNode().getImmediateChild(m)}else y=Ud(s,m,e.serverCache);y!=null?h=r.filter.updateChild(c.getNode(),m,y,_,l,a):h=c.getNode()}}return Ns(e,h,c.isFullyInitialized()||ce(n),r.filter.filtersNodes())}}function ql(r,e,n,s,l,a,c,h){const p=e.serverCache;let m;const _=c?r.filter:r.filter.getIndexedFilter();if(ce(n))m=_.updateFullNode(p.getNode(),s,null);else if(_.filtersNodes()&&!p.isFiltered()){const R=p.getNode().updateChild(n,s);m=_.updateFullNode(p.getNode(),R,null)}else{const R=le(n);if(!p.isCompleteForPath(n)&&er(n)>1)return e;const T=ke(n),x=p.getNode().getImmediateChild(R).updateChild(T,s);R===".priority"?m=_.updatePriority(p.getNode(),x):m=_.updateChild(p.getNode(),R,x,T,Ay,null)}const y=gy(e,m,p.isFullyInitialized()||ce(n),_.filtersNodes()),w=new zd(l,y,a);return Sy(r,y,n,l,w,h)}function Qc(r,e,n,s,l,a,c){const h=e.eventCache;let p,m;const _=new zd(l,e,a);if(ce(n))m=r.filter.updateFullNode(e.eventCache.getNode(),s,c),p=Ns(e,m,!0,r.filter.filtersNodes());else{const y=le(n);if(y===".priority")m=r.filter.updatePriority(e.eventCache.getNode(),s),p=Ns(e,m,h.isFullyInitialized(),h.isFiltered());else{const w=ke(n),R=h.getNode().getImmediateChild(y);let T;if(ce(w))T=s;else{const P=_.getCompleteChild(y);P!=null?kd(w)===".priority"&&P.getChild(ly(w)).isEmpty()?T=P:T=P.updateChild(w,s):T=ee.EMPTY_NODE}if(R.equals(T))p=e;else{const P=r.filter.updateChild(h.getNode(),y,T,w,_,c);p=Ns(e,P,h.isFullyInitialized(),r.filter.filtersNodes())}}}return p}function pg(r,e){return r.eventCache.isCompleteForChild(e)}function d0(r,e,n,s,l,a,c){let h=e;return s.foreach((p,m)=>{const _=Ue(n,p);pg(e,le(_))&&(h=Qc(r,h,_,m,l,a,c))}),s.foreach((p,m)=>{const _=Ue(n,p);pg(e,le(_))||(h=Qc(r,h,_,m,l,a,c))}),h}function mg(r,e,n){return n.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function Yc(r,e,n,s,l,a,c,h){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,m;ce(n)?m=s:m=new Te(null).setTree(n,s);const _=e.serverCache.getNode();return m.children.inorderTraversal((y,w)=>{if(_.hasChild(y)){const R=e.serverCache.getNode().getImmediateChild(y),T=mg(r,R,w);p=ql(r,p,new Ae(y),T,l,a,c,h)}}),m.children.inorderTraversal((y,w)=>{const R=!e.serverCache.isCompleteForChild(y)&&w.value===null;if(!_.hasChild(y)&&!R){const T=e.serverCache.getNode().getImmediateChild(y),P=mg(r,T,w);p=ql(r,p,new Ae(y),P,l,a,c,h)}}),p}function f0(r,e,n,s,l,a,c){if($l(l,n)!=null)return e;const h=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(ce(n)&&p.isFullyInitialized()||p.isCompleteForPath(n))return ql(r,e,n,p.getNode().getChild(n),l,a,h,c);if(ce(n)){let m=new Te(null);return p.getNode().forEachChild(fi,(_,y)=>{m=m.set(new Ae(_),y)}),Yc(r,e,n,m,l,a,h,c)}else return e}else{let m=new Te(null);return s.foreach((_,y)=>{const w=Ue(n,_);p.isCompleteForPath(w)&&(m=m.set(_,p.getNode().getChild(w)))}),Yc(r,e,n,m,l,a,h,c)}}function h0(r,e,n,s,l){const a=e.serverCache,c=gy(e,a.getNode(),a.isFullyInitialized()||ce(n),a.isFiltered());return Sy(r,c,n,s,Ay,l)}function p0(r,e,n,s,l,a){let c;if($l(s,n)!=null)return e;{const h=new zd(s,e,l),p=e.eventCache.getNode();let m;if(ce(n)||le(n)===".priority"){let _;if(e.serverCache.isFullyInitialized())_=Hl(s,Nr(e));else{const y=e.serverCache.getNode();U(y instanceof ee,"serverChildren would be complete if leaf node"),_=Fd(s,y)}_=_,m=r.filter.updateFullNode(p,_,a)}else{const _=le(n);let y=Ud(s,_,e.serverCache);y==null&&e.serverCache.isCompleteForChild(_)&&(y=p.getImmediateChild(_)),y!=null?m=r.filter.updateChild(p,_,y,ke(n),h,a):e.eventCache.getNode().hasChild(_)?m=r.filter.updateChild(p,_,ee.EMPTY_NODE,ke(n),h,a):m=p,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=Hl(s,Nr(e)),c.isLeafNode()&&(m=r.filter.updateFullNode(m,c,a)))}return c=e.serverCache.isFullyInitialized()||$l(s,_e())!=null,Ns(e,m,c,r.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new xd(s.getIndex()),a=Lk(s);this.processor_=l0(a);const c=n.serverCache,h=n.eventCache,p=l.updateFullNode(ee.EMPTY_NODE,c.getNode(),null),m=a.updateFullNode(ee.EMPTY_NODE,h.getNode(),null),_=new Rr(p,c.isFullyInitialized(),l.filtersNodes()),y=new Rr(m,h.isFullyInitialized(),a.filtersNodes());this.viewCache_=sa(y,_),this.eventGenerator_=new jk(this.query_)}get query(){return this.query_}}function g0(r){return r.viewCache_.serverCache.getNode()}function _0(r,e){const n=Nr(r.viewCache_);return n&&(r.query._queryParams.loadsAllData()||!ce(e)&&!n.getImmediateChild(le(e)).isEmpty())?n.getChild(e):null}function gg(r){return r.eventRegistrations_.length===0}function y0(r,e){r.eventRegistrations_.push(e)}function _g(r,e,n){const s=[];if(n){U(e==null,"A cancel should cancel all event registrations.");const l=r.query._path;r.eventRegistrations_.forEach(a=>{const c=a.createCancelEvent(n,l);c&&s.push(c)})}if(e){let l=[];for(let a=0;a<r.eventRegistrations_.length;++a){const c=r.eventRegistrations_[a];if(!c.matches(e))l.push(c);else if(e.hasAnyCallback()){l=l.concat(r.eventRegistrations_.slice(a+1));break}}r.eventRegistrations_=l}else r.eventRegistrations_=[];return s}function yg(r,e,n,s){e.type===Bt.MERGE&&e.source.queryId!==null&&(U(Nr(r.viewCache_),"We should always have a full cache before handling merges"),U($c(r.viewCache_),"Missing event cache, even though we have a server cache"));const l=r.viewCache_,a=u0(r.processor_,l,e,n,s);return a0(r.processor_,a.viewCache),U(a.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),r.viewCache_=a.viewCache,Cy(r,a.changes,a.viewCache.eventCache.getNode(),null)}function v0(r,e){const n=r.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ze,(a,c)=>{s.push(_i(a,c))}),n.isFullyInitialized()&&s.push(py(n.getNode())),Cy(r,s,n.getNode(),e)}function Cy(r,e,n,s){const l=s?[s]:r.eventRegistrations_;return Wk(r.eventGenerator_,e,n,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gl;class w0{constructor(){this.views=new Map}}function E0(r){U(!Gl,"__referenceConstructor has already been defined"),Gl=r}function A0(){return U(Gl,"Reference.ts has not been loaded"),Gl}function S0(r){return r.views.size===0}function jd(r,e,n,s){const l=e.source.queryId;if(l!==null){const a=r.views.get(l);return U(a!=null,"SyncTree gave us an op for an invalid query."),yg(a,e,n,s)}else{let a=[];for(const c of r.views.values())a=a.concat(yg(c,e,n,s));return a}}function C0(r,e,n,s,l){const a=e._queryIdentifier,c=r.views.get(a);if(!c){let h=Hl(n,l?s:null),p=!1;h?p=!0:s instanceof ee?(h=Fd(n,s),p=!1):(h=ee.EMPTY_NODE,p=!1);const m=sa(new Rr(h,p,!1),new Rr(s,l,!1));return new m0(e,m)}return c}function I0(r,e,n,s,l,a){const c=C0(r,e,s,l,a);return r.views.has(e._queryIdentifier)||r.views.set(e._queryIdentifier,c),y0(c,n),v0(c,n)}function T0(r,e,n,s){const l=e._queryIdentifier,a=[];let c=[];const h=tr(r);if(l==="default")for(const[p,m]of r.views.entries())c=c.concat(_g(m,n,s)),gg(m)&&(r.views.delete(p),m.query._queryParams.loadsAllData()||a.push(m.query));else{const p=r.views.get(l);p&&(c=c.concat(_g(p,n,s)),gg(p)&&(r.views.delete(l),p.query._queryParams.loadsAllData()||a.push(p.query)))}return h&&!tr(r)&&a.push(new(A0())(e._repo,e._path)),{removed:a,events:c}}function Iy(r){const e=[];for(const n of r.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function hi(r,e){let n=null;for(const s of r.views.values())n=n||_0(s,e);return n}function Ty(r,e){if(e._queryParams.loadsAllData())return oa(r);{const s=e._queryIdentifier;return r.views.get(s)}}function ky(r,e){return Ty(r,e)!=null}function tr(r){return oa(r)!=null}function oa(r){for(const e of r.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kl;function k0(r){U(!Kl,"__referenceConstructor has already been defined"),Kl=r}function R0(){return U(Kl,"Reference.ts has not been loaded"),Kl}let N0=1;class vg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Te(null),this.pendingWriteTree_=r0(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ry(r,e,n,s,l){return $k(r.pendingWriteTree_,e,n,s,l),l?Ri(r,new kr(Ld(),e,n)):[]}function P0(r,e,n,s){qk(r.pendingWriteTree_,e,n,s);const l=Te.fromObject(n);return Ri(r,new yi(Ld(),e,l))}function Kn(r,e,n=!1){const s=Gk(r.pendingWriteTree_,e);if(Kk(r.pendingWriteTree_,e)){let a=new Te(null);return s.snap!=null?a=a.set(_e(),!0):it(s.children,c=>{a=a.set(new Ae(c),!0)}),Ri(r,new Vl(s.path,a,n))}else return[]}function la(r,e,n){return Ri(r,new kr(Dd(),e,n))}function x0(r,e,n){const s=Te.fromObject(n);return Ri(r,new yi(Dd(),e,s))}function O0(r,e){return Ri(r,new Bs(Dd(),e))}function L0(r,e,n){const s=Bd(r,n);if(s){const l=Vd(s),a=l.path,c=l.queryId,h=wt(a,e),p=new Bs(Md(c),h);return Hd(r,a,p)}else return[]}function Xc(r,e,n,s,l=!1){const a=e._path,c=r.syncPointTree_.get(a);let h=[];if(c&&(e._queryIdentifier==="default"||ky(c,e))){const p=T0(c,e,n,s);S0(c)&&(r.syncPointTree_=r.syncPointTree_.remove(a));const m=p.removed;if(h=p.events,!l){const _=m.findIndex(w=>w._queryParams.loadsAllData())!==-1,y=r.syncPointTree_.findOnPath(a,(w,R)=>tr(R));if(_&&!y){const w=r.syncPointTree_.subtree(a);if(!w.isEmpty()){const R=b0(w);for(let T=0;T<R.length;++T){const P=R[T],x=P.query,b=xy(r,P);r.listenProvider_.startListening(xs(x),Ql(r,x),b.hashFn,b.onComplete)}}}!y&&m.length>0&&!s&&(_?r.listenProvider_.stopListening(xs(e),null):m.forEach(w=>{const R=r.queryToTagMap.get(aa(w));r.listenProvider_.stopListening(xs(w),R)}))}F0(r,m)}return h}function D0(r,e,n,s){const l=Bd(r,s);if(l!=null){const a=Vd(l),c=a.path,h=a.queryId,p=wt(c,e),m=new kr(Md(h),p,n);return Hd(r,c,m)}else return[]}function M0(r,e,n,s){const l=Bd(r,s);if(l){const a=Vd(l),c=a.path,h=a.queryId,p=wt(c,e),m=Te.fromObject(n),_=new yi(Md(h),p,m);return Hd(r,c,_)}else return[]}function wg(r,e,n,s=!1){const l=e._path;let a=null,c=!1;r.syncPointTree_.foreachOnPath(l,(w,R)=>{const T=wt(w,l);a=a||hi(R,T),c=c||tr(R)});let h=r.syncPointTree_.get(l);h?(c=c||tr(h),a=a||hi(h,_e())):(h=new w0,r.syncPointTree_=r.syncPointTree_.set(l,h));let p;a!=null?p=!0:(p=!1,a=ee.EMPTY_NODE,r.syncPointTree_.subtree(l).foreachChild((R,T)=>{const P=hi(T,_e());P&&(a=a.updateImmediateChild(R,P))}));const m=ky(h,e);if(!m&&!e._queryParams.loadsAllData()){const w=aa(e);U(!r.queryToTagMap.has(w),"View does not exist, but we have a tag");const R=U0();r.queryToTagMap.set(w,R),r.tagToQueryMap.set(R,w)}const _=bd(r.pendingWriteTree_,l);let y=I0(h,e,n,_,a,p);if(!m&&!c&&!s){const w=Ty(h,e);y=y.concat(z0(r,e,w))}return y}function Wd(r,e,n){const l=r.pendingWriteTree_,a=r.syncPointTree_.findOnPath(e,(c,h)=>{const p=wt(c,e),m=hi(h,p);if(m)return m});return vy(l,e,a,n,!0)}function Ri(r,e){return Ny(e,r.syncPointTree_,null,bd(r.pendingWriteTree_,_e()))}function Ny(r,e,n,s){if(ce(r.path))return Py(r,e,n,s);{const l=e.get(_e());n==null&&l!=null&&(n=hi(l,_e()));let a=[];const c=le(r.path),h=r.operationForChild(c),p=e.children.get(c);if(p&&h){const m=n?n.getImmediateChild(c):null,_=wy(s,c);a=a.concat(Ny(h,p,m,_))}return l&&(a=a.concat(jd(l,r,s,n))),a}}function Py(r,e,n,s){const l=e.get(_e());n==null&&l!=null&&(n=hi(l,_e()));let a=[];return e.children.inorderTraversal((c,h)=>{const p=n?n.getImmediateChild(c):null,m=wy(s,c),_=r.operationForChild(c);_&&(a=a.concat(Py(_,h,p,m)))}),l&&(a=a.concat(jd(l,r,s,n))),a}function xy(r,e){const n=e.query,s=Ql(r,n);return{hashFn:()=>(g0(e)||ee.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?L0(r,n._path,s):O0(r,n._path);{const a=xT(l,n);return Xc(r,n,null,a)}}}}function Ql(r,e){const n=aa(e);return r.queryToTagMap.get(n)}function aa(r){return r._path.toString()+"$"+r._queryIdentifier}function Bd(r,e){return r.tagToQueryMap.get(e)}function Vd(r){const e=r.indexOf("$");return U(e!==-1&&e<r.length-1,"Bad queryKey."),{queryId:r.substr(e+1),path:new Ae(r.substr(0,e))}}function Hd(r,e,n){const s=r.syncPointTree_.get(e);U(s,"Missing sync point for query tag that we're tracking");const l=bd(r.pendingWriteTree_,e);return jd(s,n,l,null)}function b0(r){return r.fold((e,n,s)=>{if(n&&tr(n))return[oa(n)];{let l=[];return n&&(l=Iy(n)),it(s,(a,c)=>{l=l.concat(c)}),l}})}function xs(r){return r._queryParams.loadsAllData()&&!r._queryParams.isDefault()?new(R0())(r._repo,r._path):r}function F0(r,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const l=aa(s),a=r.queryToTagMap.get(l);r.queryToTagMap.delete(l),r.tagToQueryMap.delete(a)}}}function U0(){return N0++}function z0(r,e,n){const s=e._path,l=Ql(r,e),a=xy(r,n),c=r.listenProvider_.startListening(xs(e),l,a.hashFn,a.onComplete),h=r.syncPointTree_.subtree(s);if(l)U(!tr(h.value),"If we're adding a query, it shouldn't be shadowed");else{const p=h.fold((m,_,y)=>{if(!ce(m)&&_&&tr(_))return[oa(_).query];{let w=[];return _&&(w=w.concat(Iy(_).map(R=>R.query))),it(y,(R,T)=>{w=w.concat(T)}),w}});for(let m=0;m<p.length;++m){const _=p[m];r.listenProvider_.stopListening(xs(_),Ql(r,_))}}return c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new $d(n)}node(){return this.node_}}class qd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ue(this.path_,e);return new qd(this.syncTree_,n)}node(){return Wd(this.syncTree_,this.path_)}}const j0=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},Eg=function(r,e,n){if(!r||typeof r!="object")return r;if(U(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return W0(r[".sv"],e,n);if(typeof r[".sv"]=="object")return B0(r[".sv"],e);U(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},W0=function(r,e,n){switch(r){case"timestamp":return n.timestamp;default:U(!1,"Unexpected server value: "+r)}},B0=function(r,e,n){r.hasOwnProperty("increment")||U(!1,"Unexpected server value: "+JSON.stringify(r,null,2));const s=r.increment;typeof s!="number"&&U(!1,"Unexpected increment value: "+s);const l=e.node();if(U(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const c=l.getValue();return typeof c!="number"?s:c+s},Oy=function(r,e,n,s){return Gd(e,new qd(n,r),s)},Ly=function(r,e,n){return Gd(r,new $d(e),n)};function Gd(r,e,n){const s=r.getPriority().val(),l=Eg(s,e.getImmediateChild(".priority"),n);let a;if(r.isLeafNode()){const c=r,h=Eg(c.getValue(),e,n);return h!==c.getValue()||l!==c.getPriority().val()?new Qe(h,Xe(l)):r}else{const c=r;return a=c,l!==c.getPriority().val()&&(a=a.updatePriority(new Qe(l))),c.forEachChild(ze,(h,p)=>{const m=Gd(p,e.getImmediateChild(h),n);m!==p&&(a=a.updateImmediateChild(h,m))}),a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Qd(r,e){let n=e instanceof Ae?e:new Ae(e),s=r,l=le(n);for(;l!==null;){const a=pi(s.node.children,l)||{children:{},childCount:0};s=new Kd(l,s,a),n=ke(n),l=le(n)}return s}function Ni(r){return r.node.value}function Dy(r,e){r.node.value=e,Jc(r)}function My(r){return r.node.childCount>0}function V0(r){return Ni(r)===void 0&&!My(r)}function ua(r,e){it(r.node.children,(n,s)=>{e(new Kd(n,r,s))})}function by(r,e,n,s){n&&e(r),ua(r,l=>{by(l,e,!0)})}function H0(r,e,n){let s=r.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ro(r){return new Ae(r.parent===null?r.name:ro(r.parent)+"/"+r.name)}function Jc(r){r.parent!==null&&$0(r.parent,r.name,r)}function $0(r,e,n){const s=V0(n),l=sn(r.node.children,e);s&&l?(delete r.node.children[e],r.node.childCount--,Jc(r)):!s&&!l&&(r.node.children[e]=n.node,r.node.childCount++,Jc(r))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0=/[\[\].#$\/\u0000-\u001F\u007F]/,G0=/[\[\].#$\u0000-\u001F\u007F]/,kc=10*1024*1024,Yd=function(r){return typeof r=="string"&&r.length!==0&&!q0.test(r)},Fy=function(r){return typeof r=="string"&&r.length!==0&&!G0.test(r)},K0=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),Fy(r)},Q0=function(r){return r===null||typeof r=="string"||typeof r=="number"&&!Ad(r)||r&&typeof r=="object"&&sn(r,".sv")},Uy=function(r,e,n,s){s&&e===void 0||ca(Zl(r,"value"),e,n)},ca=function(r,e,n){const s=n instanceof Ae?new dk(n,r):n;if(e===void 0)throw new Error(r+"contains undefined "+wr(s));if(typeof e=="function")throw new Error(r+"contains a function "+wr(s)+" with contents = "+e.toString());if(Ad(e))throw new Error(r+"contains "+e.toString()+" "+wr(s));if(typeof e=="string"&&e.length>kc/3&&ea(e)>kc)throw new Error(r+"contains a string greater than "+kc+" utf8 bytes "+wr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,a=!1;if(it(e,(c,h)=>{if(c===".value")l=!0;else if(c!==".priority"&&c!==".sv"&&(a=!0,!Yd(c)))throw new Error(r+" contains an invalid key ("+c+") "+wr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);fk(s,c),ca(r,h,s),hk(s)}),l&&a)throw new Error(r+' contains ".value" child '+wr(s)+" in addition to actual children.")}},Y0=function(r,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const a=Us(s);for(let c=0;c<a.length;c++)if(!(a[c]===".priority"&&c===a.length-1)){if(!Yd(a[c]))throw new Error(r+"contains an invalid key ("+a[c]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(ck);let l=null;for(n=0;n<e.length;n++){if(s=e[n],l!==null&&Dt(l,s))throw new Error(r+"contains a path "+l.toString()+" that is ancestor of another path "+s.toString());l=s}},X0=function(r,e,n,s){const l=Zl(r,"values");if(typeof e!="object"||Array.isArray(e))throw new Error(l+" must be an object containing the children to replace.");const a=[];it(e,(c,h)=>{const p=new Ae(c);if(ca(l,h,Ue(n,p)),kd(p)===".priority"&&!Q0(h))throw new Error(l+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");a.push(p)}),Y0(l,a)},zy=function(r,e,n,s){if(!Fy(n))throw new Error(Zl(r,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},J0=function(r,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),zy(r,e,n)},Xd=function(r,e){if(le(e)===".info")throw new Error(r+" failed = Can't modify data under /.info/")},Z0=function(r,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Yd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!K0(n))throw new Error(Zl(r,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function da(r,e){let n=null;for(let s=0;s<e.length;s++){const l=e[s],a=l.getPath();n!==null&&!Rd(a,n.path)&&(r.eventLists_.push(n),n=null),n===null&&(n={events:[],path:a}),n.events.push(l)}n&&r.eventLists_.push(n)}function jy(r,e,n){da(r,n),Wy(r,s=>Rd(s,e))}function $t(r,e,n){da(r,n),Wy(r,s=>Dt(s,e)||Dt(e,s))}function Wy(r,e){r.recursionDepth_++;let n=!0;for(let s=0;s<r.eventLists_.length;s++){const l=r.eventLists_[s];if(l){const a=l.path;e(a)?(tR(r.eventLists_[s]),r.eventLists_[s]=null):n=!1}}n&&(r.eventLists_=[]),r.recursionDepth_--}function tR(r){for(let e=0;e<r.events.length;e++){const n=r.events[e];if(n!==null){r.events[e]=null;const s=n.getEventRunner();ks&&rt("event: "+n.toString()),ki(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR="repo_interrupt",rR=25;class iR{constructor(e,n,s,l){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new eR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Bl(),this.transactionQueueTree_=new Kd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function sR(r,e,n){if(r.stats_=Id(r.repoInfo_),r.forceRestClient_||MT())r.server_=new Wl(r.repoInfo_,(s,l,a,c)=>{Ag(r,s,l,a,c)},r.authTokenProvider_,r.appCheckProvider_),setTimeout(()=>Sg(r,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Je(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}r.persistentConnection_=new wn(r.repoInfo_,e,(s,l,a,c)=>{Ag(r,s,l,a,c)},s=>{Sg(r,s)},s=>{oR(r,s)},r.authTokenProvider_,r.appCheckProvider_,n),r.server_=r.persistentConnection_}r.authTokenProvider_.addTokenChangeListener(s=>{r.server_.refreshAuthToken(s)}),r.appCheckProvider_.addTokenChangeListener(s=>{r.server_.refreshAppCheckToken(s.token)}),r.statsReporter_=jT(r.repoInfo_,()=>new zk(r.stats_,r.server_)),r.infoData_=new Dk,r.infoSyncTree_=new vg({startListening:(s,l,a,c)=>{let h=[];const p=r.infoData_.getNode(s._path);return p.isEmpty()||(h=la(r.infoSyncTree_,s._path,p),setTimeout(()=>{c("ok")},0)),h},stopListening:()=>{}}),Jd(r,"connected",!1),r.serverSyncTree_=new vg({startListening:(s,l,a,c)=>(r.server_.listen(s,a,l,(h,p)=>{const m=c(h,p);$t(r.eventQueue_,s._path,m)}),[]),stopListening:(s,l)=>{r.server_.unlisten(s,l)}})}function By(r){const n=r.infoData_.getNode(new Ae(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function fa(r){return j0({timestamp:By(r)})}function Ag(r,e,n,s,l){r.dataUpdateCount++;const a=new Ae(e);n=r.interceptServerDataCallback_?r.interceptServerDataCallback_(e,n):n;let c=[];if(l)if(s){const p=Pl(n,m=>Xe(m));c=M0(r.serverSyncTree_,a,p,l)}else{const p=Xe(n);c=D0(r.serverSyncTree_,a,p,l)}else if(s){const p=Pl(n,m=>Xe(m));c=x0(r.serverSyncTree_,a,p)}else{const p=Xe(n);c=la(r.serverSyncTree_,a,p)}let h=a;c.length>0&&(h=wi(r,a)),$t(r.eventQueue_,h,c)}function Sg(r,e){Jd(r,"connected",e),e===!1&&uR(r)}function oR(r,e){it(e,(n,s)=>{Jd(r,n,s)})}function Jd(r,e,n){const s=new Ae("/.info/"+e),l=Xe(n);r.infoData_.updateSnapshot(s,l);const a=la(r.infoSyncTree_,s,l);$t(r.eventQueue_,s,a)}function Zd(r){return r.nextWriteId_++}function lR(r,e,n,s,l){ha(r,"set",{path:e.toString(),value:n,priority:s});const a=fa(r),c=Xe(n,s),h=Wd(r.serverSyncTree_,e),p=Ly(c,h,a),m=Zd(r),_=Ry(r.serverSyncTree_,e,p,m,!0);da(r.eventQueue_,_),r.server_.put(e.toString(),c.val(!0),(w,R)=>{const T=w==="ok";T||dt("set at "+e+" failed: "+w);const P=Kn(r.serverSyncTree_,m,!T);$t(r.eventQueue_,e,P),Zc(r,l,w,R)});const y=tf(r,e);wi(r,y),$t(r.eventQueue_,y,[])}function aR(r,e,n,s){ha(r,"update",{path:e.toString(),value:n});let l=!0;const a=fa(r),c={};if(it(n,(h,p)=>{l=!1,c[h]=Oy(Ue(e,h),Xe(p),r.serverSyncTree_,a)}),l)rt("update() called with empty data.  Don't do anything."),Zc(r,s,"ok",void 0);else{const h=Zd(r),p=P0(r.serverSyncTree_,e,c,h);da(r.eventQueue_,p),r.server_.merge(e.toString(),n,(m,_)=>{const y=m==="ok";y||dt("update at "+e+" failed: "+m);const w=Kn(r.serverSyncTree_,h,!y),R=w.length>0?wi(r,e):e;$t(r.eventQueue_,R,w),Zc(r,s,m,_)}),it(n,m=>{const _=tf(r,Ue(e,m));wi(r,_)}),$t(r.eventQueue_,e,[])}}function uR(r){ha(r,"onDisconnectEvents");const e=fa(r),n=Bl();Hc(r.onDisconnect_,_e(),(l,a)=>{const c=Oy(l,a,r.serverSyncTree_,e);my(n,l,c)});let s=[];Hc(n,_e(),(l,a)=>{s=s.concat(la(r.serverSyncTree_,l,a));const c=tf(r,l);wi(r,c)}),r.onDisconnect_=Bl(),$t(r.eventQueue_,_e(),s)}function cR(r,e,n){let s;le(e._path)===".info"?s=wg(r.infoSyncTree_,e,n):s=wg(r.serverSyncTree_,e,n),jy(r.eventQueue_,e._path,s)}function dR(r,e,n){let s;le(e._path)===".info"?s=Xc(r.infoSyncTree_,e,n):s=Xc(r.serverSyncTree_,e,n),jy(r.eventQueue_,e._path,s)}function fR(r){r.persistentConnection_&&r.persistentConnection_.interrupt(nR)}function ha(r,...e){let n="";r.persistentConnection_&&(n=r.persistentConnection_.id+":"),rt(n,...e)}function Zc(r,e,n,s){e&&ki(()=>{if(n==="ok")e(null);else{const l=(n||"error").toUpperCase();let a=l;s&&(a+=": "+s);const c=new Error(a);c.code=l,e(c)}})}function Vy(r,e,n){return Wd(r.serverSyncTree_,e,n)||ee.EMPTY_NODE}function ef(r,e=r.transactionQueueTree_){if(e||pa(r,e),Ni(e)){const n=$y(r,e);U(n.length>0,"Sending zero length transaction queue"),n.every(l=>l.status===0)&&hR(r,ro(e),n)}else My(e)&&ua(e,n=>{ef(r,n)})}function hR(r,e,n){const s=n.map(m=>m.currentWriteId),l=Vy(r,e,s);let a=l;const c=l.hash();for(let m=0;m<n.length;m++){const _=n[m];U(_.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),_.status=1,_.retryCount++;const y=wt(e,_.path);a=a.updateChild(y,_.currentOutputSnapshotRaw)}const h=a.val(!0),p=e;r.server_.put(p.toString(),h,m=>{ha(r,"transaction put response",{path:p.toString(),status:m});let _=[];if(m==="ok"){const y=[];for(let w=0;w<n.length;w++)n[w].status=2,_=_.concat(Kn(r.serverSyncTree_,n[w].currentWriteId)),n[w].onComplete&&y.push(()=>n[w].onComplete(null,!0,n[w].currentOutputSnapshotResolved)),n[w].unwatcher();pa(r,Qd(r.transactionQueueTree_,e)),ef(r,r.transactionQueueTree_),$t(r.eventQueue_,e,_);for(let w=0;w<y.length;w++)ki(y[w])}else{if(m==="datastale")for(let y=0;y<n.length;y++)n[y].status===3?n[y].status=4:n[y].status=0;else{dt("transaction at "+p.toString()+" failed: "+m);for(let y=0;y<n.length;y++)n[y].status=4,n[y].abortReason=m}wi(r,e)}},c)}function wi(r,e){const n=Hy(r,e),s=ro(n),l=$y(r,n);return pR(r,l,s),s}function pR(r,e,n){if(e.length===0)return;const s=[];let l=[];const c=e.filter(h=>h.status===0).map(h=>h.currentWriteId);for(let h=0;h<e.length;h++){const p=e[h],m=wt(n,p.path);let _=!1,y;if(U(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)_=!0,y=p.abortReason,l=l.concat(Kn(r.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=rR)_=!0,y="maxretry",l=l.concat(Kn(r.serverSyncTree_,p.currentWriteId,!0));else{const w=Vy(r,p.path,c);p.currentInputSnapshot=w;const R=e[h].update(w.val());if(R!==void 0){ca("transaction failed: Data returned ",R,p.path);let T=Xe(R);typeof R=="object"&&R!=null&&sn(R,".priority")||(T=T.updatePriority(w.getPriority()));const x=p.currentWriteId,b=fa(r),z=Ly(T,w,b);p.currentOutputSnapshotRaw=T,p.currentOutputSnapshotResolved=z,p.currentWriteId=Zd(r),c.splice(c.indexOf(x),1),l=l.concat(Ry(r.serverSyncTree_,p.path,z,p.currentWriteId,p.applyLocally)),l=l.concat(Kn(r.serverSyncTree_,x,!0))}else _=!0,y="nodata",l=l.concat(Kn(r.serverSyncTree_,p.currentWriteId,!0))}$t(r.eventQueue_,n,l),l=[],_&&(e[h].status=2,function(w){setTimeout(w,Math.floor(0))}(e[h].unwatcher),e[h].onComplete&&(y==="nodata"?s.push(()=>e[h].onComplete(null,!1,e[h].currentInputSnapshot)):s.push(()=>e[h].onComplete(new Error(y),!1,null))))}pa(r,r.transactionQueueTree_);for(let h=0;h<s.length;h++)ki(s[h]);ef(r,r.transactionQueueTree_)}function Hy(r,e){let n,s=r.transactionQueueTree_;for(n=le(e);n!==null&&Ni(s)===void 0;)s=Qd(s,n),e=ke(e),n=le(e);return s}function $y(r,e){const n=[];return qy(r,e,n),n.sort((s,l)=>s.order-l.order),n}function qy(r,e,n){const s=Ni(e);if(s)for(let l=0;l<s.length;l++)n.push(s[l]);ua(e,l=>{qy(r,l,n)})}function pa(r,e){const n=Ni(e);if(n){let s=0;for(let l=0;l<n.length;l++)n[l].status!==2&&(n[s]=n[l],s++);n.length=s,Dy(e,n.length>0?n:void 0)}ua(e,s=>{pa(r,s)})}function tf(r,e){const n=ro(Hy(r,e)),s=Qd(r.transactionQueueTree_,e);return H0(s,l=>{Rc(r,l)}),Rc(r,s),by(s,l=>{Rc(r,l)}),n}function Rc(r,e){const n=Ni(e);if(n){const s=[];let l=[],a=-1;for(let c=0;c<n.length;c++)n[c].status===3||(n[c].status===1?(U(a===c-1,"All SENT items should be at beginning of queue."),a=c,n[c].status=3,n[c].abortReason="set"):(U(n[c].status===0,"Unexpected transaction status in abort"),n[c].unwatcher(),l=l.concat(Kn(r.serverSyncTree_,n[c].currentWriteId,!0)),n[c].onComplete&&s.push(n[c].onComplete.bind(null,new Error("set"),!1,null))));a===-1?Dy(e,void 0):n.length=a+1,$t(r.eventQueue_,ro(e),l);for(let c=0;c<s.length;c++)ki(s[c])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mR(r){let e="";const n=r.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let l=n[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function gR(r){const e={};r.charAt(0)==="?"&&(r=r.substring(1));for(const n of r.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):dt(`Invalid query segment '${n}' in query '${r}'`)}return e}const Cg=function(r,e){const n=_R(r),s=n.namespace;n.domain==="firebase.com"&&Sn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Sn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||TT();const l=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new J_(n.host,n.secure,s,l,e,"",s!==n.subdomain),path:new Ae(n.pathString)}},_R=function(r){let e="",n="",s="",l="",a="",c=!0,h="https",p=443;if(typeof r=="string"){let m=r.indexOf("//");m>=0&&(h=r.substring(0,m-1),r=r.substring(m+2));let _=r.indexOf("/");_===-1&&(_=r.length);let y=r.indexOf("?");y===-1&&(y=r.length),e=r.substring(0,Math.min(_,y)),_<y&&(l=mR(r.substring(_,y)));const w=gR(r.substring(Math.min(r.length,y)));m=e.indexOf(":"),m>=0?(c=h==="https"||h==="wss",p=parseInt(e.substring(m+1),10)):m=e.length;const R=e.slice(0,m);if(R.toLowerCase()==="localhost")n="localhost";else if(R.split(".").length<=2)n=R;else{const T=e.indexOf(".");s=e.substring(0,T).toLowerCase(),n=e.substring(T+1),a=s}"ns"in w&&(a=w.ns)}return{host:e,port:p,domain:n,subdomain:s,secure:c,scheme:h,pathString:l,namespace:a}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",yR=function(){let r=0;const e=[];return function(n){const s=n===r;r=n;let l;const a=new Array(8);for(l=7;l>=0;l--)a[l]=Ig.charAt(n%64),n=Math.floor(n/64);U(n===0,"Cannot push at time == 0");let c=a.join("");if(s){for(l=11;l>=0&&e[l]===63;l--)e[l]=0;e[l]++}else for(l=0;l<12;l++)e[l]=Math.floor(Math.random()*64);for(l=0;l<12;l++)c+=Ig.charAt(e[l]);return U(c.length===20,"nextPushId: Length should be 20."),c}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e,n,s,l){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Je(this.snapshot.exportVal())}}class wR{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return U(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,n,s,l){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=l}get key(){return ce(this._path)?null:kd(this._path)}get ref(){return new sr(this._repo,this._path)}get _queryIdentifier(){const e=ug(this._queryParams),n=Sd(e);return n==="{}"?"default":n}get _queryObject(){return ug(this._queryParams)}isEqual(e){if(e=ht(e),!(e instanceof nf))return!1;const n=this._repo===e._repo,s=Rd(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return n&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+uk(this._path)}}class sr extends nf{constructor(e,n){super(e,n,new Od,!1)}get parent(){const e=ly(this._path);return e===null?null:new sr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Yl{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Ae(e),s=Vs(this.ref,e);return new Yl(this._node.getChild(n),s,ze)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new Yl(l,Vs(this.ref,s),ze)))}hasChild(e){const n=new Ae(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Is(r,e){return r=ht(r),r._checkNotDeleted("ref"),e!==void 0?Vs(r._root,e):r._root}function Vs(r,e){return r=ht(r),le(r._path)===null?J0("child","path",e):zy("child","path",e),new sr(r._repo,Ue(r._path,e))}function AR(r,e){r=ht(r),Xd("push",r._path),Uy("push",e,r._path,!0);const n=By(r._repo),s=yR(n),l=Vs(r,s),a=Vs(r,s);let c;return e!=null?c=rf(a,e).then(()=>a):c=Promise.resolve(a),l.then=c.then.bind(c),l.catch=c.then.bind(c,void 0),l}function SR(r){return Xd("remove",r._path),rf(r,null)}function rf(r,e){r=ht(r),Xd("set",r._path),Uy("set",e,r._path,!1);const n=new Ks;return lR(r._repo,r._path,e,null,n.wrapCallback(()=>{})),n.promise}function CR(r,e){X0("update",e,r._path);const n=new Ks;return aR(r._repo,r._path,e,n.wrapCallback(()=>{})),n.promise}class sf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new vR("value",this,new Yl(e.snapshotNode,new sr(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new wR(this,e,n):null}matches(e){return e instanceof sf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function IR(r,e,n,s,l){const a=new ER(n,void 0),c=new sf(a);return cR(r._repo,r,c),()=>dR(r._repo,r,c)}function TR(r,e,n,s){return IR(r,"value",e)}E0(sr);k0(sr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR="FIREBASE_DATABASE_EMULATOR_HOST",ed={};let RR=!1;function NR(r,e,n,s){r.repoInfo_=new J_(`${e}:${n}`,!1,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams,!0),s&&(r.authTokenProvider_=s)}function PR(r,e,n,s,l){let a=s||r.options.databaseURL;a===void 0&&(r.options.projectId||Sn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),rt("Using default host for project ",r.options.projectId),a=`${r.options.projectId}-default-rtdb.firebaseio.com`);let c=Cg(a,l),h=c.repoInfo,p;typeof process<"u"&&$m&&(p=$m[kR]),p?(a=`http://${p}?ns=${h.namespace}`,c=Cg(a,l),h=c.repoInfo):c.repoInfo.secure;const m=new FT(r.name,r.options,e);Z0("Invalid Firebase Database URL",c),ce(c.path)||Sn("Database URL must point to the root of a Firebase Database (not including a child path).");const _=OR(h,r,m,new bT(r.name,n));return new LR(_,r)}function xR(r,e){const n=ed[e];(!n||n[r.key]!==r)&&Sn(`Database ${e}(${r.repoInfo_}) has already been deleted.`),fR(r),delete n[r.key]}function OR(r,e,n,s){let l=ed[e.name];l||(l={},ed[e.name]=l);let a=l[r.toURLString()];return a&&Sn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new iR(r,RR,n,s),l[r.toURLString()]=a,a}class LR{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(sR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new sr(this._repo,_e())),this._rootInternal}_delete(){return this._rootInternal!==null&&(xR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Sn("Cannot call "+e+" on a deleted database.")}}function of(r=e_(),e){const n=fd(r,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=LA("database");s&&DR(n,...s)}return n}function DR(r,e,n,s={}){r=ht(r),r._checkNotDeleted("useEmulator"),r._instanceStarted&&Sn("Cannot call useEmulator() after instance has already been initialized.");const l=r._repoInternal;let a;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&Sn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),a=new Tl(Tl.OWNER);else if(s.mockUserToken){const c=typeof s.mockUserToken=="string"?s.mockUserToken:DA(s.mockUserToken,r.app.options.projectId);a=new Tl(c)}NR(l,e,n,a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MR(r){wT(Ii),mi(new Sr("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return PR(s,l,a,n)},"PUBLIC").setMultipleInstances(!0)),Xn(qm,Gm,r),Xn(qm,Gm,"esm2017")}wn.prototype.simpleListen=function(r,e){this.sendRequest("q",{p:r},e)};wn.prototype.echo=function(r,e){this.sendRequest("echo",{d:r},e)};MR();const bR=Zg({apiKey:"AIzaSyA7nL_3JNhwL3jQVlMktlXrznTs8KzZsu8",authDomain:"my-closet-b86ea.firebaseapp.com",projectId:"my-closet-b86ea",storageBucket:"my-closet-b86ea.firebasestorage.app",messagingSenderId:"869342760125",appId:"1:869342760125:web:b50b2865735b6c78033bd4",databaseURL:"https://my-closet-b86ea-default-rtdb.firebaseio.com/"});of();const Ar=yT(bR),FR=async(r,e,n)=>{try{return await rI(r,e,n)}catch(s){throw console.error("Login error:",s.message),s}},UR=async(r,e,n)=>{try{return await nI(r,e,n)}catch(s){throw console.error("Register error:",s.message),s}},zR=(r,e)=>{lI(r).then(()=>{console.log(r.currentUser),e("/login")}).catch(n=>{console.error("Logout error:",n.message)})},jR=()=>{const[r,e]=N.useState(""),[n,s]=N.useState(""),l=qs(),a=async c=>{c.preventDefault();try{const h=await FR(Ar,r,n);console.log("User logged in:",h.user),l("/")}catch(h){alert(h.message),console.error("Login error:",h.message)}};return W.jsxs("div",{className:"auth-form-container",children:[W.jsxs("form",{onSubmit:a,className:"login-form",children:[W.jsx("label",{htmlFor:"email",children:"Email"}),W.jsx("input",{value:r,onChange:c=>e(c.target.value),type:"text",placeholder:"Email",id:"email",name:"email"}),W.jsx("label",{htmlFor:"password",children:"Password"}),W.jsx("input",{value:n,onChange:c=>s(c.target.value),type:"password",placeholder:"Password",id:"password",name:"password"}),W.jsx("button",{type:"submit",children:"Login"})]}),W.jsx("button",{onClick:()=>l("/register"),className:"link-btn",children:"Register a new account"})]})},WR=()=>{const[r,e]=N.useState(""),[n,s]=N.useState(""),[l,a]=N.useState(""),c=qs(),h=of(),p=async m=>{m.preventDefault();try{const _=await UR(Ar,n,l);console.log("User registered:",_.user),await rf(Is(h,"users/"+_.user.uid),{username:r,email:n,categories:["Pants","Shirts","Outerwear","Sweaters","Shorts","Shoes","Accessories","Other"]}),c("/")}catch(_){alert(_.message),console.error("Register error:",_.message)}};return W.jsxs("div",{className:"auth-form-container",children:[W.jsxs("form",{onSubmit:p,className:"register-form",children:[W.jsx("label",{htmlFor:"username",children:"Username"}),W.jsx("input",{value:r,onChange:m=>e(m.target.value),type:"text",placeholder:"Username",id:"username",name:"username"}),W.jsx("label",{htmlFor:"email",children:"Email"}),W.jsx("input",{value:n,onChange:m=>s(m.target.value),type:"text",placeholder:"Email",id:"email",name:"email"}),W.jsx("label",{htmlFor:"password",children:"Password"}),W.jsx("input",{value:l,onChange:m=>a(m.target.value),type:"password",placeholder:"Password",id:"password",name:"password"}),W.jsx("button",{type:"submit",children:"Register"})]}),W.jsx("button",{onClick:()=>c("/login"),className:"link-btn",children:"Already have an account? Login here"})]})},BR=()=>{const[r,e]=N.useState(null),[n,s]=N.useState(""),[l,a]=N.useState(""),[c,h]=N.useState(""),[p,m]=N.useState([]),[_,y]=N.useState(""),[w,R]=N.useState(""),T=qw.useRef(null),P=qs(),x=of();N.useEffect(()=>{oI(Ar,q=>{if(!q)P("/login");else{const ne=q.uid,de=Is(x,"users/"+ne);TR(de,ie=>{const ye=ie.val();ye&&e(ye)})}})},[P]);const b=async q=>{q.preventDefault();let ne;n?ne=n:ne="My Clothing";let de;c?de=c:de="Other";let ie=r.categories;c==="custom"&&(ie.includes(l)||ie.push(l),de=l);const ye=_.split(",").map(je=>je.trim()).filter(je=>je.length>0);let Se;r.tags?Se=r.tags:Se=[];let Ze=[];ye.length>0&&(Se=[...Se,...ye],Se=Array.from(new Set(Se)),Ze=[...p,...ye]);let Pe;w?Pe=w:Pe="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCADIAMgDASIAAhEBAxEB/8QAHQABAAIDAAMBAAAAAAAAAAAAAAkKBQcIAgQGA//EAEAQAAEDAwMCBAIGAxEBAAAAAAABAgMEBQYHCBESIQkxQWETFBUyUVJxgSJDYhYYGSMkQlNXWHKDkZWWsbLTwf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCVMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHp3i8WnHrTWX2+3Kmt9tt8D6mrq6mVscMELGq573vdwjWoiKqqvZEQin3ceLzd6iurcI2vIylo4ldDJlNVAjpJV7orqaJ6cNT1Rz0Vf2UAlGzHPsH08tTr5nuYWXHLc1eFqrrXRUsSr9iOkciKvsnc57ynxMNmOKzyUr9XoLpNH2c22UNRUN/J6MRi/k4gXzXPs31Ivk2S5/lt2yG6Tqqvq7lVvqJOFXnpRXqvS1PRqcInkiIYECd1vi17N1k6FyXIUT7y2Z/H/AGPrcW8SrZjlU0dNFrFSW2aThEbc6Oemai+73M6E/NxX1AFonDc/wbUS1pfMBzGy5Hb3Lx8zaq+KqjRfsV0blRF9l7mfKumGZ5munV8hyXAssu2PXSBUVlXbat9PJwi89KqxU5avq1eUX1QkZ2peL9ktprqLD9zkCXS2PVsKZLRwI2pg54TrniYiJI1PNVYiL7KBLkDHY9kViy2x0OTYxd6S6Wm5wNqaOspJUkhnicnKOa5OyoZEAAAAAAAAAAAAAAAAAAAAB8Br7qWzR3RXNdTnNa6THLLU1tOx3k+oRipC1fxkVifmBFr4sO8uuzPLazbTgN1czHrBO1uRTU8vatrmLz8u5U82ROROW/fTv3aRwHs3S53C9XOrvN2rJauur55KqpqJXdT5ZXuVz3uX1VXKqqvuesABksZxq/ZlkNuxTF7VUXK73epjo6Kkgb1STzPcjWsRPdV9eyepMzta8JrSDTyw0GQa8W6LM8sljbLPQySO+jaN6pz8NrE4+MqeSud+iv3QIVAWUanabthq7d9Ez7fdPvleFRGMx6lYqc+qOaxHIvui8nCu9rwpsQgxO6anbabbUUFwtkT6urxlsjpoqmJqK5/y3UquR6JyqM5VF8k4XhAImAABIF4V28m56YahUOgOc3d8mIZXVJT2pZ38tt1xkXhjWqv1WSuVGqnl1Ki+qk0xVagnnpZ46mmmfDNC9JI5I3K1zHIvKORU7oqL35LLO2fU2XWPQHA9S6p7H1l9slNNWqzy+aa3on4/xWPA2YAAAAAAAAAAAAAAAAAABobfNpVmetO13NtPNP4G1N8r6eGampVe1nzSwzslWJHOVERzkZ25VE545VPM3yAK2E+0jdJTzSU8m3bUbrjcrHdGNVb28ovHZzY1RU90Xg8P3p26H+ztqT/tet/8yykAIjfCw2Y6q47rO/WfVvTq545bsfoporVFeaN1PUS1kqdHxGRSIj0RrFenUqIi9fYlyAAAHw2tmsGH6D6ZXzVHN61sFts1O6RI+U+JUzKnEcEaer3u4RE/FV7IqgV693GL2rC9zmp+NWONkVBR5PXfLxMThsTHyq9GInojerpRPY1IZ/UHNbtqRneQ6gX5WrccjudTdKlGry1sk0jnq1PZOrhPZEMAAJ+vC7nnm2U4K2bniF9fHH/d+blX/lVIBSxpsd0/q9Mtp+mmKXGB8FY2yR11TFInDo5KlzqhWr9ip8Xjj2A3oAAAAAAAAAAAAAAAAAAAAAAAAAcnb998No2nYdHacdjprln9+hf9F0cq9UdJH5fMzIndWov1W9upU9E5A2tuH3R6P7ZMXXItTckigqZmOWgtVOqSVtc9PSOPnnp583rw1Pt54Qg83gb2NSd22SskvSfQ+KW2VzrVYoJFdHHz2SWVf1kqp6+Sd0Q01qNqTnGrWXV2d6iZJWXy+XF/VPVVL+V49GNTyYxPJGtRET0Q+aAAHQG0/ZbqxuuySOHGbdJbcWpZ0jumQ1MapTwJ2VzI/wCll4X6qeXKKvAGc8P/AGr1+5vW+3U90tz34ZjU0VxyCZzF+HLG13LKXny5kVOFT7vUv2FgpjGRsbHG1GtaiI1qJwiInohrjQDQDTzbdp1Rac6dW34NLB/G1dXLwtRXVCp+lNK71VfRPJE4RDZIAAAAAAAAAAAAAAAAAAAAAAAAH4VtZS26jnuFbM2GnpYnTTSOXhrGNRVc5fZERVK2G53Wy67hNccq1SuM0roLnXPZbYnqv8noI1VtPGienDERV/ac5fUno3tZa/Cdpmqd/iqVp5Uxuqoo5Wu6XNfUolO1UVPJeZU49yuKAAOyfC0282vW/cRHfspt7KywYLC28TwSs6o56rq4p2OReytRyK9U9elOeyqBvLYz4VjMsttt1Z3K0NTBbqpjaq34squilnjVOWvqlThzEVO/w04dxxzx5ErmPY5YMRstHjeLWWitFqt8SQ0tFRQNhhhYnk1rGoiIhkQAAAAAAAAAAAAAAAAAAAAAAAAAAAHLHid1DoNk2oTE/XNoI1/D52Ff/hX+LIu7zRS6bhdvOXaU2K4Q0d0u1PG+hlnVUiWeKVsrGvVO6NcrOlV9OefQhkqfC/3rwVEkDNIknbG5WpJHd6PoeiL5pzKi8L7ogHKpLh4IdpjZhWpd7VjfiS3Oipmu9elInKqf5qca/wAGJvZ/qbk/1ai/9SUfw2drGcbX9Irrb9R300V/yS4NrpqKnlSVtIxrOlrHPTsru6qvHKJ9qgddgAAAAAAAAAAAAAAAAAAAAAAAAAAAAB6d1vFosVG+43u60dvpI/rz1U7Yo2/i5yoiGlt4+6Gx7UdHqvPqyljr7zVyfI2S3Pk6Uqapyc8u9ehifpO49k9SAzWfXvVjX/KJcs1UzCtvFS57nQU7pFbS0jVX6kEKL0xt9Oycrx3VV7gWTMczrCMxR64jmNjvaRfX+jbhDU9P4/DcvBnCrRj2SZDiV4pshxa+V9nulG/4lPWUNQ+CeJ32texUVPyUmW8NLf1eNfmyaNau1rJ81ttKtRQXLoRi3SnZwj/iInb4reUVVTjqTvx2UCQEAAAAAAAAAAAAAAAAAAAAAAAAAAAABE1431yuf7oNMbQr3/R/yddUo3+b8brY3n8eki8J6/Eq2pXncvozDV4PSfM5hiEz663UqORq1sTm8SwIq9upURFbz2VU49SBuvoK6111RbLnRz0lZSSvgqKeeNY5YZWKrXMe13CtcioqKipyioB+Bv3YRcLrbN4mlVRZ0cs779HA9Gr5wyMeyX8kjc9fyNBEm/hJ7Pcjqcuptzud2iaitNvhlZjMdRGrXVc0jVY6pai/q2sVzWr5Krl48gJcQAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0drZsq22bgLk6/ajab0c16eiNfdaJ7qWrkRE4TrfGqfE4ROE60dwnkbxAHLGCeGXs6wO7R3qDTBL3PC7qjZfKp9ZCi+8TuI3/g5qodSQww00LKeniZFFE1GMYxqNa1qJwiIidkRE9DzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/9k=";try{await CR(Is(x,"users/"+Ar.currentUser.uid),{categories:ie,tags:Se}),await AR(Is(x,"users/"+Ar.currentUser.uid+"/clothings"),{name:ne,category:de,tags:Ze,img:Pe})}catch(je){alert(je.message),console.error("Error:",je.message)}},z=()=>{T.current.click()},X=async q=>{const ne=q.target.files[0];ne?R(await re(ne)):alert("Please upload a file")};async function re(q){return new Promise((ne,de)=>{if(!q||!q.type.startsWith("image/")){de(new Error("Invalid image file"));return}const ie=new Image,ye=new FileReader;ye.onload=Se=>{ie.src=Se.target.result},ie.onload=()=>{const Se=document.createElement("canvas"),Ze=Se.getContext("2d"),Pe=200;Se.width=Pe,Se.height=Pe;const je=Math.min(Pe/ie.width,Pe/ie.height),At=ie.width*je,et=ie.height*je,xe=(Pe-At)/2,j=(Pe-et)/2;Ze.fillStyle="white",Ze.fillRect(0,0,Se.width,Se.height),Ze.drawImage(ie,xe,j,At,et),Se.toBlob(J=>{const V=new FileReader;V.onload=S=>{ne(S.target.result)},V.readAsDataURL(J)},"image/jpeg")},ie.onerror=()=>de(new Error("Failed to load image")),ye.readAsDataURL(q)})}async function ge(q){try{await SR(Is(x,"users/"+Ar.currentUser.uid+"/clothings/"+q))}catch(ne){alert(ne.message),console.error("Error:",ne.message)}}return W.jsxs("div",{className:"clothing-form-container",children:[W.jsxs("form",{onSubmit:b,className:"clothing-form",children:[W.jsx("label",{htmlFor:"clothingName",children:"Clothing Name"}),W.jsx("input",{value:n,onChange:q=>s(q.target.value),type:"text",placeholder:"Clothing Name",id:"clothingName",name:"clothingName"}),W.jsx("label",{htmlFor:"category",children:"Category"}),W.jsxs("select",{value:c,onChange:q=>h(q.target.value),id:"category",name:"category",children:[W.jsx("option",{value:"",disabled:!0,children:"Select a category"}),r&&r.categories&&r.categories.map((q,ne)=>W.jsx("option",{value:q,children:q},ne)),W.jsx("option",{value:"custom",children:"Custom Category"})]}),c==="custom"&&W.jsxs("div",{children:[W.jsx("label",{htmlFor:"customCategory",children:"Custom Category"}),W.jsx("input",{value:l,onChange:q=>a(q.target.value),type:"text",placeholder:"Enter custom category",id:"customCategory",name:"customCategory"})]}),W.jsx("label",{htmlFor:"tags",children:"Tags (Hold Ctrl / Cmd to select multiple)"}),W.jsx("select",{multiple:!0,value:p,onChange:q=>{const ne=Array.from(q.target.selectedOptions,de=>de.value);m(ne)},id:"tags",name:"tags",children:r&&r.tags&&r.tags.map((q,ne)=>W.jsx("option",{value:q,children:q},ne))}),W.jsx("label",{htmlFor:"tags",children:"Add new tags (Comma seperated)"}),W.jsx("input",{value:_,onChange:q=>y(q.target.value),type:"text",placeholder:"New Tags",id:"newTags",name:"newTags"}),W.jsx("button",{id:"imgInsert",type:"button",onClick:z,children:"Insert Image"}),W.jsx("input",{onChange:X,type:"file",id:"img",name:"img",style:{display:"none"},ref:T,accept:"image/*"}),w&&W.jsxs("div",{children:[W.jsx("p",{children:"Preview:"}),W.jsx("img",{src:w,alt:"Uploaded Preview",style:{maxWidth:"100%"}})]}),W.jsx("button",{id:"create-clothing",type:"submit",children:"Create Clothing"})]}),W.jsxs("div",{className:"clothings-display",children:[W.jsx("h1",{children:"My Clothes"}),W.jsx("div",{className:"clothing-list",children:r&&r.clothings?Object.keys(r.clothings).map(q=>W.jsxs("div",{id:q,className:"clothing-box",children:[W.jsx("strong",{children:r.clothings[q].name})," -"," ",r.clothings[q].category,W.jsx("br",{}),W.jsxs("p",{children:["Tags:"," ",r.clothings[q].tags?r.clothings[q].tags.join(", "):"No tags"]}),W.jsx("br",{}),W.jsx("img",{src:r.clothings[q].img,alt:"Uploaded Preview",style:{maxWidth:"100%"}}),W.jsx("br",{}),W.jsx("button",{onClick:()=>ge(q),className:"delete-clothing",children:"Delete"})]})):W.jsx("p",{style:{fontSize:"3rem",textAlign:"center",marginTop:"2rem"},children:"Your closet is empty!"})})]})]})},VR=()=>W.jsx("h1",{children:"404 - Page Not Found"}),HR=()=>{const r=qs(),e=()=>{zR(Ar,r)};return W.jsxs("div",{children:[W.jsxs("div",{id:"navbar",children:[W.jsx("h1",{id:"title",children:"My Closet"}),W.jsx("h2",{id:"logout",onClick:e,children:"Logout"})]}),W.jsx(VE,{})]})};function $R(){return W.jsx("div",{className:"App",children:W.jsx(mA,{children:W.jsx($E,{children:W.jsxs(si,{path:"/",element:W.jsx(HR,{}),children:[W.jsx(si,{index:!0,element:W.jsx(BR,{})}),W.jsx(si,{path:"login",element:W.jsx(jR,{})}),W.jsx(si,{path:"register",element:W.jsx(WR,{})}),W.jsx(si,{path:"*",element:W.jsx(VR,{})})]})})})})}Jw.createRoot(document.getElementById("root")).render(W.jsx(N.StrictMode,{children:W.jsx($R,{})}));
